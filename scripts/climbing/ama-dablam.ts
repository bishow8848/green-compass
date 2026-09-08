import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  AMA_DABLAM, AMA_DABLAM_BC, AMA_DABLAM_C1, AMA_DABLAM_C2, CHHUKUNG, DINGBOCHE, ISLAND_BC,
  ISLAND_HIGH_CAMP, ISLAND_PEAK, LUKLA, NAMCHE, PANGBOCHE, PHAKDING, TENGBOCHE,
} from "./places";

/**
 * Ama Dablam, in three lengths, plus the Island Peak combination.
 *
 * The mountain and the route are identical across all of them — the south-west
 * ridge, the Yellow Tower, the Mushroom Ridge — and what changes is how much
 * rotation and reserve the schedule carries. The differences are stated plainly
 * in each overview rather than buried, because on a peak with this success-rate
 * spread, days in hand are the product.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const KHUMBU_PARK_FEES =
  "Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality permit";

const AD_PERMITS = `Nepal Mountaineering Association climbing permit for Ama Dablam, ${KHUMBU_PARK_FEES}.`;

const AD_SHERPA =
  "One high-altitude climbing Sherpa for every climber above base camp, with all their equipment, wages and insurance.";

const AD_LEADER =
  "Government-licensed expedition leader with Ama Dablam experience, with all equipment, wages and insurance.";

const AD_BEST_TIME = {
  heading: "Best Time to Climb",
  content:
    "<p><strong>October and November</strong> is the Ama Dablam season, and it is not a close contest. Post-monsoon the rock of the Yellow and Grey Towers is dry, the ridge is stable, the weather windows are long and the fixed ropes are in place and maintained by the teams on the mountain. Something like nine out of ten ascents happen in these two months.</p><p><strong>April and May</strong> is climbable and we run occasional spring departures, but the route is colder, the rock more often iced, and there are far fewer teams sharing the work of fixing. Winter ascents happen and are serious undertakings. The monsoon closes the mountain entirely. If you have one season to choose, choose late October, when the ropes are freshly fixed and the weather is at its most settled.</p>",
};

const AD_INSURANCE = {
  heading: "Travel Insurance",
  content:
    "<p>Insurance written for <strong>mountaineering to 7,000 m, including technical rock and ice climbing, fixed-rope use and abseiling</strong>, is mandatory and we verify it before the permit is issued. Ordinary adventure travel cover does not qualify and we reject it regularly. A national alpine club policy or a specialist mountaineering insurer is what this expedition needs.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> are essential, with a limit high enough to be useful — a long-line rescue from Ama Dablam is an expensive operation. Helicopters routinely reach base camp and can, in good conditions, long-line from Camp 1 and occasionally Camp 2, but never from the ridge above. We hold your policy number, the insurer's 24-hour line and a named emergency contact from the Kathmandu briefing onward.</p>",
};

const AD_KIT = {
  heading: "Packing List & Climbing Equipment",
  content:
    "<p><strong>Double mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a technical ice axe, a <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, softshell trousers for the rock, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and a headlamp with lithium batteries and a spare.</p><p>The Yellow Tower is climbed in crampons on rock, so <strong>gloves you can feel holds through</strong> matter as much as the warm ones. We supply <strong>all group ropes, ice screws, snow stakes, rock protection and anchors</strong>, and our Sherpas fix and maintain the route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates</strong> — this is a requirement on Ama Dablam rather than a preference.</p>",
};

// ─────────────────────────────────────────────────────────────────────────────

export const amaDablamExpedition: Climb = {
  region: "Everest Region",
  price: 12500,
  difficulty: "extreme",
  maxAltitude: 6812,
  grade: "TD-",
  expedition: true,
  center: [86.85, 27.87],
  zoom: 11,
  content: {
    slug: "ama-dablam-expedition",
    title: "Ama Dablam Expedition",
    overview:
      "<p><strong>Ama Dablam (6,812 m)</strong> is the most beautiful mountain in Nepal and, by some distance, the most photographed. Its name means <em>mother's necklace</em> — the long ridges are her arms, and the hanging glacier below the summit is the <em>dablam</em>, the ornament box a Sherpa woman wears at her throat. It was first climbed in <strong>March 1961</strong> by Mike Gill, Barry Bishop, Michael Ward and Wally Romanes, working out of Hillary's Silver Hut, and the <strong>south-west ridge</strong> they pioneered is still the route every expedition follows.</p><p>It is the classic technical Himalayan objective for a climber who is not yet ready for an 8,000 m peak, and it is a real climb rather than a walk with a rope. The ridge gives <strong>exposed rock climbing on the Yellow Tower</strong>, a long day on the <strong>Grey Tower</strong> and the corniced <strong>Mushroom Ridge</strong>, and a final snow slope beneath the Dablam itself. This thirty-day expedition carries two full rotations and three reserve days, because the difference between summiting Ama Dablam and not usually comes down to how many chances the schedule allows.</p>",
    highlights: [
      ["Summit Ama Dablam (6,812 m)", "The most iconic peak in Nepal, by the south-west ridge of the 1961 first ascent."],
      ["The Yellow Tower", "Exposed rock climbing in crampons at 5,900 m, the technical crux and the memory everyone keeps."],
      ["Two Full Acclimatisation Rotations", "Sleep at Camp 1 and Camp 2 before the summit push, the structure that puts climbers on top."],
      ["Three Reserve Days", "A schedule with genuine room for weather, rather than one chance and a hope."],
      ["One Sherpa Per Climber", "One-to-one high-altitude support on every section of the route, from base camp to the summit."],
    ],
    sections: [
      AD_BEST_TIME,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>TD-</strong>. The route runs from base camp at 4,600 m up a long rocky spur to <strong>Camp 1 (5,700 m)</strong> — scrambling and exposed slabs, more tiring than technical. Above it the climbing becomes serious: the <strong>Yellow Tower</strong>, a near-vertical rock step of around 15 m climbed in crampons and gloves on fixed rope, guards the way to <strong>Camp 2 (5,900 m)</strong>, a spectacular and precarious set of platforms on the crest of the ridge.</p><p>Above Camp 2 come the <strong>Grey Tower</strong>, a longer mixed rock and ice section, and the <strong>Mushroom Ridge</strong>, a corniced snow crest traversed with the whole Khumbu below on both sides. The final slopes pass beneath the <strong>Dablam</strong> hanging glacier — the mountain's principal objective hazard — to the summit. Summit day from Camp 2 runs <strong>twelve to sixteen hours</strong>, and the descent is a long series of abseils.</p>",
      },
      {
        heading: "Experience Required & Acclimatisation",
        content:
          "<p>We ask for <strong>previous 6,000 m Himalayan experience</strong> and alpine climbing at AD+ or above. You should be comfortable jumaring on steep fixed rope for hours, moving on rock in crampons, and abseiling from hanging stances while tired. Island Peak and Mera alone are not sufficient preparation; Lobuche East, Kyajo Ri or a season of alpine routes is the right background.</p><p>Acclimatisation is where this expedition spends its time. The Khumbu approach through Namche and Dingboche gets you to base camp already adapted to 4,400 m, and then <strong>two rotations</strong> — a night at Camp 1, and later a night at Camp 2 — build the tolerance for a summit push. Base camp sits at 4,600 m and the team returns to it to recover between rotations, which is why the trip is thirty days rather than twenty.</p>",
      },
      AD_INSURANCE,
      AD_KIT,
    ],
    faqs: [
      { question: "Do you use Camp 3?", answer: "Rarely, and only when conditions clearly justify it. Camp 3 at around 6,300 m sits directly beneath the Dablam hanging glacier, which has calved onto it with fatal consequences in the past. Modern practice on the mountain, and ours, is to summit from Camp 2 in a single long day and accept the extra hours rather than the extra exposure." },
      { question: "How hard is the Yellow Tower really?", answer: "Around UIAA IV+ in pure grade — moves most competent rock climbers would find straightforward in shoes at sea level. In double boots and crampons, wearing gloves, at 5,900 m, with a rucksack and a thousand metres of air beneath you, it is a different proposition. It is fixed and climbed on an ascender, and it is the section everyone remembers." },
      { question: "What is Camp 2 like?", answer: "Extraordinary and unnerving. The tents sit on small platforms directly on the crest of the ridge, with drops on both sides, and there is nowhere to walk to. Most climbers describe the night there as the most memorable and least restful of the expedition." },
      { question: "What is the summit success rate?", answer: "Between 65 and 75 percent on our thirty-day departures. It correlates strongly with schedule length: expeditions running shorter itineraries with fewer reserve days come in materially lower, because the mountain's weather does not negotiate. That relationship is the main reason we run the long version as standard." },
      { question: "Is the route fixed by our team or shared?", answer: "In the autumn season the fixed ropes are put in and maintained cooperatively by the expeditions on the mountain, and our Sherpas take their share of that work. In spring, when there may be only one or two teams, our team fixes considerably more of the route itself." },
      { question: "How dangerous is the Dablam?", answer: "It is the mountain's main objective hazard and it has killed. The hanging glacier sits above the upper route and calves unpredictably. It cannot be avoided entirely on the normal route, so it is managed by minimising time underneath it — which is precisely the argument for summiting from Camp 2 rather than camping beneath it at Camp 3." },
      { question: "Do I need supplementary oxygen?", answer: "No. Ama Dablam is climbed without bottled oxygen and we do not carry it for climbing. We do carry emergency oxygen with the expedition leader for medical use at base camp and on the route, along with a pulse oximeter and, on larger departures, a portable altitude chamber." },
      { question: "How much of the climbing is on rock?", answer: "More than most people expect. The spur to Camp 1 is largely rock scrambling, the Yellow Tower is a rock pitch, and the Grey Tower is mixed. Roughly half the technical content of the route is rock climbed in crampons, which is why we ask about rock experience as well as ice." },
      { question: "Can I do Ama Dablam as my first Himalayan expedition?", answer: "As your first expedition, often yes — as your first Himalayan mountain, no. Climbers who arrive having climbed a 6,000 m peak and with alpine experience at AD+ do well here. Climbers whose entire record is trekking peaks find the Yellow Tower and the exposure a shock, and we will say so at enquiry." },
      { question: "What happens between rotations at base camp?", answer: "You rest, and it is not idle time — recovery at 4,600 m is what makes the next rotation possible. Base camp has a heated mess tent, a cook crew producing three hot meals a day, solar charging, and usually a satellite connection. Most teams find the rest days pass a good deal faster than they expected." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and Camp 2 (5,900 m).",
      permits: AD_PERMITS,
      guide: AD_LEADER,
      sherpa: AD_SHERPA,
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day and high-altitude food and fuel for the camps above.",
        "A technical training and assessment day at base camp on rock in crampons, fixed-rope ascent, and abseiling from hanging stances.",
        "Two full acclimatisation rotations, with nights at Camp 1 and Camp 2 before the summit push.",
        "Our share of fixing and maintaining the route, including the Yellow Tower, the Grey Tower and the Mushroom Ridge.",
        "Base camp solar power for charging, and a satellite weather forecast throughout the expedition period.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Yak and porter transport of all expedition equipment between Lukla and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — harness, crampons, ice axe, belay device, ascender and screwgates — which climbers must bring rather than rent for this expedition.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or an early descent from the mountain.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 30-day expedition on the south-west ridge of Ama Dablam (6,812 m), with a full base camp, two acclimatisation rotations to Camp 1 and Camp 2, one Sherpa per climber and three reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the NMA climbing permit and park fees, an expedition leader with one high-altitude Sherpa per climber, a base camp cook crew, all group climbing equipment, our share of the route fixing, two rotations, base camp power and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, personal gear, city meals, summit bonus and tips are not.",
    bestTime: "Oct-Nov, Apr-May",
    meta: {
      title: "Ama Dablam Expedition (6,812 m) — 30 Days | Green Compass Treks",
      description:
        "Climb Ama Dablam by the south-west ridge on a 30-day expedition with two acclimatisation rotations, three reserve days and one Sherpa per climber. The Yellow Tower, the Mushroom Ridge and the most iconic summit in Nepal.",
      keywords:
        "ama dablam expedition, ama dablam 6812m, ama dablam south west ridge, yellow tower, mushroom ridge, technical expedition nepal, ama dablam cost",
      tags: "Ama Dablam, Everest Region, Expedition, Technical Climb, South West Ridge, Khumbu",
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
        "Rest is the only item on the schedule. Unpack and lay out your technical equipment this evening; tomorrow's inspection goes through it piece by piece and Thamel is the last place to replace anything.",
        "Your expedition leader calls at the hotel in the evening to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Expedition Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the technical equipment is inspected in detail.",
      ...KATHMANDU,
      html: p(
        "The full expedition briefing. Your leader takes the thirty-day plan apart — the approach, the base camp period, the two rotations, the summit push from Camp 2, the reserve days — and then goes through the route itself: the spur, the Yellow Tower, the Grey Tower, the Mushroom Ridge and the Dablam.",
        "The <strong>equipment inspection</strong> covers boots, crampons, axe, harness, ascender, belay device, screwgates and helmet, and your leader will discuss your climbing history route by route.",
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
        "The expedition barrels are weighed and distributed to porters and yaks over tea. There is a great deal of it: base camp for a month, three camps of equipment, and the team's share of the fixing rope.",
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
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and beyond it the trail turns uphill for 600 m of steady work, with a first view of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, an ATM and the last gear shops. It is also where the yak train for base camp is finalised. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the expedition.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace gives the classic view of Everest, Lhotse, Nuptse and — the reason you are here — <strong>Ama Dablam</strong>.",
        "From this angle the south-west ridge is in profile: the spur to Camp 1, the step of the Yellow Tower, the crest where Camp 2 sits, and the white bulge of the Dablam under the summit. Your leader will trace it.",
        "On to <strong>Khumjung</strong> and <strong>Khunde</strong>, then a free afternoon. First saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Deboche (3,820 m)",
      elevation: "3,820 m",
      accommodation: "Deboche",
      placeDescription: "A quiet lodge settlement in birch and rhododendron forest below Tengboche monastery.",
      ...TENGBOCHE,
      html: p(
        "Two hours of near-level balcony trail out of Namche, high above the Dudh Koshi, with Ama Dablam directly ahead and growing all morning.",
        "At Phunki Thenga the trail drops to the river and climbs 600 m to the saddle at <strong>Tengboche</strong>, where the largest monastery in the Khumbu sits facing the mountain. Expedition teams have taken a blessing here for sixty years, and the afternoon ceremony is open to visitors.",
        "A short descent through birch and rhododendron reaches <strong>Deboche (3,820 m)</strong>, quieter than Tengboche and warmer for the night. Around 5 to 6 hours. Overnight at Deboche.",
      ),
    },
    {
      title: "Trek from Deboche (3,820 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Across the Imja Khola above a narrow gorge and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu and the home village of many of the Sherpas on the mountain.",
        "Above Pangboche the trees give out and the valley opens into a wide grey trough of moraine and grazing land, with the east face of Ama Dablam directly overhead.",
        "<strong>Dingboche (4,410 m)</strong> sits among stone-walled potato and barley fields. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above it.",
      ...DINGBOCHE,
      html: p(
        "The last acclimatisation day before base camp. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep, non-technical, two to three hours on scree and rock.",
        "Reaching 5,000 m and sleeping 600 m below it is what makes the first rotation manageable. <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Island Peak, Taboche and Cholatse around you.",
        "Back for a late lunch and rest, with an evening saturation check. Your leader reviews everyone's readings and trend before committing the team to base camp. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Ama Dablam Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp on grassy moraine below the south-west ridge.",
      ...AMA_DABLAM_BC,
      html: p(
        "A short day back down the valley and then west onto the moraine shelf beneath the mountain, on a trail used by nobody but expedition teams and their yaks.",
        "<strong>Ama Dablam Base Camp (4,600 m)</strong> is one of the pleasanter base camps in the Himalaya — grassy rather than rocky, sheltered, with running water and a full view of the route from the mess tent door.",
        "Camp is established properly today: sleeping tents, mess tent, kitchen, storage, communications and toilet tents. This is home for the next eighteen days. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Rest Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...AMA_DABLAM_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Pangboche, a chorten is built and juniper is burned, and the climbing equipment — axes, crampons, harnesses, boots — is laid out at the altar to be blessed.",
        "No Sherpa on our team will go onto the mountain before it has been done, and it is not a performance for clients. Rice is thrown, prayer flags go up over camp, and it usually finishes with chang and a good deal of laughing.",
        "The rest of the day is genuine rest and settling in — sorting personal kit, finding out how the mess tent works, and letting 4,600 m become normal. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Training and Assessment Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, where technique is checked on the rocks above camp.",
      ...AMA_DABLAM_BC,
      html: p(
        "A full working day on the rocks and ice above camp. Every climber is taken through <strong>moving on rock in crampons, jumaring on steep fixed line with a pack, changing over at anchors, and abseiling from hanging stances</strong>.",
        "The changeover at anchors gets the most attention, because on the Yellow Tower and the Grey Tower you will do it repeatedly, in gloves, with a long drop underneath, and a slick changeover is worth more on this mountain than raw strength.",
        "Your leader is also assessing. Anyone who needs more time gets the afternoon; anyone who is not ready for the ridge is told here, at base camp. Meanwhile the Sherpas are on the spur, carrying loads to Camp 1. Overnight at base camp.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp on a rocky shoulder at 5,700 m at the top of the approach spur.",
      ...AMA_DABLAM_C1,
      html: p(
        "The first time on the mountain. The route follows the long <strong>rocky spur</strong> above base camp — scrambling, slabs, and exposed sections on fixed line, with a personal load of around 10 kg.",
        "It is not technically hard and it is relentlessly tiring, five to six hours of hands-on ground with the altitude climbing steadily. Most people find it considerably more work than they expected from looking at it.",
        "<strong>Camp 1 (5,700 m)</strong> is a scatter of tents on a rocky shoulder with a huge view down the Imja valley and, above, the Yellow Tower catching the last of the light. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Descend from Camp 1 (5,700 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the first rotation.",
      ...AMA_DABLAM_BC,
      html: p(
        "Down the spur to base camp in three to four hours, abseiling the steep sections and down-climbing the rest.",
        "Sleeping high and recovering low is the entire mechanism of acclimatisation, and the descent is not lost ground. You will feel the difference on the second rotation.",
        "The afternoon is rest, food and fluid at 4,600 m. The Sherpas continue carrying loads and working on the route toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, on the rest day between the two rotations.",
      ...AMA_DABLAM_BC,
      html: p(
        "A full rest day. Eating properly, drinking four litres, sleeping in the afternoon, and — for most people — reading, playing cards and getting to know the team.",
        "There is equipment work too: crampons checked and adjusted, harnesses inspected for wear after a day of jumaring, and personal loads for the next rotation packed and weighed.",
        "Your leader reviews the satellite forecast in the evening and confirms the timing of the second rotation. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The camp at the top of the approach spur, reoccupied for the second rotation.",
      ...AMA_DABLAM_C1,
      html: p(
        "Back up the spur, and the difference is immediate. Ground that took six hours on the first rotation takes four or five, and the sections that needed thought a week ago are now simply familiar.",
        "That improvement is the return on the rotation and the rest days, and it is the clearest sign that the acclimatisation is working.",
        "<strong>Camp 1 (5,700 m)</strong> in the early afternoon, with time to rest properly before tomorrow — which is the day the mountain gets serious. Overnight at Camp 1.",
      ),
    },
    {
      title: "Second Rotation – Climb the Yellow Tower to Camp 2 (5,900 m)",
      elevation: "5,900 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp on small platforms directly on the crest of the south-west ridge at 5,900 m.",
      ...AMA_DABLAM_C2,
      html: p(
        "The day everyone comes to Ama Dablam for. Above Camp 1 the ridge narrows and steepens through slabs and short walls, all of it on fixed rope, until it arrives at the foot of the <strong>Yellow Tower</strong>.",
        "The Tower is around fifteen metres of near-vertical rock, climbed on an ascender in double boots, crampons and gloves at 5,900 m. In climbing shoes at sea level it would be unremarkable; here, with the Imja valley a vertical kilometre below your heels, it is the most talked-about pitch in Nepal.",
        "Above it, <strong>Camp 2 (5,900 m)</strong> — tent platforms cut directly into the crest of the ridge, drops on both sides, and nowhere at all to walk to. Three to five hours from Camp 1.",
        "Sleeping here is the point of the rotation and the reason the summit push works. It is also a night nobody forgets. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (5,900 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, where the team recovers before the summit push.",
      ...AMA_DABLAM_BC,
      html: p(
        "A long descent: abseil the Yellow Tower and the ridge to Camp 1, then down the spur to base camp. Five to seven hours, and the abseils are where a tired party has to keep concentrating.",
        "By the time you reach the grass at base camp the team has slept at 5,900 m and climbed the technical crux of the route. Everything the summit push requires has now been done once.",
        "The afternoon is food, fluid and sleep in thick air. The Sherpas complete the stocking of Camp 2 over the next two days. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, on the first of two recovery days after the second rotation.",
      ...AMA_DABLAM_BC,
      html: p(
        "The first of two full recovery days, and they are the most valuable idle hours of the expedition. Two nights at Camp 1 and one at Camp 2 have taken more out of the team than anyone feels at the time.",
        "The routine is unglamorous and it works: eat past the point of appetite, drink four litres, sleep in the afternoon, and stay off your feet.",
        "The satellite forecast comes in each evening, and from tonight the whole camp starts thinking in terms of weather windows rather than days. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...AMA_DABLAM_BC,
      html: p(
        "The last day before the push. Personal kit is split into what goes up and what stays; rope pairs are confirmed; radios, headlamps and batteries are checked; and your leader briefs the four-day summit sequence stage by stage with timings for each.",
        "The Sherpas report on the state of the fixed ropes above Camp 2 — the Grey Tower, the Mushroom Ridge and the slopes under the Dablam — which is the information the go decision actually rests on.",
        "The forecast arrives in the evening and the plan is set against it. If the window is not there, the reserve days at the end of the itinerary are what the expedition waits on. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,600 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The camp on the approach spur, occupied on the first night of the summit push.",
      ...AMA_DABLAM_C1,
      html: p(
        "The summit push begins, and the spur goes by faster again — four hours or so for ground that took six on the first rotation.",
        "Loads are lighter this time. Camp 2 is already stocked with food, fuel and the tents, so climbers carry personal equipment and little else.",
        "<strong>Camp 1 (5,700 m)</strong> by early afternoon. An easy evening, as much fluid as anyone can manage, and an early night. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,700 m) to Camp 2 (5,900 m)",
      elevation: "5,900 m",
      accommodation: "Camp 2",
      placeDescription: "The ridge-crest camp at 5,900 m, occupied as high camp for the summit attempt.",
      ...AMA_DABLAM_C2,
      html: p(
        "A short day by design. The ridge and the <strong>Yellow Tower</strong> again, three to four hours, arriving at Camp 2 by late morning so the team has the whole afternoon lying down.",
        "The Tower is easier the second time in the way that all of this is easier the second time: you know where the holds are, you know the changeover, and you know it goes.",
        "The rest of the day is spent melting snow, forcing fluid and food, and sleeping badly on a ledge at 5,900 m. Your leader sets a departure time and a <strong>hard turnaround time</strong> before dark. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Ama Dablam (6,812 m) and Descend to Camp 2 (5,900 m)",
      elevation: "6,812 m",
      accommodation: "Camp 2",
      placeDescription: "The 6,812 m summit of Ama Dablam, above the Mushroom Ridge and the Dablam hanging glacier.",
      ...AMA_DABLAM,
      html: p(
        "Moving between midnight and one, straight out of the tents and onto the fixed rope. The <strong>Grey Tower</strong> comes first — a long mixed section of rock and ice, harder in sustained terms than the Yellow Tower and taken in the coldest hours of the night.",
        "Above it the <strong>Mushroom Ridge</strong>: a corniced snow crest traversed one at a time, spectacular and thoroughly exposed, with the sun usually arriving somewhere along it. Then the final snow slopes, which pass beneath the <strong>Dablam</strong> itself — the hanging glacier the mountain is named for, and its principal hazard. This is the section that is moved through steadily and not lingered on.",
        "The <strong>summit (6,812 m)</strong> is a broad snow dome, and the view is the one the whole Khumbu has been arranging itself around for three weeks: <strong>Everest, Lhotse and Nuptse</strong> to the north, <strong>Makalu</strong> east, Cho Oyu north-west, and Island Peak, Baruntse and Chamlang laid out below.",
        "The descent is a long sequence of abseils back down the ridge to Camp 2. Twelve to sixteen hours round trip. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (5,900 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...AMA_DABLAM_BC,
      html: p(
        "Camp 2 comes down and everything goes onto backs — tents, sleeping bags, stoves, rubbish. Nothing is left on the ridge.",
        "Then the whole route in reverse: abseil the Yellow Tower, down the ridge to Camp 1, and down the spur to base camp. Five to seven hours on legs that did sixteen the day before.",
        "<strong>Base camp (4,600 m)</strong> in the afternoon means grass, running water, a hot meal and the first real sleep in four days. The kitchen crew generally has something better than usual waiting. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...AMA_DABLAM_BC,
      html: p(
        "The first of three reserve days, and they are the reason this itinerary is thirty days rather than twenty-four. On Ama Dablam the mountain does not usually turn people back with storms; it turns them back with a week of wind that a shorter schedule cannot outlast.",
        "If the summit has not yet been reached, the team is either resting for a second push or already back at Camp 1, depending on the forecast and on how much the first attempt took out of everyone.",
        "If the summit went to plan, this is rest — and rest at 4,600 m after a 6,812 m summit day is an unusually satisfying way to spend a morning. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...AMA_DABLAM_BC,
      html: p(
        "The second reserve day. Between them, the three reserve days give the expedition roughly a week of tolerance for weather, which is what the mountain's autumn wind patterns actually demand.",
        "In a season where the first attempt succeeded, these days are used to walk out early and bank the time against the Lukla flights, which are the least reliable part of the whole journey.",
        "In a season where it did not, they are the second and sometimes the third attempt, and your leader manages them on the forecast and on the team's remaining reserves rather than on the calendar. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The final contingency day, and the last night in the expedition base camp.",
      ...AMA_DABLAM_BC,
      html: p(
        "The last reserve day and the last night under the mountain. If it is not needed for the climb, base camp comes down today: tents struck, loads made up for the yaks, and the site left clean.",
        "That clean-up is not a formality. Everything the expedition brought up — packaging, batteries, fuel canisters, human waste from the toilet tent — goes back down with it, and the NMA garbage deposit is refunded against exactly that.",
        "The chorten built at the puja stays, and the prayer flags with it. Most teams sit out for a while after dinner to look at the ridge one more time. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Ama Dablam Base Camp (4,600 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent from base camp.",
      ...NAMCHE,
      html: p(
        "Down off the moraine shelf to <strong>Pangboche</strong>, where several of the Sherpas on your team live, and where the monastery above the village is the oldest in the Khumbu.",
        "Through <strong>Deboche</strong> and up to the <strong>Tengboche</strong> saddle, which is where most people stop and turn round for a long look — the mountain from here is exactly the photograph, and it now has your route on it.",
        "The steep descent to Phunki Thenga and the balcony trail bring you to <strong>Namche Bazaar (3,440 m)</strong>: hot water, a bakery, an ATM and a beer. Around 7 to 8 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, which after a month always feels steeper than it is.",
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
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward when the peak-season schedule applies.",
        "Delays are routine rather than exceptional and can run to a full day, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost and your leader handles the booking.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — for a good many climbers Ama Dablam is the mountain that leads to Baruntse, Himlung or an 8,000 m peak, and we would be glad to talk about any of them.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

/**
 * The first fourteen days are the same on every Ama Dablam itinerary we run:
 * the Khumbu approach, base camp, the puja, the assessment day, the first
 * rotation to Camp 1 and the rest day after it. Only the number quoted in the
 * briefing and the wording of that rest day change, so they are taken from the
 * long expedition rather than restated.
 */
function sharedAmaDablamApproach(planWord: string): ClimbDay[] {
  return amaDablamExpedition.days.slice(0, 14).map((d) => {
    if (d.title.startsWith("Kathmandu")) {
      return {
        ...d,
        html: d.html
          .replace("thirty-day plan", `${planWord} plan`)
          .replace("the two rotations", planWord === "thirty-day" ? "the two rotations" : "the rotation"),
      };
    }
    if (d.title.startsWith("Rest Day at Base Camp") && planWord !== "thirty-day") {
      return {
        ...d,
        placeDescription: "The expedition base camp, on the rest day after the rotation.",
        html: d.html.replace(
          "Your leader reviews the satellite forecast in the evening and confirms the timing of the second rotation.",
          "Your leader reviews the satellite forecast in the evening and confirms the timing of the summit push.",
        ),
      };
    }
    return d;
  });
}

export const shortAmaDablamExpedition: Climb = {
  region: "Everest Region",
  price: 10500,
  difficulty: "extreme",
  maxAltitude: 6812,
  grade: "TD-",
  expedition: true,
  center: [86.85, 27.87],
  zoom: 11,
  content: {
    slug: "short-ama-dablam-expedition",
    title: "Short Ama Dablam Expedition",
    overview:
      "<p>This is <strong>Ama Dablam (6,812 m)</strong> in twenty-three days instead of thirty, and it gets there by removing two specific things: the <strong>second acclimatisation rotation</strong> to Camp 2, and <strong>two of the three reserve days</strong>. The mountain, the route and the staffing are unchanged — the same south-west ridge, the same Yellow Tower, the same one Sherpa per climber — and so is the base camp, the puja, the training day and the first rotation to Camp 1.</p><p>We are direct about the trade. On Ama Dablam, schedule length correlates with summit success more strongly than almost any other variable, because the mountain is defeated by multi-day autumn wind rather than by single storms. This itinerary is the right choice for a climber with a proven altitude record and three weeks of leave, and the wrong choice for someone whose priority is standing on top. If the summit matters more than the calendar, take the thirty-day expedition.</p>",
    highlights: [
      ["Summit Ama Dablam (6,812 m)", "The same south-west ridge and the same Yellow Tower, on a three-week schedule."],
      ["Base Camp, Puja and Training Retained", "Nothing is cut from the preparation — the assessment day and the first rotation stay in full."],
      ["One Sherpa Per Climber", "The staffing ratio is identical to the long expedition; the schedule is what changes, not the support."],
      ["Three Weeks Instead of Four", "Built for climbers whose leave will not stretch to a thirty-day expedition."],
      ["A Lower Price for the Same Mountain", "Seven fewer days of base camp, staff, food and permits, reflected directly in the cost."],
    ],
    sections: [
      AD_BEST_TIME,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>TD-</strong>, identical to the long expedition. The long rocky spur to <strong>Camp 1 (5,700 m)</strong>, the near-vertical <strong>Yellow Tower</strong> climbed in crampons on fixed rope, the ridge-crest platforms of <strong>Camp 2 (5,900 m)</strong>, and then the <strong>Grey Tower</strong>, the corniced <strong>Mushroom Ridge</strong> and the slopes beneath the <strong>Dablam</strong> to the summit.</p><p>What is harder here is not the climbing but the margin. You arrive at Camp 2 for the first time <strong>on the summit push</strong> rather than on a rotation, which means the highest night you will have slept before summit day is 5,700 m rather than 5,900 m. For a well-acclimatised climber that is manageable; for a marginal one it is the difference. Summit day from Camp 2 still runs twelve to sixteen hours.</p>",
      },
      {
        heading: "Who This Itinerary Suits",
        content:
          "<p>Take this version if you have <strong>slept above 5,500 m before</strong> and know from experience that you acclimatise quickly, if you are arriving fit and recently active at altitude, and if three weeks is genuinely what you have. Climbers coming straight from another Himalayan trip or an alpine season do well on it.</p><p>Take the <strong>thirty-day expedition</strong> if this would be your first time above 6,000 m, if you are travelling at the shoulder of the season, or if you would rather have slept at Camp 2 before you have to climb from it. We would rather talk a client into the longer trip than sell them a cheaper one they are less likely to finish, and we will say so at enquiry.</p>",
      },
      AD_INSURANCE,
      AD_KIT,
    ],
    faqs: [
      { question: "Exactly what is removed compared with the 30-day expedition?", answer: "The second acclimatisation rotation — the one that puts a night at Camp 2 into your legs before the summit push — and two of the three reserve days. Everything else, including base camp, the puja, the training day, the first rotation to Camp 1 and the Sherpa ratio, is identical." },
      { question: "How much does the success rate drop?", answer: "Materially. We see roughly 45 to 55 percent on this itinerary against 65 to 75 percent on the thirty-day version, and almost all of that gap is weather rather than acclimatisation. In a settled autumn the two perform similarly; in a windy one, the reserve days decide it." },
      { question: "Is it safe to climb to Camp 2 for the first time on the summit push?", answer: "It is common practice and it is safe for a properly acclimatised climber, which is why we set an entry requirement of previous nights above 5,500 m. It is not ideal, and we do not pretend otherwise — the second rotation exists on the long itinerary for a reason." },
      { question: "Can I add reserve days to this itinerary?", answer: "Yes, and we recommend it if your dates allow. Each extra day at base camp is charged at the daily base camp rate covering staff, food and permits. Adding two days brings this itinerary close to the long one in effectiveness at a lower cost than booking the thirty-day trip outright." },
      { question: "Do I still get the training day and the puja?", answer: "Both, in full. The assessment day on the rocks above base camp is where your leader decides who goes above Camp 1, and it is not a part of the schedule we are willing to compress. The puja happens because no Sherpa on our team will go onto the mountain without one." },
      { question: "Is the Sherpa ratio the same?", answer: "Identical — one high-altitude climbing Sherpa per climber, from base camp to the summit. Nothing about the staffing, the equipment or the safety provision is thinned to make the schedule shorter." },
      { question: "What happens if the weather closes for the whole reserve day?", answer: "The summit is lost. That is the honest answer and it is the risk this itinerary carries. If a window appears within a day of the scheduled push, your leader will use it; beyond that there is no room in the plan, and no operator can conjure one." },
      { question: "How fit do I need to be for the compressed schedule?", answer: "Fitter than for the long version, because there are fewer recovery days between hard ones. The benchmark is climbing a long fixed-rope day with a pack and being ready to repeat it after one night's rest. Six months of consistent training with long back-to-back days is realistic." },
      { question: "Do you use Camp 3 on this itinerary?", answer: "No, for the same reason as on the long expedition. Camp 3 at around 6,300 m sits beneath the Dablam hanging glacier, which has calved onto it with fatal consequences. We summit from Camp 2 and accept the longer day." },
      { question: "Can I switch to the 30-day expedition after booking?", answer: "Up to around a month before departure, yes, subject to permit dates, base camp logistics and Lukla seats. After that the staffing and supply are committed. It is far easier to book the long version and shorten it than the reverse." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and Camp 2 (5,900 m).",
      permits: AD_PERMITS,
      guide: AD_LEADER,
      sherpa: AD_SHERPA,
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day and high-altitude food and fuel for the camps above.",
        "A technical training and assessment day at base camp on rock in crampons, fixed-rope ascent, and abseiling from hanging stances.",
        "One acclimatisation rotation with a night at Camp 1 before the summit push.",
        "Our share of fixing and maintaining the route, including the Yellow Tower, the Grey Tower and the Mushroom Ridge.",
        "Base camp solar power for charging, and a satellite weather forecast throughout the expedition period.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Yak and porter transport of all expedition equipment between Lukla and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — harness, crampons, ice axe, belay device, ascender and screwgates — which climbers must bring rather than rent for this expedition.",
        "Additional reserve days beyond the one included, charged at the daily base camp rate if added at booking.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather or an attempt abandoned for conditions — this itinerary carries a single reserve day.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 23-day expedition on the south-west ridge of Ama Dablam (6,812 m), with a full base camp, one acclimatisation rotation to Camp 1, one Sherpa per climber and a single reserve day.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the NMA climbing permit and park fees, an expedition leader with one high-altitude Sherpa per climber, a base camp cook crew, all group climbing equipment, our share of the route fixing, one rotation, base camp power and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, personal gear, city meals, summit bonus, tips and additional reserve days are not.",
    bestTime: "Oct-Nov, Apr-May",
    meta: {
      title: "Short Ama Dablam Expedition (6,812 m) — 23 Days | Green Compass Treks",
      description:
        "Climb Ama Dablam in 23 days on a compressed schedule for experienced altitude climbers. Full base camp, puja, training day, one rotation to Camp 1 and one Sherpa per climber, with a single reserve day.",
      keywords:
        "short ama dablam expedition, ama dablam 23 days, quick ama dablam, ama dablam compressed itinerary, ama dablam cost, ama dablam three weeks",
      tags: "Ama Dablam, Short Itinerary, Everest Region, Expedition, Technical Climb, Khumbu",
    },
  },
  days: [
    ...sharedAmaDablamApproach("twenty-three day"),
    {
      title: "Summit Push – Climb from Base Camp (4,600 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The camp on the approach spur, occupied on the first night of the summit push.",
      ...AMA_DABLAM_C1,
      html: p(
        "The summit push begins. The spur is familiar from the rotation and goes noticeably faster — four to five hours for ground that took six the first time.",
        "Loads are light: Camp 2 has already been stocked by the Sherpa team with tents, food and fuel, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,700 m)</strong> by early afternoon, with the whole rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb the Yellow Tower to Camp 2 (5,900 m)",
      elevation: "5,900 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp on small platforms directly on the crest of the south-west ridge at 5,900 m.",
      ...AMA_DABLAM_C2,
      html: p(
        "The day the mountain becomes what it is famous for, and on this itinerary it is also your first time on it. Above Camp 1 the ridge narrows through slabs and short walls on fixed rope to the foot of the <strong>Yellow Tower</strong>.",
        "The Tower is around fifteen metres of near-vertical rock climbed on an ascender in double boots, crampons and gloves at 5,900 m. In climbing shoes at sea level it would be unremarkable; with the Imja valley a vertical kilometre below your heels it is the most talked-about pitch in Nepal.",
        "<strong>Camp 2 (5,900 m)</strong> is a handful of platforms cut into the crest itself, drops on both sides and nowhere to walk to. Three to five hours from Camp 1, and the team arrives by late morning so the afternoon can be spent lying down.",
        "Melt water, force fluid and food, and try to sleep. Your leader sets a departure and a <strong>hard turnaround time</strong> before dark. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Ama Dablam (6,812 m) and Descend to Camp 2 (5,900 m)",
      elevation: "6,812 m",
      accommodation: "Camp 2",
      placeDescription: "The 6,812 m summit of Ama Dablam, above the Mushroom Ridge and the Dablam hanging glacier.",
      ...AMA_DABLAM,
      html: p(
        "Moving between midnight and one, out of the tents and straight onto the fixed rope. The <strong>Grey Tower</strong> comes first — a long mixed section of rock and ice, more sustained than the Yellow Tower, taken in the coldest hours.",
        "Above it the <strong>Mushroom Ridge</strong>, a corniced snow crest traversed one at a time with the sun usually arriving somewhere along it, and then the final slopes beneath the <strong>Dablam</strong> hanging glacier — the mountain's principal hazard, moved through steadily and not lingered on.",
        "The <strong>summit (6,812 m)</strong> is a broad snow dome looking north at <strong>Everest, Lhotse and Nuptse</strong>, east to <strong>Makalu</strong>, north-west to Cho Oyu, with Island Peak, Baruntse and Chamlang below.",
        "The descent is a long sequence of abseils back to Camp 2. Twelve to sixteen hours round trip. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (5,900 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...AMA_DABLAM_BC,
      html: p(
        "Camp 2 comes down and everything goes onto backs — tents, bags, stoves, rubbish. Nothing is left on the ridge.",
        "Then the whole route in reverse: abseil the Yellow Tower, down the ridge to Camp 1, and down the spur to base camp. Five to seven hours on legs that did sixteen yesterday.",
        "<strong>Base camp (4,600 m)</strong> in the afternoon means grass, running water, a hot meal and the first real sleep in three days. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Ama Dablam Base Camp",
      placeDescription: "The single contingency day this itinerary carries, held for weather or a second attempt.",
      ...AMA_DABLAM_BC,
      html: p(
        "The one reserve day, and the honest limit of what this schedule can absorb. On Ama Dablam a bad spell is usually a run of windy days rather than a single storm, so one day in hand catches some of them and not all.",
        "If the summit was missed and a window opens tomorrow, the team goes back up to Camp 1 today. Your leader weighs the party's remaining reserves as heavily as the forecast, because a second push on this route needs climbers who have genuinely recovered.",
        "If the summit went to plan, the day is rest at base camp, or an early start down the valley to bank time against the Lukla flights. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Ama Dablam Base Camp (4,600 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent from base camp.",
      ...NAMCHE,
      html: p(
        "Base camp comes down and goes onto the yaks. The team walks off the moraine shelf to <strong>Pangboche</strong>, where several of the Sherpas on your rope live, and where the monastery above the village is the oldest in the Khumbu.",
        "Through <strong>Deboche</strong> and up to the <strong>Tengboche</strong> saddle, which is where most people stop for a long look back. The mountain from here is exactly the postcard, and it now has your line on it.",
        "The steep descent to Phunki Thenga and the balcony trail bring you to <strong>Namche Bazaar (3,440 m)</strong>: hot water, a bakery and a beer. Around 7 to 8 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>, which after three weeks always feels steeper than it is.",
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
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — and if the weather took the summit this time, the thirty-day itinerary is the one we would point you at for a second attempt.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const amaDablamHelicopterReturn: Climb = {
  region: "Everest Region",
  price: 14200,
  difficulty: "extreme",
  maxAltitude: 6812,
  grade: "TD-",
  expedition: true,
  center: [86.85, 27.87],
  zoom: 11,
  content: {
    slug: "ama-dablam-expedition-with-helicopter-return",
    title: "Ama Dablam Expedition with Helicopter Return",
    overview:
      "<p>This is the full thirty-day <strong>Ama Dablam (6,812 m)</strong> expedition — two acclimatisation rotations, three reserve days, one Sherpa per climber — with the walk out replaced by a <strong>helicopter from base camp directly to Kathmandu</strong>. Nothing is removed from the mountain. What goes is two days of retracing the Khumbu trail on legs that have just done a sixteen-hour summit day, a night in Lukla, and the fixed-wing flight that weather cancels more often than any other link in the journey.</p><p>For a climber flying home to a fixed commitment, that last point is the whole argument. A grounded Lukla flight at the end of an expedition has cost people international connections and, occasionally, a week. Flying from <strong>base camp at 4,600 m</strong> removes the risk entirely and gives you something else in exchange: the south-west ridge, Tengboche, Namche and the Dudh Koshi gorge from the air, forty minutes after leaving the mess tent.</p>",
    highlights: [
      ["Summit Ama Dablam (6,812 m)", "The complete thirty-day expedition — two rotations, three reserve days, nothing trimmed from the climb."],
      ["Helicopter from Base Camp to Kathmandu", "Fly out from 4,600 m over the ridge you have just climbed, Tengboche and the Dudh Koshi gorge."],
      ["No Lukla Flight to Gamble On", "The single most common cause of a missed international connection is removed from the itinerary."],
      ["Two Days Saved After the Summit", "Skip the walk back down the valley with a summit push still in your legs."],
      ["One Sherpa Per Climber", "One-to-one high-altitude support on every section of the route, from base camp to the summit."],
    ],
    sections: [
      AD_BEST_TIME,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>TD-</strong>, and identical to the standard expedition. The long rocky spur to <strong>Camp 1 (5,700 m)</strong>, the near-vertical <strong>Yellow Tower</strong> climbed in crampons on fixed rope, the ridge-crest platforms of <strong>Camp 2 (5,900 m)</strong>, then the <strong>Grey Tower</strong>, the corniced <strong>Mushroom Ridge</strong> and the slopes beneath the <strong>Dablam</strong>. Summit day from Camp 2 runs twelve to sixteen hours.</p><p>The helicopter changes nothing about the climbing and a great deal about the two days after it. On the walking itinerary you descend from base camp to Namche and then to Lukla, roughly fourteen hours over two days, with a summit push still in your legs. Here you descend from Camp 2 to base camp, take the reserve days, and fly. If your knees are the part of you that suffers most on a descent, this is what that buys.</p>",
      },
      {
        heading: "How the Helicopter Flight Works",
        content:
          "<p>The aircraft is an <strong>AS350 B3e</strong>, the machine that flies almost all high-altitude work in Nepal, with a pilot who flies the Khumbu daily through the season. It lifts from the landing zone at <strong>Ama Dablam base camp (4,600 m)</strong> in the morning, when the air is cold and still and the machine performs best, and reaches Kathmandu in about forty-five minutes with a fuel stop at Lukla or Surke.</p><p>At this altitude the B3e carries a maximum of <strong>five passengers</strong> and often fewer, so a full expedition flies in shuttles roughly an hour apart, with the leader on the last one. <strong>Weather is still the deciding factor</strong>: helicopters cannot fly into Khumbu cloud, and a socked-in morning means waiting until midday or, occasionally, the next day. Expedition equipment and the base camp itself come out by yak as usual.</p>",
      },
      AD_INSURANCE,
      AD_KIT,
    ],
    faqs: [
      { question: "Does the helicopter really fly from base camp?", answer: "Yes — Ama Dablam base camp at 4,600 m has an established landing zone used routinely through the season for supply and evacuation. In poor visibility the pilot may ask the team to walk down to Pangboche or Dingboche, where the cloud base is usually higher, but base camp is the planned departure point." },
      { question: "What happens if the helicopter cannot fly?", answer: "You wait — most Khumbu mornings clear by late morning. If a full day passes with no window, the team walks down toward Namche and flies from there or from Lukla. If the sector is never flown, its cost is refunded in full." },
      { question: "How many people fit in one flight?", answer: "Up to five passengers at base camp altitude, and fewer on a warm morning or with heavy loads, because thin air limits what the machine can lift. A larger expedition flies in shuttles about an hour apart, and the leader flies out with the last group." },
      { question: "What happens to the expedition equipment?", answer: "It comes out the way it went in — base camp is struck and carried down by yak and porter to Lukla, and flown to Kathmandu on a cargo flight. Your personal duffel can go either with you on the helicopter within the weight allowance, or by yak, with delivery to your Kathmandu hotel a few days later." },
      { question: "Is flying out bad for recovery?", answer: "No. Descending quickly from altitude is entirely safe and is exactly what a medical evacuation would do — it is fast ascent that causes problems. Most climbers report feeling markedly better within an hour of landing in Kathmandu." },
      { question: "How much baggage can I take on the flight?", answer: "Around 15 kg per person including your day pack, and loads are weighed at base camp. Anything above that travels by yak and is delivered to your Kathmandu hotel at no extra cost, usually within three or four days." },
      { question: "Is the flight safe?", answer: "Khumbu helicopter operations are routine and flown daily in both seasons by pilots who fly nothing else, and the operators we use are the ones the rescue services use. The limiting factor is always visibility, and a delayed flight is the system working correctly rather than failing." },
      { question: "Can I use the helicopter to arrive as well?", answer: "We do not recommend it and do not offer it as standard. The walk in through Namche and Dingboche is the acclimatisation that makes the expedition work, and flying to base camp would throw that away. The helicopter belongs at the end of the trip, not the start." },
      { question: "Do I still get all three reserve days?", answer: "Yes. The reserve days sit before the flight, so the summit keeps every one of its chances. The helicopter replaces the walk out, not any part of the climbing schedule." },
      { question: "What is the view like on the way back?", answer: "The best forty-five minutes of the trip for most people. The route runs down the Imja valley past the south-west ridge you have just climbed, over Tengboche on its saddle, above Namche, into the Dudh Koshi gorge and out over the middle hills — the entire expedition, in order, in less than an hour." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "One-way flight from Kathmandu to Lukla, including the road transfer to Manthali in Ramechhap when the flights are operating from there in peak season.",
        "Helicopter flight from Ama Dablam base camp to Kathmandu after the expedition, on a shared shuttle at our scheduled departure time.",
      ],
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and Camp 2 (5,900 m).",
      permits: AD_PERMITS,
      guide: AD_LEADER,
      sherpa: AD_SHERPA,
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day and high-altitude food and fuel for the camps above.",
        "A technical training and assessment day at base camp on rock in crampons, fixed-rope ascent, and abseiling from hanging stances.",
        "Two full acclimatisation rotations, with nights at Camp 1 and Camp 2 before the summit push.",
        "Our share of fixing and maintaining the route, including the Yellow Tower, the Grey Tower and the Mushroom Ridge.",
        "Base camp solar power for charging, and a satellite weather forecast throughout the expedition period.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Yak and porter transport of all expedition equipment between Lukla and base camp, and of any baggage above the helicopter weight allowance.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for the climbing Sherpas, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — harness, crampons, ice axe, belay device, ascender and screwgates — which climbers must bring rather than rent for this expedition.",
        "Private helicopter charter, if you would rather not fly on the scheduled shared shuttle.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation or transport caused by a helicopter grounded by weather; the unused sector is refunded if the team walks out instead.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 28-day expedition on the south-west ridge of Ama Dablam (6,812 m) with two acclimatisation rotations and three reserve days, ending with a helicopter flight from base camp directly to Kathmandu.",
    inExDescription:
      "The Lukla flight in, the helicopter flight out, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the NMA climbing permit and park fees, an expedition leader with one high-altitude Sherpa per climber, a base camp cook crew, all group climbing equipment, our share of the route fixing, two rotations, base camp power and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, personal gear, city meals, summit bonus, tips and private charter upgrades are not.",
    bestTime: "Oct-Nov, Apr-May",
    meta: {
      title: "Ama Dablam Expedition with Helicopter Return (6,812 m) — 28 Days | Green Compass Treks",
      description:
        "Climb Ama Dablam on the full 28-day expedition with two rotations and three reserve days, then fly out by helicopter from base camp to Kathmandu. No Lukla flight to gamble on and two days saved after the summit.",
      keywords:
        "ama dablam helicopter return, ama dablam expedition heli, ama dablam fly out, ama dablam 28 days, khumbu helicopter, ama dablam cost",
      tags: "Ama Dablam, Helicopter Return, Everest Region, Expedition, Technical Climb, Khumbu",
    },
  },
  days: [
    ...sharedAmaDablamApproach("twenty-eight day"),
    // The second rotation, the rest days, the summit push and the three reserve
    // days are word for word the standard expedition's; only the ending differs.
    ...amaDablamExpedition.days.slice(14, 26).map((d) =>
      d.title.startsWith("First Reserve Day")
        ? {
            ...d,
            html: d.html.replace(
              "they are the reason this itinerary is thirty days rather than twenty-four",
              "they sit before the helicopter, so the summit keeps every one of its chances",
            ),
          }
        : d,
    ),
    {
      title: "Helicopter Flight from Ama Dablam Base Camp (4,600 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Duffels are weighed after breakfast and the team waits for the machine. Helicopters fly the Khumbu in the morning, when the air is cold and still, so the departure is early and any wait is for cloud to lift off the valley.",
        "The <strong>AS350 B3e</strong> takes up to five at base camp altitude, so a full expedition flies in shuttles about an hour apart, with the leader on the last one. Base camp itself comes out by yak, as it went in.",
        "The route runs down the Imja valley past the <strong>south-west ridge you have just climbed</strong> — the spur, the Yellow Tower and Camp 2 all identifiable from the air — over the <strong>Tengboche</strong> saddle, above Namche and into the <strong>Dudh Koshi gorge</strong>, usually with a fuel stop at Lukla, then out over the terraced middle hills.",
        "Forty-five minutes of flying and you are in <strong>Kathmandu (1,400 m)</strong>. The afternoon is free and the <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
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
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any baggage that came out by yak rather than by helicopter is delivered to your hotel or forwarded on, and our office confirms the arrangement before you leave.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — for a good many climbers Ama Dablam is the mountain that leads to Baruntse, Himlung or an 8,000 m peak.",
      ),
    },
  ],
};
