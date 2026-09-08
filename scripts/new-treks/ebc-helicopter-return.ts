import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

/** Walk up to Everest Base Camp, fly out from Gorak Shep — the premium EBC sale. */
export const ebcHelicopterReturnTrek: NewTrek = {
  region: "Everest Region",
  price: 2190,
  difficulty: "challenging",
  maxAltitude: 5545,
  center: [86.82, 27.92],
  zoom: 10.5,
  content: {
    slug: "everest-base-camp-trek-with-helicopter-return",
    title: "Everest Base Camp Trek with Helicopter Return",
    overview:
      "<p>The <strong>Everest Base Camp Trek with Helicopter Return</strong> walks the full classic route to <strong>Everest Base Camp (5,364 m)</strong> and <strong>Kala Patthar (5,545 m)</strong>, then replaces the five-day walk back down the Khumbu with a <strong>35-minute helicopter flight</strong> from Gorak Shep to Lukla and on to Kathmandu. You see everything the fourteen-day trek sees and save roughly four days, which is why this has become the way most people with limited leave now do Everest.</p><p>The ascent is unhurried and properly acclimatised — rest days at <strong>Namche Bazaar (3,440 m)</strong> and <strong>Dingboche (4,410 m)</strong>, the same profile our standard itinerary uses — because the flight out saves time at the end rather than cutting corners on the way up. The reward at the finish is a view no walker gets: the Khumbu Icefall, the Nuptse wall and the whole valley you have just climbed, laid out beneath you on the way down to the treeline in half an hour.</p>",
    highlights: [
      ["Everest Base Camp and Kala Patthar", "Stand at the foot of the Khumbu Icefall, then climb Kala Patthar (5,545 m) for the classic Everest summit view."],
      ["Helicopter Out from Gorak Shep", "A 35-minute flight down the valley instead of five days of descent — the whole route seen from the air."],
      ["Full Acclimatisation Profile", "Rest days at Namche and Dingboche, identical to the standard trek: the time is saved on the way down, not the way up."],
      ["Tengboche Monastery", "The largest gompa in the Khumbu, with Ama Dablam filling the skyline behind it."],
      ["Eleven Days, Not Fourteen", "The complete Everest Base Camp experience inside a two-week holiday, including both Kathmandu nights."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>late September to November</strong> are the two seasons, and both work well for this itinerary. Spring is warmer, the rhododendron forest below Tengboche is in flower, and base camp is full of expedition teams preparing for the summit window — the camp is at its most alive in April. Autumn gives the clearest air of the year and the sharpest mountain photography, with cold but stable weather.</p><p>The helicopter leg makes the season choice slightly more consequential than on a walking itinerary, because the flight needs a weather window. Mornings are almost always flyable in both seasons; afternoons frequently are not, which is why the flight is scheduled at first light. <strong>Winter</strong> is clear and very quiet but seriously cold above Dingboche, and the <strong>monsoon</strong> from June to August grounds aircraft for days at a time.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a challenging trek, and the helicopter does not change that. You still walk from <strong>Lukla (2,840 m)</strong> to <strong>Kala Patthar (5,545 m)</strong> over eight days, with five to seven hours of walking most days and two long ones — the climb to Namche and the day over the moraine to Gorak Shep. What the flight removes is the descent, which is the least demanding part of the trek but the part that eats the calendar.</p><p>Altitude is the real difficulty. The itinerary follows the standard acclimatisation profile with rest days at Namche and Dingboche, and your guide carries a pulse oximeter and checks the group each evening. Two to three months of cardiovascular preparation — hill walking, running, stair work with a loaded pack — is the right level. Previous high-altitude experience is helpful but not required.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to 6,000 m</strong> is mandatory, comfortably above the 5,545 m high point. Read the altitude clause rather than assuming: a great many policies stop at 4,000 m or 5,000 m, which is not enough for Kala Patthar, and a policy bought without checking is the single most common problem we see.</p><p>The policy must include <strong>emergency helicopter evacuation and medical repatriation</strong>. Note that the scheduled scenic flight in this itinerary is a service you have already paid for and is not an insurance matter; what the policy covers is an unplanned rescue if someone becomes ill. Also look for cover for <strong>flight delay and cancellation</strong>, since Lukla is weather-dependent at both ends. Send us your policy number and the insurer's 24-hour emergency line before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Bring waterproof trekking boots already broken in, three or four base layers, a fleece or mid-layer, a <strong>down jacket rated for -15°C</strong>, and a waterproof and windproof shell. Add trekking trousers, thermal leggings for the nights above Dingboche, a warm hat, sun hat, liner and insulated gloves, and four or five pairs of wool socks. A sleeping bag rated to <strong>-15°C</strong> is the right choice; lodges provide blankets but not enough of them at Gorak Shep.</p><p>Also pack a 30-litre daypack, trekking poles, a headlamp with spare batteries, high-SPF sunscreen and lip balm, category 4 sunglasses, a reusable bottle with purification tablets or a filter, a small first aid kit with blister care and rehydration salts, a quick-dry towel, and a power bank. Keep your duffel under <strong>10 kg</strong> for the Lukla flight and note that the helicopter has its own weight limit, which your guide will confirm at Gorak Shep.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You stay in <strong>teahouse lodges</strong> throughout the trek — twin rooms with a bed, mattress and blanket, shared bathrooms, and a dining room heated by a yak-dung stove in the evening. Lodges at Namche and Lukla are comfortable and many have attached bathrooms; from Dingboche upward they become plainer, and at <strong>Gorak Shep (5,164 m)</strong> they are basic by any standard. Hot showers, charging and Wi-Fi are available almost everywhere for a fee that rises with altitude.</p><p>Three meals a day are included on the trek. Menus are long and similar valley-wide: <em>dal bhat</em>, fried rice, noodles, soups, potatoes, pasta, porridge, eggs and Tibetan bread. We recommend going vegetarian above Namche, since meat is carried up unrefrigerated. Refill your bottle at the lodges and treat it with tablets, a filter or a UV pen rather than buying plastic, which cannot be disposed of anywhere in the valley.</p>",
      },
    ],
    faqs: [
      { question: "Where exactly does the helicopter pick us up?", answer: "At Gorak Shep (5,164 m), on the morning after Kala Patthar. The aircraft lands on the flat sand beside the lodges. From there it flies down the valley to Lukla, where you transfer to a second aircraft or a fixed-wing flight to Kathmandu depending on the day's loading and weather." },
      { question: "Is the helicopter a private charter or a shared seat?", answer: "A shared seat on a scheduled group flight, which is what keeps the price where it is. Aircraft carry five passengers at that altitude, so you may fly with people from another group. A private charter for your party alone is available as an add-on if you want to fix the departure time." },
      { question: "What happens if the weather grounds the helicopter?", answer: "You wait at Gorak Shep or descend to Pheriche and fly from there, which is often easier. If the delay runs past a day, we walk you down to Lukla on the normal trail and put you on the fixed-wing flight — you are never stranded, but the extra nights are not included in the package." },
      { question: "Do I still get properly acclimatised on a shorter trip?", answer: "Yes. The days saved are all on the descent, so the ascent profile is exactly the one our fourteen-day trek uses, including the rest days at Namche and Dingboche. Nobody sleeps more than about 500 m higher than the night before once you are above 3,000 m." },
      { question: "Can I add a Kathmandu sightseeing day at the end?", answer: "Yes, and many people do, because the flight out frees the time. Tell us at booking and we will add the hotel night and a guided valley tour. It also gives you a buffer if the helicopter is delayed by a day, which is worth having." },
      { question: "How high does the helicopter fly and is it safe?", answer: "It flies below the valley rim, generally between 4,000 m and 5,200 m, following the Khumbu down. The operators we use fly this route many times a day in season with pilots who do nothing else. They will not fly in cloud, which is why departures are early and why a delay is always possible." },
      { question: "Is there a weight limit for the flight?", answer: "Yes. Helicopters lose lift at altitude, so the Gorak Shep leg is weight-restricted — typically around 75 kg per passenger including baggage. Your guide weighs the group at Gorak Shep. If the load is over, bags follow on the next rotation and reach you in Lukla or Kathmandu." },
      { question: "Do we still visit Everest Base Camp itself?", answer: "Yes. You walk to base camp from Gorak Shep on day eight and stand at the foot of the Khumbu Icefall, then return to Gorak Shep for the night. Kala Patthar is climbed at dawn the following morning before the helicopter, so you get both." },
      { question: "How much extra should I budget on the trail?", answer: "Around $20 to $30 a day covers drinks, snacks, charging, hot showers and Wi-Fi, all of which get more expensive the higher you go. Add tips for the guide and porter at the end. Carry Nepalese rupees in small notes from Kathmandu, as the last dependable ATM is in Namche." },
      { question: "Can this itinerary be run in reverse, flying up and walking down?", answer: "We do not recommend it and will not sell it that way. Flying to Gorak Shep and starting at 5,164 m without acclimatisation is genuinely dangerous. If you want to reach base camp without walking, the one-day Everest Base Camp helicopter tour is the right product and lands only briefly." },
    ],
    inclusions: {
      flights: [
        "Round-trip domestic flight from Kathmandu to Lukla and the helicopter flight from Gorak Shep to Lukla and on to Kathmandu.",
      ],
      transport: ["Private airport and hotel transfers in Kathmandu."],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      permits: "Sagarmatha National Park entry permit and the Khumbu Pasang Lhamu Rural Municipality permit.",
      extra: [
        "Shared-seat helicopter evacuation from Gorak Shep as a scheduled part of the itinerary, subject to weather.",
        "Daily oxygen saturation monitoring with a pulse oximeter carried by the guide.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      unforeseen:
        "Any additional accommodation, transportation, or expenses caused by weather delays to the Lukla flight or the helicopter, or other circumstances beyond the itinerary.",
    },
    porterDays: 8,
    fixedDepartureDay: "saturday",
    extraAddons: [
      {
        title: "Private Helicopter Charter from Gorak Shep",
        description:
          "Take the whole aircraft for your party on the Gorak Shep to Lukla and Kathmandu legs rather than a shared seat, departing on your own schedule as soon as the weather allows and with no waiting for the group to fill.",
        unit: "aircraft",
        pricePerUnit: 2400,
      },
    ],
    itineraryDescription:
      "An 11-day Everest Base Camp trek on the standard acclimatisation profile, walking up through Namche, Tengboche and Dingboche and flying out from Gorak Shep by helicopter.",
    inExDescription:
      "Airport transfers, Lukla flights, the Gorak Shep helicopter, Kathmandu hotel nights, teahouse accommodation, all trekking meals, national park and municipality permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Everest Base Camp Trek with Helicopter Return – 11 Days",
      description:
        "Trek to Everest Base Camp and Kala Patthar, then fly out from Gorak Shep by helicopter. Full acclimatisation profile, 11 days, saving four days on the descent.",
      keywords:
        "Everest Base Camp trek with helicopter return, EBC trek helicopter back, Everest base camp heli return, Gorak Shep helicopter, short Everest base camp trek, Kala Patthar trek",
      tags: "Everest Base Camp Trek with Helicopter Return, Everest Region, Helicopter Trek, Kala Patthar, Nepal Trekking",
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
        "Your guide joins you in the afternoon for the trek briefing. Because this itinerary ends with a flight rather than a walk, the briefing covers two things in more detail than usual: the acclimatisation plan on the way up, and how the helicopter day at Gorak Shep actually works — the weight limit, the early departure, and what happens if the weather closes in.",
        "We check your kit and arrange anything missing from the gear shops a few streets away. Duffels need to come in under 10 kg for the Lukla flight. The rest of the day is yours. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Lukla (2,840 m) and Trek to Phakding (2,610 m)",
      elevation: "2,610 m",
      accommodation: "Phakding",
      placeDescription: "A riverside village on the Dudh Koshi, the first night's stop on the walk in from Lukla.",
      lng: 86.71235560127043,
      lat: 27.73968542596356,
      html: p(
        "An early transfer to the domestic terminal for the flight to <strong>Lukla (2,840 m)</strong>. In peak season the flight operates out of Ramechhap instead of Kathmandu, in which case we drive through the night and fly at dawn; your guide will confirm which applies to your departure.",
        "The 35-minute flight runs east along the Himalayan wall and lands on the short uphill strip at Tenzing-Hillary Airport, one of the more memorable landings in aviation.",
        "After tea while the porters sort loads, you start walking. The trail drops gently through Chheplung and Ghat, crossing and re-crossing the <strong>Dudh Koshi</strong> on suspension bridges strung with prayer flags, with mani walls and carved stones at every village.",
        "Around 3 to 4 hours of easy downhill and level walking to <strong>Phakding (2,610 m)</strong>. Overnight in a teahouse.",
      ),
    },
    {
      title: "Trek from Phakding (2,610 m) to Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital of the Khumbu, a horseshoe of lodges and shops above the Dudh Koshi confluence.",
      lng: 86.71031,
      lat: 27.80344,
      html: p(
        "The first serious day. The trail follows the Dudh Koshi upstream through Monjo, where you enter <strong>Sagarmatha National Park</strong> and permits are checked, then drops to the river and crosses the high <strong>Hillary Suspension Bridge</strong> above the confluence with the Bhote Koshi.",
        "From the bridge the trail climbs steeply for two hours through pine forest. Roughly halfway up there is a break in the trees where <strong>Everest (8,848 m)</strong> appears for the first time over the Nuptse-Lhotse wall, with Taboche and Thamserku on either side.",
        "The climb finishes at <strong>Namche Bazaar (3,440 m)</strong>, the Sherpa capital, built in a natural amphitheatre and stacked with lodges, bakeries, gear shops and the Saturday market that has traded with Tibet for centuries.",
        "Around 6 hours with about 830 m of ascent. Overnight in a teahouse at Namche.",
      ),
    },
    {
      title: "Acclimatisation Day at Namche Bazaar (3,440 m)",
      elevation: "3,440 m",
      accommodation: "Namche Bazaar",
      placeDescription: "The Sherpa capital of the Khumbu, a horseshoe of lodges and shops above the Dudh Koshi confluence.",
      lng: 86.71031,
      lat: 27.80344,
      html: p(
        "A rest day, which in the Khumbu means an active one: you climb high and sleep low so the body has something to adapt to.",
        "The morning walk goes up to the <strong>Everest View Hotel</strong> at 3,880 m, a steady hour and a half above the town, where the terrace looks straight up the valley at Everest, Lhotse, Nuptse and <strong>Ama Dablam (6,812 m)</strong>. Most people agree Ama Dablam is the finest-looking mountain in Nepal and this is where you first understand why.",
        "The return can loop down through the Sherpa villages of <strong>Khumjung</strong> and <strong>Khunde</strong>, past the monastery that keeps a purported yeti scalp and the hospital Edmund Hillary's trust built in 1966.",
        "The afternoon is free in Namche for the bakeries, the Sherpa Culture Museum or last gear purchases. Overnight in Namche.",
      ),
    },
    {
      title: "Trek from Namche Bazaar (3,440 m) to Tengboche (3,860 m)",
      elevation: "3,860 m",
      accommodation: "Tengboche",
      placeDescription: "A monastery settlement on a forested spur, with Ama Dablam filling the head of the valley.",
      lng: 86.7646,
      lat: 27.8358,
      html: p(
        "A beautiful day and one of the best-known stretches of trail in Nepal. The path contours north out of Namche on an almost level balcony high above the Dudh Koshi, with Everest, Lhotse, Nuptse and Ama Dablam in view for most of the morning.",
        "At Sanasa the trail forks — the left branch heads for Gokyo — and yours drops steeply through forest to the river at <strong>Phunki Tenga (3,250 m)</strong>, where water-driven prayer wheels turn beside the bridge and most groups stop for lunch.",
        "The afternoon is a sustained 600 m climb through rhododendron and birch to the spur at <strong>Tengboche (3,860 m)</strong>, site of the largest monastery in the Khumbu. If you arrive by mid-afternoon you can attend the evening prayer ceremony in the gompa.",
        "Around 5 to 6 hours. Overnight in a teahouse at Tengboche.",
      ),
    },
    {
      title: "Trek from Tengboche (3,860 m) to Dingboche (4,410 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A stone-walled farming village in the Imja valley, the last place on the route with barley fields.",
      lng: 86.8319,
      lat: 27.8917,
      html: p(
        "The morning starts with a short descent through the last real forest of the trek to <strong>Deboche</strong>, then crosses the Imja Khola on a bridge in a gorge and climbs to <strong>Pangboche (3,930 m)</strong>, the oldest permanent settlement in the Khumbu.",
        "The upper village holds a gompa worth the ten-minute detour, and from here Ama Dablam is directly overhead and enormous.",
        "Above Pangboche the trees stop for good. The valley opens into wide grazing country of dwarf juniper and scrub, and the trail climbs steadily beside the Imja Khola with Everest hidden behind Nuptse and Lhotse ahead.",
        "You cross the river and climb the last stretch to <strong>Dingboche (4,410 m)</strong>, a village of stone-walled potato and barley fields in a broad sunny bowl.",
        "Around 5 to 6 hours. Overnight in a teahouse at Dingboche.",
      ),
    },
    {
      title: "Acclimatisation Day at Dingboche (4,410 m) – Nangkartshang (5,083 m)",
      elevation: "4,410 m",
      accommodation: "Dingboche",
      placeDescription: "A stone-walled farming village in the Imja valley, the last place on the route with barley fields.",
      lng: 86.8319,
      lat: 27.8917,
      html: p(
        "The second and more important acclimatisation day, and the one that decides how most people feel at Gorak Shep four days later.",
        "The climb goes up the ridge directly behind the village to the prayer flags on <strong>Nangkartshang (5,083 m)</strong> — steep, relentless and entirely worth it. It is the first time on the trek you go above 5,000 m, and the panorama is exceptional: <strong>Makalu (8,485 m)</strong> to the east, Ama Dablam from an angle almost nobody photographs, Lhotse, Island Peak and the Imja valley running away below.",
        "Two to three hours up, an hour and a half down. Go slowly and turn round early if your head is not right.",
        "The afternoon is for resting, eating and drinking, which at this altitude is genuinely part of the training. Overnight in Dingboche.",
      ),
    },
    {
      title: "Trek from Dingboche (4,410 m) to Lobuche (4,940 m)",
      elevation: "4,940 m",
      accommodation: "Lobuche",
      placeDescription: "A small cluster of lodges on the lateral moraine of the Khumbu Glacier.",
      lng: 86.8097,
      lat: 27.9494,
      html: p(
        "A short but demanding day into genuinely high country. The trail climbs gently out of Dingboche onto the shoulder above <strong>Dughla (4,620 m)</strong>, contouring across open moraine with Taboche and Cholatse overhead on the left.",
        "After a tea stop at Dughla comes the steepest hour of the day, a rough climb up the terminal moraine of the Khumbu Glacier to the <strong>Thukla Pass (4,830 m)</strong>.",
        "The top of the pass is a place people remember. It holds dozens of stone <em>chortens</em> and memorial plaques for climbers who died on Everest, including Scott Fischer and Babu Chiri Sherpa, in a windswept saddle with the peaks all round.",
        "From there the trail runs level along the moraine to <strong>Lobuche (4,940 m)</strong>, a handful of lodges beneath the Nuptse wall.",
        "Around 5 hours. Overnight in a teahouse at Lobuche.",
      ),
    },
    {
      title: "Trek to Everest Base Camp (5,364 m) and Return to Gorak Shep (5,164 m)",
      elevation: "5,364 m",
      accommodation: "Gorak Shep",
      placeDescription: "The last settlement before Everest Base Camp, on a sandy flat beside the Khumbu Glacier.",
      lng: 86.82976404191841,
      lat: 27.981443484744254,
      html: p(
        "The big day. A rough two to three hour trail follows the lateral moraine of the Khumbu Glacier north, undulating over loose rock and sand, to the frozen lakebed and lodges at <strong>Gorak Shep (5,164 m)</strong>.",
        "After an early lunch and dropping your bags, you continue to <strong>Everest Base Camp (5,364 m)</strong> — another two hours each way across boulder fields and glacier debris, marked with cairns and prayer flags.",
        "In spring the camp is a small town of yellow and orange tents under the <strong>Khumbu Icefall</strong>, with expedition teams cycling through their rotations. Outside the climbing season it is bare ice and moraine, and quieter for it. Either way you are standing at the foot of the icefall with Everest itself hidden directly above you.",
        "Around 8 hours in total on the move. Return to Gorak Shep for the night — the coldest of the trek.",
      ),
    },
    {
      title: "Kala Patthar (5,545 m) at Dawn and Helicopter Flight to Kathmandu (1,400 m)",
      elevation: "5,545 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A pre-dawn start in the cold for the climb to <strong>Kala Patthar (5,545 m)</strong>, the highest point of the trek and the reason the itinerary exists.",
        "It is a steep, slow 90 minutes to two hours up the brown hill above Gorak Shep, and at that altitude every step is deliberate. From the prayer flags on the summit the whole south-west face of <strong>Everest (8,848 m)</strong> stands clear above the Khumbu Icefall, with Nuptse, Lhotse, Pumori and Changtse around you and the glacier winding away below. Sunrise on the summit pyramid is the photograph people come for.",
        "Back at Gorak Shep for breakfast, then the group is weighed and the <strong>helicopter</strong> lifts off from the sand flat beside the lodges. The flight retraces in 35 minutes what took you eight days to walk — base camp, Lobuche, Dingboche, Tengboche and Namche sliding past below — with a transfer at Lukla before the final leg to Kathmandu.",
        "Transfer to your hotel. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "A slow morning in Kathmandu. If your flight is late in the day there is time for last souvenir shopping in Thamel, a walk around Durbar Square, or simply a long breakfast — which after ten days of lodge food tends to be the popular choice.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
        "If you are staying on in Nepal we are happy to arrange onward travel, a Chitwan extension, a Pokhara flight or extra hotel nights — just let us know while you are still on the trail so we can book it.",
        "Thank you for trekking with us, and we hope to see you back in the Khumbu.",
      ),
    },
  ],
};
