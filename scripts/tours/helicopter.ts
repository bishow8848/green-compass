/**
 * Region: Helicopter Tours & Flights.
 *
 * Merges the source groups "Helicopter Tour in Nepal", the three loose
 * helicopter entries beneath it, and "Helicopter Flights in Nepal". The first
 * group are sightseeing charters with a landing; the second are point-to-point
 * transfers sold by the seat or by the aircraft, mostly used to get off the
 * Everest trail quickly. Both share the same weather rules, so the detail
 * sections below are written once and reused.
 */
import { KATHMANDU, KTM_PLACE, POKHARA, PKR_PLACE, p, type Tour, type TourDay } from "./types";

const REGION = "Helicopter Tours & Flights";

const ABC = { lng: 83.8774, lat: 28.5310 };
const MUKTINATH = { lng: 83.8720, lat: 28.8170 };
const DAMODAR = { lng: 84.1675, lat: 28.9764 };
const KALA_PATTHAR = { lng: 86.8284, lat: 27.9958 };
const SYANGBOCHE = { lng: 86.7109, lat: 27.8119 };
const KYANJIN = { lng: 85.5666, lat: 28.2124 };
const LUKLA = { lng: 86.7290, lat: 27.6870 };
const GORAKSHEP = { lng: 86.8280, lat: 27.9810 };
const NAMCHE = { lng: 86.7140, lat: 27.8050 };

/** Weather, altitude and charter rules apply to every flight in this region. */
const HELI_SECTIONS = [
  {
    heading: "Weather and Flying Windows",
    content:
      "<p>Helicopters in Nepal fly in the <strong>morning</strong>, and that is not a preference. Valley winds build from mid-morning and the high landing sites become unusable by early afternoon, so departures are scheduled between 6 and 9 am and the whole operation is timed around getting back before the air turns.</p><p><strong>October to December</strong> and <strong>March to May</strong> give the most reliable conditions. Monsoon cloud between June and September grounds flights for days at a time, and while winter mornings are often crystal clear, cold fronts can close a landing site at short notice. Build a spare day into your plans; if the flight cannot operate safely it will be postponed or refunded, never pushed.</p>",
  },
  {
    heading: "Altitude on a Helicopter Flight",
    content:
      "<p>A helicopter takes you from around 1,400 m to well over 4,000 m in under an hour, which is far faster than the body can adjust to. That is why the landings are deliberately short — typically <strong>10 to 15 minutes on the ground</strong> at the highest point — and why the crew will move you on if anyone starts to feel unwell.</p><p>Expect to feel breathless and light-headed while walking at the landing site; that is normal. Move slowly, do not run for a photograph, and tell the pilot if you have a headache or feel sick. Anyone with a heart or lung condition, or who is pregnant, should clear the flight with a doctor first. Most operators carry supplementary oxygen on the aircraft.</p>",
  },
  {
    heading: "Group Size, Weight and Seats",
    content:
      "<p>The aircraft used are five-seat <strong>Airbus H125</strong> or similar. At Everest altitudes the machine cannot lift five passengers, so the flight is flown in two shuttles from a lower staging point — usually Lukla or Pheriche — with two or three passengers per lift. This is standard practice and is built into the schedule rather than being a change of plan.</p><p>We ask for accurate <strong>body weights</strong> at the booking stage because the load calculation is real, and baggage is limited to a small daypack per person. A charter price buys the whole aircraft; a seat price buys one place on a shared flight, which is cheaper but depends on the other seats filling.</p>",
  },
  {
    heading: "What to Wear and Bring",
    content:
      "<p>Dress for the landing site rather than for Kathmandu. At Kala Patthar or Damodar Kunda in the early morning it can be <strong>-10°C with wind</strong>, so a warm jacket, hat, gloves and proper shoes matter even though you are only outside for a quarter of an hour.</p><p>Bring sunglasses — the glare off snow at altitude is severe — plus high-factor sunscreen, a camera, and any medication you take. Leave large bags at the hotel; there is no hold. Drones are prohibited in the national parks and on the aircraft.</p>",
  },
];

const HELI_FAQS = [
  { question: "What happens if the weather cancels the flight?", answer: "We rebook you for the next morning if your schedule allows, and if there is no workable window we refund the flight in full less any unrecoverable landing fees. Weather cancellations are common enough that you should not book a helicopter flight for the day before an international departure." },
  { question: "Is this a charter or a seat on a shared flight?", answer: "Both are available. A private charter buys the whole aircraft and flies on your schedule; a seat-in-shared flight is considerably cheaper but only departs once the other seats are sold, which usually means a small wait in the season and can mean a postponement outside it." },
  { question: "How long are we actually on the ground?", answer: "Ten to fifteen minutes at the highest landing point, longer at the lower stops where a breakfast or a viewpoint is included. The short window at altitude is a safety decision, not a cost-saving one — it keeps everyone below the exposure that causes altitude sickness." },
  { question: "Can children or older travellers take these flights?", answer: "Yes, within reason. There is no walking involved and the flight itself is not demanding, but the altitude is. We would not recommend the highest landings for very young children, and anyone with a heart or respiratory condition should have a doctor's opinion first." },
  { question: "Will everyone get a window seat?", answer: "In a five-seat aircraft, effectively yes — there is a window either side of every row and the pilot banks the aircraft on the scenic legs so both sides get the view. Seats are rotated between the two shuttles where a flight is split." },
  { question: "Do I need a trekking permit for a helicopter flight?", answer: "You need the national park entry permit for whichever park you land in — Sagarmatha, Annapurna or Langtang — and we arrange it as part of the booking. No trekking permit or TIMS card is required because you are not walking a route." },
  { question: "How early do we leave?", answer: "Pickup from your hotel is usually between 5.30 and 6.30 am, with the flight airborne shortly after first light. Mountain flying in Nepal is a morning activity; by ten o'clock the wind has usually made the high landings unsafe." },
  { question: "Is oxygen carried on board?", answer: "Yes, the operators we use carry supplementary oxygen and a basic medical kit on flights with high landings, and the pilots are trained to recognise altitude symptoms. Tell the crew immediately if you feel unwell rather than waiting to see if it passes." },
];

const heliInclusions = (park: string | null, extra: string[] = []) => ({
  transport: ["Private vehicle transfers between your hotel and the helipad."],
  entrance: park ? `${park} National Park entry permit and all landing fees.` : undefined,
  guide: "Experienced mountain pilot and ground crew; a licensed guide accompanies groups on request.",
  extra: ["Supplementary oxygen and a first aid kit carried on board.", ...extra],
});

const heliExclusions = { domestic: false as const, extra: ["Personal travel and evacuation insurance covering helicopter activity.", "Any additional night's accommodation caused by a weather postponement."] };

/** A one-flight tour has a single day entry; this keeps the shape consistent. */
const flightDay = (o: { title: string; elevation: string; accommodation: string; placeDescription: string; lng: number; lat: number; html: string }): TourDay => o;

export const abcHelicopterTour: Tour = {
  region: REGION,
  price: 1150,
  difficulty: "easy",
  maxAltitude: 4130,
  center: [83.88, 28.42],
  zoom: 10,
  content: {
    slug: "annapurna-base-camp-helicopter-tour",
    title: "Annapurna Base Camp Helicopter Tour – 2 Hours",
    overview:
      "<p>The <strong>Annapurna Base Camp helicopter tour</strong> puts you inside the Annapurna Sanctuary and back in Pokhara before lunch — a two-hour round trip that replaces a seven-day walk. The aircraft lifts off the lakeside, climbs over the Machhapuchhre ridge and flies up the Modi Khola gorge, the same corridor trekkers spend three days climbing.</p><p>The landing is at <strong>Annapurna Base Camp (4,130 m)</strong>, on the floor of a glacial amphitheatre ringed by <strong>Annapurna I (8,091 m)</strong>, Annapurna South, Hiunchuli and the unclimbed <strong>Machhapuchhre</strong>. Ten to fifteen minutes on the ground is enough to stand in the middle of it and understand the scale, then the return flight drops back down the gorge with the whole range behind you.</p>",
    highlights: [
      ["Land at Annapurna Base Camp", "Stand at 4,130 m inside the sanctuary, ringed by four major peaks."],
      ["Annapurna I from the Floor", "See the first 8,000 m peak ever climbed rising three and a half kilometres above you."],
      ["The Modi Khola Gorge", "Fly the corridor trekkers take three days to walk, between Machhapuchhre and Hiunchuli."],
      ["Two Hours Door to Door", "Leave Pokhara after breakfast and be back in the lakeside by mid-morning."],
      ["No Trekking Required", "Reach the sanctuary with no walking, no acclimatisation days and no lodges."],
    ],
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: heliInclusions("Annapurna Conservation Area", ["Light refreshment at the landing site."]),
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    addons: [
      {
        title: "Private Charter Upgrade",
        description: "Take the whole aircraft for your party rather than a seat on a shared flight, departing on your own schedule.",
        unit: "flight",
        pricePerUnit: 2400,
      },
    ],
    fixedDepartureDay: "sunday",
    itineraryDescription: "A two-hour morning round trip from Pokhara into the Annapurna Sanctuary, with a landing at Annapurna Base Camp (4,130 m).",
    inExDescription: "Hotel transfers, the helicopter flight, conservation area permit, landing fees and on-board oxygen are included, while insurance, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: {
      title: "Annapurna Base Camp Helicopter Tour – 2 Hours from Pokhara",
      description: "A 2-hour helicopter tour from Pokhara landing at Annapurna Base Camp (4,130 m) inside the sanctuary, beneath Annapurna I and Machhapuchhre.",
      keywords: "Annapurna Base Camp helicopter tour, ABC helicopter Pokhara, Annapurna sanctuary flight, helicopter tour Nepal, Machhapuchhre",
      tags: "Helicopter Tours, Annapurna, Pokhara, Scenic Flight, Nepal Tours",
    },
  },
  days: [
    flightDay({
      title: "Pokhara to Annapurna Base Camp (4,130 m) and return",
      elevation: "4,130 m",
      accommodation: "Annapurna Base Camp",
      placeDescription: "A glacial amphitheatre at 4,130 m ringed by Annapurna I, Annapurna South, Hiunchuli and Machhapuchhre.",
      ...ABC,
      html: p(
        "Pickup from your lakeside hotel shortly after first light and a short drive to <strong>Pokhara airport</strong> for the safety briefing and weight check.",
        "The aircraft lifts off over Phewa Lake and climbs north. Within ten minutes you are level with the ridge at Sarangkot and looking down the Seti gorge, and shortly after that the machine turns into the <strong>Modi Khola</strong> — the narrow corridor between <strong>Machhapuchhre (6,993 m)</strong> and <strong>Hiunchuli</strong> that is the only way into the sanctuary.",
        "The gorge opens without warning into the amphitheatre and the helicopter sets down at <strong>Annapurna Base Camp (4,130 m)</strong>. You have ten to fifteen minutes on the ground: <strong>Annapurna I (8,091 m)</strong> directly ahead, Annapurna South and Hiunchuli to the left, and the fluted ice of Machhapuchhre behind. It is cold, the air is thin, and it is worth every minute.",
        "The return flight retraces the gorge and lands back in Pokhara around two hours after you left, with the rest of the day free.",
      ),
    }),
  ],
};

export const muktinathDamodarHeli: Tour = {
  region: REGION,
  price: 1450,
  difficulty: "easy",
  maxAltitude: 4890,
  center: [84.02, 28.9],
  zoom: 9.5,
  content: {
    slug: "muktinath-damodar-kunda-helicopter-tour",
    title: "Muktinath Damodar Kunda Helicopter Tour – 1 Day",
    overview:
      "<p>This flight links the two most important Hindu pilgrimage sites of the trans-Himalaya in a single morning. <strong>Muktinath (3,760 m)</strong>, above the Kali Gandaki in Mustang, is one of the eight <em>svayam vyakta kshetras</em> and the only place where all five elements are said to be present; <strong>Damodar Kunda (4,890 m)</strong> is a chain of sacred lakes far out on the Tibetan plateau, source of the <em>shaligram</em> ammonites venerated across the subcontinent.</p><p>Reaching Damodar Kunda on foot takes a fortnight of camping across restricted country. By helicopter it is forty minutes from Muktinath over the Damodar Himal. The flight lands at both sites, allowing time for darshan at the Muktinath temple and its 108 water spouts before continuing north over the plateau.</p>",
    highlights: [
      ["Darshan at Muktinath", "Land at one of the eight self-manifested shrines of Vishnu, sacred to Hindus and Buddhists alike."],
      ["Damodar Kunda (4,890 m)", "Reach the sacred lakes on the Tibetan plateau, a fortnight's walk from the nearest road."],
      ["The 108 Water Spouts", "Time at the Muktinath temple complex, the Jwala Mai eternal flame and the Mukti Kunda pools."],
      ["The Damodar Himal", "Fly over a range of 6,000 m and 7,000 m peaks that almost nobody sees from the ground."],
      ["One Morning, Not Two Weeks", "Complete a pilgrimage that otherwise requires a full expedition."],
    ],
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: heliInclusions("Annapurna Conservation Area", ["Restricted area permit for the Damodar Kunda sector.", "Time on the ground at both Muktinath and Damodar Kunda."]),
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    fixedDepartureDay: "monday",
    itineraryDescription: "A one-day flight from Pokhara landing at Muktinath (3,760 m) and Damodar Kunda (4,890 m) on the Tibetan plateau.",
    inExDescription: "Hotel transfers, the helicopter flight, conservation and restricted area permits, landing fees and on-board oxygen are included, while insurance, offerings, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Nov, Apr-Jun",
    meta: {
      title: "Muktinath Damodar Kunda Helicopter Tour – 1 Day",
      description: "A one-day helicopter pilgrimage landing at Muktinath (3,760 m) and the sacred lakes of Damodar Kunda (4,890 m) in Upper Mustang.",
      keywords: "Muktinath helicopter tour, Damodar Kunda helicopter, Damodar Kunda darshan, Muktinath darshan, shaligram, Mustang helicopter",
      tags: "Helicopter Tours, Pilgrimage, Mustang, Muktinath, Nepal Tours",
    },
  },
  days: [
    flightDay({
      title: "Pokhara to Muktinath (3,760 m) and Damodar Kunda (4,890 m)",
      elevation: "4,890 m",
      accommodation: "Damodar Kunda",
      placeDescription: "A chain of sacred glacial lakes at 4,890 m on the Tibetan plateau, source of the shaligram ammonites.",
      ...DAMODAR,
      html: p(
        "An early pickup and a short drive to the helipad, then the aircraft climbs north out of Pokhara and enters the <strong>Kali Gandaki</strong> — the deepest gorge on earth, running between Dhaulagiri and Annapurna with both 8,000 m walls visible at once.",
        "Beyond Jomsom the landscape turns to high desert and the machine sets down at <strong>Muktinath (3,760 m)</strong>. There is time here for darshan: the pagoda temple of Vishnu, the <strong>108 bull-head water spouts</strong> fed by the Gandaki, the Jwala Mai shrine with its natural gas flame burning over water, and the Mukti Kunda pools.",
        "The second leg turns north-east over the <strong>Damodar Himal</strong>, crossing ridges and glaciers into country with no roads and no villages, and lands at <strong>Damodar Kunda (4,890 m)</strong> — a group of small lakes in a bare basin at the edge of the Tibetan plateau, sacred to Hindus and the source of the <em>shaligram</em> fossils venerated as a form of Vishnu.",
        "Time on the ground here is short because of the altitude. The return flight retraces the Kali Gandaki to Pokhara, landing before the wind gets up.",
      ),
    }),
  ],
};

export const muktinathHeliPokhara: Tour = {
  region: REGION,
  price: 850,
  difficulty: "easy",
  maxAltitude: 3760,
  center: [83.85, 28.55],
  zoom: 9.5,
  content: {
    slug: "muktinath-helicopter-tour-from-pokhara",
    title: "Muktinath Helicopter Tour from Pokhara",
    overview:
      "<p>The <strong>Muktinath helicopter tour from Pokhara</strong> is the quickest way to complete one of the most important pilgrimages in Hinduism. <strong>Muktinath (3,760 m)</strong> — <em>the place of liberation</em> — is one of the eight self-manifested shrines of Vishnu and one of the 108 Divya Desams, and it is equally sacred to Buddhists, who know it as Chumig Gyatsa.</p><p>The flight follows the <strong>Kali Gandaki</strong> north between Dhaulagiri and Annapurna, the deepest gorge in the world, and lands at the temple complex with enough time for darshan at the pagoda, the <strong>108 water spouts</strong>, the Jwala Mai eternal flame and the Mukti Kunda pools. Pilgrims who cannot manage the flight from Jomsom or the drive up from Muktinath's roadhead do this in a morning.</p>",
    highlights: [
      ["Darshan at Muktinath Temple", "Land beside one of the eight svayam vyakta kshetras of Vishnu, sacred to two religions."],
      ["The 108 Water Spouts", "Time at the bull-head spouts and the Mukti Kunda pools that pilgrims bathe in."],
      ["Jwala Mai Eternal Flame", "See the natural gas flame that burns over water in the shrine below the temple."],
      ["The Kali Gandaki Gorge", "Fly the deepest gorge on earth with Dhaulagiri and Annapurna on either side."],
      ["Accessible to Every Age", "No walking, no acclimatisation and no overnight stay — suitable for elderly pilgrims."],
    ],
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: heliInclusions("Annapurna Conservation Area", ["Around one hour on the ground at the Muktinath temple complex."]),
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    fixedDepartureDay: "tuesday",
    itineraryDescription: "A morning flight from Pokhara up the Kali Gandaki to Muktinath (3,760 m), with time on the ground for darshan.",
    inExDescription: "Hotel transfers, the helicopter flight, conservation area permit, landing fees and on-board oxygen are included, while insurance, offerings, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: {
      title: "Muktinath Helicopter Tour from Pokhara – Same Day Darshan",
      description: "A same-day helicopter pilgrimage from Pokhara to Muktinath (3,760 m), flying the Kali Gandaki gorge with time for temple darshan.",
      keywords: "Muktinath helicopter tour, Muktinath darshan Pokhara, Muktinath by helicopter, Kali Gandaki, Hindu pilgrimage Nepal",
      tags: "Helicopter Tours, Pilgrimage, Mustang, Muktinath, Nepal Tours",
    },
  },
  days: [
    flightDay({
      title: "Pokhara to Muktinath (3,760 m) and return",
      elevation: "3,760 m",
      accommodation: "Muktinath",
      placeDescription: "A temple complex at 3,760 m in Mustang, sacred to Hindus as Mukti Kshetra and to Buddhists as Chumig Gyatsa.",
      ...MUKTINATH,
      html: p(
        "Hotel pickup before dawn and a short drive to the helipad for the weight check and safety briefing.",
        "The aircraft climbs north from Pokhara and enters the <strong>Kali Gandaki</strong>, flying between <strong>Dhaulagiri (8,167 m)</strong> and <strong>Annapurna I (8,091 m)</strong> with both walls rising seven kilometres from the riverbed — the deepest gorge on earth, and the finest twenty minutes of flying in Nepal.",
        "Beyond Jomsom the green ends and Mustang's high desert begins. The helicopter lands close to the temple at <strong>Muktinath (3,760 m)</strong>, where you have around an hour: darshan at the pagoda of Vishnu, the <strong>108 bull-head spouts</strong> that pilgrims pass beneath, the <strong>Jwala Mai</strong> shrine where a natural gas flame burns above spring water, and the two Mukti Kunda pools.",
        "The return leg drops back down the gorge to Pokhara, landing mid-morning with the rest of the day free.",
      ),
    }),
  ],
};

export const ebcHelicopterTour: Tour = {
  region: REGION,
  price: 1350,
  difficulty: "easy",
  maxAltitude: 5545,
  center: [86.78, 27.88],
  zoom: 10,
  content: {
    slug: "everest-base-camp-helicopter-tour",
    title: "Everest Base Camp Helicopter Tour with Kala Patthar Landing",
    overview:
      "<p>The <strong>Everest Base Camp helicopter tour</strong> is the most requested day trip in Nepal, and with good reason: it covers in four hours what the trek takes twelve days to reach. The aircraft leaves Kathmandu at first light, follows the Dudh Koshi into the Khumbu, and lands on <strong>Kala Patthar (5,545 m)</strong> — the black rock ridge that gives the closest ground-level view of Everest's south face.</p><p>Because a five-seat machine cannot lift a full load at that height, the flight stages through <strong>Lukla</strong> or Pheriche and shuttles two or three passengers at a time to the top. Breakfast follows on the terrace of the <strong>Everest View Hotel</strong> at Syangboche (3,880 m), looking straight at Everest, Lhotse and Ama Dablam, before the return leg down the valley.</p>",
    highlights: [
      ["Land on Kala Patthar (5,545 m)", "Stand on the ridge with the closest ground view of Everest's south-west face."],
      ["Everest Base Camp from the Air", "Fly low over the Khumbu Icefall and the base camp tents on the glacier."],
      ["Breakfast at the Everest View Hotel", "Eat on the terrace at 3,880 m facing Everest, Lhotse, Nuptse and Ama Dablam."],
      ["The Whole Khumbu in a Morning", "Namche, Tengboche, Pheriche and the Khumbu Glacier in a single flight."],
      ["No Trek, No Acclimatisation", "Reach 5,545 m without the twelve days on foot the trail demands."],
    ],
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: heliInclusions("Sagarmatha", ["Breakfast on the terrace of the Everest View Hotel at Syangboche.", "Khumbu Pasang Lhamu Rural Municipality permit."]),
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    addons: [
      {
        title: "Private Charter Upgrade",
        description: "Take the whole aircraft for your party rather than a seat on a shared flight, departing on your own schedule with no waiting for other passengers.",
        unit: "flight",
        pricePerUnit: 4500,
      },
    ],
    fixedDepartureDay: "wednesday",
    itineraryDescription: "A four-hour morning flight from Kathmandu with a landing on Kala Patthar (5,545 m) and breakfast at the Everest View Hotel.",
    inExDescription: "Hotel transfers, the helicopter flight, national park and municipality permits, landing fees, breakfast at Syangboche and on-board oxygen are included, while insurance, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: {
      title: "Everest Base Camp Helicopter Tour with Kala Patthar Landing",
      description: "A 4-hour Everest helicopter tour from Kathmandu with a Kala Patthar landing at 5,545 m and breakfast at the Everest View Hotel.",
      keywords: "Everest Base Camp helicopter tour, Kala Patthar landing, Everest helicopter Kathmandu, Everest View Hotel breakfast, Khumbu flight",
      tags: "Helicopter Tours, Everest, Khumbu, Scenic Flight, Nepal Tours",
    },
  },
  days: [
    flightDay({
      title: "Kathmandu to Kala Patthar (5,545 m), Everest View Hotel and return",
      elevation: "5,545 m",
      accommodation: "Kala Patthar",
      placeDescription: "The black rock ridge at 5,545 m above Gorakshep, with the closest ground view of Everest's south face.",
      ...KALA_PATTHAR,
      html: p(
        "Hotel pickup around 5.30 am and a short drive to the domestic terminal for the briefing and weight check.",
        "The aircraft leaves Kathmandu at first light, crosses the ridges east of the valley and drops into the <strong>Dudh Koshi</strong>, climbing the gorge past Lukla with the river far below. It refuels and re-stages at <strong>Lukla</strong> or Pheriche, from where the group is lifted to the top in two shuttles of two or three passengers — the aircraft cannot carry five at that altitude.",
        "The high leg flies over Namche, Tengboche and the moraine of the <strong>Khumbu Glacier</strong>, banking above <strong>Everest Base Camp</strong> and the Khumbu Icefall before setting down on <strong>Kala Patthar (5,545 m)</strong>.",
        "You have ten to fifteen minutes on the ridge. <strong>Everest (8,849 m)</strong> stands directly ahead above the Icefall, with <strong>Nuptse</strong>, <strong>Lhotse</strong> and <strong>Pumori</strong> around you. Move slowly — the air here holds half the oxygen of sea level.",
        "The descent stops at the <strong>Everest View Hotel</strong> at Syangboche (3,880 m) for breakfast on the terrace, then the aircraft flies back down the valley to Kathmandu, landing late morning.",
      ),
    }),
  ],
};

export const langtangHelicopterTour: Tour = {
  region: REGION,
  price: 950,
  difficulty: "easy",
  maxAltitude: 3870,
  center: [85.45, 28.15],
  zoom: 10,
  content: {
    slug: "langtang-helicopter-tour-from-kathmandu",
    title: "Langtang Helicopter Tour from Kathmandu – 1 Day",
    overview:
      "<p>Langtang is the closest high valley to Kathmandu and the least flown, which makes this the quietest of the helicopter days. The aircraft crosses the valley rim, follows the Trishuli north to Syabrubesi and turns east into the <strong>Langtang valley</strong> — a corridor of forest and pasture running under <strong>Langtang Lirung (7,227 m)</strong> to the Tibetan border.</p><p>The landing is at <strong>Kyanjin Gompa (3,870 m)</strong>, the last village in the valley, with its monastery, yak cheese factory and a ring of peaks on every side. The flight passes over the site of the old Langtang village, destroyed by an avalanche in the 2015 earthquake and since rebuilt — a part of the valley's story that the pilots explain as you go.</p>",
    highlights: [
      ["Land at Kyanjin Gompa (3,870 m)", "Stand in the last village of the Langtang valley beneath Langtang Lirung."],
      ["Langtang Lirung (7,227 m)", "Fly beneath the highest peak of the range, its glaciers hanging over the valley floor."],
      ["The Closest High Valley to Kathmandu", "Reach genuine high country twenty-five minutes' flying from the capital."],
      ["The Rebuilt Langtang Village", "See the site of the 2015 avalanche and the village the community rebuilt beside it."],
      ["Yak Cheese at 3,870 m", "Time on the ground at the Swiss-founded cheese factory and the old monastery."],
    ],
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: heliInclusions("Langtang", ["Around thirty minutes on the ground at Kyanjin Gompa."]),
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    fixedDepartureDay: "thursday",
    itineraryDescription: "A one-day flight from Kathmandu into the Langtang valley, landing at Kyanjin Gompa (3,870 m) beneath Langtang Lirung.",
    inExDescription: "Hotel transfers, the helicopter flight, national park permit, landing fees and on-board oxygen are included, while insurance, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: {
      title: "Langtang Helicopter Tour from Kathmandu – 1 Day",
      description: "A one-day helicopter tour from Kathmandu into the Langtang valley, landing at Kyanjin Gompa (3,870 m) below Langtang Lirung.",
      keywords: "Langtang helicopter tour, Kyanjin Gompa helicopter, Langtang Lirung, helicopter tour Kathmandu, Langtang valley flight",
      tags: "Helicopter Tours, Langtang, Scenic Flight, Nepal Tours",
    },
  },
  days: [
    flightDay({
      title: "Kathmandu to Kyanjin Gompa (3,870 m) and return",
      elevation: "3,870 m",
      accommodation: "Kyanjin Gompa",
      placeDescription: "The last village in the Langtang valley at 3,870 m, with a monastery, a cheese factory and peaks on every side.",
      ...KYANJIN,
      html: p(
        "Pickup from your hotel shortly after dawn and a short drive to the domestic terminal for the briefing and weight check.",
        "The aircraft lifts out of the Kathmandu valley over the northern rim and follows the <strong>Trishuli</strong> upstream past Dhunche and Syabrubesi, then turns east into the <strong>Langtang valley</strong>. The change is immediate — terraced hillsides give way to forest, then to pasture and moraine, with <strong>Langtang Lirung (7,227 m)</strong> and its hanging glaciers filling the left-hand windows.",
        "On the way up the pilot points out the site of the old <strong>Langtang village</strong>, buried by an ice and rock avalanche in the April 2015 earthquake. The new village stands beside it, rebuilt by the survivors.",
        "The helicopter lands at <strong>Kyanjin Gompa (3,870 m)</strong> for around half an hour — long enough to walk to the old monastery, look into the Swiss-founded yak cheese factory, and stand in the bowl of peaks that closes the valley: Kimshung, Langshisa Ri and the Tibetan border wall.",
        "The return flight retraces the valley and lands back in Kathmandu before the wind gets up.",
      ),
    }),
  ],
};

/** The six point-to-point charters share their copy; only the leg changes. */
type Leg = {
  slug: string; title: string; price: number; from: string; to: string;
  minutes: string; alt: number; place: { lng: number; lat: number };
  accommodation: string; placeDescription: string; overview: string;
  highlights: [string, string][]; dayTitle: string; dayHtml: string;
  meta: { title: string; description: string; keywords: string };
};

const flightLegs: Leg[] = [
  {
    slug: "lukla-to-kathmandu-helicopter-flight",
    title: "Lukla to Kathmandu Helicopter Flight – 1 Hour",
    price: 500, from: "Lukla", to: "Kathmandu", minutes: "50 minutes to 1 hour", alt: 2840,
    place: LUKLA, accommodation: "Lukla",
    placeDescription: "The Khumbu's gateway town at 2,840 m, built around the airstrip that serves the Everest region.",
    overview:
      "<p>The <strong>Lukla to Kathmandu helicopter flight</strong> exists because the fixed-wing schedule does not always cooperate. Lukla's runway is short, sloped and weather-dependent, and when the morning window closes the aeroplanes stop while helicopters can often still work — which is why trekkers coming off the Everest trail with a connecting international flight book this leg.</p><p>The flight takes fifty minutes to an hour down the Dudh Koshi and over the middle hills to Kathmandu, and it is a considerably better view than the aeroplane gives. It is sold by the seat on a shared flight or as a private charter, and it can be arranged at short notice from Lukla when the fixed-wing backlog builds up.</p>",
    highlights: [
      ["A Reliable Way Off the Trail", "Fly when the fixed-wing schedule is backed up and you have a connection to make."],
      ["The Dudh Koshi from the Air", "Follow the gorge you walked, with Lukla's runway falling away beneath you."],
      ["Fifty Minutes to Kathmandu", "Land in the capital in under an hour rather than waiting days for a seat."],
      ["Seat or Charter", "Take one place on a shared flight or the whole aircraft on your own schedule."],
      ["Short-Notice Booking", "Can usually be arranged from Lukla the same morning when weather allows."],
    ],
    dayTitle: "Lukla (2,840 m) to Kathmandu (1,400 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Lukla to Kathmandu Helicopter Flight – 1 Hour",
      description: "A helicopter flight from Lukla to Kathmandu in under an hour, by the seat or as a private charter, when fixed-wing flights are backed up.",
      keywords: "Lukla to Kathmandu helicopter, Lukla helicopter flight, Everest helicopter transfer, Lukla flight cancelled, Khumbu helicopter",
    },
  },
  {
    slug: "kathmandu-to-lukla-helicopter-flight",
    title: "Kathmandu to Lukla Helicopter Flight – 1 Hour",
    price: 500, from: "Kathmandu", to: "Lukla", minutes: "50 minutes to 1 hour", alt: 2840,
    place: LUKLA, accommodation: "Lukla",
    placeDescription: "The Khumbu's gateway town at 2,840 m, built around the airstrip that serves the Everest region.",
    overview:
      "<p>The <strong>Kathmandu to Lukla helicopter flight</strong> is the dependable way onto the Everest trail. Fixed-wing flights to Lukla run on a narrow morning window and are cancelled or diverted to Manthali for days at a time in poor weather; a helicopter has a wider envelope and can usually get in when the aeroplanes cannot.</p><p>The leg takes fifty minutes to an hour, climbing east out of the Kathmandu valley and up the <strong>Dudh Koshi</strong> gorge to the airstrip at 2,840 m. Trekkers on a fixed schedule use it to protect the start of an itinerary, and it removes the pre-dawn drive to Manthali that the fixed-wing schedule otherwise forces on you in the busy seasons.</p>",
    highlights: [
      ["Protect the Start of Your Trek", "Get onto the trail on day one instead of losing days to a cancelled Lukla flight."],
      ["No Manthali Drive", "Skip the four-hour pre-dawn transfer that the fixed-wing schedule requires in peak season."],
      ["The Dudh Koshi Gorge", "Climb the valley with the river below and the Khumbu peaks opening ahead."],
      ["Wider Weather Window", "Helicopters operate in conditions that ground the fixed-wing aircraft."],
      ["Seat or Charter", "Take one place on a shared flight or the whole aircraft on your own schedule."],
    ],
    dayTitle: "Kathmandu (1,400 m) to Lukla (2,840 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Kathmandu to Lukla Helicopter Flight – 1 Hour",
      description: "A helicopter flight from Kathmandu to Lukla in under an hour, avoiding the Manthali transfer and fixed-wing cancellations.",
      keywords: "Kathmandu to Lukla helicopter, Lukla helicopter flight, Everest trek transfer, Manthali alternative, Khumbu helicopter",
    },
  },
  {
    slug: "gorakshep-to-kathmandu-helicopter-flight",
    title: "Gorakshep to Kathmandu Helicopter Flight – 3 Hours",
    price: 1100, from: "Gorakshep", to: "Kathmandu", minutes: "around 3 hours including staging", alt: 5164,
    place: GORAKSHEP, accommodation: "Gorakshep",
    placeDescription: "The last settlement before Everest Base Camp, on the sandy flat at 5,164 m below Kala Patthar.",
    overview:
      "<p>The <strong>Gorakshep to Kathmandu helicopter flight</strong> takes trekkers off the Everest trail at its highest point. <strong>Gorakshep (5,164 m)</strong> is the last settlement before base camp, and flying out from here saves the four to five days of walking back down the valley to Lukla.</p><p>Because a helicopter cannot lift a full load at 5,164 m, the flight stages down to Pheriche or Lukla and reforms there before continuing to Kathmandu — around three hours door to door. It is used by trekkers who are short of time, by anyone struggling with the altitude, and by groups who would simply rather spend the days elsewhere.</p>",
    highlights: [
      ["Fly Out From 5,164 m", "Leave the trail at its highest settlement rather than walking four days back to Lukla."],
      ["Save Four to Five Days", "Turn the descent from base camp into a single morning."],
      ["Everest and the Khumbu Glacier", "Lift off with the Icefall, Nuptse and Pumori around you."],
      ["A Practical Altitude Exit", "The route most often used when someone is not coping with the height."],
      ["Staged for Safety", "The aircraft shuttles down to Pheriche or Lukla before the long leg, as the load calculation requires."],
    ],
    dayTitle: "Gorakshep (5,164 m) to Kathmandu (1,400 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Gorakshep to Kathmandu Helicopter Flight – 3 Hours",
      description: "A helicopter flight out of Gorakshep (5,164 m) to Kathmandu, saving four to five days of walking down from Everest Base Camp.",
      keywords: "Gorakshep to Kathmandu helicopter, Everest Base Camp helicopter out, EBC helicopter return, Gorakshep helicopter, Khumbu evacuation",
    },
  },
  {
    slug: "gorakshep-to-lukla-helicopter-flight",
    title: "Gorakshep to Lukla Helicopter Flight – 20 Minutes",
    price: 550, from: "Gorakshep", to: "Lukla", minutes: "around 20 minutes", alt: 5164,
    place: GORAKSHEP, accommodation: "Gorakshep",
    placeDescription: "The last settlement before Everest Base Camp, on the sandy flat at 5,164 m below Kala Patthar.",
    overview:
      "<p>The short leg from <strong>Gorakshep (5,164 m)</strong> down to <strong>Lukla (2,840 m)</strong> takes about twenty minutes and removes the four days of walking that separate them. It is the cheapest way to shorten an Everest Base Camp trek, and the one most groups choose when they want to fly part of the descent but keep the fixed-wing flight to Kathmandu they have already booked.</p><p>The flight drops the length of the Khumbu valley — Lobuche, Dingboche, Pheriche, Tengboche and Namche pass below in a few minutes — and lands at the airstrip in time for the morning fixed-wing departures. Load limits at Gorakshep mean the aircraft usually takes two or three passengers per lift.</p>",
    highlights: [
      ["Twenty Minutes Instead of Four Days", "Cover the descent from base camp to Lukla in a single short flight."],
      ["The Whole Khumbu Below You", "Lobuche, Pheriche, Tengboche and Namche in the space of a few minutes."],
      ["Connect to the Morning Flights", "Land at Lukla in time for the fixed-wing departures to Kathmandu."],
      ["The Cheapest Way to Shorten the Trek", "Fly the section that is hardest on the knees and keep the rest of your plans."],
      ["Quick to Arrange", "Can usually be organised from Gorakshep the evening before, weather allowing."],
    ],
    dayTitle: "Gorakshep (5,164 m) to Lukla (2,840 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Gorakshep to Lukla Helicopter Flight – 20 Minutes",
      description: "A 20-minute helicopter flight from Gorakshep (5,164 m) to Lukla, replacing four days of walking down from Everest Base Camp.",
      keywords: "Gorakshep to Lukla helicopter, EBC helicopter Lukla, Everest Base Camp fly out, Khumbu helicopter transfer",
    },
  },
  {
    slug: "kalapatthar-to-kathmandu-helicopter-flight",
    title: "Kalapatthar to Kathmandu Helicopter Flight – 3 Hours",
    price: 1150, from: "Kala Patthar", to: "Kathmandu", minutes: "around 3 hours including staging", alt: 5545,
    place: KALA_PATTHAR, accommodation: "Kala Patthar",
    placeDescription: "The black rock ridge at 5,545 m above Gorakshep, with the closest ground view of Everest's south face.",
    overview:
      "<p>This is the same exit as the Gorakshep flight, taken from a few hundred metres higher. <strong>Kala Patthar (5,545 m)</strong> is the viewpoint most Everest Base Camp treks climb on their final morning, and picking the group up there rather than back down at Gorakshep means the trek finishes at its high point with the aircraft waiting.</p><p>The flight stages down to Pheriche or Lukla to reform — the load calculation at 5,545 m allows only two or three passengers per lift — and then runs the long leg to Kathmandu, around three hours door to door. It is the most efficient possible end to an Everest trek and, on a clear morning, the most spectacular.</p>",
    highlights: [
      ["Fly Out From 5,545 m", "Finish the trek at the viewpoint rather than walking back down to Lukla."],
      ["Everest's South Face at Eye Level", "Lift off with the Icefall, Nuptse, Lhotse and Pumori all around."],
      ["Save Four to Five Days", "Replace the entire descent with a single morning."],
      ["The Highest Passenger Pickup in Nepal", "A landing site above 5,500 m, flown only in the early morning window."],
      ["Staged for Safety", "The aircraft shuttles down to Pheriche or Lukla before the long leg, as the load requires."],
    ],
    dayTitle: "Kala Patthar (5,545 m) to Kathmandu (1,400 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Kalapatthar to Kathmandu Helicopter Flight – 3 Hours",
      description: "A helicopter pickup from Kala Patthar (5,545 m) flying to Kathmandu, the most efficient end to an Everest Base Camp trek.",
      keywords: "Kalapatthar to Kathmandu helicopter, Kala Patthar helicopter pickup, Everest trek fly out, EBC helicopter return",
    },
  },
  {
    slug: "namche-to-kathmandu-helicopter-flight",
    title: "Namche to Kathmandu Helicopter Flight – 2 Hours",
    price: 700, from: "Namche Bazaar", to: "Kathmandu", minutes: "around 2 hours including staging", alt: 3440,
    place: NAMCHE, accommodation: "Namche Bazaar",
    placeDescription: "The main town of the Khumbu at 3,440 m, built in a horseshoe bowl above the Dudh Koshi.",
    overview:
      "<p><strong>Namche Bazaar (3,440 m)</strong> is the natural place to break an Everest trek, and this flight takes you straight from it to Kathmandu in about two hours. It saves the two days of walking down to Lukla and removes any dependence on the Lukla fixed-wing schedule, which is the part of an Everest itinerary most likely to go wrong.</p><p>The leg is flown with a stop at Lukla to refuel and reform, then follows the Dudh Koshi south and crosses the middle hills to the capital. Groups use it when someone in the party is unwell, when the trek has run late, or simply to be certain of making an international connection.</p>",
    highlights: [
      ["Skip the Lukla Schedule Entirely", "Fly from Namche to Kathmandu without depending on the fixed-wing window."],
      ["Save Two Days of Walking", "Remove the descent to Lukla and the night before the flight out."],
      ["The Khumbu from Above Namche", "Lift out of the horseshoe bowl with Kongde Ri and Thamserku on either side."],
      ["Useful When Plans Slip", "The standard answer when a trek runs late or someone needs to get down."],
      ["Seat or Charter", "Take one place on a shared flight or the whole aircraft on your own schedule."],
    ],
    dayTitle: "Namche Bazaar (3,440 m) to Kathmandu (1,400 m) by helicopter",
    dayHtml: "",
    meta: {
      title: "Namche to Kathmandu Helicopter Flight – 2 Hours",
      description: "A helicopter flight from Namche Bazaar (3,440 m) to Kathmandu in around two hours, skipping the walk to Lukla and the fixed-wing schedule.",
      keywords: "Namche to Kathmandu helicopter, Namche Bazaar helicopter, Everest trek helicopter out, Khumbu helicopter transfer",
    },
  },
];

const legTour = (l: Leg): Tour => ({
  region: REGION,
  price: l.price,
  difficulty: "easy",
  maxAltitude: l.alt,
  center: [l.place.lng, l.place.lat],
  zoom: 9.5,
  content: {
    slug: l.slug,
    title: l.title,
    overview: l.overview,
    highlights: l.highlights,
    sections: HELI_SECTIONS,
    faqs: HELI_FAQS,
    inclusions: {
      transport: [`Helicopter flight from ${l.from} to ${l.to}, ${l.minutes}.`, "Ground transfer between the helipad and your hotel at the Kathmandu end."],
      entrance: "Sagarmatha National Park and Khumbu Pasang Lhamu Rural Municipality permits where required.",
      guide: "Experienced mountain pilot and ground handling at both ends.",
      extra: ["Supplementary oxygen and a first aid kit carried on board.", "Coordination with the fixed-wing schedule where a connection is involved."],
    },
    exclusions: heliExclusions,
    privateVehicleAddon: false,
    addons: [
      {
        title: "Private Charter Upgrade",
        description: `Take the whole aircraft for your party on the ${l.from} to ${l.to} leg rather than a seat on a shared flight, departing on your own schedule.`,
        unit: "flight",
        pricePerUnit: Math.round((l.price * 3.6) / 50) * 50,
      },
    ],
    fixedDepartureDay: "friday",
    itineraryDescription: `A ${l.minutes} helicopter transfer from ${l.from} to ${l.to}, flown in the morning weather window.`,
    inExDescription: "The helicopter leg, national park permits, landing fees, ground transfer at the Kathmandu end and on-board oxygen are included, while insurance, meals, personal expenses and any cost from a weather postponement are excluded.",
    bestTime: "Oct-Dec, Mar-May",
    meta: { ...l.meta, tags: "Helicopter Flights, Everest, Khumbu, Transfer, Nepal Tours" },
  },
  days: [
    flightDay({
      title: l.dayTitle,
      elevation: `${l.alt.toLocaleString("en-US")} m`,
      accommodation: l.accommodation,
      placeDescription: l.placeDescription,
      ...l.place,
      html: p(
        `The flight operates in the <strong>morning window</strong>, usually between 6 and 9 am, because valley winds close the high landing sites later in the day. Your pilot confirms the departure the evening before and again at first light once the weather report is in.`,
        `Boarding at ${l.from} takes a few minutes: a safety briefing, a weight check and daypacks stowed. Where the departure point is high, the aircraft carries two or three passengers per lift and shuttles down to a lower staging point before the long leg — this is the load calculation working as it should, not a change of plan.`,
        `The route follows the <strong>Dudh Koshi</strong> and the Khumbu ridgelines, which on a clear morning is one of the finest pieces of flying in Nepal. Total time is ${l.minutes}.`,
        `On arrival at ${l.to} our ground staff meet the aircraft and, at the Kathmandu end, transfer you to your hotel or on to the international terminal.`,
      ),
    }),
  ],
});

export const helicopterTours: Tour[] = [
  abcHelicopterTour,
  muktinathDamodarHeli,
  muktinathHeliPokhara,
  ebcHelicopterTour,
  langtangHelicopterTour,
  ...flightLegs.map(legTour),
];
