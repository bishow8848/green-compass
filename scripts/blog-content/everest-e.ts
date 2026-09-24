import type { BlogContent } from "./build";

export const everestE: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-trek-altitude-profile",
    title: "Everest Base Camp Altitude Profile: Night by Night",
    cluster: "everest",
    date: "2026-05-01",
    hero: {
      image: "mardi-treks/everest-base-camp-trek-with-helicopter-return/everest-base-camp-trek-with-helicopter-return-02-gorak-shep-06-kala-patthar-pumori-2007-gje",
      alt: "Pumori and Kala Patthar above Gorak Shep at 5,160 m, Nepal.",
    },
    excerpt:
      "The numbers behind the Everest Base Camp itinerary — every sleeping altitude, every night's gain, and where the two rest days sit. Plus what a compressed 11-day itinerary actually changes, shown side by side.",
    intro: [
      { p: "Altitude sickness is the main reason Everest Base Camp treks fail, and whether you get it is decided largely by a table of numbers set months before you arrive. The figure that matters is your <strong>sleeping altitude</strong> and how much it rises each night, because that is what your body adapts to." },
      { p: "This article lays out our 14-day profile night by night, then puts a compressed 11-day itinerary beside it so you can see exactly what the cheaper option removes." },
    ],
    sections: [
      {
        h2: "The Rules the Profile Is Built On",
        blocks: [
          {
            ol: [
              "<strong>Above 3,000 m, gain no more than 300 to 500 m of sleeping altitude per night.</strong>",
              "<strong>Take a full rest day every 3 to 4 days, or every 1,000 m of gain.</strong>",
              "<strong>On a rest day, climb several hundred metres above your lodge and return to sleep.</strong> Climb high, sleep low.",
              "<strong>Where a big jump is unavoidable, put a rest day on either side of it.</strong>",
            ],
          },
          { p: "Our profile breaks rule one exactly once — Phakding to Namche — and it compensates with a rest day immediately after. That is the correct way to handle an unavoidable jump, and it is the shape of every properly built Khumbu itinerary. See our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] for the physiology behind the rules." },
        ],
      },
      {
        h2: "The 14-Day Profile",
        blocks: [
          {
            table: {
              head: ["Night", "Sleep at", "Altitude", "Gain", "High point that day"],
              rows: [
                ["1", "Kathmandu", "1,400 m", "—", "—"],
                ["2", "Phakding", "2,651 m", "Net −209 m from Lukla", "Lukla 2,860 m"],
                ["3", "Namche Bazaar", "3,440 m", "+789 m", "3,440 m"],
                ["4", "Namche Bazaar", "3,440 m", "0 — rest day", "3,880 m (Everest View Hotel)"],
                ["5", "Tengboche", "3,956 m", "+516 m", "3,956 m"],
                ["6", "Dingboche", "4,380 m", "+424 m", "4,380 m"],
                ["7", "Dingboche", "4,380 m", "0 — rest day", "5,080 m (Nangkartshang)"],
                ["8", "Lobuche", "4,938 m", "+558 m", "4,938 m"],
                ["9", "Gorak Shep", "5,160 m", "+222 m", "5,545 m (Kala Patthar)"],
                ["10", "Pheriche", "4,371 m", "−789 m", "5,364 m (Base Camp)"],
                ["11", "Namche Bazaar", "3,440 m", "−931 m", "4,371 m"],
                ["12", "Lukla", "2,860 m", "−580 m", "3,440 m"],
                ["13", "Kathmandu", "1,400 m", "−1,460 m", "—"],
              ],
            },
          },
          { p: "Read the high-point column alongside the sleeping column. On nights 4 and 7 you gain nothing but you climb 440 m and 700 m respectively — that is where the acclimatisation actually happens. Those two days are the itinerary." },
        ],
      },
      {
        h2: "Where the Pressure Points Are",
        blocks: [
          {
            ul: [
              "<strong>Night 3, Namche (+789 m).</strong> The only jump above the rule. Mild headaches here are common and normal, and the rest day that follows is what resolves them.",
              "<strong>Night 6, Dingboche (4,380 m).</strong> The first night above 4,000 m. Sleep gets worse for most people from here on.",
              "<strong>Night 8, Lobuche (+558 m).</strong> Slightly over the rule, at the thinnest air yet, with the steep Thukla Pass climb in the middle of the day. Statistically the hardest night of the trek.",
              "<strong>Night 9, Gorak Shep (5,160 m).</strong> The highest night, at 51% of sea-level oxygen, with the Kala Patthar climb on the same day. Almost nobody sleeps well.",
            ],
          },
          { p: "If you want more margin, there are two easy additions: a night at Pheriche (4,371 m) between Dingboche and Lobuche, or a second night at Dingboche. Either turns a 14-day trek into a 15-day one and measurably reduces altitude risk. We add them on request and recommend them for anyone who has not slept above 4,000 m before." },
        ],
      },
      {
        h2: "14 Days vs 11 Days: What Gets Cut",
        blocks: [
          {
            table: {
              head: ["", "14-day itinerary", "11-day itinerary"],
              rows: [
                ["Rest day at Namche", "Yes, with a climb to 3,880 m", "Usually removed"],
                ["Rest day at Dingboche", "Yes, with a climb to 5,080 m", "Usually removed"],
                ["Nights above 4,000 m", "4", "3, reached faster"],
                ["Largest single night's gain", "789 m, followed by a rest day", "Often 900 m or more with no rest day"],
                ["Spare capacity for a bad night", "Two rest days can absorb a slow start", "None — a bad day ends the trek"],
                ["Price", "Higher", "Lower"],
                ["Chance of reaching Base Camp", "High", "Materially lower"],
              ],
            },
          },
          { p: "This is the honest economics of a cheap Everest trek. The saving is two or three days of guide, lodge, and food costs — perhaps USD 150 to 250. The cost is the acclimatisation margin that gets you to 5,364 m. A trekker who turns back at Lobuche has paid the full price for a trek they did not complete, which is the most expensive outcome available." },
          { p: "Our [[post:everest-base-camp-trek-cost-breakdown|cost breakdown]] goes through the other ways quotes are made to look cheaper." },
        ],
      },
      {
        h2: "Other Khumbu Routes Compared",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "Highest night", "Highest point"],
              rows: [
                ["[[trek:everest-view-trek|Everest View Trek]]", "9", "3,440 m", "3,880 m"],
                ["[[trek:gokyo-lake-trek|Gokyo Lakes]]", "12", "4,800 m", "5,357 m"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "14", "5,160 m", "5,545 m"],
                ["[[trek:everest-base-camp-trek-with-helicopter-return|Base Camp with helicopter return]]", "12", "5,160 m", "5,545 m"],
                ["[[trek:everest-base-camp-trek-with-gokyo-lakes-and-cho-la-pass|Base Camp with Gokyo and Cho La]]", "17", "5,160 m", "5,545 m"],
                ["[[trek:everest-three-pass-trek|Everest Three Passes]]", "17", "5,160 m", "5,545 m"],
                ["[[trek:island-peak-climbing|Island Peak]]", "18", "5,200 m high camp", "6,189 m"],
              ],
            },
          },
          { p: "Note that the helicopter return variant keeps the same ascent profile in 12 days — it removes descent days, not rest days. That is the difference between compressing a trek safely and compressing it cheaply." },
        ],
      },
    ],
    faqs: [
      { question: "What is the highest altitude I sleep at on the Everest Base Camp trek?", answer: "Gorak Shep at 5,160 m, for one night. Base Camp is 5,364 m and Kala Patthar 5,545 m, but both are day objectives — you return to Gorak Shep to sleep. That single night is the coldest and least comfortable of the trek." },
      { question: "How much altitude do you gain per day?", answer: "Between 220 m and 790 m of sleeping altitude, averaging around 420 m across the climbing days, with two full rest days where the gain is zero. The only night above the recommended 500 m ceiling is Phakding to Namche, and a rest day follows it immediately." },
      { question: "Why is there a rest day at Dingboche rather than Pheriche?", answer: "Dingboche at 4,380 m gives access to the Nangkartshang ridge climb to around 5,080 m, which is the single most effective acclimatisation walk on the route. Pheriche is slightly lower with a less useful climb nearby. Some itineraries include both villages, which is better again." },
      { question: "Is an 11-day Everest Base Camp trek safe?", answer: "It is measurably riskier. Those itineraries typically remove one or both acclimatisation days, which raises the rate of altitude sickness and of trekkers turning back. The saving is a couple of hundred dollars; the cost is the margin that gets you to Base Camp." },
      { question: "Can I add an extra acclimatisation day?", answer: "Yes, and we recommend it if you have not slept above 4,000 m before. The two best additions are a night at Pheriche between Dingboche and Lobuche, or a second night at Dingboche. Either makes it a 15-day trip and noticeably reduces altitude risk." },
      { question: "Does the helicopter return change the acclimatisation?", answer: "No — the ascent is identical, and the flight replaces the three walking days after Base Camp. That is why it is the right way to shorten the trek to twelve days, as opposed to cutting a rest day to achieve the same number." },
      { question: "How do I know if my acclimatisation is going well?", answer: "Reasonable appetite, manageable sleep, no persistent headache, and an oxygen saturation reading that is stable or improving rather than falling. Our guides take twice-daily readings above 4,000 m with a pulse oximeter, which catches a downward trend before you feel it." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-base-camp-trek-with-helicopter-return",
      "gokyo-lake-trek",
      "everest-view-trek",
    ],
    tripsNote: "Khumbu itineraries built on the profile above, with extra acclimatisation nights available on request.",
    relatedPosts: [
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "everest-base-camp-trek-itinerary-day-by-day",
      "namche-bazaar-acclimatisation-guide",
      "everest-base-camp-trek-cost-breakdown",
    ],
    tags: ["altitude profile", "everest base camp", "acclimatisation", "khumbu"],
    meta: {
      title: "Everest Base Camp Altitude Profile: Night by Night",
      description: "Every sleeping altitude and nightly gain on the Everest Base Camp trek, where the rest days sit and why, and exactly what a compressed 11-day itinerary removes.",
      keywords: "Everest Base Camp altitude profile, EBC sleeping altitude, Gorak Shep altitude, EBC acclimatisation schedule",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-packing-list",
    title: "Everest Base Camp Packing List: Tested Against 5,160 m",
    cluster: "everest",
    date: "2026-05-05",
    hero: {
      image: "mardi-treks/everest-three-pass-trek/everest-three-pass-trek-06-namche-bazaar-from-above",
      alt: "Namche Bazaar from above, Everest region, Nepal.",
    },
    excerpt:
      "A packing list specific to the Everest Base Camp trek — the 15 kg Lukla flight limit, the sleeping bag rating that actually works at Gorak Shep, what to hire in Kathmandu, and the items trekkers most often wish they had brought.",
    intro: [
      { p: "Everest Base Camp has two packing constraints that other Nepal treks do not. The first is the <strong>Lukla flight allowance</strong> — 10 kg checked and 5 kg hand, total 15 kg — which is less than most people's idea of trekking luggage. The second is <strong>Gorak Shep at 5,160 m</strong>, where nights fall to -20 °C in an unheated plywood room." },
      { p: "Everything below is chosen against those two facts. Our general [[post:nepal-trekking-packing-list|Nepal packing list]] covers the principles; this is the Khumbu-specific version." },
    ],
    sections: [
      {
        h2: "The Weight Problem",
        blocks: [
          {
            table: {
              head: ["Bag", "Carried by", "Weight", "Contents"],
              rows: [
                ["Porter duffel", "Porter, shared between two trekkers", "Under 15 kg each", "Sleeping bag, spare clothes, down jacket, toiletries"],
                ["Daypack", "You", "5–7 kg loaded", "Water, waterproofs, camera, snacks, sunscreen, documents, one warm layer"],
                ["Lukla allowance", "—", "10 kg checked, 5 kg hand", "The hard limit for both bags combined"],
                ["Left in Kathmandu", "Hotel storage, free", "Anything", "City clothes, valuables, the half you overpacked"],
              ],
            },
          },
          { p: "Two tricks that buy you several kilos: wear your boots and down jacket on the flight rather than packing them, and put heavy items in your hand baggage, where enforcement is gentler than at the checked scale." },
        ],
      },
      {
        h2: "Clothing",
        blocks: [
          { p: "Layering from 2,651 m to 5,545 m, with a 35-degree swing between a sunny afternoon at Phakding and a pre-dawn start on Kala Patthar." },
          {
            ul: [
              "<strong>3 base layer tops</strong> — merino or synthetic, long sleeved. No cotton.",
              "<strong>2 base layer bottoms</strong> — one lightweight, one thermal for the upper valley.",
              "<strong>1 fleece or light insulated mid-layer.</strong>",
              "<strong>1 expedition-weight down jacket</strong> — this is the item to get right. A light down sweater is not enough at Lobuche and Gorak Shep. Hire one in Kathmandu if you will not use it again.",
              "<strong>Waterproof shell jacket and over-trousers</strong> — breathable, with a hood.",
              "<strong>2 pairs trekking trousers.</strong>",
              "<strong>5 pairs wool socks</strong> plus one thick pair kept only for sleeping.",
              "<strong>Warm hat, sun hat, buff, liner gloves, insulated gloves or mittens.</strong>",
              "<strong>Underwear for 5 days</strong> — laundry is available up to Namche.",
            ],
          },
          { p: "The buff is worth a mention of its own: above 4,000 m the dry, cold air gives almost everyone the Khumbu cough, and breathing through a buff is the most effective thing anyone has found to reduce it." },
        ],
      },
      {
        h2: "Sleeping and Footwear",
        blocks: [
          {
            table: {
              head: ["Item", "Specification", "Why"],
              rows: [
                ["Sleeping bag", "-20 °C comfort rating", "Gorak Shep and Lobuche are -15 to -20 °C, and lodge blankets are not enough"],
                ["Sleeping bag liner", "Fleece or silk", "Adds around 5 °C and keeps the bag clean for a fortnight"],
                ["Trekking boots", "Waterproof, mid or high cut, broken in", "Stone, moraine, and occasional snow. Never new."],
                ["Camp shoes", "Trainers or lightweight shoes", "For lodges in the evening"],
                ["Gaiters", "Lightweight", "Snow above Dingboche, and dust lower down"],
                ["Microspikes", "Optional", "Useful on an icy trail section in winter or after snowfall"],
              ],
            },
          },
          { p: "On the sleeping bag: this is where people economise and regret it. A -10 °C bag works on most Nepal treks, but three nights at Lobuche and Gorak Shep are colder than that. A rated -20 °C bag with a liner, bought or hired, is the single most comfort-determining item on the list." },
        ],
      },
      {
        h2: "Everything Else",
        blocks: [
          {
            ul: [
              "<strong>Daypack 30–40 litres</strong> with a rain cover.",
              "<strong>Trekking poles</strong> — essential on the descent from Pheriche to Namche.",
              "<strong>Headlamp plus spare batteries</strong> — pre-dawn Kala Patthar starts, and lodges that cut power.",
              "<strong>2 × 1 litre bottles</strong>, at least one wide-mouth so it doubles as a hot water bottle in your sleeping bag.",
              "<strong>Purification tablets or a filter</strong> — bottled water is banned above Lukla.",
              "<strong>Category 3 or 4 sunglasses</strong> with side protection, plus a spare pair.",
              "<strong>Factor 50 sunscreen and SPF lip balm</strong> — the sun at 5,000 m burns through cloud.",
              "<strong>Power bank, 15,000 mAh or more</strong> — charging costs NPR 200 to 700 and the cold flattens batteries overnight.",
              "<strong>Personal first aid</strong> — painkillers, blister kit, rehydration salts, throat lozenges, hand sanitiser, any prescription medication.",
              "<strong>Quick-dry towel, wet wipes, toilet paper, sealable bags</strong> for carrying out waste.",
              "<strong>Passport, permits, insurance copy, and cash in Nepali rupees</strong> — NPR 25,000 to 40,000 in small notes.",
            ],
          },
        ],
      },
      {
        h2: "Buy, Hire, or Bring",
        blocks: [
          {
            table: {
              head: ["Item", "Best source", "Note"],
              rows: [
                ["Boots", "Home", "Fit matters more than anything and needs 50 km of breaking in"],
                ["Waterproof shell", "Home", "Hard to judge quality in Thamel"],
                ["Base layers", "Home", "Cheap enough not to risk a copy"],
                ["Down jacket", "Hire in Kathmandu", "A few dollars a day for expedition weight"],
                ["Sleeping bag", "Hire in Kathmandu", "Same — and saves 1.5 kg of your Lukla allowance"],
                ["Duffel bag", "Buy in Thamel", "Cheap, and we supply one if you prefer"],
                ["Trekking poles", "Buy in Thamel", "Good value, and you can leave them behind"],
                ["Gloves, hats, buffs, socks", "Buy in Thamel", "Genuine stock and copies side by side, at a fraction of home prices"],
                ["Sunscreen and lip balm", "Buy in Kathmandu", "Saves weight and is widely available"],
                ["Snacks", "Buy in Kathmandu or Namche", "Trail prices climb steeply above Namche"],
              ],
            },
          },
        ],
      },
      {
        h2: "What Trekkers Wish They Had Brought",
        blocks: [
          { p: "From our own post-trek conversations, in order of frequency:" },
          {
            ol: [
              "<strong>A warmer sleeping bag.</strong> By a wide margin the most common regret.",
              "<strong>More snacks from Kathmandu.</strong> Appetite for meals falls at altitude while the craving for chocolate does not, and Gorak Shep charges NPR 500 a bar.",
              "<strong>A second pair of sunglasses.</strong> Broken or lost glasses on snow at 5,000 m is a genuine problem.",
              "<strong>Throat lozenges, in quantity.</strong> The Khumbu cough is universal and lasts for days.",
              "<strong>A bigger power bank.</strong> Charging is expensive, slow, and only available in the evening.",
              "<strong>Earplugs.</strong> Plywood partitions, and somebody in the next room has the cough too.",
              "<strong>More small-denomination rupees.</strong> Nobody at 5,000 m can change a 1,000 note at 6 a.m.",
            ],
          },
          { p: "And what people wished they had left behind: a second book, a laptop, jeans, a full-size tripod, and roughly a third of the clothing they packed." },
        ],
      },
    ],
    faqs: [
      { question: "What sleeping bag rating do I need for Everest Base Camp?", answer: "A comfort rating of -20 °C, with a liner. Lobuche and Gorak Shep fall to -15 or -20 °C and lodge bedrooms are unheated, so blankets alone are not enough. This is the item trekkers most often wish they had upgraded, and you can hire an expedition-weight bag in Kathmandu for a few dollars a day." },
      { question: "What is the baggage limit for the Lukla flight?", answer: "10 kg checked plus 5 kg hand baggage, 15 kg in total, enforced at the counter. Anything beyond it is charged by the kilo subject to space. Everything you do not need on the trail stays in free storage at your Kathmandu hotel." },
      { question: "Can I hire gear in Kathmandu instead of buying it?", answer: "Yes, and for a single trip it makes sense. Sleeping bags and expedition down jackets both hire for a few dollars a day in Thamel, which also saves a couple of kilos of your Lukla allowance. Boots and waterproof shells are the items to bring from home." },
      { question: "Do I need crampons or technical gear?", answer: "No. The whole route is a walking trail. Microspikes are occasionally useful on an icy section in winter or after fresh snow, and your guide will advise. Technical equipment only applies if you add a trekking peak such as Island Peak or Lobuche East." },
      { question: "How many layers do I actually need?", answer: "Three base layer tops, one fleece or mid-layer, one expedition-weight down jacket, and a waterproof shell. That combination handles everything from a warm afternoon at Phakding to a pre-dawn Kala Patthar start, which spans roughly 35 degrees." },
      { question: "Should I bring my own water filter?", answer: "A filter or chlorine dioxide tablets, yes — bottled water is banned above Lukla and refill stations operate in Lukla, Namche and several villages. Keep a filter out of the cold overnight, because a frozen cartridge is a ruined one." },
      { question: "How much cash should I bring on the trail?", answer: "NPR 25,000 to 40,000 in small notes for a 12-day trek, covering hot showers, charging, Wi-Fi, snacks, drinks and tips. Namche's ATMs are unreliable and there is nothing above it, so withdraw in Kathmandu." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-three-pass-trek",
      "gokyo-lake-trek",
      "everest-base-camp-trek-with-helicopter-return",
    ],
    tripsNote: "Khumbu treks this list is written for — each trip confirmation includes a route-specific version.",
    relatedPosts: [
      "nepal-trekking-packing-list",
      "everest-base-camp-trek-complete-guide",
      "lukla-flight-guide",
      "everest-base-camp-trek-cost-breakdown",
    ],
    tags: ["packing list", "everest base camp", "trekking gear", "khumbu"],
    meta: {
      title: "Everest Base Camp Packing List: Tested Against 5,160 m",
      description: "A Khumbu-specific packing list — the 15 kg Lukla limit, the sleeping bag rating that works at Gorak Shep, what to hire in Kathmandu.",
      keywords: "Everest Base Camp packing list, EBC gear list, sleeping bag Everest trek, Lukla baggage limit, what to pack EBC",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-vs-annapurna-base-camp",
    title: "Everest Base Camp vs Annapurna Base Camp: Which Trek to Choose",
    cluster: "everest",
    date: "2026-05-08",
    hero: {
      image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-02-annapurna-base-camp-2008",
      alt: "Teahouses and glacial moraine at Annapurna Base Camp, Nepal Himalaya.",
    },
    excerpt:
      "Nepal's two most popular treks, compared honestly on altitude, difficulty, scenery, cost, access, season and crowds — and a clear recommendation depending on how much time, money and altitude tolerance you have.",
    intro: [
      { p: "These are the two treks most first-time visitors to Nepal choose between, and the difference is larger than the similar names suggest. One is a fourteen-day high-altitude walk to a glacier at 5,364 m reached by mountain flight. The other is a nine-day walk into a glacial amphitheatre at 4,130 m reached by road from Pokhara, for roughly half the price." },
      { p: "Neither is better. They suit different trips, and the choice usually comes down to three things: days available, altitude tolerance, and budget." },
    ],
    sections: [
      {
        h2: "Side by Side",
        blocks: [
          {
            table: {
              head: ["", "Everest Base Camp", "Annapurna Base Camp"],
              rows: [
                ["Days", "14", "9 from Kathmandu, 5 from Pokhara"],
                ["Highest point", "5,545 m (Kala Patthar)", "4,130 m (Base Camp)"],
                ["Highest night", "5,160 m", "4,130 m"],
                ["Difficulty", "Moderate — long days at altitude", "Moderate — more ascent and descent per day"],
                ["Access", "Flight to Lukla, weather-dependent", "Road from Pokhara, reliable"],
                ["Altitude risk", "Significant, managed by two rest days", "Low — descent is always within hours"],
                ["Cost", "Higher, plus around USD 400 in Lukla flights", "Substantially lower"],
                ["Trail traffic", "The busiest in Nepal", "Busy, but more spread out"],
                ["Scenery", "Glacial, high-alpine, vast", "Forested gorge opening into an amphitheatre"],
                ["Culture", "Sherpa Buddhist — monasteries, chortens, Tengboche", "Gurung and Magar hill villages, terraced farming"],
                ["Winter", "Hard — -25 °C and closed lodges", "Workable with avalanche caution"],
                ["Failure risk", "Real, from altitude", "Low"],
              ],
            },
          },
        ],
      },
      {
        h2: "What Each One Actually Feels Like",
        blocks: [
          { h3: "Everest Base Camp" },
          { p: "A trek of scale. You fly into a valley that has no road, and for ten days you walk steadily up into an increasingly austere, glacial, vertical world. The villages get smaller, the air gets thinner, the mountains get bigger, and by Lobuche the landscape is rock, ice, and nothing else. The Sherpa Buddhist culture is everywhere, Tengboche is a genuine cultural high point, and the history — Hillary, Tenzing, the Icefall, the expeditions — is in the ground. It is a pilgrimage as much as a walk." },
          { h3: "Annapurna Base Camp" },
          { p: "A trek of intimacy. You walk from rice terraces through Gurung villages into a deep rhododendron gorge, following the Modi Khola between two huge walls, and then the valley opens without warning into the <strong>Annapurna Sanctuary</strong> — a glacial amphitheatre ringed by Annapurna I, Annapurna South, Hiunchuli, Gangapurna, and Machhapuchhre, all of them close enough to feel overhead. The transition from gorge to sanctuary in a single afternoon is one of the great moments in Himalayan trekking, and the mountains at Annapurna Base Camp are closer than anything on the Everest trail." },
          { p: "If forced to summarise: Everest is about altitude and history; Annapurna is about proximity and landscape." },
        ],
      },
      {
        h2: "Choose Everest If…",
        blocks: [
          {
            ul: [
              "You have 14 to 16 days including buffer days for the Lukla flight.",
              "Standing at the foot of Everest matters to you specifically.",
              "You want to go high, and you are willing to take the altitude risk seriously.",
              "Sherpa Buddhist culture and Himalayan mountaineering history interest you.",
              "You are travelling in October, November, April, or early May.",
              "Your budget absorbs the flights and the longer trip.",
            ],
          },
          { p: "Book [[trek:everest-base-camp-trek|Everest Base Camp]], or consider the [[trek:everest-base-camp-trek-with-helicopter-return|helicopter return]] version if you have 12 days rather than 14." },
        ],
      },
      {
        h2: "Choose Annapurna If…",
        blocks: [
          {
            ul: [
              "You have 5 to 10 days.",
              "You would rather not sleep above 4,200 m, or a doctor has advised against it.",
              "You want to avoid a mountain flight and its delays entirely.",
              "Budget matters — it is roughly half the cost for a comparable experience.",
              "You want mountains close and overhead rather than vast and distant.",
              "You are travelling in winter, or in a shoulder month.",
              "You want flexibility to combine the trek with Pokhara, Chitwan, or a short add-on.",
            ],
          },
          { p: "Book [[trek:annapurna-base-camp-trek|Annapurna Base Camp]], or [[trek:annapurna-base-camp-trek-from-pokhara|the Pokhara-start version]] if you have five days. Adding Poon Hill with [[trek:annapurna-base-camp-trek-with-ghorepani-poonhill-trek|this variant]] gives you a sunrise viewpoint as well." },
        ],
      },
      {
        h2: "A Third Option Nobody Considers",
        blocks: [
          { p: "If the honest answer is that you want high mountains, low crowds, and not much time, neither of these is the best trek in Nepal for you." },
          {
            ul: [
              "<strong>[[trek:mardi-himal-trek|Mardi Himal]]</strong> — a ridge walk directly under Machhapuchhre, five to nine days, quieter than either, and the best short trek in the Annapurna region.",
              "<strong>[[trek:gokyo-lake-trek|Gokyo Lakes]]</strong> — the Everest region with a quarter of the traffic and arguably the better panorama.",
              "<strong>[[trek:manaslu-circuit-trek|Manaslu Circuit]]</strong> — a full Himalayan circuit with a 5,106 m pass, on a trail with a fraction of the Annapurna Circuit's traffic.",
              "<strong>[[trek:khopra-danda-trek|Khopra Danda]]</strong> — a community-lodge ridge with Dhaulagiri and Annapurna South in front of you and almost nobody on it.",
              "<strong>[[trek:pikey-peak-trek|Pikey Peak]]</strong> — Everest, Makalu and Kanchenjunga from 4,065 m, with no mountain flight.",
            ],
          },
          { p: "And if you genuinely cannot choose, many of our guests do Annapurna Base Camp on a first visit and Everest on a second — which is the right order, because the Annapurna trek teaches you how your body handles altitude before you commit two weeks and a mountain flight to finding out." },
        ],
      },
    ],
    faqs: [
      { question: "Which is harder, Everest Base Camp or Annapurna Base Camp?", answer: "Everest is higher, longer, and colder, and carries real altitude risk. Annapurna packs more ascent and descent into fewer days, including punishing stone staircases that are harder on knees. Day for day Annapurna is tougher on the legs; overall Everest is the bigger undertaking." },
      { question: "Which has better views?", answer: "Different kinds. Annapurna Base Camp puts you inside a glacial amphitheatre with 7,000 and 8,000 m walls close enough to feel overhead. Everest gives vast, austere, glacial scale and the definitive Everest view from Kala Patthar. For proximity, Annapurna; for grandeur, Everest." },
      { question: "Which is cheaper?", answer: "Annapurna, substantially. The trek itself is shorter, it is reached by road rather than by a USD 400 return flight to Lukla, and lodge and food prices in the Annapurna region are lower than in the Khumbu. From Pokhara, it is one of the best-value treks in the Himalaya." },
      { question: "Which is better for a first trek in Nepal?", answer: "Annapurna Base Camp, for most people — shorter, cheaper, lower, road-accessible, and with altitude that descent can always resolve quickly. It also teaches you how you respond to sleeping above 4,000 m before you commit a fortnight and a mountain flight to Everest." },
      { question: "Can I do both on one trip?", answer: "Yes, with about four weeks. The usual sequence is Annapurna first as acclimatisation and Everest second, with a few days in Pokhara or Kathmandu between. It is a superb month in Nepal, and doing them in that order makes the second trek easier." },
      { question: "Which is better in winter?", answer: "Annapurna Base Camp, with avalanche caution in the sanctuary gorge after heavy snow. Everest in winter means -25 °C at Gorak Shep with some lodges closed, which we only run for experienced trekkers. For a winter trip the Annapurna region or Pikey Peak are the better choices." },
      { question: "Which is less crowded?", answer: "Neither is quiet in October. Everest has the single busiest trail in Nepal, while Annapurna's traffic spreads over more routes. If crowds are the deciding factor, Mardi Himal, Khopra Danda, Gokyo or Manaslu are all better answers than either of these." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "annapurna-base-camp-trek-from-pokhara",
      "mardi-himal-trek",
      "gokyo-lake-trek",
    ],
    tripsNote: "Both treks, plus the shorter and quieter alternatives mentioned above.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "annapurna-base-camp-trek-complete-guide",
      "nepal-trek-difficulty-grades-explained",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["everest base camp", "annapurna base camp", "trek comparison", "nepal trekking"],
    meta: {
      title: "Everest Base Camp vs Annapurna Base Camp: Which to Choose",
      description: "Nepal's two most popular treks compared on altitude, difficulty, scenery, cost, access and crowds — with a clear recommendation for each kind of traveller.",
      keywords: "Everest Base Camp vs Annapurna Base Camp, EBC or ABC, which Nepal trek, compare Nepal treks",
    },
  },
];
