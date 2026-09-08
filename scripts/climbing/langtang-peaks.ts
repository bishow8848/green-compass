import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  GATLANG, KYANJIN_GOMPA, LAMA_HOTEL, LANGTANG_VILLAGE, NAYA_KANGA, NAYA_KANGA_BC,
  NAYA_KANGA_HIGH_CAMP, PALDOR_BC, PALDOR_HIGH_CAMP, PALDOR_PEAK, SOMDANG, SYABRUBESI,
  THULO_SYABRU, YALA_BC, YALA_PEAK,
} from "./places";

/**
 * The three easiest snow peaks within a day's drive of Kathmandu.
 *
 * Yala and Naya Kanga are both climbed from Kyanjin Gompa at the head of the
 * Langtang valley, and Paldor from the Ganesh Himal foothills west of it.
 * None of them needs previous mountaineering experience, which is exactly why
 * they are the peaks most first-time climbers in Nepal actually want and the
 * gap this file fills: the catalogue already sells Langshisa Ri, Langtang
 * Lirung and Dorje Lakpa here, all of which are serious expeditions.
 */

// Shared days: every one of these three starts and ends the same way.
const arrivalDay: ClimbDay = {
  title: "Arrival in Nepal – Kathmandu (1,400 m)",
  elevation: "1,400 m",
  accommodation: "Kathmandu",
  placeDescription: KTM_PLACE,
  ...KATHMANDU,
  html: p(
    "Welcome to Nepal. You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
    "Your climbing guide joins you in the afternoon. The Langtang peaks are close enough to Kathmandu that the logistics are simple, so the briefing concentrates on the climbing itself: what the summit day involves, how the fixed rope is used, and what we expect you to be able to do on it.",
    "The rest of the day is yours to rest after the flight. Overnight in Kathmandu.",
  ),
};

const briefingDay: ClimbDay = {
  title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
  elevation: "1,400 m",
  accommodation: "Kathmandu",
  placeDescription: KTM_PLACE,
  ...KATHMANDU,
  html: p(
    "A working day in the city. The morning goes on paperwork: the Nepal Mountaineering Association peak permit is finalised, insurance details for the crew are lodged, and your own policy is checked against the altitude you are going to.",
    "The afternoon is the equipment inspection, which matters more than most people expect. Every item of personal climbing kit is laid out and checked — harness, crampons, ice axe, ascender, descender, helmet, carabiners and boots — and anything unsuitable is replaced or hired from the shops in Thamel.",
    "If you have never used an ascender, your guide will run you through it here rather than on the mountain. Overnight in Kathmandu.",
  ),
};

const departureDay: ClimbDay = {
  title: "Departure from Nepal",
  elevation: "1,400 m",
  accommodation: "Airport",
  placeDescription: AIRPORT_PLACE,
  ...AIRPORT,
  html: p(
    "A slow morning in Kathmandu. If your flight is late in the day there is time for last shopping in Thamel, a walk around Boudhanath or Durbar Square, or simply a long breakfast.",
    "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
    "If you are staying on in Nepal we are happy to arrange onward travel, a Chitwan extension, a Pokhara flight or extra hotel nights — just tell us while you are still on the mountain so we can book it.",
    "Thank you for climbing with us, and we hope to see you back on a bigger peak.",
  ),
};

const driveToSyabrubesi: ClimbDay = {
  title: "Drive from Kathmandu (1,400 m) to Syabrubesi (1,460 m)",
  elevation: "1,460 m",
  accommodation: "Syabrubesi",
  placeDescription: "The roadhead town at the confluence of the Bhote Koshi and Langtang Khola, where the valley walk begins.",
  ...SYABRUBESI,
  html: p(
    "A long day on a road that has improved a great deal and is still not good. The route climbs out of the Kathmandu valley at Kakani, drops to the Trishuli, then turns north up the <strong>Pasang Lhamu Highway</strong> toward the Tibetan border.",
    "The last three hours run high above the Bhote Koshi on a shelf cut into the hillside, with the Ganesh Himal appearing to the west and the border ranges ahead.",
    "Around 7 to 8 hours including stops. <strong>Syabrubesi (1,460 m)</strong> is a strip of lodges either side of a bridge, entirely rebuilt since the 2015 earthquake. Overnight in a lodge.",
  ),
};

const langtangApproach: ClimbDay[] = [
  {
    title: "Trek from Syabrubesi (1,460 m) to Lama Hotel (2,470 m)",
    elevation: "2,470 m",
    accommodation: "Lama Hotel",
    placeDescription: "A cluster of lodges in deep forest on the north bank of the Langtang Khola.",
    ...LAMA_HOTEL,
    html: p(
      "The walk into the valley begins. The trail crosses the Bhote Koshi and follows the <strong>Langtang Khola</strong> east into a steep-sided gorge of oak, maple and rhododendron.",
      "It is a forest day rather than a mountain one: the river is loud below, langur monkeys move in the canopy, and there is almost no view out until the very end.",
      "The climb is steady rather than steep, with several river crossings on suspension bridges and a couple of tea shops on the way.",
      "Around 6 hours to <strong>Lama Hotel (2,470 m)</strong>, which is not a hotel but a handful of lodges in a clearing. Overnight in a lodge.",
    ),
  },
  {
    title: "Trek from Lama Hotel (2,470 m) to Langtang Village (3,430 m)",
    elevation: "3,430 m",
    accommodation: "Langtang Village",
    placeDescription: "A rebuilt Tamang village on the valley floor, destroyed by an avalanche in the 2015 earthquake.",
    ...LANGTANG_VILLAGE,
    html: p(
      "The valley opens today. The trail climbs steadily through thinning forest to Ghoda Tabela, where the trees give out and <strong>Langtang Lirung (7,227 m)</strong> appears at the head of the valley.",
      "From there the walking is on open pasture past yak herds, water mills and long mani walls.",
      "You pass the site of the old <strong>Langtang village</strong>, buried in April 2015 when the earthquake brought down an ice and rock avalanche that killed most of its inhabitants. A memorial stands on the debris field, and the new village has been rebuilt just beyond it by the survivors.",
      "Around 6 hours. Overnight in a lodge at Langtang Village.",
    ),
  },
  {
    title: "Trek from Langtang Village (3,430 m) to Kyanjin Gompa (3,870 m)",
    elevation: "3,870 m",
    accommodation: "Kyanjin Gompa",
    placeDescription: "A monastery settlement at the head of the Langtang valley, ringed by peaks and glaciers.",
    ...KYANJIN_GOMPA,
    html: p(
      "A short day, deliberately, because the altitude gain matters more than the distance from here on.",
      "The trail continues up the widening valley floor past chortens, prayer walls and stone-walled yak pastures, with <strong>Langtang Lirung</strong> filling the northern skyline and the Langtang glacier moraine ahead.",
      "Around 3 to 4 hours brings you to <strong>Kyanjin Gompa (3,870 m)</strong>, a settlement of lodges around an old monastery and the Swiss-founded yak cheese factory, closed in by peaks on three sides.",
      "The afternoon is free to rest, or to walk up the moraine toward the glacier. Overnight in a lodge at Kyanjin Gompa.",
    ),
  },
];

const kyanjinAcclimatisation: ClimbDay = {
  title: "Acclimatisation Day at Kyanjin Gompa (3,870 m) – Kyanjin Ri (4,773 m)",
  elevation: "4,773 m",
  accommodation: "Kyanjin Gompa",
  placeDescription: "A monastery settlement at the head of the Langtang valley, ringed by peaks and glaciers.",
  ...KYANJIN_GOMPA,
  html: p(
    "An active acclimatisation day, and the one that decides how the summit goes.",
    "The climb to <strong>Kyanjin Ri (4,773 m)</strong> starts directly behind the lodges and gains 900 m in a steep two to three hours on a good trail. There is a lower summit at around 4,300 m that many groups stop at; going to the top is better preparation.",
    "From the prayer flags the whole valley head is laid out — <strong>Langtang Lirung</strong>, Kimshung, Langshisa Ri, the Langtang glacier, and the peak you are about to climb.",
    "Back down for a late lunch. The afternoon is for rest, fluids and a gear check with your guide. Overnight at Kyanjin Gompa.",
  ),
};

const langtangWalkOut: ClimbDay[] = [
  {
    title: "Trek from Kyanjin Gompa (3,870 m) to Lama Hotel (2,470 m)",
    elevation: "2,470 m",
    accommodation: "Lama Hotel",
    placeDescription: "A cluster of lodges in deep forest on the north bank of the Langtang Khola.",
    ...LAMA_HOTEL,
    html: p(
      "A long descent that retraces the walk in, covering two days of ascent in one.",
      "The trail runs back down the open valley past Langtang village and the avalanche memorial, then drops into the forest below Ghoda Tabela.",
      "It is hard on the knees rather than the lungs, and trekking poles earn their place. The compensation is the oxygen: after a week above 3,400 m, arriving back in the trees at 2,470 m feels like a different climate.",
      "Around 6 hours. Overnight in a lodge at Lama Hotel.",
    ),
  },
  {
    title: "Trek from Lama Hotel (2,470 m) to Syabrubesi (1,460 m) ",
    elevation: "1,460 m",
    accommodation: "Syabrubesi",
    placeDescription: "The roadhead town at the confluence of the Bhote Koshi and Langtang Khola, where the valley walk begins.",
    ...SYABRUBESI,
    html: p(
      "The last walking day, down through the gorge on the trail you came up.",
      "The forest is at its best in the morning light, and the river crossings come in quick succession as the valley narrows.",
      "Around 5 hours to <strong>Syabrubesi (1,460 m)</strong>, where there is a hot shower, a cold beer and a bed with a proper mattress.",
      "This is traditionally the evening the crew is paid and thanked, and the climbing Sherpas who fixed the rope on your summit day get their bonus. Overnight in a lodge at Syabrubesi.",
    ),
  },
  {
    title: "Drive from Syabrubesi (1,460 m) to Kathmandu (1,400 m)",
    elevation: "1,400 m",
    accommodation: "Kathmandu",
    placeDescription: KTM_RETURN_PLACE,
    ...KATHMANDU,
    html: p(
      "The drive back down the Pasang Lhamu Highway and over the valley rim, around 7 to 8 hours with a lunch stop.",
      "The road runs high above the Bhote Koshi for the first stretch, then descends to the Trishuli and climbs again to Kakani, where the whole Ganesh Himal and Langtang range stands on the northern horizon — a good last look at the peak you climbed.",
      "Transfer to your hotel in Thamel. The afternoon is free for a shower, a change of clothes and souvenir shopping, and most groups meet for a farewell dinner in the evening.",
      "Overnight in Kathmandu.",
    ),
  },
];

/** Yala Peak: the easiest snow summit in Nepal that is worth the trip. */
export const yalaPeakClimbing: Climb = {
  region: "Langtang Region",
  price: 1690,
  difficulty: "moderate",
  maxAltitude: 5520,
  grade: "PD",
  center: [85.55, 28.21],
  zoom: 11,
  content: {
    slug: "yala-peak-climbing",
    title: "Yala Peak Climbing",
    overview:
      "<p><strong>Yala Peak (5,520 m)</strong> is the gentlest real summit in Nepal — a snow dome above Kyanjin Gompa at the head of the Langtang valley, climbed on a single long day from a high camp with no technical difficulty beyond walking roped on easy glacier. It is the peak to choose when you want to stand on a Himalayan summit rather than beside one, and have never worn crampons.</p><p>The route reaches it in fifteen days from Kathmandu with no flight involved: a drive to Syabrubesi, three days up the Langtang valley through rebuilt Tamang villages and yak pasture, an acclimatisation climb of Kyanjin Ri, and then the peak. From the top the view runs across the Tibetan border to <strong>Shishapangma (8,027 m)</strong>, the only 8,000 m peak entirely inside Tibet, with Langtang Lirung, Dorje Lakpa and Naya Kanga around you.</p>",
    highlights: [
      ["A Summit Without Experience", "A 5,520 m snow peak that a fit hill walker can climb with two days of instruction and no previous mountaineering."],
      ["Shishapangma from the Top", "The view north across the border to the only 8,000 m peak lying wholly in Tibet."],
      ["No Domestic Flight", "A drive from Kathmandu rather than a weather-dependent mountain airstrip — the trip runs on schedule."],
      ["Kyanjin Ri (4,773 m)", "A 900 m acclimatisation climb with the whole valley head laid out beneath it."],
      ["The Langtang Valley", "Forest gorge, yak pasture and villages rebuilt by the survivors of the 2015 earthquake."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the seasons. Autumn gives the most stable weather and the clearest views north into Tibet, with cold nights and firm snow on the summit slope. Spring is warmer and brings rhododendron through the forest section of the walk in, with the trade-off of more afternoon cloud.</p><p>Yala is climbable in <strong>December and February</strong> by well-equipped groups — the altitude is modest and the route is short — but the cold at high camp is serious and several Kyanjin lodges close. We avoid the <strong>monsoon</strong> entirely: the summit view is the point of this peak and from June to September it is not there.</p>",
      },
      {
        heading: "Climbing Difficulty & Experience Needed",
        content:
          "<p>Yala is graded <strong>PD</strong> and is the most straightforward peak in this catalogue. The summit day is long — eight to ten hours from high camp — but the ground is a snow slope of no more than 35 degrees with a short rocky section near the top, and the crux is altitude and stamina rather than technique.</p><p><strong>No previous mountaineering experience is required.</strong> You need to be a confident hill walker able to manage eight hours on the move at altitude, and willing to learn to use crampons, an ice axe and a fixed line, which your guide teaches at base camp the day before. Two to three months of hill walking and cardiovascular training is the right preparation.</p>",
      },
      {
        heading: "Permits & the NMA Peak Fee",
        content:
          "<p>Yala Peak sits in an unusual position. It is below 5,800 m and has historically been treated as a <strong>trekking peak</strong> outside the Nepal Mountaineering Association's numbered list, which at times has meant no peak royalty at all. The rules here have changed more than once and are enforced differently from season to season.</p><p>We include the <strong>NMA peak permit</strong> in your package as the safe assumption, along with the <strong>Langtang National Park entry permit</strong> and the trekking registration. If the fee is not levied for your departure, the difference is refunded rather than kept. Your guide carries all the paperwork, and the checkposts at Dhunche and Ghoda Tabela check it on the way in.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Trekking kit plus the climbing layer. Bring waterproof trekking boots for the valley and <strong>insulated mountaineering boots</strong> for the summit day, which can be hired in Kathmandu. Add three or four base layers, a fleece, a <strong>down jacket rated to -20°C</strong>, a waterproof shell jacket and trousers, thermal leggings, a warm hat, a sun hat, liner gloves, insulated gloves, gaiters and five pairs of wool socks. A sleeping bag rated to <strong>-20°C</strong> is needed for high camp.</p><p>Personal climbing hardware — harness, crampons, ice axe, ascender, descender, helmet and locking carabiners — is available as a rental add-on and checked in Kathmandu. Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries, category 4 sunglasses and a spare pair, glacier-grade sunscreen and lip balm, an insulated flask, purification tablets or a filter, blister care and a power bank.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You sleep in <strong>teahouse lodges</strong> for the whole valley section — twin rooms with a bed, mattress and blankets, shared bathrooms and a heated dining room — and in <strong>tents</strong> for the two nights at Yala base camp and high camp. The Kyanjin lodges are among the better ones in Nepal for a valley this remote, several with hot showers and reliable solar power.</p><p>Three meals a day are included throughout. Lodge menus run to <em>dal bhat</em>, thukpa, fried rice, noodles, potatoes, pasta and eggs, and Kyanjin has the yak cheese factory, which is worth a visit and a purchase. On the mountain the cook crew prepares everything at camp. Water comes from lodge taps and melted snow above; treat it with tablets, a filter or a UV pen and carry an insulated flask because bottles freeze at high camp.</p>",
      },
    ],
    faqs: [
      { question: "Can I climb Yala Peak with no mountaineering experience at all?", answer: "Yes, and most people on it have none. You need hill-walking fitness and a head for a long day at altitude. Crampon technique, ice axe use and moving on a fixed line are taught at base camp the day before the summit, which is enough for ground of this angle. If you have never worn crampons, this is a good place to start." },
      { question: "How does Yala compare with Island Peak or Mera?", answer: "It is easier than both and considerably shorter. Island Peak has a steep headwall with fixed rope and a ladder crossing; Mera is not technical but goes to 6,476 m over three weeks. Yala is 5,520 m, fifteen days, and the summit slope is a walk in crampons. It is the natural first peak before either of them." },
      { question: "Is there really no flight involved?", answer: "None. Syabrubesi is a seven to eight hour drive from Kathmandu on a road that is rough in places but open year-round in season. That removes the single biggest cause of delay on Khumbu climbs, which is why we recommend Yala to anyone whose dates are tight." },
      { question: "Can I see Everest from the summit?", answer: "No — it is too far east and blocked by the Jugal Himal. What you do see is Shishapangma across the Tibetan border, Langtang Lirung, Langtang Ri, Dorje Lakpa, Naya Kanga and Gangchenpo, plus a long view onto the Tibetan plateau. It is a different panorama rather than a lesser one." },
      { question: "What is high camp like?", answer: "Two-person tents on rock and snow at around 5,000 m, with a mess tent and a kitchen tent. It is cold, the ground is uneven and you will not sleep well, which is normal at that height. You arrive in the early afternoon, eat early and leave around 3 a.m., so it is a short and functional night rather than a comfortable one." },
      { question: "What happens if the weather turns on summit day?", answer: "We turn round. The itinerary has a reserve day built in specifically so that a bad morning does not end the trip, and Yala is close enough to base camp that a second attempt the following day is realistic. Your guide makes the call and it is not negotiable on the mountain." },
      { question: "Do I need to hire mountaineering boots?", answer: "You need insulated boots for the summit day — trekking boots are not warm enough at 5,520 m before dawn and will not hold a crampon properly. If you do not own a pair, hire them in Kathmandu during the equipment check; the shops in Thamel carry the standard sizes and the cost is modest." },
      { question: "Is altitude sickness a risk on this itinerary?", answer: "Less than on most climbing trips, because the valley approach gains height slowly and the Kyanjin Ri day is a proper acclimatisation climb. You sleep at 3,870 m for two nights before going higher. Your guide checks oxygen saturation each evening from Langtang village onward." },
      { question: "How many people are on a departure?", answer: "We run these with a maximum of eight climbers, and above base camp the ratio is one climbing Sherpa to every two climbers. On the summit day that means a rope team of three, which is the right number for ground of this angle and gives everyone a proper margin." },
      { question: "Can Yala be combined with anything else?", answer: "It combines naturally with the Gosaikunda lakes, walking out over the Laurebina La to Dhunche instead of retracing the valley, which adds three days. Naya Kanga in the same valley is the obvious step up for a second trip. Tell us at booking and we will price the extension." },
    ],
    inclusions: {
      transport: [
        "Private vehicle from Kathmandu to Syabrubesi and back at the end of the climb.",
        "Private airport and hotel transfers in Kathmandu.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping: "Tented accommodation at Yala base camp and high camp, with a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association peak permit, Langtang National Park entry permit and required trekking registration.",
      sherpa: "One climbing Sherpa for every two climbers above base camp.",
      extra: [
        "Two days of crampon, ice axe and fixed-line instruction before the summit attempt.",
        "A reserve day at base camp for a second summit attempt if weather closes the first.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus: "Tips for the guide, climbing Sherpa, porters and support staff.",
    },
    porterDays: 8,
    gearRentalDays: 9,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 15-day climb of Yala Peak (5,520 m) at the head of the Langtang valley, with no domestic flight and no previous mountaineering experience required.",
    inExDescription:
      "Airport transfers, private transport to and from Syabrubesi, Kathmandu hotel nights, teahouse and tented accommodation, all meals on the trip, the peak and national park permits, a licensed climbing guide, climbing Sherpas above base camp, group climbing equipment and government taxes are included, while international flights, visa, insurance, personal climbing gear, porter service, city meals, personal expenses and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Yala Peak Climbing – 15 Days in the Langtang Valley",
      description:
        "Climb Yala Peak (5,520 m) above Kyanjin Gompa in 15 days with no flight and no previous mountaineering experience. Shishapangma and Langtang Lirung from the summit.",
      keywords:
        "Yala Peak climbing, Yala Peak Nepal, beginner peak climbing Nepal, Langtang peak climbing, first Himalayan peak, easy climbing peak Nepal, 5500m peak Nepal",
      tags: "Yala Peak Climbing, Langtang Region, Trekking Peak, Beginner Climb, Nepal Peak Climbing",
    },
  },
  days: [
    arrivalDay,
    briefingDay,
    driveToSyabrubesi,
    ...langtangApproach,
    kyanjinAcclimatisation,
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Yala Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Yala Base Camp",
      placeDescription: "A tented camp on the moraine shelf north-east of Kyanjin, below the Yala snowline.",
      ...YALA_BC,
      html: p(
        "A short move onto the mountain. The trail climbs north-east out of Kyanjin on yak paths, gaining height steadily across grazing shelves and moraine with the Langtang glacier below on the left.",
        "Around 4 hours brings you to <strong>Yala base camp (4,600 m)</strong>, a flat shelf where the crew has the mess tent up and tea waiting.",
        "The afternoon is the first climbing school: your guide runs the group through fitting crampons, using an ice axe, walking in a rope team and moving on a fixed line, on a snow slope beside camp.",
        "It is practical rather than theoretical, and by dinner everyone has worn the gear. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Move to Yala High Camp (5,000 m) and Climbing Practice",
      elevation: "5,000 m",
      accommodation: "Yala High Camp",
      placeDescription: "A tented camp on the ridge shelf at the foot of the Yala summit slope.",
      lng: 85.5836,
      lat: 28.2444,
      html: p(
        "A short, steep carry to <strong>high camp at 5,000 m</strong>, two to three hours up moraine and snow patches onto a shelf directly beneath the summit slope.",
        "You arrive by late morning, which leaves the whole afternoon for a second session of instruction on the ground you will actually climb — self-arrest with the axe, ascending and descending a fixed line, and rope-team spacing.",
        "Your guide walks the first section of the summit route so that the start is familiar in the dark.",
        "An early dinner and an early night. The wake-up is around 2.30 a.m. Overnight in tents at high camp.",
      ),
    },
    {
      title: "Summit Yala Peak (5,520 m) and Descend to Kyanjin Gompa (3,870 m)",
      elevation: "5,520 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "A monastery settlement at the head of the Langtang valley, ringed by peaks and glaciers.",
      ...KYANJIN_GOMPA,
      html: p(
        "Summit day. You leave high camp around 3 a.m. by headlamp, roped in teams of three, climbing the snow slope above camp at a deliberate, slow pace.",
        "The angle stays under 35 degrees and the ground is straightforward, but at this altitude in the cold and dark it is genuine work. A short rocky step below the top is the only place hands come out of gloves.",
        "You reach the summit of <strong>Yala Peak (5,520 m)</strong> at or shortly after sunrise. North across the border is <strong>Shishapangma (8,027 m)</strong>; around you are Langtang Lirung, Langtang Ri, Dorje Lakpa, Gangchenpo and Naya Kanga.",
        "Down to high camp, strike the tents, and continue all the way to <strong>Kyanjin Gompa</strong>. Around 10 to 12 hours in total. Overnight in a lodge.",
      ),
    },
    {
      title: "Reserve Day at Kyanjin Gompa (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "A monastery settlement at the head of the Langtang valley, ringed by peaks and glaciers.",
      ...KYANJIN_GOMPA,
      html: p(
        "The contingency day, held in reserve for a weather-shortened summit attempt. If the mountain has already been climbed it becomes a rest day, and it is a good place to spend one.",
        "Options include the climb to <strong>Tsergo Ri (4,984 m)</strong> for a wider view than Kyanjin Ri, a walk out along the moraine toward the Langshisa glacier, or the yak cheese factory and the monastery in the village.",
        "Most groups do very little, which after a summit day is the correct choice.",
        "Overnight in a lodge at Kyanjin Gompa.",
      ),
    },
    ...langtangWalkOut,
    departureDay,
  ],
};

/** Naya Kanga: the Langtang valley's proper technical trekking peak. */
export const nayaKangaPeakClimbing: Climb = {
  region: "Langtang Region",
  price: 2190,
  difficulty: "challenging",
  maxAltitude: 5844,
  grade: "PD+",
  center: [85.55, 28.19],
  zoom: 11,
  content: {
    slug: "naya-kanga-peak-climbing",
    title: "Naya Kanga Peak Climbing",
    overview:
      "<p><strong>Naya Kanga (5,844 m)</strong> stands directly opposite Kyanjin Gompa on the south wall of the Langtang valley, above the Ganja La. It is a Nepal Mountaineering Association trekking peak with a genuine mountaineering summit day — a glacier approach, a steepening snow and ice slope of up to 45 degrees, and a fixed line on the final headwall — and it is the natural step up for a climber who has done Yala or Island Peak and wants something harder.</p><p>The route runs sixteen days from Kathmandu with no flight: the Langtang valley approach, an acclimatisation climb of Kyanjin Ri, then base camp below the Ganja La and a high camp on the moraine. From the summit the view is one of the best in the region — <strong>Langtang Lirung (7,227 m)</strong> and the whole valley head to the north, <strong>Shishapangma</strong> over the border, and the Jugal Himal running east.</p>",
    highlights: [
      ["A Real Mountaineering Summit", "Glacier travel, a 45-degree ice slope and a fixed line on the headwall, at a grade a fit beginner can be trained onto."],
      ["Langtang Lirung from Across the Valley", "The summit looks straight at the 7,227 m north wall, the finest view in the Langtang."],
      ["No Domestic Flight", "A drive from Kathmandu to Syabrubesi, so the trip is not hostage to a mountain airstrip."],
      ["The Ganja La Approach", "Base camp sits below the 5,122 m pass on the old trading route between Langtang and Helambu."],
      ["Three Days of Instruction", "Crampon, axe, rope and fixed-line training at base camp before any summit attempt."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to mid-November</strong>. Naya Kanga is more season-sensitive than Yala because the summit slope is ice as much as snow, and its condition varies. Autumn is the more reliable window, with firm névé and settled weather; spring can be warmer but the slope softens through the morning, which is why summit day starts very early in either season.</p><p>We do not run the peak in <strong>winter</strong> — the headwall becomes hard blue ice and the approach to the Ganja La is avalanche-prone after snowfall — or in the <strong>monsoon</strong>, when the whole face is loaded and the view is absent. If your dates fall outside these windows, Yala Peak in the same valley is climbable over a longer season.</p>",
      },
      {
        heading: "Climbing Difficulty & Experience Needed",
        content:
          "<p>Graded <strong>PD+</strong>, and honestly so. The summit day is ten to fourteen hours from high camp, on glacier for the first part and then on a snow and ice slope that steepens from 30 to around 45 degrees, with a fixed line on the final headwall and a short exposed ridge to the top.</p><p>You do not need previous Himalayan experience, but you should be an experienced hill walker with real endurance, and ideally have used crampons before. Three days of instruction are built into the itinerary at base camp. Three months of preparation is the right level: long hill days with a loaded pack, plus running or cycling for the aerobic base and some leg strength work for the descent.</p>",
      },
      {
        heading: "Permits & Regulations",
        content:
          "<p>Naya Kanga is an <strong>NMA Group B trekking peak</strong>, which means a peak permit issued through a registered agency, a licensed climbing guide and a garbage deposit lodged with the Nepal Mountaineering Association. All of that is included in your package, along with the <strong>Langtang National Park entry permit</strong> and the trekking registration.</p><p>The permit is issued for a named party on fixed dates, so we need passport scans and photographs at least a week before departure. Your guide carries the originals and presents them at the Dhunche and Ghoda Tabela checkposts. The garbage deposit is refunded to us on production of the waste carried out, which the crew does as a matter of course.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Full trekking kit plus proper climbing equipment. <strong>Insulated mountaineering boots</strong> rated for 6,000 m are essential and can be hired in Kathmandu. Add four base layers, a fleece, a <strong>down jacket rated to -25°C</strong>, a waterproof shell jacket and trousers, thermal leggings, a warm hat, a sun hat, liner gloves, insulated gloves, a spare pair of gloves, gaiters and five pairs of wool socks. A sleeping bag rated to <strong>-25°C</strong> is needed at high camp.</p><p>Personal climbing hardware — harness, crampons, ice axe, ascender, descender, helmet and locking carabiners — is available as a rental add-on and inspected in Kathmandu. Also pack a 40-litre pack, trekking poles, a headlamp with spare batteries, category 4 sunglasses and goggles, glacier-grade sunscreen and lip balm, an insulated flask, purification tablets or a filter, blister care and a power bank.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>Teahouse lodges for the valley approach and the walk out, and <strong>tents</strong> for three nights at base camp and high camp. The lodges at Kyanjin Gompa are comfortable, several with hot showers and solar power; Lama Hotel and Langtang village are simpler but perfectly adequate.</p><p>Three meals a day are included throughout. Lodge menus cover <em>dal bhat</em>, thukpa, fried rice, noodles, potatoes, pasta and eggs, and Kyanjin has the yak cheese factory. On the mountain a cook crew works out of the kitchen tent and the food is better than most people expect at 5,000 m. Water comes from lodge taps and melted snow above; treat it with tablets, a filter or a UV pen, and carry an insulated flask because everything freezes at high camp.</p>",
      },
    ],
    faqs: [
      { question: "How much harder is Naya Kanga than Yala Peak?", answer: "Considerably. Yala is a snow walk at up to 35 degrees; Naya Kanga has glacier travel, a slope steepening to around 45 degrees, a fixed line on the headwall and an exposed summit ridge. Yala is a first peak, Naya Kanga is a second or third one. If you have climbed Island Peak, this is a fair comparison." },
      { question: "Do I need previous climbing experience?", answer: "It is not a formal requirement and we train you at base camp over three days, but you will have a much better time if you have worn crampons before. Fit hill walkers with no experience do summit this peak; those who struggle are usually the ones who underestimated the length of the day rather than the technical ground." },
      { question: "What is the summit day actually like?", answer: "A start around 1 a.m. from high camp, two hours on moraine and glacier to the foot of the face, then four to five hours on the snow and ice slope with the crew fixing rope where needed, a short exposed ridge, and the summit around mid-morning. Then all of it again in reverse. Ten to fourteen hours." },
      { question: "Is the Ganja La part of this itinerary?", answer: "The base camp sits below the pass and you walk the approach to it, but the itinerary does not cross into Helambu. Crossing the Ganja La as an exit is possible for strong groups and turns the trip into around seventeen days with a genuinely committing camping section; tell us at booking if you want it priced." },
      { question: "How many summit attempts do we get?", answer: "One scheduled attempt plus a reserve day at base camp, so a second attempt is possible if the first is turned back by weather rather than by the group's condition. That reserve day is the difference between a trip that works and one that does not, and we build it in rather than sell it as an extra." },
      { question: "What is the success rate?", answer: "Around sixty to seventy per cent across a season, which is normal for a peak of this grade. Weather and snow condition on the headwall account for most turnarounds, group fitness for the rest. We would rather bring everyone down than push a marginal summit, and your guide's call on the mountain is final." },
      { question: "Can I hire climbing gear rather than buy it?", answer: "Yes. A full set of personal hardware — harness, crampons, ice axe, ascender, descender, helmet and carabiners — is available as an add-on and is fitted and checked during the Kathmandu equipment day. Mountaineering boots are hired separately and are the one item worth getting exactly right." },
      { question: "How cold is high camp?", answer: "At around 5,100 m in autumn, expect -15°C overnight and colder in a wind. That is why the kit list specifies a -25°C bag and why the summit start is so early — you are warmest moving. The mess tent has a stove for the evening but the sleeping tents do not." },
      { question: "Is there mobile signal on the mountain?", answer: "There is patchy NTC coverage at Kyanjin Gompa and none at base camp or above. Your guide carries a satellite communicator for weather updates and emergencies. Tell family at home not to expect contact for the four days from base camp onward." },
      { question: "What happens if I cannot continue above high camp?", answer: "You descend to base camp with an assistant guide while the rest of the group continues. That is one of the reasons the Sherpa ratio is one to two above base camp — it means a turnaround by one person does not end anybody else's climb, and nobody descends alone." },
    ],
    inclusions: {
      transport: [
        "Private vehicle from Kathmandu to Syabrubesi and back at the end of the climb.",
        "Private airport and hotel transfers in Kathmandu.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Naya Kanga base camp and high camp, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association peak permit, Langtang National Park entry permit and required trekking registration.",
      sherpa: "One climbing Sherpa for every two climbers above base camp.",
      groupGear:
        "Group climbing equipment: fixed and main ropes, snow bars, ice screws, and anchors placed on the headwall by the climbing crew.",
      extra: [
        "Three days of crampon, ice axe, rope and fixed-line instruction at base camp before the summit attempt.",
        "A reserve day at base camp for a second summit attempt if weather closes the first.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus: "Summit bonus for the climbing Sherpas, and tips for the guide, crew and support staff.",
    },
    porterDays: 10,
    gearRentalDays: 11,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "A 16-day climb of Naya Kanga (5,844 m) above the Ganja La, with a glacier approach, a 45-degree ice slope and three days of instruction at base camp.",
    inExDescription:
      "Airport transfers, private transport to and from Syabrubesi, Kathmandu hotel nights, teahouse and tented accommodation, all meals on the trip, the peak and national park permits, a licensed climbing guide, climbing Sherpas above base camp, group climbing equipment and government taxes are included, while international flights, visa, insurance, personal climbing gear, porter service, city meals, personal expenses and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Naya Kanga Peak Climbing – 16 Days above the Ganja La",
      description:
        "Climb Naya Kanga (5,844 m) in the Langtang valley in 16 days: glacier travel, a 45-degree ice slope, fixed line on the headwall and no domestic flight.",
      keywords:
        "Naya Kanga climbing, Naya Kanga peak, Ganja La peak climbing, Langtang climbing peak, NMA trekking peak, technical trekking peak Nepal, 5844m peak",
      tags: "Naya Kanga Peak Climbing, Langtang Region, Trekking Peak, Technical Climb, Nepal Peak Climbing",
    },
  },
  days: [
    arrivalDay,
    briefingDay,
    driveToSyabrubesi,
    ...langtangApproach,
    kyanjinAcclimatisation,
    {
      title: "Trek from Kyanjin Gompa (3,870 m) to Naya Kanga Base Camp (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Naya Kanga Base Camp",
      placeDescription: "A tented camp on the grassy shelf below the Ganja La, on the south side of the Langtang valley.",
      ...NAYA_KANGA_BC,
      html: p(
        "You cross to the other side of the valley today. The trail drops from Kyanjin to the <strong>Langtang Khola</strong>, crosses on a bridge, and begins the climb up the south flank toward the <strong>Ganja La</strong>.",
        "It is a steady 500 m of ascent on yak trails through juniper scrub and then open moraine, with the whole north side of the valley — Langtang Lirung, Kimshung and the glacier — opening up behind you as you gain height.",
        "Around 4 to 5 hours brings you to <strong>base camp at 4,400 m</strong>, a grassy shelf with water nearby where the crew has camp established.",
        "The afternoon is the first instruction session. Overnight in tents.",
      ),
    },
    {
      title: "Training Day at Naya Kanga Base Camp (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Naya Kanga Base Camp",
      placeDescription: "A tented camp on the grassy shelf below the Ganja La, on the south side of the Langtang valley.",
      ...NAYA_KANGA_BC,
      html: p(
        "A full day of climbing school on the snow slopes above camp, and the reason this itinerary is sixteen days rather than twelve.",
        "The morning covers crampon technique on hard and soft snow, ice axe use and self-arrest, and moving as a rope team with correct spacing.",
        "The afternoon is spent on the fixed line: ascending with a jumar, changing over at an anchor, and abseiling down — which on this peak matters more than the climbing, because most accidents on trekking peaks happen on the descent.",
        "Your guide watches everyone and will say plainly if someone is not ready for the summit. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Move to Naya Kanga High Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Naya Kanga High Camp",
      placeDescription: "A tented camp on the moraine shelf at the foot of the Naya Kanga glacier.",
      ...NAYA_KANGA_HIGH_CAMP,
      html: p(
        "A short, steep carry onto the mountain. The route climbs rough moraine and old snow for three to four hours to a shelf at around <strong>5,100 m</strong>, directly below the glacier.",
        "It is not far in distance but the ground is loose and the altitude is beginning to tell, so the pace is deliberately slow.",
        "You arrive by early afternoon. The crew fixes the tents while your guide walks the first section of the route with the group so the start is familiar in the dark, and confirms the summit plan and turnaround times.",
        "An early dinner and an early night. Wake-up is around midnight. Overnight in tents at high camp.",
      ),
    },
    {
      title: "Summit Naya Kanga (5,844 m) and Descend to Base Camp (4,400 m)",
      elevation: "5,844 m",
      accommodation: "Naya Kanga Base Camp",
      placeDescription: "A tented camp on the grassy shelf below the Ganja La, on the south side of the Langtang valley.",
      ...NAYA_KANGA_BC,
      html: p(
        "Summit day, starting around 1 a.m. Two hours of moraine and lower glacier by headlamp, roped up, brings you to the foot of the face.",
        "The slope steepens from 30 to around 45 degrees over the next four to five hours, on snow and ice, with the climbing crew fixing rope on the headwall where the angle is at its worst. A short exposed ridge leads to the summit of <strong>Naya Kanga (5,844 m)</strong>.",
        "The view is the reward: <strong>Langtang Lirung (7,227 m)</strong> directly across the valley, Shishapangma over the Tibetan border, Dorje Lakpa and the Jugal Himal east, and the Ganja La far below.",
        "The descent is long and demands concentration. Ten to fourteen hours in total, ending at base camp. Overnight in tents.",
      ),
    },
    {
      title: "Reserve Day at Naya Kanga Base Camp (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Naya Kanga Base Camp",
      placeDescription: "A tented camp on the grassy shelf below the Ganja La, on the south side of the Langtang valley.",
      ...NAYA_KANGA_BC,
      html: p(
        "The contingency day, held for a second summit attempt if the first was turned back by weather.",
        "If the peak has already been climbed, it is a rest day at base camp and a welcome one — the summit day is long enough that most people spend it eating, sleeping and sitting in the sun.",
        "Groups with energy can walk up toward the <strong>Ganja La (5,122 m)</strong> itself for the view south into Helambu, which is a couple of hours and worth doing.",
        "The crew begins breaking down the higher camp. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Descend from Base Camp (4,400 m) to Kyanjin Gompa (3,870 m) and Trek to Lama Hotel (2,470 m)",
      elevation: "2,470 m",
      accommodation: "Lama Hotel",
      placeDescription: "A cluster of lodges in deep forest on the north bank of the Langtang Khola.",
      ...LAMA_HOTEL,
      html: p(
        "A long descending day that gets you off the mountain and back into the trees.",
        "The morning drops from base camp to the river and climbs briefly to <strong>Kyanjin Gompa</strong>, where the group stops for an early lunch and the porters reorganise loads now that the camping gear is coming down.",
        "From there the trail runs back down the open valley past Langtang village and the avalanche memorial, then into the forest below Ghoda Tabela.",
        "Around 8 hours in total, and hard on the knees rather than the lungs. The oxygen at 2,470 m after four nights above 4,400 m is its own reward. Overnight in a lodge at Lama Hotel.",
      ),
    },
    langtangWalkOut[1],
    langtangWalkOut[2],
    departureDay,
  ],
};

/** Paldor Peak: the Ganesh Himal's one accessible summit, on a camping approach. */
export const paldorPeakClimbing: Climb = {
  region: "Langtang Region",
  price: 2290,
  difficulty: "challenging",
  maxAltitude: 5896,
  grade: "PD+",
  center: [85.18, 28.2],
  zoom: 11,
  content: {
    slug: "paldor-peak-climbing",
    title: "Paldor Peak Climbing",
    overview:
      "<p><strong>Paldor Peak (5,896 m)</strong> sits at the south-eastern corner of the <strong>Ganesh Himal</strong>, the range between Langtang and Manaslu that almost nobody visits. It was one of the first peaks the Nepal Mountaineering Association opened, and it remains one of the least climbed: a handful of parties a year against hundreds on Island Peak, on an approach through Tamang villages and old mining country where there are no lodges at all.</p><p>The climb itself is a classic snow and ice route on the south-east ridge, graded PD+ and well within reach of a fit climber with some crampon experience. What makes the trip is the isolation — fourteen days from Kathmandu with a full camping support crew, through <strong>Gatlang</strong> and <strong>Somdang</strong> and up the Tiru valley, on a route where meeting another group would be unusual.</p>",
    highlights: [
      ["The Ganesh Himal's Accessible Peak", "A 5,896 m summit in a range that sees a handful of climbing parties a year."],
      ["A Full Camping Expedition", "No lodges above Gatlang: two-person tents, a mess tent and a kitchen crew for the whole mountain section."],
      ["The South-East Ridge", "A classic snow and ice route at PD+, with a fixed line on the steeper upper section."],
      ["Tamang Heritage Country", "The walk in goes through Gatlang and Somdang, Tamang villages on the old Kathmandu-Tibet trade route."],
      ["Ganesh, Langtang and Manaslu", "From the summit, three ranges at once and the Tibetan plateau to the north."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Autumn is the stronger season here: settled weather, firm snow on the ridge and clear long-range views over three ranges. Spring works well too and brings rhododendron through the Gatlang and Somdang sections, but the upper mountain softens earlier in the day, so summit starts are correspondingly earlier.</p><p>The approach road to Syabrubesi and the jeep track to Somdang are both landslide-prone, which effectively rules out the <strong>monsoon</strong> from June to September regardless of conditions on the peak. <strong>Winter</strong> brings heavy snow to the Tiru valley and the camping approach becomes a genuinely cold undertaking, so we do not run scheduled departures from December to February.</p>",
      },
      {
        heading: "Climbing Difficulty & Experience Needed",
        content:
          "<p>Graded <strong>PD+</strong>. The summit day climbs the south-east ridge on snow and ice, with slopes of 30 to 45 degrees, a fixed line on the steeper upper section and a corniced final ridge that demands care. It is ten to thirteen hours from high camp and back, at an altitude where nothing happens quickly.</p><p>Some crampon experience is a real advantage here, though it is not a formal requirement and two full days of instruction are built into the itinerary at base camp. What the peak asks for above all is endurance and self-sufficiency: this is a camping expedition with no lodges, no shops and no mobile signal above Gatlang. Three months of preparation is right — long hill days with a loaded pack, plus running or cycling for the aerobic base.</p>",
      },
      {
        heading: "Permits & Regulations",
        content:
          "<p>Paldor is an <strong>NMA Group B trekking peak</strong>, so the package includes the peak permit issued through a registered agency, a licensed climbing guide and the garbage deposit lodged with the Nepal Mountaineering Association. The approach also crosses the <strong>Langtang National Park</strong> boundary, and that entry permit and the trekking registration are included too.</p><p>Because the route runs close to the Tibetan border through Rasuwa district, your guide carries the paperwork and presents it at the Dhunche checkpost on the way in and out. We need passport scans and photographs at least a week before departure. The garbage deposit is refunded on production of the waste carried out, which the crew does as standard.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Full trekking kit plus climbing equipment, and rather more warm clothing than a lodge-based peak needs because you are camping from Somdang onward. <strong>Insulated mountaineering boots</strong> rated for 6,000 m are essential and can be hired in Kathmandu. Add four base layers, a fleece, a <strong>down jacket rated to -25°C</strong>, a waterproof shell jacket and trousers, thermal leggings, hats, liner and insulated gloves plus a spare pair, gaiters and five pairs of wool socks. A sleeping bag rated to <strong>-25°C</strong> is required.</p><p>Personal climbing hardware is available as a rental add-on and inspected in Kathmandu. Also pack a 40-litre pack, trekking poles, a headlamp with spare batteries, category 4 sunglasses and goggles, glacier-grade sunscreen and lip balm, an insulated flask, purification tablets or a filter, a thorough first aid kit and a large power bank — there is no mains electricity anywhere after Gatlang.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>Simple <strong>lodges and homestays</strong> at Syabrubesi and Gatlang, and <strong>tents</strong> for every night from Somdang onward — six nights under canvas with a full camp crew, mess tent, kitchen tent and toilet tent. This is a camping expedition rather than a teahouse climb, and the crew is correspondingly larger.</p><p>Three meals a day are included throughout. The cook works out of a kitchen tent from Somdang and the food is genuinely good: soups, fresh vegetables carried in, <em>dal bhat</em>, pasta, porridge and as much hot drink as you can take. Water is drawn from streams and melted snow at the higher camps, boiled by the crew and treated; carry tablets or a filter as backup and an insulated flask, because bottles freeze solid at high camp.</p>",
      },
    ],
    faqs: [
      { question: "How remote is this climb?", answer: "Very. After Gatlang there are no lodges, no shops and no mobile signal, and the Tiru valley sees a handful of parties a year. Everything you eat and sleep in is carried by the crew. Evacuation from base camp means a helicopter or a two-day walk out, which is why the guide carries a satellite communicator." },
      { question: "How does Paldor compare with Island Peak?", answer: "Similar grade, very different experience. Island Peak has a busy base camp, lodges to within a day of it and fixed rope already in place; Paldor has none of that. The climbing on Paldor is arguably more varied and the summit view is wider, but you are self-contained the whole way and that suits some people and not others." },
      { question: "Do I need previous mountaineering experience?", answer: "Some crampon experience helps a great deal on this peak. It is not a formal requirement and we run two days of instruction at base camp, but the corniced summit ridge and the length of the day make it a poor first-ever climb. Yala Peak or Island Peak first, then Paldor, is the sensible order." },
      { question: "What is the walk in like?", answer: "Beautiful and almost empty. A jeep to Gatlang, a Tamang village of stone and slate houses on the old trade route, then a track over the Pangsang ridge to Somdang, an abandoned zinc mining settlement, and up the Tiru valley on yak trails to base camp. Three days of walking, all of it in country with no trekking infrastructure." },
      { question: "How many summit attempts do we get?", answer: "One scheduled attempt plus two reserve days at base camp, which is more margin than most peaks of this grade carry. Given how far you have come and how rarely this mountain is climbed, we would rather build in the extra days than lose the summit to a single bad morning." },
      { question: "What is the summit view?", answer: "One of the widest in Nepal for the altitude. The Ganesh Himal peaks immediately around you, Langtang Lirung and the whole Langtang range east, Manaslu and Himalchuli west, and the Tibetan plateau running north. Very few people have seen it, which is part of the point." },
      { question: "Is there a risk of avalanche on the route?", answer: "Yes, as on any snow route, and the south-east ridge is chosen partly because it sheds better than the alternatives. Your guide assesses the slope each day and will not commit after fresh loading. The reserve days exist so that waiting for the snow to settle is a real option rather than a trip-ending one." },
      { question: "Can I hire climbing gear rather than buy it?", answer: "Yes. A full set of personal hardware — harness, crampons, ice axe, ascender, descender, helmet and carabiners — is available as an add-on and is fitted and checked during the Kathmandu equipment day. Mountaineering boots are hired separately and matter more than anything else on the list." },
      { question: "How big is the support crew?", answer: "Larger than on a teahouse climb, because everything is carried. A typical departure of six climbers runs a climbing guide, three climbing Sherpas, a cook, two kitchen hands and a porter team. Above base camp the ratio is one climbing Sherpa to two climbers." },
      { question: "Can the trip be combined with the Tamang Heritage Trail?", answer: "Yes, and it is the natural extension since the walk in already goes through Gatlang. Adding the loop through Tatopani, Thuman and Briddim on the way out turns the trip into around seventeen days and gives a proper cultural half to a climbing holiday. Tell us at booking." },
    ],
    inclusions: {
      transport: [
        "Private jeep from Kathmandu to Gatlang at the start of the climb and from Syabrubesi back to Kathmandu at the end.",
        "Private airport and hotel transfers in Kathmandu.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation: "Lodge and homestay accommodation at Syabrubesi and Gatlang on the approach and the walk out.",
      camping:
        "Full tented accommodation from Somdang onward, with two-person tents, a mess tent, kitchen tent and toilet tent, and a cook and kitchen crew.",
      permits:
        "Nepal Mountaineering Association peak permit, Langtang National Park entry permit and required trekking registration.",
      sherpa: "One climbing Sherpa for every two climbers above base camp.",
      groupGear:
        "Group climbing equipment: fixed and main ropes, snow bars, ice screws, and anchors placed on the upper ridge by the climbing crew.",
      extra: [
        "Two days of crampon, ice axe, rope and fixed-line instruction at base camp before the summit attempt.",
        "Two reserve days at base camp for a second summit attempt if weather closes the first.",
        "Satellite communicator carried by the guide for weather forecasts and emergencies.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus: "Summit bonus for the climbing Sherpas, and tips for the guide, camp crew and support staff.",
    },
    porterDays: 10,
    gearRentalDays: 11,
    fixedDepartureDay: "thursday",
    itineraryDescription:
      "A 14-day camping expedition to Paldor Peak (5,896 m) in the Ganesh Himal, approached through Gatlang and Somdang with no lodges above the Tamang villages.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, lodge and full tented accommodation, all meals on the trip, the peak and national park permits, a licensed climbing guide, climbing Sherpas above base camp, a camp and kitchen crew, group climbing equipment and government taxes are included, while international flights, visa, insurance, personal climbing gear, porter service, city meals, personal expenses and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Paldor Peak Climbing – 14 Days in the Ganesh Himal",
      description:
        "A 14-day camping expedition to Paldor Peak (5,896 m) in the Ganesh Himal, through Gatlang and Somdang on a route that sees a handful of parties a year.",
      keywords:
        "Paldor Peak climbing, Paldor Peak Nepal, Ganesh Himal climbing, Tiru valley, remote peak climbing Nepal, NMA trekking peak, camping expedition Nepal",
      tags: "Paldor Peak Climbing, Langtang Region, Ganesh Himal, Trekking Peak, Camping Expedition, Nepal Peak Climbing",
    },
  },
  days: [
    arrivalDay,
    briefingDay,
    {
      title: "Drive from Kathmandu (1,400 m) to Gatlang (2,238 m)",
      elevation: "2,238 m",
      accommodation: "Gatlang",
      placeDescription: "A large Tamang village of stone and slate houses on the old trade route to Tibet.",
      ...GATLANG,
      html: p(
        "A long day by jeep north out of the valley. The road climbs over Kakani, drops to the Trishuli and turns up the <strong>Pasang Lhamu Highway</strong> toward the Tibetan border, running high above the Bhote Koshi for the last stretch.",
        "Above Dhunche the route leaves the highway for a rough track that switchbacks up to the <strong>Thambuchet</strong> valley and on to <strong>Gatlang (2,238 m)</strong>.",
        "Gatlang is a large Tamang village of stone houses with slate roofs, stacked up a hillside above terraced fields, with a gompa and a small lake above it.",
        "Around 8 to 9 hours. Overnight in a homestay at Gatlang.",
      ),
    },
    {
      title: "Trek from Gatlang (2,238 m) to Somdang (3,270 m)",
      elevation: "3,270 m",
      accommodation: "Somdang",
      placeDescription: "An abandoned zinc mining settlement below the Pangsang ridge, at the head of the Somdang valley.",
      ...SOMDANG,
      html: p(
        "The first walking day, and the one where the trip leaves everything behind.",
        "The trail climbs west out of Gatlang through rhododendron and oak forest to the <strong>Pangsang ridge (3,830 m)</strong>, a broad grassy crest with the whole <strong>Ganesh Himal</strong> laid out to the north and Langtang behind.",
        "From the ridge the route descends into the head of the Somdang valley, following a rough mining track to <strong>Somdang (3,270 m)</strong>, a scatter of abandoned buildings from a zinc and lead operation that closed decades ago.",
        "Around 6 to 7 hours. The camp crew has the mess tent up and this is the first night under canvas. Overnight in tents at Somdang.",
      ),
    },
    {
      title: "Trek from Somdang (3,270 m) to Paldor Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Paldor Base Camp",
      placeDescription: "A tented camp on the moraine shelf in the upper Tiru valley, below the Paldor glacier.",
      ...PALDOR_BC,
      html: p(
        "Up the Tiru valley into genuine mountain country.",
        "The trail follows the <strong>Tiru Khola</strong> north on yak trails, climbing steadily through juniper scrub that thins into open moraine and grazing shelf. There is no path in places and the crew leads the line.",
        "The valley closes in as you gain height, with <strong>Paldor (5,896 m)</strong> and the Ganesh peaks appearing at the head of it.",
        "Around 5 to 6 hours brings you to <strong>base camp at 4,200 m</strong>, a flat moraine shelf beside meltwater with the mountain directly above.",
        "The crew establishes camp for the next several nights. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Acclimatisation and Training Day at Paldor Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Paldor Base Camp",
      placeDescription: "A tented camp on the moraine shelf in the upper Tiru valley, below the Paldor glacier.",
      ...PALDOR_BC,
      html: p(
        "The first of two instruction days, and an acclimatisation walk built into it.",
        "The morning climbs several hundred metres onto the moraine above camp to gain height, with a first close look at the south-east ridge and the line the summit day takes.",
        "The afternoon is climbing school on the snow beside camp: fitting and walking in crampons on hard and soft snow, ice axe technique and self-arrest, and moving as a rope team.",
        "Your guide watches how everyone moves and adjusts the plan accordingly. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Second Training Day and Fixed-Line Practice at Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Paldor Base Camp",
      placeDescription: "A tented camp on the moraine shelf in the upper Tiru valley, below the Paldor glacier.",
      ...PALDOR_BC,
      html: p(
        "The second instruction day concentrates on rope work, which is what the upper ridge actually demands.",
        "The morning covers ascending a fixed line with a jumar, changing over at an anchor, and abseiling — repeated until it is automatic, because it has to work in the dark with cold hands.",
        "The afternoon is spent on crevasse awareness and a short session on the glacier snout, followed by a gear check: every harness adjusted, every crampon fitted to the boot it will be used with.",
        "Meanwhile the climbing Sherpas carry a load to high camp and inspect the route. Overnight in tents at base camp.",
      ),
    },
    {
      title: "Move to Paldor High Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Paldor High Camp",
      placeDescription: "A tented camp on the snow shelf at the foot of the Paldor south-east ridge.",
      ...PALDOR_HIGH_CAMP,
      html: p(
        "A steep carry onto the mountain proper. The route climbs the moraine above base camp and then onto the glacier, roped, gaining around 900 m over four to five hours.",
        "The ground is loose lower down and snow-covered above, and the pace is deliberately slow because everyone is carrying more than usual.",
        "<strong>High camp at 5,100 m</strong> is a shelf of snow and rock beneath the south-east ridge, with the summit line directly overhead and a very large view south over the Tiru valley.",
        "An early dinner, a final gear check and an early night. Wake-up is around midnight. Overnight in tents at high camp.",
      ),
    },
    {
      title: "Summit Paldor Peak (5,896 m) and Descend to Base Camp (4,200 m)",
      elevation: "5,896 m",
      accommodation: "Paldor Base Camp",
      placeDescription: "A tented camp on the moraine shelf in the upper Tiru valley, below the Paldor glacier.",
      ...PALDOR_BC,
      html: p(
        "Summit day, starting around 1 a.m. from high camp, roped in teams and moving by headlamp onto the <strong>south-east ridge</strong>.",
        "The lower ridge is a steady snow slope; higher up it steepens to around 45 degrees and the climbing crew fixes rope on the hardest section. The final stretch is a corniced ridge that demands concentration and careful placement.",
        "The summit of <strong>Paldor (5,896 m)</strong> comes in the middle of the morning. Around you are the Ganesh Himal peaks, Langtang Lirung and the Langtang range east, Manaslu and Himalchuli west, and the Tibetan plateau north.",
        "Down the same way, striking high camp on the way through, to base camp. Ten to thirteen hours. Overnight in tents.",
      ),
    },
    {
      title: "First Reserve Day at Paldor Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Paldor Base Camp",
      placeDescription: "A tented camp on the moraine shelf in the upper Tiru valley, below the Paldor glacier.",
      ...PALDOR_BC,
      html: p(
        "The first of two contingency days, held for a second summit attempt if the first was turned back by weather or snow condition.",
        "If the peak has been climbed, this is a rest day, and after thirteen hours on the mountain it is generally spent doing very little beyond eating and sleeping in the sun.",
        "The crew begins bringing the last loads down from high camp and sorting the rubbish that goes out with the group under the terms of the garbage deposit.",
        "Overnight in tents at base camp.",
      ),
    },
    {
      title: "Trek from Paldor Base Camp (4,200 m) to Somdang (3,270 m)",
      elevation: "3,270 m",
      accommodation: "Somdang",
      placeDescription: "An abandoned zinc mining settlement below the Pangsang ridge, at the head of the Somdang valley.",
      ...SOMDANG,
      html: p(
        "Off the mountain and back down the Tiru valley, retracing the approach with much lighter legs.",
        "The descent follows the moraine and then the yak trails beside the Tiru Khola, dropping back into juniper scrub and then grazing country.",
        "It is around 4 to 5 hours, and the change in oxygen after five nights above 4,200 m is immediate and very welcome.",
        "The camp crew sets up at <strong>Somdang (3,270 m)</strong> for the last night under canvas, which is traditionally when the cook produces something considerably better than usual. Overnight in tents.",
      ),
    },
    {
      title: "Trek from Somdang (3,270 m) to Syabrubesi (1,460 m)",
      elevation: "1,460 m",
      accommodation: "Syabrubesi",
      placeDescription: "The roadhead town at the confluence of the Bhote Koshi and Langtang Khola.",
      ...SYABRUBESI,
      html: p(
        "The last walking day, back over the <strong>Pangsang ridge</strong> with a final look north at the Ganesh Himal and the peak you climbed.",
        "From the ridge the trail descends through forest to Gatlang, where a jeep meets the group for the rough track down to <strong>Syabrubesi (1,460 m)</strong>.",
        "Around 6 hours of walking plus two on the road.",
        "Syabrubesi has hot showers, cold beer and beds with mattresses, all of which feel remarkable after six nights in a tent. This is the evening the crew is paid and thanked and the climbing Sherpas get their summit bonus. Overnight in a lodge.",
      ),
    },
    {
      title: "Drive from Syabrubesi (1,460 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "The drive back down the Pasang Lhamu Highway and over the valley rim, around 7 to 8 hours with a lunch stop.",
        "The road runs high above the Bhote Koshi, descends to the Trishuli and climbs to Kakani, where the Ganesh Himal and Langtang stand along the northern horizon — a last look at ground very few people have walked.",
        "Transfer to your hotel in Thamel. The afternoon is free for a shower, a change of clothes and souvenir shopping.",
        "Most groups meet for a farewell dinner, and on this trip in particular there is usually a good deal to talk about. Overnight in Kathmandu.",
      ),
    },
    departureDay,
  ],
};
