export type PortfolioFaqItem = {
  question: string;
  answer: string;
};

/** Last content review for AEO freshness signals. */
export const PORTFOLIO_FAQ_LAST_UPDATED = "2026-07-06";

export const PORTFOLIO_FAQ_ITEMS: PortfolioFaqItem[] = [
  {
    question: "What stack does Mauricio Barragán use for web projects?",
    answer:
      "Mauricio builds production web apps with Next.js, React, TypeScript, Tailwind CSS, and Node.js, often paired with PostgreSQL, Prisma, Clerk or Supabase auth, and Vercel for deployment. He also ships SAP Fiori and enterprise integrations when the role requires it.",
  },
  {
    question: "What are Mauricio's featured portfolio projects?",
    answer:
      "Featured work includes BeatStack (visual Suno prompt editor), Watchily (streaming search), Mangatrack, Sommaire, Labby Dabby, CRT Líneas, and this portfolio site. Each project card links to the live demo and GitHub repository where available.",
  },
  {
    question: "How can recruiters or clients contact Mauricio?",
    answer:
      "Use the contact form on the portfolio homepage, email mauricioabh@gmail.com, or connect on LinkedIn at linkedin.com/in/mauricioabh. The site includes a downloadable CV and links to live demos of shipped products.",
  },
  {
    question: "Where is the portfolio deployed?",
    answer:
      "The canonical production URL is configured via NEXT_PUBLIC_SITE_URL (or NEXT_PUBLIC_PORTFOLIO_URL) and deployed on Vercel. Preview deployments are blocked from search indexing to avoid duplicate content on *.vercel.app URLs.",
  },
];
