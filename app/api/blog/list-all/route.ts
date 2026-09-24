import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";

/**
 * GET /api/blog/list-all[?author=<slug>]
 * Returns a lightweight list of published blog posts (slug, title, tags) for
 * the hero search bar's autocomplete. `author` limits it to one author.
 */
export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const rateCheck = await checkRateLimit(apiRateLimit, ip);
  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
    );
  }

  const author = request.nextUrl.searchParams.get("author")?.trim() || undefined;
  if (author && !/^[a-z0-9-]{1,100}$/i.test(author)) {
    return NextResponse.json({ error: "Invalid author" }, { status: 400 });
  }

  try {
    const posts = await getCachedOrFetch(
      cacheKeys.blogSearchIndex(author),
      async () => {
        const rows = await prisma.blogPost.findMany({
          where: { status: "published", ...(author ? { authorSlug: author } : {}) },
          select: { slug: true, title: true, tags: true, publishedDate: true },
          orderBy: { publishedDate: "desc" },
        });
        return rows.map((row) => ({
          slug: row.slug,
          title: row.title,
          tags: (() => {
            try {
              const parsed = JSON.parse(row.tags);
              return Array.isArray(parsed) ? parsed.filter((t): t is string => typeof t === "string") : [];
            } catch {
              return [];
            }
          })(),
          date: row.publishedDate,
        }));
      },
      CACHE_TTL.DAILY
    );
    return NextResponse.json(posts, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400" },
    });
  } catch (error) {
    console.error("Failed to fetch blog posts for search:", error);
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}
