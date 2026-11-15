import { describe, expect, it } from "vitest";
import { encodePolyline, routeMapAlt, staticRouteMapUrl } from "@/lib/static-map";

const stops = [
  { lng: 83.8262, lat: 28.4288, label: "Lower Sinuwa", dayNumber: 1 },
  { lng: 83.898, lat: 28.4972, label: "Deurali", dayNumber: 2 },
  { lng: 83.8731, lat: 28.5308, label: "Annapurna Base Camp", dayNumber: 3 },
];

describe("encodePolyline", () => {
  it("matches the reference encoding from Google's documentation", () => {
    // Points are [lng, lat]; the format itself is lat first.
    expect(encodePolyline([[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]])).toBe("_p~iF~ps|U_ulLnnqC_mqNvxq`@");
  });
});

describe("staticRouteMapUrl", () => {
  it("is null without a token or anything to draw", () => {
    expect(staticRouteMapUrl({ stops, token: "" })).toBeNull();
    expect(staticRouteMapUrl({ stops: [], token: "pk.test" })).toBeNull();
  });

  it("draws a line through the stops and a numbered pin at each", () => {
    const url = staticRouteMapUrl({ stops, token: "pk.test" })!;
    expect(url).toMatch(/^https:\/\/api\.mapbox\.com\/styles\/v1\/mapbox\/satellite-v9\/static\/path-4\+c2410c-0\.9\(/);
    expect(url).toContain("pin-s-1+00a671(83.82620,28.42880)");
    expect(url).toContain("pin-s-3+00a671(83.87310,28.53080)");
    expect(url).toContain("/auto/1200x514@2x?access_token=pk.test&padding=60");
  });

  it("gives a place slept at twice one pin, numbered for its first day", () => {
    const url = staticRouteMapUrl({ stops: [...stops, { ...stops[0], dayNumber: 5 }], token: "pk.test" })!;
    expect(url.match(/pin-s/g)).toHaveLength(3);
    expect(url).not.toContain("pin-s-5");
  });

  it("follows the uploaded route file when there is one", () => {
    const geoJson = JSON.stringify({ type: "FeatureCollection", features: [{ type: "Feature", geometry: { type: "LineString", coordinates: [[83.8, 28.4], [83.85, 28.45], [83.9, 28.5]] } }] });
    const fromFile = staticRouteMapUrl({ stops, geoJson, token: "pk.test" })!;
    expect(fromFile).toContain(encodeURIComponent(encodePolyline([[83.8, 28.4], [83.85, 28.45], [83.9, 28.5]])));
  });

  it("draws the phone-sized still in 4:3", () => {
    expect(staticRouteMapUrl({ stops, token: "pk.test", size: "compact" })).toContain("/auto/800x600@2x?");
  });

  it("centres a single stop instead of framing it", () => {
    expect(staticRouteMapUrl({ stops: [stops[0]], token: "pk.test" })).toContain("/83.82620,28.42880,10/1200x514@2x");
  });

  it("stays within the API's URL limit on a very long route", () => {
    const line = Array.from({ length: 5000 }, (_, i) => [80 + i * 0.001, 27 + Math.sin(i) * 0.5]);
    const url = staticRouteMapUrl({ stops, geoJson: JSON.stringify({ type: "LineString", coordinates: line }), token: "pk.test" })!;
    expect(url.length).toBeLessThanOrEqual(8000);
  });

  it("ignores a route file it cannot read", () => {
    expect(staticRouteMapUrl({ stops, geoJson: "not json", token: "pk.test" })).toContain("pin-s-1");
  });
});

describe("routeMapAlt", () => {
  it("names the places in order", () => {
    expect(routeMapAlt("Annapurna Base Camp Trek", stops)).toBe("Annapurna Base Camp Trek route map: Lower Sinuwa, Deurali and Annapurna Base Camp");
  });

  it("names a place once and counts the rest on a long route", () => {
    const many = Array.from({ length: 12 }, (_, i) => ({ lng: 80 + i, lat: 28, label: `Camp ${i + 1}` }));
    expect(routeMapAlt("Upper Dolpo Trek", [...many, many[0]])).toBe("Upper Dolpo Trek route map: Camp 1, Camp 2, Camp 3, Camp 4, Camp 5, Camp 6, Camp 7 and 5 more stops");
  });

  it("falls back to the trip name alone", () => {
    expect(routeMapAlt("Kathmandu Day Tour", [])).toBe("Kathmandu Day Tour route map");
  });
});
