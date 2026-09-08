import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/** Nepal's largest lake, in the Karnali highlands where almost nobody treks. */
export const raraLakeTrek: NewTrek = {
  region: "Remote Region",
  price: 1450,
  difficulty: "moderate",
  maxAltitude: 3450,
  center: [82.13, 29.45],
  zoom: 10.5,
  content: {
    slug: "rara-lake-trek",
    title: "Rara Lake Trek",
    overview:
      "<p>The <strong>Rara Lake Trek</strong> walks from <strong>Jumla</strong> through the Karnali highlands to <strong>Rara Lake (2,990 m)</strong>, the largest lake in Nepal and the centre of the country's smallest national park. Ten square kilometres of deep blue water sit in a bowl of blue pine and spruce forest at almost 3,000 m, with the Himalaya on the northern horizon and not a single lodge or settlement on the shore.</p><p>This is the far west, and it is a different country from the Annapurna and Everest regions — Khas-speaking hill villages of stacked wooden houses, no roads, no trekking industry, and a handful of foreign visitors a year against tens of thousands in the Khumbu. The trek is not high or technically hard; what makes it an undertaking is the remoteness, the two flights it takes to reach the trailhead, and the fact that you are walking through country that sees almost no outsiders.</p>",
    highlights: [
      ["Rara Lake (2,990 m)", "Nepal's largest lake, ten square kilometres of deep blue water ringed by pine and spruce forest."],
      ["Rara National Park", "The country's smallest national park, home to red panda, Himalayan black bear, musk deer and over two hundred bird species."],
      ["The Ghurchi Lagna (3,450 m)", "A forested pass with the Karnali ranges on one side and the Mugu valleys on the other."],
      ["Khas Villages of the Far West", "Stacked wooden houses, slate roofs and a hill culture almost untouched by trekking."],
      ["Almost No Other Trekkers", "A route that sees a few hundred foreign visitors a year, in a region with no roads and no lodges on the lake."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>September to November</strong> and <strong>April to June</strong> are the windows. Autumn gives the clearest air, the sharpest reflections on the lake and stable flying weather into Jumla and Talcha, which matters more here than the walking conditions do. Late spring is the other good season and brings rhododendron and wildflowers through the forest sections, with the lake ringed in colour in May.</p><p>The far west catches less <strong>monsoon</strong> than the rest of Nepal but June to August is still wet enough to make the trails slippery and the flights unreliable, and the views disappear. <strong>Winter</strong> from December to March brings heavy snow to the Ghurchi Lagna and temperatures well below freezing at the lake; the route is walkable by well-equipped groups but the flights become the limiting factor and we do not run scheduled departures then.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a moderate trek. The maximum altitude is <strong>3,450 m</strong> at the Ghurchi Lagna and you sleep no higher than 3,055 m, so altitude is a minor consideration rather than the defining one. Walking days are five to six hours with repeated climbs and descents between ridge and valley — this is hill country, and the profile sawtooths rather than climbing steadily.</p><p>What makes it demanding is remoteness rather than difficulty. There is no road access anywhere on the route, no reliable mobile signal for much of it, and evacuation means a helicopter or a long walk. You should be comfortable walking five or six hours a day for a week and self-sufficient enough to cope with basic accommodation. Six weeks of regular hill walking is adequate preparation.</p>",
      },
      {
        heading: "Getting There: Flights and Contingency",
        content:
          "<p>Reaching the trailhead takes <strong>two flights</strong>. The first runs from Kathmandu to <strong>Nepalgunj</strong> on the Indian border, an hour over the plains, where you overnight. The second is a small aircraft from Nepalgunj into <strong>Jumla (2,370 m)</strong> the following morning. You fly out from <strong>Talcha</strong>, the airstrip above the lake, back to Nepalgunj and on to Kathmandu.</p><p>Both mountain sectors are weather-dependent and both are flown by small aircraft that will not go in cloud. Delays of a day are common and delays of two are not rare, which is why we build a buffer night into the Kathmandu end and why we strongly recommend <strong>not booking an international flight for the day after this trek ends</strong>. If the Talcha flight fails repeatedly there is a long jeep road out via Mugu and Surkhet, which we will arrange at cost.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Bring waterproof trekking boots already broken in, three base layers, a fleece, a <strong>down jacket rated to -10°C</strong>, and a waterproof and windproof shell. Add trekking trousers, thermal leggings, a warm hat, sun hat, gloves and four pairs of wool socks. A sleeping bag rated to <strong>-10°C</strong> is right; lodge bedding in this region is thin and you will be glad of your own.</p><p>Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries, sunscreen and lip balm, sunglasses, a reusable bottle with purification tablets or a filter, and a properly stocked first aid kit — this is the one trek in our catalogue where the nearest pharmacy is genuinely days away. Bring a power bank and more battery than usual, since charging is solar and intermittent. Baggage on the Nepalgunj-Jumla sector is limited to around 15 kg.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>Accommodation is <strong>simple lodges and community homestays</strong>, and expectations should be set accordingly — this is the least developed trekking route we run. Expect a bed in a wooden house, thin bedding, an outside toilet and washing from a bucket. There are no lodges on the lake shore itself, which is protected; you stay at <strong>Murma</strong> or in the park guesthouse a short walk back from the water.</p><p>Three meals a day are included. Food is what the household has: <em>dal bhat</em>, potatoes, <em>dhido</em> made from millet or buckwheat, local beans and greens, and eggs when there are any. Meat is rare and best avoided. There is no bottled water for sale on the route, so all drinking water comes from streams and village taps and must be treated with tablets, a filter or a UV pen — bring enough treatment for eight days.</p>",
      },
    ],
    faqs: [
      { question: "How remote is this trek really?", answer: "Very. There is no road on the route, no reliable mobile coverage for much of it, no bottled water and no pharmacy. Rara National Park receives a few thousand visitors a year, most of them Nepali, and you may not meet another foreign trekker for the whole week. That isolation is the reason to come and the reason to take the preparation seriously." },
      { question: "Why does it take two flights to get there?", answer: "Jumla and Talcha are both short mountain airstrips that only small aircraft can use, and neither has a direct service from Kathmandu. You fly Kathmandu to Nepalgunj on the plains, overnight, then take a 35-minute mountain sector in the morning when the weather is most stable. The same applies in reverse coming out." },
      { question: "What happens if the flights are cancelled?", answer: "You wait, which is why the itinerary has a buffer night in Kathmandu and why we tell everyone not to book an onward international flight for the following day. Delays of one day are common in season. If Talcha is closed for several days there is a jeep road out through Mugu to Surkhet, roughly two days, which we arrange at additional cost." },
      { question: "Can we swim in Rara Lake?", answer: "Technically yes and people do, but the water sits at around 2,990 m and stays cold all year — comfortably under 15°C even in October. Boating on the lake is available through the park and is the better way to spend a couple of hours, and the reflections of the surrounding forest from the water are the classic Rara photograph." },
      { question: "What wildlife might we see?", answer: "Rara National Park protects red panda, Himalayan black bear, musk deer, leopard, ghoral and Himalayan tahr, though the mammals are shy and sightings are luck. The birdlife is far more reliable: over two hundred species, including several grebes and coots that winter on the lake, and raptors over the ridges." },
      { question: "Is this suitable as a first trek in Nepal?", answer: "Only if you are the sort of traveller who enjoys remoteness more than comfort. The walking is well within reach of a reasonably fit first-timer and the altitude is benign, but the accommodation is basic, the food is repetitive and things go wrong more often than on the main routes. Most people who love Rara have trekked in Nepal before." },
      { question: "Do we need a permit?", answer: "Yes — the Rara National Park entry permit and the standard trekking registration, both included in your package. Unlike Upper Mustang or Nar Phu this is not a restricted area, so there is no special permit fee and no minimum group size, though we run it with a licensed guide as a matter of safety rather than regulation." },
      { question: "How cold does it get at the lake?", answer: "Colder than the altitude suggests, because the bowl traps cold air and the far west is drier and clearer than the central Himalaya. Autumn nights at Rara are typically -2°C to -5°C and clear; by December they are well below -10°C. Days are pleasant and often warm in the sun." },
      { question: "Can this be combined with anything else?", answer: "It combines naturally with Upper Dolpo for groups with three or more weeks, since both start from the same Nepalgunj hub, and less naturally with anything in the central Himalaya because of the flying involved. A Bardia extension on the way back through Nepalgunj is easy and very worthwhile." },
      { question: "How much cash should I bring?", answer: "Enough for the whole trek, in small Nepalese notes, drawn in Kathmandu. There is no ATM after Nepalgunj and nothing on the trail accepts cards. Budget modestly — there is very little to buy — but carry a reserve for a flight delay, an extra hotel night or a contribution to a homestay beyond the package." },
    ],
    inclusions: {
      flights: [
        "Domestic flights from Kathmandu to Nepalgunj, Nepalgunj to Jumla, Talcha to Nepalgunj and Nepalgunj to Kathmandu.",
      ],
      transport: ["Private airport and hotel transfers in Kathmandu and Nepalgunj."],
      cityAccommodation: [
        "Two nights of accommodation in Kathmandu with breakfast.",
        "Two nights of accommodation in Nepalgunj with breakfast.",
      ],
      permits: "Rara National Park entry permit and required trekking registration.",
      extra: ["Community homestay and lodge accommodation along the route, arranged in advance."],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Nepalgunj.",
      unforeseen:
        "Any additional accommodation, transportation, or expenses caused by delays or cancellation of the Jumla and Talcha flights, or other circumstances beyond the itinerary.",
    },
    porterDays: 8,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "An 11-day trek from Jumla over the Ghurchi Lagna to Rara Lake, the largest lake in Nepal, in the roadless Karnali highlands of the far west.",
    inExDescription:
      "Airport transfers, all four domestic flights, Kathmandu and Nepalgunj hotel nights, lodge and homestay accommodation, all trekking meals, the national park permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Sep-Nov, Apr-Jun",
    meta: {
      title: "Rara Lake Trek – 11 Days to Nepal's Largest Lake",
      description:
        "An 11-day trek from Jumla to Rara Lake in the far-western Karnali highlands, through Rara National Park and Khas villages with almost no other trekkers.",
      keywords:
        "Rara Lake Trek, Rara Lake Nepal, Rara National Park trek, Jumla trek, Karnali trekking, far west Nepal trek, Mugu trek, largest lake in Nepal",
      tags: "Rara Lake Trek, Remote Region, Karnali, Rara National Park, Off the Beaten Path, Nepal Trekking",
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
        "Your guide joins you in the afternoon for the briefing. Rara needs more explaining than most treks: the two flights in and two out, what happens if the weather closes Jumla or Talcha, how basic the accommodation is, and why you need to bring eight days of water treatment rather than expecting to buy bottles.",
        "We check your kit. A warm sleeping bag, a full first aid kit and a large power bank are the three things people most often under-pack for this route, and all three can be sorted a few streets away.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot border city on the Terai plains, the aviation hub for the whole of far-western Nepal.",
      lng: 81.625,
      lat: 28.0654,
      html: p(
        "A short day, and a strange one — you leave the mountains to get to the mountains.",
        "The one-hour flight west to <strong>Nepalgunj (150 m)</strong> crosses the hills and drops onto the <strong>Terai</strong>, the flat belt of farmland along the Indian border that produces most of Nepal's rice. It is hot, humid and entirely unlike anywhere else on the trip.",
        "Nepalgunj is a working border city rather than a destination: rickshaws, mosques, a large bazaar and a great deal of traffic. If there is time in the afternoon your guide can take you to the Bageshwari temple or through the market, which is a genuine slice of Terai life.",
        "The practical reason for the night is that the Jumla flight leaves early and only flies in clear morning air. Overnight in a hotel in Nepalgunj.",
      ),
    },
    {
      title: "Fly to Jumla (2,370 m) and Trek to Chere Chaur (3,055 m)",
      elevation: "3,055 m",
      accommodation: "Chere Chaur",
      placeDescription: "An open meadow camp above Jumla, on the ridge at the start of the walk to Rara.",
      lng: 82.15,
      lat: 29.32,
      html: p(
        "An early transfer to the airport for the 35-minute mountain sector to <strong>Jumla (2,370 m)</strong>. The small aircraft climbs off the plains and threads north up the Karnali valleys, landing on a grass and gravel strip beside the Tila river.",
        "Jumla is the administrative centre of the Karnali and the largest town for a hundred kilometres, which in this region means a bazaar, a hospital and a few hundred houses.",
        "After tea and a permit check the walking starts. The trail climbs south-east out of town through apple orchards and terraced fields of the local red rice, then into blue pine forest on a steady ridge climb.",
        "Around 4 to 5 hours brings you to the meadows at <strong>Chere Chaur (3,055 m)</strong>, an open grazing shelf with the Karnali ranges opening up behind. Overnight in a simple lodge at Chere Chaur.",
      ),
    },
    {
      title: "Trek from Chere Chaur (3,055 m) to Bumra (2,850 m)",
      elevation: "2,850 m",
      accommodation: "Bumra",
      placeDescription: "A small Khas village of stacked wooden houses in the forest below the Ghurchi Lagna.",
      lng: 82.11,
      lat: 29.38,
      html: p(
        "A day of forest walking with the character of the far west settling in.",
        "The trail contours north through mixed blue pine, spruce and oak, crossing several streams and passing summer grazing huts. There are long stretches where you walk in deep forest with no view at all, then a clearing opens and the ridges run away in every direction.",
        "The villages here are <strong>Khas</strong> rather than Tibetan or Gurung — stacked two- and three-storey wooden houses with slate roofs and open verandas where maize and chillies dry, built in terraces up the hillside so that one family's roof is another's yard.",
        "You descend gradually to <strong>Bumra (2,850 m)</strong>, a small village in a clearing, around 5 to 6 hours. The reception is curious rather than practised: very few foreigners come through. Overnight in a homestay at Bumra.",
      ),
    },
    {
      title: "Cross the Ghurchi Lagna (3,450 m) and Trek to Chautha (2,770 m)",
      elevation: "3,450 m",
      accommodation: "Chautha",
      placeDescription: "A small settlement in the valley on the northern side of the Ghurchi Lagna pass.",
      lng: 82.1,
      lat: 29.42,
      html: p(
        "The high point of the trek and the watershed between the Jumla and Mugu districts.",
        "The morning climbs steadily through forest to the <strong>Ghurchi Lagna (3,450 m)</strong>, a broad pass marked with cairns and prayer flags and hung with strips of cloth left by pilgrims. It takes three to four hours at an easy pace.",
        "From the top the view runs south over the Karnali ranges you have walked through and north into the Mugu valleys and, on a clear day, to the snow peaks on the Tibetan border.",
        "The descent on the northern side is longer and steeper, dropping through pine forest and open pasture, with mani walls and the occasional trader's mule train on the trail.",
        "You reach <strong>Chautha (2,770 m)</strong> in the valley after around 6 to 7 hours in total. Overnight in a simple lodge at Chautha.",
      ),
    },
    {
      title: "Trek from Chautha (2,770 m) to Pina (2,380 m)",
      elevation: "2,380 m",
      accommodation: "Pina",
      placeDescription: "A farming village of wooden houses on the terraced slopes above the Sinja Khola.",
      lng: 82.18,
      lat: 29.46,
      html: p(
        "A descending day through the most cultivated country of the trek.",
        "The trail follows the valley north-west, dropping steadily through pine forest that gives way to terraced fields of millet, barley and buckwheat as the altitude falls. Water mills turn on the side streams and the villages are larger and closer together here.",
        "This is the old <strong>Sinja</strong> country, seat of the Khasa Malla kingdom that ruled the western Himalaya in the twelfth and thirteenth centuries and where the Nepali language has its roots. The dialect spoken in these villages is recognisably the ancestor of modern Nepali.",
        "The walking is easy — around 5 hours, mostly downhill and on good village trails — and there is time in the afternoon to sit in <strong>Pina (2,380 m)</strong> and watch a farming village get on with its day.",
        "Overnight in a homestay at Pina.",
      ),
    },
    {
      title: "Trek from Pina (2,380 m) to Rara Lake (2,990 m)",
      elevation: "2,990 m",
      accommodation: "Rara Lake",
      placeDescription: "The largest lake in Nepal, ten square kilometres of blue water in a bowl of pine and spruce forest.",
      lng: 82.0889,
      lat: 29.5228,
      html: p(
        "The day you arrive at the lake, and the trek's payoff.",
        "The trail climbs steadily north out of Pina through forest, gaining 600 m over three to four hours, crossing a low ridge and entering <strong>Rara National Park</strong> — at 106 square kilometres the smallest national park in Nepal and the only one built around a lake.",
        "The forest changes as you climb into blue pine, black juniper, spruce and West Himalayan fir, and there is a real chance of birdlife: Himalayan monal, snow cock and, if you are extremely lucky, a red panda.",
        "Then the trees open and <strong>Rara Lake (2,990 m)</strong> is below you — ten square kilometres of deep blue water, five kilometres long, with forested slopes running down to the shore on every side and the snow line on the northern horizon.",
        "Around 5 to 6 hours. Overnight at the park guesthouse or a lodge at Murma, a short walk back from the water.",
      ),
    },
    {
      title: "Exploration Day at Rara Lake (2,990 m)",
      elevation: "2,990 m",
      accommodation: "Rara Lake",
      placeDescription: "The largest lake in Nepal, ten square kilometres of blue water in a bowl of pine and spruce forest.",
      lng: 82.0889,
      lat: 29.5228,
      html: p(
        "A full day at the lake, and the reason the trek is eleven days rather than ten.",
        "The classic outing is the <strong>circuit of the lake</strong>, around four hours on a good trail through pine forest and lakeside meadow, with the water changing colour through the day from steel grey at dawn to deep blue at noon.",
        "For the wider view, the climb to <strong>Murma Top (3,650 m)</strong> on the ridge south of the lake takes two to three hours and gives the whole basin from above, with the Himalaya running along the northern skyline.",
        "Boating on the lake can be arranged through the park office and is the best way to see the reflections that make the classic Rara photographs.",
        "Dawn and dusk are the times to be by the water — still, silent and, in October, with frost on the meadow. Overnight at Rara Lake.",
      ),
    },
    {
      title: "Trek from Rara Lake (2,990 m) to Talcha (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Talcha",
      placeDescription: "A ridge-top airstrip settlement above Rara Lake, the flying gateway to the Mugu district.",
      lng: 82.1861,
      lat: 29.5033,
      html: p(
        "A short and easy last walking day out to the airstrip.",
        "The trail follows the northern shore of the lake for the first hour — a last chance at the water in the morning light — then climbs gently away east through forest and open pasture.",
        "There are good views back over the whole lake basin from the shoulder above <strong>Gamgadhi</strong>, the district headquarters of Mugu, before the final short climb onto the ridge.",
        "Around 3 to 4 hours brings you to <strong>Talcha (2,700 m)</strong>, which is little more than an airstrip, a few teahouses and a great deal of weather.",
        "You arrive around lunchtime, which leaves the afternoon free. Your guide confirms the morning flight and, if the forecast looks poor, discusses the alternatives now rather than at dawn. Overnight in a lodge at Talcha.",
      ),
    },
    {
      title: "Fly from Talcha (2,700 m) to Nepalgunj (150 m) and on to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start for the flight out, which goes when the air is clear and does not go at all when it is not.",
        "The 35-minute sector to <strong>Nepalgunj</strong> drops out of the Karnali hills onto the plains, with a good last look north at the country you have walked through.",
        "After a wait at Nepalgunj you connect onto the hour-long flight east to <strong>Kathmandu (1,400 m)</strong>, arriving in the afternoon.",
        "Transfer to your hotel in Thamel, where a hot shower after eight days of bucket washing is the immediate priority. The evening is free and most groups meet for a farewell dinner.",
        "If Talcha is closed by weather, this is the day the buffer absorbs — which is why we ask you not to book an international flight for tomorrow. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "A slow morning in Kathmandu. If your flight is late in the day there is time for last shopping in Thamel, a walk around Durbar Square or Boudhanath, or a long breakfast.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
        "If you are staying on in Nepal we are happy to arrange onward travel, a Bardia extension on the way back through Nepalgunj, a Pokhara flight or extra hotel nights — just let us know while you are still on the trail so we can book it.",
        "Thank you for trekking with us. Very few people make it to Rara, and we hope the far west earns the two flights it takes to get there.",
      ),
    },
  ],
};
