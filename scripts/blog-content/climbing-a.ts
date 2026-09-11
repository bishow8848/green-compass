import type { BlogContent } from "./build";

export const climbingA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "peak-climbing-in-nepal-beginners-guide",
    title: "Peak Climbing in Nepal: A Beginner's Guide to Trekking Peaks",
    cluster: "climbing",
    date: "2026-10-13",
    hero: {
      image: "mardi-treks/island-peak-climbing/island-peak-climbing-00-island-peak-nepal",
      alt: "Island Peak (Imja Tse) at 6,189 m, Everest region, Nepal.",
    },
    excerpt:
      "Nepal's trekking peaks let a fit trekker reach 6,000 m with a week of skills rather than years of experience. Which peaks suit a first climb, what the summit day involves, what you need to learn, and how the permits work.",
    intro: [
      { p: "Nepal has 8,848 m at one end of the scale and a category at the other that is genuinely open to ordinary trekkers: the <strong>trekking peaks</strong>, a list of 33 summits between about 5,500 m and 6,500 m administered by the Nepal Mountaineering Association. On the most popular of them, a fit trekker with no climbing background can stand on a 6,000 m summit after a fortnight in the country and two or three days of instruction." },
      { p: "That is a real thing rather than a marketing claim, and it also misleads. A trekking peak is not a walk. Summit day involves a harness, a rope, crampons, an ice axe and a jumar, starting at 2 a.m. at around -20 °C, and the failure rate on the popular peaks is significant. This guide sets out what is actually involved." },
    ],
    sections: [
      {
        h2: "The Peaks That Suit a First Climb",
        blocks: [
          {
            table: {
              head: ["Peak", "Altitude", "Days", "Technical demand"],
              rows: [
                ["[[trek:yala-peak-climbing|Yala Peak]]", "5,520 m", "15", "The easiest — a snow slope with basic rope work. The best first climb in Nepal."],
                ["[[trek:island-peak-climbing|Island Peak (Imja Tse)]]", "6,189 m", "18", "The classic first 6,000 m peak — a glacier, a headwall with fixed rope, and an exposed summit ridge"],
                ["[[trek:mera-peak-climbing|Mera Peak]]", "6,476 m", "18", "The highest trekking peak, and technically the easiest at that altitude — a long glacier plod with a short steep summit step"],
                ["[[trek:lobuche-east-peak-climbing|Lobuche East]]", "6,119 m", "18", "Steeper and more technical than Island Peak, with rock and mixed ground"],
                ["[[trek:pokalde-peak-climbing|Pokalde]]", "5,806 m", "16", "Short, rocky, and often combined with a Khumbu trek"],
                ["[[trek:naya-kanga-peak-climbing|Naya Kanga]]", "5,844 m", "16", "A Langtang snow peak, quiet and straightforward"],
                ["[[trek:pachermo-peak-climbing|Pachermo]]", "6,187 m", "20", "Rolwaling, remote, with a fine summit ridge"],
              ],
            },
          },
          { p: "If this is your first Himalayan climb, the honest ranking is: <strong>Yala Peak</strong> if you want to learn the skills on a genuine summit without a hard day; <strong>Mera Peak</strong> if you want the highest number with the least technical difficulty; <strong>Island Peak</strong> if you want the classic Khumbu climb with a proper technical summit day." },
        ],
      },
      {
        h2: "What Summit Day Actually Involves",
        blocks: [
          { p: "Take Island Peak as the model, since it is the most commonly climbed. From high camp at around 5,200 m:" },
          {
            ol: [
              "<strong>1.00–2.00 a.m.</strong> Wake, tea, force down something to eat. -15 to -20 °C.",
              "<strong>2.00 a.m.</strong> Leave in the dark, in a rope team, on rock and scree for the first two to three hours. Steep, loose, relentless.",
              "<strong>5.00 a.m.</strong> Crampon point at the glacier's edge. Harness on, crampons on, rope up.",
              "<strong>5.00–7.00 a.m.</strong> Glacier travel, roped, crossing crevasses on snow bridges and occasionally a ladder.",
              "<strong>7.00–9.00 a.m.</strong> The headwall — 100 to 150 m of steep snow and ice at 45 to 50 degrees, ascended on fixed rope with a jumar.",
              "<strong>9.00–10.00 a.m.</strong> A narrow, exposed summit ridge with drops on both sides, then the summit at 6,189 m.",
              "<strong>10.00 a.m.–3.00 p.m.</strong> Down — abseiling or arm-wrapping the headwall, back across the glacier, and the long descent to high camp or Chhukung.",
            ],
          },
          { p: "Twelve to fifteen hours, most of it above 5,500 m. That is what the word climbing is doing in the phrase. Our [[post:island-peak-climbing-guide|Island Peak guide]] covers the day in detail." },
        ],
      },
      {
        h2: "The Skills You Need",
        blocks: [
          { p: "Every trip we run includes <strong>pre-climb training days</strong> at base camp or on a glacier, where our climbing guides teach and drill the following. You do not need them before you arrive; you do need to take the training seriously." },
          {
            ul: [
              "<strong>Walking in crampons</strong> — flat-footing, front-pointing, and not catching a point on your gaiter.",
              "<strong>Using an ice axe</strong> — as a walking aid, in self-belay, and for a self-arrest.",
              "<strong>Jumar or ascender technique</strong> — the single most important skill. Going up a fixed rope efficiently is the difference between a two-hour headwall and a four-hour one.",
              "<strong>Abseiling and arm-wrapping</strong> for the descent.",
              "<strong>Roped glacier travel</strong> — spacing, keeping the rope taut, what to do if someone goes into a crevasse.",
              "<strong>Harness, figure-of-eight, carabiners, and clipping past an anchor</strong> with gloves on, in the dark.",
            ],
          },
          { p: "See our [[post:fixed-rope-and-jumar-skills-for-nepal-peaks|fixed rope and jumar guide]] for the detail, and practise jumar technique at home if you have access to a wall — it pays for itself on the headwall." },
        ],
      },
      {
        h2: "Permits and Fees",
        blocks: [
          { p: "Trekking peaks are administered by the <strong>Nepal Mountaineering Association</strong> and priced by group and season." },
          {
            table: {
              head: ["Group", "Spring", "Autumn", "Winter / summer"],
              rows: [
                ["NMA Group B (most trekking peaks — Island, Mera, Lobuche East, Yala, Pokalde)", "USD 250", "USD 125", "USD 70"],
                ["NMA Group A (Ama Dablam, Pumori and other 6,500 m+ peaks)", "USD 400", "USD 200", "USD 100"],
              ],
              note: "Per person, plus a refundable garbage deposit, a liaison arrangement where required, and the relevant national park or conservation area fee. Figures are revised periodically.",
            },
          },
          { p: "Also required: a <strong>licensed climbing guide</strong> — a separate qualification from a trekking guide licence — and insurance that explicitly covers <strong>mountaineering</strong> to the altitude of your peak. Many policies cover trekking to 6,000 m and exclude the use of ropes and crampons, which is exactly what you will be doing. Our [[post:nma-peak-permits-and-fees|NMA permits guide]] covers the whole system." },
        ],
      },
      {
        h2: "Are You Ready?",
        blocks: [
          { p: "Three honest tests." },
          {
            ol: [
              "<strong>Have you slept above 4,500 m?</strong> If not, you do not know how your body handles it, and a summit push at 6,000 m is a poor place to find out. A Khumbu or Annapurna trek first is the sensible sequence.",
              "<strong>Can you do a 12-hour day?</strong> Not a 12-hour day at sea level — a hard day on your feet that starts at 2 a.m. and finishes in the afternoon, on consecutive days of walking before it.",
              "<strong>Are you comfortable with exposure?</strong> The Island Peak summit ridge and the Lobuche East upper section have real drops. It is not a question of technique; it is a question of whether you can function there.",
            ],
          },
          { p: "If the answer to any of those is no, the best route in is a trekking peak trip built on a full acclimatisation trek — which is how our itineraries are structured. Island Peak, for instance, follows the Everest Base Camp acclimatisation profile before turning up the Imja valley." },
          { p: "And if a 6,000 m summit is not the point but the glacier experience is, [[trek:yala-peak-climbing|Yala Peak]] at 5,520 m gives you rope, crampons and a summit with a far shorter and kinder day." },
        ],
      },
    ],
    faqs: [
      { question: "Can a beginner climb a peak in Nepal?", answer: "Yes, on a trekking peak with a guided trip that includes training days. Island Peak, Mera Peak and Yala Peak are regularly climbed by fit trekkers with no prior mountaineering experience. What you need is hill fitness, the ability to manage a 12-hour day, and genuine engagement with the pre-climb training." },
      { question: "Which is the easiest peak to climb in Nepal?", answer: "Yala Peak at 5,520 m in Langtang — a snow slope with basic rope work and a short summit day, which makes it the best first climb in the country. Mera Peak at 6,476 m is technically easier than Island Peak but much higher and a far longer day." },
      { question: "Do I need climbing experience before I come?", answer: "No, for the standard trekking peaks. Every trip includes pre-climb training days where our climbing guides teach crampon technique, ice axe use, jumar work on fixed rope, abseiling and roped glacier travel. Practising jumar technique at a climbing wall beforehand genuinely helps." },
      { question: "How much does a trekking peak permit cost?", answer: "For NMA Group B peaks — Island, Mera, Lobuche East, Yala, Pokalde — it is USD 250 per person in spring, USD 125 in autumn and USD 70 in winter or summer. Group A peaks such as Ama Dablam are USD 400, 200 and 100. A licensed climbing guide and a park fee are required as well." },
      { question: "What does summit day involve?", answer: "On Island Peak: a 2 a.m. start from high camp, two to three hours on rock and scree, roped glacier travel with crevasses, a 100 to 150 m fixed-rope headwall at 45 to 50 degrees climbed with a jumar, an exposed summit ridge, and a twelve to fifteen hour round trip, mostly above 5,500 m." },
      { question: "Does my insurance cover peak climbing?", answer: "Check the wording carefully. Many policies cover trekking to 6,000 m but exclude mountaineering with ropes, crampons and an ice axe — which is exactly what a trekking peak involves. You need the altitude figure and the activity both named in the policy." },
      { question: "Should I do a trek before a peak?", answer: "Strongly recommended if you have never slept above 4,500 m. Our peak itineraries are built on full acclimatisation treks for this reason — Island Peak follows the Everest Base Camp profile before turning up the Imja valley — but prior altitude experience makes the summit push considerably more likely to succeed." },
      { question: "What is the success rate?", answer: "On a well-paced itinerary with good weather, most fit and well-acclimatised climbers summit Island Peak and Mera Peak. Failure is usually caused by altitude, weather closing the window, or the jumar section taking so long that the guide turns the group around on time. Speed on fixed rope matters more than strength." },
    ],
    relatedTreks: [
      "yala-peak-climbing",
      "island-peak-climbing",
      "mera-peak-climbing",
      "lobuche-east-peak-climbing",
      "pokalde-peak-climbing",
      "naya-kanga-peak-climbing",
    ],
    tripsNote: "Trekking peaks suitable for a first Himalayan climb, all with training days and a licensed climbing guide included.",
    relatedPosts: [
      "island-peak-climbing-guide",
      "mera-peak-climbing-guide",
      "nma-peak-permits-and-fees",
      "peak-climbing-gear-list",
    ],
    tags: ["peak climbing", "trekking peaks", "island peak", "mera peak", "mountaineering"],
    meta: {
      title: "Peak Climbing in Nepal: A Beginner's Guide to Trekking Peaks",
      description: "How trekking peaks work in Nepal — which suit a first climb, what summit day involves, the skills you need, NMA permit costs, and whether you are ready.",
      keywords: "peak climbing Nepal, trekking peaks Nepal, Island Peak beginner, Mera Peak, NMA permit, first 6000m peak",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "island-peak-climbing-guide",
    title: "Island Peak Climbing Guide: Nepal's Classic First 6,000 m Summit",
    cluster: "climbing",
    date: "2026-10-16",
    hero: {
      image: "mardi-treks/island-peak-climbing/island-peak-climbing-01-island-peak-imja-tse-from-dingboche-village",
      alt: "Island Peak (Imja Tse) seen from Dingboche, Everest region, Nepal.",
    },
    excerpt:
      "Imja Tse, 6,189 m, in the Imja valley below Lhotse — the most climbed trekking peak in Nepal. The route, the headwall, summit day hour by hour, what can go wrong, and how it combines with Everest Base Camp.",
    intro: [
      { p: "Island Peak — <strong>Imja Tse</strong> in Nepali — stands at 6,189 m at the head of the Imja valley in the Khumbu, named by Eric Shipton's party in 1952 because from Dingboche it looks like an island in a sea of ice. It was first climbed in 1953 as training for the Everest expedition, and it is now the most climbed trekking peak in Nepal." },
      { p: "It earns that position. It is a genuine mountaineering route with a glacier, a steep fixed-rope headwall and an exposed summit ridge, and it is accessible to a fit trekker with no prior climbing experience. The summit looks directly at the <strong>Lhotse south face</strong>, one of the great walls in the Himalaya." },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,189 m"],
                ["Duration", "18 days from Kathmandu on the standard itinerary"],
                ["High camp", "About 5,200 m"],
                ["Summit day", "12–15 hours round trip"],
                ["Technical grade", "Alpine PD+ — glacier travel, a 45–50° fixed-rope headwall, exposed ridge"],
                ["Skills needed", "Crampons, ice axe, jumar, abseil, roped glacier travel — taught on the trip"],
                ["Permits", "NMA Group B (USD 250 spring, 125 autumn, 70 winter/summer), Sagarmatha National Park, Khumbu fee"],
                ["Best seasons", "April to mid May, October to November"],
              ],
            },
          },
          { p: "We run it as [[trek:island-peak-climbing|an 18-day standard itinerary]] following the Everest Base Camp acclimatisation profile, [[trek:island-peak-climbing-from-chhukung|a 14-day version from Chhukung]] for climbers who are already acclimatised, and [[trek:island-peak-climbing-with-helicopter-return|a 15-day version with a helicopter return]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Acclimatisation through the Khumbu" },
          { p: "The standard itinerary walks the Everest Base Camp route — Lukla, Phakding, Namche with a rest day, Tengboche, Dingboche with a second rest day — and most trips include <strong>Everest Base Camp and Kala Patthar</strong> before turning to the peak. That is not padding: it is the acclimatisation that makes a 6,189 m summit realistic." },
          { h3: "Chhukung and base camp" },
          { p: "From Dingboche east into the <strong>Imja valley</strong> to <strong>Chhukung (4,730 m)</strong>, then up to <strong>Island Peak Base Camp at about 5,100 m</strong> on a sandy flat beside the Imja glacier. The valley here is enclosed by Lhotse, Nuptse, Baruntse and Ama Dablam, and the Imja Tsho glacial lake is below — one of the most closely monitored lakes in Nepal because of outburst flood risk." },
          { h3: "Training day" },
          { p: "A full day at base camp or on the glacier with the climbing guides: crampons, ice axe, harness, jumar on a fixed rope, abseiling, and rope team procedure. Take it seriously. Climbers who can jumar efficiently summit; climbers who cannot spend four hours on a headwall that should take ninety minutes." },
          { h3: "High camp" },
          { p: "Most itineraries move to <strong>high camp at around 5,200 m</strong> the afternoon before the summit, which shortens summit day by two hours at the cost of a cold night in a tent. Some groups climb from base camp instead, which is a longer day and a better sleep." },
        ],
      },
      {
        h2: "Summit Day",
        blocks: [
          {
            table: {
              head: ["Stage", "Ground", "Time"],
              rows: [
                ["High camp to the crampon point", "Steep rock, scree and a gully, in the dark", "2–3 hours"],
                ["Crampon point", "Harness, crampons, rope up, one last layer", "20 min"],
                ["Glacier", "Roped travel, crevasses, occasionally a ladder", "1.5–2 hours"],
                ["The headwall", "100–150 m of 45–50° snow and ice on fixed rope, jumar", "1–3 hours"],
                ["Summit ridge", "Narrow and exposed, with drops both sides", "30–45 min"],
                ["Summit, 6,189 m", "Lhotse south face, Makalu, Baruntse, Ama Dablam", "15 min"],
                ["Descent", "Abseil the headwall, reverse the glacier and the gully", "4–5 hours"],
              ],
            },
          },
          { p: "Two things decide the day. The first is <strong>speed on the headwall</strong> — it is the bottleneck, and in peak season there can be a queue. The second is the <strong>turnaround time</strong> your guide sets, usually around 10 a.m.: if you are not at the ridge by then, you go down, because the afternoon weather and the long descent do not negotiate." },
        ],
      },
      {
        h2: "What Goes Wrong",
        blocks: [
          {
            ul: [
              "<strong>Altitude.</strong> The most common reason people do not summit. A 6,189 m push from 5,200 m after two weeks at altitude is demanding, and a poor night at high camp is normal rather than a warning — but a headache that will not clear is.",
              "<strong>Slow jumar technique.</strong> The single most fixable problem. Practise before you come.",
              "<strong>Cold.</strong> -20 °C with wind at the crampon point. Thin gloves and inadequate boots end more attempts than technique does.",
              "<strong>Queues on the headwall</strong> in peak season, which cost hours and push groups past the turnaround.",
              "<strong>Crevasses.</strong> The glacier changes year to year and the crossing points move. This is why a guide who has been up recently matters.",
              "<strong>Weather window.</strong> A summit push needs a clear, low-wind morning. Our itineraries carry a spare day for a second attempt.",
            ],
          },
          { p: "It is also worth saying plainly: this is a mountain, and people have died on it. The exposure on the ridge is real, the glacier is a glacier, and the decision to turn around belongs to your guide. That is what you are hiring." },
        ],
      },
      {
        h2: "Island Peak or Mera Peak?",
        blocks: [
          {
            table: {
              head: ["", "Island Peak", "[[trek:mera-peak-climbing|Mera Peak]]"],
              rows: [
                ["Summit", "6,189 m", "6,476 m"],
                ["Technical difficulty", "Higher — headwall and exposed ridge", "Lower — a long glacier with a short summit step"],
                ["Summit day length", "12–15 hours", "8–12 hours"],
                ["Acclimatisation", "Excellent, via the Everest Base Camp route", "Good, via the Hinku valley"],
                ["Crowds", "The busiest trekking peak in Nepal", "Quieter"],
                ["The view", "Lhotse south face from close range", "Five 8,000 m peaks — Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga"],
                ["Best for", "Climbers who want a technical summit day", "Climbers who want altitude with less technical ground"],
              ],
            },
          },
          { p: "Many climbers do both — [[trek:mera-and-island-peak-climbing|a 25-day combination]] climbs Mera first as acclimatisation and Island Peak second, which is the most effective way to summit both. Our [[post:mera-peak-vs-island-peak|full comparison]] goes into the decision." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Island Peak?", answer: "6,189 m. It stands at the head of the Imja valley in the Khumbu and is known in Nepali as Imja Tse, named Island Peak by Eric Shipton's party in 1952 because from Dingboche it resembles an island in a sea of ice." },
      { question: "Is Island Peak suitable for beginners?", answer: "Yes, for fit trekkers with no prior climbing experience, on a guided trip with training days. It is a genuine mountaineering route — glacier travel, a 45 to 50 degree fixed-rope headwall, and an exposed summit ridge — rather than a walk, and the skills are taught on the trip." },
      { question: "How long is summit day?", answer: "Twelve to fifteen hours round trip from high camp at around 5,200 m, starting at about 2 a.m. Two to three hours on rock in the dark, one and a half to two hours of glacier, one to three hours on the headwall, the summit ridge, and then four to five hours down." },
      { question: "What is the headwall?", answer: "The crux — 100 to 150 m of snow and ice at 45 to 50 degrees below the summit ridge, ascended on fixed rope using a jumar and descended by abseil or arm-wrap. How fast you can jumar is the single biggest factor in whether you summit, because in peak season there can be a queue." },
      { question: "Do I climb Everest Base Camp on the same trip?", answer: "On our standard 18-day itinerary, yes — the Everest Base Camp route including Kala Patthar provides the acclimatisation before you turn east into the Imja valley. A shorter 14-day version starts from Chhukung for climbers who are already acclimatised." },
      { question: "What does the Island Peak permit cost?", answer: "It is an NMA Group B peak: USD 250 per person in spring, USD 125 in autumn and USD 70 in winter or summer, plus Sagarmatha National Park entry, the Khumbu rural municipality fee, and a refundable garbage deposit." },
      { question: "What equipment do I need?", answer: "Technical group equipment — ropes, ice screws, anchors — is supplied. You need mountaineering boots suitable for crampons, a harness, crampons, an ice axe, a jumar, a helmet and carabiners, which can be brought or hired in Kathmandu, plus a -20 °C sleeping bag and full high-altitude clothing." },
      { question: "What is the best season for Island Peak?", answer: "April to mid-May and October to November. Spring is warmer with more settled snow conditions on the headwall; autumn gives the clearest air and the sharpest views of the Lhotse face. Winter ascents are possible and significantly colder, which is reflected in the lower permit fee." },
    ],
    relatedTreks: [
      "island-peak-climbing",
      "island-peak-climbing-from-chhukung",
      "island-peak-climbing-with-helicopter-return",
      "mera-and-island-peak-climbing",
      "lobuche-peak-and-island-peak-climbing",
    ],
    tripsNote: "Island Peak on its own, from Chhukung, with a helicopter return, or combined with Mera and Lobuche.",
    relatedPosts: [
      "peak-climbing-in-nepal-beginners-guide",
      "mera-peak-vs-island-peak",
      "peak-climbing-gear-list",
      "fixed-rope-and-jumar-skills-for-nepal-peaks",
    ],
    tags: ["island peak", "imja tse", "peak climbing", "khumbu", "mountaineering"],
    meta: {
      title: "Island Peak Climbing Guide: Nepal's Classic First 6,000 m Summit",
      description: "Climbing Island Peak (Imja Tse) at 6,189 m — the route through the Khumbu, the fixed-rope headwall, summit day hour by hour, permits, and what goes wrong.",
      keywords: "Island Peak climbing, Imja Tse, Island Peak summit day, Island Peak headwall, 6000m peak Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mera-peak-climbing-guide",
    title: "Mera Peak Climbing Guide: Nepal's Highest Trekking Peak",
    cluster: "climbing",
    date: "2026-10-20",
    hero: {
      image: "mardi-treks/mera-peak-climbing/mera-peak-climbing-00-mera-peak-10003",
      alt: "Mera Peak at 6,476 m, Hinku valley, Nepal.",
    },
    excerpt:
      "6,476 m, the highest of Nepal's trekking peaks, and technically the most accommodating at that altitude. The Hinku valley approach, the glacier route, the summit view of five eight-thousanders, and why it suits a first climb.",
    intro: [
      { p: "Mera Peak at <strong>6,476 m</strong> is the highest summit on the Nepal Mountaineering Association's trekking peak list, and — unusually for a mountain of that height — it is technically straightforward. The standard route is a long glacier ascent at a moderate angle with one short steep step below the summit, which makes it the most accessible 6,400 m peak in the Himalaya." },
      { p: "The approach is also the best part. Instead of the Everest Base Camp corridor, Mera is reached over a 4,600 m pass from Lukla into the <strong>Hinku valley</strong> — a forested, almost uninhabited valley with a fraction of the Khumbu's traffic. And the summit view is arguably the finest from any trekking peak: <strong>Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga</strong>, five of the world's six highest mountains, in a single panorama." },
    ],
    sections: [
      {
        h2: "The Climb at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Summit", "6,476 m — Mera Central, the standard objective"],
                ["Duration", "18 days from Kathmandu"],
                ["High camp", "Mera La high camp, about 5,800 m"],
                ["Summit day", "8–12 hours round trip"],
                ["Technical grade", "Alpine F/PD — glacier travel, a short steep summit step on fixed rope"],
                ["Approach", "Lukla over the Zatrwa La (about 4,600 m) into the Hinku valley"],
                ["Permits", "NMA Group B (USD 250 spring, 125 autumn, 70 winter/summer), Makalu Barun National Park"],
                ["Best seasons", "April to mid May, October to November"],
              ],
            },
          },
          { p: "We run it as [[trek:mera-peak-climbing|an 18-day standard itinerary]], [[trek:short-mera-peak-climbing|a 15-day short version]], and in several combinations: [[trek:mera-and-island-peak-climbing|Mera with Island Peak]], [[trek:mera-peak-amphu-lapcha|Mera with the Amphu Lapcha crossing]], and [[trek:mera-island-and-lobuche-peak-climbing|three peaks in 30 days]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Lukla over the Zatrwa La into the Hinku" },
          { p: "From Lukla the route turns south-east and climbs immediately to the <strong>Zatrwa La at around 4,600 m</strong> — a serious first pass that comes early, which is why our itinerary breaks the climb with a night at Chhutanga. Beyond it the trail drops into the <strong>Hinku valley</strong>: forest, a river, yak pasture at Kothe and Thangnak, and almost no permanent settlement." },
          { h3: "Thangnak and Khare" },
          { p: "Up the valley to <strong>Thangnak (4,360 m)</strong> and <strong>Khare (5,045 m)</strong>, with an acclimatisation day at each. Khare is the staging post for the climb — a cluster of lodges beneath the Mera glacier, where the training day happens and where you can see the whole route above you." },
          { h3: "Training at Khare" },
          { p: "A full day on the glacier edge: crampons, ice axe, roped travel, jumar and abseil. Mera needs less technical skill than Island Peak, but the glacier is long and crevassed and rope team discipline matters more." },
          { h3: "Mera La and high camp" },
          { p: "Onto the glacier and up to the <strong>Mera La</strong> at around 5,400 m, then to <strong>high camp at about 5,800 m</strong> on a rock shelf beside the glacier. This is the highest camp on any trekking peak itinerary in Nepal and it is cold, exposed and spectacular — Makalu fills the view south." },
          { h3: "Summit day" },
          { p: "A 2 to 3 a.m. start on the glacier, roped, for four to six hours of steady ascent on a broad snow slope at moderate angle. The final 40 to 50 m to <strong>Mera Central (6,476 m)</strong> is a short steep step, usually with a fixed rope. From the top: Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga, Baruntse, Chamlang and Ama Dablam. Then back down the glacier to high camp and on to Khare — eight to twelve hours in total." },
        ],
      },
      {
        h2: "Why Mera Suits a First Climb",
        blocks: [
          {
            ul: [
              "<strong>Technically the easiest 6,400 m peak available.</strong> A glacier plod rather than a climb, with one short steep section.",
              "<strong>A long, graded approach.</strong> Nine days of walking before the summit push, with rest days at Thangnak and Khare, which is excellent acclimatisation.",
              "<strong>The highest number on the trekking peak list.</strong> If the altitude itself is the objective, this is it.",
              "<strong>A quieter approach than the Khumbu.</strong> The Hinku valley sees a small fraction of the Everest trail's traffic.",
              "<strong>The best summit view of any trekking peak.</strong> Five eight-thousanders in one panorama.",
            ],
          },
          { p: "What it asks in return: <strong>altitude tolerance</strong>. 6,476 m is 287 m higher than Island Peak, and high camp at 5,800 m is 600 m higher than Island Peak's. The cold at high camp is the single most commonly underestimated part of the trip, and a -30 °C sleeping bag is not excessive there." },
        ],
      },
      {
        h2: "The Zatrwa La Problem",
        blocks: [
          { p: "The one genuine weakness of the standard Mera itinerary is the <strong>Zatrwa La</strong>. It comes on day three or four, at around 4,600 m, barely 48 hours after flying into Lukla at 2,860 m. That is a fast gain by any standard." },
          { p: "What we do about it:" },
          {
            ul: [
              "Break the climb with a night at <strong>Chhutanga</strong> (around 3,450 m) rather than crossing in one push from Lukla.",
              "Keep the pace deliberately slow and monitor oxygen saturation on the pass day.",
              "Build the rest days at Thangnak and Khare into the schedule, which is where acclimatisation is recovered.",
              "Offer an alternative approach on request — flying or walking in via Paiya and Pangkongma, which is lower, longer and gentler.",
            ],
          },
          { p: "If you have any history of altitude trouble, tell us and we will use the longer approach. It costs two days and removes the one pinch point in an otherwise well-graded itinerary." },
        ],
      },
      {
        h2: "Combinations",
        blocks: [
          {
            table: {
              head: ["Itinerary", "Days", "What it adds"],
              rows: [
                ["[[trek:mera-peak-climbing|Mera Peak]]", "18", "The standard route, with rest days at Thangnak and Khare"],
                ["[[trek:short-mera-peak-climbing|Short Mera Peak]]", "15", "A compressed itinerary for climbers with prior altitude experience"],
                ["[[trek:mera-and-island-peak-climbing|Mera and Island Peak]]", "25", "Mera first as acclimatisation, then Island Peak — the most effective double"],
                ["[[trek:mera-peak-amphu-lapcha|Mera with Amphu Lapcha]]", "21", "A technical 5,845 m pass crossing from the Hinku into the Imja valley"],
                ["[[trek:mera-island-and-lobuche-peak-climbing|Mera, Island and Lobuche]]", "30", "Three 6,000 m summits in one expedition"],
                ["[[trek:baruntse-expedition-with-mera-peak-climbing|Mera with Baruntse]]", "35", "Mera as acclimatisation for a 7,129 m expedition peak"],
              ],
            },
          },
          { p: "The Mera-then-Island combination is the one we recommend most often for climbers who want two summits: Mera's gradual glacier route acclimatises you to 6,476 m, which makes Island Peak's technical day considerably more comfortable. Our [[post:mera-peak-vs-island-peak|comparison guide]] covers choosing between them if you only have time for one." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Mera Peak?", answer: "6,476 m at Mera Central, the standard objective, which makes it the highest peak on Nepal's trekking peak list. High camp sits at around 5,800 m, the highest camp on any trekking peak itinerary in the country." },
      { question: "Is Mera Peak easier than Island Peak?", answer: "Technically, yes — the standard route is a long glacier ascent at moderate angle with one short steep step below the summit, against Island Peak's 45 to 50 degree fixed-rope headwall and exposed ridge. But Mera is 287 m higher and its high camp is 600 m higher, so the altitude demand is greater." },
      { question: "How long is Mera Peak summit day?", answer: "Eight to twelve hours round trip from high camp at around 5,800 m, starting at 2 or 3 a.m. Four to six hours of roped glacier ascent, a short steep step of 40 to 50 m to the summit, and then the descent to high camp and on to Khare." },
      { question: "What can you see from the summit?", answer: "Five of the world's six highest mountains — Everest, Lhotse, Makalu, Cho Oyu and Kanchenjunga — plus Baruntse, Chamlang and Ama Dablam. It is the finest summit panorama from any trekking peak in Nepal." },
      { question: "What is the Zatrwa La and why does it matter?", answer: "A pass at around 4,600 m crossed on day three or four from Lukla at 2,860 m, which is a fast altitude gain. We break it with a night at Chhutanga and monitor the group closely, and we offer a longer, lower approach via Paiya and Pangkongma for anyone with a history of altitude trouble." },
      { question: "Do I need climbing experience for Mera Peak?", answer: "No prior experience is required on a guided trip with training days. The glacier is long and crevassed so rope team discipline matters, but the technical demand is lower than Island Peak. What you do need is the fitness and altitude tolerance for a 6,476 m summit push." },
      { question: "How cold is high camp?", answer: "Very. At 5,800 m on an exposed rock shelf, expect -20 to -30 °C overnight in the main seasons. This is the most commonly underestimated part of the trip — a sleeping bag rated to -30 °C, a good mat and full down kit are not excessive." },
      { question: "Can I climb Mera and Island Peak on one trip?", answer: "Yes, in 25 days, and it is the most effective way to summit both — Mera first, which acclimatises you to 6,476 m, then Island Peak's technical day at 6,189 m feeling considerably more comfortable. Three-peak and Baruntse combinations are also available." },
    ],
    relatedTreks: [
      "mera-peak-climbing",
      "short-mera-peak-climbing",
      "mera-and-island-peak-climbing",
      "mera-peak-amphu-lapcha",
      "mera-island-and-lobuche-peak-climbing",
    ],
    tripsNote: "Mera Peak on its own, compressed, or combined with Island Peak, Lobuche and Baruntse.",
    relatedPosts: [
      "mera-peak-vs-island-peak",
      "peak-climbing-in-nepal-beginners-guide",
      "island-peak-climbing-guide",
      "peak-climbing-gear-list",
    ],
    tags: ["mera peak", "peak climbing", "hinku valley", "mountaineering", "6000m"],
    meta: {
      title: "Mera Peak Climbing Guide: Nepal's Highest Trekking Peak",
      description: "Climbing Mera Peak at 6,476 m — the Hinku valley approach, the Zatrwa La, the glacier route, summit day, the five-eight-thousander view.",
      keywords: "Mera Peak climbing, Mera Peak height, Hinku valley, Zatrwa La, highest trekking peak Nepal",
    },
  },
];
