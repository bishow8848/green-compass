/**
 * Region: Nepal Village Tours.
 *
 * Community homestay programmes rather than hotel itineraries. All three are
 * run by the villages themselves, which is the point of them: the money stays
 * in the household you sleep in.
 */
import { KATHMANDU, KTM_PLACE, POKHARA, PKR_PLACE, p, type Tour } from "./types";

const REGION = "Nepal Village Tours";

const GHALEGAUN = { lng: 84.2789, lat: 28.3247 };
const GHANPOKHARA = { lng: 84.2830, lat: 28.3400 };
const SIRUBARI = { lng: 83.7590, lat: 28.0350 };
const BESISAHAR = { lng: 84.3761, lat: 28.2313 };
const BANDIPUR = { lng: 84.4110, lat: 27.9350 };

const HOMESTAY_SECTIONS = [
  {
    heading: "How a Community Homestay Works",
    content:
      "<p>You stay in a family house, not a lodge. The village runs a rota so that visitors are shared between households rather than concentrated on the two or three with the best rooms, and the income is split between the family hosting you and a community fund that maintains the trails, the school and the water supply.</p><p>Rooms are simple and clean — a bed with proper bedding, a shared washing area, and in most houses a squat toilet outside the main building. You eat what the family eats, sitting in their kitchen. It is a good deal more personal than a hotel and a good deal less private, and that trade is the whole experience.</p>",
  },
  {
    heading: "Best Time to Visit",
    content:
      "<p><strong>October to April</strong> covers the best of it. Autumn brings the clearest mountain views and the harvest, which is when the villages are busiest and most interesting. Winter at these altitudes is mild in the day and cold at night, with superb visibility and almost no other visitors.</p><p><strong>March and April</strong> bring rhododendron on the ridges above the villages and a slower farming calendar, which means more time with your hosts. The monsoon from June to September makes the trails slippery and hides the mountains, though the terraces are at their greenest and it is the most beautiful time for photography if you accept the rain.</p>",
  },
  {
    heading: "What to Bring",
    content:
      "<p>Pack light and practically: comfortable walking shoes, layers for cool evenings, a warm jacket between November and February, a torch for the paths after dark, and a power bank — electricity reaches these villages but cuts out. Modest clothing that covers shoulders and knees is appreciated in the houses and at the temples.</p><p>Small gifts are welcome but cash tips to individual families are discouraged because they undercut the rota system; the community fund is the right route and your guide will show you where it is. Bring your own toiletries and any medication you need, as there are no shops beyond a few basics.</p>",
  },
  {
    heading: "Food and Drinking Water",
    content:
      "<p>Meals are cooked on a wood or gas stove in the family kitchen: <em>dal bhat</em> with seasonal vegetables from the terraces, <em>gundruk</em>, pickles, and buffalo curd or local chicken when there is an occasion. Portions are large and refills are automatic. Vegetarian is easy; tell us in advance about any other requirement so the household can plan.</p><p>Water comes from a spring-fed tap. It is generally good but treat it with tablets, a filter or a UV pen as you would anywhere on a trek. Locally brewed <em>raksi</em> and millet beer will be offered in most houses and are part of the hospitality.</p>",
  },
];

const HOMESTAY_FAQS = [
  { question: "What are the rooms and toilets actually like?", answer: "A simple bedroom in the family house with a proper bed, mattress and blankets, usually shared with one other traveller from your group. Washing is at a tap or in a shared bathroom, and most houses have an outside squat toilet. Some households now have a Western-style toilet; we can request one if you need it." },
  { question: "Do the families speak English?", answer: "A few words, usually from younger family members. Your guide stays with the group throughout and translates, which is what turns a night's accommodation into a conversation. Evenings in the kitchen with the guide interpreting are what most visitors remember." },
  { question: "Is this suitable for children or older travellers?", answer: "Very — the villages are used to hosting families and the walking is short and optional. The things to be ready for are the squat toilets, the cold at night in winter, and the earlier rhythm of a farming household, which starts before six." },
  { question: "How much walking is involved?", answer: "Between one and three hours on any given day, on village trails and terrace paths, and none of it is compulsory. The tours are built around staying in the villages rather than covering ground, so anyone who would rather sit in the sun and watch the valley can do exactly that." },
  { question: "Where does my money go?", answer: "The homestay fee is split between the host family and a village fund that pays for trail repair, the school and the water system. That structure is the reason these programmes exist and why we prefer them to lodges owned from outside the district." },
  { question: "Can I help with the farm work?", answer: "Yes, and families are usually delighted if you ask. Depending on the month that might be planting or cutting rice, grinding millet, feeding buffalo or making curd. Ask through your guide rather than picking up a tool unannounced." },
  { question: "Is there mobile signal and electricity?", answer: "NTC and Ncell reach all three villages and there is mains electricity, though power cuts are routine and Wi-Fi is rare or slow. Charge devices when you can and bring a power bank." },
  { question: "What should I not do as a guest?", answer: "Don't enter the kitchen hearth area unless invited, don't step over food or someone's legs, use your right hand for eating and passing things, and ask before photographing people or inside the house. Remove your shoes at the door. Your guide briefs the group properly before you arrive." },
];

export const ghalegaunTour: Tour = {
  region: REGION,
  price: 385,
  difficulty: "easy",
  maxAltitude: 2100,
  center: [84.28, 28.33],
  zoom: 11,
  content: {
    slug: "ghalegaun-ghanpokhara-village-tour",
    title: "Ghalegaun–Ghanpokhara Village Tour",
    overview:
      "<p><strong>Ghalegaun</strong> sits at 2,100 m on a ridge in Lamjung, facing the whole Annapurna range across the Marsyangdi valley, and it is the village that started community homestay tourism in Nepal. The programme was set up in the 1990s, has won national awards since, and it still runs the way it was designed: a rota of some forty households, a community fund, and no hotels.</p><p>The tour pairs Ghalegaun with neighbouring <strong>Ghanpokhara</strong>, an hour along the same ridge, so you see two Gurung villages rather than one. Between them there are terraces, rhododendron forest, a Gurung museum, and a view that runs from <strong>Manaslu</strong> through <strong>Lamjung Himal</strong> and <strong>Annapurna II</strong> to <strong>Machhapuchhre</strong>. Evenings are spent with the family you are staying with and, most nights, a Gurung dance in the village square.</p>",
    highlights: [
      ["Nepal's First Homestay Village", "Stay in the community programme that has been running in Ghalegaun since the 1990s."],
      ["The Annapurna Range Across the Valley", "Wake to Manaslu, Lamjung Himal, Annapurna II and Machhapuchhre from the ridge."],
      ["Two Gurung Villages", "Walk the ridge to Ghanpokhara and stay in both rather than seeing one from a bus."],
      ["Gurung Culture and Dance", "An evening of Ghatu and Krishna Charitra dance performed by the village."],
      ["Money That Stays in the Village", "A rota system and a community fund rather than an outside-owned lodge."],
    ],
    sections: HOMESTAY_SECTIONS,
    faqs: HOMESTAY_FAQS,
    inclusions: {
      transport: ["Private vehicle from Kathmandu or Pokhara to Ghalegaun and back, via Besisahar."],
      accommodation: ["Two nights in community homestays at Ghalegaun and Ghanpokhara.", "One night at a hotel in Besisahar or Bandipur with breakfast."],
      meals: ["All meals in the villages, cooked by your host family."],
      entrance: "Village entry contribution and the Gurung museum fee.",
      extra: ["Gurung cultural dance evening in the village square.", "Guided walks on the ridge and terrace trails."],
    },
    exclusions: { extra: ["Locally brewed raksi and other alcoholic drinks."] },
    fixedDepartureDay: "friday",
    itineraryDescription: "Four days on the Lamjung ridge staying with Gurung families in Ghalegaun and Ghanpokhara, facing the Annapurna range.",
    inExDescription: "Private vehicle transfers, homestay and hotel nights, all village meals, entry contributions, the cultural evening and a licensed guide are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Ghalegaun Ghanpokhara Village Tour – Gurung Homestay in Lamjung",
      description: "A four-day Gurung homestay tour in Ghalegaun and Ghanpokhara, Nepal's original community tourism villages, facing the Annapurna range.",
      keywords: "Ghalegaun homestay, Ghanpokhara village tour, Gurung homestay Nepal, Lamjung village tour, community tourism Nepal",
      tags: "Village Tours, Homestay, Lamjung, Gurung Culture, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive to Ghalegaun (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Ghalegaun",
      placeDescription: "A Gurung village at 2,100 m on a Lamjung ridge, facing the Annapurna range across the Marsyangdi.",
      ...GHALEGAUN,
      html: p(
        "The drive leaves after breakfast on the Prithvi Highway and turns north at Dumre for <strong>Besisahar</strong>, the district headquarters of Lamjung, then climbs a rough hill road onto the ridge — six to seven hours from Kathmandu, four from Pokhara.",
        "The last hour is steep and slow, and the reward arrives all at once: the road tops out at <strong>Ghalegaun (2,100 m)</strong> and the whole Annapurna range is across the valley in front of you.",
        "Your host family meets the group and shows you the house. The rest of the afternoon is for tea, a walk around the village, and the small <strong>Gurung museum</strong> that the community runs. After dinner in the kitchen there is usually dancing in the square — Ghatu and Krishna Charitra, performed by the villagers rather than for a stage.",
        "Overnight in a homestay at Ghalegaun.",
      ),
    },
    {
      title: "Sunrise, village life and the walk to Ghanpokhara (2,180 m)",
      elevation: "2,180 m",
      accommodation: "Ghanpokhara",
      placeDescription: "A Gurung village on the same Lamjung ridge as Ghalegaun, an hour further along the crest.",
      ...GHANPOKHARA,
      html: p(
        "Up before the sun for the viewpoint above the village. On a clear morning the light works east to west along the range — <strong>Manaslu (8,163 m)</strong>, <strong>Himalchuli</strong>, <strong>Lamjung Himal</strong>, <strong>Annapurna II</strong> and the fishtail of <strong>Machhapuchhre</strong> — with the Marsyangdi valley still in shadow below.",
        "The morning is spent in the village: the terraces, the water mill, the school, and whatever the farming calendar has people doing that week. If you want to help with the millet or the buffalo, ask through your guide and you will be put to work.",
        "After lunch the trail follows the ridge for an hour or so to <strong>Ghanpokhara (2,180 m)</strong>, a smaller and quieter village with an older feel and the same view.",
        "Overnight in a homestay at Ghanpokhara.",
      ),
    },
    {
      title: "Ridge walk and drive down to Besisahar (760 m)",
      elevation: "760 m",
      accommodation: "Besisahar",
      placeDescription: "The district headquarters of Lamjung on the Marsyangdi, and the road gateway to the Annapurna Circuit.",
      ...BESISAHAR,
      html: p(
        "A morning walk on the ridge above Ghanpokhara through rhododendron and oak forest — in March and April this is in full flower — with the option of climbing higher towards the pastures for a wider view.",
        "Back for lunch with your host family and the farewells, which at the end of two nights in someone's kitchen tend to take a while.",
        "The vehicle drops off the ridge in the afternoon to <strong>Besisahar (760 m)</strong> on the Marsyangdi, where the night is in a hotel — hot shower, Wi-Fi and a menu, all of which feel novel after two days in the villages.",
        "Overnight at Besisahar.",
      ),
    },
    {
      title: "Drive to Kathmandu (1,400 m) or Pokhara",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "A relaxed start and the drive south down the Marsyangdi to Dumre, where the road meets the Prithvi Highway.",
        "From there it is around five hours east to <strong>Kathmandu (1,400 m)</strong> or two hours west to Pokhara, whichever suits your onward plans. There is a lunch stop on the highway and, if there is time and interest, a detour up to <strong>Bandipur</strong> — a restored Newar trading town on a ridge above the road, and a good final stop.",
        "You arrive in the late afternoon and transfer to your hotel.",
      ),
    },
  ],
};

export const himalayanVillageTour: Tour = {
  region: REGION,
  price: 495,
  difficulty: "easy",
  maxAltitude: 2100,
  center: [84.1, 28.2],
  zoom: 9.5,
  content: {
    slug: "himalayan-village-tour",
    title: "Himalayan Village Tour",
    overview:
      "<p>The <strong>Himalayan Village Tour</strong> strings together three very different communities in the middle hills — the Gurung ridge at <strong>Ghalegaun</strong>, the restored Newar trading town of <strong>Bandipur</strong>, and the Magar homestay village of <strong>Sirubari</strong> in Syangja — so that you see how varied hill Nepal actually is rather than treating one village as representative.</p><p>Each is a night or two in local houses with the family you eat with, and between them the drives run through terraced country most visitors only see from a tourist bus window. The mountains are constant: Manaslu and Annapurna from the Lamjung ridge, the Marsyangdi and Seti valleys from Bandipur's clifftop, and the Annapurna wall again from Sirubari's pine forest.</p>",
    highlights: [
      ["Three Communities, Three Cultures", "Gurung, Newar and Magar villages in one route rather than one village twice."],
      ["Bandipur's Restored Bazaar", "A car-free Newar trading town on a clifftop ridge, saved by its own residents."],
      ["Sirubari's Magar Homestays", "The village that pioneered organised homestay tourism in Nepal in 1997."],
      ["The Annapurna Range Throughout", "Mountain views from every one of the three villages on a clear day."],
      ["Community-Run Accommodation", "Family houses and village funds rather than hotels owned from outside."],
    ],
    sections: HOMESTAY_SECTIONS,
    faqs: HOMESTAY_FAQS,
    inclusions: {
      transport: ["Private vehicle for the full route from Kathmandu through Lamjung, Bandipur and Syangja to Pokhara."],
      accommodation: ["Two nights in community homestays at Ghalegaun and Sirubari.", "One night at a heritage inn in Bandipur with breakfast.", "One night at a hotel in Pokhara with breakfast."],
      meals: ["All meals in the homestay villages, cooked by your host families."],
      entrance: "Village entry contributions and museum fees along the route.",
      extra: ["Gurung and Magar cultural evenings in the villages.", "Guided walks in each village."],
    },
    exclusions: { extra: ["Lunch and dinner in Bandipur and Pokhara.", "Locally brewed raksi and other alcoholic drinks."] },
    fixedDepartureDay: "saturday",
    itineraryDescription: "Six days through three hill communities — Gurung Ghalegaun, Newar Bandipur and Magar Sirubari — finishing in Pokhara.",
    inExDescription: "Private vehicle for the whole route, homestay and hotel nights, village meals, entry contributions, cultural evenings and a licensed guide are included, while international flights, visa, insurance, town meals, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Himalayan Village Tour – Gurung, Newar and Magar Homestays",
      description: "A six-day village tour through Ghalegaun, Bandipur and Sirubari, staying with Gurung, Newar and Magar families in the Nepali hills.",
      keywords: "Himalayan village tour, Nepal homestay tour, Ghalegaun Bandipur Sirubari, Gurung Magar Newar villages, community tourism Nepal",
      tags: "Village Tours, Homestay, Cultural Tour, Lamjung, Syangja, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive to Ghalegaun (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Ghalegaun",
      placeDescription: "A Gurung village at 2,100 m on a Lamjung ridge, facing the Annapurna range across the Marsyangdi.",
      ...GHALEGAUN,
      html: p(
        "The Prithvi Highway west from Kathmandu, then north at Dumre through Besisahar and up the hill road onto the Lamjung ridge — six to seven hours with a lunch stop.",
        "<strong>Ghalegaun (2,100 m)</strong> arrives with the Annapurna range laid out across the valley. Your host family shows you the house and the afternoon is free for the village and its Gurung museum.",
        "Dinner in the family kitchen, and after it the village usually dances — Ghatu and Krishna Charitra, performed for the community as much as for you.",
        "Overnight in a homestay at Ghalegaun.",
      ),
    },
    {
      title: "Sunrise at Ghalegaun and drive to Bandipur (1,030 m)",
      elevation: "1,030 m",
      accommodation: "Bandipur",
      placeDescription: "A restored Newar trading town on a clifftop ridge above the Marsyangdi valley.",
      ...BANDIPUR,
      html: p(
        "Sunrise from the viewpoint above the village, with the light moving along Manaslu, Lamjung Himal, Annapurna II and Machhapuchhre in turn.",
        "The morning is village time — the terraces, the mill, the school — and then the vehicle drops back to the highway and climbs to <strong>Bandipur (1,030 m)</strong>.",
        "Bandipur is a complete change: a Newar trading town from the Kathmandu–Tibet route, stranded when the highway bypassed it and since restored by its own residents. The main street is <strong>car-free</strong>, the shopfronts are original, and the Silkworm and Khadga Devi temples sit at either end.",
        "The Tundikhel viewpoint at the edge of the ridge gives a straight drop into the Marsyangdi valley and the Annapurnas beyond. Overnight at a heritage inn in Bandipur.",
      ),
    },
    {
      title: "Bandipur to Sirubari (1,700 m)",
      elevation: "1,700 m",
      accommodation: "Sirubari",
      placeDescription: "A Magar village in Syangja at 1,700 m, the first organised homestay community in Nepal.",
      ...SIRUBARI,
      html: p(
        "A morning in Bandipur before the roads get busy — the bazaar, the Bindebasini temple, and for anyone interested a short walk to the Siddha Gufa, one of the largest caves in Nepal.",
        "The drive continues west and then south into <strong>Syangja</strong>, leaving the highway for hill roads through terraced farmland and pine.",
        "<strong>Sirubari (1,700 m)</strong> is a Magar village of around fifty stone-and-slate houses, and it began Nepal's organised homestay movement in 1997. The village is noticeably tidy — paved lanes, no litter, flowering plants at every door — because the community decided it would be.",
        "You are welcomed with a formal reception, garlands and a Magar dance, which is how every guest arrives here. Overnight in a homestay at Sirubari.",
      ),
    },
    {
      title: "A full day in Sirubari",
      elevation: "1,700 m",
      accommodation: "Sirubari",
      placeDescription: "A Magar village in Syangja at 1,700 m, the first organised homestay community in Nepal.",
      ...SIRUBARI,
      html: p(
        "A whole day in the village, which is the point of coming. Sunrise from the ridge above gives <strong>Dhaulagiri</strong>, <strong>Annapurna</strong> and <strong>Machhapuchhre</strong> in a line above the Modi valley.",
        "The morning walk goes through the pine and rhododendron forest the community protects — Sirubari's forest user group is one of the older ones in Nepal and the woodland shows it.",
        "The afternoon is for the village itself: the Magar households, the mill, the temple, and whatever farming is in season. Many families are ex-Gurkha, and the conversations about service in Britain, Singapore and India are among the more surprising things you take away.",
        "Another evening in the kitchen with your hosts. Overnight in a homestay at Sirubari.",
      ),
    },
    {
      title: "Drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Farewells in the village after breakfast — Sirubari sends guests off as formally as it receives them — and then the drive north.",
        "The road drops out of Syangja and joins the Siddhartha Highway up the Seti valley to <strong>Pokhara (822 m)</strong>, around two to three hours.",
        "The afternoon is free by <strong>Phewa Lake</strong>: a boat to the Tal Barahi temple on its island, the lakeside promenade, or simply a long lunch with the Annapurnas across the water.",
        "Overnight in Pokhara.",
      ),
    },
    {
      title: "Sarangkot sunrise and departure",
      elevation: "1,592 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "An early drive up to <strong>Sarangkot (1,592 m)</strong> for sunrise over the Annapurnas — Dhaulagiri, Annapurna South, Machhapuchhre and Manaslu across a single horizon, with Phewa Lake in the mist below.",
        "Breakfast back at the hotel, then the morning is free for the International Mountain Museum, the Gupteshwor cave and Devi's Fall, or the lakeside shops.",
        "Your onward arrangements are up to you: a 25-minute flight or a six-hour drive back to Kathmandu, both of which we can arrange.",
      ),
    },
  ],
};

export const sirubariTour: Tour = {
  region: REGION,
  price: 325,
  difficulty: "easy",
  maxAltitude: 1700,
  center: [83.79, 28.09],
  zoom: 11,
  content: {
    slug: "sirubari-village-tour",
    title: "Sirubari Village Tour",
    overview:
      "<p><strong>Sirubari</strong> is a Magar village of some fifty stone-and-slate houses on a ridge in Syangja, two and a half hours from Pokhara, and in 1997 it became the first organised homestay destination in Nepal. Everything that followed — Ghalegaun, Sirubari's many imitators — was modelled on what this community set up.</p><p>The village is strikingly well kept: paved lanes, no litter, flowers at every doorway, and a protected forest of pine and rhododendron above it that the community forest user group has managed for decades. Guests arrive to a formal welcome with garlands and a Magar dance, stay in family houses on a strict rota, and leave with a send-off. In between there are ridge walks, an Annapurna skyline, and a great many conversations with retired Gurkha soldiers.</p>",
    highlights: [
      ["Nepal's First Homestay Village", "Stay in the community that started organised village tourism here in 1997."],
      ["A Magar Welcome and Farewell", "Arrive to garlands and a village dance, and be seen off the same way."],
      ["Dhaulagiri to Machhapuchhre", "A ridge-top sunrise over the whole western Annapurna skyline."],
      ["Community-Managed Forest", "Walk the pine and rhododendron woodland the village has protected for decades."],
      ["Two Hours from Pokhara", "A genuine village stay within an easy drive of the lakeside."],
    ],
    sections: HOMESTAY_SECTIONS,
    faqs: HOMESTAY_FAQS,
    inclusions: {
      transport: ["Private vehicle from Pokhara to Sirubari and back."],
      accommodation: ["Two nights in a community homestay in Sirubari."],
      meals: ["All meals in the village, cooked by your host family."],
      entrance: "Village entry contribution to the community fund.",
      extra: ["Formal Magar welcome and cultural dance evening.", "Guided walks in the community forest and on the ridge."],
    },
    exclusions: { extra: ["Locally brewed raksi and other alcoholic drinks."] },
    fixedDepartureDay: "sunday",
    itineraryDescription: "Three days in a Magar homestay village in Syangja, the community that pioneered village tourism in Nepal.",
    inExDescription: "Private vehicle transfers from Pokhara, homestay accommodation, all village meals, the community contribution, cultural evening and a licensed guide are included, while international flights, visa, insurance, drinks and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Sirubari Village Tour – Magar Homestay near Pokhara",
      description: "A three-day Magar homestay in Sirubari, Syangja — the village that started organised community tourism in Nepal in 1997.",
      keywords: "Sirubari village tour, Sirubari homestay, Magar village Nepal, Syangja homestay, community tourism Pokhara",
      tags: "Village Tours, Homestay, Syangja, Magar Culture, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive from Pokhara to Sirubari (1,700 m)",
      elevation: "1,700 m",
      accommodation: "Sirubari",
      placeDescription: "A Magar village in Syangja at 1,700 m, the first organised homestay community in Nepal.",
      ...SIRUBARI,
      html: p(
        "The drive leaves Pokhara after breakfast on the Siddhartha Highway south down the Seti valley, then turns off onto hill roads into <strong>Syangja</strong> — terraced farmland, pine ridges and very little traffic. Two and a half to three hours in total.",
        "<strong>Sirubari (1,700 m)</strong> is reached on foot for the last stretch, which the village prefers, and you arrive to a formal welcome: garlands, tika, and a Magar dance in the square. Every guest is received this way.",
        "Your host family takes you to the house and feeds you. The rest of the afternoon is for walking the lanes — the village is exceptionally tidy, which is a deliberate community decision rather than an accident — and meeting people.",
        "Overnight in a homestay at Sirubari.",
      ),
    },
    {
      title: "A full day in Sirubari",
      elevation: "1,700 m",
      accommodation: "Sirubari",
      placeDescription: "A Magar village in Syangja at 1,700 m, the first organised homestay community in Nepal.",
      ...SIRUBARI,
      html: p(
        "Early to the ridge above the village for sunrise. The skyline runs <strong>Dhaulagiri</strong>, <strong>Annapurna South</strong>, <strong>Machhapuchhre</strong> and <strong>Annapurna II</strong>, with the Modi and Seti valleys filling with mist below.",
        "The morning walk goes up through the <strong>community forest</strong> — pine, rhododendron and oak, protected by the village's forest user group for decades and noticeably healthier than the woodland outside it. Your guide explains how the user-group system works, which is one of Nepal's genuine conservation successes.",
        "The afternoon is unstructured village time: the water mill, the temple, the school, and whatever the season has people doing on the terraces. Many households have a Gurkha service history and the stories are worth asking about.",
        "A second evening in the family kitchen. Overnight in a homestay at Sirubari.",
      ),
    },
    {
      title: "Village farewell and drive back to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Breakfast with your hosts and then the village send-off, which is as formal as the welcome and takes longer than you expect.",
        "The walk down to the road and the drive north through Syangja to the Siddhartha Highway and up the Seti valley.",
        "You reach <strong>Pokhara (822 m)</strong> around midday, leaving the afternoon free at the lakeside — a boat on Phewa, the Tal Barahi temple on its island, or the International Mountain Museum.",
        "Overnight in Pokhara.",
      ),
    },
  ],
};

export const villageTours: Tour[] = [ghalegaunTour, himalayanVillageTour, sirubariTour];
