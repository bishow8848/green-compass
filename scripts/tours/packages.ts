/**
 * Region: Nepal Tour Packages.
 *
 * Merges the source groups "Nepal Tour Packages", "Multiple Day Tours" and
 * "Jeep Tours in Nepal". Duplicates were folded in rather than repeated:
 * "Nepal Adventure Tours" and "Nepal Adventure Tour - 8 Days" are one tour,
 * "Buddhist Pilgrimage Tour in Nepal - 8 Days" lives in the Pilgrimage region,
 * and "Muktinath Darshan by Jeep" sits with the other Muktinath journeys.
 */
import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, PKR_PLACE, p, type Tour, type TourDay } from "./types";

const REGION = "Nepal Tour Packages";

const CHITWAN = { lng: 84.4990, lat: 27.5800 };
const LUMBINI = { lng: 83.2760, lat: 27.4690 };
const NAGARKOT = { lng: 85.5200, lat: 27.7150 };
const BHAKTAPUR = { lng: 85.4280, lat: 27.6722 };
const PATAN = { lng: 85.3250, lat: 27.6727 };
const BANDIPUR = { lng: 84.4110, lat: 27.9350 };
const DHULIKHEL = { lng: 85.5430, lat: 27.6220 };
const NUWAKOT = { lng: 85.1700, lat: 27.9200 };
const GHANDRUK = { lng: 83.8100, lat: 28.3760 };
const SARANGKOT = { lng: 83.9490, lat: 28.2440 };
const BUNGAMATI = { lng: 85.3000, lat: 27.6180 };
const GHALEGAUN = { lng: 84.2789, lat: 28.3247 };

const CHITWAN_PLACE = "Nepal's first national park, on the subtropical plains of the Terai.";
const NAGARKOT_PLACE = "A ridge-top resort village east of Kathmandu, known for its Himalayan sunrise.";
const BHAKTAPUR_PLACE = "The best-preserved of the three medieval cities of the Kathmandu Valley.";
const LUMBINI_PLACE = "The birthplace of the Buddha and a UNESCO World Heritage Site on the Terai plains.";

/** Arrival day, shared by every multi-day package that starts in Kathmandu. */
const arrival = (extra: string): TourDay => ({
  title: "Arrival in Kathmandu (1,400 m)",
  elevation: "1,400 m",
  accommodation: "Kathmandu",
  placeDescription: KTM_PLACE,
  ...KATHMANDU,
  html: p(
    "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you outside the arrivals hall with a name board and drives you to your hotel in Thamel.",
    extra,
    "The rest of the day is yours to rest off the flight or wander the alleys of Thamel. Overnight in Kathmandu.",
  ),
});

/** Departure day, shared by every package that ends in Kathmandu. */
const departure = (extra: string): TourDay => ({
  title: "Departure from Nepal",
  elevation: "1,400 m",
  accommodation: "Kathmandu Airport",
  placeDescription: AIRPORT_PLACE,
  ...AIRPORT,
  html: p(
    extra,
    "We collect you from your hotel three hours before your flight and drive you to <strong>Tribhuvan International Airport</strong>, where our representative sees you through to the check-in counters.",
    "If your flight leaves late in the day, we can hold the room or store your bags and add a last few hours of shopping in Thamel — just let the guide know the evening before.",
  ),
});

export const kathmanduValleyTour: Tour = {
  region: REGION,
  price: 395,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [85.40, 27.70],
  zoom: 10.5,
  content: {
    slug: "kathmandu-valley-tour",
    title: "Kathmandu Valley Tour",
    overview:
      "<p>The <strong>Kathmandu Valley Tour</strong> is four days inside a bowl of hills that holds more UNESCO World Heritage monuments than most countries. You visit all seven of the valley's listed sites — the three royal <strong>Durbar Squares</strong> of Kathmandu, Patan and Bhaktapur, the stupas of <strong>Swayambhunath</strong> and <strong>Boudhanath</strong>, the cremation ghats of <strong>Pashupatinath</strong>, and the hilltop temple of <strong>Changunarayan</strong>, the oldest standing shrine in Nepal.</p><p>It is a tour built for people with limited time who still want depth rather than a checklist. Days are paced so you walk the back lanes as well as the squares: the potters' yard in Bhaktapur, the metalworkers' courtyards in Patan, the butter-lamp corridors behind Boudhanath. A night at <strong>Nagarkot (2,175 m)</strong> on the eastern rim closes the tour with sunrise over the Himalaya, from Ganesh Himal round to Everest on a clear morning.</p>",
    highlights: [
      ["Seven UNESCO Sites", "Cover every World Heritage monument in the Kathmandu Valley across four unhurried days."],
      ["Three Durbar Squares", "Compare the royal courts of Kathmandu, Patan and Bhaktapur, each built by rival Malla kings."],
      ["Boudhanath at Dusk", "Join the evening kora around Nepal's largest stupa as the butter lamps are lit."],
      ["Bhaktapur Backstreets", "Watch potters, wood carvers and juju dhau makers working the same lanes their families have for centuries."],
      ["Nagarkot Sunrise", "Wake on the valley rim for a Himalayan panorama that stretches from Annapurna to the Everest massif."],
    ],
    sections: [
      {
        heading: "Best Time to Visit",
        content:
          "<p><strong>October to early December</strong> and <strong>February to April</strong> are the strongest months. Autumn brings washed-clean air after the monsoon and the best odds of seeing the Himalaya from Nagarkot; it also covers <em>Dashain</em> and <em>Tihar</em>, when the squares fill with ritual. Spring is warmer, with rhododendron on the valley rim and jacaranda in the city.</p><p>Winter is perfectly workable — days are mild and sunny, mornings are cold and hazy until the sun clears the ridge, and the sites are at their quietest. From June to September the monsoon puts cloud over the mountains most days and rain in the afternoons, though the valley itself is green and the temples are still worth the trip at a lower price.</p>",
      },
      {
        heading: "What to Expect",
        content:
          "<p>This is an easy tour with a lot of walking on uneven ground. Each sightseeing day involves two to four hours on foot across brick paving, temple plinths and steep stone stairways — the 365 steps up to Swayambhunath being the stiffest of them. You are driven between sites in a private vehicle, so nothing is more than a short transfer away.</p><p>Kathmandu's traffic is dense and its air is poor in the dry months, so we schedule the walking-heavy visits for the early morning. Bring shoes you can slip off easily at temple thresholds, and note that leather belts and bags are not permitted inside some Hindu temple courtyards. Photography is welcome almost everywhere, except inside the main Pashupatinath shrine, which non-Hindus may not enter.</p>",
      },
      {
        heading: "Guides and Entrance Fees",
        content:
          "<p>Your guide is a licensed valley specialist, not a driver with a script — a good one turns a courtyard of struts and finials into a readable story of Malla rivalry, Newar craft guilds and earthquake reconstruction. Guides are available in English as standard, and we can arrange Spanish, French, German, Japanese, Hindi and Chinese speakers if you ask when booking.</p><p>All monument entrance fees for the sites in the itinerary are included in your price. They are not trivial — Bhaktapur alone is one of the highest in South Asia — and the money funds ongoing restoration of the buildings you have come to see. Keep your Bhaktapur ticket: it can be extended for a second day free of charge at the ticket office.</p>",
      },
      {
        heading: "Accommodation and Food",
        content:
          "<p>Three nights are in a comfortable 3-star hotel in Thamel with breakfast, and one night is at a ridge-top resort in Nagarkot chosen for its east-facing rooms. Upgrades to 4- and 5-star properties, including the heritage hotels in Bhaktapur and the Dwarika's in Kathmandu, are available at extra cost — tell us before booking so we can hold a room.</p><p>Only breakfast is included, deliberately: eating out is one of the pleasures of Kathmandu and the range runs from a two-dollar plate of <em>momo</em> to serious tasting menus. Your guide will steer you toward Newari <em>bhoj</em> in Patan, the Tibetan bakeries around Boudhanath, and Thamel's long-running institutions. Tap water is not drinkable; filtered refills are free at most hotels.</p>",
      },
    ],
    faqs: [
      { question: "Do I need a guide to visit the Durbar Squares?", answer: "No rule requires one, but the squares are dense with unlabelled buildings and most visitors miss the point of them without context. A licensed guide is included here for exactly that reason. Entry tickets are checked at every square regardless of whether you have a guide." },
      { question: "How much walking is there on a typical day?", answer: "Between four and eight kilometres, spread over two or three stops with drives in between. The ground is uneven brick and stone rather than smooth pavement, and there are stairways at Swayambhunath, Changunarayan and Nagarkot. Anyone comfortable on a long city day out will manage it." },
      { question: "Can this tour work for someone with limited mobility?", answer: "Partly. Patan and Bhaktapur Durbar Squares are largely flat and manageable, as is Boudhanath. Swayambhunath has a vehicle road to a side entrance that skips most of the steps. Changunarayan and the Pashupatinath terraces involve stairs with no alternative. Tell us in advance and we will rebuild the route around what works." },
      { question: "Are the sites still damaged from the 2015 earthquake?", answer: "Reconstruction is largely complete at the major monuments. A handful of buildings in Kathmandu Durbar Square remain under scaffolding, and you will see restoration workshops in Patan and Bhaktapur — many visitors find these the most interesting part, as traditional joinery and brick-making are being used rather than concrete." },
      { question: "What is the dress code for temples?", answer: "Shoulders and knees covered for both men and women. Shoes come off before entering shrine buildings, and leather items are refused at some Hindu temples, including parts of Pashupatinath. Nothing more formal is expected — this is everyday practice, not a special requirement for visitors." },
      { question: "Will we actually see the mountains from Nagarkot?", answer: "In October and November the odds are very good, typically four mornings in five. In spring, haze from farm burning in the plains cuts visibility, so it is closer to one morning in two. In the monsoon it is unlikely. We schedule the Nagarkot night early enough in the tour that a second attempt is sometimes possible." },
      { question: "Is Kathmandu safe to walk around in the evening?", answer: "Yes. Thamel, Boudhanath and Patan are busy and well used after dark, and violent crime against visitors is rare. The genuine hazards are traffic, open drains and unlit pavements, so carry a small torch and watch your step. Ordinary precautions with valuables in crowds apply." },
      { question: "Can the tour be extended?", answer: "Easily. Common additions are a night in Dhulikhel, a day trip to Chandragiri or Pharping, or a flight to Pokhara for two or three days by the lake. Because the valley is compact, extra days can also be spent going back to a single site in depth rather than adding new ones." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: ["Private air-conditioned vehicle for all sightseeing and transfers as per the itinerary."],
      accommodation: [
        "Three nights at a 3-star hotel in Kathmandu with breakfast.",
        "One night at a ridge-top resort in Nagarkot with breakfast and dinner.",
      ],
      entrance: "All monument entrance fees for the sites listed in the itinerary.",
      guide: "Professional English-speaking licensed city guide throughout the tour.",
    },
    exclusions: { meals: "Lunch and dinner in Kathmandu." },
    fixedDepartureDay: "friday",
    itineraryDescription: "Four days covering all seven UNESCO World Heritage sites of the Kathmandu Valley, closing with sunrise from the Nagarkot ridge.",
    inExDescription: "Airport transfers, private vehicle, four hotel nights with breakfast, every monument entrance fee, a licensed city guide and government taxes are included, while international flights, visa, insurance, city lunches and dinners, personal expenses and tips are excluded.",
    bestTime: "Oct-Dec, Feb-Apr",
    meta: {
      title: "Kathmandu Valley Tour – 4 Days, All 7 UNESCO Sites",
      description: "A four-day Kathmandu Valley tour covering all seven UNESCO World Heritage sites — three Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath and Changunarayan — with a Nagarkot sunrise.",
      keywords: "Kathmandu Valley tour, Kathmandu sightseeing, UNESCO sites Nepal, Durbar Square tour, Nagarkot sunrise, Bhaktapur tour",
      tags: "Kathmandu Valley Tour, Nepal Tour Packages, Cultural Tour, UNESCO, Nagarkot",
    },
  },
  days: [
    arrival("Your guide joins you for a short briefing over tea, walking through the four-day plan, the monument tickets and the early start for Nagarkot."),
    {
      title: "Kathmandu — Swayambhunath, Durbar Square and Pashupatinath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start at <strong>Swayambhunath</strong>, the hilltop stupa the guidebooks call the monkey temple, reached by 365 stone steps through a forest of votive chaityas. From the platform the whole valley lies below you, and the painted eyes on the harmika look out over it in four directions.",
        "Down in the old city, <strong>Kathmandu Durbar Square</strong> holds the palace of the Malla and Shah kings, the Kumari Ghar where the living goddess appears at her window, and the tiered Taleju temple. Your guide walks you through the earthquake reconstruction as well as the history.",
        "The afternoon is at <strong>Pashupatinath</strong>, the most important Shiva temple in Nepal, where cremations take place on the ghats of the Bagmati and sadhus hold court on the terraces opposite. Non-Hindus view the main courtyard from the far bank. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Patan, Boudhanath and the evening kora",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PATAN,
      html: p(
        "<strong>Patan Durbar Square</strong>, twenty minutes south across the Bagmati, is the finest concentration of Newar architecture in Nepal — the stone Krishna Mandir, the sunken royal bath at Sundari Chowk, and a museum in the old palace that is among the best in South Asia.",
        "You leave the square on foot into the surrounding lanes, where families of metalworkers still cast bronze by the lost-wax method and the Golden Temple courtyard runs on a rota of teenage monks.",
        "Late afternoon at <strong>Boudhanath</strong>, the vast white stupa at the heart of Kathmandu's Tibetan community. Arrive as the light drops and join the crowd walking the clockwise kora while butter lamps are lit and monastery horns sound from the rooftops. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Bhaktapur and Changunarayan, drive to Nagarkot (2,175 m)",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: NAGARKOT_PLACE,
      ...NAGARKOT,
      html: p(
        "<strong>Bhaktapur</strong> takes the whole morning and deserves it. The city is car-free inside the walls, and its four squares hold the 55-window palace, the Golden Gate, the five-tiered Nyatapola and a potters' square where clay is still thrown and dried in the open.",
        "You will be offered <em>juju dhau</em>, the king of curds, set in clay pots — it is worth stopping for.",
        "A short climb out of the valley reaches <strong>Changunarayan</strong>, founded in the fourth century and the oldest standing temple in Nepal, its struts and stone carvings older than everything you saw in the squares. From there the road continues up to <strong>Nagarkot (2,175 m)</strong> for the night, arriving in time for sunset over the ridges. Overnight in Nagarkot.",
      ),
    },
    departure("Wake before dawn for sunrise from the Nagarkot viewpoint — on a clear morning the range runs from Ganesh Himal and Langtang across to the Everest massif on the eastern horizon. Breakfast follows at the resort, then the drive back down into the valley."),
  ],
};


// ── Detail sections shared by the multi-day packages ──
// Every package covers the same ground logistically — hotels, private vehicles,
// domestic flights and monument fees — so the practical sections are written
// once and the per-tour copy stays in the overview, highlights and itinerary.
const PACKAGE_SECTIONS = [
  {
    heading: "Best Time to Travel",
    content:
      "<p><strong>October to April</strong> is the season for touring Nepal. October and November give the clearest mountain views of the year and comfortable temperatures everywhere from the Terai to the valley rim. December to February are colder in the hills but exceptionally clear, with far fewer visitors at every monument.</p><p><strong>March and April</strong> bring rhododendron to the hills and warmth back to the plains, though haze builds in the afternoons and the Terai gets hot by late April. The monsoon from June to September makes the mountains unreliable and the roads slower, but the valley is green, the light is dramatic and prices are at their lowest.</p>",
  },
  {
    heading: "Accommodation and Transport",
    content:
      "<p>Hotels are three-star or better as standard, centrally located and chosen for being quiet rather than merely close. Rooms are twin or double with private bathroom, breakfast and Wi-Fi. Upgrades to four- and five-star properties are available on every package — tell us at booking rather than on arrival.</p><p>All road travel is by <strong>private air-conditioned vehicle with a driver</strong>, sized to the group, with your guide travelling alongside. Where the itinerary crosses the country the domestic flight is included; the Kathmandu–Pokhara road transfer can be swapped for the 25-minute flight as an add-on if you would rather not spend the day driving.</p>",
  },
  {
    heading: "What Is Included in the Price",
    content:
      "<p>The price covers accommodation, all listed transport, monument and national park entry fees, a government-licensed guide throughout and every activity named in the itinerary. Entry fees are a larger part of the cost than most visitors expect — the seven UNESCO sites alone run to a significant sum — and they are all in.</p><p>Meals vary by package: breakfast is always included, and full board is provided where the itinerary goes somewhere with no restaurant choice, such as a jungle lodge or a village homestay. In Kathmandu and Pokhara lunches and dinners are left out deliberately, because both cities have far better eating than any hotel package can arrange.</p>",
  },
  {
    heading: "Practical Notes",
    content:
      "<p>Bring modest clothing for the temples — shoulders and knees covered, shoes that slip off easily — and layers, since a single day can run from a cold dawn on the valley rim to shirt-sleeve warmth on the Terai. A hat, sunscreen and a refillable bottle are worth carrying everywhere.</p><p>Nepal issues visas on arrival at Tribhuvan International Airport; bring cash in US dollars and a passport photograph to speed it up. ATMs are plentiful in Kathmandu and Pokhara and scarce elsewhere, so draw what you need before leaving either city. Tipping is customary for guides and drivers and entirely at your discretion.</p>",
  },
];

const PACKAGE_FAQS = [
  { question: "How much of the day is spent travelling?", answer: "It varies by package and is set out day by day in the itinerary. Kathmandu–Pokhara is five to six hours by road or 25 minutes by air; Kathmandu–Chitwan is five to six hours. Sightseeing days involve short hops between sites rather than long drives, and the vehicle waits at every stop." },
  { question: "Can we swap the road transfer for a flight?", answer: "Yes on the Kathmandu–Pokhara leg, which is the one most people ask about. It is offered as an add-on rather than included because the drive along the Trishuli is genuinely scenic and many travellers prefer it. Tell us at booking and we will price it in." },
  { question: "Are the hotels flexible?", answer: "Entirely. The standard is three-star and centrally located, and we can move you up to four- or five-star properties, boutique heritage hotels or resorts on request. Room upgrades and single supplements are quoted at booking rather than added later." },
  { question: "Is this suitable for children or older travellers?", answer: "Most of these packages are, and several are built for exactly that. The sightseeing is vehicle-based with short walks, and the guide adjusts the pace. Tell us about mobility limits, and we will substitute sites with heavy stairs and arrange assistance where it helps." },
  { question: "Do we need travel insurance?", answer: "Yes, and we ask for the policy number before departure. Medical cover and emergency evacuation are the parts that matter; if the package includes a flight to altitude or an adventure activity, check that your policy does not exclude it." },
  { question: "Can the itinerary be customised?", answer: "These are private tours, so yes. Add or drop days, change the hotels, swap a monument for a hike, extend into a trek — all of it is straightforward if you tell us before the permits and bookings are made. Small changes on the day are up to your guide." },
  { question: "What happens if a domestic flight is cancelled?", answer: "We rebook you on the next available service and, where the delay would break the itinerary, substitute a road transfer or reorder the days. Weather cancellations are commonest in the monsoon and in winter fog; the itineraries carry enough slack to absorb one." },
  { question: "How large are the groups?", answer: "These are private departures — the group is you and whoever you book with, with your own guide and vehicle. Group size affects only the per-person price, which drops as the party grows, and the vehicle is sized to match." },
];

const packageInclusions = (o: {
  flights?: string[];
  transport: string[];
  accommodation: string[];
  meals?: string[];
  entrance: string;
  extra?: string[];
}) => ({
  airportTransfer: true,
  flights: o.flights,
  transport: o.transport,
  accommodation: o.accommodation,
  meals: o.meals,
  entrance: o.entrance,
  guide: "Government-licensed English-speaking guide throughout the tour.",
  extra: o.extra,
});

const packageExclusions = {
  meals: "Lunch and dinner in Kathmandu and Pokhara, where the choice is better left to you.",
  extra: ["Monument photography fees and offerings.", "Optional adventure activities and upgrades."],
};

export const kathmanduPokharaTour: Tour = {
  region: REGION,
  price: 545,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [84.6, 28.0],
  zoom: 8.5,
  content: {
    slug: "kathmandu-pokhara-tour",
    title: "Kathmandu & Pokhara Tour",
    overview:
      "<p>Nepal's two cities in one week, which for most first visits is the right shape of trip. <strong>Kathmandu</strong> gives the medieval half — three royal squares, two great stupas and the cremation ghats at Pashupatinath — and <strong>Pokhara</strong> gives the mountains, a lake and a slower pace to recover in.</p><p>Between them the tour crosses the country on the <strong>Prithvi Highway</strong> along the Trishuli river, with a night at <strong>Nagarkot (2,175 m)</strong> on the valley rim for the Himalayan sunrise and a dawn at <strong>Sarangkot</strong> above Pokhara for the Annapurnas. Six nights, no trekking, and both ends of what Nepal does best.</p>",
    highlights: [
      ["The Kathmandu Valley's UNESCO Sites", "Durbar Squares, Swayambhunath, Boudhanath and Pashupatinath with a licensed guide."],
      ["Nagarkot Sunrise", "A night on the eastern valley rim at 2,175 m for the Himalayan dawn."],
      ["Sarangkot at First Light", "Dhaulagiri, Annapurna South and Machhapuchhre over Phewa Lake."],
      ["Phewa Lake and the Peace Pagoda", "A rowing boat to the Tal Barahi temple and the ridge stupa above it."],
      ["The Trishuli Highway", "The drive between the two cities through gorge country, with a rafting option."],
    ],
    sections: PACKAGE_SECTIONS,
    faqs: PACKAGE_FAQS,
    inclusions: packageInclusions({
      transport: ["Private air-conditioned vehicle for the full itinerary, including the Kathmandu–Pokhara transfer."],
      accommodation: ["Three nights in Kathmandu, one at Nagarkot and two in Pokhara, all with breakfast."],
      entrance: "All monument entry fees in the Kathmandu valley and Pokhara, including the seven UNESCO sites.",
      extra: ["Rowing boat on Phewa Lake to the Tal Barahi temple."],
    }),
    exclusions: packageExclusions,
    addons: [
      { title: "Kathmandu–Pokhara Flight", description: "Replace the road transfer with the 25-minute mountain flight in one or both directions.", unit: "person", pricePerUnit: 115 },
      { title: "Paragliding from Sarangkot", description: "A tandem paragliding flight from Sarangkot on the Pokhara morning, landing beside Phewa Lake.", unit: "person", pricePerUnit: 95 },
    ],
    fixedDepartureDay: "sunday",
    itineraryDescription: "Seven days across Nepal's two cities, with a Nagarkot sunrise on the valley rim and a Sarangkot dawn over the Annapurnas.",
    inExDescription: "Airport transfers, a private vehicle throughout, six hotel nights with breakfast, all monument entry fees, the Phewa Lake boat and a licensed guide are included, while international flights, visa, insurance, city meals and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Kathmandu & Pokhara Tour – 7 Days in Nepal's Two Cities",
      description: "A seven-day Kathmandu and Pokhara tour with the valley's UNESCO sites, a Nagarkot sunrise and dawn over the Annapurnas from Sarangkot.",
      keywords: "Kathmandu Pokhara tour, Nepal 7 day tour, Nagarkot sunrise, Sarangkot Pokhara, Nepal tour package",
      tags: "Nepal Tour Packages, Kathmandu, Pokhara, Sightseeing, Nepal Tours",
    },
  },
  days: [
    arrival("Your guide meets you at the hotel in the early evening to walk through the week: three days in the valley, the drive west, and two nights in Pokhara with a mountain dawn at each end."),
    {
      title: "Kathmandu — Swayambhunath, Durbar Square and Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "<strong>Swayambhunath</strong> first, up the eastern stairway to the hilltop stupa with its painted eyes and the whole valley below in the morning haze. The macaques are numerous and unbothered by visitors.",
        "Down into the old city for <strong>Kathmandu Durbar Square</strong>: the Malla palace, the Taleju temple, and the <strong>Kumari Ghar</strong> where the living goddess appears at her window. Your guide will explain what the 2015 earthquake took and how the rebuilding has been done, which is much of the square's current story.",
        "After lunch the day ends at <strong>Boudhanath</strong>, the largest stupa in Nepal. Arrive in the late afternoon and walk the clockwise <em>kora</em> with the Tibetan community as the butter lamps are lit, then take a rooftop table above the crowd.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Patan, Pashupatinath and drive to Nagarkot (2,175 m)",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: NAGARKOT_PLACE,
      ...NAGARKOT,
      html: p(
        "<strong>Patan Durbar Square</strong> in the morning — the stone Krishna Mandir, the sunken royal bath at Sundari Chowk and the <strong>Patan Museum</strong>, which is the best hour available anywhere for understanding Nepali iconography.",
        "The lanes behind hold the metalworkers' courtyards, where bronze is still cast by the lost-wax method, and the <strong>Golden Temple</strong> with its rota of boy monks.",
        "In the afternoon, <strong>Pashupatinath</strong> on the Bagmati. Non-Hindus view the golden pagoda from the eastern terrace, which also overlooks the cremation ghats where funerals take place through the day.",
        "The road then climbs east out of the valley to <strong>Nagarkot (2,175 m)</strong> on the rim, arriving in time for sunset over the ridges. Overnight at Nagarkot.",
      ),
    },
    {
      title: "Nagarkot sunrise, Bhaktapur and drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Up before dawn for the <strong>Nagarkot</strong> viewpoint. On a clear morning the range runs from Ganesh Himal and Langtang across to the Everest massif on the eastern horizon, with the valley under mist below.",
        "After breakfast the descent stops at <strong>Bhaktapur</strong>, the best preserved of the three cities and car-free inside its walls: the 55-window palace, the Golden Gate, the five-tiered Nyatapola and the potters' square where clay is still thrown and dried in the open. Try the <em>juju dhau</em>.",
        "The afternoon is the long drive west on the <strong>Prithvi Highway</strong>, following the Trishuli through gorge country with terraced hillsides above and rafts on the water below.",
        "<strong>Pokhara (822 m)</strong> arrives in the early evening on the shore of Phewa Lake. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise and the Pokhara valley",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "An early drive up to <strong>Sarangkot (1,592 m)</strong>. The light hits <strong>Dhaulagiri (8,167 m)</strong> first, then works east along Annapurna South, Hiunchuli and the fishtail of <strong>Machhapuchhre</strong>, with Phewa Lake in mist below.",
        "Back for breakfast, then the rest of the valley: <strong>Devi's Fall</strong> where the Pardi Khola vanishes into a sinkhole, and the <strong>Gupteshwor Mahadev</strong> cave opposite with its natural lingam.",
        "The <strong>International Mountain Museum</strong> after lunch is better than most visitors expect — the history of Himalayan climbing and a genuinely good section on the peoples of the range.",
        "The afternoon finishes with a rowing boat across <strong>Phewa Lake</strong> to the <strong>Tal Barahi</strong> temple on its island. Overnight in Pokhara.",
      ),
    },
    {
      title: "Pokhara at leisure and drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A slower morning. The <strong>World Peace Pagoda</strong> on the ridge across the lake is the best remaining view, reached by boat and a twenty-minute walk through forest, or you can simply take the lakeside at your own pace.",
        "Anyone wanting the mountains one more time can add a <strong>paragliding</strong> flight from Sarangkot, which lands beside the lake.",
        "The drive east on the Prithvi Highway takes most of the afternoon with a lunch stop, or the 25-minute flight can be substituted.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the evening, with Thamel for last shopping. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free for anything the week missed — Boudhanath again at first light is the usual choice — or for the shops around Thamel and Ason."),
  ],
};

export const glimpseOfNepalTour: Tour = {
  region: REGION,
  price: 425,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [85.0, 27.8],
  zoom: 9,
  content: {
    slug: "glimpse-of-nepal-tour",
    title: "Glimpse of Nepal Tour – 5 Days",
    overview:
      "<p>Five days is not long, and this tour is built around admitting that. Rather than racing the length of the country it stays in the <strong>Kathmandu valley</strong> and its rim, covering the UNESCO monuments properly, then adds one night at <strong>Nagarkot (2,175 m)</strong> for the Himalaya and one day in the medieval towns of <strong>Dhulikhel</strong> and <strong>Panauti</strong> that almost no short itinerary includes.</p><p>It suits travellers with a stopover, a business trip with days attached, or anyone who would rather see four places well than eight badly. Everything is within ninety minutes of the hotel, so the days are unhurried and there is no dawn transfer or domestic flight to worry about.</p>",
    highlights: [
      ["The Valley's UNESCO Sites", "Three Durbar Squares, two great stupas and Pashupatinath, covered properly."],
      ["Nagarkot Sunrise", "One night on the rim at 2,175 m for the Himalayan dawn."],
      ["Dhulikhel and Panauti", "Two medieval towns on the eastern rim that short itineraries always skip."],
      ["No Flights, No Long Drives", "Everything within ninety minutes of your hotel."],
      ["Built for a Short Stay", "Five days that feel unhurried rather than compressed."],
    ],
    sections: PACKAGE_SECTIONS,
    faqs: PACKAGE_FAQS,
    inclusions: packageInclusions({
      transport: ["Private air-conditioned vehicle for the full itinerary."],
      accommodation: ["Three nights in Kathmandu and one at Nagarkot, with breakfast."],
      entrance: "All monument entry fees in the Kathmandu valley, including the seven UNESCO sites.",
    }),
    exclusions: packageExclusions,
    fixedDepartureDay: "monday",
    itineraryDescription: "Five days in the Kathmandu valley and its rim, with the UNESCO monuments, a Nagarkot sunrise and the towns of Dhulikhel and Panauti.",
    inExDescription: "Airport transfers, a private vehicle throughout, four hotel nights with breakfast, all monument entry fees and a licensed guide are included, while international flights, visa, insurance, city meals and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Glimpse of Nepal Tour – 5 Days in the Kathmandu Valley",
      description: "A five-day Nepal tour covering the Kathmandu valley's UNESCO sites, a Nagarkot sunrise and the medieval towns of Dhulikhel and Panauti.",
      keywords: "Glimpse of Nepal tour, Nepal 5 day tour, short Nepal tour, Kathmandu valley tour, Nagarkot Dhulikhel",
      tags: "Nepal Tour Packages, Kathmandu, Short Tour, Sightseeing, Nepal Tours",
    },
  },
  days: [
    arrival("Your guide joins you in the evening to set out the five days: two in the valley's monuments, one on the eastern rim, and one in the old towns beyond it."),
    {
      title: "Kathmandu — Swayambhunath, Durbar Square, Pashupatinath and Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "The full valley day, starting at <strong>Swayambhunath</strong> before the crowds — the hilltop stupa, the painted eyes and the best single view of the city.",
        "Then <strong>Kathmandu Durbar Square</strong>: the Malla palace, Taleju, the Kumari Ghar and the reconstruction still going on around Kasthamandap, the twelfth-century pavilion the city takes its name from.",
        "<strong>Pashupatinath</strong> in the afternoon, viewed from the terrace across the Bagmati, with the cremation ghats below and the sadhu compound above.",
        "The day closes at <strong>Boudhanath</strong> at dusk, walking the kora as the lamps are lit. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Patan, Bhaktapur and drive to Nagarkot (2,175 m)",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: NAGARKOT_PLACE,
      ...NAGARKOT,
      html: p(
        "<strong>Patan Durbar Square</strong> in the morning — the Krishna Mandir carved entirely in stone, the royal palace and the museum inside it, and the bronze casters' courtyards behind.",
        "East after lunch to <strong>Bhaktapur</strong>, car-free inside its walls, for the 55-window palace, the Golden Gate, the Nyatapola pagoda and the potters' square.",
        "The road then climbs to <strong>Nagarkot (2,175 m)</strong> on the valley rim, arriving for sunset over the ridges.",
        "Overnight at Nagarkot.",
      ),
    },
    {
      title: "Nagarkot sunrise, Changunarayan, Dhulikhel and Panauti",
      elevation: "1,550 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...DHULIKHEL,
      html: p(
        "Sunrise from the <strong>Nagarkot</strong> viewpoint, with the range from Ganesh Himal and Langtang across to Everest on a clear morning.",
        "The descent stops at <strong>Changunarayan</strong>, founded in the fourth century and the oldest standing temple in Nepal, with stone sculpture older than anything in the squares.",
        "<strong>Dhulikhel</strong> is next — a Newar town on the eastern rim with an old quarter of brick and timber houses, a working temple square and a mountain view most visitors never see because the tour buses turn back at Bhaktapur.",
        "The afternoon drops to <strong>Panauti</strong>, at the confluence of two rivers, whose thirteenth-century Indreshwar Mahadev temple is among the oldest in Nepal and whose old quarter has barely changed.",
        "Back to <strong>Kathmandu</strong> in the evening. Overnight in Kathmandu.",
      ),
    },
    departure("A free morning in Thamel and the Ason bazaar for anything you want to take home, with the vehicle and guide available if you would rather see one more site."),
  ],
};

export const bestOfNepalTour: Tour = {
  region: REGION,
  price: 1250,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [84.3, 27.8],
  zoom: 7.5,
  content: {
    slug: "best-of-nepal-tour",
    title: "Best of Nepal Tour",
    overview:
      "<p>Ten days covering the four things Nepal is known for: the <strong>medieval cities</strong> of the Kathmandu valley, the <strong>Himalaya</strong> from the valley rim and from Pokhara, the <strong>jungle</strong> at Chitwan, and the <strong>birthplace of the Buddha</strong> at Lumbini. It is the fullest circuit that can be done comfortably without trekking.</p><p>The route runs Kathmandu — Nagarkot — Pokhara — Lumbini — Chitwan — Kathmandu, using a domestic flight at one end to keep the driving reasonable. Each stop gets two nights rather than one, which is the difference between visiting a place and passing through it, and the pace allows a free afternoon in both Pokhara and Chitwan.</p>",
    highlights: [
      ["Four Sides of Nepal", "Medieval cities, Himalayan dawns, the Terai jungle and the Buddha's birthplace."],
      ["Chitwan Jungle Safari", "Two nights at a lodge with jeep, canoe and walking safaris in the national park."],
      ["Lumbini", "The Maya Devi temple, the Ashokan pillar and the international monastic zone."],
      ["Two Mountain Sunrises", "Nagarkot on the valley rim and Sarangkot above Phewa Lake."],
      ["Two Nights Everywhere", "Enough time in each place to see it rather than drive through it."],
    ],
    sections: PACKAGE_SECTIONS,
    faqs: PACKAGE_FAQS,
    inclusions: packageInclusions({
      flights: ["Bhairahawa – Kathmandu domestic flight at the end of the circuit."],
      transport: ["Private air-conditioned vehicle for the full overland route, including all park and site transfers."],
      accommodation: ["Nine nights in hotels, a jungle lodge and a Lumbini guesthouse, all with breakfast."],
      meals: ["Full board at the Chitwan jungle lodge for the duration of the stay."],
      entrance: "All monument, national park and site entry fees, including the seven UNESCO sites, Lumbini and Chitwan.",
      extra: ["Jeep safari, dugout canoe trip and guided jungle walk in Chitwan.", "Rowing boat on Phewa Lake."],
    }),
    exclusions: packageExclusions,
    addons: [
      { title: "Kathmandu–Pokhara Flight", description: "Replace the road transfer with the 25-minute mountain flight.", unit: "person", pricePerUnit: 115 },
    ],
    fixedDepartureDay: "saturday",
    itineraryDescription: "Ten days across Nepal — the Kathmandu valley, Nagarkot, Pokhara, Lumbini and a Chitwan jungle safari.",
    inExDescription: "Airport transfers, a private vehicle throughout, the Bhairahawa flight, nine nights' accommodation, full board at Chitwan, all entry fees, safari activities and a licensed guide are included, while international flights, visa, insurance, city meals and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Best of Nepal Tour – 10 Days Kathmandu, Pokhara, Lumbini and Chitwan",
      description: "A ten-day Best of Nepal tour covering the Kathmandu valley, Nagarkot, Pokhara, Lumbini and a Chitwan jungle safari.",
      keywords: "Best of Nepal tour, Nepal 10 day tour, Kathmandu Pokhara Chitwan Lumbini, Nepal tour package, Nepal circuit tour",
      tags: "Nepal Tour Packages, Kathmandu, Pokhara, Chitwan, Lumbini, Nepal Tours",
    },
  },
  days: [
    arrival("Your guide joins you in the evening for the full briefing: the valley, the rim, Pokhara, the Buddha's birthplace and the jungle, over ten days and one domestic flight."),
    {
      title: "Kathmandu — Swayambhunath, Durbar Square, Pashupatinath and Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "<strong>Swayambhunath</strong> in the morning light, up the stairway to the hilltop stupa above the city.",
        "<strong>Kathmandu Durbar Square</strong> next — the Malla palace, the Kumari Ghar and the temples being rebuilt in original timber after 2015.",
        "<strong>Pashupatinath</strong> after lunch, from the terrace across the Bagmati, with the ghats and the sadhu compound.",
        "<strong>Boudhanath</strong> at dusk for the kora and the butter lamps. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Patan, Bhaktapur and drive to Nagarkot (2,175 m)",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: NAGARKOT_PLACE,
      ...NAGARKOT,
      html: p(
        "<strong>Patan Durbar Square</strong> and its museum in the morning — the stone Krishna Mandir, the sunken royal bath at Sundari Chowk, and a collection of Hindu and Buddhist bronzes that is the best-labelled in South Asia. The lanes behind hold the metalworkers' courtyards where bronze is still cast by the lost-wax method.",
        "<strong>Bhaktapur</strong> after lunch, car-free inside its walls: the 55-window palace, the Golden Gate, the five-tiered Nyatapola and the potters' square where clay is thrown on hand wheels and dried in the open. A bowl of <em>juju dhau</em>, the king of curds, is worth stopping for.",
        "The road then climbs east out of the valley to <strong>Nagarkot (2,175 m)</strong> on the rim, arriving in time for sunset over the ridges with the Himalaya on the northern horizon. Overnight at Nagarkot.",
      ),
    },
    {
      title: "Nagarkot sunrise and drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Sunrise from the rim — Ganesh Himal, Langtang and, on the clearest mornings, the Everest massif on the eastern horizon.",
        "After breakfast the long drive west on the <strong>Prithvi Highway</strong>, following the Trishuli through gorge country with a lunch stop at a riverside restaurant.",
        "<strong>Pokhara (822 m)</strong> in the late afternoon, on the shore of Phewa Lake with the Annapurnas behind it.",
        "The evening is free on the lakeside. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise and the Pokhara valley",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "An early drive to <strong>Sarangkot (1,592 m)</strong> for the Annapurna dawn — Dhaulagiri first, then Annapurna South, Hiunchuli and Machhapuchhre.",
        "Back for breakfast, then <strong>Devi's Fall</strong>, the <strong>Gupteshwor cave</strong> and the <strong>International Mountain Museum</strong>.",
        "The afternoon is a rowing boat across <strong>Phewa Lake</strong> to the Tal Barahi temple, and the rest of the day is yours.",
        "Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive to Lumbini (150 m)",
      elevation: "150 m",
      accommodation: "Lumbini",
      placeDescription: LUMBINI_PLACE,
      ...LUMBINI,
      html: p(
        "South-west out of the hills on the Siddhartha Highway, dropping through the Butwal gorge onto the Terai plains — five to six hours with a lunch stop.",
        "The change is total: flat, hot, intensely green farmland after two days of mountains.",
        "In the late afternoon the sacred garden at <strong>Lumbini (150 m)</strong>. The <strong>Maya Devi temple</strong> stands over the marker stone identifying the birthplace, with the <strong>Ashokan pillar</strong> beside it — erected in 249 BCE, and the oldest evidence that this is the place.",
        "Pilgrims sit under the Bodhi tree by the Puskarini pool into the evening. Overnight at Lumbini.",
      ),
    },
    {
      title: "Lumbini monastic zone and drive to Chitwan (150 m)",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "A morning in the <strong>monastic zone</strong>, where more than twenty countries have each built a monastery in their own tradition — the Thai wat, the Myanmar pagoda, the German-built Great Lotus Stupa. Walking between them shows how differently one teaching is expressed.",
        "The drive east along the Terai to <strong>Chitwan</strong> takes most of the afternoon.",
        "You arrive at the jungle lodge in time for a briefing from the naturalists and a first walk to the <strong>Rapti</strong> riverbank for sunset, with the wall of sal forest across the water.",
        "Overnight at Chitwan.",
      ),
    },
    {
      title: "Full day safari in Chitwan National Park",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "Tea before first light and down to the river for a <strong>dugout canoe</strong>, drifting past gharial and mugger crocodiles with the mist coming off the water. The best birding hour of the trip.",
        "The canoe lands inside the park for a <strong>guided walk</strong> with two naturalists — slow and quiet, reading tracks, with rhino a real possibility at close quarters.",
        "The middle of the day is deliberately free at the lodge; it is hot and the animals are lying up.",
        "The afternoon <strong>jeep safari</strong> runs into the grasslands and river crossings until dusk, which is when rhino come out to feed. Chitwan holds around 700 of them and most visitors meet several.",
        "A Tharu stick dance after dinner. Overnight at Chitwan.",
      ),
    },
    {
      title: "Morning bird walk and drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A last early <strong>bird walk</strong> along the river with the naturalist — more than 500 species have been recorded in the park.",
        "Breakfast at the lodge, then the vehicle leaves mid-morning, climbing off the plains at Mugling and following the Trishuli back into the hills.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the late afternoon.",
        "The evening is free, and Thamel is the place for last shopping. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free. Boudhanath at first light, when the local community walks the kora before work, is the best last hour in the city."),
  ],
};

export const nepalCulturalTour: Tour = {
  region: REGION,
  price: 895,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [85.2, 27.7],
  zoom: 8.5,
  content: {
    slug: "nepal-cultural-tour",
    title: "Nepal Cultural Tour",
    overview:
      "<p>A tour built around <strong>living culture</strong> rather than monuments. It covers the UNESCO sites, because they are unmissable, but spends as much time on the things that make the valley a working Newar civilisation: the bronze casters and thangka painters of Patan, the potters and woodcarvers of Bhaktapur, the mustard-oil mills of Khokana, and a Newar food walk through the old bazaar.</p><p>Beyond the valley the route reaches <strong>Bandipur</strong>, a restored Newar trading town on a clifftop ridge, and a night in a <strong>Gurung homestay</strong> at Ghalegaun facing the Annapurna range. Eight days, and by the end you will know the difference between a Newar, a Gurung and a Tamang house — which is more than most visitors take away.</p>",
    highlights: [
      ["Craft Workshops, Not Just Squares", "Bronze casting, thangka painting, woodcarving and pottery with the people doing it."],
      ["A Newar Food Walk", "Chatamari, bara, choila and samay baji in the old bazaar with a guide who orders in Newari."],
      ["Bandipur", "A car-free Newar trading town on a ridge, restored by its own residents."],
      ["A Gurung Homestay", "A night with a family at Ghalegaun, facing Manaslu and the Annapurnas."],
      ["Bungamati and Khokana", "Two working Newar villages with woodcarvers and mustard-oil mills."],
    ],
    sections: PACKAGE_SECTIONS,
    faqs: PACKAGE_FAQS,
    inclusions: packageInclusions({
      transport: ["Private air-conditioned vehicle for the full route through the valley, Bandipur and Lamjung."],
      accommodation: ["Four nights in Kathmandu, one at a Bandipur heritage inn and two in a Ghalegaun homestay, with breakfast."],
      meals: ["All meals at the Ghalegaun homestay, cooked by your host family.", "One Newar food walk with eight to nine tasting stops."],
      entrance: "All monument entry fees in the Kathmandu valley, including the seven UNESCO sites.",
      extra: ["Visits to working bronze casting, thangka and woodcarving workshops.", "Gurung cultural dance evening at Ghalegaun."],
    }),
    exclusions: packageExclusions,
    fixedDepartureDay: "friday",
    itineraryDescription: "Eight days of living Newar and Gurung culture — craft workshops, a food walk, Bandipur and a homestay at Ghalegaun.",
    inExDescription: "Airport transfers, a private vehicle throughout, seven nights' accommodation including a homestay, village meals, the food walk, all monument fees, workshop visits and a licensed guide are included, while international flights, visa, insurance, city meals and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Nepal Cultural Tour – Newar Crafts, Food and a Gurung Homestay",
      description: "An eight-day Nepal cultural tour covering Newar craft workshops, a Kathmandu food walk, Bandipur and a Gurung homestay at Ghalegaun.",
      keywords: "Nepal cultural tour, Newar culture tour, Nepal craft tour, Ghalegaun homestay, Bandipur, Kathmandu food tour",
      tags: "Nepal Tour Packages, Cultural Tour, Kathmandu, Homestay, Nepal Tours",
    },
  },
  days: [
    arrival("Your guide joins you in the evening to set out the eight days — the valley's craft quarters, a food walk, the Newar town of Bandipur and two nights with a Gurung family."),
    {
      title: "Kathmandu — Swayambhunath, Durbar Square and a Newar food walk",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "<strong>Swayambhunath</strong> in the morning, then <strong>Kathmandu Durbar Square</strong> with the Malla palace, the Kumari Ghar and the reconstruction work around Kasthamandap.",
        "The afternoon is free to rest, because the evening is the good part.",
        "At dusk a <strong>Newar food walk</strong> through the lanes around <strong>Ason</strong> and <strong>Indra Chowk</strong> — eight or nine stops at family stalls with no English menu: <em>chatamari</em>, <em>bara</em>, <em>choila</em>, buffalo <em>momo</em>, <em>samay baji</em>, <em>lakhamari</em> and a taste of <em>chhyang</em>.",
        "Your guide orders in Newari, which reliably produces a better plate than pointing. You will not need dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Patan's craft courtyards and the Golden Temple",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PATAN,
      html: p(
        "A full day in <strong>Patan</strong>, which is where the valley's craft tradition is most alive.",
        "The morning is <strong>Durbar Square</strong> and the <strong>Patan Museum</strong> — the best hour anywhere for learning to read Nepali iconography, which changes how you see everything afterwards.",
        "The afternoon goes behind the square into the <em>bahals</em>: the <strong>Golden Temple</strong> with its rota of boy monks, and then the metalworking quarter where <strong>lost-wax bronze casting</strong> is done the way it has been for a thousand years. You watch a piece being poured, and the workshop explains the commission it is for.",
        "A <strong>thangka</strong> studio follows, where painters grind mineral pigment and work to iconometric grids that have not changed in centuries.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Bungamati, Khokana and Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...BUNGAMATI,
      html: p(
        "South out of the city to <strong>Bungamati</strong>, a working Newar village built around the shikhara temple of <strong>Rato Machhendranath</strong>, the rain god whose chariot festival is the longest in the valley. The woodcarving workshops here supply temple restorations across Nepal.",
        "A twenty-minute walk between paddy fields reaches <strong>Khokana</strong>, laid out along a single wide street and known for <strong>mustard oil</strong>, still pressed in heavy wooden mills you can hear from the road.",
        "Both villages were flattened in 2015 and rebuilt by their own residents in traditional brick and timber, which your guide will walk you through.",
        "The day ends at <strong>Boudhanath</strong> at dusk for the kora, and in the monastery workshops behind it. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Bhaktapur, Changunarayan and drive to Bandipur (1,030 m)",
      elevation: "1,030 m",
      accommodation: "Bandipur",
      placeDescription: "A restored Newar trading town on a clifftop ridge above the Marsyangdi valley.",
      ...BANDIPUR,
      html: p(
        "A morning in <strong>Bhaktapur</strong>, car-free inside its walls: the 55-window palace, the Golden Gate, the Nyatapola, and the <strong>potters' square</strong> where clay is thrown on hand wheels and dried in the open. Sit down at a wheel if the potter offers.",
        "<strong>Changunarayan</strong> on the ridge above, the oldest standing temple in Nepal, with fifth-century stone sculpture in its courtyard.",
        "The afternoon drives west on the Prithvi Highway and climbs to <strong>Bandipur (1,030 m)</strong> — a Newar trading town from the old Kathmandu–Tibet route, stranded when the highway bypassed it and since restored by its residents. The main street is <strong>car-free</strong> and the shopfronts are original.",
        "Sunset from the Tundikhel viewpoint at the edge of the ridge. Overnight at Bandipur.",
      ),
    },
    {
      title: "Bandipur and drive to Ghalegaun (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Ghalegaun",
      placeDescription: "A Gurung village at 2,100 m on a Lamjung ridge, facing the Annapurna range.",
      ...GHALEGAUN,
      html: p(
        "A morning in <strong>Bandipur</strong> before the day-trippers arrive — the bazaar, the Bindebasini temple, and the Silkworm farm the town ran when it was a trading centre.",
        "The drive turns north at Dumre through <strong>Besisahar</strong> and climbs a rough hill road onto the Lamjung ridge.",
        "<strong>Ghalegaun (2,100 m)</strong> arrives with the whole Annapurna range across the valley. This is the village that started community homestay tourism in Nepal, and it still runs on a rota of some forty households with a community fund.",
        "Your host family shows you the house; the afternoon is the village and its Gurung museum. After dinner in the kitchen the village usually dances — <em>Ghatu</em> and <em>Krishna Charitra</em>, performed for themselves as much as for you.",
        "Overnight in a homestay at Ghalegaun.",
      ),
    },
    {
      title: "Sunrise at Ghalegaun and a day in the village",
      elevation: "2,100 m",
      accommodation: "Ghalegaun",
      placeDescription: "A Gurung village at 2,100 m on a Lamjung ridge, facing the Annapurna range.",
      ...GHALEGAUN,
      html: p(
        "Up before the sun for the viewpoint above the village. The light works east to west along <strong>Manaslu (8,163 m)</strong>, <strong>Himalchuli</strong>, <strong>Lamjung Himal</strong>, <strong>Annapurna II</strong> and <strong>Machhapuchhre</strong>, with the Marsyangdi valley in shadow below.",
        "The day belongs to the village: the terraces, the water mill, the school, and whatever the farming calendar has people doing. If you want to help with the millet or the buffalo, ask through your guide and you will be put to work.",
        "The afternoon walk goes along the ridge to <strong>Ghanpokhara</strong>, a smaller and older Gurung village with the same view, and back through rhododendron forest.",
        "A second evening in your host family's kitchen, which is where the trip's best conversations happen. Overnight in a homestay at Ghalegaun.",
      ),
    },
    {
      title: "Drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Farewells with your host family after breakfast — after two nights in someone's kitchen these take a while.",
        "The vehicle drops off the ridge to Besisahar and joins the Prithvi Highway at Dumre for the drive east, around six hours with a lunch stop.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the late afternoon.",
        "The evening is free, and Thamel and the Ason bazaar are the place for anything you saw being made this week and want to take home. Overnight in Kathmandu.",
      ),
    },
    departure("A last free morning. The craft shops around Patan Durbar Square sell directly from the workshops you visited, which is a better way to buy than the tourist strip."),
  ],
};

/** Every tour in the Nepal Tour Packages region. */
export const packageTours: Tour[] = [
  kathmanduValleyTour,
  kathmanduPokharaTour,
  glimpseOfNepalTour,
  bestOfNepalTour,
  nepalCulturalTour,
];
