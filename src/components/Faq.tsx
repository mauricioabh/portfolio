import {
  PORTFOLIO_FAQ_ITEMS,
  PORTFOLIO_FAQ_LAST_UPDATED,
} from "@/data/portfolio-faq";

export default function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-border/40 bg-background py-20"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto max-w-3xl px-4">
        <h2
          id="faq-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-foreground"
        >
          Frequently asked questions
        </h2>
        <p className="mb-2 text-muted-foreground">
          Mauricio Barragán is a full-stack developer who ships Next.js products
          on Vercel, with experience in React, TypeScript, SAP Fiori, and
          production observability (Sentry, CI, API contracts). This page
          summarizes common questions recruiters and collaborators ask.
        </p>
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: {PORTFOLIO_FAQ_LAST_UPDATED}
        </p>
        <dl className="space-y-8">
          {PORTFOLIO_FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <dt className="mb-2 text-lg font-semibold text-foreground">
                {item.question}
              </dt>
              <dd className="text-muted-foreground leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
