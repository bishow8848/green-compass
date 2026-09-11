import type { BlogContent } from "./build";

export const planningE: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "how-to-train-for-a-nepal-trek",
    title: "How to Train for a Nepal Trek: A 12-Week Plan",
    cluster: "planning",
    date: "2026-02-17",
    hero: {
      image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-03-ghandruk-jhinudanda-54-modi-khola-dorf-2013-gje",
      alt: "Terraced hillsides and stone villages near Ghandruk, Annapurna Base Camp trek, Nepal.",
    },
    excerpt:
      "Nepal treks are not technically hard — they are long, repetitive, and relentlessly uphill and downhill. This twelve-week plan builds the specific endurance that matters, with advice on what to train if you only have a month.",
    intro: [
      { p: "The hardest thing about a Nepal trek is not a single climb. It is walking five to seven hours a day for ten days in a row, on stone staircases, at altitude, carrying a daypack, with a cold night's sleep between each day. Gym fitness helps with that but does not guarantee it, and plenty of marathon runners have found the descent from Chhomrong harder than they expected." },
      { p: "Training for Nepal is therefore about three specific things: sustained low-intensity endurance, legs that tolerate long descents, and hips and core that hold a pack comfortably. Twelve weeks is comfortable; eight is enough for a moderate trek; four means choosing your route more carefully." },
    ],
    sections: [
      {
        h2: "What You Are Actually Training For",
        blocks: [
          {
            table: {
              head: ["Trek type", "Typical day", "Total ascent over the trek", "Training target"],
              rows: [
                ["Short trek — Poon Hill, Ama Yangri", "4–5 hours, 500–800 m gain", "2,500–4,000 m", "Walk 4 hours comfortably on hills"],
                ["Classic teahouse — ABC, Langtang, Mardi Himal", "5–6 hours, 700–1,100 m gain", "5,000–7,000 m", "Walk 6 hours on consecutive days with a 7 kg pack"],
                ["High-altitude — Everest Base Camp, Gokyo", "5–7 hours, 400–800 m gain at altitude", "6,000–9,000 m", "Back-to-back 6-hour hill days, 12 days of them"],
                ["Pass crossing — Thorong La, Larke La, Three Passes", "7–10 hours on the pass day", "8,000–12,000 m", "One 8-hour day with 1,200 m of ascent, then walk again the next day"],
                ["Trekking peak — Island, Mera, Lobuche", "Summit day 8–12 hours from a high camp", "Plus technical ground", "All of the above, plus load-carrying and altitude experience"],
              ],
            },
          },
          { p: "Note the descent figures, which nobody publishes: a trek that climbs 7,000 m also descends 7,000 m, and it is the descending that damages knees. Our [[post:nepal-trek-difficulty-grades-explained|difficulty grades guide]] explains how we rate each route." },
        ],
      },
      {
        h2: "The 12-Week Plan",
        blocks: [
          { p: "Four sessions a week, with one long day at the weekend. The long walk is the session that matters; if you only do one thing, do that." },
          {
            table: {
              head: ["Weeks", "Long weekend walk", "Midweek", "Strength"],
              rows: [
                ["1–3", "2–3 hours on hills, no pack", "2 × 40 min brisk walk, jog, or cycle", "2 × 30 min: squats, lunges, step-ups, planks"],
                ["4–6", "3–4 hours on hills, 5 kg pack", "2 × 50 min, one with hill repeats or stairs", "2 × 40 min, add single-leg work and calf raises"],
                ["7–9", "5–6 hours, 7 kg pack, deliberate long descents", "1 × 60 min hills, 1 × 45 min steady", "2 × 45 min, heavier step-ups and deadlifts"],
                ["10–11", "Back-to-back weekend: 6 hours Saturday, 4 hours Sunday", "1 × 60 min hills, 1 × 45 min steady", "1 × 45 min, maintain rather than build"],
                ["12", "Taper: one 2-hour walk, rest", "2 × 30 min easy", "One light session, then rest"],
              ],
            },
          },
          { p: "The back-to-back weekend in weeks 10 and 11 is the most useful part of the whole plan. It is the only session that teaches you how your legs feel on day two, which is the question a trek asks every single morning." },
        ],
      },
      {
        h2: "Train the Descent",
        blocks: [
          { p: "More trekkers struggle with the downhills than the uphills. The descent from Chhomrong to Jhinu Danda on the [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] trek drops over 1,000 m on stone steps, and the walk out from [[trek:mardi-himal-trek|Mardi Himal]] to Siding does something similar. Eccentric loading — the muscle lengthening under load that happens on every downhill step — is what causes the stiffness on day three." },
          {
            ul: [
              "Include real descents in training walks rather than looping back on the flat. Find steps if you have no hills.",
              "Add single-leg step-downs and slow eccentric squats to the strength work.",
              "Train with trekking poles so the technique is familiar. Poles transfer a meaningful amount of load off your knees.",
              "Strengthen calves and hip abductors, which stabilise the knee on uneven ground.",
            ],
          },
        ],
      },
      {
        h2: "If You Only Have Four Weeks",
        blocks: [
          { p: "Prioritise in this order, and be realistic about route choice:" },
          {
            ol: [
              "<strong>Two long walks a week.</strong> Three to five hours on hills with a loaded pack beats any amount of gym work.",
              "<strong>Stairs.</strong> Twenty minutes of continuous stair climbing twice a week is the best proxy for Nepali trails available in a city.",
              "<strong>Break in your boots.</strong> Fifty kilometres minimum. A blister on day two ruins a trek more reliably than poor fitness.",
              "<strong>Pick a route that matches your preparation.</strong> With four weeks, [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek-from-pokhara|Mardi Himal from Pokhara]], or [[trek:langtang-valley-trek|Langtang Valley]] are sensible. A 5,416 m pass is not.",
            ],
          },
          { p: "And remember the thing training cannot do: fitness has no effect on how well you acclimatise. A very fit trekker who walks too fast is at more risk than a slower one. See our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]]." },
        ],
      },
      {
        h2: "Specific Advice by Situation",
        blocks: [
          {
            ul: [
              "<strong>Over 60:</strong> many of our guests are, and they do well. Allow a longer build-up, add a rest day to the itinerary, and prioritise balance work and poles for the descents.",
              "<strong>Knee trouble:</strong> get a physiotherapist's opinion, train the eccentric work consistently, use poles, and consider a route with shorter descents — Langtang and the Everest valley are kinder than Annapurna's stone staircases.",
              "<strong>Asthma:</strong> usually manageable. Carry two inhalers, tell your guide, and talk to a doctor about cold dry air at altitude before booking a high route.",
              "<strong>Heavier build:</strong> hill walking with a pack is the right training, and a porter is money well spent. Pace is never a problem on our trips; our guides walk at the back.",
              "<strong>Children and teenagers:</strong> generally strong walkers but less reliable at reporting symptoms. Keep the sleeping altitude moderate and the days shorter.",
              "<strong>No hills where you live:</strong> stairs, a treadmill at 10–15% incline, and a loaded pack. Use every one of them.",
            ],
          },
          { p: "A final note. Arrive rested rather than peaking. A trek is not a race, and the fortnight before you fly is better spent tapering, sorting kit, and sleeping than squeezing in one more big week." },
        ],
      },
    ],
    faqs: [
      { question: "How fit do I need to be for Everest Base Camp?", answer: "You need to walk five to seven hours a day for twelve consecutive days at altitude, with a 7 kg daypack. That is moderate endurance rather than athleticism — no technical skill and no running speed is required. If you can comfortably manage a six-hour hill walk two days in a row, you are in the right territory." },
      { question: "How long should I train before a Nepal trek?", answer: "Twelve weeks is ideal, eight is enough for a moderate teahouse trek, and four weeks means choosing an easier route. The single most valuable session is a long weekend walk on hills with a loaded pack, repeated weekly." },
      { question: "Does being fit prevent altitude sickness?", answer: "No. Acclimatisation is unrelated to fitness, and very fit trekkers are sometimes at greater risk because they outpace the group and their own adaptation. Fitness makes the days comfortable; a sensible ascent profile is what keeps you well." },
      { question: "Should I train with a weighted pack?", answer: "Yes, from about week four. Build to 7 kg, which is what a loaded daypack actually weighs with two litres of water and waterproofs. Training with 20 kg is unnecessary unless you intend to carry your own duffel." },
      { question: "What is the best gym exercise for trekking?", answer: "Weighted step-ups onto a knee-height box, done slowly in both directions. They train the ascent and the descent together and load the exact muscles a Nepali staircase loads. Single-leg squats, calf raises, and planks round it out." },
      { question: "I am over 60 — can I still trek in Nepal?", answer: "Many of our guests are, on routes from Poon Hill to Everest Base Camp. Allow a longer training build-up, add a rest day to the itinerary, use trekking poles, and hire a porter. Experience and steady pacing count for more at altitude than youth." },
      { question: "Will trekking poles really help?", answer: "On the descents, substantially — they take a meaningful share of the load off your knees on long staircases. Train with them before the trip so the rhythm is familiar, and learn to shorten them for climbs and lengthen them for descents." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "annapurna-circuit-trek",
      "mardi-himal-trek",
    ],
    tripsNote: "Routes whose training demands are described above, with itineraries paced for acclimatisation rather than speed.",
    relatedPosts: [
      "nepal-trek-difficulty-grades-explained",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "how-hard-is-the-everest-base-camp-trek",
      "nepal-trekking-packing-list",
    ],
    tags: ["trek training", "fitness", "nepal trekking", "trip preparation"],
    meta: {
      title: "How to Train for a Nepal Trek: A 12-Week Plan",
      description: "A twelve-week training plan for trekking in Nepal, built around long hill walks, back-to-back days and descent strength — plus what to do with only four weeks.",
      keywords: "training for Nepal trek, Everest Base Camp training plan, trekking fitness, how fit for Annapurna, trek preparation",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-trek-difficulty-grades-explained",
    title: "Nepal Trek Difficulty Grades Explained: Easy to Extreme",
    cluster: "planning",
    date: "2026-02-20",
    hero: {
      image: "mardi-treks/manaslu-circuit-trek/manaslu-circuit-trek-03-larkya-glacier-lake-and-himalayan-panorama-near-larke-pass-m",
      alt: "Larkya glacier lake and the Himalayan panorama near Larke Pass, Manaslu Circuit trek, Nepal.",
    },
    excerpt:
      "What easy, moderate, challenging, difficult and extreme actually mean on our trip pages — the daily hours, altitude, terrain, remoteness and technical demands behind each grade, with example routes for every level.",
    intro: [
      { p: "Every trekking company grades its routes, and no two use the same scale. A trek sold as moderate by one operator can be a 5,400 m pass crossing with a 10-hour day; sold as challenging by another, it can be a well-spaced walk to 4,100 m. That inconsistency makes the single most important planning decision — is this route right for me — harder than it should be." },
      { p: "This is what our five grades mean, and the four factors we weigh to set them." },
    ],
    sections: [
      {
        h2: "The Four Factors Behind a Grade",
        blocks: [
          {
            ol: [
              "<strong>Daily effort</strong> — hours walking, metres of ascent and descent, and how many consecutive days without a rest.",
              "<strong>Maximum sleeping altitude</strong> — which drives both altitude risk and how cold and badly you sleep.",
              "<strong>Terrain and technical demand</strong> — stone staircases, moraine, snow, glacier, fixed rope, or a pass that needs crampons.",
              "<strong>Remoteness</strong> — how far you are from a road, a health post, and a helicopter landing site, and whether lodges exist at all.",
            ],
          },
          { p: "Remoteness is the one most scales leave out, and it is why [[trek:makalu-base-camp-trek|Makalu Base Camp]] is a harder proposition than [[trek:everest-base-camp-trek|Everest Base Camp]] despite being lower. On the Everest trail you are never more than a few hours from a lodge with a phone; in the Barun valley you can be two days from the nearest road." },
        ],
      },
      {
        h2: "The Five Grades",
        blocks: [
          {
            table: {
              head: ["Grade", "Daily walking", "Max altitude", "Who it suits", "Example routes"],
              rows: [
                ["Easy", "3–5 hours, gentle gradients", "Up to about 3,300 m", "Anyone in reasonable health, families, first-timers", "Poon Hill, Ama Yangri, Nagarkot, day tours and safaris"],
                ["Moderate", "5–6 hours, sustained climbs and long descents", "3,500–4,500 m", "Regular walkers with some hill experience", "Mardi Himal, Annapurna Base Camp, Langtang Valley, Gokyo"],
                ["Challenging", "6–8 hours, one or more 5,000 m passes or long remote stages", "4,500–5,500 m", "Fit, experienced trekkers comfortable on consecutive long days", "Manaslu Circuit, Tilicho Lake, Short Annapurna Circuit, Nar Phu"],
                ["Difficult", "7–9 hours, high passes, snow, very remote", "5,000–5,800 m", "Experienced high-altitude trekkers, ideally with pass experience", "Everest Three Passes, Kanchenjunga, Upper Dolpo, Tilman Pass"],
                ["Extreme", "Long days on technical ground, glacier travel, camping", "Above 5,500 m, or a climbing summit", "Mountaineers and trekkers with technical skills", "Sherpani Col, Tashi Lapcha, Saribung, peak climbs and expeditions"],
              ],
            },
          },
        ],
      },
      {
        h2: "Where Trekkers Misjudge the Grade",
        blocks: [
          { p: "Four patterns come up repeatedly:" },
          {
            ul: [
              "<strong>Assuming altitude equals difficulty.</strong> [[trek:everest-base-camp-trek|Everest Base Camp]] reaches 5,545 m at Kala Patthar but is graded moderate, because the profile is gradual, the trail is good, and lodges and rescue are close. [[trek:khori-himal-trek|Khori Himal]] at 3,850 m is harder on the legs.",
              "<strong>Underestimating descent.</strong> The Annapurna stone staircases punish knees more than any climb on the route.",
              "<strong>Ignoring consecutive days.</strong> Seven days of six hours is much harder than two days of eight, and most people train for the wrong one.",
              "<strong>Treating a short trek as an easy one.</strong> The [[trek:short-annapurna-circuit-trek|Short Annapurna Circuit]] compresses a 5,416 m pass into seven days, which makes it harder than the full circuit, not easier.",
            ],
          },
          { p: "That last point is worth dwelling on when you compare a short itinerary with a long one. Fewer days at the same altitude means less acclimatisation, not less effort." },
        ],
      },
      {
        h2: "Choosing Your Grade Honestly",
        blocks: [
          { p: "Work from what you have actually done rather than what you intend to do before departure." },
          {
            table: {
              head: ["If your honest experience is…", "Start with", "Then progress to"],
              rows: [
                ["Occasional day walks, no multi-day trekking", "Easy — Poon Hill, Ama Yangri, Everest View", "Moderate teahouse treks"],
                ["Regular weekend hill walking", "Moderate — Mardi Himal, Annapurna Base Camp, Langtang", "Everest Base Camp, Gokyo, Tsum Valley"],
                ["One or two high-altitude treks completed", "Challenging — Manaslu Circuit, Annapurna Circuit, Tilicho", "Three Passes, Kanchenjunga"],
                ["Several 5,000 m treks, comfortable with cold camps", "Difficult — Three Passes, Upper Dolpo, Rolwaling", "Extreme passes and trekking peaks"],
                ["Alpine climbing experience with rope and crampons", "Trekking peaks — Yala, Island, Mera", "Ama Dablam and 8,000 m expeditions"],
              ],
            },
          },
          { p: "Two practical notes on reading any itinerary. The daily hours quoted are walking time, not elapsed time — add an hour for tea stops, photographs and lunch, so a six-hour stage is a seven to eight hour day from lodge to lodge. And the metres of ascent matter more than the distance: a nine-kilometre day that climbs 1,100 m of stone steps between Chhomrong and Sinuwa is harder than a twenty-kilometre day on the Mustang road." },
          { p: "If a grade still feels ambiguous, the question to ask an operator is not how hard is it but what is the longest day and how much does it climb. Any route can be made harder by compressing it, and the day count is the clearest signal of how much margin an itinerary leaves you." },
          { p: "If you are between two grades, take the lower one and add a side trip. A trek you finish comfortably with energy to climb Kyanjin Ri or Gokyo Ri is a far better trip than one you survive. And tell us honestly at the enquiry stage what you have done — we would much rather move you to the right route before you book than watch an itinerary unravel at 4,900 m." },
        ],
      },
    ],
    faqs: [
      { question: "What does moderate difficulty actually mean?", answer: "Five to six hours of walking a day on well-used trails, with sustained climbs and long descents, sleeping between roughly 3,500 m and 4,500 m. Annapurna Base Camp, Mardi Himal, Langtang Valley and Everest Base Camp all sit here. It suits a regular walker who has done hill days before, not necessarily anything at altitude." },
      { question: "Is Everest Base Camp harder than Annapurna Base Camp?", answer: "Higher, longer, and colder, but not necessarily harder underfoot. Everest's profile is gradual with two built-in rest days and excellent trails; Annapurna packs more ascent and descent into fewer days and includes some punishing stone staircases. Altitude is the Everest challenge; legs are the Annapurna one." },
      { question: "Which Nepal trek is best for a complete beginner?", answer: "Poon Hill, at three to seven days and a maximum of 2,885 m, gives a genuine Annapurna sunrise with almost no altitude risk. Mardi Himal from Pokhara is the next step up, and Ama Yangri near Kathmandu is excellent if your time is very short." },
      { question: "Do I need technical skills for any of these grades?", answer: "Not for easy, moderate, or challenging routes — no ropes, crampons, or climbing experience. Difficult routes occasionally need microspikes on an icy pass, which your guide will advise on. Extreme graded trips and trekking peaks involve rope work, and we run pre-climb training for those." },
      { question: "How do you decide a trek is challenging rather than moderate?", answer: "Usually a 5,000 m pass, a run of seven-hour days without a rest, or a stage where the nearest road is more than a day away. Any one of those three pushes a route up a grade, because each one reduces your margin if something goes wrong." },
      { question: "Can I do a difficult trek as my first trip to Nepal?", answer: "It is possible with real hill-walking experience and good preparation, but we rarely recommend it. The unknown on a first visit is how your body responds to sleeping above 4,000 m, and a difficult route gives you nowhere to find that out safely. A moderate trek first, a difficult one next time, is the pattern that works." },
    ],
    relatedTreks: [
      "poonhill-trek",
      "annapurna-base-camp-trek",
      "manaslu-circuit-trek",
      "everest-three-pass-trek",
      "sherpani-col-passes-trek",
    ],
    tripsNote: "One route at each grade, from easy to extreme — every trip page states its grade and daily hours.",
    relatedPosts: [
      "how-to-train-for-a-nepal-trek",
      "first-time-trekking-in-nepal-what-to-know",
      "how-hard-is-the-everest-base-camp-trek",
      "off-the-beaten-path-treks-in-nepal",
    ],
    tags: ["trek difficulty", "trip planning", "nepal trekking", "route choice"],
    meta: {
      title: "Nepal Trek Difficulty Grades Explained: Easy to Extreme",
      description: "What easy, moderate, challenging, difficult and extreme mean on a Nepal trek — daily hours, altitude, terrain and remoteness, with example routes for each grade.",
      keywords: "Nepal trek difficulty, trekking grades Nepal, easy treks Nepal, challenging treks, how hard is Everest Base Camp",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "first-time-trekking-in-nepal-what-to-know",
    title: "First Time Trekking in Nepal: 18 Things Worth Knowing",
    cluster: "planning",
    date: "2026-02-24",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-04-ghorepaani-ghandruk-trail-1",
      alt: "Stone houses at Ghandruk on the Poon Hill trek, Annapurna region, Nepal.",
    },
    excerpt:
      "The practical things first-time trekkers in Nepal usually learn on day four — about pace, cold, cash, lodges, altitude, photography, etiquette and what to do when the plan changes — collected before you leave home.",
    intro: [
      { p: "Nepal is an unusually forgiving place to take a first long walk. The trails are well used, the lodges are friendly, the food is good, and nothing about a teahouse trek is technical. But there are a dozen or so things that almost every first-timer works out somewhere around day four, and knowing them in advance makes the first three days better." },
      { p: "These are in rough order of how much difference they make." },
    ],
    sections: [
      {
        h2: "On the Trail",
        blocks: [
          {
            ol: [
              "<strong>Walk slower than feels natural.</strong> Your guide's pace will seem absurdly slow on day one and exactly right on day six. At altitude, if you cannot hold a conversation, you are going too fast.",
              "<strong>Start early.</strong> Mornings are clear, afternoons cloud over, and the best lodge rooms go to whoever arrives first. Most trekking days begin between 7 and 8 a.m.",
              "<strong>Let porters and mule trains pass</strong> on the inside, away from the drop. A loaded mule will not give way.",
              "<strong>Take your layers off before you sweat, and put them on before you cool.</strong> Damp clothing at 4,000 m is genuinely dangerous, and the stop-start rhythm of managing it is part of trekking.",
              "<strong>Use poles on the descents.</strong> Knees, not lungs, are what most people complain about on day eight.",
              "<strong>Eat and drink more than you want to.</strong> Appetite falls at altitude while energy demand rises. Four litres of water and a big dinner are performance decisions.",
            ],
          },
        ],
      },
      {
        h2: "About Altitude and Your Body",
        blocks: [
          {
            ol: [
              "<strong>A headache on the first night at 3,400 m is normal; ignoring it is not.</strong> Tell your guide when it starts, not at dinner the next day.",
              "<strong>You will sleep badly above 4,000 m.</strong> Broken sleep and vivid dreams are part of acclimatisation, not a sign something is wrong. Do not take sleeping pills.",
              "<strong>Acclimatisation days are not rest days.</strong> You climb several hundred metres and come back down. It is the most useful walking you will do.",
              "<strong>Fitness does not protect you.</strong> Read our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] before you fly — it is the most important thing on this site.",
              "<strong>Almost everyone gets the dry cough.</strong> Cold dry air at altitude irritates the airway. Lozenges and a buff over your mouth help.",
            ],
          },
        ],
      },
      {
        h2: "Money, Power, and Connectivity",
        blocks: [
          {
            ol: [
              "<strong>There are no ATMs above the road head.</strong> Withdraw Nepali rupees in Kathmandu or Pokhara for the entire trek, in small notes. Budget roughly USD 10–15 a day for extras plus tips.",
              "<strong>Charging costs money and gets slower as you climb.</strong> Bring a power bank, keep it warm overnight, and put your phone in flight mode.",
              "<strong>A local SIM beats lodge Wi-Fi.</strong> Ncell or NTC data is cheap and covers most villages on the main trails. Buy it on your first day in Kathmandu.",
              "<strong>Tell people at home you will be out of contact.</strong> Signal drops for days at a time on many routes, and silence is not news.",
            ],
          },
        ],
      },
      {
        h2: "Culture and Etiquette",
        blocks: [
          {
            ol: [
              "<strong>Walk clockwise around chortens, mani walls, and stupas,</strong> and do not move or sit on prayer stones.",
              "<strong>Ask before photographing people,</strong> and accept no as an answer. Inside monasteries, ask the monk on duty.",
              "<strong>Greet people with namaste</strong> and a slight bow rather than a handshake. It works everywhere in Nepal.",
              "<strong>Dress modestly in villages</strong> — shoulders and knees covered, particularly at religious sites. Bare chests are not acceptable in lodges.",
              "<strong>Use your right hand</strong> for giving, receiving, and eating. The left is considered unclean.",
              "<strong>Remove your boots</strong> before entering a lodge's living quarters, a home, or a temple.",
              "<strong>Do not give sweets or money to children on the trail.</strong> It encourages begging and damages school attendance. Donate to a school or a community fund instead — ask your guide which.",
            ],
          },
        ],
      },
      {
        h2: "Expectations Worth Adjusting",
        blocks: [
          {
            ul: [
              "<strong>The plan will change.</strong> Weather, a flight, a lodge, someone's stomach. The itinerary is a sound intention, not a contract with the mountain, and the flexibility to adapt is exactly what you are paying a guide for.",
              "<strong>You will not be alone on the main routes in October.</strong> If solitude matters more than the famous view, ask us about [[trek:khopra-danda-trek|Khopra Danda]], [[trek:pikey-peak-trek|Pikey Peak]], or the [[trek:mundum-trek|Mundum trail]] instead.",
              "<strong>It will be colder indoors than you expect.</strong> Lodge bedrooms are unheated above 3,500 m. Your sleeping bag, not the building, keeps you warm.",
              "<strong>The mountains are bigger than the photographs.</strong> Every guest says some version of this, and it is the reason the cheapest trek in this catalogue is still worth the flight.",
            ],
          },
          { p: "If you are choosing a first route, our [[post:nepal-trek-difficulty-grades-explained|difficulty grades guide]] sets out what each level demands, and [[post:best-time-to-visit-nepal-trekking-seasons|the seasons guide]] will tell you whether your dates suit the trek you have in mind." },
        ],
      },
    ],
    faqs: [
      { question: "Which trek should I choose for my first time in Nepal?", answer: "Poon Hill if you have a week or less and want a genuine Annapurna sunrise with minimal altitude. Mardi Himal if you want a ridge above the treeline in five to nine days. Annapurna Base Camp or Langtang Valley if you have ten days and want a full teahouse trek. Everest Base Camp is a reasonable first trek with good preparation and a 14-day itinerary." },
      { question: "Do I need previous trekking experience?", answer: "For easy and moderate routes, no — regular walking fitness and the willingness to go slowly are enough. What matters more is honest self-assessment: tell us what you have actually done and we will match the route, rather than the other way round." },
      { question: "Is it safe to trek in Nepal as a first-timer?", answer: "Yes, with a licensed guide and a sensibly paced itinerary — which is now also the legal requirement in protected areas. The real risks are altitude, which is managed by the ascent profile, and ankles on uneven ground. Crime against trekkers is rare." },
      { question: "How much cash should I take on the trail?", answer: "For a two-week trek, NPR 25,000 to 40,000 in small notes covers showers, charging, Wi-Fi, snacks, drinks and tips. There are no ATMs above the road head and cards are not accepted, so withdraw it before you leave the city." },
      { question: "Will I be able to shower and do laundry?", answer: "Hot showers are available at most lodges below about 4,000 m for NPR 300 to 700, and laundry services exist in the bigger villages. Higher up, washing means a bowl of hot water, and most trekkers quietly stop worrying about it." },
      { question: "What happens if I cannot continue?", answer: "Your guide arranges the descent — walking down with an assistant guide, a horse or a porter's support where the terrain allows, or a helicopter if it is a medical emergency. This is why groups have an assistant guide above a certain size: the trek can continue while you are looked after." },
      { question: "Should I book a group trip or a private one?", answer: "A private trip gives you your own pace, dates, and itinerary, and our pricing is tiered by group size so two or three friends travelling together is not expensive. Joining a group is cheaper and sociable. Either way you get a licensed local guide rather than a coach party." },
    ],
    relatedTreks: [
      "poonhill-trek",
      "mardi-himal-trek",
      "annapurna-base-camp-trek",
      "langtang-valley-trek",
      "everest-base-camp-trek",
    ],
    tripsNote: "The routes we most often recommend for a first trek in Nepal, in rough order of commitment.",
    relatedPosts: [
      "nepal-trek-difficulty-grades-explained",
      "best-time-to-visit-nepal-trekking-seasons",
      "teahouse-trekking-in-nepal-explained",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["first time trekking", "nepal trekking tips", "trip planning", "trekking etiquette"],
    meta: {
      title: "First Time Trekking in Nepal: 18 Things Worth Knowing",
      description: "Practical advice for a first Nepal trek — pace, altitude, cold lodges, cash, connectivity, cultural etiquette, and the expectations worth adjusting before you fly.",
      keywords: "first time trekking Nepal, Nepal trekking tips, beginner trek Nepal, trekking etiquette Nepal, what to know Nepal trek",
    },
  },
];
