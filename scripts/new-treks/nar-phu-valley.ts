import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/** Restricted Tibetan villages north of the Annapurna Circuit, out over the Kang La. */
export const narPhuValleyTrek: NewTrek = {
  region: "Annapurna Region",
  price: 1490,
  difficulty: "challenging",
  maxAltitude: 5320,
  center: [84.24, 28.68],
  zoom: 10.5,
  content: {
    slug: "nar-phu-valley-trek",
    title: "Nar Phu Valley Trek",
    overview:
      "<p>The <strong>Nar Phu Valley Trek</strong> turns north off the Annapurna Circuit at Koto into a restricted valley that was closed to outsiders until 2002. Behind a narrow gorge lie two medieval Tibetan villages — <strong>Phu (4,080 m)</strong> and <strong>Nar (4,110 m)</strong> — with fortified houses, red-walled gompas, thousands of yaks and a way of life that has changed very little since the valley was a salt-trading route into Tibet.</p><p>The trek walks in through the gorge, spends four nights in the two villages, then crosses the <strong>Kang La (5,320 m)</strong> westward to rejoin the Annapurna Circuit at Ngawal with the whole Annapurna range laid out ahead. It is a proper expedition-feeling trek within a two-week holiday: a restricted-area permit, a minimum of two trekkers, real altitude, and a fraction of the traffic on the trail a day's walk away.</p>",
    highlights: [
      ["Phu Village (4,080 m)", "A fortified Tibetan settlement under a ruined dzong, with the Tashi Lhakhang gompa above it."],
      ["Nar Village (4,110 m)", "Whitewashed houses, four gompas and a great many yaks, on a shelf beneath the Pisang and Kang Guru peaks."],
      ["Kang La Pass (5,320 m)", "The crossing back to the Annapurna Circuit, with Annapurna II, III, IV and Gangapurna filling the horizon."],
      ["A Restricted Valley", "Closed to trekkers until 2002 and still limited by permit, so the villages are lived-in rather than staged."],
      ["The Nar Phu Gorge", "A day of cantilevered trail, suspension bridges and rock overhangs between Koto and Meta."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong> are the two windows, and the Kang La is what defines them. The pass holds snow into April and again from late November, and it is a serious place in poor conditions. Autumn is the more reliable of the two: clear, stable and cold, with the villages busy bringing in the buckwheat harvest.</p><p>Nar Phu sits partly in the Annapurna rain shadow, so the <strong>monsoon</strong> is less severe here than on the south side of the range and the valley is walkable in June and September shoulder weeks, though the approach through the gorge is landslide-prone when wet. <strong>Winter</strong> effectively closes the pass and most of Nar moves down to lower villages, so we do not run the route from December to February.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a challenging trek. The walking days are long, the trail through the gorge is rough and exposed in places, and the <strong>Kang La (5,320 m)</strong> is a genuine high pass with a pre-dawn start and a steep 1,200 m descent on the far side. You sleep six nights above 3,500 m and two at over 4,000 m before crossing.</p><p>The itinerary builds in acclimatisation days at both Phu and Nar precisely because the ascent from Koto is quick, and those days are not optional padding. You should be a confident hill walker with previous multi-day trekking experience; time above 4,000 m helps. Two to three months of preparation — long hill days with a loaded pack, plus running or cycling — is the right level. Trekking poles matter on the Kang La descent.</p>",
      },
      {
        heading: "Permits & Restricted Area Rules",
        content:
          "<p>Nar Phu is a <strong>restricted area</strong>. That means a special permit issued through a registered agency, a licensed guide, and a legal <strong>minimum of two trekkers</strong> on one permit — solo trekking is not allowed and the checkpost at Koto enforces it. The permit is issued for a fixed number of days on a fixed route and cannot be extended on the trail.</p><p>The restricted permit costs <strong>US$100 per person per week</strong> from September to November and US$75 per week from December to August, and is included in your package along with the <strong>Annapurna Conservation Area Permit</strong>. We need passport scans and passport photographs at least a week before departure to lodge the application in Kathmandu. There are checkposts at Koto on the way in and Ngawal on the way out, and your guide carries the paperwork throughout.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Bring waterproof trekking boots with a stiff sole and good ankle support, three or four base layers, a fleece, a <strong>down jacket rated to -15°C</strong>, and a waterproof and windproof shell jacket and trousers. Add trekking trousers, thermal leggings, a warm hat, sun hat, liner and insulated gloves, gaiters for the pass, and four or five pairs of wool socks. A sleeping bag rated to <strong>-15°C</strong> is right for Phu and Nar.</p><p>Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries for the Kang La start, category 4 sunglasses, high-SPF sunscreen and lip balm, a reusable bottle plus an insulated flask, purification tablets or a filter, a first aid kit with blister care and rehydration salts, a quick-dry towel and a power bank. Charging is solar and unreliable in both villages, so bring more battery than you think you need.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>Simple <strong>teahouses and village lodges</strong> throughout, and the standard is well below the Annapurna Circuit a day's walk away. Expect twin rooms with a bed, mattress and heavy blankets, shared outside toilets, and a family kitchen you eat in rather than a dining hall. <strong>Nar Phedi</strong> is a nunnery guesthouse where the nuns cook and everyone eats together, and it is many people's favourite night of the trek.</p><p>Three meals a day are included. Menus are short and built around what the valley grows and carries in: <em>dal bhat</em>, potatoes, buckwheat and barley dishes, Tibetan bread, thukpa, noodles and eggs, with yak dairy in various forms. Butter tea is offered everywhere and is worth trying at least once. Water comes from village taps and streams and must be treated with tablets, a filter or a UV pen — there is no bottled water for sale beyond Koto.</p>",
      },
    ],
    faqs: [
      { question: "Why is Nar Phu a restricted area?", answer: "It sits directly on the old salt-trading routes into Tibet and was closed for security reasons for decades, opening to permitted trekkers only in 2002. The restriction is still in force, which is why a special permit, a licensed guide and a minimum of two trekkers are required, and why the valley sees a few hundred visitors a year rather than tens of thousands." },
      { question: "Can I do this trek solo?", answer: "No. Restricted area rules require a permit issued to at least two trekkers travelling together with a licensed guide, and the checkpost at Koto enforces it. If you are travelling alone we can pair you with another booking on the same fixed departure, which is how most solo travellers join this trek." },
      { question: "How hard is the Kang La?", answer: "It is a long day rather than a technical one. Expect a start around 4 a.m., three to four hours of steady climbing to the 5,320 m pass on a good trail, then a knee-punishing 1,200 m descent to Ngawal. No ropes or technical gear are needed in normal autumn conditions, but fresh snow can make it serious and your guide will turn the group round if it is." },
      { question: "What is there to see at Phu itself?", answer: "The village sits under a ruined dzong on a rock spire, with fortified stone houses stacked up the hillside and a great many yaks. The Tashi Lhakhang gompa above the village is one of the oldest in the region, and the acclimatisation day gives time to walk up to it, to the Himlung base camp trail, or simply to sit in the village and watch a working day." },
      { question: "Can the trek be combined with the Annapurna Circuit?", answer: "Yes, and it is the most popular extension. Coming over the Kang La puts you at Ngawal on the Circuit, from where you can continue to Manang and over the Thorong La rather than driving out. That adds around six days; tell us at booking so the permits are issued for the right duration." },
      { question: "Is Himlung Himal base camp on this route?", answer: "It is a side trip from Phu rather than part of the itinerary, but the acclimatisation day at Phu can be spent walking toward it, which is a fine way to gain height. The full base camp is a long day and beyond the scope of the trek unless you add a night." },
      { question: "How many other trekkers will we see?", answer: "Very few. Nar Phu takes a few hundred permits a year against tens of thousands on the Annapurna Circuit, and outside October you may go days without meeting another group. That also means lodges are small and fixed departures matter, because a full teahouse in Nar has nowhere else to send you." },
      { question: "What is the accommodation at Nar Phedi like?", answer: "It is a nunnery guesthouse rather than a lodge. Rooms are simple, the toilet is outside, and meals are cooked and eaten with the resident nuns in their kitchen. It is basic and it is the night most people talk about afterwards. Bring your own sleeping bag and expect no shower." },
      { question: "Is altitude sickness a real risk here?", answer: "Yes, more than on the Annapurna Circuit, because the climb from Koto at 2,600 m to Phu at 4,080 m happens over three days. That is why acclimatisation days at both Phu and Nar are built in and are not optional. Your guide checks oxygen saturation each evening from Meta onward." },
      { question: "How do we get to and from the trailhead?", answer: "A long drive from Kathmandu to Dharapani on the first day, by private jeep on rough mountain road, and a similar drive out from Chame at the end. Both are eight to ten hours and the road is genuinely rough beyond Besisahar. A flight to Pokhara can shorten the return leg and is available as an add-on." },
    ],
    inclusions: {
      transport: [
        "Private jeep from Kathmandu to Dharapani at the start of the trek and from Chame back to Kathmandu at the end.",
        "Private airport and hotel transfers in Kathmandu.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      permits:
        "Nar Phu restricted area permit, Annapurna Conservation Area Permit and required trekking registration.",
      extra: [
        "Daily oxygen saturation monitoring with a pulse oximeter carried by the guide.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transportation, or expenses caused by snow closing the Kang La, road conditions on the Besisahar section, or other circumstances beyond the itinerary.",
    },
    porterDays: 11,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "A 14-day trek into the restricted Nar Phu valley north of the Annapurna Circuit, with four nights in the Tibetan villages of Phu and Nar and a crossing of the Kang La at 5,320 m.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, teahouse and village lodge accommodation, all trekking meals, the restricted area and conservation permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Nar Phu Valley Trek – 14 Days with the Kang La Pass",
      description:
        "A 14-day restricted-area trek to the Tibetan villages of Nar and Phu north of the Annapurna Circuit, crossing the Kang La at 5,320 m to Ngawal.",
      keywords:
        "Nar Phu Valley Trek, Nar Phu trek, Kang La pass trek, restricted area trek Nepal, Phu village, Nar village, Annapurna hidden valley trek, Manang restricted trek",
      tags: "Nar Phu Valley Trek, Annapurna Region, Restricted Area, Kang La, High Pass Trek, Nepal Trekking",
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
        "Your guide joins you in the afternoon for the briefing. Because Nar Phu is a restricted area, we check passports and permit paperwork today — the special permit has already been lodged, but the original documents have to travel with the group and be presented at Koto.",
        "The briefing covers the acclimatisation plan, what the gorge trail is like, and the conditions under which we would abandon the Kang La and walk back out the way we came in.",
        "We check your kit; a warm sleeping bag and gaiters are the items most often missing. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Dharapani (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Dharapani",
      placeDescription: "A trailhead village at the confluence of the Marsyangdi and Dudh Khola, on the Annapurna Circuit.",
      lng: 84.3567,
      lat: 28.5289,
      html: p(
        "A long day on the road, and the least comfortable of the trek — worth knowing in advance rather than discovering.",
        "The Prithvi Highway runs west along the Trishuli gorge to Dumre, then a hill road turns north to <strong>Besisahar (760 m)</strong>, the old start of the Annapurna Circuit, in around six hours.",
        "From Besisahar the surface deteriorates sharply and the vehicle changes to a four-wheel-drive jeep for the climb up the <strong>Marsyangdi</strong> valley. The road is cut into the gorge wall, crosses landslide scars and river beds, and gains height steadily past Jagat and Tal.",
        "You reach <strong>Dharapani (1,860 m)</strong> at the confluence with the Dudh Khola in the late afternoon. Around 9 to 10 hours in total. Overnight in a teahouse at Dharapani.",
      ),
    },
    {
      title: "Trek from Dharapani (1,860 m) to Koto (2,600 m)",
      elevation: "2,600 m",
      accommodation: "Koto",
      placeDescription: "A Circuit village at the mouth of the Nar Phu gorge, with the restricted area checkpost.",
      lng: 84.2593,
      lat: 28.5522,
      html: p(
        "The first walking day, on the main Annapurna Circuit trail and therefore busy — the only busy day of the trek.",
        "The path follows the Marsyangdi upstream through Bagarchhap and Danaque, climbing through pine and fir forest with the river loud below and the road appearing and disappearing alongside.",
        "There is a steep section up to <strong>Timang</strong>, where the trail breaks out of the trees and <strong>Manaslu (8,163 m)</strong> stands squarely at the head of the valley behind you — the best view of the mountain on the whole route.",
        "From Timang the trail contours through forest to <strong>Chame</strong>, the district headquarters, and on a further hour to <strong>Koto (2,600 m)</strong>.",
        "Around 6 hours. Koto is where the restricted area begins, and your guide registers the permits at the checkpost this evening. Overnight in a teahouse at Koto.",
      ),
    },
    {
      title: "Trek from Koto (2,600 m) to Meta (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Meta",
      placeDescription: "A small winter settlement on an open shelf, the first village inside the Nar Phu valley.",
      lng: 84.2373,
      lat: 28.6554,
      html: p(
        "The day the trek changes character entirely. You turn north off the Circuit at the checkpost, cross the Marsyangdi, and enter the <strong>Nar Phu gorge</strong>.",
        "The trail follows the Phu Khola into a narrowing canyon of pine and bamboo, crossing and re-crossing the river on suspension bridges, running under rock overhangs and along sections cantilevered out from the cliff. Waterfalls come down the walls and the sky narrows to a strip.",
        "There is a hot spring near Dharmasala where most groups stop for lunch, and the going is steady rather than steep until the last section, which climbs hard out of the gorge onto open hillside.",
        "The trees stop abruptly and you emerge at <strong>Meta (3,560 m)</strong>, a scatter of stone houses on a shelf with the Annapurnas visible to the south and Tibet-facing country ahead.",
        "Around 7 to 8 hours with nearly 1,000 m of gain. Overnight at Meta.",
      ),
    },
    {
      title: "Trek from Meta (3,560 m) to Kyang (3,820 m)",
      elevation: "3,820 m",
      accommodation: "Kyang",
      placeDescription: "The ruined winter settlement of the Nar people, on a bare shelf above the Phu Khola.",
      lng: 84.2861,
      lat: 28.7222,
      html: p(
        "A deliberately short day for acclimatisation, and a strange and beautiful one.",
        "The trail contours north across dry, open hillside high above the river, in country that now looks and feels Tibetan — juniper scrub, eroded cliffs, chortens on every rise, and almost no vegetation.",
        "You pass <strong>Chyakhu</strong> and the abandoned settlement at <strong>Jhunam</strong>, both of them collections of roofless stone houses that were villages within living memory, and the trail runs through several long mani walls.",
        "The Kang Guru and Pisang peaks are ahead on the left for most of the walk.",
        "Around 4 to 5 hours brings you to <strong>Kyang (3,820 m)</strong>, the winter settlement of the Nar people — largely ruined, partly rebuilt as a lodge, and one of the more atmospheric places to spend a night in Nepal. Overnight at Kyang.",
      ),
    },
    {
      title: "Trek from Kyang (3,820 m) to Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A fortified Tibetan village beneath a ruined dzong, at the head of the Phu Khola.",
      lng: 84.2861,
      lat: 28.8022,
      html: p(
        "A short day to the village the trek is built around.",
        "The trail drops to the <strong>Phu Khola</strong> and follows it upstream through a canyon of extraordinary eroded rock formations — pillars, fins and hoodoos in ochre and grey, with the river running through the middle of them.",
        "You cross a bridge and climb past a line of chortens to the <em>kani</em> gateway, and <strong>Phu (4,080 m)</strong> appears above: fortified stone houses stacked up a hillside beneath the ruins of an old <strong>dzong</strong> on a rock spire, with yak pens, drying racks and prayer flags everywhere.",
        "There are three small villages here, Phu being the largest, and perhaps thirty families in total. The gompa above the village, <strong>Tashi Lhakhang</strong>, is one of the oldest in the region and was named by Karmapa as one of the most important in Nepal.",
        "Around 4 to 5 hours. Overnight in a lodge at Phu.",
      ),
    },
    {
      title: "Acclimatisation and Exploration Day at Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A fortified Tibetan village beneath a ruined dzong, at the head of the Phu Khola.",
      lng: 84.2861,
      lat: 28.8022,
      html: p(
        "A rest day that is not spent resting. The point is to gain height during the day and sleep low, and there is a great deal to walk to.",
        "The usual outing climbs north-west toward <strong>Himlung Himal (7,126 m)</strong> base camp, gaining several hundred metres on a yak trail with the mountain filling the head of the valley. You do not need to reach base camp for the day to do its job.",
        "Alternatively you can climb to the <strong>Tashi Lhakhang gompa</strong> above the village, walk out to the old dzong ruins on the spire, or spend the day in the village itself, which is the option people who have come this far often choose.",
        "Phu is a working settlement rather than a display: yaks are milked, wool is spun, barley is winnowed on the roofs and children walk to a school of about a dozen pupils. Overnight at Phu.",
      ),
    },
    {
      title: "Trek from Phu (4,080 m) to Nar Phedi (3,490 m)",
      elevation: "3,490 m",
      accommodation: "Nar Phedi",
      placeDescription: "A nunnery guesthouse at the foot of the climb to Nar, where the nuns cook for visiting trekkers.",
      lng: 84.2361,
      lat: 28.7139,
      html: p(
        "You retrace the canyon south, which is no hardship — the eroded rock formations look completely different walking the other way with the light behind them.",
        "The trail descends past Kyang and Chyakhu, then instead of returning to Meta it forks west and drops to the <strong>Lapche Khola</strong>, crossing on a bridge below the confluence.",
        "A short climb on the far side brings you to <strong>Nar Phedi (3,490 m)</strong>, which is not a village but a single building: a small nunnery with a guesthouse attached.",
        "You eat in the kitchen with the resident nuns, who cook for everyone who passes, and there is usually an evening puja in the little prayer hall that visitors are welcome to sit in on. The rooms are basic and the toilet is outside.",
        "Around 6 to 7 hours. It is the night most people remember from this trek. Overnight at Nar Phedi.",
      ),
    },
    {
      title: "Trek from Nar Phedi (3,490 m) to Nar (4,110 m)",
      elevation: "4,110 m",
      accommodation: "Nar",
      placeDescription: "A whitewashed Tibetan village of four gompas on a high shelf beneath Pisang Peak.",
      lng: 84.2137,
      lat: 28.6929,
      html: p(
        "A short but stiff day: 620 m of climbing in three to four hours, and nothing else.",
        "The trail switchbacks up the hillside above the nunnery, passing a spectacular line of five large <strong>chortens</strong> painted red, white and ochre that mark the approach to the village.",
        "<strong>Nar (4,110 m)</strong> sits on a shelf with terraced barley and buckwheat fields below it and <strong>Pisang Peak (6,091 m)</strong> and <strong>Kang Guru (6,981 m)</strong> across the valley. It is larger and more prosperous than Phu, with whitewashed houses, four gompas and a great many yaks.",
        "You arrive by early afternoon, which leaves time to walk around the village, visit the gompas, and watch the herds come in at dusk.",
        "Your guide talks through the Kang La in the evening and sets the start time. Overnight in a lodge at Nar.",
      ),
    },
    {
      title: "Acclimatisation Day at Nar (4,110 m)",
      elevation: "4,110 m",
      accommodation: "Nar",
      placeDescription: "A whitewashed Tibetan village of four gompas on a high shelf beneath Pisang Peak.",
      lng: 84.2137,
      lat: 28.6929,
      html: p(
        "The last day before the pass, and the one that makes the crossing safe. Everyone sleeps at 4,110 m for a second night and spends the day gaining height on foot.",
        "The standard walk climbs west toward the <strong>Kang La</strong> itself for two or three hours, which has the double benefit of acclimatising the group and letting your guide see the state of the snow on the approach before committing to it in the dark.",
        "Alternatively there is a good ridge north of the village with a view over the whole Nar bowl and across to Pisang Peak.",
        "The afternoon is for rest, food and fluids, and for repacking so that the pre-dawn start is quick. Head torches, gloves, a warm hat and a full flask go at the top of the daypack.",
        "Overnight at Nar. It will be an early night.",
      ),
    },
    {
      title: "Cross the Kang La (5,320 m) and Trek to Ngawal (3,660 m)",
      elevation: "5,320 m",
      accommodation: "Ngawal",
      placeDescription: "An old Tibetan-style village on the Annapurna Circuit high route, with views across to the Annapurnas.",
      lng: 84.1058,
      lat: 28.6467,
      html: p(
        "The big day, starting around 4 a.m. by headlamp to be over the pass before the wind gets up.",
        "The trail climbs steadily west out of Nar on a good yak path, gaining height in long zigzags across open slopes with the sky lightening behind you. The last section is steeper and the air thin enough that progress becomes very slow.",
        "The <strong>Kang La (5,320 m)</strong> is a broad saddle hung with prayer flags, and the view from it is the reward for the whole trek: <strong>Annapurna II (7,937 m)</strong>, <strong>Annapurna III</strong>, <strong>Annapurna IV</strong>, <strong>Gangapurna</strong> and <strong>Tilicho Peak</strong> across the Marsyangdi, with the Manang valley far below.",
        "The descent is long and hard on the legs — 1,660 m down a steep, loose slope, easing onto a good trail through juniper to <strong>Ngawal (3,660 m)</strong>.",
        "Around 9 to 10 hours. Overnight in a teahouse at Ngawal.",
      ),
    },
    {
      title: "Trek to Chame (2,670 m) and Drive to Besisahar (760 m)",
      elevation: "760 m",
      accommodation: "Besisahar",
      placeDescription: "The lowland town at the foot of the Marsyangdi valley, the road head for the Annapurna Circuit.",
      lng: 84.3775,
      lat: 28.2306,
      html: p(
        "A descending day back to the road, and an easy one after the pass.",
        "The trail drops from Ngawal on the Circuit high route through <strong>Ghyaru</strong>, an old fortified village on a spur with one of the finest views on the Annapurna Circuit — the whole Annapurna wall directly across the valley — then descends steeply to the Marsyangdi at <strong>Pisang</strong>.",
        "From Pisang the walking is level and easy through pine forest to <strong>Chame (2,670 m)</strong>, around 4 to 5 hours in total.",
        "After lunch a jeep takes you back down the Marsyangdi gorge road to <strong>Besisahar (760 m)</strong>, four to five hours on the same rough surface you came up on, dropping nearly 2,000 m and returning you to warmth, greenery and mosquitoes.",
        "Overnight in a hotel at Besisahar.",
      ),
    },
    {
      title: "Drive from Besisahar (760 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A straightforward drive back to the capital on sealed road, which after two days of jeep track feels like luxury.",
        "The road runs down to Dumre and joins the <strong>Prithvi Highway</strong>, following the Marsyangdi and then the Trishuli east through gorge country, with rafting parties on the river below and roadside stops selling river fish and fresh curd.",
        "Around 6 to 7 hours with a lunch stop.",
        "Transfer to your hotel in Thamel. The afternoon is free for a hot shower, a change of clothes and last souvenir shopping, and most groups meet for a farewell dinner in the evening.",
        "If you would rather fly the last leg, a Pokhara flight can be substituted as an add-on. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "A slow morning in Kathmandu. If your flight is late in the day there is time for last shopping in Thamel, a walk around Durbar Square or Boudhanath, or a long breakfast.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
        "If you are staying on in Nepal we are happy to arrange onward travel, a Chitwan extension, a Pokhara flight or extra hotel nights — just let us know while you are still on the trail so we can book it.",
        "Thank you for trekking with us. Nar and Phu are among the last valleys in Nepal that still feel genuinely closed, and we hope you found them worth the permit.",
      ),
    },
  ],
};
