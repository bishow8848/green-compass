import type { BlogContent } from "./build";

export const planningB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-trekking-packing-list",
    title: "Nepal Trekking Packing List: What to Bring by Altitude",
    cluster: "planning",
    date: "2026-01-16",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-00-high-camp-of-mardi-himal-trek-08",
      alt: "High Camp on the Mardi Himal trek, Annapurna region, Nepal.",
    },
    excerpt:
      "A complete packing list for trekking in Nepal, organised by the altitude you will actually reach rather than by season — plus the weight limits that decide what comes with you, what stays in Kathmandu, and what you should buy locally.",
    intro: [
      { p: "Most packing lists for Nepal are organised by season. That is the wrong axis. A January trek to Poon Hill at 3,210 m needs less insulation than an October trek to Gorak Shep at 5,164 m, because altitude drives night-time temperature far more than the calendar does. Pack for the highest night you will sleep at, and the season becomes a detail." },
      { p: "The second thing that shapes your packing is weight. If a porter carries your duffel it must stay under 15 kg, and if your trek starts with a flight to Lukla or Jomsom you have a 10 kg checked and 5 kg hand allowance. Those two numbers should govern every optional item." },
    ],
    sections: [
      {
        h2: "The Two Bags System",
        blocks: [
          { p: "Almost every guided trek in Nepal runs on two bags:" },
          {
            ul: [
              "<strong>A duffel or kit bag (carried by a porter)</strong> — sleeping bag, spare clothing, down jacket, toiletries. Soft-sided, no wheels, no rigid frame, under 15 kg. We supply one if you do not have one.",
              "<strong>A daypack (carried by you)</strong> — 30 to 40 litres, holding water, waterproofs, camera, snacks, sunscreen, documents, and any layer you may want during the day. Aim for 5 to 7 kg loaded.",
            ],
          },
          { p: "Anything you do not need on the trail stays in a locked bag at your Kathmandu or Pokhara hotel, free of charge, until you return. City clothes, valuables, and the half of your luggage that you packed out of anxiety all belong there." },
        ],
      },
      {
        h2: "Clothing by Altitude Band",
        blocks: [
          { p: "Layering is the whole game. You will be hot climbing in sun and cold within minutes of stopping in shade, often on the same hour of the same day." },
          {
            table: {
              head: ["Highest night you will sleep at", "Typical routes", "What the clothing needs to handle"],
              rows: [
                ["Up to 3,000 m", "Poon Hill, Ama Yangri, Pikey Peak approach, Kathmandu Valley rim", "Cool nights near freezing. Fleece plus a light down jacket is enough."],
                ["3,000 – 3,800 m", "Mardi Himal, Langtang Valley, Namche, Everest View, Tsum Valley", "Nights to about -5 °C. Full layer set, proper down jacket, warm hat and gloves."],
                ["3,800 – 4,500 m", "Annapurna Base Camp, Gokyo, Manang, Makalu, Khopra", "Nights to -10 °C. Heavier down, thermal base layers, insulated gloves."],
                ["Above 4,500 m", "Everest Base Camp, Thorong La, Larke La, Three Passes, trekking peaks", "Nights to -15 °C or colder with wind. Expedition-weight down, two glove layers, gaiters."],
              ],
            },
          },
          { p: "The core clothing list, which scales with the band above rather than changing shape:" },
          {
            ul: [
              "2–3 merino or synthetic base layer tops, 2 base layer bottoms (thermal leggings above 3,800 m).",
              "1 fleece or light insulated mid-layer.",
              "1 down jacket — light below 3,500 m, expedition weight above 4,500 m.",
              "Waterproof and breathable shell jacket, plus waterproof over-trousers.",
              "2 pairs of trekking trousers; one convertible pair is useful on hot low-altitude days.",
              "4–5 pairs of wool trekking socks plus 1 thick pair for sleeping.",
              "Warm hat, sun hat or cap, buff or neck gaiter, liner gloves, insulated gloves or mittens.",
              "Underwear for 4–5 days — lodges along the main trails have laundry services low down.",
            ],
          },
        ],
      },
      {
        h2: "Footwear",
        blocks: [
          { p: "More treks are ruined by boots than by altitude. Bring waterproof, mid or high-cut trekking boots with ankle support, and walk at least 50 km in them before you fly. New boots bought in Kathmandu the day before departure are the single most common source of blisters we see." },
          {
            ul: [
              "Broken-in waterproof trekking boots.",
              "Lightweight camp shoes or trainers for lodges in the evening.",
              "Gaiters for snow above 4,000 m, or for monsoon mud.",
              "Blister kit — zinc oxide tape, blister plasters, and a needle. Tape a hot spot before it becomes a blister, not after.",
            ],
          },
        ],
      },
      {
        h2: "Sleeping, Packs, and Gear",
        blocks: [
          {
            table: {
              head: ["Item", "Specification", "Notes"],
              rows: [
                ["Sleeping bag", "-10 °C comfort rating for most teahouse treks; -20 °C for peaks and high passes", "Lodges provide blankets, but not enough above 4,000 m. Hire in Kathmandu if you prefer."],
                ["Sleeping bag liner", "Fleece or silk", "Adds around 5 °C and keeps the bag clean."],
                ["Daypack", "30–40 litres with rain cover", "Must hold waterproofs, 2 litres of water and a camera."],
                ["Trekking poles", "Adjustable pair", "Most useful on descents — the long stone staircases in Annapurna punish knees."],
                ["Headlamp", "Plus spare batteries", "Essential for pre-dawn starts and lodges that cut power at night."],
                ["Water bottles", "2 × 1 litre, or 1 bottle plus a 2 litre bladder", "A wide-mouth bottle doubles as a hot water bottle in your sleeping bag."],
                ["Purification", "Tablets, filter, or UV pen", "See our drinking water guide below — this is a plastic reduction measure as much as a health one."],
                ["Sunglasses", "Category 3 or 4 with side protection", "Snow glare above 4,000 m is genuinely dangerous to unprotected eyes."],
                ["Power bank", "10,000 mAh or more", "Charging costs money and is slow at altitude; cold drains batteries fast."],
              ],
            },
          },
        ],
      },
      {
        h2: "First Aid and Toiletries",
        blocks: [
          { p: "Your guide carries a comprehensive group kit and, on high routes, a pulse oximeter and emergency medication. Your personal kit covers what is specific to you." },
          {
            ul: [
              "Any prescription medication, in its original packaging, with a copy of the prescription.",
              "Painkillers — paracetamol or ibuprofen, which also handle altitude headache.",
              "Rehydration salts, anti-diarrhoeal tablets, and a course of antibiotics if your doctor advises one for travellers' diarrhoea.",
              "Throat lozenges — the dry air above 4,000 m gives almost everyone the Khumbu cough.",
              "Blister care, plasters, antiseptic cream, and tape.",
              "High-SPF sunscreen (factor 50) and SPF lip balm. Sun at 5,000 m burns through cloud.",
              "Hand sanitiser, quick-dry towel, biodegradable soap, wet wipes, and toilet paper.",
              "Women: tampons or pads, plus sealable bags to carry used items out.",
            ],
          },
          { p: "If you take Diamox for altitude, read our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] first and discuss the dose with your own doctor before travelling." },
        ],
      },
      {
        h2: "What to Buy or Hire in Kathmandu",
        blocks: [
          { p: "Thamel in Kathmandu and Lakeside in Pokhara both have dozens of gear shops. Quality ranges from genuine brand stock to convincing copies, and prices are low. What is worth buying locally:" },
          {
            ul: [
              "<strong>Worth buying:</strong> duffel bags, down jackets for a single trip, trekking poles, gloves, hats, buffs, socks, water bottles, sun cream, lip balm, and snacks.",
              "<strong>Worth hiring:</strong> sleeping bags and down jackets — typically a few dollars a day, and sensible if you will not trek again.",
              "<strong>Bring from home:</strong> boots, waterproof shell, base layers, prescription medication, sunglasses, and anything that must fit properly.",
            ],
          },
          { p: "Budget half a day in Kathmandu before departure for this. Your guide will run a kit check the evening before you leave, which is the point at which anything missing can still be fixed." },
        ],
      },
      {
        h2: "What to Leave Behind",
        blocks: [
          {
            ul: [
              "Jeans and cotton t-shirts — they hold sweat, chill you, and take days to dry.",
              "Hard-sided suitcases. A porter cannot carry one and a Lukla flight will not take it.",
              "Drones, unless you have arranged written permission. They are restricted in national parks and around airports.",
              "More than one book. Weight adds up and lodges swap paperbacks.",
              "Heavy camera kit you would not carry up 600 m of stone steps. One body and one zoom is the practical limit.",
            ],
          },
          { p: "Two more notes. Carry your cash in Nepali rupees from Kathmandu or Pokhara — there are no ATMs on the trails. And keep a photograph of your passport, permits, and insurance policy offline on your phone." },
        ],
      },
    ],
    faqs: [
      { question: "How heavy should my bag be?", answer: "Your porter-carried duffel must be under 15 kg, and your own daypack is comfortable at 5 to 7 kg loaded with water and waterproofs. If your trek begins with a flight to Lukla or Jomsom, the airline allowance is 10 kg checked plus 5 kg hand luggage — anything beyond that is charged by the kilo or left behind." },
      { question: "Do I need a sleeping bag if lodges provide blankets?", answer: "Yes on any trek sleeping above about 3,000 m. Teahouses supply blankets, but not enough for a -10 °C night at High Camp or Gorak Shep, and blankets are shared between guests through the season. A bag rated to -10 °C with a liner covers most teahouse routes; you can hire one in Kathmandu for a few dollars a day." },
      { question: "Can I buy trekking gear in Kathmandu?", answer: "Easily, and for much less than at home. Thamel is full of gear shops selling both genuine stock and good copies. Duffels, down jackets, poles, gloves, and socks are all worth buying there. Boots and waterproof shells are the exception — buy those at home where you can take time over the fit." },
      { question: "What should I wear on the plane to Nepal?", answer: "Wear or hand-carry your boots and one set of trekking clothes. If your checked luggage is delayed — which happens on connections through Delhi, Doha, or Istanbul — you can still start the trek in borrowed or bought gear, but not in borrowed boots." },
      { question: "How many clothes do I actually need?", answer: "Fewer than you think. Four to five days of underwear and socks, two base layers, two trekking trousers, and one of each insulating layer. Lodges on the main trails offer laundry below about 3,500 m, and above that nobody is judging you." },
      { question: "Do I need crampons or technical gear for a teahouse trek?", answer: "No. Teahouse treks, including Everest Base Camp and the Annapurna Circuit, need no technical equipment. Microspikes are occasionally useful on an icy pass in winter and your guide will advise. Technical kit — harness, crampons, ice axe, helmet — only applies to trekking peaks, and our climbing trips supply the group equipment." },
      { question: "Is a water filter better than purification tablets?", answer: "Both work. A filter or UV pen is faster and leaves no taste; tablets are lighter, cheaper, and have nothing to break. Either is better than buying bottled water, which is discouraged across Nepal's conservation areas and banned outright in parts of the Khumbu." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "mardi-himal-trek",
      "manaslu-circuit-trek",
    ],
    tripsNote: "Routes we run where this kit list applies directly — each trip confirmation includes a route-specific version.",
    relatedPosts: [
      "drinking-water-while-trekking-in-nepal",
      "everest-base-camp-packing-list",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "teahouse-trekking-in-nepal-explained",
    ],
    tags: ["packing list", "trekking gear", "nepal trekking", "trip planning"],
    meta: {
      title: "Nepal Trekking Packing List: What to Bring by Altitude",
      description: "A complete Nepal trekking packing list organised by altitude band, with weight limits, footwear advice, first aid, and what is worth buying or hiring in Kathmandu.",
      keywords: "Nepal trekking packing list, what to pack for Nepal trek, trekking gear Nepal, Everest Base Camp packing, sleeping bag rating trekking",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "travel-insurance-for-trekking-in-nepal",
    title: "Travel Insurance for Trekking in Nepal: What Your Policy Must Cover",
    cluster: "planning",
    date: "2026-01-20",
    hero: {
      image: "mardi-treks/everest-base-camp-trek-with-helicopter-return/everest-base-camp-trek-with-helicopter-return-00-everest-panorama-from-kala-patthar",
      alt: "The Everest panorama from Kala Patthar, Everest Base Camp trek, Nepal.",
    },
    excerpt:
      "Most standard travel policies stop covering you at 3,000 m — below the sleeping altitude of almost every trek in Nepal. Here is exactly which clauses to check, the altitude each region demands, and how helicopter evacuation actually gets paid for.",
    intro: [
      { p: "Travel insurance is the one booking requirement we will not waive. Above the road head in Nepal there is no ambulance and no road: a serious illness or injury means a helicopter, and helicopter operators fly against a guarantee of payment. Without cover, that guarantee has to come from you or your family, in cash, while someone is sick at 5,000 m." },
      { p: "The problem is that most policies sold as covering trekking cover it only to 3,000 m. That is lower than Namche Bazaar. This guide is about reading the clause that actually matters rather than the marketing copy on the front page." },
    ],
    sections: [
      {
        h2: "The Four Clauses That Matter",
        blocks: [
          {
            ol: [
              "<strong>Maximum trekking altitude.</strong> The policy must state a figure at or above the highest point of your route. Look for a number, not the phrase trekking and hiking covered.",
              "<strong>Emergency helicopter evacuation and repatriation.</strong> Must be explicit. Medical cover alone does not pay for a helicopter.",
              "<strong>Medical expenses and hospital treatment in Nepal.</strong> USD 100,000 or more is a sensible floor; Kathmandu's private hospitals are good and not cheap.",
              "<strong>Trip cancellation and curtailment.</strong> Permits, internal flights, and lodge bookings are non-refundable, and a cancelled Lukla flight can shorten a trek by days.",
            ],
          },
          { p: "If your trip includes a trekking peak, add a fifth: the policy must cover <strong>mountaineering with ropes, crampons, and ice axes</strong>. Many policies that happily cover trekking to 6,000 m exclude exactly that activity, which is the whole point of an Island Peak or Mera Peak trip." },
        ],
      },
      {
        h2: "Altitude Cover Needed by Route",
        blocks: [
          { p: "Buy cover for the highest point you will reach, with a margin. A policy rated to exactly 5,364 m on an Everest Base Camp trek leaves you uninsured the morning you climb Kala Patthar." },
          {
            table: {
              head: ["Route", "Highest point", "Minimum altitude cover to buy"],
              rows: [
                ["Poon Hill, Ama Yangri, Pikey Peak", "2,885 – 4,065 m", "4,500 m"],
                ["Mardi Himal, Langtang Valley, Everest View", "3,580 – 4,500 m", "5,000 m"],
                ["Annapurna Base Camp, Gokyo, Makalu Base Camp", "4,130 – 4,870 m", "5,000 m"],
                ["Everest Base Camp with Kala Patthar", "5,545 m", "6,000 m"],
                ["Annapurna Circuit (Thorong La), Manaslu Circuit (Larke La)", "5,106 – 5,416 m", "6,000 m"],
                ["Everest Three Passes, Sherpani Col, Tashi Lapcha", "5,420 – 6,180 m", "6,500 m and technical trekking"],
                ["Island Peak, Mera Peak, Lobuche East", "6,119 – 6,476 m", "7,000 m and mountaineering"],
                ["Ama Dablam and 8,000 m expeditions", "6,812 m and above", "Specialist expedition policy"],
              ],
            },
          },
        ],
      },
      {
        h2: "How Helicopter Evacuation Actually Works",
        blocks: [
          { p: "It is worth understanding the sequence, because it explains why we ask for your policy number before you start walking." },
          {
            ol: [
              "Your guide assesses the situation and calls our operations desk in Kathmandu by mobile or satellite phone.",
              "We contact the helicopter operator and your insurer's 24-hour emergency line simultaneously.",
              "The operator requires a payment guarantee — from the insurer if the policy covers it, otherwise from you.",
              "The helicopter flies in daylight and in flyable weather only. A late-afternoon incident often means a dawn pickup.",
              "The patient is flown to Lukla or Kathmandu depending on severity, and admitted to a hospital we work with.",
            ],
          },
          { p: "Costs are significant: a Khumbu evacuation to Kathmandu typically runs into several thousand US dollars. Some insurers pay the operator directly; others reimburse you afterwards against receipts. Ask which, and keep every piece of paper." },
          { p: "One caution that protects you and the industry: Nepal has had problems with unnecessary evacuations arranged for commission. Our guides call for a helicopter on medical grounds alone, and the decision is made with our operations team, not by a lodge." },
        ],
      },
      {
        h2: "What We Need From You",
        blocks: [
          { p: "Before departure, send us four things:" },
          {
            ul: [
              "The insurer's name and your policy number.",
              "The 24-hour emergency assistance telephone number.",
              "The stated maximum trekking altitude on the policy.",
              "Confirmation that helicopter evacuation and repatriation are included.",
            ],
          },
          { p: "Carry a printed copy in your daypack and keep a photo of it on your phone. Your guide will also carry a copy, because the person who needs the policy details is rarely the person in a position to find them." },
        ],
      },
      {
        h2: "Common Gaps and Exclusions",
        blocks: [
          {
            ul: [
              "<strong>Altitude caps at 3,000 m</strong> in standard annual multi-trip policies — the most common gap by a wide margin.",
              "<strong>Trekking covered but mountaineering excluded</strong>, which voids cover the moment you rope up on a trekking peak.",
              "<strong>Search and rescue excluded</strong> while medical evacuation is included. On a remote route like Dolpo or Kanchenjunga, search costs are the real exposure.",
              "<strong>Pre-existing conditions undeclared.</strong> Declare them. An undeclared condition is the usual reason a large claim is refused.",
              "<strong>Unlicensed operator clauses.</strong> Some policies require that you trek with a licensed agency and guide, which is now the legal requirement in Nepal's protected areas in any case.",
              "<strong>Credit card travel cover</strong> that excludes anything above 2,500 m, or excludes Nepal entirely.",
            ],
          },
          { p: "Nepali insurers cannot generally sell this cover to visitors, so buy in your home country before you fly. If your policy arrives with the altitude clause buried, email the insurer and get a written answer naming your route — that reply is worth keeping with the policy." },
        ],
      },
    ],
    faqs: [
      { question: "Is travel insurance mandatory for trekking in Nepal?", answer: "It is not a government requirement for a standard teahouse trek, but it is a booking condition with us and with any reputable operator, and it is mandatory for restricted-area and climbing permits. Practically, it is the difference between a helicopter launching at first light and a family wiring money overnight." },
      { question: "How much does suitable trekking insurance cost?", answer: "For a two to three week trip with cover to 6,000 m, expect somewhere between USD 120 and USD 350 depending on your age, country, and the medical limit. Mountaineering cover for a trekking peak costs more. Set against the cost of a single evacuation it is a small number." },
      { question: "Which insurers cover high-altitude trekking in Nepal?", answer: "Providers specialising in adventure travel — such as World Nomads, Global Rescue, Austrian Alpine Club, British Mountaineering Council, and Alpine Club policies in various countries — routinely cover 6,000 m and above. We do not take commission from any insurer and cannot sell you a policy; buy it at home and send us the details." },
      { question: "Does my policy need to cover mountaineering for Island Peak?", answer: "Yes. Island Peak, Mera Peak, Lobuche East, and every other trekking peak involve ropes, crampons, and an ice axe, which most policies classify as mountaineering rather than trekking. You need both the altitude figure and the activity named in the policy wording." },
      { question: "What if I have to cancel my trek?", answer: "Park fees, TIMS and restricted-area permits are non-refundable once issued, and internal flights and lodge bookings in peak season usually are too. Trip-cancellation cover for illness, injury, or bereavement is worth having alongside the medical side." },
      { question: "Will insurance pay for a helicopter if I am simply tired?", answer: "No, and you should not ask it to. Insurers only cover medically necessary evacuation, and a fraudulent claim can void the policy. If you are exhausted rather than ill, the answer is a rest day, a porter, or walking out by a lower route — all of which we can arrange." },
      { question: "Can I buy insurance after I arrive in Nepal?", answer: "Generally no. Most adventure policies must be purchased in your country of residence before departure, and many exclude cover bought after a trip has begun. Buy it when you book the flights, not when you pack." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "island-peak-climbing",
      "annapurna-circuit-trek",
      "everest-three-pass-trek",
    ],
    tripsNote: "Trips where the altitude clause in your policy needs particular attention before departure.",
    relatedPosts: [
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "how-much-does-trekking-in-nepal-cost",
      "nepal-trekking-permits-explained",
      "peak-climbing-in-nepal-beginners-guide",
    ],
    tags: ["travel insurance", "trekking safety", "helicopter evacuation", "nepal trekking"],
    meta: {
      title: "Travel Insurance for Trekking in Nepal: What to Check",
      description: "The clauses that matter in Nepal trekking insurance — altitude cover by route, helicopter evacuation, mountaineering exclusions.",
      keywords: "Nepal trekking insurance, travel insurance Everest Base Camp, helicopter evacuation Nepal, high altitude trekking insurance",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "teahouse-trekking-in-nepal-explained",
    title: "Teahouse Trekking in Nepal: What the Lodges Are Really Like",
    cluster: "planning",
    date: "2026-01-23",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-01-around-kyanjin-valley-langtang-national-park-rasuwa-nepal-24",
      alt: "Stone lodges in the Kyanjin valley, Langtang National Park, Nepal.",
    },
    excerpt:
      "Teahouse trekking means walking between family-run lodges instead of carrying a tent. Here is what the rooms, food, toilets, heating, showers, charging, and Wi-Fi are actually like — and how all of it changes as you gain altitude.",
    intro: [
      { p: "Nepal's teahouse network is the reason you can walk for two weeks in the Himalaya with a 7 kg daypack. On the main trails, a family-run lodge appears every one to three hours: a dining room with a stove, a kitchen, and a row of simple twin bedrooms. You arrive, you order dinner, you sleep, you go on." },
      { p: "The word teahouse covers a lot of ground, though. At Namche Bazaar you can get an espresso and a hot shower in a lodge with double glazing. At Gorak Shep, six hours higher, you get a plywood room at -15 °C and a toilet down an outside stair. Knowing where on that spectrum your route sits is most of what you need." },
      {
        figure: {
          image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-05-namche-bazaar-from-above",
          alt: "Namche Bazaar seen from above, Everest Base Camp trek, Nepal.",
          caption: "Namche Bazaar at 3,440 m — the most developed lodge town on any Nepali trail, and nothing like the lodges six hours higher up the same valley.",
        },
      },
    ],
    sections: [
      {
        h2: "What You Get for Your Night",
        blocks: [
          {
            table: {
              head: ["Altitude band", "Rooms", "Bathroom", "Heating", "Food"],
              rows: [
                ["Below 2,500 m", "Twin beds, thick blankets, sometimes an attached bathroom and a window seat", "Often attached, flush toilet, hot shower", "Rarely needed", "Wide menu, fresh vegetables, meat available"],
                ["2,500 – 3,500 m", "Twin beds with foam mattress, blankets, shared corridor", "Usually shared, flush or squat, gas or solar shower", "Stove in the dining room after dark", "Full menu, bakeries in bigger villages"],
                ["3,500 – 4,500 m", "Plywood partitions, thin mattress, single blanket", "Shared, often outside the main building", "Dining room stove burning yak dung or kerosene", "Shorter menu, everything carried up, no fresh meat"],
                ["Above 4,500 m", "Basic twin room, very cold, sometimes dormitory in peak season", "Shared, usually outside, often no running water at night", "Dining room only, lit in the evening", "Limited menu, dal bhat, soup, noodles, eggs"],
              ],
            },
          },
          { p: "Two practical consequences. First, the dining room is the only warm space in the building above 3,500 m, which is why evenings on a trek are sociable whether you planned it or not. Second, your sleeping bag does the real work at night — lodge blankets are not enough above 4,000 m." },
        ],
      },
      {
        h2: "Food and How Ordering Works",
        blocks: [
          { p: "Menus are remarkably consistent across the country: dal bhat, fried rice, noodle dishes, momos, soups, pasta, potatoes, porridge, eggs, Tibetan bread, and pancakes. Prices rise with altitude because everything above the last road is carried in on a porter's back or a mule's flank." },
          { p: "On our trips, three meals a day are included during the trek, so ordering is simple: your guide collects choices for the group and the kitchen cooks in one go. Two pieces of advice worth taking:" },
          {
            ul: [
              "<strong>Order dal bhat when you are hungry.</strong> It is the dish the kitchen makes for itself, it comes with free refills, and it is the best value on any menu in Nepal.",
              "<strong>Order the same dish as the group when you can.</strong> A single kitchen cooking eight different dishes on one stove takes a long time, and you are all cold.",
              "<strong>Be cautious with meat above about 3,500 m.</strong> It has been carried uphill unrefrigerated for days. Lodges in Sagarmatha National Park often do not serve it at all, which is a good sign rather than a limitation.",
            ],
          },
          { p: "Our [[post:food-on-the-trail-in-nepal|trail food guide]] goes into what to order where in more detail, including what to eat when altitude has taken your appetite." },
        ],
      },
      {
        h2: "Showers, Toilets, Charging, and Wi-Fi",
        blocks: [
          { p: "All four are available on the main trails, all four cost money above the road head, and all four get worse with altitude." },
          {
            ul: [
              "<strong>Hot showers</strong> — gas or solar heated, typically NPR 300–700. Above 4,500 m, washing is usually a bowl of hot water, and most trekkers skip it entirely.",
              "<strong>Toilets</strong> — a mix of western and squat. Bring your own paper and hand sanitiser; few lodges supply either.",
              "<strong>Charging</strong> — from solar or micro-hydro, NPR 200–500 per device, slower and dearer as you go up. Bring a power bank and sleep with it in your bag, because cold flattens batteries overnight.",
              "<strong>Wi-Fi</strong> — widely sold on the Everest and Annapurna trails, intermittent elsewhere. A local SIM with data is usually better value than buying lodge access every night.",
            ],
          },
          { p: "Heating deserves its own note: lodge stoves are lit in the evening, not all day, and the fuel is often dried yak dung. Dress for the dining room as you would for outside and you will be comfortable." },
        ],
      },
      {
        h2: "Booking, Busy Seasons, and Single Rooms",
        blocks: [
          { p: "In October and April the popular lodges fill. On a guided trip this is handled for you: our guides call ahead each morning, and we hold rooms at the pinch points — Gorak Shep, Annapurna Base Camp, High Camp on Mardi Himal, Dharmasala before Larke La — where there are only a handful of beds in total." },
          { p: "Two honest caveats about peak season. Single rooms cannot be guaranteed above about 4,000 m; in a full lodge the room you get is the room available. And in the very busiest weeks, lodges at the highest stops may put extra beds in the dining room. Starting the day early is the single most effective response to both." },
          { p: "Off the main circuits, the picture changes. On [[trek:mundum-trek|the Mundum trail]], in [[trek:upper-dolpo-trek|Upper Dolpo]], or on [[trek:kanchenjunga-circuit-trek|the Kanchenjunga Circuit]], lodges are sparse or basic homestays, and some nights are camping with a support crew. That is part of what makes those routes feel remote." },
        ],
      },
      {
        h2: "Lodge Etiquette",
        blocks: [
          {
            ul: [
              "Eat where you sleep. Lodges make their margin on food, not the room, which is why rooms are so cheap.",
              "Take your boots off at the door.",
              "Ask before photographing the family, the kitchen, or a shrine inside the lodge.",
              "Walk clockwise around a chorten or mani wall, and do not move prayer stones.",
              "Keep the dining room stove clear — it is for the room, not for drying one person's socks.",
              "Pay your extras the night before you leave rather than at 6 a.m.",
              "Carry your rubbish out, batteries and wrappers included. There is no collection above the road head.",
            ],
          },
          { p: "Finally, the lodge owners are the reason this whole system works. Many of the families on the Annapurna and Everest trails have been feeding trekkers for three generations, and they are the best source of information on conditions higher up that exists — better than any forecast. Ask them." },
        ],
      },
    ],
    faqs: [
      { question: "Do I need to book teahouses in advance?", answer: "On a guided trip, no — your guide holds and confirms rooms as you go, and we pre-book the pinch points in peak season. Independently in October or April you risk arriving at a full lodge at 4,900 m, which is a genuinely serious situation rather than an inconvenience." },
      { question: "Are teahouse rooms heated?", answer: "Almost never. Heating is a stove in the dining room, lit after dark. Bedrooms above 3,500 m are unheated plywood, so a sleeping bag rated to around -10 °C plus a liner is what keeps you warm, not the building." },
      { question: "Can I get a private room?", answer: "Usually below 4,000 m, and usually as a twin rather than a single. Above that, in peak season, a private room cannot be guaranteed — there may be only six or eight rooms at the whole stop. Single supplements we quote cover city hotels and lower lodges." },
      { question: "Is the food safe to eat?", answer: "Yes, with sensible habits. Stick to freshly cooked food, favour vegetarian dishes above 3,500 m, drink only treated or boiled water, and use hand sanitiser before eating. Most stomach trouble on treks comes from water or unwashed hands rather than the kitchen." },
      { question: "How much should I budget for extras?", answer: "On an all-inclusive trip where meals are covered, allow roughly USD 10 to 15 a day for hot showers, charging, Wi-Fi, snacks, soft drinks, and the occasional beer at lower altitude. Carry it all in Nepali rupees from Kathmandu or Pokhara — there are no ATMs on the trails." },
      { question: "Is there Wi-Fi on the trail?", answer: "On the Everest and Annapurna routes, usually yes, sold per device per day, and slow. Coverage thins in the upper valleys and disappears entirely in restricted and remote regions. A Nepali SIM with a data package is often the better option, and an eSIM works in Kathmandu and Pokhara." },
      { question: "What happens if lodges are full at the highest stop?", answer: "Your guide calls ahead the day before and, where it matters, we hold rooms in advance. If a lodge is genuinely full, the options are an extra bed in the dining room, a lodge fifteen minutes further on, or dropping to the previous village — which is why our itineraries keep a lower lodge within reach." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "langtang-valley-trek",
      "mardi-himal-trek",
      "manaslu-circuit-trek",
    ],
    tripsNote: "Classic teahouse routes where lodges are booked and confirmed for you as part of the trip.",
    relatedPosts: [
      "food-on-the-trail-in-nepal",
      "how-much-does-trekking-in-nepal-cost",
      "nepal-trekking-packing-list",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["teahouse trekking", "nepal trekking", "accommodation", "trip planning"],
    meta: {
      title: "Teahouse Trekking in Nepal: What the Lodges Are Really Like",
      description: "Rooms, food, toilets, showers, heating, charging and Wi-Fi in Nepali teahouses — and how each one changes as you climb from 2,000 m to above 5,000 m.",
      keywords: "teahouse trekking Nepal, Nepal trekking accommodation, teahouse lodge Everest, trekking food Nepal, Nepal lodge trek",
    },
  },
];
