import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** 占位日期。正式改文案时可以一并更新。 */
const lastModified = "2026-10-30";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
