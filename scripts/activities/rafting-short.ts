/**
 * Region: Rafting in Nepal — the two-to-four-day rivers.
 *
 * The catalogue already sells the Trishuli and the Seti as day trips out of
 * Pokhara. These three are the next step up: the Kali Gandaki through its
 * gorge, the Marsyangdi's continuous class IV, and the Bhote Koshi, which is
 * the steepest commercially rafted river in Nepal and a short drive from
 * Kathmandu. All three are overnight trips camping on the riverbank.
 */
import { KATHMANDU, POKHARA, p, type Tour } from "../tours/types";

const REGION = "Rafting in Nepal";

const BENI = { lng: 83.5667, lat: 28.35 };
const MALDHUNGA = { lng: 83.59, lat: 28.27 };
const KALI_TAKEOUT = { lng: 83.7, lat: 27.95 };
const NGADI = { lng: 84.4, lat: 28.33 };
const MARSYANGDI_CAMP = { lng: 84.41, lat: 28.15 };
const BIMALNAGAR = { lng: 84.42, lat: 27.95 };
const BARABISE = { lng: 85.8833, lat: 27.7833 };
const LAST_RESORT = { lng: 85.8, lat: 27.85 };

/** Shared safety and equipment copy: the same crew and kit run all three. */
const SAFETY_SECTION = {
  heading: "Safety, Guides and Equipment",
  content:
    "<p>Every trip runs with <strong>Nepal Rafting Association certified river guides</strong> and a safety kayaker on the harder water. Rafts are self-bailing, and the standard kit is a helmet, a coastguard-approved life jacket, a paddle and a wetsuit or splash jacket where the water is cold. A comprehensive river first aid kit and a throw bag travel on every boat.</p><p>Before the first rapid your guide runs a full <strong>safety briefing</strong> on dry land: paddle commands, what to do if you fall out of the raft, how to swim a rapid feet-first, and how to help someone back in. Nobody gets on the water until that is done and understood. Guides carry the authority to portage any rapid they do not like the look of, and on a rising river they will use it.</p>",
};

const KIT_SECTION = {
  heading: "What to Bring and What Is Provided",
  content:
    "<p>Provided: raft, paddle, helmet, life jacket, wetsuit or splash top where needed, dry bags for your kit, all camping equipment including two-person tents and sleeping mats, and every meal from the first lunch to the last breakfast, cooked on the riverbank by the crew.</p><p>Bring: <strong>quick-drying clothes</strong> you do not mind soaking, a swimming costume, river sandals or old trainers that will stay on your feet, a warm fleece and long trousers for camp, a towel, a sun hat with a cord, high-SPF sunscreen and lip balm, a head torch, and a change of dry clothes sealed in a bag. Sunglasses need a retainer or they will end up in the river. Leave anything valuable in the Kathmandu or Pokhara hotel safe.</p>",
};

/** Kali Gandaki: the deepest gorge on earth, three days, class III-IV. */
export const kaliGandakiRafting: Tour = {
  region: REGION,
  price: 285,
  difficulty: "moderate",
  maxAltitude: 1000,
  center: [83.64, 28.1],
  zoom: 10,
  content: {
    slug: "rafting-in-kali-gandaki-river",
    title: "Rafting in Kali Gandaki River",
    overview:
      "<p><strong>Rafting the Kali Gandaki</strong> is three days of continuous class III and IV water through a remote gorge with no road alongside it — which is precisely what makes it the best short river trip in Nepal. The river drains between <strong>Dhaulagiri (8,167 m)</strong> and <strong>Annapurna I (8,091 m)</strong>, cutting the deepest gorge on earth, and by the time it reaches the put-in below Beni it is a proper whitewater river with rapids every few hundred metres.</p><p>Because the road leaves the river at the start and does not rejoin it until the take-out, the two nights are spent camping on white sand beaches with nothing else around. The Kali Gandaki is also a sacred river — it is the only place in the world the black ammonite <em>shaligram</em> fossils are found, and there are cremation ghats and shrines at the confluences you pass. It is the trip we recommend to anyone who has done the Trishuli and wants the real thing.</p>",
    highlights: [
      ["Class III-IV Continuous Whitewater", "Big Brother, Little Brother and the Bridge of No Return in three days of near-constant rapids."],
      ["A Gorge with No Road", "The river leaves the highway at the put-in and does not meet it again for three days."],
      ["Beach Camping", "Two nights on white sand beaches, with the crew cooking on the riverbank and no other party in sight."],
      ["A Sacred River", "The Kali Gandaki carries the shaligram ammonites and passes cremation ghats and shrines at every confluence."],
      ["Dhaulagiri and Annapurna Water", "You are paddling the drainage between two 8,000 m peaks, in the deepest gorge on earth."],
    ],
    sections: [
      {
        heading: "The River and the Rapids",
        content:
          "<p>The put-in is below <strong>Beni</strong> at Maldhunga, and the river gets going immediately. The first day runs a long series of class III rapids as the gorge closes in, with the named class IV drops — <strong>Big Brother</strong>, <strong>Little Brother</strong> and the <strong>Bridge of No Return</strong> — spread across days one and two. It is a continuous river rather than a pool-and-drop one, so there is far less flat water than on the Trishuli.</p><p>Water levels change the character completely. <strong>October and November</strong> run high and fast after the monsoon, with big waves and pushy hydraulics; by <strong>March and April</strong> the level has dropped and the river becomes more technical, with rock dodging and tighter lines. Both are excellent. Your guide will scout and, if necessary, portage anything the group is not ready for.</p>",
      },
      SAFETY_SECTION,
      {
        heading: "Camping and Food on the River",
        content:
          "<p>Two nights are spent on <strong>sand beaches</strong> the crew picks in the afternoon. Camp is two-person tents with sleeping mats, a mess area and a toilet tent dug well back from the water. There is no lodge option on this river; the gorge has no road and no settlements of any size, which is the whole point.</p><p>All meals from the first day's lunch to the last day's breakfast are cooked on the riverbank by the crew, and river food in Nepal is generally much better than people expect — porridge and eggs for breakfast, a spread of salads and hot dishes for lunch, and a proper cooked dinner with a fire afterwards if the beach allows one. Drinking water is filtered and treated from the river; bring a bottle rather than buying plastic.</p>",
      },
      KIT_SECTION,
    ],
    faqs: [
      { question: "Do I need rafting experience?", answer: "No. The Kali Gandaki is a step up from the Trishuli but it is still a commercially guided trip and most people on it are first-timers. What you do need is to be a competent swimmer, reasonably fit and comfortable with the idea of ending up in the water — on class IV, some of the group usually does at some point." },
      { question: "How does it compare with the Trishuli?", answer: "Considerably harder and much better. The Trishuli is class III with long flat sections and a highway running beside it the whole way. The Kali Gandaki is near-continuous class III-IV in a gorge with no road, no traffic noise and beach camping. If the Trishuli was fun rather than exciting, this is the one to book." },
      { question: "What is the best time of year?", answer: "September to early December and March to early May. October and November run high and fast with the biggest waves; spring is lower, clearer and more technical. We do not run it during the monsoon from mid-June to August, when the river is dangerous, or in deep winter, when the water is painfully cold." },
      { question: "How do we get to the river?", answer: "By road. From Pokhara it is around three hours to the put-in below Beni, and the take-out at Mirmi is roughly two and a half hours back to Pokhara or five to Kathmandu. Transport both ways is included, and we can start and finish the trip in either city — tell us which at booking." },
      { question: "What happens to my luggage?", answer: "Anything you are not taking on the river travels in the support vehicle and meets you at the take-out. What you do take goes in dry bags on the raft. Bring a small padlocked bag for valuables if you would rather they stayed with the vehicle, or leave them in your hotel safe, which we recommend." },
      { question: "Is there an age or weight limit?", answer: "The minimum age is twelve for this river and the guide has final say on the day. There is no formal weight limit, but you must be able to swim, to hold on and pull yourself back into a raft with help, and to walk a rocky riverbank. Tell us at booking about any medical condition, particularly shoulder or back problems." },
      { question: "Can we do it in one or two days instead of three?", answer: "Not really — the gorge has no road access between the put-in and the take-out, so the trip is three days or it is nothing. If you only have a day, the Trishuli or the Seti are the right choices and we sell both. If you have longer, the Karnali and the Sun Koshi are the next steps up." },
      { question: "What are the shaligram fossils?", answer: "Black ammonites, fossilised sea creatures from the Tethys ocean that existed before the Himalaya rose, found only in the bed of this river. Hindus regard them as aniconic representations of Vishnu and they are collected from the riverbed and sold at shrines. You will very likely see people looking for them from the bank." },
    ],
    inclusions: {
      transport: [
        "Private vehicle from Pokhara or Kathmandu to the put-in below Beni and from the Mirmi take-out back at the end of the trip.",
      ],
      accommodation: ["Two nights of riverside camping in two-person tents with sleeping mats."],
      meals: ["All meals from the first day's lunch to the last day's breakfast, cooked on the riverbank."],
      guide: "Nepal Rafting Association certified river guides and a safety kayaker.",
      permits: "River permit and the district rafting registration.",
      extra: [
        "Self-bailing raft, paddle, helmet, life jacket and splash top.",
        "Waterproof dry bags for personal kit, and all camping and kitchen equipment.",
        "Filtered and treated drinking water throughout.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Pokhara or Kathmandu before and after the trip.",
      extra: ["Sleeping bag hire.", "Alcoholic drinks at camp.", "Photo and video package."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "Three days on the Kali Gandaki from Beni to Mirmi, with two nights camping on sand beaches in a gorge with no road.",
    inExDescription:
      "Road transport to and from the river, all rafting equipment, certified guides and a safety kayaker, two nights of riverside camping, every meal on the river, the river permit and government taxes are included, while meals in the cities, sleeping bag hire, drinks and personal expenses are excluded.",
    bestTime: "Sep-Dec, Mar-May",
    meta: {
      title: "Rafting in Kali Gandaki River – 3 Days of Class III-IV",
      description:
        "Three days rafting the Kali Gandaki from Beni through the gorge to Mirmi, with continuous class III-IV rapids and two nights of beach camping.",
      keywords:
        "Kali Gandaki rafting, rafting in Nepal, Kali Gandaki river rafting 3 days, white water rafting Nepal, class IV rafting Nepal, Beni rafting, Pokhara rafting trip",
      tags: "Rafting in Kali Gandaki River, Rafting in Nepal, White Water, Camping, Nepal Activities",
    },
  },
  days: [
    {
      title: "Drive to Maldhunga (760 m) and Raft to the First Beach Camp",
      elevation: "760 m",
      accommodation: "Kali Gandaki beach camp",
      placeDescription: "A white sand beach on the Kali Gandaki, reachable only from the river.",
      ...MALDHUNGA,
      html: p(
        "An early drive from <strong>Pokhara</strong> west to <strong>Beni</strong> and on to the put-in at Maldhunga, around three hours through hill country with Dhaulagiri ahead.",
        "The crew rigs the rafts while your guide runs the full safety briefing on the beach: paddle commands, what to do if you swim, how to help someone back into the boat.",
        "The river starts moving straight away. The first afternoon is a long series of class III rapids as the gorge closes in and the road disappears behind you, with a couple of stiffer drops to introduce the group to class IV water.",
        "Camp is a sand beach the guide picks in the late afternoon. Overnight in tents on the river.",
      ),
    },
    {
      title: "The Full Gorge Day – Big Brother and the Bridge of No Return",
      elevation: "700 m",
      accommodation: "Kali Gandaki beach camp",
      placeDescription: "A second sand beach deep in the Kali Gandaki gorge, with no road access.",
      lng: 83.65,
      lat: 28.1,
      html: p(
        "The main day, and the reason people book this river. Breakfast on the beach and on the water early while the light is still in the gorge.",
        "The named rapids come in sequence through the morning and early afternoon — <strong>Big Brother</strong>, <strong>Little Brother</strong> and the <strong>Bridge of No Return</strong>, all class IV at autumn levels, each scouted from the bank before the crew commits to a line.",
        "Between them the river runs continuous class III with very little flat water, and the gorge walls close in to a few hundred metres apart.",
        "You pass confluences with cremation ghats and small shrines, and waterfalls coming straight off the wall. Camp on a second beach. Overnight in tents.",
      ),
    },
    {
      title: "Raft to Mirmi (500 m) and Return by Road",
      elevation: "500 m",
      accommodation: "Pokhara",
      placeDescription: "Nepal's lakeside city, spread along Phewa Lake beneath the Annapurna range.",
      ...POKHARA,
      html: p(
        "A shorter final morning on the water. The gorge opens out and the rapids ease to class II and III, which after two days of hard paddling is a pleasant way to finish.",
        "The river widens and the surrounding country turns to terraced farmland and villages as you approach the <strong>Mirmi</strong> take-out.",
        "The crew derigs and packs the boats while lunch is cooked on the bank, and the support vehicle is waiting with your dry luggage.",
        "From Mirmi it is around two and a half hours by road back to <strong>Pokhara</strong> or five to Kathmandu, arriving in the late afternoon or early evening.",
      ),
    },
  ],
};

/** Marsyangdi: the hardest commercially run multi-day river in Nepal. */
export const marsyangdiRafting: Tour = {
  region: REGION,
  price: 395,
  difficulty: "challenging",
  maxAltitude: 900,
  center: [84.41, 28.14],
  zoom: 10,
  content: {
    slug: "rafting-in-marsyangdi-river",
    title: "Rafting in Marsyangdi River",
    overview:
      "<p>The <strong>Marsyangdi</strong> is the hardest river we run and the one experienced rafters come to Nepal for. It drops out of the Annapurna and Manaslu massifs at an average of ten metres per kilometre — roughly twice the gradient of the Kali Gandaki — and the result is four days of steep, technical, continuous <strong>class IV and IV+</strong> whitewater with almost no flat water to recover in.</p><p>This is not a beginner's river and we do not sell it as one. Rapids come one after another with short pools between them, every significant drop is scouted from the bank, and swimmers are a real possibility rather than a joke. In exchange you get the finest whitewater in Nepal in a steep forested valley below Manaslu, camping on beaches, with a safety kayaker on the water at all times.</p>",
    highlights: [
      ["Class IV and IV+ Continuous", "The steepest commercially rafted multi-day river in Nepal, at ten metres of drop per kilometre."],
      ["Four Days, Almost No Flat Water", "Rapids in near-continuous sequence with short recovery pools, rather than the pool-and-drop of easier rivers."],
      ["Under Manaslu and the Annapurnas", "The valley the Annapurna Circuit walks up, seen from the water instead of the trail."],
      ["Scouted, Safety-Kayaked and Portaged Where Needed", "Every major drop inspected from the bank before the boats commit."],
      ["Beach Camping Below the Himalaya", "Three nights on the riverbank with the crew cooking, and no road for much of the run."],
    ],
    sections: [
      {
        heading: "The River and Who It Is For",
        content:
          "<p>The put-in is at <strong>Ngadi</strong>, below the Annapurna Circuit trailhead, and the river is working from the first bend. The gradient averages around ten metres per kilometre and the rapids are steep, rocky and technical rather than big and wave-driven. Named drops include <strong>Ladies' Delight</strong>, <strong>Bumblebee</strong> and a long class IV+ section on day two that is scouted every time.</p><p>We ask for <strong>previous whitewater experience</strong> on this river — at minimum a class III multi-day trip, and ideally class IV. You should be a strong swimmer, fit enough to paddle hard for four days, and calm in moving water. If the Marsyangdi is your first river we will say so and put you on the Kali Gandaki instead; it is a better trip than a bad day here.</p>",
      },
      SAFETY_SECTION,
      {
        heading: "Water Levels and Season",
        content:
          "<p>The season is narrow. <strong>Late October to early December</strong> is the classic window: the monsoon flood has dropped, the water is clear and the level is high enough to cover the rocks without being dangerous. <strong>March and April</strong> also run, at lower and more technical levels where the rapids become rockier and the lines tighter.</p><p>We do not raft the Marsyangdi in the <strong>monsoon</strong> at all — at flood the river is genuinely unrunnable — and we watch the level closely at either end of the season. Upstream hydropower operations also affect flow, and if the release pattern makes a section unsafe on your dates your guide will portage it or we will move the trip. That decision is not negotiable on the riverbank.</p>",
      },
      KIT_SECTION,
    ],
    faqs: [
      { question: "Do I need previous rafting experience?", answer: "Yes, for this river. We ask for at least one previous multi-day class III trip and prefer class IV. It is not about technique — you are paddling, not guiding — but about being calm and useful in fast water and being able to look after yourself if you swim. First-timers should book the Kali Gandaki." },
      { question: "How likely am I to fall in?", answer: "More likely than on any other river we run. Over four days of continuous class IV, most groups have at least one swim, and the guides plan for it — that is what the safety kayaker is there for. Knowing how to swim a rapid feet-first, which is covered in the briefing, matters here more than anywhere else." },
      { question: "How does it compare with the Kali Gandaki?", answer: "Steeper, more technical and a full grade harder. The Kali Gandaki is a big-water gorge run with named class IV drops between long class III sections; the Marsyangdi is a continuous steep creek at raft scale, with far less recovery time. Most people who raft both say the Marsyangdi is the better river and the Kali Gandaki is the better holiday." },
      { question: "What is the best time to raft it?", answer: "Late October to early December is the prime window, with clear water and a good level. March and April run lower and more technically. We do not operate in the monsoon, and hydropower releases upstream can change the flow, so your guide checks the level on the day and portages anything that is out of condition." },
      { question: "How do we get there and back?", answer: "By road from Kathmandu or Pokhara to the put-in at Ngadi, around five hours from Kathmandu and four from Pokhara. The take-out near Bimalnagar is on the Prithvi Highway, so the return leg is straightforward to either city. Transport both ways is included." },
      { question: "Are there hydropower dams on the river?", answer: "Yes, several, and they matter. Sections of the Marsyangdi are affected by diversion and release schedules, which can change the level within a day. Your guide plans the run around the current pattern and it is one of the reasons this trip is guided by people who work this river specifically rather than a general crew." },
      { question: "What if the group cannot handle a rapid?", answer: "We portage it. The crew carries the boats around anything the guide judges beyond the group on the day, and that call is theirs alone. On a river this continuous, a portage or two on a four-day trip is normal rather than a failure, and it is the reason every major drop is scouted from the bank first." },
      { question: "Can this be combined with the Annapurna Circuit?", answer: "Yes, and it is a good pairing since the put-in at Ngadi is on the Circuit trailhead road. Walking the Circuit and then rafting the river you have been looking down at for a fortnight is a genuinely satisfying way to finish a trip. Tell us at booking and we will sequence the two." },
    ],
    inclusions: {
      transport: [
        "Private vehicle from Kathmandu or Pokhara to the put-in at Ngadi and from the Bimalnagar take-out back at the end of the trip.",
      ],
      accommodation: ["Three nights of riverside camping in two-person tents with sleeping mats."],
      meals: ["All meals from the first day's lunch to the last day's breakfast, cooked on the riverbank."],
      guide: "Senior Nepal Rafting Association certified river guides who work this river specifically, and a safety kayaker throughout.",
      permits: "River permit and the district rafting registration.",
      extra: [
        "Self-bailing raft, paddle, helmet, life jacket and splash top.",
        "Waterproof dry bags for personal kit, and all camping and kitchen equipment.",
        "Filtered and treated drinking water throughout.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu or Pokhara before and after the trip.",
      extra: ["Sleeping bag hire.", "Alcoholic drinks at camp.", "Photo and video package."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "Four days on the Marsyangdi from Ngadi to Bimalnagar, on continuous class IV and IV+ water below Manaslu, for rafters with previous whitewater experience.",
    inExDescription:
      "Road transport to and from the river, all rafting equipment, senior guides and a safety kayaker, three nights of riverside camping, every meal on the river, the river permit and government taxes are included, while meals in the cities, sleeping bag hire, drinks and personal expenses are excluded.",
    bestTime: "Oct-Dec, Mar-Apr",
    meta: {
      title: "Rafting in Marsyangdi River – 4 Days of Class IV+",
      description:
        "Four days rafting the Marsyangdi from Ngadi to Bimalnagar on continuous class IV and IV+ whitewater, the steepest multi-day river run in Nepal.",
      keywords:
        "Marsyangdi rafting, Marsyangdi river rafting, class IV rafting Nepal, hardest rafting Nepal, white water rafting Nepal, Ngadi put in, advanced rafting Nepal",
      tags: "Rafting in Marsyangdi River, Rafting in Nepal, White Water, Class IV, Nepal Activities",
    },
  },
  days: [
    {
      title: "Drive to Ngadi (900 m) and Raft the First Section",
      elevation: "900 m",
      accommodation: "Marsyangdi beach camp",
      placeDescription: "A riverside camp on the upper Marsyangdi, below the Annapurna Circuit trailhead.",
      ...NGADI,
      html: p(
        "A long drive from <strong>Kathmandu</strong> or Pokhara to the put-in at <strong>Ngadi</strong>, on the road that serves the Annapurna Circuit trailhead.",
        "The crew rigs while your guide gives the safety briefing, which on this river is longer and more serious than usual: paddle commands, swimming a rapid feet-first, and what the safety kayaker will and will not be able to do for you.",
        "The afternoon run is a short, sharp introduction — a few kilometres of class III and IV so the guide can watch how the group paddles together before committing to the harder water tomorrow.",
        "Camp on the first available beach. Overnight in tents on the river.",
      ),
    },
    {
      title: "The Continuous Class IV+ Day",
      elevation: "800 m",
      accommodation: "Marsyangdi beach camp",
      placeDescription: "A second riverside camp in the steep forested Marsyangdi valley.",
      ...MARSYANGDI_CAMP,
      html: p(
        "The hardest day on any river we run. Breakfast early and on the water while the level is at its most predictable.",
        "The gradient steepens and the rapids come almost continuously, with only short pools between them. <strong>Ladies' Delight</strong> and <strong>Bumblebee</strong> come in the morning, and the long class IV+ section in the middle of the day is scouted from the bank before the boats commit — every time, regardless of who is guiding.",
        "The valley is steep and forested with Manaslu behind you when the walls open, but there is very little opportunity to look at it.",
        "Camp on a beach in the late afternoon, and the fire is generally well earned. Overnight in tents.",
      ),
    },
    {
      title: "The Lower Gorge and the Third Camp",
      elevation: "700 m",
      accommodation: "Marsyangdi beach camp",
      placeDescription: "The last riverside camp on the lower Marsyangdi, where the valley begins to open.",
      lng: 84.415,
      lat: 28.05,
      html: p(
        "A third day of hard paddling, though the character begins to change. The gradient eases slightly and the rapids become bigger and less technical, with more water and fewer rocks.",
        "There are still several class IV drops to scout, and the crew keeps the same discipline about inspecting them.",
        "The valley opens as the river comes down toward the middle hills, and the surroundings turn from steep forest to terraced farmland with villages on the slopes above.",
        "By the afternoon there is enough flat water to float, swim beside the boat and look around, which after two days is a novelty. Camp on the last beach. Overnight in tents.",
      ),
    },
    {
      title: "Raft to Bimalnagar (500 m) and Return by Road",
      elevation: "500 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the base for the drive to and from the river.",
      ...KATHMANDU,
      html: p(
        "A shorter last morning. The river runs out into open valley with class II and III water, and the paddling is relaxed enough to talk.",
        "You reach the <strong>Bimalnagar</strong> take-out on the Prithvi Highway around the middle of the day, where the support vehicle is waiting with your dry luggage and the crew derigs the boats over lunch on the bank.",
        "From here it is around four hours east to <strong>Kathmandu</strong> or two and a half west to Pokhara, so the trip can finish in either city.",
        "Most groups arrive back in the early evening, at which point a hot shower and a proper bed are the priority.",
      ),
    },
  ],
};

/** Bhote Koshi: the steepest short run in the country, two hours from Kathmandu. */
export const bhoteKoshiRafting: Tour = {
  region: REGION,
  price: 195,
  difficulty: "challenging",
  maxAltitude: 1200,
  center: [85.85, 27.82],
  zoom: 11,
  content: {
    slug: "rafting-in-bhote-koshi-river",
    title: "Rafting in Bhote Koshi River",
    overview:
      "<p>The <strong>Bhote Koshi</strong> is the steepest river commercially rafted in Nepal and the shortest trip we sell: two days, around twenty-six kilometres, and a gradient of roughly fifteen metres per kilometre. It drops out of the Tibetan border country north-east of Kathmandu in a continuous staircase of <strong>class IV and IV+</strong> rapids, packed so tightly that a single day here has more whitewater than three on an easier river.</p><p>It is also the most accessible hard river in the country — around three hours from Kathmandu on the Araniko Highway, with a riverside resort at the take-out rather than a beach camp. That combination makes it the standard choice for people who want serious whitewater without committing a week to it, and the reason it is usually packaged with the bungee jump that operates from the bridge over the same gorge.</p>",
    highlights: [
      ["The Steepest Rafted River in Nepal", "Roughly fifteen metres of drop per kilometre, in a continuous staircase of class IV."],
      ["Two Days, Three Hours from Kathmandu", "Serious whitewater without a week off work or a long drive."],
      ["Frog in a Blender and Liquid Bliss", "A run of named class IV+ rapids in quick succession through the gorge."],
      ["Riverside Resort, Not a Beach Camp", "A night in a permanent tented resort above the gorge, with hot showers and a bar."],
      ["Pairs with the Bungee", "The 160 m jump from the gorge bridge is on the same road and can be added to the trip."],
    ],
    sections: [
      {
        heading: "The River and Who It Is For",
        content:
          "<p>The put-in is above <strong>Barabise</strong> and the river never lets up. The Bhote Koshi is a pool-drop river in theory and a continuous one in practice: the pools are short and the drops come immediately after each other, with named rapids including <strong>Frog in a Blender</strong>, <strong>Liquid Bliss</strong> and <strong>Fault Line</strong> running class IV and IV+ at normal autumn flows.</p><p>We ask for either <strong>previous rafting experience</strong> or a genuinely good level of fitness and confidence in water. It is a shorter trip than the Marsyangdi and slightly less relentless, but the individual rapids are as hard as anything in the country. Everything significant is scouted, the crew portages what it does not like, and a safety kayaker is on the water throughout.</p>",
      },
      SAFETY_SECTION,
      {
        heading: "Season, Levels and the 2015 Landslides",
        content:
          "<p><strong>September to early December</strong> and <strong>March to May</strong> are the seasons. Autumn runs higher and pushier; spring is lower and more technical. The Bhote Koshi is a small, steep catchment, which means the level responds to rain within hours — a wet night upstream can change the river by the morning, and the guides check it before every launch.</p><p>The 2015 earthquake and the landslides that followed reshaped parts of the gorge and closed the river for a period, and the Araniko Highway alongside it is still repaired in sections. The rapids have been re-scouted and the run is fully operational, but the geology here is young and moving, and your guide will re-inspect anything that looks different from the last trip.</p>",
      },
      KIT_SECTION,
    ],
    faqs: [
      { question: "Is this suitable for a first-time rafter?", answer: "Only if you are fit, confident in water and a strong swimmer, and even then it is a demanding introduction. The rapids are as hard as any in Nepal, just fewer of them. If this is your first river, the Trishuli or the Kali Gandaki are better first steps; if you have rafted class III before, the Bhote Koshi is a good next one." },
      { question: "Why is it only two days?", answer: "Because the runnable section is around twenty-six kilometres, and at that gradient it does not need to be longer. What you lose in duration you gain in intensity — there is more whitewater per hour here than on any other commercial run in the country. It also means the trip fits into a weekend from Kathmandu." },
      { question: "Where do we stay?", answer: "At a riverside resort above the gorge, in permanent safari-style tents with beds, proper bathrooms and hot showers, rather than a beach camp. There is a bar and a dining room. It is a considerably softer night than the Kali Gandaki or the Marsyangdi and is included in the price." },
      { question: "Can we add the bungee jump?", answer: "Yes, and most people do. The 160 m jump operates from a bridge over the same gorge, a few minutes from the resort, and can be added to either day of the trip. Tell us at booking and we will build it into the schedule and price rather than leaving you to arrange it on the day." },
      { question: "How do we get there?", answer: "Around three hours from Kathmandu on the Araniko Highway toward the Tibetan border, with the last stretch running beside the gorge itself. Transport both ways is included. The road is repaired in sections after the 2015 earthquake and landslides, so allow more time in the monsoon." },
      { question: "How cold is the water?", answer: "Cold. It comes off the Tibetan border country and stays chilly all year, which is why a wetsuit or splash top is provided and worn. In the spring and late autumn shoulder weeks, thermal layers under the splash top are worth having. Bring a warm fleece and dry clothes for afterwards." },
      { question: "What is the minimum age?", answer: "Sixteen for this river, and the guide has final say on the day. It is a harder run than our other short trips and the consequences of a swim are greater. For families with younger children the Trishuli day trip is the right product and we sell it." },
      { question: "Does rain affect the trip?", answer: "Yes, more than on the bigger rivers. This is a small, steep catchment that rises fast, so heavy rain upstream can put the river out of condition within hours. The guides check the level before every launch and will delay, shorten or portage sections accordingly. That judgement is theirs and it is not negotiable." },
    ],
    inclusions: {
      transport: [
        "Private vehicle from Kathmandu to the put-in above Barabise and back from the take-out at the end of the trip.",
      ],
      accommodation: ["One night at a riverside resort in a permanent tent with a private bathroom and hot shower."],
      meals: ["All meals from the first day's lunch to the last day's breakfast."],
      guide: "Nepal Rafting Association certified river guides and a safety kayaker throughout.",
      permits: "River permit and the district rafting registration.",
      extra: [
        "Self-bailing raft, paddle, helmet, life jacket and wetsuit or splash top.",
        "Waterproof dry bags for personal kit.",
        "Filtered and treated drinking water throughout.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu before and after the trip.",
      extra: ["The bungee jump at the gorge bridge, available as an add-on.", "Alcoholic drinks at the resort.", "Photo and video package."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "saturday",
    addons: [
      {
        title: "Bungee Jump at the Bhote Koshi Gorge",
        description:
          "Add the 160 m jump from the suspension bridge over the same gorge, a few minutes from the resort, including the safety briefing, harness, jump and certificate. It runs on either day of the rafting trip and is scheduled around the river.",
        unit: "person",
        pricePerUnit: 110,
      },
    ],
    itineraryDescription:
      "Two days on the Bhote Koshi north-east of Kathmandu, the steepest commercially rafted river in Nepal, with a night at a riverside resort.",
    inExDescription:
      "Road transport to and from the river, all rafting equipment, certified guides and a safety kayaker, a night at the riverside resort, every meal on the trip, the river permit and government taxes are included, while meals in Kathmandu, the bungee add-on, drinks and personal expenses are excluded.",
    bestTime: "Sep-Dec, Mar-May",
    meta: {
      title: "Rafting in Bhote Koshi River – 2 Days of Class IV+",
      description:
        "Two days on the Bhote Koshi, the steepest commercially rafted river in Nepal, three hours from Kathmandu, with a night at a riverside resort.",
      keywords:
        "Bhote Koshi rafting, Bhote Koshi river rafting, rafting near Kathmandu, class IV rafting Nepal, steepest river Nepal, Barabise rafting, weekend rafting Nepal",
      tags: "Rafting in Bhote Koshi River, Rafting in Nepal, White Water, Class IV, Nepal Activities",
    },
  },
  days: [
    {
      title: "Drive to Barabise (1,200 m) and Raft the Upper Gorge",
      elevation: "1,200 m",
      accommodation: "Bhote Koshi riverside resort",
      placeDescription: "A permanent tented resort above the Bhote Koshi gorge, near the bungee bridge.",
      ...BARABISE,
      html: p(
        "A morning drive from <strong>Kathmandu</strong> north-east on the Araniko Highway toward the Tibetan border, around three hours with the last stretch running directly beside the gorge.",
        "The crew rigs at the put-in above <strong>Barabise</strong> while your guide runs the safety briefing, which on this river is delivered with some emphasis.",
        "The afternoon run is the steepest section: <strong>Frog in a Blender</strong>, <strong>Liquid Bliss</strong> and <strong>Fault Line</strong> in quick succession, class IV and IV+, with each significant drop scouted from the bank before the boats commit.",
        "The take-out is at the resort. Hot showers, a bar and a permanent tent with a real bed. Overnight above the gorge.",
      ),
    },
    {
      title: "The Lower Bhote Koshi and Return to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the base for the drive to and from the river.",
      ...KATHMANDU,
      html: p(
        "Breakfast at the resort and back on the water for the lower section, which is a shade easier than yesterday but still a continuous class III and IV run with very little rest.",
        "The gorge opens gradually as the river comes down toward the confluence, and there are a couple of good play waves where the crew will let the group surf if the level allows.",
        "If you have added the <strong>bungee jump</strong>, it is scheduled around the river — the bridge is a few minutes from the resort.",
        "Lunch on the bank while the boats are derigged, then the drive back to <strong>Kathmandu</strong>, arriving in the late afternoon.",
      ),
    },
  ],
};

export const shortRaftingTrips: Tour[] = [kaliGandakiRafting, marsyangdiRafting, bhoteKoshiRafting];
