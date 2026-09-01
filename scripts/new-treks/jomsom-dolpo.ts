import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

const PERMITS =
  "Upper and Lower Dolpo Restricted Area Permits, Shey Phoksundo National Park entry permit, and Annapurna Conservation Area Permit.";
const NEPALGUNJ = { lng: 81.625, lat: 28.0654 };

/**
 * Jomsom to Juphal across the Dolpo plateau over five passes.
 *
 * Waypoints marked "approximate" are camps with no OpenStreetMap node; they sit
 * on the route line between verified points.
 */
export const jomsomDolpoTrek: NewTrek = {
  price: 3950,
  difficulty: "difficult",
  maxAltitude: 5560,
  center: [83.3, 29.05],
  zoom: 8.5,
  content: {
    slug: "jomsom-dolpo-trek",
    title: "Jomsom Dolpo Trek",
    overview:
      "<p>The <strong>Jomsom Dolpo Trek</strong> is the great east-to-west traverse of the Nepali trans-Himalaya, walking from the Kali Gandaki at <strong>Jomsom</strong> across the Dolpo plateau to <strong>Phoksundo Lake</strong> and out at Juphal. It crosses five passes, three of them above 5,000 m, and spends two weeks above the treeline in the driest, highest inhabited country in Nepal.</p><p>From Kagbeni the route climbs over the <strong>Sangda La (5,560 m)</strong> into Dolpo proper, then follows the old salt-trade line through <strong>Charka Bhot</strong> and over the <strong>Numa La (5,309 m)</strong> and <strong>Baga La</strong> to the Bon and Buddhist villages of <strong>Dho Tarap</strong>. It finishes at the turquoise water of <strong>Phoksundo (3,640 m)</strong>. This is the country Peter Matthiessen and George Schaller walked in <em>The Snow Leopard</em>, and very little about it has changed since.</p>",
    highlights: [
      ["Cross the Sangda La (5,560 m)", "Climb out of the Kali Gandaki over the highest pass of the trek and into the Dolpo plateau."],
      ["Charka Bhot and Dho Tarap", "Stay in Tibetan villages that were closed to outsiders for decades and still trade over the border."],
      ["The Numa La and Baga La", "Cross two more 5,000 m passes on the old salt route between Tarap and Phoksundo."],
      ["Phoksundo Lake (3,640 m)", "Finish at the deepest lake in Nepal, an unreal turquoise below the Kanjiroba peaks."],
      ["Two Weeks Above the Treeline", "Walk the highest inhabited country in Nepal, in a rain shadow where the landscape is Tibetan rather than Himalayan."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>Mid-May to early July</strong> and <strong>September to mid-October</strong> are the windows, and Dolpo is unusual in that the monsoon months work. The plateau sits in the rain shadow of Dhaulagiri and stays dry when the rest of Nepal is under cloud, so June and early July are a genuine option here and almost nowhere else.</p><p>The limiting factor is the passes. From late October the Sangda La and Numa La hold snow and the villages begin to empty for winter, and by November the route is closed. Early spring is too snowbound for the high crossings. Whichever window you choose, the flight into or out of Juphal is the weakest link and a spare day is essential.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a difficult trek — long, high and entirely self-supported. There are five passes, three above 5,000 m, the highest at 5,560 m, and the group camps for most of the trip with a cook crew and pack animals. Days of seven to nine hours are normal, water is scarce on the plateau, and there is no road, hospital or resupply between Jomsom and Juphal.</p><p>You need previous multi-day experience above 4,000 m and the fitness for two weeks of consecutive hard days at altitude. There is no technical ground and no equipment to learn, but the cumulative load is severe and altitude is the constant. Three to four months of preparation, including back-to-back long hill days with a pack, is appropriate.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 6,000 m</strong> is required. The Sangda La at 5,560 m is far above the ceiling on standard policies, which often stop at 4,000 m, and a policy that excludes it covers almost none of this trek.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Dolpo is the most isolated trekking region in Nepal: from Charka Bhot the nearest road is several days away in any direction and the nearest hospital is a flight from Juphal. Helicopters fly here only against a guarantee of payment, and at these altitudes a landing is not always possible. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Dolpo is cold at night, blazing by day and relentlessly dry. Bring waterproof trekking boots, gaiters, a <strong>four-season sleeping bag rated to -20°C</strong>, an insulated mat, a heavy down jacket, a windproof and waterproof shell jacket and trousers, four base layers, a fleece, insulated and liner gloves, a warm hat, a buff for the dust and a sun hat.</p><p>Also pack a 35-45 litre pack, trekking poles, category 4 sunglasses, a headlamp with spare batteries, factor 50 sunscreen and lip balm, two litres of bottle capacity plus purification, electrolyte tablets, a thorough personal first aid kit, wet wipes and hand sanitiser, a quick-dry towel and a large power bank. There is no charging between Jomsom and Dho Tarap, which is about two weeks.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>Apart from lodge nights at Jomsom, Kagbeni, Dho Tarap and Ringmo, this is a <strong>camping trek</strong>: two-person tents, a mess tent and a toilet tent, at altitudes between 3,700 m and 4,800 m. Nights at the high camps fall to -15°C or lower. Pack animals — horses and yaks — carry loads on the plateau where the ground allows, which is how goods have moved here for centuries.</p><p>A cook and kitchen crew travel with the group throughout, cooking three hot meals a day from supplies bought in Jomsom and topped up in the villages. Fresh food runs out after the first week and the menu becomes rice, lentils, pasta, potatoes and dried goods. Water is the real constraint: sources on the plateau are hours apart, so the crew fills at every stream and you should carry two litres and drink four a day.</p>",
      },
    ],
    faqs: [
      { question: "Which permits do I need and can I trek solo?", answer: "Upper and Lower Dolpo restricted area permits, the Shey Phoksundo National Park permit and the Annapurna conservation permit — all included. The restricted permits require a licensed guide and a minimum of two trekkers, and Upper Dolpo carries a substantial per-person daily fee that makes up a large part of the trip cost." },
      { question: "Why is this trek so expensive compared with other routes?", answer: "Three reasons: the Upper Dolpo permit fee, the fact that everything is camped and carried with a full crew and pack animals for three weeks, and the four domestic flights involved. There are no teahouses to subsidise the logistics as there are on the Annapurna or Everest trails." },
      { question: "Can this be walked in the monsoon?", answer: "Yes, and it is one of the few Nepali routes where June and early July work well. Dolpo is behind the Dhaulagiri massif in a rain shadow. The catch is the flights: Juphal and Jomsom are both weather-dependent and monsoon cloud on the southern side of the range delays them regularly." },
      { question: "What is Charka Bhot like?", answer: "A Tibetan village of around sixty flat-roofed houses at 4,300 m, one of the highest permanently inhabited settlements in Nepal. The people are Bon and Buddhist, speak a Tibetan dialect, and still trade salt and wool over the border. Very few outsiders pass through in a year." },
      { question: "How cold does it get at the high camps?", answer: "Overnight temperatures at the camps above 4,500 m reach -15°C in the main seasons and lower in October. There is no shelter beyond your tent and no wood for a fire above the treeline. A -20°C bag and an insulated mat are required rather than recommended." },
      { question: "Will we see snow leopards?", answer: "Almost certainly not, but you are walking through their best habitat in Nepal. Blue sheep, their main prey, are common on the slopes above Charka and Tarap, and you may find tracks or a kill. Matthiessen spent months here in 1973 without seeing one, which is rather the point of his book." },
      { question: "How reliable are the flights?", answer: "Pokhara to Jomsom flies in the morning and is cancelled by wind after about ten o'clock. Juphal to Nepalgunj is a small aircraft into a hill strip and delays of a day are routine. The itinerary carries a contingency day at the end for exactly this, and we recommend a further buffer before your international flight." },
      { question: "Is there any mobile signal?", answer: "There is NTC coverage at Jomsom and Kagbeni, nothing at all across the plateau, and patchy signal again at Dho Tarap and Dunai. Assume you are out of contact for roughly two weeks and brief your family before you leave Jomsom." },
      { question: "How much of the route is above 4,000 m?", answer: "About two thirds of the trekking days. From the Sangda La until the descent to Phoksundo you are almost continuously above 4,000 m, sleeping between 3,700 m and 4,800 m. That sustained exposure, rather than any single pass, is what makes the trek hard." },
      { question: "Could we walk it in the other direction?", answer: "Yes, and some groups fly to Juphal and finish at Jomsom. We run it west from Jomsom because the acclimatisation profile is better — you gain height gradually through Mustang instead of jumping straight to the Phoksundo and Baga La side — and because finishing at Phoksundo is the better ending." },
    ],
    inclusions: {
      flights: [
        "Pokhara to Jomsom and Juphal to Nepalgunj to Kathmandu flights as per the itinerary, including airport transfers.",
      ],
      transport: ["Private transportation from Kathmandu to Pokhara as per the itinerary."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Pokhara with breakfast.",
        "Accommodation in Nepalgunj with breakfast.",
      ],
      permits: PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew, and pack animals for the plateau section.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu, Pokhara, and Nepalgunj.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Jomsom or Juphal, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 18,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 22-day traverse from Jomsom to Juphal across the Dolpo plateau, crossing the Sangda La (5,560 m), Numa La (5,309 m) and Baga La, and finishing at Phoksundo Lake.",
    inExDescription:
      "Domestic flights, airport transfers, road transport, Kathmandu, Pokhara and Nepalgunj hotel nights, full camping equipment with a cook crew and pack animals, teahouse nights in the villages, all trekking meals, restricted area and national park permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "May-Jul, Sep-Oct",
    meta: {
      title: "Jomsom Dolpo Trek – 22 Day Trans-Himalayan Traverse",
      description:
        "A 22-day traverse from Jomsom across the Dolpo plateau to Phoksundo Lake over the Sangda La (5,560 m), Numa La and Baga La, through Charka Bhot and Dho Tarap.",
      keywords:
        "Jomsom Dolpo Trek, Sangda La, Charka Bhot, Dho Tarap, Numa La, Baga La, Phoksundo Lake, Upper Dolpo trek, trans Himalaya Nepal",
      tags: "Jomsom Dolpo Trek, Dolpo, Mustang, Remote Region, High Pass Trek, Camping Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing. Dolpo needs a long one: the twenty-two day plan, four domestic flights, the restricted area permits and the passport photographs they need, three weeks of camping, and the water and altitude discipline the plateau demands. We check your kit thoroughly, because after Jomsom there is nothing to buy for a fortnight.",
        "Our office lodges the Upper and Lower Dolpo permits today. The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A beautiful lakeside city and the gateway to the Annapurna and Mustang regions.",
      ...POKHARA,
      html: p(
        "After breakfast we leave the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river west through the gorge country with terraced hillsides above and rafting groups on the water below.",
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day with a lunch stop en route. The 25-minute flight is available as an add-on if you would rather not spend the day in a vehicle.",
        "Pokhara arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurna massif standing behind it and Machhapuchhre unmistakable from the lakeside.",
        "The crew makes the final load sort here, and this is the last comfortable evening for three weeks. Overnight in Pokhara.",
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
        "An early flight up the <strong>Kali Gandaki</strong>, threading the deepest gorge on earth between Dhaulagiri and Annapurna. Twenty minutes, and one of the great scheduled flights anywhere in the world.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang, an airstrip and a line of buildings on a windy riverbed. The group organises loads and animals here.",
        "The walk north follows the broad grey riverbed into the wind that funnels up this valley every afternoon of the year, past Eklebhatti to the confluence of the Jhong Khola.",
        "<strong>Kagbeni (2,810 m)</strong> is a medieval village of mud-brick alleys, a red gompa and irrigation channels running under the streets — a green oasis in a desert, and the checkpoint at the edge of the restricted area.",
        "Around 3 hours of walking. Overnight at Kagbeni.",
      ),
    },
    {
      title: "Trek from Kagbeni (2,810 m) to Phalyak (3,190 m)",
      elevation: "3,190 m",
      accommodation: "Phalyak",
      placeDescription: "A small farming village on the western slope above the Kali Gandaki.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line above Kagbeni on the western side of the valley.
      lng: 83.7429,
      lat: 28.8534,
      html: p(
        "A short day climbing out of the Kali Gandaki onto the western hillsides, and the start of the traverse west.",
        "The trail leaves Kagbeni and climbs steadily away from the river through eroded desert country, with the whole Mustang canyon system opening out behind. Look back for the classic view: the green strip of Kagbeni against grey cliffs, with <strong>Nilgiri (7,061 m)</strong> above.",
        "<strong>Phalyak (3,190 m)</strong> is a small farming village on a shelf with barley terraces watered by a channel cut from a side stream, and a handful of houses. It is an ordinary working place with no trekking traffic, which is why it is a good introduction to the next three weeks.",
        "Only three to four hours, deliberately, since the route ahead climbs hard. Overnight camping at Phalyak.",
      ),
    },
    {
      title: "Trek from Phalyak (3,190 m) to Sangda Phedi (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Sangda Phedi",
      placeDescription: "A camp below the Niwar La and Sangda La on the route west out of Mustang.",
      // Approximate: unmapped camp below the passes.
      lng: 83.6122,
      lat: 28.9186,
      html: p(
        "A long, steady climb into the high country below the passes.",
        "The trail traverses west across a series of ridges and dry valleys, gaining more than a thousand metres with almost no habitation on the way. This is high desert: gravel, wind-carved rock and scattered thorn scrub, with the Annapurna and Dhaulagiri massifs behind you and empty ridgelines ahead.",
        "There is no water for long stretches, so the crew fills everything at the last stream and the group carries two litres each.",
        "<strong>Sangda Phedi (4,300 m)</strong> is a camp on flat ground below the double pass of the <strong>Niwar La</strong> and <strong>Sangda La</strong>, which are crossed tomorrow. It is the first cold night of the trek.",
        "Around 7 hours. Overnight camping at Sangda Phedi.",
      ),
    },
    {
      title: "Cross the Niwar La (5,152 m) and Sangda La (5,560 m) to Sangda (3,770 m)",
      elevation: "3,770 m",
      accommodation: "Sangda",
      placeDescription: "A Tibetan-influenced village on the western edge of the Mustang district.",
      lng: 83.6779,
      lat: 28.9041,
      html: p(
        "The hardest day of the first half, crossing two passes and dropping nearly 1,800 m.",
        "An early start for the climb to the <strong>Niwar La (5,152 m)</strong>, on scree and old snow. There is barely time to appreciate it before the route traverses and climbs again to the <strong>Sangda La (5,560 m)</strong>, the highest point of the entire trek.",
        "The view from the top is the whole reason for the route: <strong>Dhaulagiri</strong> and <strong>Annapurna</strong> behind, the brown Tibetan plateau ahead, and, to the north, the ranges running into Tibet. There is nothing man-made in any direction.",
        "The descent is long and hard on the legs, dropping through scree and then dry valley to the village of <strong>Sangda (3,770 m)</strong>, a cluster of flat-roofed houses and barley fields on the western edge of Mustang.",
        "Nine to ten hours. Overnight camping at Sangda.",
      ),
    },
    {
      title: "Trek from Sangda (3,770 m) to Kyalunpa Khola (4,000 m)",
      elevation: "4,000 m",
      accommodation: "Kyalunpa Khola",
      placeDescription: "A river camp on the old salt-trade route between Mustang and Dolpo.",
      // Approximate: unmapped river camp between Sangda and Charka Bhot.
      lng: 83.5204,
      lat: 28.9836,
      html: p(
        "West into Dolpo proper, on the old trade line between the two districts.",
        "The trail climbs over a shoulder above Sangda and drops into a system of dry valleys running north-west. This is a working route rather than a trekking trail — the line that salt, wool and grain moved along between the Kali Gandaki and Dolpo for centuries — and you will meet horse and yak trains on it.",
        "The landscape is monotonous in the best sense: gravel and rock, enormous distances, and the occasional blue sheep on a slope.",
        "The camp at the <strong>Kyalunpa Khola (4,000 m)</strong> is beside running water, which on this section is what decides where the tents go.",
        "Around 7 hours. Overnight camping at the Kyalunpa Khola.",
      ),
    },
    {
      title: "Trek from Kyalunpa Khola (4,000 m) to Charka Bhot (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Charka Bhot",
      placeDescription: "One of the highest permanently inhabited villages in Nepal, on the Dolpo plateau.",
      lng: 83.4173,
      lat: 29.0892,
      html: p(
        "A day of dry valleys and shallow passes, ending at one of the highest villages in the country.",
        "The route continues north-west over a series of ridges, following the river system that eventually drains into the Barbung Khola. The scale is hard to read: what looks like an hour's walk is three, and the group learns to judge distance differently.",
        "<strong>Charka Bhot (4,300 m)</strong> appears as a compact block of flat-roofed stone and mud houses on a terrace above the river, with barley fields, chortens and a monastery. Around sixty households live here permanently, which makes it one of the highest year-round settlements in Nepal.",
        "The people are Tibetan in language and dress, follow Bon and Buddhist practice, and still trade over the border. Very few outsiders come through in a year, and your guide's introductions matter.",
        "Around 6–7 hours. Overnight camping at Charka Bhot.",
      ),
    },
    {
      title: "Acclimatization Day at Charka Bhot (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Charka Bhot",
      placeDescription: "One of the highest permanently inhabited villages in Nepal, on the Dolpo plateau.",
      lng: 83.4173,
      lat: 29.0892,
      html: p(
        "A day in the village, both for the altitude and because it is worth the time.",
        "The acclimatisation walk climbs the ridge behind Charka towards <strong>4,800 m</strong>, giving a view over the whole plateau and, on a clear morning, the Dhaulagiri massif to the south. Three to four hours, back for lunch.",
        "The afternoon is Charka itself. The monastery, the chortens on the approach, the winter fodder stacked on the roofs and the animals brought in at dusk are all part of a way of living at 4,300 m that has changed very little. Your guide can usually arrange a visit to the gompa.",
        "This is also the last village of any size before Dho Tarap, five days away, so the crew tops up what supplies it can. Overnight camping at Charka Bhot.",
      ),
    },
    {
      title: "Trek from Charka Bhot (4,300 m) to Norbulung (4,750 m)",
      elevation: "4,750 m",
      accommodation: "Norbulung",
      placeDescription: "A high grazing camp on the route between Charka Bhot and the Tarap valley.",
      // Approximate: unmapped grazing camp on the plateau.
      lng: 83.3059,
      lat: 29.1088,
      html: p(
        "Onto the high plateau, and the start of four days above 4,500 m.",
        "The trail follows the Thansang Khola west and climbs steadily onto open grazing ground. There is no settlement at all on this section — only summer herders' walls, chortens marking the route, and the occasional caravan.",
        "This is the country the trek exists for: enormous, empty, and unlike anywhere else in Nepal. The colours are ochre, grey and rust, and the only green is beside the streams.",
        "<strong>Norbulung (4,750 m)</strong> is a grazing camp with water and shelter from the worst of the wind. It is cold as soon as the sun drops.",
        "Around 6 hours. Overnight camping at Norbulung.",
      ),
    },
    {
      title: "Cross the Mola La (5,030 m) and Trek to Tokyu (4,209 m)",
      elevation: "4,209 m",
      accommodation: "Tokyu",
      placeDescription: "A village of the upper Tarap valley with a Bon monastery above it.",
      lng: 83.1611,
      lat: 29.1621,
      html: p(
        "A pass day into the Tarap valley, the heart of inhabited Dolpo.",
        "The climb to the <strong>Mola La (5,030 m)</strong> is steady rather than steep, on gravel and old snow. From the top the Tarap valley opens west, a broad green trough that is startling after four days of gravel — the widest area of cultivation anywhere on the plateau.",
        "The descent leads into pasture and then barley fields, with chortens and mani walls along the trail and stone-walled fields on both sides of the river.",
        "<strong>Tokyu (4,209 m)</strong> is a village of the upper Tarap with a <strong>Bon monastery</strong> above it. Bon predates Buddhism in Tibet and survives strongly in Dolpo; its pilgrims circle a monastery anticlockwise, which is the simplest way to tell the traditions apart.",
        "Around 7 hours. Overnight camping at Tokyu.",
      ),
    },
    {
      title: "Trek from Tokyu (4,209 m) to Dho Tarap (4,090 m)",
      elevation: "4,090 m",
      accommodation: "Dho Tarap",
      placeDescription: "The main village of the Tarap valley, a Bon and Buddhist settlement at 4,090 m.",
      lng: 83.1867,
      lat: 29.1285,
      html: p(
        "A short, easy walk down the valley to the main village of Tarap.",
        "The trail follows the river through cultivated country, past mani walls, chortens and stone-walled fields, with the flat-roofed houses of the valley scattered across both banks.",
        "<strong>Dho Tarap (4,090 m)</strong> is the largest settlement in inner Dolpo — a walled village of around forty households with both a <strong>Bon</strong> and a <strong>Buddhist</strong> monastery, a school, and a health post. The people are Magar and Tibetan, farm barley and potato at 4,000 m, and keep yaks on the pasture above.",
        "There is a simple lodge here, and after a week of tents it is a welcome change. Arrive by early afternoon.",
        "Around 3–4 hours. Overnight at Dho Tarap.",
      ),
    },
    {
      title: "Rest Day at Dho Tarap (4,090 m)",
      elevation: "4,090 m",
      accommodation: "Dho Tarap",
      placeDescription: "The main village of the Tarap valley, a Bon and Buddhist settlement at 4,090 m.",
      lng: 83.1867,
      lat: 29.1285,
      html: p(
        "A day off in the middle of the trek, and the only one.",
        "Dho Tarap deserves it. The morning can go on the two monasteries — <strong>Ribo Bhumpa</strong> above the village and the Bon gompa across the valley — both of which the caretakers will usually open, and both of which hold old thangkas and statues.",
        "The village is also a good place to simply sit. Traders come through with yak caravans, children walk to the school, and the rhythm of a farming settlement at 4,090 m plays out in front of you.",
        "Practically, this is the last day to wash, dry kit, and let the crew reorganise for the two passes ahead. Your guide reviews everyone's condition before the Numa La, which at 5,309 m is the second-highest point of the trek.",
        "Overnight at Dho Tarap.",
      ),
    },
    {
      title: "Trek from Dho Tarap (4,090 m) to Numa La Base Camp (4,440 m)",
      elevation: "4,440 m",
      accommodation: "Numa La Base Camp",
      placeDescription: "A camp below the Numa La on the route from Tarap to Phoksundo.",
      // Approximate: unmapped camp below the Numa La.
      lng: 83.1085,
      lat: 29.1621,
      html: p(
        "A short day to position the group below the pass.",
        "The trail leaves Dho Tarap and climbs west up a side valley, following a stream through summer pasture with yaks grazing and herders' shelters on the slopes. The Tarap valley closes behind you.",
        "It is only four to five hours and the height gain is modest, which is deliberate — tomorrow's pass is 5,309 m and the day is long.",
        "<strong>Numa La Base Camp (4,440 m)</strong> is a flat area beside the stream with the pass visible above as a broad saddle on the ridge.",
        "The afternoon is rest and an early meal, and your guide sets the start time for the morning. Overnight camping at Numa La Base Camp.",
      ),
    },
    {
      title: "Cross the Numa La (5,309 m) and Trek to Pelung Tang (4,465 m)",
      elevation: "4,465 m",
      accommodation: "Pelung Tang",
      placeDescription: "A camp between the Numa La and the Baga La on the old salt route.",
      // Approximate: unmapped camp between the two passes.
      lng: 83.0587,
      lat: 29.1584,
      html: p(
        "The highest pass since the Sangda La, and one of the great viewpoints in western Nepal.",
        "The climb to the <strong>Numa La (5,309 m)</strong> is a long steady pull on scree and grass, taking three to four hours from camp. The group moves slowly and the pace is set by the altitude, not the gradient.",
        "The reward at the top is <strong>Dhaulagiri (8,167 m)</strong>, standing clear above everything else to the south-east, with the whole Dolpo plateau spread out behind and the Kanjiroba range west. It is a big, open, uncluttered view of a kind that only exists in this part of Nepal.",
        "The descent drops west onto a shelf between the two passes, where the camp at <strong>Pelung Tang (4,465 m)</strong> sits on open ground with water nearby.",
        "Around 7–8 hours. Overnight camping at Pelung Tang.",
      ),
    },
    {
      title: "Cross the Baga La (5,190 m) and Trek to Bagala Phedi (4,115 m)",
      elevation: "4,115 m",
      accommodation: "Bagala Phedi",
      placeDescription: "A camp below the western side of the Baga La on the descent towards Phoksundo.",
      lng: 83.0028,
      lat: 29.1435,
      html: p(
        "The last high pass of the trek, and the beginning of the long descent to the lake.",
        "The climb to the <strong>Baga La (5,190 m)</strong> is shorter than yesterday's but starts higher, so it is no easier. The pass is a narrow notch strung with prayer flags, with the Kanjiroba peaks close to the north and Dhaulagiri once more to the south-east.",
        "This is the watershed: everything from here drains towards Phoksundo and the Suli Gad, and the landscape starts to change with it. Scrub appears on the slopes, then juniper.",
        "The descent is steep at first on scree, then eases into a valley with a stream running down it.",
        "<strong>Bagala Phedi (4,115 m)</strong> is a camp on the valley floor below the pass. Around 7 hours. Overnight camping at Bagala Phedi.",
      ),
    },
    {
      title: "Trek from Bagala Phedi (4,115 m) to Ringmo and Phoksundo Lake (3,640 m)",
      elevation: "3,640 m",
      accommodation: "Ringmo",
      placeDescription: "A Bon village of flat-roofed stone houses on the shore of Phoksundo Lake.",
      lng: 82.9365,
      lat: 29.1703,
      html: p(
        "The day the trek arrives at its most famous destination.",
        "The trail descends the valley and turns north-west, crossing a final shoulder before <strong>Phoksundo Lake (3,640 m)</strong> comes into view below — a sheet of impossible turquoise held between cliffs at the foot of the Kanjiroba range. After two weeks of ochre and grey plateau, the colour is genuinely startling.",
        "<strong>Ringmo</strong> is a compact village of flat-roofed stone houses with juniper stacked on the walls, and the Bon monastery of <strong>Thashung Gompa</strong> on the shore, built around 900 years ago to protect the animals of the valley.",
        "There are lodges here. After the plateau camps, a room and a proper kitchen feel like considerable luxury, and the afternoon is free to walk the shore.",
        "Around 5–6 hours. Overnight at Ringmo.",
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
        "Out of the high country and down into forest for the first time in two weeks.",
        "The trail descends the steep stone staircase beside <strong>Phoksundo waterfall</strong>, at 167 m the highest in Nepal, with the valley opening below. It is exposed in places and demands attention, and poles help.",
        "Below the falls the route follows the Suli Gad down through Sanduwa and Rechi into the gorge, and the change is dramatic: juniper gives way to blue pine, then to Himalayan forest, and the air thickens with every hour.",
        "After a fortnight above the treeline the smell of the forest and the noise of birds are the things everyone comments on.",
        "<strong>Chhepka (2,665 m)</strong> is a clearing with a few lodges. Around 6–7 hours. Overnight at Chhepka.",
      ),
    },
    {
      title: "Trek from Chhepka (2,665 m) to Juphal (2,475 m)",
      elevation: "2,475 m",
      accommodation: "Juphal",
      placeDescription: "A hillside village above the Thuli Bheri with the airstrip that serves Dolpa district.",
      lng: 82.8201,
      lat: 28.9797,
      html: p(
        "The last walking day, down the gorge and out of the national park.",
        "The trail follows the Suli Gad south past the park checkpoint at Sulighat and into farmland — barley and buckwheat terraces, apricot trees, water mills on the side streams, and villages that feel almost tropical after Dolpo.",
        "At the confluence the route joins the <strong>Thuli Bheri</strong> and follows it west below Dunai, then climbs the terraced hillside to the airstrip. It is around 400 m of ascent at the end of a long trek, and it is felt.",
        "<strong>Juphal (2,475 m)</strong> is a strip of village along the runway with a few lodges and a view down the valley.",
        "This is where the crew and pack animals finish and where tips are given — after three weeks it is a substantial farewell. Around 6–7 hours. Overnight at Juphal.",
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
        "The aircraft drops off the hillside and out over the foothills to <strong>Nepalgunj (150 m)</strong> in about 45 minutes, and after a wait on the ground you connect to the hour-long flight back to <strong>Kathmandu (1,400 m)</strong>.",
        "The temperature change is the memorable part: from a frozen tent five days ago to the heat of the Terai and then the mild valley air of the capital, all in one morning.",
        "Transfer to your hotel, with the rest of the day yours. If the Juphal flight does not operate today, this is exactly what tomorrow's spare day exists for. Overnight in Kathmandu.",
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
        "Dolpo itineraries without a spare day are the ones that end with a missed international connection, so this is part of the plan rather than padding.",
        "If you came out of Juphal yesterday, today is yours. <strong>Boudhanath</strong> in the late afternoon is the obvious choice after three weeks in Tibetan Buddhist and Bon country. <strong>Patan Durbar Square</strong> and its museum or the old town at <strong>Bhaktapur</strong> fill a day equally well, and Thamel handles the shopping.",
        "Most groups have their celebration dinner with the guides tonight. Overnight in Kathmandu.",
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
        "You have crossed the trans-Himalaya on foot from the Kali Gandaki to the Suli Gad, over five passes and through villages that see a handful of outsiders a year. Very few people walk this line. If Dolpo has taken hold, the Upper Dolpo circuit to Shey Gompa and the Humla Limi valley in the far west are where it goes next. Safe travels.",
      ),
    },
  ],
};
