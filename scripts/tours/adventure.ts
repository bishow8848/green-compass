/**
 * Region: Adventure Activities.
 *
 * Merges "Adventure Activities in Pokhara" and "Rafting in Nepal". The source
 * list had "Paragliding in Nepal - 1 Day" under the Kathmandu day tours and
 * "Paragliding in Pokhara" here; they are the same flight from the same hill,
 * so it appears once.
 */
import { POKHARA, PKR_PLACE, KATHMANDU, KTM_PLACE, p, type Tour } from "./types";

const REGION = "Adventure Activities";

const SARANGKOT = { lng: 83.9490, lat: 28.2440 };
const POKHARA_AIRPORT = { lng: 83.9820, lat: 28.2000 };
const HEMJA = { lng: 83.8900, lat: 28.2450 };
const SETI_PUTIN = { lng: 84.0500, lat: 28.1500 };
const CHARAUDI = { lng: 84.7200, lat: 27.8300 };
const KURINTAR = { lng: 84.6300, lat: 27.7300 };

const ADVENTURE_SECTIONS = (activity: string) => [
  {
    heading: "Safety and Operators",
    content:
      `<p>We book ${activity} only with operators who hold current Nepal Tourism Board licensing, carry third-party liability cover and maintain their equipment on a documented schedule. Briefings are given in English before every activity and are not optional — if you arrive late and miss one you will not be taken out.</p><p>Every participant signs a liability waiver on the day. Read it rather than skimming it: it sets out what the operator is responsible for and what it is not, and it is the document your own travel insurer will ask about if anything goes wrong.</p>`,
  },
  {
    heading: "Who Can Take Part",
    content:
      "<p>Minimum and maximum <strong>age and weight limits</strong> apply to every activity here and they are set by the equipment, not by preference. They are listed in the FAQs below; tell us your details at booking so we can confirm rather than turning you away at the site.</p><p>Anyone with a heart condition, high blood pressure, epilepsy, a recent surgery, a back or neck injury, or who is pregnant, should not take part without written medical clearance. Alcohol the night before is a bad idea and on the day itself is an automatic refusal.</p>",
  },
  {
    heading: "Best Time and Conditions",
    content:
      "<p><strong>September to November</strong> and <strong>February to April</strong> give the most reliable conditions across all of these activities — stable air, clear mountain views and comfortable temperatures. Winter mornings are often perfect but cold at altitude, and the pre-monsoon build-up from late April brings afternoon thermals and thunderstorms.</p><p>The monsoon from June to August affects each activity differently. Rafting is at its most powerful and is for experienced paddlers only; flying activities are frequently cancelled by cloud; the ground-based activities continue in most conditions. Everything here is weather-dependent and a cancelled activity is rescheduled or refunded, never forced.</p>",
  },
  {
    heading: "What to Wear and Bring",
    content:
      "<p>Comfortable clothes you do not mind getting dirty or wet, closed shoes with a heel strap, sunglasses that will not fall off, sunscreen and a hat for the waiting around. Long sleeves are worth having even in warm weather — the air is cold at flying altitude and the sun on the river is severe.</p><p>Leave valuables at the hotel. Phones and loose items are not permitted during most activities and the operators provide secure storage. Most sites sell photo and video packages shot by the crew, which is the only reliable way to get pictures of yourself doing this.</p>",
  },
];

const ADVENTURE_FAQS = (activity: string) => [
  { question: "What happens if the weather cancels it?", answer: `We reschedule ${activity} for later the same day or the next morning where your itinerary allows, and refund in full if there is no workable window. Conditions are assessed by the operator on the ground and their decision is final — it is not a negotiation.` },
  { question: "Do I need any previous experience?", answer: "No. Everything in this region is run with a professional pilot, guide or instructor and is designed for first-timers. You will be briefed, fitted with the equipment and told exactly what to do, and there is nothing to learn in advance." },
  { question: "Is travel insurance required?", answer: "Yes, and check the wording. Many standard policies exclude adventure activities entirely or list them as an optional extra you must add. The operator's liability cover is not a substitute for your own medical and evacuation insurance." },
  { question: "Are there age and weight limits?", answer: "Yes, and they vary by activity — broadly 16 to 65 years with weight between 35 and 100 kg, though paragliding, bungee and the ultralight each have their own numbers. Tell us your age and weight at booking so we can confirm rather than you discovering a problem at the site." },
  { question: "Can I take my phone or camera?", answer: "Generally not during the activity itself — loose items are a hazard to you and to others. The crews shoot photo and video with mounted cameras and sell the footage afterwards, which is the practical way to have a record of it." },
  { question: "How long does the whole thing take?", answer: "The activity itself is usually short; the day is longer. Allow half a day including hotel pickup, transfer, briefing, kitting up, waiting for your turn and the return. Exact timings are in the tour plan below." },
  { question: "Can I book more than one activity in a day?", answer: "Often, yes — a morning paragliding flight and an afternoon zipline is a common pairing, and both are close together. Tell us what you want and we will sequence it so the transfers work." },
  { question: "What if I change my mind at the top?", answer: "Nobody is pushed. If you back out before the activity begins, most operators refund a portion of the fee less the fixed costs already incurred, and the exact terms are in the waiver you sign. It happens more often than you would think and no one makes a fuss." },
];

const pokharaTransport = ["Return transfer between your Pokhara hotel and the activity site."];

export const paraglidingPokhara: Tour = {
  region: REGION,
  price: 95,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [83.95, 28.23],
  zoom: 12,
  content: {
    slug: "paragliding-in-pokhara",
    title: "Paragliding in Pokhara, Nepal – 1 Day",
    overview:
      "<p>Pokhara is one of the best commercial paragliding sites in the world, and the reason is geography: a launch hill at <strong>Sarangkot (1,592 m)</strong>, a large flat lake to land beside, dependable thermals from mid-morning, and an 8,000 m skyline behind the whole thing. Flights are tandem with a licensed pilot, so no experience is needed at all.</p><p>You launch by running a few steps off the hill and are airborne immediately. A standard flight is <strong>25 to 35 minutes</strong>, thermalling above the ridge with <strong>Machhapuchhre</strong>, <strong>Annapurna South</strong> and <strong>Dhaulagiri</strong> across the valley and <strong>Phewa Lake</strong> directly below, before landing beside the water at Khapaudi. Griffon vultures use the same thermals and often fly alongside.</p>",
    highlights: [
      ["Launch from Sarangkot (1,592 m)", "Run off one of the world's great commercial paragliding hills with a licensed tandem pilot."],
      ["The Annapurna Skyline in Flight", "Machhapuchhre, Annapurna South and Dhaulagiri across the valley for the whole flight."],
      ["Phewa Lake Below", "Circle above the lake and land on its shore at Khapaudi."],
      ["No Experience Needed", "Tandem flying with a certified pilot; your only job is to run a few steps."],
      ["Thermalling with Vultures", "Griffon vultures work the same lift and regularly fly within a few metres."],
    ],
    sections: ADVENTURE_SECTIONS("paragliding"),
    faqs: ADVENTURE_FAQS("a paragliding flight"),
    inclusions: {
      transport: ["Return transfer between your Pokhara hotel and the Sarangkot launch site.", "Transfer from the landing site back to the lakeside."],
      entrance: "Sarangkot launch fee and civil aviation charges.",
      guide: "Certified tandem paragliding pilot with current licensing.",
      extra: ["All flying equipment, helmet and harness.", "Pre-flight safety briefing."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package shot by the pilot's mounted camera.", "Cross-country or acrobatic flight upgrades."] },
    privateVehicleAddon: false,
    addons: [
      { title: "Photo and Video Package", description: "Stills and video shot on the pilot's mounted camera throughout the flight, delivered the same day.", unit: "person", pricePerUnit: 25 },
      { title: "Cross-Country Flight Upgrade", description: "Extend to a one-hour cross-country flight covering more of the valley, for those who want longer in the air.", unit: "person", pricePerUnit: 90 },
    ],
    fixedDepartureDay: "sunday",
    itineraryDescription: "A half-day tandem paragliding flight from Sarangkot over Phewa Lake, with 25 to 35 minutes in the air.",
    inExDescription: "Hotel transfers, the launch fee, all flying equipment and a certified tandem pilot are included, while insurance, the photo package and flight upgrades are excluded.",
    bestTime: "Sep-Nov, Feb-Apr",
    meta: {
      title: "Paragliding in Pokhara, Nepal – Tandem Flight from Sarangkot",
      description: "A tandem paragliding flight from Sarangkot over Phewa Lake, with 25 to 35 minutes in the air facing the Annapurna range.",
      keywords: "paragliding Pokhara, Sarangkot paragliding, tandem paragliding Nepal, Phewa Lake paragliding, adventure Pokhara",
      tags: "Adventure Activities, Paragliding, Pokhara, Sarangkot, Nepal Tours",
    },
  },
  days: [
    {
      title: "Tandem paragliding flight from Sarangkot (1,592 m)",
      elevation: "1,592 m",
      accommodation: "Sarangkot",
      placeDescription: "The launch ridge at 1,592 m above Pokhara, facing the Annapurna range across Phewa Lake.",
      ...SARANGKOT,
      html: p(
        "Pickup from your lakeside hotel in the mid-morning, once the sun has been on the hill long enough to generate lift. The jeep climbs the switchbacks to <strong>Sarangkot (1,592 m)</strong> in about half an hour.",
        "At the launch you are fitted with a harness and helmet and given the briefing, which comes down to three things: run when the pilot says run, do not sit down until you are told, and lift your legs on landing. The whole thing takes ten minutes.",
        "The launch itself is over in seconds — a few steps down the slope and the wing takes your weight. Then you are climbing, and the view opens: <strong>Phewa Lake</strong> below with the town along its shore, and <strong>Machhapuchhre (6,993 m)</strong>, <strong>Annapurna South</strong> and <strong>Dhaulagiri</strong> across the valley.",
        "A standard flight runs <strong>25 to 35 minutes</strong>, thermalling above the ridge — often in company with griffon vultures using the same lift — before the pilot spirals down to land beside the water at Khapaudi. Ask for a few wingovers on the descent if you want them, or say no and the flight stays gentle.",
        "The vehicle meets you at the landing field and returns you to the lakeside, back by lunchtime.",
      ),
    },
  ],
};

export const zipflyerPokhara: Tour = {
  region: REGION,
  price: 85,
  difficulty: "easy",
  maxAltitude: 1592,
  center: [83.94, 28.23],
  zoom: 12,
  content: {
    slug: "zipline-in-pokhara-zip-flyer",
    title: "Zipline in Pokhara – Zip Flyer",
    overview:
      "<p>The <strong>Zip Flyer</strong> at Sarangkot is one of the steepest and fastest ziplines in the world: <strong>1.8 km long</strong>, with a <strong>600 m vertical drop</strong> and a 56-degree incline that takes riders to speeds around <strong>120 km/h</strong>. It runs from the Sarangkot ridge down to the valley floor at Hyangja, and the whole ride lasts a little under two minutes.</p><p>Riders go in a seated harness rather than hanging from a trolley, which makes it far less strenuous than it sounds and means there is nothing to hold on to and nothing to do. Three cables run side by side so a group can ride together. The braking is automatic and hydraulic at the bottom.</p>",
    highlights: [
      ["1.8 km at 120 km/h", "One of the steepest and fastest ziplines built anywhere in the world."],
      ["600 m Vertical Drop", "A 56-degree descent from the Sarangkot ridge to the valley floor at Hyangja."],
      ["Seated Harness", "Ride sitting down rather than hanging, which needs no strength and no technique."],
      ["Three Parallel Cables", "Ride alongside two others in your group rather than one at a time."],
      ["Annapurna Views on the Way Up", "The transfer to the top is worth the trip on its own."],
    ],
    sections: ADVENTURE_SECTIONS("the zipline"),
    faqs: ADVENTURE_FAQS("the zipline"),
    inclusions: {
      transport: ["Return transfer between your Pokhara hotel and the Zip Flyer base station.", "Shuttle from the base station up to the Sarangkot launch tower."],
      entrance: "Zip Flyer ride fee.",
      guide: "Trained operating crew at both the launch tower and the landing station.",
      extra: ["Full-body harness, helmet and gloves.", "Safety briefing and weigh-in before the ride."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "Additional rides beyond the one included."] },
    privateVehicleAddon: false,
    addons: [
      { title: "Second Ride", description: "A second run down the cable on the same visit, booked at the base station on the day.", unit: "person", pricePerUnit: 45 },
      { title: "Photo and Video Package", description: "Footage from the launch tower and the on-cable cameras, delivered on the day.", unit: "person", pricePerUnit: 20 },
    ],
    fixedDepartureDay: "monday",
    itineraryDescription: "A half-day trip to the Sarangkot Zip Flyer, with the shuttle to the tower and one 1.8 km ride to the valley floor.",
    inExDescription: "Hotel transfers, the shuttle to the launch tower, the ride fee, all equipment and the operating crew are included, while insurance, photos and extra rides are excluded.",
    bestTime: "Sep-Nov, Feb-Apr",
    meta: {
      title: "Zipline in Pokhara – Zip Flyer from Sarangkot",
      description: "Ride the Zip Flyer at Sarangkot, a 1.8 km zipline with a 600 m drop reaching around 120 km/h above the Pokhara valley.",
      keywords: "zipline Pokhara, Zip Flyer Nepal, Sarangkot zipline, fastest zipline, adventure Pokhara",
      tags: "Adventure Activities, Zipline, Pokhara, Sarangkot, Nepal Tours",
    },
  },
  days: [
    {
      title: "Zip Flyer ride from Sarangkot (1,592 m) to Hyangja",
      elevation: "1,592 m",
      accommodation: "Sarangkot",
      placeDescription: "The Zip Flyer launch tower on the Sarangkot ridge, 600 m above the landing station at Hyangja.",
      ...SARANGKOT,
      html: p(
        "Pickup from your hotel and a short drive to the <strong>Zip Flyer base station</strong> at Hyangja for registration, the weigh-in and the waiver.",
        "The company shuttle then climbs to the launch tower on the <strong>Sarangkot</strong> ridge — a scenic half-hour up the switchbacks with the Annapurnas opening behind you.",
        "At the top the crew fits a full-body harness, helmet and gloves and runs the briefing. You are clipped into a <strong>seated</strong> position, which surprises most people: there is nothing to grip and nothing to do, which makes it far easier than it looks.",
        "The ride is <strong>1.8 km</strong> with a <strong>600 m vertical drop</strong> on a 56-degree line, and speeds reach around <strong>120 km/h</strong>. It lasts a little under two minutes and the braking at the bottom is automatic and hydraulic.",
        "Three cables run in parallel, so a group of three can go together. The transfer collects you at the base station afterwards and returns you to the lakeside.",
      ),
    },
  ],
};

export const bungeePokhara: Tour = {
  region: REGION,
  price: 90,
  difficulty: "easy",
  maxAltitude: 900,
  center: [83.89, 28.245],
  zoom: 12,
  content: {
    slug: "bungee-jumping-in-pokhara",
    title: "Bungee Jumping in Pokhara – 1 Day",
    overview:
      "<p>Pokhara's <strong>tower bungee</strong> at Hemja is a purpose-built 70 m steel structure set in open country half an hour from the lakeside, with the Annapurna range on the horizon. Unlike a bridge jump the tower gives a clean, unobstructed drop and lets the crew work at a steady pace, so the waiting is shorter and the briefing is unhurried.</p><p>The site is run to New Zealand-derived standards with imported cord, a redundant harness system and two operators on every jump. It also offers a <strong>swing</strong> from the same tower for anyone who wants the height without the head-first drop — a pendulum rather than a freefall, and a good deal easier to talk yourself into.</p>",
    highlights: [
      ["A 70 m Purpose-Built Tower", "A clean vertical drop from a dedicated steel structure rather than a bridge."],
      ["Annapurna on the Horizon", "The tower stands in open country with the range across the valley."],
      ["Bungee or Swing", "Choose the head-first drop or the pendulum swing from the same platform."],
      ["Imported Cord and Double Harness", "Equipment and procedure built to internationally recognised standards."],
      ["Thirty Minutes from the Lakeside", "Close enough to combine with a paragliding flight on the same day."],
    ],
    sections: ADVENTURE_SECTIONS("bungee jumping"),
    faqs: ADVENTURE_FAQS("the jump"),
    inclusions: {
      transport: pokharaTransport,
      entrance: "Tower jump fee and site charges.",
      guide: "Trained jump masters, with two operators supervising every jump.",
      extra: ["Full body and ankle harness, and all jump equipment.", "Safety briefing and weigh-in before the jump."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "The tower swing, if taken in addition to the jump."] },
    privateVehicleAddon: false,
    addons: [
      { title: "Tower Swing", description: "Add the 70 m pendulum swing from the same tower alongside your bungee jump.", unit: "person", pricePerUnit: 60 },
      { title: "Photo and Video Package", description: "Stills and video of your jump from the platform and ground cameras.", unit: "person", pricePerUnit: 20 },
    ],
    fixedDepartureDay: "tuesday",
    itineraryDescription: "A half-day trip to the Hemja bungee tower near Pokhara for a 70 m jump, with the option of the swing.",
    inExDescription: "Hotel transfers, the jump fee, all equipment and trained jump masters are included, while insurance, photos and the additional swing are excluded.",
    bestTime: "Sep-Nov, Feb-Apr",
    meta: {
      title: "Bungee Jumping in Pokhara – 70 m Tower Jump",
      description: "A 70 m tower bungee jump near Pokhara at Hemja, with the Annapurna range on the horizon and a swing option from the same platform.",
      keywords: "bungee jumping Pokhara, Pokhara bungy, tower bungee Nepal, bungee jump Nepal, adventure Pokhara",
      tags: "Adventure Activities, Bungee, Pokhara, Nepal Tours",
    },
  },
  days: [
    {
      title: "Bungee jump from the 70 m tower at Hemja",
      elevation: "900 m",
      accommodation: "Hemja",
      placeDescription: "The bungee tower site in open country at Hemja, half an hour north-west of Pokhara.",
      ...HEMJA,
      html: p(
        "Pickup from your hotel and a half-hour drive north-west out of Pokhara to the site at <strong>Hemja</strong>, in open farmland with the Annapurna range across the valley.",
        "Registration, the waiver and the weigh-in come first — your weight is written on your hand, which is how the crew selects the cord.",
        "The briefing covers the harness system, the jump position and what happens on the recoil. Two operators check every attachment independently before you are cleared to the edge.",
        "The tower is <strong>70 m</strong> and the drop is clean and unobstructed. The count is short and there is no advantage in thinking about it: most people find the walk to the edge harder than the jump.",
        "After the recoil you are lowered to a landing airbag and unclipped. Anyone who would rather not go head-first can take the <strong>swing</strong> instead, which is a pendulum from the same platform and considerably easier to commit to.",
        "The vehicle returns you to the lakeside by early afternoon.",
      ),
    },
  ],
};

export const ultralightPokhara: Tour = {
  region: REGION,
  price: 165,
  difficulty: "easy",
  maxAltitude: 3500,
  center: [83.97, 28.22],
  zoom: 11,
  content: {
    slug: "ultra-light-flight-in-pokhara",
    title: "Ultra Light Flight in Pokhara Nepal – 1 Day",
    overview:
      "<p>An <strong>ultralight flight</strong> from Pokhara airport is the closest thing to flying yourself. The aircraft is a two-seat open microlight with the passenger sitting behind the pilot under a clear canopy, and the view is unobstructed in every direction — nothing like looking through an airliner window.</p><p>Three flight lengths are offered. The <strong>15-minute</strong> circuit covers Phewa Lake and the Pokhara valley; the <strong>30-minute</strong> flight climbs to the Sarangkot ridge and along the foothills; and the <strong>60-minute</strong> mountain flight goes north towards <strong>Machhapuchhre</strong> and the Annapurna wall, reaching around 3,500 m with the peaks close enough to see individual glaciers.</p>",
    highlights: [
      ["An Open-Canopy Microlight", "Sit behind the pilot with an uninterrupted view in every direction."],
      ["Machhapuchhre Up Close", "The 60-minute flight climbs towards the Annapurna wall at around 3,500 m."],
      ["Phewa Lake from Above", "Circle the lake, the town and the World Peace Pagoda on the shorter flights."],
      ["Three Flight Lengths", "Choose 15, 30 or 60 minutes depending on how far north you want to go."],
      ["Morning Air", "Flights run at first light when the air is smoothest and the mountains are clearest."],
    ],
    sections: ADVENTURE_SECTIONS("the ultralight flight"),
    faqs: ADVENTURE_FAQS("the flight"),
    inclusions: {
      transport: ["Return transfer between your Pokhara hotel and Pokhara airport."],
      flights: ["A 30-minute ultralight flight over the Pokhara valley and the Sarangkot ridge."],
      entrance: "Airport and civil aviation charges.",
      guide: "Licensed ultralight pilot with commercial certification.",
      extra: ["Helmet with intercom to the pilot.", "Pre-flight safety briefing."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "Upgrade to the 60-minute mountain flight."] },
    privateVehicleAddon: false,
    addons: [
      { title: "60-Minute Mountain Flight", description: "Extend the flight north towards Machhapuchhre and the Annapurna wall, climbing to around 3,500 m.", unit: "person", pricePerUnit: 145 },
      { title: "Photo and Video Package", description: "Footage from the wing-mounted camera for the whole flight.", unit: "person", pricePerUnit: 25 },
    ],
    fixedDepartureDay: "wednesday",
    itineraryDescription: "A morning ultralight flight from Pokhara airport over Phewa Lake and the Sarangkot ridge, with a mountain upgrade available.",
    inExDescription: "Hotel transfers, the 30-minute flight, airport charges, helmet and intercom and a licensed pilot are included, while insurance, photos and the mountain upgrade are excluded.",
    bestTime: "Sep-Nov, Feb-Apr",
    meta: {
      title: "Ultra Light Flight in Pokhara Nepal – Microlight over Phewa Lake",
      description: "An ultralight flight from Pokhara airport over Phewa Lake and Sarangkot, with a 60-minute mountain option towards Machhapuchhre.",
      keywords: "ultralight flight Pokhara, microlight Nepal, ultra light Pokhara, mountain flight Pokhara, adventure Pokhara",
      tags: "Adventure Activities, Scenic Flight, Pokhara, Nepal Tours",
    },
  },
  days: [
    {
      title: "Ultralight flight over the Pokhara valley",
      elevation: "1,800 m",
      accommodation: "Pokhara Airport",
      placeDescription: "Pokhara airport on the eastern side of the valley, base for the ultralight operators.",
      ...POKHARA_AIRPORT,
      html: p(
        "An early pickup — ultralights fly at first light, when the air is smooth and the mountains are at their clearest, and the operation usually stops by mid-morning.",
        "At <strong>Pokhara airport</strong> you are weighed, fitted with a helmet and intercom and briefed. The aircraft is a two-seat open microlight and you sit behind the pilot, able to talk to them throughout.",
        "The take-off run is short. Within a minute you are over <strong>Phewa Lake</strong>, looking down on the boats, the World Peace Pagoda on its ridge and the whole town spread along the shore.",
        "The <strong>30-minute</strong> flight climbs to the <strong>Sarangkot</strong> ridge and runs along the foothills with the Annapurna range filling the northern horizon, and there is usually a paraglider or two below you on the same air.",
        "Those who upgrade to the <strong>60-minute</strong> flight continue north towards <strong>Machhapuchhre (6,993 m)</strong>, climbing to around 3,500 m where the peaks are close enough to pick out individual glaciers and ridgelines.",
        "Back on the ground by mid-morning, with the rest of the day free.",
      ),
    },
  ],
};

export const atvPokhara: Tour = {
  region: REGION,
  price: 75,
  difficulty: "easy",
  maxAltitude: 1200,
  center: [83.9, 28.25],
  zoom: 12,
  content: {
    slug: "atv-adventure-tour-in-pokhara",
    title: "ATV Adventure Tour in Pokhara – 1 Day",
    overview:
      "<p>An <strong>ATV tour</strong> is the best way to see the Pokhara valley away from the lakeside strip. The route runs on farm tracks, dry riverbeds and forest trails around <strong>Hemja</strong> and the Seti gorge — country that is a few kilometres from town and completely different in character, with terraced fields, Gurung hamlets and the Annapurna range above.</p><p>The quads are automatic and easy to ride: throttle, brake, and a guide leading the way. No licence is needed and the briefing includes a practice loop on flat ground before the group sets off, so complete beginners are the norm rather than the exception. Riders can go solo or two-up.</p>",
    highlights: [
      ["Farm Tracks and Riverbeds", "Ride the country around Hemja and the Seti gorge that no tourist vehicle reaches."],
      ["No Licence or Experience Needed", "Automatic quads, a practice loop and a guide leading the whole route."],
      ["Gurung Hamlets and Terraces", "Stop in villages where the arrival of a quad convoy is still an event."],
      ["The Annapurna Range Above", "Machhapuchhre and Annapurna South over the ridgeline for most of the ride."],
      ["Solo or Two-Up", "Ride your own machine or share with a partner."],
    ],
    sections: ADVENTURE_SECTIONS("the ATV ride"),
    faqs: ADVENTURE_FAQS("the ride"),
    inclusions: {
      transport: pokharaTransport,
      entrance: "ATV hire, fuel and trail access fees.",
      guide: "Lead and sweep riders accompanying the group throughout.",
      extra: ["Helmet, gloves, goggles and protective gear.", "Practice session and safety briefing before departure.", "Tea stop at a village on the route."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "Damage waiver excess if the machine is damaged."] },
    privateVehicleAddon: false,
    addons: [
      { title: "Half-Day Extension", description: "Extend to a longer route taking in the upper Seti gorge and a Gurung village lunch.", unit: "person", pricePerUnit: 55 },
    ],
    fixedDepartureDay: "thursday",
    itineraryDescription: "A half-day guided ATV ride on farm tracks and riverbeds around Hemja and the Seti gorge outside Pokhara.",
    inExDescription: "Hotel transfers, ATV hire and fuel, protective gear, the briefing, guides and a village tea stop are included, while insurance, photos and any damage excess are excluded.",
    bestTime: "Sep-Nov, Feb-May",
    meta: {
      title: "ATV Adventure Tour in Pokhara – 1 Day Quad Bike Ride",
      description: "A half-day guided ATV ride around Hemja and the Seti gorge outside Pokhara, on farm tracks and riverbeds with the Annapurnas above.",
      keywords: "ATV Pokhara, quad bike Nepal, ATV adventure tour Pokhara, off road Pokhara, adventure activities Pokhara",
      tags: "Adventure Activities, ATV, Pokhara, Nepal Tours",
    },
  },
  days: [
    {
      title: "Guided ATV ride around Hemja and the Seti gorge",
      elevation: "1,200 m",
      accommodation: "Hemja",
      placeDescription: "Farmland and river country north-west of Pokhara, at the foot of the Sarangkot ridge.",
      ...HEMJA,
      html: p(
        "Pickup from your hotel and a short drive to the ATV base outside town for the briefing, protective gear and a practice loop on flat ground — enough to be comfortable with the throttle and brakes before anyone goes anywhere.",
        "The route leaves the road almost immediately and follows farm tracks between terraced fields, with a lead rider setting the pace and a sweep at the back so nobody is left behind.",
        "The middle section runs on the dry bed and banks of the <strong>Seti</strong>, which is the fun part — loose gravel, shallow water crossings and enough space to open the throttle where the guide allows it.",
        "There is a tea stop at a <strong>Gurung hamlet</strong> on the ridge, where the arrival of a line of quads is still an event and the view north takes in <strong>Machhapuchhre</strong> and <strong>Annapurna South</strong>.",
        "The return loop takes a different set of tracks through forest and back to base, and the transfer returns you to the lakeside in the early afternoon.",
      ),
    },
  ],
};

export const setiRafting: Tour = {
  region: REGION,
  price: 65,
  difficulty: "easy",
  maxAltitude: 900,
  center: [84.0, 28.18],
  zoom: 11,
  content: {
    slug: "seti-river-rafting-in-pokhara",
    title: "Seti River Rafting in Pokhara – 1 Day",
    overview:
      "<p>The <strong>Seti</strong> is the gentlest of Nepal's commercially rafted rivers and the right choice for families, first-timers and anyone who wants to be on the water rather than fighting it. It runs warm and clear through a jungle gorge north of Pokhara, with <strong>class II and III</strong> rapids spaced by long calm stretches where you can swim beside the raft.</p><p>A day trip covers around <strong>15 km</strong> in three to four hours of paddling. The gorge is narrow and green with kingfishers, egrets and the occasional monkey troop in the trees, and there are sand beaches for the lunch stop. Because the rapids are modest the guides let everyone paddle properly rather than just holding on, which makes it a good introduction to river running.</p>",
    highlights: [
      ["Class II–III Water", "Gentle enough for families and first-timers, with real rapids rather than flat water."],
      ["A Warm Jungle Gorge", "The Seti runs clear and warm through forest that closes over the river."],
      ["Swimming Between Rapids", "Long calm stretches where you can get out of the boat and float."],
      ["Beach Lunch", "A cooked lunch on a river sand bar halfway down the run."],
      ["Half an Hour from Pokhara", "The closest commercially rafted river to the lakeside."],
    ],
    sections: ADVENTURE_SECTIONS("rafting"),
    faqs: ADVENTURE_FAQS("the rafting trip"),
    inclusions: {
      transport: ["Return transfer between your Pokhara hotel, the put-in point and the take-out."],
      meals: ["Cooked lunch on the riverbank, with vegetarian options."],
      entrance: "River permits and rafting fees.",
      guide: "Certified river guide in every raft, with a safety kayaker accompanying the group.",
      extra: ["Raft, paddle, helmet, life jacket and dry bag.", "Safety briefing and paddle practice before launching."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "Towels and a change of clothes."] },
    privateVehicleAddon: false,
    fixedDepartureDay: "friday",
    itineraryDescription: "A one-day class II–III rafting trip on the Seti north of Pokhara, covering around 15 km with a beach lunch.",
    inExDescription: "Hotel transfers, all rafting equipment, river permits, a certified guide, a safety kayaker and lunch on the bank are included, while insurance, photos and personal items are excluded.",
    bestTime: "Sep-Nov, Feb-May",
    meta: {
      title: "Seti River Rafting in Pokhara – 1 Day Class II-III",
      description: "A one-day Seti river rafting trip near Pokhara, class II–III through a warm jungle gorge with swimming and a beach lunch.",
      keywords: "Seti river rafting, rafting Pokhara, family rafting Nepal, class 3 rafting Nepal, Seti khola rafting",
      tags: "Adventure Activities, Rafting, Pokhara, Seti River, Nepal Tours",
    },
  },
  days: [
    {
      title: "Seti river rafting, put-in to take-out",
      elevation: "900 m",
      accommodation: "Seti River",
      placeDescription: "A warm, clear river running through a jungle gorge north of Pokhara.",
      ...SETI_PUTIN,
      html: p(
        "Pickup from your hotel mid-morning and a short drive north out of Pokhara to the put-in, where the rafts are rigged on the bank.",
        "The safety briefing covers the commands, what to do if you go in, and how to get back into the boat. Everyone then practises paddling in the shallows — the guides want a crew that works together rather than passengers.",
        "The run covers around <strong>15 km</strong> of <strong>class II and III</strong> water. The rapids are frequent but forgiving, and the gorge between them is narrow, green and warm, with kingfishers working the banks and langur in the trees above.",
        "In the long calm sections the guides let anyone who wants to swim get out and float alongside the raft, which on a hot day is the best part of the trip.",
        "Lunch is cooked on a <strong>sand beach</strong> halfway down, with time to dry off in the sun.",
        "The afternoon covers the remaining stretch to the take-out, where the vehicle is waiting to return you to Pokhara by late afternoon.",
      ),
    },
  ],
};

export const trishuli1Day: Tour = {
  region: REGION,
  price: 60,
  difficulty: "easy",
  maxAltitude: 400,
  center: [84.68, 27.79],
  zoom: 10.5,
  content: {
    slug: "trishuli-river-rafting-1-day",
    title: "Trishuli River Rafting – 1 Day",
    overview:
      "<p>The <strong>Trishuli</strong> is Nepal's most rafted river, and the reason is convenience: it runs alongside the Prithvi Highway between Kathmandu and Pokhara, so a day on the water fits into the transfer between the two cities without costing a separate day. <strong>Class III</strong> rapids with names like Upset, Ladies' Delight and Surprise come in a steady sequence through a steep-sided gorge.</p><p>A day trip covers around <strong>25 km</strong> from Charaudi, with three to four hours on the water. The rapids are big enough to be genuinely exciting in the autumn flow and forgiving enough for people who have never held a paddle. Most groups do it on the way to Pokhara, arriving at the take-out with the vehicle and luggage waiting.</p>",
    highlights: [
      ["Nepal's Most Rafted River", "Class III water in a steep gorge with a steady sequence of named rapids."],
      ["Fits the Kathmandu–Pokhara Transfer", "Raft on the way between the two cities without spending an extra day."],
      ["No Experience Needed", "Certified guides, a full briefing and paddle practice before you set off."],
      ["Riverside Lunch", "A cooked lunch on a sand beach partway down the run."],
      ["A Safety Kayaker Throughout", "A kayaker accompanies the rafts for the length of the trip."],
    ],
    sections: ADVENTURE_SECTIONS("rafting"),
    faqs: ADVENTURE_FAQS("the rafting trip"),
    inclusions: {
      transport: ["Transfer from Kathmandu or Pokhara to the Charaudi put-in, and onward from the take-out to your destination.", "Luggage carried in the vehicle to the take-out."],
      meals: ["Cooked lunch on the riverbank, with vegetarian options."],
      entrance: "River permits and rafting fees.",
      guide: "Certified river guide in every raft, with a safety kayaker accompanying the group.",
      extra: ["Raft, paddle, helmet, life jacket and dry bag.", "Safety briefing and paddle practice before launching."],
    },
    exclusions: { domestic: true, extra: ["Photo and video package.", "Towels and a change of clothes."] },
    privateVehicleAddon: false,
    fixedDepartureDay: "saturday",
    itineraryDescription: "A one-day class III rafting trip on the Trishuli from Charaudi, run as part of the Kathmandu–Pokhara transfer.",
    inExDescription: "Transfers to and from the river with luggage carried, all rafting equipment, permits, a certified guide, a safety kayaker and lunch on the bank are included, while insurance, photos and personal items are excluded.",
    bestTime: "Sep-Nov, Feb-May",
    meta: {
      title: "Trishuli River Rafting – 1 Day Class III from Charaudi",
      description: "A one-day Trishuli river rafting trip from Charaudi, class III rapids on the Kathmandu–Pokhara highway with a riverside lunch.",
      keywords: "Trishuli river rafting, rafting Nepal 1 day, Charaudi rafting, Kathmandu Pokhara rafting, class 3 rafting",
      tags: "Adventure Activities, Rafting, Trishuli River, Nepal Tours",
    },
  },
  days: [
    {
      title: "Trishuli rafting from Charaudi to the take-out",
      elevation: "400 m",
      accommodation: "Trishuli River",
      placeDescription: "The Trishuli gorge along the Prithvi Highway between Kathmandu and Pokhara.",
      ...CHARAUDI,
      html: p(
        "An early departure from Kathmandu or Pokhara on the Prithvi Highway, following the river to the put-in at <strong>Charaudi</strong> — around three hours from Kathmandu, two and a half from Pokhara.",
        "The rafts are rigged on the bank while the guides run the safety briefing: the paddle commands, the position to brace in, what to do if you go overboard and how to get back in. Everyone practises in the shallows first.",
        "The run covers around <strong>25 km</strong> of <strong>class III</strong> water. The named rapids come in a steady sequence — Upset, Ladies' Delight, Surprise, Twin Rock — with calm pools between them where you can swim.",
        "The gorge is steep-sided and green, with the highway visible high above on one bank and nothing at all on the other. A <strong>safety kayaker</strong> runs the whole trip alongside the rafts.",
        "Lunch is cooked on a sand beach midway down, with time to dry out.",
        "At the take-out the vehicle is waiting with your luggage, and you continue to Pokhara or Kathmandu, arriving in the evening.",
      ),
    },
  ],
};

export const trishuli2Day: Tour = {
  region: REGION,
  price: 145,
  difficulty: "easy",
  maxAltitude: 400,
  center: [84.68, 27.79],
  zoom: 10.5,
  content: {
    slug: "trishuli-river-rafting-2-days",
    title: "Trishuli River Rafting – 1 Night 2 Days",
    overview:
      "<p>Two days on the <strong>Trishuli</strong> covers around <strong>50 km</strong> of river and, more importantly, puts a <strong>night on a sand beach</strong> in the middle of it. Camping on the riverbank is what people remember — a fire, dinner cooked by the crew, and nothing but the sound of water and the highway lights far above on the gorge wall.</p><p>The first day runs the classic <strong>class III</strong> section from Charaudi through the named rapids. The second continues down to Kuringhat, where the gorge opens out and the water eases, and there is time for swimming, cliff jumping where the guides judge it safe, and a slow float into the take-out. Groups usually continue to Chitwan or Pokhara from there.</p>",
    highlights: [
      ["A Night on the Sand", "Camp on a river beach with a fire, cooked dinner and no road access."],
      ["50 km of Class III Water", "Two full days of rapids rather than a single afternoon."],
      ["Cliff Jumping and Swimming", "Time in the calm sections for the things a one-day trip has to skip."],
      ["Continue to Chitwan or Pokhara", "The take-out sits between both, so the trip fits either onward plan."],
      ["Full Camp Crew", "Tents, kitchen and a safety kayaker travelling with the rafts."],
    ],
    sections: ADVENTURE_SECTIONS("rafting"),
    faqs: ADVENTURE_FAQS("the rafting trip"),
    inclusions: {
      transport: ["Transfer from Kathmandu or Pokhara to the Charaudi put-in, and onward from the take-out to your destination.", "Luggage carried in the vehicle to the take-out."],
      accommodation: ["One night camping on a river beach in two-person tents."],
      meals: ["All meals from lunch on day one to lunch on day two, cooked by the river crew."],
      entrance: "River permits and rafting fees.",
      guide: "Certified river guides, a safety kayaker and a full camp and kitchen crew.",
      extra: ["Raft, paddle, helmet, life jacket and dry bag.", "Tents, sleeping mats and camp equipment."],
    },
    exclusions: { domestic: true, extra: ["Sleeping bag hire.", "Photo and video package.", "Alcoholic drinks at camp."] },
    privateVehicleAddon: false,
    addons: [
      { title: "Sleeping Bag Hire", description: "A clean sleeping bag for the night on the beach, if you are not carrying your own.", unit: "person", pricePerUnit: 10 },
    ],
    fixedDepartureDay: "saturday",
    itineraryDescription: "Two days and around 50 km on the Trishuli from Charaudi to Kuringhat, camping on a river beach between them.",
    inExDescription: "Transfers with luggage carried, all rafting and camping equipment, permits, all meals on the river, certified guides, a safety kayaker and a camp crew are included, while insurance, sleeping bag hire, photos and drinks are excluded.",
    bestTime: "Sep-Nov, Feb-May",
    meta: {
      title: "Trishuli River Rafting – 1 Night 2 Days with Beach Camping",
      description: "A two-day Trishuli rafting trip covering 50 km from Charaudi to Kuringhat, with a night camping on a river sand beach.",
      keywords: "Trishuli rafting 2 days, overnight rafting Nepal, river camping Nepal, Charaudi Kuringhat rafting, Trishuli camping",
      tags: "Adventure Activities, Rafting, Trishuli River, Camping, Nepal Tours",
    },
  },
  days: [
    {
      title: "Charaudi put-in and rafting to the beach camp",
      elevation: "400 m",
      accommodation: "Trishuli beach camp",
      placeDescription: "A sand beach on the Trishuli, reachable only from the water.",
      ...CHARAUDI,
      html: p(
        "Departure from Kathmandu or Pokhara in the morning, following the Prithvi Highway to the put-in at <strong>Charaudi</strong>.",
        "Rafts are rigged and the crew runs the safety briefing and paddle practice in the shallows before anyone launches.",
        "The afternoon covers the classic <strong>class III</strong> section — Upset, Ladies' Delight, Surprise and Twin Rock in sequence, with calm pools between them for swimming.",
        "In the late afternoon the rafts pull onto a <strong>sand beach</strong> that has no road access at all. The crew pitches the tents while there is still light, and dinner is cooked over a fire.",
        "The night on the river is the point of the two-day trip: no traffic, no lodges, just the water and the gorge walls. Overnight camping on the beach.",
      ),
    },
    {
      title: "Rafting to Kuringhat and onward transfer",
      elevation: "400 m",
      accommodation: "Trishuli River",
      placeDescription: "The lower Trishuli gorge near Kuringhat, where the valley opens towards the Terai.",
      ...KURINTAR,
      html: p(
        "Breakfast on the beach and a relaxed start — the second day is shorter and the crew packs the camp onto the rafts while you finish your tea.",
        "The morning run continues down the gorge with a further set of rapids, and as the valley opens the water eases into long green pools.",
        "This is where the guides make time for the things a one-day trip skips: swimming, floating the calm sections in a life jacket, and <strong>cliff jumping</strong> from a low rock where they judge the depth safe.",
        "The take-out is near <strong>Kuringhat</strong>, where the vehicle is waiting with your luggage. Lunch is served on the bank before you leave.",
        "From here the road runs west to Pokhara, south to Chitwan or east to Kathmandu, and we drop you wherever your onward plan needs.",
      ),
    },
  ],
};

export const adventureTours: Tour[] = [
  paraglidingPokhara, zipflyerPokhara, bungeePokhara, ultralightPokhara,
  atvPokhara, setiRafting, trishuli1Day, trishuli2Day,
];
