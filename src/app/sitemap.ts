import type { MetadataRoute } from "next";
import { LOCALES } from "@/i18n/translations";

const BASE = "https://thenextx.net";

const PATHS = [
  "",
  "/services",
  "/app-development",
  "/shopify",
  "/team",
  "/contact",
  "/mailing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${BASE}/en${path}`,
          ko: `${BASE}/ko${path}`,
        },
      },
    }))
  );
}
