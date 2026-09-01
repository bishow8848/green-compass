import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const MANASLU_PERMITS =
  "Manaslu Restricted Area Permit, Manaslu Conservation Area Permit, and required trekking permits.";

/**
 * Budhi Gandaki to the Serang monastery above Bihi and back.
 *
 * The monastery and its approach camp have no OpenStreetMap node; those
 * waypoints are marked approximate and should be confirmed locally.
 */
export const serangGompaTrek: NewTrek = {
  price: 1450,
  difficulty: "moderate",
  maxAltitude: 3600,
  center: [84.87, 28.42],
  zoom: 10,
  content: {
    slug: "serang-gompa-trek",
    title: "Serang Gompa Trek",
    overview:
      "<p>The <strong>Serang Gompa Trek</strong> follows the Budhi Gandaki into the Manaslu restricted area and then turns off it, climbing a side valley above <strong>Bihi</strong> to a Tibetan Buddhist monastery that almost no trekker visits. <strong>Serang Gompa</strong> is a Nyingma retreat centre in a hanging valley at around 3,600 m, with meditation caves in the cliffs above it and a resident community of monks and long-term retreatants.</p><p>The walking in is the classic lower Manaslu gorge — hot springs at Tatopani, the stone-paved village of Jagat, and the canyon above Philim where the trail is cut into the rock — and then a steep climb through forest into a valley with no road, no lodge and no other party. This is a short, culturally rich trek rather than a high-altitude one: nine walking days, a maximum of 3,600 m, and a monastery that receives visitors as guests rather than as customers.</p>",
    highlights: [
      ["Serang Gompa (3,600 m)", "Visit a Nyingma retreat monastery in a hanging valley, with meditation caves in the cliffs above it."],
      ["A Restricted Area Almost Nobody Walks", "Turn off the Manaslu Circuit at Bihi into a valley that sees a handful of foreign visitors a year."],
      ["The Budhi Gandaki Gorge", "Walk the canyon section where the trail is cut and bolted into the rock face above the river."],
      ["Hot Springs at Tatopani", "Stop at the riverside springs on the way in, where hot water runs straight out of the gorge wall."],
      ["Tibetan Buddhist Culture", "Spend a full day at the monastery, with mani walls, chortens and a working religious community."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>October to November</strong> are the seasons. Spring brings rhododendron into flower on the climb above Bihi and the monastery valley is at its greenest. Autumn is clearer and drier, with the best views north to the Manaslu and Ganesh peaks from the upper valley.</p><p>Winter is possible as far as Bihi but the monastery valley holds snow and the resident community is much reduced, so most groups stop running the route from December. The monsoon makes the gorge section landslide-prone and leech-ridden and is the one time of year to avoid entirely.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a moderate trek with one hard day in it: the climb from Bihi to the monastery gains around 1,600 m on a steep forest trail, and the descent two days later covers the same ground. Everything else is gorge walking between 900 m and 2,000 m, with the constant up and down that the Budhi Gandaki demands but no altitude difficulty.</p><p>You should be able to walk five to seven hours a day and manage a long sustained climb. Six weeks of hill fitness is enough. The other thing to be ready for is basic accommodation: there are lodges as far as Bihi, and above it you stay at the monastery guesthouse or camp, with simple facilities and no showers.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 4,000 m</strong> is required, comfortably above the 3,600 m high point at the monastery. Standard policies capped at 3,000 m would leave the main objective of the trek uninsured, so check the altitude clause specifically.</p><p>The policy must include <strong>emergency evacuation</strong> and medical treatment. There is no road above Machha Khola and no health post above Philim, and an evacuation from the monastery valley means a helicopter, which operators dispatch only against a guarantee of payment from the insurer. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>The trek runs from subtropical gorge to 3,600 m, so layers matter more than heavy kit. Bring waterproof trekking boots, three base layers, a fleece, an insulated jacket, a waterproof shell jacket and trousers, trekking trousers, a warm hat, a sun hat, gloves and wool socks. A sleeping bag rated to <strong>-5°C</strong> covers the nights at the monastery.</p><p>Also pack a 30-litre daypack, trekking poles for the long climb and descent above Bihi, a headlamp with spare batteries, sunscreen and lip balm, sunglasses, a reusable bottle with purification, a small first aid kit with blister care, a quick-dry towel and a power bank. Modest clothing that covers shoulders and knees is appropriate at the monastery.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You stay in teahouses along the Budhi Gandaki at Machha Khola, Jagat, Philim and Bihi — simple but comfortable, with twin rooms and busy dining rooms. At <strong>Serang Gompa</strong> the accommodation is the monastery's own guesthouse or tents pitched nearby, depending on the season and how many retreatants are in residence. Facilities there are basic: shared toilets, no showers, and a kitchen rather than a menu.</p><p>Three meals a day are included. On the gorge section it is the usual teahouse fare — <em>dal bhat</em>, noodles, fried rice, momos, soups and Tibetan bread. At the monastery you eat what the community eats, which is simple vegetarian food, and it is customary to make an offering to the kitchen. Treat water from lodges and streams rather than buying bottles.</p>",
      },
    ],
    faqs: [
      { question: "What is Serang Gompa?", answer: "A Nyingma Buddhist monastery and retreat centre in a side valley above Bihi, with a resident community of monks and long-term retreatants and meditation caves in the cliffs above. It is a working religious institution rather than a monument, which shapes how visitors are expected to behave there." },
      { question: "Do I need a restricted area permit?", answer: "Yes. The route enters the Manaslu restricted area at Jagat, so the Manaslu Restricted Area Permit and conservation area permit are both required and included. The restricted permit requires a licensed guide and a minimum of two trekkers, so solo trekking is not permitted." },
      { question: "How should I behave at the monastery?", answer: "As a guest. Dress modestly, ask before photographing people or shrine rooms, walk clockwise around chortens and mani walls, remove shoes in the temple, and keep quiet during practice sessions. Your guide will brief you and will arrange introductions. A donation to the monastery is customary." },
      { question: "How hard is the climb from Bihi?", answer: "It is the hardest day: around 1,600 m of ascent on a steep forest trail, taking six to seven hours. It is not technical but it is relentless. The descent two days later is on the same ground and is hard on the knees, which is why poles are recommended." },
      { question: "Can we stay more than one night at the monastery?", answer: "Yes, and many groups do. The itinerary includes a full day there, and extra nights can be arranged at the booking stage if you want time to sit in on practice or walk to the retreat caves. It depends on what accommodation the community has available." },
      { question: "Is there mobile signal?", answer: "There is NTC coverage in the Budhi Gandaki villages as far as Bihi, with gaps in the gorge, and nothing dependable in the monastery valley. Expect to be out of contact for the middle days of the trek." },
      { question: "Can this be combined with the Manaslu Circuit or Tsum Valley?", answer: "Yes. Bihi is on the main Manaslu trail, so the monastery can be added to a circuit itinerary as a two to three day detour, and the Tsum Valley branches north at Philim. Tell us at the booking stage so the permits cover the right days and areas." },
      { question: "How many other trekkers will we see?", answer: "On the Budhi Gandaki section, some — it is the Manaslu Circuit approach. In the monastery valley, almost certainly none. Serang receives a handful of foreign visitors a year and most of them are there for the retreat rather than the walk." },
      { question: "What is the accommodation like above Bihi?", answer: "The monastery guesthouse or tents. Rooms are simple with basic bedding, toilets are shared and outside, and there are no showers. It is comfortable enough but it is a monastery rather than a lodge, and the routine of the place takes precedence." },
      { question: "Where can I withdraw cash?", answer: "There are no ATMs on this route. Draw all the Nepalese rupees you need in Kathmandu, in small denominations, for drinks, snacks, charging, tips and your donation at the monastery." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Machha Khola and back as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: MANASLU_PERMITS,
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 9,
    fixedDepartureDay: "thursday",
    itineraryDescription:
      "A 12-day trek up the Budhi Gandaki and into the side valley above Bihi to Serang Gompa (3,600 m), a Nyingma retreat monastery almost no trekkers visit.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailhead, Kathmandu hotel nights, teahouse and monastery guesthouse accommodation, all trekking meals, restricted area and conservation permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, monastery donations, and tips are excluded.",
    bestTime: "Mar-May, Oct-Nov",
    meta: {
      title: "Serang Gompa Trek – 12 Days to a Manaslu Retreat Monastery",
      description:
        "A 12-day trek up the Budhi Gandaki to Serang Gompa (3,600 m), a Nyingma retreat monastery above Bihi in the Manaslu restricted area.",
      keywords:
        "Serang Gompa Trek, Serang monastery Nepal, Bihi Manaslu, Nyingma retreat, Budhi Gandaki trek, restricted area trek Nepal, cultural trek Nepal",
      tags: "Serang Gompa Trek, Manaslu, Remote Region, Cultural Trek, Monastery Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing: the twelve-day plan, the restricted area permit and the passport photographs it needs, and the etiquette of staying at a working monastery — how to behave in the temple, when photography is and is not appropriate, and what an offering to the kitchen normally is.",
        "We check your kit against the list; anything missing can be bought or hired within a few minutes' walk of the hotel. The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Machha Khola (870 m)",
      elevation: "870 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki where the Manaslu trail begins.",
      lng: 84.8738,
      lat: 28.2293,
      html: p(
        "A long day in the jeep, and the only way into the Budhi Gandaki.",
        "We leave early on the Prithvi Highway, turn north at Dhading Besi, and follow an increasingly rough hill road through Arughat and Soti Khola. The valley narrows steadily and the last three hours are on a single track cut into the gorge wall with the river far below.",
        "It is spectacular driving, occasionally alarming, and it saves a full day of walking on the old trail.",
        "<strong>Machha Khola (870 m)</strong> is a line of lodges along the water at the end of the road. Around 8–9 hours including stops. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Trek from Machha Khola (870 m) to Jagat (1,340 m)",
      elevation: "1,340 m",
      accommodation: "Jagat",
      placeDescription: "A stone-paved village and the entry checkpoint for the Manaslu restricted area.",
      lng: 84.8959,
      lat: 28.3514,
      html: p(
        "The first walking day, up the Budhi Gandaki through a gorge that tightens as it goes.",
        "The trail crosses to the west bank and climbs over a ridge to <strong>Khorlabesi</strong>, then reaches the hot springs at <strong>Tatopani</strong>, where water runs warm straight out of the rock into a stone tank beside the path. It is worth the twenty minutes.",
        "Beyond it the valley narrows and the route is cut into the cliff, crossing the river repeatedly on suspension bridges strung high above the water. Staircases are carved into the rock in the tighter sections.",
        "<strong>Jagat (1,340 m)</strong> is a neat village of flagstone streets and stone houses, and the checkpoint where your restricted area permit is inspected.",
        "Around 6–7 hours. Overnight at Jagat.",
      ),
    },
    {
      title: "Trek from Jagat (1,340 m) to Philim (1,570 m)",
      elevation: "1,570 m",
      accommodation: "Philim",
      placeDescription: "A large Gurung village on a terraced shelf above the Budhi Gandaki gorge.",
      lng: 84.8966,
      lat: 28.3933,
      html: p(
        "A shorter day through the narrowest and most dramatic part of the gorge.",
        "From Jagat the trail climbs to <strong>Sirdibas</strong> and crosses the river on a long suspension bridge. Above it the canyon closes in until the path is bolted and cut into the rock face, with the water white a long way below.",
        "This is the finest stretch of trail in the lower valley, and it is well built despite how alarming it looks from a distance.",
        "<strong>Philim (1,570 m)</strong> is a substantial Gurung village on a wide terraced shelf, with a school, shops and lodges, and some of the most productive fields in the valley. The Tsum Valley trail branches north just beyond it.",
        "Around 4–5 hours. Overnight at Philim.",
      ),
    },
    {
      title: "Trek from Philim (1,570 m) to Bihi Phedi (1,990 m)",
      elevation: "1,990 m",
      accommodation: "Bihi Phedi",
      placeDescription: "A settlement below the village of Bihi where the Serang valley trail branches off.",
      lng: 84.8625,
      lat: 28.5083,
      html: p(
        "North up the main Manaslu trail to the junction with the monastery valley.",
        "The route climbs through Ekle Bhatti, where the Tsum Valley trail turns north, and continues west into the upper Budhi Gandaki. Bamboo and subtropical growth give way to pine, and the first <strong>mani walls</strong> appear beside the path — the boundary, in practice, between Hindu and Tibetan Buddhist Nepal.",
        "The trail passes through Deng and follows the river with the valley walls stepping back.",
        "<strong>Bihi Phedi (1,990 m)</strong> is a small settlement below the village of Bihi, at the mouth of the side valley that leads to Serang. This is the last place on the route with a proper lodge.",
        "Around 6 hours. Overnight at Bihi Phedi.",
      ),
    },
    {
      title: "Trek from Bihi Phedi (1,990 m) to Serang Gompa (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Serang Gompa",
      placeDescription: "A Nyingma retreat monastery in a hanging valley above Bihi, with meditation caves in the cliffs.",
      // Approximate: the monastery has no OpenStreetMap node; the waypoint is
      // placed in the hanging valley north of Bihi and should be confirmed locally.
      lng: 84.8767,
      lat: 28.5563,
      html: p(
        "The hard day, and the one the trek exists for: 1,600 m of climbing into a valley with nothing in it but a monastery.",
        "The trail turns north out of Bihi Phedi and climbs steeply through mixed forest — oak and rhododendron first, then fir — on a path used by monks and supply porters rather than trekkers. It is unrelenting and there is no village between bottom and top.",
        "As the forest thins the valley opens into a hanging basin with cliffs on three sides, and <strong>Serang Gompa (3,600 m)</strong> sits at the head of it: a compound of white and red buildings with chortens on the approach and prayer flags along the ridge.",
        "The monastery is a <strong>Nyingma retreat centre</strong>, and there are meditation caves in the cliffs above where practitioners spend months and sometimes years in solitary retreat.",
        "Around 6–7 hours. Overnight at Serang Gompa.",
      ),
    },
    {
      title: "Rest and Exploration Day at Serang Gompa (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Serang Gompa",
      placeDescription: "A Nyingma retreat monastery in a hanging valley above Bihi, with meditation caves in the cliffs.",
      lng: 84.8767,
      lat: 28.5563,
      html: p(
        "A full day at the monastery, which is the point of coming this far.",
        "Mornings at Serang start early with practice in the main temple, and visitors are generally welcome to sit at the back if they arrive quietly and stay still. Your guide will make the introductions and explain what is happening.",
        "The walk up to the <strong>retreat caves</strong> in the cliffs above the compound takes two to three hours and gives the best view of the valley — the monastery below, the forest dropping away south, and the Manaslu and Ganesh peaks on the skyline in clear weather.",
        "The rest of the day is deliberately unstructured: tea with whoever is willing to talk, a walk round the chortens and mani walls, and the considerable quiet of a place that exists for exactly that.",
        "Overnight at Serang Gompa.",
      ),
    },
    {
      title: "Trek from Serang Gompa (3,600 m) to Bihi Phedi (1,990 m)",
      elevation: "1,990 m",
      accommodation: "Bihi Phedi",
      placeDescription: "A settlement below the village of Bihi where the Serang valley trail branches off.",
      lng: 84.8625,
      lat: 28.5083,
      html: p(
        "Back down the forest trail, losing in four hours what took six to gain.",
        "The descent is steep and continuous on the same path, through fir and then rhododendron and oak. It is hard on the knees and poles earn their keep — the ground is soft with leaf litter in places and slippery in others.",
        "Going down gives you the forest properly: on the way up most people are watching their feet, and on the way down there is time to notice the birdlife, the moss, and how completely the valley closes behind you.",
        "<strong>Bihi Phedi (1,990 m)</strong> in the early afternoon, with a lodge, a hot meal and a bucket of hot water.",
        "Around 4–5 hours. Overnight at Bihi Phedi.",
      ),
    },
    {
      title: "Trek from Bihi Phedi (1,990 m) to Philim (1,570 m)",
      elevation: "1,570 m",
      accommodation: "Philim",
      placeDescription: "A large Gurung village on a terraced shelf above the Budhi Gandaki gorge.",
      lng: 84.8966,
      lat: 28.3933,
      html: p(
        "South down the Budhi Gandaki, retracing the main Manaslu trail.",
        "The walking is steady and mostly downhill, through Deng and Ekle Bhatti with the mani walls and chortens now behind you and the valley opening as it drops.",
        "This section shows the transition in reverse: Tibetan Buddhist upper valley to Gurung and Hindu lower valley in the space of a day's walk, with the architecture, the crops and the shrines all changing as you go.",
        "<strong>Philim (1,570 m)</strong> arrives in the afternoon with its terraced fields and its school.",
        "Around 5–6 hours. Overnight at Philim.",
      ),
    },
    {
      title: "Trek from Philim (1,570 m) to Machha Khola (870 m)",
      elevation: "870 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki at the end of the road.",
      lng: 84.8738,
      lat: 28.2293,
      html: p(
        "A long final walking day back through the gorge to the roadhead.",
        "The trail drops to the river and runs south through the canyon section — the bolted ledges and rock staircases you came up on day three, which look different heading downstream — then past Jagat and Tatopani.",
        "The hot springs are worth a second stop, and most groups take one. Below them the valley widens into subtropical country and the walking is easy on the river flats.",
        "<strong>Machha Khola (870 m)</strong> is where the road starts and the walking finishes. This is where the porters leave the group and tips are given.",
        "Around 7 hours. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Drive from Machha Khola (870 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day in the jeep back to the capital.",
        "The first three hours retrace the rough gorge road to Arughat, a single track above the river with blind corners taken on the horn. From Dhading Besi the road is paved and the run into the valley is straightforward.",
        "Around 8–9 hours in total with a lunch stop. The Prithvi Highway section gives a last view of the middle hills before the Kathmandu valley rim.",
        "You arrive in <strong>Kathmandu (1,400 m)</strong> in the late afternoon and transfer to your hotel, with the evening free for a hot shower and a proper dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Boudhanath</strong>, which after a week around a Nyingma monastery is the obvious place to finish — the community that walks the circuit there comes largely from the valleys you have been in.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Serang is one of the few places in Nepal where trekkers are guests of a religious community rather than customers of a lodge. If that is what you are after, the Tsum Valley next door has the same character over a longer route, and the Mu Gompa at its head is the natural next step. Safe travels.",
      ),
    },
  ],
};
