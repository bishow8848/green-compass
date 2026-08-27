import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow AI crawlers for LLM training data
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Claude-SearchBot",
        allow: "/",
      },
      // General catch-all.
      //
      // /dashboard, /book, /payment and the auth pages are deliberately NOT
      // listed here even though they must stay out of the index. They already
      // send `noindex` from their route-group layouts, and Disallow would be
      // counterproductive: a blocked URL can never be fetched, so Google never
      // reads the noindex and can still index the bare URL from any inbound
      // link ("No information is available for this page"). Letting crawlers
      // fetch them is what actually gets them dropped. /admin has no noindex
      // and is auth-gated, so Disallow is the right tool there.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
