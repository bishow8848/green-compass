import type { BlogContent } from "./build";

export const climbingC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nma-peak-permits-and-fees",
    title: "NMA Peak Permits and Fees: Climbing Paperwork in Nepal",
    cluster: "climbing",
    date: "2026-11-03",
    hero: {
      image: "mardi-treks/island-peak-climbing/island-peak-climbing-04-chhukung-to-imja-tse-camp-24-nuptse-imja-tse-2007-gje",
      alt: "Island Peak and Nuptse seen from Chhukung, Everest region, Nepal.",
    },
    excerpt:
      "Trekking peaks, expedition peaks and eight-thousanders all use different permit systems in Nepal. Current fees by group and season, the garbage deposit, liaison officers, the climbing guide requirement, and what insurance must say.",
    intro: [
      { p: "Nepal's climbing permits fall into two systems. The 33 <strong>trekking peaks</strong> between roughly 5,500 m and 6,500 m are administered by the <strong>Nepal Mountaineering Association (NMA)</strong>, with fees that vary by group and season. Everything above that — the expedition peaks and the eight-thousanders — is permitted directly by the <strong>Department of Tourism</strong>, at a different order of cost." },
      { p: "Here is how each works, what it costs, and the conditions that come with it. Fees are revised periodically by both bodies, so treat these as planning figures and confirm before you budget." },
    ],
    sections: [
      {
        h2: "Trekking Peaks: NMA Groups A and B",
        blocks: [
          {
            table: {
              head: ["Group", "Peaks", "Spring", "Autumn", "Winter / summer"],
              rows: [
                ["Group B", "Most trekking peaks — Island, Mera, Lobuche East, Yala, Pokalde, Naya Kanga, Pachermo, Paldor, Singu Chuli, Tharpu Chuli", "USD 250", "USD 125", "USD 70"],
                ["Group A", "The higher NMA peaks — Ama Dablam, Pumori, Kusum Kanguru, Kyajo Ri, Nirekha, Phari Lapcha, Chulu", "USD 400", "USD 200", "USD 100"],
              ],
              note: "Per person. Group sizes are capped and additional members are charged per head. Figures are revised periodically.",
            },
          },
          { p: "Alongside the permit fee:" },
          {
            ul: [
              "<strong>A refundable garbage deposit</strong> — typically USD 250 to 500 per group, returned when the team's waste is brought out and verified.",
              "<strong>National park or conservation area entry</strong> — Sagarmatha, Langtang, Makalu Barun, ACAP, as applicable.",
              "<strong>The Khumbu rural municipality fee</strong> for Everest-region peaks.",
              "<strong>A licensed climbing guide</strong>, which is a permit condition rather than an option.",
            ],
          },
          { p: "On our trips all of this is arranged and included, and what we need from you is a passport scan, photographs and your insurance details. See our [[post:peak-climbing-in-nepal-beginners-guide|trekking peak guide]] for which peaks sit in which group." },
        ],
      },
      {
        h2: "Expedition Peaks and Eight-Thousanders",
        blocks: [
          { p: "Above the NMA list, peaks are permitted by the Department of Tourism with royalties set by altitude band and season, and the difference in scale is substantial." },
          {
            table: {
              head: ["Peak band", "Spring royalty (indicative, per person)", "Notes"],
              rows: [
                ["Everest, south side", "USD 15,000", "Raised from USD 11,000 with effect from September 2025"],
                ["Other 8,000 m peaks — Lhotse, Makalu, Manaslu, Kanchenjunga, Annapurna, Dhaulagiri, Cho Oyu", "USD 1,800", "Autumn and winter rates are lower"],
                ["7,501–7,999 m", "USD 600", "Seasonal variation applies"],
                ["7,001–7,500 m", "USD 500", "Seasonal variation applies"],
                ["6,501–7,000 m", "USD 400", "Seasonal variation applies"],
              ],
              note: "Indicative spring figures for foreign nationals. Autumn is typically half and winter or summer a quarter of the spring rate. Confirm current royalties before budgeting.",
            },
          },
          { p: "Expedition permits also carry:" },
          {
            ul: [
              "<strong>A liaison officer</strong> assigned to the expedition, whose costs the team covers.",
              "<strong>A larger garbage deposit</strong>, typically USD 3,000 to 4,000 on an eight-thousander.",
              "<strong>Insurance and equipment requirements for all Nepali staff</strong>, which reputable operators exceed rather than meet.",
              "<strong>Medical and experience documentation</strong> — since 2025, Everest applicants have been required to show evidence of a previous ascent above 7,000 m, a change intended to reduce inexperienced crowding on the route.",
            ],
          },
          { p: "Our [[post:everest-expedition-guide|Everest expedition guide]] and [[post:eight-thousand-metre-peaks-in-nepal|eight-thousanders guide]] cover what those expeditions actually involve." },
        ],
      },
      {
        h2: "The Climbing Guide Requirement",
        blocks: [
          { p: "A <strong>climbing guide licence</strong> is separate from a trekking guide licence. It requires assessed technical training — rope work, crevasse rescue, high-altitude first aid — and it is a condition of every NMA and expedition permit." },
          {
            ul: [
              "<strong>Trekking peaks:</strong> one licensed climbing guide, with the ratio tightening as the group grows. We run a maximum of three climbers per guide on technical summit days, and one-to-one or two-to-one on the steeper peaks.",
              "<strong>Expedition peaks:</strong> a guide-to-client ratio appropriate to the objective, usually one-to-one on an eight-thousander.",
              "<strong>What it means practically:</strong> the person fixing the rope, setting the turnaround time and making the call to descend is a qualified professional rather than a trekking guide improvising.",
            ],
          },
          { p: "This is a place where operators differ invisibly. A cheap peak trip that sends one climbing guide with eight clients on an Island Peak headwall is technically permitted and practically unsafe, because the guide cannot watch eight people on a fixed rope at 6,000 m." },
        ],
      },
      {
        h2: "Insurance: The Clause That Catches People",
        blocks: [
          { p: "This is the single most common gap we see in climbing bookings. A policy that covers <em>trekking</em> to 6,000 m frequently excludes <em>mountaineering</em> — the use of ropes, crampons and an ice axe — which is exactly what a trekking peak is." },
          { p: "Your policy must state, in the wording rather than the marketing:" },
          {
            ol: [
              "<strong>A maximum altitude</strong> at or above your peak, with margin. For a 6,189 m peak, buy 7,000 m.",
              "<strong>Mountaineering or climbing as a covered activity</strong>, named explicitly, including the use of fixed ropes and crampons.",
              "<strong>Helicopter evacuation and repatriation</strong>, explicitly.",
              "<strong>Medical expenses</strong> of USD 100,000 or more.",
              "<strong>Search and rescue</strong>, which is separate from medical evacuation and matters on a remote peak.",
            ],
          },
          { p: "If the wording is ambiguous, email the insurer naming your peak and its altitude and keep the written answer. Our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] covers the detail, and we will not take a climbing booking without the policy number, the altitude figure and the insurer's 24-hour emergency line." },
        ],
      },
      {
        h2: "Season and the Cost of Going Off-Peak",
        blocks: [
          { p: "NMA fees drop sharply outside spring, which is a genuine saving and a signal about conditions." },
          {
            table: {
              head: ["Season", "Group B fee", "What you are accepting"],
              rows: [
                ["Spring (Mar–May)", "USD 250", "The most settled conditions and the busiest routes"],
                ["Autumn (Sep–Nov)", "USD 125", "Clear air, colder, firmer snow, fewer climbers"],
                ["Winter (Dec–Feb)", "USD 70", "Very cold, high winds, short days, serious commitment"],
                ["Summer (Jun–Aug)", "USD 70", "Monsoon — poor visibility, unstable snow, rarely worth it"],
              ],
            },
          },
          { p: "The honest reading: autumn at half the spring fee is excellent value and often the better season for a technical peak, because the snow is firmer and the air clearer. Winter and summer fees are low because the climbing is genuinely harder, not because the mountain is on sale." },
        ],
      },
    ],
    faqs: [
      { question: "How much does a trekking peak permit cost in Nepal?", answer: "For NMA Group B peaks — Island, Mera, Lobuche East, Yala, Pokalde and most others — USD 250 per person in spring, USD 125 in autumn and USD 70 in winter or summer. Group A peaks such as Ama Dablam and Pumori are USD 400, 200 and 100 respectively." },
      { question: "What is the difference between NMA Group A and Group B?", answer: "Group B covers the lower and more commonly climbed trekking peaks, Group A the higher and more technical ones including Ama Dablam, Pumori, Kyajo Ri and Kusum Kanguru. Group A fees are roughly 60% higher, and the peaks are substantially harder." },
      { question: "How much is an Everest permit?", answer: "USD 15,000 per person for the south side in spring, raised from USD 11,000 with effect from September 2025. Other eight-thousanders are around USD 1,800 in spring, with lower autumn and winter rates. Expedition permits also carry a liaison officer and a large garbage deposit." },
      { question: "Is a climbing guide mandatory?", answer: "Yes, on every NMA and expedition permit. A climbing guide licence is a separate qualification from a trekking guide licence, requiring assessed rope work, crevasse rescue and high-altitude first aid. We run a maximum of three climbers per guide on technical summit days." },
      { question: "What is the garbage deposit?", answer: "A refundable bond — typically USD 250 to 500 per group on a trekking peak and USD 3,000 to 4,000 on an eight-thousander — returned when the team's waste is brought down and verified. It exists because high-altitude waste removal used to be routinely ignored." },
      { question: "Does my travel insurance cover peak climbing?", answer: "Often not. Many policies cover trekking to 6,000 m while excluding mountaineering with ropes, crampons and an ice axe — which is precisely what a trekking peak involves. You need both a maximum altitude above your peak and mountaineering named as a covered activity, in the wording." },
      { question: "Why are permits cheaper in autumn and winter?", answer: "Because conditions are harder, not because the mountain is discounted. Autumn at half the spring rate is genuinely good value — firmer snow, clearer air, fewer climbers. Winter and summer fees are low because winter is very cold and windy and summer is the monsoon." },
      { question: "Do I need to prove previous experience?", answer: "For trekking peaks, no. For Everest, yes — since 2025 applicants have been required to show evidence of a previous ascent above 7,000 m, a rule intended to reduce inexperienced crowding on the route. Other eight-thousanders do not carry the same formal requirement, though reputable operators apply their own." },
    ],
    relatedTreks: [
      "island-peak-climbing",
      "mera-peak-climbing",
      "ama-dablam-expedition",
      "everest-expedition",
      "manaslu-expedition",
    ],
    tripsNote: "Climbing trips across both permit systems — we arrange every permit, deposit and liaison requirement.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "travel-insurance-for-trekking-in-nepal",
      "eight-thousand-metre-peaks-in-nepal",
      "everest-expedition-guide",
    ],
    tags: ["NMA permit", "climbing permits", "peak climbing", "everest permit"],
    meta: {
      title: "NMA Peak Permits and Fees: Climbing Paperwork in Nepal",
      description: "Nepal's climbing permit systems explained — NMA Group A and B trekking peak fees by season, expedition royalties including Everest.",
      keywords: "NMA peak permit, trekking peak permit cost, Everest permit fee, climbing permit Nepal, Group A Group B peaks",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "peak-climbing-gear-list",
    title: "Peak Climbing Gear List for Nepal's Trekking Peaks",
    cluster: "climbing",
    date: "2026-11-06",
    hero: {
      image: "mardi-treks/lobuche-east-peak-climbing/lobuche-east-peak-climbing-01-lobuche-east-peak",
      alt: "The snow-covered summit of Lobuche East, Khumbu region, Nepal.",
    },
    excerpt:
      "Everything you need for a 6,000 m trekking peak — technical equipment, boots, clothing for a -25 °C summit morning — with clear notes on what we supply, what to hire in Kathmandu, and what must come from home.",
    intro: [
      { p: "A trekking peak trip needs everything on a normal high-altitude trekking list, plus a technical layer on top and a significant step up in cold-weather clothing. The summit morning on Island Peak or Mera starts at around -20 to -25 °C with wind, standing still on a glacier in the dark, which is a different proposition from walking uphill at Gorak Shep." },
      { p: "This list covers the standard NMA Group B peaks — Island, Mera, Lobuche East, Yala, Pokalde. Start from our [[post:nepal-trekking-packing-list|general Nepal packing list]] and add what follows." },
    ],
    sections: [
      {
        h2: "Technical Equipment",
        blocks: [
          {
            table: {
              head: ["Item", "Who supplies", "Notes"],
              rows: [
                ["Ropes, ice screws, snow stakes, anchors", "We supply", "Group equipment, carried and placed by the climbing guides"],
                ["Climbing harness", "Bring or hire", "Must fit over full clothing. Try it on with your down trousers."],
                ["Crampons", "Bring or hire", "12-point steel, with the correct binding for your boots. Fit them to the boots before you travel."],
                ["Ice axe", "Bring or hire", "General mountaineering axe, sized to your height"],
                ["Jumar or ascender", "Bring or hire", "The single most used item on summit day. Practise with it."],
                ["Belay device or figure-of-eight", "Bring or hire", "For abseiling the headwall"],
                ["Carabiners", "Bring or hire", "2 locking, 2 non-locking minimum"],
                ["120 cm sling and a cow's tail", "Bring or hire", "For clipping past anchors"],
                ["Helmet", "Bring or hire", "Mandatory on Island Peak and Lobuche East"],
                ["Headlamp", "Bring", "Plus spare batteries kept warm. You climb in the dark for 3 hours."],
              ],
            },
          },
          { p: "Almost all of this hires in Kathmandu for a few dollars a day per item, and the quality is generally adequate. The exceptions worth buying or bringing are the <strong>harness</strong> and the <strong>jumar</strong>: fit matters on the first and familiarity matters enormously on the second." },
        ],
      },
      {
        h2: "Boots: The Decision That Matters",
        blocks: [
          { p: "Trekking boots will not take crampons reliably and will not keep your feet warm at -25 °C. You need mountaineering boots, and there are two realistic options." },
          {
            table: {
              head: ["Type", "Suits", "Note"],
              rows: [
                ["Single mountaineering boot (B2/B3)", "Yala, Pokalde, Island Peak in spring", "Lighter and more comfortable on the approach; marginal for cold at 6,400 m"],
                ["Double mountaineering boot", "Mera, Lobuche East, any winter or late-autumn ascent, and Island Peak for cold feet", "Warmer and stiffer, less pleasant to walk in. The safe choice above 6,000 m."],
              ],
            },
          },
          { p: "Both hire in Kathmandu, and hiring is reasonable if you will not climb again — but <strong>try them on with your climbing socks and fit your crampons to them at the shop</strong>, not at base camp. Wear them for a full day on the approach before the summit push. Ill-fitting boots cause more failed summit attempts on these peaks than technique does." },
          { p: "Also bring: gaiters, two pairs of thick climbing socks, and a pair of overboots if you are climbing Mera in cold conditions." },
        ],
      },
      {
        h2: "Clothing for a -25 °C Summit Morning",
        blocks: [
          { p: "Everything on the standard high-altitude list, plus:" },
          {
            ul: [
              "<strong>Down trousers or insulated salopettes.</strong> The item most often missing, and the one that makes the crampon point bearable.",
              "<strong>An expedition-weight down jacket</strong> with a hood that fits over a helmet. A trekking down sweater is not enough.",
              "<strong>A three-layer glove system</strong> — liners, insulated gloves for climbing, and expedition mittens for the cold sections. You need to operate a jumar and a carabiner in the middle layer.",
              "<strong>A balaclava and a buff</strong>, plus goggles as well as sunglasses. Category 4 lenses for glacier glare, goggles for wind.",
              "<strong>Two thermal base layer sets</strong>, one kept dry for summit day only.",
              "<strong>A hard shell jacket and trousers</strong> with full-length side zips, so you can put the trousers on over boots and crampons.",
              "<strong>Hand and toe warmers.</strong> Cheap, light, and genuinely useful at the crampon point.",
            ],
          },
          { p: "On sleeping kit: a <strong>-25 to -30 °C bag</strong> for high camp on Mera, -20 °C for Island Peak and Lobuche East, plus a liner and a good insulated mat. High camps are on snow or rock ledges, not lodge floors." },
        ],
      },
      {
        h2: "Everything Else",
        blocks: [
          {
            ul: [
              "<strong>Daypack 35–45 litres</strong> with ice axe attachment and compression straps for the rope if you carry one.",
              "<strong>2 × 1 litre insulated bottles.</strong> A bladder hose freezes solid at -20 °C, so no hydration bladders on summit day.",
              "<strong>A thermos</strong>, which is the single most appreciated item at the crampon point.",
              "<strong>High-calorie snacks you can eat with gloves on</strong> — gels, bars, chocolate. Appetite at 6,000 m is poor and cold bars are hard work.",
              "<strong>Factor 50 sunscreen and zinc stick</strong>, plus SPF lip balm. Glacier reflection burns under the chin and inside the nose.",
              "<strong>Personal first aid</strong> including blister kit, painkillers, and any prescription medication. Guides carry group medical kit and oxygen.",
              "<strong>Power bank and spare camera batteries</strong>, kept in your sleeping bag.",
              "<strong>A pee bottle.</strong> Leaving a tent at 5,800 m at 1 a.m. is worth avoiding.",
            ],
          },
        ],
      },
      {
        h2: "Buy, Hire, or Bring: A Summary",
        blocks: [
          {
            table: {
              head: ["Category", "Recommendation"],
              rows: [
                ["Mountaineering boots", "Hire in Kathmandu if climbing once; buy if you intend to continue. Fit crampons at the shop."],
                ["Harness", "Bring — fit over full clothing matters"],
                ["Jumar and belay device", "Bring — familiarity matters more than quality"],
                ["Crampons and ice axe", "Hire is fine, but fit crampons to your boots before leaving Kathmandu"],
                ["Helmet", "Hire is fine"],
                ["Down jacket and down trousers", "Hire in Kathmandu is excellent value for expedition-weight kit"],
                ["Sleeping bag", "Hire to -30 °C in Kathmandu, or bring your own with a liner"],
                ["Base layers, shell, gloves", "Bring from home — fit and quality matter and they are cheap enough"],
                ["Goggles and category 4 sunglasses", "Bring, with a spare pair of glasses"],
                ["Group technical equipment", "We supply — ropes, screws, anchors, oxygen, medical kit"],
              ],
            },
          },
          { p: "Allow a full day in Kathmandu before departure for hiring and fitting, and your climbing guide will run a kit check at the pre-trip briefing. That is the moment a problem can still be fixed. Our [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed rope guide]] covers how to use the technical items once you have them." },
        ],
      },
    ],
    faqs: [
      { question: "What technical equipment do I need for a trekking peak?", answer: "A harness, crampons, an ice axe, a jumar, a belay device, carabiners, a sling and a helmet. Group equipment — ropes, ice screws, anchors — is supplied by us. Almost all personal technical kit can be hired in Kathmandu, though the harness and jumar are worth bringing." },
      { question: "Do I need mountaineering boots, or will trekking boots do?", answer: "You need mountaineering boots. Trekking boots will not take crampons reliably and will not keep your feet warm at -25 °C. Single B2/B3 boots suit Yala, Pokalde and spring Island Peak; double boots are the safe choice for Mera, Lobuche East and any cold-season ascent." },
      { question: "Can I hire climbing gear in Kathmandu?", answer: "Yes, and for a single trip it makes sense — boots, crampons, axe, harness, helmet, expedition down jacket and down trousers, and a -30 °C sleeping bag all hire for a few dollars a day each. Allow a full day for fitting, and fit your crampons to your boots at the shop." },
      { question: "How cold does summit day get?", answer: "Around -20 to -25 °C with wind at the crampon point on Island Peak or Mera, and colder at Mera's 5,800 m high camp. You are standing still on a glacier in the dark, which is why down trousers and a three-layer glove system matter more than they would on a trek." },
      { question: "What sleeping bag rating do I need?", answer: "-25 to -30 °C for Mera's high camp at 5,800 m, and -20 °C for Island Peak and Lobuche East, with a liner in both cases. High camps are tents on snow or rock ledges, so an insulated mat matters as much as the bag." },
      { question: "Why no hydration bladder on summit day?", answer: "The hose freezes solid within an hour at -20 °C and you cannot clear it. Use two one-litre insulated bottles carried inside your pack or jacket, plus a thermos, which is the single most appreciated item at the crampon point." },
      { question: "What should I definitely bring from home?", answer: "Your harness, jumar, base layers, shell jacket and trousers, gloves, goggles and category 4 sunglasses, and any prescription medication. Everything bulky and expensive — boots, down jacket, down trousers, sleeping bag — is better hired in Kathmandu." },
      { question: "Who supplies the ropes and anchors?", answer: "We do. Ropes, ice screws, snow stakes and anchors are group equipment carried and placed by the licensed climbing guides, along with emergency oxygen and the group medical kit. You are responsible only for personal equipment." },
    ],
    relatedTreks: [
      "island-peak-climbing",
      "mera-peak-climbing",
      "lobuche-east-peak-climbing",
      "yala-peak-climbing",
    ],
    tripsNote: "Trekking peak trips this list is written for — group technical equipment is included on all of them.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
      "nepal-trekking-packing-list",
      "island-peak-climbing-guide",
    ],
    tags: ["peak climbing", "gear list", "mountaineering equipment", "packing"],
    meta: {
      title: "Peak Climbing Gear List for Nepal's Trekking Peaks",
      description: "A complete gear list for Nepal's 6,000 m trekking peaks — technical equipment, mountaineering boots, clothing for a -25 °C summit morning.",
      keywords: "peak climbing gear list Nepal, Island Peak equipment, mountaineering boots Nepal, climbing gear hire Kathmandu",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "fixed-rope-and-jumar-skills-for-nepal-peaks",
    title: "Fixed Rope and Jumar Skills for Nepal's Peaks",
    cluster: "climbing",
    date: "2026-11-10",
    hero: {
      image: "mardi-treks/mera-peak-climbing/mera-peak-climbing-04-valley-of-the-river-hinky-5th-day-hike-the-weather-is-bad-tr",
      alt: "The Hinku valley on the approach to Mera Peak, Nepal.",
    },
    excerpt:
      "The technique that decides whether you summit: moving efficiently on fixed rope. Jumar mechanics, clipping past anchors, abseiling down, and the drills worth practising at home before you fly.",
    intro: [
      { p: "On Island Peak, Lobuche East, Ama Dablam and every eight-thousander in Nepal, the steep ground is climbed on <strong>fixed rope</strong> — a line anchored by the guides or by the route-fixing team, ascended using a mechanical ascender called a <strong>jumar</strong>. How efficiently you use it is, more than fitness or willpower, what determines whether you reach a summit." },
      { p: "That is an unglamorous fact and a useful one, because it is the most trainable part of Himalayan climbing. A climber who can jumar smoothly covers a 150 m headwall in ninety minutes. A climber who cannot takes three or four hours, misses the turnaround time, and goes down." },
    ],
    sections: [
      {
        h2: "How a Jumar Works",
        blocks: [
          { p: "A jumar is a handled cam device that slides freely up a rope and locks under load. Two of them, or one plus a foot loop, let you climb a rope directly." },
          {
            ol: [
              "<strong>Attach</strong> the jumar to the rope with the cam engaged, and clip it to your harness with a short sling — the <em>cow's tail</em>.",
              "<strong>Weight it</strong> to check it locks before you commit.",
              "<strong>Slide it up</strong> the rope with one hand while your weight is on your feet.",
              "<strong>Step up</strong> on your crampon points, transferring weight onto the jumar as you rise.",
              "<strong>Repeat.</strong> On steep ice the rhythm is push-step-push-step, and it should be continuous rather than a series of hauls.",
            ],
          },
          { p: "The commonest mistake is pulling yourself up with your arms. Your legs are far stronger than your arms and you have far less oxygen than usual — so the jumar is a balance point and a ratchet, not a rope to haul on. Climbers who arm-haul a headwall at 6,000 m are finished halfway up it." },
        ],
      },
      {
        h2: "The Skills Drilled on Every Trip",
        blocks: [
          { p: "Our climbing guides run one or two full training days at base camp. What they cover, and what you should be able to do with gloves on and without thinking:" },
          {
            ul: [
              "<strong>Fitting a harness over full clothing</strong> — including down trousers — and checking it.",
              "<strong>Walking in crampons</strong> — flat-footing on moderate ground, front-pointing on steep ice, and keeping points clear of gaiters and rope.",
              "<strong>Ice axe use</strong> — as a walking aid, in self-belay position on a traverse, and a self-arrest from a slip.",
              "<strong>Jumar ascent</strong> on a fixed line at increasing angles.",
              "<strong>Clipping past an anchor</strong> — the manoeuvre where the rope is anchored mid-pitch and you must transfer your jumar and cow's tail past it without ever being unclipped. This is the one to practise most.",
              "<strong>Abseiling</strong> with a figure-of-eight or belay device, and arm-wrapping on moderate ground.",
              "<strong>Roped glacier travel</strong> — spacing, keeping the rope off the snow, and crevasse fall response.",
              "<strong>Communication</strong> — the calls used on the rope, which matter when wind makes speech useless.",
            ],
          },
        ],
      },
      {
        h2: "What to Practise Before You Fly",
        blocks: [
          { p: "None of this requires mountains. A climbing wall, a tree, or a stairwell with a rope will do." },
          {
            ol: [
              "<strong>Jumar on a hanging rope</strong> until the rhythm is automatic. Twenty metres, ten times, is worth more than any amount of reading.",
              "<strong>Do it wearing gloves.</strong> Everything is harder with insulated gloves on, and that is how you will climb.",
              "<strong>Practise clipping past an anchor</strong> slowly, then faster, then with gloves, then with your eyes half shut. This is the manoeuvre that goes wrong.",
              "<strong>Set up an abseil</strong> and take it apart, ten times.",
              "<strong>Walk in your crampons</strong> on a hard surface or grass to get used to the width of your stance and the placement of your feet.",
              "<strong>Train your legs for step-ups</strong> — weighted box step-ups are the closest gym equivalent to front-pointing a headwall.",
            ],
          },
          { p: "If you can find a one-day alpine skills course at home, take it. It is the single highest-value preparation for a Nepali trekking peak, and it means the base camp training day becomes revision rather than instruction." },
        ],
      },
      {
        h2: "Summit Day Realities",
        blocks: [
          { p: "Things that are obvious afterwards and not beforehand." },
          {
            ul: [
              "<strong>You will be cold and slow.</strong> At 6,000 m in the dark, every action takes three times as long as it does at the wall. Allow for it rather than fighting it.",
              "<strong>There may be a queue.</strong> On Island Peak's headwall in peak season, several groups can be on the line at once, which means waiting in the cold. Your guide will start early for exactly this reason.",
              "<strong>Gloves come off and go back on constantly.</strong> Have a system, and never put a glove down on snow.",
              "<strong>Keep your cow's tail short.</strong> A long sling means you slump below the jumar and waste energy regaining height.",
              "<strong>Never unclip both attachments at once.</strong> Ever. This is the whole discipline of clipping past an anchor.",
              "<strong>Descending the rope is faster and more dangerous.</strong> Most incidents on fixed rope happen on the way down, when people are tired and the urgency has gone.",
              "<strong>Your guide's turnaround time is not negotiable.</strong> It exists because the descent takes as long as the ascent and the weather does not wait.",
            ],
          },
        ],
      },
      {
        h2: "Which Peaks Need What",
        blocks: [
          {
            table: {
              head: ["Peak", "Fixed rope demand", "What to be able to do"],
              rows: [
                ["[[trek:yala-peak-climbing|Yala Peak]]", "Minimal — short sections", "Crampons, axe, basic rope team"],
                ["[[trek:mera-peak-climbing|Mera Peak]]", "A short steep step near the summit", "Crampons, glacier travel, one short jumar section"],
                ["[[trek:island-peak-climbing|Island Peak]]", "100–150 m headwall at 45–50°, plus an exposed ridge", "Confident jumar and abseil, clipping past anchors"],
                ["[[trek:lobuche-east-peak-climbing|Lobuche East]]", "Longer, sustained, on mixed ground", "All of the above, efficiently, on rock and ice"],
                ["[[trek:ama-dablam-expedition|Ama Dablam]]", "Extensive — multiple pitches, the Yellow Tower, the Grey Couloir", "Fast, automatic rope work and prior experience"],
                ["[[trek:everest-expedition|Everest]]", "Fixed rope from the Icefall to the summit", "Professional-level efficiency over many days"],
              ],
            },
          },
          { p: "The progression is deliberate. Each peak adds one element, and doing them in order means you learn the skill before you need it under pressure. Our [[post:peak-climbing-in-nepal-beginners-guide|beginner's guide]] sets out the sequence, and [[post:peak-climbing-gear-list|the gear list]] covers the hardware." },
        ],
      },
    ],
    faqs: [
      { question: "What is a jumar and how does it work?", answer: "A handled mechanical ascender that slides freely up a rope and locks under load. Clipped to your harness with a short sling, it lets you climb a fixed rope directly: slide it up with one hand while your weight is on your feet, step up on crampon points, transfer weight, repeat." },
      { question: "Why does jumar technique matter so much?", answer: "Because it is the bottleneck on every steep section. A climber who jumars smoothly covers Island Peak's 150 m headwall in around ninety minutes; one who cannot takes three or four hours, misses the guide's turnaround time and descends without summiting. It is the most trainable part of Himalayan climbing." },
      { question: "What is the most common jumar mistake?", answer: "Hauling with your arms. Your legs are far stronger and oxygen is scarce, so the jumar is a balance point and a ratchet rather than a rope to pull on. Climbers who arm-haul a headwall at 6,000 m are exhausted halfway up." },
      { question: "What should I practise before coming to Nepal?", answer: "Jumaring a hanging rope until the rhythm is automatic, wearing gloves, and clipping past an anchor repeatedly — that last manoeuvre is the one that goes wrong. Setting up and dismantling an abseil, and weighted box step-ups for the legs, are the other two high-value drills." },
      { question: "Is the training on the trip enough?", answer: "For the standard trekking peaks, yes — we run one or two full training days at base camp covering everything the route requires. But the training day becomes revision rather than instruction if you have practised beforehand, and that difference shows up on summit day." },
      { question: "What is clipping past an anchor?", answer: "Where a fixed rope is anchored mid-pitch, you must transfer your jumar and cow's tail past the anchor without ever being unclipped from the system. It is the single most important safety manoeuvre on fixed rope, and the one most worth drilling until it is automatic." },
      { question: "Is descending the fixed rope easier?", answer: "Faster, and statistically more dangerous. Most incidents on fixed rope happen on the descent, when climbers are tired, cold and mentally finished with the climb. Abseiling or arm-wrapping down demands the same discipline as going up." },
      { question: "Should I take an alpine skills course at home first?", answer: "If you can, yes — a one-day course is the highest-value preparation available for a Nepali trekking peak. It does not replace the base camp training, but it converts that day from learning new skills at altitude into refreshing familiar ones." },
    ],
    relatedTreks: [
      "island-peak-climbing",
      "lobuche-east-peak-climbing",
      "mera-peak-climbing",
      "ama-dablam-expedition",
    ],
    tripsNote: "Climbing trips where these skills are taught and drilled at base camp before the summit push.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "peak-climbing-gear-list",
      "island-peak-climbing-guide",
      "ama-dablam-expedition-guide",
    ],
    tags: ["fixed rope", "jumar", "climbing skills", "peak climbing", "mountaineering technique"],
    meta: {
      title: "Fixed Rope and Jumar Skills for Nepal's Peaks",
      description: "How to move efficiently on fixed rope — jumar mechanics, clipping past anchors, abseiling, the drills to practise at home, and which Nepali peaks demand what.",
      keywords: "jumar technique, fixed rope climbing, Island Peak headwall, ascender technique, Himalayan climbing skills",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "ama-dablam-expedition-guide",
    title: "Ama Dablam Expedition Guide: The Matterhorn of the Himalaya",
    cluster: "climbing",
    date: "2026-11-13",
    hero: {
      image: "mardi-treks/ama-dablam-expedition/ama-dablam-expedition-00-ama-dablam-from-dingboche",
      alt: "Ama Dablam seen from Dingboche, Khumbu region, Nepal.",
    },
    excerpt:
      "6,812 m of steep granite and ice on the south-west ridge — technically the hardest thing most Himalayan climbers ever do, and a serious step above any trekking peak. What it demands, the route camp by camp, and how to prepare.",
    intro: [
      { p: "Ama Dablam is the mountain in every photograph of the Khumbu — a granite and ice pyramid above the Tengboche valley that climbers have called the Matterhorn of the Himalaya since the 1960s. It is 6,812 m, it is an NMA Group A peak, and the standard <strong>south-west ridge</strong> is a sustained technical climb on rock, ice and mixed ground." },
      { p: "It is not a trekking peak with a bigger number. Where Island Peak has one headwall, Ama Dablam has multiple roped pitches, a rock tower, a traverse and a steep ice couloir, with exposure throughout. Most climbers who summit it have done two or three Himalayan trekking peaks and have alpine experience elsewhere." },
    ],
    sections: [
      {
        h2: "The Expedition at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,812 m"],
                ["Duration", "30 days from Kathmandu on the standard expedition"],
                ["Route", "South-west ridge — the standard and by far the most climbed line"],
                ["Technical grade", "Alpine D — sustained rock and ice, UIAA IV/V rock moves, 60–70° ice"],
                ["Camps", "Base camp 4,600 m, Camp 1 5,700 m, Camp 2 5,900 m, Camp 3 6,300 m"],
                ["Permit", "NMA Group A — USD 400 spring, USD 200 autumn, USD 100 winter/summer"],
                ["Best season", "Late October to November, and April to May"],
                ["Prerequisite", "Prior 6,000 m climbing experience and confident technical rope work"],
              ],
            },
          },
          { p: "We run it as [[trek:ama-dablam-expedition|a 30-day expedition]], [[trek:short-ama-dablam-expedition|a 23-day compressed version]] for acclimatised climbers, [[trek:ama-dablam-expedition-with-helicopter-return|a 28-day version with helicopter return]], and [[trek:ama-dablam-expedition-and-island-peak-climbing|a 35-day expedition combining it with Island Peak]] as acclimatisation." },
        ],
      },
      {
        h2: "The Route, Camp by Camp",
        blocks: [
          { h3: "Base camp (4,600 m)" },
          { p: "A meadow below the south-west ridge, reached from Pangboche on the Everest Base Camp trail. Expeditions base here for two to four weeks, with a cook tent, dining tent and individual tents, and run rotations up the route for acclimatisation and load-carrying." },
          { h3: "Camp 1 (5,700 m)" },
          { p: "Reached by a long day on steep grass, slabs and scree, with scrambling and some fixed rope near the top. Camp 1 is a set of small ledges on the ridge crest — spectacular, exposed, and a fraction of the size of a trekking peak's base camp." },
          { h3: "Camp 1 to Camp 2 (5,900 m) — the Yellow Tower" },
          { p: "The technical crux of the lower route. The ridge narrows to a rock arête with UIAA IV and V moves, and the <strong>Yellow Tower</strong> is a near-vertical granite step climbed on fixed rope with a jumar. Camp 2 above it is a famous and genuinely alarming site: two or three tents on a rock pinnacle with drops on both sides." },
          { h3: "Camp 2 to Camp 3 (6,300 m) — the Grey Couloir" },
          { p: "Mixed ground and then the <strong>Grey Couloir</strong>, a steep ice runnel at 60 to 70 degrees, ascended on fixed rope. Above it the route crosses onto the <strong>Mushroom Ridge</strong> and the snow shoulder where Camp 3 sits beneath the final face. This camp has been hit by serac collapse historically and many modern expeditions minimise time there or skip it." },
          { h3: "Summit day" },
          { p: "From Camp 3, steep snow and ice up the hanging glacier and the final summit slopes to the top at <strong>6,812 m</strong>. Eight to twelve hours return, with Everest, Lhotse, Makalu and the whole Khumbu below. Then the long descent, abseiling the Grey Couloir and the Yellow Tower over one or two days." },
        ],
      },
      {
        h2: "What It Demands",
        blocks: [
          {
            ul: [
              "<strong>Prior 6,000 m experience.</strong> We ask for it. Island Peak and Lobuche East, or alpine routes at equivalent grade, are the standard preparation — and [[trek:lobuche-east-peak-climbing|Lobuche East]] in particular is the closest available rehearsal.",
              "<strong>Confident, fast rope work.</strong> Jumaring, abseiling and clipping past anchors must be automatic, on steep ground, with gloves, while tired. See our [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed rope guide]].",
              "<strong>Comfort with sustained exposure.</strong> The ridge between Camp 1 and Camp 2 is continuously exposed, and Camp 2 itself is a pinnacle. This is not something training resolves.",
              "<strong>Rock climbing competence</strong> in boots and gloves at around UIAA IV/V on the Yellow Tower.",
              "<strong>Expedition patience.</strong> Three to four weeks on the mountain, with rotations, weather days and long waits. More expeditions fail to weather and illness than to the climbing.",
              "<strong>Full expedition kit</strong> — double boots, expedition down, a -30 °C bag, and the technical rack. See our [[post:peak-climbing-gear-list|gear list]] and add a second set of technical hardware.",
            ],
          },
          { p: "On risk: Ama Dablam has a serious accident history, much of it associated with serac collapse above Camp 3 and with incidents on the descent. It is a harder and more dangerous mountain than its beauty suggests, and a reputable operator will turn a team around rather than push a marginal window." },
        ],
      },
      {
        h2: "How Expeditions Are Run",
        blocks: [
          {
            ul: [
              "<strong>Route fixing.</strong> The south-west ridge is fixed each season by Sherpa teams, usually cooperatively between operators. Your permit contributes to that.",
              "<strong>Rotations.</strong> Climbers move up to Camp 1 and Camp 2 and return to base camp, two or three times, to acclimatise and carry loads before a summit push.",
              "<strong>Guide ratio.</strong> One-to-one or one-to-two on the technical ground. This is not a mountain for large groups on a single rope.",
              "<strong>Weather windows.</strong> A summit push needs two to three settled days. Expeditions typically have two or three chances in a four-week window.",
              "<strong>Oxygen.</strong> Not normally used on Ama Dablam, but carried for emergencies.",
              "<strong>Communications.</strong> Satellite phone and radio contact between camps and base, and a doctor or trained medic on larger expeditions.",
            ],
          },
          { p: "The compressed [[trek:short-ama-dablam-expedition|23-day version]] works by arriving pre-acclimatised — typically after another Himalayan trip — and it is only appropriate if you genuinely are. The [[trek:ama-dablam-expedition-and-island-peak-climbing|35-day version with Island Peak]] builds that acclimatisation in, and is the better structure for most climbers on their first attempt." },
        ],
      },
      {
        h2: "What Comes After",
        blocks: [
          {
            table: {
              head: ["Objective", "Altitude", "Step up from Ama Dablam"],
              rows: [
                ["[[trek:pumori-expedition|Pumori]]", "7,161 m", "Higher, less technical on the standard route, and serious objective danger"],
                ["[[trek:baruntse-expedition|Baruntse]]", "7,129 m", "A first 7,000 m peak — high-altitude endurance rather than technical difficulty"],
                ["[[trek:thamserku-expedition|Thamserku]]", "6,623 m", "Comparable technical difficulty, far less climbed"],
                ["[[trek:manaslu-expedition|Manaslu]]", "8,163 m", "The standard first eight-thousander"],
                ["[[trek:everest-expedition|Everest]]", "8,848 m", "A different scale of commitment entirely"],
              ],
            },
          },
          { p: "Ama Dablam is the usual technical benchmark before a first 7,000 m or 8,000 m objective, and many climbers treat it as preparation for [[post:manaslu-expedition-guide|Manaslu]]. It is also a worthwhile summit in its own right, and a significant number of climbers come back for it rather than going higher." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Ama Dablam?", answer: "6,812 m. It is an NMA Group A peak climbed by its south-west ridge, with camps at 5,700 m, 5,900 m and 6,300 m above a base camp at 4,600 m reached from Pangboche on the Everest Base Camp trail." },
      { question: "Is Ama Dablam harder than a trekking peak?", answer: "Substantially. It is a sustained technical climb with multiple roped pitches, UIAA IV and V rock moves on the Yellow Tower, a 60 to 70 degree ice couloir, and continuous exposure — against Island Peak's single headwall. We ask for prior 6,000 m climbing experience." },
      { question: "What is the Yellow Tower?", answer: "A near-vertical granite step on the ridge between Camp 1 and Camp 2, climbed on fixed rope with a jumar and involving UIAA IV to V moves in boots and gloves. It is the technical crux of the lower route and the reason rock competence matters on this mountain." },
      { question: "What experience do I need?", answer: "Prior Himalayan climbing at 6,000 m — Island Peak and Lobuche East are the standard preparation, with Lobuche East the closest rehearsal — plus fast, automatic rope work and genuine comfort with sustained exposure. Alpine routes at equivalent grade elsewhere also count." },
      { question: "How long is an Ama Dablam expedition?", answer: "Thirty days on our standard itinerary, including acclimatisation rotations and weather days. A 23-day compressed version exists for climbers arriving already acclimatised, and a 35-day version climbs Island Peak first, which is the better structure for a first attempt." },
      { question: "Is Ama Dablam dangerous?", answer: "It has a serious accident history, much of it associated with serac collapse above Camp 3 and with incidents on the descent. Many modern expeditions minimise time at Camp 3 for that reason. It is harder and more hazardous than its appearance suggests." },
      { question: "Is supplementary oxygen used?", answer: "Not normally on Ama Dablam — at 6,812 m most climbers summit without it. Oxygen is carried for emergencies, along with a comprehensive medical kit, satellite communications and radio contact between camps." },
      { question: "What does the permit cost?", answer: "Ama Dablam is NMA Group A: USD 400 per person in spring, USD 200 in autumn and USD 100 in winter or summer, plus Sagarmatha National Park entry, the Khumbu municipality fee and a garbage deposit. Autumn is the most popular season." },
    ],
    relatedTreks: [
      "ama-dablam-expedition",
      "short-ama-dablam-expedition",
      "ama-dablam-expedition-with-helicopter-return",
      "ama-dablam-expedition-and-island-peak-climbing",
      "lobuche-east-peak-climbing",
    ],
    tripsNote: "Ama Dablam in every format we run, plus the trekking peak that best prepares you for it.",
    relatedPosts: [
      "lobuche-east-peak-climbing-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
      "manaslu-expedition-guide",
      "eight-thousand-metre-peaks-in-nepal",
    ],
    tags: ["ama dablam", "expedition", "technical climbing", "khumbu", "mountaineering"],
    meta: {
      title: "Ama Dablam Expedition Guide: The Matterhorn of the Himalaya",
      description: "Climbing Ama Dablam's south-west ridge at 6,812 m — the Yellow Tower, the Grey Couloir, camps and rotations, what experience it demands, and the risks involved.",
      keywords: "Ama Dablam expedition, Ama Dablam south west ridge, Yellow Tower, Grey Couloir, technical climbing Nepal",
    },
  },
];
