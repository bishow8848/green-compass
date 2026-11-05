/**
 * Every trek and multi-day tour is sold two ways, as two pages:
 *
 *   city to city      /treks/annapurna-base-camp-trek          the trip itself, between two cities
 *                                                              ("Pokhara to Pokhara")
 *   complete package  /treks/annapurna-base-camp-trek-package  arrival in Nepal to departure, with
 *                                                              airport transfers and hotel nights
 *
 * Climbing is always a complete package; activities and day tours are always
 * city to city. The two pages of a pair are linked by slug alone (no schema
 * change), and `subtitle` carries the label shown on the page and its cards.
 * scripts/apply-package-variants.mts builds the pairs.
 */

export const PACKAGE_SLUG_SUFFIX = "-package";
/** `subtitle` of every complete package. A city-to-city trip stores "<Start> to <End>". */
export const COMPLETE_PACKAGE_SUBTITLE = "Arrival to departure";

export type PackageKind = "complete" | "city";

type VariantFields = { slug: string; subtitle?: string | null };

/** The other page of a pair: "x" <-> "x-package". It may not exist. */
export function variantSiblingSlug(slug: string): string {
  return slug.endsWith(PACKAGE_SLUG_SUFFIX)
    ? slug.slice(0, -PACKAGE_SLUG_SUFFIX.length)
    : `${slug}${PACKAGE_SLUG_SUFFIX}`;
}

/** Null when the trip carries no package label yet. */
export function packageKind(trip: VariantFields): PackageKind | null {
  if (trip.slug.endsWith(PACKAGE_SLUG_SUFFIX) || trip.subtitle === COMPLETE_PACKAGE_SUBTITLE) return "complete";
  if (trip.subtitle && / to /.test(trip.subtitle)) return "city";
  return null;
}

export function packageKindLabel(kind: PackageKind): string {
  return kind === "complete" ? "Complete package" : "City to city";
}

/** "Pokhara to Kathmandu" -> "Pokhara". */
export function startCity(subtitle?: string | null): string | null {
  const match = subtitle?.match(/^(.+?) to /);
  return match ? match[1].trim() : null;
}

/* ------------------------------------------------------------------ */
/* Titles                                                              */
/* ------------------------------------------------------------------ */

const MAX_TITLE_LENGTH = 60;
/** "14 Days", "2 Night", "3 Hours", "20 Minutes" already in the name. */
const DURATION_IN_NAME = /\b\d+\s*-?\s*(?:days?|nights?|hours?|hrs?|minutes?|mins?)\b/i;
/** "(6,097 m)" or "6812m" already in the name. */
const ALTITUDE_IN_NAME = /\d,?\d{3}\s?m\b/i;
/** A trailing " – 3 Hours" / " – 1 Day" on the name. */
export const TRAILING_DURATION = /\s*[–-]\s*\d+\s*(?:hours?|hrs?|minutes?|mins?|days?|nights?)\s*$/i;

export type TripForTitle = {
  title: string;
  slug: string;
  duration: number;
  maxAltitude: number | null;
  subtitle?: string | null;
  category: { slug: string } | null;
};

function tidy(name: string): string {
  return name.replace(/\s+(From|With)\s+/g, (_, word: string) => ` ${word.toLowerCase()} `).replace(/\s+/g, " ").trim();
}

function firstThatFits(options: string[], fallback: string): string {
  return options.find((t) => t.length <= MAX_TITLE_LENGTH) ?? fallback;
}

/**
 * A title written for people ready to book, first variant within 60 characters:
 *
 *   complete package  "<Trip> Package – <N> Days from Kathmandu"
 *   city to city      "<Trip> from Pokhara – <N> Days: Itinerary & Cost"  ("from" only when not Kathmandu)
 *   other multi-day   "<Trip> – <N> Days: Itinerary & Cost"               (climbs add "(6,812 m)" if it fits)
 *   day trip          "<Trip>: Price & Booking"
 *
 * The two pages of a pair get different titles on purpose: one answers
 * "annapurna base camp trek from pokhara", the other "… package from kathmandu",
 * so they are not competing for the same search.
 */
export function packageTitle(trip: TripForTitle): string {
  const name = tidy(trip.title);
  const kind = packageKind(trip);
  const days = DURATION_IN_NAME.test(name) ? "" : ` – ${trip.duration} Days`;
  const shortDays = DURATION_IN_NAME.test(name) ? "" : ` ${trip.duration} Days`;

  if (trip.duration <= 1) {
    // For a long name, the words people search with ("price") outrank the
    // flight time, which the page states anyway.
    const base = name.replace(TRAILING_DURATION, "");
    return firstThatFits([`${name}: Price & Booking`, `${base}: Price & Booking`, `${name} | Price`], name);
  }

  if (kind === "complete" && /\bpackage\b/i.test(name)) {
    return firstThatFits([`${name}${days} from Kathmandu`, `${name}${shortDays} from Kathmandu`, `${name}${days}`], name);
  }

  const from = kind === "city" ? startCity(trip.subtitle) : null;
  const fromPart = from && from !== "Kathmandu" && !new RegExp(`\\bfrom ${from}\\b`, "i").test(name) ? ` from ${from}` : "";
  const altitude =
    trip.category?.slug === "climbing" && trip.maxAltitude && !ALTITUDE_IN_NAME.test(name)
      ? ` (${Math.round(trip.maxAltitude).toLocaleString("en-US")} m)`
      : "";

  return firstThatFits(
    [
      `${name}${fromPart}${altitude}${days}: Itinerary & Cost`,
      `${name}${fromPart}${days}: Itinerary & Cost`,
      `${name}${fromPart}${shortDays}: Itinerary & Cost`,
      `${name}${fromPart}${days}: Cost`,
      `${name}${fromPart}${days}`,
      `${name}${days}: Itinerary & Cost`,
      `${name}${days}: Cost`,
      `${name}${days}`,
    ],
    name
  );
}
