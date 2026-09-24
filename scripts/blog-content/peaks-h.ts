import type { BlogContent } from "./build";

export const peaksH: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "lhotse-expedition-guide",
    title: "Lhotse Expedition: The Complete Guide",
    cluster: "climbing",
    date: "2027-10-27",
    hero: {
      image: "mardi-treks/lhotse-expedition/lhotse-expedition-00-everest-lhotse-nuptse-and-khumbu-glacier",
      alt: "Everest, Lhotse, Nuptse and the Khumbu glacier, Nepal.",
    },
    excerpt:
      "The fourth-highest mountain on earth and the quietest 8,000 m peak in Nepal. It shares Everest's base camp, Icefall, Cwm and Face — and then goes straight up the Lhotse Couloir, which is steeper than anything on Everest's normal route.",
    intro: [
      { p: "<strong>Lhotse (8,516 m)</strong> is the fourth-highest mountain on earth and, for most of the season, the quietest 8,000 m peak in Nepal." },
      { p: "It shares Everest's base camp, Everest's Icefall, Everest's Western Cwm and Everest's Lhotse Face — and then, at around <strong>7,900 m</strong>, the two routes part. Everest traverses right to the South Col; Lhotse goes straight up into the <strong>Lhotse Couloir</strong>, a narrow gully of snow and ice that runs to a small rock summit." },
      { p: "That couloir is what makes it a genuinely different mountain. It is <strong>steeper than anything on Everest's normal route</strong> — 45 to 50 degrees, pinching to a few metres wide, with a rock band near the exit and no room to pass anyone. It was first climbed in May 1956 by <strong>Ernst Reiss and Fritz Luchsinger</strong>, and it still rewards a climber who wants an 8,000 m summit with real climbing on it and a fraction of the traffic on the ridge above the Col." },
      {
        figure: {
          image: "mardi-treks/lhotse-expedition/lhotse-expedition-02-climbers-crossing-ladders-in-the-khumbu-icefall",
          alt: "Climbers crossing ladders in the Khumbu Icefall, Everest region, Nepal.",
          caption: "The Khumbu Icefall — shared with Everest, and the most objectively dangerous ground on the route.",
        },
      },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "8,516 m — the fourth-highest mountain on earth"],
                ["The crux", "The Lhotse Couloir: 45–50°, pinching to a few metres wide"],
                ["Duration", "50 days Kathmandu to Kathmandu"],
                ["Camp 4", "Around 7,900 m on the Lhotse Face, on cut platforms"],
                ["Oxygen", "Six 4-litre bottles per climber, plus a dedicated Sherpa's supply"],
                ["Summit success rate", "Roughly 60 to 70 percent of those who start the push"],
                ["Season", "April to May"],
                ["Price", "From USD 28,000 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:lhotse-expedition|50-day expedition]]. The [[trek:everest-expedition|Everest expedition]] shares the route to Camp 3, and the [[trek:everest-and-lhotse-expedition|Everest and Lhotse trip]] takes both summits from the same Camp 4." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Kathmandu to Everest Base Camp (1,400 m to 5,364 m)" },
          { p: "Three days in Kathmandu for the expedition briefing, equipment inspection, <strong>Ministry briefing</strong> and permits, then the Lukla flight and the standard Khumbu acclimatisation ladder through Namche, Tengboche, Dingboche and Lobuche to <strong>Everest Base Camp at 5,364 m</strong>." },
          { p: "At base camp: settling in and a systems check, a <strong>puja ceremony</strong>, and an <strong>Icefall ladder and fixed-rope training day</strong> before anyone goes up." },
          { h3: "The rotations" },
          { p: "Through the <strong>Khumbu Icefall</strong> to Camp 1 (6,065 m) and Camp 2 (6,400 m), then the Lhotse Face to Camp 3. The Icefall is identical in risk to an Everest expedition and is the most objectively dangerous ground on the route: we cross it in the cold hours before dawn and keep the number of crossings to the minimum the rotation plan allows." },
          { h3: "Camp 4 and the couloir (7,900 m to 8,516 m)" },
          { p: "<strong>Camp 4 sits at around 7,900 m on the Lhotse Face itself</strong>, below the entrance to the couloir — a small, steep, exposed camp with tents on cut platforms, not a flat plateau like Everest's South Col. From there the summit day goes straight into the couloir and up to the small rock summit." },
          {
            figure: {
              image: "mardi-treks/lhotse-expedition/lhotse-expedition-01-dingboche-village-and-mount-lhotse-khumbu-region",
              alt: "Dingboche village below Lhotse, Khumbu region, Nepal.",
              caption: "Lhotse from Dingboche on the approach. The couloir is the line splitting the face above the village.",
            },
          },
        ],
      },
      {
        h2: "The Couloir",
        blocks: [
          { p: "It <strong>pinches to a few metres across</strong> in places, with rock walls on both sides. That is what makes it committing: there is no room to pass, no shelter from anything coming down, and a party that arrives at the foot of it late has no way to make up time." },
          { p: "Time is consequently the commonest reason for turning back — not the climbing. Roughly 60 to 70 percent of our climbers who begin the summit push reach the top, and a party that reaches the couloir behind schedule is turned around rather than pushed through it." },
          {
            table: {
              head: ["", "Everest", "Lhotse"],
              rows: [
                ["Summit", "8,849 m", "8,516 m"],
                ["Summit day", "A long, cold, exposed ridge that is never steep", "A sustained 45–50° couloir"],
                ["Camp 4", "The South Col, a broad flat plateau", "7,900 m on the Face, tents on cut platforms"],
                ["Traffic", "Several hundred summits in a spring", "A few dozen"],
                ["Shared route", "To Camp 3", "To Camp 3"],
              ],
            },
          },
        ],
      },
      {
        h2: "Oxygen, Staffing and the Recovery Descent",
        blocks: [
          {
            ul: [
              "<strong>Six 4-litre bottles per climber</strong>, plus a Summit mask and regulator, and <strong>a dedicated Sherpa carrying his own supply</strong>. That covers a normal ascent from Camp 3 with margin, and extra bottles can be added at booking.",
              "<strong>A recovery descent mid-expedition</strong> to Pheriche at 4,371 m. Recovery does not happen at 5,364 m — three days with beds, hot food and thick air rebuilds a climber more effectively than a week sitting at base camp.",
              "<strong>Fixed rope</strong> on the Icefall, the Cwm, the Face and the couloir, shared with the Everest teams as far as Camp 3.",
            ],
          },
          { p: "Read our [[post:eight-thousand-metre-peaks-in-nepal|guide to Nepal's 8,000 m peaks]] for how Lhotse sits against the others." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 34,160"],
                ["2 to 4", "USD 31,640"],
                ["5 to 7", "USD 29,960"],
                ["8 to 10", "USD 29,120"],
                ["11 to 14", "USD 28,420"],
                ["15 and over", "USD 28,000"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including the royalty permit, all camps, oxygen, a dedicated Sherpa and full expedition logistics.",
            },
          },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, an expedition briefing, equipment inspection, <strong>Ministry briefing and permits</strong> in Kathmandu.",
              "<strong>Kathmandu–Lukla return flights</strong> and the full Khumbu approach with teahouse accommodation.",
              "<strong>Everest Base Camp (5,364 m) with full expedition infrastructure</strong>, plus Camps 1, 2, 3 and 4.",
              "A cook and kitchen crew, and all meals throughout the expedition.",
              "<strong>Lhotse climbing royalty and permits</strong>, Sagarmatha National Park entry, the Khumbu municipality fee and liaison arrangements.",
              "An expedition leader, <strong>a dedicated climbing Sherpa per climber</strong>, and high-altitude staff.",
              "<strong>Six 4-litre oxygen bottles per climber, plus a Summit mask and regulator</strong>, and the Sherpa's own supply.",
              "Icefall ladder and fixed-rope training, a puja, and the Icefall Doctors' route fee.",
              "<strong>A recovery descent to Pheriche</strong> mid-expedition.",
              "Garbage deposit, summit certificate and all government taxes.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "<strong>Expedition insurance valid to 8,600 m</strong> with helicopter evacuation and repatriation.",
              "Personal climbing equipment, an 8,000 m down suit and double boots rated for the altitude.",
              "<strong>Additional oxygen bottles</strong> beyond the six included.",
              "Meals in Kathmandu beyond breakfast.",
              "Personal expenses, laundry, Wi-Fi and charging at base camp.",
              "<strong>Summit bonus and tips</strong> for the climbing Sherpas and high-altitude staff.",
              "Extra accommodation or transport caused by a cancelled Lukla flight, weather or an early descent.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "How does Lhotse compare with Everest?", answer: "Around 330 m lower and, on the summit day itself, more sustained climbing. Everest's ridge above the South Col is long, cold and exposed but never steep; Lhotse's couloir is 45 to 50 degrees and pinches to a few metres wide with a rock band near the exit." },
      { question: "Is Lhotse really quieter than Everest?", answer: "Substantially. A typical spring season sees several hundred people summit Everest and a few dozen summit Lhotse, on the same fixed ropes as far as Camp 3. The couloir itself is rarely busy, which matters because there is no room to pass in it." },
      { question: "Can Lhotse and Everest be climbed on the same trip?", answer: "Yes, and it is one of the great objectives in the Himalaya — two 8,000 m summits in about forty-eight hours from the same Camp 4. We run it as a separate itinerary with its own oxygen allocation and staffing rather than as an add-on." },
      { question: "How narrow is the Lhotse Couloir?", answer: "It pinches to a few metres across in places, with rock walls on both sides. That is what makes it committing: there is no room to pass, no shelter from anything coming down, and a late party cannot make up time inside it." },
      { question: "Where exactly is Camp 4 on Lhotse?", answer: "At around 7,900 m on the Lhotse Face itself, below the entrance to the couloir — a small, steep, exposed camp with tents on cut platforms, not a flat plateau like Everest's South Col. It is a less comfortable place to wait out weather." },
      { question: "How much oxygen is included?", answer: "Six 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. That covers a normal ascent from Camp 3 with margin. Additional bottles can be added at booking." },
      { question: "What is the summit success rate on Lhotse?", answer: "Roughly 60 to 70 percent of our climbers who begin the summit push reach the top. The commonest reason for turning back is time — a party that reaches the foot of the couloir behind schedule is turned around rather than pushed through it." },
      { question: "Is the Khumbu Icefall the same risk as on an Everest expedition?", answer: "Identical, and it is the most objectively dangerous ground on the route. We cross it in the cold hours before dawn, keep the number of crossings to the minimum the rotation plan allows, and use the Icefall Doctors' fixed route." },
    ],
    relatedTreks: [
      "lhotse-expedition",
      "everest-expedition",
      "everest-and-lhotse-expedition",
      "makalu-expedition",
      "ama-dablam-expedition",
    ],
    tripsNote: "Nepal's 8,000 m peaks and the technical objectives below them.",
    relatedPosts: [
      "eight-thousand-metre-peaks-in-nepal",
      "everest-expedition-guide",
      "makalu-expedition-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
      "everest-base-camp-trek-complete-guide",
    ],
    tags: ["Lhotse", "8000m Peaks", "Expedition", "Everest Region", "Lhotse Couloir"],
    meta: {
      title: "Lhotse Expedition: The Complete Guide",
      description:
        "A 50-day expedition on Lhotse (8,516 m) via the Lhotse Couloir. Route, Camp 4, oxygen allocation, success rate, how it compares with Everest, and costs.",
      keywords:
        "lhotse expedition, lhotse couloir, 8000m peak nepal, fourth highest mountain, everest base camp expedition",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "makalu-expedition-guide",
    title: "Makalu Expedition: The Complete Guide",
    cluster: "climbing",
    date: "2027-10-30",
    hero: {
      image: "mardi-treks/makalu-expedition/makalu-expedition-00-makalu-best-seen-at-sunrise-panoramio",
      alt: "Makalu at sunrise, eastern Nepal.",
    },
    excerpt:
      "The fifth-highest mountain on earth and the hardest of Nepal's 8,000 m peaks by its normal route — a final pyramid of steep mixed rock and ice above 8,000 m, and a base camp eight days' walk from the nearest road.",
    intro: [
      { p: "<strong>Makalu (8,485 m)</strong> is the fifth-highest mountain on earth and the hardest of Nepal's 8,000 m peaks by its normal route. It has a reputation among high-altitude climbers that its neighbours do not: a <strong>summit success rate well below Everest's</strong>, a final pyramid of steep mixed rock and ice above 8,000 m, and a base camp <strong>eight days' walk from the nearest road</strong> with no helicopter traffic, no trekker lodges and no other expeditions to share the fixing with." },
      { p: "It was first climbed in <strong>1955 by a French team under Jean Franco</strong>, who put nine members on top — an extraordinary result for the period." },
      { p: "The approach up the Barun valley from Tumlingtar is one of the finest walks in Nepal and almost nobody does it, and the mountain at the end of it is a serious, committing proposition that <strong>we sell only to climbers with an 8,000 m summit already behind them</strong>." },
      {
        figure: {
          image: "mardi-treks/makalu-expedition/makalu-expedition-04-barun-river-between-yangle-kharka-and-mumbuk-panoramio",
          alt: "The Barun river between Yangle Kharka and Mumbuk, eastern Nepal.",
          caption: "The Barun valley — protected forest, two-thousand-metre walls, and eight days of walking to base camp.",
        },
      },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "8,485 m — the fifth-highest mountain on earth"],
                ["The crux", "The final 400 m of steep mixed rock and ice above 8,000 m"],
                ["Duration", "51 days Kathmandu to Kathmandu"],
                ["Approach", "Eight days on foot from the roadhead at Num"],
                ["Oxygen", "Seven 4-litre bottles per climber, plus a dedicated Sherpa's supply"],
                ["Summit success rate", "Roughly a third to a half of those who start the push"],
                ["Who we take", "Climbers with an 8,000 m summit already"],
                ["Price", "From USD 32,000 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:makalu-expedition|51-day expedition]]. The [[trek:makalu-base-camp-trek|Makalu Base Camp trek]] covers the approach alone, and [[trek:lhotse-expedition|Lhotse]] is the more forgiving 8,000 m objective." },
        ],
      },
      {
        h2: "Why Makalu Is Harder Than Everest",
        blocks: [
          { p: "Because of the <strong>summit pyramid</strong>. Everest's route above the South Col is long, cold and exposed but never technical; <strong>Makalu's final 400 m is steep mixed rock and ice climbed above 8,000 m</strong>, which is a different order of problem entirely." },
          { p: "Three other things compound it:" },
          {
            ul: [
              "<strong>The Makalu La at 7,400 m</strong> — a col between Makalu and Kangchungtse, and one of the windiest camps on any 8,000 m peak. Tents have been destroyed there in a night. It is a place to move through rather than linger.",
              "<strong>Usually one or two other teams on the mountain, sometimes none.</strong> The route may need fixing largely by our own Sherpa team, and in an emergency there is unlikely to be anyone else to help.",
              "<strong>Evacuation is hard.</strong> Helicopter from base camp is possible in clear weather but expensive and not routine — the Barun sees very little air traffic. Below base camp, evacuation means being carried down the valley.",
            ],
          },
          { p: "Across recent seasons roughly a third to a half of climbers who begin the summit push from Camp 4 reach the top, and there are years when nobody does." },
        ],
      },
      {
        h2: "The Approach",
        blocks: [
          { p: "<strong>Eight days on foot from the roadhead at Num.</strong> There is no airstrip in the Barun and no established helicopter service, and in any case the walk is the acclimatisation." },
          { p: "Fly to <strong>Tumlingtar</strong>, drive to Num, then Seduwa, <strong>Tashigaon</strong>, Khongma Danda, over the <strong>Shipton La (4,220 m)</strong> to Dobato, and up the Barun through Yangle Kharka and Langmale Kharka to <strong>base camp at 4,870 m</strong>." },
          { p: "The valley is one of the finest walks in Nepal and almost unvisited: protected forest with <strong>red panda and snow leopard habitat</strong>, two-thousand-metre walls, and waterfalls falling off hanging glaciers." },
          {
            figure: {
              image: "mardi-treks/makalu-expedition/makalu-expedition-03-everest-lhotse-makalu-sunset",
              alt: "Everest, Lhotse and Makalu at sunset, Nepal Himalaya.",
              caption: "Everest, Lhotse and Makalu. Of the three, Makalu is the hardest by its normal route.",
            },
          },
        ],
      },
      {
        h2: "The Climb",
        blocks: [
          { p: "At base camp: settling in and a systems check, a <strong>puja</strong>, a <strong>technical training day</strong> and an acclimatisation day. Then rotations through <strong>Advance Base Camp (5,700 m)</strong>, Camp 1 (6,400 m) and the camps above, with the Makalu La at 7,400 m as the last before the summit push." },
          { p: "A <strong>recovery descent to Yangle Kharka at 3,600 m</strong> is built in mid-expedition. Recovery does not happen at 4,870 m, and three days low down in thick air with the forest and the river does more for a climber than a week of sitting at base camp." },
          { p: "<strong>Seven 4-litre bottles per climber</strong>, a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. Extra bottles can be added at booking and are refunded if unused." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 39,040"],
                ["2 to 4", "USD 36,160"],
                ["5 to 7", "USD 34,240"],
                ["8 to 10", "USD 33,280"],
                ["11 to 14", "USD 32,480"],
                ["15 and over", "USD 32,000"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including the royalty permit, all camps, oxygen, a dedicated Sherpa and full expedition logistics.",
            },
          },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, an expedition briefing, equipment inspection, <strong>Ministry briefing, permits and cargo dispatch</strong> in Kathmandu.",
              "<strong>Kathmandu–Tumlingtar flights</strong> and the jeep to Num, plus the full Barun approach.",
              "<strong>Base camp (4,870 m), Advance Base Camp (5,700 m) and the camps above</strong>, with full expedition infrastructure.",
              "A cook and kitchen crew, and all meals throughout the expedition.",
              "<strong>Makalu climbing royalty and permits</strong>, Makalu Barun National Park entry and liaison arrangements.",
              "An expedition leader, <strong>a dedicated climbing Sherpa per climber</strong>, and high-altitude staff.",
              "<strong>Seven 4-litre oxygen bottles per climber, plus a Summit mask and regulator</strong>, and the Sherpa's own supply.",
              "<strong>Rope fixing by our own Sherpa team</strong> where no other expedition is on the mountain.",
              "A puja, a technical training day, rotations, and a <strong>recovery descent to Yangle Kharka</strong>.",
              "Garbage deposit, summit certificate and all government taxes.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "<strong>Expedition insurance valid to 8,600 m</strong> with helicopter evacuation and repatriation — and note that evacuation from the Barun is expensive and weather-dependent.",
              "Personal climbing equipment, an 8,000 m down suit and double boots rated for the altitude.",
              "Additional oxygen bottles beyond the seven included.",
              "Meals in Kathmandu beyond breakfast.",
              "Personal expenses, laundry, Wi-Fi and charging at base camp.",
              "<strong>Summit bonus and tips</strong> for the climbing Sherpas and high-altitude staff.",
              "Extra accommodation or transport caused by flight delays at Tumlingtar, weather or an early descent.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Why is Makalu considered harder than Everest?", answer: "Because of the summit pyramid. Everest's route above the South Col is long, cold and exposed but never technical; Makalu's final 400 m is steep mixed rock and ice climbed above 8,000 m, which is a different order of problem entirely." },
      { question: "What is the summit success rate on Makalu?", answer: "Low, and we will not flatter it. Across recent seasons roughly a third to a half of climbers who begin the summit push from Camp 4 reach the top, and there are years when nobody does. The summit pyramid and the wind at the Makalu La are the reasons." },
      { question: "Will there be other teams on the mountain?", answer: "Usually one or two, sometimes none. That has two consequences: the route may need fixing largely by our own Sherpa team, and in an emergency there is unlikely to be anyone else nearby to help. Both are priced and staffed for." },
      { question: "How long is the approach and why not fly to base camp?", answer: "Eight days on foot from the roadhead at Num. There is no airstrip in the Barun and no established helicopter service, and in any case the walk is the acclimatisation — arriving at 4,870 m without it would be counterproductive." },
      { question: "How much oxygen is included?", answer: "Seven 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. Extra bottles can be added at booking and are refunded if unused, which is the fairest way to handle it." },
      { question: "What is the Makalu La like?", answer: "A col at 7,400 m between Makalu and Kangchungtse, and one of the windiest camps on any 8,000 m peak. Tents have been destroyed there in a night. It is a place to move through rather than to sit and wait for weather." },
      { question: "Is evacuation possible from Makalu base camp?", answer: "By helicopter in clear weather, and it is expensive and not routine — the Barun sees very little air traffic. Below base camp, evacuation means being carried down the valley. Your insurance needs to reflect that reality." },
      { question: "What is the Barun valley like?", answer: "One of the finest walks in Nepal and almost unvisited. Protected forest with red panda and snow leopard habitat, two-thousand-metre walls, waterfalls off hanging glaciers, and no lodges beyond the basic teahouses on the lower section." },
    ],
    relatedTreks: [
      "makalu-expedition",
      "makalu-base-camp-trek",
      "lhotse-expedition",
      "everest-expedition",
      "sherpani-col-passes-trek",
    ],
    tripsNote: "Makalu and the Barun valley, climbed and walked.",
    relatedPosts: [
      "makalu-base-camp-trek-guide",
      "eight-thousand-metre-peaks-in-nepal",
      "lhotse-expedition-guide",
      "sherpani-col-passes-trek-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
    ],
    tags: ["Makalu", "8000m Peaks", "Expedition", "Barun Valley", "Eastern Nepal"],
    meta: {
      title: "Makalu Expedition: The Complete Guide",
      description:
        "A 51-day expedition on Makalu (8,485 m), the hardest of Nepal's 8,000 m peaks by its normal route. Summit pyramid, Makalu La, oxygen, success rates and costs.",
      keywords:
        "makalu expedition, makalu 8485m, fifth highest mountain, barun valley, makalu la, 8000m nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-expedition-guide",
    title: "Annapurna I Expedition: The Complete Guide",
    cluster: "climbing",
    date: "2027-11-03",
    hero: {
      image: "mardi-treks/annapurna-expedition/annapurna-expedition-00-mt-annapurna-miristi-khola-valley-panoramio",
      alt: "Annapurna I above the Miristi Khola valley, Nepal.",
    },
    excerpt:
      "The first 8,000 m peak ever climbed, and by a wide margin the most dangerous of the fourteen. We say that first because anyone considering this deserves to hear it before the marketing. A grade D route where objective hazard, not difficulty, governs.",
    intro: [
      { p: "<strong>Annapurna I (8,091 m)</strong> was the first 8,000 m peak ever climbed — <strong>Maurice Herzog and Louis Lachenal, 3 June 1950</strong>, with no oxygen, no fixed rope and no map worth the name." },
      { p: "It is also, by a wide margin, <strong>the most dangerous of the fourteen</strong>. The north face is swept by avalanche and serac fall, the route changes from season to season, and the ratio of deaths to summits has historically been the worst in high-altitude mountaineering." },
      { p: "<strong>We say all of that first because anyone considering this expedition deserves to hear it before the marketing.</strong> What follows is the mountain as it is: a grade D route on a face where objective hazard, not technical difficulty, is the governing problem; a forty-four day expedition with two rotations, a dedicated 1:1 Sherpa and a full oxygen allocation; and a leader whose willingness to abandon a season is the single most valuable thing in the package." },
      {
        figure: {
          image: "mardi-treks/annapurna-expedition/annapurna-expedition-01-annapurna-south-and-first",
          alt: "Annapurna South and Annapurna I, Nepal Himalaya.",
          caption: "Annapurna I. The north face is the normal route, and the hazard on it is managed rather than removed.",
        },
      },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "8,091 m — the first 8,000 m peak ever climbed"],
                ["Route", "The north face"],
                ["Grade", "D, with objective hazard as the governing problem"],
                ["Duration", "44 days Kathmandu to Kathmandu"],
                ["Base camp", "Annapurna North Base Camp, 4,190 m"],
                ["Oxygen", "Seven 4-litre bottles per climber, plus a dedicated Sherpa's supply"],
                ["Summit success rate", "Roughly a third to a half of those who start a push"],
                ["Price", "From USD 38,000 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:annapurna-expedition|44-day expedition]]. For the other 8,000 m objectives, see [[trek:lhotse-expedition|Lhotse]], [[trek:makalu-expedition|Makalu]] and [[trek:everest-expedition|Everest]]." },
        ],
      },
      {
        h2: "The Hazard, Stated First",
        blocks: [
          { p: "The serac hazard on the north face <strong>cannot be eliminated, only managed</strong>. We cross the exposed sections in the cold hours, never stop in them, and design the rotation plan to minimise the number of passages through them." },
          { p: "That is the whole of the honest answer. It is not a technique that makes the face safe; it is a way of reducing exposure to something that remains real." },
          { p: "<strong>If we decide the face is unsafe, we stop, and the expedition ends without a summit.</strong> Our leader has absolute authority to make that call, and <strong>no member of our staff receives a summit-contingent bonus</strong> that could bias it. That arrangement is deliberate and it is the most important line in this page." },
        ],
      },
      {
        h2: "The Approach: The Miristi Khola",
        blocks: [
          { p: "<strong>We do not fly clients to base camp.</strong> Several operators now do, and it saves six days, but it also removes the acclimatisation the walk provides and leaves a climber sitting at 4,190 m feeling ill. We walk in." },
          { p: "The route leaves the Kali Gandaki at <strong>Lete</strong> and follows the <strong>Miristi Khola</strong> — a gorge with no villages, no lodges and no maintained trail, with river crossings and steep forested sidewalls. It takes three days from Lete to <strong>Annapurna North Base Camp at 4,190 m</strong>, and it is wild country by any standard." },
          {
            figure: {
              image: "mardi-treks/annapurna-expedition/annapurna-expedition-05-nilgiris-from-way-to-french-col",
              alt: "The Nilgiri peaks seen on the way to the French Col, Nepal.",
              caption: "The Nilgiris above the Kali Gandaki. The Miristi Khola branches west from Lete into country with no trail.",
            },
          },
        ],
      },
      {
        h2: "Why Forty-Four Days",
        blocks: [
          {
            ul: [
              "<strong>The walk in takes six days</strong>, and it is the acclimatisation.",
              "<strong>The acclimatisation programme needs two rotations</strong> — Camp 1 at 5,100 m, Camp 2 at 5,700 m, and back to base each time.",
              "<strong>The summit window may not appear until the second half of May.</strong>",
              "<strong>Reserve days are built in</strong> and, on this mountain, are used.",
            ],
          },
          { p: "Shortening any of those is how an expedition ends up on the face at the wrong hour of the day, which is precisely the failure mode this mountain punishes." },
        ],
      },
      {
        h2: "What It Costs, and the Refund Position",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 46,360"],
                ["2 to 4", "USD 42,940"],
                ["5 to 7", "USD 40,660"],
                ["8 to 10", "USD 39,520"],
                ["11 to 14", "USD 38,570"],
                ["15 and over", "USD 38,000"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including the royalty permit, all camps, oxygen, a 1:1 Sherpa and full expedition logistics.",
            },
          },
          { p: "<strong>If the season is cancelled</strong>: the Department of Tourism royalty and permit fees are paid in advance and are non-refundable to us, so they are non-refundable to you. Everything else — staff, food, oxygen and logistics not yet consumed — is refunded. We set that out in writing at booking rather than in the small print." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, an expedition briefing, equipment check, <strong>Ministry briefing, permits and cargo dispatch</strong> in Kathmandu.",
              "Transport Kathmandu–Pokhara–Lete, and the full Miristi Khola approach with a camping crew.",
              "<strong>Annapurna North Base Camp (4,190 m) with full expedition infrastructure</strong>, plus Camps 1, 2 and above.",
              "A cook and kitchen crew, and all meals throughout the expedition.",
              "<strong>Annapurna climbing royalty and permits</strong>, the Annapurna Conservation Area Permit and liaison arrangements.",
              "An expedition leader, <strong>a dedicated 1:1 climbing Sherpa</strong>, and high-altitude staff.",
              "<strong>Seven 4-litre oxygen bottles per climber, plus a Summit mask and regulator</strong>, and the Sherpa's own supply.",
              "Rope fixing, shared with other teams where possible.",
              "A puja, a technical training day, <strong>two acclimatisation rotations</strong> and reserve days.",
              "Garbage deposit, summit certificate and all government taxes.",
            ],
          },
        ],
      },
      {
        h2: "What Is Not Included",
        blocks: [
          {
            ul: [
              "International flights and the Nepal entry visa fee.",
              "<strong>Expedition insurance valid to 8,200 m</strong> with helicopter evacuation and repatriation.",
              "Personal climbing equipment, an 8,000 m down suit and double boots rated for the altitude.",
              "Additional oxygen bottles beyond the seven included.",
              "Meals in Kathmandu and Pokhara beyond breakfast.",
              "Personal expenses, laundry, Wi-Fi and charging at base camp.",
              "<strong>Summit bonus and tips</strong> for the climbing Sherpas and high-altitude staff.",
              "<strong>The Department of Tourism royalty in the event of a cancelled season</strong>, which is non-refundable.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Can the serac hazard on Annapurna be avoided?", answer: "Not eliminated, only managed. We cross the exposed sections in the cold hours, never stop in them, and design the rotation plan to minimise the number of passages through them. That reduces exposure to something that remains real." },
      { question: "Do you fly clients to Annapurna base camp?", answer: "No. Several operators now do, and it saves six days, but it also removes the acclimatisation the walk provides and leaves a climber sitting at 4,190 m feeling ill. We walk in via the Miristi Khola." },
      { question: "What is the Miristi Khola approach like?", answer: "Wild. It leaves the Kali Gandaki at Lete and follows a gorge with no villages, no lodges and no maintained trail, with river crossings and steep forested sidewalls. It takes three days from Lete to base camp." },
      { question: "How much oxygen is included?", answer: "Seven 4-litre bottles per climber, plus a Summit mask and regulator, and a dedicated Sherpa carrying his own supply. Extra bottles can be added at booking and are refunded if unused." },
      { question: "What is the summit success rate on Annapurna?", answer: "Variable and generally low — across recent seasons roughly a third to a half of climbers who begin a summit push from Camp 4 reach the top, and there are years in which nobody summits at all. The face dictates the season." },
      { question: "Will there be other teams on the mountain?", answer: "Usually one or two in spring, occasionally more. That matters for route fixing, which is shared where possible, and for emergency response. Annapurna is far less crowded than Everest and that cuts both ways." },
      { question: "What happens if you decide the face is unsafe?", answer: "We stop, and the expedition ends without a summit. Our leader has absolute authority to make that call and no member of our staff receives a summit-contingent bonus that could bias it. That arrangement is deliberate." },
      { question: "What is the refund position if the season is cancelled?", answer: "The Department of Tourism royalty and permit fees are paid in advance and are non-refundable to us, so they are non-refundable to you. Everything else — staff, food, oxygen and logistics not yet consumed — is refunded, and we set that out in writing at booking." },
    ],
    relatedTreks: [
      "annapurna-expedition",
      "lhotse-expedition",
      "makalu-expedition",
      "everest-expedition",
      "annapurna-south-expedition",
    ],
    tripsNote: "The 8,000 m peaks, and the Annapurna massif's other major objectives.",
    relatedPosts: [
      "eight-thousand-metre-peaks-in-nepal",
      "lhotse-expedition-guide",
      "makalu-expedition-guide",
      "everest-expedition-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
    ],
    tags: ["Annapurna I", "8000m Peaks", "Expedition", "Annapurna Region", "North Face"],
    meta: {
      title: "Annapurna I Expedition: The Complete Guide",
      description:
        "A 44-day expedition on Annapurna I (8,091 m) by the north face. The hazard stated plainly, the Miristi Khola approach, oxygen, refunds and full costs.",
      keywords:
        "annapurna expedition, annapurna i 8091m, north face annapurna, miristi khola, most dangerous 8000m peak",
    },
  },
];
