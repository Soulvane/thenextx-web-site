import type { MetadataRoute } from "next";

const BASE = "https://thenextx.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/services",
    "/ai-agents",
    "/app-development",
    "/shopify",
    "/team",
    "/contact",
    "/yogylogy",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/yogylogy" ? 0.9 : 0.7,
  }));
}
