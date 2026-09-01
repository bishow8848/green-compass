import type { TrekContent } from "../trek-content/build";

/**
 * A trek that does not exist in the database yet, described in full.
 *
 * Page copy reuses the shared `TrekContent` shape so the same builders that
 * wrote every other trek page produce the sections, add-ons, and ordering.
 * The fields below are the ones a brand-new trek needs on top of that: the
 * itinerary itself, and the numbers that live on the Trek row.
 */
export type NewTrek = {
  content: TrekContent;
  /** Base per-person price for the largest group; the tiers are derived from it. */
  price: number;
  /** easy | moderate | challenging | difficult | extreme */
  difficulty: string;
  /** Highest point slept at or crossed, in metres. */
  maxAltitude: number;
  /** Route map camera: [lng, lat] and zoom. */
  center: [number, number];
  zoom: number;
  /** Every day in order. Day 1 is the arrival, the last day is the departure. */
  days: FullDay[];
};

export type FullDay = {
  title: string;
  elevation: string;
  /** Where the night is spent — also the label on the map waypoint. */
  accommodation: string;
  /** One line about the place, shown in the map waypoint popup. */
  placeDescription: string;
  /** Waypoint coordinates, taken from OpenStreetMap rather than estimated. */
  lng: number;
  lat: number;
  html: string;
};

/** Wraps paragraphs into the <p>…</p> shape the editor and page already use. */
export const p = (...paras: string[]) => paras.map((t) => `<p>${t}</p>`).join("");

/** Kathmandu, Tribhuvan International Airport, and the domestic gateways. */
export const KATHMANDU = { lng: 85.31039517979352, lat: 27.717342703092356 };
export const AIRPORT = { lng: 85.35599254269323, lat: 27.69931039787083 };
export const POKHARA = { lng: 83.9606533434582, lat: 28.210841658113676 };

export const KTM_PLACE = "Nepal's capital city and the main gateway to the Himalayan trekking regions.";
export const KTM_RETURN_PLACE = "Nepal's vibrant capital and the final stop before departure.";
export const AIRPORT_PLACE = "Nepal's main international airport and the final departure point for your journey.";
