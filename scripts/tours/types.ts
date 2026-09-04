/**
 * Shape of a tour page in the "Tours" category.
 *
 * Tours differ from treks in a few ways that the trek definitions could not
 * express cleanly: most run for a single day, none of them need a porter, the
 * inclusions revolve around vehicles, entrance fees and city hotels rather
 * than teahouses, and the price spread runs from a $55 sightseeing drive to a
 * $4,000 helicopter charter. Hence a parallel type and its own builders in
 * ./build.ts, rather than bending scripts/trek-content/build.ts out of shape.
 */

export type TourAddon = {
  title: string;
  description: string;
  unit: string;
  pricePerUnit: number;
};

export type TourContent = {
  slug: string;
  title: string;
  /** Exactly 2 paragraphs of HTML. */
  overview: string;
  /** Exactly 5 [bold topic, short description] pairs. */
  highlights: [string, string][];
  /** Exactly 4 detail sections rendered after the add-ons section. */
  sections: { heading: string; content: string }[];
  /** Exactly 8 FAQs, none of which repeat the copy above. */
  faqs: { question: string; answer: string }[];

  inclusions: {
    /** Airport pickup/drop-off — true only for tours that start on arrival. */
    airportTransfer?: boolean;
    /** Domestic flights or helicopter legs that appear in the itinerary. */
    flights?: string[];
    /** Vehicle lines, in itinerary order. */
    transport: string[];
    /** Hotel nights, e.g. "Two nights at a 3-star hotel in Pokhara with breakfast." */
    accommodation?: string[];
    /** Meal lines, e.g. "Lunch at a local restaurant on the day of the tour." */
    meals?: string[];
    /** Monument and park entrance fees. */
    entrance?: string;
    /** Permit line, where the route needs one. */
    permits?: string;
    /** Overrides the default licensed-guide line. */
    guide?: string;
    /** Anything else that belongs before the taxes line. */
    extra?: string[];
  };
  exclusions: {
    /** Replaces the default "meals not listed" line. */
    meals?: string;
    /** Extra exclusion lines specific to this tour. */
    extra?: string[];
    /** Overrides the closing "unforeseen circumstances" line. */
    unforeseen?: string;
    /** Drops the international-flight and visa lines (for tours sold in-country). */
    domestic?: boolean;
  };

  /** Optional per-tour add-ons, on top of the private-vehicle upgrade. */
  addons?: TourAddon[];
  /** Set false where a private vehicle is already the only way the tour runs. */
  privateVehicleAddon?: boolean;

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

export type Tour = {
  content: TourContent;
  /** Region name — must match one of the regions in ./regions.ts. */
  region: string;
  /** Base per-person price for the largest group; the tiers scale off it. */
  price: number;
  /** easy | moderate | challenging | difficult | extreme */
  difficulty: string;
  /** Highest point reached, in metres. */
  maxAltitude: number;
  /** Route map camera: [lng, lat] and zoom. */
  center: [number, number];
  zoom: number;
  /** Every day in order. A single-day tour has exactly one entry. */
  days: TourDay[];
};

export type TourDay = {
  title: string;
  elevation: string;
  /** Where the night is spent, or the day's base — also the map waypoint label. */
  accommodation: string;
  /** One line about the place, shown in the map waypoint popup. */
  placeDescription: string;
  lng: number;
  lat: number;
  html: string;
};

/** Wraps paragraphs into the <p>…</p> shape the editor and page already use. */
export const p = (...paras: string[]) => paras.map((t) => `<p>${t}</p>`).join("");

// ── Places used across many tours, so the coordinates stay consistent ──
export const KATHMANDU = { lng: 85.3110, lat: 27.7172 };
export const AIRPORT = { lng: 85.3560, lat: 27.6993 };
export const POKHARA = { lng: 83.9606, lat: 28.2108 };
export const BHAKTAPUR = { lng: 85.4280, lat: 27.6722 };
export const PATAN = { lng: 85.3250, lat: 27.6727 };
export const NAGARKOT = { lng: 85.5200, lat: 27.7150 };
export const DHULIKHEL = { lng: 85.5430, lat: 27.6220 };
export const NAMOBUDDHA = { lng: 85.5820, lat: 27.5800 };
export const CHITWAN = { lng: 84.4990, lat: 27.5800 };
export const BARDIA = { lng: 81.3300, lat: 28.3900 };
export const LUMBINI = { lng: 83.2760, lat: 27.4690 };
export const MUKTINATH = { lng: 83.8720, lat: 28.8170 };
export const JOMSOM = { lng: 83.7220, lat: 28.7810 };
export const SARANGKOT = { lng: 83.9490, lat: 28.2440 };
export const LUKLA = { lng: 86.7290, lat: 27.6870 };
export const NAMCHE = { lng: 86.7140, lat: 27.8050 };

export const KTM_PLACE = "Nepal's capital city and the gateway to every tour in this catalogue.";
export const KTM_RETURN_PLACE = "Nepal's vibrant capital and the final stop before departure.";
export const AIRPORT_PLACE = "Nepal's main international airport and the final departure point for your journey.";
export const PKR_PLACE = "Nepal's lakeside city, spread along Phewa Lake beneath the Annapurna range.";
