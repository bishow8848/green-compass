import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { apiRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, secretsMatch } from "@/lib/request-security";

// Secret to prevent unauthorized revalidation
// Set REVALIDATION_SECRET in environment variables
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET;

export async function POST(request: NextRequest) {
  try {
    if (!REVALIDATION_SECRET) {
      console.error("REVALIDATION_SECRET is not configured");
      return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
    }

    // This route was the only secret-guarded endpoint with no rate limit, which
    // left it open to unlimited secret guessing and, once guessed, to a cache
    // stampede — each call drops a cached page and forces a cold cross-region
    // rebuild.
    const rateCheck = await checkRateLimit(apiRateLimit, getClientIp(request));
    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateCheck.reset) } }
      );
    }
    // Verify secret
    const authHeader = request.headers.get("authorization");
    const body = await request.json().catch(() => ({}));
    const { secret, path, tag, type } = body;

    const providedSecret = authHeader?.replace("Bearer ", "") || secret;

    if (!secretsMatch(providedSecret, REVALIDATION_SECRET)) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Revalidate by path. A literal URL (/blog/post-1) must go without a type:
    // "page" turns it into the tag of a route file named /blog/post-1/page,
    // which no cached page carries, so the call silently did nothing. Route
    // patterns (/blog/[slug]) still need one.
    if (path) {
      const pathType = type === "page" || type === "layout" ? type : path.includes("[") ? "page" : undefined;
      revalidatePath(path, pathType);
      return NextResponse.json({
        revalidated: true,
        path,
        message: `Revalidated path: ${path}`,
      });
    }

    // Revalidate by tag. Callers are scripts that just wrote to the database,
    // so the old data must go now: { expire: 0 } makes the next request fetch
    // fresh instead of being served the stale copy while it revalidates.
    if (tag) {
      revalidateTag(tag, { expire: 0 });
      return NextResponse.json({
        revalidated: true,
        tag,
        message: `Revalidated tag: ${tag}`,
      });
    }

    return NextResponse.json(
      { error: "Either 'path' or 'tag' is required" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
