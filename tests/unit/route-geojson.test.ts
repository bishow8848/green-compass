import { describe, expect, it } from "vitest";
import { slimRouteGeoJson } from "@/lib/route-geojson";

/** A straight north-south track with a GPS fix every ~1 m and a 50 m detour in the middle. */
function denseTrack() {
  const coordinates: number[][] = [];
  for (let i = 0; i <= 2000; i++) {
    const lat = 27.7 + i * 0.00001;
    const lng = i === 1000 ? 86.7 + 0.0005 : 86.7;
    coordinates.push([lng, lat, 3000 + i]);
  }
  return coordinates;
}

describe("slimRouteGeoJson", () => {
  it("keeps the line's shape, drops points, properties and elevation", () => {
    const raw = JSON.stringify({
      type: "FeatureCollection",
      features: [
        { type: "Feature", properties: { name: "Start", description: { value: "<br>long html" } }, geometry: { type: "Point", coordinates: [86.7, 27.7, 2800] } },
        { type: "Feature", properties: { name: "Track", times: ["2019-05-14"] }, geometry: { type: "LineString", coordinates: denseTrack() } },
      ],
    });

    const slim = JSON.parse(slimRouteGeoJson(raw)!);

    expect(slim.type).toBe("FeatureCollection");
    expect(slim.features).toHaveLength(1);
    const [feature] = slim.features;
    expect(feature.properties).toEqual({});
    expect(feature.geometry.type).toBe("LineString");
    const coords: number[][] = feature.geometry.coordinates;
    // Straight runs collapse; the detour, and both ends, survive.
    expect(coords.length).toBeLessThan(10);
    expect(coords[0]).toEqual([86.7, 27.7]);
    expect(coords[coords.length - 1]).toEqual([86.7, 27.72]);
    expect(coords).toContainEqual([86.7005, 27.71]);
    expect(coords.every((c) => c.length === 2)).toBe(true);
  });

  it("handles a bare Feature and a MultiLineString", () => {
    const raw = JSON.stringify({
      type: "Feature",
      properties: { a: 1 },
      geometry: { type: "MultiLineString", coordinates: [denseTrack(), [[85.3, 27.7], [85.4, 27.8]]] },
    });

    const slim = JSON.parse(slimRouteGeoJson(raw)!);

    expect(slim.features).toHaveLength(1);
    expect(slim.features[0].geometry.type).toBe("MultiLineString");
    expect(slim.features[0].geometry.coordinates).toHaveLength(2);
  });

  it("loosens the tolerance only for a track past the point budget", () => {
    // 20,000 fixes zig-zagging ~10 m either side: every one survives at 3 m.
    const coordinates = Array.from({ length: 20000 }, (_, i) => [86.7 + (i % 2) * 0.0001, 27.7 + i * 0.00005]);
    const raw = JSON.stringify({ type: "Feature", properties: {}, geometry: { type: "LineString", coordinates } });

    const [feature] = JSON.parse(slimRouteGeoJson(raw)!).features;

    expect(feature.geometry.coordinates.length).toBeLessThanOrEqual(4000);
    expect(feature.geometry.coordinates[0]).toEqual([86.7, 27.7]);
  });

  it("passes through what it cannot slim", () => {
    expect(slimRouteGeoJson(null)).toBeNull();
    expect(slimRouteGeoJson("")).toBeNull();
    expect(slimRouteGeoJson("not json")).toBe("not json");
    const pointsOnly = JSON.stringify({ type: "FeatureCollection", features: [{ type: "Feature", properties: {}, geometry: { type: "Point", coordinates: [86.7, 27.7] } }] });
    expect(slimRouteGeoJson(pointsOnly)).toBe(pointsOnly);
  });
});
