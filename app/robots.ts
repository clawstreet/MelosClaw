import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://melosclaw.com/sitemap.xml",
    host: "https://melosclaw.com",
  };
}
