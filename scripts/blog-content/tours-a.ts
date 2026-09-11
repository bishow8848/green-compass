import type { BlogContent } from "./build";

export const toursA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kathmandu-valley-unesco-sites-guide",
    title: "Kathmandu Valley UNESCO Sites: A Guide to All Seven",
    cluster: "tours",
    date: "2026-11-27",
    hero: {
      image: "mardi-treks/seven-world-heritage-kathmandu-day-tour/seven-world-heritage-kathmandu-day-tour-00-kathmandu-durbar-square-basantapur",
      alt: "Kathmandu Durbar Square at Basantapur, Kathmandu Valley, Nepal.",
    },
    excerpt:
      "Seven monument zones in one valley — three royal squares, two Buddhist stupas, a Hindu cremation temple and the oldest shrine in Nepal. What each one is, how long it needs, and how to see them without exhaustion.",
    intro: [
      { p: "The Kathmandu Valley is one of the densest concentrations of built heritage anywhere in Asia. UNESCO inscribed it in 1979 as a single World Heritage property made up of <strong>seven monument zones</strong>: the royal squares of Kathmandu, Patan and Bhaktapur; the Buddhist stupas of Swayambhunath and Boudhanath; the Hindu temple complex of Pashupatinath; and the hilltop shrine of Changu Narayan." },
      { p: "All seven are within an hour of central Kathmandu, and all seven were damaged to varying degrees in the 2015 earthquake, with restoration now largely complete. Trying to see them all in one day is possible and not advisable; here is what each one actually offers." },
    ],
    sections: [
      {
        h2: "The Seven at a Glance",
        blocks: [
          {
            table: {
              head: ["Site", "What it is", "Time needed", "Entry"],
              rows: [
                ["Kathmandu Durbar Square", "The old royal palace complex at Basantapur, with the Kumari house", "1.5–2 hours", "Ticketed"],
                ["Patan Durbar Square", "The finest Newar architecture in the valley, plus the Patan Museum", "2–3 hours", "Ticketed"],
                ["Bhaktapur Durbar Square", "A whole medieval city, not just a square", "Half to full day", "Ticketed"],
                ["Swayambhunath", "A hilltop stupa above the city, the valley's oldest Buddhist site", "1–1.5 hours", "Ticketed"],
                ["Boudhanath", "The largest stupa in Nepal, centre of Tibetan Buddhist life", "1–2 hours", "Ticketed"],
                ["Pashupatinath", "Nepal's holiest Hindu temple, with riverside cremation ghats", "1.5–2 hours", "Ticketed"],
                ["Changu Narayan", "The oldest temple in Nepal, with 5th-century stone inscriptions", "1 hour", "Ticketed"],
              ],
            },
          },
          { p: "We cover them across several itineraries: [[trek:seven-world-heritage-kathmandu-day-tour|all seven in one long day]], [[trek:kathmandu-day-tour|a shorter Kathmandu day tour]], and dedicated half days to [[trek:patan-day-tour|Patan]] and [[trek:bhaktapur-day-tour|Bhaktapur]]. Longer options include [[trek:kathmandu-valley-tour|a 5-day valley tour]] and [[trek:nepal-cultural-tour|a 9-day cultural tour]]." },
        ],
      },
      {
        h2: "The Three Durbar Squares",
        blocks: [
          { p: "Each was the royal court of a separate Newar kingdom until the Gorkha conquest of 1769, and they are best understood as rivals rather than variations." },
          { h3: "Kathmandu Durbar Square" },
          { p: "The largest and most chaotic, at <strong>Basantapur</strong> in the old city, with the Hanuman Dhoka palace, the Taleju temple, the nine-storey Basantapur tower, and the <strong>Kumari Ghar</strong> — home of the living goddess, a young girl selected from the Newar Shakya caste who appears at her window to visitors. It suffered the heaviest earthquake damage of the three and restoration is ongoing." },
          { h3: "Patan Durbar Square" },
          { p: "The most architecturally refined, across the Bagmati in Lalitpur, and our pick if you only visit one. The <strong>Krishna Mandir</strong> is a stone shikhara temple of extraordinary quality, the <strong>Patan Museum</strong> in the old palace is genuinely the best museum in Nepal, and the surrounding courtyards — Sundari Chowk with its royal bath, the metalworking alleys behind — repay an unhurried afternoon." },
          { h3: "Bhaktapur Durbar Square" },
          { p: "Not a square but a city. Bhaktapur is a walled medieval town where the whole street plan, not just the monuments, is intact — brick lanes, carved windows, pottery squares, and the five-storey <strong>Nyatapola</strong> temple, the tallest in Nepal. It needs half a day minimum and rewards a full one, or an overnight. See our [[post:bhaktapur-travel-guide|Bhaktapur guide]]." },
        ],
      },
      {
        h2: "The Buddhist Stupas",
        blocks: [
          { h3: "Swayambhunath" },
          { p: "A stupa on a hill west of the city, reached by 365 steps, with the valley laid out below. It is the oldest Buddhist site in the valley — the core may date to the 5th century — and the <em>swayambhu</em> of the name means self-arisen, from the legend that the hill emerged from a lake that once filled the valley. The resident macaques are the reason for the nickname Monkey Temple, and they are genuinely thieving." },
          { h3: "Boudhanath" },
          { p: "The largest stupa in Nepal and the centre of Tibetan Buddhist life in the country, surrounded by a ring of monasteries founded by refugee communities after 1959. The practice is to walk the <em>kora</em> clockwise around it at dusk with everyone else, which is one of the most atmospheric hours available anywhere in Kathmandu. It was substantially damaged in 2015 and rebuilt by 2016, largely with community donations." },
        ],
      },
      {
        h2: "Pashupatinath and Changu Narayan",
        blocks: [
          { h3: "Pashupatinath" },
          { p: "Nepal's most important Hindu temple, dedicated to Shiva as Pashupati, lord of animals, on the Bagmati river. The main temple is closed to non-Hindus, but the complex around it is open and it is the <strong>cremation ghats</strong> on the river that most visitors find unforgettable — open-air funeral pyres, families performing rites, and sadhus on the opposite bank." },
          { p: "Two rules here, and they are not negotiable: <strong>do not photograph cremations or grieving families</strong>, and stay on the far bank where visitors are directed. The sadhus who pose for photographs expect payment; agree it first." },
          { h3: "Changu Narayan" },
          { p: "The oldest temple in Nepal, on a ridge above Bhaktapur, with a stone inscription dated to 464 CE — the earliest dated inscription in the country. It is dedicated to Vishnu, and the stone sculpture around the courtyard, particularly the Vishnu Vishwarup and the Garuda, is the finest early Licchavi work surviving. It is also the quietest of the seven, and the walk down from Nagarkot arrives here." },
        ],
      },
      {
        h2: "How to See Them",
        blocks: [
          {
            table: {
              head: ["Time available", "Plan"],
              rows: [
                ["One day", "[[trek:seven-world-heritage-kathmandu-day-tour|All seven in one long day]] — efficient, and admittedly a lot"],
                ["One day, unhurried", "[[trek:kathmandu-day-tour|Kathmandu Durbar Square, Swayambhunath, Boudhanath and Pashupatinath]]"],
                ["Half day", "[[trek:patan-day-tour|Patan]] — the best single site, 20 minutes from Thamel"],
                ["Half to full day", "[[trek:bhaktapur-day-tour|Bhaktapur]], with Changu Narayan added"],
                ["Two days", "Kathmandu and Swayambhunath on day one, Bhaktapur and Changu Narayan on day two"],
                ["Five days", "[[trek:kathmandu-valley-tour|The valley tour]], adding Nagarkot and the surrounding villages"],
                ["Nine days", "[[trek:nepal-cultural-tour|The cultural tour]], adding Pokhara, Bandipur and Gorkha"],
              ],
            },
          },
          { p: "Practical advice that makes a real difference: <strong>go early</strong>, because the squares are empty and beautifully lit before about 9 a.m.; <strong>take a guide</strong>, because the iconography is dense and nothing is labelled usefully; <strong>keep your tickets</strong>, which are valid for re-entry on the same day and sometimes longer; and <strong>dress modestly</strong> at Pashupatinath and inside temple courtyards." },
          { p: "If you are fitting this around a trek, the valley sites are the obvious use of a buffer day — see our [[post:arriving-in-kathmandu-first-48-hours|arrival guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "How many UNESCO sites are in the Kathmandu Valley?", answer: "Seven monument zones within a single World Heritage property inscribed in 1979 — the Durbar Squares of Kathmandu, Patan and Bhaktapur, the stupas of Swayambhunath and Boudhanath, the Hindu temple complex of Pashupatinath, and the hilltop temple of Changu Narayan." },
      { question: "Can I see all seven in one day?", answer: "Yes, and we run a one-day tour that does it — but it is a long day and each site gets a short visit. Two days is much more comfortable, with Kathmandu and Swayambhunath on the first and Bhaktapur and Changu Narayan on the second." },
      { question: "Which is the best single site to visit?", answer: "Patan Durbar Square, for the finest Newar architecture in the valley, the Krishna Mandir, and the Patan Museum, which is genuinely the best museum in Nepal. It is also only twenty minutes from Thamel. Bhaktapur is the better choice if you have half a day or more." },
      { question: "Were the sites damaged in the 2015 earthquake?", answer: "All seven were, to varying degrees, with Kathmandu Durbar Square and Bhaktapur worst affected. Restoration is now largely complete — Boudhanath was rebuilt within a year, mostly through community donations — though conservation work continues at some temples in Kathmandu Durbar Square." },
      { question: "Can I go inside Pashupatinath?", answer: "The main temple is open to Hindus only, but the surrounding complex, the riverside ghats and the opposite bank are open to everyone. The cremation ghats are the part most visitors find unforgettable — do not photograph cremations or grieving families, and stay where visitors are directed." },
      { question: "Do I need a guide?", answer: "It makes a large difference. The iconography is dense, the layers of Hindu and Buddhist practice are intertwined, and the sites are poorly labelled. A guide turns a walk past old buildings into something you understand, and all our valley tours include one." },
      { question: "How much do entry tickets cost?", answer: "Each zone is separately ticketed, with foreign-national rates ranging from a few hundred to around NPR 1,800 for Bhaktapur. On our tours the entry fees are included, so there is nothing to pay at the gate. Keep the ticket — several are valid for re-entry on the same day." },
      { question: "What is the best time of day to visit?", answer: "Early morning, before about 9 a.m. The squares are almost empty, the light is good, and local ritual life — offerings, bathing, morning puja — is at its most active. By mid-morning the tour groups arrive and the light goes flat." },
    ],
    relatedTreks: [
      "seven-world-heritage-kathmandu-day-tour",
      "kathmandu-day-tour",
      "patan-day-tour",
      "bhaktapur-day-tour",
      "kathmandu-valley-tour",
      "nepal-cultural-tour",
    ],
    tripsNote: "Valley tours from a single day to nine, all with a guide and entry fees included.",
    relatedPosts: [
      "bhaktapur-travel-guide",
      "patan-travel-guide",
      "arriving-in-kathmandu-first-48-hours",
      "nepal-festival-calendar",
    ],
    tags: ["kathmandu valley", "UNESCO", "durbar square", "boudhanath", "pashupatinath"],
    meta: {
      title: "Kathmandu Valley UNESCO Sites: A Guide to All Seven",
      description: "All seven Kathmandu Valley World Heritage monument zones — the three Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath and Changu Narayan.",
      keywords: "Kathmandu UNESCO sites, Durbar Square Kathmandu, Boudhanath, Pashupatinath, Changu Narayan, Patan Bhaktapur",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "bhaktapur-travel-guide",
    title: "Bhaktapur Travel Guide: The Best-Preserved City in the Valley",
    cluster: "tours",
    date: "2026-12-01",
    hero: {
      image: "mardi-treks/bhaktapur-day-tour/bhaktapur-day-tour-00-nyatapola-temple-in-the-taumadhi-square-49740557988",
      alt: "Nyatapola temple in Taumadhi Square, Bhaktapur, Nepal.",
    },
    excerpt:
      "A walled medieval Newar city half an hour from Kathmandu, where the whole street plan survives rather than just the monuments. The four squares, the pottery quarter, juju dhau, and why it deserves longer than a morning.",
    intro: [
      { p: "Bhaktapur was the capital of an independent Newar kingdom until 1769, and it is the best-preserved city in the Kathmandu Valley by a wide margin. What makes it different from Kathmandu and Patan is not the quality of individual monuments — Patan's are arguably finer — but that the entire urban fabric is intact: brick lanes, carved window frames, water tanks, courtyard houses, and squares that are still working public spaces rather than ticketed compounds." },
      { p: "It is 30 to 45 minutes from central Kathmandu, and most visitors give it a morning. It deserves a full day, and an overnight is better still." },
    ],
    sections: [
      {
        h2: "The Four Squares",
        blocks: [
          { h3: "Durbar Square" },
          { p: "The royal court, with the <strong>Golden Gate</strong> — a gilded copper doorway into the palace, and the finest piece of metalwork in Nepal — the <strong>55-Window Palace</strong>, the stone Siddhi Lakshmi temple, and the statue of King Bhupatindra Malla on his column. The square lost several temples in the 1934 earthquake and more in 2015, so it is emptier than old photographs show, which has the odd effect of making what survives more legible." },
          { h3: "Taumadhi Square" },
          { p: "Dominated by <strong>Nyatapola</strong>, a five-storey pagoda of 1702 on a five-tiered plinth, the tallest temple in Nepal and the one that survived both the 1934 and 2015 earthquakes essentially undamaged — a fact Nepali engineers still study. Opposite it stands the Bhairavnath temple, and the square is the best place in the valley to sit with a cup of tea and watch a city work." },
          { h3: "Dattatreya Square" },
          { p: "At the eastern end of the old city, quieter, with the Dattatreya temple said to be built from a single tree, and beside it the <strong>Peacock Window</strong> — a 15th-century carved wooden lattice that is the most reproduced image of Newar woodwork in existence. The Woodcarving Museum is here." },
          { h3: "Pottery Square" },
          { p: "A working potters' quarter rather than a display. Clay is thrown, pots are laid out to dry in the sun across the whole square, and fired in straw kilns. You can watch, you can try, and you can buy directly from the potter. It is the most photographed part of Bhaktapur for good reason." },
        ],
      },
      {
        h2: "Beyond the Squares",
        blocks: [
          {
            ul: [
              "<strong>The lanes.</strong> The real pleasure of Bhaktapur is walking the brick alleys between the squares with no particular destination — courtyards, shrines, water tanks, and carved windows every few metres.",
              "<strong>Juju dhau.</strong> King curd — a thick sweet buffalo-milk yoghurt set in clay pots, and a Bhaktapur speciality with no equivalent elsewhere. Eat it from the pot.",
              "<strong>Newari food.</strong> Bara, chatamari, choila, yomari and samay baji. Bhaktapur has the best Newari eating in the valley.",
              "<strong>The water tanks.</strong> Siddha Pokhari at the western entrance and the stepped hitis throughout the city, several of which still supply water.",
              "<strong>Changu Narayan.</strong> The oldest temple in Nepal is a 40-minute drive or a pleasant two-hour walk from Bhaktapur, and the two pair naturally.",
              "<strong>Staying overnight.</strong> Several restored Newar houses operate as small hotels. Bhaktapur after the day visitors leave, with the squares lit and empty, is a different city.",
            ],
          },
        ],
      },
      {
        h2: "The 2015 Earthquake and Restoration",
        blocks: [
          { p: "Bhaktapur was among the worst-affected places in the valley. Several temples in Durbar Square collapsed, many houses were destroyed, and the death toll in the district was significant. Restoration has been substantial and is ongoing, and it has been unusual in two ways worth knowing about." },
          {
            ul: [
              "<strong>Traditional technique.</strong> Much of the rebuilding has used traditional brick, timber and mud-mortar construction rather than concrete, partly on conservation grounds and partly because the traditional system performed better in 2015 than cement retrofits did.",
              "<strong>Local funding.</strong> Bhaktapur Municipality retains its own entry-fee revenue and has financed much of the work directly, which is unusual in Nepal and visible in how fast it has proceeded.",
              "<strong>Nyatapola survived.</strong> The tallest temple in the country, on a stepped plinth, came through both 1934 and 2015 essentially intact, which is studied as a case in traditional seismic design.",
              "<strong>Some gaps remain.</strong> A few temple platforms in Durbar Square are still empty, and you will see scaffolding. It is a living restoration rather than a finished one.",
            ],
          },
          { p: "Your entry fee goes directly into this. It is one of the clearer cases in Nepal where a tourist ticket is visibly doing something." },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Getting there:</strong> 30 to 45 minutes by taxi from Thamel, depending on traffic. Our [[trek:bhaktapur-day-tour|Bhaktapur day tour]] includes the transfer, the entry fee and a guide.",
              "<strong>Entry:</strong> around NPR 1,800 for foreign nationals, which covers the whole old city rather than individual monuments. Keep your ticket — it can usually be extended for a multi-day visit at the ticket office.",
              "<strong>Timing:</strong> arrive before 9 a.m. or stay past 5 p.m. The middle of the day brings the tour groups.",
              "<strong>Footwear:</strong> brick and stone lanes, often uneven. Not the place for sandals.",
              "<strong>Festivals:</strong> <strong>Bisket Jatra</strong> at Nepali New Year in mid-April is Bhaktapur's great festival — chariot processions, a tug of war between city wards, and an enormous pole raised in Taumadhi. If you can time a visit for it, do. See our [[post:nepal-festival-calendar|festival calendar]].",
              "<strong>Guides:</strong> available at the entrance gates, and worth it. Nothing in the city is labelled.",
            ],
          },
          { p: "One combination worth knowing: Bhaktapur in the afternoon, overnight at [[trek:nagarkot-sunrise-tour|Nagarkot]] for the Himalayan dawn, then the ridge walk down to Changu Narayan the next morning. That is the best two-day cultural itinerary available from Kathmandu, and it is a good use of the days either side of a trek." },
        ],
      },
    ],
    faqs: [
      { question: "How far is Bhaktapur from Kathmandu?", answer: "About 13 km east, which is 30 to 45 minutes by road depending on traffic. It is the easiest of the valley's three royal cities to reach as a half or full-day trip, and our day tour includes the transfer, entry fee and a guide." },
      { question: "Why is Bhaktapur better preserved than Kathmandu?", answer: "Because the whole urban fabric survives, not just the monuments — brick lanes, courtyard houses, carved windows, water tanks and working public squares. Kathmandu's old city has been heavily rebuilt around its monuments; Bhaktapur's has not." },
      { question: "How long do I need in Bhaktapur?", answer: "Half a day covers the four main squares. A full day lets you walk the lanes properly, eat Newari food and visit the museums. An overnight is better still — Bhaktapur after the day visitors leave, with the squares lit and empty, is a genuinely different place." },
      { question: "What is Nyatapola?", answer: "A five-storey pagoda of 1702 on a five-tiered plinth in Taumadhi Square, the tallest temple in Nepal. It survived both the 1934 and 2015 earthquakes essentially undamaged, which Nepali engineers still study as a case in traditional seismic design." },
      { question: "What is juju dhau?", answer: "King curd — a thick, sweet buffalo-milk yoghurt set in unglazed clay pots, and a Bhaktapur speciality with no real equivalent elsewhere in Nepal. Eat it straight from the pot. It is sold throughout the old city." },
      { question: "Is Bhaktapur still damaged from the earthquake?", answer: "Partly. Several temples in Durbar Square collapsed in 2015 and a few platforms remain empty, with scaffolding still visible in places. Restoration has been substantial and unusually fast, financed largely from the city's own entry-fee revenue and using traditional brick and timber technique." },
      { question: "How much is the entry fee?", answer: "Around NPR 1,800 for foreign nationals, which covers the entire old city rather than individual monuments, and can usually be extended for a multi-day visit at the ticket office. The revenue is retained by Bhaktapur Municipality and funds the restoration work." },
      { question: "When is the best time to visit?", answer: "Early morning before 9 a.m. or late afternoon after 5 p.m., when the tour groups have gone and the light is good. For a festival, Bisket Jatra at Nepali New Year in mid-April is Bhaktapur's great event — chariot processions and a tug of war between city wards." },
    ],
    relatedTreks: [
      "bhaktapur-day-tour",
      "seven-world-heritage-kathmandu-day-tour",
      "kathmandu-valley-tour",
      "nagarkot-sunrise-tour",
      "nepal-cultural-tour",
    ],
    tripsNote: "Bhaktapur as a day tour and as part of the longer valley and cultural itineraries.",
    relatedPosts: [
      "kathmandu-valley-unesco-sites-guide",
      "patan-travel-guide",
      "nepal-festival-calendar",
      "nagarkot-and-sunrise-viewpoints-near-kathmandu",
    ],
    tags: ["bhaktapur", "newar architecture", "kathmandu valley", "UNESCO", "nyatapola"],
    meta: {
      title: "Bhaktapur Travel Guide: The Best-Preserved City in the Valley",
      description: "A guide to Bhaktapur — the four squares, Nyatapola, the Golden Gate, the pottery quarter, juju dhau, earthquake restoration, and why it deserves more than a morning.",
      keywords: "Bhaktapur travel guide, Nyatapola temple, Bhaktapur Durbar Square, pottery square, juju dhau, Bisket Jatra",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "patan-travel-guide",
    title: "Patan Travel Guide: Newar Craft and the Valley's Finest Square",
    cluster: "tours",
    date: "2026-12-04",
    hero: {
      image: "mardi-treks/patan-day-tour/patan-day-tour-00-sundari-chowk-patan-durbar-square-patan-lalitpur-nepal-rajes",
      alt: "Sundari Chowk at Patan Durbar Square, Lalitpur, Nepal.",
    },
    excerpt:
      "Twenty minutes from Thamel and routinely skipped — Patan has the best Durbar Square, the best museum in Nepal, and a working metalworking quarter that has supplied Himalayan Buddhism for a thousand years.",
    intro: [
      { p: "Patan — properly <strong>Lalitpur</strong>, the city of beauty — sits immediately south of Kathmandu across the Bagmati, and it is the valley's most undervalued destination. It was the third of the Newar kingdoms, it has the finest Durbar Square of the three, it holds the best museum in Nepal, and it remains a working craft city whose bronze casters and metalworkers supply monasteries across the Himalaya." },
      { p: "It is twenty minutes from Thamel. Most visitors on a tight schedule skip it for Bhaktapur, which is a mistake — ideally you see both." },
    ],
    sections: [
      {
        h2: "Durbar Square",
        blocks: [
          { p: "Patan's square is the most architecturally coherent in the valley — a long paved space with the royal palace on one side and a row of temples on the other, rather than the sprawl of Kathmandu's." },
          {
            ul: [
              "<strong>Krishna Mandir (1637)</strong> — a stone shikhara temple in 21 sections, carved with scenes from the Mahabharata and Ramayana. It is the outstanding piece of stone architecture in Nepal and it survived 2015 intact.",
              "<strong>The Royal Palace</strong> — three connected courtyards. <strong>Sundari Chowk</strong> holds the Tusha Hiti, a sunken royal bath ringed with stone deities, which is the single most beautiful object in the valley. <strong>Mul Chowk</strong> and <strong>Mani Keshab Narayan Chowk</strong> complete the set.",
              "<strong>The Patan Museum</strong> — in the restored palace, and genuinely the best museum in Nepal. Its collection of Hindu and Buddhist bronzes is superb and, unusually for South Asia, it is beautifully interpreted. Allow 90 minutes.",
              "<strong>Bhimsen, Vishwanath and Taleju temples</strong> along the eastern row, with the Manga Hiti water spout still in daily use.",
            ],
          },
          { p: "If you visit one monument zone in the Kathmandu Valley and want architecture rather than atmosphere, this is it." },
        ],
      },
      {
        h2: "The Craft Quarters",
        blocks: [
          { p: "Patan's distinction is that it is still a manufacturing city. The Newar metalworking tradition here goes back well over a thousand years — Araniko, the 13th-century architect who built for the Yuan court in Beijing, came from Patan — and it has never stopped." },
          {
            ul: [
              "<strong>Bronze and copper casting</strong> in the alleys around Oku Bahal and Nag Bahal. Lost-wax casting of statues for monasteries across Nepal, Tibet, Bhutan and beyond, done in small family workshops you can look into.",
              "<strong>Thangka painting</strong> — studios throughout the city, with wide variation in quality. Ask to see work in progress rather than the gallery wall.",
              "<strong>Wood carving</strong> and stone work, supplying temple restoration across the valley.",
              "<strong>Mahaboudha</strong> — the terracotta temple of a thousand Buddhas, every brick carrying a Buddha image, tucked in a courtyard off the main streets.",
              "<strong>Hiranya Varna Mahavihar, the Golden Temple</strong> — a working Buddhist monastery off the main square with a gilded facade, resident monks and a tortoise or two in the courtyard. Easy to miss and one of the valley's best interiors.",
            ],
          },
          { p: "Buying here: prices in Patan workshops are lower than in Thamel and the quality is higher, because you are closer to the maker. Ask what the piece is made of and how it was cast, and expect a straight answer." },
        ],
      },
      {
        h2: "Beyond the Centre",
        blocks: [
          {
            ul: [
              "<strong>Kumbeshwar temple</strong> — a five-storey Shiva temple with two sacred ponds said to be fed from Gosaikunda, and a focus of the Janai Purnima festival in August.",
              "<strong>Jawalakhel</strong> — the Tibetan refugee settlement and carpet-weaving centre, where you can watch hand-knotting and buy direct.",
              "<strong>The Central Zoo</strong> — Nepal's only zoo, modest and mainly of interest if you are travelling with children.",
              "<strong>Godavari and Phulchowki</strong> — the botanical garden and the valley's highest rim hill at 2,782 m, both half an hour south and both excellent for birds. See [[trek:bird-watching-in-kathmandu-valley|our valley bird watching day]].",
              "<strong>Bungamati and Khokana</strong> — two traditional villages south of Patan, known for wood carving and mustard-oil pressing, badly hit in 2015 and well worth a visit. [[trek:bungmati-khokana-village-tour|A village tour]] covers them.",
            ],
          },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Getting there:</strong> 20 to 30 minutes by taxi from Thamel. Our [[trek:patan-day-tour|Patan day tour]] includes transfer, entry and a guide.",
              "<strong>Entry:</strong> a ticket for the Durbar Square monument zone, with the Patan Museum charged separately or in combination depending on the current arrangement.",
              "<strong>Time needed:</strong> two to three hours for the square and museum, half a day with the craft quarters, a full day with Bungamati and Khokana.",
              "<strong>Timing:</strong> early morning for the square, because it is a working public space and the morning puja is the best thing in it.",
              "<strong>Festivals:</strong> <strong>Rato Machhindranath Jatra</strong> in April and May is Patan's great festival — a chariot pulled through the city over several weeks, and the longest festival in Nepal.",
              "<strong>Combine it:</strong> Patan in the morning and Kathmandu Durbar Square in the afternoon works well, as does Patan plus Bungamati and Khokana as a full cultural day.",
            ],
          },
          { p: "Our [[post:kathmandu-valley-unesco-sites-guide|valley UNESCO guide]] covers how Patan fits with the other six sites, and [[post:bhaktapur-travel-guide|the Bhaktapur guide]] covers its chief rival — if you have two days, do one each." },
        ],
      },
    ],
    faqs: [
      { question: "Is Patan worth visiting if I am short of time?", answer: "Yes — it is twenty minutes from Thamel and has the finest Durbar Square in the valley plus the best museum in Nepal. If you have only one half day for culture, Patan delivers more per hour than anywhere else in the Kathmandu Valley." },
      { question: "What is the best thing in Patan?", answer: "The Krishna Mandir, a 1637 stone shikhara temple carved in 21 sections with scenes from the Mahabharata and Ramayana, and the Tusha Hiti sunken royal bath in Sundari Chowk. The Patan Museum, in the restored palace, is the best museum in the country." },
      { question: "How is Patan different from Bhaktapur?", answer: "Patan has the finer individual monuments and the better museum; Bhaktapur has the more complete medieval city. Patan is also a working craft centre with active bronze casting and thangka studios. Ideally see both — one each over two days." },
      { question: "Can I buy bronze statues and thangkas in Patan?", answer: "Yes, and prices are lower and quality higher than in Thamel because you are buying closer to the maker. The workshops around Oku Bahal and Nag Bahal do lost-wax casting for monasteries across the Himalaya. Ask to see work in progress rather than only the display wall." },
      { question: "What is the Golden Temple?", answer: "Hiranya Varna Mahavihar, a working Buddhist monastery off the main square with a gilded facade, resident monks and courtyard tortoises. It is easy to walk past and has one of the finest interiors in the valley — worth seeking out deliberately." },
      { question: "How long do I need in Patan?", answer: "Two to three hours for the Durbar Square and the museum, half a day if you add the craft quarters and the Golden Temple, and a full day with the villages of Bungamati and Khokana to the south." },
      { question: "What is Patan's main festival?", answer: "Rato Machhindranath Jatra in April and May, in which a tall chariot is pulled through the city over several weeks — the longest festival in Nepal. Kumbeshwar temple is also a focus of Janai Purnima in August, when its ponds are said to be fed from Gosaikunda." },
    ],
    relatedTreks: [
      "patan-day-tour",
      "bungmati-khokana-village-tour",
      "seven-world-heritage-kathmandu-day-tour",
      "kathmandu-valley-tour",
      "bird-watching-in-kathmandu-valley",
    ],
    tripsNote: "Patan as a half-day tour, and the village and valley itineraries that extend it.",
    relatedPosts: [
      "kathmandu-valley-unesco-sites-guide",
      "bhaktapur-travel-guide",
      "nepal-festival-calendar",
      "arriving-in-kathmandu-first-48-hours",
    ],
    tags: ["patan", "lalitpur", "newar craft", "kathmandu valley", "UNESCO"],
    meta: {
      title: "Patan Travel Guide: Newar Craft and the Valley's Finest Square",
      description: "A guide to Patan (Lalitpur) — the Krishna Mandir, Sundari Chowk, the Patan Museum, the bronze-casting quarters, the Golden Temple.",
      keywords: "Patan travel guide, Lalitpur Nepal, Patan Durbar Square, Krishna Mandir, Patan Museum, Golden Temple Patan",
    },
  },
];
