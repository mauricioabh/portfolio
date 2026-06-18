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
    id: "health-erino",
    title: "Health Erino",
    description: "Medication management with AI voice assistant",
    longDescription:
      "Web and mobile app for managing medications with a Gemini-powered voice assistant. Admin panel syncs data from Google Sheets into Neon PostgreSQL via Clerk auth. Supports speech-to-text queries on mobile and text-to-speech responses on both platforms.",
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
    id: "labby-dabby",
    title: "Labby-dabby",
    description: "AI-powered lab report analysis",
    longDescription:
      "Turborepo monorepo with Next.js web and Expo mobile apps for uploading and analyzing medical lab PDFs using Google Gemini. Drizzle ORM on Neon stores results; Clerk handles auth with webhooks; Uploadthing manages uploads and Resend sends notifications.",
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
    id: "arbpulse",
    title: "Arb Pulse",
    description: "Real-time BTC cross-exchange arbitrage bot",
    longDescription:
      "Streams BTC/USDT order books from Kraken, Bybit, OKX, and Binance over WebSocket, computing net profit with VWAP slippage and taker fees. Simulates trades in memory with no real funds and serves a React dashboard via REST and SSE.",
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
    id: "env-ironmint",
    title: "Env-ironmint",
    description: "CLI Tool (NPM)",
    longDescription:
      "Published NPM CLI for managing environment variables. Detects exposed secrets, validates configurations, syncs .env files across environments, and verifies .gitignore setup to prevent committing sensitive files.",
    image: "/projects/env-ironmint.jpg",
    liveUrl: "https://www.npmjs.com/package/env-ironmint",
    githubUrl: "https://github.com/mauricioabh/env-ironmint",
    technologies: ["TypeScript", "Jest", "NPM", "CLI"],
    featured: true,
  },
  {
    id: "mangatrack",
    title: "MangaTrack",
    description: "Manga tracking and reading platform",
    longDescription:
      "Full-stack manga discovery, bookmarking, and reading app with tier-based limits (Basic vs Premium). Clerk auth, Stripe subscriptions, Resend email notifications, and Inngest background jobs on Neon PostgreSQL with Prisma.",
    image: "/projects/mangatrack.jpg",
    liveUrl: "https://mangatrack-mauricioabh.vercel.app/",
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
    id: "beatstack",
    title: "BeatStack",
    description: "Visual editor for Suno AI music prompts",
    longDescription:
      "Node-based React Flow canvas to assemble Suno prompts from typed nodes (genre, mood, BPM, vocals, structure). Optional Gemini integration evaluates prompts and auto-configures from natural-language descriptions. PWA with localStorage presets and URL sharing.",
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
    description: "Aggregated hackathon listings viewer",
    longDescription:
      "Aggregates active online hackathons from TAIKAI (GraphQL), Hack Club (public API), and MLH/lablab (ScraperAPI + HTML parsing). Manual refresh persists results in Neon Postgres with ingestion run tracking and last-update timestamps.",
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
    id: "livecountdown-fortnite",
    title: "Live Countdown: Fortnite",
    description: "Fortnite events dashboard (web + mobile)",
    longDescription:
      "Turborepo monorepo with Next.js web and Expo mobile apps for Fortnite fans. Daily cron ingests seasons, news, and item shop data from fortnite-api into Neon via Drizzle ORM, with Clerk auth and countdown UI.",
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
    id: "crt-lineas",
    title: "CRT Líneas",
    description: "CRT portal link monitoring automation",
    longDescription:
      "Monitors company and Persona-type links from the Mexican CRT portal with semiannual Playwright verification. Clerk auth with admin/user roles, encrypted CURP/phone profiles in Neon, bulk SSE monitoring, and screenshot capture for manual review.",
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
    featured: false,
  },
  {
    id: "sommaire",
    title: "Sommaire",
    description: "AI-powered PDF summarization",
    longDescription:
      "Upload PDFs via Uploadthing; the app extracts text and generates engaging markdown summaries with Google Gemini, stored in Neon Postgres. Clerk authentication with plan badges and Stripe-powered paid tiers.",
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
    id: "vibe-store",
    title: "Vibe Store",
    description: "Personal app distribution hub",
    longDescription:
      "Next.js landing with Clerk (Google OAuth) and an admin approval workflow for authorized users in Neon. Dashboard shows a QR code for the Vibe Store APK; the Expo mobile app lists personal projects with install, open, and uninstall actions on Android.",
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
    id: "watchily",
    title: "Watchily",
    description: "JustWatch-style streaming finder",
    longDescription:
      "Find where to watch movies and series across streaming platforms. Web (Next.js), mobile (Expo), and TV (LG Web App) with Supabase auth and PostgreSQL. Multi-platform search, custom lists, and TV login via pairing codes (second-screen).",
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
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio with dark theme and animations",
    longDescription:
      "Responsive portfolio showcasing professional experience and projects. Dark theme, Framer Motion animations, tech stack badges, and optimized performance for recruiters and clients. Deployed on Vercel with dynamic OG image generation.",
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
