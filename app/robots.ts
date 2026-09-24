import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// AI search and assistant crawlers, welcomed by name.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Google-Extended",
];

// /dashboard, /book, /payment and the auth pages are deliberately NOT listed
// here even though they must stay out of the index. They already send
// `noindex` from their route-group layouts, and Disallow would be
// counterproductive: a blocked URL can never be fetched, so Google never reads
// the noindex and can still index the bare URL from any inbound link ("No
// information is available for this page"). Letting crawlers fetch them is
// what actually gets them dropped. /admin has no noindex and is auth-gated, so
// Disallow is the right tool there.
const DISALLOW = ["/admin", "/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // A crawler obeys only the most specific group that names it and
      // ignores "*", so this group must repeat the disallow list — a bare
      // `Allow: /` opened /admin and /api/ to these bots.
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
      { userAgent: "*", allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
