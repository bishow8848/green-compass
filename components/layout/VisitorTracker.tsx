"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

/** How often a page that is open and in view says the visitor is still there. */
const PING_EVERY = 2 * 60_000;
/** A visit ends after this long without a page view or ping; the next page starts a new one. */
const VISIT_GAP = 30 * 60_000;
const STORAGE_KEY = "gc-visitor-id";
const VISIT_KEY = "gc-visit-at";
/** Set in a browser an admin has signed in on. */
const IGNORE_KEY = "gc-visitor-ignore";

/**
 * Reports each page a visitor sees for the admin Visitors page
 * (lib/visitors.ts), and pings while it stays open so they count as on the
 * site now. A visitor is an anonymous random ID kept in this browser. Besides
 * it, each report carries only the page's path and the type of device, and
 * the first of a visit whether the visitor is new and where they came from:
 * the host of the site that linked here, or the source a tagged link names.
 * The admin panel and automated browsers aren't counted, nor is a browser an
 * admin has signed in on, even once they sign out, so the team's own checks
 * of the site stay out of the numbers. Nothing is counted in development: a
 * local server shares the live site's Redis (.env), so it would count whoever
 * is working on it.
 */
export function VisitorTracker() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAdmin = (session?.user as { role?: string } | undefined)?.role === "admin";

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (status === "loading") return;
    if (isAdmin) return ignoreThisBrowser();
    if (ignored() || pathname.startsWith("/admin") || navigator.webdriver) return;
    const id = visitorId();
    const { referrer, campaign } = arrival();
    // Back from paying, through Stripe or the card's bank: the same visit.
    const page = visitStep(true, pathname.startsWith("/payment/") ? "" : campaign || referrer.replace(/^www\./, ""));
    report({
      id,
      kind: "view",
      path: pathname,
      device: deviceType(),
      ...(page === 1 && { visitStart: true, referrer, campaign, newVisitor: idMadeThisLoad && firstPageOfLoad }),
      // A second page means the visit didn't bounce.
      ...(page === 2 && { engaged: true }),
    });
    firstPageOfLoad = false;
    const ping = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      visitStep(false);
      report({ id, kind: "ping" });
    }, PING_EVERY);
    return () => clearInterval(ping);
  }, [pathname, status, isAdmin]);

  return null;
}

/** Only for a browser that can't store one (some private windows): lasts this page load. */
let unstoredId: string | undefined;
let unstoredPages = 0;
let firstPageOfLoad = true;
/** The ID was made on this page load, so this is the visitor's first visit. */
let idMadeThisLoad = false;

function ignoreThisBrowser() {
  try {
    localStorage.setItem(IGNORE_KEY, "1");
  } catch {
    // Can't be remembered: the admin is still left out while signed in.
  }
}

function ignored(): boolean {
  try {
    return localStorage.getItem(IGNORE_KEY) === "1";
  } catch {
    return false;
  }
}

/** This browser's anonymous ID, made on its first visit. */
function visitorId(): string {
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = newId();
      localStorage.setItem(STORAGE_KEY, id);
      idMadeThisLoad = true;
    }
    return id;
  } catch {
    idMadeThisLoad = true;
    return (unstoredId ??= newId());
  }
}

/** 32 random hex digits. */
function newId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/**
 * Marks the visitor as here now, counting a page if they are `viewing` one,
 * and returns how many pages the visit has had: 1 starts a new visit. A visit
 * lapses after VISIT_GAP without a page or ping. A page opened from another
 * site, `from`, starts a new one too, unless the visit came from there, so
 * each visit is credited to where it came from.
 */
function visitStep(viewing: boolean, from = ""): number {
  const now = Date.now();
  const add = viewing ? 1 : 0;
  try {
    const [at, pages, visitFrom = ""] = (localStorage.getItem(VISIT_KEY) ?? "").split(":");
    const going = now - Number(at) <= VISIT_GAP && (!from || from === visitFrom);
    const count = (going ? Number(pages) || 0 : 0) + add;
    localStorage.setItem(VISIT_KEY, `${now}:${count}:${going ? visitFrom : from}`);
    return count;
  } catch {
    return (unstoredPages += add);
  }
}

function deviceType(): "desktop" | "mobile" | "tablet" {
  const ua = navigator.userAgent;
  // iPadOS asks for desktop sites, so an iPad says Macintosh; only touch gives it away.
  if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
    return "tablet";
  }
  return /Mobi|iPhone|iPod|Android/i.test(ua) ? "mobile" : "desktop";
}

/**
 * Where this page load came from: the host of another site that linked here,
 * and the source a tagged link names (utm_source; ChatGPT adds one to its
 * links). Only the load's first page has them: a visit that starts later, on
 * a click within the site, came from here.
 */
function arrival(): { referrer: string; campaign: string } {
  if (!firstPageOfLoad) return { referrer: "", campaign: "" };
  const tag = (new URLSearchParams(location.search).get("utm_source") ?? "").toLowerCase();
  const campaign = /^[a-z0-9][a-z0-9._-]{0,59}$/.test(tag) ? tag : "";
  const site = (host: string) => host.replace(/^www\./, "");
  try {
    const host = new URL(document.referrer).hostname;
    return { referrer: site(host) === site(location.hostname) ? "" : host, campaign };
  } catch {
    // No referrer, or not a URL.
    return { referrer: "", campaign };
  }
}

function report(body: Record<string, unknown>) {
  fetch("/api/visitors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  }).catch(() => {});
}
