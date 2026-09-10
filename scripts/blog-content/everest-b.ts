import type { BlogContent } from "./build";

export const everestB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "how-hard-is-the-everest-base-camp-trek",
    title: "How Hard Is the Everest Base Camp Trek? An Honest Assessment",
    cluster: "everest",
    date: "2026-03-27",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-03-everest-range-above-tengboche-at-night",
      alt: "The Everest range above Tengboche after dark, Everest Base Camp trek, Nepal.",
    },
    excerpt:
      "The Everest Base Camp trek is graded moderate, which surprises people in both directions. Here is what is genuinely hard about it, what is easier than expected, which days hurt, and how to tell whether you are ready.",
    intro: [
      { p: "Two groups of people misjudge this trek. The first assume that because it is Everest, it must be mountaineering — ropes, crampons, and technical skill. It is not: the whole route is a walking trail, and thousands of ordinary people complete it every season. The second assume that because it is a walking trail, fitness is all it takes. That is the group that turns back at Lobuche." },
      { p: "What makes this trek hard is cumulative: twelve consecutive days, thin air, cold nights, poor sleep, and an appetite that disappears when you need calories most. None of it is dramatic. All of it adds up." },
    ],
    sections: [
      {
        h2: "The Four Things That Make It Hard",
        blocks: [
          {
            ol: [
              "<strong>Altitude.</strong> You sleep at 5,160 m and walk to 5,545 m, where there is roughly half the oxygen of sea level. Everything from tying a bootlace to sleeping becomes an effort, and altitude sickness — not fitness — is what ends most failed attempts.",
              "<strong>Consecutive days.</strong> Twelve days of walking with two rest days and no real recovery. Day eight feels different from day two regardless of how fit you are.",
              "<strong>Cold.</strong> Nights of -15 to -20 °C at Lobuche and Gorak Shep in unheated bedrooms. Sleeping badly for three nights takes more out of you than any climb.",
              "<strong>Eating and drinking enough.</strong> Appetite falls as demand rises. Under-eating at altitude shows up two days later as exhaustion that feels like illness.",
            ],
          },
          { p: "Notice that only one of those is about legs. That is the central point about this trek." },
        ],
      },
      {
        h2: "What Is Easier Than People Expect",
        blocks: [
          {
            ul: [
              "<strong>The terrain.</strong> Good, well-maintained trails throughout. No scrambling, no exposure worth the name, nothing technical.",
              "<strong>The daily distance.</strong> Stages are short — often only 9 to 12 km. You walk slowly because of altitude, not because of distance.",
              "<strong>The gradients.</strong> Less steep than the Annapurna Base Camp stone staircases. There is one long climb to Namche and one to Thukla Pass; the rest is gradual.",
              "<strong>Carrying.</strong> With a porter you walk with 5 to 7 kg.",
              "<strong>Navigation and logistics.</strong> Nothing to work out. Lodges, food, and route are arranged.",
              "<strong>The descent.</strong> You lose 1,700 m in two days and feel stronger every hour of it.",
            ],
          },
        ],
      },
      {
        h2: "The Hard Days, Ranked",
        blocks: [
          {
            table: {
              head: ["Day", "Stage", "Why it is hard"],
              rows: [
                ["Day 10", "Gorak Shep to Base Camp, then down to Pheriche", "7–8 hours, the first half above 5,100 m on glacier moraine. The longest day on the trek."],
                ["Day 8", "Dingboche to Lobuche", "558 m of gain at the thinnest air yet, with the steep climb to Thukla Pass in the middle."],
                ["Day 3", "Phakding to Namche", "Nearly 800 m of ascent, two hours of it steep, and the first day altitude is noticeable."],
                ["Day 7", "Nangkartshang acclimatisation climb", "700 m up to 5,080 m and back. Optional, horrible, and the single most valuable day on the trek."],
                ["Day 9", "Lobuche to Gorak Shep plus Kala Patthar", "Short walking but 400 m of very steep climbing at 5,200 m afterwards."],
                ["Day 11", "Pheriche to Namche", "Long and relentlessly downhill — the day knees complain."],
              ],
            },
          },
          { p: "Day 7 deserves a note. It is optional, it is unpleasant, and skipping it is the most common mistake we see. Trekkers who climb Nangkartshang cope visibly better at Lobuche and Gorak Shep two days later." },
        ],
      },
      {
        h2: "Are You Ready? A Practical Test",
        blocks: [
          { p: "Forget gym numbers. The honest test is this: <strong>can you walk six hours on hills with a 7 kg pack, and then do it again the next day without dread?</strong> If yes, you have the fitness for Everest Base Camp. If not, you have a clear training target." },
          { p: "Our [[post:how-to-train-for-a-nepal-trek|12-week training plan]] builds exactly that, and the back-to-back weekend in weeks 10 and 11 is the part that answers the question." },
          { p: "Three things that are not requirements, despite what the internet suggests:" },
          {
            ul: [
              "<strong>Previous high-altitude experience.</strong> Helpful, not necessary. The itinerary is designed for first-timers at altitude.",
              "<strong>Being young.</strong> We take guests in their sixties and seventies to Base Camp most seasons. Steady pacing beats youth at 5,000 m.",
              "<strong>Running fitness.</strong> Irrelevant at best. Very fit trekkers sometimes struggle because they walk too fast for their own acclimatisation.",
            ],
          },
        ],
      },
      {
        h2: "How It Compares",
        blocks: [
          {
            table: {
              head: ["Trek", "Grade", "Harder or easier than EBC, and why"],
              rows: [
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "Moderate", "Lower and shorter, but more ascent and descent per day on punishing stone steps"],
                ["[[trek:gokyo-lake-trek|Gokyo Lakes]]", "Moderate", "Similar effort, 360 m lower, quieter trail, arguably the better Everest view"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "Moderate to challenging", "Longer, with one very big pass day at 5,416 m"],
                ["[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "Challenging", "Harder — remoter, fewer lodges, and the Larke La day is a genuine test"],
                ["[[trek:everest-three-pass-trek|Everest Three Passes]]", "Difficult", "Substantially harder — three 5,300 m plus passes over 17 days"],
                ["[[trek:island-peak-climbing|Island Peak]]", "Challenging", "EBC plus a technical summit day on rope and crampons at 6,189 m"],
              ],
            },
          },
          { p: "If Everest Base Camp sounds like more than you want, the honest alternative is the [[trek:everest-view-trek|Everest View Trek]]: nine days, nothing above 3,900 m, the same Sherpa villages, and a proper Everest panorama from the Hotel Everest View trail. It is not a consolation prize." },
        ],
      },
    ],
    faqs: [
      { question: "Is Everest Base Camp hard for a beginner?", answer: "It is achievable for a beginner who trains and takes a 14-day itinerary, and we take first-time trekkers to Base Camp every season. What it demands is consecutive long days at altitude rather than skill or speed. A moderate trek first is better preparation than any gym block, but it is not a prerequisite." },
      { question: "Do I need climbing experience for Everest Base Camp?", answer: "None. The entire route is a walking trail with no ropes, crampons, ice axes or exposure. Technical skills only come in if you add a trekking peak such as Island Peak or Lobuche East." },
      { question: "What percentage of people reach Base Camp?", answer: "On a properly paced 14-day itinerary with two acclimatisation days, the great majority do. Failure rates rise sharply on compressed 11 and 12-day trips, where there is no spare capacity for a bad night or a slow acclimatiser. The itinerary matters more than the trekker." },
      { question: "How much walking per day?", answer: "Five to seven hours of moving time, over short distances of 9 to 12 km. You go slowly because of the air, not the ground. The exception is the Base Camp and descent day at seven to eight hours." },
      { question: "Can I do it if I am over 60?", answer: "Yes, and many of our guests are. Allow a longer training build-up, consider adding a rest day, use trekking poles on the descents, and hire a porter. Experience and patient pacing are worth more at altitude than youth." },
      { question: "What is the single most common reason people turn back?", answer: "Altitude sickness that was not reported early. A headache on the first night at Namche or Dingboche is normal; walking higher with it for two more days is what turns a manageable symptom into a trip-ending problem. Tell your guide when it starts." },
      { question: "Is the descent easier?", answer: "Physically much easier — you lose 1,700 m in two days and feel better with every hour. It is hard on knees, though, particularly Pheriche to Namche. Trekking poles make a real difference on that day." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-view-trek",
      "gokyo-lake-trek",
      "everest-three-pass-trek",
    ],
    tripsNote: "Khumbu routes at three levels of commitment, from the Everest View trek to the full three-pass circuit.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "how-to-train-for-a-nepal-trek",
      "everest-base-camp-trek-altitude-profile",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["everest base camp", "trek difficulty", "fitness", "nepal trekking"],
    meta: {
      title: "How Hard Is the Everest Base Camp Trek? An Honest Assessment",
      description: "What is genuinely difficult about the Everest Base Camp trek, what is easier than expected, the hardest days ranked, and a practical test of whether you are ready.",
      keywords: "how hard Everest Base Camp trek, EBC difficulty, Everest trek fitness, is EBC hard for beginners",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "best-time-for-everest-base-camp-trek",
    title: "Best Time for the Everest Base Camp Trek: Season by Season",
    cluster: "everest",
    date: "2026-03-31",
    hero: {
      image: "mardi-treks/everest-base-camp-trek-with-helicopter-return/everest-base-camp-trek-with-helicopter-return-04-ama-dablam-from-kala-patthar",
      alt: "Ama Dablam seen from Kala Patthar, Everest Base Camp trek, Nepal.",
    },
    excerpt:
      "October and November give the clearest Everest views; April and May put you in the valley during the climbing season. A month-by-month comparison of weather, temperature, crowds, flight reliability and what Base Camp itself looks like.",
    intro: [
      { p: "The Khumbu has two good seasons, one viable cold season, and one to avoid. Which of the two good ones you choose depends on whether you value clear air or warm air, and whether you want to see Base Camp as a working expedition city or as bare glacier." },
      { p: "The figures below are for the upper valley, where your decision actually gets made." },
    ],
    sections: [
      {
        h2: "The Seasons Compared",
        blocks: [
          {
            table: {
              head: ["Season", "Months", "Visibility", "Night at Gorak Shep", "Crowds"],
              rows: [
                ["Autumn", "Late Sep – Nov", "Best of the year", "-10 to -18 °C", "Highest, peaking in late October"],
                ["Spring", "Mar – mid May", "Good, hazier after mid April", "-8 to -15 °C", "High, with expedition traffic"],
                ["Winter", "Dec – Feb", "Excellent, very clear", "-18 to -25 °C", "Very low"],
                ["Monsoon", "Jun – mid Sep", "Poor, cloud and rain", "-5 to -12 °C", "Very low"],
              ],
            },
          },
        ],
      },
      {
        h2: "Autumn: The Default Answer",
        blocks: [
          { p: "From the last week of September to the end of November, the monsoon has scrubbed the air clean and winter systems have not arrived. Mornings are reliably cloudless, afternoons stay clear, and Lukla flights operate close to schedule — which matters more on this trek than on any other in Nepal." },
          { p: "October is the single most popular trekking month in the country, and you will feel it: full lodges at Dingboche and Gorak Shep, queues on the Namche climb, and a need to book early. November trades a little warmth for the clearest air of the entire year and noticeably thinner crowds by mid-month." },
          { p: "Base Camp in autumn is largely empty — a few Lhotse and Ama Dablam expeditions at most, and otherwise bare ice and moraine at the foot of the Icefall. Some trekkers find that more moving than the spring tent city." },
        ],
      },
      {
        h2: "Spring: Warmer, and the Climbing Season",
        blocks: [
          { p: "March to mid-May is the other strong window. It is warmer at every altitude, the days are longer, rhododendron flowers in the lower valley through April, and Lukla flights are generally reliable." },
          { p: "The distinctive feature is <strong>Base Camp itself</strong>. Every Everest and Lhotse expedition stages here in April and May, so the moraine becomes a city of several hundred tents with helicopters coming and going and the Icefall doctors' route fixed above. If seeing an Everest expedition at work is part of why you are going, spring is the only season for it." },
          { p: "The cost is clarity. From mid-April, haze and afternoon cloud build, and the Kala Patthar panorama is softer than in November. Late March to mid-April is the sweet spot: bloom below, tents above, air still sharp." },
        ],
      },
      {
        h2: "Winter and Monsoon",
        blocks: [
          { h3: "Winter (December to February)" },
          { p: "Superb visibility, empty trails, and soft lodge prices — against nights of -25 °C at Gorak Shep, short daylight, some high lodges closed for the season, and a real chance of snow closing the trail above Lobuche for a day or two. We run it for experienced trekkers with a -20 °C bag and flexible dates, and we recommend against it for a first Nepal trek. The [[trek:everest-view-trek|Everest View Trek]] is the better winter option in this region." },
          { h3: "Monsoon (June to mid September)" },
          { p: "Not worth it here. The Khumbu sits south of the main divide, so it gets the full monsoon: cloud for days, leeches in the lower forest, and Lukla flights cancelled routinely. If your dates are fixed in July or August, go north of the Himalaya instead — see our [[post:monsoon-trekking-in-nepal-where-to-go|monsoon trekking guide]]." },
        ],
      },
      {
        h2: "Month by Month",
        blocks: [
          {
            table: {
              head: ["Month", "Verdict"],
              rows: [
                ["January", "Coldest. Clear and empty. Experienced trekkers only."],
                ["February", "Cold but improving, excellent visibility, very quiet trails."],
                ["March", "Season begins. Cool at altitude, clear, expeditions arriving. Good choice."],
                ["April", "Best of spring. Warm, bloom below, Base Camp fully active. Busy."],
                ["May", "Warm and hazy, afternoon cloud, summit attempts underway. Fine early, fading late."],
                ["June", "Monsoon arrives. Avoid."],
                ["July", "Wettest. Avoid."],
                ["August", "Wet. Avoid."],
                ["September", "Unreliable until about the 25th, then the first clear windows. A quiet, good bet late."],
                ["October", "The most reliable month of the year, and the busiest."],
                ["November", "Clearest air of all, cooling fast, quieter after mid-month. Our own favourite."],
                ["December", "Cold, clear, quiet. Workable for well-equipped trekkers early in the month."],
              ],
            },
          },
          { p: "If we had to pick one fortnight: the first half of November. If you want Base Camp alive with expeditions: the first half of April." },
        ],
      },
      {
        h2: "Festivals Worth Timing Your Trek Around",
        blocks: [
          { p: "The Khumbu has its own religious calendar, and two of its festivals are worth building an itinerary around if your dates are flexible." },
          {
            ul: [
              "<strong>Mani Rimdu at Tengboche</strong> — a three-day festival of masked dances, prayers, and blessings at the Khumbu's principal monastery, held over the full moon of the ninth Tibetan month, usually late October or November. It is the single best cultural experience available on this trek, and lodges at Tengboche are booked out for it.",
              "<strong>Dumje</strong> — a Sherpa village festival in June or July, mostly at Namche, Khumjung, and Thame. It falls in the monsoon, so few trekkers see it.",
              "<strong>Losar</strong> — Tibetan New Year in February, marked quietly in Khumbu villages with family gatherings and monastery prayers. Quiet trails and a genuine welcome.",
            ],
          },
          { p: "If Mani Rimdu matters to you, tell us when you enquire rather than after booking — the dates shift with the lunar calendar each year, and Tengboche accommodation needs securing months ahead. Our [[post:tengboche-monastery-and-sherpa-culture|Tengboche and Sherpa culture guide]] explains what happens at the festival and how to attend respectfully." },
        ],
      },
    ],
    faqs: [
      { question: "What is the best month for Everest Base Camp?", answer: "Late October to mid-November for the clearest mountain views and most stable weather, or late March to mid-April for warmer days and an active Base Camp full of expedition tents. November has the sharpest air of the year; April has the atmosphere." },
      { question: "Is Everest Base Camp crowded in October?", answer: "Yes — it is the busiest trekking month in Nepal, with full lodges at Dingboche and Gorak Shep and queues on the Namche climb. Booking early matters, and starting each day early helps a lot. Late November and mid-March are noticeably quieter for almost the same conditions." },
      { question: "Can I trek to Everest Base Camp in winter?", answer: "Yes, with the right kit and experience. Visibility is excellent and the trail is empty, but Gorak Shep can be -25 °C, daylight is short, and some high lodges close. We run it for experienced trekkers and steer first-timers toward the Everest View trek instead." },
      { question: "Will I see expedition teams at Base Camp?", answer: "In April and May, yes — several hundred tents, climbers acclimatising on the Icefall, and helicopters ferrying loads. In autumn the camp is largely empty apart from the occasional Lhotse or Ama Dablam team. That difference is the main reason to choose spring over autumn." },
      { question: "How reliable are Lukla flights by season?", answer: "Most reliable in the settled weather of late October, November, and March to April. Less reliable in May as afternoon cloud builds earlier, and unreliable through the monsoon. Whatever the season, keep two buffer days before your international flight." },
      { question: "Is September a good month?", answer: "The second half is. Until about the 25th the monsoon is still clearing, with cloud and wet trails. After that, the first clear windows arrive and the trails are still quiet before the October rush — a good choice if you can be flexible about the exact start date." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-view-trek",
      "gokyo-lake-trek",
      "everest-base-camp-trek-with-helicopter-return",
    ],
    tripsNote: "Khumbu trips that run through both main seasons, with dates we can set around your preferred month.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "best-time-to-visit-nepal-trekking-seasons",
      "lukla-flight-guide",
      "winter-trekking-in-nepal-best-routes",
    ],
    tags: ["everest base camp", "best time", "trek seasons", "khumbu"],
    meta: {
      title: "Best Time for the Everest Base Camp Trek: Season by Season",
      description: "When to trek to Everest Base Camp — autumn clarity against spring warmth and expedition season, month-by-month verdicts, temperatures and flight reliability.",
      keywords: "best time Everest Base Camp, EBC season, Everest trek October, Everest Base Camp April, winter EBC trek",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "lukla-flight-guide",
    title: "The Lukla Flight: What to Expect and How to Plan Around It",
    cluster: "everest",
    date: "2026-04-03",
    hero: {
      image: "mardi-treks/everest-view-trek/everest-view-trek-04-first-lukla-view-from-jiri-to-ebc-route",
      alt: "The first view of Lukla from the Jiri approach to the Everest region, Nepal.",
    },
    excerpt:
      "Every Everest-region trek begins with a flight to a 527 m sloping runway at 2,860 m. Here is how the flight works, why it moves to Ramechhap in peak season, what the baggage limits are, how delays unfold, and the alternatives.",
    intro: [
      { p: "Tenzing-Hillary Airport at Lukla is the gateway to the Khumbu and the most talked-about airstrip in the world: a 527 m runway built on a shelf against a hillside at 2,860 m, sloping uphill to slow landing aircraft and downhill to help them take off. There is no road to the Everest region, so almost every trekker arrives this way." },
      { p: "The flight itself takes 25 to 35 minutes and is, in good weather, one of the great short flights anywhere. The planning around it is what deserves your attention." },
    ],
    sections: [
      {
        h2: "How the Flight Works",
        blocks: [
          {
            ul: [
              "<strong>Aircraft:</strong> 15 to 19 seat turboprops — Dornier 228, Let L-410 — operated by Nepal's domestic carriers.",
              "<strong>Timing:</strong> morning only, with the first slots from around 6.15 a.m. Valley winds build after about 11 a.m. and the airstrip closes.",
              "<strong>Duration:</strong> 25 to 35 minutes from Kathmandu, 12 to 15 minutes from Ramechhap.",
              "<strong>Baggage:</strong> 10 kg checked plus 5 kg hand. This is strictly enforced and is the real constraint on your packing.",
              "<strong>Seating:</strong> unassigned in practice. The right side gives the better valley view on the way in.",
              "<strong>Weather rule:</strong> visual approach only. If the valley is in cloud, nothing flies, regardless of conditions in Kathmandu.",
            ],
          },
          { p: "The approach is genuinely dramatic — a turn into the valley, the runway appearing as a small green shelf, and a short, firm landing that ends well before the hillside. Pilots flying this route are highly experienced on it; the airstrip demands that." },
        ],
      },
      {
        h2: "The Ramechhap Question",
        blocks: [
          { p: "In the peak weeks of spring and autumn, Kathmandu's single runway cannot absorb the volume of Lukla traffic alongside international flights. In those periods, <strong>Lukla services operate from Manthali airport at Ramechhap</strong>, roughly 135 km east of Kathmandu." },
          {
            table: {
              head: ["", "From Kathmandu", "From Ramechhap"],
              rows: [
                ["Getting there", "30–45 min to the domestic terminal", "4–5 hour drive, usually starting 1–2 a.m."],
                ["Flight time", "25–35 min", "12–15 min"],
                ["Reliability", "Good, but subject to Kathmandu congestion", "Better — shorter exposure to weather"],
                ["Cost", "Higher fare", "Lower fare plus the road transfer"],
                ["The catch", "Can be bumped by congestion", "A night drive at each end of the trek"],
              ],
            },
          },
          { p: "Which applies to your dates is confirmed a few weeks ahead rather than months, so it is covered at your pre-trek briefing. If the night drive does not appeal, we can arrange a hotel at Ramechhap the evening before, or a helicopter transfer instead." },
        ],
      },
      {
        h2: "When Flights Are Cancelled",
        blocks: [
          { p: "A realistic bad morning: you are at the airport at 5.30 a.m., the first slots depart, cloud closes the valley by 8 a.m., and by 11 a.m. everything is cancelled and rolled to the next day — behind the passengers already booked on it." },
          { p: "What we do:" },
          {
            ol: [
              "Book the earliest available slots, which have the best chance of getting out.",
              "Hold your hotel room in Kathmandu or Lukla rather than releasing it, so you are not searching for a bed at midday.",
              "Rebook with priority where the airline allows, and keep you informed rather than leaving you at the terminal.",
              "Offer a helicopter when the delay starts to threaten your international flight. Shared between five passengers, the per-seat cost is a fraction of a private charter.",
              "Adjust the trekking itinerary where it can be safely shortened, rather than cancelling the trip.",
            ],
          },
          { p: "What you should do: <strong>build two buffer days in Kathmandu before your international flight home.</strong> This is the single most useful planning decision for any Khumbu trek, and it costs two hotel nights." },
        ],
      },
      {
        h2: "Alternatives to the Fixed-Wing Flight",
        blocks: [
          {
            table: {
              head: ["Option", "Time", "When it makes sense"],
              rows: [
                ["[[trek:kathmandu-to-lukla-helicopter-flight|Helicopter, Kathmandu to Lukla]]", "About 1 hour", "Avoids the Ramechhap drive, far less weather-sensitive, and the fastest fix for a delay"],
                ["[[trek:lukla-to-kathmandu-helicopter-flight|Helicopter, Lukla to Kathmandu]]", "About 1 hour", "The return leg when the fixed-wing backlog is days deep"],
                ["[[trek:everest-base-camp-trek-with-helicopter-return|Trek with helicopter return]]", "Saves 3 days", "Fly out from Gorak Shep or Pheriche — compresses the trek without touching acclimatisation"],
                ["[[trek:namche-to-kathmandu-helicopter-flight|Helicopter from Namche]]", "About 2 hours", "A mid-trek exit that does not require walking back to Lukla"],
                ["Walk in from Jiri or Phaplu", "Adds 5–7 days", "The classic 1950s approach, with no flight at all and superb acclimatisation"],
                ["[[trek:pikey-peak-trek|Pikey Peak Trek]]", "8 days", "Everest views from a road-accessible trek with no mountain flight needed"],
              ],
            },
          },
          { p: "The walk-in from Jiri deserves more consideration than it gets. It is how Hillary and Tenzing approached Everest, it removes the flight risk entirely, and the gradual gain through the middle hills is the best acclimatisation available. It costs a week." },
        ],
      },
      {
        h2: "Practical Tips",
        blocks: [
          {
            ul: [
              "Wear your boots and down jacket on the flight rather than packing them — it protects you against delayed baggage and saves weight allowance.",
              "Keep medication, documents, electronics, and one warm layer in your hand baggage.",
              "Do not book an international flight for the same day you fly out of Lukla. Ever.",
              "There is no catering at Manthali and almost nothing at Lukla early in the morning. Carry a snack and water.",
              "Your ticket is issued in your passport name — a mismatch causes a real problem at the counter.",
              "Motion sickness tablets are worth having if you are prone to it. The approach is turbulent in the last ten minutes.",
              "If you are nervous about flying, say so to your guide. The flight is short, and knowing what happens when reduces most of it.",
            ],
          },
          { p: "One last reassurance and one caveat. The reassurance: Lukla is flown by pilots with extensive experience of this specific approach, in daylight and in visual conditions only. The caveat: weather cancellations are the system working, not failing. An airline that flies into Lukla in marginal cloud is not one you want to be on." },
        ],
      },
    ],
    faqs: [
      { question: "Why do Lukla flights operate from Ramechhap?", answer: "In peak spring and autumn weeks, Kathmandu's single runway cannot handle the volume of mountain traffic alongside international flights, so Lukla services move to Manthali airport at Ramechhap, four to five hours east by road. The flight becomes shorter and more reliable; the cost is a night drive at each end." },
      { question: "What is the baggage limit on a Lukla flight?", answer: "10 kg checked plus 5 kg hand baggage, enforced at the counter. That 15 kg total governs your packing — everything not needed on the trail stays in storage at your Kathmandu hotel. Wear your boots and down jacket rather than packing them." },
      { question: "Is the Lukla flight dangerous?", answer: "The airstrip is demanding and the approach is visual-only, which is why flights operate in the morning and cancel in cloud. Pilots on the route are highly experienced on it. The honest summary is that cancellations are the safety system working, and an operator willing to fly in marginal conditions is the thing to worry about." },
      { question: "What happens if my flight is cancelled?", answer: "You are rebooked on the next morning with priority where the airline allows, your hotel room is held, and we keep you informed rather than leaving you at the terminal. If the delay threatens your international flight, a helicopter is the realistic alternative, shared between passengers to bring the cost down." },
      { question: "How many buffer days should I allow?", answer: "Two, at the end of the trek, before your international departure. A delay flying in costs you a trekking day; a delay flying out can cost you a flight home. Two spare nights in Kathmandu is the right shape for any Khumbu trek." },
      { question: "Can I take a helicopter instead?", answer: "Yes, either as a plan or as a response to a delay. A helicopter avoids the Ramechhap drive, is much less weather-sensitive, and takes about an hour from Kathmandu. The per-seat cost drops substantially when a charter is shared between five passengers." },
      { question: "Is there a way to reach the Khumbu without flying?", answer: "Yes — walk in from Jiri or Phaplu, which adds five to seven days and gives the best acclimatisation of any approach. Alternatively, the Pikey Peak trek gives a superb Everest panorama from a road-accessible trail with no mountain flight at all." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "kathmandu-to-lukla-helicopter-flight",
      "lukla-to-kathmandu-helicopter-flight",
      "everest-base-camp-trek-with-helicopter-return",
      "pikey-peak-trek",
    ],
    tripsNote: "Khumbu trips and the flight options that serve them, including helicopter legs in either direction.",
    relatedPosts: [
      "domestic-flights-in-nepal-for-trekkers",
      "everest-base-camp-trek-complete-guide",
      "everest-base-camp-helicopter-return-guide",
      "everest-base-camp-trek-cost-breakdown",
    ],
    tags: ["lukla flight", "everest base camp", "domestic flights", "khumbu"],
    meta: {
      title: "The Lukla Flight: What to Expect and How to Plan Around It",
      description: "How the Lukla flight works, why it moves to Ramechhap in peak season, baggage limits, how cancellations unfold, and the helicopter and walk-in alternatives.",
      keywords: "Lukla flight, Lukla airport, Ramechhap Lukla flight, Lukla flight cancelled, Lukla baggage limit",
    },
  },
];
