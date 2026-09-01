import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const DOLPO_PERMITS =
  "Shey Phoksundo National Park entry permit and the Lower Dolpo restricted area permit.";
const NEPALGUNJ = { lng: 81.625, lat: 28.0654 };

/** Juphal to Phoksundo Lake and back, the shortest way into Dolpo. */
export const sheyPhoksundoTrek: NewTrek = {
  price: 1650,
  difficulty: "moderate",
  maxAltitude: 4040,
  center: [82.9, 29.05],
  zoom: 9.5,
  content: {
    slug: "shey-phoksundo-lake-trek",
    title: "Shey Phoksundo Lake Trek",
    overview:
      "<p>The <strong>Shey Phoksundo Lake Trek</strong> is the shortest way into Dolpo, the highest and least visited district in Nepal, and it leads to the country's deepest and most photographed lake. Flying from Nepalgunj to the airstrip at <strong>Juphal</strong>, the route follows the Suli Gad river north through Chhepka and Sanduwa into <strong>Shey Phoksundo National Park</strong>, climbing beside Nepal's tallest waterfall to the Bon village of <strong>Ringmo</strong>.</p><p><strong>Phoksundo Lake (3,640 m)</strong> is an improbable turquoise, held between cliffs at the foot of the Kanjiroba range, with no fish in it and a Bon monastery on its shore. Ringmo is a cluster of flat-roofed stone houses with juniper drying on the walls, and the culture here is Tibetan rather than Nepali — this is the landscape and the community Peter Matthiessen wrote about in <em>The Snow Leopard</em>. At two weeks including flights it is the most achievable trek in a region where most itineraries run to three or four.</p>",
    highlights: [
      ["Phoksundo Lake (3,640 m)", "Stand above the deepest lake in Nepal, an unreal turquoise ringed by cliffs and the Kanjiroba peaks."],
      ["Nepal's Highest Waterfall", "Climb beside the 167 m Phoksundo falls on the old stone staircase into the upper valley."],
      ["The Bon Village of Ringmo", "Stay in a flat-roofed Tibetan village with a Bon monastery on the lake shore, one of the oldest religions in the Himalaya."],
      ["Shey Phoksundo National Park", "Walk the largest national park in Nepal, home to blue sheep, Himalayan black bear and the snow leopard."],
      ["The Least Visited District in Nepal", "Trek a region that receives a fraction of the visitors the Annapurna and Everest trails see in a single week."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>May to early June</strong> and <strong>late September to October</strong> are the two reliable windows. Dolpo sits in the rain shadow behind the Dhaulagiri massif, so it stays much drier than the rest of Nepal, and the lake holds its colour best under the high sun of late spring and the clear air of autumn.</p><p>Winter is not practical: the Juphal flights are unreliable from December, and Ringmo empties as families move down the valley with their animals. The monsoon affects the low approach through the Suli Gad gorge more than the upper valley, with leeches, landslides and cancelled flights, so July and August are best avoided even though Dolpo itself stays comparatively dry.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>The walking is moderate — four to six hours a day, with one sustained climb beside the waterfall and a maximum sleeping altitude of 3,640 m. What makes this trek demanding is not the terrain but the logistics: two flights each way, one of them into a hill airstrip that closes on weather, and lodges that are basic even by Nepali trekking standards.</p><p>You should be comfortable walking on rough riverside trails with exposure in a few places, and be prepared for simple food, shared rooms and no showers for a week. Four to six weeks of regular hill walking is ample preparation. Build flexibility into your international flights: the Juphal airstrip is the single biggest cause of delay on any Dolpo itinerary, which is why this trip carries a contingency day in Kathmandu at the end.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,500 m</strong> is required. The sleeping altitude never exceeds 3,640 m and the exploration day reaches around 4,040 m, so a standard 4,000 m policy is marginal — check the altitude clause rather than assuming.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Dolpo is one of the most isolated regions in Nepal: there is no road, and the nearest hospital is a flight away in Nepalgunj. Helicopter operators fly into the Suli Gad valley only against a guarantee of payment, so an insurer that will confirm cover directly to them matters more here than almost anywhere else. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Dolpo is dry, bright and cold at night. Bring waterproof trekking boots, three base layers, a fleece, an insulated down jacket, a windproof and waterproof shell, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A sleeping bag rated to <strong>-10°C</strong> is right for Ringmo, and a liner is worth carrying because lodge bedding here is thinner than on the main trails.</p><p>Also pack a 30-40 litre daypack, trekking poles for the waterfall staircase and the descent, a headlamp with spare batteries, factor 50 sunscreen and lip balm — the reflected light off the lake and the thin dry air burn quickly — sunglasses, a reusable bottle with purification tablets or a filter, a personal first aid kit, wet wipes, a quick-dry towel and a power bank. There is very little charging beyond Juphal and what exists is solar and slow.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>Nights in Kathmandu and Nepalgunj are in hotels with breakfast. On the trail you stay in simple teahouses and homestays at Dunai, Chhepka, Sanduwa and Ringmo. These are basic — twin rooms with plank beds, shared outside toilets, no showers, and a kitchen fire rather than a heated dining room. In Ringmo you are usually a guest in a Tibetan family's home, and the room is upstairs with the winter fodder stored below.</p><p>Three meals a day are included on the trek. The menu is short and repeats: <em>dal bhat</em>, noodles, potatoes, eggs, Tibetan bread, tsampa and butter tea in Ringmo. Everything beyond the local staples is carried in from Juphal, so choice is limited and prices rise with distance. Drink treated water from the lodges and streams rather than buying bottles, which cannot be disposed of anywhere in the park.</p>",
      },
    ],
    faqs: [
      { question: "Why does the itinerary include a spare day in Kathmandu?", answer: "The Juphal airstrip is weather-dependent and flights are regularly delayed by a day, sometimes more. The contingency day at the end absorbs that delay so a cancelled flight does not cost you your international connection. If everything runs to schedule it becomes a free day in Kathmandu." },
      { question: "Which permits do I need for Dolpo?", answer: "The Shey Phoksundo National Park entry permit and the Lower Dolpo restricted area permit. Both are included and arranged by our team, and the restricted area permit requires a licensed guide and a minimum of two trekkers, so solo travel on this route is not permitted by law." },
      { question: "How cold does it get at Phoksundo Lake?", answer: "Night-time temperatures at Ringmo fall to around -5°C in the main seasons and lower in late October, while the days are warm and intensely bright. The lodges are unheated apart from the kitchen, so a -10°C bag and a down jacket for the evenings make a real difference." },
      { question: "Why is the lake such an unusual colour and are there fish in it?", answer: "The turquoise comes from glacial rock flour suspended in the water and the depth, which reaches around 145 m. There are no fish in Phoksundo at all, which locals explain through the Bon legend of the lake's creation and hydrologists attribute to its isolation and mineral content." },
      { question: "Is there mobile signal or internet?", answer: "There is intermittent NTC signal at Dunai and occasionally at Ringmo, and nothing dependable in between. A few lodges have satellite internet for a fee but it is slow and often out of service. Plan to be uncontactable for most of the week and tell people at home in advance." },
      { question: "Can I extend the trek deeper into Dolpo?", answer: "Yes. From Ringmo the route continues over the Kang La to Shey Gompa and the Upper Dolpo circuit, or east over the Baga La to Dho Tarap on the Lower Dolpo route. Both need extra permit days and add one to two weeks, so tell us at the booking stage rather than on the trail." },
      { question: "What wildlife might we see?", answer: "Blue sheep are common on the slopes above the lake and are the snow leopard's main prey — the leopard itself is present but very rarely seen. Himalayan black bear, musk deer, langur and Himalayan griffon are all in the park, and the birdlife through the Suli Gad gorge is excellent." },
      { question: "How reliable is the flight to Nepalgunj and Juphal?", answer: "The Kathmandu to Nepalgunj leg is a normal scheduled flight and rarely a problem. The Nepalgunj to Juphal leg is a small aircraft into a hill strip and flies in the morning only, in clear conditions. Delays of a day are common in either direction, which the itinerary is built to absorb." },
      { question: "Is altitude sickness a concern on this route?", answer: "The risk is low by Himalayan standards because you never sleep above 3,640 m and the gain is gradual over four days. Your guide still monitors the group daily, and the exploration day at the lake doubles as acclimatisation before anyone climbs to the upper viewpoints." },
      { question: "How much cash should I carry?", answer: "There is an ATM in Nepalgunj and nothing usable beyond it, so draw everything you need in Kathmandu or Nepalgunj. Budget for drinks, snacks, charging, the occasional bucket of hot water, and tips for the guide and porters, all in Nepalese rupees and in small denominations." },
    ],
    inclusions: {
      flights: [
        "Kathmandu – Nepalgunj – Juphal return domestic flights as per the itinerary, including airport transfers.",
      ],
      transport: ["Private transportation between the airport and hotel in Nepalgunj."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Nepalgunj with breakfast.",
      ],
      permits: DOLPO_PERMITS,
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Nepalgunj.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Juphal or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 8,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "A 14-day round trip from Kathmandu to Phoksundo Lake (3,640 m) in Dolpo, flying via Nepalgunj and Juphal, with a spare day at the end for the notoriously weather-dependent return flight.",
    inExDescription:
      "Domestic flights via Nepalgunj to Juphal and back, airport transfers, Kathmandu and Nepalgunj hotel nights, teahouse lodging, all trekking meals, national park and restricted area permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city lunches and dinners, personal expenses, and tips are excluded.",
    bestTime: "May-Jun, Sep-Oct",
    meta: {
      title: "Shey Phoksundo Lake Trek – 14 Days in Dolpo",
      description:
        "A 14-day trek to Phoksundo Lake (3,640 m), the deepest lake in Nepal, through Shey Phoksundo National Park to the Bon village of Ringmo in Dolpo.",
      keywords:
        "Shey Phoksundo Lake Trek, Phoksundo Lake Nepal, Dolpo trekking, Ringmo village, Shey Phoksundo National Park, Juphal flight, remote trekking Nepal",
      tags: "Shey Phoksundo Lake Trek, Dolpo, Remote Region, Lake Trek, Nepal Trekking",
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
        "Your guide joins you later for the trip briefing, which for Dolpo covers rather more than the walking: the two flights each way, the restricted area permit and the passport photographs it needs, and the realistic possibility that the Juphal flight moves by a day in either direction. We go through your kit list, altitude, and the daily routine, and anything you are missing can be bought or hired within a few minutes' walk.",
        "The rest of the day is yours to recover from the flight. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Permit Day and Kathmandu Valley Sightseeing (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A day in the capital while our office lodges your restricted area permit, which for Dolpo has to be issued in person with your passport and photographs.",
        "With the paperwork in hand you have the day to see the valley. <strong>Boudhanath Stupa</strong> is the obvious choice before a Dolpo trek — it is the centre of Tibetan Buddhist life in Nepal, and the culture around the stupa is closely related to the one you will meet in Ringmo. <strong>Pashupatinath</strong>, <strong>Swayambhunath</strong> and the old durbar squares of Patan and Kathmandu are all within an easy drive with your guide.",
        "In the late afternoon we repack for the flight. Domestic baggage allowances are strict and the Juphal aircraft is small, so anything you do not need on the trail is left at the hotel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot lowland city on the Terai plain and the air gateway to the far west and Dolpo.",
      ...NEPALGUNJ,
      html: p(
        "A short flight west across the country to the plains. The aircraft follows the line of the Himalaya for the first part of the hour, with Manaslu, Annapurna and Dhaulagiri passing the right-hand windows before the mountains fall away and the flat green of the Terai takes over.",
        "<strong>Nepalgunj (150 m)</strong> is a working border city near India — hot, busy, and about as far from the mountains in character as Nepal gets. It is not a tourist town, but the transition is part of the trip: this is where the country's plains and hills meet, and the bazaar in the evening is worth an hour.",
        "The afternoon is deliberately empty. Flights to Juphal leave early, so we have an early dinner and an early night, and your guide confirms the morning departure with the airline. Overnight in Nepalgunj.",
      ),
    },
    {
      title: "Fly from Nepalgunj (150 m) to Juphal (2,475 m) and Trek to Dunai (2,140 m)",
      elevation: "2,140 m",
      accommodation: "Dunai",
      placeDescription: "The administrative headquarters of Dolpa district, strung along the Thuli Bheri river.",
      lng: 82.8942,
      lat: 28.9543,
      html: p(
        "The flight everyone watches the weather for. A small aircraft leaves Nepalgunj at first light and climbs from the plains into the hills, landing after about 45 minutes on the short sloping strip at <strong>Juphal (2,475 m)</strong>, cut into a hillside with the valley dropping away below the runway.",
        "The porters are organised on the airstrip and the walking starts immediately, descending through terraced fields of barley and buckwheat to the <strong>Thuli Bheri river</strong> and following it upstream. After the heat of Nepalgunj the air is suddenly thin, dry and clean.",
        "<strong>Dunai (2,140 m)</strong> is the district headquarters of Dolpa: a single street of shops and offices, a hospital, a police check post where permits are recorded, and a suspension bridge across the river. It is the last place on the trek with a shop worth the name. Around 2–3 hours of walking. Overnight at Dunai.",
      ),
    },
    {
      title: "Trek from Dunai (2,140 m) to Chhepka (2,665 m)",
      elevation: "2,665 m",
      accommodation: "Chhepka",
      placeDescription: "A small settlement in the forested Suli Gad gorge inside Shey Phoksundo National Park.",
      lng: 82.8971,
      lat: 29.0567,
      html: p(
        "The first full day, following the Suli Gad north into the national park.",
        "The trail climbs away from Dunai past the hospital and contours high above the river through pine and walnut, with villages of flat-roofed houses on the terraces opposite. At the confluence the route turns north into the <strong>Suli Gad gorge</strong> and the character changes: steep walls, dense forest, and the river loud below the path.",
        "You register at the <strong>Shey Phoksundo National Park</strong> entrance post at Sulighat, then continue through Shyanta into the gorge proper. The forest here is genuinely wild — bear and langur are both present, and the birdlife is exceptional.",
        "<strong>Chhepka (2,665 m)</strong> is a handful of lodges in a clearing where the valley widens briefly. Around 5–6 hours. Overnight at Chhepka.",
      ),
    },
    {
      title: "Trek from Chhepka (2,665 m) to Sanduwa (3,100 m)",
      elevation: "3,100 m",
      accommodation: "Sanduwa",
      placeDescription: "A trail settlement at the junction of the Phoksundo and Pungmo valleys.",
      lng: 82.8968,
      lat: 29.1344,
      html: p(
        "A steady day up the gorge with the forest thinning and the first proper altitude gain.",
        "The trail crosses and recrosses the Suli Gad on wooden bridges, climbing through blue pine and juniper past <strong>Rechi</strong>, where a few families farm a shelf above the river. The gorge is narrow enough in places that the sun only reaches the trail for a few hours in the middle of the day.",
        "As you gain height the vegetation changes from Himalayan forest to something drier and more Tibetan — juniper, wormwood and thorn scrub — and the houses change with it, from pitched roofs to the flat mud roofs used where it barely rains.",
        "<strong>Sanduwa (3,100 m)</strong> sits at the junction where the Pungmo valley comes in from the west, the route to the Kagmara La and Lower Dolpo. Around 4–5 hours. Overnight at Sanduwa.",
      ),
    },
    {
      title: "Trek from Sanduwa (3,100 m) to Ringmo and Phoksundo Lake (3,640 m)",
      elevation: "3,640 m",
      accommodation: "Ringmo",
      placeDescription: "A Bon village of flat-roofed stone houses on the shore of Phoksundo Lake.",
      lng: 82.9365,
      lat: 29.1703,
      html: p(
        "A short day with one memorable climb, ending at the lake the whole trek is built around.",
        "The trail follows the river to the foot of <strong>Phoksundo waterfall</strong>, at around 167 m the highest in Nepal, and then climbs the steep stone staircase cut into the cliff beside it. This is the section people remember: exposed in places, spectacular throughout, with the falls thundering below and the valley opening behind you. Take it slowly — you gain 500 m and finish above 3,600 m.",
        "At the top the path levels through birch and juniper, and then <strong>Phoksundo Lake (3,640 m)</strong> appears all at once: a sheet of impossible turquoise held between cliffs, with the Kanjiroba peaks behind it. There are no fish in it and, on a still morning, no ripple either.",
        "<strong>Ringmo</strong> is a compact village of flat-roofed stone houses with juniper stacked on the walls and a Bon <em>gompa</em> on the shore. Around 4–5 hours. Overnight at Ringmo.",
      ),
    },
    {
      title: "Exploration Day at Phoksundo Lake (3,640 m)",
      elevation: "3,640 m",
      accommodation: "Ringmo",
      placeDescription: "A Bon village of flat-roofed stone houses on the shore of Phoksundo Lake.",
      lng: 82.9365,
      lat: 29.1703,
      html: p(
        "A full day at the lake, and the reason to come this far rather than turn round at the waterfall.",
        "The morning walk follows the old salt trail along the lake's western cliff — a path built out from the rock face on wooden stakes and stone, climbing to around <strong>4,040 m</strong> before dropping to the meadow at the far end. It is the route the caravans took to Tibet, and it gives the classic view down the length of the water. Three to four hours there and back, and useful acclimatisation.",
        "In the afternoon you can visit <strong>Thashung Gompa</strong> on the shore, a Bon monastery around 900 years old, built to protect the animals of the valley. Bon predates Buddhism in Tibet and its pilgrims circle a monastery anticlockwise — the opposite direction to Buddhist practice, and the easiest way to see the difference for yourself.",
        "The light on the lake changes completely through the day, from milky green in the morning to deep blue by mid-afternoon. Overnight at Ringmo.",
      ),
    },
    {
      title: "Trek from Ringmo (3,640 m) to Chhepka (2,665 m)",
      elevation: "2,665 m",
      accommodation: "Chhepka",
      placeDescription: "A small settlement in the forested Suli Gad gorge inside Shey Phoksundo National Park.",
      lng: 82.8971,
      lat: 29.0567,
      html: p(
        "A long descent back down the gorge, retracing two days of the approach in one.",
        "The staircase beside the waterfall is easier going down than up but demands more attention; poles help and the group spreads out. Below it the trail runs fast through Sanduwa and Rechi, losing height steadily as the air thickens and the forest closes back in.",
        "Walking the gorge in the other direction shows you a different valley. The light falls differently, the mountains behind you rather than ahead, and having been to the lake the landscape reads as a route somewhere rather than a way in.",
        "<strong>Chhepka (2,665 m)</strong> is a comfortable place to spend the night after a long day. Around 6–7 hours. Overnight at Chhepka.",
      ),
    },
    {
      title: "Trek from Chhepka (2,665 m) to Shyanta (2,490 m)",
      elevation: "2,490 m",
      accommodation: "Shyanta",
      placeDescription: "A small farming settlement in the lower Suli Gad valley near the national park entrance.",
      lng: 82.9041,
      lat: 29.0409,
      html: p(
        "A short, easy day out of the national park, deliberately relaxed to leave a margin before the flight.",
        "The trail follows the Suli Gad down through the last of the forest, past the park entrance post where the group is checked out, and into farmland again — barley and buckwheat terraces, apricot trees, and water mills turning on the side streams.",
        "<strong>Shyanta (2,490 m)</strong> is a small settlement on a shelf above the river with a handful of lodges. It is only two to three hours from Chhepka, which is the point: it puts the group within easy reach of Juphal tomorrow morning without a long day beforehand.",
        "The afternoon is free for laundry, a bucket of hot water, and the last of the trail conversations. Overnight at Shyanta.",
      ),
    },
    {
      title: "Trek from Shyanta (2,490 m) to Juphal (2,475 m)",
      elevation: "2,475 m",
      accommodation: "Juphal",
      placeDescription: "A hillside village above the Thuli Bheri with the airstrip that serves the whole of Dolpa district.",
      lng: 82.8201,
      lat: 28.9797,
      html: p(
        "The last walking day, following the Thuli Bheri west and climbing to the airstrip.",
        "The trail drops to the river, passes below Dunai, and then climbs the terraced hillside to <strong>Juphal (2,475 m)</strong> — about 400 m of ascent at the end of the day, which is more than it sounds after a week on the trail.",
        "Juphal is a strip of village along the runway, with a few lodges, a couple of shops and a view down the Thuli Bheri valley. Aircraft come in low over the ridge and stop within a few hundred metres, which is worth watching from the lodge terrace.",
        "This is where the porters leave the group and tips are given. Around 4–5 hours. Overnight at Juphal.",
      ),
    },
    {
      title: "Fly from Juphal (2,475 m) to Nepalgunj (150 m) and on to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start for the morning flight out, which is the only kind Juphal has.",
        "The aircraft drops off the hillside and out over the foothills to <strong>Nepalgunj (150 m)</strong> in about 45 minutes, and after a wait on the ground you connect to the hour-long flight back to <strong>Kathmandu (1,400 m)</strong>. Both legs are weather-dependent; if the morning is clear you are in the capital by early afternoon.",
        "Transfer to your hotel, and the rest of the day is yours. A hot shower and a meal that is not <em>dal bhat</em> tend to be the first two priorities, and Thamel is well set up for both.",
        "If the Juphal flight does not operate today, this is exactly what the spare day at the end of the itinerary exists for. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held in reserve for the flights, and a free day in Kathmandu if they ran on time.",
        "Dolpo itineraries that do not carry a spare day are the ones that end with a missed international connection, so this day is part of the plan rather than padding. If the group came out of Juphal yesterday as scheduled, it is yours to spend as you like.",
        "Good options with your guide: <strong>Boudhanath</strong> in the late afternoon when the local community walks the circuit, the pottery square and old town at <strong>Bhaktapur</strong>, or a half day at <strong>Patan Durbar Square</strong> and its museum, which is the best in the country. Thamel handles the shopping — pashmina, singing bowls, Himalayan tea and gear.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for one more corner of the valley — <strong>Swayambhunath</strong> in the morning light is a good final stop, with the whole city laid out below the stupa.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Dolpo is the part of Nepal that changes least, and Phoksundo is the reason most people go. If you want to go further into it, the Upper Dolpo circuit over the Kang La to Shey Gompa and the Lower Dolpo route to Dho Tarap both start from the lake you have just walked to. Safe travels.",
      ),
    },
  ],
};
