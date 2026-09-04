/**
 * Region: Nepal Day Tours — the Pokhara half.
 *
 * "Pokhara Day Tour" and "Pokhara Day Tour with Sunrise View from Sarangkot"
 * are kept separate because the second starts three hours earlier and is sold
 * as a different product; everything else in the source list under Pokhara day
 * tours is a walk, and lives in the Hiking region.
 */
import { POKHARA, PKR_PLACE, p, type Tour } from "./types";

const REGION = "Nepal Day Tours";

const SARANGKOT = { lng: 83.9490, lat: 28.2440 };
const PEACE_PAGODA = { lng: 83.9450, lat: 28.1990 };
const BEGNAS = { lng: 84.0900, lat: 28.1800 };
const DEVIS_FALL = { lng: 83.9530, lat: 28.1930 };
const KAHUN = { lng: 84.0100, lat: 28.2280 };

const PKR_SECTIONS = [
  {
    heading: "Getting Around Pokhara",
    content:
      "<p>Pokhara is small and the sites are close, but they are spread around the valley rim rather than concentrated in a centre, so a <strong>private vehicle with a driver</strong> is what makes a day tour work. The lakeside strip itself is walkable and the boats on Phewa are the pleasant way to cross to the far shore.</p><p>The one thing to plan around is the light. The mountains are reliably clear at dawn and often gone into haze by mid-morning, particularly from March onwards, so any itinerary that includes a viewpoint puts it first and the caves and museums afterwards.</p>",
  },
  {
    heading: "Best Time to Visit",
    content:
      "<p><strong>October to April</strong> is the season, and the difference between a clear morning and a hazy one is the difference between seeing Annapurna and not. October and November give the sharpest air of the year; December to February are cold at dawn but exceptionally clear.</p><p>From March the pre-monsoon haze builds through the day and the mountains are often only visible at first light. The monsoon between June and September fills the valley with cloud, though the lake and the waterfalls are at their most dramatic and the hillsides are impossibly green.</p>",
  },
  {
    heading: "What to Wear and Bring",
    content:
      "<p>Layers. Sarangkot at dawn in winter is close to freezing while the lakeside at midday is shirt-sleeve warm, and the same day covers both. Comfortable shoes for the short walks, a windproof layer for the viewpoints, and sunglasses and sunscreen for the boat.</p><p>Bring cash in small notes for the boat, the cave entries and tea at the viewpoints, and a torch for the Gupteshwor cave, which is dark and wet underfoot. Binoculars are worth carrying if you have them.</p>",
  },
  {
    heading: "Combining with Other Activities",
    content:
      "<p>Pokhara's day tours pair naturally with its adventure activities: a <strong>Sarangkot sunrise</strong> and a <strong>paragliding flight</strong> from the same hill later that morning is the most popular combination, and the ultralight and zipline both work in the same day.</p><p>Tell us at booking and we will sequence the transfers so it flows rather than doubling back. Most of the walking day hikes in the Hiking region also start from these same viewpoints, so a sightseeing day and a hiking day can be built to complement each other.</p>",
  },
];

const PKR_FAQS = [
  { question: "Will we see the mountains?", answer: "In the season, on most mornings, yes — but nobody can promise it. Annapurna South, Machhapuchhre and Dhaulagiri are visible from the Pokhara viewpoints on any clear day, and clearest at dawn. Cloud in the monsoon and haze in late spring are the two things that spoil it." },
  { question: "How early does the Sarangkot sunrise tour start?", answer: "Pickup is between 4.30 and 5.30 am depending on the season, so that you are on the hill before first light. It is early and it is cold in winter, and it is still the single best hour available in Pokhara." },
  { question: "Is the boat on Phewa Lake included?", answer: "Yes on the itineraries that list it — a rowing boat with a boatman across to the Tal Barahi temple island or the far shore. You can also take the oars yourself if you would rather, which the boatmen find funny but permit." },
  { question: "Is much walking involved?", answer: "Very little on the sightseeing days — a few hundred steps at the World Peace Pagoda and the cave, and short strolls at the viewpoints. If you want a proper walk, the day hikes from Pokhara in our Hiking region are built for that." },
  { question: "Are the caves suitable for everyone?", answer: "Gupteshwor and Mahendra caves both involve steps down into damp, low-ceilinged passages that can be slippery. They are manageable for most people but not for anyone with mobility problems or a strong dislike of confined spaces, and we can skip them without changing the rest of the day." },
  { question: "Can we do this by ourselves?", answer: "You could, and Pokhara is easy to navigate. What the tour buys is the vehicle timed around the light, a guide who explains what you are seeing, and the entries handled — which matters most on the sunrise mornings when everything happens in the dark." },
  { question: "Is lunch included?", answer: "Not usually. Your guide will suggest lakeside places and eat separately unless you invite them. Tell us at booking if you would rather have it in the price." },
  { question: "Can we add paragliding to the same day?", answer: "Yes, and it is the most popular combination we sell. The sunrise tour finishes at Sarangkot at about the time the paragliding pilots arrive, so you can stay on the hill and fly rather than driving back down and up again." },
];

const pkrInclusions = (entrance: string, extra: string[] = []) => ({
  transport: ["Private vehicle with driver for the full itinerary, including hotel pickup and drop-off."],
  entrance,
  guide: "Government-licensed English-speaking guide for the day.",
  extra: ["Bottled water in the vehicle.", ...extra],
});

const pkrExclusions = { domestic: true as const, meals: "Lunch and any meals not specified.", extra: ["Optional paragliding or other adventure activities."] };

export const pokharaDayTour: Tour = {
  region: REGION,
  price: 65,
  difficulty: "easy",
  maxAltitude: 1100,
  center: [83.96, 28.21],
  zoom: 12.5,
  content: {
    slug: "pokhara-day-tour",
    title: "Pokhara Day Tour – 1 Day",
    overview:
      "<p>A full day covering what the Pokhara valley holds beyond its lakeside cafés: the <strong>World Peace Pagoda</strong> on the ridge across the water, the <strong>Gupteshwor Mahadev</strong> cave with its natural Shiva lingam, <strong>Devi's Fall</strong> where the Pardi Khola disappears underground, the <strong>International Mountain Museum</strong>, and a rowing boat across <strong>Phewa Lake</strong> to the Tal Barahi temple on its island.</p><p>It is an unhurried day and mostly at low altitude, which makes it a good rest day between treks or a first day for anyone arriving from Kathmandu. The order is arranged around the light — viewpoints early, caves and museums when the haze builds — and the vehicle waits at every stop.</p>",
    highlights: [
      ["World Peace Pagoda", "The white stupa on the ridge above the lake, with the Annapurnas behind it."],
      ["Gupteshwor Cave", "A natural Shiva lingam in a chamber beneath the waterfall, reached down wet steps."],
      ["Devi's Fall", "Where the Pardi Khola drops into a sinkhole and vanishes underground."],
      ["Phewa Lake by Rowing Boat", "Cross to the Tal Barahi temple island and back under the Annapurna skyline."],
      ["International Mountain Museum", "The best explanation anywhere of Himalayan mountaineering and the peoples of the range."],
    ],
    sections: PKR_SECTIONS,
    faqs: PKR_FAQS,
    inclusions: pkrInclusions("Entry fees for the World Peace Pagoda, Gupteshwor cave, Devi's Fall and the International Mountain Museum.", ["Rowing boat with boatman on Phewa Lake."]),
    exclusions: pkrExclusions,
    fixedDepartureDay: "tuesday",
    itineraryDescription: "A full day around the Pokhara valley taking in the Peace Pagoda, the caves, the museum and a boat on Phewa Lake.",
    inExDescription: "A private vehicle with driver, a licensed guide, all listed entry fees and the lake boat are included, while meals, adventure activities, tips and personal expenses are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Pokhara Day Tour – Peace Pagoda, Caves, Museum and Phewa Lake",
      description: "A full-day Pokhara sightseeing tour covering the World Peace Pagoda, Gupteshwor cave, Devi's Fall, the Mountain Museum and Phewa Lake.",
      keywords: "Pokhara day tour, Pokhara sightseeing, World Peace Pagoda, Devi's Fall, Gupteshwor cave, Phewa Lake boat",
      tags: "Day Tours, Pokhara, Sightseeing, Nepal Tours",
    },
  },
  days: [
    {
      title: "Peace Pagoda, the caves, the museum and Phewa Lake",
      elevation: "1,100 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...PEACE_PAGODA,
      html: p(
        "Pickup after breakfast. The day starts across the lake at the <strong>World Peace Pagoda</strong>, a white Japanese-built stupa on the ridge at 1,100 m. It can be reached by road or, better, by boat across Phewa and a twenty-minute climb through forest.",
        "From the terrace the whole valley lies below — Phewa, the town, the Seti gorge — with <strong>Machhapuchhre</strong>, <strong>Annapurna South</strong> and, on a clear morning, <strong>Dhaulagiri</strong> behind.",
        "Down to <strong>Devi's Fall</strong>, where the Pardi Khola drops into a sinkhole and disappears underground. Across the road the <strong>Gupteshwor Mahadev</strong> cave descends steeply to a chamber holding a natural Shiva lingam, with the underground river audible and, in the monsoon, visible through a gap in the rock.",
        "Lunch at the lakeside, then the <strong>International Mountain Museum</strong>, which is far better than most visitors expect — the history of Himalayan mountaineering, the geology of the range, and a genuinely good ethnographic section on the peoples who live in it.",
        "The afternoon finishes on <strong>Phewa Lake</strong> in a rowing boat, crossing to the <strong>Tal Barahi</strong> temple on its island — a two-tiered pagoda to the goddess, reached only by water and busy with worshippers.",
        "Back at your hotel by early evening.",
      ),
    },
  ],
};

export const sarangkotSunriseTour: Tour = {
  region: REGION,
  price: 75,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [83.95, 28.22],
  zoom: 12.5,
  content: {
    slug: "pokhara-day-tour-with-sarangkot-sunrise",
    title: "Pokhara Day Tour with Sunrise View from Sarangkot",
    overview:
      "<p>The same Pokhara sightseeing day, with the one thing that makes the valley worth waking up for added to the front of it. <strong>Sarangkot (1,592 m)</strong> at dawn gives the classic Annapurna panorama: the light hits <strong>Dhaulagiri (8,167 m)</strong> first, then works east along <strong>Annapurna South</strong>, <strong>Hiunchuli</strong> and <strong>Machhapuchhre</strong>, with mist filling the valley and Phewa Lake below.</p><p>Pickup is between 4.30 and 5.30 am depending on the season. After sunrise and breakfast the day continues at a civilised pace through the <strong>Gupteshwor cave</strong>, <strong>Devi's Fall</strong>, the <strong>International Mountain Museum</strong> and a boat across <strong>Phewa Lake</strong> — the full valley in one day, with the best hour of it done before most people are up.</p>",
    highlights: [
      ["Sunrise from Sarangkot (1,592 m)", "The classic Annapurna dawn, from Dhaulagiri across to Manaslu."],
      ["Mist over Phewa Lake", "The valley fills with cloud below you while the peaks catch the first light."],
      ["The Full Valley Afterwards", "Caves, waterfall, museum and lake, all with the morning already won."],
      ["Paragliding from the Same Hill", "Stay on at Sarangkot and fly, if you add it at booking."],
      ["Back Before Most People Wake", "The best hour in Pokhara happens before seven."],
    ],
    sections: PKR_SECTIONS,
    faqs: PKR_FAQS,
    inclusions: pkrInclusions("Sarangkot viewpoint entry and fees for Gupteshwor cave, Devi's Fall and the International Mountain Museum.", ["Rowing boat with boatman on Phewa Lake.", "Tea at the Sarangkot viewpoint before sunrise."]),
    exclusions: pkrExclusions,
    fixedDepartureDay: "wednesday",
    itineraryDescription: "Sunrise from Sarangkot followed by a full day around the Pokhara valley — caves, waterfall, museum and Phewa Lake.",
    inExDescription: "A private vehicle with driver, a licensed guide, all listed entry fees, sunrise tea and the lake boat are included, while meals, adventure activities, tips and personal expenses are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Pokhara Day Tour with Sunrise View from Sarangkot",
      description: "Sunrise over the Annapurnas from Sarangkot followed by a full Pokhara sightseeing day — caves, Devi's Fall, museum and Phewa Lake.",
      keywords: "Sarangkot sunrise tour, Pokhara sunrise, Sarangkot viewpoint, Pokhara day tour sunrise, Annapurna sunrise",
      tags: "Day Tours, Pokhara, Sarangkot, Sunrise, Nepal Tours",
    },
  },
  days: [
    {
      title: "Sarangkot sunrise (1,592 m) and the Pokhara valley",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "Pickup between 4.30 and 5.30 am — early, dark and cold in winter, and worth every minute of it. The road climbs the switchbacks to <strong>Sarangkot (1,592 m)</strong> in about half an hour and there is tea at the viewpoint while you wait.",
        "The light arrives on <strong>Dhaulagiri (8,167 m)</strong> first, well before the sun clears the eastern hills, then moves along the range: <strong>Annapurna South</strong>, <strong>Hiunchuli</strong>, the fishtail of <strong>Machhapuchhre (6,993 m)</strong>, <strong>Annapurna III</strong> and <strong>IV</strong>, and on the clearest mornings <strong>Manaslu</strong> to the east.",
        "Below, the valley fills with mist and <strong>Phewa Lake</strong> appears through it as the sun gets higher.",
        "Back down for breakfast at the hotel, then the rest of the valley at a gentler pace: <strong>Devi's Fall</strong>, where the Pardi Khola vanishes into a sinkhole, and the <strong>Gupteshwor Mahadev</strong> cave opposite with its natural lingam and underground river.",
        "After lunch the <strong>International Mountain Museum</strong>, and then a rowing boat across <strong>Phewa Lake</strong> to the <strong>Tal Barahi</strong> temple island.",
        "Back at your hotel in the late afternoon, with an early night strongly advised.",
      ),
    },
  ],
};

export const fiveViewpointsTour: Tour = {
  region: REGION,
  price: 95,
  difficulty: "easy",
  maxAltitude: 1600,
  center: [84.0, 28.22],
  zoom: 11.5,
  content: {
    slug: "five-himalayan-viewpoints-tour-from-pokhara",
    title: "Five Himalayan Viewpoints Tour from Pokhara",
    overview:
      "<p>Pokhara sits in a bowl with hills on every side, and each one gives a different angle on the Annapurna range. This day links <strong>five viewpoints</strong> by vehicle — <strong>Sarangkot</strong> at dawn, <strong>Kahun Danda</strong>, <strong>Pumdikot</strong>, the <strong>World Peace Pagoda</strong> and <strong>Begnas Lake</strong> — so you see the same mountains from five sides and the valley itself from every direction.</p><p>It is more rewarding than it sounds. Sarangkot gives the classic dawn panorama; Kahun Danda looks back over the town and the Seti gorge; Pumdikot's new 51-foot Shiva statue faces the range head-on; the Peace Pagoda frames the lake; and Begnas, twenty minutes east, is the quiet lake that Phewa used to be, with fishing boats and no crowds.</p>",
    highlights: [
      ["Five Angles on Annapurna", "The same range from five different hills, each with a different foreground."],
      ["Sarangkot at Dawn", "The classic panorama from Dhaulagiri to Manaslu as the light arrives."],
      ["Pumdikot's Shiva Statue", "A 51-foot Shiva on a ridge facing the range, finished in 2021 and already a pilgrimage site."],
      ["Kahun Danda's Watchtower", "A quiet hill east of town looking back over Pokhara and the Seti gorge."],
      ["Begnas Lake", "The valley's second lake, with fishing boats and almost no visitors."],
    ],
    sections: PKR_SECTIONS,
    faqs: PKR_FAQS,
    inclusions: pkrInclusions("Entry and parking fees at all five viewpoints.", ["Tea at the Sarangkot viewpoint before sunrise.", "Boat on Begnas Lake in the afternoon."]),
    exclusions: pkrExclusions,
    fixedDepartureDay: "thursday",
    itineraryDescription: "A full day linking Sarangkot, Kahun Danda, Pumdikot, the World Peace Pagoda and Begnas Lake by private vehicle.",
    inExDescription: "A private vehicle with driver, a licensed guide, all viewpoint fees, sunrise tea and the Begnas boat are included, while meals, adventure activities, tips and personal expenses are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Five Himalayan Viewpoints Tour from Pokhara",
      description: "A day tour linking five Pokhara viewpoints — Sarangkot, Kahun Danda, Pumdikot, the World Peace Pagoda and Begnas Lake.",
      keywords: "Pokhara viewpoints tour, Sarangkot Pumdikot, Kahun Danda, Begnas Lake, Annapurna viewpoints Pokhara",
      tags: "Day Tours, Pokhara, Viewpoints, Sunrise, Nepal Tours",
    },
  },
  days: [
    {
      title: "Sarangkot, Kahun Danda, Pumdikot, the Peace Pagoda and Begnas",
      elevation: "1,600 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "A pre-dawn pickup for <strong>Sarangkot (1,592 m)</strong>, the first and best of the five. Tea at the viewpoint while the light works along the range from <strong>Dhaulagiri</strong> to <strong>Manaslu</strong>, with the valley under mist below.",
        "Down for breakfast, then east to <strong>Kahun Danda (1,443 m)</strong>, a quiet hill above the town with an old watchtower on top. The angle here is the reverse of Sarangkot: Pokhara and the Seti gorge in the foreground with the mountains behind.",
        "South to <strong>Pumdikot</strong>, a ridge above the far shore of Phewa where a <strong>51-foot Shiva statue</strong> was completed in 2021. It faces the range directly and has become a pilgrimage site as much as a viewpoint; the walk up through the 108 shivalinga is short.",
        "Along the same ridge to the <strong>World Peace Pagoda</strong> for lunch and the framed view of Phewa Lake with the Annapurnas above it — the postcard angle of Pokhara.",
        "The afternoon drives twenty minutes east to <strong>Begnas Lake</strong>, the valley's second lake and what Phewa was thirty years ago: fishing boats, cages of carp, forest running down to the water and almost nobody about. A boat takes you out for an hour.",
        "Back at your hotel by early evening, having seen the same mountains from five directions.",
      ),
    },
  ],
};

export const pokharaDayTours: Tour[] = [pokharaDayTour, sarangkotSunriseTour, fiveViewpointsTour];
