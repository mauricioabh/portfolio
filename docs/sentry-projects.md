# Sentry projects — setup (M0 / WAY-7)

Org: **[mauricio-barragan](https://mauricio-barragan.sentry.io)** · region `https://us.sentry.io` · team `mauricio-barragan`

Create these projects (one DSN per app). Do **not** commit real DSN values — each repo documents `SENTRY_DSN=` in `.env.example`.

| Sentry project name | Platform | Repo | Env file | Web Vitals |
|---------------------|----------|------|----------|------------|
| `watchily-ho` | Next.js (+ Expo mobile) | [watchily-ho](https://github.com/mauricioabh/watchily-ho) | `.env.example` (root) | ✅ `browserTracingIntegration` |
| `arbpulse` | Node.js | [arbpulse](https://github.com/mauricioabh/arbpulse) | `.env.example` | — (API only) |
| `crt-lineas` | Next.js | [crt-lineas](https://github.com/mauricioabh/crt-lineas) | `.env.example` | ✅ |
| `health-erino` | Next.js | [health-erino](https://github.com/mauricioabh/health-erino) | `web/.env.example` | ✅ |
| `fortnite-live-countdown` | Next.js | [fortnite-live-countdown](https://github.com/mauricioabh/fortnite-live-countdown) | `apps/web/.env.example` | ✅ |
| `portfolio` | Next.js | [portfolio](https://github.com/mauricioabh/portfolio) | `.env.example` | ✅ |
| `wayool` | Next.js | [wayool](https://github.com/mauricioabh/wayool) | `.env.example` | ✅ |
| `beatstack` | Next.js | [beatstack](https://github.com/mauricioabh/beatstack) | `.env.example` | ✅ |
| `mangatrack` | Next.js | [mangatrack](https://github.com/mauricioabh/mangatrack) | `.env.example` | ✅ (project may already exist) |

## Verified via Sentry MCP (2026-06-11)

- Org access: OK (`find_organizations`)
- Existing projects (unrelated): `javascript-nextjs`, `labby-dabby`, `mangatrack`
- **CV projects above: created** (see checklist below)
- `create_project` via MCP: **403** — *"Your organization has disabled this feature for members"*

### Unblock MCP / API project creation (optional)

In Sentry: **Settings → Organization → General** (or **Members** / role permissions) and allow **members to create projects**, or create projects as org **Owner** in the UI.

### Manual UI steps (works today)

1. Open [mauricio-barragan.sentry.io](https://mauricio-barragan.sentry.io)
2. **Projects → Create Project** for each row in the table (match slug/name)
3. Copy DSN → paste into local `.env.local` only (never git)
4. Smoke test: `GET /api/debug/sentry` (or equivalent) per repo README

After projects exist, the agent can run `find_dsns` via Sentry MCP to list DSNs (read-only).

## Sentry probe verification

After `SENTRY_DSN` is in each repo’s `.env.local`:

```powershell
# All five apps (starts dev servers sequentially)
powershell -ExecutionPolicy Bypass -File scripts/verify-sentry-probes.ps1
```

Per repo:

| Repo | Command | Probe URL |
|------|---------|-----------|
| watchily-ho | `npm run test:observability` | `/api/debug/sentry` |
| arbpulse | `npm run test:observability` | `/api/debug/sentry` |
| crt-lineas | `npm run test:observability` (dev running) | `/api/debug/sentry` |
| health-erino | `cd web && npm run test:observability` | `/api/debug/sentry` |
| fortnite | `cd apps/web && npm run test:observability` | `/api/debug/sentry` |

Probes are disabled only when `VERCEL_ENV=production`. Clerk-protected apps expose `/api/debug/sentry` as a public route.

## Checklist

- [x] Confirm org / team access
- [x] Create project `watchily-ho`
- [x] Create project `arbpulse`
- [x] Create project `crt-lineas`
- [x] Create project `health-erino`
- [x] Create project `fortnite-live-countdown`
- [ ] Create project `portfolio` (if missing)
- [ ] Create project `wayool` (if missing)
- [ ] Create project `beatstack` (if missing)
- [ ] Reuse or verify project `mangatrack`
- [x] Paste DSNs into local `.env` / `.env.local` only (never git) — verified locally (2026-06-12)
- [ ] Resolve test issues in Sentry UI after QA (optional)

See also: [production-skills-roadmap.md](./production-skills-roadmap.md) M0 Foundation.
