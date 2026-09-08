import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type Climb,
} from "./types";
import {
  CHHUKUNG, DINGBOCHE, ISLAND_BC, ISLAND_HIGH_CAMP, KONGMA_LA, LOBUCHE_BC, LOBUCHE_EAST,
  LOBUCHE_HIGH_CAMP, LOBUCHE_VILLAGE, LUKLA, NAMCHE, PANGBOCHE, PHAKDING,
  POKALDE_BC, POKALDE_PEAK, TENGBOCHE,
} from "./places";

/**
 * The three Island Peak itineraries, Lobuche East and Pokalde.
 *
 * All five share the Lukla–Namche–Tengboche approach, so the early days read
 * alike by design — the trail genuinely is the same one. They diverge at
 * Dingboche, and the copy from there on is written per climb.
 */

const LUKLA_FLIGHTS = [
  "Round-trip flight between Kathmandu and Lukla, including the road transfer to and from Manthali in Ramechhap when the flights are operating from there in peak season.",
];

const ISLAND_PERMITS =
  "Nepal Mountaineering Association climbing permit for Island Peak (Imja Tse), Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.";

const SHERPA_LINE =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

const KHUMBU_CITY_HOTELS = ["Two nights of accommodation in Kathmandu with breakfast."];

const BEST_TIME_KHUMBU = {
  heading: "Best Time to Climb",
  content:
    "<p><strong>Late March to May</strong> and <strong>late September to November</strong> are the two climbing seasons, and they are not interchangeable. Spring brings longer days, warmer nights at base camp and deeper, more consolidated snow on the headwall, which makes the ice easier to move on but the glacier softer by late morning. Autumn brings the clearest air of the year, colder mornings, and harder, more brittle ice.</p><p>The monsoon closes the mountain from June to early September: the Lukla flights become unreliable for days at a time, the trail turns to mud below Namche, and the summit sits in cloud. December to February is climbable in a settled window but brutally cold at the high camp, with a real risk of being shut out by wind. We run departures in the two main seasons only.</p>",
};

const INSURANCE_6000 = {
  heading: "Travel Insurance",
  content:
    "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. This is the single most common problem we see: a standard trekking policy capped at 4,000 m or 5,000 m covers the walk to base camp and nothing above it, and a good number of travel policies exclude roped glacier travel and fixed-rope climbing by name. Read the exclusions, not the headline number.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. A helicopter can reach Chhukung and, in good conditions, base camp itself, but it is dispatched against a guarantee of payment, not against goodwill. We require your policy number and the insurer's 24-hour emergency line at the pre-departure briefing in Kathmandu.</p>",
};

// ─────────────────────────────────────────────────────────────────────────────

export const islandPeakClimbing: Climb = {
  region: "Everest Region",
  price: 2450,
  difficulty: "challenging",
  maxAltitude: 6189,
  grade: "PD+",
  center: [86.85, 27.87],
  zoom: 10,
  content: {
    slug: "island-peak-climbing",
    title: "Island Peak Climbing",
    overview:
      "<p><strong>Island Peak (6,189 m)</strong> — <strong>Imja Tse</strong> on the survey maps — is the most climbed 6,000 m peak in Nepal, and the one most people mean when they say they want to climb in the Himalaya. Eric Shipton's 1951 reconnaissance team named it for the way it stands out of the Imja glacier like an island in a frozen sea, and a party led by Tenzing Norgay climbed it in 1953 as training for Everest. It has been the standard first Himalayan summit ever since.</p><p>What makes it the right first peak is the shape of the day rather than the height. Ten days of walking through the Khumbu take you from Lukla to base camp with almost perfect acclimatisation built in, and then the climb itself concentrates everything technical into a few hours: a boulder gully, a glacier crossing with crevasses, a <strong>headwall of around 100 m at 45 to 50 degrees</strong> on fixed rope, and a knife-edge snow ridge to the summit. Behind you the whole time stands the <strong>Lhotse south wall</strong>, and from the top the view runs from Makalu to Baruntse to Ama Dablam.</p>",
    highlights: [
      ["Summit Island Peak (6,189 m)", "Stand on the most climbed 6,000 m summit in Nepal, first ascended in 1953 by a party training for Everest."],
      ["The Headwall and Summit Ridge", "Climb 100 m of 45–50° ice on fixed rope, then follow a narrow snow arête to the top."],
      ["The Lhotse Wall at Close Range", "Base camp sits directly beneath the 3,000 m south face of Lhotse, one of the great walls of the Himalaya."],
      ["Pre-Climb Training at Base Camp", "A full day on the glacier learning crampons, jumar, abseil and rope work before the summit push."],
      ["The Classic Khumbu Approach", "Walk in through Namche Bazaar, Tengboche monastery and the Imja valley, with Ama Dablam alongside for three days."],
    ],
    sections: [
      BEST_TIME_KHUMBU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Island Peak is graded <strong>PD+</strong> in the alpine system: not a technical climb, but a real one. The summit day is the crux and it is long — between twelve and fifteen hours from high camp, or up to eighteen from base camp, starting somewhere between one and two in the morning. The first two hours are a steep, loose boulder gully in the dark, which most climbers find harder than the ice.</p><p>Above the gully you rope up for the glacier, weave through crevasses on a snow ramp, and arrive at the <strong>headwall</strong>: roughly 100 m of ice at 45 to 50 degrees, climbed on fixed rope with a jumar, with one or two short steeper steps depending on the year. It finishes on a <strong>corniced summit ridge</strong> perhaps a boot-width wide in places, moving one at a time. The descent abseils the headwall and reverses everything, and by then you have been going a long time. Fitness, not technique, is what fails people here.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous ice climbing is required and most of our climbers arrive with none. What you do need is <strong>strong hill fitness</strong> — the ability to walk uphill for seven hours carrying 8 to 10 kg, back-to-back, for two weeks — and enough head for heights to be comfortable on an exposed ridge. Four to six months of hillwalking, stair work and steady cardio is the honest preparation. Leg endurance and a strong core matter far more than upper body strength.</p><p>Acclimatisation is built into the route rather than bolted on. Two nights at <strong>Namche (3,440 m)</strong> and two at <strong>Dingboche (4,410 m)</strong>, with a climb to Nangkartshang above Dingboche on the rest day, follow the standard rule of climbing high and sleeping low. Your guide checks oxygen saturation and pulse each evening from Namche upward. The itinerary also carries a <strong>spare day</strong>, which exists for the weather and for anyone who needs another night to catch up.</p>",
      },
      INSURANCE_6000,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Bring <strong>double mountaineering boots</strong> — or a warm single boot rated for 6,000 m — already broken in, plus separate trekking boots for the walk in. You also need a <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated and liner gloves, a warm hat, a buff, category 4 glacier glasses, goggles for the summit ridge, gaiters, a headlamp with spare batteries, and factor 50 sunscreen. Layers you can shed in the sun and add on the ridge are worth more than one very warm thing.</p><p>We provide all <strong>group climbing equipment</strong>: fixed rope, main rope, snow bars, ice screws and anchors, and the crew fixes the headwall before your summit day. <strong>Personal hardware — harness, crampons, ice axe, jumar, descender, helmet and carabiners — can be rented as an add-on</strong> and is fitted and checked in Kathmandu before departure. If you own your own, bring it: familiar gear on a summit ridge is worth the baggage allowance.</p>",
      },
    ],
    faqs: [
      { question: "Do I need previous climbing experience to attempt Island Peak?", answer: "No. The great majority of people who climb it have never used crampons before, and the training day at base camp exists precisely for that. What we do ask for is genuine hill fitness and a previous multi-day trek at altitude, ideally above 4,000 m, so you already know how your body handles thin air." },
      { question: "What are the summit success rates?", answer: "Between 80 and 90 percent on our departures, which is high for a Himalayan peak and reflects the acclimatisation profile more than anything else. The turn-backs are almost always altitude sickness, exhaustion on the long summit day, or weather closing the ridge — very rarely the technical ground." },
      { question: "How long is summit day and when do we start?", answer: "From high camp, twelve to fifteen hours round trip with a start between one and two in the morning. Groups climbing directly from base camp add three to four hours and start around midnight. You are moving in the dark for the first four or five hours, which is why headlamp batteries and a warm first layer matter." },
      { question: "Should we use the high camp or climb from base camp?", answer: "Our standard itinerary uses a high camp at around 5,600 m, which shortens summit day considerably and gets the group onto the headwall before the sun softens the snow. Climbing from base camp is possible and saves a night in a cold tent, but makes for an eighteen-hour day. Your guide decides on the ground based on the group's condition." },
      { question: "How cold does it get at high camp and on the summit?", answer: "High camp falls to around -15°C to -20°C overnight in season, and the summit ridge before dawn, with wind, feels considerably colder. Once the sun is on the face it warms quickly. The problem is almost never the daytime temperature; it is the four hours before sunrise." },
      { question: "What is the accommodation like on the trek and at base camp?", answer: "Teahouse lodges from Lukla to Chhukung — twin rooms with a shared bathroom, a heated dining room and no heating in the bedrooms. From base camp upward it is two-person tents with a mess tent, kitchen tent and toilet tent, and a cook crew who travel with the group." },
      { question: "Is there mobile signal, Wi-Fi and charging on the route?", answer: "NTC and Ncell cover most of the Khumbu, and Everest Link Wi-Fi is sold by the lodges. Charging is available in lodges for a few hundred rupees a device. At base camp there is neither, so carry a power bank and keep it in your sleeping bag — cold flattens batteries faster than use does." },
      { question: "What happens on the spare day if we do not need it?", answer: "If the summit goes on schedule, the spare day is simply walked back down the valley and you reach Lukla a day early, which is a useful buffer against a cancelled flight. It is never dropped from the price, because the day it is genuinely needed is the day it earns its place." },
      { question: "Why do flights sometimes leave from Ramechhap instead of Kathmandu?", answer: "In the busiest weeks of spring and autumn, air-traffic congestion at Kathmandu pushes Lukla flights to Manthali airport in Ramechhap, a four to five hour drive away, usually leaving around two in the morning. When that applies to your dates the road transfer is included and we tell you at booking rather than on the day." },
      { question: "Can Island Peak be combined with Everest Base Camp?", answer: "Yes, and it is the most popular combination we run — the Kala Patthar and base camp detour adds about four days and improves acclimatisation before the climb. We offer it as a separate itinerary rather than an add-on, because the days need reordering rather than appending." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: KHUMBU_CITY_HOTELS,
      camping: "Tented accommodation at Island Peak base camp and high camp, with a mess tent, kitchen tent and toilet tent.",
      permits: ISLAND_PERMITS,
      sherpa: SHERPA_LINE,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full day of pre-climb training on the glacier, covering crampons, ice axe, jumar, abseil and rope work.",
        "Yak or porter transport of group climbing equipment and camp gear from Chhukung to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      extra: ["Nepal Mountaineering Association garbage deposit refund processing, if you choose to claim it independently."],
    },
    porterDays: 12,
    gearRentalDays: 14,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "An 18-day itinerary from Kathmandu to the summit of Island Peak (6,189 m) and back, with two acclimatisation nights at Namche and Dingboche, a training day on the glacier, and a spare day held for the weather.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, all teahouse and tented accommodation, three meals a day on the trek and at base camp, the NMA climbing permit and national park fees, a licensed climbing guide with Sherpa support, group climbing equipment and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and expenses caused by weather delays are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Island Peak Climbing (6,189 m) — 18 Days | Green Compass Treks",
      description:
        "Climb Island Peak (Imja Tse, 6,189 m) in 18 days with a licensed guide, Sherpa support, glacier training and a spare weather day. The most climbed 6,000 m summit in Nepal, approached through Namche and the Imja valley.",
      keywords:
        "island peak climbing, imja tse, island peak 6189m, nepal peak climbing, khumbu climbing, island peak itinerary, island peak cost, first himalayan peak",
      tags: "Island Peak, Imja Tse, Everest Region, Peak Climbing, 6000m Peak, Khumbu",
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
        "There is nothing required of you today beyond resting and adjusting to the time difference. If you arrive early enough, the streets of Thamel are the place to pick up anything missing from your kit — the gear shops here are genuinely good and considerably cheaper than home.",
        "Your climbing guide comes to the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The working day of the trip. Your guide runs the full briefing at the hotel: the eighteen-day plan, the acclimatisation profile, what the summit day actually involves hour by hour, and the decisions that get made on the mountain and by whom.",
        "Then the <strong>equipment check</strong>, which is the part that matters. Boots are tried with crampons on, harnesses are fitted over the layers you will actually wear, and anything unsuitable is swapped for rental kit here rather than discovered at 5,600 m. Bring everything you intend to climb in.",
        "Our office lodges the <strong>NMA climbing permit</strong> and the national park paperwork today, which needs your passport and photographs. The rest of the day is yours — Boudhanath and Patan Durbar Square are both worth the afternoon. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi, the first night of the trek.",
      ...PHAKDING,
      html: p(
        "An early start for the flight into <strong>Lukla (2,840 m)</strong> — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop when the peak-season schedule applies. The approach to Tenzing-Hillary Airport, onto a sloping runway cut into the hillside, is one of the memorable arrivals in aviation.",
        "You meet your porters over tea in Lukla, sort loads, and start walking. The trail drops gently north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and prayer wheels turned by the river, with the Dudh Koshi running milky and loud below.",
        "<strong>Phakding (2,610 m)</strong> sits on the riverbank, and arriving lower than you landed is deliberate — it makes for an easy first night. Around 3 to 4 hours of walking. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, a horseshoe of lodges and shops built into a hillside above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "The day the trek starts in earnest. The trail crosses and re-crosses the Dudh Koshi on five suspension bridges hung with prayer flags, climbing gradually through blue pine and rhododendron to <strong>Monjo</strong>, where your permits are checked at the <strong>Sagarmatha National Park</strong> entrance.",
        "After Jorsalle comes the <strong>Hillary Bridge</strong>, the high one, strung across the confluence of the Dudh Koshi and the Bhote Koshi. Immediately beyond it the trail turns uphill for the long, steady climb to Namche — around 600 m of ascent, and the first honest effort of the trip.",
        "Partway up, on a clear morning, is the first view of <strong>Everest</strong> over the Nuptse-Lhotse ridge. <strong>Namche Bazaar (3,440 m)</strong> is the Sherpa capital, built in a natural amphitheatre, with bakeries, gear shops and an ATM. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, where the acclimatisation day builds the base for everything above.",
      ...NAMCHE,
      html: p(
        "A rest day in name only. The rule of acclimatisation is to climb high and sleep low, so we spend the morning walking up to the <strong>Everest View Hotel (3,880 m)</strong>, where the terrace looks straight up the valley at Everest, Lhotse, Nuptse and Ama Dablam.",
        "From there the path continues to <strong>Khumjung</strong> and <strong>Khunde</strong>, twin villages under the green wall of Khumbi Yul Lha, with a monastery that keeps what it describes as a yeti scalp, and the hospital Edmund Hillary's foundation built in 1966.",
        "Back in Namche the afternoon is free for the Sherpa Culture Museum, the Saturday market if the day falls right, and a proper coffee. Your guide takes the first oxygen saturation readings this evening. Around 4 hours of walking. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle, facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "One of the most beautiful walking days in Nepal. The trail contours north out of Namche on a near-level balcony path high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead almost the whole way and Everest, Lhotse and Nuptse over your left shoulder.",
        "At Phunki Thenga the path drops steeply to the river, crosses it, and climbs 600 m through rhododendron and birch forest to the saddle at Tengboche. It is a long, honest climb and the altitude is starting to be noticeable.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu, rebuilt after a fire in 1989. The afternoon prayer ceremony is open to visitors and worth arranging your day around. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled barley fields in the Imja valley, below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "The last of the trees. The trail descends through birch and juniper to <strong>Deboche</strong>, crosses the Imja Khola on a bridge high above a gorge, and climbs to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the valley.",
        "Above Pangboche the landscape changes completely — the forest gives out and the valley opens into a wide, treeless glacial trough of grey moraine and grazing land, with the walls of Ama Dablam, Lhotse and Island Peak closing in ahead.",
        "<strong>Dingboche (4,410 m)</strong> is a scatter of stone-walled potato and barley fields at the junction of the Imja and Khumbu valleys. Above 4,000 m you feel every hundred metres. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above it.",
      ...DINGBOCHE,
      html: p(
        "The most important day of the trek. We climb the ridge directly behind the village to <strong>Nangkartshang Peak (5,083 m)</strong>, a steep but non-technical two to three hour ascent on a well-worn path of scree and rock.",
        "The height gained is the point: touching 5,000 m and sleeping 600 m lower is what makes the summit push possible ten days from now. The view is extraordinary in its own right — <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Island Peak and Taboche laid out around you.",
        "Back down for a late lunch, then rest. Drink four litres today, eat more than you feel like, and let your guide take the evening saturation reading. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "A small cluster of lodges at the head of the Imja valley, the last settlement before base camp.",
      ...CHHUKUNG,
      html: p(
        "A short, gentle day, and deliberately so — the loads and the altitude both step up from here. The trail runs east up the Imja valley on the moraine, climbing steadily through grazing land with the <strong>Lhotse south face</strong> filling the sky to the north.",
        "This is the wall the Poles first climbed in winter and the one most alpinists still consider unfinished business. On the other side of the valley the ice of Ama Dablam's east flank hangs above the trail.",
        "<strong>Chhukung (4,730 m)</strong> is a handful of lodges on the moraine, and the last teahouse before base camp. The afternoon is for a short acclimatisation walk toward Chhukung Ri and a final gear sort — from tomorrow you are on tents. Around 3 hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Island Peak Base Camp (5,087 m)",
      elevation: "5,087 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "A tented camp on the sandy flats below the Imja glacier, at the foot of the peak.",
      ...ISLAND_BC,
      html: p(
        "A half day of walking with a large change in feel. The trail leaves Chhukung heading south-east, crosses a stream on a plank bridge, and follows the moraine of the Imja and Lhotse glaciers up a broad, stony valley.",
        "The final stretch runs across sandy flats between the moraine walls, and <strong>Island Peak Base Camp (5,087 m)</strong> appears as a scatter of tents beneath the mountain itself. The cook crew arrives ahead of you and camp is standing when you get there.",
        "The afternoon is for settling in, testing that your boots and crampons still fit over the layers, and sleeping. Your guide talks through the summit plan and the timings. It gets cold fast once the sun leaves the valley. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Pre-Climb Training and Move to High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Island Peak High Camp",
      placeDescription: "A small tented camp on a rock shoulder above base camp, at the edge of the glacier.",
      ...ISLAND_HIGH_CAMP,
      html: p(
        "The morning is the <strong>training day</strong>, run on the glacier ice below camp. You fit crampons and walk on them until it stops feeling strange, learn to hold and use the ice axe, ascend a fixed line on a jumar, abseil back down on a figure-of-eight, and practise clipping past an anchor.",
        "None of it is difficult on flat ground in daylight, which is exactly why we do it here — at two in the morning on a 50-degree wall, you want the movements already in your hands. Your guide watches each climber individually and fixes what needs fixing.",
        "After lunch we move up to <strong>high camp (5,600 m)</strong>, two to three hours up the rock shoulder above base camp. An early dinner, boots and harness laid out ready, and sleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Island Peak (6,189 m) and Descend to Base Camp (5,087 m)",
      elevation: "6,189 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "The 6,189 m summit of Imja Tse, reached by a fixed-rope headwall and a corniced snow ridge.",
      ...ISLAND_BC,
      html: p(
        "Up at one, tea and something to eat, and moving by two. The first section is a steep gully of loose rock and scree by headlamp — unglamorous, cold, and the part most people remember as the hardest. It leads onto the ridge and up to the <strong>glacier at around 5,900 m</strong>.",
        "Here you put on crampons and rope up. The glacier crossing weaves between crevasses on a snow ramp, sometimes over a ladder, to the foot of the <strong>headwall</strong>: about 100 m of ice at 45 to 50 degrees, climbed on the fixed line with a jumar, with the sun usually arriving partway up.",
        "The wall tops out on a <strong>corniced summit ridge</strong>, narrow and exposed, followed one at a time to the top. <strong>Island Peak (6,189 m)</strong> looks across at the Lhotse wall, Makalu, Baruntse, Ama Dablam and Nuptse. Then down: abseil the headwall, reverse the glacier and the gully, and reach base camp in the afternoon. Twelve to fifteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Spare Day for Summit Contingency",
      elevation: "5,087 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "The reserve day held at base camp for weather, conditions, or a second attempt.",
      ...ISLAND_BC,
      html: p(
        "A day built into the itinerary and held in reserve. Weather closes the summit ridge more often than anything else on this peak, and a day in hand converts what would be a failed trip into a summit twenty-four hours later.",
        "If the mountain was climbed yesterday, this day is used to walk out early — the group descends toward Chhukung and Pangboche and gains a spare day at the Lukla end, which is worth having when flights are cancelled.",
        "If yesterday was turned back by wind, fresh snow or a member's condition, this is the second attempt. Your guide makes that call at base camp on the evidence in front of them, not on the schedule. Overnight at base camp or Chhukung.",
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
        "Below Dingboche the trail contours across the hillside to <strong>Pangboche (3,930 m)</strong>, avoiding the climb back over the Tengboche ridge. Juniper and birch reappear, and with them the first bird noise in a week.",
        "The <strong>Pangboche monastery</strong> above the village is the oldest in the Khumbu and worth the short walk up. Around 6 to 7 hours. Overnight at Pangboche.",
      ),
    },
    {
      title: "Trek from Pangboche (3,930 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached again on the walk out with the peak behind you.",
      ...NAMCHE,
      html: p(
        "Back down through <strong>Deboche</strong> and up the short climb to <strong>Tengboche</strong>, where it is worth stopping at the monastery again — the view of Ama Dablam from the saddle reads differently once you have been up something yourself.",
        "The descent to Phunki Thenga is steep on tired knees, and then the balcony trail contours back around the hillside to Namche, high above the river, with Everest and Lhotse visible behind you for the last time.",
        "<strong>Namche Bazaar (3,440 m)</strong> in the afternoon means a hot shower, a bakery and a beer, all of which land differently after two weeks. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town, built on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day, and the longest descent of the trip. From Namche the trail drops steeply to the Hillary Bridge, then follows the Dudh Koshi downstream through <strong>Jorsalle</strong> and <strong>Monjo</strong>, where you check out of the national park.",
        "Through <strong>Phakding</strong>, past the mani walls, and then the sting in the tail — the final climb up to <strong>Lukla (2,840 m)</strong>, which feels considerably longer than it looks on the map.",
        "The evening in Lukla is the traditional end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights leave early, before the wind builds in the valley, so it is a dawn start to the airport. The flight to <strong>Kathmandu</strong> takes thirty-five minutes, or lands at Manthali with a road transfer onward when the peak-season schedule applies.",
        "Flights here are weather-dependent and delays are normal rather than exceptional, which is one reason we do not schedule an international departure for today.",
        "Back in Kathmandu the afternoon is free — a long shower, and Thamel for whatever you have been thinking about eating since Dingboche. Your <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. Depending on your flight time there may be a last morning in Kathmandu for the shopping you did not get to, or a final walk around Thamel.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
        "If you are staying on in Nepal, we are glad to arrange onward travel — Chitwan, Pokhara, Lumbini or a Kathmandu valley tour all fit neatly onto the end of a climb. Safe travels, and we hope to climb with you again.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const islandPeakFromChhukung: Climb = {
  region: "Everest Region",
  price: 2150,
  difficulty: "challenging",
  maxAltitude: 6189,
  grade: "PD+",
  center: [86.87, 27.9],
  zoom: 11,
  content: {
    slug: "island-peak-climbing-from-chhukung",
    title: "Island Peak Climbing From Chhukung",
    overview:
      "<p>This is <strong>Island Peak (6,189 m)</strong> climbed the lean way. Instead of establishing a base camp on the sandy flats below the Imja glacier and living there for three nights with a cook crew, the group stays in the <strong>lodges at Chhukung (4,730 m)</strong>, trains on the glacier from there, and goes to the mountain with a single tented night at high camp. Fourteen days from landing in Kathmandu to flying home, and a meaningfully lower price for the same summit.</p><p>The trade-off is real and worth stating plainly: there is <strong>no spare day</strong>. A classic Island Peak itinerary carries a reserve day that turns a windy summit morning into a summit twenty-four hours later, and this one does not. What it offers instead is a bed, a heated dining room and a hot meal every night up to the day before the climb, which is why experienced trekkers with limited leave choose it. If your dates are fixed and your fitness is good, it is the most efficient way onto the top of Imja Tse.</p>",
    highlights: [
      ["Summit Island Peak (6,189 m)", "The same summit and the same route as the full itinerary, reached in fourteen days rather than seventeen."],
      ["Lodge-Based to 4,730 m", "Sleep in the teahouses at Chhukung rather than a base camp tent, with only one night under canvas."],
      ["Glacier Training Above Chhukung", "A dedicated training session on the ice, covering crampons, jumar, abseil and rope work before the push."],
      ["Full Khumbu Acclimatisation Kept Intact", "Two nights at Namche and two at Dingboche with the Nangkartshang climb — nothing is cut from the acclimatisation."],
      ["A Lower Price for the Same Peak", "Removing the base camp and its cook crew takes several hundred dollars off the cost of the climb."],
    ],
    sections: [
      BEST_TIME_KHUMBU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>The grade is <strong>PD+</strong>, unchanged — the mountain does not care which camp you slept in. What changes is the shape of the days around it. You walk from Chhukung to <strong>high camp (5,600 m)</strong> in one push of four to five hours instead of two easy half-days, and after the summit you descend all the way back to Chhukung rather than stopping at base camp.</p><p>Summit day itself is identical: a two o'clock start, a steep boulder gully in the dark, a roped glacier crossing between crevasses, the <strong>100 m headwall at 45 to 50 degrees</strong> on fixed rope, and a corniced ridge to the top. Twelve to fifteen hours round trip. The absence of a contingency day means the weather has one chance rather than two, so a settled forecast matters more on this itinerary than on any other we run.</p>",
      },
      {
        heading: "Who This Itinerary Suits",
        content:
          "<p>Choose this version if you have <strong>trekked at altitude before</strong> — Everest Base Camp, Annapurna Circuit, Manaslu or similar — and know from experience that you acclimatise normally. Choose it if your leave is fixed at two weeks, or if the difference in price is what decides whether the trip happens at all. It is also the better choice for anyone who simply sleeps badly in a tent.</p><p>Choose the <strong>seventeen-day itinerary</strong> instead if this is your first time above 5,000 m, if you want the reserve day, or if you would rather spend two unhurried nights at base camp getting used to the mountain before climbing it. Neither is a better climb than the other; they are built for different climbers, and we would rather talk you into the right one than sell you the cheaper one.</p>",
      },
      INSURANCE_6000,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>The list is the same as the full itinerary with one saving: you need <strong>one night's worth of high camp comfort</strong>, not three. Bring <strong>double mountaineering boots</strong> or a warm single boot rated for 6,000 m, broken in, and trekking boots for the walk. A <strong>-20°C sleeping bag</strong>, heavy down jacket, waterproof shell, insulated and liner gloves, warm hat, buff, category 4 glacier glasses, goggles, gaiters, headlamp with spares, and factor 50 sunscreen.</p><p>Because you are lodge-based to Chhukung, your duffel can stay heavier and your day sack lighter for most of the trip — only what you need at high camp goes up on the last day. <strong>Group climbing equipment is provided</strong> and the crew fixes the headwall. <strong>Personal hardware can be rented as an add-on</strong>, fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "What exactly is different about climbing from Chhukung?", answer: "You skip the two nights at Island Peak base camp. The group sleeps in Chhukung lodges up to the day of the move, walks straight through base camp to high camp at 5,600 m, summits, and comes all the way down to Chhukung. One tented night instead of three, and one cook crew fewer to pay for." },
      { question: "Is it harder than the standard itinerary?", answer: "Marginally, on two days. The walk to high camp is longer in one go, and the descent after the summit continues past base camp down to Chhukung, which adds two or three hours to an already long day. Everything else, including the acclimatisation, is identical." },
      { question: "Why is there no contingency day?", answer: "Because that is what makes it a fourteen-day trip. It is the honest cost of the shorter schedule, and we say so at booking rather than in the small print. If the summit morning is unclimbable, there is no second morning to use." },
      { question: "Can I add a spare day if I want one?", answer: "Yes — we can extend the itinerary by a day at Chhukung for the cost of the extra lodge night, guide and staff time. Tell us at booking rather than on the mountain, because the permit dates and the Lukla flights have to be set around it." },
      { question: "Where does the training day happen without a base camp?", answer: "On the glacier ice above Chhukung, reached in about ninety minutes from the lodges on the morning of the move up. The session covers exactly the same ground — crampons, ice axe, jumar, abseil and clipping past anchors — and then the group continues to high camp the same day." },
      { question: "What are the lodges at Chhukung like?", answer: "Basic and warm enough. Twin rooms with plywood walls, shared bathrooms, a dining room heated by a yak-dung stove in the evening, and a menu that runs to dal bhat, noodles, soup and eggs. There is no heating in the bedrooms, which is why the sleeping bag still matters." },
      { question: "Is the success rate lower without the spare day?", answer: "Slightly, and the difference is weather rather than fitness — roughly five to ten percentage points across a season. In a settled spell there is no difference at all. Departures booked at the shoulder of the season are the ones where the reserve day pays for itself." },
      { question: "Do I still get the same guide-to-climber ratio?", answer: "Yes. One climbing Sherpa for every two climbers above base camp, plus the lead climbing guide, on this itinerary exactly as on the longer one. Nothing is thinned out on the mountain to make the schedule shorter." },
      { question: "Can I upgrade to the full itinerary after booking?", answer: "Up to about three weeks before departure, yes, subject to permit and flight changes. After that the Lukla seats and the base camp crew are committed. It is much easier to book the longer version and shorten it than the other way round." },
      { question: "What happens to my duffel while I am at high camp?", answer: "It stays in the lodge at Chhukung, where the group is returning anyway. You carry only what the night and the summit need — sleeping bag, down jacket, climbing kit, headlamp, water and food — which keeps the pack under 10 kg for the walk up." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping: "One tented night at Island Peak high camp (5,600 m), with a mess tent and toilet tent.",
      permits: ISLAND_PERMITS,
      sherpa: SHERPA_LINE,
      extra: [
        "A pre-climb training session on the glacier above Chhukung, covering crampons, ice axe, jumar, abseil and rope work.",
        "Porter transport of group climbing equipment and camp gear from Chhukung to high camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      extra: [
        "An additional contingency day, which this itinerary does not include and which can be added at extra cost if requested at booking.",
      ],
      unforeseen:
        "Any additional accommodation, transport, or expenses caused by weather, flight delays or a summit attempt abandoned for conditions — this itinerary carries no reserve day.",
    },
    porterDays: 10,
    gearRentalDays: 11,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 14-day lodge-based itinerary to the summit of Island Peak (6,189 m), staying in the teahouses at Chhukung with a single tented night at high camp and no base camp.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse accommodation to Chhukung, one high camp tent night, all meals on the trek, the NMA climbing permit and park fees, a licensed climbing guide with Sherpa support, group climbing equipment and the training session are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and any contingency day are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Island Peak Climbing From Chhukung (6,189 m) — 14 Days | Green Compass Treks",
      description:
        "Climb Island Peak from Chhukung in 14 days — lodge-based to 4,730 m with a single high camp night, full Khumbu acclimatisation, glacier training and licensed Sherpa support, at a lower cost than the base camp itinerary.",
      keywords:
        "island peak from chhukung, island peak short itinerary, imja tse climbing, cheap island peak climbing, 14 day island peak, khumbu peak climbing",
      tags: "Island Peak, Chhukung, Everest Region, Peak Climbing, 6000m Peak, Short Itinerary",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong> and are met in the arrivals hall and driven to your hotel in Thamel.",
        "Because this itinerary has no spare day in Kathmandu, the <strong>briefing and equipment check</strong> happen this evening rather than tomorrow. Your guide runs through the fourteen-day plan, the acclimatisation profile and the summit day, then fits harnesses and tries boots with crampons. Anything unsuitable is swapped for rental kit tonight.",
        "Our office lodges the <strong>climbing permit</strong> and park paperwork with your passport and photographs. Aim to be asleep early — tomorrow starts before dawn. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "The flight into <strong>Lukla (2,840 m)</strong> leaves at first light — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season. The landing on the sloping runway at Tenzing-Hillary Airport is a memorable way to start.",
        "Loads are sorted over tea with the porters, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and water-driven prayer wheels, with the Dudh Koshi running loud below.",
        "<strong>Phakding (2,610 m)</strong> sits lower than Lukla, which makes for a gentle first night. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five suspension bridges hung with prayer flags carry the trail back and forth across the Dudh Koshi, climbing through blue pine to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> checkpoint.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> spans the confluence high above the water, and beyond it the trail turns uphill for 600 m of steady climbing — the first real work of the trip.",
        "There is a first sight of <strong>Everest</strong> partway up on a clear morning. <strong>Namche Bazaar (3,440 m)</strong> has bakeries, gear shops and an ATM, and is where the altitude first becomes a subject rather than a number. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace looks straight up the valley at Everest, Lhotse, Nuptse and Ama Dablam.",
        "The path carries on to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha, past the monastery with its disputed yeti scalp and the hospital built by Edmund Hillary's foundation in 1966.",
        "Afternoons are free in Namche — the Sherpa Culture Museum, the Saturday market, a coffee. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "The balcony trail out of Namche runs nearly level for two hours high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead and the Everest massif over your shoulder.",
        "At Phunki Thenga the path drops to the river and then climbs 600 m through rhododendron and birch to the saddle — a long pull, and the altitude is now doing some of the work against you.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu. The afternoon prayer ceremony is open to visitors and worth timing your arrival for. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, across the Imja Khola on a bridge above a narrow gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa village in the Khumbu.",
        "Above Pangboche the trees stop. The valley opens into a wide grey trough of moraine and grazing land, walled by Ama Dablam, Lhotse and, ahead, Island Peak itself.",
        "<strong>Dingboche (4,410 m)</strong> is a scatter of stone-walled potato and barley fields at the junction of two valleys. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint above it.",
      ...DINGBOCHE,
      html: p(
        "The day that makes the summit possible. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep, non-technical, two to three hours on scree and rock.",
        "Touching 5,000 m and sleeping 600 m below it is the whole point, and the view is a bonus: <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Taboche and your own objective spread around you.",
        "The rest of the day is rest, four litres of water, and more food than you want. Your guide takes saturation readings this evening and makes a note of anyone lagging. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "A cluster of lodges at the head of the Imja valley, the base for this itinerary.",
      ...CHHUKUNG,
      html: p(
        "A short day east up the Imja valley on the moraine, climbing gently through grazing land with the <strong>3,000 m south face of Lhotse</strong> filling the head of the valley.",
        "<strong>Chhukung (4,730 m)</strong> is where this itinerary makes its home — the last lodges before the mountain, and the base you will return to after the summit.",
        "The afternoon is a short acclimatisation walk toward Chhukung Ri and a careful gear sort. Everything you do not need at high camp stays here in your duffel. Around 3 hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Glacier Training and Trek from Chhukung (4,730 m) to High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Island Peak High Camp",
      placeDescription: "A tented camp on the rock shoulder above the Imja glacier, the single night under canvas.",
      ...ISLAND_HIGH_CAMP,
      html: p(
        "Out early to the glacier ice above Chhukung for the <strong>training session</strong>: crampons on until they stop feeling strange, ice axe in hand, a fixed line ascended on a jumar, an abseil on a figure-of-eight, and clipping past an anchor. Your guide works with each climber individually.",
        "After an early lunch the group continues past <strong>Island Peak base camp (5,087 m)</strong> without stopping and climbs the rock shoulder to <strong>high camp (5,600 m)</strong> — four to five hours in total, and the longest carry of the trip.",
        "Camp is standing when you arrive. Dinner is early, boots and harness are laid out ready, and everyone is asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Island Peak (6,189 m) and Descend to Chhukung (4,730 m)",
      elevation: "6,189 m",
      accommodation: "Chhukung",
      placeDescription: "The 6,189 m summit of Imja Tse, climbed and descended in a single long day back to the lodges.",
      ...CHHUKUNG,
      html: p(
        "Moving by two in the morning. The first section is a steep gully of loose rock by headlamp, unpleasant and cold, leading onto the ridge and up to the <strong>glacier at around 5,900 m</strong>.",
        "Crampons on and roped up, the route weaves between crevasses to the foot of the <strong>headwall</strong> — 100 m of ice at 45 to 50 degrees on fixed line, usually with the sun arriving partway up — and tops out on a <strong>corniced ridge</strong> followed one at a time to the summit.",
        "From <strong>Island Peak (6,189 m)</strong> the view runs from Lhotse's wall to Makalu, Baruntse, Ama Dablam and Nuptse. Then the whole thing in reverse, past high camp and base camp, all the way down to <strong>Chhukung</strong> — fourteen to seventeen hours in total. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached in one long descent from the head of the valley.",
      ...NAMCHE,
      html: p(
        "A long descent, and an easy one after yesterday. The trail drops down the Imja valley through <strong>Dingboche</strong> and contours across the hillside to <strong>Pangboche</strong>, thick air arriving with every hundred metres lost.",
        "Down through <strong>Deboche</strong>, over the <strong>Tengboche</strong> saddle for a last look at Ama Dablam from the monastery, then the steep drop to Phunki Thenga and the balcony trail back around to Namche.",
        "<strong>Namche Bazaar (3,440 m)</strong> in the late afternoon, with a hot shower and a bakery. Around 8 to 9 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day. Steeply down from Namche to the Hillary Bridge, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, where you check out of the national park.",
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb up to <strong>Lukla (2,840 m)</strong>, which is always longer than anyone expects on the last day.",
        "The evening is the end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights go early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward in peak season.",
        "Delays here are normal rather than exceptional, which is why we never schedule an international departure for today. If the weather closes Lukla entirely, a helicopter seat to Kathmandu can usually be arranged the same day at your own cost, and your guide handles the booking.",
        "Bags come off the aircraft at the domestic terminal and our vehicle is waiting outside it. The drive into Thamel takes half an hour in traffic that will feel absurd after two weeks of yak trains.",
        "The afternoon in Kathmandu is free — a long shower and Thamel. Your <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. Depending on your flight there may be a last morning for shopping or a walk around Thamel.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we are glad to arrange onward travel — Chitwan for the jungle, Pokhara for the lake, Lumbini for the birthplace of the Buddha, or a day around the Kathmandu valley temples. All of them sit neatly on the end of a climb and none of them need more than a few days.",
        "Safe travels, and we hope to climb with you again. If Island Peak has left you wanting something harder, Lobuche East and Ama Dablam are the two peaks our returning climbers ask about most.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const islandPeakHelicopterReturn: Climb = {
  region: "Everest Region",
  price: 3550,
  difficulty: "challenging",
  maxAltitude: 6189,
  grade: "PD+",
  center: [86.85, 27.88],
  zoom: 10,
  content: {
    slug: "island-peak-climbing-with-helicopter-return",
    title: "Island Peak Climbing With Helicopter Return",
    overview:
      "<p>The walk out is the part of a Himalayan climb nobody remembers fondly. Three days of retracing the same trail on tired legs, a night in Lukla, and then a flight that may or may not go. This itinerary keeps every good day of the <strong>Island Peak (6,189 m)</strong> climb — the full Khumbu approach, the acclimatisation, the training day, the base camp and the summit — and replaces the descent with a <strong>helicopter from Chhukung straight to Kathmandu</strong>.</p><p>It saves three days and removes the single biggest source of schedule risk on any Everest region trip: the Lukla flight. It also gives you something no walking itinerary can, which is the Khumbu seen from a thousand feet above the trail you have just spent two weeks on — <strong>Ama Dablam, Tengboche, the Dudh Koshi gorge and the terraced hills below Lukla</strong> in about fifty minutes. A reserve day is still built in before the flight, so the summit keeps its second chance.</p>",
    highlights: [
      ["Summit Island Peak (6,189 m)", "The full base camp itinerary with a training day and a reserve day, nothing trimmed from the climb itself."],
      ["Helicopter from Chhukung to Kathmandu", "Fly out from 4,730 m directly to the capital, over Ama Dablam, Tengboche and the Dudh Koshi gorge."],
      ["Three Days Saved on the Descent", "Skip the walk back to Lukla and the wait for a fixed-wing flight that weather regularly cancels."],
      ["A Reserve Day Before the Flight", "The contingency day sits between the summit and the helicopter, so a bad morning on the ridge still has a second chance."],
      ["The Khumbu from the Air", "See the whole approach — Dingboche, Pangboche, Namche and the gorge — laid out beneath you on the way home."],
    ],
    sections: [
      BEST_TIME_KHUMBU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD+</strong>, with a long summit day and no technical climbing beyond fixed-rope work on ice. From high camp at 5,600 m it is twelve to fifteen hours round trip, starting at two in the morning: a steep boulder gully in the dark, a roped glacier crossing between crevasses, the <strong>100 m headwall at 45 to 50 degrees</strong> on a jumar, and a corniced summit ridge climbed one at a time.</p><p>The helicopter changes nothing about the mountain and everything about your legs afterwards. Climbers on the walking itinerary descend 1,300 m to Pangboche the day after the summit and keep going for two more days; here you drop to base camp, take the reserve day, walk two easy hours to Chhukung and fly. If knees are your weak point rather than lungs, that is the difference this itinerary buys.</p>",
      },
      {
        heading: "How the Helicopter Flight Works",
        content:
          "<p>The aircraft is an <strong>AS350 B3e</strong>, the machine that does almost all high-altitude work in Nepal, flown by a pilot with Khumbu experience. It lifts from the landing zone at <strong>Chhukung (4,730 m)</strong> in the morning, when the air is still and cold and the machine performs best, and flies to Kathmandu in about fifty minutes, usually with a fuel stop at Lukla or Surke.</p><p>At altitude the B3e carries a maximum of <strong>five passengers</strong> and often fewer depending on temperature, fuel and load, so a larger group flies in two shuttles an hour or so apart. <strong>Weather is still the deciding factor</strong>: helicopters cannot fly into cloud in the Khumbu, and a socked-in morning means waiting until midday or, occasionally, until the next day. Your seat is held either way, and if the flight is impossible for more than twenty-four hours we walk out and refund the unused sector.</p>",
      },
      INSURANCE_6000,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Standard 6,000 m kit, with one practical note about the flight. Bring <strong>double mountaineering boots</strong> or a warm single boot rated for 6,000 m, trekking boots for the walk in, a <strong>-20°C sleeping bag</strong>, heavy down jacket, waterproof shell, insulated and liner gloves, warm hat, buff, category 4 glacier glasses, goggles, gaiters, headlamp with spares and factor 50 sunscreen.</p><p>The helicopter has a <strong>strict weight limit</strong> that includes your baggage, so keep the total to around 15 kg per person and expect the crew to weigh duffels at Chhukung. Anything above that flies on a later shuttle or comes down with the porters. <strong>Group climbing equipment is provided</strong>, the crew fixes the headwall, and <strong>personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu.</p>",
      },
    ],
    faqs: [
      { question: "Does the helicopter fly all the way from Chhukung, or do we walk down first?", answer: "It lifts from the landing zone at Chhukung itself, at 4,730 m, so the only walking after the summit is the two easy hours down from base camp. In poor visibility at Chhukung the pilot may ask the group to descend to Dingboche or Pangboche, where the cloud base is usually higher." },
      { question: "What happens if the helicopter cannot fly?", answer: "You wait — most Khumbu weather clears by late morning. If a full day passes with no window, we walk the group down toward Namche and fly from there or from Lukla. If the sector is never flown, its cost is refunded in full." },
      { question: "How many people fit in the helicopter?", answer: "Up to five passengers at Khumbu altitudes, and fewer on a warm morning or a heavy load, because thin air limits what the machine can lift. Groups larger than five fly in shuttles roughly an hour apart, and your guide flies with the last one." },
      { question: "Is the helicopter charter shared with other travellers?", answer: "The sector price in your package is based on a shared shuttle running to our own schedule. If you want a private charter at a time of your choosing we can arrange it, and the difference is quoted at booking." },
      { question: "Is flying out bad for acclimatisation or recovery?", answer: "No. Descending fast from altitude is entirely safe and is what a rescue would do anyway — it is ascending fast that causes problems. You will feel the extra oxygen within minutes of landing in Kathmandu." },
      { question: "Can I add Everest Base Camp before the climb on this itinerary?", answer: "Yes, and it is a natural fit with the helicopter ending. Adding Lobuche, Gorak Shep, Kala Patthar and base camp extends the trip by about four days and improves your acclimatisation before Island Peak. We quote it as a modified itinerary." },
      { question: "Do I still get a reserve day for the summit?", answer: "Yes. The contingency day sits between summit day and the flight, so a morning turned back by wind or fresh snow can be attempted again. It is one of the reasons this itinerary is fifteen days rather than thirteen." },
      { question: "How much baggage can I take on the flight?", answer: "Around 15 kg per person including your day pack, and duffels are weighed at Chhukung. Excess goes on a later shuttle or comes down by porter and is delivered to your Kathmandu hotel a few days later at no extra cost." },
      { question: "Is the flight safe?", answer: "Khumbu helicopter operations are routine and flown daily through both seasons by pilots who fly nothing else. The operators we use are the ones the rescue services use. The limiting factor is always visibility, and no reputable pilot will push it — a delayed flight is the system working, not failing." },
      { question: "What is the view like on the way back?", answer: "Genuinely one of the highlights. The route runs down the Imja valley past Ama Dablam, over Tengboche on its saddle, above Namche and into the Dudh Koshi gorge, then out over the terraced middle hills to the Kathmandu valley — the whole approach compressed into fifty minutes." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "One-way flight from Kathmandu to Lukla, including the road transfer to Manthali in Ramechhap when the flights are operating from there in peak season.",
        "Helicopter flight from Chhukung to Kathmandu after the climb, on a shared shuttle at our scheduled departure time.",
      ],
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping: "Tented accommodation at Island Peak base camp and high camp, with a mess tent, kitchen tent and toilet tent.",
      permits: ISLAND_PERMITS,
      sherpa: SHERPA_LINE,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full day of pre-climb training on the glacier, covering crampons, ice axe, jumar, abseil and rope work.",
        "Yak or porter transport of group climbing equipment and camp gear from Chhukung to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      extra: [
        "Private helicopter charter, if you would rather not fly on the scheduled shared shuttle.",
        "Excess baggage above the 15 kg per person helicopter allowance, which travels by porter and is delivered to your Kathmandu hotel.",
      ],
      unforeseen:
        "Any additional accommodation or transport caused by a helicopter grounded by weather; the unused sector is refunded if the group walks out instead.",
    },
    porterDays: 9,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 15-day itinerary to the summit of Island Peak (6,189 m) with the full base camp approach, a training day and a reserve day, ending with a helicopter flight from Chhukung directly to Kathmandu.",
    inExDescription:
      "The Lukla flight in, the helicopter flight out, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, all meals on the trek and at base camp, the NMA climbing permit and park fees, a licensed climbing guide with Sherpa support, group climbing equipment and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and private charter upgrades are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Island Peak Climbing With Helicopter Return (6,189 m) — 15 Days | Green Compass Treks",
      description:
        "Climb Island Peak in 15 days and fly out by helicopter from Chhukung to Kathmandu. Full base camp itinerary with glacier training and a reserve day, three days saved on the descent and no Lukla flight to gamble on.",
      keywords:
        "island peak helicopter return, island peak climbing with helicopter, imja tse heli return, island peak 15 days, khumbu helicopter, island peak fly out",
      tags: "Island Peak, Helicopter Return, Everest Region, Peak Climbing, 6000m Peak, Chhukung",
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
        "Nothing is required of you today beyond resting and adjusting to the time difference. The gear shops of Thamel are close by if anything is missing from your kit.",
        "Your climbing guide comes to the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        "The full briefing at the hotel: the fifteen-day plan, the acclimatisation profile, the summit day hour by hour, and the way the <strong>helicopter departure</strong> works — weights, shuttles and what happens if the morning is clouded in.",
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over real layers, and anything unsuitable swapped for rental kit here rather than at 5,600 m.",
        "Our office lodges the <strong>NMA climbing permit</strong> and park paperwork with your passport and photographs. The afternoon is free — Boudhanath or Patan are both easy from Thamel. Overnight in Kathmandu.",
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
        "Loads are sorted with the porters over tea, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and prayer wheels turned by the river.",
        "<strong>Phakding (2,610 m)</strong> lies lower than Lukla, which makes an easy first night. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, a horseshoe of lodges built into a hillside above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges carry the trail across the Dudh Koshi and up through blue pine to <strong>Monjo</strong>, where permits are checked at the <strong>Sagarmatha National Park</strong> gate.",
        "Beyond Jorsalle the <strong>Hillary Bridge</strong> crosses high above the confluence, and then the trail turns uphill for 600 m of steady climbing to Namche — the first real effort of the trip, and the first sight of <strong>Everest</strong> partway up on a clear morning.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, gear shops and an ATM, built into a natural amphitheatre. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace looks straight up the valley at Everest, Lhotse, Nuptse and Ama Dablam.",
        "From there to <strong>Khumjung</strong> and <strong>Khunde</strong> under the green wall of Khumbi Yul Lha, with the monastery's yeti scalp and the hospital built by Edmund Hillary's foundation in 1966.",
        "Afternoon free in Namche for the Sherpa Culture Museum and the Saturday market. First oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "Two hours of near-level balcony trail out of Namche, high above the Dudh Koshi, with <strong>Ama Dablam</strong> ahead the whole way.",
        "At Phunki Thenga the trail drops to the river and climbs 600 m through rhododendron and birch to the saddle — a long pull with the altitude now working against you.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu, rebuilt after the 1989 fire. The afternoon prayer ceremony is open to visitors. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, over the Imja Khola above a gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the valley.",
        "Above Pangboche the trees give out and the valley opens into a wide grey trough of moraine and grazing land, walled by Ama Dablam and Lhotse with Island Peak at its head.",
        "<strong>Dingboche (4,410 m)</strong> sits among stone-walled potato and barley fields at the junction of the Imja and Khumbu valleys. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above.",
      ...DINGBOCHE,
      html: p(
        "The most important day of the approach. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep, non-technical, two to three hours on scree and rock.",
        "Touching 5,000 m and sleeping 600 m lower is what makes the summit push possible. <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam, Taboche and Island Peak arranged around you.",
        "Back down for a late lunch and rest. Four litres of water, more food than you feel like, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "The lodges at the head of the Imja valley, and the helicopter landing zone for the flight home.",
      ...CHHUKUNG,
      html: p(
        "A short, gentle day east up the Imja valley on the moraine, climbing steadily through grazing land beneath the <strong>3,000 m south face of Lhotse</strong>.",
        "<strong>Chhukung (4,730 m)</strong> is a handful of lodges on the moraine — the last teahouse before base camp, and the place you will fly out from in six days' time. Worth noting the landing zone as you arrive.",
        "The afternoon is a short acclimatisation walk toward Chhukung Ri and a final gear sort before the tents. Around 3 hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Island Peak Base Camp (5,087 m)",
      elevation: "5,087 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "A tented camp on the sandy flats below the Imja glacier, at the foot of the peak.",
      ...ISLAND_BC,
      html: p(
        "A half day of walking. The trail leaves Chhukung south-east, crosses a stream on planks, and follows the moraine of the Imja and Lhotse glaciers up a broad stony valley.",
        "<strong>Island Peak Base Camp (5,087 m)</strong> stands on sandy flats between the moraine walls, and the cook crew has camp up before you arrive.",
        "The afternoon is for settling in, checking crampons over the layers you will actually climb in, and sleeping. Your guide talks through the summit timings. Around 3 to 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Pre-Climb Training and Move to High Camp (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Island Peak High Camp",
      placeDescription: "A small tented camp on a rock shoulder above base camp, at the edge of the glacier.",
      ...ISLAND_HIGH_CAMP,
      html: p(
        "The morning is the <strong>training day</strong> on the glacier below camp — crampons until they feel normal, ice axe technique, ascending a fixed line on a jumar, abseiling on a figure-of-eight, and clipping past anchors. Easy on flat ground in daylight, which is the point.",
        "After lunch the group moves up the rock shoulder to <strong>high camp (5,600 m)</strong>, two to three hours with a light load.",
        "Early dinner, boots and harness laid out, asleep by seven. It is a cold night and a short one. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Island Peak (6,189 m) and Descend to Base Camp (5,087 m)",
      elevation: "6,189 m",
      accommodation: "Island Peak Base Camp",
      placeDescription: "The 6,189 m summit of Imja Tse, reached by a fixed-rope headwall and a corniced snow ridge.",
      ...ISLAND_BC,
      html: p(
        "Up at one, moving by two. A steep gully of loose rock by headlamp leads onto the ridge and up to the <strong>glacier at around 5,900 m</strong>, where you fit crampons and rope up.",
        "The glacier weaves between crevasses to the foot of the <strong>headwall</strong> — around 100 m of ice at 45 to 50 degrees on fixed rope — which tops out on a <strong>corniced ridge</strong> followed one at a time to the summit.",
        "<strong>Island Peak (6,189 m)</strong> looks across at the Lhotse wall, Makalu, Baruntse, Ama Dablam and Nuptse. Then abseil the headwall, reverse the glacier and the gully, and reach base camp in the afternoon. Twelve to fifteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Base Camp (5,087 m) or Descent to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "The reserve day, spent either at base camp for a second summit attempt or walking down to Chhukung.",
      ...CHHUKUNG,
      html: p(
        "The day held in reserve. If yesterday was turned back by wind, fresh snow or a member's condition, this is the second attempt, and your guide makes that call at base camp on what is actually in front of them.",
        "If the summit went to plan, camp comes down after a slow breakfast and the group walks the easy two to three hours back to <strong>Chhukung (4,730 m)</strong> — the only walking your legs have to do after the climb.",
        "An afternoon in a lodge with a stove, a shower if the water is running, and the first proper sleep in days. Your guide confirms the helicopter timing with Kathmandu this evening. Overnight at Chhukung.",
      ),
    },
    {
      title: "Helicopter Flight from Chhukung (4,730 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Duffels are weighed after breakfast and the group waits for the machine. Helicopters fly the Khumbu in the morning when the air is cold and still, so the departure is early and the wait, if there is one, is for cloud to lift.",
        "The <strong>AS350 B3e</strong> takes up to five at this altitude, so a larger group flies in shuttles about an hour apart. The route runs down the Imja valley past <strong>Ama Dablam</strong>, over the <strong>Tengboche</strong> saddle, above Namche and into the <strong>Dudh Koshi gorge</strong>, usually with a fuel stop at Lukla, then out over the terraced middle hills.",
        "Fifty minutes of flying and you are in <strong>Kathmandu (1,400 m)</strong>, two weeks of trail compressed into one view. The afternoon is free and the <strong>summit certificate</strong> is presented in the evening. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. Depending on your flight time there may be a last morning in Kathmandu for shopping or a walk around Thamel.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we are glad to arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels, and we hope to climb with you again.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const lobucheEastPeakClimbing: Climb = {
  region: "Everest Region",
  price: 2750,
  difficulty: "difficult",
  maxAltitude: 6119,
  grade: "AD-",
  center: [86.82, 27.92],
  zoom: 10,
  content: {
    slug: "lobuche-east-peak-climbing",
    title: "Lobuche East Peak Climbing",
    overview:
      "<p><strong>Lobuche East (6,119 m)</strong> is the peak people book when Island Peak no longer sounds like enough. It stands directly above the Khumbu glacier opposite Everest Base Camp, and where Island Peak concentrates its difficulty into one headwall, Lobuche East spreads it across a whole summit day: a long snow and ice slope, an <strong>exposed corniced ridge</strong>, and a genuine notch between the false summit and the true one that a great many parties never cross.</p><p>That distinction matters and we are explicit about it. The <strong>false summit at around 5,970 m</strong> is where a large share of commercial groups stop and go home saying they climbed Lobuche East. The <strong>true summit at 6,119 m</strong> lies beyond a dip in the ridge and takes another hour of committed climbing on steep snow with real exposure on both sides. We climb for the true summit, we carry a reserve day to give it two chances, and we say on the certificate which one you stood on.</p>",
    highlights: [
      ["Summit the True Lobuche East (6,119 m)", "Cross the notch beyond the false summit that most commercial groups turn back at."],
      ["Everest and the Khumbu Icefall Opposite", "Base camp faces Everest Base Camp across the glacier, with Nuptse and Pumori filling the skyline."],
      ["A Genuine Alpine Summit Ridge", "Long, corniced and exposed, moving roped and one at a time on 45–50° snow."],
      ["Harder Than Island Peak, Same Approach", "The natural next step for anyone who has already climbed a 6,000 m trekking peak."],
      ["Reserve Day for a Second Attempt", "A contingency day built into the schedule so weather does not decide the trip on its own."],
    ],
    sections: [
      BEST_TIME_KHUMBU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Lobuche East is graded <strong>AD-</strong> and is a clear step up from Island Peak. The climb starts on a rock and scree buttress above high camp, moves onto the glacier at around 5,500 m, and then follows a long snow and ice slope at <strong>40 to 50 degrees</strong>, steepening in places to short sections nearer 55, all of it on fixed rope.</p><p>The ridge is what defines the peak. It is narrow, heavily corniced on the eastern side, and exposed enough that you move roped and one at a time, sometimes on the crest and sometimes on the steep flank below it. Beyond the <strong>false summit (about 5,970 m)</strong> the ridge drops into a notch and rises again, and this final section — an hour or so of committed snow climbing — is what separates a true ascent from the common one. Ten to fourteen hours from high camp, and stamina is the limiting factor for almost everyone.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>We ask for <strong>previous experience above 5,000 m</strong> and, ideally, a 6,000 m trekking peak already climbed — Island Peak, Mera or an equivalent. You should be comfortable walking in crampons on uneven ground, using a jumar on a fixed line, and abseiling, before you arrive. The training day at base camp refreshes those skills rather than teaching them from scratch.</p><p>Acclimatisation follows the classic Khumbu profile: two nights at <strong>Namche (3,440 m)</strong>, two at <strong>Dingboche (4,410 m)</strong> with the Nangkartshang climb to 5,083 m, and then two nights at base camp at 4,950 m before moving to high camp. It is a strong profile, which the peak needs — summit day gains over 700 m above high camp and stays above 5,700 m for hours. Six months of specific hill fitness is a realistic target for most people.</p>",
      },
      INSURANCE_6000,
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> are strongly recommended rather than optional here — high camp is cold and summit day is long, and cold feet on that ridge end ascents. Add a <strong>-25°C sleeping bag</strong>, a heavy down jacket, a full waterproof and windproof shell, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>We supply all <strong>group climbing equipment</strong> and our Sherpas fix the route above high camp before your summit day. <strong>Personal hardware — harness, crampons, ice axe, jumar, descender, helmet and carabiners — can be rented as an add-on</strong>, fitted and checked in Kathmandu. On a peak with this much fixed-rope work, using your own familiar hardware is worth the baggage allowance if you have it.</p>",
      },
    ],
    faqs: [
      { question: "What is the difference between the false summit and the true summit?", answer: "The false summit at about 5,970 m is a high point on the ridge where the ground eases and the view opens, and many groups stop there. The true summit at 6,119 m is beyond a notch that has to be descended and re-climbed on steep, exposed snow, adding roughly an hour each way. Ask any operator which one their price and their success rate refer to." },
      { question: "How much harder is it than Island Peak?", answer: "Substantially. Island Peak has one sustained section of ice; Lobuche East has a long steep slope followed by a long exposed ridge, and the summit day is two to three hours longer. If Island Peak felt at your limit, do that again before booking this." },
      { question: "Do I need to have climbed a 6,000 m peak before?", answer: "It is not an absolute requirement but it is what we recommend, and we will ask about your history at booking. Previous time above 5,000 m is required. Someone very fit with alpine experience in the Alps or the Andes can come straight to this peak; someone whose highest point is a trekking pass should climb Island or Mera first." },
      { question: "Where exactly are base camp and high camp?", answer: "Base camp sits at about 4,950 m on the moraine below the peak, roughly an hour above Lobuche village. High camp is at around 5,400 m on a rock shoulder, reached in three to four hours from base camp. Both are tented, with a mess tent, kitchen tent and toilet tent." },
      { question: "How long is summit day?", answer: "Ten to fourteen hours round trip from high camp, starting between one and two in the morning. Parties reaching only the false summit typically take eight to ten. The extra hours are the ridge, and they are the hours that need the fitness." },
      { question: "Can I see Everest Base Camp on this trip?", answer: "You look straight across at it from your own base camp, on the far side of the Khumbu glacier. Walking into it is not part of this itinerary; if you want to stand there, our Everest Base Camp and Lobuche Peak combination is built for exactly that and adds two days." },
      { question: "What is the success rate on the true summit?", answer: "Between 60 and 70 percent on our departures, measured against the true summit rather than the false one. That figure is lower than the ninety percent some operators publish, and the difference is almost entirely definitional." },
      { question: "Is there fixed rope the whole way?", answer: "Our Sherpas fix the steep sections above high camp — the buttress, the main ice slope and the exposed parts of the ridge — before summit morning. The easier ground between them is climbed roped together as a team rather than on fixed line." },
      { question: "How cold is high camp at 5,400 m?", answer: "Around -15°C to -20°C overnight in season, colder in a wind, and there is no shelter on the shoulder. This is why we specify a -25°C bag rather than the -20°C that is adequate lower down, and why a hot water bottle at bedtime is a genuinely useful trick." },
      { question: "What happens if part of the group turns back?", answer: "The team splits. One climbing Sherpa descends with anyone stopping, the rest continue — which is exactly why we run a one-to-two Sherpa ratio rather than one guide for a whole rope team. Nobody is asked to keep going and nobody has to end someone else's day." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: KHUMBU_CITY_HOTELS,
      camping: "Tented accommodation at Lobuche East base camp (4,950 m) and high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permit for Lobuche East, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa: SHERPA_LINE,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A pre-climb training day at base camp on crampons, ice axe, fixed-rope ascent and abseil technique.",
        "Fixing of the buttress, ice slope and summit ridge by our climbing Sherpas ahead of the summit push.",
        "Yak or porter transport of group climbing equipment and camp gear to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 12,
    gearRentalDays: 14,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "An 18-day itinerary to the true summit of Lobuche East (6,119 m), with the classic Khumbu acclimatisation, two nights at base camp, a high camp at 5,400 m and a reserve day for a second attempt.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with one Sherpa per two climbers, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Lobuche East Peak Climbing (6,119 m) — 18 Days | Green Compass Treks",
      description:
        "Climb Lobuche East to the true 6,119 m summit in 18 days, not the false summit at 5,970 m. Khumbu acclimatisation, high camp at 5,400 m, fixed ropes, one Sherpa per two climbers and a reserve day.",
      keywords:
        "lobuche east peak climbing, lobuche peak 6119m, lobuche east true summit, lobuche false summit, khumbu peak climbing, lobuche east itinerary",
      tags: "Lobuche East, Everest Region, Peak Climbing, 6000m Peak, Khumbu Glacier, Technical Climb",
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
        "Nothing is asked of you today. Rest, eat, and if you have the energy, walk out into Thamel — the gear shops here stock most of what a climber discovers they have forgotten.",
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
        "The briefing is longer than it would be for an easier peak. Your guide walks through the eighteen-day plan, the acclimatisation profile, and summit day in detail — the buttress, the ice slope, the ridge, and specifically <strong>the notch beyond the false summit</strong> and what crossing it involves.",
        "Then the <strong>equipment check</strong>. Boots are fitted with crampons, harnesses adjusted over climbing layers, and your own hardware inspected. Anything unsuitable is replaced with rental kit here rather than at 5,400 m.",
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
        "An early flight into <strong>Lukla (2,840 m)</strong>, thirty-five minutes from Kathmandu or a pre-dawn drive to Manthali and a twenty-minute hop in peak season, landing on the sloping runway cut into the hillside.",
        "You meet the porters over tea, sort loads, and start north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and prayer wheels turned by the river, with the Dudh Koshi loud below.",
        "<strong>Phakding (2,610 m)</strong> is lower than Lukla, which makes for a gentle first night. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, a horseshoe of lodges built into a hillside above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "The trail crosses the Dudh Koshi five times on prayer-flagged suspension bridges, climbing through blue pine and rhododendron to <strong>Monjo</strong> and the <strong>Sagarmatha National Park</strong> entrance.",
        "Beyond Jorsalle the <strong>Hillary Bridge</strong> spans the confluence high above the water, and then the trail turns uphill for 600 m — the first honest work of the trip, with a first view of <strong>Everest</strong> partway up on a clear day.",
        "<strong>Namche Bazaar (3,440 m)</strong> sits in a natural amphitheatre, with bakeries, gear shops and an ATM. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning walk goes to the <strong>Everest View Hotel (3,880 m)</strong>, whose terrace faces Everest, Lhotse, Nuptse and Ama Dablam straight up the valley.",
        "On to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha, with the monastery's contested yeti scalp and the hospital built by Edmund Hillary's foundation in 1966.",
        "The afternoon is free — the Sherpa Culture Museum, the Saturday market, a coffee. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
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
        "At Phunki Thenga the path drops to the river, crosses it, and climbs 600 m through rhododendron and birch forest to the saddle — a long pull with thin air working against you.",
        "<strong>Tengboche (3,860 m)</strong> holds the largest monastery in the Khumbu, rebuilt after the 1989 fire. The afternoon prayer ceremony is open to visitors. Around 5 to 6 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A summer settlement of stone-walled fields in the Imja valley below Ama Dablam.",
      ...DINGBOCHE,
      html: p(
        "Down through <strong>Deboche</strong>, across the Imja Khola above a narrow gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the Khumbu.",
        "Above Pangboche the last trees give out and the valley opens into a wide grey trough of moraine and grazing land, walled by Ama Dablam, Lhotse and Taboche.",
        "<strong>Dingboche (4,410 m)</strong> lies among stone-walled potato and barley fields at the junction of the Imja and Khumbu valleys. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above it.",
      ...DINGBOCHE,
      html: p(
        "The day the summit is really built on. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep, non-technical, two to three hours on scree and rock.",
        "Touching 5,000 m and sleeping 600 m lower is the whole mechanism of acclimatisation, and from the top <strong>Makalu</strong> rises over the eastern ridge with Lhotse, Ama Dablam, Taboche and Cholatse arranged around you.",
        "Back for a late lunch and rest. Four litres of water, more food than you feel like eating, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Lobuche East Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "A tented camp on the moraine below the peak, facing Everest Base Camp across the Khumbu glacier.",
      ...LOBUCHE_BC,
      html: p(
        "North-west out of Dingboche onto a broad ridge, then along a high shelf above the Pheriche valley to <strong>Thukla (4,620 m)</strong> and the steep pull up the terminal moraine of the Khumbu glacier.",
        "The top of that climb is the <strong>Thukla Pass memorial</strong>, a field of stone chortens and plaques for climbers who died on Everest and the surrounding peaks. Scott Fischer's is here, and Babu Chiri Sherpa's. It is a quiet place to walk through on the way to your own mountain.",
        "Beyond it the trail turns off before Lobuche village and climbs the moraine to <strong>Lobuche East Base Camp (4,950 m)</strong>, where camp is standing when you arrive. Everest Base Camp is visible across the glacier. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training Day and Acclimatisation at Base Camp (4,950 m)",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The tented base camp below the peak, where the climbing skills are checked before the push.",
      ...LOBUCHE_BC,
      html: p(
        "A full day at base camp, and it earns its place twice over — as acclimatisation and as preparation. The morning is spent on the ice below camp working through <strong>crampon technique, ice axe use, ascending fixed line on a jumar, abseiling, and moving as a roped team</strong>.",
        "Because this peak has a long exposed ridge, your guide spends extra time on short-roping and on what to do when the fixed line ends and the team is moving together. Anyone whose technique is rusty gets the attention here rather than on the ridge.",
        "In the afternoon we walk up part of the route toward high camp and come back down — another 300 m gained and lost. Meanwhile our Sherpas are above, <strong>fixing the buttress and the ice slope</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,950 m) to Lobuche East High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Lobuche East High Camp",
      placeDescription: "A tented camp on an exposed rock shoulder at 5,400 m, directly beneath the climbing route.",
      ...LOBUCHE_HIGH_CAMP,
      html: p(
        "A short but steep morning. The route climbs the moraine and then a rock shoulder on loose ground, gaining 450 m in three to four hours with a moderate load — the rest goes up with the crew.",
        "<strong>High camp (5,400 m)</strong> is a set of tent platforms cut into the shoulder, exposed to the wind and with no shelter of any kind. It is not comfortable and it is not meant to be; it exists to put you within reach of the summit.",
        "The view makes up for some of it — Everest, Nuptse, Pumori and the whole sweep of the Khumbu glacier below. Early dinner, kit laid out, asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Lobuche East (6,119 m) and Descend to Base Camp (4,950 m)",
      elevation: "6,119 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The true 6,119 m summit of Lobuche East, beyond the notch past the false summit.",
      ...LOBUCHE_EAST,
      html: p(
        "Moving by one in the morning. The first hour is loose rock and scree by headlamp to the edge of the glacier, where crampons go on and the group ropes up in the dark.",
        "Then the long work: a snow and ice slope at <strong>40 to 50 degrees</strong>, steepening to short harder steps, climbed on fixed line for several hours as the sky lightens behind Makalu. It leads onto the <strong>summit ridge</strong> — narrow, corniced on the east, and followed one at a time with the drop to the Khumbu glacier on your left.",
        "The <strong>false summit at about 5,970 m</strong> comes first. Beyond it the ridge dips into a notch and rises again, and that final hour on steep exposed snow is the real thing. From the <strong>true summit (6,119 m)</strong> the view runs across to Everest, Nuptse, Lhotse, Ama Dablam, Cholatse and Pumori. Down by abseil and fixed line to high camp, then base camp. Ten to fourteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day for a Second Summit Attempt",
      elevation: "4,950 m",
      accommodation: "Lobuche East Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second attempt on the peak.",
      ...LOBUCHE_BC,
      html: p(
        "The day kept in hand. On a peak where wind on an exposed ridge is the usual reason for turning back, a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow. If a member turned back at the false summit and wants the true one, and has the legs for it, that is also decided here.",
        "If the climb went as planned, the day is used to start down early — camp comes down and the group walks to Pheriche or Pangboche, banking a spare day against a cancelled Lukla flight later. Overnight at base camp or Pangboche.",
      ),
    },
    {
      title: "Trek from Lobuche East Base Camp (4,950 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, with a monastery said to date from the 1600s.",
      ...PANGBOCHE,
      html: p(
        "Camp comes down after breakfast and the descent begins in earnest. Back down the moraine, past the <strong>Thukla memorial</strong> chortens and the steep drop beside the glacier snout, into the Pheriche valley.",
        "Through <strong>Pheriche</strong>, where the Himalayan Rescue Association clinic runs its afternoon altitude talks, and on down the valley on a good trail with the river beside you.",
        "The last stretch climbs gently to <strong>Pangboche (3,930 m)</strong>, where juniper and birch return and the air feels thick enough to be almost comic. The monastery above the village is the oldest in the Khumbu. Around 6 to 7 hours. Overnight at Pangboche.",
      ),
    },
    {
      title: "Trek from Pangboche (3,930 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, reached again on the walk out with the peak behind you.",
      ...NAMCHE,
      html: p(
        "Down through <strong>Deboche</strong> and up the short climb to <strong>Tengboche</strong>, where the saddle gives a last full view of Ama Dablam and the Everest massif — different now that you have been up something opposite it.",
        "The steep descent to Phunki Thenga is hard on tired knees, and then the balcony trail contours back around the hillside toward Namche, high above the Dudh Koshi.",
        "<strong>Namche Bazaar (3,440 m)</strong> arrives in the afternoon with a hot shower, a bakery and a beer. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day, and a long descent. Steeply down from Namche to the <strong>Hillary Bridge</strong>, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, checking out of the national park on the way.",
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb to <strong>Lukla (2,840 m)</strong>, which always feels longer than it should on the last day.",
        "The evening is the end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "Lukla flights go early, before the valley wind builds. Thirty-five minutes to <strong>Kathmandu</strong>, or a landing at Manthali with a road transfer onward when the peak-season schedule applies.",
        "Delays are routine here rather than exceptional, which is why no international departure is scheduled for today.",
        "The afternoon is free — a long shower and Thamel. Your <strong>summit certificate</strong> is presented in the evening, and it names the summit you actually reached. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. Depending on your flight there may be a last morning in Kathmandu for the shopping you did not get to.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels, and we hope to climb with you again.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const pokaldePeakClimbing: Climb = {
  region: "Everest Region",
  price: 2350,
  difficulty: "challenging",
  maxAltitude: 5806,
  grade: "PD-",
  center: [86.84, 27.91],
  zoom: 11,
  content: {
    slug: "pokalde-peak-climbing",
    title: "Pokalde Peak Climbing",
    overview:
      "<p><strong>Pokalde (5,806 m)</strong> is the most approachable of the Khumbu's permitted climbing peaks, and the honest answer for anyone who wants a real summit without a night on a glacier. It rises just north of the <strong>Kongma La</strong>, between the Imja and Khumbu valleys, and its climb is mostly a steep rock scramble on a boulder ridge with a short section of fixed rope and a snow slope near the top — no crevasses, no headwall, no two o'clock start.</p><p>It is also the peak that gets undersold. At 5,806 m it is higher than anything in the Alps or North America, the summit ridge is properly exposed, and the view from the top is arguably better than Island Peak's: <strong>Everest, Lhotse, Nuptse, Makalu, Ama Dablam and the Khumbu glacier</strong> all at once, from a summit almost nobody else is standing on. This itinerary summits from a camp below the Kongma La, then crosses the pass itself to Lobuche and walks out through the Khumbu valley, so the return is new ground rather than the same trail twice.</p>",
    highlights: [
      ["Summit Pokalde (5,806 m)", "A genuine Himalayan summit on rock and snow, without glacier travel or a midnight start."],
      ["Cross the Kongma La (5,535 m)", "Walk out over the highest of the Khumbu's three passes, into the Khumbu valley below Lobuche."],
      ["Everest, Lhotse and Makalu from the Top", "A summit panorama that rivals peaks twice its technical difficulty."],
      ["The Best First Climbing Permit", "Short fixed-rope work and a scramble ridge — the natural introduction before Island Peak or Mera."],
      ["A Loop, Not an Out-and-Back", "Approach through the Imja valley and return down the Khumbu, seeing new trail on the way home."],
    ],
    sections: [
      BEST_TIME_KHUMBU,
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Pokalde is graded <strong>PD-</strong> and is the easiest peak in this catalogue, but easiest is not the same as easy. The climb from base camp takes five to seven hours round trip and starts at a civilised four or five in the morning rather than one. Most of it is a <strong>boulder and scree ridge</strong> — hands-on scrambling in places, on loose rock, wearing a helmet.</p><p>The last part is where the rope comes out: a <strong>short section of fixed line</strong> on a steeper rock step, and then a narrow snow and rock crest to the summit, exposed on both sides and climbed one at a time. There is no glacier and no crevasse risk, which is precisely why it suits a first climb. The <strong>Kongma La (5,535 m)</strong>, crossed two days later, is a long day on rough ground and is arguably harder work than the summit itself.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is needed. If you can walk uphill for six or seven hours carrying 8 kg, are steady on loose rock, and have trekked at altitude before, you have what this peak asks for. It is the trip we recommend to trekkers who have done Everest Base Camp and want to come back for something with a rope on it.</p><p>The acclimatisation profile is deliberately generous for the height involved: two nights at <strong>Namche (3,440 m)</strong>, two at <strong>Dingboche (4,410 m)</strong> including the Nangkartshang climb to 5,083 m, and a night at <strong>Chhukung (4,730 m)</strong> before base camp. By the time you reach the summit you will already have been above 5,000 m twice. That margin is why the success rate here is the highest of any peak we run.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering to 6,000 m</strong> is mandatory, and we check the policy before the permit is issued. Because Pokalde is under 6,000 m, more standard policies cover it than cover Island Peak or Mera — but the cover still has to name mountaineering and fixed-rope use, not just trekking. A policy that stops at 4,000 m covers you as far as Namche and no further.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Helicopters reach Dingboche, Chhukung and Lobuche routinely and can land near base camp in good conditions, but they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour emergency line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p>Because there is no glacier night, the kit list is lighter than for a 6,000 m peak. Sturdy <strong>four-season trekking boots that take a semi-automatic crampon</strong> are sufficient — full double boots are not needed. Bring a <strong>-20°C sleeping bag</strong>, a down jacket, waterproof shell layers, gloves and liner gloves, a warm hat, a buff, category 4 sunglasses, gaiters, a headlamp and factor 50 sunscreen.</p><p>A <strong>helmet is not optional on this peak</strong> — the ridge is loose and parties above dislodge stones. We supply the fixed rope, main rope and anchors, and <strong>personal hardware — harness, crampons, ice axe, jumar, descender, helmet and carabiners — can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Is Pokalde really the easiest climbing peak in Nepal?", answer: "Of the peaks that are regularly guided, yes — in terms of technical ground. Yala Peak is easier still but is a walk rather than a climb. What Pokalde does not do is make the altitude easy: 5,806 m is 1,000 m above Kala Patthar and the air is genuinely thin up there." },
      { question: "Do I need crampons if there is no glacier?", answer: "Yes, for the snow slope and crest near the summit and for the Kongma La in early or late season. They are semi-automatic crampons on stiff trekking boots rather than full mountaineering boots and technical crampons, but they go on and they matter on frozen ground before the sun hits it." },
      { question: "Where is base camp and what is it like?", answer: "At around 5,000 m in the basin below the Kongma La, reached in four to five hours from Chhukung. It is a tented camp with a mess tent, kitchen tent and toilet tent, on rocky ground beside a small tarn. There is no lodge and no shelter, and it is cold as soon as the sun goes." },
      { question: "How does this compare with Island Peak?", answer: "About half the technical difficulty and 400 m less height. Island Peak has a glacier, crevasses and a hundred metres of steep ice; Pokalde has a scramble and a short fixed rope. If Island Peak is your goal but you have never used crampons, doing Pokalde first is a genuinely useful step rather than a consolation." },
      { question: "What is the Kongma La like?", answer: "The highest of the three Khumbu passes at 5,535 m and the least walked, because it is a long day over rough boulder fields and moraine with a stiff climb on both sides. Seven to nine hours from base camp to Lobuche. It is the hardest walking day of the trip." },
      { question: "Can I add Everest Base Camp to this trip?", answer: "Easily, and it fits naturally — after crossing the Kongma La you are at Lobuche, two hours from Gorak Shep. Adding base camp and Kala Patthar extends the itinerary by two days and we are glad to quote it. Several of our climbers do exactly this." },
      { question: "What is the summit success rate?", answer: "Above 90 percent on our departures, the highest of any peak we run. The turn-backs are almost always weather on the ridge or someone still not acclimatised, not the climbing itself." },
      { question: "How long is summit day?", answer: "Five to seven hours round trip from base camp, starting around four or five in the morning. It is by a wide margin the shortest summit day of any climbing peak in the Khumbu, and one of the reasons the peak suits people who want to enjoy the climb rather than endure it." },
      { question: "Is there a false summit on Pokalde?", answer: "There are several minor high points along the ridge that look like the top from below, which catches out parties climbing without a guide. The true summit carries prayer flags and is unmistakable once you are on it. Your guide knows the difference." },
      { question: "Can I climb Pokalde and Island Peak on the same trip?", answer: "Yes, and it is a strong combination — Pokalde first as a warm-up and acclimatisation climb, then Island Peak with everything already learned. We run it as a combined itinerary of around 19 days, and also as a three-peak trip adding Lobuche East." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: LUKLA_FLIGHTS,
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping: "Tented accommodation at Pokalde base camp (5,000 m), with a mess tent, kitchen tent and toilet tent.",
      permits:
        "Nepal Mountaineering Association climbing permit for Pokalde, Sagarmatha National Park entry permit, and the Khumbu Pasang Lhamu Rural Municipality permit.",
      sherpa: "One climbing Sherpa for every three climbers on summit day, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew for the base camp nights.",
        "A pre-climb training session at base camp covering crampons, helmet and rope use, and fixed-line technique.",
        "Porter transport of group climbing equipment and camp gear from Chhukung to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 11,
    gearRentalDays: 12,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary to the summit of Pokalde (5,806 m) from a camp below the Kongma La, returning over the pass itself into the Khumbu valley rather than retracing the approach.",
    inExDescription:
      "Lukla flights, airport transfers, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day throughout, the NMA climbing permit and park fees, a licensed climbing guide with Sherpa support, group climbing equipment and the training session are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Pokalde Peak Climbing (5,806 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Pokalde Peak (5,806 m), the most approachable permitted peak in the Khumbu — a rock and snow ridge with no glacier, plus the Kongma La crossing on the way out. 16 days with full acclimatisation.",
      keywords:
        "pokalde peak climbing, pokalde 5806m, easiest climbing peak nepal, kongma la, first peak climbing nepal, khumbu peak climbing",
      tags: "Pokalde Peak, Kongma La, Everest Region, Peak Climbing, Beginner Climb, Khumbu",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong> and our representative meets you and drives you to your hotel in Thamel.",
        "The <strong>briefing and equipment check</strong> are held this evening so that no day is spent waiting in the city. Your guide runs through the sixteen-day plan, the summit day and the Kongma La crossing, then fits harnesses, checks that your boots take a semi-automatic crampon, and swaps anything unsuitable for rental kit.",
        "Our office lodges the <strong>climbing permit</strong> and park paperwork with your passport and photographs. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village of lodges and suspension bridges on the Dudh Koshi.",
      ...PHAKDING,
      html: p(
        "The flight into <strong>Lukla (2,840 m)</strong> leaves at first light — thirty-five minutes from Kathmandu, or a pre-dawn drive to Manthali and a twenty-minute hop in peak season.",
        "Loads are sorted over tea with the porters, and the trail drops north through <strong>Chaurikharka</strong> and <strong>Ghat</strong>, past mani walls and water-driven prayer wheels.",
        "<strong>Phakding (2,610 m)</strong> is lower than Lukla, which makes an easy first night at altitude. Around 3 to 4 hours. Overnight at Phakding.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital, built into a natural amphitheatre above the Dudh Koshi.",
      ...NAMCHE,
      html: p(
        "Five prayer-flagged suspension bridges carry the trail across the Dudh Koshi and up through blue pine to <strong>Monjo</strong>, where permits are checked at the <strong>Sagarmatha National Park</strong> gate.",
        "Past Jorsalle the <strong>Hillary Bridge</strong> crosses the confluence high above the water, and the trail then climbs 600 m to Namche — the first real effort, with a first view of <strong>Everest</strong> on the way up if the sky is clear.",
        "<strong>Namche Bazaar (3,440 m)</strong> has bakeries, gear shops and an ATM. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The trading hub of the Khumbu, and the first acclimatisation stop of the climb.",
      ...NAMCHE,
      html: p(
        "Climb high, sleep low. The morning goes up to the <strong>Everest View Hotel (3,880 m)</strong>, with Everest, Lhotse, Nuptse and Ama Dablam straight up the valley from the terrace.",
        "On to <strong>Khumjung</strong> and <strong>Khunde</strong> beneath Khumbi Yul Lha, past the monastery with its disputed yeti scalp and the hospital built by Edmund Hillary's foundation in 1966.",
        "The afternoon is free for the Sherpa Culture Museum and the market. Your guide takes the first oxygen saturation readings tonight. Around 4 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery on a forested saddle facing Ama Dablam and the Everest massif.",
      ...TENGBOCHE,
      html: p(
        "The balcony trail runs nearly level out of Namche for two hours, high above the Dudh Koshi with <strong>Ama Dablam</strong> ahead the whole way.",
        "At Phunki Thenga it drops to the river and climbs 600 m through rhododendron and birch to the saddle — a long, honest pull.",
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
        "Down through <strong>Deboche</strong>, over the Imja Khola above a gorge, and up to <strong>Pangboche (3,930 m)</strong>, the oldest permanent Sherpa settlement in the valley.",
        "Above Pangboche the trees end and the valley opens into a wide grey trough of moraine and grazing land, with Ama Dablam, Lhotse and Taboche closing in around it.",
        "<strong>Dingboche (4,410 m)</strong> sits among stone-walled potato and barley fields. Around 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "The acclimatisation base of the Imja valley, with a 5,000 m viewpoint directly above.",
      ...DINGBOCHE,
      html: p(
        "The key acclimatisation day. We climb the ridge behind the village to <strong>Nangkartshang (5,083 m)</strong> — steep but non-technical, two to three hours on scree and rock.",
        "Reaching 5,000 m today and sleeping 600 m lower is what makes the summit comfortable rather than desperate in a week's time. <strong>Makalu</strong> appears over the eastern ridge, with Lhotse, Ama Dablam and Taboche around you and <strong>Pokalde</strong> itself visible to the north-west.",
        "Rest, water and food for the remainder of the day, and an evening saturation check. Around 4 to 5 hours. Overnight at Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Chhukung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chhukung",
      placeDescription: "A cluster of lodges at the head of the Imja valley, the last settlement before base camp.",
      ...CHHUKUNG,
      html: p(
        "A short, gentle day east up the Imja valley on the moraine, climbing steadily with the <strong>3,000 m south face of Lhotse</strong> filling the head of the valley.",
        "<strong>Chhukung (4,730 m)</strong> is the last teahouse before base camp — a handful of lodges on the moraine with a stove in the dining room.",
        "The afternoon is a short acclimatisation walk toward Chhukung Ri, then a gear sort: what goes up to base camp, and what stays behind. Around 3 hours. Overnight at Chhukung.",
      ),
    },
    {
      title: "Trek from Chhukung (4,730 m) to Pokalde Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Pokalde Base Camp",
      placeDescription: "A tented camp beside a small tarn in the basin below the Kongma La, at the foot of the peak.",
      ...POKALDE_BC,
      html: p(
        "The trail leaves the Imja valley and climbs west into the wide, empty basin below the <strong>Kongma La</strong>, on rough moraine and boulder ground with almost nobody else on it.",
        "It is a noticeable change from the Khumbu's main trail — no lodges, no yak trains, no queue at the bridges. The ground is rocky and the walking is slow, and the altitude does the rest.",
        "<strong>Pokalde Base Camp (5,000 m)</strong> is a tented camp beside a small tarn under the peak's south ridge. Camp is standing when you arrive. The afternoon is for a short training session on rope, helmet and crampon work, and an early night. Around 4 to 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Pokalde (5,806 m) and Return to Base Camp (5,000 m)",
      elevation: "5,806 m",
      accommodation: "Pokalde Base Camp",
      placeDescription: "The 5,806 m summit of Pokalde, a rock and snow crest above the Kongma La.",
      ...POKALDE_PEAK,
      html: p(
        "A civilised start — tea at four, walking by five, with the sky already lightening. The route climbs the boulder slope above camp to the south ridge and then follows it, hands out of pockets on the steeper steps, wearing a helmet the whole way because the rock is loose.",
        "Near the top comes the only real technical ground: a <strong>short section of fixed rope</strong> on a steeper rock step, and above it a narrow crest of rock and snow, exposed on both sides, climbed one at a time with the rope on.",
        "The <strong>summit (5,806 m)</strong> carries prayer flags and one of the finest views in the Khumbu — <strong>Everest, Lhotse, Nuptse, Makalu, Ama Dablam</strong> and the whole Khumbu glacier — from a top that almost nobody else is standing on. Back down the same way. Five to seven hours in total. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Kongma La (5,535 m) and Trek to Lobuche (4,940 m)",
      elevation: "4,940 m",
      accommodation: "Lobuche",
      placeDescription: "A small lodge settlement on the moraine of the Khumbu glacier, below Lobuche Peak.",
      ...LOBUCHE_VILLAGE,
      html: p(
        "The hardest walking day of the trip, and also the reserve day — if yesterday was blown out, the summit is attempted this morning and the pass crossed tomorrow instead.",
        "The climb to the <strong>Kongma La (5,535 m)</strong> takes two to three hours on boulder and scree from camp, past frozen tarns, to a cairn buried in prayer flags. It is the highest and least walked of the three Khumbu passes, and the view back over the Imja valley to Ama Dablam is worth the effort on its own.",
        "The far side is the serious part: a steep, loose descent onto the <strong>Khumbu glacier</strong>, then an hour or more picking a line across its rubble-covered ice, following cairns, before climbing the far moraine to <strong>Lobuche (4,940 m)</strong>. Seven to nine hours. Overnight at Lobuche.",
      ),
    },
    {
      title: "Trek from Lobuche (4,940 m) to Pangboche (3,930 m)",
      elevation: "3,930 m",
      accommodation: "Pangboche",
      placeDescription: "The oldest permanent Sherpa village in the Khumbu, with a monastery said to date from the 1600s.",
      ...PANGBOCHE,
      html: p(
        "Down the moraine and past the <strong>Thukla memorial</strong>, a field of stone chortens for climbers lost on Everest and the peaks around it, then the steep drop beside the glacier snout to <strong>Thukla (4,620 m)</strong>.",
        "The trail continues down the Pheriche valley past the Himalayan Rescue Association clinic, where a doctor gives a free altitude talk most afternoons in season.",
        "A gentle final climb brings you to <strong>Pangboche (3,930 m)</strong>, where juniper and birch reappear and the air feels suddenly generous. Around 6 hours. Overnight at Pangboche.",
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
        "The steep descent to Phunki Thenga tests tired knees, and then the balcony trail contours back around the hillside toward Namche, high above the Dudh Koshi.",
        "<strong>Namche Bazaar (3,440 m)</strong> means a hot shower, a bakery and a beer. Around 6 hours. Overnight at Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's airstrip town on a shelf above the Dudh Koshi valley.",
      ...LUKLA,
      html: p(
        "The last walking day. Steeply down to the <strong>Hillary Bridge</strong>, then along the Dudh Koshi through <strong>Jorsalle</strong> and <strong>Monjo</strong>, where you check out of the national park.",
        "Through <strong>Phakding</strong> and past the mani walls, and then the final climb to <strong>Lukla (2,840 m)</strong> — always longer than it looks.",
        "The evening is the end-of-trip dinner with the guide, Sherpas and porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Lukla.",
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
        "Delays are normal here rather than exceptional, which is why no international departure is scheduled for today.",
        "Our vehicle meets the flight at the domestic terminal and drives you into Thamel, where the afternoon is free for a long shower and whatever you have been thinking about eating since Dingboche.",
        "Your <strong>summit certificate</strong> is presented in the evening, along with the group photographs from the ridge. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Durbar Marg for the shopping, Boudhanath for the stupa, or simply a slow breakfast somewhere with a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels, and we hope to climb with you again.",
      ),
    },
  ],
};
