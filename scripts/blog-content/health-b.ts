import type { BlogContent } from "./build";

export const healthB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "diamox-for-trekking-in-nepal",
    title: "Diamox for Trekking in Nepal: When to Start, Dose and Side Effects",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/annapurna-circuit-trek/annapurna-circuit-trek-01-muktinath-valley-view-of-thorong-la-pass-mountains-nepal",
      alt: "View of the Thorong La pass mountains from the Muktinath valley on the Annapurna Circuit, Nepal.",
    },
    excerpt:
      "Diamox is the most discussed tablet on any Nepal trek, and the most misunderstood. What it does, who benefits, the commonly prescribed dose and timing, the side effects you will notice, who should not take it, and the myths worth dropping.",
    intro: [
      { p: "Sit in any lodge dining room above 3,000 m and the conversation will reach Diamox within ten minutes. Are you taking it? When did you start? Doesn't it just hide the symptoms? Half the answers offered will be wrong." },
      { p: "Diamox is the brand name of acetazolamide, a drug that has been used in altitude medicine for decades. It is well studied, it is recommended in the main international guidelines for preventing acute mountain sickness in people at moderate or high risk, and it is neither a magic shield nor a dangerous crutch. It is a useful tool for some trekkers on some routes." },
      { p: "This article is general information for trip planning, not medical advice. Acetazolamide is a prescription medicine. The doses given here are those commonly published in altitude medicine guidance; your own doctor must decide whether it suits you and at what dose." },
    ],
    sections: [
      {
        h2: "What Diamox Actually Does",
        blocks: [
          { p: "When you go high, low oxygen makes you breathe faster. Faster breathing blows off carbon dioxide, which makes your blood slightly alkaline — and that alkalinity tells your brain to ease off breathing again. For the first few days your body is held back by its own brake." },
          { p: "Your kidneys eventually fix this by excreting bicarbonate, which re-acidifies the blood and lets breathing rise to where it needs to be. That is a large part of what acclimatisation is. It takes several days." },
          { p: "Acetazolamide makes the kidneys excrete bicarbonate sooner. In effect it gives you, within about a day, the blood chemistry that would otherwise take several days to develop. You breathe more, particularly at night, and your oxygen levels are better for it." },
          {
            ul: [
              "<strong>It speeds up a natural process.</strong> It is real acclimatisation, arrived at faster.",
              "<strong>It does not mask symptoms.</strong> If you develop altitude sickness while taking it, you will know.",
              "<strong>It smooths out night-time breathing,</strong> reducing the stop-start pattern that wakes people at altitude.",
              "<strong>It does not make a fast ascent safe.</strong> People taking Diamox still get altitude sickness if they climb too quickly.",
            ],
          },
        ],
      },
      {
        h2: "Who Should Consider It",
        blocks: [
          { p: "Guidelines sort trekkers into risk groups by two things: how fast the itinerary gains sleeping altitude, and whether you have had altitude illness before. Preventive medication is generally suggested for moderate and high risk, and not needed for low risk." },
          {
            table: {
              head: ["Risk", "Typical situation", "Examples in Nepal", "Usual advice"],
              rows: [
                ["Low", "No history of altitude illness; sleeping below about 2,800 m, or a gradual ascent with rest days", "[[trek:poonhill-trek|Poon Hill]]; village treks below 3,000 m; Kathmandu Valley rim walks", "Not normally needed"],
                ["Moderate", "No history, but going from low altitude to above 2,800 m in a day; or gaining more than 500 m of sleeping altitude a day above 3,000 m, with rest days", "Flying to Lukla for [[trek:everest-base-camp-trek|Everest Base Camp]]; [[trek:langtang-valley-trek|Langtang]]; [[trek:annapurna-base-camp-trek|Annapurna Base Camp]]; [[trek:mardi-himal-trek|Mardi Himal]]", "Worth considering; discuss with your doctor"],
                ["High", "Previous altitude sickness with a fast ascent; any history of HAPE or HACE; reaching above 3,500 m in a single day", "Driving to Manang; flying to Jomsom and driving to Muktinath the same day; helicopter tours with a landing; trekking peaks", "Generally recommended, alongside a slower plan"],
              ],
              note: "A simplified summary of published risk categories. Individual advice may differ.",
            },
          },
          { p: "Notice what moves people into the high-risk row: <strong>vehicles</strong>. Roads now reach Manang and Muktinath, and a jeep can take you from 800 m to 3,700 m in a day — something no walker could do. If your itinerary includes a drive or flight to altitude, the case for medication is much stronger. See our guide to the [[post:annapurna-circuit-road-and-jeep-changes|Annapurna Circuit road]]." },
        ],
      },
      {
        h2: "Dose and Timing",
        blocks: [
          {
            table: {
              head: ["", "Commonly published guidance"],
              rows: [
                ["Preventive dose (adults)", "125 mg twice a day — morning and evening"],
                ["When to start", "The day before you ascend above about 3,000 m, or before a rapid ascent"],
                ["How long to continue", "Until you have spent two to three days at your highest sleeping altitude, or until you begin to descend"],
                ["Stopping", "Simply stop. No tapering is needed and symptoms do not rebound"],
                ["Treatment dose", "250 mg twice a day for established mild altitude sickness — together with stopping the ascent"],
                ["Children", "Dosed by body weight; a doctor must calculate it"],
              ],
            },
          },
          {
            ul: [
              "<strong>Tablets in Nepal are usually 250 mg.</strong> For the preventive dose they are broken in half. Tablets bought at home may be 125 mg or 250 mg — check the packet.",
              "<strong>Take the evening dose with dinner,</strong> not at bedtime, or you will be up through the night.",
              "<strong>Drink more than you think you need.</strong> It is a mild diuretic.",
              "<strong>Older advice recommended 250 mg twice daily</strong> for prevention. The lower dose works as well for most people with fewer side effects.",
              "<strong>Missed a dose?</strong> Take the next one as normal. Do not double up.",
            ],
          },
          { p: "On a standard [[trek:everest-base-camp-trek|Everest Base Camp]] itinerary, many trekkers start in Kathmandu the day before the Lukla flight, or at Namche, and continue until they turn downhill from Gorak Shep. On the [[trek:annapurna-circuit-trek|Annapurna Circuit]], the usual pattern is to start before Manang and stop after crossing Thorong La. Your doctor's instructions take priority over any pattern described here." },
        ],
      },
      {
        h2: "Side Effects You Will Probably Notice",
        blocks: [
          {
            table: {
              head: ["Effect", "How common", "What to do"],
              rows: [
                ["Tingling in fingers, toes and lips", "Very common", "Harmless. It comes and goes"],
                ["Passing urine more often", "Very common", "Drink more. Take the evening dose early"],
                ["Fizzy drinks and beer taste flat or metallic", "Common", "Nothing — and no loss, given beer is a bad idea at altitude"],
                ["Mild nausea, reduced appetite", "Occasional", "Take with food"],
                ["Tiredness or drowsiness", "Occasional", "Usually settles after a day or two"],
                ["Blurred vision", "Rare", "Stop and seek medical advice"],
                ["Rash, especially with fever or blisters", "Rare but serious", "Stop immediately; descend and get medical help"],
                ["Swelling of lips or face, difficulty breathing", "Very rare — an allergic reaction", "Emergency. Stop the drug and get help at once"],
              ],
            },
          },
          { p: "The awkward thing is that nausea and tiredness are also symptoms of altitude sickness. This is one reason to try the drug at home first — so you know what it feels like on you before altitude is added to the picture." },
        ],
      },
      {
        h2: "Who Should Not Take It",
        blocks: [
          { p: "Tell your doctor about all of these before asking for a prescription." },
          {
            ul: [
              "<strong>Sulfonamide allergy.</strong> Acetazolamide is a sulfonamide. Many people with a mild reaction to sulfa antibiotics tolerate it, but anyone who has had a severe reaction — anaphylaxis or a severe blistering rash — should avoid it. This needs individual medical advice.",
              "<strong>Significant kidney or liver disease.</strong>",
              "<strong>Pregnancy and breastfeeding.</strong> Generally avoided unless a doctor judges the benefit outweighs the risk.",
              "<strong>Low sodium or potassium levels,</strong> or adrenal gland problems.",
              "<strong>Certain other medicines:</strong> high-dose aspirin, some anti-epileptic drugs, lithium and others. Give your doctor a complete list.",
              "<strong>A history of kidney stones.</strong> Mention it; short courses are usually acceptable but it is your doctor's call.",
              "<strong>Diabetes.</strong> Not a bar, but it can affect blood chemistry, so plan it with your doctor.",
            ],
          },
          { p: "If you cannot take acetazolamide, the alternative is not another tablet you pick yourself. It is a slower itinerary — an extra night at Namche, an extra day at Manang — and, where a doctor advises it, a different preventive drug. We can adjust any itinerary to add acclimatisation days." },
        ],
      },
      {
        h2: "Try It at Home First",
        blocks: [
          {
            ol: [
              "Two to three weeks before you travel, take the dose your doctor prescribed for two days.",
              "Note what you feel: tingling, more trips to the toilet, any nausea or tiredness.",
              "Report anything beyond the common effects to your doctor — particularly a rash.",
              "If you tolerate it, you start the trek knowing what is the drug and what is the mountain.",
              "If you do not, there is still time to plan a slower ascent instead.",
            ],
          },
          { p: "This simple step is skipped by most trekkers and recommended by most altitude doctors. Discovering an intolerance at 3,500 m, a day's walk from anywhere, is a poor alternative." },
          {
            figure: {
              image: "mardi-treks/island-peak-climbing/island-peak-climbing-06-early-morning-view-from-dingboche",
              alt: "Early morning view of the Khumbu peaks from Dingboche, Nepal.",
              caption: "Early morning at Dingboche, 4,410 m. Tablets or no tablets, the acclimatisation day here is not optional.",
            },
          },
        ],
      },
      {
        h2: "Myths Worth Dropping",
        blocks: [
          {
            table: {
              head: ["Myth", "Reality"],
              rows: [
                ["It masks the symptoms of altitude sickness", "It does not. It treats the cause of mild symptoms by speeding acclimatisation. If you get worse on it, you will feel worse"],
                ["Once you start you cannot stop until you are down", "You can stop at any time. There is no rebound"],
                ["It is cheating", "It accelerates the same adaptation your kidneys would make anyway"],
                ["If I take it I can skip the rest days", "No. People on Diamox who ascend too fast still get ill, including seriously"],
                ["It dehydrates you dangerously", "It is a mild diuretic. Drink an extra litre"],
                ["Garlic soup works just as well", "Garlic soup is a lodge tradition and a good way to take in fluid and salt. There is no evidence it prevents altitude sickness"],
                ["Fit people do not need it", "Fitness does not protect against altitude sickness at all"],
                ["Start it only when you get a headache", "That is treatment, at a higher dose, and you must also stop ascending. Prevention is started the day before"],
              ],
            },
          },
        ],
      },
      {
        h2: "Diamox Is Not the Plan",
        blocks: [
          { p: "The plan is the itinerary. Above 3,000 m, raise your sleeping altitude by no more than about 500 m a night, take a rest day every three or four days, drink enough, walk slowly, and tell your guide about symptoms when they start. A trekker who does all that without Diamox is safer than one who takes it and breaks the rules." },
          { p: "And whatever you are taking, the response to worsening symptoms is the same: stop going up, and if they do not improve, go down. Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] sets out the rules, and the [[post:everest-base-camp-trek-altitude-profile|Everest Base Camp altitude profile]] shows how a well-built itinerary applies them." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks does not prescribe Diamox or any other medicine — that decision belongs to you and your doctor. What we provide is everything around it." },
          {
            ul: [
              "<strong>Before you travel:</strong> the day-by-day sleeping altitudes of your itinerary, so your doctor can judge your risk group and advise on timing.",
              "<strong>Itineraries built on the acclimatisation rules,</strong> with rest days at the right heights, and extra days added on request for anyone who cannot or prefers not to take medication.",
              "<strong>On arrival:</strong> a health briefing, a check of what you have brought, and help obtaining a prescribed medicine from a reputable pharmacy or clinic in Kathmandu or Pokhara if you have arrived without it.",
              "<strong>On the trek:</strong> guides trained to recognise altitude illness, carrying a pulse oximeter with twice-daily readings above 4,000 m, emergency medication, and oxygen on high passes and peaks.",
              "<strong>After the trek:</strong> a check-in before you fly and a clinic appointment arranged if any symptom has not cleared.",
            ],
          },
          { p: "<a href=\"/contact\">Ask us</a> for the altitude profile of any trek before your doctor's appointment — it takes us a few minutes and makes the consultation far more useful." },
        ],
      },
    ],
    faqs: [
      { question: "When should I start taking Diamox for a Nepal trek?", answer: "Commonly published guidance is to start the day before ascending above about 3,000 m, or before a rapid ascent such as a flight or drive to altitude. Follow your own doctor's instructions on timing." },
      { question: "What is the usual dose of Diamox for altitude?", answer: "The commonly prescribed preventive dose for adults is 125 mg twice a day. Tablets sold in Nepal are usually 250 mg and are halved. A higher dose of 250 mg twice a day is used to treat mild altitude sickness. Your doctor should confirm your dose." },
      { question: "Does Diamox mask altitude sickness?", answer: "No. It speeds up the body's natural acclimatisation rather than hiding symptoms. If you develop altitude sickness while taking it, the symptoms will still be apparent and you must stop ascending." },
      { question: "What are the side effects of Diamox?", answer: "Tingling in the fingers, toes and lips, passing urine more often, and fizzy drinks tasting flat are all very common and harmless. Mild nausea and tiredness occur occasionally. A rash, blurred vision or facial swelling are rare and mean you should stop and seek help." },
      { question: "Can I take Diamox if I am allergic to sulfa drugs?", answer: "Take medical advice. Acetazolamide is a sulfonamide. People who have had a severe reaction to sulfa drugs should avoid it; those with a mild past reaction may be able to take it, but only a doctor can make that judgement." },
      { question: "Do I need Diamox for Everest Base Camp?", answer: "Many trekkers take it and many do not. The standard itinerary includes two acclimatisation days, which is the main protection. Flying to Lukla at 2,840 m puts most people in a moderate risk group, so it is worth discussing with your doctor." },
      { question: "Do I need Diamox for Annapurna Base Camp or Poon Hill?", answer: "Poon Hill, at 3,210 m with no night above 3,000 m, does not normally call for it. Annapurna Base Camp reaches 4,130 m over several days and is moderate risk; some trekkers take it, particularly if they have had altitude sickness before." },
      { question: "Can I buy Diamox in Kathmandu?", answer: "Yes, acetazolamide is widely sold in pharmacies in Kathmandu and Pokhara, usually as 250 mg tablets. Use an established pharmacy or clinic, and still take medical advice first — it is not suitable for everyone." },
      { question: "When do I stop taking it?", answer: "Usually after two to three days at your highest sleeping altitude, or once you start descending. You can stop without reducing the dose gradually." },
      { question: "Can I drink alcohol while taking Diamox?", answer: "It is best avoided at altitude regardless. Alcohol dehydrates you, disturbs sleep and suppresses night-time breathing, which works against what the drug is doing. Save the beer for Pokhara or Kathmandu." },
      { question: "Do your guides give out Diamox?", answer: "No. Our guides carry emergency medication for serious altitude illness, but preventive acetazolamide is a personal prescription that you bring yourself. We provide the altitude profile for your doctor and monitor you with a pulse oximeter on the trek." },
    ],
    relatedTreks: [
      "annapurna-circuit-trek",
      "jomsom-muktinath-trek-from-pokhara",
      "annapurna-circuit-with-tilicho-lake-trek",
      "everest-base-camp-trek",
      "manaslu-circuit-trek",
      "island-peak-climbing",
    ],
    tripsNote: "High-altitude routes where the question of Diamox comes up — each built with the acclimatisation days that matter more.",
    relatedPosts: [
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "pre-and-post-trek-medication-guide-for-nepal",
      "everest-base-camp-trek-altitude-profile",
      "namche-bazaar-acclimatisation-guide",
    ],
    tags: ["diamox", "acetazolamide", "altitude sickness", "trek medication", "acclimatisation"],
    meta: {
      title: "Diamox for Trekking in Nepal: Dose, Timing, Side Effects",
      description: "How Diamox works for altitude, who benefits, the commonly prescribed dose and timing, side effects, who should not take it, and the myths to ignore.",
      keywords: "Diamox Nepal trekking, acetazolamide dose altitude, Diamox Everest Base Camp, Diamox side effects, altitude sickness medication",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-first-aid-kit-for-nepal",
    title: "Trekking First Aid Kit for Nepal: Every Medicine Worth Carrying",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-01-around-kyanjin-valley-langtang-national-park-rasuwa-nepal-24",
      alt: "The Kyanjin valley in Langtang National Park, Rasuwa, Nepal.",
    },
    excerpt:
      "A personal medical kit for a Nepal trek should weigh under 400 g and cover the things that actually happen: headaches, stomach trouble, blisters, coughs and sunburn. The full list with quantities, what your guide carries, and how to adjust for remote, monsoon and winter routes.",
    intro: [
      { p: "Trekkers get medical kits wrong in two directions. Some carry nothing but a strip of plasters and hope. Others pack a field hospital — suture kits, three antibiotics, a splint — and never open it. Neither is prepared for what really happens on a trek, which is small, predictable and mostly manageable with a dozen items." },
      { p: "A good personal kit covers the first hours of the common problems, lives in your day pack, and weighs about as much as a paperback. Anything bigger is your guide's job. This is the list we recommend, with the reasoning for each item." },
      { p: "This article is general information for trip planning, not medical advice. Prescription items, and whether any medicine is suitable for you, are matters for your own doctor or pharmacist." },
    ],
    sections: [
      {
        h2: "What Your Guide Carries and What You Carry",
        blocks: [
          {
            table: {
              head: ["", "Guide's group kit", "Your personal kit"],
              rows: [
                ["Purpose", "Emergencies and anything serious", "Everyday problems and your own prescriptions"],
                ["Wound care", "Bandages, dressings, antiseptic, wound closure strips, splinting material", "A few plasters, tape, antiseptic wipes"],
                ["Altitude", "Pulse oximeter; emergency medication; oxygen on high passes and peaks", "Your own preventive medication if prescribed"],
                ["Medicines", "Stronger pain relief, rehydration, a broad stock for the group", "Painkillers, rehydration salts, stomach and cold remedies"],
                ["Where it travels", "With the guide", "In your day pack, every day"],
              ],
            },
          },
          { p: "The division matters because your main bag goes with a porter, who may be an hour ahead or behind you. Anything you might need during the day — and all prescription medicine — stays on your own back. More on how loads are divided in [[post:guides-and-porters-in-nepal-rules-and-costs|guides and porters in Nepal]]." },
        ],
      },
      {
        h2: "The Core Personal Kit",
        blocks: [
          {
            table: {
              head: ["Item", "Quantity for two weeks", "For"],
              rows: [
                ["Paracetamol 500 mg", "20 tablets", "Headache, fever, general pain. First choice at altitude"],
                ["Ibuprofen 200 or 400 mg", "20 tablets", "Sore knees and muscles, altitude headache. With food"],
                ["Oral rehydration salts", "6 to 8 sachets", "Diarrhoea, vomiting, heavy sweating"],
                ["Loperamide 2 mg", "10 capsules", "Stopping diarrhoea on a travel day. Not with fever or blood"],
                ["Antacid tablets", "10", "Heartburn from lodge food and altitude"],
                ["Non-drowsy antihistamine", "10 tablets", "Allergy, bites, itching"],
                ["Throat lozenges", "2 packets", "The dry cough and sore throat of altitude"],
                ["Decongestant tablets or nasal spray", "Small supply", "Blocked nose and sinuses; ears on flights"],
                ["Blister plasters (hydrocolloid)", "6 to 8, mixed sizes", "Blisters"],
                ["Zinc oxide tape", "1 small roll", "Taping hot spots before they blister"],
                ["Plasters and sterile gauze", "A handful", "Cuts and grazes"],
                ["Antiseptic wipes or small povidone-iodine", "6 wipes or 1 small bottle", "Cleaning wounds"],
                ["Antifungal cream", "1 small tube", "Feet and skin folds after days in boots"],
                ["Sunscreen SPF 50 and SPF lip balm", "1 each", "Sun at altitude burns in under half an hour"],
                ["Hand sanitiser", "1 small bottle, refillable", "Before every meal"],
                ["Water purification tablets", "1 strip or bottle", "Back-up when your main method fails"],
                ["Small scissors, tweezers, safety pins", "1 each", "Tape, splinters, slings"],
                ["Digital thermometer", "1", "Telling a real fever from feeling rough"],
              ],
            },
          },
          { p: "That is the whole kit for most teahouse treks. It fits in a one-litre zip bag." },
        ],
      },
      {
        h2: "Prescription Items to Discuss with Your Doctor",
        blocks: [
          {
            table: {
              head: ["Item", "Purpose", "Notes"],
              rows: [
                ["Acetazolamide (Diamox)", "Preventing altitude sickness on high or fast routes", "See [[post:diamox-for-trekking-in-nepal|our Diamox guide]]. Try it at home first"],
                ["Stand-by antibiotic for diarrhoea", "Moderate to severe travellers' diarrhoea", "Azithromycin is the usual choice for South Asia. Use only as instructed"],
                ["Treatment for giardia", "Prolonged diarrhoea with bloating and sulphurous burps", "Some clinics prescribe a stand-by dose for longer treks"],
                ["Anti-sickness tablets", "Vomiting, when you cannot keep fluids down", "Ask for one that dissolves in the mouth"],
                ["Your own regular medicines", "Whatever you take at home", "Full supply plus a week extra, split between two bags"],
                ["Reliever inhaler", "Asthma, even if rarely used at home", "Cold dry air is a trigger"],
                ["Adrenaline auto-injector", "Known severe allergy", "Carry two; show your guide where they are"],
              ],
            },
          },
          { p: "Ask for written instructions with each prescription: what it is for, when to start it, the dose, and when to stop. A week into a trek, tired and at altitude, you will not remember what the doctor said. How to arrange all this is in [[post:pre-trek-medical-check-up-for-nepal|the pre-trek medical check-up]]." },
        ],
      },
      {
        h2: "Feet, Skin, Sun and Lips",
        blocks: [
          { p: "More treks are spoiled by feet than by altitude. This part of the kit will be used." },
          {
            ul: [
              "<strong>Tape at the first hint of rubbing.</strong> A hot spot taped in the first five minutes never becomes a blister. Zinc oxide tape sticks through sweat and several days of walking.",
              "<strong>Hydrocolloid blister plasters</strong> for blisters that have already formed. Leave them on until they fall off.",
              "<strong>A needle</strong> for draining a large, tense blister — sterilised with an antiseptic wipe.",
              "<strong>Antifungal cream or powder.</strong> Feet spend ten hours a day in damp boots.",
              "<strong>Sunscreen.</strong> Ultraviolet exposure increases markedly with altitude, and snow reflects it back up under your chin and nose. Reapply every two hours.",
              "<strong>Lip balm with SPF.</strong> Cracked, sunburnt lips are painful for a week and trigger cold sores in people prone to them.",
              "<strong>Moisturiser or petroleum jelly.</strong> For split fingertips and heels in the dry cold, and for chafing.",
            ],
          },
          { p: "The techniques are in [[post:knee-pain-blisters-and-painkillers-on-a-nepal-trek|knee pain, blisters and painkillers]]." },
          {
            figure: {
              image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-00-enroute-to-kyanjin-gompa",
              alt: "Trekking trail on the way to Kyanjin Gompa in the Langtang Valley, Nepal.",
              caption: "The upper Langtang Valley. Two days' walk from the road is far enough that what is in your day pack is what you have.",
            },
          },
        ],
      },
      {
        h2: "Adjusting the Kit by Route and Season",
        blocks: [
          {
            table: {
              head: ["Route or season", "Add", "Why"],
              rows: [
                ["Low hill treks — Poon Hill, Mardi Himal", "Nothing; you can drop altitude medication", "Low altitude, close to roads"],
                ["High teahouse treks — Everest, Annapurna Circuit, Manaslu", "Altitude medication if prescribed; extra lozenges; more sunscreen", "Dry air, strong sun, sustained altitude"],
                ["Remote and camping treks — Dolpo, Kanchenjunga, Makalu", "Larger quantities of everything; a second antibiotic course if your doctor advises; a spare of every prescription", "Many days from any pharmacy or airstrip"],
                ["Monsoon, June to September", "Insect repellent; salt or repellent for leeches; extra antifungal; extra plasters", "Leeches, wet feet, slow-healing skin"],
                ["Winter, December to February", "Chemical hand warmers; thick moisturiser; extra lip balm", "Cold injury, split skin"],
                ["Trekking peaks", "As advised by your climbing leader", "Higher, colder and longer above 5,000 m"],
                ["Adding Chitwan, Bardia or Lumbini", "Insect repellent; antimalarials if prescribed", "Mosquito-borne disease in the lowlands"],
              ],
            },
          },
          { p: "For the rest of your gear by altitude band, see the [[post:nepal-trekking-packing-list|Nepal trekking packing list]]. Seasonal specifics are in [[post:monsoon-trekking-in-nepal-where-to-go|monsoon trekking]] and [[post:winter-trekking-in-nepal-best-routes|winter trekking]]." },
        ],
      },
      {
        h2: "Packing It Properly",
        blocks: [
          {
            ul: [
              "<strong>Keep tablets in their original blister strips,</strong> with the name and strength visible. Loose pills in a bag are unidentifiable in an emergency and questionable at customs.",
              "<strong>Use a waterproof zip bag or small dry bag.</strong>",
              "<strong>Write a dosing card</strong> — one line per medicine: what for, how much, how often — and keep it in the bag.",
              "<strong>Day pack, not porter bag.</strong> The kit is useless an hour up the trail.",
              "<strong>Split prescription medicines</strong> between your day pack and main bag, or between you and your trekking partner.",
              "<strong>Protect liquids and inhalers from freezing.</strong> Above 4,000 m, keep them inside your sleeping bag at night and in an inner pocket by day.",
              "<strong>Check expiry dates</strong> before you leave home.",
              "<strong>Show your guide</strong> where the kit is and what is in it on day one.",
            ],
          },
        ],
      },
      {
        h2: "What Not to Bring",
        blocks: [
          {
            ul: [
              "<strong>Sleeping tablets and sedatives</strong> — they suppress breathing at night at altitude.",
              "<strong>Strong opioid painkillers and codeine-based cough medicine</strong> — the same problem.",
              "<strong>Several different antibiotics</strong> taken on a just-in-case basis without instructions.",
              "<strong>Emergency altitude drugs you have not been trained to use.</strong> Dexamethasone and nifedipine belong with guides and medics.",
              "<strong>Other people's prescriptions.</strong>",
              "<strong>Suture kits, scalpels and syringes</strong> unless you are medically trained.",
              "<strong>A kilogram of supplies you will carry for two weeks and never open.</strong>",
            ],
          },
          { p: "If you forget something, most of the core kit can be bought in Kathmandu or Pokhara before the trek — see [[post:buying-medicine-in-kathmandu-and-pokhara|buying medicine in Kathmandu and Pokhara]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support around every trek, and the medical kit is one of the most practical parts of it." },
          {
            ul: [
              "<strong>A kit list for your route and season,</strong> sent when you book, so you pack what you need and no more.",
              "<strong>A kit check at the pre-trek briefing</strong> in Kathmandu or Pokhara. Your guide goes through what you have brought and what each item is for.",
              "<strong>Help filling gaps</strong> at a reputable pharmacy before you leave the city.",
              "<strong>A group medical kit carried by your guide,</strong> with a pulse oximeter and emergency medication on high-altitude routes and oxygen on high passes and climbing trips.",
              "<strong>Guides trained in first aid,</strong> who deal with blisters, sprains and stomach upsets every week of the season.",
              "<strong>After the trek:</strong> a check-in, wound and blister care if needed, and a clinic visit arranged for anything that has not settled.",
            ],
          },
          { p: "<a href=\"/contact\">Contact us</a> for the kit list for your route. We do not supply prescription medicines — those come from your own doctor — but we make sure nothing obvious is missing before you start walking." },
        ],
      },
    ],
    faqs: [
      { question: "What should be in a trekking first aid kit for Nepal?", answer: "Paracetamol, ibuprofen, oral rehydration salts, loperamide, an antihistamine, throat lozenges, blister plasters, zinc oxide tape, plasters, antiseptic, antifungal cream, sunscreen, SPF lip balm, hand sanitiser and water purification tablets, plus any prescription medicines." },
      { question: "How heavy should my medical kit be?", answer: "About 300 to 400 g for a two-week teahouse trek. If it weighs much more, you are carrying things your guide already has or that you are unlikely to use." },
      { question: "Should I carry my medical kit or give it to the porter?", answer: "Carry it yourself, in your day pack. Your porter may be well ahead of or behind you during the day, and you will want painkillers, rehydration salts and blister tape within reach." },
      { question: "Do I need antibiotics for a Nepal trek?", answer: "Many travel clinics prescribe a stand-by antibiotic for moderate or severe diarrhoea, with written instructions. It is a prescription decision for your doctor. Do not use antibiotics for colds or mild upsets." },
      { question: "Does my guide carry a first aid kit?", answer: "Yes. Our guides carry a group medical kit, and on high-altitude routes a pulse oximeter and emergency medication, with oxygen on high passes and climbing trips. Your personal kit covers everyday problems and your own prescriptions." },
      { question: "Can I buy first aid supplies in Kathmandu?", answer: "Yes. Pharmacies in Thamel and in Pokhara's Lakeside sell most of the core kit at low prices. Bring prescription medicines and good blister plasters from home, as quality and availability of those vary." },
      { question: "What is the best painkiller for trekking?", answer: "Paracetamol is the first choice for headache and fever at altitude. Ibuprofen is better for sore joints and muscles but should be taken with food and plenty of fluid. Avoid codeine and other opioids at altitude." },
      { question: "Do I need a different kit for the monsoon?", answer: "Add insect repellent, something for leeches such as salt, extra antifungal cream and extra plasters. Skin stays damp and small wounds heal slowly in the wet season." },
      { question: "How do I stop medicines freezing at altitude?", answer: "Keep liquids, creams and inhalers in an inner jacket pocket during the day and inside your sleeping bag at night. Tablets are unaffected by cold." },
      { question: "Do you check my medical kit before the trek?", answer: "Yes. At the pre-trek briefing your guide goes through your kit, explains what the group kit covers, and helps you buy anything missing at a reputable pharmacy before departure." },
    ],
    relatedTreks: [
      "helambu-trek",
      "langtang-ganja-la-pass-trek",
      "everest-base-camp-trek",
      "langtang-valley-trek",
      "manaslu-circuit-trek",
      "upper-dolpo-trek",
    ],
    tripsNote: "From a week in Langtang to a month in Dolpo — the further from a road, the more your kit matters.",
    relatedPosts: [
      "pre-and-post-trek-medication-guide-for-nepal",
      "nepal-trekking-packing-list",
      "buying-medicine-in-kathmandu-and-pokhara",
      "knee-pain-blisters-and-painkillers-on-a-nepal-trek",
    ],
    tags: ["first aid kit", "trek medication", "packing list", "trekking health", "nepal trekking"],
    meta: {
      title: "Trekking First Aid Kit for Nepal: Medicines to Carry",
      description: "The complete personal medical kit for a Nepal trek, with quantities: painkillers, stomach remedies, blister care and prescriptions, adjusted by route and season.",
      keywords: "trekking first aid kit Nepal, medical kit Everest Base Camp, medicines for trekking, trekking medicine list, Nepal trek first aid",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "stomach-illness-on-a-nepal-trek-medication-and-recovery",
    title: "Stomach Illness on a Nepal Trek: Prevention, Medication and Recovery",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/annapurna-base-camp-trek/annapurna-base-camp-trek-03-ghandruk-jhinudanda-54-modi-khola-dorf-2013-gje",
      alt: "Village above the Modi Khola between Ghandruk and Jhinu Danda on the Annapurna Base Camp trek, Nepal.",
    },
    excerpt:
      "Stomach trouble is the commonest illness on a Nepal trek — more common than altitude sickness. How to avoid it, how to tell the types apart, what to take and when, why it matters more at altitude, and how to recover afterwards.",
    intro: [
      { p: "More trekkers in Nepal lose a day to their stomach than to anything else. It is usually a nuisance rather than a danger — a rough twenty-four hours, a rest day, and back on the trail. But on a trek the stakes are higher than at home: dehydration at altitude is a real problem, a lodge toilet at 4 am in sub-zero temperatures is nobody's idea of a holiday, and a schedule with a flight at the end has little room for lost days." },
      { p: "Most of it is preventable with a few boring habits, and most of the rest is treatable with a small kit and some knowledge. This guide covers both." },
      { p: "This article is general information for trip planning, not medical advice. Antibiotics and other prescription medicines should be used as directed by the doctor who prescribed them." },
    ],
    sections: [
      {
        h2: "Why Trekkers Get Sick",
        blocks: [
          { p: "Almost all stomach illness on a trek is spread the same way: microbes from human or animal faeces reach your mouth, by water, food or hands." },
          {
            ul: [
              "<strong>Hands.</strong> The most underrated route. Door handles, banknotes, shared serving spoons, your own boots — and then a biscuit.",
              "<strong>Water.</strong> Tap and stream water throughout Nepal should be treated, however clear it looks.",
              "<strong>Food.</strong> Salads washed in untreated water, food that has sat lukewarm, and meat carried up the trail for days without refrigeration.",
              "<strong>The city.</strong> A large share of infections are picked up in Kathmandu or Pokhara in the first few days — the celebratory pre-trek dinner — and surface two or three days into the walk.",
              "<strong>Other trekkers.</strong> Viral stomach bugs pass quickly through a crowded lodge.",
            ],
          },
          { p: "Lodge kitchens on the main routes are generally careful, and freshly cooked dal bhat is among the safest meals you can eat anywhere. See [[post:food-on-the-trail-in-nepal|food on the trail]] and [[post:teahouse-trekking-in-nepal-explained|teahouse trekking explained]]." },
        ],
      },
      {
        h2: "Prevention That Works",
        blocks: [
          {
            ol: [
              "<strong>Clean your hands before every meal and snack.</strong> Soap and water where there is any; sanitiser otherwise. This single habit prevents more illness than everything else on the list.",
              "<strong>Drink only treated water.</strong> Boiled, filtered, or treated with tablets or ultraviolet light. Brush your teeth with it too. See [[post:drinking-water-while-trekking-in-nepal|drinking water while trekking]].",
              "<strong>Eat food that is cooked to order and served hot.</strong> Dal bhat, fried rice, noodle soup, boiled potatoes.",
              "<strong>Go vegetarian above the road head.</strong> Meat is carried up unrefrigerated, sometimes for days. Animals are not slaughtered in many high Buddhist valleys.",
              "<strong>Skip salads and unpeeled fruit</strong> on the trail. Peel it yourself or leave it.",
              "<strong>Be careful in the city.</strong> Eat at busy places, avoid buffets that have been sitting, and go easy the night before the trek.",
              "<strong>Use your own water bottle,</strong> and do not share bottles, cutlery or snacks from the bag with sticky fingers.",
              "<strong>Keep fingernails short.</strong>",
            ],
          },
        ],
      },
      {
        h2: "What Kind of Illness Is It?",
        blocks: [
          { p: "You do not need a laboratory to make a reasonable guess. Onset and pattern tell you most of what you need." },
          {
            table: {
              head: ["Type", "Onset", "Typical pattern", "Usual approach"],
              rows: [
                ["Bacterial diarrhoea — the commonest", "Sudden; hours", "Frequent watery stools, cramps, urgency, sometimes fever and nausea", "Fluids. A stand-by antibiotic if moderate or severe"],
                ["Viral gastroenteritis", "Sudden", "Vomiting is prominent; watery diarrhoea; over in one to three days", "Fluids and rest. Antibiotics do nothing"],
                ["Food poisoning from toxins", "Very fast; two to six hours after a meal", "Violent vomiting, then diarrhoea; over within a day", "Fluids and rest"],
                ["Giardia", "Gradual; one to three weeks after exposure", "Bloating, sulphur-smelling burps and wind, loose greasy stools, tiredness; comes and goes", "A specific anti-parasitic medicine"],
                ["Dysentery", "Sudden or gradual", "Blood or mucus in the stool, fever, pain", "Needs medical assessment and antibiotics; do not take loperamide"],
                ["Cyclospora", "About a week after exposure; mainly May to October", "Prolonged watery diarrhoea, marked fatigue, loss of appetite, lasting weeks if untreated", "A specific antibiotic; ordinary stand-by antibiotics do not work"],
              ],
            },
          },
          { p: "The useful distinction is between <strong>sudden and watery</strong>, which is usually bacterial or viral and treated with fluids and perhaps a stand-by antibiotic, and <strong>slow, gassy and persistent</strong>, which suggests a parasite and needs a different drug." },
        ],
      },
      {
        h2: "Treatment, Step by Step",
        blocks: [
          {
            ol: [
              "<strong>Rehydrate first, always.</strong> Mix oral rehydration salts with treated water and sip continuously — a glass after every loose stool, more if you are vomiting. Take small sips if you are nauseous. This matters more than any tablet.",
              "<strong>Tell your guide.</strong> They will adjust the day and keep an eye on you.",
              "<strong>Rest.</strong> A day in the lodge now often saves three later.",
              "<strong>Eat when you can.</strong> Plain rice, soup, boiled potatoes, toast, dal. There is no need to starve; avoid fried and spicy food and dairy for a day or two.",
              "<strong>Loperamide for travel days only.</strong> It slows the gut and buys a few hours' control for a walk or a bus ride. It treats the symptom, not the cause. Do not use it if you have a fever or blood in the stool.",
              "<strong>The stand-by antibiotic, if you have one.</strong> For moderate or severe illness — many stools a day, fever, or unable to function — take it as your doctor instructed. Azithromycin is the usual choice for South Asia because resistance to older antibiotics is widespread. Most people improve within a day.",
              "<strong>Anti-sickness medication</strong> if vomiting is stopping you keeping fluids down.",
              "<strong>Suspect a parasite</strong> if it began gradually, with bloating and sulphurous burps, or if it drags on past a week. That needs a different medicine and, ideally, a stool test in Kathmandu or Pokhara.",
            ],
          },
          { p: "If you run out of rehydration sachets, a workable substitute is six level teaspoons of sugar and half a level teaspoon of salt dissolved in one litre of treated water. Nepali pharmacies and many trail shops sell rehydration salts under the name Jeevan Jal." },
          {
            figure: {
              image: "mardi-treks/khopra-danda-trek/khopra-danda-trek-05-ghandruk-terrace-farming",
              alt: "Terraced fields at Ghandruk in the Annapurna foothills, Nepal.",
              caption: "Ghandruk, in the Annapurna foothills. Villages at this height have shops that stock rehydration salts — higher up, you rely on what you carry.",
            },
          },
        ],
      },
      {
        h2: "Why It Matters More at Altitude",
        blocks: [
          {
            ul: [
              "<strong>You are already short of fluid.</strong> Fast breathing in dry air loses a surprising amount of water. Diarrhoea on top of that dehydrates you quickly.",
              "<strong>Dehydration feels like altitude sickness.</strong> Headache, nausea, fatigue and dizziness belong to both, and it becomes hard to know which you have.",
              "<strong>Nausea and vomiting are also symptoms of altitude sickness</strong> — so do not assume it is only your stomach.",
              "<strong>A depleted body acclimatises poorly</strong> and feels the cold more.",
              "<strong>Medicines stack up.</strong> Acetazolamide is a diuretic; anti-inflammatory painkillers are hard on dehydrated kidneys.",
            ],
          },
          { quote: "The rule: do not gain sleeping altitude while you have active diarrhoea or vomiting. Hold where you are, rehydrate, and go up when you are drinking and eating normally." },
          { p: "If headache and nausea persist once you are rehydrated, treat it as altitude sickness — see our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]]." },
        ],
      },
      {
        h2: "When to Descend or Get Medical Help",
        blocks: [
          {
            ul: [
              "<strong>Blood or mucus in the stool.</strong>",
              "<strong>A temperature above 38.5°C,</strong> or shaking chills.",
              "<strong>Unable to keep fluids down for more than twelve hours.</strong>",
              "<strong>Signs of dehydration:</strong> very little dark urine, dizziness on standing, a dry mouth, confusion.",
              "<strong>Severe or localised abdominal pain,</strong> especially low on the right side.",
              "<strong>No improvement within 48 hours of starting an antibiotic.</strong>",
              "<strong>Symptoms lasting more than a week.</strong>",
              "<strong>Any stomach illness in a child, an older trekker, a diabetic or someone with a serious medical condition</strong> — act sooner.",
            ],
          },
          { p: "Any of these means going down, and usually out, to a clinic. From most main routes that means a walk to a road or airstrip, or a helicopter if you cannot walk — which is what insurance is for. See [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking in Nepal]]." },
        ],
      },
      {
        h2: "Recovery After the Trek",
        blocks: [
          {
            ul: [
              "<strong>Appetite and energy</strong> take a few days to return. Eat plainly and often.",
              "<strong>Milk may disagree with you</strong> for a week or two. A gut infection can temporarily reduce your ability to digest lactose; it comes back.",
              "<strong>Finish any antibiotic course</strong> as prescribed.",
              "<strong>Probiotics</strong> are harmless and may help a little; the evidence is modest.",
              "<strong>Loose stools for more than two weeks</strong> after you get home need a stool test. Giardia and cyclospora are both common in travellers returning from Nepal, both are easily treated, and neither goes away reliably on its own.",
              "<strong>Bloating and irregular bowels</strong> can linger for weeks after a bad infection, even when tests are clear. It usually settles; see your doctor if it does not.",
              "<strong>Tell your doctor where you have been.</strong> It changes which tests they order.",
            ],
          },
          { p: "More on the weeks afterwards is in [[post:illness-after-a-nepal-trek-symptoms-not-to-ignore|illness after a Nepal trek]] and [[post:post-trek-recovery-what-your-body-needs|post-trek recovery]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek, and stomach illness is the problem our guides manage most often." },
          {
            ul: [
              "<strong>Before the trek:</strong> a briefing on food, water and hand hygiene, advice on where to eat in Kathmandu and Pokhara, and a check that you are carrying rehydration salts and any stand-by medication your doctor prescribed.",
              "<strong>On the trek:</strong> lodges chosen for clean kitchens, safe drinking water arranged each day, and guides who carry rehydration salts and know when a rest day is the right call.",
              "<strong>Flexible itineraries,</strong> with a spare day where possible so an upset stomach does not cost you the trek.",
              "<strong>If it is serious:</strong> descent, evacuation through your insurer, and admission to a clinic in Kathmandu or Pokhara.",
              "<strong>After the trek:</strong> a clinic appointment and stool test arranged before you fly, if symptoms have not cleared — far easier in Nepal, where the laboratories see these infections daily, than at home.",
            ],
          },
          { p: "We do not prescribe or supply antibiotics; bring any stand-by treatment from your own doctor. For anything else, <a href=\"/contact\">ask us</a>." },
        ],
      },
    ],
    faqs: [
      { question: "How common is stomach illness on a Nepal trek?", answer: "Very. It is the most frequent illness among trekkers, more common than altitude sickness. Most cases are mild and settle within a day or two with fluids and rest." },
      { question: "How do I avoid getting sick?", answer: "Clean your hands before every meal, drink only treated water, eat freshly cooked hot food, avoid salads and meat above the road head, and be careful about what you eat in Kathmandu and Pokhara before the trek." },
      { question: "Should I take antibiotics for diarrhoea on a trek?", answer: "Only for moderate or severe illness — many stools a day, fever, or being unable to function — and only as your doctor instructed. Mild diarrhoea needs fluids and rest. Antibiotics do nothing for viral stomach bugs." },
      { question: "Is it safe to take loperamide?", answer: "Yes, for short-term control on a travel day, as long as you have no fever and no blood in the stool. It slows the gut but does not treat the infection, so keep rehydrating." },
      { question: "What are the symptoms of giardia?", answer: "Gradual onset one to three weeks after exposure, with bloating, sulphur-smelling burps and wind, loose greasy stools and tiredness that come and go. It needs a specific anti-parasitic medicine rather than the usual stand-by antibiotic." },
      { question: "Can I keep trekking with diarrhoea?", answer: "With mild symptoms and no fever, a short easy day is possible if you are drinking well. Do not gain sleeping altitude while you have active diarrhoea or vomiting — rest, rehydrate, and continue when you are eating and drinking normally." },
      { question: "How do I make oral rehydration solution?", answer: "Use a sachet mixed with the stated amount of treated water. If you have none, dissolve six level teaspoons of sugar and half a level teaspoon of salt in one litre of treated water. In Nepal, sachets are sold as Jeevan Jal." },
      { question: "Is the meat safe to eat on a trek?", answer: "In the lower villages near roads, generally yes. Higher up, meat is carried in unrefrigerated, sometimes for several days, and is best avoided. Vegetarian dal bhat is safer and more sustaining." },
      { question: "When should I see a doctor?", answer: "If there is blood in the stool, a temperature above 38.5°C, you cannot keep fluids down for twelve hours, you have signs of dehydration or severe abdominal pain, or symptoms last more than a week." },
      { question: "What if I still have diarrhoea after getting home?", answer: "If it lasts more than two weeks, ask your doctor for a stool test and tell them you have been in Nepal. Giardia and cyclospora are common, easy to treat, and unlikely to clear on their own." },
      { question: "Do your guides help if I get sick?", answer: "Yes. Guides carry rehydration salts, adjust the day or add a rest day, watch for dehydration and altitude symptoms, and arrange descent or evacuation if needed. After the trek we can arrange a clinic visit before you fly." },
    ],
    relatedTreks: [
      "annapurna-base-camp-with-ghorepani-poonhill-from-pokhara",
      "abc-trek-nepal",
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "poonhill-trek",
      "langtang-valley-trek",
    ],
    tripsNote: "Popular teahouse routes, where food and water habits make the difference between a good trek and a lost day.",
    relatedPosts: [
      "drinking-water-while-trekking-in-nepal",
      "food-on-the-trail-in-nepal",
      "trekking-first-aid-kit-for-nepal",
      "illness-after-a-nepal-trek-symptoms-not-to-ignore",
    ],
    tags: ["travellers diarrhoea", "trekking health", "trek medication", "food and water safety", "nepal trekking"],
    meta: {
      title: "Stomach Illness on a Nepal Trek: Prevention and Treatment",
      description: "How to prevent and treat stomach illness on a Nepal trek: hygiene habits, telling the types apart, rehydration, stand-by medication, and recovery afterwards.",
      keywords: "travellers diarrhoea Nepal, stomach illness trekking, giardia Nepal, oral rehydration trekking, food poisoning Nepal trek",
    },
  },
];
