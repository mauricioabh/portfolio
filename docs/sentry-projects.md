# Sentry projects — manual setup (M0)

Create these five projects in the [Sentry](https://sentry.io) org (one DSN per app). Do **not** commit real DSN values — each repo documents `SENTRY_DSN=` in `.env.example`.

| Sentry project name | Repo | Env file |
|---------------------|------|----------|
| `watchily-ho` | [watchily-ho](https://github.com/mauricioabh/watchily-ho) | `.env.example` (root) |
| `arbpulse` | [arbpulse](https://github.com/mauricioabh/arbpulse) | `.env.example` |
| `crt-lineas` | [crt-lineas](https://github.com/mauricioabh/crt-lineas) | `.env.example` |
| `health-erino` | [health-erino](https://github.com/mauricioabh/health-erino) | `web/.env.example` |
| `fortnite-live-countdown` | [fortnite-live-countdown](https://github.com/mauricioabh/fortnite-live-countdown) | `apps/web/.env.example` |

**Checklist**

- [ ] Create org / confirm team access
- [ ] Create project `watchily-ho` (Next.js + Expo tags later)
- [ ] Create project `arbpulse` (Node.js)
- [ ] Create project `crt-lineas` (Next.js)
- [ ] Create project `health-erino` (Next.js)
- [ ] Create project `fortnite-live-countdown` (Next.js, cron alerts)
- [ ] Paste DSNs into local `.env` / `.env.local` only (never git)

See also: [production-skills-roadmap.md](./production-skills-roadmap.md) M0 Foundation.
