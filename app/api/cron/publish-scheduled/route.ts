import { NextRequest, NextResponse } from "next/server";
import { publishDuePosts } from "@/lib/blog-publisher";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, secretsMatch } from "@/lib/request-security";

/**
 * GET|POST /api/cron/publish-scheduled
 *
 * The tick that makes scheduled blog posts go live. Each call publishes the
 * posts whose time has come and refreshes the pages that list them; with
 * nothing due it does one read and returns.
 *
 * Triggers (any number may run side by side — the job is idempotent):
 *   - Vercel Cron, from vercel.json
 *   - the "Publish scheduled posts" GitHub Actions workflow, every 15 minutes
 *
 * Authorisation. A caller presenting CRON_SECRET (Vercel Cron sends it by
 * itself once the variable exists) or REVALIDATION_SECRET is always let in.
 * Until CRON_SECRET is configured the route also answers anonymous callers,
 * rate limited: it takes no input and can only do what is already overdue, so
 * the worst an outsider achieves is publishing a post a few minutes before the
 * next tick would have. Set CRON_SECRET to close it.
 */
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function handle(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const trusted =
    secretsMatch(token, cronSecret) || secretsMatch(token, process.env.REVALIDATION_SECRET);

  if (!trusted) {
    if (cronSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Fail open on a rate-limiter outage: Redis being down must not be the
    // reason a post misses its hour.
    const rateCheck = await checkRateLimit(apiRateLimit, getClientIp(request)).catch(() => null);
    if (rateCheck && !rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
      );
    }
  }

  try {
    const published = await publishDuePosts();
    if (published.length > 0) {
      console.log(`[publish-scheduled] published ${published.length}: ${published.map((p) => p.slug).join(", ")}`);
    }
    return NextResponse.json(
      { published: published.length, posts: published.map((p) => p.slug) },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[publish-scheduled] failed:", error);
    return NextResponse.json({ error: "Publish job failed" }, { status: 500 });
  }
}

export const GET = handle;
export const POST = handle;
