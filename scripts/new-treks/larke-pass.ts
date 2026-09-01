import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const MANASLU_PERMITS =
  "Manaslu Restricted Area Permit, Manaslu Conservation Area Permit, and Annapurna Conservation Area Permit.";

/** The Budhi Gandaki to Marsyangdi crossing over the Larke La, in fourteen days. */
export const larkePassTrek: NewTrek = {
  price: 1150,
  difficulty: "challenging",
  maxAltitude: 5106,
  center: [84.65, 28.45],
  zoom: 9,
  content: {
    slug: "larke-pass-trek",
    title: "Larke Pass Trek",
    overview:
      "<p>The <strong>Larke Pass Trek</strong> crosses the Himalaya between the Budhi Gandaki and the Marsyangdi, taking the most direct line to the <strong>Larke La (5,106 m)</strong> — the highest and most committing point on the Manaslu circuit. A jeep carries the group straight to <strong>Machha Khola</strong>, and from there the trail climbs a gorge that narrows into rock walls before opening out at Namrung into Tibetan country: barley terraces, mani walls, and <strong>Manaslu (8,163 m)</strong> filling the head of the valley.</p><p>After an acclimatisation day at <strong>Samagaon (3,530 m)</strong> for the walk to Birendra Lake and Manaslu Base Camp, the route pushes on through Samdo to the stone huts at Dharamsala and over the pass at dawn. The descent into <strong>Bimthang</strong> is one of the great views in Nepal — Manaslu behind, Himlung and Cheo Himal ahead, and 1,400 m of glacier moraine and rhododendron between you and dinner. Fourteen days, no flights, and a genuine Himalayan crossing.</p>",
    highlights: [
      ["Cross the Larke La (5,106 m)", "Walk over the Himalayan divide on the highest pass of the Manaslu region, with Himlung and Cheo Himal ahead."],
      ["Manaslu Base Camp and Birendra Lake", "Use the acclimatisation day at Samagaon for the climb to the base camp of the world's eighth highest mountain."],
      ["The Budhi Gandaki Gorge", "Follow a river through a canyon so tight the trail is cut into the rock face and bridged from wall to wall."],
      ["Tibetan Villages of Nubri", "Walk through Lho, Shyala and Samagaon, where the language, houses and monasteries are Tibetan rather than Nepali."],
      ["A Restricted Area with Few Trekkers", "Trek a permit-controlled region that sees a small fraction of the traffic on the Annapurna Circuit."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>March to May</strong> and <strong>late September to November</strong> are the seasons, and the pass decides both. Spring is warmer, with rhododendron in flower below Deng and on the Bimthang side, though there is usually more snow on the Larke La into early April. Autumn gives the clearest views of Manaslu and the firmest crossing, and October is the busiest month on the route.</p><p>Winter closes the pass with snow from December to February and Samdo and Dharamsala shut down, leaving no shelter on the high section. The monsoon brings landslides in the Budhi Gandaki gorge — the most serious hazard on this trek in any season — along with leeches and cloud that hides the mountain entirely, so June to August is not recommended.</p>",
      },
      {
        heading: "Trek Difficulty & Fitness",
        content:
          "<p>This is a challenging trek. The pass day is long and cold, starting around four in the morning and covering 5,106 m of altitude and a 1,400 m descent in a single push. Before that the route gains height steadily for a week, and the gorge sections below Deng involve constant up and down on rough, sometimes exposed trail.</p><p>You should be able to walk six to eight hours a day for two weeks and handle a very long day at altitude. Eight to ten weeks of preparation — hill walking with a loaded pack, plus cardio work — makes the difference on the pass. Previous trekking experience above 4,000 m is a real advantage, and trekking poles are close to essential for the Bimthang descent.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 6,000 m</strong> is required for this route. The Larke La at 5,106 m sits above the ceiling on most standard policies, which often stop at 3,000 m or 4,000 m, and a policy that excludes the pass covers you for none of the days that matter.</p><p>The policy must include <strong>emergency helicopter evacuation</strong> and medical treatment. There is no road access between Machha Khola and Dharapani, and evacuation from Samdo, Dharamsala or the pass itself means a helicopter, which operators dispatch only against a guarantee of payment. Send us your policy number and the insurer's 24-hour emergency contact before you start walking.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>The trek runs from subtropical gorge at 900 m to snow at 5,106 m. Bring broken-in waterproof trekking boots, three base layers, a fleece, an insulated down jacket, a waterproof shell jacket and trousers, trekking trousers, a warm hat, a sun hat, liner and insulated gloves, and wool socks. A sleeping bag rated to <strong>-15°C</strong> is right for Dharamsala, which is the coldest night of the trek by a distance.</p><p>Also pack a 30-40 litre daypack, trekking poles, microspikes for the pass if you have them, a headlamp with spare batteries for the pre-dawn start, factor 50 sunscreen and lip balm, sunglasses, a reusable bottle with purification, a personal first aid kit with blister care, a quick-dry towel, and a power bank — charging is available at most lodges for a fee but is solar and slow above Namrung. Keep the porter duffel under 15 kg.</p>",
      },
      {
        heading: "Accommodation, Food & Drinking Water",
        content:
          "<p>You stay in teahouses every night of the trek. Lodges in the lower gorge at Machha Khola and Jagat are simple but comfortable; Namrung, Lho and Samagaon have improved a great deal and now offer twin rooms with good bedding and warm dining rooms. <strong>Dharamsala</strong> is the exception — a cluster of basic stone huts and dormitory rooms at 4,475 m with no heating, used for one night before the pass. Bimthang and Dharapani are comfortable again.</p><p>Three meals a day are included on the trek. <em>Dal bhat</em> with free refills is the staple and the best value, alongside noodles, fried rice, momos, soups, potatoes and Tibetan bread. Above Namrung the menu shortens and prices rise, because everything is carried up by mule or on a porter's back. Refill your bottle at lodges and treat it rather than buying plastic bottles, which are banned in the conservation area.</p>",
      },
    ],
    faqs: [
      { question: "How is this different from the Manaslu Circuit Trek?", answer: "It is the same crossing of the Larke La with a day less at each end: a jeep straight to Machha Khola instead of walking in from Soti Khola, and a longer drive out from Dharapani. If you want the extra days in the lower gorge and the option of the Tsum Valley, the fifteen-day Manaslu Circuit is the fuller version of the same route." },
      { question: "Do I need a special permit and can I trek solo?", answer: "Manaslu is a restricted area. You need the Manaslu Restricted Area Permit plus the Manaslu and Annapurna conservation area permits, all included in your package. By law the restricted area permit requires a licensed guide and a minimum of two trekkers, so solo trekking is not possible on this route." },
      { question: "How hard is the pass day?", answer: "It is the hardest day of the trek: a four in the morning start from Dharamsala, four to five hours of climbing in the cold to 5,106 m, then a 1,400 m descent to Bimthang. Expect ten to twelve hours in total. Your guide sets a deliberately slow pace on the climb and watches the group for altitude symptoms throughout." },
      { question: "What happens if the Larke La is closed by snow?", answer: "Your guide checks conditions daily from Samagaon onwards and will hold the group at Samdo rather than cross in bad weather. If the pass stays shut the only option is to retrace the Budhi Gandaki, which takes four to five days, so we build flexibility into the schedule and keep you informed early." },
      { question: "How cold does it get at Dharamsala?", answer: "Night-time temperatures at 4,475 m routinely fall to -10°C and can reach -15°C in late autumn, and the huts are unheated. This is the night your sleeping bag rating matters. Most groups eat early, fill a bottle with hot water for the sleeping bag, and get in before the temperature drops." },
      { question: "Is there mobile signal and charging on the trail?", answer: "NTC and Ncell reach most villages as far as Samagaon, with gaps in the gorge and nothing at Dharamsala or on the pass. Lodges sell charging by the hour from solar power, and the fee rises with altitude. Bring a power bank and keep it warm overnight, as the cold drains batteries fast above Samdo." },
      { question: "What is the acclimatisation day at Samagaon for?", answer: "It breaks the height gain before Samdo and Dharamsala, which is the part of the route where altitude problems appear. The day walk goes either to Birendra Lake and Manaslu Base Camp at 4,800 m or to Pungyen Gompa, both of which climb high and return to sleep at 3,530 m — the pattern that acclimatises you properly." },
      { question: "How do we get back from Dharapani?", answer: "A jeep runs down the rough Marsyangdi road to Besisahar, which takes most of a day, and from there it is a paved highway to Kathmandu the following day. The road is genuinely rough as far as Besisahar; a jeep rather than a bus is included for that section." },
      { question: "Can the Tsum Valley be added to this trek?", answer: "Yes, but not within fourteen days. The Tsum Valley branches north at Philim and adds six to seven days plus a separate restricted area permit. If you want both, ask us about the twenty-day Tsum Valley and Manaslu Circuit itinerary instead." },
      { question: "Where can I withdraw cash?", answer: "There are no ATMs anywhere on this route. Draw all the Nepalese rupees you need in Kathmandu, in small denominations, and budget for drinks, snacks, charging, hot showers, Wi-Fi and tips for the whole fourteen days." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Machha Khola as per the itinerary.",
        "Private jeep transportation from Dharapani to Besisahar and onward transport to Kathmandu.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: MANASLU_PERMITS,
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 11,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A 14-day crossing from the Budhi Gandaki to the Marsyangdi over the Larke La (5,106 m), with an acclimatisation day at Samagaon for Manaslu Base Camp.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, teahouse lodging, all trekking meals, restricted area and conservation permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Mar-May, Sep-Nov",
    meta: {
      title: "Larke Pass Trek – 14 Days over the Larke La (5,106 m)",
      description:
        "A 14-day trek across the Larke La (5,106 m) from the Budhi Gandaki to the Marsyangdi, through the Tibetan villages of Nubri beneath Manaslu (8,163 m).",
      keywords:
        "Larke Pass Trek, Larke La, Larkya La pass, Manaslu trekking, Samagaon, Dharamsala Larke Phedi, Bimthang, restricted area trek Nepal",
      tags: "Larke Pass Trek, Manaslu, Remote Region, High Pass Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing. We go through the fourteen-day plan, the restricted area permit and the passport photographs it needs, the pass day and how it is run, and the kit list — with particular attention to your sleeping bag, because the night at Dharamsala is the coldest of the trek. Anything missing can be bought or hired a few minutes' walk from the hotel.",
        "The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Machha Khola (870 m)",
      elevation: "870 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki where the Manaslu trail begins.",
      lng: 84.8738,
      lat: 28.2293,
      html: p(
        "A long day in the jeep, and the only way into the Budhi Gandaki. We leave early on the Prithvi Highway, turn north at Dhading Besi, and follow an increasingly rough hill road through Arughat and Soti Khola.",
        "The last three hours are slow — a single-track road cut into the gorge wall, with the river a long way below and the driver taking blind corners on the horn. It is spectacular and occasionally alarming, and it saves a full day of walking on the old trail.",
        "<strong>Machha Khola (870 m)</strong> — 'fish river' — is a line of lodges along the water where the road runs out. Around 8–9 hours including stops. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Trek from Machha Khola (870 m) to Jagat (1,340 m)",
      elevation: "1,340 m",
      accommodation: "Jagat",
      placeDescription: "A stone-paved village and the official entry point to the Manaslu restricted area.",
      lng: 84.8959,
      lat: 28.3514,
      html: p(
        "The first walking day, following the Budhi Gandaki upstream through a gorge that tightens as you go.",
        "The trail crosses to the west bank and climbs over a ridge to <strong>Khorlabesi</strong>, then passes the hot springs at <strong>Tatopani</strong> where the river runs warm out of the rock. Beyond it the valley narrows and the path is cut into the cliff, crossing the river repeatedly on suspension bridges high above the water.",
        "The gradient is gentle but the day is constant up and down, with staircases carved into the rock in the tighter sections. <strong>Jagat (1,340 m)</strong> is a neat village of flagstone streets and stone houses, and the checkpoint where your restricted area permit is inspected for the first time. Around 6–7 hours. Overnight at Jagat.",
      ),
    },
    {
      title: "Trek from Jagat (1,340 m) to Deng (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Deng",
      placeDescription: "A small village where the valley turns west and the Tibetan-influenced upper Nubri begins.",
      lng: 84.8673,
      lat: 28.4794,
      html: p(
        "A long day through the narrowest part of the gorge, and the point where the culture starts to change.",
        "From Jagat the trail climbs to <strong>Sirdibas</strong> and crosses the river on a long suspension bridge to <strong>Philim</strong>, a substantial Gurung village on a shelf of terraced fields. Above Philim the route enters a canyon so tight that the path is bolted to the rock in places, with the river white below.",
        "At Ekle Bhatti the Tsum Valley branches north, and the main trail turns west into the upper Budhi Gandaki. Bamboo gives way to pine, the first mani walls appear beside the path, and the houses change to flat-roofed stone.",
        "<strong>Deng (1,860 m)</strong> is a small cluster of lodges where the valley opens slightly. Around 6–7 hours. Overnight at Deng.",
      ),
    },
    {
      title: "Trek from Deng (1,860 m) to Namrung (2,630 m)",
      elevation: "2,630 m",
      accommodation: "Namrung",
      placeDescription: "A Tibetan village with a stone gateway, the entrance to the upper Nubri valley.",
      lng: 84.7679,
      lat: 28.5451,
      html: p(
        "A steady climb into Tibetan country, gaining nearly 800 m through forest and gorge.",
        "The trail crosses and recrosses the river through <strong>Ghap</strong>, where the mani walls carry carved Buddhist scripture on both faces and the trail passes between them. Above Ghap the forest is fir, rhododendron and bamboo, and the valley walls close in for a final steep section beside the water.",
        "<strong>Namrung (2,630 m)</strong> is announced by a stone <em>kani</em> gateway painted inside with Buddhist murals — the traditional entrance to the upper valley. Beyond it the architecture, dress and language are Tibetan, and the village looks out on <strong>Himalchuli (7,893 m)</strong> and <strong>Ganesh Himal</strong>.",
        "Around 6–7 hours. Overnight at Namrung.",
      ),
    },
    {
      title: "Trek from Namrung (2,630 m) to Lho (3,180 m)",
      elevation: "3,180 m",
      accommodation: "Lho",
      placeDescription: "A terraced Tibetan village with a hilltop monastery and a full view of Manaslu.",
      lng: 84.702,
      lat: 28.574,
      html: p(
        "A shorter day with a spectacular finish, and the first sight of the mountain the trek is built around.",
        "The trail climbs through barley terraces and past long mani walls to <strong>Lihi</strong> and <strong>Sho</strong>, both compact villages of flat-roofed houses with firewood stacked on the roofs and prayer flags on the ridge poles. The valley opens out and the walking is easy and level for long stretches.",
        "<strong>Lho (3,180 m)</strong> arrives in the early afternoon, arranged on terraces beneath <strong>Ribung Gompa</strong>. The short climb to the monastery before sunset is the thing to do here: from the courtyard the view is straight up the valley to <strong>Manaslu (8,163 m)</strong>, the eighth highest mountain in the world, with its summit ridge catching the last of the light.",
        "Around 4–5 hours. Overnight at Lho.",
      ),
    },
    {
      title: "Trek from Lho (3,180 m) to Samagaon (3,530 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The largest village in Nubri, a Tibetan settlement directly beneath Manaslu.",
      lng: 84.644,
      lat: 28.5847,
      html: p(
        "A short day, deliberately, because the altitude is starting to count.",
        "The trail climbs gently through fir forest to <strong>Shyala</strong>, a village in an extraordinary position with Manaslu on one side, Himalchuli and Ngadi Chuli behind, and Peak 29 across the valley. Many groups stop here for tea simply because of where it is.",
        "Beyond Shyala the valley broadens into pasture and the walking is level to <strong>Samagaon (3,530 m)</strong>, the largest and oldest village in Nubri: a tight cluster of wooden and stone houses, a long mani wall, yaks in the fields, and a community that has farmed and traded across the Tibetan border for centuries.",
        "Arrive by early afternoon and rest — tomorrow is an acclimatisation day, not a rest day. Around 4 hours. Overnight at Samagaon.",
      ),
    },
    {
      title: "Acclimatization Day at Samagaon (3,530 m) – Hike to Manaslu Base Camp (4,800 m)",
      elevation: "3,530 m",
      accommodation: "Samagaon",
      placeDescription: "The largest village in Nubri, a Tibetan settlement directly beneath Manaslu.",
      lng: 84.644,
      lat: 28.5847,
      html: p(
        "The day that makes the pass possible, spent climbing high and coming back down to sleep.",
        "The main option is the walk to <strong>Manaslu Base Camp (4,800 m)</strong>, a steep four to five hour climb past <strong>Birendra Lake</strong> — a milky turquoise glacial lake below the Manaslu Glacier — and up the moraine to the expedition site. It is a serious day out with 1,300 m of ascent, and the reward is standing at the foot of an 8,000 m face.",
        "The gentler alternative is <strong>Pungyen Gompa</strong>, a monastery on a shelf east of the village with a direct view of the Manaslu glacier, about three hours round trip. Either one gets you above 4,000 m and back.",
        "Your guide watches the group closely today, because how you handle this walk is the best indicator of how the pass will go. Overnight at Samagaon.",
      ),
    },
    {
      title: "Trek from Samagaon (3,530 m) to Samdo (3,875 m)",
      elevation: "3,875 m",
      accommodation: "Samdo",
      placeDescription: "The last permanent village before the Larke La, three hours from the Tibetan border.",
      lng: 84.6341,
      lat: 28.6509,
      html: p(
        "A short, easy day north up the valley — the pattern that keeps working at this height.",
        "The trail leaves Samagaon past the mani wall and follows the Budhi Gandaki through juniper scrub and open pasture, with the river braiding across a wide gravel bed. The old trade route to Tibet branches east at the Larkya Bazaar ruins, where Tibetan traders still cross over the Gya La in summer.",
        "<strong>Samdo (3,875 m)</strong> sits on a shelf above the river, a compact village of about forty houses built by Tibetan refugees in the 1960s. It is the last permanent settlement before the pass, and the border is a three-hour walk north.",
        "You arrive by lunchtime. The afternoon is free for a short walk up the ridge behind the village for the view into Tibet — good acclimatisation and worth the hour. Around 3–4 hours. Overnight at Samdo.",
      ),
    },
    {
      title: "Trek from Samdo (3,875 m) to Dharamsala (4,475 m)",
      elevation: "4,475 m",
      accommodation: "Dharamsala",
      placeDescription: "A cluster of basic stone huts below the Larke La, also called Larke Phedi.",
      lng: 84.5844,
      lat: 28.6589,
      html: p(
        "The shortest walking day of the trek and, for most people, the least comfortable night.",
        "The trail drops to cross the Budhi Gandaki and then climbs steadily across barren slopes of scree and dry grass, past a ruined <em>kani</em> and along the moraine of the Larkya Glacier. There is no shelter and no village, and the wind picks up through the middle of the day.",
        "<strong>Dharamsala (4,475 m)</strong>, also called Larke Phedi, is a handful of stone huts and dormitory rooms with a kitchen shack — no heating, basic bedding, and shared outside toilets. It exists purely so that groups can be on the pass at dawn.",
        "Only three to four hours of walking, so you arrive by lunchtime with the afternoon to rest, drink and eat as much as you can manage. Your guide runs through the morning plan: a 4 am start, layers on before you leave the hut, and a slow steady pace. Overnight at Dharamsala.",
      ),
    },
    {
      title: "Cross the Larke La (5,106 m) and Descend to Bimthang (3,720 m)",
      elevation: "3,720 m",
      accommodation: "Bimthang",
      placeDescription: "A meadow of yak pasture and rhododendron on the west side of the Larke La.",
      lng: 84.4713,
      lat: 28.6338,
      html: p(
        "The big day. We leave Dharamsala at around four in the morning, head-torches on, to be over the pass before the afternoon wind.",
        "The climb is long rather than technical: a steady four to five hours up moraine and snow beside the Larkya Glacier, with false summits that test the patience. The cold before sunrise is the hardest part, and the pace is deliberately slow.",
        "The <strong>Larke La (5,106 m)</strong> is a broad saddle strung with prayer flags, and the view west is the reward for the whole trek — <strong>Himlung Himal (7,126 m)</strong>, <strong>Cheo Himal</strong>, <strong>Gyaji Kang</strong> and the Annapurna range beyond, with the Larkya Glacier below.",
        "The descent is steep, long and loose: 1,400 m down snow and then moraine to the meadows of <strong>Bimthang (3,720 m)</strong>, where there are lodges, grass and yaks. Ten to twelve hours in total. Overnight at Bimthang.",
      ),
    },
    {
      title: "Trek from Bimthang (3,720 m) to Dharapani (1,860 m)",
      elevation: "1,860 m",
      accommodation: "Dharapani",
      placeDescription: "A Marsyangdi valley village where the Manaslu trail joins the Annapurna Circuit.",
      lng: 84.35838,
      lat: 28.51945,
      html: p(
        "A long descent out of the mountains and back into settled, green country.",
        "The morning starts with the view back at Manaslu from the meadow, then the trail crosses the Dudh Khola and drops through rhododendron and pine forest — a striking change after a week of rock and barley terraces. Below Karche the valley opens into farmland and the first road-connected villages appear.",
        "<strong>Dharapani (1,860 m)</strong> is where the Manaslu route joins the <strong>Annapurna Circuit</strong>, and after ten days in a restricted area the sudden appearance of jeeps, bakeries and other trekkers is a genuine jolt.",
        "Around 7–8 hours, mostly downhill and hard on the knees. Overnight at Dharapani.",
      ),
    },
    {
      title: "Drive from Dharapani (1,860 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long travel day, starting with the roughest road on the trip.",
        "A jeep takes the group down the Marsyangdi to <strong>Besisahar</strong> — three to four hours of genuinely bad road, fording streams and crawling along ledges above the river, with the compensation of a valley that gets greener by the kilometre.",
        "From Besisahar the highway is paved and the drive to <strong>Kathmandu (1,400 m)</strong> takes a further five to six hours through Dumre and along the Prithvi Highway, with a lunch stop en route.",
        "You arrive in the evening and transfer to your hotel. This is the night for a celebration dinner with your guide — the crew leaves the group here. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later in the day, <strong>Boudhanath Stupa</strong> is the natural place to finish a Manaslu trek — the Tibetan Buddhist culture around the stupa is the same tradition you walked through in Nubri.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "In fourteen days you have crossed the Himalaya on foot, walked from subtropical gorge to a 5,106 m pass, and spent a week in one of the last genuinely Tibetan valleys on the Nepali side of the border. If that is the kind of trekking you want more of, the Tsum Valley next door and the Kanchenjunga circuit in the far east are the obvious next steps. Safe travels.",
      ),
    },
  ],
};
