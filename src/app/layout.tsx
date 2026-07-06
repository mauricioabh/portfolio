import {
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  faqPageJsonLd,
  personJsonLd,
  profilePageJsonLd,
  webSiteJsonLd,
} from "@/lib/seo/json-ld";
import { rootLayoutMetadata } from "@/lib/seo/metadata";

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

export const metadata = rootLayoutMetadata();

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
        <JsonLd
          data={[
            personJsonLd(),
            webSiteJsonLd(),
            profilePageJsonLd(),
            faqPageJsonLd(),
          ]}
        />
        {children}
      </body>
    </html>
  );
}
