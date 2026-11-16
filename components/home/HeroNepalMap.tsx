"use client";

/**
 * The map the home page hero dives into from its 3D globe: Nepal on Mapbox
 * satellite imagery, filling the hero, with the eight trekking regions drawn
 * and bordered. Pick a region (or zoom into one) and only that region stays
 * coloured, with just its treks drawn, each in its own colour; hovering a
 * route names the trek, clicking it opens the trek page. Another region is a
 * click (or a chip, on phones) away; the back arrow zooms out to all of them.
 *
 * It is not part of the page: GreenCompassHero imports this module only when
 * someone zooms the globe in, and unmounts it once the map is closed. The map
 * starts as a globe sized and placed exactly where the 3D globe was, then
 * flies in, so the hand-over reads as one continuous zoom.
 *
 * Every screen gets the same slim label at the top saying which region is on
 * show, with a back arrow; regions are picked straight off the map. Narrower
 * screens run the map lighter (flat, no terrain, capped pixel density, lighter
 * tiles) to stay smooth on phones and tablets.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NEPAL_BOUNDS, NEPAL_OUTLINE_GEOJSON, NEPAL_RING } from "@/lib/nepal-boundary";
import {
  regionAt,
  TREK_REGIONS,
  TREK_REGION_BY_SLUG,
  TREK_REGIONS_GEOJSON,
  type TrekRegionSlug,
} from "@/lib/nepal-trek-regions";
import {
  addPeakLayers,
  mapboxGlyphsUrl,
  PEAKS_DOT_LAYER_ID,
  PEAKS_HIT_LAYER_ID,
  PEAKS_LABEL_LAYER_ID,
} from "@/lib/map-peaks";
import type { HeroRouteFeature, HeroRouteProps } from "@/lib/hero-map";
import { loadHeroMapData } from "./hero-map-data";
import type { GlobeOrigin, HeroNepalMapProps } from "./hero-map-types";

// This module only loads once someone starts zooming the globe. Start
// maplibre's background workers right away, so they are up by the time the
// dive asks for the map instead of starting with it.
if (typeof window !== "undefined") maplibregl.prewarm();

/** A trek route as the map draws it: with its own line colour. */
type MapRoute = HeroRouteProps & { color: string };
type MapRouteFeature = Omit<HeroRouteFeature, "properties"> & { properties: MapRoute };

/**
 * What the map is showing. "nepal": the country with every region. "region":
 * zoomed in, normally with one region picked (`selected`) — zoomed in over
 * ground outside the eight, nothing is picked and no treks are drawn.
 */
interface ViewState {
  level: "nepal" | "region";
  selected: TrekRegionSlug | null;
}

/** What the hover card is showing: the route(s) under the pointer, or a region. */
type Tip = { kind: "routes"; routes: MapRoute[] } | { kind: "region"; slug: TrekRegionSlug; switching: boolean } | null;

/** The pick list for a click on shared trail: opens below the point, or above it (anchored by its bottom edge). */
interface Chooser {
  left: number;
  top?: number;
  bottom?: number;
  maxHeight: number;
  routes: MapRoute[];
}

const NEPAL_CENTER: [number, number] = [84.12, 28.39];
/** How far past Nepal's fitted zoom the trek routes fade in and the region fills fade back. */
const ROUTE_STEP = 0.9;
/** How far below Nepal's fitted zoom the map hands back to the globe. */
const EXIT_STEP = 1.1;
const INTRO_MS = 1300;
/** How long the map waits for its first tiles before flying in anyway (the ocean colour stands in). */
const FIRST_TILES_MS = 400;
/** Give up on a map that has not shown anything by then. */
const FAIL_MS = 15000;
/** From this width up: mouse-sized controls and 3D terrain. */
const WIDE_PX = 1024;
const ZERO = { top: 0, bottom: 0, left: 0, right: 0 };
const INK = "#06140f";

const HOVER: maplibregl.ExpressionSpecification = ["boolean", ["feature-state", "hover"], false];
/** No trek: the route filter when nothing is picked (see applyDisplay). */
const NO_ROUTES: maplibregl.FilterSpecification = ["==", ["get", "id"], "__none__"];
/**
 * Line colours for the treks of one region, so neighbouring trails tell
 * apart: bright enough for satellite imagery, and never white, which marks
 * the route under the pointer.
 */
const TREK_PALETTE = [
  "#ff6b6b", "#ffd43b", "#4dabf7", "#51cf66", "#f783ac", "#ff922b", "#9775fa", "#22b8cf",
  "#a9e34b", "#e64980", "#20c997", "#748ffc", "#ffc078", "#66d9e8", "#fcc2d7", "#b2f2bb",
];
const PEAK_LAYERS = ["peaks-dot-halo", PEAKS_DOT_LAYER_ID, PEAKS_LABEL_LAYER_ID, PEAKS_HIT_LAYER_ID];
const LABEL_FONT = ["DIN Pro Medium", "Arial Unicode MS Regular"];

/**
 * Shared look for the floating controls over the imagery. Nearly opaque
 * rather than frosted: a backdrop blur over a moving WebGL map has to be
 * redone every frame of a pan or pinch, which is what made zooming stutter
 * on phones.
 */
const GLASS = "border border-white/60 bg-background/95 text-foreground shadow-lg";
/** Sea colour drawn on the globe until its satellite tiles arrive, so the map can show at once. */
const OCEAN = "#123642";

/**
 * The eight regions together, with a margin. Narrow screens frame this as
 * "the country" instead of all of Nepal: the far west holds no trekking
 * region, and leaving it just off screen makes the regions about 40% bigger —
 * enough for every name to fit, and for the small eastern regions to tap.
 */
const REGIONS_BOUNDS: [[number, number], [number, number]] = (() => {
  const m = 0.25;
  const west = Math.min(...TREK_REGIONS.map((r) => r.bounds[0][0]));
  const south = Math.min(...TREK_REGIONS.map((r) => r.bounds[0][1]));
  const east = Math.max(...TREK_REGIONS.map((r) => r.bounds[1][0]));
  const north = Math.max(...TREK_REGIONS.map((r) => r.bounds[1][1]));
  return [[west - m, south - m], [east + m, north + m]];
})();

function ringArea(ring: Array<[number, number]>) {
  let area = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    area += (ring[j][0] - ring[i][0]) * (ring[j][1] + ring[i][1]);
  }
  return area;
}

/**
 * Everything around Nepal, dimmed so the country reads first. maplibre tells
 * a hole from an outer ring by its winding, so Nepal runs against the frame.
 */
const OUTSIDE_NEPAL = (() => {
  const frame: Array<[number, number]> = [[50, 0], [120, 0], [120, 50], [50, 50], [50, 0]];
  const hole = Math.sign(ringArea(frame)) === Math.sign(ringArea(NEPAL_RING)) ? [...NEPAL_RING].reverse() : NEPAL_RING;
  return {
    type: "Feature" as const,
    properties: {},
    geometry: { type: "Polygon" as const, coordinates: [frame, hole] },
  };
})();

/** Region names for the map. Where labels collide, the region with more treks wins. */
/**
 * Where each name sits beside its point on phones and tablets, placed by
 * hand: there the regions are small and all eight names must show (regions
 * are picked straight off the map), so they cannot be left to automatic
 * placement, which drops names it cannot fit. These keep clear of each other
 * down to a 360px-wide screen. "right" puts the name to the left of its point
 * (its right edge at the point), "top" below it, "bottom" above it.
 */
const PHONE_ANCHOR: Record<TrekRegionSlug, "center" | "right" | "top" | "bottom"> = {
  dolpo: "right",
  mustang: "center",
  annapurna: "center",
  manaslu: "center",
  langtang: "center",
  everest: "right",
  makalu: "top",
  kanchenjunga: "bottom",
};

/**
 * Phones and tablets only: Manaslu's name moves up to the north of its region,
 * by the Manaslu massif itself. From the middle of the district it would sit
 * on Langtang's name.
 */
const PHONE_LABEL_AT: Partial<Record<TrekRegionSlug, [number, number]>> = {
  // Just inside the Tibet border above the massif: only the name sits here, nothing is tested against it.
  manaslu: [84.84, 28.7],
};

function labelData(counts: Map<string, number>, lite: boolean) {
  return {
    type: "FeatureCollection" as const,
    features: TREK_REGIONS.map((r) => ({
      type: "Feature" as const,
      properties: { slug: r.slug, short: r.short.toUpperCase(), rank: -(counts.get(r.slug) ?? 0), anchor: PHONE_ANCHOR[r.slug] },
      geometry: { type: "Point" as const, coordinates: (lite && PHONE_LABEL_AT[r.slug]) || r.label },
    })),
  };
}

/** Gives every trek its own colour within its region (in list order, so neighbours in the list differ too). */
function colourTreks(features: HeroRouteFeature[]): MapRouteFeature[] {
  const used = new Map<string, number>();
  return features.map((f) => {
    const group = f.properties.region ?? "";
    const i = used.get(group) ?? 0;
    used.set(group, i + 1);
    return { ...f, properties: { ...f.properties, color: TREK_PALETTE[i % TREK_PALETTE.length] } };
  });
}

function regionCounts(routes: Array<{ properties: { region: TrekRegionSlug | null } }>) {
  const counts = new Map<string, number>();
  for (const f of routes) {
    const region = f.properties.region;
    if (region) counts.set(region, (counts.get(region) ?? 0) + 1);
  }
  return counts;
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;
const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * A globe from space that is flat by the time Nepal fills the screen.
 *
 * Set once, in the style: maplibre reloads every tile source whenever the
 * projection is set again (an interpolated projection never counts as "the
 * same"), and reloading tiles that are still downloading trips a maplibre
 * race that throws "Cannot read properties of undefined (reading 'signal')".
 */
function globeProjection(fitZ: number): maplibregl.ProjectionSpecification {
  return { type: ["interpolate", ["linear"], ["zoom"], fitZ - 2, "vertical-perspective", fitZ - 0.6, "mercator"] };
}

const TERRAIN: maplibregl.TerrainSpecification = { source: "terrain", exaggeration: 1.3 };

function buildStyle(token: string, lite: boolean, fitZ: number): maplibregl.StyleSpecification {
  return {
    version: 8,
    // Region names and peak labels render nothing without a glyph endpoint.
    glyphs: mapboxGlyphsUrl(token),
    projection: globeProjection(fitZ),
    sources: {
      satellite: {
        type: "raster",
        // Lighter JPEGs on phones and tablets: no visible loss at that size, a good deal less data.
        tiles: [`https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.${lite ? "jpg80" : "jpg90"}?access_token=${token}`],
        tileSize: 512,
        attribution: "&copy; Mapbox &copy; OpenStreetMap contributors &copy; Maxar",
      },
      terrain: {
        type: "raster-dem",
        tiles: [`https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${token}`],
        tileSize: 512,
        maxzoom: 14,
        encoding: "mapbox",
      },
      "outside-nepal": { type: "geojson", data: OUTSIDE_NEPAL },
      nepal: { type: "geojson", data: NEPAL_OUTLINE_GEOJSON },
      regions: { type: "geojson", data: TREK_REGIONS_GEOJSON, promoteId: "slug" },
      "region-labels": { type: "geojson", data: labelData(new Map(), lite) },
      routes: { type: "geojson", data: { type: "FeatureCollection", features: [] }, promoteId: "id" },
    },
    layers: [
      { id: "ocean", type: "background", paint: { "background-color": OCEAN } },
      { id: "satellite", type: "raster", source: "satellite", paint: { "raster-saturation": -0.1 } },
      {
        id: "outside-nepal",
        type: "fill",
        source: "outside-nepal",
        // Faded in with zoom: on the globe it would read as a dark box.
        paint: { "fill-color": INK, "fill-opacity": ["interpolate", ["linear"], ["zoom"], 3.5, 0, 5, 0.55] },
      },
      // Same kinds of expression as applyDisplay sets later (see the note there).
      {
        id: "region-fill",
        type: "fill",
        source: "regions",
        paint: {
          "fill-color": ["get", "color"],
          "fill-opacity": [
            "interpolate", ["linear"], ["zoom"],
            fitZ + ROUTE_STEP - 0.5, ["case", HOVER, 0.5, 0.28],
            fitZ + ROUTE_STEP + 0.6, ["case", HOVER, 0.18, 0.06],
          ],
        },
      },
      {
        id: "nepal-border-casing",
        type: "line",
        source: "nepal",
        layout: { "line-join": "round" },
        paint: { "line-color": INK, "line-width": 4, "line-opacity": 0.5, "line-blur": 1 },
      },
      {
        id: "nepal-border",
        type: "line",
        source: "nepal",
        layout: { "line-join": "round" },
        paint: { "line-color": "#ffffff", "line-width": 1.6, "line-opacity": 0.9, "line-dasharray": [3, 2] },
      },
      {
        id: "region-border-casing",
        type: "line",
        source: "regions",
        layout: { "line-join": "round" },
        paint: { "line-color": INK, "line-width": 5, "line-opacity": ["case", ["==", ["get", "slug"], "__none__"], 0.45, 0.45], "line-blur": 1.5 },
      },
      {
        id: "region-border",
        type: "line",
        source: "regions",
        layout: { "line-join": "round" },
        paint: { "line-color": ["get", "color"], "line-width": ["case", HOVER, 3.4, 2], "line-opacity": 0.95 },
      },
      {
        id: "route-casing",
        type: "line",
        source: "routes",
        layout: { "line-join": "round", "line-cap": "round" },
        filter: NO_ROUTES,
        paint: { "line-color": INK, "line-width": ["case", HOVER, 10, 6], "line-blur": 1.5, "line-opacity": 0.5 },
      },
      {
        id: "route-traced",
        type: "line",
        source: "routes",
        filter: NO_ROUTES,
        layout: { "line-join": "round", "line-cap": "round" },
        paint: { "line-color": ["case", HOVER, "#ffffff", ["get", "color"]], "line-width": ["case", HOVER, 4.5, 3] },
      },
      {
        // Straight lines between overnight stops: dashed, so they never pass for a surveyed trail.
        id: "route-estimated",
        type: "line",
        source: "routes",
        filter: NO_ROUTES,
        layout: { "line-join": "round" },
        paint: {
          "line-color": ["case", HOVER, "#ffffff", ["get", "color"]],
          "line-width": ["case", HOVER, 4, 2.6],
          "line-dasharray": [1.6, 1.2],
        },
      },
      {
        // Invisible and wide, so a route is easy to land on with a pointer or a finger.
        id: "route-hit",
        type: "line",
        source: "routes",
        filter: NO_ROUTES,
        paint: { "line-color": INK, "line-width": 18, "line-opacity": 0 },
      },
      {
        id: "region-label",
        type: "symbol",
        source: "region-labels",
        layout: {
          "text-field": ["get", "short"],
          "text-font": LABEL_FONT,
          "text-size": 12,
          "text-letter-spacing": lite ? 0.04 : 0.12,
          ...(lite
            ? {
                // Hand-placed (PHONE_ANCHOR) and always shown: every name is needed to pick by.
                "text-anchor": ["get", "anchor"],
                "text-offset": [
                  "match", ["get", "anchor"],
                  "top", ["literal", [0, 0.9]],
                  "bottom", ["literal", [0, -0.9]],
                  "right", ["literal", [-0.5, 0]],
                  ["literal", [0, 0]],
                ],
                "text-allow-overlap": true,
                "text-ignore-placement": true,
              }
            : {
                // Small neighbours (Everest, Makalu, Kanchenjunga) shift around their point to make room.
                "text-variable-anchor": ["center", "bottom", "top", "left", "right"],
                "text-radial-offset": 0.5,
                "symbol-sort-key": ["get", "rank"],
                "text-padding": 2,
              }),
        },
        paint: { "text-color": "#ffffff", "text-halo-color": "rgba(6,20,15,0.85)", "text-halo-width": 1.6 },
      },
    ],
  } as maplibregl.StyleSpecification;
}

/**
 * How much of the hero hangs below the fold with the page at the top: the
 * hero is a full screen tall, but the sticky header above it pushes its
 * bottom that far off screen.
 */
function belowFold(el: HTMLElement): number {
  const pageBottom = el.getBoundingClientRect().bottom + window.scrollY;
  return Math.round(Math.min(Math.max(pageBottom - window.innerHeight, 0), el.clientHeight * 0.4));
}

/**
 * Room kept clear when framing Nepal or a region: the label and close button
 * along the top, the hero's zoom buttons (wide screens only), and the fold.
 */
function viewPadding(el: HTMLElement): { top: number; bottom: number; left: number; right: number } {
  const fold = belowFold(el);
  // Narrow screens hide the hero's zoom buttons while the map is up (pinch does it), so no room is kept for them.
  return el.clientWidth >= WIDE_PX
    ? { top: 96, bottom: 40 + fold, left: 48, right: 128 }
    : { top: 84, bottom: 28 + fold, left: 28, right: 28 };
}

// Web Mercator, as fractions of the world (0–1), for framing without asking the map.
const mercX = (lng: number) => (lng + 180) / 360;
const mercY = (lat: number) => 0.5 - Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360)) / (2 * Math.PI);
const lngAt = (x: number) => x * 360 - 180;
const latAt = (y: number) => (360 / Math.PI) * Math.atan(Math.exp((0.5 - y) * 2 * Math.PI)) - 90;

/**
 * The flat-map camera that fits `bounds` inside the padded area: the same sum
 * as maplibre's cameraForBounds, done here so it can run before the map
 * exists and never depends on the projection of the moment.
 */
function fitCamera(
  el: HTMLElement,
  [[west, south], [east, north]]: [[number, number], [number, number]],
  pad: { top: number; bottom: number; left: number; right: number }
): { center: [number, number]; zoom: number } {
  const [x0, x1, y0, y1] = [mercX(west), mercX(east), mercY(north), mercY(south)];
  const width = Math.max(el.clientWidth - pad.left - pad.right, 1);
  const height = Math.max(el.clientHeight - pad.top - pad.bottom, 1);
  const worldSize = Math.min(width / (x1 - x0), height / (y1 - y0));
  // The bounds centre sits mid-way between the paddings, not mid-container.
  const cx = (x0 + x1) / 2 - (pad.left - pad.right) / 2 / worldSize;
  const cy = (y0 + y1) / 2 - (pad.top - pad.bottom) / 2 / worldSize;
  return { center: [lngAt(cx), latAt(cy)], zoom: Math.log2(worldSize / 512) };
}

/** The camera that shows the map as a globe exactly where, and as big as, the 3D globe was. */
function originCamera(el: HTMLElement, origin: GlobeOrigin) {
  const dx = 2 * origin.x - el.clientWidth;
  const dy = 2 * origin.y - el.clientHeight;
  // maplibre draws the globe at radius worldSize / (2π·cos(centre latitude)), worldSize = 512·2^zoom.
  const zoom = Math.log2((2 * Math.PI * origin.radius * Math.cos((NEPAL_CENTER[1] * Math.PI) / 180)) / 512);
  return {
    center: NEPAL_CENTER,
    zoom: Math.max(0, zoom),
    pitch: 0,
    bearing: 0,
    // The map centres between its paddings, so padding the far side puts Nepal under the old globe.
    padding: { left: Math.max(dx, 0), right: Math.max(-dx, 0), top: Math.max(dy, 0), bottom: Math.max(-dy, 0) },
  };
}

/** Resolves on the map's next idle (its tiles are in), or after `ms` regardless. */
function settle(map: maplibregl.Map, ms: number) {
  return new Promise<void>((resolve) => {
    const done = () => {
      clearTimeout(timer);
      map.off("idle", done);
      resolve();
    };
    const timer = setTimeout(done, ms);
    map.on("idle", done);
    map.triggerRepaint();
  });
}

export default function HeroNepalMap({ entry, standby, apiRef, onReady, onFail, onExit, onLevelChange }: HeroNepalMapProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  // Callbacks read through a ref, so a new identity never rebuilds the map.
  const calls = useRef({ onReady, onFail, onExit, onLevelChange, push: router.push });
  useEffect(() => {
    calls.current = { onReady, onFail, onExit, onLevelChange, push: router.push };
  });
  const entryRef = useRef(entry);
  const standbyRef = useRef(standby);
  const beginRef = useRef<((origin: GlobeOrigin) => void) | null>(null);
  const begunId = useRef<number | null>(null);
  const actions = useRef<{
    selectRegion: (slug: TrekRegionSlug) => void;
    toNepal: () => void;
    exit: () => void;
  } | null>(null);

  const [routes, setRoutes] = useState<MapRouteFeature[]>([]);
  const [view, setView] = useState<ViewState>({ level: "nepal", selected: null });
  const [tip, setTip] = useState<Tip>(null);
  const [chooser, setChooser] = useState<Chooser | null>(null);
  /** The fly-in has landed: the controls fade in. */
  const [settled, setSettled] = useState(false);
  const [touch] = useState(() => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches);
  /** px of the hero below the fold; the controls keep above it. */
  const [fold, setFold] = useState(0);

  useEffect(() => {
    const measureFold = () => {
      if (containerRef.current) setFold(belowFold(containerRef.current));
    };
    const frame = requestAnimationFrame(measureFold);
    window.addEventListener("resize", measureFold);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measureFold);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current!;
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token) {
      calls.current.onFail();
      return;
    }
    // Phones and tablets: flat map, no 3D terrain, fewer summit labels.
    const lite = window.matchMedia(`(max-width: ${WIDE_PX - 1}px), (pointer: coarse)`).matches;
    // Where Nepal fits on this screen, worked out before the map exists so its
    // projection can be set once, in the style, and never again.
    const nepalCamera = () => fitCamera(el, el.clientWidth < WIDE_PX ? REGIONS_BOUNDS : NEPAL_BOUNDS, viewPadding(el));
    const initialFitZ = nepalCamera().zoom;

    // Born already in the 3D globe's place, so the first tiles it asks for are the ones it opens on.
    const start = originCamera(el, entryRef.current.origin);

    let map: maplibregl.Map;
    try {
      map = new maplibregl.Map({
        container: el,
        style: buildStyle(token, lite, initialFitZ),
        center: start.center,
        zoom: start.zoom,
        attributionControl: { compact: true },
        // A 3× phone screen draws 2.25× the pixels of a 2× one for no visible gain on imagery.
        pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        maxZoom: 13,
        maxPitch: 60,
      });
    } catch (err) {
      console.error("Hero map could not start:", err);
      calls.current.onFail();
      return;
    }
    map.jumpTo({ padding: start.padding });

    let disposed = false;
    const s = {
      ready: false,
      introDone: false,
      exiting: false,
      /** Switched to a plain flat projection (once landed and idle). */
      flat: false,
      /** Bumped on every dive and exit, so a deferred step from an earlier one is dropped. */
      generation: 0,
      fitZ: initialFitZ,
      routeZ: initialFitZ + ROUTE_STEP,
      level: "nepal" as ViewState["level"],
      /** The region picked: the only one coloured, the only one whose treks are drawn. */
      selected: null as TrekRegionSlug | null,
      hoveredRoutes: new Set<string>(),
      hoveredRegion: null as string | null,
      tipKey: "",
    };

    // Armed when a dive asks the map to show, not while it waits on standby.
    let failTimer: ReturnType<typeof setTimeout> | undefined;

    // The fly-in is short and not meant to be steered: hold the map still
    // (and keep the wheel from scrolling the page out from under it) until it lands.
    const swallowWheel = (e: WheelEvent) => e.preventDefault();
    const setInteractive = (on: boolean) => {
      // Phones and tablets: pan and pinch only. Rotating or tilting by accident
      // is disorienting there, and a tilted view is heavier to draw.
      const handlers = lite
        ? [map.dragPan, map.touchZoomRotate, map.doubleClickZoom, map.scrollZoom, map.keyboard]
        : [map.scrollZoom, map.boxZoom, map.dragRotate, map.dragPan, map.keyboard, map.doubleClickZoom, map.touchZoomRotate, map.touchPitch];
      for (const h of handlers) {
        if (on) h.enable();
        else h.disable();
      }
      if (lite) {
        map.dragRotate.disable();
        map.touchPitch.disable();
        map.touchZoomRotate.disableRotation();
        map.keyboard.disableRotation();
      }
      if (on) el.removeEventListener("wheel", swallowWheel);
      else el.addEventListener("wheel", swallowWheel, { passive: false });
    };
    setInteractive(false);

    /**
     * Draws what the current choice calls for. No region picked: every region
     * coloured (fading back as you zoom in) and no treks. A region picked: only
     * it coloured, the others thin outlines a click away, and only its treks
     * drawn.
     */
    const applyDisplay = () => {
      const sel = s.selected;
      const z = s.routeZ;
      const inRegion = sel ? (["==", ["get", "region"], sel] as maplibregl.ExpressionSpecification) : null;
      const shown = inRegion ?? NO_ROUTES;
      const withShown = (base: maplibregl.ExpressionSpecification) => ["all", base, shown] as maplibregl.FilterSpecification;
      map.setFilter("route-casing", shown);
      map.setFilter("route-hit", shown);
      map.setFilter("route-traced", withShown(["==", ["get", "traced"], true]));
      map.setFilter("route-estimated", withShown(["!=", ["get", "traced"], true]));

      // Each property keeps the same kind of expression in both states (zoom-
      // and-feature for the fill, feature-only for the borders): maplibre
      // builds its tiles for one kind, and swapping kinds on a live layer
      // throws "interpolationFactor is not a function".
      const isSel: maplibregl.ExpressionSpecification = ["==", ["get", "slug"], sel ?? "__none__"];
      if (sel) {
        const fill: maplibregl.ExpressionSpecification = ["case", isSel, 0.1, HOVER, 0.16, 0];
        map.setPaintProperty("region-fill", "fill-opacity", ["interpolate", ["linear"], ["zoom"], 0, fill, 24, fill]);
        map.setPaintProperty("region-border", "line-color", ["case", isSel, ["get", "color"], HOVER, ["get", "color"], "rgba(255,255,255,0.5)"]);
        map.setPaintProperty("region-border", "line-width", ["case", isSel, 3.2, HOVER, 2.4, 1.1]);
        map.setPaintProperty("region-border-casing", "line-opacity", ["case", isSel, 0.5, 0.25]);
      } else {
        map.setPaintProperty("region-fill", "fill-opacity", [
          "interpolate", ["linear"], ["zoom"],
          z - 0.5, ["case", HOVER, 0.5, 0.28],
          z + 0.6, ["case", HOVER, 0.18, 0.06],
        ]);
        map.setPaintProperty("region-border", "line-color", ["case", isSel, ["get", "color"], ["get", "color"]]);
        map.setPaintProperty("region-border", "line-width", ["case", HOVER, 3.4, 2]);
        map.setPaintProperty("region-border-casing", "line-opacity", ["case", isSel, 0.45, 0.45]);
      }
    };

    /**
     * Ties every zoom-driven change to how far in Nepal fits on this screen:
     * the region fills, the labels, the summits, the exit point. Returns the
     * camera that frames Nepal. Never touches the projection (see
     * globeProjection), so it is safe to run on every resize — which on a
     * phone is every time the address bar slides in or out.
     */
    const measure = () => {
      const camera = nepalCamera();
      s.fitZ = camera.zoom;
      const z = (s.routeZ = s.fitZ + ROUTE_STEP);
      // A touch smaller on phones and tablets, where the regions are small (see PHONE_ANCHOR).
      map.setLayoutProperty("region-label", "text-size", ["interpolate", ["linear"], ["zoom"], s.fitZ - 1, lite ? 9 : 10, s.fitZ, lite ? 10.5 : 12.5, z + 0.5, 16]);
      map.setPaintProperty("region-label", "text-opacity", ["interpolate", ["linear"], ["zoom"], z - 0.15, 1, z + 0.45, 0]);
      for (const id of PEAK_LAYERS) if (map.getLayer(id)) map.setLayerZoomRange(id, z - 0.2, 24);
      if (s.introDone) map.setMinZoom(Math.max(0, s.fitZ - EXIT_STEP - 0.5));
      applyDisplay();
      return camera;
    };

    const setRouteHover = (ids: string[]) => {
      const next = new Set(ids);
      for (const id of s.hoveredRoutes) if (!next.has(id)) map.setFeatureState({ source: "routes", id }, { hover: false });
      for (const id of next) if (!s.hoveredRoutes.has(id)) map.setFeatureState({ source: "routes", id }, { hover: true });
      s.hoveredRoutes = next;
    };
    const setRegionHover = (slug: string | null) => {
      if (s.hoveredRegion === slug) return;
      if (s.hoveredRegion) map.setFeatureState({ source: "regions", id: s.hoveredRegion }, { hover: false });
      if (slug) map.setFeatureState({ source: "regions", id: slug }, { hover: true });
      s.hoveredRegion = slug;
    };
    const showTip = (p: maplibregl.Point | null, next: Tip) => {
      const key = !next ? "" : next.kind === "region" ? `region:${next.slug}:${next.switching}` : next.routes.map((r) => r.id).join("|");
      if (key !== s.tipKey) {
        s.tipKey = key;
        setTip(next);
      }
      const card = tooltipRef.current;
      if (card && p) {
        // Flip to the pointer's other side near the far edges so the card stays on screen.
        const flipX = p.x > el.clientWidth - 290;
        const flipY = p.y > el.clientHeight - belowFold(el) - 150;
        card.style.transform =
          `translate(${p.x + (flipX ? -18 : 18)}px, ${p.y + (flipY ? -18 : 18)}px)` +
          ` translate(${flipX ? "-100%" : "0"}, ${flipY ? "-100%" : "0"})`;
      }
    };
    const clearHover = () => {
      setRouteHover([]);
      setRegionHover(null);
      showTip(null, null);
      map.getCanvas().style.cursor = "";
    };

    /** The summits handle their own hover card and taps (lib/map-peaks); everything else steps aside for them. */
    const peakAt = (p: maplibregl.Point) =>
      !!map.getLayer(PEAKS_HIT_LAYER_ID) && map.queryRenderedFeatures(p, { layers: [PEAKS_HIT_LAYER_ID] }).length > 0;
    /** The treks on show under the point (the hit layer carries the same filter as the lines). */
    const routesNear = (p: maplibregl.Point): MapRoute[] => {
      const r = touch ? 14 : 7;
      const found = new Map<string, MapRoute>();
      for (const f of map.queryRenderedFeatures([[p.x - r, p.y - r], [p.x + r, p.y + r]], { layers: ["route-hit"] })) {
        const props = f.properties as MapRoute;
        if (!found.has(props.id)) found.set(props.id, props);
      }
      return [...found.values()];
    };
    const regionUnder = (p: maplibregl.PointLike): TrekRegionSlug | null =>
      (map.queryRenderedFeatures(p, { layers: ["region-fill"] })[0]?.properties?.slug as TrekRegionSlug | undefined) ?? null;
    /**
     * The region at the middle of what the controls leave visible, tested
     * against the region shapes directly: on tilted terrain a pixel query at
     * the map centre can land on a far ridge.
     */
    const regionInMiddle = () => {
      const pad = viewPadding(el);
      const middle = map.unproject([
        pad.left + (el.clientWidth - pad.left - pad.right) / 2,
        pad.top + (el.clientHeight - pad.top - pad.bottom) / 2,
      ]);
      return regionAt(middle.lng, middle.lat);
    };

    const publish = () => {
      setView({ level: s.level, selected: s.selected });
      calls.current.onLevelChange(s.level);
    };

    const setSelection = (slug: TrekRegionSlug | null) => {
      if (s.selected === slug) return;
      s.selected = slug;
      applyDisplay();
    };

    /** After every move: what is picked follows the zoom, unless picked by hand. */
    const updateView = () => {
      if (!s.introDone) return;
      const zoom = map.getZoom();
      // Back out at the whole country: every region again.
      if (s.selected && zoom < s.fitZ + 0.35) setSelection(null);
      // Zoomed in by hand with nothing picked: pick the region in the middle of the view.
      if (!s.selected && zoom >= s.routeZ - 0.3) setSelection(regionInMiddle());
      s.level = s.selected || zoom >= s.routeZ - 0.3 ? "region" : "nepal";
      publish();
    };

    /** Pick a region (from the map, the list or a chip) and fly to it. */
    const selectRegion = (slug: TrekRegionSlug) => {
      if (!s.introDone) return;
      setRegionHover(null);
      setChooser(null);
      showTip(null, null);
      setSelection(slug);
      s.level = "region";
      publish();
      map.fitBounds(TREK_REGION_BY_SLUG[slug].bounds, {
        padding: viewPadding(el),
        // Tilted over 3D terrain on big screens; flat (and lighter) on phones and tablets.
        pitch: lite ? 0 : 40,
        bearing: 0,
        maxZoom: Math.max(s.routeZ + 0.8, 10),
        duration: 1600,
        essential: false,
      });
    };
    const toNepal = () => {
      if (!s.introDone) return;
      setChooser(null);
      setSelection(null);
      s.level = "nepal";
      publish();
      const cam = nepalCamera();
      map.flyTo({ center: cam.center, zoom: cam.zoom, pitch: 0, bearing: 0, duration: 1400, essential: false });
    };
    const exit = () => {
      if (s.exiting) return;
      s.exiting = true;
      s.introDone = false;
      s.generation++;
      setInteractive(false);
      clearHover();
      setChooser(null);
      setSettled(false);
      // Terrain comes off (no tile reload); the map is about to fade out and go.
      map.setTerrain(null);
      calls.current.onExit();
    };

    /**
     * Once the fly-in has landed and its tiles are all in, swap the globe
     * projection for a plain flat one (identical at this zoom). The globe
     * projection keeps cutting every shape and tile into a fine mesh even
     * after it has flattened, so the flat map pans and pinches noticeably
     * lighter — most of all on phones. Wide screens then add 3D relief, which
     * maplibre only supports on the flat projection (on the globe it warns
     * "terrain is not fully supported on vertical perspective projection").
     * Waiting for idle matters: the swap reloads the tiles, which must not be
     * mid-download (see globeProjection).
     */
    const flattenWhenSettled = () => {
      if (s.flat) return;
      const generation = s.generation;
      map.once("idle", () => {
        if (disposed || generation !== s.generation || !s.introDone || s.exiting || s.flat) return;
        s.flat = true;
        map.setProjection({ type: "mercator" });
        if (!lite) map.setTerrain(TERRAIN);
      });
      map.triggerRepaint();
    };

    const finishIntro = () => {
      if (disposed || s.exiting) return;
      s.introDone = true;
      setInteractive(true);
      map.setMinZoom(Math.max(0, s.fitZ - EXIT_STEP - 0.5));
      setSettled(true);
      updateView();
      flattenWhenSettled();
    };

    const begin = (origin: GlobeOrigin) => {
      s.exiting = false;
      s.introDone = false;
      s.generation++;
      setInteractive(false);
      setSettled(false);
      clearHover();
      setChooser(null);
      map.stop();
      map.setMinZoom(0);
      // Every dive opens on the whole country.
      s.selected = null;
      s.level = "nepal";
      const target = measure();
      if (s.flat) {
        // Diving straight back in while this map was still fading out: round it
        // into a globe again (terrain off first). Rare, and the map is at rest.
        map.setTerrain(null);
        map.setProjection(globeProjection(s.fitZ));
        s.flat = false;
      }
      // Put the globe exactly where the old one was, then fly to the framed Nepal.
      map.jumpTo(originCamera(el, origin));
      if (!s.ready) {
        clearTimeout(failTimer);
        failTimer = setTimeout(() => {
          if (!disposed && !s.ready) calls.current.onFail();
        }, FAIL_MS);
      }
      settle(map, FIRST_TILES_MS).then(() => {
        if (disposed || s.exiting) return;
        s.ready = true;
        clearTimeout(failTimer);
        calls.current.onReady();
        // Registered first: with reduced motion the flight is a jump and ends at once.
        map.once("moveend", finishIntro);
        map.flyTo({
          center: target.center,
          zoom: target.zoom,
          pitch: 0,
          bearing: 0,
          padding: ZERO,
          duration: INTRO_MS,
          curve: 1.25,
          essential: false,
        });
      });
    };

    map.on("mousemove", (e) => {
      if (!s.introDone || touch) return;
      if (peakAt(e.point)) {
        // The summit's own card takes over (and sets the pointer cursor).
        setRouteHover([]);
        setRegionHover(null);
        showTip(null, null);
        return;
      }
      const hits = routesNear(e.point);
      setRouteHover(hits.map((h) => h.id));
      // A region other than the one picked is a click away: show it.
      const under = hits.length === 0 ? regionUnder(e.point) : null;
      const region = under && under !== s.selected ? under : null;
      setRegionHover(region);
      map.getCanvas().style.cursor = hits.length > 0 || region ? "pointer" : "";
      showTip(
        e.point,
        hits.length > 0
          ? { kind: "routes", routes: hits }
          : region
            ? { kind: "region", slug: region, switching: s.selected !== null }
            : null
      );
    });
    map.on("mouseout", clearHover);

    map.on("click", (e) => {
      if (!s.introDone || peakAt(e.point)) return;
      const hits = routesNear(e.point);
      if (hits.length === 1 && !touch) {
        calls.current.push(hits[0].href);
        return;
      }
      if (hits.length > 0) {
        // Routes that share a trail (or any tap on a phone, which has no hover) get a pick list.
        const width = Math.min(280, el.clientWidth - 24);
        // Whichever side of the point has the room (kept above the fold), capped
        // to it; a long list scrolls inside.
        const roomBelow = el.clientHeight - belowFold(el) - 12 - (e.point.y + 14);
        const roomAbove = e.point.y - 14 - 72;
        const below = roomBelow >= Math.min(56 + 48 * hits.length, 260) || roomBelow >= roomAbove;
        setChooser({
          left: Math.max(Math.min(e.point.x - width / 2, el.clientWidth - width - 12), 12),
          ...(below ? { top: e.point.y + 14 } : { bottom: el.clientHeight - (e.point.y - 14) }),
          maxHeight: Math.max(140, below ? roomBelow : roomAbove),
          routes: hits,
        });
        showTip(null, null);
        return;
      }
      setChooser(null);
      // A click on a region — from the country view, or on a neighbour of the one picked — goes there.
      const region = regionUnder(e.point);
      if (region && region !== s.selected) selectRegion(region);
    });
    map.on("dragstart", () => setChooser(null));
    map.on("moveend", updateView);

    map.on("zoom", (e) => {
      // Zooming out past Nepal hands back to the globe; only the reader's own zoom counts.
      if (!s.introDone || s.exiting || !(e as { originalEvent?: unknown }).originalEvent) return;
      if (map.getZoom() < s.fitZ - EXIT_STEP) exit();
    });
    map.on("resize", () => {
      if (s.introDone) measure();
    });
    map.on("error", (e) => console.error("Hero map error:", (e as { error?: unknown }).error ?? e));

    // Start on "style.load" (the style is parsed and its layers exist), not on
    // "load", which also waits for every first tile and the label fonts. The
    // map shows once its first tiles are in or FIRST_TILES_MS has passed,
    // whichever is sooner; the ocean colour covers any still on their way.
    const loaded = new Promise<void>((resolve) => map.once("style.load", () => resolve()));
    loaded.then(() => {
      if (disposed) return;
      // Summits for context once a region is up, with their hover card (tap
      // on a phone); under the routes, which stay on top.
      addPeakLayers(map, {
        popupClass: maplibregl.Popup,
        minElevation: lite ? 7000 : 6500,
        labelScale: 0.9,
        beforeId: "route-casing",
      });
      measure();
      beginRef.current = begin;
      // On standby (prepared ahead of the dive) the map stays put at the
      // globe's place, quietly loading its first tiles; the dive starts it.
      if (!standbyRef.current) {
        begunId.current = entryRef.current.id;
        begin(entryRef.current.origin);
      }
    });
    Promise.all([loaded, loadHeroMapData()]).then(([, data]) => {
      if (disposed || !data) return;
      const coloured = colourTreks(data.routes.features);
      (map.getSource("routes") as maplibregl.GeoJSONSource).setData({ type: "FeatureCollection", features: coloured } as GeoJSON.FeatureCollection);
      (map.getSource("region-labels") as maplibregl.GeoJSONSource).setData(labelData(regionCounts(coloured), lite));
      setRoutes(coloured);
    });

    actions.current = {
      selectRegion,
      toNepal,
      exit,
    };
    apiRef.current = {
      zoomIn: () => {
        if (s.introDone) map.zoomIn({ duration: 350 });
      },
      zoomOut: () => {
        if (!s.introDone) return;
        if (map.getZoom() - 1 < s.fitZ - EXIT_STEP) exit();
        else map.zoomOut({ duration: 350 });
      },
      back: () => {
        if (!s.introDone) return;
        if (s.level === "region") toNepal();
        else exit();
      },
    };

    return () => {
      disposed = true;
      clearTimeout(failTimer);
      el.removeEventListener("wheel", swallowWheel);
      apiRef.current = null;
      actions.current = null;
      beginRef.current = null;
      begunId.current = null;
      map.remove();
    };
  }, [apiRef, touch]);

  // The dive starting (standby lifted), or a dive while this map was still
  // fading out: fly in from wherever the globe now is.
  useEffect(() => {
    entryRef.current = entry;
    standbyRef.current = standby;
    if (!standby && beginRef.current && begunId.current !== entry.id) {
      begunId.current = entry.id;
      beginRef.current(entry.origin);
    }
  }, [entry, standby]);

  useEffect(() => {
    if (!chooser) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setChooser(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chooser]);

  const counts = useMemo(() => regionCounts(routes), [routes]);
  const shownCount = view.selected ? (counts.get(view.selected) ?? 0) : 0;

  const region = view.selected ? TREK_REGION_BY_SLUG[view.selected] : null;
  const atCountry = view.level === "nepal";
  const tap = touch ? "Tap" : "Click";
  const heading = atCountry ? "Trekking regions of Nepal" : region ? region.name : "Pick a region";
  const hint = atCountry
    ? `${tap} a region to see its treks`
    : region
      ? shownCount > 0
        ? `${plural(shownCount, "trek")} · ${tap.toLowerCase()} a route${touch ? " to see the trek" : " to open it"}`
        : "No trek routes drawn here yet"
      : `${tap} a region to see its treks`;
  /** Map controls stay hidden while the map flies in, then fade up together. */
  const chrome = cn("transition-opacity duration-500", settled ? "opacity-100" : "pointer-events-none opacity-0");

  return (
    <div className="absolute inset-0" style={{ "--fold": `${fold}px` } as React.CSSProperties}>
      {/* Sized, not positioned: maplibre's stylesheet makes its container position: relative.
          Its attribution is lifted above the fold so it is always readable. */}
      <div
        ref={containerRef}
        className="h-full w-full [&_.maplibregl-ctrl-bottom-left]:bottom-[var(--fold)] [&_.maplibregl-ctrl-bottom-right]:bottom-[var(--fold)]"
      />

      {/* Hover card (mouse only) — positioned straight from the pointer handler, content from state. */}
      <div
        ref={tooltipRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-10 w-max max-w-[260px] rounded-xl bg-[#06140f]/95 px-3.5 py-2.5 text-white shadow-xl transition-opacity duration-150",
          tip ? "opacity-100" : "opacity-0"
        )}
      >
        {tip?.kind === "region" && (
          <>
            <p className="flex items-center gap-2 text-sm font-semibold leading-snug">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: TREK_REGION_BY_SLUG[tip.slug].color }} />
              {TREK_REGION_BY_SLUG[tip.slug].name}
            </p>
            <p className="mt-0.5 text-xs text-white/70">{plural(counts.get(tip.slug) ?? 0, "trek")}</p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light">
              {tip.switching ? "Click to switch to it →" : "Click to explore →"}
            </p>
          </>
        )}
        {tip?.kind === "routes" && tip.routes.length === 1 && (
          <>
            <p className="flex items-center gap-2 text-sm font-semibold leading-snug">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: tip.routes[0].color }} />
              {tip.routes[0].title}
            </p>
            <p className="mt-0.5 text-xs text-white/70">
              {tip.routes[0].days} days · {titleCase(tip.routes[0].difficulty)}
            </p>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light">
              Click to view the trek →
            </p>
          </>
        )}
        {tip?.kind === "routes" && tip.routes.length > 1 && (
          <>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
              {tip.routes.length} treks share this trail
            </p>
            <ul className="mt-1 space-y-0.5">
              {tip.routes.slice(0, 5).map((t) => (
                <li key={t.id} className="flex items-center gap-2 text-sm font-medium leading-snug">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: t.color }} />
                  {t.title}
                </li>
              ))}
              {tip.routes.length > 5 && <li className="text-xs text-white/60">+{tip.routes.length - 5} more</li>}
            </ul>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-light">
              Click to choose →
            </p>
          </>
        )}
      </div>

      {chooser && (
        <div
          role="dialog"
          aria-label="Treks on this trail"
          className="absolute z-20 flex w-[min(280px,calc(100%-24px))] flex-col rounded-2xl border border-foreground/10 bg-background p-1.5 text-foreground shadow-2xl"
          style={{ left: chooser.left, top: chooser.top, bottom: chooser.bottom, maxHeight: chooser.maxHeight }}
        >
          <div className="flex items-center justify-between gap-2 py-1 pl-2.5 pr-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              {chooser.routes.length === 1 ? "Trek on this trail" : `${chooser.routes.length} treks share this trail`}
            </p>
            <button
              type="button"
              onClick={() => setChooser(null)}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:bg-surface-alt hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <ul className="min-h-0 overflow-y-auto overscroll-contain">
            {chooser.routes.map((t) => (
              <li key={t.id}>
                <Link
                  href={t.href}
                  prefetch={false}
                  className="group flex min-h-11 items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium hover:bg-surface-alt hover:text-primary"
                >
                  <RouteSwatch color={t.color} traced={t.traced} />
                  <span className="flex-1 leading-snug">{t.title}</span>
                  <span className="shrink-0 text-xs tabular-nums text-text-muted">{t.days}d</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Top bar: which region is on show, with a step back to all of them; and close. */}
      <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-start gap-2 sm:inset-x-4 sm:top-4">
        <div className={cn("pointer-events-auto flex min-w-0 items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 lg:pr-5", GLASS, chrome)}>
          {/* One step back: from a region to all of Nepal; from all of Nepal, out to the globe as it first was. */}
          <button
            type="button"
            onClick={() => (atCountry ? actions.current?.exit() : actions.current?.toNepal())}
            aria-label={atCountry ? "Back to the globe" : "Back to all of Nepal"}
            title={atCountry ? "Back to the globe" : "Back to all regions"}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="min-w-0 leading-tight">
            <p className="flex items-center gap-1.5 truncate text-sm font-semibold">
              {region && <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: region.color }} aria-hidden="true" />}
              {heading}
            </p>
            <p className="truncate text-[11px] text-text-muted">{hint}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => actions.current?.exit()}
          aria-label="Close the map"
          className={cn(
            "pointer-events-auto ml-auto flex h-12 w-12 shrink-0 items-center justify-center gap-1.5 rounded-full text-sm font-semibold transition-colors hover:text-primary sm:w-auto sm:px-4",
            GLASS
          )}
        >
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Close map</span>
        </button>
      </div>

    </div>
  );
}

/** A short sample of a route's line, in its colour: solid when GPS-traced, dashed when drawn stop to stop. */
function RouteSwatch({ color, traced }: { color: string; traced: boolean }) {
  return (
    <svg width="20" height="8" viewBox="0 0 20 8" className="shrink-0" aria-hidden="true">
      <line x1="2" y1="4" x2="18" y2="4" stroke={INK} strokeOpacity="0.35" strokeWidth="5" strokeLinecap="round" />
      <line
        x1="2"
        y1="4"
        x2="18"
        y2="4"
        stroke={color}
        strokeWidth="3"
        strokeLinecap={traced ? "round" : "butt"}
        strokeDasharray={traced ? undefined : "3.5 2.5"}
      />
    </svg>
  );
}
