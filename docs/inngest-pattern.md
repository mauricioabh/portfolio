# Inngest pattern — Next.js App Router

Reusable setup for CV apps (CRT Líneas, Health-erino, Watchily-ho). Copy the file layout; change the `id` and event names per app.

## Dependencies

```bash
npm install inngest
```

## Environment

Add to `.env.example` (values from [Inngest dashboard](https://app.inngest.com) or Vercel integration):

```env
# Inngest — background jobs (https://www.inngest.com/docs/deploy/vercel)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
# Local dev: run `npx inngest-cli@latest dev` and point at http://localhost:3000/api/inngest
```

| Variable | Purpose |
|----------|---------|
| `INNGEST_EVENT_KEY` | Send events from API routes (`inngest.send`) |
| `INNGEST_SIGNING_KEY` | Verify requests to `/api/inngest` in production |

When both are unset, apps may fall back to inline/synchronous behavior (see per-app README).

## File layout

```
src/
  inngest/
    client.ts          # Inngest client + typed events
    functions/
      index.ts         # export all functions
      *.ts             # one file per domain (monitor, sync, watchlist)
  app/
    api/
      inngest/
        route.ts       # serve() handler
```

## Client

```typescript
// src/inngest/client.ts
import { Inngest, EventSchemas } from "inngest";

type Events = {
  "app/example.started": { data: { jobId: string; userId: string } };
  "app/example.step": { data: { jobId: string; itemId: string } };
};

export const inngest = new Inngest({
  id: "your-app-slug",
  schemas: new EventSchemas().fromRecord<Events>(),
});
```

Use a **unique** `id` per deployed app (e.g. `crt-lineas`, `health-erino`, `watchily-ho`).

## Serve handler (App Router)

```typescript
// src/app/api/inngest/route.ts
import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { functions } from "@/inngest/functions";

export const runtime = "nodejs";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions,
});
```

`serve()` registers the app with Inngest Cloud and exposes the execution endpoint Vercel calls.

## Function patterns

### Cron (scheduled)

```typescript
// src/inngest/functions/sync-cron.ts
import { inngest } from "../client";
import { runSheetsToNeonSync } from "@/lib/sync/sheets-to-neon";

export const syncSheetsCron = inngest.createFunction(
  { id: "sync-sheets-cron", name: "Sheets → Neon sync" },
  { cron: "0 */6 * * *" }, // every 6 hours UTC
  async ({ step }) => {
    const result = await step.run("sync", () => runSheetsToNeonSync());
    return result;
  },
);
```

Cron functions have **no Clerk session** — load secrets from env / DB inside `step.run`, not from the HTTP request.

### Fan-out with per-item retries

```typescript
// src/inngest/functions/bulk-start.ts
import { inngest } from "../client";

export const bulkStart = inngest.createFunction(
  { id: "bulk-start" },
  { event: "monitor/bulk.started" },
  async ({ event, step }) => {
    const { jobId, userId } = event.data;
    const items = await step.run("load-items", () => loadPendingItems(jobId));

    if (items.length === 0) return { jobId, dispatched: 0 };

    await step.sendEvent(
      "fan-out",
      items.map((item) => ({
        name: "monitor/link.verify" as const,
        data: { jobId, userId, itemId: item.id, linkId: item.linkId, index: item.index },
      })),
    );

    await step.run("mark-running", () => markJobRunning(jobId));
    return { jobId, dispatched: items.length };
  },
);

export const linkVerify = inngest.createFunction(
  {
    id: "link-verify",
    retries: 2, // Inngest retries transient failures per link
  },
  { event: "monitor/link.verify" },
  async ({ event, step }) => {
    const { jobId, userId, itemId, linkId, index } = event.data;

    const cancelled = await step.run("check-cancelled", () => isJobCancelled(jobId));
    if (cancelled) return { skipped: true };

    const result = await step.run("verify-link", () =>
      verifyLinkWithPlaywright({ userId, linkId, jobId }),
    );

    await step.run("persist-item", () =>
      updateJobItem(itemId, result),
    );

    return result;
  },
);
```

**Retry policy:** use Inngest `retries` for transient errors (network, timeout). Do **not** retry permanent failures — throw a non-retriable error or catch and mark item failed without rethrowing.

### Emit from API route

```typescript
import { inngest } from "@/inngest/client";

await inngest.send({
  name: "monitor/bulk.started",
  data: { jobId, userId },
});
```

Guard with env check if you support offline fallback:

```typescript
const inngestEnabled =
  Boolean(process.env.INNGEST_EVENT_KEY) && Boolean(process.env.INNGEST_SIGNING_KEY);
```

## SSE progress (decoupled from job execution)

Long HTTP handlers (Playwright bulk) should not hold the connection for the full run.

1. **POST** creates a job row in Neon/Postgres and enqueues Inngest.
2. **Same POST** (or **GET `/api/jobs/[id]/events`**) returns `text/event-stream` that **polls** job item rows every ~500ms.
3. Reuse the same SSE JSON shapes the UI already parses (`start`, `item_start`, `item`, `done`, `fatal`).
4. Inngest workers update rows; the SSE loop emits when `updatedAt` changes.

Client disconnect only stops the SSE stream — the Inngest job continues unless the user explicitly cancels (set `cancelled` on the job row; workers check before each item).

## Local development

```bash
# Terminal 1
npm run dev

# Terminal 2
npx inngest-cli@latest dev -u http://localhost:3000/api/inngest
```

The dev server discovers functions from `serve()` and runs them locally.

## Vercel production

1. Install [Inngest Vercel integration](https://www.inngest.com/docs/deploy/vercel) (sets `INNGEST_*` automatically), **or** paste keys manually.
2. Ensure `/api/inngest` is not behind auth middleware (Inngest signs requests).
3. Set `maxDuration` on heavy routes if needed (`export const maxDuration = 300` for Playwright steps).

## Checklist (per app)

- [ ] `inngest` in `package.json`
- [ ] `src/inngest/client.ts` with typed events
- [ ] `src/app/api/inngest/route.ts` with `serve()`
- [ ] Functions exported from `src/inngest/functions/index.ts`
- [ ] Shared business logic extracted from API routes (callable from cron + manual POST)
- [ ] `INNGEST_*` in `.env.example`
- [ ] README **Production practices** bullet
- [ ] Job/progress persistence if UI needs SSE or status pages

## Apps using this pattern

| App | Events / cron | Notes |
|-----|---------------|-------|
| **crt-lineas** | `monitor/bulk.started`, `monitor/link.verify` | Playwright bulk; SSE polls `MonitorBulkJob` |
| **health-erino** | Cron `sync-sheets-cron` | Google Sheets CSV → Neon; shared `runSheetsToNeonSync()` |
| **watchily-ho** | `watchlist/refresh`, `watchlist/item.added` | Watchmode cache refresh; Supabase Queues doc as alternative |

See [production-skills-roadmap.md](./production-skills-roadmap.md) for milestone status.
