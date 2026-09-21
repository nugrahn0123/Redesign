import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saku Sultan",
    short_name: "Saku Sultan",
    description:
      "Bayar pulsa, listrik, PDAM, BPJS, dan top-up e-money semua dalam satu genggaman. Praktis, cepat, dan aman. #PastiUNTUNG",
    id: "/",
    start_url: "/",
    scope: "/",
    lang: "id-ID",
    categories: ["finance", "utilities"],
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#042718",
    icons: [
      {
        src: "/images/saku-sultan-app-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
