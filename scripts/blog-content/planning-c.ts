import type { BlogContent } from "./build";

export const planningC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "food-on-the-trail-in-nepal",
    title: "Food on the Trail in Nepal: What You Will Actually Eat",
    cluster: "planning",
    date: "2026-01-27",
    hero: {
      image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-01-abc-deurali-on-the-annapurna-base-camp-trek-nepal-2016",
      alt: "Lodges at Deurali on the Annapurna Base Camp trek, Nepal.",
    },
    excerpt:
      "Teahouse menus across Nepal are more consistent than you would expect, and more limited the higher you go. Here is what is on them, what is worth ordering at each altitude, how to eat when altitude kills your appetite, and how to handle dietary requirements.",
    intro: [
      { p: "You will eat better on a Nepali trek than most people expect, and you will eat the same things more often than you expect. Every lodge kitchen on the main trails works from a near-identical menu, partly because the ingredients that can be carried to 4,500 m are limited, and partly because trekkers reliably order the same dishes." },
      { p: "Three meals a day are included on our treks, so the practical question is not what it costs but what to choose — and that changes with altitude, appetite, and how many consecutive days of walking are behind you." },
    ],
    sections: [
      {
        h2: "Dal Bhat: The Dish to Understand First",
        blocks: [
          { p: "Dal bhat is lentil soup, rice, a curried vegetable, a pickle, and often a spinach-like green, served on a steel plate. It is what Nepali families eat twice a day, it is what the kitchen staff and your porters will be eating, and on almost every menu in the country it comes with <strong>free refills</strong>." },
          { p: "That matters more than it sounds. A trekking day burns 3,000 to 5,000 calories. A plate of dal bhat with two refills of rice and dal delivers that at a price no other dish on the menu matches, and because the kitchen makes it fresh for the household, it is usually the best-cooked thing available. The old trail saying — dal bhat power, 24 hour — is a joke that happens to be sound nutrition advice." },
          { p: "Regional versions vary: in the Khumbu you may get potato instead of rice, in Mustang buckwheat, and in Tamang villages in Langtang a millet porridge called dhido. All are worth trying." },
        ],
      },
      {
        h2: "The Standard Teahouse Menu",
        blocks: [
          {
            table: {
              head: ["Meal", "Usual options", "Worth knowing"],
              rows: [
                ["Breakfast", "Porridge, muesli, Tibetan bread, chapati, pancakes, eggs any style, toast and jam", "Porridge with honey and a boiled egg is the most reliable pre-dawn breakfast above 4,000 m"],
                ["Lunch", "Fried rice, fried noodles, momos, thukpa, garlic soup, potato dishes, sandwiches", "Order something that arrives quickly — long lunch stops in the cold are draining"],
                ["Dinner", "Dal bhat, curry and rice, pasta, pizza, noodle soup, sherpa stew, spring rolls", "Dal bhat is the best value and usually the best cooked"],
                ["Snacks and drinks", "Masala tea, lemon ginger honey, hot chocolate, Nescafé, Snickers, biscuits, apple pie in bigger villages", "Garlic soup and ginger tea are genuinely useful at altitude, not just folklore"],
              ],
            },
          },
          { p: "Bakeries are a real feature of the busier trails. Namche Bazaar, Ghorepani, Manang, and Tatopani all have places producing apple pie, cinnamon rolls, and decent coffee — Manang even has a cinema. These are worth building a rest day around." },
        ],
      },
      {
        h2: "How Altitude Changes the Menu — and Your Appetite",
        blocks: [
          { p: "Above roughly 3,500 m, two things happen. The menu shortens, because everything has been carried up on foot, and your appetite falls off a cliff, because altitude suppresses hunger and slows digestion. Many trekkers lose two to four kilos on a long trek simply by not eating enough." },
          { p: "What works when you do not feel like eating:" },
          {
            ul: [
              "Soups — garlic, tomato, noodle, sherpa stew. Warm liquid calories go down when solid food will not.",
              "Carbohydrate over protein and fat, which digest slowly at altitude.",
              "Eating little and often rather than three large meals. Keep nuts, chocolate, and dried fruit in your daypack.",
              "Hot drinks with sugar — lemon ginger honey is the trail standard for a reason.",
              "Avoiding alcohol above 3,000 m entirely. It dehydrates, disrupts sleep, and suppresses night-time breathing.",
            ],
          },
          { p: "Force yourself to eat even when you do not want to. Under-eating at altitude shows up two days later as exhaustion that feels like illness, and it is the most common reason a fit trekker struggles on the approach to [[trek:everest-base-camp-trek|Everest Base Camp]] or over Thorong La on the [[trek:annapurna-circuit-trek|Annapurna Circuit]]." },
        ],
      },
      {
        h2: "Meat, Hygiene, and Staying Well",
        blocks: [
          { p: "Be careful with meat at altitude. It is slaughtered low down and carried up unrefrigerated, sometimes for days. In Sagarmatha National Park many lodges do not serve it at all, partly for Buddhist reasons and partly for sound ones. Above about 3,500 m we advise eating vegetarian, which is no hardship given how good the lentil and potato cooking is." },
          {
            ul: [
              "Eat freshly cooked, hot food. Avoid anything that has been sitting warm.",
              "Peel fruit, or wash it in treated water.",
              "Skip salads and uncooked garnishes above the road head.",
              "Use hand sanitiser before every meal — most stomach trouble on treks travels on hands, not in kitchens.",
              "Drink only boiled or treated water, including for brushing teeth. See our [[post:drinking-water-while-trekking-in-nepal|water guide]] for the options.",
            ],
          },
        ],
      },
      {
        h2: "Dietary Requirements",
        blocks: [
          { p: "Vegetarian and vegan trekkers do very well in Nepal — much of the standard menu is already plant-based, and dal bhat without ghee or curd is straightforward. Gluten-free is harder but workable: rice, potato, dal, eggs, and buckwheat are all available, while bread, noodles, momos, and pasta are not safe choices." },
          { p: "Serious allergies need a conversation before you book. Lodge kitchens are small, shared, and not set up for cross-contamination control, and at 4,900 m there is no alternative kitchen. Tell us at the enquiry stage and we will write it into the trip notes so your guide briefs every lodge in advance — and on remote or camping routes, our cook can cater to it directly." },
        ],
      },
    ],
    faqs: [
      { question: "Is trekking food included in your trips?", answer: "Three meals a day are included for every day on the trail — breakfast, lunch, and dinner from the lodge menu. Meals in Kathmandu and Pokhara are not included beyond hotel breakfast, so you can eat what you like in the cities. Snacks, bottled drinks, and alcohol are always your own." },
      { question: "What is the best thing to order on a trek?", answer: "Dal bhat, most of the time. It comes with free refills, it is freshly cooked because the kitchen makes it for the household, and it delivers the calories a trekking day actually demands. Garlic soup before dinner at altitude is the other thing worth ordering habitually." },
      { question: "Can I eat meat on the trail?", answer: "At lower altitude, yes. Above about 3,500 m we advise against it — meat is carried up unrefrigerated, and many Khumbu lodges do not serve it at all. The vegetarian side of the menu is substantial and much safer." },
      { question: "Will I lose weight on a Nepal trek?", answer: "Most people lose two to four kilos on a two-week high-altitude trek, mainly because altitude suppresses appetite while the days burn 3,000 to 5,000 calories. Eating more than you feel like — especially soup, carbohydrate, and sweet hot drinks — is a performance decision, not indulgence." },
      { question: "Can you cater for vegan or gluten-free diets?", answer: "Vegan is easy on any route. Gluten-free is manageable with rice, potato, dal, eggs, and buckwheat, but bread, noodles, and momos are out. Tell us when you enquire and your guide will brief lodges ahead; on camping and remote routes our cook handles it directly." },
      { question: "How much does food cost if I trek independently?", answer: "Budget roughly NPR 2,500 to 4,500 per day for three meals, rising steeply with altitude — a plate of dal bhat at Gorak Shep costs several times what it costs in Lukla, because every ingredient arrived on someone's back. On our trips this is already in the package price." },
    ],
    relatedTreks: [
      "annapurna-base-camp-trek",
      "everest-base-camp-trek",
      "langtang-valley-trek",
      "poonhill-trek",
    ],
    tripsNote: "Teahouse routes where all three daily meals on the trail are included in the trip price.",
    relatedPosts: [
      "teahouse-trekking-in-nepal-explained",
      "drinking-water-while-trekking-in-nepal",
      "how-much-does-trekking-in-nepal-cost",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["trekking food", "dal bhat", "teahouse trekking", "nepal trekking"],
    meta: {
      title: "Food on the Trail in Nepal: What You Will Actually Eat",
      description: "Teahouse menus explained — dal bhat, breakfasts, what to order at altitude, meat and hygiene advice, and how to handle vegan, vegetarian and gluten-free diets.",
      keywords: "trekking food Nepal, dal bhat, teahouse menu Nepal, what to eat trekking Everest, vegetarian trekking Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "drinking-water-while-trekking-in-nepal",
    title: "Drinking Water While Trekking in Nepal: Safe Options Compared",
    cluster: "planning",
    date: "2026-01-30",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-03-bridge-at-kyanjin-ri-2024",
      alt: "The Himalayan panorama from Kyanjin Ri on the Langtang Valley trek, Nepal.",
    },
    excerpt:
      "You need three to four litres a day at altitude, and you cannot drink it straight from the tap. Tablets, filters, UV pens, boiled water, and bottled water compared — on safety, cost, weight, taste, and what they do to the mountain.",
    intro: [
      { p: "Hydration is not a side issue at altitude. Fast breathing in dry, cold air loses far more water than you would expect, and dehydration mimics and worsens the symptoms of altitude sickness. Three to four litres a day is the working target above 3,000 m, and more on a hard pass day." },
      { p: "The question is how to make that water safe. Stream and tap water on Nepal's trails carries bacteria, viruses, and protozoa including giardia, and a week of giardiasis at 4,000 m will end a trek. There are five realistic options, and they are not equally good." },
    ],
    sections: [
      {
        h2: "The Five Options Compared",
        blocks: [
          {
            table: {
              head: ["Method", "Kills", "Cost on a 12-day trek", "Weight", "Verdict"],
              rows: [
                ["Chlorine dioxide tablets or drops", "Bacteria, viruses, protozoa including giardia", "USD 10–20", "Negligible", "Best all-round choice. Wait 30 minutes, 4 hours for cryptosporidium."],
                ["Squeeze or pump filter (0.1 micron)", "Bacteria and protozoa, not viruses", "USD 30–100 one-off", "60–300 g", "Fast and tasteless. Best paired with tablets, and must not freeze."],
                ["UV steriliser pen", "Bacteria, viruses, protozoa", "USD 80–130 one-off", "150–200 g", "Excellent but battery-dependent, and cold drains batteries fast."],
                ["Boiled water from the lodge", "Everything", "NPR 100–300 per litre", "None", "Reliable, but costs money and burns kerosene or firewood."],
                ["Bottled mineral water", "Everything", "NPR 100–400 per bottle", "None carried", "Avoid. Discouraged across conservation areas, banned in parts of the Khumbu."],
              ],
            },
          },
          { p: "Our recommendation for most trekkers is simple: <strong>a one-litre wide-mouth bottle, a two-litre bladder, and chlorine dioxide tablets</strong>, with a filter as a luxury if you dislike the faint taste. Total weight under 200 g, total cost under USD 20, and nothing to break at 5,000 m." },
        ],
      },
      {
        h2: "Why Bottled Water Is the Wrong Answer",
        blocks: [
          { p: "It is the easiest option and the worst one. Every bottle is flown or carried to altitude and then has to come back down as rubbish, which frequently does not happen — it is burned behind lodges or buried. The Khumbu Pasang Lhamu Rural Municipality banned the sale of single-use plastic water bottles above Lukla in 2020 for exactly this reason, and refill stations operate in several villages." },
          { p: "There is a cost argument too. Bottled water on a two-week Everest trek can run to USD 80 or more, against USD 15 for tablets. You are paying a premium for a product that makes the trail worse." },
        ],
      },
      {
        h2: "How to Actually Do It Each Day",
        blocks: [
          {
            ol: [
              "Fill both bottles at the lodge tap each morning and dose them with tablets before breakfast. By the time you leave, they are ready.",
              "Refill at lodges during the day rather than from streams where you can. Lodge water is piped from a spring and generally cleaner at source.",
              "Drink steadily through the day — half a litre an hour of walking — rather than a litre at lunch.",
              "At the lodge in the evening, fill a wide-mouth bottle with boiled water and put it in your sleeping bag. It is both a hot water bottle and your breakfast litre.",
              "Keep filters and bottles out of the cold overnight. A frozen filter cartridge is a broken filter cartridge.",
            ],
          },
          { p: "Use treated water for brushing your teeth too. It is a small discipline that prevents a disproportionate number of upset stomachs." },
        ],
      },
      {
        h2: "Signs You Are Not Drinking Enough",
        blocks: [
          { p: "At altitude, dehydration and mild altitude sickness produce almost the same symptoms, which is why guides ask about your fluid intake before anything else." },
          {
            ul: [
              "Dark urine — the most reliable field check. Aim for pale straw.",
              "Headache that eases after half a litre and a rest.",
              "Cracked lips, dry cough, and a raw throat.",
              "Unusual fatigue on a day that should have felt easy.",
            ],
          },
          { p: "If the headache does not respond to fluid and a simple painkiller, treat it as altitude rather than dehydration and tell your guide. Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]] sets out what happens next." },
        ],
      },
      {
        h2: "Hot Drinks, Electrolytes, and What Not to Drink",
        blocks: [
          { p: "Tea counts toward your intake, and lodges pour a lot of it — masala tea, black tea, and the lemon ginger honey that every trekker ends up addicted to by day four. Butter tea in Tibetan-Buddhist villages is salty rather than sweet and worth trying once for the experience and once for the calories." },
          { p: "Electrolyte or rehydration salts are genuinely useful on hard days and essential if you have had any stomach trouble — plain water alone does not replace what you lose. Carry a few sachets." },
          { p: "What to avoid: alcohol above 3,000 m, because it dehydrates and suppresses night-time breathing; a lot of coffee, for the same dehydrating reason; and untreated stream water, however clear and however high. There is usually a yak pasture upstream." },
        ],
      },
      {
        h2: "Refill Points on the Main Trails",
        blocks: [
          { p: "Three regions have gone furthest in replacing bottled water with refills, and knowing where the stations are makes the habit easy rather than worthy." },
          {
            ul: [
              "<strong>The Khumbu</strong> — safe drinking water stations operate in Lukla, Namche Bazaar, and several villages up to Dingboche, selling boiled and filtered water by the litre at a fraction of the bottled price. Single-use plastic bottles have been banned above Lukla since 2020.",
              "<strong>The Annapurna region</strong> — stations run by the conservation area authority appear in Chhomrong, Ghorepani, Manang, and along the Jomsom road, and lodges throughout the area sell boiled water.",
              "<strong>Langtang</strong> — refills are available through most lodges from Syabrubesi to Kyanjin Gompa, though dedicated stations are fewer.",
            ],
          },
          { p: "On remote and restricted routes — [[trek:upper-dolpo-trek|Upper Dolpo]], [[trek:kanchenjunga-circuit-trek|Kanchenjunga]], [[trek:makalu-base-camp-trek|Makalu]] — there are no stations at all, and some nights are camping. Carry tablets and a filter on those trips and treat every litre yourself; our camping crews boil water for the group as well." },
        ],
      },
    ],
    faqs: [
      { question: "How much water should I drink while trekking?", answer: "Three to four litres a day above 3,000 m, and more on a long pass day. Dry air and rapid breathing lose far more fluid than the temperature suggests, and dehydration both mimics and worsens altitude sickness." },
      { question: "Can I drink tap water in Nepali teahouses?", answer: "Not untreated. Lodge taps are usually spring-fed but not purified, and contamination from livestock upstream is common. Treat everything with tablets, a filter, or a UV pen, or buy boiled water from the lodge." },
      { question: "Are purification tablets or a filter better?", answer: "Tablets are lighter, cheaper, cannot break, and kill viruses as well as bacteria and protozoa. Filters are faster and leave no taste, but most do not remove viruses and they are ruined if they freeze. Many trekkers carry a filter for convenience and tablets as backup." },
      { question: "Why should I avoid bottled water on the trail?", answer: "Every bottle has to be carried up and should be carried back down, and much of it ends up burned or buried on the mountain. The Khumbu banned the sale of single-use plastic water bottles above Lukla in 2020, and refill stations now operate in several villages." },
      { question: "Is boiled water from lodges safe?", answer: "Yes — it is the most reliable option of all, and you can buy a thermos at most lodges. The drawbacks are cost, typically NPR 100 to 300 per litre rising with altitude, and the kerosene or firewood burned to produce it." },
      { question: "Do I need electrolyte tablets?", answer: "They help on hard days and are important if you have had diarrhoea or are vomiting, when plain water alone will not restore what you have lost. A few sachets of oral rehydration salts weigh nothing and are worth having in the first aid kit." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "langtang-valley-trek",
      "gokyo-lake-trek",
    ],
    tripsNote: "High-altitude routes where daily hydration makes a measurable difference to how you feel.",
    relatedPosts: [
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "responsible-trekking-in-nepal",
      "nepal-trekking-packing-list",
      "food-on-the-trail-in-nepal",
    ],
    tags: ["drinking water", "trekking health", "nepal trekking", "responsible travel"],
    meta: {
      title: "Drinking Water While Trekking in Nepal: Safe Options Compared",
      description: "Tablets, filters, UV pens, boiled and bottled water compared for Nepal treks — on safety, cost, weight and environmental impact, plus how much to drink at altitude.",
      keywords: "drinking water Nepal trek, water purification trekking, giardia Nepal, bottled water ban Khumbu, hydration altitude",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-trekking-in-nepal-cost",
    title: "How Much Does Trekking in Nepal Cost? A Full Budget Breakdown",
    cluster: "planning",
    date: "2026-02-03",
    hero: {
      image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-00-annapurna-base-camp-perspective",
      alt: "Annapurna Base Camp ringed by peaks, Annapurna region, Nepal.",
    },
    excerpt:
      "What a Nepal trek actually costs, line by line: permits, guides, porters, lodges, food, internal flights, gear, tips, and the extras nobody quotes for. With worked budgets for a short trek, a classic teahouse trek, and a restricted-area route.",
    intro: [
      { p: "Nepal remains one of the best-value mountain destinations in the world, but quoted prices vary by a factor of four for what looks like the same trek. The difference is almost never the mountain — it is what is included, how many staff are paid properly, how fast the itinerary is, and whether the operator is absorbing risk or passing it to you." },
      { p: "This breakdown shows where the money actually goes, so you can compare two quotes line by line instead of by headline figure." },
    ],
    sections: [
      {
        h2: "The Cost Lines on Every Trek",
        blocks: [
          {
            table: {
              head: ["Line", "Typical cost", "Notes"],
              rows: [
                ["Permits and park fees", "NPR 5,000–6,500 per person", "Annapurna, Everest, Langtang. Restricted areas are far higher — Upper Mustang is USD 500 for 10 days"],
                ["Licensed guide", "USD 30–40 per day", "Covers the guide's wage, insurance, food, and lodging"],
                ["Porter", "USD 25–35 per day", "One porter generally shared between two trekkers, carrying up to 20 kg"],
                ["Teahouse room", "NPR 500–1,500 per night", "Cheap by design — lodges make their margin on food"],
                ["Food on the trail", "NPR 2,500–4,500 per day", "Rises sharply with altitude; everything above the road is carried in"],
                ["Kathmandu or Pokhara hotel", "USD 30–90 per night", "Three-star standard, with breakfast"],
                ["Road transfers", "USD 15–150 per leg", "Kathmandu to Besisahar, Pokhara to Kande, Kathmandu to Syabrubesi"],
                ["Internal flights", "USD 115–230 each way", "Kathmandu–Pokhara, Lukla, Jomsom, Juphal, Taplejung"],
                ["Tips", "USD 10–15 per day for the team", "Customary rather than obligatory, and genuinely expected"],
                ["Trail extras", "USD 10–15 per day", "Hot showers, charging, Wi-Fi, snacks, soft drinks"],
              ],
            },
          },
          { p: "Note which lines are fixed and which scale with days. Permits and flights are fixed per trip; guide, porter, food, and lodging are per day — which is why a 14-day trek does not cost twice a 7-day one." },
        ],
      },
      {
        h2: "Three Worked Budgets",
        blocks: [
          { p: "These are all-in per-person estimates for a booked trip on a twin-share basis, excluding international flights, visa, and insurance." },
          {
            table: {
              head: ["Trip", "Days", "Package", "Plus personal spending"],
              rows: [
                ["Short Pokhara-start trek — [[trek:mardi-himal-trek-from-pokhara|Mardi Himal from Pokhara]]", "5", "From around USD 375", "USD 60–100 in extras and tips"],
                ["Classic teahouse trek — [[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "From around USD 525", "USD 120–200"],
                ["Flight-dependent trek — [[trek:everest-base-camp-trek|Everest Base Camp]]", "14", "Package plus Lukla flights", "USD 200–300"],
                ["Restricted area — [[trek:upper-mustang-trek|Upper Mustang]]", "16", "From around USD 1,400, including the USD 500 permit", "USD 250–350"],
              ],
              note: "Prices are per person on a twin-share basis and change with group size and season — check the trip page for the current figure.",
            },
          },
          { p: "The pattern worth noticing: <strong>Pokhara-start treks are the cheapest way into the Himalaya</strong>, because they cut the Kathmandu transfer days and the domestic flight. A five-day walk from Pokhara to a 3,580 m ridge under Machhapuchhre costs less than a week in most European cities." },
        ],
      },
      {
        h2: "What Makes One Quote Cheaper Than Another",
        blocks: [
          { p: "When you see a large gap between two prices for the same route, it is almost always one of these:" },
          {
            ul: [
              "<strong>Fewer days.</strong> A 12-day Everest Base Camp itinerary is cheaper than a 14-day one because it has dropped an acclimatisation day. That is a safety decision being sold as a discount.",
              "<strong>Flights excluded.</strong> Lukla return adds roughly USD 400 per person; check whether it is in the headline price.",
              "<strong>No porter.</strong> Fine if you want to carry your own kit, but make sure the comparison is like for like.",
              "<strong>Staff pay and insurance.</strong> The cheapest operators cut guide wages, porter loads, and staff insurance. This is the part of a cheap trek that someone else pays for.",
              "<strong>Meals on the trail excluded.</strong> Adds roughly USD 25–35 per day once you are above the road head.",
              "<strong>Group size.</strong> Per-person costs fall as the group grows, which is why our pricing is tiered by group size rather than fixed.",
            ],
          },
        ],
      },
      {
        h2: "Costs People Forget",
        blocks: [
          {
            ul: [
              "<strong>Nepal visa</strong> — USD 30 for 15 days, USD 50 for 30 days, USD 125 for 90 days, payable on arrival.",
              "<strong>Insurance with altitude and helicopter cover</strong> — USD 120–350 for a two to three week trip.",
              "<strong>Gear</strong> — a down jacket and sleeping bag can be hired in Kathmandu for a few dollars a day instead of bought.",
              "<strong>Extra nights in Kathmandu</strong> — build in at least one spare day if your trek depends on a Lukla or Jomsom flight.",
              "<strong>Tips</strong> — customary, and the amount is usually settled as a group on the last trail day.",
              "<strong>Cash on the trail</strong> — there are no ATMs above the road head. Withdraw Nepali rupees in Kathmandu or Pokhara for the whole trek.",
            ],
          },
          { p: "On tipping, the convention that avoids awkwardness: pool roughly USD 10 to 15 per trekker per day for the whole team, hand it over on the final trail evening, and let the guide divide it between guide, assistant, and porters." },
        ],
      },
      {
        h2: "Where It Is Worth Spending More",
        blocks: [
          { p: "Having seen what goes wrong, these are the places where extra money buys something real:" },
          {
            ol: [
              "<strong>Extra days in the itinerary.</strong> An extra acclimatisation day costs around USD 60 and is the cheapest insurance against turning back.",
              "<strong>A porter.</strong> Carrying 15 kg instead of 6 kg changes how the second week feels, and it employs someone locally.",
              "<strong>A spare day before a Lukla or Jomsom flight.</strong> Weather delays are routine, and a missed connection home is expensive.",
              "<strong>Proper insurance.</strong> One evacuation costs more than every trek in this catalogue.",
              "<strong>Boots and a shell jacket.</strong> The two items where buying cheap genuinely costs you comfort every day.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "What is the cheapest trek in Nepal?", answer: "Short Pokhara-start treks. Poon Hill from Pokhara runs three days from around USD 200, and Mardi Himal from Pokhara five days from around USD 375, because they skip the Kathmandu transfers and the domestic flight while still reaching genuine Annapurna viewpoints." },
      { question: "How much does Everest Base Camp cost in total?", answer: "Most of the cost sits in the package plus the Lukla flights, which add roughly USD 400 per person return. On top of the trip price, budget USD 200 to 300 for extras and tips over 14 days, and account separately for your visa and insurance." },
      { question: "Is it cheaper to trek independently?", answer: "Marginally, and less so than it used to be — since April 2023 a licensed guide has been required in national parks and protected areas. Once you are paying a guide, an agency package usually costs little more and covers permits, lodge bookings in peak season, transfers, and the operational backup that matters when something goes wrong." },
      { question: "How much cash should I carry on the trail?", answer: "For a two-week trek, NPR 25,000 to 40,000 in mixed small notes covers showers, charging, Wi-Fi, snacks, drinks, and tips. There are no ATMs above the road head and cards are not accepted, so withdraw it in Kathmandu or Pokhara before you leave." },
      { question: "Are tips included in the price?", answer: "No, and they are genuinely expected. The usual convention is to pool USD 10 to 15 per trekker per day for the whole crew, hand it to the guide on the last trail evening, and let them distribute it between guide, assistant guide, and porters." },
      { question: "Why do some operators quote half your price?", answer: "Usually because the itinerary is shorter, flights or trail meals are excluded, there is no porter, or staff wages and insurance have been cut. Ask for the inclusions list and the day count side by side — when you line up two quotes properly, the gap nearly always explains itself." },
      { question: "Do prices change by season?", answer: "Package prices are steady through the year, but peak-season lodges and flights are tighter, and climbing permit royalties are lower outside spring and autumn. The largest seasonal saving is on trekking-peak permits, which drop substantially in winter and summer." },
    ],
    relatedTreks: [
      "mardi-himal-trek-from-pokhara",
      "annapurna-base-camp-trek",
      "everest-base-camp-trek",
      "upper-mustang-trek",
      "poonhill-trek-from-pokhara",
    ],
    tripsNote: "The trips used in the worked budgets above — each page carries the current per-person price by group size.",
    relatedPosts: [
      "nepal-trekking-permits-explained",
      "guides-and-porters-in-nepal-rules-and-costs",
      "travel-insurance-for-trekking-in-nepal",
      "short-treks-from-pokhara",
    ],
    tags: ["trekking cost", "nepal trekking budget", "trip planning", "trek prices"],
    meta: {
      title: "How Much Does Trekking in Nepal Cost? Full Budget Breakdown",
      description: "Permits, guides, porters, lodges, food, flights and tips — what a Nepal trek really costs, with worked budgets for short, classic and restricted-area routes.",
      keywords: "Nepal trekking cost, Everest Base Camp cost, Annapurna trek price, Nepal trek budget, trekking guide porter cost",
    },
  },
];
