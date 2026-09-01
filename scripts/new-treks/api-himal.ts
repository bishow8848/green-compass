import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/**
 * Darchula to the base camp of Api Himal in far-western Nepal.
 *
 * Waypoints marked "approximate" are camps and small settlements with no
 * OpenStreetMap node; they sit on the route line between verified points.
 */
export const apiHimalTrek: NewTrek = {
  price: 2150,
  difficulty: "challenging",
  maxAltitude: 4100,
  center: [80.85, 29.85],
  zoom: 9.5,
  content: {
    slug: "api-himal-base-camp-trek",
    title: "Api Himal Base Camp Trek",
    overview:
      "<p>The <strong>Api Himal Base Camp Trek</strong> goes to the far north-west corner of Nepal, to the foot of <strong>Api (7,132 m)</strong> — the highest mountain in the far west and one that almost nobody in the trekking world has seen. The route starts at <strong>Darchula</strong> on the Indian border, follows the Chamaliya river into the <strong>Api Nampa Conservation Area</strong>, and climbs through Byansi and Chhetri villages to the alpine meadows below the mountain.</p><p>This is the emptiest corner of the country. There is no trekking infrastructure at all: the group camps, carries its own food, and stays in villages that have never seen a lodge. In exchange you get a 7,000 m peak that receives a handful of visitors a year, high pastures full of medicinal herbs and grazing stock, and a walk through a part of Nepal whose culture — closer to Kumaon than to Kathmandu — most Nepalis have never seen either.</p>",
    highlights: [
      ["Api (7,132 m)", "Stand below the highest mountain in far-western Nepal, at a base camp that sees a handful of parties a year."],
      ["Api Nampa Conservation Area", "Walk a protected area of forest, alpine pasture and high herb meadows established in 2010."],
      ["Far-Western Village Culture", "Pass through communities whose language, dress and religious practice differ from anywhere else in Nepal."],
      ["A Genuine Camping Expedition", "Ten nights in tents with a cook crew in a region with no trekking lodges of any kind."],
      ["Almost No Other Trekkers", "Trek a route that receives a tiny fraction of the visitors the Annapurna trails see in a single day."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>April to early June</strong> and <strong>late September to October</strong> are the windows. Spring is the better of the two here: the rhododendron and herb meadows below the base camp are at their finest in May, the high pastures are in use, and the weather in the far west settles earlier than in the east. Autumn is drier and clearer but the season is short.</p><p>Winter closes the upper valley with snow and the high villages empty out, so December to March is not feasible. The monsoon brings landslides on the long approach road from Dhangadhi — the weakest link in the whole trip — along with leeches and cloud, so July to early September is best avoided entirely.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a challenging trek, less for altitude than for remoteness and the state of the trails. The base camp is at around 4,100 m, so the height is moderate, but the route is unmaintained in places, the days are long, and the group is entirely self-supported with tents, food and kitchen carried from the roadhead.</p><p>You need to be comfortable walking six to eight hours a day on rough ground for a week and a half, and to accept genuinely basic conditions — no lodges, no showers, no shops and no phone signal for days at a time. Eight weeks of hill fitness work is sensible. The long drives at each end are part of the difficulty: the road from Dhangadhi to Darchula is a full day and it is not a comfortable one.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required, comfortably above the 4,100 m base camp. Standard policies stopping at 3,000 m or 4,000 m would leave the upper half of the trek uninsured, so check the altitude clause explicitly.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. This is the most isolated region in our catalogue: the nearest hospital is in Dhangadhi, more than a day away by road, and a helicopter from Nepalgunj takes hours to reach the valley. Operators fly against a guarantee of payment from the insurer, so confirm that your policy will do that. Send us your policy number and the 24-hour emergency line before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a camping trek in a region with no resupply. Bring waterproof trekking boots, gaiters, a <strong>four-season sleeping bag rated to -15°C</strong> and an insulated mat, an insulated down jacket, a windproof and waterproof shell jacket and trousers, three or four base layers, a fleece, a warm hat, a sun hat, gloves and wool socks.</p><p>Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification, a thorough personal first aid kit including blister care and antibiotics discussed with your doctor, insect repellent and leech socks for the forest, wet wipes and hand sanitiser, a quick-dry towel, and a large power bank — there is no charging above Darchula.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>There are no trekking lodges anywhere on this route. Nights at Darchula and Dhangadhi are in basic hotels; everything else is <strong>tents</strong> — two-person tents pitched by the crew, with a mess tent and a toilet tent — or, occasionally, a room offered by a village household. Camps range from 1,700 m to 4,100 m and the nights above 3,000 m are cold.</p><p>A cook and kitchen crew travel with the group, cooking three hot meals a day from supplies bought in Dhangadhi and Darchula. Fresh food lasts the first few days; after that it is rice, lentils, pasta, potatoes and dried goods, with soup at every camp. Some villages sell eggs and vegetables when they have a surplus. Water comes from streams and springs, boiled and treated by the crew.</p>",
      },
    ],
    faqs: [
      { question: "How do we get to the far west and how long does it take?", answer: "A flight from Kathmandu to Dhangadhi in the far-western Terai, then a full day's drive north to Darchula on the Indian border. The drive is around 250 km on hill roads and takes ten to twelve hours. There is no shortcut; the remoteness that makes this trek worth doing is also what makes getting there slow." },
      { question: "Do I need a special permit?", answer: "The Api Nampa Conservation Area entry permit and the standard trekking registration, both included in your package. It is not a restricted area, so there is no minimum group size, but a licensed guide is required and in practice a supported crew is essential." },
      { question: "How high is the base camp and is altitude a concern?", answer: "The base camp is at around 4,100 m and the trek gains height gradually over five days, so the altitude risk is lower than on most Himalayan routes. Your guide monitors the group daily, and the exploration day at base camp doubles as acclimatisation before any higher walking." },
      { question: "What is the culture like in the far west?", answer: "Different from anywhere else in Nepal. The lower valleys are Chhetri and Thakuri with a strong Kumaoni influence from across the Indian border; the upper villages have Byansi and Tibetan connections. Deuda song and dance, distinct dialects, and local temple traditions are all part of the region and your guide will explain what you see." },
      { question: "Can we see Api from the base camp?", answer: "Yes — the base camp sits directly below the south face, with Api at 7,132 m and Nampa at 6,755 m dominating the head of the valley. On clear mornings the view is unobstructed, and the exploration day gives time to walk further up the moraine for a fuller panorama." },
      { question: "Is there any mobile signal?", answer: "There is NTC coverage at Darchula and in the first villages, and nothing above them. Expect to be out of contact for around a week in the middle of the trek and brief your family before you leave the road." },
      { question: "How many staff travel with the group?", answer: "A licensed guide, an assistant guide, a cook and kitchen crew, and porters for the tents, food and group equipment. Because nothing can be bought on the route the porter team is larger than on a teahouse trek, which is reflected in the price." },
      { question: "What wildlife is in the conservation area?", answer: "Snow leopard, Himalayan black bear, musk deer and blue sheep are all present, and the area is known for the density of medicinal and aromatic plants in the high meadows, including yarsagumba, which villagers collect in early summer. Birdlife through the forest belt is excellent." },
      { question: "How bad are the roads?", answer: "The Dhangadhi to Darchula road is long, rough in sections and slow, and the last part to the trailhead is worse. In the monsoon it can be blocked by landslides for days, which is one reason we do not run the trek then. A jeep rather than a bus is included for both legs." },
      { question: "Where can I withdraw cash?", answer: "There are ATMs in Dhangadhi and, less reliably, in Darchula. Draw everything you need before leaving the road, in small denominations, for anything you buy in the villages and for tips at the end of the trek." },
    ],
    inclusions: {
      flights: [
        "Kathmandu to Dhangadhi return domestic flights as per the itinerary, including airport transfers.",
      ],
      transport: ["Private jeep transportation between Dhangadhi, Darchula, and the trailhead as per the itinerary."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Dhangadhi and Darchula with breakfast.",
      ],
      permits: "Api Nampa Conservation Area entry permit and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the full camping section of the trek.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu, Dhangadhi, and Darchula.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by road blockages, weather delays, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 11,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 15-day camping expedition from Darchula to the base camp of Api (7,132 m), the highest peak in far-western Nepal, in the Api Nampa Conservation Area.",
    inExDescription:
      "Domestic flights, airport transfers, jeep transport, Kathmandu, Dhangadhi and Darchula hotel nights, full camping equipment with a cook crew, all trekking meals, the conservation area permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-Jun, Sep-Oct",
    meta: {
      title: "Api Himal Base Camp Trek – 15 Days in Far West Nepal",
      description:
        "A 15-day camping trek from Darchula to the base camp of Api (7,132 m), the highest mountain in far-western Nepal, through the Api Nampa Conservation Area.",
      keywords:
        "Api Himal Base Camp Trek, Api Himal, Darchula trekking, Api Nampa Conservation Area, far west Nepal trek, camping trek Nepal, remote trekking Nepal",
      tags: "Api Himal Base Camp Trek, Far West, Remote Region, Camping Trek, Base Camp Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing. The far west needs a thorough one: the flight to Dhangadhi, the long drive to Darchula, ten nights of camping with no resupply, and the practical reality that nothing can be bought or hired once the group leaves the road.",
        "We check your kit carefully against the list for exactly that reason. Anything missing can be sorted in Thamel this afternoon. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Dhangadhi (109 m)",
      elevation: "109 m",
      accommodation: "Dhangadhi",
      placeDescription: "A city on the far-western Terai and the air gateway to the Api Nampa region.",
      // Approximate: waypoint placed at the published position for Dhangadhi.
      lng: 80.5833,
      lat: 28.7,
      html: p(
        "An hour's flight west across the entire length of the country, with the Himalaya running along the right-hand windows for most of it — Ganesh, Manaslu, Annapurna and Dhaulagiri in turn, then the far-western ranges.",
        "<strong>Dhangadhi (109 m)</strong> is a working city on the Terai plain near the Indian border, flat, hot and green, and about as far from mountain Nepal in character as the country gets.",
        "The afternoon is spent on logistics: the crew buys the fresh food and fuel for the trek, and your guide confirms the vehicle and the road conditions north for tomorrow.",
        "It is not a tourist town, but the bazaar in the evening is worth an hour. An early night — tomorrow is a long day on the road. Overnight at Dhangadhi.",
      ),
    },
    {
      title: "Drive from Dhangadhi (109 m) to Darchula (940 m)",
      elevation: "940 m",
      accommodation: "Darchula",
      placeDescription: "A border town on the Mahakali river opposite India, and the roadhead for the Api region.",
      lng: 80.5399,
      lat: 29.8436,
      html: p(
        "The long day. The road runs north from the Terai into the hills, following the <strong>Mahakali river</strong> which forms the border with India for the whole of its length here.",
        "It is ten to twelve hours of driving on a road that is paved in stretches and rough in others, climbing through sal forest into terraced middle-hill country. The Indian side is visible across the river for most of the way, often with a better road on it.",
        "<strong>Darchula (940 m)</strong> is the district headquarters, a border town where a suspension bridge crosses to Dharchula on the Indian side and people move back and forth daily.",
        "This is the last place with shops, an ATM and mobile signal worth relying on. The crew finalises loads tonight. Overnight at Darchula.",
      ),
    },
    {
      title: "Drive to Latinath (1,500 m) and Trek to Seti (1,700 m)",
      elevation: "1,700 m",
      accommodation: "Seti",
      placeDescription: "A farming village on the Chamaliya river at the start of the Api approach.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line up the Chamaliya valley.
      lng: 80.8005,
      lat: 29.7723,
      html: p(
        "A short drive east and then the first walking of the trek.",
        "A jeep carries the group up a rough road to <strong>Latinath (1,500 m)</strong>, where the porters load and the walking begins. The trail follows the <strong>Chamaliya river</strong> east into the hills, through terraced fields of rice and millet with villages of stone and slate houses on the slopes above.",
        "This is ordinary far-western farming country and there is no trekking traffic at all. Children walking home from school and people carrying loads to market are the company on the path.",
        "<strong>Seti (1,700 m)</strong> is a village on the river with room to camp beside it. The first night in the tents is a warm one at this altitude.",
        "Around 4 hours of walking after the drive. Overnight camping at Seti.",
      ),
    },
    {
      title: "Trek from Seti (1,700 m) to Makarigad (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Makarigad",
      placeDescription: "A settlement in the Chamaliya valley on the approach to the Api Nampa high country.",
      // Approximate: settlement not tagged in OpenStreetMap; placed on the route line.
      lng: 80.8355,
      lat: 29.7999,
      html: p(
        "A steady day up the valley, gaining height gently and moving from farmland into forest.",
        "The trail climbs above the Chamaliya on the north bank, crossing side streams on log and cable bridges and traversing forested slopes. The crops change as the altitude rises — rice gives way to millet, then buckwheat and potato.",
        "The forest through this section is oak and pine with dense undergrowth, and in spring it is loud with birds. In wet conditions expect leeches on the lower stretches.",
        "<strong>Makarigad (2,100 m)</strong> is a small settlement with flat ground for the camp beside the river. There is no shop and no lodge; the crew's supplies are what there is.",
        "Around 6 hours. Overnight camping at Makarigad.",
      ),
    },
    {
      title: "Trek from Makarigad (2,100 m) to Ghusa (2,300 m)",
      elevation: "2,300 m",
      accommodation: "Ghusa",
      placeDescription: "The last permanent village in the Chamaliya valley before the Api high country.",
      lng: 80.8706,
      lat: 29.8297,
      html: p(
        "A shorter day to the last village on the route.",
        "The valley narrows and the trail climbs through mixed forest with the river loud below, crossing avalanche debris in one or two places where the winter snow has come off the slopes above.",
        "<strong>Ghusa (2,300 m)</strong> is the last permanent settlement in the valley: a compact village of stone houses with slate roofs, stone-walled fields of potato and buckwheat, and stock kept in the ground floor of each house through the winter.",
        "This is a good place to spend the afternoon. The village sees a handful of outsiders a year and your guide's introductions open doors; the local dialect, dress and household organisation are all noticeably different from central Nepal.",
        "Around 4–5 hours. Overnight camping at Ghusa.",
      ),
    },
    {
      title: "Trek from Ghusa (2,300 m) to Dhauli Odar (3,100 m)",
      elevation: "3,100 m",
      accommodation: "Dhauli Odar",
      placeDescription: "A rock shelter and grazing ground above the treeline on the approach to Api.",
      // Approximate: herders' shelter with no OpenStreetMap node.
      lng: 80.9091,
      lat: 29.8809,
      html: p(
        "The biggest climbing day so far, out of the forest and into the alpine zone.",
        "The trail leaves Ghusa and climbs steeply north-east, through the last of the oak and rhododendron and into birch and juniper. The gradient is unrelenting for most of the morning.",
        "Above about 2,900 m the trees give out and the country opens into grazing ground and herb meadow — this belt is famous locally for medicinal plants, and in early summer villagers camp up here collecting them.",
        "The first proper mountain views arrive with the open ground: <strong>Api (7,132 m)</strong> and <strong>Nampa (6,755 m)</strong> at the head of the valley, snow-covered and much closer than expected.",
        "<strong>Dhauli Odar (3,100 m)</strong> is a rock shelter and flat pasture used by herders. Around 6 hours. Overnight camping at Dhauli Odar.",
      ),
    },
    {
      title: "Trek from Dhauli Odar (3,100 m) to Api Base Camp (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Api Base Camp",
      placeDescription: "The alpine base camp below the south face of Api, in the Api Nampa Conservation Area.",
      // Approximate: base camp with no OpenStreetMap node; placed at the head of
      // the valley below Api's south face.
      lng: 80.9294,
      lat: 29.9251,
      html: p(
        "The day the trek arrives, climbing a thousand metres to the foot of the mountain.",
        "The trail follows the valley north over open pasture and then moraine, with the walls closing in and the glacier system at the head of the valley becoming the dominant feature. The going is rough underfoot but the gradient is manageable, and the group moves slowly at this height.",
        "<strong>Api Base Camp (4,100 m)</strong> sits on flat ground below the <strong>south face of Api (7,132 m)</strong>, the highest mountain in the far west and one that has been climbed only a handful of times. <strong>Nampa (6,755 m)</strong> stands beside it.",
        "The scale takes some adjusting to, mostly because there is nothing else here — no lodges, no expedition, no other party, and no sign that anyone was here recently.",
        "Around 5–6 hours. Overnight camping at Api Base Camp.",
      ),
    },
    {
      title: "Exploration Day at Api Base Camp (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Api Base Camp",
      placeDescription: "The alpine base camp below the south face of Api, in the Api Nampa Conservation Area.",
      lng: 80.9294,
      lat: 29.9251,
      html: p(
        "A full day at the base camp, which is what the whole approach has been for.",
        "The morning walk climbs the moraine ridge west of the camp towards <strong>4,500 m</strong> for the fuller panorama — Api's south and west faces, the glacier below them, Nampa to the east, and the ridgelines running north into the Indian border country.",
        "Blue sheep are common on these slopes and the snow leopard that prey on them are present, though seeing one would be extraordinary luck. What you will see is a great many herb meadows, marmots, and Himalayan griffon working the thermals.",
        "The afternoon is rest, and there is a particular quality to it here: no aircraft, no other groups, no phone signal, and a 7,000 m mountain in front of the tent.",
        "Your guide uses the day to check the group before the descent. Overnight camping at Api Base Camp.",
      ),
    },
    {
      title: "Trek from Api Base Camp (4,100 m) to Ghusa (2,300 m)",
      elevation: "2,300 m",
      accommodation: "Ghusa",
      placeDescription: "The last permanent village in the Chamaliya valley before the Api high country.",
      lng: 80.8706,
      lat: 29.8297,
      html: p(
        "A long descent, covering two days of the ascent in one.",
        "The route retraces the moraine and pasture to Dhauli Odar and then drops steeply through the treeline into forest. Losing 1,800 m in a day is hard on the knees and poles make a real difference on the steep forest section.",
        "Walking down gives you the herb meadows and the forest properly — on the way up most people are watching their feet and their breathing.",
        "<strong>Ghusa (2,300 m)</strong> in the late afternoon, back among houses, woodsmoke and fields.",
        "Around 7 hours. Overnight camping at Ghusa.",
      ),
    },
    {
      title: "Trek from Ghusa (2,300 m) to Seti (1,700 m)",
      elevation: "1,700 m",
      accommodation: "Seti",
      placeDescription: "A farming village on the Chamaliya river at the start of the Api approach.",
      lng: 80.8005,
      lat: 29.7723,
      html: p(
        "A steady day back down the Chamaliya valley, through the villages and forest of the approach.",
        "The trail loses height gradually along the river, and after the alpine zone the warmth and the smells of the lower valley are immediately noticeable — woodsmoke, cut grass, and the animals in the fields.",
        "This is a good day for the villages. Coming down, with the trek behind you and no altitude to manage, there is time to stop for tea and let your guide translate, which is where most of the value of a far-western trek actually sits.",
        "<strong>Seti (1,700 m)</strong> in the afternoon, at the same camp used on the way in.",
        "Around 6 hours. Overnight camping at Seti.",
      ),
    },
    {
      title: "Trek to Latinath (1,500 m) and Drive to Darchula (940 m)",
      elevation: "940 m",
      accommodation: "Darchula",
      placeDescription: "A border town on the Mahakali river opposite India, and the roadhead for the Api region.",
      lng: 80.5399,
      lat: 29.8436,
      html: p(
        "The last walking of the trek, and back to the road.",
        "A short morning's walk down the valley to <strong>Latinath (1,500 m)</strong>, where the jeep is waiting. Three hours or so, mostly easy going on the river trail.",
        "This is where the porters and cook crew finish and where tips are given. On a fully camped trek in a region with no infrastructure, the crew has carried everything the group ate and slept in for ten days, and the farewell is a substantial one.",
        "The drive back to <strong>Darchula (940 m)</strong> takes a couple of hours on the rough hill road.",
        "A hotel, a hot shower and mobile signal for the first time in over a week. Overnight at Darchula.",
      ),
    },
    {
      title: "Drive from Darchula (940 m) to Dhangadhi (109 m)",
      elevation: "109 m",
      accommodation: "Dhangadhi",
      placeDescription: "A city on the far-western Terai and the air gateway to the Api Nampa region.",
      lng: 80.5833,
      lat: 28.7,
      html: p(
        "The long drive south back to the plains, retracing the Mahakali road.",
        "Ten to twelve hours on the road again, dropping out of the hills through sal forest into the flat green of the Terai. It is a long day, but the valley scenery on the upper section is genuinely good and the road is quiet.",
        "The Indian border runs alongside for much of the way, and the traffic across the bridges — people, goods, animals — is a reminder of how much daily life in the far west happens on both sides of the river.",
        "<strong>Dhangadhi (109 m)</strong> in the evening. Overnight at Dhangadhi.",
      ),
    },
    {
      title: "Fly from Dhangadhi (109 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An hour in the air back across the country, with the whole Nepali Himalaya out of the windows on a clear day.",
        "It is a good flight for putting the trek in context: the ranges pass one after another — Api and the far-western peaks first, then Dolpo, Dhaulagiri, Annapurna, Manaslu and Ganesh — and you can see quite how far west you have been.",
        "Transfer to your hotel in <strong>Kathmandu (1,400 m)</strong>, with the rest of the day free.",
        "The evening is usually spent on a long shower, a large meal and a walk through Thamel, which after two weeks in the far west feels extremely busy. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Boudhanath</strong>, <strong>Pashupatinath</strong> or the old town at <strong>Bhaktapur</strong> with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Very few people, Nepali or foreign, ever see the far west, and fewer still stand below Api. If the emptiness suited you, the Humla Limi valley and the Badimalika pilgrimage route are the two other far-western trips worth taking, and both are just as quiet. Safe travels.",
      ),
    },
  ],
};
