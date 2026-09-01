import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

const NEPALGUNJ = { lng: 81.625, lat: 28.0654 };

/**
 * Myagdi to Rolpa through Dhorpatan and the Maoist heartland of Rukum.
 *
 * Waypoints marked "approximate" are camps with no OpenStreetMap node; they sit
 * on the route line between verified points.
 */
export const guerrillaTrek: NewTrek = {
  price: 1750,
  difficulty: "moderate",
  maxAltitude: 3414,
  center: [82.9, 28.5],
  zoom: 9,
  content: {
    slug: "guerrilla-trek",
    title: "Guerrilla Trek",
    overview:
      "<p>The <strong>Guerrilla Trek</strong> crosses the mid-western hills of <strong>Rukum</strong> and <strong>Rolpa</strong>, the districts at the centre of Nepal's ten-year Maoist insurgency between 1996 and 2006. It is named for the routes the insurgency used, and it passes through villages — <strong>Thabang</strong> most of all — that were the political heart of the movement and are still, in a way that is hard to find elsewhere in Nepal, defined by it.</p><p>The walking is middle-hill and forest country rather than high mountain: the <strong>Jaljala pass (3,414 m)</strong>, the wide grasslands of the <strong>Dhorpatan Hunting Reserve</strong>, and days of Magar and Kham Magar villages where nobody is running a lodge. Dhaulagiri, Churen Himal and Putha Hiunchuli stand along the northern skyline for much of it. It is a trek about people and recent history as much as scenery, in a region that receives virtually no visitors.</p>",
    highlights: [
      ["Thabang and the Insurgency Heartland", "Walk through the villages at the centre of Nepal's ten-year civil war, with the history explained on the ground."],
      ["The Dhorpatan Hunting Reserve", "Cross the wide grasslands of Nepal's only hunting reserve, with blue sheep and pine forest."],
      ["The Jaljala Pass (3,414 m)", "Climb from the Myagdi valley over a forested pass with Dhaulagiri and Churen Himal on the skyline."],
      ["Kham Magar Villages", "Stay in communities with their own language and traditions, far from any trekking route."],
      ["A Region With No Tourism", "Trek an area that sees almost no foreign visitors, where the group camps and carries everything."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the seasons. Spring brings rhododendron through the forest belt below the Jaljala pass and warm days in the middle hills. Autumn is drier and gives the clearest views of the Dhaulagiri and Churen peaks from the pass and the Dhorpatan grasslands.</p><p>Winter is walkable at the lower elevations but snow closes the Jaljala pass and the Dhorpatan valley empties, so most groups stop from December to February. The monsoon brings leeches, slippery trails and landslide risk on the approach roads, and the mountain views disappear behind cloud for weeks, so June to September is not recommended.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek by Himalayan standards — the high point is 3,414 m and there is no glacier, snow or technical ground — but it is long and completely unsupported by infrastructure. There are no lodges: the group camps or stays in village households, carries its own food, and walks trails that are village paths rather than trekking routes.</p><p>You should be able to walk six to seven hours a day for two weeks with repeated climbs and descents. Six to eight weeks of hill fitness preparation is appropriate. What this trek asks for more than fitness is openness: you will be a curiosity in most of the villages you pass through, and the value of the trip lies in the conversations your guide can open up.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,000 m</strong> is required, comfortably above the 3,414 m Jaljala pass. Most standard policies with a trekking extension clear that bar, but check the wording — some exclude trekking entirely without an activity pack.</p><p>The policy should include <strong>emergency evacuation and medical treatment</strong>. The region has district hospitals at Musikot and Libang but nothing on the trail itself, and the roads are slow, so an evacuation from the middle of the route would be a helicopter. Operators fly against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a mid-altitude camping trek and the list is moderate. Bring waterproof trekking boots, three base layers, a fleece, an insulated jacket, a waterproof and windproof shell, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A <strong>sleeping bag rated to -10°C</strong> and an insulated mat cover the camps at Dhorpatan and on the pass.</p><p>Also pack a 30-40 litre daypack, trekking poles, a headlamp with spare batteries, sunscreen and lip balm, sunglasses, a reusable bottle with purification, a personal first aid kit with blister care, insect repellent and leech socks for the forest, wet wipes and hand sanitiser, a quick-dry towel and a power bank. Charging is available in a few villages and not at all in between.</p>",
      },
      {
        heading: "Camping, Homestays, Food & Drinking Water",
        content:
          "<p>There are no trekking lodges on this route. Nights are a mix of <strong>tents</strong> pitched by the crew and rooms in village households, depending on what each settlement can offer. Facilities are basic throughout: shared outside toilets, washing from a bucket, and no showers for the duration of the walking.</p><p>A cook and kitchen crew travel with the group, cooking three hot meals a day from supplies carried from the roadhead and topped up in the larger villages. Expect <em>dal bhat</em>, <em>dhido</em>, seasonal vegetables, eggs and plenty of tea. Where you stay with a household you eat what the family eats, which is generally the best food of the trip. Water comes from spring taps and streams, boiled and treated by the crew.</p>",
      },
    ],
    faqs: [
      { question: "Is it safe to trek in the former insurgency districts?", answer: "Yes. The conflict ended with the peace agreement in 2006 and Rukum and Rolpa have been peaceful for many years. The trek is safe in the ordinary sense; the history is what makes it interesting rather than what makes it risky. Your guide will explain what happened where." },
      { question: "What will we actually see of the insurgency history?", answer: "Memorials and martyrs' monuments in most villages, the party offices and murals at Thabang, and above all the accounts of people who lived through it. The physical traces are modest; the conversations are the substance, and they need a guide who can translate and who is trusted locally." },
      { question: "Do I need a special permit?", answer: "The Dhorpatan Hunting Reserve entry permit for the section that crosses the reserve, plus the standard trekking registration — both included. Rukum and Rolpa are not restricted areas and there is no minimum group size, though a licensed guide is required." },
      { question: "What is Thabang like?", answer: "A large Kham Magar village on a shelf in Rolpa, historically the political centre of the Maoist movement and known for its independence long before that. It is a working farming village with a strong sense of itself, and it is the single most interesting stop on the route." },
      { question: "Who are the Kham Magar?", answer: "A Magar sub-group of the Rukum, Rolpa and Baglung hills, with their own language distinct from Nepali and a distinctive village architecture and shamanic tradition alongside Hinduism. Their communities make up much of the route and their history is closely tied to the insurgency." },
      { question: "How remote is this trek?", answer: "Very, in the sense that matters: no lodges, no other trekkers, no trekking economy at all. It is not remote in the mountaineering sense — the altitudes are modest and roads are a day or two away in most places — but you will very likely be the only foreign party on the route." },
      { question: "Is there mobile signal?", answer: "There is NTC coverage in the larger villages including Dhorpatan and Thabang, with gaps of a day or two between them. It is one of the better-connected remote treks we run, though not somewhere to rely on data." },
      { question: "How do we get out at the end?", answer: "The route finishes at Sulichaur in Rolpa, from where a jeep runs down to the Terai and Nepalgunj for the flight back to Kathmandu. It is a long road day, and the itinerary allows for it rather than trying to combine it with the flight." },
      { question: "Can this be combined with another trek?", answer: "Yes. Dhorpatan sits on the route, so the Churen Himal base camp trek to the north can be added, as can the Dhaulagiri foothills. Both add roughly a week and need to be arranged at the booking stage." },
      { question: "Where can I withdraw cash?", answer: "There are ATMs in Pokhara and Nepalgunj and unreliably in the district towns. Draw everything you need before starting, in small denominations, for anything you buy in the villages and for tips at the end." },
    ],
    inclusions: {
      flights: ["Nepalgunj to Kathmandu flight as per the itinerary, including airport transfers."],
      transport: [
        "Private transportation from Kathmandu to Pokhara as per the itinerary.",
        "Private jeep transportation from Pokhara to Darbang and from Sulichaur to Nepalgunj.",
      ],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Pokhara and Nepalgunj with breakfast.",
      ],
      permits: "Dhorpatan Hunting Reserve entry permit and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew, and village homestay arrangements along the route.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu, Pokhara, and Nepalgunj." },
    porterDays: 11,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 15-day trek from the Myagdi valley across the Jaljala pass and Dhorpatan into Rukum and Rolpa, through the villages at the centre of Nepal's Maoist insurgency.",
    inExDescription:
      "Airport transfers, road transport, the Nepalgunj flight, Kathmandu, Pokhara and Nepalgunj hotel nights, camping equipment with a cook crew, village homestays, all trekking meals, the hunting reserve permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Guerrilla Trek – 15 Days through Rukum and Rolpa",
      description:
        "A 15-day trek across the Jaljala pass and Dhorpatan into Rukum and Rolpa, through Thabang and the villages at the heart of Nepal's Maoist insurgency.",
      keywords:
        "Guerrilla Trek, Guerrilla Trail Nepal, Thabang, Rolpa trekking, Rukum trek, Dhorpatan Hunting Reserve, Kham Magar, remote trekking Nepal",
      tags: "Guerrilla Trek, Rukum, Rolpa, Remote Region, Cultural Trek, Camping Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the fifteen-day plan, the mix of camping and village homestays, and some background on the districts you will be walking through — the insurgency, the peace agreement, and how Rukum and Rolpa have changed since.",
        "We check your kit, though the list for a mid-altitude trek is modest. Anything missing can be bought or hired in Thamel. The rest of the day is yours. Overnight in Kathmandu.",
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
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day with a lunch stop at a riverside restaurant.",
        "Pokhara arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurna massif standing behind it.",
        "The crew makes the final load sort here, and this is the last night with reliable hot water for two weeks. Overnight in Pokhara.",
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
        "An early start west through Beni, at the confluence of the Kali Gandaki and the Myagdi Khola, and up a rough hill road to the roadhead at <strong>Darbang (1,110 m)</strong>. Four to five hours in the vehicle.",
        "The walking starts here. The trail crosses the Myagdi Khola and climbs gently through terraced fields of millet and maize, past Magar villages with slate roofs.",
        "This is working farmland rather than trekking country, and the traffic on the path is people going about their day rather than groups with daypacks.",
        "<strong>Dharapani (1,560 m)</strong> is strung along the hillside above the river. Around 3 hours of walking. Overnight camping at Dharapani.",
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
        "A steady day through the middle hills with more up and down than the map suggests.",
        "The trail contours above the Myagdi Khola through Sibang and Phalai Gaon, dropping to cross side streams on suspension bridges and climbing back onto the shoulder each time.",
        "The villages here are Magar. The fields are worked by hand, water mills grind the millet, and the pace of the day is set by the animals and the weather.",
        "<strong>Muri (1,850 m)</strong> is a substantial village of stone houses on a shelf, with a school and a couple of shops. From the fields above it the Dhaulagiri outliers come into view.",
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
        "The trail turns away from the river and climbs south-west through farmland and into forest, on a route that has connected the Myagdi and Dhorpatan valleys for a very long time. Traders, herders and porters use it; trekkers do not.",
        "The forest is oak with rhododendron above, and in April and May the flowering runs for hours of walking.",
        "<strong>Lumsum (2,240 m)</strong> is a small settlement on the hillside with room for the camp and a view back east over the Myagdi valley.",
        "Around 5–6 hours. Overnight camping at Lumsum.",
      ),
    },
    {
      title: "Cross the Jaljala Pass (3,414 m) and Trek to Dhorpatan (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Dhorpatan",
      placeDescription: "A wide grassland valley and settlement inside Nepal's only hunting reserve.",
      lng: 83.0673,
      lat: 28.4903,
      html: p(
        "The high point of the trek, and the doorway into the mid-west.",
        "The climb from Lumsum is long and steady through rhododendron and fir forest, coming out above the treeline on open grass. The <strong>Jaljala pass (3,414 m)</strong> is a broad grassy saddle marked with cairns and prayer flags.",
        "The view is the reward: <strong>Dhaulagiri (8,167 m)</strong>, <strong>Churen Himal (7,371 m)</strong> and <strong>Gurja Himal (7,193 m)</strong> along the northern skyline, with the Dhorpatan grasslands opening west below.",
        "The descent is gentle onto pasture and then into the valley floor. <strong>Dhorpatan (2,900 m)</strong> is a scattered settlement with a Tibetan refugee community established in the 1960s, a few shops, and the headquarters of the hunting reserve.",
        "Around 8 hours. Overnight camping at Dhorpatan.",
      ),
    },
    {
      title: "Trek from Dhorpatan (2,900 m) to Pelma (2,000 m)",
      elevation: "2,000 m",
      accommodation: "Pelma",
      placeDescription: "A Kham Magar village in the upper Pelma valley of Rukum.",
      lng: 82.9453,
      lat: 28.6575,
      html: p(
        "West out of the reserve and into Rukum, on trails that see no trekking traffic at all.",
        "The route leaves the Dhorpatan grasslands and climbs over a shoulder before descending north-west through pine and rhododendron into the Pelma valley. It is a long day with a good deal of descent.",
        "This is where the trek changes character. Behind you is the reserve and the Dhaulagiri skyline; ahead are the hill districts of the mid-west, which almost no visitor of any kind reaches.",
        "<strong>Pelma (2,000 m)</strong> is a <strong>Kham Magar</strong> village of stone and slate houses on the valley side. The Kham Magar have their own language, distinct from Nepali, and a strong tradition of their own.",
        "Around 7 hours. Overnight camping at Pelma.",
      ),
    },
    {
      title: "Trek from Pelma (2,000 m) to Maikot (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Maikot",
      placeDescription: "A Kham Magar village in Rukum with a long history of political independence.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line between Pelma and Thabang.
      lng: 82.8394,
      lat: 28.5904,
      html: p(
        "A day of ridge and valley walking between two Kham Magar villages.",
        "The trail climbs out of the Pelma valley, crosses a forested ridge and descends into the next drainage. The country here is steep and heavily farmed on every workable shelf, with buckwheat and potato at this altitude.",
        "<strong>Maikot (2,100 m)</strong> is a large village with a reputation in the region for independence that goes back well before the insurgency. It was one of the places where the movement took hold early, and your guide can explain why the geography and the history fit together as they do.",
        "Practically, this is a village where the group is a genuine novelty. Expect an audience, and expect tea.",
        "Around 6 hours. Overnight in a village homestay at Maikot.",
      ),
    },
    {
      title: "Trek from Maikot (2,100 m) to Thabang (2,200 m)",
      elevation: "2,200 m",
      accommodation: "Thabang",
      placeDescription: "The Kham Magar village in Rolpa that was the political centre of the Maoist insurgency.",
      lng: 82.7103,
      lat: 28.4993,
      html: p(
        "Into Rolpa and to the village at the centre of the whole story.",
        "The trail crosses from Rukum into Rolpa over a forested ridge, descending through Kham Magar settlements and terraced fields. It is a moderate day with a long climb in the middle.",
        "<strong>Thabang (2,200 m)</strong> sits on a broad shelf: a large village of slate-roofed houses, red flags, party offices and martyrs' memorials. It was the political heart of the <strong>Maoist insurgency</strong> from 1996 to 2006 and, before that, a centre of communist organising going back decades.",
        "It is not a museum. It is a working farming village that happens to have been central to the most significant political event in modern Nepali history, and people there talk about it directly.",
        "Around 6 hours. Overnight in a village homestay at Thabang.",
      ),
    },
    {
      title: "Exploration Day at Thabang (2,200 m)",
      elevation: "2,200 m",
      accommodation: "Thabang",
      placeDescription: "The Kham Magar village in Rolpa that was the political centre of the Maoist insurgency.",
      lng: 82.7103,
      lat: 28.4993,
      html: p(
        "A full day in the village, and the reason the trek is worth two weeks.",
        "The morning goes on Thabang itself: the martyrs' memorial, the party office, the school, and the houses of families who lost members on both sides of the conflict. Your guide arranges the conversations, and they are what people remember about this trip.",
        "There is also the ordinary business of the place to see — the fields, the mills, the weekly rhythm of a Kham Magar village — and a short walk up to the ridge above the settlement gives the layout of the valley and, on a clear day, the peaks to the north.",
        "If you are here at the right time of year the village has its own festivals and dances, distinct from the Hindu calendar of the lowlands.",
        "It is worth reading a little about the conflict before you come; the day is much richer if you arrive with questions. Overnight in a village homestay at Thabang.",
      ),
    },
    {
      title: "Trek from Thabang (2,200 m) to Jaljala (2,800 m)",
      elevation: "2,800 m",
      accommodation: "Jaljala",
      placeDescription: "A high pasture and settlement above the Rolpa valleys, distinct from the Jaljala pass to the east.",
      lng: 82.7256,
      lat: 28.4413,
      html: p(
        "South out of Thabang and up onto the Rolpa pastures.",
        "The trail climbs steadily through forest and out onto open grazing ground. This is a different landscape from the Rukum valleys: broader, less steep, with grass rather than terraces on the upper slopes.",
        "The <strong>Jaljala</strong> pasture here — a common Nepali place name, and not the same as the pass crossed on day six — is used through the summer by herders from the villages below, and there are shelters and stock pens on the ridge.",
        "On a clear afternoon the northern view opens back to Dhaulagiri and Churen Himal, a useful last look at the mountains before the trek drops for good.",
        "Around 5 hours. Overnight camping at Jaljala.",
      ),
    },
    {
      title: "Trek from Jaljala (2,800 m) to Sulichaur (1,000 m)",
      elevation: "1,000 m",
      accommodation: "Sulichaur",
      placeDescription: "A bazaar town in the Rolpa valley and the roadhead at the end of the trek.",
      lng: 82.7298,
      lat: 28.246,
      html: p(
        "The last walking day, a long descent off the pastures to the valley floor.",
        "The trail drops through forest and then farmland, losing 1,800 m over the course of the day. It is hard on the knees and poles are worth having out from the start.",
        "The villages get larger and closer together as the altitude falls, the crops change from buckwheat to maize and then rice, and the first vehicles appear on the tracks.",
        "<strong>Sulichaur (1,000 m)</strong> is a bazaar town on the valley floor with shops, a bus park and mobile signal — the end of the walking and, after two weeks, a considerable jolt.",
        "This is where the porters and cook crew finish and tips are given. Around 7 hours. Overnight at Sulichaur.",
      ),
    },
    {
      title: "Drive from Sulichaur (1,000 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot lowland city on the Terai plain with the nearest airport to the mid-western hills.",
      ...NEPALGUNJ,
      html: p(
        "A long day on the road out of the hills to the Terai.",
        "The jeep follows the Rolpa valley south and then west through Dang, dropping steadily out of the middle hills into the plains. The road is rough for the first hours and improves as it goes.",
        "It is a good day for watching the country change: hill farming to Terai agriculture, slate roofs to thatch and concrete, and the temperature climbing steadily the whole way down.",
        "<strong>Nepalgunj (150 m)</strong> is a working border city near India — hot, flat and busy. Around 7–8 hours in total.",
        "The evening is free and the bazaar is worth an hour. Overnight in Nepalgunj.",
      ),
    },
    {
      title: "Fly from Nepalgunj (150 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An hour in the air back to the capital, east along the line of the Himalaya.",
        "On a clear day the whole range is out of the left-hand windows — the Dhaulagiri and Churen peaks you walked below, then Annapurna, Manaslu and Ganesh in turn — which puts the last two weeks in a useful perspective.",
        "You arrive in <strong>Kathmandu (1,400 m)</strong> around midday and transfer to your hotel, with the rest of the day free.",
        "A hot shower, a large lunch and a walk through Thamel are the usual order of business. This is also the evening for a final dinner with your guide. Overnight in Kathmandu.",
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
        "Rukum and Rolpa are among the least visited districts in Nepal, and very few outsiders have walked through Thabang. If this kind of trekking — people and recent history rather than altitude — is what you are after, the Ruby Valley and Mundum routes have a similar character closer to Kathmandu. Safe travels.",
      ),
    },
  ],
};
