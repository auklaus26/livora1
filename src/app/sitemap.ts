import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services/sil",
  "/referrers",
  "/referrals/new",
  "/privacy",
  "/participant-rights",
  "/complaints",
  "/terms",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://livoracare.com.au${route}`,
    lastModified: new Date(),
  }));
}
