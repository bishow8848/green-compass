import { handlers } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { authRateLimit, checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, hasTrustedOrigin } from "@/lib/request-security";

async function rateLimitedPOST(request: NextRequest) {
  if (!hasTrustedOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }
  // Apply rate limiting to POST requests (credentials login)
  const ip = getClientIp(request);
  const rateCheck = await checkRateLimit(authRateLimit, ip);
  if (!rateCheck.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateCheck.reset),
          "X-RateLimit-Remaining": String(rateCheck.remaining),
        },
      }
    );
  }

  return handlers.POST(request);
}

export const GET = handlers.GET;
export const POST = rateLimitedPOST;
