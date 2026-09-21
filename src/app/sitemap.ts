import type { MetadataRoute } from "next";

const BASE_URL = "https://sakusultan.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/syarat-ketentuan`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/kebijakan-privasi`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}