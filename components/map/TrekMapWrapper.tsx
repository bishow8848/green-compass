"use client";

import { useEffect, useState, type ComponentType } from "react";
import { MapPlaceholder } from "./MapPlaceholder";

interface Props {
  geoJsonUrl?: string;
  geoJsonData?: string | null;
  waypoints?: Array<{ lng: number; lat: number; label: string; description?: string; dayNumber?: number }>;
  itinerary?: Array<{ dayNumber: number; title: string; elevation?: string | null }>;
  staticFallbackImage?: string;
  /** What the map shows, e.g. "Annapurna Base Camp Trek route map" — the alt text of its still image. */
  title?: string;
}

/**
 * The interactive route map. Mapbox GL is heavy and browser-only, so it is
 * fetched after the page has hydrated; until then, and in the HTML the server
 * sends, the map's place is held by MapPlaceholder.
 */
export function TrekMapWrapper(props: Props) {
  const [TrekMap, setTrekMap] = useState<ComponentType<Props> | null>(null);

  useEffect(() => {
    let active = true;
    import("./TrekMap").then((m) => {
      if (active) setTrekMap(() => m.TrekMap);
    });
    return () => {
      active = false;
    };
  }, []);

  if (TrekMap) return <TrekMap {...props} />;
  return <MapPlaceholder image={props.staticFallbackImage} alt={props.title} />;
}
