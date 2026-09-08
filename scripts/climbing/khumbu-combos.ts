import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  AMA_DABLAM, AMA_DABLAM_BC, AMA_DABLAM_C1, AMA_DABLAM_C2, CHHUKUNG, DINGBOCHE, DOLE,
  DZONGLA, EVEREST_BC, GOKYO, GORAK_SHEP, ISLAND_BC, ISLAND_HIGH_CAMP, ISLAND_PEAK, KALA_PATTHAR,
  KHARE,
  KOTHE, KYAJO_RI, KYAJO_RI_BC, LOBUCHE_BC, LOBUCHE_EAST, LOBUCHE_HIGH_CAMP, LOBUCHE_VILLAGE,
  LUKLA, MACHHERMO, MERA_HIGH_CAMP, MERA_PEAK, NAMCHE, PANGBOCHE, PHAKDING, POKALDE_BC,
  POKALDE_PEAK, TENGBOCHE, THAGNAK, THAME, THULI_KHARKA, CHUTANGA, ZATRWA_LA,
} from "./places";
import { amaDablamExpedition } from "./ama-dablam";
import { meraPeakAmphuLapcha } from "./mera";

/**
 * Multi-peak itineraries in the Khumbu and the Hinku.
 *
 * Every one of these exists because the acclimatisation from the first peak is
 * most of what the second one needs. Climbing Island Peak after Lobuche East is
 * a different experience from climbing it cold — the summit day is the same and
 * the body arriving at it is not — and the combinations are ordered throughout
 * so that each peak prepares the climber for the next.
 *
 * The Lukla-to-Dingboche approach is shared with every other Khumbu climb in
 * this catalogue and is written once here in `khumbuApproachDays`.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const KHUMBU_PARK_FEES =
  "Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality permit";

const COMBO_SHERPA =
  "One climbing Sherpa for every two climbers above base camp on each peak, with all their equipment, wages and insurance.";

/**
 * Arrival, the Kathmandu working day, and the walk from Lukla to Dingboche with
 * the standard acclimatisation stops — nine days that open every itinerary in
 * this file. `planWord` is the trip length quoted in the briefing.
 */
function khumbuApproachDays(planWord: string): ClimbDay[] {
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
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        `Your guide runs the full briefing at the hotel: the ${planWord} plan, the acclimatisation profile, the order the peaks are climbed in and why, and what each summit day actually involves.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over the layers you will really climb in, and anything unsuitable swapped for rental kit here rather than discovered at altitude.",
        "Our office lodges the <strong>climbing permits</strong> and the national park paperwork today, which needs your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season, landing on the sloping runway cut into the hillside.",
        "You meet the porters over tea, sort loads, and start north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and water-driven prayer wheels with the Dudh Koshi loud below.",
        "<strong>Phakding (2,610 m)</strong> lies lower than Lukla, which makes for an easy first night at altitude. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges carry the trail across the Dudh Koshi, climbing through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and beyond it the trail turns uphill for 600 m of steady work — the first honest effort of the trip, with a first view of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, gear shops and an ATM. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the trip.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace looks straight up the valley at Everest, Lhotse, Nuptse and Ama Dablam.",
        "From there the path continues to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha, past the monastery with its disputed yeti scalp and the hospital built by Edmund Hillary's foundation in 1966.",
        "The afternoon is free for the Sherpa Culture Museum and a coffee. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "Two hours of near-level balcony trail out of Namche, high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead almost the whole way and Everest over your shoulder.",
        "At Phunki Thenga the trail drops to the river and climbs 600 m through rhododendron and birch forest to the saddle — a long pull, and the altitude is beginning to tell.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu, and its afternoon prayer ceremony is open to visitors. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, across the Imja Khola on a bridge above a narrow gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu.",
        "Above Pangboche the last trees give out and the valley opens into a wide grey trough of moraine and grazing land, walled by Ama Dablam, Lhotse and Taboche.",
        "<strong>Dingboche (4,410 m)</strong> sits among stone-walled potato and barley fields at the junction of the Imja and Khumbu valleys. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above it.",
      ...DINGBOCHE,
      html: p(
        "The most important day of the approach. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep but non-technical, two to three hours on scree and rock.",
        "Touching 5,000 m and sleeping 600 m lower is what makes the first summit possible. <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Island Peak and Taboche arranged around you.",
        "Back for a late lunch and rest. Four litres of water, more food than you feel like, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const lobucheAndIslandPeak: Climb = {
  region: "Everest Region",
  price: 4250,
  difficulty: "difficult",
  maxAltitude: 6189,
  grade: "AD- then PD+",
  center: [86.85, 27.92],
  zoom: 10,
  content: {
    slug: "lobuche-peak-and-island-peak-climbing",
    title: "Lobuche Peak and Island Peak Climbing",
    overview:
      "<p>Two 6,000 m summits in twenty-three days, and the order matters. <strong>Lobuche East (6,119 m)</strong> is climbed first — the harder peak, with a long exposed ridge and a notch beyond the false summit that a great many parties never cross — and <strong>Island Peak (6,189 m)</strong> follows a week later, on a body that has already slept at 5,400 m and spent a day above 6,000 m.</p><p>That sequence is the whole argument for the combination. Island Peak climbed cold is a serious day; Island Peak climbed after Lobuche East is a familiar one, and the summit success rate on the second peak is markedly higher than on the first. You also get the two best summit views in the Khumbu from opposite sides of the valley: <strong>Everest across the glacier from Lobuche</strong>, and <strong>the Lhotse wall at arm's length from Imja Tse</strong>.</p>",
    highlights: [
      ["Two 6,000 m Summits", "Lobuche East (6,119 m) and Island Peak (6,189 m), climbed a week apart on one acclimatisation."],
      ["The True Lobuche East Summit", "We cross the notch beyond the false summit that most commercial groups turn back at."],
      ["Island Peak on Prepared Legs", "The second summit is climbed after a night at 5,400 m and a day above 6,000 m, which changes it entirely."],
      ["Everest and the Lhotse Wall", "Lobuche's summit faces Everest Base Camp across the Khumbu glacier; Island Peak's sits under the Lhotse south face."],
      ["A Reserve Day for Each Peak", "Two contingency days, one held for each summit, rather than a single chance at both."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late March to May</strong> and <strong>late September to November</strong>. On a two-peak trip the season matters slightly more than usual, because you need two good weather windows a week apart rather than one. October and early November are the most reliable for that, with the clearest air of the year and the most settled spells.</p><p>Spring gives longer days, warmer nights at the high camps and deeper consolidated snow, which suits Island Peak's headwall and makes Lobuche's ridge more heavily corniced. The monsoon closes both peaks from June to early September, and winter puts a 5,400 m high camp beyond what a guided party should accept.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Lobuche East is graded AD-</strong> and is the harder of the two: a rock buttress, then snow and ice at 40 to 50 degrees on fixed rope, then a narrow corniced ridge, with the <strong>true summit at 6,119 m</strong> lying beyond a notch that has to be descended and re-climbed. Ten to fourteen hours from high camp.</p><p><strong>Island Peak is graded PD+</strong>: a steep boulder gully in the dark, a roped glacier crossing between crevasses, a <strong>100 m headwall at 45 to 50 degrees</strong> on fixed line, and a corniced summit arête. Twelve to fifteen hours from high camp. Taken second, with Lobuche's ridge already behind you, the headwall reads as familiar ground rather than a leap.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>Previous trekking above 4,000 m is required and previous time above 5,000 m is strongly preferred. No ice climbing experience is needed — the training day at Lobuche base camp covers crampons, ice axe, jumar, abseil and rope teams from the beginning — but you need <strong>strong hill fitness</strong>, because this trip asks for two long summit days inside a week.</p><p>The acclimatisation profile is unusually good precisely because there are two peaks. Namche, Dingboche and the Nangkartshang climb come first, then two nights at <strong>Lobuche base camp (4,950 m)</strong> and a night at <strong>5,400 m</strong>, and by the time you reach Island Peak base camp your body has done all the adapting it needs. That is why we climb the harder peak first.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the walk in and nothing above it, and many travel policies exclude roped glacier travel and fixed-rope climbing by name. Read the exclusions rather than the headline number.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Helicopters reach Chhukung, Dingboche and Lobuche routinely and can reach both base camps in good conditions, but they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour emergency line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, already broken in, plus trekking boots for the approach. A <strong>-25°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>We provide all <strong>group climbing equipment</strong> — fixed rope, main rope, snow bars, ice screws and anchors — and our Sherpas fix both routes ahead of each summit day. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu. On a trip with two summit days, kit that fits properly is worth the effort at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Why climb Lobuche East first?", answer: "Because it is the harder peak and should be attempted on the freshest legs, and because its high camp at 5,400 m is the best possible acclimatisation for Island Peak. Doing it the other way round gives you a good Island Peak day and a much lower chance on Lobuche." },
      { question: "What is the difference between Lobuche's false and true summit?", answer: "The false summit at about 5,970 m is where the ground eases and many groups stop. The true summit at 6,119 m lies beyond a notch that has to be descended and re-climbed on steep exposed snow, adding roughly an hour each way. We climb for the true summit and the certificate says which one you reached." },
      { question: "How much time is there between the two summits?", answer: "Five or six days, including the descent from Lobuche, a rest day, the walk over to Chhukung and the approach to Island Peak base camp. It is enough to recover and not so long that the acclimatisation fades." },
      { question: "Do the success rates differ between the peaks?", answer: "Considerably. Around 60 to 70 percent on Lobuche East's true summit and 85 to 90 percent on Island Peak, and the gap is mostly the sequencing — by the time the group reaches Imja Tse it is fully acclimatised and has already done a harder day." },
      { question: "Can I attempt only one peak if I am tired?", answer: "Yes, and it happens. A climber who summits Lobuche and decides that is enough descends to Chhukung or Pangboche with a Sherpa while the rest continue, and there is no penalty or argument. The decision is made with your guide after the first summit." },
      { question: "Are both base camps tented?", answer: "Both, with a mess tent, kitchen tent and toilet tent and a cook crew at each. Lobuche East base camp sits at 4,950 m on the moraine facing Everest Base Camp; Island Peak base camp is at 5,087 m on the sandy flats below the Imja glacier." },
      { question: "How many reserve days are there?", answer: "Two — one held after each summit. That is deliberate: a single reserve day shared between two peaks means the first bad window costs you the second summit. Two days keeps both attempts genuinely repeatable." },
      { question: "Is the training day repeated before Island Peak?", answer: "Not as a full day. Your guide runs a refresher on the glacier at Island Peak base camp covering the headwall technique specifically, but the full skills day happens once, at Lobuche, where the group has the time and is still fresh." },
      { question: "Which summit day is longer?", answer: "Island Peak, at twelve to fifteen hours from high camp against Lobuche's ten to fourteen — mostly because of the long approach gully and the descent back to base camp. Lobuche is the harder day; Island Peak is the longer one." },
      { question: "Can Everest Base Camp be added?", answer: "Easily, and it fits naturally — Lobuche base camp is two hours from Lobuche village, which is a half-day from Gorak Shep. Adding Everest Base Camp and Kala Patthar extends the trip by two days and we are glad to quote it." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Lobuche East base camp (4,950 m) and high camp (5,400 m), and at Island Peak base camp (5,087 m) and high camp (5,600 m), each with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for both Lobuche East and Island Peak (Imja Tse), ${KHUMBU_PARK_FEES}.`,
      sherpa: COMBO_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights on both peaks.",
        "A full training day at Lobuche base camp covering crampons, ice axe, fixed-rope ascent, abseil and rope-team technique, and a refresher at Island Peak base camp.",
        "Fixing of the buttress, ice slopes and summit ridge on Lobuche East, and of the headwall on Island Peak, by our climbing Sherpas.",
        "Yak or porter transport of group climbing equipment and camp gear to both base camps.",
        "A reserve day held for each summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 17,
    gearRentalDays: 19,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 23-day itinerary climbing Lobuche East (6,119 m) and then Island Peak (6,189 m) on one acclimatisation, with a training day, a high camp on each peak and a reserve day for each summit.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation on both peaks, three meals a day throughout, both NMA climbing permits and the park fees, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing on both routes and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Lobuche Peak and Island Peak Climbing — 23 Days, Two 6,000 m Summits | Green Compass Treks",
      description:
        "Climb Lobuche East (6,119 m) and Island Peak (6,189 m) in 23 days on one acclimatisation. The harder peak first, the true Lobuche summit, a high camp on each, and a reserve day for both summits.",
      keywords:
        "lobuche and island peak climbing, two peak climbing nepal, lobuche east island peak combination, 6000m double summit, khumbu two peaks",
      tags: "Lobuche East, Island Peak, Everest Region, Two Peaks, 6000m Peak, Khumbu",
    },
  },
  days: [
    ...khumbuApproachDays("twenty-three day"),
    {
      title: "Trek from Dingboche (4,410 m) to Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "A tented camp on the moraine below Lobuche East, facing Everest Base Camp across the glacier.",
      ...LOBUCHE_BC,
      html: p(
        "North-west out of Dingboche onto a broad ridge, then along the high shelf above the Pheriche valley to <strong>Thukla (4,620 m)</strong> and the steep pull up the terminal moraine of the Khumbu glacier.",
        "The top of that climb is the <strong>Thukla memorial</strong>, a field of stone chortens for climbers lost on Everest and the peaks around it. It is a quiet twenty minutes on the way to your own mountain.",
        "Beyond it the trail leaves the Everest Base Camp route and climbs the moraine to <strong>Lobuche East Base Camp (4,950 m)</strong>, where camp is standing and Everest Base Camp is visible across the glacier. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training Day at Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The tented base camp below the peak, where the climbing skills for both summits are taught.",
      ...LOBUCHE_BC,
      html: p(
        "The full training day, and it covers both peaks rather than just this one. On the ice below camp you work through <strong>crampon technique, ice axe use and self-arrest, ascending fixed line on a jumar, abseiling, and moving as a roped team</strong>.",
        "Because Lobuche has a long exposed ridge, extra time goes on short-roping and on what to do when the fixed line ends and the team moves together. That is also the technique Island Peak's summit arête needs in ten days' time.",
        "In the afternoon we walk part-way up the route to high camp and back — 300 m gained and lost. The Sherpas are above, <strong>fixing the buttress and the ice slope</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,950 m) to Lobuche East High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Lobuche East High Camp",
      placeDescription: "A tented camp on an exposed rock shoulder at 5,400 m beneath the climbing route.",
      ...LOBUCHE_HIGH_CAMP,
      html: p(
        "A short but steep morning: moraine and then a rock shoulder on loose ground, gaining 450 m in three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,400 m)</strong> is a set of tent platforms cut into the shoulder, exposed to the wind and with no shelter of any kind. It is not comfortable and it is not meant to be.",
        "The view compensates a little — Everest, Nuptse, Pumori and the whole sweep of the Khumbu glacier below. Early dinner, kit laid out, asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Lobuche East (6,119 m) and Descend to Base Camp (4,950 m)",
      elevation: "6,119 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The true 6,119 m summit of Lobuche East, beyond the notch past the false summit.",
      ...LOBUCHE_EAST,
      html: p(
        "Moving by one in the morning. An hour of loose rock and scree by headlamp leads to the glacier edge, where crampons go on and the group ropes up in the dark.",
        "Then the long work: <strong>snow and ice at 40 to 50 degrees</strong> on fixed line for several hours, leading onto the <strong>summit ridge</strong> — narrow, corniced on the east side, and followed one at a time with the drop to the Khumbu glacier on your left.",
        "The <strong>false summit at about 5,970 m</strong> comes first. Beyond it the ridge dips into a notch and rises again, and that final hour is what separates a true ascent from the common one. From the <strong>true summit (6,119 m)</strong>: Everest, Nuptse, Lhotse, Ama Dablam, Cholatse and Pumori.",
        "Down by abseil and fixed line to high camp, then base camp. Ten to fourteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The first of the trip's two reserve days, held for the Lobuche East summit.",
      ...LOBUCHE_BC,
      html: p(
        "The reserve day for the first peak. Wind on the exposed ridge is the usual reason a Lobuche attempt is turned back, and a second chance is worth more here than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed.",
        "If the summit went to plan, camp comes down and the group walks back down the moraine toward <strong>Dingboche</strong>, resting properly in a lodge before the second peak. Overnight at base camp or Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "A cluster of lodges at the head of the Imja valley, the last settlement before Island Peak.",
      ...CHHUKUNG,
      html: p(
        "A short and deliberately easy day east up the Imja valley on the moraine, climbing gently through grazing land with the <strong>3,000 m south face of Lhotse</strong> filling the head of the valley.",
        "After a summit day and a descent, an afternoon in a lodge with a stove and a menu is worth more to the second peak than any extra height gained.",
        "<strong>Chhukung (4,730 m)</strong> is the last teahouse before Island Peak base camp. Your guide reviews the group's condition here and confirms who is going on. Around 3 to 4 hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Island Peak Base Camp (5,087 m)",
      elevation: "5,087 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "A tented camp on the sandy flats below the Imja glacier, at the foot of Island Peak.",
      ...ISLAND_BC,
      html: p(
        "A half day of walking. The trail leaves Chhukung south-east, crosses a stream on planks, and follows the moraine of the Imja and Lhotse glaciers up a broad, stony valley.",
        "<strong>Island Peak Base Camp (5,087 m)</strong> stands on sandy flats between the moraine walls, and the cook crew has camp up before you arrive.",
        "The afternoon is a <strong>refresher session</strong> on the glacier ice, focused specifically on the headwall — jumaring on a steep fixed line and abseiling back down it — and then rest. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Island Peak High Camp",
      placeDescription: "A tented camp on a rock shoulder above base camp, at the edge of the Imja glacier.",
      ...ISLAND_HIGH_CAMP,
      html: p(
        "A short move up the rock shoulder above base camp, two to three hours with a light load while the crew carries the camp.",
        "<strong>High camp (5,600 m)</strong> shortens tomorrow considerably and gets the group onto the headwall before the sun softens the snow. After Lobuche's high camp at 5,400 m, this one feels almost familiar.",
        "An early dinner, boots and harness laid out ready, and sleep by seven. Your guide gives the timings and the turnaround. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Island Peak (6,189 m) and Descend to Base Camp (5,087 m)",
      elevation: "6,189 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "The 6,189 m summit of Imja Tse, reached by a fixed-rope headwall and a corniced snow ridge.",
      ...ISLAND_PEAK,
      html: p(
        "Up at one, moving by two. The first section is a steep gully of loose rock by headlamp, leading onto the ridge and up to the <strong>glacier at around 5,900 m</strong>, where crampons go on and the group ropes up.",
        "The glacier weaves between crevasses to the foot of the <strong>headwall</strong> — around 100 m of ice at 45 to 50 degrees on fixed rope, usually with the sun arriving partway up. After Lobuche's ridge it reads as familiar ground rather than a leap.",
        "The wall tops out on a <strong>corniced summit arête</strong> followed one at a time. From <strong>Island Peak (6,189 m)</strong> the Lhotse wall stands directly opposite, with Makalu, Baruntse, Ama Dablam and Nuptse around it — and Lobuche East, which you climbed eight days ago, clearly visible to the north-west.",
        "Then abseil the headwall and reverse everything to base camp. Twelve to fifteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Island Peak Base Camp (5,087 m)",
      elevation: "5,087 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "The second of the trip's two reserve days, held for the Island Peak summit.",
      ...ISLAND_BC,
      html: p(
        "The reserve day for the second peak, and the reason this itinerary is twenty-three days rather than twenty-one. A single reserve day shared between two summits means the first bad window costs you the second peak.",
        "If yesterday was turned back by wind, fresh snow or a member's condition, this is the second attempt, and your guide makes that call at base camp on the evidence rather than the schedule.",
        "If the summit went to plan, camp comes down and the group starts the walk out early, banking a spare day against a cancelled Lukla flight. Overnight at base camp or Chhukung.",
      ),
    },
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, with a monastery said to date from the 1600s.",
      ...PANGBOCHE,
      html: p(
        "Camp comes down after breakfast and the long descent begins. The route retraces the moraine to <strong>Chhukung</strong> and then down the Imja valley to Dingboche, and the difference in how you feel is immediate — thick air, warmth, and legs that suddenly work again.",
        "Below Dingboche the trail contours across the hillside to <strong>Pangboche (3,930 m)</strong>, avoiding the climb back over the Tengboche ridge. Juniper and birch reappear, and with them the first bird noise in a fortnight.",
        "The monastery above the village is the oldest in the Khumbu and worth the short walk up. Around 6 to 7 hours. Overnight at Pangboche.",
      ),
    },
    {
      title: "Trek from Pangboche (3,930 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached again on the walk out with both peaks behind you.",
      ...NAMCHE,
      html: p(
        "Down through <strong>Deboche</strong> and up the short climb to <strong>Tengboche</strong>, where it is worth stopping at the monastery again — the view from the saddle reads differently once you have been up two of the peaks in it.",
        "The steep descent to Phunki Thenga is hard on tired knees, and then the balcony trail contours back around the hillside toward Namche, high above the Dudh Koshi.",
        "<strong>Namche Bazaar (3,440 m)</strong> in the afternoon means a hot shower, a bakery and a beer, all of which land differently after three weeks. Around 6 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, which always feels longer than it looks on the last day.",
        "The evening is the end-of-trip dinner with the guide, Sherpas, cook crew and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the wind builds in the valley. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays are routine rather than exceptional, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
        "The afternoon is free for a long shower and Thamel. Your <strong>summit certificates</strong> — one for each peak — are presented in the evening. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who finish this trip usually ask about Kyajo Ri or Ama Dablam next, and both are the right step from here.",
      ),
    },
  ],
};

/**
 * Reusable stages, taken from the Lobuche–Island itinerary above so that the
 * same ground reads the same way on every trip that covers it. The indices are
 * pinned here rather than scattered through the file.
 */
const LOBUCHE_STAGE = lobucheAndIslandPeak.days.slice(8, 13);   // approach, training, high camp, summit, reserve
const ISLAND_STAGE = lobucheAndIslandPeak.days.slice(14, 18);   // base camp, high camp, summit, reserve
const CHHUKUNG_DAY = lobucheAndIslandPeak.days[13];             // Dingboche to Chhukung
const WALK_OUT = lobucheAndIslandPeak.days.slice(18, 23);       // Pangboche, Namche, Lukla, fly, departure

/** Restates the trip length quoted in the shared briefing day. */
const withPlan = (days: ClimbDay[], planWord: string): ClimbDay[] =>
  days.map((d) => ({ ...d, html: d.html.replace("twenty-three day plan", `${planWord} plan`) }));

// ─────────────────────────────────────────────────────────────────────────────

export const pokaldeIslandAndLobuche: Climb = {
  region: "Everest Region",
  price: 5250,
  difficulty: "difficult",
  maxAltitude: 6189,
  grade: "PD- then AD- then PD+",
  center: [86.84, 27.92],
  zoom: 10,
  content: {
    slug: "pokalde-island-and-lobuche-climbing",
    title: "Pokalde Island and Lobuche Climbing",
    overview:
      "<p>Three permitted summits in twenty-six days, arranged as a ladder. <strong>Pokalde (5,806 m)</strong> comes first — a rock and snow scramble with a short fixed rope, no glacier, and a five-hour summit day — and it functions as both a real summit and the best possible acclimatisation. <strong>Lobuche East (6,119 m)</strong> follows, the hardest of the three, and <strong>Island Peak (6,189 m)</strong> finishes the trip on a body that has already stood on two tops.</p><p>It is the most complete introduction to Himalayan climbing we run. A climber who arrives having never worn crampons leaves having summited a scramble peak, a technical ridge and a fixed-rope ice face, in that order, each one preparing them for the next. The route also crosses the <strong>Kongma La (5,535 m)</strong>, the highest and least walked of the Khumbu's three passes, between the first peak and the second.</p>",
    highlights: [
      ["Three Summits in One Trip", "Pokalde (5,806 m), Lobuche East (6,119 m) and Island Peak (6,189 m), climbed in ascending difficulty."],
      ["Pokalde as a Real Warm-Up", "A genuine summit with a short fixed rope and no glacier, which teaches the skills the next two peaks need."],
      ["Cross the Kongma La (5,535 m)", "The highest of the three Khumbu passes, walked between the first peak and the second."],
      ["The True Lobuche East Summit", "We cross the notch beyond the false summit that most commercial groups stop at."],
      ["A Reserve Day for Each 6,000 m Peak", "Contingency days held for both Lobuche and Island Peak rather than one shared chance."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late March to May</strong> and <strong>late September to November</strong>. A three-peak trip needs three usable weather windows across four weeks, which in practice means October and early November are the most reliable — the clearest air of the year and the most settled spells.</p><p>Spring works well and gives warmer nights at the high camps, with more consolidated snow on Island Peak's headwall and heavier cornices on Lobuche's ridge. The <strong>Kongma La</strong> is the one stage that can be genuinely difficult after a storm in either season, and your guide will reroute the group through Lobuche village rather than cross a loaded pass. The monsoon closes all three peaks.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Three grades, taken in order. <strong>Pokalde is PD-</strong>: a boulder and scree ridge with hands out of pockets, a short section of fixed rope on a rock step, and a narrow snow and rock crest to the top. Five to seven hours from base camp, starting at a civilised four in the morning.</p><p><strong>Lobuche East is AD-</strong>: a rock buttress, snow and ice at 40 to 50 degrees on fixed rope, a corniced ridge, and a <strong>true summit at 6,119 m</strong> beyond a notch. Ten to fourteen hours. <strong>Island Peak is PD+</strong>: a boulder gully, a roped glacier crossing, a <strong>100 m headwall at 45 to 50 degrees</strong> and a corniced arête. Twelve to fifteen hours, and by then the most familiar day of the three.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is needed, and this is the trip we most often recommend to trekkers stepping up to climbing for the first time. Previous multi-day trekking above 4,000 m is required. What you need is <strong>hill fitness sustained over four weeks</strong> — three summit days and a 5,535 m pass in that time is a lot of walking uphill.</p><p>The acclimatisation is the best of any itinerary in this catalogue, because each peak feeds the next. Namche and Dingboche, then Pokalde base camp at 5,000 m and a 5,806 m summit, then the Kongma La at 5,535 m, then Lobuche's high camp at 5,400 m and a 6,119 m summit — by the time you reach Island Peak you have been above 5,000 m for the better part of two weeks.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers none of the climbing here, and many travel policies exclude roped glacier travel and fixed-rope use by name. Read the exclusions rather than the headline altitude.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Helicopters reach Chhukung, Dingboche and Lobuche routinely and all three base camps in good conditions, but they fly against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the approach and the pass. A <strong>-25°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spares and factor 50 sunscreen.</p><p>A <strong>helmet is not optional on Pokalde</strong>, where the ridge is loose. We provide all group climbing equipment and our Sherpas fix each route ahead of its summit day. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu — worth doing carefully, since on this trip you will wear it on three separate summits.</p>",
      },
    ],
    faqs: [
      { question: "Why this order of peaks?", answer: "Because each one teaches what the next one needs. Pokalde introduces crampons, a helmet and a short fixed rope on ground with no glacier and no consequence; Lobuche adds sustained ice, a long ridge and real exposure; Island Peak adds a crevassed glacier and a proper headwall. Reversed, the sequence would be a much harder trip with worse odds." },
      { question: "Is Pokalde worth including, or is it just filler?", answer: "It is a genuine 5,806 m summit — higher than anything in the Alps or North America — with a fixed rope and an exposed crest at the top. It also happens to be the single most useful acclimatisation day we could put in front of Lobuche East. It earns its place twice over." },
      { question: "Can I skip a peak if I have had enough?", answer: "Yes, at any point. A climber who summits Pokalde and Lobuche and decides that is enough descends to Pangboche or Namche with a Sherpa while the group continues to Island Peak. There is no penalty and no argument, and the decision is made with your guide." },
      { question: "How hard is the Kongma La?", answer: "It is the hardest walking day of the trip — 5,535 m, reached over boulder fields from the Pokalde side, with a steep loose descent onto the Khumbu glacier and an hour of picking a line across its rubble to reach the far moraine. Seven to nine hours. In fresh snow your guide will route the group round instead." },
      { question: "What are the success rates on the three peaks?", answer: "Above 90 percent on Pokalde, around 65 to 75 percent on Lobuche East's true summit, and 85 to 90 percent on Island Peak. The Island Peak figure is higher than it would be as a standalone trip, which is the whole point of the sequence." },
      { question: "How many reserve days are there?", answer: "Two, one held after Lobuche and one after Island Peak. Pokalde has no reserve day because its summit day is short and it can be attempted the following morning without disturbing the schedule." },
      { question: "Is the training day repeated for each peak?", answer: "The full skills day happens once, at Lobuche base camp. Pokalde gets a short session on rope, helmet and crampon work at its base camp, and Island Peak gets a refresher focused specifically on the headwall. That structure works because the group is learning progressively rather than starting again." },
      { question: "Are all three base camps tented?", answer: "Yes — Pokalde at 5,000 m, Lobuche East at 4,950 m and Island Peak at 5,087 m, each with a mess tent, kitchen tent and toilet tent and a cook crew. There are lodge nights between them at Dingboche and Chhukung, which matter more than they sound after a summit day." },
      { question: "How fit do I really need to be?", answer: "Fit enough to walk seven hours uphill with 8 to 10 kg on consecutive days, and to do it again after a fifteen-hour summit day and one night's sleep. Four to six months of consistent hill training with long back-to-back days is the honest preparation." },
      { question: "Can Everest Base Camp be added?", answer: "Yes, and it fits neatly after the Kongma La — you emerge at Lobuche village, half a day from Gorak Shep. Adding Everest Base Camp and Kala Patthar extends the trip by two days and improves the acclimatisation before Lobuche East." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Pokalde base camp (5,000 m), Lobuche East base camp (4,950 m) and high camp (5,400 m), and Island Peak base camp (5,087 m) and high camp (5,600 m), each with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for Pokalde, Lobuche East and Island Peak (Imja Tse), ${KHUMBU_PARK_FEES}.`,
      sherpa: COMBO_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights on all three peaks.",
        "A short skills session at Pokalde base camp, a full training day at Lobuche base camp, and a headwall refresher at Island Peak base camp.",
        "Fixing of the rock step on Pokalde, the buttress and summit ridge on Lobuche East, and the headwall on Island Peak.",
        "Yak or porter transport of group climbing equipment and camp gear to all three base camps.",
        "A reserve day held for each of the two 6,000 m summits.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 20,
    gearRentalDays: 22,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 26-day itinerary climbing Pokalde (5,806 m), Lobuche East (6,119 m) and Island Peak (6,189 m) in ascending difficulty, crossing the Kongma La between the first two peaks, with a reserve day for each 6,000 m summit.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation on all three peaks, three meals a day throughout, all three NMA climbing permits and the park fees, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing on every route and the training days are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Pokalde, Island and Lobuche Climbing — 26 Days, Three Summits | Green Compass Treks",
      description:
        "Climb Pokalde (5,806 m), Lobuche East (6,119 m) and Island Peak (6,189 m) in 26 days, in ascending difficulty, crossing the Kongma La between peaks. The most complete introduction to Himalayan climbing we run.",
      keywords:
        "pokalde island lobuche climbing, three peak climbing nepal, khumbu three peaks, pokalde lobuche island combination, kongma la climbing",
      tags: "Pokalde, Lobuche East, Island Peak, Everest Region, Three Peaks, Kongma La",
    },
  },
  days: [
    ...withPlan(khumbuApproachDays("twenty-six day"), "twenty-six day"),
    withPlan([CHHUKUNG_DAY], "twenty-six day")[0],
    {
      title: "Trek from Chhukung (4,730 m) to Pokalde Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Pokalde Base Camp",
      placeDescription: "A tented camp beside a small tarn in the basin below the Kongma La, at the foot of Pokalde.",
      ...POKALDE_BC,
      html: p(
        "The trail leaves the Imja valley and climbs west into the wide, empty basin below the <strong>Kongma La</strong>, on rough moraine and boulder ground with almost nobody else on it.",
        "It is a marked change from the Khumbu's main trail — no lodges, no yak trains and no queues at the bridges. The ground is rocky and the walking is slow, and the altitude does the rest.",
        "<strong>Pokalde Base Camp (5,000 m)</strong> is a tented camp beside a small tarn under the peak's south ridge. The afternoon is a short session on rope, helmet and crampon work before tomorrow. Around 4 to 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Pokalde (5,806 m) and Return to Base Camp (5,000 m)",
      elevation: "5,806 m",
      accommodation: "Pokalde Base Camp",
      placeDescription: "The 5,806 m summit of Pokalde, a rock and snow crest above the Kongma La.",
      ...POKALDE_PEAK,
      html: p(
        "A civilised start — tea at four, walking by five, with the sky already lightening. The route climbs the boulder slope above camp to the south ridge and follows it, hands out of pockets on the steeper steps, in a helmet the whole way because the rock is loose.",
        "Near the top comes the only technical ground: a <strong>short section of fixed rope</strong> on a rock step, and above it a narrow crest of rock and snow, exposed on both sides and climbed one at a time.",
        "The <strong>summit (5,806 m)</strong> carries prayer flags and one of the finest views in the Khumbu — Everest, Lhotse, Nuptse, Makalu, Ama Dablam and the whole Khumbu glacier — and it is the first of your three. Five to seven hours in total. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Kongma La (5,535 m) to Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "A tented camp on the moraine below Lobuche East, reached over the Kongma La.",
      ...LOBUCHE_BC,
      html: p(
        "The hardest walking day of the trip, and the link between the first peak and the second. The climb to the <strong>Kongma La (5,535 m)</strong> takes two to three hours on boulder and scree from camp, past frozen tarns, to a cairn buried in prayer flags.",
        "It is the highest and least walked of the three Khumbu passes, and the view back over the Imja valley to Ama Dablam is worth the effort on its own.",
        "The far side is the serious part: a steep, loose descent onto the <strong>Khumbu glacier</strong>, then an hour picking a line across its rubble-covered ice following cairns, before climbing the far moraine to <strong>Lobuche East Base Camp (4,950 m)</strong>. Seven to nine hours. Overnight at base camp.",
      ),
    },
    ...withPlan(LOBUCHE_STAGE.slice(1), "twenty-six day"),
    {
      title: "Trek from Lobuche East Base Camp (4,950 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "The lodges at the head of the Imja valley, the base for the third and final peak.",
      ...CHHUKUNG,
      html: p(
        "A long link day between the second peak and the third. Camp comes down and the group descends the moraine past the <strong>Thukla memorial</strong> chortens and down into the Pheriche valley.",
        "From there the trail contours east to <strong>Dingboche</strong> and up the Imja valley on the moraine, with the <strong>Lhotse south face</strong> filling the head of the valley ahead.",
        "<strong>Chhukung (4,730 m)</strong> in the late afternoon means a lodge, a stove and a menu after two summits. Your guide reviews the group's condition here and confirms who is going on to Island Peak. Around 7 to 8 hours. Overnight at Chhukung.",
      ),
    },
    ...withPlan(ISLAND_STAGE, "twenty-six day"),
    ...withPlan(WALK_OUT, "twenty-six day"),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const threePeaksIslandLobucheKyajoRi: Climb = {
  region: "Everest Region",
  price: 6750,
  difficulty: "difficult",
  maxAltitude: 6189,
  grade: "PD+ then AD- then AD+",
  center: [86.79, 27.89],
  zoom: 10,
  content: {
    slug: "three-peaks-climbing-island-lobuche-kyajo-ri",
    title: "Three Peaks Climbing Island Lobuche and Kyajo Ri",
    overview:
      "<p>Three summits over thirty days, arranged so that each one is harder than the last. <strong>Island Peak (6,189 m)</strong> comes first as a fixed-rope ice climb, <strong>Lobuche East (6,119 m)</strong> second for its long exposed ridge and its true summit beyond the notch, and <strong>Kyajo Ri (6,186 m)</strong> last — a genuinely technical <strong>AD+</strong> mixed route in an empty side valley that most climbers in the Khumbu have never heard of.</p><p>What makes this different from the other multi-peak trips is the last week. Island Peak and Lobuche East are climbed from the busy side of the valley; then the group walks west through <strong>Thame</strong> and up the <strong>Kyajo Drangka</strong>, a hanging valley with no lodges and no trekking route, to climb rock, snow and ice on a mountain that sees a dozen parties a season. It is a progression from your first fixed rope to a mixed summit arête, inside one trip.</p>",
    highlights: [
      ["Three Summits, Ascending in Difficulty", "Island Peak (PD+), Lobuche East (AD-) and Kyajo Ri (AD+), in that order and on one acclimatisation."],
      ["Kyajo Ri, a Genuinely Technical Peak", "Rock, snow and ice on a mixed south-west ridge, with a corniced arête and a full abseil descent."],
      ["The Empty Kyajo Drangka", "Four days in a side valley above Thame with no lodges, no trekkers and no other climbing parties."],
      ["The True Lobuche East Summit", "We cross the notch beyond the false summit that most commercial groups turn back at."],
      ["A Reserve Day for Every Peak", "Three contingency days, one per summit, rather than a single shared chance."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. Three peaks over four weeks needs three separate weather windows, and autumn is the more reliable half of the year for that — clearer air, more settled spells, and dry rock on Kyajo Ri's buttress, which matters because that peak is the mixed one.</p><p>Spring works and gives warmer high camps, deeper consolidated snow on Island Peak's headwall and heavier cornices on both ridges. It also loads Kyajo Ri's rock bands with unconsolidated snow more often, which can close the third peak while the first two go perfectly. If Kyajo Ri is the reason you are booking, take an October departure.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Island Peak (PD+)</strong>: a boulder gully in the dark, a roped glacier crossing between crevasses, a <strong>100 m headwall at 45 to 50 degrees</strong> on fixed rope, and a corniced arête. Twelve to fifteen hours. <strong>Lobuche East (AD-)</strong>: a rock buttress, sustained ice at 40 to 50 degrees, a long exposed ridge, and a true summit beyond a notch. Ten to fourteen hours.</p><p><strong>Kyajo Ri (AD+)</strong> is a different kind of climbing. The south-west ridge is <strong>mixed</strong>: a rock buttress climbed in crampons at around grade II to III, then snow and ice at 45 to 55 degrees, then a narrow corniced arête to a summit pyramid with room for two or three people. Twelve to fourteen hours with a slow abseil descent, and it is the peak that will decide how you remember the trip.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>Previous trekking above 4,000 m is required and time above 5,000 m is strongly preferred. Unlike the gentler multi-peak trips, this one finishes on <strong>AD+ mixed ground</strong>, so you should arrive expecting to be assessed — the training day at Island Peak base camp teaches the fundamentals, and by Kyajo Ri your guide needs to see them working under fatigue.</p><p>The acclimatisation is excellent and cumulative. Namche and Dingboche, then Island Peak's high camp at 5,600 m and a 6,189 m summit, then Lobuche's 5,400 m high camp and a 6,119 m summit, and only then the walk west to Kyajo Ri. By the time you reach that base camp you have spent three weeks above 4,000 m and stood on two 6,000 m tops.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory, and on this trip the wording matters more than on a two-peak itinerary. Kyajo Ri involves <strong>graded mixed climbing and abseiling</strong>, and a policy written for 6,000 m of glacier walking will exclude it regardless of the altitude limit. Get written confirmation naming the activity.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Helicopters reach Chhukung, Dingboche and Lobuche routinely, and can reach the Kyajo Drangka base camp in good conditions but not the ridge above it. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid or double mountaineering boots</strong> that take a technical crampon, broken in, plus trekking boots for the approach. A <strong>-25°C sleeping bag</strong>, a heavy down jacket, a full waterproof and windproof shell, softshell trousers for Kyajo Ri's rock, technical gloves and mitts, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spares and factor 50 sunscreen.</p><p>We supply <strong>all group rope, ice screws, snow bars, rock protection and anchors</strong>, and our Sherpas fix each route ahead of its summit day. <strong>Personal hardware can be rented as an add-on</strong>, but for the Kyajo Ri section we would rather you brought your own harness, technical axe, crampons and descender — familiar kit behaves predictably on mixed ground when you are tired.</p>",
      },
    ],
    faqs: [
      { question: "Why is Kyajo Ri climbed last?", answer: "Because it is by some distance the hardest of the three, and it deserves a climber who is fully acclimatised and has two summits of practice behind them. It is also geographically on the way out — the Kyajo Drangka opens west of Namche — so the sequence works logistically as well as physiologically." },
      { question: "How much harder is Kyajo Ri than the other two?", answer: "A clear grade. Island Peak and Lobuche East are snow and ice climbs on fixed rope; Kyajo Ri adds rock climbed in crampons, jumaring where the rope runs over edges, and a slow technical abseil descent. Climbers regularly describe it as the most interesting day of the trip." },
      { question: "Can I do the first two peaks and skip Kyajo Ri?", answer: "Yes, and some climbers decide exactly that after Lobuche. You would descend from Namche to Lukla and fly out early, and there is no penalty. Your guide will also tell you honestly at the assessment whether Kyajo Ri is sensible for you." },
      { question: "What are the success rates?", answer: "Around 85 to 90 percent on Island Peak, 65 to 75 percent on Lobuche East's true summit, and 55 to 65 percent on Kyajo Ri. The Kyajo Ri figure is normal for an AD+ peak; fresh snow on the buttress is the commonest reason for turning back." },
      { question: "What is the Kyajo Drangka like?", answer: "A hanging valley running east from the Bhote Koshi above Thame, with yak pastures at its foot and nothing above them — no lodges, no teahouses and no trekking route. The group camps for four nights and will very likely see nobody else. It is the quietest part of the whole trip." },
      { question: "Do we get a training day for each peak?", answer: "A full skills day at Island Peak base camp, a refresher before Lobuche East focused on the ridge and short-roping, and a technical assessment at Kyajo Ri base camp on rock in crampons and abseiling. They build on each other rather than repeating." },
      { question: "How many reserve days are there?", answer: "Three, one held after each summit. On a trip with three separate weather-dependent summit days, sharing reserve days between peaks would mean one bad window costing you two summits." },
      { question: "Why does the route go through Thame?", answer: "Partly for acclimatisation and partly because it is a better valley than the Everest trail. Thame sits on the old salt route to Tibet, has a cliff monastery above it, and produced both Tenzing Norgay and Apa Sherpa. It also puts you at the mouth of the Kyajo Drangka without backtracking." },
      { question: "Is this suitable as a first climbing trip?", answer: "For a very fit trekker with time above 5,000 m, the first two peaks are, and Kyajo Ri is an ambitious but achievable finish. For someone who has never used crampons and is unsure about exposure, our Pokalde, Island and Lobuche itinerary is the better introduction." },
      { question: "How much walking is there in total?", answer: "A great deal — roughly 180 km over thirty days, including three summit days and a full traverse of the Khumbu from the Imja valley to the Bhote Koshi. It is as much a long trek with three climbs in it as it is a climbing trip." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Island Peak base camp (5,087 m) and high camp (5,600 m), Lobuche East base camp (4,950 m) and high camp (5,400 m), and Kyajo Ri base camp (4,550 m) and high camp (5,300 m), each with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for Island Peak (Imja Tse), Lobuche East and Kyajo Ri, ${KHUMBU_PARK_FEES}.`,
      sherpa:
        "One climbing Sherpa for every two climbers above base camp on Island Peak and Lobuche East, and one Sherpa per climber on Kyajo Ri, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights on all three peaks.",
        "A full training day at Island Peak base camp, a ridge and short-roping refresher before Lobuche East, and a technical assessment on mixed ground at Kyajo Ri base camp.",
        "Fixing of the headwall on Island Peak, the buttress and summit ridge on Lobuche East, and the rock buttress, ice slopes and arête on Kyajo Ri.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
        "Yak or porter transport of group climbing equipment and camp gear to all three base camps.",
        "A reserve day held for each of the three summits.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 23,
    gearRentalDays: 25,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 30-day itinerary climbing Island Peak (6,189 m), Lobuche East (6,119 m) and the technical Kyajo Ri (6,186 m) in ascending difficulty, finishing in the empty Kyajo Drangka above Thame, with a reserve day for each summit.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation on all three peaks, three meals a day throughout, all three NMA climbing permits and the park fees, a licensed climbing guide with Sherpa support rising to one per climber on Kyajo Ri, all group rock and ice equipment, rope fixing on every route and the training days are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Three Peaks Climbing — Island, Lobuche and Kyajo Ri, 30 Days | Green Compass Treks",
      description:
        "Climb Island Peak, Lobuche East and the technical Kyajo Ri in 30 days, in ascending difficulty, finishing with an AD+ mixed route in the empty Kyajo Drangka above Thame. A reserve day for every summit.",
      keywords:
        "three peaks climbing nepal, island lobuche kyajo ri, khumbu three peak climbing, technical peak combination nepal, kyajo drangka",
      tags: "Island Peak, Lobuche East, Kyajo Ri, Everest Region, Three Peaks, Technical Climb",
    },
  },
  days: [
    ...withPlan(khumbuApproachDays("thirty day"), "thirty day"),
    withPlan([CHHUKUNG_DAY], "thirty day")[0],
    ...withPlan(ISLAND_STAGE, "thirty day"),
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "A tented camp on the moraine below Lobuche East, facing Everest Base Camp across the glacier.",
      ...LOBUCHE_BC,
      html: p(
        "The link between the first peak and the second, and a long day. Camp comes down and the group descends the moraine to <strong>Chhukung</strong> and on down the Imja valley to <strong>Dingboche</strong>.",
        "From there the trail climbs north-west onto the broad ridge, runs along the shelf above the Pheriche valley to <strong>Thukla</strong>, and takes the steep pull up the terminal moraine of the Khumbu glacier past the <strong>memorial chortens</strong>.",
        "<strong>Lobuche East Base Camp (4,950 m)</strong> stands on the moraine above the trail, with Everest Base Camp visible across the glacier. Around 7 to 8 hours. Overnight at base camp.",
      ),
    },
    ...withPlan(LOBUCHE_STAGE.slice(1), "thirty day"),
    {
      title: "Trek from Lobuche East Base Camp (4,950 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, on the way west to the third peak.",
      ...PANGBOCHE,
      html: p(
        "Camp comes down and the group descends the moraine past the <strong>Thukla memorial</strong> chortens and the steep drop beside the glacier snout into the Pheriche valley.",
        "Through <strong>Pheriche</strong>, where the Himalayan Rescue Association clinic runs its afternoon altitude talks, and on down the valley beside the river.",
        "A gentle final climb reaches <strong>Pangboche (3,930 m)</strong>, where juniper and birch return after two weeks above the treeline. Two summits down, one to go. Around 6 to 7 hours. Overnight at Pangboche.",
      ),
    },
    withPlan([WALK_OUT[1]], "thirty day")[0],
    {
      title: "Trek from Namche Bazaar (3,440 m) to Thame (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Thame",
      placeDescription: "A village on the old salt route to Tibet, with a cliff monastery above it.",
      ...THAME,
      html: p(
        "West out of Namche on the trail toward Tibet, contouring high above the <strong>Bhote Koshi</strong> through juniper and rhododendron, past water-driven prayer wheels and the small settlements of Phurte and Thamo.",
        "This is a different Khumbu from the one you have been in for three weeks — no queues at the bridges, working farms rather than lodges, and a valley that until the 1960s carried salt and wool over the Nangpa La.",
        "<strong>Thame (3,800 m)</strong> is the home village of both Tenzing Norgay and Apa Sherpa, with a monastery set into the cliff above it. Around 5 hours. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,800 m) to Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "A tented base camp at the head of the empty Kyajo Drangka, beneath the south-west ridge.",
      ...KYAJO_RI_BC,
      html: p(
        "The day the trip leaves the map. From Thame the route crosses the Bhote Koshi and climbs east into the <strong>Kyajo Drangka</strong>, a hanging valley with no lodges, no teahouses and no trekking route in it.",
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
        "The third peak asks for something the first two did not, and today is where your guide checks you have it. On the rock and ice above camp each climber works through <strong>moving in crampons on rock</strong>, jumaring where the rope runs over an edge, placing feet on small holds in stiff boots, and abseiling on a loaded rope.",
        "After two summits this is a check rather than a lesson, and most climbers are noticeably sharper than they were at Island Peak base camp three weeks ago.",
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
        "The <strong>summit (6,186 m)</strong> is a small pyramid with room for two or three people, looking east across the Khumbu to Everest, Lhotse, Nuptse and Ama Dablam — and to <strong>Island Peak and Lobuche East, both of which you have already climbed on this trip</strong> — and west toward the Nangpa La and Tibet.",
        "The descent is by abseil, station by station, and it is slow. Twelve to fourteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The third and last reserve day of the trip, held for the Kyajo Ri summit.",
      ...KYAJO_RI_BC,
      html: p(
        "The last of the trip's three reserve days. On a mixed route it is used often — fresh snow on the buttress makes rockfall a real hazard and can close the route for a day even in otherwise good weather.",
        "If the summit was missed, the group returns to high camp today and climbs tomorrow, with the fixed ropes already in place. Your guide weighs the state of the party as much as the forecast, which after two previous summits is a real consideration.",
        "If the climb went to plan, this is a rest day at base camp or an early start down the valley to bank a spare day against the Lukla flights. Overnight at base camp or Thame.",
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
        "From the valley mouth the trail contours south-east above the river past Thamo and Phurte, rejoining the Everest trail at the top of Namche.",
        "<strong>Namche Bazaar (3,440 m)</strong> after four weeks and three summits is a considerable shock — hot water, bakeries, a beer and other people. Around 7 to 8 hours. Overnight at Namche.",
      ),
    },
    ...withPlan(WALK_OUT.slice(2), "thirty day"),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const meraAndIslandPeak: Climb = {
  region: "Everest Region",
  price: 5450,
  difficulty: "difficult",
  maxAltitude: 6476,
  grade: "PD, AD- at the col, then PD+",
  center: [86.89, 27.8],
  zoom: 10,
  content: {
    slug: "mera-and-island-peak-climbing",
    title: "Mera and Island Peak Climbing",
    overview:
      "<p>The classic two-peak traverse of the Everest region, and one of the best trips in Nepal. It climbs <strong>Mera Peak (6,476 m)</strong>, the highest trekking peak in the country, from the quiet Hinku valley; crosses the uninhabited <strong>Hongu</strong> and the technical <strong>Amphu Lapcha (5,845 m)</strong> into the Khumbu; and finishes on <strong>Island Peak (6,189 m)</strong> under the south face of Lhotse — twenty-five days, two summits and a col, with no ground walked twice.</p><p>Taken in this order it works physiologically as well as geographically. Mera is an <strong>altitude climb</strong> on an easy glacier, and having stood at 6,476 m makes Island Peak's headwall a technical problem rather than a physiological one. The Amphu Lapcha in between is the hinge: a steep snow climb to the notch and a <strong>100 to 150 m abseil</strong> down a rock and ice wall on the far side, which is the most committing single hour of the trip.</p>",
    highlights: [
      ["Mera Peak (6,476 m)", "The highest trekking peak in Nepal, with five 8,000 m summits visible from the top."],
      ["Cross the Amphu Lapcha (5,845 m)", "Abseil 100–150 m of fixed rope down a rock and ice wall from the Hongu into the Imja valley."],
      ["Island Peak (6,189 m) on Prepared Legs", "The second summit is climbed after 6,476 m and a technical col, which changes it entirely."],
      ["The Uninhabited Hongu Valley", "Four days of camping among glacial lakes in a basin with no settlements and almost no other parties."],
      ["A True Traverse", "In through the Hinku, out through the Khumbu, with no section of trail repeated."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Hinku valley is wetter and greener than the Khumbu and catches more of the monsoon's tail, so early October departures can still meet cloud and soft snow on the Zatrwa La. The settled weather arrives a week or two later here than at Namche.</p><p>The <strong>Amphu Lapcha</strong> is the stage that dictates the season. It needs settled conditions and firm snow on the north wall to rig safely, which means late April to May or mid-October to early November. Spring gives warmer nights at Mera's high camp and a better-consolidated glacier; autumn gives the sharper air and the bigger summit views. The monsoon closes both valleys.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Three separate problems. <strong>Mera (PD)</strong> is a broad glacier at 25 to 30 degrees with one short 40 to 45 degree step, hard because of the altitude rather than the angle — six to eight hours from a high camp at 5,800 m, at -20°C or colder.</p><p>The <strong>Amphu Lapcha (AD-)</strong> is a steep snow and ice climb to a 5,845 m notch, followed by a <strong>100 to 150 m abseil</strong> down a rock and ice wall with every rucksack lowered separately and a bergschrund at the bottom. Ten to twelve hours and fully committing. <strong>Island Peak (PD+)</strong> finishes the trip: a boulder gully, a roped glacier crossing, a <strong>100 m headwall at 45 to 50 degrees</strong> and a corniced arête.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>We ask for <strong>previous experience above 5,000 m</strong> and, ideally, a 6,000 m peak already climbed. You should have abseiled before and be steady on fixed rope — the col is not the place to learn, and the full training day at Khare covers the technique for all three sections.</p><p>Acclimatisation is exceptional because the route is built around it. The <strong>Zatrwa La (4,610 m)</strong> early, then the deliberate drop to Kothe at 3,600 m, then a rest day at Thagnak and a training day at Khare, then Mera's high camp at 5,800 m and a 6,476 m summit, then four days in the Hongu above 4,850 m. Island Peak, at the end of all that, is the easiest day of the trip physiologically.</p>",
      },
      {
        heading: "Camping, Food and Committing to the Hongu",
        content:
          "<p>From Khare to Chhukung — around six nights — there is <strong>no lodge, no shop and no village</strong>. The group travels with two-person tents, a mess tent, kitchen tent and toilet tent, a cook and kitchen crew, and all food and fuel carried in from Lukla and topped up at Khare. Camps sit between 4,850 m and 5,400 m and the coldest reach -20°C overnight.</p><p>The commitment matters more than the comfort. Once the group crosses the Mera La eastward the exits are the Amphu Lapcha ahead or a long retreat back over the Mera La. There is no road, no airstrip and no lodge to walk to. Helicopter evacuation from the Hongu is possible in clear weather and expensive; this is the itinerary on which we check insurance documentation most carefully.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> are essential — Mera's high camp at 5,800 m and a summit morning below -20°C is where single boots produce frostbite. A <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket, insulated over-trousers, a full shell, mitts as well as gloves, a balaclava, category 4 glacier glasses, goggles, gaiters, a headlamp with lithium batteries and factor 50 sunscreen.</p><p>We supply the <strong>rope, snow bars, ice screws and anchors</strong>, our Sherpas fix Mera's summit step and Island Peak's headwall, and the crew rigs the Amphu Lapcha abseil before the group arrives at the notch. <strong>Personal hardware can be rented as an add-on</strong>; a descender you have used before is worth carrying from home for the col.</p>",
      },
    ],
    faqs: [
      { question: "Why climb Mera before Island Peak?", answer: "Because Mera is the altitude problem and Island Peak is the technical one, and it is far easier to solve them in that order. A climber who has stood at 6,476 m finds Island Peak's headwall a matter of technique; a climber who does Island Peak first arrives at Mera's summit slope with no experience of that altitude." },
      { question: "What exactly happens at the Amphu Lapcha?", answer: "You climb a steep snow slope to the notch at 5,845 m from the south. The north side drops away as a rock and ice wall, so the crew rigs fixed ropes and the group abseils 100 to 150 m in stages onto the glacier below, crossing a bergschrund near the bottom. Rucksacks are lowered separately so nobody abseils under a heavy load." },
      { question: "Can the col be avoided?", answer: "Only by turning round. The alternative is retracing over the Mera La and out through the Hinku, which adds about three days and means no Island Peak. Your guide makes that call at Amphu Lapcha base camp, and it happens perhaps one season in five after heavy snow." },
      { question: "How committing is the Hongu section?", answer: "Fully. From the Mera La onward the only exits are forward over the col or back the way you came. There are no villages, no lodges and no side trails. This is why the guide-to-client ratio is higher here and why the reserve day sits in the Hongu rather than at the end." },
      { question: "Is there a reserve day for each peak?", answer: "One in the Hongu, which covers a second Mera attempt or a weather wait before the col, and one at Island Peak base camp. Two reserve days across two summits and a technical pass is the minimum we would run this trip with." },
      { question: "How cold does Mera's high camp get?", answer: "Regularly -15°C to -20°C inside the tent overnight, and colder outside before dawn. It is the coldest night of any trekking peak in Nepal, which is why we specify a -30°C bag and double boots and keep the stay to a single night." },
      { question: "What is the accommodation like overall?", answer: "Lodges in the Hinku as far as Khare and again from Chhukung onward, and tents for the six nights in between. The Hinku lodges are simpler than the Khumbu's — plywood partitions, shared toilets and a short menu — and after the Hongu they feel luxurious." },
      { question: "Which is the true summit of Mera?", answer: "Mera has a north summit at 6,476 m, a central summit at 6,461 m and a south summit at 6,065 m. Commercial groups climb the central summit, which is the high point of the standard glacier route. The north summit needs extra exposed climbing and we can arrange it for strong parties on request." },
      { question: "Is there mobile signal on the traverse?", answer: "NTC coverage in the Hinku as far as Khare and again from Chhukung onward, with nothing at all in between — roughly five days. Bring a power bank, keep it in your sleeping bag, and tell people at home not to expect contact for a week." },
      { question: "How many staff travel with the group?", answer: "A lead climbing guide, an assistant guide, one climbing Sherpa per two climbers, a cook and kitchen crew, and porters for the tents, food and technical equipment. It is a considerably larger operation than a lodge-based climb, which is reflected in the price." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Mera high camp through the Hongu valley to the Amphu Lapcha, and at Island Peak base camp (5,087 m) and high camp (5,600 m), with two-person tents, a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permits for Mera Peak and Island Peak (Imja Tse), Makalu Barun National Park entry permit, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa:
        "One climbing Sherpa for every two climbers from Khare onward, with all their equipment, wages and insurance, plus an assistant climbing guide for the col crossing.",
      extra: [
        "Cook and kitchen crew for the camping nights, with all food and fuel carried in.",
        "A full training day at Khare covering crampons, ice axe, rope teams, fixed-line ascent and abseil technique.",
        "Fixing of Mera's summit step and Island Peak's headwall, and rigging of the Amphu Lapcha abseil with all rucksacks lowered separately.",
        "Porters and pack support for the tents, food and technical equipment throughout the Hongu.",
        "A reserve day in the Hongu and a reserve day at Island Peak base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an Amphu Lapcha crossing abandoned for conditions, or a retreat back over the Mera La and out through the Hinku.",
    },
    porterDays: 21,
    gearRentalDays: 21,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 25-day traverse climbing Mera Peak (6,476 m) from the Hinku, crossing the uninhabited Hongu and the technical Amphu Lapcha (5,845 m), and finishing on Island Peak (6,189 m) in the Imja valley.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full tented accommodation, three meals a day throughout, both NMA climbing permits and both national park fees, a climbing guide with an assistant and one Sherpa per two climbers, a cook crew, group climbing equipment, the training day, rope fixing on both peaks and the fixed abseil on the col are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Mera and Island Peak Climbing — 25 Days, Two Summits and a Col | Green Compass Treks",
      description:
        "Climb Mera Peak (6,476 m) and Island Peak (6,189 m) on a 25-day traverse, crossing the uninhabited Hongu valley and the technical Amphu Lapcha between them. Two summits, one col, no ground walked twice.",
      keywords:
        "mera and island peak climbing, mera island peak combination, amphu lapcha traverse, two peak climbing nepal, hongu valley climbing",
      tags: "Mera Peak, Island Peak, Amphu Lapcha, Everest Region, Two Peaks, Traverse",
    },
  },
  days: [
    // The Hinku approach, Mera, the Hongu and the Amphu Lapcha are the traverse
    // itinerary's, restated for this trip's length; Island Peak and the walk out
    // are the Khumbu stages used by every combination in this file.
    ...meraPeakAmphuLapcha.days.slice(0, 16).map((d) => ({
      ...d,
      html: d.html
        .replace("twenty-one day plan", "twenty-five day plan")
        .replace(
          "<strong>Chhukung (4,730 m)</strong> means a bed, a stove and a menu after six nights in a tent.",
          "<strong>Chhukung (4,730 m)</strong> means a bed, a stove and a menu after six nights in a tent — and, two days from now, the second summit of the trip.",
        ),
    })),
    ...withPlan(ISLAND_STAGE, "twenty-five day"),
    ...withPlan(WALK_OUT, "twenty-five day"),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const meraIslandAndLobuche: Climb = {
  region: "Everest Region",
  price: 6950,
  difficulty: "difficult",
  maxAltitude: 6476,
  grade: "PD, AD- at the col, then PD+ and AD-",
  center: [86.87, 27.85],
  zoom: 10,
  content: {
    slug: "mera-island-and-lobuche-peak-climbing",
    title: "Mera Island and Lobuche Peak Climbing",
    overview:
      "<p>Three 6,000 m summits and a technical col in thirty days, walked as a single continuous traverse from the Hinku valley to the Khumbu glacier. <strong>Mera Peak (6,476 m)</strong> first, then the <strong>Amphu Lapcha (5,845 m)</strong> into the Imja valley, then <strong>Island Peak (6,189 m)</strong>, and finally <strong>Lobuche East (6,119 m)</strong> above the Khumbu glacier opposite Everest Base Camp.</p><p>It is the most complete climbing traverse of the Everest region, and the order is what makes it work. Mera provides the altitude, the col provides the technical rope work, Island Peak consolidates both, and Lobuche East — the hardest climbing of the three peaks, with a long exposed ridge and a true summit beyond a notch — comes last, on a climber who by then has three weeks above 4,000 m behind them. <strong>No section of trail is walked twice.</strong></p>",
    highlights: [
      ["Three 6,000 m Summits", "Mera (6,476 m), Island Peak (6,189 m) and Lobuche East (6,119 m), in ascending technical difficulty."],
      ["Cross the Amphu Lapcha (5,845 m)", "A 100–150 m abseil down a rock and ice wall from the uninhabited Hongu into the Imja valley."],
      ["The Hinku, the Hongu and the Khumbu", "Three valleys in one traverse, with no ground repeated from Lukla to Lukla."],
      ["The True Lobuche East Summit", "We cross the notch beyond the false summit that most commercial groups stop at."],
      ["A Reserve Day for Every Summit", "Three contingency days across three peaks, plus a weather day in the Hongu for the col."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Hinku catches more of the monsoon's tail than the Khumbu, so early October departures can still meet cloud and soft snow on the Zatrwa La, and settled weather arrives a week or two later there than at Namche.</p><p>The <strong>Amphu Lapcha</strong> dictates the window: it needs firm snow on the north wall to rig safely, which means late April to May or mid-October to early November. Over thirty days the trip needs three summit windows as well, which is why we do not run departures at the very edges of either season.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Four distinct problems. <strong>Mera (PD)</strong>: a broad glacier at 25 to 30 degrees with one short steep step, hard because of the altitude — six to eight hours from 5,800 m at -20°C. The <strong>Amphu Lapcha (AD-)</strong>: a steep snow climb to a 5,845 m notch and a <strong>100 to 150 m abseil</strong> down rock and ice, with every rucksack lowered separately.</p><p><strong>Island Peak (PD+)</strong>: a boulder gully, a roped glacier crossing, a <strong>100 m headwall at 45 to 50 degrees</strong> and a corniced arête. <strong>Lobuche East (AD-)</strong>: a rock buttress, sustained ice at 40 to 50 degrees, a long exposed ridge and a <strong>true summit at 6,119 m</strong> beyond a notch that many parties never cross. Ten to fourteen hours, and the hardest climbing of the trip, taken last by design.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p><strong>Previous experience above 5,000 m is required</strong> and a 6,000 m peak already climbed is strongly preferred. You should have abseiled before and be steady on fixed rope — the col cannot be learned on the day. The full training day at Khare covers the technique for all four sections, and your guide runs refreshers before Island Peak's headwall and Lobuche's ridge.</p><p>Acclimatisation over thirty days is as good as it gets. The Zatrwa La, the deliberate drop to Kothe, rest days at Thagnak and Khare, Mera's 5,800 m high camp and 6,476 m summit, four days in the Hongu above 4,850 m, and then two more peaks. The limiting factor on this trip is not altitude — it is the cumulative fatigue of three summit days and a col in four weeks.</p>",
      },
      {
        heading: "Camping, Food and Committing to the Hongu",
        content:
          "<p>From Khare to Chhukung — around six nights — there is <strong>no lodge, no shop and no village</strong>. The group travels with two-person tents, a mess tent, kitchen tent and toilet tent, a cook and kitchen crew, and all food and fuel carried in. Camps sit between 4,850 m and 5,400 m and the coldest reach -20°C overnight.</p><p>Once the group crosses the Mera La eastward the exits are the col ahead or a long retreat behind. There is no road, no airstrip and no lodge to walk to. After the Amphu Lapcha the trip returns to lodges at Chhukung and Dingboche, with tented base camps again on Island Peak and Lobuche East — so the pattern is six nights committed, then a fortnight with a bed most nights.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> are essential for Mera's high camp and summit morning. A <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket, insulated over-trousers, a full shell, mitts as well as gloves, a balaclava, category 4 glacier glasses, goggles, gaiters, a headlamp with lithium batteries and factor 50 sunscreen.</p><p>We supply all <strong>group rope, snow bars, ice screws and anchors</strong>, fix the summit step on Mera, the headwall on Island Peak and the buttress and ridge on Lobuche East, and rig the Amphu Lapcha abseil. <strong>Personal hardware can be rented as an add-on</strong>; over four separate technical days, kit you have used before is worth carrying from home.</p>",
      },
    ],
    faqs: [
      { question: "Why is Lobuche East climbed last rather than first?", answer: "Because it is the hardest climbing of the three peaks and it deserves the most acclimatised climber. It also fits the geography — the traverse runs Hinku to Imja to Khumbu, and Lobuche sits at the far end. Climbing it first would mean walking the whole route backwards." },
      { question: "How many summit days are there in total?", answer: "Three, plus the Amphu Lapcha crossing, which is a summit day in everything but name — ten to twelve hours with a long abseil. Spread over thirty days with reserve days between them, that is a demanding but manageable load for a fit climber." },
      { question: "Can I stop after two peaks?", answer: "Yes, at any point. A climber who does Mera and Island Peak and decides that is enough descends from Chhukung with a Sherpa while the group continues to Lobuche. There is no penalty and the decision is made with your guide." },
      { question: "What happens if the Amphu Lapcha is not crossable?", answer: "The group retreats over the Mera La and out through the Hinku, which costs the rest of the trip — Island Peak and Lobuche East are both on the far side. It happens perhaps one season in five after heavy snow, and it is the main reason we build a weather day into the Hongu." },
      { question: "Is this harder than the Mera and Island Peak traverse?", answer: "Longer rather than harder, with one significant addition: Lobuche East's ridge is the most technical ground on the trip. If you want the traverse and the col, the twenty-five day version delivers it; this adds a third summit and a fifth week." },
      { question: "How many reserve days are there?", answer: "Four in effect — one in the Hongu covering a second Mera attempt or a weather wait for the col, one at Island Peak base camp, and one at Lobuche East base camp. Over three peaks that is the minimum we would run." },
      { question: "What are the success rates?", answer: "Around 75 to 85 percent on Mera, 85 to 90 percent on Island Peak and 65 to 75 percent on Lobuche East's true summit. The Island Peak figure is high because of everything that comes before it; the Lobuche figure reflects both its difficulty and accumulated fatigue." },
      { question: "How fit do I need to be?", answer: "Very. This is thirty days of walking with three summit days and a technical col in it, and the last peak comes when you are four weeks in. The benchmark is walking eight hours with 10 kg on consecutive days and recovering overnight. Six months of consistent training is realistic." },
      { question: "Is there mobile signal on the traverse?", answer: "NTC coverage in the Hinku as far as Khare and again from Chhukung onward, with nothing in the Hongu — roughly five days out of contact. From Chhukung to the end of the trip you are back in coverage for most of it." },
      { question: "Can Everest Base Camp be added at the end?", answer: "Easily. Lobuche East base camp is two hours above Lobuche village, which is a half-day from Gorak Shep. Adding Everest Base Camp and Kala Patthar extends the trip by two days, and after three summits it is a gentle way to finish." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Mera high camp through the Hongu to the Amphu Lapcha, and at the base camps and high camps on Island Peak and Lobuche East, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permits for Mera Peak, Island Peak (Imja Tse) and Lobuche East, Makalu Barun National Park entry permit, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa:
        "One climbing Sherpa for every two climbers from Khare onward and on every summit, with all their equipment, wages and insurance, plus an assistant climbing guide for the col crossing.",
      extra: [
        "Cook and kitchen crew for all camping nights, with food and fuel carried in for the Hongu section.",
        "A full training day at Khare, a headwall refresher at Island Peak base camp, and a ridge and short-roping refresher before Lobuche East.",
        "Fixing of Mera's summit step, Island Peak's headwall and Lobuche East's buttress and summit ridge, and rigging of the Amphu Lapcha abseil.",
        "Porters and pack support for tents, food and technical equipment throughout.",
        "A reserve day in the Hongu and a reserve day at each of the two Khumbu base camps.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an Amphu Lapcha crossing abandoned for conditions, or a retreat back over the Mera La that ends the Khumbu half of the trip.",
    },
    porterDays: 26,
    gearRentalDays: 26,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 30-day traverse climbing Mera Peak (6,476 m), crossing the Amphu Lapcha (5,845 m) into the Imja valley, and then climbing Island Peak (6,189 m) and Lobuche East (6,119 m), with a reserve day for each summit.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full tented accommodation, three meals a day throughout, all three NMA climbing permits and both national park fees, a climbing guide with an assistant and Sherpa support on every summit, a cook crew, group climbing equipment, training days, rope fixing on all three peaks and the fixed abseil on the col are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Mera, Island and Lobuche Peak Climbing — 30 Days, Three Summits | Green Compass Treks",
      description:
        "Climb Mera Peak, Island Peak and Lobuche East on a 30-day traverse from the Hinku to the Khumbu, crossing the technical Amphu Lapcha between valleys. Three 6,000 m summits and no ground walked twice.",
      keywords:
        "mera island lobuche climbing, three peak traverse nepal, amphu lapcha three peaks, khumbu climbing traverse, mera island lobuche combination",
      tags: "Mera Peak, Island Peak, Lobuche East, Amphu Lapcha, Everest Region, Three Peaks",
    },
  },
  days: [
    ...meraPeakAmphuLapcha.days.slice(0, 16).map((d) => ({
      ...d,
      html: d.html.replace("twenty-one day plan", "thirty day plan"),
    })),
    ...withPlan(ISLAND_STAGE, "thirty day"),
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "A tented camp on the moraine below Lobuche East, facing Everest Base Camp across the glacier.",
      ...LOBUCHE_BC,
      html: p(
        "The link between the second peak and the third, and a long day. Camp comes down and the group descends the moraine to <strong>Chhukung</strong> and on down the Imja valley to <strong>Dingboche</strong>.",
        "From there the trail climbs north-west onto the broad ridge, runs along the shelf above the Pheriche valley to <strong>Thukla</strong>, and takes the steep pull up the terminal moraine of the Khumbu glacier past the <strong>memorial chortens</strong>.",
        "<strong>Lobuche East Base Camp (4,950 m)</strong> stands on the moraine above the trail, with Everest Base Camp visible across the glacier and the last summit of the trip directly overhead. Around 7 to 8 hours. Overnight at base camp.",
      ),
    },
    ...withPlan(LOBUCHE_STAGE.slice(1), "thirty day"),
    {
      title: "Trek from Lobuche East Base Camp (4,950 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, on the walk out from the last peak.",
      ...PANGBOCHE,
      html: p(
        "Camp comes down for the last time and the group descends the moraine past the <strong>Thukla memorial</strong> chortens and the steep drop beside the glacier snout into the Pheriche valley.",
        "Through <strong>Pheriche</strong>, where the Himalayan Rescue Association clinic runs its afternoon altitude talks, and on down the valley beside the river.",
        "A gentle final climb reaches <strong>Pangboche (3,930 m)</strong>, where juniper and birch return after nearly four weeks above the treeline, and where three summits are behind you. Around 6 to 7 hours. Overnight at Pangboche.",
      ),
    },
    ...withPlan(WALK_OUT.slice(1), "thirty day"),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const islandMeraWithGokyoEbc: Climb = {
  region: "Everest Region",
  price: 6850,
  difficulty: "difficult",
  maxAltitude: 6476,
  grade: "PD, AD- at the col, then PD+",
  center: [86.8, 27.88],
  zoom: 10,
  content: {
    slug: "island-mera-peak-climbing-with-gokyo-ebc",
    title: "Island and Mera Peak Climbing with Gokyo and EBC",
    overview:
      "<p>Everything the Everest region has, in thirty-one days. Two 6,000 m summits — <strong>Mera (6,476 m)</strong> and <strong>Island Peak (6,189 m)</strong> — a technical col in the <strong>Amphu Lapcha (5,845 m)</strong>, and then, when the climbing is done, the two things every visitor to the Khumbu wants to see: <strong>Everest Base Camp and Kala Patthar</strong>, and the <strong>Gokyo lakes</strong> reached over the Cho La.</p><p>The order is deliberate. The climbing comes first, while legs and weather windows are fresh, and the trekking comes second as a long, spectacular descent — Gorak Shep, the Khumbu Icefall at close range, the Cho La, and the turquoise lakes under Cho Oyu. Most people who book two peaks regret not seeing base camp; most people who book base camp regret not climbing anything. This itinerary is the answer to both, and it crosses <strong>three valleys and two passes</strong> without repeating a day's walk until the last two.</p>",
    highlights: [
      ["Mera (6,476 m) and Island Peak (6,189 m)", "Two summits on one acclimatisation, with the technical Amphu Lapcha between them."],
      ["Everest Base Camp and Kala Patthar", "Stand on the Khumbu glacier beneath the Icefall, and climb to 5,545 m for the classic Everest view."],
      ["The Gokyo Lakes and Gokyo Ri", "Cross the Cho La to the turquoise lakes under Cho Oyu, and climb Gokyo Ri for the best panorama in Nepal."],
      ["Three Valleys and Two Passes", "The Hinku, the Hongu and the Khumbu, linked by the Amphu Lapcha and the Cho La."],
      ["Climbing First, Trekking After", "The summits are attempted while you are freshest, and the famous walking is the descent."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Over thirty-one days the trip needs two summit windows, a settled spell for the Amphu Lapcha and a clear crossing of the Cho La, which argues for the middle of either season rather than its edges.</p><p>The Hinku catches more of the monsoon's tail than the Khumbu, so early October departures can meet cloud and soft snow on the Zatrwa La. Spring gives warmer nights at Mera's high camp and rhododendron in flower below Kothe; autumn gives the clearest air of the year, which matters when half the trip is about the view. Both passes need firm snow, and your guide will reroute rather than cross a loaded one.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Three technical problems and two walking passes. <strong>Mera (PD)</strong> is a broad glacier at 25 to 30 degrees with one short steep step, hard for its altitude — six to eight hours from 5,800 m. The <strong>Amphu Lapcha (AD-)</strong> is a steep snow climb to a 5,845 m notch and a <strong>100 to 150 m abseil</strong> down rock and ice.</p><p><strong>Island Peak (PD+)</strong> gives a boulder gully, a roped glacier crossing, a <strong>100 m headwall at 45 to 50 degrees</strong> and a corniced arête. After that the difficulty falls away: the <strong>Cho La (5,420 m)</strong> is a long walking pass with a short glacier crossing and some scrambling, and Kala Patthar and Gokyo Ri are steep walks. The second half is a trek, and after two summits it feels like one.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p><strong>Previous experience above 5,000 m is required</strong> and a 6,000 m peak already climbed is preferred. You should have abseiled before and be comfortable on fixed rope. The full training day at Khare covers the technique for Mera, the col and Island Peak, and your guide runs a headwall refresher before Imja Tse.</p><p>Acclimatisation is excellent and the second half of the trip barely tests it. By the time the group reaches Everest Base Camp it has slept at 5,800 m, summited at 6,476 m and crossed a 5,845 m col, so Kala Patthar at 5,545 m — a serious objective on most itineraries — is an easy morning. The limiting factor is stamina over thirty-one days rather than altitude.</p>",
      },
      {
        heading: "Camping, Lodges and the Hongu",
        content:
          "<p>From Khare to Chhukung — around six nights — there is <strong>no lodge, no shop and no village</strong>, and the group travels with tents, a cook crew and all food carried in. Camps sit between 4,850 m and 5,400 m. Once the group crosses the Mera La eastward, the exits are the col ahead or a long retreat behind.</p><p>After the Amphu Lapcha the trip changes character completely. From Chhukung onward it is <strong>lodges every night</strong> — Dingboche, Lobuche, Gorak Shep, Dzongla, Gokyo, Dole and Namche — with a tented base camp only for Island Peak. Hot showers, bakeries, Wi-Fi and a menu return, and after the Hongu they are noticed.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> are essential for Mera's high camp and summit morning, and trekking boots are worth carrying as well for the long second half. A <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy down jacket, insulated over-trousers, a full shell, mitts as well as gloves, a balaclava, category 4 glacier glasses, goggles, gaiters, a headlamp with lithium batteries and factor 50 sunscreen.</p><p>We supply all <strong>group rope, snow bars, ice screws and anchors</strong>, fix Mera's summit step and Island Peak's headwall, and rig the Amphu Lapcha abseil. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Why is the trekking at the end rather than the beginning?", answer: "Because summit windows and fresh legs are the scarce resources and the trekking is not. Doing Gokyo and base camp first would mean arriving at Mera two weeks in with the best weather possibly already spent. Doing them afterwards turns the walk out into the highlight rather than a chore." },
      { question: "Do we actually walk into Everest Base Camp?", answer: "Yes — the full walk from Gorak Shep onto the Khumbu glacier to base camp itself, standing beneath the Icefall. In the climbing season it is a small city of tents and one of the more extraordinary places to stand in Nepal. Kala Patthar follows the next morning for the Everest view." },
      { question: "How hard is the Cho La?", answer: "A long day rather than a technical one — 5,420 m, with a steep loose climb on the eastern side, a short crossing of a small glacier where crampons come out, and a rough descent to Thagnak on the Gokyo side. Seven to nine hours. After the Amphu Lapcha it will feel straightforward." },
      { question: "Is Gokyo Ri worth the extra morning?", answer: "It is the finest viewpoint in the Khumbu and arguably in Nepal — four 8,000 m peaks from one summit, with the Ngozumpa glacier and the lakes below. It is a steep two-hour walk from Gokyo and nobody who does it regrets the early start." },
      { question: "Can I skip a peak and keep the trekking?", answer: "Yes. A climber who does Mera and decides Island Peak is not for them still crosses the col with the group and continues to base camp and Gokyo. The itinerary works with one summit, two summits, or the col alone." },
      { question: "How many reserve days are there?", answer: "Two — one in the Hongu covering a second Mera attempt or a weather wait for the col, and one at Island Peak base camp. The trekking half has enough slack in it to absorb a lost day without a formal reserve." },
      { question: "Is this too much for one trip?", answer: "It is a lot, and we would rather say so. Thirty-one days with two summit days, a technical col and two high passes is a serious undertaking. Climbers who want the peaks without the length should look at our twenty-five day Mera and Island Peak traverse." },
      { question: "What is the accommodation split?", answer: "Roughly six nights in tents in the Hongu, three more at Island Peak base camp and high camp, and the rest in lodges. From Chhukung onward you have a bed almost every night, which over a month-long trip matters more than it sounds." },
      { question: "Do we see Cho Oyu and Makalu?", answer: "Both, repeatedly. Makalu is visible from Mera's summit and from Kala Patthar; Cho Oyu stands over Gokyo and dominates the view from Gokyo Ri. Between them and Everest, Lhotse and Kanchenjunga from Mera, this trip sees five of the six highest mountains on earth." },
      { question: "Is there mobile signal for the whole trip?", answer: "For most of it. NTC covers the Hinku to Khare and the Khumbu from Chhukung onward, including Gorak Shep and Gokyo. The Hongu has nothing at all — about five days out of contact in the middle of the trip." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Mera high camp through the Hongu to the Amphu Lapcha, and at Island Peak base camp and high camp, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permits for Mera Peak and Island Peak (Imja Tse), Makalu Barun National Park entry permit, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa:
        "One climbing Sherpa for every two climbers from Khare onward and on both summits, with all their equipment, wages and insurance, plus an assistant climbing guide for the col crossing.",
      extra: [
        "Cook and kitchen crew for the camping nights, with all food and fuel carried in for the Hongu section.",
        "A full training day at Khare and a headwall refresher at Island Peak base camp.",
        "Fixing of Mera's summit step and Island Peak's headwall, and rigging of the Amphu Lapcha abseil.",
        "The full Everest Base Camp and Kala Patthar excursion, and the Cho La crossing to Gokyo with Gokyo Ri.",
        "Porters and pack support for tents, food and technical equipment throughout.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an Amphu Lapcha or Cho La crossing abandoned for conditions, or a retreat back over the Mera La.",
    },
    porterDays: 27,
    gearRentalDays: 22,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 31-day traverse climbing Mera Peak (6,476 m) and Island Peak (6,189 m) with the Amphu Lapcha between them, then walking to Everest Base Camp and Kala Patthar and crossing the Cho La to the Gokyo lakes.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full tented accommodation, three meals a day throughout, both NMA climbing permits and both national park fees, a climbing guide with an assistant and Sherpa support on both summits, a cook crew, group climbing equipment, the training day, rope fixing, the fixed abseil on the col, and the Everest Base Camp, Kala Patthar, Cho La and Gokyo Ri excursions are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Island and Mera Peak Climbing with Gokyo and EBC — 31 Days | Green Compass Treks",
      description:
        "Climb Mera Peak and Island Peak across the Amphu Lapcha, then walk to Everest Base Camp and Kala Patthar and cross the Cho La to the Gokyo lakes. 31 days, two summits, two passes and three valleys.",
      keywords:
        "island mera gokyo ebc, mera island peak everest base camp, gokyo cho la climbing, two peaks and everest base camp, khumbu grand traverse",
      tags: "Mera Peak, Island Peak, Everest Base Camp, Gokyo, Cho La, Everest Region",
    },
  },
  days: [
    ...meraPeakAmphuLapcha.days.slice(0, 16).map((d) => ({
      ...d,
      html: d.html.replace("twenty-one day plan", "thirty-one day plan"),
    })),
    ...withPlan(ISLAND_STAGE, "thirty-one day"),
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley, where the trekking half begins.",
      ...DINGBOCHE,
      html: p(
        "The climbing is finished and the trip changes character today. Camp comes down and the group walks back down the moraine to <strong>Chhukung</strong> and on down the Imja valley.",
        "It is an easy day after two summits and a col, and the first one in three weeks with nothing to be climbed at the end of it.",
        "<strong>Dingboche (4,410 m)</strong> has lodges, bakeries and hot showers, and from here the itinerary follows the Everest Base Camp trail. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Lobuche (4,940 m)",
      elevation: "4,940 m",
      accommodation: "Lobuche",
      placeDescription: "A small lodge settlement on the moraine of the Khumbu glacier.",
      ...LOBUCHE_VILLAGE,
      html: p(
        "North-west onto a broad ridge, then along the shelf above the Pheriche valley to <strong>Thukla (4,620 m)</strong> and the steep pull up the terminal moraine of the Khumbu glacier.",
        "The top of that climb is the <strong>Thukla memorial</strong>, a field of stone chortens and plaques for climbers who died on Everest and the peaks around it, including Scott Fischer and Babu Chiri Sherpa. It is a quiet twenty minutes.",
        "<strong>Lobuche (4,940 m)</strong> is a handful of lodges on the moraine beside the glacier, with Nuptse's wall filling the eastern sky. Around 5 hours. Overnight at Lobuche.",
      ),
    },
    {
      title: "Trek to Everest Base Camp (5,364 m) and Gorak Shep (5,164 m)",
      elevation: "5,164 m",
      accommodation: "Gorak Shep",
      placeDescription: "The last settlement in the valley, on the sandy flat below Kala Patthar.",
      ...GORAK_SHEP,
      html: p(
        "North along the lateral moraine to <strong>Gorak Shep (5,164 m)</strong>, the last flat ground in the valley and the site of the 1953 base camp, where you drop your pack at the lodge.",
        "Then out onto the glacier itself for two hours, picking a line through ice pinnacles and rubble to <strong>Everest Base Camp (5,364 m)</strong> — a city of tents in season, sitting directly beneath the <strong>Khumbu Icefall</strong>, which is loud and visibly moving and unlike anything else on the trip.",
        "Back to Gorak Shep in the late afternoon. It is a long day at altitude, and after a month above 4,000 m it is a comfortable one. Around 7 to 8 hours. Overnight at Gorak Shep.",
      ),
    },
    {
      title: "Climb Kala Patthar (5,545 m) and Trek to Dzongla (4,830 m)",
      elevation: "4,830 m",
      accommodation: "Dzongla",
      placeDescription: "A tiny lodge settlement above the Chola Tsho lake, beneath the north face of Cholatse.",
      ...DZONGLA,
      html: p(
        "Out before dawn for <strong>Kala Patthar (5,545 m)</strong>, a steep two-hour walk up a rocky bump on Pumori's southern ridge, timed so the sun comes onto Everest as you reach the top.",
        "It is the classic view — the whole <strong>Everest, Nuptse and Lhotse wall</strong> across the glacier, with the Icefall pouring down beneath it. Base camp itself is hidden from below and visible from here as a scatter of yellow dots.",
        "Back down for breakfast, then west off the main trail past Lobuche to <strong>Dzongla (4,830 m)</strong>, three or four lodges on a shelf above the turquoise <strong>Chola Tsho</strong> with Cholatse's north face directly opposite. Around 7 to 8 hours. Overnight at Dzongla.",
      ),
    },
    {
      title: "Cross the Cho La (5,420 m) to Gokyo (4,790 m)",
      elevation: "4,790 m",
      accommodation: "Gokyo",
      placeDescription: "A lodge settlement beside the third Gokyo lake, under Cho Oyu and the Ngozumpa glacier.",
      ...GOKYO,
      html: p(
        "The second pass of the trip, and after the Amphu Lapcha it is a walking day rather than a climbing one. A steep, loose climb from Dzongla leads to a short crossing of a small glacier where crampons come out, and then the <strong>Cho La (5,420 m)</strong> itself, cairned and hung with prayer flags.",
        "The western descent is rough and long, down moraine and boulder fields to <strong>Thagnak</strong>, and then across the <strong>Ngozumpa glacier</strong> — the longest glacier in Nepal — on a marked line through its rubble.",
        "<strong>Gokyo (4,790 m)</strong> sits on the shore of the third lake, an improbable turquoise under Cho Oyu. Seven to nine hours. Overnight at Gokyo.",
      ),
    },
    {
      title: "Climb Gokyo Ri (5,357 m) and Rest at Gokyo (4,790 m)",
      elevation: "4,790 m",
      accommodation: "Gokyo",
      placeDescription: "The lakeside settlement, with the finest viewpoint in the Khumbu directly above it.",
      ...GOKYO,
      html: p(
        "An early start for <strong>Gokyo Ri (5,357 m)</strong>, a steep two-hour walk up the hill behind the lodges, done before the cloud builds.",
        "The summit gives what many people consider the best panorama in Nepal: <strong>Everest, Lhotse, Makalu and Cho Oyu</strong> — four 8,000 m peaks from one small top — with the Ngozumpa glacier running south below and the chain of turquoise lakes beneath your feet.",
        "The rest of the day is genuinely free, and after four weeks it is welcome. Some walk north to the fourth and fifth lakes; most sit by the third one. Around 4 hours. Overnight at Gokyo.",
      ),
    },
    {
      title: "Trek from Gokyo (4,790 m) to Dole (4,040 m)",
      elevation: "4,040 m",
      accommodation: "Dole",
      placeDescription: "A small lodge settlement in the Gokyo valley, above the last of the rhododendron forest.",
      ...DOLE,
      html: p(
        "South down the Gokyo valley beside the Ngozumpa glacier's lateral moraine, past the second and first lakes and down through the summer settlement of <strong>Machhermo</strong>.",
        "The valley narrows and drops, and somewhere below Machhermo the first juniper appears — the first vegetation taller than a hand's width in nearly a fortnight.",
        "<strong>Dole (4,040 m)</strong> is a handful of lodges at the treeline. Around 5 to 6 hours. Overnight at Dole.",
      ),
    },
    {
      title: "Trek from Dole (4,040 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached at the end of the Gokyo valley.",
      ...NAMCHE,
      html: p(
        "Down through rhododendron and birch to <strong>Phortse Tenga</strong> on the valley floor, then the steep climb back up to <strong>Mong La (3,975 m)</strong>, a saddle with a chorten and a long view down the Dudh Koshi gorge.",
        "From there the trail contours south around the hillside with Ama Dablam ahead and Everest behind, rejoining the main Khumbu trail above Kyangjuma.",
        "<strong>Namche Bazaar (3,440 m)</strong> after a month means a hot shower, a bakery, an ATM and a beer, in roughly that order of urgency. Around 6 hours. Overnight at Namche.",
      ),
    },
    ...withPlan(WALK_OUT.slice(2), "thirty-one day"),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const amaDablamAndIslandPeak: Climb = {
  region: "Everest Region",
  price: 14500,
  difficulty: "extreme",
  maxAltitude: 6812,
  grade: "PD+ then TD-",
  expedition: true,
  center: [86.86, 27.89],
  zoom: 10,
  content: {
    slug: "ama-dablam-expedition-and-island-peak-climbing",
    title: "Ama Dablam Expedition and Island Peak Climbing",
    overview:
      "<p>The best possible preparation for <strong>Ama Dablam (6,812 m)</strong> is a 6,000 m summit two weeks before it, and this itinerary builds that in. <strong>Island Peak (6,189 m)</strong> is climbed first — the glacier, the <strong>100 m headwall</strong> and the corniced arête — and then the group walks west to Ama Dablam base camp with the fixed-rope technique already in their hands and a night at 5,600 m behind them.</p><p>What that buys on the second peak is not fitness but <strong>familiarity</strong>. Ama Dablam's difficulty is concentrated in exposed technical ground — the <strong>Yellow Tower</strong>, the Grey Tower and the Mushroom Ridge — and a climber who has jumared a steep headwall and stood on a corniced ridge in the last fortnight arrives at the Tower knowing exactly what their body does there. The Ama Dablam half of the trip is the full thirty-day expedition structure: two rotations, one Sherpa per climber, and three reserve days.</p>",
    highlights: [
      ["Island Peak (6,189 m) then Ama Dablam (6,812 m)", "A 6,000 m summit as preparation, then the most iconic technical peak in Nepal."],
      ["The Yellow Tower", "Exposed rock climbing in crampons at 5,900 m, the technical crux of Ama Dablam's south-west ridge."],
      ["Two Full Rotations on Ama Dablam", "Nights at Camp 1 and Camp 2 before the summit push, the structure that puts climbers on top."],
      ["One Sherpa Per Climber on Ama Dablam", "One-to-one high-altitude support on every section of the route."],
      ["Three Reserve Days for the Big Peak", "Genuine room for the weather on a mountain defeated more often by wind than by difficulty."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>October and November</strong>. This is Ama Dablam's season and it is not a close contest: post-monsoon the rock of the Yellow and Grey Towers is dry, the ridge is stable, the weather windows are long, and the fixed ropes are in place and maintained by the teams on the mountain. Island Peak is at its best in the same months.</p><p><strong>April and May</strong> is climbable and we run occasional spring departures, but Ama Dablam's route is colder, the rock more often iced, and there are far fewer teams sharing the fixing. If you have one season to choose for this combination, choose late October, when Island Peak's headwall is in good condition and Ama Dablam's ropes are fresh.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Island Peak (PD+)</strong>: a boulder gully in the dark, a roped glacier crossing between crevasses, a <strong>100 m headwall at 45 to 50 degrees</strong> on fixed rope and a corniced summit arête. Twelve to fifteen hours from high camp.</p><p><strong>Ama Dablam (TD-)</strong> is a category above. A long rocky spur to <strong>Camp 1 (5,700 m)</strong>, then the <strong>Yellow Tower</strong> — around fifteen metres of near-vertical rock climbed in crampons and gloves — to <strong>Camp 2 (5,900 m)</strong> on platforms cut into the ridge crest. Above it the <strong>Grey Tower</strong>, the corniced <strong>Mushroom Ridge</strong>, and the final slopes beneath the <strong>Dablam</strong> hanging glacier. Twelve to sixteen hours from Camp 2 with a long abseil descent.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>We ask for <strong>previous 6,000 m Himalayan experience or alpine climbing at AD+ or above</strong>. Island Peak within this itinerary does not substitute for that — it is a warm-up, not a qualification. You should arrive able to jumar on steep fixed rope for hours, move on rock in crampons, and abseil from a hanging stance while tired.</p><p>The acclimatisation is the reason to book the combination. The Khumbu approach, then Island Peak's high camp at 5,600 m and a 6,189 m summit, then a week at Ama Dablam base camp with two rotations to Camp 1 and Camp 2. By the time the summit push starts you have slept above 5,600 m four times and stood above 6,000 m once — a considerably stronger position than arriving at Ama Dablam base camp cold.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>mountaineering to 7,000 m, including technical rock and ice climbing, fixed-rope use and abseiling</strong>, is mandatory and we verify it before permits are issued. Ordinary adventure travel cover does not qualify and we reject it regularly. A national alpine club policy or a specialist mountaineering insurer is what this trip needs.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> are essential, with a limit high enough to be useful. Helicopters reach both base camps routinely and can long-line from Ama Dablam's Camp 1 in good conditions, but never from the ridge above. We hold your policy number, the insurer's 24-hour line and a named emergency contact from the Kathmandu briefing onward.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a technical ice axe, a <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, softshell trousers for the rock, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and a headlamp with lithium batteries and a spare.</p><p>The Yellow Tower is climbed in crampons on rock, so <strong>gloves you can feel holds through</strong> matter as much as the warm ones. We supply all group ropes, screws, snow stakes, rock protection and anchors, and fix Island Peak's headwall and our share of Ama Dablam's route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates</strong> for the Ama Dablam half.</p>",
      },
    ],
    faqs: [
      { question: "Does Island Peak really make a difference on Ama Dablam?", answer: "Yes, and more than the height difference suggests. It puts a night at 5,600 m and a day above 6,000 m into your body, and it puts several hours of jumaring on steep fixed rope and a corniced ridge into your hands. Climbers who do the combination arrive at the Yellow Tower noticeably more composed." },
      { question: "Can I book Ama Dablam alone if I have already climbed a 6,000 m peak?", answer: "Certainly, and many climbers do — our thirty-day Ama Dablam expedition is the same trip without the Island Peak fortnight. This combination is for climbers who want the warm-up in the same season, or who want two summits from one flight." },
      { question: "What is Ama Dablam's Camp 2 like?", answer: "Extraordinary and unnerving. The tents sit on small platforms directly on the crest of the ridge with drops on both sides and nowhere to walk to. Most climbers describe it as the most memorable and least restful night of the trip." },
      { question: "Do you use Camp 3 on Ama Dablam?", answer: "Rarely, and only when conditions clearly justify it. Camp 3 at around 6,300 m sits beneath the Dablam hanging glacier, which has calved onto it with fatal consequences. We summit from Camp 2 in one long day and accept the extra hours rather than the extra exposure." },
      { question: "What are the success rates?", answer: "Around 85 to 90 percent on Island Peak and 65 to 75 percent on Ama Dablam. The Ama Dablam figure is at the upper end of what the mountain gives, and the acclimatisation from Island Peak plus three reserve days is most of the reason." },
      { question: "How long is the gap between the two peaks?", answer: "Around four days — the descent from Island Peak base camp, the walk west to Ama Dablam base camp, the puja and the training day. Long enough to recover, short enough that the acclimatisation is still working for you." },
      { question: "Can I stop after Island Peak?", answer: "Yes, and it happens. A climber who reaches Island Peak's summit and decides Ama Dablam is not for them descends to Namche and flies out early. Your leader will also give an honest assessment at the Ama Dablam training day about whether the second peak is sensible." },
      { question: "How hard is the Yellow Tower?", answer: "Around UIAA IV+ in pure grade — moves most competent rock climbers would find straightforward at sea level in shoes. In double boots and crampons, in gloves, at 5,900 m, with a vertical kilometre underneath, it is a different proposition. It is fixed and climbed on an ascender." },
      { question: "Is the Sherpa ratio the same on both peaks?", answer: "No. Island Peak runs one climbing Sherpa per two climbers, which is standard for that mountain. Ama Dablam runs one high-altitude Sherpa per climber from base camp to the summit, which is what the ridge requires." },
      { question: "Why does the itinerary take thirty-five days?", answer: "Because Ama Dablam's half is the full thirty-day expedition structure — base camp, puja, training, two rotations and three reserve days — and Island Peak's fortnight sits in front of it. Compressing either would buy a shorter trip with a materially lower chance on the big peak." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Island Peak base camp (5,087 m) and high camp (5,600 m), and a full expedition base camp at Ama Dablam (4,600 m) with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and Camp 2 (5,900 m).",
      permits: `Nepal Mountaineering Association climbing permits for Island Peak (Imja Tse) and Ama Dablam, ${KHUMBU_PARK_FEES}.`,
      guide:
        "Government-licensed expedition leader with Ama Dablam experience, with all equipment, wages and insurance.",
      sherpa:
        "One climbing Sherpa for every two climbers on Island Peak, and one high-altitude climbing Sherpa per climber on Ama Dablam, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew at both base camps, with three hot meals a day and high-altitude food and fuel for the camps above.",
        "A full training day at Island Peak base camp and a technical assessment day at Ama Dablam base camp.",
        "Two full acclimatisation rotations on Ama Dablam, with nights at Camp 1 and Camp 2 before the summit push.",
        "Fixing of Island Peak's headwall, and our share of fixing and maintaining Ama Dablam's route including the Yellow Tower, the Grey Tower and the Mushroom Ridge.",
        "Base camp solar power for charging and a satellite weather forecast throughout the Ama Dablam period.",
        "A puja ceremony at Ama Dablam base camp before the team goes onto the mountain.",
        "Three reserve days held for the Ama Dablam summit, and one for Island Peak.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment for the Ama Dablam half — harness, crampons, ice axe, belay device, ascender and screwgates — which climbers must bring rather than rent.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or an early descent from either mountain.",
    },
    gearRentalDays: 12,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 35-day trip climbing Island Peak (6,189 m) as preparation and then Ama Dablam (6,812 m) by its south-west ridge, with a full expedition base camp, two rotations, one Sherpa per climber and three reserve days on the big peak.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full tented accommodation on both peaks, three meals a day throughout, both NMA climbing permits and the park fees, an expedition leader with Sherpa support rising to one per climber on Ama Dablam, cook crews at both base camps, all group climbing equipment, rope fixing, two rotations and the training days are included, while international flights, visa, mountaineering insurance, personal technical equipment, personal gear, city meals, summit bonus and tips are not.",
    bestTime: "Oct-Nov, Apr-May",
    meta: {
      title: "Ama Dablam Expedition and Island Peak Climbing — 35 Days | Green Compass Treks",
      description:
        "Climb Island Peak (6,189 m) as preparation and then Ama Dablam (6,812 m) by the south-west ridge. 35 days with two rotations, one Sherpa per climber and three reserve days on the big peak.",
      keywords:
        "ama dablam and island peak, ama dablam with island peak, ama dablam preparation climb, two peak expedition khumbu, ama dablam yellow tower",
      tags: "Ama Dablam, Island Peak, Everest Region, Expedition, Two Peaks, Technical Climb",
    },
  },
  days: [
    ...withPlan(khumbuApproachDays("thirty-five day"), "thirty-five day"),
    withPlan([CHHUKUNG_DAY], "thirty-five day")[0],
    ...withPlan(ISLAND_STAGE, "thirty-five day"),
    {
      title: "Trek from Island Peak Base Camp (5,087 m) to Ama Dablam Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp on grassy moraine below the south-west ridge of Ama Dablam.",
      ...AMA_DABLAM_BC,
      html: p(
        "The link between the warm-up peak and the objective. Camp comes down and the group descends the moraine to <strong>Chhukung</strong> and on down the Imja valley to <strong>Dingboche</strong>, losing height fast.",
        "From Dingboche the trail contours west and then climbs onto the moraine shelf beneath the mountain, on a path used by nobody but expedition teams and their yaks.",
        "<strong>Ama Dablam Base Camp (4,600 m)</strong> is one of the pleasanter base camps in the Himalaya — grassy rather than rocky, sheltered, with running water and a full view of the route from the mess tent door. Camp is established properly today, because this is home for the next eighteen days. Around 7 hours. Overnight at base camp.",
      ),
    },
    // The Ama Dablam half is the standard expedition from the puja onward:
    // training, two rotations, the summit push, three reserve days and the walk out.
    ...amaDablamExpedition.days.slice(9, 30),
  ],
};
