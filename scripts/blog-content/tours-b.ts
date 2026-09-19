import type { BlogContent } from "./build";

export const toursB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-festival-calendar",
    title: "Nepal Festival Calendar: What Is Happening When",
    cluster: "tours",
    date: "2026-12-08",
    hero: {
      image: "mardi-treks/nepal-cultural-tour/nepal-cultural-tour-00-taleju-temple-patan-durbar-square",
      alt: "Taleju temple at Patan Durbar Square, Kathmandu Valley, Nepal.",
    },
    excerpt:
      "Nepal has more public holidays than almost any country on earth. The festivals worth planning a trip around, month by month, with notes on what closes, what gets busy, and which ones you can actually witness on a trek.",
    intro: [
      { p: "Nepal runs on a lunar calendar and a remarkable number of festivals. Most follow the Bikram Sambat calendar or the Tibetan one, which means their Gregorian dates move each year — a fact that catches out anyone planning around them, and the reason this guide gives months rather than dates." },
      { p: "Some festivals are worth building a trip around. Others are worth knowing about because government offices close for a week and permits cannot be issued. Both matter." },
    ],
    sections: [
      {
        h2: "The Major Festivals, Month by Month",
        blocks: [
          {
            table: {
              head: ["Festival", "Usual month", "What it is", "Effect on travel"],
              rows: [
                ["Losar", "February", "Tibetan New Year, marked in Buddhist regions — Khumbu, Mustang, Dolpo, Tsum", "Quiet trails, monastery ceremonies, family gatherings"],
                ["Shivaratri", "February / March", "Shiva's night. Pashupatinath fills with sadhus and hundreds of thousands of pilgrims", "Pashupatinath extremely crowded for one day"],
                ["Holi", "March", "The colour festival. Kathmandu and Pokhara become a water and powder fight", "Fun, chaotic, and worth avoiding if you dislike being soaked"],
                ["Bisket Jatra", "Mid April", "Bhaktapur's New Year festival — chariots, a tug of war, a great pole raised", "The best single festival to time a Bhaktapur visit for"],
                ["Nepali New Year", "Mid April", "Bikram Sambat new year", "A public holiday; offices closed"],
                ["Rato Machhindranath Jatra", "April / May", "Patan's chariot festival, pulled over several weeks — the longest in Nepal", "Patan streets disrupted and fascinating"],
                ["Buddha Jayanti", "May", "The Buddha's birth, enlightenment and death. Lumbini, Boudhanath, Swayambhunath", "Major day at Lumbini; worth planning for"],
                ["Tiji", "May", "Upper Mustang's three-day masked dance festival at Lo Manthang", "Lodges in Lo Manthang book out months ahead"],
                ["Janai Purnima", "August", "Sacred thread renewal. Tens of thousands walk to Gosaikunda at 4,380 m", "Gosaikunda trail and lodges overwhelmed"],
                ["Gai Jatra", "August", "Newar festival for the recently deceased, with processions and satire", "Kathmandu Valley, colourful and local"],
                ["Indra Jatra", "September", "Kathmandu's great festival — masked dances, chariots, the Kumari in procession", "Kathmandu Durbar Square at its best"],
                ["Dashain", "Late Sep / Oct", "The biggest Hindu festival, fifteen days. Families travel home", "Offices closed a week or more; transport packed; cities quiet"],
                ["Tihar / Deepawali", "Oct / Nov", "Five days of lights, with days dedicated to crows, dogs, cows and brothers", "Beautiful in the cities; some closures"],
                ["Mani Rimdu", "Late Oct / Nov", "Tengboche monastery's masked dance festival in the Khumbu", "Tengboche lodges book out; superb on an EBC trek"],
                ["Chhath", "November", "Terai sun festival on the riverbanks, mainly Mithila communities", "Spectacular in Janakpur and the eastern Terai"],
              ],
            },
          },
        ],
      },
      {
        h2: "Festivals You Can Witness on a Trek",
        blocks: [
          { p: "Five are genuinely accessible from a trekking itinerary, and each changes the trek it sits in." },
          {
            ul: [
              "<strong>Mani Rimdu at Tengboche</strong>, late October or November — three days of masked dance at the Khumbu's principal monastery, on the [[trek:everest-base-camp-trek|Everest Base Camp route]]. The best cultural addition to any Nepali trek. See our [[post:tengboche-monastery-and-sherpa-culture|Tengboche guide]].",
              "<strong>Tiji at Lo Manthang</strong>, usually May — the most important event in Upper Mustang, and the reason many people book [[trek:upper-mustang-trek|that trek]] in spring. See our [[post:tiji-festival-upper-mustang|Tiji guide]].",
              "<strong>Janai Purnima at Gosaikunda</strong>, August — tens of thousands of pilgrims walking to a sacred lake at 4,380 m in the monsoon. Extraordinary, uncomfortable, and unlike anything else. See [[trek:gosaikunda-lake-trek|the Gosaikunda trek]].",
              "<strong>Yartung at Muktinath</strong>, August — horse racing and festivities in Lower Mustang, on the [[trek:jomsom-muktinath-trek|Jomsom Muktinath route]].",
              "<strong>Losar in the Buddhist regions</strong>, February — quieter and more domestic than the others, marked in Khumbu, Mustang, Dolpo and Tsum Valley villages, and a good reason to trek in a month most people avoid.",
            ],
          },
          { p: "All five move with lunar calendars. Tell us at the enquiry stage if one matters to you and we will build the itinerary around the published dates — and book the lodges, which for Tengboche and Lo Manthang is the binding constraint." },
        ],
      },
      {
        h2: "Dashain and Tihar: Plan Around These",
        blocks: [
          { p: "<strong>Dashain</strong> is Nepal's equivalent of Christmas and New Year combined, and it runs for fifteen days in late September or October — directly in the best trekking season." },
          {
            ul: [
              "<strong>Government offices close</strong> for roughly a week at the peak. Restricted-area permits cannot be issued during that period, which matters if your trek needs one.",
              "<strong>Long-distance transport is overwhelmed.</strong> Everyone in Nepal travels home. Buses are full and roads are busy.",
              "<strong>Kathmandu empties</strong> and becomes unusually quiet and pleasant.",
              "<strong>Some lodges on trails close</strong> briefly while families return to villages, though the main routes keep operating.",
              "<strong>Animal sacrifice</strong> is part of the festival at certain temples, which some visitors find difficult. It is easy to avoid if you prefer.",
            ],
          },
          { p: "<strong>Tihar</strong> follows two or three weeks later — five days of oil lamps, marigold garlands, and days dedicated in turn to crows, dogs, cows and brothers. It is the most visually beautiful festival in Nepal and causes far less disruption than Dashain." },
          { p: "Practical advice: if your trek needs a restricted-area permit and your dates fall near Dashain, tell us early so the paperwork can be done before the offices close. Our [[post:restricted-area-trekking-permits-in-nepal|permits guide]] covers the timeline." },
        ],
      },
      {
        h2: "Etiquette at a Festival",
        blocks: [
          {
            ol: [
              "<strong>Ask before photographing people</strong>, especially during rituals, and never during a cremation or funeral rite.",
              "<strong>Do not step into a procession or a dance space</strong> for a photograph. Find a position and stay in it.",
              "<strong>Dress modestly</strong> — shoulders and knees covered at temples and festivals.",
              "<strong>Accept tika and prasad</strong> if offered; it is a blessing, and refusing is awkward. Take it with your right hand.",
              "<strong>Remove shoes</strong> before entering temple buildings and courtyards where others have.",
              "<strong>Walk clockwise</strong> around stupas, chortens and shrines.",
              "<strong>Be careful at crowded events.</strong> Shivaratri at Pashupatinath and Indra Jatra in Kathmandu draw very large crowds with little crowd management.",
              "<strong>Do not bring drones.</strong> They are intrusive at religious events and in several places prohibited.",
            ],
          },
          { p: "A guide matters enormously at a festival. Most of what is happening is not self-explanatory, and a local guide turns a colourful crowd into a sequence you can follow. All our cultural tours include one." },
        ],
      },
    ],
    faqs: [
      { question: "When are Nepal's biggest festivals?", answer: "Dashain in late September or October, running fifteen days, and Tihar two or three weeks later over five days. Both follow the lunar calendar so dates move. Indra Jatra in September, Holi in March and Buddha Jayanti in May are the other major nationwide events." },
      { question: "Does Dashain affect trekking?", answer: "Yes. Government offices close for about a week at the peak, which means restricted-area permits cannot be issued; long-distance transport is overwhelmed as people travel home; and some trail lodges close briefly. The main routes keep operating, and Kathmandu becomes unusually quiet and pleasant." },
      { question: "Which festivals can I see on a trek?", answer: "Mani Rimdu at Tengboche in late October or November on the Everest route, Tiji at Lo Manthang in May in Upper Mustang, Janai Purnima at Gosaikunda in August, Yartung at Muktinath in August, and Losar in the Buddhist regions in February." },
      { question: "Why do festival dates change every year?", answer: "Because they follow lunar calendars — the Bikram Sambat calendar for Hindu festivals and the Tibetan calendar for Buddhist ones — rather than the Gregorian one. Dates are usually confirmed a few months ahead, and we will tell you as soon as they are published." },
      { question: "Should I avoid travelling during a festival?", answer: "Not generally — festivals are among the best reasons to be in Nepal. The things to plan around are permit processing during the Dashain office closures and long-distance transport in that same week. Otherwise a festival adds to a trip rather than disrupting it." },
      { question: "What is Tihar?", answer: "Five days of lights in October or November, with days dedicated in turn to crows, dogs, cows and brothers — oil lamps, marigold garlands, painted doorways and singing groups going house to house. It is the most visually beautiful festival in Nepal and causes little travel disruption." },
      { question: "Is it appropriate for visitors to attend?", answer: "Yes, at public festivals, with the usual courtesies — ask before photographing people, do not step into processions or dance spaces, dress modestly, remove shoes where others do, and accept tika if it is offered. A guide makes the difference between watching and understanding." },
      { question: "Which festival would you recommend timing a trip around?", answer: "Indra Jatra in September if you want Kathmandu at its most alive, Bisket Jatra in mid-April for Bhaktapur, Mani Rimdu in late autumn if you are trekking in the Khumbu, or Tiji in May if you are going to Upper Mustang. Tihar is the most beautiful to simply be present for." },
    ],
    relatedTreks: [
      "nepal-cultural-tour",
      "seven-world-heritage-kathmandu-day-tour",
      "bhaktapur-day-tour",
      "upper-mustang-trek",
      "everest-base-camp-trek",
    ],
    tripsNote: "Cultural tours and treks we can time around a specific festival once the dates are published.",
    relatedPosts: [
      "kathmandu-valley-unesco-sites-guide",
      "tiji-festival-upper-mustang",
      "tengboche-monastery-and-sherpa-culture",
      "bhaktapur-travel-guide",
    ],
    tags: ["festivals", "dashain", "tihar", "nepal culture", "trip planning"],
    meta: {
      title: "Nepal Festival Calendar: What Is Happening When",
      description: "Nepal's festivals month by month — Dashain, Tihar, Indra Jatra, Holi, Tiji, Mani Rimdu and more — with their effect on permits, transport and trekking itineraries.",
      keywords: "Nepal festival calendar, Dashain Tihar dates, Indra Jatra, Mani Rimdu, Tiji festival, Nepali festivals",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "muktinath-pilgrimage-guide",
    title: "Muktinath Pilgrimage Guide: The 108 Spouts and the Eternal Flame",
    cluster: "tours",
    date: "2026-12-11",
    hero: {
      image: "mardi-treks/muktinath-pilgrimage-tour/muktinath-pilgrimage-tour-00-jomsom-main-street-nepal-15538157347",
      alt: "Jomsom main street in the Kali Gandaki valley, Mustang, Nepal.",
    },
    excerpt:
      "A temple at 3,760 m sacred to both Hindus and Buddhists, with 108 water spouts and a natural gas flame burning over a spring. What the pilgrimage involves, the rituals, and how to get there by road, air or on foot.",
    intro: [
      { p: "Muktinath sits at 3,760 m in Lower Mustang, behind the Himalayan barrier in the upper Kali Gandaki, and it is one of the few places in the world held sacred by two major religions at once. For Hindus it is <strong>Mukti Kshetra</strong>, the place of liberation, and one of the 108 Divya Desams of Vaishnavism. For Tibetan Buddhists it is <strong>Chumig Gyatsa</strong>, the hundred waters, and a place of power associated with Guru Rinpoche." },
      { p: "Tens of thousands of pilgrims come each year, most from India and Nepal, and a growing number by helicopter. This is what the site is, what happens there, and the realistic ways to reach it." },
    ],
    sections: [
      {
        h2: "What Is at Muktinath",
        blocks: [
          {
            ul: [
              "<strong>The Vishnu temple</strong> — a modest pagoda-style shrine housing a murti of Vishnu, served by a Buddhist nun, which tells you most of what you need to know about the site's shared character.",
              "<strong>The 108 water spouts</strong> — brass spouts shaped as cow heads set into a wall behind the temple, fed by glacial meltwater. Pilgrims bathe under all 108 in sequence, in water a few degrees above freezing. The number corresponds to the 108 Divya Desams and to the 108 beads of a mala.",
              "<strong>The two pools</strong> — Laxmi and Saraswati Kunda, in which pilgrims immerse themselves after the spouts.",
              "<strong>Jwala Mai temple</strong> — a small Buddhist gompa below the main temple where a natural gas seep burns as an <strong>eternal flame above a spring of water</strong>. Fire and water together is the core of the site's significance in both traditions.",
              "<strong>The Shaligram connection</strong> — the Kali Gandaki riverbed below produces ammonite fossils held sacred as manifestations of Vishnu. Collecting them from the river is restricted; buy from licensed sellers.",
              "<strong>The setting</strong> — Dhaulagiri and Nilgiri across the valley, the Thorong La above, and the dry ochre landscape of Mustang all around.",
            ],
          },
        ],
      },
      {
        h2: "The Rituals",
        blocks: [
          { p: "For pilgrims, the sequence matters. Visitors are welcome to watch and, if they wish, to participate respectfully." },
          {
            ol: [
              "<strong>Arrive and rest.</strong> At 3,760 m, most pilgrims arriving by road or air from low altitude feel the thin air immediately. The temple complex is a further 20-minute walk uphill from the road at Ranipauwa.",
              "<strong>Bathe under the 108 spouts</strong>, moving clockwise, in water from glacial melt. It is genuinely freezing and done quickly.",
              "<strong>Immerse in the two pools.</strong>",
              "<strong>Enter the Vishnu temple</strong> for darshan, and make offerings.",
              "<strong>Visit Jwala Mai</strong> to see the eternal flame.",
              "<strong>Circumambulate</strong> the complex clockwise.",
            ],
          },
          { p: "Etiquette for visitors: remove shoes in the temple complex, dress modestly with shoulders and knees covered, do not photograph people bathing, walk clockwise, and do not touch the murti or enter the inner sanctum if you are not participating. The nun who serves the temple, and the monks at Jwala Mai, will generally welcome questions." },
        ],
      },
      {
        h2: "How to Get There",
        blocks: [
          {
            table: {
              head: ["Route", "Duration", "Suits"],
              rows: [
                ["[[trek:muktinath-pilgrimage-tour|By road from Pokhara]]", "6 days", "Pilgrims and travellers who want the temple without trekking"],
                ["[[trek:muktinath-helicopter-tour-from-pokhara|Helicopter from Pokhara]]", "1 day", "Limited time, limited mobility, or elderly pilgrims"],
                ["[[trek:jomsom-muktinath-trek|Jomsom Muktinath trek]]", "9 days", "Walking the Kali Gandaki with Kagbeni and Marpha on the way"],
                ["[[trek:jomsom-muktinath-trek-from-pokhara|Jomsom Muktinath from Pokhara]]", "5 days", "The short trekking version"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "15 days", "Arriving over the Thorong La at 5,416 m, as trekkers have for decades"],
                ["[[trek:muktinath-damodar-kunda-helicopter-tour|Muktinath and Damodar Kunda helicopter]]", "1 day", "Adding the high sacred lakes at 4,890 m"],
              ],
            },
          },
          { p: "The road now reaches Muktinath itself, which has transformed access — a jeep from Jomsom takes under two hours where it was a day's walk. That has made the pilgrimage possible for elderly and less mobile pilgrims, and it has also made the valley floor dusty and busy. Walking the west-bank and high trails avoids most of that; see our [[post:jomsom-muktinath-trek-guide|Jomsom Muktinath guide]]." },
        ],
      },
      {
        h2: "Altitude, Season, and Practicalities",
        blocks: [
          {
            ul: [
              "<strong>Altitude.</strong> 3,760 m is high enough to matter, particularly for pilgrims arriving by helicopter from 820 m in Pokhara within the hour. Light-headedness and breathlessness are common. Anyone with a heart or lung condition should take medical advice before a helicopter visit, and everyone should move slowly on arrival.",
              "<strong>Season.</strong> Muktinath is behind the Himalaya in the rain shadow, so it works year-round in principle. October to November and March to May are the most reliable; winter is cold and clear with some snow; the monsoon is dry here but flights into Jomsom are unreliable.",
              "<strong>The wind.</strong> The Kali Gandaki funnels a strong valley wind from late morning. Morning visits are considerably more pleasant.",
              "<strong>Accommodation.</strong> Ranipauwa below the temple has a range of lodges and pilgrim guesthouses, and Jomsom and Kagbeni both have better ones.",
              "<strong>Crowds.</strong> Busiest during the Hindu pilgrimage season and at <strong>Yartung</strong> in August, when Mustang holds horse races and festivities.",
              "<strong>Combining it.</strong> Muktinath pairs naturally with Kagbeni, Marpha's apple orchards, and Upper Mustang beyond the checkpoint.",
            ],
          },
          { p: "For Buddhist pilgrims, [[trek:buddhist-pilgrimage-tour-nepal|our Buddhist pilgrimage tour]] covers Lumbini and the Kathmandu Valley sites, and [[trek:lumbini-tour|the Lumbini tour]] focuses on the Buddha's birthplace — see our [[post:lumbini-travel-guide|Lumbini guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Why is Muktinath sacred?", answer: "It is held sacred by both Hindus and Buddhists. For Hindus it is Mukti Kshetra, a place of liberation and one of the 108 Divya Desams of Vaishnavism. For Tibetan Buddhists it is Chumig Gyatsa, associated with Guru Rinpoche. The natural gas flame burning above a spring — fire and water together — is central to both traditions." },
      { question: "What are the 108 spouts?", answer: "Brass spouts shaped as cow heads set into a wall behind the main temple, fed by glacial meltwater. Pilgrims bathe under all 108 in sequence in near-freezing water. The number corresponds to the 108 Divya Desams of Vaishnavism and to the 108 beads of a mala." },
      { question: "How do I get to Muktinath?", answer: "By road from Pokhara on a six-day pilgrimage tour, by helicopter from Pokhara in a day, on foot via the Jomsom Muktinath trek in five to nine days, or over the Thorong La on the Annapurna Circuit. The road now reaches the temple itself, making it accessible to elderly and less mobile pilgrims." },
      { question: "How high is Muktinath and is altitude a problem?", answer: "3,760 m. It matters, particularly for pilgrims flying in by helicopter from Pokhara at 820 m within the hour — light-headedness and breathlessness are common. Move slowly on arrival, and anyone with a heart or lung condition should take medical advice before a helicopter visit." },
      { question: "Can non-Hindus and non-Buddhists visit?", answer: "Yes, and visitors are welcome throughout the complex. Remove shoes, dress modestly with shoulders and knees covered, walk clockwise, do not photograph people bathing, and do not enter the inner sanctum or touch the murti unless participating. The temple is served by a Buddhist nun who generally welcomes questions." },
      { question: "When is the best time to visit?", answer: "October to November and March to May are the most reliable. Muktinath sits in the rain shadow so it is dry year-round, but Jomsom flights are unreliable in the monsoon and winter brings cold and some snow. Visit in the morning — the valley wind builds from late morning." },
      { question: "What is the eternal flame?", answer: "A natural gas seep burning continuously inside the small Jwala Mai gompa below the main temple, directly above a spring of water. The combination of fire and water in one place is what gives Muktinath its significance in both the Hindu and Buddhist traditions." },
      { question: "What are shaligram stones?", answer: "Ammonite fossils from the Kali Gandaki riverbed below Muktinath, held sacred as manifestations of Vishnu and used in household worship. Collecting them from the river is restricted, so buy from licensed sellers rather than taking stones from the riverbed." },
    ],
    relatedTreks: [
      "muktinath-pilgrimage-tour",
      "muktinath-helicopter-tour-from-pokhara",
      "jomsom-muktinath-trek",
      "muktinath-damodar-kunda-helicopter-tour",
      "annapurna-circuit-trek",
    ],
    tripsNote: "Every way we reach Muktinath — by road, by helicopter, and on foot.",
    relatedPosts: [
      "jomsom-muktinath-trek-guide",
      "lumbini-travel-guide",
      "helicopter-tours-in-nepal-guide",
      "nepal-festival-calendar",
    ],
    tags: ["muktinath", "pilgrimage", "mustang", "hindu buddhist", "kali gandaki"],
    meta: {
      title: "Muktinath Pilgrimage Guide: The 108 Spouts and the Eternal Flame",
      description: "Muktinath at 3,760 m — the Vishnu temple, the 108 water spouts, the eternal flame at Jwala Mai, the rituals, and how to reach it by road, helicopter or on foot.",
      keywords: "Muktinath temple, 108 spouts Muktinath, Muktinath pilgrimage, Jwala Mai eternal flame, Muktinath helicopter",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "lumbini-travel-guide",
    title: "Lumbini Travel Guide: The Birthplace of the Buddha",
    cluster: "tours",
    date: "2026-12-15",
    hero: {
      image: "mardi-treks/lumbini-tour/lumbini-tour-00-maya-devi-temple-and-ashoka-pillar-lumbini-rupandehi-nepal",
      alt: "Maya Devi Temple and the Ashoka Pillar at Lumbini, Nepal.",
    },
    excerpt:
      "A UNESCO site in the Terai where Siddhartha Gautama was born in 623 BCE, with an Ashokan pillar, the marker stone, an international monastic zone, and the ruined Shakya capital at Tilaurakot nearby.",
    intro: [
      { p: "Lumbini, in the Rupandehi district of Nepal's southern plains, is where <strong>Siddhartha Gautama</strong> — the historical Buddha — was born, traditionally in 623 BCE. It is one of the four principal Buddhist pilgrimage sites, alongside Bodh Gaya, Sarnath and Kushinagar in India, and it was inscribed as a UNESCO World Heritage site in 1997." },
      { p: "It is also, unlike the Kathmandu Valley sites, a quiet place. The sacred garden is a large landscaped park, the monastic zone is spread over several square kilometres, and the Terai heat means most visitors move slowly. Two days is about right." },
    ],
    sections: [
      {
        h2: "The Sacred Garden",
        blocks: [
          {
            ul: [
              "<strong>Maya Devi Temple</strong> — built over the excavated remains of earlier shrines, and housing the <strong>marker stone</strong> identified as indicating the exact birthplace, along with a sandstone relief of the nativity. The archaeology beneath is visible on a walkway.",
              "<strong>The Ashoka Pillar</strong> — erected by the emperor Ashoka in 249 BCE during his pilgrimage, with an inscription recording that he came in person and exempted the village from tax because the Buddha was born there. It is the single most important piece of evidence identifying the site, and it is still standing.",
              "<strong>The Puskarini pool</strong> — the sacred pond beside the temple, in which Maya Devi is said to have bathed before the birth, and where the infant Buddha was bathed.",
              "<strong>The Bodhi tree</strong> and prayer flags beside the pool, where monks and pilgrims sit and chant. The atmosphere here in the early morning is the best thing at Lumbini.",
              "<strong>The ruins</strong> — brick stupas and monastery foundations from the 3rd century BCE to the 5th century CE spread across the garden.",
            ],
          },
          { p: "Shoes come off at the entrance to the Maya Devi Temple area and photography inside is prohibited. The garden itself is open and peaceful, and early morning before the heat is by far the best time." },
        ],
      },
      {
        h2: "The Monastic Zone",
        blocks: [
          { p: "Around the sacred garden, a master plan drawn up by the Japanese architect Kenzo Tange in the 1970s allocated land to Buddhist nations to build monasteries. The result is a sprawling park containing several dozen temples in wildly different national styles, which is either fascinating or kitsch depending on your temperament — most people find it fascinating." },
          {
            ul: [
              "<strong>The Myanmar Golden Temple</strong>, one of the earliest and most striking.",
              "<strong>The Thai Monastery</strong>, a gleaming white and blue complex.",
              "<strong>The German Great Lotus Stupa</strong>, with remarkable interior murals.",
              "<strong>The Chinese, Korean, Vietnamese, Sri Lankan, Cambodian and Nepali monasteries</strong>, among many others.",
              "<strong>The World Peace Pagoda</strong>, built by Japanese Buddhists at the northern end.",
              "<strong>The eternal flame</strong>, lit in 1986 to mark the International Year of Peace.",
              "<strong>The Lumbini Museum and research institute</strong>, for the archaeology and the textual history.",
            ],
          },
          { p: "The zone is large — several square kilometres — and best covered by bicycle, rickshaw or e-rickshaw rather than on foot in the heat. Most are open to visitors and several offer meditation sessions." },
        ],
      },
      {
        h2: "Tilaurakot and the Wider Sites",
        blocks: [
          { p: "Lumbini is the birthplace; the Buddha grew up somewhere else, and that somewhere is 27 km west." },
          {
            ul: [
              "<strong>Tilaurakot</strong> — widely identified as <strong>Kapilvastu</strong>, the capital of the Shakya kingdom where Siddhartha spent his first 29 years as a prince before renouncing it. The site holds the excavated remains of a fortified city — gateways, walls, streets, a palace complex — in open farmland with almost no visitors. For anyone interested in the historical rather than devotional Buddha, this is the more affecting place.",
              "<strong>Kudan</strong> — where the Buddha is said to have met his father after his enlightenment.",
              "<strong>Gotihawa and Niglihawa</strong> — associated with earlier Buddhas, each with an Ashokan pillar fragment.",
              "<strong>Ramagrama</strong> — the only undisturbed original stupa holding relics of the Buddha, to the east.",
            ],
          },
          { p: "Our [[trek:lumbini-tour|3-day Lumbini tour]] covers the sacred garden, the monastic zone and Tilaurakot. The [[trek:buddhist-pilgrimage-tour-nepal|Buddhist pilgrimage tour]] links Lumbini with Boudhanath, Swayambhunath and the valley's Buddhist sites." },
        ],
      },
      {
        h2: "Practicalities",
        blocks: [
          {
            ul: [
              "<strong>Getting there:</strong> fly to Bhairahawa (Gautam Buddha International Airport) from Kathmandu, 35 minutes, then 30 minutes by road. Or drive from Kathmandu in eight to nine hours, or from Pokhara in six to seven.",
              "<strong>Climate:</strong> Terai lowland at 150 m. October to March is comfortable; April to June is very hot, often above 40 °C; the monsoon is humid and wet.",
              "<strong>Time needed:</strong> one full day for the sacred garden and part of the monastic zone, two days to include Tilaurakot.",
              "<strong>Getting around:</strong> bicycle or e-rickshaw inside the monastic zone. Do not plan to walk it in April.",
              "<strong>Accommodation:</strong> a range from pilgrim guesthouses to comfortable hotels near the site, plus monastery guesthouses for those on retreat.",
              "<strong>Buddha Jayanti</strong> in May — the Buddha's birth, enlightenment and death, and the major festival at Lumbini. Busy and worth it.",
              "<strong>Meditation:</strong> several monasteries run sessions and short retreats, and the Vipassana centre nearby runs longer courses.",
            ],
          },
          { p: "Lumbini pairs well with [[trek:chitwan-national-park-tour-3-days|Chitwan]], which is on the same highway, and with the Kathmandu Valley sites. For a broader cultural circuit, see [[post:nepal-cultural-tour-itineraries|our cultural tour guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "Where is Lumbini?", answer: "In the Rupandehi district of Nepal's southern Terai plains at about 150 m altitude, near Bhairahawa. Fly from Kathmandu to Gautam Buddha International Airport in 35 minutes then 30 minutes by road, or drive eight to nine hours from Kathmandu or six to seven from Pokhara." },
      { question: "What is there to see at Lumbini?", answer: "The Maya Devi Temple over the birthplace with its marker stone, the Ashoka Pillar of 249 BCE, the Puskarini sacred pool, extensive ancient ruins, and a monastic zone of several dozen temples built by Buddhist nations across several square kilometres." },
      { question: "What is the Ashoka Pillar?", answer: "A pillar erected by the emperor Ashoka in 249 BCE during his pilgrimage, inscribed to record that he visited in person and exempted the village from tax because the Buddha was born there. It is the single most important piece of evidence identifying the site, and it still stands." },
      { question: "How long should I spend at Lumbini?", answer: "One full day covers the sacred garden and part of the monastic zone. Two days lets you add Tilaurakot, the excavated Shakya capital 27 km west where the Buddha grew up, which is the more affecting site for anyone interested in the historical Buddha." },
      { question: "What is Tilaurakot?", answer: "The site widely identified as Kapilvastu, capital of the Shakya kingdom, where Siddhartha spent his first 29 years before renouncing his position. The excavated remains of a fortified city — gateways, walls, streets, a palace complex — sit in open farmland with almost no visitors." },
      { question: "When is the best time to visit?", answer: "October to March, when the Terai is comfortable. April to June is very hot, often above 40 °C, and the monsoon is humid and wet. Buddha Jayanti in May is the major festival and worth timing a visit for, despite the heat." },
      { question: "Can I meditate or stay at a monastery?", answer: "Yes — several monasteries in the monastic zone run meditation sessions and short retreats, some offer guesthouse accommodation, and there is a Vipassana centre nearby running longer courses. Arrange it in advance rather than arriving and asking." },
      { question: "Can I combine Lumbini with other destinations?", answer: "Easily. Chitwan National Park is on the same highway, and the Kathmandu Valley's Buddhist sites at Boudhanath and Swayambhunath complete the picture — our Buddhist pilgrimage tour links them. Pokhara is six to seven hours by road." },
    ],
    relatedTreks: [
      "lumbini-tour",
      "buddhist-pilgrimage-tour-nepal",
      "chitwan-national-park-tour-3-days",
      "nepal-cultural-tour",
      "best-of-nepal-tour",
    ],
    tripsNote: "Lumbini as a dedicated tour and as part of the wider pilgrimage and cultural circuits.",
    relatedPosts: [
      "kathmandu-valley-unesco-sites-guide",
      "muktinath-pilgrimage-guide",
      "nepal-cultural-tour-itineraries",
      "chitwan-national-park-guide",
    ],
    tags: ["lumbini", "buddha", "pilgrimage", "UNESCO", "terai"],
    meta: {
      title: "Lumbini Travel Guide: The Birthplace of the Buddha",
      description: "A guide to Lumbini — the Maya Devi Temple and marker stone, the Ashoka Pillar, the international monastic zone, Tilaurakot, and how to plan a visit.",
      keywords: "Lumbini travel guide, birthplace of Buddha, Maya Devi Temple, Ashoka Pillar Lumbini, Tilaurakot Kapilvastu",
    },
  },
];
