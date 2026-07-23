import type { MetadataRoute } from "next";

import { BASE_URL, PAGE_SEO } from "@/lib/data/seo";
import { SERVICES } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = Object.values(PAGE_SEO).map((page) => ({
    url: `${BASE_URL}${page.canonicalPath}`,
    lastModified,
  }));

  // Service detail pages are generated from SERVICES, not PAGE_SEO.
  const serviceDetails = SERVICES.filter((service) => service.detail).map(
    (service) => ({
      url: `${BASE_URL}/services/${service.id}`,
      lastModified,
    })
  );

  return [...pages, ...serviceDetails];
}
