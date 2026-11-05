/**
 * Shrinks an uploaded route file to what the public trip map draws.
 *
 * Route files are raw GPS exports (Wikiloc, Strava, Garmin): a fix every few
 * metres with elevation, timestamp and an HTML description per point. The map
 * uses none of that except the line itself, yet the whole file was passed to
 * the client map as a prop, so it was inlined into every trip page's HTML —
 * 612 KB of the 1.29 MB Everest Base Camp page, 19,125 points. That slowed every
 * render and crawl of the pages that are meant to rank.
 *
 * Kept: LineString and MultiLineString geometry, simplified to within ~3 m
 * (Douglas–Peucker; looser only for a track past MAX_POINTS) and rounded to
 * 5 decimals (~1 m), with no elevation —
 * the map drapes the line on its own terrain. Dropped: points (no layer draws
 * them) and all properties (no layer reads them).
 *
 * Returns the input unchanged when it holds no line or cannot be parsed, so
 * an unusual file still reaches the map exactly as before.
 */

type Position = [number, number];

const DECIMALS = 5;
// In degrees: ~3 m of latitude, ~2.9 m of longitude at Nepal's latitude.
const TOLERANCE = 0.00003;
// A month-long expedition track can still hold 9,000 points at 3 m. Past this
// budget the tolerance doubles until it fits — invisible at the zoom a whole
// route is shown at, and it keeps the largest trip page and its Redis entry
// small (the Makalu route was 865 KB raw, 178 KB at 3 m).
const MAX_POINTS = 4000;
const MAX_TOLERANCE = 0.0005; // ~50 m, the most it will ever give up

function round(value: number): number {
  const factor = 10 ** DECIMALS;
  return Math.round(value * factor) / factor;
}

// Douglas–Peucker is quadratic when every point survives (a jittery track),
// which took 13 s on 20,000 points. Run on chunks of this many points instead:
// the cost becomes linear, and the price is one forced point per chunk.
const CHUNK = 1000;

function simplify(points: Position[], tolerance: number): Position[] {
  if (points.length <= CHUNK) return simplifyChunk(points, tolerance);
  const out: Position[] = [];
  for (let start = 0; start < points.length - 1; start += CHUNK) {
    const part = simplifyChunk(points.slice(start, Math.min(start + CHUNK + 1, points.length)), tolerance);
    // Chunks share their joining point; keep it once.
    out.push(...(out.length > 0 ? part.slice(1) : part));
  }
  return out;
}

/** Iterative Douglas–Peucker, so a long track cannot overflow the stack. */
function simplifyChunk(points: Position[], tolerance: number): Position[] {
  if (points.length <= 2) return points;
  const keep = new Uint8Array(points.length);
  keep[0] = 1;
  keep[points.length - 1] = 1;
  const tolerance2 = tolerance * tolerance;
  const stack: Array<[number, number]> = [[0, points.length - 1]];

  while (stack.length > 0) {
    const [first, last] = stack.pop()!;
    const [ax, ay] = points[first];
    const [bx, by] = points[last];
    const dx = bx - ax;
    const dy = by - ay;
    const length2 = dx * dx + dy * dy;
    let farthest = -1;
    let farthest2 = 0;

    for (let i = first + 1; i < last; i++) {
      const [px, py] = points[i];
      const t = length2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / length2));
      const ex = ax + t * dx - px;
      const ey = ay + t * dy - py;
      const distance2 = ex * ex + ey * ey;
      if (distance2 > farthest2) {
        farthest2 = distance2;
        farthest = i;
      }
    }

    if (farthest !== -1 && farthest2 > tolerance2) {
      keep[farthest] = 1;
      stack.push([first, farthest], [farthest, last]);
    }
  }

  return points.filter((_, i) => keep[i] === 1);
}

function toLine(coordinates: unknown): Position[] | null {
  if (!Array.isArray(coordinates)) return null;
  const line: Position[] = [];
  for (const c of coordinates) {
    if (Array.isArray(c) && Number.isFinite(c[0]) && Number.isFinite(c[1])) {
      line.push([c[0], c[1]]);
    }
  }
  return line.length < 2 ? null : line;
}

/** Each line or multi-line of the file, as raw positions — simplified later, all at one tolerance. */
type RawLine = { multi: false; line: Position[] } | { multi: true; lines: Position[][] };

function rawLines(geometry: any): RawLine[] {
  if (geometry?.type === "LineString") {
    const line = toLine(geometry.coordinates);
    return line ? [{ multi: false, line }] : [];
  }
  if (geometry?.type === "MultiLineString" && Array.isArray(geometry.coordinates)) {
    const lines = geometry.coordinates.map(toLine).filter((l: Position[] | null): l is Position[] => l !== null);
    return lines.length > 0 ? [{ multi: true, lines }] : [];
  }
  if (geometry?.type === "GeometryCollection" && Array.isArray(geometry.geometries)) {
    return geometry.geometries.flatMap(rawLines);
  }
  return [];
}

function toFeatures(raw: RawLine[], tolerance: number) {
  const finish = (line: Position[]) => simplify(line, tolerance).map(([lng, lat]): Position => [round(lng), round(lat)]);
  return raw.map((r) => ({
    type: "Feature" as const,
    properties: {},
    geometry: r.multi
      ? { type: "MultiLineString" as const, coordinates: r.lines.map(finish) }
      : { type: "LineString" as const, coordinates: finish(r.line) },
  }));
}

function pointCount(features: ReturnType<typeof toFeatures>): number {
  return features.reduce(
    (n, f) => n + (f.geometry.type === "LineString" ? f.geometry.coordinates.length : f.geometry.coordinates.reduce((m, l) => m + l.length, 0)),
    0
  );
}

export function slimRouteGeoJson(raw: string | null | undefined): string | null {
  if (!raw) return null;
  let data: any;
  try {
    data = JSON.parse(raw);
  } catch {
    return raw;
  }

  const lines: RawLine[] =
    data?.type === "FeatureCollection" && Array.isArray(data.features)
      ? data.features.flatMap((f: any) => rawLines(f?.geometry))
      : data?.type === "Feature"
        ? rawLines(data.geometry)
        : rawLines(data);

  if (lines.length === 0) return raw;

  let tolerance = TOLERANCE;
  let features = toFeatures(lines, tolerance);
  while (pointCount(features) > MAX_POINTS && tolerance < MAX_TOLERANCE) {
    tolerance = Math.min(tolerance * 2, MAX_TOLERANCE);
    features = toFeatures(lines, tolerance);
  }
  return JSON.stringify({ type: "FeatureCollection", features });
}
