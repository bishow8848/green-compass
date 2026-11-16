import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCachedOrFetch, cacheKeys, CACHE_TTL } from "@/lib/redis";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/request-security";
import { HERO_MAP_CATEGORY, heroMapData } from "@/lib/hero-map";

/**
 * GET /api/hero-map
 * Every published trek's route, simplified for the home page hero map. The
 * map fetches it only once someone zooms the globe in, so the routes stay out
 * of the home page's HTML. Cached under a `treks:` key, which a trek save
 * clears.
 */
export async function GET(request: NextRequest) {
  const rateCheck = await checkRateLimit(apiRateLimit, getClientIp(request));
  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
    );
  }
  try {
    const data = await getCachedOrFetch(
      cacheKeys.heroMapRoutes,
      async () =>
        heroMapData(
          await prisma.trek.findMany({
            where: { status: "published", category: { slug: HERO_MAP_CATEGORY } },
            select: {
              slug: true,
              title: true,
              duration: true,
              difficulty: true,
              region: true,
              waypoints: true,
              geoJsonData: true,
              category: { select: { slug: true } },
            },
            orderBy: { title: "asc" },
          })
        ),
      CACHE_TTL.MODERATE
    );
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400" },
    });
  } catch (error) {
    console.error("Failed to build the hero map routes:", error);
    return NextResponse.json({ error: "Failed to load trek routes" }, { status: 500 });
  }
}
