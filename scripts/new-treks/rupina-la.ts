import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, p, type NewTrek } from "./types";

const MANASLU_PERMITS =
  "Manaslu Restricted Area Permit, Manaslu Conservation Area Permit, and required trekking permits.";

/** Barpak to the Budhi Gandaki over the Rupina La, camping on both sides of the pass. */
export const rupinaLaTrek: NewTrek = {
  price: 1650,
  difficulty: "challenging",
  maxAltitude: 4720,
  center: [84.79, 28.32],
  zoom: 10,
  content: {
    slug: "rupina-la-pass-trek",
    title: "Rupina La Pass Trek",
    overview:
      "<p>The <strong>Rupina La Pass Trek</strong> crosses the ridge between the Daraudi and Budhi Gandaki valleys on an old herders' route that almost no trekkers use. From the Gurung village of <strong>Barpak</strong> — the epicentre of the 2015 earthquake, since rebuilt — the trail climbs through Laprak and up a long forested valley of summer pasture to a camp below the pass, with Manaslu, Himalchuli and Ganesh Himal filling the skyline as the trees give out.</p><p>The <strong>Rupina La (4,720 m)</strong> is a rock and snow saddle with no lodge, no shop and no other party on most crossings. Beyond it the route drops steeply north into the Budhi Gandaki at <strong>Nyak</strong> and joins the Manaslu trail for the walk out through the gorge at Philim and Jagat. It is a short, hard, entirely self-supported trek for people who would rather camp on an empty pass than share a teahouse.</p>",
    highlights: [
      ["Cross the Rupina La (4,720 m)", "Walk a herders' pass between two great valleys that sees a handful of trekking groups each season."],
      ["Barpak and Laprak", "Stay in the Gurung villages at the epicentre of the 2015 earthquake, rebuilt in stone and slate by their own communities."],
      ["A Genuine Camping Trek", "Four nights in tents with a cook crew, on ground where there is no lodge to fall back on."],
      ["Manaslu, Himalchuli and Ganesh Himal", "Watch three separate massifs from the pasture below the pass, with no other trekkers in the view."],
      ["Finish on the Manaslu Trail", "Drop into the Budhi Gandaki gorge at Nyak and walk out through Philim and Jagat."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p><strong>April to May</strong> and <strong>October to November</strong> are the two workable windows. Spring brings the rhododendron forest above Laprak into flower and the pasture into use, with herders moving up as you do. Autumn is drier and clearer, with the most reliable snow conditions on the pass and the best chance of a settled crossing.</p><p>The Rupina La holds snow from December to March and there is no shelter on either side, so winter crossings are not viable for a trekking group. The monsoon makes the forest section leech-ridden and the descent to Nyak dangerously slippery, and cloud sits on the pass for weeks at a time, so June to September is not recommended.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is a challenging trek, less for its altitude than for its self-sufficiency. There are no lodges between Laprak and Nyak, no shops, no phone signal for several days and no road to walk out to. The group carries tents, food and a kitchen, and the pass day involves a long climb on scree and snow followed by a steep, loose descent of more than 1,500 m.</p><p>You should be comfortable walking six to eight hours a day on rough, unmaintained trail and be happy with camping, basic hygiene and cold nights. Previous experience above 4,000 m is strongly advised. Eight to ten weeks of hill fitness work makes the pass day manageable rather than memorable for the wrong reasons, and trekking poles are essential for the descent to Nyak.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 5,000 m</strong> is required, comfortably above the Rupina La at 4,720 m. Many standard policies cap at 3,000 m or 4,000 m and would leave the entire central section of this trek uninsured, so check the altitude clause specifically.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. Between Laprak and Nyak there is no road, no lodge and no medical post, and a helicopter is the only realistic evacuation from the pass area — operators fly against a guarantee of payment from the insurer, not a promise. Send us your policy number and the insurer's 24-hour emergency contact before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>Camping at 4,000 m changes the packing list. Bring a <strong>four-season sleeping bag rated to -15°C</strong> and an insulated mat, waterproof trekking boots, gaiters, three base layers, a fleece, an insulated down jacket, a waterproof and windproof shell jacket and trousers, a warm hat, sun hat, liner and insulated gloves, and several pairs of wool socks.</p><p>Also pack a 35-litre daypack, trekking poles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, sunglasses, a one litre bottle plus purification, a thorough personal first aid kit with blister care, wet wipes and hand sanitiser for the days without washing water, a quick-dry towel and a large power bank — there is no charging at all between Laprak and Nyak, which is four to five days.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The first two nights are in village homestays at Barpak and Laprak, both rebuilt after the earthquake and genuinely comfortable. From the pasture camp onwards you sleep in <strong>two-person tents</strong> pitched by the crew, with a mess tent and a toilet tent. The camps below and above the pass are exposed and cold, with overnight temperatures around -5°C to -10°C. Lodges return once the route joins the Manaslu trail at Nyak.</p><p>A cook and kitchen crew travel with the group for the camping section and prepare three hot meals a day. Food is fresh for the first days out of Barpak and then draws on carried supplies: rice, lentils, pasta, potatoes, eggs and dried goods, with soup at every camp. Drinking water is boiled or treated by the crew from streams and springs; carry two litres and drink more than you think you need above the treeline.</p>",
      },
    ],
    faqs: [
      { question: "How many other trekkers will we see?", answer: "Very few. The Rupina La sees a handful of organised groups a season and no independent trekkers, because there is nowhere to stay between Laprak and Nyak. You are more likely to meet herders moving stock to summer pasture than another trekking party." },
      { question: "Do I need a restricted area permit?", answer: "Yes. The route drops into the Manaslu restricted area at Nyak, so the Manaslu Restricted Area Permit and conservation area permit are both required and are included in your package. That permit needs a licensed guide and a minimum of two trekkers." },
      { question: "How hard is the pass day?", answer: "It is a long day: three to four hours of climbing to the saddle at 4,720 m, and then a descent of over 1,500 m on scree, grass and forest trail to the camp below. Expect nine to ten hours. Your guide starts before dawn to be on the pass while the snow is still firm." },
      { question: "What happens if the pass is closed?", answer: "Your guide assesses conditions from the camp below and will wait a day rather than cross in fresh snow or poor visibility. If the Rupina La stays shut the group retraces its steps to Barpak, which takes two to three days and ends the trek there, so we carry contingency food for that possibility." },
      { question: "What is Barpak like now after the earthquake?", answer: "Barpak was the epicentre of the April 2015 earthquake and lost most of its houses. It has been substantially rebuilt in stone and slate by the community, and it is once again one of the largest and best-organised Gurung villages in the middle hills. Local people talk about it openly and with some pride." },
      { question: "Is there any mobile signal?", answer: "There is NTC signal at Barpak and Laprak and again at Nyak and Philim. Between them, for roughly four days, there is nothing. Tell people at home before you leave the road that you will be out of contact for the middle of the trek." },
      { question: "How much weight do porters carry and what do I carry?", answer: "You carry a daypack of seven to ten kilograms with water, layers and camera. Porters carry your duffel, limited to 15 kg, plus the tents, food and kitchen equipment. On a camping trek the porter team is larger than on a teahouse route, which is reflected in the price." },
      { question: "Can this be combined with the Manaslu Circuit?", answer: "Yes, and it is a natural pairing. Instead of walking out through Philim, the route can turn north at Nyak and continue up the Budhi Gandaki to Samagaon and over the Larke La, adding about a week. Tell us at the booking stage so the permits are issued for the right dates." },
      { question: "What is the toilet and washing situation?", answer: "The crew pitches a toilet tent at every camp and carries out waste from the high camps. Washing is a bowl of warm water in the morning and there are no showers for the four camping days. Wet wipes and hand sanitiser do most of the work." },
      { question: "How do we get to Barpak?", answer: "A private jeep from Kathmandu via Gorkha, about eight hours, with the last two on a rough hill road. It is a long day but it puts the group at the trailhead without a wasted walking day on tarmac." },
    ],
    inclusions: {
      transport: [
        "Private jeep transportation from Kathmandu to Barpak as per the itinerary.",
        "Private jeep transportation from Machha Khola back to Kathmandu.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast."],
      permits: MANASLU_PERMITS,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu." },
    porterDays: 9,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A 12-day camping crossing from Barpak to the Budhi Gandaki over the Rupina La (4,720 m), finishing on the Manaslu trail at Nyak and Philim.",
    inExDescription:
      "Airport transfers, private jeep transport to and from the trailheads, Kathmandu hotel nights, full camping equipment with a cook crew, teahouse and homestay lodging, all trekking meals, restricted area and conservation permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city meals, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Rupina La Pass Trek – 12 Days Camping in Manaslu",
      description:
        "A 12-day camping trek over the Rupina La (4,720 m) from Barpak to the Budhi Gandaki, one of the least walked passes in the Manaslu region.",
      keywords:
        "Rupina La Pass Trek, Rupina La, Barpak trek, Laprak, Manaslu camping trek, off the beaten path Nepal, remote trekking Nepal",
      tags: "Rupina La Pass Trek, Manaslu, Remote Region, Camping Trek, High Pass Trek, Nepal Trekking",
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
        "Your guide joins you for the briefing. Because this is a camping trek the kit check is thorough: we go through your sleeping bag rating, boots, and layers, and explain the routine of a supported camp — how the crew moves ahead, when meals happen, and what the toilet and washing arrangements are. Anything you are missing can be bought or hired within a few minutes' walk.",
        "The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Barpak (1,960 m)",
      elevation: "1,960 m",
      accommodation: "Barpak",
      placeDescription: "A large Gurung village in Gorkha, rebuilt in stone after the 2015 earthquake.",
      lng: 84.7466,
      lat: 28.2028,
      html: p(
        "A long drive west and then north into the Gorkha hills. The Prithvi Highway takes the group as far as the Gorkha turning, and from there a hill road climbs steadily through terraced farmland with the Ganesh Himal appearing over the ridges.",
        "The last two hours are rough and slow, switchbacking up to <strong>Barpak (1,960 m)</strong>, a large Gurung village spread across a hillside at the head of the Daraudi valley. Barpak was the epicentre of the earthquake of April 2015 and lost almost every house; what stands now was rebuilt by the community in stone and slate, and the village is once again one of the most substantial in the middle hills.",
        "Around 8 hours including stops. The evening is a homestay with a Gurung family. Overnight at Barpak.",
      ),
    },
    {
      title: "Trek from Barpak (1,960 m) to Laprak (2,100 m)",
      elevation: "2,100 m",
      accommodation: "Laprak",
      placeDescription: "A Gurung village on a steep hillside above the Machha Khola, resettled after the earthquake.",
      lng: 84.8014,
      lat: 28.2191,
      html: p(
        "A short first walking day over the ridge between two valleys, useful for finding your legs before the climbing starts.",
        "The trail leaves Barpak and climbs through terraced fields to a pass on the ridge at around 2,500 m, marked with prayer flags and a clear view back over the village. On a good morning <strong>Manaslu (8,163 m)</strong>, <strong>Himalchuli (7,893 m)</strong> and the Ganesh Himal are all visible from here at once.",
        "The descent drops through pine and rhododendron to <strong>Laprak (2,100 m)</strong>, a Gurung village on a very steep hillside. Laprak was also destroyed in 2015 and part of the community was resettled on the ridge above at Gupsi Pakha, so the village now exists in two places — the old terraces below and the new houses above.",
        "Around 4–5 hours. Overnight in a homestay at Laprak.",
      ),
    },
    {
      title: "Trek from Laprak (2,100 m) to the Rupina Valley Forest Camp (3,000 m)",
      elevation: "3,000 m",
      accommodation: "Rupina Valley Forest Camp",
      placeDescription: "A summer grazing pasture in the forest below the Rupina La, and the first camp of the trek.",
      // The herders' kharkas on this stretch are not mapped in OpenStreetMap;
      // this waypoint is placed on the route line between Laprak and the south
      // camp and should be confirmed against the crew's own camp position.
      lng: 84.7402,
      lat: 28.2712,
      html: p(
        "The last village behind you, and the start of four days without a shop, a lodge or a road.",
        "The trail turns north out of Laprak and climbs steadily into forest — oak first, then rhododendron and finally fir — following an old grazing route rather than a trekking trail. It is narrow, sometimes indistinct, and your guide leads rather than follows a sign.",
        "The forest is exceptional through this section. In spring the rhododendron is in flower for hours of walking, and the birdlife includes danphe, Nepal's national bird, which breaks cover in a flash of metallic colour.",
        "The camp is a summer pasture in a clearing at around <strong>3,000 m</strong>, with water nearby and room for the tents. In spring and early summer there will be herders here with buffalo and goats, and the exact clearing the crew uses depends on who is grazing where. Around 6 hours. Overnight camping in the Rupina valley.",
      ),
    },
    {
      title: "Trek from the Forest Camp (3,000 m) to Rupina La South Camp (3,500 m)",
      elevation: "3,500 m",
      accommodation: "Rupina La South Camp",
      placeDescription: "A high pasture camp below the south side of the Rupina La, above the treeline.",
      lng: 84.7313,
      lat: 28.325,
      html: p(
        "A short day by design, to gain height slowly and put the group in position for the pass.",
        "The trail climbs out of the forest and onto open hillside, and the change is abrupt: within an hour you go from closed canopy to unbroken views south over the Gorkha hills and north to the wall of the Himalaya. The path follows a stream up a broad grassy valley grazed by yaks in summer.",
        "<strong>Rupina La South Camp (3,500 m)</strong> is a flat area of grass and rock beside the stream, with the pass visible above as a notch in the ridge. It looks close and it is not — the climb tomorrow takes three to four hours.",
        "Only four hours of walking, so there is time in the afternoon for a short acclimatisation walk up the moraine and back. Your guide runs through the pass plan over dinner. Overnight camping at Rupina La South Camp.",
      ),
    },
    {
      title: "Cross the Rupina La (4,720 m) and Descend to Rupina North Camp (3,990 m)",
      elevation: "3,990 m",
      accommodation: "Rupina North Camp",
      placeDescription: "A camp on the northern side of the Rupina La, above the Budhi Gandaki valley.",
      lng: 84.7222,
      lat: 28.3791,
      html: p(
        "The crossing, and the reason for the trek.",
        "We leave camp before first light to be on the pass while the snow is firm and the weather is settled. The climb is a steady grind up grass, then scree, then usually snow for the last section, with the group moving together and slowly. It takes three to four hours.",
        "The <strong>Rupina La (4,720 m)</strong> is a narrow saddle strung with a few faded prayer flags. The view north is the payoff: <strong>Manaslu</strong>, <strong>Ngadi Chuli</strong> and <strong>Himalchuli</strong> across the Budhi Gandaki, the Ganesh Himal to the east, and not a building or a road anywhere in the frame.",
        "The descent north is steep and loose down snow and scree to the camp at <strong>3,990 m</strong>. It is hard on the knees and poles make a real difference. Around 7–8 hours in total. Overnight camping at Rupina North Camp.",
      ),
    },
    {
      title: "Trek from Rupina North Camp (3,990 m) to Nyak (2,300 m)",
      elevation: "2,300 m",
      accommodation: "Nyak",
      placeDescription: "A village on the Budhi Gandaki where the Rupina La route joins the Manaslu trail.",
      lng: 84.8937,
      lat: 28.4435,
      html: p(
        "A long descent out of the high country and back into inhabited valley.",
        "The trail drops through alpine scrub into birch and then rhododendron forest, losing height steadily all morning. Water becomes plentiful again, the air thickens, and you notice the smell of woodsmoke long before you see a house.",
        "The forest opens onto terraced fields and the trail joins the main Manaslu route at <strong>Nyak (2,300 m)</strong>, a village on a shelf high above the Budhi Gandaki. After four days without meeting anyone, arriving among lodges, mule trains and other trekkers takes some adjusting to.",
        "This is where the camping ends and the crew's job gets easier. Around 6–7 hours. Overnight at Nyak.",
      ),
    },
    {
      title: "Trek from Nyak (2,300 m) to Philim (1,570 m)",
      elevation: "1,570 m",
      accommodation: "Philim",
      placeDescription: "A large Gurung village on a terraced shelf above the Budhi Gandaki gorge.",
      lng: 84.8966,
      lat: 28.3933,
      html: p(
        "A steady day down the Budhi Gandaki on a properly maintained trail — a novelty after the pass.",
        "The route descends through Pewa and along the west bank of the river, with the gorge tightening below and long sections of trail cut into the rock face. Suspension bridges cross and recross the water, each one a good deal higher above it than the last one you remember.",
        "<strong>Philim (1,570 m)</strong> is a substantial Gurung village on a wide terraced shelf, with a school, shops and lodges. The fields around it are among the most productive in the valley, and after a week in the high country the sheer greenness is striking.",
        "Around 5–6 hours. Overnight at Philim.",
      ),
    },
    {
      title: "Trek from Philim (1,570 m) to Jagat (1,340 m)",
      elevation: "1,340 m",
      accommodation: "Jagat",
      placeDescription: "A stone-paved village and the checkpoint at the edge of the Manaslu restricted area.",
      lng: 84.8959,
      lat: 28.3514,
      html: p(
        "A short day through the tightest part of the gorge, where the trail is at its most spectacular.",
        "From Philim the path drops to the river and enters the canyon, running along ledges bolted and cut into the wall with the water white below. In a couple of places the trail is a staircase carved out of the rock. It is exposed but well built, and the group moves through it steadily.",
        "The route crosses to the east bank at Sirdibas and follows the river down to <strong>Jagat (1,340 m)</strong>, a tidy village of flagstone streets where the restricted area permits are checked out.",
        "Around 4–5 hours, arriving early. The afternoon is free, and the lodges here have hot showers — the first for a week. Overnight at Jagat.",
      ),
    },
    {
      title: "Trek from Jagat (1,340 m) to Machha Khola (870 m)",
      elevation: "870 m",
      accommodation: "Machha Khola",
      placeDescription: "A riverside village on the Budhi Gandaki at the end of the road.",
      lng: 84.8738,
      lat: 28.2293,
      html: p(
        "The last walking day, following the Budhi Gandaki down to the roadhead.",
        "The trail loses height steadily through subtropical country — banana, bamboo and terraced rice — with the river widening and slowing beside it. There is a stop at the hot springs at <strong>Tatopani</strong>, where water runs warm out of the rock into a stone tank beside the trail, and it is worth the twenty minutes.",
        "Below Khorlabesi the valley opens and the first jeeps appear on the track. <strong>Machha Khola (870 m)</strong> is where the road ends and the walking finishes.",
        "This is where the porters and cook crew leave the group and tips are given. Around 5–6 hours. Overnight at Machha Khola.",
      ),
    },
    {
      title: "Drive from Machha Khola (870 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A long day in the jeep back to the capital, retracing the gorge road to Arughat and Dhading Besi.",
        "The first three hours are the rough section, a single track above the river with the driver leaning on the horn at every blind corner. From Dhading Besi the road is paved and the rest of the run into <strong>Kathmandu (1,400 m)</strong> is straightforward, with a lunch stop en route.",
        "Around 8–9 hours in total. You arrive in the late afternoon and transfer to your hotel.",
        "The evening is free — a hot shower, a meal that did not come out of a mess tent, and Thamel for anything you want to take home. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later in the day there is time for <strong>Boudhanath</strong>, <strong>Pashupatinath</strong> or the old town at <strong>Bhaktapur</strong> with your guide.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "The Rupina La is one of the quietest crossings in the Manaslu region and you will have had it more or less to yourselves. If that is the kind of trekking you are after, the Ganesh Himal and Ruby Valley routes next door are the same character, and the Tsum Valley adds the culture. Safe travels.",
      ),
    },
  ],
};
