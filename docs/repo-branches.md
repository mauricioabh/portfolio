# CV repos — branch policy (Production Skills)

**Do not create new branches.** Commit on the existing integration branch per repo:

1. If `dev` exists (local or `origin/dev`) → checkout `dev` and commit there.
2. Otherwise → `main`, or `master` if that is what the repo uses.

**No `git push` or PR** until local QA is approved.

---

## Repos without `dev`

| Repo | Commit on |
|------|-----------|
| watchily-ho | `main` |
| health-erino | `main` |
| env-ironmint | `main` |
| portfolio | `master` |

## Repos with `dev`

| Repo | Commit on |
|------|-----------|
| arbpulse | `dev` |
| crt-lineas | `dev` |
| fortnite-live-countdown | `dev` |

---

*Verified: 2026-06-10*
