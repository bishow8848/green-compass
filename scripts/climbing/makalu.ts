import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  BARUNTSE, BARUNTSE_BC, CHAMLANG, CHAMLANG_BC, DOBATO, KHARE, KHONGMA_DANDA, KONGME_DINGMA,
  KOTHE, LANGMALE_KHARKA, LUKLA, MAKALU, MAKALU_BC, MERA_HIGH_CAMP, MERA_PEAK, NUM, SEDUWA,
  SETO_POKHARI, SHERPANI_COL, SHERPANI_COL_BC, TASHIGAON, THULI_KHARKA, TUMLINGTAR, WEST_COL,
  YANGLE_KHARKA,
} from "./places";
import { meraPeakAmphuLapcha } from "./mera";

/**
 * The Makalu-Barun region: Makalu itself, Baruntse, Chamlang, and the two trips
 * that link the Barun to the Hongu over the Sherpani and West Cols.
 *
 * Two entirely different approaches serve this region. Makalu and Chamlang are
 * reached from the east, by air to Tumlingtar and a week of walking up the
 * Barun. Baruntse is reached from the west, over the Zatrwa La and the Mera La
 * through the Hinku and the Hongu — the same ground as the Mera itineraries,
 * which is why those days are taken from them rather than rewritten.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const TUMLINGTAR_FLIGHTS = [
  "Round-trip flight between Kathmandu and Tumlingtar.",
];

const BARUN_PARK_FEES =
  "Makalu Barun National Park entry permit and the local rural municipality permit";

/**
 * The Hinku approach shared with the Mera itineraries: arrival, the Kathmandu
 * working day, the Zatrwa La, the drop to Kothe, and the walk up to Khare with
 * its rest and training days. Ten days, ending with the group acclimatised and
 * trained at 5,045 m.
 */
function hinkuApproach(planWord: string): ClimbDay[] {
  return meraPeakAmphuLapcha.days.slice(0, 10).map((d) => ({
    ...d,
    html: d.html
      .replace("twenty-one day plan", `${planWord} plan`)
      .replace(
        "the <strong>Amphu Lapcha</strong> in detail — how the abseil is rigged, how loads are lowered, and what happens if the col cannot be crossed",
        "the route above the Mera La in detail — the glacier, the camps, and the decision points on the way to the summit",
      ),
  }));
}


/**
 * The eastern approach, shared by Makalu, Chamlang and the Sherpani Col
 * traverse: three days in Kathmandu, the flight to Tumlingtar, and the week of
 * walking up the Barun from the rice terraces to base camp. Eleven days that
 * climb 4,500 m from subtropical farmland to a glacier, through some of the
 * least-visited country in eastern Nepal.
 */
function barunApproach(planWord: string): ClimbDay[] {
  return [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel.",
        "Rest is the only item on today's schedule. Unpack and lay out your equipment tonight — tomorrow it is inspected item by item, and Kathmandu is the last place anything can be replaced.",
        "Your expedition leader calls at the hotel in the evening to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Expedition Briefing and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      ...KATHMANDU,
      html: p(
        `A full working day. Your leader takes the ${planWord} plan apart stage by stage — the approach up the Barun, base camp, the rotations, the summit window and the reserve days — and then goes through the route itself.`,
        "The <strong>equipment inspection</strong> is item by item: boots, crampons, harness, ascender, belay device, screwgates, down clothing, mitts, goggles, headlamps and batteries. Anything missing or unsuitable is bought or hired here today.",
        "Because the Barun approach is a week of walking from the airstrip with no resupply, the packing is done carefully and weighed. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing, Permits and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the permits are formally issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the permit is issued, the regulations are read out and the waste-management deposit is registered.",
        "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched to Tumlingtar, where porters and pack animals will take it up the Barun.",
        "The afternoon is free, and it is the last one with hot water, restaurants and thick air for a long time. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Tumlingtar (405 m) and Drive to Num (1,560 m)",
      elevation: "1,560 m",
      accommodation: "Num",
      placeDescription: "A hill village on a ridge above the Arun river, at the road head for the Barun valley.",
      ...NUM,
      html: p(
        "A forty-five minute flight east to <strong>Tumlingtar (405 m)</strong>, a grass airstrip on a plateau above the Arun river in subtropical eastern Nepal. It is hot, green and about as far from a glacier as Nepal gets.",
        "From the airstrip a jeep road climbs north for four to five hours through rice terraces, banana and cardamom, gaining a thousand metres on a rough and spectacular hill road.",
        "<strong>Num (1,560 m)</strong> sits on a ridge crest with the Arun gorge dropping away on both sides. It is the road head; from tomorrow everything moves on foot. Overnight at Num.",
      ),
    },
    {
      title: "Trek from Num (1,560 m) to Seduwa (1,540 m)",
      elevation: "1,540 m",
      accommodation: "Seduwa",
      placeDescription: "A village of Rai and Sherpa farms on the western side of the Arun gorge.",
      ...SEDUWA,
      html: p(
        "A day that loses and regains eight hundred metres and ends almost where it started. The trail drops steeply off the Num ridge through terraced farmland to the <strong>Arun river</strong> at around 700 m, crossing it on a suspension bridge.",
        "Then straight back up the other side, through villages, bamboo and cardamom gardens, in heat and humidity that comes as a surprise on the way to an 8,000 m peak.",
        "<strong>Seduwa (1,540 m)</strong> is the entrance to the <strong>Makalu Barun National Park</strong>, where permits are checked. Around 5 to 6 hours. Overnight at Seduwa.",
      ),
    },
    {
      title: "Trek from Seduwa (1,540 m) to Tashigaon (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Tashigaon",
      placeDescription: "The last permanent village in the Barun valley, a Sherpa settlement among terraced fields.",
      ...TASHIGAON,
      html: p(
        "A gentler day climbing steadily north through farmland and forest, past scattered Rai hamlets, millet terraces and grazing buffalo.",
        "The country here is entirely unlike the Khumbu — subtropical hill Nepal, with the mountains still hidden behind ridges — and the walking is through working farmland rather than trekking infrastructure.",
        "<strong>Tashigaon (2,100 m)</strong> is the last permanent village in the valley and the last place to buy anything. Above it there is nothing but forest, ridge and, eventually, glacier. Around 4 to 5 hours. Overnight at Tashigaon.",
      ),
    },
    {
      title: "Trek from Tashigaon (2,100 m) to Khongma Danda (3,500 m)",
      elevation: "3,500 m",
      accommodation: "Khongma Danda",
      placeDescription: "A ridge-top camp in rhododendron forest, the first high ground of the approach.",
      ...KHONGMA_DANDA,
      html: p(
        "The hardest day of the approach: <strong>1,400 m of ascent</strong> on a relentless staircase of a trail, through dense rhododendron and oak forest hung with moss, with almost no flat ground anywhere on it.",
        "The forest is genuinely beautiful and genuinely exhausting, and in spring the rhododendrons are in full flower for the whole climb.",
        "<strong>Khongma Danda (3,500 m)</strong> is a small clearing on the ridge crest, the first camp with a view, and the first cold night. Six to seven hours. Overnight at Khongma Danda.",
      ),
    },
    {
      title: "Cross the Shipton La (4,220 m) and Trek to Dobato (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Dobato",
      placeDescription: "A high camp beyond the Shipton La, on the ridge above the Barun valley.",
      ...DOBATO,
      html: p(
        "Out of the forest and onto the ridge. The trail climbs past a series of small lakes to the <strong>Shipton La (4,220 m)</strong>, named for Eric Shipton, who came this way in 1952 on the reconnaissance that found the route to Makalu.",
        "From the pass the mountains finally appear: <strong>Chamlang</strong> to the north-west, the Barun valley opening below, and on a clear morning the top of Makalu itself.",
        "A rough descent along the ridge leads to <strong>Dobato (3,800 m)</strong>, a camp on open ground with the whole approach behind you and the valley ahead. Six to seven hours. Overnight at Dobato.",
      ),
    },
    {
      title: "Trek from Dobato (3,800 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "A grazing meadow on the floor of the Barun valley, beneath waterfalls and hanging glaciers.",
      ...YANGLE_KHARKA,
      html: p(
        "A steep descent off the ridge into the <strong>Barun valley</strong> itself, dropping through fir and birch to the river and then turning north up the valley floor.",
        "The Barun is one of the great valleys of Nepal and almost nobody sees it. Walls rise two thousand metres on both sides, waterfalls come off hanging glaciers, and the forest is old and undisturbed — this is protected habitat for red panda, musk deer and snow leopard.",
        "<strong>Yangle Kharka (3,600 m)</strong> is a grazing meadow beside the river, and the loss of height here is useful acclimatisation. Around 5 to 6 hours. Overnight at Yangle Kharka.",
      ),
    },
    {
      title: "Trek from Yangle Kharka (3,600 m) to Langmale Kharka (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Langmale Kharka",
      placeDescription: "A summer grazing camp high in the Barun, above the treeline below the glacier.",
      ...LANGMALE_KHARKA,
      html: p(
        "North up the valley floor, climbing steadily as the walls close in and the forest gives out. The trail passes through summer grazing settlements — stone huts used by herders from Tashigaon for a few months a year, empty the rest of the time.",
        "Above the last trees the valley becomes rock, moraine and grass, and the scale of it becomes obvious: <strong>Chamlang's south face</strong> on one side, the Barun glacier ahead, and Makalu still hidden behind a shoulder.",
        "<strong>Langmale Kharka (4,410 m)</strong> is the last grazing camp. Around 5 hours. Overnight at Langmale Kharka.",
      ),
    },
    {
      title: "Trek from Langmale Kharka (4,410 m) to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp on the moraine of the Barun glacier, beneath the south-east face of Makalu.",
      ...MAKALU_BC,
      html: p(
        "The last day of the approach, climbing onto the moraine of the <strong>Barun glacier</strong> and following it north on rough ground with the valley narrowing to its head.",
        "And then Makalu appears — all of it at once, from base to summit, a four-thousand-metre pyramid of rock and ice at the head of the valley. It is one of the great first sights in the Himalaya, and it stops most people where they stand.",
        "<strong>Makalu Base Camp (4,870 m)</strong> sits on the moraine below the south-east face. After eight days of walking from the road head, the expedition is finally at the mountain. Around 5 hours. Overnight at base camp.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const baruntseExpedition: Climb = {
  region: "Makalu Region",
  price: 15500,
  difficulty: "extreme",
  maxAltitude: 7129,
  grade: "AD+",
  expedition: true,
  royalty: true,
  center: [86.94, 27.8],
  zoom: 10,
  content: {
    slug: "baruntse-expedition",
    title: "Baruntse Expedition",
    overview:
      "<p><strong>Baruntse (7,129 m)</strong> stands at the head of the Hongu valley between Everest and Makalu, and it is the mountain most often recommended as the step between a 6,000 m peak and an 8,000 m one. It was first climbed in <strong>1954 by Colin Todd and Geoff Harrow</strong> on Hillary's New Zealand expedition, by the south-east ridge, and that is still the route.</p><p>What makes it the right 7,000 m objective is the balance. The climbing is graded <strong>AD+</strong> — a steep but manageable ice slope to the col, then a long snow ridge with a corniced section near the top — hard enough to matter and not so hard that altitude and technique compound. The approach is the other half of its appeal: the <strong>Zatrwa La</strong> into the Hinku, over the <strong>Mera La</strong> into the uninhabited Hongu, and a base camp at 5,400 m in a valley with no villages, no lodges and almost nobody else in it.</p>",
    highlights: [
      ["Summit Baruntse (7,129 m)", "The classic step between a 6,000 m peak and an 8,000 m expedition, by the south-east ridge of the 1954 first ascent."],
      ["The Uninhabited Hongu Valley", "A base camp in a basin with no villages, no lodges and no trekking route — five days' walk from the nearest road."],
      ["Everest, Lhotse and Makalu from the Summit", "Three of the six highest mountains on earth, seen from the middle of them."],
      ["A Full Expedition Structure", "Base camp, two camps above, an acclimatisation rotation, progressive rope fixing and three reserve days."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support above base camp on a genuine 7,000 m peak."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Baruntse is climbed in both seasons and the choice is finely balanced. Spring gives longer days, warmer camps and a better-consolidated summit ridge, and it is the more popular window. Autumn gives colder, clearer conditions and firmer ice on the slope to the col.</p><p>The <strong>approach</strong> is the practical constraint. The Hinku catches more of the monsoon's tail than the Khumbu, so early October departures can meet cloud and soft snow on the Zatrwa La, and the Mera La needs settled conditions to cross with a laden crew. We aim for late April to May and mid-October to early November. The monsoon closes the valleys entirely.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD+</strong>. From <strong>base camp (5,400 m)</strong> in the Hongu the route crosses the glacier and climbs a steepening ice slope to the <strong>West Col area and Camp 1 at around 6,100 m</strong>, fixed by our Sherpas. Above it a further section leads to a <strong>high camp at around 6,400 m</strong> on the south-east ridge.</p><p>Summit day follows the ridge — long, snowy, and exposed, with a <strong>corniced section</strong> near the top that is the technical crux and is taken one at a time. Eight to twelve hours from high camp, on ground that never becomes desperate but never stops demanding attention. Baruntse's real difficulty is that it is a 7,000 m peak climbed without supplementary oxygen, five days from the nearest lodge.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m summit</strong> — Mera, Island Peak, Lobuche East or equivalent — and comfort on fixed rope and roped glacier travel. Alpine experience at AD is ideal but not essential; what matters more is that you have slept above 5,500 m and know how your body handles it.</p><p>This is the expedition we most often recommend to climbers preparing for Manaslu, Himlung or Everest, because it teaches the things an 8,000 m peak assumes: living at a base camp for two weeks, rotating between camps, eating badly at altitude, and waiting on weather. The training and assessment day at base camp checks technique; the rotation checks everything else.</p>",
      },
      {
        heading: "Committing to the Hongu, and Safety",
        content:
          "<p>From Khare to base camp and back — around fourteen nights — there is <strong>no lodge, no shop and no village</strong>. The expedition travels with a full camp, a cook and kitchen crew, and all food and fuel carried in from Lukla and topped up at Khare. Base camp sits at 5,400 m and the two camps above it are stocked and fixed by our Sherpa team.</p><p>Baruntse is climbed <strong>without supplementary oxygen</strong>. We carry emergency oxygen with masks and regulators at high camp and at base camp, along with a Gamow bag and full medical kit. Helicopter evacuation from the Hongu is possible in clear weather and expensive, and this is one of the itineraries on which we check insurance documentation most carefully.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the slope to Camp 1 and the summit ridge. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong> Because the approach is long and porter loads are limited, a full personal kit list with weight guidance is sent when you book.</p>",
      },
    ],
    faqs: [
      { question: "Is Baruntse good preparation for an 8,000 m peak?", answer: "It is the best 7,000 m preparation in Nepal, and it is what we recommend before Manaslu, Himlung or Everest. It teaches the rhythm of an expedition — base camp, rotations, weather waits, eating badly at altitude — on a mountain where the climbing is demanding but not the dominant problem." },
      { question: "How hard is the climbing compared with Ama Dablam?", answer: "Technically easier. Ama Dablam is a TD- rock and ice route with a vertical tower; Baruntse is AD+ snow and ice with a corniced ridge. Baruntse is 317 m higher and considerably more remote, so it is the bigger expedition and the smaller climb." },
      { question: "Why is the approach through the Hinku rather than the Barun?", answer: "Because it is faster and better acclimatised. The Barun approach from Tumlingtar takes a week of walking through the jungle and over ridges; the Hinku approach reaches base camp in ten days with the Zatrwa La and the Mera La building altitude on the way. Almost every commercial Baruntse expedition goes this way." },
      { question: "Do we climb Mera Peak on the way?", answer: "Not on this itinerary — the route crosses the Mera La below the summit and continues into the Hongu. If you want both, our Baruntse with Mera Peak itinerary adds the summit and two days, and the acclimatisation it provides is genuinely useful before a 7,000 m peak." },
      { question: "Is supplementary oxygen used?", answer: "No. Baruntse is well within the range a fit acclimatised climber handles without it, and no client of ours has needed it for the ascent. We carry emergency oxygen with masks and regulators at high camp and base camp for medical use." },
      { question: "What is the summit success rate?", answer: "Around 50 to 65 percent on our departures. Wind on the summit ridge is the commonest reason for turning back — the ridge is long and exposed and there is nowhere to shelter on it — which is why the itinerary carries three reserve days." },
      { question: "How remote is base camp really?", answer: "Five days' walk from Lukla and about a week from the nearest road, in a valley with no permanent settlement. There is no signal, no resupply and no lodge to retreat to. A helicopter can reach base camp in clear weather; nothing else can." },
      { question: "How many camps are there above base?", answer: "Two — Camp 1 at around 6,100 m and a high camp at around 6,400 m on the ridge. The expedition runs one full rotation through Camp 1 before the summit push, which is the structure a 7,000 m summit day needs." },
      { question: "What is the food like on a two-week base camp?", answer: "Better than most people expect. A cook and kitchen crew travel with the expedition and produce three hot meals a day from supplies carried in and topped up at Khare — dal bhat, pasta, soups, fresh bread baked at base camp, and as much tea as anyone can drink. Appetite is the problem, not the cooking." },
      { question: "Can I combine Baruntse with anything else?", answer: "Mera Peak is the natural addition and we run it as a separate itinerary. The Amphu Lapcha exit into the Khumbu is also possible instead of retracing the Hinku, which adds interest and a technical col; ask at booking and we will quote it." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Khare through the Hongu, with an expedition base camp at 5,400 m with mess, kitchen, storage and toilet tents, plus tented Camp 1 (6,100 m) and high camp (6,400 m).",
      permits: `Department of Tourism Baruntse climbing royalty and permit, ${BARUN_PARK_FEES}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at high camp and base camp for medical use.",
      extra: [
        "Cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A full training day at Khare and a technical assessment day at base camp.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the ice slope and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts and a Gamow hyperbaric bag at base camp.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porters and pack support for all expedition equipment through the Hinku and the Hongu.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a retreat from the Hongu.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 34-day expedition on Baruntse (7,129 m) by the south-east ridge, approached over the Zatrwa La and the Mera La into the uninhabited Hongu, with two camps above base, an acclimatisation rotation and three reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty and park permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Baruntse Expedition (7,129 m) — 34 Days | Green Compass Treks",
      description:
        "Climb Baruntse (7,129 m) by the south-east ridge, the classic step between a 6,000 m peak and an 8,000 m expedition. 34 days through the uninhabited Hongu, with two camps, a rotation and one Sherpa per climber.",
      keywords:
        "baruntse expedition, baruntse 7129m, 7000m peak nepal, hongu valley expedition, baruntse climbing cost, preparation for 8000m",
      tags: "Baruntse, Makalu Region, Expedition, 7000m Peak, Hongu Valley, Mera La",
    },
  },
  days: [
    ...hinkuApproach("thirty-four day"),
    {
      title: "Cross the Mera La (5,415 m) to Kongme Dingma (4,850 m)",
      elevation: "4,850 m",
      accommodation: "Kongme Dingma",
      placeDescription: "A tented camp on the floor of the uninhabited Hongu valley, below the eastern flank of Mera.",
      ...KONGME_DINGMA,
      html: p(
        "Crampons on within an hour of leaving Khare. The route climbs steeply onto the glacier and up to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hinku and the Hongu, with the group roped as a team.",
        "From the col the summit of Mera rises to the south-west and the route turns the other way, descending the eastern flank onto the Hongu side over gentler glacier ground.",
        "<strong>Kongme Dingma (4,850 m)</strong> is a camp on moraine in a valley with nothing in it at all — no lodge, no trail sign, no other party. From here the expedition is fully committed. Seven to eight hours. Overnight at Kongme Dingma.",
      ),
    },
    {
      title: "Trek from Kongme Dingma (4,850 m) to Seto Pokhari (5,035 m)",
      elevation: "5,035 m",
      accommodation: "Seto Pokhari",
      placeDescription: "A camp beside the sacred glacial lakes at the head of the Hongu, beneath Baruntse and Chamlang.",
      ...SETO_POKHARI,
      html: p(
        "North up the Hongu on moraine and grass, following the river toward its source. There is no trail in any developed sense — the route is a line the crew knows, marked by the occasional cairn.",
        "The valley is wide, silent and completely empty, walled by <strong>Chamlang</strong> to the east and the Mera massif behind, with Baruntse itself appearing at the head of the basin.",
        "<strong>Seto Pokhari (5,035 m)</strong> is a chain of glacial lakes sacred to Hindus and Buddhists alike and visited by pilgrims in summer. Camp goes up on the shore. Around 5 to 6 hours. Overnight at Seto Pokhari.",
      ),
    },
    {
      title: "Trek from Seto Pokhari (5,035 m) to Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp on moraine at the head of the Hongu, below the south-east ridge.",
      ...BARUNTSE_BC,
      html: p(
        "A short day onto the moraine at the head of the valley, gaining 400 m on rough ground with the mountain filling the northern sky.",
        "<strong>Baruntse Base Camp (5,400 m)</strong> is established properly today — mess tent, kitchen, storage and toilet tents alongside the sleeping tents — because this is home for the next fortnight.",
        "The afternoon is spent settling in and reading the route from below: the glacier, the ice slope to the col, the shoulder where Camp 1 goes, and the long south-east ridge running to the summit. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Rest Day at Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...BARUNTSE_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A chorten is built, juniper is burned, and the climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the mountain before it has been done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp, and the silence of the Hongu — genuinely complete, with no aircraft, no engines and nobody else — takes most people a day to notice. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, where technique is checked before the team commits to the route.",
      ...BARUNTSE_BC,
      html: p(
        "A working day on the glacier ice below camp. Every climber is taken through <strong>crampon and axe technique on steep ice, ascending fixed line on a jumar with a pack, changing over at anchors, and abseiling</strong>.",
        "Rope-team travel and crevasse rescue get a second look here as well, because the glacier below Camp 1 is broken and the group moves roped across it in the dark on summit push mornings.",
        "Your leader is assessing as much as teaching, and anyone who needs more time gets the afternoon. Meanwhile the Sherpas are above, <strong>fixing the ice slope toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...BARUNTSE_BC,
      html: p(
        "An easier day, split between acclimatisation and preparation. In the morning the team walks up the moraine toward <strong>5,800 m</strong> and back, gaining and losing height on ground that asks nothing technical.",
        "The view from up there is one of the arguments for the whole trip: <strong>Everest and Lhotse</strong> to the north-west over the Amphu Lapcha, <strong>Makalu</strong> east beyond Chamlang, and the Hongu running south with nothing man-made in it.",
        "The afternoon is rest and packing for the rotation. Your leader reviews the satellite forecast in the evening and confirms the plan. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 6,100 m on the shoulder above the ice slope, below the south-east ridge.",
      lng: 86.9639,
      lat: 27.8544,
      html: p(
        "The first time on the mountain. The route crosses the glacier roped in the cold of the morning and then climbs the <strong>ice slope</strong> on fixed line — steepening as it goes, five to six hours with a personal load.",
        "<strong>Camp 1 (6,100 m)</strong> sits on a shoulder above the slope, with the Hongu spread out below and the summit ridge rising directly above.",
        "The night here is the point of the exercise. Sleeping at 6,100 m before returning to base camp is what makes a summit push from 6,400 m realistic in a week's time, and it gives your leader a proper look at how each climber performs on the route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (6,100 m) to Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...BARUNTSE_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in three to four hours, off the ice before the sun has been on it long.",
        "Descending to recover is deliberate. Adaptation from last night's altitude consolidates far better at 5,400 m than it would higher, and a team that rests properly now climbs faster on the push.",
        "The Sherpas spend the day carrying loads and <strong>fixing the ground above Camp 1</strong> toward the high camp. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...BARUNTSE_BC,
      html: p(
        "A genuine rest day, worked at rather than enjoyed. Eating past the point of appetite, four litres of fluid, an afternoon asleep, and staying off the legs.",
        "There is equipment work too: crampons checked, harnesses inspected for wear after a day of jumaring, and boots dried in whatever sun there is.",
        "At 5,400 m recovery is slow but it does happen, and the difference between a team that rests properly here and one that fidgets is visible on summit day. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...BARUNTSE_BC,
      html: p(
        "The last day before the push, spent on the plan rather than on the hill. Personal kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the four-day sequence with timings for each stage.",
        "The Sherpa team reports on the state of the fixed ropes and the condition of the summit ridge, which is the information the go decision actually rests on.",
        "The satellite forecast arrives in the evening. Baruntse's summit ridge is long and exposed and is defeated by wind more often than by anything else, so the wind numbers at 7,000 m matter more here than the precipitation. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,400 m) to Camp 1 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 1",
      placeDescription: "The shoulder camp at 6,100 m, reoccupied for the summit push.",
      lng: 86.9639,
      lat: 27.8544,
      html: p(
        "The summit push begins, and the ice slope goes noticeably faster the second time — four hours or so for ground that took five or six on the rotation.",
        "Loads are lighter: the high camp is already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (6,100 m)</strong> by early afternoon, with the rest of the day to lie down, drink and eat. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (6,100 m) to High Camp (6,400 m)",
      elevation: "6,400 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,400 m on the south-east ridge of Baruntse.",
      lng: 86.9722,
      lat: 27.8625,
      html: p(
        "A deliberately short day — three to four hours up onto the <strong>south-east ridge</strong> to the high camp, arriving by late morning so the team has most of the day lying down.",
        "The camp is a handful of tents on the ridge, exposed and cold, with Everest and Lhotse to the north-west and Makalu to the east.",
        "Dinner is early and minimal; appetite at 6,400 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and your leader gives the weather call and a <strong>hard turnaround time</strong>. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Baruntse (7,129 m) and Descend to Camp 1 (6,100 m)",
      elevation: "7,129 m",
      accommodation: "Camp 1",
      placeDescription: "The 7,129 m summit of Baruntse, at the head of the Hongu between Everest and Makalu.",
      ...BARUNTSE,
      html: p(
        "Moving by two in the morning, roped and on the fixed line. The <strong>south-east ridge</strong> rises steadily above camp — snow and ice, never desperate, and completely exposed to whatever the wind is doing.",
        "Higher up the ridge narrows and the <strong>corniced section</strong> begins, which is the technical crux of the route and is taken one at a time with the Sherpas probing the crest ahead. It is slow ground and it is not hurried.",
        "The <strong>summit (7,129 m)</strong> is a snow dome, and the view is the reason people climb this particular mountain: <strong>Everest and Lhotse</strong> north-west, <strong>Makalu</strong> east across the Barun, Chamlang south, and the entire Hongu basin — your approach, your base camp, your fortnight — laid out beneath you.",
        "The descent reverses the ridge and the fixed line to high camp, then continues to Camp 1. Ten to fourteen hours. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (6,100 m) to Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...BARUNTSE_BC,
      html: p(
        "Camp 1 comes down and the ice slope is abseiled, with the fixed rope stripped as the team descends — slow work and not optional, since nothing is left on the mountain.",
        "The glacier is crossed roped in the cold of the morning for the last time.",
        "<strong>Base camp (5,400 m)</strong> by midday, with thick air by comparison, a hot meal and the first unbroken sleep in four days. Four to six hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...BARUNTSE_BC,
      html: p(
        "The first of three reserve days, and on Baruntse they earn their place. The summit ridge is long and there is no shelter on it, so a windy forecast closes the mountain even in otherwise clear weather.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest — and rest at base camp after a 7,129 m summit day, five days from the nearest lodge, is a strange and rather good way to spend a morning. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Baruntse Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...BARUNTSE_BC,
      html: p(
        "The second reserve day. Three of them exist because the Hongu is five days from Lukla, and an expedition that runs out of margin here cannot simply extend — the flights, the porters and the food are all committed.",
        "If a second attempt is running, the team is at Camp 1 or the high camp tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down: the high camp and Camp 1 are stripped by the Sherpa team and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "The final contingency day, and the last night in the Hongu.",
      ...BARUNTSE_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly and it is a substantial job: everything the expedition brought into the Hongu goes back out on porters and pack animals, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams sit out for a while after dinner, because the Hongu at night with no light and no sound anywhere is not something you get many chances at. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Baruntse Base Camp (5,400 m) to Kongme Dingma (4,850 m)",
      elevation: "4,850 m",
      accommodation: "Kongme Dingma",
      placeDescription: "The camp on the floor of the Hongu, on the walk out from the mountain.",
      ...KONGME_DINGMA,
      html: p(
        "Down the moraine at the head of the valley and back along the Hongu past <strong>Seto Pokhari</strong>, retracing the approach with a summit behind you and a great deal less to carry.",
        "The valley reads differently on the way out. On the way in it was empty and slightly forbidding; walking south through it now, most people find it simply beautiful.",
        "<strong>Kongme Dingma (4,850 m)</strong> in the afternoon, with the Mera La ahead for tomorrow. Around 7 hours. Overnight at Kongme Dingma.",
      ),
    },
    {
      title: "Cross the Mera La (5,415 m) to Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, and the first building in a fortnight.",
      ...KHARE,
      html: p(
        "Back up the glacier to the <strong>Mera La (5,415 m)</strong>, roped and in crampons, and over the col into the Hinku for the last time.",
        "The descent to <strong>Khare (5,045 m)</strong> is the moment most expeditions remember from the walk out: after fourteen nights in tents in an empty valley, a stone lodge with a stove in the dining room and a menu on the wall is genuinely startling.",
        "Six to seven hours. There is beer at Khare, and NTC signal, and the crew will already have ordered the first round. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "The riverside lodges in the forested floor of the Hinku valley.",
      ...KOTHE,
      html: p(
        "A long descent and an easy one, losing nearly 1,500 m down the valley. The moraine below Khare gives way to the open bowl at Thagnak, and then the trail drops steadily along the Hinku Khola.",
        "Somewhere below Thagnak the air thickens noticeably, the first juniper appears, and legs that have been working at 5,000 m and above for a fortnight start behaving normally again.",
        "By <strong>Kothe (3,600 m)</strong> you are among rhododendron and birch with the river loud outside the lodge. Around 6 to 7 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "The high yak pasture below the Zatrwa La, on the return crossing to Lukla.",
      ...THULI_KHARKA,
      html: p(
        "The last climb of the expedition, regaining the 700 m lost on the way in. The trail leaves the river and works up through forest, steep in places, back toward the pass.",
        "It is a day that feels harder than its numbers, because the summit is a week behind you and the body has quietly decided the trip is over.",
        "<strong>Thuli Kharka (4,300 m)</strong> gives a last evening looking east over the Hinku toward the Mera La and, somewhere beyond it, the Hongu. Around 5 to 6 hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, reached back over the pass from the Hinku valley.",
      ...LUKLA,
      html: p(
        "An early start for the pass. Two to three hours of rough ground to the <strong>Zatrwa La (4,610 m)</strong>, and the crossing is easier westbound because you are far better acclimatised than you were a month ago.",
        "A last look back over the Hinku from the notch, and then a very long descent — 1,800 m through boulder fields, rhododendron forest and farmland to <strong>Chutanga</strong> and on to Lukla.",
        "<strong>Lukla (2,840 m)</strong> in the afternoon. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Seven to eight hours. Overnight at Lukla.",
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
        "The afternoon is free for a long shower and Thamel. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
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
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home rather than carried is handled by our office.",
        "Safe travels. Baruntse is the peak our climbers most often use as the step to an 8,000 m expedition, and Manaslu, Himlung and Makalu are the three that usually come up next.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const baruntseWithMeraPeak: Climb = {
  region: "Makalu Region",
  price: 17500,
  difficulty: "extreme",
  maxAltitude: 7129,
  grade: "PD then AD+",
  expedition: true,
  royalty: true,
  center: [86.92, 27.78],
  zoom: 10,
  content: {
    slug: "baruntse-expedition-with-mera-peak-climbing",
    title: "Baruntse Expedition with Mera Peak Climbing",
    overview:
      "<p>The route to <strong>Baruntse (7,129 m)</strong> crosses the Mera La, a few hundred metres below the summit of <strong>Mera Peak (6,476 m)</strong>. Every Baruntse expedition walks past it. This itinerary spends two extra days going up, which turns a 6,476 m summit into the best possible acclimatisation for a 7,000 m one — and adds the highest trekking peak in Nepal to a trip that was already going to be the expedition of someone's year.</p><p>The logic is straightforward. Baruntse's difficulty is not its climbing, which is a manageable <strong>AD+</strong>, but the fact that it is a 7,000 m peak climbed without oxygen from a base camp five days' walk from the nearest lodge. A climber who has already stood at 6,476 m and slept at 5,800 m arrives at Baruntse base camp adapted rather than hopeful. Thirty-five days, two summits, and the whole of it in the uninhabited <strong>Hinku and Hongu</strong>.</p>",
    highlights: [
      ["Mera Peak (6,476 m) and Baruntse (7,129 m)", "The highest trekking peak in Nepal as acclimatisation for a genuine 7,000 m expedition."],
      ["Five 8,000 m Peaks from Mera's Summit", "Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga in one sweep, two weeks before the main objective."],
      ["The Uninhabited Hongu Valley", "A base camp in a basin with no villages, no lodges and no trekking route."],
      ["A Full Expedition Structure on Baruntse", "Base camp, two camps above, an acclimatisation rotation and three reserve days."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support above base camp on the 7,000 m peak."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Spring is the more popular window for Baruntse — longer days, warmer camps and a better-consolidated summit ridge — and it also suits Mera, whose glacier is at its most forgiving then. Autumn gives colder, clearer conditions and the sharper summit views.</p><p>The Hinku catches more of the monsoon's tail than the Khumbu, so early October departures can meet cloud and soft snow on the Zatrwa La. Over thirty-five days the trip needs two summit windows as well as a settled crossing of the Mera La with a laden crew, which argues for the middle of either season rather than its edges.</p>",
      },
      {
        heading: "Climb Difficulty & the Two Routes",
        content:
          "<p><strong>Mera (PD)</strong> is a broad glacier at 25 to 30 degrees with one short 40 to 45 degree step below the central summit — technically the easiest 6,400 m summit anyone can reasonably attempt, and hard entirely because of the altitude and the cold. Six to eight hours from a high camp at 5,800 m.</p><p><strong>Baruntse (AD+)</strong> is a category harder. A steepening ice slope on fixed rope to <strong>Camp 1 at 6,100 m</strong>, a further section to a <strong>high camp at 6,400 m</strong> on the south-east ridge, and then a long snow ridge with a <strong>corniced section</strong> near the top that is the technical crux. Eight to twelve hours from high camp, climbed without supplementary oxygen.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We ask for <strong>previous experience above 5,000 m</strong> and, ideally, a 6,000 m peak already climbed. Mera within this itinerary is a warm-up rather than a qualification. You should be comfortable on fixed rope and moving as a roped team on a crevassed glacier before you arrive; the training day at Khare refreshes and checks rather than teaches from scratch.</p><p>This is the expedition we most often recommend to climbers preparing for Manaslu, Himlung or Everest. It teaches everything an 8,000 m peak assumes — living at base camp for a fortnight, rotating between camps, eating badly at altitude and waiting on weather — with a 6,476 m summit at the start to prove the body works.</p>",
      },
      {
        heading: "Committing to the Hongu, and Safety",
        content:
          "<p>From Khare onward — around eighteen nights — there is <strong>no lodge, no shop and no village</strong>. The expedition travels with a full camp, a cook and kitchen crew, and all food and fuel carried in from Lukla and topped up at Khare. Base camp sits at 5,400 m and the two camps above are stocked and fixed by our Sherpa team.</p><p>Both peaks are climbed <strong>without supplementary oxygen</strong>. We carry emergency oxygen with masks and regulators at the high camps and at base camp, along with a Gamow bag and a full medical kit. Helicopter evacuation from the Hongu is possible in clear weather and expensive, and insurance documentation is checked carefully before permits are issued.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m — Mera's high camp at 5,800 m and Baruntse's at 6,400 m are both cold enough to produce frostbite in single boots. <strong>Technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, fix Mera's summit step and Baruntse's ice slope and summit ridge. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong> A weight-guided kit list is sent when you book, because porter loads over the Zatrwa La are limited.</p>",
      },
    ],
    faqs: [
      { question: "Does Mera really help on Baruntse?", answer: "Substantially. It puts a night at 5,800 m and a summit at 6,476 m into your body two weeks before the main objective, which is the single best preparation available for a 7,000 m peak climbed without oxygen. Climbers who do the combination reach Baruntse base camp adapted rather than still adapting." },
      { question: "How many extra days does Mera add?", answer: "Two — the move to Mera high camp and the summit day itself, after which the group descends the eastern flank into the Hongu and continues to Baruntse base camp. Everything else about the Baruntse expedition is unchanged." },
      { question: "Which is the true summit of Mera?", answer: "Mera has a north summit at 6,476 m, a central summit at 6,461 m and a south summit at 6,065 m. Commercial groups climb the central summit, the high point of the standard glacier route. The north summit needs extra exposed climbing and we can arrange it for strong parties on request." },
      { question: "Is Baruntse good preparation for an 8,000 m peak?", answer: "It is the best 7,000 m preparation in Nepal, and this itinerary is the strongest version of it. Manaslu, Himlung and Everest all assume the skills Baruntse teaches — base camp life, rotations, weather waits and climbing well at 7,000 m without oxygen." },
      { question: "How cold does Mera's high camp get?", answer: "Regularly -15°C to -20°C inside the tent overnight, and colder outside before dawn. It is the coldest night on any trekking peak in Nepal, which is why we specify a -35°C bag for this trip and double or triple boots throughout." },
      { question: "What are the success rates?", answer: "Around 75 to 85 percent on Mera and 55 to 70 percent on Baruntse, with the Baruntse figure a little above what the mountain usually gives — the Mera acclimatisation is most of the difference. Wind on Baruntse's summit ridge is the commonest reason for turning back." },
      { question: "Is supplementary oxygen used on either peak?", answer: "No. Both are well within the range a fit acclimatised climber handles without it, and no client of ours has needed it for either ascent. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use." },
      { question: "How remote is Baruntse base camp?", answer: "Five days' walk from Lukla and about a week from the nearest road, in a valley with no permanent settlement. There is no signal, no resupply and no lodge to retreat to. A helicopter can reach base camp in clear weather; nothing else can." },
      { question: "Can we exit over the Amphu Lapcha instead of retracing?", answer: "Yes, and it makes a superb finish — a technical col into the Imja valley and out through Chhukung and Namche rather than back over the Zatrwa La. It adds a day and a considerable amount of interest. Ask at booking and we will quote it." },
      { question: "How fit do I need to be?", answer: "Very. Thirty-five days with two summit days, eighteen nights above 4,800 m and no lodges in the middle of it is a serious load. The benchmark is walking eight hours with 10 kg on consecutive days and recovering overnight, sustained for weeks. Six months of consistent training is realistic." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Mera high camp (5,800 m) through the Hongu, with an expedition base camp at 5,400 m with mess, kitchen, storage and toilet tents, plus tented Camp 1 (6,100 m) and high camp (6,400 m) on Baruntse.",
      permits: `Department of Tourism Baruntse climbing royalty and permit, Nepal Mountaineering Association climbing permit for Mera Peak, ${BARUN_PARK_FEES}.`,
      sherpa:
        "One climbing Sherpa for every two climbers on Mera, and one high-altitude climbing Sherpa per climber above Baruntse base camp, with all equipment, wages, insurance and summit allowances.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Cook and kitchen crew throughout the camping section, with high-altitude food and fuel for the camps above.",
        "A full training day at Khare and a technical assessment day at Baruntse base camp.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the Baruntse summit push.",
        "Fixing of Mera's summit step and of Baruntse's ice slope and summit ridge, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts and a Gamow hyperbaric bag at base camp.",
        "A puja ceremony at Baruntse base camp before the team goes onto the mountain.",
        "Porters and pack support for all expedition equipment through the Hinku and the Hongu.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions on either peak, or a retreat from the Hongu.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 35-day expedition climbing Mera Peak (6,476 m) as acclimatisation and then Baruntse (7,129 m) by its south-east ridge, with a full base camp in the uninhabited Hongu, two camps above, a rotation and three reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, the Mera climbing permit and park permits, an expedition leader and liaison officer, Sherpa support rising to one per client on Baruntse, a cook crew, all group climbing equipment, rope fixing on both peaks, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Baruntse Expedition with Mera Peak Climbing — 35 Days, Two Summits | Green Compass Treks",
      description:
        "Climb Mera Peak (6,476 m) as acclimatisation and then Baruntse (7,129 m) on a 35-day expedition through the uninhabited Hinku and Hongu valleys, with a rotation, three reserve days and one Sherpa per climber.",
      keywords:
        "baruntse with mera peak, baruntse mera combination, 7000m expedition nepal, mera peak baruntse acclimatisation, hongu valley expedition",
      tags: "Baruntse, Mera Peak, Makalu Region, Expedition, 7000m Peak, Hongu Valley",
    },
  },
  days: [
    ...hinkuApproach("thirty-five day"),
    // Mera's high camp and summit day, taken from the traverse itinerary — the
    // descent from the summit continues east into the Hongu rather than back to
    // Khare, which is exactly what this expedition needs.
    ...meraPeakAmphuLapcha.days.slice(10, 12).map((d) => ({
      ...d,
      html: d.html.replace(
        "Then the traverse begins.",
        "Then the expedition proper begins.",
      ),
    })),
    // Everything from the Hongu onward is the Baruntse expedition.
    ...baruntseExpedition.days.slice(11).map((d) => ({
      ...d,
      html: d.html.replace("thirty-four day plan", "thirty-five day plan"),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const makaluExpedition: Climb = {
  region: "Makalu Region",
  price: 32000,
  difficulty: "extreme",
  maxAltitude: 8485,
  grade: "AD+ at extreme altitude",
  expedition: true,
  royalty: true,
  center: [87.09, 27.85],
  zoom: 10,
  content: {
    slug: "makalu-expedition",
    title: "Makalu Expedition",
    overview:
      "<p><strong>Makalu (8,485 m)</strong> is the fifth-highest mountain on earth and the hardest of Nepal's 8,000 m peaks by its normal route. It has a reputation among high-altitude climbers that its neighbours do not: a <strong>summit success rate well below Everest's</strong>, a final pyramid of steep mixed rock and ice above 8,000 m, and a base camp eight days' walk from the nearest road with no helicopter traffic, no trekker lodges and no other expeditions to share the fixing with.</p><p>It was first climbed in <strong>1955 by a French team under Jean Franco</strong>, who put nine members on top — an extraordinary result for the period. The approach up the <strong>Barun valley</strong> from Tumlingtar is one of the finest walks in Nepal and almost nobody does it, and the mountain at the end of it is a serious, committing proposition that we sell only to climbers with an 8,000 m summit already behind them.</p>",
    highlights: [
      ["Summit Makalu (8,485 m)", "The fifth-highest mountain on earth, and the hardest of Nepal's 8,000 m peaks by its normal route."],
      ["The Barun Valley Approach", "Eight days from the road head through protected forest, past waterfalls and hanging glaciers, with almost nobody else on the trail."],
      ["The Summit Pyramid", "Steep mixed rock and ice above 8,000 m — genuine climbing where Everest's ridge is a walk."],
      ["A Base Camp With No Crowd", "No trekkers, no helicopter traffic and usually only one or two other teams on the whole mountain."],
      ["Two Full Rotations and Five Reserve Days", "The structure a mountain with this success rate actually requires."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April and May</strong>. Makalu is a spring mountain: the route is fixed, such teams as there are are on the hill, and the jet stream lifts enough in the second half of May to give summit windows. Those windows are <strong>fewer and shorter than Everest's</strong>, and in some seasons there is only one.</p><p>Autumn ascents happen and are rare — the route is unfixed, the weather colder and less settled, and there is unlikely to be another team on the mountain. We run spring expeditions only, reaching base camp in early April so the team has the full acclimatisation period. The approach itself is best in April, when the rhododendron forest below the Shipton La is in flower.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD+</strong> and, above 8,000 m, considerably harder than that sounds. From <strong>base camp (4,870 m)</strong> the route crosses the Barun glacier to <strong>advance base camp at around 5,700 m</strong>, then climbs to <strong>Camp 1 (6,400 m)</strong> and <strong>Camp 2 (6,700 m)</strong> on snow and ice.</p><p>Above them the route gains the <strong>Makalu La (7,400 m)</strong>, a windy col where Camp 3 sits, and then <strong>Camp 4 at around 7,800 m</strong>. The summit day climbs the <strong>final pyramid</strong> — steep mixed rock and ice, with a section of genuine climbing at around 8,400 m that has to be done on oxygen, in a down suit, with mitts on. That pitch is what separates Makalu from the other 8,000 m peaks in Nepal. Twelve to sixteen hours from Camp 4.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 8,000 m summit</strong>. That is not a preference. Makalu's summit pyramid demands real climbing at an altitude where most people can barely think, on a mountain where the nearest help is a week away, and a climber meeting 8,000 m for the first time here is in the wrong place.</p><p>You must be efficient on fixed rope for many hours, competent on mixed ground in crampons and mitts, experienced with oxygen systems, and able to make sound decisions when exhausted. We will ask for a climbing CV and we decline applications regularly. The honest progression is Manaslu, Everest or Cho Oyu first, then this.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>seven 4-litre bottles of supplementary oxygen</strong> per climber, a <strong>Summit mask and regulator</strong>, and a dedicated <strong>climbing Sherpa carrying his own oxygen</strong> from base camp to the summit. Bottles are used from Camp 3 upward, and extras can be added at booking and are refunded in full if unused.</p><p>Makalu's isolation shapes everything. There is no helicopter traffic in the Barun as a matter of routine, evacuation is slow and weather-dependent, and there may be no other expedition to help. Base camp holds a <strong>Gamow bag, a full expedition medical kit and emergency oxygen</strong>, and we retain a doctor at base camp. Our leader's authority to turn a climber round is absolute, and no member of our staff receives a summit-contingent bonus.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>An <strong>8,000 m down suit</strong>, <strong>triple boots</strong> rated for 8,000 m, technical crampons, a lightweight ice axe, a <strong>-40°C sleeping bag</strong>, two insulated mats, expedition mitts and a spare pair, a face mask, category 4 glacier glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>Because of the summit pyramid, bring <strong>crampons and mitts you can actually climb mixed ground in</strong> — this is the one 8,000 m peak in Nepal where dexterity at 8,400 m matters. The approach also demands proper trekking kit for eight days of subtropical forest and rain. We supply all group ropes, anchors, camp equipment and the oxygen system; <strong>climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Why is Makalu considered harder than Everest?", answer: "Because of the summit pyramid. Everest's route above the South Col is long, cold and exposed but never technical; Makalu's final 400 m is steep mixed rock and ice climbed in a down suit and mitts at 8,400 m. Add far fewer teams to share the fixing, no helicopter access and a week-long approach, and the whole undertaking is more committing." },
      { question: "What is the summit success rate?", answer: "Low, and we will not flatter it. Across recent seasons roughly a third to a half of climbers who begin the summit push from Camp 4 reach the top, and there are years when nobody does. Weather windows are fewer and shorter than Everest's and the mountain is far less forgiving of a slow party." },
      { question: "Will there be other teams on the mountain?", answer: "Usually one or two, sometimes none. That has two consequences: the route may need fixing largely by our own Sherpa team, and in an emergency there is unlikely to be anyone else to help. Both are reflected in how we staff and equip the expedition." },
      { question: "How long is the approach and why not fly to base camp?", answer: "Eight days on foot from the road head at Num. There is no airstrip in the Barun and no established helicopter service, and in any case the walk is the acclimatisation — a team flown to 4,870 m would spend the time it saved lying in a tent feeling ill." },
      { question: "How much oxygen is included?", answer: "Seven 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. Extra bottles can be added at booking and are refunded in full if unused — and on Makalu, where a slow summit day is common, several climbers take one." },
      { question: "What is the Makalu La like?", answer: "A col at 7,400 m between Makalu and Kangchungtse, and one of the windiest camps on any 8,000 m peak. Tents have been destroyed there in a night. It is a place to move through rather than to linger, and the schedule is built to minimise time spent on it." },
      { question: "Is evacuation possible from base camp?", answer: "By helicopter in clear weather, and it is expensive and not routine — the Barun sees very little air traffic. Below base camp, evacuation means being carried down the valley. Your insurance must have a high enough limit to make a long-line rescue viable, and we check this carefully." },
      { question: "What is the Barun valley like?", answer: "One of the finest walks in Nepal and almost unvisited. Protected forest with red panda and snow leopard habitat, two-thousand-metre walls, waterfalls off hanging glaciers, and no lodges at all — the expedition camps the whole way. Many climbers say the approach was the best part of the trip." },
      { question: "Do you use a recovery descent mid-expedition?", answer: "Yes, to Yangle Kharka at 3,600 m. Recovery does not happen at 4,870 m, and three days low down in thick air with the forest and the river does more for a climber than a week of rest days at base camp. It is one of the highest-return decisions in the plan." },
      { question: "What is the refund position if the season is cancelled?", answer: "The Department of Tourism royalty and the permit fees are paid in advance and are non-refundable to us, so they are non-refundable to you. Everything else — staff, food, oxygen, logistics — is refunded pro rata if a season is cancelled before it begins. This is set out in writing at booking." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: TUMLINGTAR_FLIGHTS,
      transport: ["Private jeep transport between Tumlingtar and Num in both directions.", "Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation:
        "Full tented accommodation throughout the Barun approach and the walk out, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      camping:
        "Full expedition base camp at 4,870 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed advance base camp (5,700 m), Camp 1 (6,400 m), Camp 2 (6,700 m), Camp 3 at the Makalu La (7,400 m) and Camp 4 (7,800 m).",
      permits:
        "Department of Tourism Makalu climbing royalty and permit, Makalu Barun National Park entry permit, and the local rural municipality permit.",
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber from base camp to the summit, carrying his own oxygen, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Seven 4-litre bottles of supplementary oxygen per climber, with a Summit mask and regulator, used from Camp 3 upward.",
      extra: [
        "Full-time cook and kitchen crew from Tumlingtar to base camp and throughout the expedition, with three hot meals a day and high-altitude food and fuel at every camp above.",
        "Fixed-rope and technical training at base camp before the first rotation.",
        "Two full acclimatisation rotations, and a recovery descent to Yangle Kharka.",
        "Route fixing by our own Sherpa team, including the summit pyramid.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power, a Gamow hyperbaric bag, an expedition doctor and a full medical kit.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Tumlingtar and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew, cook staff and porters.",
      extra: [
        "Personal technical equipment — down suit, boots, harness, crampons, axe, ascender, belay device and screwgates.",
        "Additional oxygen bottles beyond the seven included, refundable in full if unused.",
        "Personal satellite communication devices and airtime.",
        "Helicopter transfers taken for personal convenience rather than medical necessity.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, a route left unfixed, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 51-day expedition on Makalu (8,485 m) by the north-west ridge and Makalu La, approached up the Barun valley, with two acclimatisation rotations, a recovery descent, a dedicated 1:1 Sherpa, seven bottles of oxygen and five reserve days.",
    inExDescription:
      "Tumlingtar flights, jeep transfers, Kathmandu hotel nights, full tented accommodation on the approach and at every camp, three meals a day throughout, the Department of Tourism royalty and park permits, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, seven bottles of oxygen with mask and regulator, route fixing, a base camp doctor and medical provision, satellite weather forecasts and communications are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonus and tips are not.",
    bestTime: "Apr-May",
    meta: {
      title: "Makalu Expedition (8,485 m) — 51 Days, Fifth Highest Mountain | Green Compass Treks",
      description:
        "Climb Makalu (8,485 m), the hardest of Nepal's 8,000 m peaks by its normal route, on a 51-day expedition up the Barun valley with two rotations, a dedicated 1:1 Sherpa, seven bottles of oxygen and five reserve days.",
      keywords:
        "makalu expedition, makalu 8485m, fifth highest mountain, barun valley expedition, makalu la, makalu climbing cost, 8000m nepal",
      tags: "Makalu, Makalu Region, 8000m Expedition, Barun Valley, Makalu La, Oxygen",
    },
  },
  days: [
    ...barunApproach("fifty-one day"),
    {
      title: "Base Camp (4,870 m) – Settling In and Systems Check",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, where the team settles into the routine of the next six weeks.",
      ...MAKALU_BC,
      html: p(
        "A day of low effort and a great deal of organisation. Sleeping tents are set up properly, the mess and kitchen routine is established, and the charging, water and toilet arrangements are explained.",
        "Your leader runs the <strong>oxygen systems check</strong> — mask, regulator and hose fitted to your own face and hood, at altitude, with the flow rates and changeover drill walked through.",
        "The afternoon is spent walking gently on the moraine. After eight days of walking up from the road head, two easy days here are what the body needs before anything else happens. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...MAKALU_BC,
      html: p(
        "The <strong>puja</strong>. A stone chorten is built, juniper is burned, and every piece of climbing equipment on the expedition — axes, crampons, harnesses, boots, oxygen masks — is stacked at the altar to be blessed.",
        "No Sherpa on our team will go onto Makalu before it has been done. Prayer flags are strung from the chorten across the camp, rice is thrown, and it usually finishes with chang and dancing.",
        "It is also the day the whole team, climbers and Sherpas together, first behaves like one group — which on a mountain this isolated matters more than it does elsewhere. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Training Day at Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, where rope and mixed-ground technique is checked on the glacier.",
      ...MAKALU_BC,
      html: p(
        "A full working day on the glacier ice near camp. Every climber works through <strong>jumaring on steep fixed line with a pack, changing over at anchors, abseiling, arresting a slip on hard ice, and moving on mixed ground in crampons</strong>.",
        "The mixed-ground work gets extra attention on this mountain, because the summit pyramid is the one place among Nepal's 8,000 m normal routes where a climber has to actually climb rather than plod.",
        "Your leader watches each climber individually and keeps anyone who needs it back for the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the first rotation.",
      ...MAKALU_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,300 m</strong> and back, gaining and losing height on ground that asks nothing technical.",
        "The view from up there takes in the whole <strong>south-east face of Makalu</strong>, the Barun glacier running north, and — behind you — the valley you spent eight days walking up. It is worth an hour with binoculars while your leader traces the route.",
        "The afternoon is rest and packing. The Sherpa team is already working above, establishing and stocking advance base camp. Overnight at base camp.",
      ),
    },
    {
      title: "First Rotation – Climb to Advance Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Advance Base Camp",
      placeDescription: "A camp at 5,700 m on the moraine of the upper Barun glacier, below the face.",
      lng: 87.0906,
      lat: 27.8672,
      html: p(
        "The first move onto the mountain. The route crosses the <strong>Barun glacier</strong> and climbs its upper moraine north, five to six hours on rough ground with a personal load while the Sherpas move the camp.",
        "<strong>Advance base camp (5,700 m)</strong> sits below the face and functions as the working base for everything above — a mess tent, a kitchen and sleeping tents, staffed for the season.",
        "From here Makalu is directly overhead and the scale is difficult to take in: nearly three vertical kilometres of mountain above the tents. Overnight at advance base camp.",
      ),
    },
    {
      title: "First Rotation – Acclimatisation Day at Advance Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Advance Base Camp",
      placeDescription: "The working base below the face, where the first rotation consolidates its altitude.",
      lng: 87.0906,
      lat: 27.8672,
      html: p(
        "A day at 5,700 m doing very little, which is the point of a rotation. Sleeping at this altitude is what the body has to learn, and it learns it by being made to.",
        "In the morning the team walks an hour up toward the foot of the route and back, to look at the ground the next rotation climbs and to gain a little height.",
        "The rest of the day is spent in the dining tent drinking and forcing food down. Appetite falls off sharply above 5,500 m, and eating badly here is what leaves climbers short a month from now. Overnight at advance base camp.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 1 (6,400 m) and Return to Advance Base Camp",
      elevation: "6,400 m",
      accommodation: "Advance Base Camp",
      placeDescription: "Camp 1 at 6,400 m on the face, touched on the first acclimatisation rotation.",
      lng: 87.0928,
      lat: 27.8722,
      html: p(
        "The first time on the fixed ropes. The route climbs snow and ice above advance base camp — steepening as it goes, four to six hours on the line the Sherpa team has fixed.",
        "<strong>Camp 1 (6,400 m)</strong> is a set of platforms cut into the face. The team touches it, spends an hour there, and abseils back down to advance base camp; this rotation is about the height reached, not the night spent.",
        "It is also the first honest test of how each climber moves on steep fixed rope with a load at altitude, and your leader watches closely. Overnight at advance base camp.",
      ),
    },
    {
      title: "First Rotation – Descend to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the first rotation.",
      ...MAKALU_BC,
      html: p(
        "Down the glacier and its moraine to base camp in four to five hours, losing 800 m and arriving in what feels like a completely different atmosphere.",
        "The first rotation is complete: the team has slept at 5,700 m and touched 6,400 m, and everybody now knows what the fixed ropes on this mountain feel like.",
        "<strong>Base camp (4,870 m)</strong> by early afternoon, with a hot meal and the prospect of three days of doing nothing. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the first rotation.",
      ...MAKALU_BC,
      html: p(
        "The first of three recovery days, and the hardest to spend well because most people feel worse today than they did yesterday — the fatigue of a rotation arrives late.",
        "The prescription is unglamorous: sleep, drink four to five litres, and eat considerably more than you want to.",
        "Your leader and the expedition doctor take saturation, pulse and weight readings and review them against the baseline from Kathmandu. Anyone whose numbers are drifting the wrong way gets a conversation rather than a schedule. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the second recovery day after the first rotation.",
      ...MAKALU_BC,
      html: p(
        "The second recovery day, and the one on which people start feeling human again. Base camp settles into its rhythm: breakfast late, cards and reading in the dining tent, a slow walk on the moraine, dinner early.",
        "Work goes on around you. The <strong>Sherpa team is carrying loads and fixing rope</strong> above Camp 1 toward Camp 2, which on a mountain with few other expeditions is work our own team does rather than shares.",
        "The evening weather briefing in the communications tent becomes a fixture from about now. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the last day before the second rotation.",
      ...MAKALU_BC,
      html: p(
        "The last day before the second rotation, spent on preparation rather than effort. Personal loads are packed for five nights above base camp, crampons and harnesses checked after their first hard use, and boots dried properly.",
        "Your leader briefs the rotation in detail: advance base camp, Camp 1, and then a climb to <strong>Camp 2 at 6,700 m</strong> for a night before returning.",
        "That night at Camp 2 is the most valuable single piece of acclimatisation in the expedition, and it is also the point at which Makalu starts to feel like a serious mountain rather than a long walk. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb to Advance Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Advance Base Camp",
      placeDescription: "The working base below the face, reoccupied for the second rotation.",
      lng: 87.0906,
      lat: 27.8672,
      html: p(
        "Back up the glacier and its moraine, and noticeably faster than the first time — four hours or so for ground that took five or six.",
        "That improvement is the return on the first rotation and the rest days, and it is the clearest sign that the acclimatisation is working.",
        "<strong>Advance base camp (5,700 m)</strong> by early afternoon, with hot soup waiting and the rest of the day to lie down. Overnight at advance base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb to Camp 1 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 6,400 m on platforms cut into the face of Makalu.",
      lng: 87.0928,
      lat: 27.8722,
      html: p(
        "Onto the fixed ropes again, and this time the team stays. Four to six hours of snow and ice on the line above advance base camp, with heavier loads than on the rotation touch.",
        "<strong>Camp 1 (6,400 m)</strong> is a row of tents on cut platforms. It is the first camp where the exposure is obvious from inside the tent, and everyone stays clipped in when moving around outside.",
        "An early evening, fluid forced down, and a night that most people find hard. Overnight at Camp 1.",
      ),
    },
    {
      title: "Second Rotation – Climb to Camp 2 (6,700 m)",
      elevation: "6,700 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,700 m on the upper face, below the route to the Makalu La.",
      lng: 87.0956,
      lat: 27.8775,
      html: p(
        "A short day and a demanding one. The ground above Camp 1 steepens and the fixed line runs over mixed sections that need care with crampons on rock.",
        "Three to four hours brings the team to <strong>Camp 2 (6,700 m)</strong>, a smaller and more exposed camp than the one below.",
        "Sleeping at 6,700 m is the purpose of this rotation. It is an uncomfortable night and it is the single thing that makes a summit push from 7,800 m realistic in three weeks' time. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (6,700 m) to Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the second rotation.",
      ...MAKALU_BC,
      html: p(
        "A long descent: abseil the fixed ropes past Camp 1 to advance base camp, then down the glacier and moraine to base camp. Six to eight hours.",
        "The acclimatisation programme is now complete. The team has slept at 6,700 m and there is nothing more to be gained from going higher until the summit push.",
        "<strong>Base camp (4,870 m)</strong> in the afternoon, and the mood changes noticeably: the preparation is finished and everything from here waits on weather. Overnight at base camp.",
      ),
    },
    {
      title: "Recovery Descent from Base Camp (4,870 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "The grazing meadow on the floor of the Barun, used for mid-expedition recovery.",
      ...YANGLE_KHARKA,
      html: p(
        "Down the moraine and the valley to <strong>Yangle Kharka (3,600 m)</strong>, losing 1,270 m in a day and arriving somewhere with grass, trees and running water.",
        "This descent is one of the most valuable decisions in the plan and the one most commonly skipped. <strong>Recovery does not happen at 4,870 m.</strong> Six weeks at base camp erodes a climber steadily; three days in the forest at 3,600 m, eating and sleeping properly, rebuilds one.",
        "The Barun in flower in late April, after a fortnight of moraine and ice, is also simply a good place to be. Around 6 hours. Overnight at Yangle Kharka.",
      ),
    },
    {
      title: "Recovery Day at Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "The forested valley floor of the Barun, where the team rests in thick air.",
      ...YANGLE_KHARKA,
      html: p(
        "A day with nothing in it. Sleep late, eat everything the kitchen produces, wash in the river, and walk no further than the meadow.",
        "Most climbers regain a kilogram or two here and, more importantly, sleep properly for the first time in weeks. The improvement in appetite is usually obvious within a day.",
        "Meanwhile the Sherpa team is high on the mountain <strong>stocking Camp 3 at the Makalu La and Camp 4</strong> with oxygen, tents, food and fuel — the heaviest and most dangerous work of the expedition, done by people who will then climb it again with you. Overnight at Yangle Kharka.",
      ),
    },
    {
      title: "Return from Yangle Kharka (3,600 m) to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, reoccupied for the summit window.",
      ...MAKALU_BC,
      html: p(
        "Back up the Barun through Langmale Kharka and onto the moraine — the same ground as the approach, walked now by a body that handles it very differently.",
        "Seven to eight hours, and it is a useful gauge: climbers who come up feeling strong are ready, and those who struggle are told so and given more time.",
        "<strong>Base camp (4,870 m)</strong> in the late afternoon. From tonight the expedition is entirely governed by the forecast. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, waiting on the forecast for a summit window.",
      ...MAKALU_BC,
      html: p(
        "The waiting starts, and on Makalu it is often longer than on Everest because the windows are fewer. The jet stream sits on the summit for most of the year and lifts, if it lifts at all, in the second half of May.",
        "Days are spent eating, sleeping and walking gently on the moraine. With few or no other teams in the valley, base camp is a quieter place than an Everest season and the waiting is harder for it.",
        "The evening brings the <strong>specialist mountain forecast</strong> — wind speed at 8,000 m, temperature, precipitation and the confidence attached to each — read out in the communications tent. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the second day of the weather window wait.",
      ...MAKALU_BC,
      html: p(
        "More waiting, and the discipline is not to burn energy. Climbers who fill these days with long walks to keep busy arrive at Camp 4 with less in reserve than those who read a book.",
        "There is one useful piece of work: your leader reviews the <strong>oxygen plan</strong> with each climber individually — flow rates from Camp 3, at Camp 4, on summit day, and the changeover points where bottles are swapped and cached for the descent.",
        "Masks and regulators are checked one final time against your own hood and goggles. On Makalu's summit pyramid a leaking mask at 8,400 m is not a problem that can be solved in place. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Briefing and Final Preparations at Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, where the summit push is briefed in full.",
      ...MAKALU_BC,
      html: p(
        "The full <strong>summit briefing</strong>. Your leader sets out the schedule day by day, the pairings of climber and Sherpa, the radio times, the oxygen changeovers, and the <strong>turnaround time on summit day</strong>.",
        "On Makalu that turnaround is earlier and stricter than on Everest, because the summit pyramid has to be down-climbed and abseiled rather than walked down. A climber who reaches the base of the pyramid late has already finished.",
        "The Sherpa team confirms that Camp 4 is stocked and the pyramid is fixed. Nothing about the push begins until both are true. Overnight at base camp.",
      ),
    },
    {
      title: "Final Weather Wait at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, on the last day before the summit push departs.",
      ...MAKALU_BC,
      html: p(
        "The last day at base camp before the push, and by now the forecast has firmed up enough to commit. Loads are packed for six nights above base camp, down suits are unpacked and checked, and boots are warmed.",
        "Dinner is early and the camp is quiet. On a mountain where a season may offer a single window, the atmosphere on this evening is unlike anything else in the expedition.",
        "Departure for advance base camp is set for first light. Most people do not sleep much. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,870 m) to Advance Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Advance Base Camp",
      placeDescription: "The working base below the face, on the first night of the summit push.",
      lng: 87.0906,
      lat: 27.8672,
      html: p(
        "Up the glacier and its moraine for the last time on the way up, and quickly — three to four hours on ground the team now knows step by step.",
        "Loads are light: everything above is already stocked, so climbers carry personal equipment only.",
        "<strong>Advance base camp (5,700 m)</strong> by late morning, with the rest of the day to lie down, drink and eat. From here the expedition moves upward every day until it summits or turns back. Overnight at advance base camp.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 1 (6,400 m) and Camp 2 (6,700 m)",
      elevation: "6,700 m",
      accommodation: "Camp 2",
      placeDescription: "The camp at 6,700 m on the upper face, occupied on the second night of the summit push.",
      lng: 87.0956,
      lat: 27.8775,
      html: p(
        "A long day on the fixed ropes, climbing past <strong>Camp 1 (6,400 m)</strong> without stopping and continuing to Camp 2 — six to eight hours in total, and the day that most often determines whether a party is on schedule.",
        "The mixed sections above Camp 1 are climbed in crampons on rock, and by now the technique is familiar from the rotation.",
        "<strong>Camp 2 (6,700 m)</strong> in the afternoon. Melt snow, force fluid and food, and sleep as well as an exposed platform allows. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 3 at the Makalu La (7,400 m)",
      elevation: "7,400 m",
      accommodation: "Camp 3, Makalu La",
      placeDescription: "The col at 7,400 m between Makalu and Kangchungtse, one of the windiest camps in the Himalaya.",
      lng: 87.0906,
      lat: 27.8836,
      html: p(
        "On oxygen from partway up. The route climbs snow and ice slopes to gain the <strong>Makalu La (7,400 m)</strong>, the col between Makalu and Kangchungtse, in five to seven hours.",
        "The col is a notorious place. It funnels wind from both sides and has destroyed tents in a night, and the schedule is built to minimise the time spent on it — arrive, rest, and move on.",
        "Nobody sleeps well at 7,400 m in a gale. The team rests on oxygen, melts snow and forces fluid, and your leader watches the wind as much as the clock. Overnight at Camp 3.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 4 (7,800 m)",
      elevation: "7,800 m",
      accommodation: "Camp 4",
      placeDescription: "The highest camp at 7,800 m, on the shoulder below the summit pyramid.",
      lng: 87.0894,
      lat: 27.8858,
      html: p(
        "A short day, on oxygen throughout. The route leaves the col and climbs the shoulder above it to <strong>Camp 4 (7,800 m)</strong>, three to four hours on fixed line, arriving by late morning so the team has the day lying down.",
        "You are deep in the <strong>Death Zone</strong>, where the body cannot acclimatise and simply degrades. Nobody sleeps. The routine is oxygen, melted snow, forced fluid and waiting.",
        "Directly overhead is the <strong>summit pyramid</strong> — the steep mixed rock and ice that makes Makalu what it is — and it is the last thing anyone sees before the headlamps go on. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Makalu (8,485 m) and Descend to Camp 2 (6,700 m)",
      elevation: "8,485 m",
      accommodation: "Camp 2",
      placeDescription: "The 8,485 m summit of Makalu, the fifth-highest mountain on earth.",
      ...MAKALU,
      html: p(
        "Leaving Camp 4 between eight and eleven at night, on oxygen, at around -30°C. The first hours climb steepening snow and ice on fixed rope toward the base of the pyramid, and the cold at this altitude is a physical presence rather than a temperature.",
        "Then the <strong>summit pyramid</strong>: several hundred metres of steep mixed rock and ice, with a section of genuine climbing at around 8,400 m taken in a down suit, in mitts, on an ascender. It is the hardest ground on any of Nepal's 8,000 m normal routes, and it is where most turn-backs happen.",
        "Above it a short ridge leads to the <strong>summit (8,485 m)</strong> — a small point, sometimes a corniced blade of snow, looking north into Tibet, west across the Barun to Everest and Lhotse, and east to Kanchenjunga on the horizon.",
        "The descent abseils and down-climbs the pyramid and then the ropes below it, which on a tired party is the most dangerous part of the expedition. Back to Camp 4, then Camp 3, and on to Camp 2 if the reserves allow. Sixteen to twenty hours of movement. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,700 m) to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the summit push.",
      ...MAKALU_BC,
      html: p(
        "Down the fixed ropes past Camp 1 to advance base camp, and then down the glacier and moraine to base camp — six to eight hours on legs that have very little left.",
        "The team goes carefully. More people are hurt coming down a mountain than going up it, and after a twenty-hour summit day the margin for error is thin.",
        "<strong>Base camp (4,870 m)</strong>, and the moment of walking off the moraine into camp at the end of a summit push is one that most Makalu climbers remember more clearly than the summit itself. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The first of five contingency days, held for a second summit window.",
      ...MAKALU_BC,
      html: p(
        "The first of five reserve days, and on Makalu they are not padding. This mountain turns back more parties than it lets through, and a team with five days in hand has a second attempt where a team with one does not.",
        "If a second push is on, the Sherpa team re-stocks Camp 4 and the climbers rest here today. Your leader assesses each climber honestly — a second summit push after a turned-back first one is only offered to people who came down with something in reserve.",
        "If the mountain has been climbed, the day is for eating and sleeping and beginning to feel normal. Most climbers lose eight to twelve kilograms on a Makalu expedition. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...MAKALU_BC,
      html: p(
        "The second reserve day. If a second attempt is running, the team is at advance base camp or Camp 2 tonight rather than here.",
        "If the mountain has been climbed, the camps above begin to come down. Camp 4, Camp 3 and Camp 2 are stripped by the Sherpa team, and every bottle, tent and rope comes off the mountain.",
        "That clear-up is not optional. Makalu sees few expeditions and what is left on it stays for decades, and the Department of Tourism deposit is refunded against what comes down. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The third contingency day, held at base camp for a late summit window.",
      ...MAKALU_BC,
      html: p(
        "The third reserve day, and in a season with a late window this is often the summit day itself — Makalu's windows have arrived as late as the final week of May.",
        "If a second push is underway, the team is high on the mountain and base camp is a radio watch.",
        "If not, the day is spent at base camp in the peculiar limbo of an expedition that is finished but not yet over: eating, sleeping, and waiting for the last two days of margin to run out. Overnight at base camp.",
      ),
    },
    {
      title: "Fourth Reserve Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The fourth contingency day, as the expedition begins to close down.",
      ...MAKALU_BC,
      html: p(
        "The fourth reserve day. By now the season's arithmetic is clear, and your leader will say plainly whether there is anything left to attempt.",
        "A leader who keeps a tired team on Makalu past the last honest window is the most dangerous thing on the mountain, and this is the day that judgement gets made.",
        "The <strong>waste management</strong> is completed today. Human waste from base camp is carried out in barrels, oxygen bottles are counted back in, and the site is cleared to the condition it was found in. Overnight at base camp.",
      ),
    },
    {
      title: "Fifth Reserve Day and Break Camp at Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The final contingency day, and the last night beneath Makalu.",
      ...MAKALU_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. Base camp comes down today: tents struck, barrels packed and weighed, and the loads made up for the porters and pack animals that will carry six weeks of expedition back down the Barun.",
        "It is a long day of unglamorous work, and it is when the team says goodbye to the base camp crew who have run the place since early April.",
        "The chorten from the puja stays, with its prayer flags. A last look at the south-east face, which by now looks entirely different from the way it did on the day you first walked up the moraine. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Makalu Base Camp (4,870 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "The grazing meadow on the floor of the Barun, first stop on the walk out.",
      ...YANGLE_KHARKA,
      html: p(
        "Off the moraine and down the Barun through <strong>Langmale Kharka</strong>, losing height fast and watching the vegetation come back — grass, then juniper, then birch and fir.",
        "By the afternoon there are trees, a river loud enough to talk over, and air that after six weeks feels almost solid.",
        "<strong>Yangle Kharka (3,600 m)</strong>, and the last camp with the mountain still visible behind you. Around 6 hours. Overnight at Yangle Kharka.",
      ),
    },
    {
      title: "Trek from Yangle Kharka (3,600 m) to Dobato (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Dobato",
      placeDescription: "The ridge camp above the Barun valley, on the return over the Shipton La.",
      ...DOBATO,
      html: p(
        "Down the valley floor and then the long steep climb back onto the ridge — the last real ascent of the expedition and, on legs that have finished with mountains, an unwelcome one.",
        "The forest on this side is dense and old, and in late May it is warm and full of birds after two months above the treeline.",
        "<strong>Dobato (3,800 m)</strong> gives a final view back up the Barun to Makalu, which from here is a small white pyramid at the head of a very long valley. Around 6 to 7 hours. Overnight at Dobato.",
      ),
    },
    {
      title: "Cross the Shipton La (4,220 m) and Trek to Tashigaon (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Tashigaon",
      placeDescription: "The last permanent village in the Barun valley, reached on the walk out.",
      ...TASHIGAON,
      html: p(
        "Over the <strong>Shipton La (4,220 m)</strong> for the last time, past the lakes, and then the enormous descent — <strong>2,100 m</strong> down the rhododendron staircase to Tashigaon.",
        "It is brutal on the knees and glorious in every other respect: the forest gets warmer and greener with every hundred metres, and somewhere on the way down you pass the last of the cold.",
        "<strong>Tashigaon (2,100 m)</strong> is the first permanent village in six weeks, with houses, fields, buffalo and children. Seven to eight hours. Overnight at Tashigaon.",
      ),
    },
    {
      title: "Trek from Tashigaon (2,100 m) to Seduwa (1,540 m)",
      elevation: "1,540 m",
      accommodation: "Seduwa",
      placeDescription: "The village at the national park entrance, on the western side of the Arun gorge.",
      ...SEDUWA,
      html: p(
        "A gentle day down through farmland and forest, past millet terraces and cardamom gardens, in heat that after Makalu base camp feels frankly tropical. The trail runs through working country — buffalo on the path, cardamom drying on racks, and children walking to school — which after two months of moraine takes some adjusting to.",
        "The expedition checks out of the <strong>Makalu Barun National Park</strong> at Seduwa, and the waste-management paperwork is signed off here against the barrels the porters have carried down.",
        "<strong>Seduwa (1,540 m)</strong> in the afternoon, with one hard day left. Most of the crew are from villages within a day's walk of here, and a good number of them will be home tomorrow. Around 4 to 5 hours. Overnight at Seduwa.",
      ),
    },
    {
      title: "Trek from Seduwa (1,540 m) to Num (1,560 m) and Drive to Tumlingtar (405 m)",
      elevation: "405 m",
      accommodation: "Tumlingtar",
      placeDescription: "The airstrip town on the plateau above the Arun, and the end of the walking.",
      ...TUMLINGTAR,
      html: p(
        "The last walking day, and it is the Arun gorge in reverse: eight hundred metres down to the river, across the suspension bridge, and eight hundred back up the other side to <strong>Num</strong>.",
        "It is a hard finish to a long expedition and it is over by early afternoon, when the jeeps are waiting at the road head.",
        "The drive down to <strong>Tumlingtar (405 m)</strong> takes four to five hours through the terraces. There is a hotel, a shower, a cold drink and a bed, and the whole team eats together. Overnight at Tumlingtar.",
      ),
    },
    {
      title: "Fly from Tumlingtar (405 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A forty-five minute flight west to <strong>Kathmandu</strong>, over the ridges the expedition walked across two months ago.",
        "The Tumlingtar service is more reliable than Lukla's but is still weather-dependent, which is why no international departure is scheduled for today.",
        "The afternoon is free. The expedition reports to the <strong>Department of Tourism</strong>, the waste deposit is reconciled, and the <strong>summit certificate</strong> is issued and presented in the evening. Overnight in Kathmandu.",
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
        "Safe travels. Makalu is a mountain that takes a great deal and gives it back in a currency that is hard to explain to anyone who has not been up the Barun. We would be glad to see you again.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const chamlangExpedition: Climb = {
  region: "Makalu Region",
  price: 18500,
  difficulty: "extreme",
  maxAltitude: 7321,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [86.99, 27.79],
  zoom: 10,
  content: {
    slug: "chamlang-expedition",
    title: "Chamlang Expedition",
    overview:
      "<p><strong>Chamlang (7,321 m)</strong> is the long white wall that closes the western side of the Barun valley, and it is one of the least-climbed 7,000 m peaks in Nepal. It was first ascended in <strong>1962 by Soh Anma and Pasang Phutar</strong> on a Japanese expedition, and in the sixty years since it has seen a handful of successful parties — some decades almost none.</p><p>The reason is the mountain itself. Chamlang is a long ridge rather than a summit pyramid, with a <strong>grade D</strong> route on steep snow and ice, a corniced crest that runs for hours, and a base camp in the upper Barun that is eight days' walk from the nearest road. It is not harder than Ama Dablam in any single move; it is harder as a whole, because there is more of it, nobody has fixed it for you, and there is no one else in the valley.</p>",
    highlights: [
      ["Summit Chamlang (7,321 m)", "One of the least-climbed 7,000 m peaks in Nepal, first ascended by a Japanese team in 1962."],
      ["A Grade D Ridge", "Sustained steep snow and ice with a corniced crest that runs for hours, fixed by our own Sherpa team."],
      ["The Barun Valley Approach", "Eight days from the road head through protected forest and one of the great unvisited valleys of Nepal."],
      ["Makalu and Everest from the Summit", "Makalu across the Barun, Everest and Lhotse to the north-west, and the Hongu basin to the south."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain where there is no other team to call on."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and, less commonly, <strong>October to early November</strong>. Spring is the usual window: the ridge is better consolidated, the days are longer, and the Barun approach is at its best with the rhododendron forest below the Shipton La in flower.</p><p>Autumn gives colder, clearer conditions and firmer ice, but it also gives shorter days on a route where the summit push is long, and there will certainly be no other team on the mountain. Whichever season, this is a peak where the leader's willingness to abandon an attempt matters more than the schedule, and we will call off a departure rather than commit a team to a loaded ridge.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp (5,000 m)</strong> in the upper Barun the route climbs onto the north side of the mountain, gaining a shoulder for <strong>Camp 1 at around 5,800 m</strong>, then continuing on steepening snow and ice to <strong>Camp 2 (6,500 m)</strong> and a small <strong>high camp at around 6,900 m</strong>.</p><p>Summit day follows the <strong>corniced summit ridge</strong>, which is the character of the whole climb: narrow, exposed on both sides, and long enough that a party moving at anything less than a steady pace runs out of day. Ten to fourteen hours from high camp with a full abseil descent. Nothing on the route is desperate in isolation; the difficulty is doing all of it, in sequence, at 7,000 m, on rope your own team fixed.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> — Ama Dablam, Cholatse or equivalent — and ideally previous time at 7,000 m. You must be efficient on steep fixed rope for many hours, competent to abseil from hanging stances while tired, and comfortable on a corniced crest.</p><p>Isolation is the other requirement, and it is a mental one. There is no other expedition in the valley, no helicopter traffic as a matter of routine, and no established infrastructure on the mountain. A climber who is used to arriving at a base camp where the route is already fixed and the neighbours have a doctor will find Chamlang a different proposition, and we say so at enquiry.</p>",
      },
      {
        heading: "Committing to the Barun, and Safety",
        content:
          "<p>Base camp is <strong>eight days' walk from the road head at Num</strong>, in a valley with no lodges above Tashigaon and no permanent settlement above that. The expedition travels with a full camp, a cook and kitchen crew, and all food and fuel carried in by porters and pack animals from Tumlingtar.</p><p>Chamlang is climbed <strong>without supplementary oxygen</strong>. We carry emergency oxygen with masks and regulators at the high camps and at base camp, along with a Gamow bag and a full medical kit. Evacuation is slow and weather-dependent — a helicopter can reach base camp in clear conditions and not much else — and there is unlikely to be another team to assist. Insurance documentation is checked carefully before permits are issued.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of technical ice tools, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles, and two headlamps with lithium batteries.</p><p>The approach also demands proper trekking kit for eight days of subtropical forest and rain. We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own harness, crampons, ice tools, belay device, ascender and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Chamlang climbed?", answer: "Rarely — a handful of successful expeditions in most decades, and seasons in which nobody attempts it at all. There is no trodden line, no established camp platforms and no fixed rope left by anyone else. Every expedition on it starts from nothing." },
      { question: "How does it compare with Baruntse?", answer: "Considerably harder. Baruntse is an AD+ snow route with a corniced section near the top; Chamlang is grade D with a long corniced ridge and steeper ground below it. Baruntse is the 7,000 m peak to climb before an 8,000 m one; Chamlang is for a climber who wants the climbing." },
      { question: "What is the summit success rate?", answer: "Low, and we will not flatter it — well under half of the expeditions that attempt it summit, and there are seasons when none do. Weather on the ridge and the sheer length of the summit day are the two usual reasons, both of them decided against a fixed turnaround." },
      { question: "Where is base camp?", answer: "At around 5,000 m in the upper Barun below the northern flank of the mountain, roughly a day's walk short of Makalu base camp. It is a full expedition base camp with mess, kitchen, storage and toilet tents and a cook crew, and there is nobody else in the valley." },
      { question: "Is supplementary oxygen used?", answer: "No. Chamlang is well within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,800 m, Camp 2 at 6,500 m and a high camp at around 6,900 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "What makes the summit ridge difficult?", answer: "Its length and its cornices. It is narrow, drops away on both sides, and goes on for hours, so it has to be taken one at a time with the Sherpas probing the crest ahead. It is not hurried, and that is precisely why the summit day runs so long." },
      { question: "Can Chamlang be combined with Makalu or Baruntse?", answer: "Not sensibly in one trip. Chamlang is a full expedition with its own rotation and reserve days and it uses the schedule it has. Climbers wanting two objectives in the Barun are better served by our Sherpani Col traverse, which links the Barun to the Hongu and includes Mera Peak." },
      { question: "What is the Barun valley like?", answer: "One of the finest walks in Nepal and almost unvisited. Protected forest with red panda and snow leopard habitat, two-thousand-metre walls, waterfalls off hanging glaciers, and no lodges above Tashigaon. Many climbers say the approach was the best part of the expedition." },
      { question: "Do you run fixed departures?", answer: "One or two a season, and we are willing to cancel one if conditions are wrong or if the party that assembles is not strong enough. On a grade D route with no other team in the valley, a weak team is a serious problem, and we would rather refund a trip than run one." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: TUMLINGTAR_FLIGHTS,
      transport: ["Private jeep transport between Tumlingtar and Num in both directions.", "Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation:
        "Full tented accommodation throughout the Barun approach and the walk out, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      camping:
        "Full expedition base camp at 5,000 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,800 m), Camp 2 (6,500 m) and high camp (6,900 m).",
      permits:
        "Department of Tourism Chamlang climbing royalty and permit, Makalu Barun National Park entry permit, and the local rural municipality permit.",
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew from Tumlingtar to base camp and throughout the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on steep ice, fixed-rope work and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the route and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Tumlingtar and base camp.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the ridge is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 33-day expedition on Chamlang (7,321 m), a grade D ridge in the upper Barun, with three camps above base, an acclimatisation rotation, rope fixed by our own team and three reserve days.",
    inExDescription:
      "Tumlingtar flights, jeep transfers, Kathmandu hotel nights, full tented accommodation on the approach and at every camp, three meals a day throughout, the Department of Tourism royalty and park permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Chamlang Expedition (7,321 m) — 33 Days | Green Compass Treks",
      description:
        "Climb Chamlang (7,321 m), one of the least-climbed 7,000 m peaks in Nepal, on a 33-day grade D expedition up the Barun valley with three camps, a rotation, rope fixed by our own team and one Sherpa per climber.",
      keywords:
        "chamlang expedition, chamlang 7321m, rarely climbed peaks nepal, barun valley expedition, 7000m technical peak, chamlang climbing",
      tags: "Chamlang, Makalu Region, Expedition, 7000m Peak, Barun Valley, Technical Climb",
    },
  },
  days: [
    ...barunApproach("thirty-three day").slice(0, 10),
    {
      title: "Trek from Langmale Kharka (4,410 m) to Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp on moraine in the upper Barun, below the northern flank of Chamlang.",
      ...CHAMLANG_BC,
      html: p(
        "The last day of the approach. The route climbs onto the moraine of the upper Barun and then turns west off the Makalu trail, onto ground that sees no traffic at all.",
        "<strong>Chamlang Base Camp (5,000 m)</strong> is established properly today — mess tent, kitchen, storage and toilet tents alongside the sleeping tents — because this is home for the next fortnight.",
        "The afternoon is spent reading the route from below: the shoulder where Camp 1 goes, the steepening ground above it, and the long corniced crest that is the whole character of the mountain. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...CHAMLANG_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the mountain before it has been done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. With Makalu at the head of the valley behind you and nobody else in the Barun at all, the silence takes most people a day to notice. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...CHAMLANG_BC,
      html: p(
        "A full working day on the ice above camp. Every climber is taken through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your leader is assessing efficiency under fatigue rather than best-case technique. On a route with a summit day this long and a full abseil descent, minutes lost fumbling with a device compound into hours.",
        "Anyone the leader is not satisfied with is told today, at base camp. Meanwhile the Sherpa team begins <strong>fixing the ground toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...CHAMLANG_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,400 m</strong> and back, gaining and losing height on ground that asks nothing technical.",
        "The view from up there is the argument for the whole trip. <strong>Makalu</strong> stands at the head of the Barun to the north-east, Everest and Lhotse show over the ridge to the north-west, and the Barun glacier runs south between them with nothing man-made anywhere in it.",
        "The afternoon is rest and packing for the rotation. Your leader reviews the satellite forecast in the evening. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,800 m on the shoulder above base camp, at the foot of the steep ground.",
      lng: 86.975,
      lat: 27.7958,
      html: p(
        "The first time on the mountain. The route climbs off the moraine onto snow and ice and follows the fixed line to the shoulder — five to six hours with a personal load while the Sherpas move the camp.",
        "<strong>Camp 1 (5,800 m)</strong> sits on the crest of the shoulder, with the Barun spread out below and the steep ground of the upper route rising directly above.",
        "The night here is the point. Sleeping at 5,800 m before returning to base camp is what makes a summit push from 6,900 m realistic, and it gives your leader a proper look at how each climber moves on the actual route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,800 m) to Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...CHAMLANG_BC,
      html: p(
        "Down the fixed ropes by abseil in three to four hours, off the steep ground before the sun has been on it long.",
        "Descending to recover is deliberate. Adaptation from last night's altitude consolidates far better at 5,000 m than it would higher, and a team that rests properly now climbs faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ground above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, on the recovery day after the rotation.",
      ...CHAMLANG_BC,
      html: p(
        "A genuine rest day, worked at rather than enjoyed. Eating past the point of appetite, four litres of fluid, an afternoon asleep, and staying off the legs.",
        "There is equipment work too: ice tools sharpened, crampons checked and adjusted, and harnesses inspected for wear after a day of jumaring.",
        "The Sherpa team is high on the mountain establishing Camp 2 and pushing the fixed line toward the high camp. Their report on the state of the ridge is the information the summit plan rests on. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...CHAMLANG_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Personal kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the four-day sequence with timings for each stage.",
        "A <strong>hard turnaround time</strong> is set for summit day and it is not renegotiated on the ridge. On a crest this long, a party that is behind schedule at the halfway point will not catch up.",
        "The satellite forecast arrives in the evening and the go decision is taken on it and on the Sherpa team's report of the upper ridge. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,000 m) to Camp 1 (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Camp 1",
      placeDescription: "The shoulder camp at 5,800 m, reoccupied for the summit push.",
      lng: 86.975,
      lat: 27.7958,
      html: p(
        "The summit push begins, and the ground to Camp 1 goes noticeably faster the second time — four hours or so for a climb that took five or six on the rotation.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,800 m)</strong> by early afternoon, with the rest of the day to lie down, drink and eat. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,800 m) to Camp 2 (6,500 m)",
      elevation: "6,500 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,500 m on cut platforms in the upper face.",
      lng: 86.9781,
      lat: 27.7897,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the ground steepens into sustained <strong>snow and ice</strong> on fixed rope, and it stays that way for five to six hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and by the top of it most people understand why the assessment day mattered.",
        "<strong>Camp 2 (6,500 m)</strong> is a handful of tents on platforms cut into the face — small, exposed, and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,500 m) to High Camp (6,900 m)",
      elevation: "6,900 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,900 m on the shoulder below the summit ridge.",
      lng: 86.9797,
      lat: 27.7853,
      html: p(
        "A deliberately short day — three to four hours up to the <strong>high camp at 6,900 m</strong>, arriving by late morning so the team has most of the day lying down.",
        "The camp is two or three tents on the smallest usable ground on the mountain, directly beneath the summit ridge, and it is the coldest and least comfortable night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Nobody sleeps much at 6,900 m the night before a summit. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Chamlang (7,321 m) and Descend to Camp 2 (6,500 m)",
      elevation: "7,321 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,321 m summit of Chamlang, at the western wall of the Barun valley.",
      ...CHAMLANG,
      html: p(
        "Moving by one in the morning, roped and on the fixed line. The ground above high camp is steep snow and ice by headlamp, and it leads within a couple of hours onto the feature the mountain is built around.",
        "The <strong>summit ridge</strong> is narrow, corniced, exposed on both sides, and long. It is taken one at a time with the Sherpas probing the crest ahead, and it goes on for hours — this is not a section to be hurried and it is where the turnaround time earns its place.",
        "The <strong>summit (7,321 m)</strong> looks north-east across the Barun to <strong>Makalu</strong>, north-west to Everest and Lhotse, and south into the Hongu basin, with Baruntse standing between them.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Twelve to sixteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,500 m) to Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...CHAMLANG_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. On a mountain this rarely visited, leaving rope behind is not an option — it stays for decades and helps nobody.",
        "The steep ground is timed for the cold of the morning as it has been throughout.",
        "<strong>Base camp (5,000 m)</strong> in the afternoon, with thick air by comparison, a hot meal and the first unbroken sleep in four days. Five to seven hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...CHAMLANG_BC,
      html: p(
        "The first of three reserve days, and on Chamlang they are used more often than not. A ridge this long and this exposed is closed by wind that would be perfectly climbable on a shorter route.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest, and rest at 5,000 m in an empty valley after a 7,321 m summit day is a strange and rather good way to spend a morning. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Chamlang Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...CHAMLANG_BC,
      html: p(
        "The second reserve day. Three of them exist because the Barun is eight days from the road head, and an expedition that runs out of margin here cannot simply extend — the flights, the porters and the food are all committed.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down: the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Chamlang Base Camp",
      placeDescription: "The final contingency day, and the last night in the upper Barun.",
      ...CHAMLANG_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything the expedition brought into the Barun goes back out on porters and pack animals, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams sit out for a while after dinner — the upper Barun at night, with Makalu at the head of the valley and no light anywhere, is not something you get many chances at. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Chamlang Base Camp (5,000 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "The grazing meadow on the floor of the Barun, first stop on the walk out.",
      ...YANGLE_KHARKA,
      html: p(
        "Off the moraine and down the Barun through <strong>Langmale Kharka</strong>, losing height fast and watching the vegetation return — grass, then juniper, then birch and fir.",
        "By the afternoon there are trees, a river loud enough to talk over, and air that after a fortnight above 5,000 m feels almost solid.",
        "<strong>Yangle Kharka (3,600 m)</strong> is the last camp with the mountain still visible behind you. Around 6 to 7 hours. Overnight at Yangle Kharka.",
      ),
    },
    ...makaluExpedition.days.slice(45, 51),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const makaluSherpaniColMeraPeak: Climb = {
  region: "Makalu Region",
  price: 7850,
  difficulty: "extreme",
  maxAltitude: 6476,
  grade: "AD at the cols, PD on Mera",
  center: [87.0, 27.82],
  zoom: 9,
  content: {
    slug: "makalu-base-camp-with-sherpani-col-and-mera-peak-climbing",
    title: "Makalu Base Camp with Sherpani Col and Mera Peak Climbing",
    overview:
      "<p>This is the hardest high traverse in Nepal, and one of the great journeys anywhere. It walks eight days up the <strong>Barun valley</strong> to <strong>Makalu Base Camp (4,870 m)</strong>, crosses the <strong>Sherpani Col (6,180 m)</strong> and the <strong>West Col (6,143 m)</strong> — two glaciated passes with fixed ropes, abseils and load-lowering — into the uninhabited <strong>Hongu</strong>, and comes out over the <strong>Mera La</strong> having climbed <strong>Mera Peak (6,476 m)</strong>, the highest trekking peak in Nepal, on the way past.</p><p>It is not a trek with a peak attached. The col section is a full mountaineering undertaking: three consecutive days above 6,000 m, camps on glaciers, a <strong>100 m abseil</strong> off the West Col, and complete commitment once the team leaves Makalu base camp. There is no bail-out between the Barun and the Hongu. What it gives in return is a line drawn across the whole Makalu-Barun and Khumbu, from a rice terrace at 400 m to a 6,476 m summit, with almost nobody else on any of it.</p>",
    highlights: [
      ["Cross the Sherpani Col (6,180 m) and West Col (6,143 m)", "Two glaciated passes with fixed ropes and a 100 m abseil, linking the Barun to the Hongu."],
      ["Makalu Base Camp (4,870 m)", "Stand beneath the south-east face of the fifth-highest mountain on earth, eight days from the nearest road."],
      ["Summit Mera Peak (6,476 m)", "The highest trekking peak in Nepal, climbed on the way out with five 8,000 m summits from the top."],
      ["The Barun and the Hongu", "Two of the least-visited valleys in Nepal, linked by a route almost nobody walks."],
      ["Total Commitment", "No road, no lodge and no exit between Makalu base camp and the Hinku — nine days of full self-sufficiency."],
    ],
    sections: [
      {
        heading: "Best Time to Attempt",
        content:
          "<p><strong>Late April to May</strong> and <strong>mid-October to early November</strong>, and the window is narrower than for a normal trek. The cols need <strong>firm, settled snow</strong> to rig and cross safely, and the glaciers between them need to be crossable without wading. After heavy snow the traverse is simply not on.</p><p>Autumn is generally the more reliable half of the year for the cols, with better consolidated snow and clearer weather. Spring gives the Barun forest in flower on the approach, which is worth something on an eight-day walk in. We run a small number of departures a year and we will turn a group round at Sherpani Col base camp rather than commit it to loaded ground.</p>",
      },
      {
        heading: "Difficulty & the Col Section",
        content:
          "<p>The approach and the walk out are trekking. The middle is not. From <strong>Sherpani Col base camp (5,700 m)</strong> the route climbs a glacier and a steepening snow slope to the <strong>Sherpani Col (6,180 m)</strong>, fixed with rope, and descends the far side onto a glacier where the group camps at around 6,100 m — <strong>the highest camp on any trekking route in Nepal</strong>.</p><p>The next day crosses the <strong>West Col (6,143 m)</strong>, whose western side drops away steeply and is descended by a <strong>100 m abseil</strong> on fixed rope with every load lowered separately. Below it the Hongu glacier leads down to Baruntse base camp. Three consecutive days above 6,000 m, roped throughout, in crampons, fully committed. <strong>Mera Peak (PD)</strong> at the end is the easiest technical day of the trip.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>This is not a trek and we do not sell it as one. We require <strong>previous experience above 5,000 m</strong>, competence in crampons on a glacier, and the ability to abseil and to jumar on fixed rope. A previous 6,000 m peak is strongly preferred. Anyone whose background is teahouse trekking, however fit, is in the wrong place here.</p><p>The acclimatisation is exceptional by necessity — eight days walking up from 400 m, then base camp at 4,870 m with an acclimatisation day, then the cols. But acclimatisation is not the same as competence, and the col section punishes a party that cannot move efficiently on technical ground. Your guide assesses each member at Makalu base camp and will turn back anyone who is not ready.</p>",
      },
      {
        heading: "Commitment, Camping and Self-Sufficiency",
        content:
          "<p>From <strong>Tashigaon to Khare</strong> — around eighteen nights — there is no lodge, no shop and no village. The group travels with two-person tents, a mess tent, kitchen tent and toilet tent, a cook and kitchen crew, and all food and fuel carried in from Tumlingtar.</p><p>The critical stretch is the four days between Makalu base camp and the Hongu. <strong>There is no bail-out.</strong> Once the group leaves Sherpani Col base camp, the only ways out are forward over both cols or back down the Barun, and the camps in between are on glaciers above 6,000 m. Helicopter evacuation is possible in clear weather from base camp and from the Hongu, and effectively impossible from between the cols. This is the itinerary on which we check insurance most carefully of any trip in this catalogue.</p>",
      },
      {
        heading: "Packing List & Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> are essential — you sleep at 6,100 m on a glacier and climb Mera's high camp at 5,800 m. A <strong>-30°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket, insulated over-trousers, a full shell, mitts as well as gloves, a balaclava, category 4 glacier glasses, goggles, gaiters, a headlamp with lithium batteries and factor 50 sunscreen.</p><p>Also bring proper trekking kit for eight days of subtropical forest and rain on the approach. We supply <strong>all fixed and main ropes, snow bars, ice screws and anchors</strong>, rig both cols and the West Col abseil with all loads lowered separately, and fix Mera's summit step. <strong>Personal hardware — harness, crampons, ice axe, jumar, descender and helmet — can be rented as an add-on</strong> and is fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "Is this a trek or a climb?", answer: "Both, and the col section is unambiguously a climb. Three consecutive days above 6,000 m, camps on glaciers, fixed ropes on both cols and a 100 m abseil off the West Col are mountaineering by any definition. The Barun approach and the Hinku exit are trekking, and the contrast is part of what makes the route remarkable." },
      { question: "What exactly happens at the West Col?", answer: "You cross the col at 6,143 m and the western side drops away steeply onto the Hongu glacier. The crew rigs fixed rope and the group abseils around 100 m in stages, with every rucksack and every crew load lowered separately so nobody descends under weight. It is the technical crux of the traverse." },
      { question: "Can we turn back if the cols are not in condition?", answer: "Yes, and it is the decision your guide makes at Sherpani Col base camp, before the group commits. Turning back means retracing the Barun to Tumlingtar, which ends the trip without Mera Peak. It happens perhaps one season in four, and we would far rather it happened than the alternative." },
      { question: "Where is the highest camp?", answer: "Between the two cols, on the glacier at around 6,100 m — the highest camp on any trekking route in Nepal, and colder than anything most trekkers have experienced. It is a single night, and it is the reason we specify a -30°C bag and double boots." },
      { question: "How many days are we fully committed?", answer: "Four, from leaving Makalu base camp to reaching the Hongu below the West Col. In that window there is no lodge, no village, no trail out to the side, and no realistic helicopter landing. It is the most committing section of any itinerary we run." },
      { question: "Do we go into Makalu Base Camp itself?", answer: "Yes, and it is one of the objectives rather than a waypoint. The camp sits at 4,870 m directly beneath the south-east face, and we build in an acclimatisation day there with a walk up the Barun glacier toward advance base camp. On a clear morning it is one of the great places to stand in Nepal." },
      { question: "How hard is Mera Peak after the cols?", answer: "Straightforward by comparison. It is a broad glacier at 25 to 30 degrees with one short steep step, graded PD, and a group that has just crossed two 6,100 m cols will find it the easiest technical day of the trip. The altitude is the only difficulty, and by then you are thoroughly acclimatised." },
      { question: "How many staff travel with the group?", answer: "A lead climbing guide, an assistant guide, climbing Sherpas at roughly one per two members for the cols and the summit, a cook and kitchen crew, and porters and pack support throughout. It is a large operation because the group carries eighteen nights of self-sufficiency across two valleys." },
      { question: "Is there mobile signal on the route?", answer: "Very little. There is patchy coverage in the lower Barun and none above Tashigaon until Khare in the Hinku — roughly a fortnight out of contact. Tell people at home not to expect anything, and bring a power bank kept warm in your sleeping bag." },
      { question: "How fit do I need to be?", answer: "Exceptionally. Twenty-nine days with an eight-day approach, three days above 6,000 m, a 6,476 m summit and a 4,610 m pass to finish, carrying a day pack throughout and sleeping in tents for most of it. The benchmark is walking eight hours with 10 kg on consecutive days and recovering overnight, sustained for a month." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Flight from Kathmandu to Tumlingtar at the start of the trip.",
        "Flight from Lukla to Kathmandu at the end of the trip, including the road transfer from Manthali in Ramechhap when the flights are operating from there in peak season.",
      ],
      transport: ["Private jeep transport between Tumlingtar and Num.", "Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      trekAccommodation:
        "Full tented accommodation from Tashigaon through the Barun, the cols and the Hongu, with two-person tents, a mess tent, kitchen tent and toilet tent; lodge accommodation in the Hinku valley on the walk out.",
      camping:
        "Tented camps at Sherpani Col base camp (5,700 m), between the cols at 6,100 m, in the Hongu, and at Mera high camp (5,800 m).",
      permits:
        "Nepal Mountaineering Association climbing permit for Mera Peak, Makalu Barun National Park entry permit, and the local rural municipality permits.",
      sherpa:
        "Climbing Sherpas at approximately one for every two members for the col crossings and the Mera summit, with all their equipment, wages and insurance, plus an assistant climbing guide.",
      extra: [
        "Cook and kitchen crew for the entire camping section, with all food and fuel carried in from Tumlingtar.",
        "A technical training and assessment day at Makalu base camp before the cols.",
        "Rigging and fixing of both the Sherpani Col and the West Col, including the 100 m abseil with all loads lowered separately.",
        "Fixing of Mera's summit step by our climbing Sherpas.",
        "An acclimatisation day at Makalu base camp with an excursion up the Barun glacier.",
        "A reserve day held for the cols and a reserve day held for the Mera summit.",
        "Porter and pack-animal support for all group equipment throughout.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, cols abandoned for conditions, or a retreat back down the Barun that ends the trip without Mera Peak.",
    },
    porterDays: 24,
    gearRentalDays: 24,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 29-day traverse from Tumlingtar up the Barun to Makalu Base Camp, over the Sherpani Col (6,180 m) and West Col (6,143 m) into the uninhabited Hongu, and out over the Mera La with an ascent of Mera Peak (6,476 m).",
    inExDescription:
      "The Tumlingtar flight in and the Lukla flight out, jeep transfers, Kathmandu hotel nights, full tented and lodge accommodation, three meals a day throughout, the Mera climbing permit and park permits, a climbing guide with an assistant and Sherpa support, a cook crew, all group climbing equipment, the rigging of both cols and the West Col abseil, and two reserve days are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Makalu Base Camp, Sherpani Col and Mera Peak — 29 Days | Green Compass Treks",
      description:
        "Walk the Barun to Makalu Base Camp, cross the Sherpani Col (6,180 m) and West Col (6,143 m) into the uninhabited Hongu, and climb Mera Peak (6,476 m) on the way out. 29 days, the hardest high traverse in Nepal.",
      keywords:
        "sherpani col trek, west col crossing, makalu base camp mera peak, hardest trek in nepal, barun hongu traverse, sherpani col mera",
      tags: "Sherpani Col, West Col, Makalu Base Camp, Mera Peak, Makalu Region, High Traverse",
    },
  },
  days: [
    ...barunApproach("twenty-nine day"),
    {
      title: "Acclimatisation Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The base camp beneath the south-east face of Makalu, on the moraine of the Barun glacier.",
      ...MAKALU_BC,
      html: p(
        "A day at the foot of the fifth-highest mountain on earth, and one of the objectives of the trip rather than a rest stop.",
        "The morning walk goes north up the moraine of the <strong>Barun glacier</strong> toward Makalu's advance base camp, gaining 400 to 500 m and returning. It is straightforward walking on rough ground, and it puts the whole south-east face — nearly four vertical kilometres of it — directly above you.",
        "The afternoon is rest, and the first serious conversation about the cols: your guide runs through the three days ahead, the camps, the abseil, and the point of no return. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Assessment Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The base camp below Makalu, where technique is checked before the col crossings.",
      ...MAKALU_BC,
      html: p(
        "A full working day on the glacier ice, and the day that decides who crosses. Each member is taken through <strong>crampon technique, moving as a roped team, ascending fixed line on a jumar with a pack, and abseiling on a loaded rope</strong>.",
        "The abseil gets the most repetition, because in three days you will descend 100 m of fixed rope off the West Col with a glacier below you and no alternative.",
        "Your guide is assessing rather than teaching, and anyone not ready is told today. Turning back from here means walking out down the Barun, which is a long way but an entirely safe one. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Makalu Base Camp (4,870 m) to Sherpani Col Base Camp (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Sherpani Col Base Camp",
      placeDescription: "A tented camp at 5,700 m on the glacier below the Sherpani Col, at the point of commitment.",
      ...SHERPANI_COL_BC,
      html: p(
        "West off the Makalu trail and onto the glacier, climbing 800 m on moraine and then ice to the camp beneath the col. Five to six hours, roped for the last of it.",
        "<strong>Sherpani Col Base Camp (5,700 m)</strong> is a bleak, exposed camp on the glacier with the col directly above. It is the last place the group can turn round without committing.",
        "The afternoon is preparation: harnesses, crampons and descenders checked, the order of crossing set, and loads redistributed. The Sherpas go up to <strong>fix the col</strong> so the rope is in place before the group arrives. An early night — tomorrow starts at three. Overnight at Sherpani Col base camp.",
      ),
    },
    {
      title: "Cross the Sherpani Col (6,180 m) and Camp Between the Cols (6,100 m)",
      elevation: "6,180 m",
      accommodation: "Camp Between the Cols",
      placeDescription: "A glacier camp at 6,100 m between the Sherpani Col and the West Col, the highest camp on any trekking route in Nepal.",
      ...SHERPANI_COL,
      html: p(
        "Moving by four in the morning, roped and in crampons. The route climbs the glacier and then a steepening snow slope on fixed rope to the <strong>Sherpani Col (6,180 m)</strong>, arriving as the sun comes onto the crest.",
        "The view from the col is the reward for the whole approach: <strong>Makalu</strong> immediately behind, <strong>Chamlang</strong> and <strong>Baruntse</strong> ahead across the glacier, and Everest and Lhotse showing beyond them.",
        "The descent onto the western glacier is roped and steady, and camp goes up at around <strong>6,100 m</strong> on the ice. This is the <strong>highest camp on any trekking route in Nepal</strong>, it is bitterly cold, and the group is now fully committed — there is no way back over the col with laden crew. Eight to ten hours. Overnight between the cols.",
      ),
    },
    {
      title: "Cross the West Col (6,143 m) and Descend to the Hongu (5,400 m)",
      elevation: "6,143 m",
      accommodation: "Baruntse Base Camp area, Hongu",
      placeDescription: "The West Col at 6,143 m, and the descent onto the Hongu glacier below Baruntse.",
      ...WEST_COL,
      html: p(
        "The technical crux of the traverse. A short glacier climb from camp leads to the <strong>West Col (6,143 m)</strong>, and then the ground simply stops — the western side drops away steeply onto the Hongu glacier.",
        "The crew has rigged fixed ropes overnight, and the crossing is made by <strong>abseiling around 100 m in stages</strong>, with every rucksack and every crew load lowered separately so that nobody descends under weight. It is slow, cold and completely absorbing, and it takes most of the morning for a full group.",
        "Below the abseil the Hongu glacier leads down to the flat ground near <strong>Baruntse base camp (5,400 m)</strong>, where camp goes up. The committed section is behind you. Nine to eleven hours. Overnight in the Hongu.",
      ),
    },
    {
      title: "Rest Day in the Hongu Valley (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Baruntse Base Camp area, Hongu",
      placeDescription: "The Hongu valley below Baruntse, where the group rests after the col crossings.",
      ...BARUNTSE_BC,
      html: p(
        "A rest day, and after three days above 6,000 m and a 100 m abseil it is not a formality. The group has just completed the hardest part of the traverse and most people sleep through the middle of the day.",
        "It is also the reserve day for the cols. If weather held the group at Sherpani Col base camp, this is the day that absorbs the delay.",
        "The Hongu here is completely empty — no village, no lodge, no trail markers, and usually no other party. <strong>Baruntse</strong> stands at the head of the basin and Chamlang closes the eastern side. Overnight in the Hongu.",
      ),
    },
    {
      title: "Trek from the Hongu (5,400 m) to Seto Pokhari (5,035 m)",
      elevation: "5,035 m",
      accommodation: "Seto Pokhari",
      placeDescription: "A camp beside the sacred glacial lakes at the head of the Hongu.",
      ...SETO_POKHARI,
      html: p(
        "South down the Hongu on moraine and glacier, following the valley away from Baruntse. There is no trail in any developed sense — the route is a line the crew knows, marked by the occasional cairn.",
        "<strong>Seto Pokhari (5,035 m)</strong> is a chain of glacial lakes sacred to Hindus and Buddhists alike, visited by pilgrims in summer and by essentially nobody in the climbing seasons.",
        "Camp goes up on the shore with Baruntse behind and the cols you crossed two days ago now visible as a notch high on the eastern skyline. Around 5 hours. Overnight at Seto Pokhari.",
      ),
    },
    {
      title: "Trek from Seto Pokhari (5,035 m) to Kongme Dingma (4,850 m)",
      elevation: "4,850 m",
      accommodation: "Kongme Dingma",
      placeDescription: "A tented camp on the floor of the Hongu, below the eastern flank of Mera.",
      ...KONGME_DINGMA,
      html: p(
        "Further south down the Hongu on moraine and grass, losing height gently with the valley widening around you.",
        "This is the easiest walking day since Tashigaon, and after a fortnight of altitude and technical ground most people spend it noticing things — the lichen on the boulders, the birds, the first grass in days.",
        "<strong>Kongme Dingma (4,850 m)</strong> sits below the eastern flank of Mera, and the summit you climb in three days is directly above the camp. Around 5 hours. Overnight at Kongme Dingma.",
      ),
    },
    {
      title: "Cross the Mera La (5,415 m) to Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, and the first building in over two weeks.",
      ...KHARE,
      html: p(
        "Roped and in crampons up the glacier to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hongu and the Hinku, and over it into the third valley of the trip.",
        "The descent to <strong>Khare (5,045 m)</strong> is the moment most groups remember from the walk out: after eighteen nights in tents, a stone lodge with a stove in the dining room and a menu on the wall is genuinely startling.",
        "There is beer at Khare, and NTC signal for the first time since the Barun. Six to seven hours. Overnight at Khare.",
      ),
    },
    {
      title: "Training and Rest Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The climbing base of the Hinku, where the group prepares for the Mera summit.",
      ...KHARE,
      html: p(
        "A rest day with a short piece of work in it. The morning is a refresher on the glacier above Khare — rope-team spacing and the fixed-line technique for Mera's summit step — which after the cols is a formality rather than a lesson.",
        "The rest of the day is genuine rest in a bed, with hot food and a stove, before the last climb of the trip.",
        "Your guide reviews the group's condition and the weather, and confirms who is going up. After two cols above 6,000 m, most people are in the best shape of their trip. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Mera High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Mera High Camp",
      placeDescription: "A tented camp on a rock shelf above the Mera La, at the edge of the glacier facing Makalu.",
      ...MERA_HIGH_CAMP,
      html: p(
        "Crampons on within an hour of leaving Khare, back up the glacier to the <strong>Mera La</strong> and then traversing north-east to the rock shelf at <strong>5,800 m</strong>. Four to five hours.",
        "The camp faces east directly at <strong>Makalu</strong> — which, three weeks ago, you were standing underneath on the other side of the range. Seeing it from here, with the Sherpani Col somewhere on the skyline between, is the moment the traverse makes sense as a single journey.",
        "Dinner in a down jacket at four, sleeping bags by six. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Mera Peak (6,476 m) and Descend to Khare (5,045 m)",
      elevation: "6,476 m",
      accommodation: "Khare",
      placeDescription: "The 6,476 m summit of Mera, the highest trekking peak in Nepal.",
      ...MERA_PEAK,
      html: p(
        "Tea at one, roped and moving by two. The glacier above camp is a broad slope of <strong>25 to 30 degrees</strong> in the dark and the cold — never steep, never technical, and relentless.",
        "The sun arrives around 6,100 m, and above it lies the only real obstacle: a <strong>short step of 40 to 45 degrees</strong> below the central summit, fixed the day before and climbed on a jumar.",
        "From the <strong>summit (6,476 m)</strong>: <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong> — five of the six highest mountains on earth — with Baruntse and Chamlang standing over the valley you walked through last week.",
        "Then down the whole thing to <strong>Khare</strong>. Nine to twelve hours. Overnight at Khare.",
      ),
    },
    {
      title: "Reserve Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The reserve day held at Khare for the Mera summit.",
      ...KHARE,
      html: p(
        "The second of the trip's two reserve days, held for the Mera summit. High camp is exposed and the summit slope is entirely at the mercy of wind, and after everything else this trip has asked, losing the peak to a bad morning would be a poor way to finish.",
        "If yesterday was turned back, the group returns to high camp today and climbs tomorrow.",
        "If the summit went to plan, this is a rest day at Khare — a bed, a stove and a menu — or an early start down to Kothe to bank a spare day against the Lukla flights. Overnight at Khare or Kothe.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "The riverside lodges in the forested floor of the Hinku valley.",
      ...KOTHE,
      html: p(
        "A long descent and an easy one, losing nearly 1,500 m down the valley. The moraine below Khare gives way to the open bowl at Thagnak, and the trail then drops steadily along the Hinku Khola.",
        "Somewhere below Thagnak the air thickens noticeably, the first juniper appears, and legs that have been working above 5,000 m for a fortnight start behaving normally again.",
        "By <strong>Kothe (3,600 m)</strong> you are among rhododendron and birch with the river loud outside the lodge. Around 6 to 7 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "The high yak pasture below the Zatrwa La, on the last crossing of the trip.",
      ...THULI_KHARKA,
      html: p(
        "The last climb of the traverse, regaining 700 m out of the valley floor toward the pass. The trail leaves the river and works up through forest, steep in places.",
        "It is a day that feels harder than its numbers, because the summit is behind you and the body has decided the trip is over. It is not, quite — the Zatrwa La is still there.",
        "<strong>Thuli Kharka (4,300 m)</strong> gives a last evening looking east over the Hinku toward the Mera La and, somewhere far beyond it, Makalu. Around 5 to 6 hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, and the end of a traverse that began on a rice terrace at 400 m.",
      ...LUKLA,
      html: p(
        "An early start for the last pass. Two to three hours of rough ground to the <strong>Zatrwa La (4,610 m)</strong>, which after two 6,100 m cols is a walk.",
        "A final look east over the Hinku from the notch, and then a very long descent — 1,800 m through boulder fields, rhododendron forest and farmland to <strong>Chutanga</strong> and on to Lukla.",
        "<strong>Lukla (2,840 m)</strong> ends a journey that started on a rice terrace at 400 m in eastern Nepal and crossed two valleys, two glaciated cols and a 6,476 m summit. The evening is the end-of-trip dinner with the guide, Sherpas, cook crew and porters, and the point at which tips are given. Seven to eight hours. Overnight at Lukla.",
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
        "The afternoon is free for a long shower and Thamel. Your <strong>summit certificate</strong> for Mera Peak is presented in the evening. Overnight in Kathmandu.",
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
        "Safe travels. Very few people have crossed the Sherpani and West Cols, and fewer still have done it with Makalu base camp at one end and Mera Peak at the other. Baruntse, whose base camp you camped beside, is the question our returning climbers most often ask about.",
      ),
    },
  ],
};
