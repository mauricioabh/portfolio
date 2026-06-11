# Production Skills — CV Impact Stack

Master plan for production practices across the six CV apps. **Linear** is the execution backlog; this doc is the reference map.

**Linear project:** [Production Skills — CV Impact Stack](https://linear.app/wayool/project/production-skills-cv-impact-stack-9837e285d1f6) (team **Wayool**, 25 issues WAY-5–WAY-32)  
**Issues reference:** [linear-issues.md](./linear-issues.md)  
**Branch policy:** [repo-branches.md](./repo-branches.md) — `dev` if present, else `main` / `master`; no new branches; no push until local QA

---

## CV apps (priority)

| # | App | Repo | Stack highlights |
|---|-----|------|------------------|
| 1 | Watchily-ho | `watchily-ho` | Supabase RLS, 3 clients, 21 API routes |
| 2 | Arb Pulse | `arbpulse` | Express, WebSocket, OpenAPI (→ Zod+Scalar) |
| 3 | CRT Líneas | `crt-lineas` | Playwright, Clerk roles, Neon |
| 4 | Health-erino | `health-erino` | Gemini tool-calling, Neon (no RLS) |
| 5 | Live Countdown Fortnite | `fortnite-live-countdown` | Turborepo, cron, Zod ingest |
| 6 | Env-ironmint | `env-ironmint` | NPM CLI, Jest, OSS |

---

## Key decisions

| Topic | Decision |
|-------|----------|
| API docs | **Zod** → `@asteasolutions/zod-to-openapi` → **Scalar** at `/api-docs` |
| Arb Pulse | Refactor from hand-written OpenAPI + Swagger UI (piloto) |
| RLS audit | **Watchily only** (Supabase policies in `supabase/migrations/`) |
| Neon apps | **API authorization tests** (Clerk), not Postgres RLS |
| Observability | Sentry (5 apps), Langfuse (Health-erino), OTel (Arb Pulse), Pino (Arb Pulse, CRT) |
| Jobs | Inngest: CRT, Health-erino, Watchily |
| Cache | Upstash: Arb Pulse, Watchily |
| DX | Husky + lint-staged on all CV repos |
| Skip | tRPC, Vitest+MSW, Kafka |

---

## Milestones

| Milestone | Weeks | Focus |
|-----------|-------|-------|
| **M0** Foundation | 1 | Husky, Sentry org, conventions |

**Sentry manual setup:** [sentry-projects.md](./sentry-projects.md) — create 5 projects and paste DSNs locally only.
| **M1** API contracts | 2–3 | Zod+Scalar (Arb Pulse → Watchily → CRT) |
| **M2** Observability | 3–4 | Sentry, Pino, OTel, Langfuse |
| **M3** Async + resilience | 4–5 | Inngest, Upstash |
| **M4** Security + data | 5–6 | RLS audit, auth audit, CodeQL, Neon branching |
| **M5** CI + CV polish | 6–7 | Playwright smoke, CV bullets |

**Critical path:** M0 → Arb Pulse M1 → Watchily M1+M4 RLS → Health-erino Langfuse → M5 CV.

---

## Matrix: app × technology

| App | Scalar | Sentry | Inngest | Langfuse | Upstash | OTel | Pino | RLS/Auth tests | Husky | Playwright CI |
|-----|:------:|:------:|:-------:|:--------:|:-------:|:----:|:----:|:--------------:|:-----:|:-------------:|
| Watchily | ✅ | ✅ | ✅ | — | ✅ | — | — | RLS | ✅ | ✅ |
| Arb Pulse | ✅ piloto | ✅ | — | — | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| CRT Líneas | ✅ | ✅ | ✅ | — | ⚪ | — | ✅ | Auth | ✅ | — |
| Health-erino | ⚪ | ✅ | ✅ | ✅ | — | — | — | Auth | ✅ | ⚪ |
| Fortnite | — | ✅ | — | — | — | — | — | Favorites | ✅ | ✅ exists |
| Env-ironmint | — | — | — | — | — | — | — | — | ✅ | CI doc |

---

## Per-app checklist

Update `[ ]` → `[x]` when done. **README + `.env.example` must be updated in the same commit** (see user rule `readme-before-commit`).

### Watchily-ho
- [x] Husky + lint-staged (M0 — local QA pending)
- [ ] Sentry (web + Expo tags)
- [x] Zod + OpenAPI + Scalar (`/api-docs`) (M1 — local QA pending)
- [x] Inngest or Supabase Queues (watchlist refresh) (M3 — local QA pending)
- [x] Upstash rate limit (search) (M3 — local QA pending)
- [x] RLS integration tests in CI
- [x] CodeQL
- [ ] Playwright smoke (login → search → list)
- [x] README Production practices (M0)

### Arb Pulse
- [x] Husky + lint-staged (M0 — local QA pending)
- [x] Refactor: Zod + zod-to-openapi + Scalar (M1 — local QA pending)
- [ ] Sentry
- [ ] Pino + correlation IDs
- [ ] OpenTelemetry → Sentry
- [x] Upstash rate limit + cache (M3 — local QA pending)
- [x] CodeQL
- [ ] Playwright smoke (dashboard + SSE)
- [ ] README Production practices

### CRT Líneas
- [x] Husky + lint-staged (pre-existing; M0 Sentry docs)
- [x] Zod + OpenAPI + Scalar (M1 — local QA pending)
- [x] Sentry (M2 — local QA pending)
- [ ] Pino + jobId (with Inngest)
- [x] Inngest bulk Playwright jobs (M3 — local QA pending)
- [x] API authorization tests
- [x] CodeQL (extend existing)
- [x] README Production practices

### Health-erino
- [x] Husky + lint-staged (M0 — local QA pending)
- [x] Sentry (M2 — local QA pending)
- [x] Inngest Sheets → Neon sync (M3 — local QA pending)
- [x] Langfuse (voice → Gemini → tools) (M2 — local QA pending)
- [x] API authorization tests
- [x] Neon branching (GitHub integration)
- [x] README Production practices

### Live Countdown Fortnite
- [x] Husky + lint-staged (M0 — local QA pending)
- [x] Sentry (cron failures) (M2 — local QA pending)
- [ ] Favorites isolation test
- [ ] Neon branching (optional)
- [ ] Document existing Playwright E2E in README/CV
- [ ] README Production practices

### Env-ironmint
- [ ] Husky + lint-staged
- [x] Dependabot
- [ ] GitHub Actions example (`npx env-ironmint` in CI)
- [ ] README Production practices / CI section

### Portfolio / CV (M5)
- [ ] Update `src/data/project-details.ts` bullets
- [ ] Update external CV text

### Portfolio docs (M3)
- [x] Reusable Inngest pattern doc (`docs/inngest-pattern.md`) (M3 — local QA pending)

---

## CV bullets (draft — apply after M5)

**Watchily-ho:** Zod-validated OpenAPI (Scalar); RLS policies tested in CI; Sentry across web/mobile/TV; async jobs; Upstash rate limiting.

**Arb Pulse:** Contract-first API (Zod → OpenAPI → Scalar); Sentry + OpenTelemetry tracing; structured logging; Upstash rate limit.

**CRT Líneas:** OpenAPI-documented monitor API; Inngest durable Playwright jobs; API authorization tests; CodeQL.

**Health-erino:** Langfuse LLM tracing for voice tool-calling; Inngest background sync; API authorization tests; Neon preview branches.

**Fortnite:** Zod-validated ingestion; Sentry on cron failures; Playwright E2E in CI.

**Env-ironmint:** Husky pre-commit; documented CI integration; Dependabot.

---

## Documentation layers

| Layer | Location |
|-------|----------|
| Execution | Linear project + issues |
| Master plan | This file |
| Per-repo evidence | Each repo `README.md` → `## Production practices` |
| CV | PDF/LinkedIn + `project-details.ts` |
| Agent rules | `~/.cursor/rules/readme-before-commit.mdc` |

---

## Execution order (weeks)

1. **W1:** M0 — Husky all repos, Sentry setup  
2. **W2:** Arb Pulse Zod+Scalar refactor  
3. **W3:** Watchily OpenAPI + Sentry  
4. **W4:** Watchily RLS audit + Health-erino Langfuse + CRT Sentry  
5. **W5:** Inngest (CRT, Health-erino, Watchily) + Upstash Arb Pulse  
6. **W6:** Auth audits + Playwright smokes + Neon branching  
7. **W7:** CV bullets + CRT OpenAPI + OTel Arb Pulse  

---

*Last updated: 2026-06-11*
