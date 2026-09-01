import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

/**
 * Darbang to the base camp of Churen Himal via the Jaljala pass and Dhorpatan.
 *
 * Waypoints marked "approximate" are camps with no OpenStreetMap node; they sit
 * on the route line between verified points.
 */
export const churenHimalTrek: NewTrek = {
  price: 2150,
  difficulty: "challenging",
  maxAltitude: 4500,
  center: [83.2, 28.6],
  zoom: 9.5,
  content: {
    slug: "churen-himal-base-camp-trek",
    title: "Churen Himal Base Camp Trek",
    overview:
      "<p>The <strong>Churen Himal Base Camp Trek</strong> walks the western end of the Dhaulagiri massif, to the foot of <strong>Churen Himal (7,371 m)</strong> — a peak that stands three kilometres above its base camp and has been climbed only a handful of times. The route crosses the <strong>Jaljala pass (3,414 m)</strong> into the <strong>Dhorpatan Hunting Reserve</strong>, the only reserve of its kind in Nepal, and then turns north up empty valleys to the moraine below the mountain.</p><p>It is a camping trek from start to finish, through Magar villages, oak and rhododendron forest, and high grazing country used by herders and blue sheep in roughly equal measure. Alongside Churen the base camp looks out at <strong>Gurja Himal (7,193 m)</strong> and <strong>Putha Hiunchuli (7,246 m)</strong>, so you get three 7,000 m peaks from one camp. Almost nobody goes; most seasons the route sees a handful of parties.</p>",
    highlights: [
      ["Churen Himal (7,371 m)", "Camp below a 7,000 m peak that has seen only a handful of ascents and almost no trekkers."],
      ["Three 7,000 m Peaks from One Camp", "See Churen Himal, Gurja Himal and Putha Hiunchuli together from the base camp moraine."],
      ["The Dhorpatan Hunting Reserve", "Cross the only hunting reserve in Nepal, a protected area of high pasture, blue sheep and pine forest."],
      ["The Jaljala Pass (3,414 m)", "Climb from the Myagdi valley over a forested pass into the wide grasslands of Dhorpatan."],
      ["A Fully Camped Wilderness Route", "Twelve nights in tents with a cook crew in country that has no lodges at all."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong> are the seasons. Spring brings rhododendron through the forest belt below the Jaljala pass and the high pastures into use, with herders moving up as you do. Autumn is drier and clearer, and gives the best chance of an unobstructed view of the three peaks from base camp.</p><p>Winter closes the base camp valley and the Jaljala pass with snow and empties the Dhorpatan grasslands, so December to March is not feasible for a camping group. The monsoon brings leeches through the forest, landslides on the approach road, and cloud that hides the mountains entirely — June to September is best avoided.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a challenging trek. There are no technical sections and the maximum altitude is 4,500 m, but the route is long, entirely self-supported, and follows unmaintained trails and herders' paths for much of its length. The group carries tents, food and a kitchen, and there is no lodge, shop or road between Darbang and Dhorpatan.</p><p>You should be comfortable walking six to eight hours a day for two weeks on rough ground, and content with camping, basic hygiene and cold nights. Previous multi-day trekking experience is important; experience above 4,000 m is helpful. Eight to ten weeks of hill fitness preparation with a loaded pack makes the difference on the long days.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required, above the 4,500 m base camp. Standard policies capped at 3,000 m or 4,000 m would leave the objective of the trek uninsured, so check the altitude clause specifically before buying.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. There is no road, lodge or medical post between Darbang and Dhorpatan, and an evacuation from the base camp valley means a helicopter, which operators dispatch only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Camping at 4,500 m sets the list. Bring waterproof trekking boots, gaiters, a <strong>four-season sleeping bag rated to -15°C</strong> and an insulated mat, an insulated down jacket, a windproof and waterproof shell jacket and trousers, three or four base layers, a fleece, a warm hat, a sun hat, insulated and liner gloves and wool socks.</p><p>Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification, a thorough personal first aid kit with blister care, insect repellent and leech socks for the forest, wet wipes and hand sanitiser, a quick-dry towel and a large power bank — there is no charging between Darbang and Dhorpatan.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>Apart from hotel nights in Kathmandu and Pokhara and simple lodging at Darbang, this is a <strong>camping trek</strong>: two-person tents pitched by the crew, with a mess tent and a toilet tent, at camps between 1,800 m and 4,500 m. The base camp nights fall to -10°C or lower, and the pasture camps are exposed to wind.</p><p>A cook and kitchen crew travel with the group, cooking three hot meals a day from supplies bought in Beni and Darbang. Fresh food lasts the first days and then the menu becomes rice, lentils, pasta, potatoes and dried goods, with soup at every camp. Dhorpatan has a small settlement where a few supplies can be topped up. Water comes from streams and springs, boiled and treated by the crew.</p>",
      },
    ],
    faqs: [
      { question: "What is the Dhorpatan Hunting Reserve?", answer: "The only hunting reserve in Nepal, established in 1987, where a limited number of licensed permits are issued each year for blue sheep and Himalayan tahr. For trekkers it functions as a protected area of grassland, pine forest and high pasture, and the wildlife is noticeably less shy than in unprotected country." },
      { question: "Do I need a special permit?", answer: "The Dhorpatan Hunting Reserve entry permit and the standard trekking registration, both included in your package. It is not a restricted area, so no minimum group size applies, but a licensed guide and a supported crew are essential in practice." },
      { question: "How high is the base camp and how cold does it get?", answer: "Around 4,500 m. Night-time temperatures there fall to -10°C in the main seasons and lower in November, with wind off the glacier. There is no shelter beyond your tent, which is why a -15°C bag and an insulated mat are on the required list rather than the suggested one." },
      { question: "Will we see Churen Himal clearly?", answer: "Yes, from the base camp and from the pastures below it. Churen at 7,371 m rises almost three kilometres above the camp, with Gurja Himal at 7,193 m to the east and Putha Hiunchuli at 7,246 m north. Mornings are the clearest; cloud usually builds by early afternoon." },
      { question: "How does this compare with the Dhaulagiri Circuit?", answer: "The Dhaulagiri Circuit crosses two 5,000 m passes and three nights of glacier camps, and is significantly harder. This trek reaches a similar sense of remoteness with no glacier travel and a lower maximum altitude, which makes it a good option if you want the wilderness without the technical exposure." },
      { question: "What wildlife might we see?", answer: "Blue sheep are common in the reserve and on the slopes below the base camp, and Himalayan tahr, musk deer and Himalayan black bear are all present. Snow leopard live in the upper valleys. The pheasant and raptor life through the forest belt is exceptional, particularly in spring." },
      { question: "Is there mobile signal?", answer: "There is patchy NTC coverage at Darbang and at Dhorpatan, and nothing in between or above. Expect to be out of contact for most of the trek and tell people at home before you leave the road." },
      { question: "How do we get to the trailhead?", answer: "A drive from Kathmandu to Pokhara, and then a second day west through Beni to the roadhead at Darbang. The last section is a rough hill road. There is no flight option, which is one of the reasons the area stays quiet." },
      { question: "How many staff travel with the group?", answer: "A licensed guide, an assistant guide, a cook and kitchen crew, and porters for the tents, food and group equipment. On a fully camped route the support team is larger than the trekking group itself, which is the main driver of the price." },
      { question: "Can the route be extended?", answer: "Yes. From Dhorpatan the trail continues west into Rukum on the Guerrilla Trek route, or north-east towards Putha Hiunchuli base camp and the western end of the Dhaulagiri massif. Both add roughly a week and need to be planned at the booking stage." },
    ],
    inclusions: {
      transport: [
        "Private transportation from Kathmandu to Pokhara and from Pokhara to Kathmandu as per the itinerary.",
        "Private jeep transportation from Pokhara to Darbang and back as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast.", "Accommodation in Pokhara with breakfast."],
      permits: "Dhorpatan Hunting Reserve entry permit and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the full camping section of the trek.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu and Pokhara." },
    porterDays: 13,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 16-day camping trek from Darbang over the Jaljala pass and through the Dhorpatan Hunting Reserve to the base camp of Churen Himal (7,371 m).",
    inExDescription:
      "Airport transfers, road transport, Kathmandu and Pokhara hotel nights, full camping equipment with a cook crew, all trekking meals, the hunting reserve permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Churen Himal Base Camp Trek – 16 Days in West Dhaulagiri",
      description:
        "A 16-day camping trek through the Dhorpatan Hunting Reserve to the base camp of Churen Himal (7,371 m), with Gurja Himal and Putha Hiunchuli alongside.",
      keywords:
        "Churen Himal Base Camp Trek, Churen Himal, Dhorpatan Hunting Reserve, Jaljala pass, Gurja Himal, west Dhaulagiri trek, camping trek Nepal",
      tags: "Churen Himal Base Camp Trek, Dhaulagiri, Remote Region, Camping Trek, Base Camp Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the sixteen-day plan, twelve nights of camping, the equipment we supply, and the practical reality that nothing can be bought between Darbang and Dhorpatan. We go through your kit item by item, with particular attention to your sleeping bag and boots.",
        "Anything missing can be bought or hired in Thamel this afternoon. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A beautiful lakeside city and the gateway to the Annapurna and Dhaulagiri regions.",
      ...POKHARA,
      html: p(
        "After breakfast we leave the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river west through gorge country with terraced hillsides above and whitewater below.",
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on.",
        "Pokhara arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurna massif behind it and Machhapuchhre unmistakable from the lakeside.",
        "The crew makes the final load sort here, and this is the last comfortable evening before the tents. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Darbang (1,110 m) and Trek to Dharapani (1,560 m)",
      elevation: "1,560 m",
      accommodation: "Dharapani",
      placeDescription: "A farming village on the Myagdi Khola at the edge of the Dhaulagiri foothills.",
      lng: 83.3752,
      lat: 28.4533,
      html: p(
        "An early start west through Beni, the district town at the confluence of the Kali Gandaki and the Myagdi Khola, and on up a rough hill road to the roadhead at <strong>Darbang (1,110 m)</strong>.",
        "Four to five hours in the vehicle, the last part slow and bumpy. The porters load at the roadhead and the walking begins immediately.",
        "The trail crosses the Myagdi Khola and climbs gently through terraced fields of millet and maize, past Magar villages with slate roofs and buffalo tethered under the eaves. This is working farmland rather than trekking country.",
        "<strong>Dharapani (1,560 m)</strong> is a village strung along the hillside above the river. Around 3 hours of walking. Overnight camping at Dharapani.",
      ),
    },
    {
      title: "Trek from Dharapani (1,560 m) to Muri (1,850 m)",
      elevation: "1,850 m",
      accommodation: "Muri",
      placeDescription: "A large Magar village on a shelf above the Myagdi Khola.",
      lng: 83.3448,
      lat: 28.5157,
      html: p(
        "A steady day through the middle hills, with more up and down than the small net gain suggests.",
        "The trail contours above the Myagdi Khola through Sibang and Phalai Gaon, dropping to cross side streams on suspension bridges and climbing back onto the shoulder each time. The forest is subtropical low down and pine higher up.",
        "The villages here are Magar, one of the hill communities that farmed this valley long before anyone trekked through it, and the fields are worked entirely by hand.",
        "<strong>Muri (1,850 m)</strong> is a substantial village of stone houses on a shelf, with a school and a couple of shops. From the fields above it the north view opens on the Dhaulagiri outliers.",
        "Around 6 hours. Overnight camping at Muri.",
      ),
    },
    {
      title: "Trek from Muri (1,850 m) to Lumsum (2,240 m)",
      elevation: "2,240 m",
      accommodation: "Lumsum",
      placeDescription: "A hillside settlement below the Jaljala pass on the route to Dhorpatan.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line between Muri and the Jaljala pass.
      lng: 83.2683,
      lat: 28.5045,
      html: p(
        "West towards the pass, leaving the Myagdi valley behind.",
        "The trail turns away from the river and climbs south-west through farmland and into forest, following a route that connects the Myagdi and Dhorpatan valleys and has done for a very long time. Traders, herders and porters use it; trekkers essentially do not.",
        "The forest here is oak with rhododendron above, and in April and May the flowering runs for hours of walking.",
        "<strong>Lumsum (2,240 m)</strong> is a small settlement on the hillside with room for the camp and a view back east over the Myagdi.",
        "Around 5–6 hours. Overnight camping at Lumsum.",
      ),
    },
    {
      title: "Cross the Jaljala Pass (3,414 m) and Trek to Chentung (3,000 m)",
      elevation: "3,000 m",
      accommodation: "Chentung",
      placeDescription: "A grazing camp on the western side of the Jaljala pass above the Dhorpatan valley.",
      // Approximate: herders' camp with no OpenStreetMap node.
      lng: 83.1611,
      lat: 28.4941,
      html: p(
        "The first pass of the trek, and the doorway into Dhorpatan.",
        "The climb from Lumsum is long and steady through rhododendron and then fir forest, coming out above the treeline on open grass. The <strong>Jaljala pass (3,414 m)</strong> is a broad grassy saddle rather than a rocky col, marked with cairns and prayer flags.",
        "The view from the top is the reward: <strong>Dhaulagiri (8,167 m)</strong>, <strong>Churen Himal (7,371 m)</strong> and <strong>Gurja Himal (7,193 m)</strong> lined up along the northern skyline, with the Dhorpatan grasslands opening west below.",
        "The descent is gentle onto pasture used through the summer by herders from both valleys.",
        "<strong>Chentung (3,000 m)</strong> is a grazing camp with water. Around 7 hours. Overnight camping at Chentung.",
      ),
    },
    {
      title: "Trek from Chentung (3,000 m) to Dhorpatan (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Dhorpatan",
      placeDescription: "A wide grassland valley and settlement inside Nepal's only hunting reserve.",
      lng: 83.0673,
      lat: 28.4903,
      html: p(
        "An easy day across the grasslands into the reserve settlement.",
        "The trail descends gently west along a broad, flat-bottomed valley — unusual country for Nepal, more like a Tibetan plain than a Himalayan gorge — with pine forest on the slopes and grazing stock on the floor.",
        "<strong>Dhorpatan (2,900 m)</strong> is a scattered settlement in the middle of it, with a small Tibetan refugee community established in the 1960s, a few shops, an airstrip that is rarely used, and the headquarters of the <strong>Dhorpatan Hunting Reserve</strong>.",
        "The reserve is the only one of its kind in Nepal, and the permits are checked here. It is also the last place on the route where any supplies can be bought.",
        "Around 4–5 hours. Overnight camping at Dhorpatan.",
      ),
    },
    {
      title: "Trek from Dhorpatan (2,900 m) to Gurjaghat (3,200 m)",
      elevation: "3,200 m",
      accommodation: "Gurjaghat",
      placeDescription: "A river camp in the valley leading north towards Churen Himal.",
      // Approximate: unmapped river camp on the northern approach.
      lng: 83.1319,
      lat: 28.5786,
      html: p(
        "North out of the grasslands and into the valleys below the peaks.",
        "The trail leaves Dhorpatan and turns north, following the Uttar Ganga upstream through pine and birch forest with the valley narrowing steadily. The path is a herders' route and is rough in places.",
        "This is genuinely empty country. There is no settlement north of Dhorpatan, and the traffic is limited to herders in summer and the occasional reserve staff patrol.",
        "Blue sheep are common on the slopes above the trail through this section, and because they are protected they are much less shy than elsewhere.",
        "<strong>Gurjaghat (3,200 m)</strong> is a camp beside the river with flat ground and good water. Around 6 hours. Overnight camping at Gurjaghat.",
      ),
    },
    {
      title: "Trek from Gurjaghat (3,200 m) to Churen Himal Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Churen Himal Base Camp",
      placeDescription: "A moraine camp below the south face of Churen Himal in the western Dhaulagiri massif.",
      // Approximate: base camp with no OpenStreetMap node; placed below the
      // mapped Churen Himal ridge.
      lng: 83.2117,
      lat: 28.7044,
      html: p(
        "The big day: 1,300 m of climbing onto the moraine below the mountain.",
        "The trail follows the valley north, leaving the trees behind at around 3,700 m and climbing through alpine scrub and then open moraine. There is no path in the ordinary sense for the last section — your guide picks a line and the group moves together.",
        "The peaks come into view one at a time and then all at once. <strong>Churen Himal (7,371 m)</strong> rises almost three kilometres above the camp, with <strong>Gurja Himal (7,193 m)</strong> east and <strong>Putha Hiunchuli (7,246 m)</strong> north — three 7,000 m mountains in a single view, none of them familiar to most trekkers.",
        "<strong>Churen Himal Base Camp (4,500 m)</strong> is a flat area of moraine with meltwater nearby. It is cold as soon as the sun leaves the valley.",
        "Around 7 hours. Overnight camping at Churen Himal Base Camp.",
      ),
    },
    {
      title: "Exploration Day at Churen Himal Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Churen Himal Base Camp",
      placeDescription: "A moraine camp below the south face of Churen Himal in the western Dhaulagiri massif.",
      lng: 83.2117,
      lat: 28.7044,
      html: p(
        "A full day at the base camp, which is what the eight days of walking were for.",
        "The morning walk climbs the moraine ridge west of camp towards <strong>4,800 m</strong>, for the fuller view along the western Dhaulagiri wall and down the glacier system that feeds the valley. Three to four hours at an easy pace.",
        "Blue sheep are usually visible on the slopes from camp, sometimes in herds of thirty or more, and the tracks of the snow leopard that follow them are a common find on the moraine. Himalayan griffon work the thermals above the valley through the middle of the day.",
        "The afternoon is rest. There is a particular stillness to a base camp with no expedition on it: no aircraft, no other party, and three 7,000 m faces going pink at sunset.",
        "Overnight camping at Churen Himal Base Camp.",
      ),
    },
    {
      title: "Trek from Churen Himal Base Camp (4,500 m) to Gurjaghat (3,200 m)",
      elevation: "3,200 m",
      accommodation: "Gurjaghat",
      placeDescription: "A river camp in the valley leading north towards Churen Himal.",
      lng: 83.1319,
      lat: 28.5786,
      html: p(
        "Back down the valley, retracing the approach in a single long descent.",
        "The moraine section demands the same care going down as it did coming up, and then the trail eases into alpine scrub and back below the treeline. Losing 1,300 m is hard on the knees and poles help.",
        "Coming down, the valley reads differently: the peaks behind you, the forest closing in ahead, and the air thickening noticeably with every hour.",
        "<strong>Gurjaghat (3,200 m)</strong> in the afternoon, at the same camp used on the way up, with running water and the luxury of grass under the tents.",
        "Around 6 hours. Overnight camping at Gurjaghat.",
      ),
    },
    {
      title: "Trek from Gurjaghat (3,200 m) to Dhorpatan (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Dhorpatan",
      placeDescription: "A wide grassland valley and settlement inside Nepal's only hunting reserve.",
      lng: 83.0673,
      lat: 28.4903,
      html: p(
        "A steady walk south out of the valley and back onto the grasslands.",
        "The trail follows the Uttar Ganga downstream through birch and pine, with the valley widening as it goes and the reserve's stock reappearing on the pastures.",
        "There is time on this section to look properly at the reserve. Dhorpatan is unusual in Nepal — a wide, flat, grassy valley at 2,900 m — and the management of hunting permits alongside conservation is a subject your guide can explain and local staff will talk about.",
        "<strong>Dhorpatan (2,900 m)</strong> in the afternoon, where a few supplies can be topped up and the Tibetan settlement is worth an hour.",
        "Around 5–6 hours. Overnight camping at Dhorpatan.",
      ),
    },
    {
      title: "Cross the Jaljala Pass (3,414 m) and Trek to Lumsum (2,240 m)",
      elevation: "2,240 m",
      accommodation: "Lumsum",
      placeDescription: "A hillside settlement below the Jaljala pass on the route to Dhorpatan.",
      lng: 83.2683,
      lat: 28.5045,
      html: p(
        "Back over the pass, with a long day either side of it.",
        "The climb east out of the grasslands to the <strong>Jaljala pass (3,414 m)</strong> is gentler from this direction, on open grass most of the way. The view from the top is the last of the big mountains — Dhaulagiri, Churen and Gurja together — and worth a long stop.",
        "The descent runs into fir and then rhododendron forest, dropping steadily through the belt you climbed on day six.",
        "<strong>Lumsum (2,240 m)</strong> in the late afternoon, back among farmland and woodsmoke.",
        "Around 8 hours in total. Overnight camping at Lumsum.",
      ),
    },
    {
      title: "Trek from Lumsum (2,240 m) to Darbang (1,110 m) and Drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A scenic lakeside city offering a relaxing end to the trekking journey.",
      ...POKHARA,
      html: p(
        "The last walking day, down to the road and out.",
        "The trail descends east through Muri and the Magar villages to the Myagdi Khola and the roadhead at <strong>Darbang (1,110 m)</strong>. It is a long morning of downhill on village paths, four to five hours, ending in subtropical warmth.",
        "This is where the porters and cook crew finish and where tips are given. After twelve nights of camping the crew has carried everything the group ate and slept in, and the farewell is a proper one.",
        "The jeep runs down to Beni and then east to <strong>Pokhara (822 m)</strong>, arriving in the evening — around five hours, the first part rough and the rest paved.",
        "A hotel, a hot shower and a lakeside dinner. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A relaxed start. If you wake early, sunrise over the Annapurnas from the lakeside is worth the alarm, and a boat across Phewa Lake fills an hour before breakfast.",
        "We then drive east along the Prithvi Highway to <strong>Kathmandu (1,400 m)</strong>, back through the Trishuli gorge country with a lunch stop en route. It is a full day on the road; the 25-minute flight is available as an add-on if you would rather keep the afternoon free.",
        "You arrive in the late afternoon and transfer to your hotel.",
        "The evening is free, and Thamel is the place for last-minute shopping. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Boudhanath</strong>, <strong>Pashupatinath</strong> or the old town at <strong>Bhaktapur</strong> with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "The western end of Dhaulagiri is one of the least visited parts of the Nepali Himalaya, and Churen Himal is a mountain most trekkers have never heard of. If the emptiness suited you, the Dhaulagiri Circuit next door is the harder version and the Guerrilla Trek continues west from Dhorpatan into Rukum. Safe travels.",
      ),
    },
  ],
};
