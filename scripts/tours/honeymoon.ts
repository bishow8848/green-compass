/**
 * Region: Honeymoon Tour.
 *
 * Four private tours for couples, from a four-day Pokhara stay to a nine-day
 * luxury circuit. They cover ground the sightseeing packages already cover —
 * Kathmandu, Pokhara, Chitwan — and differ in what surrounds it: better
 * hotels with a double bed guaranteed, flights instead of the long drives,
 * late starts, free afternoons, and a few arranged moments (a decorated room,
 * a private dinner by the lake, a boat with nobody else in it).
 *
 * The price follows the same group-size table as every other tour. A couple
 * travelling alone pays the two-to-four rate, and the copy points at the table
 * rather than quoting a figure that would drift if the price is edited later.
 */
import {
  AIRPORT,
  AIRPORT_PLACE,
  BHAKTAPUR,
  CHITWAN,
  KATHMANDU,
  KTM_PLACE,
  KTM_RETURN_PLACE,
  PATAN,
  PKR_PLACE,
  POKHARA,
  SARANGKOT,
  p,
  type Tour,
  type TourAddon,
  type TourDay,
} from "./types";

const REGION = "Honeymoon Tour";

const BEGNAS = { lng: 84.0970, lat: 28.1740 };

const CHITWAN_PLACE = "Nepal's first national park, on the subtropical plains of the Terai.";

/** Arrival day, shared by the three tours that begin with an international arrival. */
const arrival = (extra: string): TourDay => ({
  title: "Arrival in Kathmandu (1,400 m)",
  elevation: "1,400 m",
  accommodation: "Kathmandu",
  placeDescription: KTM_PLACE,
  ...KATHMANDU,
  html: p(
    "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you outside the arrivals hall with marigold garlands and a private car to your hotel.",
    extra,
    "The evening is left free on purpose. After a long flight and, usually, a long wedding, the best first night in Nepal is a quiet dinner and an early bed. Overnight in Kathmandu.",
  ),
});

/** Departure day, shared by the three tours that end with an international departure. */
const departure = (extra: string): TourDay => ({
  title: "Departure from Nepal",
  elevation: "1,400 m",
  accommodation: "Kathmandu Airport",
  placeDescription: AIRPORT_PLACE,
  ...AIRPORT,
  html: p(
    extra,
    "We collect you from your hotel three hours before your flight and drive you to <strong>Tribhuvan International Airport</strong>, where our representative sees you through to the check-in counters.",
    "If your flight leaves late in the day we can hold the room or store your bags, so the last hours are spent in the city rather than in the terminal — just let your guide know the evening before.",
  ),
});

// ── Detail sections ──
// The four tours share their practical ground, so the sections are written once
// and tuned for the two hotel standards the region is sold at.
const sections = (tier: "standard" | "luxury") => [
  {
    heading: "Best Time for a Honeymoon in Nepal",
    content:
      "<p><strong>October to early December</strong> is the finest time of year: warm days, cool nights, clear mountain views from Pokhara and the festivals of Dashain and Tihar. <strong>February to April</strong> is the second season, warmer and greener, with rhododendron in flower on the hills and long evenings beside the lake.</p><p>December and January are clear and quiet but cold after dark, which suits couples who like a fire and an empty viewpoint. The monsoon from June to September brings afternoon rain and cloud over the mountains — hotel rates are at their lowest and the country is lush, but if the Himalayan sunrise matters to you, choose another month. Nepal's own wedding season fills the better hotels in late November, early December and February, so those weeks should be booked early.</p>",
  },
  {
    heading: "Hotels and Honeymoon Touches",
    content:
      tier === "standard"
        ? "<p>Hotels are <strong>four-star</strong> properties chosen for position and quiet rather than size, with a <strong>double bed guaranteed</strong> — worth stating, because twin rooms are the default in Nepal — and a lake or mountain view in Pokhara wherever one is available. On your first night the room is dressed with flowers and there is a cake waiting.</p><p>One evening in Pokhara is a <strong>private candle-lit dinner</strong> for the two of you beside the lake, and the boat on Phewa Lake is yours alone, with a boatman to row it. Upgrades to five-star hotels and boutique resorts are available on every night of the tour and are quoted at booking, so the price you agree is the price you pay.</p>"
        : "<p>Every night is in a <strong>five-star hotel or luxury resort</strong>: a heritage property in Kathmandu, a resort with mountain views in Pokhara and a premium lodge on the edge of the national park in Chitwan. The exact hotels are named in your confirmation, since the best rooms are limited and we would rather tell you what is actually held than list a brochure. A <strong>double bed is guaranteed</strong> throughout.</p><p>The room is dressed with flowers and a cake on your first night. In Pokhara there is a <strong>couple's spa treatment</strong>, a private boat at sunset and a <strong>candle-lit dinner</strong> for the two of you, and the tour closes with a farewell dinner in Kathmandu. Road travel is by luxury vehicle with a senior driver.</p>",
  },
  {
    heading: "Privacy, Pace and Your Guide",
    content:
      "<p>This is a <strong>private tour</strong> for the two of you. There are no other guests in the vehicle, at the table or in the boat, and nothing runs to a group timetable. Your guide is with you for the sightseeing — the monuments need explaining and the logistics need handling — and steps back the rest of the time, so evenings, meals and free afternoons are your own.</p><p>The pace is unhurried. " +
      (tier === "standard"
        ? "There is one early start, for sunrise over the Annapurnas from Sarangkot, and it is worth it"
        : "There are two early starts, for the Everest mountain flight and for sunrise over the Annapurnas from Sarangkot, and both are worth it") +
      "; otherwise days begin after a proper breakfast and finish in time for the afternoon to be yours. If you would rather skip a temple and stay by the lake, say so — the itinerary is a suggestion from people who know the country, not a contract.</p>",
  },
  {
    heading: "Practical Notes for Couples",
    content:
      "<p>Nepal is warm and welcoming toward couples and also conservative about public affection: holding hands is fine everywhere, while kissing in public draws stares, particularly around temples. Dress with shoulders and knees covered at religious sites, and bring shoes that slip off easily for temple thresholds.</p><p>Visas are issued on arrival at Kathmandu airport — bring US dollars in cash and a passport photograph each. ATMs are plentiful in Kathmandu and Pokhara. Tell us your wedding date, any dietary requirements and whether either of you would rather avoid heights, water or early mornings, and we will shape the days around it. Tipping guides and drivers is customary and entirely at your discretion.</p>",
  },
];

// ── FAQs ──
// Six questions that apply to every honeymoon tour; each tour adds two of its own.
const COMMON_FAQS = [
  { question: "Do we have to be newly married to book?", answer: "No. The tour is booked just as often for anniversaries, proposals and couples who simply want a trip together, and nobody will ask for a marriage certificate. Tell us what the occasion is and the flowers, cake and dinner are arranged around it." },
  { question: "How much does the tour cost for two people?", answer: "The pricing table lists the rate per person by party size. A couple travelling alone pays the two-to-four rate, each, sharing one double room. If friends or family travel with you the per-person rate falls, and each couple still has a private room." },
  { question: "Can one of us arrange a surprise for the other?", answer: "Yes, and it happens often. Write to us from a private email address and say so — a bouquet, a particular table for the dinner, a photographer for an hour, a room upgrade or a proposal at sunrise. We keep it out of the shared correspondence and your guide is briefed quietly." },
  { question: "How physically demanding is the tour?", answer: "Hardly at all. Travel is by car and aircraft, and the walking is limited to temple courtyards, lakeside paths and a few flights of steps at the viewpoints. Anyone comfortable on an ordinary city day out will manage everything in the itinerary." },
  { question: "How far ahead should we book?", answer: "Two to three months is comfortable for most of the year. For October, November, March and April — and for Nepal's wedding weeks, when local couples take the best rooms — four months or more gives a real choice of hotels. Later bookings are usually possible; the room category is what suffers." },
  { question: "Can we add a short trek or extra days?", answer: "Easily. The usual additions are two or three days walking to Ghandruk or Poon Hill from Pokhara, an extra night by the lake, or a night at Nagarkot on the Kathmandu valley rim. Because the tour is private, days can be added or removed before the bookings are made." },
];

const UPGRADE_FAQ = {
  question: "Can the hotels be upgraded?",
  answer: "Yes, on any or all nights. The standard is four-star; five-star hotels, heritage properties and hillside resorts are available in Kathmandu and Pokhara. The supplement is quoted when you book and confirmed in writing, and we will tell you plainly where an upgrade is worth the money and where it is not.",
};

// ── Add-ons priced to match the stand-alone products in the catalogue ──
const PARAGLIDING: TourAddon = {
  title: "Tandem Paragliding from Sarangkot",
  description: "A tandem paragliding flight from Sarangkot on one of the Pokhara mornings, landing beside Phewa Lake. Each of you flies with your own pilot.",
  unit: "person",
  pricePerUnit: 95,
};
const MOUNTAIN_FLIGHT: TourAddon = {
  title: "Everest Mountain Flight",
  description: "An hour along the Himalayan wall in a fixed-wing aircraft from Kathmandu at dawn, with a window seat guaranteed for each of you.",
  unit: "person",
  pricePerUnit: 220,
};
const EBC_HELICOPTER: TourAddon = {
  title: "Everest Base Camp Helicopter Tour",
  description: "A morning by helicopter from Kathmandu to Kala Patthar (5,545 m), with breakfast on the terrace of the Everest View Hotel facing Everest. Added as an extra day in Kathmandu.",
  unit: "person",
  pricePerUnit: 1350,
};

const honeymoonExclusions = {
  meals: "Lunches, and dinners other than those listed above.",
  extra: ["Spa treatments, paragliding and other optional activities unless listed above.", "Alcoholic drinks."],
};

// ─────────────────────────────────────────────────────────────────────────────
// Pokhara Honeymoon Tour — 4 days
// ─────────────────────────────────────────────────────────────────────────────
export const pokharaHoneymoonTour: Tour = {
  region: REGION,
  price: 520,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [84.0, 28.21],
  zoom: 10.8,
  content: {
    slug: "pokhara-honeymoon-tour",
    title: "Pokhara Honeymoon Tour – 4 Days",
    overview:
      "<p>The <strong>Pokhara Honeymoon Tour</strong> is three nights beside <strong>Phewa Lake</strong> with the Annapurna range above it — the most romantic setting in Nepal, and reached from Kathmandu by a flight of twenty-five minutes. It is a short, complete break: a private boat at sunset, sunrise over the Himalaya from <strong>Sarangkot</strong>, a candle-lit dinner at the water's edge, and a good deal of time with nothing arranged at all.</p><p>It suits couples who have a few days rather than a fortnight, or who want to add a honeymoon to a visit to Nepal that is already planned. The tour begins and ends in Kathmandu with flights in both directions, so no day is lost to the road, and everything in Pokhara is private — the car, the boat, the guide and the table.</p>",
    highlights: [
      ["Three Nights by Phewa Lake", "A four-star lakeside hotel with a double room facing the water or the mountains."],
      ["A Private Boat at Sunset", "The two of you and a boatman, out to the island temple as the light goes."],
      ["Sarangkot Sunrise", "Dhaulagiri, Annapurna South and Machhapuchhre turning gold above the lake."],
      ["Candle-lit Dinner for Two", "A private table at the water's edge on your second evening."],
      ["Flights Both Ways", "Twenty-five minutes from Kathmandu each way, instead of a day on the road."],
    ],
    sections: sections("standard"),
    faqs: [
      { question: "Does the tour start in Kathmandu or in Pokhara?", answer: "In Kathmandu, with a private transfer from your hotel or the international terminal to the domestic flight. If you are already in Pokhara, or are arriving there overland, tell us and we will take the flights out of the price and begin at your hotel instead." },
      ...COMMON_FAQS,
      UPGRADE_FAQ,
    ],
    inclusions: {
      flights: ["Kathmandu – Pokhara – Kathmandu domestic flights."],
      transport: ["Private transfers to and from the domestic airport in Kathmandu, and a private car with driver for everything in Pokhara."],
      accommodation: ["Three nights at a 4-star lakeside hotel in Pokhara in a double room, with breakfast."],
      meals: ["One private candle-lit dinner for two beside Phewa Lake."],
      entrance: "Entry fees at Sarangkot and Begnas Lake.",
      guide: "Government-licensed English-speaking guide for the sightseeing in Pokhara.",
      extra: [
        "Honeymoon welcome on the first night: a flower-decorated room and a cake.",
        "Private rowing boats with a boatman on Phewa Lake and Begnas Lake.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: honeymoonExclusions.meals,
      extra: ["Accommodation in Kathmandu before and after the tour.", ...honeymoonExclusions.extra],
    },
    addons: [PARAGLIDING],
    fixedDepartureDay: "friday",
    itineraryDescription: "Four days from Kathmandu to Pokhara and back by air, with three nights beside Phewa Lake, a Sarangkot sunrise and a private dinner at the water's edge.",
    inExDescription: "Return Kathmandu–Pokhara flights, private transfers and car, three nights at a four-star lakeside hotel with breakfast, a candle-lit dinner, private boats, entry fees and a licensed guide are included, while Kathmandu accommodation, insurance, other meals, optional activities, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Pokhara Honeymoon Tour – 4 Days by Phewa Lake",
      description: "A four-day Pokhara honeymoon tour from Kathmandu with flights, three nights by Phewa Lake, a private sunset boat, Sarangkot sunrise and a candle-lit dinner for two.",
      keywords: "Pokhara honeymoon tour, Pokhara honeymoon package, Nepal honeymoon package, Phewa Lake honeymoon, romantic Pokhara tour, Sarangkot sunrise",
      tags: "Honeymoon Tour, Pokhara, Romantic Tour, Phewa Lake, Couples",
    },
  },
  days: [
    {
      title: "Fly to Pokhara (822 m) and sunset on Phewa Lake",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A private car takes you to the domestic terminal in Kathmandu for the morning flight to <strong>Pokhara (822 m)</strong>, twenty-five minutes west. Sit on the right-hand side: the Himalaya runs alongside the aircraft the whole way.",
        "Your guide meets you on arrival and drives you to the hotel beside <strong>Phewa Lake</strong>, where the room has been dressed with flowers and there is a cake waiting. The middle of the day is yours to settle in, walk the lakeside or do nothing at all.",
        "Late in the afternoon a boatman rows the two of you out across the lake to the island temple of <strong>Tal Barahi</strong> and on along the forested far shore as the sun goes down behind the hills. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise, the World Peace Pagoda and a candle-lit dinner",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "The one early start of the tour. A half-hour drive in the dark reaches <strong>Sarangkot (1,592 m)</strong> in time to watch the first light touch <strong>Dhaulagiri</strong> and move east along Annapurna South to the fishtail of <strong>Machhapuchhre</strong>, with the lake and the town under mist below.",
        "After a late breakfast at the hotel and a slow morning, the afternoon goes to the <strong>World Peace Pagoda</strong>, the white stupa on the ridge across the lake. You can drive to within ten minutes of the top, or cross by boat and walk up through the forest; either way the view is of the whole Annapurna range above the water.",
        "The evening is the centre of the tour: a <strong>private candle-lit dinner</strong> for two at the water's edge, with nobody at the next table. Overnight in Pokhara.",
      ),
    },
    {
      title: "Begnas Lake and a free afternoon in Pokhara",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...BEGNAS,
      html: p(
        "A day with almost nothing in it. After breakfast the car drives forty minutes east to <strong>Begnas Lake</strong>, smaller and far quieter than Phewa, ringed by forest and terraced hills with the Annapurnas reflected in it on a still morning. A boatman rows you out, and there is no one else on the water.",
        "You are back in Pokhara for lunch, and the afternoon is free. Couples who want to do something choose <strong>tandem paragliding</strong> from Sarangkot or a spa treatment, both of which we can book; couples who do not choose a table by the lake.",
        "Lakeside in the evening is an easy place to walk — cafés, bookshops, live music — and your guide will suggest somewhere for dinner. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A last breakfast above the lake. If the morning is clear and still, the walk along the shore before the breeze starts gives Machhapuchhre reflected in the water, and is worth setting an alarm for.",
        "The car takes you to the airport for the flight back to <strong>Kathmandu (1,400 m)</strong>, with the mountains on the left-hand side this time. Should the weather ground the flight, we drive you back by private vehicle at no extra cost, which takes six to seven hours.",
        "On arrival a private transfer takes you to your Kathmandu hotel or directly to the international terminal for your onward flight, and the tour ends there.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Kathmandu & Pokhara Honeymoon Tour — 6 days
// ─────────────────────────────────────────────────────────────────────────────
export const kathmanduPokharaHoneymoonTour: Tour = {
  region: REGION,
  price: 745,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [84.65, 27.95],
  zoom: 8.4,
  content: {
    slug: "kathmandu-pokhara-honeymoon-tour",
    title: "Kathmandu & Pokhara Honeymoon Tour",
    overview:
      "<p>The <strong>Kathmandu and Pokhara Honeymoon Tour</strong> is six days in Nepal's two most rewarding cities, arranged for a couple rather than a coach party. <strong>Kathmandu</strong> gives the old world — hilltop stupas, royal squares, a walled garden for the afternoon — and <strong>Pokhara</strong> gives the lake and the mountains, with a private boat at sunset, sunrise over the Annapurnas and a candle-lit dinner by the water.</p><p>The two are linked by a twenty-five-minute flight in each direction, so the days that a standard tour spends on the highway are spent by the lake instead. Hotels are four-star with a double bed guaranteed, the guide and the car are yours alone, and the afternoons are left open more often than not.</p>",
    highlights: [
      ["Two Cities, No Long Drives", "Kathmandu and Pokhara linked by a twenty-five-minute flight in each direction."],
      ["A Private Boat on Phewa Lake", "Out to the island temple at sunset, with nobody else aboard."],
      ["Sarangkot Sunrise", "The Annapurna range turning gold above the lake at first light."],
      ["Candle-lit Dinner by the Water", "A private table for two on your second evening in Pokhara."],
      ["Garden of Dreams and Bhaktapur", "A walled garden in Kathmandu and a medieval city at golden hour."],
    ],
    sections: sections("standard"),
    faqs: [
      { question: "How do we travel between Kathmandu and Pokhara?", answer: "By air, both ways, and the flights are included. The flight takes twenty-five minutes against six to seven hours by road. If weather cancels a flight we drive you in a private vehicle at no extra cost; if you would actually prefer the scenic drive in one direction, tell us and the price is adjusted." },
      ...COMMON_FAQS,
      UPGRADE_FAQ,
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Kathmandu – Pokhara – Kathmandu domestic flights."],
      transport: ["Private air-conditioned car with driver for all sightseeing and transfers in Kathmandu and Pokhara."],
      accommodation: ["Three nights in Kathmandu and two in Pokhara at 4-star hotels in a double room, with breakfast."],
      meals: [
        "One private candle-lit dinner for two beside Phewa Lake.",
        "Farewell dinner in Kathmandu with Nepali music and dance.",
      ],
      entrance: "All monument and site entry fees for the places listed in the itinerary.",
      guide: "Government-licensed English-speaking guide for the sightseeing in both cities.",
      extra: [
        "Honeymoon welcome on the first night: a flower-decorated room and a cake.",
        "Private rowing boat with a boatman on Phewa Lake.",
      ],
    },
    exclusions: honeymoonExclusions,
    addons: [PARAGLIDING, MOUNTAIN_FLIGHT],
    fixedDepartureDay: "sunday",
    itineraryDescription: "Six days between Kathmandu and Pokhara by air, with the valley's old cities, a private boat on Phewa Lake, sunrise from Sarangkot and a dinner for two by the water.",
    inExDescription: "Airport transfers, return Kathmandu–Pokhara flights, a private car, five nights at four-star hotels with breakfast, a candle-lit dinner, a farewell dinner, a private boat, entry fees and a licensed guide are included, while international flights, visa, insurance, other meals, optional activities, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Kathmandu & Pokhara Honeymoon Tour – 6 Days for Two",
      description: "A six-day Nepal honeymoon tour of Kathmandu and Pokhara with flights, four-star hotels, a private boat on Phewa Lake, Sarangkot sunrise and a candle-lit dinner.",
      keywords: "Kathmandu Pokhara honeymoon tour, Nepal honeymoon package, Nepal honeymoon tour 6 days, romantic Nepal tour, Pokhara honeymoon, Nepal couple tour",
      tags: "Honeymoon Tour, Kathmandu, Pokhara, Romantic Tour, Couples",
    },
  },
  days: [
    arrival("Your room has been dressed with flowers and there is a cake waiting — the hotel knows why you are here. Your guide calls in briefly to say hello and agree a time for the morning, and then leaves you to it."),
    {
      title: "Kathmandu — Swayambhunath, Patan and the Garden of Dreams",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PATAN,
      html: p(
        "A start after a proper breakfast. The first stop is <strong>Swayambhunath</strong>, the hilltop stupa west of the city, where the car takes the side road to save most of the steps and the whole valley lies below the painted eyes on the spire.",
        "From there you cross the Bagmati to <strong>Patan Durbar Square</strong>, the most graceful of the three royal squares: the stone Krishna Mandir, the gilded Golden Temple and a palace museum with a courtyard café that is a good place for lunch.",
        "The afternoon is for the <strong>Garden of Dreams</strong>, a restored 1920s garden of pavilions, fountains and lily ponds behind high walls at the edge of Thamel — quiet, green and made for sitting in. Your guide leaves you at the gate, and the evening is your own. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Pokhara (822 m) and sunset on Phewa Lake",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A morning flight of twenty-five minutes takes you west to <strong>Pokhara (822 m)</strong>. Sit on the right-hand side: Ganesh Himal, Manaslu and the Annapurnas pass the window one after another.",
        "The hotel is beside <strong>Phewa Lake</strong>, and the middle of the day is free for the pool, the lakeside path or a long lunch. Pokhara is warmer, greener and a good deal slower than Kathmandu, and most couples feel the change within the hour.",
        "Late in the afternoon a boatman rows the two of you across the lake to the island temple of <strong>Tal Barahi</strong> and along the forested far shore while the sun sets behind the western hills. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise, the World Peace Pagoda and a candle-lit dinner",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "The one early morning of the tour. A half-hour drive in the dark reaches <strong>Sarangkot (1,592 m)</strong> as the first light touches <strong>Dhaulagiri</strong> and moves east along Annapurna South to the fishtail peak of <strong>Machhapuchhre</strong>, with the lake under mist far below.",
        "After a late breakfast there is a short visit to <strong>Devi's Fall</strong>, where a river drops into a sinkhole, and then free time until mid-afternoon. Tandem paragliding from Sarangkot can be fitted in here if you have chosen it.",
        "Before sunset you go up to the <strong>World Peace Pagoda</strong> on the ridge across the lake, for the Annapurnas above the water in the evening light. Dinner tonight is a <strong>private candle-lit table</strong> for two at the water's edge. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Kathmandu (1,400 m), Bhaktapur and a farewell dinner",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...BHAKTAPUR,
      html: p(
        "A last unhurried breakfast by the lake, then the flight back to <strong>Kathmandu (1,400 m)</strong> with the mountains on the left-hand side.",
        "After checking in and a rest, the afternoon is in <strong>Bhaktapur</strong>, the best preserved of the valley's medieval cities and free of traffic inside its walls. You arrive as the light turns warm on the brick: the 55-window palace, the five-tiered Nyatapola pagoda, Potters' Square, and a clay pot of <em>juju dhau</em>, the sweet curd the city is known for.",
        "The evening is a <strong>farewell dinner</strong> at a traditional Nepali restaurant, a meal of many small courses served with folk music and dance from across the country. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free. Boudhanath is fifteen minutes from the airport and makes a gentle last visit — a walk round the great white stupa and coffee on a rooftop above it."),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Nepal Honeymoon Tour — 8 days
// ─────────────────────────────────────────────────────────────────────────────
export const nepalHoneymoonTour: Tour = {
  region: REGION,
  price: 1090,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [84.6, 27.85],
  zoom: 8.2,
  content: {
    slug: "nepal-honeymoon-tour",
    title: "Nepal Honeymoon Tour",
    overview:
      "<p>The <strong>Nepal Honeymoon Tour</strong> is eight days across the three places that make Nepal a honeymoon rather than a sightseeing trip: the temples and old squares of <strong>Kathmandu</strong>, the lake and mountains of <strong>Pokhara</strong>, and the jungle of <strong>Chitwan National Park</strong>, where the day begins in a canoe on a misty river and ends with the sun going down over the grassland.</p><p>Each stop has two nights, which is the difference between arriving somewhere and being there. Two flights replace the longest drives, the hotels are four-star with a double bed guaranteed, and the tour is entirely private — your own guide, your own car and, on the lake and at dinner in Pokhara, nobody but the two of you.</p>",
    highlights: [
      ["City, Lake and Jungle", "Kathmandu, Pokhara and Chitwan, two nights at each stop, with two flights to keep the travelling short."],
      ["A Private Boat on Phewa Lake", "Out to the island temple at sunset, with nobody else aboard."],
      ["Sarangkot Sunrise", "The Annapurna range turning gold above the lake at first light."],
      ["Chitwan by Canoe and Jeep", "Rhino, crocodile and deer, and sunset over the Rapti river from the lodge."],
      ["Dinners That Are Arranged for You", "A candle-lit table by the lake and a farewell dinner with Nepali music and dance."],
    ],
    sections: sections("standard"),
    faqs: [
      { question: "Is the jungle part of the tour comfortable?", answer: "Yes. The lodge is a resort-standard property on the edge of the park with air-conditioned en-suite rooms, a garden and a restaurant, and all meals are included there. Safaris are by jeep and canoe rather than on foot, and they run early and late, leaving the hot middle of the day free. Bring insect repellent for the evenings." },
      ...COMMON_FAQS,
      UPGRADE_FAQ,
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Kathmandu – Pokhara and Bharatpur – Kathmandu domestic flights."],
      transport: ["Private air-conditioned car with driver for all sightseeing and transfers, including the drive from Pokhara to Chitwan."],
      accommodation: [
        "Three nights in Kathmandu and two in Pokhara at 4-star hotels in a double room, with breakfast.",
        "Two nights at a jungle resort in Chitwan in a double room.",
      ],
      meals: [
        "Full board at the Chitwan jungle resort for the duration of the stay.",
        "One private candle-lit dinner for two beside Phewa Lake.",
        "Farewell dinner in Kathmandu with Nepali music and dance.",
      ],
      entrance: "All monument, site and national park entry fees for the places listed in the itinerary.",
      guide: "Government-licensed English-speaking guide for the sightseeing, and park naturalists in Chitwan.",
      extra: [
        "Honeymoon welcome on the first night: a flower-decorated room and a cake.",
        "Private rowing boat with a boatman on Phewa Lake.",
        "Jeep safari, dugout canoe trip and Tharu cultural evening in Chitwan.",
      ],
    },
    exclusions: honeymoonExclusions,
    addons: [PARAGLIDING, MOUNTAIN_FLIGHT, EBC_HELICOPTER],
    fixedDepartureDay: "saturday",
    itineraryDescription: "Eight days across Kathmandu, Pokhara and Chitwan, with two flights, a private boat on Phewa Lake, sunrise from Sarangkot and two nights at a jungle resort.",
    inExDescription: "Airport transfers, two domestic flights, a private car, seven nights' accommodation with breakfast, full board and safaris at Chitwan, a candle-lit dinner, a farewell dinner, entry fees and a licensed guide are included, while international flights, visa, insurance, other meals, optional activities, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Nepal Honeymoon Tour – 8 Days in Kathmandu, Pokhara & Chitwan",
      description: "An eight-day Nepal honeymoon tour for two: Kathmandu's old cities, a private boat and candle-lit dinner in Pokhara, Sarangkot sunrise and a Chitwan jungle resort.",
      keywords: "Nepal honeymoon tour, Nepal honeymoon package, honeymoon in Nepal, Kathmandu Pokhara Chitwan honeymoon, romantic Nepal tour, Nepal tour for couples",
      tags: "Honeymoon Tour, Nepal Tours, Pokhara, Chitwan, Couples",
    },
  },
  days: [
    arrival("Your room has been dressed with flowers and there is a cake waiting — the hotel knows why you are here. Your guide calls in briefly to say hello and agree a time for the morning, and then leaves you to it."),
    {
      title: "Kathmandu — Swayambhunath, Patan and the Garden of Dreams",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PATAN,
      html: p(
        "A start after a proper breakfast. The first stop is <strong>Swayambhunath</strong>, the hilltop stupa west of the city, where the car takes the side road to save most of the steps and the whole valley lies below the painted eyes on the spire.",
        "From there you cross the Bagmati to <strong>Patan Durbar Square</strong>, the most graceful of the three royal squares: the stone Krishna Mandir, the gilded Golden Temple and a palace museum with a courtyard café that is a good place for lunch.",
        "The afternoon is for the <strong>Garden of Dreams</strong>, a restored 1920s garden of pavilions, fountains and lily ponds behind high walls at the edge of Thamel — quiet, green and made for sitting in. Your guide leaves you at the gate, and the evening is your own. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Pokhara (822 m) and sunset on Phewa Lake",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A morning flight of twenty-five minutes takes you west to <strong>Pokhara (822 m)</strong>. Sit on the right-hand side: Ganesh Himal, Manaslu and the Annapurnas pass the window one after another.",
        "The hotel is beside <strong>Phewa Lake</strong>, and the middle of the day is free for the pool, the lakeside path or a long lunch. Pokhara is warmer, greener and a good deal slower than Kathmandu, and most couples feel the change within the hour.",
        "Late in the afternoon a boatman rows the two of you across the lake to the island temple of <strong>Tal Barahi</strong> and along the forested far shore while the sun sets behind the western hills. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise, the World Peace Pagoda and a candle-lit dinner",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "The one early morning in Pokhara. A half-hour drive in the dark reaches <strong>Sarangkot (1,592 m)</strong> as the first light touches <strong>Dhaulagiri</strong> and moves east along Annapurna South to the fishtail peak of <strong>Machhapuchhre</strong>, with the lake under mist far below.",
        "After a late breakfast there is a short visit to <strong>Devi's Fall</strong>, where a river drops into a sinkhole, and then free time until mid-afternoon. Tandem paragliding from Sarangkot can be fitted in here if you have chosen it.",
        "Before sunset you go up to the <strong>World Peace Pagoda</strong> on the ridge across the lake, for the Annapurnas above the water in the evening light. Dinner tonight is a <strong>private candle-lit table</strong> for two at the water's edge. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive to Chitwan (150 m) and sunset on the Rapti river",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "After breakfast the car heads south out of the hills, four to five hours with a stop on the way. The road drops through the Mahabharat range and comes out onto the flat, warm plain of the Terai, where the air, the trees and the houses are all different.",
        "You reach the resort beside <strong>Chitwan National Park (150 m)</strong> in time for a late lunch and an introduction from the naturalists who will take you into the park.",
        "Toward evening you walk down to the bank of the <strong>Rapti river</strong> to watch the sun set over the grassland on the far side, often with deer or a rhino at the water. After dinner there is a <strong>Tharu cultural evening</strong>, with stick dances performed by the people of the neighbouring villages. Overnight at the jungle resort.",
      ),
    },
    {
      title: "Chitwan — canoe on the Rapti and jeep safari",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "The morning begins on the water. A <strong>dugout canoe</strong> carries the two of you and a naturalist down the Rapti in the early mist, past gharial and mugger crocodiles on the sandbanks and kingfishers and storks in the shallows. It is slow, silent and one of the loveliest hours of the week.",
        "The middle of the day is hot and the animals rest, so you do too — the garden, a book, a long lunch.",
        "In the afternoon a <strong>jeep safari</strong> goes deep into the park through sal forest and tall grass. Greater one-horned rhinoceros are seen on most drives, along with spotted deer, wild boar, langur monkeys and peacocks. Tiger live here too but are rarely seen, and should be counted as luck. Overnight at the jungle resort.",
      ),
    },
    {
      title: "Fly to Kathmandu (1,400 m), Bhaktapur and a farewell dinner",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...BHAKTAPUR,
      html: p(
        "A last breakfast in the garden, then a short drive to Bharatpur airport for the twenty-minute flight to <strong>Kathmandu (1,400 m)</strong>, which turns a day on the highway into a morning.",
        "After checking in and a rest, the afternoon is in <strong>Bhaktapur</strong>, the best preserved of the valley's medieval cities and free of traffic inside its walls. You arrive as the light turns warm on the brick: the 55-window palace, the five-tiered Nyatapola pagoda, Potters' Square, and a clay pot of <em>juju dhau</em>, the sweet curd the city is known for.",
        "The evening is a <strong>farewell dinner</strong> at a traditional Nepali restaurant, a meal of many small courses served with folk music and dance from across the country. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free. Boudhanath is fifteen minutes from the airport and makes a gentle last visit — a walk round the great white stupa and coffee on a rooftop above it."),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Luxury Nepal Honeymoon Tour — 9 days
// ─────────────────────────────────────────────────────────────────────────────
export const luxuryNepalHoneymoonTour: Tour = {
  region: REGION,
  price: 2650,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [84.6, 27.85],
  zoom: 8.2,
  content: {
    slug: "luxury-nepal-honeymoon-tour",
    title: "Luxury Nepal Honeymoon Tour",
    overview:
      "<p>The <strong>Luxury Nepal Honeymoon Tour</strong> is nine days in the best hotels the country has, with everything that can be arranged in advance already arranged. It opens with a dawn <strong>mountain flight to Everest</strong>, moves to a resort above <strong>Pokhara</strong> for three nights of lake, mountains and a spa, continues to a premium lodge on the edge of <strong>Chitwan National Park</strong>, and closes with a farewell dinner in Kathmandu.</p><p>What the higher price buys is not more sightseeing but less friction: five-star rooms with a double bed and a view, a luxury vehicle for every road journey, flights wherever a flight exists, and private versions of the things other visitors share — the boat, the safari jeep, the table. The pace is slower than any other tour we run, with a full free day in Pokhara and no morning that starts early unless there is a sunrise worth it.</p>",
    highlights: [
      ["Five-star Hotels Throughout", "A heritage hotel in Kathmandu, a mountain-view resort in Pokhara and a premium jungle lodge."],
      ["Everest Mountain Flight", "An hour along the Himalaya at dawn, with a window seat each and Everest off the wing."],
      ["Three Nights in Pokhara", "A private sunset boat, a couple's spa treatment and a candle-lit dinner for two."],
      ["A Private Safari in Chitwan", "Your own jeep and naturalist, and a canoe on the Rapti river in the morning mist."],
      ["Nothing Shared, Nothing Rushed", "A luxury vehicle, a private guide and a full free day beside the lake."],
    ],
    sections: sections("luxury"),
    faqs: [
      { question: "Which hotels do you use?", answer: "A five-star heritage or international hotel in Kathmandu, a luxury resort with mountain views in Pokhara and a premium lodge beside the national park in Chitwan. We name the exact properties and room categories in your confirmation, because the best rooms are few and we would rather tell you what is actually held for your dates." },
      { question: "What does the luxury tour add to the standard honeymoon tour?", answer: "Five-star hotels in place of four-star, an extra night in Pokhara, the Everest mountain flight, a couple's spa treatment, a private safari jeep, and a luxury vehicle for every road journey. The places are largely the same; the comfort, the privacy and the pace are what change." },
      ...COMMON_FAQS,
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Kathmandu – Pokhara and Bharatpur – Kathmandu domestic flights.",
        "Everest mountain flight from Kathmandu with a window seat for each of you.",
      ],
      transport: ["Luxury SUV or premium van with a senior driver for all sightseeing and transfers, including the drive from Pokhara to Chitwan."],
      accommodation: [
        "Three nights at a 5-star hotel in Kathmandu and three at a luxury resort in Pokhara, in a double room with breakfast.",
        "Two nights at a premium jungle lodge in Chitwan in a double room.",
      ],
      meals: [
        "Full board at the Chitwan jungle lodge for the duration of the stay.",
        "One private candle-lit dinner for two in Pokhara.",
        "Farewell dinner in Kathmandu with Nepali music and dance.",
      ],
      entrance: "All monument, site and national park entry fees for the places listed in the itinerary.",
      guide: "Senior government-licensed English-speaking guide throughout, and a private naturalist in Chitwan.",
      extra: [
        "Honeymoon welcome on the first night: a flower-decorated room and a cake.",
        "A sixty-minute couple's spa treatment in Pokhara.",
        "Private boat with a boatman on Phewa Lake.",
        "Private jeep safari and dugout canoe trip in Chitwan.",
      ],
    },
    exclusions: {
      meals: honeymoonExclusions.meals,
      extra: ["Additional spa treatments, helicopter flights and other optional activities.", "Alcoholic drinks."],
    },
    luxuryVehicleAddon: false,
    addons: [
      {
        title: "Annapurna Base Camp Helicopter Tour",
        description: "A morning by helicopter from Pokhara into the Annapurna Sanctuary, landing at base camp (4,130 m) beneath Annapurna I and Machhapuchhre. Flown on the free day in Pokhara.",
        unit: "person",
        pricePerUnit: 1150,
      },
      EBC_HELICOPTER,
    ],
    fixedDepartureDay: "monday",
    itineraryDescription: "Nine days in five-star hotels across Kathmandu, Pokhara and Chitwan, with an Everest mountain flight, three nights above Phewa Lake and a private safari.",
    inExDescription: "Airport transfers, two domestic flights, the Everest mountain flight, a luxury vehicle, eight nights in five-star hotels and lodges with breakfast, full board and private safaris at Chitwan, a spa treatment, a candle-lit dinner, a farewell dinner, entry fees and a senior guide are included, while international flights, visa, insurance, other meals, optional activities, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Luxury Nepal Honeymoon Tour – 9 Days in Five-star Hotels",
      description: "A nine-day luxury Nepal honeymoon tour with five-star hotels, an Everest mountain flight, three nights in Pokhara with a spa and private dinner, and a private Chitwan safari.",
      keywords: "luxury Nepal honeymoon tour, luxury honeymoon in Nepal, Nepal luxury tour for couples, five star Nepal honeymoon package, Everest mountain flight honeymoon, romantic luxury Nepal",
      tags: "Honeymoon Tour, Luxury Tour, Pokhara, Chitwan, Couples",
    },
  },
  days: [
    arrival("At the hotel your room has been dressed with flowers and there is a cake waiting. Your guide calls in briefly to say hello and confirm the time of the mountain flight in the morning, and then leaves you to the evening."),
    {
      title: "Everest mountain flight and Patan",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PATAN,
      html: p(
        "An early start, and the only one in Kathmandu. A short drive takes you to the domestic terminal for the <strong>Everest mountain flight</strong>: an hour in a small aircraft flying east along the Himalaya, with a window seat each, past Langtang, Gauri Shankar and Cho Oyu to <strong>Everest (8,849 m)</strong> itself. You are back at the hotel for breakfast.",
        "After a rest, late morning is at <strong>Patan Durbar Square</strong> with your guide — the stone Krishna Mandir, the gilded Golden Temple and the palace museum, whose courtyard café is the best lunch table in the valley.",
        "The afternoon is free for the hotel's pool or spa. If you would rather be out, the <strong>Garden of Dreams</strong>, a restored 1920s garden of pavilions and lily ponds, is a quiet hour. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Pokhara (822 m) and a private boat at sunset",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A morning flight of twenty-five minutes takes you west to <strong>Pokhara (822 m)</strong>. Sit on the right-hand side: Ganesh Himal, Manaslu and the Annapurnas pass the window one after another.",
        "Your resort has the Annapurna range in front of it, and the middle of the day is for arriving properly — the terrace, the pool, a long lunch. Nothing is scheduled until the light softens.",
        "Late in the afternoon a private boat takes the two of you out on <strong>Phewa Lake</strong>, to the island temple of <strong>Tal Barahi</strong> and along the forested far shore, as the sun sets behind the western hills and the mountains turn pink above the town. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise, a couple's spa treatment and a candle-lit dinner",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "A drive in the dark to <strong>Sarangkot (1,592 m)</strong>, for the sunrise that Pokhara is known for. The first light touches <strong>Dhaulagiri</strong> far to the west and moves east along Annapurna South to the fishtail peak of <strong>Machhapuchhre</strong>, with the lake under mist below. You are back at the resort for a late breakfast.",
        "The middle of the day is given to a sixty-minute <strong>couple's spa treatment</strong>, and to as little else as possible.",
        "Before sunset you go up to the <strong>World Peace Pagoda</strong> on the ridge across the lake for the Annapurnas in the evening light. Dinner is a <strong>private candle-lit table</strong> for two, set apart from the restaurant. Overnight in Pokhara.",
      ),
    },
    {
      title: "A free day in Pokhara",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Nothing is arranged today unless you ask for it, which is the point of the extra night. The resort, the lake and the mountains are enough for most couples.",
        "For those who want an outing, the car and your guide are available all day. <strong>Begnas Lake</strong>, forty minutes east, is smaller and far quieter than Phewa and good for a boat and a picnic; Pokhara's old bazaar and the <strong>International Mountain Museum</strong> are closer to hand.",
        "This is also the day for the <strong>Annapurna Base Camp helicopter</strong>, if you have added it: a morning flight into the sanctuary and a landing at 4,130 m beneath Annapurna I, back in time for lunch. Tandem paragliding from Sarangkot can be booked for the morning as well. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive to Chitwan (150 m) and sunset on the Rapti river",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "After breakfast the car heads south out of the hills, four to five hours in a luxury vehicle with a stop on the way. The road drops through the Mahabharat range onto the flat, warm plain of the Terai, where the air, the trees and the houses are all different.",
        "You reach the lodge beside <strong>Chitwan National Park (150 m)</strong> in time for a late lunch, and your naturalist walks you through the next day over tea.",
        "Toward evening you go down to the bank of the <strong>Rapti river</strong> to watch the sun set over the grassland on the far side, often with deer or a rhino at the water's edge, and return to the lodge for dinner. Overnight at the jungle lodge.",
      ),
    },
    {
      title: "Chitwan — canoe on the Rapti and a private jeep safari",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "The morning begins on the water. A <strong>dugout canoe</strong> carries the two of you and your naturalist down the Rapti in the early mist, past gharial and mugger crocodiles on the sandbanks and kingfishers and storks in the shallows. It is slow, silent and one of the loveliest hours of the tour.",
        "The middle of the day is hot and the animals rest, so you do too — the garden, the pool, a long lunch.",
        "The afternoon <strong>jeep safari</strong> is private: your own vehicle and naturalist, deep into the park through sal forest and tall grass, stopping for as long as you like. Greater one-horned rhinoceros are seen on most drives, with spotted deer, wild boar, langur and peacock. Tiger live here too but are rarely seen. Overnight at the jungle lodge.",
      ),
    },
    {
      title: "Fly to Kathmandu (1,400 m), Bhaktapur and a farewell dinner",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...BHAKTAPUR,
      html: p(
        "A last breakfast in the garden, then a short drive to Bharatpur airport for the twenty-minute flight to <strong>Kathmandu (1,400 m)</strong>, which turns a day on the highway into a morning.",
        "After checking in and a rest, the late afternoon is in <strong>Bhaktapur</strong>, the best preserved of the valley's medieval cities and free of traffic inside its walls. You arrive as the light turns warm on the brick: the 55-window palace, the five-tiered Nyatapola pagoda and Potters' Square, with a clay pot of <em>juju dhau</em>, the sweet curd the city is known for.",
        "The evening is a <strong>farewell dinner</strong> at a traditional Nepali restaurant, a meal of many small courses served with folk music and dance. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free. Boudhanath is fifteen minutes from the airport and makes a gentle last visit — a walk round the great white stupa and coffee on a rooftop above it."),
  ],
};

/** Every tour in the Honeymoon Tour region, shortest first. */
export const honeymoonTours: Tour[] = [
  pokharaHoneymoonTour,
  kathmanduPokharaHoneymoonTour,
  nepalHoneymoonTour,
  luxuryNepalHoneymoonTour,
];
