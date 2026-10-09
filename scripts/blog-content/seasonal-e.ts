import type { BlogContent } from "./build";
import { FESTIVALS, trekImage } from "./images";

/**
 * Autumn 2026 series, part 5: the rice harvest, Upper Mustang before its
 * lodges close, and the trekking peaks in the last weeks of their season.
 */
export const seasonalE: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "rice-harvest-season-in-nepal-village-walks",
    title: "Harvest Season in Nepal: Village Walks Among the Rice Terraces",
    cluster: "seasonal",
    date: "2026-10-24",
    hero: {
      image: FESTIVALS.harvestTerai,
      alt: "A woman carrying a large bundle of rice straw on her back across a harvested field in the Terai.",
    },
    excerpt:
      "From mid-October to late November the terraces of Nepal's middle hills turn gold and every family is in the fields. It is the most beautiful the countryside looks all year, and the easiest time to see how a village works. This is when and where to go, what you are watching, and how to visit well.",
    intro: [
      { p: "Most photographs of Nepal's terraces show them green. Come in the weeks between Dashain and Tihar and they are the colour of brass: whole hillsides stepped in ripe rice, with lines of people bent among it and the cut sheaves laid out to dry in rows. It lasts about a month in any one place, and it moves down the country from the higher villages to the plains as the weather cools." },
      { p: "This is the season that feeds the country, and it is done almost entirely by hand. For a visitor it has two attractions. The landscape is at its best. And the villages, which can feel closed and quiet at other times of year, are outdoors from dawn to dark — which makes them easy to walk through and easy to be welcomed in." },
    ],
    sections: [
      {
        h2: "When the Harvest Happens",
        blocks: [
          { p: "Rice is planted in the monsoon rains of June and July and takes four to five months to ripen. Altitude sets the date: the higher and cooler the terrace, the earlier it is cut." },
          {
            table: {
              head: ["Where", "Altitude", "Harvest"],
              rows: [
                ["Upper hill villages (Ghandruk, Ghalegaun, Langtang foothills)", "1,600 – 2,100 m", "Early to late October"],
                ["Middle hills (Pokhara valley, Bandipur, Nuwakot, Dhulikhel)", "700 – 1,500 m", "Mid-October to mid-November"],
                ["Kathmandu valley", "1,300 – 1,400 m", "Late October to mid-November"],
                ["Inner Terai and plains (Chitwan, Lumbini, Janakpur)", "100 – 300 m", "November into early December"],
              ],
              note: "Dates shift by a week or two with the monsoon. Families aim to have the crop in before Tihar, so the fortnight before the festival is the busiest.",
            },
          },
          { p: "In 2026 Tihar begins on 7 November, which puts the peak of the middle-hill harvest in the last week of October and the first days of November. Millet, grown on the drier upper terraces, is cut around the same time, and mustard is sown into the stubble as soon as the rice is off — which is why the same valleys turn bright yellow in January." },
        ],
      },
      {
        h2: "What You Are Watching",
        blocks: [
          { p: "The work has not changed much in generations, and it helps to know the sequence." },
          {
            ol: [
              "<strong>Cutting.</strong> The rice is cut by hand with a small sickle, a handful of stalks at a time, and laid flat on the stubble to dry for a few days.",
              "<strong>Carrying.</strong> The sheaves are bundled and carried on the back to a threshing ground, usually a flat terrace or the courtyard of the house.",
              "<strong>Threshing.</strong> The grain is knocked from the stalk by beating the sheaf against a stone or a wooden board. In some villages oxen are still walked in a circle over the crop to tread it out.",
              "<strong>Winnowing.</strong> The grain is tossed on a flat round bamboo tray, a <em>nanglo</em>, so that the wind carries off the chaff. It is skilled work and almost always done by women.",
              "<strong>Drying.</strong> The paddy is spread on woven mats in the sun and turned with the feet. In the old Newar towns of the Kathmandu valley whole temple squares are carpeted with it.",
              "<strong>Stacking.</strong> The straw, which is winter feed for the animals, is built into tall ricks or wound round the trunk of a tree above the reach of the cattle.",
            ],
          },
          { p: "Labour is shared. Families work each other's fields in turn under an old exchange system called <em>parma</em>, and the day ends with a meal for everyone who helped. The first of the new rice is offered at the household shrine before anyone eats it." },
          {
            figure: {
              image: trekImage("khopra-danda-trek", "05-ghandruk-terrace-farming"),
              alt: "Terraced fields stepping down the hillside below the village of Ghandruk.",
              caption: "Terraces below Ghandruk. Every step was built and is maintained by hand.",
            },
          },
        ],
      },
      {
        h2: "Where to See It: Day Walks From Kathmandu",
        blocks: [
          {
            ul: [
              "<strong>Khokana and Bungamati.</strong> Two Newar farming villages on the southern edge of the valley, half an hour from Patan. Rice dries in the lanes and squares, and Khokana presses mustard oil in a traditional mill. Our [[trek:bungmati-khokana-village-tour|Bungamati and Khokana village tour]] walks between them through the fields.",
              "<strong>Bhaktapur.</strong> In harvest weeks the brick squares — Pottery Square especially — are covered in drying grain, raked by women in the red-bordered black sari of the Newar farming caste. Combine it with the [[trek:bhaktapur-day-tour|Bhaktapur day tour]].",
              "<strong>Dhulikhel to Namobuddha.</strong> A ridge walk of four to five hours through terraces and small Tamang settlements to a hilltop monastery, with the Himalaya along the horizon. See the [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha hike]].",
              "<strong>Panauti and Balthali.</strong> An old temple town and a ridge-top village an hour beyond the valley rim, linked by a half-day walk across harvested fields.",
              "<strong>Nagarkot to Changu Narayan.</strong> Downhill for three hours from a sunrise viewpoint to the oldest temple in the valley, through terraces all the way. The [[trek:nagarkot-sunrise-tour|Nagarkot sunrise tour]] can be extended to include it.",
            ],
          },
        ],
      },
      {
        h2: "Where to See It: Villages Worth a Night",
        blocks: [
          { p: "To see a harvest day from beginning to end you need to wake up in the village. These are places with organised homestays, where staying the night puts money directly into the households doing the work." },
          {
            table: {
              head: ["Village", "Where", "Why"],
              rows: [
                ["[[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]]", "Lamjung, 2,100 m", "A Gurung village on a ridge facing Lamjung Himal and Manaslu, with one of the country's best-run homestay programmes"],
                ["[[trek:sirubari-village-tour|Sirubari]]", "Syangja, 1,700 m", "The original community homestay in Nepal; stone-paved, immaculate, with an evening cultural programme"],
                ["Ghandruk", "Kaski, 1,940 m", "The big Gurung village on the Annapurna trails, with terraces dropping a thousand metres to the Modi Khola"],
                ["Bandipur", "Tanahun, 1,030 m", "A preserved Newar hill town; the fields are in the valley below, a morning's walk away"],
                ["Dhampus", "Kaski, 1,650 m", "An hour's climb from the road above Pokhara, with a full Annapurna panorama behind the terraces"],
              ],
            },
          },
          { p: "Our [[trek:himalayan-village-tour|Himalayan Village Tour]] links several of these in six days. The individual villages are described in the [[post:ghalegaun-ghanpokhara-village-tour-guide|Ghalegaun guide]] and the [[post:sirubari-village-tour-guide|Sirubari guide]]." },
        ],
      },
      {
        h2: "Harvest on the Trekking Trails",
        blocks: [
          { p: "You do not have to plan a village trip to see it. The first and last days of most treks pass through the same country, and in these weeks they are among the best of the walk." },
          {
            ul: [
              "<strong>Annapurna foothills:</strong> the climb from Nayapul to Ghandruk, and the descent from Landruk, on the [[trek:poonhill-trek|Poon Hill]] and [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] routes.",
              "<strong>Manaslu:</strong> the lower Budhi Gandaki between Soti Khola and Jagat, where terraces climb impossibly steep valley sides.",
              "<strong>Annapurna Circuit:</strong> the Marsyangdi valley below Chamje.",
              "<strong>Langtang:</strong> the drive in through Trishuli and the terraces around Syabrubesi; and the villages of the [[trek:tamang-heritage-trek|Tamang Heritage Trail]].",
              "<strong>Lower Solu:</strong> the walk to [[trek:pikey-peak-trek|Pikey Peak]], through Sherpa and Rai farmland.",
            ],
          },
          { p: "If the fields matter to you as much as the peaks, a low route is the answer. The [[trek:lower-manaslu-trek|Lower Manaslu trek]] and the [[trek:mohare-danda-trek|Mohare Danda community trek]] spend most of their days among working villages." },
        ],
      },
      {
        h2: "Visiting Well",
        blocks: [
          {
            ul: [
              "<strong>Stay on the bunds.</strong> The narrow earth walls between terraces are the paths. Do not step onto cut rice laid out to dry or onto mats of grain — it is somebody's food.",
              "<strong>Ask before photographing people at work</strong>, and accept a no. Showing the picture afterwards is always appreciated.",
              "<strong>Do not hand out sweets or money to children.</strong> If you want to give something, give to the village school or the homestay committee.",
              "<strong>Offer to help — briefly.</strong> You will be handed a sickle with great amusement. Ten minutes is a gift; an hour is in the way.",
              "<strong>Accept the tea.</strong> And the food, if it is offered. Eat with your right hand, and do not touch anyone else's plate or the cooking area.",
              "<strong>Greet first.</strong> A <em>namaste</em> with the palms together opens every conversation.",
              "<strong>Go with someone local.</strong> A guide who speaks the language turns a walk past a field into an introduction to the family in it.",
            ],
          },
          { p: "Photographers will want the first and last hours of light, when the stubble glows and the dust from the threshing hangs in the air. Our [[trek:annapurna-photography-tour|Annapurna Photography Tour]] is timed for exactly these weeks. More on travelling considerately is in [[post:responsible-trekking-in-nepal|responsible trekking in Nepal]]." },
        ],
      },
    ],
    faqs: [
      { question: "When is the rice harvest in Nepal?", answer: "From mid-October to late November, depending on altitude. Higher hill villages cut in October, the Kathmandu valley and middle hills from late October to mid-November, and the Terai plains in November and early December." },
      { question: "Where can I see rice terraces in Nepal?", answer: "Throughout the middle hills. Easy places to reach are Khokana, Bungamati and the Dhulikhel ridge near Kathmandu, and Ghandruk, Dhampus, Ghalegaun and Sirubari in the hills around Pokhara." },
      { question: "Is harvest season a good time to visit Nepal?", answer: "Yes. It coincides with the best weather of the year, clear mountain views and the festival season. The countryside is at its most photogenic and village life is easy to see because everyone is outdoors." },
      { question: "Can tourists stay in a Nepali village during harvest?", answer: "Yes. Community homestays in villages such as Ghalegaun and Sirubari host guests all year. You sleep in a family home, eat with the household and can walk out into the fields with them." },
      { question: "Can I help with the harvest?", answer: "You can ask to try, and most families will happily show you. Treat it as a short experience rather than volunteering; the work is skilled and fast, and a few minutes is plenty." },
      { question: "What is the best trek to see the harvest?", answer: "Low and mid-altitude routes through farming villages: Poon Hill, the first days of Annapurna Base Camp or Manaslu, the Tamang Heritage Trail and the Mohare Danda community trek." },
      { question: "Are the rice terraces green or gold in October?", answer: "Gold. The terraces are bright green from July to September, turn yellow as the grain ripens in October, and are cut to stubble by late November." },
      { question: "Do I need a guide for village walks near Kathmandu?", answer: "It is not required for day walks, but paths between villages are unsigned and a local guide adds a great deal: translation, introductions and an explanation of what you are seeing." },
    ],
    relatedTreks: ["ghalegaun-ghanpokhara-village-tour", "sirubari-village-tour", "himalayan-village-tour", "bungmati-khokana-village-tour", "dhulikhel-namobuddha-hike", "mohare-danda-trek"],
    tripsNote: "Village stays and walks through farming country, at their best in harvest.",
    relatedPosts: [
      "ghalegaun-ghanpokhara-village-tour-guide",
      "sirubari-village-tour-guide",
      "himalayan-village-tour-guide",
      "bungmati-khokana-village-tour-guide",
      "nepal-between-dashain-and-tihar",
      "responsible-trekking-in-nepal",
    ],
    tags: ["Village Life", "Culture", "Travel Planning", "Photography"],
    meta: {
      title: "Rice Harvest Season in Nepal: Village Walks & Terraces",
      description: "When Nepal's rice terraces turn gold, how the harvest is done by hand, and the best villages and day walks to see it from Kathmandu and Pokhara.",
      keywords: "rice harvest Nepal, rice terraces Nepal, Nepal harvest season, village walks Nepal, Nepal homestay village, Ghalegaun, Sirubari, Khokana Bungamati",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "upper-mustang-in-november",
    title: "Upper Mustang in November: The Last Weeks Before Winter",
    cluster: "seasonal",
    date: "2026-10-25",
    hero: {
      image: trekImage("upper-mustang-trek", "00-choprang-gompa-lo-manthang-15377480134"),
      alt: "A monastery building in Lo Manthang, Upper Mustang, under a deep blue sky.",
    },
    excerpt:
      "Upper Mustang's season ends in November, when the people of Lo close their houses and move south for winter. Go in the first half of the month and you have a medieval kingdom almost to yourself in extraordinary light. This is the weather, what closes when, and the latest date that works.",
    intro: [
      { p: "North of the Annapurnas the land changes completely. The monsoon never crosses the range, so what lies beyond is a high desert of wind-carved cliffs in ochre, grey and rust, with whitewashed villages set in patches of irrigated green and a walled city at the end of the road. This is the former Kingdom of Lo — Upper Mustang — closed to outsiders until 1992 and still entered only with a special permit." },
      { p: "Most people come between May and October. By November the barley is long harvested, the poplars have dropped their leaves, and the light has gone low and clear in a way that photographers travel for. It is also the month the valley shuts. Many families from Lo Manthang and the villages around it spend the winter in Pokhara or Kathmandu, and they start leaving once the fields are done. The first half of the month is a rare window; the second half is an expedition." },
    ],
    sections: [
      {
        h2: "November Weather in Mustang",
        blocks: [
          {
            table: {
              head: ["Place", "Altitude", "Day", "Night"],
              rows: [
                ["Jomsom", "2,720 m", "9 – 14°C", "−3 to 2°C"],
                ["Kagbeni", "2,810 m", "8 – 13°C", "−4 to 1°C"],
                ["Ghami / Tsarang", "3,520 – 3,560 m", "5 – 10°C", "−8 to −3°C"],
                ["Lo Manthang", "3,810 m", "4 – 9°C", "−11 to −5°C"],
              ],
              note: "Typical ranges, colder late in the month. Mustang is dry all year; in November the sky is almost always cloudless.",
            },
          },
          { p: "The thermometer tells half the story. The Kali Gandaki valley is a wind tunnel: every day from late morning a fierce wind blows up it from the south, carrying dust and taking the felt temperature well below the figures above. The rule for walking in Mustang at any season, and doubly in November, is to start at first light and be done by early afternoon." },
          { p: "Snow is uncommon in the first three weeks. When it does come, the passes on the trail — a succession of 3,800 to 4,200-metre ridges between Samar and Lo Manthang — can be blocked for a few days, and the road with them." },
        ],
      },
      {
        h2: "What Closes, and When",
        blocks: [
          {
            table: {
              head: ["Period", "What to expect"],
              rows: [
                ["1 – 10 November", "Most lodges open on the main route. Villages lively, monasteries accessible, animals being brought down."],
                ["11 – 20 November", "Lodges begin to close, one village at a time. Your guide phones ahead to confirm which house is taking guests each night."],
                ["21 – 30 November", "A skeleton of lodges remains. Lo Manthang is half empty; some monasteries are locked because the caretaker has left."],
                ["December – February", "Winter. A few households stay; travel is possible only by arrangement and with full cold-weather equipment."],
              ],
              note: "There is no fixed closing date. It depends on the family, the weather and the year.",
            },
          },
          { p: "This is why Upper Mustang in November is not a trek to do on your own initiative. It needs someone who knows which families are still in residence and has spoken to them that week. It is also one of the cases where the compulsory guide is doing a job you would want done anyway." },
        ],
      },
      {
        h2: "Why Go Now",
        blocks: [
          {
            ul: [
              "<strong>The light.</strong> Low sun on banded cliffs, no haze, shadows that give the eroded landscape its depth. October is good; November is better.",
              "<strong>The emptiness.</strong> In high season Lo Manthang's few streets have a steady flow of groups. In November you may be the only visitors in the city.",
              "<strong>Village life in the open.</strong> Threshing is finishing, wool is being spun on doorsteps, and caravans of goats pass on their way south.",
              "<strong>The sky at night.</strong> Dry air, no light pollution and long nights. Some of the best stargazing in Nepal.",
              "<strong>No monsoon to dodge.</strong> Flights to Jomsom and the road up the Kali Gandaki are more reliable than in summer.",
            ],
          },
          { p: "What you give up is comfort — hot showers are a memory once the pipes freeze — and the festival of Tiji, which is held in May; see our [[post:tiji-festival-upper-mustang|Tiji guide]] if that is the draw." },
        ],
      },
      {
        h2: "The Permit and the Tihar Holiday",
        blocks: [
          { p: "Upper Mustang is a restricted area beyond Kagbeni. Entry needs a restricted-area permit issued by the Department of Immigration in Kathmandu through a registered agency, a licensed guide, and a minimum of two trekkers, plus the Annapurna Conservation Area permit. The fee structure has been under review; current figures are in our guide to [[post:restricted-area-trekking-permits-in-nepal|restricted-area permits]]." },
          { p: "The date that matters in 2026 is Tihar. The immigration office is closed for the festival from about 8 to 11 November, and it was closed for Dashain until about 25 October. For a November trip that leaves two practical choices." },
          {
            ul: [
              "<strong>Have the permit issued between 26 October and 6 November</strong> and start straight away. This is the better option: it puts you in Lo Manthang in the first third of the month.",
              "<strong>Have it issued on 12 November</strong> and travel at once, accepting that lodges will be closing around you. Workable for a shorter jeep-supported trip, marginal for the full trek.",
            ],
          },
        ],
      },
      {
        h2: "Trek, Jeep, or Both",
        blocks: [
          { p: "A rough road now runs all the way from Jomsom to Lo Manthang and on to the Tibetan border. That has changed the trek — parts of the old trail share the valley with it — and it has also made a late-season visit more practical, because a vehicle can cover in a day what takes four on foot." },
          {
            table: {
              head: ["Trip", "Days", "In November"],
              rows: [
                ["[[trek:upper-mustang-trek|Upper Mustang trek]]", "16", "The full walk in and out by different routes. Start by the first days of the month."],
                ["[[trek:upper-mustang-trek-from-pokhara|Upper Mustang trek from Pokhara]]", "12", "The same trek without the Kathmandu days."],
                ["[[trek:upper-mustang-photography-tour|Upper Mustang Photography Tour]]", "11", "Jeep-supported, timed for morning and evening light. The best fit for mid-month."],
                ["[[trek:lower-mustang-trek|Lower Mustang trek]]", "10", "Jomsom, Kagbeni, Muktinath and Marpha. No restricted permit, open all winter."],
              ],
            },
          },
          { p: "Whichever you choose, walk the eastern return route if conditions allow, by Dhakmar's red cliffs and the old monastery of Lo Gekar, which is away from the road. And give Lo Manthang two full days: one for the city's three monasteries and the palace, one for the cave dwellings of Chhoser to the north. The route is described in full in our [[post:upper-mustang-trek-complete-guide|Upper Mustang guide]]." },
        ],
      },
      {
        h2: "Gear and Practicalities",
        blocks: [
          {
            ul: [
              "<strong>Windproof everything.</strong> A hardshell jacket and trousers matter more here than on any other trek. Add a buff and wraparound sunglasses for the dust.",
              "<strong>Sleeping bag to −15°C.</strong> Rooms are mud-walled and unheated; kitchens have a stove burning dung and juniper.",
              "<strong>Lip balm and moisturiser.</strong> The air has almost no humidity. Skin cracks within days.",
              "<strong>Start early, finish early.</strong> Walk from six or seven and be indoors by two.",
              "<strong>Carry cash from Pokhara.</strong> Jomsom has an ATM that cannot be relied on; beyond it there is nothing.",
              "<strong>Keep a spare day for Jomsom.</strong> Flights to Pokhara leave only in the early morning and are cancelled when the wind rises early. The road is the alternative: a long day by jeep.",
            ],
          },
          { p: "If the dates no longer work for Lo Manthang, Lower Mustang is the consolation that is not really a consolation. Kagbeni, Muktinath and the apple village of Marpha have the same landscape, stay open all winter and need no special permit. See our [[post:jomsom-muktinath-trek-guide|Jomsom and Muktinath guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Can I visit Upper Mustang in November?", answer: "Yes, and the first half of the month is one of the best times for light and solitude. From mid-November lodges begin to close as families move south for the winter, so later trips need careful arrangement." },
      { question: "How cold is Upper Mustang in November?", answer: "Lo Manthang is around 4 to 9°C by day and −5 to −11°C at night. A strong wind blows up the valley every afternoon and makes it feel much colder." },
      { question: "When do lodges in Upper Mustang close for winter?", answer: "There is no fixed date. Closures start around the middle of November and continue village by village until only a few households remain by December. A guide confirms each night's lodging in advance." },
      { question: "Does it snow in Upper Mustang in November?", answer: "Rarely in the first three weeks. A late-month snowfall can block the ridges and the road between Samar and Lo Manthang for a few days." },
      { question: "What is the latest date to start the Upper Mustang trek?", answer: "For the full trek, the first week of November. A shorter jeep-supported visit works until about the middle of the month. After that, conditions are those of winter." },
      { question: "Can I get an Upper Mustang permit during Tihar?", answer: "Not on the holiday itself. In 2026 the immigration office is closed around 8 to 11 November. Arrange the permit before 7 November or from 12 November." },
      { question: "Can I drive to Lo Manthang instead of trekking?", answer: "Yes. A rough road runs from Jomsom to Lo Manthang, and jeep tours cover the route in about two days each way. The restricted-area permit and a guide are still required." },
      { question: "Is Lower Mustang open in winter?", answer: "Yes. Jomsom, Kagbeni, Marpha and Muktinath are inhabited all year, need no restricted-area permit and can be visited in any month, though it is cold and windy from December to February." },
    ],
    relatedTreks: ["upper-mustang-trek", "upper-mustang-photography-tour", "upper-mustang-trek-from-pokhara", "lower-mustang-trek", "jomsom-muktinath-trek", "muktinath-pilgrimage-tour"],
    tripsNote: "Mustang on foot and by jeep, above and below the restricted line.",
    relatedPosts: [
      "upper-mustang-trek-complete-guide",
      "restricted-area-trekking-permits-in-nepal",
      "jomsom-muktinath-trek-guide",
      "tiji-festival-upper-mustang",
      "trekking-in-nepal-in-november",
      "lower-mustang-trek-guide",
    ],
    tags: ["Mustang", "Upper Mustang", "November", "Restricted Area"],
    meta: {
      title: "Upper Mustang in November: Weather, Closures & Permits",
      description: "Upper Mustang in November: temperatures, when lodges close for winter, how the permit works around Tihar, and the latest date for a trek or jeep trip.",
      keywords: "Upper Mustang in November, Upper Mustang weather November, Lo Manthang November, Upper Mustang winter, Upper Mustang trek season, Mustang late autumn",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "peak-climbing-in-nepal-in-november",
    title: "Island Peak and Mera Peak in November: Late-Autumn Climbing",
    cluster: "seasonal",
    date: "2026-10-26",
    hero: {
      image: trekImage("island-peak-climbing", "00-island-peak-nepal"),
      alt: "The summit ridge and glaciated face of Island Peak in the Everest region.",
    },
    excerpt:
      "November is the end of the autumn season on Nepal's trekking peaks: the most stable weather of the year, and the coldest summit mornings. This is how Island Peak, Mera Peak and Lobuche East differ in late autumn, what the cold demands, and how late in the month a climb still makes sense.",
    intro: [
      { p: "Nepal's trekking peaks — summits of about 5,500 to 6,500 metres that can be climbed in two or three weeks with basic mountaineering skills — have two seasons. Spring is warmer and cloudier. Autumn is colder and clearer, and its second half, from late October to the end of November, is the clearest and coldest of all." },
      { p: "For a climber that is a fair exchange up to a point. Settled weather is the single biggest factor in whether a summit day succeeds, and November has it. But summit day starts at one or two in the morning, at around 5,600 metres, and in late November the temperature at that hour is not a detail. The difference between a good trip and a bad one this month is almost entirely equipment and timing." },
    ],
    sections: [
      {
        h2: "November Conditions Up High",
        blocks: [
          {
            table: {
              head: ["", "Early November", "Late November"],
              rows: [
                ["Weather", "Very stable; clear nights and mornings", "Stable, with the first winter systems possible"],
                ["Summit temperature at dawn", "Around −15 to −20°C", "Around −20 to −28°C"],
                ["Wind", "Usually moderate", "Strengthening as the winter jet stream descends"],
                ["Snow", "Firm and well consolidated", "Hard, icy in places; fresh snow after any storm"],
                ["Other teams", "Many, especially on Island Peak", "Few"],
                ["Daylight", "About 10.5 hours", "About 10 hours"],
              ],
              note: "Indicative figures for summits around 6,000 – 6,500 m. Wind is the factor that turns a cold summit day into a dangerous one.",
            },
          },
          { p: "Firm snow is the season's gift: cramponing is secure and progress is quick. Its cost is that the fixed-rope sections can be hard ice by late in the month, which is more strenuous to climb and less forgiving of poor technique." },
        ],
      },
      {
        h2: "The Three Main Peaks Compared",
        blocks: [
          {
            table: {
              head: ["", "Island Peak", "Mera Peak", "Lobuche East"],
              rows: [
                ["Height", "6,189 m", "6,476 m", "6,119 m"],
                ["Character", "A short, steep, technical finish", "A long, high glacier walk", "The most technical of the three"],
                ["Crux", "A headwall of fixed rope to the summit ridge; crevasses crossed by ladder", "Altitude and cold; a final short steep dome", "Rock slabs and a steep, exposed snow ridge"],
                ["In November", "Good conditions; headwall icier late in the month; crevasses at their widest", "The coldest and windiest of the three — it is the highest and most exposed", "Good early in the month; rock sections hold ice later"],
                ["Suits", "Fit trekkers with basic rope skills", "Strong walkers with good cold tolerance", "Those with some previous climbing"],
              ],
            },
          },
          { p: "Mera's reputation as the easy one misleads people every year. It is technically the simplest, and it is also nearly 300 metres higher than Island Peak, with a high camp at about 5,800 metres on an open glacier. In November that is the coldest place most clients will ever sleep. A fuller comparison is in [[post:mera-peak-vs-island-peak|Mera Peak vs Island Peak]]." },
        ],
      },
      {
        h2: "What the Cold Demands",
        blocks: [
          { p: "Frostbite, not falling, is the characteristic injury of a November climb, and it happens to toes and fingers on summit morning. The kit that prevents it is not optional." },
          {
            table: {
              head: ["Item", "November standard"],
              rows: [
                ["Boots", "Double or triple mountaineering boots rated for 6,000 m. Single leather boots are not enough this month."],
                ["Hands", "A three-layer system: liner gloves, insulated gloves, and expedition mittens to go over both."],
                ["Body", "An expedition-weight down jacket with a hood, worn on the climb, not just in camp."],
                ["Legs", "Thermal base layer, softshell or fleece trousers, and a windproof shell; insulated trousers for high camp."],
                ["Sleeping bag", "Comfort rating of −25°C or lower for high camp."],
                ["Face", "Balaclava or buff, goggles as well as glacier glasses."],
                ["Extras", "Chemical hand and toe warmers, an insulated bottle cover, a flask."],
              ],
            },
          },
          { p: "Most of this can be hired in Kathmandu or in Chhukung and Khare, the villages below Island Peak and Mera. Boots are the item to check hardest: a hired pair that does not fit is how toes are lost. The complete list is in our [[post:peak-climbing-gear-list|peak climbing gear list]]." },
          {
            ul: [
              "<strong>Start later if you can.</strong> In deep cold, guides often delay the summit start by an hour or two, so that the coldest part of the climb is nearer sunrise.",
              "<strong>Keep moving your toes and fingers</strong>, and say so at once if you lose feeling. Numbness that does not return with movement means stopping to rewarm.",
              "<strong>Eat and drink on the climb</strong> even though you will not want to. A cold, dehydrated climber is a slow one.",
            ],
          },
        ],
      },
      {
        h2: "How Late Is Too Late?",
        blocks: [
          {
            table: {
              head: ["Summit date", "Verdict"],
              rows: [
                ["1 – 15 November", "Prime. Stable, cold but manageable, good snow."],
                ["16 – 25 November", "Good for well-equipped climbers. Noticeably colder; fewer teams and quieter camps."],
                ["26 November – 5 December", "Marginal. Possible in a settled spell, with a real chance of wind stopping the summit."],
                ["Mid-December onwards", "Winter climbing — a different undertaking, with its own permit season."],
              ],
            },
          },
          { p: "Count back from the summit to find your start date. A standard Island Peak trip is about eighteen days from Kathmandu and reaches the summit around day twelve or thirteen, so the last sensible departure is about <strong>10 November</strong>. For Mera, with a similar schedule and a colder summit, we would not leave later than about <strong>7 November</strong>." },
          { p: "In 2026 mind the Tihar holiday of 8 to 11 November: climbing permits for these peaks are issued by the Nepal Mountaineering Association, whose office closes for the festival. Trips departing in that week need their permits arranged beforehand. Fees and the process are in [[post:nma-peak-permits-and-fees|NMA peak permits and fees]]." },
        ],
      },
      {
        h2: "Acclimatisation Is Still the Main Thing",
        blocks: [
          { p: "Cold takes the attention in November, but more summit attempts fail on altitude than on temperature. The itineraries that work are the ones that do not hurry." },
          {
            ul: [
              "<strong>Island Peak</strong> is best approached after going to Everest Base Camp and Kala Patthar first, so that you arrive at Chhukung already acclimatised to 5,500 metres. Our [[trek:island-peak-climbing|Island Peak climb]] is built that way; the [[trek:island-peak-climbing-from-chhukung|version from Chhukung]] is for those who have done the trek recently.",
              "<strong>Mera Peak</strong> needs a slow walk-in. The itineraries that cross the Zatrwa La on day two gain height too quickly; the longer approach through the Hinku valley is far kinder. The [[trek:mera-peak-climbing|Mera Peak climb]] takes eighteen days for that reason.",
              "<strong>Lobuche East</strong> fits the same pattern as Island Peak, climbed after Base Camp on the [[trek:lobuche-east-peak-climbing|Lobuche East trip]].",
            ],
          },
          { p: "Every trip should include a training day at base camp — fitting crampons, climbing a fixed rope with an ascender, abseiling, crossing a ladder. If you have never done these, read [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed-rope skills for Nepal peaks]] before you come." },
        ],
      },
      {
        h2: "An Easier Summit for Late November",
        blocks: [
          { p: "If your dates fall in the last ten days of the month, or the cold of a 6,000-metre summit is more than you want to take on, there are lower objectives that give the experience of roping up without the extremes." },
          {
            ul: [
              "<strong>[[trek:yala-peak-climbing|Yala Peak]]</strong>, 5,520 m, above the Langtang valley. A non-technical glacier summit with a view into Tibet, reached by road from Kathmandu.",
              "<strong>[[trek:pokalde-peak-climbing|Pokalde Peak]]</strong>, 5,806 m, near Everest. A short rock scramble to finish, usually done from the Kongma La.",
              "<strong>Kala Patthar and Chhukung Ri.</strong> Not climbs at all, but high walking summits at around 5,550 metres that you can do in trekking boots.",
            ],
          },
          { p: "New to all of this? Start with our [[post:peak-climbing-in-nepal-beginners-guide|beginner's guide to peak climbing in Nepal]], then the individual guides to [[post:island-peak-climbing-guide|Island Peak]] and [[post:mera-peak-climbing-guide|Mera Peak]]." },
        ],
      },
    ],
    faqs: [
      { question: "Can I climb Island Peak in November?", answer: "Yes. November is within the autumn climbing season and has very stable weather. Summit mornings are cold, around −15 to −25°C, so double boots and expedition mittens are essential. Aim to summit before about 25 November." },
      { question: "Can I climb Mera Peak in November?", answer: "Yes, in the first three weeks. Mera is higher and more exposed than Island Peak, which makes it the coldest and windiest of the popular peaks. Leave Kathmandu by about 7 November for the best chance." },
      { question: "How cold is the summit of Island Peak in November?", answer: "Around −15 to −20°C at dawn early in the month and −20 to −28°C late in the month, before wind chill. Climbers are on the mountain from about two in the morning, in the coldest hours." },
      { question: "Is autumn or spring better for peak climbing in Nepal?", answer: "Autumn has clearer, more stable weather and firmer snow. Spring is warmer, with more afternoon cloud and softer snow. November is the clearest and coldest part of the autumn season." },
      { question: "Do I need double boots for Island Peak in November?", answer: "Yes. Insulated double or triple mountaineering boots are needed for any 6,000-metre peak in November. They can be hired in Kathmandu or Chhukung; check the fit carefully." },
      { question: "What is the latest date to climb a trekking peak in autumn?", answer: "Summits up to about 25 November are reliable for well-equipped teams. Late November and early December are marginal because of wind and cold, and from mid-December the climbing is treated as winter season." },
      { question: "Is Mera Peak easier than Island Peak?", answer: "Technically yes, because it is mostly a glacier walk. Physically it is harder for many people: it is nearly 300 metres higher, the high camp is colder, and the summit day is longer." },
      { question: "Do I need climbing experience for Island Peak?", answer: "Previous climbing is not required, but you must be fit, well acclimatised and willing to learn. A training day at base camp covers crampons, fixed ropes, abseiling and ladder crossings." },
    ],
    relatedTreks: ["island-peak-climbing", "mera-peak-climbing", "lobuche-east-peak-climbing", "yala-peak-climbing", "island-peak-climbing-from-chhukung", "pokalde-peak-climbing"],
    tripsNote: "Trekking peaks with an autumn season, from 5,520 m to 6,476 m.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "island-peak-climbing-guide",
      "mera-peak-climbing-guide",
      "mera-peak-vs-island-peak",
      "peak-climbing-gear-list",
      "nma-peak-permits-and-fees",
    ],
    tags: ["Peak Climbing", "Island Peak", "Mera Peak", "November"],
    meta: {
      title: "Island Peak & Mera Peak in November: Late-Autumn Climbing",
      description: "Climbing Island Peak, Mera Peak and Lobuche East in November: summit temperatures, snow conditions, the gear the cold demands and the last sensible dates.",
      keywords: "Island Peak in November, Mera Peak in November, peak climbing Nepal November, Island Peak autumn season, Mera Peak temperature, Lobuche East November",
    },
  },
];
