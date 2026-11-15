/**
 * The add-ons that replaced the retired "complete package" pages: the airport
 * transfers on arrival and departure, hotel nights in the cities, and the
 * journey between Kathmandu and Pokhara.
 *
 * scripts/apply-city-addons.mts writes them onto the trips; the trip page
 * reads the same titles to answer "how do I get to Pokhara?" (lib/trip-summary.ts).
 */

/** Both transfers in one line: to the hotel when you land, back to the airport when you leave. */
export const AIRPORT_TITLE = "Airport Arrival & Departure Transfer";
/** One line for every city: the description names the cities the trip touches. */
export const CITY_NIGHT_TITLE = "Extra Night in City";
export const FLIGHT_TITLE = "Kathmandu–Pokhara Flight (One Way)";
export const BUS_TITLE = "Kathmandu–Pokhara Tourist Bus (One Way)";

/** USD for up to AIRPORT_GROUP_SIZE people, covering both the arrival and the departure transfer. */
export const AIRPORT_PRICE = 50;
/** People one airport transfer carries; a larger group adds one per this many people or part of it. */
export const AIRPORT_GROUP_SIZE = 6;

/** How many airport transfers a group adds: 1–6 people one, 7–12 two, 20 people four. */
export function airportTransfersFor(people: number): number {
  return Math.max(1, Math.ceil(people / AIRPORT_GROUP_SIZE));
}
/** USD per room per night, breakfast included. */
export const CITY_NIGHT_PRICE = 50;
/** USD per person, one way. */
export const FLIGHT_PRICE = 115;
/** USD per person, one way. */
export const BUS_PRICE = 15;

/**
 * The sentence that tells a reader what is left out can be bought with the
 * trip: "Airport transfers, hotel nights and the flight or tourist bus between
 * Kathmandu and Pokhara can be added as extras when you book." Null when the
 * trip offers none of them.
 */
export function extrasSentence(addonTitles: string[]): string | null {
  const has = (title: string) => addonTitles.includes(title);
  const parts = [
    ...(has(AIRPORT_TITLE) ? ["airport transfers"] : []),
    ...(has(CITY_NIGHT_TITLE) ? ["hotel nights"] : []),
    ...(has(FLIGHT_TITLE) && has(BUS_TITLE) ? ["the flight or tourist bus between Kathmandu and Pokhara"] : []),
  ];
  if (parts.length === 0) return null;
  const list = parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
  return `${list.charAt(0).toUpperCase()}${list.slice(1)} can be added as ${parts.length === 1 ? "an extra" : "extras"} when you book.`;
}

/** An extras sentence as written by extrasSentence, in any of its forms — for replacing an older one. */
export const EXTRAS_SENTENCE = /[A-Z][^.<]*?can be added as (?:an extra|extras) when you book\./;
