export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "watchily",
    title: "Watchily",
    description:
      "JustWatch-style streaming finder across web, mobile, and LG TV",
    longDescription:
      "Multi-surface streaming finder (Next.js web, Expo mobile, LG Web App TV) with Supabase auth, 21+ API routes, custom watchlists, and second-screen TV pairing. Watchmode API with availability fallback, Inngest watchlist refresh, and Upstash rate limiting on search.",
    image: "/projects/watchily.jpg",
    liveUrl: "https://watchily-ho.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/watchily-ho",
    technologies: [
      "Next.js",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Watchmode API",
      "LG Web App",
    ],
    featured: true,
  },
  {
    id: "labby-dabby",
    title: "Labby-dabby",
    description:
      "AI lab report analysis for patients — web and mobile",
    longDescription:
      "Turborepo monorepo with Next.js web and Expo mobile for uploading medical lab PDFs. Google Gemini extracts and interprets results in plain language with normal/abnormal/critical classification, contextual AI chat, health notes diary, and shareable read-only links.",
    image: "/projects/labby-dabby.jpg",
    liveUrl: "https://labby-dabby.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/labby-dabby",
    technologies: [
      "Turborepo",
      "Next.js",
      "Expo",
      "Google Gemini",
      "Drizzle",
      "Clerk",
    ],
    featured: true,
  },
  {
    id: "health-erino",
    title: "Health Erino",
    description:
      "Medication management with Gemini voice assistant — web + mobile",
    longDescription:
      "Dual web and mobile app for medication management with a Gemini-powered voice assistant. Admin panel syncs data from Google Sheets into Neon PostgreSQL via Clerk auth; users query medications by voice on mobile (STT) or web with text-to-speech responses.",
    image: "/projects/health-erino.jpg",
    liveUrl: "https://health-erino.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/health-erino",
    technologies: [
      "Next.js",
      "Expo",
      "Vercel AI SDK",
      "Google Gemini",
      "Clerk",
      "Neon",
    ],
    featured: true,
  },
  {
    id: "crt-lineas",
    title: "CRT Líneas",
    description:
      "CRT portal link monitoring with Playwright automation",
    longDescription:
      "Monitors Mexican CRT portal company and Persona-type links with semiannual Playwright verification. Clerk auth with admin/user roles, encrypted CURP/phone profiles in Neon, Inngest fan-out for bulk monitoring, and screenshot capture for manual review.",
    image: "/projects/crt-lineas.jpg",
    liveUrl: "https://crt-lineas.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/crt-lineas",
    technologies: [
      "Next.js",
      "Prisma",
      "Playwright",
      "Clerk",
      "Neon",
      "TypeScript",
    ],
    featured: true,
  },
  {
    id: "arbpulse",
    title: "Arb Pulse",
    description:
      "Real-time BTC cross-exchange arbitrage detection bot",
    longDescription:
      "Streams BTC/USDT order books from Kraken, Bybit, OKX, and Binance over WebSocket, computing net profit with VWAP slippage and taker fees. Simulates trades in memory with no real funds; React dashboard with REST, SSE live updates, and demo mode for presentations.",
    image: "/projects/arbpulse.jpg",
    liveUrl: "https://arb-pulse.onrender.com/",
    githubUrl: "https://github.com/mauricioabh/arbpulse",
    technologies: [
      "Node.js",
      "TypeScript",
      "WebSocket",
      "Express",
      "React",
      "SSE",
    ],
    featured: true,
  },
  {
    id: "mangatrack",
    title: "MangaTrack",
    description:
      "Full-stack manga tracking SaaS with Stripe subscriptions",
    longDescription:
      "Manga discovery, bookmarking, and reading platform with tier-based limits (Basic vs Premium). Clerk auth, Stripe subscriptions, Resend email notifications, Inngest background jobs, vertical/horizontal reader, and in-app notification system on Neon PostgreSQL with Prisma.",
    image: "/projects/mangatrack.jpg",
    liveUrl: "https://mangatrack-git-dev-mauricioabhs-projects.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/mangatrack",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon",
      "Clerk",
      "Stripe",
    ],
    featured: false,
  },
  {
    id: "sommaire",
    title: "Sommaire",
    description:
      "AI PDF summarization with Stripe monetization",
    longDescription:
      "Upload PDFs via Uploadthing; text is extracted and summarized into engaging markdown by Google Gemini, stored in Neon Postgres. Clerk authentication with plan badges, upload limits by tier, and Stripe-powered paid upgrades for unlimited summaries.",
    image: "/projects/sommaire.jpg",
    liveUrl: "https://sommaire-mauricioabh.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/sommaire",
    technologies: [
      "Next.js",
      "Google Gemini",
      "Uploadthing",
      "Stripe",
      "Clerk",
      "Neon",
    ],
    featured: false,
  },
  {
    id: "livecountdown-fortnite",
    title: "Live Countdown: Fortnite",
    description:
      "Fortnite events dashboard — Turborepo web + mobile",
    longDescription:
      "Turborepo monorepo with Next.js web and Expo mobile for Fortnite fans. Daily cron ingests seasons, news, and Battle Royale shop data from fortnite-api into Neon via Drizzle ORM, with Clerk auth, UTC-accurate countdowns, and color-coded urgency banners.",
    image: "/projects/livecountdown-fortnite.jpg",
    liveUrl: "https://livecountdown-fortnite.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/fortnite-live-countdown",
    technologies: [
      "Turborepo",
      "Next.js",
      "Expo",
      "Drizzle",
      "Clerk",
      "Neon",
    ],
    featured: false,
  },
  {
    id: "beatstack",
    title: "BeatStack",
    description:
      "Visual node editor for Suno AI music prompts",
    longDescription:
      "React Flow canvas to assemble Suno prompts from typed nodes (genre, mood, BPM, vocals, structure). Optional Gemini integration evaluates prompts and auto-configures from natural-language descriptions. PWA with localStorage presets, URL sharing, and dark/light themes.",
    image: "/projects/beatstack.jpg",
    liveUrl: "https://beatstack-mauricioabh.onrender.com/",
    githubUrl: "https://github.com/mauricioabh/beatstack",
    technologies: [
      "Next.js",
      "React Flow",
      "TypeScript",
      "Zustand",
      "Google Gemini",
      "PWA",
    ],
    featured: false,
  },
  {
    id: "te-kae",
    title: "te-kae",
    description:
      "Multi-source hackathon aggregator with Neon persistence",
    longDescription:
      "Aggregates active online hackathons from TAIKAI (GraphQL), Hack Club (public API), and MLH/lablab (ScraperAPI + HTML parsing). Manual refresh persists results in Neon Postgres with ingestion run tracking, Zod-validated API, and last-update timestamps in the header.",
    image: "/projects/te-kae.jpg",
    liveUrl: "https://te-kae.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/te-kae",
    technologies: [
      "Next.js",
      "Drizzle",
      "Neon",
      "ScraperAPI",
      "TypeScript",
    ],
    featured: false,
  },
  {
    id: "vibe-store",
    title: "Vibe Store",
    description:
      "Personal Android app distribution hub with admin approval",
    longDescription:
      "Next.js landing with Clerk (Google OAuth) and an admin approval workflow for authorized users in Neon. Dashboard shows a QR code for the Vibe Store APK; the Expo mobile app lists personal projects (Watchily, Health Erino, etc.) with install, open, and uninstall on Android.",
    image: "/projects/vibe-store.jpg",
    liveUrl: "https://vibestore-mauricioabh.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/vibe-store",
    technologies: [
      "Next.js",
      "Expo",
      "Clerk",
      "Neon",
      "Vercel Blob",
      "TypeScript",
    ],
    featured: false,
  },
  {
    id: "env-ironmint",
    title: "Env-ironmint",
    description:
      "Published NPM CLI for .env validation and security",
    longDescription:
      "Published NPM CLI for managing environment variables across projects. Detects exposed secrets, validates against .env.example, syncs .env files across environments, verifies .gitignore setup, and ships with Jest CI coverage and a GitHub Actions consumer template.",
    image: "/projects/env-ironmint.jpg",
    liveUrl: "https://www.npmjs.com/package/env-ironmint",
    githubUrl: "https://github.com/mauricioabh/env-ironmint",
    technologies: ["TypeScript", "Jest", "NPM", "CLI"],
    featured: false,
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "This portfolio — dark theme, animations, dynamic OG images",
    longDescription:
      "Responsive portfolio showcasing professional experience and projects for recruiters. Dark theme, Framer Motion animations, TechBadge system, project detail dialogs with production practices, and dynamic OG image generation — deployed on Vercel.",
    image: "/projects/portfolio.jpg",
    liveUrl: "https://portfolio-mauricioabh.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/portfolio",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    featured: false,
  },
];
