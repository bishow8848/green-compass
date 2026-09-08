import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb, type ClimbDay,
} from "./types";
import {
  CAMP_TWO_KHUMBU, DINGBOCHE, EVEREST, EVEREST_BC, GORAK_SHEP, KALA_PATTHAR, LHOTSE,
  LOBUCHE_VILLAGE, LUKLA, NAMCHE, PHAKDING, PUMORI, PUMORI_BC, SOUTH_COL, TENGBOCHE, THUKLA,
} from "./places";

/**
 * The 8,000 m expeditions of the Khumbu, and Pumori.
 *
 * Everest, Lhotse and the Everest–Lhotse double share one base camp, one route
 * through the Icefall and the Western Cwm, and one weather window; they differ
 * above Camp 3. Pumori is a different order of trip entirely and sits here
 * because it is climbed from the same valley and looks straight down on the
 * same base camp.
 *
 * The approach from Lukla to Lobuche is identical on all four, so it is written
 * once in `khumbuApproach` rather than four times.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const KHUMBU_PARK_FEES =
  "Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality permit";

const PHERICHE = { lng: 86.8189, lat: 27.8944 };

/**
 * Days 1 to 11 of every expedition in this file: arrival, two working days in
 * Kathmandu, and the walk from Lukla to Lobuche with the standard Khumbu
 * acclimatisation stops. `planWord` is the length quoted in the briefing.
 */
function khumbuApproach(planWord: string): ClimbDay[] {
  return [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel.",
        "Rest is the only item on today's schedule. Most climbers arrive with two or three duffels of equipment shipped or carried in; unpack tonight and lay everything out, because the next two days are spent turning it into a working expedition load.",
        "Your expedition leader calls at the hotel in the evening to introduce themselves and set the plan for the morning. Overnight in Kathmandu.",
      ),
    },
    {
      title: `Kathmandu (1,400 m) – Expedition Briefing and Equipment Inspection`,
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      ...KATHMANDU,
      html: p(
        `A full working day. Your leader takes the ${planWord} plan apart stage by stage — the approach, base camp, the rotations, the oxygen plan, the summit window and the reserve days — and then goes through the route itself.`,
        "The <strong>equipment inspection</strong> is item by item and takes hours: boots, crampons, harness, ascender, belay device, screwgates, down suit, mitts, goggles, headlamps and batteries. Anything missing or unsuitable is bought or hired in Kathmandu today, not discovered at 7,000 m.",
        "Your oxygen mask and regulator are fitted and tested against your own face and hood, which is the single most useful hour of the day. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing, Permits and Final Preparations",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the permits are formally issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the permit is issued, the rules are read out and the waste-management deposit is registered.",
        "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched — some by air to Lukla, the rest by helicopter sling load or yak, depending on the season and the weight.",
        "The afternoon is free, and it is the last one for two months with hot water, restaurants and thick air. Most climbers use it for the last phone calls home rather than for sightseeing. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop when the peak-season schedule applies.",
        "The expedition load is divided between porters and yaks over tea, which on a trip of this size takes a good part of the morning and involves a great deal of cheerful arguing.",
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
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and beyond it the trail turns uphill for 600 m of steady work, with a first view of <strong>Everest</strong> over the Nuptse–Lhotse ridge partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> is the last town — bakeries, an ATM, gear shops and a hot shower. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the expedition.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace looks straight up the valley at Everest, Lhotse, Nuptse and Ama Dablam.",
        "From there to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha, past the monastery with its disputed yeti scalp and the hospital built by Edmund Hillary's foundation in 1966, which is still the referral point for the whole valley.",
        "The afternoon is free. Your leader takes the first oxygen saturation and resting pulse readings tonight, and will keep taking them daily for the next two months. Around 4 hours. Overnight at Namche.",
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
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu. Every Everest expedition since the 1950s has stopped here, and many take a blessing from the Rinpoche before going up the valley. The afternoon ceremony is open to visitors. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, over the Imja Khola above a narrow gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu and home to a great many of the climbing Sherpas working on the mountain this season.",
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
        "The first time above 5,000 m. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep and non-technical, two to three hours on scree and rock.",
        "<strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Island Peak, Taboche and Cholatse arranged around you. On an expedition this is also the first honest read on how each climber is adapting, and your leader watches the group as much as the view.",
        "Back for a late lunch and rest. Four litres of water, more food than anyone feels like, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
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
        "The top of that climb is the <strong>Thukla memorial</strong> — a field of stone chortens and plaques for climbers who died on Everest and the peaks around it, including Scott Fischer and Babu Chiri Sherpa. Every expedition walks through it on the way up, and it is a quiet twenty minutes.",
        "<strong>Lobuche (4,940 m)</strong> is a handful of lodges on the moraine beside the glacier. Around 5 hours. Overnight at Lobuche.",
      ),
    },
    {
      title: "Acclimatisation Day at Lobuche (4,940 m)",
      elevation: "4,940 m",
      accommodation: "Lobuche",
      placeDescription: "The last lodges below the glacier, and the final acclimatisation stop before base camp.",
      ...LOBUCHE_VILLAGE,
      html: p(
        "A deliberate extra night below 5,000 m before committing to base camp. The morning is an acclimatisation walk up the ridge behind the lodges toward <strong>Lobuche East</strong>, gaining 400 to 500 m and coming back down.",
        "The afternoon is rest, and for most people a slightly uneasy one — from tomorrow the expedition proper begins, and there is nothing left to prepare.",
        "Your leader reviews saturation readings and appetite across the team tonight. Anyone whose numbers are drifting the wrong way spends an extra day here rather than starting the expedition already behind. Around 4 hours. Overnight at Lobuche.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const everestExpedition: Climb = {
  region: "Everest Region",
  price: 45000,
  difficulty: "extreme",
  maxAltitude: 8849,
  grade: "AD at extreme altitude",
  expedition: true,
  royalty: true,
  center: [86.9, 27.95],
  zoom: 10,
  content: {
    slug: "everest-expedition",
    title: "Everest Expedition",
    overview:
      "<p><strong>Everest (8,849 m)</strong> from the Nepal side, by the <strong>South Col route</strong> that Hillary and Tenzing pioneered in 1953. It is not the hardest climbing in the Himalaya and nobody who has been there pretends otherwise — the technical crux, the <strong>Hillary Step</strong>, is a short section most competent alpinists would walk past at sea level. What Everest asks for is something else: the capacity to keep functioning, decide well and move safely through the <strong>Khumbu Icefall</strong>, the Western Cwm and the Death Zone above 8,000 m, over fifty-one days, four times.</p><p>We run it the way it should be run. <strong>Two full acclimatisation rotations</strong> before the summit push, a recovery descent to Pheriche in the middle, a generous weather-window wait, and <strong>four reserve days</strong> at the end. One dedicated climbing Sherpa per client throughout, a stated oxygen allocation rather than a vague one, and a leader whose authority to turn a climber round is absolute. The expeditions that get people up and down safely are the ones with days in hand and no incentive to spend them.</p>",
    highlights: [
      ["Summit Everest (8,849 m)", "The highest point on earth, by the South Col route of the 1953 first ascent."],
      ["Two Full Acclimatisation Rotations", "Camp 1 and Camp 2, then a Camp 3 touch at 7,200 m, before the summit push is even considered."],
      ["Recovery Descent to Pheriche", "A deliberate week of thick air mid-expedition, which does more for summit day than another night at base camp."],
      ["One Climbing Sherpa Per Client", "A dedicated 1:1 Sherpa from base camp to the summit, with a stated oxygen allocation."],
      ["Four Reserve Days", "Genuine room for a second summit window, rather than one attempt and a flight home."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April and May</strong>, and effectively nothing else. The pre-monsoon season is when the Icefall Doctors fix the route through the Icefall, when the commercial and Sherpa teams fix rope to the summit, and when the jet stream lifts far enough off the mountain to give summit windows. The usable windows almost always fall between <strong>10 and 25 May</strong>, and a season may offer three or four of them.</p><p>Autumn ascents from the south are now vanishingly rare — the route is not fixed, the Icefall is more broken after the monsoon, and the weather windows are shorter and colder. Winter ascents are the province of a handful of specialists. Our expeditions run in spring only, arriving at base camp in the first week of April so the team has the full acclimatisation period before the windows open.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Technically the South Col route is around <strong>AD</strong>; in every other respect it is extreme. The route runs from <strong>base camp (5,364 m)</strong> through the <strong>Khumbu Icefall</strong> — a moving jumble of seracs and crevasses crossed on ladders, the most objectively dangerous ground on the mountain — to <strong>Camp 1 (6,065 m)</strong> and up the Western Cwm to <strong>Camp 2 (6,400 m)</strong>.</p><p>Above Camp 2 the <strong>Lhotse Face</strong> rises as 1,000 m of hard blue ice at 40 to 50 degrees, climbed on fixed rope to <strong>Camp 3 (7,200 m)</strong>. Then the Yellow Band and the Geneva Spur to the <strong>South Col (7,950 m)</strong>, and the summit day: the Triangular Face, the Balcony, the South Summit, the <strong>Hillary Step</strong> and the final ridge. Ten to fourteen hours to the top from the Col, on oxygen, at temperatures that reach -30°C before wind chill.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 8,000 m summit</strong>, or a 7,000 m summit plus substantial technical Himalayan experience — Ama Dablam, Baruntse, Himlung or equivalent. You must be competent on fixed rope with a jumar for hours at a time, comfortable on ladders over crevasses, able to abseil while exhausted, and experienced with an oxygen mask and regulator.</p><p>We will ask for a climbing CV and we decline applications that do not meet the standard. This is not gatekeeping for its own sake: a climber who is slow on the Lhotse Face endangers their Sherpa, their team and the fixed-rope traffic behind them. The honest progression is a 6,000 m technical peak, then Manaslu or Himlung at 7,000 m or 8,000 m, and then this.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>seven 4-litre bottles of supplementary oxygen</strong> per climber, a <strong>Summit mask and regulator</strong>, and a dedicated <strong>climbing Sherpa carrying his own oxygen</strong> from base camp to the summit and back. Bottles are used from Camp 3 upward, and additional bottles can be added at booking and are refunded in full if unused.</p><p>Base camp holds a <strong>Gamow bag, a full expedition medical kit and emergency oxygen</strong>, and we retain a doctor at base camp on our larger departures. Every climber carries a personal locator and radios to base camp at set times. Our leader's authority to turn a climber round is absolute and is not subject to appeal on the mountain, and no member of our staff receives a summit-contingent bonus that could bias that decision.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>An <strong>8,000 m down suit</strong>, <strong>triple boots</strong> rated for 8,000 m, technical crampons, a lightweight ice axe, a <strong>-40°C sleeping bag</strong>, two insulated mats, expedition mitts and a spare pair, a face mask or balaclava, category 4 glacier glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>We supply <strong>all group ropes, ladders, anchors and camp equipment</strong>, the oxygen system, and the tents at every camp. <strong>Climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong> A full personal kit list, with the specific models our leaders recommend and what can sensibly be hired in Kathmandu, is sent when you book.</p>",
      },
    ],
    faqs: [
      { question: "How much oxygen is included and what if I need more?", answer: "Seven 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. That is enough for a normal ascent from Camp 3 with a comfortable margin. Extra bottles can be added at booking and are refunded in full if unused — we would much rather they came back down full." },
      { question: "How dangerous is the Khumbu Icefall?", answer: "It is the most objectively hazardous ground on the route and it cannot be made safe, only managed. The Icefall Doctors fix and maintain the ladders, and we cross it in the cold hours before dawn when the ice is least active, keep the number of crossings to the minimum the rotation plan allows, and never stop in the exposed sections." },
      { question: "Why descend to Pheriche in the middle of the expedition?", answer: "Because recovery does not happen at 5,364 m. A week at 4,371 m in thicker air, eating properly and sleeping, rebuilds a climber more effectively than any number of rest days at base camp. It costs three days of schedule and it is one of the highest-return decisions in the whole plan." },
      { question: "What is the summit success rate?", answer: "Across recent seasons roughly 65 to 75 percent of our clients who begin the summit push reach the top, with essentially all turn-backs happening at the Balcony or the South Summit on the leader's call. We measure success as climbers returning to base camp uninjured, and on that measure the number is what matters." },
      { question: "What are the base camp facilities like?", answer: "A heated dining tent, individual sleeping tents, a kitchen with a full-time cook crew, toilet and shower tents, solar power and charging, satellite internet, and a communications tent with daily weather forecasts. It is a small village and you will live in it for about six weeks." },
      { question: "How is the summit window decided?", answer: "From dedicated forecasts bought from a specialist mountain forecasting service, cross-checked against what the other teams are seeing, and read against the traffic on the fixed ropes. Your leader looks for wind under about 30 km/h at 8,000 m across a two to three day span, and will let a marginal window go if a better one is behind it." },
      { question: "What is the traffic like on summit day?", answer: "Real, and it is planned around rather than ignored. We aim to depart the South Col outside the main push where the forecast allows, and our leader will use a reserve day to sit out a crowded window rather than queue at the Hillary Step. The reserve days exist for this as much as for weather." },
      { question: "Do you use a helicopter to base camp or between camps?", answer: "Not for climbers. The walk in is the acclimatisation and skipping it would undermine the whole expedition. Helicopters are used for cargo where it is legal and appropriate, and for medical evacuation. Some operators fly clients over the Icefall; we do not, because a climber who has not crossed it cannot descend through it in an emergency." },
      { question: "What happens if I have to turn back?", answer: "You descend with your dedicated Sherpa while the rest of the team continues — which is precisely why the ratio is one to one. The expedition is not compromised and nobody else's climb ends. Turning back is a normal outcome on this mountain and it is treated as one." },
      { question: "What is the payment and refund position if the mountain closes?", answer: "The Department of Tourism royalty and the Icefall Doctor fees are paid in advance and are non-refundable to us, so they are non-refundable to you. Everything else — staff, food, oxygen, logistics — is refunded pro rata if a season is cancelled before it begins. We set this out in writing at booking rather than in a clause." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 5,364 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed Camp 1 (6,065 m), Camp 2 (6,400 m), Camp 3 (7,200 m) and Camp 4 on the South Col (7,950 m).",
      permits:
        "Department of Tourism Everest climbing royalty and permit, Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality permit, and the Icefall Doctor and route-fixing contributions.",
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber from base camp to the summit, carrying his own oxygen, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Seven 4-litre bottles of supplementary oxygen per climber, with a Summit mask and regulator, used from Camp 3 upward.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day, and high-altitude food and fuel at every camp above.",
        "Icefall ladder and fixed-rope training at base camp before the first rotation.",
        "Two full acclimatisation rotations, and a recovery descent to Pheriche with lodge accommodation.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power and charging throughout the expedition.",
        "A Gamow hyperbaric bag, expedition medical kit and emergency oxygen at base camp.",
        "A puja ceremony at base camp before the team enters the Icefall.",
        "Yak, porter and helicopter cargo transport of all expedition equipment between Kathmandu and base camp.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, a route closure, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 51-day expedition on Everest (8,849 m) by the South Col route, with two full acclimatisation rotations, a recovery descent to Pheriche, a dedicated 1:1 climbing Sherpa, seven bottles of oxygen and four reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation at every camp, three meals a day throughout, the Department of Tourism royalty, park and municipality permits, Icefall Doctor and route-fixing fees, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, seven bottles of oxygen with mask and regulator, base camp medical provision, satellite weather forecasts and communications are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonus and tips are not.",
    bestTime: "Apr-May",
    meta: {
      title: "Everest Expedition (8,849 m) — 51 Days, South Col Route | Green Compass Treks",
      description:
        "Climb Everest from Nepal by the South Col route on a 51-day expedition with two acclimatisation rotations, a Pheriche recovery descent, a dedicated 1:1 climbing Sherpa, seven bottles of oxygen and four reserve days.",
      keywords:
        "everest expedition, everest south col route, climb mount everest, everest 8849m, everest expedition cost, everest nepal side, khumbu icefall",
      tags: "Everest, Everest Region, 8000m Expedition, South Col, Khumbu Icefall, Oxygen",
    },
  },
  days: [
    ...khumbuApproach("fifty-one day"),
    {
      title: "Trek from Lobuche (4,940 m) to Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp on the Khumbu glacier, beneath the Icefall and the Western Cwm.",
      ...EVEREST_BC,
      html: p(
        "North along the lateral moraine of the Khumbu glacier to <strong>Gorak Shep (5,164 m)</strong>, the last flat ground and the site of the 1953 base camp, then out onto the glacier itself.",
        "The final two hours pick a line through ice pinnacles and rubble, following the cairns and the yak trail, with the <strong>Khumbu Icefall</strong> ahead getting steadily more legible — and steadily less abstract.",
        "<strong>Everest Base Camp (5,364 m)</strong> is a small city of tents on the moraine, and ours is already standing when you arrive. Your leader shows you the camp, the routine and the radio schedule. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (5,364 m) – Settling In and Systems Check",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, where the team settles into the routine of the next six weeks.",
      ...EVEREST_BC,
      html: p(
        "A day of low effort and a great deal of quiet organisation. Personal tents are set up properly, the mess tent routine and mealtimes are established, and the charging, water and toilet arrangements are explained.",
        "Your leader runs the <strong>oxygen systems check</strong>: mask, regulator and hose fitted to your own face and hood again, at altitude this time, and the flow rates and changeover drill walked through.",
        "The afternoon is spent walking gently on the moraine and doing nothing strenuous. At 5,364 m the first two days are about letting the body catch up, not about proving anything. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before anyone enters the Icefall.",
      ...EVEREST_BC,
      html: p(
        "The <strong>puja</strong>, and on Everest it is not optional. A lama comes up from Pangboche, a stone chorten is built, juniper is burned, and every piece of climbing equipment on the expedition — axes, crampons, harnesses, boots, oxygen masks — is stacked at the altar to be blessed.",
        "No Sherpa on our team will set foot in the <strong>Khumbu Icefall</strong> before it has been done. Prayer flags are strung from the chorten out across the camp, rice is thrown, and the ceremony usually finishes with chang and dancing.",
        "It matters practically as well as spiritually: it is the day the whole team, climbers and Sherpas together, first behaves like one group. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (5,364 m) – Icefall Ladder and Fixed-Rope Training",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, where ladder and rope technique is drilled on the glacier ice.",
      ...EVEREST_BC,
      html: p(
        "A full working day on the ice near camp. Ladders are laid over crevasses and rigged with hand lines, and every climber crosses them repeatedly in crampons until it stops being interesting — first horizontal, then angled, then two lashed together with a bend in the middle.",
        "Alongside that: <strong>jumaring on fixed line, changing over at anchors, abseiling, and arresting a slip on hard ice</strong>. The changeover drill gets the most repetition, because in the Icefall you will do it several hundred times and it has to be automatic.",
        "Your leader watches each climber and keeps anyone who needs it back for the afternoon. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the rest day before the first rotation.",
      ...EVEREST_BC,
      html: p(
        "A genuine rest day before the first rotation. Eating, drinking and sleeping, with a short walk on the moraine in the afternoon and nothing more.",
        "The <strong>Icefall Doctors</strong> — the Sherpa team employed by the SPCC to fix and maintain the route through the Icefall each season — have been working since early April, and today your leader confirms with them and with the other expeditions that the route is open and stable to Camp 1.",
        "Loads for the rotation are packed and weighed in the evening, and the departure time is set for something around two in the morning. Overnight at base camp.",
      ),
    },
    {
      title: "First Rotation – Climb the Khumbu Icefall to Camp 1 (6,065 m)",
      elevation: "6,065 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 6,065 m at the head of the Khumbu Icefall, at the entrance to the Western Cwm.",
      lng: 86.8817,
      lat: 27.9689,
      html: p(
        "Out of camp between two and three in the morning, in the cold, because the <strong>Khumbu Icefall</strong> is at its most stable before the sun reaches it.",
        "What follows is five to seven hours of the most concentrated ground on the mountain: a collapsing, refreezing jumble of seracs and crevasses, crossed on aluminium ladders lashed end to end and climbed on fixed rope, with the route changing week to week as the glacier moves. You clip, cross, unclip, and keep moving. Nobody stops in the exposed sections.",
        "The Icefall relents at the top and opens into the flat white bowl at the entrance to the <strong>Western Cwm</strong>. <strong>Camp 1 (6,065 m)</strong> stands on the snow there. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Climb from Camp 1 (6,065 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp at 6,400 m on the moraine of the Western Cwm, beneath the Lhotse Face.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A short day and a strange one. The <strong>Western Cwm</strong> is a broad, almost level glacier basin walled by Everest, Nuptse and Lhotse, and it is one of the hottest places on the mountain — the sun reflects off three walls of snow with nowhere for the heat to go, and a windless morning here can reach 30°C.",
        "The route weaves between crevasses on fixed line for three to four hours, with the <strong>Lhotse Face</strong> growing ahead all the way.",
        "<strong>Camp 2 (6,400 m)</strong> sits on the moraine at the foot of that face and serves as the expedition's advance base camp — a cook tent, a dining tent and sleeping tents, staffed for the season. Overnight at Camp 2.",
      ),
    },
    {
      title: "First Rotation – Acclimatisation Day at Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, where the first rotation consolidates its altitude.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A day at 6,400 m doing very little, which is exactly the point of a rotation. Sleeping at this altitude is what the body has to learn to do, and it learns it by being made to.",
        "In the morning the team walks an hour or so up toward the bergschrund at the foot of the <strong>Lhotse Face</strong> and back, to look at the ground the next rotation will climb and to gain a little height.",
        "The rest of the day is spent in the dining tent, drinking and forcing food down. Appetite falls off sharply above 6,000 m, and eating badly here is what leaves climbers short three weeks later. Overnight at Camp 2.",
      ),
    },
    {
      title: "First Rotation – Descend from Camp 2 (6,400 m) to Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, reached back through the Icefall at the end of the first rotation.",
      ...EVEREST_BC,
      html: p(
        "An early start down the Cwm to Camp 1 and then back through the <strong>Icefall</strong>, timed once again to be out of it before the sun softens the seracs.",
        "Descending the Icefall is faster than climbing it and no less demanding of attention — the ladders are crossed facing forward with the hand lines taut, and tired legs are the usual cause of trouble.",
        "<strong>Base camp (5,364 m)</strong> by late morning. The first rotation is done: the team has slept at 6,400 m and crossed the Icefall twice, and everybody now knows what that involves. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the first rotation.",
      ...EVEREST_BC,
      html: p(
        "The first of three recovery days, and the hardest one to spend well because most people feel worse today than they did yesterday. That is normal — the fatigue of a rotation arrives late.",
        "The prescription is unglamorous: sleep, drink four to five litres, and eat considerably more than you want to. The cook crew works hard on appetite at this stage of an expedition and the menu improves accordingly.",
        "Your leader takes saturation and pulse readings and reviews them against the baseline from Namche. Anyone whose numbers or weight are dropping gets a conversation rather than a schedule. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the second recovery day after the first rotation.",
      ...EVEREST_BC,
      html: p(
        "The second recovery day, and the one on which people generally start feeling human again. Base camp settles into its rhythm: breakfast late, cards and reading in the dining tent, a walk to another team's camp in the afternoon, dinner early.",
        "There is work going on around you. The <strong>Sherpa team is carrying loads</strong> through the Icefall to stock Camp 2 and Camp 3 with tents, oxygen, food and fuel, and the route-fixing team is working its way up the Lhotse Face toward the South Col.",
        "The evening weather briefing in the communications tent becomes a fixture from about now, and the whole camp starts paying attention to it. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the final day before the second rotation.",
      ...EVEREST_BC,
      html: p(
        "The last day before the second rotation, spent on preparation rather than effort. Personal loads are packed for four nights above base camp, crampons and harnesses are checked after their first hard use, and boots are dried properly.",
        "Your leader briefs the rotation in detail: base camp straight through to Camp 2 in one push this time, a rest day there, and then a climb of the <strong>Lhotse Face</strong> to touch <strong>Camp 3 at 7,200 m</strong> before returning.",
        "The Camp 3 touch is the single most valuable piece of acclimatisation in the expedition, and it is also the first time the team is on genuinely steep ground at altitude. Departure is set for the small hours. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb from Base Camp (5,364 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, reached in a single push on the second rotation.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A long day, and a demonstration of how far the acclimatisation has come. The <strong>Icefall</strong> that took six or seven hours on the first rotation now takes four or five, and the team pushes straight on through Camp 1 and up the Western Cwm without stopping for the night.",
        "Eight to ten hours in total from base camp, most of it in the dark and the cold at the start and in the reflected furnace of the Cwm at the end.",
        "<strong>Camp 2 (6,400 m)</strong> in the afternoon, where the cook crew has been in residence for a fortnight and there is hot soup waiting. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Rest Day at Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the rest day before the Lhotse Face.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A rest day at 6,400 m, which sounds restful and is not — this is roughly the altitude of Denali, and doing nothing here is still work.",
        "The morning is spent sorting the kit for tomorrow and, for most people, staring at the <strong>Lhotse Face</strong>. It is 1,000 m of blue ice at 40 to 50 degrees, with the tents of Camp 3 visible as coloured specks on ledges cut into the middle of it, and it looks improbable from below.",
        "Your leader goes through the fixed-rope traffic protocol for the face: which side to pass on, how to clip past an anchor with people above and below, and what to do if something comes down. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Climb the Lhotse Face to Camp 3 (7,200 m) and Return to Camp 2",
      elevation: "7,200 m",
      accommodation: "Camp 2",
      placeDescription: "Camp 3 on the Lhotse Face at 7,200 m, touched on the acclimatisation rotation.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "The hardest day of the acclimatisation programme and the one that most determines who summits. From the bergschrund the <strong>Lhotse Face</strong> rises as hard blue ice at 40 to 50 degrees, climbed entirely on fixed rope with a jumar.",
        "It is four to six hours of unrelenting work, front-pointing on ice that takes crampons well and forgives nothing, with the Cwm dropping away below and no comfortable place to stop anywhere on it.",
        "<strong>Camp 3 (7,200 m)</strong> is a row of tents on platforms hacked into the face itself. The team touches it, spends an hour or so there, and then abseils and down-climbs back to Camp 2 — this rotation is about the altitude reached, not the night spent.",
        "Back at Camp 2 in the late afternoon, thoroughly worked. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (6,400 m) to Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the second rotation.",
      ...EVEREST_BC,
      html: p(
        "Down the Western Cwm and through the <strong>Icefall</strong> in the cold of the morning, reaching base camp before the sun is properly on the seracs.",
        "The acclimatisation programme is now complete. The team has slept at 6,400 m twice and touched 7,200 m, and physiologically there is nothing more to be gained from going higher until the summit push.",
        "<strong>Base camp (5,364 m)</strong> by midday, and the mood changes noticeably: the work of preparation is finished and everything from here is waiting on weather. Overnight at base camp.",
      ),
    },
    {
      title: "Recovery Descent from Base Camp (5,364 m) to Pheriche (4,371 m)",
      elevation: "4,371 m",
      accommodation: "Pheriche",
      placeDescription: "A lodge village at 4,371 m in the Khumbu valley, used for mid-expedition recovery.",
      ...PHERICHE,
      html: p(
        "Down the glacier and the moraine to <strong>Pheriche (4,371 m)</strong>, losing a thousand metres and gaining what feels like a completely different atmosphere.",
        "This descent is one of the most valuable decisions in the plan and one of the most commonly skipped. <strong>Recovery does not happen at 5,364 m.</strong> Six weeks at base camp erodes a climber steadily; a few days at 4,371 m in thicker air, eating real food and sleeping properly, rebuilds one.",
        "Pheriche has lodges with beds, hot showers, bakeries and the Himalayan Rescue Association clinic. Around 5 to 6 hours. Overnight at Pheriche.",
      ),
    },
    {
      title: "Recovery Day at Pheriche (4,371 m)",
      elevation: "4,371 m",
      accommodation: "Pheriche",
      placeDescription: "The recovery village in the Khumbu valley, where the team rests in thicker air.",
      ...PHERICHE,
      html: p(
        "A day with nothing in it, deliberately. Sleep late, eat everything on the menu, take a hot shower, and walk no further than the bakery.",
        "Most climbers regain a kilogram or two here and, more importantly, sleep properly for the first time in weeks. The improvement in appetite alone is usually obvious within twenty-four hours.",
        "Meanwhile at base camp the <strong>Sherpa team is stocking the South Col</strong> — carrying oxygen, tents, food and fuel to Camp 4 at 7,950 m, which is the heaviest and most dangerous work of the entire expedition and is done by people who will then climb it again with you. Overnight at Pheriche.",
      ),
    },
    {
      title: "Return from Pheriche (4,371 m) to Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, reoccupied for the summit window.",
      ...EVEREST_BC,
      html: p(
        "Back up the valley through <strong>Thukla</strong>, past the memorial chortens, and along the moraine to base camp — the same ground as the walk in, done now by a body that handles it very differently.",
        "The climb takes five to six hours and is a useful gauge: climbers who come up feeling strong are ready, and those who struggle are told so and given more time.",
        "<strong>Base camp (5,364 m)</strong> in the afternoon. From tonight the expedition is entirely governed by the forecast, and the evening weather briefing becomes the most attended event of the day. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, waiting on the forecast for a summit window.",
      ...EVEREST_BC,
      html: p(
        "The waiting starts, and it is a real part of an Everest expedition rather than dead time. The jet stream sits on the summit for most of the year, and the season's windows appear when it lifts — usually somewhere between the tenth and twenty-fifth of May.",
        "Days are spent eating, sleeping, walking gently on the moraine and visiting other camps. Most teams are doing the same thing, and base camp is unusually sociable in this period.",
        "The evening brings the <strong>specialist mountain forecast</strong>, read out in the communications tent: wind speed at 8,000 m, temperature, precipitation and the confidence attached to each. Your leader cross-checks it against what other expeditions are seeing. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the second day of the weather window wait.",
      ...EVEREST_BC,
      html: p(
        "More waiting, and the discipline of it is not to burn energy. Climbers who fill these days with long walks to keep busy arrive at the South Col with less in reserve than those who read a book.",
        "There is one useful piece of work: your leader reviews the <strong>oxygen plan</strong> with each climber individually — flow rates from Camp 3, at the Col, on summit day, and the changeover points where bottles are swapped and cached for the descent.",
        "Masks and regulators are checked one final time against your own hood and goggles, because a mask that ices or leaks at 8,500 m is a very serious problem. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Briefing and Final Preparations at Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, where the summit push is briefed in full.",
      ...EVEREST_BC,
      html: p(
        "The full <strong>summit briefing</strong>, and it is the most important two hours of the expedition. Your leader sets out the schedule day by day, the pairings of climber and Sherpa, the radio times, the oxygen changeover points, and the <strong>turnaround time on summit day</strong>.",
        "The turnaround time is stated as a hard number and it is not negotiable on the ridge. Most accidents on Everest happen on the descent, to people who summited late.",
        "Traffic is also planned. If the forecast window is one that every team on the mountain is aiming at, your leader may choose to go a day either side of it rather than queue at the Hillary Step, and the reserve days exist to make that possible. Overnight at base camp.",
      ),
    },
    {
      title: "Final Weather Wait at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the last day before the summit push departs.",
      ...EVEREST_BC,
      html: p(
        "The last day at base camp before the push, and by now the forecast has firmed up enough to commit. Loads are packed for six nights above base camp, down suits are unpacked and checked, and boots are warmed.",
        "The Sherpa team confirms that Camp 4 is stocked, the route is fixed to the summit and the ropes are in condition. Nothing about the push begins until all three are true.",
        "Dinner is early and the camp is quiet. Departure through the Icefall is set for around two in the morning, and most people do not sleep much. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,364 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the first night of the summit push.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "Into the <strong>Icefall</strong> for the last time on the way up, at two in the morning, and through it faster than ever — the acclimatisation is complete and the ground is entirely familiar.",
        "Straight on through Camp 1 and up the Western Cwm to <strong>Camp 2 (6,400 m)</strong>, seven to nine hours in total, arriving in the reflected heat of the early afternoon.",
        "The rest of the day is spent lying down, drinking and eating. From here the expedition moves upward every day until it summits or turns back. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Rest Day at Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the rest day before the Lhotse Face.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A rest day at 6,400 m built into the push, because arriving at Camp 3 tired is how climbers end up short at the South Col two days later.",
        "The day is spent in the dining tent forcing fluid and food. Appetite at this altitude is close to nonexistent and eating becomes an act of discipline rather than pleasure; your leader will nag, and it is worth being nagged.",
        "In the evening the forecast is checked one final time. If the window has shifted, the team waits here rather than climbing into it — Camp 2 is a perfectly good place to sit for a day and the Col is not. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb the Lhotse Face to Camp 3 (7,200 m)",
      elevation: "7,200 m",
      accommodation: "Camp 3",
      placeDescription: "Camp 3 at 7,200 m, on platforms cut into the Lhotse Face.",
      lng: 86.9186,
      lat: 27.9614,
      html: p(
        "The <strong>Lhotse Face</strong> again, and this time the team stays. Four to six hours of front-pointing on hard blue ice at 40 to 50 degrees, entirely on fixed rope, with loads heavier than on the rotation.",
        "<strong>Camp 3 (7,200 m)</strong> is a row of tents on ledges chopped out of the face. The tents are half-suspended, everyone stays clipped in even inside them, and going outside at night is a roped operation.",
        "This is the first night on <strong>supplementary oxygen</strong> — a low sleeping flow, which makes an enormous difference to how the night goes and to how the following day starts. Overnight at Camp 3.",
      ),
    },
    {
      title: "Summit Push – Climb to the South Col, Camp 4 (7,950 m)",
      elevation: "7,950 m",
      accommodation: "Camp 4, South Col",
      placeDescription: "The South Col at 7,950 m, the last camp before the summit and the start of the Death Zone.",
      ...SOUTH_COL,
      html: p(
        "On oxygen from the moment you leave the tent. The route continues up the Lhotse Face and then traverses right across the <strong>Yellow Band</strong>, a belt of sedimentary rock climbed in crampons on fixed line, and the <strong>Geneva Spur</strong>, a black rock buttress that is the last obstacle before the Col.",
        "Five to seven hours brings the team onto the <strong>South Col (7,950 m)</strong> — a wide, flat, wind-scoured plateau of rock and ice between Everest and Lhotse, and one of the bleakest places on earth. It is littered with the remains of decades of expeditions and it is never still.",
        "You are now in the <strong>Death Zone</strong>, where the body cannot acclimatise and simply degrades. Nobody sleeps. The team rests on oxygen, melts snow, forces fluid, and waits for the departure time. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Everest (8,849 m) and Descend to Camp 2 (6,400 m)",
      elevation: "8,849 m",
      accommodation: "Camp 2",
      placeDescription: "The 8,849 m summit of Everest, the highest point on earth, by the South Col route.",
      ...EVEREST,
      html: p(
        "Leaving the Col somewhere between eight and eleven at night, in the dark, on oxygen, at around -30°C. The <strong>Triangular Face</strong> rises above camp in a long fixed-rope slog to the <strong>Balcony (8,400 m)</strong>, where the first bottle change is made and where a great many turn-backs happen.",
        "Above the Balcony the <strong>south-east ridge</strong> narrows, exposed on both sides, and climbs to the <strong>South Summit (8,750 m)</strong>. Then the traverse, and the <strong>Hillary Step</strong> — technically a short piece of ground and, at that altitude with traffic on it, a serious bottleneck.",
        "The final ridge is a gentle snow crest, and then there is nowhere higher to go. The <strong>summit (8,849 m)</strong> is a small dome hung with prayer flags, looking across Tibet to the north and down on the whole Himalaya to the south. Fifteen minutes is a long stay.",
        "Then down, and the descent is where the danger is. Back along the ridge, down the Step and the Face to the Col, a short rest, and on down to Camp 2 if the party has the reserves. Sixteen to twenty hours of movement. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,400 m) to Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, reached through the Icefall for the last time.",
      ...EVEREST_BC,
      html: p(
        "Down the Western Cwm and through the <strong>Khumbu Icefall</strong> for the last time — the final and, statistically, one of the more dangerous acts of the expedition, done on legs that have very little left.",
        "The team goes early and goes carefully. Ladders are crossed one at a time, nobody hurries and nobody stops in the exposed ground.",
        "<strong>Base camp (5,364 m)</strong>, and the moment of walking off the glacier onto the moraine at the end of a summit push is one that most Everest climbers remember more clearly than the summit itself. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The first of four contingency days, held for a second summit window.",
      ...EVEREST_BC,
      html: p(
        "The first of four reserve days. In a good season they are spent resting and then walking out early; in most seasons at least one of them is used.",
        "They exist because Everest's summit windows are few and short. A team that has committed everything to a single forecast and been turned back at the Balcony by wind has no expedition left; a team with four days in hand has a second attempt.",
        "If a second push is on, the Sherpa team re-stocks the Col and the climbers rest here today. Your leader assesses each climber honestly — a second summit push after a turned-back first one is only offered to people who came down with something in reserve. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...EVEREST_BC,
      html: p(
        "The second reserve day. If a second attempt is running, the team is at Camp 2 tonight rather than here, and this day and the next are the climb to Camp 3 and the Col.",
        "If the mountain has been climbed, the day is spent eating, sleeping and beginning the long process of feeling normal again. Most climbers lose between five and ten kilograms over an Everest expedition and the recovery starts here.",
        "The camp begins to thin out around now as teams finish and leave, and the yak trains start arriving to carry loads down. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The third contingency day, held at base camp before the expedition closes.",
      ...EVEREST_BC,
      html: p(
        "The third reserve day, and the point at which the season's arithmetic becomes clear: either the summit has been reached, or a second window is being climbed, or the expedition is over.",
        "Whichever it is, your leader will say so plainly. Everest does not reward optimism at this stage, and a leader who keeps a tired team on the mountain past the last honest window is the single most dangerous thing on it.",
        "If the expedition is finished, today is when the higher camps come down: Camp 4, Camp 3 and Camp 2 are stripped by the Sherpa team, and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Fourth Reserve Day at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The final contingency day, and the last of the expedition's margin.",
      ...EVEREST_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. In a season with a late window this is the summit day; in most it is not needed and is spent packing.",
        "The <strong>waste management</strong> is done properly today and it is a substantial job. Every expedition is required to bring down what it took up, and the Department of Tourism deposit is refunded against it. Human waste from base camp is carried out in barrels, oxygen bottles are counted back in, and the site is cleared.",
        "The chorten built at the puja stays, with its prayer flags. Everything else goes. Overnight at base camp.",
      ),
    },
    {
      title: "Break Camp at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp on its final day, as the camp comes down and the loads go onto yaks.",
      ...EVEREST_BC,
      html: p(
        "The last day at base camp. Tents come down, barrels are packed and weighed, and the yak train assembles on the moraine to carry six weeks of expedition back down the valley.",
        "It is a long day of unglamorous work and it is also when the team says goodbye to the base camp crew — the cook, the kitchen boys and the camp staff who have run the place for six weeks and who most climbers will remember as fondly as anyone.",
        "A final look up at the Icefall, which by now looks entirely different from the way it did in April. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Everest Base Camp (5,364 m) to Pheriche (4,371 m)",
      elevation: "4,371 m",
      accommodation: "Pheriche",
      placeDescription: "The lodge village in the Khumbu valley, first stop on the walk out.",
      ...PHERICHE,
      html: p(
        "Off the glacier and down the moraine past <strong>Gorak Shep</strong> and <strong>Lobuche</strong>, then the steep descent beside the glacier snout to <strong>Thukla</strong> and the memorial chortens.",
        "Walking through that memorial field on the way down, at the end of a season, is a very different experience from walking through it on the way up.",
        "<strong>Pheriche (4,371 m)</strong> in the afternoon, with beds, hot showers, bakeries and a menu. Around 6 hours. Overnight at Pheriche.",
      ),
    },
    {
      title: "Trek from Pheriche (4,371 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached on the walk out from the mountain.",
      ...NAMCHE,
      html: p(
        "Down the Khumbu valley through <strong>Pangboche</strong>, where many of your Sherpa team live and where several will peel off to go home, and on through <strong>Deboche</strong> to the <strong>Tengboche</strong> saddle.",
        "The trees come back below Tengboche — rhododendron in flower in late May — and with them birdsong, warmth and air that after six weeks feels almost thick enough to chew.",
        "The steep drop to Phunki Thenga and the balcony trail bring you to <strong>Namche Bazaar (3,440 m)</strong>. Around 7 to 8 hours. Overnight at Namche.",
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
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong>.",
        "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. On Everest the Sherpa team crossed the Icefall many more times than you did, carrying more; the thanks should reflect that. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward when the schedule requires it.",
        "Delays are routine rather than exceptional and can run to a full day, which is why the itinerary carries a spare day in Kathmandu at the end. If Lukla closes entirely, a helicopter seat can usually be arranged and your leader handles it.",
        "The afternoon is free. A long shower, a proper meal, and the strange business of being at 1,400 m with more oxygen than you know what to do with. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Rest Day in Kathmandu (1,400 m) and Summit Certificate",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is formally closed and the certificates issued.",
      ...KATHMANDU,
      html: p(
        "A spare day in Kathmandu, which exists partly for the Lukla weather and partly because nobody should fly home the morning after coming off Everest.",
        "The formal business is completed today: the expedition reports to the <strong>Department of Tourism</strong>, the waste deposit is reconciled, and the <strong>summit certificate</strong> is issued and presented.",
        "The rest of the day is yours — shopping in Thamel, a massage, and a team dinner in the evening, which after two months together tends to run long. Overnight in Kathmandu.",
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
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home rather than carried is handled by our office.",
        "Safe travels. Whether or not the summit came, fifty-one days on Everest changes how a person thinks about mountains, and we would be glad to see you back — Lhotse and Makalu are the two our returning Everest climbers ask about most.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const lhotseExpedition: Climb = {
  region: "Everest Region",
  price: 28000,
  difficulty: "extreme",
  maxAltitude: 8516,
  grade: "AD+ at extreme altitude",
  expedition: true,
  royalty: true,
  center: [86.92, 27.95],
  zoom: 10,
  content: {
    slug: "lhotse-expedition",
    title: "Lhotse Expedition",
    overview:
      "<p><strong>Lhotse (8,516 m)</strong> is the fourth-highest mountain on earth and, for most of the season, the quietest 8,000 m peak in Nepal. It shares Everest's base camp, Everest's Icefall, Everest's Western Cwm and Everest's Lhotse Face — and then, at around 7,900 m, the two routes part. Everest traverses right to the South Col; Lhotse goes straight up into the <strong>Lhotse Couloir</strong>, a narrow gully of snow and ice that runs to a small rock summit.</p><p>That couloir is what makes it a genuinely different mountain. It is <strong>steeper than anything on Everest's normal route</strong> — 45 to 50 degrees, pinching to a few metres wide, with a rock band near the exit and no room to pass anyone. It was first climbed in <strong>May 1956 by Ernst Reiss and Fritz Luchsinger</strong>, and it still rewards a climber who wants an 8,000 m summit with real climbing on it and a fraction of the traffic on the ridge above the Col.</p>",
    highlights: [
      ["Summit Lhotse (8,516 m)", "The fourth-highest mountain on earth, by the couloir of the 1956 first ascent."],
      ["The Lhotse Couloir", "A steep, narrow gully of snow and ice at 45–50°, the most sustained climbing on any of Nepal's normal 8,000 m routes."],
      ["Everest's Infrastructure Without Everest's Crowd", "The same base camp, Icefall and Western Cwm, and a summit day with a small fraction of the traffic."],
      ["Two Full Acclimatisation Rotations", "Camp 1, Camp 2 and a Camp 3 touch at 7,200 m before the summit push is considered."],
      ["One Climbing Sherpa Per Client", "A dedicated 1:1 Sherpa from base camp to the summit, with a stated oxygen allocation."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April and May</strong>. Lhotse's season is Everest's season, for the same reasons and on the same timetable: the Icefall Doctors fix the Icefall, the commercial teams fix the Lhotse Face, and the jet stream lifts off the summits in the second half of May. Windows fall between roughly <strong>10 and 25 May</strong>.</p><p>There is one practical difference worth knowing. Because Lhotse shares the fixed rope to Camp 3 and above, the route's condition depends on the Everest teams being on the mountain in numbers — a season with few Everest permits is a harder season on Lhotse. Autumn ascents are rare and unsupported. Our expeditions run in spring only, reaching base camp in the first week of April.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Identical to Everest as far as <strong>Camp 3 (7,200 m)</strong>: the <strong>Khumbu Icefall</strong> on ladders and fixed rope, the <strong>Western Cwm</strong>, and 1,000 m of hard blue ice on the <strong>Lhotse Face</strong> at 40 to 50 degrees. From Camp 3 the route continues up the face to <strong>Camp 4 at around 7,900 m</strong>, a small and exposed camp on the face rather than a plateau like the South Col.</p><p>Above it comes the <strong>Lhotse Couloir</strong>: a gully cut into the face at <strong>45 to 50 degrees</strong>, narrowing to a few metres across, with a short <strong>rock band</strong> near the exit that is climbed in crampons. It is sustained, it is fully committing, and it is a one-lane road — there is no passing. Eight to twelve hours to the summit from Camp 4, on oxygen, at -30°C.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 7,000 m or 8,000 m summit</strong>, or substantial technical Himalayan experience such as Ama Dablam or Baruntse combined with time above 7,000 m. You must be efficient on fixed rope with a jumar for many hours, comfortable on ladders over crevasses, competent to abseil while exhausted, and experienced with an oxygen mask and regulator.</p><p>The couloir adds one requirement Everest's normal route does not: you must be able to <strong>climb steep sustained ice at altitude without slowing the rope</strong>. It is a narrow gully with people above and below and no possibility of overtaking, so a slow climber holds up everyone. We will ask for a climbing CV and we decline applications that do not meet the standard.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>six 4-litre bottles of supplementary oxygen</strong> per climber, a <strong>Summit mask and regulator</strong>, and a dedicated <strong>climbing Sherpa carrying his own oxygen</strong> from base camp to the summit and back. Bottles are used from Camp 3 upward, and extra bottles can be added at booking and are refunded in full if unused.</p><p>Base camp holds a <strong>Gamow bag, a full expedition medical kit and emergency oxygen</strong>. Every climber carries a personal locator and radios in at set times. Our leader's authority to turn a climber round is absolute — and on Lhotse that decision is often made at the foot of the couloir, on the basis of the time on the clock rather than how anyone feels. No member of our staff receives a summit-contingent bonus.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>An <strong>8,000 m down suit</strong>, <strong>triple boots</strong> rated for 8,000 m, technical crampons, a lightweight ice axe, a <strong>-40°C sleeping bag</strong>, two insulated mats, expedition mitts and a spare pair, a face mask or balaclava, category 4 glacier glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>Because of the couloir, bring <strong>crampons you are confident front-pointing in</strong> and take the fit seriously — several hours of steep ice at 8,000 m is not the place for a boot-crampon combination you have not tested. We supply all group ropes, ladders, anchors, camp equipment, tents and the oxygen system. <strong>Climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How does Lhotse compare with Everest?", answer: "Around 330 m lower and, on the summit day itself, more sustained climbing. Everest's ridge above the South Col is long, cold and exposed but never steep; Lhotse's couloir is 45 to 50 degrees for hours. Everest is harder overall because of the altitude and the length of summit day; Lhotse is the better climb." },
      { question: "Is Lhotse really quieter than Everest?", answer: "Substantially. A typical spring season sees several hundred people summit Everest and a few dozen summit Lhotse, on the same fixed ropes as far as Camp 3. The couloir itself is usually shared with a handful of climbers rather than a queue." },
      { question: "Can Lhotse and Everest be climbed on the same trip?", answer: "Yes, and it is one of the great objectives in the Himalaya — two 8,000 m summits in about forty-eight hours from the same Camp 4. We run it as a separate itinerary with its own permit, oxygen plan and reserve days, because attempting it as an afterthought to an Everest permit is how people get hurt." },
      { question: "How narrow is the couloir?", answer: "It pinches to a few metres across in places, with rock walls on both sides. That is what makes it committing: there is no room to pass, no shelter from anything coming down, and no alternative line. Timing and pace on the couloir are the whole tactical problem of summit day." },
      { question: "Where exactly is Camp 4 on Lhotse?", answer: "At around 7,900 m on the Lhotse Face itself, below the entrance to the couloir — a small, steep, exposed camp with tents on cut platforms, not a flat plateau like Everest's South Col. It is a considerably less comfortable night than the Col, which is one reason the summit push from it is kept short." },
      { question: "How much oxygen is included?", answer: "Six 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. That covers a normal ascent from Camp 3 with margin. Additional bottles can be added at booking and are refunded in full if unused." },
      { question: "What is the summit success rate?", answer: "Roughly 60 to 70 percent of our climbers who begin the summit push reach the top. The commonest reason for turning back is time — a party that reaches the foot of the couloir behind schedule will be turned round there, because being caught in it late is the one situation on this route with no good outcome." },
      { question: "Does the recovery descent to Pheriche apply here too?", answer: "Yes, and for the same reason. Recovery does not happen at 5,364 m. Three days at 4,371 m with beds, hot food and thick air rebuilds a climber more effectively than a week of rest days at base camp, and it is one of the highest-return decisions in the plan." },
      { question: "Is the Icefall the same risk as on an Everest expedition?", answer: "Identical, and it is the most objectively dangerous ground on the route. We cross it in the cold hours before dawn, keep the number of crossings to the minimum the rotation plan allows, and never stop in the exposed sections. The Icefall Doctors fix and maintain it for all teams." },
      { question: "What happens if the couloir is out of condition?", answer: "It is normally in condition through the season, but heavy fresh snow can load it and make it unclimbable for days. In that case the team waits at base camp on the reserve days. If it does not clear, the expedition ends without a summit, and your leader will say so rather than send a team into a loaded gully." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 5,364 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed Camp 1 (6,065 m), Camp 2 (6,400 m), Camp 3 (7,200 m) and Camp 4 (7,900 m) on the Lhotse Face.",
      permits:
        "Department of Tourism Lhotse climbing royalty and permit, Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality permit, and the Icefall Doctor and route-fixing contributions.",
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber from base camp to the summit, carrying his own oxygen, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Six 4-litre bottles of supplementary oxygen per climber, with a Summit mask and regulator, used from Camp 3 upward.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day, and high-altitude food and fuel at every camp above.",
        "Icefall ladder and fixed-rope training at base camp before the first rotation.",
        "Two full acclimatisation rotations, and a recovery descent to Pheriche with lodge accommodation.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power and charging throughout the expedition.",
        "A Gamow hyperbaric bag, expedition medical kit and emergency oxygen at base camp.",
        "A puja ceremony at base camp before the team enters the Icefall.",
        "Yak, porter and helicopter cargo transport of all expedition equipment between Kathmandu and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew, cook staff and porters.",
      extra: [
        "Personal technical equipment — down suit, boots, harness, crampons, axe, ascender, belay device and screwgates.",
        "Additional oxygen bottles beyond the six included, refundable in full if unused.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a couloir out of condition, an attempt abandoned for conditions, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 50-day expedition on Lhotse (8,516 m) by the Lhotse Couloir, sharing Everest's base camp and Western Cwm, with two acclimatisation rotations, a recovery descent to Pheriche, a dedicated 1:1 Sherpa and three reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation at every camp, three meals a day throughout, the Department of Tourism royalty, park and municipality permits, Icefall Doctor and route-fixing fees, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, six bottles of oxygen with mask and regulator, base camp medical provision, satellite weather forecasts and communications are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonus and tips are not.",
    bestTime: "Apr-May",
    meta: {
      title: "Lhotse Expedition (8,516 m) — 50 Days, Lhotse Couloir | Green Compass Treks",
      description:
        "Climb Lhotse, the fourth-highest mountain on earth, by the Lhotse Couloir on a 50-day expedition. Everest's base camp and Western Cwm without Everest's crowd, with two rotations, a 1:1 Sherpa and six bottles of oxygen.",
      keywords:
        "lhotse expedition, lhotse 8516m, lhotse couloir, fourth highest mountain, lhotse climbing cost, 8000m expedition nepal, western cwm",
      tags: "Lhotse, Everest Region, 8000m Expedition, Lhotse Couloir, Khumbu Icefall, Oxygen",
    },
  },
  days: [
    // Everything to the second weather-wait day is shared with the Everest
    // expedition: the same approach, base camp, Icefall, rotations and Pheriche
    // recovery. Only the two Everest-specific sentences are rewritten.
    ...everestExpedition.days.slice(0, 32).map((d) => ({
      ...d,
      html: d.html
        .replace("fifty-one day plan", "fifty-day plan")
        .replace(
          "the <strong>Sherpa team is stocking the South Col</strong> — carrying oxygen, tents, food and fuel to Camp 4 at 7,950 m",
          "the <strong>Sherpa team is stocking Camp 4</strong> — carrying oxygen, tents, food and fuel to 7,900 m on the Lhotse Face",
        ),
    })),
    {
      title: "Summit Briefing and Final Preparations at Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, where the Lhotse summit push is briefed in full.",
      ...EVEREST_BC,
      html: p(
        "The <strong>summit briefing</strong>, and on Lhotse it turns on one thing above all others: the clock at the foot of the couloir. Your leader sets out the schedule, the climber and Sherpa pairings, the radio times, the oxygen changeover points, and a <strong>hard turnaround time</strong>.",
        "The couloir is a one-lane road. A party that enters it late is committing to descending it in the dark with people still coming up, and that is the situation the turnaround time exists to prevent. It is stated as a number and it is not negotiable on the face.",
        "Traffic is also planned around: because Lhotse and Everest share Camp 3, your leader will pick a departure that separates the team from the main Everest push where the forecast allows. Overnight at base camp.",
      ),
    },
    {
      title: "Final Weather Wait at Everest Base Camp (5,364 m)",
      elevation: "5,364 m",
      accommodation: "Everest Base Camp",
      placeDescription: "The expedition base camp, on the last day before the summit push departs.",
      ...EVEREST_BC,
      html: p(
        "The last day at base camp before the push. Loads are packed for five nights above base camp, down suits are unpacked and checked, and boots are warmed and dried.",
        "The Sherpa team confirms three things before anything begins: that <strong>Camp 4 is stocked</strong>, that the route is fixed through the couloir, and that the gully is clear of fresh loading. If any of those is not true, the push waits.",
        "Dinner is early and the camp is quiet. Departure through the Icefall is set for around two in the morning. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,364 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the first night of the summit push.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "Into the <strong>Icefall</strong> for the last time on the way up, at two in the morning, and through it faster than ever — the ground is entirely familiar and the acclimatisation is complete.",
        "Straight on through Camp 1 and up the Western Cwm to <strong>Camp 2 (6,400 m)</strong>, seven to nine hours in total, arriving in the reflected heat of the early afternoon.",
        "The rest of the day is spent lying down, drinking and eating. From here the expedition moves upward every day until it summits or turns back. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Rest Day at Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the rest day before the Lhotse Face.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "A rest day at 6,400 m built into the push. Arriving at Camp 4 tired is how climbers end up turning round at the foot of the couloir, and a day here is cheap insurance against that.",
        "The day is spent in the dining tent forcing fluid and food, which at this altitude is work rather than pleasure.",
        "From the moraine there is a clear view of the whole upper route — the Face, Camp 3 on its ledges, and above them the dark slot of the <strong>Lhotse Couloir</strong> running to the summit. It is worth an hour with binoculars and your leader. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb the Lhotse Face to Camp 3 (7,200 m)",
      elevation: "7,200 m",
      accommodation: "Camp 3",
      placeDescription: "Camp 3 at 7,200 m, on platforms cut into the Lhotse Face.",
      lng: 86.9186,
      lat: 27.9614,
      html: p(
        "The <strong>Lhotse Face</strong> again, and this time the team stays. Four to six hours of front-pointing on hard blue ice at 40 to 50 degrees, entirely on fixed rope, with heavier loads than on the rotation.",
        "<strong>Camp 3 (7,200 m)</strong> is a row of tents on ledges chopped out of the face. The tents are half-suspended, everyone stays clipped in even inside them, and stepping outside at night is a roped operation.",
        "This is the first night on <strong>supplementary oxygen</strong>, at a low sleeping flow, and it makes a considerable difference to how the night goes. Overnight at Camp 3.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 4 (7,900 m) on the Lhotse Face",
      elevation: "7,900 m",
      accommodation: "Camp 4",
      placeDescription: "Camp 4 at 7,900 m, a small exposed camp on the Lhotse Face below the couloir.",
      lng: 86.9269,
      lat: 27.9603,
      html: p(
        "A short day and a serious one, on oxygen from the moment you leave the tent. The route continues up the face, and at around 7,900 m — where the Everest teams traverse right toward the Yellow Band and the South Col — <strong>Lhotse goes straight on</strong>.",
        "Three to five hours brings the team to <strong>Camp 4 (7,900 m)</strong>, a handful of tents on cut platforms directly on the face below the couloir. There is no plateau and no shelter; it is a steeper, smaller and less forgiving camp than Everest's South Col.",
        "You are in the <strong>Death Zone</strong> and the body is now degrading rather than adapting. Nobody sleeps. The team rests on oxygen, melts snow, forces fluid and waits for the departure time. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Lhotse (8,516 m) and Descend to Camp 2 (6,400 m)",
      elevation: "8,516 m",
      accommodation: "Camp 2",
      placeDescription: "The 8,516 m summit of Lhotse, the fourth-highest mountain on earth, above the Lhotse Couloir.",
      ...LHOTSE,
      html: p(
        "Leaving Camp 4 somewhere between two and four in the morning, on oxygen, at around -30°C. Within an hour the route enters the <strong>Lhotse Couloir</strong> and stays in it.",
        "The couloir is the climb: a gully cut into the face at <strong>45 to 50 degrees</strong>, narrowing in places to a few metres between rock walls, climbed on fixed rope with a jumar for hours. It is sustained, it is fully committing, and there is no way past anyone in front of you. Near the top a short <strong>rock band</strong> is taken in crampons, and it is the technical crux of the route.",
        "The couloir exits onto the summit ridge, and the <strong>summit (8,516 m)</strong> is a small rocky point with room for two or three people. <strong>Everest's south-east ridge and South Col are directly across the gap</strong>, close enough to see figures on them, with Makalu east and the whole Khumbu below.",
        "The descent abseils and down-climbs the couloir, and it is the most demanding part of the day. Back to Camp 4, then on down the face to Camp 2 if the party has the reserves. Fourteen to eighteen hours of movement. Overnight at Camp 2.",
      ),
    },
    // The descent, the reserve days and the walk out are shared with Everest;
    // one of the four Everest reserve days is dropped, which is the difference
    // between a fifty-one and a fifty-day expedition.
    ...[
      ...everestExpedition.days.slice(39, 43),
      ...everestExpedition.days.slice(44, 51),
    ].map((d) => ({
      ...d,
      html: d.html
        .replace(
          "Everest does not reward optimism at this stage",
          "Lhotse does not reward optimism at this stage",
        )
        .replace(
          "On Everest the Sherpa team crossed the Icefall many more times than you did",
          "Your Sherpa team crossed the Icefall many more times than you did",
        )
        .replace(
          "fifty-one days on Everest changes how a person thinks about mountains, and we would be glad to see you back — Lhotse and Makalu are the two our returning Everest climbers ask about most.",
          "fifty days on Lhotse changes how a person thinks about mountains, and we would be glad to see you back — Everest, Makalu and the Everest–Lhotse double are the three our returning Lhotse climbers ask about most.",
        )
        .replace(
          "walking off the glacier onto the moraine at the end of a summit push is one that most Everest climbers remember",
          "walking off the glacier onto the moraine at the end of a summit push is one that most climbers remember",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const everestAndLhotseExpedition: Climb = {
  region: "Everest Region",
  price: 62000,
  difficulty: "extreme",
  maxAltitude: 8849,
  grade: "AD+ at extreme altitude",
  expedition: true,
  royalty: true,
  center: [86.92, 27.96],
  zoom: 10,
  content: {
    slug: "everest-and-lhotse-expedition",
    title: "Everest and Lhotse Expedition",
    overview:
      "<p>Two 8,000 m summits from one Camp 4, inside about seventy-two hours. <strong>Everest (8,849 m)</strong> and <strong>Lhotse (8,516 m)</strong> share a base camp, an Icefall, a Western Cwm and a face, and their summit routes stay together until roughly 7,900 m. That geography makes the double one of the most elegant objectives in high-altitude mountaineering — and one of the most demanding, because the second summit is climbed on a body that has already been to the top of the world.</p><p>The sequence is <strong>Everest first</strong>, then a rest at Camp 2, then back up the Lhotse Face to Camp 4 and into the <strong>Lhotse Couloir</strong>. It works because the acclimatisation and the oxygen are already there; it fails when climbers arrive at the second summit push with nothing left. We run it over fifty-six days with a full oxygen allocation for both attempts, a dedicated 1:1 Sherpa throughout, and a leader who will call off the second climb without hesitation. <strong>Everest is the objective; Lhotse is the bonus</strong>, and treating it the other way round is how people get hurt.</p>",
    highlights: [
      ["Two 8,000 m Summits in One Expedition", "Everest and Lhotse from the same Camp 4, typically within seventy-two hours of each other."],
      ["Everest (8,849 m) by the South Col Route", "The full standard route — Icefall, Western Cwm, Lhotse Face, South Col, Balcony and the Hillary Step."],
      ["Lhotse (8,516 m) by the Couloir", "A steep, narrow gully at 45–50° with a rock band at the exit, climbed on the same acclimatisation."],
      ["Oxygen for Both Summit Pushes", "Eleven bottles per climber, with a stated allocation for each attempt rather than a shared pool."],
      ["A Dedicated 1:1 Sherpa Throughout", "The same climbing Sherpa on both summits, carrying his own oxygen, from base camp to the top."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April and May</strong>, with the double requiring a slightly wider window than either peak alone: the team needs two climbable days within about a week of each other, on ropes that are fixed to both summits. Realistically that means the second half of May, and it means committing to the first good window rather than waiting for a perfect one.</p><p>The practical implication is that a season with only one narrow window will produce Everest and not Lhotse. That is the normal outcome and we plan for it — the itinerary is priced and structured so that a single-summit season is a success rather than a failure. Our expeditions run in spring only and reach base camp in the first week of April.</p>",
      },
      {
        heading: "Climb Difficulty & the Sequence",
        content:
          "<p>Both routes are described in full on their own pages; what matters here is the sequence. Everest is climbed from the <strong>South Col (7,950 m)</strong> by the Triangular Face, the Balcony, the South Summit and the <strong>Hillary Step</strong>. The team then descends to <strong>Camp 2 (6,400 m)</strong> — not the Col — for <strong>two full rest days</strong> in the thickest air available above base camp.</p><p>Then back up: Camp 2 to <strong>Camp 3</strong>, Camp 3 to <strong>Lhotse Camp 4 (7,900 m)</strong>, and into the <strong>Lhotse Couloir</strong> at 45 to 50 degrees with a rock band near the exit. The second summit day is shorter than the first but is climbed on reserves that are already spent, and it is where the leader's judgement matters most. Roughly a quarter of climbers who summit Everest on this itinerary choose not to go back up, and that is a reasonable decision rather than a failure.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>The most demanding entry requirement we set. We require a <strong>previous 8,000 m summit</strong>, without exception, along with efficiency on fixed rope, competence on steep ice at altitude, and experience with oxygen systems. A climber who has never been above 8,000 m cannot know how their body will behave on the second push, and neither can we.</p><p>We also assess recovery rather than just capacity. The question is not whether you can climb Everest — it is whether you can climb Everest and then, four days later, front-point up a 50-degree couloir at 8,300 m. Climbers with a record of recovering well at altitude on previous expeditions are the ones this itinerary suits.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>eleven 4-litre bottles of supplementary oxygen</strong> per climber — a full allocation for the Everest push and a full allocation for the Lhotse push, planned separately rather than drawn from one pool. You also have a <strong>Summit mask and regulator</strong> and a <strong>dedicated climbing Sherpa</strong> carrying his own oxygen on both summits.</p><p>The decisive safety provision is the leader's authority to stop the second climb. That call is made at Camp 2 on the rest days, against saturation readings, weight loss, appetite, sleep and how the descent from Everest actually went — not against how much anyone wants it. Base camp holds a <strong>Gamow bag, expedition medical kit and emergency oxygen</strong>, and no member of our staff receives a summit-contingent bonus.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>The Everest list, with one addition: a <strong>second pair of expedition mitts and a spare set of goggles</strong>, because the double means two summit days and there is no chance to dry or replace anything between them. An <strong>8,000 m down suit</strong>, <strong>triple boots</strong>, technical crampons, a lightweight axe, a <strong>-40°C sleeping bag</strong>, two mats, a face mask, category 4 glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>Crampon fit matters more here than on Everest alone, because of the couloir. We supply all group ropes, ladders, anchors, camp equipment, tents and the oxygen system. <strong>Climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Why climb Everest first rather than Lhotse?", answer: "Because Everest is the harder and longer summit day, and it should be attempted on the freshest legs. Doing Lhotse first would put the bigger objective on a depleted body, and in practice teams that try it that way rarely get up Everest afterwards." },
      { question: "How long between the two summits?", answer: "Typically seventy-two hours to five days. The team descends from Everest to Camp 2, rests two full days there, and then climbs Camp 3, Camp 4 and the couloir. Weather can stretch that, and the reserve days absorb it." },
      { question: "What proportion of climbers get both summits?", answer: "Across our departures, most who summit Everest go on to attempt Lhotse and around two-thirds of those succeed — so roughly half of the climbers who start the summit push end the expedition with both. A single-summit season is the common outcome and is priced and planned for as a success." },
      { question: "Can I decide on the mountain whether to attempt Lhotse?", answer: "Yes, and that is exactly how it works. The decision is made at Camp 2 during the rest days, jointly with your leader, on the evidence of how you have recovered. Nobody is committed in advance and nobody is charged more for choosing not to go." },
      { question: "Is there a discount if I only summit Everest?", answer: "No, because the costs are incurred either way — two royalties, two permits, eleven bottles of oxygen and a Sherpa contracted for both. Unused oxygen bottles are refunded in full, which is the one element that comes back. We are explicit about this at booking." },
      { question: "Do I need two separate permits?", answer: "Yes. Everest and Lhotse each require their own Department of Tourism royalty and permit, and both are included. This is a significant part of why the double costs what it does relative to either peak alone." },
      { question: "Is the Sherpa the same person for both climbs?", answer: "Yes, and it matters. Your Sherpa knows how you moved on Everest, how you handled the Balcony and how you came down, and that judgement is worth a great deal when deciding whether the second push is sensible. He carries his own oxygen on both." },
      { question: "How much heavier is the oxygen logistics?", answer: "Substantially. Eleven bottles per climber plus the Sherpa's own supply have to be carried to Camp 3, Camp 4 on the South Col and Camp 4 on the Lhotse Face — two separate high camps stocked for the same climber. It is the main logistical difference from a single-peak expedition." },
      { question: "What happens if the weather only allows one summit?", answer: "You climb Everest and come home with one 8,000 m summit, which is what almost everyone on the mountain that season will have done. Your leader will not push a second attempt into a closing window, and the reserve days are used to try rather than to gamble." },
      { question: "Is this harder than climbing them in separate seasons?", answer: "Physically, yes — much. Two 8,000 m summit days inside a week is a serious cumulative load. Logistically and financially it is far more efficient, because one approach, one base camp and one acclimatisation programme serve both. That trade is the whole argument for the double." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 5,364 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed Camp 1 (6,065 m), Camp 2 (6,400 m), Camp 3 (7,200 m), Camp 4 on the South Col (7,950 m) and Camp 4 on the Lhotse Face (7,900 m).",
      permits:
        "Department of Tourism climbing royalties and permits for both Everest and Lhotse, Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality permit, and the Icefall Doctor and route-fixing contributions.",
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber on both summits, carrying his own oxygen, with all equipment, wages, insurance and summit allowances.",
      oxygen:
        "Eleven 4-litre bottles of supplementary oxygen per climber — a full allocation for each summit push, planned separately — with a Summit mask and regulator.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with three hot meals a day, and high-altitude food and fuel at every camp above.",
        "Icefall ladder and fixed-rope training at base camp before the first rotation.",
        "Two full acclimatisation rotations, and a recovery descent to Pheriche with lodge accommodation.",
        "Two rest days at Camp 2 between the Everest and Lhotse summit pushes.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power and charging, a Gamow hyperbaric bag, expedition medical kit and emergency oxygen.",
        "A puja ceremony at base camp before the team enters the Icefall.",
        "Yak, porter and helicopter cargo transport of all expedition equipment between Kathmandu and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa on each summit, and tips for the expedition leader, base camp crew, cook staff and porters.",
      extra: [
        "Personal technical equipment — down suit, boots, harness, crampons, axe, ascender, belay device and screwgates.",
        "Additional oxygen bottles beyond the eleven included, refundable in full if unused.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a second summit not attempted or abandoned, a route closure, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 56-day expedition climbing Everest (8,849 m) and then Lhotse (8,516 m) from the same acclimatisation, with two rotations, a Pheriche recovery descent, two rest days at Camp 2 between summits, eleven bottles of oxygen and a dedicated 1:1 Sherpa.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation at every camp on both routes, three meals a day throughout, both Department of Tourism royalties and permits, park and municipality permits, Icefall Doctor and route-fixing fees, an expedition leader and liaison officer, a dedicated climbing Sherpa per client on both summits, eleven bottles of oxygen with mask and regulator, base camp medical provision and satellite forecasts are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonuses and tips are not.",
    bestTime: "Apr-May",
    meta: {
      title: "Everest and Lhotse Expedition — 56 Days, Two 8,000 m Summits | Green Compass Treks",
      description:
        "Climb Everest (8,849 m) and Lhotse (8,516 m) from one base camp and one acclimatisation programme. A 56-day expedition with two permits, eleven bottles of oxygen, a dedicated 1:1 Sherpa and two rest days between summits.",
      keywords:
        "everest and lhotse expedition, double 8000m summit, everest lhotse combination, two 8000ers one trip, lhotse couloir, everest south col",
      tags: "Everest, Lhotse, Everest Region, 8000m Expedition, Double Summit, Oxygen",
    },
  },
  days: [
    // Everything up to and including the Everest summit day is the Everest
    // expedition itself, with the plan length restated.
    ...everestExpedition.days.slice(0, 39).map((d) => ({
      ...d,
      html: d.html
        .replace("fifty-one day plan", "fifty-six day plan")
        .replace(
          "The turnaround time is stated as a hard number and it is not negotiable on the ridge.",
          "The turnaround time is stated as a hard number and it is not negotiable on the ridge, and it is set tighter on this itinerary because a late descent from Everest ends the Lhotse attempt as well.",
        ),
    })),
    {
      title: "Rest Day at Camp 2 (6,400 m) Between Summits",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, on the first recovery day after Everest.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "The first of two rest days at 6,400 m, and the reason the team came down to Camp 2 rather than staying at the South Col. Recovery at 7,950 m is impossible; at 6,400 m it is at least slow.",
        "The day is spent lying down, on oxygen at a low flow if your leader judges it useful, drinking and eating whatever the cook crew can get into you. Most climbers sleep for a large part of it.",
        "Nobody is asked to decide anything today. The assessment of whether the Lhotse push goes ahead is made tomorrow, when the fatigue from the Everest descent has properly declared itself. Overnight at Camp 2.",
      ),
    },
    {
      title: "Rest Day and Lhotse Decision at Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "Advance base camp in the Western Cwm, where the decision on the second summit is taken.",
      ...CAMP_TWO_KHUMBU,
      html: p(
        "The second rest day, and the day the <strong>Lhotse decision</strong> is made. Your leader assesses each climber individually: oxygen saturation and pulse, weight loss, appetite, sleep, how the Everest descent went, and how much frostnip or exhaustion came down with you.",
        "The Sherpa who climbed Everest with you contributes to that judgement, because he watched you move for sixteen hours and has an opinion worth more than a saturation reading.",
        "Roughly a quarter of climbers who summit Everest on this itinerary decide, or are told, not to go back up. That is a reasonable outcome and it is treated as one — the second summit is a bonus, not the objective. Those stopping descend to base camp tomorrow with a Sherpa. Overnight at Camp 2.",
      ),
    },
    {
      title: "Lhotse Push – Climb from Camp 2 (6,400 m) to Camp 3 (7,200 m)",
      elevation: "7,200 m",
      accommodation: "Camp 3",
      placeDescription: "Camp 3 at 7,200 m on the Lhotse Face, occupied for the second summit push.",
      lng: 86.9186,
      lat: 27.9614,
      html: p(
        "Back onto the <strong>Lhotse Face</strong>, on ground climbed four times already this expedition and now entirely familiar. Four to six hours on fixed rope, and it will feel considerably harder than it did on the Everest push.",
        "That is expected. The legs are not fresh and will not be; the question your leader watches is whether the pace is steady and sustainable, not whether it is fast.",
        "<strong>Camp 3 (7,200 m)</strong>, on oxygen from arrival and through the night. Fluid and food are forced down again, and the departure time for tomorrow is set. Overnight at Camp 3.",
      ),
    },
    {
      title: "Lhotse Push – Climb to Camp 4 (7,900 m) on the Lhotse Face",
      elevation: "7,900 m",
      accommodation: "Camp 4",
      placeDescription: "Camp 4 at 7,900 m, a small exposed camp on the Lhotse Face below the couloir.",
      lng: 86.9269,
      lat: 27.9603,
      html: p(
        "A short day on oxygen throughout. The route continues up the face, and at around 7,900 m — where the Everest teams traverse right toward the Yellow Band, as you did a few days ago — <strong>this time you go straight on</strong>.",
        "Three to five hours brings the team to <strong>Camp 4 (7,900 m)</strong>, a handful of tents on cut platforms directly on the face below the couloir. It is steeper, smaller and less forgiving than the South Col, and the difference is immediately obvious to anyone who has just slept on both.",
        "Rest on oxygen, melt snow, force fluid. The couloir is directly overhead and it is the last thing you see before the headlamps go on. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Lhotse (8,516 m) and Descend to Camp 2 (6,400 m)",
      elevation: "8,516 m",
      accommodation: "Camp 2",
      placeDescription: "The 8,516 m summit of Lhotse, the second of the expedition's two 8,000 m summits.",
      ...LHOTSE,
      html: p(
        "Leaving Camp 4 between two and four in the morning, on oxygen, at around -30°C, and into the <strong>Lhotse Couloir</strong> within the hour.",
        "The couloir is the whole climb: a gully cut into the face at <strong>45 to 50 degrees</strong>, narrowing to a few metres between rock walls, climbed on fixed rope with a jumar for hours, with a short <strong>rock band</strong> near the exit taken in crampons. It is sustained, committing, and impossible to overtake in.",
        "The <strong>summit (8,516 m)</strong> is a small rocky point, and the view from it is the one that makes the double worth doing: <strong>Everest's south-east ridge and the South Col directly across the gap</strong>, close enough to trace the line you climbed four days ago, with Makalu east and Cho Oyu north-west.",
        "The descent abseils and down-climbs the couloir to Camp 4, then continues down the face to Camp 2. Fourteen to eighteen hours of movement, on the second 8,000 m summit day in a week. Overnight at Camp 2.",
      ),
    },
    // The descent through the Icefall, the reserve days and the walk out are the
    // Everest expedition's, with its Everest-specific closing lines rewritten.
    ...everestExpedition.days.slice(39, 51).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "Everest does not reward optimism at this stage",
          "Neither mountain rewards optimism at this stage",
        )
        .replace(
          "fifty-one days on Everest changes how a person thinks about mountains, and we would be glad to see you back — Lhotse and Makalu are the two our returning Everest climbers ask about most.",
          "fifty-six days and two 8,000 m summits change how a person thinks about mountains, and we would be glad to see you back — Makalu and Manaslu are the two our returning climbers ask about most.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const pumoriExpedition: Climb = {
  region: "Everest Region",
  price: 16500,
  difficulty: "extreme",
  maxAltitude: 7161,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [86.82, 27.99],
  zoom: 11,
  content: {
    slug: "pumori-expedition",
    title: "Pumori Expedition",
    overview:
      "<p><strong>Pumori (7,161 m)</strong> is the elegant pyramid standing directly over Everest Base Camp, and it was named by <strong>George Mallory</strong> — <em>Pumori</em>, mountain daughter, for his own. Every trekker who walks up Kala Patthar photographs it without knowing what it is, and every climber who has been on it knows exactly what it is: a steep, serious, avalanche-prone mountain that is a great deal harder than its neighbours suggest.</p><p>First climbed in <strong>1962 by Gerhard Lenser</strong>, it gives sustained climbing on snow and ice at <strong>grade D</strong>, with a summit ridge that is corniced and narrow and a route that is genuinely exposed to serac and avalanche hazard on the lower face. It is the natural objective for a climber who has done Ama Dablam and wants a 7,000 m peak before committing to an 8,000 m one — and it is a harder climb than either Manaslu or Himlung, whatever the numbers say.</p>",
    highlights: [
      ["Summit Pumori (7,161 m)", "Mallory's mountain daughter, the peak that stands directly above Everest Base Camp."],
      ["A True 7,000 m Objective", "The natural step between Ama Dablam and an 8,000 m expedition, with harder climbing than either Manaslu or Himlung."],
      ["Grade D Snow and Ice", "Sustained steep ground with a corniced summit ridge, climbed on fixed rope with a full abseil descent."],
      ["Base Camp Beside Everest's", "Camp within sight of Everest Base Camp and Kala Patthar, with the Khumbu Icefall directly opposite."],
      ["One Climbing Sherpa Per Client", "A dedicated 1:1 Sherpa above base camp, with a stated oxygen allocation held in reserve."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>late September to October</strong>. Pumori is climbed in both seasons and the choice matters more than on most peaks, because the route's hazard is snow-loading. <strong>Autumn is generally the safer half of the year</strong>: post-monsoon the face has settled, the ice is well formed and the avalanche risk is lower and more predictable.</p><p>Spring gives longer days and warmer camps but leaves fresh snow sitting on a steep face, and the route can be shut for a week at a time after a storm. Whichever season, this is a mountain where the leader's willingness to abandon an attempt matters more than the schedule — we run a small number of departures a year and will call one off rather than commit a team to a loaded slope.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp (5,300 m)</strong> the route climbs the south-east face and ridge, gaining a shoulder for <strong>Camp 1 (5,800 m)</strong> on ground that is already steep. Above it the face steepens through <strong>snow and ice at 45 to 60 degrees</strong>, fixed by our Sherpas, to <strong>Camp 2 (6,400 m)</strong> and then a small <strong>high camp at around 6,700 m</strong>.</p><p>Summit day follows the upper face and then the <strong>corniced summit ridge</strong>, narrow and exposed, taken one at a time. Eight to twelve hours from high camp with a long abseil descent. The defining feature of the route is not any single section but its <strong>objective hazard</strong>: significant parts of the lower and middle face lie under serac and avalanche ground, and they are managed by climbing them in the cold hours and never lingering.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> — Ama Dablam, Cholatse, Kyajo Ri or equivalent — and alpine experience at AD+ or above. You must be efficient on steep fixed rope for many hours, competent to abseil from hanging stances while tired, and able to move quickly through hazardous ground when told to.</p><p>That last requirement is not rhetorical. On Pumori the safety margin is created by <strong>speed through the exposed sections</strong>, and a climber who moves slowly on the lower face increases the risk for the whole rope. Your leader assesses this at base camp and has absolute authority to stop a climber going above Camp 1.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Pumori is climbed <strong>without supplementary oxygen</strong>, and none of our clients has needed it for the ascent. We carry <strong>two bottles per rope with emergency masks and regulators</strong> at high camp for medical use, and emergency oxygen with a Gamow bag and full medical kit at base camp.</p><p>Each climber has a <strong>dedicated climbing Sherpa</strong> above base camp. The route is fixed progressively by our Sherpa team as the expedition rotates, and it is stripped on the descent. Radio schedules are kept from every camp, every climber carries a personal locator, and no member of our staff receives a summit-contingent bonus that could bias a decision to turn round.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of technical ice tools, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles, and two headlamps with lithium batteries.</p><p>We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the face and the summit ridge. <strong>Climbers bring their own harness, crampons, ice tools, belay device, ascender and screwgates.</strong> On a route where speed is the safety margin, equipment you can use without thinking is worth carrying from home.</p>",
      },
    ],
    faqs: [
      { question: "Is Pumori harder than an 8,000 m peak like Manaslu?", answer: "Technically, considerably. Manaslu and Himlung are long glacier plods with a short steep section; Pumori is sustained steep snow and ice at grade D with a corniced ridge. Physiologically the 8,000 m peaks are harder because of the altitude and the oxygen logistics. Most climbers who have done both say Pumori was the better climb and Manaslu the bigger day." },
      { question: "How serious is the avalanche risk?", answer: "It is the defining hazard of the route and it is why the mountain has a reputation. Parts of the lower and middle face lie beneath serac and avalanche ground and cannot be avoided, only timed. We climb them in the cold hours, do not stop in them, and will abandon an attempt outright after significant new snow." },
      { question: "Where is base camp?", answer: "At around 5,300 m on the moraine near Gorak Shep, within sight of Everest Base Camp across the Khumbu glacier and directly below Kala Patthar. It is a full expedition base camp with mess, kitchen, storage and toilet tents and a cook crew, and it is one of the more sociable base camps in Nepal in season." },
      { question: "Do we climb Kala Patthar as part of the acclimatisation?", answer: "Yes. Kala Patthar at 5,545 m sits on Pumori's lower southern ridge and is a natural acclimatisation walk from base camp, taking a couple of hours. It also gives the best view anywhere of the Everest–Nuptse–Lhotse wall and, looking the other way, a useful reconnaissance of your own route." },
      { question: "What is the summit success rate?", answer: "Around 40 to 55 percent on our departures, which is honest for a grade D peak with this hazard profile. Attempts abandoned for avalanche conditions account for more turn-backs than anything to do with the climbers themselves." },
      { question: "Is supplementary oxygen used?", answer: "Not for climbing. Pumori is well within the range that a fit acclimatised climber handles without it. We carry two bottles per rope at high camp with masks and regulators for medical use, and emergency oxygen at base camp." },
      { question: "How many camps are there above base?", answer: "Three: Camp 1 at 5,800 m, Camp 2 at 6,400 m and a small high camp at around 6,700 m. The expedition runs one full rotation through Camp 1 and Camp 2 before the summit push, which is the structure that makes a 7,161 m summit day realistic." },
      { question: "Why is Pumori less well known than its neighbours?", answer: "Because everything around it is more famous. It stands over Everest Base Camp, and visitors photographing it are looking at Everest. It also has no easy route, which keeps the numbers down — Pumori sees a handful of expeditions a season against hundreds of people on the trail below it." },
      { question: "Can I combine Pumori with a trek to Everest Base Camp?", answer: "You effectively do. The approach walks the entire Everest Base Camp trail as far as Gorak Shep, and base camp is a short walk from EBC itself. Most teams walk over to visit it on a rest day, which costs nothing and is worth doing." },
      { question: "How does this prepare me for an 8,000 m peak?", answer: "Well, and better than another 6,000 m peak would. Pumori puts you above 7,000 m, teaches you to live at a high camp, and demands efficient movement on steep ground for many hours. Climbers who summit Pumori are generally ready to consider Manaslu, Himlung or Everest." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 5,300 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,800 m), Camp 2 (6,400 m) and high camp (6,700 m).",
      permits:
        "Department of Tourism Pumori climbing royalty and permit, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      guide:
        "Government-licensed expedition leader with technical Himalayan experience, and a liaison officer, with all equipment, wages and insurance.",
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at high camp and at base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on steep ice, fixed-rope work and abseiling from hanging stances.",
        "A full acclimatisation rotation through Camp 1 and Camp 2 before the summit push.",
        "Progressive fixing of the face and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Daily specialist mountain weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Yak and porter transport of all expedition equipment between Lukla and base camp.",
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
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for avalanche conditions, or a departure cancelled by us because the face is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 36-day expedition on Pumori (7,161 m) above Everest Base Camp, with three camps on the mountain, a full acclimatisation rotation, progressive rope fixing on grade D ground and three reserve days.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, park and municipality permits, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, all group ice equipment, progressive rope fixing, emergency oxygen, base camp medical provision and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Sep-Oct",
    meta: {
      title: "Pumori Expedition (7,161 m) — 36 Days | Green Compass Treks",
      description:
        "Climb Pumori (7,161 m), Mallory's mountain daughter above Everest Base Camp, on a 36-day grade D expedition with three camps, a full rotation, progressive rope fixing and a dedicated 1:1 Sherpa.",
      keywords:
        "pumori expedition, pumori 7161m, 7000m peak nepal, everest base camp climbing, pumori climbing cost, technical expedition khumbu",
      tags: "Pumori, Everest Region, Expedition, 7000m Peak, Technical Climb, Kala Patthar",
    },
  },
  days: [
    ...khumbuApproach("thirty-six day"),
    {
      title: "Trek from Lobuche (4,940 m) to Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp on the moraine near Gorak Shep, below the south-east face of Pumori.",
      ...PUMORI_BC,
      html: p(
        "North along the lateral moraine of the Khumbu glacier to <strong>Gorak Shep (5,164 m)</strong>, the last flat ground in the valley and the site of the 1953 Everest base camp, with Pumori filling the sky to the north-west the whole way.",
        "A short climb off the trail brings you onto the moraine shelf where <strong>Pumori Base Camp (5,300 m)</strong> is already standing, within sight of <strong>Everest Base Camp</strong> across the glacier and directly beneath <strong>Kala Patthar</strong>.",
        "The afternoon is spent settling in and looking at the route, which from here is legible from bottom to top: the shoulder for Camp 1, the steep face above it, and the corniced ridge running to the summit. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...PUMORI_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Pangboche, a chorten is built, juniper is burned, and the climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the face before it is done.",
        "The rest of the day is low effort: personal tents arranged, the mess-tent routine established, radio schedules and camp rules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp, and in the evening the lights of Everest Base Camp are visible across the glacier. Overnight at base camp.",
      ),
    },
    {
      title: "Assessment and Training Day at Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...PUMORI_BC,
      html: p(
        "A full working day on the ice above camp. Every climber is taken through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your leader is assessing speed above all else. On Pumori the safety margin is created by moving quickly through the exposed sections of the face, and a climber who is competent but slow is a problem for the whole rope.",
        "Anyone the leader is not satisfied with is told today, at base camp, and does not go above Camp 1. Meanwhile the Sherpa team begins <strong>fixing the lower face</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Base Camp (5,300 m) – Kala Patthar (5,545 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, with the Kala Patthar acclimatisation walk directly above it.",
      ...KALA_PATTHAR,
      html: p(
        "An acclimatisation day with the best viewpoint in the Khumbu attached to it. <strong>Kala Patthar (5,545 m)</strong> is a rocky bump on Pumori's own southern ridge, two hours up from camp on a good path.",
        "From the top the whole <strong>Everest–Nuptse–Lhotse wall</strong> stands opposite, with the Khumbu Icefall pouring down beneath it and Everest Base Camp a scatter of yellow dots on the glacier.",
        "Turn round, though, and the more useful view is behind you: the <strong>south-east face of Pumori</strong> at close range, with the camps and the fixed line already visible. Your leader uses the hour up here to walk the team through the route in detail. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation – Climb to Camp 1 (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp on a shoulder at 5,800 m at the top of the lower face.",
      lng: 86.8214,
      lat: 27.9964,
      html: p(
        "The first time on the mountain, and it is steep from the start. The route leaves base camp onto the lower face and climbs on fixed line for four to five hours, on snow and ice that never really eases.",
        "Part of this ground lies under serac and avalanche terrain, so it is climbed early and quickly, and nobody stops in it. That discipline is set today and kept for the rest of the expedition.",
        "<strong>Camp 1 (5,800 m)</strong> is a set of platforms on a shoulder above the face, with base camp visible directly below and Everest Base Camp beyond it. Overnight at Camp 1.",
      ),
    },
    {
      title: "Acclimatisation Rotation – Descend from Camp 1 (5,800 m) to Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the first night on the mountain.",
      ...PUMORI_BC,
      html: p(
        "Down the fixed ropes by abseil in two to three hours, off the exposed ground before the sun is properly on it.",
        "Sleeping high and recovering low is the mechanism, and at 5,300 m recovery still happens — which is exactly why the rotation returns here rather than staying up.",
        "The afternoon is food, fluid and sleep. The Sherpa team continues carrying loads and <strong>fixing the face toward Camp 2</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, on the rest day before the second rotation.",
      ...PUMORI_BC,
      html: p(
        "A full rest day: eating, drinking four litres, sleeping in the afternoon and staying off the legs.",
        "For anyone who wants a walk, <strong>Everest Base Camp</strong> is an hour across the glacier and most teams go over at some point in the expedition. It is worth seeing, and it is a strange thing to visit as a climber with your own mountain behind you.",
        "Your leader takes saturation and pulse readings and briefs the second rotation in the evening: Camp 1, then the steep middle face to Camp 2 at 6,400 m. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb from Base Camp (5,300 m) to Camp 1 (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Camp 1",
      placeDescription: "The shoulder camp at 5,800 m, reoccupied for the second rotation.",
      lng: 86.8214,
      lat: 27.9964,
      html: p(
        "The lower face again, and noticeably faster — three to four hours where the first rotation took five. The acclimatisation is working and the ground is familiar.",
        "Loads are light: the Sherpa team has already stocked Camp 1 and is working above it, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,800 m)</strong> by late morning, with the rest of the day to lie down and drink before the harder ground tomorrow. Overnight at Camp 1.",
      ),
    },
    {
      title: "Second Rotation – Climb the Face to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,400 m on cut platforms in the upper south-east face.",
      lng: 86.8231,
      lat: 28.0019,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>snow and ice at 45 to 60 degrees</strong>, fixed by the Sherpa team, and it stays that way for five to six hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and by the top of it most people understand why we assessed speed at base camp.",
        "<strong>Camp 2 (6,400 m)</strong> is a handful of tents on platforms hacked into the face. It is small, exposed and steep-sided, and everyone stays clipped in. The night here is the point of the rotation. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (6,400 m) to Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the acclimatisation rotation.",
      ...PUMORI_BC,
      html: p(
        "A long abseil descent — the upper face, Camp 1, and the lower face — timed to be off the exposed ground early. Four to six hours in total.",
        "The acclimatisation programme is now complete. The team has slept at 6,400 m on steep ground, and there is nothing more to be gained from going higher until the summit push.",
        "<strong>Base camp (5,300 m)</strong> by midday, and from here everything waits on the forecast. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...PUMORI_BC,
      html: p(
        "The first of two recovery days after the rotation, and the harder one to spend well because the fatigue of two nights on the face arrives late.",
        "Sleep, drink, and eat past the point of appetite. The cook crew works hard at this stage of an expedition and the menu improves accordingly.",
        "The Sherpa team is on the mountain <strong>fixing the upper face and establishing the high camp at 6,700 m</strong>. Their report on the snow conditions above Camp 2 is the information the summit plan actually rests on. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...PUMORI_BC,
      html: p(
        "The last day before the push, spent on the plan rather than on the hill. Loads are packed for four nights, ice tools are checked, crampons adjusted, and boots dried.",
        "Your leader briefs the summit sequence stage by stage with timings, and sets a <strong>hard turnaround time</strong> for summit day. On a route with this hazard profile the turnaround is set early and is not renegotiated on the ridge.",
        "The satellite forecast arrives in the evening and the go decision is taken on it and on the Sherpa team's report of the upper face. Departure is set for the small hours. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,300 m) to Camp 1 (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Camp 1",
      placeDescription: "The shoulder camp at 5,800 m, on the first night of the summit push.",
      lng: 86.8214,
      lat: 27.9964,
      html: p(
        "The summit push begins in the dark, on the lower face for the third time, and it goes quickly now — three hours or so on entirely familiar ground.",
        "The team is off the exposed section well before the sun reaches it, which is the whole reason for the early start.",
        "<strong>Camp 1 (5,800 m)</strong> in the morning, with the rest of the day to rest and hydrate. An easy evening and an early night. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,800 m) to Camp 2 (6,400 m)",
      elevation: "6,400 m",
      accommodation: "Camp 2",
      placeDescription: "The camp at 6,400 m on the upper face, occupied on the second night of the summit push.",
      lng: 86.8231,
      lat: 28.0019,
      html: p(
        "The sustained middle face again — five to six hours of <strong>45 to 60 degree snow and ice</strong> on fixed rope, with a heavier load than on the rotation.",
        "It is the section that separates a party that will summit from one that will not, and your leader watches the pace closely. A team arriving at Camp 2 late has already lost the next day.",
        "<strong>Camp 2 (6,400 m)</strong> in the afternoon. Melt snow, force fluid and food, and sleep as well as a platform cut into a 50-degree face allows. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,400 m) to High Camp (6,700 m)",
      elevation: "6,700 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,700 m below the summit ridge.",
      lng: 86.8244,
      lat: 28.0044,
      html: p(
        "A deliberately short day — three to four hours up the upper face to the <strong>high camp at 6,700 m</strong>, arriving by late morning so the team has most of the day lying down.",
        "The camp is two or three tents on the smallest usable ground on the mountain, directly beneath the summit ridge, and it is the coldest and least comfortable night of the expedition.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Nobody sleeps much at 6,700 m the night before a summit. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Pumori (7,161 m) and Descend to Camp 2 (6,400 m)",
      elevation: "7,161 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,161 m summit of Pumori, Mallory's mountain daughter, above Everest Base Camp.",
      ...PUMORI,
      html: p(
        "Moving by two in the morning, straight onto the fixed line. The upper face is steep, cold and unrelenting, climbed by headlamp for several hours with Everest Base Camp a scatter of lights a vertical mile below.",
        "The face gives onto the <strong>summit ridge</strong> — narrow, corniced, and exposed on both sides — which is climbed one at a time with the Sherpas probing ahead. It is the section that gives the route its character, and it is not hurried.",
        "The <strong>summit (7,161 m)</strong> is small, and the view is the reason people climb this particular 7,000 m peak: <strong>Everest, Nuptse and Lhotse</strong> directly opposite with the whole Khumbu Icefall and Western Cwm laid out beneath them, Cho Oyu west, Makalu east, and the Tibetan plateau running north.",
        "The descent is a long sequence of abseils down the face to high camp and on to Camp 2. Ten to fourteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,400 m) to Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...PUMORI_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. Leaving rope on a mountain is neither safe for anyone following nor acceptable practice, and clearing it properly takes hours.",
        "The lower face is again timed for the cold of the morning, and nobody stops in the exposed ground even on the last descent.",
        "<strong>Base camp (5,300 m)</strong> in the afternoon, with thick air, a hot meal and the first unbroken sleep in four days. Five to seven hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...PUMORI_BC,
      html: p(
        "The first of three reserve days, and on Pumori they are used more often than not. The commonest reason is not storm but snow-loading: a face that is climbable on Monday can be an unacceptable avalanche risk on Wednesday.",
        "If the summit was missed, the team rests today and goes back up tomorrow, with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, the day is rest, and most teams walk across to <strong>Everest Base Camp</strong> in the afternoon simply because it is there. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Pumori Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...PUMORI_BC,
      html: p(
        "The second reserve day. Three of them exist because this mountain's conditions change faster than its weather does, and one day in hand is frequently not enough.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the higher camps come down — Camp 2, the high camp and Camp 1 are stripped by the Sherpa team, and everything comes off the face. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Pumori Base Camp",
      placeDescription: "The final contingency day, and the last night in the expedition base camp.",
      ...PUMORI_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything the expedition brought up goes back down, the barrels are packed, the site is cleared, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last hour of daylight looking across at Everest, which after four weeks under Pumori looks like a different mountain from the one in the photographs. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Pumori Base Camp (5,300 m) to Pheriche (4,371 m)",
      elevation: "4,371 m",
      accommodation: "Pheriche",
      placeDescription: "A lodge village at 4,371 m in the Khumbu valley, first stop on the walk out.",
      ...PHERICHE,
      html: p(
        "Off the moraine past <strong>Gorak Shep</strong> and down to <strong>Lobuche</strong>, then the steep descent beside the glacier snout to <strong>Thukla</strong> and the memorial chortens.",
        "Walking through that memorial field at the end of an expedition is a different experience from walking through it on the way up, and most teams take longer over it than they did in the other direction.",
        "<strong>Pheriche (4,371 m)</strong> in the afternoon, with beds, hot showers, bakeries and a menu after four weeks of expedition food. Around 6 hours. Overnight at Pheriche.",
      ),
    },
    {
      title: "Trek from Pheriche (4,371 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached on the walk out from the mountain.",
      ...NAMCHE,
      html: p(
        "Down the Khumbu valley through <strong>Pangboche</strong>, where several of your Sherpa team live, and on through <strong>Deboche</strong> to the <strong>Tengboche</strong> saddle.",
        "The trees come back below Tengboche, and with them birdsong, warmth and air that after a month feels almost thick enough to chew.",
        "The steep drop to Phunki Thenga and the balcony trail bring you to <strong>Namche Bazaar (3,440 m)</strong>. Around 7 to 8 hours. Overnight at Namche.",
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
        "Safe travels. Pumori is the peak our climbers most often use as the step to an 8,000 m expedition, and Manaslu, Himlung and Everest are the three that usually come up next.",
      ),
    },
  ],
};
