import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";

/**
 * GET /api/trek/list-all
 * Returns a lightweight list of all published treks (id, title) for the admin
 * similar-treks selector dropdown.
 */
export async function GET(request: NextRequest) {
  // Rate limiting by IP
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
  try {
    const treks = await getCachedOrFetch(
      cacheKeys.treksListAll,
      () => prisma.trek.findMany({
        where: { status: "published" },
        select: {
          id: true,
          title: true,
          slug: true,
          region: true,
          difficulty: true,
          duration: true,
          category: { select: { slug: true } },
        },
        orderBy: { title: "asc" },
      }),
      CACHE_TTL.YEARLY
    );
    return NextResponse.json(treks, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400" },
    });
  } catch (error) {
    console.error("Failed to fetch treks for list-all:", error);
    return NextResponse.json({ error: "Failed to fetch treks" }, { status: 500 });
  }
}
