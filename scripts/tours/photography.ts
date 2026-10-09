/**
 * Region: Photography Tour.
 *
 * Four tours built around light rather than around a checklist of sites: one
 * dawn-to-dusk day in the Kathmandu valley, a ten-day circuit of the country,
 * a week of Annapurna sunrises reached by road and short walks, and Upper
 * Mustang by jeep.
 *
 * They visit many of the same places as the sightseeing packages and differ in
 * when they get there — every key location is timed for first or last light,
 * and the days carry slack for waiting. None of them is sold as a workshop:
 * the guide is a licensed guide who knows where to stand and when, not a
 * tutor, and the copy says so rather than promising tuition.
 */
import {
  AIRPORT,
  AIRPORT_PLACE,
  CHITWAN,
  JOMSOM,
  KATHMANDU,
  KTM_PLACE,
  KTM_RETURN_PLACE,
  NAGARKOT,
  PKR_PLACE,
  POKHARA,
  SARANGKOT,
  p,
  type Tour,
  type TourDay,
} from "./types";

const REGION = "Photography Tour";

const BOUDHA = { lng: 85.3620, lat: 27.7215 };
const BANDIPUR = { lng: 84.4110, lat: 27.9350 };
const GHANDRUK = { lng: 83.8100, lat: 28.3760 };
const AUSTRALIAN_CAMP = { lng: 83.8290, lat: 28.3010 };
const KAGBENI = { lng: 83.7830, lat: 28.8370 };
const CHARANG = { lng: 83.9330, lat: 29.0940 };
const LO_MANTHANG = { lng: 83.9560, lat: 29.1820 };

const NAGARKOT_PLACE = "A ridge-top resort village east of Kathmandu, known for its Himalayan sunrise.";
const BANDIPUR_PLACE = "A car-free Newar trading town on a ridge above the Marsyangdi valley.";
const CHITWAN_PLACE = "Nepal's first national park, on the subtropical plains of the Terai.";
const GHANDRUK_PLACE = "A Gurung village of slate roofs at 1,940 m, facing Annapurna South and Machhapuchhre.";
const AUSTRALIAN_CAMP_PLACE = "A forest clearing at 2,060 m with an open view along the Annapurna range.";
const KAGBENI_PLACE = "A fortified mud-brick village at 2,810 m and the gateway to Upper Mustang.";
const CHARANG_PLACE = "A village at 3,560 m with a ruined palace and a red monastery above the Charang gorge.";
const LO_MANTHANG_PLACE = "The walled capital of the former kingdom of Lo, at 3,840 m on the Tibetan plateau.";
const JOMSOM_PLACE = "The district headquarters of Mustang, in the Kali Gandaki valley at 2,720 m.";

/** Arrival day, shared by the three multi-day tours. */
const arrival = (extra: string): TourDay => ({
  title: "Arrival in Kathmandu (1,400 m)",
  elevation: "1,400 m",
  accommodation: "Kathmandu",
  placeDescription: KTM_PLACE,
  ...KATHMANDU,
  html: p(
    "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you outside the arrivals hall with a name board and drives you to your hotel in Thamel.",
    extra,
    "If you arrive with daylight to spare, the lanes of Thamel and the market at Ason are ten minutes away on foot and make an easy first hour with a camera. Overnight in Kathmandu.",
  ),
});

/** Departure day, shared by the three multi-day tours. */
const departure = (extra: string): TourDay => ({
  title: "Departure from Nepal",
  elevation: "1,400 m",
  accommodation: "Kathmandu Airport",
  placeDescription: AIRPORT_PLACE,
  ...AIRPORT,
  html: p(
    extra,
    "We collect you from your hotel three hours before your flight and drive you to <strong>Tribhuvan International Airport</strong>, where our representative sees you through to the check-in counters.",
    "Carry cameras, lenses, cards and drives in your hand luggage rather than the hold, and keep lithium batteries with you — the airlines require it and it is the only sensible way to travel with a trip's worth of pictures.",
  ),
});

// ── Detail sections ──
// The etiquette and equipment sections hold for every tour in the region, so
// they are written once. Season and pacing differ by route and stay per-tour.
const ETIQUETTE_SECTION = {
  heading: "Photographing People and Sacred Places",
  content:
    "<p>Nepal is an easy country to photograph people in, provided you ask. A smile and a raised camera is usually enough, and a refusal is final. <strong>Sadhus</strong> at the major temples expect payment for a portrait, and your guide agrees the amount beforehand so the exchange stays friendly. Children should be photographed only with a parent's consent, and we ask guests not to hand out money or sweets in return.</p><p>Cameras are not allowed inside most <strong>inner sanctums</strong> and many monastery prayer halls, and the signs are not always in English — follow your guide. We do not photograph funerals at the cremation ghats. <strong>Drones</strong> need government permission that takes weeks to obtain and is not given for heritage zones or national parks, so leave yours at home unless the permits were arranged before you travelled.</p>",
};

const GEAR_SECTION = {
  heading: "Camera Gear and What to Bring",
  content:
    "<p>Bring what you are comfortable carrying all day. A <strong>standard zoom</strong> covers most situations; a fast prime is worth having for dawn, dusk and dim interiors, and a telephoto helps with portraits, architectural detail and distant peaks. A <strong>tripod</strong> earns its place at blue hour and for mountain sunrises but is awkward in crowds, so a light travel model is the sensible choice.</p><p>Carry spare batteries and memory cards — cold mornings drain batteries quickly — along with a lens cloth and blower for dust, and a rain cover between June and September. Charging is reliable in city hotels; bring a universal adapter, and a power bank for nights in lodges outside the cities. We do not supply camera equipment, and your travel insurance should cover the full value of what you bring.</p>",
};

// ── FAQs ──
// Written as single entries and combined per tour, so each page carries the
// questions that apply to it and none that do not.
const FAQ_WORKSHOP = {
  question: "Is this a photography workshop with tuition?",
  answer:
    "No. It is a guided tour planned around light and locations, not a classroom. Your guide is a licensed guide used to working with photographers, who knows where to stand and when, but will not teach exposure or critique your files. If you want a professional photographer travelling with you as a mentor, ask at booking and we will quote for one.",
};
const FAQ_EQUIPMENT = {
  question: "Do I need professional equipment or experience?",
  answer:
    "Neither. The tour suits anyone who cares about pictures, from a phone to a full-frame kit, and the only requirement is a willingness to get up early. Beginners get as much from being in the right place at the right time as experienced photographers do — arguably more.",
};
const FAQ_COMPANION = {
  question: "Can a partner who does not photograph join?",
  answer:
    "Yes, and they usually enjoy it. The places are the best in the itinerary's part of Nepal whether or not you carry a camera, and the guide gives the same commentary a sightseeing tour would. The honest costs are the early starts and the occasional half hour spent waiting at one spot for the light.",
};
const FAQ_LINGER = {
  question: "Can we stay longer at a place if the light is good?",
  answer:
    "Yes — that is the reason the tour runs with a private vehicle and guide rather than a fixed coach schedule. If a location is working, you stay, and the guide trims something later in the day to pay for it. The only fixed points are flights, park entry times and sunset itself.",
};
const FAQ_WEATHER = {
  question: "What happens if cloud hides the mountains?",
  answer:
    "It happens, even in the best months. Each mountain viewpoint is placed in the itinerary so there is more than one chance at the range, and the guide reorders the day rather than keeping to a timetable when cloud sits on the peaks. Mist, breaking storms and monsoon cloud often make the stronger picture in any case.",
};
const FAQ_EARLY = {
  question: "How early are the starts?",
  answer:
    "On sunrise days you leave the hotel between 4:30 and 5:30 am depending on the season, with tea or coffee before you go and breakfast after the shoot. The middle of those days is kept deliberately light, so there is time to rest, back up cards and charge batteries before the evening session.",
};
const FAQ_COMMERCIAL = {
  question: "Can I use the photographs commercially?",
  answer:
    "Pictures taken for personal use, a portfolio, editorial work or stock are yours to use as you wish. An organised commercial or advertising shoot, and any filming with a crew, needs a government filming permit and a liaison officer; we can arrange both with a few weeks' notice.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Kathmandu Photography Tour — 1 day
// ─────────────────────────────────────────────────────────────────────────────
export const kathmanduPhotographyTour: Tour = {
  region: REGION,
  price: 120,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [85.37, 27.7],
  zoom: 11.5,
  content: {
    slug: "kathmandu-photography-tour",
    title: "Kathmandu Photography Tour – 1 Day",
    overview:
      "<p>The <strong>Kathmandu Photography Tour</strong> takes the valley's four most photogenic places in the order the light reaches them. It starts in the dark at <strong>Boudhanath</strong>, where the dawn kora circles the stupa under butter-lamp light, moves to the sadhus and river terraces of <strong>Pashupatinath</strong> while the sun is still low, spends the flat midday hours in the shaded courtyards and metalworkers' lanes of <strong>Patan</strong>, and finishes in <strong>Bhaktapur</strong>, whose brick squares turn copper in the last hour of the day.</p><p>The sites are the ones every sightseeing tour visits; what changes is the timing. A standard tour reaches Boudhanath at four in the afternoon and Bhaktapur at noon, which is the wrong way round for a camera. Here the pickup is before sunrise, the pace allows for waiting at a single corner until something happens, and the private vehicle moves when you are ready rather than when the schedule says.</p>",
    highlights: [
      ["Boudhanath at Dawn", "Pilgrims, butter lamps and incense smoke around the stupa before the day visitors arrive."],
      ["Sadhus of Pashupatinath", "Portraits arranged properly, with your guide agreeing the terms before a lens is raised."],
      ["Patan's Courtyards", "Shaded bahals, the Golden Temple and bronze casters at work through the hard midday light."],
      ["Golden Hour in Bhaktapur", "Potters' Square, the Nyatapola pagoda and the brick lanes in the warmest light of the day."],
      ["Timed Around the Light", "A pre-dawn start, a slow middle and a late finish, with a vehicle that waits for you."],
    ],
    sections: [
      {
        heading: "How the Day Is Timed",
        content:
          "<p>The day runs to the sun rather than to office hours. Pickup is around <strong>5:15 am</strong>, a little later in midwinter, which puts you at Boudhanath for the half hour before sunrise when the kora is busiest and the lamps are still burning. Pashupatinath follows while the light is low and raking across the river terraces.</p><p>From late morning to mid-afternoon the sun is high and flat, so that time goes to <strong>Patan</strong>, where the best subjects are in shade — courtyards, doorways, workshops — and to a proper lunch. You reach <strong>Bhaktapur</strong> about three hours before sunset and stay through the blue hour, returning to your hotel around 7 pm. It is a long day, and the midday break is there to make it workable.</p>",
      },
      {
        heading: "Best Time of Year",
        content:
          "<p><strong>October to early December</strong> gives the cleanest air and the most reliable golden light, along with the festivals of Dashain and Tihar — Tihar in particular, when the old cities are lit with oil lamps. <strong>December to February</strong> brings cold, misty mornings in which Boudhanath and the Bhaktapur squares look their most atmospheric, and very few visitors.</p><p><strong>March to May</strong> is warmer and hazier, with softer light and festivals such as Holi and Bisket Jatra. The <strong>monsoon</strong> from June to September is underrated for photography: wet brick, reflections in the squares, dramatic skies and green rice terraces on the valley floor, at the price of carrying a rain cover and accepting an interrupted afternoon.</p>",
      },
      ETIQUETTE_SECTION,
      GEAR_SECTION,
    ],
    faqs: [
      { question: "Are tripods allowed at the sites?", answer: "In the open squares and around the stupa, yes, as long as the legs are not blocking the kora or a temple doorway. They are not permitted inside museums and most courtyards with active shrines. At Boudhanath before dawn and in Bhaktapur at blue hour a tripod is genuinely useful; through the middle of the day it can stay in the vehicle." },
      { question: "Which meals are included?", answer: "Breakfast is, taken on a rooftop above the Boudhanath stupa once the dawn session is over — the view from the table is a picture in itself. Lunch in Patan and dinner are at your own cost, and your guide will suggest places close to wherever you are working." },
      { question: "What if it rains on the day?", answer: "The tour runs. Rain empties the squares, darkens the brick and puts reflections on the paving, and some of the best pictures of the valley are made in it. If a full day of heavy monsoon rain is forecast and your dates allow, we will move the tour to the next day at no charge." },
      FAQ_WORKSHOP,
      FAQ_EQUIPMENT,
      FAQ_COMPANION,
      FAQ_LINGER,
      FAQ_COMMERCIAL,
    ],
    inclusions: {
      transport: ["Private air-conditioned vehicle with driver from the pre-dawn hotel pickup to the evening drop-off."],
      meals: ["Breakfast at a rooftop café overlooking the Boudhanath stupa."],
      entrance: "Entry fees for Boudhanath, Pashupatinath, Patan Durbar Square and Bhaktapur.",
      guide: "Government-licensed English-speaking guide experienced in working with photographers.",
      extra: ["Bottled water in the vehicle."],
    },
    exclusions: {
      domestic: true,
      meals: "Lunch and dinner.",
      extra: ["Camera equipment, tripods and memory cards.", "Payments to sadhus and other portrait subjects."],
    },
    fixedDepartureDay: "sunday",
    itineraryDescription: "One long day from before sunrise to the blue hour: Boudhanath, Pashupatinath, Patan and Bhaktapur, each at the time of day that suits it.",
    inExDescription: "A private vehicle with driver, a licensed guide, breakfast at Boudhanath and all four monument entry fees are included, while lunch, dinner, camera equipment, portrait payments and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Kathmandu Photography Tour – 1 Day from Dawn to Blue Hour",
      description: "A one-day Kathmandu photography tour timed around the light: Boudhanath at dawn, the sadhus of Pashupatinath, Patan's courtyards and golden hour in Bhaktapur.",
      keywords: "Kathmandu photography tour, Nepal photo tour, Boudhanath sunrise, Bhaktapur golden hour, Pashupatinath sadhu portraits, Kathmandu photo walk",
      tags: "Photography Tour, Kathmandu, Day Tours, Bhaktapur, Boudhanath",
    },
  },
  days: [
    {
      title: "Boudhanath at dawn, Pashupatinath, Patan and Bhaktapur at golden hour",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...BOUDHA,
      html: p(
        "Pickup from your hotel at around 5:15 am, with the streets still empty. <strong>Boudhanath</strong> is at its best in the half hour before sunrise: several hundred people walk the clockwise <em>kora</em>, butter lamps burn in rows along the base of the stupa, and juniper smoke drifts across the dome. As the sun clears the rooftops the whitewash turns gold and the pigeons lift from the plinth. Breakfast follows on a rooftop above the square.",
        "<strong>Pashupatinath</strong> comes next, while the light is still low on the Bagmati. The terraces above the river hold rows of stone shrines that frame well in every direction, and the <strong>sadhus</strong> who sit there are the most photographed people in Nepal. Your guide settles the terms before you begin, which keeps the portrait session unhurried. Funerals on the ghats below are not photographed.",
        "The hard midday light is spent in <strong>Patan</strong>, where the subjects are in shade: the gilded courtyard of the Golden Temple, the sunken royal bath at Sundari Chowk, the carved struts of the Durbar Square and the workshops behind it where bronze is still cast by the lost-wax method. Lunch is taken here, at your own cost, on a terrace over the square.",
        "By mid-afternoon you are in <strong>Bhaktapur</strong>, which is car-free inside its walls and the most rewarding hour of the day. Potters' Square first, with clay drying in rows in the sun; then the five-tiered <strong>Nyatapola</strong> in Taumadhi Square and the lanes around Dattatreya as the brick warms to copper. You stay through sunset and the blue hour, when the temple lamps come on.",
        "The drive back takes about forty-five minutes, and you reach your hotel at around 7 pm.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Nepal Photography Tour — 10 days
// ─────────────────────────────────────────────────────────────────────────────
export const nepalPhotographyTour: Tour = {
  region: REGION,
  price: 1290,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [84.75, 27.8],
  zoom: 7.6,
  content: {
    slug: "nepal-photography-tour",
    title: "Nepal Photography Tour",
    overview:
      "<p>The <strong>Nepal Photography Tour</strong> is ten days across the middle of the country, laid out so that each kind of subject gets its own light. It covers the medieval squares and living temples of the <strong>Kathmandu valley</strong>, Himalayan sunrises from <strong>Nagarkot</strong>, <strong>Bandipur</strong> and <strong>Sarangkot</strong>, the lake at <strong>Pokhara</strong> with Machhapuchhre reflected in it, and two days of wildlife and river mist in <strong>Chitwan National Park</strong>.</p><p>The route is a loop — Kathmandu, Nagarkot, Bandipur, Pokhara, Chitwan and back — so no day is wasted retracing the road, and the longest drive is broken by the hill town of Bandipur. Every sunrise and sunset is spent at a location chosen for it, the middle of each day is left loose for travel and rest, and the whole trip runs with a private vehicle that stops whenever you ask it to.</p>",
    highlights: [
      ["Three Himalayan Sunrises", "Nagarkot, Bandipur and Sarangkot — three separate chances at the range in first light."],
      ["The Valley's Living Temples", "Boudhanath at dawn, the sadhus of Pashupatinath and Bhaktapur at golden hour."],
      ["Bandipur", "A car-free Newar bazaar on a ridge, with a panorama from Dhaulagiri to Langtang."],
      ["Phewa Lake Reflections", "Machhapuchhre in still water at dawn and painted boats along the shore at dusk."],
      ["Chitwan in the Mist", "One-horned rhino, gharial and a dugout canoe on the Rapti river at sunrise."],
    ],
    sections: [
      {
        heading: "Best Time for Photography",
        content:
          "<p><strong>October to early December</strong> is the strongest window for the whole route: the monsoon has washed the air clean, the mountains are sharp from every viewpoint, the rice is being harvested on the terraces and the festivals of Dashain and Tihar fall inside it. <strong>December to February</strong> is colder, with morning mist in the valleys and on the Rapti river that suits both the temples and the wildlife.</p><p><strong>March and April</strong> bring rhododendron to the hills and the best wildlife viewing in Chitwan, where the grass has been cut, though haze softens the mountains by afternoon. The <strong>monsoon</strong> from June to September hides the peaks on most days and is not the season for this itinerary, although the valley and the rice terraces are at their greenest then.</p>",
      },
      {
        heading: "How the Days Are Paced",
        content:
          "<p>Each day has two working sessions, at <strong>dawn</strong> and from mid-afternoon to <strong>dusk</strong>, and the hours between are used for breakfast, travel and rest. On sunrise days you leave the hotel in the dark and return for a late breakfast; drives are scheduled for the middle of the day, when the light is at its flattest and there is least to lose.</p><p>There are three long transfers, of four to six hours each, all with stops wherever the road gives a picture — river gorges, suspension bridges, roadside markets, terraced hillsides. Two nights in Kathmandu at the start, two in Pokhara and two in Chitwan mean that most locations get a second attempt if the first is clouded out.</p>",
      },
      ETIQUETTE_SECTION,
      GEAR_SECTION,
    ],
    faqs: [
      { question: "How much of the tour is spent driving?", answer: "Three of the ten days include a long drive: Nagarkot to Bandipur (about six hours), Pokhara to Chitwan (four to five) and Chitwan to Kathmandu (five to six). Bandipur to Pokhara is about two and a half hours. All of it is by private vehicle with stops on request, and the Chitwan to Kathmandu leg can be replaced with a twenty-minute flight as an add-on." },
      { question: "Will we get close enough to rhino to photograph them?", answer: "Almost certainly. Chitwan has several hundred greater one-horned rhinoceros and they are seen on most jeep safaris, often within thirty or forty metres. A lens of 200 to 400 mm is ideal. Tiger are present but rarely seen in the thick cover, and a sighting should be treated as luck rather than a plan." },
      FAQ_WORKSHOP,
      FAQ_EQUIPMENT,
      FAQ_COMPANION,
      FAQ_LINGER,
      FAQ_WEATHER,
      FAQ_EARLY,
    ],
    inclusions: {
      airportTransfer: true,
      transport: ["Private air-conditioned vehicle for the full circuit, with photo stops on request along every drive."],
      accommodation: [
        "Three nights in Kathmandu, one at Nagarkot, one in Bandipur and two in Pokhara, all with breakfast.",
        "Two nights at a jungle lodge in Chitwan.",
      ],
      meals: ["Full board at the Chitwan jungle lodge for the duration of the stay."],
      entrance: "All monument and national park entry fees for the sites listed in the itinerary.",
      guide: "Government-licensed English-speaking guide, experienced in working with photographers, throughout the tour.",
      extra: ["Jeep safari and dugout canoe trip in Chitwan with a park naturalist.", "Rowing boat on Phewa Lake."],
    },
    exclusions: {
      meals: "Lunch and dinner outside Chitwan, where the choice is better left to you.",
      extra: ["Camera equipment, tripods and memory cards.", "Payments to sadhus and other portrait subjects."],
    },
    addons: [
      { title: "Everest Mountain Flight", description: "An hour along the Himalayan wall in a fixed-wing aircraft from Kathmandu at dawn, with a window seat guaranteed. Flown on the morning of day two or the final morning.", unit: "person", pricePerUnit: 220 },
      { title: "Bharatpur–Kathmandu Flight", description: "Replace the drive back from Chitwan with the twenty-minute flight from Bharatpur, and gain a free afternoon in Kathmandu.", unit: "person", pricePerUnit: 115 },
    ],
    fixedDepartureDay: "saturday",
    itineraryDescription: "Ten days in a loop through the Kathmandu valley, Nagarkot, Bandipur, Pokhara and Chitwan, with every sunrise and sunset spent at a location chosen for it.",
    inExDescription: "Airport transfers, a private vehicle throughout, nine nights' accommodation with breakfast, full board at Chitwan, all entry fees, the safari activities and a licensed guide are included, while international flights, visa, insurance, city lunches and dinners, camera equipment and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Nepal Photography Tour – 10 Days of Temples, Himalaya and Wildlife",
      description: "A ten-day Nepal photography tour through Kathmandu, Nagarkot, Bandipur, Pokhara and Chitwan, with every sunrise and sunset timed for the light.",
      keywords: "Nepal photography tour, Nepal photo tour, Himalaya sunrise photography, Bandipur, Chitwan wildlife photography, Pokhara Phewa Lake photography",
      tags: "Photography Tour, Nepal Tours, Kathmandu, Pokhara, Chitwan",
    },
  },
  days: [
    arrival("Your guide meets you at the hotel in the early evening to go through the ten days, check what equipment you have brought and agree the first morning's start, which is an early one."),
    {
      title: "Boudhanath at dawn, Pashupatinath and Patan",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...BOUDHA,
      html: p(
        "You leave the hotel at around 5:15 am for <strong>Boudhanath</strong>. The half hour before sunrise is the best the stupa offers: the dawn <em>kora</em> is crowded with pilgrims, butter lamps burn along the plinth and juniper smoke drifts across the dome. Breakfast is on a rooftop above the square once the sun is up.",
        "<strong>Pashupatinath</strong> follows while the light is still low over the Bagmati — the stone shrines on the terraces, the temple roofs across the river, and the <strong>sadhus</strong>, with whom your guide agrees the terms for portraits in advance.",
        "After a rest through the flat midday hours, the afternoon is in <strong>Patan</strong>: the Krishna Mandir, the gilded courtyard of the Golden Temple and the bronze casters' workshops in the lanes behind the Durbar Square, finishing in the square itself as the sun drops. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Bhaktapur and drive to Nagarkot (2,175 m)",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: NAGARKOT_PLACE,
      ...NAGARKOT,
      html: p(
        "A slower start, then east to <strong>Bhaktapur</strong>, the best preserved of the valley's three old cities and car-free inside its walls. The morning goes to the Durbar Square, the 55-window palace and the Golden Gate while the squares are still quiet.",
        "<strong>Potters' Square</strong> is worth an hour on its own: clay thrown on hand-turned wheels, pots drying in rows in the sun and kilns smoking under straw. After lunch the lanes around Dattatreya Square and the five-tiered <strong>Nyatapola</strong> take the afternoon light well.",
        "In the late afternoon the road climbs to <strong>Nagarkot (2,175 m)</strong> on the valley rim, arriving for sunset over the layered ridges to the west. Overnight at Nagarkot.",
      ),
    },
    {
      title: "Nagarkot sunrise and drive to Bandipur (1,030 m)",
      elevation: "1,030 m",
      accommodation: "Bandipur",
      placeDescription: BANDIPUR_PLACE,
      ...BANDIPUR,
      html: p(
        "Up before dawn for the viewpoint above <strong>Nagarkot</strong>. On a clear morning the range runs from Ganesh Himal and Langtang in the north-west across to the Everest massif on the eastern horizon, with the valleys below under mist — a long lens picks out individual peaks, a wide one takes the ridges.",
        "After breakfast the drive west follows the Prithvi Highway along the Trishuli river, about six hours with stops for the gorge, the suspension bridges and whatever is happening at the roadside.",
        "<strong>Bandipur (1,030 m)</strong> sits on a ridge above the highway: a single flagstoned bazaar of Newar townhouses with carved windows and no traffic at all. You arrive in time to work the street in the evening light. Overnight in Bandipur.",
      ),
    },
    {
      title: "Bandipur sunrise and drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A ten-minute walk before dawn brings you to the <strong>Tundikhel</strong>, the old parade ground at the edge of Bandipur's ridge. The panorama from here runs from Dhaulagiri past the Annapurnas and Manaslu to Langtang, with the Marsyangdi valley filled with cloud beneath.",
        "Back in the bazaar the town is waking up — shutters opening, children walking to school, vegetables laid out on the steps — and the morning light comes straight down the street.",
        "The drive to <strong>Pokhara (822 m)</strong> takes about two and a half hours. The late afternoon is on <strong>Phewa Lake</strong> by rowing boat, with the painted boats of the lakeside, the island temple of Tal Barahi and sunset behind the western hills. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise, Pokhara old bazaar and the World Peace Pagoda",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...SARANGKOT,
      html: p(
        "An early drive to <strong>Sarangkot (1,592 m)</strong>. The light reaches <strong>Dhaulagiri (8,167 m)</strong> first, then moves east along Annapurna South and Hiunchuli to the fishtail summit of <strong>Machhapuchhre</strong>, with Phewa Lake and the town in mist far below.",
        "If the air is still on the way down, a stop at the lakeshore gives the reflection of Machhapuchhre in the water, which lasts only until the first breeze. After breakfast the old bazaar of Pokhara and one of the Tibetan settlements fill the middle of the day.",
        "For sunset you cross the lake and climb to the <strong>World Peace Pagoda</strong>, the white stupa on the ridge opposite, which looks back across the water to the whole Annapurna range as it turns pink. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive to Chitwan (150 m) and sunset on the Rapti river",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "A last look at the lake if the morning is clear, then the drive south out of the hills, four to five hours with stops. The road drops through the Mahabharat range and comes out onto the flat, hot plain of the Terai — a different country from the one you woke up in.",
        "You reach the lodge beside <strong>Chitwan National Park (150 m)</strong> for a late lunch and a briefing from the naturalists. In the afternoon a walk through a neighbouring <strong>Tharu village</strong> gives mud-walled houses, ox carts and people coming in from the fields.",
        "Sunset is on the bank of the <strong>Rapti river</strong>, looking west across the water into the park. Overnight at the jungle lodge.",
      ),
    },
    {
      title: "Chitwan — canoe at dawn and jeep safari",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "The day starts on the water. A <strong>dugout canoe</strong> drifts down the Rapti in the dawn mist past gharial and mugger crocodiles on the sandbanks, with kingfishers, storks and egrets working the shallows — the quietest and most atmospheric hour of the trip.",
        "The middle of the day is hot and the animals lie up, so it is spent at the lodge. Use it to back up cards and clean sensors.",
        "The afternoon <strong>jeep safari</strong> goes deep into the park through sal forest and elephant grass. Greater one-horned rhinoceros are seen on most drives, along with spotted deer, sambar, wild boar, langur and peacock, and the low sun through the dust is the light wildlife photographers hope for. Overnight at the jungle lodge.",
      ),
    },
    {
      title: "Drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "One more early hour at the river or on the forest edge for the birds, then breakfast and the drive back into the hills, five to six hours along the Trishuli with a lunch stop. The Bharatpur flight can replace it if you have chosen the add-on.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the late afternoon. If there is energy left, the market streets of <strong>Ason</strong> and Indra Chowk are at their busiest in the early evening — spice sellers, brass shops, shrines wedged between stalls — and make a good last session.",
        "Dinner is your own choice tonight, and your guide will have suggestions. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free. Swayambhunath at first light is the usual choice for anyone with a late flight — the stupa, the prayer flags and the whole valley below in haze — and the vehicle is available for it."),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Annapurna Photography Tour — 7 days
// ─────────────────────────────────────────────────────────────────────────────
export const annapurnaPhotographyTour: Tour = {
  region: REGION,
  price: 890,
  difficulty: "easy",
  maxAltitude: 2060,
  center: [84.05, 28.2],
  zoom: 8.6,
  content: {
    slug: "annapurna-photography-tour",
    title: "Annapurna Photography Tour",
    overview:
      "<p>The <strong>Annapurna Photography Tour</strong> spends a week getting as close to the Annapurna range as a road and a short walk allow. Four mornings are given to sunrise on the mountains from four different angles — <strong>Sarangkot</strong> above Pokhara, the Gurung village of <strong>Ghandruk (1,940 m)</strong>, the forest clearing at <strong>Australian Camp (2,060 m)</strong> and the shore of Phewa Lake — and the evenings to the lake, the villages and the World Peace Pagoda.</p><p>It is built for photographers who want the Annapurnas large in the frame without committing to a trek. Ghandruk is reached by jeep and Australian Camp by a walk of little more than an hour, so the camera bag never has to be carried far, yet both put <strong>Annapurna South</strong>, <strong>Hiunchuli</strong> and <strong>Machhapuchhre</strong> directly in front of you. Flights between Kathmandu and Pokhara in both directions keep the travelling short.</p>",
    highlights: [
      ["Four Annapurna Sunrises", "Sarangkot, Ghandruk, Australian Camp and Phewa Lake — the range from four angles."],
      ["Ghandruk", "Slate roofs, stone lanes and Gurung village life beneath Annapurna South and Machhapuchhre."],
      ["Australian Camp", "A ridge-top clearing at 2,060 m with the whole range in a single panorama."],
      ["Phewa Lake", "Reflections at dawn, painted boats at dusk and the World Peace Pagoda above."],
      ["No Trek Required", "A jeep and two short walks put you where the photographs are."],
    ],
    sections: [
      {
        heading: "Best Time for Photography",
        content:
          "<p><strong>October to early December</strong> is the clearest period of the year in the Annapurna foothills, with sharp peaks at dawn, deep blue skies and the terraces around Ghandruk gold with ripe millet and rice. <strong>December to February</strong> is colder at the two lodge nights but equally clear, with fresh snow low on the mountains and very few other visitors.</p><p><strong>March and April</strong> are the months of the rhododendron, which flowers red through the forest below Australian Camp and gives the mountains a foreground. Haze builds through the day in spring, so the dawn session matters most. From June to September the monsoon keeps the peaks in cloud for days at a time, and this itinerary is not recommended then.</p>",
      },
      {
        heading: "Walking, Lodges and Pace",
        content:
          "<p>There are two walks. The climb from the road at Kande to <strong>Australian Camp</strong> takes an hour to an hour and a half on a stone-stepped forest trail, and the descent through Dhampus the next morning is about the same, downhill. Around Ghandruk the walking is on paved village lanes with a good many steps. A porter carries your overnight bag on the Australian Camp section, so you walk with the camera alone.</p><p>The two mountain nights are in simple, clean <strong>lodges</strong> with private rooms, hot showers and a dining room with a stove — comfortable, not luxurious, and chosen for where they stand. Each day has a dawn session and an evening session with the travelling done between them, and the pace is deliberately slow.</p>",
      },
      ETIQUETTE_SECTION,
      GEAR_SECTION,
    ],
    faqs: [
      { question: "How much walking is involved?", answer: "About three hours in total over two days, on the trail up to Australian Camp and down through Dhampus, plus as much or as little as you like on the stepped lanes of Ghandruk. A porter carries the overnight bags. Anyone who manages an hour of steady uphill walking will be comfortable; the highest point is 2,060 m, so altitude is not a concern." },
      { question: "Which mountains will we see?", answer: "Annapurna South (7,219 m), Hiunchuli (6,441 m) and Machhapuchhre (6,993 m) dominate from Ghandruk and Australian Camp, with Annapurna II, Annapurna IV and Lamjung Himal further east. From Sarangkot the view extends west to Dhaulagiri (8,167 m). Annapurna I itself is mostly hidden behind Annapurna South from these angles." },
      FAQ_WORKSHOP,
      FAQ_EQUIPMENT,
      FAQ_COMPANION,
      FAQ_WEATHER,
      FAQ_EARLY,
      FAQ_LINGER,
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Kathmandu – Pokhara – Kathmandu domestic flights."],
      transport: ["Private vehicle in Kathmandu and Pokhara, and a private jeep for the Ghandruk and Kande/Dhampus roads."],
      accommodation: [
        "Two nights in Kathmandu and two in Pokhara at 3-star hotels with breakfast.",
        "One night in a lodge at Ghandruk and one at Australian Camp.",
      ],
      meals: ["Dinner and breakfast at the Ghandruk and Australian Camp lodges."],
      entrance: "Viewpoint and museum entry fees at Sarangkot and Ghandruk.",
      permits: "Annapurna Conservation Area Permit (ACAP).",
      guide: "Government-licensed English-speaking guide, experienced in working with photographers, throughout the tour.",
      extra: ["Porter for the overnight bags on the Australian Camp section.", "Rowing boat on Phewa Lake."],
    },
    exclusions: {
      meals: "Lunches throughout, and dinners in Kathmandu and Pokhara.",
      extra: ["Camera equipment, tripods and memory cards."],
    },
    addons: [
      { title: "Ultra-light Flight in Pokhara", description: "A fifteen-minute flight in an open two-seat ultra-light over Phewa Lake and the Pokhara valley, for aerial pictures on a clear morning.", unit: "person", pricePerUnit: 165 },
    ],
    fixedDepartureDay: "friday",
    itineraryDescription: "Seven days from Kathmandu to the Annapurna foothills and back, with sunrise at Sarangkot, Ghandruk, Australian Camp and Phewa Lake.",
    inExDescription: "Airport transfers, return Kathmandu–Pokhara flights, private vehicles and jeeps, six nights' accommodation with breakfast, lodge dinners, the conservation area permit, a porter and a licensed guide are included, while international flights, visa, insurance, lunches, city dinners, camera equipment and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Annapurna Photography Tour – 7 Days of Himalayan Sunrises",
      description: "A seven-day Annapurna photography tour with sunrise at Sarangkot, Ghandruk, Australian Camp and Phewa Lake — the range up close with no trek required.",
      keywords: "Annapurna photography tour, Pokhara photography tour, Ghandruk sunrise, Australian Camp sunrise, Sarangkot sunrise, Machhapuchhre photography",
      tags: "Photography Tour, Annapurna, Pokhara, Ghandruk, Sunrise Tour",
    },
  },
  days: [
    arrival("Your guide meets you at the hotel in the early evening to go through the week, check your equipment and bags for the two lodge nights, and confirm the time of the morning flight."),
    {
      title: "Fly to Pokhara (822 m) and evening on Phewa Lake",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A morning flight of twenty-five minutes takes you west to <strong>Pokhara (822 m)</strong>. Ask for a seat on the right-hand side: the aircraft runs parallel to the Himalaya the whole way, and Ganesh Himal, Manaslu and the Annapurnas pass the window in turn.",
        "After checking in beside the lake the middle of the day is free. Pokhara's lakeside is easy to explore on foot, and the guide will walk you round the places that work for the evening.",
        "The late afternoon is on <strong>Phewa Lake</strong> in a rowing boat — the painted wooden boats drawn up along the shore, the island temple of <strong>Tal Barahi</strong>, fishermen with hand nets and the sun going down behind the western ridge. Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise and drive to Ghandruk (1,940 m)",
      elevation: "1,940 m",
      accommodation: "Ghandruk",
      placeDescription: GHANDRUK_PLACE,
      ...GHANDRUK,
      html: p(
        "You leave in the dark for <strong>Sarangkot (1,592 m)</strong>. The first light lands on <strong>Dhaulagiri (8,167 m)</strong> far to the west and moves east along Annapurna South and Hiunchuli to <strong>Machhapuchhre</strong>, with the lake and the town under mist below.",
        "After breakfast a private jeep drives up the Modi Khola valley, about three hours through Nayapul and Birethanti and then steeply up a hill road to the edge of <strong>Ghandruk (1,940 m)</strong>, one of the largest Gurung villages in Nepal.",
        "The afternoon is on foot in the village: slate roofs stepping down the hillside, stone-paved lanes, women weaving on verandas and the small Gurung museum. As the sun drops, <strong>Annapurna South</strong> and Machhapuchhre catch the last light directly above the rooftops. Overnight at a lodge in Ghandruk.",
      ),
    },
    {
      title: "Ghandruk sunrise and walk to Australian Camp (2,060 m)",
      elevation: "2,060 m",
      accommodation: "Australian Camp",
      placeDescription: AUSTRALIAN_CAMP_PLACE,
      ...AUSTRALIAN_CAMP,
      html: p(
        "Sunrise from the top of <strong>Ghandruk</strong> is the closest view of the trip: <strong>Annapurna South (7,219 m)</strong> and <strong>Hiunchuli</strong> fill the head of the valley and the fishtail of Machhapuchhre stands to the right, lit from the side. The village wakes beneath it — smoke from the kitchens, mule trains on the lanes.",
        "After breakfast the jeep takes you back down the valley and round to <strong>Kande</strong>, about two and a half hours. From there a stone-stepped trail climbs through oak and rhododendron forest for an hour to an hour and a half, with a porter carrying the overnight bags.",
        "<strong>Australian Camp (2,060 m)</strong> is a grassy clearing on the ridge with the range laid out in a single line from Annapurna South to Lamjung Himal. Sunset is from the lodge door. Overnight at a lodge at Australian Camp.",
      ),
    },
    {
      title: "Australian Camp sunrise, walk through Dhampus and return to Pokhara",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "You are already standing at the viewpoint when the light arrives, which is the reason for sleeping up here. The panorama runs from <strong>Annapurna South</strong> and <strong>Hiunchuli</strong> through <strong>Machhapuchhre</strong> to Annapurna IV, Annapurna II and Lamjung Himal, and on a cold morning the valleys below are filled with cloud.",
        "After breakfast the trail descends gently for about an hour and a half through forest and terraced fields to <strong>Dhampus (1,650 m)</strong>, a Gurung village strung along a ridge with the mountains behind every farmhouse.",
        "The vehicle meets you there for the hour's drive back to Pokhara. In the late afternoon you cross the lake and climb to the <strong>World Peace Pagoda</strong> for sunset on the Annapurnas above the water. Overnight in Pokhara.",
      ),
    },
    {
      title: "Phewa Lake at dawn and fly to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A last early start, this time only as far as the lakeshore. In the still air before sunrise <strong>Machhapuchhre</strong> and the Annapurnas reflect in <strong>Phewa Lake</strong>, with the first boats pushing out across the picture; the reflection goes with the first breeze, usually within an hour.",
        "After breakfast you fly back to <strong>Kathmandu (1,400 m)</strong> — the mountains are on the left-hand side this time — and check in to your hotel.",
        "The late afternoon is at <strong>Boudhanath</strong>, the great white stupa at the centre of Kathmandu's Tibetan community. You walk the kora with the evening crowd and stay through the blue hour, when the butter lamps are lit and the dome is floodlit against the sky. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free for a last walk through the markets of Ason and Indra Chowk, or simply for packing equipment properly for the flight home."),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Upper Mustang Photography Tour by Jeep — 11 days
// ─────────────────────────────────────────────────────────────────────────────
export const upperMustangPhotographyTour: Tour = {
  region: REGION,
  price: 2250,
  difficulty: "moderate",
  maxAltitude: 4010,
  center: [84.2, 28.55],
  zoom: 7.4,
  content: {
    slug: "upper-mustang-photography-tour",
    title: "Upper Mustang Photography Tour by Jeep",
    overview:
      "<p>The <strong>Upper Mustang Photography Tour</strong> goes by jeep to <strong>Lo Manthang (3,840 m)</strong>, the walled capital of the former kingdom of Lo, through a landscape unlike anything else in Nepal. North of the Himalaya the monsoon barely arrives, and the country is high desert: ochre and rust-red cliffs fluted by the wind, cave dwellings cut into the rock, whitewashed villages with striped monastery walls, and barley fields that are the only green for miles.</p><p>The route follows the <strong>Kali Gandaki</strong> from Pokhara to <strong>Kagbeni</strong>, enters the restricted area and climbs over a series of 4,000 m passes to Charang and Lo Manthang, with a full day for the city and the cave complex at Chhoser. Travelling by jeep keeps eleven days enough for a journey that takes over two weeks on foot, and means the equipment rides with you and the vehicle stops wherever the light does.</p>",
    highlights: [
      ["Lo Manthang", "A walled medieval city of mud brick, monasteries and prayer wheels on the edge of the Tibetan plateau."],
      ["The Desert Landscape", "Wind-carved cliffs in ochre, grey and red, at their best in low morning and evening light."],
      ["The Chhoser Caves", "A five-storey cave dwelling cut into a cliff face, north of Lo Manthang."],
      ["Kagbeni and Charang", "Fortified villages, a ruined palace and red-walled monasteries above the gorge."],
      ["By Jeep, at Your Pace", "Your equipment travels with you and the vehicle stops wherever the light does."],
    ],
    sections: [
      {
        heading: "Best Time for Upper Mustang",
        content:
          "<p>Upper Mustang lies in the rain shadow of the Himalaya, so the season is long: <strong>March to November</strong>. Spring brings clear cold air, snow still on the passes and the green of the first barley; the three-day <strong>Tiji festival</strong> in Lo Manthang falls in May, on dates set by the Tibetan calendar, and is the most photographed event in the region.</p><p><strong>June to September</strong> is dry in Mustang itself, with towering cloud and the fields at their greenest, though the road up from Pokhara can be cut by landslides and days should be held in reserve. <strong>October and November</strong> give the sharpest light of the year and the harvest. In winter most of Lo Manthang's residents move south and the lodges close, so the tour does not run from December to February.</p>",
      },
      {
        heading: "Permits and the Restricted Area",
        content:
          "<p>Everything north of Kagbeni is a <strong>restricted area</strong>. Entry requires a special permit that is issued only in Kathmandu, only through a registered agency, and only to travellers accompanied by a licensed guide. The restricted-area permit and the Annapurna Conservation Area Permit are both <strong>included in your price</strong>, and we handle the application.</p><p>The immigration office needs your original passport on a working day, which is why the second day of the tour is spent in Kathmandu. The permit is checked at the police post in Kagbeni on the way in and again on the way out. Regulations for the restricted areas, including the minimum party size, have been revised more than once in recent years — if you are travelling alone, tell us when you enquire and we will confirm what currently applies.</p>",
      },
      {
        heading: "Altitude, Roads and Lodges",
        content:
          "<p>The tour reaches <strong>4,010 m</strong> at the Nyi La and sleeps at 3,560 m in Charang and 3,840 m in Lo Manthang. Arriving by jeep gains height faster than walking does, so the night at Kagbeni (2,810 m) is there for acclimatisation. Mild headache and poor sleep are common for the first night or two; your guide carries a first-aid kit, watches for symptoms and will descend with you if necessary.</p><p>North of Jomsom the road is an unsealed jeep track — dusty, rough and slow, with river crossings — and the days are long even where the distances are short. Lodges are family-run and simple: twin rooms, attached bathrooms in the better ones, a warm dining room and plain, filling food. All meals are included on the Mustang days.</p>",
      },
      {
        heading: "Camera Gear, Dust and Power",
        content:
          "<p><strong>Dust</strong> is the main hazard to equipment. Keep cameras in a closed bag while the jeep is moving, change lenses indoors or inside the vehicle rather than in the wind, and bring a blower, cloths and sensor swabs. A wide-angle for the landscape and the alleys of Lo Manthang and a telephoto for compressing the layered cliffs are the two lenses that earn their place; a polariser helps with the deep blue sky at this height.</p><p>Electricity reaches every overnight stop but is unreliable, so carry spare batteries and a power bank and charge whenever you can. Nights are cold from March to May and in October and November, which shortens battery life. Photography is forbidden inside the monasteries of Lo Manthang and Charang, and drones may not be flown in the restricted area without separate government permission.</p>",
      },
    ],
    faqs: [
      { question: "How rough is the jeep journey?", answer: "Rough, north of Jomsom. The track is unsealed, rutted and dusty, with stream crossings and steep switchbacks over the passes, and average speeds are low. The vehicles are four-wheel-drive jeeps with drivers who work this road for a living. Anyone with a serious back problem should think carefully; everyone else finds it tiring rather than difficult." },
      { question: "Will the altitude be a problem?", answer: "For most people, no more than a headache and a restless first night. The highest sleeping altitude is 3,840 m and the highest pass 4,010 m, reached after a night at 2,810 m in Kagbeni. Drink plenty of water, avoid alcohol on the way up and tell your guide early if you feel unwell. Speak to your doctor beforehand if you have a heart or lung condition." },
      { question: "Can I photograph inside the monasteries?", answer: "No. Photography is prohibited inside Thubchen, Jampa and Chode monasteries in Lo Manthang and inside the monastery at Charang, to protect the fifteenth-century murals, and the rule is enforced. Exteriors, courtyards, monks outside the halls and the city itself are all open to you, and the interiors are worth seeing with the camera put away." },
      { question: "Can the tour be timed for the Tiji festival?", answer: "Yes. Tiji is held over three days in May in the square in front of the royal palace in Lo Manthang, with masked dances performed by the monks of Chode monastery. The dates change each year with the Tibetan calendar. Lodges fill months ahead, so tell us as early as you can and we will set the itinerary to put you in the city for all three days." },
      { question: "Why is the tour more expensive than others of the same length?", answer: "Three things: the restricted-area permit, which is charged by the government per person; the four-wheel-drive jeep and driver, which are expensive to run on the Mustang track; and the two domestic flights. All three are included in the price, along with every meal on the Mustang days." },
      FAQ_WORKSHOP,
      FAQ_EQUIPMENT,
      FAQ_LINGER,
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Kathmandu – Pokhara – Kathmandu domestic flights."],
      transport: ["Private four-wheel-drive jeep with driver from Pokhara to Lo Manthang and back, and a private vehicle in Kathmandu and Pokhara."],
      accommodation: [
        "Three nights in Kathmandu and two in Pokhara at 3-star hotels with breakfast.",
        "Five nights in lodges at Kagbeni, Charang, Lo Manthang and Jomsom.",
      ],
      meals: ["All meals on the road in Mustang, from lunch on day four to lunch on day nine."],
      entrance: "Monastery and museum entry fees in Kagbeni, Charang, Lo Manthang and Chhoser.",
      permits: "Upper Mustang Restricted Area Permit and Annapurna Conservation Area Permit (ACAP).",
      guide: "Government-licensed English-speaking guide, experienced in working with photographers, throughout the tour.",
      extra: ["First-aid kit carried by the guide."],
    },
    exclusions: {
      meals: "Lunch and dinner in Kathmandu and Pokhara.",
      extra: ["Camera equipment, tripods and memory cards.", "Hot showers, battery charging and Wi-Fi where lodges charge for them."],
      unforeseen: "Any additional cost caused by landslides, road closures, flight delays, weather or other circumstances beyond our control.",
    },
    luxuryVehicleAddon: false,
    addons: [
      { title: "Jomsom–Pokhara Flight", description: "Replace the day-long drive down the Kali Gandaki on day nine with the twenty-minute morning flight from Jomsom, weather permitting.", unit: "person", pricePerUnit: 140 },
    ],
    fixedDepartureDay: "sunday",
    itineraryDescription: "Eleven days from Kathmandu to the walled city of Lo Manthang and back by jeep, through the Kali Gandaki gorge and the high desert of Upper Mustang.",
    inExDescription: "Airport transfers, return Kathmandu–Pokhara flights, a private four-wheel-drive jeep, ten nights' accommodation, all meals on the Mustang days, the restricted-area and conservation permits, entry fees and a licensed guide are included, while international flights, visa, insurance, city lunches and dinners, camera equipment and tips are excluded.",
    bestTime: "Mar-Nov",
    meta: {
      title: "Upper Mustang Photography Tour by Jeep – 11 Days to Lo Manthang",
      description: "An eleven-day Upper Mustang photography tour by jeep to the walled city of Lo Manthang, with the Chhoser caves, Kagbeni, Charang and the desert cliffs in the best light.",
      keywords: "Upper Mustang photography tour, Mustang jeep tour, Lo Manthang photography, Tiji festival photography, Chhoser caves, Mustang photo tour",
      tags: "Photography Tour, Upper Mustang, Lo Manthang, Jeep Tour, Restricted Area",
    },
  },
  days: [
    arrival("Your guide meets you at the hotel in the early evening to go through the route, check your equipment and collect your passport details for the restricted-area permit, which is applied for in the morning."),
    {
      title: "Kathmandu — permit day, Boudhanath at dawn and Swayambhunath at sunset",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...BOUDHA,
      html: p(
        "While our office takes your passport to the immigration department for the <strong>Upper Mustang permit</strong>, the day is yours to photograph. It starts before sunrise at <strong>Boudhanath</strong>, where the dawn kora circles the stupa under butter-lamp light, and where the Tibetan Buddhist culture you will meet again in Mustang has its centre in Kathmandu.",
        "After breakfast on a rooftop above the square and a rest through the flat midday light, the afternoon is free for the lanes of Thamel and Ason.",
        "Sunset is at <strong>Swayambhunath</strong>, the hilltop stupa west of the city, with prayer flags, monkeys and the whole valley below in haze. Your guide returns the passports and the permit in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Pokhara (822 m) and sunset from the World Peace Pagoda",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A morning flight of twenty-five minutes takes you to <strong>Pokhara (822 m)</strong>. Sit on the right-hand side for the mountains: Ganesh Himal, Manaslu and the Annapurnas pass the window in turn.",
        "The afternoon is a gentle one beside <strong>Phewa Lake</strong> — the last warm, low-altitude day before the road north — and a chance to buy anything forgotten, from lens cloths to a down jacket, in the lakeside shops.",
        "Late in the day you cross the lake and climb to the <strong>World Peace Pagoda</strong> for sunset on the Annapurna range above the water. You meet the jeep driver this evening and load the vehicle for an early start. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive up the Kali Gandaki gorge to Kagbeni (2,810 m)",
      elevation: "2,810 m",
      accommodation: "Kagbeni",
      placeDescription: KAGBENI_PLACE,
      ...KAGBENI,
      html: p(
        "A long and remarkable day, eight to nine hours with stops. The jeep runs west to Beni and turns north up the <strong>Kali Gandaki</strong>, which cuts between <strong>Dhaulagiri (8,167 m)</strong> and Annapurna I to form one of the deepest gorges on earth. The road passes the hot springs at Tatopani and the Rupse waterfall as the forest changes from subtropical to pine.",
        "Above Ghasa the valley opens and dries out. You stop in <strong>Marpha</strong>, a whitewashed Thakali village of flat roofs stacked with firewood, known for its apple orchards, and pass through Jomsom under the north face of Nilgiri.",
        "<strong>Kagbeni (2,810 m)</strong> arrives in the late afternoon: a fortified village of mud-brick alleys and a red monastery at the meeting of two rivers, looking north into Upper Mustang. Overnight at a lodge in Kagbeni.",
      ),
    },
    {
      title: "Into the restricted area — Kagbeni to Charang (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Charang",
      placeDescription: CHARANG_PLACE,
      ...CHARANG,
      html: p(
        "An hour in the lanes of <strong>Kagbeni</strong> at first light, then the permits are stamped at the police post and the jeep enters the restricted area. The track follows the wide gravel bed of the Kali Gandaki before climbing past Chele and Samar onto the plateau.",
        "The landscape is the subject all day: fluted cliffs in grey, ochre and red, cave mouths high in the rock, and a string of passes including the <strong>Nyi La (4,010 m)</strong>, the highest point of the tour. At <strong>Ghami</strong> the road passes the longest mani wall in Mustang, built of carved prayer stones and painted in stripes.",
        "<strong>Charang (3,560 m)</strong> is reached in the afternoon, six to seven hours after setting out. A white five-storey palace, now in ruins, and a red monastery stand on a spur above the gorge, and both take the evening light. Overnight at a lodge in Charang.",
      ),
    },
    {
      title: "Charang to Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: LO_MANTHANG_PLACE,
      ...LO_MANTHANG,
      html: p(
        "Sunrise on the palace and the monastery of <strong>Charang</strong>, and time in the village as the animals are driven out to graze. The interior of the monastery, with its old murals and library, is visited with the camera put away.",
        "The drive to Lo Manthang is short, about an hour and a half. From the <strong>Lo La (3,950 m)</strong> the walled city appears below for the first time, a compact block of white and red on a brown plain with the Tibetan border ridges behind — the picture most people come for, and the jeep waits as long as you need.",
        "<strong>Lo Manthang (3,840 m)</strong> fills the afternoon. Inside the wall are about a hundred and fifty houses, the royal palace and three monasteries, linked by alleys just wide enough for a horse. Sunset is from the roof of the lodge or from the low hill to the north. Overnight at a lodge in Lo Manthang.",
      ),
    },
    {
      title: "Lo Manthang — the Chhoser caves and the walled city",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: LO_MANTHANG_PLACE,
      ...LO_MANTHANG,
      html: p(
        "Before breakfast you climb the hill above the city for sunrise on the walls and the snow peaks to the south. The jeep then drives an hour north toward the Tibetan border to <strong>Chhoser</strong>, where the <strong>Jhong cave</strong>, a five-storey dwelling of more than forty rooms, is cut into a vertical cliff and climbed by wooden ladders.",
        "The nearby cliff monastery of Nyphu, the villages of the upper valley and the horsemen on the track back all give pictures, and the return to Lo Manthang is in time for lunch.",
        "The afternoon is inside the wall with your guide: <strong>Thubchen</strong> and <strong>Jampa</strong> monasteries, whose fifteenth-century murals are seen but not photographed, the palace square, and the lanes where people sit spinning wool in the sun. The evening light on the city wall is the last session. Overnight in Lo Manthang.",
      ),
    },
    {
      title: "Lo Manthang to Jomsom (2,720 m) via the red cliffs of Dhakmar",
      elevation: "2,720 m",
      accommodation: "Jomsom",
      placeDescription: JOMSOM_PLACE,
      ...JOMSOM,
      html: p(
        "A last sunrise over the city from the Lo La, then the long drive south, seven to eight hours with stops. The light falls differently on the same country in this direction, and the cliffs you passed in afternoon shade are now lit from the front.",
        "From Ghami a short detour leads to <strong>Dhakmar</strong>, a village beneath a wall of deep red cliffs riddled with caves — in legend, stained by the blood of a demon killed by Guru Rinpoche, and one of the most striking sights in Mustang.",
        "The track recrosses the passes and drops to the Kali Gandaki, leaving the restricted area at the Kagbeni checkpoint. You reach <strong>Jomsom (2,720 m)</strong> in the early evening, with Nilgiri above the town. Overnight at a lodge in Jomsom.",
      ),
    },
    {
      title: "Drive from Jomsom to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Morning in Jomsom is the calm part of the day, before the valley wind starts, and the first light on <strong>Nilgiri</strong> and Dhaulagiri from the edge of town is worth getting up for.",
        "The drive back down the <strong>Kali Gandaki</strong> takes seven to eight hours, descending from desert through pine forest to rice terraces and banana trees in a single day. There is time for a stop at the hot springs of Tatopani or for anything missed on the way up. Travellers who have chosen the flight add-on are in Pokhara by mid-morning instead.",
        "You reach <strong>Pokhara (822 m)</strong> in the late afternoon, with a hot shower, a lakeside dinner and thick air to enjoy. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "If the morning is still, the shore of <strong>Phewa Lake</strong> before sunrise gives Machhapuchhre and the Annapurnas reflected in the water — a soft, green contrast to the week behind you.",
        "After breakfast you fly back to <strong>Kathmandu (1,400 m)</strong>, with the mountains on the left-hand side, and check in to your hotel. This day also serves as the reserve should a landslide or bad weather have delayed the journey out of Mustang.",
        "The afternoon is free. <strong>Patan Durbar Square</strong> is twenty minutes away and at its best in the last two hours of light, and the vehicle is available if you would like to go. Overnight in Kathmandu.",
      ),
    },
    departure("The morning is free for a last walk in Thamel or simply for cleaning the Mustang dust out of your equipment before it is packed."),
  ],
};

/** Every tour in the Photography Tour region, shortest first. */
export const photographyTours: Tour[] = [
  kathmanduPhotographyTour,
  annapurnaPhotographyTour,
  nepalPhotographyTour,
  upperMustangPhotographyTour,
];
