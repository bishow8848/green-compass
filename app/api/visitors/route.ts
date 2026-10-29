import { NextRequest } from "next/server";
import { hasTrustedOrigin } from "@/lib/request-security";
import { DEVICES, browserOf, recordVisit, referringSite, sourceOf, systemOf, type Device } from "@/lib/visitors";

/** Crawlers, audits, previews and monitors that run the page's scripts: not visitors. */
const BOT =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|prerender|google-|googleother|preview|ptst|gtmetrix|pingdom|uptime|monitor|phantomjs|selenium|puppeteer|playwright/i;
/** The anonymous ID components/layout/VisitorTracker.tsx makes. */
const VISITOR_ID = /^[a-f0-9]{32}$/;
/** A pathname as the tracker sends it: no query string or #section. */
const PATH = /^\/[^\s?#|]{0,199}$/;
const HOST = /^[a-z0-9.-]{1,253}$/i;
/** A tagged link's utm_source: a name or a host. */
const TAG = /^[a-z0-9][a-z0-9._-]{0,59}$/;

/**
 * A page view or a still-open ping from VisitorTracker. Always answers 204:
 * there is nothing to tell the page.
 */
export async function POST(request: NextRequest) {
  const done = new Response(null, { status: 204 });
  const userAgent = request.headers.get("user-agent") ?? "";
  if (!hasTrustedOrigin(request) || BOT.test(userAgent)) return done;

  const body = await request.json().catch(() => null);
  if (typeof body?.id !== "string" || !VISITOR_ID.test(body.id)) return done;

  if (body.kind === "ping") {
    await recordVisit(body.id);
    return done;
  }
  if (body.kind !== "view" || typeof body.path !== "string" || !PATH.test(body.path)) return done;

  const device: Device = DEVICES.includes(body.device) ? body.device : "desktop";
  // Set by Vercel from the visitor's IP; absent elsewhere.
  const country = request.headers.get("x-vercel-ip-country") ?? "";
  const referrer = typeof body.referrer === "string" && HOST.test(body.referrer) ? body.referrer : "";
  const tag = typeof body.campaign === "string" ? body.campaign.toLowerCase() : "";
  // A tagged link says where it was shared, even when the browser sends no
  // referrer: ChatGPT adds utm_source=chatgpt.com, and its apps send none.
  const from = TAG.test(tag) ? tag : referrer;
  const source = sourceOf(from, request.nextUrl.hostname);

  await recordVisit(body.id, {
    path: body.path,
    country: /^[A-Z]{2}$/.test(country) ? country : "XX",
    device,
    engaged: body.engaged === true,
    visit: body.visitStart
      ? {
          browser: browserOf(userAgent),
          system: systemOf(userAgent, device),
          returning: body.newVisitor !== true,
          source,
          referrer: source === "direct" ? "" : referringSite(from),
        }
      : undefined,
  });
  return done;
}
