import { describe, expect, it } from "vitest";
import { heroRouteFeature, waypointLines, type HeroTrekInput } from "@/lib/hero-map";
import { regionAt, regionSlugForName } from "@/lib/nepal-trek-regions";
import { routeOverviewLines } from "@/lib/route-geojson";

const KATHMANDU = { lng: 85.31, lat: 27.72, label: "Kathmandu" };
const LUKLA = { lng: 86.7291, lat: 27.6869, label: "Lukla" };
const PHAKDING = { lng: 86.7136, lat: 27.7397, label: "Phakding" };
const NAMCHE = { lng: 86.7143, lat: 27.8053, label: "Namche" };

const stops = (...list: Array<{ lng: number; lat: number; label: string }>) =>
  JSON.stringify(list.map((w, i) => ({ ...w, dayNumber: i + 1 })));

function trek(overrides: Partial<HeroTrekInput> = {}): HeroTrekInput {
  return {
    slug: "everest-view-trek",
    title: "Everest View Trek",
    duration: 5,
    difficulty: "moderate",
    region: "Everest Region",
    waypoints: stops(KATHMANDU, LUKLA, PHAKDING, NAMCHE, LUKLA, KATHMANDU),
    geoJsonData: null,
    category: { slug: "treks" },
    ...overrides,
  };
}

describe("waypointLines", () => {
  it("drops the flight legs and the Kathmandu ends, keeping the walk", () => {
    const lines = waypointLines(stops(KATHMANDU, LUKLA, PHAKDING, NAMCHE, PHAKDING, LUKLA, KATHMANDU));
    expect(lines).toHaveLength(1);
    expect(lines[0][0]).toEqual([LUKLA.lng, LUKLA.lat]);
    expect(lines[0][lines[0].length - 1]).toEqual([LUKLA.lng, LUKLA.lat]);
    expect(lines[0].some(([lng]) => lng === KATHMANDU.lng)).toBe(false);
  });

  it("follows day order and skips repeated nights in one place", () => {
    const raw = JSON.stringify([
      { ...NAMCHE, dayNumber: 3 },
      { ...LUKLA, dayNumber: 1 },
      { ...PHAKDING, dayNumber: 2 },
      { ...NAMCHE, dayNumber: 4 },
    ]);
    expect(waypointLines(raw)).toEqual([
      [
        [LUKLA.lng, LUKLA.lat],
        [PHAKDING.lng, PHAKDING.lat],
        [NAMCHE.lng, NAMCHE.lat],
      ],
    ]);
  });

  it("returns nothing for junk or a single stop", () => {
    expect(waypointLines("not json")).toEqual([]);
    expect(waypointLines(null)).toEqual([]);
    expect(waypointLines(stops(KATHMANDU, LUKLA, KATHMANDU))).toEqual([]);
  });
});

describe("heroRouteFeature", () => {
  it("links to the trek page and keeps the CMS region", () => {
    const feature = heroRouteFeature(trek())!;
    expect(feature.properties).toMatchObject({
      id: "everest-view-trek",
      href: "/treks/everest-view-trek",
      region: "everest",
      traced: false,
      days: 5,
    });
    expect(feature.geometry.type).toBe("MultiLineString");
  });

  it("files a 'Remote Region' trek by where its route runs", () => {
    expect(heroRouteFeature(trek({ region: "Remote Region" }))!.properties.region).toBe("everest");
  });

  it("prefers the GPS track over the waypoints", () => {
    const track = Array.from({ length: 50 }, (_, i) => [86.71 + i * 0.0001, 27.74 + i * 0.001, 3000]);
    const feature = heroRouteFeature(
      trek({ geoJsonData: JSON.stringify({ type: "Feature", geometry: { type: "LineString", coordinates: track } }) })
    )!;
    expect(feature.properties.traced).toBe(true);
    expect(feature.geometry.coordinates[0][0]).toEqual([86.71, 27.74]);
  });

  it("is null when nothing can be drawn", () => {
    expect(heroRouteFeature(trek({ waypoints: "[]" }))).toBeNull();
  });
});

describe("routeOverviewLines", () => {
  it("fits a dense track into its point budget", () => {
    // A zig-zag that plain simplification at 30 m would keep almost whole.
    const coordinates = Array.from({ length: 5000 }, (_, i) => [86.7 + i * 0.0001, 27.7 + (i % 2) * 0.001]);
    const lines = routeOverviewLines(JSON.stringify({ type: "LineString", coordinates }), 400);
    expect(lines.reduce((n, l) => n + l.length, 0)).toBeLessThanOrEqual(400);
    expect(lines[0][0]).toEqual([86.7, 27.7]);
  });

  it("drops a flight recorded in the track (Kathmandu → Lukla)", () => {
    const kathmandu = [[85.35, 27.7], [85.356, 27.699]];
    const walk = Array.from({ length: 20 }, (_, i) => [86.732 - i * 0.001, 27.687 + i * 0.003]);
    const lines = routeOverviewLines(JSON.stringify({ type: "LineString", coordinates: [...kathmandu, ...walk] }));
    expect(lines).toHaveLength(2);
    expect(lines.some((l) => l.some(([a], i) => i > 0 && Math.abs(a - l[i - 1][0]) > 1))).toBe(false);
  });
});

describe("trek regions", () => {
  // Trail villages, not summits: the big summits sit on the border line itself.
  it("places well-known spots in their region", () => {
    expect(regionAt(86.853, 27.988)).toBe("everest"); // Everest Base Camp
    expect(regionAt(83.878, 28.53)).toBe("annapurna"); // Annapurna Base Camp
    expect(regionAt(83.958, 29.183)).toBe("mustang"); // Lo Manthang
    expect(regionAt(84.6385, 28.5867)).toBe("manaslu"); // Samagaun
    expect(regionAt(85.5627, 28.2116)).toBe("langtang"); // Kyanjin Gompa
    expect(regionAt(87.0947, 27.8436)).toBe("makalu"); // Makalu Base Camp
    expect(regionAt(87.9333, 27.6667)).toBe("kanchenjunga"); // Ghunsa
    expect(regionAt(82.94, 29.2)).toBe("dolpo"); // Phoksundo Lake
    expect(regionAt(85.324, 27.717)).toBeNull(); // Kathmandu
  });

  it("reads the CMS's region names", () => {
    expect(regionSlugForName("Annapurna Region")).toBe("annapurna");
    expect(regionSlugForName("Kangchenjunga Region")).toBe("kanchenjunga");
    expect(regionSlugForName("Remote Region")).toBeNull();
    expect(regionSlugForName(null)).toBeNull();
  });
});
