import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  API_BC, API_HIMAL, BHADRAPUR, BOKTA_BC, BOKTA_PEAK, DHANGADHI, DUNAI, GOKULESHWAR, ILAM,
  JUPHAL, KANJIROWA, KANJIROWA_BC, NEPALGUNJ, PHOKSUNDO_LAKE, RAMCHE, RINGMO, TAPLEJUNG,
  TSERAM, YAMPHUDIN,
} from "./places";

/**
 * The peaks with no crowd and no infrastructure: Kanjirowa in Dolpo, Api on the
 * Indian border in the far west, and Bokta at the southern edge of Kanchenjunga.
 *
 * Nothing is shared between these three. They sit at opposite ends of the
 * country — Bhadrapur in the east, Dhangadhi in the west, Nepalgunj in the
 * middle — and each needs two flights and a week of walking before the climbing
 * starts. What they have in common is that almost nobody goes to any of them.
 */

// Approach points and camp positions for the three remote expeditions.
const CHHEPKA = { lng: 82.85, lat: 29.05 }; // approx
const KANJIROWA_C1 = { lng: 82.775, lat: 29.0767 }; // approx
const KANJIROWA_C2 = { lng: 82.76, lat: 29.0867 }; // approx
const KANJIROWA_HIGH_CAMP = { lng: 82.7467, lat: 29.0933 }; // approx
const MAKARIGAD = { lng: 80.7833, lat: 29.85 }; // approx
const DHULI = { lng: 80.85, lat: 29.9167 }; // approx
const API_SETI_CAMP = { lng: 80.9, lat: 29.9583 }; // approx
const API_C1 = { lng: 80.9417, lat: 29.99 }; // approx
const API_C2 = { lng: 80.9367, lat: 29.9967 }; // approx
const API_HIGH_CAMP = { lng: 80.9333, lat: 30.0033 }; // approx
const LALI_KHARKA = { lng: 87.7167, lat: 27.4167 }; // approx
const KHESEWA = { lng: 87.75, lat: 27.45 }; // approx
const MAMANKHE = { lng: 87.8, lat: 27.4417 }; // approx
const TORTONG = { lng: 87.8833, lat: 27.5167 }; // approx
const OKTANG = { lng: 87.9167, lat: 27.65 }; // approx
const BOKTA_HIGH_CAMP = { lng: 87.94, lat: 27.66 }; // approx

const REMOTE_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

const TECHNICAL_REMOTE_SHERPA =
  "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.";

// ─────────────────────────────────────────────────────────────────────────────

export const kanjirowaExpedition: Climb = {
  region: "Remote Region",
  price: 17500,
  difficulty: "extreme",
  maxAltitude: 6883,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [82.8, 29.1],
  zoom: 10,
  content: {
    slug: "kanjirowa-expedition",
    title: "Kanjirowa Expedition",
    overview:
      "<p><strong>Kanjirowa (6,883 m)</strong> is the highest peak of the Kanjiroba Himal, the range that separates Dolpo from the rest of Nepal, and it is one of the least-climbed significant summits in the country. The main summit was first reached in <strong>1970 by a Japanese team</strong>, and successful ascents since can be counted on one hand — the mountain is remote, the weather is unpredictable, and there has never been much traffic to establish a known line.</p><p>The approach runs through <strong>Shey Phoksundo National Park</strong> past <strong>Phoksundo Lake</strong>, the deepest lake in Nepal and one of the most photographed places in the country that almost nobody actually visits. Beyond it there is nothing: no lodges, no villages and no other party. The route is graded <strong>D</strong> — a crevassed glacier, sustained ice and a long corniced ridge — and every metre of it is fixed by your own team.</p>",
    highlights: [
      ["Summit Kanjirowa (6,883 m)", "The highest peak of the Kanjiroba Himal, climbed successfully only a handful of times since 1970."],
      ["Phoksundo Lake", "The deepest lake in Nepal — a turquoise sheet at 3,600 m below a waterfall of nearly 170 m."],
      ["Dolpo", "A Tibetan cultural landscape behind the main Himalayan chain, with no roads and almost no visitors."],
      ["A Grade D Route Fixed by Our Own Team", "Crevassed glacier, sustained ice and a long corniced summit ridge, with no line to follow."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain with nobody else in the range."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>September to October</strong>. Dolpo sits behind the main Himalayan chain in a partial rain shadow, which makes it drier than the central ranges — but the Kanjiroba Himal is the first thing the monsoon meets coming up from the south-west, and it holds more weather than the country behind it.</p><p><strong>Autumn is the more settled window</strong>, with better-consolidated ice and clearer air. The practical constraints are the <strong>Juphal flight</strong> from Nepalgunj, which cancels regularly, and the trail past Phoksundo Lake, which includes an exposed traversing section that is genuinely hazardous after heavy rain. We run at most one departure a year.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp at 4,800 m</strong> beyond Phoksundo the route climbs onto a crevassed glacier — roped, marked and crossed in the cold hours — to <strong>Camp 1 at around 5,500 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 50 to 55 degrees</strong>, fixed by our Sherpas, leading to <strong>Camp 2 (6,100 m)</strong> and a <strong>high camp at 6,450 m</strong>. Summit day follows a <strong>long corniced ridge</strong> taken one at a time and runs twelve to sixteen hours with a full abseil descent. The technical crux is the ice; the real difficulty is doing all of it in a range with no established route, no other team and no realistic rescue above base camp.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> and, ideally, previous time at 7,000 m, along with alpine experience at AD+ or above. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and comfortable on a long corniced crest.</p><p>Isolation is the other requirement and it is not a formality here. Dolpo is a week from the nearest airstrip and the airstrip is two flights from Kathmandu. There is no other expedition, no established camps and no fixed rope but your team's, and a client who cannot accept a leader's decision to stop is a liability to the Nepali staff.</p>",
      },
      {
        heading: "Travel Insurance and Remoteness",
        content:
          "<p>Insurance written for <strong>alpinism to 7,000 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included with a high limit, because a helicopter to Dolpo is a long flight from Nepalgunj over remote country and it costs accordingly. Base camp is reachable in clear weather; nothing above Camp 1 is. Base camp holds a Gamow bag, a full medical kit and emergency oxygen, and the honest position is that self-sufficiency is most of the safety provision on this expedition.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The approach crosses middle-hill country and then the Phoksundo trail for six days, so bring proper trekking kit and waterproofs. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Kanjirowa climbed?", answer: "Almost never. The main summit was first climbed in 1970 and successful ascents since number a handful. There is no trodden line, no established camps and no fixed rope from anyone else, and in most years nobody attempts it at all." },
      { question: "What is Phoksundo Lake?", answer: "The deepest lake in Nepal at around 145 m, a turquoise sheet at 3,600 m in Shey Phoksundo National Park, with a waterfall of nearly 170 m at its outflow. It is one of the most photographed places in Nepal and one of the least visited, because getting there takes two flights and three days of walking." },
      { question: "How dangerous is the trail past the lake?", answer: "There is a well-known traversing section cut into the cliff above the water, narrow and exposed, which is straightforward in dry conditions and genuinely hazardous after heavy rain. It is walked carefully and without loads for the group, and the pack animals go one at a time." },
      { question: "What is Dolpo like?", answer: "A Tibetan cultural landscape behind the main Himalayan chain — high, dry, Buddhist and Bon, with no roads, few villages and a way of life that has changed very little. It is the setting of Peter Matthiessen's The Snow Leopard and of Eric Valli's film Himalaya, and it receives a tiny number of visitors a year." },
      { question: "What is the summit success rate?", answer: "Impossible to quote meaningfully given how few attempts there are, and low. Weather, conditions on the ridge and the sheer length of the summit day all contribute. Climbers book this expedition for the objective and the rarity, not for a probability of standing on top." },
      { question: "Is supplementary oxygen used?", answer: "No. Kanjirowa is within the range a fit acclimatised climber handles without it, and the difficulty is technical rather than altitude-related. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag." },
      { question: "How remote is base camp?", answer: "Six days' walk from the Juphal airstrip, which is itself two flights from Kathmandu via Nepalgunj. There is no signal beyond Ringmo, no resupply, no lodge and no other expedition. It is the most isolated base camp in this catalogue after Makalu." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,500 m, Camp 2 at 6,100 m and a high camp at 6,450 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team finds, fixes and stocks the route progressively." },
      { question: "Can we see snow leopards?", answer: "Shey Phoksundo has one of the better snow leopard populations in Nepal and researchers have collared animals in the park. Actually seeing one is a matter of considerable luck — a handful of visitors a year manage it. Blue sheep, which are what the leopards eat, are seen most days above Ringmo." },
      { question: "Do you run fixed departures?", answer: "At most one a season, and we cancel readily if conditions are wrong or the party is not strong enough. On a grade D route in a range with no other team in it, running a marginal expedition transfers the risk to our staff, and we will not do that." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flights between Kathmandu and Nepalgunj, and between Nepalgunj and Juphal, subject to weather."],
      transport: ["Private airport and hotel transfers in Kathmandu and Nepalgunj."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Nepalgunj with breakfast."],
      trekAccommodation:
        "Simple lodge accommodation as far as Ringmo and full tented accommodation beyond it, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      camping:
        "Full expedition base camp at 4,800 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,500 m), Camp 2 (6,100 m) and high camp (6,450 m).",
      permits:
        "Department of Tourism Kanjirowa climbing royalty and permit, Shey Phoksundo National Park entry permit, Lower Dolpo restricted area permit, and the Trekkers' Information Management System (TIMS) card.",
      sherpa: TECHNICAL_REMOTE_SHERPA,
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew from Juphal onward, with all food and fuel carried in and high-altitude rations for the camps above.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Route finding and progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Juphal and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Nepalgunj.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Juphal or Nepalgunj flight, an attempt abandoned for conditions, or a departure cancelled by us because the route is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 28-day expedition on Kanjirowa (6,883 m), the highest peak of the Kanjiroba Himal, approached through Shey Phoksundo National Park and past Phoksundo Lake, with three camps and rope fixed by our own team.",
    inExDescription:
      "Nepalgunj and Juphal flights, airport transfers, Kathmandu and Nepalgunj hotel nights, lodge and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, national park and restricted area permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group ice equipment, route finding and progressive rope fixing, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Sep-Oct",
    meta: {
      title: "Kanjirowa Expedition (6,883 m) — 28 Days, Dolpo | Green Compass Treks",
      description:
        "Climb Kanjirowa (6,883 m), the highest peak of the Kanjiroba Himal in Dolpo, on a 28-day grade D expedition past Phoksundo Lake with three camps and rope fixed by our own team. Almost never climbed.",
      keywords:
        "kanjirowa expedition, kanjiroba himal, kanjirowa 6883m, dolpo climbing, phoksundo lake, rarely climbed peaks nepal, shey phoksundo",
      tags: "Kanjirowa, Remote Region, Expedition, Dolpo, Phoksundo Lake, Technical Climb",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel.",
        "Rest is the only item on the schedule. Unpack and lay out your equipment tonight — it is inspected tomorrow, and Kathmandu is the last place anything can be replaced before a base camp six days from an airstrip.",
        "Your expedition leader calls at the hotel to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      ...KATHMANDU,
      html: p(
        "A full working day. Your leader takes the twenty-eight day plan apart stage by stage — the two flights, the six-day approach past Phoksundo Lake, base camp, the rotation, the summit and the reserve days — and is honest about the fact that the route has to be found as well as climbed.",
        "The <strong>equipment inspection</strong> is item by item: ice tools, crampons, boots, harness, ascender, belay device, screwgates and down clothing.",
        "Because the approach carries everything on porters and pack animals with no resupply, the packing is done carefully and weighed. Overnight in Kathmandu.",
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
        "The <strong>Shey Phoksundo National Park</strong> and Lower Dolpo restricted area permits are lodged at the same time, and the cargo is weighed, sealed into barrels and dispatched to Nepalgunj for the Juphal flights.",
        "The afternoon is free, and it is the last one with hot water and restaurants for a month. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot lowland city near the Indian border, and the air hub for far-western Nepal.",
      ...NEPALGUNJ,
      html: p(
        "A one-hour flight west to <strong>Nepalgunj (150 m)</strong>, on the Terai plain a few kilometres from the Indian border.",
        "It is flat, hot and often above 35°C, and it is the least mountainous place any of our expeditions passes through. It is also the hub for every flight into Dolpo and the far west, which is why the trip goes this way.",
        "The afternoon is spent in an air-conditioned hotel doing nothing. Your leader confirms the Juphal flight for the morning. Overnight in Nepalgunj.",
      ),
    },
    {
      title: "Fly to Juphal (2,475 m) and Trek to Dunai (2,140 m)",
      elevation: "2,140 m",
      accommodation: "Dunai",
      placeDescription: "The administrative headquarters of Dolpa district, on the Thuli Bheri river.",
      ...DUNAI,
      html: p(
        "An early flight north into the hills — forty-five minutes from the Terai to <strong>Juphal (2,475 m)</strong>, a short airstrip on a hillside above the Thuli Bheri, and a rise of more than two thousand metres in under an hour.",
        "The flight is weather-dependent and cancels regularly, which is why the itinerary carries spare days at both ends.",
        "From the airstrip the trail drops to the river and follows it east to <strong>Dunai (2,140 m)</strong>, the administrative headquarters of Dolpa and the last town of any size. Around 2 to 3 hours. Overnight at Dunai.",
      ),
    },
    {
      title: "Trek from Dunai (2,140 m) to Chhepka (2,720 m)",
      elevation: "2,720 m",
      accommodation: "Chhepka",
      placeDescription: "A small settlement in the forested gorge of the Suli Gad, inside Shey Phoksundo National Park.",
      ...CHHEPKA,
      html: p(
        "West from Dunai and then north into the <strong>Suli Gad</strong> gorge, entering <strong>Shey Phoksundo National Park</strong> at the checkpoint and following the river upstream.",
        "The gorge is forested with pine, walnut and rhododendron, deep enough that the light goes early, and it holds the best wildlife on any of our approaches — blue sheep on the slopes above, and a snow leopard population that researchers have collared in this park.",
        "<strong>Chhepka (2,720 m)</strong> is a handful of houses and a park post beside the river. Around 5 to 6 hours. Overnight at Chhepka.",
      ),
    },
    {
      title: "Trek from Chhepka (2,720 m) to Ringmo (3,660 m) and Phoksundo Lake",
      elevation: "3,660 m",
      accommodation: "Ringmo",
      placeDescription: "A Bon village of flat-roofed houses beside Phoksundo Lake, the deepest in Nepal.",
      ...RINGMO,
      html: p(
        "North up the gorge and then the steep climb to the lip of the hanging valley, past the <strong>Phoksundo waterfall</strong> — nearly 170 m and the highest in Nepal.",
        "And then the lake. <strong>Phoksundo (3,611 m)</strong> is the deepest in Nepal at around 145 m, and its colour is a turquoise that photographs look faked. There are no fish in it and no outflow visible for part of its length.",
        "<strong>Ringmo</strong> is a <strong>Bon</strong> village of flat-roofed stone houses at the near end — Bon being the pre-Buddhist religion of Tibet, still practised across Dolpo — with a gompa on the shore. Around 5 hours. Overnight at Ringmo.",
      ),
    },
    {
      title: "Trek from Ringmo (3,660 m) along Phoksundo Lake to the Upper Valley (4,000 m)",
      elevation: "4,000 m",
      accommodation: "Phoksundo Upper Camp",
      placeDescription: "A camp at the northern end of Phoksundo Lake, beyond the cliff traverse.",
      ...PHOKSUNDO_LAKE,
      html: p(
        "The famous section. The trail leaves Ringmo and traverses the <strong>cliff above the western shore</strong> on a narrow ledge cut into the rock, with the lake a long way below and nothing between — the path that appears in every photograph of Dolpo, and the reason pack animals go one at a time.",
        "It is straightforward in dry conditions and genuinely hazardous after rain, and the group is spaced out and moves without loads across the worst of it.",
        "Beyond the lake the valley opens into meadow and the trail follows the river north. Camp at around <strong>4,000 m</strong> in the upper valley. Around 5 to 6 hours. Overnight at the upper camp.",
      ),
    },
    {
      title: "Trek to the Kanjirowa Base Camp Approach Camp (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Approach Camp",
      placeDescription: "A high camp in the empty valley system west of Phoksundo, on the way to Kanjirowa.",
      lng: 82.8167,
      lat: 29.0833,
      html: p(
        "West off the main Dolpo trail into a side valley that carries nobody — no trekking route, no herders' path beyond the first hour, and no cairns except what the crew leaves.",
        "The country here is high, dry and bare, and the walking is on grass and then moraine with the Kanjiroba Himal opening ahead.",
        "Camp at around <strong>4,400 m</strong>, the last one below base camp. From here the expedition is entirely self-contained and there is no possibility of resupply. Around 6 hours. Overnight at the approach camp.",
      ),
    },
    {
      title: "Trek to Kanjirowa Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp on the moraine below the Kanjiroba glacier.",
      ...KANJIROWA_BC,
      html: p(
        "Up onto the moraine below the glacier, gaining 400 m on boulder ground with the peak coming into view at the head of the cirque.",
        "<strong>Kanjirowa Base Camp (4,800 m)</strong> is established today: mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next fortnight, and six days' walk from the nearest airstrip.",
        "The afternoon is spent reading the route with your leader, which on a mountain with no established line is a longer conversation than usual — the glacier, the shelf where Camp 1 might go, the ice face and the ridge above it. Around 4 to 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...KANJIROWA_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the glacier before it is done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. There is no signal here, no other expedition anywhere in the range, and Dolpo behind you is one of the emptiest inhabited regions in Asia. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...KANJIROWA_BC,
      html: p(
        "The day that decides who goes above Camp 1. On the ice above camp each climber is put through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Rope-team travel and crevasse rescue get a second session, because the glacier below Camp 1 is broken, is crossed roped in the dark, and there is nobody within a hundred kilometres to assist.",
        "Your leader is assessing efficiency under fatigue. Anyone not satisfactory is told today. Meanwhile the Sherpas begin <strong>finding and fixing the line toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Kanjirowa Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...KANJIROWA_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,200 m</strong> and back, on ground that asks nothing technical.",
        "The morning is also a working reconnaissance — your leader and the Sherpa team spend an hour with binoculars agreeing this season's line, which on a mountain nobody has fixed is the most consequential conversation of the expedition.",
        "The afternoon is rest and packing for the rotation. The satellite forecast arrives in the evening. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,500 m on the shelf above the glacier, below the ice face.",
      ...KANJIROWA_C1,
      html: p(
        "The first time on the mountain, and it starts in the dark. The route crosses the <strong>crevassed glacier</strong> roped and on the line the Sherpas marked, weaving between open holes, and then climbs fixed rope onto the shelf.",
        "<strong>Camp 1 (5,500 m)</strong> sits above the glacier with the whole empty valley system of western Dolpo below and the ice face rising directly overhead. Six to seven hours with a personal load.",
        "The night here is the point of the rotation, and it gives your leader a proper look at how each climber performs on ground nobody has climbed recently. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,500 m) to Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...KANJIROWA_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, three to four hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,800 m than it would higher.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice face above Camp 1</strong> toward Camp 2, which on unclimbed-in-decades ground is slow work. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, on the recovery and preparation day before the summit push.",
      ...KANJIROWA_BC,
      html: p(
        "A rest day and a preparation day in one. The morning is for eating, drinking and sleeping; the afternoon is for the plan.",
        "Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence with timings and a <strong>hard turnaround time</strong> for the summit ridge.",
        "The Sherpa team returns with the report on the state of the ice and the ridge, and the satellite forecast arrives in the evening. The go decision is taken on the two together. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,800 m) to Camp 1 (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,500 m above the glacier, reoccupied for the summit push.",
      ...KANJIROWA_C1,
      html: p(
        "Another pre-dawn start, and the glacier goes faster the second time — four to five hours for a crossing that took six or seven on the rotation, on a line the team now knows.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,500 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,500 m) to Camp 2 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,100 m on platforms cut into the ice face.",
      ...KANJIROWA_C2,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>ice at 50 to 55 degrees</strong> on fixed rope, and it stays that way for five to six hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and by the top of it most people understand why the assessment day mattered.",
        "<strong>Camp 2 (6,100 m)</strong> is a handful of tents on platforms cut into the face, small and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,100 m) to High Camp (6,450 m)",
      elevation: "6,450 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,450 m on the shoulder below the summit ridge.",
      ...KANJIROWA_HIGH_CAMP,
      html: p(
        "A deliberately short day — three hours or so of fixed ice to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,450 m)</strong> is two or three tents on the smallest usable ground on the mountain, directly beneath the ridge, and it is the coldest night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time — on a ridge this long it is what decides tomorrow. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Kanjirowa (6,883 m) and Descend to Camp 2 (6,100 m)",
      elevation: "6,883 m",
      accommodation: "Camp 2",
      placeDescription: "The 6,883 m summit of Kanjirowa, the highest point of the Kanjiroba Himal.",
      ...KANJIROWA,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the feature that defines the route.",
        "The <strong>summit ridge</strong> is long, narrow and corniced, taken one at a time with the Sherpas probing the crest ahead. It goes on for hours and it is where the turnaround time earns its place.",
        "The <strong>summit (6,883 m)</strong> looks north over <strong>Dolpo</strong> to the Tibetan border, east along the Kanjiroba Himal, south-east to <strong>Dhaulagiri and Putha Hiunchuli</strong>, and south over the folded middle hills. Phoksundo Lake is a small turquoise mark far below to the east.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Fourteen to eighteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,100 m) to Kanjirowa Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...KANJIROWA_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. On a mountain this rarely visited, leaving rope behind is not an option — it stays for decades and helps nobody.",
        "The crevassed glacier is crossed roped in the cold of the early morning for the last time.",
        "<strong>Base camp (4,800 m)</strong> in the middle of the day, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Kanjirowa Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The first of two contingency days, held for weather or a second summit attempt.",
      ...KANJIROWA_BC,
      html: p(
        "The first of two reserve days. Dolpo's weather is drier than the central Himalaya and no more predictable, and on a summit day defined by the length of a ridge, a second attempt on fresher legs is worth a great deal.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest in a range with nobody else in it, which after a fortnight is a strange and rather good thing to have. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day and Break Camp at Base Camp (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Kanjirowa Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the Kanjiroba Himal.",
      ...KANJIROWA_BC,
      html: p(
        "The second reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Juphal goes back out on porters and pack animals, and the Department of Tourism deposit is refunded against it. In country this remote, what an expedition leaves behind stays.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last of the light looking north into Dolpo, which from up here goes on further than it seems it should. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,800 m) to Phoksundo Upper Valley (4,000 m)",
      elevation: "4,000 m",
      accommodation: "Phoksundo Upper Camp",
      placeDescription: "The camp at the northern end of Phoksundo Lake, on the walk out.",
      ...PHOKSUNDO_LAKE,
      html: p(
        "Down the moraine and east out of the side valley, retracing the approach with the whole load on porters and pack animals.",
        "The grass comes back within a few hours, and by the afternoon the trail rejoins the main Dolpo route at the head of the lake.",
        "Camp at the <strong>northern end of Phoksundo</strong> at around 4,000 m, with the turquoise water below and the cliff traverse to be walked again tomorrow. Around 8 hours. Overnight at the upper camp.",
      ),
    },
    {
      title: "Trek from the Upper Valley (4,000 m) to Chhepka (2,720 m)",
      elevation: "2,720 m",
      accommodation: "Chhepka",
      placeDescription: "The settlement in the Suli Gad gorge, on the walk out from Dolpo.",
      ...CHHEPKA,
      html: p(
        "Back across the <strong>cliff traverse</strong> above the lake — spaced out, without loads and carefully, as on the way in — and down through <strong>Ringmo</strong> to the waterfall and the top of the gorge.",
        "Then the long descent into the Suli Gad, losing more than a thousand metres with the forest closing in and the air thickening and warming all the way.",
        "<strong>Chhepka (2,720 m)</strong> in the late afternoon, back among pine and walnut with the river loud outside the tent. Around 8 hours. Overnight at Chhepka.",
      ),
    },
    {
      title: "Trek from Chhepka (2,720 m) to Juphal (2,475 m) via Dunai",
      elevation: "2,475 m",
      accommodation: "Juphal",
      placeDescription: "The airstrip above the Thuli Bheri, and the end of the walking.",
      ...JUPHAL,
      html: p(
        "The last walking day, down the Suli Gad and out of <strong>Shey Phoksundo National Park</strong> to the Thuli Bheri, then west to <strong>Dunai</strong>.",
        "Dunai has shops, a bank and the first cold drink in three weeks, and most groups take longer over lunch than they intend to.",
        "<strong>Juphal (2,475 m)</strong> is a short steep hour above the river. The cargo is weighed for the morning flight and the Dolpo crew go home from here. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 7 to 8 hours. Overnight at Juphal.",
      ),
    },
    {
      title: "Fly from Juphal (2,475 m) to Nepalgunj (150 m) and on to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early flight south to <strong>Nepalgunj (150 m)</strong> — forty-five minutes and a drop of more than two thousand metres, from hill country to the Terai plain in a single descent.",
        "The connecting flight to <strong>Kathmandu</strong> follows in the afternoon, weather and schedules permitting. Both legs are weather-dependent, which is why the itinerary carries spare days.",
        "Back in Kathmandu in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
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
        "Safe travels. Very few climbers have been on Kanjirowa, and whatever the outcome, a team that reached the Kanjiroba Himal and came home has done something genuinely uncommon.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const apiHimalExpedition: Climb = {
  region: "Remote Region",
  price: 18500,
  difficulty: "extreme",
  maxAltitude: 7132,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [80.94, 30.0],
  zoom: 10,
  content: {
    slug: "api-himal-expedition",
    title: "Api Himal Expedition",
    overview:
      "<p><strong>Api (7,132 m)</strong> is the highest mountain in far-western Nepal and the most remote 7,000 m peak in the country. It stands in the <strong>Yoka Pahar</strong> section of the Gurans Himal, a few kilometres from both the Indian and Tibetan borders, in a corner of Nepal that has no trekking industry, no lodges and effectively no visitors. It was first climbed in <strong>1960 by a Japanese expedition</strong> and has seen a handful of ascents since.</p><p>The approach is the defining feature: a flight to <strong>Dhangadhi</strong> on the Indian border, a day's drive north into the hills, and four days of walking through Chhetri and Bhotiya villages on trails used by nobody but the people who live on them. The route is graded <strong>D</strong> — a crevassed glacier, sustained ice and a corniced ridge — and your team fixes every metre. It is the least-visited expedition in this catalogue.</p>",
    highlights: [
      ["Summit Api (7,132 m)", "The highest mountain in far-western Nepal, first climbed in 1960 and rarely repeated."],
      ["The Far West", "A corner of Nepal with no trekking industry and effectively no foreign visitors — four days of walking through working villages."],
      ["A Grade D Route Fixed by Our Own Team", "Crevassed glacier, sustained ice and a corniced summit ridge, with no line to follow."],
      ["Three Borders from the Summit", "Nepal, India and Tibet visible from one top, with the Nanda Devi group across the Kali river to the west."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support in the most isolated range in Nepal."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>September to October</strong>. The far west sits at the western end of the Nepalese Himalaya and gets a different weather pattern from the centre — the monsoon arrives later and leaves earlier, and winter snowfall is heavier.</p><p><strong>Autumn is generally the better window</strong>, with more settled conditions and better-consolidated ice. Spring works and brings a green, warm and occasionally very wet approach through the middle hills. The practical constraints are the <strong>Dhangadhi flight</strong>, which is reliable but infrequent, and the hill road north, which is rough and closes after heavy rain.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp at 3,900 m</strong> — low by Nepalese standards, because the approach valleys are deep — the route climbs steeply onto the glacier and up to <strong>Camp 1 at around 4,800 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 50 to 55 degrees</strong>, fixed by our Sherpas, leading to <strong>Camp 2 (5,700 m)</strong> and a <strong>high camp at 6,300 m</strong>. Summit day follows a <strong>long corniced ridge</strong>, taken one at a time, and runs twelve to sixteen hours with a full abseil descent. The vertical gain from base camp is over three thousand metres, which is more than most 7,000 m peaks in Nepal ask for.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> and, ideally, previous time at 7,000 m, along with alpine experience at AD+ or above. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and comfortable on a long corniced crest.</p><p>The isolation is the other requirement. Far-western Nepal has no mountaineering infrastructure of any kind: no other expedition, no established camps, no fixed rope, and a helicopter evacuation that would come from Nepalgunj or Dhangadhi across a great deal of empty country. A client who cannot accept a leader's decision to turn round is a liability to the staff.</p>",
      },
      {
        heading: "Travel Insurance and Remoteness",
        content:
          "<p>Insurance written for <strong>alpinism to 7,500 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included with a high limit — this is the longest and most expensive evacuation flight of any expedition we run. Base camp is reachable in clear weather; nothing above Camp 1 is. Base camp holds a Gamow bag, a full medical kit and emergency oxygen, and self-sufficiency is most of the safety provision on this trip.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The approach crosses subtropical and middle-hill country for four days and can be very wet in spring, so bring proper waterproofs and expect leeches. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Where exactly is Api?", answer: "In the Yoka Pahar section of the Gurans Himal in Darchula district, the far north-western corner of Nepal, a few kilometres from both the Indian and Tibetan borders. The Kali river, which forms the India–Nepal border, runs immediately west of the massif." },
      { question: "How often is Api climbed?", answer: "Very rarely — first climbed by a Japanese team in 1960 and a handful of times since, with long gaps. There is no trodden line, no established camps and no fixed rope from anyone else. Most seasons nobody attempts it." },
      { question: "What is the far west like?", answer: "Poor, beautiful and almost entirely unvisited. Chhetri and Bhotiya villages, terraced farming, forest and steep valleys, with no trekking lodges, no menus in English and no foreign visitors. The trails are the ones people actually use to get between villages. It is a very different Nepal from the Khumbu." },
      { question: "How long is the approach?", answer: "A one-hour flight to Dhangadhi, a full day's drive north into the hills to Gokuleshwar, and four days of walking to base camp at 3,900 m. It is not the longest approach in this catalogue but it is the one through the least developed country." },
      { question: "Why is base camp so low?", answer: "Because the approach valleys are deep and the mountain rises straight out of them. Base camp at 3,900 m means the route gains over three thousand metres to the summit, which is more than most Nepalese 7,000 m peaks, and it is why the expedition carries three camps above base." },
      { question: "Is supplementary oxygen used?", answer: "No. Api is within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "What can you see from the summit?", answer: "Three countries. Nepal to the east with Saipal and the western ranges, India to the west across the Kali river with the Nanda Devi group beyond it, and Tibet to the north. It is one of the few summits in Nepal from which the Indian Himalaya is the dominant view." },
      { question: "What is the summit success rate?", answer: "Low, and impossible to quote precisely given how few attempts there are. Weather, the length of the summit ridge and the sheer vertical gain all contribute. Climbers book this expedition for the objective and the isolation rather than for a probability." },
      { question: "How difficult is the evacuation situation?", answer: "It is the most difficult of any expedition we run. A helicopter would come from Nepalgunj or Dhangadhi across a great deal of empty country, it is expensive, and it can only reach base camp in clear weather. Your insurance limit needs to reflect that, and we check it carefully." },
      { question: "Do you run fixed departures?", answer: "At most one a season, and we cancel readily. The far west has no infrastructure to fall back on, and running a marginal expedition there transfers the risk to our staff and to the porters from villages along the approach." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flights between Kathmandu and Dhangadhi."],
      transport: ["Private jeep transport between Dhangadhi and the road head at Gokuleshwar in both directions.", "Private airport and hotel transfers in Kathmandu and Dhangadhi."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Dhangadhi with breakfast."],
      trekAccommodation:
        "Full tented accommodation throughout the approach and the walk out, with two-person tents, a mess tent, kitchen tent and toilet tent — there are no lodges anywhere on this route.",
      camping:
        "Full expedition base camp at 3,900 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (4,800 m), Camp 2 (5,700 m) and high camp (6,300 m).",
      permits:
        "Department of Tourism Api climbing royalty and permit, Api Nampa Conservation Area entry permit, and the Trekkers' Information Management System (TIMS) card.",
      sherpa: TECHNICAL_REMOTE_SHERPA,
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew from the road head onward, with all food and fuel carried in and high-altitude rations for the camps above.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Route finding and progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between the road head and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Dhangadhi.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a road closure on the hill road north, an attempt abandoned for conditions, or a departure cancelled by us because the route is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 32-day expedition on Api (7,132 m), the highest mountain in far-western Nepal, approached from Dhangadhi through country with no trekking infrastructure, with three camps and rope fixed by our own team.",
    inExDescription:
      "Dhangadhi flights, jeep transfers, Kathmandu and Dhangadhi hotel nights, full tented accommodation on the approach and at every camp, three meals a day throughout, the Department of Tourism royalty, conservation area permit and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group ice equipment, route finding and progressive rope fixing, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Sep-Oct",
    meta: {
      title: "Api Himal Expedition (7,132 m) — 32 Days, Far West Nepal | Green Compass Treks",
      description:
        "Climb Api (7,132 m), the highest mountain in far-western Nepal and the most isolated 7,000 m peak in the country. A 32-day grade D expedition with three camps and rope fixed by our own team.",
      keywords:
        "api himal expedition, api 7132m, far west nepal climbing, gurans himal, darchula climbing, rarely climbed peaks nepal, api nampa",
      tags: "Api Himal, Remote Region, Expedition, 7000m Peak, Far West Nepal, Technical Climb",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel.",
        "There is nothing to do today but rest. Unpack and lay your equipment out tonight — it is checked item by item tomorrow, and Kathmandu is the last place on earth where anything missing can be replaced before an expedition that walks four days from the nearest road in the far west of the country.",
        "Your expedition leader calls at the hotel in the evening to introduce themselves and set the plan for the morning. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      ...KATHMANDU,
      html: p(
        "A full working day. Your leader takes the thirty-two day plan apart stage by stage — the flight west to Dhangadhi, the drive into the hills, the four-day approach, base camp at 3,900 m, the rotation, the three camps above and the reserve days — and is honest about the two things that make Api unusual: there is no trodden line on the mountain, and there is nobody else in the range.",
        "The <strong>equipment inspection</strong> follows, item by item: double or triple boots, technical crampons, a pair of steep-ice tools, harness, ascender, belay device, screwgates, down suit or jacket and trousers, and the layering for a summit day that starts in the dark and runs fourteen hours.",
        "Anything missing is bought or hired this afternoon in Thamel. Because the approach crosses subtropical hills that can be very wet in spring, your waterproofs are checked as carefully as your down. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the royalty permit is issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the Api royalty permit is issued, the regulations are read out and the waste-management deposit is registered.",
        "The <strong>Api Nampa Conservation Area</strong> permit and the TIMS card are lodged at the same time. Far-western Nepal sees so few expeditions that the paperwork is genuinely unfamiliar to everyone involved, and the leader allows a full day for it.",
        "The cargo is meanwhile weighed, sealed into barrels and checked in for the Dhangadhi flight — group tents, ropes, hardware, fuel and a month of food, all of which has to travel by road and then on the backs of porters and pack animals. The afternoon is free, and it is the last one with hot water and restaurants for four weeks. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Dhangadhi (170 m)",
      elevation: "170 m",
      accommodation: "Dhangadhi",
      placeDescription: "A hot lowland city on the Indian border, the gateway to Nepal's far-western hills.",
      ...DHANGADHI,
      html: p(
        "An early transfer to the domestic terminal for the <strong>one-hour flight west to Dhangadhi (170 m)</strong>. The aircraft flies the length of the Nepalese lowlands with the Himalaya on the right the entire way, and the ranges you pass — Ganesh, Manaslu, Annapurna, Dhaulagiri — are the ones everybody climbs. The one you are going to is beyond the far end of them.",
        "Dhangadhi is a hot, flat, busy city on the Indian border in the Terai, and it feels nothing like mountain Nepal. The afternoon goes on the last of the logistics: the cargo is transferred to jeeps, fresh food is bought for the approach, and the leader confirms the road north is open.",
        "It is worth understanding how far from the tourist economy you now are. Dhangadhi has no trekking shops, no expedition agents and no climbers. Overnight in Dhangadhi.",
      ),
    },
    {
      title: "Drive from Dhangadhi (170 m) to Gokuleshwar (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Gokuleshwar",
      placeDescription: "A hill bazaar in Darchula district at the end of the road, where the walking begins.",
      ...GOKULESHWAR,
      html: p(
        "A long day in a jeep — ten to twelve hours, and a genuine adventure in its own right. The road runs north from the Terai up the <strong>Mahakali valley</strong>, with India on the far bank the whole way, then climbs into the hills of Darchula district on a narrow unsealed shelf cut into the hillside.",
        "It is rough, spectacular and slow. Landslide repairs, river crossings and single-lane sections mean the timing is an estimate rather than a schedule, and after heavy rain the road can be closed altogether — which is why the itinerary carries reserve days at the far end.",
        "<strong>Gokuleshwar (1,400 m)</strong> is a hill bazaar at the road head: a strip of shops, a bus stand and a lot of interest in the arrival of a foreign team. Porters are engaged here from the villages around, loads are made up and weighed, and the expedition sets up its first camp. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Gokuleshwar (1,400 m) to Makarigad (1,900 m)",
      elevation: "1,900 m",
      accommodation: "Makarigad",
      placeDescription: "A farming settlement in the middle hills, on a trail used only by the people who live along it.",
      ...MAKARIGAD,
      html: p(
        "The walking begins. The trail follows the river north through terraced hillsides, millet and rice fields, and a string of Chhetri villages where the arrival of a foreign expedition is an event rather than a transaction.",
        "There is no trekking infrastructure of any kind here — no lodges, no signposts, no menus, no other walkers. The path you are on is simply the way people get from one village to the next, and it has been for centuries.",
        "It is around <strong>five to six hours</strong> of undulating trail with a net gain of five hundred metres, hot and humid at this elevation and, in spring, wet enough for leeches in the forest sections. Camp is pitched on a terrace near <strong>Makarigad (1,900 m)</strong>, the crew set up the mess tent, and the first dinner of the approach is served. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Makarigad (1,900 m) to Dhuli (2,580 m)",
      elevation: "2,580 m",
      accommodation: "Dhuli",
      placeDescription: "A high summer settlement below the Api massif, at the upper limit of cultivation.",
      ...DHULI,
      html: p(
        "The valley narrows and the trail steepens. Rice and millet give way to potato and barley, oak and rhododendron forest closes in, and the Chhetri villages of the lower hills are replaced by <strong>Bhotiya settlements</strong> of Tibetan descent with flat-roofed stone houses and cattle in the ground floor.",
        "Around <strong>six hours</strong> of steady climbing, with several sharp sections where the path is cut into the hillside above the river. On a clear afternoon the first ice appears at the head of the valley, and it is a long way above you.",
        "<strong>Dhuli (2,580 m)</strong> is a summer settlement at the upper limit of cultivation — occupied while the herds are high and largely empty for the rest of the year. Camp is pitched on the flats beside it. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Dhuli (2,580 m) to the Upper Seti Camp (3,250 m)",
      elevation: "3,250 m",
      accommodation: "Upper Seti Camp",
      placeDescription: "A meadow camp in the upper valley beneath the south face of the Api massif.",
      ...API_SETI_CAMP,
      html: p(
        "Above Dhuli the trail leaves cultivation behind entirely and enters the upper valley — birch and juniper scrub, boulder fields, and grazing meadows used by herders in summer. The path is faint and in places it is not a path at all, and the leader and the local porters work it out between them.",
        "Around <strong>five hours</strong> of climbing with a gain of nearly seven hundred metres. The <strong>south face of Api</strong> comes fully into view during the day: a huge complex wall of ice and rock at the head of the valley, and the first proper look at what the expedition has come for.",
        "Camp goes in on a meadow at <strong>3,250 m</strong>. This is the first night high enough to feel, and the leader watches the team for headaches, appetite and sleep — the beginning of the acclimatisation record that runs all the way to the summit. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from the Upper Seti Camp (3,250 m) to Api Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "The expedition's home for the next three weeks, on moraine beneath the south side of Api.",
      ...API_BC,
      html: p(
        "A short but rough day onto moraine. The trail climbs past the last of the grazing into a landscape of boulders, glacial streams and old lateral moraine, and after around <strong>four to five hours</strong> the expedition arrives at <strong>Api Base Camp (3,900 m)</strong>.",
        "It is a low base camp by Nepalese standards, which is entirely a function of geography: the valleys of the far west are deep, and the mountain rises straight out of them. It means base camp is comfortable, warm and green by comparison with the moraine camps of the Khumbu — and it also means the route above has over three thousand metres to gain.",
        "The crew build the camp through the afternoon: mess tent, kitchen, store, communications and toilet tents, and sleeping tents laid out on levelled platforms. The porters are paid off and start home, and the expedition is on its own. Overnight at base camp.",
      ),
    },
    {
      title: "Api Base Camp (3,900 m) – Puja and Camp Establishment",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "The expedition base beneath Api, where the puja is held before anyone goes onto the mountain.",
      ...API_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama walks up from the last village below for it, a chorten of stones is built, prayer flags are strung from it in five directions, and juniper is burned while every ice axe, crampon and rope in the expedition is laid out to be blessed.",
        "No member of a Nepali climbing team will set foot on the mountain before this is done, and it is not a performance for visitors. Rice is thrown, faces are marked with tsampa, and the ceremony ends the way it always does, with everybody drinking and the strung flags cracking in the wind.",
        "The rest of the day goes on the camp: the load is broken out and inventoried, ropes and hardware are sorted into carries, the solar array and communications are set up, and the leader and the Sherpa team go up onto the moraine with binoculars to study the line to Camp 1. Overnight at base camp.",
      ),
    },
    {
      title: "Api Base Camp (3,900 m) – Technical Assessment and Training",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Ice slopes above base camp, where the team's technique is assessed before the route begins.",
      ...API_BC,
      html: p(
        "A working day on the ice above camp, and the point at which the leader decides how the expedition will be run. Everything the route demands is checked in a controlled setting: front-pointing and tool placement on <strong>50 to 55 degree ice</strong>, ice screw placement and removal, ascender work on fixed line, changeovers at anchors, and abseiling from a hanging stance in gloves.",
        "Movement together on a corniced ridge is rehearsed as well, because the summit ridge is taken one at a time and the discipline has to be automatic by then.",
        "The assessment is honest. A climber who is slow at a changeover here will be dangerously slow at 6,800 m in the dark, and it is far better to find that out today than on the summit push. The afternoon is rest, and the Sherpa team makes the first carry towards Camp 1. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Carry from Base Camp (3,900 m) towards Camp 1",
      elevation: "4,500 m",
      accommodation: "Api Base Camp",
      placeDescription: "The lower glacier above base camp, where the route onto the mountain begins.",
      ...API_BC,
      html: p(
        "The first day on the mountain proper. The team climbs the moraine and steps onto the <strong>glacier</strong>, roped and in crampons, following the line the Sherpas have been working on and marked with wands over the last two days.",
        "The glacier is crevassed and the route weaves through it, over snow bridges that are probed and around holes that are not crossed at all. Around <strong>4,500 m</strong> the team caches a load of rope and hardware for the camp above, has something to eat, and turns round.",
        "The descent is quick and everyone is back at base camp for late lunch. Climb high, sleep low: this is the standard mechanism of acclimatisation and it is the whole purpose of the day. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (3,900 m) – Rest Day",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp on the moraine, where the expedition rests and the Sherpa team pushes the route.",
      ...API_BC,
      html: p(
        "A full rest day, and it is worth taking seriously. Eat as much as you can manage, drink four to five litres, sleep in the afternoon, sort your gear for the rotation and do nothing that costs energy.",
        "The <strong>Sherpa team is out on the route</strong> today, fixing above the cache towards the Camp 1 site and carrying tents and fuel up. The leader takes a satellite forecast in the evening and briefs the rotation.",
        "The low altitude of base camp helps here in a way it does not on most 7,000 m expeditions — at 3,900 m the body genuinely recovers rather than merely deteriorating more slowly, and a rest day is a real rest. Overnight at base camp.",
      ),
    },
    {
      title: "Rotation: Base Camp (3,900 m) to Camp 1 (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Camp 1",
      placeDescription: "The first camp on the glacier shelf above the icefall, at 4,800 m.",
      ...API_C1,
      html: p(
        "The acclimatisation rotation begins. The team follows the wanded line through the crevasse field, clips into the fixed rope where the glacier steepens, and climbs the broken ground above it to the shelf where <strong>Camp 1 (4,800 m)</strong> sits.",
        "It is <strong>five to six hours</strong> with a nine-hundred-metre gain, carrying personal kit and a share of the load. The Sherpas have the tents in and the platforms cut, and the afternoon goes on melting snow, eating and lying still while the body works.",
        "The first night at 4,800 m is usually a poor one: broken sleep, a headache, periodic breathing. That is normal and it is the point of being here. Your leader checks everyone in the evening and again at first light. Overnight at Camp 1.",
      ),
    },
    {
      title: "Camp 1 (4,800 m) – Climb towards Camp 2 and Return to Base Camp",
      elevation: "5,300 m",
      accommodation: "Api Base Camp",
      placeDescription: "The lower ice face above Camp 1, where the sustained climbing begins.",
      ...API_C1,
      html: p(
        "A short, hard morning. The team climbs the first pitches of the <strong>ice face above Camp 1</strong> on fixed rope — this is where the route stops being a glacier walk and becomes sustained climbing at 50 to 55 degrees — and turns round at around <strong>5,300 m</strong>, having touched the ground that matters.",
        "It is a valuable ninety minutes: it puts the route into your legs, it lets the leader watch the whole team on steep ice at altitude, and it takes the acclimatisation another five hundred metres higher.",
        "Camp 1 is stripped of what is not staying, and the team descends all the way to base camp — through the crevasse field, off the glacier, down the moraine and into the mess tent for hot food. The drop of nearly a thousand metres from your high point is what makes tomorrow's rest effective. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (3,900 m) – Rest and Weather Window",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp, where the team recovers and the summit window is chosen.",
      ...API_BC,
      html: p(
        "Rest, food and the forecast. The rotation is done and the body is now converting it into red cells, which takes days rather than hours and cannot be hurried.",
        "The <strong>summit window</strong> is chosen on this day or the next. The leader takes the satellite forecast, weighs the wind at 7,000 m against the state of the fixed rope and the condition of the team, and picks the day the push starts. On a mountain with no other party there is no information from anybody else — the decision rests entirely with your leader.",
        "Personal loads are packed for a push that will not return to base camp for five days: down suit, high-altitude rations, spare gloves and goggles, batteries and headtorches. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push: Base Camp (3,900 m) to Camp 1 (4,800 m)",
      elevation: "4,800 m",
      accommodation: "Camp 1",
      placeDescription: "Camp 1 on the glacier shelf, the first night of the summit push.",
      ...API_C1,
      html: p(
        "The push begins. The ground is familiar now and the team moves faster than it did on the rotation — through the crevasse field, up the fixed section and onto the shelf at <strong>Camp 1 (4,800 m)</strong> in four to five hours.",
        "The tents are already up, so the afternoon is spent doing the only three things that matter at this stage: drinking, eating and lying down. Snow is melted continuously and everybody is checked for signs that they should not go higher.",
        "The evening forecast comes in and is discussed openly. Nobody goes onto the face tomorrow without the leader's agreement, and a climber who was slow today is told so tonight rather than at 6,000 m. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push: Camp 1 (4,800 m) to Camp 2 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 2",
      placeDescription: "Camp 2, cut into the ice face at 5,700 m above the steep ground.",
      ...API_C2,
      html: p(
        "The hardest day below the summit. Above Camp 1 the route climbs the <strong>ice face</strong> on fixed rope for the best part of a thousand metres — sustained ground at 50 to 55 degrees with steeper steps, all of it fixed by our Sherpas, all of it climbed on an ascender with a pack on.",
        "It is <strong>six to eight hours</strong> of continuous effort and it is where the grade D is earned. Rhythm is everything: a steady pace with the calves rather than a series of surges, and a disciplined changeover at every anchor.",
        "<strong>Camp 2 (5,700 m)</strong> is cut into the face, a pair of platforms hacked out of ice with the tents anchored to screws — a spectacular and slightly unnerving place to spend a night. Everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push: Camp 2 (5,700 m) to High Camp (6,300 m)",
      elevation: "6,300 m",
      accommodation: "High Camp",
      placeDescription: "The high camp on the upper shoulder at 6,300 m, the last stop below the summit ridge.",
      ...API_HIGH_CAMP,
      html: p(
        "A deliberately short day, because tomorrow is a very long one. The route continues up the face and out onto the <strong>upper shoulder</strong>, easing in angle but not in seriousness, and reaches the <strong>high camp at 6,300 m</strong> in four to five hours.",
        "This is as high as the expedition sleeps, and the air here holds less than half the oxygen of sea level. Nobody sleeps well, nobody is hungry, and both of those have to be overridden — you eat and drink because you have to, not because you want to.",
        "The afternoon is spent preparing: harness laid out, crampons fitted to boots, batteries warmed inside the sleeping bag, water bottles filled. The team is briefed on the ridge and on the turnaround time, and goes to bed at seven for an alarm shortly after midnight. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Day: Api (7,132 m) and Descent to Camp 2 (5,700 m)",
      elevation: "7,132 m",
      accommodation: "Camp 2",
      placeDescription: "The summit of Api, the highest point in far-western Nepal.",
      ...API_HIMAL,
      html: p(
        "You leave high camp at around <strong>one in the morning</strong> in a line of headtorches, and it is bitterly cold. The route climbs snow slopes and short ice steps to gain the <strong>summit ridge</strong>, and from there the character of the day changes entirely.",
        "The ridge is <strong>long, exposed and corniced</strong>, and it is taken one climber at a time on fixed line — the cornices overhang the north side and the safe ground is never where instinct says it is. It goes on for hours, and the summit is not visible for most of them.",
        "The <strong>summit of Api (7,132 m)</strong> is the highest point in the far west of Nepal, and the view from it takes in three countries: the Nepalese ranges east, Tibet's brown hills north, and India across the Kali river to the west with the <strong>Nanda Devi</strong> group standing clear of everything around it. Almost nobody has stood here.",
        "You do not stay long. The descent abseils and down-climbs the ridge and the face, all of it on the rope your own team fixed, and it is where the concentration has to hold. The day runs <strong>twelve to sixteen hours</strong> and ends at <strong>Camp 2</strong>. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descent from Camp 2 (5,700 m) to Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp, reached after the long abseil descent of the face.",
      ...API_BC,
      html: p(
        "The last serious day. The face below Camp 2 is descended by <strong>abseil after abseil</strong>, the Sherpa team stripping the fixed rope and the anchors as the last climbers come down, and it takes most of the morning.",
        "Camp 1 is collapsed and carried, the glacier is recrossed while the snow bridges are still firm, and the team walks off the ice onto moraine and down to <strong>base camp (3,900 m)</strong>.",
        "The drop of eighteen hundred metres from Camp 2 is felt immediately — thicker air, warmth, grass, and a cook who has been waiting. There is hot food, a wash, and the particular exhaustion that arrives once the danger is over. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Api Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp, held in reserve against weather, conditions or a second attempt.",
      ...API_BC,
      html: p(
        "The first of four reserve days, and they are the reason this expedition is as long as it is. Api is a high, remote mountain in a range with no other party on it, and a summit push can be turned back by wind, by fresh snow loading the face, or by a single climber who is not right on the day.",
        "If the summit has already been reached, this is a rest day at base camp with nothing to do but eat, sleep and let the body repair itself.",
        "If it has not, the day belongs to the mountain: the leader takes the forecast, judges the team's condition and the state of the fixed rope, and decides whether a second attempt is realistic. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Api Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp, held in reserve for a second summit attempt or for weather.",
      ...API_BC,
      html: p(
        "The second reserve day. On an expedition where the approach alone takes five days from Kathmandu and the walk out takes another four, these buffer days are worth more than they are anywhere else — there is no possibility of extending the trip at the far end, because the flights and the road out are fixed.",
        "A second attempt, if one is being made, would start from base camp on a day like this one, moving back up through Camp 1 and Camp 2 on rope that is still in place.",
        "Otherwise it is rest: reading, sorting equipment, drinking tea in the mess tent and watching the south face change colour through the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Api Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "Base camp, with the third of the expedition's contingency days in hand.",
      ...API_BC,
      html: p(
        "The third reserve day. Far-western Nepal sits at the western end of the Himalayan chain and its weather is genuinely its own — systems arrive from the west that have nothing to do with what is happening over the Khumbu, and a settled week can end without much warning.",
        "That is why the contingency here is four days rather than the two we carry on better-known peaks, and why the leader will hold them rather than spend them early.",
        "If the mountain is finished, the camp begins to come apart quietly around you: the ropes are coiled and counted, rubbish is sorted and bagged for the walk out, and the kitchen starts working through what is left of the food. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Api Base Camp (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Api Base Camp",
      placeDescription: "The last contingency day before the expedition strips base camp and walks out.",
      ...API_BC,
      html: p(
        "The last reserve day, and the end of the mountain part of the expedition whatever has happened above. From tomorrow the team is walking down.",
        "If the reserve has not been needed, this is simply another day of eating and sleeping at a base camp that is warm, green and low enough to be genuinely restful — a rarity on a 7,000 m expedition.",
        "The final packing is done this afternoon. Every item that came up comes down: tents, ropes, hardware, fuel, batteries, packaging and human waste, all of it inventoried against the deposit lodged with the Department of Tourism before the team left Kathmandu. Porters arrive from the villages below to carry it. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Api Base Camp (3,900 m) to Dhuli (2,580 m)",
      elevation: "2,580 m",
      accommodation: "Dhuli",
      placeDescription: "The high summer settlement below the massif, on the way back down the valley.",
      ...DHULI,
      html: p(
        "Base camp comes down at first light and the expedition starts home. The moraine is descended, the upper meadows are recrossed, and the trail drops steadily back into the valley — around <strong>six to seven hours</strong> and thirteen hundred metres of descent to <strong>Dhuli (2,580 m)</strong>.",
        "Going down is a different mountain. Every step puts more oxygen in the air, the scrub returns, then juniper, then the first birch, and by the afternoon there are cattle and stone houses and woodsmoke again.",
        "There is a last look back at the south face of Api from the moraine before it goes out of sight behind the valley wall. Camp is pitched below the settlement and the crew cook a proper dinner with fresh food bought locally. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Dhuli (2,580 m) to Makarigad (1,900 m)",
      elevation: "1,900 m",
      accommodation: "Makarigad",
      placeDescription: "A middle-hill village on the walk out, back among terraces and cultivation.",
      ...MAKARIGAD,
      html: p(
        "A long descent through the Bhotiya settlements and back into cultivated country — <strong>five to six hours</strong> down the valley trail, retracing the approach in reverse and losing nearly seven hundred metres.",
        "The heat comes back with the altitude loss, and after three weeks above the treeline it is a shock. So is the greenness: forest, terraces, water buffalo, children walking to school, and the ordinary noise of a working landscape.",
        "The porters, who have been carrying since base camp, are the ones who set the pace today and they are quick. Camp is pitched again at <strong>Makarigad (1,900 m)</strong>. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Makarigad (1,900 m) to Gokuleshwar (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Gokuleshwar",
      placeDescription: "The road head bazaar in Darchula, where the walking ends and the jeeps are waiting.",
      ...GOKULESHWAR,
      html: p(
        "The last day of walking — <strong>five to six hours</strong> back down the river trail through the Chhetri villages to the road head at <strong>Gokuleshwar (1,400 m)</strong>.",
        "The porters are paid off here and the expedition settles up with everyone who has worked on it, which on a trip in this part of Nepal means most of the working-age population of two or three villages. It matters: there is very little other cash work in Darchula, and an expedition passing through is a real event in the local economy.",
        "There is cold beer at the bazaar, the first shop in three weeks, and a mobile signal. Camp is pitched at the road head for the last night under canvas. Overnight in a tent.",
      ),
    },
    {
      title: "Drive from Gokuleshwar (1,400 m) to Dhangadhi (170 m)",
      elevation: "170 m",
      accommodation: "Dhangadhi",
      placeDescription: "The lowland city on the Indian border, at the end of the long road south.",
      ...DHANGADHI,
      html: p(
        "The long jeep day in reverse: ten to twelve hours down the hill road and south along the Mahakali to <strong>Dhangadhi (170 m)</strong>. It is rough, dusty and slow, and it is the last hard day of the expedition.",
        "The hills unwind behind you and the Terai heat builds through the afternoon until it is genuinely oppressive by the time the jeeps reach the plain.",
        "A hotel, a shower and a bed are waiting, and the difference between them and a tent at 3,900 m is impossible to overstate. The team eats together tonight — the last dinner with the whole crew, and the point at which the expedition is properly over. Overnight in Dhangadhi.",
      ),
    },
    {
      title: "Fly from Dhangadhi (170 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "The <strong>one-hour flight east to Kathmandu (1,400 m)</strong>, back along the length of the country with the Himalaya out of the right-hand windows the entire way.",
        "You are transferred to your hotel and the afternoon is entirely your own. Most people do the same three things in the same order: a very long shower, clean clothes, and a meal that somebody else has cooked with ingredients that did not travel four days on a porter's back.",
        "The cargo is returned to our store, the waste inventory is filed with the Department of Tourism to release the deposit, and any summit certificate is processed. In the evening the team eats together in Thamel and the leader hands over the expedition report. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Free Day and Contingency",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, kept free as a buffer against the far-western flights and roads.",
      ...KATHMANDU,
      html: p(
        "This day is deliberately empty, and it exists because of the road and the flight rather than the mountain. The hill road out of Darchula can close after rain and the Dhangadhi service can be delayed, and a team that misses an international connection because the itinerary had no slack in it has been let down by its operator.",
        "If everything has run to time, it is a free day in Kathmandu — Boudhanath, Patan Durbar Square, Swayambhunath, the shops of Thamel for anything you want to take home, and a proper meal.",
        "Your leader is available for a debrief, and any certificate or paperwork is handed over. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last slow morning in Kathmandu, and the city is a much easier place to enjoy on the way out than it was on the way in.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Api sees fewer visitors in a decade than Everest base camp sees in a morning, and whatever happened on the summit ridge, a team that walked into the far west and climbed on that mountain has been somewhere very few people ever go.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const boktaPeakClimbing: Climb = {
  region: "Remote Region",
  price: 5450,
  difficulty: "difficult",
  maxAltitude: 6143,
  grade: "PD+",
  center: [87.88, 27.55],
  zoom: 10,
  content: {
    slug: "bokta-peak-climbing",
    title: "Bokta Peak Climbing",
    overview:
      "<p><strong>Bokta (6,143 m)</strong> stands at the southern edge of the Kanchenjunga massif, above the <strong>Yalung glacier</strong>, and it is one of the least-attempted permitted peaks in Nepal. It was opened by the Nepal Mountaineering Association in 2002 and receives a handful of parties in a good season — several times fewer than Island Peak sees in a single week.</p><p>Getting there is most of the trip. A flight to <strong>Bhadrapur</strong> in the far south-east, two days of driving up through the tea hills of Ilam to <strong>Taplejung</strong>, and then seven days of walking over ridge after ridge to <strong>Yamphudin</strong>, <strong>Tseram</strong> and <strong>Ramche</strong> beneath the south face of Kanchenjunga. The climb itself is graded <strong>PD+</strong> — glacier travel, a fixed snow and ice slope and a short exposed summit ridge — and the reward is a summit looking straight into the 3,000 m south wall of the third-highest mountain on earth.</p>",
    highlights: [
      ["Summit Bokta (6,143 m)", "A rarely attempted NMA peak on the southern rim of the Kanchenjunga massif."],
      ["The Kanchenjunga South Face", "A 3,000 m wall of ice seen from Oktang and again from the summit — one of the great faces of the Himalaya."],
      ["Seven Days of Walking In", "Ridge after ridge through Limbu and Sherpa villages, on a trail carrying a fraction of the Khumbu's traffic."],
      ["The Tea Hills of Ilam", "Two days of driving through the terraced tea gardens of Nepal's south-eastern hills to reach Taplejung."],
      ["Full Camping Beyond Tseram", "Tented base camp and high camp on the Yalung glacier with a cook crew, in a valley with nobody else in it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Autumn gives the clearest air and the most reliable views of the Kanchenjunga south face; spring is warmer, greener and brings rhododendron the whole length of the approach, at the cost of more afternoon cloud.</p><p>Eastern Nepal is the <strong>wettest part of the Himalaya</strong> — the monsoon arrives here first and leaves last — so the shoulder weeks at either end of both windows are less dependable than they would be further west. The Bhadrapur flight is reliable; the hill road to Taplejung is the part of the journey that weather actually interrupts.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>PD+</strong>. From <strong>base camp at 4,900 m</strong> on the Yalung glacier the route crosses moraine and glacier to a <strong>high camp at 5,400 m</strong>, roped throughout and past a small number of crevasses.</p><p>Summit day climbs a <strong>snow and ice slope of 40 to 45 degrees</strong>, fixed by your Sherpa team, onto the upper shoulder, and finishes along a <strong>short exposed summit ridge</strong> taken one at a time. It is eight to eleven hours round trip from high camp, with the descent by abseil down the fixed line. The technical demands are modest; the altitude, the cold and the remoteness are what make it serious.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>This is a suitable first Himalayan peak for a fit trekker who has done a proper multi-day trek at altitude, but not a first mountain day. You need to be comfortable in crampons on 45-degree ground, able to ascend a fixed rope with a jumar and abseil off it, and content moving roped on a glacier. Everything is taught and checked on the base camp training day, but arriving with the skills makes the summit far more likely.</p><p>The bigger requirement is stamina and patience. The approach is <strong>seven days of walking</strong> over a succession of ridges with substantial daily ascent and descent, in a valley with no lodges above Tseram, no other parties and no quick exit. Bokta suits climbers who want the wildness rather than the tick.</p>",
      },
      {
        heading: "Travel Insurance and Evacuation",
        content:
          "<p>Insurance covering <strong>mountaineering to 6,500 m</strong>, including the use of ropes, crampons and ice axes, is compulsory. Standard trekking cover excludes climbing above base camp and will not pay.</p><p><strong>Emergency helicopter evacuation and repatriation must be included</strong>, and the limit needs to be a high one. Kanchenjunga south is a long flight from Kathmandu, weather closes the valley regularly, and evacuation from anywhere above base camp means being brought down on foot first. Your guide carries a comprehensive medical kit, a pulse oximeter and emergency oxygen, and altitude checks are made daily.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Insulated mountaineering boots</strong> that take a step-in or hybrid crampon, a <strong>harness</strong>, a general mountaineering ice axe, a helmet, a jumar, a belay device and two screwgates, plus a <strong>-20°C sleeping bag</strong>, a down jacket, a full shell, gloves in two weights, glacier glasses and a headlamp.</p><p>The approach crosses subtropical and middle-hill country for four days before it gets cold, so bring proper waterproofs and expect leeches in spring. Boots, crampons, axe, harness and sleeping bag can all be <strong>hired in Kathmandu</strong>, and we help you do it. <strong>All fixed and main ropes, ice screws, snow stakes and anchors are supplied</strong> and your Sherpa team fixes the route.</p>",
      },
    ],
    faqs: [
      { question: "Where is Bokta?", answer: "On the southern rim of the Kanchenjunga massif above the Yalung glacier, in Taplejung district in the far east of Nepal near the Indian border. It sits between Ramche and the Kanchenjunga south base camp at Oktang." },
      { question: "How rarely is it climbed?", answer: "Very. It was opened as an NMA permitted peak in 2002 and typically sees a handful of parties in a season, sometimes none. There is no queue, no fixed rope from anyone else and, most years, nobody else in the valley at all." },
      { question: "How long is the approach?", answer: "A flight to Bhadrapur, a day's drive to Ilam, another to Taplejung, and then seven days of walking to base camp. The trail crosses a succession of ridges rather than following one valley, so the daily ascent and descent is large even where the net gain is small." },
      { question: "Is this the same as the Kanchenjunga south base camp trek?", answer: "It follows the same trail as far as Ramche and Oktang, and then continues onto the Yalung glacier to a climbing base camp the trekking route does not use. If you have looked at the Kanchenjunga south trek, this is that trek with a mountain on the end of it." },
      { question: "Do I need a restricted area permit?", answer: "Yes. The Kanchenjunga Conservation Area is a restricted region and requires a restricted area permit issued through a registered agency, with a minimum of two trekkers and a licensed guide. We arrange it, and it is included." },
      { question: "What accommodation is there?", answer: "Simple teahouses and homestays from Taplejung to Tseram — basic, family-run and often just a room in someone's house. Above Tseram there is nothing, so the trip is fully tented from Ramche onward with a mess tent, kitchen tent and toilet tent and a cook crew." },
      { question: "What is the summit success rate?", answer: "Around 65 to 75 percent on our departures. The climbing is not hard for the grade; the reasons people turn back are weather, snow conditions on the fixed slope, and the cumulative tiredness of a seven-day approach before the mountain even starts." },
      { question: "How is the walk out handled?", answer: "Back down the Simbua Khola to Yamphudin over two days, then by jeep to Taplejung on the road that now reaches the village. That saves three days of walking compared with the old route out over the ridges, and it is the reason this itinerary is as short as it is." },
      { question: "Is there mobile signal or charging?", answer: "Patchy NTC coverage in the villages as far as Yamphudin and nothing above it — roughly a week out of contact. There is no charging above Tseram, so bring two power banks and a solar panel if you rely on a camera." },
      { question: "Why go here rather than to a Khumbu peak?", answer: "For the emptiness. Bokta asks for a week more of your time than Island Peak and gives back a valley with nobody in it, a view of the Kanchenjunga south face that very few people have seen from a summit, and an approach through country that has not been rearranged around tourism." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flights between Kathmandu and Bhadrapur."],
      transport: [
        "Private jeep transport between Bhadrapur, Ilam and Taplejung in both directions.",
        "Private jeep transport between Yamphudin and Taplejung on the walk out.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation:
        "Teahouse and homestay accommodation on the approach from Taplejung to Tseram, on a twin-share basis.",
      camping:
        "Tented accommodation at Ramche, at the Bokta base camp on the Yalung glacier (4,900 m) and at high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permit for Bokta, the Kanchenjunga Conservation Area restricted area permit and entry permit.",
      sherpa: REMOTE_SHERPA,
      extra: [
        "Cook and kitchen crew for the camping section, with all food and fuel carried in from the last village.",
        "A training and skills-check day at base camp covering rope-team travel, crampon technique, fixed-line ascent and abseiling.",
        "Fixing of the summit slope and the summit ridge by your Sherpa team, and stripping of the ropes on descent.",
        "Porter transport of group climbing equipment and camp gear throughout.",
        "A reserve day held at base camp for the summit attempt.",
        "An acclimatisation day at Ramche with a walk to the Oktang viewpoint below the Kanchenjunga south face.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus: null,
      extra: ["Personal climbing hardware — boots, harness, crampons, ice axe, jumar, belay device and screwgates, all of which can be hired in Kathmandu."],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a closure of the Taplejung hill road, or a summit attempt abandoned for conditions.",
    },
    porterDays: 17,
    gearRentalDays: 16,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 24-day climb of Bokta (6,143 m) on the southern rim of the Kanchenjunga massif, walking in from Taplejung through Yamphudin and Tseram to Ramche and a tented base camp on the Yalung glacier.",
    inExDescription:
      "Bhadrapur flights, all jeep transport, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day on the trek, the NMA climbing permit and Kanchenjunga restricted area permits, a licensed climbing guide with Sherpa support, a cook crew, group climbing equipment, rope fixing on the peak and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, city meals and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Bokta Peak Climbing (6,143 m) — 24 Days, Kanchenjunga South | Green Compass Treks",
      description:
        "Climb Bokta (6,143 m) above the Yalung glacier on the southern rim of Kanchenjunga — a 24-day PD+ expedition through one of the emptiest corners of Nepal, with a tented base camp and full Sherpa support.",
      keywords:
        "bokta peak climbing, bokta 6143m, kanchenjunga south climbing, yalung glacier, taplejung climbing, nma peak east nepal, ramche oktang",
      tags: "Bokta Peak, Remote Region, NMA Peak, 6000m Peak, Kanchenjunga, Camping Climb",
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
        "The rest of the day is yours to rest and adjust. Kathmandu is the last place anything can be bought, hired or replaced before an approach that walks seven days from the nearest road in the far east of the country, so lay your equipment out tonight — it is checked in the morning.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and set the plan for tomorrow. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the climb is briefed and any missing equipment is hired.",
      ...KATHMANDU,
      html: p(
        "A working day in Kathmandu. Your guide takes the twenty-four day plan apart stage by stage — the Bhadrapur flight, the two days of driving through the tea hills, the seven-day walk in, base camp on the Yalung glacier, the training day, high camp and the summit — and explains where the reserve day sits and what would use it.",
        "The <strong>equipment check</strong> follows: boots that take a crampon, harness, ice axe, helmet, jumar, belay device and screwgates, plus the sleeping bag, down jacket and shell layers. Anything missing is <strong>hired in Thamel</strong> this afternoon and we go with you, because a crampon that does not fit a boot is the single most common reason a climber does not summit.",
        "Your <strong>NMA climbing permit</strong> and the <strong>Kanchenjunga restricted area permits</strong> are lodged today. Bring your passport, insurance certificate and photographs. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Bhadrapur (91 m) and Drive to Ilam (1,206 m)",
      elevation: "1,206 m",
      accommodation: "Ilam",
      placeDescription: "A hill town in the tea gardens of south-eastern Nepal, above the Terai plain.",
      ...ILAM,
      html: p(
        "An early transfer to the domestic terminal for the <strong>fifty-minute flight to Bhadrapur (91 m)</strong> in Nepal's far south-eastern corner, a few kilometres from the Indian border and about as far from the mountains as it is possible to be in this country.",
        "From the airstrip a jeep turns north and climbs steadily out of the Terai heat into the hills. The road runs for three to four hours through some of the most attractive country in Nepal — <strong>terraced tea gardens</strong> laid over the hillsides in green corduroy, cardamom under the shade trees, and the first real view of the ranges ahead.",
        "<strong>Ilam (1,206 m)</strong> is the centre of Nepal's tea industry and a pleasant, prosperous hill town that almost no foreign visitor stops in. There is time to walk out into the gardens in the late afternoon. Overnight in Ilam.",
      ),
    },
    {
      title: "Drive from Ilam (1,206 m) to Taplejung (1,820 m)",
      elevation: "1,820 m",
      accommodation: "Taplejung",
      placeDescription: "The district headquarters of Taplejung, the road head for the Kanchenjunga valleys.",
      ...TAPLEJUNG,
      html: p(
        "A long day in the jeep — <strong>seven to nine hours</strong> north along a hill road that alternates between sealed sections and rough unmade shelf cut into the hillside. It follows ridges and river valleys rather than any direct line, and the timing is an estimate.",
        "The country changes as you climb: tea gives way to millet and maize, the villages become Limbu and Rai rather than the mixed lowland communities of Ilam, and the ranges ahead grow steadily larger through the gaps.",
        "<strong>Taplejung (1,820 m)</strong> is the district headquarters and the last town of any size — a sprawl of shops and government offices on a ridge, with a small airstrip at Suketar above it. Porters are engaged here, loads are made up and weighed, and permits are checked at the conservation area post. Overnight in a guesthouse.",
      ),
    },
    {
      title: "Trek from Taplejung (1,820 m) to Lali Kharka (2,265 m)",
      elevation: "2,265 m",
      accommodation: "Lali Kharka",
      placeDescription: "A ridge settlement above Taplejung, the first camp of the Kanchenjunga south approach.",
      ...LALI_KHARKA,
      html: p(
        "The walking starts. The trail climbs out of Taplejung past the Suketar airstrip and onto the ridge, then contours and climbs through terraced farmland and stands of rhododendron and oak.",
        "It is around <strong>five hours</strong> with a net gain of four hundred and fifty metres, though the day involves considerably more up and down than that suggests — this approach crosses ridges rather than following a valley, and every one of them has to be climbed and descended.",
        "The villages along the way are Limbu, with their own language, their own religion and a well-earned reputation for hospitality. Nobody here is running a trekking business. <strong>Lali Kharka (2,265 m)</strong> is a scatter of houses on the ridge with views back over the hills of Taplejung. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Trek from Lali Kharka (2,265 m) to Khesewa (2,120 m)",
      elevation: "2,120 m",
      accommodation: "Khesewa",
      placeDescription: "A Limbu village on the second ridge of the approach to Yamphudin.",
      ...KHESEWA,
      html: p(
        "A day that ends lower than it started and still involves a thousand metres of climbing, which is a fair summary of this entire approach. The trail drops steeply off the Lali Kharka ridge to the <strong>Phawa Khola</strong>, crosses it on a suspension bridge, and climbs the far side through terraces and forest.",
        "Around <strong>six hours</strong>. It is hot at this elevation, and in spring the forest sections hold leeches — long socks and a bottle of salt solution are worth having.",
        "Cardamom grows under the trees along much of the route and is the main cash crop of these hills; the drying sheds beside the trail smell extraordinary. <strong>Khesewa (2,120 m)</strong> is a Limbu village on the next ridge, with a lodge that is essentially somebody's front room. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Trek from Khesewa (2,120 m) to Mamankhe (1,785 m)",
      elevation: "1,785 m",
      accommodation: "Mamankhe",
      placeDescription: "A large Limbu village above the Kabeli Khola, the last big settlement before Yamphudin.",
      ...MAMANKHE,
      html: p(
        "More of the same demanding, rewarding ridge country — <strong>six to seven hours</strong> of descending to river level, crossing, and climbing again, through terraced hillsides and patches of subtropical forest with the sound of the <strong>Kabeli Khola</strong> below for most of the day.",
        "This is the heart of Limbu Nepal, and the trail passes through a string of villages where children walk to school, water buffalo are driven along the path and the arrival of foreigners is a matter of open curiosity rather than commerce.",
        "<strong>Mamankhe (1,785 m)</strong> is a large village above the river with a small Limbu cultural museum and a community lodge. It is the last substantial settlement before the country begins to empty out. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Trek from Mamankhe (1,785 m) to Yamphudin (2,080 m)",
      elevation: "2,080 m",
      accommodation: "Yamphudin",
      placeDescription: "The last permanent village on the Kanchenjunga south approach, at the road's end.",
      ...YAMPHUDIN,
      html: p(
        "The trail follows the <strong>Kabeli Khola</strong> upstream, contouring high above the river through forest and small clearings, with a couple of exposed sections where the path is cut into the hillside.",
        "Around <strong>five to six hours</strong>. The valley narrows steadily and the character of the country changes — fewer terraces, more forest, and the first Sherpa and Bhotiya faces among the Limbu and Rai.",
        "<strong>Yamphudin (2,080 m)</strong> is a mixed village of Limbu, Rai, Sherpa and Gurung families and the last permanent settlement on the route. A rough jeep road now reaches it, which is how the expedition will leave at the end. Loads are reorganised here and the last fresh food is bought. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Trek from Yamphudin (2,080 m) to Tortong (2,995 m)",
      elevation: "2,995 m",
      accommodation: "Tortong",
      placeDescription: "A herders' clearing in the Simbua Khola forest, the first camp beyond the villages.",
      ...TORTONG,
      html: p(
        "The approach changes gear today. The trail climbs steeply out of Yamphudin over the <strong>Dhupi Bhanjyang</strong> ridge at around 2,600 m, drops to the <strong>Simbua Khola</strong>, and then follows the river upstream into deep forest.",
        "It is <strong>six to seven hours</strong> with a nine-hundred-metre net gain and a good deal more than that in total climbing. The forest here is superb — old rhododendron, hemlock and fir, dripping with moss and lichen — and there are red panda in it, though almost nobody sees one.",
        "<strong>Tortong (2,995 m)</strong> is a clearing used by herders with a couple of basic shelters. From here on there are no more villages, no more shops and no more people who live in the valley year round. Overnight in a simple lodge or tent.",
      ),
    },
    {
      title: "Trek from Tortong (2,995 m) to Tseram (3,870 m)",
      elevation: "3,870 m",
      accommodation: "Tseram",
      placeDescription: "A herders' settlement at the foot of the Yalung glacier, where the treeline ends.",
      ...TSERAM,
      html: p(
        "A steady climb up the Simbua Khola through the last of the forest and out above the treeline — <strong>five to six hours</strong> and nearly nine hundred metres of gain, with the valley opening out and the first serious peaks appearing at its head.",
        "The vegetation thins from rhododendron to juniper scrub to open grazing over the course of a single morning, and the temperature drops with it. This is the day the trek stops being a hill walk and starts being a mountain approach.",
        "<strong>Tseram (3,870 m)</strong> sits at the snout of the <strong>Yalung glacier</strong> and is the last place with any built shelter — a few stone huts used by herders and the occasional trekking party. Your guide runs the first proper altitude checks here. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Trek from Tseram (3,870 m) to Ramche (4,610 m)",
      elevation: "4,610 m",
      accommodation: "Ramche",
      placeDescription: "A summer grazing basin on the lateral moraine of the Yalung glacier, beneath Kanchenjunga.",
      ...RAMCHE,
      html: p(
        "A short but genuinely high day. The trail climbs the <strong>lateral moraine of the Yalung glacier</strong>, passing the herders' huts at Lapsang, and emerges into the open basin of <strong>Ramche (4,610 m)</strong> after around <strong>four to five hours</strong>.",
        "The gain of seven hundred and forty metres is significant at this altitude, so the pace is slow and deliberate and the afternoon is rest. Blue sheep graze on the slopes above the basin and are entirely unbothered by people.",
        "The reward arrives with the first clear moment: <strong>Kanchenjunga's enormous south face</strong> filling the head of the valley, with Kabru, Rathong and Talung along the rim. The camp goes in on the flats beside the stream, and this is the first night under canvas. Overnight in a tent.",
      ),
    },
    {
      title: "Acclimatisation Day at Ramche (4,610 m) – Oktang Viewpoint",
      elevation: "4,730 m",
      accommodation: "Ramche",
      placeDescription: "The Oktang viewpoint at the foot of the Kanchenjunga south face, above the Yalung glacier.",
      ...OKTANG,
      html: p(
        "An acclimatisation day, and one of the best walking days in Nepal. The trail follows the moraine north to <strong>Oktang (4,730 m)</strong>, a chorten and prayer-flag site at the foot of the <strong>Kanchenjunga south face</strong>, in around two hours each way.",
        "The face is three thousand metres of ice and rock rising straight out of the glacier, and standing beneath it is worth the eleven days it has taken to get here. This is where the 1955 first ascent party came, and the summit is still not stepped on out of respect for the Sikkimese belief that the mountain is sacred.",
        "Climb high, sleep low: the walk takes the acclimatisation a little higher and returns to Ramche for the night. Your guide checks oxygen saturation, appetite and sleep quality in the evening before committing the team to base camp. Overnight in a tent.",
      ),
    },
    {
      title: "Trek from Ramche (4,610 m) to Bokta Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Bokta Base Camp",
      placeDescription: "The tented base camp on the moraine of the Yalung glacier beneath Bokta's south-west flank.",
      ...BOKTA_BC,
      html: p(
        "A short day onto the moraine, and the point at which the trip stops following any trekking route. The team leaves the Oktang trail, works east across the <strong>Yalung glacier's</strong> lateral moraine, and climbs onto the shelf beneath Bokta's south-west flank in <strong>three to four hours</strong>.",
        "<strong>Base camp (4,900 m)</strong> is a levelled area of moraine beside a meltwater pool with the mountain directly above and Kanchenjunga behind. The crew build the camp through the afternoon — mess tent, kitchen, store and toilet tents, and sleeping tents on cut platforms.",
        "Almost nobody comes here. In an average season this camp is used by two or three parties in total, and it is entirely possible that yours is the only one on the mountain this month. Overnight at base camp.",
      ),
    },
    {
      title: "Bokta Base Camp (4,900 m) – Puja and Climbing Skills Training",
      elevation: "4,900 m",
      accommodation: "Bokta Base Camp",
      placeDescription: "Base camp on the Yalung moraine, where the team's climbing technique is checked before the ascent.",
      ...BOKTA_BC,
      html: p(
        "A <strong>puja</strong> is held first thing: a small chorten of stones, prayer flags strung from it, juniper burned, and every axe, crampon and rope laid out to be blessed. Your Sherpa team will not go onto the mountain before this is done.",
        "The rest of the day is a <strong>full training and skills-check session</strong> on the ice above camp. Everything the route asks for is practised in a controlled place: crampon technique on 40 to 45 degree ice, ascending fixed rope with a jumar, changing over at anchors, abseiling, and moving as a roped team on glacier with a crevasse rescue drill.",
        "It is also an honest assessment. Your guide watches how quickly people manage a changeover and how they cope with exposure, and plans the summit day around what they see. The Sherpa team makes a carry to high camp during the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Climb from Base Camp (4,900 m) to High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "High Camp",
      placeDescription: "The tented high camp on the upper glacier shelf at 5,400 m, below Bokta's summit slope.",
      ...BOKTA_HIGH_CAMP,
      html: p(
        "A half day with a real load. The route climbs moraine onto the <strong>upper glacier</strong>, where the team ropes up and puts crampons on, and picks a line through a small number of crevasses to the shelf where <strong>high camp (5,400 m)</strong> sits.",
        "It is <strong>three to four hours</strong> and five hundred metres. You carry your own sleeping bag, down clothing, harness and hardware; the Sherpas have already brought the tents and the fuel.",
        "The afternoon is spent melting snow, eating early and lying still. Your guide briefs the summit — the fixed slope, the ridge, the turnaround time and the order of the rope teams — and everyone is in a sleeping bag by seven. The alarm goes at one. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Day: Bokta (6,143 m) and Descent to Base Camp (4,900 m)",
      elevation: "6,143 m",
      accommodation: "Bokta Base Camp",
      placeDescription: "The summit of Bokta, looking straight into the south face of Kanchenjunga.",
      ...BOKTA_PEAK,
      html: p(
        "You leave high camp at around <strong>two in the morning</strong>, roped and in crampons, and climb the glacier by headtorch to the foot of the summit slope. It is cold and dark and the first hour is the hardest to face.",
        "The <strong>slope above is fixed</strong> by your Sherpa team — snow and ice at 40 to 45 degrees, climbed on a jumar in a steady rhythm — and it leads onto the upper shoulder as the sky starts to lighten. From there a <strong>short exposed ridge</strong> is taken one climber at a time to the top.",
        "The <strong>summit of Bokta (6,143 m)</strong> looks straight across the Yalung glacier into the south face of <strong>Kanchenjunga (8,586 m)</strong>, with Jannu to the north-west, Kabru and Rathong along the Sikkim border and the hills of Ilam disappearing south into haze. Very few people have stood here.",
        "The descent abseils the fixed line, recrosses the glacier and collapses high camp on the way through, continuing all the way to base camp. It is <strong>eight to eleven hours</strong> to the summit and back to high camp, and another two down. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Bokta Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Bokta Base Camp",
      placeDescription: "Base camp on the Yalung moraine, held in reserve for the summit attempt.",
      ...BOKTA_BC,
      html: p(
        "The reserve day, and it is the reason the summit success rate on this trip is what it is. Twelve days of travel and walking go into reaching this mountain, and losing it to a single bad morning would be a poor way to spend them.",
        "If the summit has been reached, this is a rest day at base camp — a long sleep, a proper breakfast, and an afternoon of doing nothing at all with the Kanchenjunga south face in view.",
        "If the attempt was turned back by weather or conditions, the rope is still in place on the slope and a second attempt goes back up to high camp today for a summit push tomorrow. Your guide makes that call on the forecast and on how the team is holding up. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,900 m) to Tortong (2,995 m)",
      elevation: "2,995 m",
      accommodation: "Tortong",
      placeDescription: "The forest clearing on the Simbua Khola, reached on the long descent from the glacier.",
      ...TORTONG,
      html: p(
        "The camp comes down at first light and the walk out begins with a long, steady descent — off the moraine, past Ramche, down through Tseram and back below the treeline to <strong>Tortong (2,995 m)</strong>.",
        "It is <strong>seven to eight hours</strong> and nineteen hundred metres of descent, which is hard on the knees and wonderfully easy on the lungs. Two days of the approach are covered in one on the way down.",
        "The change is dramatic. Ice and moraine give way to juniper, then rhododendron, then dripping old forest, and by the afternoon the air is thick and warm and full of birds. There is a last look back at Kanchenjunga from the moraine above Tseram before it goes behind the valley wall. Overnight in a simple lodge or tent.",
      ),
    },
    {
      title: "Trek from Tortong (2,995 m) to Yamphudin (2,080 m)",
      elevation: "2,080 m",
      accommodation: "Yamphudin",
      placeDescription: "The last village of the approach, where the jeeps meet the team.",
      ...YAMPHUDIN,
      html: p(
        "The last day of walking. The trail follows the Simbua Khola down through the forest, climbs back over the <strong>Dhupi Bhanjyang</strong> ridge, and drops into <strong>Yamphudin (2,080 m)</strong> in around <strong>six hours</strong>.",
        "The porters, who have carried since Taplejung, set a pace nobody else can match on the descent and are usually in the village long before the clients. They are paid off here, and it matters — there is very little other cash work in this valley, and an expedition passing through is a real event in the local economy.",
        "There is a shop, a mobile signal and, if the season has been good, cold beer. The team eats together tonight with the whole crew. Overnight in a simple lodge.",
      ),
    },
    {
      title: "Drive from Yamphudin (2,080 m) to Taplejung (1,820 m)",
      elevation: "1,820 m",
      accommodation: "Taplejung",
      placeDescription: "The district town of Taplejung, reached by the rough new road from Yamphudin.",
      ...TAPLEJUNG,
      html: p(
        "A jeep day on the rough road that now reaches Yamphudin — <strong>five to seven hours</strong> of slow, bumpy driving along the Kabeli valley and over the ridges to <strong>Taplejung (1,820 m)</strong>.",
        "The road is a recent arrival and it has changed this valley considerably: goods that used to be carried in on backs now come by jeep, and the three days of ridge walking that the old route out required have been reduced to a single drive. It is not a comfortable one, but it buys back most of a week.",
        "Taplejung has hot showers, restaurants and shops, all of which feel like unreasonable luxury after two weeks. The crew are settled up with here and the group eats together. Overnight in a guesthouse.",
      ),
    },
    {
      title: "Drive from Taplejung (1,820 m) to Bhadrapur (91 m)",
      elevation: "91 m",
      accommodation: "Bhadrapur",
      placeDescription: "The lowland town near the Indian border with the airstrip for the far east of Nepal.",
      ...BHADRAPUR,
      html: p(
        "The long drive south in reverse — <strong>eight to ten hours</strong> down the hill road through Ilam and its tea gardens and out onto the Terai plain at <strong>Bhadrapur (91 m)</strong>.",
        "It is a full day and the heat builds steadily through the afternoon until it is genuinely oppressive by the time the jeeps reach the flat. The hills unwind behind you the whole way, and there is a last view of the high peaks from the ridge above Ilam if the air is clear.",
        "Bhadrapur is a hot, busy border town with nothing to detain a visitor, but the hotel has air conditioning and a shower, and after two weeks of camp washing that is the only thing on anyone's mind. Overnight in Bhadrapur.",
      ),
    },
    {
      title: "Fly from Bhadrapur (91 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "The <strong>fifty-minute flight west to Kathmandu (1,400 m)</strong>, back along the length of the Nepalese lowlands with the Himalaya out of the right-hand windows for the entire journey — Kanchenjunga first, then Makalu, Everest and Lhotse, then the ranges of central Nepal.",
        "You are transferred to your hotel and the afternoon is your own. Most people do the same three things in the same order: a very long shower, clean clothes, and a meal cooked by somebody who had a full kitchen to work in.",
        "Your climbing permit is closed out with the NMA and any <strong>summit certificate</strong> is processed by our office. In the evening the group eats together in Thamel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Free Day and Contingency",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, kept free as a buffer against the eastern flights and hill roads.",
      ...KATHMANDU,
      html: p(
        "This day is deliberately empty and it exists because of the road and the flight rather than the mountain. The Taplejung hill road closes after heavy rain and the Bhadrapur service can be delayed, and a group that misses an international connection because the itinerary had no slack in it has been let down by its operator.",
        "If everything has run to time it is a free day in Kathmandu. Boudhanath, Patan Durbar Square and Swayambhunath are all worth the afternoon, and Thamel has whatever you want to take home.",
        "Your guide is available for a debrief and the summit certificate is handed over. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last slow morning in Kathmandu, which is a much easier city to enjoy on the way out than it was on the way in.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any hired equipment is returned by our office.",
        "Safe travels. Bokta sees fewer climbers in a season than Island Peak sees in a morning, and a summit looking straight into the south face of Kanchenjunga is one that very few people anywhere have stood on.",
      ),
    },
  ],
};
