import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb,
} from "./types";
import {
  AMPHU_LAPCHA, AMPHU_LAPCHA_BC, CHUTANGA, KHARE, KONGME_DINGMA, KOTHE, LUKLA,
  MERA_HIGH_CAMP, MERA_PEAK, NAMCHE, PANGBOCHE, SETO_POKHARI, TENGBOCHE, THAGNAK, THULI_KHARKA,
} from "./places";

/**
 * Mera Peak and its two variants.
 *
 * All three walk the Hinku valley — the quiet side of the Khumbu, reached over
 * the Zatrwa La rather than up the Dudh Koshi — and share the Kothe, Thagnak
 * and Khare stages. They diverge after the summit: the standard itinerary and
 * the short one turn round, while the Amphu Lapcha route keeps going north
 * over a 5,845 m col into the Imja valley.
 */

const HINKU_PERMITS_MERA =
  "Nepal Mountaineering Association climbing permit for Mera Peak, Makalu Barun National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.";

const MERA_SHERPA =
  "One climbing Sherpa for every two climbers above Khare, with all their equipment, wages and insurance.";

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const BEST_TIME_HINKU = {
  heading: "Best Time to Climb",
  content:
    "<p><strong>April to May</strong> and <strong>October to November</strong> are the seasons, and the Hinku valley has a quirk worth knowing: it is wetter and greener than the Khumbu on the other side of the Zatrwa La, catching more of the monsoon's tail. That means autumn departures in early October can still meet cloud and soft snow on the pass, and the settled weather usually arrives a week or two later here than at Namche.</p><p>Spring gives warmer nights at Khare and a better-consolidated glacier for the summit slope, and the rhododendron forest below Kothe is in flower. Autumn gives the sharper air and the bigger views from the top, where on a clear morning you can see <strong>five 8,000 m peaks</strong> at once. Winter is climbable in theory but the Zatrwa La becomes a serious obstacle in snow, and the monsoon closes the valley entirely.</p>",
};

const INSURANCE_6500 = {
  heading: "Travel Insurance",
  content:
    "<p>Insurance covering <strong>mountaineering to 6,500 m</strong> is mandatory and is checked before permits are issued. Mera is high — higher than any other trekking peak in Nepal — and a policy written for trekking to 5,000 m does not cover the summit day, the glacier, or the high camp. Read the altitude limit and the activity list separately, because plenty of policies cover 6,500 m of walking and exclude roped glacier travel in the next clause.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. The Hinku is remote: from Khare there is no road, no hospital and no vehicle, and the nearest airstrip is a two-day walk over a 4,610 m pass. Helicopters do reach Khare and Kothe in good weather, and they fly against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
};

// ─────────────────────────────────────────────────────────────────────────────

export const meraPeakClimbing: Climb = {
  region: "Everest Region",
  price: 2850,
  difficulty: "challenging",
  maxAltitude: 6476,
  grade: "PD",
  center: [86.84, 27.72],
  zoom: 10,
  content: {
    slug: "mera-peak-climbing",
    title: "Mera Peak Climbing",
    overview:
      "<p><strong>Mera Peak (6,476 m)</strong> is the highest trekking peak in Nepal, and the strange, appealing thing about it is that the hardest part is not the climbing. The summit slope is a broad glacier at 30 degrees with one short steep step below the top — technically easier than Island Peak — but it finishes 287 m higher, on a summit where the air holds barely half the oxygen of sea level. Mera is an <strong>altitude climb</strong>, and it is the peak that teaches people what altitude actually feels like.</p><p>The approach is the other half of its appeal. Rather than joining the crowds up the Dudh Koshi, the route crosses the <strong>Zatrwa La (4,610 m)</strong> out of Lukla within two days and drops into the <strong>Hinku valley</strong> — a deep, forested, almost empty trough where you may pass six other trekkers in a week. From the summit the view is the one people come for: <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong>, five of the world's six highest mountains, laid out in a single sweep.</p>",
    highlights: [
      ["Summit Mera Peak (6,476 m)", "Stand on the highest trekking peak in Nepal, 287 m above Island Peak and a genuine altitude challenge."],
      ["Five 8,000 m Peaks from the Top", "Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga visible together on a clear summit morning."],
      ["The Hinku Valley", "Cross the Zatrwa La into a deep forested valley that sees a fraction of the Khumbu's traffic."],
      ["Straightforward Glacier Climbing", "A broad 30° snow slope with one short steep step — no technical difficulty, all of it about the altitude."],
      ["High Camp at 5,800 m", "Sleep on the glacier shoulder with the sunrise on Makalu, one of the great campsites in Nepal."],
    ],
    sections: [
      BEST_TIME_HINKU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Mera is graded <strong>PD</strong>, and on pure technique it is the easiest 6,400 m summit anyone can reasonably attempt. From <strong>high camp at 5,800 m</strong> the route follows a broad, gently angled glacier at around <strong>25 to 30 degrees</strong>, roped as a team for crevasse protection, for four to five hours. There is one <strong>short steep step of about 40 to 45 degrees</strong> immediately below the central summit, climbed on fixed rope, and that is the whole of the technical content.</p><p>What makes it hard is the number. At 6,476 m you are working on roughly <strong>47 percent of sea-level oxygen</strong>, and the summit day starts around two in the morning at temperatures that regularly reach -20°C before wind chill. People do not fail on Mera because the slope is steep; they fail because they cannot eat, cannot sleep at high camp, and run out of energy at 6,200 m. Six to eight hours up, three down, and every hour of it above the height of Kilimanjaro.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No technical climbing experience is required, and Mera is regularly climbed as a first Himalayan summit. What it demands instead is <strong>endurance and a proven ability to acclimatise</strong>. We ask for previous multi-day trekking above 4,000 m, and we would rather you have been to 5,000 m before. Four to six months of hill training, with long back-to-back days rather than short hard sessions, is the right preparation.</p><p>The itinerary is built around the altitude problem. It crosses the <strong>Zatrwa La (4,610 m)</strong> early and then <strong>drops to Kothe at 3,600 m</strong> — a deliberate loss of a thousand metres that feels like backwards progress and is the single most valuable thing in the schedule. From there the profile climbs steadily through Thagnak and Khare with a rest day at each, plus a spare day held for the summit. Your guide takes oxygen saturation and pulse readings every evening from the pass onward.</p>",
      },
      INSURANCE_6500,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots are essential on Mera</strong>, not advisable — high camp at 5,800 m and a summit morning at -20°C or colder is where single boots produce frostbite. Bring a <strong>-30°C sleeping bag</strong> or a -20°C bag with a liner, a heavy expedition down jacket, insulated over-trousers, a full waterproof shell, mitts as well as gloves, a balaclava or buff, category 4 glacier glasses and goggles.</p><p>Also pack gaiters, a headlamp with lithium batteries (alkalines die at that temperature), factor 50 sunscreen and lip balm, an insulated bottle, and a 40 litre pack for the summit day. We supply the <strong>rope, snow bars, ice screws and anchors</strong>, and our Sherpas fix the summit step. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Is Mera Peak really easier than Island Peak?", answer: "Technically, yes — a broad 30° glacier with one short steep step, against Island Peak's hundred metres of 50° ice and a corniced ridge. Physically, no. Mera is 287 m higher and the summit day is longer and colder, and more people turn back on Mera than on Island Peak for exactly that reason." },
      { question: "Which is the true summit — there seem to be three?", answer: "Mera has a north summit (6,476 m), a central summit (6,461 m) and a south summit (6,065 m). Commercial groups almost always climb the central summit, which is the high point of the standard glacier route. The north summit needs an extra section of exposed climbing and we can arrange it for strong parties on request." },
      { question: "Why does the itinerary go down to Kothe at 3,600 m?", answer: "Because that thousand-metre drop after the Zatrwa La is what makes the rest of the trip work. Crossing a 4,610 m pass on day five and then sleeping low is textbook acclimatisation, and the Hinku valley gives no alternative route anyway. It feels like losing ground and it is the opposite." },
      { question: "How cold is high camp?", answer: "Regularly -15°C to -20°C inside the tent overnight, and colder outside before dawn. This is the coldest night of any trekking peak in Nepal, which is why we specify a -30°C bag and double boots and why we keep the high camp stay to a single night." },
      { question: "Can we skip high camp and climb from Khare?", answer: "Some operators do, and it makes for a fourteen-hour summit day with 1,400 m of ascent starting at midnight. We do not recommend it and do not sell it as standard: the extra night at 5,800 m costs one uncomfortable sleep and buys a very large increase in the chance of standing on top." },
      { question: "What are the lodges like in the Hinku valley?", answer: "Simpler and fewer than the Khumbu's — basic stone and timber lodges at Kothe, Thagnak and Khare, with plywood partitions, shared toilets and a stove in the dining room only. There is no bakery, no ATM, and the menu is short. It is also, for many people, why they preferred this valley." },
      { question: "Is the Zatrwa La difficult?", answer: "It is a long day rather than a technical one — around 1,600 m of ascent from Chutanga to a 4,610 m pass, on rough ground with some scrambling near the top. In fresh snow it becomes serious and crampons come out. It is also the day most people find hardest before the summit." },
      { question: "How many days does the summit push take from Khare?", answer: "Two. Khare to high camp is four to five hours with a moderate load, and then the summit day itself is six to eight hours up and around three back down to Khare. The spare day sits after that in case either has to be repeated." },
      { question: "Do I need supplementary oxygen?", answer: "No, and we do not carry it as standard for climbing. We do carry emergency oxygen with the guide for medical use, along with a pulse oximeter and a portable altitude chamber on our larger departures. Nobody breathes bottled oxygen to reach the summit of Mera." },
      { question: "Can Mera be combined with Island Peak?", answer: "Yes, and it is one of the best combinations in Nepal — Mera first for the altitude, then over the Amphu Lapcha or back around to Chhukung for Island Peak, which will feel dramatically easier with 6,476 m already behind you. We run it as a dedicated itinerary of around 21 days." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping: "Tented accommodation at Mera high camp (5,800 m), with a mess tent and toilet tent.",
      permits: HINKU_PERMITS_MERA,
      sherpa: MERA_SHERPA,
      extra: [
        "Cook and kitchen crew for the high camp night.",
        "A full training day at Khare covering crampons, ice axe, rope teams, fixed-line ascent and abseil technique.",
        "Fixing of the summit step by our climbing Sherpas ahead of the summit push.",
        "Porter transport of group climbing equipment and camp gear from Khare to high camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 15,
    gearRentalDays: 15,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "An 18-day itinerary over the Zatrwa La into the Hinku valley and up the glacier to the summit of Mera Peak (6,476 m), with rest days at Thagnak and Khare, a high camp at 5,800 m and a spare day for the weather.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit and national park fees, a licensed climbing guide with one Sherpa per two climbers, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Mera Peak Climbing (6,476 m) — 18 Days | Green Compass Treks",
      description:
        "Climb Mera Peak, the highest trekking peak in Nepal, in 18 days through the quiet Hinku valley. Glacier route at 30°, high camp at 5,800 m, five 8,000 m peaks from the summit, and a spare day for the weather.",
      keywords:
        "mera peak climbing, mera peak 6476m, highest trekking peak nepal, hinku valley, zatrwa la, mera peak itinerary, mera peak cost",
      tags: "Mera Peak, Hinku Valley, Everest Region, Peak Climbing, 6000m Peak, Highest Trekking Peak",
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
        "Welcome to Nepal. You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Nothing is asked of you today beyond resting and letting the time difference settle. If you have the energy, Thamel's gear shops are two minutes from the door and stock most of what a climber discovers they left at home — down mitts and lithium batteries especially.",
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
        "The full briefing at the hotel. Your guide covers the eighteen-day plan, the deliberate drop to Kothe and why it matters, the summit day hour by hour, and the honest statistics on who turns back and where.",
        "Then the <strong>equipment check</strong>, which on Mera focuses hard on warmth. Boots are tried with crampons on, and if you have brought single boots your guide will say so and arrange doubles — high camp at 5,800 m is not the place to discover the difference. Harnesses are fitted over the layers you will actually climb in.",
        "Our office lodges the <strong>NMA climbing permit</strong> and the Makalu Barun National Park paperwork today, which needs your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Chutanga (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chutanga",
      placeDescription: "A small clearing of lodges in rhododendron forest below the Zatrwa La, east of Lukla.",
      ...CHUTANGA,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "And then, almost immediately, the parting of the ways. While everyone else on the flight turns north up the Dudh Koshi toward Namche, our trail turns <strong>east</strong>, climbing through rhododendron and pine on a narrow path that within twenty minutes has nobody else on it.",
        "<strong>Chutanga (3,050 m)</strong> is a handful of simple lodges in a forest clearing beneath the Zatrwa La. The afternoon is free to rest — tomorrow is an acclimatisation day, and the day after is the hardest walking of the trip. Around 3 to 4 hours. Overnight at Chutanga.",
      ),
    },
    {
      title: "Acclimatisation Day at Chutanga (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chutanga",
      placeDescription: "The forest camp below the Zatrwa La, where the first acclimatisation walk is made.",
      ...CHUTANGA,
      html: p(
        "A day that looks generous on paper and earns itself tomorrow. We walk up the ridge toward the pass, gaining <strong>500 to 600 m</strong> to around 3,600 m, and come back down to sleep — the same climb-high-sleep-low principle that Namche uses, applied to a valley with no Namche in it.",
        "The path climbs through moss-hung rhododendron into open ground with a first view of the ridges you cross tomorrow, and of the Dudh Koshi valley falling away west.",
        "Back at Chutanga by early afternoon. Your guide takes the first oxygen saturation readings this evening, and the crew repacks loads for the pass. Around 4 hours. Overnight at Chutanga.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "A high yak pasture on the eastern side of the Zatrwa La, at the head of the Hinku valley.",
      ...THULI_KHARKA,
      html: p(
        "The hardest day before the summit, and the one that decides how the rest of the trip feels. From Chutanga the trail climbs steadily for four to five hours on rough ground, through boulder fields and up a series of false crests, each of which looks like the pass and is not.",
        "The <strong>Zatrwa La (4,610 m)</strong> is a narrow notch in the ridge, marked with cairns and prayer flags and often windy. In fresh snow it is a serious crossing and crampons come out; in clear weather it opens onto a view east across the whole <strong>Hinku valley</strong> with Mera itself somewhere behind the ridges ahead.",
        "The descent is steep and loose to <strong>Thuli Kharka (4,300 m)</strong>, a yak pasture with a couple of basic lodges. Seven to eight hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Trek from Thuli Kharka (4,300 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "A riverside lodge settlement in the forested floor of the Hinku valley.",
      ...KOTHE,
      html: p(
        "A descent of 700 m, and every metre of it is an investment. Losing height after a 4,610 m pass is exactly what your body needs, and this is the day people question the itinerary and later credit it.",
        "The trail traverses the hillside and then drops steeply through rhododendron, birch and juniper into the valley floor, following the <strong>Hinku Khola</strong> upstream on a path that is often muddy and sometimes cut into the bank above the water.",
        "<strong>Kothe (3,600 m)</strong> is a line of simple lodges on the riverbank with forest on both sides. It is warm, it is green, and it is the last thick air of the trip. Around 5 to 6 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thagnak (4,350 m)",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "A summer grazing settlement on the moraine below the Hinku Nup and Shar glaciers.",
      ...THAGNAK,
      html: p(
        "Back up, gently. The trail follows the Hinku Khola north through the last of the trees, past the small gompa and painted rock at <strong>Gondishung</strong>, where a 200-year-old shrine sits under an overhanging boulder.",
        "The valley opens out as the forest thins, and the walls rise on both sides — <strong>Mera's south face</strong> ahead and the Kusum Kanguru ridge behind. This is the point at which the Hinku stops feeling like a forest walk and starts feeling like the Himalaya.",
        "<strong>Thagnak (4,350 m)</strong> is a summer grazing settlement of stone huts and two or three lodges on the moraine. Around 4 to 5 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Acclimatisation Day at Thagnak (4,350 m) – Sabai Tsho",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "The moraine settlement below the glaciers, with the glacial lake of Sabai Tsho above it.",
      ...THAGNAK,
      html: p(
        "An acclimatisation day with somewhere worth going. We walk up the moraine to <strong>Sabai Tsho</strong>, a glacial lake at around 4,700 m held behind a wall of debris below the Hinku Nup glacier.",
        "The lake burst its moraine dam in 1998, sending a flood down the valley that swept away bridges and pasture as far as Kothe — the scoured banks are still visible on the walk in, and the lake is now monitored. Standing above it is a plain lesson in what these valleys do.",
        "Back down to Thagnak for the afternoon, with 350 m gained and lost. Rest, eat and drink four litres. Around 4 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Trek from Thagnak (4,350 m) to Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, on the moraine directly below the Mera glacier.",
      ...KHARE,
      html: p(
        "A short day with a large altitude gain, taken slowly. The trail climbs the lateral moraine of the <strong>Dig glacier</strong> on loose rock, with the valley narrowing and the ice appearing on both sides.",
        "Above the moraine crest the ground opens into a bowl and <strong>Mera Peak</strong> comes into full view for the first time — the broad white glacier of the standard route running up to a summit that from here looks deceptively close.",
        "<strong>Khare (5,045 m)</strong> is a cluster of stone lodges on the moraine, the highest settlement in the valley and the base for the climb. It is cold at night and the air is thin enough that everyone is walking slowly. Around 4 hours. Overnight at Khare.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The climbing base of the Hinku, where the glacier skills are taught before the summit push.",
      ...KHARE,
      html: p(
        "The training day, and it is a full one. The morning is spent on the glacier ice above Khare: <strong>fitting crampons and walking in them</strong> on flat and angled ice, ice axe technique including self-arrest, moving as a roped team with correct spacing, ascending fixed line on a jumar, and abseiling.",
        "Rope-team travel gets the most attention here, because the Mera glacier is crevassed and the summit route is climbed roped rather than on fixed line for most of its length. Your guide watches each climber individually and works with anyone who needs it.",
        "The afternoon is rest and a final gear sort — what goes to high camp and what stays in Khare. Everyone eats early and sleeps. Around 4 hours of training. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Mera High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Mera High Camp",
      placeDescription: "A tented camp on a rock shelf above the Mera La, at the edge of the glacier facing Makalu.",
      ...MERA_HIGH_CAMP,
      html: p(
        "Crampons on within an hour of leaving Khare. The route climbs steeply onto the glacier and up to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hinku and Hongu valleys, moving roped as a team from here on.",
        "From the col the route traverses the glacier north-east and climbs to a rock shelf at <strong>5,800 m</strong>, where the tents go up on the only flat ground for some distance. Four to five hours in total with a moderate load.",
        "The camp is exceptional and uncomfortable in equal measure. It faces east directly at <strong>Makalu</strong>, with Everest and Lhotse to the north and Kanchenjunga on the horizon, and it is cold enough that dinner is eaten in a down jacket at four in the afternoon. Everyone is in a sleeping bag by six. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Mera Peak (6,476 m) and Descend to Khare (5,045 m)",
      elevation: "6,476 m",
      accommodation: "Khare",
      placeDescription: "The 6,476 m summit of Mera, the highest trekking peak in Nepal, above the Hinku and Hongu valleys.",
      ...MERA_PEAK,
      html: p(
        "Tea at one, moving by two, and cold in a way that is hard to describe until you have done it. The group ropes up outside the tents and starts up the glacier by headlamp on a broad slope of <strong>25 to 30 degrees</strong> — never steep, never technical, and utterly relentless.",
        "You climb through the coldest hours before dawn, and then the sun arrives somewhere around 6,100 m and changes everything. The last obstacle is a <strong>short steep step of 40 to 45 degrees</strong> below the central summit, fixed by our Sherpas the day before and climbed on a jumar.",
        "From the <strong>summit (6,476 m)</strong> the view is what the whole trip was for: <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong> — five of the six highest mountains on earth — with Baruntse, Chamlang and Ama Dablam filling the space between them.",
        "Then down, all the way: high camp, the Mera La, the glacier, and off the ice to <strong>Khare</strong> in the afternoon. Nine to twelve hours in total. Overnight at Khare.",
      ),
    },
    {
      title: "Spare Day at Khare (5,045 m) for Summit Contingency",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The reserve day held at Khare for weather, conditions, or a second summit attempt.",
      ...KHARE,
      html: p(
        "The day held in reserve, and on Mera it is used more often than on any other trekking peak we run — high camp is exposed and the summit slope is entirely at the mercy of wind.",
        "If yesterday was turned back, the group returns to high camp today and climbs tomorrow. Your guide makes that call at Khare on the forecast, the state of the party and the snow, not on the calendar.",
        "If the summit went to plan, this becomes a genuine rest day at Khare before the long walk out, or the group starts down to Kothe early and banks a spare day against the Lukla flights. Overnight at Khare or Kothe.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "The riverside lodges in the forested valley floor, reached on the descent from the peak.",
      ...KOTHE,
      html: p(
        "A long descent and an easy one, losing nearly 1,500 m down the valley you climbed over four days. The moraine below Khare gives way to the open bowl at Thagnak, and then the trail drops steadily along the Hinku Khola.",
        "The change is physical and immediate. Somewhere below Thagnak the air thickens, the first juniper appears, and legs that felt heavy at 5,000 m start working properly again.",
        "By <strong>Kothe (3,600 m)</strong> you are back among rhododendron and birch with the river loud outside the lodge. It is warm, and after a night at 5,800 m that registers as luxury. Around 6 to 7 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "The high yak pasture below the Zatrwa La, on the return crossing to Lukla.",
      ...THULI_KHARKA,
      html: p(
        "The last climb of the trip, back up out of the valley floor toward the pass. The trail leaves the river and works up through the forest, steep in places, regaining the 700 m lost on the way in.",
        "It is a day that feels harder than its numbers because the summit is behind you and the body has decided the trip is over. It is not — the Zatrwa La still has to be crossed.",
        "<strong>Thuli Kharka (4,300 m)</strong> gives a last evening looking back east over the Hinku, with Mera visible at the head of the valley and the route you climbed now legible from bottom to top. Around 5 to 6 hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, reached back over the pass from the Hinku valley.",
      ...LUKLA,
      html: p(
        "An early start for the pass. The climb from Thuli Kharka to the <strong>Zatrwa La (4,610 m)</strong> takes two to three hours on rough ground, and the crossing is usually easier westbound than east because you are fitter and better acclimatised than you were two weeks ago.",
        "From the notch there is a last look back at the Hinku, and then a very long descent — 1,800 m down through boulder fields, then rhododendron forest, then farmland, to <strong>Chutanga</strong> and on to Lukla.",
        "<strong>Lukla (2,840 m)</strong> arrives in the afternoon with a hot shower and a menu that runs to more than dal bhat. The evening is the end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Seven to eight hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights go early, before the valley wind builds. The flight to <strong>Kathmandu</strong> takes thirty-five minutes, or lands at Manthali with a road transfer onward when the peak-season schedule applies.",
        "Delays are routine rather than exceptional and can run to a full day in poor weather, which is why we never schedule an international departure for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost and your guide handles it.",
        "The afternoon in Kathmandu is free — a long shower, and Thamel for whatever you have been thinking about since Khare. Your <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace with the Himalaya somewhere behind the haze.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we are glad to arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — and if 6,476 m has left you curious rather than satisfied, Baruntse and Ama Dablam are the peaks our returning Mera climbers ask about.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const shortMeraPeakClimbing: Climb = {
  region: "Everest Region",
  price: 2550,
  difficulty: "challenging",
  maxAltitude: 6476,
  grade: "PD",
  center: [86.84, 27.72],
  zoom: 10,
  content: {
    slug: "short-mera-peak-climbing",
    title: "Short Mera Peak Climbing",
    overview:
      "<p>The standard Mera Peak itinerary runs eighteen days. This one runs <strong>fifteen</strong>, and it gets there by removing three specific things: the preparation day in Kathmandu, the acclimatisation day at Chutanga, and the spare day after the summit. Nothing is cut from the mountain itself — the same <strong>Zatrwa La crossing</strong>, the same drop to Kothe, the same rest day at Thagnak, the same training day and high camp at Khare, and the same glacier route to <strong>6,476 m</strong>.</p><p>We are direct about who this suits. It is for climbers with <strong>two weeks of leave and a proven altitude record</strong> — people who have been above 5,000 m, know they acclimatise well, and would rather spend their days walking than resting. If you have never been to 5,000 m, or if a fixed summit date makes you nervous, the eighteen-day itinerary exists for good reasons and we will tell you so. Mera turns people back on altitude more than any other trekking peak in Nepal, and days in the schedule are the cheapest insurance against that.</p>",
    highlights: [
      ["Summit Mera Peak (6,476 m) in 15 Days", "The highest trekking peak in Nepal on a two-week schedule, with nothing removed from the climb itself."],
      ["The Full Hinku Approach Retained", "The Zatrwa La crossing, the deliberate drop to Kothe and the Thagnak rest day all stay in the plan."],
      ["Training Day and High Camp Kept", "The glacier skills session at Khare and the 5,800 m high camp are not the parts we shorten."],
      ["Five 8,000 m Peaks from the Summit", "Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga in one sweep from the top."],
      ["A Lower Price for the Same Mountain", "Three fewer nights of lodges, staff and meals, reflected directly in the cost."],
    ],
    sections: [
      BEST_TIME_HINKU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD</strong> and unchanged from the longer itinerary — a broad glacier at <strong>25 to 30 degrees</strong> climbed as a roped team, with one <strong>short 40 to 45 degree step</strong> on fixed rope below the central summit. Six to eight hours up from high camp and about three back down to Khare, starting at two in the morning at -20°C or colder.</p><p>The difficulty of this version is not technical, it is <strong>margin</strong>. With no spare day, the summit has one weather window rather than two, and with no Chutanga acclimatisation day, the Zatrwa La is crossed a day earlier in your acclimatisation than it would otherwise be. Both are manageable for a well-prepared climber and both are real. We monitor oxygen saturation every evening from the pass onward and your guide will hold the group a day at Thagnak or Khare if the numbers say so, accepting that the summit may then be lost.</p>",
      },
      {
        heading: "Who This Itinerary Suits",
        content:
          "<p>Take this version if you have <strong>slept above 5,000 m before</strong> and know how you respond, if you are training consistently and can walk seven hours a day back to back, and if your leave genuinely does not stretch to eighteen days. Climbers coming straight from another Himalayan trip, or from a season in the Alps, handle it comfortably.</p><p>Take the <strong>eighteen-day itinerary</strong> if Mera would be your first time above 5,000 m, if you are travelling in early October or late May when weather is less settled, or if the idea of one shot at the summit would spoil the trip for you. There is no discount in physiology: the same body needs the same time, and the shorter schedule works by assuming yours has already done the adapting on a previous trip.</p>",
      },
      INSURANCE_6500,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots are essential</strong>, as on any Mera itinerary — a night at 5,800 m and a summit morning below -20°C is where single boots cause frostbite. Bring a <strong>-30°C sleeping bag</strong> or a -20°C bag with a liner, a heavy expedition down jacket, insulated over-trousers, a full waterproof shell, mitts as well as gloves, a balaclava, category 4 glacier glasses and goggles.</p><p>Add gaiters, a headlamp with lithium batteries, factor 50 sunscreen and lip balm, an insulated bottle and a 40 litre summit pack. Because the equipment check happens on your arrival evening rather than on a dedicated day, <strong>bring everything you intend to climb in to that meeting</strong> — there is no second chance to swap kit before the flight. Group climbing equipment is supplied and <strong>personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "Exactly which days are removed compared with the 18-day itinerary?", answer: "The preparation day in Kathmandu, the acclimatisation day at Chutanga, and the spare day after the summit. The briefing and equipment check move to your arrival evening, and the summit has a single scheduled attempt instead of two." },
      { question: "Is the success rate lower on the short itinerary?", answer: "Yes — roughly ten to fifteen percentage points across a season, and almost all of that difference is weather rather than acclimatisation. On a settled fortnight the two itineraries perform identically. On a windy one, the reserve day is what separates them." },
      { question: "Can I add a spare day to this itinerary?", answer: "Yes, at Khare, for the cost of an extra lodge night plus guide and staff time. Tell us at booking so the permit dates and Lukla seats are set around it. Several climbers book the fifteen-day price and add one day, which is a sensible middle ground." },
      { question: "Do I still get the training day at Khare?", answer: "Yes, in full. Crampons, ice axe and self-arrest, roped team travel, fixed-line ascent and abseil — a complete day on the ice. It is not a part of the schedule we are willing to compress, because the Mera glacier is crevassed and rope-team technique is not optional there." },
      { question: "What if I arrive and I am clearly not acclimatising well?", answer: "Your guide holds the group, usually at Thagnak or Khare, and the summit day moves back. With no spare day that may mean the summit is not reached, and we would rather that than push a climber who is not ready. Nobody on our staff is paid a summit bonus that could bias that decision." },
      { question: "Is this itinerary cheaper only because it is shorter?", answer: "Yes — three fewer nights of lodges, meals, guide, Sherpa and porter wages and permits. Nothing about the staffing ratio, the equipment or the safety provision differs from the eighteen-day trip." },
      { question: "How fit do I need to be for the compressed schedule?", answer: "Fitter than for the long version, because there are fewer rest days between long ones. The benchmark is walking seven to eight hours with 8 to 10 kg on consecutive days without needing a recovery day afterwards. Four to six months of consistent hill training gets most people there." },
      { question: "Does the Zatrwa La feel harder on this schedule?", answer: "It can, because you cross it on day three rather than day five. It is a 1,600 m ascent to 4,610 m over rough ground and it is the day that exposes anyone who arrived undertrained. If it feels desperate, tell your guide — that information changes the plan for the rest of the trip." },
      { question: "Can I still climb the north summit rather than the central one?", answer: "Only on a very strong party with a good weather morning, and it is not scheduled. The north summit at 6,476 m needs an extra section of exposed climbing beyond the central summit, and without a spare day there is no room to try it and retreat. It is better suited to the longer itinerary." },
      { question: "What happens if the Lukla flight is delayed at the start?", answer: "A one-day delay is absorbed by shortening the Thagnak rest day or the Khare training day, in that order, and your guide decides which. A two-day delay usually means the summit is lost, and this is the main risk that the longer itinerary insures against. We can move you to a helicopter at your own cost if you want to protect the schedule." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping: "Tented accommodation at Mera high camp (5,800 m), with a mess tent and toilet tent.",
      permits: HINKU_PERMITS_MERA,
      sherpa: MERA_SHERPA,
      extra: [
        "Cook and kitchen crew for the high camp night.",
        "A full training day at Khare covering crampons, ice axe, rope teams, fixed-line ascent and abseil technique.",
        "Fixing of the summit step by our climbing Sherpas ahead of the summit push.",
        "Porter transport of group climbing equipment and camp gear from Khare to high camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      extra: [
        "An additional contingency day, which this itinerary does not include and which can be added at extra cost if requested at booking.",
      ],
      unforeseen:
        "Any additional accommodation, transport, or expenses caused by weather, Lukla flight delays or a summit attempt abandoned for conditions — this itinerary carries no reserve day.",
    },
    porterDays: 12,
    gearRentalDays: 12,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 15-day itinerary to the summit of Mera Peak (6,476 m) over the Zatrwa La and up the Hinku valley, keeping the Thagnak rest day, the Khare training day and the 5,800 m high camp, with a single scheduled summit attempt.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit and national park fees, a licensed climbing guide with one Sherpa per two climbers, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and any contingency day are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Short Mera Peak Climbing (6,476 m) — 15 Days | Green Compass Treks",
      description:
        "Climb Mera Peak in 15 days on a compressed schedule for experienced altitude trekkers. The full Hinku approach, Khare training day and 5,800 m high camp retained, with one scheduled summit attempt.",
      keywords:
        "short mera peak climbing, mera peak 15 days, quick mera peak itinerary, mera peak short trip, hinku valley climbing, mera peak cost",
      tags: "Mera Peak, Short Itinerary, Hinku Valley, Everest Region, Peak Climbing, 6000m Peak",
    },
  },
  days: [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m), Briefing and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong> and our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Because this itinerary has no preparation day, the <strong>briefing and equipment check happen this evening</strong>. Bring everything you intend to climb in. Your guide runs through the fifteen-day plan, the compressed acclimatisation profile and the summit day, then fits harnesses and checks boots with crampons on.",
        "This is the only opportunity to swap unsuitable kit for rental equipment, and single boots will be replaced with doubles here rather than debated at 5,800 m. Our office lodges the <strong>climbing permit</strong> and national park paperwork with your passport and photographs. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Chutanga (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chutanga",
      placeDescription: "A small clearing of lodges in rhododendron forest below the Zatrwa La, east of Lukla.",
      ...CHUTANGA,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season, landing on the sloping runway cut into the hillside.",
        "Loads are sorted over tea with the porters, and then the trail turns <strong>east</strong> while everyone else on your flight heads north toward Namche. Within twenty minutes the path is empty, climbing through rhododendron and pine.",
        "<strong>Chutanga (3,050 m)</strong> is a handful of simple lodges in a forest clearing below the Zatrwa La. The afternoon is deliberately quiet — tomorrow is the hardest walking day of the trip. Around 3 to 4 hours. Overnight at Chutanga.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "A high yak pasture on the eastern side of the Zatrwa La, at the head of the Hinku valley.",
      ...THULI_KHARKA,
      html: p(
        "The hardest day before the summit, and on this schedule it comes early. From Chutanga the trail climbs for four to five hours on rough ground through boulder fields and over a series of false crests, each looking like the pass and none of them being it.",
        "The <strong>Zatrwa La (4,610 m)</strong> is a narrow notch marked with cairns and prayer flags, usually windy and occasionally snowed in, in which case crampons come out. Beyond it the whole <strong>Hinku valley</strong> opens out to the east.",
        "The descent is steep and loose to <strong>Thuli Kharka (4,300 m)</strong>, a yak pasture with two basic lodges. Your guide takes saturation readings this evening and pays close attention to them, because this is the day the compressed profile is tested. Seven to eight hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Trek from Thuli Kharka (4,300 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "A riverside lodge settlement in the forested floor of the Hinku valley.",
      ...KOTHE,
      html: p(
        "A descent of 700 m that is the most valuable day in the itinerary. Sleeping a thousand metres below yesterday's pass is what lets a fifteen-day schedule work at all, and it is not a day we would ever remove.",
        "The trail traverses the hillside then drops steeply through rhododendron, birch and juniper to the valley floor, following the <strong>Hinku Khola</strong> upstream on a path cut into the bank above the water.",
        "<strong>Kothe (3,600 m)</strong> is a line of simple lodges on the riverbank with forest on both sides — warm, green, and the last thick air of the trip. Around 5 to 6 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thagnak (4,350 m)",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "A summer grazing settlement on the moraine below the Hinku Nup and Shar glaciers.",
      ...THAGNAK,
      html: p(
        "Back up the valley, gently, following the Hinku Khola north through the last of the trees. The trail passes the painted rock and small shrine at <strong>Gondishung</strong>, where a two-hundred-year-old gompa sits beneath an overhanging boulder.",
        "The forest thins and the valley opens, with <strong>Mera's south face</strong> ahead and the Kusum Kanguru ridge behind. This is where the Hinku stops being a forest walk.",
        "<strong>Thagnak (4,350 m)</strong> is a summer grazing settlement of stone huts and a few lodges on the moraine. Around 4 to 5 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Acclimatisation Day at Thagnak (4,350 m) – Sabai Tsho",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "The moraine settlement below the glaciers, with the glacial lake of Sabai Tsho above it.",
      ...THAGNAK,
      html: p(
        "The one full acclimatisation day this itinerary keeps, and it is kept because it is the one that matters most. We walk up the moraine to <strong>Sabai Tsho</strong>, a glacial lake at around 4,700 m held behind a wall of debris.",
        "The lake burst its moraine dam in 1998 and sent a flood down the valley that took out bridges and pasture as far as Kothe. The scoured banks are still visible on the trail you walked yesterday.",
        "Back down to Thagnak with 350 m gained and lost. Rest, four litres of water, and more food than you feel like eating. Your guide reviews everyone's saturation trend tonight and decides whether tomorrow proceeds as planned. Around 4 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Trek from Thagnak (4,350 m) to Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, on the moraine directly below the Mera glacier.",
      ...KHARE,
      html: p(
        "A short day with a serious altitude gain, walked slowly and deliberately. The trail climbs the lateral moraine of the <strong>Dig glacier</strong> on loose rock, the valley narrowing and ice appearing on both sides.",
        "Over the moraine crest the ground opens into a bowl and <strong>Mera Peak</strong> shows itself properly for the first time, the broad white glacier of the standard route running up to a summit that looks much closer than it is.",
        "<strong>Khare (5,045 m)</strong> is a cluster of stone lodges, the highest settlement in the valley and the base for the climb. Everyone walks slowly here and that is normal. Around 4 hours. Overnight at Khare.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The climbing base of the Hinku, where the glacier skills are taught before the summit push.",
      ...KHARE,
      html: p(
        "A full training day on the glacier ice above Khare, and one of the parts of the schedule we will not compress. <strong>Crampons fitted and walked in</strong> on flat and angled ice, ice axe technique including self-arrest, roped team travel with correct spacing, ascending fixed line on a jumar, and abseiling.",
        "Rope-team work gets the most time, because the Mera glacier is crevassed and most of the summit route is climbed roped together rather than on fixed line. Your guide works with each climber individually.",
        "The afternoon is rest and a final gear sort — what goes to high camp, what stays at Khare. Early dinner and early sleep. Around 4 hours of training. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Mera High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Mera High Camp",
      placeDescription: "A tented camp on a rock shelf above the Mera La, at the edge of the glacier facing Makalu.",
      ...MERA_HIGH_CAMP,
      html: p(
        "Crampons go on within an hour of leaving Khare. The route climbs steeply onto the glacier and up to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hinku and Hongu valleys, with the group roped from here on.",
        "From the col the route traverses the glacier north-east to a rock shelf at <strong>5,800 m</strong>, the only flat ground for some distance. Four to five hours with a moderate load.",
        "The camp faces east directly at <strong>Makalu</strong>, with Everest and Lhotse to the north and Kanchenjunga on the horizon. It is also cold enough that dinner is eaten in a down jacket at four in the afternoon, and everyone is in a sleeping bag by six. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Mera Peak (6,476 m) and Descend to Khare (5,045 m)",
      elevation: "6,476 m",
      accommodation: "Khare",
      placeDescription: "The 6,476 m summit of Mera, the highest trekking peak in Nepal, above the Hinku and Hongu valleys.",
      ...MERA_PEAK,
      html: p(
        "Tea at one, roped and moving by two, in cold that is difficult to convey in advance. The glacier above camp is a broad slope of <strong>25 to 30 degrees</strong> — never steep, never technical, and completely relentless in the dark.",
        "The sun arrives somewhere around 6,100 m and changes the whole character of the day. Above it lies the only real obstacle, a <strong>short step of 40 to 45 degrees</strong> below the central summit, fixed by our Sherpas the day before and climbed on a jumar.",
        "From the <strong>summit (6,476 m)</strong>, <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong> stand around you, with Baruntse, Chamlang and Ama Dablam filling the gaps. Then down the whole thing — high camp, the Mera La, off the ice, and into <strong>Khare</strong> in the afternoon. Nine to twelve hours. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "The riverside lodges in the forested valley floor, reached on the descent from the peak.",
      ...KOTHE,
      html: p(
        "A long descent and, after yesterday, a welcome one — nearly 1,500 m down the valley it took four days to climb. The moraine below Khare gives way to the open bowl at Thagnak, and the trail then drops steadily along the Hinku Khola.",
        "Somewhere below Thagnak the air thickens noticeably, the first juniper appears, and legs that were useless at 5,000 m start working again.",
        "By <strong>Kothe (3,600 m)</strong> you are back among rhododendron and birch with the river loud outside the lodge. Around 6 to 7 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "The high yak pasture below the Zatrwa La, on the return crossing to Lukla.",
      ...THULI_KHARKA,
      html: p(
        "The last climb of the trip, regaining the 700 m lost on the way in. The trail leaves the river and works up through forest, steep in places, back toward the pass.",
        "It is a day that feels harder than its numbers, because the summit is behind you and the body has quietly decided the trip is finished. It is not, quite — the Zatrwa La is still there.",
        "<strong>Thuli Kharka (4,300 m)</strong> gives a final evening looking east over the Hinku, with Mera at the head of the valley and the route you climbed now readable from bottom to top. Around 5 to 6 hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, reached back over the pass from the Hinku valley.",
      ...LUKLA,
      html: p(
        "An early start for the pass. Two to three hours of rough ground to the <strong>Zatrwa La (4,610 m)</strong>, and the crossing is usually easier westbound because you are fitter and far better acclimatised than you were ten days ago.",
        "A last look east at the Hinku from the notch, and then a very long descent — 1,800 m through boulder fields, rhododendron forest and farmland to <strong>Chutanga</strong> and on to Lukla.",
        "<strong>Lukla (2,840 m)</strong> in the afternoon, with a hot shower and a menu beyond dal bhat. The evening is the end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Seven to eight hours. Overnight at Lukla.",
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
        "Delays are routine and can run to a full day, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost and your guide handles the booking.",
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
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast somewhere with a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we are glad to arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels, and we hope to climb with you again.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const meraPeakAmphuLapcha: Climb = {
  region: "Everest Region",
  price: 4150,
  difficulty: "difficult",
  maxAltitude: 6476,
  grade: "PD, AD- at the col",
  center: [86.88, 27.78],
  zoom: 10,
  content: {
    slug: "mera-peak-amphu-lapcha",
    title: "Mera Peak Amphu Lapcha",
    overview:
      "<p>This is the finest way to climb <strong>Mera Peak (6,476 m)</strong>, and the hardest. Instead of summiting and walking back down the Hinku the way you came, the route descends the eastern side of the mountain into the <strong>Hongu valley</strong> — a completely uninhabited basin of glacial lakes and moraine where there are no lodges, no villages and no trail markers — and then exits north over the <strong>Amphu Lapcha (5,845 m)</strong>, a technical col that drops into the Imja valley a few hours above Chhukung.</p><p>The Amphu Lapcha is the reason this is a serious undertaking rather than a long one. The southern approach is a steep snow slope; the northern side is a <strong>near-vertical rock and ice wall abseiled on fixed ropes for 100 to 150 m</strong> onto the glacier below, with every load lowered separately. It is committing — once you are in the Hongu the only ways out are forward over the col or back over the Mera La — and it links two of the great Himalayan valleys into a single traverse that finishes with Everest, Lhotse and Ama Dablam directly in front of you.</p>",
    highlights: [
      ["Summit Mera Peak (6,476 m)", "The highest trekking peak in Nepal, climbed as the first half of the traverse rather than the whole trip."],
      ["Cross the Amphu Lapcha (5,845 m)", "Abseil 100–150 m of fixed rope down a rock and ice wall into the Imja valley — the technical crux of the route."],
      ["The Uninhabited Hongu Valley", "Four days of camping among glacial lakes in a basin with no settlements, no lodges and almost no other parties."],
      ["Panch Pokhari and Seto Pokhari", "Camp beside the sacred lakes at the head of the Hongu, beneath Baruntse and Chamlang."],
      ["A True Traverse, Hinku to Khumbu", "Walk in through one valley and out through another, finishing at Chhukung under the Lhotse wall."],
    ],
    sections: [
      BEST_TIME_HINKU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Two separate problems in one trip. <strong>Mera</strong> is graded PD — a broad glacier at 25 to 30 degrees with one short steep step, hard because of the altitude rather than the angle. The <strong>Amphu Lapcha</strong> is graded around <strong>AD-</strong> and is a genuinely technical col: a steep snow and ice climb to the notch from the south, then a <strong>100 to 150 m abseil</strong> down a rock and ice wall on the north side, with a bergschrund at the bottom and every rucksack lowered on a separate line.</p><p>Between them lie four days in the <strong>Hongu</strong> at altitudes between 4,850 m and 5,400 m, on moraine and glacier with no trail and no habitation. The crossing day itself runs ten to twelve hours and the group is committed from the moment it leaves camp. You must be competent on an abseil under load, comfortable moving roped on a glacier, and able to keep functioning on the fourth consecutive day above 5,000 m.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>We ask for <strong>previous 6,000 m experience or a solid alpine background</strong>, and we mean it on this itinerary rather than as a formality. You should have abseiled before, be steady on fixed rope, and have spent multiple nights above 5,000 m. If Mera alone is your objective, climb it on the standard itinerary; this route is for people who want the traverse.</p><p>Acclimatisation is unusually strong because it has to be. The Chutanga day, the drop to Kothe, the Thagnak rest day and the Khare training day all remain, the summit comes on day twelve, and the four Hongu days that follow act as a long high-altitude consolidation before the col. A <strong>reserve day</strong> is held after the summit and can be spent either on a second attempt at Mera or waiting out weather before the Amphu Lapcha, which is the more common use.</p>",
      },
      {
        heading: "Camping, Food and Committing to the Hongu",
        content:
          "<p>From Khare to Chhukung — around six nights — there is <strong>no lodge, no shop and no village</strong>. The group travels with two-person tents, a mess tent, kitchen tent and toilet tent, a cook and kitchen crew, and all food and fuel carried from Lukla and topped up at Khare. Camps sit between 4,850 m and 5,400 m, and the coldest of them reach -20°C overnight.</p><p>The commitment matters more than the comfort. Once the group crosses the Mera La eastward, the exits are the Amphu Lapcha ahead or a long retreat back over the Mera La behind. There is no road, no airstrip and no lodge to walk to. Helicopter evacuation from the Hongu is possible in clear weather and is expensive; this is the itinerary on which your insurance documentation is checked most carefully.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> and a <strong>-30°C sleeping bag</strong> are required, along with an insulated sleeping mat — six nights on glacial moraine draw heat out from below. Bring a heavy expedition down jacket, insulated over-trousers, a full waterproof shell, mitts and gloves, a balaclava, category 4 glacier glasses, goggles, gaiters, a headlamp with lithium batteries and factor 50 sunscreen.</p><p>We supply the <strong>fixed rope, main ropes, snow bars, ice screws and anchors</strong>, and our Sherpas rig and fix the Amphu Lapcha abseil before the group arrives at the notch. <strong>Personal hardware — harness, crampons, ice axe, jumar, descender, helmet and carabiners — can be rented as an add-on</strong>. On a route with a long loaded abseil, a descender you have used before is worth carrying from home.</p>",
      },
    ],
    faqs: [
      { question: "What exactly happens at the Amphu Lapcha?", answer: "You climb a steep snow slope to the notch at 5,845 m from the south. The north side drops away as a rock and ice wall, so the crew rigs fixed ropes and the group abseils 100 to 150 m in stages onto the glacier below, crossing a bergschrund near the bottom. Rucksacks are lowered separately so nobody abseils under a heavy load." },
      { question: "Do I need a separate permit for the Amphu Lapcha?", answer: "It is a pass rather than a peak, so no climbing permit is required for the col itself. You do need both national park permits — Makalu Barun for the Hinku and Hongu, Sagarmatha for the Imja side — plus the rural municipality permit and the NMA permit for Mera. All are included." },
      { question: "How committing is the route once we are in the Hongu?", answer: "Fully. From the Mera La onward the only exits are forward over the Amphu Lapcha or back the way you came, and back means recrossing a 5,415 m glacier col. There are no villages, no lodges and no trails out to the side. This is why we carry a reserve day and why the guide-to-client ratio is higher here." },
      { question: "What happens if the Amphu Lapcha is not crossable?", answer: "The group retreats over the Mera La to Khare and walks out through the Hinku, adding roughly three days. It happens perhaps one season in five, usually after heavy snow makes the north wall unsafe to rig. Your guide makes that decision at Amphu Lapcha base camp." },
      { question: "How does the descent from Mera into the Hongu work?", answer: "After the summit the group returns to high camp, then descends the eastern flank of the Mera La onto the Hongu side rather than back to Khare. It is glacier travel, roped, on gentler ground than the summit slope, and it puts you at Kongme Dingma at 4,850 m the same day." },
      { question: "What are the Hongu lakes like?", answer: "Seto Pokhari and the Panch Pokhari group are a chain of glacial tarns at around 5,000 m, sacred to both Hindus and Buddhists and visited by pilgrims in summer. In climbing season they are frozen at the edges and completely silent, with Baruntse and Chamlang standing over them. Camping beside them is one of the reasons people choose this route." },
      { question: "Is this harder than climbing Mera and Island Peak separately?", answer: "Yes. Two separate climbs from lodges are logistically simpler and less committing than one traverse through an uninhabited valley with a technical col in the middle. The traverse is the better trip; it is not the easier one." },
      { question: "How many staff travel with the group?", answer: "A lead climbing guide, an assistant guide, one climbing Sherpa per two climbers, a cook and kitchen crew, and porters for the tents, food and technical equipment. It is a considerably larger operation than a lodge-based climb, which is reflected in the price." },
      { question: "Can we finish at Chhukung and climb Island Peak too?", answer: "Yes, and it is a natural extension — you emerge from the col a few hours above Chhukung, already acclimatised to 6,476 m. Adding Island Peak extends the trip by about four days. We run it as a dedicated itinerary and are glad to quote it." },
      { question: "Is there any mobile signal in the Hongu?", answer: "None. There is NTC coverage in the Hinku as far as Khare and again from Chhukung onward, and nothing at all in between — roughly five days. Bring a power bank, keep it in your sleeping bag, and tell people at home not to expect contact for a week." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full tented accommodation from Mera high camp through the Hongu valley to the Amphu Lapcha, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permit for Mera Peak, Makalu Barun National Park entry permit, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa:
        "One climbing Sherpa for every two climbers from Khare onward, with all their equipment, wages and insurance, plus an assistant climbing guide for the col crossing.",
      extra: [
        "Cook and kitchen crew for the six camping nights, with all food and fuel carried in.",
        "A full training day at Khare covering crampons, ice axe, rope teams, fixed-line ascent and abseil technique.",
        "Rigging and fixing of the Amphu Lapcha abseil, including lowering all rucksacks separately.",
        "Porters and pack support for the tents, food and technical equipment throughout the Hongu.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an Amphu Lapcha crossing abandoned for conditions, or a retreat back over the Mera La and out through the Hinku.",
    },
    porterDays: 18,
    gearRentalDays: 18,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 21-day traverse from the Hinku to the Khumbu: over the Zatrwa La, up Mera Peak (6,476 m), down into the uninhabited Hongu valley, and out over the technical Amphu Lapcha (5,845 m) to Chhukung.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, lodge and full tented accommodation, three meals a day throughout, all park and climbing permits, a climbing guide with an assistant and one Sherpa per two climbers, a cook crew, group climbing equipment, the training day and the fixed abseil on the col are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a retreat forced by conditions are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Mera Peak & Amphu Lapcha Traverse (6,476 m) — 21 Days | Green Compass Treks",
      description:
        "Climb Mera Peak and traverse the uninhabited Hongu valley to cross the technical Amphu Lapcha (5,845 m) into the Khumbu. 21 days, full camping support, fixed abseil on the col and one Sherpa per two climbers.",
      keywords:
        "mera peak amphu lapcha, amphu lapcha pass, hongu valley, mera peak traverse, mera to chhukung, technical pass nepal, amphu labtsa",
      tags: "Mera Peak, Amphu Lapcha, Hongu Valley, Everest Region, Technical Pass, Traverse",
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
        "Nothing is required of you today beyond resting. Thamel's gear shops are a few minutes away and stock most of what gets left at home — down mitts, lithium batteries and glacier glasses in particular.",
        "Your climbing guide calls at the hotel in the evening to introduce themselves and set tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "A long briefing, because this trip has two separate technical problems in it. Your guide covers the twenty-one day plan, the Mera summit day, and then the <strong>Amphu Lapcha</strong> in detail — how the abseil is rigged, how loads are lowered, and what happens if the col cannot be crossed.",
        "The <strong>equipment check</strong> is thorough. Boots are fitted with crampons, harnesses adjusted over climbing layers, and your descender and abseil technique discussed. If you have not abseiled under load before, your guide will know it today rather than at 5,845 m.",
        "Our office lodges the <strong>NMA climbing permit</strong> and both national park permits, which need your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Chutanga (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chutanga",
      placeDescription: "A small clearing of lodges in rhododendron forest below the Zatrwa La, east of Lukla.",
      ...CHUTANGA,
      html: p(
        "An early flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "The trail turns <strong>east</strong> almost at once while the rest of the flight heads north for Namche, climbing through rhododendron and pine on a path that empties within twenty minutes.",
        "<strong>Chutanga (3,050 m)</strong> is a handful of simple lodges in a forest clearing below the Zatrwa La. The crew sorts the camping loads here — this expedition carries considerably more than a lodge-based climb. Around 3 to 4 hours. Overnight at Chutanga.",
      ),
    },
    {
      title: "Acclimatisation Day at Chutanga (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chutanga",
      placeDescription: "The forest camp below the Zatrwa La, where the first acclimatisation walk is made.",
      ...CHUTANGA,
      html: p(
        "An acclimatisation day that pays for itself tomorrow. We walk up the ridge toward the pass, gaining <strong>500 to 600 m</strong> to around 3,600 m, and return to sleep low.",
        "The path climbs through moss-hung rhododendron into open ground, with a first view of the ridges you cross tomorrow and the Dudh Koshi valley falling away to the west.",
        "Back at Chutanga by early afternoon. Your guide takes the first oxygen saturation readings tonight and the crew finishes repacking for the pass. Around 4 hours. Overnight at Chutanga.",
      ),
    },
    {
      title: "Cross the Zatrwa La (4,610 m) and Trek to Thuli Kharka (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Thuli Kharka",
      placeDescription: "A high yak pasture on the eastern side of the Zatrwa La, at the head of the Hinku valley.",
      ...THULI_KHARKA,
      html: p(
        "Four to five hours of climbing on rough ground from Chutanga, through boulder fields and over a series of false crests that each look like the pass.",
        "The <strong>Zatrwa La (4,610 m)</strong> is a narrow, usually windy notch marked with cairns and prayer flags. In fresh snow the crossing is serious and crampons come out. From the top the whole <strong>Hinku valley</strong> opens eastward.",
        "A steep, loose descent leads to <strong>Thuli Kharka (4,300 m)</strong>, a yak pasture with a couple of basic lodges. Seven to eight hours. Overnight at Thuli Kharka.",
      ),
    },
    {
      title: "Trek from Thuli Kharka (4,300 m) to Kothe (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Kothe",
      placeDescription: "A riverside lodge settlement in the forested floor of the Hinku valley.",
      ...KOTHE,
      html: p(
        "A deliberate descent of 700 m, and the single most valuable day in any Mera itinerary. Sleeping a thousand metres below yesterday's pass is what makes the rest of the acclimatisation work.",
        "The trail traverses and then drops steeply through rhododendron, birch and juniper into the valley floor, following the <strong>Hinku Khola</strong> upstream on a path cut into the bank above the water.",
        "<strong>Kothe (3,600 m)</strong> is a line of simple lodges on the riverbank between walls of forest. It is warm and green, and it is the last thick air for two weeks. Around 5 to 6 hours. Overnight at Kothe.",
      ),
    },
    {
      title: "Trek from Kothe (3,600 m) to Thagnak (4,350 m)",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "A summer grazing settlement on the moraine below the Hinku Nup and Shar glaciers.",
      ...THAGNAK,
      html: p(
        "North up the Hinku Khola through the last of the trees, past the painted rock and small gompa at <strong>Gondishung</strong>, where a two-hundred-year-old shrine sits beneath an overhanging boulder.",
        "The forest thins and the valley opens, walls rising on both sides — <strong>Mera's south face</strong> ahead, the Kusum Kanguru ridge behind.",
        "<strong>Thagnak (4,350 m)</strong> is a summer grazing settlement of stone huts and a few lodges on the moraine. Around 4 to 5 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Acclimatisation Day at Thagnak (4,350 m) – Sabai Tsho",
      elevation: "4,350 m",
      accommodation: "Thagnak",
      placeDescription: "The moraine settlement below the glaciers, with the glacial lake of Sabai Tsho above it.",
      ...THAGNAK,
      html: p(
        "An acclimatisation day with a destination. We walk up the moraine to <strong>Sabai Tsho</strong>, a glacial lake at around 4,700 m held behind a wall of debris below the Hinku Nup glacier.",
        "The lake burst its moraine dam in 1998, sending a flood as far down as Kothe. The scoured banks are still visible on the trail below, and standing above the lake is a direct lesson in what these valleys are capable of.",
        "Back to Thagnak with 350 m gained and lost. Rest, four litres of water and more food than you feel like. Around 4 hours. Overnight at Thagnak.",
      ),
    },
    {
      title: "Trek from Thagnak (4,350 m) to Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The highest lodges in the Hinku valley, and the last building until Chhukung.",
      ...KHARE,
      html: p(
        "A short day with a serious gain, walked slowly. The trail climbs the lateral moraine of the <strong>Dig glacier</strong> on loose rock, the valley narrowing and ice appearing on both sides.",
        "Over the crest the ground opens into a bowl and <strong>Mera Peak</strong> comes fully into view, the broad white glacier of the route running to a summit that looks nearer than it is.",
        "<strong>Khare (5,045 m)</strong> is the highest settlement in the valley — and, for this itinerary, the <strong>last building you will see for six nights</strong>. The crew makes its final resupply here. Around 4 hours. Overnight at Khare.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Khare (5,045 m)",
      elevation: "5,045 m",
      accommodation: "Khare",
      placeDescription: "The climbing base of the Hinku, where the glacier and abseil skills are checked before the traverse.",
      ...KHARE,
      html: p(
        "A full day on the glacier ice above Khare, and it covers more ground than it would on a straightforward Mera trip. <strong>Crampons, ice axe and self-arrest, roped team travel, fixed-line ascent on a jumar</strong> — and then, at length, <strong>abseiling</strong>.",
        "The abseil practice is the point. In nine days you will descend 100 to 150 m of rock and ice on the north side of the Amphu Lapcha, and your guide wants every climber smooth on a descender before then. Anyone who is not gets the afternoon as well.",
        "The rest of the day is rest and the final gear sort. Everything for six nights of camping goes up with the crew from here. Overnight at Khare.",
      ),
    },
    {
      title: "Trek from Khare (5,045 m) to Mera High Camp (5,800 m)",
      elevation: "5,800 m",
      accommodation: "Mera High Camp",
      placeDescription: "A tented camp on a rock shelf above the Mera La, at the edge of the glacier facing Makalu.",
      ...MERA_HIGH_CAMP,
      html: p(
        "Crampons on within an hour of leaving Khare. The route climbs steeply onto the glacier and up to the <strong>Mera La (5,415 m)</strong>, the broad snow col between the Hinku and Hongu, with the group roped from here on.",
        "From the col the route traverses north-east to a rock shelf at <strong>5,800 m</strong> where the tents go up. Four to five hours with a moderate load.",
        "The camp faces east at <strong>Makalu</strong>, with Everest and Lhotse north and Kanchenjunga on the horizon, and tomorrow's descent route into the Hongu laid out below. Dinner in a down jacket at four, sleeping bags by six. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Mera Peak (6,476 m) and Descend to Kongme Dingma (4,850 m)",
      elevation: "6,476 m",
      accommodation: "Kongme Dingma",
      placeDescription: "A tented camp on the floor of the uninhabited Hongu valley, below the eastern flank of Mera.",
      ...KONGME_DINGMA,
      html: p(
        "Tea at one, roped and moving by two. The glacier above camp is a broad slope of <strong>25 to 30 degrees</strong> in the dark and the cold, relentless rather than difficult, with the sun arriving somewhere near 6,100 m.",
        "The last obstacle is a <strong>short step of 40 to 45 degrees</strong> below the central summit, fixed the day before and climbed on a jumar. From the <strong>summit (6,476 m)</strong>: <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong>, with Baruntse and Chamlang standing over the valley you are about to walk into.",
        "Then the traverse begins. Instead of returning to Khare, the group descends the <strong>eastern flank</strong> of the Mera La onto the Hongu side, roped over gentler glacier ground, and camps at <strong>Kongme Dingma (4,850 m)</strong> on the valley floor. Eleven to thirteen hours. Overnight at Kongme Dingma.",
      ),
    },
    {
      title: "Reserve Day in the Hongu Valley (4,850 m)",
      elevation: "4,850 m",
      accommodation: "Kongme Dingma",
      placeDescription: "The reserve day, held for a second summit attempt or for weather before the col.",
      ...KONGME_DINGMA,
      html: p(
        "The day held in hand, and on this route it has two possible uses. If Mera was turned back yesterday, the group is still at high camp this morning and climbs today, descending into the Hongu tomorrow instead.",
        "If the summit went to plan, the day is spent here at <strong>Kongme Dingma</strong>, resting and acclimatising before three days above 5,000 m. It is a genuine rest in a place with nothing at all in it — no lodge, no trail sign, no other party, just moraine, the river and the wall of Mera behind you.",
        "Your guide uses the day to check the weather picture for the <strong>Amphu Lapcha</strong>, which is the decision the whole second half of the trip turns on. Overnight at Kongme Dingma.",
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
        "The valley is wide, silent and completely empty, walled by <strong>Chamlang</strong> to the east and the Mera massif behind. In a full day you are unlikely to see another person.",
        "<strong>Seto Pokhari (5,035 m)</strong> is a chain of glacial lakes at the head of the valley, sacred to Hindus and Buddhists alike and visited by pilgrims in the summer months. Camp goes up on the shore with <strong>Baruntse</strong> at the head of the basin. Around 5 to 6 hours. Overnight at Seto Pokhari.",
      ),
    },
    {
      title: "Trek from Seto Pokhari (5,035 m) to Amphu Lapcha Base Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Amphu Lapcha Base Camp",
      placeDescription: "A tented camp on moraine below the southern approach to the Amphu Lapcha col.",
      ...AMPHU_LAPCHA_BC,
      html: p(
        "A short day, kept short on purpose. The route climbs north-west from the lakes onto rough moraine and glacier below the col, gaining 400 m in three to four hours.",
        "<strong>Amphu Lapcha Base Camp (5,400 m)</strong> is a bleak, exposed camp on rock and ice with a direct view up at the notch you cross tomorrow. It is the coldest night of the trip.",
        "The afternoon is preparation. Harnesses, crampons and descenders are checked one final time, the order of crossing is set, and our Sherpas go up to <strong>rig and fix the abseil</strong> on the north side so the ropes are in place before the group arrives. An early night — tomorrow starts at three. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Amphu Lapcha (5,845 m) and Descend to Chhukung (4,730 m)",
      elevation: "5,845 m",
      accommodation: "Chhukung",
      placeDescription: "The 5,845 m technical col linking the Hongu to the Imja valley, with Chhukung below on the far side.",
      ...AMPHU_LAPCHA,
      html: p(
        "The crux of the trip, and a long day. Moving by four, the group climbs a <strong>steep snow and ice slope</strong> from camp to the notch of the <strong>Amphu Lapcha (5,845 m)</strong>, roped and in crampons, arriving as the sun comes onto the col.",
        "The far side is where the route earns its grade. The north face drops away as a wall of rock and ice, and the crossing is made by <strong>abseiling 100 to 150 m in stages on fixed ropes</strong>, with every rucksack lowered separately so nobody descends under load. At the bottom there is a bergschrund to cross onto the glacier.",
        "Below that the route works down the <strong>Amphu Lapcha glacier</strong> and its moraine, and the character of the trip changes entirely — Everest, Lhotse and Ama Dablam appear ahead, and there is a trail again, and then lodges.",
        "<strong>Chhukung (4,730 m)</strong> means a bed, a stove and a menu after six nights in a tent. Ten to twelve hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "Down the Imja valley on a proper trail with other people on it, which after the Hongu takes some adjusting to. Through <strong>Dingboche</strong> and around the hillside to <strong>Pangboche</strong>, losing height fast.",
        "The trees return below Pangboche — juniper first, then birch and rhododendron — and with them the first birdsong in a week and air that feels almost thick.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu, on a saddle facing Ama Dablam. The afternoon prayer ceremony is open to visitors, and it is a good place to end a traverse. Around 6 to 7 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, a horseshoe of lodges built into a hillside above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "A steep descent from the saddle to Phunki Thenga, hard on legs that have been going for three weeks, and then the balcony trail contouring back around the hillside high above the Dudh Koshi.",
        "It is a beautiful last mountain day — Everest, Lhotse and Ama Dablam over your shoulder for two hours, and the whole traverse now legible in the landscape behind you.",
        "<strong>Namche Bazaar (3,440 m)</strong> brings a hot shower, a bakery, an ATM and a beer, in roughly that order of urgency. Around 5 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day. Steeply down to the <strong>Hillary Bridge</strong>, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, checking out of Sagarmatha National Park on the way.",
        "Through <strong>Phakding</strong> and past the mani walls, then the final climb to <strong>Lukla (2,840 m)</strong> — which after three weeks feels considerably steeper than it is.",
        "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given. On this trip the crew carried six nights of camp through an uninhabited valley, and it is worth saying so. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights go early, before the wind builds in the valley. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays here are routine rather than exceptional and can run to a full day, which is why no international departure is scheduled for today. If Lukla closes entirely, a helicopter seat can usually be arranged at your own cost.",
        "The afternoon in Kathmandu is free — a long shower and Thamel. Your <strong>summit certificate</strong> is presented in the evening, along with the crossing photographs from the col. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal, we are glad to arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — climbers who have crossed the Amphu Lapcha usually come back for Baruntse, which stands at the head of the valley you camped in.",
      ),
    },
  ],
};
