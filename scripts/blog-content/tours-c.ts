import type { BlogContent } from "./build";

export const toursC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "helicopter-tours-in-nepal-guide",
    title: "Helicopter Tours in Nepal: Every Route and What It Costs",
    cluster: "tours",
    date: "2026-12-18",
    hero: {
      image: "mardi-treks/everest-base-camp-helicopter-tour/everest-base-camp-helicopter-tour-04-aerial-view-of-peaks-of-khumbu-ngozumpa-glacier-and-gokyo-la",
      alt: "Aerial view of the Khumbu peaks, Ngozumpa glacier and Gokyo lakes, Nepal.",
    },
    excerpt:
      "Helicopters have become the fastest way to see the Himalaya and a significant industry in Nepal. Every tour route we run, what each one gives you, the altitude and safety considerations, and the honest case for and against.",
    intro: [
      { p: "Twenty years ago a helicopter in Nepal meant a rescue. Today it means a morning from Kathmandu that lands you at 5,545 m beneath Everest and has you back for lunch — and helicopter tourism has become one of the fastest-growing parts of the Nepali travel industry." },
      { p: "They are genuinely remarkable and they are not uncomplicated. This guide covers every route we operate, what each actually delivers, the altitude question, and the criticisms that are worth taking seriously." },
    ],
    sections: [
      {
        h2: "Everest Region Flights",
        blocks: [
          {
            table: {
              head: ["Flight", "Duration", "What it includes"],
              rows: [
                ["[[trek:everest-base-camp-helicopter-tour|Everest Base Camp with Kala Patthar landing]]", "4–5 hours", "Up the Khumbu, a landing near Kala Patthar at 5,545 m, breakfast at the Everest View Hotel"],
                ["[[trek:kathmandu-to-lukla-helicopter-flight|Kathmandu to Lukla]]", "About 1 hour", "A transfer flight, avoiding the Ramechhap drive and weather delays"],
                ["[[trek:lukla-to-kathmandu-helicopter-flight|Lukla to Kathmandu]]", "About 1 hour", "The return leg, useful when fixed-wing flights are backed up"],
                ["[[trek:namche-to-kathmandu-helicopter-flight|Namche to Kathmandu]]", "About 2 hours", "A mid-trek exit without walking back to Lukla"],
                ["[[trek:gorakshep-to-kathmandu-helicopter-flight|Gorak Shep to Kathmandu]]", "About 3 hours", "Flying out from the highest lodge after reaching Base Camp"],
                ["[[trek:gorakshep-to-lukla-helicopter-flight|Gorak Shep to Lukla]]", "About 15 min", "A short hop to connect with a fixed-wing flight"],
                ["[[trek:kalapatthar-to-kathmandu-helicopter-flight|Kala Patthar to Kathmandu]]", "About 3 hours", "A landing at the viewpoint itself, then out"],
                ["[[trek:everest-base-camp-trek-with-helicopter-return|Trek in, fly out]]", "12 days", "The full Base Camp trek with the descent replaced by a flight"],
              ],
            },
          },
          { p: "The flagship is the [[post:everest-base-camp-helicopter-tour-guide|Base Camp tour with a Kala Patthar landing]] — the only way to stand at 5,545 m with Everest in front of you without two weeks of walking. Our [[post:everest-base-camp-helicopter-return-guide|helicopter return guide]] covers the trek-in, fly-out option." },
        ],
      },
      {
        h2: "Annapurna, Langtang and Mustang Flights",
        blocks: [
          {
            table: {
              head: ["Flight", "Duration", "What it gives you"],
              rows: [
                ["[[trek:annapurna-base-camp-helicopter-tour|Annapurna Base Camp helicopter tour]]", "About 2 hours", "Into the Annapurna Sanctuary, with a landing at Base Camp at 4,130 m"],
                ["[[trek:muktinath-helicopter-tour-from-pokhara|Muktinath from Pokhara]]", "1 day", "The pilgrimage temple at 3,760 m in Lower Mustang"],
                ["[[trek:muktinath-damodar-kunda-helicopter-tour|Muktinath and Damodar Kunda]]", "1 day", "Adding the high sacred lakes at 4,890 m in Upper Mustang"],
                ["[[trek:langtang-helicopter-tour-from-kathmandu|Langtang helicopter tour]]", "1 day", "Into the Langtang valley to around 3,870 m"],
                ["[[trek:pokhara-helicopter-sightseeing-tour|Pokhara helicopter sightseeing]]", "Varies", "Annapurna and Dhaulagiri from the air, with landings available"],
              ],
            },
          },
          { p: "The [[post:annapurna-base-camp-helicopter-tour-guide|Annapurna Sanctuary flight]] is the most underrated of these — flying into a ring of 7,000 and 8,000 m peaks through a gorge narrow enough to feel it is an extraordinary twenty minutes, and it is shorter and cheaper than the Everest flight." },
          { p: "For pilgrims, the Muktinath flights have changed access fundamentally — elderly and less mobile pilgrims who could never have walked or driven the Kali Gandaki now reach the temple in a morning. See our [[post:muktinath-pilgrimage-guide|Muktinath guide]]." },
        ],
      },
      {
        h2: "The Altitude Question",
        blocks: [
          { p: "This is the part that gets least attention and deserves most. A Kala Patthar landing takes you from Kathmandu at 1,400 m to above 5,300 m in well under an hour — a rate of ascent no trekking itinerary would ever permit." },
          {
            ul: [
              "<strong>Landings are kept short</strong> — typically 10 to 15 minutes at the highest point, which is the main mitigation.",
              "<strong>The breakfast stop is lower.</strong> Operators land at Syangboche at around 3,880 m for the Everest View Hotel stop rather than lingering high.",
              "<strong>Most people feel light-headed</strong> and breathless, and that is normal and transient.",
              "<strong>Who should take advice first:</strong> anyone with a heart condition, uncontrolled high blood pressure, significant lung disease, severe anaemia, or who is pregnant. Talk to a doctor before booking rather than after.",
              "<strong>Children and older passengers</strong> generally do fine, but the same conditional advice applies.",
              "<strong>Do not fly if you are unwell</strong> on the morning. A chest infection plus 5,500 m is a poor combination.",
            ],
          },
          { p: "Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]] explains the physiology. The short version: the flight is safe for most people and it is a genuine physiological event rather than a sightseeing bus." },
        ],
      },
      {
        h2: "How Flights Actually Work",
        blocks: [
          {
            ol: [
              "<strong>Early morning departure.</strong> Almost all mountain helicopter flights leave between 6 and 8 a.m., because valley winds and cloud build later.",
              "<strong>Five passengers plus kit</strong> is standard capacity, reducing at altitude where thin air limits payload.",
              "<strong>Weight matters.</strong> Operators ask for passenger weights, and at landing sites above 5,000 m a helicopter may shuttle passengers in two groups.",
              "<strong>Sharing brings the cost down.</strong> A charter split between five passengers is a fraction of the private rate, and most tours are sold as shared seats.",
              "<strong>Weather cancels.</strong> Helicopters are far less weather-sensitive than fixed-wing aircraft and not immune. Build a spare day in.",
              "<strong>Landings are not guaranteed.</strong> Wind, cloud or snow at the landing site can mean a flyover instead. Reputable operators say this in writing beforehand.",
            ],
          },
        ],
      },
      {
        h2: "The Honest Case Against",
        blocks: [
          { p: "Three criticisms are worth stating plainly." },
          { p: "<strong>Noise and intrusion.</strong> Helicopter traffic in the Khumbu has increased sharply, and the noise over a valley where people have walked for ten days is a standard and legitimate complaint. Some of this traffic is necessary — supplies, rescues, staff — and a good deal of it is not." },
          { p: "<strong>The rescue problem.</strong> Nepal has had documented cases of unnecessary evacuations arranged for insurance commission. Reforms have tightened this, and it remains a reason to use an operator whose rescue decisions are made on medical grounds by its own operations team." },
          { p: "<strong>Emissions.</strong> A helicopter hour is carbon-expensive. If you are weighing a heli tour against a trek, the trek is the lower-impact choice by a wide margin, and it is also the better experience for anyone with the time." },
          { p: "Where we think helicopters are clearly justified: medical evacuation; reaching pilgrimage sites for people who cannot walk or drive to them; a trek-out flight that replaces days of retracing ground; and a single sightseeing flight for travellers who genuinely have no other way to see the Himalaya. Where we think they are not: as a routine substitute for walking on a trail you could walk, or as a lift past a hard day." },
        ],
      },
    ],
    faqs: [
      { question: "What helicopter tours are available in Nepal?", answer: "The Everest Base Camp tour with a Kala Patthar landing, the Annapurna Sanctuary flight, Muktinath and Damodar Kunda from Pokhara, Langtang from Kathmandu, Pokhara sightseeing, and a range of transfer flights into and out of Lukla, Namche and Gorak Shep." },
      { question: "How much does a helicopter tour cost?", answer: "It depends on the route and how many passengers share the charter — a seat on a shared flight is a fraction of the private rate. Capacity is five passengers, reducing at high landing sites. Check the individual tour pages for current per-seat prices." },
      { question: "Is a helicopter landing at 5,500 m safe?", answer: "For most people, yes — landings are kept to 10 to 15 minutes and the meal stop is made lower at around 3,880 m. It is a very rapid ascent, so light-headedness is common. Anyone with a heart condition, uncontrolled blood pressure, lung disease or who is pregnant should take medical advice first." },
      { question: "Why do helicopter tours leave so early?", answer: "Because valley winds and cloud build through the morning in the Himalaya. Almost all mountain flights depart between 6 and 8 a.m. for the most stable conditions, and by late morning the high landing sites are often unusable." },
      { question: "Is the landing guaranteed?", answer: "No. Wind, cloud or snow at the landing site can mean a flyover instead of a landing, and at sites above 5,000 m thin air may require shuttling passengers in two groups. Reputable operators state this in writing before you book." },
      { question: "Can helicopters be cancelled by weather?", answer: "Yes, though far less often than fixed-wing flights. Helicopters fly in conditions that ground a Dornier, which is why they are the usual solution to a Lukla backlog — but they are not immune, so build a spare day into any itinerary that depends on one." },
      { question: "Are helicopter tours bad for the Khumbu?", answer: "Increased traffic is a legitimate and widely voiced complaint, both for noise over the trails and for emissions. We think flights are clearly justified for medical evacuation, for pilgrims who cannot walk, and as a trek-out that replaces days of retracing ground — and less so as a routine substitute for walking." },
      { question: "Should I take a helicopter tour or do a trek?", answer: "If you have two weeks and reasonable fitness, trek — it is a better experience and a far lower-impact one. The helicopter tour exists for travellers who genuinely have a day rather than a fortnight, and on those terms it delivers something nothing else can." },
    ],
    relatedTreks: [
      "everest-base-camp-helicopter-tour",
      "annapurna-base-camp-helicopter-tour",
      "muktinath-helicopter-tour-from-pokhara",
      "langtang-helicopter-tour-from-kathmandu",
      "everest-base-camp-trek-with-helicopter-return",
      "pokhara-helicopter-sightseeing-tour",
    ],
    tripsNote: "Every helicopter route we operate, from a four-hour Everest tour to transfer flights and trek-out legs.",
    relatedPosts: [
      "everest-base-camp-helicopter-tour-guide",
      "annapurna-base-camp-helicopter-tour-guide",
      "everest-base-camp-helicopter-return-guide",
      "mountain-flights-in-nepal-guide",
    ],
    tags: ["helicopter tour", "everest helicopter", "nepal tours", "scenic flights"],
    meta: {
      title: "Helicopter Tours in Nepal: Every Route and What It Costs",
      description: "All Nepal helicopter tours — Everest Base Camp with a Kala Patthar landing, the Annapurna Sanctuary, Muktinath, Langtang and transfer flights.",
      keywords: "helicopter tour Nepal, Everest helicopter tour, Annapurna helicopter, Muktinath helicopter, Kala Patthar landing",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-helicopter-tour-guide",
    title: "Everest Base Camp Helicopter Tour: A Morning at 5,545 m",
    cluster: "tours",
    date: "2026-12-22",
    hero: {
      image: "mardi-treks/everest-base-camp-helicopter-tour/everest-base-camp-helicopter-tour-00-close-up-view-of-mount-everest-from-kala-patthar-5644-m-in-2",
      alt: "A close view of Mount Everest from Kala Patthar, Khumbu region, Nepal.",
    },
    excerpt:
      "Four to five hours from Kathmandu: up the Khumbu valley, a landing near Kala Patthar at 5,545 m with Everest in front of you, and breakfast at the Everest View Hotel on the way down. How it works and who it suits.",
    intro: [
      { p: "The Everest Base Camp helicopter tour is the most popular single-day trip in Nepal, and for a clear reason: it puts you at the viewpoint that trekkers reach on day nine of a fourteen-day trek, and has you back in Kathmandu before lunch." },
      { p: "What you get is a flight up the Dudh Koshi and the Khumbu with the whole range unfolding, a short landing at around 5,300 to 5,545 m near <strong>Kala Patthar</strong> with Everest, Nuptse, Lhotse and Pumori around you, and a breakfast stop at the <strong>Everest View Hotel</strong> at 3,880 m on the way back. What you do not get is the valley at walking pace, the villages, or ten days of earning it." },
    ],
    sections: [
      {
        h2: "The Tour at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "4–5 hours door to door from Kathmandu"],
                ["Departure", "Early morning, typically 6–7 a.m."],
                ["Highest landing", "Near Kala Patthar, around 5,300–5,545 m"],
                ["Time at the high landing", "10–15 minutes"],
                ["Breakfast stop", "Everest View Hotel, Syangboche, about 3,880 m"],
                ["Capacity", "5 passengers, reduced at the high landing"],
                ["Season", "Best October to December and March to May; clear mornings year-round"],
                ["Landing guarantee", "Not guaranteed — weather and payload dependent"],
              ],
            },
          },
          { p: "We run it as [[trek:everest-base-camp-helicopter-tour|the Everest Base Camp Helicopter Tour with Kala Patthar landing]]. Related options include [[trek:kalapatthar-to-kathmandu-helicopter-flight|a Kala Patthar to Kathmandu flight]] and [[trek:gorakshep-to-kathmandu-helicopter-flight|a Gorak Shep to Kathmandu flight]] for trekkers already in the valley." },
        ],
      },
      {
        h2: "How the Morning Runs",
        blocks: [
          {
            ol: [
              "<strong>5.30–6.00 a.m.</strong> Hotel pickup and transfer to the domestic terminal at Kathmandu airport. Briefing, weights taken, safety instructions.",
              "<strong>6.30–7.00 a.m.</strong> Departure. The flight follows the Kathmandu valley rim east, then the Dudh Koshi, with Lukla, Namche and Tengboche visible below — the entire trekking route in 40 minutes.",
              "<strong>About 7.30 a.m.</strong> Refuelling stop at Lukla or Syangboche. On a five-passenger flight, the helicopter may take passengers to the high landing in two groups because of payload limits at altitude.",
              "<strong>8.00 a.m.</strong> The high landing — a flat area near Kala Patthar or at Gorak Shep. Ten to fifteen minutes, with Everest's summit pyramid, the Khumbu Icefall, Nuptse, Lhotse, Pumori and Changtse around you. Cold, thin, loud, and extraordinary.",
              "<strong>9.00 a.m.</strong> Descent to Syangboche and breakfast on the terrace of the <strong>Everest View Hotel</strong> at 3,880 m, with Everest and Ama Dablam in front of you. This is the part people remember almost as much as the landing.",
              "<strong>10.00–11.00 a.m.</strong> Return flight to Kathmandu and hotel drop-off.",
            ],
          },
          { p: "The refuelling and payload shuttling is the part that surprises people. Above 5,000 m a helicopter can lift considerably less than at sea level, so a full load is commonly split — two passengers up and back, then three. It adds time and it is a safety measure, not an inconvenience." },
        ],
      },
      {
        h2: "Who It Suits",
        blocks: [
          {
            ul: [
              "<strong>Travellers with a day, not a fortnight.</strong> This is the only way to reach the Everest viewpoint in a morning.",
              "<strong>Anyone who cannot trek</strong> — mobility, age, a medical reason, or simply no interest in walking for two weeks.",
              "<strong>Families with children</strong> who would not manage the trek.",
              "<strong>Photographers.</strong> The aerial perspective on the Khumbu glacier and Icefall is unavailable on foot.",
              "<strong>Trekkers adding it on.</strong> A number of our guests take the flight before or after a trek elsewhere in Nepal, which is a genuinely good combination.",
              "<strong>Groups of five</strong>, for whom the per-seat economics work best.",
            ],
          },
          { p: "Who should think again: anyone with a heart condition, uncontrolled high blood pressure, significant lung disease or who is pregnant should take medical advice before booking — 1,400 m to above 5,300 m in under an hour is a genuine physiological event. And anyone with two weeks and reasonable fitness will get far more from [[trek:everest-base-camp-trek|the trek]]." },
        ],
      },
      {
        h2: "What Can Go Wrong",
        blocks: [
          {
            ul: [
              "<strong>Weather cancellation.</strong> Less frequent than for fixed-wing flights but real. Flights are rescheduled to the next clear morning, so keep a spare day.",
              "<strong>No landing.</strong> Wind, cloud or snow at the high site can mean a flyover instead. You still get the flight; you do not get to stand there. Operators state this in advance.",
              "<strong>The shuttle adds time.</strong> Payload limits at altitude mean a full helicopter often splits the high landing into two trips.",
              "<strong>Altitude symptoms.</strong> Light-headedness and breathlessness are normal. Anything more — a bad headache, nausea, confusion — and you tell the crew immediately and they descend.",
              "<strong>Cold.</strong> It is -10 to -20 °C at the landing. Bring a down jacket, hat and gloves. People step out in fleeces and regret it within a minute.",
              "<strong>Disappointment at the Base Camp question.</strong> The tour lands near Kala Patthar or Gorak Shep rather than at Base Camp itself, which is on moving glacier. Everest is visible from Kala Patthar and not from Base Camp, so this is the better landing regardless — see our [[post:kala-patthar-vs-everest-base-camp|comparison]].",
            ],
          },
        ],
      },
      {
        h2: "What to Bring",
        blocks: [
          {
            ul: [
              "<strong>A proper down jacket, warm hat and gloves.</strong> Non-negotiable for the high landing.",
              "<strong>Sunglasses</strong> — category 3 or 4. Snow glare at 5,300 m is severe.",
              "<strong>Sunscreen</strong> for the short exposure, which is stronger than it feels.",
              "<strong>A camera with a charged battery kept warm</strong> in an inside pocket. Cold flattens batteries in minutes.",
              "<strong>Your passport</strong> for the flight manifest, and any medication you need.",
              "<strong>Light clothing underneath</strong> — Kathmandu is warm, Syangboche is mild in the sun, and the landing is freezing. Layers, as always.",
              "<strong>Nothing heavy.</strong> Payload matters, and operators will ask you to leave bags behind.",
            ],
          },
          { p: "One final note on expectations. The landing is brief, loud and cold, and the experience is genuinely disorienting — several of our guests have said the breakfast at the Everest View Hotel, sitting on a warm terrace at 3,880 m with Everest in front of them, is the part they remember best. Both are worth having." },
        ],
      },
    ],
    faqs: [
      { question: "How long is the Everest Base Camp helicopter tour?", answer: "Four to five hours door to door from Kathmandu, including the flight up the Khumbu, a 10 to 15 minute landing near Kala Patthar at around 5,300 to 5,545 m, and a breakfast stop at the Everest View Hotel at 3,880 m on the way back." },
      { question: "Does the helicopter land at Everest Base Camp itself?", answer: "No — it lands near Kala Patthar or at Gorak Shep. Base Camp sits on moving glacier and is not a landing site. Kala Patthar is the better viewpoint anyway, because Everest's summit is visible from there and hidden from Base Camp itself." },
      { question: "Is the landing guaranteed?", answer: "No. Wind, cloud or snow at the high site can mean a flyover instead of a landing, and payload limits at altitude often mean a five-passenger group is shuttled up in two trips. Reputable operators state both of these in writing before you book." },
      { question: "Is it safe to go from 1,400 m to 5,500 m in an hour?", answer: "For most people, yes — landings are kept to 10 to 15 minutes and the meal stop is lower at 3,880 m. Light-headedness and breathlessness are common and transient. Anyone with a heart condition, uncontrolled blood pressure, lung disease or who is pregnant should take medical advice first." },
      { question: "What should I wear?", answer: "A proper down jacket, warm hat and gloves for the landing, where it is -10 to -20 °C, with lighter layers underneath because Kathmandu is warm. Category 3 or 4 sunglasses for the snow glare, and sunscreen. People step out in fleeces and regret it within a minute." },
      { question: "What time does the tour start?", answer: "Hotel pickup is around 5.30 to 6 a.m. for a departure between 6.30 and 7. Mountain helicopter flights operate early because valley winds and cloud build through the morning, and by late morning the high landing sites are often unusable." },
      { question: "Can I combine the tour with a trek?", answer: "Yes, and a number of our guests do — taking the flight before or after a trek in the Annapurna region, or using a Gorak Shep to Kathmandu flight to exit an Everest Base Camp trek. Both work well." },
      { question: "Is it worth the cost?", answer: "If you genuinely have a day rather than a fortnight, it delivers something nothing else can — standing at 5,500 m with Everest in front of you. If you have two weeks and the fitness, the trek is a better experience and much better value per day." },
    ],
    relatedTreks: [
      "everest-base-camp-helicopter-tour",
      "kalapatthar-to-kathmandu-helicopter-flight",
      "gorakshep-to-kathmandu-helicopter-flight",
      "everest-base-camp-trek-with-helicopter-return",
      "everest-mountain-flight",
    ],
    tripsNote: "The Base Camp helicopter tour and the related Khumbu flights.",
    relatedPosts: [
      "helicopter-tours-in-nepal-guide",
      "kala-patthar-vs-everest-base-camp",
      "short-everest-treks-without-base-camp",
      "everest-base-camp-helicopter-return-guide",
    ],
    tags: ["everest helicopter tour", "kala patthar", "helicopter", "khumbu", "day tour"],
    meta: {
      title: "Everest Base Camp Helicopter Tour: A Morning at 5,545 m",
      description: "The Everest Base Camp helicopter tour hour by hour — the Khumbu flight, the Kala Patthar landing, breakfast at the Everest View Hotel.",
      keywords: "Everest Base Camp helicopter tour, Kala Patthar landing, Everest helicopter day trip, Everest View Hotel breakfast",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-base-camp-helicopter-tour-guide",
    title: "Annapurna Base Camp Helicopter Tour: Into the Sanctuary in Two Hours",
    cluster: "tours",
    date: "2026-12-25",
    hero: {
      image: "mardi-treks/annapurna-base-camp-helicopter-tour/annapurna-base-camp-helicopter-tour-03-machhapuchhre-or-fishtail-mountain-6-993-m-22-943-ft-img-524",
      alt: "Machhapuchhre, the Fishtail mountain at 6,993 m, Annapurna region, Nepal.",
    },
    excerpt:
      "A flight from Pokhara up the Modi Khola gorge into a glacial amphitheatre ringed by 7,000 and 8,000 m peaks, with a landing at 4,130 m. Shorter, cheaper and more intimate than the Everest flight, and much less known.",
    intro: [
      { p: "The Annapurna Sanctuary flight is the most underrated helicopter tour in Nepal. Where the Everest flight is a long, grand traverse up a broad valley, this one is tight and dramatic: twenty minutes from Pokhara up the <strong>Modi Khola gorge</strong>, with walls closing on both sides, and then the valley opens into the Sanctuary and you are inside a complete ring of peaks." },
      { p: "It lands at <strong>Annapurna Base Camp at 4,130 m</strong> with Annapurna I (8,091 m), Annapurna South, Hiunchuli, Gangapurna, Tent Peak and Machhapuchhre around you. Two hours door to door, at a considerably lower altitude and cost than the Everest tour." },
    ],
    sections: [
      {
        h2: "The Tour at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Duration", "About 2 hours door to door from Pokhara"],
                ["Flight time", "20–25 minutes each way"],
                ["Landing", "Annapurna Base Camp, 4,130 m"],
                ["Time on the ground", "15–30 minutes, weather permitting"],
                ["Departure", "Early morning from Pokhara airport"],
                ["Capacity", "5 passengers"],
                ["Altitude risk", "Lower than the Everest tour — 4,130 m rather than 5,500 m"],
                ["Season", "October to May; best on clear mornings October to December"],
              ],
            },
          },
          { p: "We run it as [[trek:annapurna-base-camp-helicopter-tour|the Annapurna Base Camp Helicopter Tour]], with [[trek:pokhara-helicopter-sightseeing-tour|broader Pokhara helicopter sightseeing]] and [[trek:mountain-flight-from-pokhara|a fixed-wing mountain flight]] as alternatives from the same airport." },
        ],
      },
      {
        h2: "Why the Flight Is Better Than It Sounds",
        blocks: [
          { p: "Three things distinguish it from the Everest tour." },
          { p: "<strong>The gorge.</strong> The Modi Khola between Chhomrong and Machhapuchhre Base Camp is a narrow, steep-sided corridor, and flying up it at low level with rock walls on both sides is genuinely thrilling in a way that crossing a broad glacial valley is not." },
          { p: "<strong>The arrival.</strong> The Sanctuary opens without warning, exactly as it does on foot — one moment a gorge, the next a complete 360-degree amphitheatre. Trekkers spend four days earning that moment; the helicopter gives you the same transition in twenty seconds, from above." },
          { p: "<strong>The proximity.</strong> At Annapurna Base Camp the peaks are close and overhead rather than distant. Annapurna South rises 3,000 m directly in front of you, and Machhapuchhre stands behind. Everest from Kala Patthar is more famous; this is more enveloping." },
          { p: "It is also lower, at 4,130 m rather than 5,500 m, which makes the altitude considerably more manageable for most passengers — and it is shorter and cheaper." },
        ],
      },
      {
        h2: "How the Morning Runs",
        blocks: [
          {
            ol: [
              "<strong>6.00–6.30 a.m.</strong> Pickup from your Pokhara hotel and transfer to the airport. Briefing and weights.",
              "<strong>7.00 a.m.</strong> Departure, climbing out over Phewa Lake with Sarangkot and the Annapurna skyline ahead.",
              "<strong>7.05–7.20 a.m.</strong> Up the Modi Khola past Ghandruk, Chhomrong and Deurali, with the gorge narrowing and the lodge villages visible below.",
              "<strong>7.25 a.m.</strong> Through the Sanctuary entrance past Machhapuchhre Base Camp, and the landing at Annapurna Base Camp at 4,130 m.",
              "<strong>Ground time.</strong> Fifteen to thirty minutes, weather and payload permitting, with the full ring of peaks around you and the glacier below.",
              "<strong>8.00–8.30 a.m.</strong> Return flight to Pokhara and hotel drop-off, usually well before 9 a.m.",
            ],
          },
          { p: "Some itineraries add a landing or low pass at Machhapuchhre Base Camp at 3,700 m, or a loop toward Dhaulagiri on the return. Ask when booking." },
        ],
      },
      {
        h2: "Annapurna or Everest by Helicopter?",
        blocks: [
          {
            table: {
              head: ["", "Annapurna Sanctuary", "[[trek:everest-base-camp-helicopter-tour|Everest Base Camp]]"],
              rows: [
                ["Departs from", "Pokhara", "Kathmandu"],
                ["Duration", "About 2 hours", "4–5 hours"],
                ["Landing altitude", "4,130 m", "Around 5,300–5,545 m"],
                ["Altitude risk", "Lower", "Significant rapid ascent"],
                ["The view", "A 360° ring of peaks, close and overhead", "Everest's summit pyramid and the Khumbu glacier"],
                ["The flying", "A tight gorge and a sudden opening", "A long grand traverse up a broad valley"],
                ["Cost", "Lower", "Higher"],
                ["Breakfast stop", "Not standard", "Everest View Hotel at 3,880 m"],
              ],
            },
          },
          { p: "If you are in Pokhara and have a clear morning, this is the better-value flight and the easier one on your body. If Everest specifically is the point, take [[post:everest-base-camp-helicopter-tour-guide|the Khumbu tour]] from Kathmandu. Our [[post:helicopter-tours-in-nepal-guide|helicopter overview]] covers every route." },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Go early.</strong> The Sanctuary clouds over from mid-morning in most seasons, and the gorge needs visibility. A 7 a.m. departure is not arbitrary.",
              "<strong>Dress for 4,130 m.</strong> Around -5 to 0 °C on the ground in the main seasons. A down jacket, hat and gloves, with lighter layers beneath for warm Pokhara.",
              "<strong>Sunglasses and sunscreen.</strong> Glacier glare is strong even on a short stop.",
              "<strong>Keep camera batteries warm.</strong> Cold drains them fast.",
              "<strong>Build a spare morning.</strong> Weather cancels flights, and the rebooking is to the next clear morning.",
              "<strong>Landing is weather dependent.</strong> A flyover instead of a landing is possible and operators say so in advance.",
              "<strong>Altitude.</strong> Lower than the Everest tour but still 4,130 m from 820 m in twenty minutes. Anyone with a heart or lung condition should take medical advice first.",
            ],
          },
          { p: "One combination worth knowing: the flight pairs very well with a short Annapurna trek. Several of our guests walk [[trek:mardi-himal-trek-from-pokhara|Mardi Himal]] or [[trek:poonhill-trek-from-pokhara|Poon Hill]] and then take the Sanctuary flight on a spare morning, which gives them the valley at walking pace and the amphitheatre from the air. See our [[post:short-treks-from-pokhara|Pokhara treks guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "How long is the Annapurna Base Camp helicopter tour?", answer: "About two hours door to door from Pokhara — 20 to 25 minutes of flying each way up the Modi Khola gorge, and 15 to 30 minutes on the ground at Annapurna Base Camp at 4,130 m. Most passengers are back at their hotel before 9 a.m." },
      { question: "How high is the landing?", answer: "4,130 m at Annapurna Base Camp, which is considerably lower than the Everest tour's Kala Patthar landing at around 5,500 m. That makes the altitude much more manageable for most passengers, though it is still a rapid ascent from Pokhara at 820 m." },
      { question: "What can I see from Annapurna Base Camp?", answer: "A complete 360-degree ring — Annapurna I at 8,091 m, Annapurna South, Hiunchuli, Gangapurna, Tent Peak, Fluted Peak and Machhapuchhre — with the glacier below. The peaks are close and overhead rather than distant, which makes it more enveloping than the Everest view." },
      { question: "Is it better than the Everest helicopter tour?", answer: "Different, and better value. It is shorter, cheaper, lands 1,400 m lower, and the flight up the narrow Modi Khola gorge with the sudden opening into the Sanctuary is more dramatic flying. The Everest tour wins if seeing Everest specifically is the point." },
      { question: "What time does it depart?", answer: "Around 7 a.m. from Pokhara airport, with hotel pickup at 6 to 6.30. The Sanctuary clouds over from mid-morning in most seasons and the gorge needs visibility, so the early departure is a condition of the flight rather than a preference." },
      { question: "What should I wear?", answer: "A down jacket, warm hat and gloves for the landing, where it is around -5 to 0 °C in the main seasons, with lighter layers beneath because Pokhara at 820 m is warm. Sunglasses and sunscreen for the glacier glare, even on a short stop." },
      { question: "When is the best season?", answer: "October to December for the clearest mornings, and March to May as a second window. The monsoon months keep the Sanctuary under cloud, and winter is flyable but cold on the ground. In every season, morning is the only realistic time." },
      { question: "Can I combine it with a trek?", answer: "Very well. A number of our guests walk a short Annapurna trek — Mardi Himal or Poon Hill from Pokhara — and take the Sanctuary flight on a spare morning, which gives them both the valley at walking pace and the amphitheatre from the air." },
    ],
    relatedTreks: [
      "annapurna-base-camp-helicopter-tour",
      "pokhara-helicopter-sightseeing-tour",
      "mountain-flight-from-pokhara",
      "annapurna-base-camp-trek-from-pokhara",
      "mardi-himal-trek-from-pokhara",
    ],
    tripsNote: "The Sanctuary flight, the other Pokhara air options, and the short treks that pair with them.",
    relatedPosts: [
      "helicopter-tours-in-nepal-guide",
      "everest-base-camp-helicopter-tour-guide",
      "annapurna-base-camp-trek-complete-guide",
      "short-treks-from-pokhara",
    ],
    tags: ["annapurna helicopter", "annapurna sanctuary", "pokhara", "helicopter tour"],
    meta: {
      title: "Annapurna Base Camp Helicopter Tour: Into the Sanctuary in Two Hours",
      description: "The Annapurna Sanctuary helicopter tour from Pokhara — up the Modi Khola gorge, a landing at 4,130 m inside a ring of 7,000 and 8,000 m peaks.",
      keywords: "Annapurna Base Camp helicopter tour, Annapurna Sanctuary helicopter, Pokhara helicopter tour, ABC heli landing",
    },
  },
];
