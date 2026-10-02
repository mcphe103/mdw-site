import { MetadataRoute } from "next";

import { portfolioProjects } from "@/lib/projects/data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/modesto-web-design`, lastModified },
    { url: `${baseUrl}/pricing`, lastModified },
    { url: `${baseUrl}/work`, lastModified },
    ...portfolioProjects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified,
    })),
    { url: `${baseUrl}/privacy`, lastModified },
    { url: `${baseUrl}/terms`, lastModified },
  ];
}
