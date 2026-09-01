import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const NEPALGUNJ = { lng: 81.625, lat: 28.0654 };

/**
 * Bajura to the Badimalika temple and back, camping above the villages.
 *
 * Waypoints marked "approximate" are camps and small settlements with no
 * OpenStreetMap node; they sit on the route line between verified points.
 */
export const badimalikaTrek: NewTrek = {
  price: 1875,
  difficulty: "moderate",
  maxAltitude: 4214,
  center: [81.5, 29.4],
  zoom: 10,
  content: {
    slug: "badimalika-trek",
    title: "Badimalika Trek",
    overview:
      "<p>The <strong>Badimalika Trek</strong> climbs to one of the most important Hindu pilgrimage sites in western Nepal, a temple to the goddess Malika on an open ridge at <strong>4,214 m</strong> in Bajura district. For most of the year the shrine stands alone on empty grassland; for one week each August, at <strong>Janai Purnima</strong>, tens of thousands of pilgrims walk up from across the far west and the ridge fills with people, drums and sacrifice.</p><p>The route starts at <strong>Martadi</strong>, climbs through terraced Chhetri and Thakuri villages into oak and rhododendron forest, and comes out on high pasture with the <strong>Saipal (7,031 m)</strong> range and the Api massif on the northern skyline. There are no lodges: the group camps with a cook crew and stays in village households on the way in. It is a short trek in a region that receives almost no foreign visitors at all.</p>",
    highlights: [
      ["The Badimalika Temple (4,214 m)", "Reach a major Hindu pilgrimage site on an open ridge, empty for most of the year and thronged each August."],
      ["The Saipal and Api Skyline", "Look north from the ridge to the far-western Himalaya, a range almost no trekker has seen."],
      ["Far-Western Village Culture", "Walk through Chhetri and Thakuri communities with their own dialects, dress and deuda song tradition."],
      ["High Pasture and Rhododendron Forest", "Climb from terraced farmland through oak forest into open grazing meadow in three days."],
      ["A Region With No Trekking Industry", "Travel a route where the group camps, carries its own food, and is very likely the only party on the hill."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>April to June</strong> and <strong>September to early November</strong> are the trekking seasons. Spring is the most rewarding for the forest sections, with rhododendron flowering through April and May and the pastures coming into use. Autumn is clearer and gives the best chance of a sharp view of Saipal and Api from the ridge.</p><p><strong>August</strong> is the exception and a completely different trip: the Janai Purnima pilgrimage brings tens of thousands of people to the temple over a few days. It is an extraordinary thing to witness, but it falls in the monsoon with cloud, mud and crowds, and it needs to be planned for specifically. Winter closes the ridge with snow from December to March.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek with substantial climbing: around 2,700 m of ascent from Martadi to the temple ridge, spread over three days on village trails and forest paths. The maximum altitude is 4,214 m, reached and slept below rather than at, so the altitude risk is manageable.</p><p>You should be able to walk five to seven hours a day with sustained uphill sections. Six weeks of hill walking is adequate. The real demands are logistical: two flights each way, a region with no lodges or shops above the villages, and camping with basic facilities throughout the upper half. Expect to be the only foreign party on the route outside the pilgrimage week.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required, above the 4,214 m temple ridge. Standard policies capped at 3,000 m or 4,000 m would leave the objective of the trek uninsured, so check the altitude clause rather than assuming.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Bajura is among the most isolated districts in Nepal: the nearest hospital is a flight away in Nepalgunj, and helicopter operators fly here only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact well before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>The trek runs from 1,500 m to the exposed 4,214 m ridge. Bring waterproof trekking boots, three base layers, a fleece, an insulated down jacket, a waterproof and windproof shell jacket and trousers, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A <strong>sleeping bag rated to -15°C</strong> and an insulated mat are needed for the high camps.</p><p>Also pack a 30-40 litre daypack, trekking poles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification, a personal first aid kit, insect repellent and leech socks for the forest in warm months, wet wipes and hand sanitiser, a quick-dry towel and a power bank — there is no charging above Martadi.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>Nights in Kathmandu, Nepalgunj and Martadi are in basic hotels or guesthouses. From the first walking day the group is in <strong>tents</strong> — two-person tents with a mess tent and a toilet tent — or occasionally in a village household room where one is offered. The camps range from 2,100 m to around 3,900 m and the high ones are cold and exposed.</p><p>A cook and kitchen crew travel with the group, preparing three hot meals a day from supplies carried from Martadi. There is nothing to buy above the villages, though households will sell eggs, potatoes and vegetables when they have a surplus. Water comes from springs and streams, boiled and treated by the crew; carry two litres, as sources on the upper ridge are further apart than they look.</p>",
      },
    ],
    faqs: [
      { question: "What is the Badimalika temple?", answer: "A shrine to the goddess Malika, a form of Bhagwati, on an open ridge at 4,214 m in Bajura. It is one of the major Shakti pilgrimage sites of western Nepal. The structure itself is modest — the significance is the place and the pilgrimage, not the architecture." },
      { question: "Should I plan the trek around Janai Purnima?", answer: "Only if you specifically want the festival. In August tens of thousands of pilgrims walk to the temple over a few days, and it is a remarkable thing to see. It also falls in the monsoon, the ridge is crowded and muddy, and camping arrangements become difficult. Most visitors come in spring or autumn instead." },
      { question: "How do we get to Bajura?", answer: "A flight from Kathmandu to Nepalgunj, then a second short flight to the airstrip at Kolti in Bajura, then a road transfer to Martadi. Both flights are weather-dependent and the Kolti leg is a small aircraft into a hill strip, so the itinerary carries a contingency day." },
      { question: "Do I need a special permit?", answer: "No restricted area permit is required. The standard trekking registration and local entry fees are included in your package, and a licensed guide is required. The absence of paperwork is one of the few things about far-western trekking that is simple." },
      { question: "What is the culture like in this region?", answer: "Predominantly Chhetri and Thakuri, with strong local traditions — deuda song and circle dance, distinct dialects, and household shrines. The far west has historically been the least developed part of Nepal, and the villages you walk through have very little contact with the outside." },
      { question: "How cold does it get at the high camps?", answer: "Nights at the camps above 3,500 m fall to around -10°C in spring and autumn, colder in November. The ridge is exposed and there is no shelter beyond your tent. A -15°C bag and an insulated mat make the difference between a good night and a long one." },
      { question: "Will we see the mountains?", answer: "Yes, from the ridge. The northern skyline takes in the <strong>Saipal</strong> range at 7,031 m and, in very clear conditions, the Api massif further west. These are peaks that almost no trekker has seen, because almost nobody goes to the far west." },
      { question: "Is there mobile signal?", answer: "There is NTC coverage in Martadi and the lower villages and nothing above them. Assume you are out of contact for the middle four or five days of the trek and brief your family before you leave the road." },
      { question: "What are the trails like?", answer: "They are pilgrim and village paths rather than trekking trails: clear on the ground because they are used, but unmaintained, unsigned and steep in places. In mist on the upper ridge they would be easy to lose, which is why a guide who knows the route matters here." },
      { question: "Where can I withdraw cash?", answer: "There is an ATM in Nepalgunj and, unreliably, in Martadi. Draw everything you need in Kathmandu or Nepalgunj, in small denominations, for anything you buy in the villages and for tips at the end." },
    ],
    inclusions: {
      flights: [
        "Kathmandu – Nepalgunj – Kolti return domestic flights as per the itinerary, including airport transfers.",
      ],
      transport: ["Private jeep transportation between Kolti, Martadi, and the trailhead as per the itinerary."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Nepalgunj and Martadi with breakfast.",
      ],
      permits: "Local entry fees and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu, Nepalgunj, and Martadi.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Kolti or Nepalgunj, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 8,
    fixedDepartureDay: "tuesday",
    itineraryDescription:
      "A 13-day camping trek from Martadi in Bajura to the Badimalika temple at 4,214 m, one of the great pilgrimage sites of far-western Nepal.",
    inExDescription:
      "Domestic flights, airport transfers, jeep transport, Kathmandu, Nepalgunj and Martadi hotel nights, full camping equipment with a cook crew, all trekking meals, entry fees and permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-Jun, Sep-Nov",
    meta: {
      title: "Badimalika Trek – 13 Days to a Far-Western Pilgrimage Site",
      description:
        "A 13-day camping trek from Martadi in Bajura to the Badimalika temple at 4,214 m, with the Saipal range on the skyline and almost no other trekkers.",
      keywords:
        "Badimalika Trek, Badimalika temple, Bajura trekking, Janai Purnima pilgrimage, far west Nepal trek, Martadi, remote trekking Nepal",
      tags: "Badimalika Trek, Far West, Remote Region, Pilgrimage, Camping Trek, Nepal Trekking",
    },
  },
  days: [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "Welcome to Nepal. You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Your guide joins you for the briefing: the thirteen-day plan, two flights each way with the second into a hill airstrip, the camping routine, and the realistic possibility that the Kolti flight moves by a day. We go through your kit list carefully, since nothing can be bought after Nepalgunj.",
        "The rest of the day is yours to recover from the flight. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot lowland city on the Terai plain and the air gateway to the far west.",
      ...NEPALGUNJ,
      html: p(
        "A short flight west across the country to the plains, with the Himalaya along the right-hand windows for the first half hour before the mountains fall away and the flat green of the Terai takes over.",
        "<strong>Nepalgunj (150 m)</strong> is a working border city near India — hot, busy and about as far from mountain Nepal in character as the country gets. It is not a tourist town, but the evening bazaar is worth an hour.",
        "The afternoon is deliberately empty because flights to Kolti leave early. The crew buys the last of the fresh supplies and your guide confirms the morning departure with the airline. An early dinner and an early night. Overnight in Nepalgunj.",
      ),
    },
    {
      title: "Fly from Nepalgunj (150 m) to Kolti (1,600 m) and Drive to Martadi (1,500 m)",
      elevation: "1,500 m",
      accommodation: "Martadi",
      placeDescription: "The district headquarters of Bajura, and the roadhead for the Badimalika pilgrimage route.",
      lng: 81.4795,
      lat: 29.458,
      html: p(
        "The weather-dependent leg. A small aircraft leaves Nepalgunj at first light and climbs from the plains into the hills, landing after about 45 minutes at <strong>Kolti (1,600 m)</strong>, a short strip cut into a hillside in Bajura.",
        "From the airstrip a jeep takes the group west along a rough hill road to <strong>Martadi (1,500 m)</strong>, the district headquarters — a single street of shops and offices, a hospital, and the last place on the route with a bank or a reliable shop.",
        "The afternoon is spent organising porters and loads. Martadi is a good introduction to the far west: busy, functional, and almost entirely untouched by tourism.",
        "Around 3 hours driving after the flight. Overnight at Martadi.",
      ),
    },
    {
      title: "Trek from Martadi (1,500 m) to Dahakot (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Dahakot",
      placeDescription: "A hillside village of stone and slate houses above the Budhiganga river.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line above Martadi.
      lng: 81.4728,
      lat: 29.4291,
      html: p(
        "The first walking day, climbing out of the district town into farming country.",
        "The trail leaves Martadi and climbs steadily through terraced fields of millet, maize and buckwheat, with villages of stone and slate houses on every shelf and shoulder. The Budhiganga river drops away below.",
        "This is ordinary far-western hill country and there is no trekking traffic at all — the people on the path are going to market, to school, or up to the pastures with stock. Your guide's translation is the difference between walking through and actually seeing it.",
        "<strong>Dahakot (2,100 m)</strong> is a village on the hillside with flat ground for the camp and, on a clear evening, the first view north to the high ridges.",
        "Around 5 hours. Overnight camping at Dahakot.",
      ),
    },
    {
      title: "Trek from Dahakot (2,100 m) to Ratapani (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Ratapani",
      placeDescription: "A forest camp on the pilgrim route below the Badimalika ridge.",
      // Approximate: pilgrim rest ground with no OpenStreetMap node.
      lng: 81.4761,
      lat: 29.3937,
      html: p(
        "Out of the farmland and into the forest, on the path the August pilgrims use.",
        "The trail climbs into oak and then rhododendron forest, thick, mossy and full of birdsong. In April and May the rhododendron flowers overhead for hours of walking — this is one of the finest forest belts in the far west and almost nobody walks it.",
        "The path is worn by pilgrim traffic rather than trekkers, so it is clear on the ground but rough, and steep in stretches.",
        "<strong>Ratapani (2,900 m)</strong> is a clearing with water used as a stopping place on the pilgrimage, with room for the tents. There is no settlement here and no shelter apart from what the group carries.",
        "Around 6 hours. Overnight camping at Ratapani.",
      ),
    },
    {
      title: "Trek from Ratapani (2,900 m) to Badimalika (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Badimalika",
      placeDescription: "The high camp below the Badimalika temple ridge, on open pasture.",
      // Approximate: camp below the temple ridge, placed near the mapped
      // Badimalika node south of Martadi.
      lng: 81.4764,
      lat: 29.3456,
      html: p(
        "The big climbing day, out of the trees and onto the open ridge.",
        "The forest thins around 3,300 m and the country opens into high pasture — grazing ground used through the summer, with herders' shelters and a great deal of sky. The change is abrupt and the views arrive all at once.",
        "The climb is sustained, gaining a thousand metres, and the altitude begins to be felt in the last hour. The group takes it slowly.",
        "The camp at around <strong>3,900 m</strong> sits below the temple ridge on flat pasture with water nearby. From here the northern skyline takes in the <strong>Saipal (7,031 m)</strong> range, and on a very clear evening the Api massif further west.",
        "Around 6 hours. It is a cold, exposed night. Overnight camping below the Badimalika ridge.",
      ),
    },
    {
      title: "Visit the Badimalika Temple (4,214 m) and Explore the Ridge",
      elevation: "3,900 m",
      accommodation: "Badimalika",
      placeDescription: "The high camp below the Badimalika temple ridge, on open pasture.",
      lng: 81.4764,
      lat: 29.3456,
      html: p(
        "The day the trek is built around, spent on the ridge above camp.",
        "The walk up to the <strong>Badimalika temple (4,214 m)</strong> takes an hour or two on open grass and rock. The shrine itself is modest — a stone structure with tridents, bells and offerings — and its power is entirely in the setting: an exposed ridge with the far-western Himalaya to the north and the hills of Bajura and Achham rolling away south.",
        "For one week each August this ridge holds tens of thousands of pilgrims for <strong>Janai Purnima</strong>. For the rest of the year it is empty, and standing there alone is the experience most people come for.",
        "The rest of the day is for walking the ridgeline, which gives new angles on Saipal and, in clear conditions, an enormous view west. Herders are usually camped on the pastures in season.",
        "Overnight camping below the Badimalika ridge.",
      ),
    },
    {
      title: "Trek from Badimalika (3,900 m) to Ratapani (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Ratapani",
      placeDescription: "A forest camp on the pilgrim route below the Badimalika ridge.",
      lng: 81.4761,
      lat: 29.3937,
      html: p(
        "Back down off the ridge and into the forest.",
        "The descent is steady on the same pilgrim path, dropping a thousand metres through the pasture belt and back under the trees. Poles help on the steeper forest sections, where the ground is soft with leaf litter.",
        "Coming down gives the forest properly — the birdlife, the moss, and in spring the rhododendron canopy, all of which are easier to notice when you are not climbing into them.",
        "<strong>Ratapani (2,900 m)</strong> in the early afternoon, at the same camp used on the way up. The night is markedly warmer than the ridge.",
        "Around 4–5 hours. Overnight camping at Ratapani.",
      ),
    },
    {
      title: "Trek from Ratapani (2,900 m) to Martadi (1,500 m)",
      elevation: "1,500 m",
      accommodation: "Martadi",
      placeDescription: "The district headquarters of Bajura, and the roadhead for the Badimalika pilgrimage route.",
      lng: 81.4795,
      lat: 29.458,
      html: p(
        "A long descent back to the road, covering two days of the ascent in one.",
        "The trail drops through the forest and back into farmland, past Dahakot and down through the terraces to the Budhiganga. It is 1,400 m of descent and it is felt in the knees by the end.",
        "The villages on the way down are worth the stops. With the trek behind you and no schedule to keep, tea in a courtyard with your guide translating is where a far-western trek actually pays off.",
        "<strong>Martadi (1,500 m)</strong> in the afternoon, with a guesthouse, a hot bucket of water and mobile signal for the first time in five days.",
        "This is where the porters and cook crew finish and tips are given. Around 6–7 hours. Overnight at Martadi.",
      ),
    },
    {
      title: "Drive from Martadi (1,500 m) to Kolti (1,600 m)",
      elevation: "1,600 m",
      accommodation: "Kolti",
      placeDescription: "A hillside village in Bajura with the airstrip that serves the district.",
      lng: 81.6678,
      lat: 29.5045,
      html: p(
        "A short jeep transfer east along the hill road back to the airstrip.",
        "Around three hours on a rough road with the Budhiganga valley below and terraced hillsides above. It is a pleasant, unhurried drive and a good chance to see the district from a different angle.",
        "<strong>Kolti (1,600 m)</strong> is a village strung along the airstrip with a few shops and simple lodgings. Aircraft come in low over the ridge and stop within a few hundred metres, which is worth watching.",
        "The afternoon is free. Your guide confirms the morning flight, and if the weather looks poor he will make a plan for the contingency day. Overnight at Kolti.",
      ),
    },
    {
      title: "Fly from Kolti (1,600 m) to Nepalgunj (150 m) and on to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start for the morning flight out, which is the only kind Kolti has.",
        "The aircraft drops off the hillside and out over the foothills to <strong>Nepalgunj (150 m)</strong> in about 45 minutes, and after a wait on the ground you connect to the hour-long flight to <strong>Kathmandu (1,400 m)</strong>.",
        "The temperature change is the memorable part: a frozen ridge two days ago, the heat of the Terai this morning, and the mild valley air of the capital by early afternoon.",
        "Transfer to your hotel with the rest of the day free. If the Kolti flight does not operate today, that is what tomorrow's spare day exists for. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held in reserve for the flights, and a free day in the city if they ran on time.",
        "Far-western itineraries without a spare day are the ones that end with a missed international connection, so this is part of the plan rather than padding.",
        "If you came out of Kolti yesterday as scheduled, today is yours. <strong>Boudhanath</strong> in the late afternoon, the old town and pottery square at <strong>Bhaktapur</strong>, or <strong>Patan Durbar Square</strong> and its museum are the three best uses of it.",
        "Thamel handles the shopping — pashmina, singing bowls, Himalayan tea and gear. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Swayambhunath</strong> or <strong>Pashupatinath</strong>, which after a pilgrimage trek makes a fitting last stop.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Bajura sees almost no foreign visitors, and the Badimalika ridge fewer still outside the August pilgrimage. If the far west suited you, the Api Himal base camp trek and the Humla Limi valley circuit are the two other routes out here, and both are just as empty. Safe travels.",
      ),
    },
  ],
};
