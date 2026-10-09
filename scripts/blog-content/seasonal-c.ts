import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * Autumn 2026 series, part 3: finding space on the trail in peak season, and
 * the two big circuits in November, when both passes are still open.
 */
export const seasonalC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "how-to-avoid-crowds-on-nepal-treks-in-peak-season",
    title: "How to Avoid the Crowds on Nepal's Trails in Peak Season",
    cluster: "seasonal",
    date: "2026-10-16",
    hero: {
      image: trekImage("pikey-peak-trek", "00-first-light-over-the-himalayas-from-pikey-peak-solukhumbu"),
      alt: "First light on a long line of Himalayan peaks seen from the summit ridge of Pikey Peak.",
    },
    excerpt:
      "October and November bring the best weather to Nepal and most of the year's trekkers with it. You do not have to choose between the two. This is where the crowds actually are, the quieter routes with the same views, and the timing tricks that give you space on even the busiest trail.",
    intro: [
      { p: "The complaint arrives every autumn: the trail to Namche was a queue, the dining room at Gorak Shep was standing room only, Poon Hill at sunrise felt like a station platform. All true. What is also true is that the people are concentrated on a handful of trails, at a handful of places, at particular hours — and the moment you step outside that pattern the mountains are as empty as they ever were." },
      { p: "Nepal has hundreds of trekking routes. Most visitors walk one of three. That imbalance is the whole opportunity." },
    ],
    sections: [
      {
        h2: "Where the Crowds Actually Are",
        blocks: [
          {
            table: {
              head: ["Busy", "Why", "Worst moment"],
              rows: [
                ["Lukla to Namche Bazaar", "Every Everest trekker, porter and yak train shares one trail", "Mid-morning, when the flights have landed"],
                ["Lobuche and Gorak Shep", "Very few lodges, no alternatives", "Any afternoon in October"],
                ["Poon Hill summit", "Hundreds of people arrive for the same sunrise", "The half hour before dawn"],
                ["Annapurna Base Camp", "One cluster of lodges at the end of a one-way gorge", "Early afternoon, when beds run out"],
                ["Thorong La", "Everyone crosses on the same morning schedule", "Between 6 and 9 am"],
              ],
            },
          },
          { p: "Notice what is missing. The Manaslu Circuit, Langtang, the whole of the east and west, and every side valley off the main trails. Notice also that the busy places are busy at specific times. Both facts can be used." },
        ],
      },
      {
        h2: "Shift Your Dates",
        blocks: [
          { p: "The peak is narrower than the season. On the main trails it runs from roughly the second week of October to the middle of November. Either side of that the weather is nearly as good and the numbers are sharply lower." },
          {
            ul: [
              "<strong>Late September to early October.</strong> The tail of the monsoon: greener, some afternoon cloud, an occasional shower, and trails that are half empty.",
              "<strong>Mid-November to early December.</strong> The best-kept window of the year. Colder, with the same clear sky and a fraction of the people. See [[post:trekking-in-nepal-in-november|trekking in November]].",
              "<strong>Festival days.</strong> On the main days of Dashain and Tihar the number of Nepali trekkers drops and many groups time their trips to avoid them. In 2026 that means around 20 – 22 October and 8 – 11 November.",
              "<strong>Start midweek.</strong> Group departures cluster on weekends, and the wave moves up the trail together. Starting on a Tuesday or Wednesday puts you between waves.",
            ],
          },
        ],
      },
      {
        h2: "Choose the Quieter Route",
        blocks: [
          { p: "For almost every famous trek there is a neighbour with a similar view and a fraction of the traffic." },
          {
            table: {
              head: ["Instead of", "Consider", "What you gain"],
              rows: [
                ["Everest Base Camp", "[[trek:gokyo-lake-trek|Gokyo Lakes]]", "Turquoise lakes, the view from Gokyo Ri, a third of the trekkers"],
                ["Everest Base Camp", "[[trek:pikey-peak-trek|Pikey Peak]]", "A panorama from Kanchenjunga to Annapurna, no flight, almost nobody"],
                ["Poon Hill", "[[trek:mohare-danda-trek|Mohare Danda]] or [[trek:khopra-danda-trek|Khopra Danda]]", "The same mountains from a ridge with community lodges and silence"],
                ["Annapurna Base Camp", "[[trek:mardi-himal-trek|Mardi Himal]]", "A ridge walk under Machhapuchhre; busy by its own standards, calm by ABC's"],
                ["Annapurna Circuit", "[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "What the Annapurna Circuit was thirty years ago: no road, strong culture"],
                ["Langtang Valley", "[[trek:tamang-heritage-trek|Tamang Heritage Trail]]", "Villages and hot springs instead of a single valley trail"],
              ],
            },
          },
          { p: "If you want to go further off the map, our guide to [[post:off-the-beaten-path-treks-in-nepal|off-the-beaten-path treks]] covers the routes where you may meet no other foreigners at all. They ask for more time and more tolerance of basic lodging, and repay both." },
        ],
      },
      {
        h2: "Use the Side Trails",
        blocks: [
          { p: "You can also stay on the famous route and simply leave the main line of it. Most major treks have a parallel path that the standard itineraries skip." },
          {
            ul: [
              "<strong>Everest: go by Phortse.</strong> From above Namche, the high trail through Mong La and Phortse to Pangboche runs along the opposite side of the valley from the Tengboche route. It has better views of Ama Dablam, far fewer people, and frequent sightings of Himalayan tahr.",
              "<strong>Everest: return by Thame.</strong> A day's detour west of Namche takes you to a quiet Sherpa valley most trekkers never see.",
              "<strong>Annapurna Base Camp: enter by Landruk.</strong> Approach from the east bank through Landruk and Jhinu rather than up the main staircase from Nayapul and Ghandruk.",
              "<strong>Annapurna Circuit: take the upper trail.</strong> Between Pisang and Manang the high route through Ghyaru and Ngawal is a stiff climb with the best views on the whole circuit, while the road and most trekkers follow the valley floor.",
              "<strong>Langtang: sleep beyond Kyanjin.</strong> Day-walk up the valley towards Langshisha Kharka and you will have a glacial valley to yourself.",
            ],
          },
        ],
      },
      {
        h2: "Sleep Where Others Don't",
        blocks: [
          { p: "Standard itineraries stop in the same villages, so those villages fill and the ones an hour either side sit half empty. Staying off the standard stops is the single easiest change to make, and it puts you on the trail at a different time from everyone else for the whole of the next day." },
          {
            table: {
              head: ["Everyone stops at", "Try instead"],
              rows: [
                ["Phakding", "Monjo or Benkar, further on — which also shortens the climb to Namche"],
                ["Tengboche", "Deboche, twenty minutes beyond, or Pangboche"],
                ["Dingboche", "Pheriche, in the next valley, where the rescue clinic gives a daily altitude talk"],
                ["Lobuche", "Thukla, below the memorial ridge, for those acclimatising slowly"],
                ["Ghorepani", "Tadapani or Deurali on the ridge towards Ghandruk"],
                ["Chhomrong", "Sinuwa, across the valley"],
                ["Manang", "Braga or Ngawal"],
              ],
            },
          },
          { p: "Altitude still governs. Moving a night's stop is fine; moving it higher than the schedule allows is not. Check any change against the sleeping-altitude rule in our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]]." },
        ],
      },
      {
        h2: "Walk at Different Hours",
        blocks: [
          {
            ul: [
              "<strong>Leave at first light.</strong> Groups breakfast at seven and walk at eight. Be on the trail by half past six and you have two hours of empty path in the best light of the day.",
              "<strong>Or leave late.</strong> On short stages, start after nine and let the wave go ahead.",
              "<strong>Skip the sunrise scrum.</strong> At Poon Hill, the tower is packed for dawn and deserted an hour later with the same view. Or go for sunset, when almost nobody does. Kala Patthar at sunset is warmer and arguably better lit than at dawn.",
              "<strong>Eat lunch early or late.</strong> Trail-side kitchens cook to order; arriving at noon with three groups means an hour's wait.",
              "<strong>Reach the bottlenecks by early afternoon.</strong> Where beds are limited, the people who arrive at one have rooms and the people who arrive at four do not.",
            ],
          },
        ],
      },
      {
        h2: "When Busy Is Fine",
        blocks: [
          { p: "A full trail has its compensations. Lodges are lively, there is always someone to walk with, and on a first trek the company is reassuring. Busy routes are also the best supplied: more lodges, better food, working phone signal, a clinic within reach. If this is your first time at altitude, the well-trodden trail is the sensible choice, crowds and all. The advice above is for making it more comfortable, not for avoiding it." },
          { p: "A good guide does much of this without being asked — phoning ahead for rooms, choosing the lodge the groups do not use, setting off before the rush. It is one of the less obvious reasons to walk with one in peak season; our guide to [[post:guides-and-porters-in-nepal-rules-and-costs|guides and porters]] covers the rest. Tell us which trek you had in mind and how you feel about company, and we will suggest the version of it that fits." },
        ],
      },
    ],
    faqs: [
      { question: "When is peak trekking season in Nepal?", answer: "The autumn peak runs from about the second week of October to the middle of November, with a second, smaller peak in late March and April. Outside those weeks the main trails are far quieter, even when the weather is still good." },
      { question: "Which treks in Nepal are least crowded?", answer: "Manaslu Circuit, Langtang, Pikey Peak, Mohare Danda and Khopra Danda are all much quieter than the Everest and Annapurna Base Camp trails. Remote routes such as Kanchenjunga, Makalu and Dolpo see very few trekkers at all." },
      { question: "Is Everest Base Camp too crowded in October?", answer: "It is busy, especially between Lukla and Namche and at Lobuche and Gorak Shep. Walking by way of Phortse, sleeping in the smaller villages and starting early each day make a large difference. Gokyo is the quieter alternative in the same region." },
      { question: "How can I avoid crowds at Poon Hill?", answer: "Go up for sunset rather than sunrise, or stay on the summit for an hour after dawn, when most people have gone down for breakfast. Alternatively choose Mohare Danda or Khopra Danda, which have similar views and very few visitors." },
      { question: "Is November less crowded than October in Nepal?", answer: "Yes, from about the middle of the month. The first half of November is still peak season. The second half has the same clear weather, colder nights and far fewer trekkers on every route." },
      { question: "Do I need to book teahouses in advance in peak season?", answer: "At the highest stops on the Everest and Annapurna Base Camp trails it is advisable in October and early November. Lodges do not take online bookings; a guide reserves by phone a day ahead." },
      { question: "Are the quieter treks harder?", answer: "Not necessarily. Pikey Peak and Mohare Danda are easier than Everest Base Camp. Manaslu is comparable to the Annapurna Circuit. The difference is usually simpler lodges and fewer services, not harder walking." },
      { question: "What time should I start walking to avoid groups?", answer: "Be on the trail by about half past six. Most organised groups leave between half past seven and eight, so an early start gives you a clear path for the first two hours and the best light for photographs." },
    ],
    relatedTreks: ["gokyo-lake-trek", "pikey-peak-trek", "mohare-danda-trek", "khopra-danda-trek", "manaslu-circuit-trek", "tamang-heritage-trek"],
    tripsNote: "Quieter neighbours of the famous routes, all in good condition in autumn.",
    relatedPosts: [
      "off-the-beaten-path-treks-in-nepal",
      "trekking-in-nepal-in-november",
      "gokyo-lakes-trek-guide",
      "mohare-danda-community-trek-guide",
      "manaslu-vs-annapurna-circuit",
      "pikey-peak-trek-guide",
    ],
    tags: ["Travel Planning", "Trekking Seasons", "Quiet Trails", "Trekking Tips"],
    meta: {
      title: "How to Avoid Crowds on Nepal Treks in Peak Season",
      description: "Where Nepal's trails are busiest in October and November, the quieter routes with the same views, and the timing tricks that give you space on any trek.",
      keywords: "avoid crowds Nepal trekking, quiet treks in Nepal, less crowded treks Nepal, Nepal peak season trekking, Everest Base Camp crowds, alternative treks Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-circuit-in-november",
    title: "Annapurna Circuit in November: Thorong La Before Winter",
    cluster: "seasonal",
    date: "2026-10-17",
    hero: {
      image: trekImage("annapurna-circuit-trek", "00-annapurna-range-between-ledar-and-thorong-phedi"),
      alt: "The Annapurna range seen from the trail between Ledar and Thorong Phedi on the Annapurna Circuit.",
    },
    excerpt:
      "November is the last full month in which Thorong La can be relied on. The sky is clear, the Manang valley is at its driest, and the pass is cold but usually free of snow. This is the weather, the state of the pass, the gear it needs, and how late in the month you can sensibly leave it.",
    intro: [
      { p: "The Annapurna Circuit is a trek built around one day. Everything before it — the gorge of the Marsyangdi, the pine forests of Pisang, the long acclimatisation in Manang — is preparation for the morning you leave High Camp in the dark and climb to 5,416 metres. Whether that morning goes well depends on your acclimatisation and on the weather, and November looks after the second." },
      { p: "It is the driest month of the year on the north side of the range, the wind on the pass is lighter than in spring, and until the last days of the month the crossing is normally on bare trail. After that the odds change. This guide is about using the window while it is open." },
    ],
    sections: [
      {
        h2: "November Weather Around the Circuit",
        blocks: [
          {
            table: {
              head: ["Stage", "Altitude", "Day", "Night"],
              rows: [
                ["Besisahar / Jagat", "760 – 1,300 m", "20 – 25°C", "10 – 14°C"],
                ["Chame", "2,670 m", "10 – 15°C", "−1 to 3°C"],
                ["Manang", "3,540 m", "6 – 11°C", "−7 to −2°C"],
                ["Thorong Phedi", "4,450 m", "1 – 6°C", "−13 to −8°C"],
                ["High Camp", "4,880 m", "−1 to 4°C", "−16 to −10°C"],
                ["Thorong La", "5,416 m", "−8 to −2°C at dawn", "—"],
                ["Muktinath", "3,760 m", "7 – 12°C", "−5 to 0°C"],
              ],
              note: "Typical ranges. Manang lies in the rain shadow of the Annapurnas and is drier and sunnier than these altitudes suggest; the wind is the real source of cold.",
            },
          },
          { p: "The circuit crosses more climate zones than any other popular trek. You start in rice terraces and banana trees and are in a high-altitude desert a week later. Pack for both: light clothes for the first three days and the last two, full winter kit for the five in the middle." },
        ],
      },
      {
        h2: "The State of Thorong La",
        blocks: [
          { p: "In a normal November the trail over the pass is dry, frozen dirt with patches of old ice in the shade. The crossing is long and high but not technical: about four hours up from High Camp, an hour less from the top to the first teahouse on the far side, and a knee-testing 1,600-metre descent to Muktinath." },
          { p: "The risk is an early winter storm. Thorong La has a serious history in exactly this season — the blizzard of October 2014 killed dozens of trekkers and local staff on and around the pass — and the lesson from it is plain. If heavy snow falls, or is forecast, you wait in Manang or at Phedi until it has settled and a trail has been broken. Nobody crosses in a whiteout to keep a schedule." },
          {
            ul: [
              "<strong>Check the forecast in Manang.</strong> Lodges and the Himalayan Rescue Association post there have current information, and there is phone signal.",
              "<strong>Leave between four and five in the morning.</strong> The wind on the pass rises sharply from mid-morning. Aim to be on top by nine.",
              "<strong>Carry microspikes</strong> from about the 20th onwards. The descent on the Muktinath side holds ice in shadow.",
              "<strong>Keep a spare day</strong> in the schedule specifically for the pass.",
            ],
          },
          { p: "The crossing itself — pacing, the choice between Phedi and High Camp, what the far side is like — is described step by step in our [[post:thorong-la-pass-crossing-guide|Thorong La guide]]." },
        ],
      },
      {
        h2: "Acclimatising in the Cold",
        blocks: [
          { p: "The circuit's long approach is its great safety feature, and the temptation in November's short days is to shorten it by taking a jeep as far up the valley as the road allows. Resist the last part of that. A vehicle can now reach Manang, and people who are driven to 3,500 metres and walk on the next day are the ones who get into trouble at Phedi." },
          {
            ul: [
              "<strong>Walk from Chame at the latest</strong>, which gives three days on foot before Manang.",
              "<strong>Spend two nights in Manang.</strong> Use the day between for a walk to Ice Lake or the Gangapurna viewpoint — climb high, sleep low.",
              "<strong>Break the next stage at Yak Kharka or Ledar</strong>; do not go from Manang to Phedi in one day.",
              "<strong>Drink more than you want to.</strong> Cold suppresses thirst and dry air strips water from every breath.",
            ],
          },
          { p: "Where the road now runs, and how to avoid walking on it, is in [[post:annapurna-circuit-road-and-jeep-changes|the Annapurna Circuit road and jeep guide]]. The medical side is in our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]]." },
        ],
      },
      {
        h2: "Tilicho Lake in November",
        blocks: [
          { p: "The side trip to Tilicho Lake, at 4,919 metres, adds three days from Manang and is the best acclimatisation for the pass there is. In the first half of November it is in excellent condition and the lake is still open water, a hard blue against the Great Barrier." },
          { p: "From about the third week the lake begins to freeze, the lodge at Tilicho Base Camp gets very cold, and the landslide section of the trail between Shree Kharka and base camp can hold ice. It is still done, with care. If the lake is the point of your trip, go early in the month on the [[trek:annapurna-circuit-with-tilicho-lake-trek|Annapurna Circuit with Tilicho Lake]] or the [[trek:tilicho-lake-trek|Tilicho Lake trek]]." },
        ],
      },
      {
        h2: "How Late Can You Start?",
        blocks: [
          {
            table: {
              head: ["Leave Kathmandu", "Cross the pass around", "Verdict"],
              rows: [
                ["1 – 7 November", "10 – 16 November", "Ideal. Stable, busy on the pass in the first week"],
                ["8 – 15 November", "17 – 24 November", "Very good. Quieter, colder; carry microspikes"],
                ["16 – 22 November", "25 November – 1 December", "Workable. Real cold and a rising chance of snow; allow two spare days"],
                ["After 22 November", "December", "Winter conditions. Possible in a dry year, with a flexible plan"],
              ],
            },
          },
          { p: "Lodges at Thorong Phedi and High Camp stay open through November and usually into December, closing when snow or a lack of trekkers makes it pointless. Lower down, Manang and the villages of the Kali Gandaki are inhabited all year." },
        ],
      },
      {
        h2: "Which Version of the Circuit",
        blocks: [
          { p: "Roads at both ends mean the circuit now comes in several lengths. With November's short daylight the middle options are the most comfortable." },
          {
            table: {
              head: ["Trip", "Days", "Notes"],
              rows: [
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit trek]]", "15", "The full approach on foot from the lower valley, with proper acclimatisation"],
                ["[[trek:annapurna-circuit-with-tilicho-lake-trek|Circuit with Tilicho Lake]]", "14", "Adds the lake; best in the first half of the month"],
                ["[[trek:short-annapurna-circuit-trek|Short Annapurna Circuit]]", "7", "Jeep to the upper valley and out from Muktinath; only for those already acclimatised or willing to add rest days"],
              ],
            },
          },
          { p: "After the pass, most people drive or fly out from Jomsom. If you have the days, walk on down the Kali Gandaki through Marpha — November is apple season's end, and the orchards and the local brandy are part of the trek. Our [[post:annapurna-circuit-trek-complete-guide|complete guide to the circuit]] covers every stage, and [[post:manaslu-vs-annapurna-circuit|Manaslu vs Annapurna Circuit]] helps if you are choosing between the two." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time for the Annapurna Circuit?", answer: "Yes. November is the driest month on the circuit and Thorong La is normally clear of snow. The first three weeks are the best; from late November the chance of a snowfall that closes the pass for a few days increases." },
      { question: "Is Thorong La open in November?", answer: "Normally yes, throughout the month. It can close for a few days after an early winter snowfall, most often in the last week. Keep a spare day in your itinerary and ask about conditions in Manang." },
      { question: "How cold is Thorong La in November?", answer: "At dawn on the pass it is typically −8 to −2°C, and the wind makes it feel much colder. Nights at High Camp are around −10 to −16°C. Manang, lower down, is −2 to −7°C at night." },
      { question: "Is there snow on the Annapurna Circuit in November?", answer: "Usually only patches of old snow and ice in shaded parts near the pass. Fresh snowfall is uncommon before the last week of the month, when microspikes become worth carrying." },
      { question: "Can I do the Annapurna Circuit in late November?", answer: "Yes, with warmer gear and a flexible schedule. Start by about 15 November for the best chance of a clear pass. Later starts are possible in dry years but should allow two spare days." },
      { question: "Are teahouses open on the Annapurna Circuit in November?", answer: "Yes. All lodges on the main circuit, including Thorong Phedi and High Camp, are open throughout November. They are busy early in the month and quiet later." },
      { question: "What time should I start the Thorong La crossing?", answer: "Between four and five in the morning from High Camp or Thorong Phedi. The wind on the pass strengthens from mid-morning, so the aim is to reach the top by about nine." },
      { question: "Is Tilicho Lake frozen in November?", answer: "Not usually in the first half of the month. It begins to freeze from around the third week, and the trail to it can be icy. Early November is the better time to include it." },
    ],
    relatedTreks: ["annapurna-circuit-trek", "annapurna-circuit-with-tilicho-lake-trek", "short-annapurna-circuit-trek", "tilicho-lake-trek", "manaslu-circuit-trek", "jomsom-muktinath-trek"],
    tripsNote: "The circuit in three lengths, and the routes that share its ground.",
    relatedPosts: [
      "annapurna-circuit-trek-complete-guide",
      "thorong-la-pass-crossing-guide",
      "annapurna-circuit-road-and-jeep-changes",
      "tilicho-lake-trek-guide",
      "manaslu-circuit-in-november",
      "trekking-in-nepal-in-november",
    ],
    tags: ["Annapurna Region", "Annapurna Circuit", "Thorong La", "November"],
    meta: {
      title: "Annapurna Circuit in November: Thorong La & Weather",
      description: "Annapurna Circuit in November: temperatures by stage, whether Thorong La is open, Tilicho Lake conditions, the gear to carry and how late you can start.",
      keywords: "Annapurna Circuit in November, Thorong La November, Annapurna Circuit weather November, Thorong La pass open, Tilicho Lake November, Annapurna Circuit late autumn",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "manaslu-circuit-in-november",
    title: "Manaslu Circuit in November: Larke La, Permits and Late-Season Conditions",
    cluster: "seasonal",
    date: "2026-10-18",
    hero: {
      image: trekImage("manaslu-circuit-trek", "00-samagaun-village-manaslu-circuit-03"),
      alt: "Stone houses of Samagaun village on the Manaslu Circuit beneath snow-covered mountains.",
    },
    excerpt:
      "The Manaslu Circuit in November is quiet, dry and cold, with the Larke La usually open until the first winter snow. This is the weather on the trail, the state of the pass, how the restricted-area permit works around the festival holidays, and the latest sensible date to start.",
    intro: [
      { p: "Manaslu is the trek people choose when they want a great Himalayan circuit without the road and the crowds that now come with Annapurna's. It follows the Budhi Gandaki from subtropical gorge to the Tibetan-influenced villages of Nubri, turns under the north face of the eighth-highest mountain in the world, and crosses the Larke La at 5,106 metres to come down into the Marsyangdi valley." },
      { p: "Its best month is October. Its second best is the first three weeks of November, which have something October does not: space. By then most groups have gone through, the lodges at Samagaun and Samdo have empty tables, and the light on Manaslu's twin summit is as clean as it gets. The trade is cold, and a pass that will not wait indefinitely." },
    ],
    sections: [
      {
        h2: "November Weather on the Circuit",
        blocks: [
          {
            table: {
              head: ["Stage", "Altitude", "Day", "Night"],
              rows: [
                ["Machha Khola / Jagat", "900 – 1,340 m", "18 – 24°C", "9 – 13°C"],
                ["Namrung / Lho", "2,630 – 3,180 m", "9 – 14°C", "−2 to 3°C"],
                ["Samagaun", "3,530 m", "6 – 10°C", "−8 to −3°C"],
                ["Samdo", "3,875 m", "3 – 8°C", "−11 to −5°C"],
                ["Dharamsala (Larke Phedi)", "4,460 m", "0 – 5°C", "−15 to −9°C"],
                ["Larke La", "5,106 m", "−10 to −3°C at dawn", "—"],
                ["Bimthang", "3,590 m", "5 – 10°C", "−8 to −3°C"],
              ],
              note: "Typical ranges, colder late in the month. The lower gorge is warm and humid even in November; the upper valley is dry, bright and windy.",
            },
          },
          { p: "The contrast between the first four days and the rest is large. You walk in shorts through the gorge and need every warm layer you have from Samagaun onwards. Rain is very unlikely. Snow above 4,000 metres becomes possible from the third week." },
        ],
      },
      {
        h2: "The Larke La in November",
        blocks: [
          { p: "The Larke La is lower than Thorong La but a longer and wilder day. From the single lodge at Dharamsala it is four to five hours to the top across a long moraine, with the summit prayer flags appearing well before you reach them, then a steep, loose descent of nearly 1,500 metres to Bimthang. Eight to ten hours in all, starting between three and four in the morning." },
          {
            ul: [
              "<strong>First three weeks:</strong> the trail is normally dry or lightly frozen, with snow patches near the top. The crossing is strenuous, not technical.",
              "<strong>Last week onwards:</strong> the first winter storms can lay snow deep enough to hide the trail on the moraine. The pass may be shut for several days, and the descent on the Bimthang side becomes icy.",
              "<strong>The lodge at Dharamsala</strong> is basic — stone rooms and dormitory tents — and closes for winter after the first heavy snowfall, usually some time in December. Once it shuts, the crossing means a very long day from Samdo.",
            ],
          },
          { p: "Carry microspikes after mid-month, start early enough to be over the top before the wind rises at around ten, and build one spare day into the plan. The crossing is described in detail in our [[post:larke-la-pass-crossing-guide|Larke La guide]]." },
        ],
      },
      {
        h2: "Permits and the Festival Holidays",
        blocks: [
          { p: "Manaslu is a restricted area. You cannot trek it alone or without paperwork: the rules require a group of at least two trekkers, a licensed guide, and a restricted-area permit that only the Department of Immigration in Kathmandu can issue, through a registered agency, using your original passport. Conservation-area permits for Manaslu and Annapurna are needed as well." },
          { p: "That matters in the 2026 calendar, because the immigration office closes for the main Dashain and Tihar holidays." },
          {
            table: {
              head: ["Holiday (2026)", "Office closed roughly", "What to do"],
              rows: [
                ["Dashain", "17 – 25 October", "Have the permit issued before the 16th, or start after the 26th"],
                ["Tihar", "8 – 11 November", "Be in Kathmandu with your passport by the 5th, or start from the 12th"],
              ],
            },
          },
          { p: "The permit fee is higher from September to November than in the rest of the year. Current figures and the full process are in our guide to [[post:restricted-area-trekking-permits-in-nepal|restricted-area permits]], and the festival timing in [[post:trekking-permits-during-dashain|permits during Dashain]]. If you book with us, send a passport copy early and we prepare everything so that the visit to the office takes one working day." },
        ],
      },
      {
        h2: "How Late Can You Start?",
        blocks: [
          {
            table: {
              head: ["Leave Kathmandu", "Cross the pass around", "Verdict"],
              rows: [
                ["Late October – 5 November", "6 – 16 November", "Ideal: settled, quieter than October"],
                ["6 – 14 November", "17 – 25 November", "Good: cold, almost empty; mind the Tihar office closure"],
                ["15 – 20 November", "26 November – 1 December", "Possible: winter conditions likely on the pass; two spare days"],
                ["After 20 November", "December", "Only with a flexible plan and willingness to turn back"],
              ],
            },
          },
          { p: "Unlike Annapurna, there is no road to retreat along from the upper valley. If the pass is closed when you reach Samdo, the alternative is to walk back down the way you came — five days. That is the reason for the spare days, and for not leaving it too late." },
        ],
      },
      {
        h2: "What Is Different About Manaslu in Late Autumn",
        blocks: [
          {
            ul: [
              "<strong>The villages are busy with their own work.</strong> The barley is in, the yaks are coming down from the high pastures, and the monasteries at Lho and Samagaun are lively. You see Nubri as a place people live in.",
              "<strong>Side trips are at their best.</strong> The acclimatisation day at Samagaun can be spent at Birendra Lake, Pungyen Gompa or — for the fit — Manaslu Base Camp at about 4,800 metres. All are clear of snow early in the month.",
              "<strong>Lodges are simpler than on Annapurna.</strong> Fewer rooms, plainer food, little heating. In November there is at least no difficulty getting a bed.",
              "<strong>Days are short.</strong> Several stages in the gorge are long. Start at first light to avoid finishing by torch.",
              "<strong>Mule trains thin out.</strong> The supply caravans that crowd the lower trail in October are fewer.",
            ],
          },
        ],
      },
      {
        h2: "Routes and Extensions",
        blocks: [
          {
            table: {
              head: ["Trip", "Days", "In November"],
              rows: [
                ["[[trek:manaslu-circuit-trek|Manaslu Circuit trek]]", "15", "The standard circuit; best started by mid-month"],
                ["[[trek:larke-pass-trek|Larke Pass trek]]", "14", "A slightly tighter version of the same route"],
                ["[[trek:tsum-valley-and-manaslu-circuit-trek|Tsum Valley and Manaslu Circuit]]", "20", "Adds a week in the Tsum valley; start by the first days of the month"],
                ["[[trek:tsum-valley-trek|Tsum Valley trek]]", "13", "No high pass, so it works well into late November"],
                ["[[trek:lower-manaslu-trek|Lower Manaslu trek]]", "10", "Stays below 2,700 m — a good choice when it is too late for the pass"],
              ],
            },
          },
          { p: "If your dates fall at the very end of the month, the Tsum valley is the answer: the same region and culture, a separate restricted permit, and no pass to gamble on. See our [[post:tsum-valley-trek-guide|Tsum Valley guide]], and for the circuit itself, the [[post:manaslu-circuit-trek-complete-guide|complete Manaslu guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time for the Manaslu Circuit?", answer: "Yes, particularly the first three weeks. The weather is dry and clear, and the trail is much quieter than in October. Nights are cold, and the chance of snow on the Larke La rises towards the end of the month." },
      { question: "Is the Larke La pass open in November?", answer: "Normally yes. It is usually clear until late November, when the first winter storms can close it for several days. Start the trek by mid-month and keep a spare day for the pass." },
      { question: "How cold is the Manaslu Circuit in November?", answer: "Samagaun is around −3 to −8°C at night. Dharamsala, below the pass, is −9 to −15°C, and the pass itself is around −3 to −10°C at dawn with wind. The lower gorge stays warm." },
      { question: "Can I get a Manaslu permit during Tihar?", answer: "Not on the holiday days themselves, because the immigration office is closed. In 2026 that is around 8 to 11 November. Have the permit issued before the holiday or start from 12 November." },
      { question: "Do I need a guide for the Manaslu Circuit?", answer: "Yes. Manaslu is a restricted area: a licensed guide, a group of at least two trekkers and a permit arranged through a registered agency are all required." },
      { question: "Are teahouses open on the Manaslu Circuit in November?", answer: "Yes, on the whole route. The lodge at Dharamsala below the pass stays open until the first heavy snowfall, normally in December. Lodges are simpler than on the Annapurna Circuit." },
      { question: "How long is the Larke La crossing day?", answer: "Eight to ten hours from Dharamsala to Bimthang, usually starting between three and four in the morning. It is the longest and hardest day of the trek." },
      { question: "What if the Larke La is closed when I get there?", answer: "You wait at Samdo or Dharamsala for it to clear, which is why a spare day is built in. If it stays closed, the only alternative is to walk back down the Budhi Gandaki, which takes about five days." },
    ],
    relatedTreks: ["manaslu-circuit-trek", "larke-pass-trek", "tsum-valley-and-manaslu-circuit-trek", "tsum-valley-trek", "lower-manaslu-trek", "annapurna-circuit-trek"],
    tripsNote: "Manaslu with and without the pass, and the circuit next door.",
    relatedPosts: [
      "manaslu-circuit-trek-complete-guide",
      "larke-la-pass-crossing-guide",
      "restricted-area-trekking-permits-in-nepal",
      "tsum-valley-trek-guide",
      "annapurna-circuit-in-november",
      "manaslu-vs-annapurna-circuit",
    ],
    tags: ["Manaslu Region", "Manaslu Circuit", "Larke La", "November"],
    meta: {
      title: "Manaslu Circuit in November: Larke La, Permits & Weather",
      description: "Manaslu Circuit in November: temperatures, whether the Larke La is open, how the restricted permit works around Tihar, and the latest date to start.",
      keywords: "Manaslu Circuit in November, Larke La November, Manaslu trek weather November, Manaslu permit Tihar, Manaslu Circuit late autumn, Larke pass open",
    },
  },
];
