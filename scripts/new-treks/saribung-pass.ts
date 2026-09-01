import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

const PERMITS =
  "Upper Mustang Restricted Area Permit, Nar Phu Restricted Area Permit, and Annapurna Conservation Area Permit.";

/**
 * Upper Mustang to Nar Phu over the Saribung La, camping from Yara onward.
 *
 * Waypoints marked "approximate" are camps and gompas with no OpenStreetMap
 * node; they are placed on the route line between verified points.
 */
export const saribungPassTrek: NewTrek = {
  price: 3500,
  difficulty: "extreme",
  maxAltitude: 6042,
  center: [84.0, 28.9],
  zoom: 9,
  content: {
    slug: "saribung-pass-trek",
    title: "Saribung Pass Trek",
    overview:
      "<p>The <strong>Saribung Pass Trek</strong> links two restricted areas across a glaciated 6,042 m col, walking from the walled city of <strong>Lo Manthang</strong> in Upper Mustang into the Tibetan valleys of <strong>Nar and Phu</strong>. The first half is the classic Mustang route through the wind-carved canyons of the Kali Gandaki, the ochre cliffs at Dhakmar and the cave gompas at Luri, ending in the medieval capital of the Kingdom of Lo.</p><p>Beyond Yara the trail leaves the Mustang circuit for the pilgrimage route to <strong>Damodar Kunda (4,890 m)</strong>, a chain of sacred lakes on the Tibetan plateau, and then climbs onto the glacier below <strong>Saribung Peak</strong>. The <strong>Saribung La (6,042 m)</strong> is crossed roped and in crampons, and the descent leads into the Phu valley and out through Nar and Koto. It is a genuine expedition through two permit-controlled regions, and one of very few routes in Nepal that crosses above 6,000 m without a summit permit.</p>",
    highlights: [
      ["Cross the Saribung La (6,042 m)", "Traverse a glaciated col between Upper Mustang and Nar Phu, roped and in crampons."],
      ["Lo Manthang", "Spend a full day in the walled capital of the former Kingdom of Lo, with its palace and three great monasteries."],
      ["Damodar Kunda (4,890 m)", "Camp beside the sacred lakes on the Tibetan plateau, a Hindu pilgrimage site at the edge of the Damodar Himal."],
      ["Two Restricted Areas in One Trek", "Walk both Upper Mustang and Nar Phu, each requiring its own permit and each closed to independent trekkers."],
      ["The Cave Gompas of Mustang", "Visit Luri and the cliff monasteries carved into the canyon walls of the upper Kali Gandaki."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>May to early June</strong> and <strong>September to mid-October</strong> are the windows. Mustang sits in the rain shadow so it stays dry through the monsoon, but the <strong>Saribung La</strong> does not: the col needs settled snow, which means late spring or early autumn. Summer is possible for the Mustang half alone and is when Nepali pilgrims walk to Damodar Kunda.</p><p>From late October the col becomes too cold and too snowed-in for a trekking group, the Nar Phu villages start emptying for winter, and the Jomsom flights become unreliable. Deep winter is out entirely. Even in season, expect to plan around a weather window for the pass and to carry spare days for it.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is an expedition-grade trek. The Mustang half is straightforward high-desert walking at 3,500 to 4,000 m, but from Damodar Kunda the route climbs onto a glacier, camps above 5,300 m, and crosses a 6,042 m col using <strong>crampons, harness and fixed rope</strong>. The descent on the Nar Phu side is long and steep on snow and moraine.</p><p>You need previous experience above 5,000 m and comfort moving roped on a glacier. Your guide runs technical training at Damodar Kunda, but this is not the place to learn from scratch. Expect twelve days of camping, no lodges between Yara and Phu, and days of eight to eleven hours on the crossing. Four to six months of specific preparation is realistic.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Insurance covering <strong>mountaineering and trekking to 6,500 m</strong> is mandatory, including roped glacier travel and fixed-rope use. Standard trekking policies capped at 4,000 m or 5,000 m cover none of the crossing, and several exclude glacier travel outright. Get written confirmation that the Saribung La is covered before you book flights.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Between Yara and Phu there is no road, no lodge and no medical post, and evacuation from the high camps is a helicopter working near its ceiling, dispatched only against a guarantee of payment. We require your policy number and the insurer's 24-hour emergency line before permits are issued.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Mustang is dry, bright and windy; the pass is an expedition environment. Bring <strong>mountaineering boots that take crampons</strong>, gaiters, a four-season sleeping bag rated to <strong>-20°C</strong>, an insulated mat, a heavy down jacket, a full waterproof and windproof shell, four base layers, a fleece, insulated and liner gloves, a warm hat, a buff for the Mustang wind and dust, and a sun hat.</p><p>Also pack a 40-45 litre pack, trekking poles, category 4 glacier glasses and goggles, a headlamp with spare batteries, factor 50 sunscreen and lip balm — the reflected light on the plateau is brutal — an insulated bottle plus purification, a full personal first aid kit, wet wipes, a quick-dry towel, and a large power bank. <strong>Crampons, harness, ice axe, helmet and rope are supplied by us.</strong></p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The Mustang villages have simple lodges and guesthouses as far as <strong>Yara</strong>, and Nar and Phu have basic lodges on the far side. Everything in between — around eight nights — is <strong>tents</strong>: two-person tents, a mess tent and a toilet tent, at camps between 4,100 m and 5,300 m. The camp below the col reaches -20°C overnight.</p><p>A cook and kitchen crew travel with the group throughout the camping section, cooking three hot meals a day from supplies carried from Jomsom and topped up in Lo Manthang. Above Yara there is nothing to buy at all. Water on the plateau is scarce and often silty; the crew boils and treats it, and you should carry two litres and drink four a day. Bring electrolyte tablets — the dry air dehydrates you faster than the altitude does.</p>",
      },
    ],
    faqs: [
      { question: "Which permits do I need and what do they cost?", answer: "Three: the Upper Mustang Restricted Area Permit, the Nar Phu Restricted Area Permit and the Annapurna Conservation Area Permit, all included in your package. Both restricted permits require a licensed guide and a minimum of two trekkers, and Upper Mustang is charged per person for a fixed ten-day period with a daily rate beyond it." },
      { question: "Do I need climbing experience?", answer: "You need to be comfortable in crampons and moving roped on a glacier. The col is not technical climbing but it is glacier travel at 6,000 m with fixed rope on the steeper ground. Previous experience above 5,000 m is required and your guide runs training at Damodar Kunda before the crossing." },
      { question: "What happens if the Saribung La is closed?", answer: "The group retraces to Lo Manthang and exits through Mustang, which is a fine trek in itself but adds several days. Your guide makes the call at Damodar Kunda based on snow and weather, and we build spare days into the schedule so that decision is never forced by the calendar." },
      { question: "Why is Damodar Kunda sacred?", answer: "The lakes are a Hindu pilgrimage site associated with Vishnu, and the shaligram fossils found in the area are venerated as his aniconic form. Nepali pilgrims walk up in the summer months, which is one of the few times the plateau has anyone else on it." },
      { question: "How cold and windy does Mustang get?", answer: "Days are warm in the sun and the nights fall below freezing from 3,500 m upward. The wind is the constant: it funnels up the Kali Gandaki from late morning every day of the year, carrying dust, and a buff and glasses are not optional. At the high camps expect -20°C overnight." },
      { question: "What is Lo Manthang like?", answer: "A walled city of around 150 houses, the capital of the Kingdom of Lo, which retained its monarchy until 2008. The four-storey palace and the monasteries of Jampa, Thubchen and Chodey are inside the walls, and the full exploration day is genuinely needed to see them properly." },
      { question: "Is there mobile signal or charging?", answer: "There is NTC signal in most Mustang villages as far as Lo Manthang and again in Phu and Koto, with nothing at all in between — roughly a week. Charging is available in the villages for a fee and not at all on the plateau. Bring a large power bank and keep it warm." },
      { question: "How many staff come with the group?", answer: "A climbing guide, an assistant guide, a cook and kitchen crew, and porters or pack animals for the tents, food and technical equipment. Mustang uses horses and mules on the lower sections where the ground allows, which is both traditional and practical on the plateau." },
      { question: "Can we ride horses in Mustang?", answer: "Yes, in the Mustang half. Horses can be hired in most villages for a day or a stage and it is a good option if you are tired or want to cover the ground the way local people do. It is not possible above Yara, where the ground is unsuitable." },
      { question: "How do we get to and from the trailheads?", answer: "The trek starts with a drive to Pokhara and a flight or jeep to Jomsom, and finishes with a jeep from Koto down the Marsyangdi to Besisahar and on to Kathmandu. The Jomsom flight is weather-dependent in the mornings, which is why the road option is kept open." },
    ],
    inclusions: {
      flights: ["Pokhara to Jomsom flight as per the itinerary, subject to weather."],
      transport: [
        "Private transportation from Kathmandu to Pokhara as per the itinerary.",
        "Private jeep transportation from Koto to Besisahar and onward transport to Kathmandu.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast.", "Accommodation in Pokhara with breakfast."],
      permits: PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
        "Crampons, harness, ice axe, helmet, and fixed rope for the Saribung La crossing.",
        "Climbing guide and additional high-altitude staff for the pass section.",
      ],
    },
    exclusions: {
      cityMeals: "Lunch and dinner in Kathmandu and Pokhara.",
      unforeseen:
        "Additional accommodation, transport, or rescheduled flights caused by weather delays at Jomsom, a turned-back pass crossing, or any other unforeseen circumstance beyond the itinerary.",
    },
    porterDays: 17,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 22-day expedition from Upper Mustang to Nar Phu over the Saribung La (6,042 m), via Lo Manthang and the sacred lakes of Damodar Kunda.",
    inExDescription:
      "Airport transfers, road transport, the Jomsom flight, Kathmandu and Pokhara hotel nights, full camping equipment with a cook crew, technical climbing equipment, lodge and teahouse nights in the villages, all trekking meals, both restricted area permits and the conservation permit, a climbing guide, trekking map, first aid, and government taxes are included, while international flights, visa, mountaineering insurance, personal gear, city meals, personal expenses, and tips are excluded.",
    bestTime: "May-Jun, Sep-Oct",
    meta: {
      title: "Saribung Pass Trek – 22 Days Mustang to Nar Phu",
      description:
        "A 22-day expedition trek over the Saribung La (6,042 m) from Upper Mustang to the Nar Phu valley, via Lo Manthang and Damodar Kunda.",
      keywords:
        "Saribung Pass Trek, Saribung La, Upper Mustang to Nar Phu, Damodar Kunda, Lo Manthang, 6000m pass trek Nepal, restricted area trek",
      tags: "Saribung Pass Trek, Mustang, Nar Phu, Remote Region, High Pass Trek, Expedition, Nepal Trekking",
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
        "The briefing is long for this one. Your climbing guide covers the twenty-two day plan, the two restricted-area permits and the passport photographs they need, the camping routine, the technical equipment we supply, and the weather decision at Damodar Kunda. We fit boots to crampons and harnesses here rather than at 5,000 m.",
        "Our office lodges the Upper Mustang and Nar Phu permits today, which is why the trip starts in Kathmandu rather than Pokhara. The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A beautiful lakeside city and the gateway to the Annapurna and Mustang regions.",
      ...POKHARA,
      html: p(
        "After breakfast we leave the Kathmandu valley on the <strong>Prithvi Highway</strong>, following the Trishuli river west through gorge country.",
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day, with a lunch stop at a riverside restaurant. If you would rather not spend the day on the road, the 25-minute flight is available as an add-on.",
        "Pokhara arrives in the late afternoon on the shore of <strong>Phewa Lake</strong>, with the Annapurnas behind it. This is the last comfortable evening before three weeks of tents and lodges.",
        "The crew does the final load sort here. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly from Pokhara (822 m) to Jomsom (2,720 m) and Trek to Kagbeni (2,810 m)",
      elevation: "2,810 m",
      accommodation: "Kagbeni",
      placeDescription: "A medieval village at the gateway to Upper Mustang, where the restricted area begins.",
      lng: 83.7843,
      lat: 28.8378,
      html: p(
        "An early flight into the Kali Gandaki, through the deepest gorge on earth between Dhaulagiri and Annapurna. Twenty minutes, and one of the great scheduled flights anywhere.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang. After the formalities the group walks north up the broad grey riverbed, into the wind that funnels up this valley every day of the year.",
        "<strong>Kagbeni (2,810 m)</strong> is a compact medieval village of mud-brick alleys, a red gompa and irrigation channels running under the streets. It sits at the checkpoint where the <strong>Upper Mustang restricted area</strong> begins, and the difference between the green oasis of the village and the desert around it is total.",
        "Around 3 hours of walking. Overnight at Kagbeni.",
      ),
    },
    {
      title: "Trek from Kagbeni (2,810 m) to Chele (3,050 m)",
      elevation: "3,050 m",
      accommodation: "Chele",
      placeDescription: "A small village of whitewashed houses above the Kali Gandaki in Upper Mustang.",
      lng: 83.827,
      lat: 28.9311,
      html: p(
        "The first day inside the restricted area, and the landscape changes character immediately.",
        "The trail follows the Kali Gandaki north through <strong>Tangbe</strong> and <strong>Chhusang</strong>, villages of whitewashed houses, buckwheat fields and apple orchards set against cliffs of ochre, grey and red. The rock formations above Chhusang are eroded into columns and fins by the wind.",
        "Beyond Chhusang the river disappears into a canyon and the trail climbs away from it, crossing to the east bank through a natural rock tunnel.",
        "<strong>Chele (3,050 m)</strong> is a small village on the far side, where the route leaves the river for good and starts the series of passes that make up the Mustang trail. Around 5–6 hours. Overnight at Chele.",
      ),
    },
    {
      title: "Trek from Chele (3,050 m) to Ghami (3,520 m)",
      elevation: "3,520 m",
      accommodation: "Ghami",
      placeDescription: "A large village of flat-roofed houses beside the longest mani wall in Nepal.",
      lng: 83.873,
      lat: 29.0631,
      html: p(
        "A long day over three passes, the classic Mustang rhythm of climb, cross, descend and climb again.",
        "The trail climbs steeply out of Chele to the Taklam La and then the Dajori La, with the canyon country opening out into a plateau of eroded ridges. Every pass is marked with cairns and prayer flags and every one gives a bigger view than the last.",
        "The village of <strong>Samar</strong> and the cave gompa at Rangbyung — a shrine built around natural rock formations in a gorge — come before the final climb to the Nyi La.",
        "<strong>Ghami (3,520 m)</strong> is a substantial village of flat-roofed houses among poplar trees and barley fields. Just beyond it stands the <strong>longest mani wall in Nepal</strong>, several hundred metres of carved stone.",
        "Around 7 hours. Overnight at Ghami.",
      ),
    },
    {
      title: "Trek from Ghami (3,520 m) to Charang (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Charang",
      placeDescription: "A village beneath a red fortress and monastery on the edge of a canyon.",
      lng: 83.9323,
      lat: 29.0926,
      html: p(
        "A shorter day past the most photographed cliffs in Mustang.",
        "The trail crosses the mani wall and climbs past <strong>Dhakmar</strong>, where the cliffs are a deep blood red — local tradition holds that they were stained by the blood of a demoness subdued by Guru Rinpoche when the monastery at Lo Gekar was founded.",
        "The route crosses the Mui La and descends into the Charang valley, with the fields green against the red and grey rock.",
        "<strong>Charang (3,560 m)</strong> sits beneath a five-storey <strong>dzong</strong> and a red monastery on the lip of a canyon. The gompa holds an important collection of thangkas and statues, and the caretaker will usually open it in the afternoon.",
        "Around 5 hours. Overnight at Charang.",
      ),
    },
    {
      title: "Trek from Charang (3,560 m) to Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of the former Kingdom of Lo, on the plateau near the Tibetan border.",
      lng: 83.9563,
      lat: 29.1828,
      html: p(
        "The day you reach the walled city, and the high point of the Mustang half of the trek.",
        "The trail climbs steadily out of Charang and over the Lo La at around 3,950 m, and from the top <strong>Lo Manthang</strong> appears below on the plain — a compact walled rectangle of white buildings with the Tibetan border ridge behind it.",
        "It is a striking first sight. The city was the capital of the <strong>Kingdom of Lo</strong>, which kept its own monarchy until 2008, and the walls, the four-storey palace and the monasteries inside them date from the fifteenth century.",
        "<strong>Lo Manthang (3,840 m)</strong> has around 150 houses packed inside the wall, with the fields and newer buildings outside it. Arrive in the early afternoon with time to walk the perimeter before dark.",
        "Around 4–5 hours. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Exploration Day in Lo Manthang (3,840 m)",
      elevation: "3,840 m",
      accommodation: "Lo Manthang",
      placeDescription: "The walled capital of the former Kingdom of Lo, on the plateau near the Tibetan border.",
      lng: 83.9563,
      lat: 29.1828,
      html: p(
        "A full day in the city, and the acclimatisation day the second half of the trek depends on.",
        "The morning is the monasteries. <strong>Jampa Lhakhang</strong>, the oldest, holds a fifteenth-century clay Maitreya and mandala murals that have been painstakingly restored; <strong>Thubchen</strong> is a vast assembly hall of massive wooden columns; <strong>Chodey</strong> is the working monastery of the city.",
        "In the afternoon there is a choice: ride or walk north to the cave complexes at <strong>Chhoser</strong>, where a five-storey warren of rooms is carved into a cliff face and reached by ladders, or up to <strong>Namgyal Gompa</strong> and the viewpoint above the city.",
        "Both take you above 4,000 m, which is the point on a day that is doing acclimatisation work as well as sightseeing. Your guide checks the group tonight before the plateau section. Overnight at Lo Manthang.",
      ),
    },
    {
      title: "Trek from Lo Manthang (3,840 m) to Yara (3,650 m)",
      elevation: "3,650 m",
      accommodation: "Yara",
      placeDescription: "A small village on the eastern side of Upper Mustang below the Luri cave monastery.",
      lng: 84.0001,
      lat: 29.0959,
      html: p(
        "East off the main Mustang circuit and onto the route almost nobody walks.",
        "The trail leaves Lo Manthang south-east across open plateau, crossing the Dhi La and dropping into the valley of the Kali Gandaki's upper tributaries. The country is emptier here — no trekking traffic at all, and villages hours apart.",
        "The walking is on high desert: gravel plains, eroded ridges, and irrigation-green villages appearing suddenly in the canyon bottoms.",
        "<strong>Yara (3,650 m)</strong> is a small village of a few dozen houses with barley fields and a view across to the cliffs holding the <strong>Luri cave gompa</strong>. This is the last village with a lodge before the plateau.",
        "Around 6–7 hours. Overnight at Yara.",
      ),
    },
    {
      title: "Trek from Yara (3,650 m) to Ghuma Thanti (4,150 m) via Luri Gompa",
      elevation: "4,150 m",
      accommodation: "Ghuma Thanti",
      placeDescription: "A pilgrim shelter and camp on the plateau route to Damodar Kunda.",
      // Approximate: pilgrim rest house with no OpenStreetMap node.
      lng: 84.0705,
      lat: 29.0431,
      html: p(
        "A visit to the finest cave monastery in Mustang, then out onto the plateau and into the tents.",
        "The morning detour climbs to <strong>Luri Gompa</strong>, built into a cliff face and reached by a steep path and a short scramble. The upper chamber is a chorten cave with fifteenth-century murals painted directly onto the rock, among the oldest surviving Buddhist wall paintings in Nepal.",
        "From Luri the route turns east and climbs onto open plateau. Villages stop, water becomes scarce, and the landscape flattens into gravel, wind and enormous sky.",
        "<strong>Ghuma Thanti (4,150 m)</strong> is a pilgrim rest house on the summer route to Damodar Kunda, with room to camp beside it. From here the group is entirely self-contained.",
        "Around 6 hours. Overnight camping at Ghuma Thanti.",
      ),
    },
    {
      title: "Trek from Ghuma Thanti (4,150 m) to Damodar Kunda (4,890 m)",
      elevation: "4,890 m",
      accommodation: "Damodar Kunda",
      placeDescription: "A group of sacred lakes on the Tibetan plateau at the edge of the Damodar Himal.",
      lng: 84.1675,
      lat: 28.9764,
      html: p(
        "A long day across the plateau to the sacred lakes, gaining 750 m on ground with no shelter at all.",
        "The route crosses two passes above 5,000 m and traverses high gravel desert, wind-scoured and almost lifeless. Blue sheep are the only wildlife you are likely to see, and there is no water between camps except what the crew carries.",
        "<strong>Damodar Kunda (4,890 m)</strong> is a group of small lakes in a basin at the foot of the Damodar Himal, sacred to Hindus and associated with Vishnu. The shaligram fossils found here are venerated across Nepal and India, and pilgrims walk up in the summer months.",
        "The camp is beside the water with <strong>Saribung Peak</strong> and the glacier visible ahead. It is cold, windy and utterly silent.",
        "Around 7–8 hours. Overnight camping at Damodar Kunda.",
      ),
    },
    {
      title: "Acclimatization and Training Day at Damodar Kunda (4,890 m)",
      elevation: "4,890 m",
      accommodation: "Damodar Kunda",
      placeDescription: "A group of sacred lakes on the Tibetan plateau at the edge of the Damodar Himal.",
      lng: 84.1675,
      lat: 28.9764,
      html: p(
        "A day at the lakes for altitude and for technical preparation before the col.",
        "The morning walk climbs a ridge above the basin towards <strong>5,200 m</strong>, which both acclimatises the group and gives the first proper look at the Saribung glacier and the line of the pass.",
        "The afternoon is training on the slope near camp: crampons fitted and walked in, ice axe technique, moving as a roped team, and ascending a fixed line. Even experienced members go through it, because the drills need to be the same for everyone on the day.",
        "Your guide makes the decision here about who crosses. Beyond the next camp the group is committed, and this is the last place a member can turn back with staff down the Mustang side. The weather forecast is reviewed tonight.",
        "Overnight camping at Damodar Kunda.",
      ),
    },
    {
      title: "Trek from Damodar Kunda (4,890 m) to Saribung Base Camp (5,300 m)",
      elevation: "5,300 m",
      accommodation: "Saribung Base Camp",
      placeDescription: "A moraine camp below the Saribung glacier and the col.",
      // Approximate: expedition camp with no OpenStreetMap node.
      lng: 84.1742,
      lat: 28.9155,
      html: p(
        "A short move onto the moraine below the glacier, and the highest camp of the trek.",
        "The route climbs south from the lakes onto glacial debris, following the moraine towards the foot of the <strong>Saribung glacier</strong>. Four hundred metres of gain takes four hours at this height, and the group moves in short stages.",
        "<strong>Saribung Base Camp (5,300 m)</strong> is pitched on rock and snow with the col visible above. There is no shelter, water is melted from snow, and the temperature drops the moment the sun goes off the camp in mid-afternoon.",
        "The evening is early and methodical: harness, crampons, headlamp and water sorted before dark, a hot meal, and boots and batteries into the sleeping bag. Your guide sets the start time and the turnaround.",
        "Around 4 hours. Overnight camping at Saribung Base Camp.",
      ),
    },
    {
      title: "Cross the Saribung La (6,042 m) and Descend to Nagoru (4,400 m)",
      elevation: "4,400 m",
      accommodation: "Nagoru",
      placeDescription: "A herders' camp on the Nar Phu side of the Saribung La.",
      // Approximate: seasonal herding ground with no OpenStreetMap node.
      lng: 84.2325,
      lat: 28.8272,
      html: p(
        "The crossing: the longest and hardest day of the trek by a wide margin.",
        "We leave camp in the dark, roped and in crampons, and climb the <strong>Saribung glacier</strong> in a steady line, weaving around crevasses with the staff fixing rope on the steeper snow. Sunrise catches the Damodar Himal behind you while the group is still in shadow.",
        "The <strong>Saribung La (6,042 m)</strong> is a snow col with an enormous view: the Tibetan plateau north, the Damodar and Peri Himal around, and <strong>Himlung Himal (7,126 m)</strong> and the Annapurnas south across the Nar Phu valleys.",
        "The descent is long — more than 1,600 m — on snow, then moraine, then scree, dropping out of the glacier system into grazing country.",
        "<strong>Nagoru (4,400 m)</strong> is a herders' ground on the Phu side with water and flat pitches. Ten to twelve hours. Overnight camping at Nagoru.",
      ),
    },
    {
      title: "Trek from Nagoru (4,400 m) to Phu (4,080 m)",
      elevation: "4,080 m",
      accommodation: "Phu",
      placeDescription: "A fortified Tibetan village on a rock spur at the head of the Phu valley.",
      // Approximate: the village is not tagged in OpenStreetMap; the waypoint
      // sits on the valley floor at the published position for Phu Gaon.
      lng: 84.2861,
      lat: 28.8022,
      html: p(
        "Down into the Phu valley and the first village since Yara — a week ago.",
        "The trail descends grazing slopes and moraine into the upper Phu valley, following the river as the walls close in. Yaks appear, then stone walls, then irrigation channels.",
        "<strong>Phu (4,080 m)</strong> is one of the most striking villages in Nepal: a tight cluster of stone houses stacked on a rock spur above the river, with the ruins of a fortress above and a chorten gateway at the entrance. It is Tibetan in language, dress and religion, and it was closed to outsiders until 2002.",
        "<strong>Tashi Lhakhang Gompa</strong> sits on the ridge outside the village and is worth the climb for the view back up the valley to Himlung Himal.",
        "Around 5–6 hours. This is the first lodge in a week. Overnight at Phu.",
      ),
    },
    {
      title: "Trek from Phu (4,080 m) to Meta (3,560 m)",
      elevation: "3,560 m",
      accommodation: "Meta",
      placeDescription: "A settlement of stone houses on a shelf above the Nar Phu gorge.",
      lng: 84.2373,
      lat: 28.6554,
      html: p(
        "A long descent through the Nar Phu gorge, one of the most dramatic stretches of trail in the Annapurna region.",
        "The route follows the Phu Khola down a canyon of red and grey rock, past chortens, prayer walls and the occasional cave. The trail is cut into the wall in places and crosses the river repeatedly on wooden and cable bridges.",
        "This valley was a restricted area until 2002 and remains one, and the traffic is a handful of trekking groups a season. What you see instead is yak trains, herders and monks moving between the two villages.",
        "<strong>Meta (3,560 m)</strong> is a settlement of stone houses on a shelf with a wide view south to <strong>Annapurna II</strong> and <strong>Lamjung Himal</strong>.",
        "Around 6–7 hours. Overnight at Meta.",
      ),
    },
    {
      title: "Trek from Meta (3,560 m) to Koto (2,600 m)",
      elevation: "2,600 m",
      accommodation: "Koto",
      placeDescription: "A village on the Annapurna Circuit at the mouth of the Nar Phu valley.",
      lng: 84.2593,
      lat: 28.5522,
      html: p(
        "The last walking day, dropping out of the gorge onto the Annapurna Circuit.",
        "The trail descends steeply through pine and juniper forest, following the river through the narrowest part of the canyon with hot springs beside the path at Dharmasala. The air thickens quickly and the vegetation returns valley by valley.",
        "At the mouth of the gorge the Nar Phu Khola joins the <strong>Marsyangdi</strong>, and the group checks out of the restricted area at the police post.",
        "<strong>Koto (2,600 m)</strong> is on the <strong>Annapurna Circuit</strong>, and after three weeks in two restricted areas the sudden appearance of bakeries, jeeps and other trekkers is genuinely disorienting.",
        "This is where the porters and cook crew finish and where tips are given. Around 6 hours. Overnight at Koto.",
      ),
    },
    {
      title: "Drive from Koto (2,600 m) to Besisahar (760 m)",
      elevation: "760 m",
      accommodation: "Besisahar",
      placeDescription: "The road town at the start of the Annapurna Circuit in the Marsyangdi valley.",
      lng: 84.3761,
      lat: 28.2313,
      html: p(
        "A jeep day down the Marsyangdi on the roughest road of the trip.",
        "The route descends through Chame, Dharapani and Jagat on a single-track road cut into the valley side, fording streams and crawling along ledges above the river. It is slow going — five to six hours for what looks like a short distance on a map — and the scenery is superb the whole way.",
        "The valley changes completely as it drops: from pine and barley terraces at Chame to subtropical green and rice paddies by Besisahar, with waterfalls off both walls.",
        "<strong>Besisahar (760 m)</strong> is the road town at the start of the Annapurna Circuit and the end of the rough section.",
        "Overnight at Besisahar.",
      ),
    },
    {
      title: "Drive from Besisahar (760 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A straightforward highway day back to the capital.",
        "The Marsyangdi valley opens out below Besisahar into the wide farmed country of Lamjung, and the change from the plateau you were walking a week ago could not be more complete — rice terraces, banana trees, and buffalo standing in the irrigation channels.",
        "The road from Besisahar joins the Prithvi Highway at Dumre and follows the Trishuli east through the gorge country, with a lunch stop en route. Around six hours in total.",
        "You arrive in <strong>Kathmandu (1,400 m)</strong> in the afternoon and transfer to your hotel. After three weeks the first hot shower takes a while.",
        "The evening is free, and this is when most groups have their celebration dinner with the guides. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Contingency Day in Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A day held in reserve, and a free day in Kathmandu if the trek ran to schedule.",
        "On a route with a 6,000 m col and a weather-dependent flight at the start, spare days are part of the plan rather than padding. If everything went smoothly, today is yours.",
        "<strong>Boudhanath</strong> in the late afternoon is the natural choice after a trek through Tibetan Buddhist country — the community that walks the circuit there comes from exactly the valleys you have been in. <strong>Patan Durbar Square</strong> and its museum, or the old town at <strong>Bhaktapur</strong>, fill a day equally well.",
        "Thamel handles the shopping. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later there is time for <strong>Swayambhunath</strong> or a last walk through the old city with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "You have walked from the Kali Gandaki to the Marsyangdi across the Tibetan plateau, crossed a glaciated 6,042 m col, and spent three weeks in two of the most tightly controlled trekking regions in Nepal. The Teri La next door and the Sherpani Col in the Makalu region are the two routes that go further. Safe travels.",
      ),
    },
  ],
};
