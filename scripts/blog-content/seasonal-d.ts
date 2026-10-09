import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * Autumn 2026 series, part 4: Langtang and the short Annapurna treks in
 * November, and the sixteen days between the two big festivals.
 */
export const seasonalD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "langtang-valley-trek-in-november",
    title: "Langtang Valley Trek in November: Weather, Trail Conditions and Crowds",
    cluster: "seasonal",
    date: "2026-10-19",
    hero: {
      image: trekImage("langtang-valley-trek", "00-enroute-to-kyanjin-gompa"),
      alt: "The trail up the Langtang valley towards Kyanjin Gompa, with snow peaks at the head of the valley.",
    },
    excerpt:
      "Langtang is the big-mountain trek that needs no flight and never feels crowded, and November is when it is clearest. This is the weather from Syabrubesi to Kyanjin Gompa, what the viewpoints are like in the cold, and why it is the safest choice in the weeks when flights and permits are under pressure.",
    intro: [
      { p: "A day's drive north of Kathmandu, a valley runs east towards Tibet between two walls of six- and seven-thousand-metre peaks. You walk up it for three days through forest, past the rebuilt village that gives it its name, to a monastery and a cheese factory at 3,870 metres, and then you climb one of the hills behind and look at a horizon made entirely of ice." },
      { p: "The Langtang Valley trek has always been overshadowed by Everest and Annapurna, which is the best thing about it. In November it has the same weather they do, a fraction of the trekkers, no dependence on a mountain flight and no pass that can close. If something in your plan is fragile — a tight schedule, a festival week, a first trek — this is the route that absorbs it." },
    ],
    sections: [
      {
        h2: "November Weather in the Valley",
        blocks: [
          {
            table: {
              head: ["Stage", "Altitude", "Day", "Night"],
              rows: [
                ["Syabrubesi", "1,460 m", "17 – 22°C", "7 – 11°C"],
                ["Lama Hotel", "2,480 m", "10 – 15°C", "1 – 5°C"],
                ["Langtang village", "3,430 m", "7 – 12°C", "−5 to 0°C"],
                ["Kyanjin Gompa", "3,870 m", "4 – 9°C", "−9 to −4°C"],
                ["Kyanjin Ri / Tserko Ri", "4,773 – 4,984 m", "−4 to 3°C in the morning", "—"],
              ],
              note: "Typical ranges, colder through the month. The first two days are in a deep, shaded gorge that feels cooler than these figures; the upper valley is open and sunny.",
            },
          },
          { p: "The valley runs east to west, so once you are above the forest the sun reaches the trail early and stays on it all day — a real advantage over the north-facing gorges of the Annapurna Sanctuary. Mornings are still and clear; a cold wind comes up the valley in the afternoon. Rain is very unlikely, and snow on the valley floor is unusual before December." },
        ],
      },
      {
        h2: "Why Langtang Works So Well in November",
        blocks: [
          {
            ul: [
              "<strong>No flight.</strong> The trek starts and ends with a seven- to eight-hour drive. Nothing about it depends on the weather at an airstrip.",
              "<strong>No restricted permit.</strong> A national park entry permit and a trekking card are all it needs, so the festival closures of the immigration office do not affect it.",
              "<strong>No pass.</strong> The route goes up the valley and back down. A snowfall can delay a viewpoint, not the trek.",
              "<strong>Quiet.</strong> Even at the height of the season Langtang sees a small share of the traffic on the Everest trail, and after mid-November lodges are half empty.",
              "<strong>Short.</strong> Seven to ten days from Kathmandu and back, which leaves room for it in a two-week holiday alongside the festivals.",
            ],
          },
          { p: "In 2026 that combination is especially useful in two windows: the days around the Dashain tika on 21 October, and the Tihar week of 7 to 11 November, when flights are full and permit offices shut. Langtang can be started on any of them." },
        ],
      },
      {
        h2: "The Trail, Day by Day",
        blocks: [
          {
            table: {
              head: ["Day", "Stage", "Walking"],
              rows: [
                ["1", "Drive Kathmandu to Syabrubesi", "7 – 8 hours by road"],
                ["2", "Syabrubesi to Lama Hotel", "6 hours, mostly in forest beside the river"],
                ["3", "Lama Hotel to Langtang village", "6 hours; the valley opens at Ghoda Tabela"],
                ["4", "Langtang to Kyanjin Gompa", "3 – 4 hours; afternoon at the monastery and cheese factory"],
                ["5", "Kyanjin Ri or Tserko Ri", "A day walk to a viewpoint, back to Kyanjin"],
                ["6 – 7", "Return to Syabrubesi", "Two long downhill days"],
                ["8", "Drive to Kathmandu", "7 – 8 hours"],
              ],
            },
          },
          { p: "The forest section is at its best now: the oaks and maples have turned, langur monkeys are easy to spot in the bare branches, and red pandas — rarely seen, but present — are most active in the cold months. Above Ghoda Tabela the yak pastures are the colour of straw and the herds are being brought down for winter." },
          { p: "The walk through Langtang village passes the debris field left by the avalanche of April 2015, which buried the old settlement. The new village stands just beyond it. Trekkers staying in its lodges are a large part of how it was rebuilt; the story is in [[post:langtang-after-the-2015-earthquake|Langtang after the earthquake]]." },
        ],
      },
      {
        h2: "The Viewpoints in the Cold",
        blocks: [
          { p: "The point of going all the way to Kyanjin Gompa is the day you spend above it. There are two choices, and November affects them differently." },
          {
            table: {
              head: ["", "Kyanjin Ri", "Tserko Ri"],
              rows: [
                ["Height", "4,773 m", "4,984 m"],
                ["Round trip from Kyanjin", "3 – 4 hours", "7 – 8 hours"],
                ["View", "Langtang Lirung and its glacier close at hand, the valley below", "A full circle of peaks, including Shishapangma in Tibet"],
                ["In November", "Clear of snow all month; go at sunrise", "Usually clear early in the month; frost and some snow near the top later"],
              ],
            },
          },
          { p: "Go up Kyanjin Ri on your first morning and decide about Tserko Ri from the top of it. The higher summit is a serious day at nearly 5,000 metres: start at first light, carry more warm clothing than seems necessary, and turn round by noon whatever height you have reached. If you slept badly or have a headache, a walk up the valley floor to Langshisha Kharka is a fine alternative with almost no climbing." },
        ],
      },
      {
        h2: "Lodges, Food and What to Pack",
        blocks: [
          { p: "Langtang's lodges are family-run, mostly by Tamang households whose kitchens you eat in. All are open through November. Rooms are unheated; the dining room has a stove lit in the evening. Kyanjin Gompa has the widest choice, several with attached bathrooms and one or two bakeries that are better than they have any right to be at that altitude." },
          {
            ul: [
              "<strong>Sleeping bag</strong> rated to about −10°C.",
              "<strong>Down jacket, hat and gloves</strong> from Langtang village upwards.",
              "<strong>Microspikes</strong> only if you plan Tserko Ri after about the 20th.",
              "<strong>Sun protection.</strong> The upper valley is bright and exposed.",
              "<strong>Cash for the whole trek.</strong> There is no ATM after Kathmandu.",
              "<strong>A book.</strong> Evenings are long: it is dark before five and the stove room is where the day ends.",
            ],
          },
          { p: "Try the yak cheese at Kyanjin, made in the small factory the Swiss helped set up in the 1950s, and the local sea-buckthorn juice, which is harvested in exactly these weeks." },
        ],
      },
      {
        h2: "Extending the Trek",
        blocks: [
          {
            table: {
              head: ["Trip", "Days", "In November"],
              rows: [
                ["[[trek:langtang-valley-trek|Langtang Valley trek]]", "10", "The standard route at an easy pace"],
                ["[[trek:langtang-gosaikunda-lake-trek|Langtang and Gosaikunda]]", "15", "Adds the sacred lakes at 4,380 m and the Lauribina pass; best in the first three weeks"],
                ["[[trek:gosaikunda-lake-trek|Gosaikunda Lake trek]]", "7", "The lakes alone. Very cold at the top; the water begins to freeze late in the month"],
                ["[[trek:tamang-heritage-trek|Tamang Heritage Trail]]", "13", "Lower and warmer — villages, hot springs and homestays"],
                ["[[trek:yala-peak-climbing|Yala Peak]]", "15", "A 5,520 m trekking peak above Kyanjin for those who want a summit"],
              ],
            },
          },
          { p: "The Gosaikunda extension is the one that November changes. The Lauribina pass at 4,610 metres is normally open, but it is exposed, the lodges near the lakes are basic and very cold, and a late-month snowfall can make the crossing to Helambu awkward. Early in the month it is superb. The full route is in our [[post:gosaikunda-lake-trek-guide|Gosaikunda guide]], and the valley itself in the [[post:langtang-valley-trek-complete-guide|complete Langtang guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time for the Langtang Valley trek?", answer: "Yes. November has clear, dry weather and very good mountain views, and Langtang is far less busy than the Everest or Annapurna trails. Nights are cold at Kyanjin Gompa, but the valley gets sun for most of the day." },
      { question: "How cold is Langtang in November?", answer: "At Kyanjin Gompa, 3,870 metres, days are around 4 to 9°C and nights −4 to −9°C. Langtang village is a few degrees warmer. On the viewpoints at dawn it is below freezing with wind." },
      { question: "Is there snow in Langtang in November?", answer: "Rarely on the valley floor. The summits of Kyanjin Ri and Tserko Ri can have frost and light snow late in the month. Significant snowfall usually begins in December." },
      { question: "Do I need a flight for the Langtang trek?", answer: "No. The trek starts and ends at Syabrubesi, a seven to eight hour drive from Kathmandu. That makes it a reliable choice when Lukla flights are heavily booked or delayed." },
      { question: "What permits do I need for Langtang?", answer: "A Langtang National Park entry permit and a trekkers' information card. Neither is a restricted-area permit, so they are not affected by the festival closures of the immigration office." },
      { question: "Is Langtang crowded in November?", answer: "No. It is one of the quieter main treks in any month, and after the middle of November you will often have a lodge almost to yourself." },
      { question: "Can beginners do the Langtang trek in November?", answer: "Yes. It is a moderate trek with a maximum sleeping altitude of 3,870 metres and no pass. The main demands are two long days in the gorge and the cold nights at the top." },
      { question: "Should I climb Kyanjin Ri or Tserko Ri?", answer: "Kyanjin Ri is a half-day walk and suits everyone who has acclimatised. Tserko Ri is nearly 5,000 metres and takes a full day; attempt it only if you are feeling strong, and start at first light." },
    ],
    relatedTreks: ["langtang-valley-trek", "langtang-gosaikunda-lake-trek", "gosaikunda-lake-trek", "tamang-heritage-trek", "yala-peak-climbing", "helambu-trek"],
    tripsNote: "Langtang and its neighbours — all reached by road from Kathmandu.",
    relatedPosts: [
      "langtang-valley-trek-complete-guide",
      "gosaikunda-lake-trek-guide",
      "tamang-heritage-trail-guide",
      "short-treks-near-kathmandu",
      "trekking-in-nepal-in-november",
      "langtang-after-the-2015-earthquake",
    ],
    tags: ["Langtang Region", "Langtang Valley", "November", "Weather"],
    meta: {
      title: "Langtang Valley Trek in November: Weather & Conditions",
      description: "Langtang in November: temperatures from Syabrubesi to Kyanjin Gompa, the viewpoints in the cold, lodges, and why it is the easiest trek to plan around Tihar.",
      keywords: "Langtang Valley trek in November, Langtang November weather, Langtang trek temperature, Kyanjin Gompa November, Tserko Ri November, Langtang late autumn",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mardi-himal-and-poon-hill-in-november",
    title: "Mardi Himal and Poon Hill in November: Short Treks at Their Best",
    cluster: "seasonal",
    date: "2026-10-20",
    hero: {
      image: trekImage("poonhill-trek", "03-160315-019-view-from-poon-hill"),
      alt: "The Dhaulagiri and Annapurna ranges at sunrise seen from the summit of Poon Hill.",
    },
    excerpt:
      "With three to seven days to spare, the two short treks above Pokhara give you a Himalayan panorama without high altitude. In November both are dry, clear and cool. This is how they compare in the cold, which to choose, and how to combine either with the Tihar festival.",
    intro: [
      { p: "Not everyone has two weeks, and not everyone wants to sleep at 5,000 metres. The foothills north of Pokhara exist for those people. From a hill at 3,210 metres you can watch the sun come up on Dhaulagiri and the whole Annapurna range; from a ridge a valley to the east you can walk for a morning directly towards the fish-tail peak of Machhapuchhre until it fills the sky." },
      { p: "Poon Hill and Mardi Himal are the two most popular short treks in Nepal. Both depend entirely on visibility, and November is the month that guarantees it more nearly than any other. This is what each is like in the last weeks of autumn, and how to pick." },
    ],
    sections: [
      {
        h2: "The Two Treks Side by Side",
        blocks: [
          {
            table: {
              head: ["", "Poon Hill", "Mardi Himal"],
              rows: [
                ["Days from Pokhara", "3 – 4", "4 – 5"],
                ["Highest point", "Poon Hill, 3,210 m", "Upper Viewpoint 4,200 m, or Base Camp 4,500 m"],
                ["Highest night", "Ghorepani, 2,874 m", "High Camp, 3,580 m"],
                ["The view", "A wide panorama at a distance: Dhaulagiri to Annapurna South", "A close view: Machhapuchhre and Annapurna South directly above"],
                ["The trail", "Stone staircases through villages and rhododendron forest", "Forest, then a narrow grassy ridge"],
                ["Villages", "Large Magar and Gurung villages all the way", "Lodges only; no villages above the forest"],
                ["Difficulty", "Easy to moderate; lots of steps", "Moderate; steeper, colder, one long summit morning"],
              ],
            },
          },
          { p: "The short version: Poon Hill is the gentler walk with more culture; Mardi Himal is the more dramatic mountain experience and asks more of you. Our longer comparison, which adds Annapurna Base Camp, is in [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|Mardi Himal vs Poon Hill vs Annapurna Base Camp]]." },
        ],
      },
      {
        h2: "November Weather on Both",
        blocks: [
          {
            table: {
              head: ["Place", "Altitude", "Day", "Night"],
              rows: [
                ["Pokhara", "820 m", "22 – 26°C", "10 – 14°C"],
                ["Ghandruk", "1,940 m", "15 – 19°C", "5 – 8°C"],
                ["Ghorepani", "2,874 m", "9 – 13°C", "−1 to 3°C"],
                ["Poon Hill at dawn", "3,210 m", "−3 to 2°C", "—"],
                ["Mardi Low Camp", "2,970 m", "8 – 12°C", "−2 to 2°C"],
                ["Mardi High Camp", "3,580 m", "4 – 9°C", "−7 to −2°C"],
                ["Mardi Upper Viewpoint at dawn", "4,200 m", "−8 to −2°C", "—"],
              ],
            },
          },
          { p: "By day both treks are comfortable walking — cool in the forest, warm in the sun. The cold is confined to the two moments that matter most, the pre-dawn climbs. On Poon Hill that is a 45-minute walk up from Ghorepani and an hour standing still on top. On Mardi it is two to three hours along an exposed ridge from High Camp in the dark. Dress for standing around at −5°C, not for walking." },
          { p: "Afternoon cloud, which hides the peaks from Mardi's ridge for much of spring, is far less common in November. You have a good chance of clear views on the walk up as well as at dawn." },
        ],
      },
      {
        h2: "Poon Hill in November",
        blocks: [
          { p: "The classic loop runs from the road head near Nayapul up the long staircase to Ulleri and Ghorepani, over the ridge to Tadapani, and down through Ghandruk. In November the trail is dry, the forest is quiet, and the big Gurung village of Ghandruk is bringing in its harvest." },
          {
            ul: [
              "<strong>The sunrise crowd is real.</strong> In the first half of the month several hundred people can be on the summit at dawn. The view does not disappear when the sun is up: stay an hour after the rush has gone down for breakfast, or go up again for sunset, when you may be alone.",
              "<strong>Ghorepani is cold at night</strong> for its altitude, because it sits in a saddle that funnels wind. A sleeping bag is worth carrying even on this short trek.",
              "<strong>Lodges are the best on any short trek</strong> — hot showers, real menus, attached bathrooms in many — and all are open.",
              "<strong>The steps are the difficulty.</strong> More than three thousand of them on the Ulleri climb alone. Poles help; so does starting from higher up the road, which jeeps now reach.",
            ],
          },
          { p: "We run it as a [[trek:poonhill-trek|seven-day Poon Hill trek]] from Kathmandu and a [[trek:poonhill-trek-from-pokhara|three-day version from Pokhara]]. The route is described stage by stage in our [[post:poon-hill-trek-guide|Poon Hill guide]]." },
        ],
      },
      {
        h2: "Mardi Himal in November",
        blocks: [
          { p: "Mardi Himal climbs through dense forest for a day and a half, breaks out above the tree line at Badal Danda — the name means cloud hill — and follows a ridge to High Camp. From there the summit morning takes you along a narrowing crest to the Upper Viewpoint at about 4,200 metres, with Machhapuchhre's south face close enough to pick out the ice flutings." },
          {
            ul: [
              "<strong>The ridge is exposed.</strong> There is no shelter between High Camp and the viewpoint. Wind is the main hazard in November; if it is strong, wait for it to drop after sunrise.",
              "<strong>Base Camp is optional.</strong> The trail continues from the viewpoint to Mardi Himal Base Camp at 4,500 metres, another one to two hours. It adds altitude and effort without adding much to the view. Late in the month this section can hold ice.",
              "<strong>High Camp fills.</strong> It has a limited number of lodges and is busy in the first half of the month, especially on the days after Tihar, when Nepali groups arrive. A guide books ahead.",
              "<strong>Altitude is felt.</strong> Going from Pokhara to 3,580 metres in three days is quick. Headaches at High Camp are common. Do not shorten the standard schedule.",
            ],
          },
          { p: "We run a [[trek:mardi-himal-trek|nine-day Mardi Himal trek]] from Kathmandu and a [[trek:mardi-himal-trek-from-pokhara|five-day version from Pokhara]]. Everything about the route is in the [[post:mardi-himal-trek-complete-guide|complete Mardi Himal guide]]." },
          {
            figure: {
              image: trekImage("mardi-himal-trek", "00-high-camp-of-mardi-himal-trek-08"),
              alt: "Lodges at Mardi Himal High Camp on a ridge above the clouds.",
              caption: "High Camp at 3,580 metres. The summit morning starts here, two to three hours before sunrise.",
            },
          },
        ],
      },
      {
        h2: "Which One Should You Choose?",
        blocks: [
          {
            ul: [
              "<strong>Choose Poon Hill</strong> if this is your first trek, if you are travelling with children or older relatives, if you want villages and comfortable lodges, or if you have only three days.",
              "<strong>Choose Mardi Himal</strong> if you want to feel close to a big mountain, are comfortable with a hard early morning, and have at least four days.",
              "<strong>Choose both</strong> if you have a week. The ridge trail from Ghorepani through Tadapani to Landruk links the two, and the combination gives you the wide view and the close one.",
              "<strong>Choose neither</strong> if what you want is quiet. [[trek:mohare-danda-trek|Mohare Danda]] and [[trek:khopra-danda-trek|Khopra Danda]] sit on ridges nearby with similar panoramas and a handful of trekkers; see [[post:short-treks-from-pokhara|short treks from Pokhara]].",
            ],
          },
        ],
      },
      {
        h2: "Combining a Short Trek With Tihar",
        blocks: [
          { p: "Short treks are the easiest to fit round a festival, and Tihar in 2026 falls neatly for it. Pokhara celebrates with real enthusiasm: Lakeside is strung with lights, rangoli patterns cover the pavements, and groups sing <em>deusi</em> and <em>bhailo</em> outside every restaurant." },
          {
            table: {
              head: ["Dates (2026)", "Plan"],
              rows: [
                ["3 – 7 November", "Trek Poon Hill or Mardi Himal; walk out on the 7th"],
                ["8 November", "Kukur Tihar in the morning, Laxmi Puja lamps on Lakeside in the evening"],
                ["9 – 10 November", "Pokhara: the lake, the World Peace Pagoda, a village walk"],
                ["11 November", "Bhai Tika — a quiet family day; fly or drive back to Kathmandu the day after"],
              ],
            },
          },
          { p: "Or reverse it: see the lights in Kathmandu on the 8th, travel to Pokhara on the 9th, and trek from the 10th, when the trails have their post-festival lull for a day or two. Either way, book transport between Kathmandu and Pokhara early — the days before Bhai Tika are the busiest of the month. The festival itself is covered in our [[post:tihar-festival-nepal-travel-guide|Tihar guide]], and the town in the [[post:pokhara-travel-guide|Pokhara guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time for Poon Hill and Mardi Himal?", answer: "Yes. Both treks depend on clear skies, and November is the most reliable month for them. The trails are dry, days are cool and comfortable, and only the pre-dawn summit walks are properly cold." },
      { question: "How cold is Poon Hill at sunrise in November?", answer: "Around −3 to 2°C on the summit before dawn, colder with wind. Ghorepani, where you sleep, is close to freezing at night. A down jacket, hat and gloves are enough." },
      { question: "How cold is Mardi Himal High Camp in November?", answer: "Nights at High Camp, 3,580 metres, are around −2 to −7°C. On the ridge to the Upper Viewpoint before dawn it is −2 to −8°C with wind chill on top." },
      { question: "Which is harder, Mardi Himal or Poon Hill?", answer: "Mardi Himal. It goes about a thousand metres higher, the lodges are simpler, and the summit morning is a long climb on an exposed ridge. Poon Hill is easier, though its stone staircases are tiring." },
      { question: "Can I do Mardi Himal or Poon Hill in three days?", answer: "Poon Hill, yes, from Pokhara. Mardi Himal needs four days at the least and is better in five, because of the altitude gain to High Camp." },
      { question: "Is there snow on Mardi Himal in November?", answer: "Usually not below the Upper Viewpoint. The section between the viewpoint and Base Camp can have ice or light snow late in the month. Heavy snow normally arrives from December." },
      { question: "Is Poon Hill crowded in November?", answer: "At sunrise in the first half of the month, yes. It is quieter after mid-November, and at any time the summit is nearly empty at sunset or an hour after dawn." },
      { question: "Can I combine Poon Hill and Mardi Himal?", answer: "Yes, in about a week. A ridge trail links Ghorepani and Tadapani with Landruk and the start of the Mardi Himal route, so the two can be walked as one continuous trek." },
    ],
    relatedTreks: ["poonhill-trek", "mardi-himal-trek", "poonhill-trek-from-pokhara", "mardi-himal-trek-from-pokhara", "mohare-danda-trek", "khopra-danda-trek"],
    tripsNote: "Short treks above Pokhara, from three days to nine.",
    relatedPosts: [
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "mardi-himal-trek-complete-guide",
      "poon-hill-trek-guide",
      "short-treks-from-pokhara",
      "annapurna-base-camp-trek-in-november",
      "trekking-in-nepal-in-november",
    ],
    tags: ["Annapurna Region", "Short Treks", "Mardi Himal", "Poon Hill"],
    meta: {
      title: "Mardi Himal & Poon Hill in November: Short Treks Compared",
      description: "Mardi Himal and Poon Hill in November: weather at each stop, how the two compare in the cold, which to choose, and how to fit a short trek around Tihar.",
      keywords: "Mardi Himal in November, Poon Hill in November, short treks Nepal November, Mardi Himal weather November, Poon Hill sunrise November, short treks from Pokhara",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-between-dashain-and-tihar",
    title: "Between Dashain and Tihar: Nepal's Best Two Weeks",
    cluster: "seasonal",
    date: "2026-10-21",
    hero: {
      image: trekImage("nagarkot-sunrise-tour", "00-sunrise-at-nagarkot-nepal-3"),
      alt: "Sunrise over layered hills and the Himalayan skyline seen from Nagarkot.",
    },
    excerpt:
      "Between the Dashain tika and the first lamps of Tihar lies a fortnight with the year's best weather and no holiday in it. In 2026 it runs from 22 October to 6 November. This is what reopens, what is still busy, and how to spend the window on the trail, in the valley or in the jungle.",
    intro: [
      { p: "Today is the Dashain tika. Across Nepal families are sitting down in order of age to receive the red mark on the forehead, and nothing that needs a counter, a stamp or a bus driver is going to happen before the weekend." },
      { p: "Then the country comes back. Over the next few days the buses fill in the opposite direction, the shutters go up, and Nepal settles into the sixteen days that people who know it guard for themselves: the gap before Tihar. The monsoon dust is long washed out, the rice is turning gold, the mountains are sharp from every hilltop, and everything works. In 2026 the window runs from <strong>Thursday 22 October to Friday 6 November</strong>." },
    ],
    sections: [
      {
        h2: "What Reopens, and When",
        blocks: [
          {
            table: {
              head: ["", "From about", "Notes"],
              rows: [
                ["Tourist shops, restaurants, gear stores", "22 October", "Thamel and Lakeside barely closed in the first place"],
                ["Local shops and markets", "23 – 25 October", "Family businesses reopen as people return from their villages"],
                ["Banks", "25 – 26 October", "ATMs are refilled; queues on the first day"],
                ["Government offices, including immigration", "25 – 26 October", "The first working day after the holiday is slow — go on the second"],
                ["Restricted-area permits", "26 October onwards", "Manaslu, Upper Mustang, Tsum and the rest can be issued again"],
                ["Long-distance buses", "Running, but full until about 27 October", "The return flow into Kathmandu peaks two to five days after the tika"],
              ],
              note: "Reopening dates depend on the government's holiday notice and on the weekend. Treat them as a guide and confirm locally.",
            },
          },
          { p: "The festival itself runs on quietly until the full moon of Kojagrat Purnima on Sunday 25 October — tika continues to be given to relatives who could not come on the day — but for a visitor the disruption is over by then. The closures in detail are in [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]]." },
        ],
      },
      {
        h2: "Why This Window Is Special",
        blocks: [
          {
            ul: [
              "<strong>The weather peaks.</strong> Late October into early November is the statistical sweet spot: after the last monsoon showers, before the real cold.",
              "<strong>Everything is open.</strong> No office holidays, no permit freeze, banks working.",
              "<strong>The country is in a good mood.</strong> People are back from two weeks with their families, the swings are still up in the villages, and Tihar is already being planned.",
              "<strong>The fields are at their most beautiful.</strong> The rice harvest is under way across the middle hills — see [[post:rice-harvest-season-in-nepal-village-walks|harvest season in Nepal]].",
              "<strong>You can finish with a festival.</strong> A two-week trek started now ends just as Tihar begins on 7 November.",
            ],
          },
          { p: "The catch is that the same reasoning brings everyone else. These are the busiest weeks of the year on the Everest and Annapurna trails. That is manageable — see [[post:how-to-avoid-crowds-on-nepal-treks-in-peak-season|avoiding the crowds in peak season]] — but it means booking flights and lodges rather than hoping." },
        ],
      },
      {
        h2: "On the Trail",
        blocks: [
          { p: "Every route in the country is in condition. The useful question is which ones this window suits better than the weeks either side of it." },
          {
            table: {
              head: ["Trek", "Why now"],
              rows: [
                ["[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "Permits can be issued again from 26 October and the Larke La is at its most reliable. Start by 28 October and you are out before Tihar closes the office again."],
                ["[[trek:upper-mustang-trek|Upper Mustang]]", "The last comfortable weeks before the lodges close for winter."],
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "Mani Rimdu at Tengboche on 26 – 28 October, then the clearest fortnight at Kala Patthar."],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "Thorong La in its best condition of the year."],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "Nine days starting on 28 October brings you into Pokhara for the lights on 8 November."],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "The quiet choice in the busiest fortnight."],
              ],
            },
          },
          { p: "For the restricted areas in particular this is the window. The immigration office that issues their permits was closed for Dashain and will close again for Tihar on about 8 November, so the working days in between are when the paperwork gets done. Our guide to [[post:restricted-area-trekking-permits-in-nepal|restricted-area permits]] explains what is needed." },
        ],
      },
      {
        h2: "In the Kathmandu Valley",
        blocks: [
          { p: "The first two or three days after the tika are the best time of the year to see Kathmandu itself. The city is still half empty, the air is the cleanest it will be until next Dashain, and the mountains are visible from the ring road — which residents will tell you almost never happens." },
          {
            ul: [
              "<strong>Walk the old city</strong> from Durbar Square through Indra Chowk to Ason while the traffic is away.",
              "<strong>Go up to a viewpoint.</strong> [[trek:nagarkot-sunrise-tour|Nagarkot]], Chandragiri or Dhulikhel at dawn, with a horizon from Annapurna to Everest. See [[post:nagarkot-and-sunrise-viewpoints-near-kathmandu|sunrise viewpoints near Kathmandu]].",
              "<strong>Take a mountain flight.</strong> Mornings are reliably clear; the [[trek:everest-mountain-flight|Everest mountain flight]] rarely cancels in these weeks.",
              "<strong>See Bhaktapur and Patan</strong> before the tour groups return in force — the [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] covers both.",
              "<strong>Walk a day hike on the rim.</strong> The [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha hike]] runs through terraced fields in mid-harvest.",
            ],
          },
          { p: "By about the 26th the traffic is back and the valley is its usual self. From the first days of November the markets begin to fill with marigolds, lamps and coloured powder for Tihar, which is its own reason to be there." },
        ],
      },
      {
        h2: "In the Lowlands",
        blocks: [
          { p: "The national parks of the Terai reopen fully after the monsoon in October, and the weeks before the grass is cut in winter are green, warm and uncrowded. Days in <strong>Chitwan</strong> and <strong>Bardia</strong> are around 28 to 30°C, mornings are misty, and the rivers have dropped enough for canoe trips. Wildlife is harder to see in the tall grass than it will be in February, but rhinos in Chitwan are close to guaranteed at any time." },
          { p: "A three-day [[trek:chitwan-national-park-tour-3-days|Chitwan tour]] fits neatly before or after a trek. Our guides to [[post:chitwan-national-park-guide|Chitwan]] and [[post:jungle-safari-in-nepal-guide|jungle safaris]] compare the parks." },
        ],
      },
      {
        h2: "Sample Plans for 2026",
        blocks: [
          { h3: "Sixteen days: a trek that ends in lights" },
          {
            table: {
              head: ["Dates", "Plan"],
              rows: [
                ["22 – 23 October", "Kathmandu while it is quiet: old city, Boudhanath, a sunrise viewpoint"],
                ["24 October – 5 November", "Everest Base Camp, with Mani Rimdu at Tengboche on the way up"],
                ["6 November", "Buffer day for the Lukla flight"],
                ["7 – 8 November", "Kaag Tihar, Kukur Tihar and Laxmi Puja in Kathmandu"],
              ],
            },
          },
          { h3: "Ten days: valley, village and jungle" },
          {
            table: {
              head: ["Dates", "Plan"],
              rows: [
                ["24 – 26 October", "Kathmandu, Bhaktapur and Patan"],
                ["27 – 29 October", "A hill village homestay in harvest — [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] or [[trek:sirubari-village-tour|Sirubari]]"],
                ["30 October – 1 November", "Pokhara, with a sunrise from Sarangkot"],
                ["2 – 4 November", "Chitwan National Park"],
              ],
            },
          },
          { p: "If your dates run later, the festival at the end of the window is covered in our [[post:tihar-festival-nepal-travel-guide|Tihar guide]], and the weeks after it in [[post:trekking-in-nepal-in-november|trekking in November]]." },
        ],
      },
    ],
    faqs: [
      { question: "How many days are there between Dashain and Tihar?", answer: "Bhai Tika, the last day of Tihar, falls about three weeks after the Dashain tika. In 2026 the tika is on 21 October and Tihar begins on 7 November, leaving sixteen days with no major holiday between them." },
      { question: "When do offices reopen after Dashain in 2026?", answer: "Government offices and banks reopen around 25 to 26 October, depending on the official holiday notice and the weekend. Tourist businesses in Thamel and Lakeside are open from the day after the tika." },
      { question: "Is late October a good time to visit Nepal?", answer: "It is the best time of the year for weather and mountain views. In 2026 the fortnight from 22 October to 6 November also has no festival closures, which makes it the easiest period to plan around." },
      { question: "Are the trekking trails busy between Dashain and Tihar?", answer: "Yes. These are the busiest weeks of the year on the Everest and Annapurna trails. Book domestic flights early, reserve lodges at the highest stops, or choose a quieter route such as Langtang or Manaslu." },
      { question: "Can I get a restricted-area permit after Dashain?", answer: "Yes, once the immigration office reopens, around 26 October in 2026. It closes again for Tihar from about 8 November, so treks to Manaslu, Upper Mustang or Tsum are best started in between." },
      { question: "Are buses running normally after Dashain?", answer: "They run, but services into Kathmandu are crowded for two to five days after the tika as people return to the city. Travel out of Kathmandu in those days is easy. Tourist buses to Pokhara and Chitwan operate normally." },
      { question: "Is Kathmandu still quiet after the Dashain tika?", answer: "For two or three days. The city fills again from about the fourth day after the tika. Those quiet days, with clean air and little traffic, are an excellent time for sightseeing." },
      { question: "Can I see both Dashain and Tihar on one trip?", answer: "Yes. Arrive a few days before the Dashain tika, trek for two weeks in the gap, and return to Kathmandu or Pokhara for Kukur Tihar and Laxmi Puja. In 2026 that means arriving by 19 October and staying until at least 9 November." },
    ],
    relatedTreks: ["everest-base-camp-trek", "manaslu-circuit-trek", "annapurna-base-camp-trek", "kathmandu-valley-tour", "chitwan-national-park-tour-3-days", "ghalegaun-ghanpokhara-village-tour"],
    tripsNote: "Trips that fit the sixteen days between the two festivals.",
    relatedPosts: [
      "dashain-vs-tihar-which-festival-to-visit",
      "tihar-festival-nepal-travel-guide",
      "nepal-festivals-and-events-october-november-2026",
      "how-to-avoid-crowds-on-nepal-treks-in-peak-season",
      "rice-harvest-season-in-nepal-village-walks",
      "what-is-open-and-closed-in-nepal-during-dashain",
    ],
    tags: ["Travel Planning", "Dashain", "Tihar", "Trekking Seasons"],
    meta: {
      title: "Between Dashain and Tihar: Nepal's Best Two Weeks",
      description: "From 22 October to 6 November 2026 Nepal has peak weather and no holidays. What reopens after Dashain, which treks suit the window, and sample plans.",
      keywords: "between Dashain and Tihar, Nepal late October, after Dashain Nepal, Nepal early November, best time to visit Nepal 2026, Nepal after Dashain offices open",
    },
  },
];
