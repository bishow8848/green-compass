import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/** Gorkha foothills below the Manaslu restricted area, on village homestays. */
export const lowerManasluTrek: NewTrek = {
  price: 825,
  difficulty: "moderate",
  maxAltitude: 2700,
  center: [84.8, 28.15],
  zoom: 10.5,
  content: {
    slug: "lower-manaslu-trek",
    title: "Lower Manaslu Trek",
    overview:
      "<p>The <strong>Lower Manaslu Trek</strong> walks the Gorkha foothills below the restricted area, through the Gurung villages of <strong>Barpak</strong>, <strong>Laprak</strong> and <strong>Gumda</strong> on trails that carried salt and grain long before anyone came here to trek. It stays between 600 m and 2,700 m, needs no restricted area permit, and delivers the full northern skyline — <strong>Manaslu (8,163 m)</strong>, <strong>Himalchuli (7,893 m)</strong>, <strong>Ganesh Himal</strong> and <strong>Buddha Himal</strong> — from ridges instead of from a gorge.</p><p>This is also the country at the epicentre of the April 2015 earthquake. Barpak and Laprak lost almost every house and have been rebuilt by their own communities in stone and slate, and the villages talk about it openly. The trek is a homestay route rather than a lodge one: you sleep in family houses, eat what the household eats, and the money stays where you are walking. Ten days, no flights, no altitude problems, and almost no other trekkers.</p>",
    highlights: [
      ["Barpak and Laprak", "Stay in the Gurung villages at the epicentre of the 2015 earthquake, rebuilt in stone by their own communities."],
      ["The Manaslu Skyline from the Ridges", "See Manaslu, Himalchuli, Buddha Himal and Ganesh Himal from open ridgelines rather than a gorge."],
      ["Community Homestays", "Sleep in family houses in villages with no lodges, where trekking income goes directly to the households."],
      ["No Permits, No Flights, No Altitude", "A Himalayan trek that needs no restricted area paperwork and never goes above 2,700 m."],
      ["Gurung Hill Culture", "Walk through terraced farmland, water mills and village life at the pace it has always run."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>October to December</strong> and <strong>February to May</strong> are both excellent, and the low altitude widens the window considerably compared with the high routes. Autumn gives the clearest mountain views from the ridges. Late winter is mild at this height and beautifully quiet, and spring brings rhododendron on the upper slopes above Laprak.</p><p>The only season to avoid is the <strong>monsoon</strong> from June to September, when the trails are slippery, leeches are everywhere in the forest sections, and the mountain views the trek is built around disappear behind cloud for weeks. The approach roads also become unreliable with landslides.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a moderate trek and the gentlest route in our remote catalogue. The maximum altitude is 2,700 m on the viewpoint day, so acclimatisation is not a concern. What the trek does ask for is a tolerance of ordinary hill walking: five to six hours a day with repeated climbs and descents of several hundred metres between ridge and river.</p><p>If you can walk for a full day in hilly country and get up and do it again the next morning, you are fit enough. Four to six weeks of regular walking with some hill work is ample. Trekking poles help on the long descents, and boots with a decent sole matter more here than at altitude, because the trails are working village paths rather than engineered trekking routes.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 3,000 m</strong> is required. That is a low bar and most standard policies clear it, but check the wording — some exclude trekking altogether unless you add an activity pack, regardless of altitude.</p><p>The policy should include <strong>emergency evacuation and medical treatment</strong>. Road access is much better here than on the high routes and a road evacuation is usually possible within a few hours, but the villages have health posts rather than hospitals and the nearest proper facility is in Gorkha. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a low-altitude trek and the list is correspondingly short. Bring comfortable, broken-in trekking boots, two or three base layers, a fleece, a light insulated jacket, a waterproof shell, trekking trousers, a sun hat, a warm hat for the evenings and wool socks. A sleeping bag rated to <strong>0°C</strong> is enough — homestays provide bedding, but a liner and your own bag are more comfortable and more hygienic.</p><p>Also pack a 30-litre daypack, trekking poles, a headlamp, sunscreen and lip balm, sunglasses, a reusable bottle with purification tablets or a filter, a small first aid kit with blister care and rehydration salts, a quick-dry towel, and a power bank. Charging is available in most homestays but is not guaranteed.</p>",
      },
      {
        heading: "Homestays, Food & Drinking Water",
        content:
          "<p>There are no trekking lodges on this route. You stay in <strong>community homestays</strong> — a room in a family house, usually with two beds and clean bedding, and a shared washing area outside. Barpak and Laprak have organised homestay programmes with rotating hosts so that income is shared across the village; smaller settlements are simply a family with a spare room.</p><p>Meals are what the household is eating: <em>dal bhat</em> with seasonal vegetables, <em>dhido</em> made from millet or buckwheat, pickles, and eggs or chicken when there is an occasion. It is home cooking rather than a menu, and it is generally the best food on any trek we run. Water is boiled or comes from spring taps; treat it with tablets or a filter, and refill rather than buying bottles.</p>",
      },
    ],
    faqs: [
      { question: "Do I need a restricted area permit for this trek?", answer: "No. The route stays south of the Manaslu restricted area boundary at Jagat, so only the standard trekking registration and the conservation area entry fee are needed, both included. That also means there is no minimum group size and no fixed itinerary requirement." },
      { question: "What is the earthquake history of these villages?", answer: "Barpak was the epicentre of the 7.8 magnitude earthquake of 25 April 2015 and lost almost all of its houses; Laprak was similarly destroyed and part of the community was resettled on the ridge above. Both have been rebuilt, largely by their own labour, and people generally talk about it readily if you ask." },
      { question: "How comfortable are the homestays?", answer: "Simple and clean. Expect a bed with blankets in a family house, a shared outside toilet, and washing from a tap or a bucket of hot water. There are no showers as such and no heated dining rooms. What you get instead is a family kitchen and an evening with the household." },
      { question: "Will we see Manaslu?", answer: "Yes, repeatedly, and better than on some of the high routes. The ridges between Barpak, Laprak and Gumda face directly north, so Manaslu, Himalchuli, Buddha Himal and the Ganesh Himal are visible for much of the walking in clear weather rather than only from a pass." },
      { question: "Is this a good first trek in Nepal?", answer: "It is one of the best. There is no altitude risk, the days are moderate, the culture is the point rather than the scenery alone, and the walking is real hill trekking. The trade-off is that you do not get above the treeline, so if you want glaciers and 5,000 m passes this is not the trip." },
      { question: "Is there mobile signal and charging?", answer: "NTC and Ncell reach most of the villages on this route and there is mains or solar power in the homestays, so charging is generally possible for a small contribution. It is one of the few treks we run where you are contactable most days." },
      { question: "Can this be combined with the Manaslu Circuit?", answer: "Yes. The route ends at Machha Khola, which is where the Manaslu Circuit begins, so strong groups sometimes walk straight on north into the restricted area. That needs the restricted permits arranged in advance, so tell us at the booking stage." },
      { question: "How much walking is on roads?", answer: "Very little. Rough jeep tracks now reach Barpak and Machha Khola, so the drives use them, but the trekking route follows old village trails on the ridges rather than the road corridors. Where a track and a trail run in parallel, your guide takes the trail." },
      { question: "What is the best time for the mountain views?", answer: "October and November give the clearest air of the year, with the ridges above Laprak the best vantage points. December and January are also very clear if you can take the cold evenings, and the villages are at their quietest." },
      { question: "Where can I withdraw cash?", answer: "There are ATMs in Gorkha and Arughat but nothing dependable on the trail. Draw what you need in Kathmandu, in small denominations, for drinks, snacks and tips — and note that homestays are paid through your package rather than in cash." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Barpak and from Machha Khola back to Kathmandu as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: "Manaslu Conservation Area Permit and required trekking permits.",
      extra: ["Community homestay accommodation with the host families along the route."],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 7,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "A 10-day homestay trek through the Gorkha foothills below Manaslu, staying in the rebuilt Gurung villages of Barpak, Laprak and Gumda.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, community homestay accommodation, all trekking meals, the conservation area permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Oct-Dec, Feb-May",
    meta: {
      title: "Lower Manaslu Trek – 10 Days in the Gorkha Foothills",
      description:
        "A 10-day homestay trek through Barpak, Laprak and Gumda in the Manaslu foothills, with no permits, no flights and views of Manaslu and Himalchuli.",
      keywords:
        "Lower Manaslu Trek, Barpak trek, Laprak homestay, Gorkha trekking, community homestay Nepal, earthquake epicentre trek, easy trek Nepal",
      tags: "Lower Manaslu Trek, Manaslu, Remote Region, Homestay Trek, Cultural Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing. This is a straightforward trek to plan — no permits beyond the conservation fee, no altitude to manage, no flights to worry about — so the briefing focuses on the homestays: what to expect from a family house, how meals work, and a few words of Nepali that go a long way in the villages.",
        "We check your kit, though the list for this route is short. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Barpak (1,960 m)",
      elevation: "1,960 m",
      accommodation: "Barpak",
      placeDescription: "A large Gurung village in Gorkha, rebuilt in stone after the 2015 earthquake.",
      lng: 84.7466,
      lat: 28.2028,
      html: p(
        "A long drive west on the Prithvi Highway and then north into the Gorkha hills.",
        "The highway follows the Trishuli through gorge country before the turning at Abu Khaireni, and from there a hill road climbs steadily through terraced farmland with the Ganesh Himal appearing over the ridges.",
        "The last two hours switchback up a rough road to <strong>Barpak (1,960 m)</strong>, a large Gurung village spread across the hillside at the head of the Daraudi valley — historically one of the main recruiting villages for the Gurkha regiments, and a place with a great many families who have served abroad.",
        "Around 8 hours including stops. Your host family will have tea waiting. Overnight in a homestay at Barpak.",
      ),
    },
    {
      title: "Exploration Day in Barpak (1,960 m)",
      elevation: "1,960 m",
      accommodation: "Barpak",
      placeDescription: "A large Gurung village in Gorkha, rebuilt in stone after the 2015 earthquake.",
      lng: 84.7466,
      lat: 28.2028,
      html: p(
        "A day in the village, which is worth far more here than an extra walking day.",
        "Barpak was the <strong>epicentre of the 25 April 2015 earthquake</strong> and lost almost every one of its houses. What stands now was rebuilt largely by the community itself, in stone and slate, on the same stepped terraces. Walking the lanes with your guide and a local host is the best way to understand both what happened and what recovery actually looked like.",
        "The morning walk climbs to the ridge above the village for the northern skyline — <strong>Buddha Himal</strong>, <strong>Himalchuli</strong> and, on a clear day, <strong>Manaslu</strong> itself.",
        "The afternoon can go on the village: the school, the Gurkha memorial, the water mills, and a demonstration of millet grinding or local weaving if the household is willing. Overnight in a homestay at Barpak.",
      ),
    },
    {
      title: "Trek from Barpak (1,960 m) to Laprak (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Laprak",
      placeDescription: "A Gurung village on a steep hillside above the Machha Khola, resettled after the earthquake.",
      lng: 84.8014,
      lat: 28.2191,
      html: p(
        "The first walking day, over the ridge between two valleys.",
        "The trail climbs out of Barpak through terraced fields to a pass on the ridge at around <strong>2,500 m</strong>, marked with prayer flags. This is the best viewpoint of the trek's first half: <strong>Manaslu (8,163 m)</strong>, <strong>Himalchuli (7,893 m)</strong> and the Ganesh Himal all visible at once on a clear morning, with Barpak spread out below.",
        "The descent drops through pine and rhododendron to <strong>Laprak (2,100 m)</strong>, a Gurung village on a very steep hillside. Laprak was also destroyed in 2015, and part of the community was resettled on the ridge above at Gupsi Pakha — so the village now exists in two places, the old terraces below and the new houses above.",
        "Around 4–5 hours. Overnight in a homestay at Laprak.",
      ),
    },
    {
      title: "Day Hike to Gupsi Pakha (2,700 m) and Return to Laprak",
      elevation: "2,100 m",
      accommodation: "Laprak",
      placeDescription: "A Gurung village on a steep hillside above the Machha Khola, resettled after the earthquake.",
      lng: 84.8014,
      lat: 28.2191,
      html: p(
        "The highest point of the trek, and the best mountain view on it.",
        "The walk climbs the ridge above Laprak to the resettlement at <strong>Gupsi Pakha (2,700 m)</strong> and the pasture above it. It is a steady two to three hour ascent through rhododendron forest, and in spring the flowering here is superb.",
        "From the top the view runs the length of the northern skyline — <strong>Manaslu</strong>, <strong>Ngadi Chuli</strong>, <strong>Himalchuli</strong>, <strong>Buddha Himal</strong> and <strong>Ganesh Himal</strong> — with the Budhi Gandaki gorge cutting north between them. Sitting up here for an hour with tea is the point of the day.",
        "The resettlement itself is worth seeing: a planned village of identical houses built after 2015 on safe ground, and a case study in how communities decide to rebuild.",
        "Around 5 hours there and back. Overnight in a homestay at Laprak.",
      ),
    },
    {
      title: "Trek from Laprak (2,100 m) to Singla (2,300 m)",
      elevation: "2,300 m",
      accommodation: "Singla",
      placeDescription: "A small ridge settlement between Laprak and the Budhi Gandaki valley.",
      lng: 84.838,
      lat: 28.2241,
      html: p(
        "A ridge day east towards the Budhi Gandaki, with the mountains in view for most of it.",
        "The trail contours and climbs along the hillside through mixed forest and grazing ground, with occasional clearings that open the northern view. This is a working path used to move stock and goods between the villages, and you will share it with people rather than trekkers.",
        "The forest here holds langur, barking deer and a great deal of birdlife, and in spring the rhododendron continues.",
        "<strong>Singla (2,300 m)</strong> is a small settlement on the ridge with a handful of houses and a school. It is a quiet, ordinary place with a very large view, and there is no trekking infrastructure at all.",
        "Around 5 hours. Overnight in a homestay at Singla.",
      ),
    },
    {
      title: "Trek from Singla (2,300 m) to Gumda (1,900 m)",
      elevation: "1,900 m",
      accommodation: "Gumda",
      placeDescription: "A Gurung village on the western slope above the Budhi Gandaki.",
      lng: 84.8224,
      lat: 28.194,
      html: p(
        "A day of ridge and terrace walking with a long descent at the end.",
        "The trail drops off the Singla ridge and traverses south-west through farmland — millet, maize and buckwheat on stone-walled terraces, with water mills turning on the side streams and buffalo tethered under the eaves.",
        "This is middle-hill Nepal at close quarters, and the walking is a series of small climbs and drops rather than one long line. Villages appear every hour or two, and every one has a tea shop.",
        "<strong>Gumda (1,900 m)</strong> is a Gurung village on the western slope above the Budhi Gandaki, with a view east across the gorge to the Ganesh Himal foothills.",
        "Around 5 hours. Overnight in a homestay at Gumda.",
      ),
    },
    {
      title: "Trek from Gumda (1,900 m) to Machha Khola (870 m)",
      elevation: "870 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki at the end of the road.",
      lng: 84.8738,
      lat: 28.2293,
      html: p(
        "The last walking day, dropping off the ridge into the Budhi Gandaki gorge.",
        "The trail descends steadily east through terraced farmland and then subtropical forest — banana, bamboo and orange trees appear as the altitude falls — with the river audible long before it is visible.",
        "It is around a thousand metres of descent, which is hard on the knees; poles are worth having out for the whole morning.",
        "<strong>Machha Khola (870 m)</strong> — 'fish river' — is a line of lodges along the water at the end of the road, and the start of the Manaslu Circuit for groups heading north into the restricted area.",
        "This is where the porters finish and tips are given. Around 5 hours. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Drive from Machha Khola (870 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day in the jeep back to the capital down the Budhi Gandaki.",
        "The first three hours are the rough section — a single-track road cut into the gorge wall above the river, with the driver leaning on the horn at every blind corner — as far as Arughat.",
        "From Dhading Besi the road is paved and the rest of the run into <strong>Kathmandu (1,400 m)</strong> is straightforward, with a lunch stop en route.",
        "Around 8 hours in total. You arrive in the late afternoon and transfer to your hotel, with the evening free for a hot shower, a proper dinner and Thamel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later in the day there is time for <strong>Boudhanath</strong>, <strong>Pashupatinath</strong> or the old town at <strong>Bhaktapur</strong>, all an easy drive with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "The Gorkha foothills are the part of Nepal most visitors drive through on the way to somewhere higher. If you want to go north next time, the Manaslu Circuit starts at Machha Khola where this trek finished, and the Tsum Valley branches off it. Safe travels.",
      ),
    },
  ],
};
