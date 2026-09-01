import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const PERMITS =
  "Makalu Barun National Park entry permit, Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality permit, and required trekking permits.";

/**
 * Makalu to the Khumbu over the Sherpani Col, West Col and Amphu Labtsa.
 *
 * Waypoints marked "approximate" are expedition camps with no OpenStreetMap
 * node; they are placed on the route line between verified points.
 */
export const sherpaniColTrek: NewTrek = {
  price: 4500,
  difficulty: "extreme",
  maxAltitude: 6180,
  center: [87.0, 27.83],
  zoom: 9,
  content: {
    slug: "sherpani-col-passes-trek",
    title: "Sherpani Col Passes Trek",
    overview:
      "<p>The <strong>Sherpani Col Passes Trek</strong> is the hardest walking route in Nepal, crossing from the Barun valley beneath <strong>Makalu (8,485 m)</strong> into the Khumbu over three high passes in a single push: the <strong>Sherpani Col (6,180 m)</strong>, the <strong>West Col (6,135 m)</strong> and the <strong>Amphu Labtsa (5,845 m)</strong>. Two of them are above 6,000 m, all three are glaciated, and the ground between them is a closed basin with no exit but forward.</p><p>The approach is the full Makalu Base Camp trek — the flight to Tumlingtar, the ridge climb through Tashi Gaun and over the Shipton La, and the Barun valley to base camp at 4,870 m. Beyond it the route becomes a mountaineering expedition: fixed ropes, abseils off the West Col, roped glacier travel, and camps above 5,500 m. It finishes with the descent to Chukhung and the walk out through Namche to Lukla. This is the most serious trip we run.</p>",
    highlights: [
      ["Three Passes Above 5,800 m", "Cross the Sherpani Col (6,180 m), the West Col (6,135 m) and the Amphu Labtsa (5,845 m) in a single traverse."],
      ["Makalu Base Camp (4,870 m)", "Spend two nights beneath the south face of the fifth highest mountain in the world."],
      ["The Hidden Hongu Basin", "Walk through a closed high valley of frozen lakes and moraine with no settlement and no way out on foot but over a pass."],
      ["Everest, Lhotse and Makalu Together", "See four 8,000 m peaks from the cols, a view almost nobody stands in front of."],
      ["Makalu to Khumbu on Foot", "Link two of Nepal's great regions by the line the mountaineers use, finishing in Namche Bazaar."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p>There are two short windows and no flexibility around them. <strong>Late April to mid-May</strong> is the pre-monsoon season used by Makalu expeditions, with the most settled snow on the cols and the longest days. <strong>Mid-October to early November</strong> is the post-monsoon window, drier and clearer but colder, with less daylight for the long crossing days.</p><p>Outside those windows the route is not attemptable. Winter cold and snow depth make the Hongu basin lethal for a trekking party, and the monsoon fills it with whiteout and unstable snow. Even in season groups routinely spend one to three days sitting out weather at base camp or on the cols, which is why the itinerary carries spare days built into it.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a mountaineering expedition presented as a trek, and it is the most demanding trip in our catalogue. You will use <strong>crampons, harness, jumar, descender and fixed rope</strong>; abseil around 100 m off the West Col; cross crevassed glaciers roped; and sleep four nights above 5,400 m. There is no escape route from the Hongu basin except over the Amphu Labtsa.</p><p>Previous 6,000 m experience and demonstrable technical competence are required, not preferred. You must be able to abseil, ascend a fixed line and self-arrest without instruction, and to keep functioning when cold, hypoxic and tired. We ask about your climbing history at the booking stage and will turn down applications that do not meet it, because on this route an underprepared member endangers the whole group. Six months of specific preparation is a realistic minimum.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Full <strong>mountaineering insurance to 6,500 m</strong> is mandatory, including roped glacier travel, fixed-rope and abseil use, and helicopter evacuation. Ordinary trekking policies do not cover this route in any respect, and several specialist insurers exclude the Hongu basin specifically. Get written confirmation from your insurer that the Sherpani Col traverse is covered.</p><p>Evacuation from the basin is a helicopter operating near its service ceiling, in a place where it may not be able to land at all until the group descends. Operators fly against a guarantee of payment from the insurer, and we require your policy details, the 24-hour emergency number and confirmation of the altitude limit before we will issue permits. No policy, no departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is an expedition kit list. Bring <strong>B3 mountaineering boots</strong> with fully automatic crampon compatibility, a four-season sleeping bag rated to <strong>-25°C</strong> plus a liner, an insulated mat, a heavy expedition down jacket and down trousers, a full waterproof and windproof shell, four base layers, a fleece, insulated mitts and liner gloves, a balaclava and goggles.</p><p>Also pack a 50-litre pack, trekking poles, category 4 glacier glasses, a headlamp with spare batteries, factor 50 sunscreen, an insulated bottle and a flask, a full personal first aid kit including altitude medication discussed with your doctor, and a large power bank — there is no charging for around two weeks. <strong>We supply crampons, harness, jumar, descender, helmet, ice axe and all fixed rope</strong>, but bring your own boots and, if you have them, your own harness and crampons already fitted.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The Barun approach uses simple lodges as far as Yangle Kharka and then tents. From Makalu Base Camp onwards the trip is fully camped: <strong>two-person mountain tents</strong>, a mess tent and a toilet tent, on moraine, glacier and snow. The high camps at Sherpani Col Base Camp and in the Hongu basin sit above 5,400 m, where overnight temperatures reach <strong>-25°C</strong> and everything that must not freeze goes into the sleeping bag.</p><p>A cook and kitchen crew travel with the group throughout, cooking three hot meals a day plus soup and tea at every stop. Appetite disappears above 5,000 m, so the kitchen works on frequency and calories rather than variety. Water is melted from snow at the high camps, which takes fuel and time; you will be given four litres a day and expected to drink it.</p>",
      },
    ],
    faqs: [
      { question: "What experience do I need to join this trek?", answer: "Previous experience above 6,000 m, and competence with crampons, a rope, a jumar and an abseil device without needing to be taught. We ask for your climbing CV at the booking stage. This is not a route where enthusiasm substitutes for experience — the abseil off the West Col happens at 6,100 m in the cold, with a queue behind you." },
      { question: "Why is there no escape route from the Hongu basin?", answer: "Once the group crosses the West Col it is in a closed high valley. Going back means re-climbing the col; going forward means the Amphu Labtsa. There is no village, no road and no walking exit at a lower altitude, which is why the weather decision at Sherpani Col Base Camp is made carefully and conservatively." },
      { question: "How many staff support the group?", answer: "A climbing guide and assistant climbing guides, a cook and kitchen crew, and a large porter and high-altitude staff team to move camps, fix ropes on the cols and carry group equipment. The ratio is closer to an 8,000 m expedition than to a trek, which is the main reason for the price." },
      { question: "What happens if the passes are not crossable?", answer: "The group turns round and walks back down the Barun valley to Tumlingtar, which takes about a week. That is a real possibility on this route and we plan and price for it. Your guide makes the call at Makalu Base Camp and again at Sherpani Col Base Camp, and it is not open to negotiation." },
      { question: "How cold does it get at the high camps?", answer: "Overnight temperatures at the camps above 5,400 m reach -25°C and colder with wind. Water bottles freeze solid outside a sleeping bag, batteries die in hours and boot liners must be slept with. This is the single biggest difference between this trip and a normal high trek." },
      { question: "Do we need a climbing permit?", answer: "No peak permit is required as the route crosses passes rather than summits, but you need the Makalu Barun National Park permit, the Sagarmatha National Park permit and the Khumbu rural municipality permit, all included. We also register the group's itinerary and satellite communications with the relevant authorities." },
      { question: "How heavy is the pack I carry?", answer: "Twelve to fifteen kilograms on the pass days — water, layers, harness, crampons, and food for the day — which is significantly more than on a teahouse trek. Porters and high-altitude staff move the camps and group equipment, but on the cols everyone carries their own technical gear." },
      { question: "Is there any communication on the route?", answer: "The group carries a satellite phone and we hold daily contact windows with our Kathmandu office. There is no mobile signal between Yangle Kharka and Chukhung, roughly two weeks. Family contact is by satellite message only, and we brief your emergency contact before departure." },
      { question: "Why does the itinerary include spare days?", answer: "Two: one at Baruntse Base Camp and one in Kathmandu at the end. The first absorbs weather delays on the cols and the second covers a cancelled Lukla flight. On this route the spare days are used more often than not, and an itinerary without them is not a serious plan." },
      { question: "Could I do the Makalu Base Camp trek instead?", answer: "Yes, and for most people it is the right choice. The seventeen-day Makalu Base Camp trek walks the same superb Barun approach to 4,870 m and returns the way it came, with no technical ground and no 6,000 m passes. Everything that makes the Barun valley worth seeing is on that trip too." },
    ],
    inclusions: {
      flights: [
        "Kathmandu to Tumlingtar and Lukla to Kathmandu flights as per the itinerary, including airport transfers.",
      ],
      transport: ["Private jeep transportation from Tumlingtar to Num as per the itinerary."],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: PERMITS,
      extra: [
        "Two-person mountain tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the full camping section of the expedition.",
        "Crampons, harness, jumar, descender, helmet, ice axe, and all fixed rope for the three col crossings.",
        "Climbing guide, assistant climbing guides, and high-altitude staff for the pass section.",
        "Satellite phone for group emergency communication.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays, a turned-back pass crossing, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 20,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "A 24-day expedition traverse from Makalu Base Camp to the Khumbu over the Sherpani Col (6,180 m), West Col (6,135 m) and Amphu Labtsa (5,845 m).",
    inExDescription:
      "Domestic flights, airport transfers, Kathmandu hotel nights, full expedition camping equipment with a cook crew, technical climbing equipment and fixed ropes, climbing guides and high-altitude staff, all trekking meals, national park permits, satellite communication, first aid, and government taxes are included, while international flights, visa, mountaineering insurance, personal gear, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Sherpani Col Passes Trek – 24 Day Makalu to Khumbu Traverse",
      description:
        "A 24-day expedition crossing from Makalu Base Camp to the Everest region over the Sherpani Col (6,180 m), West Col (6,135 m) and Amphu Labtsa (5,845 m).",
      keywords:
        "Sherpani Col Trek, West Col, Amphu Labtsa, Makalu to Everest traverse, Hongu valley, high pass expedition Nepal, technical trek Nepal",
      tags: "Sherpani Col Passes Trek, Makalu, Khumbu, Remote Region, High Pass Trek, Expedition, Nepal Trekking",
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
        "The briefing for this expedition is detailed and takes most of the afternoon. Your climbing guide goes through the twenty-four day plan, the three cols and how each is protected, the abseil off the West Col, the weather decision points, and the fact that the Hongu basin has no walking exit. We check personal equipment item by item and fit harnesses, crampons and boots.",
        "Insurance documentation is confirmed today. We do not issue permits without a policy that covers mountaineering to 6,500 m and helicopter evacuation. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Tumlingtar (410 m) and Drive to Num (1,560 m)",
      elevation: "1,560 m",
      accommodation: "Num",
      placeDescription: "A ridge village above the Arun river, the roadhead for the Makalu Barun approach.",
      lng: 87.2845,
      lat: 27.557,
      html: p(
        "An early flight east to <strong>Tumlingtar (410 m)</strong> in the Arun valley, about 45 minutes, with the whole eastern Himalaya along the left-hand windows if the morning is clear.",
        "From the airstrip a jeep climbs north on a rough hill road through subtropical farmland, terraced hillsides and cardamom plantations, gaining more than a thousand metres to the ridge.",
        "<strong>Num (1,560 m)</strong> sits on the crest with the Arun gorge dropping away on both sides. The view north on a clear afternoon takes in the peaks at the head of the valley, and the road ends here.",
        "Around 4 hours driving after the flight. The porters are organised this evening. Overnight at Num.",
      ),
    },
    {
      title: "Trek from Num (1,560 m) to Seduwa (1,500 m)",
      elevation: "1,500 m",
      accommodation: "Seduwa",
      placeDescription: "A village on the western slope of the Arun valley at the edge of Makalu Barun National Park.",
      lng: 87.26903,
      lat: 27.58621,
      html: p(
        "A deceptively hard first day: down 800 m and back up 800 m, with almost no net height gained.",
        "The trail drops off the Num ridge in a long series of switchbacks through terraced farmland to the <strong>Arun river</strong> at around 700 m, crosses on a suspension bridge, and then climbs the other side just as steeply.",
        "It is hot and humid at this altitude and the climb is relentless. Start early, drink constantly, and treat it as the day that shakes out how your legs are.",
        "<strong>Seduwa (1,500 m)</strong> is a scattered village on the western slope where the <strong>Makalu Barun National Park</strong> permits are checked. Around 6–7 hours. Overnight at Seduwa.",
      ),
    },
    {
      title: "Trek from Seduwa (1,500 m) to Tashi Gaun (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Tashi Gaun",
      placeDescription: "The last Sherpa village on the ridge before the Shipton La.",
      lng: 87.23102,
      lat: 27.62745,
      html: p(
        "A steady climb north up the ridge through farmland and into the forest belt.",
        "The trail passes through a string of small settlements with rice and millet terraces, water buffalo, and cardamom drying in the sun. As height is gained the crops change to potato and barley and the houses change from thatch to stone and slate.",
        "<strong>Tashi Gaun (2,100 m)</strong> is a Sherpa village and the last permanent settlement before the pass — everything above it is forest, ridge and, eventually, glacier. It is a good place to watch how a working village at this altitude organises itself.",
        "Around 5 hours. Overnight at Tashi Gaun.",
      ),
    },
    {
      title: "Trek from Tashi Gaun (2,100 m) to Khongma Danda (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Khongma Danda",
      placeDescription: "A ridge-top camp above the treeline on the approach to the Shipton La.",
      lng: 87.20801,
      lat: 27.65636,
      html: p(
        "The hardest day of the approach: 1,450 m of climbing on a steep, wet, root-tangled forest trail.",
        "The route goes straight up the ridge through dense rhododendron and bamboo, on ground that is muddy in almost any season and requires hands as well as feet in a few places. In spring the rhododendron is spectacular; in any season this is a long, sweaty grind.",
        "The forest thins around 3,200 m and the trail comes out on the open ridge with the first big view of the day — south down the Arun and north to the peaks around the Shipton La.",
        "<strong>Khongma Danda (3,560 m)</strong> is a ridge-top settlement of a few lodges and a camp, exposed and often cloudy. Around 7 hours. Overnight at Khongma Danda.",
      ),
    },
    {
      title: "Acclimatization Day at Khongma Danda (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Khongma Danda",
      placeDescription: "A ridge-top camp above the treeline on the approach to the Shipton La.",
      lng: 87.20801,
      lat: 27.65636,
      html: p(
        "A day at the same height before the pass, and the first of several deliberate pauses on the way up.",
        "The acclimatisation walk climbs the ridge north towards the shoulder below the Shipton La, gaining four or five hundred metres and returning to sleep low. Three to four hours at an easy pace with time at the top to look at the route ahead.",
        "The ridge here is a genuine weather divide. On a clear morning <strong>Makalu (8,485 m)</strong>, <strong>Chamlang</strong> and the peaks of the Barun appear to the north; by mid-afternoon cloud usually rolls up from the Arun and closes it all down.",
        "The afternoon is rest, and a first careful look from your guide at how the group is handling the height. Overnight at Khongma Danda.",
      ),
    },
    {
      title: "Cross the Shipton La (4,216 m) and Trek to Dobato (3,900 m)",
      elevation: "3,900 m",
      accommodation: "Dobato",
      placeDescription: "A camp on the north side of the Shipton La at the edge of the Barun valley.",
      lng: 87.21002,
      lat: 27.71101,
      html: p(
        "Over the ridge and into the Barun, the valley that leads to Makalu.",
        "The trail climbs past a chain of small ponds — Kalo Pokhari and others — to the <strong>Shipton La (4,216 m)</strong>, named for Eric Shipton, whose 1950s reconnaissances opened this country to mountaineering. There is a second minor pass immediately after it.",
        "The view from the crest is the point of the day: <strong>Makalu</strong>, <strong>Chamlang (7,319 m)</strong> and <strong>Peak 6</strong> across the head of the Barun, with the valley falling away below.",
        "The descent north is steep and often muddy through rhododendron to <strong>Dobato (3,900 m)</strong>, a small camp on the valley side. Around 6–7 hours. Overnight at Dobato.",
      ),
    },
    {
      title: "Trek from Dobato (3,900 m) to Yangle Kharka (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Yangle Kharka",
      placeDescription: "A grazing meadow on the floor of the Barun valley beneath vertical rock walls.",
      lng: 87.16537,
      lat: 27.76005,
      html: p(
        "Down into the Barun valley proper, and the start of the finest walking on the trek.",
        "The trail drops steeply through forest to the <strong>Barun river</strong> and then turns north up the valley floor. The change in scale is immediate: walls of rock rise more than a kilometre on both sides, with waterfalls dropping the full height of them after rain.",
        "The Barun is one of the least disturbed valleys in Nepal, protected as a strict conservation area, and the forest here supports red panda, Himalayan black bear and snow leopard higher up.",
        "<strong>Yangle Kharka (3,600 m)</strong> is a grazing meadow with a few herders' huts and a simple lodge. Around 5–6 hours. Overnight at Yangle Kharka.",
      ),
    },
    {
      title: "Trek from Yangle Kharka (3,600 m) to Langmale Kharka (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Langmale Kharka",
      placeDescription: "A high pasture camp in the upper Barun valley below Makalu's south face.",
      lng: 87.12645,
      lat: 27.79767,
      html: p(
        "Up the valley above the treeline, with the mountains closing in on all sides.",
        "The trail follows the Barun through juniper and birch scrub, past herders' shelters and mani stones, climbing steadily. The trees give out around 4,000 m and the valley opens into a broad glaciated trough.",
        "This is where the peaks arrive properly: <strong>Peak 6</strong>, <strong>Peak 7</strong>, <strong>Chamlang</strong> and finally the south face of <strong>Makalu</strong> at the head of the valley, one of the great mountain walls of the Himalaya.",
        "<strong>Langmale Kharka (4,410 m)</strong> is a summer pasture with stone shelters. From tonight the group is camping, and the altitude begins to be the day's main constraint.",
        "Around 5 hours. Overnight camping at Langmale Kharka.",
      ),
    },
    {
      title: "Trek from Langmale Kharka (4,410 m) to Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp on the moraine below Makalu's south-east face.",
      lng: 87.0761,
      lat: 27.83578,
      html: p(
        "A short day to base camp, taken slowly because of where it ends.",
        "The trail crosses moraine and old glacial debris up the last of the Barun valley, with the walls narrowing and the ice becoming the dominant feature of the landscape.",
        "<strong>Makalu Base Camp (4,870 m)</strong> sits on the moraine beneath the south-east face of <strong>Makalu (8,485 m)</strong>, the fifth highest mountain in the world and, by reputation, one of the hardest of the 8,000 m peaks. In season there will be an expedition here; out of season the site is empty.",
        "From the moraine above camp the view takes in Makalu, <strong>Baruntse</strong>, <strong>Everest</strong> and <strong>Lhotse</strong> — four 8,000 m peaks from a single vantage point.",
        "Around 4 hours. Overnight camping at Makalu Base Camp.",
      ),
    },
    {
      title: "Acclimatization Day at Makalu Base Camp (4,870 m)",
      elevation: "4,870 m",
      accommodation: "Makalu Base Camp",
      placeDescription: "The expedition base camp on the moraine below Makalu's south-east face.",
      lng: 87.0761,
      lat: 27.83578,
      html: p(
        "A rest and preparation day at base camp, and the last one before the technical section.",
        "The morning walk climbs the moraine ridge behind camp towards <strong>5,300 m</strong> for the classic view of Everest, Lhotse and Makalu together, then returns to sleep at base camp — the height gain that matters before the cols.",
        "The afternoon is equipment. Harnesses fitted, crampons checked against boots, jumar and descender rigged and practised on a fixed line, and the rope order for the crossing agreed. Your guide runs through the plan for the next four days in detail, including the turnaround criteria.",
        "This is also where the honest conversation happens about who continues. Beyond the next camp there is no walking exit, and that decision is made here rather than higher up. Overnight camping at Makalu Base Camp.",
      ),
    },
    {
      title: "Trek from Makalu Base Camp (4,870 m) to Swiss Base Camp (5,150 m)",
      elevation: "5,150 m",
      accommodation: "Swiss Base Camp",
      placeDescription: "A moraine camp on the Barun Glacier used by expeditions approaching the cols.",
      // Approximate: expedition camp with no OpenStreetMap node.
      lng: 87.0489,
      lat: 27.8478,
      html: p(
        "A short move onto the glacier, and the first camp above 5,000 m.",
        "The route leaves base camp and works north-west onto the <strong>Barun Glacier</strong>, following the moraine on the true left bank. The ground is loose and uneven, and the group moves at a deliberate pace with poles out.",
        "Only three to four hours of walking, but at this altitude carrying a heavier pack it is enough. The crew moves ahead to pitch camp and get the kitchen going.",
        "<strong>Swiss Base Camp (5,150 m)</strong> is a flattened area of moraine with meltwater nearby, used by expeditions on the way to the cols. Makalu stands directly above it.",
        "The afternoon is deliberately idle — rest, hydration and an early meal. Overnight camping at Swiss Base Camp.",
      ),
    },
    {
      title: "Trek from Swiss Base Camp (5,150 m) to Sherpani Col Base Camp (5,690 m)",
      elevation: "5,690 m",
      accommodation: "Sherpani Col Base Camp",
      placeDescription: "The high camp below the Sherpani Col, on snow at the head of the Barun Glacier.",
      // Approximate: expedition camp with no OpenStreetMap node.
      lng: 87.0233,
      lat: 27.8501,
      html: p(
        "A hard, slow day up the glacier to the highest camp yet.",
        "The route continues up the Barun Glacier, roped where the ice is bare, weaving through moraine and pressure ridges. Five hundred and forty metres of ascent at this altitude is a full day's work and the group will be moving in short stages with regular stops.",
        "<strong>Sherpani Col Base Camp (5,690 m)</strong> is pitched on snow below the col itself, exposed and very cold. Water is melted from snow, which takes the crew hours, and the camp routine is entirely built around tomorrow's start.",
        "Your guide makes the weather call this evening. If the forecast is poor the group waits here rather than committing to the crossing — once over the West Col there is no way back except over it.",
        "Around 5–6 hours. Kit is laid out before dark. Overnight camping at Sherpani Col Base Camp.",
      ),
    },
    {
      title: "Reserve Day at Sherpani Col Base Camp (5,690 m)",
      elevation: "5,690 m",
      accommodation: "Sherpani Col Base Camp",
      placeDescription: "The high camp below the Sherpani Col, on snow at the head of the Barun Glacier.",
      lng: 87.0233,
      lat: 27.8501,
      html: p(
        "A day held for the weather, and used more often than not.",
        "The cols are crossed in a settled window or not at all, and this reserve day exists so that the group is never forced to choose between a bad forecast and the schedule. If the weather is good, the day is spent on a short acclimatisation walk towards the foot of the col and then resting.",
        "If the weather is poor, the group sits it out. Camp life at 5,690 m is a slow business: melting snow, eating, drinking, sleeping badly and waiting. Your guide checks everyone twice a day for altitude symptoms, and a member showing signs of oedema descends with staff rather than continuing.",
        "Either way, the technical drills are run again — abseil, jumar, roped movement — because tomorrow they happen in the cold with a queue behind you. Overnight camping at Sherpani Col Base Camp.",
      ),
    },
    {
      title: "Cross the Sherpani Col (6,180 m) and West Col (6,135 m) to Baruntse Base Camp (5,450 m)",
      elevation: "5,450 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "A camp beside the Hongu glacier lakes below Baruntse, in a basin with no walking exit.",
      // Approximate: expedition camp with no OpenStreetMap node.
      lng: 86.9648,
      lat: 27.8632,
      html: p(
        "The day the trip is built around, and one of the hardest days of walking available in Nepal.",
        "We leave camp around two in the morning, roped and in crampons, and climb snow slopes to the <strong>Sherpani Col (6,180 m)</strong>, fixed rope on the steepest section. Sunrise arrives somewhere on the climb, and the view from the col is Makalu, Everest, Lhotse and Baruntse at once.",
        "A short descent and traverse leads to the <strong>West Col (6,135 m)</strong>. The far side is the crux: a steep ice and snow wall of around 100 m that the group <strong>abseils</strong> on fixed ropes, one at a time, with the staff managing the ropes above and below.",
        "Below the wall the route works down the Hongu glacier to the frozen lakes of the basin and the camp at <strong>Baruntse Base Camp (5,450 m)</strong>, under the west face of Baruntse.",
        "Twelve to fourteen hours. You are now in a closed valley: the only way out on foot is the Amphu Labtsa. Overnight camping at Baruntse Base Camp.",
      ),
    },
    {
      title: "Rest and Reserve Day at Baruntse Base Camp (5,450 m)",
      elevation: "5,450 m",
      accommodation: "Baruntse Base Camp",
      placeDescription: "A camp beside the Hongu glacier lakes below Baruntse, in a basin with no walking exit.",
      lng: 86.9648,
      lat: 27.8632,
      html: p(
        "A day in the Hongu basin, for recovery and for weather.",
        "After the cols the group needs it. The camp sits beside frozen glacial lakes with <strong>Baruntse (7,129 m)</strong> above and <strong>Ama Dablam</strong> and <strong>Makalu</strong> visible from the moraine — a place almost nobody sees, and an extraordinary one to spend a day in.",
        "The reserve function matters as much as the rest. The Amphu Labtsa is the only exit and it needs settled weather, so if the forecast is poor the group waits here with the food and fuel to do so.",
        "Practically, the day goes on sleeping, drinking, drying kit in the sun and letting the crew re-rig ropes and hardware for the last pass. Your guide briefs the Amphu Labtsa crossing in detail tonight. Overnight camping at Baruntse Base Camp.",
      ),
    },
    {
      title: "Trek from Baruntse Base Camp (5,450 m) to Amphu Labtsa Base Camp (5,500 m)",
      elevation: "5,500 m",
      accommodation: "Amphu Labtsa Base Camp",
      placeDescription: "The last camp in the Hongu basin, below the Amphu Labtsa pass.",
      // Approximate: expedition camp with no OpenStreetMap node.
      lng: 86.9302,
      lat: 27.8598,
      html: p(
        "A short move west across the basin to sit below the final pass.",
        "The route crosses the Hongu glacier and its moraine, past more frozen lakes, with almost no height gained but every step taken at 5,500 m. Three to four hours, and the crew has camp up by early afternoon.",
        "The <strong>Amphu Labtsa (5,845 m)</strong> is visible ahead as a notch in the ridge, and it looks improbable from below — which it is, from any direction except the one the route takes.",
        "The rest of the day is preparation: harness, crampons, headlamp, and an early meal. The crossing tomorrow starts before dawn and the descent on the Khumbu side is the steepest ground of the trip.",
        "Overnight camping at Amphu Labtsa Base Camp.",
      ),
    },
    {
      title: "Cross the Amphu Labtsa (5,845 m) and Descend to Chukhung (4,730 m)",
      elevation: "4,730 m",
      accommodation: "Chukhung",
      placeDescription: "A Khumbu trekking settlement in the Imja valley below Island Peak.",
      lng: 86.8714,
      lat: 27.9047,
      html: p(
        "Out of the Hongu basin and into the Everest region, on the last and steepest pass.",
        "An early start and a climb on snow and rock to the <strong>Amphu Labtsa (5,845 m)</strong>, fixed rope on the upper section. The col is narrow and the group crosses it one at a time.",
        "The north side is the serious half: a steep, sustained descent on fixed ropes down rock and ice, abseiling the worst of it, with the Imja valley opening a very long way below. It demands concentration when the group is already tired.",
        "Below the ropes the route works down glacier and moraine and finally onto a path — the first proper trail since Makalu Base Camp — leading to <strong>Chukhung (4,730 m)</strong>, a Khumbu settlement of lodges below Island Peak.",
        "Ten to twelve hours. A room, a hot meal and the end of the technical ground. Overnight at Chukhung.",
      ),
    },
    {
      title: "Trek from Chukhung (4,730 m) to Tengboche (3,867 m)",
      elevation: "3,867 m",
      accommodation: "Tengboche",
      placeDescription: "The Khumbu's principal monastery, on a ridge facing Everest, Lhotse and Ama Dablam.",
      lng: 86.7646,
      lat: 27.8358,
      html: p(
        "A long, easy descent down the main Khumbu trail, losing nearly 900 m into thicker air.",
        "The route runs down the Imja valley through <strong>Dingboche</strong> and <strong>Pangboche</strong>, on a well-built and busy trail — the first other trekkers the group has seen in more than a fortnight, and the contrast is startling.",
        "Pangboche has the oldest gompa in the Khumbu, and it is worth the twenty minutes. Below it the trail drops to the Imja Khola and climbs through juniper and birch to the ridge at Tengboche.",
        "<strong>Tengboche (3,867 m)</strong> is the region's principal monastery, on a saddle facing <strong>Everest</strong>, <strong>Lhotse</strong>, <strong>Nuptse</strong> and <strong>Ama Dablam</strong>. Evening prayers are open to visitors and are the right way to end this particular trek.",
        "Around 6–7 hours. Overnight at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,867 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The main town of the Khumbu, built in a horseshoe bowl above the Dudh Koshi.",
      lng: 86.71031,
      lat: 27.80344,
      html: p(
        "A short, spectacular day along the classic Everest trail.",
        "The trail drops steeply through rhododendron to the river at Phunki Tenga and then contours the hillside west, with one of the most photographed views in Nepal from the shoulder above Sanasa: Everest, Lhotse and Ama Dablam framed together.",
        "<strong>Namche Bazaar (3,440 m)</strong> is a horseshoe of lodges, bakeries and gear shops stacked up the hillside, and after three weeks in the Barun and the Hongu it feels like a city. Espresso, wifi, a hot shower and a bakery are all available within five minutes.",
        "Around 5 hours. The afternoon is free — most groups spend it eating. Overnight at Namche Bazaar.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Lukla (2,840 m)",
      elevation: "2,840 m",
      accommodation: "Lukla",
      placeDescription: "The Khumbu's gateway town, built around the airstrip that serves the Everest region.",
      lng: 86.73199,
      lat: 27.68707,
      html: p(
        "The last walking day, down the Dudh Koshi on the busiest trail in the Himalaya.",
        "The steep descent from Namche leads to the Hillary Bridge, and then the trail follows the river south through <strong>Monjo</strong>, where the group checks out of Sagarmatha National Park, and <strong>Phakding</strong>, with a final climb of a couple of hundred metres into Lukla.",
        "It is six to seven hours and feels easy after everything behind it. The valley is green, warm and full of people, and the mountains are behind you.",
        "<strong>Lukla (2,840 m)</strong> is where the crew is paid and thanked. On this trip in particular that matters — the high-altitude staff fixed the ropes and carried the loads that made the crossing possible.",
        "Overnight at Lukla.",
      ),
    },
    {
      title: "Fly from Lukla (2,840 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start for the morning flight, which is the only kind Lukla has.",
        "The <strong>Tenzing–Hillary Airport</strong> runway is 527 m long and drops off the end into the valley, which makes the take-off memorable. The flight to <strong>Kathmandu (1,400 m)</strong> takes about 35 minutes, or lands at Manthali depending on the season's schedule.",
        "You transfer to your hotel and the rest of the day is yours. After three weeks the priorities are usually a very long shower, a large lunch, and sleeping in a bed that is not on a glacier.",
        "If the weather holds the flight, that is what tomorrow's reserve day is for. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held for the Lukla flight, and a free day in the city if it ran on time.",
        "Lukla is cancelled by weather in every season, and on a trip of this length an itinerary without a spare day risks your international connection.",
        "If yesterday went to plan, today is yours. <strong>Boudhanath</strong> in the late afternoon, the old town at <strong>Bhaktapur</strong>, or <strong>Patan Durbar Square</strong> and its museum are the three best uses of it, and Thamel handles the shopping.",
        "This is also the evening most groups have a proper dinner with the guides, which after four weeks together is worth building in. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for one more corner of the valley — <strong>Swayambhunath</strong> in the morning light is a good final stop.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "You have crossed three passes above 5,800 m, two of them above 6,000 m, and walked from the Arun to the Dudh Koshi through country that a few dozen people see in a year. There is not much in Nepal that goes beyond this without a summit permit; if you want that step, talk to us about Baruntse or Island Peak with a proper expedition behind it. Safe travels.",
      ),
    },
  ],
};
