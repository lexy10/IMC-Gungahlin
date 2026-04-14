import type { MetadataRoute } from "next";

import { BASE_URL, PAGE_SEO } from "@/lib/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGE_SEO).map((page) => ({
    url: `${BASE_URL}${page.canonicalPath}`,
    lastModified: new Date(),
  }));
}
