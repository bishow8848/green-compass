import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  BEDING, CHARIKOT, DONGANG, GONGAR, KYAJO_RI, KYAJO_RI_BC, LUKLA, NA_GAON, NAMCHE, PACHERMO,
  PACHERMO_BC, PHAKDING, SIMIGAON, TASHI_LAPCHA, TASHI_LAPCHA_BC, THAME, TSHO_ROLPA, YALUNG_RI,
  YALUNG_RI_BC,
} from "./places";

/**
 * Rolwaling: the valley between Langtang and the Khumbu, and the peaks around
 * the Tashi Lapcha.
 *
 * Every itinerary here is a traverse. The valley is entered from the road at
 * Charikot in the south-west, walked up to Beding and Na Gaon, and left over
 * the Tashi Lapcha (5,755 m) into the Khumbu — which means the climbs are done
 * in the middle of a crossing rather than out and back from a base camp, and
 * the trip finishes at Lukla rather than where it started.
 */

// Pachermo's high camp, on the glacier above the Tashi Lapcha base camp.
const PACHERMO_HIGH_CAMP = { lng: 86.5083, lat: 27.8733 }; // approx

const ROLWALING_PERMITS =
  "Gaurishankar Conservation Area Permit, Sagarmatha National Park entry permit for the Khumbu side, and the Trekkers' Information Management System (TIMS) card";

const ROLWALING_SHERPA =
  "One climbing Sherpa for every two climbers above base camp and for the Tashi Lapcha crossing, with all their equipment, wages and insurance.";

/**
 * The Rolwaling approach, shared by every itinerary in this file: arrival, the
 * Kathmandu working day, the drive to the road head below Simigaon, and five
 * days up the valley to Na Gaon with acclimatisation days at Beding and Na.
 * Nine days, on a trail that carries a small fraction of the Khumbu's traffic.
 */
function rolwalingApproach(planWord: string): ClimbDay[] {
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
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        `Your guide runs the full briefing at the hotel: the ${planWord} plan, the acclimatisation profile, the summit day, and — at length — the <strong>Tashi Lapcha</strong>, which is the crux of every itinerary in this valley and the reason the trip is a traverse rather than a round trip.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over climbing layers, and anything unsuitable swapped for rental kit here rather than discovered at 5,500 m.",
        "Our office lodges the <strong>climbing permit</strong>, the Gaurishankar Conservation Area permit, the Sagarmatha National Park permit for the far side and the TIMS card. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Chetchet (1,400 m) via Charikot",
      elevation: "1,400 m",
      accommodation: "Chetchet",
      placeDescription: "A roadside settlement on the Tama Koshi at the foot of the Rolwaling valley.",
      ...GONGAR,
      html: p(
        "East out of Kathmandu on the Araniko Highway and then onto the hill road through <strong>Dolakha</strong> and <strong>Charikot</strong>, the district headquarters, with Gaurishankar filling the northern skyline on a clear morning.",
        "Beyond Charikot the road descends to the <strong>Tama Koshi</strong> and follows it north on rough track through country that was badly hit by the 2015 earthquake and has been rebuilt since.",
        "<strong>Chetchet (1,400 m)</strong> is a handful of buildings at the road head where the walking starts. Around 8 to 9 hours. Overnight at Chetchet.",
      ),
    },
    {
      title: "Trek from Chetchet (1,400 m) to Simigaon (2,000 m)",
      elevation: "2,000 m",
      accommodation: "Simigaon",
      placeDescription: "A Sherpa village on a shelf high above the Tama Koshi, with a gompa above it.",
      ...SIMIGAON,
      html: p(
        "Across the Tama Koshi on a suspension bridge and then straight up — 600 m of steep switchbacks through terraced fields and bamboo, which after a day in a vehicle is a blunt reintroduction to walking.",
        "<strong>Simigaon (2,000 m)</strong> sits on a shelf high above the river, a Sherpa village of stone houses with a gompa on the rise above it and, from the top of the village, a first view north to <strong>Gaurishankar</strong>.",
        "It is the last village on the road side of the valley and the last with any road connection at all. Around 4 hours. Overnight at Simigaon.",
      ),
    },
    {
      title: "Trek from Simigaon (2,000 m) to Dongang (2,800 m)",
      elevation: "2,800 m",
      accommodation: "Dongang",
      placeDescription: "A clearing in dense forest on the floor of the Rolwaling gorge.",
      ...DONGANG,
      html: p(
        "North into the <strong>Rolwaling gorge</strong> proper, contouring through dense forest high above the Rolwaling Khola on a trail that is narrow, rooty and frequently exposed.",
        "This is protected habitat within the Gaurishankar Conservation Area — oak, rhododendron and bamboo, with red panda and musk deer in it and almost nobody else on the path.",
        "<strong>Dongang (2,800 m)</strong> is a clearing beside the river with a couple of simple shelters. The gorge is deep enough that the light goes early. Around 6 hours. Overnight at Dongang.",
      ),
    },
    {
      title: "Trek from Dongang (2,800 m) to Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main Sherpa village of the Rolwaling valley, strung along the river beneath Gaurishankar.",
      ...BEDING,
      html: p(
        "Up the gorge as it steepens and then opens, with the forest thinning into juniper and the walls pulling back.",
        "<strong>Beding (3,690 m)</strong> is the principal village of the Rolwaling — a single line of stone houses along the river with a gompa at its centre, occupied mainly in summer and quiet the rest of the year.",
        "The Rolwaling Sherpas are the same people as the Khumbu Sherpas and crossed the Tashi Lapcha to settle here; the valley is regarded as a <em>beyul</em>, a hidden sacred valley, and hunting has traditionally been forbidden in it. Around 6 hours. Overnight at Beding.",
      ),
    },
    {
      title: "Acclimatisation Day at Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main village of the Rolwaling, where the first acclimatisation day is spent.",
      ...BEDING,
      html: p(
        "Climb high, sleep low. The morning walk goes up the hillside behind the village toward <strong>4,300 m</strong>, on steep grass and rock with the whole valley opening below.",
        "<strong>Gaurishankar (7,134 m)</strong> stands directly across the valley — a sacred mountain, closed to climbing from the Nepal side for many years and still very rarely attempted — and from the high point the Rolwaling glacier is visible running east toward the Tashi Lapcha.",
        "Back in Beding for the afternoon. Your guide takes the first saturation readings tonight. Around 4 hours. Overnight at Beding.",
      ),
    },
    {
      title: "Trek from Beding (3,690 m) to Na Gaon (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na Gaon",
      placeDescription: "The highest settlement in the Rolwaling, a summer village of stone huts and barley walls.",
      ...NA_GAON,
      html: p(
        "A short and open day up the widening valley, past mani walls and grazing yaks, with the walls of Rolwaling rising on both sides.",
        "<strong>Na Gaon (4,180 m)</strong> is the highest settlement in the valley — a scatter of stone huts and walled barley plots used in summer by the people of Beding, and almost empty in the climbing seasons.",
        "It is the base for everything above: Yalung Ri, the Tsho Rolpa and the Tashi Lapcha are all reached from here, and there is nothing beyond it but glacier. Around 3 to 4 hours. Overnight at Na Gaon.",
      ),
    },
    {
      title: "Acclimatisation Day at Na Gaon (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na Gaon",
      placeDescription: "The highest village in the Rolwaling, where the second acclimatisation day is spent.",
      ...NA_GAON,
      html: p(
        "The second acclimatisation day, and the one that sets up everything above. The morning walk climbs north toward the <strong>Yalung Ri</strong> base camp area at around <strong>4,800 m</strong> and returns.",
        "The view from up there covers the whole head of the valley: the <strong>Trakarding glacier</strong>, the moraine dam of the <strong>Tsho Rolpa</strong>, and the notch of the Tashi Lapcha on the eastern skyline.",
        "Back at Na for the afternoon. Your guide reviews saturation trends this evening before the group commits to the glacier. Around 4 to 5 hours. Overnight at Na Gaon.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const pachermoPeakClimbing: Climb = {
  region: "Rolwaling Region",
  price: 4450,
  difficulty: "difficult",
  maxAltitude: 6187,
  grade: "AD-",
  center: [86.47, 27.87],
  zoom: 11,
  content: {
    slug: "pachermo-peak-climbing",
    title: "Pachermo Peak Climbing",
    overview:
      "<p><strong>Pachermo (6,187 m)</strong> rises directly above the <strong>Tashi Lapcha</strong>, the 5,755 m pass that links the Rolwaling valley to the Khumbu, and it is climbed almost exclusively as part of that crossing. The trip is a traverse rather than an out-and-back: in from the road at Charikot, up the Rolwaling gorge to Beding and Na, onto the glacier, up the peak, and then over the pass and down through Thame to Namche and Lukla.</p><p>The climbing is a clean <strong>AD-</strong> — a crevassed glacier, a snow and ice slope at 45 to 50 degrees on fixed rope, and a short corniced summit ridge. The pass itself is the other half of the undertaking: a genuinely serious glaciated col with fixed rope, loose ground and a long committing day. Between them they make one of the best climbing traverses in Nepal, on a trail that carries a small fraction of the Khumbu's traffic.</p>",
    highlights: [
      ["Summit Pachermo (6,187 m)", "A clean AD- snow and ice route directly above the Tashi Lapcha."],
      ["Cross the Tashi Lapcha (5,755 m)", "A serious glaciated col linking Rolwaling to the Khumbu, with fixed rope and a long committing day."],
      ["A True Traverse", "In from Charikot, out through Namche and Lukla — no ground walked twice."],
      ["The Rolwaling Valley", "A beyul, or hidden sacred valley, with Gaurishankar above it and almost nobody on the trail."],
      ["The Tsho Rolpa", "Camp beside Nepal's largest glacial lake, held behind a moraine dam that has been monitored for decades."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Rolwaling is wetter than the Khumbu and catches more of the monsoon's tail, so early October departures can meet cloud and soft snow on the glacier and the pass.</p><p>The <strong>Tashi Lapcha</strong> dictates the window. It needs settled conditions and firm snow, and after heavy fall it becomes unjustifiable — which on a traverse means the group has to retreat the whole way back down the Rolwaling. Mid-October to early November and late April to May are the reliable spells. The monsoon closes the valley, and winter puts the pass beyond a guided party.</p>",
      },
      {
        heading: "Climb Difficulty & the Tashi Lapcha",
        content:
          "<p>Two problems. <strong>Pachermo (AD-)</strong> is climbed from a high camp at 5,500 m: a crevassed glacier crossed roped, a <strong>snow and ice slope of 45 to 50 degrees</strong> on fixed rope for three to four hours, and a short corniced crest to the summit. Nine to twelve hours round trip.</p><p>The <strong>Tashi Lapcha (5,755 m)</strong> is a full day in its own right. The approach crosses the Trakarding glacier and its moraine — loose, slow ground with rockfall in places — and the col itself is fixed with rope on both sides, with a steep descent onto the Drolambau glacier on the Khumbu side. Ten to twelve hours, fully committed, and it is the reason this trip needs a reserve day of its own.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>We ask for <strong>previous experience above 5,000 m</strong> and, ideally, a 6,000 m peak already climbed. You should be comfortable on fixed rope and moving as a roped team on a crevassed glacier. The training day at base camp checks and refreshes rather than teaching from scratch.</p><p>The acclimatisation is built into the approach: five days walking up from 1,400 m, an acclimatisation day at <strong>Beding (3,690 m)</strong>, another at <strong>Na Gaon (4,180 m)</strong>, and then two nights on the glacier before the summit. It is a gradual profile and it needs to be, because the Tashi Lapcha comes after the peak rather than before it and there is no easy way out from the far side.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m, including roped glacier travel and fixed-rope climbing</strong>, is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the walk to Beding and nothing above it.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The upper Rolwaling is remote — Na Gaon is five days' walk from the road and there is no airstrip in the valley — and a helicopter can reach Na and the Tsho Rolpa in clear weather but not the pass. Evacuation from between the glacier camps and the Khumbu side is slow and expensive.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the valley. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>The Rolwaling gorge is wet and forested for two days, so proper waterproofs matter and in spring expect leeches below Beding. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, fix the peak and rig both sides of the Tashi Lapcha. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "Why is this a traverse rather than an out-and-back?", answer: "Because the peak sits on the pass and the pass is the natural way out. Retracing the Rolwaling would mean five days back down a gorge you have already walked; crossing the Tashi Lapcha puts you in the Khumbu and out through Namche and Lukla, with no ground repeated and a far better trip." },
      { question: "How serious is the Tashi Lapcha?", answer: "Serious enough to be the crux of the itinerary rather than the peak. The approach crosses loose moraine on the Trakarding glacier with rockfall in places, the col is fixed on both sides, and the descent onto the Drolambau glacier is steep. Ten to twelve hours, fully committed, and it is not a trekking pass." },
      { question: "What happens if the pass is not crossable?", answer: "The group retreats down the Rolwaling to Charikot, which adds four or five days and means flying home from Kathmandu rather than Lukla. It happens perhaps one season in five after heavy snow. Your guide makes the call at the Tashi Lapcha base camp, not on the col." },
      { question: "What is the Tsho Rolpa?", answer: "Nepal's largest glacial lake, held behind a moraine dam at the head of the Rolwaling. It has grown substantially since the 1950s as the Trakarding glacier has retreated, and it has been monitored and partially drained because of the flood risk to villages downstream. Camping beside it is one of the more memorable nights of the trip." },
      { question: "What is the summit success rate?", answer: "Around 65 to 75 percent on our departures. Weather on the summit crest and conditions on the glacier are the usual reasons for turning back, and because the pass has to be crossed regardless, a group that misses the peak still finishes the traverse." },
      { question: "How busy is the Rolwaling?", answer: "Very quiet. The valley has no airstrip, no road beyond Chetchet and only basic lodges as far as Beding, and it carries a tiny fraction of the Khumbu's traffic. Between Na Gaon and Thame you are unlikely to see anyone at all who is not in your own group." },
      { question: "What does beyul mean?", answer: "A hidden valley, in the Tibetan Buddhist tradition — a place set aside as a refuge and treated as sacred. Rolwaling is one of the best known, and hunting has traditionally been forbidden in it, which is part of why the wildlife along the gorge is as good as it is." },
      { question: "Where are base camp and high camp?", answer: "The Tashi Lapcha base camp at around 5,000 m below the col, and Pachermo high camp at 5,500 m on the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There has been no lodge since Na Gaon." },
      { question: "Can Pachermo be climbed without the traverse?", answer: "In principle, by returning down the Rolwaling, and we will build it that way on request. In practice almost nobody does — the pass is what makes the trip, and the extra days spent retracing the gorge are days that could be spent walking out through the Khumbu." },
      { question: "Is there mobile signal on the route?", answer: "Patchy NTC coverage as far as Beding and nothing above Na Gaon until Thame on the Khumbu side — about five days out of contact. Bring a power bank, and expect no charging above Beding." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Flight from Lukla to Kathmandu at the end of the trip, including the road transfer from Manthali in Ramechhap when the flights are operating from there in peak season.",
      ],
      transport: ["Private jeep transport from Kathmandu to Chetchet via Charikot at the start of the trip."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation from Na Gaon through the Tsho Rolpa, the Tashi Lapcha base camp and Pachermo high camp, with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Pachermo, ${ROLWALING_PERMITS}.`,
      sherpa: ROLWALING_SHERPA,
      extra: [
        "Cook and kitchen crew for the camping section, with all food and fuel carried in from the road head.",
        "A training and skills-check day at base camp covering rope-team travel, crevasse rescue, fixed-line ascent and abseil technique.",
        "Fixing of the ice slope and summit crest on Pachermo, and rigging of both sides of the Tashi Lapcha.",
        "Porter and pack-animal transport of group climbing equipment and camp gear throughout.",
        "A reserve day held for the summit and the pass crossing.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a summit attempt abandoned for conditions, or a Tashi Lapcha closure that forces a retreat back down the Rolwaling.",
    },
    porterDays: 15,
    gearRentalDays: 14,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 20-day traverse climbing Pachermo (6,187 m) above the Tashi Lapcha, walking in from Charikot up the Rolwaling valley and out over the pass into the Khumbu to Namche and Lukla.",
    inExDescription:
      "Jeep transport to the road head, the Lukla flight out, Kathmandu hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit, conservation and national park permits and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing on the peak and both sides of the pass, and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Pachermo Peak Climbing (6,187 m) — 20 Days, Tashi Lapcha Traverse | Green Compass Treks",
      description:
        "Climb Pachermo (6,187 m) above the Tashi Lapcha and traverse from the Rolwaling valley into the Khumbu. 20 days, an AD- snow and ice route, a serious glaciated pass and no ground walked twice.",
      keywords:
        "pachermo peak climbing, pachermo 6187m, tashi lapcha, rolwaling climbing, rolwaling to khumbu traverse, tsho rolpa",
      tags: "Pachermo, Rolwaling Region, Tashi Lapcha, Peak Climbing, 6000m Peak, Traverse",
    },
  },
  days: [
    ...rolwalingApproach("twenty-day"),
    {
      title: "Trek from Na Gaon (4,180 m) to the Tsho Rolpa (4,580 m)",
      elevation: "4,580 m",
      accommodation: "Tsho Rolpa",
      placeDescription: "A tented camp above Nepal's largest glacial lake, at the head of the Rolwaling valley.",
      ...TSHO_ROLPA,
      html: p(
        "East up the valley from Na on moraine and grazing ground, with the walls closing in and the last of the vegetation giving out.",
        "The trail climbs onto the lateral moraine and then the <strong>Tsho Rolpa</strong> appears — Nepal's largest glacial lake, three and a half kilometres of grey-green water held behind a moraine dam at the snout of the Trakarding glacier.",
        "The lake has grown substantially since the 1950s as the glacier has retreated, and it has been monitored and partially drained because of the flood risk to the villages below. Camp goes up on the moraine above it. Around 4 to 5 hours. Overnight at the Tsho Rolpa.",
      ),
    },
    {
      title: "Trek from the Tsho Rolpa (4,580 m) to Tashi Lapcha Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tashi Lapcha Base Camp",
      placeDescription: "A tented camp on the Trakarding glacier moraine below the Tashi Lapcha and Pachermo.",
      ...TASHI_LAPCHA_BC,
      html: p(
        "The hardest walking day of the approach. The route drops onto the <strong>Trakarding glacier</strong> and follows it east for five to six hours over rubble-covered ice — loose, slow, unstable ground with rockfall from the valley walls in places, and no trail whatever.",
        "The crew moves the group quickly through the exposed sections and takes its time on the rest, which is the correct order of priorities.",
        "<strong>Tashi Lapcha Base Camp (5,000 m)</strong> is a tented camp on the moraine below the col, with <strong>Pachermo</strong> rising directly above to the north. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tashi Lapcha Base Camp",
      placeDescription: "The base camp below the col, where the climbing skills are checked before the peak and the pass.",
      ...TASHI_LAPCHA_BC,
      html: p(
        "A working day on the glacier ice above camp, and it prepares for two things rather than one. <strong>Rope-team travel with correct spacing, crevasse rescue, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "The abseil and the changeover get extra attention because the Tashi Lapcha is descended on fixed rope with loads, and that comes two days after the summit when everyone is tired.",
        "In the afternoon the group walks part-way toward high camp and back. Meanwhile the Sherpas are above, <strong>fixing the ice slope on Pachermo and rigging the col</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (5,000 m) to Pachermo High Camp (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Pachermo High Camp",
      placeDescription: "A tented camp at 5,500 m on the glacier below the south face of Pachermo.",
      ...PACHERMO_HIGH_CAMP,
      html: p(
        "Roped from the moment the group leaves camp. The route climbs north onto the glacier and works up it for three to four hours, weaving between crevasses on the marked line with a moderate load.",
        "<strong>Pachermo high camp (5,500 m)</strong> is a set of platforms stamped out on the glacier below the south face, exposed to the wind funnelling over the col and cold as soon as the sun goes.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Pachermo (6,187 m) and Descend to Base Camp (5,000 m)",
      elevation: "6,187 m",
      accommodation: "Tashi Lapcha Base Camp",
      placeDescription: "The 6,187 m summit of Pachermo, directly above the Tashi Lapcha.",
      ...PACHERMO,
      html: p(
        "Roped and moving by two in the morning. A short glacier crossing leads to the foot of the face, and then the climbing begins.",
        "The <strong>snow and ice slope</strong> runs at 45 to 50 degrees on fixed rope for three to four hours, sustained and steady, with the sun arriving somewhere around 5,900 m.",
        "The top of the slope gives onto a <strong>short corniced crest</strong>, taken one at a time. From the <strong>summit (6,187 m)</strong>: <strong>Gaurishankar</strong> and Melungtse west down the Rolwaling, the Tsho Rolpa a grey sliver far below, <strong>Everest, Lhotse and Cho Oyu</strong> east over the Khumbu, and directly beneath you the notch of the <strong>Tashi Lapcha</strong> that you cross the day after tomorrow.",
        "The descent abseils the slope and reverses the glacier to base camp. Ten to thirteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Tashi Lapcha Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tashi Lapcha Base Camp",
      placeDescription: "The contingency day held at base camp for the summit or the pass crossing.",
      ...TASHI_LAPCHA_BC,
      html: p(
        "The day held in reserve, and on this itinerary it covers two things — a second attempt on the peak, or a wait for the col.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow. If the summit went to plan but the <strong>Tashi Lapcha</strong> is loaded or the forecast is wrong, the day is spent here waiting, because the pass is not something to be crossed on a marginal morning.",
        "Your guide makes both calls at base camp on the evidence rather than the schedule. The Sherpas use the day to check and re-rig the col. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Tashi Lapcha (5,755 m) and Descend to Thame (3,800 m)",
      elevation: "5,755 m",
      accommodation: "Thame",
      placeDescription: "The 5,755 m glaciated col linking Rolwaling to the Khumbu, with Thame below on the far side.",
      ...TASHI_LAPCHA,
      html: p(
        "The crux of the trip and a very long day. Moving by three in the morning, the route climbs from base camp onto the glacier and up fixed rope to the notch of the <strong>Tashi Lapcha (5,755 m)</strong>, reaching it around dawn.",
        "The col is narrow, hung with prayer flags, and the view from it is the whole point of the traverse: <strong>Rolwaling and Gaurishankar</strong> behind, the <strong>Khumbu</strong> and Everest ahead.",
        "The descent is the serious part — steep fixed rope down onto the <strong>Drolambau glacier</strong>, then a long crossing of it and its moraine, and finally the drop into the Bhote Koshi valley. The ground is loose, the day is long and the group is fully committed from the moment it leaves camp.",
        "<strong>Thame (3,800 m)</strong> is the first village since Na Gaon and the home village of Tenzing Norgay and Apa Sherpa. Twelve to fourteen hours. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,800 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached down the Bhote Koshi from Thame.",
      ...NAMCHE,
      html: p(
        "An easy day after yesterday. The trail contours south-east above the <strong>Bhote Koshi</strong> through juniper and rhododendron, past water-driven prayer wheels and the small settlements of Thamo and Phurte.",
        "This is the old salt route to Tibet, and it is a working valley of farms rather than lodges — a quiet reintroduction to the Khumbu before the main trail.",
        "<strong>Namche Bazaar (3,440 m)</strong> arrives in the afternoon with hot showers, bakeries, an ATM and a great many other people, which after ten days in the Rolwaling is a considerable shock. Around 5 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day. Steeply down from Namche to the <strong>Hillary Bridge</strong>, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, where you check out of the national park.",
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb to <strong>Lukla (2,840 m)</strong>, which always feels longer than it looks on the last day.",
        "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given. This crew carried a full camp across the Trakarding glacier and over a 5,755 m col; the thanks should be specific. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward when the peak-season schedule applies.",
        "Delays are routine rather than exceptional and can run to a full day, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
        "The afternoon is free for a long shower and Thamel. Your <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Yalung Ri, added to the Rolwaling half, and Kyajo Ri on the Khumbu side are the two extensions our returning Pachermo climbers most often ask about.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const yalungRiAndPachermo: Climb = {
  region: "Rolwaling Region",
  price: 5250,
  difficulty: "difficult",
  maxAltitude: 6187,
  grade: "PD then AD-",
  center: [86.46, 27.88],
  zoom: 11,
  content: {
    slug: "yalung-ri-and-pachermo-peak-climbing",
    title: "Yalung Ri and Pachermo Peak Climbing",
    overview:
      "<p>Two summits inside one Rolwaling traverse, and the order does the work. <strong>Yalung Ri (5,630 m)</strong> is climbed first from the village of <strong>Na Gaon</strong> — a straightforward <strong>PD</strong> snow climb with a short glacier and a broad summit, and about as good an acclimatisation day as exists anywhere. <strong>Pachermo (6,187 m)</strong> follows a week later above the Tashi Lapcha, on a body that has already stood at 5,630 m.</p><p>The trip is the standard Rolwaling crossing with a peak inserted at its midpoint: in from the road at Charikot, up the gorge to Beding and Na, Yalung Ri, then the Tsho Rolpa, Pachermo, and out over the <strong>Tashi Lapcha (5,755 m)</strong> to Thame, Namche and Lukla. Twenty-three days, two summits, a serious glaciated pass, and no ground walked twice.</p>",
    highlights: [
      ["Yalung Ri (5,630 m) and Pachermo (6,187 m)", "A PD warm-up and an AD- main peak, on one acclimatisation and inside one traverse."],
      ["Yalung Ri as Acclimatisation", "A 5,630 m summit from Na Gaon on day ten — the best possible preparation for what follows."],
      ["Cross the Tashi Lapcha (5,755 m)", "A serious glaciated col linking Rolwaling to the Khumbu, with fixed rope on both sides."],
      ["The Tsho Rolpa", "Camp above Nepal's largest glacial lake, at the snout of the Trakarding glacier."],
      ["A True Traverse", "In from Charikot, out through Namche and Lukla, with two summits in the middle."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Rolwaling is wetter than the Khumbu and catches more of the monsoon's tail, so early October departures can meet cloud and soft snow on the glaciers and the pass.</p><p>The <strong>Tashi Lapcha</strong> dictates the window, as it does on every itinerary in this valley: it needs settled conditions and firm snow, and after heavy fall the group has to retreat the whole way back down the Rolwaling. Mid-October to early November and late April to May are the reliable spells. Yalung Ri is climbable across a slightly wider window than Pachermo, being lower and gentler.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Yalung Ri (PD)</strong> is a short glacier and a snow slope of 30 to 35 degrees to a broad summit, climbed in a single day from a camp above Na Gaon. Six to eight hours round trip, with a short fixed section near the top and no exposure problem at the summit. It is a real peak and a gentle one.</p><p><strong>Pachermo (AD-)</strong> is a category up: a crevassed glacier, a <strong>snow and ice slope of 45 to 50 degrees</strong> on fixed rope, and a short corniced crest. Nine to twelve hours from a high camp at 5,500 m. And then the <strong>Tashi Lapcha (5,755 m)</strong>, which is a full committing day of its own with loose moraine, fixed rope on both sides and a long descent onto the Drolambau glacier.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>Because Yalung Ri comes first and is gentle, this itinerary suits a climber with less experience than the standalone Pachermo trip — we ask for <strong>previous trekking above 4,500 m</strong> and, preferably, some time on crampons. The training day at base camp teaches the fundamentals, and Yalung Ri applies them at a manageable grade before Pachermo demands them.</p><p>The acclimatisation is exceptional. Five days walking up from 1,400 m, an acclimatisation day at Beding, another at Na Gaon, then a <strong>5,630 m summit on day ten</strong>, and only then the glacier camps and Pachermo. By the time you reach the high camp at 5,500 m you have been above 4,000 m for a week and stood on a summit.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m, including roped glacier travel and fixed-rope climbing</strong>, is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the walk to Beding and nothing above it.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The upper Rolwaling is remote — Na Gaon is five days' walk from the road and there is no airstrip in the valley — and a helicopter can reach Na and the Tsho Rolpa in clear weather but not the pass. Evacuation from between the glacier camps and the Khumbu side is slow and expensive.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the valley. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp and factor 50 sunscreen.</p><p>The Rolwaling gorge is wet and forested for two days, so proper waterproofs matter and in spring expect leeches below Beding. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, fix both peaks and rig both sides of the Tashi Lapcha. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "Why climb Yalung Ri first?", answer: "Because it is the easier peak and it does the acclimatisation work. A 5,630 m summit on day ten, reached from a camp above Na Gaon, is worth more than any number of rest days — and it lets your guide watch how each climber moves on real ground before Pachermo and the pass." },
      { question: "Is Yalung Ri a serious climb in its own right?", answer: "A modest one. A short glacier, a 30 to 35 degree snow slope and a short fixed section to a broad summit — genuinely a first climb, and higher than anything in the Alps. It is not the objective of the trip and it is not filler either." },
      { question: "Can I do this with no previous climbing experience?", answer: "Yes, with a proviso: you need previous multi-day trekking above 4,500 m and real hill fitness, and you need to accept that the Tashi Lapcha at the end is a serious day whether or not you summit anything. The training day and Yalung Ri between them teach the technique for Pachermo." },
      { question: "How serious is the Tashi Lapcha?", answer: "It is the crux of the itinerary rather than either peak. Loose moraine on the Trakarding glacier with rockfall in places, a col fixed on both sides, and a steep descent onto the Drolambau glacier. Twelve to fourteen hours, fully committed. It is not a trekking pass." },
      { question: "What happens if the pass is closed?", answer: "The group retreats down the Rolwaling to Charikot, which adds four or five days and means flying home from Kathmandu rather than Lukla. It happens perhaps one season in five after heavy snow, and your guide makes the call at the Tashi Lapcha base camp." },
      { question: "What are the success rates?", answer: "Around 85 to 90 percent on Yalung Ri and 70 to 80 percent on Pachermo — the second figure a little higher than on the standalone itinerary, because the acclimatisation from Yalung Ri is genuinely useful." },
      { question: "Where are the camps?", answer: "A tented camp above Na Gaon at around 4,700 m for Yalung Ri, and then the Tsho Rolpa camp, the Tashi Lapcha base camp at 5,000 m and Pachermo high camp at 5,500 m. All are tented with a mess tent, kitchen tent and toilet tent and a cook crew." },
      { question: "How busy is the Rolwaling?", answer: "Very quiet. The valley has no airstrip, no road beyond Chetchet and only basic lodges as far as Beding. Between Na Gaon and Thame you are unlikely to see anyone who is not in your own group." },
      { question: "Can I stop after Yalung Ri?", answer: "You can decline Pachermo, but you cannot easily leave — the group is committed to the Tashi Lapcha either way, since retracing the Rolwaling costs five days. A climber who skips the second peak walks to base camp with the group and waits there during the summit day." },
      { question: "Is there mobile signal on the route?", answer: "Patchy NTC coverage as far as Beding and nothing above Na Gaon until Thame on the Khumbu side — about five days out of contact. Bring a power bank and expect no charging above Beding." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Flight from Lukla to Kathmandu at the end of the trip, including the road transfer from Manthali in Ramechhap when the flights are operating from there in peak season.",
      ],
      transport: ["Private jeep transport from Kathmandu to Chetchet via Charikot at the start of the trip."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at the Yalung Ri camp (4,700 m), the Tsho Rolpa, the Tashi Lapcha base camp (5,000 m) and Pachermo high camp (5,500 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for Yalung Ri and Pachermo, ${ROLWALING_PERMITS}.`,
      sherpa: ROLWALING_SHERPA,
      extra: [
        "Cook and kitchen crew for the camping section, with all food and fuel carried in from the road head.",
        "A full training day covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique before Yalung Ri, and a refresher before Pachermo.",
        "Fixing of both peaks and rigging of both sides of the Tashi Lapcha.",
        "Porter and pack-animal transport of group climbing equipment and camp gear throughout.",
        "A reserve day held for Pachermo and the pass crossing.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a summit attempt abandoned for conditions, or a Tashi Lapcha closure that forces a retreat back down the Rolwaling.",
    },
    porterDays: 18,
    gearRentalDays: 17,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 23-day Rolwaling traverse climbing Yalung Ri (5,630 m) from Na Gaon and then Pachermo (6,187 m) above the Tashi Lapcha, crossing the pass into the Khumbu to finish at Namche and Lukla.",
    inExDescription:
      "Jeep transport to the road head, the Lukla flight out, Kathmandu hotel nights, lodge and tented accommodation, three meals a day throughout, both NMA climbing permits, conservation and national park permits and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing on both peaks and both sides of the pass, and the training days are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Yalung Ri and Pachermo Peak Climbing — 23 Days, Two Rolwaling Summits | Green Compass Treks",
      description:
        "Climb Yalung Ri (5,630 m) and then Pachermo (6,187 m) on a 23-day Rolwaling traverse, crossing the Tashi Lapcha into the Khumbu. A PD warm-up, an AD- main peak and no ground walked twice.",
      keywords:
        "yalung ri pachermo climbing, yalung ri 5630m, pachermo peak, rolwaling two peaks, tashi lapcha traverse, na gaon climbing",
      tags: "Yalung Ri, Pachermo, Rolwaling Region, Two Peaks, Tashi Lapcha, Traverse",
    },
  },
  days: [
    ...pachermoPeakClimbing.days.slice(0, 9).map((d) => ({
      ...d,
      html: d.html.replace("twenty-day plan", "twenty-three day plan"),
    })),
    {
      title: "Trek from Na Gaon (4,180 m) to Yalung Ri Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Yalung Ri Base Camp",
      placeDescription: "A tented camp on the moraine north of Na Gaon, below the glacier of Yalung Ri.",
      ...YALUNG_RI_BC,
      html: p(
        "North out of Na Gaon on a herders' path that leaves the valley floor within twenty minutes and climbs onto the moraine below the peak.",
        "The ground is open and brown, with the Rolwaling glacier system spread out below and <strong>Gaurishankar</strong> filling the western end of the valley behind you.",
        "<strong>Yalung Ri Base Camp (4,700 m)</strong> is a tented camp on a flat shelf. The afternoon is the <strong>training session</strong> on the glacier ice above — crampons, ice axe, self-arrest, rope-team travel, jumar and abseil — done properly here because tomorrow applies all of it. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Yalung Ri (5,630 m) and Descend to Na Gaon (4,180 m)",
      elevation: "5,630 m",
      accommodation: "Na Gaon",
      placeDescription: "The 5,630 m summit of Yalung Ri, above the Rolwaling valley.",
      ...YALUNG_RI,
      html: p(
        "A civilised start — roped and moving by four, with the sky already lightening. The route crosses a short glacier on the marked line and then climbs a <strong>snow slope of 30 to 35 degrees</strong> for two to three hours.",
        "A <strong>short fixed section</strong> on the steeper ground near the top leads onto a broad summit with room to stand about on, which for a first Himalayan peak is a considerable relief.",
        "From the <strong>summit (5,630 m)</strong>: <strong>Gaurishankar and Melungtse</strong> west, the Rolwaling glacier and the Tsho Rolpa east, and on a clear morning <strong>Everest and Cho Oyu</strong> over the Tashi Lapcha — including <strong>Pachermo</strong>, which you climb in five days.",
        "The descent reverses the slope and the glacier, and the group continues down to <strong>Na Gaon</strong> for a night in a lodge. Eight to ten hours. Overnight at Na Gaon.",
      ),
    },
    {
      title: "Rest Day at Na Gaon (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na Gaon",
      placeDescription: "The highest village in the Rolwaling, on the rest day between the two peaks.",
      ...NA_GAON,
      html: p(
        "A genuine rest day between the peaks, in the last village before the glacier. Eating, drinking and sleeping, with a short walk on the valley floor in the afternoon and nothing more.",
        "It is also the last bed, the last stove and the last chance to charge anything for six nights, so the afternoon is spent on a careful gear sort with your guide.",
        "In the evening your guide goes through the second half of the trip in detail — the Trakarding glacier, the base camp, Pachermo, and the Tashi Lapcha — and takes saturation readings on everyone. Overnight at Na Gaon.",
      ),
    },
    ...pachermoPeakClimbing.days.slice(9, 20).map((d) => ({
      ...d,
      html: d.html.replace(
        "Yalung Ri, added to the Rolwaling half, and Kyajo Ri on the Khumbu side are the two extensions our returning Pachermo climbers most often ask about.",
        "Kyajo Ri, added on the Khumbu side after the pass, is the extension our returning climbers most often ask about.",
      ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const pachermoAndKyajoRi: Climb = {
  region: "Rolwaling Region",
  price: 6950,
  difficulty: "difficult",
  maxAltitude: 6187,
  grade: "AD- then AD+",
  center: [86.58, 27.86],
  zoom: 10,
  content: {
    slug: "pachermo-and-kyajo-ri-peak-climbing",
    title: "Pachermo and Kyajo Ri Peak Climbing",
    overview:
      "<p>Two summits either side of the <strong>Tashi Lapcha</strong>, on one continuous traverse from the Rolwaling into the Khumbu. <strong>Pachermo (6,187 m)</strong> is climbed first from the Rolwaling side — an <strong>AD-</strong> snow and ice route directly above the pass — and then, after the crossing and a rest at Thame, <strong>Kyajo Ri (6,186 m)</strong> in the empty side valley above it, a genuinely technical <strong>AD+</strong> mixed route on rock, snow and ice.</p><p>It is the best two-peak trip in this catalogue for a climber who wants to progress within a single expedition. Pachermo is fixed-rope ice; Kyajo Ri adds rock climbed in crampons, a corniced arête and a long abseil descent. Between them lies one of the more serious glaciated passes in Nepal. Twenty-six days, and almost the entire route carries a fraction of the traffic of the trail you finish on.</p>",
    highlights: [
      ["Pachermo (6,187 m) and Kyajo Ri (6,186 m)", "An AD- snow route and an AD+ mixed route, on one traverse and in ascending difficulty."],
      ["Cross the Tashi Lapcha (5,755 m)", "A serious glaciated col linking Rolwaling to the Khumbu, climbed between the two peaks."],
      ["The Empty Kyajo Drangka", "Four days in a side valley above Thame with no lodges, no trekkers and no other climbing parties."],
      ["Genuine Mixed Climbing on Kyajo Ri", "Rock in crampons, sustained ice and a knife-edge arête, with a full abseil descent."],
      ["Two Valleys, No Ground Repeated", "In from Charikot up the Rolwaling, out through Thame, Namche and Lukla."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. Two peaks and a pass across twenty-six days needs three usable windows, and <strong>October is the strongest month</strong> — the clearest air of the year, firm snow on the Tashi Lapcha, and dry rock on Kyajo Ri's buttress.</p><p>Spring works and gives warmer camps, but it loads Kyajo Ri's rock bands with unconsolidated snow more often, which can close the second peak while the first two stages go perfectly. If Kyajo Ri is the reason you are booking, take an autumn departure. The Rolwaling is wetter than the Khumbu throughout and its shoulder seasons are less reliable.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Pachermo (AD-)</strong>: a crevassed glacier, a <strong>snow and ice slope of 45 to 50 degrees</strong> on fixed rope and a short corniced crest. Nine to twelve hours from a high camp at 5,500 m. The <strong>Tashi Lapcha (5,755 m)</strong> follows — loose moraine on the Trakarding glacier, fixed rope on both sides of the col and a long descent onto the Drolambau glacier, twelve to fourteen hours and fully committed.</p><p><strong>Kyajo Ri (AD+)</strong> is a different kind of climbing. A <strong>rock buttress</strong> climbed in crampons at around grade II to III, then <strong>snow and ice at 45 to 55 degrees</strong>, then a narrow corniced arête to a summit pyramid holding two or three people. Twelve to fourteen hours with a slow abseil descent, and it is the peak that will decide how you remember the trip.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>The entry requirement is set by the second peak. We ask for a <strong>previous 6,000 m summit</strong> or solid alpine experience, and you should arrive able to move on rock in crampons, jumar where the rope runs over an edge, and abseil competently while tired. Pachermo within this itinerary is preparation rather than qualification.</p><p>The acclimatisation is excellent and cumulative: five days walking up from 1,400 m, acclimatisation days at Beding and Na Gaon, Pachermo's high camp at 5,500 m and a 6,187 m summit, and then the pass at 5,755 m. By the time the group reaches Kyajo Ri base camp it has been above 4,000 m for a fortnight and stood on a 6,000 m top.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory, and on this trip the wording matters. Kyajo Ri involves <strong>graded mixed climbing and abseiling</strong>, and a policy written for 6,000 m of glacier walking will exclude it regardless of the altitude limit. Get written confirmation naming the activity.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. The upper Rolwaling is remote and has no airstrip; the Khumbu side is far better served, with helicopters reaching Thame and the Kyajo Drangka base camp in good conditions. Evacuation from the pass itself is not possible, and that is the section on which the group is most committed.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid or double mountaineering boots</strong> that take a technical crampon, broken in, plus trekking boots for the valleys. A <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, softshell trousers for Kyajo Ri's rock, technical gloves and mitts, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters and a headlamp with spare batteries.</p><p>We supply <strong>all group rope, ice screws, snow stakes, rock protection and anchors</strong>, fix both peaks and rig both sides of the Tashi Lapcha. <strong>Personal hardware can be rented as an add-on</strong>, but for the Kyajo Ri section we would rather you brought your own harness, technical axe, crampons and descender — familiar kit behaves predictably on mixed ground when you are tired.</p>",
      },
    ],
    faqs: [
      { question: "Why is Kyajo Ri climbed second?", answer: "Because it is a clear grade harder and it deserves a fully acclimatised climber with a 6,000 m summit already behind them. It also sits on the Khumbu side of the pass, so the sequence works geographically as well — Rolwaling, the Tashi Lapcha, then the Kyajo Drangka above Thame." },
      { question: "How much harder is Kyajo Ri than Pachermo?", answer: "A full grade. Pachermo is a fixed-rope ice slope with a short crest; Kyajo Ri adds rock climbed in crampons, sustained mixed ground, a knife-edge arête and a slow technical abseil descent. Climbers regularly describe it as the most interesting day of the trip." },
      { question: "Can I stop after Pachermo?", answer: "You can decline Kyajo Ri — a climber who crosses the pass and wants to finish there walks down to Namche and flies out early, and there is no penalty. Your guide will also give an honest assessment at the Kyajo Ri base camp about whether the second peak is sensible for you." },
      { question: "How serious is the Tashi Lapcha?", answer: "It is the most committing single day of the trip. Loose moraine on the Trakarding glacier with rockfall in places, a col fixed on both sides, and a steep descent onto the Drolambau glacier. Twelve to fourteen hours. It is not a trekking pass and it is the reason a reserve day sits before it." },
      { question: "What if the pass is closed?", answer: "The group retreats down the Rolwaling to Charikot, which ends the trip without Kyajo Ri — the second peak is on the far side. It happens perhaps one season in five after heavy snow, and your guide makes the call at the Tashi Lapcha base camp rather than on the col." },
      { question: "What are the success rates?", answer: "Around 70 to 80 percent on Pachermo and 55 to 65 percent on Kyajo Ri. The Kyajo Ri figure is normal for an AD+ mixed peak; fresh snow on the buttress is the commonest reason for turning back, along with accumulated fatigue after a pass crossing." },
      { question: "What is the Kyajo Drangka like?", answer: "A hanging valley running east from the Bhote Koshi above Thame, with yak pastures at its foot and nothing above them — no lodges, no teahouses and no trekking route. The group camps for four nights and will very likely see nobody else." },
      { question: "Is there a rest day between the peaks?", answer: "Yes, at Thame after the pass crossing. It is a lodge night with a stove and a menu, and after twelve days of camping and a fourteen-hour col day it does more for the second peak than any amount of extra acclimatisation would." },
      { question: "How many reserve days are there?", answer: "Two — one before the pass that also covers a second Pachermo attempt, and one at Kyajo Ri base camp. Given that the pass has to be crossed regardless, that weighting puts the margin where the schedule can actually use it." },
      { question: "How fit do I need to be?", answer: "Very. Twenty-six days with two summit days and a fourteen-hour pass crossing in the middle, most of it camping, and the hardest climbing at the end when you are three weeks in. The benchmark is walking eight hours with 10 kg on consecutive days and recovering overnight." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Flight from Lukla to Kathmandu at the end of the trip, including the road transfer from Manthali in Ramechhap when the flights are operating from there in peak season.",
      ],
      transport: ["Private jeep transport from Kathmandu to Chetchet via Charikot at the start of the trip."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation from Na Gaon through the Tsho Rolpa, the Tashi Lapcha base camp and Pachermo high camp, and again at Kyajo Ri base camp (4,550 m) and high camp (5,300 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for Pachermo and Kyajo Ri, ${ROLWALING_PERMITS}.`,
      sherpa:
        "One climbing Sherpa for every two climbers on Pachermo and for the Tashi Lapcha crossing, and one Sherpa per climber on Kyajo Ri, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew for both camping sections, with all food and fuel carried in.",
        "A full training day at the Tashi Lapcha base camp and a technical assessment on mixed ground at Kyajo Ri base camp.",
        "Fixing of Pachermo's ice slope and crest, both sides of the Tashi Lapcha, and Kyajo Ri's rock buttress, ice slopes and summit arête.",
        "Group rock and ice protection: ice screws, snow stakes, rock anchors and all fixed and main ropes.",
        "Porter and pack-animal transport of group climbing equipment and camp gear throughout.",
        "A reserve day for Pachermo and the pass, and a reserve day for Kyajo Ri.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a summit attempt abandoned for conditions, or a Tashi Lapcha closure that forces a retreat down the Rolwaling and ends the Khumbu half of the trip.",
    },
    porterDays: 21,
    gearRentalDays: 20,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 26-day traverse climbing Pachermo (6,187 m) from the Rolwaling, crossing the Tashi Lapcha (5,755 m) into the Khumbu, and then climbing the technical Kyajo Ri (6,186 m) in the empty Kyajo Drangka above Thame.",
    inExDescription:
      "Jeep transport to the road head, the Lukla flight out, Kathmandu hotel nights, lodge and tented accommodation, three meals a day throughout, both NMA climbing permits, conservation and national park permits and TIMS, a licensed climbing guide with Sherpa support rising to one per climber on Kyajo Ri, all group rock and ice equipment, rope fixing on both peaks and the pass, and the training days are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Pachermo and Kyajo Ri Peak Climbing — 26 Days, Two Peaks and a Pass | Green Compass Treks",
      description:
        "Climb Pachermo (6,187 m) in the Rolwaling, cross the Tashi Lapcha into the Khumbu, and finish on the technical Kyajo Ri (6,186 m) above Thame. 26 days, AD- to AD+, and no ground walked twice.",
      keywords:
        "pachermo kyajo ri climbing, rolwaling khumbu traverse, tashi lapcha two peaks, kyajo ri climbing, pachermo peak, technical two peak nepal",
      tags: "Pachermo, Kyajo Ri, Rolwaling Region, Tashi Lapcha, Two Peaks, Technical Climb",
    },
  },
  days: [
    ...pachermoPeakClimbing.days.slice(0, 16).map((d) => ({
      ...d,
      html: d.html.replace("twenty-day plan", "twenty-six day plan"),
    })),
    {
      title: "Rest Day at Thame (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Thame",
      placeDescription: "A village on the old salt route to Tibet, with a cliff monastery above it.",
      ...THAME,
      html: p(
        "A rest day after the pass, and it earns its place. Yesterday was twelve to fourteen hours on loose moraine and fixed rope, and the second peak of the trip starts tomorrow.",
        "<strong>Thame (3,800 m)</strong> is a good place to spend it — the home village of both Tenzing Norgay and Apa Sherpa, with a monastery set into the cliff above it that holds a Mani Rimdu festival each spring. There are lodges, a stove and a menu after twelve nights of camping.",
        "Your guide reviews the group's condition this afternoon and confirms who is going on to Kyajo Ri. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,800 m) to Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "A tented base camp at the head of the empty Kyajo Drangka, beneath the south-west ridge.",
      ...KYAJO_RI_BC,
      html: p(
        "The trip leaves the map again. From Thame the route crosses the Bhote Koshi and climbs east into the <strong>Kyajo Drangka</strong>, a hanging valley with no lodges, no teahouses and no trekking route in it.",
        "The trail is a yak path through juniper scrub and then open pasture, steep in places, following the stream up into a narrowing valley with rock walls closing on both sides, and then onto moraine.",
        "<strong>Kyajo Ri Base Camp (4,550 m)</strong> sits on a flat shelf beside a small tarn with the <strong>south-west ridge</strong> rising directly above — the buttress, the ice slopes and the summit arête all visible from the mess tent. Around 7 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment Day at Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The base camp below the ridge, where technique is checked before the mixed route.",
      ...KYAJO_RI_BC,
      html: p(
        "The second peak asks for something the first did not, and today is where your guide checks you have it. On the rock and ice above camp each climber works through <strong>moving on rock in crampons</strong>, jumaring where the rope runs over an edge, standing on small holds in stiff boots, and abseiling on a loaded rope.",
        "After Pachermo and the pass this is a check rather than a lesson, and most climbers are noticeably sharper than they were at the Tashi Lapcha base camp two weeks ago.",
        "Meanwhile the Sherpas are on the mountain <strong>fixing the buttress and the lower ice slopes</strong>. A short acclimatisation walk to 4,900 m closes the day. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,550 m) to Kyajo Ri High Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Kyajo Ri High Camp",
      placeDescription: "A tented camp on a north-facing shoulder at 5,300 m, directly beneath the climbing route.",
      lng: 86.6667,
      lat: 27.85,
      html: p(
        "A steep 750 m on moraine, scree and then snow, four to five hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,300 m)</strong> is a set of platforms on a north-facing shoulder — exposed, shaded from mid-afternoon and cold. There is room for a handful of tents and nothing else.",
        "The rest of the day is preparation: harnesses, crampons, axes and descenders laid out, the order of climbing set, an early dinner, and the final weather and turnaround call. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Kyajo Ri (6,186 m) and Descend to Base Camp (4,550 m)",
      elevation: "6,186 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The 6,186 m summit of Kyajo Ri, a mixed rock and ice pyramid at the head of the Kyajo Drangka.",
      ...KYAJO_RI,
      html: p(
        "Moving by one in the morning. A short glacier crossing leads to the <strong>rock buttress</strong>, climbed on fixed line in crampons on ground that would be a straightforward scramble in boots and is not straightforward at all in the dark at 5,500 m.",
        "Above it the route moves onto <strong>snow and ice at 45 to 55 degrees</strong> for several hours, easing and steepening in turn, and then onto the <strong>summit arête</strong> — narrow, corniced, and climbed one at a time with the whole valley dropping away on both sides.",
        "The <strong>summit (6,186 m)</strong> is a small pyramid with room for two or three people, looking east across the Khumbu to Everest, Lhotse and Ama Dablam, and west over the Bhote Koshi to the <strong>Tashi Lapcha</strong> and the Rolwaling peaks — including <strong>Pachermo</strong>, which you climbed two weeks and one valley ago.",
        "The descent is by abseil, station by station, and it is slow. Twelve to fourteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The second reserve day of the trip, held for the Kyajo Ri summit.",
      ...KYAJO_RI_BC,
      html: p(
        "The last reserve day. On a mixed route it is used often — fresh snow on the buttress makes rockfall a real hazard and can close the route for a day even in otherwise good weather.",
        "If the summit was missed, the group returns to high camp today and climbs tomorrow, with the fixed ropes already in place. Your guide weighs the state of the party as much as the forecast, which after a pass crossing and a previous summit is a real consideration.",
        "If the climb went to plan, this is a rest day at base camp or an early start down the valley to bank a spare day against the Lukla flights. Overnight at base camp or Namche.",
      ),
    },
    {
      title: "Trek from Kyajo Ri Base Camp (4,550 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent out of the Kyajo Drangka.",
      ...NAMCHE,
      html: p(
        "Camp comes down after breakfast and the whole valley is descended in a day — moraine, then pasture, then juniper scrub, following the stream back down the <strong>Kyajo Drangka</strong> to the Bhote Koshi.",
        "From the valley mouth the trail contours south-east above the river past Thamo and Phurte, rejoining the main Khumbu trail at the top of Namche.",
        "<strong>Namche Bazaar (3,440 m)</strong> after three weeks, two summits and a glaciated pass is a considerable shock — hot water, bakeries, an ATM and a great many other people. Around 7 to 8 hours. Overnight at Namche.",
      ),
    },
    ...pachermoPeakClimbing.days.slice(17, 20).map((d) => ({
      ...d,
      html: d.html.replace(
        "Yalung Ri, added to the Rolwaling half, and Kyajo Ri on the Khumbu side are the two extensions our returning Pachermo climbers most often ask about.",
        "Climbers who finish this trip are generally ready for Ama Dablam or Cholatse, and both are a natural step on from Kyajo Ri.",
      ),
    })),
  ],
};
