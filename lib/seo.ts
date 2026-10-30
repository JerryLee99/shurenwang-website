import type { Metadata } from "next";
import { site } from "@/lib/site";

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "乐活熟人，宁波熟人网络科技有限公司",
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — 官方网站`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    languages: { "zh-CN": "/" },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: site.name,
    title: `${site.name} — 官方网站`,
    description: site.description,
    url: "/",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — 官方网站`,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function pageMetadata({
  title,
  description,
  path,
  documentTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** 不用「页面名 · 站点名」模板时使用，例如首页。 */
  documentTitle?: string;
}): Metadata {
  const fullTitle = documentTitle ?? `${title} · ${site.name}`;
  return {
    title: documentTitle ? { absolute: documentTitle } : title,
    description,
    alternates: {
      canonical: path,
      languages: { "zh-CN": path },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
