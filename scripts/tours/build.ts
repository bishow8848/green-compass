/**
 * Builders that turn the compact tour definitions in ./<region>.ts into the
 * exact HTML / JSON shapes the trek detail page and the admin editor already
 * consume. Mirrors scripts/trek-content/build.ts, with the inclusions,
 * add-ons and pricing rewritten for tours.
 */
import type { Tour, TourAddon, TourContent } from "./types";

const li = (items: string[]) =>
  `<ul>${items.map((t) => `<li><p>${t}</p></li>`).join("")}</ul><p></p>`;

/**
 * Every tour runs on private transport — this line goes into the inclusions of
 * all of them, ahead of the itinerary-specific vehicle lines, so the promise is
 * stated once in the same words everywhere.
 */
export const PRIVATE_TRANSPORT_LINE =
  "Private transportation throughout: a vehicle and driver reserved for your party alone, never a shared or public service.";

export function buildInclusions(c: TourContent): string {
  const items: string[] = [];
  if (c.inclusions.airportTransfer) {
    items.push("Airport pickup and drop-off services in Kathmandu.");
  }
  items.push(...(c.inclusions.flights ?? []));
  items.push(PRIVATE_TRANSPORT_LINE);
  items.push(...c.inclusions.transport);
  items.push(...(c.inclusions.accommodation ?? []));
  items.push(...(c.inclusions.meals ?? []));
  if (c.inclusions.entrance) items.push(c.inclusions.entrance);
  if (c.inclusions.permits) items.push(c.inclusions.permits);
  items.push(c.inclusions.guide ?? "Professional English-speaking licensed tour guide.");
  items.push(...(c.inclusions.extra ?? []));
  items.push("All government taxes and service charges.");
  return li(items);
}

export function buildExclusions(c: TourContent): string {
  const items: string[] = [];
  if (!c.exclusions.domestic) {
    items.push("International flight tickets to and from Nepal.");
    items.push("Nepal entry visa fees.");
  }
  items.push("Travel insurance covering medical treatment and emergency evacuation.");
  items.push(c.exclusions.meals ?? "Meals not specified in the itinerary.");
  items.push(...(c.exclusions.extra ?? []));
  if (c.luxuryVehicleAddon !== false) {
    items.push(
      "Luxury vehicle upgrade — private transport is included as standard, the luxury vehicle is an optional add-on.",
    );
  }
  items.push("Drinks, snacks, and personal expenses such as laundry, phone calls and souvenirs.");
  items.push("Tips for the guide and driver.");
  items.push(
    c.exclusions.unforeseen ??
      "Any additional cost caused by flight delays, roadblocks, weather or other circumstances beyond our control.",
  );
  return li(items);
}

export function buildHighlights(c: TourContent): string {
  return `<ul>${c.highlights
    .map(([topic, desc]) => `<li><p><strong>${topic}:</strong> ${desc}</p></li>`)
    .join("")}</ul><p></p>`;
}

/**
 * Per-person price by group size. Tours run from $55 to $4,000, so the steps
 * scale with the base price instead of using the flat dollar steps the treks
 * use. Rounded to the nearest $5 so the table reads cleanly.
 */
const TIER_FACTORS: [string, number][] = [
  ["1-1", 0.4],
  ["2-4", 0.24],
  ["5-7", 0.14],
  ["8-10", 0.08],
  ["11-14", 0.04],
  ["15-100", 0],
];

export function buildPricingTiers(price: number) {
  return TIER_FACTORS.map(([groupSize, factor]) => ({
    groupSize,
    pricePerPerson: Math.round((price * (1 + factor)) / 5) * 5,
  }));
}

/**
 * Luxury-vehicle upgrade, priced off the length of the trip. A private vehicle
 * is included in every tour, so what is sold here is the class of vehicle —
 * a premium SUV or van instead of the standard car — not the privacy.
 */
function luxuryVehicleAddon(days: number): TourAddon {
  const perDay = 60;
  return {
    title: "Luxury Vehicle Upgrade",
    description:
      days === 1
        ? "Your tour already runs in a private vehicle. This upgrades it to a luxury SUV or premium van — leather seats, extra legroom, climate control and a senior driver — for the day."
        : `Your tour already runs in a private vehicle. This upgrades it to a luxury SUV or premium van for all ${days} days, with extra legroom, climate control, room for luggage and a senior driver throughout.`,
    unit: "vehicle",
    pricePerUnit: perDay * days,
  };
}

export function buildAddons(t: Tour): TourAddon[] {
  const addons: TourAddon[] = [];
  if (t.content.luxuryVehicleAddon !== false) {
    addons.push(luxuryVehicleAddon(t.days.length));
  }
  addons.push(...(t.content.addons ?? []));
  return addons;
}

/** Stable, unique-per-tour section ids in the shape the admin editor writes. */
function sectionId(slug: string, index: number): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const stamp = 1790000000000 + (h % 100000000);
  const suffix = h.toString(36).slice(0, 4).padEnd(4, "0");
  return `custom-${stamp + index}-${suffix}`;
}

export function buildCustomSections(c: TourContent) {
  const all = [{ heading: "Tour Highlights", content: buildHighlights(c) }, ...c.sections];
  return all.map((s, i) => ({
    id: sectionId(c.slug, i),
    type: "custom",
    visible: false,
    label: "Custom Section",
    data: { heading: s.heading, content: s.content },
  }));
}

export function buildSectionOrder(c: TourContent): string[] {
  const ids = buildCustomSections(c).map((s) => s.id);
  return [
    "details",
    "seo",
    "overview",
    ids[0], // Tour Highlights sits directly under the overview
    "itinerary",
    "inEx",
    "map",
    "pricing",
    "addons",
    ...ids.slice(1), // the four detail sections
    "faqs",
    "gallery",
    "fixedDepartures",
    "similarTreks",
  ];
}

export function buildSectionData(c: TourContent, days: number) {
  return {
    itinerary: {
      heading: days === 1 ? "Tour Plan" : "Itinerary",
      description: c.itineraryDescription,
    },
    inEx: { heading: "Inclusions & Exclusions", description: c.inExDescription },
    pricing: {
      heading: "Pricing",
      description:
        "Transparent per-person pricing based on group size, covering the services listed in the itinerary with no hidden charges.",
    },
    addons: {
      heading: "Add-ons",
      description:
        c.luxuryVehicleAddon === false
          ? "Private transportation with a driver is included in every tour. Add optional services and personalized arrangements at an additional cost."
          : "Private transportation with a driver is included in every tour. Upgrade to a luxury vehicle or add other personalized arrangements at an additional cost.",
    },
    faqs: {
      heading: "Frequently Asked Questions",
      description: `Find quick answers to common questions about the ${c.title}.`,
    },
    gallery: {
      heading: "Gallery",
      description: `Explore authentic moments, landscapes and street scenes from the ${c.title}.`,
    },
    map: { heading: "Tour Map", description: "" },
    fixedDepartures: {
      heading: "Fix Departure",
      description:
        "This tour runs every week on the selected day. Choose custom dates for one-off departures.",
    },
  };
}
