import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 8: Bhaktapur's own version of the festival, the
 * question most visitors hesitate to ask, and the festival through a lens.
 *
 * The Bhaktapur article describes living ritual whose details vary between
 * accounts and between years; it is written at the level a visitor can rely
 * on and says so where the timing is not fixed.
 */
export const dashainH: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "bhaktapur-during-dashain-navadurga-and-mohani",
    title: "Bhaktapur During Dashain: Mohani and the Navadurga Dancers",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.navadurgaDance,
      alt: "Navadurga dancers in painted masks and striped skirts performing in a brick square in Bhaktapur.",
    },
    excerpt:
      "In Bhaktapur, Dashain is Mohani: nine dawns of visiting the goddess shrines that ring the city, a night of sacrifice, and on the tenth day the first appearance of the Navadurga — masked dancers who are treated as living gods. The most distinctive Dashain in Nepal, and how to see it.",
    intro: [
      { p: "Forty minutes east of Kathmandu, Bhaktapur keeps the festival in a way found nowhere else. The city is Newar, medieval in plan and largely intact, and its Dashain — <em>Mohani</em> in the Newar language — is woven into its streets: the goddesses being worshipped have shrines at fixed points around the town, and the festival moves between them day by day." },
      { p: "It ends with the Navadurga, a troupe of masked dancers who appear for the first time each year at Dashain and then perform through the city's neighbourhoods for months. This guide explains what happens and what a visitor can see. The town itself is covered in our [[post:bhaktapur-travel-guide|Bhaktapur travel guide]]." },
    ],
    sections: [
      {
        h2: "Mohani: The Newar Dashain",
        blocks: [
          { p: "The Newars of the Kathmandu valley celebrate the same fifteen days as the rest of the country under their own names and with their own rites. The outline will be familiar from [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]]; the texture is different." },
          {
            table: {
              head: ["Day", "Newar name", "What happens"],
              rows: [
                ["Day 1", "Nala Swane", "Barley is sown in the family's prayer room"],
                ["Day 8", "Kuchhi Bhoye", "The clan feast: beaten rice and many dishes eaten off banana leaves, seated in order of age"],
                ["Day 9", "Syakwa Tyakwa", "Sacrifice to the goddess; tools, weapons and vehicles are worshipped"],
                ["Day 10", "Chalan", "The tika, here including a mark of black lamp soot; processions; the Navadurga appear"],
              ],
            },
          },
          { p: "The festival is kept by clan rather than by nuclear family. Each lineage has a shrine room that outsiders do not enter, and the feast on the eighth day gathers everyone who belongs to it. What a visitor sees is the part that spills into the street — and in Bhaktapur a great deal does." },
        ],
      },
      {
        h2: "A City Ringed by Goddesses",
        blocks: [
          { p: "Bhaktapur was laid out as a sacred diagram. Around its edge stand the open-air shrines of eight mother goddesses — Brahmayani, Maheshwari, Kumari, Bhadrakali, Barahi, Indrayani, Mahakali and Mahalakshmi — each guarding a direction, with a ninth, Tripurasundari, at the centre. Together they protect the town." },
          { p: "During Mohani the city visits them in turn. Before dawn on each of the first nine days, people walk to that day's shrine — beginning in the east at Brahmayani, beside the river, and working round — bathe at the nearest water, make offerings and walk home as it gets light. Neighbourhood music groups go with them, playing drums and flutes." },
          { p: "For a visitor staying in the town it is one of the most atmospheric things in Nepal: lamps moving through dark brick lanes at five in the morning, and a crowd gathered at a shrine that on any other day you would walk past." },
          {
            figure: {
              image: DASHAIN.navadurgaTemple,
              alt: "The carved brick and timber facade of the Navadurga temple in Bhaktapur.",
              caption: "The Navadurga temple in Bhaktapur, home of the masks and their dancers.",
            },
          },
        ],
      },
      {
        h2: "The Navadurga",
        blocks: [
          { p: "<em>Navadurga</em> means the nine Durgas. In Bhaktapur it is a troupe of dancers, drawn from one hereditary community of the town, who wear the masks of the goddesses and their companions — Bhairav, Mahakali, Barahi, Kumari, Ganesh and the rest. Once masked they are not regarded as performers. They are the deities, and are treated as such: people bow to them, make offerings and bring children to be blessed." },
          { p: "The masks are made new every year by a family of traditional painters, in clay and paper, to a fixed design, and are consecrated during Mohani. At the end of the cycle, in early summer, they are cremated like a body and the ashes kept for the next year's set. For about nine months in between, the troupe moves through Bhaktapur's neighbourhoods and the nearby towns, performing a sequence of dances in each." },
          {
            figure: {
              image: DASHAIN.mahakaliMask,
              alt: "A Navadurga dancer in the red mask of Mahakali, holding a sword, in front of a temple in Bhaktapur.",
              caption: "Mahakali of the Navadurga. Once the mask is on, the dancer is treated as the goddess.",
            },
          },
          { p: "Dashain is when it begins. The troupe has been in retreat through the monsoon; the new masks are brought out and given life on the night of the ninth day, at the Brahmayani shrine, where by tradition a buffalo representing the demon is sacrificed. On the tenth day the town goes there to see the masks, and the dancers make their first appearance of the year." },
        ],
      },
      {
        h2: "What a Visitor Can See, Day by Day",
        blocks: [
          {
            table: {
              head: ["Day", "2026 date", "In Bhaktapur", "For a visitor"],
              rows: [
                ["Days 1 – 7", "11 – 17 Oct", "Dawn visits to a different goddess shrine each morning", "Stay overnight and go with your guide before sunrise"],
                ["Day 8", "Sun 18 Oct", "Kuchhi Bhoye in every household; sacrifices at Taleju and the shrines", "The squares are quiet in the afternoon; restaurants thin"],
                ["Day 9", "Tue 20 Oct", "Tools and vehicles blessed; at night, the rites at Brahmayani", "Crowds gather at Brahmayani after dark. Intense; includes sacrifice"],
                ["Day 10", "Wed 21 Oct", "The town visits Brahmayani; processions; the Navadurga appear", "The day to be here. Ask locally for the hour — it is not published"],
                ["After", "From 22 Oct", "The Navadurga begin their round of the neighbourhoods", "Performances continue on certain days for months"],
              ],
              note: "Ritual timings are set by priests and astrologers and change each year. Dates here follow the 2026 calendar; see our [[post:dashain-dates-calendar-for-travellers|Dashain dates guide]].",
            },
          },
          { p: "If you cannot be there for the festival, the Navadurga can still be seen. From Dashain until early summer they perform in one neighbourhood or another, and a guide from the town will know where." },
        ],
      },
      {
        h2: "The Rest of the City",
        blocks: [
          { p: "Bhaktapur's three great squares keep their own pace through the festival. <strong>Durbar Square</strong> holds the palace of fifty-five windows and the Golden Gate, behind which the Taleju temple — the royal goddess again — is the centre of the state side of Mohani; its inner courtyards are closed to non-Hindus. <strong>Taumadhi Square</strong> has the five-tiered Nyatapola, and <strong>Dattatreya Square</strong> the oldest quarter of the town. Potters' Square carries on as usual, the clay drying in rows in the October sun." },
          {
            figure: {
              image: "mardi-treks/bhaktapur-day-tour/bhaktapur-day-tour-00-nyatapola-temple-in-the-taumadhi-square-49740557988",
              alt: "The five-tiered Nyatapola temple rising above Taumadhi Square in Bhaktapur.",
              caption: "The Nyatapola in Taumadhi Square. Bhaktapur's squares stay lived-in through the festival, when much of Kathmandu has gone home.",
            },
          },
          { p: "Because Bhaktapur's people are from Bhaktapur, the town does not empty as Kathmandu does. Shops close for the main days, but the streets are full of residents in their best clothes, and the evening feel is of a town at home rather than a town away. Our [[trek:bhaktapur-day-tour|Bhaktapur day tour]] covers the squares; the valley's other monuments are in [[post:kathmandu-valley-unesco-sites-guide|our UNESCO sites guide]]." },
        ],
      },
      {
        h2: "Etiquette Around the Dancers",
        blocks: [
          {
            ul: [
              "<strong>Do not touch them</strong> or block their path. They are sacred while masked, and the troupe moves fast.",
              "<strong>Give way to worshippers.</strong> People are there to receive a blessing, not to watch a show.",
              "<strong>Photograph from the edge</strong>, without flash, and never push to the front. See [[post:photographing-dashain-in-nepal|photographing Dashain]].",
              "<strong>Expect sacrifice.</strong> Offerings to the Navadurga include animals, and the dancers' rites are not softened for visitors — read [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]].",
              "<strong>Go with a local guide.</strong> Nothing about the timing is posted anywhere, and the difference between seeing it and missing it is someone who knows.",
              "<strong>Dress modestly</strong> and remove shoes where others do.",
            ],
          },
        ],
      },
      {
        h2: "Practicalities",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["Getting there", "40 minutes to an hour from central Kathmandu; much quicker than usual in the festival's empty days"],
                ["Entry", "Foreign visitors buy a ticket at the town gates; keep it, as it can be extended for a longer stay"],
                ["Staying", "Stay at least one night. The dawn visits and the evening rites both happen when day visitors are not there"],
                ["Eating", "Guesthouse restaurants stay open. Try juju dhau, the town's thick yoghurt, and a Newari set — see the [[post:dashain-food-guide-what-to-eat|Dashain food guide]]"],
                ["Combining", "Nagarkot, for sunrise over the Himalaya, is 45 minutes further — [[trek:nagarkot-sunrise-tour|Nagarkot sunrise tour]]"],
              ],
            },
          },
          { p: "A [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] dated for the festival puts its Bhaktapur day on the eighth or the tenth, and the [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] finishes here at golden hour. For Kathmandu's side of the festival, see [[post:kathmandu-during-dashain|Kathmandu during Dashain]]." },
        ],
      },
    ],
    faqs: [
      { question: "What is Mohani?", answer: "Mohani is the Newar name for Dashain, celebrated by the Newar community of the Kathmandu valley over the same fifteen days. Its main days are Nala Swane (the sowing of barley), Kuchhi Bhoye (the clan feast on the eighth day), Syakwa Tyakwa (the ninth) and Chalan (the tenth)." },
      { question: "What is the Navadurga dance?", answer: "A sacred masked dance of Bhaktapur in which dancers from a hereditary community embody nine forms of the goddess Durga and their companion deities. The troupe first appears each year at Dashain and performs in the town's neighbourhoods until early summer." },
      { question: "When can I see the Navadurga dancers?", answer: "Their first appearance is on the tenth day of Dashain. After that they perform on particular days in different neighbourhoods of Bhaktapur and nearby towns for about nine months. Timings are not published; a local guide will know." },
      { question: "Is Bhaktapur worth visiting during Dashain?", answer: "Yes. It has the richest local version of the festival in Nepal, and unlike Kathmandu it does not empty, because its residents are from the town. Stay overnight to see the dawn and evening rites." },
      { question: "Can tourists watch the Navadurga?", answer: "Yes, from a respectful distance. Do not touch the dancers or block their way, avoid flash, and give priority to worshippers. Some of the associated rites include animal sacrifice." },
      { question: "Are the masks really destroyed every year?", answer: "Yes. The Navadurga masks are made new each year, consecrated at Dashain, and cremated at the end of the cycle in early summer. The ashes are kept and mixed into the clay for the following year's masks." },
      { question: "How do I get to Bhaktapur from Kathmandu?", answer: "By road, about 13 km east — 40 minutes to an hour in normal traffic and less during the festival. Taxis are scarce on the tika day, so arrange transport in advance or stay in the town." },
      { question: "Is Bhaktapur open during Dashain?", answer: "The squares and monuments are open and the ticket counters staffed. Many shops close for the main days; guesthouses and their restaurants stay open." },
    ],
    relatedTreks: [
      "bhaktapur-day-tour",
      "kathmandu-valley-tour",
      "kathmandu-photography-tour",
      "nagarkot-sunrise-tour",
      "seven-world-heritage-kathmandu-day-tour",
    ],
    tripsNote: "Tours that spend time in Bhaktapur and can be dated for the festival.",
    relatedPosts: [
      "bhaktapur-travel-guide",
      "kathmandu-during-dashain",
      "fifteen-days-of-dashain-explained",
      "where-to-see-dashain-celebrations-in-nepal",
      "photographing-dashain-in-nepal",
      "kathmandu-valley-unesco-sites-guide",
    ],
    tags: ["Dashain", "Bhaktapur", "Newar Culture", "Festivals", "Kathmandu Valley"],
    meta: {
      title: "Bhaktapur During Dashain: Mohani and the Navadurga",
      description: "Bhaktapur's Dashain is Mohani: dawn visits to nine goddess shrines and the first appearance of the masked Navadurga dancers. What happens and how to see it.",
      keywords: "Bhaktapur Dashain, Navadurga dance, Mohani festival, Nava Durga Bhaktapur, Newar Dashain, Brahmayani Bhaktapur, Bhaktapur festival October",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "animal-sacrifice-at-dashain-what-travellers-should-know",
    title: "Animal Sacrifice at Dashain: What Travellers Should Know",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.goatsMustang,
      alt: "A herd of mountain goats gathered in a village yard in Mustang before being driven south for Dashain.",
    },
    excerpt:
      "On the eighth and ninth days of Dashain, goats, buffalo and birds are sacrificed at temples and in household yards across Nepal. It is central to the festival, public, and avoidable. What happens and why, where you will and will not see it, the debate within Nepal, and how to behave if you choose to watch.",
    intro: [
      { p: "This is the part of Dashain that guidebooks tend to mention in one sentence and visitors tend to worry about. It deserves a plain account. Animal sacrifice is not a fringe of the festival; it is the ritual centre of its middle days, practised by a large part of the population. It is also confined to particular places and two particular days, and a visitor who would rather not see it need not." },
      { p: "We have tried to describe it without either relish or lecturing. The festival as a whole is covered in our [[post:dashain-festival-nepal-travel-guide|Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "What Happens, and Why",
        blocks: [
          { p: "Dashain commemorates the goddess Durga's killing of the buffalo demon Mahishasura. On <strong>Maha Ashtami</strong> and <strong>Maha Navami</strong>, the eighth and ninth days, that act is re-enacted as an offering, <em>bali</em>, to the goddess in her fierce forms — Durga, Kali, Bhagwati. The animal is most often a male goat; buffalo, ducks, chickens and occasionally sheep are also offered." },
          { p: "The animal is sprinkled with water, and when it shakes itself this is taken as consent. It is killed with a single stroke of a heavy knife, and the blood is offered to the image of the goddess. The carcass goes home, or to the butchers working beside the temple, and is eaten over the following days — it is the feast described in our [[post:dashain-food-guide-what-to-eat|Dashain food guide]]." },
          { p: "On the ninth day the same blessing is extended to tools and vehicles. Cars, buses and motorbikes are garlanded and marked with red, and many have a small animal, an egg or a coconut offered in front of them for a year without accidents." },
        ],
      },
      {
        h2: "Not Everyone Sacrifices",
        blocks: [
          { p: "It would be wrong to picture the whole country with a knife in its hand. A substantial number of Hindu households are vegetarian and never have. Others have stopped: the standard substitute is a <strong>pumpkin</strong> or ash gourd, split with the same stroke, and coconuts, sugar cane and radish are also used. Urban families increasingly make a symbolic offering and buy their meat from the butcher. Buddhist communities — Sherpa, Tamang in many places, the people of Mustang and Manang — generally do not sacrifice at Dashain at all." },
        ],
      },
      {
        h2: "Where It Happens",
        blocks: [
          {
            table: {
              head: ["Place", "What happens", "For a visitor"],
              rows: [
                ["Dakshinkali, south of Kathmandu", "The best-known sacrificial temple; sacrifices twice a week all year, and in great numbers at Dashain", "Visitors watch from the terraces above the enclosure — [[trek:pharping-dakshinkali-tour|Pharping and Dakshinkali tour]]"],
                ["Goddess temples in Kathmandu", "Bhadrakali, Shobha Bhagwati, Maitidevi, Naxal Bhagwati, Guhyeshwari and others", "Queues from dawn; easy to walk past without entering"],
                ["Hanuman Dhoka, Kathmandu", "The army's sacrifices in the Kot courtyard on the night of the eighth day", "Not a public spectacle"],
                ["Bhaktapur", "At Taleju, the goddess shrines and before the Navadurga", "Part of Mohani — see [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]]"],
                ["Manakamana and Gorkha", "Among the busiest sites in the country on the eighth day", "See [[post:gorkha-and-manakamana-during-dashain|Gorkha and Manakamana]]"],
                ["Bindhyabasini, Pokhara", "The town's main temple", "See [[post:pokhara-during-dashain|Pokhara during Dashain]]"],
                ["Household yards", "Anywhere, in villages and towns alike", "Private, but visible from the lane"],
              ],
            },
          },
          {
            figure: {
              image: "mardi-treks/pharping-dakshinkali-tour/pharping-dakshinkali-tour-04-dakshin-kali-main-temple",
              alt: "The Dakshinkali temple in its wooded gorge south of Kathmandu.",
              caption: "Dakshinkali, in a forested gorge south of Kathmandu. Worshippers queue down the hillside on the eighth and ninth days of Dashain.",
            },
          },
        ],
      },
      {
        h2: "What You Will See if You Go",
        blocks: [
          { p: "At a large temple on the eighth day: a long, orderly queue of families, each with an animal and a plate of offerings; an enclosure in front of the image where the killing is done, quickly and without ceremony, one after another; blood on the stone; and beside it, butchers at work and fires where families cook and eat together afterwards. The mood is not sombre. It is a festival day, people are dressed well, and children are present." },
          { p: "It is also, to an unaccustomed eye, a lot of death at close range, with the sounds and smells that go with it. Most visitors who go find it less frightening and more thought-provoking than they expected. Some find it distressing. You know which you are likely to be." },
        ],
      },
      {
        h2: "How to Avoid It Entirely",
        blocks: [
          { p: "Sacrifice is concentrated in two days and at particular kinds of temple, which makes it straightforward to plan around." },
          {
            ul: [
              "<strong>Spend the eighth and ninth days at Buddhist sites.</strong> Boudhanath, Swayambhunath and the monasteries of Pharping have none — a [[trek:kathmandu-day-tour|Kathmandu day tour]] can be arranged around them, or see the [[trek:buddhist-pilgrimage-tour-nepal|Buddhist Pilgrimage Tour]].",
              "<strong>Be on a trek in Buddhist country.</strong> In the Khumbu on the [[trek:everest-base-camp-trek|Everest Base Camp trek]], or in Upper Mustang, the festival's middle days pass unnoticed.",
              "<strong>Visit Khokana.</strong> The village keeps its own festival instead of Dashain — [[trek:bungmati-khokana-village-tour|Bungamati and Khokana tour]].",
              "<strong>Stay away from Durga and Kali temples in the mornings.</strong> Vishnu and Shiva temples, including Pashupatinath, do not have animal sacrifice.",
              "<strong>Go up to the valley rim or out to a national park.</strong> [[trek:nagarkot-sunrise-tour|Nagarkot]] and [[trek:chitwan-national-park-tour-3-days|Chitwan]] are untouched by it.",
              "<strong>In a homestay, say so.</strong> Hosts will tell you when the goat is to be killed and nobody will mind if you go for a walk.",
            ],
          },
          { p: "Our day-by-day plans in [[post:kathmandu-during-dashain|Kathmandu during Dashain]] mark which days and places are affected." },
        ],
      },
      {
        h2: "The Debate Inside Nepal",
        blocks: [
          { p: "Visitors sometimes assume they are the first to find this uncomfortable. They are not. Animal sacrifice is argued over in Nepal every Dashain — in newspapers, on social media and within families. Animal-welfare organisations campaign against it and against the conditions in which animals are transported to market. Religious reformers argue that the texts ask for the sacrifice of one's own faults, not of a goat. Some temples and communities have ended the practice or replaced it with pumpkins. Many younger, urban Nepalis decline to take part." },
          { p: "Others defend it as a tradition older than the country, point out that the meat is eaten rather than wasted, and note that the animal's end is quicker than in an industrial slaughterhouse. Both positions are held sincerely by people who share the same festival table." },
          { p: "The practical point for a traveller is that this is Nepal's argument to have. Curiosity and respectful questions are welcome. Lectures from guests are not, and change nothing." },
        ],
      },
      {
        h2: "If You Choose to Watch",
        blocks: [
          {
            ul: [
              "<strong>Stand where visitors stand.</strong> At Dakshinkali that is the terrace above the enclosure; non-Hindus do not enter the inner area.",
              "<strong>Be quiet and still.</strong> You are a guest at someone's act of worship.",
              "<strong>Keep the camera down unless you have asked.</strong> No flash, no close-ups of families without permission, and nothing posted online that mocks. See [[post:photographing-dashain-in-nepal|photographing Dashain]].",
              "<strong>Leave leather outside</strong> where a temple asks for it.",
              "<strong>Go with a guide</strong> who can explain what you are seeing and when to step back.",
              "<strong>Leave when you have seen enough.</strong> Nobody will think less of you.",
            ],
          },
        ],
      },
      {
        h2: "With Children, and for Vegetarians",
        blocks: [
          { p: "Nepali children grow up with this and are present throughout. Whether yours should be is your decision; if not, the eighth and ninth days are easy to spend elsewhere, and the rest of the festival — swings, kites, tika — is ideal for them. See [[post:dashain-swings-and-kites|Dashain swings and kites]]." },
          { p: "Vegetarians and vegans are well understood in Nepal and will be catered for without fuss at any meal, including a family tika. It is perfectly acceptable to attend a tika and eat no meat — our guide to [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]] explains how to say so." },
        ],
      },
    ],
    faqs: [
      { question: "Are animals sacrificed during Dashain?", answer: "Yes. On Maha Ashtami and Maha Navami, the eighth and ninth days, goats, buffalo, ducks and chickens are offered to the goddess Durga at temples and in private homes, and the meat is eaten afterwards. Many households now offer a pumpkin or coconut instead." },
      { question: "Will I see animal sacrifice as a tourist in Nepal during Dashain?", answer: "Only if you visit Durga or Kali temples, or are in a village yard, on the eighth or ninth day. It is not carried out in the streets of tourist districts, at Buddhist sites or at most other temples." },
      { question: "Where is animal sacrifice most common during Dashain?", answer: "At goddess temples: Dakshinkali near Kathmandu, Manakamana, Gorakhkali in Gorkha, Bindhyabasini in Pokhara, and the Bhagwati and Kali temples of every town. It also takes place in household yards across the country." },
      { question: "How can I avoid seeing animal sacrifice?", answer: "Spend the eighth and ninth days at Buddhist sites such as Boudhanath and Swayambhunath, on a trek in Buddhist regions such as the Khumbu, in a national park, or simply away from Durga and Kali temples in the morning." },
      { question: "Why are animals sacrificed at Dashain?", answer: "The sacrifice re-enacts Durga's victory over the buffalo demon Mahishasura and is an offering to the goddess in her fierce forms. The animal is then eaten by the family as her blessing." },
      { question: "Is animal sacrifice legal in Nepal?", answer: "Yes. It is a lawful religious practice. It is also the subject of ongoing public debate and campaigning, and some temples and communities have chosen to end it or use substitutes." },
      { question: "Can I visit Dakshinkali temple during Dashain?", answer: "Yes. It is at its busiest on the eighth and ninth days. Non-Hindu visitors watch from the terraces above the sacrificial enclosure. Go with a guide and expect long queues and a great deal of activity." },
      { question: "Do Buddhists in Nepal sacrifice animals at Dashain?", answer: "Generally not. Sherpa, and the Buddhist communities of Mustang, Manang and the high valleys, do not practise Dashain sacrifice, which is one reason the festival is barely visible on high-altitude treks." },
    ],
    relatedTreks: [
      "pharping-dakshinkali-tour",
      "buddhist-pilgrimage-tour-nepal",
      "kathmandu-day-tour",
      "bungmati-khokana-village-tour",
      "hindu-pilgrimage-tour",
    ],
    tripsNote: "A guided visit to Dakshinkali, and the Buddhist and village alternatives for the same two days.",
    relatedPosts: [
      "fifteen-days-of-dashain-explained",
      "pharping-dakshinkali-tour-guide",
      "dashain-food-guide-what-to-eat",
      "kathmandu-during-dashain",
      "is-dashain-a-good-time-to-visit-nepal",
      "responsible-trekking-in-nepal",
    ],
    tags: ["Dashain", "Culture", "Responsible Travel", "Festivals"],
    meta: {
      title: "Animal Sacrifice at Dashain: What Travellers Should Know",
      description: "A plain account of animal sacrifice at Dashain in Nepal: what happens and why, where you will see it, how to avoid it, and how to behave if you watch.",
      keywords: "Dashain animal sacrifice, Dakshinkali sacrifice, Maha Ashtami sacrifice, Nepal goat sacrifice Dashain, avoid animal sacrifice Nepal, Dashain bali",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "photographing-dashain-in-nepal",
    title: "Photographing Dashain in Nepal: What to Shoot, Where and How to Ask",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.mahakaliMask,
      alt: "A masked Navadurga dancer raising a sword against a blue sky beside a carved temple roof in Bhaktapur.",
    },
    excerpt:
      "Dashain gives a photographer bamboo swings at sunset, kite fights over brick rooftops, masked dancers, a military parade and the best light of the year. It also happens largely inside people's homes. A shot list by day, where to stand, what to carry, and when the camera should stay in the bag.",
    intro: [
      { p: "October is already the month photographers choose for Nepal: clean air after the monsoon, low warm light, mountains sharp from the valley floor. Dashain adds subjects that exist for only a fortnight of the year, most of them in the open and nearly all of them offered freely to anyone who asks first." },
      { p: "This guide is a working plan for the festival. For the festival itself, start with our [[post:dashain-festival-nepal-travel-guide|Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "What There Is to Photograph",
        blocks: [
          {
            table: {
              head: ["Subject", "Where", "When", "Lens"],
              rows: [
                ["Bamboo swings", "Any village; the valley rim; ridges above Pokhara", "Last hour of light", "Wide, from low down"],
                ["Kite fliers", "Rooftops of old Kathmandu, Patan, Bhaktapur", "Afternoons before and during the festival", "Short telephoto from a rooftop; wide from beside the flier"],
                ["Festival markets", "Ason and Indra Chowk, Kathmandu", "The week before Phulpati, late afternoon", "35 mm or a standard zoom"],
                ["Goat herds and markets", "The Kali Gandaki road; open ground at the edge of the cities", "Two weeks before the tika", "Standard zoom"],
                ["The Phulpati parade", "Tundikhel and Hanuman Dhoka, Kathmandu", "Afternoon of the seventh day", "Telephoto"],
                ["The Taleju queue", "Kathmandu Durbar Square", "Dawn to mid-morning, ninth day", "Standard zoom"],
                ["Garlanded vehicles", "Everywhere", "Ninth day", "Anything"],
                ["Navadurga dancers", "Bhaktapur", "Tenth day and after", "Fast standard zoom"],
                ["Tika", "In a home, by invitation", "Tenth day, late morning", "A fast prime; no flash"],
                ["Empty streets", "Central Kathmandu", "Tenth day", "Wide"],
                ["Mountain dawns", "Nagarkot, Sarangkot, any ridge", "Every clear morning", "Telephoto and wide"],
              ],
            },
          },
        ],
      },
      {
        h2: "A Shot List by Day",
        blocks: [
          { p: "Dates are for 2026; the sequence holds for any year. See our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
          {
            table: {
              head: ["Date", "Morning", "Afternoon and evening"],
              rows: [
                ["12 – 16 Oct", "Dawn at Boudhanath; goat markets", "Ason at its busiest; kites from a rooftop near Durbar Square"],
                ["Sat 17 Oct — Phulpati", "Potters' Square and the lanes of Bhaktapur", "The parade at Tundikhel; the procession arriving at Hanuman Dhoka"],
                ["Sun 18 Oct — Ashtami", "Worshippers at the goddess temples", "A village on the valley rim: swings in the last light"],
                ["Tue 20 Oct — Navami", "The Taleju queue; garlanded buses and workshops", "Patan's courtyards; blue hour in Durbar Square"],
                ["Wed 21 Oct — the tika", "Empty streets at first light; then a family tika if invited", "Bhaktapur for the Navadurga"],
                ["22 – 25 Oct", "Sunrise from Nagarkot or Sarangkot", "Swings, families on the move, card games on doorsteps"],
              ],
            },
          },
          { p: "What each of these days means is in [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]], and the city's festival geography is in [[post:kathmandu-during-dashain|Kathmandu during Dashain]]." },
          {
            figure: {
              image: DASHAIN.swingSunset,
              alt: "A bamboo swing in silhouette against the setting sun, with a rider at the top of the arc.",
              caption: "The swing picture every photographer wants: low sun, the frame against the sky, the rider at the top of the arc. It needs the last hour of the day and a position close to the ground.",
            },
          },
        ],
      },
      {
        h2: "Asking, and When Not to Shoot",
        blocks: [
          { p: "Nepalis are among the most willing subjects anywhere, and during Dashain, in new clothes and a good mood, more so. The rule is the usual one, applied a little more carefully because so much of the festival is domestic and sacred." },
          {
            ul: [
              "<strong>In a home, ask the head of the household</strong> before taking the camera out at all, and again before photographing the tika being given. The answer is almost always yes.",
              "<strong>Never photograph the prayer room</strong> where the jamara is grown unless you are invited to.",
              "<strong>Children: ask the adult with them.</strong> Do not hand out money or sweets for pictures.",
              "<strong>Sacrifice: put the camera away</strong> unless you have explicit permission and a reason. Pictures taken to shock are a poor return on hospitality. See [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]].",
              "<strong>The Navadurga are deities while masked.</strong> No flash, no blocking their path, no pushing in front of worshippers. See [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]].",
              "<strong>The parade is a military event.</strong> Photograph it from the public side; do not point long lenses at security positions, and do as you are asked.",
              "<strong>Inner sanctums are off limits</strong> to cameras, and at some temples to non-Hindus altogether.",
              "<strong>Drones need government permits</strong> that take weeks and are not given for heritage zones. Leave it at home.",
            ],
          },
          { p: "The etiquette of the tika itself is in [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]]." },
        ],
      },
      {
        h2: "Light and Timing in October",
        blocks: [
          { p: "In the third week of October the sun rises in Kathmandu a little after six and sets at about half past five. Good light lasts roughly an hour at each end, and the middle of the day is flat and bright. Plan around it: dawn and dusk outdoors, midday in shaded courtyards, markets and interiors." },
          { p: "Mountain views are best in the first two hours after sunrise, before haze and afternoon cloud build. From Phulpati onward, with the valley's traffic gone, the air over Kathmandu clears noticeably and the snow peaks are visible from rooftops in the city itself — a picture that is not available at any other time of year." },
        ],
      },
      {
        h2: "Gear for the Festival",
        blocks: [
          {
            ul: [
              "<strong>Two lenses cover it:</strong> a standard zoom and a short telephoto. A fast prime earns its place for interiors and the tika.",
              "<strong>Leave the tripod</strong> for dawn viewpoints and blue hour in the squares. In festival crowds it is a hazard.",
              "<strong>Spare batteries and cards.</strong> Shops are shut; you cannot buy either on the tika day.",
              "<strong>A small bag you can keep in front of you</strong> in the markets and the parade crowd.",
              "<strong>A cloth and blower.</strong> October is dry and the valley is dusty.",
              "<strong>A phone is enough</strong> for most of this. Being in the right place at the right hour matters more than the camera.",
            ],
          },
          { p: "If you are continuing to a trek, the cold-weather kit is in our [[post:nepal-trekking-packing-list|trekking packing list]]." },
        ],
      },
      {
        h2: "Giving Pictures Back",
        blocks: [
          { p: "The best thing a photographer can do at Dashain costs nothing. Families gather once a year, and a good picture of four generations on the tika day is something they will keep. Take one for them as well as for yourself, get a phone number or have your guide take it, and send the files. In a homestay village, prints posted afterwards are remembered for years." },
        ],
      },
      {
        h2: "Photography Tours Timed for Dashain",
        blocks: [
          { p: "Our photography tours are built around light rather than a checklist of sites, and each can be dated to put the festival's best days in the right places." },
          {
            table: {
              head: ["Tour", "Length", "How it fits the festival"],
              rows: [
                ["[[trek:kathmandu-photography-tour|Kathmandu Photography Tour]]", "1 day", "Dawn at Boudhanath to blue hour in Bhaktapur. Run it on Navami for the Taleju queue, or on the tika day for the empty city and the Navadurga"],
                ["[[trek:nepal-photography-tour|Nepal Photography Tour]]", "10 days", "The valley for Phulpati to the tika, then Bandipur, Pokhara and Chitwan as the swings and the homecoming continue"],
                ["[[trek:annapurna-photography-tour|Annapurna Photography Tour]]", "7 days", "Ghandruk and the ridge villages above Pokhara: swings with the Annapurna range behind them"],
                ["[[trek:upper-mustang-photography-tour|Upper Mustang Photography Tour]]", "11 days", "Beyond the festival, but on the road the goat herds come down; needs the permit arranged before the holiday"],
              ],
            },
          },
          { p: "For more on the places to stand, see [[post:where-to-see-dashain-celebrations-in-nepal|where to see Dashain celebrations]] and [[post:dashain-swings-and-kites|Dashain swings and kites]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is Dashain a good time for photography in Nepal?", answer: "One of the best. It combines October's clear light and mountain views with subjects that exist only during the festival: bamboo swings, kite fights, the Phulpati parade, masked dancers and family gatherings." },
      { question: "Can I photograph a Dashain tika ceremony?", answer: "Usually yes, if you ask the head of the household first. Do not use flash, do not photograph the prayer room without an invitation, and offer to send the family the pictures." },
      { question: "Where can I photograph Dashain swings?", answer: "In villages on the rim of the Kathmandu valley, on the ridges above Pokhara, and on the lower Annapurna trails. The last hour before sunset gives the best light, with the swing in silhouette." },
      { question: "Is it allowed to photograph the Phulpati parade?", answer: "Yes, from the public areas around Tundikhel and at Durbar Square. It is a military event with tight security: follow instructions and do not photograph security positions." },
      { question: "Can I fly a drone during Dashain?", answer: "Not without government permits that take weeks to obtain, and not at all over heritage zones, military events or national parks. In practice, leave the drone at home." },
      { question: "Should I pay people to take their photograph?", answer: "Not ordinary people at a festival; ask, and thank them. Sadhus at the major temples expect a payment, which should be agreed beforehand. Do not give money or sweets to children for pictures." },
      { question: "What camera gear do I need for Dashain?", answer: "A standard zoom and a short telephoto cover nearly everything; a fast prime helps indoors. Bring spare batteries and cards, since shops are closed on the main days. A phone is sufficient for most subjects." },
      { question: "Is it acceptable to photograph animal sacrifice?", answer: "Only with permission, without flash, and with a clear reason. Many worshippers do not want it photographed, and images taken to shock are a poor way to repay being allowed to watch." },
    ],
    relatedTreks: [
      "kathmandu-photography-tour",
      "nepal-photography-tour",
      "annapurna-photography-tour",
      "upper-mustang-photography-tour",
      "nagarkot-sunrise-tour",
    ],
    tripsNote: "Photography tours built around the light, each of which can be dated for the festival.",
    relatedPosts: [
      "dashain-swings-and-kites",
      "kathmandu-during-dashain",
      "bhaktapur-during-dashain-navadurga-and-mohani",
      "where-to-see-dashain-celebrations-in-nepal",
      "dashain-tika-ceremony-guide-for-visitors",
      "nagarkot-and-sunrise-viewpoints-near-kathmandu",
    ],
    tags: ["Dashain", "Photography", "Culture", "Festivals", "Kathmandu"],
    meta: {
      title: "Photographing Dashain in Nepal: A Practical Guide",
      description: "A photographer's guide to Dashain: swings, kites, the Phulpati parade and masked dancers — a shot list by day, where to stand, gear and etiquette.",
      keywords: "Dashain photography, photographing Dashain, Nepal festival photography, Nepal photography tour October, Dashain swing photo, Kathmandu photo tour festival",
    },
  },
];
