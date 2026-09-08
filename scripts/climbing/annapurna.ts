import {
  AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, PKR_PLACE, p,
  type Climb, type ClimbDay,
} from "./types";
import {
  ANNAPURNA_BC, ANNAPURNA_I, ANNAPURNA_NORTH_BC, ANNAPURNA_SOUTH, BAMBOO, BESISAHAR, CHAME,
  CHOMRONG, CHULU_EAST, CHULU_EAST_BC, CHULU_EAST_HIGH_CAMP, CHULU_FAR_EAST, CHULU_FAR_EAST_BC,
  CHULU_WEST, CHULU_WEST_BC, CHULU_WEST_HIGH_CAMP, DEURALI_ABC, DHARAPANI, GANGAPURNA, GHANDRUK,
  JOMSOM, KHANGSAR, MANANG, MBC, MUKTINATH, NAYAPUL, NGAWAL, PISANG, PISANG_BC, PISANG_HIGH_CAMP,
  PISANG_PEAK, SINGU_CHULI, THARPU_CHULI, THARPU_CHULI_BC, THORONG_LA, THORONG_PHEDI, TILICHO_BC,
  TILICHO_LAKE, TILICHO_PEAK, YAK_KHARKA,
} from "./places";

/**
 * The Annapurna region: the Chulu group and Pisang Peak above Manang, Tilicho
 * and the Annapurnas themselves, and the two peaks inside the Annapurna
 * Sanctuary.
 *
 * Two approaches serve the region and they have nothing in common. The Manang
 * side is reached by road up the Marsyangdi and then on foot through Chame and
 * Pisang — the classic Annapurna Circuit as far as Manang, and the way in to
 * everything on the north side of the range. The Sanctuary is reached from
 * Pokhara through Ghandruk and Chomrong, a completely different valley system
 * with its own weather and its own character.
 */

// Expedition camp positions on the Annapurna peaks, placed on the route line
// between mapped points; the survey summits themselves come from ./places.
const TILICHO_C1 = { lng: 83.8667, lat: 28.6833 }; // approx
const TILICHO_HIGH_CAMP = { lng: 83.8567, lat: 28.6917 }; // approx
const GANGAPURNA_BC = { lng: 83.9833, lat: 28.6333 }; // approx
const GANGAPURNA_C1 = { lng: 83.97, lat: 28.6167 }; // approx
const GANGAPURNA_HIGH_CAMP = { lng: 83.9667, lat: 28.6083 }; // approx
const ANNAPURNA_C1 = { lng: 83.875, lat: 28.625 }; // approx
const ANNAPURNA_C2 = { lng: 83.8583, lat: 28.61 }; // approx
const ANNAPURNA_C3 = { lng: 83.8417, lat: 28.6017 }; // approx
const ANNAPURNA_C4 = { lng: 83.8267, lat: 28.5983 }; // approx
const ANNAPURNA_SOUTH_BC = { lng: 83.8167, lat: 28.5417 }; // approx
const ANNAPURNA_SOUTH_C1 = { lng: 83.81, lat: 28.5333 }; // approx
const ANNAPURNA_SOUTH_C2 = { lng: 83.8067, lat: 28.525 }; // approx

// The Kali Gandaki road head and the Miristi Khola approach to Annapurna I.
const BENI = { lng: 83.5667, lat: 28.35 }; // approx
const TATOPANI = { lng: 83.65, lat: 28.5 }; // approx
const LETE = { lng: 83.6167, lat: 28.6333 }; // approx
const MIRISTI_LOWER = { lng: 83.7333, lat: 28.6167 }; // approx
const MIRISTI_UPPER = { lng: 83.8167, lat: 28.6167 }; // approx

const ANNAPURNA_PERMITS =
  "Annapurna Conservation Area Permit (ACAP) and the Trekkers' Information Management System (TIMS) card";

const MANANG_SHERPA =
  "One climbing Sherpa for every two climbers above base camp, with all their equipment, wages and insurance.";

/**
 * The road and trail from Kathmandu to Manang, shared by every climb on the
 * north side of the range: arrival, the Kathmandu working day, two days of
 * jeep up the Marsyangdi, and the walk through Chame and Pisang to the Manang
 * valley. Seven days, ending at 3,540 m with the group acclimatising.
 */
function manangApproach(planWord: string): ClimbDay[] {
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
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Kathmandu (1,400 m) – Climbing Briefing, Permits and Equipment Check",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the permits are issued and the climbing equipment is fitted and checked.",
      ...KATHMANDU,
      html: p(
        `Your guide runs the full briefing at the hotel: the ${planWord} plan, the acclimatisation profile, the summit day hour by hour, and the decisions that get made on the mountain and by whom.`,
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over the layers you will actually climb in, and anything unsuitable swapped for rental kit here rather than discovered at 5,300 m.",
        "Our office lodges the <strong>climbing permit</strong>, the Annapurna Conservation Area permit and the TIMS card today, which needs your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Dharapani (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Dharapani",
      placeDescription: "A village at the junction of the Marsyangdi and Dudh Khola, at the road head for upper Manang.",
      ...DHARAPANI,
      html: p(
        "A long day on the road. The <strong>Prithvi Highway</strong> runs west out of the Kathmandu valley beside the Trishuli, and at Mugling the route turns north for <strong>Besisahar</strong>, the old start of the Annapurna Circuit.",
        "From Besisahar the tarmac ends and a jeep takes over, grinding up the <strong>Marsyangdi</strong> gorge on a rough road cut into the valley wall — spectacular, slow and not for anyone who dislikes exposure on a road.",
        "<strong>Dharapani (1,860 m)</strong> sits at the junction with the Dudh Khola, where the Manaslu Circuit comes in from the east. Around 9 to 10 hours in total. Overnight at Dharapani.",
      ),
    },
    {
      title: "Trek from Dharapani (1,860 m) to Chame (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, in pine forest beside the Marsyangdi.",
      ...CHAME,
      html: p(
        "The walking starts. The trail climbs north-west up the Marsyangdi through <strong>Bagarchhap</strong> and <strong>Danaque</strong>, and the vegetation changes as it goes — subtropical scrub gives way to blue pine, and the air cools noticeably.",
        "At <strong>Timang</strong> the valley opens and <strong>Manaslu</strong> shows behind you for the first time, an 8,000 m wall filling the eastern skyline.",
        "<strong>Chame (2,670 m)</strong> is the district headquarters, with a bank, a police check post and hot springs beside the river. Around 5 to 6 hours. Overnight at Chame.",
      ),
    },
    {
      title: "Trek from Chame (2,670 m) to Upper Pisang (3,300 m)",
      elevation: "3,300 m",
      accommodation: "Upper Pisang",
      placeDescription: "A Tibetan-style village of stone houses on a hillside above the Marsyangdi, facing Annapurna II.",
      ...PISANG,
      html: p(
        "Through pine and fir up a steep narrowing valley to <strong>Bhratang</strong>, where an apple orchard sits improbably in the gorge, and then past the <strong>Paungda Danda</strong> — a 1,500 m curved rock slab that fills the whole southern side of the valley and looks like the wall of a stadium.",
        "Above it the valley opens into the dry upper Marsyangdi, the trees thin out, and the character turns Tibetan.",
        "<strong>Upper Pisang (3,300 m)</strong> is a village of flat-roofed stone houses on the hillside with a gompa above it and <strong>Annapurna II</strong> directly opposite. Around 5 to 6 hours. Overnight at Upper Pisang.",
      ),
    },
    {
      title: "Trek from Upper Pisang (3,300 m) to Ngawal (3,660 m)",
      elevation: "3,660 m",
      accommodation: "Ngawal",
      placeDescription: "A medieval Tibetan village on the high route above the Marsyangdi, below the Chulu peaks.",
      ...NGAWAL,
      html: p(
        "The high route, and it is worth the extra climb. The trail contours and climbs above the north side of the valley to <strong>Ghyaru (3,730 m)</strong>, a village of packed stone alleys that has not changed much in centuries.",
        "The whole <strong>Annapurna range</strong> stands opposite for the entire walk — Annapurna II, III and IV, and Gangapurna — across a valley two kilometres deep. It is one of the great balcony walks in Nepal.",
        "<strong>Ngawal (3,660 m)</strong> is a similar village an hour further on, with the <strong>Chulu peaks</strong> rising directly behind it to the north. Around 4 to 5 hours. Overnight at Ngawal.",
      ),
    },
    {
      title: "Acclimatisation Day at Ngawal (3,660 m)",
      elevation: "3,660 m",
      accommodation: "Ngawal",
      placeDescription: "The Tibetan village below the Chulu group, where the acclimatisation walk is made.",
      ...NGAWAL,
      html: p(
        "Climb high, sleep low. The morning walk goes up the ridge behind the village toward <strong>4,200 m</strong>, on open hillside with juniper and grazing yaks, and comes back down.",
        "The height gained is the point, and the view is the bonus: the Annapurnas across the valley, the Marsyangdi running west toward Manang, and above you the flank of the <strong>Chulu</strong> massif with the base camp approach visible on it.",
        "Back in Ngawal by early afternoon. Your guide takes the first oxygen saturation readings tonight, and the crew sorts loads for the climb. Around 4 hours. Overnight at Ngawal.",
      ),
    },
  ];
}


/**
 * The Annapurna Sanctuary approach, shared by the peaks inside the amphitheatre:
 * arrival, the Kathmandu working day, the drive to Pokhara, and the walk in
 * through Ghandruk, Chomrong and the Modi Khola gorge to Annapurna Base Camp.
 * Nine days, and a completely different valley system from the Manang side —
 * wetter, greener, and walled by the highest ring of mountains in Nepal.
 */
function sanctuaryApproach(planWord: string): ClimbDay[] {
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
        "Your climbing guide calls at the hotel in the evening to introduce themselves and confirm tomorrow's schedule. Overnight in Kathmandu.",
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
        "Then the <strong>equipment check</strong>. Boots are tried with crampons on, harnesses fitted over the layers you will actually climb in, and anything unsuitable swapped for rental kit here rather than discovered at altitude.",
        "Our office lodges the <strong>climbing permit</strong>, the Annapurna Conservation Area permit and the TIMS card today, which needs your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
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
        "<strong>Pokhara (822 m)</strong> arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurnas and the fishtail summit of Machhapuchhre standing over it. The crew does the final load sort here. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive to Siwai and Trek to Ghandruk (1,940 m)",
      elevation: "1,940 m",
      accommodation: "Ghandruk",
      placeDescription: "A large Gurung village of slate-roofed stone houses on a hillside facing Annapurna South.",
      ...GHANDRUK,
      html: p(
        "A two-hour drive north-west out of Pokhara through terraced farmland to the road head at <strong>Siwai</strong>, where the walking starts.",
        "The trail climbs through rice terraces and bamboo into the Modi Khola valley, warm and green and full of birds — this side of the range is a world away from the dry Manang valley.",
        "<strong>Ghandruk (1,940 m)</strong> is one of the largest Gurung villages in Nepal, a steep grid of slate-roofed stone houses with <strong>Annapurna South</strong> and <strong>Machhapuchhre</strong> filling the northern sky. Around 4 hours of walking. Overnight at Ghandruk.",
      ),
    },
    {
      title: "Trek from Ghandruk (1,940 m) to Chomrong (2,170 m)",
      elevation: "2,170 m",
      accommodation: "Chomrong",
      placeDescription: "A village strung down a hillside at the entrance to the Modi Khola gorge, the gateway to the Sanctuary.",
      ...CHOMRONG,
      html: p(
        "A day of stone staircases. The trail drops steeply to the <strong>Kimrong Khola</strong>, crosses it, and climbs just as steeply up the far side through terraced fields and rhododendron.",
        "Nepali hill trails do not contour; they go down to the river and back up, and this is the day that teaches you that.",
        "<strong>Chomrong (2,170 m)</strong> is strung down a hillside at the entrance to the Modi Khola gorge and is the last real village before the Sanctuary — the last ATM, the last shops, and by common consent the best apple pie in the Annapurnas. Around 5 to 6 hours. Overnight at Chomrong.",
      ),
    },
    {
      title: "Trek from Chomrong (2,170 m) to Bamboo (2,310 m)",
      elevation: "2,310 m",
      accommodation: "Bamboo",
      placeDescription: "A cluster of lodges in dense bamboo forest on the floor of the Modi Khola gorge.",
      ...BAMBOO,
      html: p(
        "Down the long stone staircase out of Chomrong to the <strong>Chomrong Khola</strong>, then up the other side to Sinuwa and into the gorge proper.",
        "From here the valley closes in and the trail runs north between walls that rise a vertical kilometre on both sides. The forest is dense, wet and full of langur monkeys, and the light goes early.",
        "<strong>Bamboo (2,310 m)</strong> is a handful of lodges in the bamboo thicket the place is named for. It is humid, green and about as unlike a climbing base camp as anywhere in Nepal. Around 5 hours. Overnight at Bamboo.",
      ),
    },
    {
      title: "Trek from Bamboo (2,310 m) to Deurali (3,200 m)",
      elevation: "3,200 m",
      accommodation: "Deurali",
      placeDescription: "Lodges at the head of the Modi Khola gorge, where the Sanctuary begins to open out.",
      ...DEURALI_ABC,
      html: p(
        "North up the gorge through <strong>Dovan</strong> and past the shrine at <strong>Himalaya</strong>, climbing steadily as the bamboo gives way to rhododendron and then to birch.",
        "This section of the gorge is <strong>avalanche country</strong> in spring and after heavy snow, and there are two or three places where the guide will move the group across quickly and without stopping. It is the reason this trail closes some winters.",
        "<strong>Deurali (3,200 m)</strong> sits where the gorge finally begins to open. Around 5 hours. Overnight at Deurali.",
      ),
    },
    {
      title: "Trek from Deurali (3,200 m) to Machhapuchhre Base Camp (3,700 m)",
      elevation: "3,700 m",
      accommodation: "Machhapuchhre Base Camp",
      placeDescription: "A lodge settlement at the gateway of the Annapurna Sanctuary, beneath the fishtail summit.",
      ...MBC,
      html: p(
        "The gorge opens and the <strong>Annapurna Sanctuary</strong> reveals itself — a glacial amphitheatre ringed by Annapurna I, Annapurna South, Hiunchuli, Gangapurna, Tarke Kang and Machhapuchhre, with no gap in the wall anywhere except the gorge you walked up.",
        "It is one of the great arrivals in Nepal, and it happens in about twenty minutes of walking.",
        "<strong>Machhapuchhre Base Camp (3,700 m)</strong> sits at the gateway beneath the fishtail summit, which is closed to climbing and has never been officially summited. Around 3 hours. Overnight at MBC.",
      ),
    },
    {
      title: "Trek from Machhapuchhre Base Camp (3,700 m) to Annapurna Base Camp (4,130 m)",
      elevation: "4,130 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The lodges at the head of the Annapurna Sanctuary, beneath the south face of Annapurna I.",
      ...ANNAPURNA_BC,
      html: p(
        "A short climb up the moraine into the heart of the Sanctuary, gaining 430 m in two to three hours on an easy trail.",
        "<strong>Annapurna Base Camp (4,130 m)</strong> stands directly beneath the <strong>south face of Annapurna I</strong> — three thousand metres of it, the wall Bonington's team climbed in 1970 and one of the great faces in the Himalaya.",
        "The afternoon is spent acclimatising and looking at it, and at sunrise the whole ring turns pink at once. There is a memorial here to climbers lost on the mountain, including Anatoli Boukreev. Around 3 hours. Overnight at Annapurna Base Camp.",
      ),
    },
  ];
}

// ─────────────────────────────────────────────────────────────────────────────

export const chuluWestPeakClimbing: Climb = {
  region: "Annapurna Region",
  price: 3150,
  difficulty: "difficult",
  maxAltitude: 6419,
  grade: "PD+",
  center: [84.05, 28.68],
  zoom: 10,
  content: {
    slug: "chulu-west-peak-climbing",
    title: "Chulu West Peak Climbing",
    overview:
      "<p><strong>Chulu West (6,419 m)</strong> is the best 6,000 m peak on the Annapurna side of Nepal, and the one most people have never heard of. It stands north of the Manang valley above <strong>Ngawal</strong>, and its summit is the great viewpoint of the whole range: <strong>Annapurna II, III and IV, Gangapurna, Tilicho and Manaslu</strong> laid out across a valley two kilometres deep, with the Tibetan plateau running north behind you.</p><p>The climbing is a genuine <strong>PD+</strong> — a glacier approach, a snow and ice slope at 40 to 45 degrees on fixed rope, and a broad summit ridge — and the trip is built around the classic <strong>Annapurna Circuit</strong>. You walk in through Chame and Pisang on the high route past the medieval villages of Ghyaru and Ngawal, climb the peak, and then walk out over the <strong>Thorong La (5,416 m)</strong> to Muktinath and Jomsom. It is a climbing trip and one of Nepal's great treks in the same nineteen days.</p>",
    highlights: [
      ["Summit Chulu West (6,419 m)", "The finest viewpoint on the north side of the Annapurna range, and a genuine PD+ snow and ice climb."],
      ["The Annapurna Range at Eye Level", "Annapurna II, III and IV, Gangapurna, Tilicho and Manaslu from one summit."],
      ["The Ghyaru and Ngawal High Route", "Approach on the balcony trail past two medieval Tibetan villages, high above the Marsyangdi."],
      ["Cross the Thorong La (5,416 m)", "Walk out over the highest pass on the Annapurna Circuit to Muktinath and the Kali Gandaki."],
      ["A Climb and a Classic Trek Together", "The Annapurna Circuit and a 6,419 m summit in one nineteen-day trip."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. The Manang valley sits in the rain shadow of the Annapurnas and stays drier than the Khumbu through both seasons, which makes it more reliable than its altitude suggests.</p><p><strong>October</strong> is the classic month — clear, stable and cold, with the best summit views of the year and the Thorong La in good condition. Spring is warmer and hazier, with rhododendron in flower on the walk in and more snow on the peak. December to February is climbable in a settled window but the Thorong La closes regularly and the high camp becomes serious. The monsoon affects the lower approach more than the peak itself.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD+</strong>. From <strong>high camp at 5,300 m</strong> the route crosses a glacier roped as a team, weaving between crevasses, and then climbs a <strong>snow and ice slope of 40 to 45 degrees</strong> on fixed rope for two to three hours. Above it a broad snow ridge leads to the summit, exposed but not narrow.</p><p>Summit day runs <strong>eight to eleven hours</strong> from high camp, starting around two in the morning. It is comparable to Island Peak in difficulty and slightly higher, and the crevassed glacier means rope-team technique matters here in a way it does not on a purely fixed-rope peak. The descent abseils the steep section and reverses the glacier.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required and Chulu West is regularly climbed as a first Himalayan peak. What you need is <strong>strong hill fitness</strong> and previous multi-day trekking above 4,000 m. The training day at base camp covers crampons, ice axe, jumar, abseil and rope-team travel from the beginning.</p><p>Acclimatisation is built into the Circuit approach: two nights at 3,300 to 3,660 m in Pisang and Ngawal with a climb to 4,200 m, then two nights at base camp at 4,700 m, then the high camp. It is a gentler profile than most Khumbu peaks and one reason the success rate here is high. The <strong>Thorong La</strong> on the way out, at 5,416 m, is comfortable on a body that has been to 6,419 m.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the Circuit and none of the climbing, and many travel policies exclude roped glacier travel and fixed-rope use by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Manang has an airstrip and a helipad and is one of the more accessible climbing areas in Nepal for evacuation, with helicopters reaching base camp in good conditions. They are still dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the Circuit. A <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>The Manang valley is dry, bright and <strong>very windy</strong> in the afternoons, so a buff and glasses matter as much as the warm layers. We provide all group climbing equipment and our Sherpas fix the ice slope. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "How does Chulu West compare with Island Peak?", answer: "Similar in grade and 230 m higher. Island Peak concentrates its difficulty into one 100 m ice headwall; Chulu West spreads it over a longer, gentler slope with a crevassed glacier below it. Most climbers find Chulu West the easier summit day and the better mountain, and it has a fraction of the traffic." },
      { question: "Which Chulu is this, exactly?", answer: "The Chulu group has three permitted summits — West (6,419 m), East (6,584 m) and Far East (6,059 m) — and operators have historically been vague about which one they climb. We are explicit: this itinerary climbs Chulu West by its glacier and south-west slope, and the certificate names it." },
      { question: "Do we walk the full Annapurna Circuit?", answer: "The northern half of it — Besisahar to Manang by road and trail, then the Thorong La to Muktinath and Jomsom. The southern section through Tatopani and Ghorepani is not included, and few people walk it now that the road reaches Muktinath." },
      { question: "How hard is the Thorong La after the climb?", answer: "Straightforward. It is a long day — around 1,000 m of ascent to 5,416 m and a 1,600 m descent — but on a body that has just summited at 6,419 m it is a walk rather than an ordeal. It is also one of the great pass days in Nepal." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,700 m in the valley above Ngawal, and high camp at 5,300 m on the moraine below the glacier. Both are tented, with a mess tent, kitchen tent and toilet tent and a cook crew. There are no lodges above Ngawal on this side." },
      { question: "What is the summit success rate?", answer: "Around 80 to 85 percent on our departures, which is high and reflects the gentle acclimatisation profile of the Circuit approach as much as the climbing. Wind on the summit ridge is the commonest reason for turning back." },
      { question: "Is the glacier crevassed?", answer: "Yes, and it is why we spend the training day on rope-team travel as well as fixed rope. The crossing from high camp weaves between open crevasses on a marked line, roped, in the dark. It takes an hour or so and it is the section that most distinguishes this peak from a purely fixed-rope climb." },
      { question: "Can I combine Chulu West with Tilicho Lake?", answer: "Yes, and it is a good addition — Tilicho Lake at 4,919 m sits west of Manang and adds three days from the Circuit. It is a superb detour and improves acclimatisation. We are glad to quote it as an extension." },
      { question: "How do we get back from Jomsom?", answer: "By a twenty-minute flight to Pokhara, weather permitting, or by jeep down the Kali Gandaki if the flights are grounded. Both are included, and the itinerary carries a night in Pokhara so that a grounded morning does not threaten your onward travel." },
      { question: "Is there mobile signal and charging on the route?", answer: "NTC and Ncell cover the Circuit as far as Manang and again from Muktinath, and most lodges sell Wi-Fi and charging. Base camp and high camp have neither, so carry a power bank. Manang also has ATMs, which is unusual at that altitude." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Flight from Jomsom to Pokhara after the trek, subject to weather, with jeep transport as the alternative."],
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private tourist bus or car from Pokhara to Kathmandu at the end of the trip.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "One night of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at Chulu West base camp (4,700 m) and high camp (5,300 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Chulu West, ${ANNAPURNA_PERMITS}.`,
      sherpa: MANANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the ice slope by our climbing Sherpas ahead of the summit push.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Ngawal to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
    },
    porterDays: 14,
    gearRentalDays: 14,
    flightAddons: ["pkr-ktm"],
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 19-day itinerary climbing Chulu West (6,419 m) from the Manang valley, approached on the Annapurna Circuit high route through Ghyaru and Ngawal and finishing over the Thorong La to Muktinath and Jomsom.",
    inExDescription:
      "The Jomsom flight, jeep transport up the Marsyangdi, Kathmandu and Pokhara hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Chulu West Peak Climbing (6,419 m) — 19 Days | Green Compass Treks",
      description:
        "Climb Chulu West (6,419 m) above Manang, the finest viewpoint on the north side of the Annapurnas, and walk out over the Thorong La. 19 days combining a PD+ glacier climb with the Annapurna Circuit.",
      keywords:
        "chulu west peak climbing, chulu west 6419m, annapurna peak climbing, manang climbing, thorong la, chulu west cost",
      tags: "Chulu West, Annapurna Region, Peak Climbing, 6000m Peak, Annapurna Circuit, Thorong La",
    },
  },
  days: [
    ...manangApproach("nineteen-day"),
    {
      title: "Trek from Ngawal (3,660 m) to Chulu West Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Chulu West Base Camp",
      placeDescription: "A tented camp in the valley above Ngawal, on the moraine below the Chulu West glacier.",
      ...CHULU_WEST_BC,
      html: p(
        "North out of Ngawal on a yak trail that leaves the Circuit within twenty minutes and climbs into a side valley almost nobody walks up.",
        "The path works up through juniper scrub and grazing land and then onto moraine, gaining a thousand metres, with the valley narrowing and the glacier appearing at its head.",
        "<strong>Chulu West Base Camp (4,700 m)</strong> is a tented camp on flat ground below the moraine crest. The crew arrives ahead of you and camp is standing when you get there. The whole Annapurna range fills the southern horizon behind you. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Chulu West Base Camp",
      placeDescription: "The base camp below the glacier, where the climbing skills are taught before the summit push.",
      ...CHULU_WEST_BC,
      html: p(
        "The training day, and it covers everything the peak asks for. On the glacier ice above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team with correct spacing, ascending fixed line on a jumar, and abseiling</strong>.",
        "Rope-team travel gets the most attention, because the glacier above high camp is crevassed and is crossed roped in the dark rather than on fixed line.",
        "In the afternoon we walk part-way toward high camp and come back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>fixing the ice slope</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,700 m) to Chulu West High Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Chulu West High Camp",
      placeDescription: "A tented camp on the moraine at 5,300 m, at the edge of the Chulu West glacier.",
      ...CHULU_WEST_HIGH_CAMP,
      html: p(
        "A short but steep morning up the moraine, gaining 600 m in three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,300 m)</strong> sits on rubble at the lip of the glacier, exposed to the wind that funnels down this valley every afternoon. It is not comfortable and it is not meant to be.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Chulu West (6,419 m) and Descend to Base Camp (4,700 m)",
      elevation: "6,419 m",
      accommodation: "Chulu West Base Camp",
      placeDescription: "The 6,419 m summit of Chulu West, the great viewpoint of the northern Annapurnas.",
      ...CHULU_WEST,
      html: p(
        "Roped and moving by two in the morning. The first two hours cross the <strong>glacier</strong> in the dark, weaving between crevasses on the line the Sherpas marked yesterday, with the team spaced correctly on the rope.",
        "At the far side the ground steepens into a <strong>snow and ice slope of 40 to 45 degrees</strong>, climbed on fixed rope for two to three hours as the sky lightens over Manaslu. Above it a broad snow ridge — exposed but not narrow — leads to the top.",
        "From the <strong>summit (6,419 m)</strong> the view is the reason to climb this particular mountain: <strong>Annapurna II, III and IV, Gangapurna and Tilicho</strong> across a valley two kilometres deep, <strong>Manaslu</strong> to the east, Dhaulagiri west beyond the Kali Gandaki, and the brown Tibetan plateau running north.",
        "The descent abseils the steep section and reverses the glacier to high camp, then continues to base camp. Ten to thirteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Chulu West Base Camp (4,700 m)",
      elevation: "4,700 m",
      accommodation: "Chulu West Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...CHULU_WEST_BC,
      html: p(
        "The day held in reserve. Wind is the usual reason a Chulu attempt is turned back — the valley funnels it and the summit ridge is fully exposed — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group walks down to <strong>Manang</strong>, banking a day for the Thorong La later. Overnight at base camp or Manang.",
      ),
    },
    {
      title: "Trek from Chulu West Base Camp (4,700 m) to Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The largest village in the upper Marsyangdi, a Tibetan trading town below the Annapurnas.",
      ...MANANG,
      html: p(
        "Camp comes down after breakfast and the group descends the side valley to Ngawal, then follows the high route west and drops to the Marsyangdi.",
        "<strong>Manang (3,540 m)</strong> is a substantial Tibetan-style town of flat-roofed houses with bakeries, gear shops, ATMs and a cinema that shows mountaineering films every afternoon. After four nights in tents it is a startling amount of civilisation.",
        "The Himalayan Rescue Association runs a clinic here with a free altitude talk each afternoon, which is worth attending before the Thorong La. Around 6 hours. Overnight at Manang.",
      ),
    },
    {
      title: "Trek from Manang (3,540 m) to Yak Kharka (4,050 m)",
      elevation: "4,050 m",
      accommodation: "Yak Kharka",
      placeDescription: "A grazing settlement on the way to the Thorong La, above the treeline in the Jarsang valley.",
      ...YAK_KHARKA,
      html: p(
        "North-west out of Manang and up the <strong>Jarsang valley</strong>, leaving the Marsyangdi behind and climbing gently through the last of the juniper into open grazing country.",
        "The valley is dry, brown and wide, with blue sheep frequently visible on the slopes above the trail and lammergeiers working the thermals.",
        "<strong>Yak Kharka (4,050 m)</strong> is a handful of lodges among grazing land. It is a short day by design — the Thorong La is two days away and the point is to arrive at it rested. Around 3 to 4 hours. Overnight at Yak Kharka.",
      ),
    },
    {
      title: "Trek from Yak Kharka (4,050 m) to Thorong Phedi (4,540 m)",
      elevation: "4,540 m",
      accommodation: "Thorong Phedi",
      placeDescription: "The lodges at the foot of the Thorong La, in a narrow gorge below the pass.",
      ...THORONG_PHEDI,
      html: p(
        "A short, cautious day. The trail climbs to <strong>Ledar</strong> and then contours across a steep and eroded hillside above the Jarsang Khola, on ground where rockfall is a genuine consideration and the path is narrow.",
        "<strong>Thorong Phedi (4,540 m)</strong> — the name simply means the foot of Thorong — is two lodges wedged into a gorge at the base of the pass.",
        "Everyone eats early and sleeps early, because the pass is crossed in the dark to beat the wind that gets up on the top by mid-morning. Around 3 to 4 hours. Overnight at Thorong Phedi.",
      ),
    },
    {
      title: "Cross the Thorong La (5,416 m) and Descend to Muktinath (3,800 m)",
      elevation: "5,416 m",
      accommodation: "Muktinath",
      placeDescription: "A sacred temple town in the Kali Gandaki valley, holy to both Hindus and Buddhists.",
      ...MUKTINATH,
      html: p(
        "Away by four in the morning by headlamp, straight into the steep climb above the lodges. The trail zigzags up scree and snow for three to four hours through a series of false summits, each one looking like the pass.",
        "The <strong>Thorong La (5,416 m)</strong> is a broad saddle buried in prayer flags, with a teahouse that sells the highest cup of tea on the Circuit. After a 6,419 m summit it is a comfortable morning rather than the ordeal it is for most trekkers.",
        "Then the descent — <strong>1,600 m</strong> of it, long and hard on the knees, into the Kali Gandaki with Dhaulagiri filling the view ahead. <strong>Muktinath (3,800 m)</strong> is a temple complex sacred to both Hindus and Buddhists, with 108 water spouts and an eternal flame burning over a spring. Seven to nine hours. Overnight at Muktinath.",
      ),
    },
    {
      title: "Trek to Jomsom (2,720 m) and Fly to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Down to <strong>Kagbeni</strong> and then south along the broad grey riverbed of the <strong>Kali Gandaki</strong> — the deepest gorge on earth, measured between Dhaulagiri and Annapurna — into the wind that funnels up this valley every day of the year.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters, and the flight to Pokhara leaves in the early morning before the wind makes it impossible. Where the group arrives too late or the flight is grounded, a jeep down the Kali Gandaki is the alternative and is included.",
        "<strong>Pokhara (822 m)</strong> arrives in the afternoon: lakeside, warm, green, and about 5,600 m below where you stood four days ago. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning by <strong>Phewa Lake</strong> before the road, with the Annapurnas and Machhapuchhre reflected in it on a clear day — including, if you know where to look, the Chulu group behind them.",
        "The drive to <strong>Kathmandu</strong> takes most of the day on the Prithvi Highway, following the Trishuli east through gorge country with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on if you would rather not spend the day on the road.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Lumbini or a Kathmandu valley tour. Safe travels — Chulu East, 165 m higher and a step harder, is the question our returning Chulu West climbers most often ask about.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const chuluEastPeakClimbing: Climb = {
  region: "Annapurna Region",
  price: 3450,
  difficulty: "difficult",
  maxAltitude: 6584,
  grade: "AD-",
  center: [84.09, 28.68],
  zoom: 10,
  content: {
    slug: "chulu-east-peak-climbing",
    title: "Chulu East Peak Climbing",
    overview:
      "<p><strong>Chulu East (6,584 m)</strong> is the highest of the three Chulu summits and the hardest, and it is a considerably more serious proposition than its neighbour to the west. The route climbs a crevassed glacier to a high camp at 5,530 m and then follows a <strong>north-east ridge</strong> with sustained snow and ice at 45 to 50 degrees and a corniced crest near the top — graded <strong>AD-</strong>, and a real step up from a first Himalayan peak.</p><p>What it shares with Chulu West is the approach, which is one of the best walks in Nepal: the <strong>Annapurna Circuit high route</strong> through the medieval Tibetan villages of Ghyaru and Ngawal, with the whole Annapurna range across a valley two kilometres deep. And it shares the exit — over the <strong>Thorong La (5,416 m)</strong> to Muktinath and the Kali Gandaki. What it does not share is the summit: at 6,584 m, Chulu East is 165 m higher and about two hours longer, on ground that asks more of you throughout.</p>",
    highlights: [
      ["Summit Chulu East (6,584 m)", "The highest of the three Chulu peaks, by a sustained AD- north-east ridge."],
      ["A Corniced Summit Ridge", "Snow and ice at 45–50° on fixed rope, finishing on an exposed crest taken one at a time."],
      ["The Annapurna Range at Eye Level", "Annapurna II, III and IV, Gangapurna, Tilicho and Manaslu from the summit."],
      ["The Ghyaru and Ngawal High Route", "Approach on the balcony trail past two medieval Tibetan villages high above the Marsyangdi."],
      ["Cross the Thorong La (5,416 m)", "Walk out over the highest pass on the Annapurna Circuit to Muktinath and Jomsom."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. Manang sits in the rain shadow of the Annapurnas and stays drier than the Khumbu through both seasons, which makes the Chulus more reliable than their altitude suggests.</p><p><strong>October</strong> is the classic month — clear, stable and cold, with the summit ridge in its best condition and the Thorong La reliably open. Spring is warmer and hazier, with more snow on the upper ridge and heavier cornices. Because Chulu East's crest is corniced, autumn's firmer snow is a genuine advantage here in a way it is not on the west peak. Winter is climbable in a settled window but the Thorong La closes regularly.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>AD-</strong>, a clear step above Chulu West. From <strong>high camp at 5,530 m</strong> the route crosses a crevassed glacier roped as a team and then gains the <strong>north-east ridge</strong>, which is climbed on fixed rope through sustained <strong>snow and ice at 45 to 50 degrees</strong> for several hours.</p><p>The upper ridge is <strong>corniced</strong> and is taken one at a time, and it is the section that defines the peak. Summit day runs <strong>ten to thirteen hours</strong> from high camp, starting at one or two in the morning, with an abseil descent of the steep ground. Chulu East is not technically difficult in any single move; it is long, sustained and exposed, and parties are more often defeated by the clock than by the climbing.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>Unlike Chulu West, this is <strong>not a first Himalayan peak</strong>. We ask for previous time above 5,000 m and, ideally, a 6,000 m summit already climbed. You should be comfortable on fixed rope, on a crevassed glacier and on an exposed ridge before you arrive. The training day at base camp refreshes and checks rather than teaching from scratch.</p><p>The acclimatisation is the Circuit's and it is generous: nights at Pisang and Ngawal with a climb to 4,200 m, then two nights at base camp at 4,900 m, then a high camp at 5,530 m. The <strong>Thorong La</strong> on the way out at 5,416 m is comfortable on a body that has been to 6,584 m, and it makes a fitting end to the trip rather than an obstacle.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m or above</strong> is mandatory — note that Chulu East is 6,584 m, so a policy capped at exactly 6,500 m does not cover the summit, which catches people out. We check the wording before permits are issued.</p><p>The policy must also cover <strong>roped glacier travel and fixed-rope climbing</strong>, and include <strong>emergency helicopter evacuation and repatriation</strong>. Manang has an airstrip and a helipad and helicopters reach base camp in good conditions, but they are dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong> rated for 6,500 m, broken in, plus trekking boots for the Circuit. A <strong>-25°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>Because the ridge is sustained and the day is long, <strong>gloves you can operate a jumar in for hours</strong> matter as much as the warm mitts. We provide all group climbing equipment and our Sherpas fix the ridge. <strong>Personal hardware can be rented as an add-on</strong>, though on an AD- route your own harness, crampons and descender are worth carrying from home.</p>",
      },
    ],
    faqs: [
      { question: "How much harder is Chulu East than Chulu West?", answer: "A full grade. Chulu West is a glacier and a 40 to 45 degree slope to a broad ridge; Chulu East is a sustained 45 to 50 degree ridge with a corniced crest, two hours longer on summit day. If Chulu West would be your first Himalayan peak, climb that one and come back for this." },
      { question: "Which Chulu am I actually climbing?", answer: "Chulu East, 6,584 m, by the north-east ridge, and the certificate names it. The Chulu group has three permitted summits and operators have historically been vague about which one their itinerary reaches. We are not, and it is worth asking anyone else the same question." },
      { question: "Is my insurance likely to cover 6,584 m?", answer: "Check it carefully. A great many mountaineering policies stop at exactly 6,500 m, which covers the whole route except the last 84 m. We have turned away climbers at the Kathmandu briefing over precisely this, so read the certificate before you fly." },
      { question: "How corniced is the summit ridge?", answer: "Enough that it is taken one at a time with the Sherpas probing the crest ahead, and enough that in a heavy spring it can stop an attempt. It is the section that makes the peak AD- rather than PD+, and it is also the best climbing on the mountain." },
      { question: "What is the summit success rate?", answer: "Around 60 to 70 percent on our departures, against 80 to 85 percent on Chulu West. The commonest reason for turning back is running out of time on the ridge, which is why the turnaround is set at high camp the night before and treated as fixed." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,900 m in the valley north of Ngawal, and high camp at 5,530 m on the moraine at the edge of the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There are no lodges above Ngawal." },
      { question: "Do we walk the full Annapurna Circuit?", answer: "The northern half — Besisahar to Manang by road and trail, then the Thorong La to Muktinath and Jomsom. It is the best part of the Circuit and the part almost everyone walks now that the road reaches Muktinath from the other side." },
      { question: "Can Chulu East and Chulu West be combined?", answer: "Yes, and it is a strong trip for a climber who wants two summits from one acclimatisation — West first as the warm-up, East a few days later. It adds about four days. We build it to order rather than selling it off the shelf." },
      { question: "How windy is the Manang valley?", answer: "Very, from late morning onward, every day of the year. It funnels up the Marsyangdi and it is why summit days start at one or two in the morning and why a buff and glasses are not optional. High camp is the windiest place on the itinerary." },
      { question: "How do we get back from Jomsom?", answer: "By a twenty-minute flight to Pokhara, weather permitting, or by jeep down the Kali Gandaki if the flights are grounded. Both are included, and the itinerary carries a night in Pokhara so that a grounded morning does not threaten your onward travel." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Flight from Jomsom to Pokhara after the trek, subject to weather, with jeep transport as the alternative."],
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private tourist bus or car from Pokhara to Kathmandu at the end of the trip.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "One night of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at Chulu East base camp (4,900 m) and high camp (5,530 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Chulu East, ${ANNAPURNA_PERMITS}.`,
      sherpa: MANANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A training and skills-check day at base camp covering rope-team travel, fixed-line ascent, abseiling and movement on an exposed ridge.",
        "Fixing of the north-east ridge and the corniced crest by our climbing Sherpas ahead of the summit push.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Ngawal to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
    },
    porterDays: 14,
    gearRentalDays: 14,
    flightAddons: ["pkr-ktm"],
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 19-day itinerary climbing Chulu East (6,584 m), the highest of the three Chulu summits, by its AD- north-east ridge, approached on the Annapurna Circuit high route and finishing over the Thorong La.",
    inExDescription:
      "The Jomsom flight, jeep transport up the Marsyangdi, Kathmandu and Pokhara hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Chulu East Peak Climbing (6,584 m) — 19 Days | Green Compass Treks",
      description:
        "Climb Chulu East (6,584 m), the highest of the Chulu peaks, by its AD- north-east ridge above Manang, and walk out over the Thorong La. 19 days with a corniced summit crest and full Circuit acclimatisation.",
      keywords:
        "chulu east peak climbing, chulu east 6584m, annapurna peak climbing, manang climbing, chulu east cost, AD- peak nepal",
      tags: "Chulu East, Annapurna Region, Peak Climbing, 6000m Peak, Annapurna Circuit, Thorong La",
    },
  },
  days: [
    ...chuluWestPeakClimbing.days.slice(0, 7).map((d) => ({
      ...d,
      html: d.html.replace("nineteen-day plan", "nineteen-day plan"),
    })),
    {
      title: "Trek from Ngawal (3,660 m) to Chulu East Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Chulu East Base Camp",
      placeDescription: "A tented camp on the moraine north of Ngawal, below the north-east ridge of Chulu East.",
      ...CHULU_EAST_BC,
      html: p(
        "North-east out of Ngawal on a yak trail that leaves the Circuit within twenty minutes and climbs into a side valley almost nobody walks up.",
        "The path works up through juniper scrub and grazing land and then onto moraine, gaining more than 1,200 m, with the valley narrowing and the glacier appearing at its head.",
        "<strong>Chulu East Base Camp (4,900 m)</strong> is a tented camp below the moraine crest, with the north-east ridge visible in profile above and the whole Annapurna range filling the southern horizon behind you. Around 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Chulu East Base Camp",
      placeDescription: "The base camp below the ridge, where technique is checked before the summit push.",
      ...CHULU_EAST_BC,
      html: p(
        "A working day on the glacier ice above camp, and on an AD- peak it is a skills check rather than a beginner's lesson. <strong>Rope-team travel with correct spacing, jumaring on a steep fixed line with a pack, changing over at anchors, and abseiling</strong>.",
        "Extra time goes on moving one at a time on an exposed crest and on short-roping, because the upper ridge is corniced and the fixed line does not run the whole way.",
        "In the afternoon we walk part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>fixing the ridge</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,900 m) to Chulu East High Camp (5,530 m)",
      elevation: "5,530 m",
      accommodation: "Chulu East High Camp",
      placeDescription: "A tented camp on the moraine at 5,530 m, at the edge of the glacier below the ridge.",
      ...CHULU_EAST_HIGH_CAMP,
      html: p(
        "A steep morning up the moraine, gaining 630 m in three to four hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,530 m)</strong> sits on rubble at the lip of the glacier, exposed to the wind that funnels down this valley every afternoon. It is the windiest and coldest night of the trip.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and a <strong>hard turnaround time</strong>. On a ridge this long the turnaround is what decides the day. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Chulu East (6,584 m) and Descend to Base Camp (4,900 m)",
      elevation: "6,584 m",
      accommodation: "Chulu East Base Camp",
      placeDescription: "The 6,584 m summit of Chulu East, the highest of the three Chulu peaks.",
      ...CHULU_EAST,
      html: p(
        "Roped and moving by one in the morning. The first hours cross the <strong>crevassed glacier</strong> in the dark on the line the Sherpas marked, with the team spaced correctly, and then gain the foot of the ridge.",
        "The <strong>north-east ridge</strong> is the climb: sustained <strong>snow and ice at 45 to 50 degrees</strong> on fixed rope for several hours, steepening in places, with the sun arriving somewhere around 6,200 m.",
        "The upper ridge is <strong>corniced</strong> and is followed one at a time with the Sherpas probing ahead. From the <strong>summit (6,584 m)</strong>: <strong>Annapurna II, III and IV, Gangapurna and Tilicho</strong> across the valley, <strong>Manaslu</strong> east, Dhaulagiri west, and the Tibetan plateau running north — the same view as from Chulu West, from 165 m higher and after a harder day.",
        "The descent abseils the ridge and reverses the glacier to high camp, then continues to base camp. Twelve to fifteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Chulu East Base Camp (4,900 m)",
      elevation: "4,900 m",
      accommodation: "Chulu East Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...CHULU_EAST_BC,
      html: p(
        "The day held in reserve, and on Chulu East it is used more often than on the west peak. Wind on an exposed corniced ridge closes the route even in otherwise clear weather.",
        "If yesterday failed on conditions or on the clock, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group walks down to <strong>Manang</strong>, banking a day for the Thorong La later. Overnight at base camp or Manang.",
      ),
    },
    ...chuluWestPeakClimbing.days.slice(12, 19).map((d) => ({
      ...d,
      html: d.html
        .replace(
          "the group descends the side valley to Ngawal",
          "the group descends the side valley to Ngawal",
        )
        .replace(
          "Chulu East, 165 m higher and a step harder, is the question our returning Chulu West climbers most often ask about.",
          "Tilicho Peak and Singu Chuli are the two our returning Chulu East climbers most often ask about, and both are a fair step on from here.",
        ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const chuluFarEastClimbing: Climb = {
  region: "Annapurna Region",
  price: 2750,
  difficulty: "challenging",
  maxAltitude: 6059,
  grade: "PD",
  center: [84.12, 28.67],
  zoom: 11,
  content: {
    slug: "chulu-far-east-climbing",
    title: "Chulu Far East Climbing",
    overview:
      "<p><strong>Chulu Far East (6,059 m)</strong> is the most approachable of the three Chulu summits and the best first 6,000 m peak on the Annapurna side of Nepal. It is graded <strong>PD</strong> — a straightforward glacier and a snow slope of 35 to 40 degrees with a short fixed section near the top — and it is reached from a base camp a single day above <strong>Ngawal</strong> on the Annapurna Circuit high route.</p><p>The whole trip runs to sixteen days, exits back down the Marsyangdi by jeep rather than over the Thorong La, and costs meaningfully less than its neighbours. What it does not compromise on is the summit view, which is the same one Chulu West and Chulu East pay more for: the <strong>Annapurna range at eye level</strong> across a valley two kilometres deep, with Manaslu east, Dhaulagiri west and the Tibetan plateau running north.</p>",
    highlights: [
      ["Summit Chulu Far East (6,059 m)", "The most approachable of the three Chulu peaks, and an excellent first 6,000 m summit."],
      ["A PD Glacier and Snow Slope", "Straightforward glacier travel and a 35–40° slope with a short fixed section — no headwall and no corniced ridge."],
      ["The Annapurna Range at Eye Level", "Annapurna II, III and IV, Gangapurna and Tilicho from the summit, with Manaslu and Dhaulagiri beyond."],
      ["The Ghyaru and Ngawal High Route", "Approach on the balcony trail past two medieval Tibetan villages high above the Marsyangdi."],
      ["Sixteen Days and a Lower Price", "The shortest and least expensive 6,000 m climb in the Annapurna region."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. Manang sits in the rain shadow of the Annapurnas and stays drier than the Khumbu through both seasons, which makes this one of the more weather-reliable 6,000 m peaks in Nepal.</p><p><strong>October</strong> is the classic month, with the clearest air of the year and the best summit views. Spring is warmer and hazier, with more snow on the slope, which on a peak this angle makes it easier rather than harder. Because the route has no corniced ridge and no rock band, Chulu Far East is less season-sensitive than its neighbours and we run departures across a wider window.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD</strong>, the easiest of the Chulu summits. From <strong>high camp at 5,240 m</strong> the route crosses a short and lightly crevassed glacier roped as a team, and then climbs a <strong>snow slope of 35 to 40 degrees</strong> for two to three hours, with a <strong>short fixed section</strong> on the steeper ground near the top.</p><p>The summit is a broad snow dome rather than a ridge, which is unusual among Nepal's climbing peaks and is the main reason this one suits a first-timer — there is no exposure problem to discover at 6,000 m. Summit day runs <strong>seven to ten hours</strong> from high camp, starting around three in the morning. It is a shorter and gentler day than Island Peak's.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required, and this is the peak we most often recommend to trekkers making their first climb. Previous multi-day trekking above 4,000 m is required. The training day at base camp teaches crampons, ice axe, jumar, abseil and rope-team travel from the beginning.</p><p>The acclimatisation is the Circuit's, which is gentle by design: nights at Pisang and Ngawal at 3,300 to 3,660 m with a climb to 4,200 m, then two nights at base camp at 4,650 m, then a high camp at 5,240 m. It is a more forgiving profile than most Khumbu peaks and the success rate reflects it.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the Circuit approach and none of the climbing, and many travel policies exclude roped glacier travel and fixed-rope use by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Manang has an airstrip and a helipad and is one of the more accessible climbing areas in Nepal for evacuation, with helicopters reaching base camp in good conditions. They are still dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line at the Kathmandu briefing.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Four-season boots that take a semi-automatic crampon</strong> are sufficient for this peak — full double boots are recommended but not essential, which is a genuine saving for a first climb. Add a <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, gloves and liner gloves, a warm hat, a buff, category 4 glacier glasses, gaiters, a headlamp and factor 50 sunscreen.</p><p>The Manang valley is dry, bright and <strong>very windy</strong> in the afternoons, so a buff and glasses matter as much as the warm layers. We provide all group climbing equipment and our Sherpas fix the steep section. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Is Chulu Far East a good first 6,000 m peak?", answer: "It is one of the best in Nepal for it. A short glacier, a 35 to 40 degree slope, a brief fixed section and a broad summit dome with no exposure problem — combined with the Circuit's gentle acclimatisation profile. Island Peak is the more famous first peak; this one is easier and quieter." },
      { question: "How does it compare with the other two Chulus?", answer: "Substantially easier and 360 m lower than Chulu West, 525 m lower than Chulu East. Far East is PD, West is PD+, East is AD-. Far East has no corniced ridge and no sustained steep ground, which is exactly why it costs less and takes fewer days." },
      { question: "Why does this trip not cross the Thorong La?", answer: "Because that is what makes it sixteen days rather than nineteen and keeps the price down. The trip exits back down the Marsyangdi by jeep from Chame. If you want the pass, our Chulu West and Chulu East itineraries both include it, or we can add it here at extra cost." },
      { question: "Do I need double boots?", answer: "Recommended but not essential — a warm four-season boot that takes a semi-automatic crampon will do on this peak, where the high camp is 5,240 m rather than 5,500 m or more. That is a real saving on a first climb, and your guide will check the boot at the Kathmandu briefing." },
      { question: "What is the summit success rate?", answer: "Around 85 to 90 percent on our departures, the highest of any 6,000 m peak we run in the Annapurna region. The gentle grade, the short summit day and the Circuit acclimatisation all contribute. Wind is the main reason for the turn-backs there are." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,650 m in a side valley above Ngawal, and high camp at 5,240 m on the moraine below the glacier. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew. There are no lodges above Ngawal on this side." },
      { question: "How crevassed is the glacier?", answer: "Lightly, and the crossing takes under an hour. The group moves roped as a team on a marked line. It is enough to require the rope-team session on the training day and not enough to be a serious obstacle, which is another reason this peak suits a first climb." },
      { question: "Can I upgrade to Chulu West once I am there?", answer: "Not on this permit — the NMA permit names the peak, and Chulu West requires its own. If you think you may want the harder summit, book that itinerary from the start. Climbers regularly do Far East one year and West or East the next." },
      { question: "Is the walk in the same as the other Chulu trips?", answer: "Identical as far as Ngawal — the jeep up the Marsyangdi, then Chame, Upper Pisang and the Ghyaru high route. It is the best part of the Annapurna Circuit and it does all the acclimatisation work before any climbing starts." },
      { question: "How rough is the jeep road out?", answer: "Rough. The Marsyangdi road is cut into the valley wall and is spectacular, slow and exposed, and the drive from Chame to Besisahar takes five to six hours before the highway to Kathmandu. It is not for anyone who dislikes heights on a road, and we say so at booking." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private jeep transport from Chame to Besisahar and onward to Kathmandu at the end of the trip.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Tented accommodation at Chulu Far East base camp (4,650 m) and high camp (5,240 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Chulu Far East, ${ANNAPURNA_PERMITS}.`,
      sherpa: MANANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full training day at base camp covering crampons, ice axe, rope-team travel, fixed-line ascent and abseil technique.",
        "Fixing of the steep section below the summit by our climbing Sherpas.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Ngawal to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
    },
    porterDays: 11,
    gearRentalDays: 11,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 16-day itinerary climbing Chulu Far East (6,059 m) from the Manang valley, approached on the Annapurna Circuit high route through Ghyaru and Ngawal and exiting back down the Marsyangdi by jeep.",
    inExDescription:
      "Jeep transport up and down the Marsyangdi, Kathmandu hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Chulu Far East Climbing (6,059 m) — 16 Days | Green Compass Treks",
      description:
        "Climb Chulu Far East (6,059 m) above Manang, the most approachable of the three Chulu peaks and an excellent first 6,000 m summit. 16 days, PD grade, with full Annapurna Circuit acclimatisation.",
      keywords:
        "chulu far east climbing, chulu far east 6059m, first 6000m peak nepal, annapurna peak climbing, manang climbing, easy peak climbing nepal",
      tags: "Chulu Far East, Annapurna Region, Peak Climbing, 6000m Peak, First Climb, Manang",
    },
  },
  days: [
    ...chuluWestPeakClimbing.days.slice(0, 7).map((d) => ({
      ...d,
      html: d.html.replace("nineteen-day plan", "sixteen-day plan"),
    })),
    {
      title: "Trek from Ngawal (3,660 m) to Chulu Far East Base Camp (4,650 m)",
      elevation: "4,650 m",
      accommodation: "Chulu Far East Base Camp",
      placeDescription: "A tented camp in a side valley above Ngawal, below the southern slopes of Chulu Far East.",
      ...CHULU_FAR_EAST_BC,
      html: p(
        "North-east out of Ngawal on a yak trail that leaves the Circuit within twenty minutes and climbs into a side valley almost nobody walks up.",
        "The path works up through juniper scrub and grazing land onto open moraine, gaining a thousand metres, with the peak coming into view at the head of the valley — a broad snow dome rather than the sharp ridges of its neighbours.",
        "<strong>Chulu Far East Base Camp (4,650 m)</strong> is a tented camp on flat ground below the moraine, with the whole Annapurna range filling the southern horizon behind you. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,650 m)",
      elevation: "4,650 m",
      accommodation: "Chulu Far East Base Camp",
      placeDescription: "The base camp below the glacier, where the climbing skills are taught before the summit push.",
      ...CHULU_FAR_EAST_BC,
      html: p(
        "The training day, and on a first climb it is the most useful day of the trip. On the glacier ice above camp you work through <strong>fitting crampons and walking in them, ice axe technique and self-arrest, moving as a roped team, ascending fixed line on a jumar, and abseiling</strong>.",
        "None of it is difficult on flat ground in daylight, which is exactly why we do it here rather than at three in the morning on the slope.",
        "In the afternoon we walk part-way toward high camp and back — 300 m gained and lost. Meanwhile the Sherpas are above, <strong>fixing the steep section below the summit</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,650 m) to Chulu Far East High Camp (5,240 m)",
      elevation: "5,240 m",
      accommodation: "Chulu Far East High Camp",
      placeDescription: "A tented camp on the moraine at 5,240 m, at the edge of the glacier.",
      lng: 84.13,
      lat: 28.6733,
      html: p(
        "A short morning up the moraine, gaining 590 m in three hours with a light load while the crew moves the camp.",
        "<strong>High camp (5,240 m)</strong> sits on rubble at the lip of the glacier. It is lower than the high camps on the other two Chulus, which makes for a noticeably better night's sleep before a summit day.",
        "The rest of the day is preparation: kit laid out, rope teams assigned, an early dinner, and your guide's weather call and turnaround time. Asleep by seven. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Chulu Far East (6,059 m) and Descend to Base Camp (4,650 m)",
      elevation: "6,059 m",
      accommodation: "Chulu Far East Base Camp",
      placeDescription: "The 6,059 m summit of Chulu Far East, a broad snow dome above the Manang valley.",
      ...CHULU_FAR_EAST,
      html: p(
        "Roped and moving by three in the morning — a later start than most 6,000 m peaks, because the day is shorter. The <strong>glacier</strong> crossing takes under an hour on a marked line, weaving past a few open crevasses in the dark.",
        "Then the <strong>snow slope</strong>: 35 to 40 degrees, climbed steadily for two to three hours as the sky lightens over Manaslu, with a <strong>short fixed section</strong> on the steeper ground near the top.",
        "The <strong>summit (6,059 m)</strong> is a broad dome with room to stand about on, which after a first climb is a considerable relief. <strong>Annapurna II, III and IV, Gangapurna and Tilicho</strong> stand across the valley, with Manaslu east, Dhaulagiri west and the Tibetan plateau running north.",
        "The descent reverses the slope and the glacier to high camp and then base camp. Eight to eleven hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Chulu Far East Base Camp (4,650 m)",
      elevation: "4,650 m",
      accommodation: "Chulu Far East Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...CHULU_FAR_EAST_BC,
      html: p(
        "The day held in reserve. Wind is the usual reason a Chulu attempt is turned back — the valley funnels it and the summit dome is fully exposed — and a second chance is worth more than any amount of equipment.",
        "If yesterday failed on conditions, the group returns to high camp today and climbs tomorrow, with the ropes already fixed and the glacier route marked.",
        "If the summit went to plan, camp comes down and the group starts down toward Ngawal and Pisang, banking a spare day against the drive out. Overnight at base camp or Ngawal.",
      ),
    },
    {
      title: "Trek from Chulu Far East Base Camp (4,650 m) to Upper Pisang (3,300 m)",
      elevation: "3,300 m",
      accommodation: "Upper Pisang",
      placeDescription: "The Tibetan-style village above the Marsyangdi, facing Annapurna II.",
      ...PISANG,
      html: p(
        "Camp comes down after breakfast and the group descends the side valley to <strong>Ngawal</strong>, then takes the high route back east past <strong>Ghyaru</strong> — walked now in the opposite direction, with the Annapurnas ahead rather than behind.",
        "The descent from Ghyaru to the Marsyangdi is steep and long, and thick air arrives with every hundred metres lost.",
        "<strong>Upper Pisang (3,300 m)</strong> in the afternoon, with a lodge, a hot shower and a menu after four nights in tents. Around 6 to 7 hours. Overnight at Upper Pisang.",
      ),
    },
    {
      title: "Trek from Upper Pisang (3,300 m) to Chame (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, in pine forest beside the Marsyangdi.",
      ...CHAME,
      html: p(
        "Back down the Marsyangdi past the <strong>Paungda Danda</strong>, the 1,500 m curved rock slab that fills the southern side of the valley, and through the apple orchard at <strong>Bhratang</strong>.",
        "The trees come back as the valley drops — juniper, then fir, then blue pine — and with them warmth and the smell of resin after a fortnight of dry high country.",
        "<strong>Chame (2,670 m)</strong> has hot springs beside the river, which after a summit and four nights in tents is worth the short walk. Around 5 hours. Overnight at Chame.",
      ),
    },
    {
      title: "Drive from Chame (2,670 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day on the road. The jeep grinds down the <strong>Marsyangdi</strong> gorge to Besisahar on a rough road cut into the valley wall — spectacular, slow and not for anyone who dislikes exposure on a road — and then joins the highway east.",
        "The <strong>Prithvi Highway</strong> follows the Trishuli back to the Kathmandu valley, with a lunch stop at a riverside restaurant. Nine to eleven hours in total, depending on the road.",
        "Back in <strong>Kathmandu</strong> in the evening. A shower, a proper meal, and your <strong>summit certificate</strong> presented over dinner. Overnight in Kathmandu.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Pokhara, Lumbini or a Kathmandu valley tour. Safe travels — Chulu West and Pisang Peak are the two our returning Far East climbers most often ask about, and both are a natural next step.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const pisangPeakClimbing: Climb = {
  region: "Annapurna Region",
  price: 2950,
  difficulty: "difficult",
  maxAltitude: 6091,
  grade: "PD+",
  center: [84.16, 28.63],
  zoom: 11,
  content: {
    slug: "pisang-peak-climbing",
    title: "Pisang Peak Climbing",
    overview:
      "<p><strong>Pisang Peak (6,091 m)</strong> rises straight out of the village it is named after, a clean pyramid of snow above the Marsyangdi that every trekker on the Annapurna Circuit walks beneath. It looks simple from the trail and it is not: the upper section is a <strong>steep snow and ice slope at 45 to 50 degrees</strong> that narrows to a short exposed ridge, and it turns back more parties than its modest height suggests.</p><p>That combination — an easy approach and a genuinely steep finish — makes it an unusually good peak. You reach base camp on the second day of walking, the whole climb is done inside a week of leaving the road, and the summit day is a real one. This itinerary then goes on to walk the best part of the <strong>Annapurna Circuit</strong>, over the <strong>Thorong La (5,416 m)</strong> to Muktinath and Jomsom, so the climb sits inside one of the classic treks in Nepal rather than replacing it.</p>",
    highlights: [
      ["Summit Pisang Peak (6,091 m)", "A clean snow pyramid above the Marsyangdi with a genuinely steep upper slope."],
      ["A Steep Finish", "45–50° snow and ice on fixed rope narrowing to a short exposed ridge — harder than the peak looks from the trail."],
      ["Base Camp in Two Days' Walking", "The most accessible 6,000 m base camp in the Annapurna region, straight above Pisang village."],
      ["Cross the Thorong La (5,416 m)", "Walk out over the highest pass on the Annapurna Circuit to Muktinath and the Kali Gandaki."],
      ["A Climb Inside a Classic Trek", "Pisang Peak and the northern Annapurna Circuit in one eighteen-day trip."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>March to May</strong> and <strong>September to November</strong>. Pisang sits in the rain shadow of the Annapurnas and stays drier than the Khumbu through both seasons, which makes the peak more reliable than its altitude suggests.</p><p><strong>October</strong> is the classic month, with the clearest air of the year and the Thorong La reliably open. Spring is warmer and hazier and puts more snow on the upper slope, which cuts both ways — deeper, softer snow is easier on the feet and harder work, and it loads the steep section after a storm. Because the crux here is a sustained steep slope rather than a rock band, autumn's firmer neve is generally the better proposition.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p>Graded <strong>PD+</strong>, and the steepness is concentrated at the top. From <strong>high camp at 5,400 m</strong> the route climbs a snow ridge and then a broad slope at 30 to 35 degrees for two hours, which is straightforward walking in crampons.</p><p>Then it steepens. The <strong>final 300 m runs at 45 to 50 degrees</strong> on fixed rope, sustained and unrelenting, and it narrows near the top into a <strong>short exposed ridge</strong> taken one at a time. Summit day is <strong>eight to eleven hours</strong> from high camp. It is not a long day by Himalayan standards, and the concentration of difficulty at the very end is why parties who felt comfortable all morning turn back at 5,900 m.</p>",
      },
      {
        heading: "Training, Experience & Acclimatisation",
        content:
          "<p>No previous climbing experience is required, but this is a step up from the gentlest first peaks and we say so. You need previous multi-day trekking above 4,000 m, <strong>good hill fitness</strong>, and a head for a steep slope with a long drop below it. The training day at base camp covers crampons, ice axe, self-arrest, jumar, abseil and rope-team travel from the beginning.</p><p>The acclimatisation profile is shorter than the Chulu peaks' because base camp is reached so quickly, which is the one real weakness of this itinerary. We compensate with two nights at base camp at 4,380 m and an acclimatisation walk, and by running the <strong>Thorong La</strong> after the climb rather than before. Your guide monitors saturation daily from Chame onward.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering up to 6,500 m</strong> is mandatory and we check the policy before permits are issued. A standard trekking policy capped at 4,000 or 5,000 m covers the Circuit and none of the climbing, and many travel policies exclude fixed-rope climbing on steep ground by name.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Pisang is close to the Manang airstrip and helipad and is one of the more accessible climbing areas in Nepal for evacuation, with helicopters reaching base camp in good conditions. They are still dispatched against a guarantee of payment. We take your policy number and the insurer's 24-hour line in Kathmandu.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Double mountaineering boots</strong>, or a warm single boot rated for 6,000 m, broken in, plus trekking boots for the Circuit. A <strong>-20°C sleeping bag</strong>, a heavy down jacket, waterproof and windproof shell layers, insulated mitts as well as gloves, a warm hat, a buff, category 4 glacier glasses, goggles, gaiters, a headlamp with spare batteries and factor 50 sunscreen.</p><p>Because the crux is 300 m of sustained jumaring, <strong>gloves you can grip an ascender in for an hour</strong> matter as much as the warm mitts. We provide all group climbing equipment and our Sherpas fix the steep slope. <strong>Personal hardware can be rented as an add-on</strong> and is fitted in Kathmandu at the briefing.</p>",
      },
    ],
    faqs: [
      { question: "Pisang Peak looks easy from the trail. Is it?", answer: "No, and that is the standing joke about it in Manang. The lower two-thirds are a walk in crampons; the last 300 m are 45 to 50 degrees on fixed rope with a short exposed ridge at the top. It turns back a meaningful share of parties who were comfortable an hour earlier." },
      { question: "How does it compare with Island Peak?", answer: "Similar in grade and about 100 m lower, with a comparable steep section — Island Peak's headwall is 100 m of ice, Pisang's is 300 m of snow and ice at a slightly gentler angle. Island Peak has a crevassed glacier and a corniced arête; Pisang has neither, and a much shorter approach." },
      { question: "Is the acclimatisation adequate given the fast approach?", answer: "It is the weakest part of the itinerary and we build around it — two nights at base camp at 4,380 m, an acclimatisation walk to 5,000 m, and daily saturation monitoring from Chame. Anyone whose readings are drifting is held a day at base camp. Climbers who have been above 4,000 m before do well; complete altitude novices should consider a Chulu instead." },
      { question: "Where are base camp and high camp?", answer: "Base camp at around 4,380 m on the kharka directly above Pisang village, reached in four hours from the lodges, and high camp at 5,400 m on the ridge. Both are tented with a mess tent, kitchen tent and toilet tent and a cook crew." },
      { question: "What is the summit success rate?", answer: "Around 65 to 75 percent on our departures. The steep upper slope and the short acclimatisation window are the two limiting factors, and both are the reasons the figure sits below the Chulu peaks'." },
      { question: "Is there a glacier to cross?", answer: "No, and it is one of the peak's attractions. The route is a ridge and a slope throughout, with no crevasse risk and no roped glacier travel. Rope-team technique is still taught at base camp because the upper ridge is climbed roped, but the crevasse problem simply is not there." },
      { question: "Why is the Thorong La after the climb rather than before?", answer: "Because crossing a 5,416 m pass before the peak would help the acclimatisation but would add a week to the trip and reverse the geography. Doing it afterwards means the pass is comfortable on a body that has just been to 6,091 m, and the Circuit becomes the reward rather than the work." },
      { question: "Can Pisang Peak be combined with a Chulu?", answer: "Yes, and it makes a strong two-peak trip — Pisang first from the village, then the Chulu group from Ngawal a few days later, with the Thorong La to finish. It adds about five days and we quote it to order." },
      { question: "How windy is the Manang valley?", answer: "Very, from late morning onward, every day of the year. It funnels up the Marsyangdi and it is why summit days start early and why a buff and glasses are not optional. High camp on the ridge is fully exposed to it." },
      { question: "How do we get back from Jomsom?", answer: "By a twenty-minute flight to Pokhara, weather permitting, or by jeep down the Kali Gandaki if the flights are grounded. Both are included, and the itinerary carries a night in Pokhara so that a grounded morning does not threaten your onward travel." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Flight from Jomsom to Pokhara after the trek, subject to weather, with jeep transport as the alternative."],
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private tourist bus or car from Pokhara to Kathmandu at the end of the trip.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "One night of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at Pisang Peak base camp (4,380 m) and high camp (5,400 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Pisang Peak, ${ANNAPURNA_PERMITS}.`,
      sherpa: MANANG_SHERPA,
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A full training day at base camp covering crampons, ice axe, self-arrest, fixed-line ascent, abseil and rope-team technique.",
        "Fixing of the upper slope and the summit ridge by our climbing Sherpas ahead of the summit push.",
        "Porter and pack-animal transport of group climbing equipment and camp gear from Pisang to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
    },
    porterDays: 13,
    gearRentalDays: 13,
    flightAddons: ["pkr-ktm"],
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "An 18-day itinerary climbing Pisang Peak (6,091 m) straight above Pisang village, with a steep 45–50° upper slope, then walking the northern Annapurna Circuit over the Thorong La to Muktinath and Jomsom.",
    inExDescription:
      "The Jomsom flight, jeep transport up the Marsyangdi, Kathmandu and Pokhara hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with Sherpa support, group climbing equipment, rope fixing and the training day are included, while international flights, visa, mountaineering insurance, personal climbing hardware, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Pisang Peak Climbing (6,091 m) — 18 Days | Green Compass Treks",
      description:
        "Climb Pisang Peak (6,091 m) above the Marsyangdi, a clean snow pyramid with a steep 45–50° finish, then cross the Thorong La on the Annapurna Circuit. 18 days with base camp reached in two days' walking.",
      keywords:
        "pisang peak climbing, pisang peak 6091m, annapurna circuit peak climbing, manang climbing, pisang peak cost, thorong la",
      tags: "Pisang Peak, Annapurna Region, Peak Climbing, 6000m Peak, Annapurna Circuit, Thorong La",
    },
  },
  days: [
    ...chuluWestPeakClimbing.days.slice(0, 5).map((d) => ({
      ...d,
      html: d.html.replace("nineteen-day plan", "eighteen-day plan"),
    })),
    {
      title: "Trek from Upper Pisang (3,300 m) to Pisang Peak Base Camp (4,380 m)",
      elevation: "4,380 m",
      accommodation: "Pisang Peak Base Camp",
      placeDescription: "A tented camp on the kharka directly above Pisang village, below the south-west ridge.",
      ...PISANG_BC,
      html: p(
        "Straight up. The trail leaves Upper Pisang behind the gompa and climbs the hillside north on a yak path through juniper and grazing land, gaining a thousand metres in four hours.",
        "It is the most accessible 6,000 m base camp in the Annapurna region — you can see the village below you the whole way, and the peak the whole way above.",
        "<strong>Pisang Peak Base Camp (4,380 m)</strong> is a tented camp on a kharka with the south-west ridge rising directly overhead and <strong>Annapurna II</strong> filling the sky across the valley. Around 4 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Training and Acclimatisation Day at Base Camp (4,380 m)",
      elevation: "4,380 m",
      accommodation: "Pisang Peak Base Camp",
      placeDescription: "The base camp above Pisang village, where the climbing skills are taught and the altitude consolidated.",
      ...PISANG_BC,
      html: p(
        "A day that does two jobs, and on this itinerary both matter. The morning is the <strong>training session</strong> on the snow above camp: crampons, ice axe and self-arrest, ascending fixed line on a jumar, abseiling, and moving roped on an exposed ridge.",
        "The jumar work gets the most repetition, because the crux of this peak is three hundred metres of sustained ascending on a fixed line and that is a specific kind of tiring.",
        "In the afternoon we walk up toward <strong>5,000 m</strong> and come back down — climb high, sleep low, and the most valuable acclimatisation on a trip with a fast approach. Your guide checks saturation this evening. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,380 m) to Pisang Peak High Camp (5,400 m)",
      elevation: "5,400 m",
      accommodation: "Pisang Peak High Camp",
      placeDescription: "A tented camp on the south-west ridge at 5,400 m, below the steep upper slope.",
      ...PISANG_HIGH_CAMP,
      html: p(
        "A steep morning on the ridge, gaining a thousand metres on grass, then scree, then snow, in four to five hours with a moderate load while the crew moves the camp.",
        "<strong>High camp (5,400 m)</strong> is a set of platforms on the crest of the ridge, fully exposed to the wind that funnels up the Marsyangdi every afternoon. There is no shelter of any kind.",
        "The view down the valley to Pisang and across to Annapurna II is exceptional and the night is not. Early dinner, kit laid out, and your guide's weather call and turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Pisang Peak (6,091 m) and Descend to Base Camp (4,380 m)",
      elevation: "6,091 m",
      accommodation: "Pisang Peak Base Camp",
      placeDescription: "The 6,091 m summit of Pisang Peak, above the Marsyangdi and the village of the same name.",
      ...PISANG_PEAK,
      html: p(
        "Moving by three in the morning. The first two hours follow the snow ridge and then a broad slope at 30 to 35 degrees — straightforward walking in crampons, roped as a team, with headlamps and cold hands.",
        "Then the mountain changes. The <strong>final 300 m runs at 45 to 50 degrees</strong> on fixed rope, sustained and unrelenting, and it is where the day is won or lost. There is no easing off and no place to rest; it is an hour or more of steady jumaring with the whole Marsyangdi valley dropping away below your boots.",
        "Near the top the slope narrows into a <strong>short exposed ridge</strong>, taken one at a time. The <strong>summit (6,091 m)</strong> looks across at <strong>Annapurna II, III and IV</strong>, west to Gangapurna and Tilicho, east to Manaslu, and north over the Chulu group to the Tibetan plateau.",
        "The descent abseils the steep section and reverses the ridge to high camp and then base camp. Nine to twelve hours. Overnight at base camp.",
      ),
    },
    {
      title: "Reserve Day at Pisang Peak Base Camp (4,380 m)",
      elevation: "4,380 m",
      accommodation: "Pisang Peak Base Camp",
      placeDescription: "The contingency day held at base camp for weather or a second summit attempt.",
      ...PISANG_BC,
      html: p(
        "The day held in reserve. On Pisang the usual reason to need it is wind on the exposed upper slope, or a member who needs another day at base camp before going high — which on a fast-approach itinerary is not unusual.",
        "If yesterday failed, the group returns to high camp today and climbs tomorrow, with the ropes already fixed.",
        "If the summit went to plan, camp comes down and the group descends to Pisang and along the valley toward Manang, banking a day for the Thorong La later. Overnight at base camp or Pisang.",
      ),
    },
    {
      title: "Trek from Pisang Peak Base Camp (4,380 m) to Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The largest village in the upper Marsyangdi, a Tibetan trading town below the Annapurnas.",
      ...MANANG,
      html: p(
        "Camp comes down after breakfast and the group descends to <strong>Upper Pisang</strong>, then takes the high route west past <strong>Ghyaru</strong> and <strong>Ngawal</strong> — the balcony trail, with the whole Annapurna range across a valley two kilometres deep.",
        "It is the best walking day on the Circuit and it is a great deal more enjoyable with a summit behind you than it would have been on the way in.",
        "<strong>Manang (3,540 m)</strong> is a substantial Tibetan-style town with bakeries, gear shops, ATMs and a cinema showing mountaineering films every afternoon. Around 7 hours. Overnight at Manang.",
      ),
    },
    {
      title: "Rest and Acclimatisation Day at Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The Tibetan trading town below the Annapurnas, on the rest day before the Thorong La.",
      ...MANANG,
      html: p(
        "A rest day in the best village on the Circuit, and a useful one — the Thorong La is three days away and the legs have just done a summit.",
        "The morning walk goes up to the <strong>Gangapurna glacier lake</strong> and the viewpoint above it, an hour of climbing for a full view of Gangapurna's ice fall and the Annapurna wall behind it. Those who would rather do nothing are under no obligation.",
        "The Himalayan Rescue Association clinic gives a free altitude talk each afternoon in season, which is worth attending before the pass. Bakeries, a hot shower and a film in the evening. Overnight at Manang.",
      ),
    },
    ...chuluWestPeakClimbing.days.slice(13, 19).map((d) => ({
      ...d,
      html: d.html.replace(
        "Chulu East, 165 m higher and a step harder, is the question our returning Chulu West climbers most often ask about.",
        "Chulu West and Chulu East are the two our returning Pisang Peak climbers most often ask about, and both are a natural next step from here.",
      ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const singuChuliPeakClimbing: Climb = {
  region: "Annapurna Region",
  price: 4650,
  difficulty: "extreme",
  maxAltitude: 6501,
  grade: "D",
  center: [83.87, 28.53],
  zoom: 11,
  content: {
    slug: "singu-chuli-peak-climbing",
    title: "Singu Chuli Peak Climbing",
    overview:
      "<p><strong>Singu Chuli (6,501 m)</strong> — <strong>Fluted Peak</strong> to the expeditions that named it — stands inside the Annapurna Sanctuary and is one of the hardest peaks on the Nepal Mountaineering Association's list. It was first climbed in <strong>1957 by Wilfrid Noyce and David Cox</strong>, and it has never become popular, because the fluted ice faces it is named for are steep, unreliable and genuinely difficult.</p><p>Graded <strong>D</strong>, the route gives sustained ice at 50 to 60 degrees on ground where the snow quality decides everything, followed by a corniced summit ridge. It is climbed from a base camp in the Sanctuary beneath the south face of <strong>Annapurna I</strong>, reached by one of the finest walks in Nepal — the Modi Khola gorge from Chomrong, into a glacial amphitheatre with no way out except the way you came in. We sell it to experienced alpinists only.</p>",
    highlights: [
      ["Summit Singu Chuli (6,501 m)", "One of the hardest peaks on the NMA list, first climbed by Noyce and Cox in 1957."],
      ["The Fluted Ice Faces", "Sustained 50–60° ice where the snow quality decides the day, finishing on a corniced ridge."],
      ["Base Camp in the Annapurna Sanctuary", "A glacial amphitheatre ringed by Annapurna I, Annapurna South, Machhapuchhre and Gangapurna."],
      ["The Modi Khola Gorge Approach", "Walk in through bamboo forest and a vertical-walled gorge from Chomrong — one of the finest approaches in Nepal."],
      ["One Sherpa Per Climber", "One-to-one support on steep fluted ice, which is what this ground actually requires."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. The Sanctuary is on the wet side of the range and holds considerably more snow than Manang, which is the central problem on this peak: the <strong>flutings need to be frozen hard</strong> to take tools and screws, and a warm spell turns them into unprotectable sugar.</p><p><strong>Autumn is the stronger season</strong>, with better-consolidated post-monsoon ice. Spring can be excellent in a cold year and unclimbable in a snowy one. The Modi Khola gorge is also <strong>avalanche country</strong> between Dovan and Deurali after heavy snow, and there are winters when the approach itself is closed. We run a small number of departures and will cancel rather than commit a team to soft flutings.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>, and among the hardest of the NMA peaks. From <strong>base camp at around 4,300 m</strong> in the Sanctuary the route gains the glacier and climbs to a <strong>high camp at 5,300 m</strong>, and then onto the face the mountain is named for.</p><p>The <strong>flutings</strong> are the climb: ice and snow at <strong>50 to 60 degrees</strong>, with short steeper steps, climbed on fixed rope with two tools for several hours. Above them a <strong>corniced summit ridge</strong> is followed one at a time. Twelve to sixteen hours from high camp with a long abseil descent. Nothing is desperate in isolation; the difficulty is the sustained angle, the unreliable medium and the length of the day.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require <strong>alpine experience at AD+ or above</strong>, previous time at 6,000 m, and demonstrable competence on <strong>steep ice</strong> — Scottish winter grade IV, or equivalent water and alpine ice. A background of trekking peaks alone does not qualify and we will decline the booking.</p><p>You should be able to place screws on steep ground, climb efficiently with two tools, and abseil from a hanging stance while tired. Your guide assesses this at base camp and has absolute authority to stop a climber going higher. On flutings where protection is marginal, a slow climber extends everyone's exposure.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>technical mountaineering to 6,500 m or above, including steep ice and abseiling</strong>, is mandatory — and note that Singu Chuli is 6,501 m, so a policy capped at exactly 6,500 m does not cover the summit. We check the wording before permits are issued and we reject general adventure cover as a matter of course.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. The Sanctuary is well served by helicopters from Pokhara and base camp is reachable in clear weather, which makes evacuation better here than in most technical areas. Nothing above high camp is reachable, and a rescue from the flutings would be a technical operation by the climbing team first.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong>, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and a headlamp with lithium batteries and a spare.</p><p>The approach is wet, warm and humid for four days, so bring proper waterproofs and be prepared for leeches in the gorge in spring. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, and our Sherpas fix the flutings and the ridge. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates</strong> — a requirement rather than a preference on this route.</p>",
      },
    ],
    faqs: [
      { question: "Why is Singu Chuli so much harder than other NMA peaks?", answer: "Because of the flutings. Most trekking peaks have one steep section on reliable ice; Singu Chuli has several hundred metres of 50 to 60 degree fluted snow and ice where the medium itself is the problem — sometimes it takes tools beautifully and sometimes it will not hold anything. That unpredictability is what makes it grade D." },
      { question: "How does it compare with Tharpu Chuli?", answer: "Tharpu Chuli, its neighbour in the Sanctuary, is 838 m lower and graded PD+ — a straightforward snow climb. Singu Chuli is a technical ice route. They share a base camp and almost nothing else, which is why our two-peak itinerary climbs Tharpu Chuli first." },
      { question: "What is the summit success rate?", answer: "Low, and we will not flatter it — between a quarter and a half of our departures reach the summit, and conditions on the flutings account for most of the difference. Some seasons the face is simply not in condition and we say so before the team commits." },
      { question: "Does my insurance need to cover above 6,500 m?", answer: "Yes. Singu Chuli is 6,501 m and a great many mountaineering policies stop at exactly 6,500 m, which covers everything except the summit. We have turned climbers away at the Kathmandu briefing over this, so read the certificate before you fly." },
      { question: "Where is base camp?", answer: "At around 4,300 m in the Annapurna Sanctuary, a short distance beyond Annapurna Base Camp on the glacier moraine. It is a tented camp with a mess tent, kitchen tent and toilet tent and a cook crew, ringed by the highest amphitheatre of mountains in Nepal." },
      { question: "How dangerous is the gorge approach?", answer: "The section between Dovan and Deurali is genuine avalanche terrain after heavy snow, and there are two or three places the guide will cross quickly and without stopping. In a bad winter the trail closes entirely. In a normal season it is simply a beautiful walk." },
      { question: "Do I need to lead climb?", answer: "No — the flutings are fixed by our Sherpas and climbed on a jumar. What you need is the movement competence of a climber who could lead at that grade, because ascending steep fluted snow in poor conditions demands the same footwork and composure that leading does." },
      { question: "Is there a glacier to cross?", answer: "Yes, between base camp and high camp, and it is crossed roped as a team. It is not the crux of the route by any measure, but rope-team technique is checked at the base camp assessment along with everything else." },
      { question: "Can I climb Singu Chuli as my first Himalayan peak?", answer: "No. We will decline the booking. The natural progression is a 6,000 m trekking peak, then something at AD+ such as Kyajo Ri or Chulu East, and then this. Alpine experience elsewhere at D grade can substitute for the middle step but not for the first." },
      { question: "Why is the peak called Fluted Peak?", answer: "Because of the flutings — the parallel runnels of snow and ice carved into its faces by wind and melt, which give it a ribbed appearance from the Sanctuary floor. The 1957 expedition named it that, and the name describes exactly what makes it difficult." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private tourist bus or car from Kathmandu to Pokhara and back.",
        "Private jeep transport between Pokhara and the Siwai road head in both directions.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at Singu Chuli base camp (4,300 m) and high camp (5,300 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permit for Singu Chuli, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One climbing Sherpa per climber above base camp, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew for the base camp and high camp nights.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "Fixing of the fluted face and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Group ice protection: screws, snow stakes, anchors and all fixed and main ropes.",
        "Porter transport of group climbing equipment and camp gear into the Sanctuary.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      extra: [
        "Personal technical ice tools, crampons, harness and belay device, which we ask climbers to bring rather than rent for this route.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the face is unsafe.",
    },
    porterDays: 15,
    gearRentalDays: 0,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 21-day itinerary climbing Singu Chuli (6,501 m), one of the hardest peaks on the NMA list, from a base camp in the Annapurna Sanctuary, with a technical assessment day, a high camp at 5,300 m and two reserve days.",
    inExDescription:
      "Road transport to Pokhara and the Sanctuary road head, Kathmandu and Pokhara hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, the NMA climbing permit, ACAP and TIMS, a licensed climbing guide with one Sherpa per climber, all group ice equipment, rope fixing and the assessment day are included, while international flights, visa, technical mountaineering insurance, personal technical equipment, personal gear, city meals, tips and weather-related extra costs are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Singu Chuli Peak Climbing (6,501 m) — 21 Days | Green Compass Treks",
      description:
        "Climb Singu Chuli (Fluted Peak, 6,501 m), one of the hardest peaks on the NMA list, from the Annapurna Sanctuary. 21 days of grade D fluted ice with one Sherpa per climber. Experienced alpinists only.",
      keywords:
        "singu chuli climbing, fluted peak nepal, singu chuli 6501m, annapurna sanctuary climbing, hardest trekking peak nepal, technical climbing annapurna",
      tags: "Singu Chuli, Fluted Peak, Annapurna Region, Technical Climb, 6000m Peak, Annapurna Sanctuary",
    },
  },
  days: [
    ...sanctuaryApproach("twenty-one day"),
    {
      title: "Trek from Annapurna Base Camp (4,130 m) to Singu Chuli Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "A tented camp on the glacier moraine in the Sanctuary, beneath the fluted faces of Singu Chuli.",
      ...THARPU_CHULI_BC,
      html: p(
        "A short day off the trekking trail and onto the moraine of the <strong>South Annapurna glacier</strong>, working north-west across boulder ground into the heart of the Sanctuary.",
        "<strong>Singu Chuli Base Camp (4,300 m)</strong> is a tented camp with the mountain directly above and the <strong>south face of Annapurna I</strong> — three thousand metres of it — filling the northern wall of the amphitheatre.",
        "The afternoon is spent reading the route with your guide: the glacier, the high camp shelf, and the fluted face above it that is the whole difficulty of this peak. Around 3 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "The base camp in the Sanctuary, where each climber is assessed on steep ice.",
      ...THARPU_CHULI_BC,
      html: p(
        "The day that decides who climbs. On the ice above camp each climber works through <strong>two-tool movement on steep ice, placing and removing screws, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your guide is assessing efficiency under fatigue rather than best-case technique, because on flutings where protection is marginal the safety margin is made of speed.",
        "Anyone the guide is not satisfied with is told today, at base camp. Meanwhile the Sherpas are above, <strong>fixing the glacier and the lower face</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Singu Chuli Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "The base camp in the Sanctuary, on the acclimatisation day before the climb.",
      ...THARPU_CHULI_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>4,800 m</strong> and back, on ground that asks nothing technical.",
        "The Sanctuary from up here is the whole point of the place: <strong>Annapurna I</strong>, Annapurna South, Hiunchuli, Gangapurna, Tarke Kang and Machhapuchhre in a complete ring, with the Modi Khola gorge as the only gap in it.",
        "The afternoon is rest and packing. The Sherpas report on the condition of the flutings, which is the information the summit plan actually rests on. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (4,300 m) to Singu Chuli High Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Singu Chuli High Camp",
      placeDescription: "A tented camp at 5,300 m on a shelf above the glacier, below the fluted face.",
      lng: 83.8683,
      lat: 28.5433,
      html: p(
        "A serious carry. The route crosses the glacier roped and then climbs fixed line onto the shelf above it, gaining a thousand metres in five to six hours with a moderate load.",
        "<strong>High camp (5,300 m)</strong> is a handful of platforms cut into the shelf, exposed and cold, with the <strong>fluted face</strong> rising directly overhead — close enough to see how the snow is lying on it, which is what everyone spends the afternoon doing.",
        "Early dinner, kit laid out, rope pairs set, and your guide's weather call and a <strong>hard turnaround time</strong>. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Singu Chuli (6,501 m) and Descend to Base Camp (4,300 m)",
      elevation: "6,501 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "The 6,501 m summit of Singu Chuli, Fluted Peak, in the Annapurna Sanctuary.",
      ...SINGU_CHULI,
      html: p(
        "Moving by midnight, because the flutings have to be climbed and descended while they are frozen. The route goes onto the face within the hour and stays on it.",
        "The <strong>flutings</strong> are the climb: ice and snow at <strong>50 to 60 degrees</strong> with short steeper steps, climbed on fixed rope with two tools for hours. Where the snow is firm it is superb; where it is sugary it takes neither tools nor screws well and progress becomes careful and slow.",
        "Above the face a <strong>corniced summit ridge</strong> is followed one at a time with the Sherpas probing ahead. From the <strong>summit (6,501 m)</strong>: <strong>Annapurna I</strong> across the Sanctuary at close range, Annapurna South and Hiunchuli below you, Machhapuchhre's fishtail to the east, and the Pokhara valley visible eight thousand metres below to the south.",
        "The descent is a long sequence of abseils down the flutings and the fixed line to high camp, then base camp. Fourteen to eighteen hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Singu Chuli Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "The first of two contingency days, held for weather or a second summit attempt.",
      ...THARPU_CHULI_BC,
      html: p(
        "The first of two reserve days, and on this peak they are used more often than not. The Sanctuary catches more weather than the Manang side, and the flutings need cold to be climbable at all.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your guide weighs the party's remaining reserves as heavily as the forecast — a second push on grade D ice needs climbers who have genuinely recovered.",
        "If the summit went to plan, the day is rest at base camp with the whole Annapurna amphitheatre to look at. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Singu Chuli Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Singu Chuli Base Camp",
      placeDescription: "The second contingency day, and the last night in the Sanctuary.",
      ...THARPU_CHULI_BC,
      html: p(
        "The second reserve day and the end of the trip's margin. Two of them exist because a single day is frequently not enough on a face this condition-dependent.",
        "If a second attempt is running, the team is at high camp tonight rather than here.",
        "If the climb is finished, base camp comes down today. Everything the group carried into the Sanctuary goes back out with it, and the site is cleared — the Sanctuary is a conservation area and one of the most visited places in Nepal, and what expeditions leave in it stays. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Singu Chuli Base Camp (4,300 m) to Bamboo (2,310 m)",
      elevation: "2,310 m",
      accommodation: "Bamboo",
      placeDescription: "The lodges in the bamboo forest on the floor of the Modi Khola gorge.",
      ...BAMBOO,
      html: p(
        "Off the moraine and back onto the trekking trail at Annapurna Base Camp, then down through <strong>Machhapuchhre Base Camp</strong> and into the gorge.",
        "The descent is long and fast — nearly two thousand metres — and the vegetation comes back in stages: grass, then rhododendron, then birch, then bamboo, with the air thickening and warming all the way.",
        "<strong>Bamboo (2,310 m)</strong> is humid, green and loud with the river, and after a fortnight above the treeline it feels tropical. Around 7 to 8 hours. Overnight at Bamboo.",
      ),
    },
    {
      title: "Trek from Bamboo (2,310 m) to Ghandruk (1,940 m)",
      elevation: "1,940 m",
      accommodation: "Ghandruk",
      placeDescription: "The large Gurung village facing Annapurna South, on the walk out from the Sanctuary.",
      ...GHANDRUK,
      html: p(
        "Out of the gorge to <strong>Sinuwa</strong> and up the long stone staircase to <strong>Chomrong</strong>, which is the sting in the tail of every Sanctuary walk out — five hundred steps up after two thousand metres down yesterday.",
        "Chomrong has the apple pie, the ATM and the first proper shops in ten days, and most groups take longer over lunch than they intend to.",
        "Then down to the Kimrong Khola and up the far side to <strong>Ghandruk (1,940 m)</strong>, with Annapurna South and Machhapuchhre behind you for the last time. Around 7 hours. Overnight at Ghandruk.",
      ),
    },
    {
      title: "Trek to Siwai and Drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A short descent through rice terraces and bamboo to the road head at <strong>Siwai</strong>, where the jeeps are waiting.",
        "The two-hour drive back to <strong>Pokhara (822 m)</strong> runs through terraced farmland and villages, and the transition from a glacier basin to a lakeside town in a single morning is one of the pleasures of the Sanctuary.",
        "The afternoon is free: a hot shower, a proper meal and an hour by <strong>Phewa Lake</strong>, where on a clear evening the peak you climbed is visible over the ridge. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning by the lake before the road, with the Annapurnas and Machhapuchhre reflected in it on a clear day.",
        "The drive to <strong>Kathmandu</strong> takes most of the day on the Prithvi Highway, following the Trishuli east through gorge country with a lunch stop at a riverside restaurant. The 25-minute flight is available as an add-on if you would rather not spend the day on the road.",
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
        "If you are staying on in Nepal, we can arrange Chitwan, Lumbini or a Kathmandu valley tour. Safe travels — climbers who get up Singu Chuli are generally ready for Tilicho Peak or Ama Dablam, and we would be glad to talk about either.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const tharpuChuliAndSinguChuli: Climb = {
  region: "Annapurna Region",
  price: 5850,
  difficulty: "extreme",
  maxAltitude: 6501,
  grade: "PD+ then D",
  center: [83.87, 28.53],
  zoom: 11,
  content: {
    slug: "tharpu-chuli-and-singu-chuli-two-peaks-climbing",
    title: "Tharpu Chuli and Singu Chuli Two Peaks Climbing",
    overview:
      "<p>Two peaks from one base camp inside the <strong>Annapurna Sanctuary</strong>, and they could hardly be more different. <strong>Tharpu Chuli (5,663 m)</strong> — <strong>Tent Peak</strong> — is a straightforward snow climb graded PD+, first ascended by Jimmy Roberts in 1956, and it makes a superb objective in its own right and a near-perfect warm-up. <strong>Singu Chuli (6,501 m)</strong>, the <strong>Fluted Peak</strong> next door, is one of the hardest summits on the NMA list.</p><p>Climbing them in that order, a week apart, from a single tented camp on the glacier moraine, is the best way to attempt Singu Chuli that we know of. Tharpu Chuli puts a 5,663 m summit and a night at 5,000 m into your legs before you go anywhere near the flutings, and it does it without the long drive back down a valley that a two-peak trip usually involves. The base camp view — the <strong>three-thousand-metre south face of Annapurna I</strong> — does not change between them.</p>",
    highlights: [
      ["Tharpu Chuli (5,663 m) and Singu Chuli (6,501 m)", "A PD+ snow climb and a grade D ice route, from one base camp a week apart."],
      ["Tent Peak as the Perfect Warm-Up", "Jimmy Roberts' 1956 summit, a genuine peak that also builds the altitude the second one demands."],
      ["The Fluted Ice of Singu Chuli", "Sustained 50–60° ice on a face where the snow quality decides the day, finishing on a corniced ridge."],
      ["One Base Camp for Both", "No valley to walk back down between peaks — the Sanctuary holds them both within a few hours of each other."],
      ["Beneath the South Face of Annapurna I", "Base camp faces three thousand metres of the wall Bonington's team climbed in 1970."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong>. Tharpu Chuli is climbable in both seasons with little to choose between them. Singu Chuli is not: the <strong>flutings need to be frozen hard</strong> to take tools and screws, and <strong>autumn is the stronger season</strong> for that, with better-consolidated post-monsoon ice.</p><p>The Sanctuary is on the wet side of the range and holds more snow than Manang, and the Modi Khola gorge between Dovan and Deurali is <strong>avalanche terrain</strong> after heavy falls. In a bad winter the approach closes entirely. We run a small number of departures and will climb Tharpu Chuli and cancel Singu Chuli rather than commit a team to soft flutings, which is a normal outcome rather than a failure.</p>",
      },
      {
        heading: "Climb Difficulty & Technical Grade",
        content:
          "<p><strong>Tharpu Chuli (PD+)</strong>: a glacier approach, a snow slope at 40 to 45 degrees on fixed rope, and a short exposed summit ridge. Six to nine hours from a high camp at 5,000 m. It is a real climb and a manageable one, and a fit trekker with the training day behind them will get up it.</p><p><strong>Singu Chuli (D)</strong> is a different sport. The <strong>flutings</strong> run at <strong>50 to 60 degrees</strong> with short steeper steps, climbed on fixed rope with two tools for hours, on a medium that sometimes takes protection well and sometimes does not. Above them a corniced summit ridge is followed one at a time. Fourteen to eighteen hours with a long abseil descent.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>The entry requirement is set by the second peak. We ask for <strong>alpine experience at AD+ or above</strong>, previous time at 6,000 m, and competence on <strong>steep ice</strong> — Scottish winter grade IV or equivalent. Tharpu Chuli within this itinerary is a warm-up, not a qualification, and a climber who arrives able to do only the first peak will be told so at the assessment.</p><p>That said, the trip works honestly as a one-peak trip. A climber who summits Tharpu Chuli and is not ready for the flutings loses nothing but the second summit, and your guide makes that call at base camp rather than on the face. We would rather sell the itinerary on that basis than pretend everyone gets both.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>technical mountaineering to 6,500 m or above, including steep ice and abseiling</strong>, is mandatory — and note that Singu Chuli is 6,501 m, so a policy capped at exactly 6,500 m does not cover the summit. We check the wording before permits are issued and reject general adventure cover as a matter of course.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. The Sanctuary is well served by helicopters from Pokhara and base camp is reachable in clear weather, which makes evacuation better here than in most technical areas of Nepal. Nothing above high camp is reachable, and a rescue from the flutings would be a technical operation by the climbing team first.</p>",
      },
      {
        heading: "Packing List & Climbing Equipment",
        content:
          "<p><strong>Rigid mountaineering boots</strong>, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-25°C sleeping bag</strong>, an insulated mat, a heavy down jacket, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and a headlamp with lithium batteries and a spare.</p><p>The approach is wet, warm and humid for four days, so bring proper waterproofs and expect leeches in the gorge in spring. We supply <strong>all fixed and main ropes, ice screws, snow stakes and anchors</strong>, fix both routes and strip them on descent. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates</strong> for the Singu Chuli half.</p>",
      },
    ],
    faqs: [
      { question: "Why climb Tharpu Chuli first?", answer: "Because it is the easier peak and it does the acclimatisation work. A 5,663 m summit and a night at 5,000 m a week before the flutings is worth more than any amount of resting at base camp, and it also lets your guide watch how you move on real ground before committing to the harder route." },
      { question: "What if I am only up to one of the peaks?", answer: "You climb Tharpu Chuli and enjoy the Sanctuary, which is a perfectly good trip. Your guide makes that call at the assessment day and after the first summit, and it is a normal outcome. Roughly a third of our climbers on this itinerary do one peak rather than two." },
      { question: "How different are the two climbs?", answer: "Completely. Tharpu Chuli is a 40 to 45 degree snow slope with a short ridge — a fit trekker's peak. Singu Chuli is several hundred metres of 50 to 60 degree fluted ice with a corniced crest — an alpinist's. They share a base camp and almost nothing else." },
      { question: "Why is Tharpu Chuli called Tent Peak?", answer: "Because of its shape from the Sanctuary floor: a symmetrical snow pyramid that looks exactly like a tent. Jimmy Roberts, who made the first ascent in 1956 and later founded Nepal's first trekking company, gave it the name." },
      { question: "Is one base camp really enough for both peaks?", answer: "Yes, and it is the main practical argument for the combination. Both high camps are within five or six hours of the same camp at 4,300 m on the glacier moraine, so the group returns to a standing camp with a cook crew between climbs rather than moving everything." },
      { question: "Does my insurance need to cover above 6,500 m?", answer: "Yes, for Singu Chuli. It is 6,501 m and a great many mountaineering policies stop at exactly 6,500 m, covering everything except the summit. We have turned climbers away at the Kathmandu briefing over this." },
      { question: "How many reserve days are there?", answer: "Three in effect — a rest day after Tharpu Chuli that doubles as its contingency, and two held after Singu Chuli. The weighting is deliberate: the second peak is the one that needs the margin." },
      { question: "What are the success rates?", answer: "Around 85 to 90 percent on Tharpu Chuli and 30 to 50 percent on Singu Chuli, and the second figure is honest for a grade D face whose condition varies enormously. Some seasons the flutings are superb and some seasons nobody gets up them." },
      { question: "How dangerous is the gorge approach?", answer: "The section between Dovan and Deurali is genuine avalanche terrain after heavy snow, and there are two or three places the guide will cross quickly and without stopping. In a normal season it is simply one of the most beautiful walks in Nepal." },
      { question: "Can we visit Annapurna Base Camp?", answer: "You walk through it — the approach goes to ABC at 4,130 m and base camp is a few hours beyond it on the moraine. Standing under the three-thousand-metre south face of Annapurna I is part of the trip whether or not either summit goes to plan." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private tourist bus or car from Kathmandu to Pokhara and back.",
        "Private jeep transport between Pokhara and the Siwai road head in both directions.",
      ],
      cityAccommodation: ["Two nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      camping:
        "Tented accommodation at the shared base camp (4,300 m), at Tharpu Chuli high camp (5,000 m) and at Singu Chuli high camp (5,300 m), with a mess tent, kitchen tent and toilet tent.",
      permits: `Nepal Mountaineering Association climbing permits for Tharpu Chuli and Singu Chuli, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One climbing Sherpa for every two climbers on Tharpu Chuli, and one per climber on Singu Chuli, with all their equipment, wages and insurance.",
      extra: [
        "Cook and kitchen crew at base camp for the whole climbing period, and at both high camps.",
        "A full training and assessment day at base camp covering crampons, ice tools, screws, fixed-rope work and abseiling from hanging stances.",
        "Fixing of Tharpu Chuli's snow slope and of Singu Chuli's fluted face and summit ridge, and stripping of the ropes on descent.",
        "Group ice protection: screws, snow stakes, anchors and all fixed and main ropes.",
        "Porter transport of group climbing equipment and camp gear into the Sanctuary.",
        "A rest and contingency day after Tharpu Chuli and two reserve days for Singu Chuli.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      extra: [
        "Personal technical ice tools, crampons, harness and belay device for the Singu Chuli half, which we ask climbers to bring rather than rent.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a Singu Chuli attempt called off because the face is unsafe.",
    },
    porterDays: 18,
    gearRentalDays: 0,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 24-day itinerary climbing Tharpu Chuli (5,663 m) and then Singu Chuli (6,501 m) from a single base camp in the Annapurna Sanctuary, with a shared training day, a high camp for each peak and three contingency days.",
    inExDescription:
      "Road transport to Pokhara and the Sanctuary road head, Kathmandu and Pokhara hotel nights, teahouse and tented accommodation, three meals a day on the trek and at the camps, both NMA climbing permits, ACAP and TIMS, a licensed climbing guide with Sherpa support rising to one per climber on Singu Chuli, all group ice equipment, rope fixing on both routes and the assessment day are included, while international flights, visa, technical mountaineering insurance, personal technical equipment, personal gear, city meals and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Tharpu Chuli and Singu Chuli — 24 Days, Two Sanctuary Peaks | Green Compass Treks",
      description:
        "Climb Tharpu Chuli (Tent Peak, 5,663 m) and then Singu Chuli (Fluted Peak, 6,501 m) from one base camp in the Annapurna Sanctuary. 24 days, a PD+ warm-up and a grade D ice route.",
      keywords:
        "tharpu chuli singu chuli, tent peak fluted peak, annapurna sanctuary two peaks, tharpu chuli climbing, singu chuli climbing, two peak nepal",
      tags: "Tharpu Chuli, Singu Chuli, Annapurna Sanctuary, Two Peaks, Technical Climb, Annapurna Region",
    },
  },
  days: [
    ...singuChuliPeakClimbing.days.slice(0, 12).map((d) => ({
      ...d,
      html: d.html
        .replace("twenty-one day plan", "twenty-four day plan")
        .replace(
          "<strong>Singu Chuli Base Camp (4,300 m)</strong> is a tented camp with the mountain directly above",
          "The <strong>base camp (4,300 m)</strong> serves both peaks and is a tented camp with Tharpu Chuli and Singu Chuli both directly above",
        )
        .replace(
          "the high camp shelf, and the fluted face above it that is the whole difficulty of this peak",
          "Tharpu Chuli's snow slope for next week, and the fluted face above it that is the whole difficulty of the second peak",
        ),
    })),
    {
      title: "Trek from Base Camp (4,300 m) to Tharpu Chuli High Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tharpu Chuli High Camp",
      placeDescription: "A tented camp at 5,000 m on the glacier shelf below the snow slope of Tent Peak.",
      lng: 83.8811,
      lat: 28.5361,
      html: p(
        "The first climb of the trip, and a gentle introduction to it. The route crosses the glacier roped and climbs onto a shelf at 5,000 m in four to five hours with a moderate load.",
        "<strong>Tharpu Chuli high camp (5,000 m)</strong> is a set of platforms on the snow with the pyramid of the peak rising directly above — from here the shape that earned it the name <em>Tent Peak</em> is obvious.",
        "An early dinner, kit laid out and rope teams assigned. This night at 5,000 m is the acclimatisation that makes Singu Chuli possible next week, and it is doing that job whether or not the summit goes tomorrow. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Tharpu Chuli (5,663 m) and Descend to Base Camp (4,300 m)",
      elevation: "5,663 m",
      accommodation: "Base Camp",
      placeDescription: "The 5,663 m summit of Tharpu Chuli, Tent Peak, in the Annapurna Sanctuary.",
      ...THARPU_CHULI,
      html: p(
        "Moving by four in the morning, roped and in crampons. The route climbs the glacier above camp and then onto the <strong>snow slope</strong> — 40 to 45 degrees, fixed by our Sherpas, and climbed steadily on a jumar for two to three hours.",
        "Near the top the slope narrows into a <strong>short exposed ridge</strong>, taken one at a time, and the summit is small enough to hold three or four people.",
        "From the <strong>summit (5,663 m)</strong> the entire Sanctuary is laid out: the south face of <strong>Annapurna I</strong> at close range, Annapurna South and Hiunchuli to the west, Machhapuchhre's fishtail east, and <strong>Singu Chuli</strong> directly across the glacier, with the flutings you will be on in five days clearly visible.",
        "The descent reverses the slope and the glacier to base camp. Seven to ten hours. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Contingency Day at Base Camp (4,300 m)",
      elevation: "4,300 m",
      accommodation: "Base Camp",
      placeDescription: "The shared base camp, on the rest day between the two peaks.",
      ...THARPU_CHULI_BC,
      html: p(
        "A rest day between the peaks, and the contingency day for the first one. If Tharpu Chuli was turned back yesterday, the group goes back up to high camp today and climbs tomorrow.",
        "If the summit went to plan, this is genuine rest: eating, sleeping and letting the altitude from a 5,663 m summit and a night at 5,000 m consolidate before the harder route.",
        "In the afternoon your guide reviews the Sherpa team's report on the <strong>flutings</strong> and gives each climber an honest assessment of whether the second peak is sensible for them. That conversation happens here, at base camp, and not on the face. Overnight at base camp.",
      ),
    },
    ...singuChuliPeakClimbing.days.slice(12, 16),
    ...singuChuliPeakClimbing.days.slice(16, 21).map((d) => ({
      ...d,
      html: d.html.replace(
        "climbers who get up Singu Chuli are generally ready for Tilicho Peak or Ama Dablam, and we would be glad to talk about either.",
        "climbers who get up both of these are generally ready for Tilicho Peak or Ama Dablam, and we would be glad to talk about either.",
      ),
    })),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const tilichoPeakExpedition: Climb = {
  region: "Annapurna Region",
  price: 19500,
  difficulty: "extreme",
  maxAltitude: 7134,
  grade: "AD+",
  expedition: true,
  royalty: true,
  center: [83.87, 28.69],
  zoom: 10,
  content: {
    slug: "tilicho-peak-expedition",
    title: "Tilicho Peak Expedition",
    overview:
      "<p><strong>Tilicho Peak (7,134 m)</strong> stands at the western end of the Annapurna massif above <strong>Tilicho Lake</strong>, one of the highest lakes of its size in the world. It was first climbed in <strong>1978 by a French team</strong>, and it is climbed rarely enough that a season may pass with no ascent at all — the permit is a Department of Tourism royalty peak, the approach is long, and the mountain has a reputation for wind that is entirely deserved.</p><p>The climbing is a sustained <strong>AD+</strong> on snow and ice, with a long summit ridge that runs above 6,800 m for hours and is fully exposed to whatever is coming across the Tibetan plateau. What makes the expedition special is the setting: a base camp beside a frozen turquoise lake at 4,919 m, with the whole north side of the Annapurnas on one flank and the Kali Gandaki dropping away to Dhaulagiri on the other.</p>",
    highlights: [
      ["Summit Tilicho Peak (7,134 m)", "A rarely climbed 7,000 m summit at the western end of the Annapurna massif, first ascended in 1978."],
      ["Tilicho Lake (4,919 m)", "Base camp beside one of the highest lakes of its size on earth, frozen turquoise for most of the climbing season."],
      ["A Long Exposed Summit Ridge", "Hours above 6,800 m on a crest fully exposed to the wind off the Tibetan plateau."],
      ["The Annapurna Circuit Approach", "Walk in through Chame, Pisang and Manang on the classic Circuit before turning west for the lake."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a genuine 7,000 m peak."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>. Manang sits in the rain shadow and is drier than the eastern Himalaya through both seasons, which is an advantage everywhere on this trip except the summit ridge.</p><p><strong>Wind is the governing factor.</strong> The ridge is exposed to a westerly airflow off the Tibetan plateau that funnels between Annapurna and Dhaulagiri, and it closes the summit far more often than snow or cold do. Autumn is generally the more settled of the two windows. We run one or two departures a year and build three reserve days in, because on this mountain the difference between a summit and a failure is usually a single calm morning.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>AD+</strong>. From <strong>base camp at 5,000 m</strong> above Tilicho Lake the route crosses a glacier and climbs fixed line to <strong>Camp 1 at around 5,700 m</strong>, then continues on steepening snow and ice to a <strong>high camp at 6,300 m</strong>.</p><p>Summit day follows the <strong>long east ridge</strong>, which is the character of the climb: never desperate, corniced in places, and above 6,800 m for several hours with no shelter anywhere on it. Ten to fourteen hours from high camp with an abseil descent of the steep sections. Parties are turned back by the wind on that ridge more often than by anything else, and the turnaround time is set accordingly.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m summit</strong> and comfort on fixed rope and roped glacier travel. Alpine experience at AD is ideal. What matters most is that you have slept above 5,500 m and know how your body handles it, because this expedition asks you to live at 5,000 m for a fortnight and then climb to 7,134 m without oxygen.</p><p>The acclimatisation is built into the Circuit approach and the lake camp: nights at Pisang, Ngawal and Manang, then Khangsar and Tilicho base camp, then a rotation to Camp 1 before the summit push. It is a generous profile, and it needs to be — the summit day is long and the ridge offers nowhere to reconsider.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>mountaineering to 7,500 m, including fixed-rope climbing, roped glacier travel and abseiling</strong>, is mandatory. Ordinary adventure travel cover does not qualify and we reject it. A national alpine club policy or a specialist mountaineering insurer is what this expedition needs, and we verify the wording before permits are issued.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included with a limit high enough to be useful. Helicopters reach Tilicho Lake and base camp in clear weather from Pokhara and Manang, which is better than most 7,000 m peaks offer. Nothing above Camp 1 is reachable, and an incident on the ridge means a technical lowering by the team first.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, an ice axe, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>Wind is the enemy on this mountain, so a <strong>properly wind-proof shell and a face covering that works with goggles</strong> matter more here than on most peaks. We supply all fixed and main ropes, screws, snow stakes, anchors and camp equipment, and our Sherpas fix the route. <strong>Climbers bring their own harness, crampons, axe, belay device, ascender and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Tilicho Peak climbed?", answer: "Rarely — a handful of expeditions in most years and seasons with no ascent at all. It is a Department of Tourism royalty peak with a long approach and a serious wind problem, and none of those things attract commercial traffic. You will almost certainly be the only team on it." },
      { question: "Is Tilicho Lake really the highest lake in the world?", answer: "It is one of the highest lakes of its size — at 4,919 m and roughly four kilometres long, it is among the largest bodies of water at that altitude anywhere. There are smaller tarns higher up, including in Nepal, so the superlative depends on how you define it. It is a remarkable thing to camp beside either way." },
      { question: "Why is wind such a problem here?", answer: "The gap between Annapurna and Dhaulagiri funnels a westerly airflow off the Tibetan plateau, and Tilicho's summit ridge sits directly in it. On the wrong day the ridge is simply unclimbable, and on the right day it is straightforward. That variance is why we carry three reserve days." },
      { question: "How does this compare with Baruntse?", answer: "Similar in grade and 5 m higher, but with a much longer and more exposed summit ridge and considerably more wind. Baruntse is the better preparation for an 8,000 m peak because it is more predictable; Tilicho is the more atmospheric expedition and the rarer summit." },
      { question: "Is supplementary oxygen used?", answer: "No. Tilicho is within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camp and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "Can we walk to Tilicho Lake as a trek instead?", answer: "Many people do — the lake is a popular three-day detour from the Annapurna Circuit and needs no climbing permit. If the peak is beyond you but the lake is not, that trek is a genuinely good trip and we run it. This itinerary uses the same approach and then keeps going." },
      { question: "How many camps are there above base?", answer: "Two — Camp 1 at around 5,700 m and a high camp at 6,300 m. The expedition runs one full rotation through Camp 1 before the summit push, which is the structure a 7,134 m summit day needs when there is no oxygen involved." },
      { question: "What is the approach like?", answer: "The northern Annapurna Circuit as far as Manang — jeep up the Marsyangdi, then Chame, Upper Pisang and the Ghyaru high route — and then west through Khangsar to the lake. The last section is a narrow, eroded trail across a scree slope that is the reason Tilicho Lake has a reputation, and it is walked carefully." },
      { question: "How exposed is base camp?", answer: "Very. It sits at 5,000 m above the lake with no shelter and takes the full westerly wind, and tents are guyed properly and weighted with rock. It is a spectacular place and not a comfortable one, and the group lives there for a fortnight." },
      { question: "What is the summit success rate?", answer: "Around 40 to 55 percent on our departures, with wind on the summit ridge accounting for almost all the turn-backs. In a settled autumn the figure is much higher; in a windy season it can be zero, and we say so before taking a booking." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private jeep transport from Humde or Chame to Besisahar and onward to Kathmandu at the end of the expedition.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 5,000 m above Tilicho Lake, with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,700 m) and high camp (6,300 m).",
      permits: `Department of Tourism Tilicho Peak climbing royalty and permit, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camp and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on ice, fixed-rope work and abseiling.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice slopes and the summit ridge by our climbing Sherpas, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Manang and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice axe, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for wind or conditions, or an early descent from the mountain.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 30-day expedition on Tilicho Peak (7,134 m) from a base camp above Tilicho Lake, approached on the Annapurna Circuit through Manang and Khangsar, with two camps above base, an acclimatisation rotation and three reserve days.",
    inExDescription:
      "Jeep transport up and down the Marsyangdi, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, ACAP and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, mountaineering insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Tilicho Peak Expedition (7,134 m) — 30 Days | Green Compass Treks",
      description:
        "Climb Tilicho Peak (7,134 m) from a base camp above Tilicho Lake, a rarely climbed 7,000 m summit at the western end of the Annapurnas. 30 days with two camps, a rotation and one Sherpa per climber.",
      keywords:
        "tilicho peak expedition, tilicho peak 7134m, tilicho lake climbing, 7000m peak annapurna, rarely climbed peaks nepal, tilicho climbing cost",
      tags: "Tilicho Peak, Tilicho Lake, Annapurna Region, Expedition, 7000m Peak, Manang",
    },
  },
  days: [
    ...chuluWestPeakClimbing.days.slice(0, 7).map((d) => ({
      ...d,
      html: d.html.replace("nineteen-day plan", "thirty-day plan"),
    })),
    {
      title: "Trek from Ngawal (3,660 m) to Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The largest village in the upper Marsyangdi, a Tibetan trading town below the Annapurnas.",
      ...MANANG,
      html: p(
        "West along the high route from Ngawal, contouring above the Marsyangdi with the whole Annapurna range opposite, then dropping to the valley floor and following it to Manang.",
        "<strong>Manang (3,540 m)</strong> is a substantial Tibetan-style town of flat-roofed houses with bakeries, gear shops, ATMs and a cinema that shows mountaineering films every afternoon. It is the last place with any of that.",
        "The expedition's final resupply happens here, and the porters and pack animals for the lake are engaged. Around 5 hours. Overnight at Manang.",
      ),
    },
    {
      title: "Acclimatisation Day at Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The Tibetan trading town below the Annapurnas, on the last acclimatisation day before the lake.",
      ...MANANG,
      html: p(
        "The morning walk goes up to the <strong>Gangapurna glacier lake</strong> and the viewpoint above it, an hour of climbing for a full view of Gangapurna's ice fall and the Annapurna wall behind it.",
        "The Himalayan Rescue Association clinic gives a free altitude talk each afternoon in season, and it is worth attending even on an expedition — the doctors see more altitude illness in a Manang autumn than most people see in a career.",
        "The afternoon is rest and the last hot shower for a fortnight. Your leader takes saturation readings and reviews the team before committing to the lake. Overnight at Manang.",
      ),
    },
    {
      title: "Trek from Manang (3,540 m) to Khangsar (3,750 m)",
      elevation: "3,750 m",
      accommodation: "Khangsar",
      placeDescription: "The last village on the road to Tilicho Lake, a small Tibetan settlement west of Manang.",
      ...KHANGSAR,
      html: p(
        "West out of Manang and off the Circuit, following the Khangsar Khola on a trail that carries a fraction of the traffic of the main route.",
        "<strong>Khangsar (3,750 m)</strong> is a compact Tibetan village of stone houses and barley terraces, with a ruined gompa above it and a handful of lodges. It calls itself the last village before Tilicho and it is right.",
        "A short day by design — the altitude climbs from here and the trail ahead is the one Tilicho is known for. Around 3 to 4 hours. Overnight at Khangsar.",
      ),
    },
    {
      title: "Trek from Khangsar (3,750 m) to Tilicho Base Camp (4,150 m)",
      elevation: "4,150 m",
      accommodation: "Tilicho Base Camp",
      placeDescription: "A lodge settlement below the landslide slope on the approach to Tilicho Lake.",
      ...TILICHO_BC,
      html: p(
        "The day the trail earns its reputation. Above Khangsar the path climbs onto a vast <strong>eroded scree slope</strong> and traverses it for two hours, cut into ground that moves — this is the section that closes after heavy rain and that everyone who has walked it remembers.",
        "It is walked carefully, spaced out, and without stopping in the worst of it. The exposure is real and the ground underfoot is loose.",
        "<strong>Tilicho Base Camp (4,150 m)</strong> is a lodge settlement at the far end, misleadingly named — the real base camp is a day and 850 m higher. Around 5 hours. Overnight at Tilicho Base Camp.",
      ),
    },
    {
      title: "Trek to Tilicho Lake (4,919 m) and Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp above Tilicho Lake, at 5,000 m on the shoulder below the east ridge.",
      ...TILICHO_LAKE,
      html: p(
        "A long steady climb of 850 m up switchbacks and moraine, and then the ground levels and the lake appears.",
        "<strong>Tilicho Lake (4,919 m)</strong> is four kilometres of turquoise water at an altitude where water should not be, frozen at the edges for most of the climbing season and completely still. Behind it the north face of the Annapurnas rises straight out of the shore.",
        "<strong>Tilicho Peak Base Camp (5,000 m)</strong> is established on the shoulder above the western end of the lake — mess, kitchen, storage and toilet tents alongside the sleeping tents, guyed properly and weighted with rock because the wind here is constant. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp above the lake, where the puja is held before the climb.",
      ...TILICHO_LAKE,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and the climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the mountain before it is done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp, and they do not stop moving — the westerly wind off the plateau is the constant here, and learning to live with it is part of the fortnight. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp, where technique is checked before the team goes onto the route.",
      ...TILICHO_LAKE,
      html: p(
        "A working day on the ice above camp. Every climber is taken through <strong>crampon and axe technique on steep ice, moving as a roped team, ascending fixed line on a jumar with a pack, changing over at anchors, and abseiling</strong>.",
        "Rope-team travel gets particular attention because the glacier below Camp 1 is crevassed and is crossed in the dark on summit push mornings.",
        "Your leader is assessing as much as teaching, and anyone who needs more time gets the afternoon. Meanwhile the Sherpas are above, <strong>fixing the glacier and the slope toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp above the lake, on the acclimatisation day before the rotation.",
      ...TILICHO_LAKE,
      html: p(
        "An acclimatisation walk up the shoulder toward <strong>5,400 m</strong> and back, on ground that asks nothing technical.",
        "The view is the reason people remember this camp. <strong>Tilicho Lake</strong> lies below with the whole north wall of the Annapurnas rising from its far shore, and to the west the ground falls away toward the Kali Gandaki with <strong>Dhaulagiri</strong> beyond it — two 8,000 m peaks visible from one hillside, separated by the deepest gorge on earth.",
        "The afternoon is rest and packing for the rotation. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,700 m on the glacier shoulder below the east ridge.",
      ...TILICHO_C1,
      html: p(
        "The first time on the mountain. The route crosses the glacier roped in the cold of the morning and then climbs fixed line up a steepening slope — five to six hours with a personal load.",
        "<strong>Camp 1 (5,700 m)</strong> sits on a shoulder above the glacier with the lake a long way below and the east ridge rising directly overhead.",
        "The night here is the point of the exercise. Sleeping at 5,700 m before returning to base camp is what makes a summit push from 6,300 m realistic, and it lets your leader see how each climber performs on the actual route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,700 m) to Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp above the lake, where the team recovers after the rotation.",
      ...TILICHO_LAKE,
      html: p(
        "Down the fixed ropes and back across the glacier in three to four hours, off the ice before the sun has been on it long.",
        "Descending to recover is deliberate. Adaptation from last night's altitude consolidates far better at 5,000 m than it would higher, and a team that rests properly now climbs faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ground above Camp 1</strong> toward the high camp. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...TILICHO_LAKE,
      html: p(
        "A genuine rest day, worked at rather than enjoyed. Eating past the point of appetite, four litres of fluid, an afternoon asleep, and staying off the legs.",
        "There is equipment work too: crampons checked and adjusted, harnesses inspected for wear after a day of jumaring, and boots dried in whatever sun the wind allows.",
        "The Sherpa team is high on the mountain establishing the high camp at 6,300 m. Their report on the state of the east ridge is the information the summit plan actually rests on. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...TILICHO_LAKE,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Personal kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the four-day sequence with timings.",
        "A <strong>hard turnaround time</strong> is set for summit day. On a ridge that runs above 6,800 m for hours with no shelter, being late is not a matter of inconvenience.",
        "The satellite forecast arrives in the evening, and on this mountain the number that matters is the wind speed at 7,000 m rather than the precipitation. The go decision is taken on it. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (5,000 m) to Camp 1 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "The glacier shoulder camp at 5,700 m, reoccupied for the summit push.",
      ...TILICHO_C1,
      html: p(
        "The summit push begins, and the ground to Camp 1 goes noticeably faster the second time — four hours or so for a climb that took five or six on the rotation.",
        "Loads are light: the high camp is already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,700 m)</strong> by early afternoon, with the rest of the day to lie down, drink and eat. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,700 m) to High Camp (6,300 m)",
      elevation: "6,300 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,300 m on the east ridge of Tilicho Peak.",
      ...TILICHO_HIGH_CAMP,
      html: p(
        "Four to five hours of steepening snow and ice on fixed rope, onto the ridge proper, with heavier loads than on the rotation.",
        "<strong>High camp (6,300 m)</strong> is a handful of tents on the crest, and it is the most exposed camp of the expedition — there is nothing between it and the wind coming across from Tibet.",
        "Dinner is early and minimal; appetite at 6,300 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Tilicho Peak (7,134 m) and Descend to Camp 1 (5,700 m)",
      elevation: "7,134 m",
      accommodation: "Camp 1",
      placeDescription: "The 7,134 m summit of Tilicho Peak, at the western end of the Annapurna massif.",
      ...TILICHO_PEAK,
      html: p(
        "Moving by two in the morning, roped and on the fixed line. The <strong>east ridge</strong> rises steadily above camp — snow and ice, never desperate, corniced in places, and completely exposed to whatever the wind is doing.",
        "Above 6,800 m the ridge runs for hours with no shelter anywhere on it, and this is the section that decides the day. Parties that are behind schedule here are turned round, and the ones that are not simply keep going in the cold.",
        "The <strong>summit (7,134 m)</strong> looks east along the whole north wall of the Annapurnas to Manang, west across the Kali Gandaki to <strong>Dhaulagiri</strong>, north over the brown Tibetan plateau, and straight down onto the turquoise of <strong>Tilicho Lake</strong> two thousand metres below.",
        "The descent reverses the ridge and abseils the steep sections to high camp, then continues to Camp 1. Twelve to sixteen hours. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,700 m) to Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The expedition base camp above the lake, reached on the descent from the summit.",
      ...TILICHO_LAKE,
      html: p(
        "Camp 1 comes down and the slope is abseiled, with the fixed rope stripped as the team descends. Nothing is left on the mountain, and clearing it properly takes hours.",
        "The glacier is crossed roped in the cold of the morning for the last time.",
        "<strong>Base camp (5,000 m)</strong> by midday, with a hot meal and the first unbroken sleep in four days. Four to six hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The first of three contingency days, held for wind or a second summit attempt.",
      ...TILICHO_LAKE,
      html: p(
        "The first of three reserve days, and on Tilicho they are the most important part of the schedule. The summit ridge is closed by wind far more often than by snow, and wind changes on a timescale of days rather than weeks.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest beside one of the highest lakes on earth, which is a reasonable way to spend a morning. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Tilicho Peak Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The second contingency day, held at base camp for a calm morning on the ridge.",
      ...TILICHO_LAKE,
      html: p(
        "The second reserve day. Three of them exist because on this mountain the difference between a summit and a failed expedition is frequently a single calm morning, and one day in hand is not enough to catch one.",
        "If a second attempt is running, the team is at Camp 1 or the high camp tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp and Camp 1 are stripped by the Sherpa team and everything comes off the mountain. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (5,000 m)",
      elevation: "5,000 m",
      accommodation: "Tilicho Peak Base Camp",
      placeDescription: "The final contingency day, and the last night above Tilicho Lake.",
      ...TILICHO_LAKE,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything the expedition carried up from Manang goes back down on porters and pack animals, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Most teams spend the last of the light looking at the lake, which in the evening goes from turquoise to black in about ten minutes. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Base Camp (5,000 m) to Khangsar (3,750 m)",
      elevation: "3,750 m",
      accommodation: "Khangsar",
      placeDescription: "The last village before Tilicho Lake, reached on the walk out.",
      ...KHANGSAR,
      html: p(
        "Down past the lake and the long descent of switchbacks to Tilicho Base Camp, then back across the <strong>eroded scree slope</strong> — walked as carefully on the way out as on the way in, and with rather more relief.",
        "The vegetation returns below the traverse: first grass, then juniper, then the barley terraces above Khangsar.",
        "<strong>Khangsar (3,750 m)</strong> has lodges, a stove and a menu after a fortnight of tents at 5,000 m in the wind. Around 7 hours. Overnight at Khangsar.",
      ),
    },
    {
      title: "Trek from Khangsar (3,750 m) to Manang (3,540 m) and Drive to Chame (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, reached by jeep on the walk out.",
      ...CHAME,
      html: p(
        "A short walk east back down the Khangsar Khola to <strong>Manang</strong>, rejoining the Circuit and, for most people, going straight to the bakery.",
        "From Manang a jeep takes over on the rough road down the upper Marsyangdi, through Humde and Pisang and down to <strong>Chame (2,670 m)</strong>.",
        "It is a jarring transition — four hours of vehicle after two weeks on foot — but it saves two days of retracing ground already walked. Chame has hot springs beside the river, which after the expedition is worth the short walk. Around 3 hours of walking and 4 of driving. Overnight at Chame.",
      ),
    },
    {
      title: "Drive from Chame (2,670 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day on the road. The jeep grinds down the <strong>Marsyangdi</strong> gorge to Besisahar on a rough road cut into the valley wall, and then joins the highway east.",
        "The <strong>Prithvi Highway</strong> follows the Trishuli back to the Kathmandu valley, with a lunch stop at a riverside restaurant. Nine to eleven hours in total, depending on the road.",
        "Back in <strong>Kathmandu</strong> in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
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
        "Safe travels. Climbers who summit Tilicho are generally ready for an 8,000 m peak, and Manaslu, Himlung and Annapurna itself are the three our returning climbers most often ask about.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const gangapurnaExpedition: Climb = {
  region: "Annapurna Region",
  price: 22500,
  difficulty: "extreme",
  maxAltitude: 7455,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [83.98, 28.63],
  zoom: 11,
  content: {
    slug: "gangapurna-expedition",
    title: "Gangapurna Expedition",
    overview:
      "<p><strong>Gangapurna (7,455 m)</strong> is the mountain everyone in Manang looks at. Its north face and the ice fall beneath it fill the entire southern skyline of the village, and the glacier lake at its foot is the standard afternoon walk for trekkers on the Annapurna Circuit. Almost none of them realise it is climbable, and very few teams try — it was first climbed in <strong>1965 by a German expedition under Günther Hauser</strong>, and successful ascents since can be counted in dozens rather than hundreds.</p><p>The route is graded <strong>D</strong> and it is a serious one: a heavily crevassed glacier, sustained ice at 50 to 55 degrees, a long corniced ridge, and objective hazard from seracs on the lower face that has to be timed rather than avoided. It is one of the hardest 7,000 m peaks in Nepal that is guided at all, and we run it for experienced alpinists with a previous 7,000 m summit behind them.</p>",
    highlights: [
      ["Summit Gangapurna (7,455 m)", "The mountain that dominates Manang, first climbed in 1965 and rarely repeated since."],
      ["A Grade D Route", "Crevassed glacier, sustained 50–55° ice, and a long corniced ridge fixed by our own Sherpa team."],
      ["Base Camp Above the Glacier Lake", "Camp above the ice fall that every Annapurna Circuit trekker photographs from Manang."],
      ["The Annapurna Circuit Approach", "Walk in through Chame, Pisang and the Ghyaru high route with the whole range opposite."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain with no other team to call on."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>. Gangapurna's north face is cold and shaded for much of the day, which is an advantage for the ice and a problem for the hands — this is a mountain where autumn's firm neve is worth a great deal.</p><p>The governing hazard is <strong>serac fall on the lower face</strong>, which is worse after warm spells and after fresh snow. Our leader will abandon an attempt outright rather than move a team through that ground in the wrong conditions, and the itinerary carries three reserve days to make waiting possible. We run one or two departures a year and treat cancellation as a normal outcome.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>, among the harder 7,000 m peaks guided in Nepal. From <strong>base camp at 4,600 m</strong> the route climbs onto a heavily crevassed glacier — roped, marked and crossed in the cold hours — to <strong>Camp 1 at around 5,600 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 50 to 55 degrees</strong>, fixed by our Sherpas, leading to <strong>Camp 2 (6,300 m)</strong> and a <strong>high camp at 6,800 m</strong>. Summit day follows a <strong>long corniced ridge</strong> taken one at a time, and runs twelve to sixteen hours with a full abseil descent. The technical crux is the ice; the real difficulty is doing all of it above 6,000 m on a mountain nobody else has fixed.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 7,000 m summit</strong>, or a previous 6,000 m technical peak combined with alpine experience at D grade. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and able to move quickly through hazardous ground when told to.</p><p>That last point is not rhetorical. On Gangapurna the safety margin on the lower face is made of <strong>speed</strong>, and a climber who moves slowly there increases the exposure for the whole team. Your leader assesses this at base camp and has absolute authority to stop a climber going above Camp 1.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,500 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable on this expedition and we reject it as a matter of course. A national alpine club policy or a specialist mountaineering insurer is the realistic option.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included with a limit high enough to be meaningful. Base camp is close to Manang and its helipad, which makes evacuation from there better than on most technical peaks. Nothing above Camp 1 is reachable by aircraft, and a rescue from the face would be a long technical operation by the climbing team.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Triple or warm double mountaineering boots</strong> rated for 7,500 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers or a light down suit, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>Because the face is shaded and cold, <strong>hand warmth is the practical problem</strong> — bring more glove options than you think you need and a pair you can place a screw in. We supply all fixed and main ropes, screws, snow stakes, anchors and camp equipment, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Gangapurna climbed?", answer: "Rarely — successful ascents since the 1965 first climb number in the dozens rather than hundreds, and there are seasons with none. There is no trodden line, no established camp platforms and no fixed rope from other teams. Every expedition on it fixes its own route." },
      { question: "Is this the mountain visible from Manang?", answer: "Yes, and it is unmissable — the north face and its ice fall fill the entire southern skyline of the village, and the glacier lake below it is the standard afternoon walk for Circuit trekkers. Almost nobody looking at it realises it is a climbing objective." },
      { question: "What is the main hazard?", answer: "Serac fall on the lower face. The ice fall that makes the mountain photogenic from Manang is directly above part of the route, and it cannot be avoided entirely — only timed. We move through it in the cold hours, do not stop in it, and abandon attempts after warm spells or heavy snow." },
      { question: "How does it compare with Tilicho Peak?", answer: "Considerably harder. Tilicho is AD+ with a long exposed ridge and a wind problem; Gangapurna is grade D with sustained 50 to 55 degree ice, serac hazard and 321 m more height. Tilicho is the 7,000 m peak to climb first." },
      { question: "What is the summit success rate?", answer: "Low, and we will not flatter it — under half of the expeditions that attempt it summit, and there are years when none do. Conditions on the lower face account for more abandoned attempts than anything to do with the climbers." },
      { question: "Is supplementary oxygen used?", answer: "No. Gangapurna is within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,600 m, Camp 2 at 6,300 m and a high camp at 6,800 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "Where is base camp and how remote is it?", answer: "At around 4,600 m above the glacier lake south of Manang, which makes it unusually accessible for a peak this hard — half a day's walk from a village with bakeries and an ATM. That accessibility is a real advantage for evacuation and does nothing whatever to make the climbing easier." },
      { question: "Can I book this if I have climbed Ama Dablam?", answer: "Possibly, and we will discuss it. Ama Dablam is a good technical background and it is 643 m lower with fixed ropes maintained by several teams. We would want to see either a 7,000 m summit as well, or a strong record on D-grade alpine routes." },
      { question: "Do you run fixed departures?", answer: "One or two a season, and we are willing to cancel one if conditions are wrong or if the party that assembles is not strong enough. On a grade D route with serac hazard and no other team in the valley, a weak team is a serious problem." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private jeep transport from Kathmandu to Dharapani via Besisahar.",
        "Private jeep transport from Manang or Chame to Besisahar and onward to Kathmandu at the end of the expedition.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast."],
      camping:
        "Full expedition base camp at 4,600 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,600 m), Camp 2 (6,300 m) and high camp (6,800 m).",
      permits: `Department of Tourism Gangapurna climbing royalty and permit, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter and pack-animal transport of all expedition equipment between Manang and base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for serac or avalanche conditions, or a departure cancelled by us because the face is unsafe.",
    },
    gearRentalDays: 0,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 29-day expedition on Gangapurna (7,455 m), the mountain above Manang, with three camps on a grade D route, an acclimatisation rotation, rope fixed by our own team and three reserve days.",
    inExDescription:
      "Jeep transport up and down the Marsyangdi, Kathmandu hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, ACAP and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Gangapurna Expedition (7,455 m) — 29 Days | Green Compass Treks",
      description:
        "Climb Gangapurna (7,455 m), the mountain that dominates Manang, on a 29-day grade D expedition with three camps, sustained 50–55° ice, rope fixed by our own team and one Sherpa per climber.",
      keywords:
        "gangapurna expedition, gangapurna 7455m, manang climbing, technical 7000m nepal, rarely climbed peaks nepal, gangapurna climbing cost",
      tags: "Gangapurna, Annapurna Region, Expedition, 7000m Peak, Technical Climb, Manang",
    },
  },
  days: [
    ...tilichoPeakExpedition.days.slice(0, 9).map((d) => ({
      ...d,
      html: d.html.replace("thirty-day plan", "twenty-nine day plan"),
    })),
    {
      title: "Trek from Manang (3,540 m) to Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp on the moraine above the Gangapurna glacier lake, south of Manang.",
      ...GANGAPURNA_BC,
      html: p(
        "South out of Manang past the <strong>Gangapurna glacier lake</strong> — the turquoise pool that every Circuit trekker walks to in the afternoon — and then onto the moraine above it, on ground that carries no traffic at all.",
        "The climb is steep and steady, a thousand metres onto the shelf beneath the north face, with the ice fall directly overhead and audible.",
        "<strong>Gangapurna Base Camp (4,600 m)</strong> is established properly today: mess, kitchen, storage and toilet tents alongside the sleeping tents. Manang is visible below, close enough to see the lodges, which is a strange thing from an expedition base camp. Around 5 to 6 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...GANGAPURNA_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A lama comes up from Manang, a chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "The ice fall above the camp cracks and collapses at intervals through the day and night, which is both spectacular and a standing reminder of what the lower face involves. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...GANGAPURNA_BC,
      html: p(
        "The day that decides who goes above Camp 1. On the ice below camp each climber is put through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Your leader is assessing speed above all else. On this mountain the safety margin on the lower face is made of how fast the team moves through the serac ground, and a climber who is competent but slow is a problem for everyone on the rope.",
        "Anyone the leader is not satisfied with is told today. Meanwhile the Sherpas begin <strong>marking the glacier and fixing the ground toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...GANGAPURNA_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>5,000 m</strong> and back, on ground that asks nothing technical.",
        "From up there the whole line is legible: the crevassed glacier, the serac ground the route has to cross, the shelf where Camp 1 goes, and the ice face above it. Your leader spends an hour with binoculars going through it with the team.",
        "The afternoon is rest and packing for the rotation. The satellite forecast comes in the evening, and from now on the whole camp thinks in terms of cold nights rather than clear days. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,600 m on the shelf above the glacier, below the ice face.",
      ...GANGAPURNA_C1,
      html: p(
        "The first time on the mountain, and it starts at two in the morning because the serac ground has to be crossed in the cold.",
        "The route works through the <strong>crevassed glacier</strong> roped and on marked line, then across the exposed section below the ice fall — moved through steadily, without stopping — and onto fixed rope up to the shelf. Six to seven hours.",
        "<strong>Camp 1 (5,600 m)</strong> sits above the hazard, which is the first thing anyone notices about it. The night here is the point of the rotation, and it also gives your leader a proper look at how each climber performs on the actual route. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,600 m) to Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...GANGAPURNA_BC,
      html: p(
        "An early descent, timed once again to be through the serac ground before the sun reaches it. Down the fixed ropes and across the glacier in three to four hours.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,600 m than it would higher, and a rested team crosses the hazardous ground faster on the push.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice face above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...GANGAPURNA_BC,
      html: p(
        "A genuine rest day. Eating past the point of appetite, four litres of fluid, an afternoon asleep, and staying off the legs.",
        "Equipment work fills the gaps: tools sharpened, crampons checked, harnesses inspected for wear, and boots dried.",
        "Manang is half a day below and a couple of climbers usually walk down for a bakery run, which is a luxury no other expedition in this catalogue offers and is worth taking. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...GANGAPURNA_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage.",
        "The Sherpa team returns from the face with the report that matters: how the ice is taking screws, how the seracs are behaving, and whether the corniced ridge above Camp 2 is in condition.",
        "The forecast arrives in the evening and the go decision is taken on the two together. A warm spell means waiting, however clear the sky. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,600 m) to Camp 1 (5,600 m)",
      elevation: "5,600 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,600 m above the glacier, reoccupied for the summit push.",
      ...GANGAPURNA_C1,
      html: p(
        "Another two o'clock start, and the glacier and serac ground go faster the second time — five hours or so for a crossing that took six or seven on the rotation. Familiarity with a hazardous section is worth as much as fitness on it.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only and move accordingly.",
        "<strong>Camp 1 (5,600 m)</strong> by mid-morning, with the whole rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings and the load split before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,600 m) to Camp 2 (6,300 m)",
      elevation: "6,300 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,300 m on platforms cut into the ice face.",
      ...GANGAPURNA_HIGH_CAMP,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>ice at 50 to 55 degrees</strong> on fixed rope, and it stays that way for six to seven hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and the north face's shade means hands are the limiting factor rather than legs.",
        "<strong>Camp 2 (6,300 m)</strong> is a handful of tents on platforms cut into the face, small and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,300 m) to High Camp (6,800 m)",
      elevation: "6,800 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,800 m on the shoulder below the summit ridge.",
      ...GANGAPURNA_HIGH_CAMP,
      html: p(
        "A deliberately short day — three to four hours of fixed ice to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,800 m)</strong> is two or three tents on the smallest usable ground on the mountain, and it is the coldest night of the expedition by a distance.",
        "Dinner is early and minimal. Kit is laid out, rope pairs confirmed, and your leader restates the turnaround time. The corniced ridge above is the last thing anyone sees before the headlamps go on. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Gangapurna (7,455 m) and Descend to Camp 2 (6,300 m)",
      elevation: "7,455 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,455 m summit of Gangapurna, above Manang and the Annapurna Circuit.",
      ...GANGAPURNA,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the feature that defines the route.",
        "The <strong>summit ridge</strong> is long, narrow and corniced, taken one at a time with the Sherpas probing the crest ahead. It runs above 7,000 m for hours and it is not hurried — this is where the turnaround time earns its place.",
        "The <strong>summit (7,455 m)</strong> looks north straight down onto <strong>Manang</strong> and the Marsyangdi with the Chulu peaks beyond, west along the range to Tilicho and Dhaulagiri, and south over the wall into the <strong>Annapurna Sanctuary</strong> — both sides of the massif from one point.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Fourteen to eighteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,300 m) to Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...GANGAPURNA_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends — slow work and not optional, since nothing is left on the mountain.",
        "The glacier and the serac ground are crossed in the cold of the early morning, and for the last time.",
        "<strong>Base camp (4,600 m)</strong> in the middle of the day, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The first of three contingency days, held for conditions or a second summit attempt.",
      ...GANGAPURNA_BC,
      html: p(
        "The first of three reserve days, and on Gangapurna they are used more often than not. A warm spell or fresh snow closes the lower face for days at a time regardless of what the sky is doing.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest — and rest half a day above Manang, with the option of walking down for a proper meal, is an unusual luxury after a 7,455 m summit. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Gangapurna Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The second contingency day, held at base camp for a cold, settled window.",
      ...GANGAPURNA_BC,
      html: p(
        "The second reserve day. Three of them exist because the serac hazard on the lower face is condition-dependent on a timescale of days, and one day in hand frequently is not enough.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team, and everything comes off the face. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,600 m)",
      elevation: "4,600 m",
      accommodation: "Gangapurna Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the north face.",
      ...GANGAPURNA_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly: everything carried up from Manang goes back down, and the Department of Tourism deposit is refunded against it.",
        "The chorten from the puja stays with its prayer flags. Below, the lights of Manang come on at dusk — a village most of whose visitors have spent a fortnight photographing this mountain without knowing anyone was on it. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Gangapurna Base Camp (4,600 m) to Manang (3,540 m)",
      elevation: "3,540 m",
      accommodation: "Manang",
      placeDescription: "The Tibetan trading town below the Annapurnas, reached on the walk out.",
      ...MANANG,
      html: p(
        "Down the moraine past the glacier lake and into <strong>Manang (3,540 m)</strong> in three to four hours — the shortest walk out of any expedition in this catalogue.",
        "Manang has bakeries, gear shops, ATMs, hot showers and a cinema that shows mountaineering films every afternoon. After a fortnight at 4,600 m under a serac field, all of that lands hard.",
        "The afternoon is free and the evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Overnight at Manang.",
      ),
    },
    {
      title: "Drive from Manang (3,540 m) to Chame (2,670 m) and on to Besisahar",
      elevation: "2,670 m",
      accommodation: "Chame",
      placeDescription: "The administrative headquarters of Manang district, reached by jeep on the way out.",
      ...CHAME,
      html: p(
        "A jeep takes over from Manang on the rough road down the upper Marsyangdi, through Humde and Pisang and past the <strong>Paungda Danda</strong> rock slab.",
        "It is a jarring transition — hours of vehicle after two weeks on foot and on ice — but it saves two days of retracing ground already walked on the way in.",
        "<strong>Chame (2,670 m)</strong> has hot springs beside the river, which after an expedition is worth the short walk. Around 4 hours of driving. Overnight at Chame.",
      ),
    },
    {
      title: "Drive from Chame (2,670 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day on the road. The jeep grinds down the <strong>Marsyangdi</strong> gorge to Besisahar on a rough road cut into the valley wall, and then joins the highway east.",
        "The <strong>Prithvi Highway</strong> follows the Trishuli back to the Kathmandu valley, with a lunch stop at a riverside restaurant. Nine to eleven hours in total.",
        "Back in <strong>Kathmandu</strong> in the evening. The expedition reports to the Department of Tourism and your <strong>summit certificate</strong> is presented over dinner. Overnight in Kathmandu.",
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
        "Safe travels. Climbers who summit Gangapurna have done something a very small number of people have, and Annapurna I — visible from your base camp — is the question that usually comes next.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const annapurnaExpedition: Climb = {
  region: "Annapurna Region",
  price: 38000,
  difficulty: "extreme",
  maxAltitude: 8091,
  grade: "D at extreme altitude",
  expedition: true,
  royalty: true,
  center: [83.85, 28.6],
  zoom: 10,
  content: {
    slug: "annapurna-expedition",
    title: "Annapurna Expedition",
    overview:
      "<p><strong>Annapurna I (8,091 m)</strong> was the <strong>first 8,000 m peak ever climbed</strong> — Maurice Herzog and Louis Lachenal, 3 June 1950, with no oxygen, no fixed rope and no map worth the name. It is also, by a wide margin, the <strong>most dangerous of the fourteen</strong>. The north face is swept by avalanche and serac fall, the route changes from season to season, and the ratio of deaths to summits has historically been the worst in high-altitude mountaineering.</p><p>We say all of that first because anyone considering this expedition deserves to hear it before the marketing. What follows is the mountain as it is: a <strong>grade D</strong> route on a face where objective hazard, not technical difficulty, is the governing problem; a forty-five day expedition with two rotations, a dedicated 1:1 Sherpa and a full oxygen allocation; and a leader whose willingness to abandon a season is the single most valuable thing in the package.</p>",
    highlights: [
      ["Summit Annapurna I (8,091 m)", "The first 8,000 m peak ever climbed, by Herzog and Lachenal in 1950, and the tenth-highest mountain on earth."],
      ["The North Face Route", "The line of the first ascent, up a face where the route is re-found and re-fixed every season."],
      ["The Miristi Khola Approach", "Walk in from the Kali Gandaki through a gorge with no villages and no trail markers — one of the wildest approaches in Nepal."],
      ["Two Rotations and Five Reserve Days", "The structure a mountain with this hazard profile and this weather actually requires."],
      ["A Dedicated 1:1 Climbing Sherpa", "One high-altitude Sherpa per client from base camp to the summit, carrying his own oxygen."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April and May</strong>. Annapurna is a spring mountain and its windows are <strong>fewer and shorter than Everest's</strong> — often one usable spell in a season, sometimes none. The face needs cold, settled weather with no fresh loading, and it gets that less reliably than the Khumbu 8,000 m peaks do.</p><p>Autumn ascents are rare and are undertaken by small alpine-style teams rather than guided expeditions. We run spring expeditions only, reaching base camp in the first week of April so that the acclimatisation programme is complete before the windows open. If the face is not in acceptable condition, we do not climb it, and we would rather say so at base camp than in a report afterwards.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Technically the north face is around <strong>grade D</strong> — steep snow and ice at 45 to 55 degrees with mixed sections, all fixed. That is not what makes it hard. From <strong>base camp (4,190 m)</strong> the route climbs to <strong>Camp 1 (5,100 m)</strong> and <strong>Camp 2 (5,700 m)</strong> through ground exposed to serac fall from the hanging glaciers above, and this is the section that has killed more people than the rest of the mountain combined.</p><p>Above Camp 2 the face steepens to <strong>Camp 3 (6,500 m)</strong> and <strong>Camp 4 (7,200 m)</strong>, and the summit day crosses a long traverse and a final slope to the top. Twelve to eighteen hours from Camp 4 on oxygen. The route is <strong>re-found and re-fixed every season</strong> because the face changes, so no two years are alike.</p>",
      },
      {
        heading: "Experience Required and Risk",
        content:
          "<p>We require a <strong>previous 8,000 m summit</strong> without exception. We also require that you understand what this mountain's statistics mean. Annapurna's historic death-to-summit ratio is the worst of the fourteen 8,000 m peaks, and while modern fixing, forecasting and Sherpa support have improved it substantially, <strong>the underlying hazard is objective and cannot be eliminated by preparation</strong>.</p><p>No amount of fitness, technique or equipment removes serac fall. What reduces it is timing, speed through exposed ground, minimising the number of crossings, and a leader prepared to abandon the season. All four are what we sell. A climber who cannot accept residual risk that is not under their own control should climb a different mountain, and we will say so at enquiry rather than take the deposit.</p>",
      },
      {
        heading: "Oxygen, Sherpa Support and Safety",
        content:
          "<p>Your package includes <strong>seven 4-litre bottles of supplementary oxygen</strong> per climber, a <strong>Summit mask and regulator</strong>, and a dedicated <strong>climbing Sherpa carrying his own oxygen</strong> from base camp to the summit. Bottles are used from Camp 3 upward, and extras can be added at booking and are refunded in full if unused.</p><p>Base camp holds a <strong>Gamow bag, a full expedition medical kit and emergency oxygen</strong>, and we retain a doctor at base camp. Every climber carries a personal locator and radios in at set times. Rotation plans are designed to <strong>minimise the number of passes through the serac-exposed section</strong>, which is the single most effective safety measure available on this mountain, and our leader's authority to stop the expedition is absolute.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p>An <strong>8,000 m down suit</strong>, <strong>triple boots</strong> rated for 8,000 m, technical crampons, a lightweight ice axe, a <strong>-40°C sleeping bag</strong>, two insulated mats, expedition mitts and a spare pair, a face mask, category 4 glacier glasses and double-lens goggles, and two headlamps with lithium batteries.</p><p>The Miristi Khola approach also demands proper trekking kit for six days of gorge country with river crossings and no lodges. We supply all group ropes, anchors, camp equipment and the oxygen system; <strong>climbers bring their own harness, crampons, axe, ascender, belay device and screwgates.</strong> A full kit list with our leaders' specific recommendations is sent when you book.</p>",
      },
    ],
    faqs: [
      { question: "Is Annapurna really the most dangerous 8,000 m peak?", answer: "Historically, yes — its death-to-summit ratio has been the worst of the fourteen. Modern route fixing, forecasting and Sherpa support have improved that considerably over the last decade, but the underlying hazard is serac fall onto the lower route, and that is objective. We state it plainly because anyone booking deserves to weigh it." },
      { question: "Can the serac hazard be avoided?", answer: "Not eliminated, only managed. We cross the exposed sections in the cold hours, never stop in them, and design the rotation plan to minimise the number of passages through them. That last point is the most effective measure available and it is one of the reasons our itinerary is structured the way it is." },
      { question: "Do you fly clients to base camp?", answer: "No. Several operators now do, and it saves six days, but it also removes the acclimatisation the walk provides and leaves a climber sitting at 4,190 m feeling ill. We walk in through the Miristi Khola. Cargo goes by helicopter where it is legal and sensible." },
      { question: "What is the Miristi Khola approach like?", answer: "Wild. It leaves the Kali Gandaki at Lete and follows a gorge with no villages, no lodges and no maintained trail, with river crossings and steep forested sidewalls. It takes about four days from Lete and it is one of the least-travelled approaches to any 8,000 m base camp." },
      { question: "How much oxygen is included?", answer: "Seven 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. Extra bottles can be added at booking and are refunded in full if unused. On a mountain where a summit day can run eighteen hours, several climbers take one." },
      { question: "What is the summit success rate?", answer: "Variable and generally low — across recent seasons roughly a third to a half of climbers who begin a summit push from Camp 4 reach the top, and there are years in which no commercial team summits at all. Weather windows are the limiting factor more than the climbing." },
      { question: "Will there be other teams on the mountain?", answer: "Usually one or two in spring, occasionally more. That matters for route fixing, which is shared where possible, and for emergency response. Annapurna is far less crowded than Everest and that is both an attraction and a liability." },
      { question: "What happens if you decide the face is unsafe?", answer: "We stop, and the expedition ends without a summit. Our leader has absolute authority to make that call and no member of our staff receives a summit-contingent bonus that could bias it. We would rather bring a team home having spent forty-five days at base camp than push a season that the mountain has closed." },
      { question: "Why is the expedition forty-four days?", answer: "Because the walk in takes six, the acclimatisation programme needs two rotations, the summit window may not appear until the second half of May, and the reserve days are what make a second attempt possible. Compressing any of it buys a shorter trip at a cost we are not willing to pay on this mountain." },
      { question: "What is the refund position if the season is cancelled?", answer: "The Department of Tourism royalty and permit fees are paid in advance and are non-refundable to us, so they are non-refundable to you. Everything else — staff, food, oxygen, logistics — is refunded pro rata if a season is cancelled before it begins. This is set out in writing at booking." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private tourist bus or car from Kathmandu to Pokhara and back.",
        "Private jeep transport between Pokhara and Lete via Beni and Tatopani, in both directions.",
      ],
      cityAccommodation: ["Four nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      trekAccommodation:
        "Full tented accommodation through the Miristi Khola approach and the walk out, with two-person tents, a mess tent, kitchen tent and toilet tent.",
      camping:
        "Full expedition base camp at 4,190 m with individual sleeping tents, heated dining tent, kitchen, storage, communications, toilet and shower tents, plus stocked and staffed Camp 1 (5,100 m), Camp 2 (5,700 m), Camp 3 (6,500 m) and Camp 4 (7,200 m).",
      permits: `Department of Tourism Annapurna I climbing royalty and permit, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One dedicated high-altitude climbing Sherpa per climber from base camp to the summit, carrying his own oxygen, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Seven 4-litre bottles of supplementary oxygen per climber, with a Summit mask and regulator, used from Camp 3 upward.",
      extra: [
        "Full-time cook and kitchen crew from Lete to base camp and throughout the expedition, with three hot meals a day and high-altitude food and fuel at every camp above.",
        "Fixed-rope and technical training at base camp before the first rotation.",
        "Two full acclimatisation rotations, planned to minimise passages through the serac-exposed section of the lower route.",
        "Route fixing by our own Sherpa team, shared with other expeditions where the season allows.",
        "Daily specialist mountain weather forecasts and a base camp communications tent with satellite internet.",
        "Base camp solar power, a Gamow hyperbaric bag, an expedition doctor and a full medical kit.",
        "A puja ceremony at base camp before the team goes onto the face.",
        "Porter and helicopter cargo transport of all expedition equipment to base camp.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew, cook staff and porters.",
      extra: [
        "Personal technical equipment — down suit, boots, harness, crampons, axe, ascender, belay device and screwgates.",
        "Additional oxygen bottles beyond the seven included, refundable in full if unused.",
        "Personal satellite communication devices and airtime.",
        "Helicopter transfers taken for personal convenience rather than medical necessity.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, an expedition halted because the face is unsafe, or an early descent from the mountain.",
    },
    extraOxygenBottles: true,
    gearRentalDays: 0,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A 44-day expedition on Annapurna I (8,091 m) by the north face, approached on foot through the Miristi Khola, with two acclimatisation rotations, a dedicated 1:1 Sherpa, seven bottles of oxygen and five reserve days.",
    inExDescription:
      "Road transport to Pokhara and Lete, Kathmandu and Pokhara hotel nights, full tented accommodation on the approach and at every camp, three meals a day throughout, the Department of Tourism royalty, ACAP and TIMS, an expedition leader and liaison officer, a dedicated climbing Sherpa per client, seven bottles of oxygen with mask and regulator, route fixing, a base camp doctor and medical provision, satellite weather forecasts and communications are included, while international flights, visa, 8,000 m mountaineering insurance, personal technical equipment, city meals, additional oxygen, summit bonus and tips are not.",
    bestTime: "Apr-May",
    meta: {
      title: "Annapurna Expedition (8,091 m) — 44 Days, North Face | Green Compass Treks",
      description:
        "Climb Annapurna I (8,091 m), the first 8,000 m peak ever climbed and the most hazardous of the fourteen, by the north face. 44 days with two rotations, a dedicated 1:1 Sherpa, seven bottles of oxygen and five reserve days.",
      keywords:
        "annapurna expedition, annapurna I 8091m, annapurna north face, first 8000m peak, most dangerous mountain, annapurna climbing cost, miristi khola",
      tags: "Annapurna I, Annapurna Region, 8000m Expedition, North Face, Oxygen, Miristi Khola",
    },
  },
  days: [
    ...sanctuaryApproach("forty-four day").slice(0, 3).map((d) => ({
      ...d,
      html: d.html.replace(
        "Our office lodges the <strong>climbing permit</strong>, the Annapurna Conservation Area permit and the TIMS card today, which needs your passport and photographs. The afternoon is free. Overnight in Kathmandu.",
        "The oxygen mask and regulator are fitted and tested against your own face and hood, which is the most useful hour of the day. Overnight in Kathmandu.",
      ),
    })),
    {
      title: "Kathmandu (1,400 m) – Ministry Briefing, Permits and Cargo Dispatch",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital, where the expedition is registered and the permits are formally issued.",
      ...KATHMANDU,
      html: p(
        "The formal side of an 8,000 m expedition. The team attends the <strong>briefing at the Department of Tourism</strong> with the liaison officer, where the royalty permit is issued, the regulations are read out and the waste-management deposit is registered.",
        "Meanwhile the expedition cargo is weighed, sealed into barrels and dispatched toward Pokhara and the Kali Gandaki, where porters and helicopter loads will take it into the Miristi Khola.",
        "The afternoon is free, and it is the last one with hot water and restaurants for six weeks. Most climbers use it for the last calls home. Overnight in Kathmandu.",
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
        "The drive covers roughly 200 km and takes most of the day.",
        "<strong>Pokhara (822 m)</strong> arrives in the late afternoon on the shore of Phewa Lake, with <strong>Annapurna I</strong> and Machhapuchhre standing over it — and this is one of the few places from which the mountain you are about to climb is clearly visible from a café table. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Lete (2,480 m) via Beni and Tatopani",
      elevation: "2,480 m",
      accommodation: "Lete",
      placeDescription: "A village in the Kali Gandaki gorge between Annapurna and Dhaulagiri, at the road head for the Miristi Khola.",
      ...LETE,
      html: p(
        "North-west from Pokhara to <strong>Beni</strong> and then up the <strong>Kali Gandaki</strong> — the deepest gorge on earth, measured between Annapurna I on one side and Dhaulagiri on the other, with seven vertical kilometres of relief in a valley a few kilometres wide.",
        "The road climbs through <strong>Tatopani</strong>, where there are hot springs beside the river, and into pine forest as the gorge narrows.",
        "<strong>Lete (2,480 m)</strong> is the road head for this expedition. From tomorrow everything moves on foot up a side valley with no villages in it. Seven to nine hours. Overnight at Lete.",
      ),
    },
    {
      title: "Trek from Lete (2,480 m) into the Miristi Khola (2,900 m)",
      elevation: "2,900 m",
      accommodation: "Miristi Khola Camp",
      placeDescription: "A tented camp in the forested gorge of the Miristi Khola, on the wildest approach to any 8,000 m base camp.",
      ...MIRISTI_LOWER,
      html: p(
        "The expedition leaves the Kali Gandaki and turns east into the <strong>Miristi Khola</strong>, and within an hour there is no trail worth the name.",
        "The gorge is steep, forested and unvisited — no villages, no lodges, no trekking route and no maintained path. The route follows the river on ground the crew knows, with river crossings, sidehill traverses through rhododendron and bamboo, and steep sections where fixed line is put in for the loads.",
        "Camp goes up at around <strong>2,900 m</strong> on whatever flat ground the gorge offers. From here the expedition is entirely self-contained. Around 6 hours. Overnight in the Miristi Khola.",
      ),
    },
    {
      title: "Trek up the Miristi Khola to 3,600 m",
      elevation: "3,600 m",
      accommodation: "Upper Miristi Khola Camp",
      placeDescription: "A tented camp higher in the Miristi gorge, where the forest begins to give out.",
      ...MIRISTI_UPPER,
      html: p(
        "More of the same and steeper. The route continues east up the gorge, climbing steadily as the walls close in, with the north face of <strong>Annapurna I</strong> beginning to show at the head of the valley.",
        "There are two or three sections where the crew fixes rope for the porters, and the pace is set by the loads rather than the climbers.",
        "Camp at <strong>3,600 m</strong>, where the rhododendron thins into birch and juniper and the temperature drops noticeably. It is the last camp below the treeline. Around 6 to 7 hours. Overnight in the upper Miristi Khola.",
      ),
    },
    {
      title: "Trek to Annapurna North Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp on the moraine below the north face of Annapurna I.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "Out of the forest onto moraine and grass, climbing east to the head of the Miristi Khola with the mountain filling the sky ahead.",
        "And then it is all there at once: the <strong>north face of Annapurna I</strong>, three and a half vertical kilometres of it, with the hanging glaciers and seracs that define this expedition clearly visible from the moraine. Most people stop walking when they first see it properly.",
        "<strong>Annapurna North Base Camp (4,190 m)</strong> is established today and is home for the next month. Around 5 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Base Camp (4,190 m) – Settling In and Systems Check",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, where the team settles into the routine of the next five weeks.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "A day of low effort and a great deal of quiet organisation. Sleeping tents are set up properly, the mess and kitchen routine established, and the charging, water, toilet and radio arrangements explained.",
        "Your leader runs the <strong>oxygen systems check</strong> at altitude — mask, regulator and hose fitted to your own face and hood, with flow rates and the changeover drill walked through.",
        "The afternoon is spent on the moraine looking at the face, and the leader begins the conversation that runs through the whole expedition: where the hazard is, when it is crossed, and how many times. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before anyone goes onto the face.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The <strong>puja</strong>. A stone chorten is built, juniper is burned, and every piece of climbing equipment on the expedition — axes, crampons, harnesses, boots, oxygen masks — is stacked at the altar to be blessed.",
        "No Sherpa on our team will set foot on the north face before it has been done, and on this mountain in particular the ceremony carries weight for everyone present, whatever they believe.",
        "Prayer flags are strung from the chorten across the camp, rice is thrown, and it finishes with chang. It is also the day the whole team first behaves as one group. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Training Day at Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, where rope and mixed-ground technique is checked on the glacier.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "A full working day on the glacier ice near camp. Every climber works through <strong>jumaring on steep fixed line with a pack, changing over at anchors, abseiling, arresting a slip on hard ice, and moving on mixed ground in crampons</strong>.",
        "The changeover drill gets the most repetition, because the number of anchors between base camp and Camp 2 is large and every second spent at one is a second in the serac-exposed ground.",
        "Your leader watches each climber individually. On this mountain speed is the safety measure, and that is stated plainly rather than implied. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the first rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>4,700 m</strong> and back, gaining and losing height on ground that asks nothing technical.",
        "The view is a working one. From up there the whole lower route is legible — the glacier, the exposed traverse, the shelf where Camp 1 goes — and your leader and the Sherpa team spend an hour with binoculars agreeing where the line goes this season, because on Annapurna it is different every year.",
        "The afternoon is rest and packing. The Sherpa team is already on the face, marking and fixing toward Camp 1. Overnight at base camp.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 1 (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,100 m on the shelf above the lower glacier of the north face.",
      ...ANNAPURNA_C1,
      html: p(
        "Out of camp at two in the morning, because the lower face has to be crossed while it is frozen and while the seracs above are least active.",
        "The route works up the glacier on fixed line and then across the <strong>exposed traverse</strong> beneath the hanging ice — the section that has defined this mountain's reputation. It is moved through steadily, spaced out, and nobody stops in it for any reason.",
        "Above it the ground eases onto the shelf where <strong>Camp 1 (5,100 m)</strong> stands. Five to seven hours. The relief of being above the hazard is something every Annapurna climber describes. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Climb to Camp 2 (5,700 m) and Return to Camp 1",
      elevation: "5,700 m",
      accommodation: "Camp 1",
      placeDescription: "Camp 2 at 5,700 m on the face, touched on the first acclimatisation rotation.",
      ...ANNAPURNA_C2,
      html: p(
        "A shorter day on steepening ground above Camp 1, four to five hours on fixed rope to <strong>Camp 2 (5,700 m)</strong>.",
        "The team touches the camp, spends an hour there and descends to Camp 1 for the night. This rotation is about the height reached rather than the night spent, and it keeps the number of loads carried through the lower hazard to a minimum.",
        "It is also the first honest look at how each climber moves on the steep fixed ground of this face, and your leader watches closely. Overnight at Camp 1.",
      ),
    },
    {
      title: "First Rotation – Descend from Camp 1 (5,100 m) to Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the first rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "Another pre-dawn start, and back down through the exposed traverse in the cold — the second of the small number of passages the rotation plan allows.",
        "Down the fixed ropes and across the glacier to base camp in three to four hours, arriving before the sun is properly on the seracs.",
        "The first rotation is complete: the team has slept at 5,100 m and touched 5,700 m, and everybody now understands exactly what the lower face involves. <strong>Base camp (4,190 m)</strong> by mid-morning. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the first rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The first of three recovery days, and the hardest to spend well because the fatigue of a rotation arrives late — most people feel worse today than they did yesterday.",
        "The prescription is unglamorous: sleep, drink four to five litres, and eat considerably more than you want to.",
        "Your leader and the expedition doctor take saturation, pulse and weight readings and review them against the baseline. Anyone whose numbers are drifting gets a conversation rather than a schedule. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the second recovery day after the first rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The second recovery day, and the one on which people start feeling human again. Base camp settles into its rhythm: breakfast late, cards and reading in the dining tent, a slow walk on the moraine, dinner early.",
        "Work goes on around you. The <strong>Sherpa team is carrying loads and fixing rope</strong> above Camp 2 toward Camp 3, and every one of those carries is a passage through the same hazardous ground the climbers cross.",
        "That asymmetry is worth stating on this mountain in particular: the Sherpa team is exposed several times more than any client. The evening weather briefing becomes a fixture from about now. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the last day before the second rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The last day before the second rotation, spent on preparation. Personal loads are packed for four nights above base camp, crampons and harnesses checked after their first hard use, and boots dried properly.",
        "Your leader briefs the rotation: base camp to Camp 1, then Camp 2 for a night, and then a climb toward <strong>Camp 3 at 6,500 m</strong> before returning.",
        "The night at Camp 2 and the touch at Camp 3 are the acclimatisation that makes a summit push possible, and they are also the last time the team goes onto the face before the window. Overnight at base camp.",
      ),
    },
    {
      title: "Second Rotation – Climb from Base Camp (4,190 m) to Camp 1 (5,100 m)",
      elevation: "5,100 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,100 m above the lower glacier, reoccupied for the second rotation.",
      ...ANNAPURNA_C1,
      html: p(
        "A two o'clock start and the exposed traverse again, crossed faster this time — four to five hours where the first rotation took six or seven.",
        "That speed is not vanity. Every minute less in the serac ground is a real reduction in exposure, and the improvement between rotations is one of the more concrete benefits of acclimatisation on this particular mountain.",
        "<strong>Camp 1 (5,100 m)</strong> by mid-morning, with the rest of the day to lie down and drink. Overnight at Camp 1.",
      ),
    },
    {
      title: "Second Rotation – Climb to Camp 2 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 5,700 m on cut platforms in the north face.",
      ...ANNAPURNA_C2,
      html: p(
        "Four to five hours on fixed rope up steepening snow and ice to <strong>Camp 2 (5,700 m)</strong>, this time with the loads and the intention to stay.",
        "The camp is a handful of tents on platforms cut into the face, small and exposed, where everyone stays clipped in when moving outside.",
        "Sleeping at 5,700 m is the purpose of this rotation. It is not a comfortable night and it is the thing that makes a push from 7,200 m realistic three weeks from now. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Climb toward Camp 3 (6,500 m) and Return to Camp 2",
      elevation: "6,500 m",
      accommodation: "Camp 2",
      placeDescription: "Camp 3 at 6,500 m on the upper face, touched on the second acclimatisation rotation.",
      ...ANNAPURNA_C3,
      html: p(
        "The hardest day of the acclimatisation programme. Above Camp 2 the face steepens into sustained ice at 45 to 55 degrees with mixed sections, climbed entirely on fixed rope.",
        "Four to six hours of unrelenting work brings the team to <strong>Camp 3 (6,500 m)</strong>, a row of tents on platforms hacked into the face itself.",
        "The team touches it, spends an hour there, and abseils and down-climbs back to Camp 2. It is the height that matters, not the night, and it keeps the number of nights high on a hazardous face to a minimum. Overnight at Camp 2.",
      ),
    },
    {
      title: "Second Rotation – Descend from Camp 2 (5,700 m) to Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the second rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "Down the fixed ropes past Camp 1 and through the exposed traverse in the cold of the morning, reaching base camp before the sun is on the seracs.",
        "The acclimatisation programme is now complete. The team has slept at 5,700 m and touched 6,500 m, and physiologically there is nothing more to be gained from going higher until the summit push.",
        "<strong>Base camp (4,190 m)</strong> by midday, and the mood changes: the preparation is finished and everything from here waits on weather. Six to eight hours. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the second rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "A full recovery day after four nights on the face. Sleep, fluid, food, and staying off the legs.",
        "The expedition doctor reviews the whole team today — weight, saturation, sleep, appetite and any lingering cough — because the summit push is now the only thing left and going into it with a chest infection is how people end up in trouble at 7,000 m.",
        "The Sherpa team continues stocking Camp 3 and pushing the line toward <strong>Camp 4 at 7,200 m</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the second recovery day after the second rotation.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "A second full recovery day. On Annapurna the rest between the last rotation and the summit push matters more than on most 8,000 m peaks, because the push involves several more passages through the lower hazard and a tired team crosses it slowly.",
        "Most people sleep for a large part of the day, and the cook crew works hard on appetite at this stage.",
        "In the evening the forecast is read out in the communications tent, and from tonight the whole camp is watching for a window. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, waiting on the forecast for a summit window.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The waiting begins, and on Annapurna it is longer and less certain than on Everest. The mountain needs cold, settled weather with no fresh loading on the face, and it may offer one such spell in a season.",
        "Days are spent eating, sleeping and walking gently on the moraine. With one or two other teams in the valley at most, base camp is a quiet place.",
        "The evening brings the <strong>specialist mountain forecast</strong> — wind at 8,000 m, temperature, precipitation and confidence — read out in the communications tent and cross-checked against what the Sherpa team is seeing on the face. Overnight at base camp.",
      ),
    },
    {
      title: "Weather Window Wait at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the second day of the weather window wait.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "More waiting, and the discipline is not to burn energy. Climbers who fill these days with long walks arrive at Camp 4 with less in reserve than those who read a book.",
        "One useful piece of work: your leader reviews the <strong>oxygen plan</strong> with each climber individually — flow rates from Camp 3, at Camp 4, on summit day, and the changeover points where bottles are swapped and cached for the descent.",
        "Masks and regulators are checked a final time against your own hood and goggles. A leaking mask at 7,800 m on this face is not a problem that can be solved in place. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Briefing and Final Preparations at Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, where the summit push is briefed in full.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The full <strong>summit briefing</strong>. Your leader sets out the schedule day by day, the pairings of climber and Sherpa, the radio times, the oxygen changeovers, and the <strong>turnaround time on summit day</strong>.",
        "On Annapurna the briefing spends as long on the descent as the ascent, because the summit day ends with a long down-climb and abseil and then, a day later, a final passage through the serac ground. A team that summits and then crosses that traverse exhausted in the afternoon has not finished the climb safely.",
        "The Sherpa team confirms that Camp 4 is stocked and the route is fixed. Nothing begins until both are true. Overnight at base camp.",
      ),
    },
    {
      title: "Final Weather Wait at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, on the last day before the summit push departs.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The last day at base camp before the push. Loads are packed for five nights above base camp, down suits unpacked and checked, and boots warmed.",
        "Dinner is early and the camp is quiet. On a mountain where a season may offer a single window and where everyone present knows the statistics, the atmosphere on this evening is unlike anything else in the expedition.",
        "Departure through the lower face is set for around one in the morning. Most people do not sleep much. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,190 m) to Camp 2 (5,700 m)",
      elevation: "5,700 m",
      accommodation: "Camp 2",
      placeDescription: "The camp at 5,700 m on the north face, on the first night of the summit push.",
      ...ANNAPURNA_C2,
      html: p(
        "Into the lower face at one in the morning and through the <strong>exposed traverse</strong> for the last time on the way up, faster than ever on entirely familiar ground.",
        "The team pushes straight through Camp 1 and continues up the fixed ropes to Camp 2, eight to ten hours in total, arriving in the early afternoon.",
        "<strong>Camp 2 (5,700 m)</strong>. The rest of the day is spent lying down, drinking and eating. From here the expedition moves upward every day until it summits or turns back. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (5,700 m) to Camp 3 (6,500 m)",
      elevation: "6,500 m",
      accommodation: "Camp 3",
      placeDescription: "A tented camp at 6,500 m on platforms cut into the upper north face.",
      ...ANNAPURNA_C3,
      html: p(
        "The sustained upper face again — four to six hours of ice at 45 to 55 degrees with mixed sections, entirely on fixed rope, with heavier loads than on the rotation.",
        "<strong>Camp 3 (6,500 m)</strong> is a row of tents on ledges chopped out of the face, half-suspended, where everyone stays clipped in even inside them.",
        "This is the first night on <strong>supplementary oxygen</strong>, at a low sleeping flow, and it makes a considerable difference to how the night goes and how the following day starts. Overnight at Camp 3.",
      ),
    },
    {
      title: "Summit Push – Climb to Camp 4 (7,200 m)",
      elevation: "7,200 m",
      accommodation: "Camp 4",
      placeDescription: "The highest camp at 7,200 m, on the shoulder below the summit slopes of Annapurna I.",
      ...ANNAPURNA_C4,
      html: p(
        "On oxygen from the moment you leave the tent. The route continues up the face and onto the shoulder, five to seven hours on fixed rope with the angle easing near the top.",
        "<strong>Camp 4 (7,200 m)</strong> is the last camp, a handful of tents on the shoulder, exposed and cold.",
        "You are in the <strong>Death Zone</strong>, where the body degrades rather than adapts. Nobody sleeps. The routine is oxygen, melted snow, forced fluid and waiting for the departure time, with the summit slopes directly overhead. Overnight at Camp 4.",
      ),
    },
    {
      title: "Summit Annapurna I (8,091 m) and Descend to Camp 3 (6,500 m)",
      elevation: "8,091 m",
      accommodation: "Camp 3",
      placeDescription: "The 8,091 m summit of Annapurna I, the first 8,000 m peak ever climbed.",
      ...ANNAPURNA_I,
      html: p(
        "Leaving Camp 4 between eight and eleven at night, on oxygen, at around -30°C. The route climbs the shoulder and then takes a <strong>long rising traverse</strong> across the upper face — exposed, sustained, and the section on which most turn-backs happen because it goes on for hours without gaining much height.",
        "Above the traverse a final slope leads to the summit ridge, and then there is nowhere higher. The <strong>summit (8,091 m)</strong> looks north to Tibet, east along the whole Annapurna range to Manaslu, and south over the Sanctuary and the middle hills toward the Pokhara valley — which is visible, seven and a half thousand metres below.",
        "This is where Herzog and Lachenal stood on 3 June 1950, the first people ever to reach 8,000 m, and the descent that followed cost them their fingers and toes.",
        "Yours reverses the traverse and abseils the face to Camp 4 and on to Camp 3. Fourteen to twenty hours of movement. Overnight at Camp 3.",
      ),
    },
    {
      title: "Descend from Camp 3 (6,500 m) to Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The expedition base camp, reached at the end of the summit push.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The most important descent of the expedition. Down the fixed ropes past Camp 2 and Camp 1, and then the <strong>exposed traverse</strong> across the lower face — timed for the cold of the early morning, on legs that have very little left.",
        "Your leader will hold the team at Camp 1 rather than let it cross that ground in the afternoon heat. A summit that ends with an exhausted party under the seracs in the sun is not a successful climb.",
        "<strong>Base camp (4,190 m)</strong>, and walking off the glacier onto the moraine at the end of an Annapurna summit push is a moment most climbers describe more vividly than the summit. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The first of five contingency days, held for a second summit window.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The first of five reserve days. On a mountain whose season may offer a single window, they are the difference between an expedition with a second chance and one without.",
        "If a second push is on, the Sherpa team re-stocks Camp 4 and the climbers rest here. Your leader assesses each climber honestly, and on Annapurna that assessment weighs the additional passages through the lower hazard that a second attempt requires.",
        "If the mountain has been climbed, the day is for eating and sleeping. Most climbers lose eight to twelve kilograms on an Annapurna expedition. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The second reserve day. If a second attempt is running, the team is at Camp 2 or Camp 3 tonight rather than here.",
        "If the mountain has been climbed, the camps above begin to come down. Camp 4, Camp 3 and Camp 2 are stripped by the Sherpa team — and every one of those clearing carries is another passage through the same ground, which is why we plan the strip carefully rather than rushing it.",
        "Everything the expedition put on the face comes off it. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The third contingency day, held at base camp for a late summit window.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The third reserve day, and in a season with a late window this is often the summit day itself — Annapurna windows have arrived in the last week of May more than once.",
        "If a second push is underway, the team is high on the face and base camp is a radio watch.",
        "If not, the day is spent in the limbo of an expedition that is finished but not yet over: eating, sleeping, and watching the face for the conditions that did not come. Overnight at base camp.",
      ),
    },
    {
      title: "Fourth Reserve Day at Annapurna Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The fourth contingency day, as the expedition begins to close down.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The fourth reserve day. By now the season's arithmetic is clear, and your leader will say plainly whether there is anything left to attempt.",
        "That judgement is the most important thing we sell on this mountain. A leader who keeps a tired team on the Annapurna north face past the last honest window is the most dangerous thing on it, and no member of our staff has a financial incentive to do so.",
        "The <strong>waste management</strong> is completed today: human waste carried out in barrels, oxygen bottles counted back in, and the site cleared to the condition it was found in. Overnight at base camp.",
      ),
    },
    {
      title: "Fifth Reserve Day and Break Camp at Base Camp (4,190 m)",
      elevation: "4,190 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "The final contingency day, and the last night beneath the north face.",
      ...ANNAPURNA_NORTH_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. Base camp comes down today: tents struck, barrels packed and weighed, and loads made up for the porters and helicopter lifts that will take five weeks of expedition out of the Miristi Khola.",
        "It is a long day of unglamorous work, and it is when the team says goodbye to the base camp crew who have run the place since early April.",
        "The chorten from the puja stays with its prayer flags. A last look at the north face, which after five weeks is a place rather than a photograph. Overnight at base camp.",
      ),
    },
    {
      title: "Trek from Annapurna Base Camp (4,190 m) to the Miristi Khola (3,600 m)",
      elevation: "3,600 m",
      accommodation: "Upper Miristi Khola Camp",
      placeDescription: "The upper Miristi gorge camp, first stop on the walk out.",
      ...MIRISTI_UPPER,
      html: p(
        "Off the moraine and west down the head of the Miristi Khola, losing height fast with the north face receding behind you.",
        "The birch and juniper come back within a few hours, and with them the first birds and the first smell of vegetation in five weeks.",
        "Camp at <strong>3,600 m</strong> in the upper gorge, and the last one with the mountain visible. Around 5 hours. Overnight in the upper Miristi Khola.",
      ),
    },
    {
      title: "Trek down the Miristi Khola to Lete (2,480 m)",
      elevation: "2,480 m",
      accommodation: "Lete",
      placeDescription: "The village in the Kali Gandaki gorge, and the end of the walking.",
      ...LETE,
      html: p(
        "A long day down the gorge — the trackless sidehill traverses, the river crossings and the fixed sections, all of it in reverse and all of it downhill.",
        "The forest gets denser and warmer as the gorge drops, and somewhere in the afternoon the trail rejoins the Kali Gandaki and there is a path again, and then a road.",
        "<strong>Lete (2,480 m)</strong> is the first village in five weeks — lodges, a shop, a hot shower and other people. The evening is the end-of-expedition dinner with the leader, the climbing Sherpas, the cook crew and the porters, and the point at which the summit bonus and tips are given. Nine to eleven hours. Overnight at Lete.",
      ),
    },
    {
      title: "Drive from Lete (2,480 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "Down the <strong>Kali Gandaki</strong> by jeep through Tatopani and Beni, with the gorge opening and warming all the way and Dhaulagiri behind you on the right.",
        "Seven to nine hours on a rough road, and then the highway into <strong>Pokhara (822 m)</strong>.",
        "The afternoon is free: a hot shower, a proper meal and an hour by <strong>Phewa Lake</strong>, from which — on a clear evening — the mountain you have just spent five weeks on is plainly visible. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A morning by the lake before the road, with the Annapurnas reflected in it on a clear day.",
        "The drive to <strong>Kathmandu</strong> takes most of the day on the Prithvi Highway, following the Trishuli east through gorge country with a lunch stop at a riverside restaurant.",
        "Back in Kathmandu in the evening. The expedition reports to the <strong>Department of Tourism</strong>, the waste deposit is reconciled, and the <strong>summit certificate</strong> is issued and presented. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "The expedition ends today. If your flight is a late one there is time for a last morning in Kathmandu, though most people at this point want a chair and a coffee more than a temple.",
        "Our representative collects you from the hotel and drives you to <strong>Tribhuvan International Airport</strong> about three hours before departure. Any equipment being shipped home is handled by our office.",
        "Safe travels. Whether or not the summit came, an Annapurna season changes how a climber thinks about risk, and the ones who come back to us generally do so with that conversation already started.",
      ),
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

export const annapurnaSouthExpedition: Climb = {
  region: "Annapurna Region",
  price: 21500,
  difficulty: "extreme",
  maxAltitude: 7219,
  grade: "D",
  expedition: true,
  royalty: true,
  center: [83.83, 28.52],
  zoom: 11,
  content: {
    slug: "annapurna-south-expedition",
    title: "Annapurna South Expedition",
    overview:
      "<p><strong>Annapurna South (7,219 m)</strong> is the mountain that closes the western side of the Annapurna Sanctuary, and the one that fills the view from Ghandruk and Pokhara on a clear morning. It was first climbed in <strong>1964 by a Japanese team</strong>, and it has been climbed remarkably little since — a handful of expeditions in most decades, and long stretches with none at all.</p><p>The route is graded <strong>D</strong>: a heavily crevassed glacier, sustained ice at 50 to 55 degrees, and a long corniced summit ridge, with base camp inside the Sanctuary beneath the three-thousand-metre south face of <strong>Annapurna I</strong>. It is a hard, quiet, seldom-attempted 7,000 m peak in a place that thousands of trekkers walk through every season without ever looking up at it as an objective.</p>",
    highlights: [
      ["Summit Annapurna South (7,219 m)", "A rarely climbed 7,000 m peak first ascended by a Japanese team in 1964."],
      ["Base Camp in the Annapurna Sanctuary", "A glacial amphitheatre ringed by Annapurna I, Hiunchuli, Gangapurna, Tarke Kang and Machhapuchhre."],
      ["A Grade D Route", "Crevassed glacier, sustained 50–55° ice and a long corniced ridge, fixed by our own Sherpa team."],
      ["The Modi Khola Gorge Approach", "Walk in through bamboo forest and a vertical-walled gorge from Chomrong — one of the finest approaches in Nepal."],
      ["One Climbing Sherpa Per Client", "One-to-one high-altitude support on a mountain with no other team on it."],
    ],
    sections: [
      {
        heading: "Best Time to Climb",
        content:
          "<p><strong>April to May</strong> and <strong>October to early November</strong>. The Sanctuary is on the wet side of the range and holds considerably more snow than Manang, and the route needs cold and stability — the ice has to take screws and the summit ridge has to be free of soft cornices.</p><p><strong>Autumn is the stronger season</strong>, with better-consolidated post-monsoon ice. The Modi Khola gorge between Dovan and Deurali is also genuine <strong>avalanche terrain</strong> after heavy snow, and there are winters when the approach itself is closed. We run one departure a year at most and will cancel rather than commit a team to a loaded face.</p>",
      },
      {
        heading: "Climb Difficulty & the Route",
        content:
          "<p>Graded <strong>D</strong>. From <strong>base camp at 4,200 m</strong> in the Sanctuary the route crosses a heavily crevassed glacier — roped, marked and crossed in the cold hours — to <strong>Camp 1 at around 5,300 m</strong>.</p><p>Above it the face steepens into sustained <strong>ice at 50 to 55 degrees</strong>, fixed by our Sherpas, leading to <strong>Camp 2 (6,100 m)</strong> and a <strong>high camp at 6,600 m</strong>. Summit day follows a <strong>long corniced ridge</strong> taken one at a time, and runs twelve to sixteen hours with a full abseil descent. The technical crux is the ice; the real difficulty is doing all of it above 6,000 m on a route nobody else has fixed.</p>",
      },
      {
        heading: "Experience Required",
        content:
          "<p>We require a <strong>previous 6,000 m technical summit</strong> and, ideally, previous time at 7,000 m. You must be efficient on sustained steep ice at altitude, competent to abseil from hanging stances while tired, and comfortable on a long corniced crest.</p><p>Isolation is the other requirement. There will be no other expedition on the mountain, no established camps to inherit and no fixed rope but your team's. A climber used to arriving at a base camp where the route is already in place will find Annapurna South a different proposition, and we say so at enquiry rather than at the assessment day.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance written for <strong>alpinism to 7,500 m, including steep ice, graded climbing and abseiling</strong>, is mandatory. General adventure travel cover is not acceptable and we reject it as a matter of course. A national alpine club policy or a specialist mountaineering insurer is the realistic option, and we verify the wording before permits are issued.</p><p><strong>Emergency helicopter evacuation and repatriation</strong> must be included. The Sanctuary is well served by helicopters from Pokhara and base camp is reachable in clear weather, which makes evacuation better here than on most technical 7,000 m peaks. Nothing above Camp 1 is reachable, and a rescue from the face would be a technical operation by the climbing team first.</p>",
      },
      {
        heading: "Packing List & Personal Equipment",
        content:
          "<p><strong>Double or triple mountaineering boots</strong> rated for 7,000 m, <strong>technical crampons</strong>, a pair of <strong>steep-ice tools</strong>, a <strong>-35°C sleeping bag</strong>, an insulated mat, a heavy expedition down jacket and down trousers, a full shell, technical gloves in three weights, a helmet, category 4 glacier glasses, goggles and two headlamps with lithium batteries.</p><p>The approach is wet, warm and humid for four days, so bring proper waterproofs and expect leeches in the gorge in spring. We supply <strong>all fixed and main ropes, ice screws, snow stakes, anchors and camp equipment</strong>, and our Sherpas fix the route progressively. <strong>Climbers bring their own tools, crampons, harness, belay device and screwgates.</strong></p>",
      },
    ],
    faqs: [
      { question: "How often is Annapurna South climbed?", answer: "Very rarely — a handful of expeditions in most decades and long stretches with none. There is no trodden line, no established camp platforms and no fixed rope from other teams. Every expedition on it starts from nothing, which is a large part of why it costs what it does." },
      { question: "Is this the mountain visible from Pokhara?", answer: "It is the one that dominates the view from Ghandruk and is prominent from Pokhara on a clear morning, immediately west of Machhapuchhre's fishtail. Thousands of trekkers photograph it every season and effectively none of them are looking at it as a climbing objective." },
      { question: "How does it compare with Tilicho Peak?", answer: "Harder. Tilicho is AD+ with a wind problem; Annapurna South is grade D with sustained 50 to 55 degree ice, a heavily crevassed glacier and a longer corniced ridge, though it is 85 m higher only. Tilicho is the 7,000 m peak to climb first." },
      { question: "What is the summit success rate?", answer: "Low and hard to quote meaningfully given how few attempts there are — under half of the expeditions that go for it summit. Conditions on the face and time on the ridge account for most turn-backs, and both are decided against a fixed turnaround." },
      { question: "Can we visit Annapurna Base Camp?", answer: "You walk through it. The approach goes to ABC at 4,130 m and base camp is a short distance beyond on the moraine. Standing under the three-thousand-metre south face of Annapurna I is part of the trip whether or not the summit goes to plan." },
      { question: "Is supplementary oxygen used?", answer: "No. Annapurna South is within the range a fit acclimatised climber handles without it. We carry emergency oxygen with masks and regulators at the high camps and base camp for medical use, along with a Gamow bag and a full medical kit." },
      { question: "How many camps are there above base?", answer: "Three — Camp 1 at around 5,300 m, Camp 2 at 6,100 m and a high camp at 6,600 m. The expedition runs one full rotation through Camp 1 before the summit push, and the Sherpa team fixes and stocks progressively as the team rotates." },
      { question: "How dangerous is the gorge approach?", answer: "The section between Dovan and Deurali is genuine avalanche terrain after heavy snow, and there are two or three places the guide will cross quickly and without stopping. In a bad winter the trail closes entirely. In a normal season it is one of the most beautiful walks in Nepal." },
      { question: "Can Annapurna South be combined with Singu Chuli?", answer: "Not in one expedition — this is a full 7,000 m undertaking with a rotation and reserve days and it uses the schedule it has. Climbers wanting two Sanctuary summits are better served by our Tharpu Chuli and Singu Chuli itinerary." },
      { question: "Do you run fixed departures?", answer: "At most one a season, and we are willing to cancel it if conditions are wrong or if the party that assembles is not strong enough. On a grade D route with no other team in the Sanctuary, a weak team is a serious problem and we would rather refund the trip." },
    ],
    inclusions: {
      airportTransfer: true,
      transport: [
        "Private tourist bus or car from Kathmandu to Pokhara and back.",
        "Private jeep transport between Pokhara and the Siwai road head in both directions.",
      ],
      cityAccommodation: ["Three nights of accommodation in Kathmandu with breakfast.", "Two nights of accommodation in Pokhara with breakfast."],
      camping:
        "Full expedition base camp at 4,200 m with mess, kitchen, storage, communications and toilet tents, plus tented Camp 1 (5,300 m), Camp 2 (6,100 m) and high camp (6,600 m).",
      permits: `Department of Tourism Annapurna South climbing royalty and permit, ${ANNAPURNA_PERMITS}.`,
      sherpa:
        "One high-altitude climbing Sherpa per climber above base camp, with all equipment, wages, insurance and summit allowance.",
      oxygen:
        "Emergency supplementary oxygen with masks and regulators held at the high camps and base camp for medical use.",
      extra: [
        "Full-time cook and kitchen crew at base camp for the duration of the expedition, with high-altitude food and fuel for the camps above.",
        "A technical assessment and training day at base camp on steep ice, tool and screw work, fixed-rope movement and abseiling from hanging stances.",
        "An acclimatisation rotation to Camp 1 with rest days at base camp before the summit push.",
        "Progressive fixing of the glacier, the ice face and the summit ridge by our own Sherpa team, and stripping of the ropes on descent.",
        "Daily satellite weather forecasts, base camp solar power and a Gamow hyperbaric bag.",
        "A puja ceremony at base camp before the team goes onto the mountain.",
        "Porter transport of all expedition equipment into the Sanctuary.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      summitBonus:
        "Summit bonus for your climbing Sherpa, and tips for the expedition leader, base camp crew and porters.",
      extra: [
        "Personal technical equipment — boots, harness, crampons, ice tools, belay device, ascender and screwgates.",
        "Personal satellite communication devices and airtime.",
      ],
      unforeseen:
        "Any additional accommodation, transport or expenses caused by weather, an attempt abandoned for conditions, or a departure cancelled by us because the face is unsafe.",
    },
    gearRentalDays: 0,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 30-day expedition on Annapurna South (7,219 m) from a base camp in the Annapurna Sanctuary, with three camps on a grade D route, an acclimatisation rotation, rope fixed by our own team and three reserve days.",
    inExDescription:
      "Road transport to Pokhara and the Sanctuary road head, Kathmandu and Pokhara hotel nights, teahouse and full expedition camp accommodation, three meals a day throughout, the Department of Tourism royalty, ACAP and TIMS, an expedition leader and liaison officer, one climbing Sherpa per client, a cook crew, all group climbing equipment, progressive rope fixing, the rotation, emergency oxygen and satellite forecasts are included, while international flights, visa, alpinism-grade insurance, personal technical equipment, city meals, summit bonus and tips are not.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Annapurna South Expedition (7,219 m) — 30 Days | Green Compass Treks",
      description:
        "Climb Annapurna South (7,219 m), the rarely attempted peak that closes the Annapurna Sanctuary, on a 30-day grade D expedition with three camps, rope fixed by our own team and one Sherpa per climber.",
      keywords:
        "annapurna south expedition, annapurna south 7219m, annapurna sanctuary climbing, rarely climbed 7000m nepal, technical expedition annapurna",
      tags: "Annapurna South, Annapurna Sanctuary, Annapurna Region, Expedition, 7000m Peak, Technical Climb",
    },
  },
  days: [
    ...singuChuliPeakClimbing.days.slice(0, 9).map((d) => ({
      ...d,
      html: d.html.replace("twenty-one day plan", "thirty-day plan"),
    })),
    {
      title: "Trek from Annapurna Base Camp (4,130 m) to Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp on the glacier moraine in the Sanctuary, below the north face of Annapurna South.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "A short day off the trekking trail and west across the moraine of the <strong>South Annapurna glacier</strong>, onto ground that carries no traffic at all.",
        "<strong>Annapurna South Base Camp (4,200 m)</strong> is established properly today — mess, kitchen, storage and toilet tents alongside the sleeping tents — because this is home for the next three weeks.",
        "The afternoon is spent reading the route: the crevassed glacier, the shelf where Camp 1 goes, the ice face above it and the long corniced ridge that finishes the climb. Behind you the south face of Annapurna I fills the northern wall of the Sanctuary. Around 3 hours. Overnight at base camp.",
      ),
    },
    {
      title: "Puja Ceremony and Settling In at Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, where the puja is held before the team goes onto the mountain.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The <strong>puja</strong> is held this morning. A stone chorten is built, juniper is burned, and every piece of climbing equipment is stacked at the altar to be blessed. No Sherpa on the team will go onto the face before it is done.",
        "The rest of the day is low effort: tents arranged, the mess routine established, radio schedules explained, and the water and charging arrangements sorted.",
        "Prayer flags go up over the camp. Trekkers at Annapurna Base Camp are visible an hour away across the moraine, which is a strange sort of company for an expedition this isolated in every other respect. Overnight at base camp.",
      ),
    },
    {
      title: "Technical Assessment and Training Day at Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, where each climber is assessed on steep ice.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The day that decides who goes above Camp 1. On the ice above camp each climber is put through <strong>two-tool movement on steep ice, screw placement, jumaring on a loaded line over an edge, and abseiling from a hanging stance</strong>.",
        "Rope-team travel and crevasse rescue get a second session, because the glacier below Camp 1 is heavily broken and is crossed roped in the dark on push mornings.",
        "Your leader is assessing efficiency under fatigue rather than best-case technique. Anyone not satisfactory is told today. Meanwhile the Sherpas begin <strong>marking the glacier and fixing toward Camp 1</strong>. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Day at Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, on the acclimatisation day before the rotation.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "An acclimatisation walk up the moraine toward <strong>4,700 m</strong> and back, on ground that asks nothing technical.",
        "The Sanctuary from up there is the whole argument for the place: <strong>Annapurna I</strong>, Hiunchuli, Gangapurna, Tarke Kang and Machhapuchhre in a complete ring, with the Modi Khola gorge as the only gap in the wall.",
        "The afternoon is rest and packing for the rotation, and your leader goes through the season's line on the face with binoculars — on a mountain nobody has fixed, that conversation matters. Overnight at base camp.",
      ),
    },
    {
      title: "Acclimatisation Rotation to Camp 1 (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Camp 1",
      placeDescription: "A tented camp at 5,300 m on the shelf above the glacier, below the ice face.",
      ...ANNAPURNA_SOUTH_C1,
      html: p(
        "The first time on the mountain, and it starts in the dark. The route crosses the <strong>heavily crevassed glacier</strong> roped and on marked line — two to three hours of weaving between open holes — and then climbs fixed rope onto the shelf.",
        "<strong>Camp 1 (5,300 m)</strong> sits above the glacier with the Sanctuary spread out below and the ice face rising directly overhead. Five to seven hours in total with a personal load.",
        "The night here is the point of the rotation, and it gives your leader a proper look at how each climber performs on the route rather than on the practice ice. Overnight at Camp 1.",
      ),
    },
    {
      title: "Descend from Camp 1 (5,300 m) to Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, where the team recovers after the rotation.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "Down the fixed ropes and back across the glacier in the cold of the morning, three to four hours, before the sun softens the snow bridges.",
        "Descending to recover is deliberate: adaptation from last night's altitude consolidates far better at 4,200 m than it would higher, and the Sanctuary at that height is a comfortable place to do it.",
        "The Sherpa team spends the day carrying loads and <strong>fixing the ice face above Camp 1</strong> toward Camp 2. Overnight at base camp.",
      ),
    },
    {
      title: "Rest Day at Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, on the first recovery day after the rotation.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "A genuine rest day. Eating past the point of appetite, four litres of fluid, an afternoon asleep and staying off the legs.",
        "Equipment work fills the gaps: tools sharpened, crampons checked, harnesses inspected for wear after a day of jumaring, and boots dried in whatever sun the Sanctuary offers.",
        "Some climbers walk the hour across to <strong>Annapurna Base Camp</strong> for a lodge meal and the novelty of other people, which after a week of expedition food is a reasonable use of a rest day. Overnight at base camp.",
      ),
    },
    {
      title: "Rest and Preparation Day at Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, on the final preparation day before the summit push.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The last day before the push, spent on the plan rather than the hill. Kit is split into what goes up and what stays, rope pairs are set, radios tested, and your leader briefs the five-day sequence stage by stage with timings.",
        "The Sherpa team returns from the face with the report that matters: how the ice is taking screws, and whether the corniced ridge above Camp 2 is in condition.",
        "The satellite forecast arrives in the evening and the go decision is taken on the two together. A <strong>hard turnaround time</strong> is set for summit day and is not renegotiated on the ridge. Overnight at base camp.",
      ),
    },
    {
      title: "Summit Push – Climb from Base Camp (4,200 m) to Camp 1 (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Camp 1",
      placeDescription: "The shelf camp at 5,300 m above the glacier, reoccupied for the summit push.",
      ...ANNAPURNA_SOUTH_C1,
      html: p(
        "Another pre-dawn start, and the glacier goes faster the second time — four hours or so for a crossing that took five or six on the rotation, on a line the team now knows.",
        "Loads are light: the camps above are already stocked by the Sherpa team, so climbers carry personal equipment only.",
        "<strong>Camp 1 (5,300 m)</strong> by mid-morning, with the rest of the day to lie down, drink and eat. Your leader confirms tomorrow's timings before dark. Overnight at Camp 1.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 1 (5,300 m) to Camp 2 (6,100 m)",
      elevation: "6,100 m",
      accommodation: "Camp 2",
      placeDescription: "A tented camp at 6,100 m on platforms cut into the ice face.",
      ...ANNAPURNA_SOUTH_C2,
      html: p(
        "The day the mountain shows its grade. Above Camp 1 the face steepens into sustained <strong>ice at 50 to 55 degrees</strong> on fixed rope, and it stays that way for six to seven hours.",
        "There is no easy ground and nowhere flat to stop. Climbers front-point, clip past anchors and keep moving, and by the top of it most people understand why the assessment day mattered.",
        "<strong>Camp 2 (6,100 m)</strong> is a handful of tents on platforms cut into the face, small and steep-sided enough that everyone stays clipped in. Overnight at Camp 2.",
      ),
    },
    {
      title: "Summit Push – Climb from Camp 2 (6,100 m) to High Camp (6,600 m)",
      elevation: "6,600 m",
      accommodation: "High Camp",
      placeDescription: "A small tented high camp at 6,600 m on the shoulder below the summit ridge.",
      lng: 83.8067,
      lat: 28.5233,
      html: p(
        "A deliberately short day — three to four hours of fixed ice to the shoulder, arriving by late morning so the team has most of the day lying down.",
        "<strong>High camp (6,600 m)</strong> is two or three tents on the smallest usable ground on the mountain, directly beneath the summit ridge, and it is the coldest and least comfortable night of the expedition.",
        "Dinner is early and minimal; appetite at 6,600 m is poor and forcing fluid matters more than food. Kit is laid out, rope pairs confirmed, and the turnaround time restated. Overnight at high camp.",
      ),
    },
    {
      title: "Summit Annapurna South (7,219 m) and Descend to Camp 2 (6,100 m)",
      elevation: "7,219 m",
      accommodation: "Camp 2",
      placeDescription: "The 7,219 m summit of Annapurna South, on the western wall of the Annapurna Sanctuary.",
      ...ANNAPURNA_SOUTH,
      html: p(
        "Moving by one in the morning, roped and on fixed line. Steep ice above camp leads within a couple of hours onto the feature that defines the route.",
        "The <strong>summit ridge</strong> is long, narrow and corniced, taken one at a time with the Sherpas probing the crest ahead. It runs for hours and it is not hurried — this is where the turnaround time earns its place.",
        "The <strong>summit (7,219 m)</strong> looks north across the Sanctuary to the south face of <strong>Annapurna I</strong> at close range, east to Machhapuchhre and Gangapurna, west toward Dhaulagiri across the Kali Gandaki, and south over the middle hills to the <strong>Pokhara valley</strong> — visible, and about six and a half thousand metres below.",
        "The descent is a long sequence of abseils down the ridge and the face to high camp and then Camp 2. Fourteen to eighteen hours. Overnight at Camp 2.",
      ),
    },
    {
      title: "Descend from Camp 2 (6,100 m) to Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The expedition base camp, reached on the descent from the summit.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "Camp 2 comes down and the whole face is abseiled, with the fixed rope stripped as the team descends. On a mountain this rarely visited, leaving rope behind is not an option — it stays for decades and helps nobody.",
        "The crevassed glacier is crossed roped in the cold of the early morning for the last time.",
        "<strong>Base camp (4,200 m)</strong> in the middle of the day, with thick air by comparison, a hot meal and the first unbroken sleep in five days. Seven to nine hours. Overnight at base camp.",
      ),
    },
    {
      title: "First Reserve Day at Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The first of three contingency days, held for weather or a second summit attempt.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The first of three reserve days, and on a Sanctuary peak they are used often. This side of the range catches more weather than Manang, and a long corniced ridge is closed by wind that would be climbable on a shorter route.",
        "If the summit was missed, the team rests today and goes back up tomorrow with the ropes still fixed. Your leader weighs the party's remaining reserves as heavily as the forecast.",
        "If the summit went to plan, this is rest with the entire Annapurna amphitheatre to look at, which is not a bad way to spend a morning. Overnight at base camp.",
      ),
    },
    {
      title: "Second Reserve Day at Annapurna South Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The second contingency day, held at base camp for the summit window.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The second reserve day. Three of them exist because the face and the ridge are condition-dependent on a timescale of days, and one day in hand frequently is not enough.",
        "If a second attempt is running, the team is at Camp 1 or Camp 2 tonight rather than here.",
        "If the expedition is finished, today is when the camps above come down — the high camp, Camp 2 and Camp 1 are stripped by the Sherpa team and everything comes off the face. Overnight at base camp.",
      ),
    },
    {
      title: "Third Reserve Day and Break Camp at Base Camp (4,200 m)",
      elevation: "4,200 m",
      accommodation: "Annapurna South Base Camp",
      placeDescription: "The final contingency day, and the last night in the Sanctuary.",
      ...ANNAPURNA_SOUTH_BC,
      html: p(
        "The last reserve day and the end of the expedition's margin. If it is not needed for the climb, base camp comes down today.",
        "The <strong>waste management</strong> is done properly and it matters more here than in most places: the Annapurna Sanctuary is a conservation area walked by tens of thousands of trekkers a year, and what an expedition leaves in it is left in front of all of them. Everything goes out on porters.",
        "The chorten from the puja stays with its prayer flags. A last evening with the ring of peaks turning pink at sunset, which is what the Sanctuary is famous for and what it delivers most days. Overnight at base camp.",
      ),
    },
    ...singuChuliPeakClimbing.days.slice(16, 21).map((d) => ({
      ...d,
      html: d.html.replace(
        "climbers who get up Singu Chuli are generally ready for Tilicho Peak or Ama Dablam, and we would be glad to talk about either.",
        "climbers who summit Annapurna South are generally ready for an 8,000 m peak, and Manaslu, Himlung and Annapurna I itself are the three that usually come up next.",
      ),
    })),
  ],
};
