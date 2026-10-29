"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

/** How often a page that is open and in view says the visitor is still there. */
const PING_EVERY = 2 * 60_000;
const STORAGE_KEY = "gc-visitor-id";

/**
 * Reports each page a visitor sees for the admin Visitors page
 * (lib/visitors.ts), and pings while it stays open so they count as on the
 * site now. A visitor is an anonymous random ID kept in this browser; nothing
 * else about them is sent. Admins, the admin panel and automated browsers
 * aren't counted, and nothing is in development: a local server shares the
 * live site's Redis (.env), so it would count whoever is working on it.
 */
export function VisitorTracker() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const isAdmin = (session?.user as { role?: string } | undefined)?.role === "admin";

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (status === "loading" || isAdmin || pathname.startsWith("/admin") || navigator.webdriver) return;
    const id = visitorId();
    report(id, "view"); 
    const ping = setInterval(() => {
      if (document.visibilityState === "visible") report(id, "ping");
    }, PING_EVERY);
    return () => clearInterval(ping);
  }, [pathname, status, isAdmin]);

  return null;
}

/** Only for a browser that can't store one (some private windows): lasts this page load. */
let unstoredId: string | undefined;

/** This browser's anonymous ID, made on its first visit. */
function visitorId(): string {
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = newId();
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return (unstoredId ??= newId());
  }
}

/** 32 random hex digits. */
function newId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function report(id: string, kind: "view" | "ping") {
  fetch("/api/visitors", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, kind }),
    keepalive: true,
  }).catch(() => {});
}
