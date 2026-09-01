import { AIRPORT, AIRPORT_PLACE, KATHMANDU, KTM_PLACE, KTM_RETURN_PLACE, POKHARA, p, type NewTrek } from "./types";

const ACAP = "Annapurna Conservation Area Permit (ACAP) and required trekking permits.";

/** Beni to Jomsom over the French Pass and the Dhampus Pass, camping throughout. */
export const dhaulagiriCircuitTrek: NewTrek = {
  price: 2250,
  difficulty: "difficult",
  maxAltitude: 5360,
  center: [83.48, 28.65],
  zoom: 9,
  content: {
    slug: "dhaulagiri-circuit-trek",
    title: "Dhaulagiri Circuit Trek",
    overview:
      "<p>The <strong>Dhaulagiri Circuit Trek</strong> is the hardest of Nepal's classic routes and the only one that circles an 8,000 m peak entirely on foot, with no teahouses and no escape road once you commit to the glacier. From the roadhead at Darbang the trail follows the Myagdi Khola through Muri and Boghara into a gorge that narrows day by day, then leaves the last village behind at <strong>Dobang</strong> and climbs onto the <strong>Chhonbardan Glacier</strong> beneath the 4,000 m south face of <strong>Dhaulagiri I (8,167 m)</strong>.</p><p>Three nights on the ice at Italian Base Camp, Glacier Camp, and <strong>Dhaulagiri Base Camp (4,750 m)</strong> set you up for the crux: the <strong>French Pass (5,360 m)</strong> into the closed basin of <strong>Hidden Valley</strong>, then the <strong>Dhampus Pass (5,290 m)</strong> and a 1,600 m descent to Yak Kharka and the apple orchards of Marpha in the Kali Gandaki. It is a full expedition — tents, a cook crew, and two 5,000 m passes — and it finishes in the one place in Nepal where you can walk off a glacier and be handed a slice of apple pie.</p>",
    highlights: [
      ["Circle an 8,000 m Peak on Foot", "Walk a complete loop around Dhaulagiri I, the seventh highest mountain in the world, from valley farmland to glacier."],
      ["Cross the French Pass (5,360 m)", "Climb the trek's high point beneath Dhaulagiri's north face and drop into the closed basin of Hidden Valley."],
      ["Three Camps on the Chhonbardan Glacier", "Sleep on the ice below the 4,000 m south face, one of the largest mountain walls anywhere."],
      ["Hidden Valley and the Dhampus Pass", "Cross a second 5,000 m pass out of a valley with no permanent settlement in it."],
      ["Finish in the Kali Gandaki", "Descend from the snow to Marpha's apple orchards and Jomsom in a single dramatic day."],
    ],
    sections: [
      {
        heading: "Best Time to Trek",
        content:
          "<p>There are two narrow windows, and the passes decide both. <strong>Late April to May</strong> gives the most stable snow on the French Pass and the longest days for the glacier section, with rhododendron in flower on the approach through Muri and Boghara. <strong>October to early November</strong> is the other option, with the clearest air of the year and firm walking on the glacier before the cold sets in.</p><p>Outside those windows this route is not viable. From late November the passes hold deep snow and Hidden Valley becomes a serious avalanche and whiteout risk with no shelter to retreat to. The monsoon between June and September brings leeches and landslides in the Myagdi gorge and hides the mountain completely, and the glacier section becomes unjustifiable in poor visibility.</p>",
      },
      {
        heading: "Trek Difficulty & What to Expect",
        content:
          "<p>This is one of the most demanding trekking routes in Nepal, and it is the closest thing to a mountaineering expedition that does not require technical climbing. You cross two passes above 5,200 m, spend three nights on a glacier, and walk moraine, loose rock, and snow where a slip has consequences. Your group carries everything — tents, food, fuel, and kitchen — and there is no lodge, shop, or road between Dobang and Marpha.</p><p>You need previous multi-day trekking experience at altitude and genuine hill fitness: seven to nine hours a day for two weeks, on ground that is rarely flat and often unstable. Crampons or microspikes and an ice axe are carried for the pass sections and your guide will show you how to use them. Three to four months of preparation — long weekend hill days with a loaded pack, plus cardio and leg strength work — is realistic rather than optimistic.</p>",
      },
      {
        heading: "Travel Insurance",
        content:
          "<p>Travel insurance covering <strong>trekking to at least 6,000 m</strong> is mandatory for this route. The French Pass at 5,360 m and Dhampus Pass at 5,290 m sit well above the 3,000 m or 4,000 m ceiling on most standard policies, and several insurers also exclude glacier travel outright, so read the activity definitions and not just the altitude number.</p><p>The policy must include <strong>emergency helicopter evacuation and repatriation</strong>. There is no road, no airstrip, and no medical post between Dobang and Marpha, and a serious problem in Hidden Valley or on the glacier means a helicopter flown to a landing zone above 4,700 m, which operators dispatch only against a guarantee of payment. Send us your policy number and the insurer's 24-hour emergency line well before departure.</p>",
      },
      {
        heading: "Packing List",
        content:
          "<p>This is a camping trek at altitude, so your sleep system matters more than on any teahouse route. Bring a <strong>four-season sleeping bag rated to -20°C</strong>, an insulated sleeping mat, waterproof mountaineering-grade boots that take crampons, gaiters, an insulated down jacket, a windproof and waterproof shell jacket and trousers, four base layers, a fleece, insulated and liner gloves, a warm hat, a sun hat, and several pairs of wool socks.</p><p>Also pack a 35-45 litre daypack, trekking poles, glacier sunglasses (category 4) and goggles, a headlamp with spare batteries, factor 50 sunscreen and lip balm, a one litre insulated bottle plus purification, a thorough personal first aid kit including blister care, a quick-dry towel, wet wipes and hand sanitiser for the days with no washing water, and a large power bank — there is no charging at all between Dobang and Marpha. Crampons and an ice axe are supplied by us if you do not own them.</p>",
      },
      {
        heading: "Camping, Food & Drinking Water",
        content:
          "<p>The first two nights are in simple lodges or homestays in the Myagdi valley. From Dobang onwards you are in <strong>two-person tents</strong> carried and pitched by the crew, with a separate mess tent and toilet tent. The camps at Italian Base Camp, Glacier Camp, Dhaulagiri Base Camp, and Hidden Valley are on moraine or snow and are genuinely cold — expect -10°C to -20°C overnight at the higher camps. The trek finishes with lodge nights in Marpha and Jomsom.</p><p>A cook and kitchen crew travel with the group and prepare three hot meals a day plus tea. Food is fresh for the first days and then draws on what the porters carry: rice, lentils, pasta, potatoes, eggs, tinned and dried goods, with soup at every camp to keep fluid intake up. Drinking water is boiled or drawn from streams and treated by the crew — never take glacier meltwater untreated. Carry two litres and drink four a day above Italian Base Camp.</p>",
      },
    ],
    faqs: [
      { question: "Do I need mountaineering experience for this trek?", answer: "No technical climbing experience is required, but this is not a first Himalayan trek. You should have completed a multi-day trek above 4,000 m before. The French and Dhampus passes involve walking on snow in crampons roped to your guide when conditions require it, and your guide teaches the technique at base camp." },
      { question: "How many staff travel with the group?", answer: "A licensed guide, an assistant guide, a cook and kitchen crew, and porters for the tents, food, and group equipment. On a fully camping route the support team is usually larger than the trekking group itself, which is why the trek costs more per day than a teahouse route." },
      { question: "What happens if the French Pass is closed by snow?", answer: "Your guide checks conditions from Dhaulagiri Base Camp and will wait a day rather than cross in bad weather. If the pass stays closed the group retraces the Myagdi valley to Darbang, which adds three to four days. We build a contingency day into the trip for exactly this reason." },
      { question: "Where is the highest point and how cold does it get?", answer: "The French Pass at 5,360 m is the high point. Night-time temperatures at Dhaulagiri Base Camp and Hidden Valley routinely fall to -15°C and can reach -20°C, and the wind on the passes makes it feel considerably colder. A -20°C sleeping bag and a full down layer are not optional on this route." },
      { question: "Is there mobile signal or any way to charge devices?", answer: "There is patchy NTC signal as far as Boghara and nothing again until Marpha. There is no mains power between Dobang and Marpha. Bring a large power bank or a small solar panel, keep batteries inside your sleeping bag overnight, and expect to be genuinely out of contact for about a week." },
      { question: "Which permits do I need?", answer: "The Annapurna Conservation Area Permit and the required trekking registration, both included in your package and arranged by our team. Dhaulagiri is not a restricted area, so no special restricted-area permit or minimum group size applies." },
      { question: "How do we get back from Jomsom?", answer: "The itinerary drives from Jomsom to Pokhara down the Kali Gandaki road, which takes most of a day. The twenty-minute Jomsom to Pokhara flight can replace it as an add-on, weather permitting — morning departures only, and flights are frequently cancelled by wind after mid-morning." },
      { question: "How much weight will I carry myself?", answer: "Only your daypack — water, layers, camera, and what you need during the day, usually seven to ten kilograms. Porters carry your duffel, limited to 15 kg, along with the tents, food, and kitchen. Keep anything you might need during the walking day with you, as the porters often move at a different pace." },
      { question: "What is the toilet and washing situation on the glacier?", answer: "The crew pitches a toilet tent at every camp and carries out all waste from the glacier section. Washing is a bowl of warm water in the morning; there are no showers between Darbang and Marpha, which is about ten days. Wet wipes and hand sanitiser are the practical answer." },
      { question: "Can this trek be shortened?", answer: "Not meaningfully. Once the group is above Dobang the only ways out are forward over the passes or back down the Myagdi valley, and both take several days. If you have less time, the Khopra Danda or Mohare Danda routes give Dhaulagiri views for a fraction of the commitment." },
    ],
    inclusions: {
      transport: [
        "Private transportation from Kathmandu to Pokhara and from Pokhara to Kathmandu as per the itinerary.",
        "Private transportation from Pokhara to Darbang and from Jomsom back to Pokhara as per the itinerary.",
      ],
      cityAccommodation: ["Accommodation in Kathmandu with breakfast.", "Accommodation in Pokhara with breakfast."],
      permits: ACAP,
      extra: [
        "Two-person tents, mess tent, toilet tent, and all group camping equipment.",
        "Cook and kitchen crew for the camping section of the trek.",
        "Crampons, ice axe, and fixed rope for the French Pass and Dhampus Pass crossings.",
      ],
    },
    exclusions: { cityMeals: "Lunch and dinner in Kathmandu and Pokhara." },
    porterDays: 13,
    flightAddons: ["ktm-pkr", "pkr-ktm"],
    extraAddons: [
      {
        title: "Flight from Jomsom to Pokhara",
        description:
          "Replace the long Kali Gandaki road transfer with the 20-minute mountain flight from Jomsom to Pokhara, available at an additional cost and subject to morning weather.",
        unit: "person",
        pricePerUnit: 145,
      },
    ],
    fixedDepartureDay: "monday",
    itineraryDescription:
      "An 18-day camping expedition around Dhaulagiri I (8,167 m), crossing the French Pass (5,360 m) and the Dhampus Pass (5,290 m) between the Myagdi Khola and the Kali Gandaki.",
    inExDescription:
      "Airport transfers, private road transport, Kathmandu and Pokhara hotel nights, full camping equipment with a cook crew, all trekking meals, conservation area permits, a licensed guide, trekking map, first aid, and government taxes are included, while international flights, visa, insurance, personal gear, porter service, city lunches and dinners, personal expenses, and tips are excluded.",
    bestTime: "Apr-May, Oct-Nov",
    meta: {
      title: "Dhaulagiri Circuit Trek – 18 Days Camping Expedition",
      description:
        "An 18-day camping trek around Dhaulagiri I (8,167 m) over the French Pass (5,360 m) and Dhampus Pass (5,290 m), from the Myagdi Khola to Jomsom.",
      keywords:
        "Dhaulagiri Circuit Trek, French Pass trek, Dhampus Pass, Hidden Valley Nepal, Dhaulagiri Base Camp, camping trek Nepal, remote trekking Nepal",
      tags: "Dhaulagiri Circuit Trek, Remote Region, Camping Trek, High Pass Trek, Nepal Trekking",
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
        "This trek carries a longer briefing than most. Your guide goes through the full eighteen-day plan, the camping routine, the two pass crossings, and the equipment we supply — crampons, ice axe, tents, and the kitchen the crew carries. We check your personal kit carefully against the list, because once the group leaves Dobang there is nothing to buy and nothing to hire for about ten days. Anything missing can be bought or rented in Thamel this afternoon.",
        "The rest of the day is free. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive from Kathmandu (1,400 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A beautiful lakeside city and the gateway to the Annapurna and Dhaulagiri regions.",
      ...POKHARA,
      html: p(
        "After breakfast we leave the Kathmandu Valley on the <strong>Prithvi Highway</strong>, following the Trishuli River west through gorge country with terraced hillsides above and whitewater below.",
        "The drive to <strong>Pokhara (822 m)</strong> covers roughly 200 km and takes most of the day, with a lunch stop at a riverside restaurant. If you would rather not spend the day on the road, the 25-minute flight is available as an add-on.",
        "Pokhara arrives in the late afternoon, spread along the shore of <strong>Phewa Lake</strong> with the Annapurnas behind it. This is the last comfortable evening before the tents: use it to repack, hand over anything you want left behind, and have a proper dinner. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Darbang (1,110 m) and Trek to Dharapani (1,560 m)",
      elevation: "1,560 m",
      accommodation: "Dharapani",
      placeDescription: "A farming village on the Myagdi Khola where the Dhaulagiri trail leaves the road behind.",
      lng: 83.3752,
      lat: 28.4533,
      html: p(
        "An early start for the drive west through Beni, the district town at the confluence of the Kali Gandaki and the Myagdi Khola, and on up a rough hill road to the roadhead at <strong>Darbang (1,110 m)</strong>. Four to five hours in the vehicle, the last part slow and bumpy.",
        "The walking starts here. The trail crosses the Myagdi Khola and climbs gently through terraced fields of millet and maize, past Magar villages with slate roofs and buffalo tethered under the eaves. This is working farmland rather than trekking country, and children walking home from school are the main traffic on the path.",
        "<strong>Dharapani (1,560 m)</strong> is a village strung along the hillside above the river, with Dhaulagiri's outliers appearing to the north for the first time. Around 3 hours of walking. Overnight at Dharapani.",
      ),
    },
    {
      title: "Trek from Dharapani (1,560 m) to Muri (1,850 m)",
      elevation: "1,850 m",
      accommodation: "Muri",
      placeDescription: "A large Magar village on a shelf above the Myagdi Khola with the first full view of Dhaulagiri.",
      lng: 83.3448,
      lat: 28.5157,
      html: p(
        "A steady day through the middle hills, with more up and down than the small altitude gain suggests.",
        "The trail contours above the Myagdi Khola through Sibang and Phalai Gaon, dropping to cross side streams on suspension bridges and climbing back onto the shoulder each time. The forest here is subtropical — banana and bamboo low down, giving way to pine as you gain height — and the villages are Magar, one of the hill communities that made this valley their home long before trekkers arrived.",
        "The last climb brings you onto the shelf at <strong>Muri (1,850 m)</strong>, a substantial village of stone houses with a school and a handful of shops. From the fields above it you get the first uninterrupted view of <strong>Dhaulagiri I (8,167 m)</strong> at the head of the valley, which is a useful reminder of where the next week goes. Around 6 hours. Overnight at Muri.",
      ),
    },
    {
      title: "Trek from Muri (1,850 m) to Boghara (2,080 m)",
      elevation: "2,080 m",
      accommodation: "Boghara",
      placeDescription: "The last substantial village on the Myagdi Khola before the trail enters the gorge.",
      lng: 83.3806,
      lat: 28.5624,
      html: p(
        "The valley begins to close in today and the trail becomes noticeably rougher.",
        "From Muri the path drops steeply to the Dhara Khola, crosses it, and climbs through Naura to traverse a long exposed hillside high above the Myagdi Khola. Sections here are cut into the slope and are narrow, with a considerable drop below — straightforward in dry conditions but taken slowly and one at a time when the ground is wet.",
        "The forest thickens into oak and rhododendron and the farmland thins out. <strong>Boghara (2,080 m)</strong> sits on a small terrace above the river, the last village with a permanent population and the last place with any kind of shop. Everything above this point comes out of a porter's load. Around 6–7 hours. Overnight at Boghara.",
      ),
    },
    {
      title: "Trek from Boghara (2,080 m) to Dobang (2,520 m)",
      elevation: "2,520 m",
      accommodation: "Dobang",
      placeDescription: "A clearing in the forest at the confluence of the Myagdi Khola and the Dobang Khola, and the first camp of the trek.",
      lng: 83.3925,
      lat: 28.6289,
      html: p(
        "A short but rough day that takes the group out of settled country for the last time.",
        "The trail climbs to a ridge above Boghara, drops through dense forest to Jyardan — a couple of herders' huts rather than a village — and then follows a high, narrow path carved along the gorge wall. In places the route has been rebuilt after landslides and your guide will scout ahead before the group crosses.",
        "The forest is magnificent through this section: old oak and rhododendron hung with moss, ferns underfoot, and the river a constant noise a long way below. Langur monkeys are common and you may hear pheasant in the undergrowth.",
        "<strong>Dobang (2,520 m)</strong> is a flat clearing at a river confluence with room for the tents. From tonight the group is entirely self-contained. Around 5–6 hours. Overnight camping at Dobang.",
      ),
    },
    {
      title: "Trek from Dobang (2,520 m) to Italian Base Camp (3,660 m)",
      elevation: "3,660 m",
      accommodation: "Italian Base Camp",
      placeDescription: "A meadow camp beneath the 4,000 m south face of Dhaulagiri, at the foot of the Chhonbardan Glacier.",
      lng: 83.4376,
      lat: 28.6925,
      html: p(
        "The biggest single climb of the approach, gaining over 1,100 m and finishing above the treeline in full view of the mountain.",
        "The trail follows the Myagdi Khola upstream through birch and juniper, crossing avalanche debris in two places where winter snow has swept the slope clean. The valley bends north and the forest gives out, replaced by open alpine meadow and low scrub. The change in the air is obvious — thinner, colder, and much quieter.",
        "The last hour brings the group onto the meadow at <strong>Italian Base Camp (3,660 m)</strong>, and the view stops most people where they stand: the <strong>south face of Dhaulagiri I</strong> rises 4,000 m directly ahead, one of the largest and steepest mountain walls on earth, with the <strong>Chhonbardan Glacier</strong> spilling out of its foot.",
        "Around 6–7 hours. Take the afternoon slowly — this is a real altitude gain. Overnight camping at Italian Base Camp.",
      ),
    },
    {
      title: "Acclimatization Day at Italian Base Camp (3,660 m)",
      elevation: "3,660 m",
      accommodation: "Italian Base Camp",
      placeDescription: "A meadow camp beneath the 4,000 m south face of Dhaulagiri, at the foot of the Chhonbardan Glacier.",
      lng: 83.4376,
      lat: 28.6925,
      html: p(
        "A full day at the same camp, and one that pays for itself over the pass a week from now.",
        "After a slow breakfast we walk up the moraine on the west side of the glacier to around <strong>4,100 m</strong> and come back down to sleep — the standard climb-high, sleep-low approach that persuades your body to start producing the red blood cells the passes will demand. It is three to four hours of easy walking with a lot of stopping to look at the face.",
        "The rest of the day is for rest, laundry in a bowl, and watching Dhaulagiri. Avalanches come off the south face through the afternoon with a delay of several seconds between the sight and the sound, and the scale only becomes clear when you try to follow one all the way down.",
        "Your guide checks everyone for headache, appetite, and sleep tonight, because from here the camps only get higher. Overnight camping at Italian Base Camp.",
      ),
    },
    {
      title: "Trek from Italian Base Camp (3,660 m) to Glacier Camp (4,210 m)",
      elevation: "4,210 m",
      accommodation: "Glacier Camp",
      placeDescription: "A moraine camp on the Chhonbardan Glacier between the Italian and Dhaulagiri base camps.",
      lng: 83.4529,
      lat: 28.7398,
      html: p(
        "A short day in distance and a slow one in practice, because today the group steps onto the glacier.",
        "The trail drops to the Chhonbardan Glacier and picks a line up its lateral moraine — loose rock, ice underfoot in places, and no path in the ordinary sense. Your guide reads the route ahead and the group moves together, with poles out and steady footing more important than speed. Crampons come out of the bag if the ice is bare.",
        "The valley walls close in on both sides and the noise changes: meltwater running under the ice, and rockfall clattering off the slopes as the sun comes round. Look back down the glacier for the classic view of Dhaulagiri's south-west ridge.",
        "<strong>Glacier Camp (4,210 m)</strong> is exactly what its name suggests — tents pitched on flattened moraine beside the ice. It is cold as soon as the sun goes off the valley, usually by four in the afternoon. Around 4–5 hours. Overnight camping at Glacier Camp.",
      ),
    },
    {
      title: "Trek from Glacier Camp (4,210 m) to Dhaulagiri Base Camp (4,750 m)",
      elevation: "4,750 m",
      accommodation: "Dhaulagiri Base Camp",
      placeDescription: "The expedition base camp beneath Dhaulagiri's north-east col, ringed by Tukuche Peak and the Dhaulagiri wall.",
      lng: 83.4995,
      lat: 28.7472,
      html: p(
        "A steady climb up the glacier to the highest camp before the pass, and a day where altitude sets the pace rather than distance.",
        "The route continues on the moraine and then onto the ice itself, weaving between old crevasses and pressure ridges. Progress is slow and deliberate; five hours today covers ground you would walk in two at sea level. The crew goes ahead to have tea ready.",
        "<strong>Dhaulagiri Base Camp (4,750 m)</strong> is an amphitheatre of rock and ice at the head of the glacier, used by expeditions attempting the north-east ridge. <strong>Dhaulagiri I</strong>, <strong>Dhaulagiri II</strong>, <strong>Tukuche Peak</strong>, and <strong>Sita Chuchura</strong> stand around the camp, and the French Pass is visible as a notch on the skyline to the north-east — tomorrow's line, and it looks a long way up.",
        "Around 4–5 hours. Drink more than you want to and eat even if your appetite has gone. Overnight camping at Dhaulagiri Base Camp.",
      ),
    },
    {
      title: "Acclimatization Day at Dhaulagiri Base Camp (4,750 m)",
      elevation: "4,750 m",
      accommodation: "Dhaulagiri Base Camp",
      placeDescription: "The expedition base camp beneath Dhaulagiri's north-east col, ringed by Tukuche Peak and the Dhaulagiri wall.",
      lng: 83.4995,
      lat: 28.7472,
      html: p(
        "A second acclimatization day, and the one that decides whether the French Pass goes well or badly.",
        "The morning is a short walk up the moraine towards the foot of the pass, gaining two or three hundred metres to look at the line and let your body register the height, then back to camp for lunch. Your guide uses the walk to watch how everyone is moving and breathing at 5,000 m.",
        "The afternoon is deliberately idle: rest, hot drinks, and a gear check. This is where crampons are fitted and adjusted, the rope is laid out, and your guide runs through the pass drill — the order the group walks in, what to do if the weather closes, and the turnaround time. Tomorrow starts before dawn.",
        "If the weather is settled the evening light on Dhaulagiri from this camp is the best of the trek. If it is not, this is the day we spend waiting rather than pushing on. Overnight camping at Dhaulagiri Base Camp.",
      ),
    },
    {
      title: "Cross the French Pass (5,360 m) and Trek to Hidden Valley (5,050 m)",
      elevation: "5,050 m",
      accommodation: "Hidden Valley",
      placeDescription: "A high closed basin with no permanent settlement, ringed by Tukuche Peak and Sita Chuchura.",
      lng: 83.5612,
      lat: 28.7977,
      html: p(
        "The crux of the trek, and the day everything so far has been preparation for.",
        "We leave camp in the dark to be on the pass before the wind gets up. The climb is long rather than steep — a sustained grind up snow and scree with the group moving slowly and together, roped if conditions require it. Sunrise catches Dhaulagiri behind you while you are still in shadow.",
        "The <strong>French Pass (5,360 m)</strong> is a broad saddle marked with prayer flags, and the view from it is the reason people come: <strong>Dhaulagiri I</strong> and <strong>II</strong>, <strong>Tukuche Peak</strong>, <strong>Sita Chuchura</strong>, and <strong>Mukut Himal</strong> arranged around the horizon, with the Tibetan plateau light beyond. It is cold and usually windy, so photographs are taken quickly.",
        "The descent north drops into <strong>Hidden Valley (5,050 m)</strong>, a wide closed basin of frozen grass and stone with no trees, no village, and no way out except over a pass in either direction. Camping here is memorably cold — expect -20°C — and memorably quiet. Around 6–7 hours. Overnight camping at Hidden Valley.",
      ),
    },
    {
      title: "Cross the Dhampus Pass (5,290 m) and Descend to Yak Kharka (3,680 m)",
      elevation: "3,680 m",
      accommodation: "Yak Kharka",
      placeDescription: "A grazing pasture above the Kali Gandaki where the trail returns to grass and running water.",
      lng: 83.6513,
      lat: 28.7561,
      html: p(
        "A second pass and then the longest descent of the trek — around 1,600 m of down in an afternoon.",
        "The climb out of Hidden Valley to the <strong>Dhampus Pass (5,290 m)</strong>, known locally as Thapa Bhanjyang, is shorter than yesterday's but the snow is often deeper and the wind on the crest is relentless. From the top the whole Annapurna range opens to the east across the Kali Gandaki, with <strong>Nilgiri</strong>, <strong>Annapurna I</strong>, and <strong>Tilicho Peak</strong> lined up in the distance and the brown Mustang hills to the north.",
        "The descent is long, loose, and hard on the knees: scree and then steep grass, dropping out of the snow into a landscape that becomes recognisably inhabited again. Poles help enormously here.",
        "<strong>Yak Kharka (3,680 m)</strong> is a summer grazing pasture with running water and, after a week on ice, the extraordinary luxury of soft ground to pitch on. Around 7–8 hours. Overnight camping at Yak Kharka.",
      ),
    },
    {
      title: "Trek from Yak Kharka (3,680 m) to Marpha (2,670 m)",
      elevation: "2,670 m",
      accommodation: "Marpha",
      placeDescription: "A whitewashed Thakali village in the Kali Gandaki famous for its apple orchards and brandy.",
      lng: 83.6862,
      lat: 28.7519,
      html: p(
        "A descent into an entirely different world, and for most groups the most enjoyable day of the trip.",
        "The trail drops steadily off the pasture through juniper and scrub into the <strong>Kali Gandaki</strong>, the deepest valley on earth measured between Dhaulagiri and Annapurna. The wind funnels up it from late morning, as it does every day of the year, and you walk the last section leaning into it.",
        "<strong>Marpha (2,670 m)</strong> arrives as a shock after ten days of tents: a Thakali village of whitewashed houses and flagstone lanes, with irrigation channels running under the street, a gompa above the rooftops, and apple orchards on every terrace around it. The village is known across Nepal for apples — pie, cider, dried rings, and the local brandy.",
        "Tonight is a lodge, a hot shower, and a bed. Around 5–6 hours. Overnight at Marpha.",
      ),
    },
    {
      title: "Trek from Marpha (2,670 m) to Jomsom (2,720 m)",
      elevation: "2,720 m",
      accommodation: "Jomsom",
      placeDescription: "The administrative centre of Mustang, set in the wind-scoured Kali Gandaki with an airstrip and road link.",
      lng: 83.7305,
      lat: 28.7838,
      html: p(
        "A short, easy final walking day along the valley floor, deliberately relaxed after two weeks of hard ground.",
        "The trail follows the Kali Gandaki north through Syang, on the broad grey riverbed under <strong>Nilgiri (7,061 m)</strong> and <strong>Dhaulagiri</strong> facing each other across the valley. This stretch is famous for <em>shaligram</em> — black ammonite fossils in the riverbed, remains of the sea floor that was lifted here when the range formed.",
        "<strong>Jomsom (2,720 m)</strong> is the district headquarters of Mustang, split across the river with an airstrip, government offices, and a good bakery. It is a two to three hour walk and you arrive in time for lunch.",
        "The afternoon is free to wander the town, visit the small mountaineering museum, and settle up with the crew — this is where the porters and cook staff leave the group, and where tips are given. Overnight at Jomsom.",
      ),
    },
    {
      title: "Drive from Jomsom (2,720 m) to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: "A scenic lakeside city offering a relaxing end to the trekking journey.",
      ...POKHARA,
      html: p(
        "A long and spectacular day on the road down the Kali Gandaki, following the river the whole way.",
        "The jeep leaves early and drops through Marpha, Tukuche, and Larjung with the gorge deepening around it, then Kalopani and Ghasa where the barren Mustang landscape suddenly turns green again and the vegetation returns valley by valley. The road is rough as far as Beni and paved from there to Pokhara.",
        "Between Larjung and Ghasa you are driving through the deepest part of the gorge, with <strong>Dhaulagiri (8,167 m)</strong> and <strong>Annapurna I (8,091 m)</strong> standing seven kilometres above the road on either side — the view that makes the drive worth doing at least once.",
        "Roughly 8–9 hours including stops, arriving in <strong>Pokhara (822 m)</strong> in the evening. If you would rather fly, the 20-minute Jomsom to Pokhara flight is available as an add-on. Overnight in Pokhara.",
      ),
    },
    {
      title: "Drive from Pokhara (822 m) to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_RETURN_PLACE,
      ...KATHMANDU,
      html: p(
        "A relaxed start. If you wake early, the sunrise over the Annapurnas from the lakeside is worth it, and a boat across Phewa Lake fills an hour before breakfast.",
        "We then drive east along the Prithvi Highway to <strong>Kathmandu (1,400 m)</strong>, back through the Trishuli gorge country with a lunch stop en route. It is a full day on the road; the 25-minute flight is available as an add-on if you would rather keep the afternoon free.",
        "You arrive in the late afternoon and transfer to your hotel. The evening is free, and Thamel is the place for last-minute shopping. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Tribhuvan International Airport",
      placeDescription: AIRPORT_PLACE,
      ...AIRPORT,
      html: p(
        "Your last day in Nepal. If your flight leaves later in the day there is time to see a little more of the valley — <strong>Boudhanath Stupa</strong> is the most rewarding half-day option, with <strong>Pashupatinath</strong> and <strong>Swayambhunath</strong> close behind.",
        "Our representative collects you from your hotel and transfers you to Tribhuvan International Airport around three hours before departure.",
        "Over eighteen days you have walked a complete circle around an 8,000 m peak, slept three nights on a glacier, and crossed two passes above 5,200 m — a route that a small fraction of the trekkers in Nepal each season attempt. If you want the same commitment somewhere else, the Makalu Base Camp and Kanchenjunga circuits are the natural next steps. Safe travels.",
      ),
    },
  ],
};
