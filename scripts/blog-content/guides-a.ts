import type { BlogContent } from "./build";
import { FREE, trekImage } from "./images";

/**
 * November 2026 series, week 1: Kirtipur and the day hikes around the
 * Kathmandu Valley. Published Tuesday 10 and Friday 13 November, while the
 * Nepal Premier League is being played at Kirtipur, so both link back to the
 * NPL article and to each other.
 *
 * Kirtipur's monument dates differ between sources; where they do, the text
 * gives the century or the inscription rather than a single year.
 */
export const guidesA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kirtipur-travel-guide",
    title: "Kirtipur Travel Guide: The Newar Hill Town Above Kathmandu",
    cluster: "guides",
    date: "2026-11-10",
    hero: {
      image: FREE.kirtipurDusk,
      alt: "Dusk over the Kathmandu Valley from Kirtipur, with dark hills silhouetted against an orange sky and the lights of the city coming on below.",
    },
    excerpt:
      "Kirtipur is a Newar town on a ridge at the south-western edge of Kathmandu that most visitors never climb up to: brick lanes, a temple hung with swords from the battle of 1767, a 16th-century stupa and one of the widest views of the valley. How to spend half a day there, what to eat, and what is nearby.",
    intro: [
      {
        p: "Kirtipur sits on a long ridge at the south-western corner of the Kathmandu Valley, about six kilometres from the centre of the city. Below it spread the campus of Tribhuvan University, Nepal's oldest university, and the cricket ground where the [[post:nepal-premier-league-2026-schedule-and-trekking-in-nepal|Nepal Premier League]] is being played this month. Thousands of people pass the foot of the hill every match day. Very few of them go up.",
      },
      {
        p: "They should. The old town on top is a Newar settlement of brick houses, carved windows, temple squares and water tanks, where farming families still dry grain on the paving and the lanes are too narrow for cars. It has a history as dramatic as anywhere in the valley, and none of the crowds of Bhaktapur or Patan. This guide covers what to see, a walking route, the food, and the places nearby that make a full day of it.",
      },
    ],
    sections: [
      {
        h2: "Kirtipur at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Where</strong>", "A ridge on the south-western edge of the Kathmandu Valley, above Tribhuvan University"],
                ["<strong>From Thamel</strong>", "30 to 45 minutes by taxi; local buses run from Ratna Park"],
                ["<strong>Time needed</strong>", "Half a day for the old town; a full day with Chobhar and Taudaha Lake"],
                ["<strong>Best time of day</strong>", "Morning, when the air is clearest and the mountain view from the top is most likely"],
                ["<strong>Best season</strong>", "October to December, for clear skies; spring is good but hazier"],
                ["<strong>Who lives there</strong>", "Mostly Newar families, many of them farmers who still work the fields below the ridge"],
                ["<strong>Combine with</strong>", "Chobhar Gorge, Taudaha Lake, Bungamati and Khokana, Pharping, or an NPL match at the TU ground"],
              ],
            },
          },
        ],
      },
      {
        h2: "A Short History: The Town That Held Out",
        blocks: [
          {
            p: "In the middle of the 18th century the Kathmandu Valley was divided between three Newar kingdoms, centred on Kathmandu, Patan and Bhaktapur, and Kirtipur was a fortified hill town in the orbit of Patan. To the west, Prithvi Narayan Shah, the king of Gorkha, was working his way towards the valley, and Kirtipur, on its high ridge at the valley's edge, stood in the way.",
          },
          {
            p: "It did not fall easily. Gorkha attacked in 1757 and was beaten back; Kalu Pande, one of Prithvi Narayan Shah's most trusted commanders, was killed in the fighting. A second attempt in 1764 also failed. The third, in 1767, became a siege that lasted for months before the town surrendered. Accounts from the time say the conqueror punished Kirtipur by having the noses of its men cut off, a story that is still told in the valley. Kathmandu and Patan fell the following year and Bhaktapur in 1769, and the modern state of Nepal grew out of that conquest.",
          },
          {
            p: "The siege left marks you can still see. The Bagh Bhairab temple in the middle of the old town is hung with swords and shields from the fighting, and the town's sense of itself as the place that held out longest has never quite gone away.",
          },
          {
            figure: {
              image: FREE.baghBhairabSwords,
              alt: "Old curved swords fixed in rows to the wooden wall under the eaves of the Bagh Bhairab temple in Kirtipur.",
              caption:
                "Swords from the 18th century fixed to the wall of the Bagh Bhairab temple.",
            },
          },
        ],
      },
      {
        h2: "What to See in Kirtipur",
        blocks: [
          {
            p: "The old town is built along a ridge with two high points. The Chilancho stupa sits on the southern hill, the Uma Maheshwar temple on the higher northern one, and the Bagh Bhairab temple in the saddle between them. Everything worth seeing is within a twenty-minute walk.",
          },
          { h3: "Bagh Bhairab Temple" },
          {
            p: "Bhairab is the fierce form of Shiva, and in Kirtipur he takes the form of a tiger: <em>bagh</em> means tiger. His three-roofed temple, probably built in the 16th century and known locally as Ajudeu, is the guardian shrine of the town. Look up at the walls under the eaves, where the swords and shields of 1767 hang, and at the carved roof struts. The temple is in daily use, with offerings and bells, and animal sacrifices on some festival days, so watch from the edges and ask before you photograph worshippers.",
          },
          { h3: "Chilancho Stupa" },
          {
            p: "On the southern hill stands the Chilancho stupa, a white dome surrounded by four smaller stupas and a ring of Buddhist courtyards. An inscription found here is dated to Nepal Sambat 635, the year 1515, which makes it one of the older Buddhist monuments in the valley. It is a quiet place in the morning, with prayer wheels, pigeons and children on their way to school.",
          },
          { h3: "Uma Maheshwar Temple" },
          {
            p: "The highest point of the town is crowned by the Uma Maheshwar temple, dedicated to Shiva and his consort Parvati and known locally as Kwacho Dega. It dates from the 17th century and is said to have had four roofs until the great earthquake of 1934 brought one down. The real reason to climb up is the view. From the terrace you look out over the whole Kathmandu Valley, and on a clear morning in autumn or winter the snow peaks of the Langtang and Jugal Himal line the northern horizon.",
          },
          { h3: "The lanes themselves" },
          {
            p: "Between the monuments, the pleasure of Kirtipur is simply walking. The lanes are paved in brick and lined with three- and four-storey houses with carved wooden windows. Small squares hold stone water spouts, shrines and resting platforms where older men sit in the sun. In autumn the paving is covered in grain laid out to dry, and you will see weaving, spinning and the everyday life of a Newar town that has not been rebuilt for visitors.",
          },
        ],
      },
      {
        h2: "A Walking Route Through the Old Town",
        blocks: [
          {
            p: "This loop takes two to three hours at an easy pace, with time to stop. It is uphill at the start and uses stone steps throughout, so wear shoes with some grip.",
          },
          {
            ol: [
              "<strong>Start at the bottom of the hill.</strong> Taxis and buses stop at the foot of the old town, near the market at Naya Bazaar. Take the stepped lanes uphill towards the south.",
              "<strong>Chilancho stupa.</strong> Walk a clockwise circuit of the stupa and its courtyards, as Buddhists do.",
              "<strong>Along the ridge to Bagh Bhairab.</strong> Follow the lanes north along the spine of the ridge to the temple square in the saddle. Find the swords on the walls.",
              "<strong>Up to Uma Maheshwar.</strong> Climb the steps to the top of the northern hill for the view across the valley. This is the best place to sit for half an hour.",
              "<strong>Back down for lunch.</strong> Wander down through the lanes on the eastern side of the ridge and find a Newar restaurant for a late lunch.",
            ],
          },
          {
            p: "If you are going to an NPL match, the cricket ground is at the foot of the hill on the university campus. Do the walk in the morning, eat lunch in Kirtipur, and you will be in your seat well before a 4:30 PM start.",
          },
        ],
      },
      {
        h2: "What to Eat in Kirtipur",
        blocks: [
          {
            p: "Kirtipur is a good place to try Newar food, which is quite different from the dal bhat you will eat on the trail. Small family-run restaurants around the old town serve it at local prices. Things to look for:",
          },
          {
            ul: [
              "<strong>Samay baji:</strong> the classic Newar platter of beaten rice with spiced meat, black soybeans, ginger, a boiled egg and pickles. It is a festival and ritual meal, and the best introduction to the cuisine.",
              "<strong>Choila:</strong> buffalo or chicken grilled over a flame and tossed with mustard oil, chilli and spices. Strong and smoky.",
              "<strong>Bara:</strong> a savoury lentil pancake, eaten plain or with an egg or minced meat on top. Good for vegetarians.",
              "<strong>Chatamari:</strong> a thin rice-flour crêpe with toppings, sometimes called Newar pizza.",
              "<strong>Yomari:</strong> a steamed rice-flour dumpling filled with molasses and sesame, eaten above all at the Yomari Punhi festival in December.",
              "<strong>Aila:</strong> a strong, clear spirit distilled from rice or millet, served in small clay cups. Treat it with respect, especially before a hike.",
            ],
          },
          {
            p: "Our [[post:food-on-the-trail-in-nepal|guide to food on the trail]] covers what you will eat once you leave Kathmandu, and the [[trek:secret-food-tour-in-kathmandu|Kathmandu food tour]] is a good way to taste more of the valley's cooking with someone who knows where to go.",
          },
        ],
      },
      {
        h2: "Nearby: Chobhar, Taudaha and the Southern Valley",
        blocks: [
          {
            p: "Kirtipur sits at the start of the road south towards Pharping, and several of the valley's quieter sights are a few kilometres away. Together they make a full day.",
          },
          {
            ul: [
              "<strong>Chobhar Gorge.</strong> The Bagmati river leaves the valley here through a narrow cut in the hills. Legend says the valley was once a lake, and that the bodhisattva Manjushri sliced through the rim with his sword at this spot to drain it. On the hill above stands the Adinath Lokeshwar temple, its walls hung with pots and pans offered by newly married couples, and at the river is the Jal Binayak temple to Ganesh.",
              "<strong>Taudaha Lake.</strong> A small lake just south of Chobhar, said to be the home of Karkotak, the serpent king who stayed behind when the great lake drained. In winter it fills with migrating ducks, and it is one of the easiest places in the valley to go birdwatching.",
              "<strong>Bungamati and Khokana.</strong> Two Newar villages a short drive south-east, known for wood carving and mustard-oil pressing. Our [[trek:bungmati-khokana-village-tour|Bungamati and Khokana village tour]] walks between them on a path through the fields.",
              "<strong>Pharping and Dakshinkali.</strong> Further south, a cluster of Buddhist monasteries and caves and the Dakshinkali temple to the goddess Kali. See our [[trek:pharping-dakshinkali-tour|Pharping and Dakshinkali tour]].",
              "<strong>Champadevi.</strong> The hill behind Taudaha is one of the best half-day hikes in the valley, covered in our guide to [[post:day-hikes-from-kathmandu|day hikes from Kathmandu]].",
            ],
          },
        ],
      },
      {
        h2: "Getting There and Practical Tips",
        blocks: [
          {
            ul: [
              "<strong>By taxi or ride-hailing app:</strong> 30 to 45 minutes from Thamel across the Ring Road at Balkhu. Ask for the old town, not the university, or you will be dropped at the campus gate. On NPL match days the road is busy for an hour or two before the start.",
              "<strong>By bus:</strong> local buses and microbuses to Kirtipur leave from the Ratna Park area in central Kathmandu. They are cheap and crowded; keep your bag in front of you.",
              "<strong>Go early.</strong> Morning light is best for photographs, and the view of the mountains from Uma Maheshwar usually disappears into haze by late morning.",
              "<strong>Temple etiquette:</strong> take your shoes off where others do, walk around stupas clockwise, and don't touch offerings. Some inner shrines are open only to Hindus; ask before going in, and don't photograph inside if you are asked not to.",
              "<strong>Dress:</strong> shoulders and knees covered is the respectful choice in any temple area.",
              "<strong>Money:</strong> carry small notes. Cards are not accepted in most small restaurants and shops.",
            ],
          },
        ],
      },
      {
        h2: "Seeing Kirtipur With Us",
        blocks: [
          {
            p: "Kirtipur fits easily into a day in Kathmandu before or after a trek. You can add it to the [[trek:glimpse-of-nepal-tour-package|Kathmandu Valley tour]], to a [[trek:patan-day-tour|Patan day tour]], or pair it with the [[trek:chandragiri-cable-car-tour|Chandragiri cable car]], which is on the same side of the valley. If you have a spare day while waiting for a Lukla flight or recovering from a trek, it is one of the best uses of it.",
          },
          {
            p: "Tell us what you would like to see when you book, and we will build it into your days in Kathmandu. You can reach us through the <a href=\"/contact\">contact page</a>; we reply within 24 hours.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Kirtipur?",
        answer:
          "Kirtipur is a town on a ridge at the south-western edge of the Kathmandu Valley, about six kilometres from central Kathmandu. Tribhuvan University and the TU International Cricket Ground lie at the foot of the hill.",
      },
      {
        question: "How do I get to Kirtipur from Thamel?",
        answer:
          "A taxi or ride-hailing car takes 30 to 45 minutes. Ask for the old town rather than the university. Local buses and microbuses also run to Kirtipur from the Ratna Park area in central Kathmandu.",
      },
      {
        question: "Is Kirtipur worth visiting?",
        answer:
          "Yes, especially if you have already seen Bhaktapur and Patan. It is a living Newar town with fine temples, a dramatic history and one of the best views across the valley, and it has far fewer visitors than the Durbar Squares.",
      },
      {
        question: "How much time do I need in Kirtipur?",
        answer:
          "Half a day is enough for the old town: the Chilancho stupa, the Bagh Bhairab temple, the Uma Maheshwar temple and lunch. Allow a full day if you add Chobhar Gorge and Taudaha Lake.",
      },
      {
        question: "What is Kirtipur famous for?",
        answer:
          "Its resistance to Prithvi Narayan Shah of Gorkha, who failed to take the town in 1757 and 1764 and captured it only after a long siege in 1767. The Bagh Bhairab temple is still hung with swords and shields from the fighting.",
      },
      {
        question: "What is the Bagh Bhairab temple?",
        answer:
          "A three-roofed temple in the centre of Kirtipur dedicated to Bhairab, the fierce form of Shiva, here in the form of a tiger. It is the town's guardian shrine, probably dating from the 16th century, and its walls carry swords and shields from the siege of 1767.",
      },
      {
        question: "Can you see the Himalaya from Kirtipur?",
        answer:
          "On a clear morning, yes. From the terrace of the Uma Maheshwar temple at the top of the town, the Langtang and Jugal ranges are visible on the northern horizon. The view is most reliable from October to December and usually hazes over by late morning.",
      },
      {
        question: "Is there an entrance fee for Kirtipur?",
        answer:
          "Kirtipur has not traditionally sold the kind of entry ticket charged at the Durbar Squares in Kathmandu, Patan and Bhaktapur. Local fees can change, though, so carry some small notes in case one is collected at the entrance to the old town.",
      },
      {
        question: "Can I visit Kirtipur and watch an NPL match on the same day?",
        answer:
          "Yes. The TU International Cricket Ground is at the foot of the hill. Walk the old town in the morning, have lunch in Kirtipur and walk down to the ground in time for a 4:30 PM start.",
      },
      {
        question: "What food should I try in Kirtipur?",
        answer:
          "Newar food: samay baji, the festival platter of beaten rice with spiced meat and soybeans; choila, grilled spiced buffalo; bara, a lentil pancake; and chatamari, a thin rice-flour crêpe. In December, look for yomari, a sweet steamed dumpling.",
      },
      {
        question: "What is near Kirtipur?",
        answer:
          "Chobhar Gorge, where legend says Manjushri drained the valley lake; Taudaha Lake, good for winter birdwatching; the Newar villages of Bungamati and Khokana; Pharping and Dakshinkali; and the Champadevi hike.",
      },
      {
        question: "Is Kirtipur suitable for older travellers or children?",
        answer:
          "Yes, with some care. The old town is reached by steep lanes and stone steps, so take it slowly, but distances are short and there are plenty of places to rest. Taxis can get you close to the top if needed.",
      },
    ],
    relatedTreks: [
      "glimpse-of-nepal-tour-package",
      "bungmati-khokana-village-tour",
      "pharping-dakshinkali-tour",
      "chandragiri-cable-car-tour",
      "patan-day-tour",
      "secret-food-tour-in-kathmandu",
    ],
    tripsNote: "Day tours on Kirtipur's side of the valley, and the full Kathmandu Valley tour.",
    relatedPosts: [
      "nepal-premier-league-2026-schedule-and-trekking-in-nepal",
      "day-hikes-from-kathmandu",
      "kathmandu-valley-unesco-sites-guide",
      "patan-travel-guide",
      "bungmati-khokana-village-tour-guide",
      "pharping-dakshinkali-tour-guide",
    ],
    tags: ["kirtipur", "kathmandu valley", "newar culture", "day trips from kathmandu", "temples", "nepal history"],
    meta: {
      title: "Kirtipur Travel Guide: Temples, History and Food Near Kathmandu",
      description:
        "Kirtipur, the Newar hill town above Kathmandu: Bagh Bhairab and its 1767 swords, the Chilancho stupa, valley views, Newar food, and Chobhar and Taudaha nearby.",
      keywords:
        "Kirtipur, Kirtipur travel guide, Bagh Bhairab temple, Chilancho stupa, Uma Maheshwar temple Kirtipur, things to do in Kirtipur, Kathmandu day trip, Newar food Kathmandu, Chobhar Gorge, Taudaha Lake",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "day-hikes-from-kathmandu",
    title: "Day Hikes from Kathmandu: Champadevi, Shivapuri, Nagarjun, Phulchowki and More",
    cluster: "guides",
    date: "2026-11-13",
    hero: {
      image: FREE.nagarjunView,
      alt: "Forested hills on the rim of the Kathmandu Valley under a blue sky, with clouds drifting below a distant line of mountains.",
    },
    excerpt:
      "The hills around the Kathmandu Valley rise to 2,100–2,800 m and carry some of the best day walks in Nepal. Eight day hikes compared: Champadevi, Shivapuri, Nagarjun, Phulchowki, Chandragiri, Nagarkot to Changu Narayan, Namobuddha and Chisapani, with times, effort and how to use them before a trek.",
    intro: [
      {
        p: "The Kathmandu Valley is a bowl, and its rim is a ring of forested hills between 2,100 and 2,800 metres high. On a clear morning almost every one of them has a view of the Himalaya, and most can be climbed and descended in a day from a hotel in Thamel. They are the best way to stretch your legs after a long flight, test your boots and fitness before a trek, or fill a spare day while you wait for a flight.",
      },
      {
        p: "This guide compares eight of them, from the gentle walk from Nagarkot to Changu Narayan to the long climb up Shivapuri, with what each involves and how to fit them into a trip.",
      },
    ],
    sections: [
      {
        h2: "Day Hikes from Kathmandu Compared",
        blocks: [
          {
            table: {
              head: ["Hike", "Start", "Highest point", "Time on foot", "Effort"],
              rows: [
                ["Champadevi", "Hattiban, on the Pharping road", "About 2,280 m", "4 to 5 hours return", "Moderate, steep at the top"],
                ["Shivapuri Peak", "Budhanilkantha (Panimuhan gate)", "2,732 m", "6 to 8 hours return", "Hard: about 1,300 m of ascent"],
                ["Nagarjun (Jamacho)", "Phulbari gate, near Balaju", "About 2,100 m", "5 to 6 hours return", "Moderate"],
                ["Phulchowki", "Godawari", "2,782 m", "6 to 7 hours return", "Hard, long"],
                ["Chandragiri", "Thankot", "2,551 m", "3 to 4 hours up; cable car down", "Moderate"],
                ["Nagarkot to Changu Narayan", "Nagarkot", "2,175 m", "3 to 4 hours, mostly downhill", "Easy"],
                ["Dhulikhel to Namobuddha", "Dhulikhel", "About 1,750 m", "3 to 4 hours", "Easy to moderate"],
                ["Sundarijal to Chisapani", "Sundarijal", "About 2,200 m", "4 to 5 hours up; overnight", "Moderate"],
              ],
              note: "Times are for a steady walking pace with short stops, excluding the drive to the trailhead. Altitudes are approximate where marked.",
            },
          },
        ],
      },
      {
        h2: "The Southern Rim: Champadevi",
        blocks: [
          {
            p: "Champadevi is the best short hike on the south side of the valley, and the one we recommend most often for a first day. The trail starts at Hattiban, off the road to Pharping, and climbs through pine and oak forest on a stone-paved path to a small temple to the goddess Champadevi at the top. The last section is steep. From the summit ridge the view runs north across the whole valley to a long line of snow peaks, and south over the green hills towards the Terai.",
          },
          {
            p: "Champadevi pairs well with the sights at its foot. Stop at Taudaha Lake on the way back, or combine the hike with the monasteries of Pharping. It is also the closest proper hike to Kirtipur; our [[post:kirtipur-travel-guide|Kirtipur guide]] covers the town and the sights around it.",
          },
        ],
      },
      {
        h2: "The Northern Rim: Shivapuri and Nagarjun",
        blocks: [
          {
            p: "The forested hills north of the city are protected as Shivapuri Nagarjun National Park, and both of its main summits make excellent day hikes. There is an entry fee for foreign visitors, paid in rupees at the park gate.",
          },
          { h3: "Shivapuri Peak, 2,732 m" },
          {
            p: "Shivapuri is the second-highest point on the valley rim and the most demanding hike in this list. From the Panimuhan gate above Budhanilkantha, the trail climbs through dense forest past Nagi Gompa, a Buddhist nunnery with a terrace that looks over the city, and Baghdwar, where the holy Bagmati river rises from a spring. The summit is wooded, so the best views are on the way up. With about 1,300 m of ascent it is a long day, and good training for anyone heading to Everest or Annapurna Base Camp.",
          },
          {
            figure: {
              image: FREE.shivapuriTrailSign,
              alt: "A yellow trail signboard at the Sano Deurali junction in Shivapuri Nagarjun National Park, standing among tall forest trees.",
              caption:
                "A trail junction in Shivapuri Nagarjun National Park. Paths in the forest branch often, which is one reason to hike with a guide.",
            },
          },
          { h3: "Nagarjun, about 2,100 m" },
          {
            p: "Nagarjun rises immediately north-west of the city. The walk from the Phulbari gate climbs through forest to Jamacho, the summit, where a small stupa and a viewing tower look out across the valley and, on a clear day, along much of the Himalaya from the Annapurnas to Langtang. The hill is named after the Buddhist teacher Nagarjuna, who is said to have meditated in a cave here. Monkeys and deer live in the forest, so keep food out of sight.",
          },
        ],
      },
      {
        h2: "The Highest Point: Phulchowki",
        blocks: [
          {
            p: "At 2,782 m, Phulchowki is the highest point on the rim of the valley. The trail starts at Godawari, beside the National Botanical Garden, and climbs more than 1,200 m through some of the richest forest in central Nepal: oak, rhododendron and, in spring, flowers that give the hill its name. It is the valley's best birdwatching site, with well over two hundred species recorded, and our [[trek:bird-watching-in-kathmandu-valley|Kathmandu Valley birdwatching day]] spends its morning here.",
          },
          {
            p: "A rough road also reaches the summit, which carries a small army post and telecommunication masts, so a popular option is to drive up and walk down. In winter there is sometimes a dusting of snow on the top.",
          },
        ],
      },
      {
        h2: "The Western Rim: Chandragiri",
        blocks: [
          {
            p: "Chandragiri, 2,551 m, has a cable car that rises from Thankot to the summit in about ten minutes, and at the top the Bhaleshwor Mahadev temple and a viewing platform look out on the Himalaya from Annapurna to Everest on a clear day. You can also walk up the old trail through the forest in three to four hours and ride the cable car down, which turns a sightseeing trip into a proper hike. The [[trek:chandragiri-cable-car-tour|Chandragiri cable car tour]] includes the transfer and tickets.",
          },
          {
            figure: {
              image: trekImage("chandragiri-cable-car-tour", "05-some-part-of-the-capital-city-kathmandu-seen-from-the-cable-"),
              alt: "The sprawl of Kathmandu filling the valley floor, seen from the hillside at Chandragiri with forest in the foreground.",
              caption:
                "Kathmandu from the slopes of Chandragiri. Haze builds over the city through the day, so the earliest views are the clearest. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "The Eastern Rim: Nagarkot, Changu Narayan, Dhulikhel and Namobuddha",
        blocks: [
          { h3: "Nagarkot to Changu Narayan" },
          {
            p: "Nagarkot, at 2,175 m on the eastern rim, is famous for its sunrise over the Himalaya, and the best way to leave it is on foot. A path runs down the ridge through Telkot to Changu Narayan, the oldest temple in the valley, with an inscription from the year 464 and some of the finest stone and wood carving in Nepal. It is a UNESCO World Heritage Site. The walk is mostly downhill and takes three to four hours. Our [[trek:nagarkot-sunrise-tour|Nagarkot sunrise tour]] and [[post:nagarkot-and-sunrise-viewpoints-near-kathmandu|guide to Nagarkot]] have the details.",
          },
          {
            figure: {
              image: trekImage("nagarkot-sunrise-tour", "00-sunrise-at-nagarkot-nepal-3"),
              alt: "Sunrise over layered hills and the Himalayan skyline seen from Nagarkot.",
              caption: "Sunrise from Nagarkot, the start of the walk to Changu Narayan. Archive photograph.",
            },
          },
          { h3: "Dhulikhel to Namobuddha" },
          {
            p: "Just outside the valley, the old Newar town of Dhulikhel has a wide mountain view, and a walk of three to four hours through farmland and pine leads to Namobuddha, one of the holiest Buddhist sites in Nepal. Legend says the Buddha, in an earlier life as a prince, gave his own body here to feed a starving tigress and her cubs. A large Tibetan monastery now stands on the hill above the shrine. From there the trail continues down to the medieval town of Panauti. Our [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha hike]] follows this route.",
          },
          { h3: "Sundarijal to Chisapani" },
          {
            p: "For something closer to a trek, start at Sundarijal on the north-east edge of the valley and climb through Shivapuri Nagarjun National Park to the ridge-top village of Chisapani, at about 2,200 m. Lodges there make it an overnight trip, with sunset and sunrise over the Langtang and Jugal ranges. This is also the first day of the [[trek:helambu-trek|Helambu trek]], so you can simply keep walking.",
          },
        ],
      },
      {
        h2: "How to Use Day Hikes in Your Trip",
        blocks: [
          {
            ul: [
              "<strong>Before a big trek.</strong> A long day on Shivapuri or Phulchowki is the best test of your legs, boots and daypack before you commit to Everest or Annapurna. If something rubs, you find out in Kathmandu, where you can still fix it. Our [[post:how-to-train-for-a-nepal-trek|training guide]] explains why hills with a pack are the best preparation.",
              "<strong>On a buffer day.</strong> If you have kept a spare day for the Lukla flight, as you should, and it turns out not to be needed, Chandragiri or Nagarkot is a good use of it.",
              "<strong>After the flight.</strong> A gentle hike such as Nagarkot to Changu Narayan is a better cure for jet lag than a day in Thamel.",
              "<strong>If you are not trekking.</strong> Several of these hikes give you a Himalayan view without a single night in a lodge.",
              "<strong>Around the cricket.</strong> During the NPL, Champadevi or Chandragiri in the morning fits neatly before a 4:30 PM match at Kirtipur, which is on the same side of the valley. Our [[post:nepal-premier-league-2026-schedule-and-trekking-in-nepal|NPL guide]] has the schedule.",
            ],
          },
        ],
      },
      {
        h2: "Practical Tips",
        blocks: [
          {
            ul: [
              "<strong>Start early.</strong> In autumn and winter the mountains are clearest in the first hours after sunrise, and haze rises from the city by late morning.",
              "<strong>Take a guide, or at least a companion.</strong> The forest trails on Shivapuri, Nagarjun and Phulchowki branch often and are easy to lose, and phone signal is patchy. Don't hike these hills alone.",
              "<strong>Carry water and food.</strong> There are few shops beyond the trailheads. Two litres of water and a packed lunch are sensible for the longer hikes.",
              "<strong>Wear proper footwear.</strong> Stone steps and steep, dusty descents are hard on knees and ankles. Walking poles help on the way down.",
              "<strong>Bring a layer.</strong> The summits are 800 to 1,400 m higher than the city and noticeably colder, especially in the wind.",
              "<strong>Carry cash in small notes</strong> for park fees, the cable car if you are not on a tour, and tea at the top.",
            ],
          },
          {
            p: "If you would rather not deal with transport and route-finding, we can arrange a guide and vehicle for any of these hikes, or add one to the start of your trek. Our [[post:short-treks-near-kathmandu|short treks near Kathmandu]] guide has longer routes of two to six days. Get in touch through the <a href=\"/contact\">contact page</a>.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best day hike from Kathmandu?",
        answer:
          "For a first hike, Champadevi on the southern rim: four to five hours return, a stone-paved trail through forest and a wide Himalayan view from the top. For a real test before a trek, Shivapuri Peak or Phulchowki.",
      },
      {
        question: "Can you see Everest from the Kathmandu Valley?",
        answer:
          "From a few high points on a very clear day, yes. Chandragiri and Nagarkot both have views along the Himalaya, and Everest can be picked out as a small peak far to the east, but it is distant and often hidden. The Langtang, Ganesh and Jugal ranges are much closer and more impressive.",
      },
      {
        question: "How hard is the Shivapuri hike?",
        answer:
          "It is the hardest day hike on the valley rim: about 1,300 m of ascent from Budhanilkantha to the 2,732 m summit and back, which takes six to eight hours. You need good fitness and an early start.",
      },
      {
        question: "Do I need a permit for Shivapuri or Nagarjun?",
        answer:
          "You need to pay the national park entry fee at the gate. Shivapuri and Nagarjun are both in Shivapuri Nagarjun National Park, and foreign visitors pay a fee in rupees at the entrance. Carry cash.",
      },
      {
        question: "Is it safe to hike alone around Kathmandu?",
        answer:
          "It is not a good idea in the forested national park areas. Trails branch, signal is patchy and there are few people around on weekdays. Hike with a companion or a local guide, and tell your hotel where you are going.",
      },
      {
        question: "Which day hike is best before the Everest Base Camp trek?",
        answer:
          "Shivapuri Peak or Phulchowki. Both involve more than 1,200 m of climbing on rough trails, which is the best test of your fitness, knees and boots before the Khumbu.",
      },
      {
        question: "Can I take the cable car up Chandragiri and walk down?",
        answer:
          "Most people do it the other way round: walk up the forest trail from Thankot in three to four hours and ride the cable car down. Either works, and the cable car takes about ten minutes.",
      },
      {
        question: "What is the easiest hike near Kathmandu?",
        answer:
          "Nagarkot to Changu Narayan. It is mostly downhill along a ridge, takes three to four hours and ends at a UNESCO-listed temple, the oldest in the valley.",
      },
      {
        question: "When is the best time for day hikes around Kathmandu?",
        answer:
          "October to December, when the air is dry and the mountain views are clearest. Spring is good too, with rhododendrons in flower on Phulchowki and Shivapuri, but hazier. In the monsoon, from June to September, the trails are muddy and the views usually hidden.",
      },
      {
        question: "Can I stay overnight on the valley rim?",
        answer:
          "Yes. Nagarkot, Dhulikhel and Chisapani all have lodges or hotels, so you can watch sunset and sunrise over the Himalaya. Chisapani is also the first night of the Helambu trek.",
      },
      {
        question: "How do I get to the trailheads?",
        answer:
          "By taxi or private car. Budhanilkantha and the Phulbari gate are 20 to 45 minutes from Thamel, Hattiban and Thankot about 45 minutes, and Godawari around an hour. We can arrange a guide and vehicle if you prefer.",
      },
      {
        question: "Are there day hikes near Pokhara too?",
        answer:
          "Yes. Sarangkot, the World Peace Pagoda and Australian Camp are all good half- or full-day walks from Pokhara with close views of the Annapurna range.",
      },
    ],
    relatedTreks: [
      "chandragiri-cable-car-tour",
      "dhulikhel-namobuddha-hike",
      "nagarkot-sunrise-tour",
      "bird-watching-in-kathmandu-valley",
      "helambu-trek",
      "pharping-dakshinkali-tour",
    ],
    tripsNote: "Day hikes and short walks on the rim of the Kathmandu Valley, and the Helambu trek, which starts from it.",
    relatedPosts: [
      "short-treks-near-kathmandu",
      "kirtipur-travel-guide",
      "nagarkot-and-sunrise-viewpoints-near-kathmandu",
      "dhulikhel-namobuddha-hike-guide",
      "chandragiri-cable-car-tour-guide",
      "how-to-train-for-a-nepal-trek",
    ],
    tags: ["day hikes", "kathmandu valley", "champadevi", "shivapuri", "nagarkot", "short treks"],
    meta: {
      title: "Day Hikes from Kathmandu: 8 Valley Rim Walks Compared",
      description:
        "Eight day hikes from Kathmandu compared: Champadevi, Shivapuri, Nagarjun, Phulchowki, Chandragiri, Nagarkot, Namobuddha and Chisapani. Times, effort and views.",
      keywords:
        "day hikes from Kathmandu, Champadevi hike, Shivapuri hike, Nagarjun hike, Phulchowki hike, Chandragiri hike, Nagarkot to Changu Narayan, Namobuddha hike, Chisapani, hiking near Kathmandu",
    },
  },
];
