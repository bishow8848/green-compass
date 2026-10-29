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

/**
 * Reports each page a visitor sees for the admin Visitors page
 * (lib/visitors.ts), and pings while it stays open so they count as on the
 * site now. A visitor is an anonymous random ID kept in this browser. Besides
 * it, each report carries only the page's path and the type of device, and
 * the first of a visit whether the visitor is new and the host of the site
 * that sent them here. Admins, the
 * admin panel and automated browsers aren't counted, and nothing is in
 * development: a local server shares the live site's Redis (.env), so it
 * would count whoever is working on it.
 */
export function VisitorTracker() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAdmin = (session?.user as { role?: string } | undefined)?.role === "admin";

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (status === "loading" || isAdmin || pathname.startsWith("/admin") || navigator.webdriver) return;
    const id = visitorId();
    const page = visitStep(true);
    report({
      id,
      kind: "view",
      path: pathname,
      device: deviceType(),
      ...(page === 1 && { visitStart: true, referrer: referrerHost(), newVisitor: idMadeThisLoad }),
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
 * lapses after VISIT_GAP without a page or ping.
 */
function visitStep(viewing: boolean): number {
  const now = Date.now();
  const add = viewing ? 1 : 0;
  try {
    const [at, pages] = (localStorage.getItem(VISIT_KEY) ?? "").split(":").map(Number);
    const count = (now - at <= VISIT_GAP ? pages || 0 : 0) + add;
    localStorage.setItem(VISIT_KEY, `${now}:${count}`);
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
 * The host of the site that linked here. Only the page load's first page has
 * one: a visit that starts later, on a click within the site, came from here.
 */
function referrerHost(): string {
  if (!firstPageOfLoad || !document.referrer) return "";
  try {
    return new URL(document.referrer).hostname;
  } catch {
    return "";
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
