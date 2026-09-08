import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  BARABISE, BHOTANG, CHAUTARA, DORJE_LAKPA, DORJE_LAKPA_BC, GYALZEN_BC, GYALZEN_PEAK,
  KYANJIN_GOMPA, LAMA_HOTEL, LANGSHISHA_KHARKA, LANGSHISHA_RI, LANGSHISHA_RI_BC,
  LANGTANG_LIRUNG, LANGTANG_LIRUNG_BC, LANGTANG_VILLAGE, PANCH_POKHARI, SYABRUBESI,
} from "./places";

/**
 * The Langtang and Jugal Himal: the nearest snow peaks to Kathmandu, and among
 * the least climbed in Nepal.
 *
 * Three of these are reached up the Langtang valley — a day's drive from the
 * capital and then three days on foot to Kyanjin Gompa — and the fourth, in the
 * Jugal Himal behind it, is approached from Chautara through country with no
 * trekking infrastructure at all. The 2015 earthquake destroyed Langtang village
 * and killed most of its inhabitants; the valley has been rebuilt since, and
 * the people who did the rebuilding are the ones who staff these trips.
 */

// The Panch Pokhari pilgrimage trail from Chautara, used by the Jugal approach.
const KAMI_KHARKA = { lng: 85.7583, lat: 27.9 }; // approx
const PAUWA_BAS = { lng: 85.7417, lat: 27.95 }; // approx
const HILE_BHANJYANG = { lng: 85.725, lat: 27.9917 }; // approx

// Camp positions on the Langtang and Jugal peaks, placed on the route lines.
const LIRUNG_C1 = { lng: 85.525, lat: 28.2333 }; // approx
const LIRUNG_C2 = { lng: 85.52, lat: 28.2433 }; // approx
const LIRUNG_HIGH_CAMP = { lng: 85.5167, lat: 28.25 }; // approx
const DORJE_LAKPA_C1 = { lng: 85.6833, lat: 28.1933 }; // approx
const DORJE_LAKPA_C2 = { lng: 85.69, lat: 28.19 }; // approx
const DORJE_LAKPA_HIGH_CAMP = { lng: 85.6933, lat: 28.1867 }; // approx
const GYALZEN_C1 = { lng: 85.7367, lat: 28.0333 }; // approx
const GYALZEN_HIGH_CAMP = { lng: 85.7417, lat: 28.04 }; // approx

const LANGTANG_PERMITS =
  "Langtang National Park entry permit and the Trekkers' Information Management System (TIMS) card";

const LANGTANG_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

/**
 * The Langtang valley approach, shared by Langshisha Ri, Langtang Lirung and
 * Dorje Lakpa: arrival, the Kathmandu working day, the drive to Syabrubesi, and
 * three days up the valley to Kyanjin Gompa with its acclimatisation day. Seven
 * days, and the fastest a climber can get from an international airport to a
 * 6,000 m base camp anywhere in Nepal.
 */
function langtangApproach(planWord: string, ministryDay: boolean): ClimbDay[] {
  const kathmandu: ClimbDay[] = [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Thamel's gear shops are a few minutes' walk away and stock most of what a climber discovers they have left at home.",
        "Your leader calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        `Your leader runs the full briefing at the hotel: the ${planWord} plan, the acclimatisation profile, the summit day, and the decisions that get made on the mountain and by whom.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over the layers you will actually climb in, and anything unsuitable swapped for rental kit here rather than discovered at altitude.",
        "Our office lodges the <strong>climbing permit</strong>, the Langtang National Park permit and the TIMS card, which need your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
  ];

  const ministry: ClimbDay[] = ministryDay
    ? [
        {
          title: "Kathmandu (1,400 m) – Ministry Briefing and Cargo Dispatch",
          elevation: "1,400 m",
          accommodation: "Kathmandu",
          placeDescription: "Nepal's capital, where the expedition is registered and the royalty permit is issued.",
          ...KATHMANDU,
          html: p(
            "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the royalty permit is issued, the regulations are read out and the waste-management deposit is registered.",
            "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched to Syabrubesi, where porters and pack animals take it up the valley.",
            "Langtang is the closest expedition to Kathmandu of any in this catalogue, and the logistics are correspondingly quick — cargo can be at the road head the same evening. Overnight in Kathmandu.",
          ),
        },
      ]
    : [];

  const trail: ClimbDay[] = [
    {
      title: "Drive from Kathmandu (1,400 m) to Syabrubesi (1,460 m)",
      elevation: "1,460 m",
      accommodation: "Syabrubesi",
      placeDescription: "A riverside town at the confluence of the Bhote Koshi and Langtang Khola, at the road head.",
      ...SYABRUBESI,
      html: p(
        "North out of the Kathmandu valley over the rim at Kakani and down to the Trishuli, then up a hill road that climbs to <strong>Dhunche</strong> at 1,960 m — the district headquarters and the Langtang National Park entrance.",
        "The road is rough, winding and spectacular, with the Ganesh Himal opening to the north-west and the Tibetan border a few kilometres east for much of the way.",
        "<strong>Syabrubesi (1,460 m)</strong> sits at the confluence of the Bhote Koshi and the Langtang Khola. Around 7 to 8 hours, and the shortest road approach to any climbing region in Nepal. Overnight at Syabrubesi.",
      ),
    },
    {
      title: "Trek from Syabrubesi (1,460 m) to Lama Hotel (2,470 m)",
      elevation: "2,470 m",
      accommodation: "Lama Hotel",
      placeDescription: "A cluster of lodges in dense forest on the floor of the Langtang gorge.",
      ...LAMA_HOTEL,
      html: p(
        "East into the <strong>Langtang gorge</strong>, following the river upstream on a trail that crosses it several times on suspension bridges and climbs steadily through dense forest.",
        "This is one of the best forests on any trekking route in Nepal — oak, maple and rhododendron, thick with moss and langur monkeys, and in spring loud with birds. Red panda live here, though almost nobody sees one.",
        "<strong>Lama Hotel (2,470 m)</strong> is a handful of lodges in a clearing beside the river, hemmed in by the gorge and dark by four in the afternoon. Around 6 hours. Overnight at Lama Hotel.",
      ),
    },
    {
      title: "Trek from Lama Hotel (2,470 m) to Langtang Village (3,430 m)",
      elevation: "3,430 m",
      accommodation: "Langtang Village",
      placeDescription: "A rebuilt Tamang village in the upper Langtang valley, destroyed by a landslide in the 2015 earthquake.",
      ...LANGTANG_VILLAGE,
      html: p(
        "Up through the last of the forest to <strong>Ghoda Tabela</strong>, where the gorge opens and the valley becomes a broad glacial trough with <strong>Langtang Lirung</strong> filling the northern wall.",
        "The walking is easier and the country turns Tamang — yak pasture, stone walls, mani stones and water-driven prayer wheels.",
        "<strong>Langtang Village (3,430 m)</strong> was destroyed on 25 April 2015 when the earthquake brought a section of hillside and glacier down on it, killing most of the inhabitants and the visitors staying there. The village has been rebuilt on safer ground beside the debris field, and there is a memorial with the names on it. It is worth stopping at. Around 6 hours. Overnight at Langtang Village.",
      ),
    },
    {
      title: "Trek from Langtang Village (3,430 m) to Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The highest settlement in the Langtang valley, a lodge village beneath Langtang Lirung.",
      ...KYANJIN_GOMPA,
      html: p(
        "A short and beautiful morning up the widening valley past mani walls, chortens and the largest prayer wheel in the region, with the glaciers of Langtang Lirung hanging above on the left.",
        "<strong>Kyanjin Gompa (3,870 m)</strong> is the highest settlement in the valley — a small monastery, a cheese factory started with Swiss help in the 1950s, and a scatter of lodges under the mountain.",
        "It is also the base for everything above: Kyanjin Ri, Tserko Ri, the Langshisha Kharka and all three of the climbing peaks in this valley are reached from here. Around 3 to 4 hours. Overnight at Kyanjin Gompa.",
      ),
    },
    {
      title: "Acclimatisation Day at Kyanjin Gompa (3,870 m) – Tserko Ri (4,984 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The lodge village below Langtang Lirung, with a 5,000 m viewpoint directly above it.",
      ...KYANJIN_GOMPA,
      html: p(
        "Climb high, sleep low. The morning goes up <strong>Tserko Ri (4,984 m)</strong>, a steep but non-technical four-hour ascent on a well-worn path directly above the village.",
        "The height gained is the point — touching 5,000 m and sleeping 1,100 m lower is what makes the climbing possible. The view from the top runs the length of the valley: <strong>Langtang Lirung, Langshisha Ri, Dorje Lakpa</strong> and the Jugal Himal, with the Tibetan border ridges to the north.",
        "Back down for a late lunch and rest. Your leader takes the first saturation readings this evening. Around 6 to 7 hours. Overnight at Kyanjin Gompa.",
      ),
    },
  ];

  return [...kathmandu, ...ministry, ...trail];
}

// ─────────────────────────────────────────────────────────────────────────────

export const langshishaRiExpedition: Climb = {
  region: "Langtang Region",
  price: 4850,
  difficulty: "difficult",
  maxAltitude: 6427,
  grade: "AD",
  center: [85.68, 28.23],
  zoom: 11,
  content: {
    slug: "langshisha-ri-expedition",
    title: "Langshisha Ri Expedition",
    overview:
      "<p><strong>Langshisha Ri (6,427 m)</strong> stands at the head of the Langtang valley, at the point where the glaciers turn east toward the Tibetan border. It is the most climbable of the Langtang peaks and still very seldom attempted — the valley gets a good number of trekkers to Kyanjin Gompa and almost none of them go any further, and beyond the <strong>Langshisha Kharka</strong> there is no trail, no lodge and usually nobody at all.</p><p>The route is graded <strong>AD</strong>: a long walk up the Langtang glacier, a crevassed approach, sustained snow and ice at 45 to 50 degrees on fixed rope, and a corniced summit ridge. What makes it worth doing is the combination of a real climb with the shortest approach in Nepal — you can be at base camp five days after landing in Kathmandu, on a mountain that sees a handful of parties a decade.</p>",
    highlights: [
      ["Summit Langshisha Ri (6,427 m)", "The most climbable of the Langtang peaks, and one that sees a handful of parties a decade."],
      ["The Shortest Approach in Nepal", "Base camp five days after landing — a day's drive from Kathmandu and three days on foot."],
      ["Beyond the Langshisha Kharka", "Three days on the Langtang glacier where there is no trail, no lodge and no other party."],
      ["An AD Snow and Ice Route", "Sustained 45–50° ground on fixed rope with a corniced summit ridge to finish."],
      ["Kyanjin Gompa and Tserko Ri", "Acclimatise at the monastery village below Langtang Lirung, with a 4,984 m viewpoint above it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Langtang sits closer to the monsoon track than Manang and holds more snow, which makes autumn the more reliable window — post-monsoon the glacier is better consolidated and the corniced ridge firmer.</p><p>Spring is warmer with rhododendron in flower through the gorge, and it puts more snow on the upper route. The practical constraint at either edge of the season is the <strong>Syabrubesi road</strong>, which is rough and closes after heavy rain, and the glacier travel above the Langshisha Kharka, which needs snow bridges that hold. We run a small number of departures a year.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD</strong>. From Kyanjin Gompa the route walks three to four hours east to the <strong>Langshisha Kharka</strong> and then onto the Langtang glacier, camping on the moraine at around <strong>4,600 m</strong>.</p><p>Above base camp the route crosses the <strong>crevassed glacier</strong> roped and marked to a <strong>high camp at 5,400 m</strong>, and then climbs sustained <strong>snow and ice at 45 to 50 degrees</strong> on fixed rope to a <strong>corniced summit ridge</strong> taken one at a time. Ten to thirteen hours from high camp with an abseil descent. It is not a technically hard route by Himalayan standards; the difficulty is that nobody has fixed it for you and there is no one else in the valley.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> or equivalent alpine experience, and comfort on fixed rope and roped glacier travel. The training day at base camp refreshes and checks rather than teaching from scratch, and the crevassed glacier below high camp means rope-team technique is not optional.</p><p>The acclimatisation is the one weakness of a short approach, and we build against it: two nights at Kyanjin Gompa with the <strong>Tserko Ri (4,984 m)</strong> climb, two nights at base camp at 4,600 m, and a night at 5,400 m before the summit. Your leader monitors saturation daily from Langtang village onward and will hold the group a day rather than push a marginal climber higher.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m, including roped glacier travel and fixed-rope climbing</strong>, is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the walk to Kyanjin and nothing above it.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Langtang is the closest climbing region to Kathmandu and helicopters reach Kyanjin Gompa and base camp routinely in clear weather, which makes evacuation genuinely quick here by Nepalese standards. They are still dispatched against a guarantee of payment.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,500 m, broken in, plus trekking boots for the valley. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>The Langtang gorge is wet and forested for two days, so proper waterproofs matter and, in spring, expect leeches below Ghoda Tabela. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, and our Sherpas fix the route. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "How rarely is Langshisha Ri climbed?", answer: "A handful of parties a decade. The Langtang valley gets thousands of trekkers to Kyanjin Gompa each season and almost none of them continue east to the Langshisha Kharka, let alone onto the glacier above it. There is no fixed rope from other teams and no established camps." },
      { question: "How short is the approach really?", answer: "A day's drive from Kathmandu to Syabrubesi, three days walking to Kyanjin Gompa, an acclimatisation day and then a day to base camp. Six days from the airport to a 4,600 m base camp is the fastest of any climbing region in Nepal, and it is the main practical argument for the peak." },
      { question: "Is the short approach a problem for acclimatisation?", answer: "It would be if we did not build against it. Two nights at Kyanjin with the Tserko Ri climb to 4,984 m, two nights at base camp and one at 5,400 m is a reasonable profile, but it is tighter than a Khumbu itinerary and it is why we ask for a previous 6,000 m summit." },
      { question: "What happened in Langtang in 2015?", answer: "The 25 April earthquake brought a section of hillside and hanging glacier down onto Langtang village, killing most of the inhabitants and the visitors staying there. The village has been rebuilt on safer ground beside the debris field and there is a memorial with the names. Most of the people who work in the valley now lost family that day." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,600 m on the moraine above the Langshisha Kharka, and high camp at 5,400 m on the glacier below the face. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There is no lodge beyond Kyanjin Gompa." },
      { question: "What is the summit success rate?", answer: "Around 55 to 65 percent on our departures. Conditions on the crevassed glacier and wind on the corniced ridge are the usual reasons for turning back, and a route that nobody else has fixed is inherently slower than one that is in place when you arrive." },
      { question: "Can Langtang Lirung be seen from the summit?", answer: "It dominates the view west down the whole valley, and from Langshisha Ri you also see north into Tibet, east along the border ridges, and south across the Jugal Himal to Dorje Lakpa. It is a considerably better summit panorama than the mountain's modest reputation suggests." },
      { question: "How do the porters manage above the Kharka?", answer: "They do not go beyond base camp. Loads from the Langshisha Kharka to base camp go on porters and pack animals; everything above is carried by the climbing Sherpas and the team. It is one reason the camps above are kept to a minimum." },
      { question: "Is this a good first Himalayan expedition?", answer: "For a climber with a 6,000 m summit already, yes — it is short, close to Kathmandu, and technically moderate. For a first-ever Himalayan climb it is not, because the acclimatisation window is tight and there is nobody else in the valley to help if it goes wrong." },
      { question: "Can we combine it with the Langtang trek?", answer: "The itinerary already is the Langtang trek as far as Kyanjin Gompa, which is the best part of it. Adding Kyanjin Ri or the Ganja La crossing at the end is possible and we quote it to order, though after a 6,427 m summit most people are content to walk out." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Syabrubesi and back.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Langshisha Ri base camp (4,600 m) and high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Langshisha Ri, ${LANGTANG_PERMITS}.`,
      sherpa: LANGTANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A training and skills-check day at base camp covering rope-team travel, crevasse rescue, fixed-line ascent and abseil technique.",
        "Fixing of the ice slope and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Kyanjin Gompa to base camp.",
        "A reserve day held for the summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 12,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 17-day itinerary climbing Langshisha Ri (6,427 m) at the head of the Langtang valley, with the shortest approach of any climbing region in Nepal, a training day, a high camp at 5,400 m and a reserve day.",
    inExDescription:
      "Jeep transport to Syabrubesi and back, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit, national park permit and TIMS, a licensed climbing guide with Sherpa support, all group glacier and ice equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Langshisha Ri Expedition (6,427 m) — 17 Days | Green Compass Treks",
      description:
        "Climb Langshisha Ri (6,427 m) at the head of the Langtang valley, an AD snow and ice route with the shortest approach in Nepal — base camp five days after landing in Kathmandu.",
      keywords:
        "langshisha ri expedition, langshisha ri 6427m, langtang climbing, kyanjin gompa climbing, rarely climbed peaks nepal, langtang glacier",
      tags: "Langshisha Ri, Langtang Region, Peak Climbing, 6000m Peak, Kyanjin Gompa, Langtang Glacier",
    },
  },
  days: [
    ...langtangApproach("seventeen-day", false),
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Langshisha Ri Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Langshisha Ri Base Camp",
      placeDescription: "A tented base camp on the moraine of the Langtang glacier, beyond the Langshisha Kharka.",
      ...LANGSHISHA_RI_BC,
      html: p(
        "East up the valley from Kyanjin on a trail that thins within an hour and gives out entirely at the <strong>Langshisha Kharka</strong>, a grazing meadow three to four hours along.",
        "Beyond it the route goes onto the moraine of the <strong>Langtang glacier</strong> — boulder ground, no path, cairns where the crew has left them — and climbs east with the border ridges of Tibet closing the head of the valley.",
        "<strong>Langshisha Ri Base Camp (4,600 m)</strong> is a tented camp on a flat shelf on the moraine. There is nobody here. Around 6 to 7 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Langshisha Ri Base Camp",
      placeDescription: "The base camp on the glacier moraine, where the climbing skills are checked before the push.",
      ...LANGSHISHA_RI_BC,
      html: p(
        "A working day on the glacier ice above camp. Every climber is taken through <strong>rope-team travel with correct spacing, crevasse rescue with a hauling system, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Crevasse work gets the most time, because the glacier between base camp and high camp is broken and is crossed roped in the dark tomorrow.",
        "In the afternoon we walk part-way up the moraine toward high camp and back — 400 m gained and lost. Meanwhile the Sherpas are above, <strong>marking the glacier route and fixing the ice slope</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,600 m) to Langshisha Ri High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Langshisha Ri High Camp",
      placeDescription: "A tented camp at 5,400 m on the glacier below the south face of Langshisha Ri.",
      lng: 85.7069,
      lat: 28.2372,
      html: p(
        "Roped from the moment the group leaves camp. The route works up the <strong>crevassed glacier</strong> on the line the Sherpas marked, weaving between open holes and over one or two snow bridges, for five to six hours with a moderate load.",
        "<strong>High camp (5,400 m)</strong> is a set of platforms stamped out on the glacier itself, below the south face, and it is fully exposed to the wind coming over the border ridges from Tibet.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your leader's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Langshisha Ri (6,427 m) and Descend to Base Camp (4,600 m)",
      elevation: "6,427 m",
      accommodation: "Langshisha Ri Base Camp",
      placeDescription: "The 6,427 m summit of Langshisha Ri, at the head of the Langtang valley near the Tibetan border.",
      ...LANGSHISHA_RI,
      html: p(
        "Roped and moving by two in the morning. The first hour crosses the upper glacier to the foot of the face, and then the climbing begins.",
        "The <strong>ice slope</strong> runs at 45 to 50 degrees on fixed rope for three to four hours, sustained and unrelenting, with the sun arriving somewhere around 6,000 m.",
        "The top of the slope gives onto a <strong>corniced summit ridge</strong>, taken one at a time with the Sherpas probing the crest. From the <strong>summit (6,427 m)</strong>: <strong>Langtang Lirung</strong> down the whole length of the valley to the west, <strong>Dorje Lakpa</strong> and the Jugal Himal south, the Tibetan plateau north over the border ridges, and Shishapangma on the horizon.",
        "The descent abseils the slope and reverses the glacier to high camp and then base camp. Eleven to fourteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Langshisha Ri Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Langshisha Ri Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...LANGSHISHA_RI_BC,
      html: p(
        "The day held in reserve. Wind off the border ridges is the usual reason a Langshisha attempt is turned back, and fresh snow on the crevassed glacier is the other — it hides the marked route and slows the crossing enough to lose the day against the clock.",
        "If yesterday failed, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group starts down the moraine toward the Langshisha Kharka and Kyanjin, banking a day against the Syabrubesi road. Overnight at base camp or Kyanjin Gompa.",
      ),
    },
    {
      title: "Trek from Base Camp (4,600 m) to Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The lodge village below Langtang Lirung, reached on the walk out from the glacier.",
      ...KYANJIN_GOMPA,
      html: p(
        "Camp comes down after breakfast and the group descends the moraine west, back past the <strong>Langshisha Kharka</strong> and onto the trail.",
        "The valley opens and softens as it drops, and by the middle of the afternoon there is grass, then yak pasture, then the chortens and mani walls above Kyanjin.",
        "<strong>Kyanjin Gompa (3,870 m)</strong> means a lodge, a stove, a menu and the cheese factory, which after five nights on a glacier is a considerable amount of civilisation. Around 6 hours. Overnight at Kyanjin Gompa.",
      ),
    },
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Lama Hotel (2,470 m)",
      elevation: "2,470 m",
      accommodation: "Lama Hotel",
      placeDescription: "The lodges in the forested gorge, on the walk out down the Langtang valley.",
      ...LAMA_HOTEL,
      html: p(
        "Down the valley past <strong>Langtang Village</strong> and its memorial, with the debris field of the 2015 landslide beside the trail and the rebuilt village on the safer ground next to it.",
        "Below Ghoda Tabela the valley narrows into the gorge again and the forest closes in — oak, maple and rhododendron, moss, langur monkeys and birds after a week above the treeline.",
        "<strong>Lama Hotel (2,470 m)</strong> is dark by four in the afternoon and warm enough to sit outside, which after a glacier camp is worth noticing. Around 6 to 7 hours. Overnight at Lama Hotel.",
      ),
    },
    {
      title: "Trek from Lama Hotel (2,470 m) to Syabrubesi (1,460 m)",
      elevation: "1,460 m",
      accommodation: "Syabrubesi",
      placeDescription: "The town at the confluence of the Bhote Koshi and Langtang Khola, and the end of the walking.",
      ...SYABRUBESI,
      html: p(
        "The last walking day, down the gorge beside the river through the best forest on the route, crossing and re-crossing on suspension bridges.",
        "The air warms with every hundred metres and by the afternoon it is subtropical again — bamboo, terraces and villages after ten days of glacier and rock.",
        "<strong>Syabrubesi (1,460 m)</strong> in the afternoon. The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given. Around 5 to 6 hours. Overnight at Syabrubesi.",
      ),
    },
    {
      title: "Drive from Syabrubesi (1,460 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "The rough hill road back over <strong>Dhunche</strong> and down to the Trishuli, then up over the valley rim at Kakani and into Kathmandu.",
        "Seven to eight hours, and the first three of them are slow — the Syabrubesi road is one of the rougher ones in Nepal and it does not improve for being driven in the other direction.",
        "Back in <strong>Kathmandu</strong> in the afternoon. A hot shower, a proper meal, and your <strong>summit certificate</strong> presented over dinner. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Dorje Lakpa and Langtang Lirung are the two our returning Langshisha climbers ask about, and both are a serious step up from here.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const langtangLirungExpedition: Climb = {
  region: "Langtang Region",
  price: 21000,
  difficulty: "extreme",
  maxAltitude: 7227,
  grade: "TD-",
  expedition: true,
  royalty: true,
  center: [85.53, 28.24],
  zoom: 11,
  content: {
    slug: "langtang-lirung-expedition",
    title: "Langtang Lirung Expedition",
    overview:
      "<p><strong>Langtang Lirung (7,227 m)</strong> is the highest mountain in the Langtang Himal and one of the hardest 7,000 m peaks in Nepal. It rises 3,300 m directly above Kyanjin Gompa in a single sweep of ice and hanging glacier, and it has an ascent record to match: first climbed in <strong>1978 by a Japanese team</strong>, and successful since on only a handful of occasions, with a fatality rate that has kept most commercial operators away entirely.</p><p>We offer it to experienced alpinists and we describe it accurately. The route is graded <strong>TD-</strong> — sustained steep ice, mixed ground, and serac exposure on the lower and middle mountain that is managed by timing rather than avoided. It is the nearest 7,000 m peak to Kathmandu, seven days from an international arrivals hall, and it is by a wide margin the most serious thing in this catalogue below the 8,000 m peaks.</p>",
    highlights: [
      ["Summit Langtang Lirung (7,227 m)", "The highest peak in the Langtang Himal, climbed successfully only a handful of times since 1978."],
      ["A Grade TD- Route", "Sustained steep ice and mixed ground, fixed entirely by our own Sherpa team."],
      ["Three Thousand Metres Above Kyanjin", "The face rises in a single sweep from the valley floor — the most imposing view from any lodge in Nepal."],
      ["The Nearest 7,000 m Peak to Kathmandu", "Base camp seven days after landing, with no domestic flight involved."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support, with our team fixing the route from the bottom."],
    ],
    sections: [
      {
        heading: "Best Time to Climb and the Hazard",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>, and the choice is a safety decision. Langtang Lirung's lower and middle route passes beneath <strong>hanging glaciers and serac ground</strong>, and the exposure is the defining feature of the mountain. Warm spells and fresh snow both make it worse.</p><p><strong>Autumn is the stronger season</strong>, with colder, more stable conditions and better-consolidated ice. We run at most one departure a year, we site base camp clear of run-out, we move through the exposed sections in the cold hours only, and our leader will abandon the expedition rather than accept a warm afternoon on that ground. Cancellation is a normal outcome on this peak and we say so before taking a deposit.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>TD-</strong>, the hardest route in this catalogue below the 8,000 m peaks. From <strong>base camp at 4,300 m</strong> the route climbs onto a broken glacier and up steepening ground to <strong>Camp 1 at around 5,200 m</strong>, crossing beneath serac ground on the way.</p><p>Above it comes the sustained part: <strong>ice and mixed ground at 50 to 65 degrees</strong> with short steeper steps, fixed on the way up, leading to <strong>Camp 2 (6,000 m)</strong> and a <strong>high camp at 6,500 m</strong>. Summit day follows a corniced ridge and a final face, twelve to eighteen hours with a long abseil descent. There is no easy ground anywhere above Camp 1 and nowhere to shelter.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>The strictest requirement in this catalogue outside the 8,000 m peaks. We ask for <strong>alpine experience at D or above</strong>, previous Himalayan climbing at 6,000 m or higher, and demonstrable competence on <strong>steep ice</strong> — Scottish winter grade V, or equivalent water and alpine ice. A background of trekking peaks does not qualify and neither does a single AD summit.</p><p>You also need to accept a leader's decision to walk away without argument. On a face with this hazard profile and no other team in the valley, a client who pushes for the summit is a danger to the Nepali staff carrying the loads. We discuss that at enquiry and we decline bookings on the strength of it.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,500 m, including steep ice, graded mixed climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course. A national alpine club policy or a specialist mountaineering insurer is the only realistic option.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included with a high limit. Langtang's proximity to Kathmandu means a helicopter can reach base camp within an hour in clear weather, which is the single best thing about this mountain. Nothing above Camp 1 is reachable, and a rescue from the face would be a long technical operation by the climbing team.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The Langtang gorge is wet and forested for two days on the approach, so proper waterproofs matter. We supply <strong>all fixed and main ropes, ice screws, snow stakes, rock protection and anchors</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates</strong> — a requirement rather than a preference on this route.</p>",
      },
    ],
    faqs: [
      { question: "How often has Langtang Lirung been climbed?", answer: "Very rarely. First ascent in 1978, and successful ascents since can be counted on two hands. Several attempts have ended in fatalities, which is why almost no commercial operator lists it. There is no trodden line, no established camps and no fixed rope from anyone else." },
      { question: "Why do you offer it at all?", answer: "Because it is a fine mountain and because the small number of climbers capable of it deserve an operator who will talk about it honestly rather than pretend it does not exist. We run one departure a year at most, we staff it one to one, and we cancel readily." },
      { question: "What is the main hazard?", answer: "Serac fall onto the lower and middle route from the hanging glaciers above. It cannot be avoided entirely on this line, only timed — we cross in the cold hours, never stop in the exposed sections, and abandon attempts after warm spells or fresh snow. It is the reason the mountain has the record it has." },
      { question: "How does it compare with Ama Dablam or Cholatse?", answer: "Considerably harder and more committing. Ama Dablam is a TD- rock and ice route with fixed rope maintained by several teams; Langtang Lirung is TD- with serac exposure, no other team in the valley, 415 m more height and a route your own Sherpas fix from the bottom." },
      { question: "What is the summit success rate?", answer: "Low, and we will not put a flattering number on it. Most attempts on this mountain do not summit and several have ended badly. Climbers book it for the objective and the rarity, and anyone whose priority is standing on a 7,000 m top should climb Himlung or Baruntse instead." },
      { question: "Where is base camp?", answer: "At around 4,300 m above Kyanjin Gompa on ground sited clear of avalanche and serac run-out rather than in the most convenient spot. It is a full expedition base camp with mess, kitchen, storage and toilet tents and a cook crew, and it is two hours above the last lodge." },
      { question: "Is supplementary oxygen used?", answer: "No. Langtang Lirung is within the range a fit acclimatised climber handles without it, and the difficulty here is technical rather than altitude-related. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use." },
      { question: "How quickly could a rescue reach us?", answer: "At base camp, within an hour in clear weather — Langtang is closer to Kathmandu than any other climbing region and the helicopter operators know the valley well. Above Camp 1, not at all: an incident on the face means the team lowering a casualty over many hours before any aircraft is involved." },
      { question: "Do you cancel departures?", answer: "Readily, and it is written into the booking. If conditions on the lower face are wrong, if the party that assembles is not strong enough, or if the season is loading badly, we do not go. On this mountain that judgement is the most valuable thing we sell." },
      { question: "Can I see the route from Kyanjin Gompa?", answer: "All of it. The face rises 3,300 m directly above the village and the lodges look straight at it — you will spend the acclimatisation day looking at your own route through binoculars, which is unusual and, on this mountain, genuinely useful." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: ["Private jeep transport from Kathmandu to Syabrubesi and back."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,300 m, sited clear of serac and avalanche run-out, with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,200 m), Camp 2 (6,000 m) and high camp (6,500 m).",
      permits: `Department of Tourism Langtang Lirung climbing royalty and permit, ${LANGTANG_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, selected for technical experience, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the face.",
        "Porter and pack-animal transport of all expedition equipment from Syabrubesi to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for serac or avalanche conditions, or a departure cancelled by us because the face is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 29-day expedition on Langtang Lirung (7,227 m), the highest peak in the Langtang Himal and one of the hardest 7,000 m routes in Nepal, with three camps, a rotation, rope fixed by our own team and three reserve days.",
    inExDescription:
      "Jeep transport to Syabrubesi and back, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, national park permit and TIMS, an expedition leader and liaison officer, one technical Sherpa per client, a cook crew, all group ice and rock equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Langtang Lirung Expedition (7,227 m) — 29 Days | Green Compass Treks",
      description:
        "Climb Langtang Lirung (7,227 m), the highest peak in the Langtang Himal and one of the hardest 7,000 m routes in Nepal. 29 days, grade TD-, one technical Sherpa per climber. Experienced alpinists only.",
      keywords:
        "langtang lirung expedition, langtang lirung 7227m, hardest 7000m nepal, kyanjin gompa climbing, technical expedition nepal, langtang climbing",
      tags: "Langtang Lirung, Langtang Region, Expedition, 7000m Peak, Technical Climb, Kyanjin Gompa",
    },
  },
  days: [
    ...langtangApproach("twenty-nine day", true),
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp above Kyanjin, sited clear of serac and avalanche run-out.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "North-west out of Kyanjin and up onto the moraine below the face — a short day in distance and a steep one, gaining 430 m in two to three hours on boulder ground.",
        "<strong>Langtang Lirung Base Camp (4,300 m)</strong> is established today, and where it goes is the most deliberate decision of the expedition. Camp is sited <strong>clear of the serac and avalanche run-out</strong> from the hanging glaciers above, which costs some walking every day and is not negotiable.",
        "Mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next fortnight, with three thousand metres of mountain directly overhead. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the face.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Kyanjin, a stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules and the camp's evacuation plan explained.",
        "Prayer flags go up over the camp. The face above cracks and releases at intervals through the day, which is both spectacular and a standing account of what the lower route involves. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment Day at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The day that decides the team. On steep ice near camp each climber is put through <strong>two-tool movement, screw placement on vertical ground, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your leader is looking at speed and economy rather than maximum grade. On a face where the safety margin is made of how fast the team clears the exposed ground, a climber who is strong but slow is a liability to everyone including the Sherpas.",
        "Anyone the leader is not satisfied with is told today and does not go above Camp 1. Meanwhile the Sherpas begin <strong>fixing the lower face</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>4,800 m</strong> and back, on ground that asks nothing technical.",
        "The morning is also a working reconnaissance. Your leader takes the team up to a viewpoint and goes through the face in daylight with binoculars: where the seracs sit, where their run-outs go, which sections are crossed and how fast, and where the fixed line will run.",
        "The afternoon is rest and packing for the rotation. The satellite forecast arrives in the evening, and from now on the temperature matters as much as the sky. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,200 m)",
      elevation: "5,200 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,200 m above the lower face, clear of the serac ground.",
      ...LIRUNG_C1,
      html: p(
        "Out of camp at one in the morning, because the lower face has to be crossed while it is frozen and the seracs above are least active.",
        "The route climbs the broken glacier and then the <strong>exposed traverse</strong> beneath the hanging ice — moved through steadily, spaced out, and with nobody stopping for any reason — before the fixed line takes the team up onto the shelf above.",
        "<strong>Camp 1 (5,200 m)</strong> stands clear of the hazard, and the relief of arriving there is something every climber on this mountain describes. Six to seven hours. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,200 m) to Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "Another pre-dawn start, and back down through the exposed ground in the cold — the second of the small number of passages the rotation plan allows.",
        "Down the fixed ropes and across the glacier to base camp in three to four hours, arriving before the sun is properly on the seracs.",
        "The first rotation is complete and, more importantly, the team now knows exactly what the lower face involves. The Sherpas spend the following days fixing above Camp 1. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "A genuine rest day. Eating past the point of appetite, four litres of fluid, an afternoon asleep and staying off the legs.",
        "Equipment work fills the gaps: tools sharpened, crampons checked, harnesses inspected for wear after a day of jumaring on a loaded line.",
        "The Sherpa team is on the face above, fixing toward Camp 2 through the sustained ice, and every one of those carries is another passage through the same exposed ground the climbers crossed. That asymmetry is worth stating plainly on this mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage with timings for every exposed section.",
        "The Sherpa team returns with the report that decides everything: how the ice is taking screws, how the seracs are behaving, and whether the ridge above Camp 2 is in condition.",
        "The forecast arrives in the evening. A warm spell or recent snow means waiting, however clear the sky, and that is not a decision your leader will be argued out of. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,300 m) to Camp 1 (5,200 m)",
      elevation: "5,200 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,200 m above the lower face, reoccupied for the summit push.",
      ...LIRUNG_C1,
      html: p(
        "Another one o'clock start and through the exposed ground faster than before — five hours or so for a crossing that took six or seven on the rotation, on a line the team now knows metre by metre.",
        "That speed is not a matter of pride. Every minute less beneath the seracs is a real reduction in exposure, and it is the most concrete benefit acclimatisation brings on this particular mountain.",
        "<strong>Camp 1 (5,200 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,200 m) to Camp 2 (6,000 m)",
      elevation: "6,000 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,000 m on cut platforms in the ice and mixed ground of the face.",
      ...LIRUNG_C2,
      html: p(
        "The day the route becomes what it is known for. Above Camp 1 the face steepens into sustained <strong>ice and mixed ground at 50 to 65 degrees</strong> with short steeper steps, climbed on fixed line with two tools.",
        "Six to eight hours of it, with no easy ground and nowhere flat to stop. This is the section that makes the peak TD- and the section on which most attempts have ended.",
        "<strong>Camp 2 (6,000 m)</strong> is whatever platform the Sherpas have been able to cut. It is small, steep-sided and comfortless, and everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,000 m) to High Camp (6,500 m)",
      elevation: "6,500 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,500 m below the summit ridge of Langtang Lirung.",
      ...LIRUNG_HIGH_CAMP,
      html: p(
        "A short day and a serious one — four to five hours of steep fixed ice to the shoulder, arriving by late morning so the team has the afternoon lying down.",
        "<strong>High camp (6,500 m)</strong> is two or three tents on the smallest usable ground on the mountain, and it is the coldest and most exposed night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader gives a <strong>hard turnaround time</strong> that will not be renegotiated on the ridge. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Langtang Lirung (7,227 m) and Descend to Camp 2 (6,000 m)",
      elevation: "7,227 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,227 m summit of Langtang Lirung, the highest point of the Langtang Himal.",
      ...LANGTANG_LIRUNG,
      html: p(
        "Moving by midnight, because the upper ground has to be climbed and descended while it is frozen. Steep ice above camp leads within a couple of hours onto the <strong>summit ridge</strong>.",
        "The ridge is narrow, corniced and exposed on both sides, taken one at a time with the Sherpas probing the crest, and it leads to a final face of steep snow and ice below the top.",
        "The <strong>summit (7,227 m)</strong> looks north into Tibet with <strong>Shishapangma</strong> on the horizon, east along the Langtang valley to Langshisha Ri and the Jugal Himal, west to Ganesh Himal, and south over the middle hills to the <strong>Kathmandu valley</strong> — visible, and about eighty kilometres away.",
        "The descent is a long sequence of abseils down the ridge and the face, and on a tired party it is the most demanding part of the expedition. Fourteen to eighteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,000 m) to Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the summit push.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The most important descent of the expedition. Down the fixed ropes past Camp 1, stripping the line as the team goes, and then the <strong>exposed traverse</strong> across the lower face.",
        "Your leader will hold the team at Camp 1 rather than let it cross that ground in the afternoon. A summit that ends with an exhausted party under the seracs in the sun is not a completed climb.",
        "<strong>Base camp (4,300 m)</strong> in the early morning after a cold start, with a hot meal and the first unbroken sleep in five days. Seven to nine hours in total. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The first of three contingency days, held for conditions or a second summit attempt.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The first of three reserve days, and on this mountain they exist as much to allow waiting as to allow a second attempt.",
        "If the summit was missed, the team rests today and considers going back up tomorrow — provided the face is still in condition and the party has genuinely recovered. A second push through the serac ground is a decision your leader weighs very carefully.",
        "If the summit went to plan, this is rest, and on Langtang Lirung a team that summited and got everybody down has done something almost nobody has. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Langtang Lirung Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The second contingency day, held at base camp for a cold, settled window.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The second reserve day. Three of them exist because the conditions that make this face acceptable are specific and do not arrive to order.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team, and every one of those clearing carries is another passage through the exposed ground, which is why we plan the strip rather than rush it. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Langtang Lirung Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the face.",
      ...LANGTANG_LIRUNG_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Syabrubesi goes back out, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Below, the lights of Kyanjin come on at dusk — a village whose visitors have spent a week photographing this face without knowing anyone was on it. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,300 m) to Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The lodge village below the face, reached on the walk out from the mountain.",
      ...KYANJIN_GOMPA,
      html: p(
        "Down the moraine to <strong>Kyanjin Gompa (3,870 m)</strong> in two to three hours — the shortest walk out from any expedition base camp in this catalogue.",
        "Kyanjin has lodges, a stove, a menu and the cheese factory, and after a fortnight under the face all of it lands hard.",
        "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Most of the crew live within a day's walk of here. Overnight at Kyanjin Gompa.",
      ),
    },
    ...langshishaRiExpedition.days.slice(13, 17).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given.",
          "A quiet evening in Syabrubesi at the end of a long expedition.",
        )
        .replace(
          "Dorje Lakpa and Langtang Lirung are the two our returning Langshisha climbers ask about, and both are a serious step up from here.",
          "climbers who get up Langtang Lirung have done something almost nobody has, and Dorje Lakpa across the valley is usually the next conversation.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const dorjeLakpaExpedition: Climb = {
  region: "Langtang Region",
  price: 19500,
  difficulty: "extreme",
  maxAltitude: 6966,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [85.69, 28.2],
  zoom: 11,
  content: {
    slug: "dorje-lakpa-expedition",
    title: "Dorje Lakpa Expedition",
    overview:
      "<p><strong>Dorje Lakpa (6,966 m)</strong> is the sharp triple-summited peak that closes the southern side of the Langtang valley, and on a clear winter morning it is visible from the ridges above Kathmandu. It was first climbed in <strong>1981 by a Japanese team</strong> and it has been attempted very seldom since — the mountain has no easy line, the approach beyond the Langshisha Kharka has no trail, and the valley between it and the Jugal Himal sees essentially nobody.</p><p>The route is graded <strong>D</strong>: a crevassed glacier approach, sustained ice at 50 to 55 degrees, and a long corniced ridge to a summit that drops away on every side. It is a serious, quiet, technically satisfying 7,000 m objective within a week of Kathmandu — the sort of mountain that experienced alpinists seek out precisely because nobody else has been on it.</p>",
    highlights: [
      ["Summit Dorje Lakpa (6,966 m)", "The sharp triple-summited peak above the Langtang valley, climbed by very few parties since 1981."],
      ["A Grade D Route", "Crevassed glacier, sustained 50–55° ice and a long corniced ridge, fixed entirely by our own team."],
      ["Visible from Kathmandu", "On a clear winter morning Dorje Lakpa is one of the peaks you can see from the ridges above the capital."],
      ["The Empty Upper Langtang", "Beyond the Langshisha Kharka there is no trail, no lodge and no other party in the valley."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain nobody has fixed for you."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>. Langtang holds more snow than the western ranges, and <strong>autumn is the more reliable window</strong> — post-monsoon the ice is better consolidated and the long summit ridge is firmer and less heavily corniced.</p><p>Spring works in a cold year and can be unclimbable in a snowy one, when the ice face loads and the ridge cornices grow. The <strong>Syabrubesi road</strong> is the practical constraint at either edge, being rough and prone to closing after heavy rain. We run one or two departures a year and will cancel rather than commit a team to a loaded face.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp at 4,700 m</strong> the route crosses a crevassed glacier — roped, marked and crossed in the cold hours — and climbs fixed line to <strong>Camp 1 at around 5,500 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 50 to 55 degrees</strong> leading to <strong>Camp 2 (6,100 m)</strong> and a <strong>high camp at 6,500 m</strong>. Summit day follows a <strong>long corniced ridge</strong> over subsidiary tops to the main summit, taken one at a time, and runs twelve to sixteen hours with a full abseil descent. The ridge is the character of the mountain: narrow, exposed and considerably longer than it looks from the valley.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> and, ideally, previous time at 7,000 m, along with alpine experience at AD+ or above. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and comfortable on a long corniced crest.</p><p>Isolation is the other requirement. There is no other expedition on the mountain, no established camps and no fixed rope but your team's, and your leader's assessment at base camp determines who goes above Camp 1. That decision is made on efficiency under fatigue rather than best-case technique.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,000 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course. A national alpine club policy or a specialist mountaineering insurer is the realistic option.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Langtang's proximity to Kathmandu means a helicopter can reach base camp within an hour or so in clear weather, which is a genuine advantage over most technical peaks in Nepal. Nothing above Camp 1 is reachable, and a rescue from the face would be a technical operation by the climbing team first.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The Langtang gorge is wet and forested for two days on the approach, so proper waterproofs matter and, in spring, expect leeches below Ghoda Tabela. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Dorje Lakpa climbed?", answer: "Very rarely — a handful of parties since the 1981 first ascent, with long gaps between them. There is no trodden line, no established camp platforms and no fixed rope from anyone else. Every expedition on it fixes its own route from the glacier up." },
      { question: "Can you really see it from Kathmandu?", answer: "On a clear winter morning, yes — Dorje Lakpa is one of the peaks visible from the ridges above the valley, along with Ganesh Himal and Langtang Lirung. It is one of the few 7,000 m peaks in Nepal that most residents of the capital have seen without knowing its name." },
      { question: "How does it compare with Langtang Lirung?", answer: "A grade easier and considerably less exposed to serac fall, which is the main reason we run more departures on it. Dorje Lakpa's difficulty is the sustained ice and the long corniced ridge; Langtang Lirung's is the hazard on the lower face. Most alpinists would call Dorje Lakpa the better climb." },
      { question: "What is the summit success rate?", answer: "Around 35 to 50 percent, and hard to quote meaningfully given how few attempts there are. The long summit ridge and the time it takes are the usual reasons for turning back, decided against a fixed turnaround rather than on how anyone feels." },
      { question: "Where is base camp?", answer: "At around 4,700 m on the moraine beyond the Langshisha Kharka, on the southern side of the upper Langtang valley. It is a full expedition base camp with mess, kitchen, storage and toilet tents and a cook crew, and there is nobody else in the valley." },
      { question: "Is supplementary oxygen used?", answer: "No. Dorje Lakpa is within the range a fit acclimatised climber handles without it, and the difficulty here is technical rather than altitude-related. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,500 m, Camp 2 at 6,100 m and a high camp at 6,500 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "How long is the summit ridge?", answer: "Longer than it looks from the valley — it runs over subsidiary tops to the main summit and takes several hours, corniced and exposed throughout, taken one at a time with the Sherpas probing the crest. It is the reason summit day can run to sixteen hours." },
      { question: "Can Dorje Lakpa and Langshisha Ri be combined?", answer: "In principle they share a valley and a base camp region, but Dorje Lakpa is a full expedition with a rotation and reserve days and it uses the schedule it has. Climbers wanting two Langtang summits are better served by climbing Langshisha Ri in one season and returning for this." },
      { question: "Do you run fixed departures?", answer: "One or two a season, and we cancel if conditions are wrong or the party is not strong enough. On a grade D route with no other team in the valley, a weak team is a serious problem and we would rather refund the trip than run one." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: ["Private jeep transport from Kathmandu to Syabrubesi and back."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,700 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,500 m), Camp 2 (6,100 m) and high camp (6,500 m).",
      permits: `Department of Tourism Dorje Lakpa climbing royalty and permit, ${LANGTANG_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment from Syabrubesi to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the face is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 28-day expedition on Dorje Lakpa (6,966 m) above the upper Langtang valley, with three camps on a grade D route, an acclimatisation rotation, rope fixed by our own team and two reserve days.",
    inExDescription:
      "Jeep transport to Syabrubesi and back, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, national park permit and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group ice equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Dorje Lakpa Expedition (6,966 m) — 28 Days | Green Compass Treks",
      description:
        "Climb Dorje Lakpa (6,966 m) above the upper Langtang valley, a grade D route with a long corniced ridge and almost no traffic. 28 days with three camps, a rotation and one Sherpa per climber.",
      keywords:
        "dorje lakpa expedition, dorje lakpa 6966m, langtang climbing, jugal himal, rarely climbed peaks nepal, technical expedition nepal",
      tags: "Dorje Lakpa, Langtang Region, Expedition, Technical Climb, Jugal Himal, Langtang Valley",
    },
  },
  days: [
    ...langtangApproach("twenty-eight day", true),
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to the Langshisha Kharka (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Langshisha Kharka",
      placeDescription: "A grazing meadow in the upper Langtang valley, the last flat ground before the glacier.",
      ...LANGSHISHA_KHARKA,
      html: p(
        "East up the valley from Kyanjin on a trail that thins within an hour and gives out entirely at the Kharka.",
        "The valley is wide, brown and empty here, walled by <strong>Dorje Lakpa</strong> and the Jugal Himal on the southern side and by the border ridges to the north. Yak herders bring animals up in summer and there is nobody at all in the climbing seasons.",
        "<strong>Langshisha Kharka (4,100 m)</strong> is a grazing meadow and the last flat ground before the moraine. Around 4 hours. Overnight at the Kharka.",
      ),
    },
    {
      title: "Trek from the Langshisha Kharka (4,100 m) to Dorje Lakpa Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp on the moraine below the northern face of Dorje Lakpa.",
      ...DORJE_LAKPA_BC,
      html: p(
        "South off the valley floor and onto the moraine below the face, climbing 600 m on boulder ground with no path and cairns where the crew has left them.",
        "<strong>Dorje Lakpa Base Camp (4,700 m)</strong> is established today: mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next fortnight.",
        "The afternoon is spent reading the route from below — the crevassed glacier, the shelf where Camp 1 goes, the ice face and the long corniced ridge above it, which from here looks a great deal longer than it does from Kyanjin. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...DORJE_LAKPA_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the face before it is done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. The silence in the upper Langtang is complete — no aircraft, no engines, no other party — and it takes most people a day to notice it. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...DORJE_LAKPA_BC,
      html: p(
        "The day that decides who goes above Camp 1. On the ice above camp each climber is put through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Rope-team travel and crevasse rescue get a second session, because the glacier below Camp 1 is broken and is crossed roped in the dark on push mornings.",
        "Your leader is assessing efficiency under fatigue rather than best-case technique. Anyone not satisfactory is told today. Meanwhile the Sherpas begin <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Dorje Lakpa Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...DORJE_LAKPA_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,100 m</strong> and back, on ground that asks nothing technical.",
        "From up there the whole of the upper Langtang is visible — <strong>Langshisha Ri</strong> at the head of the valley, <strong>Langtang Lirung</strong> down the whole length of it to the west, and the Tibetan border ridges to the north.",
        "The afternoon is rest and packing for the rotation. Your leader goes through the season's line on the face with binoculars, which on a mountain nobody else has fixed is a conversation worth having properly. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,500 m on the shelf above the glacier, below the ice face.",
      ...DORJE_LAKPA_C1,
      html: p(
        "The first time on the mountain, and it starts in the dark. The route crosses the <strong>crevassed glacier</strong> roped and on marked line — two to three hours of weaving between open holes — and then climbs fixed rope onto the shelf.",
        "<strong>Camp 1 (5,500 m)</strong> sits above the glacier with the whole upper Langtang below and the ice face rising directly overhead. Six to seven hours with a personal load.",
        "The night here is the point of the rotation, and it gives your leader a proper look at how each climber performs on the route rather than on the practice ice. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,500 m) to Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...DORJE_LAKPA_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, three to four hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,700 m than it would higher, and a rested team moves faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice face above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, on the recovery and preparation day before the summit push.",
      ...DORJE_LAKPA_BC,
      html: p(
        "A rest day and a preparation day in one. The morning is for eating, drinking and sleeping; the afternoon is for the plan.",
        "Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage with timings and a <strong>hard turnaround time</strong> for the summit ridge.",
        "The Sherpa team returns with the report on the state of the face and the ridge, and the satellite forecast arrives in the evening. The go decision is taken on the two together. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,700 m) to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,500 m above the glacier, reoccupied for the summit push.",
      ...DORJE_LAKPA_C1,
      html: p(
        "Another pre-dawn start, and the glacier goes faster the second time — four hours or so for a crossing that took six or seven on the rotation, on a line the team now knows.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,500 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,500 m) to Camp 2 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,100 m on platforms cut into the ice face.",
      ...DORJE_LAKPA_C2,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>ice at 50 to 55 degrees</strong> on fixed rope, and it stays that way for five to six hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and the northern aspect means hands are the limiting factor rather than legs.",
        "<strong>Camp 2 (6,100 m)</strong> is a handful of tents on platforms cut into the face, small and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,100 m) to High Camp (6,500 m)",
      elevation: "6,500 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,500 m on the shoulder below the summit ridge.",
      ...DORJE_LAKPA_HIGH_CAMP,
      html: p(
        "A deliberately short day — three to four hours of fixed ice to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,500 m)</strong> is two or three tents on the smallest usable ground on the mountain, directly beneath the ridge, and it is the coldest night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time — on a ridge this long it is what decides tomorrow. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Dorje Lakpa (6,966 m) and Descend to Camp 2 (6,100 m)",
      elevation: "6,966 m",
      accommodation: "Camp 2",
      placeDescription: "The 6,966 m main summit of Dorje Lakpa, at the end of a long corniced ridge.",
      ...DORJE_LAKPA,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the feature the mountain is built around.",
        "The <strong>summit ridge</strong> is long, narrow and corniced, running over subsidiary tops before the main summit, taken one at a time with the Sherpas probing the crest ahead. It goes on for hours and it is the reason parties turn back — not because it is desperate, but because it does not end when they expect it to.",
        "The <strong>main summit (6,966 m)</strong> drops away on every side. <strong>Langtang Lirung</strong> stands west down the valley, <strong>Shishapangma</strong> and the Tibetan plateau north, the <strong>Jugal Himal</strong> south, and on a clear morning the Kathmandu valley is visible beyond it.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Fourteen to eighteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,100 m) to Dorje Lakpa Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...DORJE_LAKPA_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. On a mountain this rarely visited, leaving rope behind is not an option — it stays for decades and helps nobody.",
        "The crevassed glacier is crossed roped in the cold of the early morning for the last time.",
        "<strong>Base camp (4,700 m)</strong> in the middle of the day, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Dorje Lakpa Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The first of two contingency days, held for weather or a second summit attempt.",
      ...DORJE_LAKPA_BC,
      html: p(
        "The first of two reserve days. On a mountain whose summit day is decided by the length of a ridge rather than by any single difficulty, a second attempt on fresher legs is worth a great deal.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest in an empty valley with the whole upper Langtang to look at. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day and Break Camp at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Dorje Lakpa Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the face.",
      ...DORJE_LAKPA_BC,
      html: p(
        "The second reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Syabrubesi goes back out on porters, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last of the light looking east along the ridge, which after a fortnight is a shape everyone in camp knows by heart. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,700 m) to Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The lodge village below Langtang Lirung, reached on the walk out from the mountain.",
      ...KYANJIN_GOMPA,
      html: p(
        "Camp comes down after breakfast and the group descends the moraine to the <strong>Langshisha Kharka</strong> and back onto the trail.",
        "The valley opens and softens as it drops west, and by the afternoon there is grass, then yak pasture, then the chortens and mani walls above Kyanjin.",
        "<strong>Kyanjin Gompa (3,870 m)</strong> means a lodge, a stove, a menu and the cheese factory. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 6 to 7 hours. Overnight at Kyanjin Gompa.",
      ),
    },
    ...langshishaRiExpedition.days.slice(13, 17).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given.",
          "A quiet evening in Syabrubesi at the end of a long expedition.",
        )
        .replace(
          "Dorje Lakpa and Langtang Lirung are the two our returning Langshisha climbers ask about, and both are a serious step up from here.",
          "Langtang Lirung, across the valley and a grade harder, is the question our returning Dorje Lakpa climbers most often ask.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const jugalHimalGyalzenPeak: Climb = {
  region: "Langtang Region",
  price: 4950,
  difficulty: "difficult",
  maxAltitude: 6151,
  grade: "AD-",
  center: [85.74, 28.03],
  zoom: 11,
  content: {
    slug: "jugal-himal-gyalzen-peak-climbing",
    title: "Jugal Himal Gyalzen Peak Climbing",
    overview:
      "<p>The <strong>Jugal Himal</strong> is the range you can see from the northern rim of the Kathmandu valley on a clear winter morning, and almost nobody goes there. <strong>Gyalzen Peak (6,151 m)</strong> stands at its western end above the sacred lakes of <strong>Panch Pokhari</strong>, and it is climbed so rarely that the route has to be found again each time rather than followed.</p><p>The approach is what makes this trip unusual. There is no airstrip, no jeep road beyond Chautara and no trekking infrastructure at all — five days of walking up ridges through Tamang villages and rhododendron forest, on trails used by herders rather than by trekkers, to a chain of five glacial lakes at 4,100 m that Hindu pilgrims walk to once a year in August. The climb itself is a clean <strong>AD-</strong> snow and ice route, and the whole thing happens within eighty kilometres of the capital.</p>",
    highlights: [
      ["Summit Gyalzen Peak (6,151 m)", "A rarely climbed summit at the western end of the Jugal Himal, with no established route to follow."],
      ["Panch Pokhari (4,100 m)", "Five sacred glacial lakes visited by Hindu pilgrims each August and by almost nobody else."],
      ["A Trek With No Trekkers", "Five days up ridges and through Tamang villages on herders' trails with no lodges and no other parties."],
      ["Eighty Kilometres from Kathmandu", "The Jugal Himal is visible from the capital's northern rim, and virtually nobody climbs in it."],
      ["An AD- Snow and Ice Route", "A crevassed glacier, sustained 45° ground on fixed rope and a short corniced crest to finish."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Jugal sits on the front range and catches weather from the south before anything else does, which makes it wetter than Langtang and considerably wetter than Manang.</p><p><strong>Autumn is the stronger season</strong> — clearer air, firmer snow and a drier approach. Spring is warm and green with rhododendron in flower along the ridges, and it brings more cloud and more snow on the peak. The <strong>approach ridges</strong> are the practical constraint: they are grassy and forested rather than rocky, and after heavy rain they turn to mud and leeches. The monsoon puts the whole thing out of use except for the August pilgrimage.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD-</strong>. From <strong>base camp at 4,700 m</strong> above the lakes the route crosses a small crevassed glacier roped as a team and climbs fixed line to a <strong>high camp at 5,400 m</strong>.</p><p>Summit day climbs a <strong>snow and ice slope of around 45 degrees</strong> for three to four hours on fixed rope, and finishes along a <strong>short corniced crest</strong> taken one at a time. Nine to twelve hours from high camp with an abseil descent. Nothing on it is technically hard; what makes it a real expedition is that the route has to be worked out and fixed from scratch, on a mountain with no trodden line and no other team within a hundred kilometres.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> or equivalent alpine experience, and comfort on fixed rope and roped glacier travel. The training day at base camp checks technique rather than teaching it, and the crevassed glacier below high camp means rope-team competence is a requirement.</p><p>The acclimatisation is gradual by necessity — the approach climbs from 1,800 m to 4,100 m over five days of ridge walking, which is a gentler profile than most Nepalese approaches. Two nights at <strong>Panch Pokhari</strong>, two at base camp at 4,700 m and one at 5,400 m follow. Your leader monitors saturation daily from Pauwa Bas onward.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m, including roped glacier travel and fixed-rope climbing</strong>, is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the approach and none of the climbing.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The Jugal is close to Kathmandu in a straight line and remote in every practical sense — there is no airstrip, no road beyond Chautara and no other party in the area. Helicopters reach Panch Pokhari and base camp in clear weather and are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for five days of ridge walking. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp and factor 50 sunscreen.</p><p>The approach is wet, green and low for the first three days, so bring <strong>proper waterproofs and expect leeches</strong> in spring — this is front-range country and it rains here when it is dry further north. We supply all group rope, screws, snow stakes and anchors, and our Sherpas fix the route. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "Where exactly is the Jugal Himal?", answer: "Immediately east of the Langtang range and directly north of the Kathmandu valley — it is the wall of snow peaks visible from Nagarkot and the northern rim on a clear winter morning. Despite that proximity it has almost no trekking infrastructure and sees a tiny number of climbers." },
      { question: "What is Panch Pokhari?", answer: "A chain of five glacial lakes at 4,100 m, sacred to Hindus and the site of a pilgrimage each August at Janai Purnima, when several thousand people walk up from the valleys for a single day. For the rest of the year there is a small shrine, a couple of stone shelters and nobody at all." },
      { question: "How rarely is Gyalzen Peak climbed?", answer: "Rarely enough that the route is worked out afresh each time rather than followed. There is no fixed rope from other teams, no established camp platforms and no reliable route description. That is either the attraction or the reason to choose somewhere else." },
      { question: "Is the approach a trek in its own right?", answer: "Yes, and a good one — five days up ridges through Tamang villages, rhododendron forest and high pasture, on trails used by herders and pilgrims rather than trekkers. There are no lodges, so the group camps throughout, and you are unlikely to meet another foreigner." },
      { question: "What is the summit success rate?", answer: "Around 55 to 65 percent on our departures. Weather off the front range is the commonest reason for turning back — the Jugal catches cloud that the ranges behind it do not — and a route that has to be found and fixed takes longer than one already in place." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,700 m on the moraine above Panch Pokhari, and high camp at 5,400 m at the edge of the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There has been nothing resembling a lodge since Bhotang." },
      { question: "How close is it to Kathmandu really?", answer: "About eighty kilometres in a straight line, and a day's drive plus five days of walking in practice. It is the closest genuinely unfrequented climbing area to the capital, which is a strange thing to be able to say about a 6,151 m peak." },
      { question: "Can we combine it with the Panch Pokhari trek?", answer: "The itinerary already is the Panch Pokhari trek, which is the standard route into this area and a fine walk in itself. The climb adds about six days to it. If the peak turns out not to be for you, the trek stands on its own." },
      { question: "Is there mobile signal on the route?", answer: "Patchy NTC coverage on the ridges as far as Hile Bhanjyang and nothing above Panch Pokhari. There are no lodges to charge in, so bring a power bank and expect to be out of contact for about ten days." },
      { question: "Why is this peak not better known?", answer: "Because the Jugal has no airstrip, no road and no lodge network, and Nepalese trekking developed around the places that do. Everything here has to be carried in and camped, which keeps both trekkers and operators away — and leaves the range in more or less the condition it was in fifty years ago." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: ["Private jeep transport from Kathmandu to Bhotang via Chautara, and back at the end of the trip."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation:
        "Full tented accommodation throughout the approach and the walk out, with two-person tents, a mess tent, kitchen tent and toilet tent — there are no lodges beyond Bhotang.",
      camping:
        "Tented accommodation at Gyalzen Peak base camp (4,700 m) and high camp (5,400 m).",
      permits: `Nepal Mountaineering Association climbing permit for Gyalzen Peak, ${LANGTANG_PERMITS}.`,
      sherpa: LANGTANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the entire trip, with all food and fuel carried in from the road head.",
        "A training and skills-check day at base camp covering rope-team travel, crevasse rescue, fixed-line ascent and abseil technique.",
        "Route finding and fixing of the glacier, the ice slope and the summit crest by our climbing Sherpas.",
        "Porter and pack-animal transport of all group equipment from Bhotang to base camp.",
        "Two reserve days held for the summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 16,
    gearRentalDays: 14,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 19-day itinerary climbing Gyalzen Peak (6,151 m) in the Jugal Himal, approached on the Panch Pokhari pilgrimage trail from Chautara with full camping support, a training day and two reserve days.",
    inExDescription:
      "Jeep transport to Bhotang and back, Kathmandu hotel nights, full tented accommodation throughout, three meals a day, the NMA climbing permit, national park permit and TIMS, a licensed climbing guide with Sherpa support, a cook crew, all group glacier and ice equipment, route finding and fixing, and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Jugal Himal Gyalzen Peak Climbing (6,151 m) — 19 Days | Green Compass Treks",
      description:
        "Climb Gyalzen Peak (6,151 m) in the Jugal Himal above the sacred lakes of Panch Pokhari, eighty kilometres from Kathmandu and climbed by almost nobody. 19 days with full camping support and an AD- route.",
      keywords:
        "gyalzen peak climbing, jugal himal, panch pokhari climbing, gyalzen peak 6151m, rarely climbed peaks nepal, chautara trekking peak",
      tags: "Gyalzen Peak, Jugal Himal, Langtang Region, Peak Climbing, Panch Pokhari, 6000m Peak",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Thamel's gear shops are a few minutes' walk away and stock most of what a climber discovers they have left at home.",
        "Your guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "Your guide runs the full briefing at the hotel: the nineteen-day plan, the five-day approach, the acclimatisation profile and the summit day, along with an honest account of what climbing a peak with no established route involves.",
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over climbing layers, and anything unsuitable swapped for rental kit here.",
        "Our office lodges the <strong>climbing permit</strong>, the national park permit and the TIMS card. Because there are no lodges beyond Bhotang, the crew also does the full camping and food load-out today. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Bhotang (1,800 m)",
      elevation: "1,800 m",
      accommodation: "Bhotang",
      placeDescription: "A Tamang village above Chautara, at the road head for the Panch Pokhari trail.",
      ...BHOTANG,
      html: p(
        "East out of the Kathmandu valley on the Araniko Highway toward the Tibetan border, then north at Dolalghat on a hill road to <strong>Chautara</strong>, the district headquarters of Sindhupalchok.",
        "From Chautara a rough jeep track climbs north through terraced farmland and villages that were badly hit by the 2015 earthquake and have been rebuilt since.",
        "<strong>Bhotang (1,800 m)</strong> is a Tamang village at the road head, and from tomorrow everything moves on foot with no lodges anywhere ahead. Around 6 to 7 hours. Overnight at Bhotang.",
      ),
    },
    {
      title: "Trek from Bhotang (1,800 m) to Kami Kharka (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Kami Kharka",
      placeDescription: "A grazing clearing in rhododendron and oak forest on the ridge above Bhotang.",
      ...KAMI_KHARKA,
      html: p(
        "North out of the village and straight onto the ridge, climbing 900 m through terraced fields and then into forest.",
        "The trail is a herders' and pilgrims' path rather than a trekking route — narrow, steep and unmarked, with no lodges, no teahouses and nothing resembling a sign.",
        "<strong>Kami Kharka (2,700 m)</strong> is a grazing clearing in oak and rhododendron forest where the crew puts up camp. It is warm, green and completely quiet. Around 6 hours. Overnight at Kami Kharka.",
      ),
    },
    {
      title: "Trek from Kami Kharka (2,700 m) to Pauwa Bas (3,500 m)",
      elevation: "3,500 m",
      accommodation: "Pauwa Bas",
      placeDescription: "A ridge camp above the treeline, on the Panch Pokhari pilgrimage trail.",
      ...PAUWA_BAS,
      html: p(
        "Up the ridge through the last of the rhododendron, which in April is in full flower along this whole section and is the reason spring departures are worth considering despite the cloud.",
        "The forest thins into juniper and then open grass, and the views open south over the middle hills toward the Kathmandu valley and north to the first of the Jugal peaks.",
        "<strong>Pauwa Bas (3,500 m)</strong> is a bare ridge camp with a stone shelter used by pilgrims in August. Your guide starts taking saturation readings this evening. Around 6 hours. Overnight at Pauwa Bas.",
      ),
    },
    {
      title: "Trek from Pauwa Bas (3,500 m) to Hile Bhanjyang (3,950 m)",
      elevation: "3,950 m",
      accommodation: "Hile Bhanjyang",
      placeDescription: "A saddle camp high on the ridge, with the Jugal Himal opening to the north.",
      ...HILE_BHANJYANG,
      html: p(
        "A shorter day along the crest of the ridge, climbing steadily over a series of grassy tops with the country becoming increasingly bare.",
        "The <strong>Jugal Himal</strong> opens properly here — Dorje Lakpa, Madiya and Gyalzen along the northern skyline, with the Tibetan border ridges behind them.",
        "<strong>Hile Bhanjyang (3,950 m)</strong> is a saddle with a shrine and a stone shelter. It is exposed and cold at night, and on a clear evening the lights of Kathmandu are visible eighty kilometres to the south-west. Around 4 to 5 hours. Overnight at Hile Bhanjyang.",
      ),
    },
    {
      title: "Trek from Hile Bhanjyang (3,950 m) to Panch Pokhari (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Panch Pokhari",
      placeDescription: "Five sacred glacial lakes at 4,100 m, a Hindu pilgrimage site below the Jugal Himal.",
      ...PANCH_POKHARI,
      html: p(
        "A short day north along the ridge and then down to the lakes, on ground that is bare, wind-scoured and entirely empty.",
        "<strong>Panch Pokhari (4,100 m)</strong> is a chain of five glacial lakes with a small shrine and a few stone shelters. Each August at Janai Purnima several thousand Hindu pilgrims walk up from the valleys for a single day; for the rest of the year there is nobody here at all.",
        "The afternoon is free to walk round the lakes, which takes an hour and is worth doing. Around 3 to 4 hours. Overnight at Panch Pokhari.",
      ),
    },
    {
      title: "Acclimatisation Day at Panch Pokhari (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Panch Pokhari",
      placeDescription: "The sacred lakes below the Jugal Himal, where the acclimatisation walk is made.",
      ...PANCH_POKHARI,
      html: p(
        "Climb high, sleep low. The morning walk goes north-east up the ridge above the lakes toward <strong>4,700 m</strong> and back, on open ground with nothing technical about it.",
        "From the high point the whole western Jugal is laid out and, more usefully, so is the route on <strong>Gyalzen Peak</strong> — the glacier, the shelf where high camp goes and the slope above it. Your guide spends an hour with binoculars working out this season's line, because there is no established one.",
        "Back at the lakes for the afternoon. Around 4 to 5 hours. Overnight at Panch Pokhari.",
      ),
    },
    {
      title: "Trek from Panch Pokhari (4,100 m) to Gyalzen Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "A tented base camp on the moraine above Panch Pokhari, below the glacier of Gyalzen Peak.",
      ...GYALZEN_BC,
      html: p(
        "North-east off the pilgrimage trail and onto the moraine, climbing 600 m over boulder ground with no path at all.",
        "<strong>Gyalzen Base Camp (4,700 m)</strong> is a tented camp on a flat shelf below the glacier, with the lakes visible below to the south-west and the peak directly above.",
        "The afternoon is spent settling in and going over the route from underneath, which always reads differently from the way it did through binoculars yesterday. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Skills Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "The base camp below the glacier, where technique is checked before the climb.",
      ...GYALZEN_BC,
      html: p(
        "A working day on the glacier ice above camp. Every climber is taken through <strong>rope-team travel with correct spacing, crevasse rescue with a hauling system, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Crevasse work gets the most time, because the glacier between base camp and high camp is broken and is crossed roped in the dark on summit morning.",
        "In the afternoon the group walks part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>finding and fixing the line</strong>, which on this peak is genuine route work rather than clipping into someone else's rope. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Gyalzen Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "The base camp below the glacier, on the acclimatisation day before the climb.",
      ...GYALZEN_BC,
      html: p(
        "A second day at base camp, spent on acclimatisation and on waiting for the Sherpa team's report from above.",
        "The morning walk goes up the moraine toward <strong>5,100 m</strong> and back, gaining and losing height on ground that asks nothing technical, with the Jugal peaks opening to the east.",
        "The afternoon is rest. The Sherpas come down with the route report and your guide sets the plan and the turnaround time for summit day. On a peak with no established line, that briefing is worth attending closely. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,700 m) to Gyalzen High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Gyalzen High Camp",
      placeDescription: "A tented camp at 5,400 m on the glacier shelf below the summit slope.",
      ...GYALZEN_HIGH_CAMP,
      html: p(
        "Roped from the moment the group leaves camp. The route works up the <strong>crevassed glacier</strong> on the line the Sherpas marked, weaving between open holes and over one or two snow bridges, for four to five hours with a moderate load.",
        "<strong>High camp (5,400 m)</strong> is a set of platforms stamped out on the glacier shelf below the face, exposed and cold as soon as the sun goes.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Gyalzen Peak (6,151 m) and Descend to Base Camp (4,700 m)",
      elevation: "6,151 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "The 6,151 m summit of Gyalzen Peak, at the western end of the Jugal Himal.",
      ...GYALZEN_PEAK,
      html: p(
        "Roped and moving by two in the morning. The first hour crosses the upper glacier to the foot of the face, and then the climbing starts.",
        "The <strong>snow and ice slope</strong> runs at around 45 degrees on fixed rope for three to four hours, sustained and steady, with the sun arriving somewhere near 5,900 m.",
        "The top of the slope gives onto a <strong>short corniced crest</strong>, taken one at a time. From the <strong>summit (6,151 m)</strong>: <strong>Dorje Lakpa</strong> and the Jugal peaks along the ridge to the north-west, the Tibetan border a few kilometres north, Langtang Lirung beyond it, and south over the middle hills to the <strong>Kathmandu valley</strong> — visible on a clear morning, which is a strange thing to see from a summit almost nobody has stood on.",
        "The descent abseils the slope and reverses the glacier to high camp and then base camp. Ten to thirteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Gyalzen Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "The first of two contingency days, held for weather or a second summit attempt.",
      ...GYALZEN_BC,
      html: p(
        "The first of two reserve days, and on a front-range peak they are used often — the Jugal catches cloud coming up from the south that the ranges behind it never see.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, this is rest at base camp above the lakes, with the whole western Jugal to look at and nobody within a day's walk. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day and Break Camp at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Gyalzen Base Camp",
      placeDescription: "The final contingency day, and the last night above Panch Pokhari.",
      ...GYALZEN_BC,
      html: p(
        "The second reserve day and the end of the trip's margin. If it is not needed for the climb, camp comes down today and the group descends to the lakes.",
        "Everything the trip carried up from Bhotang goes back down with it — there is no infrastructure here at all, and what is left on this moraine would stay for a very long time.",
        "The Sherpa team strips the fixed rope from the route on the way down. Nothing is left on the mountain, which on a peak this rarely visited matters more than usual. Overnight at base camp or Panch Pokhari.",
      ),
    },
    {
      title: "Trek from Base Camp (4,700 m) to Hile Bhanjyang (3,950 m)",
      elevation: "3,950 m",
      accommodation: "Hile Bhanjyang",
      placeDescription: "The saddle camp on the ridge, on the walk out from the Jugal.",
      ...HILE_BHANJYANG,
      html: p(
        "Down the moraine to <strong>Panch Pokhari</strong> and past the lakes for the last time, then south-west along the ridge on the pilgrimage trail.",
        "The walking is easy after a fortnight of moraine and glacier, and the country softens with every hour — bare grass, then juniper, then the first rhododendron.",
        "<strong>Hile Bhanjyang (3,950 m)</strong> in the afternoon, with the Jugal behind you and the middle hills falling away to the south. Around 6 hours. Overnight at Hile Bhanjyang.",
      ),
    },
    {
      title: "Trek from Hile Bhanjyang (3,950 m) to Kami Kharka (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Kami Kharka",
      placeDescription: "The grazing clearing in the forest on the ridge above Bhotang.",
      ...KAMI_KHARKA,
      html: p(
        "A long descent along the ridge through Pauwa Bas and back into the forest, losing 1,250 m.",
        "The rhododendron and oak close in, and with them the warmth, the birds and the smell of vegetation after two weeks of rock and ice. In spring this section is in flower for hours at a time.",
        "<strong>Kami Kharka (2,700 m)</strong> is the last camp of the trip, in a clearing where the crew has been before. Around 6 to 7 hours. Overnight at Kami Kharka.",
      ),
    },
    {
      title: "Trek to Bhotang (1,800 m) and Drive to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Down the ridge through the terraced fields to <strong>Bhotang (1,800 m)</strong> in three to four hours, where the jeeps are waiting at the road head.",
        "The drive down through <strong>Chautara</strong> and along the Araniko Highway takes six to seven hours, and the transition from an empty moraine to Kathmandu traffic inside a single day is abrupt.",
        "Back in <strong>Kathmandu</strong> in the evening. A hot shower, a proper meal, and your <strong>summit certificate</strong> presented over dinner with the guide and the climbing Sherpas. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace, with the Jugal on the northern horizon if the air is clear.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Langshisha Ri and Dorje Lakpa, over the ridge in the Langtang valley, are the two our returning Jugal climbers most often ask about.",
      ),
    },
  ],
};
