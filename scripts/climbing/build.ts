/**
 * Builders that turn the compact climb definitions in ./<region>.ts into the
 * exact HTML / JSON shapes the detail page and the admin editor already
 * consume. Mirrors scripts/trek-content/build.ts and scripts/tours/build.ts,
 * with the inclusions, add-ons and pricing rewritten for climbing.
 */
import type { Climb, ClimbAddon, ClimbContent } from "./types";

export const PORTER_RATE_PER_DAY = 35;
export const GEAR_RENTAL_PER_DAY = 12;
export const OXYGEN_BOTTLE = 650;
export const KTM_POKHARA_FLIGHT = 115;

const li = (items: string[]) =>
  `<ul>${items.map((t) => `<li><p>${t}</p></li>`).join("")}</ul><p></p>`;

export function buildInclusions(t: Climb): string {
  const c = t.content;
  const items: string[] = [];

  if (c.inclusions.airportTransfer !== false) {
    items.push("Airport pickup and drop-off services in Kathmandu.");
  }
  items.push(...(c.inclusions.flights ?? []));
  items.push(...c.inclusions.transport);
  items.push(...(c.inclusions.cityAccommodation ?? []));
  items.push(
    c.inclusions.trekAccommodation ?? "Accommodation in local teahouses on the approach and the walk out.",
  );
  if (c.inclusions.camping) items.push(c.inclusions.camping);
  items.push("Three meals a day (breakfast, lunch, and dinner) throughout the trip.");
  items.push(c.inclusions.permits);
  items.push(
    c.inclusions.guide ??
      (t.royalty
        ? "Government-licensed expedition leader and a liaison officer, with all their equipment, wages and insurance."
        : t.expedition
          ? "Government-licensed expedition leader, with all equipment, wages and insurance."
          : "Government-licensed climbing guide, with all equipment, wages and insurance."),
  );
  if (c.inclusions.sherpa) items.push(c.inclusions.sherpa);
  if (c.inclusions.oxygen) items.push(c.inclusions.oxygen);
  items.push(
    c.inclusions.groupGear ??
      "Group climbing equipment: fixed and main ropes, snow bars, ice screws, and anchors.",
  );
  if (c.inclusions.personalGear) {
    items.push(
      "Personal climbing equipment for the duration of the climb: harness, crampons, ice axe, ascender, descender, helmet, and carabiners.",
    );
  }
  items.push(
    t.royalty
      ? "Garbage deposit and the Department of Tourism waste-management fee."
      : "Garbage deposit paid to the Nepal Mountaineering Association.",
  );
  items.push("Group map, and a comprehensive first aid kit carried by the guide.");
  items.push(...(c.inclusions.extra ?? []));
  items.push("Summit certificate issued after a successful ascent.");
  items.push("All government taxes, permit fees, and service charges.");
  return li(items);
}

export function buildExclusions(t: Climb): string {
  const c = t.content;
  const items: string[] = [
    "International flight tickets to and from Nepal.",
    "Nepal entry visa fees.",
    "Travel insurance covering mountaineering to the height of this peak, including emergency helicopter evacuation and repatriation.",
  ];
  if (!c.inclusions.personalGear) {
    items.push(
      "Personal climbing equipment — harness, crampons, ice axe, ascender, descender, helmet and carabiners (available to rent as an add-on).",
    );
  }
  items.push("Personal trekking equipment and clothing, including boots and a sleeping bag.");
  if (c.porterDays) items.push("Porter services (available at an additional cost).");
  items.push(c.exclusions.cityMeals);
  items.push("Snacks, bottled water, hot showers, Wi-Fi, charging fees, and alcoholic or soft drinks.");
  items.push(...(c.exclusions.extra ?? []));
  items.push("Personal expenses such as laundry, phone calls, and souvenirs.");
  if (c.exclusions.summitBonus !== null) {
    items.push(
      c.exclusions.summitBonus ??
        (t.expedition || t.royalty
          ? "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and support staff."
          : "Tips for the guide, climbing Sherpa, porters and support staff."),
    );
  }
  items.push(
    c.exclusions.unforeseen ??
      "Any additional accommodation, transport, or expenses caused by weather, flight delays, an early descent, or other circumstances beyond the itinerary.",
  );
  return li(items);
}

export function buildHighlights(c: ClimbContent): string {
  return `<ul>${c.highlights
    .map(([topic, desc]) => `<li><p><strong>${topic}:</strong> ${desc}</p></li>`)
    .join("")}</ul><p></p>`;
}

/**
 * Per-person price by group size. Climbing runs from about $2,200 for Pisang
 * Peak to $45,000 for Everest, so the steps scale with the base price the way
 * the tours do, rather than the flat dollar steps the treks use. A big
 * expedition's fixed costs — royalty, liaison officer, base camp — barely move
 * with party size, which is exactly what a proportional step expresses.
 */
const TIER_FACTORS: [string, number][] = [
  ["1-1", 0.22],
  ["2-4", 0.13],
  ["5-7", 0.07],
  ["8-10", 0.04],
  ["11-14", 0.015],
  ["15-100", 0],
];

export function buildPricingTiers(price: number) {
  return TIER_FACTORS.map(([groupSize, factor]) => ({
    groupSize,
    pricePerPerson: Math.round((price * (1 + factor)) / 10) * 10,
  }));
}

const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two",
  "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven",
  "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two",
  "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven",
  "thirty-eight", "thirty-nine", "forty",
];

const word = (n: number) => NUMBER_WORDS[n] ?? String(n);

export function buildAddons(t: Climb): ClimbAddon[] {
  const c = t.content;
  const addons: ClimbAddon[] = [];

  if (c.porterDays) {
    addons.push({
      title: "Porter",
      description:
        `Porter service is available at an additional cost for the ${word(c.porterDays)} days the porter is engaged, ` +
        "covering the approach and the walk out, with one porter generally shared between two climbers and carrying up to 20 kg. " +
        "Loads above base camp are carried by the climbing crew and are already included.",
      unit: "porter",
      pricePerUnit: c.porterDays * PORTER_RATE_PER_DAY,
    });
  }

  if (c.gearRentalDays) {
    addons.push({
      title: "Personal Climbing Equipment Rental",
      description:
        `A full set of personal climbing hardware for the ${word(c.gearRentalDays)} days it is needed: harness, crampons, ` +
        "ice axe, ascender, descender, helmet, and locking carabiners. Everything is checked and fitted in Kathmandu before departure. " +
        "Mountaineering boots are not part of the set and are best brought from home, already broken in.",
      unit: "person",
      pricePerUnit: c.gearRentalDays * GEAR_RENTAL_PER_DAY,
    });
  }

  if (c.extraOxygenBottles) {
    addons.push({
      title: "Additional Bottled Oxygen",
      description:
        "An extra 4-litre bottle of supplementary oxygen beyond the allocation included in your package, carried to the high camps " +
        "and held in reserve for the summit push. Unused bottles are refunded in full after the expedition.",
      unit: "bottle",
      pricePerUnit: OXYGEN_BOTTLE,
    });
  }

  for (const leg of c.flightAddons ?? []) {
    addons.push(
      leg === "ktm-pkr"
        ? {
            title: "Flight from Kathmandu to Pokhara",
            description:
              "Replace the road transfer with a scenic 25-minute domestic flight from Kathmandu to Pokhara, available at an additional cost.",
            unit: "person",
            pricePerUnit: KTM_POKHARA_FLIGHT,
          }
        : {
            title: "Flight from Pokhara to Kathmandu",
            description:
              "Replace the road transfer with a quick 25-minute domestic flight from Pokhara to Kathmandu, available at an additional cost.",
            unit: "person",
            pricePerUnit: KTM_POKHARA_FLIGHT,
          },
    );
  }

  addons.push(...(c.extraAddons ?? []));
  return addons;
}

/** Stable, unique-per-climb section ids in the shape the admin editor writes. */
function sectionId(slug: string, index: number): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const stamp = 1792600000000 + (h % 100000000);
  const suffix = h.toString(36).slice(0, 4).padEnd(4, "0");
  return `custom-${stamp + index}-${suffix}`;
}

export function buildCustomSections(c: ClimbContent) {
  const all = [{ heading: "Trip Highlights", content: buildHighlights(c) }, ...c.sections];
  return all.map((s, i) => ({
    id: sectionId(c.slug, i),
    type: "custom",
    visible: false,
    label: "Custom Section",
    data: { heading: s.heading, content: s.content },
  }));
}

export function buildSectionOrder(c: ClimbContent): string[] {
  const ids = buildCustomSections(c).map((s) => s.id);
  return [
    "details",
    "seo",
    "overview",
    ids[0], // Trip Highlights sits directly under the overview
    "itinerary",
    "inEx",
    "map",
    "pricing",
    "addons",
    ...ids.slice(1), // the five detail sections
    "faqs",
    "gallery",
    "fixedDepartures",
    "similarTreks",
  ];
}

export function buildSectionData(t: Climb) {
  const c = t.content;
  const noun = t.expedition ? "expedition" : "climb";
  return {
    itinerary: { heading: "Itinerary", description: c.itineraryDescription },
    inEx: { heading: "Inclusions & Exclusions", description: c.inExDescription },
    pricing: {
      heading: "Pricing",
      description:
        "Transparent per-person pricing based on group size, covering the services listed in the itinerary with no hidden charges.",
    },
    addons: {
      heading: "Add-ons",
      description: `Customize your ${noun} with optional services such as porter support, climbing equipment rental and other personalized arrangements at an additional cost.`,
    },
    faqs: {
      heading: "Frequently Asked Questions",
      description: `Find quick answers to common questions about the ${c.title}.`,
    },
    gallery: {
      heading: "Gallery",
      description: `Explore authentic moments, camps and summit views from the ${c.title}.`,
    },
    map: { heading: "Route Map", description: "" },
    fixedDepartures: {
      heading: "Fix Departure",
      description: `This ${noun} runs every week on the selected day through the climbing season. Choose custom dates for one-off departures.`,
    },
  };
}
