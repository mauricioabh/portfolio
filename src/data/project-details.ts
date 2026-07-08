export interface ProjectDetails {
  overview: string;
  features: string[];
  productionPractices?: string[];
  flows: string[];
  howToUse: string[];
  architecture: string;
}

export const projectDetails: Record<string, ProjectDetails> = {
  "health-erino": {
    overview:
      "Dual web and mobile solution for medication management with a Gemini-powered voice assistant. The Next.js admin panel syncs medication data from a published Google Sheets CSV into Neon PostgreSQL, while the Expo app lets users query medications by voice.",
    features: [
      "Clerk authentication (email/password and Google) on web and mobile",
      "Admin panel with Google Sheets sync and full medication CRUD",
      "Voice assistant on web (/chat) and mobile using speech recognition and TTS",
      "Gemini via Vercel AI SDK with tool calls against Neon",
      "Medication list and CSV upload flows on mobile",
      "Neon PostgreSQL as the single source of truth for medications",
    ],
    productionPractices: [
      "Husky pre-commit with lint-staged across web and Expo workspaces",
      "Langfuse LLM tracing for voice tool-calling (/api/chat → Gemini → Neon tools) with medication names redacted",
      "Inngest background sync from Google Sheets CSV into Neon (6h cron + manual event)",
      "Vitest API authorization tests for protected admin, sync, and chat routes (7/7 in CI)",
      "Neon preview branches via GitHub integration for safe schema changes per PR",
      "Sentry on web app; CodeQL and Dependabot in GitHub Actions",
      "Privacy SEO: global noindex/nofollow metadata and robots.txt blocking all crawlers (including GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — health data must not be indexed",
      "Preview deployment noindex via lib/seo/site.ts (allowSearchIndexing on production branch only)",
    ],
    flows: [
      "Admin signs in via Clerk and opens /admin to sync medications from Google Sheets or manage records manually",
      "Synced data is stored in Neon and served through Next.js API routes",
      "End user opens web /chat or the Expo app and asks about medications by voice or text",
      "Request hits /api/chat; Gemini responds using medication tools and TTS/speech output is played back",
      "Mobile app points EXPO_PUBLIC_APP_URL at the deployed Vercel web API",
    ],
    howToUse: [
      "Sign in on the web admin panel at /admin (Clerk)",
      "Sync medications from Google Sheets or add/edit entries manually",
      "Open /chat on web or launch the Expo mobile app",
      "Tap the microphone and ask about your medications in natural language",
      "Listen to or read the AI response powered by Gemini",
    ],
    architecture:
      "Monorepo with Next.js (App Router) web API/admin and Expo mobile, backed by Neon PostgreSQL. Clerk handles auth; Gemini via Vercel AI SDK orchestrates voice queries with server-side tools against the database.",
  },
  "labby-dabby": {
    overview:
      "AI-powered lab report analysis platform for patients, delivered as a Turborepo monorepo with Next.js web and Expo mobile apps. Users upload medical PDFs; Google Gemini extracts and interprets results in plain language, stored in Neon via Drizzle ORM with Clerk auth.",
    features: [
      "PDF lab report upload and AI extraction/interpretation with Gemini",
      "Classification of results as normal, abnormal, or critical",
      "Contextual AI chatbot about uploaded reports with full report context",
      "Health notes diary with tags and CRUD",
      "Shareable read-only report links with expiring token",
      "Dashboard with stats, Resend email notifications, and Clerk webhooks",
      "Row-level data isolation in Neon — each user only sees their own data",
    ],
    flows: [
      "User signs up/in via Clerk on web or mobile",
      "User uploads a lab PDF; Gemini processes and stores analysis in Neon",
      "User reviews detailed interpretation and suggested doctor questions on /lab-reports/[id]",
      "User can chat with AI about the report, add health notes, or share via token link",
      "Optional email notification sent via Resend when analysis completes",
    ],
    howToUse: [
      "Create an account at labby-dabby.vercel.app (Google or email)",
      "Go to Lab Reports and upload a medical PDF",
      "Review the AI interpretation and suggested doctor questions",
      "Use the AI chatbot for follow-up questions about your report",
      "Share a read-only link with a doctor or family member if needed",
    ],
    architecture:
      "Turborepo monorepo: Next.js web (Clerk, Drizzle, Neon) and Expo mobile (Clerk, NativeWind), plus shared packages. Uploadthing handles files; Resend sends emails; Clerk webhooks sync users to Postgres.",
  },
  arbpulse: {
    overview:
      "Real-time BTC/USDT cross-exchange arbitrage detection and simulation bot across Kraken, Bybit, OKX, and Binance. Streams order books over WebSocket, computes net profit with VWAP slippage and taker fees, and simulates trades in memory without moving real funds.",
    features: [
      "Live WebSocket feeds from four exchanges with normalized order books",
      "VWAP-based slippage and per-exchange taker fee calculation",
      "In-memory trade simulation with pre-positioned wallet inventory",
      "Risk controls: anti-flicker, staleness, circuit breaker, partial fills",
      "React dashboard with SSE live updates, P&L chart, and controls",
      "Demo mode with synthetic divergences and optional NDJSON feed recording",
    ],
    productionPractices: [
      "Contract-first REST API: Zod schemas → OpenAPI → Scalar at /api-docs",
      "Sentry error capture with OpenTelemetry spans (orderbook, arbitrage, SSE) and pino structured logging with correlation IDs",
      "Upstash sliding-window rate limits per IP on read/write/SSE routes (429 + Retry-After)",
      "Upstash Redis cache for latest StateSnapshot (~1s TTL) on GET /api/state",
      "Playwright smoke in CI: dashboard loads and SSE stream delivers live engine state (DEMO_MODE=true)",
      "CodeQL and Dependabot for npm (root + web/) and GitHub Actions",
    ],
    flows: [
      "Exchange WebSocket feeds normalize order books into OrderBookManager",
      "ArbitrageEngine compares venue pairs and scores net profit after fees",
      "RiskManager applies thresholds, anti-flicker, and circuit breaker rules",
      "Approved opportunities execute in ExecutionSimulator updating virtual wallets",
      "Rebalancer corrects inventory drift; state streams to React dashboard via SSE",
    ],
    howToUse: [
      "Open the deployed dashboard or run locally on port 8080",
      "Watch the price matrix and opportunity feed update in real time",
      "In live mode, expect mostly fee-rejected opportunities (expected behavior)",
      "Toggle Demo mode from Controls to see simulated profitable trades",
      "Adjust min net profit, volume, and active exchanges from the live config panel",
    ],
    architecture:
      "Node.js TypeScript monolith (Express REST + SSE + React/Vite frontend) with hexagonal layering: domain services, application use-cases, and infrastructure adapters for exchange WS feeds. All state is in-memory; deployed as a single persistent process on Render.",
  },
  "env-ironmint": {
    overview:
      "Published NPM CLI tool for validating, comparing, and syncing .env files across projects. Detects exposed secrets, weak placeholder values, missing variables, and git tracking issues to prevent configuration mistakes in local dev and CI/CD.",
    features: [
      "Automatic discovery of .env, .env.local, .env.example, and related patterns",
      "Validation against .env.example with scored summary output",
      "Security checks for weak secrets, placeholders, and empty required vars",
      "Sync command to bootstrap .env.local from .env.example",
      "Git integration to verify .gitignore and tracked sensitive files",
      "Colorful CLI output with table, JSON, or summary formats",
    ],
    productionPractices: [
      "Husky pre-commit with lint-staged on TypeScript sources",
      "Jest unit and integration tests with CI coverage gate (npm run test:ci)",
      "GitHub Actions CI: lint, build, and test:ci on every push",
      "Consumer template workflow at docs/examples/env-ironmint-pr.yml for downstream repos",
      "Dependabot for weekly npm and GitHub Actions updates",
    ],
    flows: [
      "CLI scans the project directory for all .env* files",
      "Each file is compared against .env.example and scored",
      "Security analyzer flags weak values, empty vars, and suspicious patterns",
      "Optional --git flag checks .gitignore and version-control status",
      "Sync mode creates or updates .env.local preserving existing values",
    ],
    howToUse: [
      "Run `npx env-ironmint` in your project root to validate env files",
      "Use `npx env-ironmint validate --git` for full validation with git checks",
      "Run `npx env-ironmint sync` to create/update .env.local from .env.example",
      "Run `npx env-ironmint list` to see all detected env files",
      "Fix reported missing variables, weak secrets, or gitignore issues before deploying",
    ],
    architecture:
      "TypeScript ESM CLI compiled to dist/, built on commander.js for commands, chalk for output, dotenv/glob/fs-extra for file operations. Unit and integration tests run via Jest; published to NPM as env-ironmint.",
  },
  mangatrack: {
    overview:
      "Full-stack manga tracking and reading platform with tier-based limits (Basic vs Premium). Users discover manga, bookmark series, read chapters, and receive notifications, backed by Neon PostgreSQL with Prisma, Clerk auth, Stripe subscriptions, and Inngest background jobs.",
    features: [
      "Manga search, bookmarking, and reading with progress tracking",
      "Tier system: Basic (50 bookmarks) vs Premium (unlimited) via Stripe checkout",
      "Manga reader with vertical/horizontal modes and auto mark-as-read",
      "Email notifications via Resend and in-app/browser notification system",
      "Clerk auth with Google OAuth, user profiles, and preference management",
      "Inngest background jobs for async processing; Stripe customer portal for self-service",
    ],
    productionPractices: [
      "lib/seo/: robots.ts, sitemap.xml, metadataBase + canonical OG/Twitter, Organization JSON-LD",
      "Preview noindex guard (lib/seo/site.ts) — blocks *.vercel.app duplicate indexing",
      "Private app routes noindex: dashboard, reader, settings, sign-in, sign-up (layout metadata)",
      "README AEO block on GitHub for answer-engine discoverability",
      "Clerk middleware auth; Stripe subscriptions; Inngest background jobs; Prisma on Neon",
    ],
    flows: [
      "User signs in via Clerk and lands on /dashboard",
      "User searches manga at /search and bookmarks series to their library",
      "User opens manga detail and reads chapters in /reader/[chapterId]",
      "Reading progress is saved; notifications fire for new chapters via Inngest/Resend",
      "Premium users upgrade via Stripe checkout; tier unlocks higher bookmark limits",
    ],
    howToUse: [
      "Sign up at mangatrack.wayool.com with Google or email",
      "Search for manga and bookmark series from your dashboard",
      "Open a chapter in the reader and track your progress automatically",
      "Enable email or browser notifications for new chapter alerts",
      "Upgrade to Premium via Stripe for unlimited bookmarks and features",
    ],
    architecture:
      "Next.js App Router single app with Prisma ORM on Neon PostgreSQL. Clerk middleware protects routes; Stripe webhooks manage subscriptions; Inngest handles background jobs; Resend delivers email notifications.",
  },
  beatstack: {
    overview:
      "Visual node-based editor for assembling Suno AI music prompts. Users connect typed nodes (genre, mood, BPM, vocals, structure, etc.) on a React Flow canvas; the prompt assembles automatically in topological order, with optional Gemini AI for evaluation and auto-configuration.",
    features: [
      "React Flow canvas with drag-and-drop node palette (one node per type)",
      "Real-time prompt assembly with structure nodes always appended last",
      "Presets, history (last 20), randomize, JSON export/import, and URL sharing",
      "Optional Gemini AI: Describe your song and Evaluate prompt",
      "PWA installable in production with localStorage persistence",
      "Dark/light/system theme with undo (Ctrl+Z) and minimap",
    ],
    productionPractices: [
      "Shared lib/seo/ reference implementation: robots.ts, sitemap.xml, metadataBase, preview noindex (main/master + Render branch guard)",
      "/help FAQ page with expanded answers and lastUpdated for AEO (FAQPage-friendly content)",
      "README AEO block describing product, stack, and live URL for GitHub/answer engines",
      "PWA installable in production; deployed on Render with RENDER_EXTERNAL_URL canonical fallback",
      "Optional Gemini routes for Describe your song and Evaluate prompt",
    ],
    flows: [
      "User drags node types from the left palette onto the canvas",
      "User connects output→input edges to define segment order in the final prompt",
      "Assembled prompt updates live in the bottom output panel",
      "User copies, exports .txt, evaluates with AI, or shares via compressed URL",
      "Presets and graph state persist in browser localStorage",
    ],
    howToUse: [
      "Open beatstack-mauricioabh.onrender.com",
      "Drag nodes (genre, mood, BPM, vocals, etc.) onto the canvas and connect them",
      "Copy the assembled prompt from the output panel for use in Suno",
      "Optionally use Describe your song to auto-fill nodes from a text description",
      "Save presets or Share to copy a link with your graph encoded in the URL",
    ],
    architecture:
      "Next.js App Router editor with @xyflow/react canvas, Zustand for graph state, Zod for node validation, and a server-side Gemini route. No database or auth; all persistence is client-side localStorage; PWA via next-pwa.",
  },
  "te-kae": {
    overview:
      "Aggregated viewer for active online hackathons from TAIKAI, Hack Club, and MLH/lablab. Data is fetched on manual refresh, persisted in Neon Postgres via Drizzle ORM, and displayed in a grid with last-update timestamps.",
    features: [
      "Multi-source ingestion: TAIKAI GraphQL, Hack Club public API, MLH/lablab via ScraperAPI",
      "Manual refresh button triggers full scrape and DB save",
      "Neon Postgres storage with ingestion_run and hackathon tables",
      "Header shows last update time from latest ingestion run",
      "HTML sanitization with isomorphic-dompurify",
      "Zod validation on API requests",
    ],
    flows: [
      "User opens the homepage showing cached hackathons from Neon",
      "User clicks Actualizar datos to trigger ingestion from all sources",
      "Route handlers fetch TAIKAI GraphQL, Hack Club API, and scrape MLH/lablab",
      "Results are upserted into Neon; ingestion_run records timestamp and status",
      "Grid refreshes with updated hackathon cards and new last-update time",
    ],
    howToUse: [
      "Open te-kae.vercel.app",
      "Browse currently cached active hackathons in the grid",
      "Click Actualizar datos to fetch fresh listings from all sources",
      "Check the header for when data was last updated",
      "Click a hackathon card to view details and external registration links",
    ],
    architecture:
      "Next.js App Router BFF with Route Handlers for ingestion, Drizzle ORM on Neon Postgres, and no user auth. External integrations include TAIKAI GraphQL, Hack Club REST, and ScraperAPI-powered HTML parsing for MLH/lablab.",
  },
  "livecountdown-fortnite": {
    overview:
      "Fortnite fan dashboard in a Turborepo monorepo with Next.js web and Expo mobile apps. A daily cron ingests seasons, news, and Battle Royale shop data from fortnite-api.com into Neon via Drizzle ORM; the UI shows UTC-accurate countdowns with color-coded urgency.",
    features: [
      "Daily cron ingestion from fortnite-api (seasons, news, Battle Royale shop)",
      "Dynamic hero banners with heat-mapped colors by time-to-event proximity",
      "useCountdown hook with 1-second UTC ticks",
      "Battle Royale shop grid with all current offers",
      "Clerk auth (email/password + Google) on web and mobile",
      "Favorites, history, jam tracks, and tienda sections",
    ],
    productionPractices: [
      "Husky monorepo pre-commit with lint-staged on TypeScript sources",
      "Zod validation for env config and fortnite-api ingest payloads",
      "Playwright E2E in GitHub Actions: HTTP smokes, Sentry probe, and Clerk auth (6 tests — guest 401, signed-in favorites 200)",
      "Sentry captures cron ingest failures on /api/cron/ingest-fortnite",
      "Dependabot for npm and GitHub Actions across the Turborepo",
      "lib/seo/ on web app: robots.ts, sitemap.xml, SoftwareApplication JSON-LD, metadataBase + OG/Twitter",
      "Preview noindex guard; auth-only routes noindex (sign-in, sign-up, favoritos, historial) via layout metadata",
      "Public robots.txt and sitemap.xml exempt from Clerk middleware for crawler access",
      "README AEO block at monorepo root",
    ],
    flows: [
      "Daily cron calls fortnite-api endpoints and upserts events into Neon",
      "Web/mobile clients read cached data from Next.js API (not live API per visit)",
      "Dashboard renders dynamic banners sorted by urgency with countdown timers",
      "Color gradient shifts from red (imminent) to blue (distant) based on UTC time remaining",
      "User can browse BR shop, favorites, and history after signing in with Clerk",
    ],
    howToUse: [
      "Open livecountdown-fortnite.vercel.app",
      "View countdown banners for upcoming seasons, events, and patches",
      "Browse the Tienda section for current Battle Royale shop offers",
      "Sign in with Clerk to save favorites and view history",
      "Install the Expo mobile app for the same dashboard on your phone",
    ],
    architecture:
      "Turborepo monorepo: Next.js web (Drizzle, Neon, Clerk, Vercel cron) and Expo mobile consuming web API, plus shared packages. Ingestion is centralized daily; clients read Postgres snapshots with UTC countdown logic via date-fns.",
  },
  "crt-lineas": {
    overview:
      "Next.js app for listing Mexican CRT portal companies, saving Persona-type links, and running semiannual Playwright verification. Clerk auth with admin/user roles; encrypted CURP/phone profiles in Neon; bulk SSE monitor with screenshot capture.",
    features: [
      "Playwright-based CRT portal ingest for companies and Persona links",
      "Per-operator monitor patterns with automated or manual verification",
      "Encrypted CURP and phone profiles per user in Neon (Prisma)",
      "Inngest fan-out for bulk monitor — durable per-link workers with retries and SSE progress polling",
      "Screenshot capture for manual review of verification results",
      "Admin role for sync, enable/disable companies, and ingest control",
    ],
    productionPractices: [
      "Husky pre-commit with lint-staged on TypeScript sources",
      "Zod-documented monitor and companies API with Scalar at /api-docs",
      "Vitest API authorization tests for ingest and company-link routes (5/5 in CI)",
      "Inngest durable bulk jobs with Neon MonitorBulkJob rows; inline Playwright fallback without INNGEST_*",
      "Sentry with PII scrubbing (CURP/credentials headers); CodeQL and Dependabot in CI",
      "Privacy SEO: global noindex/nofollow on all pages — transport/PII data must not appear in search or AI crawlers",
      "robots.txt Disallow all with explicit blocks for GPTBot, ClaudeBot, PerplexityBot, Google-Extended",
      "Preview noindex guard (lib/seo/site.ts); /robots.txt on public Clerk route",
    ],
    flows: [
      "User signs in via Clerk (Google or email) and sets up verification profile (CURP/phone)",
      "Admin runs ingest to scrape CRT portal companies and Persona links via Playwright",
      "User selects a link and triggers verification; Playwright runs operator-specific pattern",
      "Result, error, and optional screenshot are stored in Neon with monitor log history",
      "Bulk monitor streams progress over SSE; Inngest fan-out runs each link in a durable worker with per-link retries",
    ],
    howToUse: [
      "Sign in at crt-lineas.vercel.app with Google or email",
      "Complete your verification profile at /dashboard/setup (CURP and phone)",
      "Browse companies and Persona-type links on the dashboard",
      "Click Verificar on a link to run automated Playwright verification",
      "Review status, errors, and screenshots; admins can sync new companies from CRT",
    ],
    architecture:
      "Next.js App Router with Prisma on Neon PostgreSQL, Clerk for auth/roles, Playwright for CRT scraping and link verification. Inngest fan-out handles bulk monitor jobs; monitor patterns live in src/monitoring/patterns/.",
  },
  sommaire: {
    overview:
      "AI-powered PDF summarization app where users upload documents via Uploadthing, text is extracted and summarized into engaging markdown by Google Gemini, and results are stored in Neon Postgres. Clerk authentication with plan badges and Stripe-powered paid tiers for upload limits.",
    features: [
      "PDF upload via Uploadthing with Clerk-protected routes",
      "AI summarization with Google Gemini into markdown output",
      "Dashboard listing all user summaries with upload limits by plan",
      "Stripe integration for paid tier upgrades (unlimited uploads)",
      "Summary detail view with formatted markdown rendering",
      "Plan badge display and upload limit enforcement",
    ],
    flows: [
      "User signs in via Clerk and lands on /dashboard",
      "User uploads a PDF at /upload; file goes to Uploadthing then text is extracted",
      "Gemini generates a markdown summary stored in Neon linked to the user",
      "Summary appears on dashboard; user opens /summaries/[id] to read full output",
      "Basic users hit upload limits and are prompted to upgrade via Stripe",
    ],
    howToUse: [
      "Sign up at sommaire-mauricioabh.vercel.app",
      "Go to Upload and select a PDF document",
      "Wait for AI processing; view the generated summary on your dashboard",
      "Open any summary to read the full markdown-formatted output",
      "Upgrade via Stripe if you reach the basic plan upload limit",
    ],
    architecture:
      "Next.js App Router with Clerk auth, Uploadthing for file uploads, Google Gemini for summarization, Neon serverless Postgres for storage, and Stripe for subscription billing.",
  },
  "vibe-store": {
    overview:
      "Personal app distribution hub with a Next.js landing (Clerk Google OAuth, admin approval workflow) and an Expo mobile store app. Authorized users get a dashboard QR for the Vibe Store APK; the mobile app lists personal projects with install, open, and uninstall on Android.",
    features: [
      "Landing page describing bundled apps (Watchily, Health Erino, Luz Parroquial, Invoixen)",
      "Clerk Google OAuth with admin approval workflow for new users",
      "Admin panel at /admin to approve pending authorized_users in Neon",
      "Dashboard QR code pointing to Vibe Store APK download",
      "Expo mobile app listing apps with Install/Open/Uninstall actions",
      "Vercel Blob storage for APK files referenced in Neon apps table",
    ],
    flows: [
      "User visits landing and clicks Acceder → Clerk Google sign-in",
      "If email not in authorized_users, user sees pending approval screen",
      "Admin approves user at /admin; user gains access to /dashboard with APK QR",
      "User installs Vibe Store APK on Android via QR scan",
      "Inside mobile app, user browses app catalog and installs/opens/uninstalls APKs",
    ],
    howToUse: [
      "Visit vibestore-mauricioabh.vercel.app and sign in with Google",
      "Wait for admin approval if you are a new user",
      "Once approved, scan the dashboard QR to download the Vibe Store APK",
      "Install Vibe Store on your Android device",
      "Browse the app list inside Vibe Store and tap Install to sideload other apps",
    ],
    architecture:
      "Two-app setup: Next.js web (Clerk, Neon for authorized_users and apps catalog, Vercel Blob for APKs) and Expo mobile (Expo Router with tabs). Admin email gate controls /admin access; mobile consumes EXPO_PUBLIC_API_URL.",
  },
  watchily: {
    overview:
      "JustWatch-style streaming finder to discover where to watch movies and series across platforms. Multi-surface delivery: Next.js web, Expo mobile, and LG Web App TV mode, with Supabase auth/PostgreSQL, Watchmode API (primary), and Streaming Availability API fallback.",
    features: [
      "Multi-platform search for movies and series streaming availability",
      "Custom user lists (Favoritas, Por ver) with likes and RLS-protected data",
      "Supabase auth with Google and email; profiles and user_providers tables",
      "Expo mobile app with React Navigation (Home, Search, Title, Lists, Settings)",
      "LG TV Web App at /tv with pairing-code second-screen login",
      "Watchmode API primary with Streaming Availability fallback",
    ],
    productionPractices: [
      "Husky pre-commit with lint-staged on TypeScript sources",
      "Zod-validated OpenAPI contract with Scalar UI at /api-docs",
      "Sentry on web, Expo mobile, and LG TV surfaces with platform tags",
      "Inngest watchlist refresh jobs and Upstash rate limiting on search (20 req/min/user)",
      "Supabase RLS isolation: 11 Vitest cases in GitHub Actions CI (profiles, lists, likes, pairing_codes)",
      "Playwright landing smoke on PRs; CodeQL and Dependabot in GitHub Actions",
      "lib/seo/: robots.ts, sitemap.xml, metadataBase, dynamic generateMetadata on /title/[id] for long-tail streaming queries",
      "JSON-LD on title detail pages; preview noindex guard on non-production branches",
      "Private routes noindex: login, lists, settings (layout metadata); README AEO block (Spanish) on GitHub",
    ],
    flows: [
      "User signs in via Supabase (web cookies or mobile OAuth deep link)",
      "User searches titles; unified streaming API returns platform availability",
      "User adds titles to custom lists or marks providers they subscribe to",
      "On LG TV, user opens /tv/pair and enters code from mobile/web to authenticate",
      "Lists and preferences sync via Supabase Postgres with row-level security",
    ],
    howToUse: [
      "Open watchily-ho.vercel.app and sign in with Google or email",
      "Search for a movie or series to see where it streams in your region",
      "Add titles to your lists or mark streaming services you have",
      "Use the Expo mobile app for the same experience on your phone",
      "On LG TV, open the Watchily web app and pair with your account via the pairing code",
    ],
    architecture:
      "Next.js web app with Supabase SSR auth and Postgres, plus Expo mobile app with React Navigation and Supabase client. Streaming data unified in lib layer; LG TV hosted wrapper redirects to /tv.",
  },
  portfolio: {
    overview:
      "Modern dark-themed personal portfolio showcasing professional experience and projects for recruiters and clients. Built with Next.js, Framer Motion animations, consistent TechBadge components, and deployed on Vercel with dynamic OG image generation.",
    features: [
      "Responsive dark theme with gradient effects and Framer Motion animations",
      "Sticky header with scroll-spy navigation and mobile hamburger menu",
      "Hero, About, Experience, Projects, and Contact sections",
      "TechBadge system with consistent icons and hash-based colors per technology",
      "Project detail dialogs with overview, features, production practices, and architecture",
      "SEO/AEO package: robots.ts, sitemap.xml, JSON-LD (Person + FAQPage), recruiter FAQ section",
      "Dynamic OG image generation at /api/og",
    ],
    productionPractices: [
      "lib/seo/: metadataBase, canonical URLs, Open Graph and Twitter cards on all public routes",
      "robots.ts with allow rules for public crawlers and explicit AI bot policies (GPTBot, ClaudeBot, PerplexityBot)",
      "sitemap.xml with production canonical host (mauricioabh.dev)",
      "JSON-LD Person schema + FAQPage for recruiter questions; visible #faq section on homepage",
      "Preview noindex guard (main/master branches) to avoid duplicate *.vercel.app indexing",
      "Deployed on Vercel with production verification of /robots.txt and /sitemap.xml",
    ],
    flows: [
      "Visitor lands on Hero section with introduction and CVA download link",
      "Scroll-spy header highlights active section (About, Experience, Projects, Contact)",
      "Projects section renders cards from projects.ts with live and GitHub links",
      "Experience cards show animated work history with tech badges",
      "Contact section provides form and social links; Footer repeats tech stack",
    ],
    howToUse: [
      "Open portfolio-mauricioabh.vercel.app",
      "Scroll through About and Experience to learn background",
      "Browse the Projects section and click Details, live demo, or GitHub links",
      "Download CV from the Hero section button",
      "Use the Contact section to reach out via form or social links",
    ],
    architecture:
      "Single Next.js App Router site with Tailwind CSS v4, shadcn/ui components, and Framer Motion. Content in src/data/; lib/seo/ centralizes metadata, robots, sitemap, and JSON-LD; OG images at app/api/og/route.tsx; deployed on Vercel.",
  },
};

export function getProjectDetails(projectId: string): ProjectDetails | undefined {
  return projectDetails[projectId];
}
