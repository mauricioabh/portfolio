# SEO / AEO — Roadmap (22 repos)

Master plan for search visibility and answer-engine discoverability across `C:\Projects`.  
**Complements:** [production-skills-roadmap.md](./production-skills-roadmap.md) (CV stack) — SEO/AEO is a parallel track for **public-facing** web apps.

**Last audit:** 2026-07-06 · F1–F2 ejecutadas en portfolio + wayool (código verificado con `npm run build`). Producción pendiente de deploy.

**Linear:** [SEO / AEO — Portfolio Stack](https://linear.app/wayool/project/seo-aeo-portfolio-stack-b94365bf475d) · issues **WAY-56** through **WAY-63**

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

## Inventario de repos (22)

### Web apps Next.js / deploy Vercel (SEO relevante)

| Repo | Cara pública | Auth (Clerk/Supabase) | Prioridad SEO |
|------|--------------|----------------------|---------------|
| **portfolio** | Sí — vitrina | No | **P0** |
| **wayool** | Sí — studio | No | **P0** |
| **beatstack** | Sí — producto | Parcial | **P0** (referencia) |
| **watchily-ho** | Sí — búsqueda streaming | Sí | **P1** (long-tail) |
| **pactorus** | Sí — landing producto | No | **P1** |
| **tekae** | Sí — listado hackathons | No | **P1** |
| **mangatrack** | Parcial | Sí (Clerk) | **P2** |
| **sommaire** | Parcial | Sí (Clerk) | **P2** |
| **labby-dabby** | Landing mínima | Sí (Clerk) | **P2** (solo landing; app noindex) |
| **health-erino** | No real | Sí (Clerk) | **P3** (noindex app; privacidad) |
| **crt-lineas** | No | Sí (Clerk) | **P3** (noindex; datos sensibles) |
| **fortnite-live-countdown** | Parcial | Sí (Clerk) | **P2** |
| **velyd** | Parcial | Sí (Clerk) | **P2** |
| **vibe-store** | Hub interno | Sí (Clerk) | **P3** |
| **luzparroquial** | Admin | No público masivo | **P3** |
| **ai-specs** | Interno | — | **P4** (noindex o ignorar) |

### Otros

| Repo | Tipo | SEO/AEO |
|------|------|---------|
| **arbpulse** | Vite SPA + bot arbitraje (coding challenge) | **Fuera de alcance** — no SSR ni AEO salvo pivot a producto |
| **env-ironmint** | NPM CLI | README + npm, no web |
| **triage_coins** | Bot + web opcional | README; web secundario |
| **certifications**, **linear**, **invoixen**, **marketing** | Docs / sin web app | N/A |

### SaaS nuevos (incluir SEO desde día 1)

Cuando arranques **OG Image API**, **Link in Bio** u otro SaaS en Vercel:

- Copiar plantilla `lib/seo/` (ver Fase 1) en el scaffold inicial.
- `robots.ts` + `sitemap.ts` + `metadata.ts` + `site.ts` antes del primer deploy a producción.
- `allowSearchIndexing()` / preview `noindex` desde el primer PR.

---

## Matriz técnica por proyecto (actualizada)

Leyenda: ✅ implementado · ⚠️ parcial · ❌ ausente · 🔒 debe ser noindex · ➖ N/A

| Proyecto | OG | Twitter | robots meta | robots.ts | sitemap | canonical | JSON-LD | AI bots robots | Preview noindex | llms.txt |
|----------|:--:|:-------:|:-----------:|:---------:|:-------:|:---------:|:-------:|:--------------:|:---------------:|:--------:|
| **beatstack** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **portfolio** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ code · deploy ⏳ | ❌ |
| **wayool** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ code · deploy ⏳ | ❌ |
| **mangatrack** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **sommaire** | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **labby-dabby** | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **fortnite-live-countdown** | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **watchily-ho** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **pactorus** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **tekae** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **health-erino** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **crt-lineas** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔒 | ❌ |
| **velyd** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ **riesgo** | ❌ |
| **vibe-store** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔒 | ❌ |
| **luzparroquial** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | 🔒 | ❌ |
| **ai-specs** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **arbpulse/web** | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ | ➖ fuera de alcance | ➖ |

**Preview noindex:** solo **beatstack** implementa `allowSearchIndexing()` (`lib/seo/site.ts`). Los demás proyectos públicos en Vercel pueden indexarse en `*-git-*.vercel.app` en paralelo al dominio de producción → duplicados para crawlers e IAs.

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

6. **`noindex` en preview deploys** (`VERCEL_ENV === 'preview'` o branch ≠ `main`).

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
- [x] `/robots.txt` y `/sitemap.xml` en build local (portfolio + wayool `npm run build` ✅ 2026-07-06)
- [x] Preview deploy devuelve `noindex` (código: `allowSearchIndexing()` en ambos repos)
- [ ] Rich Results Test sin errores críticos en home (tras deploy)
- [ ] Producción: curl 200 en dominio canónico

**Esfuerzo:** ~1 día por repo.

---

### Fase 3 — Preview `noindex` en todos los proyectos públicos

**Repos:** portfolio, wayool, watchily, mangatrack, sommaire, pactorus, tekae, labby-dabby (landing), fortnite, velyd, beatstack (ya OK).

**Implementación estándar** (de `beatstack/lib/seo/site.ts`):

```ts
export function isPreviewDeployment(): boolean {
  if (process.env.VERCEL_ENV === "preview") return true;
  const branch = process.env.VERCEL_GIT_COMMIT_REF?.trim();
  if (branch && branch !== "main") return true;
  return false;
}

export function allowSearchIndexing(): boolean {
  if (process.env.OMNI_ALLOW_PREVIEW_INDEX === "true") return true;
  return !isPreviewDeployment();
}
```

Usar en `metadata.robots` y en `app/robots.ts` (`disallow: /` si preview).

**Verificación manual:**
1. Abrir URL de preview en Vercel → View Source → `noindex` o `robots` meta.
2. `curl https://<preview>/robots.txt` → `Disallow: /`
3. Producción en dominio custom → `index, follow`

**Criterios de aceptación:**
- [x] Matriz: portfolio + wayool + beatstack en ✅ preview noindex (código)
- [ ] Matriz: resto P0–P2 públicos (WAY-59)

**Esfuerzo:** ~30 min por repo una vez existe la plantilla.

---

### Fase 4 — Auditar y mejorar contenido FAQ/help (no solo markup)

1. **beatstack `/help`:** intro producto, `lastUpdated`, ampliar FAQs top 3.
2. **pactorus:** crear `/help` o sección FAQ en landing antes de `FAQPage` schema.
3. **portfolio:** sección FAQ en página o README enlazado ("¿Qué stack usas?", "¿Proyectos destacados?").

**Criterios de aceptación:**
- [x] portfolio FAQ pasa rubrica § Auditoría (2026-07-06)
- [ ] beatstack `/help` pasa rubrica (WAY-60)
- [ ] pactorus FAQ antes de FAQPage schema

**Esfuerzo:** ~2–4 h por sitio con FAQ nueva.

---

### Fase 5 — Mejorar README (canal AEO GitHub)

**Repos públicos prioritarios:** portfolio (este meta-repo), beatstack, watchily-ho, wayool, pactorus, tekae, mangatrack, labby-dabby, env-ironmint.

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
- [x] portfolio: URL producción + ≥3 FAQ en README (2026-07-06)
- [ ] Resto repos públicos (WAY-61)

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

### Fase 7 — JSON-LD por tipo de app

| Repo | Schema | Dónde |
|------|--------|-------|
| portfolio | `Person`, `ProfilePage`, `WebSite` | layout + home |
| wayool | `Organization`, `WebSite` | layout |
| pactorus | `SoftwareApplication`, `FAQPage` | layout + /help |
| beatstack | ya tiene `SoftwareApplication`, `FAQPage` | mantener |
| watchily | `WebApplication` + `Movie` / `TVSeries` | layout + detalle |

**Regla:** schema refleja contenido visible en HTML, no inventar campos.

**Esfuerzo:** ~2–4 h por repo.

---

### Fase 8 — `noindex` en áreas privadas (apps con auth)

**Repos:** labby-dabby, health-erino, crt-lineas, mangatrack, sommaire, fortnite-live-countdown, velyd, vibe-store, luzparroquial.

**Patrón:**
- Layout o middleware en rutas `(app)/`, `/dashboard`, `/settings`, etc.: `robots: { index: false, follow: false }`.
- Landing pública (si existe): indexable con OG básico.
- **health-erino, labby-dabby, crt-lineas:** bloquear bots de IA en `robots.txt` además de noindex en app.

**Principio:** privacidad > visibilidad en zonas autenticadas.

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

### Fase 10 — Fuera de alcance explícito

| Repo | Decisión |
|------|----------|
| **arbpulse/web** | No SSR, no sitemap, no AEO — bot de arbitraje para coding challenge |
| **health-erino, crt-lineas, labby-dabby** (zonas auth) | No AEO; noindex + bloqueo crawlers IA |
| **ai-specs** | noindex global si se despliega |
| **certifications, linear, invoixen, marketing** | N/A |

Reabrir arbpulse solo con decisión explícita de convertirlo en producto público.

---

## Qué no hacer

- No tratar `llms.txt` como sustituto de fundamentos (crawlers, schema, contenido real).
- No priorizar `llms.txt` sobre preview `noindex` o README.
- No agrupar `robots.txt` para IA y `llms.txt` en el mismo pilar AEO.
- No hacer retrofit SEO en SaaS nuevos — incluir `lib/seo/` en el scaffold (Fase 1 + § SaaS nuevos).
- No invertir en AEO en áreas autenticadas con datos de salud o PII.

---

## Checklist de seguimiento

Marcar `[x]` al completar cada fase por repo.

### P0 — portfolio, wayool, beatstack

- [x] F1 Plantilla `lib/seo/` extraída (beatstack ref + portfolio + wayool)
- [x] F2 portfolio + wayool con paquete completo (código; deploy ⏳)
- [x] F3 Preview noindex (portfolio + wayool + beatstack)
- [x] F4 Contenido FAQ portfolio · beatstack help pendiente (WAY-60)
- [x] F5 README AEO portfolio · resto WAY-61
- [x] F7 JSON-LD portfolio (Person/WebSite/ProfilePage) + wayool (Organization/WebSite)
- [ ] F9 llms.txt (opcional)

### P1 — watchily, pactorus, tekae

- [ ] F3 Preview noindex
- [ ] F5 README AEO
- [ ] F6 watchily generateMetadata
- [ ] F7 JSON-LD

### P2 — mangatrack, sommaire, labby-dabby, fortnite, velyd

- [ ] F3 Preview noindex
- [ ] F8 noindex áreas privadas
- [ ] F5 README donde aplique

### P3 — health-erino, crt-lineas, vibe-store, luzparroquial

- [ ] F8 noindex + bloqueo crawlers IA
- [ ] Sin inversión AEO en app autenticada

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

1. **Deploy** portfolio + wayool y verificar `/robots.txt` + `/sitemap.xml` 200 en producción (WAY-57, WAY-58).
2. **F3 rollout** a P1–P2 repos (WAY-59).
3. **beatstack `/help`** contenido (WAY-60).

---

## Registro de ejecución

| Fecha | Acción | Verificación |
|-------|--------|----------------|
| 2026-07-06 | Linear project + milestones M0–M4 + issues WAY-56–63 | [Proyecto Linear](https://linear.app/wayool/project/seo-aeo-portfolio-stack-b94365bf475d) |
| 2026-07-06 | F1: beatstack README § Production practices | Manual |
| 2026-07-06 | F2+F3+F7 portfolio: `lib/seo/`, robots, sitemap, JSON-LD, FAQ, preview guard | `npm run build` ✅ · rutas `/robots.txt`, `/sitemap.xml` |
| 2026-07-06 | F2+F3+F7 wayool: mismo paquete + Organization JSON-LD | `npm run build` ✅ |
| 2026-07-06 | F4+F5 portfolio: sección FAQ + README AEO | Manual |
| ⏳ | Producción robots/sitemap 200 | Pendiente deploy |
