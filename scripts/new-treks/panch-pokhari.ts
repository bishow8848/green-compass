import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/**
 * Melamchi valley to the five sacred lakes and back, camping above the villages.
 *
 * Waypoints marked "approximate" are herders' grounds and pilgrim shelters with
 * no OpenStreetMap node; they sit on the route line and should be confirmed
 * against the crew's own camps before the map file is uploaded.
 */
export const panchPokhariTrek: NewTrek = {
  price: 850,
  difficulty: "moderate",
  maxAltitude: 4620,
  center: [85.78, 28.03],
  zoom: 10.5,
  content: {
    slug: "panch-pokhari-trek",
    title: "Panch Pokhari Trek",
    overview:
      "<p>The <strong>Panch Pokhari Trek</strong> climbs from the Melamchi valley to five glacial lakes at 4,100 m in the shadow of the <strong>Jugal Himal</strong>, on a route that almost no foreign trekkers walk and thousands of Nepali pilgrims do. The five lakes — <em>panch pokhari</em> — are sacred to Hindus as a dwelling place of Shiva, and for one week each August the basin fills with people walking up from the valleys for the <strong>Janai Purnima</strong> festival.</p><p>For the rest of the year it is empty. The trek passes through Tamang and Sherpa villages, climbs a long forested ridge of rhododendron and oak, and comes out on open grazing ground with the Jugal Himal, <strong>Dorje Lakpa (6,966 m)</strong> and the Rolwaling peaks laid out along the skyline. At eleven days from Kathmandu with no flights and no restricted-area paperwork, it is the most accessible genuinely remote trek within reach of the capital.</p>",
    highlights: [
      ["Five Sacred Lakes at 4,100 m", "Camp beside a Hindu pilgrimage site that sees thousands of visitors for one week a year and nobody for the other fifty-one."],
      ["The Jugal Himal Skyline", "Walk with Dorje Lakpa, Madiya and Phurbi Chyachu on the horizon, one of the least photographed ranges in Nepal."],
      ["Namaskar Pass (4,620 m)", "Climb to the ridge above the lakes for a panorama that reaches from Langtang to the Rolwaling peaks."],
      ["Rhododendron Ridge Forest", "Spend two days climbing through mossy oak and rhododendron forest full of birdlife."],
      ["No Flights, No Permits, No Crowds", "Reach genuinely quiet high country on a jeep drive from Kathmandu, with no domestic flight and no restricted area paperwork."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the best months. Spring brings the rhododendron forest on the ridge into full flower, which is the highlight of the lower half of the trek, along with warm days on the ridge. Autumn gives the clearest air and the sharpest views of the Jugal Himal from the lakes and from Namaskar Pass.</p><p>Winter brings snow to the lake basin and the camps become cold enough that most groups stop running from December to February, though the route stays technically open for well-equipped parties. The monsoon makes the forest section leech-ridden and the ridge trail slippery, and cloud sits on the basin for weeks. <strong>August</strong> is the exception: the Janai Purnima pilgrimage is an extraordinary thing to witness, if you accept the weather and the crowds that come with it.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek with a lot of climbing in it: around 2,300 m of ascent from Tempathang to the lakes, spread over three days on a good ridge trail. The maximum sleeping altitude is 4,100 m and the highest point is 4,620 m at Namaskar Pass, so altitude is a factor but a manageable one on this profile.</p><p>You should be able to walk five to seven hours a day for a week with sustained uphill sections. Six weeks of hill walking is adequate preparation. The thing to be ready for is the absence of infrastructure: above Tempathang there are no lodges, so the group camps with a cook crew, and outside the pilgrimage week there is nobody on the trail at all.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required, above the 4,620 m high point at Namaskar Pass. Many standard policies stop at 3,000 m or 4,000 m, which would leave the lake basin and the pass uninsured, so check the altitude clause rather than assuming your usual travel cover is enough.</p><p>The policy must include <strong>emergency helicopter evacuation</strong> and medical treatment. There is no road above Tempathang and no health post above the villages, and an evacuation from the lakes means a helicopter, dispatched by operators only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a camping trek, so your sleep system matters. Bring a <strong>sleeping bag rated to -15°C</strong> and an insulated mat, waterproof trekking boots, three base layers, a fleece, an insulated down jacket, a waterproof and windproof shell jacket and trousers, trekking trousers, a warm hat, a sun hat, gloves and wool socks.</p><p>Also pack a 30-40 litre daypack, trekking poles for the long ridge descent, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification, a personal first aid kit with blister care, wet wipes and hand sanitiser, a quick-dry towel and a power bank — there is no charging above Tempathang, which is about six days.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The nights at Tempathang and Deep Gaun are homestays with Tamang and Sherpa families — simple rooms, a shared kitchen fire, and a good deal of curiosity about where you have come from. Everything above the villages is <strong>tents</strong>: two-person tents pitched by the crew, with a mess tent and a toilet tent, at Kami Kharka, Nasempati and the lakes. Nights at 4,100 m fall to around -5°C in the main seasons.</p><p>A cook and kitchen crew travel with the group and prepare three hot meals a day from supplies carried up from the road. Expect rice, lentils, potatoes, pasta, eggs, seasonal vegetables and plenty of tea. There is nowhere to buy anything above Tempathang. Water comes from streams and springs, boiled or treated by the crew — carry two litres on the ridge, where sources are further apart than they look on the map.</p>",
      },
    ],
    faqs: [
      { question: "What is Janai Purnima and should I plan around it?", answer: "It is the August full-moon festival when Hindu men renew the sacred thread, and thousands of pilgrims walk to Panch Pokhari to bathe in the lakes. It is a remarkable thing to see, but it falls in the monsoon and the basin is crowded, so most trekkers come in spring or autumn instead. Tell us if you specifically want the festival." },
      { question: "Do I need any special permit?", answer: "No restricted area permit is required. You need the standard trekking registration and the local rural municipality entry fee, both included in your package, and a licensed guide. That simplicity is part of why the route is a good introduction to camping treks." },
      { question: "Why is it so quiet if it is this close to Kathmandu?", answer: "Because there are no lodges. The Nepali trekking industry follows teahouse infrastructure, and a route that requires a full camping crew never developed a foreign following even though it starts four hours from the capital. That is exactly what makes it worth walking." },
      { question: "How cold does it get at the lakes?", answer: "Night-time temperatures at 4,100 m fall to around -5°C in spring and autumn and lower in late November. There is no shelter beyond the pilgrim huts and your tent. A -15°C bag with an insulated mat, plus a down jacket for the evenings, keeps the nights comfortable." },
      { question: "Is the trail hard to follow?", answer: "The lower half is a well-used village trail and the upper half is a pilgrim route, so the line is generally clear. It is not signposted, however, and in mist on the ridge above Nasempati it would be easy to lose, which is one reason a guide is required rather than optional." },
      { question: "What wildlife might we see?", answer: "The ridge forest holds langur, Himalayan black bear, barking deer and a great deal of birdlife including monal and blood pheasant. Red panda live in this forest belt though sightings are rare. Above the treeline you are more likely to see herders' stock than wildlife." },
      { question: "Can this be combined with another trek?", answer: "Yes. Panch Pokhari is the southern end of the Tilman Pass route from Langtang, so strong groups sometimes link the two into a single sixteen-day traverse. It also pairs naturally with a few days in the Helambu valley to the west." },
      { question: "Is there mobile signal?", answer: "There is NTC coverage in the villages at the start and end and patchy signal on parts of the ridge, with nothing dependable at the lakes. Assume you are out of contact for the middle four days of the trek." },
      { question: "How much does the porter carry and what do I carry?", answer: "You carry a daypack of seven to ten kilograms. Porters carry your duffel, limited to 15 kg, along with the tents, food and kitchen. Because this is a camping trek the support team is larger than on a teahouse route, which is reflected in the price." },
      { question: "Where can I withdraw cash?", answer: "There are no ATMs after the Kathmandu valley. Draw all the Nepalese rupees you need before departure in small denominations, for tips and for anything you buy in the villages at either end of the walk." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Tempathang and back as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: "Local rural municipality entry fee and required trekking permits.",
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 8,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "An 11-day camping trek from the Melamchi valley to the five sacred lakes of Panch Pokhari (4,100 m), with a day at Namaskar Pass beneath the Jugal Himal.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailhead, Kathmandu hotel nights, full camping equipment with a cook crew, village homestays, all trekking meals, entry fees and permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Panch Pokhari Trek – 11 Days to the Five Sacred Lakes",
      description:
        "An 11-day camping trek from the Melamchi valley to Panch Pokhari (4,100 m), five sacred glacial lakes below the Jugal Himal, with almost no other trekkers.",
      keywords:
        "Panch Pokhari Trek, five lakes Nepal, Janai Purnima pilgrimage, Jugal Himal, Melamchi valley trek, camping trek near Kathmandu, remote trekking Nepal",
      tags: "Panch Pokhari Trek, Remote Region, Lake Trek, Camping Trek, Pilgrimage, Nepal Trekking",
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
        "Your guide joins you for the briefing. We go through the eleven-day plan, the camping routine — how the crew moves ahead, when meals happen, how the toilet tent works — and check your kit against the list. The important items on this trek are your sleeping bag and a warm jacket for the evenings at the lakes; anything missing can be bought or hired a few minutes from the hotel.",
        "The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Tempathang (1,800 m)",
      elevation: "1,800 m",
      accommodation: "Tempathang",
      placeDescription: "A Sherpa and Tamang village at the roadhead in the upper Melamchi valley.",
      lng: 85.7843,
      lat: 28.0197,
      html: p(
        "A half day in the jeep north-east out of the Kathmandu valley, on the Araniko Highway and then up the Melamchi valley.",
        "The road passes the <strong>Melamchi water project</strong> works, the tunnel scheme that finally brought a reliable water supply to Kathmandu after decades of construction, and then climbs a rough hill road through terraced farmland and scattered Tamang villages.",
        "<strong>Tempathang (1,800 m)</strong> is where the road gives out — a mixed Sherpa and Tamang village of stone and timber houses on the hillside, with the ridge you will climb tomorrow standing above it.",
        "Around 5 hours including stops. The evening is a homestay, and the crew organises loads for the morning. Overnight at Tempathang.",
      ),
    },
    {
      title: "Trek from Tempathang (1,800 m) to Kami Kharka (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Kami Kharka",
      placeDescription: "A grazing clearing in the rhododendron forest on the ridge above the Melamchi valley.",
      // Approximate: herders' grazing ground with no OpenStreetMap node.
      lng: 85.7861,
      lat: 28.0166,
      html: p(
        "The first walking day and a proper climb: 900 m up the ridge and into the forest.",
        "The trail leaves the village through terraced fields of millet and maize and then enters oak and rhododendron woodland, climbing steadily. It is a working path used by herders taking stock up to the summer pastures, so it is clear on the ground but rough underfoot.",
        "The forest is thick, mossy and full of birds — monal, blood pheasant and a great deal else — and in spring the rhododendron flowers overhead for hours at a time.",
        "<strong>Kami Kharka (2,700 m)</strong> is a grazing clearing with water and flat ground, and the first camp of the trek. Around 5–6 hours. Overnight camping at Kami Kharka.",
      ),
    },
    {
      title: "Trek from Kami Kharka (2,700 m) to Nasempati (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Nasempati",
      placeDescription: "A ridge of open pilgrim shelters below the Panch Pokhari basin.",
      // Approximate: pilgrim shelter site with no OpenStreetMap node.
      lng: 85.7692,
      lat: 28.0421,
      html: p(
        "A second long climb, out of the forest and onto the open ridge.",
        "The trail continues up through thinning rhododendron until the trees stop altogether at around 3,300 m, and then the whole route ahead becomes visible: a broad grassy ridge running north towards the lake basin, with the Jugal Himal appearing over the shoulder to the east.",
        "This is where the trek changes character. The forest closes everything in; the ridge opens it all out, and on a clear afternoon you can see from the Langtang peaks in the west to the Rolwaling in the east.",
        "<strong>Nasempati (3,650 m)</strong> is a line of open stone shelters built for the August pilgrimage, empty the rest of the year. There is water nearby and room for the tents.",
        "Around 5 hours. Overnight camping at Nasempati.",
      ),
    },
    {
      title: "Trek from Nasempati (3,650 m) to Panch Pokhari (4,100 m)",
      elevation: "4,100 m",
      accommodation: "Panch Pokhari",
      placeDescription: "Five sacred glacial lakes in a high basin below the Jugal Himal.",
      // Approximate: the lake basin has no OpenStreetMap node; the waypoint uses
      // the commonly published position for the lakes.
      lng: 85.7758,
      lat: 28.0644,
      html: p(
        "A short day to the lakes, gaining the last 450 m on open ground.",
        "The trail follows the ridge north with the ground turning from grass to rock and low alpine scrub. Cairns and small shrines mark the way, left by pilgrims, and the Jugal Himal fills the view to the north — <strong>Dorje Lakpa (6,966 m)</strong>, <strong>Phurbi Chyachu</strong> and <strong>Madiya</strong>.",
        "<strong>Panch Pokhari (4,100 m)</strong> appears over a final rise: five lakes in a shallow basin, the largest of them a few hundred metres across, with stone shelters and small shrines at the water's edge.",
        "The lakes are sacred to Hindus as a dwelling place of Shiva, and for one week each August thousands of pilgrims walk up here for <strong>Janai Purnima</strong>. Outside that week you will very likely be the only party in the basin.",
        "Around 3–4 hours, arriving by early afternoon. Overnight camping at Panch Pokhari.",
      ),
    },
    {
      title: "Exploration Day at Panch Pokhari – Namaskar Pass (4,620 m)",
      elevation: "4,100 m",
      accommodation: "Panch Pokhari",
      placeDescription: "Five sacred glacial lakes in a high basin below the Jugal Himal.",
      lng: 85.7758,
      lat: 28.0644,
      html: p(
        "A full day at the lakes with an optional climb to the ridge above them.",
        "The main walk goes east and up to <strong>Namaskar Pass (4,620 m)</strong>, the saddle on the ridge behind the basin. It is a steady three-hour climb on rock and grass, and the view from the top runs the length of the Himalaya visible from central Nepal — Langtang and Shishapangma to the west, the whole Jugal Himal directly north, and the Rolwaling peaks east towards Gaurishankar.",
        "Back at the lakes there is time in the afternoon to walk the circuit of all five, which takes an hour or two and passes the shrines and the pilgrim shelters. The water changes colour through the day as the light moves.",
        "This day also does the acclimatisation work, taking the group above 4,600 m and back down to sleep at 4,100 m. Overnight camping at Panch Pokhari.",
      ),
    },
    {
      title: "Trek from Panch Pokhari (4,100 m) to Nasempati (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Nasempati",
      placeDescription: "A ridge of open pilgrim shelters below the Panch Pokhari basin.",
      lng: 85.7692,
      lat: 28.0421,
      html: p(
        "An easy morning back down the ridge, with the mountains behind you rather than ahead.",
        "The route retraces the pilgrim trail south, dropping steadily on open ground. Walking the ridge in this direction gives the long view down the Melamchi valley and, on a clear morning, all the way to the Kathmandu valley rim.",
        "It is a short day by design — three to four hours — which leaves the afternoon free at <strong>Nasempati (3,650 m)</strong>. Herders are often camped nearby in season with buffalo and goats, and it is worth an hour of your guide's translation to sit with them.",
        "The night here is noticeably warmer than at the lakes. Overnight camping at Nasempati.",
      ),
    },
    {
      title: "Trek from Nasempati (3,650 m) to Deep Gaun (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Deep Gaun",
      placeDescription: "A Tamang village on the hillside above the Melamchi valley.",
      lng: 85.7827,
      lat: 28.0384,
      html: p(
        "A long descent off the ridge on a different line from the way up, dropping back into farmland.",
        "The trail leaves the pilgrim route and follows a village path south-west, losing height quickly through rhododendron and then oak forest. Poles are worth having for the steeper sections.",
        "The forest opens into terraced fields, and the villages start again — millet, maize and buckwheat on the terraces, water mills on the streams, and cattle on the paths.",
        "<strong>Deep Gaun (2,100 m)</strong> is a Tamang village on the hillside with a view back up at the ridge you have just come down. Tonight is a homestay, which after four nights in a tent is a welcome change.",
        "Around 6 hours. Overnight at Deep Gaun.",
      ),
    },
    {
      title: "Trek from Deep Gaun (2,100 m) to Panchpokhari Thangpal (1,900 m)",
      elevation: "1,900 m",
      accommodation: "Panchpokhari Thangpal",
      placeDescription: "The main village of the Panchpokhari Thangpal municipality in Sindhupalchok.",
      lng: 85.7171,
      lat: 28.0412,
      html: p(
        "A short, easy last walking day contouring west across the hillside.",
        "The trail runs through a string of Tamang and Sherpa villages, dropping to cross streams and climbing back onto the shoulder each time. This is ordinary rural Nepal at close quarters — schools, tea shops, buffalo, and the constant business of a farming community — and it is a good final day for it.",
        "Much of what you pass was rebuilt after the 2015 earthquake, which hit Sindhupalchok harder than any other district in the country. Your guide will explain what happened here, and local people generally talk about it readily.",
        "<strong>Panchpokhari Thangpal (1,900 m)</strong> is the main village of the municipality that takes its name from the lakes. This is where the crew finishes and tips are given. Around 4 hours. Overnight in a homestay.",
      ),
    },
    {
      title: "Drive from Panchpokhari Thangpal (1,900 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A half day back to the capital, starting on a rough hill road and improving as it goes.",
        "The jeep descends to the Melamchi valley floor and joins the road to Melamchi Bazaar, then follows the Indrawati river down to the Araniko Highway and west into the Kathmandu valley.",
        "Around 5 hours with a stop for lunch. You arrive in <strong>Kathmandu (1,400 m)</strong> in the afternoon and transfer to your hotel.",
        "The evening is free. Thamel is ten minutes' walk from most of the hotels we use, and it is the place for a proper dinner and any last shopping. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later in the day there is time for <strong>Boudhanath</strong>, <strong>Pashupatinath</strong> or the old town at <strong>Bhaktapur</strong>, all within easy reach with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Panch Pokhari is the quietest high country within a day of Kathmandu, and very few visitors ever see it. If you want more of the same, the Tilman Pass route continues north from the lakes over a glaciated 5,350 m col into Langtang, and the Helambu and Ama Yangri trails to the west are an easy few days. Safe travels.",
      ),
    },
  ],
};
