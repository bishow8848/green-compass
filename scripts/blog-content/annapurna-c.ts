import type { BlogContent } from "./build";

export const annapurnaC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "khopra-danda-trek-guide",
    title: "Khopra Danda Trek: A Ridge with Dhaulagiri in Front of You",
    cluster: "annapurna",
    date: "2026-06-05",
    hero: {
      image: "mardi-treks/khopra-danda-trek/khopra-danda-trek-00-ghorepani-poon-hill-trek",
      alt: "The trail through Ghorepani towards Khopra Danda, Annapurna region, Nepal.",
    },
    excerpt:
      "A community-owned lodge on a 3,660 m ridge with Dhaulagiri and Annapurna South directly opposite, an optional walk to the sacred Khayer Lake at 4,600 m, and almost nobody on the trail. The best alternative to Poon Hill.",
    intro: [
      { p: "Khopra Danda — sometimes Khopra Ridge — is the trek we recommend to people who have read about Poon Hill and want the same mountains without the crowd. It branches off the Ghorepani trail and climbs a long ridge to a community-run lodge at around 3,660 m, positioned directly across the Kali Gandaki gorge from <strong>Dhaulagiri I (8,167 m)</strong>, with Annapurna South and Nilgiri on the other side." },
      { p: "The lodge is owned and run by the villages below, with profits going to a local education fund. You will likely share it with five or six other trekkers." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "13 days from Kathmandu, 9 days from Pokhara"],
                ["Highest point", "Khayer Lake, 4,600 m (Khopra Danda ridge about 3,660 m)"],
                ["Difficulty", "Moderate — sustained ridge climbing, long days"],
                ["Best seasons", "March to May, October to November"],
                ["Accommodation", "Teahouses plus the community lodge at Khopra"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
                ["Traffic", "Very low — a fraction of the Ghorepani trail"],
              ],
            },
          },
          { p: "We run it as a [[trek:khopra-danda-trek|13-day trek from Kathmandu]] and a [[trek:khopra-danda-trek-from-pokhara|9-day version from Pokhara]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { p: "The walk in follows the Ghorepani trail from Nayapul — Birethanti, the Ulleri staircase, and the rhododendron forest to Ghorepani at 2,885 m, usually with the Poon Hill sunrise included since you are there. Then it turns away from the crowd." },
          {
            ul: [
              "<strong>Ghorepani to Swanta</strong> — down off the saddle and west into a quiet farming valley almost no trekkers see, with a night in a village homestay or small lodge.",
              "<strong>Swanta to Chistibung</strong> — up through forest and summer grazing pasture, climbing steadily away from the treeline.",
              "<strong>Chistibung to Khopra Danda (3,660 m)</strong> — onto the ridge, and the view arrives: Dhaulagiri straight ahead across the gorge, Annapurna South and Hiunchuli behind you, and the Kali Gandaki dropping away 3,000 m below.",
              "<strong>Khayer Lake (4,600 m)</strong> — an optional and demanding day walk from the ridge to a sacred glacial lake beneath Annapurna South, where pilgrims come at Janai Purnima in August. Around 1,000 m of ascent and back, and the hardest day of the trek.",
              "<strong>Down via Tadapani or Ghandruk</strong> — rejoining the main trail for the descent through Gurung villages to the road.",
            ],
          },
          { p: "Several variations exist, including linking Khopra to Mohare Danda to make a longer community-lodge circuit. Ask us and we will build it." },
        ],
      },
      {
        h2: "Why the Community Lodge Matters",
        blocks: [
          { p: "The Khopra Danda lodge was built and is run by the villages of the Parbat and Myagdi hills below it, as part of a wider community tourism project that also built Mohare Danda. The difference from a private teahouse is structural rather than cosmetic:" },
          {
            ul: [
              "Profits go to a village committee, funding schools, health posts, and trail maintenance rather than a family business.",
              "Staff rotate from the villages, and the work is shared rather than concentrated.",
              "The lodges were designed with solar power, rainwater harvesting, and improved stoves from the outset.",
              "The trail exists because the communities built it, which is why it is quiet — there was no historic trading route here.",
            ],
          },
          { p: "It is the clearest example in Nepal of trekking money reaching a district that otherwise sees none. Our [[post:responsible-trekking-in-nepal|responsible trekking guide]] covers why that matters, and [[post:mohare-danda-community-trek-guide|the Mohare Danda guide]] describes the sister project." },
        ],
      },
      {
        h2: "Khayer Lake",
        blocks: [
          { p: "The optional day from Khopra to <strong>Khayer Lake at 4,600 m</strong> is the most demanding thing on the trek and, for many trekkers, the reason to come. It climbs around 1,000 m from the ridge along a high shoulder beneath Annapurna South to a small glacial lake in a rock bowl, sacred to Hindus and visited by pilgrims each August at Janai Purnima." },
          {
            ul: [
              "<strong>Time:</strong> seven to nine hours return from Khopra, starting before dawn.",
              "<strong>Altitude:</strong> 4,600 m, from a 3,660 m sleep. Significant, and a reason to spend two nights at Khopra.",
              "<strong>Conditions:</strong> snow closes the route from about December to March, and cloud can make route-finding genuinely difficult.",
              "<strong>Worth it:</strong> yes, in clear weather — the view of Annapurna South and Annapurna I from the approach is extraordinary, and the lake is a genuinely strange place.",
            ],
          },
          { p: "Tell us if Khayer Lake is a priority and we will build in the extra night at Khopra that makes it sensible rather than brutal." },
        ],
      },
      {
        h2: "How It Compares",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "Max", "Against Khopra Danda"],
              rows: [
                ["[[trek:poonhill-trek|Poon Hill]]", "7", "3,210 m", "Easier and shorter, the same mountains, vastly more people"],
                ["[[trek:mohare-danda-trek|Mohare Danda]]", "10", "3,300 m", "The sister community project — gentler, lower, equally quiet"],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "9", "3,580 m", "Machhapuchhre overhead rather than Dhaulagiri opposite; busier"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "4,130 m", "More dramatic, inside an amphitheatre; far busier"],
                ["[[trek:khori-himal-trek|Khori Himal]]", "10", "3,850 m", "Newer and quieter still, with fewer lodges"],
              ],
            },
          },
          { p: "Our honest ranking for a trekker who wants the Annapurna skyline and genuine quiet: Khopra Danda first, Mohare Danda second, Mardi Himal third. Poon Hill remains the right answer only if your priority is a short, easy trek." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Khopra Danda?", answer: "The ridge and the community lodge sit at around 3,660 m, directly across the Kali Gandaki gorge from Dhaulagiri. The optional day walk to Khayer Lake reaches 4,600 m, which is the highest point of the trek and the hardest day on it." },
      { question: "Is Khopra Danda better than Poon Hill?", answer: "For most trekkers with the days, yes. You see the same Dhaulagiri and Annapurna South skyline from higher and closer, the lodge is community-owned with profits going to village funds, and you will share the ridge with a handful of people rather than several hundred. Poon Hill wins only on brevity and ease." },
      { question: "How difficult is the Khopra Danda trek?", answer: "Moderate — sustained ridge climbing with some long days, and 3,660 m at the highest lodge. The Khayer Lake day at 4,600 m is challenging and optional. No technical ground anywhere on the route." },
      { question: "Is Khayer Lake worth the extra day?", answer: "In clear weather, yes — it is the most spectacular walking on the trek, with Annapurna South and Annapurna I above the approach, and a strange small glacial lake that Hindu pilgrims visit each August. It needs seven to nine hours and a pre-dawn start, and we recommend two nights at Khopra to do it properly." },
      { question: "What is a community lodge?", answer: "A lodge built and run by the villages below it, with profits going to a village committee that funds schools, health posts and trail maintenance, rather than to a private family business. Khopra Danda and Mohare Danda are the two best examples in Nepal, and both were designed with solar power and improved stoves from the start." },
      { question: "When can I do this trek?", answer: "March to May and October to November are best. Winter is possible to the ridge itself with warm kit, but snow closes the Khayer Lake route from roughly December to March. The monsoon brings cloud and leeches in the forest sections below." },
      { question: "Can I combine Khopra with Mohare Danda?", answer: "Yes, and it makes an excellent longer community-lodge circuit through the Parbat and Myagdi hills, staying in village-owned lodges almost the whole way. Ask us and we will build the itinerary around your available days." },
    ],
    relatedTreks: [
      "khopra-danda-trek",
      "khopra-danda-trek-from-pokhara",
      "mohare-danda-trek",
      "poonhill-trek",
    ],
    tripsNote: "Khopra Danda in both lengths, and the sister community-lodge trek at Mohare Danda.",
    relatedPosts: [
      "mohare-danda-community-trek-guide",
      "poon-hill-trek-guide",
      "responsible-trekking-in-nepal",
      "off-the-beaten-path-treks-in-nepal",
    ],
    tags: ["khopra danda", "community lodge", "annapurna region", "khayer lake"],
    meta: {
      title: "Khopra Danda Trek: A Ridge with Dhaulagiri in Front of You",
      description: "The Khopra Danda trek — a community-owned lodge at 3,660 m facing Dhaulagiri, the Khayer Lake day walk at 4,600 m, and why it beats Poon Hill for most trekkers.",
      keywords: "Khopra Danda trek, Khopra Ridge, Khayer Lake, community lodge trek Nepal, Poon Hill alternative",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mohare-danda-community-trek-guide",
    title: "Mohare Danda Trek: Nepal's Best Community Lodge Trail",
    cluster: "annapurna",
    date: "2026-06-09",
    hero: {
      image: "mardi-treks/mohare-danda-trek/mohare-danda-trek-00-annapurna-i-annapurna-south-and-himchuli-from-ghorepani-poon",
      alt: "Annapurna I, Annapurna South and Hiunchuli from the Ghorepani ridge, Nepal.",
    },
    excerpt:
      "A ten-day ridge trek through village-owned lodges in the Myagdi hills, with Dhaulagiri and Annapurna in view and the profits going to schools. Gentle, genuinely quiet, and the best example of community tourism in Nepal.",
    intro: [
      { p: "Mohare Danda is a ridge at 3,300 m west of Ghorepani, and the trail to it is the most successful community tourism project in Nepal. Every lodge on the route is owned by the villages it passes through, built with solar power and improved stoves, and run by a committee that puts the profits into local schools and health posts." },
      { p: "It is also a good trek on its own terms: a long ridge walk with Dhaulagiri I, Annapurna South, Annapurna I, Nilgiri and Machhapuchhre in view, through farming country that sees almost no trekkers, with gentler days than anything comparable in the region." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "10 days from Kathmandu, 6 days from Pokhara"],
                ["Highest point", "Mohare Danda, 3,300 m"],
                ["Difficulty", "Easy to moderate — gentler daily stages than most Annapurna routes"],
                ["Best seasons", "March to May, October to December"],
                ["Accommodation", "Community-owned lodges and village homestays"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
                ["Traffic", "Very low"],
              ],
            },
          },
          { p: "We run it as a [[trek:mohare-danda-trek|10-day trek from Kathmandu]] and a [[trek:mohare-danda-trek-from-pokhara|6-day version from Pokhara]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { p: "The trail runs through the Myagdi and Parbat hills west of the main Annapurna trekking corridor, following ridges and farming villages rather than a river valley." },
          {
            ul: [
              "<strong>Galeshwor or Beni to Banskharka</strong> — a drive to the road head, then up through terraced farmland and villages where the lodges are the community's own.",
              "<strong>Banskharka to Nangi</strong> — the project's original village, with a school, a paper-making workshop, and a long history of community enterprise.",
              "<strong>Nangi to Mohare Danda (3,300 m)</strong> — up through oak and rhododendron forest onto the ridge, where the lodge sits on the crest with a dawn panorama from Dhaulagiri round to Machhapuchhre.",
              "<strong>Mohare to Danda Kharka and Ghorepani</strong> — a high ridge traverse, joining the main Poon Hill trail for the last stretch if the itinerary includes it.",
              "<strong>Down to Tikhedhunga or Tadapani</strong> — and out to the road for Pokhara.",
            ],
          },
          { p: "Sunrise at Mohare Danda is the highlight: a ridge at 3,300 m with nothing in front of it, the whole western Annapurna and Dhaulagiri skyline turning gold, and perhaps four other people on the ridge. It is the Poon Hill experience without the platform." },
        ],
      },
      {
        h2: "How the Community Project Works",
        blocks: [
          { p: "The project grew out of the Annapurna Community Development Organisation in Nangi, founded by a local teacher who returned from abroad to build a school. Over two decades it has built the lodge network, a paper workshop, micro-hydro power, and one of the earliest rural computer networks in Nepal." },
          {
            ul: [
              "<strong>Ownership.</strong> Lodges belong to village committees rather than individuals.",
              "<strong>Revenue.</strong> A fixed share of lodge income goes to the school and health post funds.",
              "<strong>Employment.</strong> Staff rotate from member households, so income is distributed rather than concentrated.",
              "<strong>Design.</strong> Solar lighting, solar water heating, rainwater harvesting, and improved stoves that cut firewood use.",
              "<strong>Food.</strong> Largely grown in the villages the trail passes, which is unusual on a Nepali trekking route at this altitude.",
            ],
          },
          { p: "This matters practically as well as ethically: the lodges are well-built and well-run, the food is fresh, and the welcome in a village that owns its own lodge is different from the welcome in a commercial teahouse." },
        ],
      },
      {
        h2: "Who It Suits",
        blocks: [
          {
            ul: [
              "<strong>Trekkers who want culture as much as mountains.</strong> You spend the week in working villages rather than on a lodge corridor.",
              "<strong>Families and older walkers.</strong> Gentler daily stages, lower altitude, and warm lodges.",
              "<strong>Winter visitors.</strong> At 3,300 m this works well in December and January, with superb visibility.",
              "<strong>Anyone uncomfortable with the Poon Hill crowd</strong> who still wants the Dhaulagiri skyline at dawn.",
              "<strong>Travellers who want their money to do something.</strong> This is the clearest case in Nepal.",
            ],
          },
          { p: "One more thing worth knowing: the villages on this route are working farming communities rather than lodge settlements, so the day has a different texture. You pass people cutting millet, carrying fodder, and running a paper workshop, and the lodge you sleep in is staffed by households taking their turn. Several of our guests have described it as the first trek where they talked to Nepali people rather than about them." },
          { p: "Who should look elsewhere: trekkers chasing altitude or drama. Mohare Danda tops out at 3,300 m and the mountains are distant rather than overhead. For closer peaks, [[trek:mardi-himal-trek|Mardi Himal]] or [[trek:annapurna-base-camp-trek|Annapurna Base Camp]]; for a higher ridge with the same ethos, [[trek:khopra-danda-trek|Khopra Danda]]." },
        ],
      },
      {
        h2: "Combining It",
        blocks: [
          {
            ul: [
              "<strong>Mohare plus Khopra Danda</strong> — the two community projects linked into a longer circuit of village-owned lodges. The best version of this trek, if you have a fortnight.",
              "<strong>Mohare plus Poon Hill</strong> — the standard itinerary already joins the Ghorepani trail, so the Poon Hill sunrise is an easy addition.",
              "<strong>Mohare plus Annapurna Base Camp</strong> — possible by continuing from Ghorepani through Tadapani into the Sanctuary, making roughly a two-week trip.",
              "<strong>Mohare as an acclimatisation week</strong> — gentle and low, and a genuinely pleasant way to spend the week before a higher trek.",
            ],
          },
          { p: "Ask us for any of these. The community lodges can be booked as part of any Annapurna itinerary rather than only as a standalone trek." },
        ],
      },
    ],
    faqs: [
      { question: "How difficult is the Mohare Danda trek?", answer: "Easy to moderate, and gentler than most Annapurna routes — the daily stages are shorter, the gradients kinder, and the highest point is 3,300 m. It suits families, older walkers, and anyone wanting a cultural trek rather than an altitude challenge." },
      { question: "What makes it a community trek?", answer: "Every lodge on the route is owned by a village committee rather than a private family, with a share of income going to local school and health post funds. The lodges were built with solar power and improved stoves, staff rotate from member households, and most of the food is grown in the villages you walk through." },
      { question: "How does Mohare Danda compare with Poon Hill?", answer: "Similar mountains from a slightly higher ridge, with a fraction of the people and community-owned lodges instead of commercial ones. Poon Hill is shorter and easier to fit into a few days; Mohare is the better week if you have it." },
      { question: "Can I see Annapurna and Dhaulagiri from Mohare Danda?", answer: "Yes — the ridge at 3,300 m gives a dawn panorama from Dhaulagiri I at 8,167 m round through Annapurna South, Annapurna I, Nilgiri and Machhapuchhre. It is the same skyline as Poon Hill from a different and quieter angle." },
      { question: "Is it suitable in winter?", answer: "Very much so. At 3,300 m the nights are cold but manageable, the lodges have good stoves, and December and January visibility is the best of the year. It is one of our standard winter recommendations alongside Poon Hill and Pikey Peak." },
      { question: "Can I combine Mohare Danda with other treks?", answer: "Yes — most usefully with Khopra Danda, which makes a longer circuit entirely through community lodges. It also links easily to Poon Hill, since the itinerary already joins the Ghorepani trail, and can be continued into the Annapurna Sanctuary for a two-week trip." },
    ],
    relatedTreks: [
      "mohare-danda-trek",
      "mohare-danda-trek-from-pokhara",
      "khopra-danda-trek",
      "poonhill-trek",
    ],
    tripsNote: "Mohare Danda in both lengths, plus the Khopra Danda ridge that links to it.",
    relatedPosts: [
      "khopra-danda-trek-guide",
      "responsible-trekking-in-nepal",
      "poon-hill-trek-guide",
      "winter-trekking-in-nepal-best-routes",
    ],
    tags: ["mohare danda", "community lodge", "annapurna region", "responsible travel"],
    meta: {
      title: "Mohare Danda Trek: Nepal's Best Community Lodge Trail",
      description: "A ten-day ridge trek through village-owned lodges in the Myagdi hills — Dhaulagiri and Annapurna at dawn, gentle stages, and profits that fund local schools.",
      keywords: "Mohare Danda trek, community lodge trek Nepal, Nangi village, responsible trekking Annapurna, Poon Hill alternative",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nar-phu-valley-trek-guide",
    title: "Nar Phu Valley Trek: Two Medieval Villages Behind the Annapurnas",
    cluster: "annapurna",
    date: "2026-06-12",
    hero: {
      image: "mardi-treks/nar-phu-valley-trek/nar-phu-valley-trek-00-khatung-kang-from-manang",
      alt: "Khatung Kang seen from Manang, Nar Phu Valley trek, Nepal.",
    },
    excerpt:
      "A restricted valley north of Manang holding two of the most isolated Tibetan-Buddhist villages in Nepal, reached through a slot canyon and left over the 5,320 m Kang La. Permits, route, difficulty, and why it stays empty.",
    intro: [
      { p: "Nar and Phu are two villages at around 4,000 m in a side valley north of Manang, closed to outsiders until 2002 and still seeing a tiny fraction of the trekkers who walk the Annapurna Circuit a day's walk away. Getting in means a long climb through a narrow gorge; getting out, for most itineraries, means crossing the <strong>Kang La at 5,320 m</strong> back into Manang." },
      { p: "The draw is the villages themselves: flat-roofed stone houses, ancient gompas, yak herds, and a Tibetan-dialect culture that has been largely undisturbed because almost nobody went there. It feels closer to Upper Mustang than to the Annapurna Circuit, for a fraction of the permit cost." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "14 days from Kathmandu"],
                ["Highest point", "Kang La, 5,320 m"],
                ["Villages", "Phu (about 4,080 m) and Nar (about 4,110 m)"],
                ["Difficulty", "Challenging — a 5,320 m pass, long remote stages, basic lodges"],
                ["Permit", "Restricted-area permit, USD 100 per week Sep–Nov, USD 75 Dec–Aug, plus ACAP"],
                ["Minimum group", "Two trekkers with a registered agency and licensed guide"],
                ["Best seasons", "March to May, September to November"],
                ["Accommodation", "Basic lodges and homestays, some camping on variants"],
              ],
            },
          },
          { p: "We run it as a [[trek:nar-phu-valley-trek|14-day Nar Phu Valley Trek]], usually combined with Manang and sometimes with Thorong La to complete the Annapurna Circuit." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Besisahar to Koto (760 m to 2,600 m)" },
          { p: "The standard Annapurna Circuit approach up the Marsyangdi — Jagat, Dharapani, and Chame — as far as Koto, where the Nar Phu valley joins from the north and the restricted-area checkpoint sits." },
          { h3: "Koto to Phu (2,600 m to 4,080 m)" },
          { p: "The best walking on the trek. The trail enters a narrow gorge on the Phu Khola, crossing and recrossing the river on bridges wedged between rock walls, past Dharmasala and Kyang, through a genuine slot canyon section where the sky narrows to a strip. Then it opens abruptly and <strong>Phu</strong> appears on a bluff — a fortified village of stacked stone houses with three gompas and yak pastures beyond, at the foot of glaciers running down from the Tibetan border." },
          { p: "Spend a day here. The Tashi Lhakhang Gompa above the village is one of the oldest in the region, and the walk up the valley toward the Himlung Himal base camp is superb." },
          { h3: "Phu to Nar (4,080 m to 4,110 m)" },
          { p: "Back down the valley and up a side branch to <strong>Nar</strong>, the larger of the two villages — four gompas, a chorten row on the approach that is among the most photographed in Nepal, and a working agricultural community at 4,110 m." },
          { h3: "Nar to Manang over the Kang La (5,320 m)" },
          { p: "The crux. A long pass day with around 1,200 m of ascent to the <strong>Kang La at 5,320 m</strong>, then a steep descent to Ngawal on the Annapurna Circuit high route. The view from the pass takes in the whole Annapurna range from the north — Annapurna II, III, IV, Gangapurna, Tilicho Peak — which is an angle almost no trekkers ever see." },
          { p: "From Ngawal you are back on the circuit. Many itineraries then continue to Manang and over Thorong La; ours can do either." },
        ],
      },
      {
        h2: "Permits and the Group Rule",
        blocks: [
          { p: "Nar Phu is a restricted area, which has three practical consequences:" },
          {
            ol: [
              "<strong>You cannot trek it independently.</strong> A licensed guide and a registered agency are conditions of the permit itself.",
              "<strong>Minimum two trekkers.</strong> A solo traveller cannot be issued a permit alone, though we can often pair you with another booking — ask early.",
              "<strong>The permit is time-limited and priced by the week.</strong> USD 100 per week from September to November, USD 75 from December to August, plus the ACAP at NPR 3,000. Extra days cost more, so the itinerary length is set when the permit is issued.",
            ],
          },
          { p: "Permits are processed through the Department of Immigration in Kathmandu on a working day and need your original passport, so plan at least one full day in the city before departure. Our [[post:restricted-area-trekking-permits-in-nepal|restricted-area permits guide]] covers the whole system." },
        ],
      },
      {
        h2: "Difficulty and Conditions",
        blocks: [
          {
            ul: [
              "<strong>The Kang La at 5,320 m</strong> is a genuine high pass — long, cold, and with around 1,200 m of ascent followed by a steep descent. Nights at Nar at 4,110 m acclimatise you for it, which is why the pass comes at the end.",
              "<strong>Lodges are basic.</strong> Simple lodges and homestays in Phu and Nar, and a teahouse at Kyang and Dharmasala on the way in. Expect shared rooms, outside toilets, and no showers at altitude.",
              "<strong>Stages are long and remote.</strong> The gorge day to Phu is seven to eight hours, and there is nothing in between.",
              "<strong>Cold.</strong> Nights at Phu and Nar run to -10 to -15 °C in the main seasons. A -20 °C bag is right.",
              "<strong>Partial rain shadow.</strong> Nar Phu sits behind the Annapurnas and stays relatively dry, which makes it one of the better monsoon-season options — though the approach up the Marsyangdi is wet.",
              "<strong>Insurance</strong> to 6,000 m with helicopter evacuation. This is remote country.",
            ],
          },
        ],
      },
      {
        h2: "Why Go Here Rather Than Upper Mustang",
        blocks: [
          { p: "Both are restricted Tibetan-Buddhist regions behind the main Himalayan chain. The differences:" },
          {
            table: {
              head: ["", "Nar Phu", "[[trek:upper-mustang-trek|Upper Mustang]]"],
              rows: [
                ["Permit cost", "USD 100 per week", "USD 500 for ten days"],
                ["Days", "14", "16"],
                ["Highest point", "Kang La, 5,320 m", "About 3,860 m"],
                ["Difficulty", "Challenging — a high pass", "Moderate — long days, no pass"],
                ["Landscape", "Glacial side valley, slot canyon, yak pasture", "Ochre desert, eroded cliffs, walled towns"],
                ["Culture", "Two isolated villages, four gompas at Nar", "Lo Manthang, the former capital, monasteries and cave complexes"],
                ["Accessibility", "On foot from the Annapurna Circuit", "Flight to Jomsom, or road"],
              ],
            },
          },
          { p: "Nar Phu is the better choice if you want a high pass and a fraction of the permit cost; Upper Mustang if you want the cultural depth of a former kingdom and lower altitude. Both are genuinely remote in a way the Annapurna Circuit no longer is." },
        ],
      },
    ],
    faqs: [
      { question: "Do I need a special permit for Nar Phu?", answer: "Yes — it is a restricted area, requiring a restricted-area permit at USD 100 per week from September to November or USD 75 from December to August, plus the Annapurna Conservation Area Permit. The permit is only issued to two or more trekkers travelling with a registered agency and a licensed guide." },
      { question: "Can I trek Nar Phu solo?", answer: "Not on your own permit — the minimum group size for a restricted-area permit is two trekkers. We can often pair a solo trekker with another booking on the same dates, so ask early rather than assuming it is impossible." },
      { question: "How hard is the Kang La?", answer: "It is a serious high pass — around 1,200 m of ascent to 5,320 m, then a steep descent to Ngawal. No technical ground, but long, cold and high. The nights at Phu and Nar at around 4,100 m acclimatise you for it, which is why the pass sits at the end of the route." },
      { question: "What is special about Nar and Phu?", answer: "They were closed to outsiders until 2002 and still see very few trekkers, so the Tibetan-Buddhist culture is largely undisturbed — flat-roofed stone houses, ancient gompas including Tashi Lhakhang above Phu, yak herding, and a Tibetan dialect rather than Nepali. The approach through the Phu Khola slot canyon is the best walking on the trek." },
      { question: "Can I combine Nar Phu with the Annapurna Circuit?", answer: "Yes, and it is the natural combination. The route joins the circuit at Koto on the way in and rejoins it at Ngawal after the Kang La, from where you can continue to Manang and over Thorong La. Tell us at the enquiry stage so the permit dates cover the full itinerary." },
      { question: "Is Nar Phu good in the monsoon?", answer: "Better than most of Nepal, because the valley sits partly behind the Annapurnas in the rain shadow. The approach up the Marsyangdi is wet, though, and the Kang La is riskier in summer, so it is not in the same category as Upper Mustang or Dolpo as a monsoon route." },
      { question: "What are the lodges like?", answer: "Basic — simple lodges and homestays in Phu and Nar, with shared rooms, outside toilets and no showers, plus teahouses at Kyang and Dharmasala on the way in. That is part of what keeps the valley quiet. Bring a sleeping bag rated to -20 °C." },
    ],
    relatedTreks: [
      "nar-phu-valley-trek",
      "annapurna-circuit-trek",
      "upper-mustang-trek",
      "tilicho-lake-trek",
    ],
    tripsNote: "Nar Phu on its own or linked to the Annapurna Circuit, plus the other restricted valleys nearby.",
    relatedPosts: [
      "restricted-area-trekking-permits-in-nepal",
      "annapurna-circuit-trek-complete-guide",
      "upper-mustang-trek-complete-guide",
      "off-the-beaten-path-treks-in-nepal",
    ],
    tags: ["nar phu", "restricted area", "annapurna region", "kang la"],
    meta: {
      title: "Nar Phu Valley Trek: Two Medieval Villages Behind the Annapurnas",
      description: "The Nar Phu Valley trek — a restricted valley north of Manang, the Phu Khola slot canyon, two isolated Tibetan-Buddhist villages, and the 5,320 m Kang La.",
      keywords: "Nar Phu Valley trek, Kang La pass, restricted area Nepal trek, Phu village, Nar village Manang",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
    title: "Mardi Himal vs Poon Hill vs Annapurna Base Camp: Which to Choose",
    cluster: "annapurna",
    date: "2026-06-16",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-02-sunrise-from-mardi",
      alt: "Sunrise from the Mardi Himal ridge, Annapurna region, Nepal.",
    },
    excerpt:
      "The three treks most visitors to Pokhara choose between, compared on days, altitude, difficulty, crowds, cost and what you actually see — with a clear recommendation for each kind of traveller.",
    intro: [
      { p: "If you land in Pokhara with somewhere between three days and two weeks, these three treks are almost certainly your shortlist. They start from the same city, use the same permits, and cost within a few hundred dollars of each other — and they are genuinely different experiences." },
      { p: "Short version: Poon Hill if you have three or four days, Mardi Himal if you have five to nine and want a ridge, Annapurna Base Camp if you want to stand inside a ring of 7,000 and 8,000 m peaks." },
    ],
    sections: [
      {
        h2: "Side by Side",
        blocks: [
          {
            table: {
              head: ["", "Poon Hill", "Mardi Himal", "Annapurna Base Camp"],
              rows: [
                ["Days from Pokhara", "3", "5", "5"],
                ["Days from Kathmandu", "7", "9", "9"],
                ["Highest point", "3,210 m", "Up to 4,500 m (sleep 3,580 m)", "4,130 m"],
                ["Difficulty", "Easy to moderate", "Moderate", "Moderate"],
                ["Hardest part", "The Ulleri staircase", "1,800 m forest climb, exposed ridge", "Stone staircases, long descent"],
                ["Crowds", "Highest in Nepal for a short trek", "Moderate and rising", "High but spread out"],
                ["Altitude risk", "Minimal", "Low", "Low"],
                ["The view", "Dawn panorama of Dhaulagiri and Annapurna", "Machhapuchhre almost overhead from a ridge", "A 360° amphitheatre of peaks"],
                ["Lodges", "Excellent, with bakeries", "Simple, basic at High Camp", "Good low down, basic at Base Camp"],
                ["Works in winter", "Yes, very well", "Yes, below High Camp", "With avalanche caution"],
                ["Cost", "Lowest", "Low", "Moderate"],
              ],
            },
          },
        ],
      },
      {
        h2: "What Each One Is Actually Like",
        blocks: [
          { h3: "Poon Hill" },
          { p: "Two days up through rhododendron forest to a lodge village at 2,885 m, a 4.30 a.m. climb to a 3,210 m hill, and a sunrise over Dhaulagiri and Annapurna South that is genuinely one of the best in Nepal. Then down through Gurung villages. Comfortable lodges, hot showers, bakeries, and several hundred other people on the summit platform in October." },
          { h3: "Mardi Himal" },
          { p: "A sustained climb through moss-hung cloud forest, then a breakout above the treeline onto an open ridge that you follow north for two days with <strong>Machhapuchhre rising almost vertically ahead</strong>. High Camp at 3,580 m is cold and basic; the dawn walk to the upper viewpoint at up to 4,500 m is the best single morning of the three. Quieter than the others, and getting less so." },
          { h3: "Annapurna Base Camp" },
          { p: "Four days up a deepening gorge where you see almost no mountains, then the valley opens into the <strong>Annapurna Sanctuary</strong> — a glacial amphitheatre ringed by Annapurna I, Annapurna South, Hiunchuli, Gangapurna and Machhapuchhre, all of them apparently overhead. The most dramatic arrival of the three, and the hot springs at Jhinu Danda on the way out." },
        ],
      },
      {
        h2: "Choose By What Matters to You",
        blocks: [
          {
            table: {
              head: ["If your priority is…", "Choose", "Why"],
              rows: [
                ["Three or four days only", "[[trek:poonhill-trek-from-pokhara|Poon Hill from Pokhara]]", "The only one that fits, and it still delivers two eight-thousanders at dawn"],
                ["A first trek with a family", "[[trek:poonhill-trek|Poon Hill]]", "Short days, good lodges, no altitude risk"],
                ["A ridge walk and close mountains", "[[trek:mardi-himal-trek-from-pokhara|Mardi Himal]]", "Machhapuchhre overhead and two days above the treeline"],
                ["Avoiding crowds", "[[trek:mardi-himal-trek|Mardi Himal]], or better [[trek:khopra-danda-trek|Khopra Danda]]", "A fraction of the Ghorepani traffic"],
                ["The most dramatic scenery", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "The Sanctuary is unlike anywhere else in Nepal"],
                ["Going as high as possible", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]] at 4,130 m", "Or Mardi's 4,500 m day walk without sleeping that high"],
                ["Trekking in winter", "[[trek:poonhill-trek|Poon Hill]] or [[trek:mohare-danda-trek|Mohare Danda]]", "Low enough to be comfortable with the clearest air of the year"],
                ["Community-owned lodges", "[[trek:mohare-danda-trek|Mohare Danda]] or [[trek:khopra-danda-trek|Khopra Danda]]", "Profits go to village school and health funds"],
              ],
            },
          },
        ],
      },
      {
        h2: "Or Combine Them",
        blocks: [
          { p: "All three share trailheads, so combinations are easy and usually better value per day than any single trek." },
          {
            ul: [
              "<strong>[[trek:annapurna-base-camp-trek-with-ghorepani-poonhill-trek|ABC with Ghorepani and Poon Hill]]</strong>, 12 days — the Sanctuary plus the sunrise viewpoint. Our most-booked Annapurna combination.",
              "<strong>[[trek:annapurna-base-camp-with-ghorepani-poonhill-from-pokhara|ABC with Poon Hill from Pokhara]]</strong>, 8 days — the same pairing without Kathmandu days.",
              "<strong>[[trek:mardi-himal-trek-with-annapurna-base-camp|Mardi Himal with ABC]]</strong>, 14 days — two base camps, a high ridge, and the hot springs between them. The best fortnight in the region.",
              "<strong>[[trek:annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara|Mardi plus ABC from Pokhara]]</strong>, 10 days — the same double route, Pokhara to Pokhara.",
            ],
          },
          { p: "A practical note on fitting any of them around the rest of a trip. All three start within two hours of Pokhara, so a trek can sit between a Chitwan safari and a few days in Kathmandu without awkward transfers. Poon Hill leaves room for both in a two-week holiday; Annapurna Base Camp from Pokhara leaves room for one; the fourteen-day Mardi and Sanctuary combination is the holiday." },
          { p: "And one honest note: if you have ten days and want the Annapurna skyline with genuine solitude, none of these three is the best answer. [[trek:khopra-danda-trek|Khopra Danda]] and [[trek:mohare-danda-trek|Mohare Danda]] are, and our [[post:khopra-danda-trek-guide|Khopra guide]] explains why." },
        ],
      },
    ],
    faqs: [
      { question: "Which is the easiest of the three?", answer: "Poon Hill, clearly — three days from Pokhara, a maximum of 3,210 m, short stages and comfortable lodges. The Ulleri staircase on the first afternoon is the only hard section. Mardi Himal and Annapurna Base Camp are both graded moderate and involve substantially more climbing." },
      { question: "Which has the best views?", answer: "Different kinds. Poon Hill gives the widest dawn panorama including two eight-thousanders. Mardi Himal puts Machhapuchhre almost directly overhead from an open ridge. Annapurna Base Camp puts you inside a complete ring of peaks. If forced to pick one morning, the Mardi Himal upper viewpoint." },
      { question: "Which is quietest?", answer: "Mardi Himal, of the three, though it is growing fast. Poon Hill is the busiest short trail in Nepal and Annapurna Base Camp is busy but spread over more lodges. For genuine quiet in the same region, Khopra Danda or Mohare Danda are the better answers." },
      { question: "Can I do Poon Hill and Annapurna Base Camp together?", answer: "Yes, and it is our most-booked Annapurna combination — twelve days from Kathmandu or eight from Pokhara. The two trails share the lower approach, so adding Poon Hill to the Sanctuary costs only three days and gives you the dawn viewpoint as well." },
      { question: "Which is best for a first trek in Nepal?", answer: "Poon Hill if you have under a week or are travelling with children. Mardi Himal if you have five to nine days and reasonable walking fitness — it is the best short trek in the country. Annapurna Base Camp if the Sanctuary is what drew you to Nepal in the first place." },
      { question: "Which is cheapest?", answer: "Poon Hill from Pokhara is the least expensive trek we run, at three days. Mardi Himal from Pokhara is next, then Annapurna Base Camp. All three use the same permits and none requires a flight, which is why they are the best value trekking in Nepal." },
      { question: "Which works best in winter?", answer: "Poon Hill, comfortably, and Mardi Himal below High Camp with warm kit. Annapurna Base Camp is possible in winter but needs avalanche caution in the Sanctuary gorge after snowfall. Mohare Danda is the other strong winter choice in the same hills." },
    ],
    relatedTreks: [
      "poonhill-trek-from-pokhara",
      "mardi-himal-trek-from-pokhara",
      "annapurna-base-camp-trek-from-pokhara",
      "annapurna-base-camp-trek-with-ghorepani-poonhill-trek",
      "mardi-himal-trek-with-annapurna-base-camp",
    ],
    tripsNote: "The three treks compared above, plus the combinations that pair them.",
    relatedPosts: [
      "mardi-himal-trek-complete-guide",
      "poon-hill-trek-guide",
      "annapurna-base-camp-trek-complete-guide",
      "short-treks-from-pokhara",
    ],
    tags: ["trek comparison", "annapurna region", "mardi himal", "poon hill", "annapurna base camp"],
    meta: {
      title: "Mardi Himal vs Poon Hill vs Annapurna Base Camp: Which to Choose",
      description: "The three most popular Annapurna treks compared on days, altitude, difficulty, crowds, cost and scenery — with a clear recommendation for each kind of traveller.",
      keywords: "Mardi Himal vs Poon Hill, Annapurna Base Camp vs Mardi Himal, which Annapurna trek, best short trek Pokhara",
    },
  },
];
