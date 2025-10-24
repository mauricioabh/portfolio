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
    technologies: ["Next.js", "React", "TailwindCSS", "NeonDB", "Prisma"],
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
