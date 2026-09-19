import type { BlogContent } from "./build";

export const planningD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "guides-and-porters-in-nepal-rules-and-costs",
    title: "Guides and Porters in Nepal: Rules, Costs, and What They Actually Do",
    cluster: "planning",
    date: "2026-02-06",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-04-shova-kumari-lama-1",
      alt: "A Langtang resident on the valley trail, Langtang Valley trek, Nepal.",
    },
    excerpt:
      "Nepal has required trekkers in protected areas to walk with a licensed guide since April 2023. Here is what that rule means in practice, what a guide and a porter each do, what they cost, how they are paid and insured, and how to be a good employer on the trail.",
    intro: [
      { p: "Independent teahouse trekking in Nepal was a tradition for forty years. On 1 April 2023 it effectively ended: the Nepal Tourism Board now requires trekkers in national parks and protected areas to be accompanied by a licensed guide. Enforcement varies by region, but the rule is real and checkpoints can turn people back." },
      { p: "Beyond the regulation, there is a practical case and an economic one. A good guide changes a trek from a walk to an understood landscape, and the wages paid to guides and porters are one of the main ways trekking money reaches mountain households rather than city agencies." },
    ],
    sections: [
      {
        h2: "The Current Rules",
        blocks: [
          {
            ul: [
              "<strong>National parks and protected areas:</strong> a licensed guide is required. That covers Annapurna, Sagarmatha, Langtang, Manaslu, Makalu Barun, Kanchenjunga, Shey Phoksundo, and Rara.",
              "<strong>Restricted areas:</strong> a licensed guide and a registered agency have always been mandatory, and the permit itself cannot be issued without them. This covers Upper Mustang, Dolpo, Manaslu, Tsum Valley, Nar Phu, Kanchenjunga, and Humla.",
              "<strong>Minimum group size in restricted areas:</strong> two trekkers, which is a permit condition rather than a preference.",
              "<strong>Trekking peaks:</strong> a licensed climbing guide is required, separately from a trekking guide licence.",
              "<strong>Outside protected areas:</strong> short walks on the Kathmandu Valley rim and in the middle hills remain open to independent walkers.",
            ],
          },
          { p: "A licensed guide holds a Nepal Academy of Tourism and Hotel Management trekking guide licence, which means assessed first aid, altitude illness recognition, and route knowledge. A friend of a friend in Thamel with good English is not the same thing, and in a medical situation the difference is everything." },
        ],
      },
      {
        h2: "What a Guide Does",
        blocks: [
          { p: "The job is much broader than route-finding — on a marked trail like Annapurna Base Camp you could navigate yourself. What you are actually paying for:" },
          {
            ul: [
              "<strong>Altitude management.</strong> Twice-daily oxygen saturation checks above 4,000 m, pace control, and the authority to call a rest day or a descent.",
              "<strong>Lodge bookings.</strong> Calling ahead each morning, which in October is the difference between a room and a dining-room floor at 4,900 m.",
              "<strong>Medical response.</strong> First aid, emergency medication, and the chain of calls that launches a helicopter.",
              "<strong>Permits and checkpoints.</strong> Carrying and presenting group paperwork at every post.",
              "<strong>Interpretation.</strong> What the shrine means, who farms which field, which peak is which, what the lodge family is cooking.",
              "<strong>Language.</strong> Translation with lodge owners, drivers, and health posts, including in Tibetan-dialect villages where Nepali is a second language.",
            ],
          },
          { p: "On our trips the guide is local to the region wherever possible — a Sherpa guide in the Khumbu, a Gurung or Magar guide in Annapurna, a Tamang guide in Langtang. That is not decoration; they know which lodge family to call and which slope slides after snow." },
        ],
      },
      {
        h2: "What a Porter Does, and the Weight Question",
        blocks: [
          { p: "A porter carries your duffel so that you walk with a daypack. The convention on our trips is <strong>one porter shared between two trekkers, carrying up to 20 kg</strong> — which is why each trekker's duffel must stay under 15 kg." },
          { p: "Porter welfare is a genuine issue in Nepal's trekking industry, and it is worth knowing what good practice looks like, whoever you book with:" },
          {
            ul: [
              "Loads capped at 20–25 kg, not the 40 kg or more some independent arrangements involve.",
              "Proper footwear, a jacket, and sunglasses supplied for high passes and snow.",
              "Insurance for every member of staff, including porters, covering medical treatment and evacuation.",
              "Food and lodging paid by the operator, not deducted from wages.",
              "The same acclimatisation profile as the group, and the right to turn back sick.",
            ],
          },
          {
            table: {
              head: ["Role", "Typical daily rate", "What it covers"],
              rows: [
                ["Licensed trekking guide", "USD 30–40", "Wage, insurance, food, lodging, equipment"],
                ["Assistant guide", "USD 25–30", "Added on groups above about eight trekkers"],
                ["Porter", "USD 25–35", "Wage, insurance, food, lodging; up to 20 kg"],
                ["Porter-guide", "USD 28–35", "Carries a lighter load and guides — suits solo trekkers on easy routes"],
                ["Licensed climbing guide", "USD 60–120", "Technical leadership on trekking peaks, plus group climbing equipment"],
              ],
            },
          },
          { p: "On our trips, guide costs are inside the package price. Porters are offered as an add-on priced per porter for the whole trek, because not everyone wants one — the trip page shows the exact figure, calculated from the number of days the porter is engaged." },
        ],
      },
      {
        h2: "Tipping",
        blocks: [
          { p: "Tipping is customary and genuinely expected, but it is not a substitute for a wage — our staff are paid properly whether or not you tip." },
          { p: "The convention that works: pool roughly <strong>USD 10 to 15 per trekker per day</strong> for the whole crew, hand it to the guide on the final trail evening in a single envelope, and let them divide it between guide, assistant, and porters by the trade's own split. Doing it as a group avoids both awkwardness and inequity between staff." },
          { p: "Useful gifts at the end of a trek, if you want to give something beyond money: gear you will not use again — a headlamp, gloves, a fleece, sunglasses, boots that fit. These are worth real money on the trail." },
        ],
      },
      {
        h2: "Being a Good Employer on the Trail",
        blocks: [
          {
            ol: [
              "Keep your duffel under the weight limit. Every extra kilo is carried by a person up a hill.",
              "Pack your duffel in the evening, not while the porter waits in the cold at 6 a.m.",
              "Do not ask your porter to go ahead to secure a room and then overtake them — they need the same acclimatisation you do.",
              "Eat with your guide rather than treating them as staff at a separate table. Most of what you learn on a trek happens over dinner.",
              "Ask before photographing staff, as you would anyone.",
              "If a porter is struggling or unwell, tell the guide immediately. Porters are often reluctant to stop.",
              "Pay for the extra day if weather forces one. A crew cannot absorb the cost of your delay.",
            ],
          },
          { p: "If a guide's judgement and your plan conflict at altitude, the guide's judgement wins. That is what you hired, and it is the clause in the arrangement that occasionally saves someone's life." },
        ],
      },
    ],
    faqs: [
      { question: "Is a guide mandatory for trekking in Nepal?", answer: "In national parks and protected areas, yes — the Nepal Tourism Board has required a licensed guide since 1 April 2023. In restricted areas such as Upper Mustang, Manaslu, Nar Phu and Dolpo, a licensed guide and a registered agency have always been mandatory as a permit condition. Short walks outside protected areas remain open to independent walkers." },
      { question: "What is the difference between a guide, a porter, and a porter-guide?", answer: "A guide leads the trek, manages altitude and safety, books lodges, and carries nothing but their own kit. A porter carries your duffel and does not guide. A porter-guide does both with a lighter load, which can suit a solo trekker on a straightforward route but is not the right choice for a high pass." },
      { question: "How much should I tip my guide and porter?", answer: "Pool around USD 10 to 15 per trekker per day for the whole crew and give it to the guide on the last trail evening to distribute. On a 12-day trek with two trekkers that is roughly USD 240 to 360 for the team, which is a normal and well-received amount." },
      { question: "How much weight can a porter carry?", answer: "On our trips, up to 20 kg, with one porter generally shared between two trekkers — so your duffel must be under 15 kg. Loads well above 25 kg are a welfare problem, and an operator who shrugs at 40 kg loads is telling you something important about how they run trips." },
      { question: "Are your guides and porters insured?", answer: "Yes. Every member of staff on our trips carries insurance covering medical treatment and evacuation, and their food and lodging is paid by us rather than deducted from wages. This is one of the hidden differences between quotes that otherwise look similar." },
      { question: "Can I request a female guide?", answer: "Yes, and we encourage it — Nepal now has a growing number of licensed female guides, particularly in the Annapurna and Langtang regions. Ask at the enquiry stage so we can match availability to your dates, since demand often exceeds supply in peak season." },
      { question: "Do I need a porter, or can I carry my own pack?", answer: "Plenty of trekkers carry their own kit, particularly on shorter routes. On a two-week high-altitude trek, carrying 15 kg rather than 6 kg changes how the second week feels, and hiring a porter puts money directly into a mountain household. It is offered as an add-on rather than forced into the price." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "manaslu-circuit-trek",
      "annapurna-base-camp-trek",
      "upper-mustang-trek",
    ],
    tripsNote: "Every trip we run includes a licensed guide; porters are available as an add-on on each trip page.",
    relatedPosts: [
      "nepal-trekking-permits-explained",
      "how-much-does-trekking-in-nepal-cost",
      "responsible-trekking-in-nepal",
      "solo-female-trekking-in-nepal",
    ],
    tags: ["trekking guide", "porter", "nepal trekking rules", "responsible travel"],
    meta: {
      title: "Guides and Porters in Nepal: Rules, Costs and What They Do",
      description: "Nepal's mandatory guide rule explained, plus what guides and porters actually do, daily rates, weight limits, insurance, tipping conventions and trail etiquette.",
      keywords: "Nepal guide mandatory, trekking guide cost Nepal, porter weight limit, tipping guide Nepal, licensed trekking guide",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-visa-on-arrival-guide",
    title: "Nepal Visa on Arrival: A Step-by-Step Guide for Trekkers",
    cluster: "planning",
    date: "2026-02-10",
    hero: {
      image: "mardi-treks/seven-world-heritage-kathmandu-day-tour/seven-world-heritage-kathmandu-day-tour-00-kathmandu-durbar-square-basantapur",
      alt: "Kathmandu Durbar Square at Basantapur, Kathmandu, Nepal.",
    },
    excerpt:
      "Most nationalities can get a Nepal tourist visa on arrival at Kathmandu airport in twenty minutes. Here is the process step by step, the current fees, the nationalities that must apply in advance, and how to extend a visa if your trek runs long.",
    intro: [
      { p: "Nepal's visa system is genuinely straightforward, which is a relief after the paperwork involved in restricted-area trekking permits. Most visitors arrive at Tribhuvan International Airport in Kathmandu, fill in a form at a kiosk, pay in cash, and walk out with a tourist visa inside half an hour." },
      { p: "The details below are what save you time in the queue and stop you buying the wrong visa length — the most common and most annoying mistake, because a trek that overruns by two days against a 15-day visa turns into an immigration office visit in Kathmandu." },
    ],
    sections: [
      {
        h2: "Visa Options and Fees",
        blocks: [
          {
            table: {
              head: ["Visa", "Fee (USD)", "Entries", "Suits"],
              rows: [
                ["15 days", "30", "Multiple", "Short treks — Poon Hill, Mardi Himal, Langtang Valley, a tour plus a short walk"],
                ["30 days", "50", "Multiple", "Most treks — Everest Base Camp, Annapurna Circuit, Manaslu, Gokyo"],
                ["90 days", "125", "Multiple", "Long expeditions, Dolpo and Kanchenjunga, or a trek plus extended travel"],
              ],
              note: "Fees are set by the Department of Immigration and revised occasionally. Pay in cash — US dollars are simplest.",
            },
          },
          { p: "Buy one length longer than your itinerary strictly needs. The USD 20 step from 15 to 30 days is the cheapest insurance available against a weather-delayed Lukla flight, and the visa is multiple-entry either way, which matters if you plan a side trip to Tibet, Bhutan, or India." },
        ],
      },
      {
        h2: "The Process at Kathmandu Airport",
        blocks: [
          {
            ol: [
              "<strong>Fill in the arrival form before you land</strong> if the cabin crew hand one out, or use the electronic kiosks in the arrivals hall.",
              "<strong>Use a kiosk to complete the visa application.</strong> It scans your passport, takes a photograph, and prints a receipt. There are usually several machines; if one is out of paper, move to the next.",
              "<strong>Pay at the bank counter.</strong> Cash in US dollars is simplest; euros, pounds, and several other currencies are accepted, and card payment works intermittently. Keep the receipt.",
              "<strong>Queue for the immigration desk</strong> with your passport, the kiosk receipt, and the payment receipt. The officer stamps the visa in.",
              "<strong>Collect your luggage</strong> and walk out past the arrivals barrier, where our representative will be waiting with a name board for anyone on a booked trip.",
            ],
          },
          { p: "Total time is typically 20 to 45 minutes, longer if two wide-body flights land together. Two practical notes: carry a pen, and carry two passport photographs as backup in case the kiosk camera is down." },
        ],
      },
      {
        h2: "Applying in Advance",
        blocks: [
          { p: "You can also apply online before travelling at the Department of Immigration website, which generates a pre-arrival confirmation valid for 15 days. It saves a few minutes at the kiosk but you still queue and still pay on arrival, so it is optional for most travellers." },
          { p: "Some nationalities are <strong>not eligible for visa on arrival</strong> and must apply at a Nepali diplomatic mission before travelling. This list has included Afghanistan, Cameroon, Ghana, Iraq, Liberia, Nigeria, Somalia, Syria, Palestine, Ethiopia, Swaziland, and Zimbabwe, and it changes — check with your nearest Nepali embassy well ahead of booking flights." },
          { p: "Two special cases worth knowing. Indian nationals do not need a visa for Nepal, but do need photographic identity documents — a passport, a voter ID card, or equivalent. Chinese and most SAARC nationals receive a gratis visa, free of charge, though the rest of the process is unchanged." },
        ],
      },
      {
        h2: "Entry Requirements Checklist",
        blocks: [
          {
            ul: [
              "A passport valid for at least six months from your date of entry, with a blank page for the stamp.",
              "The visa fee in cash, in clean notes. Torn or heavily marked dollar bills are sometimes refused.",
              "Two passport-sized photographs as backup — you will need more anyway for trekking permits.",
              "Your hotel address in Kathmandu for the arrival form. We send this with your trip confirmation.",
              "An onward or return ticket, which is rarely checked but occasionally is.",
              "No vaccination certificate is currently required for entry, though hepatitis A, typhoid, and tetanus are sensibly up to date for a trekking trip.",
            ],
          },
        ],
      },
      {
        h2: "Extending a Visa in Nepal",
        blocks: [
          { p: "If a trek runs long or you decide to stay, extensions are handled at the Department of Immigration in Kathmandu at Kalikasthan, or at the regional office in Pokhara. Budget a morning. The process is an online application followed by an in-person visit with your passport and the fee." },
          { p: "Extensions cost roughly USD 3 per day with a 15-day minimum, plus a small service charge, and a tourist visa can be extended to a maximum of 150 days in a single calendar year. Overstaying carries a daily fine and an unpleasant hour at the airport on departure, so if your return flight is tight and a pass is snowed in, tell your guide — we will handle the extension while you are still walking out." },
          { p: "One planning note specific to trekkers: your visa length must cover the whole trip including buffer days, not just the trek. If your [[trek:everest-base-camp-trek|Everest Base Camp]] itinerary is 14 days and you arrive two days early with two spare days for a weather-delayed Lukla flight, a 15-day visa is already too short." },
        ],
      },
    ],
    faqs: [
      { question: "Can I get a Nepal visa on arrival?", answer: "Most nationalities can, at Kathmandu airport and at the main land borders. A small number of countries must apply at a Nepali embassy in advance — the list changes, so check with your nearest mission before booking flights if you are unsure." },
      { question: "How much does a Nepal tourist visa cost?", answer: "USD 30 for 15 days, USD 50 for 30 days, and USD 125 for 90 days, all multiple-entry. Pay in cash on arrival; US dollars are the simplest option. Fees are set by the Department of Immigration and revised from time to time." },
      { question: "Which visa length should I buy for a trek?", answer: "One step longer than your itinerary needs. A 14-day trek plus arrival and buffer days does not fit comfortably inside a 15-day visa, and the 30-day visa costs only USD 20 more. If your trek depends on a Lukla or Jomsom flight, this is not a close decision." },
      { question: "How long does the visa process take at the airport?", answer: "Usually 20 to 45 minutes — kiosk application, payment at the bank counter, then the immigration queue. It takes longer when several international flights land together, typically in the late evening." },
      { question: "Do I need passport photos?", answer: "The airport kiosks photograph you, so they are not strictly required for the visa. Bring two to four anyway: trekking permits, national park tickets, and climbing paperwork all use them, and getting photos taken in Kathmandu is an errand you do not need." },
      { question: "Can I extend my visa if my trek overruns?", answer: "Yes, at the Department of Immigration in Kathmandu or the regional office in Pokhara, for roughly USD 3 per day with a 15-day minimum. A tourist visa can be extended up to 150 days per calendar year. If a delay is our doing or the weather's, tell your guide and we will start the paperwork before you are back." },
      { question: "Do children need a visa for Nepal?", answer: "Children under ten are issued a gratis visa, free of charge, but they still need their own passport and still go through the same kiosk and immigration process. Bring their photographs as well as your own." },
    ],
    relatedTreks: [
      "kathmandu-valley-tour",
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
    ],
    tripsNote: "Trips that start in Kathmandu, where our representative meets you at the arrivals barrier.",
    relatedPosts: [
      "arriving-in-kathmandu-first-48-hours",
      "nepal-trekking-permits-explained",
      "domestic-flights-in-nepal-for-trekkers",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["nepal visa", "travel documents", "trip planning", "kathmandu airport"],
    meta: {
      title: "Nepal Visa on Arrival: Step-by-Step Guide for Trekkers",
      description: "How to get a Nepal tourist visa on arrival — fees, the airport process step by step, nationalities that must apply in advance.",
      keywords: "Nepal visa on arrival, Nepal tourist visa cost, Kathmandu airport visa, extend Nepal visa, Nepal entry requirements",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "domestic-flights-in-nepal-for-trekkers",
    title: "Domestic Flights in Nepal: Lukla, Pokhara, Jomsom, and Delays",
    cluster: "planning",
    date: "2026-02-13",
    hero: {
      image: "mardi-treks/everest-view-trek/everest-view-trek-05-lukla-airport-during-everest-base-camp-trek-0092",
      alt: "Lukla airstrip on the Everest Base Camp trek route, Nepal.",
    },
    excerpt:
      "Several of Nepal's best treks begin with a short flight into the mountains. This guide covers the main routes, baggage limits, why Lukla flights move to Ramechhap in peak season, how delays actually work, and the buffer days that protect your trip home.",
    intro: [
      { p: "Nepal's road network stops where the serious mountains begin, so four or five of the country's best treks start with a 20 to 45 minute flight in a small aircraft. These flights are safe when operated properly, spectacular in clear weather, and almost completely at the mercy of cloud." },
      { p: "Understanding how they work is one of the highest-value things you can do when planning a trek, because a missed flight is the single most common way a Nepal itinerary goes wrong." },
    ],
    sections: [
      {
        h2: "The Flights That Matter to Trekkers",
        blocks: [
          {
            table: {
              head: ["Route", "Flight time", "Serves", "Reliability"],
              rows: [
                ["Kathmandu or Ramechhap – Lukla", "25–35 min", "Everest Base Camp, Gokyo, Three Passes, Island and Mera Peak", "Weather-dependent, morning only"],
                ["Kathmandu – Pokhara", "25 min", "Annapurna and Mustang treks", "Very reliable, frequent"],
                ["Pokhara – Jomsom", "20 min", "Upper and Lower Mustang, Muktinath, Dolpo link", "Morning only, strong midday winds"],
                ["Nepalgunj – Juphal", "35 min", "Lower and Upper Dolpo, Shey Phoksundo", "Limited frequency, weather-dependent"],
                ["Kathmandu – Bhadrapur or Biratnagar", "45–50 min", "Kanchenjunga, Makalu, Red Panda Trail", "Reliable jet and turboprop services"],
                ["Kathmandu – Tumlingtar", "35 min", "Makalu Base Camp, Mundum Trail", "Small aircraft, moderate reliability"],
                ["Kathmandu – Nepalgunj or Bharatpur", "45–50 min", "Bardia, Chitwan, far-west treks", "Reliable"],
              ],
            },
          },
          { p: "Mountain flights all operate in the morning for the same reason: valley winds build after about 11 a.m. and turn a demanding approach into an unsafe one. If you are told your flight is at 6.15 a.m., that is not an inconvenience — it is the weather window." },
        ],
      },
      {
        h2: "The Lukla Flight and the Ramechhap Question",
        blocks: [
          { p: "Tenzing-Hillary Airport at Lukla sits at 2,845 m with a 527 m sloping runway against a hillside, and it is the gateway to every Everest-region trek. In the peak weeks of spring and autumn, Kathmandu's airport cannot absorb the traffic, so <strong>Lukla flights are moved to Manthali airport at Ramechhap</strong>, a four to five hour drive east of Kathmandu." },
          { p: "What that means in practice:" },
          {
            ul: [
              "A night drive or a very early start — typically leaving Kathmandu between 1 a.m. and 2 a.m. to reach Manthali for a dawn slot.",
              "A shorter, more reliable flight once you are there, at 12 to 15 minutes.",
              "An extra road day at the end of the trek on the way back.",
              "A decision to make: some trekkers choose to overnight at Ramechhap instead of driving through the night, which we can arrange.",
            ],
          },
          { p: "Whether the season you travel in uses Kathmandu or Ramechhap is confirmed a few weeks ahead, not months, so our [[trek:everest-base-camp-trek|Everest Base Camp]] briefings cover it at the pre-trek meeting. A helicopter transfer is the alternative for groups who want to avoid the drive entirely — see our [[post:everest-base-camp-helicopter-return-guide|helicopter return guide]]." },
        ],
      },
      {
        h2: "Baggage Limits",
        blocks: [
          { p: "Mountain flights are strict about weight because the aircraft are small and the altitudes are high." },
          {
            table: {
              head: ["Flight", "Checked", "Hand", "Excess"],
              rows: [
                ["Lukla (Dornier, Let L-410)", "10 kg", "5 kg", "Charged per kg, subject to space"],
                ["Jomsom, Juphal, Tumlingtar", "10 kg", "5 kg", "Charged per kg"],
                ["Kathmandu – Pokhara (jet or ATR)", "15–20 kg", "5 kg", "Standard airline excess"],
                ["Helicopter charter", "By total payload", "—", "Discussed at booking"],
              ],
            },
          },
          { p: "The 15 kg total on a Lukla flight is the real constraint on your packing, and it is why anything not needed on the trail goes into storage at your Kathmandu hotel. Wear your boots and down jacket on the flight rather than packing them." },
        ],
      },
      {
        h2: "How Delays Actually Work",
        blocks: [
          { p: "Lukla and Jomsom flights are cancelled when the valley is in cloud, and the decision is taken slot by slot through the morning. A realistic picture of a bad day: you are at the airport at 5.30 a.m., the first slots go out, cloud closes in at 8 a.m., and by 11 a.m. everything is cancelled and rolled to tomorrow — behind today's passengers." },
          { p: "What we do:" },
          {
            ol: [
              "Book the earliest available slots, which have the best chance of flying.",
              "Hold your hotel room in Kathmandu or Lukla rather than releasing it, so a cancellation does not leave you without a bed.",
              "Rebook you onto the next morning with priority where the airline allows.",
              "Offer a helicopter transfer at the point where the delay threatens your international flight. This is a genuine extra cost, typically shared between several passengers.",
              "Where the trek itself can be shortened safely, adjust the itinerary rather than cancelling the trip.",
            ],
          },
          { p: "What you should do: <strong>build in two buffer days at the end of any Lukla or Jomsom trek</strong> before your international flight. It is the single most useful piece of planning advice on this page, and the cheapest." },
        ],
      },
      {
        h2: "Flying in Nepal: Practical Notes",
        blocks: [
          {
            ul: [
              "Sit on the left flying Kathmandu to Pokhara for the Annapurna and Manaslu skyline; on the right coming back.",
              "Flying into Lukla, the right side gives the better valley view on approach.",
              "Pokhara International Airport opened in 2023, so some itineraries can route there directly.",
              "Carry your documents, medication, electronics, and one warm layer in your hand baggage. Checked bags occasionally travel on a later aircraft.",
              "There is no meal service on mountain flights and no catering at Manthali — bring a snack and water.",
              "Domestic flight tickets are issued in your passport name; a mismatch with your booking name is a real problem at the counter.",
              "Keep an eye on weather rather than the schedule. Your guide will have better information from lodges up the valley than any app.",
            ],
          },
          { p: "A word on safety, since it is a reasonable question. Nepal's mountain airstrips are demanding and the country's aviation record has been uneven. We fly with the operators we consider the most professionally run on each route, we do not book afternoon slots into mountain strips, and we would rather lose a day to weather than push a flight. If you would prefer to avoid mountain flights entirely, there are good alternatives — [[trek:annapurna-base-camp-trek|Annapurna Base Camp]], [[trek:langtang-valley-trek|Langtang Valley]], and [[trek:manaslu-circuit-trek|Manaslu Circuit]] are all reached by road." },
        ],
      },
    ],
    faqs: [
      { question: "Why do Lukla flights leave from Ramechhap instead of Kathmandu?", answer: "In the peak weeks of spring and autumn, Kathmandu airport cannot handle the volume of mountain traffic, so Lukla services shift to Manthali airport at Ramechhap, a four to five hour drive east. The flight itself becomes shorter and more reliable, but you pay for it with a night drive or an extra night on the road." },
      { question: "How likely is a Lukla flight to be delayed?", answer: "Delays are common enough that you should plan for them rather than hope. In the main seasons most flights operate, but a few days each month are lost to cloud, and a cancelled day pushes you behind the next day's passengers. Two buffer days before your international flight solves almost every version of this problem." },
      { question: "What is the baggage limit on a Lukla flight?", answer: "10 kg checked plus 5 kg hand baggage. That 15 kg total is the binding constraint on your packing, which is why anything not needed on the trail stays in storage at your Kathmandu hotel. Wear your boots and down jacket rather than packing them." },
      { question: "Can I take a helicopter instead of a fixed-wing flight to Lukla?", answer: "Yes. A helicopter avoids the Ramechhap drive and is far less weather-sensitive, and in a delay it is often the fastest way out. It costs substantially more, though the price per seat drops when the charter is shared between five passengers — we can arrange it either as a plan or as a response to a delay." },
      { question: "Which treks avoid domestic flights entirely?", answer: "Annapurna Base Camp, Annapurna Circuit, Mardi Himal, Poon Hill, Langtang Valley, Gosaikunda, Manaslu Circuit, Tamang Heritage, and the Kathmandu Valley treks are all reached by road. If flying in a small aircraft is not for you, the Annapurna and Langtang regions offer a full range of trips without it." },
      { question: "How early should my buffer days be scheduled?", answer: "At the end of the trek rather than the start. A delay flying in costs you a day of trekking; a delay flying out costs you an international flight. Two spare nights in Kathmandu before your onward flight is the right shape." },
      { question: "Is it better to fly or drive to Pokhara?", answer: "The flight is 25 minutes and reliable; the drive is six to eight hours on a busy highway. We include the road transfer in most Annapurna itineraries and offer the flight as a paid upgrade, which most people take on the return leg at least." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "upper-mustang-trek",
      "lower-dolpo-trek",
      "makalu-base-camp-trek",
    ],
    tripsNote: "Trips that begin or end with a mountain flight, where we build the buffer days into the itinerary.",
    relatedPosts: [
      "lukla-flight-guide",
      "everest-base-camp-helicopter-return-guide",
      "arriving-in-kathmandu-first-48-hours",
      "helicopter-tours-in-nepal-guide",
    ],
    tags: ["domestic flights", "lukla flight", "nepal travel", "trip planning"],
    meta: {
      title: "Domestic Flights in Nepal: Lukla, Pokhara, Jomsom and Delays",
      description: "Nepal's mountain flights for trekkers — routes, baggage limits, why Lukla moves to Ramechhap in peak season, how delays work, and the buffer days you need.",
      keywords: "Lukla flight, Ramechhap Manthali airport, Nepal domestic flights, Jomsom flight, Lukla baggage limit",
    },
  },
];
