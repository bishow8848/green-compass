import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

const PERMITS =
  "Upper Mustang Restricted Area Permit, Nar Phu Restricted Area Permit, and Annapurna Conservation Area Permit.";

/**
 * Upper Mustang to Nar Phu over the Teri La.
 *
 * Waypoints marked "approximate" are camps with no OpenStreetMap node; they sit
 * on the route line between verified points.
 */
export const teriLaTrek: NewTrek = {
  price: 3200,
  difficulty: "difficult",
  maxAltitude: 5595,
  center: [84.0, 28.95],
  zoom: 9,
  content: {
    slug: "teri-la-pass-trek",
    title: "Teri La Pass Trek",
    overview:
      "<p>The <strong>Teri La Pass Trek</strong> is the non-glaciated crossing between Upper Mustang and the Nar Phu valleys, taking the old high route east from <strong>Tange</strong> over a 5,595 m col into the Damodar Himal and down to the Tibetan villages of <strong>Phu</strong> and <strong>Nar</strong>. It links two restricted areas in one walk, and it does it without the roped glacier travel that the Saribung La next door demands.</p><p>The approach is classic Upper Mustang — the canyons above Kagbeni, the red cliffs at Dhakmar, the cave gompas, and a full day inside the walls of <strong>Lo Manthang</strong>. Beyond Yara and Tange the route leaves every other trekking party behind for a week of high desert camps. The descent into the Phu gorge, past the fortress village on its rock spur and out through Nar to the Annapurna Circuit at Koto, is one of the most dramatic finishes in Nepal.</p>",
    highlights: [
      ["Cross the Teri La (5,595 m)", "Take the high non-glaciated route between Upper Mustang and Nar Phu, with the Damodar Himal on all sides."],
      ["Lo Manthang", "Spend a full day in the walled capital of the Kingdom of Lo, with its palace and fifteenth-century monasteries."],
      ["Tange and the Upper Mustang Canyons", "Walk the eastern edge of Mustang through eroded canyon country almost nobody visits."],
      ["Phu and Nar", "Reach two fortified Tibetan villages that were closed to outsiders until 2002."],
      ["Two Restricted Areas, One Route", "Cross from one permit-controlled region to another on foot, finishing on the Annapurna Circuit."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>May to early June</strong> and <strong>September to mid-October</strong> are the two windows. Mustang is in the rain shadow and stays dry through the monsoon, but the Teri La needs settled snow conditions, and that means late spring or early autumn. Summer works for the Mustang half alone but not for the pass.</p><p>From late October the col is too cold and too snowed in for a trekking group, and the Nar Phu villages start to empty for the winter. Deep winter is out entirely. Plan for a weather window on the pass and expect the itinerary to carry spare days for it.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a difficult trek without technical ground. The Mustang half is high desert walking between 3,000 m and 4,000 m; from Tange the route camps for around a week at altitudes up to 5,000 m and crosses a 5,595 m pass on snow and scree. There are no ropes and no crampon work in normal conditions, but the days are long and water is scarce.</p><p>You should have previous trekking experience above 4,500 m and be able to walk seven to nine hours on consecutive days at altitude. Three to four months of preparation with back-to-back long hill days is realistic. The main difference from the neighbouring Saribung route is that this one asks for endurance rather than mountaineering skill.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 6,000 m</strong> is required. The Teri La at 5,595 m is far above the ceiling on standard policies, and cover that stops at 4,000 m applies to almost none of this trek.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Between Tange and Phu there is no road, no lodge and no medical post, and evacuation is a helicopter working at altitude, dispatched only against a guarantee of payment from the insurer. We require your policy number and the insurer's 24-hour emergency line before the restricted area permits are issued.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Mustang is dry, bright and windy, and the high camps are cold. Bring waterproof trekking boots, gaiters, a <strong>four-season sleeping bag rated to -20°C</strong>, an insulated mat, a heavy down jacket, a windproof and waterproof shell jacket and trousers, four base layers, a fleece, insulated and liner gloves, a warm hat, a buff for the dust, and a sun hat.</p><p>Also pack a 35-45 litre pack, trekking poles, category 4 sunglasses, a headlamp with spare batteries, factor 50 sunscreen and lip balm, two litres of bottle capacity plus purification, electrolyte tablets, a personal first aid kit, wet wipes and hand sanitiser, a quick-dry towel and a large power bank. There is no charging between Yara and Phu, about a week.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The Mustang villages have simple lodges as far as <strong>Yara</strong> and <strong>Tange</strong>, and Phu, Nar and Koto have basic lodges at the far end. In between — around six nights — the group is in <strong>tents</strong>, with a mess tent and toilet tent, at camps from 4,000 m to 5,000 m. The camp below the pass reaches -15°C or lower overnight.</p><p>A cook and kitchen crew travel with the group, cooking three hot meals a day from supplies carried from Jomsom and topped up in Lo Manthang. Above Tange there is nothing to buy. Water is the constraint on the plateau: sources are hours apart, the crew fills at every stream, and you should carry two litres and drink four a day in air this dry.</p>",
      },
    ],
    faqs: [
      { question: "How is this different from the Saribung Pass trek?", answer: "Both link Mustang and Nar Phu. The Saribung La is 6,042 m and glaciated, needing crampons, ropes and previous 6,000 m experience. The Teri La at 5,595 m is a snow and scree pass with no technical ground in normal conditions, so it suits strong trekkers who are not mountaineers." },
      { question: "Which permits do I need?", answer: "The Upper Mustang and Nar Phu restricted area permits plus the Annapurna conservation permit, all included. Both restricted permits require a licensed guide and a minimum of two trekkers, and the Upper Mustang permit carries a substantial per-person fee for a fixed ten-day period." },
      { question: "What happens if the Teri La is closed by snow?", answer: "The group retraces through Mustang and exits at Jomsom, which is a good trek in itself but adds days. Your guide assesses conditions at Tange and at the base camp, and we build spare days into the schedule so the decision is never forced by the calendar." },
      { question: "How cold does it get at the high camps?", answer: "Overnight temperatures at the camps above 4,500 m reach -15°C in the main seasons. There is no shelter beyond your tent and no wood for a fire. A -20°C bag and an insulated mat are essential, and water bottles and batteries go inside the sleeping bag." },
      { question: "What are Phu and Nar like?", answer: "Two fortified Tibetan villages that were closed to outsiders until 2002. Phu sits on a rock spur below a ruined fortress at the head of its valley; Nar is a walled village of about eighty houses on a plateau with four chortens at its entrance. Both speak a Tibetan dialect and follow Tibetan Buddhism." },
      { question: "Is there mobile signal or charging?", answer: "There is NTC signal in the Mustang villages as far as Lo Manthang, then nothing until Phu — roughly a week. Charging is available for a fee in the villages and not at all on the plateau, so bring a large power bank and keep it warm at night." },
      { question: "Can we ride horses in Mustang?", answer: "Yes, on the Mustang half. Horses can be hired in most villages for a stage or a day, which is both traditional and a good option if you are tired. Above Tange the ground is unsuitable and the loads move on yaks or porters." },
      { question: "How windy is Mustang really?", answer: "Very. The wind funnels up the Kali Gandaki from mid-morning every day of the year and carries dust with it. Walking days are planned to get the exposed sections done early, and a buff and proper sunglasses are not optional here." },
      { question: "How do we get out at the end?", answer: "A jeep from Koto down the Marsyangdi to Besisahar, which is rough and slow, then a paved highway to Kathmandu the following day. The itinerary allows two days for it rather than trying to do the whole thing in one." },
      { question: "How many staff travel with the group?", answer: "A guide, an assistant guide, a cook and kitchen crew, and porters or pack animals for tents, food and equipment. On a fully camped restricted-area route the support team is larger than the trekking group, which is the main driver of the cost." },
    ],
    inclusions: {
      flights: ["Pokhara to Jomsom flight as per the itinerary, subject to weather."],
      transport: [
        "Private transportation from Kathmandu to Pokhara as per the itinerary.",
        "Private jeep transportation from Koto to Besisahar and onward transport to Kathmandu.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast.", "Accommodation in Pokhara with breakfast."],
      permits: PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Jomsom, a turned-back pass crossing, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 15,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "A 20-day trek from Upper Mustang to Nar Phu over the Teri La (5,595 m), via Lo Manthang, Yara and Tange, finishing on the Annapurna Circuit at Koto.",
    inExDescription:
      "Airport transfers, road transport, the Jomsom flight, Kathmandu and Pokhara hotel nights, full camping equipment with a cook crew, lodge nights in the villages, all trekking meals, both restricted area permits and the conservation permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "May-Jun, Sep-Oct",
    meta: {
      title: "Teri La Pass Trek – 20 Days Mustang to Nar Phu",
      description:
        "A 20-day trek over the Teri La (5,595 m) from Upper Mustang to the Nar Phu valley, via Lo Manthang, Tange and the Damodar Himal.",
      keywords:
        "Teri La Pass Trek, Teri La, Upper Mustang to Nar Phu, Tange village, Lo Manthang, Phu Nar, restricted area trek Nepal",
      tags: "Teri La Pass Trek, Mustang, Nar Phu, Remote Region, High Pass Trek, Camping Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the twenty-day plan, the two restricted area permits and the passport photographs they need, the camping routine on the plateau, and the water and altitude discipline that Mustang demands. We check your kit against the list, with particular attention to your sleeping bag and sun protection.",
        "Our office lodges the Upper Mustang and Nar Phu permits today, which is why the trip starts here rather than in Pokhara. The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A beautiful lakeside city and the gateway to the Annapurna and Mustang regions.",
      ...POKHARA,
      html: p(
        "After breakfast we leave the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river west through gorge country with terraced hillsides above and whitewater below.",
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day, with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on.",
        "Pokhara arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurna massif rising behind it and Machhapuchhre unmistakable from the lakeside.",
        "The crew makes the final load sort here. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly from Pokhara (822 m) to Jomsom (2,720 m) and Trek to Kagbeni (2,810 m)",
      elevation: "2,810 m",
      accommodation: "Kagbeni",
      placeDescription: "A medieval village at the gateway to Upper Mustang on the Kali Gandaki.",
      lng: 83.7843,
      lat: 28.8378,
      html: p(
        "An early flight up the <strong>Kali Gandaki</strong> between Dhaulagiri and Annapurna, twenty minutes through the deepest gorge on earth.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang, and the group organises loads here before walking north up the wide grey riverbed into the wind that funnels up this valley every afternoon.",
        "<strong>Kagbeni (2,810 m)</strong> is a compact medieval village of mud-brick alleys, a red gompa and irrigation channels running under the streets — a green oasis against grey desert cliffs, and the checkpoint where the Upper Mustang restricted area begins.",
        "Around 3 hours of walking. The afternoon is free to wander the alleys and climb to the ruined fort above the village. Overnight at Kagbeni.",
      ),
    },
    {
      title: "Trek from Kagbeni (2,810 m) to Chele (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chele",
      placeDescription: "A small village of whitewashed houses above the Kali Gandaki in Upper Mustang.",
      lng: 83.827,
      lat: 28.9311,
      html: p(
        "The first day inside the restricted area, and the landscape changes immediately.",
        "The trail follows the Kali Gandaki north through <strong>Tangbe</strong> and <strong>Chhusang</strong>, villages of whitewashed houses, buckwheat fields and apple orchards set against cliffs of ochre, grey and red. Above Chhusang the rock is eroded into columns and fins by the wind.",
        "Beyond the village the river disappears into a canyon and the trail crosses to the east bank through a natural rock tunnel, then climbs steeply.",
        "<strong>Chele (3,050 m)</strong> is a small village on the far side, where the route leaves the river for good and begins the series of passes that make up the Mustang trail.",
        "Around 5–6 hours. Overnight at Chele.",
      ),
    },
    {
      title: "Trek from Chele (3,050 m) to Ghami (3,520 m)",
      elevation: "3,520 m",
      accommodation: "Ghami",
      placeDescription: "A large village of flat-roofed houses beside the longest mani wall in Nepal.",
      lng: 83.873,
      lat: 29.0631,
      html: p(
        "A long day over three passes — the classic Mustang rhythm of climb, cross, descend and climb again.",
        "The trail climbs out of Chele to the Taklam La and the Dajori La, with canyon country opening into a plateau of eroded ridges. Every pass is marked with cairns and prayer flags, and each view is bigger than the last.",
        "The village of <strong>Samar</strong> and the cave shrine at <strong>Rangbyung</strong>, built around natural rock formations in a gorge, come before the final climb to the Nyi La.",
        "<strong>Ghami (3,520 m)</strong> is a substantial village of flat-roofed houses among poplars and barley fields, and just beyond it stands the <strong>longest mani wall in Nepal</strong> — several hundred metres of carved stone.",
        "Around 7 hours. Overnight at Ghami.",
      ),
    },
    {
      title: "Trek from Ghami (3,520 m) to Charang (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Charang",
      placeDescription: "A village beneath a red fortress and monastery on the edge of a canyon.",
      lng: 83.9323,
      lat: 29.0926,
      html: p(
        "A shorter day past the most photographed cliffs in Mustang.",
        "The trail crosses the mani wall and climbs past <strong>Dhakmar</strong>, where the cliffs are deep blood red — local tradition holds they were stained when Guru Rinpoche subdued a demoness at the founding of Lo Gekar monastery.",
        "The route crosses the Mui La and drops into the Charang valley, the fields vivid green against the red and grey rock.",
        "<strong>Charang (3,560 m)</strong> sits beneath a five-storey <strong>dzong</strong> and a red monastery on the lip of a canyon. The gompa holds an important collection of thangkas and statues and the caretaker will usually open it in the afternoon.",
        "Around 5 hours. Overnight at Charang.",
      ),
    },
    {
      title: "Trek from Charang (3,560 m) to Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of the former Kingdom of Lo, on the plateau near the Tibetan border.",
      lng: 83.9563,
      lat: 29.1828,
      html: p(
        "The day you reach the walled city.",
        "The trail climbs out of Charang and over the Lo La at around 3,950 m, and from the crest <strong>Lo Manthang</strong> appears below on the plain — a compact walled rectangle of white buildings with the Tibetan border ridge behind it.",
        "The city was the capital of the <strong>Kingdom of Lo</strong>, which kept its own monarchy until 2008. The walls, the four-storey palace and the monasteries inside them date from the fifteenth century.",
        "<strong>Lo Manthang (3,840 m)</strong> has around 150 houses packed inside the wall, with fields and newer buildings outside it. You arrive in the early afternoon with time to walk the perimeter before dark.",
        "Around 4–5 hours. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Exploration Day in Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of the former Kingdom of Lo, on the plateau near the Tibetan border.",
      lng: 83.9563,
      lat: 29.1828,
      html: p(
        "A full day in the city, doing acclimatisation work as well as sightseeing.",
        "The morning is the monasteries: <strong>Jampa Lhakhang</strong> with its fifteenth-century clay Maitreya and restored mandala murals, <strong>Thubchen</strong> with its enormous wooden columns, and <strong>Chodey</strong>, the working monastery of the city.",
        "In the afternoon you can ride or walk north to the cave complexes at <strong>Chhoser</strong>, a five-storey warren carved into a cliff and reached by ladders, or climb to <strong>Namgyal Gompa</strong> and the viewpoint above the city. Both take you above 4,000 m, which is the acclimatisation the second half needs.",
        "Your guide checks the group tonight before the plateau section, and the crew tops up supplies for the week ahead. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Trek from Lo Manthang (3,840 m) to Yara (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Yara",
      placeDescription: "A small village on the eastern side of Upper Mustang below the Luri cave monastery.",
      lng: 84.0001,
      lat: 29.0959,
      html: p(
        "South-east off the main Mustang circuit onto the route almost nobody walks.",
        "The trail leaves Lo Manthang across open plateau, crossing the Dhi La and dropping into the valley of the upper Kali Gandaki tributaries. There is no trekking traffic at all on this side, and villages are hours apart.",
        "The walking is high desert: gravel plains, eroded ridges, and irrigation-green villages appearing suddenly in the canyon bottoms.",
        "<strong>Yara (3,650 m)</strong> is a village of a few dozen houses with barley fields and a view across to the cliffs holding the <strong>Luri cave gompa</strong>, whose upper chamber contains fifteenth-century murals painted directly onto the rock.",
        "Around 6–7 hours. Overnight at Yara.",
      ),
    },
    {
      title: "Trek from Yara (3,650 m) to Tange (3,240 m)",
      elevation: "3,240 m",
      accommodation: "Tange",
      placeDescription: "A remote village of white houses and chortens on the eastern edge of Upper Mustang.",
      lng: 83.9473,
      lat: 29.0098,
      html: p(
        "A day of canyon country to the last village before the pass.",
        "The trail drops from Yara into the Puyung Khola and follows a series of gorges south, climbing over shoulders and descending to riverbeds. The rock here is layered in bands of grey, ochre and purple, cut into fins and hoodoos by wind and water.",
        "There is no settlement between the two villages and no reliable water for hours, so the day is planned around the crew's carrying.",
        "<strong>Tange (3,240 m)</strong> is one of the most isolated villages in Mustang: forty or so whitewashed houses, a field system fed by a single channel, and a remarkable line of chortens on the approach. Almost no trekkers stay here.",
        "Around 7 hours. Overnight at Tange.",
      ),
    },
    {
      title: "Trek from Tange (3,240 m) to Teri La Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Teri La Base Camp",
      placeDescription: "A camp on the western approach to the Teri La in the Damodar Himal.",
      // Approximate: unmapped camp below the pass, on the route line east of Tange.
      lng: 84.0728,
      lat: 28.9822,
      html: p(
        "The biggest climbing day of the trek, gaining more than 1,750 m onto the high plateau.",
        "The trail leaves Tange east and climbs relentlessly out of the canyon system onto open ground, following a stream bed and then a broad shoulder. There is no village, no shelter and no trail traffic — this is the beginning of the week without anybody.",
        "The height gain is large and the group takes it in stages, with the crew moving ahead to pitch camp. Drinking discipline matters today more than any other.",
        "<strong>Teri La Base Camp (5,000 m)</strong> is a flat area of gravel and moraine with the col visible above. The <strong>Damodar Himal</strong> stands around the camp and, on a clear evening, the light on the peaks is the best of the trek.",
        "Around 8 hours. An early meal and an early night. Overnight camping at Teri La Base Camp.",
      ),
    },
    {
      title: "Cross the Teri La (5,595 m) and Descend to Dhalung (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Dhalung",
      placeDescription: "A grazing camp on the eastern side of the Teri La above the Phu valley.",
      // Approximate: unmapped grazing camp on the eastern descent.
      lng: 84.1954,
      lat: 28.9081,
      html: p(
        "The crossing, and the point where Mustang becomes Nar Phu.",
        "An early start for the climb to the col — three to four hours on snow and scree, steady rather than steep, with the group moving slowly at this altitude. In normal conditions there is no technical ground, though your guide carries rope and axes and will use them if the snow demands.",
        "The <strong>Teri La (5,595 m)</strong> is a broad saddle strung with prayer flags. The view takes in the <strong>Damodar Himal</strong>, the Tibetan plateau to the north, and, to the south, <strong>Himlung Himal (7,126 m)</strong> and the peaks above the Nar Phu valleys.",
        "The descent east is long, on scree and then grass, dropping a thousand metres into grazing country where yaks appear again.",
        "<strong>Dhalung (4,600 m)</strong> is a herders' ground with water. Nine to ten hours. Overnight camping at Dhalung.",
      ),
    },
    {
      title: "Trek from Dhalung (4,600 m) to Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A fortified Tibetan village on a rock spur at the head of the Phu valley.",
      // Approximate: the village is not tagged in OpenStreetMap; the waypoint
      // uses the published position for Phu Gaon on the valley floor.
      lng: 84.2861,
      lat: 28.8022,
      html: p(
        "Down into the Phu valley and the first village in a week.",
        "The route descends grazing slopes and moraine into the upper Phu valley, following the river as the walls close in. Yaks, then stone walls, then irrigation channels — the signs of habitation arrive in that order.",
        "<strong>Phu (4,080 m)</strong> is one of the most striking villages in Nepal: a tight cluster of stone houses stacked on a rock spur above the river, with a ruined fortress above and a chorten gateway at the entrance. It is Tibetan in language, dress and religion and was closed to outsiders until 2002.",
        "<strong>Tashi Lhakhang Gompa</strong> sits on the ridge outside the village, and the climb to it is worth it for the view back up the valley to Himlung Himal.",
        "Around 6 hours. The first lodge in a week. Overnight at Phu.",
      ),
    },
    {
      title: "Rest Day at Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A fortified Tibetan village on a rock spur at the head of the Phu valley.",
      lng: 84.2861,
      lat: 28.8022,
      html: p(
        "A day in the village after the pass, and a good one to have.",
        "The optional walk goes up the valley towards <strong>Himlung Himal base camp</strong> at around 4,900 m — five to six hours there and back, on moraine, with the north side of the Annapurna range and Himlung's glacier at the end of it.",
        "The gentler option is the village. Phu has fewer than fifty households, a monastery, the fortress ruins above, and a way of life built around yaks, barley and trade over the border. Your guide can introduce you, and the afternoon goes quickly.",
        "Practically, this is a laundry, wash and recovery day before the walk out, and the crew reorganises loads now that the camping section is over.",
        "Overnight at Phu.",
      ),
    },
    {
      title: "Trek from Phu (4,080 m) to Nar (4,110 m)",
      elevation: "4,110 m",
      accommodation: "Nar",
      placeDescription: "A walled Tibetan village on a plateau above the Nar Phu gorge, entered through four chortens.",
      // Approximate: village not tagged in OpenStreetMap; waypoint placed at the
      // published position for Nar Gaon on the plateau above the gorge.
      lng: 84.2137,
      lat: 28.6929,
      html: p(
        "A day between the two villages that give the valley its name, with a pass in the middle.",
        "The trail descends the Phu gorge to the confluence and then climbs steeply to the <strong>Nar Phedi</strong> monastery, where the nuns will usually offer tea. From there it is a long switchbacking climb of around 500 m onto the plateau.",
        "<strong>Nar (4,110 m)</strong> is entered through a line of four painted <strong>chortens</strong>, and behind them is a walled village of about eighty flat-roofed houses on an open shelf with barley fields and a monastery. It is larger and more open than Phu, and the setting — a plateau ringed by peaks — is extraordinary.",
        "Around 6 hours. The afternoon is free to walk the village and the fields. Overnight at Nar.",
      ),
    },
    {
      title: "Trek from Nar (4,110 m) to Koto (2,600 m)",
      elevation: "2,600 m",
      accommodation: "Koto",
      placeDescription: "A village on the Annapurna Circuit at the mouth of the Nar Phu valley.",
      lng: 84.2593,
      lat: 28.5522,
      html: p(
        "The last walking day, dropping 1,500 m out of the gorge onto the Annapurna Circuit.",
        "The trail leaves the plateau and descends into the Nar Phu gorge, following the river through the narrowest section on a path cut into the wall, past hot springs at Dharmasala and through pine and juniper forest. The air thickens quickly and the vegetation returns valley by valley.",
        "At the mouth of the gorge the Nar Phu Khola joins the <strong>Marsyangdi</strong> and the group checks out of the restricted area at the police post.",
        "<strong>Koto (2,600 m)</strong> is on the <strong>Annapurna Circuit</strong>, and after three weeks in restricted country the bakeries, jeeps and other trekkers take some adjusting to.",
        "This is where the crew finishes and tips are given. Around 6–7 hours. Overnight at Koto.",
      ),
    },
    {
      title: "Drive from Koto (2,600 m) to Besisahar (760 m)",
      elevation: "760 m",
      accommodation: "Besisahar",
      placeDescription: "The road town at the start of the Annapurna Circuit in the Marsyangdi valley.",
      lng: 84.3761,
      lat: 28.2313,
      html: p(
        "A jeep day down the Marsyangdi on the roughest road of the trip.",
        "The route descends through Chame, Dharapani and Jagat on a single-track road cut into the valley side, fording streams and crawling along ledges above the river. Five to six hours for what looks short on a map.",
        "The valley transforms as it drops — pine and barley at Chame, subtropical green and rice paddies by Besisahar, with waterfalls coming off both walls the whole way.",
        "<strong>Besisahar (760 m)</strong> is the road town at the start of the Annapurna Circuit and the end of the rough section.",
        "Overnight at Besisahar.",
      ),
    },
    {
      title: "Drive from Besisahar (760 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A straightforward highway day back to the capital.",
        "The road joins the Prithvi Highway at Dumre and follows the Trishuli east through gorge country, with a lunch stop en route. Around six hours in total.",
        "The countryside on this stretch is the ordinary, productive middle hills — rice terraces, roadside bazaars, buffalo in the fields — and after three weeks on the Tibetan plateau it looks impossibly green.",
        "You arrive in <strong>Kathmandu (1,400 m)</strong> in the afternoon and transfer to your hotel, with the evening free for a long shower and a proper dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held in reserve, and a free day in Kathmandu if the trek ran to schedule.",
        "On a route with a 5,595 m pass and a weather-dependent flight at the start, the spare day is part of the plan rather than padding.",
        "If everything went smoothly, today is yours. <strong>Boudhanath</strong> in the late afternoon is the natural choice after three weeks in Tibetan Buddhist country. <strong>Patan Durbar Square</strong> and its museum, or the old town at <strong>Bhaktapur</strong>, are the other two good uses of a day, and Thamel handles the shopping.",
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
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Swayambhunath</strong> or a last walk through the old city with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "You have crossed from the Kali Gandaki to the Marsyangdi over a 5,595 m pass, walked two restricted areas, and spent a week in country with no roads, lodges or other trekkers. The Saribung La next door is the glaciated version of the same crossing, and the Jomsom Dolpo traverse is the longer one. Safe travels.",
      ),
    },
  ],
};
