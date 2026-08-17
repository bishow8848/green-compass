import type { NextRequest } from "next/server";

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

/**
 * Normalize a URL string for comparison by lowercasing and stripping trailing slash.
 */
function normalizeUrl(url: string): string {
  return url.replace(/\/+$/, "").toLowerCase();
}

/**
 * Extract the hostname from a URL-like string, normalizing it for comparison.
 */
function extractHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return url.replace(/^www\./, "").toLowerCase();
  }
}

export function hasTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  // Collect candidate origins from the request itself
  const candidates: string[] = [];
  try {
    if (request.nextUrl?.origin) {
      candidates.push(request.nextUrl.origin);
    }
  } catch {
    // nextUrl may be unavailable in test environments
  }

  // Add the Referer base origin as a fallback (covers same-origin navigations)
  if (referer) {
    try {
      candidates.push(new URL(referer).origin);
    } catch {
      // ignore invalid referer
    }
  }

  // Add configured env origins
  const envOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.AUTH_URL,
    process.env.NEXTAUTH_URL,
  ].filter((v): v is string => Boolean(v));

  // Build a set of normalized hostnames for flexible matching
  const allowedHostnames = new Set(
    [...candidates, ...envOrigins].map((u) => extractHostname(u))
  );

  // If no origin header is present, allow the request when:
  //  - the referer hostname matches an allowed hostname, OR
  //  - we are not in production (local dev)
  if (!origin) {
    if (referer) {
      try {
        return allowedHostnames.has(extractHostname(new URL(referer).origin));
      } catch {
        return process.env.NODE_ENV !== "production";
      }
    }
    return process.env.NODE_ENV !== "production";
  }

  // Exact origin match (faster path for common cases)
  const allowedOrigins = new Set(
    [...candidates, ...envOrigins].map((u) => normalizeUrl(u))
  );

  if (allowedOrigins.has(normalizeUrl(origin))) {
    return true;
  }

  // Fall back to hostname comparison (handles www vs non-www, http vs https)
  return allowedHostnames.has(extractHostname(origin));
}

export function rateLimitIdentifier(ip: string, userId?: string | null): string {
  return userId ? `${ip}:user:${userId}` : `${ip}:guest`;
}
