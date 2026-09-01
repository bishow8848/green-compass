import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const PERMITS =
  "Gaurishankar Conservation Area Permit, Sagarmatha National Park entry permit, Khumbu Pasang Lhamu Rural Municipality permit, and required trekking permits.";

/** Rolwaling to the Khumbu over the glaciated Tashi Lapcha, finishing at Lukla. */
export const tashiLapchaTrek: NewTrek = {
  price: 2650,
  difficulty: "extreme",
  maxAltitude: 5755,
  center: [86.45, 27.85],
  zoom: 9.5,
  content: {
    slug: "tashi-lapcha-pass-trek",
    title: "Tashi Lapcha Pass Trek",
    overview:
      "<p>The <strong>Tashi Lapcha Pass Trek</strong> links the Rolwaling valley to the Khumbu over a glaciated 5,755 m col, and it is the most technical of Nepal's classic trekking crossings. The approach is the Rolwaling itself — the Sherpa <em>beyul</em> or hidden valley — climbing from Simigaon through rhododendron gorge to <strong>Beding</strong> and the yak pastures at <strong>Na</strong>, with <strong>Gaurishankar (7,134 m)</strong> above the whole valley.</p><p>Beyond <strong>Tsho Rolpa</strong>, the largest glacial lake in Nepal, the route leaves trails altogether: three camps on moraine and ice, crampons and rope for the crevassed section below the col, and a fixed line on the steep ground either side of the pass. Over the <strong>Tashi Lapcha (5,755 m)</strong> the descent runs down the Thame valley into the Khumbu, finishing with Namche Bazaar and the flight out of Lukla. It is a mountaineering trek in everything but name, and it is not a first Himalayan trip.</p>",
    highlights: [
      ["Cross the Tashi Lapcha (5,755 m)", "Traverse a glaciated col on rope and crampons between two of Nepal's great valleys."],
      ["Tsho Rolpa and the Trakarding Glacier", "Walk the moraine of the largest glacial lake in Nepal on the way to the head of Rolwaling."],
      ["The Hidden Valley of Rolwaling", "Approach through a beyul sanctuary of Sherpa tradition, closed to outsiders until recent decades."],
      ["Three Camps on Glacier and Moraine", "Sleep above 4,800 m in tents for three nights with no lodge and no way out but forward."],
      ["Finish in the Khumbu", "Descend into Thame and Namche Bazaar, arriving in the Everest region on foot from the west."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p>Only two narrow windows work. <strong>Late April to May</strong> gives the most settled conditions on the glacier and the longest days for the crossing, with rhododendron in flower on the Rolwaling approach. <strong>October to early November</strong> is the other, with the clearest weather of the year and firm snow on the col before the cold arrives.</p><p>The pass is not crossable outside those windows. From late November through March, snow depth and cold make the high camps untenable and the crevassed section unjustifiable. The monsoon brings whiteout on the glacier, unstable snow bridges, and a landslide-prone approach road, so June to September is out entirely. Even within the seasons, groups regularly wait a day or two at Na or the glacier camps for a weather window.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is the hardest trip in our catalogue and it sits on the boundary between trekking and mountaineering. You will use <strong>crampons, a harness, an ice axe and fixed rope</strong>, cross a crevassed glacier roped to your guide, and camp three nights above 4,800 m with no shelter, lodge or road available. The descent from the col is steep, loose and long.</p><p>Previous experience at altitude above 5,000 m is required, and basic crampon and rope experience is strongly preferred — your guide runs training at Na, but this route is not the place to learn from scratch. You need to be able to walk eight to ten hours on unstable ground at altitude, and to keep making decisions when you are cold and tired. Four to six months of specific preparation is realistic.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>mountaineering and trekking to 6,000 m</strong> is mandatory. A standard trekking policy is not enough: most explicitly exclude roped glacier travel, crampon use and fixed-rope sections, which are exactly what this route involves. Read the activity exclusions and, if in doubt, ask the insurer in writing whether the Tashi Lapcha is covered.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Between Na and Thame there is no road, no lodge and no medical post, and evacuation from the glacier camps means a helicopter working near its ceiling, dispatched only against a guarantee of payment. Send us your policy number and the insurer's 24-hour emergency contact well before departure; we will not run the pass section without it.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a mountaineering kit list. Bring <strong>B2 or B3 mountaineering boots</strong> that take semi-automatic crampons, gaiters, a four-season sleeping bag rated to <strong>-20°C</strong>, an insulated mat, a heavy down jacket, a windproof and waterproof shell jacket and trousers, four base layers, a fleece, insulated and liner gloves, a warm hat, a buff and a sun hat.</p><p>Also pack a 40-45 litre pack, trekking poles, category 4 glacier glasses and goggles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, an insulated one litre bottle, a full personal first aid kit, wet wipes, and a large power bank — there is no charging between Na and Thame. <strong>Crampons, harness, ice axe, helmet and rope are supplied by us</strong>, but if you own boots and crampons you have used before, bring them.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>Lodges in Rolwaling as far as Na are basic — plank beds, shared toilets, no showers above Simigaon. From Tsho Rolpa to the Thame valley you are in <strong>two-person tents</strong> pitched on moraine and snow at 4,600 m, 4,860 m and 5,150 m, with a mess tent and a toilet tent. These are cold camps: -15°C to -20°C overnight is normal. The Khumbu side returns you to good teahouses at Thame and Namche.</p><p>A cook and kitchen crew travel with the group for the camping section. Meals are hot and frequent — porridge, eggs, soup, rice, pasta, potatoes and plenty of tea — because appetite fades at altitude and calories matter more than variety. Water is boiled or melted from snow and treated by the crew; you will be encouraged to drink four litres a day above the lake, and that is not a suggestion.</p>",
      },
    ],
    faqs: [
      { question: "Do I need climbing experience for the Tashi Lapcha?", answer: "Yes, in practice. You must be comfortable walking in crampons, moving roped on a glacier, and using a fixed line on steep ground. Your guide runs a training session at Na, but that is a refresher rather than a first lesson. If you have never worn crampons, do a mountaineering course or an easier peak first." },
      { question: "How is this different from the Tsho Rolpa trek?", answer: "The first week is the same valley. The Tsho Rolpa trek turns round at the lake and walks out; this one continues over a glaciated 5,755 m col into the Khumbu, with three high camps, technical equipment and no retreat once committed. It is a different order of trip." },
      { question: "What happens if the pass is not crossable?", answer: "Your guide assesses conditions at Na and again at the glacier camps, and will turn the group round rather than commit in poor weather or unstable snow. The fallback is to walk out the way you came in, which adds three to four days, and we then arrange transport from Gongar. That outcome is uncommon but it is always on the table." },
      { question: "How many staff come with the group?", answer: "A climbing guide, an assistant guide, a cook and kitchen crew, and porters for tents, food and technical equipment. Group sizes are deliberately small on this route, and the staff-to-trekker ratio is higher than on any other trip we run, which is reflected in the price." },
      { question: "How cold does it get at the high camps?", answer: "Overnight temperatures at 4,860 m and 5,150 m routinely reach -15°C and can drop to -20°C with wind. This is why the -20°C bag, the down jacket and the insulated mat are all required rather than recommended. Batteries, water and boot liners all go inside the sleeping bag at night." },
      { question: "Which permits are needed?", answer: "The Gaurishankar Conservation Area Permit for Rolwaling, and the Sagarmatha National Park entry permit and Khumbu Pasang Lhamu Rural Municipality permit for the Khumbu side. All are included and arranged by our team. The pass itself needs no separate climbing permit." },
      { question: "Why does the itinerary have a spare day at the end?", answer: "Lukla flights are cancelled by weather regularly, in every season. The contingency day in Kathmandu absorbs a delay so it does not cost you an international connection. If the flight runs on time it is a free day in the city." },
      { question: "How heavy is the pack I carry?", answer: "Your daypack runs to ten or twelve kilograms on the pass section, more than on a teahouse trek, because you carry water, layers, harness and crampons. Porters take your duffel — 15 kg limit — along with tents, food and group gear across the col." },
      { question: "Can we take the same route in the other direction?", answer: "It can be walked from the Khumbu into Rolwaling, and some groups prefer it because the Lukla flight comes at the start. We run it west to east because the Rolwaling approach gives a better acclimatisation profile before the col, which matters more than the flight logistics." },
      { question: "What is the busiest we can expect it to be?", answer: "Quiet. The Tashi Lapcha sees a handful of groups a season, and you may cross without seeing another party at all. Namche at the end of the trip will feel crowded by comparison, and that contrast is one of the memorable things about the route." },
    ],
    inclusions: {
      flights: ["Lukla to Kathmandu flight as per the itinerary, including airport transfers."],
      transport: ["Private jeep transportation from Kathmandu to Gongar as per the itinerary."],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
        "Crampons, harness, ice axe, helmet, and fixed rope for the Tashi Lapcha crossing.",
        "Climbing guide and an increased staff ratio for the glacier section.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Lukla, a turned-back pass crossing, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 15,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "An 18-day mountaineering trek from Rolwaling to the Khumbu over the glaciated Tashi Lapcha (5,755 m), with three high camps and a flight out from Lukla.",
    inExDescription:
      "Airport transfers, jeep transport to the trailhead, the Lukla flight, Kathmandu hotel nights, full camping equipment with a cook crew, technical climbing equipment, teahouse lodging, all trekking meals, conservation and national park permits, a climbing guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Tashi Lapcha Pass Trek – 18 Days Rolwaling to Khumbu",
      description:
        "An 18-day mountaineering trek over the Tashi Lapcha (5,755 m) from the Rolwaling valley to the Everest region, with three glacier camps and Tsho Rolpa.",
      keywords:
        "Tashi Lapcha Pass Trek, Tashi Lapcha La, Rolwaling to Khumbu, Tsho Rolpa, glacier pass Nepal, technical trek Nepal, Beding Na Thame",
      tags: "Tashi Lapcha Pass Trek, Rolwaling, Khumbu, Remote Region, High Pass Trek, Nepal Trekking",
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
        "The briefing for this trek is longer and more technical than most. Your climbing guide goes through the route, the three high camps, the equipment we supply — crampons, harness, ice axe, helmet and rope — and the decision points where the group can be turned round. We fit boots to crampons here rather than at 5,000 m, and go through your personal kit item by item.",
        "The rest of the day is free, and anything still missing can be bought or hired in Thamel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Singati (1,000 m)",
      elevation: "1,000 m",
      accommodation: "Singati",
      placeDescription: "A bazaar town on the Tama Koshi and the last road town before the Rolwaling valley.",
      lng: 86.1639,
      lat: 27.7362,
      html: p(
        "A long drive east on the Araniko Highway and then north through Dolakha, with the Rolwaling peaks appearing over the ridgelines as the road climbs to Charikot.",
        "The Araniko Highway is the road to the Tibetan border and carries the freight traffic to match, so the first two hours are slow. Beyond the turning at Khadichaur the road climbs steadily into Dolakha, and the terraced middle hills open out with the Rolwaling and Gaurishankar peaks standing on the northern skyline.",
        "Beyond Charikot the surface deteriorates and the road drops steeply to the <strong>Tama Koshi</strong>, following the river north to the bazaar at <strong>Singati (1,000 m)</strong>.",
        "Around 7–8 hours including stops. The crew sorts loads for the porters this evening, and it is the last night with mains power for a fortnight. Overnight at Singati.",
      ),
    },
    {
      title: "Drive to Gongar (1,440 m) and Trek to Simigaon (2,000 m)",
      elevation: "2,000 m",
      accommodation: "Simigaon",
      placeDescription: "A Sherpa village on a steep shelf above the Tama Koshi, with a gompa and a view of Gaurishankar.",
      lng: 86.2306,
      lat: 27.8719,
      html: p(
        "A short drive to the roadhead at <strong>Gongar (1,440 m)</strong>, then the steepest climb of the approach.",
        "The trail crosses the Tama Koshi at Chetchet and goes straight up the hillside — 800 m of stone steps and switchbacks through subtropical forest, hot and unrelenting, with the river shrinking below you.",
        "<strong>Simigaon (2,000 m)</strong> is a Sherpa village on the shelf at the top, with a gompa above the houses and the first view of <strong>Gaurishankar (7,134 m)</strong> at the head of the valley.",
        "Around 4 hours including the drive. Overnight at Simigaon.",
      ),
    },
    {
      title: "Trek from Simigaon (2,000 m) to Dongang (2,790 m)",
      elevation: "2,790 m",
      accommodation: "Dongang",
      placeDescription: "A forest clearing beside the Rolwaling Khola with a handful of seasonal lodges.",
      lng: 86.2881,
      lat: 27.9034,
      html: p(
        "East into the Rolwaling Khola, and a day spent almost entirely under trees.",
        "The gorge is dense rhododendron, oak and bamboo, with waterfalls dropping off both walls and the river loud below. The trail rolls rather than climbs, crossing side streams on log bridges and traversing sections cut into the cliff face.",
        "In spring the rhododendron flowers for hours of walking at a time — this is one of the finest forest sections anywhere in Nepal, and the last of the greenery for two weeks.",
        "<strong>Dongang (2,790 m)</strong> is a river clearing with a couple of seasonal lodges. Around 6–7 hours. Overnight at Dongang.",
      ),
    },
    {
      title: "Trek from Dongang (2,790 m) to Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main Sherpa village of Rolwaling, a single street of stone houses beneath Gaurishankar.",
      lng: 86.3755,
      lat: 27.9028,
      html: p(
        "A 900 m climb out of the forest into the high valley.",
        "The trees thin to birch and juniper and then stop, and the valley opens out with the walls stepping back to reveal the peaks the gorge had hidden.",
        "<strong>Beding (3,690 m)</strong> is the main village of Rolwaling: one line of stone houses along the river, a monastery above, and stone-walled fields of potato and barley. Many of the men here are working mountaineers, and the valley has produced a striking number of expedition climbers — including some of the strongest high-altitude workers in the country.",
        "<strong>Gaurishankar</strong> stands directly over the village. Around 5–6 hours. Overnight at Beding.",
      ),
    },
    {
      title: "Acclimatization Day at Beding (3,690 m)",
      elevation: "3,690 m",
      accommodation: "Beding",
      placeDescription: "The main Sherpa village of Rolwaling, a single street of stone houses beneath Gaurishankar.",
      lng: 86.3755,
      lat: 27.9028,
      html: p(
        "The first of two acclimatisation days, and the start of the altitude plan that gets the group over the col.",
        "The morning walk climbs the slope north of the village towards the shoulder below <strong>Chekigo</strong>, gaining three or four hundred metres for a view down the valley and across Gaurishankar's south face. Three to four hours at an easy pace.",
        "The afternoon is for rest and for the village. The <strong>gompa</strong> above the houses is centuries old and the caretaker will usually open it up.",
        "Your guide checks the group tonight for headache, appetite and sleep quality. From here the camps climb steeply and the margin for altitude problems narrows with every one. Overnight at Beding.",
      ),
    },
    {
      title: "Trek from Beding (3,690 m) to Na (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na",
      placeDescription: "A summer yak settlement of stone huts on a broad pasture at the head of the Rolwaling valley.",
      lng: 86.4268,
      lat: 27.8815,
      html: p(
        "A short, gentle day to the last settlement in Rolwaling.",
        "The trail follows the river through open country past stone-walled potato fields and mani walls, the valley floor broad and flat with peaks standing straight out of it.",
        "<strong>Na (4,180 m)</strong> is a summer settlement of forty or fifty stone huts, occupied while the yaks graze and the potatoes grow and empty in winter. A few of the huts run as lodges in season, and this is the last roof before the Khumbu.",
        "Around 3 hours, arriving by lunchtime. The afternoon is free to rest and look at the route ahead. Overnight at Na.",
      ),
    },
    {
      title: "Acclimatization and Training Day at Na (4,180 m)",
      elevation: "4,180 m",
      accommodation: "Na",
      placeDescription: "A summer yak settlement of stone huts on a broad pasture at the head of the Rolwaling valley.",
      lng: 86.4268,
      lat: 27.8815,
      html: p(
        "The second acclimatisation day, and the day the technical preparation happens.",
        "The morning is a walk up towards <strong>Yalung Ri base camp</strong> at around 4,700 m — a steady climb on moraine for the view back down Rolwaling and across at the peaks of the Tibetan border, and useful height gained before returning to sleep low.",
        "The afternoon is training on the slope above the village: fitting and walking in <strong>crampons</strong>, using an <strong>ice axe</strong>, moving as a roped team, and ascending and descending a <strong>fixed line</strong>. Even if you have done all of it before, the session sets the drills the group will use on the col and lets the guide see how everyone moves.",
        "Your guide makes the first assessment tonight of whether each member of the group is ready for the crossing. Overnight at Na.",
      ),
    },
    {
      title: "Trek from Na (4,180 m) past Tsho Rolpa to Glacier Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Glacier Camp",
      placeDescription: "A moraine camp beyond Tsho Rolpa at the foot of the Trakarding Glacier.",
      lng: 86.5201,
      lat: 27.8321,
      html: p(
        "The day the group leaves trails and lodges behind for a week.",
        "The trail runs east up the valley floor and climbs onto the lateral moraine of the <strong>Trakarding Glacier</strong>, following the northern shore of <strong>Tsho Rolpa (4,580 m)</strong> — three and a half kilometres of grey-green meltwater with icebergs calving into its far end, the largest glacial lake in Nepal.",
        "The moraine path is loose and narrow with a considerable drop to the water, and the group moves carefully and one at a time in a few places.",
        "Beyond the lake the route drops onto the glacier itself and picks a line through the rubble to <strong>Glacier Camp (4,600 m)</strong>, tents pitched on flattened moraine with the ice grinding audibly underneath.",
        "Around 6–7 hours. Overnight camping at Glacier Camp.",
      ),
    },
    {
      title: "Trek from Glacier Camp (4,600 m) to Ngole (4,860 m)",
      elevation: "4,860 m",
      accommodation: "Ngole",
      placeDescription: "A high camp on the Trakarding Glacier below the Drolambau icefall.",
      lng: 86.5719,
      lat: 27.8346,
      html: p(
        "A slow day on the ice, short in distance and long in effort.",
        "The route works up the Trakarding Glacier through moraine, ice hummocks and old crevasses, with the group roped for the sections where the ice is bare. Progress at this altitude is measured in hours rather than kilometres, and the crew goes ahead to have the camp up and tea ready.",
        "The scale here is difficult to take in. The <strong>Drolambau Glacier</strong> spills in from the north in a broken icefall, and the walls on both sides run up to the 6,000 m peaks of the Rolwaling Himal.",
        "<strong>Ngole (4,860 m)</strong> is a camp on the moraine below the icefall, cold as soon as the sun leaves the valley in mid-afternoon. Around 5 hours. Overnight camping at Ngole.",
      ),
    },
    {
      title: "Trek from Ngole (4,860 m) to Tashi Lapcha High Camp (5,150 m)",
      elevation: "5,150 m",
      accommodation: "Tashi Lapcha High Camp",
      placeDescription: "The last camp before the col, on rock and snow at the head of the Drolambau Glacier.",
      lng: 86.5642,
      lat: 27.8399,
      html: p(
        "A short, steep day onto the shelf below the pass, and the highest camp of the trek.",
        "The route climbs the side of the <strong>Drolambau icefall</strong> on rock and snow, roped throughout, with a fixed line on the steepest section. It is only three to four hours but at this altitude, carrying a heavier pack, it is a full day's work.",
        "<strong>High Camp (5,150 m)</strong> sits on a shelf of rock and snow beneath the col. There is no shelter and no water except melted snow, and the wind picks up in the afternoon. The camp exists for one reason: to put the group on the pass at first light.",
        "The evening is early and organised — boots, crampons, harness and water sorted before dark, a hot meal, and everything that must not freeze inside the sleeping bag. Your guide sets the start time and the turnaround. Overnight camping at High Camp.",
      ),
    },
    {
      title: "Cross the Tashi Lapcha (5,755 m) and Descend to Thyangbo Kharka (4,350 m)",
      elevation: "4,350 m",
      accommodation: "Thyangbo Kharka",
      placeDescription: "A yak pasture on the Khumbu side of the Tashi Lapcha, above the Thame valley.",
      // The Khumbu-side kharkas below the col are not mapped individually; this
      // waypoint is placed on the descent line between the pass and Thame.
      lng: 86.6006,
      lat: 27.8371,
      html: p(
        "The crossing. Everything so far has been preparation for the next twelve hours.",
        "We leave High Camp in the dark, roped and in crampons, and climb the last snow slope to the <strong>Tashi Lapcha (5,755 m)</strong> as the sun comes up. The col is a narrow gap in the ridge marked with prayer flags, with <strong>Tengi Ragi Tau</strong> and <strong>Pachermo</strong> on either side and the Khumbu opening ahead — Kongde, Kusum Kanguru and the peaks above Namche in the distance.",
        "The east side is the steeper one. A fixed line protects the first section down rock and snow, then the route works through crevassed ground with the group roped and moving one at a time. This is the part that demands concentration, and it is not rushed.",
        "Below the glacier the ground turns to moraine and finally to grass at the yak pastures above the Thame valley, at around <strong>4,350 m</strong>. After a week on rock and ice, pitching tents on turf feels like a luxury.",
        "Ten to twelve hours. Overnight camping at Thyangbo Kharka.",
      ),
    },
    {
      title: "Trek from Thyangbo Kharka (4,350 m) to Thame (3,820 m)",
      elevation: "3,820 m",
      accommodation: "Thame",
      placeDescription: "A Sherpa village in the upper Bhote Koshi with one of the oldest monasteries in the Khumbu.",
      lng: 86.6505,
      lat: 27.8319,
      html: p(
        "An easy morning down into inhabited country, and the first lodge in a week.",
        "The trail follows the Thyangbo valley south on grass and moraine, dropping steadily with yaks grazing on the slopes and stone huts appearing as the valley widens. Water is plentiful again and the air is noticeably thicker.",
        "<strong>Thame (3,820 m)</strong> is a substantial Sherpa village in the upper Bhote Koshi, with a <strong>gompa</strong> founded several hundred years ago on the hillside above and a long history in mountaineering — Tenzing Norgay grew up here, and so did several of the most successful Everest climbers of the last fifty years.",
        "Around 4–5 hours. This is where the camping ends. A room, a hot shower and a menu with more than four things on it. Overnight at Thame.",
      ),
    },
    {
      title: "Trek from Thame (3,820 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The main town of the Khumbu, built in a horseshoe bowl above the Dudh Koshi.",
      lng: 86.71031,
      lat: 27.80344,
      html: p(
        "A gentle day down the Bhote Koshi into the centre of the Everest region.",
        "The trail contours through pine and juniper past Thamo and Phurte, with mani walls and water-driven prayer wheels beside the path and the peaks of the Khumbu opening ahead. It is a well-built, well-used trail, and after the col it feels like a highway.",
        "<strong>Namche Bazaar (3,440 m)</strong> arrives suddenly: a horseshoe of lodges, bakeries, gear shops and cafés stacked up the hillside, with <strong>Kongde Ri</strong> opposite and Everest and Lhotse visible from the ridge above town.",
        "After two weeks in Rolwaling and on the glacier, Namche is a genuine shock — espresso, wifi and hundreds of trekkers. It is also the right place to celebrate the crossing. Around 5 hours. Overnight at Namche Bazaar.",
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
        "The last walking day, down the Dudh Koshi on the main Everest trail.",
        "The descent from Namche to the Hillary Bridge is steep and busy, and then the trail follows the river south through <strong>Monjo</strong>, where you check out of Sagarmatha National Park, and <strong>Phakding</strong>, with a final climb of a couple of hundred metres into Lukla at the end.",
        "It is a long day — six to seven hours — but easy going after everything behind it, and the valley is green and warm.",
        "<strong>Lukla (2,840 m)</strong> is where the crew is paid and thanked, and where the group has its last dinner together. Around 6–7 hours. Overnight at Lukla.",
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
        "The <strong>Tenzing–Hillary Airport</strong> runway is 527 m long and slopes uphill into a hillside, and the take-off, which drops straight off the end into the valley, is one of the more memorable thirty seconds in aviation. The flight to <strong>Kathmandu (1,400 m)</strong> takes about 35 minutes, or lands at Manthali depending on the season's schedule.",
        "Transfer to your hotel. The rest of the day is yours, and it usually goes on a long shower, a large lunch and very little else.",
        "If the weather holds the flight, this is what tomorrow's spare day is for. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held in reserve for the Lukla flight, and a free day in the city if it ran on schedule.",
        "Lukla is cancelled by weather in every season, and an itinerary without a spare day is one that risks your international connection. If yesterday went to plan, today is yours.",
        "Good options with your guide: <strong>Boudhanath</strong> in the late afternoon, when the Tibetan Buddhist community walks the circuit and the lamps are lit; the old town and pottery square at <strong>Bhaktapur</strong>; or <strong>Patan Durbar Square</strong> and its museum. Thamel handles the shopping.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for one more stop in the valley — <strong>Swayambhunath</strong> in the morning light is a good way to finish.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "You have crossed one of the hardest passes in Nepal that does not require a climbing permit, walked from the Tama Koshi to the Dudh Koshi over a glacier, and seen two valleys that could not be less alike. If you want the next step up, Sherpani Col and the Amphu Labtsa in the Makalu region are the natural progression. Safe travels.",
      ),
    },
  ],
};
