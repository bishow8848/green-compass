/**
 * The trek routes the home page's hero map draws once you zoom into a region.
 *
 * A trek with an uploaded GPS track is drawn from it ("traced"). The rest are
 * drawn stop to stop through their itinerary waypoints, which also hold the
 * days spent getting to the trail: the arrival city, the flight to Lukla, the
 * drive to Syabrubesi. Those would streak across the country, so a waypoint
 * route is broken wherever two stops are further apart than a day's walk, and
 * Kathmandu and Pokhara are dropped from either end of what is left.
 *
 * Kept pure (no database access) so it can be tested; app/api/hero-map/route.ts
 * does the query.
 */

import { routeOverviewLines } from "./route-geojson";
import { regionAt, regionSlugForName, type TrekRegionSlug } from "./nepal-trek-regions";

type Position = [number, number];

/** The category whose trips the hero map draws. */
export const HERO_MAP_CATEGORY = "treks";

export interface HeroTrekInput {
  slug: string;
  title: string;
  duration: number;
  difficulty: string;
  region: string | null;
  waypoints: string | null;
  geoJsonData: string | null;
  category: { slug: string } | null;
}

export interface HeroRouteProps {
  /** The trek's slug; the source's promoteId. */
  id: string;
  title: string;
  href: string;
  days: number;
  difficulty: string;
  region: TrekRegionSlug | null;
  /** Drawn from a GPS track rather than straight lines between stops. */
  traced: boolean;
}

export interface HeroRouteFeature {
  type: "Feature";
  properties: HeroRouteProps;
  geometry: { type: "MultiLineString"; coordinates: Position[][] };
}

export interface HeroMapData {
  routes: { type: "FeatureCollection"; features: HeroRouteFeature[] };
}

/** Straight-line distance between stops beyond which the leg is a flight or a drive, not a day on foot. */
const MAX_WALK_KM = 30;
/** Arrival and departure cities; dropped from the ends of a waypoint route. */
const HUBS: Position[] = [
  [85.324, 27.7172], // Kathmandu
  [83.9856, 28.2096], // Pokhara
];
const HUB_RADIUS_KM = 6;
/** Two stops closer than this are the same place (a rest day). */
const SAME_PLACE_KM = 0.05;
/** A GPS route's point budget on this map. */
const TRACED_MAX_POINTS = 400;
/** Share of a route's points that must lie in one region to file an unassigned trek under it. */
const REGION_SHARE = 0.5;

function km([lng1, lat1]: Position, [lng2, lat2]: Position): number {
  const rad = Math.PI / 180;
  const dLat = (lat2 - lat1) * rad;
  const dLng = (lng2 - lng1) * rad;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * rad) * Math.cos(lat2 * rad) * Math.sin(dLng / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(a));
}

const nearHub = (p: Position) => HUBS.some((hub) => km(p, hub) <= HUB_RADIUS_KM);

/** A waypoint route's walking sections, in itinerary order. */
export function waypointLines(raw: string | null | undefined): Position[][] {
  let list: unknown;
  try {
    list = JSON.parse(raw || "[]");
  } catch {
    return [];
  }
  if (!Array.isArray(list)) return [];

  const stops = (list as Array<{ lng?: unknown; lat?: unknown; dayNumber?: unknown } | null>)
    .map((w, index) => ({ lng: Number(w?.lng), lat: Number(w?.lat), day: Number(w?.dayNumber), index }))
    .filter((s) => Number.isFinite(s.lng) && Number.isFinite(s.lat) && !(s.lng === 0 && s.lat === 0))
    // Itinerary order; stops without a day keep their place in the list.
    .sort((a, b) => (Number.isFinite(a.day) && Number.isFinite(b.day) ? a.day - b.day : 0) || a.index - b.index)
    .map((s): Position => [Math.round(s.lng * 1e4) / 1e4, Math.round(s.lat * 1e4) / 1e4]);

  const chains: Position[][] = [];
  let chain: Position[] = [];
  for (const stop of stops) {
    const last = chain[chain.length - 1];
    if (last && km(last, stop) <= SAME_PLACE_KM) continue;
    if (last && km(last, stop) > MAX_WALK_KM) {
      chains.push(chain);
      chain = [];
    }
    chain.push(stop);
  }
  chains.push(chain);

  return chains
    .map((c) => {
      let start = 0;
      let end = c.length;
      while (start < end && nearHub(c[start])) start++;
      while (end > start && nearHub(c[end - 1])) end--;
      return c.slice(start, end);
    })
    .filter((c) => c.length >= 2);
}

/** The CMS's region when it names one of the eight, else wherever most of the route runs. */
function regionOf(name: string | null, lines: Position[][]): TrekRegionSlug | null {
  const named = regionSlugForName(name);
  if (named) return named;

  const counts = new Map<TrekRegionSlug, number>();
  let total = 0;
  for (const line of lines) {
    for (const [lng, lat] of line) {
      total++;
      const region = regionAt(lng, lat);
      if (region) counts.set(region, (counts.get(region) ?? 0) + 1);
    }
  }
  let best: TrekRegionSlug | null = null;
  let bestCount = 0;
  for (const [region, count] of counts) {
    if (count > bestCount) {
      best = region;
      bestCount = count;
    }
  }
  return best && bestCount >= total * REGION_SHARE ? best : null;
}

/** One trek's line on the hero map, or null when it has nothing drawable. */
export function heroRouteFeature(trek: HeroTrekInput): HeroRouteFeature | null {
  const traced = routeOverviewLines(trek.geoJsonData, TRACED_MAX_POINTS);
  const lines = traced.length > 0 ? traced : waypointLines(trek.waypoints);
  if (lines.length === 0) return null;

  return {
    type: "Feature",
    properties: {
      id: trek.slug,
      title: trek.title,
      href: `/${trek.category?.slug || HERO_MAP_CATEGORY}/${trek.slug}`,
      days: trek.duration,
      difficulty: trek.difficulty,
      region: regionOf(trek.region, lines),
      traced: traced.length > 0,
    },
    geometry: { type: "MultiLineString", coordinates: lines },
  };
}

export function heroMapData(treks: HeroTrekInput[]): HeroMapData {
  return {
    routes: {
      type: "FeatureCollection",
      features: treks.map(heroRouteFeature).filter((f): f is HeroRouteFeature => f !== null),
    },
  };
}
