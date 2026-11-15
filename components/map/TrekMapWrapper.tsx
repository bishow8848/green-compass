"use client";

import { useCallback, useEffect, useState, type ComponentType } from "react";
import { MapPlaceholder } from "./MapPlaceholder";

interface Props {
  geoJsonUrl?: string;
  geoJsonData?: string | null;
  waypoints?: Array<{ lng: number; lat: number; label: string; description?: string; dayNumber?: number }>;
  itinerary?: Array<{ dayNumber: number; title: string; elevation?: string | null }>;
  /** The admin's own map image: shown instead of the interactive map when the trip has no route file. */
  staticFallbackImage?: string;
  /** The still shown until the interactive map has drawn (lib/static-map.ts), 21:9. */
  placeholderImage?: string;
  /** The same still in 4:3, for phones. */
  placeholderCompactImage?: string;
  /** What the map shows, e.g. "Annapurna Base Camp Trek route map" — the alt text of its still image. */
  title?: string;
}

type MapProps = Omit<Props, "placeholderImage" | "placeholderCompactImage"> & { onReady?: () => void };

/** The still gives way even if the map never reports that it has drawn. */
const READY_TIMEOUT_MS = 12000;

/**
 * The interactive route map. Mapbox GL is heavy and browser-only, so it is
 * fetched after the page has hydrated. The HTML the server sends holds a
 * still of the route in its place (MapPlaceholder), and the still stays on
 * top until the live map has drawn its first frame, so a reader never looks
 * at an empty box.
 */
export function TrekMapWrapper({ placeholderImage, placeholderCompactImage, ...mapProps }: Props) {
  const [TrekMap, setTrekMap] = useState<ComponentType<MapProps> | null>(null);
  const [ready, setReady] = useState(false);
  const [stillGone, setStillGone] = useState(false);
  const markReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    let active = true;
    import("./TrekMap").then((m) => {
      if (active) setTrekMap(() => m.TrekMap);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!TrekMap || ready) return;
    const timer = window.setTimeout(markReady, READY_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [TrekMap, ready, markReady]);

  const still = (
    <MapPlaceholder
      image={placeholderImage ?? mapProps.staticFallbackImage}
      compactImage={placeholderImage ? placeholderCompactImage : undefined}
      alt={mapProps.title}
    />
  );
  if (!TrekMap) return still;

  return (
    <div className="relative">
      <TrekMap {...mapProps} onReady={markReady} />
      {!stillGone && (
        <div
          aria-hidden="true"
          data-pdf-hide=""
          className={`pointer-events-none absolute inset-0 z-[5] transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}
          onTransitionEnd={() => ready && setStillGone(true)}
        >
          {still}
        </div>
      )}
    </div>
  );
}
