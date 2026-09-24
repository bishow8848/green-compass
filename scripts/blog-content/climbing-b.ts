import type { BlogContent } from "./build";

export const climbingB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mera-peak-vs-island-peak",
    title: "Mera Peak vs Island Peak: Which Trekking Peak Should You Climb?",
    cluster: "climbing",
    date: "2026-10-23",
    hero: {
      image: "mardi-treks/mera-peak-climbing/mera-peak-climbing-03-8th-day-of-the-hike-mera-peak-last-few-meters-ascent-to-the-",
      alt: "The final metres of ascent on Mera Peak, Nepal.",
    },
    excerpt:
      "Nepal's two most popular 6,000 m trekking peaks, compared on altitude, technical difficulty, summit day, approach, crowds and views — with a clear recommendation depending on your experience and what you want out of it.",
    intro: [
      { p: "These are the two peaks almost every first-time Himalayan climber chooses between. Both are NMA Group B trekking peaks, both take around 18 days, both are climbed by fit trekkers with no prior mountaineering experience, and both are in the Everest region." },
      { p: "The short answer: <strong>Mera is higher and technically easier; Island Peak is lower and technically harder.</strong> Which suits you depends on whether your limiting factor is altitude or technique." },
    ],
    sections: [
      {
        h2: "Side by Side",
        blocks: [
          {
            table: {
              head: ["", "[[trek:mera-peak-climbing|Mera Peak]]", "[[trek:island-peak-climbing|Island Peak]]"],
              rows: [
                ["Summit altitude", "6,476 m", "6,189 m"],
                ["High camp", "About 5,800 m", "About 5,200 m"],
                ["Summit day", "8–12 hours", "12–15 hours"],
                ["Technical grade", "Alpine F/PD", "Alpine PD+"],
                ["Crux", "A short 40–50 m steep step near the summit", "A 100–150 m fixed-rope headwall at 45–50°, then an exposed ridge"],
                ["Glacier", "Long, broad, crevassed", "Shorter, with crevasses and occasional ladders"],
                ["Approach", "Hinku valley over the Zatrwa La — quiet", "Everest Base Camp route — busy"],
                ["Acclimatisation", "Excellent, nine days of graded walking", "Excellent, via EBC and Kala Patthar"],
                ["Cold at high camp", "-20 to -30 °C", "-15 to -25 °C"],
                ["Crowds on summit day", "Moderate", "The busiest trekking peak in Nepal"],
                ["The view", "Five 8,000 m peaks — Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga", "The Lhotse south face from close range, Makalu, Baruntse"],
                ["Permit cost", "Identical — NMA Group B", "Identical — NMA Group B"],
              ],
            },
          },
        ],
      },
      {
        h2: "Choose Mera If…",
        blocks: [
          {
            ul: [
              "<strong>You want the highest number.</strong> 6,476 m is the highest trekking peak in Nepal, and standing there is the point for a lot of climbers.",
              "<strong>Technical ground worries you more than altitude.</strong> The Mera route is a glacier walk in crampons with one short steep step.",
              "<strong>You want a quieter approach.</strong> The Hinku valley sees a small fraction of the Everest trail's traffic.",
              "<strong>The summit view matters.</strong> Five eight-thousanders in one panorama is unmatched from any trekking peak.",
              "<strong>You have a fear of exposure.</strong> There is no equivalent of Island Peak's summit ridge.",
              "<strong>You want a shorter summit day.</strong> Eight to twelve hours against twelve to fifteen.",
            ],
          },
          { p: "The trade-off is cold and altitude: high camp at 5,800 m is the coldest night on any trekking peak itinerary in Nepal, and 6,476 m is a genuine altitude. See our [[post:mera-peak-climbing-guide|Mera Peak guide]] for the full route." },
        ],
      },
      {
        h2: "Choose Island Peak If…",
        blocks: [
          {
            ul: [
              "<strong>You want to learn real mountaineering skills.</strong> Jumaring a 50-degree headwall and abseiling it is a proper climbing day, and skills you can build on.",
              "<strong>You want Everest Base Camp in the same trip.</strong> The standard itinerary walks the EBC route and includes Kala Patthar before the climb.",
              "<strong>Altitude worries you more than technique.</strong> 6,189 m and a 5,200 m high camp are both meaningfully lower.",
              "<strong>You want the Khumbu experience.</strong> Namche, Tengboche, Dingboche — the classic valley, with the lodges and culture that go with it.",
              "<strong>The Lhotse south face is the view you want.</strong> From the Island Peak summit it fills the sky.",
              "<strong>You are training for Ama Dablam or a bigger objective.</strong> The technical day is far better preparation.",
            ],
          },
          { p: "The trade-off is the summit day: twelve to fifteen hours with a headwall that can queue in peak season, and a summit ridge with real exposure. See our [[post:island-peak-climbing-guide|Island Peak guide]]." },
        ],
      },
      {
        h2: "Or Do Both",
        blocks: [
          { p: "The most effective way to summit both is [[trek:mera-and-island-peak-climbing|the 25-day combination]], and the order matters: <strong>Mera first, Island Peak second</strong>." },
          {
            ol: [
              "Mera's long graded approach through the Hinku acclimatises you thoroughly.",
              "Summiting at 6,476 m means Island Peak's 6,189 m feels comfortable rather than marginal.",
              "The Amphu Lapcha at 5,845 m links the two valleys directly, avoiding a long walk back to Lukla — that is [[trek:mera-peak-amphu-lapcha|the 21-day Amphu Lapcha route]].",
              "By the time you reach the Island Peak headwall you have had a full expedition's worth of crampon and rope practice.",
            ],
          },
          { p: "Beyond that: [[trek:mera-island-and-lobuche-peak-climbing|three peaks in 30 days]] adds Lobuche East, and [[trek:baruntse-expedition-with-mera-peak-climbing|Mera with Baruntse]] uses Mera as acclimatisation for a 7,129 m expedition peak." },
        ],
      },
      {
        h2: "What About the Others?",
        blocks: [
          {
            table: {
              head: ["Peak", "Altitude", "Compared with these two"],
              rows: [
                ["[[trek:yala-peak-climbing|Yala Peak]]", "5,520 m", "Much easier and lower — the best genuine first climb in Nepal"],
                ["[[trek:lobuche-east-peak-climbing|Lobuche East]]", "6,119 m", "More technical than Island Peak, with mixed rock and ice"],
                ["[[trek:pokalde-peak-climbing|Pokalde]]", "5,806 m", "Short and rocky, easily added to a Khumbu trek"],
                ["[[trek:naya-kanga-peak-climbing|Naya Kanga]]", "5,844 m", "A quiet Langtang snow peak, straightforward and uncrowded"],
                ["[[trek:kyajo-ri-peak-climbing|Kyajo Ri]]", "6,186 m", "Considerably harder — a serious technical objective"],
                ["[[trek:ama-dablam-expedition|Ama Dablam]]", "6,812 m", "A different category entirely — an expedition peak needing real experience"],
              ],
            },
          },
          { p: "If you have never worn crampons and want to find out whether Himalayan climbing suits you before committing to a 6,000 m peak, <strong>Yala Peak</strong> is the honest answer: a genuine glaciated summit in Langtang, road-accessible, with a short summit day and the same skills taught. Our [[post:yala-peak-climbing-guide|Yala Peak guide]] covers it." },
        ],
      },
    ],
    faqs: [
      { question: "Which is harder, Mera Peak or Island Peak?", answer: "Island Peak is technically harder — a 100 to 150 m fixed-rope headwall at 45 to 50 degrees and an exposed summit ridge, on a twelve to fifteen hour day. Mera is harder in altitude terms — 6,476 m against 6,189 m, and a high camp 600 m higher and considerably colder." },
      { question: "Which should I climb first?", answer: "If you are choosing one: Mera if technical ground concerns you and you want the highest summit, Island Peak if you want to learn real climbing skills and include Everest Base Camp. If you are doing both, climb Mera first — it acclimatises you and makes Island Peak's technical day much more comfortable." },
      { question: "Which has better views?", answer: "Mera, for the panorama — Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga from one summit, which nothing else on the trekking peak list matches. Island Peak for proximity, with the Lhotse south face filling the sky directly above you." },
      { question: "Do they cost the same?", answer: "The permits are identical — both are NMA Group B peaks at USD 250 in spring, USD 125 in autumn and USD 70 in winter or summer. Trip prices differ slightly with itinerary length and the different park fees, but they are broadly comparable." },
      { question: "Can I climb both on one trip?", answer: "Yes, in 25 days, and it is the most effective sequence — Mera first for acclimatisation, then Island Peak. The Amphu Lapcha route at 21 days links the two valleys over a 5,845 m technical pass rather than walking back to Lukla." },
      { question: "Which is better if I am afraid of heights?", answer: "Mera. There is no equivalent of Island Peak's narrow, exposed summit ridge, and the route is a broad glacier at moderate angle with one short steep step. Exposure is the one aspect of Island Peak that training cannot fully resolve." },
      { question: "Which is better preparation for bigger mountains?", answer: "Island Peak, clearly. Jumaring a 50-degree fixed-rope headwall and abseiling it is directly transferable to Ama Dablam and to 8,000 m routes, where fixed-rope efficiency is the core skill. Mera teaches glacier travel and altitude tolerance rather than technique." },
    ],
    relatedTreks: [
      "mera-peak-climbing",
      "island-peak-climbing",
      "mera-and-island-peak-climbing",
      "mera-peak-amphu-lapcha",
      "yala-peak-climbing",
    ],
    tripsNote: "Both peaks, and the combinations that climb them in the right order.",
    relatedPosts: [
      "island-peak-climbing-guide",
      "mera-peak-climbing-guide",
      "peak-climbing-in-nepal-beginners-guide",
      "yala-peak-climbing-guide",
    ],
    tags: ["mera peak", "island peak", "peak climbing", "comparison", "mountaineering"],
    meta: {
      title: "Mera Peak vs Island Peak: Which Trekking Peak Should You Climb?",
      description: "Nepal's two most popular 6,000 m trekking peaks compared on altitude, technical difficulty, summit day, approach and views — with a clear recommendation.",
      keywords: "Mera Peak vs Island Peak, which trekking peak Nepal, Island Peak or Mera, first 6000m peak",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "lobuche-east-peak-climbing-guide",
    title: "Lobuche East Climbing Guide: The Khumbu's Technical Trekking Peak",
    cluster: "climbing",
    date: "2026-10-27",
    hero: {
      image: "mardi-treks/lobuche-east-peak-climbing/lobuche-east-peak-climbing-00-lobuche-east-from-the-southeast",
      alt: "Lobuche East seen from the south-east, Khumbu region, Nepal.",
    },
    excerpt:
      "6,119 m above the Khumbu glacier, with mixed rock and ice, a long summit ridge and a genuine alpine feel — the trekking peak experienced climbers pick over Island Peak, and the standard warm-up for Ama Dablam.",
    intro: [
      { p: "Lobuche East (6,119 m) stands directly above the Khumbu glacier opposite Everest Base Camp, and among the Khumbu's trekking peaks it is the climber's choice. It is lower than Mera and Island Peak, and harder than either: mixed rock and snow on the approach, a steeper and more sustained fixed-rope section, and a long corniced summit ridge." },
      { p: "It is also the peak most commonly used as a warm-up for <strong>Ama Dablam</strong>, because the ground and the rope work are the closest available equivalent. If Island Peak felt straightforward, this is the next step." },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,119 m — Lobuche East. Lobuche West at 6,145 m is a separate, much harder objective"],
                ["Duration", "18 days from Kathmandu"],
                ["High camp", "About 5,400 m"],
                ["Summit day", "10–14 hours round trip"],
                ["Technical grade", "Alpine PD+/AD — mixed rock and ice, sustained fixed rope, corniced ridge"],
                ["Skills needed", "Confident crampon work, jumar, abseil, and comfort on exposed ground"],
                ["Permits", "NMA Group B, Sagarmatha National Park, Khumbu fee"],
                ["Best seasons", "April to mid May, October to November"],
              ],
            },
          },
          { p: "We run it as [[trek:lobuche-east-peak-climbing|an 18-day itinerary]], and in combination as [[trek:lobuche-peak-and-island-peak-climbing|Lobuche with Island Peak in 23 days]], [[trek:pokalde-island-and-lobuche-climbing|Pokalde, Island and Lobuche in 26 days]], and [[trek:three-peaks-climbing-island-lobuche-kyajo-ri|Island, Lobuche and Kyajo Ri in 30 days]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { p: "The approach follows the Everest Base Camp trail — Lukla, Namche, Tengboche, Dingboche with rest days — as far as <strong>Lobuche village (4,938 m)</strong>, and most itineraries include Everest Base Camp and Kala Patthar before turning to the peak. Then:" },
          {
            ul: [
              "<strong>Base camp (about 4,900 m)</strong> on moraine below the peak's south-west flank, with a training day on the glacier.",
              "<strong>High camp (about 5,400 m)</strong> — a small, exposed rock ledge system reached by a steep two to three hour climb. Space is limited and it is a genuinely uncomfortable camp.",
              "<strong>Summit day</strong> — a 1 to 2 a.m. start on mixed rock and snow, then a sustained fixed-rope section on steepening ice, and finally the <strong>summit ridge</strong>: long, narrow, corniced, and the part of the climb that defines it.",
              "<strong>The summit</strong> looks straight across the Khumbu glacier at Everest, Nuptse, Lhotse, Pumori and Ama Dablam — a closer and more dramatic Everest view than Kala Patthar gives.",
              "<strong>The descent</strong> reverses the ridge and abseils the fixed sections, which is where a slow party runs out of day.",
            ],
          },
        ],
      },
      {
        h2: "Why It Is Harder Than Island Peak",
        blocks: [
          {
            table: {
              head: ["", "Lobuche East", "[[trek:island-peak-climbing|Island Peak]]"],
              rows: [
                ["Summit", "6,119 m", "6,189 m"],
                ["Ground", "Mixed rock and ice throughout", "Rock approach, then glacier and snow"],
                ["Fixed rope", "Longer and more sustained, on steeper ice", "One headwall section"],
                ["Summit ridge", "Long, narrow and corniced", "Short and exposed"],
                ["High camp", "Small, exposed rock ledges at 5,400 m", "Sandy flat at 5,200 m"],
                ["Route-finding", "More complex", "Straightforward"],
                ["Crowds", "Fewer", "The busiest trekking peak in Nepal"],
                ["Preparation for Ama Dablam", "The standard warm-up", "Useful but less directly transferable"],
              ],
            },
          },
          { p: "The cornices on the summit ridge deserve a specific mention: they overhang the eastern side and are not always obvious, which is why the rope stays on and why your guide dictates the line. This is a peak where following instructions precisely matters." },
        ],
      },
      {
        h2: "Who Should Climb It",
        blocks: [
          {
            ul: [
              "<strong>Climbers who have already done a trekking peak</strong> — Island Peak, Mera, or an alpine equivalent elsewhere.",
              "<strong>Anyone preparing for Ama Dablam</strong> or a bigger objective. This is the standard preparation and we often run them in sequence.",
              "<strong>Climbers who want a technical day rather than an altitude day.</strong> At 6,119 m it is the lowest of the three main Khumbu peaks.",
              "<strong>Anyone comfortable on exposed ground.</strong> The summit ridge is not the place to discover you are not.",
            ],
          },
          { p: "Who should not: complete beginners. We would send a first-time climber to [[trek:yala-peak-climbing|Yala Peak]] or [[trek:mera-peak-climbing|Mera]] first, or to [[trek:island-peak-climbing|Island Peak]] if the Khumbu is the objective. Lobuche East is the second or third peak, not the first — see our [[post:peak-climbing-in-nepal-beginners-guide|beginner's guide]] for the progression." },
          { h3: "Kit and conditions" },
          { p: "Because the route is mixed rather than purely glaciated, boot choice matters more here than on Mera. A stiff double boot handles the ice well and is clumsy on the rock sections; a single B3 boot is better on rock and colder on the ice. Most climbers on this peak use a double boot and accept the rock awkwardness, and your guide will advise based on the conditions that season." },
          { p: "Beyond that, the list is the standard trekking peak one — harness, crampons, axe, jumar, belay device, helmet, and a -20 °C sleeping bag for high camp — with one addition worth making: a helmet is not optional on Lobuche East. The mixed ground above high camp drops loose rock, and with several parties on the route a helmet is the single most useful piece of personal protective equipment you will carry." },
          { p: "One practical note on the itinerary: because Lobuche East sits directly on the Everest Base Camp route, almost every trip includes Base Camp and Kala Patthar as acclimatisation. That makes it exceptionally good value in experience terms — you get the classic trek and a technical summit in one eighteen-day trip." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Lobuche East?", answer: "6,119 m. It is the standard objective on the Lobuche massif; Lobuche West at 6,145 m is a separate and considerably harder peak requiring a technical traverse, and the two should not be confused when comparing itineraries." },
      { question: "Is Lobuche East harder than Island Peak?", answer: "Yes. It has mixed rock and ice throughout rather than a rock approach and a glacier, a longer and more sustained fixed-rope section on steeper ice, and a long corniced summit ridge. It is lower at 6,119 m, so the difficulty is technical rather than altitude-driven." },
      { question: "Do I need previous climbing experience?", answer: "We recommend it. Lobuche East is best approached as a second or third Himalayan peak, after Island Peak, Mera or an alpine equivalent. A complete beginner is better served by Yala Peak, Mera or Island Peak first." },
      { question: "Is Lobuche East good preparation for Ama Dablam?", answer: "It is the standard warm-up, and we often run them in sequence. The mixed ground, the sustained fixed-rope work and the exposed ridge are the closest available equivalent to what Ama Dablam demands, at a fraction of the commitment." },
      { question: "What is the summit view like?", answer: "It looks straight across the Khumbu glacier at Everest, Nuptse, Lhotse, Pumori and Ama Dablam — a closer and more dramatic Everest view than Kala Patthar gives, because you are higher and directly opposite the face." },
      { question: "What is high camp like?", answer: "Small and exposed — a system of rock ledges at around 5,400 m with limited tent space, reached by a steep two to three hour climb from base camp. It is a genuinely uncomfortable camp and one of the reasons the peak feels more serious than Island Peak." },
      { question: "Does the trip include Everest Base Camp?", answer: "On most itineraries, yes. Lobuche sits directly on the Everest Base Camp trail, so Base Camp and Kala Patthar are included as acclimatisation. That makes an eighteen-day Lobuche East trip unusually good value — the classic trek and a technical summit together." },
      { question: "Can I combine Lobuche East with other peaks?", answer: "Yes — with Island Peak in 23 days, with Pokalde and Island Peak in 26, or with Island Peak and Kyajo Ri in 30. Kyajo Ri is a significant step up in difficulty again, so that combination is for experienced climbers." },
    ],
    relatedTreks: [
      "lobuche-east-peak-climbing",
      "lobuche-peak-and-island-peak-climbing",
      "pokalde-island-and-lobuche-climbing",
      "three-peaks-climbing-island-lobuche-kyajo-ri",
      "ama-dablam-expedition",
    ],
    tripsNote: "Lobuche East alone or in the multi-peak combinations that build toward Ama Dablam.",
    relatedPosts: [
      "island-peak-climbing-guide",
      "ama-dablam-expedition-guide",
      "peak-climbing-in-nepal-beginners-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
    ],
    tags: ["lobuche east", "peak climbing", "khumbu", "technical climbing", "ama dablam preparation"],
    meta: {
      title: "Lobuche East Climbing Guide: The Khumbu's Technical Trekking Peak",
      description: "Climbing Lobuche East at 6,119 m — mixed rock and ice, a sustained fixed-rope section, a corniced summit ridge, and why it is the standard warm-up for Ama Dablam.",
      keywords: "Lobuche East climbing, Lobuche peak Nepal, technical trekking peak, Ama Dablam preparation, Khumbu climbing",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "yala-peak-climbing-guide",
    title: "Yala Peak Climbing Guide: The Best First Himalayan Summit",
    cluster: "climbing",
    date: "2026-10-30",
    hero: {
      image: "mardi-treks/yala-peak-climbing/yala-peak-climbing-00-yala-peak",
      alt: "Yala Peak at 5,520 m above the Langtang valley, Nepal.",
    },
    excerpt:
      "5,520 m in Langtang, reached by road from Kathmandu, with a short summit day and basic rope work — the gentlest genuine Himalayan climb in Nepal, and the right place to find out whether mountaineering suits you.",
    intro: [
      { p: "Yala Peak at <strong>5,520 m</strong> sits above Kyanjin Gompa in the Langtang valley, and it is the most forgiving genuine climbing objective in Nepal. There is a glacier, there are crampons, there is a rope, and there is a summit with a Tibetan border panorama — and the summit day is five to seven hours rather than fifteen." },
      { p: "It is reached by road from Kathmandu, with no mountain flight to be cancelled, and the acclimatisation comes from the Langtang valley trek that precedes it. For anyone who wants to find out whether Himalayan climbing suits them before committing to a 6,000 m peak, this is the answer." },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "5,520 m"],
                ["Duration", "15 days from Kathmandu"],
                ["High camp", "About 4,800 m"],
                ["Summit day", "5–7 hours round trip"],
                ["Technical grade", "Alpine F — a glacier and a snow slope with basic rope work"],
                ["Approach", "Road to Syabrubesi, then the Langtang valley trek — no flight"],
                ["Permits", "NMA Group B, Langtang National Park"],
                ["Best seasons", "March to May, October to November"],
              ],
            },
          },
          { p: "We run it as [[trek:yala-peak-climbing|a 15-day Yala Peak itinerary]] built on the Langtang valley trek." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "The Langtang valley approach" },
          { p: "A road day from Kathmandu to <strong>Syabrubesi</strong>, then the standard Langtang trek up the gorge through Lama Hotel and Langtang village to <strong>Kyanjin Gompa (3,870 m)</strong>. Our [[post:langtang-valley-trek-complete-guide|Langtang guide]] covers this stretch — it is a fine trek in its own right and it does the acclimatisation work." },
          { h3: "Acclimatisation above Kyanjin" },
          { p: "Two days at Kyanjin with climbs to <strong>Kyanjin Ri (4,773 m)</strong> and <strong>Tserko Ri (4,984 m)</strong>. These are not optional extras — they are the acclimatisation that makes a 5,520 m summit comfortable, and they are excellent walks." },
          { h3: "Base camp and high camp" },
          { p: "Up the valley to a base camp at around 4,600 m and a high camp near <strong>4,800 m</strong> below the glacier, with a training day: crampons, ice axe, harness, rope team, and basic fixed-rope technique." },
          { h3: "Summit day" },
          { p: "A pre-dawn start, roped, onto the glacier and up a broad snow slope to the <strong>summit at 5,520 m</strong>. Five to seven hours round trip. From the top: <strong>Shishapangma (8,027 m)</strong> across the border in Tibet — the only eight-thousander entirely within Tibet — plus Langtang Lirung, Langtang Ri, Dorje Lakpa and the Jugal Himal." },
          { h3: "Out" },
          { p: "Back down the Langtang valley to Syabrubesi and Kathmandu by road." },
        ],
      },
      {
        h2: "Why It Works as a First Climb",
        blocks: [
          {
            ul: [
              "<strong>A short summit day.</strong> Five to seven hours, not fifteen. You learn what a climbing day feels like without needing to survive one.",
              "<strong>Basic technical demand.</strong> A glacier and a snow slope with rope work, and no sustained steep ice or exposed corniced ridge.",
              "<strong>Modest altitude.</strong> 5,520 m is high, and it is 650 m to 950 m lower than the Khumbu trekking peaks.",
              "<strong>No mountain flight.</strong> Road access to Syabrubesi removes the biggest logistical risk in Nepali climbing trips.",
              "<strong>A good trek attached.</strong> The Langtang valley to Kyanjin Gompa is worth doing on its own, so the trip is not just an approach.",
              "<strong>Quiet.</strong> A fraction of the Khumbu's climbing traffic.",
              "<strong>Cheaper.</strong> No flights, lower lodge costs, shorter itinerary.",
            ],
          },
          { p: "What it is not: a substitute for Island Peak or Mera if a 6,000 m summit is the goal. It is a step below both, deliberately. Climbers routinely do Yala one season and a 6,000 m peak the next, which is a sound progression." },
        ],
      },
      {
        h2: "What You Still Need",
        blocks: [
          { p: "Easiest does not mean easy. The requirements are real:" },
          {
            ul: [
              "<strong>Hill fitness</strong> to walk five to six hours a day for a week before the climb.",
              "<strong>Willingness to sleep at 4,800 m</strong> in a tent, at around -15 °C.",
              "<strong>Crampons, ice axe, harness and boots</strong> — bring or hire in Kathmandu. Group technical kit is supplied.",
              "<strong>Insurance covering mountaineering to 6,000 m</strong>, which is the same requirement as any peak.",
              "<strong>A licensed climbing guide</strong>, which is a permit condition and included in the trip.",
              "<strong>Engagement with the training day.</strong> Even basic rope work needs practice with gloves on at altitude.",
            ],
          },
          { p: "Our [[post:peak-climbing-gear-list|peak climbing gear list]] sets out exactly what to bring, and [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|the fixed rope guide]] covers the technique." },
        ],
      },
      {
        h2: "Other Gentle First Climbs",
        blocks: [
          {
            table: {
              head: ["Peak", "Altitude", "Days", "Note"],
              rows: [
                ["[[trek:yala-peak-climbing|Yala Peak]]", "5,520 m", "15", "The gentlest — road-accessible, short summit day, Langtang"],
                ["[[trek:naya-kanga-peak-climbing|Naya Kanga]]", "5,844 m", "16", "Also Langtang, a step up in altitude and steepness"],
                ["[[trek:pokalde-peak-climbing|Pokalde]]", "5,806 m", "16", "Khumbu, rocky and short, often added to an EBC trek"],
                ["[[trek:paldor-peak-climbing|Paldor Peak]]", "5,896 m", "14", "Ganesh Himal, very quiet, a genuine expedition feel"],
                ["[[trek:mera-peak-climbing|Mera Peak]]", "6,476 m", "18", "The next step for altitude, still technically easy"],
                ["[[trek:island-peak-climbing|Island Peak]]", "6,189 m", "18", "The next step for technique"],
              ],
            },
          },
          { p: "If Yala goes well and you want the next thing, the usual progression is Yala, then Mera or Island Peak, then Lobuche East, then Ama Dablam. Each step adds one thing rather than several." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Yala Peak?", answer: "5,520 m, above Kyanjin Gompa in the Langtang valley. It is the lowest of the trekking peaks we run and the most forgiving, with a summit day of five to seven hours rather than the twelve to fifteen that Island Peak demands." },
      { question: "Is Yala Peak good for a complete beginner?", answer: "It is the best first Himalayan climb in Nepal. There is a real glacier, crampons, a rope and a summit, but the technical demand is basic, the summit day is short, and the altitude is 650 to 950 m below the Khumbu trekking peaks." },
      { question: "Do I need a flight to reach Yala Peak?", answer: "No — the approach is by road from Kathmandu to Syabrubesi, then the Langtang valley trek to Kyanjin Gompa. That removes the biggest logistical risk in Nepali climbing trips and makes the itinerary considerably cheaper." },
      { question: "What can I see from the summit?", answer: "Shishapangma at 8,027 m across the border in Tibet — the only eight-thousander entirely within Tibet — plus Langtang Lirung, Langtang Ri, Dorje Lakpa and the Jugal Himal. Few 5,500 m summits give a view of an eight-thousander." },
      { question: "How much technical skill do I need?", answer: "None before you arrive. The training day at base camp covers crampons, ice axe, harness, rope team procedure and basic fixed-rope technique, which is all the route requires. Engaging with that training properly is what matters." },
      { question: "How does the acclimatisation work?", answer: "Through the Langtang valley trek itself, with two nights at Kyanjin Gompa at 3,870 m and climbs to Kyanjin Ri at 4,773 m and Tserko Ri at 4,984 m. Those two day walks are what make a 5,520 m summit from a 4,800 m high camp comfortable." },
      { question: "What should I climb after Yala Peak?", answer: "Mera Peak if altitude is the next goal, or Island Peak if technique is. The usual progression is Yala, then Mera or Island, then Lobuche East, then Ama Dablam — each step adding one new element rather than several." },
      { question: "Is Yala Peak cheaper than the Khumbu peaks?", answer: "Yes, meaningfully. There is no Lukla flight, lodge and food costs in Langtang are lower than in the Khumbu, and the itinerary is shorter at fifteen days. The NMA permit is the same Group B rate." },
    ],
    relatedTreks: [
      "yala-peak-climbing",
      "naya-kanga-peak-climbing",
      "paldor-peak-climbing",
      "mera-peak-climbing",
      "island-peak-climbing",
    ],
    tripsNote: "Gentle first climbs and the peaks that follow them in a sensible progression.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "peak-climbing-gear-list",
      "langtang-valley-trek-complete-guide",
      "mera-peak-vs-island-peak",
    ],
    tags: ["yala peak", "peak climbing", "langtang", "beginner climbing", "mountaineering"],
    meta: {
      title: "Yala Peak Climbing Guide: The Best First Himalayan Summit",
      description: "Climbing Yala Peak at 5,520 m in Langtang — road-accessible, a short summit day, basic rope work, and a summit view of Shishapangma in Tibet.",
      keywords: "Yala Peak climbing, easiest peak Nepal, first Himalayan climb, Langtang climbing, beginner mountaineering Nepal",
    },
  },
];
