import { personalInfo } from "@/config/personal";
import { PORTFOLIO_FAQ_ITEMS } from "@/data/portfolio-faq";
import { DEFAULT_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/seo/site";

export function personJsonLd(): Record<string, unknown> {
  const name = personalInfo.fullName;
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    url: siteUrl,
    jobTitle: personalInfo.title,
    email: `mailto:${personalInfo.email}`,
    sameAs: [personalInfo.github.url, personalInfo.linkedin.url],
    description: DEFAULT_DESCRIPTION,
  };
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: DEFAULT_DESCRIPTION,
    inLanguage: personalInfo.site.locale.replace("_", "-"),
  };
}

export function profilePageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: SITE_NAME,
    url: getSiteUrl(),
    mainEntity: {
      "@type": "Person",
      name: personalInfo.fullName,
      jobTitle: personalInfo.title,
    },
  };
}

export function faqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PORTFOLIO_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
