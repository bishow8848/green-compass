import type { HeroMapData } from "@/lib/hero-map";

let pending: Promise<HeroMapData | null> | null = null;

/**
 * The hero map's trek routes, fetched once and shared: the hero starts it as
 * soon as someone zooms the globe in, so the routes are in by the time the map
 * opens. A failed fetch resolves to null and is tried again on the next call.
 */
export function loadHeroMapData(): Promise<HeroMapData | null> {
  pending ??= fetch("/api/hero-map")
    .then((res) => (res.ok ? (res.json() as Promise<HeroMapData>) : null))
    .catch(() => null)
    .then((data) => {
      if (!data) pending = null;
      return data;
    });
  return pending;
}

/**
 * The map module itself (maplibre and all). Only ever called from a zoom
 * gesture, never at render, so none of it is part of the page load.
 */
export const loadHeroMapModule = () => import("./HeroNepalMap");

let warmed = false;
/**
 * Opens the connection to Mapbox (DNS, TLS) ahead of the map's first tile and
 * font requests, which saves a round trip or two on a phone. Called with the
 * other map preloads, on the first sign someone means to zoom in.
 */
export function warmMapConnection(): void {
  if (warmed || typeof document === "undefined" || !process.env.NEXT_PUBLIC_MAPBOX_TOKEN) return;
  warmed = true;
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = "https://api.mapbox.com";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}
