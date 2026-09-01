import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const PERMITS =
  "Langtang National Park entry permit and required trekking permits.";

/**
 * Langtang to Panch Pokhari over Tilman's Pass, camping from Langshisa onward.
 *
 * Waypoints marked "approximate" are herders' camps and lake basins with no
 * OpenStreetMap node; they are placed on the route line and should be checked
 * against the crew's own camp positions before the map file is uploaded.
 */
export const tilmanPassTrek: NewTrek = {
  price: 2050,
  difficulty: "difficult",
  maxAltitude: 5350,
  center: [85.6, 28.15],
  zoom: 9.5,
  content: {
    slug: "tilman-pass-trek",
    title: "Tilman Pass Trek",
    overview:
      "<p>The <strong>Tilman Pass Trek</strong> crosses from the head of the Langtang valley to the lake basin at Panch Pokhari over a 5,350 m glaciated saddle named for <strong>H. W. Tilman</strong>, the British mountaineer who explored the valley in 1949 and gave it its reputation. The approach is the classic Langtang walk — the gorge from Syabrubesi, the yak pastures at Kyanjin, and an acclimatisation day for Tserko Ri — before the trail runs out beyond <strong>Langshisa Kharka</strong>.</p><p>From there the route is moraine, glacier and camp: no lodges, no trail markers, and a crossing that involves fixed rope on the steep ground either side of the pass. The descent leads south through empty country to the sacred lakes at <strong>Panch Pokhari (4,100 m)</strong>, then down through Tamang and Sherpa villages to the road. It is one of the least travelled crossings in Nepal and one of the most committing routes that does not need a climbing permit.</p>",
    highlights: [
      ["Cross Tilman's Pass (5,350 m)", "Traverse the glaciated saddle at the head of Langtang, named for the mountaineer who explored the valley in 1949."],
      ["The Langtang Valley", "Walk in through the gorge to Kyanjin Gompa beneath Langtang Lirung (7,227 m), with a full acclimatisation day."],
      ["Langshisa Kharka and the Glacier", "Camp at the end of the trail where the valley turns to moraine and ice."],
      ["The Sacred Lakes of Panch Pokhari", "Descend to five glacial lakes at 4,100 m, a pilgrimage site visited by thousands each August."],
      ["A Genuinely Untravelled Crossing", "Spend the middle of the trek in country with no lodges, no signposts and almost certainly no other party."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to early November</strong> are the only realistic windows. Spring gives longer days and more settled snow on the pass, with rhododendron through the Langtang gorge. Autumn is drier and clearer, with the most reliable conditions on the glacier and the best chance of a straightforward crossing.</p><p>Outside those windows the pass is not viable. Winter snow makes the glaciated section and the exposed camps untenable, and there is no shelter to retreat to on either side. The monsoon brings whiteout, unstable snow, and a Langtang approach prone to landslide, so June to September is out. Even in season, groups should expect to sit out a day at Langshisa or the high camp waiting for weather.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a difficult trek and the middle of it is mountaineering-adjacent. Beyond Langshisa Kharka there is no trail: the route works up moraine and glacier to a high camp, crosses a 5,350 m pass with <strong>crampons and fixed rope</strong> on the steep sections, and descends unmarked country to Panch Pokhari. The group camps for six nights with a cook crew and carries everything it needs.</p><p>You need previous trekking experience above 5,000 m and comfort on steep, loose ground. Basic crampon and rope skills help; your guide runs a session at Kyanjin, but this is not the place to learn from nothing. Expect eight to ten hour days on the crossing section and be prepared to be turned round if conditions do not allow the pass — that decision is the guide's, and it is not negotiable.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking and glacier travel to 6,000 m</strong> is mandatory. A standard policy capped at 4,000 m covers none of the crossing, and many exclude roped glacier travel and fixed-rope use outright, which is exactly what the pass requires. Check the activity exclusions in writing rather than assuming.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Between Kyanjin and Panch Pokhari there is no road, lodge, or medical post, and evacuation means a helicopter working at altitude and dispatched against a guarantee of payment. Send us your policy number and the insurer's 24-hour emergency contact before departure; we do not run the pass section without it.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Camping above 4,500 m sets the list. Bring <strong>mountaineering-grade boots that take crampons</strong>, gaiters, a four-season sleeping bag rated to <strong>-20°C</strong>, an insulated mat, a heavy down jacket, a waterproof and windproof shell jacket and trousers, four base layers, a fleece, insulated and liner gloves, a warm hat and a sun hat.</p><p>Also pack a 40-litre pack, trekking poles, category 4 glacier glasses, a headlamp with spare batteries, factor 50 sunscreen and lip balm, an insulated bottle plus purification, a full personal first aid kit, wet wipes and hand sanitiser, a quick-dry towel, and a large power bank — there is no charging between Kyanjin and the road at the end. <strong>Crampons, harness, ice axe, helmet and rope are supplied by us.</strong></p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The Langtang approach is teahouse walking, and the lodges at Lama Hotel, Mundu and Kyanjin Gompa are comfortable and well run — the valley rebuilt substantially after the 2015 earthquake. From <strong>Langshisa Kharka</strong> onwards you are in two-person tents with a mess tent and toilet tent, at camps between 4,000 m and 4,900 m. Nights at the high camp reach -15°C or colder.</p><p>A cook and kitchen crew travel with the group for the camping section, cooking three hot meals a day from carried supplies — rice, lentils, pasta, potatoes, eggs, and soup at every camp. Water is boiled or melted and treated by the crew; drink four litres a day above 4,000 m. There are no shops between Kyanjin and the villages below Panch Pokhari, roughly a week.</p>",
      },
    ],
    faqs: [
      { question: "Who was Tilman and why is the pass named after him?", answer: "H. W. Tilman was a British mountaineer and traveller who explored the Langtang and Ganesh Himal in 1949 on one of the first Western expeditions permitted into Nepal. He crossed the head of the valley towards Panch Pokhari, and the saddle has carried his name since." },
      { question: "Do I need technical climbing skills?", answer: "You need to be comfortable in crampons, on a rope and on a fixed line. The pass is not a climb, but the ground either side is steep enough that a slip matters, and the glacier is crevassed. Your guide runs a training session at Kyanjin, and previous experience above 5,000 m is required." },
      { question: "What happens if the pass is not crossable?", answer: "The group turns round. Your guide assesses conditions at Langshisa and again at the high camp, and if snow, visibility or the group's condition rule it out, we retrace the Langtang valley and walk out to Syabrubesi. That adds days rather than costing the trip, and we plan for the possibility." },
      { question: "How many nights are in tents?", answer: "Six, from Langshisa Kharka through to the villages below Panch Pokhari. The rest of the trek is teahouses in Langtang and lodges or homestays on the way out. The camps are supported by a full cook and porter crew rather than carried by you." },
      { question: "Why is Panch Pokhari a pilgrimage site?", answer: "The five lakes are sacred to Hindus as a dwelling place of Shiva, and thousands of pilgrims walk up for the Janai Purnima festival in August. Outside that week the basin is empty. There are small shrines and shelters at the lakes, built for the festival rather than for trekkers." },
      { question: "How does this compare with the Ganja La?", answer: "The Ganja La crossing from Kyanjin to Helambu is shorter, lower at 5,130 m, and better known, and it has an established route. Tilman's Pass is higher, longer, more glaciated and far less travelled. If you have not crossed a technical pass before, the Ganja La is the sensible first one." },
      { question: "Is there mobile signal on the route?", answer: "There is coverage through the Langtang valley as far as Kyanjin Gompa, then nothing for roughly a week until the villages below Panch Pokhari. Tell people at home before you leave Kyanjin that you will be out of contact." },
      { question: "How cold does it get at the high camp?", answer: "Overnight temperatures at 4,900 m routinely reach -15°C and can be colder with wind. The camp is exposed and there is no shelter. This is why a -20°C bag and an insulated mat are required, and why boots, water and batteries go into the sleeping bag at night." },
      { question: "What permits are needed?", answer: "The Langtang National Park entry permit and the standard trekking registration, both included in your package. Tilman's Pass is not in a restricted area and needs no climbing permit, but the route requires a licensed guide and a supported crew in practice." },
      { question: "Can we visit the Langtang memorial?", answer: "Yes. The 2015 earthquake destroyed the old Langtang village entirely in an ice and rock avalanche, killing several hundred people. The memorial and the rebuilt village are on the trail between Ghoda Tabela and Mundu, and your guide will give the site the time and the explanation it deserves." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Syabrubesi as per the itinerary.",
        "Private jeep transportation from the Panch Pokhari roadhead back to Kathmandu.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
        "Crampons, harness, ice axe, helmet, and fixed rope for the Tilman Pass crossing.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 13,
    fixedDepartureDay: "tuesday",
    itineraryDescription:
      "A 16-day crossing from the head of the Langtang valley to the sacred lakes of Panch Pokhari over Tilman's Pass (5,350 m), with six nights of supported camping.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, full camping equipment with a cook crew, technical pass equipment, teahouse lodging in Langtang, all trekking meals, the national park permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Tilman Pass Trek – 16 Days Langtang to Panch Pokhari",
      description:
        "A 16-day camping trek over Tilman's Pass (5,350 m) from the head of the Langtang valley to the sacred lakes at Panch Pokhari.",
      keywords:
        "Tilman Pass Trek, Tilman's Pass, Langtang to Panch Pokhari, Langshisa Kharka, glacier pass Nepal, remote trekking Nepal, camping trek",
      tags: "Tilman Pass Trek, Langtang, Remote Region, High Pass Trek, Camping Trek, Nepal Trekking",
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
        "Your guide joins you for a briefing that covers rather more than a normal trek: the sixteen-day plan, the six nights of camping, the technical equipment we supply, and the points on the route where the group can be turned round. Boots are fitted to crampons here rather than at 5,000 m, and we go through your personal kit item by item.",
        "The rest of the day is free, and anything missing can be bought or hired in Thamel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Syabrubesi (1,460 m)",
      elevation: "1,460 m",
      accommodation: "Syabrubesi",
      placeDescription: "The roadhead town on the Bhote Koshi at the entrance to the Langtang valley.",
      lng: 85.3378,
      lat: 28.1628,
      html: p(
        "A long, winding drive north to the Tibetan border country. The road climbs out of the Kathmandu valley at Kakani and follows a ridge with the Ganesh Himal ahead, then drops to Trishuli Bazaar and grinds up the Bhote Koshi.",
        "The last three hours are slow — a narrow road cut into the valley side, rebuilt in sections after the 2015 earthquake, with the river a long way below. The scenery is superb and the driving is not for the nervous.",
        "<strong>Syabrubesi (1,460 m)</strong> is the roadhead at the confluence of the Bhote Koshi and the Langtang Khola, a single street of lodges and shops with a hot spring beside the river.",
        "Around 7–8 hours including stops. The crew sorts loads this evening. Overnight at Syabrubesi.",
      ),
    },
    {
      title: "Trek from Syabrubesi (1,460 m) to Lama Hotel (2,470 m)",
      elevation: "2,470 m",
      accommodation: "Lama Hotel",
      placeDescription: "A cluster of lodges in the forested Langtang gorge above the river.",
      lng: 85.4303,
      lat: 28.1614,
      html: p(
        "The first walking day, climbing into the Langtang gorge on a good trail.",
        "The route crosses the Bhote Koshi and follows the <strong>Langtang Khola</strong> east, climbing steadily through oak and rhododendron forest with the river white below. There are two or three simple tea stops along the way, at Bamboo and Rimche, and the forest is dense enough that views are rare — this is a walk in the trees.",
        "Langur monkeys are common through this section and red panda live in the upper forest, though seeing one is a matter of real luck.",
        "<strong>Lama Hotel (2,470 m)</strong> is a line of lodges in a clearing where the valley bends. Around 6 hours. Overnight at Lama Hotel.",
      ),
    },
    {
      title: "Trek from Lama Hotel (2,470 m) to Mundu (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Mundu",
      placeDescription: "A rebuilt Tamang settlement in the upper Langtang valley beneath Langtang Lirung.",
      lng: 85.5206,
      lat: 28.2157,
      html: p(
        "The day the valley opens out and the mountains arrive.",
        "The trail climbs through the last of the forest to <strong>Ghoda Tabela</strong> — 'horse stable' — where the trees stop and the valley widens into pasture. <strong>Langtang Lirung (7,227 m)</strong> comes into view above, and the walking becomes level and easy on the valley floor.",
        "Beyond Ghoda Tabela the trail passes the site of the old <strong>Langtang village</strong>, destroyed in April 2015 when the earthquake brought an ice and rock avalanche off the mountain onto the settlement. The memorial and the rebuilt village stand on the same ground, and it is a place to walk through slowly.",
        "<strong>Mundu (3,540 m)</strong> is a rebuilt settlement of stone lodges a little beyond, with mani walls and yak pasture around it. Around 6 hours. Overnight at Mundu.",
      ),
    },
    {
      title: "Trek from Mundu (3,540 m) to Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The last village in the Langtang valley, with a monastery, a cheese factory and a view of Langtang Lirung.",
      lng: 85.5666,
      lat: 28.2124,
      html: p(
        "A short, level morning to the last village in the valley.",
        "The trail runs east across the flat valley floor past mani walls, chortens and grazing yaks, gaining height so gently that you barely notice. <strong>Langtang Lirung</strong> is directly above on the left the whole way.",
        "<strong>Kyanjin Gompa (3,870 m)</strong> is a cluster of lodges around an old monastery, with a small cheese factory established with Swiss help in the 1950s — the yak cheese is genuinely good and worth buying. The village sits in a bowl with Langtang Lirung, Kimshung and Langshisa Ri around it.",
        "You arrive by late morning, which leaves the afternoon for an easy walk up the moraine or simply for sitting outside. Around 3 hours. Overnight at Kyanjin Gompa.",
      ),
    },
    {
      title: "Acclimatization and Training Day at Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The last village in the Langtang valley, with a monastery, a cheese factory and a view of Langtang Lirung.",
      lng: 85.5666,
      lat: 28.2124,
      html: p(
        "The last day with a roof, spent gaining height and going over the technical drills.",
        "The morning climb is <strong>Tserko Ri (4,984 m)</strong> or the shorter <strong>Kyanjin Ri (4,550 m)</strong>, depending on how the group is moving. Tserko Ri is a four to five hour round trip and a serious pull, and from the top the whole Langtang Himal is laid out with Shishapangma across the border in Tibet.",
        "The afternoon is training on the slope behind the village: crampons, ice axe, moving as a roped team, and ascending and descending a fixed line. Even for experienced trekkers this sets the drills the group will use on the pass.",
        "Your guide makes the first honest assessment tonight of who is ready for the crossing, and repacks the loads for six days without resupply. Overnight at Kyanjin Gompa.",
      ),
    },
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Langshisa Kharka (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Langshisa Kharka",
      placeDescription: "A yak pasture at the end of the Langtang trail, below the Langshisa and Lirung glaciers.",
      lng: 85.6697,
      lat: 28.2131,
      html: p(
        "An easy day to the end of the trail, and the first camp.",
        "The route follows the valley floor east past the airstrip and the old Jatang settlement, with the walls closing in and the glaciers appearing at the head of the valley. The walking is level and the ground is grass and gravel, so the day is short in effort even at this height.",
        "<strong>Langshisa Kharka (4,080 m)</strong> is a broad yak pasture below the junction of the <strong>Langshisa</strong> and <strong>Langtang</strong> glaciers, with <strong>Langshisa Ri (6,427 m)</strong> and <strong>Dorje Lakpa (6,966 m)</strong> around it. Herders bring stock here in summer; otherwise it is empty.",
        "The tents go up for the first time, and the crew settles into the routine that will run for the next week. Around 4 hours. Overnight camping at Langshisa Kharka.",
      ),
    },
    {
      title: "Trek from Langshisa Kharka (4,080 m) to Tilman Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Tilman Base Camp",
      placeDescription: "A moraine camp below the north side of Tilman's Pass, at the head of the Langshisa Glacier.",
      // Approximate: this camp is not mapped in OpenStreetMap. The waypoint is
      // placed on the route line between Langshisa Kharka and the pass.
      lng: 85.6905,
      lat: 28.1857,
      html: p(
        "The day the trail stops and the route begins.",
        "From the kharka the group climbs onto the lateral moraine of the <strong>Langshisa Glacier</strong> and works south towards the head of the valley. There is no path: your guide picks a line through boulders, old moraine and ice, and the group moves together and slowly.",
        "Progress is measured in hours rather than kilometres. Five hours of walking covers ground you would cross in two at sea level, and the altitude gain of more than 800 m is felt with every step.",
        "<strong>Tilman Base Camp (4,900 m)</strong> is a flattened patch of moraine below the pass, exposed and cold, with meltwater the only source of water. The pass itself is visible above as a notch in the ridge.",
        "Around 6 hours. An early meal, kit sorted, and an early night. Overnight camping at Tilman Base Camp.",
      ),
    },
    {
      title: "Cross Tilman's Pass (5,350 m) and Descend to Panch Pokhari Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Panch Pokhari Base Camp",
      placeDescription: "The first camp south of Tilman's Pass, on moraine above the Panch Pokhari basin.",
      // Approximate: unmapped camp on the southern descent from the pass.
      lng: 85.7205,
      lat: 28.1349,
      html: p(
        "The crossing, and the hardest day of the trek by a wide margin.",
        "We leave camp before dawn, roped and in crampons, and climb the glacier and the snow slope to the col. The final section below the pass is steep enough to warrant a <strong>fixed line</strong>, and the group moves one at a time.",
        "<strong>Tilman's Pass (5,350 m)</strong> is a narrow gap in the ridge with <strong>Dorje Lakpa</strong> and the Jugal Himal on either side. North, the Langtang glaciers run back the way you came; south, empty ridges fall away towards the Panch Pokhari basin with nothing man-made in the view at all.",
        "The descent is the demanding half: steep snow, then loose moraine, then boulder fields, losing 750 m on unstable ground. Poles and patience.",
        "Ten to twelve hours. Overnight camping below the pass.",
      ),
    },
    {
      title: "Trek from Panch Pokhari Base Camp (4,600 m) to Panch Pokhari (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Panch Pokhari",
      placeDescription: "Five sacred glacial lakes in a high basin, a Hindu pilgrimage site visited each August.",
      // Approximate: the lake basin has no OpenStreetMap node; the waypoint uses
      // the commonly published position for the lakes.
      lng: 85.7758,
      lat: 28.0644,
      html: p(
        "A shorter day through empty country to the lakes.",
        "The route descends the moraine and crosses a series of ridges and shallow basins, with no trail and no settlement anywhere in sight. The landscape is entirely different from the Langtang side — broad, rolling and open rather than closed in by walls of rock and ice.",
        "<strong>Panch Pokhari (4,100 m)</strong> is five glacial lakes in a high basin, sacred to Hindus as a dwelling place of Shiva. There are small shrines and stone shelters at the water's edge, built for the <strong>Janai Purnima</strong> pilgrimage in August when thousands of people walk up from the valleys below.",
        "For the rest of the year the basin is empty, and camping beside the lakes with the Jugal Himal on the skyline is the quiet counterpart to yesterday's crossing.",
        "Around 5 hours. Overnight camping at Panch Pokhari.",
      ),
    },
    {
      title: "Trek from Panch Pokhari (4,100 m) to Nasempati (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Nasempati",
      placeDescription: "A ridge camp of pilgrim shelters below the Panch Pokhari lakes.",
      // Approximate: pilgrim shelter site with no OpenStreetMap node.
      lng: 85.7692,
      lat: 28.0421,
      html: p(
        "The start of the long descent south, following the pilgrim route rather than a wilderness line.",
        "A trail appears again below the lakes — worn by the August pilgrimage rather than by trekkers — and the walking becomes straightforward. The route follows a broad ridge with views back to the Jugal Himal and, on a clear morning, east towards the Rolwaling peaks.",
        "<strong>Nasempati (3,650 m)</strong> is a set of open stone shelters on the ridge, built to house pilgrims on their way up. Empty outside the festival, it makes a good camp with water nearby.",
        "The air is noticeably thicker after four days above 4,000 m, and appetite tends to come back tonight. Around 4–5 hours. Overnight camping at Nasempati.",
      ),
    },
    {
      title: "Trek from Nasempati (3,650 m) to Kami Kharka (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Kami Kharka",
      placeDescription: "A grazing clearing in the rhododendron forest on the ridge below Panch Pokhari.",
      // Approximate: grazing ground with no OpenStreetMap node.
      lng: 85.7861,
      lat: 28.0166,
      html: p(
        "Down off the ridge and back below the treeline.",
        "The trail loses height steadily along the ridge and enters rhododendron and oak forest, thick and mossy and full of birdsong after a week of rock and ice. In spring the rhododendron here flowers for hours of walking.",
        "<strong>Kami Kharka (2,700 m)</strong> is a grazing clearing used by herders from the villages below, with water and flat ground for the tents. This is the last camping night of the trek.",
        "The temperature at night is a completely different proposition here — above freezing, with the smell of woodsmoke from the herders' fires. Around 5 hours. Overnight camping at Kami Kharka.",
      ),
    },
    {
      title: "Trek from Kami Kharka (2,700 m) to Tempathang (1,800 m)",
      elevation: "1,800 m",
      accommodation: "Tempathang",
      placeDescription: "A Sherpa and Tamang village in the Melamchi valley, the first road-connected settlement.",
      lng: 85.7843,
      lat: 28.0197,
      html: p(
        "The last full walking day, down through farmland into the Melamchi valley.",
        "The forest gives way to terraced fields of millet and maize, with water mills on the streams and buffalo tethered under the eaves. Villages appear every hour or so, and children walking to school become the main traffic on the trail.",
        "<strong>Tempathang (1,800 m)</strong> is a Sherpa and Tamang village and the first place with a road connection, however rough. After a week without seeing anyone outside the group, the ordinary business of a working village is a pleasant shock.",
        "This is where the porters and cook crew finish and where tips are given. Around 5–6 hours. Overnight in a homestay at Tempathang.",
      ),
    },
    {
      title: "Drive from Tempathang (1,800 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A jeep day back to the capital down the Melamchi valley.",
        "The first two hours are on a rough hill road; from Melamchi Bazaar the surface improves and the route joins the Araniko Highway for the run into the Kathmandu valley.",
        "The Melamchi valley is where the capital's water supply comes from, and you pass the tunnel works and pipeline on the way down — a useful piece of context for a city that spent decades short of water.",
        "Around 5–6 hours. You arrive in <strong>Kathmandu (1,400 m)</strong> in the afternoon and transfer to your hotel, with the evening free. Overnight in Kathmandu.",
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
        "Tilman's Pass is one of the least walked crossings in Nepal and you will very likely have had it entirely to yourselves. If you want the same character again, the Tashi Lapcha into the Khumbu and the Sherpani Col in the Makalu region are the two obvious next steps. Safe travels.",
      ),
    },
  ],
};
