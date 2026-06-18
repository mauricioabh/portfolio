# Production Skills — QA local (seguimiento)

Checklist para validar **M0–M5** antes de push/PR. Commits ya hechos en local; **no push** hasta marcar QA aquí y en Linear.

**Referencias:** [production-skills-roadmap.md](./production-skills-roadmap.md) · [linear-issues.md](./linear-issues.md) · [repo-branches.md](./repo-branches.md) · [sentry-projects.md](./sentry-projects.md)

**Linear:** [Production Skills — CV Impact Stack](https://linear.app/wayool/project/production-skills-cv-impact-stack-9837e285d1f6) (WAY-5–WAY-32)

---

## Leyenda

| Símbolo | Significado |
|---------|-------------|
| ⬜ | Pendiente |
| 🔄 | En curso |
| ✅ | Revisado (QA local OK) |
| ⏭️ | Omitido / opcional |
| 🔑 | Requiere secrets en `.env.local` |

---

## Resumen por milestone

| Milestone | Enfoque | Estado QA |
|-----------|---------|-----------|
| **M0** Foundation | Husky, Sentry org, convenciones | ✅ **Revisado** |
| **M1** API contracts | Zod + Scalar `/api-docs` | ✅ **Revisado** |
| **M2** Observability | Sentry, Pino, OTel, Langfuse | 🔄 En curso (Sentry + Langfuse OK; Pino/OTel pendiente) |
| **M3** Async | Inngest, Upstash | ✅ **Revisado** (local dev; Inngest Cloud prod pendiente) |
| **M4** Security | RLS, auth tests, CodeQL, Dependabot | ⬜ **Siguiente** |
| **M5** CI + CV | Playwright, env-ironmint, bullets | ✅ **Revisado** |

---

## Parte A — Orden de revisión (más fácil → más pesado)

Haz los pasos en este orden. Los de arriba no dependen de secrets externos; los de abajo sí.

### Nivel 1 — Rápido (minutos, sin secrets)

| # | Qué | Repo | Comando / acción | Estado |
|---|-----|------|------------------|--------|
| 1 | Scalar API docs | **arbpulse** | `npm run dev` → abrir `http://localhost:8080/api-docs` | ✅ M1 |
| 2 | Scalar API docs | **watchily-ho** | `npm run dev` → `http://localhost:3000/api-docs` | ✅ M1 |
| 3 | Scalar API docs | **crt-lineas** | `npm run dev` → `http://localhost:3000/api-docs` | ✅ M1 |
| 4 | env-ironmint tests | **env-ironmint** | `npm run build && npm run test:ci` (15 tests Jest) | ✅ M5 |
| 5 | Portfolio docs | **portfolio** | Revisar `docs/sentry-projects.md`, `scripts/verify-sentry-probes.ps1`, `scripts/verify-upstash-rate-limit.ps1` existen | ✅ |

### Nivel 2 — Servidor local + HTTP (sin login complejo)

| # | Qué | Repo | Comando / acción | Estado |
|---|-----|------|------------------|--------|
| 6 | Sentry probe | **5 apps** | `powershell -File scripts/verify-sentry-probes.ps1` (desde portfolio) o `npm run test:observability` por repo | ✅ M2 (4/5 script; fortnite timeout Windows — ver nota) |
| 7 | Playwright smoke | **watchily-ho** | `npm run test:observability` o `npm run test:e2e` (landing sin login) | ✅ M5 |
| 8 | Playwright smoke | **arbpulse** | `DEMO_MODE=true npm start` + `npm run test:e2e` | ✅ M5 |
| 9 | Playwright E2E | **fortnite** | `npx turbo run build --filter=web` → `cd apps/web && npm run start` → `$env:CI=1; npm run test:e2e` | ✅ M5 |

### Nivel 3 — Tests automatizados (Vitest/Jest, sin infra extra)

| # | Qué | Repo | Comando | Estado |
|---|-----|------|---------|--------|
| 10 | Auth API tests | **crt-lineas** | `npm run test:auth` | ✅ M4 (5/5) |
| 11 | Auth API tests | **health-erino** | `cd web && npm run test:auth` | ✅ M4 (7/7) |
| 12 | CodeQL / CI | watchily-ho, health-erino, arbpulse | Revisar que `.github/workflows/codeql.yml` existe; opcional push para ver verde | ✅ M4 |

### Nivel 4 — Infra local (Supabase CLI, builds largos)

| # | Qué | Repo | Comando / requisito | Estado |
|---|-----|------|---------------------|--------|
| 13 | RLS isolation | **watchily-ho** | **CI:** push/PR → check **RLS Tests** (`.github/workflows/rls.yml`). Local opcional: Docker + `supabase start` → `npm run test:rls` | 🔄 M4 (validar en CI; local omitido — Docker) |
| 14 | Fortnite build fix | **fortnite** | Si `next build` se cuelga: `outputFileTracingRoot` ya en `apps/web/next.config.ts` | ✅ (build OK en sesión) |

### Nivel 5 — Secrets obligatorios 🔑

| # | Qué | Repos | Secrets | Estado |
|---|-----|-------|---------|--------|
| 15 | Upstash rate limit | watchily, arbpulse | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | ✅ M3 (`npm run test:rate-limit` o `scripts/verify-upstash-rate-limit.ps1`) |
| 16 | Inngest jobs | watchily, crt, health | `INNGEST_DEV=1`, `INNGEST_EVENT_KEY`, `INNGEST_SIGNING_KEY` + `npx inngest-cli dev` | ✅ M3 🔑 |
| 17 | Langfuse LLM traces | health-erino | `LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_BASE_URL` | ✅ M2 🔑 |
| 18 | Clerk E2E (CI real) | fortnite | `CLERK_E2E_USER_*` + Clerk keys en GitHub Actions | ✅ M5 🔑 (6 tests: guest 401, Clerk signIn + favorites 200; workflow `e2e.yml` en PR) |

### Nivel 6 — Manual / opcional

| # | Qué | Acción | Estado |
|---|-----|--------|--------|
| 19 | Pino / OTel | **arbpulse** — logs estructurados + trace en Sentry | ⬜ M2 |
| 20 | Inngest doc | **portfolio** — `docs/inngest-pattern.md` legible | ✅ M3 |
| 21 | CV bullets | **portfolio** — `src/data/project-details.ts` + PDF CV | ⬜ M5 |
| 22 | Neon preview branches | health / fortnite — doc en README | ⏭️ opcional M4 |

---

## Parte B — Por milestone (M0 → M5)

### M0 — Foundation ✅ Revisado

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| Husky + lint-staged | watchily, fortnite, health, arbpulse, crt, env-ironmint | `git commit` dispara lint-staged en `.ts` staged | ✅ |
| Sentry projects + DSN local | 5 apps | [sentry-projects.md](./sentry-projects.md) checklist; DSN en `.env.local` | ✅ |
| README Production practices | cada repo | Sección `## Production practices` presente | ✅ |

**Linear:** WAY-5, WAY-7, WAY-8

---

### M1 — API contracts ✅ Revisado

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| Zod + Scalar piloto | **arbpulse** | `/api-docs` carga; rutas documentadas | ✅ |
| OpenAPI + Scalar | **watchily-ho** | `/api-docs` carga | ✅ |
| OpenAPI + Scalar | **crt-lineas** | `/api-docs` carga | ✅ |

**Comandos rápidos:**

```powershell
# arbpulse (puerto 8080)
cd C:\Projects\arbpulse
npm run dev
# → http://localhost:8080/api-docs

# watchily-ho
cd C:\Projects\watchily-ho
npm run dev
# → http://localhost:3000/api-docs

# crt-lineas
cd C:\Projects\crt-lineas
npm run dev
# → http://localhost:3000/api-docs
```

**Linear:** WAY-6, WAY-9, WAY-10

---

### M2 — Observability 🔄 En curso

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| Sentry + probe | watchily, arbpulse, crt, health, fortnite | `npm run test:observability` o script portfolio | ✅ (4/5 script 2026-06-12; fortnite: build+start en Windows) |
| Sentry ingest | org mauricio-barragan | Issues WATCHILY-HO-1, ARBPULSE-1, etc. ignorados tras probe | ✅ (MCP 2026-06-12 — 5/5 probes ignored) |
| Pino + correlation | **arbpulse** | Logs JSON en consola; `X-Request-Id` en respuestas | ⬜ |
| OpenTelemetry | **arbpulse** | Traces visibles en Sentry (si configurado) | ⬜ |
| Langfuse | **health-erino** | `/admin` chat → trace `voice-chat-session` en us.cloud.langfuse.com 🔑 | ✅ |

**Linear:** WAY-11, WAY-12, WAY-13, WAY-14, WAY-16, WAY-17

---

### M3 — Async + resilience ✅ Revisado (local dev)

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| Inngest dev + functions | **watchily-ho** | `npx inngest-cli dev` + evento `watchlist/item.added` 🔑 | ✅ |
| Inngest bulk Playwright | **crt-lineas** | `/api/inngest` + `monitor-bulk-start` (Neon; `db:push` previo) 🔑 | ✅ |
| Inngest Sheets sync | **health-erino** | `sync-sheets-manual` vía dev server `:8288` 🔑 | ✅ |
| Upstash rate limit | **watchily-ho** | `npm run test:rate-limit` (20 req/min/user) | ✅ |
| Upstash cache/limit | **arbpulse** | `npm run test:rate-limit` (60 GET/min/IP → 429) | ✅ |
| Patrón doc | **portfolio** | `docs/inngest-pattern.md` | ✅ |

**Linear:** WAY-15, WAY-18, WAY-19, WAY-20, WAY-21

---

### M4 — Security + data ⬜ Siguiente (continuar aquí)

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| RLS integration tests | **watchily-ho** | GitHub Actions **RLS Tests** en push/PR a `main` (≥11 casos Vitest) | 🔄 (CI; local omitido) |
| API auth tests | **crt-lineas** | `npm run test:auth` | ✅ (5/5) |
| API auth tests | **health-erino** | `cd web && npm run test:auth` | ✅ (7/7) |
| CodeQL | watchily, health, arbpulse | Workflow en `.github/workflows/` | ✅ |
| Dependabot | 6 repos + portfolio | `.github/dependabot.yml` | ⬜ |
| Neon branching | health / fortnite | Doc en README (opcional) | ⏭️ |

**Comandos M4 (orden sugerido):**

```powershell
# 1 — Auth tests (sin Supabase)
cd C:\Projects\crt-lineas
npm run test:auth

cd C:\Projects\health-erino\web
npm run test:auth

# 2 — RLS (CI recomendado; sin Docker local)
# Push watchily-ho a main o abrir PR → GitHub Actions → workflow "RLS Tests" verde → marcar ✅
# Local (opcional, ~15 GB Docker): supabase start && supabase db reset && npm run test:rls
```

**Linear:** WAY-22, WAY-23, WAY-24, WAY-26, WAY-27, WAY-28

---

### M5 — CI + CV polish ✅ Revisado

| Item | Repo | Cómo validar | QA |
|------|------|--------------|-----|
| Playwright smoke | **watchily-ho** | `npm run test:e2e` / `test:observability` | ✅ |
| Playwright smoke | **arbpulse** | `npm run test:e2e` con `DEMO_MODE=true` | ✅ |
| Playwright E2E | **fortnite** | build + `npm run start` + `npm run test:e2e` (6 tests, Clerk auth) | ✅ |
| env-ironmint CI | **env-ironmint** | `npm run test:ci` — 15 tests (validator + sync + CLI) | ✅ |
| Fortnite E2E doc | **fortnite** | README Production practices | ✅ |
| CV bullets | **portfolio** | `src/data/project-details.ts` | ⬜ |
| Dependabot portfolio | **portfolio** | `.github/dependabot.yml` | ⬜ |

**Fortnite E2E (recordatorio):**

```powershell
cd C:\Projects\fortnite-live-countdown
npx turbo run build --filter=@fortnite-live-countdown/types --filter=@fortnite-live-countdown/utils --filter=@fortnite-live-countdown/ui
npx turbo run build --filter=web

cd apps\web
npm run start
# otra terminal:
$env:CI = "1"
npm run test:e2e
```

**env-ironmint:**

```powershell
cd C:\Projects\env-ironmint
npm run build
npm run test:ci
```

**Linear:** WAY-25, WAY-29, WAY-30, WAY-31, WAY-32

---

## Después de QA

1. Marcar issues en Linear **Done** (M1, M5; M4 auth + CodeQL revisados; RLS/Dependabot pendientes).
2. Push por repo según [repo-branches.md](./repo-branches.md) (`dev` o `main`).
3. Abrir PR; esperar CI de GitHub.
4. Actualizar checklist en [production-skills-roadmap.md](./production-skills-roadmap.md) (`local QA pending` → done).

---

## Notas de sesión (2026-06-12)

- **M0:** Husky + lint-staged en 6 repos; `## Production practices` en README de cada repo; 5 proyectos Sentry creados + `SENTRY_DSN` en `.env.example` y `.env.local` local.
- **M1:** Scalar `/api-docs` marcado revisado por solicitud de seguimiento.
- **M5:** env-ironmint `test:ci` 15/15; fortnite E2E 2/2 tras fix `next.config.ts` + tests HTTP; watchily observability OK; arbpulse Playwright smoke 3/3 (`npm run test:e2e` con `DEMO_MODE=true`).
- **M4 (parcial):** crt-lineas `test:auth` 5/5; health-erino `test:auth` 7/7; CodeQL `codeql.yml` en watchily-ho, health-erino, arbpulse. Pendiente: RLS watchily (#13), Dependabot.
- **Fortnite:** no usar `next dev` para E2E; usar `next build` + `next start` (arranque >2 min en Windows).
- **M2 Sentry probes:** `verify-sentry-probes.ps1` PASS watchily-ho, arbpulse, crt-lineas, health-erino; fortnite timeout con `next dev` en Windows (SDK + `/api/debug/sentry` OK; usar build+start). **Sentry MCP (2026-06-12):** 5/5 proyectos CV existen; ingest confirmado — test errors ignored en watchily-ho, arbpulse, crt-lineas, health-erino, fortnite-live-countdown.

## Notas de sesión (2026-06-13)

- **M4 Nivel 3 (#10–12):** auth tests + CodeQL marcados revisados por el usuario.

## Notas de sesión (2026-06-16)

- **M4 #13 RLS:** validación local omitida (Docker Desktop no arranca / espacio en laptop). Criterio acordado: marcar ✅ cuando **RLS Tests** pase en GitHub Actions tras push/PR de `watchily-ho`.
- **M3 Nivel 5 #15 Upstash:** tests automatizados — `watchily-ho`: `npm run test:rate-limit` (Vitest, 20 req/user); `arbpulse`: `npm run test:rate-limit` (HTTP 429 read tier); portfolio: `scripts/verify-upstash-rate-limit.ps1`.
- **M3 Nivel 5 #16 Inngest:** QA local OK en watchily-ho, crt-lineas, health-erino — `INNGEST_DEV=1` + keys dummy; `npx inngest-cli dev -u http://localhost:3000/api/inngest`; eventos de prueba vía `:8288/e/local-dev`. crt-lineas requirió `npm run db:push` (`MonitorBulkJob`/`MonitorBulkJobItem`). No validado: bulk Playwright E2E, crons, Inngest Cloud prod.
- **M2 Nivel 5 #17 Langfuse:** QA local OK — `/admin` chat (texto; voz = STT cliente → mismo `POST /api/chat`) → trace `voice-chat-session` en `us.cloud.langfuse.com`; keys en `web/.env.local`.
- **M5 Nivel 5 #18 Clerk E2E (fortnite):** `@clerk/testing` + Playwright browser login (`clerk.signIn`, `storageState`); 6/6 local (`auth-guest` 401, `auth` home + `/api/favorites` 200). Secrets GitHub: `CLERK_E2E_USER_EMAIL`, `CLERK_E2E_USER_PASSWORD` (+ Clerk keys). Middleware: `/api/favorites` handler returns 401 (no HTML 404 from `auth.protect()`).

---

*Última actualización: 2026-06-17 (Clerk E2E fortnite + push Production Skills)*
