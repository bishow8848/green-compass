/**
 * Shared builders for trek page content.
 *
 * Turns the compact per-trek definitions in ./<region>.ts into the exact
 * HTML / JSON shapes the trek detail page and admin editor already use
 * (matching the reference treks: manaslu-circuit-trek, tsum-valley-trek,
 * annapurna-base-camp-trek, makalu-base-camp-trek, ...).
 */

export const PORTER_RATE_PER_DAY = 35;
export const KTM_POKHARA_FLIGHT = 115;

export type Addon = {
  title: string;
  description: string;
  unit: string;
  pricePerUnit: number;
};

export type TrekContent = {
  slug: string;
  /** Display title used inside generated copy (falls back to the DB title). */
  title: string;
  /** 2 paragraphs of HTML. */
  overview: string;
  /** Exactly 5 [bold topic, short description] pairs. */
  highlights: [string, string][];
  /** Exactly 5 detail sections rendered after the add-ons section. */
  sections: { heading: string; content: string }[];
  /** Exactly 10 FAQs, none of which repeat the copy above. */
  faqs: { question: string; answer: string }[];

  inclusions: {
    /** Airport pickup/drop-off in Kathmandu — omit for Pokhara-start treks. */
    airportTransfer?: boolean;
    /** Domestic flights that appear in the itinerary. */
    flights?: string[];
    /** Ground transport lines, in itinerary order. */
    transport: string[];
    /** City hotel nights, e.g. "Accommodation in Kathmandu with breakfast." */
    cityAccommodation?: string[];
    /** Permit line for this region. */
    permits: string;
    /** Anything else that belongs before the taxes line. */
    extra?: string[];
  };
  exclusions: {
    /** e.g. "Lunch and dinner in Kathmandu and Pokhara." */
    cityMeals: string;
    /** Overrides the closing "unforeseen circumstances" line. */
    unforeseen?: string;
  };

  /**
   * Days the porter is engaged: every trekking day, plus the transfer day at
   * each end that carries the group to or from the trailhead. Kathmandu <->
   * Pokhara city transfers do not count — the porter joins at the gateway town.
   */
  porterDays: number;
  /** Kathmandu <-> Pokhara road transfers in the itinerary that a flight can replace. */
  flightAddons?: ("ktm-pkr" | "pkr-ktm")[];
  extraAddons?: Addon[];

  /** Single weekday for the weekly fixed departure. */
  fixedDepartureDay: string;

  /** Short line under the Itinerary heading. */
  itineraryDescription: string;
  /** Short line under the Inclusions & Exclusions heading. */
  inExDescription: string;

  bestTime: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    tags: string;
  };
};

const li = (items: string[]) =>
  `<ul>${items.map((t) => `<li><p>${t}</p></li>`).join("")}</ul><p></p>`;

export function buildInclusions(c: TrekContent): string {
  const items: string[] = [];
  if (c.inclusions.airportTransfer !== false) {
    items.push("Airport pickup and drop-off services in Kathmandu.");
  }
  items.push(...(c.inclusions.flights ?? []));
  items.push(...c.inclusions.transport);
  items.push(...(c.inclusions.cityAccommodation ?? []));
  items.push("Accommodation in local teahouses during the trek.");
  items.push(c.inclusions.permits);
  items.push("Professional English-speaking licensed trekking guide.");
  items.push("Three meals a day (breakfast, lunch, and dinner) during the trek.");
  items.push("Group trekking map for route guidance.");
  items.push("First aid kit carried by the guide.");
  items.push(...(c.inclusions.extra ?? []));
  items.push("All government taxes, permit fees, and service charges.");
  return li(items);
}

export function buildExclusions(c: TrekContent): string {
  return li([
    "International flight tickets to and from Nepal.",
    "Nepal entry visa fees.",
    "Travel insurance, including emergency helicopter evacuation coverage.",
    "Personal trekking equipment and clothing.",
    "Porter services (available at an additional cost).",
    c.exclusions.cityMeals,
    "Snacks, bottled water, hot showers, Wi-Fi, charging fees, and alcoholic or soft drinks.",
    "Personal expenses such as laundry, phone calls, and souvenirs.",
    "Tips for guides, drivers, and support staff.",
    c.exclusions.unforeseen ??
      "Any additional accommodation, transportation, or expenses caused by unforeseen circumstances beyond the itinerary.",
  ]);
}

export function buildHighlights(c: TrekContent): string {
  return `<ul>${c.highlights
    .map(([topic, desc]) => `<li><p><strong>${topic}:</strong> ${desc}</p></li>`)
    .join("")}</ul><p></p>`;
}

const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
  "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two",
  "twenty-three", "twenty-four", "twenty-five", "twenty-six",
];

/** Kept in step with porterDays so the copy can never contradict the price. */
function porterDescription(days: number): string {
  const word = NUMBER_WORDS[days] ?? String(days);
  const span =
    days === 1
      ? "the single day the porter is engaged"
      : `the ${word} days the porter is engaged, covering the trek itself and the transfer days to and from the trailhead`;
  return `Porter service is available at an additional cost for ${span}, with one porter generally shared between two trekkers and carrying up to 20 kg.`;
}

export function buildAddons(c: TrekContent): Addon[] {
  const addons: Addon[] = [
    {
      title: "Porter",
      description: porterDescription(c.porterDays),
      unit: "porter",
      pricePerUnit: c.porterDays * PORTER_RATE_PER_DAY,
    },
  ];
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

/** Stable, unique-per-trek section ids in the same shape the admin editor writes. */
function sectionId(slug: string, index: number): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const stamp = 1787400000000 + (h % 100000000);
  const suffix = h.toString(36).slice(0, 4).padEnd(4, "0");
  return `custom-${stamp + index}-${suffix}`;
}

export function buildCustomSections(c: TrekContent) {
  const all = [
    { heading: "Trip Highlights", content: buildHighlights(c) },
    ...c.sections,
  ];
  return all.map((s, i) => ({
    id: sectionId(c.slug, i),
    type: "custom",
    visible: false,
    label: "Custom Section",
    data: { heading: s.heading, content: s.content },
  }));
}

export function buildSectionOrder(c: TrekContent): string[] {
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

export function buildSectionData(c: TrekContent) {
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
      description:
        "Customize your trek with optional services such as porter support and other personalized arrangements at an additional cost.",
    },
    faqs: {
      heading: "Frequently Asked Questions",
      description: `Find quick answers to common questions about the ${c.title}.`,
    },
    gallery: {
      heading: "Gallery",
      description: `Explore authentic moments, landscapes, and mountain views from the ${c.title}.`,
    },
    map: { heading: "Route Map", description: "" },
    fixedDepartures: {
      heading: "Fix Departure",
      description:
        "This trek runs every week on the selected day. Choose custom dates for one-off departures.",
    },
  };
}
