import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const BHADRAPUR = { lng: 88.08, lat: 26.5711 };

/**
 * The community red panda corridor in Ilam and Panchthar, up to the Singalila ridge.
 *
 * Waypoints marked "approximate" are community camps and small settlements with
 * no OpenStreetMap node; they sit on the route line between verified points.
 */
export const redPandaTrailTrek: NewTrek = {
  price: 1450,
  difficulty: "moderate",
  maxAltitude: 3636,
  center: [87.98, 27.02],
  zoom: 10,
  content: {
    slug: "red-panda-trail-trek",
    title: "Red Panda Trail Trek",
    overview:
      "<p>The <strong>Red Panda Trail</strong> follows a community conservation corridor through the forests of <strong>Ilam</strong> and <strong>Panchthar</strong> in far-eastern Nepal, the country's most reliable habitat for the <strong>red panda</strong>. The route was developed with the villages that manage the forest, and it is walked with local guides trained as forest monitors — the people who count the animals and patrol the corridor.</p><p>The walking climbs from tea gardens and cardamom terraces through dense oak, magnolia and rhododendron forest to the <strong>Singalila ridge</strong> at around 3,600 m, where the view on a clear morning takes in <strong>Kanchenjunga (8,586 m)</strong>, Everest and the Sikkim peaks in a single sweep. It is a moderate trek, a genuine conservation project, and a corner of Nepal that trekkers almost entirely overlook in favour of the mountains further west.</p>",
    highlights: [
      ["Red Panda Habitat", "Walk a community-managed conservation corridor in Nepal's most reliable red panda forest, with trained local monitors."],
      ["The Singalila Ridge (3,636 m)", "Reach the ridge on the Nepal–India border for a sunrise view of Kanchenjunga, Everest and the Sikkim peaks."],
      ["Ilam's Tea Gardens", "Start among the tea estates and cardamom terraces that make this the greenest district in Nepal."],
      ["Community Homestays", "Stay in Limbu, Rai and Sherpa households in villages that manage the forest the trail runs through."],
      ["Eastern Nepal Off the Trekking Map", "Trek a region with no lodges and no trekking traffic, a long way from the Annapurna and Everest trails."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to December</strong> are the seasons. Spring is the best for the forest: rhododendron and magnolia flower through April, the birdlife is at its most active, and red panda sightings are more frequent as animals move through the corridor. Autumn and early winter give the clearest ridge views of Kanchenjunga and Everest.</p><p>Eastern Nepal catches the monsoon earlier and harder than the rest of the country, so June to September brings heavy rain, leeches throughout the forest and cloud on the ridge for weeks. January and February are cold at the top of the route with occasional snow, but perfectly walkable for a well-equipped group.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek. The maximum altitude is around 3,636 m on the ridge and there is no acclimatisation difficulty on this profile, but the days involve steady climbing on forest trails that are steep, root-tangled and often wet. Five to six hours of walking a day is typical.</p><p>You should be comfortable on uneven ground and prepared for damp conditions — the forest here holds moisture in any season and leeches are a fact of life outside winter. Four to six weeks of hill walking is adequate preparation. There is no trekking infrastructure, so the group stays in community homestays and camps, with simple facilities throughout.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,000 m</strong> is required, above the 3,636 m ridge. Most policies with a trekking extension clear that, but check that trekking is included at all rather than assuming your standard travel cover applies.</p><p>The policy should include <strong>emergency evacuation and medical treatment</strong>. There are health posts in the larger villages and a hospital at Ilam, and roads reach further into this district than into most trekking regions, so a road evacuation is often possible. From the ridge itself it would be a helicopter, dispatched only against a guarantee of payment. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>The defining condition here is damp. Bring <strong>properly waterproof</strong> trekking boots, gaiters, a waterproof shell jacket and trousers that you trust, and a pack cover. Add three base layers, a fleece, an insulated jacket for the ridge, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A sleeping bag rated to <strong>-10°C</strong> covers the higher camps.</p><p>Also pack a 30-litre daypack, trekking poles, <strong>leech socks</strong> and repellent — not optional outside winter — a headlamp with spare batteries, sunscreen, sunglasses, a reusable bottle with purification, a personal first aid kit, wet wipes, a quick-dry towel and a power bank. Binoculars are genuinely worth the weight on this trek.</p>",
      },
      {
        heading: "Homestays, Food & Drinking Water",
        content:
          "<p>You stay in <strong>community homestays</strong> in the villages — Limbu, Rai and Sherpa households with a room, clean bedding and a family kitchen — and in <strong>tents</strong> at the higher camps where there is no settlement. The homestay network was set up alongside the conservation programme, so the money from your stay goes directly to the households managing the forest.</p><p>Meals are what the household eats: <em>dal bhat</em>, seasonal greens, <em>gundruk</em>, local cheese, and a great deal of Ilam tea, which is the best in Nepal and grown within sight of the trail. At the camps the cook crew provides the same. Water comes from spring taps and streams, boiled or treated — refill rather than buying bottles, which cannot be disposed of in the forest.</p>",
      },
    ],
    faqs: [
      { question: "Will we actually see a red panda?", answer: "Possibly, but nobody can promise it. Red panda are solitary, mostly crepuscular and superbly camouflaged. Sightings on this route are more common than anywhere else in Nepal because you are walking with trained monitors who know the current territories, but plan the trip for the forest and the ridge and treat a sighting as the bonus it is." },
      { question: "Who runs the conservation programme?", answer: "The community forest user groups of the corridor villages, working with the Red Panda Network and local government. The trail, the homestays and the forest monitor training are all part of the same programme, and your trek fees contribute directly to it." },
      { question: "Do I need a special permit?", answer: "No restricted area permit is required. The standard trekking registration and local community and conservation fees are included in your package, and a licensed guide is required alongside the local forest monitor who walks with the group." },
      { question: "How bad are the leeches?", answer: "Bad, from March to October. The forest is wet and leeches are everywhere on the trail and in the undergrowth. Leech socks, repellent on boots and gaiters, and a routine check at every break keep them manageable. They are harmless but persistent. In December to February there are none." },
      { question: "What is the view from the ridge?", answer: "On a clear morning, one of the widest in Nepal: Kanchenjunga at 8,586 m directly north-east, the Sikkim and Darjeeling hills east, and on exceptional days Makalu, Lhotse and Everest to the west. Sunrise is the time to be up there, and the ridge is the reason the itinerary sleeps high." },
      { question: "Is the ridge on the Indian border?", answer: "Yes. The Singalila ridge forms the border with the Indian state of West Bengal, and the trail on the Indian side is the well-known Sandakphu route. This trek stays on the Nepali side; crossing into India requires separate Indian permits and is not part of the itinerary." },
      { question: "What other wildlife is there?", answer: "The corridor holds Himalayan black bear, clouded leopard, musk deer, yellow-throated marten and several primate species, though most are rarely seen. The birdlife is exceptional — over 300 species have been recorded in the district, including satyr tragopan and several hornbills lower down." },
      { question: "How do we get to Ilam?", answer: "A flight from Kathmandu to Bhadrapur in the far-eastern Terai, then a three to four hour drive north into the hills through the tea estates. Both legs are straightforward, and Bhadrapur is a reliable airport by Nepali standards." },
      { question: "Is this a good trek for families or first-timers?", answer: "It is one of the better options. The altitude is modest, the days are manageable, the homestays are comfortable and the wildlife and conservation angle gives the walking a focus beyond scenery. The wet forest trails and leeches are the main things to be ready for." },
      { question: "Can we visit the tea estates?", answer: "Yes, and it is worth building in. Ilam's tea gardens are the best in Nepal and several estates near the town will show visitors the plucking and processing. Tell us at the booking stage and we will arrange it around the drive in or out." },
    ],
    inclusions: {
      flights: ["Kathmandu to Bhadrapur return domestic flights as per the itinerary, including airport transfers."],
      transport: ["Private jeep transportation between Bhadrapur, Ilam, and the trailheads as per the itinerary."],
      cityAccommodation: [
        "Accommodation in Kathmandu with breakfast.",
        "Accommodation in Ilam with breakfast.",
      ],
      permits: "Community forest and conservation area fees and required trekking permits.",
      extra: [
        "Community homestay accommodation and a trained local forest monitor with the group.",
        "Tents, mess tent, and camping equipment for the ridge camps.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu and Ilam." },
    porterDays: 8,
    fixedDepartureDay: "tuesday",
    itineraryDescription:
      "A 12-day trek through the community red panda corridor of Ilam and Panchthar to the Singalila ridge at 3,636 m, with Kanchenjunga on the skyline.",
    inExDescription:
      "Domestic flights, airport transfers, jeep transport, Kathmandu and Ilam hotel nights, community homestays and ridge camping, all trekking meals, community and conservation fees, a licensed guide and a local forest monitor, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Oct-Dec",
    meta: {
      title: "Red Panda Trail Trek – 12 Days in Ilam and Panchthar",
      description:
        "A 12-day community conservation trek through Nepal's red panda corridor in Ilam and Panchthar, climbing to the Singalila ridge with Kanchenjunga in view.",
      keywords:
        "Red Panda Trail Trek, red panda Nepal, Ilam trekking, Panchthar trek, Singalila ridge, community homestay Nepal, eastern Nepal trekking, wildlife trek",
      tags: "Red Panda Trail Trek, Eastern Nepal, Remote Region, Wildlife Trek, Homestay Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the twelve-day plan, the flight east to Bhadrapur, the community homestay network, and how the forest monitoring works — you walk with a trained local monitor as well as a guide, and they set the pace in the corridor.",
        "We check your kit, with particular attention to waterproofs and leech protection, which matter more on this trek than altitude gear. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Bhadrapur (91 m) and Drive to Ilam (1,200 m)",
      elevation: "1,200 m",
      accommodation: "Ilam",
      placeDescription: "A hill town in far-eastern Nepal surrounded by the country's best tea estates.",
      lng: 87.9282,
      lat: 26.9104,
      html: p(
        "A 45-minute flight east to <strong>Bhadrapur (91 m)</strong> in the far-eastern Terai, with the eastern Himalaya — Kanchenjunga most obviously — out of the left-hand windows on a clear morning.",
        "From the airport a jeep drives north into the hills, climbing through the tea country. The change is quick and total: flat, hot plain to steep green hillsides covered in tea bushes within an hour.",
        "<strong>Ilam (1,200 m)</strong> is a hill town in the middle of the estates, and the tea grown around it is the best in Nepal — the same terroir as Darjeeling, immediately across the border.",
        "Around 3–4 hours driving. The afternoon is free to walk in the gardens above town. Overnight at Ilam.",
      ),
    },
    {
      title: "Drive to Maimajhuwa (2,100 m) and Trek to Hangetham (2,400 m)",
      elevation: "2,400 m",
      accommodation: "Hangetham",
      placeDescription: "A community forest settlement in the red panda corridor above Ilam.",
      // Approximate: community settlement with no OpenStreetMap node; placed on
      // the corridor route north-east of Ilam.
      lng: 87.9634,
      lat: 26.9825,
      html: p(
        "Into the corridor, and the first walking of the trek.",
        "A jeep climbs north-east from Ilam through cardamom terraces and villages to the roadhead at <strong>Maimajhuwa (2,100 m)</strong>, where the local forest monitor joins the group and the porters load.",
        "The trail enters the community forest almost immediately — oak, magnolia and rhododendron, thick with moss and epiphytes, with bamboo in the understorey. This bamboo is the reason for everything else: it is the red panda's main food and the corridor exists to protect it.",
        "Your monitor will point out feeding signs, scat and claw marks on the trunks. Move quietly and keep looking up.",
        "<strong>Hangetham (2,400 m)</strong> is a small settlement in the forest with community homestays. Around 4 hours of walking. Overnight in a homestay at Hangetham.",
      ),
    },
    {
      title: "Trek from Hangetham (2,400 m) to Gorja (2,700 m)",
      elevation: "2,700 m",
      accommodation: "Gorja",
      placeDescription: "A ridge settlement in the community forest corridor of Panchthar.",
      // Approximate: community settlement with no OpenStreetMap node.
      lng: 87.9808,
      lat: 27.0221,
      html: p(
        "A day spent almost entirely under trees, working north along the corridor.",
        "The trail climbs and contours through the heart of the red panda habitat. The forest here is dense and old, with rhododendron reaching tree height and the canopy closed overhead for hours at a time.",
        "This is the best day of the trek for wildlife. Dawn and late afternoon are when red panda move, so the group starts early and walks slowly, and the monitor works the known territories along the route. Even without a sighting the birdlife is extraordinary — satyr tragopan, laughingthrushes, and several species of yuhina and warbler.",
        "<strong>Gorja (2,700 m)</strong> is a small ridge settlement with homestays and, on a clear evening, the first proper view north.",
        "Around 5 hours. Overnight in a homestay at Gorja.",
      ),
    },
    {
      title: "Trek from Gorja (2,700 m) to Chintapu (3,100 m)",
      elevation: "3,100 m",
      accommodation: "Chintapu",
      placeDescription: "A high pasture and camp below the Singalila ridge on the Nepal–India border.",
      // Approximate: pasture camp with no OpenStreetMap node.
      lng: 88.0021,
      lat: 27.0644,
      html: p(
        "Up through the last of the forest and onto the high ground.",
        "The trail climbs steadily north, the trees thinning from tall rhododendron to stunted scrub as the altitude rises. Above around 3,000 m the country opens into grazing ground used through the summer.",
        "The views arrive with the open ground, and they are worth the climb: <strong>Kanchenjunga (8,586 m)</strong> to the north-east, huge and close, with the Sikkim peaks beside it and the Darjeeling hills east across the border.",
        "<strong>Chintapu (3,100 m)</strong> is a pasture below the main ridge, with room for the tents and water nearby. This is the first camping night of the trek and it is a cold one after the forest.",
        "Around 5 hours. Overnight camping at Chintapu.",
      ),
    },
    {
      title: "Trek from Chintapu (3,100 m) to the Singalila Ridge (3,636 m)",
      elevation: "3,636 m",
      accommodation: "Singalila Ridge Camp",
      placeDescription: "The high camp on the Singalila ridge, the border crest between Nepal and India.",
      lng: 88.0015,
      lat: 27.1048,
      html: p(
        "A short day onto the crest, and the highest point of the trek.",
        "The trail climbs north along the ridgeline through juniper and dwarf rhododendron, with the ground falling away steeply into Nepal on one side and India on the other. It is only three to four hours, which leaves the afternoon on the ridge.",
        "The <strong>Singalila ridge (3,636 m)</strong> is the border crest, and the panorama from it is one of the widest available anywhere in the eastern Himalaya. On a clear afternoon: <strong>Kanchenjunga</strong> and its satellites filling the northern skyline, the Sikkim and Bhutan ranges east, and, in exceptional conditions, <strong>Makalu</strong>, <strong>Lhotse</strong> and <strong>Everest</strong> far to the west.",
        "The camp is on the ridge for one reason — sunrise. Overnight camping on the Singalila ridge.",
      ),
    },
    {
      title: "Sunrise on the Ridge and Exploration Day (3,636 m)",
      elevation: "3,636 m",
      accommodation: "Singalila Ridge Camp",
      placeDescription: "The high camp on the Singalila ridge, the border crest between Nepal and India.",
      lng: 88.0015,
      lat: 27.1048,
      html: p(
        "The morning the trek is built around.",
        "You are up before first light for <strong>sunrise over Kanchenjunga</strong>. The light hits the summit ridge first and then works down and west across the range, and from this ridge the mountain is close enough to see the individual faces and glaciers rather than a distant silhouette.",
        "After breakfast the day is for walking the ridgeline — north or south along the crest, on open ground with the view in both directions and border pillars marking the line. Four or five hours at an easy pace, with nothing to climb and everything to look at.",
        "The ridge is also good ground for high-altitude birds: blood pheasant, snow pigeon and lammergeier working the updrafts along the crest.",
        "It is a cold camp and an early night. Overnight camping on the Singalila ridge.",
      ),
    },
    {
      title: "Trek from the Singalila Ridge (3,636 m) to Chyangthapu (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Chyangthapu",
      placeDescription: "A Sherpa and Limbu village on the western side of the corridor in Panchthar.",
      // Approximate: village not tagged in OpenStreetMap; placed on the western
      // descent from the ridge in Panchthar.
      lng: 87.9265,
      lat: 27.1011,
      html: p(
        "Off the ridge and down the western side into Panchthar.",
        "The descent drops steeply off the crest and back into the forest belt, losing more than 1,500 m through rhododendron, oak and finally cardamom terraces. It is a long knee-testing day and poles are worth having out from the top.",
        "Taking a different line down means a different set of villages, and the western side of the corridor is where much of the community forestry work has been concentrated.",
        "<strong>Chyangthapu (2,100 m)</strong> is a mixed Sherpa and Limbu village with homestays, a gompa and a view back at the ridge you slept on.",
        "Around 6 hours. Overnight in a homestay at Chyangthapu.",
      ),
    },
    {
      title: "Trek to the Roadhead and Drive to Ilam (1,200 m)",
      elevation: "1,200 m",
      accommodation: "Ilam",
      placeDescription: "A hill town in far-eastern Nepal surrounded by the country's best tea estates.",
      lng: 87.9282,
      lat: 26.9104,
      html: p(
        "The last walking of the trek, down through the cardamom terraces to the road.",
        "A morning's walk of three to four hours descends through farmland — cardamom, millet and tea on every terrace — with villages every half hour and children walking to school on the same path.",
        "This is where the porters and the forest monitor finish and where tips are given. The monitor in particular is worth thanking properly: the corridor exists because local people chose to protect it, and the monitors are the ones doing the work.",
        "The jeep runs back to <strong>Ilam (1,200 m)</strong> in two to three hours through the tea estates.",
        "A hotel, a hot shower, and Ilam tea drunk where it is grown. Overnight at Ilam.",
      ),
    },
    {
      title: "Drive from Ilam (1,200 m) to Bhadrapur (91 m)",
      elevation: "91 m",
      accommodation: "Bhadrapur",
      placeDescription: "A town on the far-eastern Terai with the airport serving the Ilam and Kanchenjunga region.",
      ...BHADRAPUR,
      html: p(
        "A half day down out of the hills to the plains, with time in the morning for the tea gardens.",
        "If you want to see how the tea is made, this is the morning for it — several estates near Ilam show visitors the plucking, withering and rolling, and the difference between the grades is much clearer once you have watched it.",
        "The drive south descends through the estates and into the Terai, and the temperature climbs the whole way.",
        "<strong>Bhadrapur (91 m)</strong> is a flat, green, hot town near the Indian border with the airport that serves the whole eastern hill region.",
        "Around 3–4 hours. Overnight at Bhadrapur.",
      ),
    },
    {
      title: "Fly from Bhadrapur (91 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A 45-minute flight west back to the capital, along the line of the Himalaya.",
        "On a clear morning the whole eastern range is out of the right-hand windows — <strong>Kanchenjunga</strong> first, then Makalu, Lhotse and Everest — which is a good way to place the ridge you were standing on two days ago.",
        "You arrive in <strong>Kathmandu (1,400 m)</strong> around midday and transfer to your hotel, with the rest of the day free.",
        "Thamel is the place for shopping, and Ilam tea bought at source is the one thing worth carrying home from this trek. Overnight in Kathmandu.",
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
        "Eastern Nepal is the part of the country trekkers skip, and the red panda corridor is a working conservation project rather than a trekking route that happens to pass through forest. If it suited you, the Kanchenjunga base camp treks start from the same corner of the country and take you right up to the mountain you watched from the ridge. Safe travels.",
      ),
    },
  ],
};
