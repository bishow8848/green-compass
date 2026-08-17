"use client";

import ReactDOM from "react-dom";

/**
 * Preconnects to third-party origins critical for page load performance.
 * Runs during SSR hydration — the browser begins DNS lookup + TCP/TLS
 * handshake for Cloudinary before the LCP image is discovered.
 * Mapbox is deliberately connected only when a map is opened, avoiding
 * third-party connection work on pages and devices that never use it.
 */
export function PreloadResources() {
  ReactDOM.preconnect("https://res.cloudinary.com", { crossOrigin: "anonymous" });

  return null;
}
