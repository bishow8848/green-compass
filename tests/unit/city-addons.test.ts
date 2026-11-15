import { describe, expect, it } from "vitest";
import { AIRPORT_TITLE, BUS_TITLE, CITY_NIGHT_TITLE, EXTRAS_SENTENCE, FLIGHT_TITLE, airportTransfersFor, extrasSentence } from "@/lib/city-addons";

describe("airportTransfersFor", () => {
  it("is one transfer per 6 people or part of 6", () => {
    expect([1, 6, 7, 12, 13, 18, 19, 20, 24, 25].map(airportTransfersFor)).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 4, 5]);
  });

  it("is never less than one", () => {
    expect(airportTransfersFor(0)).toBe(1);
  });
});

describe("extrasSentence", () => {
  it("names everything the trip sells as an extra", () => {
    expect(extrasSentence(["Porter", AIRPORT_TITLE, FLIGHT_TITLE, BUS_TITLE, CITY_NIGHT_TITLE])).toBe(
      "Airport transfers, hotel nights and the flight or tourist bus between Kathmandu and Pokhara can be added as extras when you book."
    );
    expect(extrasSentence([AIRPORT_TITLE, CITY_NIGHT_TITLE])).toBe("Airport transfers and hotel nights can be added as extras when you book.");
  });

  it("speaks of a single extra in the singular", () => {
    expect(extrasSentence([CITY_NIGHT_TITLE])).toBe("Hotel nights can be added as an extra when you book.");
  });

  it("needs both the flight and the bus to mention the journey", () => {
    expect(extrasSentence([FLIGHT_TITLE, CITY_NIGHT_TITLE])).toBe("Hotel nights can be added as an extra when you book.");
  });

  it("is null with nothing to add", () => {
    expect(extrasSentence(["Porter"])).toBeNull();
  });
});

describe("EXTRAS_SENTENCE", () => {
  it("finds the sentence and nothing before it", () => {
    const text = "Airport pickup and your hotel nights in Kathmandu are not. Hotel nights can be added as an extra when you book. Everything else is included.";
    expect(text.match(EXTRAS_SENTENCE)?.[0]).toBe("Hotel nights can be added as an extra when you book.");
  });

  it("stops at a tag", () => {
    const html = "<p>Included; the rest is not.</p><p>Hotel nights and the flight or tourist bus between Kathmandu and Pokhara can be added as extras when you book.</p>";
    expect(html.match(EXTRAS_SENTENCE)?.[0]).toBe(
      "Hotel nights and the flight or tourist bus between Kathmandu and Pokhara can be added as extras when you book."
    );
  });
});
