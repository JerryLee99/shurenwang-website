import type { ReactNode } from "react";
import type { Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { rootMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#f4f0e8",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.company,
  alternateName: site.name,
  url: site.url,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
