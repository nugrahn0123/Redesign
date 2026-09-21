import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://sakusultan.id/sitemap.xml",
    host: "https://sakusultan.id",
  };
}