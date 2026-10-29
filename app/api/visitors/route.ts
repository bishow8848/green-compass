import { NextRequest } from "next/server";
import { hasTrustedOrigin } from "@/lib/request-security";
import { recordVisit } from "@/lib/visitors";

/** Crawlers and audits that run the page's scripts: not visitors. */
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|prerender/i;
/** The anonymous ID components/layout/VisitorTracker.tsx makes. */
const VISITOR_ID = /^[a-f0-9]{32}$/;

/** A page view or a still-open ping from VisitorTracker. Always answers 204: there is nothing to tell the page. */
export async function POST(request: NextRequest) {
  const done = new Response(null, { status: 204 });
  if (!hasTrustedOrigin(request) || BOT.test(request.headers.get("user-agent") ?? "")) return done;

  const body = await request.json().catch(() => null);
  const kind = body?.kind;
  if (typeof body?.id !== "string" || !VISITOR_ID.test(body.id) || (kind !== "view" && kind !== "ping")) return done;

  await recordVisit(body.id, kind);
  return done;
}
