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
    id: "mangatrack",
    title: "Mangatrack",
    description: "Content Management SaaS",
    longDescription:
      "Built a full-stack manga tracking platform with Next.js, TypeScript, and PostgreSQL. Features user authentication with Clerk and automated email notifications with Resend. Implemented data validation using Zod and wrote end-to-end tests with Playwright.",
    image: "/projects/mangatrack.jpg",
    liveUrl: "https://mangatrack-olive.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/mangatrack",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Clerk",
      "Resend",
      "Zod",
      "Playwright",
    ],
    featured: false,
  },
  {
    id: "sommaire",
    title: "Sommaire",
    description: "AI Productivity Tool",
    longDescription:
      "Developed a PDF summarization tool using Next.js and Google Gemini AI. Handles file uploads with UploadThing, manages user subscriptions through Stripe, and stores data in Neon PostgreSQL. Added smooth animations with Framer Motion and implemented tier-based access limits for different subscription plans.",
    image: "/projects/sommaire.jpg",
    liveUrl: "https://sommaire-iota.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/sommaire",
    technologies: [
      "Next.js",
      "Google Gemini AI",
      "UploadThing",
      "Stripe",
      "Neon PostgreSQL",
      "Framer Motion",
    ],
    featured: false,
  },
  {
    id: "env-ironmint",
    title: "Env-ironmint",
    description: "CLI Tool (NPM)",
    longDescription:
      "Created and published a CLI tool on NPM for managing environment variables. Detects security issues like exposed secrets and validates configurations automatically. Built with TypeScript and tested with Jest. Includes file sync features and verifies proper .gitignore setup to prevent committing sensitive files to repositories.",
    image: "/projects/env-ironmint.jpg",
    liveUrl: "https://www.npmjs.com/package/env-ironmint",
    githubUrl: "https://github.com/mauricioabh/env-ironmint",
    technologies: ["TypeScript", "Jest", "NPM", "CLI"],
    featured: true,
  },
  {
    id: "watchily",
    title: "Watchily",
    description: "JustWatch-style streaming finder",
    longDescription:
      "JustWatch-style app to find where to watch movies and series in streaming. Web (Next.js, React, TypeScript), mobile (Expo), and TV (LG Web App). Stack: Supabase (Auth + PostgreSQL), Watchmode API. Features: multi-platform search, custom lists and TV login via pairing codes (second-screen).",
    image: "/projects/watchily.jpg",
    liveUrl: "https://watchily-ho.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/watchily-ho",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Watchmode API",
      "LG Web App",
    ],
    featured: true,
  },
  {
    id: "health-erino",
    title: "Health-erino",
    description: "Medications management + AI voice assistant",
    longDescription:
      "Medications management app with an AI voice assistant. Available on web (Next.js, Tailwind, Vercel AI SDK) and mobile (Expo). Stack: Neon (PostgreSQL), Clerk (Auth), Google Gemini. Features: admin panel with CRUD and sync from Google Sheets, voice assistant chat (STT / TTS), and voice queries via microphone on mobile.",
    image: "/projects/health-erino.jpg",
    liveUrl: "https://health-erino-b2euf2jbs-mauricioabhs-projects.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/health-erino",
    technologies: [
      "Next.js",
      "Tailwind",
      "Vercel AI SDK",
      "Expo",
      "Neon",
      "Clerk",
      "Google Gemini",
    ],
    featured: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website",
    description:
      "Modern portfolio website with dark theme and smooth animations.",
    longDescription:
      "A responsive portfolio website showcasing professional experience and projects. Features dark theme, smooth animations, and optimized performance for recruiters and clients.",
    image: "/projects/portfolio.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/mauricioabh/portfolio",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
    ],
    featured: false,
  },
];
