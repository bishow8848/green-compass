import { describe, expect, it } from "vitest";
import { packageKind, packageTitle, variantSiblingSlug } from "@/lib/package-variants";
import {
  cityInclusions,
  cutPackageDays,
  planVariants,
  priceDelta,
  replaceDuration,
  rewriteLinks,
  type DayRow,
  type TrekRow,
} from "../../scripts/package-variants/plan";

const day = (n: number, title: string, accommodation: string | null = null): DayRow => ({
  dayNumber: n,
  title,
  description: `<p>${title}</p>`,
  elevation: null,
  accommodation,
  placeDescription: null,
});

const days = (titles: string[]) => titles.map((t, i) => day(i + 1, t, /kathmandu/i.test(t) ? "Kathmandu" : null));

const POKHARA_TREK = days([
  "Arrival in Kathmandu (1,400 m)",
  "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
  "Drive from Pokhara (822 m) to Kande (1,770 m) and Trek to Pitam Deurali",
  "Trek to Badal Danda (3,210 m)",
  "Trek from Badal Danda (3,210 m) to Siding Village and Drive to Pokhara (822 m)",
  "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
  "Departure from Kathmandu (1,400 m)",
]);

const KATHMANDU_TREK = days([
  "Arrival in Kathmandu (1,400 m)",
  "Fly from Kathmandu (1,400 m) to Lukla (2,860 m) and Trek to Phakding",
  "Trek to Namche Bazaar (3,440 m)",
  "Fly from Lukla (2,860 m) to Kathmandu (1,400 m)",
  "Final Departure from Kathmandu (1,400 m)",
]);

const LIST = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

function trek(overrides: Partial<TrekRow> & { slug: string; itinerary: DayRow[] }): TrekRow {
  return {
    id: overrides.slug,
    title: "Mardi Himal Trek",
    subtitle: null,
    status: "published",
    duration: overrides.itinerary.length,
    price: 525,
    maxAltitude: 4500,
    overview: "<p>A 7-day ridge trek above Pokhara. It climbs fast.</p>",
    inclusions: LIST([
      "Airport pickup and drop-off services in Kathmandu.",
      "Tourist bus transportation from Kathmandu to Pokhara and back to Kathmandu.",
      "Accommodation in Kathmandu with breakfast.",
      "Accommodation in local teahouses during the trek.",
    ]),
    exclusions: LIST(["International flight tickets to and from Nepal.", "Nepal entry visa fees.", "Tips for guides."]),
    metaTitle: null,
    metaDescription: "Walk the Mardi Himal ridge in 7 days.",
    waypoints: JSON.stringify([{ lng: 85, lat: 27, label: "Kathmandu", dayNumber: 1 }, { lng: 83.9, lat: 28.3, label: "Kande", dayNumber: 3 }]),
    customSections: JSON.stringify([
      { id: "custom-1", type: "custom", data: { heading: "Trip Highlights", content: "<ul><li>Ridge</li></ul>" } },
      { id: "custom-2", type: "custom", data: { heading: "Best Time to Trek", content: "<p>Autumn.</p>" } },
      { id: "custom-3", type: "custom", data: { heading: "Trekking Guides & Articles", content: "<ul><li>Guide</li></ul>" } },
    ]),
    sectionOrder: JSON.stringify(["overview", "custom-1", "itinerary", "custom-2", "faqs", "custom-3"]),
    sectionData: null,
    category: { slug: "treks" },
    pricingTiers: [
      { groupSize: "1-1", pricePerPerson: 650 },
      { groupSize: "15-100", pricePerPerson: 525 },
    ],
    faqs: [{ question: "How long is it?", answer: "The trek takes 7 days." }],
    galleryImages: [{ imageId: "img/1", alt: null, caption: null }],
    availableDates: [],
    ...overrides,
  };
}

describe("cutPackageDays", () => {
  it("drops arrival, the Kathmandu–Pokhara drives and departure from a Pokhara trek", () => {
    expect(cutPackageDays(POKHARA_TREK, "trek")).toMatchObject({ lead: 2, trail: 2, start: "Pokhara", end: "Pokhara" });
  });

  it("drops only arrival and departure from a trek that starts in Kathmandu", () => {
    expect(cutPackageDays(KATHMANDU_TREK, "trek")).toMatchObject({ lead: 1, trail: 1, start: "Kathmandu", end: "Kathmandu" });
  });

  it("keeps a travel day that also ends the trip", () => {
    const combined = days(["Arrive in Kathmandu", "Drive from Kathmandu to Tarkeghyang", "Drive from Tarkeghyang (2,590 m) to Kathmandu (1,400 m) and Departure"]);
    expect(cutPackageDays(combined, "trek")).toMatchObject({ lead: 1, trail: 0, combinedDeparture: true });
  });

  it("keeps a tour's city days, which are the tour", () => {
    const tour = days(["Arrival in Kathmandu", "Kathmandu sightseeing", "Drive from Pokhara to Kathmandu", "Departure from Nepal"]);
    expect(cutPackageDays(tour, "tour")).toMatchObject({ lead: 1, trail: 1 });
  });
});

describe("price and text", () => {
  it("moves the price $37.50 a day, rounded to $5", () => {
    expect([priceDelta(4), priceDelta(2), priceDelta(3)]).toEqual([150, 75, 115]);
  });

  it("rewrites the trip's own duration in either form", () => {
    expect(replaceDuration("A 14-day trek; 14 days in all; 140 days no.", 14, 12)).toEqual({
      text: "A 12-day trek; 12 days in all; 140 days no.",
      count: 2,
    });
  });

  it("cuts the inclusions down to the trek, keeping domestic flights", () => {
    const { inclusions, exclusions } = cityInclusions(
      LIST([
        "Airport pickup and drop-off services in Kathmandu.",
        "Domestic flights from Kathmandu to Lukla and back, including airport transfers.",
        "Accommodation in Kathmandu with breakfast.",
        "Tourist bus transportation from Kathmandu to Pokhara and back to Kathmandu.",
        "Accommodation in local teahouses during the trek.",
      ]),
      LIST(["International flight tickets to and from Nepal.", "Nepal entry visa fees.", "Tips for guides."]),
      { kind: "trek", completeDays: 14, pokhara: true, droppedKathmanduPokhara: true }
    );
    expect(inclusions).toContain("Domestic flights");
    expect(inclusions).toContain("teahouses");
    expect(inclusions).not.toMatch(/Airport pickup|Accommodation in Kathmandu|Tourist bus/);
    expect(exclusions).not.toMatch(/visa|International flight/);
    expect(exclusions).toContain("Accommodation and meals in Kathmandu or Pokhara unless mentioned in the itinerary.");
    expect(exclusions).toContain("Airport pickup and drop-off in Kathmandu.");
    expect(exclusions).not.toContain("complete package");
  });

  it("moves only the links that describe the complete package", () => {
    const rules = [{ from: "/treks/everest-base-camp-trek", to: "/treks/everest-base-camp-trek-package", when: "complete-anchor" as const, completeDays: 14 }];
    const html = '<a href="/treks/everest-base-camp-trek">14-day Everest Base Camp Trek</a> or <a href="/treks/everest-base-camp-trek">the classic route</a>';
    const { text, count } = rewriteLinks(html, rules);
    expect(count).toBe(1);
    expect(text).toContain('href="/treks/everest-base-camp-trek-package">14-day');
    expect(text).toContain('href="/treks/everest-base-camp-trek">the classic route');
    expect(rewriteLinks("[[trek:everest-base-camp-trek|the 14-day trek]]", rules).text).toBe("[[trek:everest-base-camp-trek-package|the 14-day trek]]");
  });
});

describe("titles and slugs", () => {
  it("pairs slugs both ways", () => {
    expect(variantSiblingSlug("mardi-himal-trek")).toBe("mardi-himal-trek-package");
    expect(variantSiblingSlug("mardi-himal-trek-package")).toBe("mardi-himal-trek");
  });

  it("titles each version for its own search", () => {
    const base = { maxAltitude: 4500, category: { slug: "treks" } };
    expect(packageTitle({ ...base, title: "Mardi Himal Trek", slug: "mardi-himal-trek", duration: 5, subtitle: "Pokhara to Pokhara" })).toBe(
      "Mardi Himal Trek from Pokhara – 5 Days: Itinerary & Cost"
    );
    expect(packageTitle({ ...base, title: "Mardi Himal Trek Package", slug: "mardi-himal-trek-package", duration: 9, subtitle: "Arrival to departure" })).toBe(
      "Mardi Himal Trek Package – 9 Days from Kathmandu"
    );
    expect(packageKind({ slug: "x", subtitle: null })).toBeNull();
  });
});

describe("planVariants", () => {
  it("splits a complete package into a city-to-city trip and a new package page", () => {
    const plan = planVariants([trek({ slug: "ridge-trek", itinerary: POKHARA_TREK })]);
    const [family] = plan.families;
    expect(family.shape).toBe("split");
    expect(family.city.patch).toMatchObject({ subtitle: "Pokhara to Pokhara", duration: 3, price: 375 });
    expect(family.city.patch.itinerary!.map((d) => d.dayNumber)).toEqual([1, 2, 3]);
    expect(family.city.patch.pricingTiers).toEqual([
      { groupSize: "1-1", pricePerPerson: 500 },
      { groupSize: "15-100", pricePerPerson: 375 },
    ]);
    expect(family.city.patch.faqs!.at(-1)!.answer).toBe("The trek takes 3 days.");
    expect(JSON.parse(family.city.patch.waypoints!)).toEqual([{ lng: 83.9, lat: 28.3, label: "Kande", dayNumber: 1 }]);

    if (!("create" in family.complete)) throw new Error("expected a new package");
    const pkg = family.complete.create;
    expect(pkg.slug).toBe("ridge-trek-package");
    expect(pkg.scalars).toMatchObject({ title: "Mardi Himal Trek Package", subtitle: "Arrival to departure", duration: 7, price: 525 });
    expect(pkg.itinerary).toHaveLength(7);
    // The guide section stays on the city-to-city page; the package links to it.
    const headings = JSON.parse(String(pkg.scalars.customSections)).map((s: { data: { heading: string } }) => s.data.heading);
    expect(headings).toEqual(["Trip Highlights", "What the Package Covers", "Trekking Guides & Articles"]);
    // Each page reads as a product of its own: no pointer to the other version.
    expect(String(pkg.scalars.overview)).not.toMatch(/city-to-city|ridge-trek"/);
    expect(family.city.patch.overview).not.toMatch(/complete package|-package"/);
    expect(family.linkRules[0]).toMatchObject({ to: "/treks/ridge-trek-package", completeDays: 7 });
  });

  it("swaps an existing pair into the convention and redirects the old URL", () => {
    const complete = trek({ slug: "mardi-himal-trek", itinerary: POKHARA_TREK });
    const city = trek({ slug: "mardi-himal-trek-from-pokhara", title: "Mardi Himal Trek from Pokhara", itinerary: POKHARA_TREK.slice(2, 5), price: 375 });
    const [family] = planVariants([complete, city]).families;
    expect(family.shape).toBe("pair");
    expect(family.city.patch).toMatchObject({ slug: "mardi-himal-trek", title: "Mardi Himal Trek" });
    expect("patch" in family.complete && family.complete.patch).toMatchObject({ slug: "mardi-himal-trek-package", title: "Mardi Himal Trek Package" });
    expect(family.redirects).toEqual([{ from: "/treks/mardi-himal-trek-from-pokhara", to: "/treks/mardi-himal-trek" }]);
    expect(family.idRemap).toEqual({ from: "mardi-himal-trek", to: "mardi-himal-trek-from-pokhara" });
  });

  it("builds a complete package around a city-to-city trip", () => {
    const short = trek({ slug: "short-trek", itinerary: POKHARA_TREK.slice(2, 5), price: 375, pricingTiers: [{ groupSize: "1-1", pricePerPerson: 400 }] });
    const [family] = planVariants([short]).families;
    expect(family.shape).toBe("add-complete");
    if (!("create" in family.complete)) throw new Error("expected a new package");
    const titles = family.complete.create.itinerary.map((d) => d.title);
    expect(titles[0]).toMatch(/^Arrival in Kathmandu/);
    expect(titles[1]).toMatch(/^Drive from Kathmandu .* to Pokhara/);
    expect(titles.at(-2)).toMatch(/^Drive from Pokhara .* to Kathmandu/);
    expect(titles.at(-1)).toMatch(/^Departure/);
    expect(family.complete.create.pricingTiers).toEqual([{ groupSize: "1-1", pricePerPerson: 550 }]);
  });

  it("leaves a trip that already has its package alone", () => {
    const plan = planVariants([
      trek({ slug: "ridge-trek", itinerary: POKHARA_TREK.slice(2, 5) }),
      trek({ slug: "ridge-trek-package", itinerary: POKHARA_TREK }),
    ]);
    expect(plan.families).toHaveLength(0);
    expect(plan.skipped.filter((s) => s.slug.startsWith("ridge-trek")).map((s) => s.reason)).toEqual([
      "already has its complete package",
      "already has its complete package",
    ]);
  });
});
