import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const resources = [
    "/resources/cdl-written-test",
    "/resources/cdl-study-guide",
    "/resources/cdl-air-brakes/psi",
    "/resources/cdl-air-brakes/cut-out-pressure",
    "/resources/cdl-air-brakes/cut-in-pressure",
    "/resources/cdl-air-brakes/low-air-warning",
    "/resources/cdl-air-brakes/leak-rate",
  ];

  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/preview`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${site.url}/faq`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...resources.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
