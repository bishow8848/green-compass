import type { BlogContent } from "./build";

export const climbingD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "eight-thousand-metre-peaks-in-nepal",
    title: "The Eight-Thousanders of Nepal: All Eight Explained",
    cluster: "climbing",
    date: "2026-11-17",
    hero: {
      image: "mardi-treks/everest-expedition/everest-expedition-02-everest-lhotse-nuptse-and-khumbu-glacier",
      alt: "Everest, Lhotse and Nuptse above the Khumbu glacier, Nepal.",
    },
    excerpt:
      "Eight of the world's fourteen 8,000 m peaks are in Nepal. What each one is, how hard it is, what it costs to climb, its history and its reputation — plus how to see them without climbing anything.",
    intro: [
      { p: "There are fourteen mountains on earth above 8,000 m. Eight of them are in Nepal or on its borders: <strong>Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu and Annapurna I</strong>. Between them they account for most of the history of high-altitude mountaineering and a substantial share of its deaths." },
      { p: "This guide covers all eight — where each one is, how it is climbed, what it costs, and what its reputation is among climbers — and then the far more accessible question of how to see them on foot." },
    ],
    sections: [
      {
        h2: "All Eight",
        blocks: [
          {
            table: {
              head: ["Peak", "Altitude", "Rank", "Region", "Reputation"],
              rows: [
                ["Everest (Sagarmatha)", "8,848.86 m", "1st", "Khumbu", "The highest. Commercially climbed, heavily fixed, crowded in spring."],
                ["Kangchenjunga", "8,586 m", "3rd", "Far east, Taplejung", "Remote, long, and considerably harder than its rank suggests"],
                ["Lhotse", "8,516 m", "4th", "Khumbu", "Shares Everest's route to the South Col, then a steep couloir"],
                ["Makalu", "8,485 m", "5th", "Barun valley", "Technically demanding, exposed, and much less climbed"],
                ["Cho Oyu", "8,188 m", "6th", "Khumbu, Tibet border", "The most accessible eight-thousander, usually climbed from Tibet"],
                ["Dhaulagiri I", "8,167 m", "7th", "Dhaulagiri Himal", "Serious avalanche exposure, a formidable reputation"],
                ["Manaslu", "8,163 m", "8th", "Gorkha", "The usual first eight-thousander, autumn season"],
                ["Annapurna I", "8,091 m", "10th", "Annapurna Himal", "The most dangerous. Historically the highest fatality rate of the fourteen."],
              ],
            },
          },
          { p: "Annapurna I deserves the emphasis. It was the first eight-thousander ever climbed, by Herzog and Lachenal in 1950, and it has historically carried the highest ratio of deaths to summits of any of the fourteen, because of persistent serac and avalanche danger on its routes." },
        ],
      },
      {
        h2: "The Ones We Run",
        blocks: [
          {
            table: {
              head: ["Expedition", "Days", "Season", "Note"],
              rows: [
                ["[[trek:everest-expedition|Everest]]", "50", "Spring", "South Col route from the Nepal side"],
                ["[[trek:everest-and-lhotse-expedition|Everest and Lhotse]]", "—", "Spring", "Two eight-thousanders from the same base camp and route"],
                ["[[trek:lhotse-expedition|Lhotse]]", "50", "Spring", "The Everest route to Camp 4, then the Lhotse couloir"],
                ["[[trek:makalu-expedition|Makalu]]", "51", "Spring", "Remote, technical, and rarely crowded"],
                ["[[trek:manaslu-expedition|Manaslu]]", "47", "Autumn", "The standard first eight-thousander"],
                ["[[trek:annapurna-expedition|Annapurna I]]", "44", "Spring", "For very experienced climbers only"],
              ],
            },
          },
          { p: "Cho Oyu is normally climbed from the Tibetan side, and Kangchenjunga and Dhaulagiri are run on request. Our [[post:everest-expedition-guide|Everest guide]] and [[post:manaslu-expedition-guide|Manaslu guide]] cover the two most commonly attempted in detail." },
        ],
      },
      {
        h2: "What an Eight-Thousander Costs",
        blocks: [
          { p: "The permit is a fraction of the total, and it is the visible fraction." },
          {
            table: {
              head: ["Line", "Everest", "Other 8,000 m peaks"],
              rows: [
                ["Permit royalty (spring)", "USD 15,000", "About USD 1,800"],
                ["Garbage and liaison deposits", "USD 3,000–4,000", "USD 3,000–4,000"],
                ["Full expedition package", "Typically USD 45,000–120,000", "Typically USD 15,000–40,000"],
                ["Duration", "About 50 days", "About 40–50 days"],
                ["Oxygen and Sherpa support", "Included in most packages", "Varies by peak and style"],
              ],
              note: "Indicative ranges. Everest's spring royalty rose from USD 11,000 to USD 15,000 with effect from September 2025.",
            },
          },
          { p: "The wide range on the package line is real and it reflects genuine differences: the number of Sherpa staff per client, how much oxygen is carried, the quality of base camp infrastructure, and whether the operator maintains its own fixing team and medical support. Our [[post:nma-peak-permits-and-fees|permits guide]] breaks down the fee structure." },
        ],
      },
      {
        h2: "Seeing Them Without Climbing",
        blocks: [
          { p: "For almost everyone, the useful question is how to look at these mountains rather than climb them." },
          {
            table: {
              head: ["Peak", "Best trek to see it", "Where from"],
              rows: [
                ["Everest", "[[trek:everest-base-camp-trek|Everest Base Camp]]", "Kala Patthar, 5,545 m"],
                ["Lhotse", "[[trek:island-peak-climbing|Island Peak]]", "The south face from the summit, and from Chhukung"],
                ["Makalu", "[[trek:makalu-base-camp-trek|Makalu Base Camp]]", "The Barun valley, from below the south-west face"],
                ["Kangchenjunga", "[[trek:kanchenjunga-north-base-camp-trek|Kanchenjunga North Base Camp]]", "Pangpema, beneath the north face"],
                ["Manaslu", "[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "Samagaun and Manaslu Base Camp"],
                ["Annapurna I", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "The head of the Sanctuary, 4,130 m"],
                ["Dhaulagiri I", "[[trek:khopra-danda-trek|Khopra Danda]] or [[trek:poonhill-trek|Poon Hill]]", "Across the Kali Gandaki gorge"],
                ["Five at once", "[[trek:mera-peak-climbing|Mera Peak]] or [[trek:pikey-peak-trek|Pikey Peak]]", "Everest, Lhotse, Makalu, Cho Oyu, Kangchenjunga"],
              ],
            },
          },
          { p: "The best single viewpoint for the greatest number is <strong>Mera Peak's summit at 6,476 m</strong>, which takes in five eight-thousanders. For the same range without climbing, <strong>Pikey Peak at 4,065 m</strong> gives Everest, Makalu and Kangchenjunga on an eight-day trek with no flight — see our [[post:pikey-peak-trek-guide|Pikey Peak guide]]." },
        ],
      },
      {
        h2: "A Note on the Commercial Era",
        blocks: [
          { p: "Since the 1990s, most eight-thousander ascents have been made with commercial support: fixed rope from base to summit, supplementary oxygen, and Sherpa climbers carrying loads and breaking trail. That has made the summits reachable by people who could not have climbed them independently, and it has changed what an ascent means." },
          {
            ul: [
              "<strong>Sherpa climbers do the hardest work</strong> on almost every commercial expedition — fixing rope, carrying oxygen, and taking the greatest cumulative risk. Their pay, insurance and equipment are the clearest single measure of an operator's ethics.",
              "<strong>Crowding is real</strong> on Everest in spring, with queues on the Hillary Step and at the Icefall in narrow weather windows.",
              "<strong>Nepal has responded</strong> with rules including, from 2025, a requirement that Everest applicants show a previous ascent above 7,000 m.",
              "<strong>Waste and human remains</strong> on the high mountains are a continuing problem, addressed partly by the garbage deposit system and by clean-up expeditions.",
              "<strong>Climbing style matters.</strong> An oxygen-free ascent, an alpine-style attempt or a new route is a different achievement from a fixed-line summit, and the mountaineering world distinguishes clearly between them.",
            ],
          },
          { p: "If you are considering an eight-thousander, the questions worth asking an operator are about staff ratios, Sherpa pay and insurance, oxygen supply, and the medical and rescue plan — not the summit success rate." },
        ],
      },
    ],
    faqs: [
      { question: "How many eight-thousanders are in Nepal?", answer: "Eight of the world's fourteen — Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri I, Manaslu and Annapurna I. Several sit on the border with Tibet or India, and Cho Oyu is more usually climbed from the Tibetan side." },
      { question: "Which is the most dangerous eight-thousander?", answer: "Annapurna I, which has historically carried the highest ratio of deaths to summits of the fourteen because of persistent serac and avalanche danger on its routes. It was also the first eight-thousander ever climbed, by Herzog and Lachenal in 1950." },
      { question: "Which is the easiest eight-thousander to climb?", answer: "Cho Oyu is generally considered the most accessible, though it is usually climbed from Tibet. Of those climbed from Nepal, Manaslu is the standard first eight-thousander — an autumn objective with a comparatively straightforward route, which is why so many climbers use it as a step toward Everest." },
      { question: "How much does it cost to climb Everest?", answer: "The permit alone is USD 15,000 per person for the south side in spring, raised from USD 11,000 in September 2025. A full expedition package typically runs from USD 45,000 to over USD 120,000 depending on staff ratios, oxygen, and base camp support, over about fifty days." },
      { question: "What is the best trek to see an eight-thousander?", answer: "Everest Base Camp with Kala Patthar for Everest, Annapurna Base Camp for Annapurna I, and the Manaslu Circuit for Manaslu. For the widest sweep, Pikey Peak at 4,065 m shows Everest, Makalu and Kangchenjunga on an eight-day trek with no mountain flight." },
      { question: "Do climbers use supplementary oxygen?", answer: "On almost all commercial ascents of the highest peaks, yes, typically from around 7,000 m upward, together with fixed rope from base camp to summit. Oxygen-free ascents are a separate and considerably more serious undertaking, and the mountaineering world distinguishes clearly between the two." },
      { question: "What has Nepal done about crowding on Everest?", answer: "Several measures, the most significant being a requirement introduced in 2025 that applicants demonstrate a previous ascent above 7,000 m before an Everest permit is issued. Garbage deposits, waste removal rules and clean-up expeditions address the environmental side." },
      { question: "How should I choose an expedition operator?", answer: "Ask about Sherpa staff ratios, pay, insurance and equipment; oxygen supply per climber; the medical and rescue plan; and who fixes the route. Summit success rates are the least useful metric, because they depend heavily on the weather in any given season." },
    ],
    relatedTreks: [
      "everest-expedition",
      "manaslu-expedition",
      "lhotse-expedition",
      "makalu-expedition",
      "annapurna-expedition",
    ],
    tripsNote: "The eight-thousanders we run expeditions on, all with full Sherpa support and oxygen.",
    relatedPosts: [
      "everest-expedition-guide",
      "manaslu-expedition-guide",
      "nma-peak-permits-and-fees",
      "ama-dablam-expedition-guide",
    ],
    tags: ["eight thousanders", "8000m peaks", "expedition", "everest", "mountaineering"],
    meta: {
      title: "The Eight-Thousanders of Nepal: All Eight Explained",
      description: "Nepal's eight 8,000 m peaks — Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu and Annapurna I — with costs, reputations.",
      keywords: "eight thousanders Nepal, 8000m peaks, Everest Lhotse Makalu, Annapurna dangerous, Manaslu first 8000er",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-expedition-guide",
    title: "Everest Expedition Guide: What Climbing the South Col Route Involves",
    cluster: "climbing",
    date: "2026-11-20",
    hero: {
      image: "mardi-treks/everest-expedition/everest-expedition-00-climbers-crossing-ladders-in-the-khumbu-icefall",
      alt: "Climbers crossing ladders in the Khumbu Icefall, Everest, Nepal.",
    },
    excerpt:
      "Fifty days, the Khumbu Icefall, the Western Cwm, the Lhotse Face and the South Col — how a commercial Everest expedition actually works, what it costs, what the new experience rule means, and the questions to ask an operator.",
    intro: [
      { p: "An Everest expedition from Nepal takes around fifty days and follows the <strong>South Col route</strong> that Hillary and Tenzing pioneered in 1953 — through the Khumbu Icefall into the Western Cwm, up the Lhotse Face to the South Col at 7,950 m, and along the south-east ridge to the summit at 8,848.86 m." },
      { p: "It is the most written-about climb in the world and the most misunderstood. This is what it actually involves, without either the romance or the cynicism." },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "8,848.86 m"],
                ["Duration", "About 50 days from Kathmandu"],
                ["Route", "South Col, from Nepal"],
                ["Camps", "Base camp 5,364 m, C1 6,065 m, C2 6,400 m, C3 7,200 m, C4 South Col 7,950 m"],
                ["Season", "Spring — summit windows typically in the second half of May"],
                ["Permit", "USD 15,000 spring royalty per person, from September 2025"],
                ["Prerequisite", "Evidence of a previous ascent above 7,000 m, required since 2025"],
                ["Oxygen", "Standard from around 7,000 m on commercial ascents"],
              ],
            },
          },
          { p: "We run it as [[trek:everest-expedition|a 50-day Everest expedition]], and as [[trek:everest-and-lhotse-expedition|a combined Everest and Lhotse expedition]], which uses the same route and base camp to attempt two eight-thousanders in one season." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Base Camp (5,364 m)" },
          { p: "A tent city on the Khumbu glacier below the Icefall, occupied from early April to late May. Expeditions live here for weeks, with dining tents, communications, medical support and a cook team, running rotations up the mountain between rest periods." },
          { h3: "The Khumbu Icefall" },
          { p: "The most dangerous section of the route and the one crossed most often — a moving jumble of seracs and crevasses between base camp and Camp 1, fixed each season with ladders and rope by the <strong>Icefall doctors</strong>, a Sherpa team employed by the Sagarmatha Pollution Control Committee. It is crossed in the cold of early morning when the ice is most stable, and a climber may pass through it six or eight times across the expedition." },
          { h3: "The Western Cwm and Camp 2 (6,400 m)" },
          { p: "Above the Icefall the valley opens into the <strong>Western Cwm</strong> — a broad, crevassed glacial basin between Everest, Nuptse and Lhotse, and famously hot in the middle of the day because the walls reflect the sun. Camp 2 at 6,400 m is the advanced base camp where most of the expedition's time above the Icefall is spent." },
          { h3: "The Lhotse Face and Camp 3 (7,200 m)" },
          { p: "A 1,000 m wall of blue ice at 40 to 50 degrees, climbed on fixed rope. Camp 3 is cut into ledges on the face itself, and it is where most climbers first use oxygen to sleep." },
          { h3: "The South Col (7,950 m)" },
          { p: "Above Camp 3 the route crosses the <strong>Yellow Band</strong> and the <strong>Geneva Spur</strong> to the South Col — a windswept plateau of rock and ice between Everest and Lhotse, and the launch point for the summit. Nobody spends longer there than necessary." },
          { h3: "Summit day" },
          { p: "A departure around 10 p.m. or midnight, climbing through the night up the south-east ridge past the <strong>Balcony (8,400 m)</strong>, along the corniced ridge to the <strong>South Summit (8,750 m)</strong>, across the <strong>Hillary Step</strong>, and onto the summit at first light or shortly after. Then down — and the descent, on tired legs with oxygen running low, is where most Everest deaths occur." },
        ],
      },
      {
        h2: "How the Season Works",
        blocks: [
          {
            ol: [
              "<strong>Early April:</strong> teams walk in from Lukla and establish base camp. A puja ceremony is held before anyone enters the Icefall.",
              "<strong>April:</strong> the Icefall doctors complete the route, and teams run acclimatisation rotations — base camp to Camp 1, then Camp 2, then a touch of Camp 3 — returning to base camp between each.",
              "<strong>Late April to early May:</strong> Sherpa teams fix rope to the summit and stock the high camps with oxygen.",
              "<strong>Early May:</strong> most teams descend to Namche or lower for a rest week, to recover before the summit push.",
              "<strong>Mid to late May:</strong> the jet stream lifts off the summit for a few days at a time, opening <strong>summit windows</strong>. Teams move up over three or four days and push for the top.",
              "<strong>Late May:</strong> the mountain empties before the monsoon arrives.",
            ],
          },
          { p: "Everything hinges on those windows. When only one or two open in a season, several hundred climbers move at once, which is where the queue photographs come from. A good operator plans its push to avoid the busiest day rather than the earliest one." },
        ],
      },
      {
        h2: "Cost, and What Separates Operators",
        blocks: [
          {
            table: {
              head: ["Line", "Typical figure"],
              rows: [
                ["Permit royalty", "USD 15,000 per person, spring, south side"],
                ["Garbage and liaison deposits", "USD 3,000–4,000 per expedition"],
                ["Full package", "USD 45,000–120,000 depending on service level"],
                ["Oxygen", "5–8 bottles per climber on a standard ascent"],
                ["Personal Sherpa", "One-to-one on most commercial packages"],
                ["Duration", "About 50 days"],
              ],
            },
          },
          { p: "The spread in package price is not marketing. What it buys:" },
          {
            ul: [
              "<strong>Sherpa ratio.</strong> One-to-one is standard on a well-run expedition. Two clients per Sherpa on summit day is a materially different risk.",
              "<strong>Oxygen supply.</strong> More bottles and a higher flow rate on summit day is expensive and it is what gets tired climbers down.",
              "<strong>Staff pay, insurance and equipment.</strong> The clearest ethical measure of an operator, and invisible in a brochure.",
              "<strong>Medical support.</strong> A doctor at base camp, a hyperbaric chamber, and a clear evacuation plan.",
              "<strong>Weather forecasting.</strong> Dedicated high-altitude forecasting is what allows an operator to choose a quieter window.",
              "<strong>Base camp infrastructure.</strong> Heated dining tents, individual sleeping tents, communications and food quality all affect how you arrive at the summit push.",
            ],
          },
        ],
      },
      {
        h2: "The Experience Requirement, and Whether You Are Ready",
        blocks: [
          { p: "Since 2025, Nepal has required Everest applicants to show evidence of a <strong>previous ascent above 7,000 m</strong>. That is a floor rather than a recommendation. The realistic preparation is a progression:" },
          {
            ol: [
              "<strong>A high trek</strong> — [[trek:everest-base-camp-trek|Everest Base Camp]] or equivalent, to establish how you handle altitude.",
              "<strong>A trekking peak</strong> — [[trek:island-peak-climbing|Island Peak]] and [[trek:lobuche-east-peak-climbing|Lobuche East]] for rope and crampon competence.",
              "<strong>A technical 6,800 m peak</strong> — [[trek:ama-dablam-expedition|Ama Dablam]], which is the standard technical benchmark.",
              "<strong>A 7,000 m peak</strong> — [[trek:baruntse-expedition|Baruntse]] or [[trek:pumori-expedition|Pumori]], which satisfies the requirement and tests you at genuine altitude.",
              "<strong>An eight-thousander</strong> — [[trek:manaslu-expedition|Manaslu]] in autumn is the standard step, and the one most Everest climbers take.",
            ],
          },
          { p: "That progression takes several years and several seasons, and skipping it is why the mountain has the reputation it does. Our [[post:manaslu-expedition-guide|Manaslu guide]] covers the usual penultimate step, and [[post:eight-thousand-metre-peaks-in-nepal|the eight-thousanders guide]] the wider picture." },
        ],
      },
    ],
    faqs: [
      { question: "How long does an Everest expedition take?", answer: "About fifty days from Kathmandu — a walk in to base camp, several weeks of acclimatisation rotations, a rest period lower down, and then a summit push timed to a weather window, which typically opens in the second half of May." },
      { question: "How much does it cost to climb Everest?", answer: "The permit is USD 15,000 per person for the south side in spring, raised from USD 11,000 in September 2025, plus garbage and liaison deposits. A full expedition package typically runs from USD 45,000 to over USD 120,000, and the spread reflects genuine differences in Sherpa ratios, oxygen and support." },
      { question: "What experience do I need to climb Everest?", answer: "Since 2025, Nepal requires evidence of a previous ascent above 7,000 m. Realistically the preparation is a progression over several seasons — a high trek, trekking peaks such as Island and Lobuche East, a technical peak like Ama Dablam, a 7,000 m peak, and usually Manaslu before Everest." },
      { question: "What is the most dangerous part of the route?", answer: "The Khumbu Icefall, because of moving seracs and crevasses, and because climbers pass through it six or eight times across an expedition. Statistically, though, most deaths occur on the descent from the summit, on tired legs with oxygen running low." },
      { question: "Why are there queues on Everest?", answer: "Because summit windows are few and short. When the jet stream lifts off the summit for only a couple of days in a season, several hundred climbers move at once. A well-run operator uses dedicated forecasting to pick a quieter window rather than the earliest one." },
      { question: "Do all climbers use oxygen?", answer: "On commercial ascents, effectively yes — typically from around 7,000 m upward, with five to eight bottles per climber. Oxygen-free ascents are a separate and far more serious undertaking attempted by a small number of elite climbers." },
      { question: "Who fixes the route through the Icefall?", answer: "The Icefall doctors, a Sherpa team employed by the Sagarmatha Pollution Control Committee, who establish and maintain the ladder and rope route each season and repair it as the glacier moves. Fixed rope above the Icefall is placed cooperatively by Sherpa teams from the expeditions." },
      { question: "What should I ask an Everest operator?", answer: "Sherpa-to-client ratio on summit day, Sherpa pay, insurance and equipment standards, the number of oxygen bottles per climber and the flow rate on summit day, the medical and evacuation plan, and who does their weather forecasting. Summit success rates depend mostly on the season's weather and tell you little." },
    ],
    relatedTreks: [
      "everest-expedition",
      "everest-and-lhotse-expedition",
      "lhotse-expedition",
      "ama-dablam-expedition",
      "manaslu-expedition",
    ],
    tripsNote: "Everest and the peaks that form the standard progression toward it.",
    relatedPosts: [
      "eight-thousand-metre-peaks-in-nepal",
      "manaslu-expedition-guide",
      "ama-dablam-expedition-guide",
      "nma-peak-permits-and-fees",
    ],
    tags: ["everest expedition", "south col", "8000m", "mountaineering", "khumbu icefall"],
    meta: {
      title: "Everest Expedition Guide: Climbing the South Col Route",
      description: "How a commercial Everest expedition works — the Icefall, Western Cwm, Lhotse Face and South Col, the season's rhythm, costs, the 7,000 m experience rule.",
      keywords: "Everest expedition, South Col route, Khumbu Icefall, Everest permit cost, Everest experience requirement",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "manaslu-expedition-guide",
    title: "Manaslu Expedition Guide: The Standard First Eight-Thousander",
    cluster: "climbing",
    date: "2026-11-24",
    hero: {
      image: "mardi-treks/manaslu-expedition/manaslu-expedition-00-manaslu-peak",
      alt: "Manaslu, the world's eighth highest mountain, Gorkha, Nepal.",
    },
    excerpt:
      "8,163 m in Gorkha, climbed in autumn, and the peak most climbers use as their step from 7,000 m to Everest. The route, the season, the avalanche question, and what it demands of you.",
    intro: [
      { p: "Manaslu (8,163 m) is the eighth-highest mountain in the world and the one most climbers attempt first among the eight-thousanders. The normal route on the north-east face is comparatively straightforward by 8,000 m standards, the autumn season avoids competing with Everest, and base camp is reached by walking rather than flying." },
      { p: "Straightforward is relative. It is still an eight-thousander, with a serious avalanche history, a long summit day above 7,400 m, and a season that has become significantly busier in the last decade as its reputation as an Everest stepping stone has grown." },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "8,163 m — the true summit, not the fore-summit"],
                ["Duration", "About 47 days from Kathmandu"],
                ["Route", "North-east face, the normal route"],
                ["Camps", "Base camp 4,800 m, C1 5,700 m, C2 6,400 m, C3 6,800 m, C4 7,400 m"],
                ["Season", "Autumn — summit windows typically late September to mid October"],
                ["Permit", "About USD 1,800 per person in autumn"],
                ["Approach", "Road and trek up the Budhi Gandaki to Samagaun — no flight"],
                ["Oxygen", "Standard from Camp 3 or 4 on commercial ascents"],
              ],
            },
          },
          { p: "We run it as [[trek:manaslu-expedition|a 47-day Manaslu expedition]]. The [[trek:manaslu-circuit-trek|Manaslu Circuit trek]] follows the same approach valley as far as Samagaun, which is where base camp begins." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "The approach" },
          { p: "By road to Soti Khola or Machha Khola, then six or seven days of trekking up the <strong>Budhi Gandaki gorge</strong> to <strong>Samagaun (3,530 m)</strong>. This is one of the best walk-ins to any eight-thousander — a deepening gorge, increasingly Tibetan villages, and no aircraft involved. It also provides excellent gradual acclimatisation." },
          { h3: "Base camp (4,800 m)" },
          { p: "Above Samagaun on a moraine shelf beneath the north-east face, with Birendra Lake and the Manaslu glacier below. Expeditions occupy it for four to five weeks." },
          { h3: "Camps 1 to 3" },
          { p: "<strong>Camp 1 (5,700 m)</strong> is reached across the lower glacier with crevasse fields and some fixed rope. <strong>Camp 2 (6,400 m)</strong> lies above a steeper icefall section with seracs — the part of the route with the most objective danger. <strong>Camp 3 (6,800 m)</strong> sits on the broad upper snowfield, where oxygen typically comes into use." },
          { h3: "Camp 4 (7,400 m) and the summit" },
          { p: "A long snow plod to the high camp, then a summit push of eight to twelve hours across the summit plateau to the final ridge. A specific point matters here: Manaslu has a <strong>fore-summit</strong> that many climbers historically stopped at, believing it to be the top. The true summit is a further exposed section along a corniced ridge, and reputable operators now insist on it. Ask your operator directly about this." },
        ],
      },
      {
        h2: "The Avalanche Question",
        blocks: [
          { p: "Manaslu has a serious avalanche history. The 2012 disaster at Camp 3 killed eleven climbers, and there have been further fatal incidents since, principally on the section between Camps 1 and 2 where seracs overhang the route." },
          {
            ul: [
              "<strong>Autumn snow is the issue.</strong> The route is climbed shortly after the monsoon, when the snowpack is deep and consolidating, which is exactly when slab avalanche risk is highest.",
              "<strong>The serac band above Camp 1</strong> is objective danger — it cannot be mitigated by skill, only by minimising exposure time and choosing when to move.",
              "<strong>What good operators do:</strong> move through the exposed sections in the cold of early morning, avoid Camp 3 as a sleeping camp where possible, coordinate with other teams on fixing and conditions, and cancel rotations rather than run them in poor snow.",
              "<strong>What you can control:</strong> your own speed through the exposed sections, and your willingness to accept a guide's decision to wait.",
            ],
          },
          { p: "This is not a reason not to climb Manaslu. It is a reason to choose an operator on its safety practice rather than its price, and to understand that objective danger on an eight-thousander is a real and irreducible part of the undertaking." },
        ],
      },
      {
        h2: "Why It Is the Standard First Eight-Thousander",
        blocks: [
          {
            ul: [
              "<strong>Technically the most accommodating of Nepal's eight-thousanders.</strong> Snow and glacier travel with fixed rope, and no sustained technical rock or ice.",
              "<strong>An autumn season</strong>, which does not compete with the spring Everest calendar and suits climbers who want a second season objective.",
              "<strong>No flight.</strong> The walk in up the Budhi Gandaki is reliable and acclimatises you well.",
              "<strong>A comparatively low permit</strong> — around USD 1,800 against Everest's USD 15,000.",
              "<strong>It satisfies the Everest prerequisite</strong> and, more importantly, it tells you honestly how you function above 7,500 m with oxygen.",
              "<strong>A genuine 8,000 m summit</strong> in its own right, with a superb view across the Manaslu Himal and toward Annapurna.",
            ],
          },
          { p: "The progression most climbers follow: a high trek, then [[trek:island-peak-climbing|Island Peak]] and [[trek:lobuche-east-peak-climbing|Lobuche East]], then [[trek:ama-dablam-expedition|Ama Dablam]] for technical competence, then [[trek:baruntse-expedition|Baruntse]] or [[trek:pumori-expedition|Pumori]] at 7,000 m, then Manaslu, then [[trek:everest-expedition|Everest]]. Our [[post:eight-thousand-metre-peaks-in-nepal|eight-thousanders guide]] covers the alternatives at each step." },
        ],
      },
      {
        h2: "What It Demands",
        blocks: [
          {
            ul: [
              "<strong>Prior 6,000 m and ideally 7,000 m experience.</strong> Manaslu is not a first Himalayan climb.",
              "<strong>Automatic rope work.</strong> Jumaring and abseiling on fixed line, in mittens, at 7,500 m, when exhausted. See our [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed rope guide]].",
              "<strong>Endurance rather than power.</strong> Five weeks on the mountain with repeated rotations, and a twelve-hour summit day at the end of it.",
              "<strong>Full 8,000 m kit</strong> — an expedition down suit, 8,000 m boots, a -40 °C bag, and an oxygen system you have trained with.",
              "<strong>Insurance</strong> covering mountaineering above 8,000 m with helicopter evacuation and repatriation.",
              "<strong>Patience and the ability to turn back.</strong> More expeditions end in a decision than in an incident, and the ones that end in an incident often followed a decision that should have gone the other way.",
            ],
          },
          { p: "One final note on the mountain itself: Manaslu means mountain of the spirit, from the Sanskrit <em>manasa</em>. It was first climbed in 1956 by a Japanese expedition, and it has been treated as a Japanese mountain in mountaineering history much as Annapurna is French and Everest British — a piece of context worth knowing when you reach Samagaun and see how the village relates to it." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Manaslu?", answer: "8,163 m, making it the eighth highest mountain in the world. It stands in the Gorkha district of central Nepal, above the village of Samagaun in the Budhi Gandaki valley, and was first climbed in 1956 by a Japanese expedition." },
      { question: "Why is Manaslu the usual first eight-thousander?", answer: "It is technically the most accommodating of Nepal's eight-thousanders — snow and glacier travel on fixed rope with no sustained technical rock or ice — it runs in autumn rather than competing with Everest's spring season, base camp is reached on foot, and the permit is around USD 1,800 rather than USD 15,000." },
      { question: "Is Manaslu dangerous?", answer: "It has a serious avalanche history, including the 2012 disaster at Camp 3 that killed eleven climbers, with the serac band between Camps 1 and 2 the main objective danger. Autumn's deep post-monsoon snowpack is part of the reason. Good operators minimise exposure time and cancel rotations in poor conditions." },
      { question: "What is the Manaslu fore-summit issue?", answer: "Manaslu has a fore-summit that many climbers historically stopped at, believing it to be the top. The true summit lies beyond it along an exposed corniced ridge. Reputable operators now insist on the true summit, and it is a question worth asking an operator directly before booking." },
      { question: "How long is a Manaslu expedition?", answer: "About 47 days from Kathmandu — a road transfer, six or seven days trekking up the Budhi Gandaki to Samagaun, four to five weeks on the mountain with acclimatisation rotations, and a summit push in a weather window typically between late September and mid October." },
      { question: "Do I need oxygen on Manaslu?", answer: "On commercial ascents, yes — typically from Camp 3 or Camp 4 upward. Oxygen-free ascents are attempted but are a substantially more serious undertaking. Your operator should be clear about bottle numbers and flow rates before you commit." },
      { question: "What experience do I need for Manaslu?", answer: "Prior Himalayan climbing at 6,000 m and ideally 7,000 m. The standard progression is a high trek, Island Peak and Lobuche East for rope competence, Ama Dablam for technical ground, then Baruntse or Pumori at 7,000 m, and then Manaslu." },
      { question: "How does the approach work?", answer: "By road to Soti Khola or Machha Khola, then six or seven days trekking up the Budhi Gandaki gorge to Samagaun at 3,530 m, and up to base camp at 4,800 m. It is one of the best walk-ins to any eight-thousander, with no flight involved and excellent gradual acclimatisation." },
    ],
    relatedTreks: [
      "manaslu-expedition",
      "manaslu-circuit-trek",
      "baruntse-expedition",
      "everest-expedition",
      "ama-dablam-expedition",
    ],
    tripsNote: "Manaslu as an expedition, the trek that shares its approach valley, and the peaks either side of it in the progression.",
    relatedPosts: [
      "eight-thousand-metre-peaks-in-nepal",
      "everest-expedition-guide",
      "ama-dablam-expedition-guide",
      "manaslu-circuit-trek-complete-guide",
    ],
    tags: ["manaslu expedition", "8000m", "first eight thousander", "mountaineering", "gorkha"],
    meta: {
      title: "Manaslu Expedition Guide: The Standard First Eight-Thousander",
      description: "Climbing Manaslu at 8,163 m — the north-east face route, the autumn season, the avalanche history, the fore-summit issue, and what experience it demands.",
      keywords: "Manaslu expedition, first 8000m peak, Manaslu avalanche, Manaslu true summit, Manaslu permit cost",
    },
  },
];
