import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const DHANGADHI = { lng: 80.5833, lat: 28.7 };

/**
 * Achham district to the Ramaroshan lakes and meadows.
 *
 * Waypoints marked "approximate" are camps and the lake basin, none of which
 * have OpenStreetMap nodes; they sit on the route line from Mangalsen.
 */
export const ramaroshanTrek: NewTrek = {
  price: 1650,
  difficulty: "moderate",
  maxAltitude: 3200,
  center: [81.35, 29.15],
  zoom: 10.5,
  content: {
    slug: "ramaroshan-lakes-trek",
    title: "Ramaroshan Lakes Trek",
    overview:
      "<p>The <strong>Ramaroshan Lakes Trek</strong> goes to a high basin in <strong>Achham</strong>, one of the poorest and least visited districts in Nepal, where a scatter of small lakes and open meadows sits above the forest at around 3,000 m. Local tradition counts <strong>twelve lakes and eighteen meadows</strong>, and the place is sacred — a pilgrimage site associated with Rama and the goddess Roshan, with festivals that draw people from across the far west.</p><p>The walking is middle-hill country: terraced villages, oak and rhododendron forest, and grazing ground used through the summer. There is no trekking infrastructure whatsoever, so the group camps with a cook crew and stays in village households on the way in. What you get in return is a landscape almost nobody photographs, a district with essentially no tourism, and a week of walking without meeting another visitor.</p>",
    highlights: [
      ["Twelve Lakes and Eighteen Meadows", "Walk a high basin of small lakes and open grassland that local tradition counts by name."],
      ["A Sacred Site of the Far West", "Visit a pilgrimage place associated with Rama and the goddess Roshan, with festivals drawing people from across the region."],
      ["Achham District", "Trek one of the least visited districts in Nepal, where the group is likely the only foreign party of the season."],
      ["Rhododendron and Oak Forest", "Climb through a forest belt full of birdlife that flowers red and pink through April and May."],
      ["Village Homestays", "Stay with families in communities that have never hosted a trekking group before."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the seasons. Spring is the more rewarding here: the rhododendron forest below the basin flowers through April and May, the meadows come into use with grazing stock, and the days are warm without being hot in the valleys.</p><p>Autumn is clear and dry with the best long views north to the far-western ranges. Winter brings snow to the basin and the meadows empty, so December to February is not practical. The monsoon makes the forest trails slippery and leech-ridden and the approach roads unreliable, so June to September is best avoided.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek and the walking is well within reach of anyone with reasonable hill fitness — five to six hours a day, with a maximum altitude of around 3,200 m and no acclimatisation concerns. The trails are village and pilgrim paths: clear on the ground, unmaintained, and steep in places.</p><p>The demands are logistical rather than physical. Achham has no trekking industry at all, so the group camps or stays in households, carries its own food from the district town, and travels a long way by road to get there. Four to six weeks of regular hill walking is enough preparation. Come prepared to be a novelty — very few foreigners have walked here.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,000 m</strong> is required, comfortably above the 3,200 m high point. Most policies with a trekking extension clear that, but check that trekking is covered at all rather than assuming your standard travel policy includes it.</p><p>The policy should include <strong>emergency evacuation and medical treatment</strong>. Achham has a district hospital at Mangalsen but nothing on the route, and the roads are slow, so an evacuation from the basin would likely be a helicopter, dispatched only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>A mid-altitude camping trek, so the list is moderate. Bring waterproof trekking boots, three base layers, a fleece, an insulated jacket, a waterproof and windproof shell, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A <strong>sleeping bag rated to -10°C</strong> and an insulated mat cover the nights at the lakes.</p><p>Also pack a 30-litre daypack, trekking poles, a headlamp with spare batteries, sunscreen and lip balm, sunglasses, a reusable bottle with purification, a personal first aid kit with blister care, insect repellent and leech socks for the forest, wet wipes and hand sanitiser, a quick-dry towel and a power bank. There is no charging above the villages.</p>",
      },
      {
        heading: "Camping, Homestays, Food & Drinking Water",
        content:
          "<p>Nights in Kathmandu, Dhangadhi and Mangalsen are in basic hotels. On the trek you stay in a mix of <strong>village households</strong> and <strong>tents</strong> pitched by the crew, depending on what each settlement can offer. The lake basin has no permanent building, so those nights are camping. Facilities throughout are simple: shared outside toilets, washing from a bucket, and no showers.</p><p>A cook and kitchen crew travel with the group, cooking three hot meals a day from supplies bought in Mangalsen. Expect <em>dal bhat</em>, <em>dhido</em>, seasonal vegetables, eggs and tea. Where you stay with a family you eat what the household eats. Water comes from spring taps and streams, boiled and treated by the crew; the lake water is not for drinking.</p>",
      },
    ],
    faqs: [
      { question: "What exactly is Ramaroshan?", answer: "A high basin in Achham with a scatter of small lakes and open meadows, counted in local tradition as twelve lakes and eighteen meadows. It is a sacred site associated with Rama and the goddess Roshan, with shrines at the water and festivals that bring pilgrims from across the far west." },
      { question: "How many other trekkers will we see?", answer: "In all likelihood, none. Achham receives essentially no foreign visitors, and the traffic on the route is local — herders, pilgrims and people moving between villages. You will be a novelty in every settlement you walk through." },
      { question: "Do I need a special permit?", answer: "No restricted area permit is required. The standard trekking registration and local entry fees are included in your package, and a licensed guide is required. The paperwork is the simplest of any trek in the far west." },
      { question: "How do we get to Achham?", answer: "A flight from Kathmandu to Dhangadhi on the far-western Terai, then a full day's drive north into the hills to Mangalsen, the district headquarters. The road is long and rough in sections; there is no shortcut and no closer airstrip in regular use." },
      { question: "What is the culture like?", answer: "Predominantly Chhetri and Thakuri with a strong far-western character — deuda song and circle dance, local dialects distinct from standard Nepali, and household and village shrines. Achham has historically been one of the most marginalised districts in the country, which shapes what you see." },
      { question: "How cold does it get?", answer: "Nights at the lake camps fall to around -5°C in spring and autumn. The basin is open and exposed with no shelter beyond your tent. Lower down, in the villages, nights are mild. A -10°C bag and a warm jacket for the evenings cover it comfortably." },
      { question: "What wildlife might we see?", answer: "The forest belt holds langur, barking deer, Himalayan black bear and a great deal of birdlife including monal and several pheasant species. Above the treeline, herders' stock is more common than wildlife. Leopard are present in the forest but rarely seen." },
      { question: "Is there mobile signal?", answer: "There is NTC coverage in the villages at the start and end of the route and patchy signal on the higher ground. Assume you are out of contact for the middle days and brief your family before leaving Mangalsen." },
      { question: "Is this a good first camping trek?", answer: "Yes. The altitude is modest, the days are manageable, and the camping is fully supported with a cook crew. It is a gentler introduction to unsupported country than the far-western high routes such as Api Himal, and the cultural interest is the main draw rather than mountain scenery." },
      { question: "Where can I withdraw cash?", answer: "There are ATMs in Dhangadhi and, less reliably, in Mangalsen. Draw everything you need before leaving the road, in small denominations, for anything you buy in the villages and for tips at the end of the trek." },
    ],
    inclusions: {
      flights: ["Kathmandu to Dhangadhi return domestic flights as per the itinerary, including airport transfers."],
      transport: ["Private jeep transportation between Dhangadhi, Mangalsen, and the trailhead as per the itinerary."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Dhangadhi and Mangalsen with breakfast.",
      ],
      permits: "Local entry fees and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew, and village homestay arrangements along the route.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu, Dhangadhi, and Mangalsen.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by road blockages, weather delays, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 7,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "An 11-day camping trek from Mangalsen in Achham to the Ramaroshan lakes and meadows at around 3,000 m, in a district with no tourism at all.",
    inExDescription:
      "Domestic flights, airport transfers, jeep transport, Kathmandu, Dhangadhi and Mangalsen hotel nights, camping equipment with a cook crew, village homestays, all trekking meals, entry fees and permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Ramaroshan Lakes Trek – 11 Days in Achham, Far West Nepal",
      description:
        "An 11-day camping trek to the Ramaroshan lakes and meadows in Achham district, a sacred high basin in one of the least visited parts of Nepal.",
      keywords:
        "Ramaroshan Lakes Trek, Ramaroshan Achham, twelve lakes eighteen meadows, Mangalsen, far west Nepal trek, remote trekking Nepal, camping trek",
      tags: "Ramaroshan Lakes Trek, Far West, Remote Region, Lake Trek, Camping Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the eleven-day plan, the flight and long drive to Achham, the mix of homestays and camping, and what to expect from a district that has never had trekking groups.",
        "We check your kit against the list, though for a mid-altitude trek it is short. Anything missing can be bought or hired in Thamel this afternoon. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Dhangadhi (109 m)",
      elevation: "109 m",
      accommodation: "Dhangadhi",
      placeDescription: "A city on the far-western Terai and the air gateway to Achham and the far west.",
      ...DHANGADHI,
      html: p(
        "An hour's flight west across the entire length of the country, with the Himalaya running along the right-hand windows — Ganesh, Manaslu, Annapurna, Dhaulagiri and then the far-western ranges in turn.",
        "<strong>Dhangadhi (109 m)</strong> is a working city on the Terai plain near the Indian border: flat, hot, green and entirely untouristed.",
        "The afternoon is logistics. The crew buys fresh food and fuel for the trek and your guide confirms the vehicle and the road conditions north for tomorrow.",
        "The bazaar in the evening is worth an hour. An early night — tomorrow is a long day on the road. Overnight at Dhangadhi.",
      ),
    },
    {
      title: "Drive from Dhangadhi (109 m) to Mangalsen (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Mangalsen",
      placeDescription: "The district headquarters of Achham, on a ridge in the far-western hills.",
      lng: 81.2565,
      lat: 29.1409,
      html: p(
        "A long day on the road, north from the plains into the far-western hills.",
        "The route climbs out of the Terai through sal forest and then into terraced middle-hill country, following river valleys and crossing ridges. It is eight to ten hours on a road that is paved in stretches and rough in others.",
        "This is a part of Nepal that very few travellers of any kind see, and the drive is a good introduction to it: villages of stone and slate, terraced hillsides worked entirely by hand, and market towns that serve a district rather than a tourist trail.",
        "<strong>Mangalsen (1,400 m)</strong> is the district headquarters of Achham, on a ridge with a hospital, a bank and the last reliable shops on the route.",
        "Overnight at Mangalsen.",
      ),
    },
    {
      title: "Drive to the Trailhead and Trek to Kuina Kharka (2,300 m)",
      elevation: "2,300 m",
      accommodation: "Kuina Kharka",
      placeDescription: "A grazing clearing in the forest on the approach to the Ramaroshan basin.",
      // Approximate: herders' ground with no OpenStreetMap node; placed on the
      // route line east of Mangalsen.
      lng: 81.3492,
      lat: 29.1447,
      html: p(
        "A short drive east on a rough road, and then the first walking of the trek.",
        "The jeep takes the group as far as the track allows and the porters load at the roadhead. The trail climbs east through terraced fields of millet and maize, past villages of stone and slate houses on every workable shelf.",
        "Above the farmland the path enters oak forest and the gradient steepens. This is a working route used by herders taking stock up to the summer pastures rather than a trekking trail, so it is clear but rough.",
        "<strong>Kuina Kharka (2,300 m)</strong> is a grazing clearing with water and flat ground for the tents, and the first camp of the trek.",
        "Around 5 hours of walking. Overnight camping at Kuina Kharka.",
      ),
    },
    {
      title: "Trek from Kuina Kharka (2,300 m) to Ramaroshan (3,000 m)",
      elevation: "3,000 m",
      accommodation: "Ramaroshan",
      placeDescription: "A high basin of small lakes and open meadows, sacred in far-western tradition.",
      // Approximate: the lake basin has no OpenStreetMap node; the waypoint uses
      // the commonly cited position for Ramaroshan in eastern Achham.
      lng: 81.4506,
      lat: 29.1523,
      html: p(
        "Up through the rhododendron belt and out onto the meadows.",
        "The trail continues climbing through oak and then rhododendron forest, thick with moss and loud with birds. In April and May the flowering here runs for hours of walking, red and pink overhead, and it is the finest section of the approach.",
        "The trees thin around 2,800 m and the country opens abruptly into grassland with the lakes scattered across it.",
        "<strong>Ramaroshan (3,000 m)</strong> is a basin of open meadow and small lakes, counted in local tradition as <strong>twelve lakes and eighteen meadows</strong>. There are shrines at several of the pools and stone shelters built for the pilgrimage.",
        "The camp is beside the water. Around 5 hours. Overnight camping at Ramaroshan.",
      ),
    },
    {
      title: "Exploration Day at Ramaroshan (3,000 m)",
      elevation: "3,000 m",
      accommodation: "Ramaroshan",
      placeDescription: "A high basin of small lakes and open meadows, sacred in far-western tradition.",
      lng: 81.4506,
      lat: 29.1523,
      html: p(
        "A full day in the basin, which is what the approach was for.",
        "The morning is a circuit of the lakes with your guide, who can name them and explain the traditions attached to each — the association with Rama and the goddess Roshan, the shrines, and the festivals that bring pilgrims up from the districts below.",
        "The afternoon walk climbs the ridge on the northern side of the basin to around <strong>3,200 m</strong>, the high point of the trek, for the long view: the far-western hills rolling away south, and on a clear day the <strong>Saipal</strong> range and the peaks of Bajura and Bajhang on the northern horizon.",
        "Herders are usually camped on the meadows in season with buffalo and goats, and an hour spent with them, translated, is generally the most interesting part of the day.",
        "Overnight camping at Ramaroshan.",
      ),
    },
    {
      title: "Trek from Ramaroshan (3,000 m) to Dhamali (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Dhamali",
      placeDescription: "A hillside village below the Ramaroshan basin on the southern descent.",
      // Approximate: village not tagged in OpenStreetMap; placed on the route
      // line on the southern side of the basin.
      lng: 81.4128,
      lat: 29.1102,
      html: p(
        "Off the meadows and down a different line from the way up.",
        "The trail leaves the basin on its southern side and drops through rhododendron and oak forest towards the villages below. Taking a different route down means a different set of settlements and a fuller picture of the district than an out-and-back would give.",
        "The forest here is dense and steep, and the path is a village trail rather than a graded one. Poles help.",
        "<strong>Dhamali (2,100 m)</strong> is a hillside village of stone houses and terraced fields. Tonight is a homestay, and the group will very likely be the first foreign visitors the household has hosted.",
        "Around 5 hours. Overnight in a village homestay at Dhamali.",
      ),
    },
    {
      title: "Trek from Dhamali (2,100 m) to Mangalsen (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Mangalsen",
      placeDescription: "The district headquarters of Achham, on a ridge in the far-western hills.",
      lng: 81.2565,
      lat: 29.1409,
      html: p(
        "The last walking day, west along the hillsides back to the district town.",
        "The trail contours and descends through a string of villages, dropping to cross streams and climbing back onto the shoulder each time. This is ordinary far-western farming country at close quarters: schools, tea shops, water mills and a great deal of hand labour on the terraces.",
        "It is a good final day for conversation. With the trek behind you and the pace easy, stopping for tea and letting your guide translate is where most of the value of a trek in Achham actually sits.",
        "<strong>Mangalsen (1,400 m)</strong> in the afternoon, with a guesthouse, hot water and mobile signal.",
        "This is where the porters and cook crew finish and where tips are given. Around 6 hours. Overnight at Mangalsen.",
      ),
    },
    {
      title: "Drive from Mangalsen (1,400 m) to Dhangadhi (109 m)",
      elevation: "109 m",
      accommodation: "Dhangadhi",
      placeDescription: "A city on the far-western Terai and the air gateway to Achham and the far west.",
      ...DHANGADHI,
      html: p(
        "The long drive south, retracing the road out of the hills to the plains.",
        "Eight to ten hours again, dropping through terraced country and sal forest into the flat green of the Terai, with the temperature climbing the whole way. It is a long day, but the hill scenery on the upper half is genuinely good and the road is quiet.",
        "There is time on this drive to take in how much of Nepal looks like this — productive, populated middle-hill country a long way from any trekking route — and how little of it visitors ever see.",
        "<strong>Dhangadhi (109 m)</strong> in the evening. A hotel, a shower and a proper meal. Overnight at Dhangadhi.",
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
        "The ranges pass one after another — the far-western peaks first, then Dolpo, Dhaulagiri, Annapurna, Manaslu and Ganesh — which gives a useful sense of quite how far west you have been.",
        "Transfer to your hotel in <strong>Kathmandu (1,400 m)</strong>, with the rest of the day free.",
        "The evening usually goes on a long shower, a large meal and a walk through Thamel, which after a week in Achham feels extremely busy. Overnight in Kathmandu.",
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
        "Achham is one of the least visited districts in a country that is otherwise well travelled, and Ramaroshan is a place that almost nobody outside the far west has heard of. If that suited you, the Badimalika pilgrimage route and the Api Himal base camp trek are the two other far-western trips worth taking. Safe travels.",
      ),
    },
  ],
};
