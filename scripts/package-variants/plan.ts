/**
 * Plans the city-to-city / complete-package pairs described in
 * lib/package-variants.ts.
 *
 * Pure: it takes a snapshot of the catalogue and returns every write, so a dry
 * run shows exactly what an apply would do and the rules are unit tested
 * (tests/unit/package-variants-plan.test.ts). scripts/apply-package-variants.mts
 * does the reading and writing.
 *
 * Three shapes of family, by what exists today:
 *
 *   split         one complete package at the base slug (e.g. everest-base-camp-trek).
 *                 That record becomes the city-to-city trip — it keeps its URL, reviews,
 *                 gallery and guide sections — and a new record at <base>-package is the
 *                 complete package, copied from it before the change.
 *   pair          both versions already exist (mardi-himal-trek + mardi-himal-trek-from-pokhara).
 *                 The slugs swap into the convention and the old city-to-city URL redirects.
 *   add-complete  only a city-to-city trip exists (short-tilicho-lake-trek, Chitwan tours…).
 *                 A complete package is built around it: arrival, Kathmandu–Pokhara
 *                 transfers when it starts or ends in Pokhara, departure.
 *
 * Prices move by PRICE_PER_DAY for every day added or dropped — the rate behind
 * the existing pairs ($150 for the four Kathmandu–Pokhara days) — on every
 * group-size tier, rounded to $5.
 */
import {
  COMPLETE_PACKAGE_SUBTITLE,
  PACKAGE_SLUG_SUFFIX,
  TRAILING_DURATION,
  packageTitle,
} from "@/lib/package-variants";

export const PRICE_PER_DAY = 37.5;

/* ------------------------------------------------------------------ */
/* Snapshot types                                                      */
/* ------------------------------------------------------------------ */

export type DayRow = {
  dayNumber: number;
  title: string;
  description: string;
  elevation: string | null;
  accommodation: string | null;
  placeDescription: string | null;
  [column: string]: unknown;
};
export type TierRow = { groupSize: string; pricePerPerson: number };
export type FaqRow = { question: string; answer: string };
export type GalleryRow = { imageId: string; alt: string | null; caption: string | null };
export type DateRow = { startDate: Date | string; seatsLeft: number };

export type TrekRow = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  status: string;
  duration: number;
  price: number;
  maxAltitude: number | null;
  overview: string;
  inclusions: string;
  exclusions: string;
  metaTitle: string | null;
  metaDescription: string | null;
  waypoints: string | null;
  customSections: string | null;
  sectionOrder: string | null;
  sectionData: string | null;
  category: { slug: string } | null;
  itinerary: DayRow[];
  pricingTiers: TierRow[];
  faqs: FaqRow[];
  galleryImages: GalleryRow[];
  availableDates: DateRow[];
  [column: string]: unknown;
};

/** Scalar columns a new complete package copies from the record it is made from. */
export const COPIED_COLUMNS = [
  "categoryId", "regionId", "difficulty", "region", "maxGroupSize", "heroImage", "bestTime", "maxAltitude",
  "keywords", "tags", "geoJsonUrl", "geoJsonData", "staticMapImage", "centerLat", "centerLng", "zoom", "pitch",
  "sectionData", "similarTrekIds", "addons", "fixedDepartureDays", "customStartDates",
] as const;

export type TrekPatch = {
  slug?: string;
  title?: string;
  subtitle?: string;
  duration?: number;
  price?: number;
  overview?: string;
  inclusions?: string;
  exclusions?: string;
  metaTitle?: string;
  metaDescription?: string;
  waypoints?: string | null;
  customSections?: string;
  sectionOrder?: string;
  sectionData?: string | null;
  /** Replaces the rows wholesale when present. */
  itinerary?: DayRow[];
  pricingTiers?: TierRow[];
  faqs?: FaqRow[];
};

export type NewTrek = {
  sourceId: string;
  slug: string;
  scalars: Record<string, unknown>;
  itinerary: DayRow[];
  pricingTiers: TierRow[];
  faqs: FaqRow[];
  galleryImages: GalleryRow[];
  availableDates: DateRow[];
};

/** A blog or page link to the base URL that describes the complete package moves to it. */
export type LinkRule = { from: string; to: string; when: "always" | "complete-anchor"; completeDays?: number };

export type Family = {
  shape: "split" | "pair" | "add-complete";
  base: string;
  category: string;
  name: string;
  start: string;
  end: string;
  cityDays: number;
  completeDays: number;
  /** Days between the two versions, and the per-person price difference they make. */
  daysApart: number;
  priceDelta: number;
  city: { id: string; before: TrekRow; patch: TrekPatch };
  complete: { id: string; before: TrekRow; patch: TrekPatch } | { create: NewTrek };
  redirects: Array<{ from: string; to: string }>;
  linkRules: LinkRule[];
  /** Ids other records should point at instead (only for pairs: complete -> city). */
  idRemap?: { from: string; to: string };
  notes: string[];
};

export type Plan = {
  families: Family[];
  /** Records outside any pair that only gain their package label. */
  labels: Array<{ id: string; slug: string; subtitle: string }>;
  skipped: Array<{ slug: string; reason: string }>;
};

/* ------------------------------------------------------------------ */
/* Families that already exist as two records                          */
/* ------------------------------------------------------------------ */

/** [complete package, city-to-city], checked day by day: the same trek, four days apart. */
export const EXISTING_PAIRS: Array<[string, string]> = [
  ["annapurna-base-camp-trek", "annapurna-base-camp-trek-from-pokhara"],
  ["annapurna-base-camp-trek-with-ghorepani-poonhill-trek", "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara"],
  ["mardi-himal-trek-with-annapurna-base-camp", "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara"],
  ["jomsom-muktinath-trek", "jomsom-muktinath-trek-from-pokhara"],
  ["khopra-danda-trek", "khopra-danda-trek-from-pokhara"],
  ["khori-himal-trek", "khori-himal-trek-from-pokhara"],
  ["lower-mustang-trek", "lower-mustang-trek-from-pokhara"],
  ["mardi-himal-trek", "mardi-himal-trek-from-pokhara"],
  ["mohare-danda-trek", "mohare-danda-trek-from-pokhara"],
  ["poonhill-trek", "poonhill-trek-from-pokhara"],
  ["upper-mustang-trek", "upper-mustang-trek-from-pokhara"],
];

/* ------------------------------------------------------------------ */
/* Reading an itinerary                                                */
/* ------------------------------------------------------------------ */

const HUBS = ["Kathmandu", "Pokhara"] as const;
type Hub = (typeof HUBS)[number];

/** "Drive from Kathmandu (1,400 m) to Pokhara (822 m)" -> "Drive from Kathmandu to Pokhara". */
export function plainDayTitle(title: string): string {
  return title
    .replace(/\([^)]*\)/g, " ")
    .replace(/^day\s*\d+\s*:\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

const ARRIVAL = /^(arrival|arrive|arriving|welcome)\b/i;
const DEPARTURE = /\b(departure|depart|fly home|homeward)\b/i;
/** A day spent in the city: sightseeing, permits, preparation, a spare day. */
const CITY_STAY = /\b(sightseeing|preparation|permit day|contingency|spare day|reserve day|free day|rest day|leisure|buffer)\b/i;
const MOVES = /\b(drive|fly|flight|trek|hike|walk|jeep|bus)\b[^.]*?\bto\b/i;
const KTM_TO_PKR = /^(drive|fly|flight|bus|travel|transfer)\s+(from\s+)?kathmandu\s+to\s+pokhara$/i;
const PKR_TO_KTM = /^(drive|fly|flight|bus|travel|transfer|return)\s+(back\s+)?(from\s+)?pokhara\s+(back\s+)?to\s+kathmandu$/i;
/** "… to Kathmandu and Final Departure": a real travel day that also ends the trip. */
const COMBINED_DEPARTURE = /\s*(?:,|and|&)\s*(?:final\s+)?(?:departure|depart)\b.*$/i;

function isCityStay(title: string): boolean {
  const t = plainDayTitle(title);
  return CITY_STAY.test(t) && /\b(kathmandu|pokhara)\b/i.test(t) && !MOVES.test(t);
}

function isPureDeparture(title: string): boolean {
  const t = plainDayTitle(title);
  return DEPARTURE.test(t) && !/\b(drive|fly|trek|hike|walk)\s+from\s+(?!kathmandu|pokhara)/i.test(t);
}

export type Cut = { lead: number; trail: number; start: Hub; end: Hub | string; combinedDeparture: boolean };

/**
 * Which leading and trailing days of a complete package are the package
 * around the trip — arrival, days in the city, the Kathmandu–Pokhara
 * transfers, departure — and where the trip itself starts and ends.
 *
 * A trek drops all of them, as the existing pairs do: the Pokhara treks start
 * the morning after the drive to Pokhara. A tour drops only arrival and
 * departure, because its city days are the tour.
 */
export function cutPackageDays(days: DayRow[], kind: "trek" | "tour"): Cut {
  const titles = days.map((d) => d.title);
  let lead = 0;
  let trail = 0;
  if (titles.length > 0 && ARRIVAL.test(plainDayTitle(titles[0]))) lead = 1;
  if (titles.length > lead && isPureDeparture(titles[titles.length - 1])) trail = 1;

  if (kind === "trek") {
    while (lead < titles.length - trail && (isCityStay(titles[lead]) || KTM_TO_PKR.test(plainDayTitle(titles[lead])))) lead++;
    while (
      titles.length - trail - 1 > lead &&
      (isCityStay(titles[titles.length - trail - 1]) || PKR_TO_KTM.test(plainDayTitle(titles[titles.length - trail - 1])))
    ) {
      trail++;
    }
  }

  const core = days.slice(lead, days.length - trail);
  const lastCore = core[core.length - 1];
  return {
    lead,
    trail,
    start: core.length ? startHub(core[0].title) : "Kathmandu",
    end: lastCore ? endPlace(lastCore, kind) : "Kathmandu",
    combinedDeparture: Boolean(lastCore && DEPARTURE.test(plainDayTitle(lastCore.title))),
  };
}

/** A complete package's trip leaves from Kathmandu unless the day says otherwise. */
export function startHub(title: string): Hub {
  const t = plainDayTitle(title);
  const from = t.match(/\bfrom (kathmandu|pokhara)\b/i) || t.match(/^(kathmandu|pokhara)\b/i);
  return from && /pokhara/i.test(from[1]) ? "Pokhara" : "Kathmandu";
}

function endPlace(day: DayRow, kind: "trek" | "tour"): string {
  const t = plainDayTitle(day.title);
  // "… to Jomsom, Tatopani, and Pokhara", "Free Day in Pokhara": the last hub
  // the day names, unless it is the one the day leaves from.
  const named = [...t.matchAll(/(\bfrom\s+)?\b(kathmandu|pokhara)\b/gi)].filter((m) => !m[1]).pop();
  if (named) return /pokhara/i.test(named[2]) ? "Pokhara" : "Kathmandu";
  // A tour can end its last full day somewhere else (a Nagarkot resort); a
  // trek's last day without a "to" ends back in Kathmandu with its flight.
  if (kind === "tour" && day.accommodation && !/kathmandu|pokhara|airport/i.test(day.accommodation)) {
    return day.accommodation.trim();
  }
  return "Kathmandu";
}

/* ------------------------------------------------------------------ */
/* Text                                                                */
/* ------------------------------------------------------------------ */

export function round5(value: number): number {
  return Math.round(value / 5) * 5;
}

export function priceDelta(days: number): number {
  return round5(PRICE_PER_DAY * days);
}

export function shiftTiers(tiers: TierRow[], delta: number): TierRow[] {
  return tiers.map((t) => ({ groupSize: t.groupSize, pricePerPerson: Math.max(5, round5(t.pricePerPerson + delta)) }));
}

/** "14-day", "14 days", "14 Days" -> the new number, in the same form. */
export function replaceDuration(text: string, from: number, to: number): { text: string; count: number } {
  let count = 0;
  const out = text.replace(new RegExp(`\\b${from}(\\s*-\\s*|\\s+)(day|days)\\b`, "gi"), (_, gap: string, unit: string) => {
    count++;
    return `${to}${gap}${unit}`;
  });
  return { text: out, count };
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** The first sentences of an overview, about `chars` long, as plain text. */
function opening(html: string, chars = 260): string {
  const sentences = stripTags(html).match(/[^.!?]+[.!?]+/g) ?? [];
  let out = "";
  for (const s of sentences) {
    if (out.length >= chars) break;
    out += s;
  }
  return out.trim();
}

/** "Pokhara Honeymoon Tour – 4 Days" -> "Pokhara Honeymoon Tour Package". */
export function completeName(name: string): string {
  const base = name.replace(TRAILING_DURATION, "").replace(/\s+from (Kathmandu|Pokhara)$/i, "").trim();
  return /\bpackage$/i.test(base) ? base : `${base} Package`;
}

function route(start: string, end: string): string {
  return `${start} to ${end}`;
}

function startsAndEnds(start: string, end: string): string {
  return start === end ? `starts and finishes in ${start}` : `starts in ${start} and finishes in ${end}`;
}

function onTheTrail(core: DayRow[], start: string, end: string, noun: "trek" | "tour"): string {
  const first = plainDayTitle(core[0]?.title ?? "");
  if (/lukla/i.test(first)) return "the return flights between Kathmandu and Lukla";
  if (/\bfl(y|ight)\b/i.test(first)) return "the domestic flights in and out";
  if (noun === "tour") return "transport between the stops";
  return start === end ? `transport from ${start} to the trailhead and back` : `transport from ${start} to the trailhead and on to ${end}`;
}

function cityExtras(start: string, end: string): { hotels: string; transfers: string } {
  const pokhara = start === "Pokhara" || end === "Pokhara";
  return {
    hotels: pokhara ? "hotel nights in Kathmandu and Pokhara" : "hotel nights in Kathmandu",
    transfers: pokhara ? ", and the journey between Kathmandu and Pokhara" : "",
  };
}

/* ------------------------------------------------------------------ */
/* Inclusions                                                          */
/* ------------------------------------------------------------------ */

const LI = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;

function editList(html: string, keep: (text: string) => string | null, append: string[]): string {
  let out = html.replace(LI, (whole, inner: string) => {
    const next = keep(stripTags(inner));
    if (next === null) return "";
    return next === stripTags(inner) ? whole : `<li>${escapeHtml(next)}</li>`;
  });
  if (append.length > 0) {
    const items = append.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
    out = /<\/ul>\s*$/i.test(out.trim()) ? out.replace(/<\/ul>(?![\s\S]*<\/ul>)/i, `${items}</ul>`) : `${out}<ul>${items}</ul>`;
  }
  return out.replace(/<ul>\s*<\/ul>/g, "");
}

const AIRPORT = /\bairport\b[^.]*\b(pick-?up|drop|transfer)|\b(pick-?up|drop-?off)\b[^.]*\bairport\b/i;
const DOMESTIC = /\b(domestic|lukla|nepalgunj|jomsom|simikot|juphal|jhupal|bhadrapur|tumlingtar|dhangadhi|phaplu|talcha)\b/i;
const CITY_HOTEL = /\b(accommodation|hotel|resort|lodge|nights?)\b[^.]*\b(in|at)\s+(kathmandu|pokhara)\b/i;
const KTM_PKR_TRANSPORT = /\b(kathmandu\b[^.]*\bpokhara|pokhara\b[^.]*\bkathmandu)\b/i;
const CITY_SIGHTSEEING = /\b(sightseeing|city tour|welcome dinner|farewell dinner|cultural (show|programme|program))\b/i;
const INTL = /\binternational flight|\bvisa\b/i;
const CITY_MEALS = /\b(lunch|dinner|meals)\b[^.]*\b(in|at)\s+(kathmandu|pokhara)\b/i;

const WORD_NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

/** "Three nights at a hotel in Kathmandu" minus one -> "Two nights …"; null when none are left. */
function fewerNights(text: string, by: number): string | null | undefined {
  const m = text.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+(nights?|night\(s\))\b/i);
  if (!m) return undefined;
  const n = /^\d+$/.test(m[1]) ? Number(m[1]) : WORD_NUMBERS.indexOf(m[1].toLowerCase());
  const left = n - by;
  if (left <= 0) return null;
  const word = /^\d+$/.test(m[1]) ? String(left) : WORD_NUMBERS[left];
  const cased = m[1][0] === m[1][0].toUpperCase() ? word[0].toUpperCase() + word.slice(1) : word;
  return text.replace(m[0], `${cased} ${left === 1 ? "night" : "nights"}`);
}

/** The complete package's lists, cut down to the city-to-city trip. */
export function cityInclusions(
  inclusions: string,
  exclusions: string,
  opts: { kind: "trek" | "tour"; completeDays: number; pokhara: boolean; droppedKathmanduPokhara: boolean }
) {
  const notes: string[] = [];
  let nightsAdjusted = false;
  const inc = editList(
    inclusions,
    (text) => {
      if (AIRPORT.test(text) && !DOMESTIC.test(text)) return null;
      if (opts.kind === "tour") {
        if (!nightsAdjusted && /kathmandu/i.test(text) && /\bnights?\b/i.test(text)) {
          const fewer = fewerNights(text, 1);
          if (fewer !== undefined) {
            nightsAdjusted = true;
            return fewer;
          }
        }
        return text;
      }
      if (CITY_HOTEL.test(text)) return null;
      if (opts.droppedKathmanduPokhara && KTM_PKR_TRANSPORT.test(text) && !/\btrailhead|\bjeep\b/i.test(text)) {
        if (/\b(to|and)\b[^.]*\b(tal|besisahar|chame|jagat|syabru|dhunche|barpak|machha|soti|arughat|dharapani|beni|nayapul|sikles)\b/i.test(text)) {
          notes.push(`kept, mixes the Kathmandu–Pokhara leg with trail transport: "${text}"`);
          return text;
        }
        return null;
      }
      if (CITY_SIGHTSEEING.test(text)) return null;
      return text;
    },
    []
  );
  let incOut = inc;
  if (opts.kind === "tour" && !nightsAdjusted) {
    // "Nine nights in hotels … along the route": the arrival night is one of them.
    incOut = editList(
      inc,
      (text) => {
        if (nightsAdjusted || !/\b(hotels?|guesthouses?|lodges?|resorts?)\b/i.test(text)) return text;
        const fewer = fewerNights(text, 1);
        if (fewer === undefined) return text;
        nightsAdjusted = true;
        return fewer;
      },
      []
    );
    if (!nightsAdjusted) {
      notes.push("no night count to reduce — check the hotel line in the inclusions: the arrival night is no longer part of this version");
    }
  }
  const exc = editList(
    exclusions,
    // A tour's meals in the cities are still the traveller's own; a trek's are outside the trip.
    (text) => (INTL.test(text) || (opts.kind === "trek" && CITY_MEALS.test(text)) ? null : text),
    [
      opts.kind === "trek"
        ? `Accommodation and meals in ${opts.pokhara ? "Kathmandu or Pokhara" : "Kathmandu"} unless mentioned in the itinerary.`
        : "Accommodation and meals before the first day and after the last day of the tour.",
      `Airport pickup and drop-off — both included in the ${opts.completeDays}-day complete package.`,
    ]
  );
  return { inclusions: incOut, exclusions: exc, notes };
}

/** A city-to-city trip's lists, grown to the complete package around it. */
export function completeInclusions(inclusions: string, exclusions: string, opts: { kind: "trek" | "tour"; pokhara: boolean; kathmanduNights: number }) {
  const nights = opts.kathmanduNights;
  const add = [
    "Airport pickup and drop-off services in Kathmandu.",
    `${WORD_NUMBERS[nights] ? WORD_NUMBERS[nights][0].toUpperCase() + WORD_NUMBERS[nights].slice(1) : nights} ${nights === 1 ? "night" : "nights"} in a Kathmandu hotel with breakfast, before and after the ${opts.kind}.`,
    ...(opts.pokhara
      ? ["Tourist bus transportation from Kathmandu to Pokhara and back to Kathmandu.", "Accommodation in Pokhara with breakfast."]
      : []),
  ];
  const inc = editList(inclusions, (text) => text, add);
  const exc = editList(
    exclusions,
    (text) =>
      /accommodation and meals in kathmandu( or pokhara)? unless|before the first day and after the last day/i.test(text) ? null : text,
    ["International flight tickets to and from Nepal.", "Nepal entry visa fees.", `Lunch and dinner in Kathmandu${opts.pokhara ? " and Pokhara" : ""}.`]
  );
  return { inclusions: inc, exclusions: exc };
}

/* ------------------------------------------------------------------ */
/* Days added around a city-to-city trip                               */
/* ------------------------------------------------------------------ */

function newDay(dayNumber: number, title: string, description: string, elevation: string, accommodation: string | null): DayRow {
  return { dayNumber, title, description: `<p>${description}</p>`, elevation, accommodation, placeDescription: null };
}

export function arrivalDay(name: string, noun: "trek" | "tour"): DayRow {
  return newDay(
    1,
    "Arrival in Kathmandu (1,400 m)",
    `You land at Tribhuvan International Airport in Kathmandu (1,400 m), where our representative meets you outside arrivals and drives you to your hotel — twenty to forty minutes, depending on traffic. Once you have checked in and rested, your guide meets you for a briefing on the ${escapeHtml(name)}: the days ahead, a check of your gear, and anything still worth buying or hiring in Thamel before the ${noun}. The evening is free; a first walk through the old bazaar between Thamel and Asan is the easiest way into the city.`,
    "1,400 m",
    "Kathmandu"
  );
}

export function driveToPokharaDay(dayNumber: number, noun: "trek" | "tour"): DayRow {
  return newDay(
    dayNumber,
    "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
    `After breakfast we take the tourist bus west along the Prithvi Highway to Pokhara (822 m), about 200 km and most of the day on the road. The highway drops out of the Kathmandu Valley and follows the Trishuli River through its gorge, past terraced hillsides and the roadside towns where the bus stops for lunch. You reach Pokhara in the late afternoon with time for a walk along Phewa Lake before dinner; the ${noun} begins tomorrow morning.`,
    "822 m",
    "Pokhara"
  );
}

export function driveToKathmanduDay(dayNumber: number, noun: "trek" | "tour"): DayRow {
  return newDay(
    dayNumber,
    "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
    `A slower morning after the ${noun}: if you are up at dawn, the Annapurna skyline over Phewa Lake is worth stepping outside for. We then take the tourist bus back along the Prithvi Highway to Kathmandu (1,400 m), arriving in the late afternoon, and the evening is yours — Thamel's restaurants are a short walk from the hotel.`,
    "1,400 m",
    "Kathmandu"
  );
}

export function departureDay(dayNumber: number): DayRow {
  return newDay(
    dayNumber,
    "Departure from Kathmandu (1,400 m)",
    "Your last day in Nepal. If your flight leaves in the afternoon or evening there is time for one more corner of the valley — Boudhanath Stupa, a vast white dome ringed by monasteries and prayer wheels, is the easiest half-day from Thamel. Our representative collects you from your hotel in good time for your international flight and drives you to Tribhuvan International Airport.",
    "1,400 m",
    null
  );
}

/* ------------------------------------------------------------------ */
/* Copy                                                                */
/* ------------------------------------------------------------------ */

type Ctx = {
  name: string;
  noun: "trek" | "tour";
  category: string;
  base: string;
  start: string;
  end: string;
  cityDays: number;
  completeDays: number;
  core: DayRow[];
};

const href = (ctx: Ctx, complete: boolean) => `/${ctx.category}/${ctx.base}${complete ? PACKAGE_SLUG_SUFFIX : ""}`;

/** What the city-to-city version leaves to the traveller. */
function leftOut(ctx: Ctx): string {
  const { hotels, transfers } = cityExtras(ctx.start, ctx.end);
  return ctx.noun === "trek"
    ? `airport pickup and drop-off and your ${hotels} before and after the trek${transfers}`
    : "airport pickup and drop-off and the hotel nights before the first day and after the last";
}

/** Opens the city-to-city overview: what this version is, and the other one. */
export function cityIntro(ctx: Ctx): string {
  const included =
    ctx.noun === "trek"
      ? `${onTheTrail(ctx.core, ctx.start, ctx.end, "trek")}, your licensed guide, the permits and the teahouse nights on the trail are included`
      : "the transport, accommodation and guided visits on the itinerary are included";
  return (
    `<p><strong>${escapeHtml(ctx.name)}, city to city: ${ctx.cityDays} days, ${route(ctx.start, ctx.end)}.</strong> ` +
    `This version of the ${ctx.noun} ${startsAndEnds(ctx.start, ctx.end)}: ${included}, while ${leftOut(ctx)} — which you may already have arranged — are not. ` +
    `Flying into Nepal and want those taken care of too? The <a href="${href(ctx, true)}">${ctx.completeDays}-day complete package</a> adds them, from arrival to departure.</p>`
  );
}

/** Opens the complete package's overview. */
export function completeIntro(ctx: Ctx, sourceOverview: string): string {
  const { hotels, transfers } = cityExtras(ctx.start, ctx.end);
  const summary = opening(sourceOverview);
  const tripName = escapeHtml(ctx.name.replace(/\s+Package$/i, ""));
  return (
    `<p><strong>The complete ${tripName} package covers the whole trip, from landing at Tribhuvan International Airport to your flight home: ${ctx.completeDays} days, ${ctx.cityDays} of them on the ${ctx.noun} itself.</strong> ` +
    `We meet you at the airport and arrange your ${hotels}${transfers}, then run the ${ctx.noun} with a licensed guide and every permit and booking made in advance — one booking and one point of contact from arrival to departure.</p>` +
    (summary ? `<p>${escapeHtml(summary)}</p>` : "") +
    `<p>Already in ${ctx.start}, or arranging your own hotel? The <a href="${href(ctx, false)}">${ctx.cityDays}-day city-to-city ${tripName}</a> is the same ${ctx.noun}, ${route(ctx.start, ctx.end)}, without the arrival, departure and hotel nights.</p>`
  );
}

/** A short note for a pair's complete package, whose own overview already describes it. */
export function completeNote(ctx: Ctx): string {
  return `<p><strong>Complete package: ${ctx.completeDays} days, arrival to departure.</strong> Airport pickup and drop-off, your ${cityExtras(ctx.start, ctx.end).hotels}${cityExtras(ctx.start, ctx.end).transfers} are included. Only want the ${ctx.noun}? The <a href="${href(ctx, false)}">${ctx.cityDays}-day city-to-city version</a> runs ${route(ctx.start, ctx.end)}.</p>`;
}

export function cityFaqs(ctx: Ctx): FaqRow[] {
  const baseName = ctx.name;
  return [
    {
      question: `Where does the city-to-city ${baseName} start and finish?`,
      answer: `It ${startsAndEnds(ctx.start, ctx.end)}. Day 1 is "${plainDayTitle(ctx.core[0]?.title ?? "")}" and the last of the ${ctx.cityDays} days is "${plainDayTitle(ctx.core[ctx.core.length - 1]?.title ?? "").replace(COMBINED_DEPARTURE, "")}".`,
    },
    {
      question: `What is not included in the city-to-city ${baseName}?`,
      answer: `${leftOut(ctx)[0].toUpperCase()}${leftOut(ctx).slice(1)}. Everything on the ${ctx.cityDays}-day itinerary itself is included as listed above.`,
    },
    {
      question: "Can I book the complete package instead?",
      answer: `Yes. The ${ctx.completeDays}-day ${completeName(baseName)} runs from your arrival in Kathmandu to your departure and adds ${leftOut(ctx)}. Both versions follow the same ${ctx.noun}.`,
    },
  ];
}

export function completeFaqs(ctx: Ctx, kathmanduNights: number): FaqRow[] {
  const { hotels, transfers } = cityExtras(ctx.start, ctx.end);
  const pokhara = ctx.start === "Pokhara" || ctx.end === "Pokhara";
  const cityName = ctx.name.replace(/\s+Package$/i, "");
  return [
    {
      question: `What does the complete ${cityName} package include?`,
      answer: `Everything from your arrival to your departure: airport pickup and drop-off, ${hotels}${transfers}, and the full ${ctx.cityDays}-day ${ctx.noun} with a licensed guide, permits and accommodation. The complete list is under Inclusions & Exclusions.`,
    },
    {
      question: "Is airport pickup included?",
      answer: "Yes. Our representative meets you outside arrivals at Tribhuvan International Airport on day 1 and drives you to your hotel, and on the last day drives you back to the airport for your flight home.",
    },
    {
      question: "How many hotel nights are included?",
      answer: `${kathmanduNights} ${kathmanduNights === 1 ? "night" : "nights"} in Kathmandu${pokhara ? " plus your night in Pokhara before the trek" : ""}, all with breakfast. The nights on the ${ctx.noun} itself are covered too, as the itinerary shows.`,
    },
    {
      question: "When should I arrive in Nepal?",
      answer: `Land in Kathmandu on day 1 of the itinerary. Send us your flight number and we will meet that flight, whatever time it lands; a late arrival simply moves the briefing to the next morning.`,
    },
    {
      question: "Can I add extra nights in Kathmandu?",
      answer: "Yes. Tell us when you book and we will add nights at the same hotel before or after the trip, or rearrange the days around your flights.",
    },
    {
      question: `Is there a version without hotels and airport transfers?`,
      answer: `Yes — the ${ctx.cityDays}-day city-to-city ${cityName} runs ${route(ctx.start, ctx.end)} on exactly the same ${ctx.noun}, for travellers who are already in Nepal or arranging their own hotel.`,
    },
  ];
}

type Section = { id: string; type?: string; data?: { heading?: string; content?: string } };

function parseSections(json: string | null): Section[] {
  try {
    const parsed = JSON.parse(json || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * The complete package's own sections. The long guide sections (best time,
 * packing, altitude, insurance…) stay on the city-to-city page only: the two
 * pages would otherwise repeat thousands of words, and Google indexes one page
 * of a near-duplicate pair. This page links to them instead.
 */
export function completeSections(ctx: Ctx, source: TrekRow): { sections: Section[]; order: string[] } {
  const sections = parseSections(source.customSections);
  const highlights = sections.find((s) => /highlights/i.test(s.data?.heading ?? ""));
  const guides = sections.find((s) => /guides\s*&\s*articles/i.test(s.data?.heading ?? ""));
  const guideHeadings = sections
    .filter((s) => s !== highlights && s !== guides && s.data?.heading)
    .map((s) => s.data!.heading!.trim());
  const { hotels } = cityExtras(ctx.start, ctx.end);
  const pokhara = ctx.start === "Pokhara" || ctx.end === "Pokhara";
  const cityName = escapeHtml(ctx.name.replace(/\s+Package$/i, ""));

  const covers: Section = {
    id: "custom-package-covers",
    type: "custom",
    data: {
      heading: "What the Complete Package Covers",
      content:
        `<p>Everything between your arrival and your departure is arranged before you land:</p><ul>` +
        `<li><strong>Airport transfers</strong> — pickup at Tribhuvan International Airport on day 1 and drop-off for your flight home on day ${ctx.completeDays}.</li>` +
        `<li><strong>Hotels</strong> — ${hotels} with breakfast, before and after the ${ctx.noun}.</li>` +
        (pokhara ? `<li><strong>Kathmandu–Pokhara transfers</strong> — the tourist bus to Pokhara and back, so the ${ctx.noun} starts the morning after you arrive there.</li>` : "") +
        `<li><strong>The ${ctx.noun}</strong> — ${ctx.cityDays} days, ${route(ctx.start, ctx.end)}, with ${onTheTrail(ctx.core, ctx.start, ctx.end, ctx.noun)}, a licensed guide and every permit arranged.</li>` +
        `</ul><p>Only the ${ctx.noun}? The <a href="${href(ctx, false)}">city-to-city ${cityName}</a> is the same ${ctx.cityDays} days without the arrival, departure and hotel nights.</p>`,
    },
  };
  const planning: Section | null =
    guideHeadings.length > 0
      ? {
          id: "custom-package-planning",
          type: "custom",
          data: {
            heading: `Planning the ${ctx.noun === "trek" ? "Trek" : "Tour"}`,
            content:
              `<p>The ${ctx.noun} itself is identical in both versions, so its planning guide lives on the <a href="${href(ctx, false)}">${cityName}</a> page:</p><ul>` +
              guideHeadings.map((h) => `<li>${escapeHtml(h)}</li>`).join("") +
              `</ul>`,
          },
        }
      : null;

  const out = [highlights, covers, planning, guides].filter(Boolean) as Section[];
  // Keep the saved order of the built-in sections; slot the new ones in after the overview.
  let order: string[];
  try {
    order = JSON.parse(source.sectionOrder || "[]");
  } catch {
    order = [];
  }
  const removed = new Set(sections.filter((s) => !out.includes(s)).map((s) => s.id));
  order = order.filter((id) => !removed.has(id) && id !== covers.id && id !== planning?.id);
  const anchor = highlights && order.includes(highlights.id) ? order.indexOf(highlights.id) + 1 : order.indexOf("overview") + 1;
  order.splice(Math.max(anchor, 0), 0, covers.id, ...(planning ? [planning.id] : []));
  return { sections: out, order };
}

/* ------------------------------------------------------------------ */
/* Meta descriptions                                                   */
/* ------------------------------------------------------------------ */

function fit(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const sentence = cut.lastIndexOf(". ");
  return sentence > max * 0.6 ? cut.slice(0, sentence + 1) : `${cut.replace(/\s+\S*$/, "").replace(/[,;:–—-]+$/, "")}…`;
}

export function completeDescription(ctx: Ctx): string {
  const pokhara = ctx.start === "Pokhara" || ctx.end === "Pokhara";
  const cityName = ctx.name.replace(/\s+Package$/i, "");
  return fit(
    `${cityName} complete package: ${ctx.completeDays} days from arrival in Kathmandu to departure, with airport transfers, hotels${pokhara ? ", the bus to Pokhara and back" : ""}, permits and a licensed guide.`
  );
}

export function cityDescription(source: string | null, ctx: Ctx, from: number): string {
  const fixed = source ? replaceDuration(source, from, ctx.cityDays).text : "";
  const tail = ` ${ctx.cityDays} days, ${route(ctx.start, ctx.end)}.`;
  if (fixed && (fixed + tail).length <= 160) return fixed + tail;
  return fit(fixed || `${ctx.name}: ${ctx.cityDays} days, ${route(ctx.start, ctx.end)}, with guide, permits and transport.`);
}

/* ------------------------------------------------------------------ */
/* Waypoints                                                           */
/* ------------------------------------------------------------------ */

/** Drops the map pins of removed days and renumbers the rest. */
export function shiftWaypoints(json: string | null, lead: number, keptDays: number): string | null {
  if (!json) return json;
  try {
    const points = JSON.parse(json);
    if (!Array.isArray(points)) return json;
    const out = points
      .map((p) => (typeof p?.dayNumber === "number" ? { ...p, dayNumber: p.dayNumber - lead } : p))
      .filter((p) => typeof p?.dayNumber !== "number" || (p.dayNumber >= 1 && p.dayNumber <= keptDays));
    return JSON.stringify(out);
  } catch {
    return json;
  }
}

function renumber(days: DayRow[], from = 1): DayRow[] {
  return days.map((d, i) => ({ ...d, dayNumber: from + i }));
}

function fixSections(json: string | null, from: number, to: number): { json: string | null; count: number } {
  if (!json) return { json, count: 0 };
  const sections = parseSections(json);
  let count = 0;
  for (const s of sections) {
    if (s.data?.content) {
      const r = replaceDuration(s.data.content, from, to);
      s.data.content = r.text;
      count += r.count;
    }
  }
  return { json: JSON.stringify(sections), count };
}

function fixSectionData(json: string | null, from: number, to: number): string | null {
  if (!json) return json;
  return replaceDuration(json, from, to).text;
}

/* ------------------------------------------------------------------ */
/* The plan                                                            */
/* ------------------------------------------------------------------ */

function nounOf(trek: TrekRow): "trek" | "tour" {
  return trek.category?.slug === "tours" ? "tour" : "trek";
}

function nameOf(trek: TrekRow): string {
  return trek.title.replace(TRAILING_DURATION, "").replace(/\s+from (Kathmandu|Pokhara)$/i, "").trim();
}

function metaTitleFor(trek: { title: string; slug: string; duration: number; maxAltitude: number | null; subtitle: string; category: { slug: string } | null }) {
  return packageTitle(trek);
}

function newComplete(source: TrekRow, ctx: Ctx, overrides: Partial<NewTrek> & { scalars: Record<string, unknown> }): NewTrek {
  const copied: Record<string, unknown> = {};
  for (const column of COPIED_COLUMNS) copied[column] = source[column];
  return {
    sourceId: source.id,
    slug: `${ctx.base}${PACKAGE_SLUG_SUFFIX}`,
    scalars: { ...copied, ...overrides.scalars },
    itinerary: overrides.itinerary ?? source.itinerary,
    pricingTiers: overrides.pricingTiers ?? source.pricingTiers,
    faqs: overrides.faqs ?? [],
    galleryImages: source.galleryImages.map((g) => ({ imageId: g.imageId, alt: g.alt, caption: g.caption })),
    availableDates: source.availableDates.map((d) => ({ startDate: d.startDate, seatsLeft: d.seatsLeft })),
  };
}

function kathmanduNightsOf(days: DayRow[], core: { from: number; to: number }): number {
  return days.filter((d, i) => (i < core.from || i >= core.to - 1) && /kathmandu/i.test(d.accommodation ?? "") && !/airport/i.test(d.accommodation ?? "")).length;
}

/** A complete package at the base slug becomes the city-to-city trip; a copy of it becomes the package. */
function planSplit(trek: TrekRow): Family | { skip: string } {
  const noun = nounOf(trek);
  const cut = cutPackageDays(trek.itinerary, noun);
  const core = trek.itinerary.slice(cut.lead, trek.itinerary.length - cut.trail);
  const dropped = cut.lead + cut.trail;
  if (dropped === 0) return { skip: "no arrival or departure days to separate" };
  if (core.length < 1) return { skip: "nothing left after removing the package days" };
  if (noun === "tour" && !["Kathmandu", "Pokhara"].includes(cut.end)) {
    return { skip: `the tour's last night is in ${cut.end}, not Kathmandu or Pokhara — decide where its city-to-city version ends` };
  }
  const base = trek.slug;
  const name = nameOf(trek);
  const delta = priceDelta(dropped);
  const ctx: Ctx = { name, noun, category: trek.category!.slug, base, start: cut.start, end: cut.end, cityDays: core.length, completeDays: trek.duration, core };
  const notes: string[] = [];

  const cityDays = renumber(core).map((d, i, all) =>
    i === all.length - 1 && cut.combinedDeparture ? { ...d, title: d.title.replace(COMBINED_DEPARTURE, "") } : d
  );
  if (cut.combinedDeparture) notes.push(`last day "${core[core.length - 1].title}" shortened to "${cityDays[cityDays.length - 1].title}"`);
  const droppedDays = [...trek.itinerary.slice(0, cut.lead), ...trek.itinerary.slice(trek.itinerary.length - cut.trail)];
  const lists = cityInclusions(trek.inclusions, trek.exclusions, {
    kind: noun,
    completeDays: trek.duration,
    pokhara: cut.start === "Pokhara" || cut.end === "Pokhara",
    droppedKathmanduPokhara: droppedDays.some((d) => KTM_TO_PKR.test(plainDayTitle(d.title)) || PKR_TO_KTM.test(plainDayTitle(d.title))),
  });
  notes.push(...lists.notes);

  const overviewFix = replaceDuration(trek.overview, trek.duration, core.length);
  const sectionFix = fixSections(trek.customSections, trek.duration, core.length);
  const faqFixes = trek.faqs.map((f) => ({
    question: replaceDuration(f.question, trek.duration, core.length).text,
    answer: replaceDuration(f.answer, trek.duration, core.length).text,
  }));
  const fixedMentions = overviewFix.count + sectionFix.count;
  if (fixedMentions > 0) notes.push(`${fixedMentions} mention(s) of "${trek.duration} days" changed to ${core.length}`);

  const subtitle = route(cut.start, cut.end);
  const cityTitle = replaceDuration(trek.title, trek.duration, core.length).text;
  const cityPatch: TrekPatch = {
    ...(cityTitle !== trek.title ? { title: cityTitle } : {}),
    subtitle,
    duration: core.length,
    price: Math.max(5, round5(trek.price - delta)),
    overview: cityIntro(ctx) + overviewFix.text,
    inclusions: lists.inclusions,
    exclusions: lists.exclusions,
    metaTitle: metaTitleFor({ ...trek, title: cityTitle, subtitle, duration: core.length }),
    metaDescription: cityDescription(trek.metaDescription, ctx, trek.duration),
    waypoints: shiftWaypoints(trek.waypoints, cut.lead, core.length),
    customSections: sectionFix.json ?? undefined,
    sectionData: fixSectionData(trek.sectionData, trek.duration, core.length),
    itinerary: cityDays,
    pricingTiers: shiftTiers(trek.pricingTiers, -delta),
    faqs: [...cityFaqs(ctx), ...faqFixes],
  };

  const pkgName = completeName(name);
  const pkgCtx = { ...ctx, name: pkgName };
  const { sections, order } = completeSections(pkgCtx, trek);
  const create = newComplete(trek, ctx, {
    scalars: {
      title: pkgName,
      subtitle: COMPLETE_PACKAGE_SUBTITLE,
      duration: trek.duration,
      price: trek.price,
      overview: completeIntro(pkgCtx, trek.overview),
      inclusions: trek.inclusions,
      exclusions: trek.exclusions,
      metaTitle: metaTitleFor({ ...trek, title: pkgName, slug: `${base}${PACKAGE_SLUG_SUFFIX}`, subtitle: COMPLETE_PACKAGE_SUBTITLE }),
      metaDescription: completeDescription(pkgCtx),
      waypoints: trek.waypoints,
      customSections: JSON.stringify(sections),
      sectionOrder: JSON.stringify(order),
      status: "published",
    },
    faqs: completeFaqs(pkgCtx, kathmanduNightsOf(trek.itinerary, { from: cut.lead, to: trek.itinerary.length - cut.trail })),
  });

  return {
    shape: "split",
    base,
    category: ctx.category,
    name,
    start: cut.start,
    end: cut.end,
    cityDays: core.length,
    completeDays: trek.duration,
    daysApart: dropped,
    priceDelta: delta,
    city: { id: trek.id, before: trek, patch: cityPatch },
    complete: { create },
    redirects: [],
    linkRules: [{ from: `/${ctx.category}/${base}`, to: `/${ctx.category}/${base}${PACKAGE_SLUG_SUFFIX}`, when: "complete-anchor", completeDays: trek.duration }],
    notes,
  };
}

/** Both records exist: slugs move into the convention, the old city-to-city URL redirects. */
function planPair(complete: TrekRow, city: TrekRow): Family {
  const noun = nounOf(complete);
  const base = complete.slug;
  const name = nameOf(complete);
  const cut = cutPackageDays(complete.itinerary, noun);
  const start = startHub(city.itinerary[0]?.title ?? "");
  const end = city.itinerary.length ? endPlace(city.itinerary[city.itinerary.length - 1], noun) : "Kathmandu";
  const ctx: Ctx = { name, noun, category: complete.category!.slug, base, start, end, cityDays: city.duration, completeDays: complete.duration, core: city.itinerary };
  const pkgName = completeName(name);
  const pkgSlug = `${base}${PACKAGE_SLUG_SUFFIX}`;
  const subtitle = route(start, end);

  return {
    shape: "pair",
    base,
    category: ctx.category,
    name,
    start,
    end,
    cityDays: city.duration,
    completeDays: complete.duration,
    daysApart: complete.duration - city.duration,
    priceDelta: complete.price - city.price,
    city: {
      id: city.id,
      before: city,
      patch: {
        slug: base,
        title: name,
        subtitle,
        overview: cityIntro(ctx) + city.overview,
        metaTitle: metaTitleFor({ ...city, title: name, slug: base, subtitle }),
        metaDescription: cityDescription(city.metaDescription, ctx, city.duration),
        faqs: [...cityFaqs(ctx), ...city.faqs],
      },
    },
    complete: {
      id: complete.id,
      before: complete,
      patch: {
        slug: pkgSlug,
        title: pkgName,
        subtitle: COMPLETE_PACKAGE_SUBTITLE,
        overview: completeNote({ ...ctx, name: pkgName }) + complete.overview,
        metaTitle: metaTitleFor({ ...complete, title: pkgName, slug: pkgSlug, subtitle: COMPLETE_PACKAGE_SUBTITLE }),
        metaDescription: completeDescription({ ...ctx, name: pkgName }),
        faqs: [...completeFaqs({ ...ctx, name: pkgName }, kathmanduNightsOf(complete.itinerary, { from: cut.lead, to: complete.itinerary.length - cut.trail })).slice(1, 3), ...complete.faqs],
      },
    },
    redirects: [{ from: `/${ctx.category}/${city.slug}`, to: `/${ctx.category}/${base}` }],
    linkRules: [
      { from: `/${ctx.category}/${base}`, to: `/${ctx.category}/${pkgSlug}`, when: "complete-anchor", completeDays: complete.duration },
      { from: `/${ctx.category}/${city.slug}`, to: `/${ctx.category}/${base}`, when: "always" },
    ],
    idRemap: { from: complete.id, to: city.id },
    notes: [],
  };
}

/** Only the city-to-city trip exists: a complete package is built around it. */
function planAddComplete(trek: TrekRow): Family | { skip: string } {
  const noun = nounOf(trek);
  const days = trek.itinerary;
  if (days.length === 0) return { skip: "no itinerary" };
  const start = startHub(days[0].title);
  const end = endPlace(days[days.length - 1], noun);
  if (!["Kathmandu", "Pokhara"].includes(end)) return { skip: `ends in ${end} — decide how the complete package gets back to Kathmandu` };
  const lastTitle = plainDayTitle(days[days.length - 1].title);
  if (/\b(or)\b/i.test(lastTitle)) return { skip: `the last day ("${days[days.length - 1].title}") has two possible endings` };
  if (DEPARTURE.test(lastTitle) || /\bonward\b/i.test(lastTitle)) return { skip: `the last day ("${days[days.length - 1].title}") already ends with a departure` };

  const base = trek.slug;
  const name = nameOf(trek);
  const before: DayRow[] = [arrivalDay(name, noun), ...(start === "Pokhara" ? [driveToPokharaDay(2, noun)] : [])];
  const after: DayRow[] = end === "Pokhara" ? [driveToKathmanduDay(0, noun)] : [];
  const itinerary = renumber([...before, ...days, ...after, departureDay(0)]);
  const added = itinerary.length - days.length;
  const delta = priceDelta(added);
  const ctx: Ctx = { name, noun, category: trek.category!.slug, base, start, end, cityDays: days.length, completeDays: itinerary.length, core: days };
  const pkgName = completeName(name);
  const pkgCtx = { ...ctx, name: pkgName };
  const pokhara = start === "Pokhara" || end === "Pokhara";
  // The arrival night, and the night back in Kathmandu before departure.
  const kathmanduNights = 2;
  const lists = completeInclusions(trek.inclusions, trek.exclusions, { kind: noun, pokhara, kathmanduNights });
  const { sections, order } = completeSections(pkgCtx, trek);
  const subtitle = route(start, end);

  const create = newComplete(trek, ctx, {
    scalars: {
      title: pkgName,
      subtitle: COMPLETE_PACKAGE_SUBTITLE,
      duration: itinerary.length,
      price: round5(trek.price + delta),
      overview: completeIntro(pkgCtx, trek.overview),
      inclusions: lists.inclusions,
      exclusions: lists.exclusions,
      metaTitle: metaTitleFor({ ...trek, title: pkgName, slug: `${base}${PACKAGE_SLUG_SUFFIX}`, duration: itinerary.length, subtitle: COMPLETE_PACKAGE_SUBTITLE }),
      metaDescription: completeDescription(pkgCtx),
      waypoints: shiftWaypoints(trek.waypoints, -before.length, Number.MAX_SAFE_INTEGER),
      customSections: JSON.stringify(sections),
      sectionOrder: JSON.stringify(order),
      sectionData: fixSectionData(trek.sectionData, days.length, itinerary.length),
      status: "published",
    },
    itinerary,
    pricingTiers: shiftTiers(trek.pricingTiers, delta),
    faqs: completeFaqs(pkgCtx, kathmanduNights),
  });

  return {
    shape: "add-complete",
    base,
    category: ctx.category,
    name,
    start,
    end,
    cityDays: days.length,
    completeDays: itinerary.length,
    daysApart: added,
    priceDelta: delta,
    city: {
      id: trek.id,
      before: trek,
      patch: {
        subtitle,
        overview: cityIntro(ctx) + trek.overview,
        metaTitle: metaTitleFor({ ...trek, subtitle }),
        faqs: [...cityFaqs(ctx), ...trek.faqs],
      },
    },
    complete: { create },
    redirects: [],
    linkRules: [],
    notes: [`${added} day(s) added: ${[...before, ...after].map((d) => plainDayTitle(d.title)).join(", ")}, departure`],
  };
}

/** Climbing and activities stay single products; they only gain their label. */
function labelFor(trek: TrekRow): string | null {
  if (trek.category?.slug === "climbing") {
    const days = trek.itinerary;
    const arrives = days.length > 0 && ARRIVAL.test(plainDayTitle(days[0].title));
    return arrives ? COMPLETE_PACKAGE_SUBTITLE : null;
  }
  const first = plainDayTitle(trek.itinerary[0]?.title ?? "");
  const startMatch = first.match(/\bfrom (kathmandu|pokhara)\b/i) || first.match(/^(kathmandu|pokhara)\b/i);
  if (!startMatch) return null;
  const start = /pokhara/i.test(startMatch[1]) ? "Pokhara" : "Kathmandu";
  const last = plainDayTitle(trek.itinerary[trek.itinerary.length - 1]?.title ?? "");
  const endMatch = [...last.matchAll(/\bto (kathmandu|pokhara)\b/gi)].pop();
  const end = endMatch ? (/pokhara/i.test(endMatch[1]) ? "Pokhara" : "Kathmandu") : start;
  return route(start, end);
}

export function planVariants(treks: TrekRow[]): Plan {
  const bySlug = new Map(treks.map((t) => [t.slug, t]));
  const families: Family[] = [];
  const labels: Plan["labels"] = [];
  const skipped: Plan["skipped"] = [];
  const inPair = new Set(EXISTING_PAIRS.flat());

  for (const [completeSlug, citySlug] of EXISTING_PAIRS) {
    const complete = bySlug.get(completeSlug);
    const city = bySlug.get(citySlug);
    if (!complete || !city) {
      // Already applied (the slugs have moved) or retired.
      skipped.push({ slug: completeSlug, reason: "pair not found under its old slugs — already applied?" });
      continue;
    }
    families.push(planPair(complete, city));
  }

  for (const trek of treks) {
    if (trek.status !== "published" || inPair.has(trek.slug)) continue;
    const category = trek.category?.slug;
    if (trek.slug.endsWith(PACKAGE_SLUG_SUFFIX) || bySlug.has(`${trek.slug}${PACKAGE_SLUG_SUFFIX}`)) {
      skipped.push({ slug: trek.slug, reason: "already has its complete package" });
      continue;
    }
    const multiDayTour = category === "tours" && trek.duration >= 3;
    if (category === "treks" || multiDayTour) {
      const first = trek.itinerary[0]?.title ?? "";
      const result = ARRIVAL.test(plainDayTitle(first)) ? planSplit(trek) : planAddComplete(trek);
      if ("skip" in result) skipped.push({ slug: trek.slug, reason: result.skip });
      else families.push(result);
      continue;
    }
    const label = labelFor(trek);
    if (label && label !== trek.subtitle) labels.push({ id: trek.id, slug: trek.slug, subtitle: label });
  }

  return { families, labels, skipped };
}

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

/**
 * Repoints links in HTML (`<a href="…">`) and in the blog sources'
 * `[[trek:slug|text]]` markup. A link to the base URL moves to the complete
 * package only when its words describe the complete package ("14-day …",
 * "… package"); otherwise it keeps pointing at the base URL, which is the
 * trip itself.
 */
export function rewriteLinks(text: string, rules: LinkRule[]): { text: string; count: number } {
  let count = 0;
  const describesComplete = (anchor: string, rule: LinkRule) =>
    /\bpackage\b/i.test(anchor) || (rule.completeDays !== undefined && new RegExp(`\\b${rule.completeDays}(\\s*-\\s*|\\s+)days?\\b`, "i").test(stripTags(anchor)));
  const target = (path: string, anchor: string): string | null => {
    for (const rule of rules) {
      if (rule.from !== path) continue;
      if (rule.when === "always" || describesComplete(anchor, rule)) return rule.to;
    }
    return null;
  };

  let out = text.replace(/<a\b([^>]*?)href="([^"#?]+)([^"]*)"([^>]*)>([\s\S]*?)<\/a>/gi, (whole, pre: string, path: string, rest: string, post: string, anchor: string) => {
    const to = target(path, anchor);
    if (!to) return whole;
    count++;
    return `<a${pre}href="${to}${rest}"${post}>${anchor}</a>`;
  });
  out = out.replace(/\[\[trek:([a-z0-9-]+)\|([^\]]*)\]\]/g, (whole, slug: string, anchor: string) => {
    for (const category of ["treks", "tours"]) {
      const to = target(`/${category}/${slug}`, anchor);
      if (to) {
        count++;
        return `[[trek:${to.split("/").pop()}|${anchor}]]`;
      }
    }
    return whole;
  });
  return { text: out, count };
}
