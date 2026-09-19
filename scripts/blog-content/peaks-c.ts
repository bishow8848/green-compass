import type { BlogContent } from "./build";

export const peaksC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "pokalde-peak-climbing-guide",
    title: "Pokalde Peak Climbing: The Complete Guide",
    cluster: "climbing",
    date: "2027-08-18",
    hero: {
      image: "mardi-treks/pokalde-peak-climbing/pokalde-peak-climbing-00-khumbu-gletscher-vom-lobuche-pass",
      alt: "The Khumbu glacier seen from the Lobuche pass, Everest region, Nepal.",
    },
    excerpt:
      "The most approachable of the Khumbu's climbing peaks and the honest answer for anyone who wants a real summit without a night on a glacier. A rock scramble with a short fixed section — and a view arguably better than Island Peak's.",
    intro: [
      { p: "<strong>Pokalde (5,806 m)</strong> is the most approachable of the Khumbu's permitted climbing peaks, and the honest answer for anyone who wants a real summit without a night on a glacier." },
      { p: "It rises just north of the <strong>Kongma La</strong>, between the Imja and Khumbu valleys, and the climb is mostly a <strong>steep rock scramble on a boulder ridge</strong> with a short section of fixed rope and a snow slope near the top — no crevasses, no headwall, no two o'clock start." },
      { p: "It is also the peak that gets undersold. At 5,806 m it is higher than anything in the Alps or North America, the summit ridge is properly exposed, and the view from the top is arguably better than Island Peak's: <strong>Everest, Lhotse, Nuptse, Makalu, Ama Dablam</strong> and the Khumbu glacier all at once, from a summit almost nobody else is standing on." },
      {
        figure: {
          image: "mardi-treks/pokalde-peak-climbing/pokalde-peak-climbing-04-ama-dablam-from-dingboche",
          alt: "Ama Dablam seen from Dingboche, Everest region, Nepal.",
          caption: "Ama Dablam from Dingboche on the approach. From the Pokalde summit it is one of six major peaks in view.",
        },
      },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "5,806 m"],
                ["The climbing", "Steep rock scramble, a short fixed section, a snow slope near the top"],
                ["Duration", "16 days Kathmandu to Kathmandu"],
                ["Base camp", "5,000 m — no high camp needed"],
                ["Summit day", "5 to 7 hours round trip"],
                ["Summit success rate", "Above 90 percent — the highest of any peak we run"],
                ["Permits", "NMA climbing permit, Sagarmatha and Khumbu municipality fees"],
                ["Price", "From USD 2,350 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:pokalde-peak-climbing|16-day trip]]. It is the step below [[trek:island-peak-climbing|Island Peak]], and the itinerary crosses the [[trek:everest-three-pass-trek|Kongma La]] afterwards so the return is new ground." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Lukla to Chhukung (2,840 m to 4,730 m)" },
          { p: "The standard Khumbu approach — Phakding, <strong>Namche Bazaar</strong> with an acclimatisation day, Tengboche, <strong>Dingboche</strong> with a second acclimatisation day climbing Nangkartshang at 5,083 m, then Chhukung. Seven days of proper acclimatisation before base camp, which is why the success rate is what it is." },
          { h3: "Base camp and the summit (5,000 m to 5,806 m)" },
          { p: "Four to five hours from Chhukung to <strong>base camp at 5,000 m</strong> in the basin below the Kongma La — a tented camp on rocky ground. Summit day is a <strong>five to seven hour round trip</strong> starting around four or five in the morning, which is by a wide margin the shortest summit day of any climbing peak in the Khumbu." },
          { p: "The route is a boulder ridge with a short fixed section and a snow slope and crest near the top. <strong>There are several minor high points that look like the summit from below</strong>, which catches out parties climbing without a guide; the true summit carries prayer flags." },
          {
            figure: {
              image: "mardi-treks/pokalde-peak-climbing/pokalde-peak-climbing-03-lobuche-to-gorak-shep-34-pass-rueckblick-traeger-2007-gje",
              alt: "The trail between Lobuche and Gorak Shep in the Khumbu, Nepal.",
              caption: "The Khumbu valley beyond the Kongma La — the return leg, and new ground rather than the same trail twice.",
            },
          },
          { h3: "Over the Kongma La (5,535 m)" },
          { p: "Rather than retracing to Chhukung, the itinerary crosses the <strong>Kongma La</strong> — the highest of the three Khumbu passes and the least walked, a long day over rough boulder fields and moraine with a stiff climb on both sides — to Lobuche, then walks out through the Khumbu valley via Pangboche and Namche." },
        ],
      },
      {
        h2: "Pokalde or Island Peak?",
        blocks: [
          {
            table: {
              head: ["", "Pokalde", "Island Peak"],
              rows: [
                ["Summit", "5,806 m", "6,189 m"],
                ["The difficulty", "A scramble and a short fixed section", "A glacier, crevasses and 100 m of steep ice"],
                ["Summit day", "5 to 7 hours", "10 to 14 hours"],
                ["High camp", "None — summit from base camp", "Usually a high camp"],
                ["Traffic", "Almost none", "Several hundred climbers a season"],
                ["Success rate", "Above 90%", "Lower"],
              ],
            },
          },
          { p: "Roughly half the technical difficulty and 400 m less height. What Pokalde does not do is make the altitude easy — 5,806 m is still 5,806 m. Our [[post:peak-climbing-in-nepal-beginners-guide|beginner's guide]] puts both in context." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 2,870"],
                ["2 to 4", "USD 2,660"],
                ["5 to 7", "USD 2,510"],
                ["8 to 10", "USD 2,440"],
                ["11 to 14", "USD 2,390"],
                ["15 and over", "USD 2,350"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including Lukla flights, the NMA permit, climbing staff and group technical equipment.",
            },
          },
          { p: "It is the cheapest climbing peak we run, largely because there is no high camp and the summit day needs less staff time than a glacier peak." },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, a climbing briefing and equipment check in Kathmandu.",
              "<strong>Kathmandu–Lukla return flights.</strong>",
              "Hotel accommodation in Kathmandu with breakfast, and teahouses throughout the Khumbu approach and walk out.",
              "<strong>Tented base camp at 5,000 m</strong> with mess, kitchen and toilet tents, and a cook and kitchen crew.",
              "Three meals a day throughout the trip.",
              "<strong>NMA climbing permit for Pokalde</strong>, Sagarmatha National Park entry and the Khumbu municipality fee.",
              "A government-licensed climbing guide and climbing Sherpa support above base camp.",
              "Group climbing equipment — rope, anchors and fixing of the steep section.",
              "A training and skills day covering crampons, fixed-line ascent and abseiling.",
              "Porter transport of group equipment, NMA garbage deposit, summit certificate and all taxes.",
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
              "<strong>Travel insurance covering mountaineering to 5,806 m</strong>, with helicopter evacuation.",
              "Personal climbing equipment — harness, crampons, ice axe, ascender, descender, helmet and carabiners. Available to rent.",
              "Personal trekking equipment and clothing, including a sleeping bag.",
              "Porter services for your personal duffel.",
              "Lunch and dinner in Kathmandu.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for the guide, climbing Sherpas, porters and support staff.",
              "<strong>Extra accommodation or transport caused by a cancelled Lukla flight</strong> or weather.",
            ],
          },
          { p: "You still need crampons despite the absence of a glacier — semi-automatic crampons on stiff trekking boots, for the snow crest and for the Kongma La early or late in the season. See the [[post:lukla-flight-guide|Lukla flight guide]] for the schedule risk." },
        ],
      },
    ],
    faqs: [
      { question: "Is Pokalde really the easiest climbing peak in Nepal?", answer: "Of the peaks that are regularly guided, yes, in terms of technical ground — Yala Peak is easier still but is a walk rather than a climb. What Pokalde does not do is make the altitude easy: 5,806 m is higher than anything in the Alps or North America." },
      { question: "Do I need crampons if there is no glacier?", answer: "Yes, for the snow slope and crest near the summit and for the Kongma La in early or late season. Semi-automatic crampons on stiff trekking boots rather than full mountaineering boots are adequate for this peak." },
      { question: "Where is base camp and what is it like?", answer: "At around 5,000 m in the basin below the Kongma La, reached in four to five hours from Chhukung. It is a tented camp with mess, kitchen and toilet tents on rocky ground, with a cook and kitchen crew. There is no high camp — you summit from here." },
      { question: "How does Pokalde compare with Island Peak?", answer: "About half the technical difficulty and 400 m less height. Island Peak has a glacier, crevasses and a hundred metres of steep ice; Pokalde has a scramble and a short fixed section. Island Peak also has several hundred climbers a season and Pokalde has almost none." },
      { question: "What is the Kongma La like?", answer: "The highest of the three Khumbu passes at 5,535 m and the least walked, because it is a long day over rough boulder fields and moraine with a stiff climb on both sides. Crossing it after the summit means the return is new ground rather than the same trail twice." },
      { question: "Can I add Everest Base Camp to this trip?", answer: "Easily, and it fits naturally — after crossing the Kongma La you are at Lobuche, two hours from Gorak Shep. Adding base camp and Kala Patthar extends the itinerary by two days and needs arranging at booking." },
      { question: "What is the summit success rate?", answer: "Above 90 percent on our departures, the highest of any peak we run. The turn-backs are almost always weather on the ridge or someone still not acclimatised, rather than the climbing itself defeating anyone." },
      { question: "Is there a false summit on Pokalde?", answer: "There are several minor high points along the ridge that look like the top from below, which catches out parties climbing without a guide. The true summit carries prayer flags, and your guide knows which one it is." },
    ],
    relatedTreks: [
      "pokalde-peak-climbing",
      "island-peak-climbing",
      "everest-three-pass-trek",
      "everest-base-camp-trek",
      "yala-peak-climbing",
    ],
    tripsNote: "Khumbu climbing peaks, from the most approachable upward.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "island-peak-climbing-guide",
      "everest-three-passes-trek-guide",
      "nma-peak-permits-and-fees",
      "lukla-flight-guide",
    ],
    tags: ["Pokalde", "Peak Climbing", "Everest Region", "Kongma La", "First Summit"],
    meta: {
      title: "Pokalde Peak Climbing: The Complete Guide",
      description:
        "A 16-day climb of Pokalde (5,806 m), the most approachable Khumbu climbing peak, with a Kongma La crossing. Route, success rate, permits and costs.",
      keywords:
        "pokalde peak climbing, easiest climbing peak nepal, kongma la, khumbu climbing peak, nma peak",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kyajo-ri-peak-climbing-guide",
    title: "Kyajo Ri Peak Climbing: The Complete Guide",
    cluster: "climbing",
    date: "2027-08-21",
    hero: {
      image: "mardi-treks/kyajo-ri-peak-climbing/kyajo-ri-peak-climbing-00-kyazo-ri",
      alt: "Kyajo Ri peak in the Khumbu, Everest region, Nepal.",
    },
    excerpt:
      "The climb to book when you have done Island Peak and found it too crowded and too easy. A genuine AD+ mixed route up a hanging valley with no lodges and no trekking traffic, staffed one Sherpa per climber.",
    intro: [
      { p: "<strong>Kyajo Ri (6,186 m)</strong> is the climb to book when you have done Island Peak and found it too crowded and too easy." },
      { p: "It stands at the head of the <strong>Kyajo Drangka</strong>, a hanging side valley between Namche and Thame that has no lodges, no trekking route and no reason for anyone to walk up it except this mountain. It was only opened to climbing in <strong>2002</strong>, and in a busy season it might see a dozen parties." },
      { p: "The climbing is the real attraction. The <strong>south-west ridge</strong> is a genuine mixed route — rock, snow and ice — with fixed rope on the steep sections, a sharp summit ridge, and a final pyramid that looks improbable from base camp and turns out to go. It is graded <strong>AD+</strong>, a clear category above the trekking peaks most people start on, and it demands that you arrive already able to climb rather than expecting to learn on the mountain." },
      {
        figure: {
          image: "mardi-treks/kyajo-ri-peak-climbing/kyajo-ri-peak-climbing-03-machermo-kyajo-ri-nepal",
          alt: "Kyajo Ri seen from Machhermo, Khumbu, Nepal.",
          caption: "Kyajo Ri. The final pyramid looks improbable from below and turns out to go.",
        },
      },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,186 m"],
                ["Grade", "AD+ — mixed rock, snow and ice with a sharp summit ridge"],
                ["Duration", "16 days Kathmandu to Kathmandu"],
                ["Base camp / high camp", "4,550 m / 5,300 m"],
                ["Staffing", "One climbing Sherpa per climber above base camp"],
                ["Summit success rate", "Around 55 to 65 percent"],
                ["Opened to climbing", "2002"],
                ["Price", "From USD 3,650 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:kyajo-ri-peak-climbing|16-day expedition]]. [[trek:kwangde-peak-climbing|Kwangde]] is its closest equivalent in grade, and [[trek:phari-lapcha-peak-climbing|Phari Lapcha]] is the gentler introduction to technical ground." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Why the itinerary goes via Thame" },
          { p: "Partly for acclimatisation and partly because it is a better valley than the Everest trail. <strong>Thame</strong> sits on the old salt route to Tibet, has a monastery cut into the cliff above it, and carries a fraction of the traffic of the Dudh Koshi route to Base Camp." },
          { h3: "Into the Kyajo Drangka (3,800 m to 4,550 m)" },
          { p: "From Thame into the hanging valley — no lodges, no trail markers, no other parties — to <strong>base camp at 4,550 m</strong> on a yak pasture. A <strong>training and skills day</strong> follows, which on an AD+ route is an assessment as much as a refresher." },
          { h3: "High camp and the summit (5,300 m to 6,186 m)" },
          { p: "Four to five hours to <strong>high camp at 5,300 m</strong> on a shoulder below the route — north-facing, exposed, and <strong>-15 °C to -20 °C overnight</strong>. Summit day takes in the rock buttress, the main ice slopes and the exposed arête, all fixed by our Sherpas the day before, with the easier connecting ground climbed on a short rope." },
          {
            figure: {
              image: "mardi-treks/kyajo-ri-peak-climbing/kyajo-ri-peak-climbing-06-dhole-to-machhermo-48-pass-2007-gje",
              alt: "The trail between Dhole and Machhermo in the Khumbu, Nepal.",
              caption: "Khumbu side-valley country. The Kyajo Drangka has no lodges and no reason to be walked except this mountain.",
            },
          },
          { p: "<strong>The descent is in many ways the harder half.</strong> Abseiling a mixed route on loose ground at the end of a twelve-hour day is where mistakes happen, and it is slow — often four to five hours from the summit." },
        ],
      },
      {
        h2: "Why One Sherpa Per Climber",
        blocks: [
          { p: "On most trekking peaks we staff one climbing Sherpa per two climbers. Here it is one per climber, and the reason is technical rather than commercial." },
          { p: "<strong>Mixed ground does not allow a rope team to move at the pace of its slowest member the way a snow slope does.</strong> On the buttress and the arête each climber needs someone with them — for sequencing, for protection, and because a stuck climber on a rock step holds up everyone behind them on a route with a hard turnaround time." },
          { p: "That staffing is the single biggest line item in the price, and it is not something we will reduce for a cheaper quote." },
        ],
      },
      {
        h2: "Who We Take",
        blocks: [
          {
            ul: [
              "<strong>A previous 6,000 m peak</strong>, or strong alpine experience elsewhere — a season of AD routes in the Alps, or comparable ground in the Andes.",
              "<strong>We will not take someone whose only mountain experience is trekking.</strong> The skills day at base camp is an assessment, not a course.",
              "<strong>Comfort on exposed ground</strong>, including abseiling on loose rock while tired.",
              "<strong>A climbing CV</strong> at the booking stage.",
            ],
          },
          { p: "If you want technical ground but the above reads as a stretch, [[post:phari-lapcha-peak-climbing-guide|Phari Lapcha]] is the peak we recommend for that step. Read the [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed rope and jumar guide]] first either way." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 4,450"],
                ["2 to 4", "USD 4,120"],
                ["5 to 7", "USD 3,910"],
                ["8 to 10", "USD 3,800"],
                ["11 to 14", "USD 3,700"],
                ["15 and over", "USD 3,650"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including Lukla flights, the NMA permit, one Sherpa per climber and all group technical equipment.",
            },
          },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, a climbing briefing, permit and equipment-check day in Kathmandu.",
              "<strong>Kathmandu–Lukla return flights.</strong>",
              "Hotel accommodation in Kathmandu with breakfast, and teahouses on the approach and walk out.",
              "<strong>Tented base camp (4,550 m) and high camp (5,300 m)</strong> with mess, kitchen and toilet tents, and a cook and kitchen crew.",
              "Three meals a day throughout.",
              "<strong>NMA climbing permit for Kyajo Ri</strong>, Sagarmatha National Park entry and the Khumbu municipality fee.",
              "A government-licensed climbing guide and <strong>one climbing Sherpa per climber above base camp</strong>.",
              "Group climbing equipment and <strong>fixing of the rock buttress, the ice slopes and the exposed ridge</strong>.",
              "A training and skills assessment day at base camp, plus a reserve day.",
              "Porter transport of group equipment, NMA garbage deposit, summit certificate and all taxes.",
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
              "<strong>Travel insurance covering technical mountaineering to 6,186 m</strong>, with helicopter evacuation and repatriation.",
              "Personal climbing equipment, including technical tools appropriate to mixed ground.",
              "Personal trekking equipment and clothing, including double boots and a bag rated to -20 °C.",
              "Porter services for your personal duffel.",
              "Lunch and dinner in Kathmandu.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for the guide, climbing Sherpas, porters and support staff.",
              "Extra accommodation or transport caused by a cancelled Lukla flight, weather or an early descent.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "How does Kyajo Ri compare with Island Peak?", answer: "It is a genuinely different kind of climbing. Island Peak is one steep ice wall on a fixed rope with a snow ridge above; Kyajo Ri is a mixed route with rock scrambling, ice slopes and an exposed arête. It is a clear category harder and sees a fraction of the traffic." },
      { question: "Why do you staff Kyajo Ri one Sherpa per climber?", answer: "Because mixed ground does not allow a rope team to move at the pace of its slowest member the way a snow slope does. On the buttress and the arête each climber needs someone with them for sequencing and protection, and a stuck climber holds up everyone behind." },
      { question: "What is base camp like?", answer: "A tented camp at around 4,550 m on a yak pasture in the Kyajo Drangka, with mess, kitchen and toilet tents and a cook crew. There is no lodge and there is usually nobody else in the valley — it has no trekking route and no other reason to be walked." },
      { question: "Is there a fixed rope all the way?", answer: "On the steep sections — the rock buttress, the main ice slopes and the exposed parts of the ridge — fixed by our Sherpas the day before. The easier connecting ground is climbed on a short rope, which is where your own movement competence matters." },
      { question: "What is the summit success rate on Kyajo Ri?", answer: "Around 55 to 65 percent on our departures, which is normal for an AD+ peak and considerably lower than a trekking peak. Weather on the arête and rockfall on the buttress after a thaw are the two commonest reasons for a turnaround." },
      { question: "Can I climb Kyajo Ri without previous 6,000 m experience?", answer: "We will consider strong alpine experience instead — a season of AD routes in the Alps, or comparable ground in the Andes — but we will not take someone whose only mountain experience is trekking. The skills day at base camp is an assessment, not a course." },
      { question: "Why does the itinerary go via Thame?", answer: "Partly for acclimatisation and partly because it is a better valley than the Everest trail. Thame sits on the old salt route to Tibet, has a monastery cut into the cliff above it, and carries a fraction of the traffic of the main Base Camp route." },
      { question: "Is the descent harder than the ascent?", answer: "In many ways, yes. Abseiling a mixed route on loose ground at the end of a twelve-hour day is where mistakes happen, and it is slow — often four to five hours from the summit back to high camp. Your guide plans the turnaround time around it." },
    ],
    relatedTreks: [
      "kyajo-ri-peak-climbing",
      "kwangde-peak-climbing",
      "phari-lapcha-peak-climbing",
      "island-peak-climbing",
      "pachermo-and-kyajo-ri-peak-climbing",
    ],
    tripsNote: "The technical Khumbu peaks, and the trekking peaks below them.",
    relatedPosts: [
      "kwangde-peak-climbing-guide",
      "phari-lapcha-peak-climbing-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
      "island-peak-climbing-guide",
      "peak-climbing-gear-list",
    ],
    tags: ["Kyajo Ri", "Peak Climbing", "Everest Region", "AD+ Grade", "Mixed Climbing"],
    meta: {
      title: "Kyajo Ri Peak Climbing: The Complete Guide",
      description:
        "A 16-day AD+ mixed climb of Kyajo Ri (6,186 m) above the Kyajo Drangka. Route, staffing, experience required, success rate, permits and costs.",
      keywords:
        "kyajo ri climbing, kyajo ri 6186m, technical peak nepal, ad+ khumbu, kyajo drangka, thame climbing",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kwangde-peak-climbing-guide",
    title: "Kwangde Peak Climbing: The Complete Guide",
    cluster: "climbing",
    date: "2027-08-25",
    hero: {
      image: "mardi-treks/kwangde-peak-climbing/kwangde-peak-climbing-00-kongde-ri",
      alt: "Kongde Ri above Namche Bazaar, Everest region, Nepal.",
    },
    excerpt:
      "The wall everyone in Namche looks at and almost nobody climbs. Not the famous Lowe–Breashears north face, but the south-west ridge — a serious, attainable AD+ with a summit that looks straight down onto Namche 2,500 m below.",
    intro: [
      { p: "<strong>Kwangde Ri (6,011 m)</strong> is the wall everyone in Namche looks at and almost nobody climbs. It forms the entire southern skyline of the Sherpa capital, and its <strong>north face</strong> — climbed by <strong>Jeff Lowe and David Breashears in 1982</strong> in a two-day push that is still discussed — is one of the hardest pieces of ice in the Khumbu." },
      { p: "<strong>That face is not what we climb.</strong> The route on this itinerary is the <strong>south-west ridge</strong>, reached from a base camp in a side valley below Thame, and it is a serious but attainable <strong>AD+</strong>: mixed rock and ice, fixed rope on the steep bands, and a long summit ridge with real exposure." },
      { p: "What makes Kwangde special is not difficulty for its own sake but position. You climb a mountain you have been staring at since your second day in the Khumbu, and from the top you look <strong>straight down onto the roofs of Namche 2,500 m below</strong>." },
      {
        figure: {
          image: "mardi-treks/kwangde-peak-climbing/kwangde-peak-climbing-04-mount-kongde-ri-from-namache-bazaar",
          alt: "Kongde Ri seen from Namche Bazaar, Nepal.",
          caption: "Kwangde from Namche. The north face on the left is the Lowe–Breashears line; the route climbs the ridge on the far side.",
        },
      },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,011 m"],
                ["Route", "South-west ridge — mixed rock and ice, fixed on the steep bands"],
                ["Grade", "AD+"],
                ["Duration", "16 days Kathmandu to Kathmandu"],
                ["Base camp / high camp", "4,700 m / 5,400 m"],
                ["Summit success rate", "Around 50 to 60 percent"],
                ["Traffic", "A handful of parties in a normal season"],
                ["Price", "From USD 3,450 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:kwangde-peak-climbing|16-day expedition]]. [[trek:kyajo-ri-peak-climbing|Kyajo Ri]] is its closest match in grade, from the neighbouring valley." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Lukla to Thame (2,840 m to 3,800 m)" },
          { p: "Phakding, <strong>Namche Bazaar</strong> with an acclimatisation day, then west to <strong>Thame</strong> on the old salt route to Tibet. Every day of this approach has Kwangde in front of you, which is either motivating or unnerving depending on the day." },
          { h3: "Approach camp and base camp (4,300 m to 4,700 m)" },
          { p: "Into a side valley south of Thame — an approach camp at 4,300 m, then <strong>base camp at 4,700 m</strong> on moraine below the ridge. A <strong>training and skills day</strong> follows." },
          { h3: "High camp and the summit (5,400 m to 6,011 m)" },
          { p: "One high camp at around <strong>5,400 m</strong> on the shoulder, and a single long summit day from it. Some expeditions have used a second bivouac higher on the ridge; for a guided ascent one high camp and an early start is the better structure." },
          { p: "The summit ridge is <strong>very exposed</strong> — it drops away steeply on both sides for most of its length and is climbed one at a time on fixed line or short rope. If exposure is something you struggle with, this is not the peak." },
          {
            figure: {
              image: "mardi-treks/kwangde-peak-climbing/kwangde-peak-climbing-01-namche-bazaar-from-above",
              alt: "Namche Bazaar seen from above, Everest region, Nepal.",
              caption: "Namche from above. From the Kwangde summit the town sits 2,500 m directly below.",
            },
          },
        ],
      },
      {
        h2: "About That North Face",
        blocks: [
          { p: "It is worth being clear, because the confusion is common. The <strong>north face climbed by Lowe and Breashears in 1982</strong> is a hard technical ice route that <strong>is not guided commercially by anyone</strong>. It remains a serious objective for strong independent alpinists." },
          { p: "What we climb is the <strong>south-west ridge</strong>, which is a different mountain in practice: mixed ground at AD+, fixed on the steep bands, with a long exposed crest. It is a real climb, and it is not the face on the photographs." },
        ],
      },
      {
        h2: "Kwangde or Kyajo Ri?",
        blocks: [
          {
            table: {
              head: ["", "Kwangde Ri", "Kyajo Ri"],
              rows: [
                ["Summit", "6,011 m", "6,186 m"],
                ["Grade", "AD+", "AD+"],
                ["Character", "Difficulty spread along a longer, more exposed ridge", "Difficulty concentrated in a buttress and an arête"],
                ["Success rate", "50–60%", "55–65%"],
                ["The draw", "Looking straight down onto Namche", "A valley with nobody in it"],
                ["From", "USD 3,450", "USD 3,650"],
              ],
            },
          },
          { p: "Very similar in grade; the character is what differs. If exposure is your weakness, Kyajo Ri. If sustained technical difficulty is, Kwangde." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 4,210"],
                ["2 to 4", "USD 3,900"],
                ["5 to 7", "USD 3,690"],
                ["8 to 10", "USD 3,590"],
                ["11 to 14", "USD 3,500"],
                ["15 and over", "USD 3,450"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including Lukla flights, the NMA permit, climbing staff and group technical equipment.",
            },
          },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, a climbing briefing, permit and equipment-check day in Kathmandu.",
              "<strong>Kathmandu–Lukla return flights.</strong>",
              "Hotel accommodation in Kathmandu with breakfast, and teahouses on the approach and walk out.",
              "<strong>Tented approach camp, base camp (4,700 m) and high camp (5,400 m)</strong> with mess, kitchen and toilet tents, and a cook and kitchen crew.",
              "Three meals a day throughout.",
              "<strong>NMA climbing permit for Kwangde</strong>, Sagarmatha National Park entry and the Khumbu municipality fee.",
              "A government-licensed climbing guide and climbing Sherpas above base camp.",
              "Group climbing equipment and <strong>fixing of the steep rock and ice bands</strong>.",
              "A training and skills day at base camp, plus a reserve day.",
              "Porter transport of group equipment, NMA garbage deposit, summit certificate and all taxes.",
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
              "<strong>Travel insurance covering technical mountaineering to 6,011 m</strong>, with helicopter evacuation and repatriation.",
              "Personal climbing equipment, including tools appropriate to mixed ground.",
              "Personal trekking equipment and clothing, including double boots and a bag rated to -20 °C.",
              "Porter services for your personal duffel.",
              "Lunch and dinner in Kathmandu.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for the guide, climbing Sherpas, porters and support staff.",
              "Extra accommodation or transport caused by a cancelled Lukla flight, weather or an early descent.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Is this the famous Kwangde north face route?", answer: "No, and it is worth being clear about that. The north face climbed by Lowe and Breashears in 1982 is a hard technical ice route that is not guided commercially by anyone. We climb the south-west ridge, which is a serious AD+ but a different proposition entirely." },
      { question: "How does Kwangde compare with Kyajo Ri?", answer: "Very similar in grade and both are AD+, but the character differs. Kyajo Ri concentrates its difficulty into a buttress and an arête; Kwangde spreads it along a longer, more exposed ridge. If exposure is your weakness, choose Kyajo Ri." },
      { question: "Can I really see Namche from the summit?", answer: "You look straight down onto it, around 2,500 m below and slightly to the north — the lodges, the terraces and the helipad all clearly visible. It is one of the more striking summit views in the Khumbu for exactly that reason." },
      { question: "Where is Kwangde base camp?", answer: "In a side valley south of Thame at around 4,700 m, on moraine below the ridge. It is a tented camp with mess, kitchen and toilet tents and a cook crew, reached via an approach camp at 4,300 m the previous day." },
      { question: "What is the success rate on Kwangde?", answer: "Around 50 to 60 percent on our departures. The two common reasons for turning back are running out of time on the long ridge and finding the rock bands loaded with unconsolidated snow after a fall. Neither is unusual on an AD+ route." },
      { question: "How exposed is the summit ridge?", answer: "Very. It drops away steeply on both sides for most of its length and is climbed one at a time on fixed line or short rope. If exposure is something you struggle with, this is not the peak to choose — Kyajo Ri or Phari Lapcha are better options." },
      { question: "Do we need two high camps?", answer: "No. One high camp at around 5,400 m on the shoulder, and a single long summit day from it. Some expeditions have used a second bivouac higher on the ridge, but for a guided ascent one camp and an early start is the better structure." },
      { question: "Is Kwangde suitable as a first technical Himalayan peak?", answer: "It can be, for someone with real alpine experience elsewhere — a climber who has done AD routes in the Alps and been to 5,000 m will find it a fair introduction. It is not suitable for someone stepping up directly from trekking." },
    ],
    relatedTreks: [
      "kwangde-peak-climbing",
      "kyajo-ri-peak-climbing",
      "phari-lapcha-peak-climbing",
      "island-peak-climbing",
      "everest-view-trek",
    ],
    tripsNote: "Technical Khumbu peaks, and the valleys they are climbed from.",
    relatedPosts: [
      "kyajo-ri-peak-climbing-guide",
      "phari-lapcha-peak-climbing-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
      "namche-bazaar-acclimatisation-guide",
      "peak-climbing-gear-list",
    ],
    tags: ["Kwangde", "Peak Climbing", "Everest Region", "AD+ Grade", "Namche"],
    meta: {
      title: "Kwangde Peak Climbing: The Complete Guide",
      description:
        "A 16-day AD+ climb of Kwangde Ri (6,011 m) by the south-west ridge above Thame. Route, exposure, success rate, the north face question, permits and costs.",
      keywords:
        "kwangde peak climbing, kongde ri, kwangde south west ridge, thame climbing, technical peak khumbu",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "phari-lapcha-peak-climbing-guide",
    title: "Phari Lapcha Peak Climbing: The Complete Guide",
    cluster: "climbing",
    date: "2027-08-28",
    hero: {
      image: "mardi-treks/phari-lapcha-peak-climbing/phari-lapcha-peak-climbing-00-phari-lapcha",
      alt: "Phari Lapcha above Machhermo in the Gokyo valley, Nepal.",
    },
    excerpt:
      "A compact rocky peak above Machhermo with a short, sharp mixed ridge and a genuine rock step near the top — the peak we recommend most often for the step up into technical ground, with the Gokyo valley as the approach.",
    intro: [
      { p: "<strong>Phari Lapcha (6,017 m)</strong> stands directly above Machhermo in the Gokyo valley, and every trekker walking to the lakes passes beneath it without knowing its name." },
      { p: "It is a compact, rocky peak with a short, sharp route — a <strong>mixed south-east ridge with a genuine rock step near the top</strong> — and it makes a superb objective for a climber who wants technical ground without a fortnight of glacier travel to reach it." },
      { p: "The trip has a second attraction that is not really about the summit. The approach runs up the <strong>Gokyo valley</strong>, past the Dudh Koshi's turquoise lakes and beneath the huge east face of <strong>Cho Oyu</strong>, and the acclimatisation walk from base camp looks across at Gokyo Ri and the <strong>Ngozumpa</strong>, the longest glacier in Nepal. You get a technical AD- climb and one of the finest valleys in the Himalaya in the same sixteen days." },
      {
        figure: {
          image: "mardi-treks/phari-lapcha-peak-climbing/phari-lapcha-peak-climbing-04-machhermo-24-bach-2007-gje",
          alt: "The stream at Machhermo in the Gokyo valley, Nepal.",
          caption: "Machhermo in the Gokyo valley. Base camp sits about two hours off the main trail above here.",
        },
      },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,017 m"],
                ["Grade", "AD- — mixed south-east ridge with one fixed rock step"],
                ["Duration", "16 days Kathmandu to Kathmandu"],
                ["Base camp / high camp", "4,800 m / 5,400 m"],
                ["Summit success rate", "Around 65 to 75 percent"],
                ["The crux", "A rock step at around 5,800 m, climbed in crampons"],
                ["Approach", "The Gokyo valley, via Dole and Machhermo"],
                ["Price", "From USD 3,350 per person"],
              ],
            },
          },
          { p: "We run it as a [[trek:phari-lapcha-peak-climbing|16-day expedition]]. It is the peak we recommend for the step up from [[trek:island-peak-climbing|Island Peak]] before [[trek:kyajo-ri-peak-climbing|Kyajo Ri]] or [[trek:kwangde-peak-climbing|Kwangde]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Lukla to Machhermo (2,840 m to 4,470 m)" },
          { p: "Phakding, <strong>Namche</strong> with an acclimatisation day, then north up the Gokyo valley through <strong>Dole (4,040 m)</strong> to <strong>Machhermo (4,470 m)</strong>. This is the quieter of the two main Khumbu valleys and by common agreement the more beautiful one." },
          { h3: "Base camp and the skills day (4,800 m)" },
          { p: "Two hours off the main trail into a side valley to <strong>base camp at 4,800 m</strong>, then a <strong>training and skills day</strong>. The acclimatisation walk from here looks across at Gokyo Ri and the Ngozumpa glacier." },
          { h3: "High camp and the rock step (5,400 m to 6,017 m)" },
          { p: "High camp at 5,400 m — around -15 °C overnight, cold but not extreme by Khumbu standards, and more sheltered than Kyajo Ri's or Kwangde's. Summit day crosses a <strong>short glacier</strong> roped, climbs the snow slopes, and reaches the <strong>rock step</strong> at around 5,800 m." },
          { p: "The step is moderate in pure grade — around British Severe, or French 4 in rock-shoe terms — but it is climbed <strong>in crampons and mitts at 5,800 m with a considerable drop underneath</strong>, which changes the experience entirely. It is fixed by our Sherpas." },
          {
            figure: {
              image: "mardi-treks/phari-lapcha-peak-climbing/phari-lapcha-peak-climbing-06-cho-la-pass-crossing-nepal-himalayas",
              alt: "The Cho La pass crossing in the Khumbu, Nepal.",
              caption: "High Khumbu ground. The Gokyo side gives the finest valley walking in the region.",
            },
          },
        ],
      },
      {
        h2: "Why This Is the Right Step Up",
        blocks: [
          { p: "We recommend Phari Lapcha more often than any other peak for the move from snow climbs into technical ground, for reasons that are structural rather than sentimental." },
          {
            ul: [
              "<strong>The summit day is shorter</strong> than Kyajo Ri's or Kwangde's.",
              "<strong>The technical ground is concentrated</strong> into one fixed rock step rather than spread along a long ridge.",
              "<strong>The glacier is short</strong> — under an hour, and nothing like the crevassed ground on Mera or the Imja.",
              "<strong>High camp is comparatively sheltered</strong>, which matters more than it sounds at 5,400 m.",
              "<strong>The success rate is 65 to 75 percent</strong>, against 50 to 65 on the harder Khumbu peaks.",
            ],
          },
          { p: "You can climb it without having climbed rock before, provided you have a 6,000 m snow peak behind you and you are honest with your guide at the skills day. The moves are moderate and the step is fixed. What cannot be fixed is a fear of exposure." },
        ],
      },
      {
        h2: "What It Costs",
        blocks: [
          {
            table: {
              head: ["Group size", "Price per person"],
              rows: [
                ["1 climber", "USD 4,090"],
                ["2 to 4", "USD 3,790"],
                ["5 to 7", "USD 3,580"],
                ["8 to 10", "USD 3,480"],
                ["11 to 14", "USD 3,400"],
                ["15 and over", "USD 3,350"],
              ],
              note: "Per person, Kathmandu to Kathmandu, including Lukla flights, the NMA permit, climbing staff and group technical equipment.",
            },
          },
        ],
      },
      {
        h2: "What Is Included",
        blocks: [
          {
            ul: [
              "Airport transfers, a climbing briefing, permit and equipment-check day in Kathmandu.",
              "<strong>Kathmandu–Lukla return flights.</strong>",
              "Hotel accommodation in Kathmandu with breakfast, and teahouses on the Gokyo valley approach.",
              "<strong>Tented base camp (4,800 m) and high camp (5,400 m)</strong> with mess, kitchen and toilet tents, and a cook and kitchen crew.",
              "Three meals a day throughout.",
              "<strong>NMA climbing permit for Phari Lapcha</strong>, Sagarmatha National Park entry and the Khumbu municipality fee.",
              "A government-licensed climbing guide and climbing Sherpas above base camp.",
              "Group climbing equipment and <strong>fixing of the rock step and the steep snow</strong>.",
              "A training and skills day at base camp, plus a reserve day.",
              "Porter transport of group equipment, NMA garbage deposit, summit certificate and all taxes.",
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
              "<strong>Travel insurance covering mountaineering to 6,017 m</strong>, with helicopter evacuation and repatriation.",
              "Personal climbing equipment — harness, crampons, ice axe, ascender, descender, helmet and carabiners. Available to rent.",
              "Personal trekking equipment and clothing, including boots and a bag rated to -20 °C.",
              "Porter services for your personal duffel.",
              "Lunch and dinner in Kathmandu.",
              "Snacks, bottled water, hot showers, Wi-Fi, charging and drinks.",
              "Laundry, phone calls, souvenirs and personal expenses.",
              "Tips for the guide, climbing Sherpas, porters and support staff.",
              "Extra accommodation or transport caused by a cancelled Lukla flight, weather or an early descent.",
              "<strong>Adding the Gokyo lakes</strong> to the itinerary, which is straightforward but extends the trip.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Is Phari Lapcha a good first technical peak?", answer: "It is the one we recommend most often for that step. The summit day is shorter than Kyajo Ri's or Kwangde's, the technical ground is concentrated into one fixed rock step rather than a long ridge, and the success rate is 65 to 75 percent." },
      { question: "How hard is the rock step?", answer: "Moderate in pure grade — around British Severe or French 4 in rock-shoe terms — but climbed in crampons and mitts at 5,800 m with a considerable drop underneath, which changes it completely. It is fixed by our Sherpas and climbed on a jumar." },
      { question: "Do we visit Gokyo on this itinerary?", answer: "The approach goes as far as Machhermo, an hour and a half below the Gokyo lakes, and base camp sits above it. The lakes are not in the standard plan, but adding them is straightforward — tell us at booking and we extend the itinerary." },
      { question: "Where is Phari Lapcha base camp?", answer: "At around 4,800 m in a side valley above Machhermo, roughly two hours off the main trail. It is a tented camp with mess, kitchen and toilet tents and a cook crew, and the acclimatisation walk from it looks across at Gokyo Ri and the Ngozumpa glacier." },
      { question: "Can I climb it if I have never climbed rock before?", answer: "Yes, provided you have a 6,000 m snow peak behind you and you are honest with your guide at the skills day. The step is fixed and the moves are moderate. What we cannot fix on the mountain is a real problem with exposure." },
      { question: "How does Phari Lapcha compare with Island Peak?", answer: "Harder, and different in kind. Island Peak's difficulty is a sustained ice wall; Phari Lapcha's is a short piece of exposed rock. Island Peak is longer in the day and higher; Phari Lapcha is more technical and far quieter." },
      { question: "Is there a glacier to cross?", answer: "A short one below the ridge, crossed roped on the way to the snow slopes. It is nothing like the crevassed ground on Mera or the Imja glacier, and it takes under an hour. Rope-team technique is covered on the skills day." },
      { question: "How cold is high camp?", answer: "Around -15 °C overnight in season at 5,400 m, which is cold but not extreme by Khumbu standards. It is a single night, and the camp is more sheltered than Kyajo Ri's or Kwangde's, which both sit on exposed shoulders." },
    ],
    relatedTreks: [
      "phari-lapcha-peak-climbing",
      "kyajo-ri-peak-climbing",
      "kwangde-peak-climbing",
      "island-peak-climbing",
      "gokyo-lake-trek",
    ],
    tripsNote: "The Gokyo valley and the technical peaks above it.",
    relatedPosts: [
      "kyajo-ri-peak-climbing-guide",
      "kwangde-peak-climbing-guide",
      "gokyo-lakes-trek-guide",
      "island-peak-climbing-guide",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
    ],
    tags: ["Phari Lapcha", "Peak Climbing", "Everest Region", "Gokyo", "Mixed Climbing"],
    meta: {
      title: "Phari Lapcha Peak Climbing: The Complete Guide",
      description:
        "A 16-day AD- climb of Phari Lapcha (6,017 m) above Machhermo, with a fixed rock step near the summit. Route, who it suits, success rate, permits and costs.",
      keywords:
        "phari lapcha climbing, phari lapcha 6017m, machhermo climbing, gokyo valley peak, first technical peak nepal",
    },
  },
];
