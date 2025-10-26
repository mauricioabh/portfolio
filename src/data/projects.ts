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
    title: "MangaTrack",
    description: "A manga tracking web app built with Next.js and NeonDB.",
    longDescription:
      "A comprehensive manga tracking application that allows users to manage their reading lists, track progress, and discover new series. Built with modern web technologies for optimal performance and user experience.",
    image: "/projects/mangatrack.jpg",
    liveUrl: "https://mangatrack-olive.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/mangatrack",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "NeonDB",
      "Prisma",
      "Playwright",
      "Clerk",
      "Swagger",
    ],
    featured: true,
  },
  {
    id: "sommaire",
    title: "Sommaire",
    description: "AI-powered PDF summarization tool with intelligent insights.",
    longDescription:
      "An advanced AI-powered application that transforms lengthy PDFs into concise, actionable summaries. Leverages cutting-edge natural language processing to extract key insights and provide clear, structured summaries in seconds.",
    image: "/projects/sommaire.jpg",
    liveUrl: "https://sommaire-iota.vercel.app/",
    githubUrl: "https://github.com/mauricioabh/sommaire",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "AI/ML",
      "TailwindCSS",
      "Clerk",
      "Stripe",
    ],
    featured: true,
  },
  {
    id: "env-ironmint",
    title: "env-ironmint",
    description:
      "A powerful CLI tool for validating, comparing, and syncing .env files.",
    longDescription:
      "A modern utility to verify, compare and validate .env files across your project. Perfect for CI/CD pipelines and local development with automatic detection, security validation, and beautiful console output.",
    image: "/projects/env-ironmint.jpg",
    liveUrl: "https://www.npmjs.com/package/env-ironmint",
    githubUrl: "https://github.com/mauricioabh/env-ironmint",
    technologies: ["TypeScript", "Node.js", "CLI", "NPM", "Jest"],
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
