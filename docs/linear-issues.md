# Linear issues — Production Skills CV Impact Stack

**Created in Linear:** [Production Skills — CV Impact Stack](https://linear.app/wayool/project/production-skills-cv-impact-stack-9837e285d1f6) · team **Wayool** · issues **WAY-5** through **WAY-32**

**OpenSRC adoption:** [OpenSRC — CV Adoption](https://linear.app/wayool/project/opensrc-cv-adoption-689d8bc9fa3c) · issues **WAY-47** through **WAY-54** · plan `docs/opensrc-adoption-plan.md`

**SEO / AEO:** [SEO / AEO — Portfolio Stack](https://linear.app/wayool/project/seo-aeo-portfolio-stack-b94365bf475d) · issues **WAY-56** through **WAY-63** · plan `docs/seo-aeo-roadmap.md`

| Milestone | Issues |
|-----------|--------|
| M0 Foundation — lib/seo template | WAY-56 ✅ |
| M1 P0 — portfolio + wayool | WAY-57 ✅, WAY-58 ✅ (deploy verify ⏳) |
| M2 Preview noindex rollout | WAY-59, WAY-63 |
| M3 Content + README AEO | WAY-60, WAY-61 |
| M4 JSON-LD + watchily dynamic metadata | WAY-62 |

| Milestone | Issues |
|-----------|--------|
| M0 Prerequisites | WAY-47 |
| M1 Fetch by project | WAY-48 (crt-lineas), WAY-49 (mangatrack), WAY-50 (health-erino), WAY-53 (watchily-ho), WAY-51 (labby-dabby), WAY-52 (velyd) |
| M2 Maintenance | WAY-54 ✅ (retry failed fetches), WAY-55 (ratelimit blocked upstream) |

| Milestone | Issues |
|-----------|--------|
| M0 Foundation | WAY-8, WAY-5, WAY-7 |
| M1 API contracts | WAY-6, WAY-9 (blocked by WAY-6), WAY-10 (blocked by WAY-6) |
| M2 Observability | WAY-11, WAY-13, WAY-14, WAY-12, WAY-16 (blocked by WAY-13), WAY-17 |
| M3 Async | WAY-15, WAY-19, WAY-20, WAY-21, WAY-18 |
| M4 Security | WAY-23, WAY-22, WAY-24, WAY-26, WAY-28, WAY-27 |
| M5 CI polish | WAY-25, WAY-31, WAY-30, WAY-29, WAY-32 |

**Local QA tracking:** [production-skills-qa.md](./production-skills-qa.md) (M0–M5 ✅ · external CV text pending)

---

## Original import template (archive)

Create a Linear **project** named `Production Skills — CV Impact Stack`, then add **milestones** M0–M5 and paste each block into `/linear-issue`.

**Labels to create:** `sentry`, `inngest`, `langfuse`, `upstash`, `scalar`, `playwright`, `ci`, `docs`, `husky`, `rls-audit`, `auth-audit`, `watchily`, `arbpulse`, `crt-lineas`, `health-erino`, `fortnite`, `env-ironmint`, `portfolio`

---

## Project description (paste in Linear project)

Integrate production practices (Sentry, Zod+Scalar, Inngest, Langfuse, Upstash, OTel, Husky, RLS/auth tests, CodeQL) across six CV apps.

**Master plan:** `portfolio/docs/production-skills-roadmap.md`  
**Repos:** watchily-ho, arbpulse, crt-lineas, health-erino, fortnite-live-countdown, env-ironmint

---

## M0 — Foundation

### M0-1 Husky monorepos
```
Title: [foundation] Husky + lint-staged — Watchily, Fortnite, Health-erino
Milestone: M0 Foundation
Priority: Urgent
Estimate: 2
Labels: husky, watchily, fortnite, health-erino

Description:
Add husky pre-commit with lint-staged (eslint --fix, prettier --write) on staged *.ts, *.tsx in monorepo roots.

Acceptance:
- [ ] prepare script runs husky install
- [ ] pre-commit runs lint-staged
- [ ] README notes Husky in Production practices (when section exists)
```

### M0-2 Husky single-app repos
```
Title: [foundation] Husky + lint-staged — Arb Pulse, CRT, Env-ironmint
Milestone: M0 Foundation
Priority: Urgent
Estimate: 1
Labels: husky, arbpulse, crt-lineas, env-ironmint

Acceptance:
- [ ] Same pattern as monorepos
- [ ] CI still green
```

### M0-3 Sentry org setup
```
Title: [foundation] Sentry org + projects + .env.example convention
Milestone: M0 Foundation
Priority: Urgent
Estimate: 1
Labels: sentry, docs

Description:
Create Sentry projects: watchily-ho, arbpulse, crt-lineas, health-erino, fortnite-live-countdown.
Document DSN vars in each .env.example (no secrets in git).

Acceptance:
- [ ] 5 Sentry projects created
- [ ] Internal doc or roadmap checklist updated
```

---

## M1 — API contracts (Zod + Scalar)

### M1-1 Arb Pulse refactor (PILOT)
```
Title: [arbpulse] Refactor API — Zod + zod-to-openapi + Scalar
Milestone: M1 API contracts
Priority: Urgent
Estimate: 5
Labels: scalar, arbpulse

Description:
Replace hand-written openapi.ts + swagger-ui-express with:
- zod schemas per endpoint (input/output)
- @asteasolutions/zod-to-openapi registry
- @scalar/express-api-reference at /api-docs

Acceptance:
- [ ] All REST routes validated with Zod
- [ ] Scalar serves generated spec at /api-docs
- [ ] Manual openapi.ts removed or minimal bootstrap only
- [ ] README Production practices + .env.example updated
- [ ] CI green
```

### M1-2 Watchily OpenAPI
```
Title: [watchily-ho] OpenAPI — /api/* with Zod + Scalar
Milestone: M1 API contracts
Priority: High
Estimate: 5
Labels: scalar, watchily
Blocked by: M1-1

Scope: /api/lists*, /api/likes, /api/profile*, /api/titles/*, /api/auth/pair/*

Acceptance:
- [ ] Scalar at /api-docs
- [ ] Zod on API route bodies/params
- [ ] README updated
```

### M1-3 CRT OpenAPI
```
Title: [crt-lineas] OpenAPI — monitor + companies endpoints
Milestone: M1 API contracts
Priority: Medium
Estimate: 3
Labels: scalar, crt-lineas
Blocked by: M1-1

Acceptance:
- [ ] Scalar /api-docs
- [ ] Zod on bulk monitor + ingest bodies
- [ ] README updated
```

---

## M2 — Observability

### M2-1 Sentry Watchily
```
Title: [watchily-ho] Sentry — web + Expo
Milestone: M2 Observability
Priority: High
Estimate: 2
Labels: sentry, watchily

Acceptance:
- [ ] Test error visible in Sentry
- [ ] Tags: platform=web|mobile|webos
- [ ] No PII in breadcrumbs
- [ ] README + .env.example
```

### M2-2 Sentry Arb Pulse
```
Title: [arbpulse] Sentry — Node.js + WS/SSE errors
Milestone: M2 Observability
Priority: High
Estimate: 2
Labels: sentry, arbpulse
```

### M2-3 Sentry CRT + Health-erino + Fortnite
```
Title: [crt-lineas, health-erino, fortnite] Sentry integration
Milestone: M2 Observability
Priority: Medium
Estimate: 3
Labels: sentry, crt-lineas, health-erino, fortnite
```

### M2-4 Pino Arb Pulse
```
Title: [arbpulse] Pino structured logs + correlation IDs
Milestone: M2 Observability
Priority: Medium
Estimate: 2
Labels: arbpulse, docs
```

### M2-5 OTel Arb Pulse
```
Title: [arbpulse] OpenTelemetry — WS → detection → SSE → Sentry OTLP
Milestone: M2 Observability
Priority: Low
Estimate: 3
Labels: arbpulse
Blocked by: M2-2
```

### M2-6 Langfuse Health-erino
```
Title: [health-erino] Langfuse — voice → Gemini → tool calls
Milestone: M2 Observability
Priority: High
Estimate: 3
Labels: langfuse, health-erino

Acceptance:
- [ ] Trace per voice session
- [ ] No medication names in plaintext traces
- [ ] README + .env.example
```

---

## M3 — Async + resilience

### M3-1 Inngest pattern doc
```
Title: [foundation] Inngest setup + reusable pattern doc
Milestone: M3 Async
Priority: High
Estimate: 1
Labels: inngest, docs
```

### M3-2 Inngest CRT bulk Playwright
```
Title: [crt-lineas] Inngest — bulk verification jobs + SSE progress
Milestone: M3 Async
Priority: High
Estimate: 5
Labels: inngest, crt-lineas, playwright
```

### M3-3 Inngest Health-erino sync
```
Title: [health-erino] Inngest — Google Sheets → Neon background sync
Milestone: M3 Async
Priority: Medium
Estimate: 3
Labels: inngest, health-erino
```

### M3-4 Inngest/Queues Watchily
```
Title: [watchily-ho] Background jobs — watchlist availability refresh
Milestone: M3 Async
Priority: Medium
Estimate: 3
Labels: inngest, watchily
```

### M3-5 Upstash Arb Pulse + Watchily
```
Title: [arbpulse, watchily-ho] Upstash — rate limit + cache
Milestone: M3 Async
Priority: Medium
Estimate: 3
Labels: upstash, arbpulse, watchily
```

---

## M4 — Security + data

### M4-1 RLS audit Watchily
```
Title: [watchily-ho] RLS integration tests in CI
Milestone: M4 Security
Priority: High
Estimate: 5
Labels: rls-audit, watchily, ci

Tests (supabase start + vitest/jest):
- User A cannot UPDATE User B private list
- User C can SELECT User B public list
- User A cannot INSERT into User B list
- User A cannot DELETE User B like
- Anon cannot SELECT pairing_codes
- User can only access own profile

Acceptance:
- [ ] ≥8 isolation cases
- [ ] GitHub Action runs test:rls on PR
- [ ] README documents RLS testing
```

### M4-2 Auth audit CRT
```
Title: [crt-lineas] API authorization integration tests
Milestone: M4 Security
Priority: High
Estimate: 3
Labels: auth-audit, crt-lineas, ci

Acceptance:
- [ ] Non-admin cannot POST /api/ingest
- [ ] User A cannot access User B link/screenshot
```

### M4-3 Auth audit Health-erino
```
Title: [health-erino] API authorization tests
Milestone: M4 Security
Priority: Medium
Estimate: 3
Labels: auth-audit, health-erino, ci
```

### M4-4 CodeQL rollout
```
Title: [foundation] CodeQL — Watchily + Health-erino + Arb Pulse
Milestone: M4 Security
Priority: Medium
Estimate: 2
Labels: ci
```

### M4-5 Dependabot all CV repos
```
Title: [foundation] Enable Dependabot on 6 CV repos
Milestone: M4 Security
Priority: Low
Estimate: 1
Labels: ci
```

### M4-6 Neon branching
```
Title: [health-erino or fortnite] Neon GitHub preview branches
Milestone: M4 Security
Priority: Low
Estimate: 2
Labels: docs, health-erino, fortnite

Note: Infrastructure config, not app code. Document DATABASE_URL per PR preview.
```

---

## M5 — CI + CV polish

### M5-1 Playwright Watchily smoke
```
Title: [watchily-ho] Playwright smoke — login → search → add to list
Milestone: M5 CI polish
Priority: High
Estimate: 3
Labels: playwright, ci, watchily
```

### M5-2 Playwright Arb Pulse smoke
```
Title: [arbpulse] Playwright smoke — dashboard + SSE snapshot
Milestone: M5 CI polish
Priority: Medium
Estimate: 2
Labels: playwright, ci, arbpulse
```

### M5-3 Env-ironmint CI doc
```
Title: [env-ironmint] GitHub Actions example — npx env-ironmint in PR
Milestone: M5 CI polish
Priority: Low
Estimate: 1
Labels: ci, env-ironmint, docs
```

### M5-4 Portfolio CV bullets
```
Title: [portfolio] Update project-details.ts + CV production bullets
Milestone: M5 CI polish
Priority: Medium
Estimate: 2
Labels: portfolio, docs
Blocked by: prior milestones per app
```

### M5-5 Fortnite document E2E
```
Title: [fortnite] Document existing Playwright CI in README
Milestone: M5 CI polish
Priority: Low
Estimate: 0.5
Labels: fortnite, docs, playwright
```

---

## Quick import order

1. Create project + milestones M0–M5  
2. Import M0-1 → M0-3  
3. M1-1 (Arb Pulse pilot) before M1-2, M1-3  
4. M2 parallel per app  
5. M3 after Inngest doc  
6. M4 RLS after Watchily Supabase stable  
7. M5 last  

**Total:** ~25 issues, ~55 estimate points, 6–7 weeks.
