"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Loader2, Maximize2, Minimize2 } from "lucide-react";
import { CLOUDINARY_CLOUD_NAME } from "@/lib/cloudinary-url";

// Dynamic import with ssr:false — Mapbox GL JS is heavy and must not block LCP
const MapWithNoSSR = dynamic(
  () => import("./MapContent"),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-[21/9] items-center justify-center bg-surface">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-sm text-text-muted">Loading map...</p>
        </div>
      </div>
    ),
  }
);

interface TrekMapProps {
  geoJsonUrl?: string;
  geoJsonData?: string | null;
  waypoints?: Array<{ lng: number; lat: number; label: string; description?: string; dayNumber?: number }>;
  itinerary?: Array<{ dayNumber: number; title: string; elevation?: string | null }>;
  staticFallbackImage?: string;
  /** When set, the map starts already expanded (fullscreen) */
  startExpanded?: boolean;
  /** When set, clicking the minimize button calls this instead of toggling locally */
  onClose?: () => void;
}

export function TrekMap({
  geoJsonUrl,
  geoJsonData,
  waypoints,
  itinerary,
  staticFallbackImage,
  startExpanded,
  onClose,
}: TrekMapProps) {
  const [isExpanded, setIsExpanded] = useState(startExpanded ?? false);

  // Images are stored either as a bare Cloudinary public ID or a full URL.
  const staticImageSrc = staticFallbackImage
    ? staticFallbackImage.startsWith("http")
      ? staticFallbackImage
      : `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${staticFallbackImage}`
    : null;

  // No route file (.gpx/.kml/.geojson) was uploaded for this trek. If the admin
  // uploaded a map image instead, show that image in place of the interactive
  // map — otherwise the map would render with no route on it.
  const imageOnly = !geoJsonUrl && !geoJsonData && !!staticImageSrc;

  // Lock page scrolling while the map is expanded to fullscreen (fixed
  // inset-0 overlay) so the side scrollbar disappears and the page behind
  // can't scroll. We lock BOTH <html> and <body> because on many setups the
  // actual scrolling element is <html>, and setProperty(..., "important")
  // guards against stylesheet overrides — same pattern as MapContent.tsx.
  useEffect(() => {
    if (!isExpanded) return;

    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
    };

    html.style.setProperty("overflow", "hidden", "important");
    body.style.setProperty("overflow", "hidden", "important");

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
    };
  }, [isExpanded]);

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border transition-all ${
        isExpanded ? "fixed inset-0 z-[70] shadow-2xl" : "relative"
      }`}
    >
      <div className={isExpanded ? "h-full" : "aspect-[21/9]"}>
        {imageOnly ? (
          <div className="relative h-full w-full bg-surface">
            <Image
              src={staticImageSrc!}
              alt="Trek route map"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className={isExpanded ? "object-contain" : "object-cover"}
            />
          </div>
        ) : (
          <>
            {/* Static fallback image for search engine crawlers and non-JS contexts */}
            {staticImageSrc && (
              <noscript>
                <div className="relative h-full w-full">
                  <Image
                    src={staticImageSrc}
                    alt="Trek route map"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </noscript>
            )}
            <MapWithNoSSR
              geoJsonUrl={geoJsonUrl}
              geoJsonData={geoJsonData}
              waypoints={waypoints}
              itinerary={itinerary}
            />
          </>
        )}
      </div>

      {/* Controls overlay */}
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <button
          onClick={() => {
            if (isExpanded && onClose) {
              onClose();
            } else {
              setIsExpanded(!isExpanded);
            }
          }}
          className="rounded-lg bg-white/90 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          aria-label={isExpanded ? "Minimize map" : "Expand map"}
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4 text-slate-700" />
          ) : (
            <Maximize2 className="h-4 w-4 text-slate-700" />
          )}
        </button>
      </div>

      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute inset-0 z-[-1] bg-black/50"
          aria-label="Close expanded map"
        />
      )}
    </div>
  );
}
