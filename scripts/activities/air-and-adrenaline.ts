/**
 * Regions: Bungee Jump, Paragliding, Zip Flyer, Mountain Flight and Heli Tour.
 *
 * Seven single-day activities that the Tours category did not carry. The
 * catalogue already sells the Pokhara bungee, the standard tandem paraglide,
 * the Pokhara zip flyer and the Everest mountain flight from Kathmandu; these
 * are the other sites and the other versions of each, which are searched for by
 * name and had nowhere to land.
 */
import { POKHARA, PKR_PLACE, p, type Tour } from "../tours/types";

const BHOTE_KOSHI_BRIDGE = { lng: 85.8536, lat: 27.8919 };
const KUSHMA = { lng: 83.6889, lat: 28.2306 };
const SARANGKOT = { lng: 83.949, lat: 28.244 };

/** The original Nepali bungee, 160 m over the Bhote Koshi. */
export const bhoteKoshiBungee: Tour = {
  region: "Bungee Jump in Nepal",
  price: 145,
  difficulty: "easy",
  maxAltitude: 1200,
  center: [85.85, 27.89],
  zoom: 12,
  content: {
    slug: "bungee-jump-in-bhote-koshi",
    title: "Bungee Jump in Bhote Koshi",
    overview:
      "<p>The <strong>Bhote Koshi bungee</strong> is the original jump in Nepal and still the one people mean when they say they bungeed here. The platform hangs from a <strong>166 m suspension bridge</strong> over the Bhote Koshi gorge, three hours north-east of Kathmandu on the road to the Tibetan border, and the drop is a straight 160 m into a canyon with the river running white below it.</p><p>The bridge was designed specifically for the jump by a Swiss company and is rated for a six-tonne load — several times what it ever carries. Jumps are run by New Zealand-trained masters using the same procedures as the operations at Queenstown, and the safety record over twenty-five years is the reason this site is still the benchmark. It pairs naturally with a day's rafting on the same gorge, which is how most people do it.</p>",
    highlights: [
      ["A 160 m Free Fall", "Off a purpose-built suspension bridge into the Bhote Koshi gorge — one of the longest jumps in Asia."],
      ["The Original Nepali Bungee", "The site that started it, run to New Zealand procedures with a twenty-five-year record."],
      ["The Canyon Swing", "A 240 m arc across the gorge, taken instead of or as well as the jump."],
      ["Three Hours from Kathmandu", "A day trip on the Araniko Highway, with lunch at the riverside resort included."],
      ["Pairs with the Rafting", "The Bhote Koshi whitewater runs directly beneath the bridge and can be added to the day."],
    ],
    sections: [
      {
        heading: "The Jump and the Bridge",
        content:
          "<p>The bridge spans <strong>166 m</strong> across the gorge and the jump is a <strong>160 m free fall</strong> into it. It was built by a Swiss firm to a specification set by the bungee operator, is anchored into rock on both sides, and is rated to hold six tonnes — the load in normal use is a fraction of that. There is a steel safety walkway and the jump platform sits at the centre of the span.</p><p>You are weighed on arrival and your weight is written on your hand, which determines the cord. Harnessing is done twice and checked by a second person. The jump masters are trained in New Zealand and the procedures are the ones used at Queenstown and Kawarau. Most people are on the bridge for around twenty minutes from harness to landing, and the fall itself lasts a little over three seconds.</p>",
      },
      {
        heading: "The Canyon Swing",
        content:
          "<p>From the same bridge you can take the <strong>canyon swing</strong> instead of, or as well as, the bungee. Rather than a vertical drop it is a free fall of around 100 m followed by a giant pendulum arc across the gorge — roughly <strong>240 m</strong> of swing at up to 150 kph, which lasts considerably longer than the jump does.</p><p>Opinions divide sharply. The bungee is more frightening for the first two seconds; the swing is more frightening overall, because you can see where you are going for all of it. It can be taken forwards, backwards or in tandem with a friend, and a combined bungee-and-swing ticket is available as an add-on if you cannot decide.</p>",
      },
      {
        heading: "Restrictions, Safety and Who Cannot Jump",
        content:
          "<p>The minimum age is <strong>16</strong> (under 18 needs a parent or guardian present to sign), the minimum weight is <strong>40 kg</strong> and the maximum is <strong>110 kg</strong>. You will be weighed on the day and the figure on the scale is the one that counts.</p><p>You <strong>cannot jump</strong> with heart disease, high blood pressure, epilepsy, a neurological or spinal condition, a recent fracture or dislocation, or if you are pregnant. Alcohol on the day is an absolute bar. If you have any medical condition at all, declare it at booking rather than on the bridge — the jump masters will refuse anyone they are not satisfied about and there is no refund at that point, whereas a conversation in advance usually finds a way through.</p>",
      },
      {
        heading: "Getting There and What to Bring",
        content:
          "<p>Around three hours from Kathmandu on the <strong>Araniko Highway</strong> toward the Tibetan border, with the last stretch running above the gorge. Transport both ways is included and the day runs roughly 6 am to 7 pm. In the monsoon allow longer; the road is repaired in sections after the 2015 earthquake and the landslides that followed.</p><p>Bring comfortable clothes you can move in, closed shoes, sunglasses with a retainer or none at all, and something warm for the gorge, which is cooler than Kathmandu. Leave loose items — phones, hats, jewellery — with the ground crew or in the vehicle, because anything not attached to you will end up in the river. Lunch at the riverside resort is included, and there is a bar for afterwards.</p>",
      },
    ],
    faqs: [
      { question: "How high is the jump exactly?", answer: "The bridge deck sits 166 m above the river and the free fall is 160 m. That makes it one of the longest bungee jumps in Asia and roughly three and a half seconds of falling before the cord begins to take. For comparison, the Pokhara jump is 70 m and the Kushma jump is 228 m." },
      { question: "Is it safe?", answer: "As safe as a bungee gets. The bridge was purpose-built by a Swiss company and rated to six tonnes, the jump masters are New Zealand trained, cords are logged and retired on a fixed schedule, and every harness is checked twice by two people. The site has operated for over twenty-five years without a serious incident." },
      { question: "What is the age and weight limit?", answer: "Minimum age 16, with a parent or guardian signature if you are under 18. Minimum weight 40 kg and maximum 110 kg — you are weighed on arrival and the scale decides. There is no upper age limit provided you are in good health and pass the medical declaration." },
      { question: "Can I jump if I have a medical condition?", answer: "Not with heart disease, high blood pressure, epilepsy, a neurological or spinal condition, a recent fracture or dislocation, or if you are pregnant. Declare anything at booking rather than on the bridge — the jump masters will refuse on the day and there is no refund at that stage, whereas we can usually sort it out in advance." },
      { question: "What is the difference between the bungee and the swing?", answer: "The bungee is a 160 m vertical free fall with the recoil. The swing is around 100 m of free fall followed by a 240 m pendulum arc across the gorge at up to 150 kph. The jump is worse for two seconds; the swing is worse for twenty. You can book either, or both on a combined ticket." },
      { question: "Can I do the rafting on the same trip?", answer: "Yes, and it is the natural combination since the whitewater runs directly beneath the bridge. The two-day Bhote Koshi rafting trip includes a night at the riverside resort, and the jump slots into either day. Book them together and we will schedule the two around each other." },
      { question: "How long does the whole day take?", answer: "Around thirteen hours door to door from Kathmandu: three hours out, the jump and lunch, and three hours back, with a 6 am departure and a 7 pm return. The jump itself takes about twenty minutes from harness to landing. Most of the day is the road." },
      { question: "Can I get a photo or video?", answer: "Yes. The operator films every jump from the bridge and from the gorge and sells the footage afterwards; it is not included in the price, and it is genuinely worth buying because you will remember very little of the fall itself. Your own camera cannot go on the jump." },
    ],
    inclusions: {
      transport: ["Private vehicle from Kathmandu to the Bhote Koshi gorge and back, with hotel pickup and drop-off."],
      meals: ["Lunch at the riverside resort after the jump."],
      guide: "Trained jump masters and full ground crew at the bridge.",
      entrance: "One bungee jump including the safety briefing, harness, cord, weigh-in and certificate.",
      extra: ["Bottled water in the vehicle."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast and dinner, and any meals not specified.",
      extra: ["Photo and video package filmed by the operator.", "The canyon swing, available as an add-on.", "Alcoholic drinks at the resort."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "saturday",
    addons: [
      {
        title: "Canyon Swing at the Same Bridge",
        description:
          "Add the 240 m canyon swing to your day — around 100 m of free fall followed by a giant pendulum arc across the gorge at up to 150 kph. It can be taken forwards, backwards or in tandem, and runs from the same bridge immediately after the bungee.",
        unit: "person",
        pricePerUnit: 95,
      },
    ],
    itineraryDescription:
      "A single day from Kathmandu to the Bhote Koshi gorge for the 160 m bungee jump, with lunch at the riverside resort.",
    inExDescription:
      "Return road transport from Kathmandu, one bungee jump with all equipment and the safety briefing, trained jump masters, lunch at the resort and government taxes are included, while the canyon swing, photo and video package, other meals and personal expenses are excluded.",
    bestTime: "Sep-Jun",
    meta: {
      title: "Bungee Jump in Bhote Koshi – 160 m over the Gorge",
      description:
        "Nepal's original bungee: a 160 m free fall from a purpose-built suspension bridge over the Bhote Koshi gorge, three hours from Kathmandu.",
      keywords:
        "bungee jump Nepal, Bhote Koshi bungee, The Last Resort bungee, highest bungee Nepal, canyon swing Nepal, bungee jumping Kathmandu, 160m bungee",
      tags: "Bungee Jump in Bhote Koshi, Bungee Jump in Nepal, Adventure, Bhote Koshi, Nepal Activities",
    },
  },
  days: [
    {
      title: "Kathmandu to the Bhote Koshi Gorge and the 160 m Jump",
      elevation: "1,200 m",
      accommodation: "Bhote Koshi gorge",
      placeDescription: "A purpose-built suspension bridge 166 m above the Bhote Koshi, near the Tibetan border road.",
      ...BHOTE_KOSHI_BRIDGE,
      html: p(
        "A 6 am pickup from your hotel and around three hours north-east on the <strong>Araniko Highway</strong> toward the Tibetan border, the last stretch running high above the gorge.",
        "On arrival you are weighed, your weight is written on your hand, and the ground crew runs the briefing. Harnessing is done and then checked again by a second person before anyone walks out onto the bridge.",
        "The jump itself is a <strong>160 m free fall</strong> from the centre of the span into the canyon, a little over three seconds before the cord takes and the recoil begins. You are lowered to a landing platform at the bottom and walk out.",
        "Lunch at the riverside resort afterwards, then the drive back to <strong>Kathmandu</strong>, arriving around 7 pm.",
      ),
    },
  ],
};

/** Kushma: 228 m over the Kali Gandaki, among the highest jumps in the world. */
export const kushmaBungee: Tour = {
  region: "Bungee Jump in Nepal",
  price: 165,
  difficulty: "easy",
  maxAltitude: 900,
  center: [83.69, 28.23],
  zoom: 12,
  content: {
    slug: "bungee-jump-in-kushma",
    title: "Bungee Jump in Kushma",
    overview:
      "<p>The <strong>Kushma bungee</strong> is a <strong>228 m</strong> jump from the Kushma-Gyadi bridge over the Kali Gandaki gorge in Parbat district, and it is the highest in Nepal and among the highest in the world. The bridge itself is a landmark — one of the tallest suspension footbridges anywhere, strung across a gorge so deep that the river is a thread of white a long way below your feet.</p><p>Kushma sits about two hours west of Pokhara, which makes it a comfortable day trip from the lake rather than the full-day expedition the Bhote Koshi jump requires from Kathmandu. The same site runs the <strong>Kushma swing</strong> and one of the longest zip lines in the country from the neighbouring gorge wall, so a single day here can take in all three if you have the nerve for it.</p>",
    highlights: [
      ["228 m — The Highest in Nepal", "A free fall from the Kushma-Gyadi bridge over the Kali Gandaki, among the highest jumps in the world."],
      ["One of the World's Tallest Footbridges", "The bridge is worth the trip on its own, strung across a gorge with the river a thread below."],
      ["Two Hours from Pokhara", "A day trip from the lake rather than a thirteen-hour round trip from Kathmandu."],
      ["The Kushma Swing", "A 228 m swing from the same bridge, available instead of or alongside the jump."],
      ["Three Activities in One Gorge", "Bungee, swing and one of Nepal's longest zip lines within a few minutes of each other."],
    ],
    sections: [
      {
        heading: "The Jump and the Bridge",
        content:
          "<p>The <strong>Kushma-Gyadi bridge</strong> spans the Kali Gandaki gorge at a height of around 228 m, which puts the free fall among the three or four highest commercial bungees in the world and comfortably the highest in Asia by some measures. The gorge here is narrow and vertical-walled, and the sensation is quite different from the Bhote Koshi: there is more air beneath you and it lasts appreciably longer, around seven seconds before the cord takes.</p><p>Procedure is the same as anywhere serious. You are weighed on arrival, the cord is selected against your weight, the harness is fitted and then independently checked, and the jump masters run the count. Cords are logged and retired on a fixed schedule. Most people spend twenty to thirty minutes at the site from weigh-in to walking back off the bridge.</p>",
      },
      {
        heading: "The Swing and the Zip Line",
        content:
          "<p>The same operator runs a <strong>228 m swing</strong> from the bridge. Where the bungee drops you vertically and bounces, the swing releases you into free fall and then into an enormous arc down and along the gorge, which lasts far longer and which a good many people find harder to commit to than the jump.</p><p>A few minutes away, strung between the gorge walls, is one of the <strong>longest and steepest zip lines in Nepal</strong> — around 1.8 km of cable with a substantial vertical drop, run in a seated harness at speeds well over 100 kph. It is the mildest of the three by a distance and is the one to add if a member of the group does not want to jump. All three can be bought together as a combination ticket.</p>",
      },
      {
        heading: "Restrictions, Safety and Who Cannot Jump",
        content:
          "<p>Minimum age <strong>16</strong>, with a parent or guardian signature under 18. Minimum weight <strong>45 kg</strong>, maximum <strong>110 kg</strong>. You are weighed on the day and the scale is what counts, not what you tell us at booking.</p><p>You <strong>cannot jump</strong> with heart disease, high blood pressure, epilepsy, a neurological or spinal condition, a recent fracture or dislocation, or if you are pregnant. Alcohol on the day is an absolute bar. Declare any medical condition when you book: the jump masters will turn people away at the bridge and there is no refund at that stage, whereas a conversation beforehand usually resolves it.</p>",
      },
      {
        heading: "Getting There and What to Bring",
        content:
          "<p>Around two to two and a half hours west of <strong>Pokhara</strong> by road through Naudanda and Kusma bazaar, on sealed road for most of the way. Transport both ways is included and the day runs roughly 7 am to 5 pm. From Kathmandu it is a long drive and we would normally sequence it with a Pokhara stay rather than sell it as a Kathmandu day trip.</p><p>Bring comfortable clothes you can move in, closed shoes, and sunglasses with a retainer or none at all. Leave phones, hats, loose jewellery and anything in a pocket with the ground crew — the gorge is 228 m deep and nothing that falls comes back. Lunch is included at the site. The gorge is warm through most of the year; a light layer is enough.</p>",
      },
    ],
    faqs: [
      { question: "Is this really the highest bungee in Nepal?", answer: "Yes, by a wide margin. Kushma is around 228 m against 160 m at the Bhote Koshi and 70 m at Pokhara, and it ranks among the three or four highest commercial jumps in the world. The free fall lasts roughly seven seconds against three and a half at the Bhote Koshi." },
      { question: "How does it compare with the Bhote Koshi jump?", answer: "Higher, longer and easier to reach from Pokhara; the Bhote Koshi is the older site with the longer track record and is easier from Kathmandu. If you are already in Pokhara, Kushma is the obvious choice. If you are in Kathmandu and not going west, the Bhote Koshi is." },
      { question: "What is the age and weight limit?", answer: "Minimum age 16, with a guardian signature under 18. Minimum weight 45 kg and maximum 110 kg, confirmed by weighing on arrival. There is no upper age limit provided you are in good health and pass the medical declaration, and we have had jumpers well into their sixties." },
      { question: "Can I do the swing and the zip line as well?", answer: "Yes. All three run from the same gorge within a few minutes of each other and a combination ticket is available — tell us at booking and we will price it. If one of your group does not want to jump, the zip line is a good deal milder and lets them come along for the day rather than sitting it out." },
      { question: "Can this be done from Kathmandu in a day?", answer: "Not comfortably. Kushma is seven to eight hours from Kathmandu each way, so it only works as a day trip from Pokhara. If you are Kathmandu-based, either build in a Pokhara night or book the Bhote Koshi jump, which is three hours from the city." },
      { question: "What happens if I back out on the bridge?", answer: "It happens and nobody makes a fuss. You walk off and there is no refund, which is the standard everywhere. The jump masters will give you time and talk you through it if you want that, and a surprising number of people who freeze on the first count go on the second." },
      { question: "Is there a photo or video service?", answer: "Yes, filmed from the bridge and from a fixed camera in the gorge, sold at the site afterwards. It is not in the price. Your own camera or phone cannot go on the jump — anything not attached to the harness ends up 228 m below." },
      { question: "What is the best time of year?", answer: "September to June. The gorge is warm and clear through autumn, winter and spring, and the views along the Kali Gandaki are best from October to December. We avoid the monsoon from July to August, when the road is unreliable and the site closes in heavy rain." },
    ],
    inclusions: {
      transport: ["Private vehicle from Pokhara to Kushma and back, with hotel pickup and drop-off."],
      meals: ["Lunch at the site after the jump."],
      guide: "Trained jump masters and full ground crew at the bridge.",
      entrance: "One bungee jump including the safety briefing, harness, cord, weigh-in and certificate.",
      extra: ["Bottled water in the vehicle."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast and dinner, and any meals not specified.",
      extra: ["Photo and video package filmed by the operator.", "The Kushma swing and zip line, available as add-ons."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "sunday",
    addons: [
      {
        title: "Kushma Swing from the Same Bridge",
        description:
          "Add the 228 m swing — a free fall followed by an enormous arc down and along the Kali Gandaki gorge, which lasts far longer than the jump and which many people find the harder of the two to commit to.",
        unit: "person",
        pricePerUnit: 110,
      },
      {
        title: "Kushma Zip Line across the Gorge",
        description:
          "Around 1.8 km of cable strung between the gorge walls with a substantial vertical drop, ridden in a seated harness at over 100 kph. Much the mildest of the three activities at this site and the one to add for anyone in the group not jumping.",
        unit: "person",
        pricePerUnit: 65,
      },
    ],
    itineraryDescription:
      "A single day from Pokhara to Kushma for the 228 m bungee jump over the Kali Gandaki gorge, the highest in Nepal.",
    inExDescription:
      "Return road transport from Pokhara, one bungee jump with all equipment and the safety briefing, trained jump masters, lunch at the site and government taxes are included, while the swing, the zip line, the photo and video package, other meals and personal expenses are excluded.",
    bestTime: "Sep-Jun",
    meta: {
      title: "Bungee Jump in Kushma – 228 m, the Highest in Nepal",
      description:
        "A 228 m bungee jump from the Kushma-Gyadi bridge over the Kali Gandaki gorge, the highest in Nepal, two hours from Pokhara.",
      keywords:
        "Kushma bungee, highest bungee Nepal, bungee jump Pokhara, Kushma Gyadi bridge, 228m bungee, Kali Gandaki bungee, world's highest bungee jump Nepal",
      tags: "Bungee Jump in Kushma, Bungee Jump in Nepal, Adventure, Kali Gandaki, Nepal Activities",
    },
  },
  days: [
    {
      title: "Pokhara to Kushma and the 228 m Jump over the Kali Gandaki",
      elevation: "900 m",
      accommodation: "Kushma",
      placeDescription: "A gorge town in Parbat district with one of the world's tallest suspension footbridges.",
      ...KUSHMA,
      html: p(
        "A morning pickup from your hotel in <strong>Pokhara</strong> and around two hours west by road through Naudanda to <strong>Kushma</strong>, the district town of Parbat, on sealed road for most of the way.",
        "The <strong>Kushma-Gyadi bridge</strong> is the first thing you see and it is worth the drive on its own: one of the tallest suspension footbridges anywhere, strung across a gorge with the Kali Gandaki a thread of white far below.",
        "You are weighed, harnessed and checked by two people before walking out to the platform. The jump is a <strong>228 m free fall</strong> — roughly seven seconds of air before the cord takes.",
        "Lunch at the site afterwards, and the swing and zip line if you have added them. Back in Pokhara by late afternoon.",
      ),
    },
  ],
};

/** Cross-country paragliding: the long flight, not the twenty-minute tandem. */
export const crossCountryParagliding: Tour = {
  region: "Paragliding in Nepal",
  price: 195,
  difficulty: "moderate",
  maxAltitude: 3000,
  center: [83.95, 28.24],
  zoom: 12,
  content: {
    slug: "cross-country-paragliding-in-pokhara",
    title: "Cross Country Paragliding in Pokhara",
    overview:
      "<p><strong>Cross country paragliding</strong> is the flight for people who found the standard tandem too short. Instead of twenty to thirty minutes above Phewa Lake, you launch from <strong>Sarangkot</strong> and work the thermals north and west along the ridge line for <strong>one to three hours</strong>, climbing to as much as 3,000 m and covering thirty kilometres or more before landing wherever the day allows.</p><p>Pokhara is one of the best flying sites in the world for this — a consistent thermic cycle, a 1,000 m vertical between launch and the lake, and the Annapurna wall as a backdrop the whole way. The flight is flown by a senior tandem pilot with a cross-country rating, and where you land depends on the conditions, so a retrieve vehicle follows the flight and collects you.</p>",
    highlights: [
      ["One to Three Hours in the Air", "A proper cross-country flight rather than the standard twenty-minute tandem descent."],
      ["Thermalling to 3,000 m", "Climb well above the launch on the ridge thermals, with the Annapurnas at eye level."],
      ["Thirty Kilometres or More", "Work the ridge north and west from Sarangkot, landing wherever the day takes you."],
      ["Senior Cross-Country Pilots", "Flown by pilots with a cross-country rating rather than a standard tandem ticket."],
      ["Retrieve Vehicle Included", "A vehicle follows the flight and collects you from wherever you come down."],
    ],
    sections: [
      {
        heading: "What a Cross-Country Flight Involves",
        content:
          "<p>You launch from <strong>Sarangkot (1,592 m)</strong> in the late morning, once the thermic cycle has established. Rather than gliding straight down to the lake, your pilot works the ridge lift and the thermals to climb — typically to 2,200 m to 3,000 m — and then heads north-west along the ridge system toward Naudanda, Kande and beyond, gaining and losing height with the day.</p><p>Flight duration depends entirely on conditions: on a good autumn day two to three hours and thirty to fifty kilometres are realistic, on a flat day it may be an hour. Nobody can promise a distance. The landing site is decided in the air, and a <strong>retrieve vehicle</strong> tracks the flight and picks you up, which is why this costs several times what a standard tandem does.</p>",
      },
      {
        heading: "Who It Suits and What It Feels Like",
        content:
          "<p>You need no experience — it is a tandem flight and the pilot does everything — but you do need a <strong>reasonable tolerance for time in a harness</strong> and for the sensations of thermalling. Turning in a thermal is a sustained banked spiral, and people who are prone to motion sickness usually find twenty minutes fine and two hours much less so. If you are unsure, fly the standard tandem first and book this on another day.</p><p>It gets <strong>cold</strong> above 2,500 m even when Pokhara is warm, so gloves and a proper jacket matter. You sit in a padded harness with your legs supported, so it is more comfortable than it looks, and there is very little sense of height once you are away from the hill. The pilot will hand you the brake toggles for a while if you want to fly it yourself.</p>",
      },
      {
        heading: "Season, Weather and Cancellation",
        content:
          "<p><strong>October to April</strong> is the flying season and <strong>November to February</strong> is the best of it: stable air, reliable thermals and the clearest Annapurna views of the year. Cross-country flights need more from the weather than a standard tandem does — the day must have working thermals and a usable wind direction, and a marginal day gives a short flight rather than a long one.</p><p>Flights are cancelled for rain, high wind or poor visibility, and that decision belongs to the pilot. If we cancel, you can rebook for another day at no charge or take a full refund. If conditions collapse after launch and the flight is short, we will normally offer a discounted second flight rather than a refund — that is the honest position and we would rather say so at booking than argue about it afterwards.</p>",
      },
      {
        heading: "Restrictions and What to Bring",
        content:
          "<p>Minimum age <strong>16</strong> for a cross-country flight, minimum weight <strong>35 kg</strong>, maximum <strong>95 kg</strong>. You cannot fly with a heart condition, uncontrolled epilepsy, a recent fracture or if you are pregnant. You need to be able to run a few steps at launch and, at landing, to stand up — declare any mobility issue at booking and we will match you with a pilot who can plan for it.</p><p>Bring <strong>warm layers</strong>, gloves, closed shoes with ankle support (no sandals or flip-flops), sunglasses and sunscreen. Do not bring a loose hat. Phones are permitted only on a secure lanyard, and the pilot will usually offer to hold and film with a mounted camera instead — the footage is bought separately at the landing site.</p>",
      },
    ],
    faqs: [
      { question: "How long will I actually be in the air?", answer: "Between one and three hours depending on the day. On a good autumn thermic day two to three hours and thirty to fifty kilometres are realistic; on a flat day it may be an hour. No pilot can promise a duration, because it depends entirely on the air, and anyone who does promise one is selling you something else." },
      { question: "How is this different from the standard tandem flight?", answer: "The standard tandem launches from Sarangkot and glides down to the lakeshore in twenty to thirty minutes. This flight climbs instead of descending, works the thermals along the ridge system and travels distance, so it lasts three to six times as long and finishes wherever the air takes you rather than at a fixed landing field." },
      { question: "Do I need any experience?", answer: "None. It is a tandem flight and the pilot flies it. What you need is a tolerance for sustained banked turns — thermalling is a spiral, repeated for hours — so anyone strongly prone to motion sickness should try the standard tandem first. The pilot will hand you the toggles for a while if you would like to steer." },
      { question: "What happens if the weather is not suitable?", answer: "The pilot cancels, and that call is theirs. You rebook for another day at no charge or take a full refund. Cross-country needs more from the weather than a standard flight, so cancellations are more common — build a spare day into your Pokhara stay if this is the flight you really want." },
      { question: "Where will I land?", answer: "Wherever the flight ends, which is decided in the air. It might be Naudanda, Kande, the Pokhara valley floor or a field somewhere along the ridge. A retrieve vehicle tracks the flight by radio and collects you, which is included in the price and is the main reason it costs more than a standard tandem." },
      { question: "How cold does it get?", answer: "Cold. At 2,500 m to 3,000 m in winter it can be near freezing while Pokhara is 20°C, and you are sitting still in moving air for hours. Gloves, a proper jacket and long trousers make the difference between a superb flight and a long uncomfortable one. Nobody regrets over-dressing for this." },
      { question: "Is there a weight limit?", answer: "Minimum 35 kg and maximum 95 kg, and the pilot may adjust in either direction depending on the wing and the conditions on the day. If you are near the upper limit, tell us at booking so we can assign the right pilot and wing rather than turning you away at launch." },
      { question: "Can I take photos?", answer: "Phones are allowed on a secure lanyard only, and honestly you will get better results from the pilot's mounted camera, which is sold at the landing site. Anything dropped from a paraglider is gone and can be dangerous to people below, so the pilots are strict about it." },
    ],
    inclusions: {
      transport: [
        "Hotel pickup in Pokhara, transfer up to the Sarangkot launch, and the retrieve vehicle from wherever you land.",
      ],
      guide: "A senior tandem pilot with a cross-country rating, flying a current certified wing.",
      entrance: "Sarangkot launch site fee and paragliding association registration.",
      extra: [
        "All flight equipment: wing, tandem harness, helmet, reserve parachute and radio.",
        "Bottled water and a light snack at the launch.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "All meals.",
      extra: ["Photo and video package shot by the pilot's mounted camera.", "Insurance for adventure activity."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "A single flight of one to three hours, launching from Sarangkot and working the ridge thermals north-west, with a retrieve vehicle from the landing site.",
    inExDescription:
      "Hotel pickup, transfer to launch, all flight equipment, a cross-country rated pilot, the launch site fee, the retrieve vehicle and government taxes are included, while meals, the photo and video package and personal insurance are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Cross Country Paragliding in Pokhara – 1 to 3 Hours",
      description:
        "A cross-country tandem paraglide from Sarangkot, thermalling to 3,000 m and covering thirty kilometres or more, with a retrieve vehicle included.",
      keywords:
        "cross country paragliding Pokhara, long paragliding flight Nepal, thermal paragliding Pokhara, Sarangkot paragliding, tandem paragliding Nepal, XC paragliding Nepal",
      tags: "Cross Country Paragliding in Pokhara, Paragliding in Nepal, Sarangkot, Adventure, Nepal Activities",
    },
  },
  days: [
    {
      title: "Cross Country Flight from Sarangkot (1,592 m)",
      elevation: "3,000 m",
      accommodation: "Sarangkot",
      placeDescription: "The launch ridge above Phewa Lake, one of the best paragliding sites in the world.",
      ...SARANGKOT,
      html: p(
        "A late-morning pickup from your hotel in <strong>Pokhara</strong> — cross-country flying waits for the thermals to establish, so this is not an early start — and a half-hour drive up to the <strong>Sarangkot</strong> launch at 1,592 m.",
        "Your pilot fits the harness and helmet, runs the briefing and watches the cycle. Launch is a few running steps off the ridge.",
        "Rather than gliding down, the flight climbs: your pilot works the ridge lift and thermals to <strong>2,200 m to 3,000 m</strong>, then heads north-west along the ridge system toward Naudanda and Kande, gaining and losing height with the day. One to three hours in the air and thirty kilometres or more on a good day.",
        "The retrieve vehicle tracks the flight by radio and collects you from wherever you land. Back in Pokhara in the afternoon.",
      ),
    },
  ],
};

/** Parahawking: flying with trained raptors, which exists nowhere else. */
export const parahawking: Tour = {
  region: "Paragliding in Nepal",
  price: 245,
  difficulty: "easy",
  maxAltitude: 2000,
  center: [83.95, 28.23],
  zoom: 12,
  content: {
    slug: "parahawking-in-pokhara",
    title: "Parahawking in Pokhara",
    overview:
      "<p><strong>Parahawking</strong> is a tandem paraglide flown alongside a trained bird of prey, and Pokhara is where it was invented and effectively the only place in the world it is offered. An Egyptian vulture or black kite launches with you, finds the thermals faster than any instrument can, and leads the wing into the lift — then comes to your gloved hand in mid-air for a scrap of meat before peeling off to find the next climb.</p><p>It began as a conservation project. Nepal's vulture population collapsed by more than ninety-nine per cent after the veterinary drug diclofenac entered the food chain, and parahawking was set up to fund vulture conservation and to change how people see a bird most of the region regards as vermin. A share of every flight goes to that work, and the birds are all rescues that could not be returned to the wild.</p>",
    highlights: [
      ["Fly with a Trained Raptor", "A vulture or kite launches with you, guides the wing into thermals and lands on your gloved hand in flight."],
      ["It Exists Nowhere Else", "Parahawking was invented in Pokhara and is not offered commercially anywhere else in the world."],
      ["A Conservation Project", "A share of every flight funds vulture conservation after Nepal's ninety-nine per cent population collapse."],
      ["The Birds Are Rescues", "Every bird flown was rescued and could not be released, and none is bred for the activity."],
      ["Thirty to Forty-Five Minutes", "Longer than a standard tandem, above Phewa Lake with the Annapurnas behind."],
    ],
    sections: [
      {
        heading: "How the Flight Works",
        content:
          "<p>You launch from <strong>Sarangkot</strong> on a standard tandem wing with your pilot. The bird launches separately from the same ridge and joins you in the air. Because raptors read thermals far better than any human or variometer, the bird finds the lift first and the pilot follows it — which is the practical point of the exercise as well as the spectacle.</p><p>At intervals your pilot will ask you to hold out a <strong>gloved hand with a small piece of buffalo meat</strong>. The bird comes in, lands on the glove, takes the food and drops away again. It happens several times in a flight. The wingspan of an Egyptian vulture at arm's length, in the air, at 1,800 m, is not something most people forget.</p>",
      },
      {
        heading: "The Conservation Story",
        content:
          "<p>South Asia's vulture populations collapsed catastrophically from the 1990s onward — by more than <strong>ninety-nine per cent</strong> in some species — after the anti-inflammatory <strong>diclofenac</strong>, given to cattle, proved fatal to birds that fed on the carcasses. Nepal banned the veterinary use of the drug in 2006 and has since built a network of 'vulture safe zones' and community feeding sites.</p><p>Parahawking was created partly to fund that work and partly to change public attitude: a bird people regard as filthy becomes something else entirely when it lands on your hand at altitude. A defined share of every flight goes to vulture conservation, and the operator works with the local breeding and release programme. The birds flown are <strong>rescues</strong> — injured or imprinted animals that could not survive release.</p>",
      },
      {
        heading: "Season, Conditions and Cancellation",
        content:
          "<p><strong>November to March</strong> is the parahawking season, which is shorter than the general paragliding season. The birds fly in stable winter air and are rested outside it, so this is not available year-round and books out well in advance — if you want it, reserve early rather than hoping to arrange it on arrival in Pokhara.</p><p>Flights are cancelled for rain, high wind or poor visibility, and also on any day the handler judges the birds should not fly, which is not negotiable. If we cancel you can rebook or take a full refund. Because the season is short and the daily capacity is small, a cancelled slot may not be re-flyable within your stay, so build in flexibility.</p>",
      },
      {
        heading: "Restrictions and What to Bring",
        content:
          "<p>Minimum age <strong>16</strong>, minimum weight <strong>35 kg</strong>, maximum <strong>95 kg</strong>. You cannot fly with a heart condition, uncontrolled epilepsy, a recent fracture or if you are pregnant. You need to be able to run a few steps at launch and stand at landing.</p><p>Bring <strong>warm layers</strong> — winter mornings at 1,800 m are cold — closed shoes with ankle support, sunglasses and sunscreen. The glove is provided. Do not wear anything loose or flapping and do not bring a hat that can come off. Follow the handler's instructions about the bird exactly and without improvising: these are wild animals doing something they have been trained to do, not pets.</p>",
      },
    ],
    faqs: [
      { question: "Is parahawking safe for the bird?", answer: "The birds are rescues that could not be released, they are flown by experienced falconers, and they fly voluntarily — a raptor that does not want to fly does not fly, and the day is called off. The handler has absolute authority over whether a bird goes up, and that is not something the operator will trade for a booking." },
      { question: "Which birds do you fly?", answer: "Egyptian vultures and black kites, depending on the day and the bird. Both are native, both are thermal specialists, and both were rescued as injured or imprinted animals unable to survive in the wild. None is taken from the wild for the activity or bred for it." },
      { question: "When is parahawking available?", answer: "November to March only. The birds fly in stable winter air and rest for the remainder of the year, so the season is much shorter than the general paragliding season and daily capacity is small. Book well in advance rather than hoping to arrange it once you are in Pokhara." },
      { question: "How long is the flight?", answer: "Thirty to forty-five minutes, which is longer than a standard tandem. The duration depends on the thermals, which is rather the point — the bird finds the lift and the pilot follows it, so a good day means a longer flight rather than a faster descent." },
      { question: "Do I need paragliding experience?", answer: "None. It is a tandem flight and the pilot does the flying. Your job is to run a few steps at launch, sit in the harness, and hold out the gloved hand when the pilot tells you to. The one thing that matters is following the handler's instructions about the bird exactly." },
      { question: "How much of the price goes to conservation?", answer: "A defined share of every flight goes to vulture conservation work, and the operator publishes what it funds — community feeding sites, the breeding and release programme, and awareness work on diclofenac. Ask at the briefing; the pilots are generally keen to talk about it at length." },
      { question: "What if I am nervous around large birds?", answer: "Tell the pilot at the briefing. The feeding can be reduced or dropped entirely and you can simply fly alongside the bird, which is still remarkable. Nobody is required to hold out a hand. An Egyptian vulture is around a two-metre wingspan and lands very lightly, which surprises most people." },
      { question: "Can I combine it with a cross-country flight?", answer: "Not in the same flight — parahawking is flown on a specific profile with the bird, and cross-country goes distance. Many people book both on separate days in the same Pokhara stay, and that is the sensible way to do it. Tell us at booking and we will sequence them." },
    ],
    inclusions: {
      transport: ["Hotel pickup in Pokhara, transfer up to the Sarangkot launch and return from the landing site."],
      guide: "A tandem pilot trained in parahawking, working with a qualified falconer and the bird's handler.",
      entrance: "Sarangkot launch site fee and paragliding association registration.",
      extra: [
        "All flight equipment: wing, tandem harness, helmet, reserve parachute and radio.",
        "Falconry glove and the bird's food for the in-flight feeds.",
        "A contribution from every flight to vulture conservation in Nepal.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "All meals.",
      extra: ["Photo and video package shot by the pilot's mounted camera.", "Insurance for adventure activity."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "tuesday",
    itineraryDescription:
      "A single tandem flight of thirty to forty-five minutes from Sarangkot, flown alongside a trained vulture or kite that guides the wing into the thermals.",
    inExDescription:
      "Hotel pickup, transfer to launch, all flight equipment, a parahawking-trained pilot and the bird's handler, the falconry glove, the launch fee, a conservation contribution and government taxes are included, while meals, the photo and video package and personal insurance are excluded.",
    bestTime: "Nov-Mar",
    meta: {
      title: "Parahawking in Pokhara – Paraglide with a Trained Vulture",
      description:
        "A tandem paraglide from Sarangkot flown with a trained Egyptian vulture or black kite that finds the thermals and lands on your gloved hand in flight.",
      keywords:
        "parahawking Pokhara, paragliding with vultures Nepal, parahawking Nepal, fly with birds Pokhara, Sarangkot parahawking, vulture conservation Nepal",
      tags: "Parahawking in Pokhara, Paragliding in Nepal, Sarangkot, Conservation, Nepal Activities",
    },
  },
  days: [
    {
      title: "Parahawking Flight from Sarangkot (1,592 m)",
      elevation: "2,000 m",
      accommodation: "Sarangkot",
      placeDescription: "The launch ridge above Phewa Lake, where parahawking was invented.",
      ...SARANGKOT,
      html: p(
        "A morning pickup from your hotel in <strong>Pokhara</strong> and a half-hour drive up to the <strong>Sarangkot</strong> launch, where you meet the pilot, the falconer and the bird.",
        "The briefing covers the flight and, separately and more carefully, the bird: how to hold the glove, when to offer the food, and what not to do.",
        "Launch is a few running steps off the ridge. The bird joins you in the air and starts finding the lift, and your pilot follows it — which is faster and more accurate than any instrument.",
        "Several times during the flight you hold out the gloved hand and an <strong>Egyptian vulture</strong> or <strong>black kite</strong> lands on it in mid-air, takes the meat and drops away.",
        "Thirty to forty-five minutes above Phewa Lake, landing by the lakeshore. Back at your hotel late morning.",
      ),
    },
  ],
};

/** Kushma zip line: 1.8 km across the Kali Gandaki gorge. */
export const kushmaZipFlyer: Tour = {
  region: "Zip Flyer in Nepal",
  price: 95,
  difficulty: "easy",
  maxAltitude: 900,
  center: [83.69, 28.23],
  zoom: 12,
  content: {
    slug: "zip-flyer-in-kushma",
    title: "Zip Flyer in Kushma",
    overview:
      "<p>The <strong>Kushma zip flyer</strong> runs around <strong>1.8 kilometres</strong> of cable across the Kali Gandaki gorge in Parbat district, with a vertical drop of some 350 m and speeds well over <strong>100 kph</strong>. It is among the longest zip lines in Nepal and it crosses one of the deepest river gorges in the country, which is what separates it from a forest canopy ride.</p><p>You ride in a seated harness rather than lying prone, facing down the gorge with the river a long way below and the Kushma-Gyadi suspension bridge — one of the tallest footbridges in the world — strung across the same canyon beside you. The run takes around ninety seconds. It is two hours from Pokhara and shares the site with the 228 m bungee and swing, so it works as a stand-alone day or as the mildest third of a combination.</p>",
    highlights: [
      ["1.8 km of Cable", "Among the longest zip lines in Nepal, crossing one of its deepest river gorges."],
      ["Over 100 kph", "A 350 m vertical drop and roughly ninety seconds of flight, in a seated harness."],
      ["The Kali Gandaki Gorge", "The river a long way below and the Kushma-Gyadi bridge alongside you."],
      ["Two Hours from Pokhara", "A comfortable day trip from the lake, on sealed road most of the way."],
      ["The Mild One at a Wild Site", "Shares the gorge with the 228 m bungee and swing, and is by far the gentlest of the three."],
    ],
    sections: [
      {
        heading: "The Ride",
        content:
          "<p>The launch tower stands on one wall of the <strong>Kali Gandaki gorge</strong> and the cable runs roughly 1.8 km to a braked arrival platform on the far side and well below, a vertical difference of around 350 m. You are clipped into a <strong>seated harness</strong> — feet forward, upright, facing down the line — rather than lying prone in a full-body rig.</p><p>Speeds exceed 100 kph in the middle of the run and the whole thing takes about ninety seconds, which is a good deal longer than it sounds when you are doing it. Braking is automatic and progressive at the far end; there is nothing for you to operate. Staff clip you in, check the harness twice and dispatch, and a second team receives you at the bottom and drives you back up.</p>",
      },
      {
        heading: "Safety and How It Is Run",
        content:
          "<p>The line uses a twin-cable system with a redundant trolley attachment, so a single point of failure does not release the rider. Harnesses are checked by two people before dispatch, the braking system is mechanical and self-arresting, and the cables and trolleys are inspected on a documented schedule rather than by eye.</p><p>There is a radio link between the launch and arrival platforms and a rescue trolley that can retrieve a stalled rider from the middle of the span — an event that is rare but planned for, which is the mark of a site being run properly. Staff will refuse to dispatch anyone who is intoxicated or who will not follow the harness instructions, and they are right to.</p>",
      },
      {
        heading: "Restrictions and Who Can Ride",
        content:
          "<p>Minimum age <strong>10</strong> with a guardian present, minimum weight <strong>35 kg</strong>, maximum <strong>125 kg</strong>. The weight range is wider than the bungee's because the load path is entirely different, which makes the zip line the option for anyone who cannot jump.</p><p>You <strong>cannot ride</strong> with a serious heart condition, a recent spinal injury, a dislocated shoulder that has not fully recovered, or if you are pregnant. Beyond that it is far more forgiving than the bungee: there is no jumping, no free fall and no need to commit to anything at the edge — you sit down, get clipped in and are dispatched. It suits families and nervous first-timers considerably better than anything else at this site.</p>",
      },
      {
        heading: "Getting There and What to Bring",
        content:
          "<p>Around two to two and a half hours west of <strong>Pokhara</strong> by road through Naudanda and Kusma bazaar, sealed for most of the way. Transport both ways is included and the day runs roughly 7 am to 5 pm, with lunch at the site. From Kathmandu this is a very long day and we would sequence it with a Pokhara stay instead.</p><p>Bring comfortable clothes, <strong>closed shoes</strong>, and tie back long hair. Sunglasses need a retainer. Leave phones, loose hats and anything in an open pocket with the ground crew — the gorge below the cable is several hundred metres deep. There is a fixed camera on the line and the footage is sold at the arrival platform.</p>",
      },
    ],
    faqs: [
      { question: "How fast does it actually go?", answer: "Over 100 kph through the middle of the run, with the top speed depending on rider weight and the wind. The whole ride lasts around ninety seconds over roughly 1.8 km of cable and a 350 m vertical drop. Heavier riders go faster; the braking system handles the difference automatically." },
      { question: "How does it compare with the Pokhara zip flyer?", answer: "Longer and over far more dramatic ground. The Pokhara Zip Flyer at Sarangkot is steeper and prone-position; Kushma is longer, seated, and crosses the Kali Gandaki gorge rather than a hillside. If you have done Pokhara and want something different, this is a genuinely different experience rather than a repeat." },
      { question: "Is it suitable for children?", answer: "From age 10 with a guardian present and a minimum weight of 35 kg. It is much the gentlest activity at this site — no jumping and no free fall, just sitting in a harness — and it works well for families where the adults want the bungee and the children do not." },
      { question: "Can I do it with the bungee and the swing?", answer: "Yes. All three operate from the same gorge within a few minutes of each other and a combination ticket is available; tell us at booking and we will price it. Most people do the zip line last, on the grounds that it is the one you can still enjoy after the other two." },
      { question: "What is the weight limit?", answer: "Minimum 35 kg and maximum 125 kg. That upper limit is higher than the bungee's 110 kg because the load path is different, which makes the zip line the option for anyone outside the jump range. You are weighed at the site." },
      { question: "What happens if I stop in the middle?", answer: "It is rare, because the line is designed with enough gradient to carry any rider within the weight range across, but the site keeps a rescue trolley and a two-way radio link between platforms for exactly that. A staff member goes out and brings you in. It is inconvenient rather than dangerous." },
      { question: "Is there a photo or video?", answer: "Yes, from a fixed camera on the line and a handheld at the launch, sold at the arrival platform afterwards. It is not in the price. Your own phone or camera cannot go on the ride unless it is on a secure lanyard, and the staff will check." },
      { question: "What is the best time of year?", answer: "September to June. The gorge is at its clearest from October to December, with long views up the Kali Gandaki toward the Annapurna and Dhaulagiri massifs. The site closes in heavy rain and high wind, and the monsoon from July to August makes the road unreliable." },
    ],
    inclusions: {
      transport: ["Private vehicle from Pokhara to Kushma and back, with hotel pickup and drop-off."],
      meals: ["Lunch at the site."],
      guide: "Trained launch and arrival crew, with a safety briefing before dispatch.",
      entrance: "One zip line ride including harness, helmet, safety briefing and the return transfer up from the arrival platform.",
      extra: ["Bottled water in the vehicle."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast and dinner, and any meals not specified.",
      extra: ["Photo and video package.", "The Kushma bungee and swing, available as add-ons.", "Additional rides beyond the one included."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "wednesday",
    itineraryDescription:
      "A single day from Pokhara to Kushma for a 1.8 km zip line ride across the Kali Gandaki gorge at over 100 kph.",
    inExDescription:
      "Return road transport from Pokhara, one zip line ride with all equipment and the safety briefing, the return transfer from the arrival platform, lunch at the site and government taxes are included, while the bungee and swing, the photo and video package, other meals and personal expenses are excluded.",
    bestTime: "Sep-Jun",
    meta: {
      title: "Zip Flyer in Kushma – 1.8 km across the Kali Gandaki Gorge",
      description:
        "A 1.8 km zip line across the Kali Gandaki gorge at Kushma, with a 350 m drop and speeds over 100 kph, two hours from Pokhara.",
      keywords:
        "Kushma zipline, zip flyer Nepal, longest zipline Nepal, Kali Gandaki zipline, zipline Pokhara, Kushma adventure, zip line Nepal price",
      tags: "Zip Flyer in Kushma, Zip Flyer in Nepal, Adventure, Kali Gandaki, Nepal Activities",
    },
  },
  days: [
    {
      title: "Pokhara to Kushma and the Gorge Zip Line",
      elevation: "900 m",
      accommodation: "Kushma",
      placeDescription: "A gorge town in Parbat district, with a 1.8 km zip line strung across the Kali Gandaki.",
      ...KUSHMA,
      html: p(
        "A morning pickup from your hotel in <strong>Pokhara</strong> and around two hours west by road through Naudanda to <strong>Kushma</strong> in Parbat district.",
        "At the site you are weighed and harnessed, and the crew runs the briefing before walking you out to the launch tower on the gorge wall.",
        "The ride is about <strong>1.8 km</strong> of cable across the <strong>Kali Gandaki gorge</strong>, dropping some 350 m and reaching over 100 kph in the middle of the run — roughly ninety seconds, seated and facing down the line, with the river far below and the Kushma-Gyadi bridge alongside.",
        "Braking is automatic at the arrival platform and a vehicle brings you back up. Lunch at the site, then back to Pokhara by late afternoon.",
      ),
    },
  ],
};

/** The mountain flight nobody sells: the Annapurna one, out of Pokhara. */
export const mountainFlightPokhara: Tour = {
  region: "Mountain Flight in Nepal",
  price: 235,
  difficulty: "easy",
  maxAltitude: 5500,
  center: [83.9, 28.5],
  zoom: 9,
  content: {
    slug: "mountain-flight-from-pokhara",
    title: "Mountain Flight from Pokhara",
    overview:
      "<p>The <strong>mountain flight from Pokhara</strong> is a fifty-minute fixed-wing scenic flight along the Annapurna and Dhaulagiri wall, and it is the one people miss because the famous mountain flight leaves from Kathmandu and goes to Everest. This one is arguably better: Pokhara sits closer to the mountains than any other airport in Nepal, so the aircraft is among the peaks within ten minutes of take-off rather than forty.</p><p>The route runs west along the range and back — <strong>Machhapuchhre (6,993 m)</strong>, <strong>Annapurna South</strong>, <strong>Annapurna I (8,091 m)</strong>, Nilgiri, <strong>Dhaulagiri (8,167 m)</strong> — with the Kali Gandaki gorge, the Annapurna Sanctuary and the Mustang plateau opening below. Everyone gets a window seat, the aircraft is single-aisle with one seat either side, and the pilot flies a there-and-back leg so both sides see everything.</p>",
    highlights: [
      ["Two 8,000 m Peaks in Fifty Minutes", "Annapurna I and Dhaulagiri, plus Machhapuchhre from closer than any trek gets you."],
      ["A Guaranteed Window Seat", "Single seats either side of the aisle, and the aircraft flies out and back so both sides see the range."],
      ["Ten Minutes to the Mountains", "Pokhara is the closest airport in Nepal to an 8,000 m peak — no long transit over foothills."],
      ["Into the Annapurna Sanctuary", "The flight looks straight into the sanctuary and down the deepest gorge on earth."],
      ["No Altitude, No Fitness Needed", "The whole Himalaya without a step of walking, suitable at any age."],
    ],
    sections: [
      {
        heading: "The Route and What You See",
        content:
          "<p>The aircraft lifts out of Pokhara and turns north-west, and within ten minutes <strong>Machhapuchhre (6,993 m)</strong> is off the right wing — the sacred fishtail summit that nobody is permitted to climb. The route continues along the wall past <strong>Annapurna South</strong>, <strong>Hiunchuli</strong> and the entrance to the <strong>Annapurna Sanctuary</strong>, then <strong>Annapurna I (8,091 m)</strong>, the first 8,000 m peak ever climbed.</p><p>Further west the aircraft crosses the <strong>Kali Gandaki gorge</strong> — the deepest on earth, with Annapurna on one side and Dhaulagiri on the other — with the Mustang plateau and the Tibetan border country visible beyond. <strong>Dhaulagiri (8,167 m)</strong> is the turning point. The return leg flies the same range from the other side, which is why every seat sees everything.</p>",
      },
      {
        heading: "How It Compares with the Everest Flight",
        content:
          "<p>The Kathmandu mountain flight is the famous one and it delivers Everest, but the aircraft spends much of the hour transiting over foothills to reach the range and Everest itself is a distant summit among many. From <strong>Pokhara you are in the mountains almost immediately</strong> and considerably closer to them — Annapurna I and Machhapuchhre fill the window rather than sitting on the horizon.</p><p>Which is better depends on what you want. If the point is to have seen Everest, take the Kathmandu flight, which we also sell. If the point is the most spectacular fifty minutes of mountain scenery available from an aircraft in Nepal, this is it. People who take both generally say Pokhara is the better flight and Kathmandu is the better story.</p>",
      },
      {
        heading: "Season, Timing and Cancellation",
        content:
          "<p>Flights operate <strong>early morning</strong>, generally between 6.30 and 8 am, because the air is clearest and most stable then and the light on the peaks is at its best. <strong>October to March</strong> is the season, with November to February the most reliable; visibility drops through the pre-monsoon dust of April and May.</p><p>The flight is entirely weather-dependent and cancellations happen. If the flight is cancelled by weather or by the airline you receive a <strong>full refund</strong> or a seat on the next available departure, your choice. We recommend booking it for the first clear morning of your Pokhara stay rather than the last, so there is room to rebook. We do not operate during the monsoon from June to September.</p>",
      },
      {
        heading: "Practicalities",
        content:
          "<p>The aircraft is a small pressurised turboprop with <strong>single seats on both sides of the aisle</strong>, so there is no middle seat and nobody is looking past anyone. Cabin crew rotate passengers to the flight deck for a look forward, and a route map is handed out so you can identify what you are seeing.</p><p>Bring a <strong>camera with a polarising filter</strong> if you have one — the window glass and the haze both reduce contrast — and shoot with the lens close to the glass to avoid reflections. Dress normally; the cabin is heated. Pickup is around 5.45 am from your hotel and you are back by about 9 am, so it takes only the start of a day. Airport tax and transfers are included.</p>",
      },
    ],
    faqs: [
      { question: "Does everyone get a window seat?", answer: "Yes. The aircraft is configured with single seats either side of the aisle, so there is no middle seat, and the flight runs out along the range and back the same way, which means both sides see the whole route. Nobody is stuck on the wrong side." },
      { question: "How does this compare with the Everest mountain flight?", answer: "Pokhara is much closer to the mountains, so you are among them within ten minutes rather than forty and the peaks fill the window rather than sitting on the horizon. What it does not give you is Everest. Take the Kathmandu flight for Everest and this one for the better scenery." },
      { question: "What happens if it is cancelled?", answer: "You get a full refund or a seat on the next available flight, your choice. Cancellations are entirely weather-driven and are more common than people expect, which is why we recommend booking the flight for early in your Pokhara stay rather than the morning before you leave." },
      { question: "What time does it depart?", answer: "Early — hotel pickup around 5.45 am for a departure between 6.30 and 8 am. The air is clearest and most stable at dawn and the light on the peaks is best then. You are back at your hotel by around 9 am, so it costs you nothing more than a lie-in." },
      { question: "Is it suitable for children or older travellers?", answer: "Yes, for both. There is no altitude exposure — the cabin is pressurised — no walking and no fitness requirement, which makes it the one way to see the high Himalaya properly for anyone who cannot trek. Infants and elderly passengers fly on these routes routinely." },
      { question: "Which peaks will I actually see?", answer: "Machhapuchhre, Annapurna South, Hiunchuli, Annapurna I, Annapurna III, Nilgiri, Tukuche Peak and Dhaulagiri, plus the Annapurna Sanctuary, the Kali Gandaki gorge and the Mustang plateau. A route map is handed out on board and the crew will point out what is what." },
      { question: "Can I take photographs?", answer: "Yes, and everyone does. Shoot with the lens close to the glass to kill reflections, and a polarising filter helps with the haze. Passengers are rotated up to the flight deck for a forward view during the flight, which is where the best photographs generally come from." },
      { question: "Is airport tax included?", answer: "Yes — domestic airport tax, hotel transfers both ways and the seat itself are all in the price. The only thing you might spend money on is a coffee at the terminal while waiting for the light, which at that hour is usually welcome." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["A fifty-minute scenic mountain flight from Pokhara along the Annapurna and Dhaulagiri range."],
      transport: ["Hotel pickup and drop-off in Pokhara for the early-morning departure."],
      guide: "Cabin crew commentary, a printed route map and rotation to the flight deck for a forward view.",
      extra: ["Domestic airport tax.", "Guaranteed window seat with no middle seats on the aircraft."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast, which is taken after the flight.",
      extra: ["Any cost arising from a weather postponement beyond the refund or rebooking offered."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "A fifty-minute dawn flight from Pokhara along the Annapurna and Dhaulagiri wall, with a guaranteed window seat and a return leg so both sides see the range.",
    inExDescription:
      "Hotel transfers, the scenic flight, a guaranteed window seat, domestic airport tax and government taxes are included, while breakfast, personal expenses and any cost of a weather postponement beyond a refund or rebooking are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Mountain Flight from Pokhara – Annapurna and Dhaulagiri",
      description:
        "A fifty-minute dawn mountain flight from Pokhara past Machhapuchhre, Annapurna I and Dhaulagiri, with a guaranteed window seat for every passenger.",
      keywords:
        "mountain flight Pokhara, Annapurna mountain flight, scenic flight Pokhara, Dhaulagiri flight, Pokhara sightseeing flight, mountain flight Nepal price",
      tags: "Mountain Flight from Pokhara, Mountain Flight in Nepal, Annapurna, Scenic Flight, Nepal Activities",
    },
  },
  days: [
    {
      title: "Dawn Mountain Flight along the Annapurna and Dhaulagiri Range",
      elevation: "5,500 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A 5.45 am pickup from your hotel for the short transfer to <strong>Pokhara airport</strong>, and a departure between 6.30 and 8 am depending on the light and the queue.",
        "The aircraft turns north-west out of the valley and within ten minutes <strong>Machhapuchhre (6,993 m)</strong> is off the wing, closer than any trek gets you.",
        "The route runs along the wall past <strong>Annapurna South</strong>, <strong>Hiunchuli</strong> and the mouth of the <strong>Annapurna Sanctuary</strong>, then <strong>Annapurna I (8,091 m)</strong>, across the <strong>Kali Gandaki gorge</strong> with Mustang beyond, to <strong>Dhaulagiri (8,167 m)</strong> and back.",
        "Every seat is a window seat and the return leg flies the range from the other side. Back at your hotel by around 9 am.",
      ),
    },
  ],
};

/** A Pokhara heli sightseeing loop: the short scenic charter, not a base camp landing. */
export const pokharaHeliSightseeing: Tour = {
  region: "Heli Tour in Nepal",
  price: 480,
  difficulty: "easy",
  maxAltitude: 3800,
  center: [83.92, 28.34],
  zoom: 10,
  content: {
    slug: "pokhara-helicopter-sightseeing-tour",
    title: "Pokhara Helicopter Sightseeing Tour",
    overview:
      "<p>The <strong>Pokhara helicopter sightseeing tour</strong> is a one-hour scenic charter over the Annapurna foothills with a landing at a high viewpoint — the short, affordable helicopter option for people who do not want to commit to the full Annapurna Base Camp flight. It lifts from Pokhara, climbs over Sarangkot and Phewa Lake, and flies north into the Seti and Modi valleys with the range filling the windscreen.</p><p>The aircraft <strong>lands for fifteen to twenty minutes</strong> on a ridge or high pasture at around 3,500 m to 3,800 m — the exact site depends on conditions and the pilot's judgement — which is long enough to stand on a Himalayan hillside, take photographs with the rotor stopped and drink a cup of tea in absolute silence. Then back down the valley to Pokhara. The whole thing takes a morning.</p>",
    highlights: [
      ["One Hour of Flying, One Landing", "A scenic loop over the Annapurna foothills with fifteen to twenty minutes on the ground at altitude."],
      ["Machhapuchhre at Close Range", "The fishtail summit from a few kilometres away, which no road or trail gets you."],
      ["Phewa Lake and Sarangkot from Above", "The whole Pokhara valley laid out in the first three minutes of the flight."],
      ["No Trekking, No Acclimatisation", "3,800 m and back within a morning, suitable for any age or fitness."],
      ["Five Seats, Shared or Private", "Fly on a shared charter or take the whole aircraft and set your own departure time."],
    ],
    sections: [
      {
        heading: "The Route and the Landing",
        content:
          "<p>The aircraft lifts from Pokhara and climbs immediately over <strong>Phewa Lake</strong> and the <strong>Sarangkot</strong> ridge, with the whole valley below and the paragliders launching beneath you if the timing is right. It then flies north into the Seti and Modi valleys, following the terraced hillsides up toward the range.</p><p>Within fifteen minutes <strong>Machhapuchhre (6,993 m)</strong>, <strong>Annapurna South</strong> and <strong>Hiunchuli</strong> fill the windscreen. The pilot picks a landing site on a ridge or high pasture at around <strong>3,500 m to 3,800 m</strong> — the exact spot depends on wind, cloud and ground conditions on the day — and shuts down for fifteen to twenty minutes. The return follows the valley back down, so the views change rather than repeat.</p>",
      },
      {
        heading: "How It Compares with the Base Camp Flight",
        content:
          "<p>The <strong>Annapurna Base Camp helicopter tour</strong>, which we also sell, lands inside the sanctuary at 4,130 m and takes most of a morning at roughly double the price. It is the better flight if the sanctuary is what you came for. This tour is shorter, cheaper and lands lower, and it is the right choice for a first helicopter experience, for travellers with limited time, or for anyone unsure how they will react to altitude.</p><p>The mountain views from both are excellent; the difference is that base camp puts you <em>inside</em> the amphitheatre with the wall all around, while this flight looks at the range from the foothills. If the budget allows only one and the mountains are the point, take the base camp flight. If you want a helicopter, a landing and a morning rather than a production, take this one.</p>",
      },
      {
        heading: "Weight, Weather and Cancellation",
        content:
          "<p>Helicopters are weight-critical at altitude. The aircraft carries <strong>five passengers</strong> and the operator works to a total payload, so we ask for accurate weights at booking rather than estimates — an over-loaded aircraft simply does not go, and rearranging at the helipad wastes everyone's morning. If your party is heavy, a private charter solves it.</p><p>Flights are <strong>entirely weather-dependent</strong> and go in the morning, before the valley cloud builds. Cancellation for weather means a full refund or a seat on the next available flight, your choice. The landing site is at the pilot's discretion and may change or be dropped altogether if the ground or the wind is unsuitable; the flight still operates in that case, and that is a normal part of mountain flying rather than a shortfall.</p>",
      },
      {
        heading: "Practicalities and What to Bring",
        content:
          "<p>Pickup from your Pokhara hotel is around 6.30 to 7 am, and you are back by mid-morning. The briefing at the helipad covers boarding, seatbelts, headsets and the one rule that matters — never approach or leave the aircraft from uphill or toward the tail.</p><p>Bring a <strong>warm jacket</strong>: it is 20°C in Pokhara and can be near freezing at the landing site, with wind. Sunglasses and sunscreen matter at 3,800 m. Wear closed shoes for standing on rough ground. Cameras are fine and there is no restriction on filming; shoot through the open window if the pilot allows it rather than through the perspex. Leave loose hats and scarves in the vehicle.</p>",
      },
    ],
    faqs: [
      { question: "How long is the flight?", answer: "Around one hour of flying in total, plus fifteen to twenty minutes shut down at the landing site. Door to door from your Pokhara hotel it takes about three hours including the briefing and transfers, so it costs you a morning rather than a day." },
      { question: "Where exactly does it land?", answer: "On a ridge or high pasture at around 3,500 m to 3,800 m in the Annapurna foothills. The precise site is the pilot's choice on the day and depends on wind, cloud and ground condition. If nowhere is suitable, the flight operates without the landing — which is normal mountain flying, not a shortfall." },
      { question: "How does it compare with the Annapurna Base Camp helicopter tour?", answer: "That flight lands inside the sanctuary at 4,130 m and costs roughly double. It is the better trip if the sanctuary is what you want. This one is shorter, cheaper and lands lower in the foothills, and suits a first helicopter flight or a tight schedule better." },
      { question: "Is it a shared flight or a private charter?", answer: "Shared by default — the aircraft carries five and the price assumes a full load, which is what keeps it affordable. A private charter for your party alone is available as an add-on and lets you set the departure time and stay longer at the landing site." },
      { question: "Why do you need my weight?", answer: "Because helicopters lose lift at altitude and the operator flies to a strict total payload. An aircraft loaded beyond it does not take off, and a party that has under-declared gets rearranged at the helipad, which wastes the weather window. Give us accurate figures at booking and it is never an issue." },
      { question: "Will altitude affect me?", answer: "Briefly and mildly. You go from 820 m to around 3,800 m in twenty minutes, which is faster than any trek, but you are only there for fifteen to twenty minutes and then descend. Most people notice nothing beyond slight breathlessness. Tell us at booking about heart or lung conditions." },
      { question: "What happens if the weather is bad?", answer: "The flight does not go, and you receive a full refund or a seat on the next available departure. Morning cloud in the Pokhara valley is the usual cause. Book it for early in your stay rather than the last morning so there is room to rebook." },
      { question: "Is there a minimum age?", answer: "No formal minimum, and children fly on these routes regularly, but infants must be declared at booking because they still count toward the payload. There is no upper age limit either — this is the one way to see the Annapurnas properly with no fitness requirement at all." },
    ],
    inclusions: {
      flights: ["A one-hour scenic helicopter charter from Pokhara over the Annapurna foothills, with one landing at altitude."],
      transport: ["Private vehicle transfers between your Pokhara hotel and the helipad."],
      guide: "Experienced mountain pilot and ground handling at the helipad.",
      extra: [
        "Fifteen to twenty minutes shut down at a high viewpoint, conditions permitting.",
        "Supplementary oxygen and a first aid kit carried on board.",
        "Hot drinks at the landing site.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "All meals.",
      extra: [
        "Personal travel and evacuation insurance covering helicopter activity.",
        "Any additional cost caused by a weather postponement beyond the refund or rebooking offered.",
      ],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "thursday",
    addons: [
      {
        title: "Private Charter Upgrade",
        description:
          "Take the whole five-seat aircraft for your party rather than a shared seat, departing on your own schedule as soon as the weather allows and staying longer at the landing site.",
        unit: "aircraft",
        pricePerUnit: 1650,
      },
    ],
    itineraryDescription:
      "A one-hour scenic helicopter flight from Pokhara over Sarangkot and the Annapurna foothills, landing for fifteen to twenty minutes at around 3,800 m.",
    inExDescription:
      "Helipad transfers, the scenic charter, one landing at altitude, oxygen and a first aid kit on board, hot drinks at the viewpoint and government taxes are included, while meals, personal insurance and any cost of a weather postponement beyond a refund or rebooking are excluded.",
    bestTime: "Oct-May",
    meta: {
      title: "Pokhara Helicopter Sightseeing Tour – 1 Hour with a Landing",
      description:
        "A one-hour helicopter flight from Pokhara over Phewa Lake and the Annapurna foothills, landing for fifteen to twenty minutes at around 3,800 m.",
      keywords:
        "Pokhara helicopter tour, helicopter sightseeing Pokhara, Annapurna helicopter flight, Pokhara heli tour price, scenic helicopter Nepal, Sarangkot helicopter",
      tags: "Pokhara Helicopter Sightseeing Tour, Heli Tour in Nepal, Annapurna, Scenic Flight, Nepal Activities",
    },
  },
  days: [
    {
      title: "Pokhara to the Annapurna Foothills and Return by Helicopter",
      elevation: "3,800 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A pickup from your hotel around 6.30 am and a short transfer to the <strong>Pokhara helipad</strong> for the weigh-in and boarding briefing.",
        "The aircraft lifts and climbs immediately over <strong>Phewa Lake</strong> and the <strong>Sarangkot</strong> ridge, with the whole valley below, then turns north into the Seti and Modi valleys following the terraced hillsides up toward the range.",
        "Within fifteen minutes <strong>Machhapuchhre (6,993 m)</strong>, <strong>Annapurna South</strong> and <strong>Hiunchuli</strong> fill the windscreen. The pilot lands on a ridge or high pasture at around <strong>3,800 m</strong> and shuts down for fifteen to twenty minutes — long enough for photographs in complete silence and a hot drink.",
        "The return follows the valley back down. At your hotel by mid-morning.",
      ),
    },
  ],
};

export const airAndAdrenalineActivities: Tour[] = [
  bhoteKoshiBungee,
  kushmaBungee,
  crossCountryParagliding,
  parahawking,
  kushmaZipFlyer,
  mountainFlightPokhara,
  pokharaHeliSightseeing,
];
