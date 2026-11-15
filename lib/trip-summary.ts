/**
 * The first paragraph of a trip page, and the questions it adds to the FAQ.
 *
 * A reader landing on a trip wants five things before anything else: how
 * long, where from, how high, how hard, when to go and what it costs. This
 * writes those answers from the trip's own fields — the same ones behind the
 * facts box and the price table — so the paragraph can never disagree with
 * them, and a price changed in the admin is the price it states.
 */
import { BUS_TITLE, FLIGHT_TITLE } from "@/lib/city-addons";
import { COMPLETE_PACKAGE_SUBTITLE, TRAILING_DURATION } from "@/lib/package-variants";
import { parseTierRange, type PricingTierLike } from "@/lib/pricing";

export type TripFacts = {
  title: string;
  duration: number;
  /** "Pokhara to Kathmandu", "Arrival to departure", or nothing for a trip with no fixed start. */
  subtitle?: string | null;
  categorySlug?: string | null;
  difficulty?: string | null;
  /** As stored: "Mar-May, Sep-Nov". */
  bestTime?: string | null;
  /** Metres. */
  maxAltitude?: number | null;
  price: number;
  pricingTiers?: PricingTierLike[] | null;
  addons?: Array<{ title?: string; unit?: string; pricePerUnit?: number }> | null;
};

export type TripFaq = { question: string; answer: string };

/** Below this a trip's height is not something a reader plans around. */
const HIGH_ALTITUDE = 2500;
/** A tier that runs this far ("15-100") has no real upper limit. */
const OPEN_ENDED = 50;

const usd = (amount: number) => `USD ${Math.round(amount).toLocaleString("en-US")}`;
const metres = (m: number) => `${Math.round(m).toLocaleString("en-US")} m (${Math.round(m * 3.28084).toLocaleString("en-US")} ft)`;
const capital = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

function list(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/** "a 5-day", "an 8-day", "an 11-day". */
function aDays(days: number): string {
  const an = days === 8 || days === 11 || days === 18 || (days >= 80 && days <= 89);
  return `${an ? "an" : "a"} ${days}-day`;
}

/** The trip's name without a trailing "– 6 Days". */
export function tripName(title: string): string {
  return title.replace(TRAILING_DURATION, "").trim();
}

/**
 * The name as it reads in a sentence. A name that ends in what the trip is
 * takes "the" ("the Annapurna Base Camp Trek"); one that names an activity or
 * a place does not ("Paragliding in Pokhara", "Island Peak Climbing").
 */
export function nameInSentence(title: string): string {
  const name = tripName(title);
  return /\b(?:Trek|Tour|Trip|Expedition|Circuit|Hike|Safari|Flight)$/.test(name) && !/^The\b/.test(name) ? `the ${name}` : name;
}

function noun(trip: TripFacts): string {
  switch (trip.categorySlug) {
    case "treks":
      return "trek";
    case "tours":
      return "tour";
    case "climbing":
      return /expedition/i.test(trip.title) ? "expedition" : "climb";
    default:
      return "trip";
  }
}

const MONTHS: Record<string, string> = {
  jan: "January", feb: "February", mar: "March", apr: "April", may: "May", jun: "June",
  jul: "July", aug: "August", sep: "September", sept: "September", oct: "October", nov: "November", dec: "December",
};

/** "Mar-May, Sep-Nov" -> "March to May and September to November". A part it cannot read is kept as written. */
export function formatSeason(bestTime: string | null | undefined): string | null {
  const parts = (bestTime ?? "").split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length === 0) return null;
  return list(
    parts.map((part) => {
      const range = part.match(/^([A-Za-z]{3,9})\.?\s*[-–]\s*([A-Za-z]{3,9})\.?$/);
      if (range) {
        const [from, to] = [MONTHS[range[1].toLowerCase()], MONTHS[range[2].toLowerCase()]];
        if (from && to) return `${from} to ${to}`;
      }
      return MONTHS[part.toLowerCase().replace(/\.$/, "")] ?? part;
    })
  );
}

type Tier = { min: number; max: number; price: number };

function tiers(trip: TripFacts): Tier[] {
  return (trip.pricingTiers ?? [])
    .filter((t) => t.pricePerPerson > 0)
    .map((t) => ({ ...parseTierRange(t.groupSize), price: t.pricePerPerson }))
    .sort((a, b) => a.min - b.min);
}

/** Who a tier is for: "one person", "2 to 4 people", "groups of 15 or more". */
function groupLabel(tier: Tier): string {
  if (tier.max >= OPEN_ENDED || tier.max < tier.min) return `groups of ${tier.min} or more`;
  if (tier.min === tier.max) return tier.min === 1 ? "one person" : `${tier.min} people`;
  return `${tier.min} to ${tier.max} people`;
}

const tierFor = (all: Tier[], people: number) => all.find((t) => people >= t.min && (people <= t.max || t.max < t.min));

function priceSentence(trip: TripFacts): string {
  const all = tiers(trip);
  const prices = new Set(all.map((t) => t.price));
  if (prices.size <= 1) return `The price is ${usd(all[0]?.price ?? trip.price)} per person.`;

  const lowest = all.reduce((best, t) => (t.price < best.price ? t : best));
  const solo = tierFor(all, 1);
  const pair = tierFor(all, 2);
  let smallGroups = "";
  if (solo && pair && solo.price === pair.price && solo.price !== lowest.price) {
    smallGroups = `; one or two people pay ${usd(solo.price)} each`;
  } else {
    const parts = [
      ...(solo && solo.price !== lowest.price ? [`a solo traveller pays ${usd(solo.price)}`] : []),
      ...(pair && pair.price !== lowest.price ? [`two people pay ${usd(pair.price)} each`] : []),
    ];
    if (parts.length > 0) smallGroups = `; ${parts.join(" and ")}`;
  }
  return `The price starts at ${usd(lowest.price)} per person for ${groupLabel(lowest)}${smallGroups}.`;
}

/** The opening paragraph: length and route, height, grade and season, price. */
export function tripLead(trip: TripFacts): string {
  const name = capital(nameInSentence(trip.title));
  const what = noun(trip);
  const [start, end] = (trip.subtitle ?? "").split(" to ").map((s) => s.trim());
  const cityToCity = Boolean(start && end) && trip.subtitle !== COMPLETE_PACKAGE_SUBTITLE;
  const high = trip.maxAltitude && trip.maxAltitude >= HIGH_ALTITUDE ? metres(trip.maxAltitude) : null;

  let first: string;
  if (trip.subtitle === COMPLETE_PACKAGE_SUBTITLE) {
    first = `${name} is ${aDays(trip.duration)} ${what}, counted from your arrival in Kathmandu to your departure${high ? `, with its highest point at ${high}` : ""}.`;
  } else if (trip.duration <= 1) {
    const where = cityToCity ? (start === end ? `, starting and ending in ${start}` : `, starting in ${start} and ending in ${end}`) : "";
    first = `${name} is done in a single day${where}${high ? `${where ? "," : ""} and reaches ${high}` : ""}.`;
  } else {
    const where = cityToCity ? (start === end ? ` that starts and ends in ${start}` : ` that starts in ${start} and ends in ${end}`) : "";
    const height = high ? (where ? `, reaching ${high} at its highest point` : ` that reaches ${high} at its highest point`) : "";
    first = `${name} is ${aDays(trip.duration)} ${what}${where}${height}.`;
  }

  const season = formatSeason(trip.bestTime);
  const grade = trip.difficulty?.trim().toLowerCase();
  const second = grade
    ? `It is graded ${grade}${season ? `, and the best time to go is ${season}` : ""}.`
    : season
      ? `The best time to go is ${season}.`
      : "";

  return [first, second, priceSentence(trip)].filter(Boolean).join(" ");
}

/** "How much does it cost?" — every group size and the extras, when the page has no answer of its own. */
function costFaq(trip: TripFacts): TripFaq | null {
  const all = tiers(trip);
  if (all.length === 0) return null;
  const name = nameInSentence(trip.title);
  const lowest = Math.min(...all.map((t) => t.price));
  const byGroup =
    new Set(all.map((t) => t.price)).size > 1
      ? ` The price depends on the size of your group: ${list(
          all.map((t) => `${usd(t.price)}${t.min === 1 && t.max === 1 ? "" : " each"} for ${groupLabel(t)}`)
        )}.`
      : "";
  const extras = (trip.addons ?? []).filter((a) => a.title && a.pricePerUnit).slice(0, 5);
  const extrasNote =
    extras.length > 0
      ? ` Optional extras are priced separately: ${list(extras.map((a) => `${a.title} (${usd(a.pricePerUnit!)} per ${a.unit || "person"})`))}.`
      : "";
  return {
    question: `How much does ${name} cost?`,
    answer: `${capital(name)} costs from ${usd(lowest)} per person.${byGroup}${extrasNote}`,
  };
}

/** "How do I get to Pokhara?" — for a trip that starts or ends there and sells the flight and bus as extras. */
function pokharaFaq(trip: TripFacts): TripFaq | null {
  const addon = (title: string) => (trip.addons ?? []).find((a) => a.title === title && a.pricePerUnit);
  const flight = addon(FLIGHT_TITLE);
  const bus = addon(BUS_TITLE);
  const [start, end] = (trip.subtitle ?? "").split(" to ").map((s) => s.trim());
  if (!flight || !bus || (start !== "Pokhara" && end !== "Pokhara")) return null;
  const name = nameInSentence(trip.title);
  const where = start === "Pokhara" && end === "Pokhara" ? "starts and ends in Pokhara" : start === "Pokhara" ? "starts in Pokhara" : "ends in Pokhara";
  return {
    question: `How do I travel between Kathmandu and Pokhara for ${name}?`,
    answer:
      `${capital(name)} ${where}, and the journey between Kathmandu and Pokhara is not part of the price. ` +
      `You can add a flight of about 25 minutes (${usd(flight.pricePerUnit!)} per person, one way) or a seat on a tourist bus, ` +
      `which takes six to eight hours (${usd(bus.pricePerUnit!)} per person, one way), when you book. ` +
      `Both are priced per person and per direction, so two people travelling both ways add the one they choose four times.`,
  };
}

/**
 * Questions answered from the trip's data, for the ones the page's own FAQ
 * does not already cover. They follow the written questions.
 */
export function tripFaqs(trip: TripFacts, existing: Array<{ question: string }>): TripFaq[] {
  const asked = (pattern: RegExp) => existing.some((f) => pattern.test(f.question));
  return [
    // "How much cash should I bring?" is not the question of what the trip costs.
    ...(asked(/\b(?:cost|costs|price|prices|priced)\b/i) ? [] : [costFaq(trip)]),
    ...(asked(/Kathmandu.*Pokhara|Pokhara.*Kathmandu|(?:get|travel|reach)\w* to Pokhara/i) ? [] : [pokharaFaq(trip)]),
  ].filter((faq): faq is TripFaq => faq !== null);
}
