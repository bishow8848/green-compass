import type { BlogContent } from "./build";

export const healthC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-with-a-medical-condition",
    title: "Trekking in Nepal with Asthma, Diabetes or High Blood Pressure",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-00-landscape-view-of-poon-hill",
      alt: "Panorama of the Annapurna and Dhaulagiri ranges from Poon Hill, Nepal.",
    },
    excerpt:
      "A long-term condition rarely rules out a Nepal trek, but it changes the planning. How asthma, diabetes, high blood pressure and other conditions behave at altitude, how to manage your medication on the trail, and how to choose the right route.",
    intro: [
      { p: "People with asthma have stood on Kala Patthar. People with type 1 diabetes have crossed Thorong La. A long-term medical condition does not disqualify you from trekking in Nepal — but it does mean the trip needs to be planned around the condition, rather than the condition being squeezed around the trip." },
      { p: "The Himalaya adds four things that your usual management was not designed for: low oxygen, cold, sustained exertion, and distance from medical help. Each condition responds to those differently. This guide covers the common ones, the logistics of carrying medication for weeks, and how to choose a route that keeps the margins wide." },
      { p: "This article is general information for trip planning, not medical advice. Everyone with a long-term condition should have a consultation with their own doctor or specialist before booking, and should not change medication on the basis of anything written here." },
    ],
    sections: [
      {
        h2: "The General Rules",
        blocks: [
          {
            ol: [
              "<strong>Stable and well controlled.</strong> The trek is not the time to find out whether a new treatment works. Your condition should have been steady for several months.",
              "<strong>Specialist sign-off.</strong> Take your itinerary — sleeping altitudes, days from a road, evacuation by helicopter — to the doctor who manages your condition. See [[post:pre-trek-medical-check-up-for-nepal|the pre-trek medical check-up]].",
              "<strong>Tell your trek operator and your guide.</strong> In full, at booking. A guide who knows can act in the first minute; one who has to guess cannot.",
              "<strong>Carry double.</strong> Twice the medication you need, split between your day pack and main bag.",
              "<strong>Never in the porter bag alone.</strong> Your day's supply, and anything for an emergency, stays on you.",
              "<strong>A written plan.</strong> What to do if the condition flares, at what point to descend, and who to call.",
              "<strong>Declare it to your insurer.</strong> An undeclared condition can void the policy exactly when you need the helicopter.",
              "<strong>Choose the route to fit.</strong> A lower maximum altitude and a nearby road buy a great deal of safety.",
            ],
          },
        ],
      },
      {
        h2: "Asthma",
        blocks: [
          { p: "Asthma is the condition trekkers worry about most and, when it is well controlled, one of the least troublesome. High mountain air contains fewer of the common triggers — house dust mite and many pollens are scarce up there — and many people with asthma find they breathe as well as or better than at home." },
          {
            ul: [
              "<strong>The triggers that remain:</strong> cold, dry air; hard exertion; wood and dung smoke in lodge kitchens and dining rooms; dust on jeep roads; and colds caught from other trekkers.",
              "<strong>Carry your reliever inhaler in an inner pocket,</strong> where body heat keeps it working. Pressurised inhalers deliver less when very cold.",
              "<strong>Keep taking your preventer</strong> every day as prescribed. Do not skip it because you feel well.",
              "<strong>Bring spares</strong> of both, in separate bags, and a spacer if you use one.",
              "<strong>Cover your mouth and nose with a buff</strong> in cold wind and on dusty roads. It warms and moistens the air.",
              "<strong>Ask your doctor for a written action plan</strong> and a course of steroid tablets to carry for a flare, with clear instructions.",
              "<strong>Use a pre-exercise dose</strong> of reliever before cold early starts if exertion is a trigger for you.",
            ],
          },
          { p: "Breathlessness at altitude is normal for everyone, which makes it harder to judge your asthma. A peak flow meter is light and gives you a number. Wheeze that is not relieved by your inhaler, or breathlessness at rest, means stop and tell your guide — it could be asthma, a chest infection or altitude illness, and all three need attention. See [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|Khumbu cough and chest infections]]." },
          { p: "People with severe or poorly controlled asthma, or frequent hospital admissions, should take specialist advice before considering high altitude at all." },
        ],
      },
      {
        h2: "Diabetes",
        blocks: [
          { p: "People with both type 1 and type 2 diabetes trek successfully in Nepal. It takes more preparation than any other common condition, because several things change at once." },
          {
            ul: [
              "<strong>Energy use rises sharply.</strong> Six hours of walking a day lowers blood sugar and increases insulin sensitivity, often for many hours afterwards. Most people need less insulin or medication than at home, and night-time lows are a particular risk.",
              "<strong>Meters can misread</strong> in cold and at altitude. Keep the meter and strips warm, in an inner pocket, and bring a spare meter. Treat symptoms, not just numbers.",
              "<strong>Insulin must not freeze.</strong> Frozen insulin is ruined. Carry it against your body by day and inside your sleeping bag at night, in an insulated pouch. It must not overheat on the drive in either.",
              "<strong>Symptoms overlap.</strong> Low blood sugar, altitude sickness and plain exhaustion all cause headache, confusion and unsteadiness. Test first; if in doubt, treat as a low and reassess.",
              "<strong>Illness disrupts control.</strong> Vomiting or diarrhoea can quickly become serious. Carry ketone testing strips if you use insulin and have a sick-day plan from your diabetes team.",
              "<strong>Altitude medicines interact.</strong> Acetazolamide alters blood chemistry, and dexamethasone raises blood sugar steeply. Both need discussing in advance.",
              "<strong>Meals are carbohydrate-heavy and timed by the trail,</strong> not by you. Dal bhat, noodles and potatoes are the staples. Carry your own fast-acting sugar and slow snacks every day.",
              "<strong>Feet need daily inspection.</strong> Blisters heal slowly and infect easily. Check every evening.",
            ],
          },
          { p: "Tell your guide and your walking companions how to recognise a low and what to give you. Carry a glucagon kit if you have one, and show your guide where it is. A first trek to moderate altitude — [[trek:poonhill-trek|Poon Hill]] or [[trek:mardi-himal-trek|Mardi Himal]] — is a sensible way to learn how your body responds before attempting a higher route." },
        ],
      },
      {
        h2: "High Blood Pressure and Heart Conditions",
        blocks: [
          { h3: "High blood pressure" },
          { p: "Well-controlled blood pressure is not a barrier to trekking. Blood pressure commonly rises in the first days at altitude and then settles somewhat with acclimatisation, though the response varies a good deal between individuals." },
          {
            ul: [
              "<strong>Keep taking your medication</strong> throughout. Do not stop it for the trek.",
              "<strong>Ask your doctor about your particular drugs.</strong> Diuretics add to fluid loss; beta-blockers limit the rise in heart rate that exercise at altitude calls for and can reduce cold tolerance. A doctor may adjust treatment well before you travel.",
              "<strong>A small wrist or arm monitor</strong> is worth carrying if your pressure is hard to control. Agree in advance what readings should prompt action.",
              "<strong>Go easy on salt and avoid alcohol.</strong>",
              "<strong>Severe headache, visual disturbance, chest pain or a nosebleed that will not stop</strong> — tell your guide at once.",
            ],
          },
          { h3: "Heart conditions" },
          { p: "Altitude makes the heart work harder: the resting heart rate rises, and the pressure in the lung circulation increases. For people with stable, well-treated heart disease and good exercise capacity at home, moderate altitude is often acceptable. For others it is not. This is a decision for a cardiologist, with an exercise test, not for a trekking company or a website." },
          {
            ul: [
              "Recent heart attack, unstable angina, poorly controlled heart failure or significant rhythm problems are generally reasons not to go high.",
              "Anyone cleared to trek should choose a route with a modest maximum altitude and quick evacuation.",
              "Carry a recent ECG and a summary letter.",
              "Chest pain on exertion on the trail means stop, rest, and descend.",
            ],
          },
        ],
      },
      {
        h2: "Other Conditions at a Glance",
        blocks: [
          {
            table: {
              head: ["Condition", "The issue at altitude", "Planning note"],
              rows: [
                ["Epilepsy", "Sleep loss and exertion can lower the seizure threshold; a seizure on an exposed trail is dangerous", "Should be seizure-free and stable. Tell your guide what to do. Check interactions with acetazolamide"],
                ["Thyroid disease", "Affects cold tolerance and energy", "Continue medication; have levels checked before travel"],
                ["Blood thinners (anticoagulants)", "Bleeding from a fall; no monitoring available on the trail", "Discuss with your doctor. Avoid anti-inflammatory painkillers"],
                ["Combined contraceptive pill", "A small theoretical increase in clot risk with altitude and dehydration", "Discuss with your doctor; most continue. Time zones and stomach illness affect reliability"],
                ["Pregnancy", "Limited evidence on altitude; far from obstetric care", "Most guidance advises against sleeping at high altitude. Choose low walks instead"],
                ["Migraine", "Altitude can trigger attacks, and they are hard to tell from altitude sickness", "Bring your usual treatment. A migraine that is not typical for you should be treated as altitude illness"],
                ["Mental health conditions", "Isolation, poor sleep and stress; some medicines interact with altitude", "Continue medication. Tell your guide. Avoid sedatives at altitude"],
                ["Sleep apnoea", "Breathing disturbance worsens; electricity for a machine is unreliable in lodges", "Specialist advice. A battery or solar solution is needed"],
                ["Chronic lung disease", "Lower oxygen reserve", "Specialist assessment; low routes only for most"],
                ["Anaemia", "Reduced oxygen-carrying capacity", "Treat before you go"],
                ["Sickle cell disease", "Low oxygen can trigger a crisis", "High altitude is generally advised against"],
                ["Severe allergy", "Unfamiliar food; no emergency department", "Carry two adrenaline auto-injectors; brief your guide; tell lodge kitchens"],
              ],
            },
          },
        ],
      },
      {
        h2: "Choosing the Right Route",
        blocks: [
          { p: "Route choice is the most powerful safety decision you make. Three questions matter: how high do you sleep, how far are you from a road, and how quickly can you lose height?" },
          {
            table: {
              head: ["Route", "Highest point", "Access", "Suits"],
              rows: [
                ["Kathmandu Valley rim, [[trek:dhulikhel-namobuddha-hike|Namo Buddha]]", "Under 2,200 m", "Roads throughout", "Almost any stable condition"],
                ["[[trek:poonhill-trek|Poon Hill]]", "3,210 m", "Jeep tracks within a day", "A first trek with a condition"],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "About 4,500 m at the viewpoint; sleeping at 3,580 m", "Road within a day or two", "Good control and some experience"],
                ["[[trek:everest-view-trek|Everest View]]", "About 3,880 m at the viewpoint; sleeping at 3,440 m", "Lukla airstrip; helicopter", "Khumbu scenery at moderate height"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "About 3,870 m sleeping", "Road at the trailhead; helicopter", "A moderate-altitude valley trek"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "4,130 m", "Two to three days from a road; helicopter", "Well-controlled conditions, with medical approval"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "5,545 m", "Flight and helicopter only", "Specialist approval and prior altitude experience"],
              ],
            },
          },
          { p: "Remote camping routes — Dolpo, Kanchenjunga, Makalu — are many days from help and are a poor choice for anyone whose condition could need urgent care. The grading system is explained in [[post:nepal-trek-difficulty-grades-explained|trek difficulty grades]]." },
          {
            figure: {
              image: "mardi-treks/poonhill-trek/poonhill-trek-06-banthanti-tadapani-ghorepaani-1",
              alt: "Forest trail between Banthanti, Tadapani and Ghorepani in the Annapurna foothills, Nepal.",
              caption: "The Ghorepani trails — moderate altitude, villages every hour or two, and a jeep track never more than a day away.",
            },
          },
        ],
      },
      {
        h2: "Medication Logistics",
        blocks: [
          {
            ul: [
              "<strong>Quantity:</strong> the full trip plus at least a week, doubled if losing it would be serious.",
              "<strong>Packaging:</strong> original boxes or blister strips with the pharmacy label.",
              "<strong>Documents:</strong> a doctor's letter listing each medicine by generic name and dose, and copies of prescriptions. Essential for anything that is a controlled drug — strong painkillers, some sedatives, stimulant medication — and for syringes and needles.",
              "<strong>Hand luggage on every flight.</strong> Hold bags are delayed often enough on mountain flights to matter.",
              "<strong>Temperature:</strong> protect insulin and other temperature-sensitive medicines from both freezing and heat.",
              "<strong>Time zones:</strong> ask your doctor or pharmacist how to shift the timing of doses.",
              "<strong>Replacement in Nepal:</strong> many common medicines are available in Kathmandu and Pokhara under different brand names; specialised ones may not be. Know the generic name. See [[post:buying-medicine-in-kathmandu-and-pokhara|buying medicine in Kathmandu and Pokhara]].",
              "<strong>Power:</strong> lodges charge devices for a fee, from solar, and not reliably. Bring a power bank for anything medical.",
            ],
          },
        ],
      },
      {
        h2: "Insurance and Disclosure",
        blocks: [
          { p: "Declare your condition to the insurer in writing and keep their confirmation. Policies routinely exclude undeclared pre-existing conditions, and a helicopter evacuation from the Khumbu costs several thousand dollars. Check that the policy covers trekking to the maximum altitude of your route. Our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]] explains what to look for." },
          { p: "And declare it to us. Trekkers sometimes hide a condition for fear of being turned away. We would far rather know and plan for it — it is very rare that the answer is no, and common that the answer is a better route." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek, and for guests with a medical condition it shapes the whole plan. We are not medical professionals and we do not decide whether you are fit to trek — your doctor does — but we build the trip around what they say." },
          {
            ul: [
              "<strong>Before you book:</strong> an honest conversation about which routes fit, and an altitude and access profile to take to your specialist.",
              "<strong>A private trek at your pace,</strong> with extra acclimatisation days, shorter stages and a spare day in hand.",
              "<strong>A briefed guide</strong> who knows your condition, your medication, your warning signs and your written plan, and who carries a first aid kit and, on high routes, a pulse oximeter.",
              "<strong>Practical help on the trail:</strong> keeping medication from freezing, charging medical devices, arranging suitable meals with lodge kitchens.",
              "<strong>A clear evacuation plan,</strong> coordinated with your insurer.",
              "<strong>Before and after:</strong> help reaching a clinic or pharmacy in Kathmandu or Pokhara, and a check-in before you fly home.",
            ],
          },
          { p: "<a href=\"/contact\">Tell us</a> about your condition in confidence when you enquire. The earlier we know, the better the trek we can plan." },
        ],
      },
    ],
    faqs: [
      { question: "Can I trek in Nepal with asthma?", answer: "Usually yes, if it is well controlled. Mountain air has fewer common allergens, though cold air, exertion and lodge smoke can be triggers. Carry your reliever in an inner pocket, keep taking your preventer, bring spares, and get a written action plan from your doctor." },
      { question: "Can people with diabetes trek to Everest Base Camp?", answer: "People with both type 1 and type 2 diabetes have done so. It requires stable control, specialist advice, careful protection of insulin and meters from cold, frequent testing, and a guide who knows how to respond to a low. A lower first trek is a sensible trial." },
      { question: "Does altitude raise blood pressure?", answer: "Often, yes, particularly in the first days, and it tends to settle with acclimatisation. People with well-controlled high blood pressure can usually trek. Continue your medication and ask your doctor whether any of your drugs need adjusting for altitude." },
      { question: "Should I tell my trekking company about my condition?", answer: "Yes, fully and at booking. It lets us recommend a suitable route, brief your guide and prepare an evacuation plan. It is very rare that a declared condition means we cannot take you; it usually means a better-planned trek." },
      { question: "How should I carry insulin on a trek?", answer: "In an insulated pouch against your body during the day and inside your sleeping bag at night, so it never freezes. Carry double the amount you need, split between two bags, with a spare meter and strips kept warm." },
      { question: "Will my inhaler work in the cold?", answer: "Pressurised inhalers deliver less medication when very cold. Keep yours in an inner pocket close to your body and it will work normally. Bring a spare and store it the same way." },
      { question: "Can I bring my prescription medicines into Nepal?", answer: "Yes, for personal use. Keep them in original packaging and carry a doctor's letter and copies of prescriptions, especially for controlled drugs such as strong painkillers, sedatives and stimulant medication, and for syringes." },
      { question: "Which trek is best if I have a heart condition?", answer: "That depends on your cardiologist's advice. Those cleared to trek are usually best on lower routes with road access, such as the Kathmandu Valley rim or Poon Hill. Recent or unstable heart disease is generally a reason not to go to high altitude." },
      { question: "Is it safe to trek while pregnant?", answer: "Take specialist advice. Most guidance advises against sleeping at high altitude in pregnancy, and trekking routes are far from obstetric care. Low-altitude walks near Pokhara and Kathmandu are a better choice." },
      { question: "Will my travel insurance cover a pre-existing condition?", answer: "Only if you declare it and the insurer accepts it, sometimes for an extra premium. Get confirmation in writing, and check that helicopter evacuation is covered to the maximum altitude of your trek." },
      { question: "Do you arrange treks for people with medical conditions?", answer: "Yes. We advise on suitable routes, provide an altitude profile for your specialist, arrange private treks at a gentler pace, brief your guide on your condition and plan, and prepare evacuation arrangements with your insurer." },
    ],
    relatedTreks: [
      "poonhill-trek-from-pokhara",
      "dhulikhel-namobuddha-hike",
      "mardi-himal-trek-from-pokhara",
      "everest-view-trek",
      "langtang-valley-trek",
      "poonhill-trek",
    ],
    tripsNote: "Lower routes with quick access to a road or airstrip — where we usually start when a medical condition calls for wide margins.",
    relatedPosts: [
      "pre-trek-medical-check-up-for-nepal",
      "pre-and-post-trek-medication-guide-for-nepal",
      "travel-insurance-for-trekking-in-nepal",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["medical conditions", "asthma", "diabetes", "trekking health", "trek medication"],
    meta: {
      title: "Trekking in Nepal with Asthma, Diabetes or Hypertension",
      description: "How asthma, diabetes, high blood pressure and other conditions behave at altitude, how to manage medication on a Nepal trek, and which routes suit you.",
      keywords: "trekking with asthma, trekking with diabetes Nepal, high blood pressure altitude, medical conditions trekking, insulin at altitude",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "khumbu-cough-colds-and-chest-infections-on-a-trek",
    title: "Khumbu Cough, Colds and Chest Infections on a Nepal Trek",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/gokyo-lake-trek/gokyo-lake-trek-00-machhermo-peaks-gokyo-lake-nepal-himalayas",
      alt: "Peaks above Machhermo on the Gokyo Lakes trek in the Khumbu, Nepal.",
    },
    excerpt:
      "By day ten on a high trek, half the dining room is coughing. What the Khumbu cough is, how to tell it from a cold, a chest infection or something dangerous, how to prevent it, what to take, and when a cough means you must stop climbing.",
    intro: [
      { p: "There is a sound that belongs to high lodges in Nepal: a dry, hacking cough from behind a plywood wall at two in the morning. It is so common in the Everest region that it carries the valley's name. The Khumbu cough is not an infection, it is not usually serious, and nearly everyone who spends a week above 4,000 m gets some version of it." },
      { p: "The difficulty is that several different things cause a cough at altitude, and one of them — fluid in the lungs — is an emergency. Knowing which you have, and what to do about each, is one of the more useful pieces of trail knowledge." },
      { p: "This article is general information for trip planning, not medical advice. Any breathing difficulty at altitude should be reported to your guide immediately." },
    ],
    sections: [
      {
        h2: "What the Khumbu Cough Is",
        blocks: [
          { p: "At altitude you breathe far more air than at sea level — faster and deeper, around the clock, and largely through your mouth on climbs. That air is very cold and extremely dry. Your nose normally warms and humidifies each breath; mouth-breathing bypasses it. Over days, the lining of the throat and airways dries out, becomes inflamed, and responds the only way it can." },
          {
            ul: [
              "<strong>Dry and persistent.</strong> Little or no phlegm.",
              "<strong>Worse at night and after exertion,</strong> and in smoky rooms.",
              "<strong>Starts above about 3,500 m,</strong> usually after several days high, and worsens with altitude and time.",
              "<strong>No fever, and you otherwise feel well.</strong>",
              "<strong>Can be violent.</strong> On long expeditions, climbers have been known to strain chest muscles and even crack ribs coughing.",
              "<strong>Lingers.</strong> It often continues for one to three weeks after you descend.",
            ],
          },
          { p: "It is commonest on the high, dry routes: [[trek:everest-base-camp-trek|Everest Base Camp]], [[trek:gokyo-lake-trek|Gokyo]], the [[trek:everest-three-pass-trek|Three Passes]], the upper [[trek:annapurna-circuit-trek|Annapurna Circuit]] and [[trek:manaslu-circuit-trek|Manaslu]]. On lower, more humid treks it is much less of a problem." },
        ],
      },
      {
        h2: "Cough, Cold, Chest Infection or HAPE?",
        blocks: [
          {
            table: {
              head: ["Feature", "Khumbu cough", "Common cold", "Chest infection", "HAPE (fluid in the lungs)"],
              rows: [
                ["Cough", "Dry, hacking", "Mild, with a runny nose", "Wet, with coloured phlegm", "Dry at first, then wet; may bring up frothy or pink sputum"],
                ["Fever", "No", "Slight or none", "Often", "Sometimes mild"],
                ["Breathlessness", "Only on effort, as for everyone", "No", "Somewhat, on effort", "At rest, and worsening"],
                ["Energy", "Normal", "A bit low", "Low", "Marked drop — suddenly slowest in the group"],
                ["Lying flat", "Cough worse", "Blocked nose", "Uncomfortable", "Breathing clearly worse; may need to sit up"],
                ["Chest sounds", "Clear", "Clear", "May rattle", "Crackling or gurgling"],
                ["Lips and nails", "Normal", "Normal", "Normal", "May be bluish"],
                ["Action", "Protect the airway; carry on", "Rest, fluids; carry on gently", "Stop ascending; consider descent and treatment", "Descend immediately. Oxygen. Emergency"],
              ],
            },
          },
          { p: "The two features that separate HAPE from everything else are <strong>breathlessness at rest</strong> and a <strong>sudden loss of performance</strong>. A trekker who was keeping up yesterday and today has to stop every twenty steps, and who is still breathing hard ten minutes after sitting down, needs to go down now — whatever their cough sounds like. HAPE most often appears on the second or third night at a new altitude. See [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness in Nepal]]." },
          { p: "A pulse oximeter helps: a reading well below the rest of the group at the same altitude, especially one that is falling, supports the suspicion. Our guides carry one on high routes for exactly this reason." },
        ],
      },
      {
        h2: "Prevention",
        blocks: [
          { p: "You cannot change the air. You can change how much of it reaches your throat raw." },
          {
            ol: [
              "<strong>Wear a buff or thin neck gaiter over your mouth and nose</strong> whenever you are walking above about 3,500 m, and in bed on cold nights. It traps moisture and warmth from each out-breath and returns it on the next. This is the single most effective measure.",
              "<strong>Breathe through your nose</strong> when the gradient allows.",
              "<strong>Slow down.</strong> A pace that lets you nose-breathe protects your airway and helps acclimatisation.",
              "<strong>Drink three to four litres a day,</strong> much of it warm.",
              "<strong>Suck lozenges or boiled sweets</strong> while walking to keep the throat moist.",
              "<strong>Stay out of smoky rooms.</strong> Sit away from the stove when it is being lit, and choose the dining room over the kitchen.",
              "<strong>Cover up on dusty roads.</strong> Jeep traffic on the lower Annapurna Circuit and around Jomsom throws up fine dust.",
              "<strong>Clean your hands,</strong> and keep your distance from the heavily congested. Colds spread fast in a shared dining room.",
              "<strong>Do not smoke.</strong>",
            ],
          },
          {
            figure: {
              image: "mardi-treks/gokyo-lake-trek/gokyo-lake-trek-02-gokyo-lake-the-paradise",
              alt: "The turquoise third lake at Gokyo in the Khumbu, Nepal, at about 4,790 m.",
              caption: "Gokyo, at nearly 4,800 m. Air this cold and dry, breathed hard for days, is what produces the Khumbu cough.",
            },
          },
        ],
      },
      {
        h2: "Treatment on the Trail",
        blocks: [
          {
            table: {
              head: ["Problem", "What helps", "Avoid"],
              rows: [
                ["Dry Khumbu cough", "Buff over the mouth; lozenges; warm drinks with honey, ginger and lemon; steam", "Codeine-based cough suppressants at altitude"],
                ["Sore throat", "Lozenges; warm salt-water gargle; paracetamol", "Shouting over the wind"],
                ["Blocked nose and sinuses", "Saline nasal spray; steam inhalation over a bowl of hot water; a short course of decongestant", "Decongestant sprays for more than a few days"],
                ["Common cold", "Rest, fluids, paracetamol, an easier day", "Antibiotics — they do nothing for a virus"],
                ["Cough keeping you awake", "Raise your head; buff over the mouth; a warm drink before bed", "Sleeping tablets"],
              ],
            },
          },
          { p: "<strong>Steam</strong> is the best simple treatment for both cough and sinuses: ask the lodge for a bowl of hot water, put a towel or jacket over your head, and breathe the steam for ten minutes. <strong>Honey, ginger and lemon tea</strong> is on every lodge menu and is soothing." },
          { h3: "When are antibiotics appropriate?" },
          { p: "Rarely, and not for the Khumbu cough or a cold. A bacterial chest or sinus infection is more likely if you have a fever, are coughing thick coloured phlegm and feel properly unwell, or if a cold improved and then turned worse again after several days. If your doctor gave you a stand-by antibiotic, use it only as they instructed. Starting one does not make it safe to continue upward — a chest infection at altitude is a reason to hold or descend." },
        ],
      },
      {
        h2: "Sinuses, Ears and Flights",
        blocks: [
          { p: "A blocked nose is more than an annoyance on a trek that begins or ends with a mountain flight. Small unpressurised aircraft climb and descend quickly, and congested sinuses and ears cannot equalise." },
          {
            ul: [
              "If you are congested before a flight, use a decongestant about half an hour beforehand, if it is safe for you to take one.",
              "Swallow, yawn, or pinch your nose and blow gently during the descent.",
              "Saline spray morning and evening keeps things clear in dry air.",
              "Severe ear or face pain that persists after landing needs medical attention.",
            ],
          },
          { p: "Decongestants are not suitable for everyone — people with high blood pressure or heart conditions should check first. Flight practicalities are in our [[post:lukla-flight-guide|Lukla flight guide]]." },
        ],
      },
      {
        h2: "When a Cough Means Stop",
        blocks: [
          {
            ul: [
              "<strong>Breathlessness at rest,</strong> or that does not ease after ten minutes of sitting.",
              "<strong>A sudden drop in your pace</strong> compared with yesterday or with the group.",
              "<strong>A wet, bubbling cough,</strong> or frothy, pink or blood-stained sputum.",
              "<strong>Crackling or gurgling in the chest.</strong>",
              "<strong>Needing to sit upright to breathe at night.</strong>",
              "<strong>Blue lips or fingernails.</strong>",
              "<strong>Fever above 38.5°C</strong> with a productive cough.",
              "<strong>Chest pain on breathing in.</strong>",
              "<strong>A falling oxygen saturation reading.</strong>",
            ],
          },
          { p: "Any of the first six means immediate descent, with oxygen if available — at night if necessary. Do not wait for morning to see how it looks. The others mean no further ascent and a decision with your guide about going down. Evacuation is covered by a suitable policy; see [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking]]." },
        ],
      },
      {
        h2: "After the Trek",
        blocks: [
          { p: "The Khumbu cough does not vanish at the airport. The airway lining takes time to repair, and a dry cough commonly persists for one to three weeks after descent. Warm humid air, plenty of fluids and patience are the treatment." },
          {
            ul: [
              "<strong>See a doctor</strong> if the cough lasts more than three weeks.",
              "<strong>See a doctor sooner</strong> for fever, coloured or blood-stained phlegm, breathlessness, chest pain or night sweats.",
              "<strong>Mention where you have been</strong> and how high.",
              "<strong>A sore chest wall</strong> from coughing is common and settles; sharp localised pain may be a strained muscle or a cracked rib.",
            ],
          },
          { p: "More on the weeks afterwards is in [[post:post-trek-recovery-what-your-body-needs|post-trek recovery]] and [[post:illness-after-a-nepal-trek-symptoms-not-to-ignore|illness after a Nepal trek]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek. For coughs and chest problems — which touch nearly every high-altitude group — that means the following." },
          {
            ul: [
              "<strong>Before the trek:</strong> a briefing that covers the Khumbu cough, how to prevent it, and the warning signs of HAPE, so you know the difference before you are up there.",
              "<strong>A kit check,</strong> making sure you have a buff, lozenges and the basics, and help buying anything missing in Kathmandu or Pokhara.",
              "<strong>On the trek:</strong> a pace that protects your airways, guides who carry a pulse oximeter and take readings twice a day above 4,000 m, and emergency oxygen on high passes and climbing trips.",
              "<strong>Decisions made early.</strong> Our guides are trained to recognise HAPE and will turn a trekker round rather than wait and see.",
              "<strong>Evacuation</strong> coordinated with your insurer when it is needed.",
              "<strong>After the trek:</strong> a clinic appointment arranged in Kathmandu or Pokhara if a cough has not eased or anything else concerns you before you fly.",
            ],
          },
          { p: "Questions about a particular route or your own health history? <a href=\"/contact\">Get in touch</a> and we will answer within 24 hours." },
        ],
      },
    ],
    faqs: [
      { question: "What is the Khumbu cough?", answer: "A dry, persistent cough caused by breathing large volumes of cold, dry air at high altitude, which dries and irritates the airway lining. It is not an infection. It is named after the Khumbu region around Everest, where it is especially common." },
      { question: "How do I prevent the Khumbu cough?", answer: "Wear a buff or neck gaiter over your mouth and nose while walking and on cold nights, breathe through your nose when you can, walk slowly, drink plenty of warm fluids, suck lozenges and stay out of smoky rooms." },
      { question: "How do I tell the Khumbu cough from HAPE?", answer: "The Khumbu cough is dry and you otherwise feel well. HAPE brings breathlessness at rest, a sudden loss of energy and pace, and later a wet cough with frothy or pink sputum and crackling in the chest. If in doubt, treat it as HAPE and descend." },
      { question: "Should I take antibiotics for a cough at altitude?", answer: "Not for the Khumbu cough or a cold — they have no effect. A bacterial chest infection, suggested by fever and thick coloured phlegm with feeling unwell, may need them. Use a stand-by antibiotic only as your doctor instructed." },
      { question: "Can I take cough medicine at altitude?", answer: "Lozenges, honey and warm drinks are safe. Avoid cough suppressants containing codeine or similar drugs at altitude, because they can suppress breathing during sleep." },
      { question: "How long does the Khumbu cough last?", answer: "Usually one to three weeks after you descend, as the airway lining heals. See a doctor if it lasts more than three weeks or comes with fever, breathlessness or coloured phlegm." },
      { question: "Does a face mask help?", answer: "A buff or thin fabric gaiter is more practical than a medical mask for walking, because it is easier to breathe through. On dusty jeep roads a mask or buff both help keep dust out." },
      { question: "Is it safe to keep trekking with a cold?", answer: "With a mild cold and no fever, yes, at an easier pace. Do not ascend if you have a fever, a productive cough with feeling unwell, or any breathlessness at rest." },
      { question: "Why is my cough worse at night?", answer: "Cold night air, lying flat, mouth-breathing in your sleep and a dry room all aggravate it. Raise your head, wear a buff over your mouth and have a warm drink before bed." },
      { question: "Do your guides check for chest problems?", answer: "Yes. On high-altitude routes our guides take oxygen saturation readings twice a day above 4,000 m and are trained to recognise HAPE. They carry emergency oxygen on high passes and climbing trips and will arrange descent promptly." },
    ],
    relatedTreks: [
      "everest-base-camp-trek-with-gokyo-lakes-and-cho-la-pass",
      "gokyo-lake-trek",
      "everest-base-camp-trek",
      "manaslu-circuit-trek",
      "everest-three-pass-trek",
    ],
    tripsNote: "High, dry routes where the Khumbu cough is most common — and where guides monitor oxygen levels daily.",
    relatedPosts: [
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "trekking-first-aid-kit-for-nepal",
      "pre-and-post-trek-medication-guide-for-nepal",
      "post-trek-recovery-what-your-body-needs",
    ],
    tags: ["khumbu cough", "HAPE", "trekking health", "altitude sickness", "everest region"],
    meta: {
      title: "Khumbu Cough, Colds and Chest Infections on a Nepal Trek",
      description: "What the Khumbu cough is, how to tell it from a cold, chest infection or HAPE, how to prevent and treat it on the trail, and when a cough means descend.",
      keywords: "Khumbu cough, cough at high altitude, HAPE symptoms, chest infection trekking, Everest Base Camp cough",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "knee-pain-blisters-and-painkillers-on-a-nepal-trek",
    title: "Knee Pain, Blisters and Painkillers on a Nepal Trek",
    cluster: "health",
    date: "2026-10-03",
    hero: {
      image: "mardi-treks/poonhill-trek/poonhill-trek-05-ghorepaani-ghandruk-trail-2",
      alt: "Stone-stepped trail between Ghorepani and Ghandruk in the Annapurna region, Nepal.",
    },
    excerpt:
      "Knees and feet end more treks than altitude does. How to protect your knees on Nepal's long descents, which painkillers are sensible at altitude and which are not, how to prevent and treat blisters properly, and when pain means stop.",
    intro: [
      { p: "Ask a trekking guide what actually slows groups down and the answer is rarely the dramatic stuff. It is a blister the size of a coin on day three. It is a knee that swells on the two-thousand-metre descent after the pass. Small mechanical problems, almost all of them preventable, cause more misery on Nepal's trails than altitude does." },
      { p: "Nepal's trails are harder on joints than most. They are steep, and a great deal of the lower walking is on stone staircases — thousands of irregular steps at a time. This guide covers the three things you can do about it: protect, treat, and medicate sensibly." },
      { p: "This article is general information for trip planning, not medical advice. Check with a doctor or pharmacist that any painkiller is suitable for you, particularly if you have stomach, kidney, heart or asthma problems or take other medication." },
    ],
    sections: [
      {
        h2: "The Descent Problem",
        blocks: [
          { p: "Going uphill is hard on the lungs. Going downhill is hard on the body. On a descent your thigh muscles work while lengthening, acting as brakes on every step, and the force through each knee is several times your body weight. That is why your legs ache more the day after a long descent than after a long climb, and why knees so often give trouble in the second half of a trek." },
          {
            table: {
              head: ["Descent", "Trek", "Approximate drop"],
              rows: [
                ["Thorong La to Muktinath", "[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "About 1,600 m in one day"],
                ["Larke La to Bimthang", "[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "About 1,400 m in one day"],
                ["Ghorepani to the valley by the Ulleri staircase", "[[trek:poonhill-trek|Poon Hill]]", "More than 3,000 stone steps"],
                ["High Camp to Siding", "[[trek:mardi-himal-trek|Mardi Himal]]", "About 1,800 m, steep, in forest"],
                ["Annapurna Base Camp to Bamboo", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "About 1,800 m in one day"],
                ["Namche Bazaar to Lukla", "[[trek:everest-base-camp-trek|Everest Base Camp]]", "A long final day with tired legs"],
              ],
            },
          },
          { p: "These days come late in the trek, when you are tired and inclined to rush for the hot shower. That combination is when knees are injured." },
        ],
      },
      {
        h2: "Protecting Your Knees",
        blocks: [
          { h3: "Before the trek" },
          {
            ul: [
              "<strong>Strengthen the thighs and hips.</strong> Squats, lunges and step-downs — lowering yourself slowly off a step — build exactly the braking strength descents demand. See [[post:how-to-train-for-a-nepal-trek|how to train for a Nepal trek]].",
              "<strong>Train on real downhills,</strong> with a pack. Stair machines do not prepare you for going down.",
              "<strong>Lose the spare kilos</strong> from your pack rather than your body: every kilogram on your back is multiplied at the knee.",
              "<strong>Sort out existing knee problems</strong> with a physiotherapist months ahead, not weeks.",
            ],
          },
          { h3: "On the trail" },
          {
            ul: [
              "<strong>Use two trekking poles.</strong> Lengthen them for descents and plant them ahead of you. They take a meaningful share of the load off your knees and save falls.",
              "<strong>Short steps, soft knees.</strong> Never lock the knee straight on landing. Small, quick steps are kinder than long lunging ones.",
              "<strong>Zigzag</strong> down steep slopes and wide staircases instead of stepping straight down.",
              "<strong>Carry a light day pack</strong> — 5 to 7 kg — and let a porter carry the rest.",
              "<strong>Go slowly downhill.</strong> This is where to lose time, not make it up.",
              "<strong>Take breaks</strong> every 45 minutes on a long descent.",
              "<strong>A knee support or tape</strong> helps some people with a known weakness. Try it at home first.",
              "<strong>Stretch each evening</strong> — quads, calves, hips. A routine is in [[post:yoga-for-trekkers-before-and-after-the-trail|yoga for trekkers]].",
            ],
          },
        ],
      },
      {
        h2: "Painkillers: What to Use and When",
        blocks: [
          {
            table: {
              head: ["Medicine", "Good for", "Cautions"],
              rows: [
                ["Paracetamol (acetaminophen)", "Headache, fever, general aches. The first choice at altitude", "Stay within the daily maximum on the packet. Check combination cold remedies, which often contain it too"],
                ["Ibuprofen", "Sore joints and muscles, swelling, altitude headache", "Take with food and plenty of fluid. Hard on the stomach and on dehydrated kidneys. Not for people with stomach ulcers or kidney disease; caution with asthma, heart disease and blood thinners"],
                ["Anti-inflammatory gel", "A sore knee, ankle or tendon", "Works locally with far less reaching the stomach and kidneys. A good first step"],
                ["Codeine, tramadol and other opioids", "—", "Avoid at altitude. They suppress breathing, especially in sleep, and cause constipation and nausea"],
                ["Aspirin", "—", "Not recommended as a general trek painkiller; it increases bleeding and irritates the stomach"],
              ],
            },
          },
          {
            ul: [
              "<strong>Do not take anti-inflammatories as a daily preventive.</strong> Masking pain so you can pound down a descent turns a sore knee into an injured one, and days of ibuprofen on a dehydrated body is a recognised cause of kidney trouble in endurance events.",
              "<strong>Drink.</strong> If your urine is dark, sort that out before you reach for ibuprofen.",
              "<strong>A headache at altitude</strong> can be treated with paracetamol or ibuprofen — and must also be reported. If it does not clear, it is altitude sickness until proved otherwise. See our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]].",
              "<strong>Pain that needs tablets for more than three or four days</strong> needs a diagnosis, not more tablets.",
            ],
          },
          { p: "The rest of what to carry is in the [[post:trekking-first-aid-kit-for-nepal|trekking first aid kit]]." },
        ],
      },
      {
        h2: "Blisters: Prevention",
        blocks: [
          { p: "A blister is a friction burn. It needs three things: rubbing, moisture and heat. Remove any one and it does not form." },
          {
            ol: [
              "<strong>Boots that fit and are worn in.</strong> At least 50 km of walking, including hills, in the socks you will wear. New boots on a trek are the commonest cause of ruined feet.",
              "<strong>Room for your toes.</strong> Feet swell over a long day and at altitude. You should be able to wiggle your toes, and they should not touch the front on a descent.",
              "<strong>Good socks.</strong> Wool or synthetic, never cotton. Many trekkers wear a thin liner sock under a thicker one so the layers rub against each other rather than against skin.",
              "<strong>Dry feet.</strong> Air them at lunch. Change into dry socks if they are soaked.",
              "<strong>Tape known trouble spots</strong> before you start each morning — heels, little toes, the ball of the foot.",
              "<strong>Stop at the first hot spot.</strong> The moment you feel rubbing, stop and tape it. Not at the next rest. Now. This one habit prevents most blisters.",
              "<strong>Lace properly.</strong> Snug over the instep to stop your foot sliding forward on descents; re-tie before every long downhill.",
              "<strong>Trim your toenails</strong> short and straight a few days before the trek.",
              "<strong>Shake out grit.</strong> A single grain of sand does the damage.",
            ],
          },
          {
            figure: {
              image: "mardi-treks/poonhill-trek/poonhill-trek-04-ghorepaani-ghandruk-trail-1",
              alt: "Forest trail with stone steps between Ghorepani and Ghandruk, Annapurna region, Nepal.",
              caption: "Stone steps in the Annapurna foothills. Re-lace your boots and lengthen your poles before a descent like this — it takes one minute and saves your toes and knees.",
            },
          },
        ],
      },
      {
        h2: "Blisters: Treatment",
        blocks: [
          {
            ol: [
              "<strong>Small and intact:</strong> leave the skin on. Cover with a hydrocolloid blister plaster and leave it in place until it comes off by itself, which may be several days.",
              "<strong>Large, tense and painful:</strong> drain it. Clean the skin and a needle with an antiseptic wipe, pierce the edge at two points near the base, and press the fluid out gently. Leave the roof of skin on as a natural dressing.",
              "<strong>Dress it:</strong> antiseptic, then a blister plaster or a non-stick dressing held with tape. Cut a ring of padding to take pressure off if it is on a weight-bearing spot.",
              "<strong>Burst or torn:</strong> clean with treated water and antiseptic, smooth the skin flap back down if it is clean, and dress it.",
              "<strong>Check it every evening.</strong> Let it air overnight where possible and re-dress before walking.",
              "<strong>Watch for infection:</strong> spreading redness, increasing pain, warmth, pus, red streaks up the leg or fever. That needs antibiotics and a doctor.",
            ],
          },
          { p: "People with diabetes or poor circulation should treat any foot wound seriously and seek advice early — see [[post:trekking-in-nepal-with-a-medical-condition|trekking with a medical condition]]." },
        ],
      },
      {
        h2: "Other Common Niggles",
        blocks: [
          {
            table: {
              head: ["Problem", "Cause", "Fix"],
              rows: [
                ["Black or bruised toenails", "Toes hitting the front of the boot on descents", "Trim nails; lace tightly over the instep; boots half a size up"],
                ["Sprained ankle", "A misstep on loose rock, usually when tired", "Rest, compression bandage, raise it, cold water. Tape and poles to walk out. Cannot bear weight: evacuate"],
                ["Sore shins", "Long descents; overstriding", "Shorter steps; rest; anti-inflammatory gel"],
                ["Lower back ache", "Badly adjusted or heavy pack", "Load on the hip belt, not the shoulders; lighten it; stretch"],
                ["Muscle cramp", "Fatigue, fluid and salt loss", "Stretch, drink, add rehydration salts"],
                ["Chafing", "Sweat and friction in skin folds", "Petroleum jelly or anti-chafe balm; synthetic underwear"],
                ["Split fingertips and heels", "Cold, dry air", "Thick moisturiser at night; tape over deep cracks"],
                ["Sunburn and cracked lips", "Strong ultraviolet light at altitude and off snow", "SPF 50 and SPF lip balm, reapplied every two hours"],
                ["Swollen hands and feet", "Altitude and long days on your feet", "Usually harmless; raise your legs in the evening. Report swelling of the face"],
              ],
            },
          },
        ],
      },
      {
        h2: "When Pain Means Stop",
        blocks: [
          {
            ul: [
              "<strong>A joint that locks, gives way or cannot take your weight.</strong>",
              "<strong>Rapid swelling</strong> of a knee or ankle after a twist or fall.",
              "<strong>A swollen, tender, warm calf,</strong> particularly in one leg — possibly a blood clot. This is urgent.",
              "<strong>An infected blister or wound</strong> with spreading redness, red streaks or fever.",
              "<strong>Numb, white or waxy toes or fingers</strong> in the cold — warm them at once; this is early cold injury.",
              "<strong>Pain that wakes you at night</strong> or gets worse each day despite rest.",
              "<strong>Any injury after a fall</strong> involving the head, neck or back.",
            ],
          },
          { p: "On many routes a pony or mule can be hired to carry an injured walker down to a road. Where that is not possible or the injury is serious, evacuation is by helicopter, which is why your policy must cover it — see [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking in Nepal]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek. Feet and knees are where it makes the most everyday difference." },
          {
            ul: [
              "<strong>Before the trek:</strong> a training plan and kit list when you book, and a boot and kit check at the pre-trek briefing — including help hiring or buying trekking poles in Kathmandu or Pokhara.",
              "<strong>Porters,</strong> so you carry only a light day pack.",
              "<strong>Sensible stages.</strong> We split the big descents where the lodges allow it, and can add a day if your knees need one.",
              "<strong>On the trek:</strong> guides who carry a first aid kit, tape hot spots before they blister, strap ankles, and set a downhill pace that protects joints.",
              "<strong>If you cannot walk:</strong> a horse or helicopter arranged, with your insurer.",
              "<strong>After the trek:</strong> recovery days in Pokhara or Kathmandu with massage, restorative yoga and a clinic or physiotherapy appointment if something has not settled.",
            ],
          },
          { p: "If you have a history of knee or ankle trouble, <a href=\"/contact\">tell us</a> when you enquire. We will suggest routes with gentler descents and build in the time to walk them slowly." },
        ],
      },
    ],
    faqs: [
      { question: "How do I protect my knees on a Nepal trek?", answer: "Use two trekking poles, take short steps with soft knees, zigzag on steep ground, carry a light day pack, and descend slowly with regular breaks. Strengthening your thighs and hips in the months before the trek makes the biggest difference." },
      { question: "Do trekking poles really help?", answer: "Yes. Used properly on descents, two poles take a meaningful share of the load off the knees, improve balance on rough ground and reduce falls. Lengthen them for downhill sections." },
      { question: "Which painkiller is best at altitude?", answer: "Paracetamol is the first choice for headache and fever. Ibuprofen is better for joint and muscle pain but should be taken with food and plenty of fluid. Avoid codeine and other opioids at altitude because they suppress breathing." },
      { question: "Can I take ibuprofen every day on a trek?", answer: "It is not advisable as a routine. Daily anti-inflammatories on a dehydrated body strain the kidneys and stomach, and masking pain can turn a sore joint into an injury. Use them for a few days when needed, with food and fluids." },
      { question: "Should I pop a blister?", answer: "Leave small intact blisters alone under a blister plaster. Drain large, tense, painful ones with a clean needle at the edge, keeping the roof of skin in place, then apply antiseptic and a dressing." },
      { question: "How do I prevent blisters?", answer: "Wear boots that are fully worn in, use wool or synthetic socks, keep your feet dry, tape known trouble spots, and stop to tape a hot spot the moment you feel it. Trim toenails before the trek." },
      { question: "Why do my toenails turn black after trekking?", answer: "Repeated impact of the toes against the front of the boot on descents causes bleeding under the nail. Trim nails short, lace boots firmly over the instep before downhill sections, and make sure there is room in the toe box." },
      { question: "Which treks are easiest on the knees?", answer: "Routes with gradual gradients and no very long single-day descents, such as Langtang Valley, the Everest View trek and the lower Annapurna foothills at a relaxed pace. We can also split long descents over two days on most routes." },
      { question: "What happens if I injure my knee and cannot walk?", answer: "Your guide will assess it, strap it and arrange the way out: a pony or mule where the trail allows, or a helicopter through your insurer where it does not. This is why insurance covering helicopter evacuation is essential." },
      { question: "Should I wear a knee brace?", answer: "A simple support or tape helps some people with a known weakness and gives confidence on descents. Try it on training walks first, and do not rely on it in place of strength training and poles." },
      { question: "Do your guides help with blisters and injuries?", answer: "Yes. Our guides carry a first aid kit and deal with blisters, sprains and sore knees routinely — taping, strapping, adjusting the pace and arranging a horse or evacuation if needed." },
    ],
    relatedTreks: [
      "poonhill-trek",
      "annapurna-base-camp-trek-with-ghorepani-poonhill-trek",
      "annapurna-circuit-trek",
      "annapurna-base-camp-trek",
      "manaslu-circuit-trek",
      "mardi-himal-trek",
    ],
    tripsNote: "Routes with famous descents — each walked at a pace, and split into stages, that your knees can live with.",
    relatedPosts: [
      "trekking-first-aid-kit-for-nepal",
      "how-to-train-for-a-nepal-trek",
      "yoga-for-trekkers-before-and-after-the-trail",
      "post-trek-recovery-what-your-body-needs",
    ],
    tags: ["knee pain", "blisters", "painkillers", "trekking health", "trek training"],
    meta: {
      title: "Knee Pain, Blisters and Painkillers on a Nepal Trek",
      description: "How to protect your knees on Nepal's long descents, which painkillers are sensible at altitude, how to prevent and treat blisters, and when pain means stop.",
      keywords: "knee pain trekking, blisters trekking, painkillers at altitude, ibuprofen altitude, trekking poles knees",
    },
  },
];
