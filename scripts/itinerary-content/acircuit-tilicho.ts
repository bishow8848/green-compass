import { p, type TrekDays } from "./types";

/**
 * Annapurna Circuit with the Tilicho Lake detour.
 *
 * Note: the day 9 entry previously carried the Thorong La crossing in its
 * description while its title covers Yak Kharka to Thorong Phedi. The text
 * below is written to match each day's own title.
 */
export const annapurnaCircuitTilichoTreks: TrekDays[] = [
  {
    slug: "annapurna-circuit-with-tilicho-lake-trek",
    days: [
      {
        index: 0,
        title: "Arrival in Kathmandu (1,400 m)",
        html: p(
          "You land at Tribhuvan International Airport in <strong>Kathmandu (1,400 m)</strong>, where our representative meets you and transfers you to your hotel.",
          "Your guide runs the pre-departure briefing. The <strong>Annapurna Circuit with Tilicho Lake</strong> is the classic circuit with its most demanding worthwhile addition: instead of going straight from Manang toward the pass, the route detours west to <strong>Tilicho Lake (4,919 m)</strong>, one of the highest lakes in the world, before rejoining the main trail for <strong>Thorong La (5,416 m)</strong>.",
          "That combination means two separate excursions above 4,900 m, and the itinerary is built with the acclimatisation to support them. Your guide checks your equipment — this trek needs genuine cold-weather kit, as the pass morning is often well below freezing — and confirms your ACAP permit and TIMS card.",
          "The rest of the day is yours to rest after the flight or walk around Thamel. Overnight in Kathmandu.",
        ),
      },
      {
        index: 1,
        title: "Drive from Kathmandu (1,400 m) to Besisahar (830 m) and Jeep to Chame (2,670 m)",
        html: p(
          "A long travel day that covers in one go what used to take four days of walking.",
          "The morning is spent on the Prithvi Highway heading west out of the Kathmandu valley, following the Trishuli River through its gorge before turning north at Dumre toward <strong>Besisahar (830 m)</strong>, the traditional starting point of the circuit.",
          "At Besisahar you change into a <strong>4WD jeep</strong> for the rough road up the <strong>Marsyangdi valley</strong>. This section is spectacular and genuinely rugged — a narrow track cut into the valley wall, crossing suspension bridges and passing directly under waterfalls, with the river running fast and grey below. Progress is slow and bumpy, but the scenery more than compensates.",
          "The valley narrows and climbs steadily through <strong>Jagat</strong> and <strong>Tal</strong>, and the vegetation shifts from subtropical to pine as you gain height. <strong>Chame (2,670 m)</strong> is the administrative headquarters of Manang district. Overnight in Chame.",
        ),
      },
      {
        index: 2,
        title: "Trek from Chame (2,670 m) to Pisang (3,250 m)",
        html: p(
          "The first full walking day, climbing gently for around 600 m through pine forest into the upper Marsyangdi.",
          "The trail leaves Chame and follows the river upstream through deep forest of blue pine and fir. After around two hours you reach the astonishing <strong>Paungda Danda</strong> — a curved rock slab rising more than 1,500 m in a single sweep from the riverbed, one of the most striking natural features on the entire circuit.",
          "Beyond it the valley opens and the climate changes noticeably. You are crossing into the rain shadow of the Annapurnas, and the vegetation begins thinning toward the dry, high-desert character of Manang.",
          "<strong>Annapurna II (7,937 m)</strong> dominates the view ahead, with Pisang Peak rising to the north. The trail passes through <strong>Lower Pisang (3,250 m)</strong>, a village of flat-roofed stone houses with prayer flags and a gompa — the architecture and the Buddhist culture here are recognisably Tibetan. Around 5–6 hours. Overnight in Pisang.",
        ),
      },
      {
        index: 3,
        title: "Trek from Pisang (3,250 m) to Manang (3,540 m)",
        html: p(
          "One of the finest days on the circuit, and an important one for acclimatisation.",
          "There are two routes. The <strong>upper trail</strong> via <strong>Ghyaru (3,730 m)</strong> and <strong>Ngawal (3,660 m)</strong> climbs steeply out of Pisang and is significantly harder work, but it is the one to take: the extra height helps acclimatisation, and the views across the valley to the <strong>Annapurna II, III and IV</strong> wall are the best on the whole route. Ghyaru and Ngawal are old, tightly packed Tibetan-style villages with mani walls and chortens.",
          "The trail then descends to rejoin the valley floor at <strong>Braga (3,450 m)</strong>, where a 500-year-old gompa is built into the cliff above the village and holds an important collection of statues and thangkas.",
          "A short walk further brings you to <strong>Manang (3,540 m)</strong>, the largest settlement in the upper valley, with <strong>Gangapurna (7,455 m)</strong> and its glacier directly across the river. Around 6–7 hours. Overnight in Manang.",
        ),
      },
      {
        index: 4,
        title: "Acclimatization and Exploration Day in Manang (3,540 m)",
        html: p(
          "A rest day at 3,540 m — but an active one. The principle is to <em>climb high and sleep low</em>, so the day involves a hike rather than sitting still.",
          "Options include the climb to the <strong>Gangapurna Lake</strong> viewpoint just above the village, the steeper ascent toward <strong>Praken Gompa (3,950 m)</strong> where a resident lama gives blessings to trekkers heading for the pass, or the longer walk toward <strong>Ice Lake (4,600 m)</strong> for those feeling strong. Any of these gets you several hundred metres above sleeping height and back down again, which is exactly what the body needs.",
          "Manang itself is worth time. It is a genuine high-altitude town of flat-roofed stone houses, with bakeries, gear shops and a small cinema. The <strong>Himalayan Rescue Association</strong> runs a free daily talk on altitude sickness — attend it, particularly with Tilicho and Thorong La both ahead.",
          "Overnight in Manang.",
        ),
      },
      {
        index: 5,
        title: "Trek from Manang (3,540 m) to Khangsar (3,734 m)",
        html: p(
          "A short, easy day that turns off the main circuit and starts the Tilicho detour.",
          "Most trekkers leaving Manang head north-west toward Yak Kharka and the pass. You instead cross the Marsyangdi and follow the <strong>Khangsar Khola</strong> west, into a side valley that sees a fraction of the traffic. The change is immediate — within an hour the crowds are gone.",
          "The walking is gentle, gaining under 200 m across open, dry hillside with almost no vegetation beyond scrub and hardy grass. This is high desert: the Annapurna wall to the south blocks the monsoon, and the landscape is brown, grey and enormous.",
          "<strong>Khangsar (3,734 m)</strong> is described locally as the last village of Nepal in this direction — a small, weathered settlement of stone houses and a modest gompa. The short day is deliberate, keeping the altitude gain low before the serious climbing starts. Around 3–4 hours. Overnight in Khangsar.",
        ),
      },
      {
        index: 6,
        title: "Trek from Khangsar (3,734 m) to Tilicho Base Camp (4,150 m)",
        html: p(
          "A short day in distance but a demanding one in character, crossing the most exposed terrain on the trek.",
          "The trail climbs from Khangsar past the ruins of the old <strong>Khangsar gompa</strong> and continues west into an increasingly barren valley. After the last teahouse the route reaches the section this detour is known for: the <strong>landslide traverse</strong>, a narrow path cut across steep, loose scree slopes that drop several hundred metres to the river.",
          "It requires care and steady footing rather than technical skill, and it is best crossed in the morning before the wind gets up. Your guide will set the pace and spacing. Rockfall is a genuine consideration here, so this is not a section to linger on.",
          "Beyond the traverse the valley opens into a wide, stony basin. <strong>Tilicho Base Camp (4,150 m)</strong> is a small group of lodges in an otherwise entirely empty landscape of rock and sky. Nights are cold. Around 4–5 hours. Overnight at Tilicho Base Camp.",
        ),
      },
      {
        index: 7,
        title: "Hike from Tilicho Base Camp (4,150 m) to Tilicho Lake (4,919 m) and Trek to Yak Kharka (4,050 m)",
        html: p(
          "The longest and hardest day of the trek: nearly 800 m of climbing to the lake, then a full descent and traverse back to the main circuit.",
          "You start before dawn. The trail climbs relentlessly up a series of switchbacks on open scree — there is no shelter and no water, and at this altitude the pace is necessarily slow. It takes most people three to four hours to reach the rim.",
          "<strong>Tilicho Lake (4,919 m)</strong> is one of the highest lakes in the world, roughly 4 km long, held in a bowl of bare rock beneath the Grande Barrière. It is frozen for much of the year; when open, the water is an intense turquoise from glacial rock flour. Nothing grows here at all. It is a genuinely austere, silent place.",
          "After time at the lake you descend to base camp, then recross the landslide section and traverse to <strong>Yak Kharka (4,050 m)</strong> on the main circuit. A very long day of 8–10 hours. Overnight at Yak Kharka.",
        ),
      },
      {
        index: 8,
        title: "Trek from Yak Kharka (4,050 m) to Thorong Phedi (4,450 m)",
        html: p(
          "A deliberately short day, positioning you at the foot of the pass with as much rest as possible.",
          "The trail climbs gently north from <strong>Yak Kharka (4,050 m)</strong> along the eastern side of the valley, through high pasture where yaks graze in summer. There is no forest at this height — the ground is grass, moss and rock, with the peaks of the Chulu range across the valley.",
          "After around an hour and a half the route crosses the <strong>Marsyangdi</strong> on a wooden bridge at <strong>Ledar</strong> and traverses a stretch of loose scree on the valley wall. This section is narrow and exposed in places and requires attention, particularly if there is snow.",
          "<strong>Thorong Phedi (4,450 m)</strong> — the name simply means \"foot of the hill\" — is a cluster of stone lodges in a bare hollow beneath the pass. Eat early, prepare your kit for a pre-dawn start, and sleep as much as the altitude allows. Around 3–4 hours. Overnight at Thorong Phedi.",
        ),
      },
      {
        index: 9,
        title: "Day 10: Trek from Thorong Phedi (4,450 m) to Muktinath (3,800 m) via Thorong La Pass (5,416 m)",
        html: p(
          "The big day of the circuit: over <strong>Thorong La (5,416 m)</strong>, one of the highest trekking passes in the world.",
          "You leave between 4 and 5 a.m. by head-torch. The start is the steepest part of the whole climb, a punishing set of switchbacks up to <strong>High Camp (4,880 m)</strong>. Above that the gradient eases but the altitude bites — the last stretch is a long, slow series of false summits across open snow and scree, walked at a deliberately slow pace with frequent short stops. The early start is not for the view but for the wind, which rises sharply through the morning.",
          "The pass itself is marked by a cairn and a mass of prayer flags, with mountains in every direction. It is bitterly cold and rarely a place to stay long.",
          "The descent is relentless — over 1,600 m of knee-punishing drop into the arid <strong>Mustang</strong> landscape, arriving at the pilgrimage town of <strong>Muktinath (3,800 m)</strong>, sacred to Hindus and Buddhists alike. 7–9 hours. Overnight in Muktinath.",
        ),
      },
      {
        index: 10,
        title: "Trek from Muktinath (3,800 m) to Jomsom (2,700 m)",
        html: p(
          "A descent into the Kali Gandaki, through some of the most distinctive landscape in Nepal.",
          "Before setting off, visit the <strong>Muktinath temple complex</strong> — the 108 water spouts, the eternal flame burning on natural gas beside a spring, and the Vishnu shrine that makes this one of the most important pilgrimage sites in the Himalaya.",
          "The trail then descends through the ancient village of <strong>Jharkot</strong>, with its ruined fort and red-walled monastery, and continues down to the <strong>Kali Gandaki</strong> — which, running between Dhaulagiri and Annapurna, carves the deepest gorge on earth.",
          "You reach <strong>Kagbeni (2,800 m)</strong>, a medieval-looking village of mud-brick alleyways and a red gompa, marking the checkpoint into restricted Upper Mustang. From here the route turns south down the broad, stony riverbed to <strong>Jomsom (2,700 m)</strong>. The valley wind here is famously strong from late morning, blowing hard up the gorge. Around 5–6 hours. Overnight in Jomsom.",
        ),
      },
      {
        index: 11,
        title: "Drive from Jomsom (2,700 m) to Pokhara (822 m)",
        html: p(
          "A long and dramatic road day, following the Kali Gandaki out of the mountains.",
          "The jeep road runs south down the gorge between <strong>Dhaulagiri (8,167 m)</strong> and <strong>Annapurna I (8,091 m)</strong> — the two eight-thousanders that make this the deepest valley in the world. The scenery changes completely over the course of the drive: the dry, treeless, Tibetan-influenced upper valley gives way to pine forest, then to the terraced green hillsides and banana palms of the middle hills.",
          "The road passes <strong>Marpha</strong>, a whitewashed village famous across Nepal for its apple orchards and apple brandy, and <strong>Tatopani</strong>, where hot springs run beside the river. It is rough going in sections and the driving is slow, with river crossings and landslide-prone stretches.",
          "The final hours run on sealed road through Beni and Baglung before <strong>Pokhara (822 m)</strong>. Arrive in the evening. Overnight in Pokhara.",
        ),
      },
      {
        index: 12,
        title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
        html: p(
          "The return along the Prithvi Highway to Kathmandu, around 200 km and most of the day.",
          "The road follows the <strong>Marsyangdi</strong> and then the <strong>Trishuli</strong> east, through the terraced middle hills of central Nepal. It is a relaxed way to end the trip, watching rural Nepal pass by — hillsides farmed in steps to impossible angles, roadside bazaars, suspension footbridges strung across the rivers, and rafting groups on the water below. We stop for lunch at a riverside restaurant along the way.",
          "As you approach the Kathmandu valley the road climbs over the rim at Naubise and drops into the city.",
          "You arrive in the late afternoon, transfer to your hotel, and have the evening free — time for a hot shower, last-minute shopping in Thamel for souvenirs, or a farewell meal with your guide and crew. Overnight in Kathmandu.",
        ),
      },
      {
        index: 13,
        title: "Departure from Kathmandu (1,400 m)",
        html: p(
          "The final day of the <strong>Annapurna Circuit with Tilicho Lake Trek</strong>.",
          "Depending on your flight time, there may be a few free hours in the morning. Thamel is the obvious place for last-minute purchases, and the nearby heritage sites — <strong>Boudhanath</strong>, <strong>Swayambhunath</strong> or <strong>Patan Durbar Square</strong> — are all worth a short visit if you have half a day, and make a fitting counterpoint to the mountains after two weeks of walking.",
          "Our representative collects you from your hotel and transfers you to <strong>Tribhuvan International Airport</strong> around three hours before departure.",
          "You leave having crossed one of the highest trekking passes in the world at <strong>Thorong La (5,416 m)</strong> and stood beside <strong>Tilicho Lake (4,919 m)</strong> — a combination that takes in the full range of the Annapurna region, from subtropical river valley to high-altitude desert.",
        ),
      },
    ],
  },
];
