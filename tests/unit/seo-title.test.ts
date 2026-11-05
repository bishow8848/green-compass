import { describe, expect, it } from "vitest";
import { brandedTitle, SITE_NAME } from "@/lib/seo";

describe("brandedTitle", () => {
  it("appends the brand once", () => {
    expect(brandedTitle("Contact Us").absolute).toBe(`Contact Us | ${SITE_NAME}`);
    expect(brandedTitle(`About ${SITE_NAME}`).absolute).toBe(`About ${SITE_NAME}`);
  });

  it("drops the brand when it would push the title past maxLength", () => {
    const trip = "Everest Base Camp Trek – 14 Days: Itinerary & Cost";
    expect(brandedTitle(trip, { maxLength: 65 }).absolute).toBe(trip);
    expect(brandedTitle("Helambu Trek", { maxLength: 65 }).absolute).toBe(`Helambu Trek | ${SITE_NAME}`);
  });
});
