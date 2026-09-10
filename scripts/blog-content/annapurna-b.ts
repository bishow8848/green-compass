import type { BlogContent } from "./build";

export const annapurnaB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "thorong-la-pass-crossing-guide",
    title: "Crossing Thorong La: The Biggest Day on the Annapurna Circuit",
    cluster: "annapurna",
    date: "2026-05-22",
    hero: {
      image: "mardi-treks/short-annapurna-circuit-trek/short-annapurna-circuit-trek-03-thorong-la-muktinath-valley-himalaya-nepal",
      alt: "Prayer flags at Thorong La pass above the Muktinath valley, Nepal.",
    },
    excerpt:
      "A 4 a.m. start, 1,000 m of climbing to 5,416 m, then 1,600 m down to Muktinath. What the Thorong La day actually involves, how to prepare for it, what can go wrong, and why direction of travel matters more than fitness.",
    intro: [
      { p: "Thorong La is the highest point most trekkers in Nepal will ever stand on, and the day that crosses it is the single biggest day on any teahouse trek in the country. It is not technical — there is no rope, no crampon, no exposure. It is simply long, high, cold, and unforgiving of poor acclimatisation." },
      { p: "Handled properly it is one of the great days of walking in the Himalaya. Handled badly it is the reason a trek ends in a helicopter." },
    ],
    sections: [
      {
        h2: "The Day in Outline",
        blocks: [
          {
            table: {
              head: ["Time", "Where", "Altitude", "Notes"],
              rows: [
                ["3.30–4.00 a.m.", "Wake at Thorong Phedi or High Camp", "4,450 / 4,900 m", "Tea and a minimal breakfast. Nobody has slept well."],
                ["4.00–4.30 a.m.", "Leave", "—", "Headlamp, all layers on, -10 to -20 °C"],
                ["6.30–7.30 a.m.", "False summits begin", "5,000 m +", "A long series of rises, each looking like the pass. None of them is."],
                ["8.00–10.00 a.m.", "Thorong La", "5,416 m", "Prayer flags, a sign, a seasonal tea hut. 15–20 minutes, no longer."],
                ["10.00 a.m.–2.00 p.m.", "Descent to Muktinath", "3,760 m", "1,600 m down on loose scree and dust. Harder than the climb."],
                ["Early afternoon", "Muktinath", "3,760 m", "Lodge, food, sleep, relief"],
              ],
              note: "Total seven to ten hours depending on group pace and conditions. Times shift with the season and your starting lodge.",
            },
          },
        ],
      },
      {
        h2: "Direction: The Decision Made Ten Days Earlier",
        blocks: [
          { p: "This is the most important thing on this page. Walk the circuit <strong>anticlockwise</strong> — Besisahar to Manang to Thorong La to Muktinath to Jomsom." },
          {
            table: {
              head: ["", "Anticlockwise (correct)", "Clockwise (don't)"],
              rows: [
                ["Approach to the pass", "Ten days of gradual gain from 760 m", "Two or three days from Jomsom at 2,720 m"],
                ["Night before the pass", "4,450–4,900 m, already acclimatised", "3,800 m at best, poorly acclimatised"],
                ["Climb on the day", "About 1,000 m", "About 1,600 m"],
                ["Acclimatisation days available", "Manang, at 3,519 m, with 4,600 m day walks", "None of comparable value"],
                ["Altitude risk", "Manageable", "Substantial"],
              ],
            },
          },
          { p: "Anyone offering a clockwise circuit is either inexperienced or cutting corners. The mountain does not care which way the itinerary reads." },
        ],
      },
      {
        h2: "Preparing in the Days Before",
        blocks: [
          {
            ol: [
              "<strong>Take at least one full acclimatisation day at Manang (3,519 m),</strong> two if you can. Climb to Ice Lake at 4,600 m, Gangapurna Lake, or Praken Gompa at 3,950 m, and come back down to sleep.",
              "<strong>Go to the HRA altitude lecture at Manang.</strong> It is free, runs most afternoons in season, and is delivered by doctors who spend their season treating exactly the mistakes trekkers are about to make.",
              "<strong>Keep the stages above Manang short.</strong> Yak Kharka, then Ledar, then Thorong Phedi — 300 to 400 m a night, which is what our itinerary does.",
              "<strong>Decide Phedi or High Camp the day before.</strong> Thorong Phedi at 4,450 m is the safer sleep; High Camp at 4,900 m makes the pass day shorter but is a 450 m jump and a worse night. Your guide will advise based on how the group is coping.",
              "<strong>Drink four litres a day and eat properly,</strong> however little you feel like it.",
              "<strong>Pack your daypack the night before</strong> and lay out every layer. At 3.30 a.m. at -15 °C, you will not want to be finding gloves.",
            ],
          },
          { p: "Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]] covers the symptoms to watch for, and why a headache at Ledar is a conversation with your guide rather than something to push through." },
        ],
      },
      {
        h2: "What to Wear and Carry",
        blocks: [
          {
            ul: [
              "<strong>Every layer you own</strong> for the first two hours — base layer, thermal, fleece, down jacket, shell. You will shed some after sunrise.",
              "<strong>Two glove layers</strong> — liners plus insulated gloves or mittens. Fingers are the first thing to suffer.",
              "<strong>Warm hat and a buff over your face.</strong> The wind on the pass is the problem, not the temperature.",
              "<strong>Headlamp with fresh batteries.</strong> You walk two hours in the dark.",
              "<strong>Category 3 or 4 sunglasses.</strong> Snow glare above 5,000 m is serious, and the light arrives suddenly.",
              "<strong>Trekking poles.</strong> Non-negotiable for the 1,600 m descent.",
              "<strong>Two litres of water, insulated or inside your jacket</strong> — a bladder hose freezes.",
              "<strong>Snacks you will actually eat cold</strong> — chocolate, nuts, dried fruit. Appetite at 5,000 m is poor and energy demand is high.",
              "<strong>Microspikes</strong> if there has been recent snow. Your guide decides.",
            ],
          },
        ],
      },
      {
        h2: "What Can Go Wrong",
        blocks: [
          {
            ul: [
              "<strong>Altitude sickness.</strong> The pass is not the place to develop symptoms. If you have a headache that will not clear at Thorong Phedi, you do not go over — you descend, and rejoin by flying from Jomsom if needed.",
              "<strong>Snow closing the pass.</strong> In winter and after storms. Once past Manang the only alternative is turning back, so the decision is taken early with information from lodges on both sides.",
              "<strong>Wind.</strong> This is the most common genuine misery. Thorong La funnels wind, and by late morning it can be brutal. It is the reason for the 4 a.m. start.",
              "<strong>Underestimating the descent.</strong> More people are injured going down to Muktinath than coming up to the pass. Loose scree, tired legs, and 1,600 m.",
              "<strong>Frostnip on fingers and toes.</strong> Rare with proper gloves, common without. Keep moving and tell your guide the moment a digit goes numb.",
              "<strong>Pushing on when the group should wait.</strong> The 2014 Annapurna snowstorm, which killed more than 40 people including trekkers on this pass, is the reason a guide who says we wait is the guide you want.",
            ],
          },
        ],
      },
      {
        h2: "Which Itineraries Cross It",
        blocks: [
          {
            ul: [
              "<strong>[[trek:annapurna-circuit-trek|Annapurna Circuit, 15 days]]</strong> — the standard and best-acclimatised version.",
              "<strong>[[trek:annapurna-circuit-with-tilicho-lake-trek|Circuit with Tilicho Lake, 14 days]]</strong> — the Tilicho detour also doubles as excellent pre-pass acclimatisation.",
              "<strong>[[trek:short-annapurna-circuit-trek|Short Annapurna Circuit, 7 days]]</strong> — jeep transfers to Manang, then the pass. Graded challenging, and only for trekkers with previous altitude experience.",
              "<strong>[[trek:saribung-pass-trek|Saribung Pass]]</strong> and other high-pass treks in the region, for trekkers who want more than one 5,000 m crossing.",
            ],
          },
          { p: "If you want the Annapurna region without a 5,416 m pass, the [[trek:jomsom-muktinath-trek|Jomsom Muktinath trek]] covers the western side with no crossing, and [[trek:tilicho-lake-trek|the Tilicho Lake trek]] reaches 4,919 m and returns the way it came." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Thorong La?", answer: "5,416 m. It is the highest point on the Annapurna Circuit and the highest altitude most trekkers in Nepal ever reach. The climb to it is about 1,000 m from Thorong Phedi, followed by a 1,600 m descent to Muktinath on the other side." },
      { question: "How hard is the Thorong La crossing?", answer: "It is the hardest day on the trek: seven to ten hours starting at 4 a.m., with 1,000 m of ascent in the cold and dark followed by a long loose descent. There is nothing technical about it. What makes it hard is altitude, wind, cold, and length, in that order." },
      { question: "Why do you start at 4 a.m.?", answer: "Wind. Thorong La funnels wind that builds steadily through the morning and can make the crossing genuinely unpleasant or unsafe by late morning. Starting early also means you reach Muktinath in the early afternoon with daylight in hand." },
      { question: "Should I sleep at Thorong Phedi or High Camp?", answer: "Phedi at 4,450 m is the safer sleep and the better acclimatisation choice; High Camp at 4,900 m makes the pass day an hour shorter but involves a 450 m jump and a noticeably worse night. Your guide decides on the day based on how the group is coping." },
      { question: "What happens if the pass is closed by snow?", answer: "You wait, or you turn back. Once past Manang there is no alternative route over, so the decision is taken with information from lodges on both sides of the pass. The itinerary carries spare capacity for a wait, and flying out from Jomsom is the fallback if you have to retreat." },
      { question: "Can I cross Thorong La in winter?", answer: "Sometimes, but you cannot plan on it. The pass can close for days after a snowfall, and there is no escape route once committed. We do not recommend a winter Annapurna Circuit, and we would steer you toward a lower Annapurna route or Pikey Peak instead." },
      { question: "Is the descent really worse than the climb?", answer: "For most people, yes. It is 1,600 m on loose scree and dust, on legs that have already done six hours above 4,500 m, and it is where most injuries on the day happen. Trekking poles and a slow, deliberate pace are the answer." },
      { question: "Do I need oxygen or medication?", answer: "Our guides carry emergency oxygen and medication on this crossing, and a pulse oximeter for twice-daily readings above 4,000 m. You should not be relying on either — if you need oxygen to cross a pass, the correct action is to descend. Discuss acetazolamide with your own doctor before the trip." },
    ],
    relatedTreks: [
      "annapurna-circuit-trek",
      "annapurna-circuit-with-tilicho-lake-trek",
      "short-annapurna-circuit-trek",
      "jomsom-muktinath-trek",
    ],
    tripsNote: "Itineraries that cross Thorong La, all run anticlockwise with acclimatisation days at Manang.",
    relatedPosts: [
      "annapurna-circuit-trek-complete-guide",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "tilicho-lake-trek-guide",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["thorong la", "annapurna circuit", "high pass", "nepal trekking"],
    meta: {
      title: "Crossing Thorong La: The Biggest Day on the Annapurna Circuit",
      description: "The Thorong La crossing hour by hour — why direction matters, how to prepare at Manang, what to wear, what can go wrong, and which itineraries cross it.",
      keywords: "Thorong La pass, Thorong La crossing, Annapurna Circuit pass, Thorong Phedi High Camp, Muktinath descent",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mardi-himal-trek-complete-guide",
    title: "Mardi Himal Trek: The Complete Guide to Nepal's Best Short Ridge Walk",
    cluster: "annapurna",
    date: "2026-05-26",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-00-high-camp-of-mardi-himal-trek-08",
      alt: "High Camp on the Mardi Himal trek beneath Machhapuchhre, Nepal.",
    },
    excerpt:
      "A high ridge directly under Machhapuchhre, opened to trekkers only in 2012 and still quieter than anything else in Annapurna. Route, difficulty, the five-day Pokhara version, best season, and why it may be the best short trek in Nepal.",
    intro: [
      { p: "The Mardi Himal trail was opened to trekkers in 2012, which makes it new by Nepali standards, and it is the best short trek in the country. It climbs from the Annapurna foothills through dense moss-hung rhododendron forest, breaks above the treeline onto an open ridge, and follows that ridge north with <strong>Machhapuchhre rising almost vertically ahead</strong> and the whole Annapurna range filling the horizon." },
      { p: "Five days from Pokhara, nine from Kathmandu, a maximum of 3,580 m at High Camp, and a fraction of the traffic on the Annapurna Base Camp trail three valleys west. If someone asks us for one recommendation with a week to spare, this is it." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "9 days from Kathmandu, 5 days from Pokhara"],
                ["Highest camp", "High Camp, 3,580 m"],
                ["Highest point", "Mardi Himal Base Camp / Upper Viewpoint, up to 4,500 m"],
                ["Difficulty", "Moderate — a sustained forest climb and an exposed ridge"],
                ["Best seasons", "March to May, October to November"],
                ["Access", "Road from Pokhara to Kande, about 1.5 hours"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
                ["Accommodation", "Teahouse lodges, simple and cold at High Camp"],
              ],
            },
          },
          { p: "We run it as a [[trek:mardi-himal-trek|9-day trek from Kathmandu]] and a [[trek:mardi-himal-trek-from-pokhara|5-day trek from Pokhara]], and combine it with the Sanctuary on the [[trek:mardi-himal-trek-with-annapurna-base-camp|14-day double base camp route]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Kande to Forest Camp (1,770 m to 2,550 m)" },
          { p: "A road transfer from Pokhara to Kande, then a climb past Australian Camp and Pitam Deurali into the forest. From Deurali the trail enters a dense, dripping cloud forest of rhododendron and oak hung with moss and lichen, and climbs steadily for three hours to Forest Camp. In late March and April this section is in full rhododendron bloom and is one of the best forest walks in Nepal." },
          { h3: "Forest Camp to High Camp (2,550 m to 3,580 m)" },
          { p: "Through Low Camp and Badal Danda — cloud hill — and up onto the ridge. The treeline breaks around 3,200 m and the walk changes completely: open ridge, rhododendron scrub, and the Annapurna range appearing on the left while Machhapuchhre builds ahead. High Camp at 3,580 m is a handful of simple lodges on an exposed shoulder, cold at night and spectacular at dawn." },
          { h3: "High Camp to the Upper Viewpoint and Base Camp" },
          { p: "The big morning. A pre-dawn start along the narrowing ridge to the <strong>Lower Viewpoint (around 3,900 m)</strong> and then the <strong>Upper Viewpoint / Mardi Himal Base Camp (up to 4,500 m)</strong>, with Machhapuchhre almost directly overhead, Annapurna South, Hiunchuli and Mardi Himal along the skyline, and the Annapurna Sanctuary visible to the west. It is two to four hours up depending on how far you go, and on clear mornings it is one of the great viewpoints in the Himalaya." },
          { h3: "Down to Siding and Pokhara" },
          { p: "Back to High Camp, then a long descent through Badal Danda to the Gurung village of <strong>Siding</strong> — traditional, off the main trekking circuit, and a completely different atmosphere from the lodges above. A jeep or short walk from there reaches the road back to Pokhara." },
        ],
      },
      {
        h2: "Difficulty and Conditions",
        blocks: [
          { p: "Moderate, with two specific demands." },
          {
            ul: [
              "<strong>The forest climb.</strong> From Deurali to High Camp is around 1,800 m of ascent over two days, much of it on steep, root-tangled, often wet trail. It is sustained rather than technical.",
              "<strong>The exposed ridge.</strong> Above Low Camp the trail follows a narrow ridge with drops on both sides. Not dangerous in good conditions, and worth knowing about if you are uneasy with exposure. In cloud or wind it needs care.",
              "<strong>The descent to Siding.</strong> Long and steep, over 1,800 m in a day. Poles help substantially.",
              "<strong>Cold at High Camp.</strong> Nights at 3,580 m run to -5 to -10 °C in the main seasons, in simple unheated rooms. A -10 °C bag is right.",
              "<strong>Water.</strong> There is little between camps on the ridge. Carry two litres and fill at every lodge.",
            ],
          },
          { p: "Altitude risk is low — 3,580 m for the highest sleep, with a day walk to 4,500 m. Mild symptoms at High Camp happen; serious illness is rare, and descent is quick." },
        ],
      },
      {
        h2: "Why It Is Quieter",
        blocks: [
          { p: "The trail is newer, the lodges are fewer, and the route does not appear on most decade-old trekking lists. In practice you will share High Camp with perhaps a dozen trekkers in October where Annapurna Base Camp has a hundred." },
          { p: "That is changing — Mardi Himal is now the fastest-growing trek in the Annapurna region, and High Camp's handful of lodges fill in peak season. Two consequences: book ahead, and go soon if solitude is part of the appeal. Our guides hold High Camp rooms in advance for exactly this reason." },
          {
            figure: {
              image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-01-golden-hour-view-from-badal-dada-in-mardi-himal-trek",
              alt: "Golden hour view from Badal Danda on the Mardi Himal trek, Nepal.",
              caption: "Badal Danda on the descent. The ridge walk above the treeline is the whole reason to do this trek.",
            },
          },
        ],
      },
      {
        h2: "Mardi Himal vs the Alternatives",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "Max", "Compared with Mardi Himal"],
              rows: [
                ["[[trek:poonhill-trek|Poon Hill]]", "7", "2,885 m", "Easier and lower, a single sunrise viewpoint, much busier"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "4,130 m", "Higher and more dramatic, busier, and mountains ringed rather than overhead"],
                ["[[trek:khopra-danda-trek|Khopra Danda]]", "13", "4,020 m", "Similar ridge character, community lodges, even quieter"],
                ["[[trek:mohare-danda-trek|Mohare Danda]]", "10", "3,300 m", "Community-owned lodges, gentler, fewer mountains overhead"],
                ["[[trek:khori-himal-trek|Khori Himal]]", "10", "3,850 m", "Newer still and almost unvisited"],
                ["[[trek:mardi-himal-trek-with-annapurna-base-camp|Mardi plus ABC]]", "14", "4,500 m", "Both, which is the best two weeks available in the Annapurna region"],
              ],
            },
          },
          { p: "Our [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|three-way comparison]] goes into the Poon Hill and ABC decision in detail." },
        ],
      },
    ],
    faqs: [
      { question: "How long is the Mardi Himal trek?", answer: "Five days from Pokhara or nine days from Kathmandu, including transfers. The walking itself is four to five days: up through the forest to High Camp, the viewpoint morning, and the descent to Siding. Combined with Annapurna Base Camp it becomes a fourteen-day trip." },
      { question: "How high does the Mardi Himal trek go?", answer: "High Camp, where you sleep, is 3,580 m. From there the morning walk reaches the Lower Viewpoint at around 3,900 m and the Upper Viewpoint or Mardi Himal Base Camp at up to 4,500 m, with Machhapuchhre almost directly overhead." },
      { question: "Is Mardi Himal suitable for beginners?", answer: "Yes, with reasonable walking fitness. It is graded moderate because of a sustained 1,800 m forest climb and an exposed ridge, not because of altitude or technical ground. It is one of the best first treks in Nepal, and the five-day version from Pokhara is an excellent introduction." },
      { question: "Is the ridge dangerous?", answer: "Not in good conditions — it is a walking trail with drops on either side rather than a scramble. In cloud, wind, or fresh snow it needs care and a guide, and there are a couple of narrow sections above Low Camp where you will want your hands free. Anyone seriously uneasy with exposure should know about it in advance." },
      { question: "When is the best time for the Mardi Himal trek?", answer: "Late March to April for the rhododendron forest in full bloom, which on this trail is genuinely spectacular, or October to November for the clearest views of Machhapuchhre and the Annapurnas. It also works well in winter below High Camp, though some High Camp lodges close after heavy snow." },
      { question: "How cold is High Camp?", answer: "Around -5 to -10 °C at night in the main seasons, in simple unheated rooms at 3,580 m. A sleeping bag rated to -10 °C with a liner is right, and the lodge stove is lit in the dining room only in the evening." },
      { question: "Do I need to book High Camp in advance?", answer: "In peak season, yes. There are only a handful of lodges at High Camp and Mardi Himal is now the fastest-growing trek in the Annapurna region. Our guides hold rooms in advance and call ahead each morning, which is the practical protection against arriving at a full lodge at 3,580 m." },
      { question: "Can I combine Mardi Himal with Annapurna Base Camp?", answer: "Yes, and it is the best two weeks available in the region — the Mardi ridge first, then down to the Jhinu Danda hot springs, then up the Modi Khola into the Sanctuary. Fourteen days from Kathmandu or ten from Pokhara." },
    ],
    relatedTreks: [
      "mardi-himal-trek",
      "mardi-himal-trek-from-pokhara",
      "mardi-himal-trek-with-annapurna-base-camp",
      "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara",
    ],
    tripsNote: "The Mardi Himal ridge on its own, or linked to the Annapurna Sanctuary.",
    relatedPosts: [
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "short-treks-from-pokhara",
      "rhododendron-season-in-the-annapurna-region",
      "annapurna-base-camp-trek-complete-guide",
    ],
    tags: ["mardi himal", "annapurna region", "short trek", "machhapuchhre"],
    meta: {
      title: "Mardi Himal Trek: Complete Guide to Nepal's Best Short Ridge Walk",
      description: "The Mardi Himal trek explained — the forest climb, the ridge under Machhapuchhre, High Camp, the 4,500 m viewpoint, difficulty.",
      keywords: "Mardi Himal trek, Mardi Himal High Camp, Mardi Himal Base Camp, short trek Pokhara, Machhapuchhre trek",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "poon-hill-trek-guide",
    title: "Poon Hill Trek: Nepal's Best Short Sunrise Trek",
    cluster: "annapurna",
    date: "2026-05-29",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-00-landscape-view-of-poon-hill",
      alt: "Sunrise over the Annapurna range from Poon Hill, Nepal.",
    },
    excerpt:
      "Three to seven days, a maximum of 2,885 m, and a dawn panorama over Dhaulagiri, Annapurna South and Machhapuchhre. The easiest real trek in Nepal, with honest notes on crowds and how to avoid them.",
    intro: [
      { p: "Poon Hill is the trek most first-time visitors to Nepal end up doing, and for good reason: it is short, it is low, it requires no previous experience, and the view from the summit at dawn takes in two eight-thousanders and half a dozen other major peaks. You can do it in three days from Pokhara." },
      { p: "It is also the busiest short trail in Nepal. That is worth knowing before you go, and it is manageable — this guide covers how." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "7 days from Kathmandu, 3 days from Pokhara"],
                ["Highest point", "Poon Hill, 3,210 m (trek max 2,885 m at Ghorepani)"],
                ["Difficulty", "Easy to moderate — short days, one long stone staircase"],
                ["Best seasons", "Year-round; best March to May and October to December"],
                ["Access", "Road from Pokhara to Nayapul, about 1.5 hours"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
                ["Altitude risk", "Minimal"],
              ],
            },
          },
          { p: "We run it as a [[trek:poonhill-trek|7-day trek from Kathmandu]] and a [[trek:poonhill-trek-from-pokhara|3-day trek from Pokhara]], and it combines naturally with the Annapurna Sanctuary on [[trek:annapurna-base-camp-trek-with-ghorepani-poonhill-trek|this 12-day itinerary]]." },
        ],
      },
      {
        h2: "What You See from the Top",
        blocks: [
          { p: "Poon Hill is a 3,210 m hill above Ghorepani, climbed in the dark for sunrise. The panorama is unusually wide for a viewpoint this accessible:" },
          {
            ul: [
              "<strong>Dhaulagiri I (8,167 m)</strong> — the seventh highest mountain in the world, directly west and closer than you expect.",
              "<strong>Annapurna I (8,091 m)</strong> — the tenth highest, to the north-east.",
              "<strong>Annapurna South (7,219 m)</strong> and <strong>Hiunchuli</strong> — the dominant wall straight ahead.",
              "<strong>Machhapuchhre (6,993 m)</strong> — the unmistakable fishtail, east.",
              "<strong>Nilgiri, Tukuche, Barahshikhar</strong> and the Dhaulagiri massif filling the western skyline.",
            ],
          },
          { p: "The light is the point: Dhaulagiri and Annapurna South go pink, then gold, then white over about twenty minutes while the valleys below are still dark. It is one of the best sunrises in Nepal, and there will be two hundred other people watching it with you in October." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Nayapul to Ulleri (1,070 m to 1,960 m)" },
          { p: "A drive from Pokhara to Nayapul, then a walk up the Bhurungdi Khola through Birethanti and Hille to the foot of the <strong>Ulleri staircase</strong> — around 3,300 stone steps climbing 500 m in one go. It is the hardest hour of the trek, and it is done in the first afternoon." },
          { h3: "Ulleri to Ghorepani (1,960 m to 2,885 m)" },
          { p: "The best walking of the trek: a climb through dense rhododendron and oak forest, cool and mossy, with Annapurna South appearing through the canopy. In late March and April this forest is in full flower. Ghorepani is a large lodge village on a saddle at 2,885 m with bakeries, hot showers, and a lot of other trekkers." },
          { h3: "Poon Hill and down through Tadapani or Ghandruk" },
          { p: "A 4.30 a.m. start for the 45-minute climb to the summit, back for breakfast, then the descent. The better options go east through <strong>Tadapani</strong> and down to the large Gurung village of <strong>Ghandruk</strong> — a museum, stone houses, and Annapurna South overhead — rather than retracing the Ulleri steps." },
        ],
      },
      {
        h2: "The Crowd Problem, and What to Do About It",
        blocks: [
          { p: "Poon Hill in mid-October is genuinely crowded: full lodges at Ghorepani, a queue on the summit path in the dark, and a viewing platform with several hundred people on it. That is the honest picture." },
          { p: "What works:" },
          {
            ol: [
              "<strong>Go in a shoulder month.</strong> December, February, and late March are almost as clear and far quieter.",
              "<strong>Start the summit climb 30 minutes before everyone else.</strong> Your guide will know what time the crowd leaves.",
              "<strong>Stay at Ghorepani rather than Banthanti</strong>, and sleep in a lodge at the top end of the village, closest to the path.",
              "<strong>Descend via Tadapani and Ghandruk</strong> rather than back down Ulleri. Half the traffic, and better villages.",
              "<strong>Or choose a quieter ridge entirely.</strong> [[trek:mohare-danda-trek|Mohare Danda]] and [[trek:khopra-danda-trek|Khopra Danda]] look at the same mountains from community-owned lodges with almost nobody on them. Honestly, if solitude matters more to you than the famous name, go to one of those.",
            ],
          },
          { p: "None of this makes Poon Hill not worth doing. The sunrise is genuinely one of Nepal's best, the forest is beautiful, and the three-day version from Pokhara is the best value short trek in the country." },
        ],
      },
      {
        h2: "Who It Suits",
        blocks: [
          {
            ul: [
              "<strong>First-time trekkers</strong> wanting a real Himalayan trek with no altitude risk.",
              "<strong>Families with children.</strong> Short days, good lodges, and nothing above 3,210 m.",
              "<strong>Travellers with three or four days</strong> in Pokhara.",
              "<strong>Winter visitors.</strong> Poon Hill is one of the best December and January treks in Nepal.",
              "<strong>Older trekkers</strong> or anyone advised against sleeping high.",
              "<strong>Anyone combining a trek with Chitwan, Kathmandu, or Pokhara</strong> in a two-week Nepal trip.",
            ],
          },
          { p: "Who should look elsewhere: trekkers who want solitude, who want to get genuinely high, or who have two weeks. For those, see [[post:mardi-himal-trek-complete-guide|Mardi Himal]], [[post:annapurna-base-camp-trek-complete-guide|Annapurna Base Camp]], or the quieter community ridges." },
        ],
      },
    ],
    faqs: [
      { question: "How long is the Poon Hill trek?", answer: "Three days from Pokhara, or seven days from Kathmandu including transfers and a longer loop through Tadapani and Ghandruk. The walking is two to four days depending on the version, with short stages of four to five hours." },
      { question: "How high is Poon Hill?", answer: "3,210 m at the viewpoint, with the highest night at Ghorepani at 2,885 m. That is low enough that altitude sickness is very unlikely, which is part of why it works so well as a first trek." },
      { question: "Is Poon Hill suitable for children and older trekkers?", answer: "Yes — it is the trek we recommend most often for families and for guests in their seventies. Short days, comfortable lodges with hot showers, and no altitude risk. The Ulleri staircase on day one is the only genuinely demanding section." },
      { question: "Is Poon Hill too crowded to be worth it?", answer: "It is the busiest short trail in Nepal, and in mid-October the summit platform holds several hundred people at dawn. It is still worth doing — and going in December, February or late March, starting the summit climb early, and descending via Tadapani and Ghandruk all reduce the crowding substantially." },
      { question: "Can I see Everest from Poon Hill?", answer: "No — Everest is 200 km east and not visible. What you see is Dhaulagiri I at 8,167 m, Annapurna I at 8,091 m, Annapurna South, Hiunchuli, Machhapuchhre and the Nilgiri peaks. Two eight-thousanders from a 3,210 m hill is a fair trade." },
      { question: "What is the Ulleri staircase?", answer: "Around 3,300 stone steps climbing about 500 m in a single continuous flight on the first afternoon. It is the hardest hour of the trek and there is no way around it. Go slowly, and remember that the trek gets easier from there." },
      { question: "Which quieter treks have a similar view?", answer: "Mohare Danda and Khopra Danda both look at Dhaulagiri and Annapurna South from ridges west of Ghorepani, with community-owned lodges and a fraction of the traffic. Both take longer — ten and thirteen days from Kathmandu — and both are better treks if solitude matters more than the famous name." },
    ],
    relatedTreks: [
      "poonhill-trek",
      "poonhill-trek-from-pokhara",
      "annapurna-base-camp-trek-with-ghorepani-poonhill-trek",
      "mohare-danda-trek",
      "khopra-danda-trek",
    ],
    tripsNote: "Poon Hill in both lengths, plus the quieter ridges with the same mountains in view.",
    relatedPosts: [
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "short-treks-from-pokhara",
      "mohare-danda-community-trek-guide",
      "winter-trekking-in-nepal-best-routes",
    ],
    tags: ["poon hill", "ghorepani", "short trek", "annapurna region", "sunrise"],
    meta: {
      title: "Poon Hill Trek: Nepal's Best Short Sunrise Trek",
      description: "The Poon Hill trek explained — the dawn panorama over Dhaulagiri and Annapurna, the route through Ghorepani and Ghandruk, who it suits, and how to avoid the crowds.",
      keywords: "Poon Hill trek, Ghorepani Poon Hill, short trek Nepal, Poon Hill sunrise, Ulleri steps",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "tilicho-lake-trek-guide",
    title: "Tilicho Lake Trek: The Highest Large Lake in the World",
    cluster: "annapurna",
    date: "2026-06-02",
    hero: {
      image: "mardi-treks/tilicho-lake-trek/tilicho-lake-trek-00-panorama-of-tilicho-lake-unedited",
      alt: "Panorama of Tilicho Lake at 4,919 m, Annapurna region, Nepal.",
    },
    excerpt:
      "Tilicho Lake sits at 4,919 m in a bowl of bare rock behind the Annapurna massif — turquoise, enormous, and reached across one of the most exposed trail sections in Nepal. Route, the landslide traverse, difficulty, and how it fits with the circuit.",
    intro: [
      { p: "Tilicho is the lake people see a photograph of and immediately want to go to. At 4,919 m it is among the highest large lakes on earth, roughly four kilometres long, held in a bowl of grey and ochre rock behind the Annapurna massif with the Grand Barrier rising on its far side. The colour in clear autumn light is almost implausible." },
      { p: "Getting there involves a traverse across a long, actively eroding scree slope that is the single most exposed trail section on any teahouse route in Nepal. It is not technical and it deserves respect." },
    ],
    sections: [
      {
        h2: "The Trek at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "12 days as a standalone trek, 9 days on the short version"],
                ["Highest point", "Tilicho Lake, 4,919 m"],
                ["Highest night", "Tilicho Base Camp, 4,150 m"],
                ["Difficulty", "Challenging — long stages, altitude, and the landslide traverse"],
                ["Best seasons", "March to May, September to November"],
                ["Access", "Road to Besisahar or Chame, then on foot via Manang"],
                ["Permits", "Annapurna Conservation Area Permit and trekking registration"],
              ],
            },
          },
          { p: "We run it as a [[trek:tilicho-lake-trek|12-day Tilicho Lake Trek]], a [[trek:short-tilicho-lake-trek|9-day short version]] using jeep transfers, and as part of the [[trek:annapurna-circuit-with-tilicho-lake-trek|14-day circuit with Tilicho]]." },
        ],
      },
      {
        h2: "The Route",
        blocks: [
          { h3: "Up the Marsyangdi to Manang (760 m to 3,519 m)" },
          { p: "The same approach as the Annapurna Circuit — Besisahar, Jagat, Chame, Pisang, with the high route through Ghyaru and Ngawal strongly preferred over the valley road. By Manang the landscape is Tibetan-Buddhist high desert: flat-roofed stone houses, barley terraces, and the Gangapurna glacier hanging above the village." },
          { h3: "Manang to Tilicho Base Camp (3,519 m to 4,150 m)" },
          { p: "West to Khangsar, the last village, then onto the traverse. The trail crosses a kilometre-long slope of loose grey scree that slides continuously — a landslide in slow motion — on a narrow path cut across it. In dry weather it is straightforward walking that demands attention; after rain or fresh snow it can be genuinely hazardous, and groups wait rather than cross. Tilicho Base Camp is two lodges in a bleak, beautiful bowl at 4,150 m." },
          { h3: "Base Camp to the lake (4,150 m to 4,919 m)" },
          { p: "A pre-dawn start and around 770 m of climbing in zigzags up a bare hillside — three to four hours, slow and breathless. The lake appears all at once over the final rise: four kilometres of turquoise water under the Grand Barrier, with Tilicho Peak and Nilgiri above. Most groups spend an hour there and descend to Base Camp or Shree Kharka the same day." },
          { h3: "Out, or over the pass" },
          { p: "From Tilicho you either return to Manang and walk out the way you came, or continue over <strong>Mesokanto La</strong> to Jomsom — a committed high crossing for experienced parties only, with camping and no lodges. Most trekkers return to Manang and either walk out or continue over Thorong La to complete the circuit." },
        ],
      },
      {
        h2: "The Landslide Traverse",
        blocks: [
          { p: "This is what makes Tilicho challenging rather than moderate, and it is worth being clear-eyed about." },
          {
            ul: [
              "<strong>What it is:</strong> a path cut across a continuously eroding scree slope between Khangsar and Tilicho Base Camp, roughly a kilometre long, with a long drop below and loose material above.",
              "<strong>In dry conditions:</strong> straightforward walking that requires concentration and no stopping in the exposed sections. Most trekkers find it fine.",
              "<strong>After rain or snow:</strong> rockfall risk rises sharply, and the path itself can be partly gone. This is when groups wait or turn back.",
              "<strong>What we do:</strong> cross early in the morning before the day warms, ask lodges at Khangsar and Base Camp about current conditions, move one at a time through the worst sections, and hold a day rather than cross a loaded slope.",
              "<strong>If you have a serious fear of exposure,</strong> tell us before booking. This is the section to know about.",
            ],
          },
          { p: "There are no fatalities here in most seasons, and there have been incidents. It is the clearest example in Nepal of a trail where going with a guide who is reading the ground rather than the itinerary genuinely matters." },
        ],
      },
      {
        h2: "Tilicho as Acclimatisation for Thorong La",
        blocks: [
          { p: "One of the strongest arguments for adding Tilicho to the Annapurna Circuit is that it is superb preparation for the pass. The detour takes you from Manang at 3,519 m to a night at 4,150 m and a day walk to 4,919 m, then back down — which is textbook climb high, sleep low, at exactly the altitudes that matter before Thorong La." },
          { p: "Trekkers who do Tilicho before the pass generally find Thorong La substantially easier than those who go straight up the Marsyangdi. On the [[trek:annapurna-circuit-with-tilicho-lake-trek|14-day circuit with Tilicho]] that is the design rather than a side effect." },
          { p: "The other option — Tilicho on its own, returning to Manang and walking out — gives you the lake at 4,919 m without a pass crossing, which suits trekkers who want the altitude and the landscape without committing to Thorong La. Our [[post:thorong-la-pass-crossing-guide|Thorong La guide]] covers that decision." },
        ],
      },
      {
        h2: "Practicalities",
        blocks: [
          {
            ul: [
              "<strong>Lodges:</strong> good through Manang, then two basic lodges at Tilicho Base Camp and a simple one at Shree Kharka. Base Camp fills in peak season and there is no alternative, so booking ahead matters more here than almost anywhere.",
              "<strong>Cold:</strong> Base Camp at 4,150 m runs to -10 to -15 °C at night. A -20 °C bag is the right choice.",
              "<strong>Water:</strong> treat everything, and carry two litres for the lake climb — there is none on the way up.",
              "<strong>Altitude:</strong> this is a genuine high-altitude trek. Manang acclimatisation days are not optional, and a headache at Base Camp means you do not go up the next morning.",
              "<strong>Season:</strong> the traverse needs dry conditions. Avoid the monsoon entirely and be cautious in late winter and early spring after snow.",
              "<strong>Insurance:</strong> cover to 6,000 m with helicopter evacuation. Base Camp is a long way from a road.",
            ],
          },
          { p: "A final note on the lake itself: it is sacred, it freezes in winter, and it is shrinking as the glaciers feeding it retreat. Do not swim, do not leave anything behind, and take your rubbish down — there is no collection at 4,919 m." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Tilicho Lake?", answer: "4,919 m, which makes it one of the highest large lakes in the world — roughly four kilometres long, held in a bowl of bare rock behind the Annapurna massif. The highest you sleep is Tilicho Base Camp at 4,150 m, and the lake is reached as a day walk from there." },
      { question: "How dangerous is the landslide section?", answer: "In dry conditions it is exposed walking that demands concentration rather than technical skill, and most trekkers find it fine. After rain or fresh snow, rockfall risk rises sharply and the path can be partly washed out — which is when groups wait or turn back. Crossing early in the morning with a guide who has checked conditions is the whole safety system." },
      { question: "How long does the Tilicho Lake trek take?", answer: "Twelve days as a standalone trek from Kathmandu, or nine on the short version using jeep transfers up the Marsyangdi. Added to the Annapurna Circuit it extends the trip to fourteen days and doubles as acclimatisation for Thorong La." },
      { question: "Is Tilicho harder than Annapurna Base Camp?", answer: "Yes. It is higher at 4,919 m, the stages are longer, the Base Camp lodges are basic and cold, and the landslide traverse adds a section that requires judgement. Annapurna Base Camp is graded moderate; Tilicho is challenging." },
      { question: "Should I add Tilicho to the Annapurna Circuit?", answer: "If you have the days, yes. Beyond the lake itself, the detour takes you to a night at 4,150 m and a day walk to 4,919 m before returning to Manang — which is ideal preparation for Thorong La. Trekkers who do Tilicho first generally find the pass noticeably easier." },
      { question: "Can I continue from Tilicho to Jomsom?", answer: "Over Mesokanto La, yes, but it is a committed high crossing with camping and no lodges, suitable for experienced parties with full support. Most trekkers return to Manang and either walk out or continue over Thorong La to complete the circuit." },
      { question: "When is the best time to visit Tilicho Lake?", answer: "October and November for the clearest water colour and the most stable conditions on the traverse, or April to May. Avoid the monsoon, when the landslide section is at its worst, and be cautious in late winter and early spring after heavy snow." },
    ],
    relatedTreks: [
      "tilicho-lake-trek",
      "short-tilicho-lake-trek",
      "annapurna-circuit-with-tilicho-lake-trek",
      "annapurna-circuit-trek",
    ],
    tripsNote: "Tilicho on its own, the short version, and the circuit itinerary that includes it.",
    relatedPosts: [
      "annapurna-circuit-trek-complete-guide",
      "thorong-la-pass-crossing-guide",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "nar-phu-valley-trek-guide",
    ],
    tags: ["tilicho lake", "annapurna region", "high altitude lake", "nepal trekking"],
    meta: {
      title: "Tilicho Lake Trek: The Highest Large Lake in the World",
      description: "The Tilicho Lake trek at 4,919 m — the route from Manang, the landslide traverse, difficulty, how it works as acclimatisation for Thorong La, and when to go.",
      keywords: "Tilicho Lake trek, Tilicho Base Camp, highest lake Nepal, Tilicho landslide section, Mesokanto La",
    },
  },
];
