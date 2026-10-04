import type { BlogContent } from "./build";

export const healthA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "pre-and-post-trek-medication-guide-for-nepal",
    title: "Pre- and Post-Trek Medication for Nepal: The Complete Guide",
    cluster: "health",
    date: "2027-12-14",
    hero: {
      image: "mardi-treks/upper-mustang-trek/upper-mustang-trek-02-health-post-at-jomsom-village-wlv-0704",
      alt: "The health post at Jomsom village in Mustang, Nepal, on the Annapurna trekking routes.",
    },
    excerpt:
      "What to take, when to start it, and what to do afterwards. A complete timeline of medication for a Nepal trek — vaccines, altitude tablets, the medical kit, what to avoid in thin air, and the checks worth making once you are back down.",
    intro: [
      { p: "Most trekkers think about medication twice: in a panic the week before they fly, and again at 4,000 m with a headache. Both are too late to do it well. Vaccines need weeks to work, prescriptions need a doctor's appointment, and the right time to discover that a tablet disagrees with you is at home, not at Dingboche." },
      { p: "This guide lays out the whole sequence, from two months before departure to two weeks after you return, and links to a detailed article on each part. It covers what healthy trekkers commonly carry and why. It cannot tell you what you personally should take — that is a conversation for your own doctor." },
      { p: "This article is general information for trip planning, not medical advice. Doses mentioned are those commonly published in travel and altitude medicine guidance; your doctor should confirm what is right for you, especially if you have a medical condition, are pregnant, or take regular medication." },
    ],
    sections: [
      {
        h2: "The Timeline at a Glance",
        blocks: [
          {
            table: {
              head: ["When", "What to do"],
              rows: [
                ["8 weeks before", "Book a travel clinic or doctor's appointment. Start vaccine courses that need more than one dose"],
                ["6 weeks before", "Medical check-up if you have a long-term condition, are over 50, or have had altitude illness before. Dental check"],
                ["4 weeks before", "Get prescriptions: altitude medication, a stand-by antibiotic, plus enough of your regular medicines for the trip and a week over"],
                ["2 to 3 weeks before", "Trial dose of acetazolamide at home if you plan to use it. Finish vaccines. Assemble the medical kit"],
                ["Arrival in Kathmandu or Pokhara", "Fill any gaps at a reputable pharmacy. Health briefing with your guide. Declare conditions and medication"],
                ["On the trek", "Take preventive medication as prescribed. Report symptoms early. Treat small problems before they grow"],
                ["Walking out", "Stop altitude medication once you have descended. Keep taking any antibiotic to the end of the course"],
                ["First 2 weeks after", "Rest, rehydrate, eat. Watch for fever, persistent diarrhoea or cough"],
                ["Up to 3 months after", "See a doctor promptly for any fever, and mention that you have been in Nepal"],
              ],
            },
          },
        ],
      },
      {
        h2: "Before the Trek: Vaccines and Check-Ups",
        blocks: [
          { p: "Two appointments do most of the work. A <strong>travel clinic</strong> handles vaccines and prescriptions; your <strong>own doctor</strong> reviews any existing condition against the demands of altitude." },
          {
            ul: [
              "<strong>Vaccines.</strong> Hepatitis A and typhoid are recommended for most visitors to Nepal, on top of up-to-date routine vaccines. Rabies, hepatitis B and Japanese encephalitis depend on your route and length of stay. Full detail in [[post:vaccinations-for-trekking-in-nepal|vaccinations for trekking in Nepal]].",
              "<strong>Check-up.</strong> Tell your doctor the maximum altitude, how many nights you will sleep above 3,000 m, and that evacuation from most routes is by helicopter only. See [[post:pre-trek-medical-check-up-for-nepal|the pre-trek medical check-up]].",
              "<strong>Existing conditions.</strong> Asthma, diabetes, high blood pressure and many others are compatible with trekking when well controlled, but each needs a plan. See [[post:trekking-in-nepal-with-a-medical-condition|trekking with a medical condition]].",
              "<strong>Insurance.</strong> Declare every condition and medicine, and check that helicopter evacuation is covered to the maximum altitude of your route — see our [[post:travel-insurance-for-trekking-in-nepal|insurance guide]].",
            ],
          },
        ],
      },
      {
        h2: "The Medicines Trekkers Carry",
        blocks: [
          { p: "A personal kit for a teahouse trek weighs 300 to 400 g. Your guide carries a larger group kit; yours covers the things you will want at 2 am without knocking on anyone's door." },
          {
            table: {
              head: ["Category", "Typical contents", "Purpose"],
              rows: [
                ["Altitude", "Acetazolamide (Diamox), on prescription", "Speeds acclimatisation on high or fast routes"],
                ["Pain and fever", "Paracetamol; ibuprofen", "Headache, sore muscles, fever"],
                ["Stomach", "Oral rehydration salts; loperamide; a stand-by antibiotic on prescription", "Diarrhoea and dehydration"],
                ["Nausea", "An anti-sickness tablet, on prescription", "Vomiting from stomach illness or altitude"],
                ["Colds and cough", "Throat lozenges; a decongestant; saline nasal spray", "The dry cough and blocked nose of high altitude"],
                ["Allergy", "A non-drowsy antihistamine", "Hay fever, bites, mild reactions"],
                ["Feet and skin", "Blister plasters, zinc oxide tape, antiseptic, antifungal cream", "Blisters, cuts, chafing"],
                ["Sun and cold", "SPF 50 sunscreen; SPF lip balm", "Sunburn at altitude is fast and severe"],
                ["Water", "Purification tablets or drops as a back-up", "Safe drinking water"],
                ["Personal", "All regular prescription medicines, in original packaging", "Whatever you take at home"],
              ],
            },
          },
          { p: "The full list, with quantities and what to adjust for remote, monsoon and winter routes, is in our [[post:trekking-first-aid-kit-for-nepal|trekking first aid kit guide]]. Where to buy what you have forgotten is in [[post:buying-medicine-in-kathmandu-and-pokhara|buying medicine in Kathmandu and Pokhara]]." },
        ],
      },
      {
        h2: "Altitude Medication in Brief",
        blocks: [
          { p: "Three drugs matter at altitude, and they do very different jobs." },
          {
            table: {
              head: ["Drug", "Role", "Who carries it"],
              rows: [
                ["Acetazolamide (Diamox)", "Prevention: speeds the body's own acclimatisation. Also used to treat mild altitude sickness", "Trekkers, on prescription"],
                ["Dexamethasone", "Emergency treatment for severe altitude sickness and brain swelling (HACE). Buys time for descent", "Guides and expedition medics"],
                ["Nifedipine", "Emergency treatment for fluid in the lungs (HAPE). Buys time for descent", "Guides and expedition medics"],
              ],
            },
          },
          { p: "The commonly published preventive dose of acetazolamide is 125 mg twice a day, started the day before going above about 3,000 m. It is a prescription medicine with real side effects and some important exclusions, including sulfonamide allergy — all covered in [[post:diamox-for-trekking-in-nepal|our guide to Diamox]]." },
          { p: "No tablet replaces a sensible ascent. A well-paced itinerary with rest days is the treatment that actually works; medication supports it. The principles are in [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness in Nepal]]." },
          {
            figure: {
              image: "mardi-treks/island-peak-climbing/island-peak-climbing-02-dingboche-from-the-trail-to-tengboche",
              alt: "Dingboche village in the Khumbu, an acclimatisation stop at 4,410 m on the Everest Base Camp trek.",
              caption: "Dingboche at 4,410 m. The rest day here does more for acclimatisation than anything in a medical kit.",
            },
          },
        ],
      },
      {
        h2: "Medicines to Avoid or Use with Care at Altitude",
        blocks: [
          {
            ul: [
              "<strong>Sleeping tablets and sedatives.</strong> Many suppress breathing during sleep, when oxygen levels are already at their lowest. Do not take them above 3,000 m unless a doctor who understands altitude has approved it.",
              "<strong>Strong opioid painkillers and codeine.</strong> The same problem: they depress breathing. Codeine-based cough medicines included.",
              "<strong>Alcohol.</strong> Not a medicine, but it behaves like a sedative, dehydrates you and wrecks sleep at altitude.",
              "<strong>Sedating antihistamines.</strong> Choose a non-drowsy one.",
              "<strong>Anti-inflammatories on an empty stomach or when dehydrated.</strong> Ibuprofen and similar drugs are hard on the stomach and kidneys. Take with food and drink plenty.",
              "<strong>Anti-diarrhoeal tablets with fever or blood.</strong> Loperamide slows the gut and should not be used when there is high fever or blood in the stool.",
              "<strong>Anyone else's prescription.</strong> A fellow trekker's leftover antibiotics are not a treatment plan.",
              "<strong>Emergency altitude drugs taken in order to continue upward.</strong> Dexamethasone hides symptoms while the underlying problem worsens.",
            ],
          },
        ],
      },
      {
        h2: "After the Trek: What to Finish and What to Watch",
        blocks: [
          { p: "Post-trek medication is mostly about stopping things correctly and noticing what has not gone away." },
          {
            ul: [
              "<strong>Acetazolamide:</strong> stop once you have descended. There is no need to taper and no rebound.",
              "<strong>Antibiotics:</strong> finish the course as prescribed, even if you feel better.",
              "<strong>Antimalarials,</strong> if you were prescribed them for the lowlands: continue for the full period after leaving the risk area. Stopping early is the commonest reason they fail.",
              "<strong>Painkillers:</strong> you should not need them for more than a few days. Pain that persists needs a diagnosis, not more tablets.",
              "<strong>Regular medicines:</strong> return to your normal routine and time zone schedule.",
            ],
          },
          {
            table: {
              head: ["Symptom after return", "Possible cause", "Action"],
              rows: [
                ["Fever, at any time up to three months later", "Many, including typhoid, dengue and malaria", "See a doctor promptly; say you have been in Nepal"],
                ["Diarrhoea lasting more than two weeks", "Giardia or another parasite", "Stool test; specific treatment"],
                ["Cough lasting more than three weeks", "Lingering airway irritation or infection", "Medical review"],
                ["Swollen, painful calf", "Possible blood clot after long flights", "Urgent medical attention"],
                ["Numb toes or fingertips", "Mild cold injury", "Usually resolves over weeks; see a doctor if skin changes"],
              ],
            },
          },
          { p: "More on each of these is in [[post:post-trek-recovery-what-your-body-needs|post-trek recovery]] and [[post:illness-after-a-nepal-trek-symptoms-not-to-ignore|illness after a trek: symptoms you should not ignore]]." },
        ],
      },
      {
        h2: "Getting Medicine and Care in Nepal",
        blocks: [
          { p: "Kathmandu and Pokhara have well-stocked pharmacies and clinics that specialise in travel medicine, and most common medicines can be bought there cheaply. Above the road head, supply thins quickly: a few villages have health posts, and seasonal aid posts run by volunteer doctors operate at Pheriche on the Everest route and Manang on the Annapurna Circuit. Beyond those, what you and your guide carry is what there is." },
          { p: "That is the reason to arrive prepared. Bring anything on prescription from home, bring more than you need, and split it between two bags. Details in [[post:buying-medicine-in-kathmandu-and-pokhara|buying medicine in Kathmandu and Pokhara]]." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks provides health support before, during and after every trek we run. We are trek organisers, not doctors — we do not prescribe or diagnose — but we make sure the practical side is covered so that you and your own doctor are not planning in the dark." },
          {
            ul: [
              "<strong>Before you travel:</strong> the altitude profile of your itinerary — maximum height, sleeping altitudes, rest days — to take to your doctor, and a kit list matched to your route.",
              "<strong>On arrival:</strong> a health briefing with your guide, a check of your personal medical kit, and help filling gaps at a reputable pharmacy or travel-medicine clinic in Kathmandu or Pokhara.",
              "<strong>On the trek:</strong> guides trained in first aid and altitude illness, carrying a group medical kit and a pulse oximeter on high-altitude routes, with twice-daily oxygen readings above 4,000 m and emergency oxygen on high passes and climbing trips.",
              "<strong>If something goes wrong:</strong> coordination of descent, helicopter evacuation with your insurer, and hospital admission.",
              "<strong>After the trek:</strong> a check-in before you fly, a clinic appointment arranged if you have symptoms, and recovery days added if you need them.",
            ],
          },
          { p: "Tell us about any medical condition and regular medication when you book — it stays confidential and it changes how we plan. <a href=\"/contact\">Contact us</a> with questions about a specific route; we reply within 24 hours." },
        ],
      },
    ],
    faqs: [
      { question: "What medication should I take on a trek in Nepal?", answer: "Most trekkers carry paracetamol, ibuprofen, oral rehydration salts, loperamide, a stand-by antibiotic, throat lozenges, blister care and sunscreen, plus acetazolamide for high routes and all their regular medicines. Your doctor should confirm the prescription items." },
      { question: "How far in advance should I see a doctor?", answer: "Six to eight weeks before departure. Some vaccines need several doses over a month, and it leaves time to try altitude medication at home. If you are leaving sooner, go anyway — a late appointment is still worthwhile." },
      { question: "Do I need Diamox for trekking in Nepal?", answer: "Not always. It is most useful on routes that climb quickly or go above about 4,000 m, and for people who have had altitude sickness before. Low routes such as Poon Hill do not need it. It is a prescription medicine, so discuss it with your doctor." },
      { question: "Can I buy medication in Kathmandu instead of bringing it?", answer: "Common medicines are widely available and inexpensive in Kathmandu and Pokhara. Bring anything on prescription from home, because you know its quality and dose, and use an established pharmacy or clinic for anything you buy locally." },
      { question: "Which medicines are dangerous at altitude?", answer: "Sleeping tablets, sedatives, strong opioid painkillers and codeine can all suppress breathing during sleep, which is risky where oxygen is already low. Alcohol has a similar effect. Avoid them above 3,000 m unless a doctor has specifically approved it." },
      { question: "When should I stop taking Diamox?", answer: "Once you have descended from high altitude. It can simply be stopped — there is no need to reduce the dose gradually. Follow your own doctor's instructions on timing." },
      { question: "What should I do if I get a fever after returning home?", answer: "See a doctor promptly and tell them you have been in Nepal, including any time in the southern lowlands. Fever after travel in South Asia has many possible causes and some need urgent treatment." },
      { question: "Does my guide carry medicine?", answer: "Yes. Our guides carry a group first aid kit, and on high-altitude routes a pulse oximeter and emergency medication, with bottled oxygen on high passes and climbing trips. Your personal kit covers your own regular and preventive medicines." },
      { question: "Should I bring antibiotics?", answer: "Many travel clinics prescribe a stand-by antibiotic for moderate or severe diarrhoea, to be used according to written instructions. Do not take antibiotics for colds or mild stomach upsets, and never use someone else's." },
      { question: "Do you provide medical support on your treks?", answer: "Yes. We provide a pre-trek health briefing and kit check, guides trained in first aid and altitude illness with a medical kit and pulse oximeter, evacuation coordination, and help arranging a clinic visit after the trek. We do not prescribe medicines." },
    ],
    relatedTreks: [
      "manaslu-circuit-trek",
      "larke-pass-trek",
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "annapurna-base-camp-trek",
      "langtang-valley-trek",
    ],
    tripsNote: "Popular routes where a little medical planning before and after makes the biggest difference.",
    relatedPosts: [
      "trekking-first-aid-kit-for-nepal",
      "diamox-for-trekking-in-nepal",
      "vaccinations-for-trekking-in-nepal",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["trek medication", "trekking health", "altitude sickness", "first aid", "nepal trekking"],
    meta: {
      title: "Pre- and Post-Trek Medication for Nepal: Complete Guide",
      description: "A complete medication timeline for a Nepal trek: vaccines, altitude tablets, the medical kit, what to avoid at altitude, and health checks after you return.",
      keywords: "trekking medication Nepal, medicine for Nepal trek, pre trek medication, post trek health, altitude medication Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "vaccinations-for-trekking-in-nepal",
    title: "Vaccinations for Trekking in Nepal: What to Get and When",
    cluster: "health",
    date: "2027-12-20",
    hero: {
      image: "mardi-treks/kathmandu-day-tour/kathmandu-day-tour-05-swoyambhu-mahachaitya-also-known-as-swayambhunath-or-the-mon",
      alt: "Swayambhunath stupa in Kathmandu, known as the Monkey Temple, Nepal.",
    },
    excerpt:
      "Nepal has no compulsory vaccines for most travellers, but several are strongly recommended — and rabies deserves more thought than trekkers give it. Which vaccines, how many weeks ahead, and what malaria, dengue and Japanese encephalitis mean for a trekking trip.",
    intro: [
      { p: "Nepal does not require proof of any vaccination from most visitors. That leads some trekkers to assume none is needed, which is wrong. The infections you are most likely to meet — in food, in water, and from an animal bite a week's walk from a hospital — are exactly the ones vaccines prevent." },
      { p: "The good news is that the high mountains are healthy places. Mosquito-borne diseases are a concern only in the lowlands, and most of what you need is the same set of vaccines recommended for travel anywhere in South Asia. The key is timing: start six to eight weeks ahead." },
      { p: "This article is general information for trip planning, not medical advice. Recommendations differ between countries and change over time. A travel health clinic will give advice based on your own vaccination history, health and itinerary." },
    ],
    sections: [
      {
        h2: "When to Start",
        blocks: [
          {
            ul: [
              "<strong>Six to eight weeks before departure</strong> is ideal. Several vaccines need two or three doses spread over three to four weeks, and most take around two weeks to give full protection.",
              "<strong>Find your records first.</strong> Knowing what you had as a child and on previous trips saves both money and needles.",
              "<strong>Leaving in under a month?</strong> Go anyway. Single-dose vaccines such as hepatitis A and typhoid still protect, and some courses have accelerated schedules.",
              "<strong>Combine it with prescriptions.</strong> The same appointment is the time to ask about altitude medication and a stand-by antibiotic — see our [[post:pre-and-post-trek-medication-guide-for-nepal|medication guide]].",
            ],
          },
        ],
      },
      {
        h2: "The Vaccines, One by One",
        blocks: [
          {
            table: {
              head: ["Vaccine", "Who it is for", "Typical schedule", "Notes"],
              rows: [
                ["Routine vaccines: tetanus, diphtheria, polio, measles-mumps-rubella", "Everyone", "Boosters if not up to date", "A tetanus booster within the last ten years matters on a trek — cuts and scrapes are routine"],
                ["Hepatitis A", "Almost all travellers", "One dose before travel; a second 6 to 12 months later for long-term protection", "Spread by contaminated food and water"],
                ["Typhoid", "Almost all travellers", "One injection at least two weeks before, or an oral course", "Protection is good but not complete; food and water care still matter"],
                ["Hepatitis B", "Longer stays; anyone who might need medical or dental care; many clinics now advise it for all", "Three doses over six months, or an accelerated schedule", "Spread by blood and body fluids"],
                ["Rabies (pre-exposure)", "Trekkers, especially on remote routes; children; long stays", "Two or three doses over one to four weeks", "See the section below — the most under-rated vaccine for Nepal"],
                ["Japanese encephalitis", "Long stays in the lowlands; rural Terai visits in and after the monsoon", "Two doses, usually four weeks apart", "Not needed for a mountains-only trip"],
                ["Influenza and COVID-19", "Everyone, per home-country advice", "As per seasonal schedule", "Respiratory infections spread fast in lodge dining rooms"],
                ["Cholera", "Aid workers; those staying in areas with an outbreak", "Oral vaccine", "Rarely advised for trekkers"],
                ["Yellow fever", "Only travellers arriving from a country with yellow fever risk", "Single dose; certificate required", "Nepal has no yellow fever; this is an entry rule, not a health risk"],
              ],
              note: "Schedules vary by product and country. Your clinic will confirm the right one.",
            },
          },
          { p: "For a typical two- or three-week trek, the usual core is: routine vaccines up to date, hepatitis A, typhoid, and a serious conversation about rabies." },
        ],
      },
      {
        h2: "Rabies: The One Trekkers Underestimate",
        blocks: [
          { p: "Rabies is present throughout Nepal. It is carried mainly by dogs, and also by monkeys — the bold ones at Swayambhunath and Pashupatinath in Kathmandu account for a good share of bites to tourists. Village dogs are a fixture of every trail. Once symptoms of rabies appear the disease is almost always fatal, so everything depends on treatment after a bite and before symptoms." },
          { p: "That is where trekking changes the calculation." },
          {
            table: {
              head: ["", "Not vaccinated beforehand", "Vaccinated beforehand"],
              rows: [
                ["After a bite you need", "Rabies immunoglobulin injected into the wound, plus a course of four or five vaccine doses over two to four weeks", "Two booster doses of vaccine, a few days apart"],
                ["Immunoglobulin", "Required — and it is expensive, in short supply worldwide, and in Nepal available only at a few clinics in the main cities", "Not required"],
                ["Urgency", "As soon as possible — which from a high trail means abandoning the trek and usually a helicopter", "Prompt, but with more margin; boosters can be given when you reach a clinic"],
                ["Effect on your trip", "The trek is over", "Often an interruption rather than an ending"],
              ],
            },
          },
          { p: "If you are bitten, scratched or licked on broken skin by any mammal, vaccinated or not:" },
          {
            ol: [
              "<strong>Wash the wound immediately</strong> with soap and running water for a full fifteen minutes. This step alone greatly reduces the risk.",
              "<strong>Apply an antiseptic</strong> such as povidone-iodine.",
              "<strong>Do not close the wound</strong> with tape or stitches.",
              "<strong>Tell your guide</strong> and get to a clinic that stocks rabies vaccine — in practice, Kathmandu or Pokhara.",
              "<strong>Contact your insurer.</strong> Evacuation for rabies exposure is normally covered.",
            ],
          },
          { p: "Prevention is simple: do not pet dogs however friendly, do not feed or tease monkeys, carry no food in your hands at temple sites, and teach children the same." },
        ],
      },
      {
        h2: "Malaria, Dengue and Japanese Encephalitis: A Lowland Matter",
        blocks: [
          { p: "Mosquito-borne diseases in Nepal are confined to lower elevations. Above about 2,000 m — which is where trekking happens — they are not a concern." },
          {
            ul: [
              "<strong>Malaria.</strong> Risk exists only in parts of the Terai, the southern plains along the Indian border, and is low. There is none in Kathmandu, Pokhara or on the trekking routes. National advice differs on whether tablets are needed for the Terai; many authorities advise bite avoidance alone. If you are adding [[trek:chitwan-national-park-tour-3-days|Chitwan]], Bardia or [[trek:lumbini-tour|Lumbini]], especially between May and October, ask your clinic.",
              "<strong>Dengue.</strong> Has become more common in Nepal in recent years, with outbreaks in the lowlands and in Kathmandu and Pokhara, mainly from the monsoon through to November. There is no tablet to prevent it; protection is avoiding bites. The mosquitoes that carry it bite during the day.",
              "<strong>Japanese encephalitis.</strong> A rare but serious infection in the rural Terai during and after the monsoon. The vaccine is advised for long stays or extended rural travel in the lowlands in that season, not for a standard trek.",
            ],
          },
          {
            ul: [
              "Use a repellent containing DEET, picaridin or a similar proven ingredient on exposed skin.",
              "Wear long sleeves and trousers at dawn, dusk and — for dengue — through the day.",
              "Sleep under a net or in a screened, fan-cooled or air-conditioned room in the lowlands.",
            ],
          },
          { p: "More on the lowland parks is in our [[post:chitwan-national-park-guide|Chitwan guide]]." },
        ],
      },
      {
        h2: "Which Vaccines for Which Trip",
        blocks: [
          {
            table: {
              head: ["Trip", "Core", "Consider"],
              rows: [
                ["Short trek from Pokhara or Kathmandu (1 to 2 weeks)", "Routine, hepatitis A, typhoid", "Rabies"],
                ["Everest, Annapurna or Manaslu trek (2 to 3 weeks)", "Routine, hepatitis A, typhoid", "Rabies, hepatitis B"],
                ["Remote or camping trek (Dolpo, Kanchenjunga, Makalu)", "Routine, hepatitis A, typhoid, rabies", "Hepatitis B"],
                ["Trek plus Chitwan, Bardia or Lumbini", "Routine, hepatitis A, typhoid", "Rabies; malaria advice; Japanese encephalitis in monsoon"],
                ["Long stay or volunteering (over a month)", "Routine, hepatitis A, hepatitis B, typhoid, rabies", "Japanese encephalitis"],
                ["Travelling with children", "Routine up to date, hepatitis A, typhoid", "Rabies strongly — children are bitten more often and may not report it"],
              ],
            },
          },
          { p: "The more remote the route, the stronger the case for rabies vaccination: on the [[trek:upper-dolpo-trek|Upper Dolpo]] or [[trek:kanchenjunga-circuit-trek|Kanchenjunga]] trails, reaching a clinic that stocks immunoglobulin can take several days even with a helicopter." },
        ],
      },
      {
        h2: "Vaccines Do Not Cover Everything",
        blocks: [
          { p: "The most common illness on a Nepal trek is travellers' diarrhoea, and there is no vaccine for most of its causes. Nor is there one for hepatitis E, a water-borne infection that is widespread in Nepal, or for the colds that circulate in lodge dining rooms. Vaccination sits alongside the basics:" },
          {
            ul: [
              "Drink only treated or boiled water — see [[post:drinking-water-while-trekking-in-nepal|drinking water while trekking]].",
              "Wash or sanitise your hands before every meal.",
              "Eat freshly cooked, hot food — see [[post:food-on-the-trail-in-nepal|food on the trail]].",
              "Carry a stand-by treatment for stomach illness — see [[post:stomach-illness-on-a-nepal-trek-medication-and-recovery|stomach illness on a trek]].",
            ],
          },
        ],
      },
      {
        h2: "Getting Vaccinated in Nepal, and Paperwork",
        blocks: [
          { p: "Travel-medicine clinics in Kathmandu stock most travel vaccines, including rabies, and can start or complete a course. That is useful for long-stay visitors and for anyone bitten by an animal. It is not a substitute for being vaccinated at home: protection takes weeks to develop, and your first days in the country are when you are most likely to meet a contaminated meal." },
          {
            ul: [
              "<strong>Carry your vaccination record</strong> — a photo on your phone is enough.",
              "<strong>A yellow fever certificate</strong> is needed only if you arrive from, or have transited through, a country with yellow fever risk.",
              "<strong>Entry health rules can change.</strong> Check current requirements shortly before you travel.",
              "<strong>Tell your trek operator</strong> if you have chosen not to have a recommended vaccine, so the guide knows what a bite or an illness would mean.",
            ],
          },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks includes health support with every trek. We do not give vaccines or medical advice — that is for your travel clinic — but we give you what the clinic needs to advise you properly, and we deal with the practical side in Nepal." },
          {
            ul: [
              "<strong>Before you travel:</strong> a clear description of your route — regions, altitudes, how remote, whether you pass through the lowlands, and the season — so the clinic can recommend the right vaccines.",
              "<strong>On arrival:</strong> a health briefing that covers dogs, monkeys, food and water, in practical terms.",
              "<strong>On the trek:</strong> guides who know the wound-washing procedure for animal bites and carry antiseptic in the group medical kit.",
              "<strong>If you are bitten:</strong> immediate arrangements to reach a clinic in Kathmandu or Pokhara that stocks rabies vaccine, including helicopter evacuation through your insurer where needed.",
              "<strong>After the trek:</strong> help arranging a clinic appointment for follow-up doses or any symptoms before you fly home.",
            ],
          },
          { p: "If you are unsure what your itinerary involves, <a href=\"/contact\">ask us</a> before your clinic appointment and we will send the details." },
        ],
      },
    ],
    faqs: [
      { question: "Are any vaccines compulsory for Nepal?", answer: "No, not for most travellers. The only entry requirement is a yellow fever certificate if you arrive from a country with yellow fever risk. Several vaccines are strongly recommended for your own protection." },
      { question: "Which vaccines do I need for trekking in Nepal?", answer: "Most travel clinics advise being up to date with routine vaccines, including tetanus, plus hepatitis A and typhoid. Rabies and hepatitis B are often recommended for trekkers, and Japanese encephalitis for long stays in the lowlands." },
      { question: "How long before my trek should I get vaccinated?", answer: "Six to eight weeks is ideal, because some courses need several doses and most vaccines take about two weeks to work. If you have less time, go anyway — single-dose vaccines still give protection." },
      { question: "Do I really need a rabies vaccine for Nepal?", answer: "It is worth serious consideration. Rabies is present throughout Nepal, and on a trek you may be days from a clinic. Being vaccinated beforehand means you do not need immunoglobulin after a bite — which is scarce — and need only two booster doses." },
      { question: "Is there malaria on Nepal's trekking routes?", answer: "No. Malaria risk is limited to parts of the southern lowlands and is low. There is none in Kathmandu, Pokhara or the mountains. Ask your clinic for advice if your trip includes Chitwan, Bardia or Lumbini." },
      { question: "Is dengue a risk in Nepal?", answer: "Yes, in the lowlands and increasingly in Kathmandu and Pokhara, mainly from the monsoon until November. There is no risk at trekking altitudes. Prevention is avoiding mosquito bites, including during the day." },
      { question: "What should I do if a dog or monkey bites me?", answer: "Wash the wound with soap and running water for fifteen minutes, apply antiseptic, and get to a clinic in Kathmandu or Pokhara for rabies treatment as soon as possible. Do this even if you have been vaccinated, and tell your guide and your insurer." },
      { question: "Can I get vaccines in Kathmandu?", answer: "Yes. Travel-medicine clinics in Kathmandu stock most vaccines, including rabies. But protection takes time to develop, so it is much better to be vaccinated at home before you travel." },
      { question: "Do I need a Japanese encephalitis vaccine?", answer: "Not for a mountains-only trek. It is advised for long stays or extended rural travel in the southern lowlands during and after the monsoon. Your travel clinic will advise based on your itinerary." },
      { question: "Do you help with health preparation?", answer: "Yes. We send the route, altitude and season details your travel clinic needs, give a health briefing on arrival, and arrange clinic visits and evacuation in Nepal if needed. Vaccines and prescriptions themselves come from your own clinic." },
    ],
    relatedTreks: [
      "chitwan-national-park-tour-4-days",
      "bardia-national-park-tour-4-days",
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "upper-dolpo-trek",
    ],
    tripsNote: "From lowland parks to mountain treks — the vaccines worth discussing differ with where you go.",
    relatedPosts: [
      "pre-and-post-trek-medication-guide-for-nepal",
      "pre-trek-medical-check-up-for-nepal",
      "stomach-illness-on-a-nepal-trek-medication-and-recovery",
      "travel-insurance-for-trekking-in-nepal",
    ],
    tags: ["vaccinations", "rabies", "travel health", "trekking health", "nepal trekking"],
    meta: {
      title: "Vaccinations for Trekking in Nepal: What to Get and When",
      description: "Which vaccines to get for a Nepal trek and when: hepatitis A, typhoid, rabies and more, plus what malaria, dengue and Japanese encephalitis mean for trekkers.",
      keywords: "vaccinations for Nepal, Nepal travel vaccines, rabies vaccine Nepal trekking, malaria Nepal trekking, typhoid hepatitis A Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "pre-trek-medical-check-up-for-nepal",
    title: "Pre-Trek Medical Check-Up: What to Ask Your Doctor Before Nepal",
    cluster: "health",
    date: "2027-12-26",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-04-namche-bazaar-from-hotel-everest-view-trail",
      alt: "Namche Bazaar in the Khumbu seen from the trail to Hotel Everest View, Nepal.",
    },
    excerpt:
      "Most doctors have never been above 3,000 m. How to brief yours properly before a Nepal trek: who needs a check-up, what to tell them, the questions to ask, the tests worth considering, and the dental and foot checks nobody mentions.",
    intro: [
      { p: "A pre-trek check-up is only as good as the information you bring to it. Tell a doctor you are going on a walking holiday and you will get a cheerful nod. Tell them you will sleep at 5,160 m, eight days' walk from a road, where the only way out is a helicopter that flies in good weather — and you will get a very different, far more useful conversation." },
      { p: "Few doctors have specialist knowledge of altitude, and they do not need it. What they need from you is the facts of the trip. What you need from them is an honest assessment of whether any condition you have changes the plan, and the prescriptions to go with it. This guide helps you run that appointment." },
      { p: "This article is general information for trip planning, not medical advice." },
    ],
    sections: [
      {
        h2: "Who Needs a Check-Up",
        blocks: [
          { p: "A healthy adult under 50 with no medical conditions, heading for a moderate trek, does not strictly need a medical. A travel clinic visit for vaccines and prescriptions is still worthwhile. A proper check-up is strongly advisable if any of these apply:" },
          {
            ul: [
              "You are over 50, or over 40 with risk factors for heart disease — smoking, high blood pressure, high cholesterol, diabetes, or a strong family history.",
              "You have any long-term condition: heart or lung disease, asthma, diabetes, epilepsy, kidney disease, a blood disorder.",
              "You take regular prescription medication.",
              "You have had altitude sickness before, particularly fluid on the lungs (HAPE) or brain swelling (HACE).",
              "You are pregnant or planning to be.",
              "You have had surgery, a blood clot, or a serious illness in the last year.",
              "You will sleep above 4,500 m, cross a 5,000 m pass, or climb a trekking peak.",
              "Your route is remote, with no road or airstrip for many days.",
              "You have done very little exercise recently.",
            ],
          },
          { p: "Go six to eight weeks before departure, so there is time for tests, vaccines and a trial of any new medication." },
        ],
      },
      {
        h2: "What to Tell Your Doctor",
        blocks: [
          { p: "Bring the itinerary. These are the facts that matter, with the numbers for three common routes as an example." },
          {
            table: {
              head: ["Fact", "[[trek:poonhill-trek|Poon Hill]]", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "[[trek:everest-base-camp-trek|Everest Base Camp]]"],
              rows: [
                ["Maximum altitude", "3,210 m", "4,130 m", "5,545 m at Kala Patthar"],
                ["Highest sleeping altitude", "About 2,870 m", "4,130 m", "About 5,160 m"],
                ["Nights above 3,000 m", "None", "About three", "About nine"],
                ["Walking per day", "4 to 6 hours", "5 to 7 hours", "5 to 7 hours"],
                ["Days from a road", "One", "Two to three", "Reached by mountain flight"],
                ["Evacuation", "Jeep track nearby", "Helicopter", "Helicopter"],
                ["Night temperatures at the top", "Around freezing", "Down to about -10°C", "Down to about -15°C or colder"],
              ],
              note: "Approximate figures for the standard itineraries. We send the exact profile for your trek on request.",
            },
          },
          {
            ul: [
              "<strong>The air:</strong> at 5,000 m there is roughly half the oxygen available at sea level.",
              "<strong>The exertion:</strong> sustained, moderate effort for many consecutive days, with a pack of 5 to 8 kg.",
              "<strong>The remoteness:</strong> basic lodges, no doctor, limited pharmacy, and evacuation that depends on weather.",
              "<strong>Everything you take:</strong> prescription drugs, over-the-counter medicines, supplements and contraception.",
            ],
          },
        ],
      },
      {
        h2: "Questions to Ask",
        blocks: [
          {
            ol: [
              "Is there anything in my history that makes sleeping at this altitude inadvisable?",
              "Do any of my regular medicines behave differently at altitude, in the cold, or with dehydration?",
              "Should I take acetazolamide? If so, what dose, when do I start, and can I try it at home first?",
              "I have been told I may be allergic to sulfa drugs — does that rule acetazolamide out for me?",
              "Will you prescribe a stand-by antibiotic for severe diarrhoea, with written instructions on when to use it?",
              "Which painkillers are safe for me — in particular, can I take anti-inflammatories?",
              "What vaccines do I need, and is rabies vaccination sensible for this route?",
              "If my condition flares up on the trek, what should I do first, and at what point should I descend?",
              "Can you give me a letter listing my conditions and medicines by their generic names?",
              "Is there anything I should tell my insurer?",
            ],
          },
          { p: "Write the answers down. The detail on altitude medication is in [[post:diamox-for-trekking-in-nepal|our guide to Diamox]], and the general picture in the [[post:pre-and-post-trek-medication-guide-for-nepal|pre- and post-trek medication guide]]." },
        ],
      },
      {
        h2: "Tests Worth Considering",
        blocks: [
          { p: "No test predicts who will get altitude sickness. Fit people get it; unfit people sometimes do not. What tests can do is reveal a problem that altitude would make worse." },
          {
            table: {
              head: ["Check", "Who should consider it", "Why it matters on a trek"],
              rows: [
                ["Blood pressure", "Everyone over 40; anyone on treatment", "Blood pressure often rises in the first days at altitude"],
                ["Resting ECG, and an exercise test if advised", "Over 50; cardiac risk factors; chest symptoms on exertion", "Altitude and exertion both increase the heart's workload"],
                ["Full blood count and iron stores", "Women; vegetarians; anyone tired or pale", "Anaemia and low iron reduce oxygen-carrying capacity and slow acclimatisation"],
                ["Blood sugar and HbA1c", "Diabetics; those at risk", "Control needs to be stable before a long trek"],
                ["Kidney function", "Kidney disease; regular anti-inflammatory use; before acetazolamide if advised", "Dehydration and some trek medicines stress the kidneys"],
                ["Lung function", "Asthma, chronic lung disease, long-term smokers", "Establishes a baseline and checks control"],
                ["Thyroid function", "Known thyroid disease", "Affects cold tolerance and energy"],
                ["Pregnancy test", "If there is any possibility", "Changes advice on altitude, vaccines and medication"],
              ],
            },
          },
          { p: "If iron stores are low, six to eight weeks is enough time to start correcting them — one of the few things you can do before a trek that genuinely helps your body adapt." },
        ],
      },
      {
        h2: "Conditions That Need Extra Planning",
        blocks: [
          { p: "Very few conditions rule out trekking altogether. Many change which trek you should choose and what you carry." },
          {
            ul: [
              "<strong>Well-controlled asthma, diabetes and high blood pressure</strong> are all compatible with trekking, with preparation.",
              "<strong>Stable heart disease</strong> needs a cardiologist's opinion and usually a lower route.",
              "<strong>Previous HAPE or HACE</strong> makes a recurrence more likely; a slower ascent and preventive medication are normally advised.",
              "<strong>Pregnancy:</strong> most guidance advises against sleeping at high altitude, and remoteness from obstetric care is the bigger issue.",
              "<strong>Sickle cell disease, severe lung disease, unstable angina and recent blood clots</strong> are generally considered reasons not to go high.",
            ],
          },
          { p: "Each of these is covered in [[post:trekking-in-nepal-with-a-medical-condition|trekking in Nepal with a medical condition]]. Choosing a route with a lower maximum altitude and quick road access — see [[post:nepal-trek-difficulty-grades-explained|trek difficulty grades]] — solves many problems before they start." },
          {
            figure: {
              image: "mardi-treks/poonhill-trek/poonhill-trek-00-landscape-view-of-poon-hill",
              alt: "View of the Annapurna and Dhaulagiri ranges from Poon Hill, Nepal.",
              caption: "Poon Hill at 3,210 m — full Himalayan views with no night above 3,000 m, and the route we most often suggest when a medical condition calls for caution.",
            },
          },
        ],
      },
      {
        h2: "Teeth, Eyes and Feet: The Unglamorous Checks",
        blocks: [
          { h3: "Teeth" },
          { p: "See a dentist a month or two before you go. A loose filling or a low-grade infection that is no trouble at home can flare into severe pain at altitude, and there is no dentistry on the trail — only painkillers and a long walk out. This is one of the commonest avoidable reasons for abandoning a trek." },
          { h3: "Eyes" },
          {
            ul: [
              "<strong>Glasses:</strong> bring a spare pair and your prescription.",
              "<strong>Contact lenses:</strong> usable, but hygiene is difficult with cold water and dusty air. Bring daily disposables, hand sanitiser and glasses as a back-up. Do not sleep in lenses.",
              "<strong>Sunglasses:</strong> category 3 or 4 with side protection. Snow blindness is painful and entirely preventable.",
              "<strong>Previous eye surgery:</strong> mention it. Some older forms of corrective surgery cause vision changes at altitude.",
            ],
          },
          { h3: "Feet" },
          {
            ul: [
              "Deal with ingrown toenails, verrucas and fungal infections before you travel.",
              "Have your boots properly worn in — at least 50 km — before the trek, in the socks you will wear.",
              "If you use orthotics, bring them and a spare pair.",
            ],
          },
          { p: "Foot care on the trail is in [[post:knee-pain-blisters-and-painkillers-on-a-nepal-trek|knee pain, blisters and painkillers]]." },
        ],
      },
      {
        h2: "Paperwork to Bring",
        blocks: [
          {
            ul: [
              "<strong>A doctor's letter</strong> listing conditions, medicines by generic name and dose, and allergies.",
              "<strong>Copies of prescriptions</strong> — needed for customs if you carry controlled medicines, and for replacing anything lost.",
              "<strong>Your insurance certificate</strong> and the 24-hour emergency number, with pre-existing conditions declared.",
              "<strong>Blood group</strong>, if you know it.",
              "<strong>An emergency contact</strong> at home.",
              "<strong>Photos of all of it</strong> on your phone, and a paper copy in your day pack.",
            ],
          },
          { p: "Give your guide a copy of the medical letter on day one. In an emergency it is the first thing a doctor or a helicopter medic will ask for." },
        ],
      },
      {
        h2: "We Provide This Service: Pre- and Post-Trek Health Support",
        blocks: [
          { p: "Green Compass Treks supports the medical side of your trip from booking to departure home. We are not doctors and we do not assess fitness to trek — but we make it easy for your doctor to do so, and we act on what they say." },
          {
            ul: [
              "<strong>An altitude profile for your doctor:</strong> day-by-day sleeping altitudes, maximum height, daily walking hours and evacuation options for your exact itinerary.",
              "<strong>Your medical details handled in confidence:</strong> tell us about conditions, medication and allergies when you book, and they go only to the people planning your trek and to your guide.",
              "<strong>Route advice</strong> when a condition calls for a lower maximum altitude, extra acclimatisation days or quick road access — and an honest answer if we think a route is unwise.",
              "<strong>A pre-trek briefing</strong> in Kathmandu or Pokhara where your guide goes through your medication and what to do if a condition flares.",
              "<strong>On the trek:</strong> a first-aid-trained guide with a medical kit and, on high routes, a pulse oximeter and emergency oxygen.",
              "<strong>After the trek:</strong> help arranging a clinic appointment if you have any symptoms before flying home.",
            ],
          },
          { p: "<a href=\"/contact\">Send us</a> your intended route and dates and we will reply with the profile to take to your appointment." },
        ],
      },
    ],
    faqs: [
      { question: "Do I need a medical certificate to trek in Nepal?", answer: "No. There is no official requirement for standard treks. Some insurers and expedition operators ask for one, particularly for older trekkers or climbing trips. A check-up is for your own safety rather than for paperwork." },
      { question: "Can a test predict whether I will get altitude sickness?", answer: "No. There is no reliable test. Fitness, age and sex do not predict it either. The best predictor is how you have responded to altitude before, and the best protection is a gradual ascent." },
      { question: "What is the upper age limit for trekking in Nepal?", answer: "There is none. People in their seventies trek to Everest Base Camp. What matters is health, fitness and a sensible itinerary. Over 50, or over 40 with heart risk factors, a check-up beforehand is strongly advised." },
      { question: "How long before the trek should I see my doctor?", answer: "Six to eight weeks. That allows time for any tests, for vaccine courses, and for trying new medication such as acetazolamide at home before you rely on it at altitude." },
      { question: "What should I tell my doctor about the trek?", answer: "The maximum altitude, the highest sleeping altitude and number of nights above 3,000 m, daily walking hours, how many days you will be from a road, and that evacuation is by helicopter. Bring the written itinerary." },
      { question: "Should I see a dentist before trekking?", answer: "Yes. Dental pain is a common and avoidable cause of abandoned treks. Faulty fillings and low-grade infections can become very painful at altitude, and there is no dental care on the trail." },
      { question: "Can I trek with high blood pressure?", answer: "Usually, if it is well controlled. Blood pressure tends to rise in the first days at altitude, so your doctor may want to review your medication and may suggest you monitor it. Do not stop treatment for the trek." },
      { question: "Is it safe to trek while pregnant?", answer: "Take specialist advice. Most guidance advises against sleeping at high altitude during pregnancy, and remote routes are far from obstetric care. Low-altitude walks near Pokhara or Kathmandu are a better choice." },
      { question: "Do I need a doctor's letter for my medication?", answer: "It is strongly recommended. A letter listing your conditions and medicines by generic name helps at customs, lets a pharmacist replace lost medication, and gives any treating doctor the information quickly." },
      { question: "Do you ask for medical information when I book?", answer: "Yes. The booking form has space for medical conditions, medication and allergies. We treat what you tell us as confidential and use it to advise on the route and brief your guide. We also send an altitude profile of your itinerary to take to your doctor." },
    ],
    relatedTreks: [
      "abc-trek-nepal",
      "everest-base-camp-trek",
      "poonhill-trek",
      "annapurna-base-camp-trek",
      "everest-view-trek",
    ],
    tripsNote: "Three altitude bands to discuss with your doctor — and the Everest View trek for Khumbu scenery without the highest nights.",
    relatedPosts: [
      "trekking-in-nepal-with-a-medical-condition",
      "pre-and-post-trek-medication-guide-for-nepal",
      "vaccinations-for-trekking-in-nepal",
      "nepal-trek-difficulty-grades-explained",
    ],
    tags: ["medical check-up", "trekking health", "pre-trek preparation", "altitude", "nepal trekking"],
    meta: {
      title: "Pre-Trek Medical Check-Up: What to Ask Your Doctor",
      description: "How to prepare for a medical check-up before a Nepal trek: who needs one, what to tell your doctor, ten questions to ask, useful tests, and dental and foot checks.",
      keywords: "pre trek medical check up, doctor before trekking Nepal, fitness to trek, altitude medical advice, trekking health check",
    },
  },
];
