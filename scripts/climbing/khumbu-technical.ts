import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb,
} from "./types";
import {
  CHOLATSE, CHOLATSE_BC, DINGBOCHE, DOLE, DZONGLA, GOKYO, KUSUM_KANGURU, KUSUM_KANGURU_BC,
  KWANGDE_BC, KWANGDE_RI, KYAJO_RI, KYAJO_RI_BC, LUKLA, MACHHERMO, NAMCHE, NIREKHA_BC,
  NIREKHA_PEAK, PANGBOCHE, PHAKDING, PHARI_LAPCHA, PHARI_LAPCHA_BC, TENGBOCHE, THAME,
  THAMSERKU, THAMSERKU_BC,
} from "./places";

/**
 * The technical peaks of the Khumbu.
 *
 * These are the climbs people come back for. Every one of them is graded AD or
 * harder, every one is climbed from a tented base camp in a side valley rather
 * than from a lodge, and none of them sees more than a handful of parties in a
 * season. Where the Island Peak and Mera itineraries are written for first
 * Himalayan summits, these assume you have already had one.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const KHUMBU_PARK_FEES =
  "Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality permit";

const TECHNICAL_SHERPA =
  "One climbing Sherpa for every climber above base camp, with all their equipment, wages and insurance.";

// Side-valley waypoints used only by these routes.
const MENDE = { lng: 86.6889, lat: 27.8236 };
const KYAJO_DRANGKA = { lng: 86.6803, lat: 27.8464 }; // approx
const LUMDING_KHARKA = { lng: 86.6167, lat: 27.7833 }; // approx
const MACHHERMO_HIGH = { lng: 86.6833, lat: 27.9167 }; // approx
const KUSUM_HIGH_CAMP = { lng: 86.75, lat: 27.7333 }; // approx
const CHOLATSE_HIGH_CAMP = { lng: 86.75, lat: 27.9167 }; // approx
const THAMSERKU_HIGH_CAMP = { lng: 86.7667, lat: 27.8 }; // approx
const KWANGDE_HIGH_CAMP = { lng: 86.6333, lat: 27.8 }; // approx
const KYAJO_HIGH_CAMP = { lng: 86.6667, lat: 27.85 }; // approx
const NIREKHA_HIGH_CAMP = { lng: 86.7333, lat: 27.9333 }; // approx
const KYANGJUMA = { lng: 86.7333, lat: 27.81 };
const THAMSERKU_C2 = { lng: 86.7717, lat: 27.7967 }; // approx
const KUSUM_C2 = { lng: 86.7583, lat: 27.7283 }; // approx
const KUSUM_KHOLA_CAMP = { lng: 86.75, lat: 27.7667 }; // approx
const PHARI_HIGH_CAMP = { lng: 86.6833, lat: 27.9 }; // approx

// ─────────────────────────────────────────────────────────────────────────────

export const kyajoRiPeakClimbing: Climb = {
  region: "Everest Region",
  price: 3650,
  difficulty: "difficult",
  maxAltitude: 6186,
  grade: "AD+",
  center: [86.68, 27.84],
  zoom: 11,
  content: {
    slug: "kyajo-ri-peak-climbing",
    title: "Kyajo Ri Peak Climbing",
    overview:
      "<p><strong>Kyajo Ri (6,186 m)</strong> is the climb to book when you have done Island Peak and found it too crowded and too easy. It stands at the head of the <strong>Kyajo Drangka</strong>, a hanging side valley between Namche and Thame that has no lodges, no trekking route and no reason for anyone to walk up it except this mountain. It was only opened to climbing in 2002, and in a busy season it might see a dozen parties.</p><p>The climbing is the real attraction. The south-west ridge is a genuine <strong>mixed route — rock, snow and ice</strong> — with fixed rope on the steep sections, a sharp summit ridge, and a final pyramid that looks improbable from base camp and turns out to go. It is graded <strong>AD+</strong>, which puts it a clear category above the trekking peaks most people start on, and it demands that you arrive already able to climb rather than expecting to learn on the mountain.</p>",
    highlights: [
      ["Summit Kyajo Ri (6,186 m)", "A sharp mixed summit opened to climbing only in 2002, and still one of the quietest permits in the Khumbu."],
      ["The Empty Kyajo Drangka", "Three days in a side valley with no lodges, no trekkers and no trail beyond the yak pastures."],
      ["Genuine Mixed Climbing", "Rock, snow and ice on the south-west ridge, with fixed rope on the steep ground and a knife-edge finish."],
      ["One Sherpa Per Climber", "A one-to-one ratio above base camp, which is what technical ground at 6,000 m actually requires."],
      ["Thame and the Old Tibet Trade Route", "Acclimatise in the valley that produced Tenzing Norgay and Apa Sherpa, away from the Everest trail."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. On a mixed route the choice matters more than it does on a snow peak: spring gives more snow cover over the rock bands, which can make the middle section easier and the ridge more corniced, while autumn strips the route back to cleaner ice and firmer rock but is colder on the hands.</p><p>Most parties prefer <strong>October</strong>, when the air is at its clearest and the rock is dry. Late November brings serious cold to a north-facing high camp at 5,300 m, and the monsoon puts the valley out of use from June to mid-September. We do not run winter departures on this peak — a mixed route at 6,186 m in January is an expedition rather than a guided climb.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>AD+</strong>, and the plus matters. From high camp the route crosses a small glacier, climbs a <strong>rock buttress with sections around grade II to III scrambling</strong> in crampons, and then moves onto snow and ice slopes of <strong>45 to 55 degrees</strong> on the upper ridge. The last part is a narrow, corniced arête leading to a small summit pyramid where the whole party stands one at a time.</p><p>Our Sherpas fix the steep ground before the summit push, but fixed rope on this terrain means jumaring on mixed ground with crampons on rock — a different skill from ascending a snow headwall. Summit day runs <strong>ten to thirteen hours</strong> from high camp. The descent is by abseil down the same line, which on loose mixed ground is where care matters most and where tired parties get into trouble.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>This is not a first Himalayan peak and we will decline bookings that treat it as one. We ask for a <strong>previous 6,000 m summit</strong> or equivalent alpine experience — Mont Blanc by a non-voie-normale route, an AD Alpine route, or a Bolivian or Peruvian 6,000er. You should be able to move confidently in crampons on rock, jumar on mixed ground, and abseil competently while tired.</p><p>Fitness is the other half. Summit day is long and the descent by abseil is slow, so you are on the go for twelve hours or more at altitude. The itinerary builds acclimatisation through <strong>Namche, Thame and two nights at base camp</strong>, with a training and rope-fixing day before the move up, but no amount of acclimatisation substitutes for arriving able to climb.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory and is checked before the permit is issued. The wording matters more here than on a trekking peak: many policies that cover 6,000 m of glacier walking specifically exclude <strong>graded climbing, mixed ground and abseiling</strong>. Get written confirmation naming the activity, not just the altitude.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. The Kyajo Drangka is a short flight from Namche and helicopters can reach base camp in good conditions, but they fly against a guarantee of payment and cannot land near high camp. An injury above 5,300 m means a technical lowering by the team before any aircraft is involved, which is one of the reasons we staff this climb one to one.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Technical kit, not trekking kit. Bring <strong>rigid mountaineering boots</strong> that take a technical crampon, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, softshell trousers for rock, mitts and technical gloves, a balaclava, category 4 glacier glasses, goggles, gaiters and a headlamp with lithium batteries.</p><p>We supply <strong>fixed and main ropes, ice screws, snow bars, rock protection and anchors</strong>, and our Sherpas fix the buttress and the upper ridge ahead of the push. <strong>Personal hardware can be rented as an add-on</strong>, but on a mixed route we would rather you brought your own harness, technical axe, crampons and descender — kit you have used before behaves predictably when you are tired at 6,000 m.</p>",
      },
    ],
    faqs: [
      { question: "How does Kyajo Ri compare with Island Peak?", answer: "It is a genuinely different kind of climbing. Island Peak is one steep ice wall on a fixed rope with a snow ridge above; Kyajo Ri is a mixed route with rock scrambling in crampons, sustained 45 to 55 degree ice, a corniced arête and a long abseil descent. Two full grades harder, and about four hours longer on summit day." },
      { question: "Why do you staff it one Sherpa per climber?", answer: "Because mixed ground does not allow a rope team to move at the pace of its slowest member the way a snow slope does. On the buttress and the arête each climber needs someone within a rope length, and the abseil descent has to be managed station by station. It is the main reason this climb costs more than a trekking peak." },
      { question: "What is base camp like?", answer: "A tented camp at around 4,550 m on a yak pasture in the Kyajo Drangka, with a mess tent, kitchen tent and toilet tent and a cook crew. There is no lodge and there is usually nobody else there. Water comes from the stream and the nights are cold and completely silent." },
      { question: "Is there a fixed rope all the way?", answer: "On the steep sections — the rock buttress, the main ice slopes and the exposed parts of the ridge — fixed by our Sherpas the day before. The easier connecting ground is climbed as a roped team. The descent is by abseil on the same anchors, which is why the team fixes rather than improvising on the day." },
      { question: "What is the summit success rate?", answer: "Around 55 to 65 percent on our departures, which is normal for an AD+ peak and considerably lower than a trekking peak. Weather on the arête, rockfall on the buttress after fresh snow, and simple slowness on technical ground are the three usual reasons for turning back." },
      { question: "How high is high camp and how cold is it?", answer: "Around 5,300 m on a shoulder below the route, reached in four to five hours from base camp. It is north-facing and exposed, and overnight temperatures of -15°C to -20°C are normal in season. It is a single night — we do not stock a second camp on this peak." },
      { question: "Can I climb Kyajo Ri without previous 6,000 m experience?", answer: "We will consider strong alpine experience instead — a season of AD routes in the Alps, or comparable ground in the Andes — but we will not take someone whose only mountain days are trekking peaks. If Island Peak or Mera is your background, climb Lobuche East first and then come back to this." },
      { question: "Why does the itinerary go via Thame?", answer: "Partly for acclimatisation and partly because it is a better valley than the Everest trail. Thame sits on the old salt route to Tibet, has a monastery cut into the cliff above it, and produced both Tenzing Norgay and Apa Sherpa. It also puts you at the mouth of the Kyajo Drangka without backtracking." },
      { question: "Is the descent harder than the ascent?", answer: "In many ways, yes. Abseiling a mixed route on loose ground at the end of a twelve-hour day is where mistakes happen, and it is slow — often four to five hours from summit to high camp. Your guide will turn a party round on time rather than on distance for exactly this reason." },
      { question: "Can Kyajo Ri be combined with another peak?", answer: "Yes — it pairs naturally with Island Peak or Lobuche East, and we run a three-peak itinerary of Island, Lobuche and Kyajo Ri for climbers who want to build from a snow peak to a mixed one within a single trip. Kyajo Ri always comes last in that sequence." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation in the Kyajo Drangka, at Kyajo Ri base camp (4,550 m) and high camp (5,300 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Kyajo Ri, ${KHUMBU_PARK_FEES}.`,
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A training and skills-check day at base camp covering mixed ground, fixed-rope ascent and abseil technique.",
        "Fixing of the rock buttress, ice slopes and summit ridge by our climbing Sherpas ahead of the summit push.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
        "Porter and yak transport of camp and technical equipment into the Kyajo Drangka.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 11,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary up the empty Kyajo Drangka to the mixed south-west ridge of Kyajo Ri (6,186 m), with acclimatisation at Namche and Thame, two nights at base camp and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per climber, all group rock and ice equipment, rope fixing and the skills day are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Kyajo Ri Peak Climbing (6,186 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Kyajo Ri (6,186 m), an AD+ mixed route in the empty Kyajo Drangka valley above Namche. 16 days with one Sherpa per climber, fixed ropes on rock and ice, and a corniced summit arête.",
      keywords:
        "kyajo ri peak climbing, kyajo ri 6186m, technical peak climbing nepal, kyajo drangka, mixed climbing khumbu, AD+ peak nepal",
      tags: "Kyajo Ri, Everest Region, Technical Climb, 6000m Peak, Mixed Route, Khumbu",
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
        "Nothing is required today beyond resting and adjusting to the time difference. Thamel has good technical gear shops within a few minutes' walk if anything is missing.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The briefing covers the sixteen-day plan and then spends most of its time on the route itself — the buttress, the ice slopes, the arête, the abseil descent, and where a party normally turns round.",
        "The <strong>equipment check</strong> on a mixed route is detailed. Boots are fitted with technical crampons and checked for rigidity, harnesses adjusted, and your axe and descender inspected. Your guide will also ask directly about your climbing history and assess it honestly.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "You meet the porters over tea, sort loads, and start north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and prayer wheels turned by the river.",
        "<strong>Phakding (2,610 m)</strong> lies lower than Lukla, which makes an easy first night. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and beyond it the trail turns uphill for 600 m of steady work — with a first view of <strong>Everest</strong> partway up if the sky is clear.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, an ATM and the last serious gear shops. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong>, then across to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "From the ridge above Khumjung there is a clear view west into the <strong>Kyajo Drangka</strong> and, at its head, the peak itself — a sharp pyramid that looks a good deal more serious than the trekking peaks on the other side of the valley. It is a useful thing to see early.",
        "The afternoon is free. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Thame (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Thame",
      placeDescription: "A village on the old salt route to Tibet, with a cliff monastery above it.",
      ...THAME,
      html: p(
        "West out of Namche on the trail to Tibet, contouring high above the <strong>Bhote Koshi</strong> through juniper and rhododendron, past water-driven prayer wheels and the small settlements of Phurte and Thamo.",
        "This is a different Khumbu from the Everest trail — no queues at the bridges, working farms rather than lodges, and a valley that until the 1960s carried salt and wool over the Nangpa La from Tibet.",
        "<strong>Thame (3,800 m)</strong> is the home village of both Tenzing Norgay and Apa Sherpa, with a monastery set into the cliff above it that holds a Mani Rimdu festival each spring. Around 5 hours. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,800 m) to Kyajo Drangka (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Kyajo Drangka",
      placeDescription: "A tented camp in the yak pastures of an empty side valley below Kyajo Ri.",
      ...KYAJO_DRANGKA,
      html: p(
        "The day the trip leaves the map. From Thame the route crosses the Bhote Koshi and climbs east into the <strong>Kyajo Drangka</strong>, a hanging valley with no lodges, no teahouses and no trekking route in it.",
        "The trail is a yak path through juniper scrub and then open pasture, steep in places, following the stream up into a narrowing valley with rock walls closing on both sides.",
        "Camp goes up at around <strong>4,200 m</strong> on a grazing meadow. From here on the group is self-contained — tents, a cook crew, and all food carried in. It is very quiet. Around 4 to 5 hours. Overnight at Kyajo Drangka.",
      ),
    },
    {
      title: "Trek from Kyajo Drangka (4,200 m) to Kyajo Ri Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "A tented base camp on the moraine at the head of the Kyajo Drangka, beneath the south-west ridge.",
      ...KYAJO_RI_BC,
      html: p(
        "A short day up the valley on moraine and boulder ground, the walls steepening and the peak coming properly into view at the head of the cirque.",
        "<strong>Kyajo Ri Base Camp (4,550 m)</strong> sits on a flat shelf beside a small tarn with the <strong>south-west ridge</strong> rising directly above — the buttress, the ice slopes and the summit arête all visible from the mess tent, which is unusual and useful.",
        "The afternoon is spent studying the line with your guide, who will walk you through the route section by section, and resting. Around 3 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Skills Day at Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The base camp below the ridge, where technique is checked before the group commits to the route.",
      ...KYAJO_RI_BC,
      html: p(
        "A working day, and on a mixed route it is a skills check rather than a beginner's lesson. On the rock and ice above camp your guide runs each climber through <strong>moving in crampons on rock</strong>, jumaring on mixed ground where the rope runs over edges, placing feet on small holds in stiff boots, and abseiling on a loaded rope.",
        "Anyone whose technique is not up to the ground gets the afternoon as well, and if it is still not there, your guide will say so before the group commits. That conversation is easier here than at 5,800 m.",
        "Meanwhile the Sherpas are on the mountain <strong>fixing the buttress and the lower ice slopes</strong>. A short acclimatisation walk to 4,900 m rounds off the day. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,550 m) to Kyajo Ri High Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Kyajo Ri High Camp",
      placeDescription: "A tented camp on a north-facing shoulder at 5,300 m, directly beneath the climbing route.",
      ...KYAJO_HIGH_CAMP,
      html: p(
        "A steep 750 m on moraine, scree and then snow, four to five hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,300 m)</strong> is a set of platforms on a north-facing shoulder — exposed, shaded from mid-afternoon, and cold. There is room for a handful of tents and nothing else.",
        "The rest of the day is preparation: harnesses, crampons, axes and descenders laid out, the order of climbing set, and an early dinner. Your guide gives the final weather call and the turnaround time tonight. Asleep by seven. Overnight at high camp.",
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
        "Above the buttress the route moves onto <strong>snow and ice at 45 to 55 degrees</strong> for several hours, the angle easing and steepening in turn, and then onto the <strong>summit arête</strong> — narrow, corniced, and climbed one at a time with the whole Kyajo Drangka dropping away on both sides.",
        "The <strong>summit (6,186 m)</strong> is a small pyramid with room for two or three people, looking east across the Khumbu to Everest, Lhotse, Nuptse and Ama Dablam, and west into the Bhote Koshi toward the Nangpa La and Tibet.",
        "The descent is by <strong>abseil</strong>, station by station, and it is slow — four to five hours to high camp, then on down to base camp. Twelve to fourteen hours in total. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,550 m)",
      elevation: "4,550 m",
      accommodation: "Kyajo Ri Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...KYAJO_RI_BC,
      html: p(
        "The day held in reserve, and on a mixed route it is used often. Fresh snow on the buttress makes rockfall a real hazard and can close the route for twenty-four hours even in otherwise good weather.",
        "If the summit was missed, the group returns to high camp today and climbs tomorrow, with the fixed ropes already in place. Your guide makes that decision on the state of the party as much as the forecast — a team that came back exhausted does not go up again the next day.",
        "If the climb went to plan, this is a genuine rest day at base camp, or the group starts down the valley early and banks a spare day against the Lukla flights. Overnight at base camp or Thame.",
      ),
    },
    {
      title: "Trek from Kyajo Ri Base Camp (4,550 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent out of the side valley.",
      ...NAMCHE,
      html: p(
        "Camp comes down after breakfast and the whole valley is descended in a day — moraine, then pasture, then juniper scrub, following the stream back down the <strong>Kyajo Drangka</strong> to the Bhote Koshi.",
        "From the valley mouth the trail contours south-east above the river, past Thamo and Phurte, rejoining the Everest trail at the top of Namche.",
        "<strong>Namche Bazaar (3,440 m)</strong> after four nights of tents is a considerable shock — hot water, bakeries, a beer and other people. Around 7 to 8 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day. Steeply down from Namche to the <strong>Hillary Bridge</strong>, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, checking out of the national park.",
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, always longer than it looks on the last day.",
        "The evening is the end-of-trip dinner with the guide, climbing Sherpas, cook crew and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays are routine rather than exceptional, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who enjoy Kyajo Ri usually look at Cholatse or Ama Dablam next, and both are a natural step up from here.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const kwangdePeakClimbing: Climb = {
  region: "Everest Region",
  price: 3450,
  difficulty: "difficult",
  maxAltitude: 6011,
  grade: "AD+",
  center: [86.64, 27.81],
  zoom: 11,
  content: {
    slug: "kwangde-peak-climbing",
    title: "Kwangde Peak Climbing",
    overview:
      "<p><strong>Kwangde Ri (6,011 m)</strong> is the wall everyone in Namche looks at and almost nobody climbs. It forms the entire southern skyline of the Sherpa capital, and its <strong>north face</strong> — climbed by Jeff Lowe and David Breashears in 1982 in a two-day push that is still discussed — is one of the hardest pieces of ice in the Khumbu. That face is not what we climb.</p><p>The route on this itinerary is the <strong>south-west ridge</strong>, reached from a base camp in a side valley below Thame, and it is a serious but attainable <strong>AD+</strong>: mixed rock and ice, fixed rope on the steep bands, and a long summit ridge with real exposure. What makes Kwangde special is not difficulty for its own sake but position. You climb a mountain you have been staring at since your second day in the Khumbu, and from the top you look straight down onto the roofs of Namche 2,500 m below.</p>",
    highlights: [
      ["Summit Kwangde Ri (6,011 m)", "The peak that forms the southern skyline of Namche Bazaar, climbed by its south-west ridge."],
      ["Look Down on Namche from 6,011 m", "A summit view straight down onto the Sherpa capital, with Everest, Lhotse and Ama Dablam beyond it."],
      ["Mixed Rock and Ice at AD+", "Fixed rope on the steep bands, a sustained ice section and an exposed ridge to finish."],
      ["The Thame Valley Approach", "Acclimatise on the old Tibet salt route, in a valley with working farms rather than lodges."],
      ["A Peak With Almost No Traffic", "Fewer parties attempt Kwangde in a season than climb Island Peak in a single morning."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. The south-west ridge catches sun for much of the day, which makes it warmer than Kyajo Ri's north-facing route but also means the snow softens by late morning — an early start is not optional here, it is the difference between firm neve and wading.</p><p><strong>Autumn</strong> is the more reliable season on this peak, with drier rock on the bands and firmer ice above. Spring can bury the mixed sections under unconsolidated snow, which sounds easier and is not: it hides the holds and loads the slopes. The monsoon closes the valley entirely, and winter turns a 5,400 m high camp on an exposed shoulder into a genuinely hostile place.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>AD+</strong>. From high camp the route climbs a snow slope onto the <strong>south-west ridge</strong>, which is followed over a series of <strong>rock bands</strong> — moderate scrambling in crampons, fixed by our Sherpas — separated by snow arêtes. Above them comes the sustained part, an <strong>ice slope of 45 to 55 degrees</strong> for several rope lengths, and then the upper ridge to the summit.</p><p>The ridge is the character of the climb: long, exposed on both sides, and never quite letting up. Summit day runs <strong>ten to thirteen hours</strong> from high camp with an abseil descent on the same anchors. Kwangde is not harder than Kyajo Ri in any single move, but it is longer and more sustained, and parties tend to run out of daylight rather than out of ability.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>A <strong>previous 6,000 m summit or solid alpine AD experience</strong> is required. You need to be able to move on rock in crampons, jumar where the rope runs over edges, and abseil competently at the end of a long day. Trekking-peak experience alone is not enough, and we would rather have that conversation at booking than at base camp.</p><p>Endurance matters as much as technique. The itinerary acclimatises through <strong>Namche, Thame and two nights at base camp</strong> with a skills day before the move up, but a twelve-hour day on mixed ground at 6,000 m asks for consistent hill fitness built over months, not weeks. If you can climb a long alpine route and still abseil carefully afterwards, you are ready for this.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory and is checked before the permit is issued. Look specifically for cover of <strong>graded climbing, mixed ground and abseiling</strong> — a policy written for 6,000 m of glacier walking will exclude everything this route consists of, regardless of what its altitude limit says.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Kwangde base camp is close to Namche in map distance and a long way from it in practice, up a side valley with no trail. Helicopters can reach base camp in clear conditions but not the ridge, so an injury high on the route means a technical lowering by the team first. That is the reasoning behind the one-to-one Sherpa ratio on this climb.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong> that take a technical crampon, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, softshell trousers for the rock bands, technical gloves and mitts, a balaclava, category 4 glacier glasses, goggles, gaiters, and a headlamp with lithium batteries.</p><p>We supply <strong>fixed and main ropes, ice screws, snow bars, rock protection and anchors</strong>, and the Sherpas fix the bands and the ice slope before the summit push. <strong>Personal hardware can be rented as an add-on</strong>, though on mixed ground your own harness, technical axe, crampons and descender are worth carrying from home — familiar kit behaves predictably when your hands are cold.</p>",
      },
    ],
    faqs: [
      { question: "Is this the famous north face route?", answer: "No, and it is worth being clear about that. The north face climbed by Lowe and Breashears in 1982 is a hard technical ice route that is not guided commercially by anyone. This itinerary climbs the south-west ridge, a serious AD+ mixed route that is a completely different proposition on the other side of the mountain." },
      { question: "How does Kwangde compare with Kyajo Ri?", answer: "Very similar in grade and both are AD+, but the character differs. Kyajo Ri concentrates its difficulty into a buttress and an arête; Kwangde spreads it along a longer, more sustained ridge with more rock bands. Kwangde is the longer day; Kyajo Ri is the sharper summit." },
      { question: "Can I really see Namche from the summit?", answer: "You look straight down onto it, around 2,500 m below and slightly to the north — the lodges, the terraces and the helipad all clearly visible. It is one of the more striking summit views in the Khumbu precisely because it is a view of somewhere you have been rather than another mountain." },
      { question: "Where is base camp?", answer: "In a side valley south of Thame at around 4,700 m, on moraine below the ridge. It is a tented camp with a mess tent, kitchen tent and toilet tent and a cook crew, and there is no lodge or settlement anywhere near it. Expect to have the valley to yourselves." },
      { question: "What is the success rate?", answer: "Around 50 to 60 percent on our departures. The two common reasons for turning back are running out of time on the long ridge and finding the rock bands loaded with unconsolidated snow after a storm. Both are decisions your guide makes against a fixed turnaround time." },
      { question: "How exposed is the summit ridge?", answer: "Very. It drops away steeply on both sides for most of its length and is climbed one at a time on fixed line or short rope. If exposure is something you struggle with, this is not the right peak — the ridge lasts for hours rather than minutes." },
      { question: "Do we need two high camps?", answer: "No. One high camp at around 5,400 m on the shoulder, and a single long summit day from it. Some expeditions have used a second bivouac higher on the ridge, but for a guided ascent the extra night costs more in cold and fatigue than it buys in distance." },
      { question: "Is Kwangde suitable as a first technical Himalayan peak?", answer: "It can be, for someone with real alpine experience elsewhere — a climber who has done AD routes in the Alps and been to 5,000 m will find it a fair introduction. It is not suitable for someone stepping up directly from Island Peak or Mera." },
      { question: "How busy is the route?", answer: "Almost never busy. A handful of parties attempt Kwangde in a normal season, against several hundred on Island Peak. You will very likely be the only team on the mountain, which is part of the appeal and also why the route is not pre-fixed by anyone else." },
      { question: "What happens if the group splits on summit day?", answer: "It splits cleanly, because we run one Sherpa per climber. Anyone stopping descends with their Sherpa while the rest continue, and nobody has to end another person's climb. On a route where pace varies hugely across a party, this is the single most useful thing about the staffing ratio." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation on the approach, at Kwangde base camp (4,700 m) and high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Kwangde, ${KHUMBU_PARK_FEES}.`,
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew for the approach, base camp and high camp nights.",
        "A skills-check day at base camp covering mixed ground, fixed-rope ascent over edges, and abseil technique.",
        "Fixing of the rock bands, ice slope and summit ridge by our climbing Sherpas ahead of the summit push.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
        "Porter and yak transport of camp and technical equipment from Thame to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 11,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary to the south-west ridge of Kwangde Ri (6,011 m), approached through the Thame valley, with two nights at base camp, a high camp at 5,400 m and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per climber, all group rock and ice equipment, rope fixing and the skills day are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Kwangde Peak Climbing (6,011 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Kwangde Ri (6,011 m) by its south-west ridge, the peak that forms the southern skyline of Namche Bazaar. 16 days, AD+ mixed climbing, one Sherpa per climber and a summit view straight down onto Namche.",
      keywords:
        "kwangde peak climbing, kwangde ri 6011m, kwangde south west ridge, technical climbing khumbu, thame valley climbing, AD+ nepal peak",
      tags: "Kwangde Ri, Everest Region, Technical Climb, 6000m Peak, Thame Valley, Mixed Route",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Thamel's technical gear shops are within a few minutes' walk if anything is missing from your kit, and they stock rock and ice hardware as well as the usual trekking equipment.",
        "If you arrive with time to spare, it is worth walking up to the roof of the hotel at dusk — on a clear evening in October the Ganesh and Langtang ranges are visible over the north side of the valley.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The briefing covers the sixteen-day plan and then goes through the <strong>south-west ridge</strong> in detail — the rock bands, the ice slope, the long upper ridge, the turnaround time and the abseil descent.",
        "The <strong>equipment check</strong> is thorough for a mixed route. Boots are fitted with technical crampons and checked for rigidity, harnesses adjusted, axes and descenders inspected, and your climbing history discussed frankly.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "Loads are sorted with the porters over tea, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong> past mani walls and prayer wheels.",
        "<strong>Phakding (2,610 m)</strong> lies below Lukla, which makes an easy first night at altitude. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, with the Kwangde wall forming its entire southern skyline.",
      ...NAMCHE,
      html: p(
        "Five suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and the trail climbs 600 m to Namche.",
        "Arriving in <strong>Namche Bazaar (3,440 m)</strong>, turn round and look south: the wall filling the sky across the valley is <strong>Kwangde</strong>, and you will be on top of it in nine days. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, directly beneath the north face of Kwangde.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong> and across to <strong>Khumjung</strong> and <strong>Khunde</strong>, with Everest, Lhotse and Ama Dablam up the valley.",
        "The better view for this trip is behind you. From the ridge the whole <strong>north face of Kwangde</strong> is laid out — the ice route Lowe and Breashears climbed in 1982, and, running off to the right, the south-west ridge you will actually be on.",
        "The afternoon is free in Namche. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Thame (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Thame",
      placeDescription: "A village on the old salt route to Tibet, with a cliff monastery above it.",
      ...THAME,
      html: p(
        "West out of Namche on the trail toward Tibet, contouring high above the <strong>Bhote Koshi</strong> through juniper and rhododendron, past water-driven prayer wheels and the hamlets of Phurte and Thamo.",
        "The Kwangde wall runs along the left side of the valley the whole way, and the side valley you climb into tomorrow opens up as you approach Thame.",
        "<strong>Thame (3,800 m)</strong> is the home village of Tenzing Norgay and Apa Sherpa, with a monastery set into the cliff above it. Around 5 hours. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,800 m) to Kwangde Approach Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Kwangde Approach Camp",
      placeDescription: "A tented camp in the yak pastures of the side valley below Kwangde's southern flank.",
      ...LUMDING_KHARKA,
      html: p(
        "The trip leaves the map today. From Thame the route crosses the <strong>Bhote Koshi</strong> and climbs south into the side valley below the Kwangde massif — a hanging valley with yak pastures at its foot and nothing above them.",
        "The path is a herders' track through juniper scrub, steep in places, following a stream up into ground that narrows and steepens as the walls close in.",
        "Camp goes up at around <strong>4,300 m</strong> on a grazing meadow. From here the group is self-contained: tents, a cook crew and everything carried in. Around 4 to 5 hours. Overnight at the approach camp.",
      ),
    },
    {
      title: "Trek to Kwangde Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Kwangde Base Camp",
      placeDescription: "A tented base camp on moraine beneath the south-west ridge of Kwangde Ri.",
      ...KWANGDE_BC,
      html: p(
        "A short day up onto the moraine, gaining 400 m on boulder ground with the walls of the cirque rising on three sides.",
        "<strong>Kwangde Base Camp (4,700 m)</strong> sits below the <strong>south-west ridge</strong>, and the whole line is visible from camp — the rock bands, the ice slope above them, and the long upper ridge running to the summit.",
        "The afternoon is spent studying that line with your guide, who will walk the route section by section and set the turnaround time before anyone leaves the mess tent. Around 3 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Skills Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Kwangde Base Camp",
      placeDescription: "The base camp below the ridge, where technique is checked before the group commits.",
      ...KWANGDE_BC,
      html: p(
        "A skills check rather than a beginner's lesson. On the rock and ice above camp your guide works through <strong>moving on rock in crampons</strong>, jumaring where the rope runs over an edge, placing feet precisely in rigid boots, and abseiling under load.",
        "The abseil gets the most attention, because the descent from a long ridge at the end of a thirteen-hour day is where this climb takes its casualties. Anyone still awkward gets the afternoon as well.",
        "The Sherpas spend the day on the mountain <strong>fixing the rock bands and the ice slope</strong>. A short acclimatisation walk to around 5,000 m closes the day. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,700 m) to Kwangde High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Kwangde High Camp",
      placeDescription: "A tented camp on an exposed shoulder at 5,400 m, directly beneath the south-west ridge.",
      ...KWANGDE_HIGH_CAMP,
      html: p(
        "A steep 700 m on moraine, scree and then snow — four to five hours with a moderate load while the crew moves camp up behind you.",
        "<strong>High camp (5,400 m)</strong> is a handful of platforms cut into an exposed shoulder with no shelter of any kind. From it the ridge rises directly overhead and the Bhote Koshi valley drops away to the north.",
        "The afternoon is preparation: kit laid out, order of climbing set, an early dinner, and the final weather and turnaround call from your guide. Asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Kwangde Ri (6,011 m) and Descend to Base Camp (4,700 m)",
      elevation: "6,011 m",
      accommodation: "Kwangde Base Camp",
      placeDescription: "The 6,011 m summit of Kwangde Ri, 2,500 m directly above Namche Bazaar.",
      ...KWANGDE_RI,
      html: p(
        "Moving by one in the morning. A snow slope above camp leads onto the <strong>south-west ridge</strong>, and then the route begins working through the <strong>rock bands</strong> — moderate scrambling in crampons on fixed line, separated by short snow arêtes, for several hours in the dark.",
        "Above the bands comes the sustained section: an <strong>ice slope of 45 to 55 degrees</strong> climbed on fixed rope for several rope lengths, usually as the sun arrives. From its top the <strong>upper ridge</strong> runs to the summit, exposed on both sides, taken one at a time.",
        "The <strong>summit (6,011 m)</strong> looks north straight down onto <strong>Namche Bazaar</strong>, 2,500 m below, with Everest, Lhotse, Nuptse and Ama Dablam beyond it and the Bhote Koshi running west toward the Nangpa La.",
        "The descent is by <strong>abseil</strong> down the same anchors, station by station, and it is slow. Twelve to fourteen hours in total to base camp. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Kwangde Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...KWANGDE_BC,
      html: p(
        "The day held in reserve. On a route this long, the usual reason for a second attempt is not storm but time — a party that reached the top of the ice slope at eleven in the morning has already lost the summit, and turning round then is the right call.",
        "If yesterday was cut short, the group returns to high camp today with the ropes already fixed and climbs tomorrow. Your guide weighs the state of the party as heavily as the forecast.",
        "If the climb went to plan, this is a rest day at base camp or an early start down the valley, banking a spare day against the Lukla flights. Overnight at base camp or Thame.",
      ),
    },
    {
      title: "Trek from Kwangde Base Camp (4,700 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent from the side valley.",
      ...NAMCHE,
      html: p(
        "Camp comes down after breakfast and the whole valley goes in a day — moraine, then pasture, then juniper scrub, down to the Bhote Koshi and across it to <strong>Thame</strong>.",
        "From there the trail contours south-east above the river, past Thamo and Phurte, and rejoins the Everest trail at the top of Namche.",
        "Arriving in <strong>Namche Bazaar (3,440 m)</strong> and looking back up at the ridge you were standing on yesterday morning is the best part of the walk out. Hot water, a bakery and a beer follow. Around 7 to 8 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb to <strong>Lukla (2,840 m)</strong>, which always feels steeper on the last day than it did on the first.",
        "The evening is the end-of-trip dinner with the guide, climbing Sherpas, cook crew and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays are routine rather than exceptional, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who get on with Kwangde tend to look at Cholatse or Ama Dablam next.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const phariLapchaPeakClimbing: Climb = {
  region: "Everest Region",
  price: 3350,
  difficulty: "difficult",
  maxAltitude: 6017,
  grade: "AD-",
  center: [86.69, 27.91],
  zoom: 11,
  content: {
    slug: "phari-lapcha-peak-climbing",
    title: "Phari Lapcha Peak Climbing",
    overview:
      "<p><strong>Phari Lapcha (6,017 m)</strong> stands directly above <strong>Machhermo</strong> in the Gokyo valley, and every trekker walking to the lakes passes beneath it without knowing its name. It is a compact, rocky peak with a short, sharp route — a mixed south-east ridge with a genuine rock step near the top — and it makes a superb objective for a climber who wants technical ground without a fortnight of glacier travel to reach it.</p><p>The trip has a second attraction that is not really about the summit. The approach runs up the <strong>Gokyo valley</strong>, past the Dudh Koshi's turquoise lakes and beneath the huge east face of <strong>Cho Oyu</strong>, and the acclimatisation walk from base camp looks across at <strong>Gokyo Ri</strong> and the Ngozumpa, the longest glacier in Nepal. You get a technical <strong>AD-</strong> climb and one of the finest valleys in the Himalaya in the same sixteen days.</p>",
    highlights: [
      ["Summit Phari Lapcha (6,017 m)", "A sharp mixed peak above Machhermo with a rock step near the top and a compact, satisfying summit day."],
      ["The Gokyo Valley Approach", "Walk in beside the Dudh Koshi lakes with Cho Oyu, Gyachung Kang and the Ngozumpa glacier alongside."],
      ["Technical Ground Without a Long Glacier", "Rock and mixed climbing on fixed rope, reached from a base camp only two hours above the trekking trail."],
      ["One Sherpa Per Climber", "A one-to-one ratio above base camp, which the rock step and the abseil descent genuinely require."],
      ["A Peak Almost Nobody Climbs", "Hundreds of trekkers walk under it each week; a handful of parties a season go up it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. Because the crux of Phari Lapcha is rock rather than ice, the season matters in a specific way: <strong>autumn is the better half of the year here</strong>, when the rock is dry and clean and the mixed ground is predictable.</p><p>Spring works but is more variable — snow sitting on the ledges of the rock step turns a straightforward pitch into slow, careful climbing, and it can shut the route entirely after a storm. The Gokyo valley also holds cloud longer than the Imja side in spring. The monsoon closes the valley from June to mid-September, and winter puts a 5,400 m high camp beyond what a guided party should accept.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>AD-</strong>, which makes it the most approachable of the Khumbu's genuinely technical peaks. From high camp the route crosses a short glacier, climbs <strong>snow slopes of 40 to 50 degrees</strong>, and then reaches the feature that defines the climb: a <strong>rock step of around 30 to 40 m</strong>, moderate in grade but exposed and climbed in crampons on fixed rope.</p><p>Above the step a short snow arête leads to the summit, which is small and rocky and holds two or three people at a time. Summit day is <strong>eight to eleven hours</strong> from high camp — noticeably shorter than Kyajo Ri or Kwangde, which is part of why we recommend it as a first technical Himalayan peak. The descent abseils the step and the upper slopes on the same anchors.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>Phari Lapcha is the peak we suggest to climbers making the step up from trekking peaks. You should have <strong>climbed a 6,000 m snow peak already</strong> — Island Peak, Mera or Lobuche East — and be comfortable on fixed rope and on an abseil. Previous rock experience helps but is not essential, because the step is fixed and the moves are moderate.</p><p>What you do need is to be steady with <strong>exposure</strong> and precise with your feet in stiff boots. The rock step is not hard; it is airy, and technique matters more than strength. The itinerary acclimatises through Namche, Dole and Machhermo, with two nights at base camp and a skills day, so by the time you are on the step you have been above 4,000 m for a week.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory and is checked before the permit is issued. As on any graded route, look for cover that names <strong>climbing, mixed ground and abseiling</strong> rather than a policy that simply quotes an altitude. Cover written for trekking to 6,000 m will not pay out on a rock step.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Base camp sits close enough to the Gokyo trail that a helicopter can reach it easily in clear weather, which makes this one of the more accessible technical peaks in the Khumbu for evacuation purposes — but aircraft are dispatched against a guarantee of payment, not need. We take your policy number and the insurer's 24-hour line in Kathmandu.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong> that take a technical crampon, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, softshell trousers for the rock step, technical gloves and mitts, a balaclava, category 4 glacier glasses, goggles, gaiters and a headlamp with lithium batteries.</p><p>Because the crux is rock, <strong>thinner gloves you can actually feel holds through</strong> are worth packing alongside the warm ones. We supply <strong>fixed and main ropes, ice screws, snow bars, rock protection and anchors</strong>, and our Sherpas fix the step and the upper slopes before the push. <strong>Personal hardware can be rented as an add-on</strong>, fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "Is Phari Lapcha a good first technical peak?", answer: "It is the one we recommend most often for that step. The summit day is shorter than Kyajo Ri's or Kwangde's, the technical ground is concentrated into one fixed rock step rather than spread over a long ridge, and base camp is close to the trekking trail if anything goes wrong. It is a real climb without being a long commitment." },
      { question: "How hard is the rock step?", answer: "Moderate in pure grade — around British Severe or French 4 in rock-shoe terms — but climbed in crampons and mitts at 5,800 m with a considerable drop underneath, which changes it. It is fixed by our Sherpas and climbed on a jumar, so the difficulty is about composure and footwork rather than pulling hard." },
      { question: "Do we visit Gokyo on this itinerary?", answer: "The approach goes as far as Machhermo, an hour and a half below the Gokyo lakes, and base camp sits above it. We do not include the lakes in the standard plan, but adding two days to reach Gokyo and climb Gokyo Ri before the peak is a popular extension and improves acclimatisation. Ask at booking." },
      { question: "Where is base camp?", answer: "At around 4,800 m in a side valley above Machhermo, roughly two hours off the main trail. It is a tented camp with a mess tent, kitchen tent and toilet tent and a cook crew, on moraine below the south-east ridge, with a view across to Cho Oyu." },
      { question: "What is the success rate?", answer: "Around 65 to 75 percent on our departures, higher than Kyajo Ri or Kwangde because the summit day is shorter and the technical section is brief. The commonest reason for turning back is fresh snow on the rock step, which makes it slow enough to run past the turnaround time." },
      { question: "How does it compare with Island Peak?", answer: "Harder, and different in kind. Island Peak's difficulty is a sustained ice wall; Phari Lapcha's is a short piece of exposed rock. Island Peak is longer in the day and higher on the head; Phari Lapcha asks for more precise movement. Most climbers find them roughly equal in effort and completely unalike in feel." },
      { question: "Is there a glacier to cross?", answer: "A short one below the ridge, crossed roped on the way to the snow slopes. It is nothing like the crevassed ground on Mera or the Imja glacier, and it takes under an hour. This is one of the few 6,000 m peaks in the Khumbu where glacier travel is a footnote rather than the main event." },
      { question: "Can I climb it if I have never climbed rock before?", answer: "Yes, provided you have a 6,000 m snow peak behind you and you are honest with your guide at the skills day. The step is fixed and the moves are moderate. What we cannot fix is a fear of exposure that only reveals itself on the day, which is what the base camp session is designed to surface." },
      { question: "How cold is high camp?", answer: "Around -15°C overnight in season at 5,400 m, which is cold but not extreme by Khumbu standards. It is a single night, and the camp is more sheltered than Kyajo Ri's or Kwangde's because it sits in a hollow rather than on an open shoulder." },
      { question: "Why is the peak so rarely climbed?", answer: "Mostly obscurity. It has no famous ascent attached to it, it is not on any list of the classic trekking peaks, and everyone walking past it is on their way to Gokyo. That is precisely the recommendation — a technical 6,000 m summit in the busiest trekking region in Nepal that you will almost certainly have to yourself." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Phari Lapcha base camp (4,800 m) and high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Phari Lapcha, ${KHUMBU_PARK_FEES}.`,
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A skills-check day at base camp covering rock movement in crampons, fixed-rope ascent and abseil technique.",
        "Fixing of the rock step and the upper snow slopes by our climbing Sherpas ahead of the summit push.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
        "Porter and yak transport of camp and technical equipment from Machhermo to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 11,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary up the Gokyo valley to the mixed south-east ridge of Phari Lapcha (6,017 m), with acclimatisation at Namche, Dole and Machhermo, two nights at base camp and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per climber, all group rock and ice equipment, rope fixing and the skills day are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Phari Lapcha Peak Climbing (6,017 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Phari Lapcha (6,017 m) above Machhermo in the Gokyo valley — an AD- mixed route with a fixed rock step, one Sherpa per climber, and the best first technical peak in the Khumbu. 16 days.",
      keywords:
        "phari lapcha peak climbing, phari lapche 6017m, gokyo valley climbing, first technical peak nepal, machhermo climbing, AD- peak khumbu",
      tags: "Phari Lapcha, Gokyo Valley, Everest Region, Technical Climb, 6000m Peak, Mixed Route",
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
        "Rest is the only thing asked of you today. Thamel's technical gear shops are a short walk away and are worth a look if anything is missing.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The briefing runs through the sixteen-day plan and then the route itself — the glacier, the snow slopes, the <strong>rock step</strong> and the abseil descent, with a frank account of where parties turn back.",
        "The <strong>equipment check</strong> pays particular attention to boots and gloves, because the crux of this peak is rock climbed in crampons. Harnesses are fitted, axes and descenders inspected, and your climbing history discussed.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "Loads are sorted with the porters over tea, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong> past mani walls and water-driven prayer wheels.",
        "<strong>Phakding (2,610 m)</strong> lies below Lukla, which makes an easy first night at altitude. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and the trail then climbs 600 m — the first honest work of the trip, with a view of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, an ATM and the last gear shops before the valley. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Everest View Hotel (3,880 m)</strong> and on to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "The monastery at Khumjung keeps what it describes as a yeti scalp, and the hospital at Khunde was built by Edmund Hillary's foundation in 1966 and is still the referral point for the whole valley.",
        "The afternoon is free for the Sherpa Culture Museum and a coffee. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Dole (4,040 m)",
      elevation: "4,040 m",
      accommodation: "Dole",
      placeDescription: "A small lodge settlement in the Gokyo valley, above the last of the rhododendron forest.",
      ...DOLE,
      html: p(
        "The trail forks above Namche and this trip takes the left branch, into the <strong>Gokyo valley</strong> — quieter than the Everest Base Camp trail and, most people think, more beautiful.",
        "It climbs to <strong>Mong La (3,975 m)</strong>, a saddle with a chorten and a view down into the Dudh Koshi gorge, then drops steeply to Phortse Tenga and climbs again through rhododendron, birch and juniper.",
        "<strong>Dole (4,040 m)</strong> is a handful of lodges above the treeline where the valley begins to open out. Around 5 to 6 hours. Overnight at Dole.",
      ),
    },
    {
      title: "Trek from Dole (4,040 m) to Machhermo (4,470 m)",
      elevation: "4,470 m",
      accommodation: "Machhermo",
      placeDescription: "A summer grazing settlement below Phari Lapcha, with a rescue post run by the IPPG.",
      ...MACHHERMO,
      html: p(
        "A short day up a widening valley, climbing the eastern flank on a good trail with the walls of Kangtega and Thamserku behind and <strong>Cho Oyu</strong> beginning to show at the head of the valley.",
        "<strong>Machhermo (4,470 m)</strong> sits in a side valley below the peak. The village is known for a yeti sighting reported in 1974 and, more usefully, for the rescue post run by the International Porter Protection Group, which gives a free altitude talk each afternoon.",
        "Look up and south from the lodges: the rock pyramid above you is <strong>Phari Lapcha</strong>. Around 4 hours. Overnight at Machhermo.",
      ),
    },
    {
      title: "Trek from Machhermo (4,470 m) to Phari Lapcha Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Phari Lapcha Base Camp",
      placeDescription: "A tented base camp on moraine above Machhermo, beneath the south-east ridge.",
      ...PHARI_LAPCHA_BC,
      html: p(
        "A short day off the trekking trail. The route climbs west out of Machhermo into a side valley, on a yak path that gives out after an hour and becomes moraine and boulder ground.",
        "<strong>Phari Lapcha Base Camp (4,800 m)</strong> sits on a shelf below the <strong>south-east ridge</strong>, with the whole route visible from the mess tent — the glacier, the snow slopes and the dark band of the rock step near the top.",
        "The view the other way is the reason people remember this camp: across the Gokyo valley to <strong>Cho Oyu</strong>, Gyachung Kang and the grey sweep of the Ngozumpa glacier. Around 2 to 3 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Skills Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Phari Lapcha Base Camp",
      placeDescription: "The base camp below the ridge, where the rock and rope technique is checked.",
      ...PHARI_LAPCHA_BC,
      html: p(
        "A working day focused on the crux. On the rock outcrops above camp your guide runs each climber through <strong>moving on rock in crampons</strong>, standing on small holds in rigid boots, jumaring where the rope runs over an edge, and abseiling on a loaded line.",
        "This is also where exposure gets discussed honestly. The step is short and moderate, and it is airy; if that is going to be a problem, base camp is the place to find out.",
        "The Sherpas spend the day on the mountain <strong>fixing the step and the upper slopes</strong>. An acclimatisation walk to around 5,100 m closes the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,800 m) to Phari Lapcha High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Phari Lapcha High Camp",
      placeDescription: "A tented camp in a sheltered hollow at 5,400 m below the glacier and the ridge.",
      ...PHARI_HIGH_CAMP,
      html: p(
        "A steady 600 m on moraine and scree, three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,400 m)</strong> sits in a hollow rather than on an open shoulder, which makes it noticeably more sheltered than the high camps on Kyajo Ri and Kwangde and a good deal easier to sleep in.",
        "The afternoon is preparation — kit laid out, order of climbing set, an early dinner, and the final weather and turnaround call. Asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Phari Lapcha (6,017 m) and Descend to Base Camp (4,800 m)",
      elevation: "6,017 m",
      accommodation: "Phari Lapcha Base Camp",
      placeDescription: "The 6,017 m rock summit of Phari Lapcha, above Machhermo and the Gokyo valley.",
      ...PHARI_LAPCHA,
      html: p(
        "Moving by two in the morning. A short roped glacier crossing leads to the foot of the <strong>snow slopes</strong>, which run at 40 to 50 degrees for two to three hours on fixed rope, steepening as they go.",
        "Then the feature the whole climb is built around: a <strong>rock step of thirty to forty metres</strong>, moderate in grade and completely exposed, climbed in crampons on a jumar with the Gokyo valley a very long way below your boots. It is short, and most people talk about it for years.",
        "Above the step a snow arête leads to the <strong>summit (6,017 m)</strong> — small, rocky, room for two or three at a time — looking across at <strong>Cho Oyu</strong>, Gyachung Kang, Everest, Lhotse and Makalu, with the Ngozumpa glacier running south below.",
        "The descent abseils the step and the slopes on the same anchors. Eight to eleven hours in total to base camp. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Phari Lapcha Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...PHARI_LAPCHA_BC,
      html: p(
        "The day held in reserve, and on this peak the usual reason to need it is <strong>snow on the rock step</strong>. A centimetre of fresh powder on the ledges turns a thirty-minute pitch into a two-hour one, and that is enough to lose the summit against the turnaround time.",
        "If yesterday was cut short, the group returns to high camp today with the ropes still in place and climbs tomorrow. Your guide weighs the state of the party as much as the forecast.",
        "If the summit went to plan, the day is a rest at base camp, or an early start down to Machhermo and Namche to bank a spare day against the Lukla flights. Overnight at base camp or Machhermo.",
      ),
    },
    {
      title: "Trek from Phari Lapcha Base Camp (4,800 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent down the Gokyo valley.",
      ...NAMCHE,
      html: p(
        "Camp comes down after breakfast and the group descends to <strong>Machhermo</strong> and back onto the trekking trail, then down the Gokyo valley through <strong>Dole</strong> with the walls opening out behind.",
        "The steep drop to Phortse Tenga and the climb back to <strong>Mong La</strong> are the sting of the day, and then it is a long contour down to Namche with Ama Dablam ahead.",
        "<strong>Namche Bazaar (3,440 m)</strong> means hot water, a bakery and a beer after four nights in tents. Around 7 to 8 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb to <strong>Lukla (2,840 m)</strong>, always longer than it looks on the last day.",
        "The evening is the end-of-trip dinner with the guide, climbing Sherpas, cook crew and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays are routine rather than exceptional, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Phari Lapcha is a good stepping stone, and Kyajo Ri or Kwangde is usually the next question.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const nirekhaPeakClimbing: Climb = {
  region: "Everest Region",
  price: 3250,
  difficulty: "difficult",
  maxAltitude: 6159,
  grade: "AD-",
  center: [86.76, 27.93],
  zoom: 11,
  content: {
    slug: "nirekha-peak-climbing",
    title: "Nirekha Peak Climbing",
    overview:
      "<p><strong>Nirekha Peak (6,159 m)</strong> sits immediately above the <strong>Cho La</strong>, the pass that links the Khumbu valley to Gokyo, and it is one of the least-known permitted peaks in Nepal. It was opened to climbing only in 2002 and still receives a handful of parties a year, most of whom find they have the mountain, the glacier and the whole cirque entirely to themselves.</p><p>The route is a proper alpine line without being a desperate one: a crevassed glacier approach, <strong>snow and ice slopes of 45 to 55 degrees</strong> fixed on the steep sections, and a corniced summit ridge with the Cho La glacier falling away on one side and the Ngozumpa on the other. Graded <strong>AD-</strong>, it asks for competence rather than brilliance, and it rewards it with a summit view of <strong>Cholatse, Taboche, Ama Dablam, Everest and Cho Oyu</strong> from a top almost nobody has stood on.</p>",
    highlights: [
      ["Summit Nirekha Peak (6,159 m)", "A rarely climbed alpine summit above the Cho La, opened to climbing only in 2002."],
      ["Alpine Snow and Ice at AD-", "Crevassed glacier, 45–55° fixed slopes and a corniced summit ridge — a full alpine day, not a walk-up."],
      ["The Cho La Cirque to Yourself", "A base camp beneath one of the Khumbu's great passes, with almost no other climbing parties in the season."],
      ["Dzongla and the Chola Tsho", "Approach past the turquoise lake below Cholatse, on the quiet arm of the Khumbu valley."],
      ["One Sherpa Per Climber", "A one-to-one ratio above base camp for the fixed slopes and the abseil descent."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to mid-November</strong>. Nirekha is a snow and ice peak rather than a rock one, so both seasons work, but they present differently: spring gives softer, more forgiving snow on the slopes and heavier cornices on the summit ridge, autumn gives harder ice that takes crampon points cleanly and a cleaner, sharper ridge.</p><p>The <strong>Cho La approach</strong> is the extra factor. The pass and the cirque below it hold snow, and after a heavy storm the walk to base camp itself becomes hard work before any climbing starts. Mid-October to early November is the most consistently reliable window. The monsoon closes the ground entirely from June to mid-September, and winter is not viable for a guided ascent.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>AD-</strong>. From high camp the route crosses a <strong>crevassed glacier</strong> roped as a team — this is the part that most distinguishes Nirekha from a fixed-rope trekking peak, and the reason rope-team technique is drilled at base camp — and then climbs sustained <strong>snow and ice at 45 to 55 degrees</strong> for several hours on fixed line.</p><p>The summit ridge is narrow and <strong>corniced</strong>, taken one at a time, with the Cho La glacier dropping away east and the head of the Ngozumpa west. Summit day runs <strong>nine to twelve hours</strong> from high camp, with an abseil descent of the steep sections. Nothing on the route is technically hard in isolation; the difficulty is doing all of it, in sequence, at 6,000 m, and still having the concentration left for the abseils.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> or comparable alpine experience, and specifically for competence in <strong>roped glacier travel</strong> — crevasse rescue basics, correct spacing, and the discipline to keep the rope where it should be for hours. Island Peak or Mera alone is a thin background for this; Lobuche East or an alpine AD season is a better one.</p><p>The acclimatisation profile is the standard Khumbu one — Namche, Dingboche with the Nangkartshang climb, and then Dzongla at 4,830 m before base camp — with a training day and a reserve day built in. It is generous, and it needs to be, because summit day is long and the ground above high camp offers nowhere comfortable to stop and reconsider.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m</strong> is mandatory and is checked before the permit is issued. The wording must include <strong>roped glacier travel, graded climbing and abseiling</strong>. A policy that quotes a 6,000 m limit but excludes glacier travel covers none of this route, and that combination is more common than most travellers expect.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Base camp below the Cho La can be reached by helicopter in clear conditions, but the glacier and the upper slopes cannot, and an incident above high camp means the team lowering the casualty first. Dzongla is the nearest place with lodges, four hours away. We take your policy number and the insurer's 24-hour line in Kathmandu.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong> that take a technical crampon, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, technical gloves and mitts, a balaclava, category 4 glacier glasses, goggles, gaiters and a headlamp with lithium batteries.</p><p>We supply <strong>fixed and main ropes, ice screws, snow bars and anchors</strong>, and our Sherpas fix the steep slopes and the exposed sections of the summit ridge before the push. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu. On a route with several hours of sustained ice, a technical axe you have used before is worth bringing from home.</p>",
      },
    ],
    faqs: [
      { question: "Where exactly is Nirekha Peak?", answer: "Immediately north-west of the Cho La, the 5,420 m pass between Dzongla in the Khumbu valley and Thagnak on the Gokyo side. Base camp sits in the cirque below the pass, about four hours above Dzongla, and the peak rises directly from the glacier above it." },
      { question: "Do we cross the Cho La on this trip?", answer: "Not as part of the standard itinerary — we approach and return from the Dzongla side, which keeps the walk out shorter. Crossing to Gokyo after the climb and returning via Dole is a popular variation that adds three days and a great deal of scenery, and we are glad to quote it." },
      { question: "How does it compare with Lobuche East?", answer: "Similar in grade and length, and both are AD- to AD. Nirekha has more glacier travel and a longer sustained ice section; Lobuche East has the notch and false summit problem. Nirekha's real difference is solitude — you will very likely be the only party on it." },
      { question: "How crevassed is the glacier?", answer: "Enough to matter. The approach from high camp weaves between open crevasses on a route the Sherpas mark and check the day before, and the group moves roped with correct spacing throughout. It is the section we spend most of the base camp training day on." },
      { question: "What is the success rate?", answer: "Around 60 to 70 percent on our departures. The usual reasons for turning back are wind on the summit ridge, fresh snow slowing the glacier crossing, or a party arriving at the base of the steep slopes behind schedule. All of them are calls made against a fixed turnaround time." },
      { question: "Where is high camp and how cold is it?", answer: "At around 5,500 m on the moraine at the edge of the glacier, three to four hours above base camp. It is exposed and reaches -15°C to -20°C overnight in season. It is a single night — the route does not warrant a second camp." },
      { question: "Is there anywhere to bail out on summit day?", answer: "Not really, which is worth knowing in advance. Once the group is on the fixed slopes the options are up or a full abseil descent, and there is no sheltered ground between the glacier and the ridge. Your guide sets the turnaround time at high camp the night before for exactly this reason." },
      { question: "Can I combine Nirekha with Gokyo and Everest Base Camp?", answer: "Yes, and it makes an outstanding trip — Gokyo and Gokyo Ri first, over the Cho La to the climb, then down to Lobuche for Everest Base Camp and Kala Patthar. It runs to around 23 days. We build it to order rather than selling it off the shelf." },
      { question: "Why is Nirekha so rarely climbed?", answer: "Obscurity more than difficulty. It has no famous first ascent, it is not on the standard list of trekking peaks that operators market, and it was only opened in 2002. Anyone comparing it with Island Peak on a search engine will find a hundred times more written about the latter." },
      { question: "What is Dzongla like?", answer: "A tiny lodge settlement at 4,830 m on the way to the Cho La, above the turquoise Chola Tsho lake with the north face of Cholatse standing over it. Three or four lodges, no shops, and one of the best positions in the Khumbu. Most people passing through are pass-crossers rather than climbers." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Nirekha base camp (5,000 m) and high camp (5,500 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Nirekha Peak, ${KHUMBU_PARK_FEES}.`,
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A training day at base camp covering roped glacier travel, crevasse rescue basics, fixed-rope ascent and abseil technique.",
        "Marking and checking of the glacier route, and fixing of the steep slopes and summit ridge, by our climbing Sherpas.",
        "Group glacier and ice protection: ice screws, snow bars, anchors and all fixed and main ropes.",
        "Porter and yak transport of camp and technical equipment from Dzongla to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 12,
    gearRentalDays: 13,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 19-day itinerary to Nirekha Peak (6,159 m) above the Cho La, approached through Dingboche and Dzongla, with a training day, a high camp at 5,500 m and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per climber, all group glacier and ice equipment, rope fixing and the training day are included, while international flights, visa, technical mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Nirekha Peak Climbing (6,159 m) — 19 Days | Green Compass Treks",
      description:
        "Climb Nirekha Peak (6,159 m) above the Cho La, one of the least visited permitted peaks in Nepal. 19 days, AD- glacier and ice climbing, one Sherpa per climber, and a cirque you will have to yourself.",
      keywords:
        "nirekha peak climbing, nirekha 6159m, cho la peak climbing, rare peak climbing nepal, dzongla climbing, AD- peak khumbu",
      tags: "Nirekha Peak, Cho La, Everest Region, Technical Climb, 6000m Peak, Glacier Route",
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
        "Rest is the only item on the schedule. Thamel's technical gear shops are a few minutes away if anything is missing from your kit.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The briefing runs through the nineteen-day plan and then the route — the crevassed glacier, the fixed slopes, the corniced ridge and the abseil descent, with the turnaround time explained rather than announced.",
        "The <strong>equipment check</strong> covers boots and technical crampons, harnesses, axes and descenders. Your guide will also ask directly about your glacier experience, because rope-team competence is the entry requirement for this peak rather than a nice extra.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "Loads are sorted with the porters over tea, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong> past mani walls and prayer wheels turned by the river.",
        "<strong>Phakding (2,610 m)</strong> lies below Lukla, which makes an easy first night at altitude. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and beyond it the trail turns uphill for 600 m of steady work, with a first view of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, an ATM and the last serious gear shops. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong> and on to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "From the ridge above Khumjung the head of the valley opens out, and the wall running west from Cholatse — the ground you will be under in five days — is visible for the first time.",
        "The afternoon is free in Namche. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "Two hours of near-level balcony trail out of Namche, high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead almost the whole way.",
        "At Phunki Thenga the trail drops to the river and climbs 600 m through rhododendron and birch to the saddle — a long pull with the altitude beginning to tell.",
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
        "Down through <strong>Deboche</strong>, over the Imja Khola above a gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu.",
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
        "The key acclimatisation day. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep, non-technical, two to three hours on scree and rock.",
        "Reaching 5,000 m and sleeping 600 m below it is the mechanism that makes the summit possible. <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Taboche and Cholatse arranged around you.",
        "Back for a late lunch and rest. Four litres of water, more food than you feel like, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Dzongla (4,830 m)",
      elevation: "4,830 m",
      accommodation: "Dzongla",
      placeDescription: "A tiny lodge settlement above the Chola Tsho lake, beneath the north face of Cholatse.",
      ...DZONGLA,
      html: p(
        "North-west out of Dingboche onto a broad ridge, then along a high shelf above the Pheriche valley to <strong>Thukla (4,620 m)</strong> and the steep pull up the terminal moraine of the Khumbu glacier.",
        "The top of that climb is the <strong>Thukla memorial</strong>, a field of stone chortens for climbers lost on Everest and the peaks around it. From there the trail turns west, away from the Everest Base Camp route and its traffic.",
        "<strong>Dzongla (4,830 m)</strong> is three or four lodges on a shelf above the turquoise <strong>Chola Tsho</strong>, with the north face of <strong>Cholatse</strong> standing directly over it. It is one of the finest positions in the Khumbu. Around 5 to 6 hours. Overnight at Dzongla.",
      ),
    },
    {
      title: "Trek from Dzongla (4,830 m) to Nirekha Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Nirekha Base Camp",
      placeDescription: "A tented base camp in the cirque below the Cho La, at the foot of Nirekha Peak.",
      ...NIREKHA_BC,
      html: p(
        "A short day west from Dzongla on the Cho La trail, following the moraine into the cirque below the pass, and then leaving the trail for the flat ground where camp goes up.",
        "<strong>Nirekha Base Camp (5,000 m)</strong> sits under the peak with the glacier above it and the Cho La to the east. Pass-crossers walk by in the morning and are gone by ten; after that the cirque is yours.",
        "The afternoon is a <strong>first skills session</strong> — crampons, rope-team spacing and the abseil setup — on the ice below camp, with a fuller day tomorrow. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Nirekha Base Camp",
      placeDescription: "The base camp below the glacier, where rope-team and crevasse technique is drilled.",
      ...NIREKHA_BC,
      html: p(
        "The main training day, and on this peak it is dominated by <strong>glacier work</strong>. Rope-team travel with correct spacing, holding a fall, the basics of crevasse rescue with a hauling system, and probing and marking a route through broken ground.",
        "The reason is straightforward: several hours of your summit day are spent roped on a crevassed glacier in the dark, and that is a skill the fixed rope cannot substitute for.",
        "The afternoon adds fixed-line ascent and abseiling, then a short acclimatisation walk to around 5,300 m. Meanwhile the Sherpas are above, <strong>marking the glacier route and fixing the steep slopes</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (5,000 m) to Nirekha High Camp (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Nirekha High Camp",
      placeDescription: "A tented camp on moraine at the edge of the glacier at 5,500 m, below the climbing route.",
      ...NIREKHA_HIGH_CAMP,
      html: p(
        "A steady 500 m up moraine and scree to the lip of the glacier, three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,500 m)</strong> stands on rubble-covered moraine at the glacier edge, exposed and cold, with the route laid out above: the glacier crossing, the fixed slopes, and the ridge at the top of them.",
        "The afternoon is preparation. Kit is laid out, rope teams assigned, the order of climbing set, and your guide gives the weather call and the turnaround time. Early dinner, asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Nirekha Peak (6,159 m) and Descend to Base Camp (5,000 m)",
      elevation: "6,159 m",
      accommodation: "Nirekha Base Camp",
      placeDescription: "The 6,159 m summit of Nirekha Peak, on the ridge above the Cho La glacier.",
      ...NIREKHA_PEAK,
      html: p(
        "Roped and moving by one in the morning. The first two to three hours are the <strong>glacier crossing</strong>, weaving between crevasses on the line the Sherpas marked yesterday, moving as a team in the dark with the rope where it should be.",
        "At the far side the ground steepens into <strong>snow and ice at 45 to 55 degrees</strong>, climbed on fixed rope for several hours as the sky lightens over Makalu. It is sustained rather than desperate, and it goes on long enough to be the making or breaking of the day.",
        "The top of the slopes gives onto the <strong>corniced summit ridge</strong>, followed one at a time. From the <strong>summit (6,159 m)</strong>: <strong>Cholatse</strong> and Taboche immediately south, Ama Dablam beyond them, Everest and Lhotse east, and <strong>Cho Oyu</strong> over the Ngozumpa to the north-west.",
        "The descent abseils the fixed sections and reverses the glacier. Ten to thirteen hours to base camp. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Nirekha Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...NIREKHA_BC,
      html: p(
        "The day held in reserve. On Nirekha the reason to use it is usually fresh snow: new powder on the glacier hides the crevasse route the Sherpas marked and slows the crossing enough to lose the summit against the clock.",
        "If yesterday was turned back, the group returns to high camp today with the ropes and the glacier route already in place, and climbs tomorrow.",
        "If the summit went to plan, this is a rest day at base camp or an early start down toward Dzongla and Pheriche, banking a spare day against the Lukla flights. Overnight at base camp or Dzongla.",
      ),
    },
    {
      title: "Trek from Nirekha Base Camp (5,000 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, with a monastery said to date from the 1600s.",
      ...PANGBOCHE,
      html: p(
        "Camp comes down after breakfast and the group retraces east to <strong>Dzongla</strong> and down past the <strong>Thukla memorial</strong> chortens, then takes the steep descent beside the glacier snout into the Pheriche valley.",
        "Through <strong>Pheriche</strong>, where the Himalayan Rescue Association clinic gives its afternoon altitude talks, and on down the valley on a good trail beside the river.",
        "A gentle final climb reaches <strong>Pangboche (3,930 m)</strong>, where juniper and birch return and the air feels almost thick. Around 7 hours. Overnight at Pangboche.",
      ),
    },
    {
      title: "Trek from Pangboche (3,930 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached again on the walk out with the peak behind you.",
      ...NAMCHE,
      html: p(
        "Down through <strong>Deboche</strong> and up the short climb to the <strong>Tengboche</strong> saddle, worth a last stop at the monastery for the view of Ama Dablam.",
        "The steep descent to Phunki Thenga is hard on tired knees, and then the balcony trail contours back around the hillside toward Namche, high above the Dudh Koshi.",
        "<strong>Namche Bazaar (3,440 m)</strong> means a hot shower, a bakery and a beer after four nights in tents. Around 6 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, always longer than it looks on the last day.",
        "The evening is the end-of-trip dinner with the guide, climbing Sherpas, cook crew and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays are routine rather than exceptional, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Cholatse, which stood over your camp at Dzongla, is the usual next question from climbers who enjoyed this one.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const kusumKanguruPeakClimbing: Climb = {
  region: "Everest Region",
  price: 4450,
  difficulty: "extreme",
  maxAltitude: 6367,
  grade: "D",
  center: [86.76, 27.75],
  zoom: 11,
  content: {
    slug: "kusum-kanguru-peak-climbing",
    title: "Kusum Kanguru Peak Climbing",
    overview:
      "<p><strong>Kusum Kanguru (6,367 m)</strong> is officially a trekking peak, which is one of the more misleading pieces of classification in Nepalese mountaineering. It is widely regarded as the <strong>hardest of the NMA peaks</strong>, graded <strong>D</strong>, with a summit success rate far below any other peak in this catalogue and seasons in which nobody reaches the top at all. Its name means <em>three snow-white gods</em> in Sherpa, for the three summits on its long ridge.</p><p>Every trekker walking from Lukla toward Namche sees it — the sharp triple-summited peak filling the eastern side of the Dudh Koshi — and almost none of them realise it can be climbed at all. The route is a sustained mixed line of <strong>steep ice, rock steps and a knife-edge ridge</strong>, climbed with two camps above base and fixed rope on almost everything above 5,300 m. This is an expedition in everything but permit category, and we sell it to experienced alpinists only.</p>",
    highlights: [
      ["Summit Kusum Kanguru (6,367 m)", "The hardest trekking peak in Nepal, graded D and climbed by only a handful of parties each year."],
      ["Sustained Mixed Climbing", "Steep ice, rock steps and a knife-edge summit ridge, with fixed rope on almost everything above 5,300 m."],
      ["Two Camps Above Base", "A genuine expedition structure with an acclimatisation rotation before the summit push."],
      ["The Peak Above the Lukla Trail", "Climb the mountain that every Everest trekker walks beneath and almost nobody attempts."],
      ["One Sherpa Per Climber", "One-to-one support throughout, on ground where a rope team cannot move at a single pace."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to early November</strong>, and on this peak the window inside those seasons is narrower than usual. Kusum Kanguru needs <strong>settled, cold, stable weather</strong>: the ice has to be firm enough to take screws and tools, the rock steps have to be clear of loose snow, and the ridge has to be free of soft cornices.</p><p><strong>Autumn is the stronger season</strong>. Post-monsoon the ice is well formed and the rock is dry, whereas spring frequently loads the mixed sections with unconsolidated snow that turns the route into slow, dangerous work. The peak's low latitude and relatively low altitude also mean it warms fast in the sun, so climbing happens in the cold hours and stops early. We run a small number of departures a year and will cancel rather than push a party onto the route in poor conditions.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>D</strong> — two full grades above Island Peak and a category above Kyajo Ri or Kwangde. From base camp the route climbs a steep, broken glacier to <strong>Camp 1 at around 5,300 m</strong>, then continues on sustained ground to <strong>High Camp at 5,800 m</strong>, with fixed rope on almost every section.</p><p>Summit day involves <strong>ice at 50 to 60 degrees</strong>, short <strong>rock steps</strong> climbed in crampons with mixed technique, and a final <strong>knife-edge ridge</strong> that is corniced and exposed for its entire length. Ten to fourteen hours from high camp, with a long abseil descent that is arguably the most demanding part of the route. Objective hazard — rockfall on the mixed ground and serac danger low on the glacier — is real and is managed by timing rather than avoided.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>This is the most restrictive booking policy of any climb we offer. We require <strong>previous experience on graded alpine routes at AD+ or above</strong>, prior time at 6,000 m, and demonstrable competence leading or seconding on mixed ground. Climbers whose background is trekking peaks — Island, Mera, Lobuche — are not eligible, however fit they are, and we will say so.</p><p>You should be able to place and remove ice screws, move confidently on rock in crampons, abseil from a hanging stance, and manage yourself on a rope when you are tired and cold. Our guide will assess this on the training day at base camp and has the authority to stop a climber going above Camp 1. That is not a formality: on a route with this hazard profile, one climber moving badly slows everyone into the danger window.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>technical mountaineering to 6,500 m, including graded mixed climbing and abseiling</strong>, is mandatory, and this is the climb on which we most often reject policies. Standard adventure cover will not do. You want a policy written for alpinism — a national alpine club scheme or a specialist mountaineering insurer — and we ask for written confirmation naming the activity.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> are essential. Base camp is close to Lukla in map terms, which helps, but nothing above Camp 1 is reachable by aircraft, and a rescue from the ridge would be a technical operation by the climbing team over many hours. We require your policy number, the insurer's 24-hour line and a named emergency contact before the permit is issued.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Full technical kit. <strong>Rigid mountaineering boots</strong> and <strong>technical crampons with mono or dual points</strong>, a pair of <strong>technical ice tools</strong> rather than a walking axe, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full shell, softshell trousers, technical gloves in three weights, a helmet, category 4 glasses, goggles and a headlamp with lithium batteries.</p><p>We supply <strong>fixed and main ropes, ice screws, snow bars, rock protection and anchors</strong>, and our Sherpas fix the route in stages as the group rotates. <strong>Personal hardware can be rented</strong>, but on this peak we strongly prefer climbers to bring their own tools, crampons, harness and belay device. Rental kit is fine on a snow slope; on grade D mixed ground you want equipment you know.</p>",
      },
    ],
    faqs: [
      { question: "Why is a peak this hard classified as a trekking peak?", answer: "Because the NMA classification is administrative rather than technical — it reflects the permit category and the fee, not the difficulty. Kusum Kanguru sits on the trekking peak list alongside Pokalde, which is a scramble. The list tells you what paperwork you need, not what climbing you will do." },
      { question: "What is the realistic success rate?", answer: "Between 20 and 40 percent depending on the season, and there are years in which no commercial party summits. We publish that figure because the alternative is selling a trip on an expectation the mountain does not support. Climbers book this route for the climbing, not for a certificate." },
      { question: "Can I book this if I have climbed Island Peak and Mera?", answer: "No, and we will decline the booking. Those are excellent peaks and they are not preparation for grade D mixed ground. The honest progression is Island or Mera, then Lobuche East, then Kyajo Ri or Kwangde, and then this. Skipping steps here is how people get hurt." },
      { question: "How many camps are there above base?", answer: "Two — Camp 1 at around 5,300 m and High Camp at around 5,800 m — plus an acclimatisation rotation to Camp 1 and back before the summit push. That structure is why this is a seventeen-day trip for a peak only 200 m higher than Island Peak." },
      { question: "What are the objective hazards?", answer: "Rockfall on the mixed sections once the sun is on the face, and serac danger on the lower glacier. Both are managed by timing — moving through the exposed ground in the cold hours and being off it before mid-morning — which is why the turnaround times on this peak are earlier and stricter than elsewhere." },
      { question: "Is the whole route fixed?", answer: "Almost everything above 5,300 m, fixed by our Sherpas in stages as the group rotates. The exception is short connecting sections climbed as a roped pair. The descent abseils the same anchors, and managing that descent efficiently is a large part of what we assess on the training day." },
      { question: "Where is base camp?", answer: "At around 4,500 m in the Kusum Khola, the side valley running east from the Dudh Koshi below Monjo. It is a full tented camp with a cook crew, mess tent and toilet tent, about two days off the main Everest trail, and there is nobody else there." },
      { question: "How does the acclimatisation work with such a technical route?", answer: "Through Namche first, then a rotation: base camp to Camp 1, a night there, and back down to base camp to rest before the summit push. It is expedition practice applied to a 6,367 m peak, and it exists because you cannot afford to be short of breath on ground that demands precise movement." },
      { question: "What happens if a climber cannot go above Camp 1?", answer: "They descend to base camp with their Sherpa and wait. This is a decision the guide makes and it is not negotiable on the day. We tell every climber at booking that it can happen, so that if it does it is a known outcome rather than an argument at 5,300 m." },
      { question: "Do you run fixed departures for this peak?", answer: "A small number each season, and we are willing to cancel one if conditions are wrong or if the party that assembles is not strong enough. We would rather refund a trip than run a weak team on a grade D route, and we say so before taking a deposit." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation in the Kusum Khola, at base camp (4,500 m), Camp 1 (5,300 m) and High Camp (5,800 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Kusum Kanguru, ${KHUMBU_PARK_FEES}.`,
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp nights, and high-altitude food and fuel for the camps above.",
        "A full assessment and training day at base camp on mixed ground, ice tools, fixed-rope work and abseiling from hanging stances.",
        "Progressive fixing of the glacier, the ice slopes, the rock steps and the summit ridge by our climbing Sherpas.",
        "An acclimatisation rotation to Camp 1 before the summit push.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      extra: [
        "Personal technical ice tools, which we ask climbers to bring rather than rent for this route.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the route is unsafe.",
    },
    porterDays: 11,
    gearRentalDays: 13,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 17-day expedition-structured itinerary on Kusum Kanguru (6,367 m), the hardest trekking peak in Nepal, with two camps above base, an acclimatisation rotation, fixed ropes on grade D mixed ground and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per climber, all group rock and ice equipment, progressive rope fixing, the assessment day and the acclimatisation rotation are included, while international flights, visa, alpinism-grade insurance, personal ice tools and hardware, personal gear, city meals, tips and the cost of a cancelled or abandoned attempt are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Kusum Kanguru Peak Climbing (6,367 m) — 17 Days | Green Compass Treks",
      description:
        "Climb Kusum Kanguru (6,367 m), the hardest trekking peak in Nepal at grade D. 17 days with two camps above base, an acclimatisation rotation, fixed ropes on steep mixed ground and one Sherpa per climber. Experienced alpinists only.",
      keywords:
        "kusum kanguru climbing, kusum kanguru 6367m, hardest trekking peak nepal, grade D peak nepal, technical climbing khumbu, kusum khola",
      tags: "Kusum Kanguru, Everest Region, Technical Climb, 6000m Peak, Grade D, Expedition",
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
        "Rest is the only thing on today's schedule. If you have shipped or bought gear locally, this is the evening to unpack and lay it all out — tomorrow's check is detailed.",
        "Your climbing guide calls at the hotel to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is inspected in detail.",
      ...KATHMANDU,
      html: p(
        "The most searching briefing we give. Your guide takes the seventeen-day plan apart section by section: the glacier to Camp 1, the rotation, the mixed ground above High Camp, the ridge, the abseil descent, the turnaround times and the hazard windows.",
        "The <strong>equipment inspection</strong> is exactly that. Ice tools, crampons, harness, belay device and boots are all examined, and your guide will discuss your climbing history in specific terms — routes, grades and when. On a grade D peak this conversation determines what happens at base camp.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs, and takes copies of your insurance documents. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "As the aircraft turns on to final approach, the triple-summited peak filling the sky to the east is <strong>Kusum Kanguru</strong> itself. It is worth looking at properly now, because the next good view is from underneath it.",
        "Loads are sorted with the porters, and the trail drops north to <strong>Phakding (2,610 m)</strong> through Chaurikharka and Ghat. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance — the point where the Kusum Khola opens to the east.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and the trail then climbs 600 m to Namche.",
        "<strong>Namche Bazaar (3,440 m)</strong> is used here purely for acclimatisation — the route to base camp goes back down this valley in two days. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the acclimatisation stop before the Kusum Khola.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong> and across to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "From the ridge the whole south side of the Khumbu is visible, and your guide will point out the line of the route on Kusum Kanguru from a distance — the glacier, the shoulder where Camp 1 goes, and the ridge above it.",
        "The afternoon is free, and it is the last hot shower and cooked-to-order meal until the walk out. Your guide takes the first saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to the Kusum Khola (3,700 m)",
      elevation: "3,700 m",
      accommodation: "Kusum Khola Camp",
      placeDescription: "A tented camp in the forested side valley running east from the Dudh Koshi below Monjo.",
      ...KUSUM_KHOLA_CAMP,
      html: p(
        "Back down the valley you climbed yesterday, past the Hillary Bridge and through <strong>Jorsalle</strong> to <strong>Monjo</strong>, and then off the Everest trail entirely.",
        "The route turns east into the <strong>Kusum Khola</strong>, a steep forested side valley with a herders' path that fades to nothing after the first hour. It is a completely different environment from the trail you were on this morning — dense rhododendron, moss, and the noise of water.",
        "Camp goes up at around <strong>3,700 m</strong> in a clearing. From here on the group is self-contained, with everything carried in. Around 6 to 7 hours. Overnight in the Kusum Khola.",
      ),
    },
    {
      title: "Trek to Kusum Kanguru Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Kusum Kanguru Base Camp",
      placeDescription: "A tented base camp on moraine at the head of the Kusum Khola, below the glacier.",
      ...KUSUM_KANGURU_BC,
      html: p(
        "Steeply up out of the forest and onto open ground, gaining 800 m on rough terrain with the valley narrowing and the peak coming into view above the head of the cirque.",
        "<strong>Kusum Kanguru Base Camp (4,500 m)</strong> sits on moraine below the glacier, and the whole route is visible from it — the broken ice above, the shoulder where Camp 1 goes, the mixed ground, and the ridge running to the highest of the three summits.",
        "The afternoon is spent going over that line with your guide in detail, and resting. Camp is established properly today because the group will be based here for the best part of a week. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Assessment and Training Day at Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Kusum Kanguru Base Camp",
      placeDescription: "The base camp below the glacier, where each climber is assessed on technical ground.",
      ...KUSUM_KANGURU_BC,
      html: p(
        "The day that decides who climbs. On the ice and rock above camp, each climber works through <strong>ice tool technique, placing and removing screws, mixed movement in crampons, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your guide is assessing, not teaching. The question is whether you can do these things efficiently while cold and tired, because on the route there is no flat ground to sort yourself out on and every minute spent fumbling extends the hazard window.",
        "Anyone the guide is not satisfied with is told today, at base camp, and that decision stands. Meanwhile the Sherpas begin <strong>fixing the glacier and the lower slopes</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp on a rock shoulder above the glacier at 5,300 m.",
      ...KUSUM_HIGH_CAMP,
      html: p(
        "The first time on the route proper. The group climbs the <strong>broken glacier</strong> above base camp on fixed line, weaving through seracs and crevassed ground — the section with the most objective hazard on the mountain, which is why it is climbed early and left before the sun reaches it.",
        "Above the glacier a rock and snow shoulder gives the platform for <strong>Camp 1 (5,300 m)</strong>. Four to five hours, and it is a genuine climbing day rather than a walk with a load.",
        "The night here is the point of the exercise — sleeping at 5,300 m before returning to base camp is standard expedition practice and is what makes a summit push from 5,800 m realistic. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,300 m) to Base Camp (4,500 m) and Rest",
      elevation: "4,500 m",
      accommodation: "Kusum Kanguru Base Camp",
      placeDescription: "The base camp below the glacier, where the group rests before the summit push.",
      ...KUSUM_KANGURU_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, reaching base camp before the sun is on the seracs. Three to four hours.",
        "The rest of the day is genuine rest — eating, drinking, sleeping in thick air, and letting the acclimatisation from last night's altitude consolidate. Recovery at 4,500 m happens; at 5,300 m it does not.",
        "The Sherpas spend the day <strong>carrying loads and fixing the ground above Camp 1</strong> toward High Camp, so that the summit push moves onto rope that is already in place. Your guide reviews the forecast and sets the plan for the next three days. Overnight at base camp.",
      ),
    },
    {
      title: "Climb from Base Camp (4,500 m) to High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "High Camp",
      placeDescription: "A tented camp cut into the mixed ground at 5,800 m, below the summit ridge.",
      ...KUSUM_C2,
      html: p(
        "The summit push begins. An early start reverses the glacier to <strong>Camp 1</strong> and then continues onto the sustained ground above it — <strong>fixed ice and mixed sections</strong> that go on for several hours, considerably harder than anything below.",
        "<strong>High Camp (5,800 m)</strong> is a set of platforms cut into the mountainside, small, exposed and comfortless. There is room for the tents and nothing else. Seven to nine hours from base camp.",
        "Dinner is early and brief. Kit is laid out, rope pairs are set, and your guide gives the weather call and a <strong>hard turnaround time</strong> which will not be renegotiated in the morning. Overnight at High Camp.",
      ),
    },
    {
      title: "Summit Kusum Kanguru (6,367 m) and Descend to High Camp (5,800 m)",
      elevation: "6,367 m",
      accommodation: "High Camp",
      placeDescription: "The 6,367 m main summit of Kusum Kanguru, the highest of its three tops.",
      ...KUSUM_KANGURU,
      html: p(
        "Moving by midnight, because the ground above has to be climbed and descended before the sun loosens it. The route works up <strong>ice at 50 to 60 degrees</strong> on fixed line, broken by <strong>short rock steps</strong> taken in crampons with tools — the sections that make this a grade D route rather than an AD one.",
        "Above the mixed ground the <strong>knife-edge summit ridge</strong> begins, corniced and exposed along its whole length, climbed one at a time with the Dudh Koshi valley four thousand metres below on one side.",
        "The <strong>main summit (6,367 m)</strong> is the highest of the three tops the mountain is named for. The view runs from Everest and Lhotse north to Mera and the Hinku south, and includes the entire Lukla-to-Namche trail you walked at the start of the trip.",
        "The descent is a long sequence of <strong>abseils</strong> down the same anchors, and it is the part of the day that demands the most from a tired party. Twelve to sixteen hours round trip. Overnight at High Camp.",
      ),
    },
    {
      title: "Descend from High Camp (5,800 m) to Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Kusum Kanguru Base Camp",
      placeDescription: "The base camp below the glacier, reached on the descent from the summit.",
      ...KUSUM_KANGURU_BC,
      html: p(
        "Camp comes down and the group descends the whole route — the mixed ground, Camp 1, and then the glacier, timed once again to be off the serac ground before the sun.",
        "Everything above Camp 1 is abseiled and the fixed ropes are stripped as the team goes, which is slow and is not optional: leaving rope on a mountain is neither safe for the next party nor acceptable practice.",
        "<strong>Base camp (4,500 m)</strong> in the afternoon, with thick air, a hot meal and the first proper sleep in three days. Six to eight hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,500 m)",
      elevation: "4,500 m",
      accommodation: "Kusum Kanguru Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...KUSUM_KANGURU_BC,
      html: p(
        "The reserve day, and on this peak it is used more often than not. Kusum Kanguru turns parties back for wind, for fresh snow on the rock steps, and for simple loss of time on ground that does not allow hurrying.",
        "If the summit was missed and the party is strong enough, the group goes back up to High Camp today and climbs tomorrow, with the ropes still fixed. Your guide weighs the party's condition honestly — a team that came down exhausted does not go back up.",
        "If the summit went to plan, the day is spent resting at base camp or starting the walk out early. Given this peak's success rate, a party that used its reserve day and still stood on top has done something genuinely uncommon. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,500 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, reached in one long descent from the Kusum Khola.",
      ...LUKLA,
      html: p(
        "The whole approach in reverse, in a single long day. Down the moraine and into the forest of the <strong>Kusum Khola</strong>, then out to <strong>Monjo</strong> and back onto the Everest trail.",
        "South through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>. Eight to nine hours in total, and the last of it is on legs that have not been on flat ground for a week.",
        "The evening is the end-of-trip dinner with the guide, climbing Sherpas, cook crew and porters, and the point at which tips are given. On this route the crew fixed and stripped a grade D line; it is worth saying so out loud. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "As the aircraft climbs out of Lukla it turns beneath Kusum Kanguru, and from the window the ridge you were on two days ago is clearly visible. It is a better summit photograph than most people get from the top.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who get up Kusum Kanguru are generally ready for Ama Dablam or Cholatse, and we would be glad to talk about either.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const cholatseExpedition: Climb = {
  region: "Everest Region",
  price: 7500,
  difficulty: "extreme",
  maxAltitude: 6440,
  grade: "D",
  expedition: true,
  center: [86.77, 27.93],
  zoom: 11,
  content: {
    slug: "cholatse-expedition",
    title: "Cholatse Expedition",
    overview:
      "<p><strong>Cholatse (6,440 m)</strong> is the mountain that stops people on the trail to Everest Base Camp. Its <strong>north face</strong> rises 1,500 m above the Chola Tsho lake in a single sweep of ice and rock, and it has the kind of shape — sharp, symmetrical, unmistakable — that gets a peak onto book covers. It was first climbed in 1982 by Vern Clevenger, Galen Rowell, John Roskelley and Bill O'Connor by the south-west ridge, which is the route this expedition follows.</p><p>It is a serious undertaking. Graded <strong>D</strong>, the south-west ridge gives sustained mixed climbing on rock and ice, a long committing crest, and a summit day measured in the low double figures of hours. We run it as a <strong>proper expedition</strong> — two camps above base, an acclimatisation rotation, progressive rope fixing and a reserve day — over twenty-four days, and we take only climbers with alpine experience at AD+ and above.</p>",
    highlights: [
      ["Summit Cholatse (6,440 m)", "One of the most striking peaks in the Khumbu, first climbed in 1982 by its south-west ridge."],
      ["Sustained Grade D Mixed Climbing", "Rock and ice on a long committing crest, with fixed rope on the steep ground and a full abseil descent."],
      ["Expedition Structure", "Two camps above base, an acclimatisation rotation and a reserve day — not a compressed peak-climbing schedule."],
      ["Base Camp Above the Chola Tsho", "Camp beneath the north face, on the quiet arm of the Khumbu valley beyond the Everest Base Camp trail."],
      ["One Sherpa Per Climber", "One-to-one support on ground where rope teams cannot move at a single pace."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to early November</strong>. Cholatse rewards <strong>settled cold weather</strong> above everything else: the mixed sections need firm ice and dry rock, and the ridge needs to be free of soft cornices. A warm spell mid-route is more dangerous here than a cold snap.</p><p><strong>Autumn is the more reliable half of the year</strong>, with well-formed post-monsoon ice and clean rock. Spring can work superbly in a settled year and can be unclimbable in a snowy one, when the rock bands hold unconsolidated powder that neither takes protection nor clears. We run a small number of departures each season and will postpone or cancel rather than commit a party to the ridge in marginal conditions.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>D</strong>. From base camp the route gains a shoulder to <strong>Camp 1 at around 5,500 m</strong>, then follows increasingly technical ground to <strong>High Camp at 5,900 m</strong>. Above that the <strong>south-west ridge</strong> gives the climbing the mountain is known for: <strong>ice at 50 to 60 degrees</strong>, rock steps taken in crampons with tools, and a long, narrow, corniced crest that is exposed for its entire length.</p><p>Summit day runs <strong>twelve to sixteen hours</strong> from High Camp, and the descent is a long sequence of abseils on the same anchors. There is no easy ground and there is nowhere on the upper route to sit out bad weather. The commitment above High Camp is the defining feature of the climb, and it is why the turnaround time is set the night before and treated as fixed.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require <strong>alpine experience at AD+ or above</strong>, previous time at 6,000 m, and demonstrable competence on mixed ground — placing and removing ice screws, moving on rock in crampons, and abseiling from hanging stances while tired. A background of Himalayan trekking peaks alone does not qualify, and we will decline the booking rather than take the money.</p><p>The natural preparation is Lobuche East or Island Peak, then <strong>Kyajo Ri or Kwangde</strong>, then this. Physically, the demand is not explosive strength but the ability to keep making good decisions in hour thirteen of a summit day. Your guide assesses each climber on technical ground at base camp and has the authority to stop anyone going above Camp 1.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 6,500 m, including graded mixed climbing, fixed-rope work and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable on this expedition and we reject it regularly. A national alpine club policy or a specialist mountaineering insurer is what you want, and we ask for written confirmation naming the activity and the altitude.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. A helicopter can reach base camp in clear weather; it cannot reach Camp 1, High Camp or the ridge. An incident on the upper route means the team performing a technical lowering over many hours before any aircraft is involved. We hold your policy number, the insurer's 24-hour line and a named emergency contact from the Kathmandu briefing onward.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Full alpine kit. <strong>Rigid mountaineering boots</strong> and <strong>technical crampons</strong>, a pair of <strong>technical ice tools</strong>, a <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket, insulated over-trousers, a full shell, softshell trousers, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and a headlamp with lithium batteries.</p><p>We supply <strong>all fixed and main ropes, ice screws, snow bars, rock protection and anchors</strong>, and our Sherpas fix the route progressively as the team rotates. <strong>We ask climbers to bring their own tools, crampons, harness and belay device</strong> rather than rent them. On grade D ground, familiar equipment is a safety measure rather than a preference.</p>",
      },
    ],
    faqs: [
      { question: "Which route does this expedition climb?", answer: "The south-west ridge, the line of the 1982 first ascent by Clevenger, Rowell, Roskelley and O'Connor. It is the normal route and the only one guided commercially. The north face, the wall visible from the Everest Base Camp trail, is a hard technical objective that is not climbed on a guided expedition." },
      { question: "How does Cholatse compare with Ama Dablam?", answer: "Similar in seriousness and roughly comparable in grade, but with far less traffic and no fixed infrastructure left in place by other teams. Ama Dablam in season has multiple expeditions sharing fixed ropes; on Cholatse your team fixes its own line and is usually alone on the mountain. That makes it the harder logistical proposition even where the climbing is equivalent." },
      { question: "What is the success rate?", answer: "Around 40 to 50 percent on our departures, which is honest for a grade D peak with a long committing ridge. Weather on the crest and time lost on the mixed ground are the two usual reasons for turning back, and both are calls made against a fixed turnaround." },
      { question: "Why is the expedition twenty-four days for a 6,440 m peak?", answer: "Because the structure is what makes it safe. An acclimatisation rotation to Camp 1 and back, a rest day at base camp, progressive rope fixing by the Sherpas, and a reserve day all take time. Compressing that would raise the price of a shorter trip in a currency we are not willing to spend." },
      { question: "Where is base camp?", answer: "At around 4,900 m on moraine below the peak, reached from Dzongla in a few hours. It is a full expedition base camp with a mess tent, kitchen tent, toilet tent, storage tent and a cook crew, and it is the group's home for around ten days." },
      { question: "Do I need to lead climb?", answer: "No. The steep ground is fixed by our Sherpas and climbed on a jumar, and the connecting sections are climbed as a roped pair with the Sherpa in front. What you need is the movement skill and composure of someone who could lead at that grade, even if you never take the sharp end here." },
      { question: "Is Cholatse a Nepal Mountaineering Association peak or a Department of Tourism peak?", answer: "It sits on the NMA list rather than requiring a Department of Tourism royalty and a liaison officer, which keeps the paperwork and the cost well below a genuine 7,000 m or 8,000 m expedition. The climbing is closer to the expedition end than the permit category suggests." },
      { question: "What happens on the acclimatisation rotation?", answer: "The group climbs to Camp 1 at 5,500 m, sleeps there, and descends to base camp to rest for a day. It is standard expedition practice: you acclimatise at altitude and recover low. It also gives your guide a real look at how each climber moves on the route before committing to the summit push." },
      { question: "How exposed is the summit ridge?", answer: "Continuously, for hours. It is narrow, corniced on one side, and drops steeply on both. If exposure is something you manage rather than ignore, be honest with your guide at the assessment day — the ridge is not a place to discover a limit." },
      { question: "Can I combine Cholatse with anything else?", answer: "Not sensibly in one trip. It is a full expedition with a rotation and a reserve day and it uses the schedule it has. Climbers wanting two objectives are better served by our Island and Lobuche combinations; climbers wanting Cholatse should give it the twenty-four days." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,900 m with mess, kitchen, storage and toilet tents, plus tented Camp 1 (5,500 m) and High Camp (5,900 m).",
      permits: `Nepal Mountaineering Association climbing permit for Cholatse, ${KHUMBU_PARK_FEES}.`,
      guide:
        "Government-licensed expedition leader with Himalayan technical experience, with all equipment, wages and insurance.",
      sherpa: TECHNICAL_SHERPA,
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on mixed ground, ice tools, fixed-rope work and abseiling from hanging stances.",
        "Progressive fixing of the shoulder, the ice slopes, the rock steps and the summit ridge by our climbing Sherpas.",
        "An acclimatisation rotation to Camp 1 with a rest day at base camp before the summit push.",
        "Group rock and ice protection: ice screws, snow bars, rock anchors and all fixed and main ropes.",
        "Yak and porter transport of all expedition equipment between Namche and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical ice tools, crampons, harness and belay device, which we ask climbers to bring rather than rent for this route.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure postponed by us because the route is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 24-day expedition on the south-west ridge of Cholatse (6,440 m), with a full base camp, two camps above, an acclimatisation rotation, progressive rope fixing on grade D mixed ground and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the NMA climbing permit and park fees, an expedition leader with one Sherpa per climber, a base camp cook crew, all group rock and ice equipment, progressive rope fixing and the acclimatisation rotation are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, personal gear, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Cholatse Expedition (6,440 m) — 24 Days | Green Compass Treks",
      description:
        "Climb Cholatse (6,440 m) by the south-west ridge of the 1982 first ascent. A 24-day grade D expedition with two camps above base, an acclimatisation rotation, progressive rope fixing and one Sherpa per climber.",
      keywords:
        "cholatse expedition, cholatse 6440m, cholatse south west ridge, technical expedition nepal, khumbu expedition, grade D climbing nepal",
      tags: "Cholatse, Everest Region, Expedition, Technical Climb, 6000m Peak, South West Ridge",
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
        "Rest is the only item on the schedule. If you have shipped equipment ahead or bought hardware locally, unpack and lay everything out this evening — tomorrow's inspection is thorough and it is easier to find a missing screwgate now.",
        "Your expedition leader calls at the hotel to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Expedition Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is inspected in detail.",
      ...KATHMANDU,
      html: p(
        "A long working morning. Your leader takes the twenty-four day plan apart: the approach, the base camp period, the rotation to Camp 1, the rest day, the summit push from High Camp, the ridge, the abseil descent, and the reserve day.",
        "The <strong>equipment inspection</strong> covers ice tools, crampons, boots, harness, belay device and helmet, and your leader will go through your climbing history in specific terms — routes, grades and dates. That conversation sets expectations for the assessment day at base camp.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs, and takes copies of your insurance. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "The expedition barrels are weighed and distributed among the porters over tea, which takes longer than it does on a lodge-based trip because there is a great deal more of it.",
        "The trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong> to <strong>Phakding (2,610 m)</strong>, past mani walls and water-driven prayer wheels. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and the trail turns uphill for 600 m of steady work, with a first view of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> is where the yaks are engaged for the carry to base camp, and where the leader makes the last equipment purchases. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the expedition.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong> and across to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "From the ridge above Khumjung, <strong>Cholatse</strong> is visible at the head of the valley — the sharp pyramid west of Taboche — and your leader will trace the south-west ridge from here, which is a good deal easier to follow at this distance than it will be from underneath.",
        "The afternoon is free. Your leader takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "Two hours of near-level balcony trail out of Namche, high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead almost the whole way.",
        "At Phunki Thenga the trail drops to the river and climbs 600 m through rhododendron and birch to the saddle.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu. Expedition teams have taken a blessing here before climbing for as long as there have been expeditions, and the afternoon ceremony is open to visitors. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, over the Imja Khola above a gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu.",
        "Above Pangboche the trees give out and the valley opens into a wide grey trough of moraine and grazing land, walled by Ama Dablam, Lhotse and Taboche.",
        "<strong>Dingboche (4,410 m)</strong> sits among stone-walled potato and barley fields at the junction of two valleys. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above it.",
      ...DINGBOCHE,
      html: p(
        "The standard Khumbu acclimatisation climb: the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong>, steep and non-technical, two to three hours on scree and rock.",
        "<strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Taboche and <strong>Cholatse</strong> around you. From here the north face — the wall everyone photographs from the Chola Tsho — is directly in view.",
        "Back for a late lunch and rest, with an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Dzongla (4,830 m)",
      elevation: "4,830 m",
      accommodation: "Dzongla",
      placeDescription: "A tiny lodge settlement above the Chola Tsho lake, beneath the north face of Cholatse.",
      ...DZONGLA,
      html: p(
        "North-west onto a broad ridge, then along the shelf above the Pheriche valley to <strong>Thukla (4,620 m)</strong> and the steep climb up the terminal moraine of the Khumbu glacier.",
        "The top of the climb is the <strong>Thukla memorial</strong>, a field of chortens for climbers lost on Everest and the peaks around it — a sober place to walk through two days before going onto your own mountain.",
        "From there the trail turns west off the Everest Base Camp route to <strong>Dzongla (4,830 m)</strong>, three or four lodges on a shelf above the turquoise <strong>Chola Tsho</strong>, with the <strong>north face of Cholatse</strong> filling the sky directly opposite. Around 5 to 6 hours. Overnight at Dzongla.",
      ),
    },
    {
      title: "Trek from Dzongla (4,830 m) to Cholatse Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The expedition base camp on moraine beneath the south-west ridge of Cholatse.",
      ...CHOLATSE_BC,
      html: p(
        "A short day round the flank of the mountain from the north side to the south-west, on moraine and boulder ground with no trail.",
        "<strong>Cholatse Base Camp (4,900 m)</strong> is established properly today — mess tent, kitchen tent, storage tent, toilet tent and the sleeping tents — because this is home for the next ten days.",
        "The afternoon is spent settling in and studying the route. From here the <strong>south-west ridge</strong> is laid out in full: the shoulder where Camp 1 goes, the mixed ground above it, and the long corniced crest running to the summit. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Assessment and Training Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on technical ground.",
      ...CHOLATSE_BC,
      html: p(
        "The day that decides who goes above Camp 1. On rock and ice near camp each climber works through <strong>ice tool placement, screws, mixed movement in crampons, jumaring on a loaded line over edges, and abseiling from a hanging stance</strong>.",
        "Your leader is assessing efficiency under fatigue rather than best-case technique. On a route with a twelve to sixteen hour summit day and a long abseil descent, minutes lost fumbling with a device compound into hours.",
        "Anyone the leader is not satisfied with is told today. Meanwhile the Sherpas begin <strong>fixing the ground toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp on the shoulder of the south-west ridge at 5,500 m.",
      ...CHOLATSE_HIGH_CAMP,
      html: p(
        "The first time on the route proper. The climb to <strong>Camp 1 (5,500 m)</strong> takes five to six hours up the shoulder, on snow and rock with fixed line on the steeper sections, carrying a personal load while the Sherpas move the camp gear.",
        "The camp is a handful of platforms on the crest of the shoulder, exposed and with a view straight down onto base camp and across the valley to Ama Dablam.",
        "Sleeping here is the whole purpose of the day. A night at 5,500 m is what makes a push from 5,900 m realistic a week from now, and it also lets your leader watch how each climber moves under load on the actual route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,500 m) to Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...CHOLATSE_BC,
      html: p(
        "Down the fixed ropes to base camp in three to four hours, arriving in time for a long lunch and an afternoon of doing nothing at all.",
        "Descending to recover is not a concession, it is the mechanism: your body consolidates the adaptation from last night's altitude far more effectively at 4,900 m than it would at 5,500 m, and the difference shows up on summit day.",
        "The Sherpas continue <strong>carrying loads and fixing the ground above Camp 1</strong> toward High Camp while the climbing team rests. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The expedition base camp, on the rest day before the summit push.",
      ...CHOLATSE_BC,
      html: p(
        "A full rest day, and on an expedition these are worked at rather than enjoyed passively. Eating properly, drinking four litres, sleeping in the afternoon and keeping the legs still are all part of arriving at High Camp with something left.",
        "Practically, the day is also the final preparation. Personal kit is sorted into what goes up and what stays, rope pairs are confirmed, radios are checked, and your leader briefs the three-day push with timings for each stage.",
        "The weather forecast arrives by satellite in the evening and the go or no-go decision for tomorrow is made on it. Overnight at base camp.",
      ),
    },
    {
      title: "Climb from Base Camp (4,900 m) to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "The camp on the shoulder of the south-west ridge, occupied again for the summit push.",
      ...CHOLATSE_HIGH_CAMP,
      html: p(
        "The summit push begins. The same ground as the rotation, and it feels markedly easier — five hours becomes four, and the sections that took concentration a week ago are now familiar.",
        "That difference is the whole argument for the rotation, and it is worth noticing as it happens.",
        "<strong>Camp 1 (5,500 m)</strong> is reoccupied in the early afternoon. An easy evening, plenty of fluid, and an early night. Your leader confirms tomorrow's timings and load split before dinner. Overnight at Camp 1.",
      ),
    },
    {
      title: "Climb from Camp 1 (5,500 m) to High Camp (5,900 m)",
      elevation: "5,900 m",
      accommodation: "High Camp",
      placeDescription: "A tented high camp at 5,900 m cut into the ridge below the summit crest.",
      ...CHOLATSE_HIGH_CAMP,
      html: p(
        "A short day in distance and a serious one in character. The ground above Camp 1 is where Cholatse becomes a grade D route — <strong>sustained ice and rock steps</strong> on fixed line, climbed with tools rather than a walking axe.",
        "Four to five hours brings the team to <strong>High Camp (5,900 m)</strong>, a set of small platforms cut into the ridge with barely room for the tents and nothing resembling shelter.",
        "Dinner is early and minimal — appetite at 5,900 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs set, and your leader gives the weather call and a <strong>fixed turnaround time</strong> that will not be renegotiated in the dark. Overnight at High Camp.",
      ),
    },
    {
      title: "Summit Cholatse (6,440 m) and Descend to Camp 1 (5,500 m)",
      elevation: "6,440 m",
      accommodation: "Camp 1",
      placeDescription: "The 6,440 m summit of Cholatse, reached by the south-west ridge of the 1982 first ascent.",
      ...CHOLATSE,
      html: p(
        "Moving by midnight. The route above High Camp climbs <strong>ice at 50 to 60 degrees</strong> on fixed rope, broken by <strong>rock steps taken in crampons with tools</strong>, for several hours in the dark and cold.",
        "Above the mixed ground the <strong>summit crest</strong> begins — long, narrow, corniced, and exposed for its entire length, with the north face dropping 1,500 m to the Chola Tsho on one side. It is climbed one at a time, and it takes as long as it takes.",
        "The <strong>summit (6,440 m)</strong> is small and the view is the best argument for the whole trip: Everest, Lhotse and Nuptse east, Ama Dablam south, Cho Oyu and the Ngozumpa north-west, and the Khumbu laid out beneath a peak most of the people down there have photographed and none have climbed.",
        "The descent is a long sequence of <strong>abseils</strong> down the same anchors to High Camp, and then on down to <strong>Camp 1</strong> if the party has the time and the legs. Fourteen to eighteen hours. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,500 m) to Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...CHOLATSE_BC,
      html: p(
        "Down the fixed ropes to base camp in three to four hours, stripping the rope as the team descends — leaving fixed line on a mountain is neither safe for the next party nor acceptable practice, and it takes time to do properly.",
        "<strong>Base camp (4,900 m)</strong> in the middle of the day, with thick air, a hot meal, a wash and the first unbroken sleep in four days.",
        "The Sherpas complete the strip and the camp clear-out over the afternoon. Everything that came up the mountain comes back down it. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Cholatse Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...CHOLATSE_BC,
      html: p(
        "The reserve day. On a peak with a long committing crest, the usual reason to need it is wind rather than storm — a ridge that is unclimbable at forty knots is perfectly reasonable at fifteen, and the difference can be twenty-four hours.",
        "If the summit was missed and the team is strong enough, the group returns up the fixed ropes today and pushes tomorrow. Your leader weighs the party's condition as heavily as the forecast; a team that came down at the end of its reserves does not go back up.",
        "If the summit went to plan, the day is rest at base camp or an early start down the valley, banking a spare day against the Lukla flights. Overnight at base camp or Dzongla.",
      ),
    },
    {
      title: "Trek from Cholatse Base Camp (4,900 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, with a monastery said to date from the 1600s.",
      ...PANGBOCHE,
      html: p(
        "Base camp comes down and goes onto yaks, and the team walks out east past <strong>Dzongla</strong> and down past the <strong>Thukla memorial</strong> chortens to the Pheriche valley.",
        "Through <strong>Pheriche</strong>, where the Himalayan Rescue Association clinic runs its afternoon altitude talks, and on down the valley on a good trail beside the river.",
        "A gentle final climb reaches <strong>Pangboche (3,930 m)</strong>, where juniper and birch return and the air feels almost thick. Around 7 hours. Overnight at Pangboche.",
      ),
    },
    {
      title: "Trek from Pangboche (3,930 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached again on the walk out with the peak behind you.",
      ...NAMCHE,
      html: p(
        "Down through <strong>Deboche</strong> and up the short climb to the <strong>Tengboche</strong> saddle, where it is worth stopping at the monastery again on the way out as well as the way in.",
        "The steep descent to Phunki Thenga tests tired knees, and then the balcony trail contours back around the hillside toward Namche, high above the Dudh Koshi.",
        "<strong>Namche Bazaar (3,440 m)</strong> means a hot shower, a bakery and a beer after ten days of expedition food. Around 6 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, which always feels longer on the last day.",
        "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
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
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who summit Cholatse are ready for Ama Dablam and, for a good many of them, for Baruntse or Himlung after that.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const thamserkuExpedition: Climb = {
  region: "Everest Region",
  price: 8500,
  difficulty: "extreme",
  maxAltitude: 6623,
  grade: "TD-",
  expedition: true,
  center: [86.77, 27.8],
  zoom: 11,
  content: {
    slug: "thamserku-expedition",
    title: "Thamserku Expedition",
    overview:
      "<p><strong>Thamserku (6,623 m)</strong> is the enormous fluted wall that stands over Namche Bazaar and Kyangjuma, and it is one of the least-climbed significant peaks in the Khumbu. It was first ascended in <strong>1964 by a New Zealand team</strong> led by Lyn Crawford, and in the sixty years since it has seen a tiny number of successful ascents — some seasons none at all. Almost everyone who looks at it decides it is a mountain to photograph rather than climb.</p><p>The reason is written on the face: <strong>steep flutings of snow and ice</strong> that hold indifferently, corniced ridges, and objective hazard that has to be timed rather than avoided. Graded <strong>TD-</strong>, this is the hardest climb in our catalogue below the 8,000 m peaks, and we run it as a full expedition with two camps above base, an acclimatisation rotation and a reserve day. It is offered to experienced alpinists only, and we would rather turn away a booking than assemble a weak team on this face.</p>",
    highlights: [
      ["Summit Thamserku (6,623 m)", "One of the least-climbed major peaks in the Khumbu, first ascended by a New Zealand team in 1964."],
      ["Grade TD- Alpine Climbing", "Steep flutings, sustained ice and corniced ridges — the hardest route we guide below the 8,000 m peaks."],
      ["A Full Expedition Structure", "Two camps above base, an acclimatisation rotation, progressive rope fixing and two reserve days over 23 days."],
      ["The Wall Above Namche", "Climb the peak that dominates the view from the Sherpa capital and the Tengboche trail."],
      ["One Sherpa Per Climber", "One-to-one support throughout, with high-altitude Sherpas experienced on technical Khumbu ground."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>Late April to May</strong> and <strong>October to early November</strong>, within which the usable window is narrow. Thamserku needs <strong>cold, still, settled weather</strong>: the flutings have to be frozen hard enough to take tools and screws, and the cornices have to be solid. A warm afternoon on this face is an active hazard, not an inconvenience.</p><p><strong>Autumn</strong> generally offers the better ice, but the peak is genuinely condition-dependent in both seasons and there are years when neither window produces a climbable face. We run one or two departures a year and treat cancellation as a normal outcome rather than a failure. Anyone booking should plan the trip on the assumption that the mountain may not be in condition.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>TD-</strong>. Above base camp the route climbs a glacier and a steepening face to <strong>Camp 1 at around 5,600 m</strong>, and then onto the technical ground: <strong>ice and snow flutings at 55 to 70 degrees</strong>, with short steeper steps, leading to <strong>High Camp at around 6,100 m</strong> on whatever platform can be cut.</p><p>Summit day follows the upper flutings and a <strong>heavily corniced ridge</strong>, and runs <strong>twelve to eighteen hours</strong> with a long abseil descent. There is no easy ground above Camp 1, nowhere to shelter, and no realistic option other than up or a full technical retreat. The snow quality on the flutings is the crux and it is unpredictable: what takes a tool cleanly in the morning can be unprotectable by afternoon.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>The strictest requirements we set. We ask for <strong>alpine experience at D or above</strong>, previous 6,000 m Himalayan climbing, and proven competence on <strong>steep ice</strong> — Scottish winter grade IV or V, or equivalent water and alpine ice. Climbers whose hardest route is AD+ are not eligible for this expedition, and we say so at enquiry rather than at base camp.</p><p>You should be able to place screws quickly on steep ground, climb efficiently with two tools, abseil from hanging stances, and manage a rope system while cold and tired. Your leader assesses this on technical ground at base camp and has absolute authority to stop a climber going above Camp 1. On a face this exposed, one slow climber puts the whole team in the hazard window for longer.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,000 m, including steep ice, graded mixed climbing and abseiling</strong>, is mandatory. Ordinary adventure travel cover is not acceptable and we reject it as a matter of course on this expedition. A national alpine club scheme or a specialist mountaineering insurer is the realistic option, and we require written confirmation naming the activity.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included, with a high enough limit to be meaningful. A helicopter can reach base camp in clear weather; nothing above it is reachable. A rescue from the flutings would be a long technical operation by the climbing team, and the honest position is that self-rescue capability is part of what the team brings rather than something bought in.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Full technical alpine kit and no compromises. <strong>Rigid mountaineering boots</strong>, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and over-trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles, and a headlamp with lithium batteries and a spare unit.</p><p>We supply <strong>all fixed and main ropes, ice screws, snow stakes, rock protection and anchors</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates</strong> — this is a requirement rather than a preference on this expedition, and rental hardware is not offered for the technical sections.</p>",
      },
    ],
    faqs: [
      { question: "How often is Thamserku actually climbed?", answer: "Rarely. A handful of ascents in most decades, and seasons in which nobody reaches the summit. It is not a peak with a well-trodden line, established camp platforms or fixed rope left by other teams, and every expedition on it fixes its own route from the bottom." },
      { question: "Is this harder than Ama Dablam?", answer: "Yes, and by a clear margin. Ama Dablam in season has multiple teams sharing fixed rope on a known line; Thamserku has steeper, less reliable ice, no infrastructure, and far more uncertainty about whether the face is in condition at all. TD- against AD+ is roughly the difference." },
      { question: "What is the realistic summit success rate?", answer: "Low, and we will not quote a flattering number. Across recent departures fewer than one in three parties has summited, and cancellations for conditions are common. Climbers book this expedition for the climbing and the rarity of the objective, not for a high probability of standing on top." },
      { question: "What are the main hazards?", answer: "Unreliable snow on the flutings, which can be unprotectable; cornice collapse on the upper ridge; and avalanche risk after new snow. All three are managed by timing and by conservative turnaround decisions, and all three are reasons a leader may abandon an attempt that looks feasible from below." },
      { question: "Why do you sometimes cancel departures?", answer: "Because the face is not always in condition, and running an expedition onto unclimbable ground helps nobody. If our leader and Sherpa team judge the flutings unsafe before the group commits above Camp 1, we stop. We say this at booking so it is an expected outcome rather than a dispute." },
      { question: "What experience will you actually accept?", answer: "Alpine routes at D or above, previous Himalayan climbing at 6,000 m, and steep ice at Scottish IV or V or equivalent. We will ask for a climbing CV with routes and dates, and we will decline applications that do not meet it. It is the only booking policy we apply this firmly." },
      { question: "Where are the camps?", answer: "Base camp at around 4,600 m on moraine below the glacier, Camp 1 at around 5,600 m at the top of the approach face, and High Camp at around 6,100 m on cut platforms in the flutings. The upper two are small, exposed and improvised — there is no established site to inherit." },
      { question: "Do I need to lead?", answer: "Not in the sense of taking the sharp end on new ground — our Sherpas fix the route ahead of the team. But you need the movement competence of a climber who could lead at that grade, because jumaring on steep flutings in poor snow demands the same footwork and composure as leading does." },
      { question: "How long is the summit day?", answer: "Twelve to eighteen hours from High Camp, with the descent by abseil taking a large share of it. A turnaround time is set the night before and it is not negotiable. Parties are more often defeated by that clock than by any single section of the route." },
      { question: "Can I book this as a private expedition?", answer: "Yes, and it is often the better arrangement — a rope of two or three climbers who already know each other is a stronger team on this ground than a group assembled from individual bookings. We are glad to quote a private expedition and to discuss the objective honestly first." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m with mess, kitchen, storage and toilet tents, plus tented Camp 1 (5,600 m) and High Camp (6,100 m).",
      permits: `Nepal Mountaineering Association climbing permit for Thamserku, ${KHUMBU_PARK_FEES}.`,
      guide:
        "Government-licensed expedition leader with technical Himalayan experience, with all equipment, wages and insurance.",
      sherpa:
        "One high-altitude climbing Sherpa for every climber above base camp, selected for technical experience, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "Progressive fixing of the approach face, the flutings and the summit ridge by our climbing Sherpas.",
        "An acclimatisation rotation to Camp 1 with a rest day at base camp before the summit push.",
        "Group ice and rock protection: screws, snow stakes, anchors and all fixed and main ropes.",
        "Yak and porter transport of all expedition equipment between Namche and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — ice tools, crampons, harness, belay device and screwgates — which climbers must bring rather than rent for this expedition.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the face is not in climbable condition.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 23-day expedition on Thamserku (6,623 m), a grade TD- route on steep flutings above Namche, with two camps above base, an acclimatisation rotation, progressive rope fixing and a reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the NMA climbing permit and park fees, an expedition leader with one technical Sherpa per climber, a base camp cook crew, all group ice and rock equipment, progressive rope fixing and the acclimatisation rotation are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, personal gear, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Thamserku Expedition (6,623 m) — 23 Days | Green Compass Treks",
      description:
        "Climb Thamserku (6,623 m), the rarely ascended fluted peak above Namche, on a 23-day grade TD- expedition with two camps above base, an acclimatisation rotation and one technical Sherpa per climber. Experienced alpinists only.",
      keywords:
        "thamserku expedition, thamserku 6623m, technical expedition nepal, khumbu steep ice, rarely climbed peaks nepal, TD grade climbing",
      tags: "Thamserku, Everest Region, Expedition, Technical Climb, Steep Ice, Namche",
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
        "Rest is the only item on the schedule. Unpack and lay out your technical equipment this evening — tomorrow's inspection is the most detailed we run, and a missing screwgate is easier to solve in Thamel than at 6,100 m.",
        "Your expedition leader calls at the hotel to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Expedition Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is inspected in detail.",
      ...KATHMANDU,
      html: p(
        "A long and frank morning. Your leader takes the twenty-three day plan apart, and then talks about the face itself — the flutings, the snow quality problem, the cornices, and the honest probability that the mountain will not be in condition.",
        "The <strong>equipment inspection</strong> covers tools, crampons, boots, harness, belay device, screwgates and helmet, and your leader will go through your climbing CV route by route. This is the conversation that determines what happens at base camp.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs, and takes copies of your alpinism insurance. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "The expedition barrels are weighed and distributed among the porters over tea, which takes a while: a self-fixing expedition carries a great deal of rope and hardware.",
        "The trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong> to <strong>Phakding (2,610 m)</strong>. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, with the fluted wall of Thamserku filling the eastern skyline.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges across the Dudh Koshi, then a climb through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and the trail then climbs 600 m to Namche.",
        "Arriving in <strong>Namche Bazaar (3,440 m)</strong>, the enormous fluted wall to the east is <strong>Thamserku</strong>. It is the view from every lodge window in town, and studying it from here for two days is a useful part of the expedition. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, directly opposite the Thamserku face.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong> and across to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha.",
        "The height gained also gives the best reconnaissance of the trip. From the ridge the <strong>flutings</strong> are visible in detail through binoculars, and your leader spends time here reading their condition — how much snow is sitting on them, how well it looks bonded, and where the cornices are.",
        "The afternoon is free. Your leader takes the first saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Thamserku Approach Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Thamserku Approach Camp",
      placeDescription: "A tented camp above Kyangjuma, on the flank of the Thamserku massif.",
      ...KYANGJUMA,
      html: p(
        "East out of Namche on the Tengboche balcony trail as far as <strong>Kyangjuma</strong>, and then off it entirely, climbing south into the side valley below the massif.",
        "The path is a yak track that fades quickly into open hillside and moraine, steep and trackless in places, with the wall rising directly overhead.",
        "Camp goes up at around <strong>4,200 m</strong>. From here the group is self-contained — tents, cook crew and every kilo of rope and hardware carried in. Around 5 hours. Overnight at the approach camp.",
      ),
    },
    {
      title: "Trek to Thamserku Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp on moraine below the Thamserku glacier and the approach face.",
      ...THAMSERKU_BC,
      html: p(
        "A short day onto the moraine below the glacier, gaining 400 m on boulder ground with the cirque closing in on three sides.",
        "<strong>Thamserku Base Camp (4,600 m)</strong> is established properly today — mess, kitchen, storage and toilet tents alongside the sleeping tents — because it is home for the next twelve days.",
        "The afternoon is spent reading the route from underneath, which always looks different from the reconnaissance at Namche. Your leader and the Sherpa team agree the line for the approach face and Camp 1. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Assessment and Technical Training Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...THAMSERKU_BC,
      html: p(
        "The day that determines the team. On steep ice near camp each climber is put through <strong>two-tool movement, screw placement on vertical ground, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your leader is looking at speed and economy, not maximum grade. On flutings where the snow may be marginal, the climber who moves smoothly and places gear quickly is safe and the climber who is strong but slow is not.",
        "Anyone the leader is not satisfied with is told today and does not go above Camp 1. Meanwhile the Sherpas start <strong>fixing the approach face</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation and Load Carry Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, on the second preparation day before the rotation.",
      ...THAMSERKU_BC,
      html: p(
        "An easier day, split between acclimatisation and work. In the morning the team walks up the moraine to around <strong>5,000 m</strong> and back, gaining and losing height on ground that asks nothing technical.",
        "In the afternoon climbers carry a personal load part-way up the fixed approach face and cache it — useful acclimatisation, useful practice on the rope, and it lightens tomorrow.",
        "The Sherpas continue fixing above. Your leader reviews the satellite forecast in the evening and confirms the rotation plan. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,600 m at the top of the approach face, below the flutings.",
      ...THAMSERKU_HIGH_CAMP,
      html: p(
        "The first serious climbing day. The <strong>approach face</strong> is fixed and steep, and it takes six to seven hours on the ropes with a personal load — glacier, then snow and ice at increasing angle.",
        "<strong>Camp 1 (5,600 m)</strong> sits on cut platforms at the top of it, small and exposed, with the flutings rising directly above and the whole Dudh Koshi valley below.",
        "The night here is the point. It also gives your leader a proper look at how each climber performs on the actual medium — steep fixed ice at altitude — before the team commits any higher. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,600 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...THAMSERKU_BC,
      html: p(
        "Down the fixed ropes by abseil in three to four hours, off the face before the sun has been on it long.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,600 m than it would higher, and a team that rests properly now is a faster team on the flutings later.",
        "The Sherpas spend the day carrying loads and <strong>fixing into the flutings</strong> toward High Camp. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, on the first of two rest days before the summit push.",
      ...THAMSERKU_BC,
      html: p(
        "A genuine rest day, worked at rather than enjoyed. Eating properly, four litres of fluid, an afternoon asleep, and keeping the legs still are all part of arriving at High Camp with reserves intact.",
        "There is also equipment work: tools sharpened, crampons checked, screws sorted, and harnesses inspected for wear after the rotation.",
        "The Sherpa team is on the face above, extending the fixed line into the flutings. Their reports on the snow quality up there are the most important information the expedition receives. Overnight at base camp.",
      ),
    },
    {
      title: "Preparation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...THAMSERKU_BC,
      html: p(
        "The last day before the push, spent on the plan rather than on the hill. Personal kit is split into what goes up and what stays, rope pairs are fixed, radios are tested, and your leader briefs the three-day sequence stage by stage with timings.",
        "The Sherpas return from the flutings in the afternoon with the report that matters: how the snow is taking gear, where the cornices sit, and whether the upper face is climbable at all.",
        "The satellite forecast arrives in the evening, and the go or no-go decision is taken on the two together. If the answer is no, the reserve days at the end of the itinerary are what the expedition falls back on. Overnight at base camp.",
      ),
    },
    {
      title: "Climb from Base Camp (4,600 m) to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "The camp at the top of the approach face, reoccupied for the summit push.",
      ...THAMSERKU_HIGH_CAMP,
      html: p(
        "The summit push begins. The same fixed approach face as the rotation, and it goes noticeably faster the second time — five hours rather than six or seven, on ropes that are now familiar.",
        "That improvement is the return on the rotation and the two rest days, and it is worth registering as it happens.",
        "<strong>Camp 1 (5,600 m)</strong> is reoccupied in the early afternoon. An easy evening, as much fluid as anyone can manage, and an early night. Overnight at Camp 1.",
      ),
    },
    {
      title: "Climb from Camp 1 (5,600 m) to High Camp (6,100 m)",
      elevation: "6,100 m",
      accommodation: "High Camp",
      placeDescription: "A tented high camp at 6,100 m on platforms cut into the flutings.",
      ...THAMSERKU_C2,
      html: p(
        "The day the route becomes what it is known for. Above Camp 1 the face steepens into the <strong>flutings — snow and ice at 55 to 70 degrees</strong> with short steeper steps, climbed on fixed line with two tools for five to seven hours.",
        "Snow quality is the whole story here. Where it is firm the climbing is superb; where it is sugary it takes neither tools nor screws well, and progress slows to something careful and unglamorous.",
        "<strong>High Camp (6,100 m)</strong> is whatever platform the Sherpas have been able to cut. It is small, steep-sided and comfortless. Dinner is minimal, kit is laid out, and your leader gives a <strong>hard turnaround time</strong> for the morning. Overnight at High Camp.",
      ),
    },
    {
      title: "Summit Thamserku (6,623 m) and Descend to High Camp (6,100 m)",
      elevation: "6,623 m",
      accommodation: "High Camp",
      placeDescription: "The 6,623 m summit of Thamserku, above the flutings and the corniced upper ridge.",
      ...THAMSERKU,
      html: p(
        "Moving by midnight, because the upper snow has to be climbed and descended while it is frozen. The route continues up the <strong>flutings</strong> on fixed line, steeper again above High Camp, in the coldest hours of the night.",
        "Above them the <strong>corniced summit ridge</strong> begins — heavily corniced on the Namche side, narrow, and climbed one at a time on rope, with the Sherpas probing the crest ahead. It is the section that most often stops parties, and it is not hurried.",
        "The <strong>summit (6,623 m)</strong> looks north across to Everest, Lhotse and Nuptse, east to Makalu, and straight down onto <strong>Namche Bazaar</strong> and the trail where several hundred people are, at that moment, taking a photograph of the mountain you are standing on.",
        "The descent is a long sequence of <strong>abseils</strong> down the flutings, and it is the most demanding part of the expedition for a tired team. Fourteen to eighteen hours round trip. Overnight at High Camp.",
      ),
    },
    {
      title: "Descend from High Camp (6,100 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...THAMSERKU_BC,
      html: p(
        "Camp comes down and the whole route is abseiled — the flutings, Camp 1, and the approach face — with the fixed rope stripped as the team descends.",
        "Stripping is slow and it is not optional. Rope left on a face like this becomes a hazard for the next party and a permanent piece of litter on the mountain, and clearing it properly costs the team several hours.",
        "<strong>Base camp (4,600 m)</strong> in the afternoon, with thick air, a hot meal, a wash and the first unbroken sleep in four days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The first of two contingency days, held for weather or a second summit attempt.",
      ...THAMSERKU_BC,
      html: p(
        "The first of two reserve days, and on this expedition they are part of the plan rather than an afterthought. Thamserku is condition-dependent to an unusual degree, and a face that is unclimbable on Tuesday can be excellent on Thursday.",
        "If the summit was missed, this day and the next are the second attempt: back to Camp 1 today, High Camp tomorrow. Your leader weighs the team's remaining reserves as heavily as the forecast, because a second push on a TD- route needs a team that is genuinely recovered.",
        "If the summit went to plan, this is rest — eating, sleeping and letting the accumulated fatigue of two weeks at altitude drain away. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Thamserku Base Camp",
      placeDescription: "The second contingency day, held at base camp before the walk out.",
      ...THAMSERKU_BC,
      html: p(
        "The second reserve day, held for the same reasons and used in the same way. Two of them exist because one is often not enough on a peak with this narrow a window.",
        "If a second summit push is underway, the team is at High Camp tonight rather than here. If the mountain has been climbed, or if the leader has judged the face unclimbable for the season, the day is spent breaking down base camp and loading the yaks.",
        "Either way it is the last night in the cirque. Whatever the outcome, the team has spent twelve days under one of the least-visited faces in the Khumbu, which is not a small thing in itself. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Thamserku Base Camp (4,600 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent from the cirque.",
      ...NAMCHE,
      html: p(
        "Base camp goes onto the yaks and the team walks out — down the moraine, across the open hillside and back onto the Tengboche balcony trail at <strong>Kyangjuma</strong>.",
        "From there it is an easy contour west to Namche, and the whole way you are walking away from a mountain you have just spent two weeks underneath and, with luck, on top of.",
        "<strong>Namche Bazaar (3,440 m)</strong> in the afternoon means hot water, a bakery, a beer, and the peculiar experience of sitting in a lodge window looking straight at your own route. Around 6 to 7 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, always longer than it looks on the last day.",
        "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. This crew fixed and stripped a TD- face; the thanks should be specific. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
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
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — and if the face was not in condition this season, we would be glad to have you back for it next year.",
      ),
    },
  ],
};
