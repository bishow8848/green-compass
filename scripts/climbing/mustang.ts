import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, PKR_PLACE, p,
  type Climb, type ClimbDay,
} from "./types";
import {
  ABI_BC, ABI_HIGH_CAMP, ABI_PEAK, CHARANG, CHELE, DAMODAR_KUNDA, GHAMI, GHUNA_KHARKA, JOMSOM,
  KAGBENI, LO_MANTHANG, LURI_GOMPA, SARIBUNG_BC, SARIBUNG_HIGH_CAMP, SARIBUNG_PEAK, YARA,
} from "./places";

/**
 * The Damodar Himal, behind Upper Mustang.
 *
 * Both peaks here are reached the same way: a flight into the Kali Gandaki, a
 * week through the restricted area of Upper Mustang to Lo Manthang and Yara,
 * and then out onto the Tibetan plateau to the sacred lakes of Damodar Kunda.
 * It is the longest approach to any 6,000 m peak in this catalogue and the
 * strangest — high desert rather than mountain country, with cave gompas,
 * eroded canyons and a walled medieval capital on the way.
 */

const MUSTANG_PERMITS =
  "Upper Mustang Restricted Area Permit and Annapurna Conservation Area Permit (ACAP)";

const MUSTANG_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

/**
 * The Upper Mustang approach, shared by Saribung and Abi: arrival, the
 * Kathmandu working day, the drive to Pokhara, the flight to Jomsom, and eight
 * days through the restricted area to Damodar Kunda with acclimatisation days
 * at Lo Manthang and the lakes. Thirteen days, from a lakeside city at 822 m to
 * a sacred lake on the Tibetan plateau at 4,890 m.
 */
function mustangApproach(planWord: string): ClimbDay[] {
  return [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Thamel's gear shops are a few minutes' walk away and stock most of what a climber discovers they have left at home.",
        "Your guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Restricted Area Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the Upper Mustang permits are issued and the equipment is checked.",
      ...KATHMANDU,
      html: p(
        `Your guide runs the full briefing at the hotel: the ${planWord} plan, the week through Upper Mustang, the acclimatisation profile and the summit day.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over climbing layers, and anything unsuitable swapped for rental kit here rather than discovered on the plateau.",
        "Our office lodges the <strong>Upper Mustang Restricted Area Permit</strong>, which is charged per person for a fixed ten-day period with a daily rate beyond it, along with the climbing permit and ACAP. It names a licensed guide and requires a minimum of two trekkers. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "West out of the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river through gorge country with a lunch stop at a riverside restaurant.",
        "The drive covers roughly 200 km and takes most of the day. If you would rather not spend it on the road, the 25-minute flight is available as an add-on.",
        "<strong>Pokhara (822 m)</strong> arrives in the late afternoon on the shore of Phewa Lake. The crew does the final load sort here — everything for three weeks of camping goes north on tomorrow's flight. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Jomsom (2,720 m) and Trek to Kagbeni (2,810 m)",
      elevation: "2,810 m",
      accommodation: "Kagbeni",
      placeDescription: "A medieval village at the gateway to Upper Mustang, where the restricted area begins.",
      ...KAGBENI,
      html: p(
        "An early flight north from Pokhara into the <strong>Kali Gandaki</strong> — twenty minutes through the deepest gorge on earth, between Dhaulagiri and Annapurna, and one of the great scheduled flights anywhere.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang. After the formalities the group walks north up the broad grey riverbed into the wind that funnels up this valley every day of the year.",
        "<strong>Kagbeni (2,810 m)</strong> is a compact medieval village of mud-brick alleys, a red gompa and irrigation channels running under the streets. It sits at the checkpoint where the <strong>Upper Mustang restricted area</strong> begins. Around 3 hours. Overnight at Kagbeni.",
      ),
    },
    {
      title: "Trek from Kagbeni (2,810 m) to Chele (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chele",
      placeDescription: "A small village of whitewashed houses above the Kali Gandaki in Upper Mustang.",
      ...CHELE,
      html: p(
        "The first day inside the restricted area, and the landscape changes character immediately.",
        "The trail follows the Kali Gandaki north through <strong>Tangbe</strong> and <strong>Chhusang</strong>, villages of whitewashed houses, buckwheat fields and apple orchards set against cliffs of ochre, grey and red. The rock formations above Chhusang are eroded into columns and fins by the wind.",
        "Beyond Chhusang the river disappears into a canyon and the trail climbs away from it, crossing to the east bank through a natural rock tunnel to <strong>Chele (3,050 m)</strong>. Around 5 to 6 hours. Overnight at Chele.",
      ),
    },
    {
      title: "Trek from Chele (3,050 m) to Ghami (3,520 m)",
      elevation: "3,520 m",
      accommodation: "Ghami",
      placeDescription: "A large village of flat-roofed houses beside the longest mani wall in Nepal.",
      ...GHAMI,
      html: p(
        "A long day over three passes, the classic Mustang rhythm of climb, cross, descend and climb again.",
        "The trail climbs steeply out of Chele to the Taklam La and then the Dajori La, with the canyon country opening into a plateau of eroded ridges. Every pass is marked with cairns and prayer flags, and the village of <strong>Samar</strong> and the cave gompa at Rangbyung come before the final climb to the Nyi La.",
        "<strong>Ghami (3,520 m)</strong> is a substantial village of flat-roofed houses among poplar trees and barley fields, and just beyond it stands the <strong>longest mani wall in Nepal</strong>, several hundred metres of carved stone. Around 7 hours. Overnight at Ghami.",
      ),
    },
    {
      title: "Trek from Ghami (3,520 m) to Charang (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Charang",
      placeDescription: "A village beneath a red-walled dzong and gompa on a cliff above the Charang Khola.",
      ...CHARANG,
      html: p(
        "Across the Ghami Khola and past the long mani wall, then up to the <strong>Cho La</strong> and across a bare, wind-scoured plateau of red and ochre rock.",
        "The colours here are the reason people photograph Mustang: the cliffs at <strong>Dhakmar</strong> are a deep red said in local legend to be stained with the blood of a demoness subdued by Guru Rinpoche.",
        "<strong>Charang (3,560 m)</strong> sits beneath a red-walled <strong>dzong and gompa</strong> on a cliff above the river, one of the most striking building groups in Mustang and still in use. Around 5 hours. Overnight at Charang.",
      ),
    },
    {
      title: "Trek from Charang (3,560 m) to Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of the former Kingdom of Lo, on the plateau of Upper Mustang.",
      ...LO_MANTHANG,
      html: p(
        "North across the plateau on a broad trail, climbing to the <strong>Lo La</strong> from which the walled city appears below — a compact rectangle of white walls on a bare brown plain, with the Tibetan border a few kilometres beyond it.",
        "<strong>Lo Manthang (3,840 m)</strong> is the capital of the former <strong>Kingdom of Lo</strong>, which retained its monarchy until 2008. About 150 houses stand inside the walls along with the four-storey palace and the monasteries of Jampa, Thubchen and Chodey.",
        "It is one of the very few walled cities left in the Himalaya and it is worth the week of walking on its own. Around 5 hours. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Acclimatisation and Exploration Day at Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of Lo, where the acclimatisation day is spent among its monasteries.",
      ...LO_MANTHANG,
      html: p(
        "An acclimatisation day and a genuinely interesting one. The morning goes to the monasteries inside the walls — <strong>Jampa Lhakhang</strong> with its fifteenth-century mandalas, <strong>Thubchen</strong> with its enormous assembly hall, and <strong>Chodey</strong>, still the working monastery of the city.",
        "In the afternoon we ride or walk north toward the <strong>Choser</strong> cave complexes, where dwellings are cut into the cliff faces on five storeys, and gain a few hundred metres of height on the way.",
        "Horses can be hired here and it is a good way to see the plateau, which is how people have moved across it for a very long time. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Trek from Lo Manthang (3,840 m) to Yara (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Yara",
      placeDescription: "A village on the eastern side of Upper Mustang, the last settlement before the plateau.",
      ...YARA,
      html: p(
        "South-east away from the walled city and off the Mustang circuit onto a trail that carries almost nobody, crossing bare plateau and dropping into the Dhechyang Khola.",
        "The country here is high desert in the fullest sense — no trees, no grass beyond the irrigated fields, and eroded canyons cut into the plateau in reds, ochres and greys.",
        "<strong>Yara (3,650 m)</strong> is a small village of flat-roofed houses and barley plots, and it is the last permanent settlement before the plateau proper. Around 6 to 7 hours. Overnight at Yara.",
      ),
    },
    {
      title: "Trek from Yara (3,650 m) to Ghuna Kharka (4,300 m) via Luri Gompa",
      elevation: "4,300 m",
      accommodation: "Ghuna Kharka",
      placeDescription: "A grazing camp on the plateau east of Yara, on the way to Damodar Kunda.",
      ...GHUNA_KHARKA,
      html: p(
        "A short detour first to <strong>Luri Gompa</strong>, a cave monastery cut into a cliff above the Puyung Khola and reached by a ladder — one of the oldest in Mustang, with a chorten and wall paintings inside the rock.",
        "Then east and up onto the plateau proper, climbing 650 m onto ground that is bare, brown, windy and completely empty.",
        "<strong>Ghuna Kharka (4,300 m)</strong> is a grazing camp used by herders in summer. From here on there are no villages, no lodges and no shelter of any kind. Around 6 hours. Overnight at Ghuna Kharka.",
      ),
    },
    {
      title: "Trek from Ghuna Kharka (4,300 m) to Damodar Kunda (4,890 m)",
      elevation: "4,890 m",
      accommodation: "Damodar Kunda",
      placeDescription: "A chain of sacred lakes on the Tibetan plateau, a Hindu pilgrimage site in the Damodar Himal.",
      ...DAMODAR_KUNDA,
      html: p(
        "East across the plateau, climbing steadily on ground with no trail and no vegetation whatever — grey, brown and ochre gravel under an enormous sky, with the peaks of the Damodar Himal opening ahead.",
        "<strong>Damodar Kunda (4,890 m)</strong> is a chain of small sacred lakes at the foot of the range. They are a <strong>Hindu pilgrimage site</strong> associated with Vishnu, and the shaligram fossils found here are venerated as his aniconic form; Nepali pilgrims walk up in the summer months, which is one of the few times the plateau has anyone else on it.",
        "In the climbing seasons there is nobody. Around 6 to 7 hours. Overnight at Damodar Kunda.",
      ),
    },
    {
      title: "Acclimatisation Day at Damodar Kunda (4,890 m)",
      elevation: "4,890 m",
      accommodation: "Damodar Kunda",
      placeDescription: "The sacred lakes on the plateau, where the acclimatisation day before the climb is spent.",
      ...DAMODAR_KUNDA,
      html: p(
        "Climb high, sleep low. The morning walk goes up the ridge east of the lakes toward <strong>5,300 m</strong> and back, on bare gravel and old snow with the Damodar Himal opening properly ahead.",
        "From the high point the country is extraordinary and almost lunar: the plateau running north into Tibet, the Annapurnas and Dhaulagiri as a distant white wall to the south, and no vegetation or habitation anywhere in view.",
        "Back at the lakes for the afternoon. Your guide takes saturation readings this evening and the crew sorts the loads for base camp. Around 4 to 5 hours. Overnight at Damodar Kunda.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const saribungPeakClimbing: Climb = {
  region: "Mustang Region",
  price: 5650,
  difficulty: "difficult",
  maxAltitude: 6346,
  grade: "PD+",
  center: [84.05, 28.95],
  zoom: 10,
  content: {
    slug: "saribung-peak-climbing",
    title: "Saribung Peak Climbing",
    overview:
      "<p><strong>Saribung Peak (6,346 m)</strong> stands in the <strong>Damodar Himal</strong>, on the Tibetan plateau behind Upper Mustang, and getting to it is most of what makes it remarkable. The approach runs a week through the <strong>restricted area of Upper Mustang</strong> — Kagbeni, the canyon country, the red cliffs of Dhakmar, the walled city of <strong>Lo Manthang</strong> — and then out east across bare plateau to the sacred lakes of <strong>Damodar Kunda</strong>, where the pilgrims go in summer and nobody goes at all in the climbing seasons.</p><p>The climb itself is a clean <strong>PD+</strong>: a glacier approach, a snow slope at 40 to 45 degrees on fixed rope, and a short summit crest. What it asks for is tolerance of a long, dry, high, windy approach and a willingness to camp above 4,800 m for the best part of a week. It is one of the strangest trips in this catalogue and, for a certain kind of climber, the most memorable.</p>",
    highlights: [
      ["Summit Saribung Peak (6,346 m)", "A clean PD+ snow and ice route in the Damodar Himal, on the Tibetan plateau behind Mustang."],
      ["Lo Manthang", "A full day in the walled capital of the former Kingdom of Lo, with its palace and three great monasteries."],
      ["Damodar Kunda (4,890 m)", "Camp beside the sacred lakes at the edge of the plateau, a Hindu pilgrimage site with nobody there out of season."],
      ["The Upper Mustang Restricted Area", "A week through canyon country, cave gompas and red cliffs on a permit that keeps the numbers tiny."],
      ["High Desert Rather Than Mountain Country", "A landscape unlike anywhere else in Nepal — no trees, no grass, and colour in the rock instead."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>May to early June</strong> and <strong>September to mid-October</strong>, which is an unusual pattern and is worth understanding. Mustang sits in the rain shadow of the Annapurna and Dhaulagiri massifs and stays <strong>dry through the monsoon</strong>, so the summer months that close most of Nepal are perfectly walkable here.</p><p>The peak itself is the constraint rather than the approach: it needs settled snow, which means late spring or early autumn. From late October the plateau becomes too cold and windy for comfortable camping, and the Jomsom flights become unreliable. Deep winter is out entirely. Even in season, expect wind every afternoon and temperatures well below freezing at the high camps.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD+</strong>. From <strong>high camp at 5,750 m</strong> the route crosses a glacier roped as a team — crevassed but not badly broken — and then climbs a <strong>snow slope of 40 to 45 degrees</strong> on fixed rope for two to three hours.</p><p>The summit is reached along a <strong>short crest</strong>, taken one at a time, and is broad enough not to present an exposure problem. Nine to twelve hours from high camp. Nothing on the route is technically demanding; what makes the trip hard is the cumulative effect of two weeks in high, dry, windy desert, with everything carried in and nothing to buy above Yara.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required, though previous multi-day trekking above 4,000 m is. The training day at base camp covers crampons, ice axe, jumar, abseil and rope-team travel from the beginning, and the crevassed glacier means rope-team technique matters.</p><p>The acclimatisation is excellent because the approach is long and high: eight days from 2,720 m to 4,890 m with acclimatisation days at <strong>Lo Manthang (3,840 m)</strong> and <strong>Damodar Kunda (4,890 m)</strong>, then two nights at base camp at 5,300 m and one at 5,750 m. By the time you reach the high camp you have been above 3,500 m for a week and above 4,300 m for four days.</p>",
      },
      {
        heading: "Permits, Cost and the Restricted Area",
        content:
          "<p>Upper Mustang is a <strong>restricted area</strong>, and the permit is the largest single component of this trip's cost after the logistics. It is charged per person for a fixed ten-day period with a daily rate beyond it, it names a licensed guide, and it requires a minimum of two trekkers. All of it is included and handled by our office.</p><p>The restriction is why the region is as it is. Numbers are tiny, the villages are not built around tourism, and the walled city of Lo Manthang is a working place rather than an exhibit. It also means there is no realistic way to shorten or cheapen the approach, because the permit is priced by the day whether you are walking or not.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the eight-day approach. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp and factor 50 sunscreen.</p><p>Mustang is dry, bright and <strong>relentlessly windy</strong> from late morning, and the dust is constant — a buff and glasses are not optional, and lip balm and sunscreen matter more here than almost anywhere. We supply all group rope, screws, snow stakes and anchors, and our Sherpas fix the slope. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "Why is the approach so long?", answer: "Because the peak is on the far side of Upper Mustang, and there is no shorter way in. Eight days of walking from Jomsom through the restricted area to Damodar Kunda is the price of admission — and for most people who do this trip, the approach is at least half the reason they came." },
      { question: "Is Upper Mustang worth seeing in its own right?", answer: "Emphatically. It is a Tibetan cultural landscape that has been almost untouched by the last fifty years — a walled medieval capital, cave monasteries cut into cliffs, canyon country in reds and ochres, and villages that were part of an independent kingdom until 2008. Many people trek to Lo Manthang and no further; this itinerary keeps going." },
      { question: "How much is the Upper Mustang permit?", answer: "It is charged per person for a fixed ten-day period with a daily rate beyond it, and it is the largest single item in the trip cost after logistics. It is included in the price, along with ACAP and the climbing permit, and our office handles all of it." },
      { question: "Can we really trek here in the monsoon?", answer: "Yes — Mustang sits in the rain shadow of the Annapurna and Dhaulagiri massifs and stays dry when the rest of Nepal is closed. The peak itself needs settled snow, so we run departures in late spring and early autumn, but the approach is walkable in summer and that is when the pilgrims come to Damodar Kunda." },
      { question: "What is the summit success rate?", answer: "Around 70 to 80 percent on our departures. The gentle grade and the very long acclimatisation profile both help; wind on the summit crest is the main reason for the turn-backs there are." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 5,300 m on the moraine below the Saribung glacier, and high camp at 5,750 m on the glacier itself. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There is no shelter of any kind above Yara." },
      { question: "How cold and windy does it get?", answer: "Days are warm in the sun and nights fall well below freezing from 4,300 m upward, with -20°C at the high camp. The wind is the constant: it gets up every day from late morning and carries dust. It is a drier and windier environment than any other climbing area in this catalogue." },
      { question: "Is there any water on the plateau?", answer: "Very little, and what there is tends to be silty. The crew boils and treats everything, and you should carry two litres and drink four a day — the dry air dehydrates you faster than the altitude does. Bring electrolyte tablets." },
      { question: "Can we ride horses?", answer: "In the Mustang half, yes. Horses can be hired in most villages for a day or a stage and it is a good option if you are tired or simply want to cross the plateau the way local people do. It is not possible above Yara, where the ground is unsuitable." },
      { question: "How does this compare with the Saribung Pass trek?", answer: "The pass trek crosses the Saribung La at 6,042 m into Nar Phu and does not summit the peak; this itinerary climbs Saribung Peak at 6,346 m and returns through Mustang. Both use the same approach as far as Damodar Kunda. If you want the crossing rather than the summit, the trek is the trip." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flight between Pokhara and Jomsom, subject to weather, with jeep transport as the alternative."],
      transport: ["Private tourist bus or car from Kathmandu to Pokhara and back.", "Private jeep transport between Lo Manthang and Jomsom on the walk out."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      trekAccommodation:
        "Lodge and guesthouse accommodation in the Mustang villages as far as Yara, and full tented accommodation beyond it.",
      camping:
        "Tented accommodation from Ghuna Kharka through Damodar Kunda to Saribung base camp (5,300 m) and high camp (5,750 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Saribung Peak, ${MUSTANG_PERMITS}.`,
      sherpa: MUSTANG_SHERPA,
      extra: [
        "Cook and kitchen crew from Yara onward, with all food and fuel carried in — nothing can be bought above the village.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the snow slope and the summit crest by our climbing Sherpas.",
        "Horse and pack-animal transport of group equipment through Mustang, and porters beyond Yara.",
        "A reserve day held for the summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Jomsom flight, or a summit attempt abandoned for conditions.",
    },
    porterDays: 16,
    gearRentalDays: 16,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 25-day itinerary climbing Saribung Peak (6,346 m) in the Damodar Himal, approached through the restricted area of Upper Mustang and Lo Manthang to the sacred lakes of Damodar Kunda.",
    inExDescription:
      "Road transport to Pokhara, the Jomsom flights, Kathmandu and Pokhara hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit, the Upper Mustang restricted area permit and ACAP, a licensed climbing guide with Sherpa support, a cook crew, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a grounded flight are not.",
    bestTime: "May-Jun, Sep-Oct",
    meta: {
      title: "Saribung Peak Climbing (6,346 m) — 25 Days, Upper Mustang | Green Compass Treks",
      description:
        "Climb Saribung Peak (6,346 m) in the Damodar Himal, approached through the restricted area of Upper Mustang, Lo Manthang and the sacred lakes of Damodar Kunda. 25 days on a PD+ snow route.",
      keywords:
        "saribung peak climbing, saribung 6346m, upper mustang climbing, damodar kunda, lo manthang, damodar himal, restricted area climbing nepal",
      tags: "Saribung Peak, Mustang Region, Peak Climbing, 6000m Peak, Upper Mustang, Damodar Kunda",
    },
  },
  days: [
    ...mustangApproach("twenty-five day"),
    {
      title: "Trek from Damodar Kunda (4,890 m) to Saribung Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Saribung Base Camp",
      placeDescription: "A tented base camp on the moraine below the Saribung glacier, on the Tibetan plateau.",
      ...SARIBUNG_BC,
      html: p(
        "South-east from the lakes onto the moraine below the glacier, gaining 400 m on bare gravel and old snow with no trail and no cairns beyond what the crew leaves.",
        "<strong>Saribung Base Camp (5,300 m)</strong> is a tented camp on flat ground below the ice, and it is the highest and coldest place any of our Mustang trips sleeps. The wind here does not stop and the tents are guyed hard.",
        "The afternoon is spent settling in and reading the route: the glacier, the shelf where high camp goes and the snow slope above it. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Saribung Base Camp",
      placeDescription: "The base camp below the glacier, where the climbing skills are taught before the summit push.",
      ...SARIBUNG_BC,
      html: p(
        "The training day, and for most people on this trip it is the first time in crampons. On the glacier ice above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team, ascending fixed line on a jumar, and abseiling</strong>.",
        "Rope-team travel gets the most time, because the glacier above is crevassed and is crossed roped rather than on fixed line.",
        "In the afternoon we walk part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>marking the glacier and fixing the snow slope</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (5,300 m) to Saribung High Camp (5,750 m)",
      elevation: "5,750 m",
      accommodation: "Saribung High Camp",
      placeDescription: "A tented camp at 5,750 m on the Saribung glacier below the summit slope.",
      ...SARIBUNG_HIGH_CAMP,
      html: p(
        "Roped from the moment the group leaves camp. The route climbs onto the <strong>glacier</strong> and works up it on the marked line for three to four hours with a moderate load, weaving past a handful of open crevasses.",
        "<strong>High camp (5,750 m)</strong> is a set of platforms stamped out on the glacier itself, fully exposed to the plateau wind and cold enough that dinner is eaten in a down jacket in the middle of the afternoon.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Saribung Peak (6,346 m) and Descend to Base Camp (5,300 m)",
      elevation: "6,346 m",
      accommodation: "Saribung Base Camp",
      placeDescription: "The 6,346 m summit of Saribung Peak, in the Damodar Himal on the Tibetan plateau.",
      ...SARIBUNG_PEAK,
      html: p(
        "Roped and moving by three in the morning, in cold that is dry and absolute rather than damp. The upper glacier is crossed on the marked line by headlamp.",
        "Then the <strong>snow slope</strong>: 40 to 45 degrees on fixed rope for two to three hours, steady rather than steep, with the sun arriving somewhere around 6,100 m and turning the whole plateau below from grey to gold in about ten minutes.",
        "The summit is reached along a <strong>short crest</strong>, taken one at a time. From the <strong>summit (6,346 m)</strong>: the <strong>Damodar Himal</strong> and the Saribung La immediately around you, the brown Tibetan plateau running north into China, the <strong>Annapurnas and Dhaulagiri</strong> as a white wall to the south, and Manaslu and the Peri Himal east.",
        "The descent abseils the slope and reverses the glacier to high camp and then base camp. Nine to twelve hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Saribung Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Saribung Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...SARIBUNG_BC,
      html: p(
        "The day held in reserve. Wind off the plateau is the usual reason a Saribung attempt is turned back — the summit crest and the high camp are both fully exposed to it — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group starts back west toward Damodar Kunda, banking a day against the Jomsom flight. Overnight at base camp or Damodar Kunda.",
      ),
    },
    {
      title: "Trek from Saribung Base Camp (5,300 m) to Ghuna Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Ghuna Kharka",
      placeDescription: "The grazing camp on the plateau, on the walk out from the Damodar Himal.",
      ...GHUNA_KHARKA,
      html: p(
        "Camp comes down after breakfast and the group descends the moraine west past <strong>Damodar Kunda</strong>, stopping at the lakes for a last look — they are frozen at the edges in both climbing seasons and completely still.",
        "Then west across the plateau on the way in reversed, losing 600 m over bare gravel with the wind at your back for once.",
        "<strong>Ghuna Kharka (4,300 m)</strong> in the late afternoon, and the first ground with any vegetation on it for four days. Around 7 to 8 hours. Overnight at Ghuna Kharka.",
      ),
    },
    {
      title: "Trek from Ghuna Kharka (4,300 m) to Yara (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Yara",
      placeDescription: "The village on the eastern side of Upper Mustang, and the first settlement in five days.",
      ...YARA,
      html: p(
        "Down off the plateau into the canyon country, losing 650 m with the colours coming back into the rock as the ground drops — reds, ochres and greys after four days of grey gravel.",
        "The route passes below <strong>Luri Gompa</strong> again, and it is worth the second look if the group has the legs for the ladder.",
        "<strong>Yara (3,650 m)</strong> is the first permanent settlement since the group left it — houses, barley plots, people, and a guesthouse with a stove. Around 6 hours. Overnight at Yara.",
      ),
    },
    {
      title: "Trek from Yara (3,650 m) to Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of Lo, reached again on the walk out from the plateau.",
      ...LO_MANTHANG,
      html: p(
        "North-west across the plateau back toward the walled city, on the trail the group came out on and with the whole Mustang skyline ahead.",
        "It is easy walking after the plateau and most groups take it slowly, which on this stretch is the right approach — the canyon country between Yara and Lo Manthang is some of the most photographed landscape in Nepal and deserves the time.",
        "<strong>Lo Manthang (3,840 m)</strong> in the afternoon, with a bed, a stove, a menu and the monasteries. The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the horsemen. Around 6 to 7 hours. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Drive from Lo Manthang (3,840 m) to Jomsom (2,720 m)",
      elevation: "2,720 m",
      accommodation: "Jomsom",
      placeDescription: "The district headquarters of Mustang, on the Kali Gandaki riverbed.",
      ...JOMSOM,
      html: p(
        "A jeep takes over today. The rough road south from Lo Manthang follows the plateau and then drops into the Kali Gandaki, retracing in seven hours the ground that took four days to walk on the way up.",
        "It is a spectacular and jarring drive — the passes, the red cliffs at Dhakmar, Ghami's mani wall and the canyon country all go past a window rather than underfoot.",
        "<strong>Jomsom (2,720 m)</strong> in the afternoon, back at the airstrip where the trip started. Around 7 hours. Overnight at Jomsom.",
      ),
    },
    {
      title: "Fly from Jomsom (2,720 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Jomsom flights leave at first light, before the valley wind makes flying impossible — by ten in the morning nothing moves in or out.",
        "Twenty minutes back down the <strong>Kali Gandaki</strong> between Dhaulagiri and Annapurna. If the flights are grounded, a jeep down the gorge is the alternative and is included.",
        "<strong>Pokhara (822 m)</strong> in the morning: lakeside, warm, green and about four thousand metres below where you were four days ago. The afternoon is free. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning by <strong>Phewa Lake</strong> before the road, with the Annapurnas and Machhapuchhre reflected in it on a clear day.",
        "The drive to <strong>Kathmandu</strong> takes most of the day on the Prithvi Highway, following the Trishuli east through gorge country with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on.",
        "Back in Kathmandu in the evening. Your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Lumbini or a Kathmandu valley tour. Safe travels — Abi Peak, next along the Damodar Himal from the same base, and the Saribung La crossing into Nar Phu are the two our returning Mustang climbers most often ask about.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const abiPeakClimbing: Climb = {
  region: "Mustang Region",
  price: 5250,
  difficulty: "challenging",
  maxAltitude: 6097,
  grade: "PD",
  center: [84.03, 28.95],
  zoom: 11,
  content: {
    slug: "abi-peak-climbing",
    title: "Abi Peak Climbing",
    overview:
      "<p><strong>Abi Peak (6,097 m)</strong> stands above the sacred lakes of <strong>Damodar Kunda</strong> in the Damodar Himal, and it is the most approachable summit on the Tibetan plateau behind Upper Mustang. The climb is a straightforward <strong>PD</strong> — a short glacier, a snow slope of 35 to 40 degrees and a broad summit — which makes it a genuine first 6,000 m peak on an approach that is anything but ordinary.</p><p>That approach is the point. A week through the <strong>restricted area of Upper Mustang</strong> — the canyon country above Kagbeni, the red cliffs of Dhakmar, the walled city of <strong>Lo Manthang</strong>, the cave monastery at Luri — and then out east across bare plateau to the lakes, where Hindu pilgrims walk in summer and nobody at all comes in the climbing seasons. It is a first climb attached to one of the most extraordinary journeys in Nepal.</p>",
    highlights: [
      ["Summit Abi Peak (6,097 m)", "A straightforward PD snow climb above Damodar Kunda, and an excellent first 6,000 m summit."],
      ["Lo Manthang", "A full day in the walled capital of the former Kingdom of Lo, with its palace and three great monasteries."],
      ["Damodar Kunda (4,890 m)", "Camp beside the sacred lakes at the edge of the plateau, empty outside the summer pilgrimage."],
      ["The Upper Mustang Restricted Area", "A week through canyon country, cave gompas and red cliffs on a permit that keeps the numbers tiny."],
      ["A Lower, Gentler Summit than Saribung", "The same approach and base area as Saribung Peak, on a route 249 m lower and a grade easier."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>May to early June</strong> and <strong>September to mid-October</strong>. Mustang sits in the rain shadow of the Annapurna and Dhaulagiri massifs and stays <strong>dry through the monsoon</strong>, so the summer months that close most of Nepal are perfectly walkable here — it is the peak that needs settled snow, not the approach.</p><p>From late October the plateau becomes too cold and windy for comfortable camping and the Jomsom flights become unreliable. Deep winter is out entirely. Because Abi is lower and gentler than Saribung, it tolerates a slightly wider window at the edges of both seasons, but the wind on the plateau is a constant in either.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD</strong>, and among the more approachable 6,000 m peaks in Nepal. From <strong>high camp at 5,600 m</strong> the route crosses a short and lightly crevassed glacier roped as a team, then climbs a <strong>snow slope of 35 to 40 degrees</strong> for two to three hours with a short fixed section on the steeper ground.</p><p>The summit is a broad snow dome rather than a crest, so there is no exposure problem waiting at 6,000 m — which is a large part of why this suits a first climb. Summit day runs <strong>seven to ten hours</strong> from high camp. The cold and the wind on the plateau are more of a factor than the angle.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required, and this is the peak we recommend to trekkers making their first climb who want the Mustang journey with it. Previous multi-day trekking above 4,000 m is required, and the training session at base camp covers crampons, ice axe, jumar, abseil and rope-team travel from the beginning.</p><p>The acclimatisation is exceptional because the approach is long and high: eight days from 2,720 m to 4,890 m with acclimatisation days at <strong>Lo Manthang (3,840 m)</strong> and <strong>Damodar Kunda (4,890 m)</strong>, then a night at base camp at 5,100 m and one at 5,600 m. By the time you reach the high camp you have been above 4,300 m for four days.</p>",
      },
      {
        heading: "Permits, Cost and the Restricted Area",
        content:
          "<p>Upper Mustang is a <strong>restricted area</strong>, and the permit is the largest single component of this trip's cost after the logistics. It is charged per person for a fixed ten-day period with a daily rate beyond it, it names a licensed guide, and it requires a minimum of two trekkers. All of it is included and handled by our office.</p><p>The restriction is why the region is as it is: numbers are tiny, the villages are not built around tourism, and Lo Manthang is a working place rather than an exhibit. It also means there is no way to shorten or cheapen the approach, because the permit is priced by the day whether you are walking or not.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Four-season boots that take a semi-automatic crampon</strong> are sufficient for this peak; double boots are recommended but not essential, which is a genuine saving on a first climb. Add a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full windproof shell, gloves and liner gloves, a warm hat, a buff, category 4 glacier glasses, gaiters, a headlamp and factor 50 sunscreen.</p><p>Mustang is dry, bright and <strong>relentlessly windy</strong> from late morning, and the dust is constant — a buff and glasses are not optional here, and lip balm and sunscreen matter more than almost anywhere. We supply all group rope, screws, snow stakes and anchors, and our Sherpas fix the steep section. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "How does Abi Peak compare with Saribung?", answer: "Easier and 249 m lower. Saribung is PD+ with a 40 to 45 degree slope and a short summit crest; Abi is PD with a gentler slope and a broad summit dome. They share the same approach and base area, and Abi is the one we recommend for a first climb." },
      { question: "Is this a good first 6,000 m peak?", answer: "Yes, with one caveat: the trip is twenty-four days and most of that is walking through high desert, so you need to want the journey as well as the summit. If you want a first 6,000 m peak on a shorter itinerary, Chulu Far East or Dhampus Peak are the better options." },
      { question: "Why is the approach so long?", answer: "Because the peak is on the far side of Upper Mustang and there is no shorter way in. Eight days of walking from Jomsom through the restricted area to Damodar Kunda is the price of admission, and for most people who book this trip the approach is at least half the reason." },
      { question: "How much is the Upper Mustang permit?", answer: "It is charged per person for a fixed ten-day period with a daily rate beyond it, and it is the largest single item in the trip cost after logistics. It is included in the price along with ACAP and the climbing permit, and our office handles all of it." },
      { question: "Can we really trek here in the monsoon?", answer: "Yes — Mustang stays dry when the rest of Nepal is closed, which is why the summer pilgrimage to Damodar Kunda happens then. We run climbing departures in late spring and early autumn because the peak needs settled snow, but the approach itself is walkable in summer." },
      { question: "What is the summit success rate?", answer: "Around 80 to 85 percent on our departures. The gentle grade and the very long acclimatisation profile both help; wind on the summit dome is the main reason for the turn-backs there are." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 5,100 m on the moraine above Damodar Kunda, and high camp at 5,600 m below the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There is no shelter of any kind above Yara." },
      { question: "Do I need double boots?", answer: "Recommended but not essential. A warm four-season boot that takes a semi-automatic crampon will do, given a high camp at 5,600 m — though the plateau is cold and dry and a warmer boot is never wasted here. Your guide checks the boot at the Kathmandu briefing." },
      { question: "Is there any water on the plateau?", answer: "Very little, and what there is tends to be silty. The crew boils and treats everything, and you should carry two litres and drink four a day — the dry air dehydrates you faster than the altitude does. Bring electrolyte tablets." },
      { question: "Can Abi Peak and Saribung be climbed on one trip?", answer: "Yes, and they share a base area — climbing Abi first as the warm-up and Saribung a few days later adds about four days to this itinerary. It is a strong two-peak trip on an approach that is expensive to make twice, and we quote it to order." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flight between Pokhara and Jomsom, subject to weather, with jeep transport as the alternative."],
      transport: ["Private tourist bus or car from Kathmandu to Pokhara and back.", "Private jeep transport between Lo Manthang and Jomsom on the walk out."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      trekAccommodation:
        "Lodge and guesthouse accommodation in the Mustang villages as far as Yara, and full tented accommodation beyond it.",
      camping:
        "Tented accommodation from Ghuna Kharka through Damodar Kunda to Abi Peak base camp (5,100 m) and high camp (5,600 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Abi Peak, ${MUSTANG_PERMITS}.`,
      sherpa: MUSTANG_SHERPA,
      extra: [
        "Cook and kitchen crew from Yara onward, with all food and fuel carried in — nothing can be bought above the village.",
        "A full training session at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the steep section below the summit by our climbing Sherpas.",
        "Horse and pack-animal transport of group equipment through Mustang, and porters beyond Yara.",
        "A reserve day held for the summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Jomsom flight, or a summit attempt abandoned for conditions.",
    },
    porterDays: 15,
    gearRentalDays: 15,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 24-day itinerary climbing Abi Peak (6,097 m) above Damodar Kunda, approached through the restricted area of Upper Mustang and Lo Manthang — a PD first 6,000 m summit on an extraordinary approach.",
    inExDescription:
      "Road transport to Pokhara, the Jomsom flights, Kathmandu and Pokhara hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit, the Upper Mustang restricted area permit and ACAP, a licensed climbing guide with Sherpa support, a cook crew, group climbing equipment, rope fixing and the training session are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a grounded flight are not.",
    bestTime: "May-Jun, Sep-Oct",
    meta: {
      title: "Abi Peak Climbing (6,097 m) — 24 Days, Upper Mustang | Green Compass Treks",
      description:
        "Climb Abi Peak (6,097 m) above the sacred lakes of Damodar Kunda, approached through the restricted area of Upper Mustang and Lo Manthang. 24 days on a PD route — a first 6,000 m summit on a remarkable approach.",
      keywords:
        "abi peak climbing, abi peak 6097m, damodar kunda climbing, upper mustang climbing, damodar himal, first 6000m peak nepal",
      tags: "Abi Peak, Mustang Region, Peak Climbing, 6000m Peak, Upper Mustang, Damodar Kunda",
    },
  },
  days: [
    ...saribungPeakClimbing.days.slice(0, 13).map((d) => ({
      ...d,
      html: d.html.replace("twenty-five day plan", "twenty-four day plan"),
    })),
    {
      title: "Trek from Damodar Kunda (4,890 m) to Abi Peak Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Abi Peak Base Camp",
      placeDescription: "A tented base camp on the moraine above Damodar Kunda, below the glacier of Abi Peak.",
      ...ABI_BC,
      html: p(
        "A short day north-east from the lakes onto the moraine below the peak, gaining 200 m on bare gravel with no trail and no cairns beyond what the crew leaves.",
        "<strong>Abi Peak Base Camp (5,100 m)</strong> is a tented camp on flat ground below the glacier. The lakes are visible below to the south-west and the Tibetan border is a few kilometres north.",
        "The afternoon is the <strong>training session</strong> on the glacier ice above camp — crampons fitted and walked in, ice axe technique and self-arrest, rope-team travel, jumar and abseil. For most people on this trip it is the first time in crampons, and it is done here properly rather than at three in the morning. Around 3 hours of walking. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (5,100 m) to Abi Peak High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Abi Peak High Camp",
      placeDescription: "A tented camp at 5,600 m on the glacier shelf below the summit slope of Abi Peak.",
      ...ABI_HIGH_CAMP,
      html: p(
        "Roped from the moment the group leaves camp. The route climbs onto the <strong>glacier</strong> and works up it on the marked line for three hours with a light load, past a handful of open crevasses.",
        "<strong>High camp (5,600 m)</strong> is a set of platforms stamped out on the glacier shelf, fully exposed to the plateau wind and cold enough that dinner is eaten in a down jacket in the middle of the afternoon.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Abi Peak (6,097 m) and Descend to Base Camp (5,100 m)",
      elevation: "6,097 m",
      accommodation: "Abi Peak Base Camp",
      placeDescription: "The 6,097 m summit of Abi Peak, in the Damodar Himal above Damodar Kunda.",
      ...ABI_PEAK,
      html: p(
        "Roped and moving by three in the morning, in cold that is dry and absolute rather than damp. The upper glacier is crossed on the marked line by headlamp in under an hour.",
        "Then the <strong>snow slope</strong>: 35 to 40 degrees, climbed steadily for two to three hours with a <strong>short fixed section</strong> on the steeper ground near the top. The sun arrives somewhere around 5,900 m and turns the whole plateau below from grey to gold in about ten minutes.",
        "The <strong>summit (6,097 m)</strong> is a broad snow dome with room to stand about on, which for a first Himalayan peak is a considerable relief. The <strong>Damodar Himal</strong> runs east with Saribung beyond it, the brown Tibetan plateau stretches north into China, the <strong>Annapurnas and Dhaulagiri</strong> stand as a white wall to the south, and Damodar Kunda is a scatter of small dark lakes a thousand metres below.",
        "The descent reverses the slope and the glacier to high camp and then base camp. Eight to eleven hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Abi Peak Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Abi Peak Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...ABI_BC,
      html: p(
        "The day held in reserve. Wind off the plateau is the usual reason an Abi attempt is turned back — the summit dome and the high camp are both fully exposed to it — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group descends to <strong>Damodar Kunda</strong> for a last night beside the lakes, banking a day against the Jomsom flight. Overnight at base camp or Damodar Kunda.",
      ),
    },
    ...saribungPeakClimbing.days.slice(18, 25).map((d) => ({
      ...d,
      html: d.html.replace(
        "Abi Peak, next along the Damodar Himal from the same base, and the Saribung La crossing into Nar Phu are the two our returning Mustang climbers most often ask about.",
        "Saribung Peak, next along the Damodar Himal from the same base and a grade harder, is the question our returning Abi climbers most often ask.",
      ),
    })),
  ],
};
