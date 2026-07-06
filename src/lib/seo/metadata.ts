import type { Metadata } from "next";
import { getSEOInfo } from "@/config/personal";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE_PATH,
  SITE_NAME,
  allowSearchIndexing,
  getSiteUrl,
} from "@/lib/seo/site";

export type PageMetadataInput = {
  title: string;
  description?: string;
  pathname: string;
  noIndex?: boolean;
};

function resolveTitle(title: string): string {
  const seo = getSEOInfo();
  return title === seo.title ? title : `${title} | ${SITE_NAME}`;
}

function ogImageUrl(): string {
  return new URL(DEFAULT_OG_IMAGE_PATH, getSiteUrl()).href;
}

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  pathname,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonicalPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pageUrl = new URL(canonicalPath, getSiteUrl()).href;
  const resolvedTitle = resolveTitle(title);
  const indexingBlocked = noIndex || !allowSearchIndexing();
  const seo = getSEOInfo();

  return {
    title: resolvedTitle,
    description,
    alternates: { canonical: canonicalPath },
    robots: indexingBlocked
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: pageUrl,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      images: [
        {
          url: ogImageUrl(),
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [ogImageUrl()],
    },
  };
}

export function rootLayoutMetadata(): Metadata {
  const seo = getSEOInfo();
  const indexingBlocked = !allowSearchIndexing();

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: seo.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "Full Stack Developer",
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "SAP Fiori",
      "Web Development",
    ],
    authors: [{ name: `${seo.title.split(" — ")[0]}` }],
    creator: seo.title.split(" — ")[0],
    alternates: { canonical: "/" },
    robots: indexingBlocked
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: getSiteUrl(),
      siteName: SITE_NAME,
      title: seo.title,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: DEFAULT_OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}
