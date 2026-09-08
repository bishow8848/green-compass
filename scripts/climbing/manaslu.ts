import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  BESISAHAR, BIMTHANG, CHAME, DENG, DHARAMSALA, HIMLUNG, HIMLUNG_BC, JAGAT, KANG_GURU,
  KANG_GURU_BC, KOTO, KYANG, LARKYA_LA, LARKYA_PEAK, LHO, MACHHA_KHOLA, MANASLU, MANASLU_BC,
  MEDA, NAMRUNG, NAR, PHU, SAMAGAON, SAMDO, SAMDO_PEAK, SOTI_KHOLA,
} from "./places";

/**
 * The Manaslu region: the mountain itself, the two acclimatisation peaks above
 * Samagaon and Samdo, and the Peri Himal summits over the ridge in Nar Phu.
 *
 * Two approaches. Manaslu, Samdo Peak and Larkya Peak are reached up the Budhi
 * Gandaki on the Manaslu Circuit trail — a week of walking from the road head
 * at Machha Khola through a gorge that climbs from subtropical rice terraces to
 * Tibetan villages at 3,500 m. Himlung Himal and Kang Guru are reached from the
 * other side, up the Marsyangdi to Koto and then north into the restricted Nar
 * Phu valleys.
 */

// Camp positions on Kang Guru, placed on the route line above base camp.
const KANG_GURU_C1 = { lng: 84.3333, lat: 28.6917 }; // approx
const KANG_GURU_C2 = { lng: 84.34, lat: 28.6867 }; // approx
const KANG_GURU_HIGH_CAMP = { lng: 84.3433, lat: 28.6833 }; // approx

const MANASLU_PERMITS =
  "Manaslu Restricted Area Permit, Manaslu Conservation Area Permit, and Annapurna Conservation Area Permit for the Larkya La exit";

const NAR_PHU_PERMITS =
  "Nar Phu Restricted Area Permit and Annapurna Conservation Area Permit";

const MANASLU_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

/**
 * The Budhi Gandaki approach, shared by Manaslu, Samdo Peak and Larkya Peak:
 * arrival, the Kathmandu working days, the drive to the road head, and a week
 * of walking up the gorge to Samagaon with its acclimatisation day. Ten days,
 * climbing 2,600 m from rice terraces to a Tibetan village under an 8,000 m
 * peak, and the restricted-area permit means a licensed guide throughout.
 */
function budhiGandakiApproach(planWord: string, ministryDay: boolean): ClimbDay[] {
  const kathmandu: ClimbDay[] = [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Unpack and lay out your equipment tonight — it is inspected tomorrow, and Kathmandu is the last place anything can be replaced.",
        "Your leader calls at the hotel in the evening to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the restricted-area permits are issued and the equipment is checked.",
      ...KATHMANDU,
      html: p(
        `A full working day. Your leader takes the ${planWord} plan apart stage by stage — the approach up the Budhi Gandaki, base camp, the acclimatisation, the summit and the reserve days — and then goes through the route itself.`,
        "The <strong>equipment inspection</strong> covers boots, crampons, harness, ascender, belay device, screwgates and down clothing, item by item. Anything missing or unsuitable is bought or hired here today.",
        "Our office lodges the <strong>Manaslu Restricted Area Permit</strong> and the conservation permits, which require your passport, photographs and a licensed guide named on the paperwork. Overnight in Kathmandu.",
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
            "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched to the road head, where porters and pack animals take it up the gorge.",
            "The afternoon is free, and it is the last one with hot water and restaurants for six weeks. Overnight in Kathmandu.",
          ),
        },
      ]
    : [];

  const trail: ClimbDay[] = [
    {
      title: "Drive from Kathmandu (1,400 m) to Machha Khola (930 m)",
      elevation: "930 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki, at the road head for the Manaslu Circuit.",
      ...MACHHA_KHOLA,
      html: p(
        "West out of the Kathmandu valley on the <strong>Prithvi Highway</strong>, then north at Dhading Besi onto a rough hill road that follows the <strong>Budhi Gandaki</strong> upstream.",
        "The tarmac gives out at Arughat and the last three hours are a jeep road cut into the gorge wall — slow, dusty and spectacular, with the river a long way below.",
        "<strong>Machha Khola (930 m)</strong> is a strip of lodges beside the river at the road head. It is subtropical, hot and green, and about as far from an 8,000 m peak as Nepal gets. Around 8 to 9 hours. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Trek from Machha Khola (930 m) to Jagat (1,340 m)",
      elevation: "1,340 m",
      accommodation: "Jagat",
      placeDescription: "A stone-paved village in the Budhi Gandaki gorge, where the restricted area begins.",
      ...JAGAT,
      html: p(
        "The walking starts. The trail follows the <strong>Budhi Gandaki</strong> north through a deepening gorge, crossing and re-crossing the river on suspension bridges and traversing sections cut into the cliff.",
        "It is warm, humid work through rice terraces, millet and bamboo, past the hot springs at Tatopani and the village of Dobhan.",
        "<strong>Jagat (1,340 m)</strong> is a compact village of stone-paved streets and slate roofs, and the checkpoint where the <strong>Manaslu Restricted Area</strong> begins — permits are checked here and a licensed guide is required from this point. Around 6 hours. Overnight at Jagat.",
      ),
    },
    {
      title: "Trek from Jagat (1,340 m) to Deng (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Deng",
      placeDescription: "A small village in the upper Budhi Gandaki gorge, where the valley turns Tibetan.",
      ...DENG,
      html: p(
        "North up the gorge, which narrows sharply above Jagat and stays narrow. The trail climbs and drops repeatedly on staircases cut into the rock, crossing the river on high bridges.",
        "Somewhere around Philim the country begins to change: the rice gives out, pine appears, and the first mani walls and chortens stand beside the trail.",
        "<strong>Deng (1,860 m)</strong> is a handful of houses on a shelf above the river, and the first village that feels Tibetan rather than Nepali hill country. Around 6 to 7 hours. Overnight at Deng.",
      ),
    },
    {
      title: "Trek from Deng (1,860 m) to Namrung (2,630 m)",
      elevation: "2,630 m",
      accommodation: "Namrung",
      placeDescription: "A Tibetan village behind a stone gateway, where the upper Nubri valley begins.",
      ...NAMRUNG,
      html: p(
        "Steadily up the gorge through pine and fir, past mani walls with carved stones stacked by generations of villagers, and across the river several more times.",
        "The gorge finally opens above Ghap, and the walking gets easier as the valley widens into the <strong>Nubri</strong>.",
        "<strong>Namrung (2,630 m)</strong> sits behind a stone gateway — a genuine entrance arch to the upper valley — and is the first village of the Nubri proper. The houses are Tibetan, the language is Tibetan, and Manaslu appears ahead for the first time. Around 6 to 7 hours. Overnight at Namrung.",
      ),
    },
    {
      title: "Trek from Namrung (2,630 m) to Lho (3,180 m)",
      elevation: "3,180 m",
      accommodation: "Lho",
      placeDescription: "A Tibetan village with a hilltop gompa facing the north face of Manaslu.",
      ...LHO,
      html: p(
        "Up through barley fields and pine forest to <strong>Lihi</strong> and <strong>Sho</strong>, villages of flat-roofed stone houses with prayer flags on every roof and yaks in the lanes.",
        "The valley opens further and the mountains come out: <strong>Manaslu</strong> ahead, Ganesh Himal behind, and the Naike and Larkya peaks beginning to show.",
        "<strong>Lho (3,180 m)</strong> is one of the finest village positions in Nepal. The <strong>Ribung Gompa</strong> stands on a bluff above it looking straight up the valley at the north face of Manaslu, and the sunset from its courtyard is the reason most people remember the place. Around 4 to 5 hours. Overnight at Lho.",
      ),
    },
    {
      title: "Trek from Lho (3,180 m) to Samagaon (3,530 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The largest village in the Nubri valley, a Tibetan settlement below Manaslu Base Camp.",
      ...SAMAGAON,
      html: p(
        "A short day with the mountain in front of you the whole way. The trail climbs through <strong>Shyala</strong>, a village in a bowl with Manaslu, Ngadi Chuli and Himal Chuli around it, and then contours to Samagaon.",
        "<strong>Samagaon (3,530 m)</strong> is the largest village in the Nubri — several hundred flat-roofed stone houses, a big gompa, potato fields and a great many yaks. The people here are Tibetan by origin and the border is a day's walk north.",
        "It is also the base for everything above: Manaslu Base Camp, Birendra Tal and the Pungyen Gompa are all within a day. Around 4 hours. Overnight at Samagaon.",
      ),
    },
    {
      title: "Acclimatisation Day at Samagaon (3,530 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The Tibetan village below Manaslu, where the acclimatisation walk is made.",
      ...SAMAGAON,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Pungyen Gompa (4,000 m)</strong> on a shelf east of the village, a steep climb of an hour and a half with a full view of Manaslu's glaciers.",
        "The gompa is named for the mountain's Tibetan protector deity and was destroyed twice — most famously after the 1953 Japanese expedition, when villagers blamed the climbers for an avalanche that killed eighteen people and rebuilt it a third time.",
        "The alternative is <strong>Birendra Tal</strong>, the glacial lake below the base camp trail, which is gentler and equally worth the walk. Back in Samagaon for the afternoon. Around 4 hours. Overnight at Samagaon.",
      ),
    },
  ];

  return [...kathmandu, ...ministry, ...trail];
}


/**
 * The Nar Phu approach, shared by Himlung Himal and Kang Guru: arrival, the
 * Kathmandu working days, the jeep up the Marsyangdi to Koto, and three days
 * north into one of the least-visited restricted valleys in Nepal. Nine days,
 * ending at the medieval village of Phu with an acclimatisation day.
 */
function narPhuApproach(planWord: string): ClimbDay[] {
  return [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Unpack and lay out your equipment tonight — it is inspected tomorrow, and Kathmandu is the last place anything can be replaced.",
        "Your leader calls at the hotel in the evening to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the restricted-area permits are issued and the equipment is checked.",
      ...KATHMANDU,
      html: p(
        `A full working day. Your leader takes the ${planWord} plan apart stage by stage — the drive to Koto, the walk into Nar Phu, base camp, the rotations, the summit and the reserve days — and then goes through the route itself.`,
        "The <strong>equipment inspection</strong> covers boots, crampons, harness, ascender, belay device, screwgates and down clothing, item by item. Anything missing or unsuitable is bought or hired here today.",
        "Our office lodges the <strong>Nar Phu Restricted Area Permit</strong> and the conservation permit, which require your passport, photographs and a licensed guide named on the paperwork. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the royalty permit is issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the royalty permit is issued, the regulations are read out and the waste-management deposit is registered.",
        "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched toward Besisahar, where jeeps and then pack animals take it up the Marsyangdi and into Nar Phu.",
        "The afternoon is free, and it is the last one with hot water and restaurants for a month. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Dharapani (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Dharapani",
      placeDescription: "A village at the junction of the Marsyangdi and Dudh Khola, on the road up to Manang.",
      lng: 84.3428,
      lat: 28.5225,
      html: p(
        "A long day on the road. The <strong>Prithvi Highway</strong> runs west out of the Kathmandu valley beside the Trishuli, and at Mugling the route turns north for <strong>Besisahar</strong>.",
        "From Besisahar the tarmac ends and a jeep takes over, grinding up the <strong>Marsyangdi</strong> gorge on a rough road cut into the valley wall — spectacular, slow and not for anyone who dislikes exposure on a road.",
        "<strong>Dharapani (1,860 m)</strong> sits at the junction with the Dudh Khola, where the Manaslu Circuit comes in from the east. Around 9 to 10 hours. Overnight at Dharapani.",
      ),
    },
    {
      title: "Drive from Dharapani (1,860 m) to Koto (2,600 m)",
      elevation: "2,600 m",
      accommodation: "Koto",
      placeDescription: "A village on the Annapurna Circuit at the mouth of the Nar Phu valley, where the restricted area begins.",
      ...KOTO,
      html: p(
        "A short and rough drive up the Marsyangdi through Bagarchhap and Danaque to <strong>Chame</strong>, the district headquarters, and on to Koto.",
        "The valley climbs into blue pine and the air cools noticeably. Manaslu shows behind to the east as the road turns.",
        "<strong>Koto (2,600 m)</strong> is an ordinary Circuit village with one unusual feature: a police check post beside a bridge over the Nar Khola, and beyond it the entrance to the <strong>Nar Phu restricted area</strong>. Permits are checked here and from tomorrow the trail carries almost nobody. Around 3 hours. Overnight at Koto.",
      ),
    },
    {
      title: "Trek from Koto (2,600 m) to Meta (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Meta",
      placeDescription: "A summer settlement on a shelf above the Nar Khola gorge, the first village of the restricted valley.",
      ...MEDA,
      html: p(
        "North across the bridge and into the <strong>Nar Khola gorge</strong>, which within an hour becomes one of the most dramatic pieces of trail in Nepal — a narrow slot with the river a long way below, the path cut into the rock and crossing on bridges hung between cliffs.",
        "The gorge is forested with pine and juniper and there is nobody in it. Nar Phu was closed to foreigners until 2002 and still takes a restricted-area permit and a licensed guide.",
        "<strong>Meta (3,560 m)</strong> is a summer settlement on a shelf where the gorge finally opens out, with the first chortens and the first view north to the Peri Himal. Around 7 to 8 hours. Overnight at Meta.",
      ),
    },
    {
      title: "Trek from Meta (3,560 m) to Kyang (3,820 m)",
      elevation: "3,820 m",
      accommodation: "Kyang",
      placeDescription: "A cluster of ruined winter houses on the high shelf above the Phu Khola.",
      ...KYANG,
      html: p(
        "A short day north along the high shelf on the eastern side of the valley, with the country turning dry and Tibetan and the trees giving out.",
        "The trail passes <strong>Chyakhu</strong> and the ruins at Junam, old winter settlements now mostly abandoned, and the erosion pillars and cave dwellings that make this valley look unlike anywhere else in Nepal.",
        "<strong>Kyang (3,820 m)</strong> is a scatter of stone winter houses used by the Phu villagers for their herds, mostly empty. It is the quietest night of the approach. Around 4 to 5 hours. Overnight at Kyang.",
      ),
    },
    {
      title: "Trek from Kyang (3,820 m) to Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A medieval Tibetan village on a rock spur at the head of the Nar Phu valley.",
      ...PHU,
      html: p(
        "North up the Phu Khola through a landscape of eroded pillars, canyon walls and abandoned forts, on a trail that carries perhaps a few hundred foreigners a year.",
        "The valley opens at the top and <strong>Phu (4,080 m)</strong> appears: a village of stacked flat-roofed houses built on and into a rock spur, with a ruined dzong above it and the <strong>Tashi Lhakhang Gompa</strong> — one of the most important in the region — on a rise beyond.",
        "It is a genuinely medieval place, Tibetan in language and architecture, and it was closed to outsiders within living memory. Around 5 hours. Overnight at Phu.",
      ),
    },
    {
      title: "Acclimatisation Day at Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "The medieval Tibetan village at the head of Nar Phu, where the acclimatisation walk is made.",
      ...PHU,
      html: p(
        "Climb high, sleep low. The morning walk goes up the ridge behind the village toward <strong>4,700 m</strong>, on open ground with the Peri Himal opening out to the north.",
        "From the high point the whole head of the valley is visible — Himlung, Nemjung, Gyaji Kang and Cheo Himal — with the Tibetan border a few kilometres beyond them.",
        "The afternoon is free for the village and the <strong>Tashi Lhakhang Gompa</strong>, and for the last conversations with anyone before base camp. Your leader takes the first saturation readings tonight. Around 5 hours. Overnight at Phu.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const manasluExpedition: Climb = {
  region: "Manaslu Region",
  price: 26000,
  difficulty: "extreme",
  maxAltitude: 8163,
  grade: "PD+ at extreme altitude",
  expedition: true,
  royalty: true,
  center: [84.6, 28.58],
  zoom: 10,
  content: {
    slug: "manaslu-expedition",
    title: "Manaslu Expedition",
    overview:
      "<p><strong>Manaslu (8,163 m)</strong> is the eighth-highest mountain on earth and the one most climbers choose as their first 8,000 m peak. The reason is the route: the north-east face is the <strong>least technical of any 8,000 m normal route in Nepal</strong>, a long glacier plod with a short steep section below Camp 3 and a broad summit slope, graded around <strong>PD+</strong>. What it asks for is altitude tolerance rather than technique.</p><p>It was first climbed in <strong>1956 by Toshio Imanishi and Gyalzen Norbu</strong>, and its Sanskrit name — <em>manasa</em>, intellect or soul — is usually rendered as <em>mountain of the spirit</em>. The approach is one of the best trekking weeks in Nepal, up the Budhi Gandaki gorge from subtropical rice terraces to the Tibetan village of <strong>Samagaon</strong>. It is also, honestly, the mountain where the true summit matters: a great many people stop at the fore-summit, and we climb for the real one.</p>",
    highlights: [
      ["Summit Manaslu (8,163 m)", "The eighth-highest mountain on earth, and the most approachable of Nepal's 8,000 m normal routes."],
      ["The True Summit", "We climb for the genuine top, not the fore-summit a great many parties stop at."],
      ["The Budhi Gandaki Approach", "A week up one of the finest gorges in Nepal, from rice terraces to Tibetan villages under an 8,000 m peak."],
      ["Two Full Acclimatisation Rotations", "Camp 1, Camp 2 and a Camp 3 touch before the summit push is even considered."],
      ["A Dedicated 1:1 Climbing Sherpa", "One high-altitude Sherpa per client from base camp to the summit, carrying his own oxygen."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>September to October</strong>. Manaslu is unusual among the 8,000 m peaks in being primarily an <strong>autumn mountain</strong> — the route is fixed post-monsoon, the teams are on it in September, and the summit windows fall between late September and mid-October.</p><p>That timing is one of its practical attractions: it does not compete with the spring Everest season, and a climber can do Everest in May and Manaslu in September of the same year. Spring ascents happen and are rare, with an unfixed route and fewer teams. The trade-off in autumn is <strong>fresh monsoon snow</strong> on the upper mountain, which is the main cause of avalanche risk between Camp 2 and Camp 3.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Around <strong>PD+</strong>, and genuinely the most straightforward 8,000 m normal route in Nepal. From <strong>base camp (4,800 m)</strong> the route crosses a crevassed glacier and climbs to <strong>Camp 1 (5,700 m)</strong>, then continues over broken glacier ground to <strong>Camp 2 (6,400 m)</strong>.</p><p>The one steep section comes between Camp 2 and <strong>Camp 3 (6,800 m)</strong> — an ice slope at 45 to 50 degrees on fixed rope. Above it the angle eases to <strong>Camp 4 (7,400 m)</strong> and then a long, broad summit slope leads to the <strong>fore-summit</strong> and, beyond a short exposed crest, the <strong>true summit at 8,163 m</strong>. Ten to fourteen hours from Camp 4 on oxygen.</p>",
      },
      {
        heading: "The True Summit",
        content:
          "<p>Manaslu has a problem that is unique among the 8,000 m peaks and worth understanding before you book. The final ridge runs from a broad <strong>fore-summit at around 8,125 m</strong> to a narrow, corniced <strong>true summit</strong> perhaps twenty minutes further on, and for many years a large proportion of claimed ascents stopped at the fore-summit.</p><p>Since 2021 the distinction has been documented and enforced by summit certification, and the crest between the two is genuinely exposed — narrow, corniced, and taken one at a time. <strong>We climb for the true summit</strong>, our Sherpas fix the crest, and your certificate states which point you reached. If a party is late or the crest is unsafe, your leader will turn you round at the fore-summit and say so plainly.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>five 4-litre bottles of supplementary oxygen</strong> per climber, a <strong>Summit mask and regulator</strong>, and a dedicated <strong>climbing Sherpa carrying his own oxygen</strong> from base camp to the summit. Bottles are used from Camp 3 upward, and extras can be added at booking and are refunded in full if unused.</p><p>The principal hazard is <strong>avalanche between Camp 2 and Camp 3</strong> after fresh snow, and it has caused the mountain's worst accidents. It is managed by timing, by not moving after heavy falls, and by keeping the number of passages to what the rotation plan needs. Base camp holds a <strong>Gamow bag, medical kit, emergency oxygen and a doctor</strong>, and our leader's authority to stop the expedition is absolute.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>An <strong>8,000 m down suit</strong>, <strong>triple boots</strong> rated for 8,000 m, technical crampons, a lightweight ice axe, a <strong>-40°C sleeping bag</strong>, two insulated mats, expedition mitts and a spare pair, a face mask, category 4 glacier glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>The approach also needs proper trekking kit for a week of humid gorge walking, and the monsoon tail in early September means <strong>real waterproofs and leech precautions</strong> on the lower trail. We supply all group ropes, anchors, camp equipment and the oxygen system; <strong>climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Is Manaslu a good first 8,000 m peak?", answer: "It is the one most climbers choose, and with reason. The route is the least technical of any 8,000 m normal route in Nepal, the autumn season does not clash with Everest in spring, and the permit and logistics cost considerably less. What it does not do is make 8,163 m easy — the altitude is the same regardless of the angle." },
      { question: "What is the fore-summit problem?", answer: "The final ridge runs from a broad fore-summit at around 8,125 m to a narrow corniced true summit twenty minutes further on. For years a large share of claimed ascents stopped at the first. Since 2021 the distinction is documented and enforced. We climb for the true summit and your certificate says which one you reached." },
      { question: "How much oxygen is included?", answer: "Five 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. That covers a normal ascent from Camp 3 with margin. Extra bottles can be added at booking and are refunded in full if unused." },
      { question: "What is the main hazard?", answer: "Avalanche on the slopes between Camp 2 and Camp 3 after fresh snow, which has caused the mountain's worst accidents. It is managed by timing, by not moving on the mountain after heavy falls, and by minimising the number of passages through that ground. It is the reason the rotation plan looks the way it does." },
      { question: "Can I climb Everest in spring and Manaslu in autumn?", answer: "Yes, and a good number of climbers do exactly that — the seasons do not overlap and the acclimatisation from one carries something into the other, though not as much as people hope after four months at sea level. It is a demanding year and it is entirely feasible." },
      { question: "What is the summit success rate?", answer: "High by 8,000 m standards — around 70 to 80 percent of our climbers who begin the summit push reach the true summit in a normal season. The gentle route and the reliable autumn windows are both reasons. Avalanche conditions closing the mountain is the main cause of a lost season." },
      { question: "How long is the approach?", answer: "Seven days of walking from the road head at Machha Khola to Samagaon, and another day to base camp. It is one of the best trekking weeks in Nepal — the Budhi Gandaki gorge from rice terraces to Tibetan villages — and it does the acclimatisation work before any climbing starts." },
      { question: "Do you fly clients to base camp?", answer: "No. Helicopters are used for cargo where sensible and for medical evacuation, but the walk in is the acclimatisation and skipping it produces climbers who feel ill at 4,800 m. Several operators now fly clients in; we think it is a false economy." },
      { question: "What are the permits and why is a guide compulsory?", answer: "Manaslu sits in a restricted area, so a Manaslu Restricted Area Permit is required in addition to the Department of Tourism royalty and two conservation permits, and a licensed guide must be named on the paperwork with a minimum of two trekkers. All of it is included and handled by our office." },
      { question: "What happens to the walk out?", answer: "The expedition exits over the <strong>Larkya La (5,106 m)</strong> to Bimthang and down the Marsyangdi to Dharapani, which is a far better finish than retracing the gorge and completes the Manaslu Circuit. It adds three days of superb walking to the end of the trip." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Machha Khola at the start of the expedition.",
        "Private jeep transport from Dharapani to Besisahar and onward to Kathmandu at the end.",
      ],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,800 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed Camp 1 (5,700 m), Camp 2 (6,400 m), Camp 3 (6,800 m) and Camp 4 (7,400 m).",
      permits: `Department of Tourism Manaslu climbing royalty and permit, ${MANASLU_PERMITS}.`,
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber from base camp to the summit, carrying his own oxygen, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Five 4-litre bottles of supplementary oxygen per climber, with a Summit mask and regulator, used from Camp 3 upward.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day and high-altitude food and fuel at every camp above.",
        "Fixed-rope and glacier training at base camp before the first rotation.",
        "Two full acclimatisation rotations, and a recovery descent to Samagaon.",
        "Our share of route fixing, including the crest between the fore-summit and the true summit.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power, a Gamow hyperbaric bag, an expedition doctor and a full medical kit.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "The Larkya La exit to Bimthang and Dharapani at the end of the expedition.",
        "Porter, yak and helicopter cargo transport of all expedition equipment to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew, cook staff and porters.",
      extra: [
        "Personal technical equipment — down suit, boots, harness, crampons, axe, ascender, belay device and screwgates.",
        "Additional oxygen bottles beyond the five included, refundable in full if unused.",
        "Personal satellite communication devices and airtime.",
        "Helicopter transfers taken for personal convenience rather than medical necessity.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for avalanche conditions, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 47-day expedition on Manaslu (8,163 m) by the north-east face, approached up the Budhi Gandaki, with two acclimatisation rotations, a dedicated 1:1 Sherpa, five bottles of oxygen, four reserve days and a Larkya La exit.",
    inExDescription:
      "Jeep transport to the road head and back from Dharapani, Kathmandu hotel nights, teahouse and full expedition camp accommodation at every camp, three meals a day throughout, the Department of Tourism royalty, restricted area and conservation permits, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, five bottles of oxygen with mask and regulator, route fixing, a base camp doctor, satellite forecasts and the Larkya La exit are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonus and tips are not.",
    bestTime: "Sep-Oct",
    meta: {
      title: "Manaslu Expedition (8,163 m) — 47 Days, Eighth Highest | Green Compass Treks",
      description:
        "Climb Manaslu (8,163 m), the most approachable of Nepal's 8,000 m normal routes and the usual first 8,000 m peak. 47 days with two rotations, a dedicated 1:1 Sherpa, five bottles of oxygen and the true summit.",
      keywords:
        "manaslu expedition, manaslu 8163m, first 8000m peak, manaslu true summit, manaslu climbing cost, budhi gandaki, larkya la",
      tags: "Manaslu, Manaslu Region, 8000m Expedition, True Summit, Oxygen, Budhi Gandaki",
    },
  },
  days: [
    ...budhiGandakiApproach("forty-seven day", true),
    {
      title: "Trek from Samagaon (3,530 m) to Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp on the moraine above Birendra Tal, beneath the north-east face.",
      ...MANASLU_BC,
      html: p(
        "North-west out of Samagaon past <strong>Birendra Tal</strong>, the milky glacial lake below the mountain, and then up the moraine on a steep switchbacked trail.",
        "It is a hard day — 1,270 m with a personal load — and the last two hours cross boulder ground with the glacier on your right and the north-east face filling the sky ahead.",
        "<strong>Manaslu Base Camp (4,800 m)</strong> is established today on the moraine shelf: individual tents, a heated dining tent, kitchen, storage, communications, toilet and shower tents. Home for the next five weeks. Around 6 to 7 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (4,800 m) – Settling In and Systems Check",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, where the team settles into the routine of the next five weeks.",
      ...MANASLU_BC,
      html: p(
        "A day of low effort and a great deal of quiet organisation. Sleeping tents are set up properly, the mess and kitchen routine established, and the charging, water, toilet and radio arrangements explained.",
        "Your leader runs the <strong>oxygen systems check</strong> at altitude — mask, regulator and hose fitted to your own face and hood, with flow rates and the changeover drill walked through.",
        "The afternoon is spent walking gently on the moraine. After a week of walking up from the road head, two easy days here are what the body needs before anything begins. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before anyone goes onto the glacier.",
      ...MANASLU_BC,
      html: p(
        "The <strong>puja</strong>. A lama comes up from Samagaon, a stone chorten is built, juniper is burned, and every piece of climbing equipment on the expedition — axes, crampons, harnesses, boots, oxygen masks — is stacked at the altar to be blessed.",
        "On this mountain the ceremony carries particular weight. The <strong>Pungyen Gompa</strong> below in Samagaon was destroyed by villagers after the 1953 Japanese expedition, when an avalanche killed eighteen people and the climbers were blamed for offending the mountain's protector deity. The relationship between expeditions and the Nubri has been carefully tended ever since.",
        "Prayer flags go up across the camp, rice is thrown, and it finishes with chang. Overnight at base camp.",
      ),
    },
    {
      title: "Glacier and Fixed-Rope Training Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, where rope and crevasse technique is drilled on the glacier.",
      ...MANASLU_BC,
      html: p(
        "A full working day on the glacier below camp. Every climber works through <strong>roped team travel with correct spacing, crevasse rescue with a hauling system, ladder crossings, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Crevasse work gets the most time, because the ground between base camp and Camp 2 is broken glacier and the route weaves through it with ladders in places.",
        "Your leader watches each climber individually and keeps anyone who needs it back for the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, on the rest day before the first rotation.",
      ...MANASLU_BC,
      html: p(
        "A genuine rest day before the first rotation. Eating, drinking and sleeping, with a short walk on the moraine in the afternoon and nothing more.",
        "The Sherpa team and the route-fixing crews from the expeditions on the mountain are working above, establishing and stocking Camp 1 and Camp 2 and pushing the line toward Camp 3.",
        "Loads for the rotation are packed and weighed in the evening, and the departure time is set for around four in the morning. Overnight at base camp.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,700 m on the glacier shelf above base camp.",
      lng: 84.5806,
      lat: 28.5719,
      html: p(
        "Out of camp before dawn and onto the <strong>crevassed glacier</strong>, roped and on marked line, weaving between open holes and across two or three ladder crossings.",
        "Four to six hours of steady work with a personal load brings the team onto the shelf where <strong>Camp 1 (5,700 m)</strong> stands.",
        "The camp sits on the glacier with the north-east face rising above and the whole Nubri valley falling away behind. It is the first night on the mountain and most people sleep badly. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 2 (6,400 m) and Return to Camp 1",
      elevation: "6,400 m",
      accommodation: "Camp 1",
      placeDescription: "Camp 2 at 6,400 m on the upper glacier, touched on the first acclimatisation rotation.",
      lng: 84.5722,
      lat: 28.5661,
      html: p(
        "Up the glacier on broken ground — seracs, crevasses and fixed line — for four to five hours to <strong>Camp 2 (6,400 m)</strong>.",
        "The team touches the camp, spends an hour there and descends to Camp 1 for the night. This rotation is about the height reached rather than the night spent, and it keeps the number of loads carried through the broken ground to a minimum.",
        "It is also the first honest look at how each climber moves on this glacier, and your leader watches closely. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Descend from Camp 1 (5,700 m) to Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the first rotation.",
      ...MANASLU_BC,
      html: p(
        "Down the glacier in the cold of the morning, three to four hours, moving before the sun softens the snow bridges and the ladder crossings become unpleasant.",
        "The first rotation is complete: the team has slept at 5,700 m and touched 6,400 m, and everybody now knows what this glacier involves and how their own body responded to a night on it.",
        "<strong>Base camp (4,800 m)</strong> by mid-morning, with a hot meal, a wash and the prospect of three days of doing very little. Your leader takes saturation and pulse readings on arrival and again in the evening. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the first rotation.",
      ...MANASLU_BC,
      html: p(
        "The first of three recovery days, and the hardest to spend well because the fatigue of a rotation arrives late — most people feel worse today than yesterday.",
        "The prescription is unglamorous: sleep, drink four to five litres, and eat considerably more than you want to.",
        "Your leader and the expedition doctor take saturation, pulse and weight readings and review them against the baseline. Anyone whose numbers are drifting gets a conversation rather than a schedule. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, on the second recovery day after the first rotation.",
      ...MANASLU_BC,
      html: p(
        "The second recovery day, and the one on which people start feeling human again. Base camp settles into its rhythm: breakfast late, cards and reading in the dining tent, a walk to another team's camp, dinner early.",
        "In autumn Manaslu base camp is one of the busier ones in Nepal — several hundred people across a dozen expeditions — and it is unexpectedly sociable.",
        "The <strong>Sherpa team is carrying loads and fixing rope</strong> toward Camp 3, and the evening weather briefing becomes a fixture from about now. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, on the last day before the second rotation.",
      ...MANASLU_BC,
      html: p(
        "The last day before the second rotation, spent on preparation. Personal loads are packed for four nights above base camp, crampons and harnesses checked after their first hard use, and boots dried.",
        "Your leader briefs the rotation: base camp to Camp 1, Camp 2 for a night, and then a climb up the steep section to touch <strong>Camp 3 at 6,800 m</strong> before returning.",
        "That steep section between Camp 2 and Camp 3 is the one piece of real climbing on the route and also the ground with the avalanche history, so the briefing covers both. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb from Base Camp (4,800 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier camp at 5,700 m, reoccupied for the second rotation.",
      lng: 84.5806,
      lat: 28.5719,
      html: p(
        "Back onto the glacier before dawn and noticeably faster than the first time — three to four hours for a crossing that took four to six, on a line the team now knows crevasse by crevasse.",
        "That improvement is the return on the first rotation and the rest days, and it is the clearest single sign that the acclimatisation is working as it should.",
        "<strong>Camp 1 (5,700 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings and the load split before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Second Rotation – Climb to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,400 m on the upper glacier of the north-east face.",
      lng: 84.5722,
      lat: 28.5661,
      html: p(
        "Four to five hours up the broken glacier to <strong>Camp 2 (6,400 m)</strong>, this time with loads and the intention to stay.",
        "The camp sits on the glacier beneath the steep section, and the view down the Nubri from it is one of the better ones on any 8,000 m peak.",
        "Sleeping at 6,400 m is the purpose of this rotation. Appetite falls off sharply at this altitude and forcing food down is work rather than pleasure. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Climb toward Camp 3 (6,800 m) and Return to Camp 2",
      elevation: "6,800 m",
      accommodation: "Camp 2",
      placeDescription: "Camp 3 at 6,800 m above the steep section, touched on the second rotation.",
      lng: 84.5678,
      lat: 28.5619,
      html: p(
        "The one steep day on the mountain. Above Camp 2 the route climbs an <strong>ice slope at 45 to 50 degrees</strong> on fixed rope — three to four hours of front-pointing that comes as a surprise to anyone who booked Manaslu because it is the easy 8,000er.",
        "This is also the ground with the avalanche history, and it is climbed early and left before the sun is on it.",
        "<strong>Camp 3 (6,800 m)</strong> sits above the slope. The team touches it, spends an hour there and descends to Camp 2. The height matters; the night does not. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (6,400 m) to Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the second rotation.",
      ...MANASLU_BC,
      html: p(
        "Down the glacier past Camp 1 to base camp in the cold of the morning — five to seven hours, and the last time on the mountain before the summit push.",
        "The acclimatisation programme is complete. The team has slept at 6,400 m and touched 6,800 m, and physiologically there is nothing more to be gained from going higher until the push.",
        "<strong>Base camp (4,800 m)</strong> by early afternoon, and the mood changes: the preparation is finished and everything from here waits on weather. Overnight at base camp.",
      ),
    },
    {
      title: "Recovery Descent from Base Camp (4,800 m) to Samagaon (3,530 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The Tibetan village below the mountain, used for mid-expedition recovery.",
      ...SAMAGAON,
      html: p(
        "Down the moraine past Birendra Tal to <strong>Samagaon (3,530 m)</strong>, losing 1,270 m in a morning and arriving somewhere with lodges, potato fields, yaks and thick air.",
        "This descent is one of the most valuable decisions in the plan. <strong>Recovery does not happen at 4,800 m.</strong> Three days in a village at 3,530 m, eating real food and sleeping properly, rebuilds a climber more effectively than a week of rest days on the moraine.",
        "There is also a bakery, a gompa and hot water, all of which register differently after three weeks. Around 4 hours. Overnight at Samagaon.",
      ),
    },
    {
      title: "Recovery Day at Samagaon (3,530 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The Tibetan village in the Nubri valley, where the team rests in thicker air.",
      ...SAMAGAON,
      html: p(
        "A day with nothing in it. Sleep late, eat everything on the menu, take a hot shower, and walk no further than the gompa.",
        "Most climbers regain a kilogram or two here and, more importantly, sleep properly for the first time in weeks. The improvement in appetite is usually obvious within a day.",
        "Meanwhile the Sherpa team is high on the mountain <strong>stocking Camp 3 and Camp 4</strong> with oxygen, tents, food and fuel — the heaviest work of the expedition, done by people who will then climb it again with you. Overnight at Samagaon.",
      ),
    },
    {
      title: "Return from Samagaon (3,530 m) to Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, reoccupied for the summit window.",
      ...MANASLU_BC,
      html: p(
        "Back up the moraine past Birendra Tal — the same ground as the walk in, done by a body that handles it very differently.",
        "Five to six hours, and it is a useful gauge: climbers who come up feeling strong are ready, and those who struggle are told so and given more time.",
        "<strong>Base camp (4,800 m)</strong> in the afternoon. From tonight the expedition is governed entirely by the forecast, and the evening weather briefing becomes the most attended event of the day. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, waiting on the forecast for a summit window.",
      ...MANASLU_BC,
      html: p(
        "The waiting starts, and on Manaslu it is usually shorter than on the spring 8,000 m peaks — autumn windows in late September and early October are more frequent, if not more generous.",
        "Days are spent eating, sleeping, walking gently on the moraine and visiting other camps. With a dozen expeditions in base camp the social life is better than on most mountains.",
        "The evening brings the <strong>specialist mountain forecast</strong> — wind at 8,000 m, temperature, precipitation and confidence — read out in the communications tent. On this mountain the precipitation number matters as much as the wind, because fresh snow closes the slope below Camp 3. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Briefing and Final Preparations at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, where the summit push is briefed in full.",
      ...MANASLU_BC,
      html: p(
        "The full <strong>summit briefing</strong>. Your leader sets out the schedule day by day, the pairings of climber and Sherpa, the radio times, the oxygen changeovers, and the <strong>turnaround time on summit day</strong>.",
        "A significant part of it is the <strong>true summit</strong>: what the crest beyond the fore-summit involves, how it is fixed, how long it takes, and the conditions under which your leader will stop the team at the fore-summit instead. That conversation happens here, in daylight, rather than at 8,125 m.",
        "The Sherpa team confirms Camp 4 is stocked and the route is fixed to the true summit. Nothing begins until both are true. Overnight at base camp.",
      ),
    },
    {
      title: "Final Weather Wait at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, on the last day before the summit push departs.",
      ...MANASLU_BC,
      html: p(
        "The last day at base camp before the push, and by now the forecast has firmed up enough to commit. Loads are packed for five nights above base camp, down suits unpacked and checked, and boots warmed.",
        "The critical question is the snow on the slope between Camp 2 and Camp 3: if there has been recent fall, the push waits regardless of how clear the sky is.",
        "Dinner is early and the camp is quiet. Departure onto the glacier is set for around four in the morning. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,800 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier camp at 5,700 m, on the first night of the summit push.",
      lng: 84.5806,
      lat: 28.5719,
      html: p(
        "Onto the glacier before dawn for the last time on the way up, and through it in three hours on ground the team now knows step by step.",
        "Loads are light: everything above is already stocked, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,700 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. From here the expedition moves upward every day until it summits or turns back. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,700 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "The camp at 6,400 m on the upper glacier, on the second night of the summit push.",
      lng: 84.5722,
      lat: 28.5661,
      html: p(
        "Four hours or so up the broken glacier and the fixed line to <strong>Camp 2 (6,400 m)</strong>, arriving by late morning with the ladders and the serac ground behind you for the day.",
        "The afternoon is spent lying down, melting snow and forcing fluid and food. Appetite at 6,400 m is poor and it does not improve anywhere above here, so what goes down today matters more than it feels like it should.",
        "The steep section is directly overhead, and the whole camp spends some part of the evening looking at it and at the sky. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,400 m) to Camp 3 (6,800 m)",
      elevation: "6,800 m",
      accommodation: "Camp 3",
      placeDescription: "A tented camp at 6,800 m above the steep section of the north-east face.",
      lng: 84.5678,
      lat: 28.5619,
      html: p(
        "The one steep day of the push, and it starts early because the slope has to be climbed and cleared before the sun is on it.",
        "Three to four hours of <strong>45 to 50 degree ice</strong> on fixed rope brings the team to <strong>Camp 3 (6,800 m)</strong>, and above the ground that has caused this mountain's worst accidents.",
        "This is the first night on <strong>supplementary oxygen</strong>, at a low sleeping flow, and the difference it makes to the night and to the following morning is considerable. Overnight at Camp 3.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 4 (7,400 m)",
      elevation: "7,400 m",
      accommodation: "Camp 4",
      placeDescription: "The highest camp at 7,400 m on the broad upper slopes of Manaslu.",
      lng: 84.5642,
      lat: 28.5561,
      html: p(
        "On oxygen from the moment you leave the tent. The angle eases above Camp 3 and the route climbs broad snow slopes for four to five hours to <strong>Camp 4 (7,400 m)</strong>, arriving by late morning.",
        "The camp sits on an open shoulder with an enormous view — Himlung and the Peri Himal north, Ganesh Himal east, and the Annapurnas across the Larkya La to the west.",
        "You are in the <strong>Death Zone</strong>, where the body degrades rather than adapts. Nobody sleeps. Oxygen, melted snow, forced fluid, and waiting for the departure time. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Manaslu (8,163 m) and Descend to Camp 2 (6,400 m)",
      elevation: "8,163 m",
      accommodation: "Camp 2",
      placeDescription: "The 8,163 m true summit of Manaslu, beyond the corniced crest past the fore-summit.",
      ...MANASLU,
      html: p(
        "Leaving Camp 4 between eleven at night and one in the morning, on oxygen, at around -30°C. The route climbs long broad snow slopes on fixed rope — never steep, never technical, and utterly relentless in the dark.",
        "The angle eases near the top and the <strong>fore-summit (about 8,125 m)</strong> arrives as a broad platform where the ground stops rising. A great many claimed ascents of Manaslu have stopped here.",
        "The <strong>true summit</strong> is twenty minutes further along a <strong>narrow corniced crest</strong>, fixed by our Sherpas and taken one at a time. It is genuinely exposed and it is the only technical ground on the whole route. From the top at <strong>8,163 m</strong> the view runs north into Tibet, east to Ganesh and Langtang, and west across the Larkya La to Himlung and the Annapurnas.",
        "Then down: the slopes, Camp 4, Camp 3 and the steep section, to Camp 2 if the reserves allow. Fourteen to eighteen hours of movement. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,400 m) to Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the summit push.",
      ...MANASLU_BC,
      html: p(
        "Down the glacier past Camp 1 to base camp in the cold of the morning, five to seven hours on legs that have very little left.",
        "The team goes carefully. More people are hurt coming down a mountain than going up it, and the crevassed ground below Camp 1 is no place for a party that has stopped concentrating.",
        "<strong>Base camp (4,800 m)</strong>, and walking off the moraine into camp at the end of an 8,000 m summit push is a moment most climbers remember more clearly than the summit. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The first of four contingency days, held for a second summit window.",
      ...MANASLU_BC,
      html: p(
        "The first of four reserve days. Manaslu's autumn windows are more frequent than the spring peaks' but they are still weather, and a team with days in hand has a second attempt where a team without has a flight home.",
        "If a second push is on, the Sherpa team re-stocks Camp 4 and the climbers rest here today. Your leader assesses each climber honestly.",
        "If the mountain has been climbed, the day is for eating and sleeping and beginning to feel normal. Most climbers lose six to ten kilograms on a Manaslu expedition. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...MANASLU_BC,
      html: p(
        "The second reserve day. If a second attempt is running, the team is at Camp 2 or Camp 3 tonight rather than here.",
        "If the mountain has been climbed, the camps above begin to come down. Camp 4, Camp 3 and Camp 2 are stripped by the Sherpa team, and every bottle, tent and rope comes off the mountain.",
        "The Department of Tourism deposit is refunded against what comes down, and on a mountain with a dozen expeditions on it each season the clear-up matters. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day at Manaslu Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The third contingency day, held at base camp for a late summit window.",
      ...MANASLU_BC,
      html: p(
        "The third reserve day, and in a season with a late window this is often the summit day itself.",
        "If a second push is underway, the team is high on the mountain and base camp is a radio watch.",
        "If not, the day is spent in the limbo of an expedition that is finished but not yet over: eating, sleeping, and watching the weather that did not come good. Overnight at base camp.",
      ),
    },
    {
      title: "Fourth Reserve Day and Break Camp at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Manaslu Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the north-east face.",
      ...MANASLU_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. Base camp comes down today: tents struck, barrels packed and weighed, and loads made up for the porters and yaks.",
        "The <strong>waste management</strong> is completed — human waste carried out in barrels, oxygen bottles counted back in, and the site cleared to the condition it was found in.",
        "The chorten from the puja stays with its prayer flags. A last look at the north-east face, and then the walk out, which on this expedition is a three-day crossing of the Larkya La rather than a retracing. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Manaslu Base Camp (4,800 m) to Samdo (3,875 m)",
      elevation: "3,875 m",
      accommodation: "Samdo",
      placeDescription: "The highest permanent village in the Nubri, a Tibetan settlement below the Larkya La.",
      ...SAMDO,
      html: p(
        "Down the moraine to Samagaon and then north-west up the Budhi Gandaki, which above the village is a wide brown valley of grazing land rather than a gorge.",
        "<strong>Samdo (3,875 m)</strong> is the highest permanent village in the Nubri, founded by Tibetan refugees in the 1960s and still trading over the Lajyang La with Tibet a day's walk north.",
        "It is a strange, spare, entirely Tibetan place, and after five weeks under the mountain it is the first sign that the expedition has become a trek. Around 6 to 7 hours. Overnight at Samdo.",
      ),
    },
    {
      title: "Trek from Samdo (3,875 m) to Dharamsala (4,460 m)",
      elevation: "4,460 m",
      accommodation: "Dharamsala",
      placeDescription: "A basic lodge camp below the Larkya La, the last stop before the pass.",
      ...DHARAMSALA,
      html: p(
        "A short day up the valley to the foot of the pass, climbing gently across open moraine and grazing ground with blue sheep frequently visible on the slopes.",
        "<strong>Dharamsala (4,460 m)</strong> — also called Larkya Phedi — is two basic stone buildings and a scatter of tents in a bleak spot beneath the pass. There is nothing here and there is not meant to be.",
        "Everyone eats early and sleeps early, because the Larkya La is crossed in the dark to beat the wind that gets up on it by mid-morning. Around 4 hours. Overnight at Dharamsala.",
      ),
    },
    {
      title: "Cross the Larkya La (5,106 m) and Descend to Bimthang (3,590 m)",
      elevation: "5,106 m",
      accommodation: "Bimthang",
      placeDescription: "A meadow of pasture and moraine on the western side of the Larkya La, below Manaslu's west face.",
      ...BIMTHANG,
      html: p(
        "Away by four in the morning by headlamp. The climb to the <strong>Larkya La (5,106 m)</strong> takes four to five hours across moraine and old snow, past frozen tarns, on a long gradual rise rather than a steep pull.",
        "The pass is a broad saddle hung with prayer flags, and the view west is one of the great ones in Nepal: <strong>Himlung, Cheo Himal, Gyaji Kang, Kang Guru and Annapurna II</strong>, with the whole Marsyangdi system falling away below.",
        "The descent is long and steep on moraine and scree, losing 1,500 m to <strong>Bimthang (3,590 m)</strong> — a meadow of grass and pine below Manaslu's west face, and after five weeks above the treeline it is a startling amount of green. Seven to nine hours. Overnight at Bimthang.",
      ),
    },
    {
      title: "Trek from Bimthang (3,590 m) to Dharapani (1,860 m) and Drive to Besisahar",
      elevation: "1,860 m",
      accommodation: "Besisahar",
      placeDescription: "The town at the foot of the Marsyangdi, and the end of the walking.",
      ...BESISAHAR,
      html: p(
        "The last walking day, and it is all downhill — steeply through rhododendron and pine forest along the Dudh Khola, past Karche and Goa, losing 1,700 m.",
        "The forest is the first proper one since the Budhi Gandaki and it is full of birds and warmth and the smell of resin.",
        "<strong>Dharapani (1,860 m)</strong> joins the Annapurna Circuit and the road head, where jeeps take over for the rough drive down the Marsyangdi to <strong>Besisahar</strong>. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Overnight at Besisahar.",
      ),
    },
    {
      title: "Drive from Besisahar to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A straightforward day on the highway. The road follows the Marsyangdi down to Dumre and then joins the <strong>Prithvi Highway</strong> east along the Trishuli to the Kathmandu valley, through terraced hills and roadside towns.",
        "Six to seven hours with a lunch stop at a riverside restaurant, and it is the first stretch of tarmac since the drive in. The change of pace after weeks on foot takes most people a while to adjust to.",
        "Back in <strong>Kathmandu</strong> in the afternoon. The expedition reports to the Department of Tourism, the waste deposit is reconciled, and the <strong>summit certificate</strong> — naming the true summit — is issued and presented in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu, though most people at this point want a chair and a coffee more than a temple.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Manaslu is the mountain most climbers use as the door into 8,000 m climbing, and Everest, Lhotse and Makalu are the three our returning Manaslu climbers ask about most.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const samdoPeakClimbing: Climb = {
  region: "Manaslu Region",
  price: 3650,
  difficulty: "challenging",
  maxAltitude: 6335,
  grade: "PD",
  center: [84.62, 28.66],
  zoom: 11,
  content: {
    slug: "samdo-peak-climbing",
    title: "Samdo Peak Climbing",
    overview:
      "<p><strong>Samdo Peak (6,335 m)</strong> — also called Samdo Ri — rises directly above the highest permanent village in the Nubri valley, a Tibetan settlement founded by refugees in the 1960s a day's walk from the border. It is a straightforward snow climb graded <strong>PD</strong>, and it gives what is probably the finest summit view on the Manaslu Circuit: <strong>Manaslu, Himal Chuli, Ngadi Chuli, Cheo Himal and Himlung</strong>, with the brown Tibetan plateau running north.</p><p>The trip is the <strong>Manaslu Circuit with a 6,000 m summit in the middle of it</strong>. You walk a week up the Budhi Gandaki gorge from subtropical rice terraces to Tibetan villages, climb the peak from a camp above Samdo, and then cross the <strong>Larkya La (5,106 m)</strong> and descend to the Marsyangdi — one of the great trekking circuits in Nepal, with a real climb built into the acclimatisation.</p>",
    highlights: [
      ["Summit Samdo Peak (6,335 m)", "A straightforward PD snow climb above the highest village in the Nubri valley."],
      ["The Manaslu Circuit", "A week up the Budhi Gandaki gorge and out over the Larkya La — one of the great trekking circuits in Nepal."],
      ["A Tibetan Border Village", "Samdo was founded by refugees in the 1960s and still trades over the Lajyang La a day's walk north."],
      ["Manaslu, Himlung and the Plateau", "A summit panorama across four 7,000 m and 8,000 m peaks and into Tibet."],
      ["Cross the Larkya La (5,106 m)", "Walk out over one of the finest passes in Nepal to Bimthang and the Marsyangdi."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. The Manaslu Circuit is at its best in October — clear, stable and cold, with the Larkya La in good condition and the whole range visible — and that is the strongest month for the peak as well.</p><p>Spring is warmer and hazier, with rhododendron in flower in the lower gorge and more snow on the summit slope. The <strong>Larkya La</strong> is the constraint at the edges of both seasons: it closes after heavy snow and is a serious proposition in winter. The monsoon makes the lower gorge unpleasant and leech-ridden, and the restricted area sees very few trekkers then.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD</strong>, and among the more approachable 6,000 m peaks in Nepal. From <strong>high camp at 5,500 m</strong> the route crosses a short and lightly crevassed glacier roped as a team, then climbs a <strong>snow slope of 35 to 40 degrees</strong> for two to three hours with a short fixed section on the steeper ground.</p><p>The summit is a broad snow crest rather than a knife edge, which makes it suitable for a first climb — there is no exposure problem waiting at the top. Summit day runs <strong>seven to ten hours</strong> from high camp, starting around three in the morning. The Larkya La two days later, at 5,106 m, is comfortable on a body that has just been to 6,335 m.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required. Previous multi-day trekking above 4,000 m is, and the training day at base camp teaches crampons, ice axe, jumar, abseil and rope-team travel from the beginning.</p><p>The acclimatisation is unusually good because the Circuit does the work: seven days walking up from 930 m, an acclimatisation day at <strong>Samagaon (3,530 m)</strong> with the climb to the Pungyen Gompa, and another at <strong>Samdo (3,875 m)</strong> before base camp. By the time you reach 4,900 m you have been walking for ten days and have already been above 4,500 m twice.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the Circuit and none of the climbing, and many travel policies exclude roped glacier travel and fixed-rope use by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The Nubri valley is remote — Samagaon is five days' walk from the road head — and while helicopters reach Samagaon and Samdo routinely in clear weather, they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Four-season boots that take a semi-automatic crampon</strong> are sufficient for this peak, which is a genuine saving on a first climb; double boots are recommended but not essential. Add a <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, gloves and liner gloves, a warm hat, a buff, category 4 glacier glasses, gaiters, a headlamp and factor 50 sunscreen.</p><p>The lower gorge is humid and warm for the first three days, so bring proper waterproofs and, in spring, expect leeches. We provide all group climbing equipment and our Sherpas fix the steep section. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "Is Samdo Peak a good first 6,000 m climb?", answer: "Yes, and it is underrated for it. A short glacier, a 35 to 40 degree slope, a brief fixed section and a broad summit crest, reached after ten days of walking that do all the acclimatisation. It is comparable to Chulu Far East in difficulty and considerably quieter." },
      { question: "Do we walk the whole Manaslu Circuit?", answer: "Effectively yes — Machha Khola to Samagaon and Samdo up the Budhi Gandaki, then the Larkya La to Bimthang and down the Dudh Khola to Dharapani. It is the standard Circuit with the climb inserted at its high point, and the peak costs three extra days." },
      { question: "Why is a guide compulsory here?", answer: "Manaslu is a restricted area. A Manaslu Restricted Area Permit is required, it names a licensed guide, and it needs a minimum of two trekkers. This has kept the valley far quieter than the Annapurna and Everest regions, which is a large part of its appeal." },
      { question: "What is Samdo village like?", answer: "The highest permanent settlement in the Nubri at 3,875 m, founded by Tibetan refugees in the 1960s, and still trading over the Lajyang La with Tibet a day's walk north. Flat-roofed stone houses, yaks, barley, and a way of life that has very little to do with the rest of Nepal." },
      { question: "What is the summit success rate?", answer: "Around 80 to 85 percent on our departures. The gentle grade and the long acclimatisation profile both contribute, and wind on the summit crest is the main reason for the turn-backs there are." },
      { question: "How hard is the Larkya La after the climb?", answer: "Straightforward. It is a long day — a gradual 650 m climb to 5,106 m and then a 1,500 m descent — but on a body that has just summited at 6,335 m it is a walk. It is also one of the finest pass days in Nepal, with Himlung, Cheo Himal and Kang Guru laid out to the west." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,900 m in the valley north of Samdo, and high camp at 5,500 m below the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There are no lodges above Samdo." },
      { question: "Can Samdo Peak and Larkya Peak be combined?", answer: "Yes, and it is a natural two-peak trip since both are climbed from the upper Budhi Gandaki within a few days of each other. It adds about four days. We build it to order rather than selling it off the shelf." },
      { question: "How busy is the Manaslu Circuit?", answer: "Far quieter than Annapurna or Everest — the restricted area permit and the guide requirement keep numbers down, and in a season the whole Circuit sees a fraction of what Namche does in a week. Above Samdo, on the peak itself, you will almost certainly be alone." },
      { question: "Is there mobile signal and charging?", answer: "NTC covers most of the Nubri including Samagaon and Samdo, patchily. Lodges sell charging for a few hundred rupees. Base camp and high camp have neither, so carry a power bank. There are no ATMs anywhere in the valley — bring cash from Kathmandu." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Machha Khola at the start of the trip.",
        "Private jeep transport from Dharapani to Besisahar and onward to Kathmandu at the end.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Samdo Peak base camp (4,900 m) and high camp (5,500 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Samdo Peak, ${MANASLU_PERMITS}.`,
      sherpa: MANASLU_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the steep section below the summit by our climbing Sherpas.",
        "Porter and yak transport of group climbing equipment and camp gear from Samdo to base camp.",
        "The Larkya La crossing and the descent to Bimthang and Dharapani at the end of the trip.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 17,
    gearRentalDays: 15,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 21-day itinerary climbing Samdo Peak (6,335 m) above the highest village in the Nubri, walked as the Manaslu Circuit — up the Budhi Gandaki gorge and out over the Larkya La to the Marsyangdi.",
    inExDescription:
      "Jeep transport to the road head and back from Dharapani, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit, restricted area and conservation permits, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Samdo Peak Climbing (6,335 m) — 21 Days | Green Compass Treks",
      description:
        "Climb Samdo Peak (6,335 m) above the highest village in the Nubri valley, on the Manaslu Circuit. 21 days with a PD snow route, full Circuit acclimatisation and the Larkya La crossing to finish.",
      keywords:
        "samdo peak climbing, samdo ri, manaslu circuit peak climbing, 6000m peak nepal, larkya la, samdo peak cost",
      tags: "Samdo Peak, Manaslu Region, Peak Climbing, 6000m Peak, Manaslu Circuit, Larkya La",
    },
  },
  days: [
    ...budhiGandakiApproach("twenty-one day", false),
    {
      title: "Trek from Samagaon (3,530 m) to Samdo (3,875 m)",
      elevation: "3,875 m",
      accommodation: "Samdo",
      placeDescription: "The highest permanent village in the Nubri, a Tibetan settlement founded by refugees in the 1960s.",
      ...SAMDO,
      html: p(
        "North-west up the Budhi Gandaki, which above Samagaon stops being a gorge and becomes a wide brown valley of grazing land with the river braiding across it.",
        "The walking is easy and the scale is enormous. Manaslu is behind, the Larkya peaks ahead, and the Tibetan border is a day north over the Lajyang La.",
        "<strong>Samdo (3,875 m)</strong> is the highest permanent village in the Nubri — flat-roofed stone houses, barley terraces, yaks and a way of life that still involves trading over the border. Around 4 hours. Overnight at Samdo.",
      ),
    },
    {
      title: "Acclimatisation Day at Samdo (3,875 m)",
      elevation: "3,875 m",
      accommodation: "Samdo",
      placeDescription: "The Tibetan border village below the peak, where the second acclimatisation walk is made.",
      ...SAMDO,
      html: p(
        "Climb high, sleep low. The morning walk goes north up the valley toward the <strong>Lajyang La</strong>, the old trading pass into Tibet, gaining 600 m to around 4,500 m before turning back.",
        "It is open, brown, wind-scoured country with blue sheep on the slopes and, from the high point, a view straight into Tibet — the plateau visible as a different colour of landscape entirely.",
        "Back in Samdo for the afternoon. Your guide takes saturation readings this evening and the crew sorts the loads for base camp. Around 4 to 5 hours. Overnight at Samdo.",
      ),
    },
    {
      title: "Trek from Samdo (3,875 m) to Samdo Peak Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Samdo Peak Base Camp",
      placeDescription: "A tented camp on the moraine north of Samdo, below the glacier of Samdo Peak.",
      lng: 84.6244,
      lat: 28.6733,
      html: p(
        "North-east out of the village on a yak trail that leaves the Circuit within twenty minutes and climbs into the side valley below the peak.",
        "The path works up through grazing land and then onto moraine, gaining a thousand metres, with the glacier appearing at the head of the valley.",
        "<strong>Samdo Peak Base Camp (4,900 m)</strong> is a tented camp on flat ground below the moraine crest, with <strong>Manaslu</strong> filling the southern horizon behind you and Tibet over the ridge to the north. Around 4 to 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Samdo Peak Base Camp",
      placeDescription: "The base camp below the glacier, where the climbing skills are taught before the summit push.",
      lng: 84.6244,
      lat: 28.6733,
      html: p(
        "The training day, and on a first climb it is the most useful day of the trip. On the glacier ice above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team, ascending fixed line on a jumar, and abseiling</strong>.",
        "None of it is difficult on flat ground in daylight, which is exactly why it is done here rather than at three in the morning on the slope.",
        "In the afternoon we walk part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>fixing the steep section below the summit</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,900 m) to Samdo Peak High Camp (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Samdo Peak High Camp",
      placeDescription: "A tented camp on the moraine at 5,500 m, at the edge of the glacier.",
      lng: 84.6206,
      lat: 28.6797,
      html: p(
        "A short morning up the moraine, gaining 600 m in three hours with a light load while the crew moves the camp.",
        "<strong>High camp (5,500 m)</strong> sits on rubble at the lip of the glacier, exposed to the wind that comes down off the plateau every afternoon and cold as soon as the sun goes.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Samdo Peak (6,335 m) and Descend to Base Camp (4,900 m)",
      elevation: "6,335 m",
      accommodation: "Samdo Peak Base Camp",
      placeDescription: "The 6,335 m summit of Samdo Peak, above the Nubri valley and the Tibetan border.",
      ...SAMDO_PEAK,
      html: p(
        "Roped and moving by three in the morning. The <strong>glacier</strong> crossing takes under an hour on a marked line, weaving past a few open crevasses in the dark.",
        "Then the <strong>snow slope</strong>: 35 to 40 degrees, climbed steadily for two to three hours as the sky lightens over Ganesh Himal, with a <strong>short fixed section</strong> on the steeper ground near the top.",
        "The <strong>summit (6,335 m)</strong> is a broad snow crest with room to stand about on. <strong>Manaslu</strong> fills the south at close range with Himal Chuli and Ngadi Chuli beyond it, <strong>Cheo Himal, Himlung and Kang Guru</strong> stand to the west across the Larkya La, and to the north the brown Tibetan plateau runs to the horizon.",
        "The descent reverses the slope and the glacier to high camp and then base camp. Eight to eleven hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Samdo Peak Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Samdo Peak Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      lng: 84.6244,
      lat: 28.6733,
      html: p(
        "The day held in reserve. Wind off the plateau is the usual reason a Samdo attempt is turned back, and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group walks back to <strong>Samdo</strong>, resting properly in a lodge before the Larkya La. Overnight at base camp or Samdo.",
      ),
    },
    ...manasluExpedition.days.slice(42, 47).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given.",
          "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given.",
        )
        .replace(
          "The expedition reports to the Department of Tourism, the waste deposit is reconciled, and the <strong>summit certificate</strong> — naming the true summit — is issued and presented in the evening.",
          "Your <strong>summit certificate</strong> is presented over dinner in the evening.",
        )
        .replace(
          "The expedition ends today.",
          "The trip ends today.",
        )
        .replace(
          "Manaslu is the mountain most climbers use as the door into 8,000 m climbing, and Everest, Lhotse and Makalu are the three our returning Manaslu climbers ask about most.",
          "Larkya Peak on the far side of the pass and Himlung Himal over the ridge in Nar Phu are the two our returning Samdo climbers most often ask about.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const larkyaPeakClimbing: Climb = {
  region: "Manaslu Region",
  price: 3750,
  difficulty: "challenging",
  maxAltitude: 6249,
  grade: "PD+",
  center: [84.54, 28.68],
  zoom: 11,
  content: {
    slug: "larkya-peak-climbing",
    title: "Larkya Peak Climbing",
    overview:
      "<p><strong>Larkya Peak (6,249 m)</strong> stands directly above the <strong>Larkya La</strong>, the 5,106 m pass that every Manaslu Circuit trekker crosses on the way from the Nubri to the Marsyangdi. Thousands of people walk beneath it each season and almost nobody climbs it, which is a shame — it is a clean snow and ice route graded <strong>PD+</strong>, and its summit is the single best viewpoint of the crossing.</p><p>The trip is the <strong>Manaslu Circuit with a 6,000 m summit at its high point</strong>. A week up the Budhi Gandaki gorge from subtropical rice terraces to the Tibetan villages of Samagaon and Samdo, a base camp beneath the pass, the climb, and then the Larkya La itself and the long descent to Bimthang and the Marsyangdi. From the top: <strong>Manaslu, Himlung, Cheo Himal, Kang Guru and Annapurna II</strong>, with the pass a thin line of prayer flags a thousand metres below.</p>",
    highlights: [
      ["Summit Larkya Peak (6,249 m)", "A clean PD+ snow and ice route directly above the Larkya La, climbed by almost nobody."],
      ["The Manaslu Circuit", "A week up the Budhi Gandaki gorge and out over the pass — one of the great trekking circuits in Nepal."],
      ["The Best View of the Crossing", "Manaslu, Himlung, Cheo Himal, Kang Guru and Annapurna II from a summit above the pass."],
      ["Two Tibetan Villages", "Acclimatise at Samagaon and Samdo, the highest permanent settlements in the Nubri valley."],
      ["Cross the Larkya La (5,106 m)", "Walk out over the pass itself the day after standing a thousand metres above it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. <strong>October</strong> is the strongest month — clear, stable and cold, with the Larkya La reliably open and the whole western panorama visible from the summit.</p><p>Spring is warmer and hazier, with more snow on the route and rhododendron in flower in the lower gorge. Because both the peak and the pass sit at the head of the same valley, the <strong>Larkya La is the binding constraint</strong>: after heavy snow it closes and the trip becomes an out-and-back down the Budhi Gandaki. We build a reserve day in and your guide will reroute rather than cross a loaded pass.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD+</strong>, a step above Samdo Peak on the other side of the valley. From <strong>high camp at 5,600 m</strong> the route crosses a crevassed glacier roped as a team and then climbs a <strong>snow and ice slope of 40 to 45 degrees</strong> on fixed rope for two to three hours.</p><p>The summit is reached along a <strong>short exposed crest</strong>, taken one at a time, which is what makes it PD+ rather than PD. Summit day runs <strong>eight to eleven hours</strong> from high camp, starting around two in the morning. The Larkya La the following day, at 5,106 m, is a walk by comparison — and looking up at your own summit from the prayer flags on the pass is one of the better moments of the trip.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required, though previous multi-day trekking above 4,000 m is. The training day at base camp covers crampons, ice axe, jumar, abseil and rope-team travel from the beginning, with extra time on moving one at a time on an exposed crest.</p><p>The acclimatisation is excellent because the Circuit does the work: seven days walking up from 930 m, an acclimatisation day at <strong>Samagaon (3,530 m)</strong> with the climb to the Pungyen Gompa, another at <strong>Samdo (3,875 m)</strong>, and then two nights at base camp at 4,900 m. By the time you reach the high camp you have been walking for eleven days.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the Circuit and none of the climbing, and many travel policies exclude roped glacier travel and fixed-rope use by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The head of the Nubri is remote — Samdo is six days' walk from the road head — and while helicopters reach Samdo and Dharamsala routinely in clear weather, they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the Circuit. A <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>The head of the Nubri is <strong>very windy</strong> and the base camp is fully exposed to it, so a proper windproof shell matters more here than the down layer. The lower gorge is humid for three days and needs waterproofs. We provide all group climbing equipment and our Sherpas fix the slope and the crest. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "How does Larkya Peak compare with Samdo Peak?", answer: "A step harder and 86 m lower. Samdo Peak is a PD snow slope to a broad crest; Larkya Peak adds a crevassed glacier, a slightly steeper slope and a short exposed summit crest. If it is your first climb, Samdo Peak is the gentler introduction; if you have climbed before, this is the better mountain." },
      { question: "Do we walk the whole Manaslu Circuit?", answer: "Effectively yes — Machha Khola to Samagaon and Samdo up the Budhi Gandaki, then the Larkya La to Bimthang and down the Dudh Khola to Dharapani. The climb is inserted at the high point of the Circuit and costs about four extra days." },
      { question: "Can you see the peak from the Larkya La?", answer: "It stands directly above the pass, and one of the pleasures of the trip is crossing the Larkya La the day after standing a thousand metres above it. Trekkers on the pass generally have no idea the peak is climbable, which is a fair summary of how quiet it is." },
      { question: "Why is a guide compulsory here?", answer: "Manaslu is a restricted area. A Manaslu Restricted Area Permit is required, it names a licensed guide, and it needs a minimum of two trekkers. That requirement has kept the valley far quieter than the Annapurna and Everest regions." },
      { question: "What happens if the Larkya La is closed?", answer: "The group retraces down the Budhi Gandaki to the road head, which adds three days and means the second half of the Circuit is lost. It happens after heavy snow, perhaps one season in five, and your guide makes the call at Dharamsala rather than on the pass." },
      { question: "What is the summit success rate?", answer: "Around 70 to 80 percent on our departures. Wind at the head of the Nubri is the commonest reason for turning back — the base camp and the summit crest are both fully exposed to it — which is why the itinerary carries a reserve day." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,900 m on the moraine above Dharamsala, and high camp at 5,600 m at the edge of the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There is nothing above Dharamsala but the pass." },
      { question: "How exposed is the summit crest?", answer: "Enough that it is climbed one at a time on rope, and enough that it is what makes the peak PD+ rather than PD. It is short — twenty minutes or so — and it is genuinely airy, with the pass a thousand metres below on one side." },
      { question: "Can Larkya Peak and Samdo Peak be combined?", answer: "Yes, and it is a natural two-peak trip since both are climbed from the upper Budhi Gandaki within a few days of each other, with Samdo Peak first as the warm-up. It adds about four days and we build it to order." },
      { question: "Is there mobile signal and charging?", answer: "NTC covers most of the Nubri including Samagaon and Samdo, patchily, and lodges sell charging for a few hundred rupees. Base camp, high camp and Dharamsala have neither, so carry a power bank. There are no ATMs in the valley — bring cash from Kathmandu." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Machha Khola at the start of the trip.",
        "Private jeep transport from Dharapani to Besisahar and onward to Kathmandu at the end.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Larkya Peak base camp (4,900 m) and high camp (5,600 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Larkya Peak, ${MANASLU_PERMITS}.`,
      sherpa: MANASLU_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent, abseil technique and moving one at a time on an exposed crest.",
        "Fixing of the ice slope and the summit crest by our climbing Sherpas.",
        "Porter and yak transport of group climbing equipment and camp gear from Samdo to base camp.",
        "The Larkya La crossing and the descent to Bimthang and Dharapani at the end of the trip.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a summit attempt abandoned for conditions, or a Larkya La closure that forces a retreat down the Budhi Gandaki.",
    },
    porterDays: 17,
    gearRentalDays: 15,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 21-day itinerary climbing Larkya Peak (6,249 m) directly above the Larkya La, walked as the Manaslu Circuit — up the Budhi Gandaki gorge and out over the pass to Bimthang and the Marsyangdi.",
    inExDescription:
      "Jeep transport to the road head and back from Dharapani, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit, restricted area and conservation permits, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a pass closure are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Larkya Peak Climbing (6,249 m) — 21 Days | Green Compass Treks",
      description:
        "Climb Larkya Peak (6,249 m) directly above the Larkya La on the Manaslu Circuit. 21 days with a PD+ snow and ice route, an exposed summit crest, full Circuit acclimatisation and the pass crossing to finish.",
      keywords:
        "larkya peak climbing, larkya peak 6249m, manaslu circuit peak climbing, larkya la, 6000m peak nepal, larkya peak cost",
      tags: "Larkya Peak, Manaslu Region, Peak Climbing, 6000m Peak, Manaslu Circuit, Larkya La",
    },
  },
  days: [
    ...samdoPeakClimbing.days.slice(0, 11).map((d) => ({
      ...d,
      html: d.html.replace("twenty-one day plan", "twenty-one day plan"),
    })),
    {
      title: "Trek from Samdo (3,875 m) to Dharamsala (4,460 m)",
      elevation: "4,460 m",
      accommodation: "Dharamsala",
      placeDescription: "A basic lodge camp below the Larkya La, at the foot of the peak.",
      ...DHARAMSALA,
      html: p(
        "West up the valley toward the pass, climbing gently across open moraine and grazing ground with blue sheep frequently visible on the slopes above the trail.",
        "<strong>Dharamsala (4,460 m)</strong> — also called Larkya Phedi — is two basic stone buildings and a scatter of tents in a bleak spot beneath the pass. There is nothing here and there is not meant to be.",
        "It is a short day by design. Above the camp, the peak that gives the pass its name rises to the north, and the route to it is visible from the door. Around 4 hours. Overnight at Dharamsala.",
      ),
    },
    {
      title: "Trek from Dharamsala (4,460 m) to Larkya Peak Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Larkya Peak Base Camp",
      placeDescription: "A tented camp on the moraine above Dharamsala, below the glacier of Larkya Peak.",
      lng: 84.5433,
      lat: 28.6803,
      html: p(
        "A short climb north off the Circuit trail and onto the moraine below the peak, gaining 440 m on rough boulder ground in two to three hours.",
        "<strong>Larkya Peak Base Camp (4,900 m)</strong> is a tented camp on flat ground beneath the glacier, and it is fully exposed to the wind that comes over the Larkya La every afternoon. Tents are guyed properly and weighted with rock.",
        "The afternoon is spent reading the route with your guide: the glacier, the ice slope above it, and the short crest that finishes the climb. Manaslu fills the sky to the east. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Larkya Peak Base Camp",
      placeDescription: "The base camp below the glacier, where the climbing skills are taught before the summit push.",
      lng: 84.5433,
      lat: 28.6803,
      html: p(
        "The training day. On the glacier ice above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team with correct spacing, ascending fixed line on a jumar, and abseiling</strong>.",
        "Extra time goes on <strong>moving one at a time on an exposed crest</strong>, because the last twenty minutes of this climb is exactly that and it is not a technique that can be improvised at 6,200 m.",
        "In the afternoon we walk part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>fixing the ice slope and the crest</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,900 m) to Larkya Peak High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Larkya Peak High Camp",
      placeDescription: "A tented camp on the moraine at 5,600 m, at the edge of the Larkya glacier.",
      lng: 84.5397,
      lat: 28.6844,
      html: p(
        "A steep morning up the moraine, gaining 700 m in three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,600 m)</strong> sits on rubble at the lip of the glacier, exposed and cold, with the Larkya La visible below to the south as a thin brown saddle.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Asleep by seven, in a wind that does not stop. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Larkya Peak (6,249 m) and Descend to Base Camp (4,900 m)",
      elevation: "6,249 m",
      accommodation: "Larkya Peak Base Camp",
      placeDescription: "The 6,249 m summit of Larkya Peak, directly above the Larkya La.",
      ...LARKYA_PEAK,
      html: p(
        "Roped and moving by two in the morning. The first hour or so crosses the <strong>crevassed glacier</strong> on the line the Sherpas marked yesterday, with the team spaced correctly and headlamps on.",
        "Then the <strong>ice slope</strong>: 40 to 45 degrees, climbed on fixed rope for two to three hours as the sky lightens over Manaslu, steepening near the top.",
        "The summit is reached along a <strong>short exposed crest</strong>, taken one at a time. From the <strong>summit (6,249 m)</strong>: <strong>Manaslu</strong> and Himal Chuli east, <strong>Himlung, Cheo Himal and Kang Guru</strong> north-west across the Peri Himal, <strong>Annapurna II</strong> south-west, and directly below, a thousand metres down, the thin line of prayer flags on the <strong>Larkya La</strong> that you cross tomorrow.",
        "The descent abseils the crest and the slope and reverses the glacier to high camp, then base camp. Nine to twelve hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Larkya Peak Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Larkya Peak Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      lng: 84.5433,
      lat: 28.6803,
      html: p(
        "The day held in reserve. Wind at the head of the Nubri is the usual reason a Larkya attempt is turned back — the summit crest is fully exposed to it — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group descends to <strong>Dharamsala</strong>, resting before the pass. Your guide checks the Larkya La conditions with the lodge keepers this evening. Overnight at base camp or Dharamsala.",
      ),
    },
    {
      title: "Cross the Larkya La (5,106 m) and Descend to Bimthang (3,590 m)",
      elevation: "5,106 m",
      accommodation: "Bimthang",
      placeDescription: "A meadow of pasture and moraine on the western side of the Larkya La, below Manaslu's west face.",
      ...BIMTHANG,
      html: p(
        "Away by four in the morning from Dharamsala. The climb to the <strong>Larkya La (5,106 m)</strong> takes four to five hours across moraine and old snow, past frozen tarns, on a long gradual rise rather than a steep pull.",
        "The pass is a broad saddle hung with prayer flags, and the peak you stood on two days ago rises a thousand metres directly above it — which makes this a very different crossing from the one the trekkers around you are having.",
        "The view west is one of the great ones in Nepal: <strong>Himlung, Cheo Himal, Gyaji Kang, Kang Guru and Annapurna II</strong>. Then a long steep descent, losing 1,500 m to <strong>Bimthang (3,590 m)</strong>, a meadow of grass and pine below Manaslu's west face. Seven to nine hours. Overnight at Bimthang.",
      ),
    },
    ...samdoPeakClimbing.days.slice(18, 21),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const himlungHimalExpedition: Climb = {
  region: "Manaslu Region",
  price: 18500,
  difficulty: "extreme",
  maxAltitude: 7126,
  grade: "AD",
  expedition: true,
  royalty: true,
  center: [84.36, 28.76],
  zoom: 11,
  content: {
    slug: "himlung-himal-expedition",
    title: "Himlung Himal Expedition",
    overview:
      "<p><strong>Himlung Himal (7,126 m)</strong> is the 7,000 m peak most climbers use as the step to an 8,000 m one, and there are good reasons for that. The route is graded <strong>AD</strong> — a glacier, a long snow slope and a broad summit ridge, with fixed rope on the steeper ground and nothing technical enough to be a problem in itself. It was first climbed in <strong>1992 by a Japanese team</strong>, and it has become the standard 7,000 m proving ground in Nepal.</p><p>The other reason is the approach. Himlung sits at the head of the <strong>Nar Phu</strong> valleys, a restricted area closed to outsiders until 2002, and the walk in goes through a gorge, past cave dwellings and eroded pillars, to the medieval Tibetan village of <strong>Phu</strong>. It is one of the strangest and least-visited approaches in Nepal, and the mountain at the end of it is a genuine 7,000 m expedition with a high success rate.</p>",
    highlights: [
      ["Summit Himlung Himal (7,126 m)", "The standard 7,000 m proving ground in Nepal, and the usual step before an 8,000 m peak."],
      ["The Nar Phu Valleys", "A restricted area closed to outsiders until 2002, with cave dwellings, erosion pillars and medieval Tibetan villages."],
      ["Phu Village (4,080 m)", "A stacked stone village on a rock spur with a ruined dzong above it and the Tashi Lhakhang Gompa beyond."],
      ["A High Success Rate", "An AD route with no technical crux, a good acclimatisation profile and three reserve days."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support above base camp on a genuine 7,000 m peak."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>September to October</strong>. Himlung is climbed in both seasons and autumn is marginally the more popular — the post-monsoon air is clearer, the snow better consolidated, and the Nar Phu valleys are at their best in October.</p><p>Nar Phu sits in a partial rain shadow behind the Annapurna and Peri Himal, so it is drier than the eastern Himalaya through both windows. Spring gives longer days and warmer camps. The practical constraint at the edges of either season is the <strong>Marsyangdi road</strong>, which is rough at the best of times and closes after heavy rain. The monsoon puts the approach out of use.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD</strong>, and deliberately unremarkable — that is what makes it good preparation. From <strong>base camp (4,900 m)</strong> the route crosses a glacier to <strong>Camp 1 at around 5,450 m</strong>, then climbs a long snow slope with fixed rope on the steeper sections to <strong>Camp 2 (6,000 m)</strong> and a <strong>high camp at 6,350 m</strong>.</p><p>Summit day follows a broad ridge with a <strong>steeper section of 45 degrees</strong> near the top and a final snow crest. Eight to twelve hours from high camp, climbed without supplementary oxygen. There is no crux and no serious objective hazard; what Himlung teaches is what a 7,000 m summit day actually feels like, which is the whole point of climbing it.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> — Island Peak, Mera, Chulu West or equivalent — and comfort on fixed rope and roped glacier travel. Alpine experience is welcome and not essential. This is a peak that suits a climber stepping up rather than one already at the top of their game.</p><p>The acclimatisation is generous: the walk in from Koto to Phu at 4,080 m with an acclimatisation day, two nights at base camp at 4,900 m, and a full rotation to Camp 1 before the summit push. It is the profile that produces Himlung's high success rate, and it is also the rhythm — base camp, rotations, weather waits — that an 8,000 m expedition assumes you already know.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>mountaineering to 7,500 m, including fixed-rope climbing, roped glacier travel and abseiling</strong>, is mandatory. Ordinary adventure travel cover does not qualify and we reject it. A national alpine club policy or a specialist mountaineering insurer is what this expedition needs, and we verify the wording before permits are issued.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Nar Phu is remote — Phu is four days' walk from the road head — and while helicopters reach Phu and base camp in clear weather, they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>Nar Phu is dry, bright and dusty on the approach, so a buff and glasses matter from the first day. We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Why is Himlung the standard 7,000 m preparation peak?", answer: "Because it teaches the right things without adding difficulties that get in the way. The route is AD with no crux, the acclimatisation profile is generous, and the expedition structure — base camp for a fortnight, a rotation, weather waits, climbing without oxygen at 7,000 m — is exactly what Manaslu or Everest assumes you already understand." },
      { question: "What is the summit success rate?", answer: "High for a 7,000 m peak — around 70 to 80 percent on our departures in a normal season. The absence of a technical crux and the good acclimatisation profile are both reasons. Wind on the summit ridge is the commonest cause of the turn-backs there are." },
      { question: "How does it compare with Baruntse?", answer: "Very similar in grade and height, and both are excellent 8,000 m preparation. Baruntse is more remote and has a longer, more exposed summit ridge; Himlung has a stranger and shorter approach and a slightly higher success rate. Climbers often choose on the approach rather than the climb." },
      { question: "What is Nar Phu like?", answer: "Unlike anywhere else in Nepal. A gorge with cave dwellings and erosion pillars, abandoned winter settlements, ruined forts, and two medieval Tibetan villages at the top. It was closed to foreigners until 2002 and still takes a restricted-area permit, so it carries a tiny fraction of the traffic of the Annapurna Circuit it branches off." },
      { question: "Is supplementary oxygen used?", answer: "No. Himlung is well within the range a fit acclimatised climber handles without it, and climbing a 7,000 m peak on your own lungs is a large part of why it is useful preparation. We carry emergency oxygen with masks and regulators at the high camp and base camp for medical use." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,450 m, Camp 2 at 6,000 m and a high camp at 6,350 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "Why is a guide compulsory?", answer: "Nar Phu is a restricted area. The permit names a licensed guide and requires a minimum of two trekkers, in addition to the Department of Tourism royalty and the conservation permit. All of it is included and handled by our office." },
      { question: "Can we visit Nar village as well as Phu?", answer: "Not on the standard itinerary, which goes up the Phu branch directly. Nar sits on the other arm of the valley and adds two days including the Kang La. We are glad to quote it as an extension and it is a good one — Nar is if anything the more striking of the two villages." },
      { question: "How remote is base camp?", answer: "Four days' walk from the road head at Koto, in a valley with two permanent villages in it. There is no signal above Phu, no resupply and no lodge. A helicopter can reach base camp in clear weather; nothing else can." },
      { question: "Is Himlung suitable straight after a 6,000 m trekking peak?", answer: "Yes, and that is the usual progression. A climber who has summited Island Peak, Mera or Chulu West and is fit and well acclimatised does well here. What changes is the length — a month rather than a fortnight — and the fact that you live at base camp rather than passing through it." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Koto via Besisahar and Dharapani.",
        "Private jeep transport from Koto to Besisahar and onward to Kathmandu at the end of the expedition.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,900 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,450 m), Camp 2 (6,000 m) and high camp (6,350 m).",
      permits: `Department of Tourism Himlung Himal climbing royalty and permit, ${NAR_PHU_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camp and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical training and assessment day at base camp on glacier travel, fixed-rope work and abseiling.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the snow slopes and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Koto and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice axe, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a road closure on the Marsyangdi, an attempt abandoned for conditions, or an early descent from the mountain.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 29-day expedition on Himlung Himal (7,126 m) at the head of the restricted Nar Phu valleys, with three camps above base, an acclimatisation rotation, one Sherpa per climber and three reserve days.",
    inExDescription:
      "Jeep transport to Koto and back, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty and the Nar Phu restricted area and conservation permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Sep-Oct",
    meta: {
      title: "Himlung Himal Expedition (7,126 m) — 29 Days | Green Compass Treks",
      description:
        "Climb Himlung Himal (7,126 m) in the restricted Nar Phu valleys, the standard 7,000 m step before an 8,000 m peak. 29 days with three camps, a rotation, one Sherpa per climber and a high success rate.",
      keywords:
        "himlung himal expedition, himlung 7126m, 7000m peak nepal, nar phu climbing, preparation for 8000m, himlung climbing cost, phu village",
      tags: "Himlung Himal, Manaslu Region, Expedition, 7000m Peak, Nar Phu, Peri Himal",
    },
  },
  days: [
    ...narPhuApproach("twenty-nine day"),
    {
      title: "Trek from Phu (4,080 m) to Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp on the moraine north of Phu, below the south-west face of Himlung.",
      ...HIMLUNG_BC,
      html: p(
        "North out of Phu on a herders' trail that leaves the village fields within twenty minutes and climbs into the empty upper valley.",
        "The ground is dry moraine and grazing land, brown and wind-scoured, with the Peri Himal opening ahead — <strong>Himlung, Nemjung, Gyaji Kang and Cheo Himal</strong> in a line along the Tibetan border.",
        "<strong>Himlung Base Camp (4,900 m)</strong> is established today: mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next three weeks, and the last building you have seen is four hours behind you. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...HIMLUNG_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Phu, a stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. In autumn there may be two or three other expeditions here, which makes Himlung base camp sociable by the standards of a restricted valley. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Assessment Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, where glacier and rope technique is checked before the rotation.",
      ...HIMLUNG_BC,
      html: p(
        "A full working day on the glacier below camp. Every climber works through <strong>roped team travel with correct spacing, crevasse rescue with a hauling system, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Rope-team travel gets the most attention because the ground between base camp and Camp 1 is crevassed glacier crossed in the dark on push mornings.",
        "Your leader is assessing as much as teaching, and anyone who needs more time gets the afternoon. Meanwhile the Sherpas are above, <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...HIMLUNG_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,300 m</strong> and back, on ground that asks nothing technical.",
        "From up there the whole route is legible — the glacier, the shelf where Camp 1 goes, the long snow slope above it and the broad summit ridge — and your leader spends an hour going through it with the team.",
        "Look north from the same spot and the <strong>Tibetan border</strong> is a few kilometres away over the Peri Himal, with the plateau visible beyond as a different colour of country entirely. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,450 m)",
      elevation: "5,450 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,450 m on the glacier shelf above base camp.",
      lng: 84.3639,
      lat: 28.7686,
      html: p(
        "The first time on the mountain. The route crosses the <strong>crevassed glacier</strong> roped and on marked line, weaving between open holes, and then climbs onto the shelf — four to five hours with a personal load.",
        "<strong>Camp 1 (5,450 m)</strong> sits on the glacier with the Nar Phu valley falling away south and the snow slope of the upper route rising directly above.",
        "The night here is the point of the exercise. Sleeping at 5,450 m before returning to base camp is what makes a summit push from 6,350 m realistic, and it lets your leader see how each climber performs on the route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,450 m) to Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...HIMLUNG_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, two to three hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,900 m than it would higher, and a rested team moves faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the slope above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...HIMLUNG_BC,
      html: p(
        "A genuine rest day. Eating past the point of appetite, four litres of fluid, an afternoon asleep, and staying off the legs.",
        "Equipment work fills the gaps: crampons checked and adjusted, harnesses inspected for wear after a day of jumaring, and boots dried in the thin dry sun of the upper valley.",
        "Your leader takes saturation and pulse readings and reviews them against the baseline from Phu. Anyone whose numbers are drifting gets a conversation rather than a schedule. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...HIMLUNG_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Personal kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the four-day sequence with timings for each stage.",
        "The Sherpa team reports on the state of the fixed ropes and the condition of the summit ridge, which is the information the go decision rests on.",
        "The satellite forecast arrives in the evening, and on this mountain the number that matters is the wind at 7,000 m. A <strong>hard turnaround time</strong> is set for summit day. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,900 m) to Camp 1 (5,450 m)",
      elevation: "5,450 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier shelf camp at 5,450 m, reoccupied for the summit push.",
      lng: 84.3639,
      lat: 28.7686,
      html: p(
        "The summit push begins, and the glacier goes faster the second time — three hours or so for a crossing that took four or five on the rotation, on a line the team now knows.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,450 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,450 m) to Camp 2 (6,000 m)",
      elevation: "6,000 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,000 m on the snow slope of the south-west face.",
      lng: 84.3736,
      lat: 28.7736,
      html: p(
        "Up the long snow slope above Camp 1 on fixed rope, four to five hours with a moderate load, the angle easing and steepening in turn but never becoming difficult.",
        "This is the section that teaches what a 7,000 m peak actually asks for: not technique but the ability to keep moving steadily for hours on ground that offers nothing to think about.",
        "<strong>Camp 2 (6,000 m)</strong> in the early afternoon, on a shelf cut into the slope. Melt snow, force fluid and food, and sleep as well as 6,000 m allows. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,000 m) to High Camp (6,350 m)",
      elevation: "6,350 m",
      accommodation: "High Camp",
      placeDescription: "A tented high camp at 6,350 m on the shoulder below the summit ridge.",
      lng: 84.3819,
      lat: 28.7772,
      html: p(
        "A deliberately short day — three hours or so up the slope to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,350 m)</strong> is a handful of tents on the shoulder, exposed to the wind and cold as soon as the sun goes.",
        "Dinner is early and minimal; appetite at 6,350 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Himlung Himal (7,126 m) and Descend to Camp 2 (6,000 m)",
      elevation: "7,126 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,126 m summit of Himlung Himal, on the Tibetan border at the head of Nar Phu.",
      ...HIMLUNG,
      html: p(
        "Moving by two in the morning, roped and on fixed line. The route climbs the shoulder and then the broad <strong>summit ridge</strong> — long, snowy and never technical, with a <strong>steeper section of around 45 degrees</strong> near the top that is the only real climbing on the mountain.",
        "It is a day about persistence rather than skill. The sun arrives somewhere around 6,800 m and the last stretch is a snow crest to the top.",
        "From the <strong>summit (7,126 m)</strong> the Tibetan plateau runs north from directly beneath your feet, <strong>Manaslu</strong> and Peak 29 stand east across the Larkya La, the <strong>Annapurnas</strong> fill the south-west, and Nemjung, Gyaji Kang and Cheo Himal run west along the border.",
        "The descent reverses the ridge and the slopes to high camp and then Camp 2. Ten to fourteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,000 m) to Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...HIMLUNG_BC,
      html: p(
        "Camp 2 comes down and the slope is descended on the fixed ropes, with the line stripped as the team goes — slow work and not optional, since nothing is left on the mountain.",
        "The glacier is crossed roped in the cold of the morning for the last time.",
        "<strong>Base camp (4,900 m)</strong> by early afternoon, with thick air by comparison, a hot meal and the first unbroken sleep in four days. Five to seven hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...HIMLUNG_BC,
      html: p(
        "The first of three reserve days. Himlung's weather is more settled than most 7,000 m peaks', but wind on the summit ridge still closes it, and a team with days in hand has a second attempt.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest — and for a good many climbers on this mountain it is also the first day of thinking seriously about an 8,000 m peak. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Himlung Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...HIMLUNG_BC,
      html: p(
        "The second reserve day. Three of them exist because Nar Phu is four days from the road head and an expedition that runs out of margin here cannot simply extend.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Himlung Base Camp",
      placeDescription: "The final contingency day, and the last night in the upper Nar Phu.",
      ...HIMLUNG_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Koto goes back out on pack animals, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last of the light looking north at the border, which from here is simply the next ridge. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Himlung Base Camp (4,900 m) to Meta (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Meta",
      placeDescription: "The summer settlement above the Nar Khola gorge, on the walk out from the mountain.",
      ...MEDA,
      html: p(
        "Down the moraine to <strong>Phu</strong>, and then the long descent of the valley past Kyang and Chyakhu, through the erosion pillars and the abandoned winter settlements.",
        "It is a big day in distance and an easy one in effort, losing 1,340 m with the walls closing back in and the first juniper reappearing.",
        "<strong>Meta (3,560 m)</strong> in the late afternoon, and the first lodge since Phu. Around 8 hours. Overnight at Meta.",
      ),
    },
    {
      title: "Trek from Meta (3,560 m) to Koto (2,600 m) and Drive to Chame (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, at the end of the walk out.",
      ...CHAME,
      html: p(
        "Down the <strong>Nar Khola gorge</strong> — the narrow slot with the river far below and the path cut into the rock — which is a great deal more enjoyable descending than it was on the way up.",
        "The pine forest returns, and then the check post at <strong>Koto</strong>, where the restricted-area permits are surrendered and you are back on the Annapurna Circuit among trekkers who have no idea where you have been.",
        "A short drive up the valley to <strong>Chame (2,670 m)</strong>, which has hot springs beside the river and a menu. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 7 hours of walking. Overnight at Chame.",
      ),
    },
    {
      title: "Drive from Chame (2,670 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day on the road. The jeep grinds down the <strong>Marsyangdi</strong> gorge to Besisahar on a rough road cut into the valley wall, and then joins the highway east.",
        "The <strong>Prithvi Highway</strong> follows the Trishuli back to the Kathmandu valley, with a lunch stop at a riverside restaurant. Nine to eleven hours in total, depending on the road.",
        "Back in <strong>Kathmandu</strong> in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Himlung is the mountain most of our climbers use as the door into 8,000 m climbing, and Manaslu — visible from your summit, across the Larkya La — is very often the next conversation.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const kangGuruExpedition: Climb = {
  region: "Manaslu Region",
  price: 17500,
  difficulty: "extreme",
  maxAltitude: 6981,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [84.33, 28.69],
  zoom: 11,
  content: {
    slug: "kang-guru-expedition",
    title: "Kang Guru Expedition",
    overview:
      "<p><strong>Kang Guru (6,981 m)</strong> stands above the village of <strong>Nar</strong> in the restricted Nar Phu valleys, and it is one of the least-climbed permitted peaks in Nepal. It was first ascended in <strong>1955 by a Japanese team</strong>, and it is best known for the worst reason: in <strong>October 2005 an avalanche destroyed the base camp of a French expedition, killing eighteen people</strong> — seven climbers and eleven Nepali staff. Very few teams have attempted it since.</p><p>We include it because it is a fine mountain and because the people who want to climb it deserve an operator who will discuss its history openly rather than omit it from the brochure. The route is graded <strong>D</strong> — a crevassed glacier, sustained ice and a corniced summit ridge — and the base camp siting, the timing of the season and the willingness to abandon an attempt matter more here than on any other 7,000 m peak we run.</p>",
    highlights: [
      ["Summit Kang Guru (6,981 m)", "One of the least-climbed permitted peaks in Nepal, first ascended by a Japanese team in 1955."],
      ["The Nar Phu Valleys", "A restricted area closed to outsiders until 2002, with cave dwellings, erosion pillars and medieval Tibetan villages."],
      ["Nar Village (4,110 m)", "A walled Tibetan village of four gompas and stacked stone houses, above the gorge and below the peak."],
      ["A Grade D Route", "Crevassed glacier, sustained ice and a corniced summit ridge, fixed entirely by our own Sherpa team."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain with no other team on it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb and the 2005 Avalanche",
        content:
          "<p><strong>Late April to May</strong> and <strong>mid-October to early November</strong>, and on this mountain the timing is a safety decision rather than a comfort one. The 2005 disaster followed an unseasonal storm that dropped a great deal of snow onto slopes above a base camp sited beneath them, and the avalanche that resulted destroyed the camp entirely.</p><p>What we take from that is specific: <strong>base camp is sited out of avalanche run-out</strong>, we do not run departures at the shoulders of the season when unseasonal storms are most likely, and we do not move onto or stay beneath loaded slopes. Our leader will abandon an expedition and walk a team out rather than sit under fresh snow. We run one departure a year at most and cancellation is a normal outcome.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp at 4,600 m</strong> the route climbs onto a crevassed glacier — roped, marked and crossed in the cold hours — to <strong>Camp 1 at around 5,400 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 45 to 55 degrees</strong>, fixed by our Sherpas, leading to <strong>Camp 2 (6,100 m)</strong> and a <strong>high camp at 6,500 m</strong>. Summit day follows a <strong>corniced ridge</strong> taken one at a time, and runs ten to fourteen hours with a full abseil descent. Nothing on the route is desperate in isolation; the difficulty is the sustained angle, the length of the summit day and the fact that your team fixes every metre of it.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> and, ideally, previous time at 7,000 m. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and comfortable on a corniced crest.</p><p>You also need to be the sort of climber who accepts a leader's decision to walk away. On a mountain with this history, in a valley four days from the road, the most important safety measure available is a team that does not argue when the answer is no. We discuss that at enquiry, and a climber for whom the summit is the only acceptable outcome should choose Himlung instead.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,000 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course. A national alpine club policy or a specialist mountaineering insurer is the realistic option, and we verify the wording before permits are issued.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Nar Phu is remote — Nar is three days' walk from the road head — and while helicopters reach the village and base camp in clear weather, they are dispatched against a guarantee of payment and there will be no other expedition in the valley to assist. We hold your policy number and the insurer's 24-hour line from the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>Nar Phu is dry, bright and dusty on the approach, so a buff and glasses matter from the first day. We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "What happened on Kang Guru in 2005?", answer: "An unseasonal October storm dropped heavy snow, and the avalanche that followed destroyed the base camp of a French expedition, killing eighteen people — seven climbers and eleven Nepali staff. It remains one of the worst single accidents in Nepalese mountaineering, and it is the reason the peak has been attempted so rarely since." },
      { question: "How do you manage that risk now?", answer: "Three ways, and none of them eliminates it. Base camp is sited out of avalanche run-out rather than in the most convenient spot; we do not run departures at the shoulders of the season when unseasonal storms are likeliest; and our leader will abandon an expedition rather than sit beneath loaded slopes. We would rather walk a team out than have this conversation again." },
      { question: "Should the peak be climbed at all?", answer: "That is a fair question and we do not think there is one answer. It is a fine mountain with a hazard that can be managed but not removed, and the people most exposed to it are the Nepali staff who carry the loads. We run it in small numbers, with a conservative base camp and an honest cancellation policy, and we tell every enquirer the history before they book." },
      { question: "How often is Kang Guru climbed now?", answer: "Very rarely — a handful of attempts in the last two decades. There is no trodden line, no established camps and no fixed rope from anyone else. Every expedition on it starts from nothing, which is part of why it costs what it does." },
      { question: "How does it compare with Himlung?", answer: "Harder and considerably less frequented. Himlung is an AD snow route with a high success rate and several teams a season; Kang Guru is a grade D ice route with a corniced ridge and, most years, nobody at all. If you want a 7,000 m summit, climb Himlung; if you want this mountain, climb this mountain." },
      { question: "What is Nar village like?", answer: "A walled Tibetan village at 4,110 m with four gompas, stacked stone houses and a chorten gate, on a shelf above the gorge. It is one of the more remarkable settlements in Nepal and it sees a few hundred foreigners a year. The peak stands directly above it." },
      { question: "Is supplementary oxygen used?", answer: "No. Kang Guru is within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,400 m, Camp 2 at 6,100 m and a high camp at 6,500 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "Why is a guide compulsory?", answer: "Nar Phu is a restricted area. The permit names a licensed guide and requires a minimum of two trekkers, in addition to the Department of Tourism royalty and the conservation permit. All of it is included and handled by our office." },
      { question: "Do you run fixed departures?", answer: "At most one a season, and we cancel readily. On a peak with this hazard profile and no other team in the valley, running an expedition with a marginal team or in marginal conditions is not a risk we are willing to transfer to our staff." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Koto via Besisahar and Dharapani.",
        "Private jeep transport from Koto to Besisahar and onward to Kathmandu at the end of the expedition.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m, sited clear of avalanche run-out, with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,400 m), Camp 2 (6,100 m) and high camp (6,500 m).",
      permits: `Department of Tourism Kang Guru climbing royalty and permit, ${NAR_PHU_PERMITS}.`,
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
        "Porter and pack-animal transport of all expedition equipment between Koto and base camp.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for avalanche conditions, or an expedition ended early by us because the mountain is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 28-day expedition on Kang Guru (6,981 m) above Nar in the restricted Nar Phu valleys, with three camps on a grade D route, an acclimatisation rotation, rope fixed by our own team and three reserve days.",
    inExDescription:
      "Jeep transport to Koto and back, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty and the Nar Phu restricted area and conservation permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Kang Guru Expedition (6,981 m) — 28 Days | Green Compass Treks",
      description:
        "Climb Kang Guru (6,981 m) above Nar in the restricted Nar Phu valleys, one of the least-climbed permitted peaks in Nepal. 28 days, grade D, with a conservatively sited base camp and one Sherpa per climber.",
      keywords:
        "kang guru expedition, kang guru 6981m, nar phu climbing, rarely climbed peaks nepal, nar village, kang guru avalanche, technical expedition nepal",
      tags: "Kang Guru, Manaslu Region, Expedition, Nar Phu, Technical Climb, Peri Himal",
    },
  },
  days: [
    ...narPhuApproach("twenty-eight day").slice(0, 6),
    {
      title: "Trek from Meta (3,560 m) to Nar (4,110 m)",
      elevation: "4,110 m",
      accommodation: "Nar",
      placeDescription: "A walled Tibetan village of four gompas on a shelf above the Nar Khola, below Kang Guru.",
      ...NAR,
      html: p(
        "West and then north out of Meta on the other arm of the valley, climbing steadily past chortens and mani walls with the country turning dry and Tibetan.",
        "The approach to <strong>Nar (4,110 m)</strong> is through a line of enormous chortens on a bluff, and then the village itself: a walled settlement of stacked stone houses with <strong>four gompas</strong>, barley terraces and a great many yaks, on a shelf above the gorge.",
        "It is one of the more remarkable villages in Nepal and it sees a few hundred foreigners a year. <strong>Kang Guru</strong> rises directly above it to the south-west. Around 5 to 6 hours. Overnight at Nar.",
      ),
    },
    {
      title: "Acclimatisation Day at Nar (4,110 m)",
      elevation: "4,110 m",
      accommodation: "Nar",
      placeDescription: "The walled Tibetan village below the peak, where the acclimatisation walk is made.",
      ...NAR,
      html: p(
        "Climb high, sleep low. The morning walk goes up the ridge behind the village toward <strong>4,700 m</strong>, on open ground with the Peri Himal opening out and the Kang La visible to the west.",
        "From the high point the route on Kang Guru is legible for the first time — the glacier, the shelf where Camp 1 goes, the ice face and the corniced ridge above it — and your leader spends an hour going through it.",
        "The afternoon is free for the village and its gompas. Your leader takes the first saturation readings tonight, and the crew engages pack animals for base camp. Around 4 to 5 hours. Overnight at Nar.",
      ),
    },
    {
      title: "Trek from Nar (4,110 m) to Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp on moraine below Kang Guru, sited clear of avalanche run-out.",
      ...KANG_GURU_BC,
      html: p(
        "South-west out of Nar on a herders' trail into the side valley below the peak, climbing 500 m over rough moraine.",
        "<strong>Kang Guru Base Camp (4,600 m)</strong> is established today, and the siting of it is the most deliberate decision on this expedition. Camp goes on ground <strong>clear of the run-out from the slopes above</strong> rather than in the flattest or most convenient spot, which costs some walking every day and is the direct lesson of 2005.",
        "Mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next fortnight. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...KANG_GURU_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Nar, a stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed.",
        "On this mountain the ceremony is attended with particular care by the Nepali staff. Eleven of the eighteen people killed here in 2005 were Nepali crew, and the relationship between this peak and the villages below it has not recovered.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules and the camp's evacuation plan explained. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...KANG_GURU_BC,
      html: p(
        "The day that decides who goes above Camp 1. On the ice above camp each climber is put through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Rope-team travel and crevasse rescue get a second session, because the glacier below Camp 1 is broken and is crossed roped in the dark on push mornings.",
        "Your leader is assessing efficiency under fatigue rather than best-case technique. Anyone not satisfactory is told today. Meanwhile the Sherpas begin <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...KANG_GURU_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,000 m</strong> and back, on ground that asks nothing technical.",
        "The morning is also a chance to look at the mountain's <strong>avalanche terrain</strong> from a distance and in daylight, which your leader does deliberately with the whole team: where the run-outs go, which slopes load, and where the route is exposed.",
        "The afternoon is rest and packing for the rotation. The satellite forecast arrives in the evening, and from now on the precipitation number matters more than the wind. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,400 m on the shelf above the glacier, below the ice face.",
      ...KANG_GURU_C1,
      html: p(
        "The first time on the mountain, and it starts before dawn because the exposed ground has to be crossed while it is frozen.",
        "The route works through the <strong>crevassed glacier</strong> roped and on marked line, then climbs fixed rope onto the shelf where Camp 1 stands. Five to six hours with a personal load.",
        "<strong>Camp 1 (5,400 m)</strong> sits above the glacier with Nar visible far below and the ice face rising directly overhead. The night here is the point of the rotation, and it gives your leader a proper look at how each climber moves on the route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,400 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...KANG_GURU_BC,
      html: p(
        "An early descent, down the fixed ropes and across the glacier in the cold of the morning, three to four hours.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,600 m than it would higher, and a rested team crosses the exposed ground faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice face above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...KANG_GURU_BC,
      html: p(
        "A genuine rest day. Eating past the point of appetite, four litres of fluid, an afternoon asleep and staying off the legs.",
        "Equipment work fills the gaps: tools sharpened, crampons checked, harnesses inspected for wear, and boots dried in the dry sun of the upper valley.",
        "Your leader takes saturation and pulse readings and reviews the forecast. On this mountain the question asked every evening is not only whether the weather is good but whether anything has fallen on the slopes above the route. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...KANG_GURU_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage.",
        "The Sherpa team returns from the face with the report that matters: how the ice is taking screws, how the slopes above the route are loaded, and whether the corniced ridge is in condition.",
        "The forecast arrives in the evening and the go decision is taken on the two together. Recent snow means waiting, however clear the sky, and that is not a judgement call your leader will be talked out of. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,600 m) to Camp 1 (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,400 m above the glacier, reoccupied for the summit push.",
      ...KANG_GURU_C1,
      html: p(
        "Another pre-dawn start, and the glacier goes faster the second time — four hours or so for a crossing that took five or six on the rotation.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only, which also means less time in the exposed ground.",
        "<strong>Camp 1 (5,400 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,400 m) to Camp 2 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,100 m on platforms cut into the ice face.",
      ...KANG_GURU_C2,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>ice at 45 to 55 degrees</strong> on fixed rope, and it stays that way for five to six hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and by the top of it most people understand why the assessment day mattered.",
        "<strong>Camp 2 (6,100 m)</strong> is a handful of tents on platforms cut into the face, small and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,100 m) to High Camp (6,500 m)",
      elevation: "6,500 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,500 m on the shoulder below the summit ridge.",
      ...KANG_GURU_HIGH_CAMP,
      html: p(
        "A deliberately short day — three to four hours of fixed ice to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,500 m)</strong> is two or three tents on the smallest usable ground on the mountain, directly beneath the summit ridge, and it is the coldest night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. The corniced ridge is the last thing anyone sees before the headlamps go on. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Kang Guru (6,981 m) and Descend to Camp 2 (6,100 m)",
      elevation: "6,981 m",
      accommodation: "Camp 2",
      placeDescription: "The 6,981 m summit of Kang Guru, above Nar in the Peri Himal.",
      ...KANG_GURU,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the feature that defines the route.",
        "The <strong>summit ridge</strong> is narrow, corniced and exposed on both sides, taken one at a time with the Sherpas probing the crest ahead. It goes on for hours and it is not hurried — this is where the turnaround time earns its place.",
        "The <strong>summit (6,981 m)</strong> looks north over the Peri Himal into <strong>Tibet</strong>, east across the valley to <strong>Himlung and Nemjung</strong>, south-west to the <strong>Annapurnas</strong> and Tilicho, and straight down onto Nar, three thousand metres below and the only human settlement in view.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Twelve to sixteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,100 m) to Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...KANG_GURU_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. On a mountain this rarely visited, leaving rope behind is not an option.",
        "The glacier and the exposed ground below it are crossed in the cold of the early morning, and for the last time.",
        "<strong>Base camp (4,600 m)</strong> in the middle of the day, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The first of three contingency days, held for conditions or a second summit attempt.",
      ...KANG_GURU_BC,
      html: p(
        "The first of three reserve days, and on this mountain they exist as much to allow waiting as to allow a second attempt. Snow that falls on the slopes above the route closes it for days regardless of how clear the sky is afterwards.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed — provided nothing has fallen. Your leader weighs that first and the party's reserves second.",
        "If the summit went to plan, this is rest in a valley with two villages in it and no other expedition anywhere. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Kang Guru Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The second contingency day, held at base camp for a cold, settled window.",
      ...KANG_GURU_BC,
      html: p(
        "The second reserve day. Three of them exist because the conditions that make this mountain safe are specific and do not arrive to order.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team and everything comes off the face. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Kang Guru Base Camp",
      placeDescription: "The final contingency day, and the last night beneath Kang Guru.",
      ...KANG_GURU_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Koto goes back out on pack animals, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags, and there is a second, older one on the moraine below the camp. Most teams spend some of the last evening at it. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Kang Guru Base Camp (4,600 m) to Meta (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Meta",
      placeDescription: "The summer settlement above the Nar Khola gorge, on the walk out from the mountain.",
      ...MEDA,
      html: p(
        "Down the moraine to <strong>Nar</strong>, past the line of chortens on the bluff and through the village where most of the crew has family or friends.",
        "From Nar the trail drops south-east down the valley to Meta, losing height fast, with the juniper and then the first pine reappearing as the walls close in.",
        "<strong>Meta (3,560 m)</strong> in the late afternoon, and the first lodge in a fortnight. Around 7 hours. Overnight at Meta.",
      ),
    },
    {
      title: "Trek from Meta (3,560 m) to Koto (2,600 m) and Drive to Chame (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, at the end of the walk out.",
      ...CHAME,
      html: p(
        "Down the <strong>Nar Khola gorge</strong> — the narrow slot with the river far below and the path cut into the rock — which is a great deal more enjoyable descending than climbing.",
        "The pine forest returns, and then the check post at <strong>Koto</strong>, where the restricted-area permits are surrendered and you rejoin the Annapurna Circuit among trekkers who have no idea where you have been.",
        "A short drive to <strong>Chame (2,670 m)</strong>, which has hot springs beside the river. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 7 hours of walking. Overnight at Chame.",
      ),
    },
    {
      title: "Drive from Chame (2,670 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day on the road. The jeep grinds down the <strong>Marsyangdi</strong> gorge to Besisahar on a rough road cut into the valley wall, and then joins the highway east.",
        "The <strong>Prithvi Highway</strong> follows the Trishuli back to the Kathmandu valley, with a lunch stop at a riverside restaurant. Nine to eleven hours in total, depending on the road.",
        "Back in <strong>Kathmandu</strong> in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Very few climbers have been on Kang Guru in the last twenty years, and whatever the outcome, a team that went there and came home is a good outcome.",
      ),
    },
  ],
};
