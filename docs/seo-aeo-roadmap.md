# SEO / AEO — Roadmap (8 repos CV)

Plan de visibilidad en buscadores y answer engines **solo para los proyectos destacados del CV**.  
**Complements:** [production-skills-roadmap.md](./production-skills-roadmap.md) — track paralelo para apps web desplegadas.

**Alcance (2026-07-06):** portfolio, wayool, beatstack, watchily-ho, mangatrack, fortnite-live-countdown, crt-lineas, health-erino.  
Todo lo demás en `C:\Projects` queda **fuera de alcance** hasta decisión explícita.

**Last audit:** 2026-07-06 · P0 (portfolio + wayool) en producción verificado vía Vercel MCP.

**Linear:** [SEO / AEO — Portfolio Stack](https://linear.app/wayool/project/seo-aeo-portfolio-stack-b94365bf475d) · issues **WAY-56** through **WAY-63**

---

## Qué aplica por repo (regla de oro)

No todos los CV apps necesitan el mismo paquete. **Privacidad > visibilidad** en apps con auth y datos sensibles.

| Repo | Objetivo SEO/AEO | Fases que aplican | No hacer |
|------|------------------|-------------------|----------|
| **portfolio** | Vitrina indexable, JSON-LD Person, FAQ recruiters | F1–F5, F7 · F9 opcional | — |
| **wayool** | Studio indexable, Organization schema | F1–F3, F5, F7 | FAQ pública (no es producto único) |
| **beatstack** | Referencia `lib/seo/` + producto público (Render) | F1, F4 (`/help`), F5, F7 · F9 opcional | Retrofit innecesario (ya tiene paquete) |
| **watchily-ho** | Long-tail “dónde ver X”; landing indexable | F3, F5, F6, F7 · F8 en rutas auth | FAQ inventada sin contenido real |
| **mangatrack** | Landing/login indexable; app privada | F3, F5, F8 | JSON-LD/FAQ en dashboard |
| **fortnite-live-countdown** | Páginas públicas de countdown; app auth noindex | F3, F5, F8 (parcial) | AEO en zonas con cuenta |
| **crt-lineas** | **Solo privacidad** — datos de transporte + PII | **F3 + F8 únicamente** | SEO, JSON-LD, FAQ, README AEO |
| **health-erino** | **Solo privacidad** — datos de salud | **F3 + F8 únicamente** | SEO, JSON-LD, FAQ, README AEO |

### Progreso resumido

| Estado | Repos |
|--------|-------|
| ✅ Hecho (producción verificada) | portfolio, wayool |
| ✅ Referencia ya completa | beatstack (`lib/seo/` en Render) |
| 🔲 Pendiente SEO/AEO real | watchily-ho, mangatrack, fortnite-live-countdown |
| 🔒 Pendiente solo privacidad | crt-lineas, health-erino |
| ⏳ Config menor | wayool: `NEXT_PUBLIC_SITE_URL=https://wayool.com` en Vercel |

---

## Correcciones aplicadas al audit original

| # | Cambio | Impacto en el plan |
|---|--------|-------------------|
| 1 | `llms.txt` baja a **experimento opcional de costo cero** (último paso) | Ya no es piloto AEO ni acción #2 |
| 2 | **Crawlers de IA en `robots.txt`** separado de `llms.txt` | Alta confianza vs especulativo — tablas distintas |
| 3 | **Auditoría de calidad/frescura de contenido** en FAQ/help | Paso explícito antes de más JSON-LD |
| 4 | **`noindex` en preview deploys** para todos los públicos | Riesgo confirmado fuera de beatstack |
| 5 | **README como canal AEO** de costo cero | Acción concreta para repos en GitHub |
| 6 | **arbpulse/web** fuera de alcance | Bot de coding challenge, no producto público |
| 7 | **SaaS nuevos** incluyen `lib/seo/` desde día 1 | No retrofit posterior |

### Evidencia que guía prioridades AEO

| Recomendación | Nivel de confianza | Fuente / razón |
|---------------|-------------------|----------------|
| Permitir/bloquear crawlers en `robots.txt` | **Alta** | Controla acceso real de rastreo (Google, OpenAI GPTBot, Anthropic, Perplexity) |
| `metadataBase`, canonical, OG, Twitter | **Alta** | Evita duplicados y mejora snippets en buscadores y shares |
| JSON-LD (`FAQPage`, `SoftwareApplication`, etc.) | **Alta** | Google y otros consumen schema.org de forma documentada |
| Contenido FAQ con respuesta directa + frescura | **Alta** | Las IAs citan texto útil, no markup vacío |
| README estructurado en GitHub | **Alta** | Sin señales en el deploy, las IAs citan README/npm antes que Vercel |
| `noindex` en previews Vercel/Render | **Alta** | Evita duplicado `*.vercel.app` vs dominio de producción |
| **`llms.txt`** | **Baja / experimental** | Ahrefs (jun 2026): 97% de archivos sin solicitudes en 1 mes; Google: no se necesitan archivos especiales para AI Overviews; OpenAI/Anthropic/Perplexity sin compromiso de leerlo |

---

## Inventario CV (8 repos)

| Repo | Deploy | Auth | Tier | Qué buscamos |
|------|--------|------|------|--------------|
| **portfolio** | Vercel | No | **P0** | Indexación completa + FAQ recruiters |
| **wayool** | Vercel | No | **P0** | Indexación studio + Organization |
| **beatstack** | Render | No | **P0 ref** | Plantilla `lib/seo/` + `/help` AEO |
| **watchily-ho** | Vercel | Clerk | **P1** | Long-tail streaming + preview guard |
| **mangatrack** | Vercel | Clerk | **P2** | Landing indexable; app noindex |
| **fortnite-live-countdown** | Vercel | Clerk | **P2** | Countdowns públicos; cuenta noindex |
| **crt-lineas** | Vercel | Clerk | **Privacidad** | noindex + bloqueo crawlers IA |
| **health-erino** | Vercel | Clerk | **Privacidad** | noindex + bloqueo crawlers IA |

### Fuera de alcance (no tocar salvo decisión explícita)

pactorus, tekae, sommaire, labby-dabby, velyd, vibe-store, luzparroquial, arbpulse, env-ironmint, ai-specs, y el resto del meta-inventario anterior.

### SaaS nuevos en el CV

Si añades un proyecto destacado al portfolio, copiar `lib/seo/` (Fase 1) antes del primer deploy a producción.

---

## Matriz técnica por proyecto (actualizada)

Leyenda: ✅ implementado · ⚠️ parcial · ❌ ausente · 🔒 debe ser noindex · ➖ N/A

| Proyecto | OG | Twitter | robots.ts | sitemap | JSON-LD | Preview noindex | Notas |
|----------|:--:|:-------:|:---------:|:-------:|:-------:|:---------------:|-------|
| **portfolio** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ prod | canonical `mauricioabh.dev` |
| **wayool** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ prod | falta env `NEXT_PUBLIC_SITE_URL` |
| **beatstack** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Render; ref `lib/seo/` |
| **watchily-ho** | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | F3+F6+F7 pendiente |
| **mangatrack** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ **riesgo** | F3+F5+F8 pendiente |
| **fortnite-live-countdown** | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | F3+F5+F8 pendiente |
| **crt-lineas** | ➖ | ➖ | ❌ | ➖ | ➖ | ❌ **riesgo** | solo F3+F8 (privacidad) |
| **health-erino** | ➖ | ➖ | ❌ | ➖ | ➖ | ❌ **riesgo** | solo F3+F8 (privacidad) |

**Preview noindex:** portfolio, wayool y beatstack ya usan `allowSearchIndexing()`. Los otros 5 repos CV en Vercel siguen con riesgo de duplicado `*.vercel.app`.

---

## Qué conviene para AEO (por nivel de evidencia)

### Alta confianza — hacer primero

1. **Acceso de crawlers en `robots.txt`** (separado de `llms.txt`)
   - Apps públicas: `allow` para `*`, bloquear `/api/`, y reglas explícitas para `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`.
   - Apps con datos de salud/admin: **bloquear** bots de IA y mantener `noindex` en áreas autenticadas.
   - Referencia: `beatstack/app/robots.ts`.

2. **`metadataBase` + URL canónica** en cada layout raíz y `generateMetadata` en rutas dinámicas.

3. **JSON-LD** alineado con el tipo de página (ver mapa en Fase 7).

4. **Contenido “answerable”** en páginas públicas:
   - Pregunta en `<h1>` o título visible.
   - Respuesta directa en el primer párrafo (40–80 palabras).
   - Profundidad: pasos, ejemplos, límites del producto.
   - Fecha de actualización visible (`lastUpdated` en FAQ o footer).

5. **README en GitHub** (canal AEO de costo cero):
   - Qué es / para quién (2–3 líneas arriba del fold).
   - URL de producción canónica.
   - 3–5 FAQ en markdown.
   - Stack y cómo correr local (las IAs lo indexan vía GitHub).

6. **`noindex` en preview deploys** (`VERCEL_ENV === 'preview'` o branch ≠ `main`/`master`).

### Confianza media — después del paquete base

- `generateMetadata` dinámico (watchily: título película/serie).
- Sitemap con rutas públicas estables.
- OG image dinámica (`opengraph-image.tsx` o `/api/og`).
- PWA manifest donde aplique (wayool, beatstack ya lo tienen).

### Baja confianza / experimental — solo si sobra tiempo

- **`llms.txt`** en `public/llms.txt`: resumen estático (qué es, URL, docs, FAQ). Sin expectativa de impacto medible. Piloto opcional en beatstack + portfolio únicamente.

---

## Auditoría de calidad de contenido (FAQ / help)

Aplicar **antes** de añadir más JSON-LD. Tener `FAQPage` perfecto sin contenido útil no genera citas.

### Rubrica por ítem FAQ

| Criterio | Pasa | Falla |
|----------|------|-------|
| Pregunta = búsqueda real de usuario | "¿Cómo guardo mi gráfico?" | "Workspace feature" |
| Respuesta directa en primera oración | Sí, luego detalle | Solo contexto, sin respuesta |
| Longitud útil | 2–4 oraciones o lista de pasos | Una línea vaga |
| Sin jerga sin definir | "Suno prompt" explicado en contexto | Acrónimos internos |
| Fecha / versión | `lastUpdated` visible en página | Sin señal de frescura |

### Estado actual conocido

| Repo | Página | Markup | Contenido (evaluación rápida) |
|------|--------|--------|-------------------------------|
| **beatstack** | `/help` + `HELP_FAQ_ITEMS` | ✅ FAQPage JSON-LD | ⚠️ Respuestas correctas pero cortas; **falta `lastUpdated`** y párrafo introductorio que resuma el producto para IAs |
| **portfolio** | `#faq` + `PORTFOLIO_FAQ_ITEMS` | ✅ FAQPage JSON-LD | ✅ Intro 2 párrafos + `lastUpdated` 2026-07-06 + 4 FAQs con respuesta directa |
| Resto | — | ❌ | ❌ Sin FAQ pública indexable |

**Acción:** tras Fase 4, beatstack `/help` debe ganar intro de 2 párrafos + `lastUpdated` + ampliar 2–3 respuestas más usadas.

---

## Plan de ejecución (orden revisado)

### Fase 1 — Extraer plantilla `lib/seo/` (beatstack → reutilizable)

**Objetivo:** Un módulo copiable (o paquete `@repo/seo` si monorepo) con:

```
lib/seo/
  site.ts       # getSiteUrl(), isPreviewDeployment(), allowSearchIndexing()
  metadata.ts   # rootLayoutMetadata(), buildPageMetadata()
  routes.ts     # PUBLIC_SITEMAP_PATHS
  json-ld.ts    # helpers por tipo
components/seo/
  JsonLd.tsx
app/
  robots.ts
  sitemap.ts
```

**Criterios de aceptación:**
- [x] Documentado en `beatstack/README.md` § Production practices (2026-07-06)
- [x] Checklist "copiar a nuevo repo" en este doc (§ SaaS nuevos)
- [x] Variables: `NEXT_PUBLIC_SITE_URL`, `OMNI_ALLOW_PREVIEW_INDEX` (opcional override)
- [x] Segundo consumidor: `portfolio/src/lib/seo/` (copia adaptada)

**Esfuerzo:** ~2–4 h · **Repo:** beatstack primero, luego portfolio como segundo consumidor.

---

### Fase 2 — Aplicar paquete a portfolio + wayool (P0)

| Tarea | portfolio | wayool |
|-------|-----------|--------|
| Copiar `lib/seo/` + `robots.ts` + `sitemap.ts` | ✅ | ✅ |
| `metadataBase` desde env | ✅ | ✅ |
| Migrar metadata actual a `buildPageMetadata` | ✅ | ✅ |
| AI bots en `robots.ts` | ✅ | ✅ |
| JSON-LD `Person` + `WebSite` | ✅ | JSON-LD `Organization` |
| Rutas en sitemap: `/`, secciones ancla si aplica | ✅ | ✅ |

**Criterios de aceptación:**
- [x] `/robots.txt` y `/sitemap.xml` 200 en producción (Vercel MCP 2026-07-06)
- [x] Preview deploy devuelve `noindex`
- [ ] Rich Results Test sin errores críticos en home (manual)

**Esfuerzo:** ~1 día por repo.

---

### Fase 3 — Preview `noindex` (repos CV pendientes)

**Repos:** watchily-ho, mangatrack, fortnite-live-countdown, crt-lineas, health-erino.  
**Ya OK:** portfolio, wayool, beatstack.

**Implementación estándar** (de `beatstack/lib/seo/site.ts` — aceptar `main` y `master`):

```ts
const PRODUCTION_GIT_BRANCHES = new Set(["main", "master"]);

export function isPreviewDeployment(): boolean {
  if (process.env.VERCEL_ENV === "preview") return true;
  const branch = process.env.VERCEL_GIT_COMMIT_REF?.trim();
  if (branch && !PRODUCTION_GIT_BRANCHES.has(branch)) return true;
  return false;
}

export function allowSearchIndexing(): boolean {
  if (process.env.OMNI_ALLOW_PREVIEW_INDEX === "true") return true;
  return !isPreviewDeployment();
}
```

**Criterios de aceptación:**
- [x] portfolio + wayool + beatstack
- [ ] watchily-ho, mangatrack, fortnite-live-countdown, crt-lineas, health-erino (WAY-59)

**Esfuerzo:** ~30 min por repo una vez existe la plantilla.

---

### Fase 4 — Contenido FAQ/help (solo donde aplica)

1. **beatstack `/help`:** intro producto, `lastUpdated`, ampliar FAQs top 3 (WAY-60).
2. **portfolio:** ✅ hecho (`#faq` + `PORTFOLIO_FAQ_ITEMS`).

**No aplica:** crt-lineas, health-erino (sin FAQ pública).

**Criterios de aceptación:**
- [x] portfolio FAQ pasa rubrica § Auditoría
- [ ] beatstack `/help` pasa rubrica (WAY-60)

**Esfuerzo:** ~2–4 h por sitio con FAQ nueva.

---

### Fase 5 — README AEO (repos CV con cara pública)

**Repos:** beatstack, watchily-ho, wayool, mangatrack, fortnite-live-countdown.  
**Ya OK:** portfolio.  
**No aplica:** crt-lineas, health-erino (README técnico basta; sin bloque AEO).

**Plantilla mínima** (añadir al README de cada repo):

```markdown
## What is [Product]?

[2–3 sentences, direct answer.]

**Live:** https://canonical-domain.com

## Who is it for?

[1 short paragraph]

## FAQ

### [Question users ask in ChatGPT?]
[Direct answer first sentence. Then detail.]

## Production practices
...
```

**Criterios de aceptación:**
- [x] portfolio
- [ ] beatstack, wayool, watchily-ho, mangatrack, fortnite-live-countdown (WAY-61)

**Esfuerzo:** ~30–45 min por README.

---

### Fase 6 — `generateMetadata` dinámico en watchily-ho (P1, ROI long-tail)

**Rutas candidatas:** detalle película/serie, búsqueda con query estable.

Por página:
- `title`: "Dónde ver [Título] (2024) en streaming — Watchily"
- `description`: plataformas disponibles + región si aplica
- OG dinámico (poster + título)
- Entrada en sitemap (top N títulos o sitemap index semanal)

**Prerequisitos:** Fase 1–3 en watchily (site url, preview noindex).

**Esfuerzo:** ~2–3 días.

---

### Fase 7 — JSON-LD (solo repos con indexación pública)

| Repo | Schema | Estado |
|------|--------|--------|
| portfolio | `Person`, `ProfilePage`, `WebSite`, `FAQPage` | ✅ |
| wayool | `Organization`, `WebSite` | ✅ |
| beatstack | `SoftwareApplication`, `FAQPage` | ✅ (mantener) |
| watchily-ho | `WebApplication` + `Movie`/`TVSeries` en detalle | ❌ |
| mangatrack | `WebApplication` en landing si hay página pública | ❌ opcional |
| fortnite-live-countdown | `WebApplication` en landing | ❌ opcional |
| crt-lineas, health-erino | — | ➖ no aplica |

**Regla:** schema refleja contenido visible en HTML, no inventar campos.

**Esfuerzo:** ~2–4 h por repo.

---

### Fase 8 — Privacidad: noindex + bloqueo crawlers IA

**Repos CV:** mangatrack, fortnite-live-countdown, **crt-lineas**, **health-erino**.

| Repo | Patrón |
|------|--------|
| mangatrack, fortnite | Landing/countdown indexable; rutas `(app)/`, dashboard, settings → `noindex` |
| crt-lineas, health-erino | **App completa noindex** + `robots.txt` bloquea GPTBot, ClaudeBot, PerplexityBot, Google-Extended |

**Principio:** en health-erino y crt-lineas **no** invertir en SEO/AEO — solo evitar indexación accidental.

**Esfuerzo:** ~1–2 h por repo.

---

### Fase 9 — Experimento opcional: `llms.txt` (baja prioridad)

Solo **beatstack** + **portfolio** si queda tiempo.

`public/llms.txt` (~30 líneas): nombre, URL canónica, una línea de propuesta de valor, enlace a `/help` o README, contacto.

**No** enlazar como acción principal en docs de producto. **No** sustituir robots/schema/contenido.

**Criterios de aceptación:**
- [ ] Archivo estático servido en `/llms.txt`
- [ ] Documentado como experimento sin KPI

**Esfuerzo:** ~20 min por repo.

---

### Fase 10 — Fuera de alcance

Todos los repos no listados en § Inventario CV (8 repos), incluyendo pactorus, tekae, sommaire, labby-dabby, velyd, vibe-store, luzparroquial, arbpulse, env-ironmint, ai-specs.

---

## Qué no hacer

- No tratar `llms.txt` como sustituto de fundamentos (crawlers, schema, contenido real).
- No priorizar `llms.txt` sobre preview `noindex` o README.
- No agrupar `robots.txt` para IA y `llms.txt` en el mismo pilar AEO.
- No hacer retrofit SEO en SaaS nuevos — incluir `lib/seo/` en el scaffold (Fase 1 + § SaaS nuevos).
- No invertir en AEO en áreas autenticadas con datos de salud o PII.

---

## Checklist de seguimiento (8 repos CV)

### P0 — portfolio, wayool, beatstack

- [x] F1 Plantilla `lib/seo/` (beatstack ref; portfolio + wayool consumidores)
- [x] F2 portfolio + wayool — producción verificada
- [x] F3 Preview noindex (los 3)
- [x] F4 FAQ portfolio · [ ] beatstack `/help` (WAY-60)
- [x] F5 README portfolio · [ ] wayool, beatstack (WAY-61)
- [x] F7 JSON-LD portfolio + wayool · beatstack ya tenía
- [ ] F9 llms.txt opcional (portfolio + beatstack)

### P1 — watchily-ho

- [ ] F3 Preview noindex
- [ ] F5 README AEO
- [ ] F6 generateMetadata long-tail
- [ ] F7 JSON-LD
- [ ] F8 noindex rutas autenticadas

### P2 — mangatrack, fortnite-live-countdown

- [ ] F3 Preview noindex
- [ ] F5 README AEO
- [ ] F8 noindex áreas privadas (parcial en fortnite)

### Privacidad — crt-lineas, health-erino

- [ ] F3 Preview noindex
- [ ] F8 noindex global + bloqueo crawlers IA
- [x] Sin FAQ / JSON-LD / README AEO (decisión explícita)

---

## Referencias en código

| Recurso | Ruta |
|---------|------|
| SEO referencia | `beatstack/lib/seo/` |
| robots + AI bots | `beatstack/app/robots.ts` |
| FAQ + JSON-LD | `beatstack/lib/help-faq.ts`, `beatstack/lib/seo/json-ld.ts` |
| Preview guard | `beatstack/lib/seo/site.ts` → `allowSearchIndexing()` |
| Portfolio metadata actual | `portfolio/src/app/layout.tsx` → `rootLayoutMetadata()` |
| Portfolio SEO module | `portfolio/src/lib/seo/` |
| Wayool SEO module | `wayool/lib/seo/` |

---

## Próximo paso inmediato

Orden sugerido para **cerrar el plan CV**:

1. **WAY-59** — F3 en watchily-ho, mangatrack, fortnite-live-countdown, crt-lineas, health-erino (~30 min c/u).
2. **WAY-63** — F8 privacidad en crt-lineas + health-erino (bloqueo IA); mangatrack + fortnite (noindex auth).
3. **WAY-60** — beatstack `/help` contenido.
4. **WAY-61** — README AEO en beatstack, wayool, watchily-ho, mangatrack, fortnite.
5. **WAY-62** — watchily `generateMetadata` (mayor esfuerzo; ~2–3 días).
6. Config Vercel: `NEXT_PUBLIC_SITE_URL=https://wayool.com`.

---

## Registro de ejecución

| Fecha | Acción | Verificación |
|-------|--------|----------------|
| 2026-07-06 | Linear project + milestones M0–M4 + issues WAY-56–63 | [Proyecto Linear](https://linear.app/wayool/project/seo-aeo-portfolio-stack-b94365bf475d) |
| 2026-07-06 | F1: beatstack README § Production practices | Manual |
| 2026-07-06 | F2+F3+F7 portfolio: `lib/seo/`, robots, sitemap, JSON-LD, FAQ, preview guard | `npm run build` ✅ · rutas `/robots.txt`, `/sitemap.xml` |
| 2026-07-06 | F2+F3+F7 wayool: mismo paquete + Organization JSON-LD | `npm run build` ✅ |
| 2026-07-06 | F4+F5 portfolio: sección FAQ + README AEO | Manual |
| 2026-07-06 | PR #8 merged + Vercel deploy READY | portfolio-mauricioabh.vercel.app |
| 2026-07-06 | Bugfix PR #9: `master` branch treated as preview → fixed | robots Allow + AI bots ✅ |
| 2026-07-06 | wayool PR #1 + #2 merged, deploy READY | www.wayool.com/robots.txt Allow ✅ · sitemap 200 ✅ |
| ⏳ | wayool: set `NEXT_PUBLIC_SITE_URL=https://wayool.com` in Vercel | sitemap still uses deployment URL |
