/**
 * Region: Wildlife Tours.
 *
 * Chitwan and Bardia, each offered at two lengths. The shorter version is the
 * standard add-on to a Kathmandu trip; the longer one buys the extra day that
 * makes a tiger sighting realistic rather than lucky.
 */
import { KATHMANDU, KTM_PLACE, POKHARA, PKR_PLACE, p, type Tour, type TourDay } from "./types";

const REGION = "Wildlife Tours";

const CHITWAN = { lng: 84.4990, lat: 27.5800 };
const BARDIA = { lng: 81.3300, lat: 28.3900 };
const NEPALGUNJ = { lng: 81.6250, lat: 28.0654 };

const CHITWAN_PLACE = "Nepal's first national park, on the subtropical plains of the Terai.";
const BARDIA_PLACE = "The largest national park in the Terai, on the Karnali floodplain in the far west.";

/** Shared wording for the four detail sections, tuned per park. */
const sections = (park: "Chitwan" | "Bardia") => [
  {
    heading: "Best Time to Visit",
    content:
      park === "Chitwan"
        ? "<p><strong>October to March</strong> is the prime window. The air is dry and clear, the grass has not yet grown tall, and animals concentrate around the rivers and oxbow lakes where they are far easier to see. Mornings are cold enough for a fleece on the jeep and the afternoons are pleasant.</p><p><strong>February and March</strong> are the best of it: the park burns and cuts the elephant grass in those months, and with the cover down sightings of rhino, sloth bear and deer rise sharply. April and May are hot but productive around water. The monsoon from June to September brings heavy rain, high rivers and closed trails, and much of the park is difficult to work.</p>"
        : "<p><strong>October to April</strong> is the season, and Bardia's tiger density makes the cool months genuinely rewarding. From October the floodwaters drop and the Karnali braids into channels where animals come to drink; by February and March the grass is cut and the visibility is at its best.</p><p><strong>March and April</strong> are peak tiger months — hot enough that the cats come to water in daylight, which is when almost every sighting happens. May is hotter still and can be uncomfortable. The monsoon from June to September floods the park and closes most of the interior, so it is not offered then.</p>",
  },
  {
    heading: "What the Safari Involves",
    content:
      "<p>Activities run in two blocks, early morning and late afternoon, because that is when the animals move. A <strong>jeep safari</strong> covers ground and reaches the grasslands and river crossings; a <strong>guided jungle walk</strong> puts you on foot with two naturalists, which is quieter, more intense and where the smaller things — birds, tracks, sloth bear diggings — actually get noticed.</p><p>Time on the river matters as much. A <strong>canoe trip</strong> down the current drifts past gharial and marsh mugger crocodiles basking on the banks and is the best birding of the trip. Between blocks the middle of the day is deliberately empty: it is hot, the animals are lying up, and the lodge veranda is the right place to be.</p>",
  },
  {
    heading: "What You Might See",
    content:
      park === "Chitwan"
        ? "<p>Chitwan holds around <strong>700 greater one-horned rhinoceros</strong>, and seeing one is close to routine — most visitors meet several. Also common: spotted deer, sambar, wild boar, langur and rhesus macaque, and gharial and mugger crocodiles on the river. Sloth bear and leopard are present and seen occasionally.</p><p><strong>Bengal tiger</strong> live here in good numbers but are seldom seen in Chitwan's thick cover; treat a sighting as a gift rather than an expectation. Birdlife is exceptional with more than 500 species recorded, including the giant hornbill, paradise flycatcher and, in winter, large numbers of migratory waterfowl.</p>"
        : "<p>Bardia is the best place in Nepal to see a <strong>wild Bengal tiger</strong>. The park holds a strong population in far less visitor pressure than Chitwan, and in the dry months the standard method is simply to sit quietly at a river crossing and wait. Sightings are never guaranteed, but the odds here are the best in the country.</p><p>Also present: greater one-horned rhino, wild elephant, swamp deer, blue bull, sloth bear and, in the Karnali, the <strong>Gangetic dolphin</strong> and gharial crocodile. More than 400 bird species have been recorded, and the far-west location means fewer jeeps and a good deal more silence than the parks near the highway.</p>",
  },
  {
    heading: "What to Bring",
    content:
      "<p>Wear <strong>neutral colours</strong> — greens, browns and greys. Bright clothing and white are visible a long way off in the grass, and the naturalists will ask you to change. Add long sleeves and trousers for the walks, closed shoes, a sun hat and a fleece for the cold morning jeep runs between November and February.</p><p><strong>Binoculars are the single most useful thing you can pack</strong>, and one pair between two is not enough. Also bring insect repellent, high-factor sunscreen, a refillable bottle, a camera with as much reach as you own, and a torch for the lodge paths after dark. Leave drones at home; they are prohibited in every national park in Nepal.</p>",
  },
];

/** The eight questions asked about every jungle trip, tuned per park. */
const faqs = (park: "Chitwan" | "Bardia") => [
  { question: "Will we definitely see a rhino or a tiger?", answer: park === "Chitwan"
    ? "Rhino, almost certainly — Chitwan's population is large and habituated, and most visitors see several over two days of activities. Tiger, no. They are here in numbers but the cover is thick and sightings are uncommon. Anyone promising you a tiger is selling something."
    : "Rhino and deer are likely. Tiger is why most people come to Bardia and the odds here are the best in Nepal, particularly in March and April, but it remains a wild animal in a large park. Plan the trip around the place rather than around one species and you will not be disappointed." },
  { question: "How do we get there and how long does it take?", answer: park === "Chitwan"
    ? "A tourist bus or private vehicle from Kathmandu takes five to six hours on the Prithvi and Mugling highways, or two to three hours from Pokhara. There is also a short domestic flight to Bharatpur, twenty minutes from the park, which we can arrange as an add-on."
    : "Bardia is in the far west. The practical route is a one-hour flight from Kathmandu to Nepalgunj followed by a two to three hour drive, which is what this itinerary uses. The alternative is a long day of driving — around fifteen hours — which we do not recommend." },
  { question: "Is the jungle walk safe?", answer: "It is run with two trained naturalists, one leading and one at the back, and they brief you properly before you set off: how to stand still, where to move if an animal is encountered, and which trees to get behind. Rhino and sloth bear are the animals treated with most caution. Follow the guides and the walk is safe; wander off and it is not." },
  { question: "Do you use elephant-back safaris?", answer: "No. We stopped offering elephant rides because of the welfare conditions involved in keeping and training the animals. Jeep, canoe and foot cover the park better in any case. If you want to see elephants there is a government breeding centre in Chitwan that can be visited on the itinerary." },
  { question: "What is the accommodation like?", answer: "A comfortable lodge or resort on the edge of the park with en-suite rooms, fans or air conditioning depending on the season, a garden and a restaurant. It is not luxury and it is not basic — think a quiet, well-run place with a veranda facing the buffer forest and no traffic noise." },
  { question: "Are meals included?", answer: "Yes — all meals from the first lunch on arrival to breakfast on the last morning, served at the lodge. The food is a mix of Nepali and continental, and vegetarian, vegan and other dietary requirements are straightforward to arrange if you tell us in advance." },
  { question: "How much walking is involved?", answer: "The jungle walks run two to three hours on flat ground at an easy pace, with a lot of standing still and listening. Anyone comfortable on their feet for a morning will manage. The jeep and canoe activities involve almost no walking, so a trip can be built around the vehicle sessions if mobility is a concern." },
  { question: "What about mosquitoes and malaria?", answer: "The Terai has mosquitoes, most active at dusk. Cases of malaria are now rare in these districts but dengue occurs, so repellent, long sleeves in the evening and the lodge's mosquito nets are the sensible precautions. Ask your own doctor about prophylaxis well before travelling." },
];

const jungleInclusions = (park: string, nights: number) => ({
  transport: [
    park === "Chitwan"
      ? "Tourist bus or private vehicle transfer from Kathmandu or Pokhara to Chitwan and back."
      : "Private vehicle transfer between Nepalgunj airport and Bardia National Park.",
    "All park transfers and jeep safari transport inside the national park.",
  ],
  accommodation: [`${nights} night(s) at a jungle lodge on the edge of the park, in an en-suite twin or double room.`],
  meals: ["All meals at the lodge for the duration of the stay, plus tea and coffee."],
  entrance: `${park} National Park entry permits and all activity fees.`,
  guide: "Government-licensed naturalist guides for every jeep safari, jungle walk and canoe trip.",
  extra: ["Tharu cultural programme at the lodge on one evening.", "Bird watching walk with the naturalist."],
});

export const chitwan3Day: Tour = {
  region: REGION,
  price: 245,
  difficulty: "easy",
  maxAltitude: 150,
  center: [84.499, 27.58],
  zoom: 10,
  content: {
    slug: "chitwan-national-park-tour-3-days",
    title: "Chitwan National Park Tour – 3 Days",
    overview:
      "<p>The <strong>3-day Chitwan National Park tour</strong> is the standard way to add wildlife to a Nepal trip, and two full blocks of activity are enough to see the park properly. Chitwan was the country's first national park and is a UNESCO World Heritage Site, protecting a stretch of subtropical sal forest, elephant grass and river floodplain on the Terai plains south of the hills.</p><p>The days are built around dawn and dusk, when animals move: a <strong>jeep safari</strong> into the grasslands, a <strong>guided walk</strong> on foot with two naturalists, and a <strong>dugout canoe</strong> down the Rapti past basking crocodiles. Chitwan holds around 700 greater one-horned rhinoceros and most visitors meet several. Evenings are for the lodge veranda and a Tharu stick-dance performance in the village.</p>",
    highlights: [
      ["One-Horned Rhinoceros", "See the animal Chitwan is famous for, with a population of around 700 and sightings on most drives."],
      ["Jeep, Canoe and Foot", "Cover the park three ways, each one showing a different part of it."],
      ["A UNESCO World Heritage Site", "Visit Nepal's first national park, protected since 1973 and listed in 1984."],
      ["Over 500 Bird Species", "Watch giant hornbill, paradise flycatcher and, in winter, migratory waterfowl on the Rapti."],
      ["Tharu Village and Culture", "Spend an evening with the Tharu, the indigenous people of the Terai, and their stick dance."],
    ],
    sections: sections("Chitwan"),
    faqs: faqs("Chitwan"),
    inclusions: jungleInclusions("Chitwan", 2),
    exclusions: { extra: ["Optional elephant breeding centre entry fee.", "Alcoholic drinks at the lodge."] },
    addons: [
      {
        title: "Flight to Bharatpur",
        description: "Replace the road transfer with the 20-minute flight from Kathmandu to Bharatpur, twenty minutes from the lodge, in each direction.",
        unit: "person",
        pricePerUnit: 220,
      },
    ],
    fixedDepartureDay: "friday",
    itineraryDescription: "Three days on the Terai with two full blocks of jeep, canoe and walking safari inside Chitwan National Park.",
    inExDescription: "Road transfers, two nights at a jungle lodge, all meals, park permits, every activity fee and licensed naturalist guides are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Chitwan National Park Tour – 3 Days Jungle Safari in Nepal",
      description: "A 3-day Chitwan National Park safari with jeep drives, a guided jungle walk, a canoe trip on the Rapti and a Tharu cultural evening.",
      keywords: "Chitwan National Park tour, Chitwan jungle safari, one horned rhino Nepal, 3 day Chitwan tour, Nepal wildlife tour, Tharu village",
      tags: "Chitwan National Park, Wildlife Tours, Jungle Safari, Terai, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive to Chitwan (150 m) and afternoon Tharu village visit",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "The drive leaves Kathmandu after breakfast and follows the Prithvi Highway west along the Trishuli river before turning south at Mugling onto the Terai plains — five to six hours with a lunch stop, or two to three hours if you are coming from Pokhara.",
        "The change in the country is total. The hills give way to flat, hot, intensely green farmland, and the first sight of <strong>Chitwan</strong> is a wall of sal forest across the Rapti river.",
        "After lunch at the lodge and a briefing from the naturalists, the afternoon goes to the <strong>Tharu village</strong> next to the park. The Tharu have farmed this valley for centuries and carry a genetic resistance to malaria that let them live here when nobody else could. The evening ends with the stick dance at the lodge. Overnight at Chitwan.",
      ),
    },
    {
      title: "Full day of jeep safari, canoe trip and jungle walk",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "An early call and tea before first light, because the first two hours after dawn are the best of the day. A <strong>dugout canoe</strong> carries the group silently down the Rapti with gharial and mugger crocodiles on the sandbanks and kingfishers working the shallows.",
        "The canoe lands inside the park and a <strong>guided walk</strong> follows with two naturalists — slow, quiet and attentive, reading tracks and diggings, with rhino a real possibility at close quarters and the briefing on what to do if that happens taken seriously.",
        "The middle of the day is deliberately free: it is hot, the animals are lying up, and the lodge veranda is the right place for it. The afternoon <strong>jeep safari</strong> runs into the grasslands and river crossings until dusk, which is when rhino come out to feed.",
        "Overnight at Chitwan.",
      ),
    },
    {
      title: "Morning bird walk and drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A last early start for a <strong>bird walk</strong> along the river and the buffer forest with the naturalist — the quietest and often the most rewarding activity of the trip, with more than 500 species recorded in the park.",
        "Breakfast at the lodge afterwards, then the vehicle leaves mid-morning for the drive back north.",
        "You climb off the plains at Mugling and follow the Trishuli up into the hills, reaching <strong>Kathmandu (1,400 m)</strong> in the late afternoon, or Pokhara in around three hours if you are continuing west. Overnight in Kathmandu.",
      ),
    },
  ],
};

export const chitwan4Day: Tour = {
  region: REGION,
  price: 330,
  difficulty: "easy",
  maxAltitude: 150,
  center: [84.499, 27.58],
  zoom: 10,
  content: {
    slug: "chitwan-national-park-tour-4-days",
    title: "Chitwan National Park Tour – 4 Days",
    overview:
      "<p>The <strong>4-day Chitwan tour</strong> adds a second full day in the park, and that day changes the trip. Two mornings and two afternoons inside the reserve mean you can go deep into the grasslands rather than working the edges, spend a whole session at one river crossing, and take the long jeep route to the <strong>Bis Hazari Tal</strong> wetland without giving up anything else.</p><p>The extra time also makes the quieter activities possible — a full morning of birding with more than 500 recorded species, the elephant breeding centre, and an unhurried afternoon on the Rapti in a dugout canoe. Chitwan's rhino population of around 700 makes sightings near-certain, and with three days of activity the odds on sloth bear, leopard and wild elephant improve considerably.</p>",
    highlights: [
      ["Three Full Activity Blocks", "Two mornings and two afternoons inside the park, enough to work the grasslands properly."],
      ["One-Horned Rhinoceros", "Chitwan's population of around 700 makes a sighting close to certain over this many drives."],
      ["Bis Hazari Tal Wetland", "Take the long jeep route to the Ramsar-listed lake system on the park's northern edge."],
      ["Elephant Breeding Centre", "Visit the government centre at Khorsor, where the park's working elephants are raised."],
      ["Tharu Culture and Cuisine", "An evening in the village with the stick dance, and Tharu dishes at the lodge."],
    ],
    sections: sections("Chitwan"),
    faqs: faqs("Chitwan"),
    inclusions: jungleInclusions("Chitwan", 3),
    exclusions: { extra: ["Alcoholic drinks at the lodge."] },
    addons: [
      {
        title: "Flight to Bharatpur",
        description: "Replace the road transfer with the 20-minute flight from Kathmandu to Bharatpur, twenty minutes from the lodge, in each direction.",
        unit: "person",
        pricePerUnit: 220,
      },
    ],
    fixedDepartureDay: "friday",
    itineraryDescription: "Four days on the Terai with three full blocks of jeep, canoe and walking safari inside Chitwan National Park.",
    inExDescription: "Road transfers, three nights at a jungle lodge, all meals, park permits, every activity fee and licensed naturalist guides are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Chitwan National Park Tour – 4 Days Jungle Safari in Nepal",
      description: "A 4-day Chitwan safari with three full activity blocks — jeep drives, jungle walks, a Rapti canoe trip and the Bis Hazari Tal wetland.",
      keywords: "Chitwan National Park 4 days, Chitwan jungle safari, rhino Nepal, Bis Hazari Tal, Nepal wildlife tour, Tharu culture",
      tags: "Chitwan National Park, Wildlife Tours, Jungle Safari, Terai, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive to Chitwan (150 m) and afternoon Tharu village visit",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "After breakfast the vehicle leaves Kathmandu on the Prithvi Highway, following the Trishuli river west and turning south at Mugling for the drop onto the Terai — five to six hours with a lunch stop, or two to three from Pokhara.",
        "Lunch and a briefing at the lodge, where the naturalists set out how the next three days are structured and what to wear on the walks.",
        "The afternoon goes to the <strong>Tharu village</strong> beside the park and the museum that explains how the community farmed this malarial valley for centuries before the parks and the highways arrived. The stick dance follows after dinner. Overnight at Chitwan.",
      ),
    },
    {
      title: "Full day jeep safari into the grasslands",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "A full-day <strong>jeep safari</strong>, which is what the fourth day buys you. Rather than the short loops near the entrance, the vehicle crosses into the interior grasslands and river systems where rhino, sambar and wild boar concentrate, with a packed lunch taken at a viewing tower.",
        "The route can include <strong>Bis Hazari Tal</strong>, the Ramsar-listed 'twenty thousand lakes' wetland on the park's northern edge — an oxbow system that is superb for waterbirds and marsh mugger.",
        "This is the day sloth bear and leopard are most likely, simply because you are inside for so long. Your naturalist will spend time at crossings where fresh tracks show, which is the method that produces sightings.",
        "Back at the lodge by dusk. Overnight at Chitwan.",
      ),
    },
    {
      title: "Canoe trip, jungle walk and elephant breeding centre",
      elevation: "150 m",
      accommodation: "Chitwan",
      placeDescription: CHITWAN_PLACE,
      ...CHITWAN,
      html: p(
        "Tea before dawn and down to the river for the <strong>dugout canoe</strong>, drifting with the current past gharial and mugger crocodiles on the sandbanks while the mist comes off the water. It is the best birding hour of the trip.",
        "The canoe lands inside the park for a <strong>guided jungle walk</strong> with two naturalists — two to three hours on foot, slow and quiet, reading tracks and listening for alarm calls from the deer.",
        "After lunch and the hot part of the day at the lodge, the afternoon visits the <strong>elephant breeding centre</strong> at Khorsor, where the park's working elephants are raised, and finishes on the riverbank for sunset over the Rapti.",
        "Overnight at Chitwan.",
      ),
    },
    {
      title: "Morning bird walk and drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A final early <strong>bird walk</strong> along the river and buffer forest with the naturalist, which after three days of practice is when most people finally start seeing what the guides see.",
        "Breakfast at the lodge, then the vehicle leaves mid-morning.",
        "The road climbs off the plains at Mugling and follows the Trishuli into the hills to <strong>Kathmandu (1,400 m)</strong> by late afternoon, or west to Pokhara in around three hours. Overnight in Kathmandu.",
      ),
    },
  ],
};

export const bardia4Day: Tour = {
  region: REGION,
  price: 545,
  difficulty: "easy",
  maxAltitude: 200,
  center: [81.33, 28.39],
  zoom: 10,
  content: {
    slug: "bardia-national-park-tour-4-days",
    title: "Bardia National Park Tour – 4 Days",
    overview:
      "<p><strong>Bardia</strong> is the largest national park in the Terai and the best place in Nepal to see a wild <strong>Bengal tiger</strong>. It sits in the far west on the Karnali floodplain, a long way from the tourist corridor, and receives a fraction of Chitwan's visitors — which means fewer jeeps, more silence, and a genuinely wild feel to the forest.</p><p>This four-day trip flies to Nepalgunj and drives in, then spends two full days working the park: jeep safaris into the grassland and river crossings, guided walks on foot, and long quiet sits at the water where tigers come to drink in the heat. Rhino, wild elephant, swamp deer and the <strong>Gangetic dolphin</strong> in the Karnali are all here alongside more than 400 bird species.</p>",
    highlights: [
      ["Nepal's Best Tiger Odds", "Bardia holds a strong tiger population with far less visitor pressure than Chitwan."],
      ["The Karnali Floodplain", "Work a river system of braided channels and grassland that concentrates wildlife in the dry months."],
      ["Gangetic Dolphin", "Look for one of the world's few freshwater dolphins in the deeper Karnali channels."],
      ["Wild Elephant and Rhino", "See the resident herds and the relocated rhino population on the grassland circuits."],
      ["Almost No Other Visitors", "Spend the day in a park most travellers to Nepal have never heard of."],
    ],
    sections: sections("Bardia"),
    faqs: faqs("Bardia"),
    inclusions: {
      flights: ["Kathmandu – Nepalgunj return domestic flights, including airport transfers."],
      ...jungleInclusions("Bardia", 3),
    },
    exclusions: { extra: ["Alcoholic drinks at the lodge.", "Optional Gangetic dolphin excursion on the Karnali."] },
    fixedDepartureDay: "saturday",
    itineraryDescription: "Four days in Nepal's largest Terai park, flying via Nepalgunj, with two full days of jeep, walking and river safari in Bardia.",
    inExDescription: "Domestic flights, road transfers, three nights at a jungle lodge, all meals, park permits, every activity fee and licensed naturalist guides are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Bardia National Park Tour – 4 Days Tiger Safari in Nepal",
      description: "A 4-day Bardia National Park safari in far-western Nepal, with the country's best odds of a wild Bengal tiger sighting.",
      keywords: "Bardia National Park tour, Bardia tiger safari, wild tiger Nepal, Karnali, Gangetic dolphin, Nepal wildlife tour",
      tags: "Bardia National Park, Wildlife Tours, Tiger Safari, Terai, Nepal Tours",
    },
  },
  days: [
    {
      title: "Fly to Nepalgunj (150 m) and drive to Bardia (200 m)",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "A one-hour morning flight west from Kathmandu to <strong>Nepalgunj (150 m)</strong> on the Terai, with the Himalaya along the right-hand windows for the first half of it.",
        "From the airport a vehicle drives two to three hours north-west through farmland and sal forest to the park. The last stretch runs beside the buffer zone, and it is not unusual to see deer or a rhino from the road before you have even checked in.",
        "Lunch at the lodge and a briefing from the naturalists, then a short orientation walk along the <strong>Karnali</strong> for the first look at the river the park is built around. Overnight at Bardia.",
      ),
    },
    {
      title: "Full day jeep safari in Bardia National Park",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "A packed lunch and a full day in the jeep, which is how tigers are found in Bardia. The route crosses into the grassland and works the network of river crossings and waterholes where the cats come to drink.",
        "Much of the day is spent stationary and quiet. Your naturalist reads the tracks in the sand at each crossing, and if they are fresh the group waits — sometimes for an hour or more. That patience is the whole method, and it is why Bardia produces sightings that Chitwan does not.",
        "In between there is a great deal else: <strong>rhino</strong>, swamp deer, blue bull, wild boar and, with luck, the resident <strong>wild elephant</strong> herd. The birding from a stationary jeep is superb.",
        "Back at the lodge at dusk. Overnight at Bardia.",
      ),
    },
    {
      title: "Jungle walk and afternoon on the Karnali river",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "An early <strong>guided walk</strong> on foot with two naturalists — the quietest way into the forest and a completely different experience from the jeep. You move slowly, stop often and are taught to read what is on the ground.",
        "Being on foot in tiger country is taken seriously. The guides brief you before setting out and the rules are simple and not negotiable, which is part of what makes the morning memorable.",
        "The afternoon goes to the <strong>Karnali</strong>: a rafted or boat trip down the channels looking for gharial, marsh mugger and the <strong>Gangetic dolphin</strong>, one of very few freshwater dolphin species left in the world and present in this river in small numbers.",
        "Sunset from the riverbank. Overnight at Bardia.",
      ),
    },
    {
      title: "Drive to Nepalgunj and fly to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A last dawn walk in the buffer forest with the naturalist, then breakfast at the lodge and a quiet morning before the transfer.",
        "The vehicle leaves for <strong>Nepalgunj</strong> around midday, retracing the road through the farmland and sal forest of Banke district.",
        "The flight back to <strong>Kathmandu (1,400 m)</strong> takes an hour and lands in the afternoon, where our representative meets you and transfers you to your hotel.",
        "Overnight in Kathmandu.",
      ),
    },
  ],
};

export const bardia5Day: Tour = {
  region: REGION,
  price: 660,
  difficulty: "easy",
  maxAltitude: 200,
  center: [81.33, 28.39],
  zoom: 10,
  content: {
    slug: "bardia-jungle-safari-tour-5-days",
    title: "Bardia Jungle Safari Tour – 5 Days",
    overview:
      "<p>The <strong>5-day Bardia safari</strong> is the version serious wildlife watchers ask for. Three full days inside the park instead of two is the difference between hoping for a tiger and giving yourself a real chance at one, because the method here is patience — sitting at a river crossing where the tracks are fresh and waiting for the animal to come to water.</p><p>The extra day also opens up the <strong>Babai valley</strong>, the park's remote eastern sector, which most short itineraries never reach. Between the drives there is time for foot safaris, a full session on the <strong>Karnali</strong> looking for Gangetic dolphin and gharial, and an evening with the Tharu community whose villages ring the buffer zone.</p>",
    highlights: [
      ["Three Full Days in the Park", "Enough time to sit out a crossing and wait, which is how tigers are actually seen."],
      ["The Babai Valley", "Reach the park's remote eastern sector, which shorter itineraries never get to."],
      ["Wild Bengal Tiger", "The best odds in Nepal, especially in the hot months of March and April."],
      ["Karnali River Safari", "A full session on the water for Gangetic dolphin, gharial and marsh mugger."],
      ["Tharu Buffer-Zone Villages", "An evening with the community that has farmed this floodplain for generations."],
    ],
    sections: sections("Bardia"),
    faqs: faqs("Bardia"),
    inclusions: {
      flights: ["Kathmandu – Nepalgunj return domestic flights, including airport transfers."],
      ...jungleInclusions("Bardia", 4),
    },
    exclusions: { extra: ["Alcoholic drinks at the lodge."] },
    fixedDepartureDay: "saturday",
    itineraryDescription: "Five days in Bardia with three full days inside the park, the Babai valley and a river safari on the Karnali.",
    inExDescription: "Domestic flights, road transfers, four nights at a jungle lodge, all meals, park permits, every activity fee and licensed naturalist guides are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Bardia Jungle Safari Tour – 5 Days in Far-West Nepal",
      description: "A 5-day Bardia jungle safari with three full days in the park, the Babai valley and a Karnali river safari for dolphin and gharial.",
      keywords: "Bardia jungle safari, Bardia 5 days, tiger safari Nepal, Babai valley, Karnali river, far west Nepal wildlife",
      tags: "Bardia National Park, Wildlife Tours, Tiger Safari, Terai, Nepal Tours",
    },
  },
  days: [
    {
      title: "Fly to Nepalgunj (150 m) and drive to Bardia (200 m)",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "A one-hour morning flight west from Kathmandu to <strong>Nepalgunj (150 m)</strong>, with the whole Himalayan chain out of the right-hand windows on a clear day.",
        "A vehicle then drives two to three hours north-west through farmland and sal forest to the edge of the park, the last stretch running alongside the buffer zone.",
        "Lunch at the lodge and a full briefing from the naturalists — what the week looks like, what to wear, and how the foot safaris are run. The afternoon is an orientation walk on the <strong>Karnali</strong> bank. Overnight at Bardia.",
      ),
    },
    {
      title: "Full day jeep safari on the Karnali grasslands",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "The first full day in the jeep, working the grassland circuits and river crossings of the Karnali sector with a packed lunch taken inside the park.",
        "The naturalists check tracks at each crossing and settle in where they are fresh. Long stationary waits are the point rather than an interruption, and the birding while you sit is exceptional.",
        "<strong>Rhino</strong>, swamp deer, blue bull, wild boar and langur are all likely through the day, and the resident <strong>wild elephant</strong> herd moves through this sector.",
        "Back at the lodge by dusk for dinner on the veranda. Overnight at Bardia.",
      ),
    },
    {
      title: "Jungle walk and the Babai valley",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "An early <strong>foot safari</strong> with two naturalists into the sal forest — slow, quiet, and the best way to notice the small things the jeep drives straight past.",
        "After the walk the group heads east to the <strong>Babai valley</strong>, the park's remote inner sector, reached on a long track through forest that few visitors ever take. The valley is a broad river plain enclosed by forested ridges and holds tiger, elephant and a large deer population with almost no vehicle traffic.",
        "This is a long day with a packed lunch and a good deal of driving, and it is the reason the five-day itinerary exists.",
        "Back at the lodge after dark. Overnight at Bardia.",
      ),
    },
    {
      title: "Karnali river safari and Tharu village evening",
      elevation: "200 m",
      accommodation: "Bardia",
      placeDescription: BARDIA_PLACE,
      ...BARDIA,
      html: p(
        "A morning on the <strong>Karnali</strong> — a boat or raft trip down the braided channels, drifting quietly and scanning for <strong>Gangetic dolphin</strong>, gharial and marsh mugger on the sandbanks. Nepal's dolphin population is very small and a sighting is a genuine event.",
        "The birding on the river is the best of the trip: fish eagles, storks, ibis and, in winter, large numbers of migratory waterfowl on the shallows.",
        "The afternoon is free at the lodge through the heat, and the evening goes to a <strong>Tharu village</strong> in the buffer zone — the stick dance, the mud-and-thatch architecture, and a conversation about living alongside tigers and elephants that is more candid here than in Chitwan.",
        "Overnight at Bardia.",
      ),
    },
    {
      title: "Drive to Nepalgunj and fly to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A final dawn walk in the buffer forest for anyone who wants one, then breakfast and a slow morning at the lodge.",
        "The vehicle leaves for <strong>Nepalgunj</strong> around midday, back through Banke's farmland and sal forest.",
        "The one-hour flight lands in <strong>Kathmandu (1,400 m)</strong> in the afternoon, where our representative meets you and transfers you to your hotel.",
        "Overnight in Kathmandu.",
      ),
    },
  ],
};

export const wildlifeTours: Tour[] = [chitwan3Day, chitwan4Day, bardia4Day, bardia5Day];
