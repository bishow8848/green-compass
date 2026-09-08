import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/** Low-altitude Solu trek to the viewpoint Hillary called his favourite. */
export const pikeyPeakTrek: NewTrek = {
  region: "Everest Region",
  price: 795,
  difficulty: "moderate",
  maxAltitude: 4065,
  center: [86.5, 27.55],
  zoom: 10.5,
  content: {
    slug: "pikey-peak-trek",
    title: "Pikey Peak Trek",
    overview:
      "<p>The <strong>Pikey Peak Trek</strong> climbs a 4,065 m ridge in the Solu district south of the Khumbu for what Sir Edmund Hillary said was his favourite view of Everest. From the summit at dawn the Himalaya runs unbroken from <strong>Dhaulagiri (8,167 m)</strong> in the far west to <strong>Kangchenjunga (8,586 m)</strong> on the Sikkim border, with <strong>Everest</strong>, Lhotse, Makalu and Cho Oyu strung across the middle — eight of the world's fourteen 8,000 m peaks in a single sweep.</p><p>It is a short, low and genuinely easy Himalayan trek: no altitude problems, no Lukla flight on the way in, and a road head three hours from Kathmandu. The route walks through Sherpa villages, rhododendron forest and yak pasture that saw the Everest expeditions pass on foot before the airstrip existed, and finishes at the monastery village of <strong>Junbesi</strong>. For a first trek in Nepal, a family group, or a week when the high routes are out of season, it is the best value in the catalogue.</p>",
    highlights: [
      ["Eight 8,000 m Peaks in One View", "From Dhaulagiri to Kangchenjunga at dawn, including Everest, Lhotse, Makalu and Cho Oyu."],
      ["Hillary's Favourite Viewpoint", "Sir Edmund Hillary rated the Pikey Peak panorama the finest view of Everest in Nepal."],
      ["No Lukla Flight", "A three-hour drive from Kathmandu to the trailhead, avoiding the Everest region's weather-bound airstrip."],
      ["Junbesi and the Solu Monasteries", "Finish at one of the loveliest Sherpa villages in Nepal, with Thubten Choling monastery above it."],
      ["Easy Altitude", "A maximum of 4,065 m reached on a day walk, so acclimatisation is never a concern."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p>The season here is unusually long because the altitude is low. <strong>October to December</strong> gives the sharpest air and the most reliable dawn views, and December in particular is cold but exceptionally clear. <strong>March to May</strong> brings the rhododendron forests below Jhapre into flower, which on this route is a genuine attraction rather than a footnote — the hillsides turn red and pink for weeks.</p><p>Unlike the high Khumbu routes, <strong>January and February</strong> are perfectly walkable if you can take frosty nights, and the trails are empty. The one season to avoid is the <strong>monsoon</strong> from June to early September, when cloud sits on the ridge for days at a time and the view that the whole trek is built around simply is not there.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a moderate trek and one of the most accessible real Himalayan itineraries we run. The maximum altitude is <strong>4,065 m</strong>, reached on a morning walk from a camp at 3,640 m, so altitude sickness is unlikely and no acclimatisation days are needed. Walking days are four to six hours with steady ridge climbing and some long descents.</p><p>What it does ask for is ordinary hill fitness: the ability to walk uphill for several hours, then get up and do it again. Four to six weeks of regular walking with some hill work is enough preparation for most people. Trekking poles are worth carrying for the long descent to Junbesi, which drops nearly 1,400 m in a day and is the only part of the trek that punishes the knees.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,500 m</strong> is required, comfortably above the 4,065 m summit. Most standard policies with a trekking or hiking activity pack will clear that, but read the altitude clause rather than assuming — a surprising number stop at 3,000 m.</p><p>The policy should include <strong>emergency evacuation and medical treatment</strong>. This is a benign route by Nepali standards and road access is never more than a day away, so a vehicle evacuation is usually possible, but helicopter cover is still worth having. Cover for <strong>domestic flight delay</strong> matters if you take the Phaplu flight out rather than driving. Send us your policy number and the insurer's emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>A short list for a short trek, but the ridge is cold at dawn and people underestimate it. Bring comfortable, broken-in trekking boots, two or three base layers, a fleece, a <strong>light down jacket</strong>, and a waterproof and windproof shell. Add trekking trousers, thermal leggings for the summit morning, a warm hat, sun hat, gloves and four pairs of wool socks. A sleeping bag rated to <strong>-10°C</strong> is right for the night at Pikey base camp.</p><p>Also pack a 30-litre daypack, trekking poles, a headlamp with spare batteries for the pre-dawn summit walk, sunscreen and lip balm, sunglasses, a reusable bottle with purification tablets or a filter, a small first aid kit with blister care, a quick-dry towel and a power bank. Charging is available at most lodges for a small fee, and mobile coverage is better here than on any other trek we run.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You stay in <strong>teahouse lodges</strong> and community homestays. The route is far less developed than the Khumbu, which is part of its appeal: expect simple twin rooms with a bed, mattress and blankets, shared bathrooms, and a family kitchen rather than a lodge dining hall. The lodges at <strong>Jhapre</strong> and <strong>Pikey base camp</strong> are the most basic on the route; <strong>Junbesi</strong> and <strong>Phaplu</strong> are comfortable, with hot showers and heated dining rooms.</p><p>Three meals a day are included on the trek. Food is home cooking rather than a long menu — <em>dal bhat</em> with seasonal vegetables, potatoes, Tibetan bread, noodles, thukpa, eggs and porridge — and it is generally excellent. The Solu district grows its own vegetables and dairy, so what arrives on the plate has usually come from within a few hundred metres. Refill your bottle from lodge taps and treat it with tablets or a filter.</p>",
      },
    ],
    faqs: [
      { question: "Is the view really better than from Kala Patthar?", answer: "It is a different view rather than a better one, and Hillary's preference is well documented. Kala Patthar puts you close under Everest's south-west face; Pikey Peak stands far enough back to show the whole Himalayan chain from Dhaulagiri to Kangchenjunga at once. For a panorama, Pikey wins comfortably. For proximity to Everest, it does not." },
      { question: "Do I need a Lukla flight for this trek?", answer: "No, and that is one of the main reasons to choose it. The trailhead at Dhap is a three-hour drive from Kathmandu on a sealed road. You can fly out from Phaplu at the end, which is a far more reliable airstrip than Lukla, or drive back if you prefer to avoid flying altogether." },
      { question: "Is this a good trek for a first visit to Nepal?", answer: "It is one of the best. The altitude never becomes a problem, the days are moderate, the villages are genuinely Sherpa rather than tourist-facing, and you still get a full Himalayan panorama. The trade-off is that you never reach a glacier or a base camp, so if that is what you came for this is not the trek." },
      { question: "Can children or older trekkers manage it?", answer: "Yes, more easily than almost any other trek in our catalogue. We have run it with children from about ten upwards and with trekkers in their seventies. The summit walk is the only demanding section and it is optional — the view from the base camp ridge is already excellent." },
      { question: "How cold does it get at Pikey base camp?", answer: "Cold. At 3,640 m in an exposed position, nights from November to February drop well below freezing, and the pre-dawn summit walk is the coldest hour of the trek. A -10°C sleeping bag, a down jacket and a warm hat make the difference between a memorable dawn and a miserable one." },
      { question: "What is the Junbesi monastery worth seeing?", answer: "Thubten Choling, an hour and a half above Junbesi, is a large working Tibetan Buddhist monastery founded by refugees from Rongbuk after 1959 and home to several hundred monks and nuns. It is a rare thing to visit a monastery of that size that is not on a tourist route, and it is well worth the side trip if you have a spare afternoon." },
      { question: "Can this be extended toward Everest Base Camp?", answer: "Yes. Junbesi is on the original Jiri-to-Everest walking route, so strong groups sometimes carry on north over the Lamjura and Taksindu passes to Lukla and continue to base camp — the way every expedition travelled before the airstrip. That turns the trip into about three weeks; tell us at booking." },
      { question: "Is there mobile signal and charging on the route?", answer: "Yes, and better than on any other trek we run. NTC and Ncell reach most of the ridge, including the summit, and lodges have mains or solar power for charging at a small fee. If being contactable matters to you, this is the trek that allows it." },
      { question: "How busy does the route get?", answer: "Quiet. Pikey has grown in popularity but still sees a small fraction of the Khumbu's traffic, and outside October and April you may pass only a handful of other trekkers in a week. The lodges are small, which is why we run fixed departures and book ahead rather than arriving on spec." },
      { question: "What is the drive to the trailhead like?", answer: "Around three to four hours east from Kathmandu on the Bhitteri road, sealed most of the way with a rough final section to Dhap. It is a pleasant drive through hill farmland rather than an ordeal, and considerably less stressful than waiting for a Lukla flight." },
    ],
    inclusions: {
      flights: ["Domestic flight from Phaplu to Kathmandu at the end of the trek."],
      transport: ["Private vehicle from Kathmandu to Dhap at the start of the trek, and airport transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      permits: "Gaurishankar Conservation Area Permit and required trekking registration.",
      extra: ["Community homestay and lodge accommodation along the ridge."],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transportation, or expenses caused by weather delays to the Phaplu flight or other circumstances beyond the itinerary.",
    },
    porterDays: 6,
    fixedDepartureDay: "thursday",
    itineraryDescription:
      "An 8-day trek through the Solu district to the 4,065 m Pikey Peak ridge, with eight 8,000 m peaks in view at dawn and no Lukla flight.",
    inExDescription:
      "Airport transfers, private transport to the trailhead, the Phaplu flight out, Kathmandu hotel nights, lodge and homestay accommodation, all trekking meals, the conservation area permit, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: {
      title: "Pikey Peak Trek – 8 Days to Hillary's Favourite Everest View",
      description:
        "An 8-day Solu trek to the 4,065 m Pikey Peak ridge, with Everest, Kangchenjunga and Dhaulagiri in one dawn panorama. No Lukla flight, easy altitude.",
      keywords:
        "Pikey Peak Trek, Pikey Peak Nepal, short Everest view trek, Solu trek, Hillary favourite view, easy trek Nepal, Junbesi trek, trek without Lukla flight",
      tags: "Pikey Peak Trek, Everest Region, Solu, Short Trek, Viewpoint Trek, Nepal Trekking",
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
        "Your guide joins you in the afternoon for the briefing. This is a straightforward trek to plan — no high passes, no acclimatisation schedule to manage and no Lukla flight to worry about — so the briefing is mostly about the drive to the trailhead, the standard of the lodges, and how cold the summit morning is likely to be.",
        "We check your kit and point you at the gear shops a few streets away if anything is missing; a down jacket and a warm sleeping bag are the two items people most often need to hire.",
        "The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Dhap (2,350 m) and Trek to Jhapre (2,820 m)",
      elevation: "2,820 m",
      accommodation: "Jhapre",
      placeDescription: "A small ridge village of Sherpa and Tamang houses looking north toward the Himalaya.",
      lng: 86.4736,
      lat: 27.535,
      html: p(
        "An early start east out of the valley. The road climbs over the rim at Dhulikhel and follows the hills through Bhitteri and Kabhre, with the Himalaya appearing and disappearing on the left, before a rougher final section to the road head at <strong>Dhap (2,350 m)</strong>.",
        "Around 4 to 5 hours of driving, with a tea stop on the way.",
        "After lunch at Dhap the walking starts. The trail climbs steadily through rhododendron and pine forest onto the ridge, gaining around 500 m in a comfortable first afternoon and passing mani walls and chortens at every rise.",
        "You reach <strong>Jhapre (2,820 m)</strong>, a scattered ridge village, by mid-afternoon. On a clear evening the sunset light on Numbur and Karyolung from the lodge terrace is the first hint of what the summit will look like. Overnight in a lodge at Jhapre.",
      ),
    },
    {
      title: "Trek from Jhapre (2,820 m) to Pikey Peak Base Camp (3,640 m)",
      elevation: "3,640 m",
      accommodation: "Pikey Peak Base Camp",
      placeDescription: "A pair of simple lodges on open yak pasture below the Pikey Peak ridge.",
      lng: 86.5044,
      lat: 27.5197,
      html: p(
        "The main climbing day of the trek, and a beautiful one.",
        "The trail leaves Jhapre and follows the ridge north through thinning rhododendron forest onto open country. As the trees give way to juniper scrub and yak pasture the view opens right along the chain, and by late morning you are walking with the Himalaya on your left for hours at a time.",
        "You pass through summer grazing settlements of stone huts, and in autumn the herders are still up here with their yaks and <em>chauri</em> cross-breeds.",
        "Around 5 to 6 hours brings you to <strong>Pikey Peak Base Camp (3,640 m)</strong>, two simple lodges on the open hillside below the summit ridge. It is exposed and it is cold once the sun drops, so the dining room stove earns its keep. Your guide sets the summit departure time over dinner. Overnight at base camp.",
      ),
    },
    {
      title: "Pikey Peak (4,065 m) at Dawn and Trek to Junbesi (2,675 m)",
      elevation: "4,065 m",
      accommodation: "Junbesi",
      placeDescription: "A prosperous Sherpa village of whitewashed houses around a gompa, in a side valley of the Solu.",
      lng: 86.5561,
      lat: 27.5619,
      html: p(
        "The day the trek exists for. A start around 4.30 a.m. by headlamp for the climb to the summit of <strong>Pikey Peak (4,065 m)</strong> — around an hour and a half of steady walking up the ridge, cold enough that you will want every layer you brought.",
        "The summit is strung with prayer flags, and at first light the whole Himalayan chain comes out of the dark: <strong>Dhaulagiri</strong> and the Annapurnas far to the west, then Manaslu, Ganesh Himal, Langtang, Gaurishankar, Numbur, and eastward to <strong>Everest (8,848 m)</strong>, Lhotse, Makalu, Cho Oyu and finally <strong>Kangchenjunga</strong> on the Sikkim border. Eight of the fourteen 8,000 m peaks, in one sweep.",
        "Back at base camp for breakfast, then a long descent north and east off the ridge through forest and grazing land, dropping nearly 1,400 m to the Sherpa village of <strong>Junbesi (2,675 m)</strong>.",
        "Around 8 hours in total. Overnight in a lodge at Junbesi.",
      ),
    },
    {
      title: "Junbesi (2,675 m) and the Thubten Choling Monastery",
      elevation: "2,675 m",
      accommodation: "Junbesi",
      placeDescription: "A prosperous Sherpa village of whitewashed houses around a gompa, in a side valley of the Solu.",
      lng: 86.5561,
      lat: 27.5619,
      html: p(
        "A gentler day in one of the loveliest villages in Nepal. Junbesi is a compact settlement of whitewashed, wooden-shuttered Sherpa houses around a well-kept gompa, with apple orchards and barley terraces on the slopes above and almost no vehicles.",
        "The walk of the day goes up the valley to <strong>Thubten Choling</strong>, a large Tibetan Buddhist monastery founded after 1959 by Trulshik Rinpoche and the monks who followed him over the border from Rongbuk. Several hundred monks and nuns live there in a village of small houses around the main hall.",
        "It is an hour and a half up and rather less back, and visitors are welcome in the assembly hall outside prayer times.",
        "The afternoon is free in Junbesi for the village gompa, the school Hillary's trust built, or simply sitting in the sun. Overnight in Junbesi.",
      ),
    },
    {
      title: "Trek from Junbesi (2,675 m) to Phaplu (2,470 m)",
      elevation: "2,470 m",
      accommodation: "Phaplu",
      placeDescription: "The administrative centre of the Solukhumbu district, with the region's reliable all-weather airstrip.",
      lng: 86.5847,
      lat: 27.5169,
      html: p(
        "The last walking day, and an easy one. The trail leaves Junbesi south down the valley, crosses the river and contours through farmland and forest with the Numbur range behind you.",
        "This is the old expedition route — every Everest party before the Lukla airstrip walked this ground on the way up from Jiri, and the trail is still lined with mani walls and chortens from that era.",
        "You pass through the Sherpa settlements of Phera and Salung, where the walking is on level paths between stone-walled fields, before a final descent and short climb to <strong>Phaplu (2,470 m)</strong>, the district headquarters.",
        "Around 5 hours. Phaplu has a proper bazaar, a hospital, a monastery and the airstrip you fly out from, and after four nights in small lodges the hot showers are welcome. Overnight in a lodge at Phaplu.",
      ),
    },
    {
      title: "Fly from Phaplu (2,470 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning flight out. <strong>Phaplu</strong> is a considerably more reliable airstrip than Lukla — longer, lower and in a more open bowl — so delays here are the exception rather than the rule.",
        "The 30-minute flight to Kathmandu runs west along the foothills with the Himalaya on the right the whole way, a good last look at the chain you watched from the ridge.",
        "Transfer to your hotel in Thamel, where a hot shower and a change of clothes are the first order of business.",
        "The afternoon is free. Thamel is on the doorstep for souvenirs and most groups meet for a farewell dinner in the evening. If the flight is delayed by weather, the road drive to Kathmandu takes eight to ten hours and we arrange it rather than lose you a day. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal we are happy to arrange onward travel, a Chitwan extension, a Pokhara flight or extra hotel nights — just let us know while you are still on the trail so we can book it.",
        "Thank you for trekking with us. Pikey is the trek people come back and tell their friends about, and we hope to see you again on a longer one.",
      ),
    },
  ],
};
