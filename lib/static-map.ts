/**
 * A still picture of a trip's route map, for the HTML the server sends.
 *
 * The interactive map (components/map) draws with WebGL in the browser, so
 * the page as a search engine first reads it had only an empty box where the
 * map goes. This builds a Mapbox Static Images URL for the same route — the
 * same satellite imagery, the route line and a numbered pin per stop — which
 * the page renders as an ordinary <img> with descriptive alt text. The
 * interactive map takes its place once it has loaded.
 *
 * https://docs.mapbox.com/api/maps/static-images/
 */

export type MapStop = { lng: number; lat: number; label: string; dayNumber?: number };

type Position = [lng: number, lat: number];

/** The imagery the interactive map uses, so the still and the live map look alike. */
const STYLE = "mapbox/satellite-v9";
/**
 * The shapes of the map panel (components/map/TrekMap.tsx): 21:9 from the
 * sm breakpoint up, 4:3 on phones. Requested at @2x for sharp screens.
 */
export const STILL_SIZES = {
  wide: { width: 1200, height: 514 },
  compact: { width: 800, height: 600 },
} as const;
export type StillSize = keyof typeof STILL_SIZES;
/** The Static Images API rejects a URL over 8,192 characters. */
const MAX_URL_LENGTH = 8000;
const MAX_PATH_POINTS = 150;
/** A pin's label is one or two characters. */
const MAX_PIN_LABEL = 99;
const PIN_COLOUR = "00a671";
const LINE_COLOUR = "c2410c";

/** Google's encoded polyline format (precision 5), which the path overlay takes. */
export function encodePolyline(points: Position[]): string {
  let out = "";
  let lastLat = 0;
  let lastLng = 0;
  const encode = (delta: number) => {
    let value = delta < 0 ? ~(delta << 1) : delta << 1;
    while (value >= 0x20) {
      out += String.fromCharCode((0x20 | (value & 0x1f)) + 63);
      value >>= 5;
    }
    out += String.fromCharCode(value + 63);
  };
  for (const [lng, lat] of points) {
    const latE5 = Math.round(lat * 1e5);
    const lngE5 = Math.round(lng * 1e5);
    encode(latE5 - lastLat);
    encode(lngE5 - lastLng);
    lastLat = latE5;
    lastLng = lngE5;
  }
  return out;
}

const isPosition = (value: unknown): value is Position =>
  Array.isArray(value) && typeof value[0] === "number" && typeof value[1] === "number" && Number.isFinite(value[0]) && Number.isFinite(value[1]);

/** The line of an uploaded route file: its LineStrings, joined in order. Empty when there is none. */
function routeLine(geoJson: string | null | undefined): Position[] {
  if (!geoJson) return [];
  try {
    const line: Position[] = [];
    const visit = (node: any): void => {
      if (!node || typeof node !== "object") return;
      if (node.type === "FeatureCollection") node.features?.forEach(visit);
      else if (node.type === "Feature") visit(node.geometry);
      else if (node.type === "GeometryCollection") node.geometries?.forEach(visit);
      else if (node.type === "LineString") line.push(...(node.coordinates ?? []).filter(isPosition));
      else if (node.type === "MultiLineString") for (const part of node.coordinates ?? []) line.push(...part.filter(isPosition));
    };
    visit(JSON.parse(geoJson));
    return line;
  } catch {
    return [];
  }
}

/** At most `max` points, evenly spaced along the line, always keeping both ends. */
function thin(points: Position[], max: number): Position[] {
  if (points.length <= max) return points;
  const step = (points.length - 1) / (max - 1);
  return Array.from({ length: max }, (_, i) => points[Math.round(i * step)]);
}

const valid = (stop: MapStop) =>
  Number.isFinite(stop.lng) && Number.isFinite(stop.lat) && Math.abs(stop.lat) <= 90 && Math.abs(stop.lng) <= 180;

/**
 * The URL of the still, or null when there is nothing to draw or no Mapbox
 * token. The line follows the uploaded route file when the trip has one and
 * otherwise joins the stops in order, as the interactive map does.
 */
export function staticRouteMapUrl(options: {
  stops?: MapStop[] | null;
  geoJson?: string | null;
  token?: string | null;
  /** "wide" (21:9, the default) or "compact" (4:3, for phones). */
  size?: StillSize;
}): string | null {
  const { width, height } = STILL_SIZES[options.size ?? "wide"];
  const { token } = options;
  if (!token) return null;
  const stops = (options.stops ?? []).filter(valid);
  const line = routeLine(options.geoJson);
  const path = line.length >= 2 ? line : stops.map((s): Position => [s.lng, s.lat]);
  if (stops.length === 0 && path.length < 2) return null;

  // One pin per place: a stop slept at twice keeps its first day's number.
  const seen = new Set<string>();
  const pins: string[] = [];
  stops.forEach((stop, i) => {
    const key = `${stop.lng.toFixed(4)},${stop.lat.toFixed(4)}`;
    if (seen.has(key)) return;
    seen.add(key);
    const number = stop.dayNumber ?? i + 1;
    const label = number >= 1 && number <= MAX_PIN_LABEL ? `-${number}` : "";
    pins.push(`pin-s${label}+${PIN_COLOUR}(${stop.lng.toFixed(5)},${stop.lat.toFixed(5)})`);
  });

  const build = (pathPoints: number) => {
    const overlays = [
      ...(path.length >= 2 ? [`path-4+${LINE_COLOUR}-0.9(${encodeURIComponent(encodePolyline(thin(path, pathPoints)))})`] : []),
      ...pins,
    ];
    // "auto" frames every overlay; one stop alone has no extent, so it is centred at a fixed zoom.
    const view = overlays.length === 1 && pins.length === 1 ? `${stops[0].lng.toFixed(5)},${stops[0].lat.toFixed(5)},10` : "auto";
    const padding = view === "auto" ? "&padding=60" : "";
    return `https://api.mapbox.com/styles/v1/${STYLE}/static/${overlays.join(",")}/${view}/${width}x${height}@2x?access_token=${token}${padding}`;
  };

  // A long route is drawn with fewer points rather than not at all.
  for (let points = MAX_PATH_POINTS; points >= 2; points = Math.floor(points / 2)) {
    const url = build(points);
    if (url.length <= MAX_URL_LENGTH) return url;
  }
  return null;
}

/** Most places named in the alt text before it says how many more there are. */
const MAX_ALT_PLACES = 8;

/** Alt text for the map: the trip and the places on its route, in order. */
export function routeMapAlt(tripName: string, stops?: MapStop[] | null): string {
  const places = [...new Set((stops ?? []).map((s) => s.label?.trim()).filter(Boolean))];
  if (places.length < 2) return `${tripName} route map`;
  if (places.length > MAX_ALT_PLACES) {
    const named = places.slice(0, MAX_ALT_PLACES - 1);
    return `${tripName} route map: ${named.join(", ")} and ${places.length - named.length} more stops`;
  }
  return `${tripName} route map: ${places.slice(0, -1).join(", ")} and ${places[places.length - 1]}`;
}
