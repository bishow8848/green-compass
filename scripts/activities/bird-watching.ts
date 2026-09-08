/**
 * Region: Bird Watching in Nepal.
 *
 * Nepal has over eight hundred and eighty recorded species in an area the size
 * of England, because the country runs from 60 m on the Terai to 8,848 m in
 * about a hundred and fifty kilometres and carries every habitat in between.
 * These three trips cover the three most productive accessible zones — the
 * valley's mid-hill cloud forest, the Terai sal forest and grassland, and the
 * Pokhara lakes — without repeating Koshi Tappu, which is sold as its own trip
 * under Jungle Safari.
 */
import { CHITWAN, POKHARA, PKR_PLACE, p, type Tour } from "../tours/types";

const REGION = "Bird Watching in Nepal";
const PHULCHOWKI = { lng: 85.39, lat: 27.575 };
const GODAVARI = { lng: 85.3833, lat: 27.5942 };
const BEGNAS = { lng: 84.09, lat: 28.17 };

const ETHICS_SECTION = {
  heading: "How We Guide, and Birding Ethics",
  content:
    "<p>Every trip in this region runs with a <strong>specialist bird guide</strong> rather than a general naturalist — someone who birds for a living, knows the calls, and can put you onto a skulking warbler rather than pointing at a raptor. Groups are kept to six or fewer, because a line of twelve people does not see anything shy.</p><p>We do not use <strong>call playback</strong> to draw territorial birds, except sparingly and never for a threatened species in the breeding season; it stresses the bird and it is increasingly restricted in Nepal's protected areas. Nests are not approached, flash is not used on roosting birds, and habitat is not cut or moved for a photograph. If your guide asks you to stay on the path, that is why.</p>",
};

/** A day on Phulchowki, the best mid-hill birding within reach of the city. */
export const kathmanduValleyBirding: Tour = {
  region: REGION,
  price: 115,
  difficulty: "moderate",
  maxAltitude: 2782,
  center: [85.39, 27.58],
  zoom: 12,
  content: {
    slug: "bird-watching-in-kathmandu-valley",
    title: "Bird Watching in Kathmandu Valley",
    overview:
      "<p><strong>Phulchowki (2,782 m)</strong> is the highest point on the Kathmandu valley rim and the single best day's birding within reach of the city — around <strong>three hundred species</strong> recorded on one hill, with a road that climbs through every forest zone from subtropical broadleaf at Godavari to oak and rhododendron cloud forest at the summit. Very few capital cities anywhere have anything comparable half an hour from the ring road.</p><p>The day works the hill from the bottom up, birding on foot along the road and the side trails with the vehicle leapfrogging ahead. Specialities include <strong>spiny babbler</strong> — Nepal's only endemic bird — hoary-throated barwing, rufous-bellied niltava, black-throated parrotbill, cutia and a long list of laughingthrushes, minivets, warblers and woodpeckers. It suits a serious birder with one spare day and a complete beginner equally well.</p>",
    highlights: [
      ["Three Hundred Species on One Hill", "Phulchowki holds more recorded species than most whole countries manage in a comparable area."],
      ["The Spiny Babbler", "Nepal's only endemic bird, findable on the lower slopes with a guide who knows the call."],
      ["Every Forest Zone in a Morning", "Subtropical broadleaf at 1,500 m through to oak and rhododendron cloud forest at 2,782 m."],
      ["Half an Hour from Thamel", "Godavari is on the valley's southern rim, so the day costs no travel time at all."],
      ["A Specialist Bird Guide", "Someone who birds for a living, in a group of six or fewer."],
    ],
    sections: [
      {
        heading: "The Hill and How the Day Runs",
        content:
          "<p>The day starts at first light at the <strong>Godavari Botanical Garden</strong> (1,515 m) at the foot of the hill, which is itself excellent — the garden and the marsh behind it hold babblers, sunbirds, flycatchers and the best chance at <strong>spiny babbler</strong> in the scrub above.</p><p>From there the road climbs 1,270 m to the summit through changing forest, and the technique is to bird on foot in the productive stretches while the vehicle moves ahead to meet you. Upper slopes bring the cloud forest specialities — <strong>hoary-throated barwing</strong>, cutia, black-throated parrotbill, golden-breasted fulvetta, rufous-bellied niltava and mixed feeding flocks that can produce twenty species in ten minutes. The summit has a shrine, a radar station and, on a clear winter morning, Langtang and Ganesh Himal along the northern horizon.</p>",
      },
      ETHICS_SECTION,
      {
        heading: "Season and What to Expect",
        content:
          "<p><strong>February to April</strong> is the best period: resident birds are in song and display, the rhododendron is in flower on the upper hill from March, and altitudinal migrants are moving. <strong>October to December</strong> is the other good window, with clear air, wintering thrushes and accentors, and the mountain views at their sharpest.</p><p>The <strong>monsoon</strong> from June to September is leech-heavy and often cloud-bound on the upper hill, though the birding is still good if you can tolerate the conditions. Realistically a good day yields <strong>sixty to ninety species</strong>; a very good spring day with active flocks can exceed a hundred. A quiet winter morning may give forty, which is the nature of birding rather than a fault of the site.</p>",
      },
      {
        heading: "Fitness, What to Bring and Access",
        content:
          "<p>This is a <strong>moderate</strong> day rather than an easy one. You walk perhaps six to ten kilometres in total, much of it uphill on a rough road at between 1,500 m and 2,780 m, stopping constantly. It is not fast walking but it is a full day on your feet. Anyone who would rather bird from the vehicle can — tell us and we will plan the day that way.</p><p>Bring <strong>binoculars</strong> — 8x42 or 10x42 is the right choice — a field guide to the birds of Nepal or the Indian subcontinent, walking shoes with grip, a fleece and a waterproof for the summit, sunscreen, water and a packed lunch, which we provide. Leech socks are worth having from May to September. The guide carries a spotting scope.</p>",
      },
    ],
    faqs: [
      { question: "What is the spiny babbler?", answer: "Nepal's only endemic bird, found nowhere else on earth. It is a skulking, scrub-loving babbler that was considered lost for a century until it was rediscovered in 1948, and it lives on the lower slopes of exactly this hill. Finding it depends on the call, which is why the guide matters more than the binoculars." },
      { question: "How many species will we see?", answer: "Sixty to ninety on a good day, and over a hundred on a very good spring morning with active mixed flocks. A quiet winter day might give forty. Around three hundred species have been recorded on Phulchowki in total, so what you see depends on the season, the weather and a certain amount of luck." },
      { question: "Do I need to be an experienced birder?", answer: "No. The guide will pitch the day to whoever is on it, and complete beginners generally have an excellent time because the sheer variety is startling. If you are a serious lister, say so at booking and we will assign a guide who will work the specialities rather than the easy birds." },
      { question: "How much walking is involved?", answer: "Six to ten kilometres, mostly uphill on a rough road between 1,500 m and 2,780 m, with constant stops. It is a full day on your feet at a slow pace rather than a hard walk. If that is not workable, we can run the day mostly from the vehicle with short walks at the productive spots — just tell us." },
      { question: "When is the best time of year?", answer: "February to April for song, display and rhododendron; October to December for clear air, wintering species and mountain views. The monsoon is productive but leechy and often cloud-bound above 2,000 m. May is hot at the bottom and pleasant at the top." },
      { question: "Do you use call playback?", answer: "Sparingly, and never for a threatened species in the breeding season. Playback stresses territorial birds and is increasingly restricted in Nepal's protected areas. Our guides prefer to work calls and habitat, which takes longer and is a good deal more satisfying when it works." },
      { question: "Is a scope necessary?", answer: "The guide carries one, so no. Bring your own binoculars, which matter far more — 8x42 or 10x42. Most of the birding here is in forest at close to medium range where binoculars do the work, and the scope comes out for raptors, the summit views and anything sitting up." },
      { question: "Can we combine this with anything else?", answer: "Yes. Godavari is on the southern rim near Patan, so the day pairs naturally with a Patan Durbar Square afternoon if you finish early, and it works well as an acclimatisation day before a trek. Longer birding trips to Chitwan or Koshi Tappu combine with it easily." },
    ],
    inclusions: {
      transport: ["Private vehicle with driver for the full day, including hotel pickup and drop-off, leapfrogging up the hill as you walk."],
      entrance: "Godavari Botanical Garden entry and the Phulchowki access fee.",
      guide: "A specialist bird guide, in a group of six or fewer, with a spotting scope.",
      meals: ["A packed lunch and hot drinks on the hill."],
      extra: ["A checklist of the birds of the Kathmandu valley, and use of the guide's scope."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast and dinner.",
      extra: ["Binoculars, which you should bring.", "Field guide."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "tuesday",
    itineraryDescription:
      "A full day birding Phulchowki and the Godavari Botanical Garden on the Kathmandu valley rim, from subtropical broadleaf to cloud forest at 2,782 m.",
    inExDescription:
      "Private vehicle for the day, a specialist bird guide with a scope, entry fees, a packed lunch and government taxes are included, while binoculars, a field guide, other meals and personal expenses are excluded.",
    bestTime: "Feb-Apr, Oct-Dec",
    meta: {
      title: "Bird Watching in Kathmandu Valley – Phulchowki Day Trip",
      description:
        "A full day birding Phulchowki and Godavari on the Kathmandu valley rim, with around three hundred recorded species and Nepal's endemic spiny babbler.",
      keywords:
        "bird watching Kathmandu, Phulchowki birding, Godavari bird watching, spiny babbler Nepal, birding day trip Nepal, Kathmandu valley birds, Nepal endemic bird",
      tags: "Bird Watching in Kathmandu Valley, Bird Watching in Nepal, Phulchowki, Birding, Nepal Activities",
    },
  },
  days: [
    {
      title: "Godavari (1,515 m) and Phulchowki (2,782 m) — A Full Day's Birding",
      elevation: "2,782 m",
      accommodation: "Phulchowki",
      placeDescription: "The highest point on the Kathmandu valley rim, with around three hundred recorded bird species.",
      ...PHULCHOWKI,
      html: p(
        "A first-light pickup from your hotel and a half-hour drive to the <strong>Godavari Botanical Garden (1,515 m)</strong> on the valley's southern rim, where the day starts among babblers, sunbirds and flycatchers, with the scrub above the garden the best chance at Nepal's endemic <strong>spiny babbler</strong>.",
        "From there you work up the <strong>Phulchowki</strong> road on foot through the productive stretches, the vehicle leapfrogging ahead, as subtropical broadleaf gives way to oak and then rhododendron cloud forest.",
        "The upper hill brings the specialities — hoary-throated barwing, cutia, black-throated parrotbill, golden-breasted fulvetta and mixed feeding flocks that can produce twenty species in ten minutes.",
        "Lunch on the hill, the summit at <strong>2,782 m</strong> with Langtang on the horizon on a clear day, and back to your hotel by early evening.",
      ),
    },
  ],
};

/** Chitwan led by a bird guide rather than a general naturalist. */
export const chitwanBirding: Tour = {
  region: REGION,
  price: 395,
  difficulty: "easy",
  maxAltitude: 200,
  center: [84.5, 27.58],
  zoom: 11,
  content: {
    slug: "bird-watching-in-chitwan-national-park",
    title: "Bird Watching in Chitwan National Park",
    overview:
      "<p><strong>Chitwan</strong> has over <strong>six hundred recorded bird species</strong>, which is around two-thirds of Nepal's entire list, and this trip works the park as a birding destination rather than a rhino-spotting one. Three days with a specialist guide covers the four habitats that make the list so long — riverine forest along the Rapti and Narayani, sal forest, the tall elephant grass, and the oxbow lakes at Bis Hazari Tal and Lami Tal.</p><p>The specialities are the reason serious birders come: <strong>Bengal florican</strong> in the grassland, giant hornbill, slaty-legged crake, the grassland warblers, and in winter the ruby-cheeked sunbird and a long list of waterfowl. It is a completely different trip from the standard jungle safari — early starts, slow walking, boats and hides — and it happens to produce rhino and gharial anyway.</p>",
    highlights: [
      ["Six Hundred Species", "Around two-thirds of Nepal's entire bird list, in one park."],
      ["Bengal Florican in the Grassland", "One of the world's rarest bustards, with a small resident Chitwan population."],
      ["Four Habitats in Three Days", "Riverine forest, sal forest, tall grassland and the oxbow lakes at Bis Hazari Tal."],
      ["Bird-Led, Not Safari-Led", "Early starts, slow walking, boats and hides, with a specialist guide in a group of six or fewer."],
      ["Rhino and Gharial Anyway", "The mammals turn up regardless — you are just not organising the day around them."],
    ],
    sections: [
      {
        heading: "The Habitats and What Each Holds",
        content:
          "<p><strong>Riverine forest</strong> along the Rapti and Narayani is the richest — hornbills, trogons, flycatchers, woodpeckers, and the best chance at the ruby-cheeked sunbird. The <strong>sal forest</strong> holds a different set: minivets, drongos, woodshrikes and the resident owls. <strong>Tall elephant grass</strong> is where the specialities are, and it is hard work: Bengal florican, grassland warblers and the francolins.</p><p>The <strong>oxbow lakes</strong> — Bis Hazari Tal and Lami Tal — are the water. In winter they hold ducks, grebes, jacanas, storks and a good chance of the lesser adjutant. Between them these four habitats are why one park holds six hundred species, and why three days is the right length: one day is not enough to work them all properly.</p>",
      },
      ETHICS_SECTION,
      {
        heading: "Season and Realistic Expectations",
        content:
          "<p><strong>November to March</strong> is the core season — comfortable temperatures, wintering waterfowl and, from late January, the grassland cut and burned so the florican becomes findable. <strong>March and April</strong> bring breeding display, which is when the florican is at its most visible and the resident birds are in song. Numbers are highest in winter; behaviour is most interesting in spring.</p><p>A good three days here yields <strong>a hundred and fifty to two hundred and fifty species</strong>. Bengal florican is genuinely rare — a few dozen birds in the park — and a sighting is perhaps one trip in three, in the right season, with early starts. The hornbills, the lakes and the riverine forest are dependable. We would rather set that out now than have you expect a guaranteed florican.</p>",
      },
      {
        heading: "Getting There, Staying and What to Bring",
        content:
          "<p><strong>Sauraha</strong> is five to six hours from Kathmandu and four and a half from Pokhara by road, or a twenty-five-minute flight to <strong>Bharatpur</strong>, which is included on this trip because birding days start before dawn and a long drive the same morning does not work.</p><p>Accommodation is a lodge on the park edge with early breakfasts arranged around the birding rather than the kitchen's convenience. Bring <strong>binoculars</strong>, a field guide to the birds of the Indian subcontinent, neutral clothing, long sleeves and trousers, closed shoes, repellent, a hat and sunscreen. The guide carries a scope. A torch is useful for the pre-dawn starts.</p>",
      },
    ],
    faqs: [
      { question: "How is this different from the standard Chitwan safari?", answer: "Entirely different rhythm. A safari is built around game drives and the big mammals; this is built around habitat and time of day — pre-dawn starts, slow walking, boats, hides and long sits. You get the rhino and gharial anyway, but you are not organising the day around them." },
      { question: "How many species should I expect?", answer: "A hundred and fifty to two hundred and fifty over three days, depending on season and effort. Winter gives the biggest numbers because of the waterfowl; spring gives the most interesting behaviour. Over six hundred species have been recorded in the park in total." },
      { question: "Will we see Bengal florican?", answer: "Perhaps one trip in three, in the right season, with the early starts. There are only a few dozen birds in the park and they are one of the world's rarest bustards. The best window is late January to April, after the grass is cut and during display. We will work for it, and we will not promise it." },
      { question: "Do we fly or drive?", answer: "Fly, and it is included. Birding days start before dawn and a five-hour drive on the same morning does not work, so this trip uses the twenty-five-minute flight to Bharatpur in both directions. If you would rather drive to save cost, tell us and we will price it that way." },
      { question: "Is it suitable for a beginner?", answer: "Yes, and beginners often get more out of it than they expect — the variety is startling and a good guide will teach you to use your ears as well as your eyes. If you are travelling with a non-birding partner, the same lodge runs standard safari activities and we can book those alongside." },
      { question: "What is the group size?", answer: "Six or fewer, because a larger line does not see shy birds in forest and grassland. If you want a private guide for one or two people, that is available as an upgrade and is worth it if you are working a specific list." },
      { question: "Do we do the elephant breeding centre and cultural show?", answer: "Only if you want them. They are standard safari inclusions rather than birding ones, and most people on this trip would rather use the time at Bis Hazari Tal or in the grassland. Tell your guide on the first evening and the itinerary flexes around it." },
      { question: "What about leeches and mosquitoes?", answer: "Leeches are a monsoon problem and this trip runs November to April, so they are not an issue. Mosquitoes are, particularly at dusk near the lakes — bring repellent and long sleeves. Malaria risk in the Terai is low but present; take advice from your own doctor before travelling." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Return domestic flights from Kathmandu to Bharatpur."],
      transport: ["Private vehicle between Bharatpur airport and the lodge, and for all birding excursions."],
      accommodation: ["Two nights at a lodge on the edge of Chitwan National Park, with early breakfasts arranged around the birding."],
      meals: ["All meals from lunch on the first day to breakfast on the third, including packed breakfasts for pre-dawn starts."],
      entrance: "Chitwan National Park entry permits, Bis Hazari Tal access and all activity fees.",
      guide: "A specialist bird guide throughout, in a group of six or fewer, with a spotting scope.",
      extra: [
        "Dugout canoe trips on the Rapti and boat access to the oxbow lakes.",
        "Walking and jeep excursions into the grassland and sal forest.",
        "A Chitwan bird checklist and use of the guide's scope.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Meals in Kathmandu before and after the trip.",
      extra: ["Binoculars, which you should bring.", "Field guide.", "Alcoholic drinks at the lodge.", "Tips for the guide and driver."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "monday",
    itineraryDescription:
      "Three days birding Chitwan National Park with a specialist guide, working the riverine forest, sal forest, grassland and oxbow lakes.",
    inExDescription:
      "Return flights to Bharatpur, transfers, two nights at a lodge, all meals including packed breakfasts, park permits, a specialist bird guide with a scope and all excursions are included, while meals in Kathmandu, binoculars, drinks and tips are excluded.",
    bestTime: "Nov-Apr",
    meta: {
      title: "Bird Watching in Chitwan National Park – 3 Days, 600 Species",
      description:
        "Three days birding Chitwan with a specialist guide: riverine forest, sal forest, grassland and the oxbow lakes, with over six hundred recorded species.",
      keywords:
        "bird watching Chitwan, Chitwan birding tour, Bengal florican Nepal, Nepal birding tour, Bis Hazari Tal birds, Chitwan bird species, birdwatching Nepal Terai",
      tags: "Bird Watching in Chitwan National Park, Bird Watching in Nepal, Chitwan, Birding, Nepal Activities",
    },
  },
  days: [
    {
      title: "Fly to Bharatpur (200 m) and Bird the Rapti Riverine Forest",
      elevation: "200 m",
      accommodation: "Sauraha",
      placeDescription: "The village on the Rapti river at the northern edge of Chitwan National Park.",
      ...CHITWAN,
      html: p(
        "A morning flight of twenty-five minutes from <strong>Kathmandu</strong> to <strong>Bharatpur</strong> and a short drive to the lodge at <strong>Sauraha</strong>, which puts you in the field by early afternoon rather than at dusk.",
        "After lunch your guide works the <strong>riverine forest</strong> along the Rapti — the richest habitat in the park, with hornbills, trogons, flycatchers, woodpeckers and, if the season is right, ruby-cheeked sunbird.",
        "Late afternoon is spent on the riverbank and at the community forest edge, where the light is best and the storks and egrets come in to roost.",
        "Your guide runs through the plan for the next two days over dinner and sets the pre-dawn start. Overnight at Sauraha.",
      ),
    },
    {
      title: "Grassland, Sal Forest and the Full Day in the Park",
      elevation: "200 m",
      accommodation: "Sauraha",
      placeDescription: "The village on the Rapti river at the northern edge of Chitwan National Park.",
      ...CHITWAN,
      html: p(
        "A pre-dawn start with a packed breakfast, into the park while it is still dark.",
        "The morning is spent in the <strong>tall elephant grass</strong>, which is hard work and where the specialities are — <strong>Bengal florican</strong>, grassland warblers, francolins — and is best in the first two hours of light.",
        "Mid-morning moves into the <strong>sal forest</strong> for minivets, drongos, woodshrikes and the resident owls, with a slow walk rather than a drive.",
        "The afternoon runs a <strong>dugout canoe</strong> down the Rapti past gharial and mugger crocodile, with kingfishers, storks and waders on the banks. Rhino and deer turn up throughout without being sought. Overnight at Sauraha.",
      ),
    },
    {
      title: "Bis Hazari Tal and Return to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: "Nepal's capital city and the final stop before departure.",
      lng: 85.311,
      lat: 27.7172,
      html: p(
        "A last early morning at <strong>Bis Hazari Tal</strong>, the oxbow lake system in the buffer zone north of the park and a Ramsar site in its own right.",
        "In winter the water holds ducks, grebes, jacanas, storks and a good chance of <strong>lesser adjutant</strong>, and the surrounding scrub and forest edge is productive for warblers and raptors. The guide sets up the scope at the hide.",
        "Back to the lodge for breakfast and to pack, then the short drive to <strong>Bharatpur</strong> for the flight to <strong>Kathmandu</strong>.",
        "Transfer to your hotel on arrival, with the trip list totted up on the way — three days here typically produces between a hundred and fifty and two hundred and fifty species.",
      ),
    },
  ],
};

/** Two days on the Pokhara lakes — the easy birding trip with mountains behind it. */
export const pokharaLakesBirding: Tour = {
  region: REGION,
  price: 235,
  difficulty: "easy",
  maxAltitude: 1600,
  center: [84.03, 28.19],
  zoom: 11.5,
  content: {
    slug: "bird-watching-in-pokhara-lakes",
    title: "Bird Watching in Pokhara Lakes",
    overview:
      "<p>The <strong>Pokhara valley</strong> holds three lakes, a river gorge and a band of mid-hill forest within half an hour of each other, and around <strong>four hundred and eighty species</strong> have been recorded across them. It is the most comfortable birding in Nepal — no permits, no early flights, no leeches, and the Annapurna wall behind almost every bird you look at.</p><p>Two days covers <strong>Phewa</strong>, <strong>Begnas</strong> and <strong>Rupa</strong> lakes by boat and on foot, the marshes at Pame and the forest on the Rani Ban and Kahun Danda ridges. Expect grebes, jacanas, kingfishers and wintering ducks on the water, and babblers, minivets, barbets and flycatchers in the forest. It works as a stand-alone trip and as an easy, productive add-on either side of an Annapurna trek.</p>",
    highlights: [
      ["Three Lakes in Two Days", "Phewa, Begnas and Rupa, by boat and on foot, with the Annapurnas behind them."],
      ["Around 480 Recorded Species", "Water, marsh, river gorge and mid-hill forest within half an hour of each other."],
      ["The Easiest Birding in Nepal", "No permits, no early flights, no leeches, and a hotel with a hot shower every night."],
      ["Pame Marsh at Dawn", "The western end of Phewa, which is the most productive hour of the whole trip."],
      ["Pairs with a Trek", "Slots either side of an Annapurna trek without any extra travel."],
    ],
    sections: [
      {
        heading: "The Sites and How the Days Run",
        content:
          "<p>Day one works <strong>Phewa Lake</strong> — the Pame marshes at the western end at dawn, which is the single most productive spot in the valley, then the lake itself by boat for grebes, cormorants and kingfishers, and the <strong>Rani Ban</strong> forest on the World Peace Pagoda ridge in the afternoon for babblers, barbets and flycatchers.</p><p>Day two moves east to <strong>Begnas</strong> and <strong>Rupa</strong> lakes, quieter and more agricultural, with reed bed and marsh that hold jacanas, bitterns, warblers and wintering ducks, and the forested ridge between the two lakes for mid-hill species. If time allows, the <strong>Seti river gorge</strong> in the middle of Pokhara is worth an hour for wallcreeper and forktail in winter.</p>",
      },
      ETHICS_SECTION,
      {
        heading: "Season and Realistic Expectations",
        content:
          "<p><strong>November to March</strong> is the best period: wintering waterfowl on all three lakes, clear air, comfortable temperatures and the Annapurnas visible behind the water. <strong>March and April</strong> bring resident breeding activity and altitudinal migrants moving up through the forest, with fewer ducks but more song.</p><p>A good two days yields <strong>a hundred and twenty to a hundred and eighty species</strong>. This is not the biggest list you can make in Nepal — Chitwan and Koshi Tappu both beat it — but it is the most comfortable way to get a substantial one, and the setting is unmatched. The <strong>monsoon</strong> is warm, wet and green, with fewer birds and no mountains.</p>",
      },
      {
        heading: "Fitness, What to Bring and Access",
        content:
          "<p>Easy. The walking is a few kilometres a day on level ground and lake paths, with one optional forest ridge climb of around 300 m on each day which can be skipped or driven to. It suits any age and any fitness, and it is one of the few trips in this catalogue genuinely workable for someone with limited mobility — tell us and we will plan it around the boat and the vehicle.</p><p>Bring <strong>binoculars</strong>, a field guide, comfortable walking shoes, a hat, sunscreen and a light layer for the dawn starts, which are cold on the water in December and January. The guide carries a scope. Nothing else is needed — you sleep in a Pokhara hotel and eat in restaurants, so this is birding without any camping at all.</p>",
      },
    ],
    faqs: [
      { question: "How many species will we see?", answer: "A hundred and twenty to a hundred and eighty over two days, depending on the season. Winter gives the biggest lists because of the waterfowl. Around four hundred and eighty species have been recorded in the Pokhara valley in total, across the lakes, the marshes, the river gorge and the forest ridges." },
      { question: "How does it compare with Chitwan or Koshi Tappu?", answer: "Smaller lists, far more comfortable. Chitwan and Koshi Tappu both produce more species and more specialities; Pokhara gives you a hotel, no permits, no flights, no leeches and the Annapurna wall behind the birds. If you want the biggest list, go east. If you want good birding on a relaxed trip, this is it." },
      { question: "Is it suitable for someone with limited mobility?", answer: "More than any other trip we run. The walking is level and short, much of the birding is done from a boat or beside the vehicle, and the two forest ridges are optional and can be driven to. Tell us the specifics at booking and we will plan the days around them." },
      { question: "What is the best single spot?", answer: "The Pame marshes at the western end of Phewa Lake, at dawn. It is reed bed, wet grassland and open water together, and it consistently produces the longest hour of the trip — herons, bitterns, jacanas, warblers, raptors and kingfishers, with the mountains coming up behind." },
      { question: "Can we combine it with a trek?", answer: "Easily, and it is the most common way people book it. It slots in either side of any Annapurna trek without extra travel, and works particularly well as a gentle two days after coming down from altitude. Tell us at booking and we will sequence it." },
      { question: "Do we need permits?", answer: "No. All three lakes and the ridges are outside the conservation area boundary, so there are no permits and no entry fees beyond the boat hire, which is included. That is part of why this trip costs what it does relative to the Terai ones." },
      { question: "When are the mountains visible?", answer: "October to April, most reliably from November to February. Machhapuchhre and Annapurna South rise directly behind Phewa and Begnas, and the reflection in still water at dawn is the classic Pokhara photograph. In the monsoon they are hidden for weeks at a time." },
      { question: "Is there anything for a non-birding partner?", answer: "A great deal — Pokhara is the easiest place in Nepal to spend a day. Paragliding, the zip flyer, boating, the World Peace Pagoda and the lakeside are all within reach, and we can book any of them alongside. The birding days finish by mid-afternoon in any case." },
    ],
    inclusions: {
      transport: ["Private vehicle with driver for both days, including hotel pickup and drop-off in Pokhara."],
      accommodation: ["One night at a lakeside hotel in Pokhara with breakfast."],
      meals: ["Packed breakfasts for the dawn starts, and lunch on both days."],
      guide: "A specialist bird guide for both days, in a group of six or fewer, with a spotting scope.",
      extra: [
        "Boat hire on Phewa, Begnas and Rupa lakes.",
        "A Pokhara valley bird checklist and use of the guide's scope.",
      ],
    },
    exclusions: {
      domestic: true,
      meals: "Dinner on both days.",
      extra: ["Binoculars, which you should bring.", "Field guide.", "Travel to and from Pokhara."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "thursday",
    itineraryDescription:
      "Two days birding the Pokhara valley — Phewa, Begnas and Rupa lakes, the Pame marshes and the mid-hill forest ridges, with the Annapurnas behind.",
    inExDescription:
      "Private vehicle for both days, a specialist bird guide with a scope, boat hire on all three lakes, one night at a lakeside hotel, packed breakfasts and lunches and government taxes are included, while travel to Pokhara, dinners, binoculars and a field guide are excluded.",
    bestTime: "Nov-Apr",
    meta: {
      title: "Bird Watching in Pokhara Lakes – 2 Days, Phewa, Begnas and Rupa",
      description:
        "Two days birding the Pokhara valley: Phewa, Begnas and Rupa lakes, the Pame marshes and mid-hill forest, with around 480 recorded species.",
      keywords:
        "bird watching Pokhara, Phewa lake birds, Begnas lake birding, Rupa lake birds, Pame marsh Pokhara, Nepal birding tour, easy birdwatching Nepal",
      tags: "Bird Watching in Pokhara Lakes, Bird Watching in Nepal, Pokhara, Birding, Nepal Activities",
    },
  },
  days: [
    {
      title: "Pame Marsh, Phewa Lake and the Rani Ban Forest",
      elevation: "1,000 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "A dawn start at the <strong>Pame marshes</strong> at the western end of <strong>Phewa Lake</strong> — reed bed, wet grassland and open water together, and the single most productive hour of the trip. Herons, bitterns, jacanas, warblers, raptors and kingfishers, with the Annapurnas coming up behind the water.",
        "Mid-morning is spent on the lake itself by <strong>boat</strong>, working the margins for grebes, cormorants and kingfishers.",
        "After lunch the <strong>Rani Ban</strong> forest on the World Peace Pagoda ridge gives the mid-hill species — babblers, barbets, minivets, flycatchers and mixed feeding flocks in the oak and schima.",
        "Back to your lakeside hotel in the late afternoon. Overnight in Pokhara.",
      ),
    },
    {
      title: "Begnas and Rupa Lakes and the Ridge Between Them",
      elevation: "1,600 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...BEGNAS,
      html: p(
        "An early drive east to <strong>Begnas Lake</strong>, quieter and more agricultural than Phewa, with reed bed and marsh at the northern end that hold jacanas, bitterns, warblers and wintering ducks.",
        "A boat takes you across, and the forested ridge between Begnas and <strong>Rupa Lake</strong> gives the morning's mid-hill birding — an optional 300 m climb that can be driven instead if you would rather.",
        "<strong>Rupa</strong> on the far side is smaller, shallower and often the better of the two for waterfowl and waders.",
        "If time allows on the way back, the <strong>Seti river gorge</strong> in the middle of Pokhara is worth an hour in winter for wallcreeper and forktail. Back at your hotel by mid-afternoon.",
      ),
    },
  ],
};

export const birdWatchingActivities: Tour[] = [kathmanduValleyBirding, chitwanBirding, pokharaLakesBirding];
