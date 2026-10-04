import type { BlogContent } from "./build";

export const healthD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "post-trek-recovery-what-your-body-needs",
    title: "Post-Trek Recovery: What Your Body Needs in the First Two Weeks",
    cluster: "health",
    date: "2028-02-06",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-06-pokhara-phewa-lake-2-nepal",
      alt: "Boats on Phewa Lake in Pokhara, Nepal, where many trekkers recover after a trek.",
    },
    excerpt:
      "You come down from a trek lighter, short of sleep, a little dehydrated and with an immune system that has taken a knock. What two weeks on the trail does to your body, the first 48 hours, medication to finish or stop, the flight home, and when you can train again.",
    intro: [
      { p: "People plan the trek in detail and the days after it not at all. The usual pattern is a celebratory dinner, a late night, an early flight, and back to work on Monday wondering why they feel terrible. Then a cold arrives." },
      { p: "A long trek at altitude is a sustained physical stress. You have burned more than you ate for two weeks, slept badly, breathed dry air, and asked your legs for six hours a day. Recovery is not just rest — it is deliberately replacing what was used. Done well, it takes about two weeks. Done badly, it can take a month." },
      { p: "This article is general information, not medical advice. Symptoms that worry you after a trek should be assessed by a doctor." },
    ],
    sections: [
      {
        h2: "What Two Weeks on the Trail Does to Your Body",
        blocks: [
          {
            table: {
              head: ["System", "What has happened", "How long to recover"],
              rows: [
                ["Weight", "Most trekkers lose 2 to 5 kg on a high trek: appetite falls at altitude while energy use rises. Some of it is muscle", "Two to four weeks, with enough protein"],
                ["Muscles", "Microscopic damage, especially in thighs and calves from descents", "Soreness peaks one to three days after the last descent; a week or so to settle"],
                ["Joints and tendons", "Knees, ankles and Achilles tendons are irritated and often slightly swollen", "One to three weeks"],
                ["Fluids", "Mild chronic dehydration from fast breathing in dry air", "Two to three days"],
                ["Sleep", "Broken sleep above 3,500 m adds up to a real deficit", "Several nights of long sleep"],
                ["Airways", "Dried and irritated; often a lingering cough", "One to three weeks"],
                ["Immune system", "Dipped by prolonged exertion and poor sleep", "One to two weeks — which is when post-trek colds strike"],
                ["Skin and lips", "Sunburn, wind chap, split fingertips", "A week or two"],
                ["Blood", "Extra red blood cells made at altitude", "Returns to normal over a few weeks"],
              ],
            },
          },
          { p: "None of this is harmful. It is simply a debt, and the next fortnight is when you repay it." },
        ],
      },
      {
        h2: "The First 48 Hours",
        blocks: [
          {
            ol: [
              "<strong>Drink.</strong> Water, soup, tea, and a sachet or two of rehydration salts. Aim for pale urine by the end of the first day.",
              "<strong>Eat properly, and eat protein.</strong> Your appetite returns with a vengeance at low altitude. Eggs, chicken, fish, dal, curd — protein at every meal to rebuild muscle, plus all the carbohydrate you want.",
              "<strong>Sleep without an alarm.</strong> Nine or ten hours on the first two nights is normal. Vivid dreams are common.",
              "<strong>Move gently.</strong> A slow walk by the lake, an easy swim. Light movement clears stiffness faster than lying still.",
              "<strong>Shower, then look after your skin.</strong> Clean any blisters and cuts, moisturise, treat sunburnt lips.",
              "<strong>Inspect your feet.</strong> Now is when you find the blister or bruised nail you ignored.",
              "<strong>Raise your legs</strong> for twenty minutes if your ankles are swollen.",
              "<strong>Go easy on alcohol.</strong> One celebratory beer, not six. You are dehydrated, underweight and short of sleep, and it will hit far harder than usual.",
              "<strong>Do not fly long-haul tomorrow</strong> if you can avoid it.",
            ],
          },
          { p: "A massage on the first or second afternoon is well worth it, once you have rehydrated and eaten. Pokhara and Kathmandu both have plenty of options — see [[post:meditation-and-yoga-in-pokhara-after-a-trek|recovering in Pokhara]]." },
        ],
      },
      {
        h2: "Days 3 to 14",
        blocks: [
          {
            table: {
              head: ["Period", "What to expect", "What to do"],
              rows: [
                ["Days 3 to 5", "Soreness fading; a wave of deep tiredness often arrives now, once the adrenaline has gone. Mood may dip", "Rest without guilt. Gentle walking, stretching, restorative yoga. Keep eating well"],
                ["Days 5 to 7", "Energy returning. Cough and peeling skin lingering. This is the peak window for a post-trek cold", "Sleep, wash your hands, eat fruit and vegetables. Easy exercise only"],
                ["Week 2", "Most people feel normal. Knees or tendons may still grumble", "Return to normal training at about half your usual volume, building back over the week"],
                ["Weeks 3 to 4", "Weight and strength returning", "Normal activity. Anything still hurting should be looked at"],
              ],
            },
          },
          {
            ul: [
              "<strong>Swollen feet and ankles</strong> for a few days after a trek, and especially after the flight home, are common and harmless when both sides are equal. One swollen, painful calf is different — see below.",
              "<strong>Numb or tingling toes</strong> from cold or tight boots can take weeks to recover fully.",
              "<strong>Peeling skin, cracked lips and brittle nails</strong> are the price of sun and dry air.",
              "<strong>A dry cough</strong> often lasts one to three weeks. See [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|Khumbu cough]].",
              "<strong>A flat mood</strong> is extremely common. See [[post:post-trek-meditation-and-mental-recovery|post-trek meditation and the post-trek blues]].",
            ],
          },
        ],
      },
      {
        h2: "Medication After the Trek",
        blocks: [
          {
            table: {
              head: ["Medicine", "What to do"],
              rows: [
                ["Acetazolamide (Diamox)", "Stop once you have descended. No tapering needed. The tingling and frequent urination go within a day or two"],
                ["Antibiotics", "Finish the course exactly as prescribed, even if you feel well"],
                ["Antimalarials, if prescribed for the lowlands", "Continue for the full period after leaving the risk area — often one to four weeks depending on the drug. Stopping early is the main reason they fail"],
                ["Painkillers", "Taper off within a few days. Ongoing pain needs assessment, not more tablets"],
                ["Loperamide", "Not for continued use. Diarrhoea lasting beyond two weeks needs a stool test"],
                ["Your regular medicines", "Resume your normal doses and timing. If you reduced insulin or other doses for the trek, your needs will rise again as activity falls — review with your doctor"],
                ["Unused prescription medicines", "Take them home; do not hand them on. Return leftovers to a pharmacy for disposal"],
              ],
            },
          },
          { p: "If your trek was followed by a few days in [[trek:chitwan-national-park-tour-3-days|Chitwan]] or another lowland area and you were prescribed antimalarials, set a reminder. The overview of what to take and when is in the [[post:pre-and-post-trek-medication-guide-for-nepal|pre- and post-trek medication guide]]." },
        ],
      },
      {
        h2: "The Flight Home",
        blocks: [
          { p: "A long-haul flight straight after a hard trek is a recognised risk for deep vein thrombosis — a blood clot in the leg. You are dehydrated, your leg muscles are inflamed, your blood is thicker than usual from altitude, and you are about to sit still for ten hours." },
          {
            ul: [
              "<strong>Leave a day or two between the end of the trek and an international flight.</strong> It also protects you against delays on mountain flights — see [[post:domestic-flights-in-nepal-for-trekkers|domestic flights in Nepal]].",
              "<strong>Drink water</strong> through the flight; limit alcohol and coffee.",
              "<strong>Walk the aisle</strong> every hour or two and flex your ankles in your seat.",
              "<strong>Wear compression socks</strong> — sensible for anyone, and particularly if you have other risk factors.",
              "<strong>Choose an aisle seat</strong> so you actually get up.",
              "<strong>If you have had a clot before,</strong> take the contraceptive pill, or have other risk factors, ask your doctor for advice before you travel.",
            ],
          },
          { quote: "After the flight: pain, swelling, warmth or redness in one calf needs same-day medical attention. Sudden breathlessness or chest pain is an emergency." },
        ],
      },
      {
        h2: "Food, Sleep and Getting Your Weight Back",
        blocks: [
          {
            ul: [
              "<strong>Protein first.</strong> Around 20 to 30 g at each meal for the first fortnight helps rebuild the muscle you lost.",
              "<strong>Do not fear the appetite.</strong> Intense hunger for a week is your body making up a real deficit.",
              "<strong>Iron-rich foods</strong> — red meat, lentils, leafy greens — support the blood your body built at altitude and is now turning over.",
              "<strong>Fruit and vegetables.</strong> Two weeks of rice, lentils and noodles is short on fresh produce.",
              "<strong>Go carefully with rich food on day one.</strong> A stomach used to dal bhat can protest at a large steak and several beers.",
              "<strong>Sleep as much as you want</strong> for the first week. If jet lag is added on top, get morning daylight and keep to local time.",
              "<strong>Resist weighing yourself</strong> for a week — early changes are mostly fluid.",
            ],
          },
          {
            figure: {
              image: "mardi-treks/pokhara-day-tour/pokhara-day-tour-00-phewa-lake-of-pokhara-city",
              alt: "Phewa Lake and the town of Pokhara, Nepal.",
              caption: "Pokhara at 820 m: warm air, good food, a lake to walk beside. Two days here repays more of the debt than a week at a desk.",
            },
          },
        ],
      },
      {
        h2: "Getting Back to Exercise",
        blocks: [
          {
            ol: [
              "<strong>Days 1 to 4:</strong> walking, swimming, gentle stretching and restorative yoga only. See [[post:yoga-for-trekkers-before-and-after-the-trail|yoga for trekkers]].",
              "<strong>Days 5 to 7:</strong> easy cycling or a short jog if nothing hurts.",
              "<strong>Week 2:</strong> normal sessions at about half your usual volume.",
              "<strong>Week 3:</strong> back to normal.",
            ],
          },
          { p: "You will notice, in the first week at low altitude, that you can walk uphill without getting out of breath. Enjoy it — the extra red cells last a few weeks — but do not mistake it for recovered legs. Tendons and joints heal more slowly than muscles, and the commonest post-trek injury is a strained Achilles or knee from running hard too soon." },
        ],
      },
      {
        h2: "Signs That Are Not Normal Recovery",
        blocks: [
          {
            ul: [
              "<strong>Fever,</strong> at any point in the weeks after the trek.",
              "<strong>Diarrhoea</strong> lasting more than two weeks.",
              "<strong>A cough</strong> lasting more than three weeks, or with fever, coloured phlegm or breathlessness.",
              "<strong>One swollen, painful calf,</strong> or sudden breathlessness.",
              "<strong>Headache, unsteadiness or visual disturbance</strong> persisting after descent.",
              "<strong>Yellow skin or eyes, or dark urine.</strong>",
              "<strong>Exhaustion that is getting worse</strong> rather than better after a week.",
              "<strong>An animal bite or scratch</strong> during the trip that was not treated.",
            ],
          },
          { p: "Each of these is explained in [[post:illness-after-a-nepal-trek-symptoms-not-to-ignore|illness after a Nepal trek: symptoms you should not ignore]]. See a doctor, and say you have been trekking in Nepal." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek, and we treat the days after the walk as part of the trip rather than an afterthought." },
          {
            ul: [
              "<strong>Recovery days built into your itinerary</strong> in Pokhara or Kathmandu, with a quiet hotel, before any long flight.",
              "<strong>Massage, restorative yoga and guided meditation</strong> arranged for the day after you come down.",
              "<strong>A post-trek check-in</strong> with your guide: how you are feeling, blisters and wounds dressed, anything that needs a doctor identified.",
              "<strong>A clinic appointment arranged</strong> at a travel-medicine clinic in Kathmandu or Pokhara if you have a fever, a persistent stomach problem or a cough — easier and quicker than waiting until you are home.",
              "<strong>A buffer for flight delays,</strong> so the end of the trek is not a sprint to the airport.",
              "<strong>Follow-up.</strong> We are a message away after you get home if a question comes up.",
            ],
          },
          { p: "Extra recovery days can be booked with the trek or added on the trail. <a href=\"/contact\">Tell us</a> your international flight date and we will plan the end of the trip around it." },
        ],
      },
    ],
    faqs: [
      { question: "How long does it take to recover from a trek in Nepal?", answer: "Most people feel normal within one to two weeks. Muscle soreness fades in a few days, tiredness and a cough can last a week or more, and weight and full strength return over two to four weeks." },
      { question: "Is it normal to lose weight on a trek?", answer: "Yes. Losing 2 to 5 kg on a high-altitude trek is common, because appetite falls at altitude while energy use rises. Some of it is muscle, so eat plenty of protein in the weeks afterwards." },
      { question: "Why do I feel so tired a few days after finishing?", answer: "While trekking you run on routine and adrenaline. Once you stop, the accumulated sleep debt and physical fatigue surface, typically around days three to five. Rest, eat well, and it passes." },
      { question: "Why do I always catch a cold after a trek?", answer: "Prolonged exertion and poor sleep temporarily lower immune defences, and you then travel through airports and aircraft. The week after a trek is a high-risk window. Sleep, hand washing and good food help." },
      { question: "How soon can I fly home after a trek?", answer: "Leave at least a day, ideally two, before a long-haul flight. It reduces the risk of a blood clot, gives your body time to rehydrate, and protects you against delays on mountain flights." },
      { question: "Why are my feet and ankles swollen after trekking?", answer: "Mild swelling in both feet for a few days after a trek, especially after a flight, is common and harmless. Raise your legs and keep moving. Swelling, pain or warmth in one calf only needs urgent medical attention." },
      { question: "When should I stop taking Diamox?", answer: "Once you have descended from high altitude. It can be stopped without tapering, and its side effects wear off within a day or two." },
      { question: "When can I start exercising again?", answer: "Gentle walking and stretching straight away, easy exercise after about five days, half your normal training in week two, and back to normal in week three. Tendons and joints recover more slowly than muscles." },
      { question: "Should I get a massage after a trek?", answer: "Yes, once you have rehydrated and eaten. It eases tight muscles and helps circulation. Avoid deep pressure on anything swollen or acutely painful." },
      { question: "How much should I drink after a trek?", answer: "Enough to keep your urine pale — usually two to three litres a day for the first couple of days, including soup and a sachet of rehydration salts. Go lightly on alcohol." },
      { question: "Do you arrange recovery days after a trek?", answer: "Yes. We add recovery days in Pokhara or Kathmandu with a quiet hotel, massage, restorative yoga and meditation, a post-trek check-in with your guide, and a clinic appointment if you have any symptoms." },
    ],
    relatedTreks: [
      "annapurna-base-camp-trek",
      "annapurna-base-camp-trek-with-mardi-himal-trek-from-pokhara",
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "mardi-himal-trek-with-annapurna-base-camp",
    ],
    tripsNote: "Longer, higher treks that leave the biggest debt to repay — plan a recovery day or two after any of them.",
    relatedPosts: [
      "post-trek-meditation-and-mental-recovery",
      "illness-after-a-nepal-trek-symptoms-not-to-ignore",
      "meditation-and-yoga-in-pokhara-after-a-trek",
      "pre-and-post-trek-medication-guide-for-nepal",
    ],
    tags: ["post-trek recovery", "trekking health", "trek medication", "pokhara", "nepal trekking"],
    meta: {
      title: "Post-Trek Recovery: What Your Body Needs for Two Weeks",
      description: "How to recover after a Nepal trek: the first 48 hours, days 3 to 14, which medication to stop or finish, the flight home, and when to train again.",
      keywords: "post trek recovery, recovery after trekking Nepal, after Everest Base Camp trek, post trek fatigue, flying after trekking",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "illness-after-a-nepal-trek-symptoms-not-to-ignore",
    title: "Illness After a Nepal Trek: Symptoms You Should Not Ignore",
    cluster: "health",
    date: "2028-02-12",
    hero: {
      image: "mardi-treks/mera-peak-climbing/mera-peak-climbing-01-lukla-village",
      alt: "Lukla village in the Khumbu, the start and end point of Everest region treks, Nepal.",
    },
    excerpt:
      "Most post-trek tiredness is just tiredness. A few symptoms are not. Why illness can appear days or weeks after you get home, the one rule about fever, what persistent stomach and chest symptoms mean, and exactly what to tell your doctor.",
    intro: [
      { p: "Nearly everyone feels below par for a week after a trek. Sore legs, a dry cough, deep tiredness and an enormous appetite are the normal aftermath of two weeks of hard walking at altitude, and they pass." },
      { p: "Occasionally something else is going on. Several infections that travellers pick up in Nepal take days or weeks to show themselves, by which time you are home, the trek feels long ago, and neither you nor your doctor immediately connects the two. This guide is about recognising the handful of symptoms that deserve attention — and making sure the right question gets asked." },
      { p: "This article is general information, not medical advice, and it is not a tool for self-diagnosis. If you are unwell after travelling, see a doctor and tell them where you have been." },
    ],
    sections: [
      {
        h2: "Why Symptoms Can Appear After You Are Home",
        blocks: [
          { p: "Every infection has an incubation period: the gap between exposure and the first symptom. For some it is hours. For others it is weeks, occasionally months." },
          {
            table: {
              head: ["Infection", "Usual incubation", "Typical first symptoms", "How it is caught"],
              rows: [
                ["Bacterial travellers' diarrhoea", "Hours to a few days", "Sudden watery diarrhoea, cramps", "Contaminated food and water"],
                ["Dengue", "4 to 10 days", "High fever, severe headache, pain behind the eyes, aching muscles and joints, rash", "Day-biting mosquitoes; lowlands and cities, mainly monsoon to November"],
                ["Cyclospora", "About a week", "Prolonged watery diarrhoea, fatigue, appetite loss", "Contaminated food and water, mainly May to October"],
                ["Giardia", "1 to 3 weeks", "Bloating, sulphurous burps, loose greasy stools, on and off", "Contaminated water and food"],
                ["Typhoid", "1 to 3 weeks", "Steadily rising fever, headache, abdominal pain, constipation or diarrhoea", "Contaminated food and water"],
                ["Scrub typhus", "1 to 3 weeks", "Fever, headache, sometimes a small dark scab at the site of a mite bite", "Mite bites in scrub and farmland, mainly monsoon and after"],
                ["Malaria", "A week to several months", "Fever, chills, sweats, headache — often in cycles", "Mosquitoes in the southern lowlands"],
                ["Hepatitis A", "2 to 6 weeks", "Tiredness, nausea, dark urine, yellow skin and eyes", "Contaminated food and water; preventable by vaccine"],
                ["Hepatitis E", "2 to 8 weeks", "As hepatitis A", "Contaminated water; no widely available vaccine"],
                ["Rabies", "Weeks to months after a bite", "By the time symptoms appear it is too late — treatment must follow the bite", "Dog and monkey bites and scratches"],
              ],
              note: "Incubation periods are typical ranges. Most trekkers never encounter any of these.",
            },
          },
          { p: "The practical lesson: for at least three months after a trip to Nepal, any significant illness should prompt you to mention the trip." },
        ],
      },
      {
        h2: "Fever: The One Rule",
        blocks: [
          { quote: "A fever in the weeks or months after travel in South Asia needs a prompt medical assessment — the same day if it is high or you feel very unwell. Tell the doctor you have been in Nepal." },
          { p: "Most post-travel fevers turn out to be ordinary viral infections. But the serious causes — malaria, typhoid, dengue and others — are all treatable when diagnosed and can be dangerous when missed, and they cannot be told apart from flu without tests." },
          {
            ul: [
              "<strong>If your trip included the lowlands</strong> — Chitwan, Bardia, Lumbini, the Terai, or overland travel to India — say so specifically. Malaria should be tested for, and it can appear months later, even if you took tablets.",
              "<strong>If you trekked only in the mountains,</strong> malaria is very unlikely, but typhoid and other infections are not ruled out.",
              "<strong>If you were in Kathmandu or Pokhara between July and November,</strong> mention dengue.",
              "<strong>Do not wait three days to see if it settles</strong> when the fever is high, comes with a rash, severe headache, confusion, bleeding, or yellow eyes.",
              "<strong>Note the pattern:</strong> when it started, how high, whether it comes and goes.",
            ],
          },
          { p: "Which vaccines reduce these risks is covered in [[post:vaccinations-for-trekking-in-nepal|vaccinations for trekking in Nepal]]." },
        ],
      },
      {
        h2: "Stomach Symptoms That Persist",
        blocks: [
          { p: "A stomach upset that began on the trek should be clearly improving within a few days of getting home. When it is not, the cause is usually a parasite, and the fix is usually simple." },
          {
            table: {
              head: ["Pattern", "Suggests", "What to do"],
              rows: [
                ["Loose stools, bloating, foul burps and wind, coming and going for weeks", "Giardia", "Stool test; a short course of a specific medicine"],
                ["Watery diarrhoea with marked fatigue and no appetite, lasting weeks; trip was May to October", "Cyclospora", "Stool test — ask specifically, as it needs a special stain; a specific antibiotic"],
                ["Blood or mucus in the stool; fever", "Dysentery", "See a doctor promptly"],
                ["Loose stools after milk; otherwise well", "Temporary lactose intolerance after infection", "Avoid dairy for two to three weeks"],
                ["Bloating and irregular bowels for weeks; tests clear", "Post-infectious irritable bowel", "Usually settles over months; see your doctor"],
                ["Nausea, dark urine, pale stools, yellow eyes", "Hepatitis", "See a doctor the same day"],
              ],
            },
          },
          { p: "The rule of thumb: <strong>diarrhoea lasting more than two weeks needs a stool test.</strong> Tell the laboratory where you travelled. Background and trail treatment are in [[post:stomach-illness-on-a-nepal-trek-medication-and-recovery|stomach illness on a Nepal trek]]." },
        ],
      },
      {
        h2: "Cough and Breathlessness",
        blocks: [
          {
            ul: [
              "<strong>A dry cough for one to three weeks</strong> after a high trek is the tail of the Khumbu cough and is expected.",
              "<strong>A cough lasting more than three weeks</strong> should be checked.",
              "<strong>Fever with coloured phlegm and chest pain</strong> suggests a chest infection.",
              "<strong>Breathlessness that is new or worsening</strong> after you have descended is not normal. Altitude-related lung problems improve quickly with descent; breathlessness that appears or persists at low altitude needs prompt assessment.",
              "<strong>Sudden breathlessness or sharp chest pain,</strong> particularly after a long flight, is an emergency — it may be a clot in the lung.",
              "<strong>Sharp pain in one spot on the chest wall</strong> when you breathe or cough may be a strained muscle or cracked rib from weeks of coughing.",
            ],
          },
          { p: "More in [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|Khumbu cough, colds and chest infections]]." },
        ],
      },
      {
        h2: "Legs, Feet and Skin",
        blocks: [
          {
            table: {
              head: ["Symptom", "Likely cause", "Action"],
              rows: [
                ["One calf swollen, painful, warm or red", "Possible deep vein thrombosis", "Medical attention the same day"],
                ["Both ankles mildly swollen for a few days", "Fluid shifts after trekking and flying", "Raise legs, keep moving; settles by itself"],
                ["Numb or tingling toes or fingertips", "Mild cold injury or nerve compression from boots", "Usually recovers over weeks. See a doctor if skin blisters, blackens or stays numb beyond a month"],
                ["Blister or cut with spreading redness, warmth, pus or red streaks", "Skin infection", "Doctor; antibiotics"],
                ["Itchy bite marks that keep bleeding", "Leech bites, on monsoon treks", "Clean, keep covered; see a doctor if they become infected"],
                ["A small dark scab with fever", "Possible scrub typhus", "See a doctor and mention it specifically"],
                ["Itchy rash between toes or in skin folds", "Fungal infection", "Antifungal cream; keep dry"],
                ["A knee or ankle still painful after two weeks", "Tendon or ligament strain", "Physiotherapy assessment"],
                ["Black toenail", "Bruising under the nail from descents", "Harmless; the nail may fall off and regrow over months"],
              ],
            },
          },
          { p: "Any bite or scratch from a dog, monkey or other mammal during the trip that was not treated at the time still needs medical advice now. Rabies treatment after a bite is effective when given before symptoms and useless afterwards — do not let embarrassment or the passage of a couple of weeks stop you." },
        ],
      },
      {
        h2: "Altitude Symptoms That Should Be Gone",
        blocks: [
          { p: "Altitude sickness is cured by descent. Headache, nausea and breathlessness from altitude should clear within a day or two of losing height. If you were evacuated or treated for HAPE or HACE, follow-up with a doctor is sensible before you go high again." },
          {
            ul: [
              "<strong>Headache persisting for days at low altitude</strong> is not altitude sickness and needs assessment.",
              "<strong>Unsteadiness, confusion or memory problems</strong> after descent need urgent review.",
              "<strong>Blurred vision or a blind spot</strong> after a trek above 5,000 m may be a small bleed in the retina. These are common at extreme altitude and usually clear by themselves over weeks, but any change in vision should be examined by an eye specialist.",
              "<strong>Fingers and toes</strong> that went white and numb in the cold should have regained normal colour and feeling. Persisting changes need review.",
            ],
          },
          { p: "If you had significant altitude illness on this trip, tell us before you book the next one. It does not rule out another trek, but it changes the itinerary — see [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness in Nepal]]." },
        ],
      },
      {
        h2: "Mood, Sleep and Exhaustion",
        blocks: [
          { p: "A flat, restless or tearful few days after a trek is common and passes — we cover it in [[post:post-trek-meditation-and-mental-recovery|post-trek meditation and the post-trek blues]]. Tiredness for a week is normal too." },
          {
            ul: [
              "<strong>Exhaustion that is worsening</strong> after a week, especially with fever, weight loss, night sweats or stomach symptoms, may be a physical illness. See a doctor.",
              "<strong>Low mood or anxiety lasting more than two to three weeks</strong> deserves a conversation with your doctor.",
              "<strong>Intrusive memories or nightmares</strong> after a frightening event — an evacuation, an accident, a serious illness — are a recognised reaction and respond well to professional help.",
            ],
          },
        ],
      },
      {
        h2: "What to Tell Your Doctor",
        blocks: [
          { p: "Doctors at home see few travellers back from the Himalaya. Give them the facts and the diagnosis comes faster." },
          {
            ol: [
              "<strong>Where you went:</strong> Nepal, with the regions — mountains only, or also the lowlands and which ones.",
              "<strong>Exact dates</strong> of travel and of return.",
              "<strong>How high</strong> you went and for how long.",
              "<strong>When the symptoms started</strong> and how they have changed.",
              "<strong>What you ate and drank:</strong> any untreated water, salads, street food.",
              "<strong>Insect and animal contact:</strong> mosquito bites, leeches, ticks or mites, and any bite or scratch from a dog or monkey.",
              "<strong>Fresh water exposure:</strong> swimming, rafting, wading.",
              "<strong>Illness during the trip</strong> and what you took for it, including any antibiotics.",
              "<strong>Vaccines you had</strong> and any antimalarials taken, and whether you finished them.",
              "<strong>Anyone else from the trip who is ill.</strong>",
            ],
          },
          { p: "If your trek guide or operator has a record of what happened on the trail — a day you were ill, medication given, oxygen readings — ask for it. We are glad to provide this for our guests." },
          {
            figure: {
              image: "mardi-treks/kathmandu-day-tour/kathmandu-day-tour-01-kathmandu-durbar-square-basantapur",
              alt: "Kathmandu Durbar Square at Basantapur, Nepal.",
              caption: "Kathmandu. If you are unwell at the end of a trek, being seen here — where clinics deal with these infections every day — is often quicker than waiting until you are home.",
            },
          },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek. The after part matters more than most people expect." },
          {
            ul: [
              "<strong>A check-in before you leave Nepal.</strong> Your guide asks how you are, and anything that needs a doctor is picked up while you are still here.",
              "<strong>A clinic appointment arranged</strong> at a travel-medicine clinic in Kathmandu or Pokhara, with transport, for a fever, a stubborn stomach or a cough. Laboratories here test for giardia, cyclospora, typhoid and dengue routinely.",
              "<strong>Help with an animal bite:</strong> getting you to a clinic that stocks rabies vaccine, immediately.",
              "<strong>A summary of your trek on request</strong> — dates, altitudes, and anything your guide noted about illness or treatment — to give to your doctor at home.",
              "<strong>Support with insurance claims:</strong> the paperwork and letters your insurer asks for.",
              "<strong>Contact after you get home.</strong> If something develops later and your doctor wants details of the route or what happened, write to us.",
            ],
          },
          { p: "We are not medical professionals and cannot diagnose — but we can make sure you reach one quickly, with the right information. <a href=\"/contact\">Contact us</a> at any time, including after your trip." },
        ],
      },
    ],
    faqs: [
      { question: "What should I do if I get a fever after returning from Nepal?", answer: "See a doctor promptly — the same day if the fever is high or you feel very unwell — and say you have travelled to Nepal, including any time in the lowlands. Fever after travel in South Asia has several treatable but potentially serious causes that need tests to distinguish." },
      { question: "How long after a trip can travel illnesses appear?", answer: "Most appear within a month, but hepatitis can take up to eight weeks and malaria can appear several months after exposure. Mention your trip for any significant illness in the three months after you return." },
      { question: "Can I get malaria from trekking in Nepal?", answer: "Not on the mountain trekking routes, which are above the altitude where malaria occurs. There is a low risk in parts of the southern lowlands, so mention it to a doctor if your trip included Chitwan, Bardia, Lumbini or other Terai areas." },
      { question: "I still have diarrhoea two weeks after my trek. What should I do?", answer: "Ask your doctor for a stool test and say you have been in Nepal. Giardia and cyclospora are common causes of persistent diarrhoea in returning travellers, and both are easily treated once identified." },
      { question: "Is it normal to cough for weeks after a high-altitude trek?", answer: "A dry cough for one to three weeks is common as the airways recover. See a doctor if it lasts more than three weeks or comes with fever, coloured phlegm, chest pain or breathlessness." },
      { question: "My calf is swollen after the flight home. Is that serious?", answer: "Swelling, pain, warmth or redness in one calf may be a deep vein thrombosis and needs medical attention the same day. Mild swelling in both ankles is usually harmless. Sudden breathlessness or chest pain is an emergency." },
      { question: "I was scratched by a monkey in Kathmandu and did nothing. Is it too late?", answer: "No — seek medical advice now. Rabies treatment after exposure is effective if given before symptoms develop, and the incubation period is usually weeks to months. Do not delay further." },
      { question: "My toes are still numb weeks after the trek. Should I worry?", answer: "Numbness from cold or tight boots often takes several weeks to resolve. See a doctor if the skin blisters, turns dark, or if feeling has not returned after about a month." },
      { question: "How do I know if tiredness after a trek is normal?", answer: "Normal post-trek tiredness improves steadily over one to two weeks. Tiredness that is getting worse, or that comes with fever, weight loss, night sweats or stomach symptoms, should be assessed by a doctor." },
      { question: "What information should I give my doctor?", answer: "Where in Nepal you went and whether you visited the lowlands, exact dates, maximum altitude, when symptoms began, food and water exposures, insect and animal bites, illness and medication during the trip, and your vaccines and any antimalarials." },
      { question: "Can you help if I am ill at the end of my trek?", answer: "Yes. We arrange an appointment and transport to a travel-medicine clinic in Kathmandu or Pokhara, provide a record of your trek for your doctor, and help with insurance paperwork. We can also be contacted after you get home." },
    ],
    relatedTreks: [
      "chitwan-national-park-tour-4-days",
      "bardia-jungle-safari-tour-5-days",
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "langtang-valley-trek",
    ],
    tripsNote: "Mountain treks carry little infection risk; adding the lowlands changes what your doctor should check for.",
    relatedPosts: [
      "post-trek-recovery-what-your-body-needs",
      "stomach-illness-on-a-nepal-trek-medication-and-recovery",
      "vaccinations-for-trekking-in-nepal",
      "khumbu-cough-colds-and-chest-infections-on-a-trek",
    ],
    tags: ["post-trek health", "travel illness", "fever after travel", "trekking health", "nepal trekking"],
    meta: {
      title: "Illness After a Nepal Trek: Symptoms Not to Ignore",
      description: "Symptoms to take seriously after a Nepal trek: fever, persistent diarrhoea, cough, a swollen calf and more, with incubation periods and what to tell your doctor.",
      keywords: "illness after trekking Nepal, fever after travel Nepal, post trek symptoms, giardia after Nepal, sick after Everest Base Camp",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "buying-medicine-in-kathmandu-and-pokhara",
    title: "Buying Medicine in Kathmandu and Pokhara: Pharmacies and Clinics",
    cluster: "health",
    date: "2028-02-18",
    hero: {
      image: "mardi-treks/seven-world-heritage-kathmandu-day-tour/seven-world-heritage-kathmandu-day-tour-04-kathmandu-durbar-square-2026",
      alt: "Kathmandu Durbar Square in the old city of Kathmandu, Nepal.",
    },
    excerpt:
      "Forgot something, or need a doctor before or after your trek? What you can and cannot buy in Nepal, how pharmacies in Thamel and Lakeside work, the local names worth knowing, where the travel clinics are, and what medical help exists on the trail.",
    intro: [
      { p: "Sooner or later most trekkers need a pharmacy in Nepal. The Diamox was left on the kitchen table. The blister plasters ran out on day five. A stomach bug arrived the night before the flight home. The good news is that Kathmandu and Pokhara are well supplied: there are pharmacies on almost every street in the tourist districts, and clinics that have been treating trekkers for decades." },
      { p: "The catch is that supply drops off a cliff once you leave the road. What you can buy for a few rupees in Thamel may be unobtainable five days up the trail. This guide explains what is available where, how to buy sensibly, and where to go when you need more than a pharmacy." },
      { p: "This article is general information for trip planning, not medical advice. Named products and services are examples that may change; check locally." },
    ],
    sections: [
      {
        h2: "What Is Easy to Buy and What Is Not",
        blocks: [
          {
            table: {
              head: ["Item", "Availability in Kathmandu and Pokhara", "Note"],
              rows: [
                ["Paracetamol, ibuprofen", "Everywhere", "Very cheap"],
                ["Oral rehydration salts", "Everywhere, including many trail villages", "Sold as Jeevan Jal"],
                ["Acetazolamide (Diamox)", "Widely available", "Usually 250 mg tablets; get medical advice first"],
                ["Common antibiotics, anti-parasitic medicines", "Widely available", "Use only on medical advice — see below"],
                ["Loperamide, antacids, antihistamines", "Widely available", "Ask by generic name"],
                ["Throat lozenges, cough syrups, cold remedies", "Everywhere", "Check ingredients; avoid codeine for altitude"],
                ["Water purification tablets and chlorine drops", "Widely available in pharmacies and trekking shops", "Local chlorine solution is sold as Piyush"],
                ["Sunscreen, lip balm", "Available in Thamel and Lakeside", "High SPF is costlier and stock varies; bring from home"],
                ["Plasters, bandages, antiseptic, tape", "Everywhere", "Basic quality"],
                ["Hydrocolloid blister plasters", "Limited", "Bring from home"],
                ["Good insect repellent", "Available", "Check the active ingredient and strength"],
                ["Specialised prescription medicines; specific brands", "Unreliable", "Bring your full supply"],
                ["Insulin, adrenaline auto-injectors, inhalers of a particular type", "Limited or different formulations", "Bring your own, with spares"],
                ["Contact lens solution, particular contraceptives", "Limited choice", "Bring from home"],
              ],
            },
          },
          { p: "The rule: <strong>buy the simple things here if you need to; bring anything specific to you.</strong> The full kit is in our [[post:trekking-first-aid-kit-for-nepal|trekking first aid kit guide]]." },
        ],
      },
      {
        h2: "How Pharmacies in Thamel and Lakeside Work",
        blocks: [
          {
            ul: [
              "<strong>They are small counters, not supermarkets.</strong> You ask for what you want; the pharmacist takes it from the shelf.",
              "<strong>Medicines are sold by the strip</strong> of ten tablets, or even by the single tablet, not by the box.",
              "<strong>Ask by generic name.</strong> Brand names differ from those at home. Say acetazolamide, not just Diamox; loperamide, not the brand you know.",
              "<strong>Many prescription medicines are sold without a prescription.</strong> This is convenient and also a risk: nobody checks whether the drug suits you, interacts with something else you take, or is the right treatment at all.",
              "<strong>Prices are low.</strong> A strip of common tablets usually costs well under a dollar or two.",
              "<strong>English is widely spoken</strong> in the tourist districts.",
              "<strong>Opening hours</strong> are long, roughly morning to mid-evening; hospital pharmacies stay open later.",
            ],
          },
          { h3: "Buying safely" },
          {
            ol: [
              "<strong>Choose an established pharmacy</strong> — a busy one, or one attached to a clinic or hospital. Poor-quality and counterfeit medicines exist across South Asia, and reputable outlets are your main protection.",
              "<strong>Check the expiry date</strong> printed on the strip.",
              "<strong>Check the strip is sealed and clearly printed</strong> with the drug name, strength and manufacturer.",
              "<strong>Check the strength.</strong> Tablets may be double or half what you are used to.",
              "<strong>Ask for the instructions to be written down</strong> on the packet.",
              "<strong>Keep the receipt.</strong>",
              "<strong>Do not ask a pharmacist to diagnose you.</strong> For anything beyond the obvious, see a doctor first.",
            ],
          },
          { p: "On antibiotics especially: buying them over the counter for a cold or a mild upset stomach does you no good and adds to drug resistance, which is already a serious problem in the region. Use them when a doctor has advised it." },
        ],
      },
      {
        h2: "Local Names Worth Knowing",
        blocks: [
          {
            table: {
              head: ["You want", "Ask for", "Notes"],
              rows: [
                ["Oral rehydration salts", "Jeevan Jal", "Orange-flavoured sachets, mixed with one litre of treated water. Sold in village shops as well as pharmacies"],
                ["Chlorine water treatment", "Piyush", "A small bottle of chlorine solution; a few drops per litre, then wait half an hour"],
                ["Paracetamol", "Cetamol, or simply paracetamol", "Usually 500 mg tablets"],
                ["Altitude tablets", "Acetazolamide, or Diamox", "Usually 250 mg; the preventive dose is commonly half a tablet"],
                ["Rub for colds and aches", "Sancho", "A strong herbal oil used all over Nepal; a traditional remedy rather than a medicine"],
                ["Pharmacy", "Look for the sign Pharmacy, Medical Hall or Aushadhi Pasal", "A green or red cross is usual"],
              ],
            },
          },
          { p: "Lodge owners and guides may also offer you garlic soup, ginger tea and local remedies for altitude and colds. They are comforting, hydrating and harmless — and not a substitute for descent or medicine when those are needed." },
        ],
      },
      {
        h2: "Travel Clinics and Hospitals",
        blocks: [
          { p: "For anything more than a simple purchase — a fever, a persistent stomach problem, an animal bite, a prescription query, vaccines — go to a clinic that specialises in travellers. They are used to trekkers, speak English, run their own laboratories, deal with insurers directly and stock reliable medicines." },
          {
            ul: [
              "<strong>Kathmandu</strong> has long-established travel-medicine clinics such as CIWEC, in the Lazimpat area, and the Nepal International Clinic, both of which have treated trekkers and expatriates for decades, as well as several large private hospitals with emergency departments.",
              "<strong>Pokhara</strong> has a travel-medicine clinic in the Lakeside area and teaching hospitals in the city.",
              "<strong>Services:</strong> consultations, stool and blood tests, vaccinations including rabies vaccine after a bite, treatment of altitude illness, and admission if required.",
              "<strong>Cost:</strong> international-standard clinics charge accordingly — far more than a local pharmacy, far less than the equivalent at home in many countries. Keep every receipt and the doctor's report for your insurer.",
              "<strong>Insurance:</strong> call your insurer's emergency line before treatment where you can. Many clinics will liaise directly.",
            ],
          },
          { p: "If you are unwell at the end of a trek, being seen in Kathmandu or Pokhara before you fly is often the best decision. The doctors there see more giardia, typhoid and altitude illness in a month than most doctors elsewhere see in a career. See [[post:illness-after-a-nepal-trek-symptoms-not-to-ignore|illness after a Nepal trek]]." },
          {
            figure: {
              image: "mardi-treks/kathmandu-day-tour/kathmandu-day-tour-03-swayambhunath-temple-an-ancient-religious-architecture-of-ne",
              alt: "Swayambhunath stupa above Kathmandu, Nepal.",
              caption: "Kathmandu from Swayambhunath. Everything medical is here; almost nothing is available five days up the trail. Stock up before you leave.",
            },
          },
        ],
      },
      {
        h2: "On the Trail: Health Posts and Aid Posts",
        blocks: [
          {
            table: {
              head: ["Where", "What exists", "Reality"],
              rows: [
                ["Everest region", "A hospital at Lukla and one at Kunde above Namche; a seasonal aid post at Pheriche run by the Himalayan Rescue Association with volunteer doctors; a seasonal rescue post at Machhermo on the Gokyo route", "The best-served trekking region. Pheriche and Machhermo give daily altitude talks in season"],
                ["Annapurna Circuit", "A Himalayan Rescue Association aid post at Manang, staffed in the trekking seasons; a hospital at Jomsom", "Go to the afternoon altitude talk in Manang on your rest day"],
                ["Annapurna Base Camp, Poon Hill, Mardi Himal", "Health posts in the larger villages such as Ghandruk", "Basic; road access is close"],
                ["Langtang", "A health post in the valley; road head at Syabrubesi", "Basic"],
                ["Manaslu, Tsum", "Health posts in a few larger villages", "Limited stock and staffing"],
                ["Dolpo, Kanchenjunga, Makalu and other remote routes", "Very little", "Entirely self-reliant; helicopter evacuation only"],
              ],
              note: "Aid posts run by volunteer doctors operate only in the spring and autumn trekking seasons. Fees paid by foreign trekkers help fund care for local people and porters.",
            },
          },
          {
            ul: [
              "<strong>Lodge shops</strong> sell paracetamol, rehydration salts and plasters at best — at several times the city price, and not above the last major village.",
              "<strong>Government health posts</strong> are intended for local communities and may have no doctor and limited medicines.",
              "<strong>Your guide's medical kit</strong> and your own are, in practice, the pharmacy above the road head.",
              "<strong>Helicopter evacuation</strong> is the route to hospital from most places, weather permitting — which is why insurance is non-negotiable. See [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking in Nepal]].",
            ],
          },
        ],
      },
      {
        h2: "Bringing Medicines into Nepal",
        blocks: [
          {
            ul: [
              "<strong>Personal medicines in reasonable quantities</strong> are not a problem at customs.",
              "<strong>Keep them in original packaging</strong> with your name on the pharmacy label where possible.",
              "<strong>Carry a doctor's letter and copies of prescriptions,</strong> listing generic names and doses.",
              "<strong>Controlled drugs</strong> — strong opioid painkillers, some sedatives and sleeping tablets, stimulant medication — need particular care. Carry the prescription and letter, bring only what you need for the trip, and check the rules for every country you transit through as well.",
              "<strong>Syringes and needles</strong> for insulin or other treatment should be covered by the letter.",
              "<strong>Hand luggage.</strong> Never check in medicine you cannot do without.",
            ],
          },
          { p: "Planning for specific conditions is covered in [[post:trekking-in-nepal-with-a-medical-condition|trekking in Nepal with a medical condition]]." },
        ],
      },
      {
        h2: "A Pre-Trek Pharmacy Checklist",
        blocks: [
          { p: "If you have an hour in Thamel or Lakeside before the trek, this is the top-up list most people need." },
          {
            ul: [
              "Oral rehydration salts — six to eight sachets.",
              "Paracetamol and ibuprofen — a strip or two of each.",
              "Throat lozenges — more than you think.",
              "Hand sanitiser — a small bottle to refill.",
              "Water purification tablets or drops as a back-up.",
              "Zinc oxide tape and plasters.",
              "Antiseptic — a small bottle of povidone-iodine.",
              "Sunscreen and lip balm with SPF, if you did not bring them.",
              "Toilet paper and wet wipes.",
              "Anything your doctor prescribed that you have forgotten — with medical advice if you are buying it for the first time.",
            ],
          },
          { p: "Do it the day before departure, not on the morning you leave. The errands for your first day or two in the city are in [[post:arriving-in-kathmandu-first-48-hours|arriving in Kathmandu: your first 48 hours]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek. In the city, that mostly means saving you time and steering you to the right door." },
          {
            ul: [
              "<strong>A kit check at your pre-trek briefing,</strong> so you know exactly what is missing.",
              "<strong>A guide or staff member to take you</strong> to a reputable, established pharmacy in Kathmandu or Pokhara, help with names and strengths, and make sure you are not overcharged.",
              "<strong>Appointments at a travel-medicine clinic</strong> — before the trek for a late vaccine or a prescription query, or afterwards for any symptom — with transport arranged.",
              "<strong>Immediate help after an animal bite</strong> or other urgent problem, including getting you to a clinic that stocks rabies vaccine.",
              "<strong>On the trek:</strong> a guide carrying a group medical kit, with a pulse oximeter and emergency medication on high-altitude routes, and knowledge of where the nearest health post or aid post is.",
              "<strong>Evacuation and insurer liaison</strong> if you need a hospital.",
            ],
          },
          { p: "We do not sell or prescribe medicines, and we are not a substitute for a doctor. We make sure you can reach one, and that you leave the city properly equipped. <a href=\"/contact\">Ask us</a> anything before you travel." },
        ],
      },
    ],
    faqs: [
      { question: "Can I buy Diamox in Kathmandu?", answer: "Yes. Acetazolamide is widely sold in pharmacies in Kathmandu and Pokhara, usually as 250 mg tablets. Use an established pharmacy, check the expiry date, and take medical advice first, as it is not suitable for everyone." },
      { question: "Do I need a prescription to buy medicine in Nepal?", answer: "Many medicines that need a prescription elsewhere are sold over the counter in Nepal. That is convenient but means no one checks the drug is right for you. For anything beyond basic remedies, see a doctor first." },
      { question: "Are medicines in Nepal safe and genuine?", answer: "Most are, but substandard and counterfeit medicines do exist in the region. Buy from busy, established pharmacies or those attached to clinics and hospitals, check the expiry date and that the strip is sealed and clearly printed." },
      { question: "Where is the best travel clinic in Kathmandu?", answer: "Kathmandu has long-established travel-medicine clinics, including CIWEC in the Lazimpat area and the Nepal International Clinic, which are experienced with trekkers, run their own laboratories and deal with insurers. Pokhara has a travel clinic in Lakeside." },
      { question: "Can I buy medicine on the trek?", answer: "Only the basics, and only in larger villages. Lodge shops may sell paracetamol and rehydration salts at high prices. Above the road head, rely on your own kit and your guide's. Buy everything you need before leaving the city." },
      { question: "What is Jeevan Jal?", answer: "Jeevan Jal is the common Nepali brand of oral rehydration salts. Each sachet is mixed with one litre of treated water. It is sold in pharmacies and many village shops and is the first treatment for diarrhoea and dehydration." },
      { question: "Are there doctors on the Everest Base Camp trek?", answer: "There are hospitals at Lukla and Kunde, and in the spring and autumn seasons a Himalayan Rescue Association aid post at Pheriche staffed by volunteer doctors, which also gives daily altitude talks. On the Gokyo route there is a seasonal rescue post at Machhermo." },
      { question: "Can I bring my own prescription medicines into Nepal?", answer: "Yes, for personal use. Keep them in original packaging and carry a doctor's letter and copies of prescriptions, particularly for controlled drugs such as strong painkillers and sedatives, and for syringes." },
      { question: "How much does a clinic visit cost in Kathmandu?", answer: "International-standard travel clinics charge international-style fees — considerably more than a local pharmacy visit, though often less than private care at home. Keep receipts and the medical report for your insurance claim." },
      { question: "Can I get a rabies vaccine in Nepal after a bite?", answer: "Yes, at travel-medicine clinics and major hospitals in Kathmandu and Pokhara. Wash the wound for fifteen minutes with soap and water and get there as soon as possible. Rabies immunoglobulin, needed if you were not vaccinated beforehand, is in limited supply." },
      { question: "Will you help me find a pharmacy or clinic?", answer: "Yes. We check your kit at the pre-trek briefing, take you to a reputable pharmacy, arrange clinic appointments and transport before or after the trek, and coordinate evacuation with your insurer if needed." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "kathmandu-day-tour",
      "kathmandu-pokhara-tour",
      "annapurna-circuit-trek",
    ],
    tripsNote: "The two cities where you stock up, and the two routes with the best medical support on the trail.",
    relatedPosts: [
      "trekking-first-aid-kit-for-nepal",
      "pre-and-post-trek-medication-guide-for-nepal",
      "arriving-in-kathmandu-first-48-hours",
      "illness-after-a-nepal-trek-symptoms-not-to-ignore",
    ],
    tags: ["pharmacy", "kathmandu", "pokhara", "trek medication", "travel clinic"],
    meta: {
      title: "Buying Medicine in Kathmandu and Pokhara: Pharmacies, Clinics",
      description: "What medicines you can buy in Kathmandu and Pokhara, how pharmacies work, local names to know, where the travel clinics are, and medical help on the trail.",
      keywords: "pharmacy Kathmandu, buy Diamox Kathmandu, travel clinic Kathmandu, medicine Pokhara, medical help trekking Nepal",
    },
  },
];
