# Core Web Vitals — CV apps

Two complementary layers across CV web repos:

| Layer | Tool | When | Dashboard |
|-------|------|------|-----------|
| **RUM (field)** | Sentry `browserTracingIntegration` + `tracesSampleRate` | Production traffic | Sentry → Performance → **Web Vitals** |
| **Lab (CI)** | Lighthouse CI (`treosh/lighthouse-ci-action`) | Every PR / push to `main` | GitHub Actions artifacts |

## Sentry (all Next.js CV apps)

Client config pattern (`sentry.client.config.ts`):

```ts
integrations: [
  Sentry.browserTracingIntegration({
    enableInp: true,
  }),
],
tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1,
```

- Sample rate `0.1` in prod keeps the Developer plan within ~10k performance units/month across projects.
- Dev probe: `GET /api/debug/sentry` (404 when `VERCEL_ENV=production`).
- See [sentry-projects.md](./sentry-projects.md) for DSN setup.

## Lighthouse CI

Per repo:

- `.github/workflows/lighthouse.yml` — build, `next start`, audit `http://localhost:3000`
- `lighthouserc.json` — budgets as **warn** (not blocking) until baselines are tuned

Assertions (warn): Performance ≥ 0.85–0.9, Accessibility ≥ 0.9–0.95, LCP ≤ 2500–3000ms, CLS ≤ 0.1.

## Coverage (2026-07-08)

| Repo | Sentry Web Vitals | Lighthouse CI |
|------|:-----------------:|:-------------:|
| portfolio | ✅ added | ✅ |
| wayool | ✅ added | ✅ |
| beatstack | ✅ added | ✅ |
| watchily-ho | ✅ updated | ✅ |
| mangatrack | ✅ added | ✅ |
| fortnite-live-countdown | ✅ updated | ✅ |
| crt-lineas | ✅ updated | ✅ |
| health-erino | ✅ updated | ✅ |
| arbpulse | — (Express API) | — |
| env-ironmint | — (CLI) | — |

## Manual steps after merge

1. Create missing Sentry projects in [mauricio-barragan.sentry.io](https://mauricio-barragan.sentry.io) and set `SENTRY_DSN` in each repo’s `.env.local` + Vercel env.
2. Push each repo so Lighthouse CI runs on GitHub.
3. After real traffic, confirm Web Vitals in Sentry per project.
