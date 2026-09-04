/**
 * Region: Nepal Day Tours — the Kathmandu valley half.
 *
 * Merges "Nepal Day Tours" and "Day Tours from Kathmandu". Where the source
 * list had the same outing twice — "Kathmandu Day Tour" and "Kathmandu City
 * Sightseeing Tour", "Chandragiri Cable Car Tour" and "Chandragiri Hill Day
 * Tour" — it appears once here.
 */
import { KATHMANDU, KTM_PLACE, p, type Tour } from "./types";

const REGION = "Nepal Day Tours";

const DURBAR = { lng: 85.3065, lat: 27.7045 };
const SWAYAMBHU = { lng: 85.2900, lat: 27.7148 };
const BOUDHA = { lng: 85.3620, lat: 27.7215 };
const PASHUPATI = { lng: 85.3486, lat: 27.7104 };
const BHAKTAPUR = { lng: 85.4280, lat: 27.6722 };
const PATAN = { lng: 85.3250, lat: 27.6727 };
const CHANGUNARAYAN = { lng: 85.4280, lat: 27.7167 };
const CHANDRAGIRI = { lng: 85.2280, lat: 27.6690 };
const PHARPING = { lng: 85.2600, lat: 27.5900 };
const BUNGAMATI = { lng: 85.3000, lat: 27.6180 };
const AIRPORT = { lng: 85.3560, lat: 27.6993 };

const VALLEY_SECTIONS = [
  {
    heading: "Getting Around the Valley",
    content:
      "<p>Everything on these tours is reached by <strong>private vehicle with a driver</strong>, which matters more in Kathmandu than most cities — the traffic is heavy, the one-way system changes, and parking near the monuments is difficult. Your guide travels with you and the vehicle waits while you walk each site.</p><p>Distances look small on a map and take longer than they should. Boudhanath to Swayambhunath is nine kilometres and forty minutes in the middle of the day. The itineraries are sequenced to work with the traffic rather than against it, which is why the order of sites is not always the obvious one.</p>",
  },
  {
    heading: "Entrance Fees and Photography",
    content:
      "<p>Every UNESCO site in the valley charges foreign visitors an entry fee, and they are <strong>included in your tour price</strong> — Kathmandu, Patan and Bhaktapur Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath and Changunarayan. Keep the ticket; Bhaktapur's is valid for several days and can be extended free of charge if you tell the office.</p><p>Photography is allowed in the squares and courtyards but not in most inner sanctums, and never at the Pashupatinath cremation ghats. Ask before photographing people, particularly sadhus, who will usually ask for money afterwards — agree it first or decline politely.</p>",
  },
  {
    heading: "What to Wear and Bring",
    content:
      "<p>Comfortable shoes that slip off easily, since you will remove them at temples. Modest clothing covering shoulders and knees is expected at religious sites and appreciated everywhere. <strong>Leather belts and bags</strong> are not permitted inside some Hindu shrines, so carry a cloth bag on temple days.</p><p>Bring sunscreen, a hat and water; the valley sits at 1,400 m and the sun is stronger than the temperature suggests. Small notes are useful for offerings, tea and the occasional donation box. A mask is worth having between January and April when the valley air is at its worst.</p>",
  },
  {
    heading: "Best Time for a Day Tour",
    content:
      "<p><strong>October to March</strong> is the most comfortable, with clear air, mild days and, from the valley rim, mountain views. Early morning is the best time at every site — Boudhanath, Pashupatinath and the Durbar Squares are all at their most alive and least crowded before nine.</p><p>The monsoon from June to September brings heavy afternoon rain, though mornings are often clear and the light is dramatic. Festival dates transform the sites they belong to: Indra Jatra in September fills Kathmandu Durbar Square, Bisket Jatra takes over Bhaktapur in April, and Maha Shivaratri brings a hundred thousand pilgrims to Pashupatinath.</p>",
  },
];

const VALLEY_FAQS = [
  { question: "How much walking is involved?", answer: "Two to four hours spread across the day, on uneven flagstones and with stairs at Swayambhunath and Changunarayan. The vehicle takes you between sites and waits, so you are never far from a seat. Tell us if stairs are a problem and we will adjust which sites we visit." },
  { question: "Are entrance fees included?", answer: "Yes — every monument fee on the itinerary is in the price, including the UNESCO site tickets which are the largest part of the cost. You only need cash for offerings, tea, tips and anything you buy." },
  { question: "Can non-Hindus enter Pashupatinath?", answer: "The complex, yes; the main pagoda temple, no — that is open to Hindus only. Everyone else views it from the terrace across the Bagmati, which is where the guide takes you and which gives the better overall view of the site in any case." },
  { question: "Is the 2015 earthquake damage still visible?", answer: "Yes, and your guide will explain it honestly. Kathmandu Durbar Square lost several temples and some are still being rebuilt with traditional joinery; Bhaktapur and Patan fared better. The reconstruction is itself worth seeing — much of it uses the original timber and the original methods." },
  { question: "Can the itinerary be changed?", answer: "Within reason, yes. These are private tours with your own vehicle, so if you would rather spend two hours in Bhaktapur than see a fourth temple, tell the guide on the day. Tell us in advance if you want something substantially different and we will rebuild the route." },
  { question: "Is lunch included?", answer: "Not usually, because most visitors prefer to choose. Your guide will suggest good local places near wherever you are and eat separately unless you invite them. Tell us at booking if you would rather have lunch built into the price." },
  { question: "What time does the tour start and finish?", answer: "Pickup is normally between 8 and 9 am and you are back at your hotel by late afternoon. Earlier starts are better in every respect — the light, the crowds and the traffic all improve — and we are happy to begin at seven if you are." },
  { question: "Are these tours suitable for children?", answer: "Yes, though the temple-heavy itineraries test the patience of younger children. The Chandragiri cable car, the Bungamati craft villages and the mountain flight work particularly well with families, and the guide will pitch the commentary accordingly." },
];

const valleyInclusions = (entrance: string, extra: string[] = []) => ({
  transport: ["Private air-conditioned vehicle with driver for the full day, including hotel pickup and drop-off."],
  entrance,
  guide: "Government-licensed English-speaking guide for the day.",
  extra: ["Bottled water in the vehicle.", ...extra],
});

const valleyExclusions = { domestic: true as const, meals: "Lunch and any meals not specified.", extra: ["Offerings, donations and camera fees at individual shrines."] };

export const kathmanduDayTour: Tour = {
  region: REGION,
  price: 75,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [85.32, 27.71],
  zoom: 12,
  content: {
    slug: "kathmandu-day-tour",
    title: "Kathmandu Day Tour – 1 Day",
    overview:
      "<p>A single day covering the four sites that define Kathmandu: <strong>Swayambhunath</strong> on its hill above the city, <strong>Kathmandu Durbar Square</strong> with the palace of the Malla kings and the house of the living goddess, <strong>Pashupatinath</strong> on the Bagmati, and <strong>Boudhanath</strong> at dusk when the Tibetan community walks the kora.</p><p>It is the standard first day in Nepal and it works because the four are genuinely different — a Buddhist stupa, a royal square, a Hindu cremation ground and a Tibetan pilgrimage circuit — rather than four versions of the same thing. With a private vehicle and a licensed guide the day is unhurried, and the order is arranged so you reach Boudhanath as the lamps are being lit.</p>",
    highlights: [
      ["Swayambhunath", "Climb to the 2,000-year-old hilltop stupa with its painted eyes over the whole valley."],
      ["Kathmandu Durbar Square", "The Malla palace complex, the Kumari's house and the temples still being rebuilt after 2015."],
      ["Pashupatinath", "Nepal's holiest Shiva temple on the Bagmati, with its ghats, sadhus and evening aarati."],
      ["Boudhanath at Dusk", "Join the kora at the largest stupa in Nepal as the butter lamps are lit."],
      ["A Licensed Guide All Day", "Someone to explain what you are looking at, which these sites badly need."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Entry fees for Swayambhunath, Kathmandu Durbar Square, Pashupatinath and Boudhanath."),
    exclusions: valleyExclusions,
    fixedDepartureDay: "daily" === "daily" ? "sunday" : "sunday",
    itineraryDescription: "One day covering Swayambhunath, Kathmandu Durbar Square, Pashupatinath and Boudhanath with a private vehicle and guide.",
    inExDescription: "A private vehicle with driver, a licensed guide and all four monument entry fees are included, while meals, offerings, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Kathmandu Day Tour – Swayambhunath, Durbar Square, Pashupatinath, Boudhanath",
      description: "A one-day Kathmandu sightseeing tour of Swayambhunath, Kathmandu Durbar Square, Pashupatinath and Boudhanath with a private guide.",
      keywords: "Kathmandu day tour, Kathmandu sightseeing, Swayambhunath Boudhanath tour, Pashupatinath tour, Kathmandu city tour",
      tags: "Day Tours, Kathmandu, Cultural Tour, UNESCO, Nepal Tours",
    },
  },
  days: [
    {
      title: "Swayambhunath, Durbar Square, Pashupatinath and Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...DURBAR,
      html: p(
        "Pickup from your hotel after breakfast. The day starts at <strong>Swayambhunath</strong>, climbing the eastern stairway past the carved votive stupas to the hilltop. The stupa is one of the oldest in Nepal, the painted eyes look out in four directions, and the platform gives the best single view of the valley. The macaques are numerous and will take food out of your hand if you let them.",
        "Down into the old city for <strong>Kathmandu Durbar Square</strong> — the Malla royal palace, the Taleju temple, the erotic carvings on the Jagannath struts and the <strong>Kumari Ghar</strong>, where the living goddess appears at her window a few times a day. Your guide will explain what the 2015 earthquake took and what has been rebuilt since, which is a large part of the square's current story.",
        "After lunch, <strong>Pashupatinath</strong> on the Bagmati. Non-Hindus view the golden pagoda from the eastern terrace, which also overlooks the <strong>cremation ghats</strong> where funerals take place through the day. It is confronting and entirely public, and the guide will brief you on how to behave. The sadhu compound and the 108 Shiva lingams sit above.",
        "The day finishes at <strong>Boudhanath</strong> in the late afternoon — the largest stupa in Nepal and the heart of its Tibetan community. Walk the clockwise <em>kora</em> as the butter lamps are lit and the monastery horns start, then take a rooftop table for tea above the crowd.",
        "Back at your hotel in the early evening.",
      ),
    },
  ],
};

export const sevenHeritageTour: Tour = {
  region: REGION,
  price: 110,
  difficulty: "easy",
  maxAltitude: 1541,
  center: [85.36, 27.7],
  zoom: 11,
  content: {
    slug: "seven-world-heritage-kathmandu-day-tour",
    title: "Seven World Heritage Kathmandu Day Tour – 1 Day",
    overview:
      "<p>The Kathmandu valley holds <strong>seven UNESCO World Heritage monument zones</strong>, listed together in 1979 — three royal squares at Kathmandu, Patan and Bhaktapur; two Buddhist stupas at Swayambhunath and Boudhanath; and two Hindu temple complexes at Pashupatinath and Changunarayan. This tour covers all seven in one long day.</p><p>It is ambitious and it moves quickly, which is the trade: you see the complete set rather than four of them properly. For visitors with one day in Nepal it is the right choice, and a private vehicle with a driver who knows the traffic makes it possible. Expect an early start, a long day and a great deal of walking on flagstones.</p>",
    highlights: [
      ["All Seven UNESCO Zones", "Every monument zone in the valley listing, in a single day."],
      ["Three Royal Durbar Squares", "Kathmandu, Patan and Bhaktapur — three kingdoms that competed by building."],
      ["Swayambhunath and Boudhanath", "The valley's two great stupas, one on a hill and one in a Tibetan quarter."],
      ["Pashupatinath and Changunarayan", "Nepal's holiest Shiva temple and its oldest standing shrine."],
      ["A Private Vehicle All Day", "The only realistic way to link seven sites across the valley."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Entry fees for all seven UNESCO monument zones."),
    exclusions: valleyExclusions,
    fixedDepartureDay: "monday",
    itineraryDescription: "A full day covering all seven UNESCO World Heritage monument zones of the Kathmandu valley.",
    inExDescription: "A private vehicle with driver, a licensed guide and all seven UNESCO entry fees are included, while meals, offerings, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Seven World Heritage Kathmandu Day Tour – All UNESCO Sites",
      description: "A one-day tour of all seven UNESCO World Heritage monument zones in the Kathmandu valley, with a private vehicle and licensed guide.",
      keywords: "seven world heritage Kathmandu, UNESCO Kathmandu tour, Kathmandu heritage day tour, Durbar Square tour, Changunarayan",
      tags: "Day Tours, Kathmandu, UNESCO, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "All seven UNESCO monument zones of the Kathmandu valley",
      elevation: "1,541 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...CHANGUNARAYAN,
      html: p(
        "An early pickup — this day needs the hours. First to <strong>Swayambhunath</strong> before the crowds, up the stairway for the stupa and the valley laid out below in the morning haze.",
        "Down to <strong>Kathmandu Durbar Square</strong>: the Malla palace, Taleju, the Kumari Ghar and the reconstruction work still going on around Kasthamandap, the twelfth-century pavilion the city is named for.",
        "South across the Bagmati to <strong>Patan Durbar Square</strong>, which most visitors find the finest of the three — the stone Krishna Mandir, the sunken royal bath at Sundari Chowk, and a museum in the old palace that is among the best in South Asia.",
        "Lunch, then east to <strong>Bhaktapur</strong>, the best preserved of the three cities and car-free inside its walls. The 55-window palace, the Golden Gate, the five-tiered Nyatapola and the potters' square where clay is still thrown in the open. Try the <em>juju dhau</em>.",
        "A short climb out of the valley to <strong>Changunarayan</strong>, founded in the fourth century and the oldest standing temple in Nepal, with stone and timber carving older than anything in the squares.",
        "Back down for <strong>Pashupatinath</strong> in the late afternoon — the ghats, the sadhus and the terrace view of the golden pagoda — and finally <strong>Boudhanath</strong> at dusk for the kora and the lamps.",
        "It is a long day and you will be tired. Back at your hotel in the evening.",
      ),
    },
  ],
};

export const bhaktapurDayTour: Tour = {
  region: REGION,
  price: 70,
  difficulty: "easy",
  maxAltitude: 1401,
  center: [85.43, 27.68],
  zoom: 13,
  content: {
    slug: "bhaktapur-day-tour",
    title: "Bhaktapur Day Tour – 1 Day",
    overview:
      "<p><strong>Bhaktapur</strong> is the best preserved of the three medieval cities of the Kathmandu valley, and the only one where you can still walk a whole quarter without seeing a car. It was an independent kingdom until the eighteenth century and its wealth went into building: four squares, a 55-window palace, the tallest pagoda in Nepal and a street plan that has not meaningfully changed in three hundred years.</p><p>A full day here rather than the usual ninety minutes is what the city deserves. This tour covers the squares slowly, walks the back lanes where the woodcarvers and potters work, includes the pottery square where clay is still dried in the open, and pairs Bhaktapur with <strong>Changunarayan</strong>, the oldest standing temple in Nepal, on the ridge above.</p>",
    highlights: [
      ["A Car-Free Medieval City", "Walk a complete Newar town where the street plan is three centuries old."],
      ["The 55-Window Palace and Golden Gate", "The finest surviving Malla royal architecture in the valley."],
      ["Nyatapola, the Tallest Pagoda", "Five tiers, five pairs of guardians and the temple that survived every earthquake."],
      ["Potters' Square", "Clay thrown on hand wheels and dried in the open square, as it always has been."],
      ["Changunarayan", "Nepal's oldest standing temple, on the ridge above the city."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Bhaktapur Durbar Square and Changunarayan entry fees.", ["A bowl of juju dhau, Bhaktapur's king of curds."]),
    exclusions: valleyExclusions,
    fixedDepartureDay: "tuesday",
    itineraryDescription: "A full day in Bhaktapur's four squares and back lanes, with Changunarayan on the ridge above.",
    inExDescription: "A private vehicle with driver, a licensed guide, both entry fees and a bowl of juju dhau are included, while meals, offerings, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Bhaktapur Day Tour – Medieval Newar City and Changunarayan",
      description: "A full day in Bhaktapur, the best-preserved medieval city in the Kathmandu valley, with the potters' square and Changunarayan temple.",
      keywords: "Bhaktapur day tour, Bhaktapur Durbar Square, Nyatapola temple, potters square Bhaktapur, Changunarayan tour",
      tags: "Day Tours, Bhaktapur, UNESCO, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "Bhaktapur's four squares and Changunarayan",
      elevation: "1,401 m",
      accommodation: "Bhaktapur",
      placeDescription: "The best-preserved of the three medieval cities of the Kathmandu valley.",
      ...BHAKTAPUR,
      html: p(
        "Pickup after breakfast and a forty-minute drive east to <strong>Bhaktapur (1,401 m)</strong>. Vehicles stop at the gate; everything inside is on foot, which is the whole character of the place.",
        "<strong>Durbar Square</strong> first: the <strong>55-Window Palace</strong> in carved sal wood, the <strong>Golden Gate</strong> that Percival Landon called the most lovely piece of art in the whole kingdom, the stone Batsala temple and the great bell.",
        "Through the lanes to <strong>Taumadhi Square</strong> and the <strong>Nyatapola</strong> — five tiers, thirty metres, the tallest pagoda in Nepal, guarded by five pairs of figures ascending the stairway, each said to be ten times stronger than the last. It has stood through every major earthquake including 2015.",
        "<strong>Potters' Square</strong> in the late morning, where clay is thrown on hand-turned wheels and thousands of pots are laid out to dry in the sun. You can sit down at a wheel if the potter is willing.",
        "Lunch in a square-side restaurant, and a bowl of <strong>juju dhau</strong> — the 'king of curds', set in clay pots and unlike any yoghurt you have had.",
        "The afternoon walks the back lanes to <strong>Dattatreya Square</strong> and the Peacock Window, then drives up the ridge to <strong>Changunarayan</strong>, founded in the fourth century — the oldest standing temple in Nepal, with fifth-century stone sculpture in its courtyard and a view back over the whole valley.",
        "Back at your hotel by early evening.",
      ),
    },
  ],
};

export const patanDayTour: Tour = {
  region: REGION,
  price: 65,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [85.325, 27.673],
  zoom: 13.5,
  content: {
    slug: "patan-day-tour",
    title: "Patan Day Tour – 1 Day",
    overview:
      "<p><strong>Patan</strong> — Lalitpur, the city of beauty — holds the densest concentration of Newar architecture anywhere, and its Durbar Square is the one most architects and historians rate above the other two. It is also a living craft city: the bronze casters, silversmiths and thangka painters who supply Nepal's monasteries still work in the lanes around the square.</p><p>This day covers the square and its <strong>Patan Museum</strong>, which is widely considered the finest museum in South Asia, then goes into the workshops and courtyards behind it — the Golden Temple with its rota of teenage monks, the Kumbeshwar with its five tiers, and the metalworking quarter where lost-wax casting is done the way it has been for a thousand years.</p>",
    highlights: [
      ["Patan Durbar Square", "The finest concentration of Newar palace architecture in Nepal."],
      ["The Patan Museum", "Widely rated the best museum in South Asia, in the restored royal palace."],
      ["The Golden Temple", "A twelfth-century Buddhist courtyard monastery staffed by a rota of boy monks."],
      ["Lost-Wax Bronze Casting", "Watch metalworkers use a method unchanged for a thousand years."],
      ["Courtyards Behind the Square", "The bahals and hitis most visitors walk straight past."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Patan Durbar Square and Patan Museum entry fees.", ["Visit to a working bronze casting or thangka workshop."]),
    exclusions: valleyExclusions,
    fixedDepartureDay: "wednesday",
    itineraryDescription: "A day in Patan's Durbar Square, its museum and the craft courtyards and workshops behind it.",
    inExDescription: "A private vehicle with driver, a licensed guide, square and museum entry and a workshop visit are included, while meals, purchases, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Patan Day Tour – Durbar Square, Museum and Craft Courtyards",
      description: "A day in Patan (Lalitpur) covering Durbar Square, the Patan Museum, the Golden Temple and the bronze casting workshops.",
      keywords: "Patan day tour, Patan Durbar Square, Patan Museum, Golden Temple Patan, Lalitpur tour, Newar craft",
      tags: "Day Tours, Patan, UNESCO, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "Patan Durbar Square, the museum and the craft quarter",
      elevation: "1,400 m",
      accommodation: "Patan",
      placeDescription: "The medieval Newar city of Lalitpur, south of the Bagmati from Kathmandu.",
      ...PATAN,
      html: p(
        "A short drive south across the Bagmati after breakfast — twenty minutes without traffic, longer with it.",
        "<strong>Patan Durbar Square</strong> takes the morning. The <strong>Krishna Mandir</strong> is carved entirely from stone in a Shikhara style unlike anything else in the valley, with the Mahabharata and Ramayana running in relief around its friezes. Around it stand the Bhimsen and Vishwanath temples, the Manga Hiti water spouts still in daily use, and the royal palace along the eastern side.",
        "The <strong>Patan Museum</strong> occupies the restored palace and is the reason to allow real time here. Its collection of Hindu and Buddhist bronzes is superbly displayed and the labelling explains iconography properly rather than just naming things — it is the best hour available anywhere for understanding what you are looking at in Nepal.",
        "Lunch in the museum's courtyard café or a lane restaurant nearby.",
        "The afternoon goes behind the square into the <em>bahals</em> — the courtyard monasteries that give Patan its structure. The <strong>Golden Temple</strong> (Hiranya Varna Mahavihar) is the finest, a twelfth-century foundation whose daily rituals are performed by a rota of boys under twelve.",
        "The walk ends in the metalworking quarter, watching <strong>lost-wax bronze casting</strong> and thangka painting in workshops that supply monasteries across the Himalaya.",
        "Back at your hotel in the late afternoon.",
      ),
    },
  ],
};

export const chandragiriTour: Tour = {
  region: REGION,
  price: 85,
  difficulty: "easy",
  maxAltitude: 2551,
  center: [85.23, 27.67],
  zoom: 12,
  content: {
    slug: "chandragiri-cable-car-tour",
    title: "Chandragiri Cable Car Tour – 1 Day",
    overview:
      "<p>The <strong>Chandragiri cable car</strong> climbs from Thankot on the western rim of the Kathmandu valley to a ridge at <strong>2,551 m</strong> in about ten minutes, and the view from the top on a clear day runs from <strong>Dhaulagiri</strong> in the west through Annapurna, Manaslu, Ganesh and Langtang to <strong>Everest</strong> in the east — the whole central Himalaya from one place.</p><p>The ridge itself carries the <strong>Bhaleshwar Mahadev</strong> temple, and there is a viewing deck, restaurants and forest walks along the crest. It is the easiest mountain view in Nepal to reach, needs no walking at all, and is the standard answer for families and older visitors who want the Himalaya without the effort. Historically this was the ridge from which Prithvi Narayan Shah first looked down on the valley he would conquer.</p>",
    highlights: [
      ["Dhaulagiri to Everest", "The central Himalaya in a single panorama on a clear day."],
      ["Ten Minutes to 2,551 m", "A cable car that does all the climbing for you."],
      ["Bhaleshwar Mahadev Temple", "The Shiva shrine on the ridge, rebuilt in stone after the 2015 earthquake."],
      ["Prithvi Narayan Shah's Viewpoint", "The ridge from which the founder of modern Nepal first saw the valley."],
      ["Easy for Every Age", "No walking required, with restaurants and a viewing deck at the top."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Chandragiri cable car return ticket and ridge entry.", ["Optional forest walk along the ridge with your guide."]),
    exclusions: valleyExclusions,
    fixedDepartureDay: "thursday",
    itineraryDescription: "A half to full day at Chandragiri, riding the cable car to 2,551 m for the Himalayan panorama above the valley rim.",
    inExDescription: "A private vehicle with driver, a licensed guide and the return cable car ticket are included, while meals at the summit, offerings, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Chandragiri Cable Car Tour – Himalayan Views above Kathmandu",
      description: "A day trip to Chandragiri Hills by cable car, reaching 2,551 m for a panorama from Dhaulagiri to Everest above the Kathmandu valley.",
      keywords: "Chandragiri cable car, Chandragiri hill tour, Chandragiri cable car price, Kathmandu mountain view, Bhaleshwar Mahadev",
      tags: "Day Tours, Kathmandu, Cable Car, Mountain View, Nepal Tours",
    },
  },
  days: [
    {
      title: "Chandragiri Hills by cable car (2,551 m)",
      elevation: "2,551 m",
      accommodation: "Chandragiri",
      placeDescription: "A ridge on the western rim of the Kathmandu valley at 2,551 m, reached by cable car from Thankot.",
      ...CHANDRAGIRI,
      html: p(
        "An early pickup, because the mountain views are best before the haze builds — on a winter morning the whole range is out by eight and gone by eleven.",
        "The drive west to the base station at <strong>Thankot</strong> takes about forty-five minutes through the old Kathmandu–Pokhara road.",
        "The <strong>cable car</strong> climbs 1,000 m in around ten minutes, over forest that is genuinely wild — the valley rim still holds leopard and a great deal of birdlife — with the city falling away behind.",
        "At the top the ridge at <strong>2,551 m</strong> opens north. On a clear day the panorama runs from <strong>Dhaulagiri (8,167 m)</strong> in the far west through Annapurna, Manaslu, Ganesh Himal and Langtang to <strong>Everest</strong> on the eastern horizon.",
        "The <strong>Bhaleshwar Mahadev</strong> temple sits at the high point, rebuilt in stone after 2015. Tradition holds that Shiva's consort Sati fell here, and that Prithvi Narayan Shah stood on this ridge to plan the conquest of the valley below.",
        "There is a viewing deck, restaurants and a short <strong>forest walk</strong> along the crest for anyone who wants it. Lunch at the top is worth it for the view from the terrace.",
        "Back down by cable car in the afternoon and to your hotel by early evening.",
      ),
    },
  ],
};

export const pharpingTour: Tour = {
  region: REGION,
  price: 70,
  difficulty: "easy",
  maxAltitude: 1600,
  center: [85.26, 27.585],
  zoom: 13,
  content: {
    slug: "pharping-dakshinkali-tour",
    title: "Pharping Dakshinkali Tour – 1 Day",
    overview:
      "<p>The southern rim of the valley holds two of Nepal's most charged religious sites within a few kilometres of each other. <strong>Dakshinkali</strong> is a Kali shrine in a wooded gorge where animal sacrifices are made on Tuesdays and Saturdays — the most direct encounter with living Hindu practice available near Kathmandu. <strong>Pharping</strong>, on the hillside above, is one of the great Vajrayana pilgrimage places, where Guru Rinpoche is said to have attained realisation in the Asura cave.</p><p>The contrast is the point of the day. Pharping is quiet: a hillside of Tibetan monasteries and retreat huts around the self-arisen Tara that emerges from the rock face, and the caves where practitioners still do three-year retreats. Dakshinkali below is loud, crowded and unfiltered. Both are entirely real and neither is arranged for visitors.</p>",
    highlights: [
      ["Dakshinkali", "A Kali shrine in a gorge where sacrifices are made on Tuesdays and Saturdays."],
      ["The Asura Cave at Pharping", "Where Guru Rinpoche is held to have attained realisation, still used for retreat."],
      ["The Self-Arisen Tara", "A Tara image emerging from the rock face, said to be growing out of the stone."],
      ["Tibetan Monasteries", "A hillside of gompas and three-year retreat huts above the valley."],
      ["Living Practice, Not a Monument", "Two sites that exist for their practitioners rather than for visitors."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Site entry and offering plate at the Pharping monasteries."),
    exclusions: valleyExclusions,
    fixedDepartureDay: "friday",
    itineraryDescription: "A day on the southern valley rim covering the Dakshinkali shrine and the Vajrayana caves and monasteries of Pharping.",
    inExDescription: "A private vehicle with driver, a licensed guide and site entries are included, while meals, offerings, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Pharping Dakshinkali Tour – Kali Shrine and Guru Rinpoche Caves",
      description: "A day tour to Dakshinkali and Pharping on the southern rim of the Kathmandu valley, covering the Kali shrine and the Asura cave.",
      keywords: "Pharping tour, Dakshinkali temple, Asura cave Pharping, Guru Rinpoche Nepal, self arisen Tara, Kathmandu day tour",
      tags: "Day Tours, Kathmandu, Pilgrimage, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "Dakshinkali and the Pharping monasteries",
      elevation: "1,600 m",
      accommodation: "Pharping",
      placeDescription: "A hillside of Vajrayana monasteries and retreat caves on the southern rim of the Kathmandu valley.",
      ...PHARPING,
      html: p(
        "Pickup after breakfast and a drive of around an hour south out of the valley, climbing through Newar villages onto the southern rim.",
        "<strong>Dakshinkali</strong> sits at the bottom of a wooded gorge at the confluence of two streams. The shrine is to Kali in her southern aspect, and on <strong>Tuesdays and Saturdays</strong> queues of families come to make animal sacrifices — usually cockerels and goats — which are then taken home and cooked. It is not staged and it is not sanitised; your guide will tell you honestly what you will see so you can decide how close to go.",
        "On other days the site is quiet and the gorge is simply beautiful, with the shrine, the stream and the forest.",
        "The road climbs to <strong>Pharping</strong> above, which could not be more different. This hillside is one of the most important Vajrayana sites outside Tibet: <strong>Guru Rinpoche</strong> is held to have attained realisation in the <strong>Asura cave</strong> here, and the rock outside bears what tradition says is his handprint.",
        "Beside it, on the wall of the <strong>Vajrayogini</strong> temple stairway, is the <strong>self-arisen Tara</strong> — an image emerging from the rock face that practitioners say has been slowly growing out of the stone for decades.",
        "The hillside holds a dozen monasteries and rows of retreat huts where practitioners undertake three-year, three-month retreats. Lunch is at a monastery guesthouse.",
        "Back at your hotel by late afternoon.",
      ),
    },
  ],
};

export const foodTour: Tour = {
  region: REGION,
  price: 60,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [85.31, 27.706],
  zoom: 14,
  content: {
    slug: "secret-food-tour-in-kathmandu",
    title: "Secret Food Tour in Kathmandu – 1 Day",
    overview:
      "<p>A walking food tour through the old city that goes to the places locals eat rather than the ones with English menus. Over three to four hours on foot you work through the lanes between Ason and Indra Chowk — the oldest bazaar quarter in Kathmandu — stopping at eight or nine family-run stalls and shops that have in many cases been doing one thing for three generations.</p><p>The route covers <strong>Newar</strong> food specifically, which is distinct from what most restaurants serve: <em>chatamari</em>, <em>bara</em>, <em>choila</em>, <em>samay baji</em>, buffalo <em>momo</em>, sweet <em>lakhamari</em>, spiced <em>lassi</em> and the local rice beer. Your guide explains what you are eating and orders in Newari, which changes both the food and the price.</p>",
    highlights: [
      ["Eight or Nine Tasting Stops", "Family stalls in the old bazaar, most with no sign and no menu in English."],
      ["Real Newar Food", "Chatamari, bara, choila and samay baji rather than the tourist restaurant version."],
      ["Ason and Indra Chowk", "The oldest market quarter in the city, at its busiest and most chaotic."],
      ["A Guide Who Orders in Newari", "Which changes both what arrives and what you pay for it."],
      ["Enough Food to Replace a Meal", "You will not need dinner afterwards."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: {
      transport: ["Hotel pickup and drop-off within central Kathmandu; the tour itself is on foot."],
      meals: ["Eight to nine tasting portions across the route, plus drinks.", "Bottled water throughout."],
      guide: "Local food guide who speaks Newari and knows the families running the stalls.",
      extra: ["A written list of everything you tasted, to find again on your own."],
    },
    exclusions: { domestic: true, meals: "Additional dishes or drinks ordered beyond the tasting menu.", extra: ["Alcoholic drinks beyond the single rice beer tasting."] },
    privateVehicleAddon: false,
    fixedDepartureDay: "saturday",
    itineraryDescription: "A three to four hour walking food tour through the old bazaar quarter, with eight or nine Newar tasting stops.",
    inExDescription: "Hotel transfers, all tastings and drinks on the route and a local food guide are included, while extra dishes, alcohol and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Secret Food Tour in Kathmandu – Newar Street Food Walk",
      description: "A walking food tour through Kathmandu's old bazaar with eight to nine Newar tasting stops at family-run stalls around Ason and Indra Chowk.",
      keywords: "Kathmandu food tour, Newari food Kathmandu, street food Nepal, Ason bazaar food, secret food tour Kathmandu",
      tags: "Day Tours, Kathmandu, Food Tour, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "Walking food tour through Ason and the old bazaar",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...DURBAR,
      html: p(
        "The tour starts in the late afternoon, when the bazaar is at its busiest and the snack stalls have just fired up. Your guide meets you near Thamel and walks you south into the old city.",
        "The route works through the lanes around <strong>Ason</strong> and <strong>Indra Chowk</strong> — the spice market, the oil sellers, the shops that sell only one thing and have done so for generations.",
        "The stops vary with the season and with who is open, but usually include <strong>chatamari</strong>, the rice-flour crêpe often called Newari pizza; <strong>bara</strong>, a lentil patty fried on a griddle; <strong>choila</strong>, buffalo grilled and tossed with mustard oil and chilli; buffalo <strong>momo</strong> from a stall that makes nothing else; and <strong>samay baji</strong>, the ceremonial plate of beaten rice, egg, soybean and meat that anchors every Newar festival.",
        "Sweet stops include <strong>lakhamari</strong> and <strong>juju dhau</strong>, and there is a spiced <em>lassi</em> and a taste of <em>chhyang</em>, the local rice beer, for anyone who wants it.",
        "Your guide explains each dish, its place in the Newar calendar, and orders in Newari — which reliably produces a better plate than pointing does.",
        "Three to four hours on foot, and you will not need dinner. Drop-off back at your hotel.",
      ),
    },
  ],
};

export const bungamatiTour: Tour = {
  region: REGION,
  price: 65,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [85.296, 27.62],
  zoom: 13.5,
  content: {
    slug: "bungmati-khokana-village-tour",
    title: "Bungmati Khokana Village Tour – 1 Day",
    overview:
      "<p><strong>Bungamati</strong> and <strong>Khokana</strong> are two Newar villages ten kilometres south of Kathmandu that function as working settlements rather than heritage sites. Bungamati is the birthplace of <strong>Rato Machhendranath</strong>, the rain god whose annual chariot festival is the largest in the valley, and its woodcarvers supply temples across Nepal. Khokana, half a kilometre away, is the valley's mustard-oil village, still pressing seed in wooden mills.</p><p>Both were badly damaged in 2015 and much of what you see is reconstruction, done by the villages themselves in traditional brick and timber. Neither charges an entry fee, neither has a tourist quarter, and walking between them on the old paddy-field path is one of the better hours available near the city.</p>",
    highlights: [
      ["Rato Machhendranath's Home Village", "Bungamati, where the rain god lives for six months of every year."],
      ["Newar Woodcarving Workshops", "Carvers producing temple struts and windows by hand, as commissions rather than souvenirs."],
      ["Khokana's Mustard Oil Mills", "Seed pressed in wooden mills in a village laid out around a single main street."],
      ["Community Reconstruction", "See how two villages rebuilt themselves after 2015 in traditional brick and timber."],
      ["No Entry Fees, No Tour Buses", "Two working villages that have not been arranged for visitors."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: valleyInclusions("Village contributions and the Khokana museum entry.", ["Visit to a working woodcarving workshop and a mustard oil mill."]),
    exclusions: valleyExclusions,
    fixedDepartureDay: "sunday",
    itineraryDescription: "A day in the Newar villages of Bungamati and Khokana south of Kathmandu, with woodcarving workshops and mustard oil mills.",
    inExDescription: "A private vehicle with driver, a licensed guide, village contributions and the workshop visits are included, while meals, purchases, tips and personal expenses are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Bungmati Khokana Village Tour – Newar Villages near Kathmandu",
      description: "A day tour of Bungamati and Khokana, two working Newar villages south of Kathmandu with woodcarving workshops and mustard oil mills.",
      keywords: "Bungamati tour, Khokana village, Newar village Kathmandu, Rato Machhendranath, woodcarving Nepal, mustard oil Khokana",
      tags: "Day Tours, Kathmandu, Village Tour, Cultural Tour, Nepal Tours",
    },
  },
  days: [
    {
      title: "Bungamati, Khokana and the paddy path between them",
      elevation: "1,400 m",
      accommodation: "Bungamati",
      placeDescription: "A Newar village south of Kathmandu, home of the Rato Machhendranath rain god.",
      ...BUNGAMATI,
      html: p(
        "A short drive south out of the city after breakfast — thirty to forty minutes through Patan and out past the ring road into farmland.",
        "<strong>Bungamati</strong> is built around a central square with the shikhara temple of <strong>Rato Machhendranath</strong> at its centre. The god spends six months of the year here and six in Patan, and the chariot procession that moves him is the longest festival in the valley — a wheeled tower dragged through the streets over weeks, and the single biggest event in the Newar calendar.",
        "The village is a woodcarving centre. The workshops around the square produce temple struts, windows and doors on commission for restoration projects across Nepal, and you can watch carvers working chisel by chisel on pieces that will take months.",
        "The 2015 earthquake flattened a great deal of Bungamati, including the main temple, and your guide will show you what has been rebuilt and how — in traditional brick and timber rather than concrete, largely by the villagers themselves.",
        "The walk to <strong>Khokana</strong> takes twenty minutes on a path between paddy fields, which is the pleasantest part of the day.",
        "Khokana is laid out along a single wide street and is known for <strong>mustard oil</strong>, still pressed in heavy wooden mills you can hear from the road. The Shree Rudrayani temple stands at the centre and there is a small village museum.",
        "Lunch in the village, then back at your hotel by mid-afternoon.",
      ),
    },
  ],
};

export const everestMountainFlight: Tour = {
  region: REGION,
  price: 220,
  difficulty: "easy",
  maxAltitude: 8849,
  center: [86.5, 27.85],
  zoom: 8,
  content: {
    slug: "everest-mountain-flight",
    title: "Everest Mountain Flight – 1 Hour",
    overview:
      "<p>The <strong>Everest mountain flight</strong> is an hour in a fixed-wing aircraft along the length of the Nepal Himalaya, flown at first light from Kathmandu. The aeroplane tracks east at around 25,000 feet with the range out of the left-hand windows, and every passenger has a window seat — the aircraft is sold on that basis.</p><p>The flight passes <strong>Langtang</strong>, <strong>Dorje Lakpa</strong>, <strong>Gaurishankar</strong>, <strong>Cho Oyu</strong>, <strong>Nuptse</strong>, <strong>Lhotse</strong> and <strong>Everest (8,849 m)</strong> itself before turning back, and passengers are taken to the cockpit one at a time for the head-on view. It is the least demanding way to see the high Himalaya — no altitude, no walking, and back at your hotel for breakfast.</p>",
    highlights: [
      ["Everest at Eye Level", "An hour along the range with the summit pyramid out of the window."],
      ["A Window Seat for Everyone", "The aircraft is sold one passenger per window, without exception."],
      ["Cockpit Visit", "Each passenger is taken forward for the head-on view of the mountain."],
      ["No Altitude, No Walking", "The high Himalaya with none of the physical demands."],
      ["Back for Breakfast", "Airborne at first light and at your hotel by mid-morning."],
    ],
    sections: VALLEY_SECTIONS,
    faqs: VALLEY_FAQS,
    inclusions: {
      flights: ["One-hour Everest mountain flight from Kathmandu with a guaranteed window seat."],
      transport: ["Return transfer between your hotel and the domestic terminal."],
      entrance: "Airport departure charges.",
      guide: "Airline crew commentary and a mountain identification chart for every passenger.",
      extra: ["Cockpit visit for each passenger, subject to the captain's discretion."],
    },
    exclusions: { domestic: true, meals: "Breakfast, which is taken after the flight.", extra: ["Any cost from a weather postponement or cancellation."] },
    privateVehicleAddon: false,
    fixedDepartureDay: "monday",
    itineraryDescription: "A one-hour dawn flight from Kathmandu along the Himalaya to Everest and back, with a window seat for every passenger.",
    inExDescription: "Hotel transfers, the mountain flight with a guaranteed window seat, airport charges and a mountain chart are included, while meals, insurance and weather-cancellation costs are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Everest Mountain Flight – 1 Hour Scenic Flight from Kathmandu",
      description: "A one-hour Everest mountain flight from Kathmandu with a guaranteed window seat, flying the length of the Himalaya at dawn.",
      keywords: "Everest mountain flight, Everest scenic flight Kathmandu, mountain flight Nepal, Everest by plane, Himalaya flight",
      tags: "Day Tours, Scenic Flight, Everest, Kathmandu, Nepal Tours",
    },
  },
  days: [
    {
      title: "Dawn mountain flight along the Himalaya to Everest",
      elevation: "8,849 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...AIRPORT,
      html: p(
        "A very early pickup — mountain flights leave at first light because that is when the air is clearest and the range is not yet in cloud. You are at the domestic terminal by around 6 am.",
        "The aircraft is a small turboprop and <strong>every passenger has a window</strong>; there is no middle seat on these flights and the airlines do not sell one.",
        "After take-off the aeroplane turns east and climbs to around 25,000 feet, tracking parallel to the range about twenty kilometres out. The peaks come past in order and the crew names each one over the intercom: <strong>Langtang Lirung</strong>, <strong>Dorje Lakpa</strong>, <strong>Gaurishankar</strong>, <strong>Melungtse</strong>, <strong>Cho Oyu (8,188 m)</strong>.",
        "Then the Everest group itself — <strong>Nuptse</strong>, <strong>Lhotse (8,516 m)</strong> and the black summit pyramid of <strong>Everest (8,849 m)</strong>, which from this angle is unmistakable and closer than most people expect.",
        "Passengers are taken to the <strong>cockpit</strong> one at a time for the head-on view through the windscreen, which is the best minute of the flight.",
        "The aircraft turns and flies back with the range now on the other side, so both banks of seats get the full view. Total time in the air is about an hour, and you are back at your hotel for breakfast.",
      ),
    },
  ],
};

export const kathmanduDayTours: Tour[] = [
  kathmanduDayTour, sevenHeritageTour, bhaktapurDayTour, patanDayTour,
  chandragiriTour, pharpingTour, foodTour, bungamatiTour, everestMountainFlight,
];
