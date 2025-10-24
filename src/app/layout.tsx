import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { getSEOInfo } from "@/config/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const seoInfo = getSEOInfo();

export const metadata: Metadata = {
  title: seoInfo.title,
  description: seoInfo.description,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "SAP Fiori",
    "Web Development",
  ],
  authors: [{ name: seoInfo.title.split(" — ")[0] }],
  creator: seoInfo.title.split(" — ")[0],
  openGraph: {
    type: "website",
    locale: seoInfo.locale,
    url: seoInfo.url,
    title: seoInfo.title,
    description: seoInfo.description,
    siteName: seoInfo.siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: seoInfo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoInfo.title,
    description: seoInfo.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
