"use client";

import { useEffect } from "react";

/**
 * Scrolls to the URL hash (e.g. #itinerary, #reviews, #map) after the page has
 * rendered/hydrated, offsetting for the sticky header. The App Router's client
 * navigation doesn't reliably scroll to in-page anchors on statically rendered
 * pages, so this runs explicitly on mount.
 */
export function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));
    let raf = 0;
    let tries = 0;

    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        // Offset by the sticky header so the section heading isn't hidden behind it.
        const header = document.querySelector("div.sticky.top-0");
        const offset = header?.getBoundingClientRect().height || 80;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
        return;
      }
      // Retry briefly in case the section mounts slightly after hydration.
      if (++tries < 30) {
        raf = window.requestAnimationFrame(attempt);
      }
    };

    raf = window.requestAnimationFrame(attempt);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return null;
}
