/**
 * Region: Jungle Safari in Nepal.
 *
 * The Tours category already sells Chitwan as a three- and four-day trip and
 * Bardia as four and five days. These are the durations it does not: the short
 * Chitwan overnight that fits between Kathmandu and Pokhara, the shorter Bardia
 * trip, and Koshi Tappu in the far east, which the catalogue did not sell at
 * all despite being the best wetland reserve in the country.
 */
import { BARDIA, CHITWAN, p, type Tour } from "../tours/types";

const REGION = "Jungle Safari in Nepal";
const NEPALGUNJ = { lng: 81.625, lat: 28.0654 };
const KOSHI_TAPPU = { lng: 86.9833, lat: 26.6167 };
const BIRATNAGAR = { lng: 87.2718, lat: 26.4525 };

const PARK_RULES_SECTION = {
  heading: "Park Rules, Elephants and How We Run a Safari",
  content:
    "<p>We do not sell <strong>elephant-back safaris</strong>. Riding is being phased out across Nepal's parks on welfare grounds and we stopped offering it before we had to; every game drive here is by <strong>four-wheel-drive jeep</strong>, on foot with an armed naturalist, or by dugout canoe. The elephant breeding centre visits are to a government facility where the animals are not ridden.</p><p>Inside the parks the rules are strict and your guide will enforce them: no getting out of the vehicle except at designated points, no calling to animals, no flash near rhino or tiger, and absolute quiet on foot. Walking safaris carry a genuine risk from rhino and sloth bear, which is why they go with two naturalists and why the briefing about climbing a tree is not a joke.</p>",
};

const BEST_TIME_SECTION = {
  heading: "Best Time and What You Might See",
  content:
    "<p><strong>October to March</strong> is the season. The grass is cut and burned in January and February, which is when visibility is at its best and tiger sightings peak; October and November are green, comfortable and excellent for birds. <strong>April and May</strong> are hot but very good for wildlife, because animals concentrate at the water. We avoid <strong>June to September</strong>, when the monsoon floods the grasslands and much of the park closes.</p><p>Realistic expectations matter. <strong>Greater one-horned rhino</strong> are seen on most trips in Chitwan and Bardia; <strong>wild elephant</strong>, gharial, mugger crocodile, sloth bear, spotted and sambar deer and a great deal of birdlife are routine. <strong>Tiger</strong> is not routine anywhere — Bardia gives the best odds in Nepal and even there it is perhaps one trip in three. Anyone guaranteeing you a tiger is guaranteeing something they do not control.</p>",
};

/** The short Chitwan overnight — the gap between the day tour and the 3-day. */
export const chitwanOneNight: Tour = {
  region: REGION,
  price: 165,
  difficulty: "easy",
  maxAltitude: 150,
  center: [84.5, 27.58],
  zoom: 11,
  content: {
    slug: "1-night-2-days-chitwan-trip",
    title: "1 Night 2 Days Chitwan Trip",
    overview:
      "<p>The <strong>1 Night 2 Days Chitwan Trip</strong> is the short jungle break that fits into the gap most itineraries actually have — the day between Kathmandu and Pokhara, or the two days at the end of a trek before a flight home. It covers the core of a Chitwan visit: a dugout canoe on the Rapti at first light, a guided jungle walk, a jeep safari into the park, the elephant breeding centre and a Tharu cultural evening.</p><p>What it does not do is pretend to be a wildlife expedition. Two days gives you one full game drive and one early morning, which is enough to see <strong>greater one-horned rhino</strong>, deer, crocodile and a great deal of birdlife, and not enough to go looking seriously for tiger. If you want the fuller version we sell three- and four-day Chitwan trips; this one exists because a short stop is far better than skipping the Terai altogether.</p>",
    highlights: [
      ["Dawn Canoe on the Rapti", "A dugout drift past gharial, mugger crocodile and kingfishers before the park wakes up."],
      ["Jeep Safari into the Park", "A half-day game drive through sal forest and grassland, where the rhino sightings happen."],
      ["Guided Jungle Walk", "On foot with two armed naturalists, which is a completely different experience from a vehicle."],
      ["Elephant Breeding Centre", "A government facility where the animals are not ridden, and the calves are the draw."],
      ["Fits Between Kathmandu and Pokhara", "Sauraha is on the highway, so the trip costs you a day rather than a week."],
    ],
    sections: [
      {
        heading: "What Two Days Actually Covers",
        content:
          "<p>You arrive at <strong>Sauraha</strong> around lunchtime on day one, which leaves the afternoon for the elephant breeding centre, the Tharu village and a sunset on the Rapti riverbank. Day two is the wildlife day: a <strong>dawn canoe</strong> down the river, a <strong>jungle walk</strong> on the far bank, and a <strong>jeep safari</strong> into the park before lunch and the drive out.</p><p>That is one proper game drive and one early morning. It is genuinely enough to see rhino — Chitwan's population is dense and the animals are not shy — and to get a real sense of the Terai. It is not enough for tiger, and it is not enough if wildlife photography is the point of your trip. Be clear with yourself about which you are buying.</p>",
      },
      PARK_RULES_SECTION,
      BEST_TIME_SECTION,
      {
        heading: "Getting There, Staying and What to Bring",
        content:
          "<p><strong>Sauraha</strong> is around five to six hours from Kathmandu and four and a half from Pokhara on the highway, and the trip can start and finish in either city or run between the two — tell us which at booking and there is no price difference. A domestic flight to <strong>Bharatpur</strong> cuts the road time to twenty-five minutes and is available as an add-on.</p><p>Accommodation is a comfortable jungle lodge on the edge of the park with a garden, a restaurant and hot water. Bring <strong>neutral-coloured clothing</strong> — greens, browns and greys, not white or bright colours — long sleeves and trousers for the walk, closed shoes, insect repellent, sunscreen, a hat and binoculars if you own a pair. A torch is useful; village power is not continuous.</p>",
      },
    ],
    faqs: [
      { question: "Is two days long enough for Chitwan?", answer: "For a first look, yes — you get one full game drive, a dawn canoe and a jungle walk, which is enough to see rhino, deer, crocodile and a lot of birds. For tiger, wildlife photography or a proper immersion, no. Book the three- or four-day trip for that; we sell both." },
      { question: "Will I see a rhino?", answer: "Very probably. Chitwan holds around seven hundred greater one-horned rhino in a relatively small area and they are not shy, so most two-day visitors see at least one and often several. It is the one large mammal we are comfortable saying you are likely to encounter." },
      { question: "Will I see a tiger?", answer: "Almost certainly not in two days. Chitwan has a healthy tiger population but they are elusive and the odds on a single game drive are low — perhaps one visitor in ten. Bardia gives better odds and more days give better odds. Anyone who guarantees a tiger is selling you something they cannot deliver." },
      { question: "Do you offer elephant rides?", answer: "No. We stopped offering elephant-back safaris on welfare grounds and Nepal is phasing them out across the parks. Game drives are by jeep, on foot with naturalists, or by canoe. The breeding centre visit is to a government facility where the animals are not ridden." },
      { question: "How do we get there?", answer: "By road — around five to six hours from Kathmandu, four and a half from Pokhara — and the trip can start in either city or run between them at no extra cost. A twenty-five-minute flight to Bharatpur is available as an add-on if you would rather not spend the day driving." },
      { question: "Is the jungle walk safe?", answer: "It is managed rather than risk-free, and we are honest about that. Rhino and sloth bear are genuinely dangerous on foot, which is why walks go with two armed naturalists, in small groups, with a briefing about what to do — which includes climbing a tree. Follow the guides exactly and the risk is small." },
      { question: "What should I wear?", answer: "Neutral colours — greens, browns and greys. Not white, not bright colours and not black, which attracts insects. Long sleeves and trousers for the walk, closed shoes you can move in, and a hat. Bring repellent and sunscreen; the Terai is hot even in winter." },
      { question: "Is the Tharu cultural show worth it?", answer: "It is a staged performance rather than a spontaneous one, and it is enjoyable on those terms — the stick dance is genuinely impressive. If you would rather skip it, tell your guide and we will use the evening for a riverbank sunset or a walk through the village instead, which some people prefer." },
    ],
    inclusions: {
      transport: ["Tourist coach or private vehicle from Kathmandu or Pokhara to Sauraha and onward at the end of the trip."],
      accommodation: ["One night at a jungle lodge on the edge of Chitwan National Park, in an en-suite twin or double room."],
      meals: ["All meals from lunch on the first day to lunch on the second."],
      entrance: "Chitwan National Park entry permits and all activity fees.",
      guide: "Government-licensed naturalist guide throughout, and two armed naturalists on the jungle walk.",
      extra: [
        "Dugout canoe trip on the Rapti river.",
        "Half-day jeep safari inside the national park.",
        "Elephant breeding centre and Tharu village visit, and a Tharu cultural programme.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu or Pokhara before and after the trip.",
      extra: ["Domestic flights to Bharatpur, available as an add-on.", "Alcoholic drinks at the lodge.", "Tips for the naturalist and driver."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "Two days at Sauraha on the edge of Chitwan National Park, with a jeep safari, a dawn canoe on the Rapti and a guided jungle walk.",
    inExDescription:
      "Road transport, one night at a jungle lodge, all meals on the trip, park permits and activity fees, a licensed naturalist, the canoe, the jeep safari and the cultural programme are included, while flights, city meals, drinks and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "1 Night 2 Days Chitwan Trip – Short Jungle Safari",
      description:
        "A two-day Chitwan safari from Kathmandu or Pokhara with a jeep game drive, a dawn canoe on the Rapti and a guided jungle walk.",
      keywords:
        "1 night 2 days Chitwan, short Chitwan tour, Chitwan jungle safari 2 days, Chitwan overnight trip, Sauraha safari, Chitwan from Kathmandu, jungle safari Nepal",
      tags: "1 Night 2 Days Chitwan Trip, Jungle Safari in Nepal, Chitwan, Wildlife, Nepal Activities",
    },
  },
  days: [
    {
      title: "Drive to Sauraha (150 m), Elephant Breeding Centre and Tharu Village",
      elevation: "150 m",
      accommodation: "Sauraha",
      placeDescription: "The village on the Rapti river at the northern edge of Chitwan National Park.",
      ...CHITWAN,
      html: p(
        "A morning departure from <strong>Kathmandu</strong> or <strong>Pokhara</strong> and a drive down to the Terai, dropping from the hills onto the plains — five to six hours from Kathmandu, four and a half from Pokhara.",
        "You reach <strong>Sauraha</strong> around lunchtime and check in to the lodge.",
        "The afternoon covers the <strong>elephant breeding centre</strong>, a government facility across the river where the calves are the attraction and the animals are not ridden, and a walk through the <strong>Tharu village</strong> with its mud-and-lath houses.",
        "Sunset is taken on the Rapti riverbank, which is where most of Sauraha goes at that hour, followed by a Tharu cultural programme and dinner at the lodge. Overnight at Sauraha.",
      ),
    },
    {
      title: "Dawn Canoe, Jungle Walk and Jeep Safari in Chitwan National Park",
      elevation: "150 m",
      accommodation: "Kathmandu or Pokhara",
      placeDescription: "Onward to the city, after a morning inside Chitwan National Park.",
      lng: 84.42,
      lat: 27.55,
      html: p(
        "An early start for the <strong>dugout canoe</strong> on the Rapti, drifting downstream in the mist with gharial and mugger crocodile on the banks and kingfishers, storks and egrets working the shallows. It is the quietest hour of the day and often the best for birds.",
        "You land on the far bank for the <strong>guided jungle walk</strong> with two armed naturalists — a completely different experience from a vehicle, on foot in sal forest with the tracks and calls explained as you go.",
        "After breakfast the <strong>jeep safari</strong> runs into the park proper, through grassland and riverine forest where the rhino sightings happen, with deer, wild boar and a long bird list along the way.",
        "Lunch at the lodge and the drive on to Kathmandu or Pokhara.",
      ),
    },
  ],
};

/** Bardia in three days — the shorter version of a trip we already sell longer. */
export const bardiaTwoNights: Tour = {
  region: REGION,
  price: 495,
  difficulty: "easy",
  maxAltitude: 200,
  center: [81.33, 28.39],
  zoom: 10.5,
  content: {
    slug: "2-night-3-days-bardia-tour",
    title: "2 Night 3 Days Bardia Tour",
    overview:
      "<p><strong>Bardia National Park</strong> in the far west is the best place in Nepal to look for a wild tiger, and this three-day trip is the shortest version worth doing. It is roughly a quarter of Chitwan's visitor numbers across a larger and wilder park, with the Karnali river along one side and a resident tiger population that is genuinely findable from the machans and river crossings on the Babai and Karnali.</p><p>Two nights gives you <strong>one full day and two half days</strong> in the park — enough for a full-day jeep safari, a river trip and a walking safari, and a real chance at tiger rather than a token one. You fly to <strong>Nepalgunj</strong> and drive in, which turns a fifteen-hour road journey into a two-hour one. For a longer stay and better odds we sell four- and five-day Bardia trips.</p>",
    highlights: [
      ["The Best Tiger Odds in Nepal", "A larger, wilder park with a quarter of Chitwan's visitors and a findable tiger population."],
      ["A Full Day in the Park", "One complete jeep safari day plus two half days, rather than a single game drive."],
      ["The Karnali and Babai Rivers", "Gangetic dolphin, gharial and mugger crocodile, with the river crossings where tigers come to drink."],
      ["Walking Safari with Naturalists", "On foot in the Terai with two armed guides, which Bardia does better than anywhere."],
      ["Fly In, Don't Drive", "A one-hour flight to Nepalgunj instead of fifteen hours on the highway."],
    ],
    sections: [
      {
        heading: "Why Bardia Rather Than Chitwan",
        content:
          "<p>Bardia is roughly <strong>968 square kilometres</strong> against Chitwan's 952, but takes a small fraction of the visitors — a few thousand foreign tourists a year against Chitwan's tens of thousands. The practical effect is that you are frequently the only vehicle at a sighting, and the animals behave accordingly.</p><p>It is also the better tiger park. The population density is comparable but the habitat, particularly the <strong>Babai valley</strong> and the Karnali floodplain, concentrates animals at predictable water in the dry season, and the machan and river-crossing strategy that Bardia guides use gives genuinely better odds than driving grassland. Realistically it is still perhaps one trip in three, but that is several times the Chitwan figure.</p>",
      },
      PARK_RULES_SECTION,
      BEST_TIME_SECTION,
      {
        heading: "Getting There, Staying and What to Bring",
        content:
          "<p>You fly <strong>Kathmandu to Nepalgunj</strong> — an hour over the plains — then drive around two and a half hours north-west to <strong>Thakurdwara</strong> on the park boundary. The road alternative from Kathmandu is fifteen hours and we do not recommend it. Return flights are included.</p><p>Accommodation is a lodge at Thakurdwara with a garden, en-suite rooms and hot water; it is comfortable rather than luxurious, which is the standard in the far west. Bring <strong>neutral-coloured clothing</strong>, long sleeves and trousers, closed shoes, insect repellent, a hat, sunscreen and <strong>binoculars</strong>, which matter more at Bardia than anywhere because much of the watching is done at distance from a machan.</p>",
      },
    ],
    faqs: [
      { question: "What are the real chances of seeing a tiger?", answer: "Around one trip in three over three days, which is several times better than Chitwan and the best odds in Nepal. Longer stays improve it substantially — the four- and five-day trips get closer to one in two. Nobody can promise it, and any operator who does is not being straight with you." },
      { question: "How is Bardia different from Chitwan?", answer: "Similar size, a fraction of the visitors, and wilder. You are often the only jeep at a sighting. Bardia is better for tiger and for a sense of remoteness; Chitwan is far easier to reach, has more rhino and better lodges. If you have time for one and tiger is the point, come here." },
      { question: "Do we have to fly?", answer: "Effectively yes, and it is included. The road from Kathmandu is fifteen hours and there is no sensible version of this trip that uses it. The flight to Nepalgunj takes an hour and the drive from there is two and a half. If you are already in the far west we can start the trip at Nepalgunj instead." },
      { question: "What is a machan?", answer: "A raised viewing platform, usually overlooking a river crossing or a waterhole. Bardia's tiger strategy is largely built on sitting quietly in one at the right time of day rather than driving around, and it is why binoculars matter here. It requires patience and it is how most sightings actually happen." },
      { question: "Will we see rhino as well?", answer: "Probably. Bardia's rhino were translocated from Chitwan and the population is smaller and more scattered, so sightings are less certain than at Chitwan but still common. You are also more likely here than at Chitwan to see wild elephant, and the Karnali holds Gangetic dolphin, which Chitwan does not." },
      { question: "Do you offer elephant rides?", answer: "No, on welfare grounds, and Nepal is phasing them out across the parks. Everything here is by jeep, on foot with armed naturalists, or on the river. Bardia's walking safaris are particularly good and are the reason many people choose it." },
      { question: "Is three days enough?", answer: "It is the shortest trip worth taking here, given that two of the days are partly travel. You get one full safari day and two half days. If tiger is genuinely the objective, the four- or five-day trips are a better use of the flights and we sell both." },
      { question: "How hot does it get?", answer: "Very, from April onward — the low forties in May and June. October to March is comfortable, with cold mornings in December and January that need a fleece for the early game drive. The heat of April and May is unpleasant but it concentrates animals at water and the wildlife watching is excellent." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Return domestic flights from Kathmandu to Nepalgunj."],
      transport: ["Private vehicle between Nepalgunj airport and the lodge at Thakurdwara."],
      accommodation: ["Two nights at a jungle lodge at Thakurdwara on the park boundary, in an en-suite twin or double room."],
      meals: ["All meals from dinner on the first day to breakfast on the third."],
      entrance: "Bardia National Park entry permits and all activity fees.",
      guide: "Government-licensed naturalist guide throughout, and two armed naturalists on the walking safari.",
      extra: [
        "One full-day jeep safari and one half-day jeep safari inside the park.",
        "A walking safari with naturalists, and a Karnali river trip for dolphin and gharial.",
        "Tharu village visit at Thakurdwara.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu before and after the trip.",
      extra: ["Alcoholic drinks at the lodge.", "Tips for the naturalist and driver."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "Three days at Bardia National Park in the far west, with return flights to Nepalgunj, a full-day jeep safari, a walking safari and a Karnali river trip.",
    inExDescription:
      "Return flights to Nepalgunj, airport and lodge transfers, two nights at a jungle lodge, all meals in the park, permits and activity fees, a licensed naturalist and all safaris are included, while meals in Kathmandu, drinks and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "2 Night 3 Days Bardia Tour – Tiger Safari in the Far West",
      description:
        "Three days at Bardia National Park with flights to Nepalgunj, a full-day jeep safari, a walking safari and a Karnali river trip for dolphin and gharial.",
      keywords:
        "Bardia tour 3 days, Bardia national park safari, tiger safari Nepal, Bardia jungle safari, 2 night 3 days Bardia, Karnali dolphin, wildlife tour Nepal",
      tags: "2 Night 3 Days Bardia Tour, Jungle Safari in Nepal, Bardia, Tiger, Nepal Activities",
    },
  },
  days: [
    {
      title: "Fly to Nepalgunj (150 m) and Drive to Thakurdwara (200 m)",
      elevation: "200 m",
      accommodation: "Thakurdwara",
      placeDescription: "The village on the boundary of Bardia National Park, where the lodges and the park headquarters are.",
      ...BARDIA,
      html: p(
        "A morning transfer to the domestic terminal for the one-hour flight west to <strong>Nepalgunj (150 m)</strong> on the Indian border, crossing the hills and dropping onto the Terai plains.",
        "From the airport it is around two and a half hours north-west by road to <strong>Thakurdwara</strong> on the boundary of <strong>Bardia National Park</strong>, through farmland and then sal forest.",
        "You check in at the lodge and, if the timing allows, take a first short walk to the Karnali riverbank or the park headquarters in the late afternoon.",
        "Your naturalist runs the briefing over dinner: what the park holds, how the machan strategy works and what tomorrow's full day involves. Overnight at Thakurdwara.",
      ),
    },
    {
      title: "Full-Day Jeep Safari in Bardia National Park",
      elevation: "200 m",
      accommodation: "Thakurdwara",
      placeDescription: "The village on the boundary of Bardia National Park, where the lodges and the park headquarters are.",
      ...BARDIA,
      html: p(
        "The main day, and an early start with a packed breakfast. The jeep goes deep into the park toward the <strong>Babai valley</strong> or along the Karnali floodplain depending on where the recent sightings have been.",
        "Much of a Bardia day is spent quietly rather than driving: sitting on a <strong>machan</strong> above a river crossing or a waterhole, watching and listening. Alarm calls from deer and langur are how tigers are usually located, and your naturalist will explain what is being said.",
        "Between the sits there is grassland and sal forest with rhino, wild elephant, spotted and sambar deer, wild boar and a long bird list.",
        "Lunch is taken in the park. You return at dusk, which is the other good hour. Overnight at Thakurdwara.",
      ),
    },
    {
      title: "Karnali River, Walking Safari and Return to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the final stop before departure.",
      lng: 85.311,
      lat: 27.7172,
      html: p(
        "An early <strong>walking safari</strong> with two armed naturalists — on foot in the sal forest, reading tracks and scrapes, which at Bardia is genuinely one of the best experiences in Nepali wildlife.",
        "Afterwards a trip on the <strong>Karnali river</strong>, looking for <strong>Gangetic dolphin</strong>, gharial and mugger crocodile, with waders and fish eagles along the banks.",
        "Back to the lodge for lunch and to pack, then the drive to <strong>Nepalgunj</strong> for the afternoon flight to <strong>Kathmandu</strong>.",
        "Transfer to your hotel on arrival. If you would rather add a night at Thakurdwara and fly the following morning, tell us at booking and we will arrange it.",
      ),
    },
  ],
};

/** Koshi Tappu: the wetland reserve the catalogue did not sell at all. */
export const koshiTappuSafari: Tour = {
  region: REGION,
  price: 545,
  difficulty: "easy",
  maxAltitude: 100,
  center: [86.98, 26.62],
  zoom: 11,
  content: {
    slug: "koshi-tappu-wildlife-reserve-tour",
    title: "Koshi Tappu Wildlife Reserve Tour",
    overview:
      "<p><strong>Koshi Tappu</strong> is a 175 square kilometre wetland on the floodplain of the Sapta Koshi in the far east, and it is a completely different proposition from Chitwan and Bardia. There is no sal forest and no tiger; there is water, reed bed and grassland, the last wild population of <strong>arna</strong> — the Asiatic wild water buffalo — anywhere in Nepal, and the finest birdwatching in the country.</p><p>Over <strong>five hundred bird species</strong> have been recorded here, more than half the national list, in an area you can cross in a morning. In winter the marshes hold tens of thousands of migratory ducks and waders, and the river holds <strong>Gangetic dolphin</strong> and gharial. It is a Ramsar site, it takes very few visitors, and three days of boats, buffalo carts and walking here is the best wildlife value in Nepal for anyone who does not need a big cat.</p>",
    highlights: [
      ["The Last Wild Arna in Nepal", "Around five hundred Asiatic wild water buffalo, found nowhere else in the country."],
      ["Over Five Hundred Bird Species", "More than half of Nepal's entire list, recorded in 175 square kilometres of wetland."],
      ["Gangetic Dolphin in the Koshi", "One of the few accessible places in Nepal to see the river dolphin."],
      ["Boats, Buffalo Carts and Walking", "No jeeps needed — the reserve is explored on the water and on foot."],
      ["A Ramsar Site with Almost No Visitors", "Internationally recognised wetland that sees a tiny fraction of Chitwan's traffic."],
    ],
    sections: [
      {
        heading: "What Makes Koshi Tappu Different",
        content:
          "<p>Chitwan and Bardia are forest and grassland parks with a big-mammal draw. Koshi Tappu is a <strong>floodplain wetland</strong> — braided river channels, reed beds, marsh and short grassland, with the embankments of the Koshi barrage along its edges. There is no tiger and there are no rhino. What it has instead is water, and everything water brings.</p><p>The flagship mammal is the <strong>arna</strong>, the Asiatic wild water buffalo, of which perhaps five hundred survive here and nowhere else in Nepal — animals considerably larger than domestic buffalo, with a horn span that can exceed two metres. The river holds <strong>Gangetic dolphin</strong> and gharial, and the reserve also has nilgai, spotted deer, wild boar, otter and, in the surrounding country, a good chance of jungle cat and fishing cat at dusk.</p>",
      },
      {
        heading: "The Birds",
        content:
          "<p>Over <strong>five hundred species</strong> have been recorded at Koshi Tappu — more than half of everything on Nepal's list, in a reserve you can cross in a morning. It is the single best birding site in the country and one of the better ones in South Asia, and it is why the trip is worth taking even in a year when the buffalo are hard to find.</p><p>In <strong>winter</strong> the marshes fill with migratory waterfowl in tens of thousands: bar-headed and greylag geese, ruddy shelduck, a dozen duck species, and waders in numbers that are hard to describe. Resident and passage specialities include swamp francolin, Bengal florican, black-necked stork, lesser adjutant, Indian skimmer, striated grassbird and a long list of warblers and raptors. Bring the best binoculars you own.</p>",
      },
      BEST_TIME_SECTION,
      {
        heading: "Getting There, Staying and What to Bring",
        content:
          "<p>You fly <strong>Kathmandu to Biratnagar</strong> — around fifty minutes — and drive about two hours north-west to the reserve. Return flights are included. The road alternative from Kathmandu is twelve to fourteen hours and is not recommended.</p><p>Accommodation is a simple <strong>tented camp or lodge</strong> on the reserve boundary; standards here are below Chitwan's, which is a fair trade for a place this quiet. Bring <strong>binoculars</strong> — genuinely essential here, more than at any other Nepali reserve — a bird guide to the subcontinent, neutral clothing, a hat, sunscreen, insect repellent and a torch. Leeches are not an issue but mosquitoes are, particularly at dusk.</p>",
      },
    ],
    faqs: [
      { question: "Is there any tiger or rhino at Koshi Tappu?", answer: "No. This is a wetland reserve rather than a forest park, and neither species is present. If a big cat is what you want, book Bardia. Koshi Tappu is for wild water buffalo, dolphin and above all birds, and on those it beats anywhere else in Nepal comfortably." },
      { question: "What is an arna?", answer: "The Asiatic wild water buffalo, a genuinely wild species rather than a feral domestic animal. They are considerably larger than domestic buffalo, with horn spans that can exceed two metres, and around five hundred survive at Koshi Tappu — the only wild population left in Nepal. They are usually seen from the boat or from the embankment." },
      { question: "Is this trip only for birdwatchers?", answer: "It rewards them most, but no. The boat trips, the buffalo cart rides, the dolphin watching and the sheer emptiness of the place make it a good general wildlife trip. That said, if you have no interest in birds at all, your money goes further at Chitwan or Bardia." },
      { question: "When is the best time to come?", answer: "November to February for the migratory waterfowl, which is when the reserve is at its most spectacular and the weather is most comfortable. October and March are also good. April and May are hot; the monsoon from June to September floods the reserve and it effectively closes." },
      { question: "Will we see Gangetic dolphin?", answer: "Often, but not reliably — they are a river species in a river that changes course, and sightings are brief surfacings rather than the leaping you might picture. The boat trips give a reasonable chance in the right season, and the Koshi is one of the few accessible places in Nepal where it is possible at all." },
      { question: "How do we get there?", answer: "A fifty-minute flight from Kathmandu to Biratnagar in the far east, then around two hours by road to the reserve. Return flights are included. The road journey from Kathmandu is twelve to fourteen hours and we would not suggest it unless you are already in the east." },
      { question: "What is the accommodation like?", answer: "A simple tented camp or lodge on the reserve boundary, with basic en-suite facilities and a dining area. It is a step below Chitwan's lodges and considerably below the luxury end. That is the trade for a Ramsar wetland with almost nobody in it, and most people who come here consider it a fair one." },
      { question: "Do I need my own binoculars?", answer: "Yes, and better ones than you would take to Chitwan. Much of the watching is across water and reed bed at distance, and this is a birding site above all. A pair of 8x42 or 10x42 makes the difference between a good trip and a frustrating one. A field guide to the birds of the Indian subcontinent is worth carrying too." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Return domestic flights from Kathmandu to Biratnagar."],
      transport: ["Private vehicle between Biratnagar airport and the reserve."],
      accommodation: ["Two nights at a tented camp or lodge on the Koshi Tappu boundary, with en-suite facilities."],
      meals: ["All meals from dinner on the first day to breakfast on the third."],
      entrance: "Koshi Tappu Wildlife Reserve entry permits and all activity fees.",
      guide: "A specialist naturalist and bird guide throughout.",
      extra: [
        "Boat trips on the Sapta Koshi for dolphin, gharial and waterfowl.",
        "Buffalo cart and walking excursions on the reserve, and a visit to the Koshi barrage.",
        "Use of a spotting scope at the hides.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu before and after the trip.",
      extra: ["Binoculars, which you should bring.", "Alcoholic drinks at the camp.", "Tips for the naturalist and driver."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "Three days at the Koshi Tappu wetland in the far east, with flights to Biratnagar, boat trips for dolphin and wild buffalo, and the best birding in Nepal.",
    inExDescription:
      "Return flights to Biratnagar, transfers, two nights at a tented camp, all meals at the reserve, permits and activity fees, a specialist bird guide, boat and cart excursions and a spotting scope are included, while meals in Kathmandu, binoculars, drinks and tips are excluded.",
    bestTime: "Nov-Mar",
    meta: {
      title: "Koshi Tappu Wildlife Reserve Tour – 3 Days in Nepal's Best Wetland",
      description:
        "Three days at Koshi Tappu with flights to Biratnagar: wild water buffalo, Gangetic dolphin and over five hundred bird species on the Sapta Koshi floodplain.",
      keywords:
        "Koshi Tappu wildlife reserve, Koshi Tappu tour, wild water buffalo Nepal, arna Nepal, Gangetic dolphin Nepal, wetland Nepal, Ramsar site Nepal, eastern Nepal wildlife",
      tags: "Koshi Tappu Wildlife Reserve Tour, Jungle Safari in Nepal, Koshi Tappu, Wetland, Nepal Activities",
    },
  },
  days: [
    {
      title: "Fly to Biratnagar (72 m) and Drive to Koshi Tappu (100 m)",
      elevation: "100 m",
      accommodation: "Koshi Tappu",
      placeDescription: "A wetland reserve on the Sapta Koshi floodplain, and the best birding site in Nepal.",
      ...KOSHI_TAPPU,
      html: p(
        "A morning transfer to the domestic terminal for the fifty-minute flight east to <strong>Biratnagar (72 m)</strong>, Nepal's second city and the industrial centre of the eastern Terai.",
        "From the airport it is around two hours north-west by road to <strong>Koshi Tappu Wildlife Reserve</strong>, through dense Terai farmland that gives way abruptly to reed bed and open water.",
        "You check in at the camp and, in the late afternoon, take a first walk along the embankment — which is often enough to produce a long bird list before dinner, and sometimes a first sight of <strong>arna</strong> across the water.",
        "Your naturalist runs a briefing over dinner on what the reserve holds and how the next two days work. Overnight at Koshi Tappu.",
      ),
    },
    {
      title: "Boat Trip on the Sapta Koshi and a Full Day in the Reserve",
      elevation: "100 m",
      accommodation: "Koshi Tappu",
      placeDescription: "A wetland reserve on the Sapta Koshi floodplain, and the best birding site in Nepal.",
      ...KOSHI_TAPPU,
      html: p(
        "The main day, starting at first light on the water. The <strong>boat trip</strong> works the braided channels of the <strong>Sapta Koshi</strong>, which is the best way to see <strong>arna</strong> — the wild water buffalo come down to drink — and the only realistic way to look for <strong>Gangetic dolphin</strong> and gharial.",
        "Waterfowl are everywhere in winter: bar-headed and greylag geese, ruddy shelduck, a dozen duck species and waders in numbers.",
        "The rest of the day is spent on foot and by <strong>buffalo cart</strong> in the grassland and reed bed, looking for swamp francolin, Bengal florican, black-necked stork and lesser adjutant, with a spotting scope set up at the hides.",
        "Dusk on the embankment gives a chance at jungle cat and fishing cat. Overnight at Koshi Tappu.",
      ),
    },
    {
      title: "The Koshi Barrage and Return to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the final stop before departure.",
      lng: 85.311,
      lat: 27.7172,
      html: p(
        "A final early morning, generally spent at the <strong>Koshi barrage</strong> at the southern end of the reserve, which concentrates birds against the structure and is one of the most productive spots in the whole wetland — Indian skimmer, terns, gulls and large numbers of waders.",
        "Back to camp for breakfast and to pack.",
        "The drive to <strong>Biratnagar</strong> takes around two hours, for the afternoon flight to <strong>Kathmandu</strong>.",
        "Transfer to your hotel on arrival. If you would rather extend by a day — Koshi Tappu rewards a third full morning more than most reserves do — tell us at booking and we will price it.",
      ),
    },
  ],
};

export const jungleSafariActivities: Tour[] = [chitwanOneNight, bardiaTwoNights, koshiTappuSafari];
