/**
 * Shape of a page in the "Climbing" category.
 *
 * Climbing sits between the treks and the tours and matches neither. A trek
 * definition has no way to say who carries the rope, how many Sherpas go up
 * with the group, whether the permit is an NMA peak fee or a Department of
 * Tourism royalty, or that eleven of the thirty nights are in a tent on a
 * glacier. A tour definition is built around vehicles and entrance fees. So
 * climbing gets its own type and its own builders in ./build.ts, sharing the
 * page shape both of the others already produce.
 */

export type ClimbAddon = {
  title: string;
  description: string;
  unit: string;
  pricePerUnit: number;
};

export type ClimbContent = {
  slug: string;
  title: string;
  /** Exactly 2 paragraphs of HTML. */
  overview: string;
  /** Exactly 5 [bold topic, short description] pairs. */
  highlights: [string, string][];
  /** Exactly 5 detail sections rendered after the add-ons section. */
  sections: { heading: string; content: string }[];
  /** Exactly 10 FAQs, none of which repeat the copy above. */
  faqs: { question: string; answer: string }[];

  inclusions: {
    /** Airport pickup/drop-off in Kathmandu — on by default. */
    airportTransfer?: boolean;
    /** Domestic flights and helicopter legs that appear in the itinerary. */
    flights?: string[];
    /** Ground transport lines, in itinerary order. */
    transport: string[];
    /** City hotel nights, e.g. "Accommodation in Kathmandu with breakfast." */
    cityAccommodation?: string[];
    /** Overrides the default teahouse line — used where the approach camps. */
    trekAccommodation?: string;
    /** Tented nights at base camp and above; omit only for a day-trip summit. */
    camping?: string;
    /** Climbing permit plus the conservation, park and municipality fees. */
    permits: string;
    /** Overrides the default licensed climbing-guide line. */
    guide?: string;
    /** Climbing Sherpa ratio above base camp. */
    sherpa?: string;
    /** Group technical equipment carried and fixed by the crew. */
    groupGear?: string;
    /**
     * Set true where personal climbing hardware is issued with the package
     * instead of being offered as a rental add-on — normal on the 8,000 m
     * expeditions, where the kit has to be checked before it leaves Kathmandu.
     */
    personalGear?: boolean;
    /** Bottled oxygen, masks and regulators, on the peaks that use them. */
    oxygen?: string;
    /** Anything else that belongs before the taxes line. */
    extra?: string[];
  };
  exclusions: {
    /** e.g. "Lunch and dinner in Kathmandu and Pokhara." */
    cityMeals: string;
    /** Overrides the default summit bonus line; set null to drop it entirely. */
    summitBonus?: string | null;
    /** Extra exclusion lines specific to this climb. */
    extra?: string[];
    /** Overrides the closing "unforeseen circumstances" line. */
    unforeseen?: string;
  };

  /**
   * Days a porter is engaged on the approach and the walk out. Omit on the
   * expeditions, where yaks and expedition porters carry the loads to base
   * camp as part of the package and there is nothing left to sell.
   */
  porterDays?: number;
  /** Nights the personal climbing kit is on loan, priced as a rental add-on. */
  gearRentalDays?: number;
  /** Kathmandu <-> Pokhara road transfers a flight can replace. */
  flightAddons?: ("ktm-pkr" | "pkr-ktm")[];
  /** Bottles a client can add to the standard allocation, on oxygen peaks. */
  extraOxygenBottles?: boolean;
  extraAddons?: ClimbAddon[];

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

export type Climb = {
  content: ClimbContent;
  /** Region name — must match one of the regions in ./regions.ts. */
  region: string;
  /** Base per-person price for the largest group; the tiers scale off it. */
  price: number;
  /** moderate | challenging | difficult | extreme */
  difficulty: string;
  /** Height of the summit itself, in metres. */
  maxAltitude: number;
  /**
   * Alpine grade of the climbing, in the form the peak is normally described
   * in — "PD", "PD+", "AD", "AD+", "D". Shown in the difficulty section.
   */
  grade: string;
  /**
   * True where the trip is run as an expedition — base camp for a week or
   * more, camps above it, a rotation and an expedition leader — rather than as
   * a peak climb. Controls the tone of the generated copy.
   */
  expedition?: boolean;
  /**
   * True for the Department of Tourism royalty peaks, which carry a liaison
   * officer and the DoT waste-management fee. False (the default) for the
   * Nepal Mountaineering Association peaks, whose permit and garbage deposit
   * go through the NMA — including several, such as Ama Dablam and Cholatse,
   * that are run as full expeditions.
   */
  royalty?: boolean;
  /** Route map camera: [lng, lat] and zoom. */
  center: [number, number];
  zoom: number;
  /** Every day in order. Day 1 is the arrival, the last day is the departure. */
  days: ClimbDay[];
};

export type ClimbDay = {
  title: string;
  elevation: string;
  /** Where the night is spent — also the label on the map waypoint. */
  accommodation: string;
  /** One line about the place, shown in the map waypoint popup. */
  placeDescription: string;
  lng: number;
  lat: number;
  html: string;
};

/** Wraps paragraphs into the <p>…</p> shape the editor and page already use. */
export const p = (...paras: string[]) => paras.map((t) => `<p>${t}</p>`).join("");

// ── Gateways, shared so the coordinates stay identical across every climb ──
export const KATHMANDU = { lng: 85.3104, lat: 27.7173 };
export const AIRPORT = { lng: 85.356, lat: 27.6993 };
export const POKHARA = { lng: 83.9607, lat: 28.2108 };

export const KTM_PLACE = "Nepal's capital city and the gateway to every climbing region in the country.";
export const KTM_RETURN_PLACE = "Nepal's vibrant capital and the final stop before departure.";
export const AIRPORT_PLACE = "Nepal's main international airport and the final departure point for your journey.";
export const PKR_PLACE = "Nepal's lakeside city, spread along Phewa Lake beneath the Annapurna range.";
