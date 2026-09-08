import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, PKR_PLACE, p,
  type Climb, type ClimbDay,
} from "./types";
import {
  DHAMPUS_BC, DHAMPUS_PASS, DHAMPUS_PEAK, DHORPATAN, DUNAI, HIDDEN_VALLEY, JOMSOM, JUPHAL,
  MARPHA, NEPALGUNJ, PUTHA_BC, PUTHA_HIUNCHULI, TUKUCHE_BC, TUKUCHE_PEAK, YAK_KHARKA_DHAMPUS,
} from "./places";

/**
 * The Dhaulagiri range: the peaks above the Kali Gandaki and Hidden Valley, and
 * Putha Hiunchuli at the far western end of the chain.
 *
 * Dhampus and Tukuche share an approach — a flight to Jomsom, a night at Marpha
 * among the apple orchards, and two days climbing west out of the deepest gorge
 * on earth into Hidden Valley. Putha Hiunchuli is a different country entirely,
 * reached through Dolpo or Dhorpatan on a week of walking from the nearest
 * airstrip.
 */

// The Dolpo approach to Putha Hiunchuli, from the Juphal airstrip.
const TARAKOT = { lng: 82.9333, lat: 28.9167 }; // approx
const DHULE = { lng: 83.0, lat: 28.8333 }; // approx
const PURBANG = { lng: 83.0833, lat: 28.7833 }; // approx

// Camp positions on the Dhaulagiri peaks, placed on the route lines.
const DHAMPUS_HIGH_CAMP = { lng: 83.6167, lat: 28.7333 }; // approx
const TUKUCHE_HIGH_CAMP = { lng: 83.6, lat: 28.74 }; // approx
const TUKUCHE_C1 = { lng: 83.61, lat: 28.7367 }; // approx
const PUTHA_C1 = { lng: 83.1433, lat: 28.7367 }; // approx
const PUTHA_C2 = { lng: 83.145, lat: 28.7433 }; // approx
const PUTHA_HIGH_CAMP = { lng: 83.1467, lat: 28.7467 }; // approx

const KALI_GANDAKI_PERMITS =
  "Annapurna Conservation Area Permit (ACAP) and the Trekkers' Information Management System (TIMS) card";

const DHAULAGIRI_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

/**
 * The Kali Gandaki approach, shared by Dhampus Peak and Tukuche Peak: arrival,
 * the Kathmandu working day, the drive to Pokhara, the flight to Jomsom, and
 * two days climbing west out of the gorge to the yak pastures below Hidden
 * Valley. Six days, from a subtropical lake city to 3,680 m.
 */
function kaliGandakiApproach(planWord: string): ClimbDay[] {
  return [
    {
      title: "Arrival in Nepal – Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel in Thamel.",
        "Rest is the only item on today's schedule. Thamel's gear shops are a few minutes' walk away and stock most of what a climber discovers they have left at home.",
        "Your guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        `Your guide runs the full briefing at the hotel: the ${planWord} plan, the acclimatisation profile, the summit day, and the decisions that get made on the mountain and by whom.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over climbing layers, and anything unsuitable swapped for rental kit here rather than discovered above Hidden Valley.",
        "Our office lodges the <strong>climbing permit</strong>, the Annapurna Conservation Area permit and the TIMS card. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "West out of the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river through gorge country with a lunch stop at a riverside restaurant.",
        "The drive covers roughly 200 km and takes most of the day. If you would rather not spend it on the road, the 25-minute flight is available as an add-on.",
        "<strong>Pokhara (822 m)</strong> arrives in the late afternoon on the shore of Phewa Lake, with the Annapurnas and Machhapuchhre standing over it — and, further west, the bulk of <strong>Dhaulagiri</strong>. The crew does the final load sort here. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Jomsom (2,720 m) and Trek to Marpha (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Marpha",
      placeDescription: "A whitewashed Thakali village of apple orchards and flat-roofed houses in the Kali Gandaki.",
      ...MARPHA,
      html: p(
        "An early flight north from Pokhara into the <strong>Kali Gandaki</strong> — twenty minutes through the deepest gorge on earth, measured between Annapurna and Dhaulagiri, with seven vertical kilometres of relief on either side. It is one of the great scheduled flights anywhere.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang, and from the airstrip it is a two-hour walk south down the broad grey riverbed into the wind that funnels up this valley every day of the year.",
        "<strong>Marpha (2,670 m)</strong> is a Thakali village of whitewashed houses and paved alleys, famous throughout Nepal for its apple orchards and the brandy made from them. Around 2 to 3 hours. Overnight at Marpha.",
      ),
    },
    {
      title: "Trek from Marpha (2,670 m) to Yak Kharka (3,680 m)",
      elevation: "3,680 m",
      accommodation: "Yak Kharka",
      placeDescription: "A grazing pasture on the climb west out of the Kali Gandaki toward Hidden Valley.",
      ...YAK_KHARKA_DHAMPUS,
      html: p(
        "West out of Marpha and straight up. The trail leaves the apple orchards within twenty minutes and climbs a thousand metres through pine and juniper onto the eastern flank of the Dhaulagiri massif.",
        "It is a hard day and a rewarding one — the Kali Gandaki opens out below with Nilgiri and the Annapurnas across it, and the trail carries almost nobody, being a herders' route rather than part of the Circuit.",
        "<strong>Yak Kharka (3,680 m)</strong> is a grazing pasture with stone shelters used in summer. Camp goes up here; there are no lodges above Marpha on this side. Around 6 hours. Overnight at Yak Kharka.",
      ),
    },
    {
      title: "Acclimatisation Day at Yak Kharka (3,680 m)",
      elevation: "3,680 m",
      accommodation: "Yak Kharka",
      placeDescription: "The grazing pasture above Marpha, where the first acclimatisation day is spent.",
      ...YAK_KHARKA_DHAMPUS,
      html: p(
        "Climb high, sleep low. The morning walk goes up the ridge toward <strong>4,300 m</strong> and back, on open hillside with juniper and grazing yaks.",
        "The view is the reason to make the effort: the whole <strong>Kali Gandaki</strong> below, <strong>Nilgiri</strong>, <strong>Annapurna I</strong> and Tilicho across the gorge, and behind you the eastern flank of the <strong>Dhaulagiri</strong> massif rising toward Hidden Valley.",
        "Back at Yak Kharka for the afternoon. Your guide takes the first saturation readings tonight. Around 4 to 5 hours. Overnight at Yak Kharka.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const dhampusPeakClimbing: Climb = {
  region: "Dhaulagiri Region",
  price: 3350,
  difficulty: "challenging",
  maxAltitude: 6012,
  grade: "PD",
  center: [83.62, 28.74],
  zoom: 11,
  content: {
    slug: "dhampus-peak-climbing",
    title: "Dhampus Peak Climbing",
    overview:
      "<p><strong>Dhampus Peak (6,012 m)</strong> sits on the eastern rim of <strong>Hidden Valley</strong>, the high basin behind Dhaulagiri, and it gives one of the best summit views in Nepal for a peak of its modest grade. From the top, <strong>Dhaulagiri I</strong> stands across the valley at close range, the Annapurnas fill the eastern horizon beyond the Kali Gandaki, and the brown plateau of Mustang runs north.</p><p>The climb is a straightforward <strong>PD</strong> — a snow slope of 35 to 40 degrees with a short fixed section and a broad summit — and the approach is unusual for Nepal: a twenty-minute flight into the <strong>deepest gorge on earth</strong>, a night among the apple orchards of Marpha, and then two days climbing west out of the Kali Gandaki onto the flank of Dhaulagiri. It is one of the most accessible 6,000 m summits in the country and one of the least visited.</p>",
    highlights: [
      ["Summit Dhampus Peak (6,012 m)", "A straightforward PD snow climb with one of the finest summit panoramas in Nepal."],
      ["Dhaulagiri I at Close Range", "The eighth-highest mountain on earth directly across Hidden Valley from the summit."],
      ["Fly into the Kali Gandaki", "Twenty minutes from Pokhara into the deepest gorge on earth, between Annapurna and Dhaulagiri."],
      ["Marpha and the Apple Orchards", "A night in the finest Thakali village in Mustang before the climbing starts."],
      ["A Trail With Almost Nobody On It", "The route west out of Marpha is a herders' path, not part of the Annapurna Circuit."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. The Kali Gandaki sits in the rain shadow of both the Annapurna and Dhaulagiri massifs, which makes this one of the drier climbing areas in Nepal and gives it a longer usable season than most.</p><p><strong>October</strong> is the classic month — clear, stable and cold, with the best summit views of the year. Spring is warmer and hazier with more snow on the slope, which at this angle makes the climbing easier rather than harder. The constraint at either edge is the <strong>Jomsom flight</strong>, which is weather-dependent in the mornings and cancels regularly, and the wind, which funnels up the gorge every day from late morning.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD</strong>, and among the more approachable 6,000 m peaks in Nepal. From <strong>high camp at 5,200 m</strong> the route crosses a short and lightly crevassed glacier roped as a team, then climbs a <strong>snow slope of 35 to 40 degrees</strong> for two to three hours with a <strong>short fixed section</strong> on the steeper ground near the top.</p><p>The summit is a broad snow crest rather than a knife edge, which is a large part of why it suits a first climb — there is no exposure problem waiting at 6,000 m. Summit day runs <strong>seven to ten hours</strong> from high camp, starting around three in the morning. The wind off Hidden Valley is a bigger factor than the angle.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required. Previous multi-day trekking above 4,000 m is, and the training day at base camp teaches crampons, ice axe, jumar, abseil and rope-team travel from the beginning.</p><p>The acclimatisation is the one thing to watch on a short itinerary. The flight puts you at 2,720 m in a morning and the trail then climbs quickly, so we build in an acclimatisation day at <strong>Yak Kharka (3,680 m)</strong>, two nights at base camp at 4,600 m and a night at 5,200 m. Your guide monitors saturation daily from Marpha onward and will hold the group a day rather than push a marginal climber higher.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check it before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the walk to Marpha and none of the climbing, and many travel policies exclude roped glacier travel and fixed-rope use by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Jomsom has an airstrip and a helipad and is two days below base camp, which makes this one of the more accessible climbing areas in Nepal for evacuation. Helicopters reach base camp in clear conditions and are dispatched against a guarantee of payment.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Four-season boots that take a semi-automatic crampon</strong> are sufficient for this peak; full double boots are recommended but not essential, which is a genuine saving on a first climb. Add a <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, gloves and liner gloves, a warm hat, a buff, category 4 glacier glasses, gaiters, a headlamp and factor 50 sunscreen.</p><p>The Kali Gandaki is dry, bright and <strong>famously windy</strong> from late morning every day, so a buff and glasses matter as much as the warm layers, and the dust is constant. We provide all group climbing equipment and our Sherpas fix the steep section. <strong>Personal hardware can be rented as an add-on</strong>.</p>",
      },
    ],
    faqs: [
      { question: "Is Dhampus Peak a good first 6,000 m climb?", answer: "One of the best in Nepal for it. A short glacier, a 35 to 40 degree slope, a brief fixed section and a broad summit with no exposure problem — plus a sixteen-day trip rather than a three-week one. Its only weakness is that the acclimatisation window is tighter than a Khumbu itinerary." },
      { question: "What is Hidden Valley?", answer: "A high basin at around 5,000 m behind the Dhaulagiri massif, enclosed on all sides and reached over the Dhampus Pass. It is a strange, flat, wind-scoured place with no vegetation and no permanent inhabitants, crossed by the Dhaulagiri Circuit trek and by very few others." },
      { question: "How reliable is the Jomsom flight?", answer: "It goes most mornings in season and cancels regularly — the wind in the gorge makes afternoon flying impossible and cloud closes it entirely. We build the schedule so that a one-day delay does not threaten the climb, and a jeep down the Kali Gandaki is the fallback if the flights are grounded for longer." },
      { question: "Can we see Dhaulagiri from the summit?", answer: "Dhaulagiri I, the eighth-highest mountain on earth, stands directly across Hidden Valley from the top — closer and more imposing than from anywhere else you can reach without a royalty permit. Tukuche Peak, Nilgiri and the Annapurnas fill the rest of the view." },
      { question: "What is the summit success rate?", answer: "Around 80 to 85 percent on our departures. The gentle grade and the short summit day both help; wind off Hidden Valley is the main reason for the turn-backs there are, and a marginal acclimatisation profile accounts for the rest." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,600 m below the Dhampus Pass, and high camp at 5,200 m on the rim of Hidden Valley. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew — there are no lodges above Marpha on this route." },
      { question: "Do I need double boots?", answer: "Recommended but not essential. A warm four-season boot that takes a semi-automatic crampon will do on this peak, where the high camp is 5,200 m rather than 5,500 m or more. Your guide checks the boot at the Kathmandu briefing and will say if it will not do." },
      { question: "How windy is it really?", answer: "The Kali Gandaki is one of the windiest valleys in Nepal — a thermal wind funnels up it from late morning every day of the year, carrying dust. Hidden Valley behind the massif gets a different and colder wind. A buff, glasses and a properly windproof shell are not optional here." },
      { question: "Can Dhampus Peak be combined with Tukuche Peak?", answer: "Yes, and they share the same approach and base camp area. Dhampus first as the warm-up and Tukuche a week later is a strong two-peak trip and adds about six days. We build it to order rather than selling it off the shelf." },
      { question: "Is Marpha worth a night?", answer: "Very much so. It is the finest Thakali village in the Kali Gandaki — whitewashed houses, paved alleys, a gompa above the village and apple orchards on every terrace. The local apple brandy is famous throughout Nepal and the seabuckthorn juice is better than it sounds." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flight between Pokhara and Jomsom, subject to weather, with jeep transport as the alternative."],
      transport: [
        "Private tourist bus or car from Kathmandu to Pokhara and back.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at Yak Kharka, Dhampus base camp (4,600 m) and high camp (5,200 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Dhampus Peak, ${KALI_GANDAKI_PERMITS}.`,
      sherpa: DHAULAGIRI_SHERPA,
      extra: [
        "Cook and kitchen crew from Marpha onward, with all food and fuel carried in.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the steep section below the summit by our climbing Sherpas.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Marpha to base camp.",
        "A reserve day held for the summit.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Jomsom flight, or a summit attempt abandoned for conditions.",
    },
    porterDays: 11,
    gearRentalDays: 11,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary climbing Dhampus Peak (6,012 m) on the rim of Hidden Valley, approached by air into the Kali Gandaki and on foot from Marpha, with a training day, a high camp at 5,200 m and a reserve day.",
    inExDescription:
      "Road transport to Pokhara, the Jomsom flights, Kathmandu and Pokhara hotel nights, lodge and tented accommodation, three meals a day throughout, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and the cost of a grounded flight are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Dhampus Peak Climbing (6,012 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Dhampus Peak (6,012 m) on the rim of Hidden Valley behind Dhaulagiri, a PD snow route with one of the finest summit panoramas in Nepal. 16 days from Kathmandu via Pokhara and Jomsom.",
      keywords:
        "dhampus peak climbing, dhampus peak 6012m, hidden valley nepal, jomsom climbing, dhaulagiri region climbing, first 6000m peak",
      tags: "Dhampus Peak, Dhaulagiri Region, Peak Climbing, 6000m Peak, Hidden Valley, Kali Gandaki",
    },
  },
  days: [
    ...kaliGandakiApproach("sixteen-day"),
    {
      title: "Trek from Yak Kharka (3,680 m) to Dhampus Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Dhampus Base Camp",
      placeDescription: "A tented camp below the Dhampus Pass, on the eastern rim of Hidden Valley.",
      ...DHAMPUS_BC,
      html: p(
        "West and up out of the grazing country onto moraine and scree, gaining 900 m on a herders' route that thins to nothing within an hour.",
        "The vegetation stops entirely somewhere around 4,200 m and the country becomes rock, dust and old snow, with the eastern flank of the Dhaulagiri massif above and the Kali Gandaki a long way below and behind.",
        "<strong>Dhampus Base Camp (4,600 m)</strong> is a tented camp on flat ground below the <strong>Dhampus Pass</strong>, with the peak rising to the north-west. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Dhampus Base Camp",
      placeDescription: "The base camp below the pass, where the climbing skills are taught before the summit push.",
      ...DHAMPUS_BC,
      html: p(
        "The training day, and on a first climb it is the most useful day of the trip. On the snow above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team, ascending fixed line on a jumar, and abseiling</strong>.",
        "None of it is difficult on flat ground in daylight, which is exactly why it is done here rather than at three in the morning on the slope.",
        "In the afternoon we walk up to the <strong>Dhampus Pass (5,240 m)</strong> and back — a 640 m gain and loss, and the first sight of Hidden Valley on the other side. Meanwhile the Sherpas are above, fixing the steep section. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,600 m) to Dhampus High Camp (5,200 m)",
      elevation: "5,200 m",
      accommodation: "Dhampus High Camp",
      placeDescription: "A tented camp at 5,200 m on the rim of Hidden Valley, below the summit slope.",
      ...DHAMPUS_HIGH_CAMP,
      html: p(
        "A short morning up toward the pass and then north along the rim, gaining 600 m in three hours with a light load while the crew moves the camp.",
        "<strong>High camp (5,200 m)</strong> sits on the edge of <strong>Hidden Valley</strong> — a flat, wind-scoured basin behind the Dhaulagiri massif with no vegetation and no permanent inhabitants, enclosed on all sides. It is a strange place to sleep.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. The wind here does not stop. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Dhampus Peak (6,012 m) and Descend to Base Camp (4,600 m)",
      elevation: "6,012 m",
      accommodation: "Dhampus Base Camp",
      placeDescription: "The 6,012 m summit of Dhampus Peak, on the eastern rim of Hidden Valley.",
      ...DHAMPUS_PEAK,
      html: p(
        "Roped and moving by three in the morning. The <strong>glacier</strong> crossing takes under an hour on a marked line, weaving past a few open crevasses in the dark.",
        "Then the <strong>snow slope</strong>: 35 to 40 degrees, climbed steadily for two to three hours as the sky lightens over the Annapurnas, with a <strong>short fixed section</strong> on the steeper ground near the top.",
        "The <strong>summit (6,012 m)</strong> is a broad crest with room to stand about on, and the view is the reason to climb this particular mountain. <strong>Dhaulagiri I</strong> — the eighth-highest mountain on earth — stands across Hidden Valley at close range; <strong>Tukuche Peak</strong> is next along the rim; and east across the Kali Gandaki are <strong>Nilgiri, Annapurna I and Tilicho</strong>, with the brown plateau of Mustang running north.",
        "The descent reverses the slope and the glacier to high camp and then base camp. Eight to eleven hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Dhampus Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Dhampus Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...DHAMPUS_BC,
      html: p(
        "The day held in reserve. Wind is the usual reason a Dhampus attempt is turned back — the summit crest sits on the rim of Hidden Valley and takes everything the basin throws at it — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group starts down toward Yak Kharka, banking a day against the Jomsom flight. Overnight at base camp or Yak Kharka.",
      ),
    },
    {
      title: "Trek from Dhampus Base Camp (4,600 m) to Yak Kharka (3,680 m)",
      elevation: "3,680 m",
      accommodation: "Yak Kharka",
      placeDescription: "The grazing pasture above Marpha, on the descent from Hidden Valley.",
      ...YAK_KHARKA_DHAMPUS,
      html: p(
        "Camp comes down after breakfast and the group descends the moraine and scree east, losing 900 m with the Kali Gandaki opening below.",
        "The vegetation comes back in stages — first lichen, then grass, then juniper — and the air thickens noticeably with every hundred metres.",
        "<strong>Yak Kharka (3,680 m)</strong> in the afternoon, in the grazing country with Nilgiri and the Annapurnas across the gorge. Around 4 hours. Overnight at Yak Kharka.",
      ),
    },
    {
      title: "Trek from Yak Kharka (3,680 m) to Marpha (2,670 m) and on to Jomsom (2,720 m)",
      elevation: "2,720 m",
      accommodation: "Jomsom",
      placeDescription: "The district headquarters of Mustang, on the Kali Gandaki riverbed.",
      ...JOMSOM,
      html: p(
        "A long descent east down the ridge, losing a thousand metres through pine and juniper back into the apple orchards of <strong>Marpha</strong>.",
        "Lunch in Marpha is worth taking slowly — it is the best village in the valley and the last stop before the airstrip.",
        "Then two hours north up the broad grey riverbed to <strong>Jomsom (2,720 m)</strong>, into the wind. The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given. Around 6 to 7 hours. Overnight at Jomsom.",
      ),
    },
    {
      title: "Fly from Jomsom (2,720 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Jomsom flights leave at first light, before the valley wind makes flying impossible — by ten in the morning nothing moves in or out.",
        "Twenty minutes back down the <strong>Kali Gandaki</strong> between Dhaulagiri and Annapurna, and the peak you climbed is visible on the right for the first minute of the flight. If the flights are grounded, a jeep down the gorge is the alternative and is included.",
        "<strong>Pokhara (822 m)</strong> in the morning: lakeside, warm, green and about five thousand metres below where you stood two days ago. The afternoon is free. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning by <strong>Phewa Lake</strong> before the road, with the Annapurnas and Machhapuchhre reflected in it on a clear day and Dhaulagiri showing further west.",
        "The drive to <strong>Kathmandu</strong> takes most of the day on the Prithvi Highway, following the Trishuli east through gorge country with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on.",
        "Back in Kathmandu in the evening. Your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The trip ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure.",
        "If you are staying on in Nepal, we can arrange Chitwan, Lumbini or a Kathmandu valley tour. Safe travels — Tukuche Peak, next along the rim of Hidden Valley and a clear step harder, is the question our returning Dhampus climbers most often ask.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const tukuchePeakExpedition: Climb = {
  region: "Dhaulagiri Region",
  price: 16500,
  difficulty: "extreme",
  maxAltitude: 6920,
  grade: "AD+",
  expedition: true,
  royalty: true,
  center: [83.6, 28.74],
  zoom: 11,
  content: {
    slug: "tukuche-peak-expedition",
    title: "Tukuche Peak Expedition",
    overview:
      "<p><strong>Tukuche Peak (6,920 m)</strong> is the summit at the northern end of the Dhaulagiri massif, standing over <strong>Hidden Valley</strong> and named for the Thakali village far below it in the Kali Gandaki. It was first climbed in <strong>1973 by a Japanese team</strong>, and it is attempted rarely enough that most seasons pass without an ascent — it carries a Department of Tourism royalty, it sits behind a 5,240 m pass, and it has no easy line.</p><p>The route is graded <strong>AD+</strong>: a crevassed glacier, sustained snow and ice at 45 to 50 degrees on fixed rope, and a long exposed summit ridge. It is a serious 7,000 m-class objective within a fortnight of Kathmandu, and the setting is exceptional — a base camp in a wind-scoured basin behind the eighth-highest mountain on earth, with <strong>Dhaulagiri I</strong> filling the southern sky.</p>",
    highlights: [
      ["Summit Tukuche Peak (6,920 m)", "The northern summit of the Dhaulagiri massif, first climbed in 1973 and rarely repeated."],
      ["Base Camp in Hidden Valley", "A wind-scoured basin behind Dhaulagiri with no vegetation, no inhabitants and almost no other parties."],
      ["Dhaulagiri I Across the Valley", "The eighth-highest mountain on earth directly across the basin from base camp and the summit."],
      ["An AD+ Route Fixed by Our Own Team", "Crevassed glacier, sustained 45–50° ice and a long exposed summit ridge."],
      ["Fly into the Deepest Gorge on Earth", "Twenty minutes from Pokhara into the Kali Gandaki, between Annapurna and Dhaulagiri."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>. The Kali Gandaki and Hidden Valley sit in the rain shadow of both massifs, which makes this a drier climbing area than most in Nepal and gives a longer usable window.</p><p>The governing factor is <strong>wind</strong> rather than precipitation. Hidden Valley is a basin that funnels and accelerates whatever is moving over the massif, and the summit ridge is fully exposed to it. Autumn is generally the more settled of the two windows. The <strong>Jomsom flight</strong> is the other constraint — weather-dependent in the mornings and grounded entirely by mid-morning wind — and we build a spare day around it.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD+</strong>. From <strong>base camp at 5,100 m</strong> in Hidden Valley the route crosses a crevassed glacier roped and marked to <strong>Camp 1 at around 5,700 m</strong>, and then climbs sustained <strong>snow and ice at 45 to 50 degrees</strong> on fixed rope to a <strong>high camp at 6,200 m</strong>.</p><p>Summit day follows a <strong>long exposed ridge</strong>, corniced in places and taken one at a time, and runs ten to fourteen hours with an abseil descent of the steep sections. Nothing on the route is desperate; the difficulty is the length of the summit day, the wind on the ridge, and the fact that your own team fixes every metre of it.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> and comfort on fixed rope and roped glacier travel. Alpine experience at AD is ideal. What matters most is that you have slept above 5,500 m and know how your body handles it, because this expedition asks you to live at 5,100 m for a fortnight in a wind-scoured basin and then climb to 6,920 m without oxygen.</p><p>The acclimatisation is built around the approach: an acclimatisation day at Yak Kharka, a night at the Dhampus base camp, the pass crossing at 5,240 m, and then two nights at base camp and a rotation to Camp 1 before the summit push. It is a solid profile, and the assessment day at base camp determines who goes above Camp 1.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>mountaineering to 7,000 m, including fixed-rope climbing, roped glacier travel and abseiling</strong>, is mandatory. Ordinary adventure travel cover does not qualify and we reject it. A national alpine club policy or a specialist mountaineering insurer is what this expedition needs, and we verify the wording before permits are issued.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. Hidden Valley is behind a 5,240 m pass and two days above Marpha, but Jomsom has an airstrip and a helipad and helicopters reach base camp in clear conditions — which makes evacuation better here than on most 7,000 m-class peaks. Nothing above Camp 1 is reachable by aircraft.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>Wind is the enemy here, so a <strong>properly wind-proof shell and a face covering that works with goggles</strong> matter more on this mountain than the down layer. We supply all fixed and main ropes, screws, snow stakes, anchors and camp equipment, and our Sherpas fix the route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Tukuche Peak climbed?", answer: "Rarely — a handful of expeditions in most decades and seasons with none at all. It carries a Department of Tourism royalty rather than an NMA permit, it sits behind a pass, and it has no straightforward line. There is no fixed rope from other teams and no established camps." },
      { question: "Is it named after the village?", answer: "Yes — Tukuche is a Thakali village in the Kali Gandaki about two vertical kilometres below and east of the peak, on the Annapurna Circuit trail. The mountain takes its name from it, which is unusual: most Nepalese peaks are named for deities or features rather than settlements." },
      { question: "What is Hidden Valley like?", answer: "A high basin at around 5,000 m enclosed behind the Dhaulagiri massif, reached over the Dhampus Pass. Flat, brown, wind-scoured, with no vegetation and no permanent inhabitants. The Dhaulagiri Circuit trek crosses it and very little else does. Living there for a fortnight is a strange experience." },
      { question: "How does it compare with Dhampus Peak?", answer: "A category harder and 908 m higher. Dhampus is a PD snow slope to a broad crest, climbable as a first peak; Tukuche is an AD+ route with a crevassed glacier, sustained ice and a long exposed ridge, and it is a full expedition with a rotation and reserve days." },
      { question: "Is supplementary oxygen used?", answer: "No. Tukuche is well within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camp and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "What is the summit success rate?", answer: "Around 45 to 60 percent on our departures. Wind on the summit ridge accounts for most turn-backs — Hidden Valley funnels and accelerates it, and the ridge has no shelter anywhere along its length." },
      { question: "How many camps are there above base?", answer: "Two — Camp 1 at around 5,700 m and a high camp at 6,200 m. The expedition runs one full rotation through Camp 1 before the summit push, which is the structure a summit day of this length needs when there is no oxygen involved." },
      { question: "How reliable is the Jomsom flight?", answer: "It goes most mornings in season and cancels regularly — the wind in the gorge makes afternoon flying impossible and cloud closes it entirely. We build the schedule so a one-day delay does not threaten the expedition, and a jeep down the Kali Gandaki is the fallback." },
      { question: "Can Tukuche be combined with Dhampus Peak?", answer: "Yes, and they share the approach and the Dhampus base camp. Dhampus first as the warm-up and acclimatisation, then over the pass to Tukuche, adds about six days to this itinerary and is a strong two-peak trip. We quote it to order." },
      { question: "Do you run fixed departures?", answer: "One or two a season, and we cancel if conditions are wrong or the party is not strong enough. On a route your own team fixes from the bottom, in a basin with no other expedition in it, a weak team is a real problem." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Round-trip flight between Pokhara and Jomsom, subject to weather, with jeep transport as the alternative."],
      transport: ["Private tourist bus or car from Kathmandu to Pokhara and back."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      camping:
        "Full expedition base camp at 5,100 m in Hidden Valley with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and high camp (6,200 m), and camps at Yak Kharka and the Dhampus base camp on the approach.",
      permits: `Department of Tourism Tukuche Peak climbing royalty and permit, ${KALI_GANDAKI_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camp and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew from Marpha onward, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on ice, fixed-rope work and abseiling.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice slopes and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment from Marpha to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice axe, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Jomsom flight, an attempt abandoned for wind or conditions, or an early descent from the mountain.",
    },
    gearRentalDays: 0,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 26-day expedition on Tukuche Peak (6,920 m) from a base camp in Hidden Valley behind Dhaulagiri, with two camps above base, an acclimatisation rotation, rope fixed by our own team and two reserve days.",
    inExDescription:
      "Road transport to Pokhara, the Jomsom flights, Kathmandu and Pokhara hotel nights, lodge and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, ACAP and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Tukuche Peak Expedition (6,920 m) — 26 Days | Green Compass Treks",
      description:
        "Climb Tukuche Peak (6,920 m) from a base camp in Hidden Valley behind Dhaulagiri, an AD+ route climbed by very few parties. 26 days with two camps, a rotation and one Sherpa per climber.",
      keywords:
        "tukuche peak expedition, tukuche peak 6920m, hidden valley nepal, dhaulagiri region climbing, rarely climbed peaks nepal, jomsom climbing",
      tags: "Tukuche Peak, Dhaulagiri Region, Expedition, Hidden Valley, Technical Climb, Kali Gandaki",
    },
  },
  days: [
    ...dhampusPeakClimbing.days.slice(0, 7).map((d) => ({
      ...d,
      html: d.html.replace("sixteen-day plan", "twenty-six day plan"),
    })),
    {
      title: "Acclimatisation Day at Dhampus Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Dhampus Base Camp",
      placeDescription: "The camp below the Dhampus Pass, on the acclimatisation day before crossing into Hidden Valley.",
      ...DHAMPUS_BC,
      html: p(
        "Climb high, sleep low. The morning walk goes up to the <strong>Dhampus Pass (5,240 m)</strong> and back — a 640 m gain and loss on scree and old snow, and the first sight of Hidden Valley on the far side.",
        "The basin from the pass is a strange thing to look at: flat, brown, entirely without vegetation, walled by the Dhaulagiri massif on one side and by the peaks you will be climbing on the other.",
        "Back at the Dhampus base camp for the afternoon. Your guide takes saturation readings and reviews the team before committing to the crossing, which is a one-way move for the next fortnight. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Dhampus Pass (5,240 m) to Tukuche Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp in Hidden Valley, behind the Dhaulagiri massif.",
      ...TUKUCHE_BC,
      html: p(
        "Over the <strong>Dhampus Pass (5,240 m)</strong> with the whole expedition load — a long, cold morning on scree and snow with pack animals as far as the crest and porters beyond it.",
        "The descent into <strong>Hidden Valley</strong> is short and the basin beyond it is flat, wind-scoured and completely bare. There is no vegetation, no water that is not frozen and nobody living here.",
        "<strong>Tukuche Base Camp (5,100 m)</strong> is established today at the northern end of the basin: mess, kitchen, storage, communications and toilet tents alongside the sleeping tents, all guyed hard because the wind here does not stop. <strong>Dhaulagiri I</strong> fills the southern sky. Around 6 to 7 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp in Hidden Valley, where the puja is held before the climb.",
      ...TUKUCHE_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper carried up from Marpha is burned, and every piece of climbing equipment is stacked at the altar to be blessed.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water arrangements sorted — which in a basin with no running water means melting snow from the start.",
        "Prayer flags go up over the camp and do not stop moving. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp, where technique is checked before the team goes onto the route.",
      ...TUKUCHE_BC,
      html: p(
        "A working day on the glacier ice above camp. Every climber is taken through <strong>crampon and axe technique on steep ice, moving as a roped team, crevasse rescue, ascending fixed line on a jumar with a pack, changing over at anchors, and abseiling</strong>.",
        "Rope-team travel gets particular attention because the glacier below Camp 1 is crevassed and is crossed in the dark on push mornings.",
        "Your leader is assessing as much as teaching, and anyone who needs more time gets the afternoon. Meanwhile the Sherpas are above, <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Tukuche Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...TUKUCHE_BC,
      html: p(
        "An acclimatisation walk across the basin toward the foot of the route and back, gaining and losing three hundred metres on ground that asks nothing technical.",
        "Hidden Valley is worth walking around while there is no reason to hurry: it is one of the few genuinely empty landscapes in Nepal that is neither glacier nor forest, and the light in it in the late afternoon is unlike anywhere else.",
        "The afternoon is rest and packing for the rotation. The satellite forecast arrives in the evening, and on this mountain the number that matters is the wind. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,700 m on the glacier shoulder above Hidden Valley.",
      ...TUKUCHE_C1,
      html: p(
        "The first time on the mountain. The route crosses the <strong>crevassed glacier</strong> roped and on the marked line and then climbs fixed rope onto the shoulder — five to six hours with a personal load.",
        "<strong>Camp 1 (5,700 m)</strong> sits above the basin with Hidden Valley spread out below and <strong>Dhaulagiri I</strong> directly opposite across it, which from this height is a genuinely startling piece of mountain.",
        "The night here is the point of the exercise, and it lets your leader see how each climber performs on the actual route rather than on the practice ice. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,700 m) to Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...TUKUCHE_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, two to three hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate, though at 5,100 m the recovery is slower than it would be lower — Hidden Valley is a high place to live for a fortnight and everyone loses weight here.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice above Camp 1</strong> toward the high camp. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp, on the recovery and preparation day before the summit push.",
      ...TUKUCHE_BC,
      html: p(
        "A rest day and a preparation day in one. The morning is for eating, drinking and sleeping; the afternoon is for the plan.",
        "Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the four-day sequence with timings and a <strong>hard turnaround time</strong> for the summit ridge.",
        "The Sherpa team returns with the report on the state of the ice and the ridge, and the satellite forecast arrives in the evening. On this mountain the go decision turns on the wind at 6,900 m more than on anything else. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,100 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier shoulder camp at 5,700 m, reoccupied for the summit push.",
      ...TUKUCHE_C1,
      html: p(
        "The summit push begins, and the glacier goes faster the second time — four hours or so for a crossing that took five or six on the rotation, on a line the team now knows.",
        "Loads are light: the high camp is already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,700 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,700 m) to High Camp (6,200 m)",
      elevation: "6,200 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,200 m on the shoulder below the summit ridge.",
      ...TUKUCHE_HIGH_CAMP,
      html: p(
        "Four to five hours of sustained <strong>snow and ice at 45 to 50 degrees</strong> on fixed rope, with heavier loads than on the rotation and the angle never really easing.",
        "<strong>High camp (6,200 m)</strong> is a handful of tents on cut platforms below the ridge, exposed to the wind coming across the massif and the coldest night of the expedition.",
        "Dinner is early and minimal; appetite at 6,200 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Tukuche Peak (6,920 m) and Descend to Camp 1 (5,700 m)",
      elevation: "6,920 m",
      accommodation: "Camp 1",
      placeDescription: "The 6,920 m summit of Tukuche Peak, at the northern end of the Dhaulagiri massif.",
      ...TUKUCHE_PEAK,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the <strong>summit ridge</strong>.",
        "The ridge is long, corniced in places and fully exposed to the wind, and it is taken one at a time with the Sherpas probing the crest ahead. It is not desperate and it does not let up, and it is where the turnaround time earns its place.",
        "The <strong>summit (6,920 m)</strong> looks south across Hidden Valley to <strong>Dhaulagiri I</strong> at close range, east over the Kali Gandaki to <strong>Nilgiri, Annapurna I and Tilicho</strong>, and north over the brown plateau of Mustang toward the Damodar Himal and Tibet.",
        "The descent reverses the ridge and abseils the steep sections to high camp, then continues to Camp 1. Twelve to sixteen hours. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,700 m) to Tukuche Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The expedition base camp in Hidden Valley, reached on the descent from the summit.",
      ...TUKUCHE_BC,
      html: p(
        "Camp 1 comes down and the fixed ropes are stripped as the team descends — slow work and not optional, since nothing is left on the mountain.",
        "The glacier is crossed roped in the cold of the morning for the last time.",
        "<strong>Base camp (5,100 m)</strong> by midday, with a hot meal and the first unbroken sleep in four days. It is still 5,100 m and still windy, but after the high camp it feels almost hospitable. Three to four hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Tukuche Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The first of two contingency days, held for wind or a second summit attempt.",
      ...TUKUCHE_BC,
      html: p(
        "The first of two reserve days. Wind on the summit ridge closes this mountain more often than anything else, and it changes on a timescale of days rather than weeks.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest — in a basin at 5,100 m with Dhaulagiri across it, which is a strange and rather good place to spend a morning doing nothing. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day and Break Camp at Base Camp (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Tukuche Base Camp",
      placeDescription: "The final contingency day, and the last night in Hidden Valley.",
      ...TUKUCHE_BC,
      html: p(
        "The second reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried over the Dhampus Pass goes back over it, and the Department of Tourism deposit is refunded against what comes out. Hidden Valley has no soil and no drainage, and what is left in it stays.",
        "The chorten from the puja stays with its prayer flags. A last evening with Dhaulagiri turning red across the basin, which is what most people remember from this expedition. Overnight at base camp.",
      ),
    },
    {
      title: "Cross the Dhampus Pass (5,240 m) and Descend to Yak Kharka (3,680 m)",
      elevation: "3,680 m",
      accommodation: "Yak Kharka",
      placeDescription: "The grazing pasture above Marpha, reached back over the pass from Hidden Valley.",
      ...YAK_KHARKA_DHAMPUS,
      html: p(
        "Back across the basin and up to the <strong>Dhampus Pass (5,240 m)</strong> in the cold of the morning, with the whole expedition load on porters and pack animals.",
        "From the crest there is a last look back at Hidden Valley and Tukuche, and then the long descent east — scree, moraine and finally grass, losing 1,560 m into the grazing country above Marpha.",
        "<strong>Yak Kharka (3,680 m)</strong> in the afternoon, with juniper, running water and thick air after a fortnight above 5,000 m. Around 8 hours. Overnight at Yak Kharka.",
      ),
    },
    ...dhampusPeakClimbing.days.slice(12, 16).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "The evening is the end-of-trip dinner with the guide, the climbing Sherpas, the cook crew and the porters, and the point at which tips are given.",
          "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given.",
        )
        .replace(
          "Your <strong>summit certificate</strong> is presented over dinner.",
          "The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner.",
        )
        .replace(
          "Tukuche Peak, next along the rim of Hidden Valley and a clear step harder, is the question our returning Dhampus climbers most often ask.",
          "Putha Hiunchuli at the far western end of the Dhaulagiri chain is the question our returning Tukuche climbers most often ask.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const puthaHiunchuliExpedition: Climb = {
  region: "Dhaulagiri Region",
  price: 19500,
  difficulty: "extreme",
  maxAltitude: 7246,
  grade: "PD+",
  expedition: true,
  royalty: true,
  center: [83.15, 28.74],
  zoom: 10,
  content: {
    slug: "putha-hiunchuli-expedition",
    title: "Putha Hiunchuli Expedition",
    overview:
      "<p><strong>Putha Hiunchuli (7,246 m)</strong> — also called Dhaulagiri VII — is the westernmost summit of the Dhaulagiri chain, standing above the empty country where <strong>Dolpo</strong> meets the Dhaulagiri range. It was first climbed in <strong>1954 by J. O. M. Roberts and Ang Nyima Sherpa</strong>, and Roberts, who later founded Nepal's first trekking company, described the approach as the finest walk he knew.</p><p>The climbing is graded <strong>PD+</strong> and is among the most straightforward of any 7,000 m peak in Nepal — a long glacier, a snow slope with a short steeper section, and a broad summit ridge. What makes the expedition demanding is everything else: a flight to Nepalgunj and another to Juphal, six days of walking through country with no lodges and almost no villages, and a base camp that is a week from the nearest airstrip. It is the quietest 7,000 m peak we run.</p>",
    highlights: [
      ["Summit Putha Hiunchuli (7,246 m)", "The westernmost summit of the Dhaulagiri chain, first climbed by Jimmy Roberts in 1954."],
      ["One of the Easiest 7,000 m Routes in Nepal", "A PD+ glacier and snow route with no technical crux — the difficulty is the altitude and the remoteness."],
      ["The Dolpo Approach", "Six days from the Juphal airstrip through country with no lodges, few villages and almost no other trekkers."],
      ["Excellent 8,000 m Preparation", "Base camp life, a rotation and a 7,000 m summit without oxygen, on a route that does not add technical difficulty."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support a week's walk from the nearest airstrip."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>September to October</strong>. Putha sits at the western end of the range on the edge of the Dolpo rain shadow, which makes it drier than the central Himalaya and gives a slightly wider window than most 7,000 m peaks.</p><p>The practical constraint is the <strong>Juphal flight</strong>, which runs from Nepalgunj and is cancelled regularly for weather and, occasionally, for lack of demand out of season. We build a spare day around it at each end. Autumn is the more settled of the two windows on the mountain itself; spring gives a greener and pleasanter approach through the middle hills. The monsoon closes the trail entirely.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>PD+</strong>, and genuinely one of the least technical 7,000 m routes in Nepal. From <strong>base camp at 4,900 m</strong> the route climbs a long glacier — crevassed but not broken — to <strong>Camp 1 at around 5,600 m</strong>, and then continues on snow slopes to <strong>Camp 2 (6,200 m)</strong> and a <strong>high camp at 6,600 m</strong>.</p><p>Summit day climbs a snow slope with a <strong>short steeper section of around 45 degrees</strong> on fixed rope and finishes along a broad summit ridge. Ten to fourteen hours from high camp, climbed without supplementary oxygen. There is no crux and no significant objective hazard; what this mountain teaches is what a 7,000 m summit day feels like, on ground that does not complicate the lesson.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We ask for a <strong>previous 6,000 m summit</strong> and comfort on fixed rope and roped glacier travel. Alpine experience is welcome and not essential. Like Himlung and Baruntse, this is a peak for a climber stepping up rather than one already operating at the limit.</p><p>The acclimatisation is unusually gradual because the approach is long: six days walking from 2,475 m to 4,900 m through the middle hills and over passes, then two nights at base camp and a full rotation to Camp 1. It is the profile that produces this mountain's high success rate, and it is also the rhythm — base camp, rotations, weather waits — that an 8,000 m expedition assumes you already know.</p>",
      },
      {
        heading: "Remoteness, Insurance and Safety",
        content:
          "<p>Base camp is <strong>six days' walk from the Juphal airstrip</strong>, in country with no lodges above Tarakot, no mobile signal and no other expedition. The team travels fully self-contained with a cook crew and all food and fuel carried in, and everything comes back out again.</p><p>Insurance written for <strong>mountaineering to 7,500 m, including fixed-rope climbing and roped glacier travel</strong>, is mandatory. <strong>Emergency helicopter evacuation and repatriation</strong> must be included with a limit high enough to be meaningful: helicopters reach base camp in clear weather from Nepalgunj, and that is a long flight over remote country. Base camp holds a Gamow bag, a full medical kit and emergency oxygen.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The approach crosses the middle hills for three days before the country opens out, so bring proper trekking kit and waterproofs. We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "Is Putha Hiunchuli good preparation for an 8,000 m peak?", answer: "Yes, and for a specific reason: it puts you at 7,246 m without oxygen on ground that adds no technical difficulty, so the lesson is purely about altitude, base camp life and rotations. Alongside Himlung and Baruntse it is one of the three peaks we most often recommend before Manaslu or Everest." },
      { question: "Why is it called Dhaulagiri VII?", answer: "Because it is the seventh named summit of the Dhaulagiri chain, counting east to west from Dhaulagiri I. Putha Hiunchuli is its local name — hiunchuli means snow peak — and both are in common use." },
      { question: "How remote is it really?", answer: "Base camp is six days' walk from the Juphal airstrip, which is itself reached by two flights from Kathmandu via Nepalgunj. There are no lodges above Tarakot, no mobile signal above Dunai and no other expedition in the area. It is the most remote peak in this catalogue after Makalu and Kanjirowa." },
      { question: "What is the Dolpo approach like?", answer: "Three days through middle-hill country of terraced villages and forest, then three more over passes into the drier, browner, more Tibetan landscape at the edge of Dolpo. Jimmy Roberts, who made the first ascent and later founded Nepalese trekking, called it the finest walk he knew, and very few people do it." },
      { question: "How reliable is the Juphal flight?", answer: "Less reliable than Lukla, and for different reasons — weather, and the fact that the route is thinly served out of season. We fly Kathmandu to Nepalgunj and Nepalgunj to Juphal, and we build a spare day at each end of the trip around it." },
      { question: "What is the summit success rate?", answer: "High for a 7,000 m peak — around 65 to 75 percent on our departures. The absence of a technical crux and the very gradual acclimatisation profile are both reasons. Wind on the summit ridge is the commonest cause of the turn-backs there are." },
      { question: "Is supplementary oxygen used?", answer: "No. Putha is well within the range a fit acclimatised climber handles without it, and climbing a 7,000 m peak on your own lungs is a large part of why it is useful preparation. We carry emergency oxygen with masks and regulators at the high camp and base camp for medical use." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,600 m, Camp 2 at 6,200 m and a high camp at 6,600 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively." },
      { question: "Can we see Dhaulagiri I from the summit?", answer: "The whole chain runs east from beneath your feet — Churen Himal, Gurja Himal and, at the far end, Dhaulagiri I. North of you is Dolpo and the Tibetan plateau; south, on a clear day, the middle hills run down toward the plains of India." },
      { question: "Is there any way to shorten the approach?", answer: "A helicopter to base camp is technically possible and we do not recommend it — the six days of walking are what makes the acclimatisation work, and a team flown to 4,900 m spends the days it saved feeling ill. If time is the constraint, Himlung has a shorter approach and a similar objective." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: [
        "Round-trip flights between Kathmandu and Nepalgunj, and between Nepalgunj and Juphal, subject to weather.",
      ],
      transport: ["Private airport and hotel transfers in Kathmandu and Nepalgunj."],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Nepalgunj with breakfast."],
      trekAccommodation:
        "Full tented accommodation throughout the approach and the walk out above Tarakot, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      camping:
        "Full expedition base camp at 4,900 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,600 m), Camp 2 (6,200 m) and high camp (6,600 m).",
      permits:
        "Department of Tourism Putha Hiunchuli climbing royalty and permit, Dhorpatan Hunting Reserve and Dolpo area permits as the route requires, and the Trekkers' Information Management System (TIMS) card.",
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camp and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew from Juphal onward, with all food and fuel carried in and high-altitude rations for the camps above.",
        "A technical training and assessment day at base camp on glacier travel, fixed-rope work and abseiling.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the snow slopes and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Juphal and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Nepalgunj.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice axe, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, a grounded Juphal or Nepalgunj flight, an attempt abandoned for conditions, or an early descent from the mountain.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 29-day expedition on Putha Hiunchuli (7,246 m) at the western end of the Dhaulagiri chain, approached through Dolpo from the Juphal airstrip, with three camps above base, an acclimatisation rotation and three reserve days.",
    inExDescription:
      "Nepalgunj and Juphal flights, airport transfers, Kathmandu and Nepalgunj hotel nights, full tented accommodation on the approach and at every camp, three meals a day throughout, the Department of Tourism royalty and area permits, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Sep-Oct",
    meta: {
      title: "Putha Hiunchuli Expedition (7,246 m) — 29 Days | Green Compass Treks",
      description:
        "Climb Putha Hiunchuli (7,246 m), the westernmost summit of the Dhaulagiri chain, on a 29-day expedition through Dolpo. A PD+ route with no technical crux and excellent 8,000 m preparation.",
      keywords:
        "putha hiunchuli expedition, dhaulagiri VII, putha hiunchuli 7246m, dolpo climbing, 7000m peak nepal, preparation for 8000m, juphal",
      tags: "Putha Hiunchuli, Dhaulagiri Region, Expedition, 7000m Peak, Dolpo, Remote",
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
        "You land at <strong>Tribhuvan International Airport</strong> in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you in the arrivals hall and drives you to your hotel.",
        "Rest is the only item on the schedule. Unpack and lay out your equipment tonight — it is inspected tomorrow, and Kathmandu is the last place anything can be replaced before a base camp six days from an airstrip.",
        "Your expedition leader calls at the hotel to introduce themselves and set tomorrow's plan. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Briefing, Permits and Equipment Inspection",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is briefed and every item of personal equipment is checked.",
      ...KATHMANDU,
      html: p(
        "A full working day. Your leader takes the twenty-nine day plan apart stage by stage — the two flights, the six-day approach through Dolpo, base camp, the rotation, the summit and the reserve days.",
        "The <strong>equipment inspection</strong> is item by item: boots, crampons, harness, ascender, belay device, screwgates and down clothing. Anything missing or unsuitable is bought or hired here today.",
        "Because the approach carries everything on porters and pack animals with no resupply, the packing is done carefully and weighed. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the royalty permit is issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the royalty permit is issued, the regulations are read out and the waste-management deposit is registered.",
        "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched by road to Nepalgunj, where it goes onto the Juphal flights ahead of the team.",
        "The afternoon is free, and it is the last one with hot water and restaurants for a month. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly from Kathmandu (1,400 m) to Nepalgunj (150 m)",
      elevation: "150 m",
      accommodation: "Nepalgunj",
      placeDescription: "A hot lowland city near the Indian border, and the air hub for far-western Nepal.",
      ...NEPALGUNJ,
      html: p(
        "A one-hour flight west to <strong>Nepalgunj (150 m)</strong>, on the Terai plain a few kilometres from the Indian border.",
        "It is flat, hot and humid — often above 35°C — and it is the least mountainous place any of our expeditions passes through. It is also the hub for every flight into far-western Nepal, which is why the trip goes this way.",
        "The afternoon is spent in an air-conditioned hotel doing nothing, which after Kathmandu and before Dolpo is exactly right. Your leader confirms the Juphal flight for the morning. Overnight in Nepalgunj.",
      ),
    },
    {
      title: "Fly to Juphal (2,475 m) and Trek to Dunai (2,140 m)",
      elevation: "2,140 m",
      accommodation: "Dunai",
      placeDescription: "The administrative headquarters of Dolpa district, on the Thuli Bheri river.",
      ...DUNAI,
      html: p(
        "An early flight north into the hills — forty-five minutes from the Terai to <strong>Juphal (2,475 m)</strong>, a short airstrip on a hillside above the Thuli Bheri, and a rise of more than two thousand metres in under an hour.",
        "The flight is weather-dependent and cancels regularly, which is why the itinerary carries spare days at both ends.",
        "From the airstrip the trail drops to the river and follows it east to <strong>Dunai (2,140 m)</strong>, the administrative headquarters of Dolpa and the last town of any size. Around 2 to 3 hours. Overnight at Dunai.",
      ),
    },
    {
      title: "Trek from Dunai (2,140 m) to Tarakot (2,540 m)",
      elevation: "2,540 m",
      accommodation: "Tarakot",
      placeDescription: "An old fortified village above the Thuli Bheri, the last settlement of any size on the approach.",
      ...TARAKOT,
      html: p(
        "East up the <strong>Thuli Bheri</strong> on a trail cut into the gorge wall, crossing side streams and passing through small villages of stone and timber.",
        "The country here is middle-hill Nepal rather than Himalaya — terraced fields, walnut trees, buffalo and children walking to school — and it carries almost no foreign traffic.",
        "<strong>Tarakot (2,540 m)</strong> is an old fortified village on a spur above the river, once the seat of a local raja and still the last settlement of any size on this route. Around 6 hours. Overnight at Tarakot.",
      ),
    },
    {
      title: "Trek from Tarakot (2,540 m) to Dhule (3,340 m)",
      elevation: "3,340 m",
      accommodation: "Dhule",
      placeDescription: "A herders' camp in the forested valley climbing south-east toward the Dhaulagiri chain.",
      ...DHULE,
      html: p(
        "South-east away from the Thuli Bheri and into a side valley that climbs steadily toward the western end of the Dhaulagiri chain.",
        "The trail leaves the villages behind within a couple of hours and enters forest — pine, oak and birch — with the occasional herders' shelter and no permanent habitation at all.",
        "<strong>Dhule (3,340 m)</strong> is a clearing used by herders in summer, where camp goes up. From here the expedition is entirely self-contained. Around 6 to 7 hours. Overnight at Dhule.",
      ),
    },
    {
      title: "Trek from Dhule (3,340 m) to Purbang (3,800 m)",
      elevation: "3,800 m",
      accommodation: "Purbang",
      placeDescription: "A high grazing camp above the treeline on the approach to Putha Hiunchuli.",
      ...PURBANG,
      html: p(
        "Up out of the forest and onto open hillside, climbing steadily with the country turning drier and browner as the trail gains height.",
        "This is the transition into the edge of Dolpo — juniper and grass rather than trees, blue sheep on the slopes, and lammergeiers working the ridges.",
        "<strong>Purbang (3,800 m)</strong> is a grazing camp above the treeline. The first snow peaks of the Dhaulagiri chain show ahead, and Putha Hiunchuli itself appears for the first time. Around 5 to 6 hours. Overnight at Purbang.",
      ),
    },
    {
      title: "Trek from Purbang (3,800 m) to the Kakkot La Camp (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Kakkot La Camp",
      placeDescription: "A high camp below the pass on the final approach to the Putha Hiunchuli base camp.",
      lng: 83.1167,
      lat: 28.7333,
      html: p(
        "A shorter day and a higher one, climbing 600 m onto bare high ground with the whole western Dhaulagiri chain opening ahead.",
        "The country here is genuinely empty — no villages, no herders' shelters, no trail markers beyond what the crew knows — and the walking is on grass and then moraine.",
        "Camp goes up at around <strong>4,400 m</strong> below the pass. It is the last night before base camp, and the first properly cold one. Around 4 to 5 hours. Overnight at the Kakkot La camp.",
      ),
    },
    {
      title: "Trek to Putha Hiunchuli Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp on the moraine below the north-west flank of Putha Hiunchuli.",
      ...PUTHA_BC,
      html: p(
        "Over the pass and onto the moraine below the mountain, gaining 500 m on rough ground with the glacier opening ahead.",
        "<strong>Putha Hiunchuli Base Camp (4,900 m)</strong> is established today: mess, kitchen, storage, communications and toilet tents alongside the sleeping tents. Home for the next fortnight, and six days' walk from the nearest airstrip.",
        "The afternoon is spent settling in and reading the route — the glacier, the shelf where Camp 1 goes, the snow slopes above it and the broad summit ridge. Around 4 to 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...PUTHA_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the glacier before it is done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. There is no signal here and no other expedition anywhere in the area, and the silence takes most people a day to notice. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Assessment Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, where glacier and rope technique is checked before the rotation.",
      ...PUTHA_BC,
      html: p(
        "A full working day on the glacier below camp. Every climber works through <strong>roped team travel with correct spacing, crevasse rescue with a hauling system, jumaring on fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Rope-team travel and crevasse rescue get the most time, because the glacier above base camp is long and crevassed and is crossed in the dark on push mornings, and there is no other team within a hundred kilometres to help.",
        "Your leader is assessing as much as teaching. Meanwhile the Sherpas are above, <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Putha Hiunchuli Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...PUTHA_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,300 m</strong> and back, on ground that asks nothing technical.",
        "From up there the whole western end of the Dhaulagiri chain is visible — Churen Himal and Gurja Himal running east — and north is the brown, dry, folded country of <strong>Dolpo</strong> stretching to the Tibetan border.",
        "The afternoon is rest and packing for the rotation. Your leader reviews the satellite forecast in the evening and confirms the plan. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,600 m on the glacier shelf above base camp.",
      ...PUTHA_C1,
      html: p(
        "The first time on the mountain. The route crosses the <strong>crevassed glacier</strong> roped and on the marked line — long rather than broken, with a handful of open holes to weave past — and climbs onto the shelf above.",
        "Five to six hours with a personal load brings the team to <strong>Camp 1 (5,600 m)</strong>, on the glacier with the moraine and base camp far below.",
        "The night here is the point of the exercise, and it also gives your leader a proper look at how each climber performs on the route rather than on the practice ice. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,600 m) to Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...PUTHA_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, two to three hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,900 m than it would higher, and a rested team moves faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the slopes above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, on the recovery and preparation day before the summit push.",
      ...PUTHA_BC,
      html: p(
        "A rest day and a preparation day in one. The morning is for eating, drinking and sleeping; the afternoon is for the plan.",
        "Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage with timings and a turnaround time for the summit ridge.",
        "The Sherpa team returns with the report on the state of the fixed ropes and the upper slopes, and the satellite forecast arrives in the evening. The go decision is taken on the two together. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,900 m) to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier shelf camp at 5,600 m, reoccupied for the summit push.",
      ...PUTHA_C1,
      html: p(
        "The summit push begins, and the glacier goes faster the second time — four hours or so for a crossing that took five or six on the rotation, on a line the team now knows.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,600 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,600 m) to Camp 2 (6,200 m)",
      elevation: "6,200 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,200 m on the upper snow slopes of the north-west flank.",
      ...PUTHA_C2,
      html: p(
        "Up the long snow slopes above Camp 1 on fixed rope, four to five hours with a moderate load, the angle easing and steepening in turn but never becoming difficult.",
        "This is the section that teaches what a 7,000 m peak actually asks for: not technique but the ability to keep moving steadily for hours on ground that offers nothing to think about.",
        "<strong>Camp 2 (6,200 m)</strong> in the early afternoon, on a shelf cut into the slope. Melt snow, force fluid and food, and sleep as well as 6,200 m allows. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,200 m) to High Camp (6,600 m)",
      elevation: "6,600 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,600 m below the summit ridge of Putha Hiunchuli.",
      ...PUTHA_HIGH_CAMP,
      html: p(
        "A deliberately short day — three hours or so up the slope to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,600 m)</strong> is a handful of tents on the shoulder, exposed to the wind and cold as soon as the sun goes.",
        "Dinner is early and minimal; appetite at 6,600 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Putha Hiunchuli (7,246 m) and Descend to Camp 2 (6,200 m)",
      elevation: "7,246 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,246 m summit of Putha Hiunchuli, the westernmost peak of the Dhaulagiri chain.",
      ...PUTHA_HIUNCHULI,
      html: p(
        "Moving by two in the morning, roped and on fixed line. The route climbs the snow slopes above camp — long, steady and never technical — with a <strong>short steeper section of around 45 degrees</strong> on fixed rope near the top that is the only real climbing on the mountain.",
        "It is a day about persistence rather than skill, and the sun arrives somewhere around 7,000 m.",
        "The <strong>summit (7,246 m)</strong> is a broad ridge. The Dhaulagiri chain runs east from beneath your feet — <strong>Churen Himal, Gurja Himal</strong> and, at the far end, <strong>Dhaulagiri I</strong>; north is the dry folded country of <strong>Dolpo</strong> running to the Tibetan border; and south, on a clear day, the middle hills fall away toward the plains of India.",
        "The descent reverses the slopes to high camp and then Camp 2. Twelve to sixteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,200 m) to Putha Hiunchuli Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...PUTHA_BC,
      html: p(
        "Camp 2 comes down and the slopes are descended on the fixed ropes, with the line stripped as the team goes — slow work and not optional, since nothing is left on the mountain.",
        "The glacier is crossed roped in the cold of the morning for the last time.",
        "<strong>Base camp (4,900 m)</strong> by early afternoon, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Six to eight hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Putha Hiunchuli Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...PUTHA_BC,
      html: p(
        "The first of three reserve days. Putha's weather is more settled than most 7,000 m peaks', but wind on the summit ridge still closes it, and a team with days in hand has a second attempt.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest — and for a good many climbers on this mountain it is also the day of thinking seriously about an 8,000 m peak. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Putha Hiunchuli Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...PUTHA_BC,
      html: p(
        "The second reserve day. Three of them exist because base camp is six days from the airstrip and an expedition that runs out of margin here cannot simply extend — the flights, the porters and the food are all committed.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Putha Hiunchuli Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the mountain.",
      ...PUTHA_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Juphal goes back out on porters and pack animals, and the Department of Tourism deposit is refunded against it. In country this remote, what an expedition leaves behind stays for a very long time.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last of the light looking north into Dolpo. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,900 m) to Dhule (3,340 m)",
      elevation: "3,340 m",
      accommodation: "Dhule",
      placeDescription: "The herders' camp in the forest, on the walk out from the mountain.",
      ...DHULE,
      html: p(
        "Base camp goes onto porters and pack animals and the team walks out over the pass and down through <strong>Purbang</strong>, losing height fast with the country greening as it drops.",
        "The juniper comes back, then the first birch, and by the afternoon the trail is in proper forest again with birds in it — which after a fortnight on moraine and glacier registers as a considerable event.",
        "<strong>Dhule (3,340 m)</strong> in the late afternoon, at the herders' clearing the group camped in on the way up. It is the first night below 4,000 m in three weeks and everyone sleeps through it. Around 8 hours. Overnight at Dhule.",
      ),
    },
    {
      title: "Trek from Dhule (3,340 m) to Tarakot (2,540 m)",
      elevation: "2,540 m",
      accommodation: "Tarakot",
      placeDescription: "The old fortified village above the Thuli Bheri, and the first settlement in a fortnight.",
      ...TARAKOT,
      html: p(
        "Down the forested valley to the Thuli Bheri, losing 800 m through pine and oak on a trail that is easy walking after everything above it.",
        "<strong>Tarakot (2,540 m)</strong> is the first village since the approach — houses, fields, children and buffalo — and after two weeks with no other people it is a noisy and welcome place.",
        "The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Around 6 hours. Overnight at Tarakot.",
      ),
    },
    {
      title: "Trek from Tarakot (2,540 m) to Juphal (2,475 m) via Dunai",
      elevation: "2,475 m",
      accommodation: "Juphal",
      placeDescription: "The airstrip above the Thuli Bheri, and the end of the walking.",
      ...JUPHAL,
      html: p(
        "The last walking day, west down the <strong>Thuli Bheri</strong> gorge to <strong>Dunai</strong> and then the climb back up to the airstrip.",
        "Dunai has shops, a bank and the first cold drink in three weeks, and most groups take longer over lunch than they intend to.",
        "<strong>Juphal (2,475 m)</strong> is a short steep hour above the river. The expedition's cargo is weighed and loaded for the morning flight, and the crew from Dolpa go home from here. Around 6 to 7 hours. Overnight at Juphal.",
      ),
    },
    {
      title: "Fly from Juphal (2,475 m) to Nepalgunj (150 m) and on to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "An early flight south to <strong>Nepalgunj (150 m)</strong> — forty-five minutes and a drop of more than two thousand metres, from hill country to the Terai plain in a single descent.",
        "The connecting flight to <strong>Kathmandu</strong> follows in the afternoon, weather and schedules permitting. Both legs are weather-dependent, which is why the itinerary carries spare days.",
        "Back in Kathmandu in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu — Boudhanath, Patan Durbar Square, or a slow breakfast on a roof terrace.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Putha is one of the three peaks we most often recommend before an 8,000 m expedition, and Manaslu, Himlung and Dhaulagiri I are the ones that usually come up next.",
      ),
    },
  ],
};
