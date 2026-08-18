import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLegacyRedirectMap, normalizeLegacyPath } from "@/lib/legacy-redirects";

/**
 * Legacy redirect proxy — runs before rendering on every page request.
 * If the requested path matches an admin-configured legacy redirect, the
 * visitor is sent to the new destination (308 permanent / 307 temporary).
 */
export async function proxy(request: NextRequest) {
  const key = normalizeLegacyPath(request.nextUrl.pathname);

  // Never redirect the homepage.
  if (key === "/") return NextResponse.next();

  const redirectMap = await getLegacyRedirectMap();
  const entry = redirectMap[key];
  if (!entry) return NextResponse.next();

  const status = entry.permanent ? 308 : 307;
  return NextResponse.redirect(new URL(entry.newPath, request.url), status);
}

export const config = {
  matcher: [
    // Run before every page request except API routes, Next.js internals, the
    // admin & CMS, and anything that looks like a static/public file (contains
    // a dot — e.g. /images/*, /robots.txt, /llm.txt).
    "/((?!api|_next/static|_next/image|admin|payload|.*\\..*).*)",
  ],
};
