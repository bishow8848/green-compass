import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 1: the three articles everything else hangs off — the
 * overview, the dates, and the festival day by day.
 *
 * Dates for 2026 (2083 BS) were checked against two published calendars. The
 * tika falls on the eleventh calendar day that year because the ashtami tithi
 * is doubled; a schedule built by counting ten days from Ghatasthapana is a day
 * early. Dates for 2027 are provisional until the official calendar is issued.
 */
export const dashainA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-festival-nepal-travel-guide",
    title: "Dashain Festival in Nepal: The Complete Travel Guide",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.swingSunset,
      alt: "A bamboo linge ping swing in use at sunset on a hillside in Nepal during Dashain.",
    },
    excerpt:
      "Dashain is Nepal's biggest festival: fifteen days in which families go home, offices shut and the cities empty. It is also the middle of the best trekking season. This is what the festival is, when it falls, what it changes for a visitor, and how to plan a trip around it rather than into it.",
    intro: [
      { p: "For fifteen days every autumn Nepal turns inward. Dashain is the festival the whole year is organised around — the one for which migrant workers fly home from the Gulf, students cross the country on overnight buses, and Kathmandu, a city of several million, becomes quiet enough to hear birds on Durbar Marg. Bamboo swings go up in village fields, kites fill the sky above the rooftops, and on the tenth day everyone younger receives a red tika and a blessing from everyone older." },
      { p: "It also falls in October, more often than not, which is the month most visitors choose for Nepal. The skies have cleared after the monsoon, the mountains are sharp, and the trekking trails are at their busiest. So the question is rarely whether your trip will overlap with Dashain. It is what that overlap will mean." },
      { p: "The short answer: Dashain is a wonderful time to be in Nepal and a poor time to need a government office, a bank or a last-minute bus ticket. This guide sets out the festival, the dates, and the practical effects, and links to the detailed articles on each part." },
    ],
    sections: [
      {
        h2: "What Dashain Is",
        blocks: [
          { p: "Dashain — also written Dasain, and called Vijaya Dashami or Bada Dashain — celebrates the victory of the goddess <strong>Durga</strong> over the buffalo demon Mahishasura after nine nights of battle. A second story, told alongside it, is the victory of Ram over the demon king Ravan. Either way the meaning is the same: good prevails, and the tenth day is the day of victory." },
          { p: "In practice it is a family festival more than a temple one. The rituals happen at home: barley seeds sown in a dark room on the first day, a goat bought and slaughtered around the eighth, new clothes, card games, a great deal of food, and on the tenth day the <em>tika</em> — a paste of rice, yoghurt and vermilion pressed onto the forehead by the elders of the family, with sprouted barley called <em>jamara</em> tucked behind the ear. Our article on [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]] walks through it day by day." },
          { p: "It is celebrated by Hindus across the country and, in their own forms, by many communities who are not strictly Hindu. The Newars of the Kathmandu valley call it <em>Mohani</em> and mark it with their own feasts and masked dances. In the high Buddhist valleys — the Khumbu, Upper Mustang, Tsum — it matters far less, which is one reason [[post:trekking-in-nepal-during-dashain|trekking during Dashain]] is easier than most people expect." },
        ],
      },
      {
        h2: "When Dashain Falls",
        blocks: [
          { p: "Dashain follows the lunar calendar, so the dates move every year, anywhere between late September and late October. The festival runs from the new moon to the full moon of the month of Ashwin." },
          {
            table: {
              head: ["", "2026", "2027 (provisional)"],
              rows: [
                ["Ghatasthapana (day 1)", "Sunday 11 October", "Thursday 30 September"],
                ["Phulpati (day 7)", "Saturday 17 October", "Wednesday 6 October"],
                ["Maha Ashtami (day 8)", "Sunday 18 October", "Thursday 7 October"],
                ["Maha Navami (day 9)", "Tuesday 20 October", "Friday 8 October"],
                ["Vijaya Dashami — the tika", "Wednesday 21 October", "Saturday 9 October"],
                ["Kojagrat Purnima (day 15)", "Sunday 25 October", "Around 14 October"],
              ],
              note: "The days that affect travel most are Phulpati to the two days after the tika. The full calendar, with what closes when, is in our [[post:dashain-dates-calendar-for-travellers|Dashain dates guide]].",
            },
          },
          { p: "A late Dashain, like 2026, sits squarely in peak season: the clearest weather of the year and the fullest trails. An early one, like 2027, can still catch the tail of the monsoon in its first days. Our guide to [[post:best-time-to-visit-nepal-trekking-seasons|Nepal's trekking seasons]] explains the weather either side." },
        ],
      },
      {
        h2: "What a Visitor Actually Sees",
        blocks: [
          { p: "Much of Dashain happens behind house doors, and a visitor who expects street parades every day will be puzzled. What you do see is the country changing around the festival." },
          {
            ul: [
              "<strong>Swings.</strong> Villages build tall bamboo swings called <em>linge ping</em> in the first week, and everyone from toddlers to grandmothers takes a turn. See our guide to [[post:dashain-swings-and-kites|Dashain swings and kites]].",
              "<strong>Kites.</strong> From the rooftops of Kathmandu, Patan and Bhaktapur, in the weeks before the festival and through it.",
              "<strong>Markets at full stretch.</strong> Ason and Indra Chowk in the old city are shoulder to shoulder in the week before Phulpati, as families buy clothes, spices and gifts.",
              "<strong>Goats on the road.</strong> Herds of mountain goats are driven down from Mustang and trucked into the cities. The festival's meat, and the reason for it, is covered in [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]].",
              "<strong>The Phulpati parade</strong> at Tundikhel in Kathmandu on the seventh day, and the queue at the <strong>Taleju temple</strong> on the ninth — the one day of the year it opens.",
              "<strong>Red foreheads.</strong> On the tenth day and for four days after it, almost everyone you meet is wearing a tika the size of a coin.",
              "<strong>An empty capital.</strong> Kathmandu on tika day has open roads, clean air and shuttered shops. Our guide to [[post:kathmandu-during-dashain|Kathmandu during Dashain]] covers what stays open.",
            ],
          },
          {
            figure: {
              image: DASHAIN.tikaTray,
              alt: "Plates of fruit, sweets and nuts laid out beside a bunch of yellow jamara shoots, ready for the Dashain tika.",
              caption: "A household's tika tray on the tenth day: fruit, sweets and the yellow jamara grown since Ghatasthapana.",
            },
          },
        ],
      },
      {
        h2: "How Dashain Changes a Trip",
        blocks: [
          { p: "None of this stops a holiday. It does punish a plan that assumes normal service." },
          {
            table: {
              head: ["What", "During Dashain", "What to do"],
              rows: [
                ["Government offices", "Closed for a week or more around the tika", "Arrange restricted-area permits and visa extensions before Phulpati — see [[post:trekking-permits-during-dashain|permits during Dashain]]"],
                ["Banks and ATMs", "Banks closed; ATMs run dry outside the big cities", "Withdraw cash before the holiday starts — see [[post:nepal-trip-costs-and-booking-during-dashain|costs and money]]"],
                ["Buses and highways", "Packed leaving Kathmandu before Phulpati and returning after the tika", "Travel against the flow, or fly — see [[post:travelling-around-nepal-during-dashain|getting around]]"],
                ["Domestic flights", "Full, at the top fare", "Book as soon as your dates are fixed"],
                ["Shops and restaurants", "Tourist areas mostly open; local shops shut for the main days", "See [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed]]"],
                ["Heritage sites", "Open, and at their most alive", "Go — the temples are the point this week"],
                ["Trekking lodges", "Open; busiest month of the year", "Book the popular routes early"],
                ["Guides and porters", "Many want to be home for the tika", "Confirm your crew early — see [[post:guides-and-porters-at-dashain|guides and porters at Dashain]]"],
              ],
            },
          },
        ],
      },
      {
        h2: "Trekking During Dashain",
        blocks: [
          { p: "October is the best trekking month in Nepal, and Dashain does not change that. Lodges are open on every main route. In the Sherpa villages of the Khumbu the festival barely registers, so the [[trek:everest-base-camp-trek|Everest Base Camp trek]] runs as it does any other week of the season — the details are in [[post:everest-base-camp-trek-during-dashain|Everest Base Camp during Dashain]]." },
          { p: "The Annapurna foothills are different. The Gurung and Magar villages there celebrate, swings stand at the edge of every settlement, and the short routes fill with Nepali trekkers using the holiday: [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek|Mardi Himal]] and [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] are as busy as they get. See [[post:annapurna-treks-during-dashain|Annapurna treks during Dashain]], and for the holiday week itself, our pick of [[post:short-treks-for-the-dashain-holiday|short treks for the Dashain holiday]]." },
          { p: "The one hard constraint is paperwork. Treks into restricted areas — [[trek:manaslu-circuit-trek|Manaslu]], [[trek:upper-mustang-trek|Upper Mustang]], [[trek:tsum-valley-trek|Tsum Valley]] — need a permit that only a government office can issue, and that office is shut." },
        ],
      },
      {
        h2: "Where to Be for Dashain",
        blocks: [
          {
            table: {
              head: ["Place", "Why", "Read more"],
              rows: [
                ["Kathmandu", "The Phulpati parade, the Taleju temple on the ninth day, kites, and the strange pleasure of an empty city", "[[post:kathmandu-during-dashain|Kathmandu during Dashain]]"],
                ["Bhaktapur", "Mohani, the Newar Dashain, and the first appearance of the Navadurga masked dancers", "[[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]]"],
                ["Gorkha and Manakamana", "The palace the Phulpati sets out from, and the country's busiest wish-fulfilling temple", "[[post:gorkha-and-manakamana-during-dashain|Gorkha and Manakamana]]"],
                ["Pokhara", "The Bindhyabasini temple, the lake, and village swings on the ridges above", "[[post:pokhara-during-dashain|Pokhara during Dashain]]"],
                ["A hill village", "The festival as most Nepalis live it — swings, a goat, a tika from the head of the house", "[[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] and [[trek:sirubari-village-tour|Sirubari]] homestays"],
              ],
              note: "All of them, and four more, are compared in [[post:where-to-see-dashain-celebrations-in-nepal|where to see Dashain celebrations in Nepal]].",
            },
          },
        ],
      },
      {
        h2: "Taking Part",
        blocks: [
          { p: "Visitors are often invited to receive a tika — by a guide's family, a hotel owner, a homestay host. Say yes. It involves sitting down, receiving the paste and the jamara with a blessing, and being fed more goat curry and beaten rice than you can finish. Our guide to [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]] covers what to wear, what to bring and what to say, and the [[post:dashain-food-guide-what-to-eat|Dashain food guide]] covers the feast." },
          { p: "If you carry a camera, the festival is generous to it, provided you ask before pointing it at a family ritual — see [[post:photographing-dashain-in-nepal|photographing Dashain]]. Our [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] can be timed for the week." },
        ],
      },
      {
        h2: "A Sample Week Around the Tika",
        blocks: [
          { p: "This is the shape of a trip that uses Dashain rather than colliding with it. It works in any year; the 2026 dates are given as the example." },
          {
            table: {
              head: ["Day", "2026 date", "Plan"],
              rows: [
                ["1", "Thu 15 Oct", "Arrive Kathmandu. Withdraw cash. Any permit paperwork goes in tomorrow, the last working day"],
                ["2", "Fri 16 Oct", "Old city and the Ason markets at their busiest — [[trek:kathmandu-day-tour|Kathmandu day tour]]"],
                ["3", "Sat 17 Oct", "Phulpati: the parade at Tundikhel in the afternoon"],
                ["4", "Sun 18 Oct", "Maha Ashtami: [[trek:bhaktapur-day-tour|Bhaktapur]] for Mohani; evening on the valley rim at [[trek:nagarkot-sunrise-tour|Nagarkot]]"],
                ["5", "Mon 19 Oct", "Fly to Pokhara before the tika-day standstill"],
                ["6", "Tue 20 Oct", "Maha Navami: Bindhyabasini temple and the lake — [[trek:pokhara-day-tour|Pokhara day tour]]"],
                ["7", "Wed 21 Oct", "Vijaya Dashami: tika with a host family, village swings above the lake"],
                ["8 onward", "From Thu 22 Oct", "Start a trek — [[trek:poonhill-trek-from-pokhara|Poon Hill]] or [[trek:mardi-himal-trek-from-pokhara|Mardi Himal]] — while the roads are still quiet"],
              ],
            },
          },
          { p: "The same week fits inside our [[trek:kathmandu-pokhara-tour|Kathmandu & Pokhara Tour]], and the longer [[trek:best-of-nepal-tour|Best of Nepal Tour]] adds Chitwan and Lumbini either side of the festival." },
        ],
      },
      {
        h2: "Who Should Come at Dashain, and Who Should Not",
        blocks: [
          { p: "Come if you want to see Nepal being itself rather than performing for visitors, if your plans are booked in advance, and if a few closed shops do not bother you. Think twice if your trip depends on arranging things on arrival — a restricted-area permit, a visa extension, a bus seat for tomorrow — or if the sight of animal sacrifice would spoil a day for you." },
          { p: "We weigh both sides in [[post:is-dashain-a-good-time-to-visit-nepal|is Dashain a good time to visit Nepal?]], and if you are choosing between the two autumn festivals, [[post:dashain-vs-tihar-which-festival-to-visit|Dashain vs Tihar]] sets them side by side." },
        ],
      },
    ],
    faqs: [
      { question: "What is Dashain?", answer: "Dashain is Nepal's largest and longest festival, fifteen days in the lunar month of Ashwin, celebrating the goddess Durga's victory over the demon Mahishasura. Families gather, elders give a red tika and a blessing to younger relatives on the tenth day, and most of the country is on holiday." },
      { question: "When is Dashain in 2026?", answer: "Dashain 2026 runs from Sunday 11 October (Ghatasthapana) to Sunday 25 October (Kojagrat Purnima). The main day, Vijaya Dashami, when the tika is given, is Wednesday 21 October 2026." },
      { question: "Is everything closed during Dashain?", answer: "No. Government offices and banks close for a week or more, and local shops shut for the main days, but hotels, trekking lodges, heritage sites, domestic flights and most businesses in the tourist districts of Kathmandu and Pokhara keep running. The day with the least open is the tika day itself." },
      { question: "Can I trek during Dashain?", answer: "Yes. It falls in the best trekking season and lodges on all the main routes are open. The things to arrange early are permits for restricted areas, which need a government office, your guide and porters, and transport to the trailhead on the days around the tika." },
      { question: "Can foreigners take part in Dashain?", answer: "Yes, and you are likely to be invited. Receiving a tika from a host family, a guide's parents or a lodge owner is common, and nobody expects you to know the ritual. Dress modestly, take your shoes off, accept the food, and say 'Dashain ko shubhakamana'." },
      { question: "Will I see animal sacrifice?", answer: "Only if you go where it happens. Sacrifices take place at Durga and Kali temples and in household yards, mainly on the eighth and ninth days. Buddhist sites such as Boudhanath and Swayambhunath have none, and it is easy to plan those two days around places where you will not come across it." },
      { question: "Is Kathmandu worth visiting during Dashain?", answer: "Very much. The week before the festival is the liveliest of the year in the old markets, and from the eighth day the city empties, the traffic disappears and the air clears. The Durbar Squares, the stupas and Pashupatinath are all open." },
      { question: "Is Nepal more expensive during Dashain?", answer: "A little. Hotels and treks are at peak-season rates because it is October, not because of the festival. What the festival adds is full domestic flights at the top fare, scarcer vehicles, and a customary festival bonus for guides and porters who work through it." },
      { question: "Should I book in advance for Dashain?", answer: "Yes — flights within Nepal, lodges on popular treks, and your guide. Things that can normally be arranged the day before, such as a bus seat or a jeep to a trailhead, become difficult in the days either side of the tika." },
      { question: "What do you say to greet someone at Dashain?", answer: "'Dashain ko shubhakamana' — best wishes for Dashain — works throughout the festival. On the tenth day itself, 'Vijaya Dashami ko shubhakamana' is the fuller greeting. Both are received with obvious pleasure from a visitor." },
    ],
    relatedTreks: [
      "kathmandu-pokhara-tour",
      "best-of-nepal-tour",
      "kathmandu-photography-tour",
      "ghalegaun-ghanpokhara-village-tour",
      "poonhill-trek-from-pokhara",
      "everest-base-camp-trek",
    ],
    tripsNote: "Trips that fit around the festival week — city and culture first, then a trek once the roads have emptied.",
    relatedPosts: [
      "dashain-dates-calendar-for-travellers",
      "fifteen-days-of-dashain-explained",
      "is-dashain-a-good-time-to-visit-nepal",
      "trekking-in-nepal-during-dashain",
      "where-to-see-dashain-celebrations-in-nepal",
      "nepal-festival-calendar",
    ],
    tags: ["Dashain", "Festivals", "Nepal Travel", "Culture", "Trip Planning"],
    meta: {
      title: "Dashain Festival in Nepal: Complete Travel Guide (2026)",
      description: "Dashain in Nepal explained for travellers: 2026 dates, what closes, trekking during the festival, where to see it and how to take part in the tika.",
      keywords: "Dashain festival Nepal, Dashain 2026, Dashain travel guide, Vijaya Dashami, visiting Nepal during Dashain, Dashain trekking, Nepal festivals October",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-dates-calendar-for-travellers",
    title: "Dashain 2026 and 2027 Dates: A Day-by-Day Calendar for Travellers",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.altar,
      alt: "A household Dashain altar with a copper water vessel, an oil lamp, fruit and offerings.",
    },
    excerpt:
      "Dashain 2026 runs from 11 to 25 October, with the tika on Wednesday 21 October — a day later than a simple count suggests. Here is the full calendar for 2026 and 2027, what closes on which day, and how to place an arrival, a trek or a flight around it.",
    intro: [
      { p: "Dashain moves. It follows the lunar calendar, so it can begin in the last week of September one year and the second week of October the next. For a traveller the dates matter more than the mythology, because they decide which days the permit office is shut, which days the highway is jammed and which day almost nothing is open." },
      { p: "This guide gives the dates for 2026 and 2027, explains an oddity in the 2026 calendar that puts the tika on the eleventh day rather than the tenth, and translates the festival days into planning terms. For what happens on each day, see [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain explained]]." },
    ],
    sections: [
      {
        h2: "Dashain 2026: The Full Calendar",
        blocks: [
          { p: "In the Nepali calendar this is Dashain 2083 BS. The festival opens on Sunday 11 October and closes with the full moon on Sunday 25 October." },
          {
            table: {
              head: ["Date (2026)", "Day", "What happens", "Effect on travel"],
              rows: [
                ["Sun 11 Oct", "Ghatasthapana", "A water vessel is set up and barley sown in every household", "A public holiday; otherwise normal"],
                ["Mon 12 – Fri 16 Oct", "Days 2 to 6", "Shopping, kites, swings going up, people travelling home", "Markets crowded; buses and flights out of Kathmandu filling; offices open"],
                ["Sat 17 Oct", "Phulpati", "Sacred plants carried into Kathmandu; army parade at Tundikhel", "The main holiday block begins; heaviest outbound traffic ends"],
                ["Sun 18 Oct", "Maha Ashtami", "Sacrifices at Durga and Kali temples; feasting", "Offices and banks closed; local shops shutting"],
                ["Mon 19 Oct", "Ashtami continues", "No separate observance — the lunar day runs across two calendar days", "Holiday"],
                ["Tue 20 Oct", "Maha Navami", "Taleju temple opens; tools and vehicles are blessed", "Holiday; few vehicles on the road"],
                ["Wed 21 Oct", "Vijaya Dashami", "The tika. Families gather for blessings", "The quietest day of the year: little transport, most shops shut"],
                ["Thu 22 – Sat 24 Oct", "Days after the tika", "Visiting relatives for further tika", "Holiday continues; return traffic building"],
                ["Sun 25 Oct", "Kojagrat Purnima", "Full moon; the festival ends", "A public holiday; heavy traffic back into Kathmandu"],
              ],
              note: "Public holidays are gazetted by the government each year and can shift by a day. Treat Friday 16 October as the last normal working day and Monday 26 October as the first.",
            },
          },
        ],
      },
      {
        h2: "Why the Tika Falls on the Eleventh Day in 2026",
        blocks: [
          { p: "Count ten days from 11 October and you land on Tuesday 20 October. The tika is on Wednesday 21st. The reason is the unit the calendar counts in." },
          { p: "Festival days are set by the <em>tithi</em>, the lunar day, which is defined by the angle between the sun and the moon rather than by the clock. A tithi can be shorter or longer than a solar day, so in some years one is skipped and in others one is stretched across two sunrises. In 2026 the eighth tithi, ashtami, runs over two calendar days — Sunday 18 and Monday 19 October — and everything after it moves back by one." },
          { p: "It matters because a great many itineraries, and a few websites, are built by counting. If a flight or a homestay is booked for the tika, book it for <strong>21 October</strong>." },
          {
            figure: {
              image: DASHAIN.taleju,
              alt: "The tiered roofs of the Taleju temple rising above Kathmandu Durbar Square.",
              caption: "The Taleju temple in Kathmandu Durbar Square opens to worshippers on one day a year, Maha Navami — Tuesday 20 October in 2026.",
            },
          },
        ],
      },
      {
        h2: "Dashain 2027 and Beyond",
        blocks: [
          { p: "Dashain 2027 (2084 BS) falls about eleven days earlier. The dates below come from published almanacs; the official Nepali calendar for the year is issued the spring before, and a one-day adjustment is possible." },
          {
            table: {
              head: ["Day", "2027 (provisional)"],
              rows: [
                ["Ghatasthapana", "Thursday 30 September"],
                ["Phulpati", "Wednesday 6 October"],
                ["Maha Ashtami", "Thursday 7 October"],
                ["Maha Navami", "Friday 8 October"],
                ["Vijaya Dashami — the tika", "Saturday 9 October"],
                ["Kojagrat Purnima", "Around Thursday 14 October"],
              ],
            },
          },
          { p: "As a rule of thumb the tika falls between about 25 September and 25 October. An early Dashain can coincide with the last of the monsoon; a late one, as in 2026, sits in the driest and clearest weeks of the year. Our [[post:nepal-festival-calendar|Nepal festival calendar]] places it among the year's other festivals." },
        ],
      },
      {
        h2: "How the Dates Are Set",
        blocks: [
          { p: "Nepal runs on the <strong>Bikram Sambat</strong> calendar, a solar calendar about 56 years and eight months ahead of the Gregorian one, with festival dates fixed by the lunar cycle within it. Dashain occupies the bright half of the month of Ashwin, from the day after the new moon to the full moon." },
          { p: "A national committee of astrologers publishes the calendar each year, including the <em>sait</em> — the auspicious moment at which the main tika should be given, usually late in the morning of Vijaya Dashami. Families plan the day around it, which is why tika day begins slowly and then happens all at once." },
        ],
      },
      {
        h2: "Planning Around the Dates",
        blocks: [
          { p: "The festival has three phases for a traveller: the build-up, when everything works but transport is filling; the shutdown, from Phulpati to two days after the tika; and the return, when the roads into Kathmandu are at their worst." },
          {
            table: {
              head: ["If you need to…", "In 2026, do it…", "Why"],
              rows: [
                ["Get a restricted-area trekking permit", "By Friday 16 October, or from Monday 26th", "The immigration office is closed in between — see [[post:trekking-permits-during-dashain|permits during Dashain]]"],
                ["Extend a visa", "Before 16 October", "Same office"],
                ["Withdraw cash for a trek", "By 16 October", "Banks close and ATMs are not refilled"],
                ["Drive out of Kathmandu", "Before 13 October, or on 18–21 October", "The roads west and east are jammed in the days before Phulpati"],
                ["Drive into Kathmandu", "Before 22 October, or after 27th", "Return traffic peaks after the tika and around the full moon"],
                ["Fly to Lukla or Pokhara", "Any day, booked early", "Flights run through the festival but sell out — see [[post:travelling-around-nepal-during-dashain|getting around during Dashain]]"],
                ["Start a trek", "Before 16 October or from 22nd", "Trailhead transport is scarce on the tika day and the day before — see [[post:trekking-in-nepal-during-dashain|trekking during Dashain]]"],
                ["See the festival in Kathmandu", "17 to 21 October", "Phulpati, Navami and the tika — see [[post:kathmandu-during-dashain|Kathmandu during Dashain]]"],
              ],
            },
          },
          { p: "An arrival on 14 or 15 October is the sweet spot for most trips: two working days for paperwork and money, the markets at their busiest, and then the festival itself. Our [[post:arriving-in-kathmandu-first-48-hours|guide to your first 48 hours in Kathmandu]] covers the arrival, and the [[post:nepal-visa-on-arrival-guide|visa on arrival]] desk at the airport works through the holiday as normal." },
          { p: "Short trips slot neatly either side of the tika. The five-day [[trek:glimpse-of-nepal-tour|Glimpse of Nepal Tour]] and a [[trek:kathmandu-day-tour|Kathmandu day tour]] cover the festival days in the valley; the week-long [[trek:everest-view-trek|Everest View trek]] and the [[trek:poonhill-trek|Poon Hill trek]] fit the days after it, and neither needs a permit from an office that is closed." },
        ],
      },
      {
        h2: "The Rest of the Autumn Calendar",
        blocks: [
          { p: "Dashain is the first of three festivals in quick succession, and a trip of three weeks can take in more than one." },
          {
            table: {
              head: ["Festival", "2026 dates", "Where"],
              rows: [
                ["Dashain", "11 – 25 October", "Nationwide"],
                ["Mani Rimdu", "Around the late-October full moon; dates set by the monastery", "Tengboche, on the [[trek:everest-base-camp-trek|Everest Base Camp]] route — see our [[post:tengboche-monastery-and-sherpa-culture|Tengboche guide]]"],
                ["Tihar", "7 – 11 November", "Nationwide; best in the Kathmandu valley"],
                ["Chhath", "Mid November", "The Terai, especially Janakpur"],
              ],
            },
          },
          { p: "Tihar, the festival of lights, comes about two and a half weeks after the tika. It is shorter, closes far less, and is easier for a visitor to see from the street. We compare the two in [[post:dashain-vs-tihar-which-festival-to-visit|Dashain vs Tihar]]." },
        ],
      },
    ],
    faqs: [
      { question: "What are the dates of Dashain 2026?", answer: "Dashain 2026 begins with Ghatasthapana on Sunday 11 October and ends with Kojagrat Purnima on Sunday 25 October. Phulpati is Saturday 17 October, Maha Ashtami Sunday 18 October, Maha Navami Tuesday 20 October and Vijaya Dashami, the tika day, Wednesday 21 October." },
      { question: "What day is the Dashain tika in 2026?", answer: "Wednesday 21 October 2026. It is the eleventh calendar day of the festival rather than the tenth because the lunar day of ashtami is spread across two calendar days that year." },
      { question: "When is Dashain in 2027?", answer: "Provisionally, Dashain 2027 runs from Thursday 30 September to about Thursday 14 October, with the tika on Saturday 9 October 2027. The official calendar is published the spring before and can differ by a day." },
      { question: "Why do Dashain dates change every year?", answer: "Dashain is fixed by the lunar calendar — it runs from the new moon to the full moon of the month of Ashwin. Twelve lunar months are about eleven days shorter than a solar year, so the festival drifts earlier each year until an extra month is added and it jumps later again." },
      { question: "How many days of public holiday are there for Dashain?", answer: "Government offices take a single day for Ghatasthapana, a block of about a week from Phulpati to two days after the tika, and a day for Kojagrat Purnima. Schools close for longer, often two weeks or more. The exact days are gazetted each year." },
      { question: "Which is the most important day of Dashain?", answer: "Vijaya Dashami, the tenth lunar day, when elders give tika and blessings. For a traveller it is also the day with the least open and the least transport. The seventh to ninth days — Phulpati, Ashtami and Navami — hold most of the public ceremony." },
      { question: "Is the day after the tika a normal day?", answer: "No. Tika continues for four more days as people travel to visit relatives who live elsewhere, and the holiday runs on. Normal service in offices and banks resumes after the full moon." },
      { question: "When is Tihar in 2026?", answer: "Tihar 2026 runs from Saturday 7 November to Wednesday 11 November, with Lakshmi Puja on Sunday 8 November and Bhai Tika on Wednesday 11 November — a little over two weeks after the Dashain tika." },
    ],
    relatedTreks: [
      "glimpse-of-nepal-tour",
      "kathmandu-valley-tour",
      "kathmandu-day-tour",
      "everest-view-trek",
      "poonhill-trek",
    ],
    tripsNote: "Short trips that can be placed precisely around the festival dates.",
    relatedPosts: [
      "dashain-festival-nepal-travel-guide",
      "fifteen-days-of-dashain-explained",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "trekking-permits-during-dashain",
      "dashain-vs-tihar-which-festival-to-visit",
      "nepal-festival-calendar",
    ],
    tags: ["Dashain", "Festivals", "Trip Planning", "Nepal Travel"],
    meta: {
      title: "Dashain 2026 Dates: Day-by-Day Calendar (and 2027)",
      description: "Dashain 2026 runs 11–25 October with the tika on 21 October. Full day-by-day calendar, 2027 dates, public holidays and how to plan travel around them.",
      keywords: "Dashain 2026 dates, Dashain 2083, Vijaya Dashami 2026, Dashain tika date, Dashain 2027, Ghatasthapana 2026, Phulpati 2026, Dashain public holidays",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "fifteen-days-of-dashain-explained",
    title: "The 15 Days of Dashain Explained: Ghatasthapana to Kojagrat Purnima",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.jamara,
      alt: "A bowl of green jamara, the barley shoots grown in every household for the Dashain tika.",
    },
    excerpt:
      "Dashain lasts fifteen days, but only five of them carry the ritual: the first, when barley is sown; the seventh, eighth and ninth, when the goddess is honoured; and the tenth, when the tika is given. Here is each day, what it means, and what a visitor can actually see.",
    intro: [
      { p: "Ask what Dashain is and most Nepalis will describe the tenth day: the tika, the blessing, the family meal. But the festival begins nine days earlier, in a dark room with a handful of barley seeds, and it builds through a parade, a night of sacrifice and the one day a year a great temple opens its doors." },
      { p: "This guide goes through the fifteen days in order. For the dates in a given year see our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]], and for the practical side of travelling through it, the [[post:dashain-festival-nepal-travel-guide|complete Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "The Story Behind the Festival",
        blocks: [
          { p: "The demon <strong>Mahishasura</strong>, who could take the form of a buffalo, had won a boon that no man or god could kill him, and used it to drive the gods from heaven. The gods combined their powers into a goddess, <strong>Durga</strong>, gave her a weapon in each of her many hands, and sent her into battle on a lion. She fought for nine nights and killed him on the tenth day." },
          { p: "The nine nights are <em>Navaratri</em>; the tenth day is <em>Vijaya Dashami</em>, the tenth day of victory. A second story is told with it: that Ram prayed to Durga before defeating the demon king Ravan, and won on the same day. Both explain the festival's shape — nine days of worshipping the goddess in her fierce forms, then a day of blessing." },
          {
            figure: {
              image: DASHAIN.durgaIdol,
              alt: "A painted clay tableau of the goddess Durga killing the buffalo demon Mahishasura, made for Durga Puja in Nepal.",
              caption: "Durga killing Mahishasura — the scene the festival commemorates. Clay tableaux like this are made for Durga Puja in the towns of the Terai.",
            },
          },
        ],
      },
      {
        h2: "Day 1: Ghatasthapana",
        blocks: [
          { p: "The festival opens at a moment fixed by astrologers. In each household a <em>kalash</em>, a vessel filled with water, is set up to represent the goddess, on a bed of sand in a room kept for the purpose — the <em>Dashain ghar</em>. Barley seeds, sometimes with maize and wheat, are sown in the sand around it." },
          { p: "The room is kept dark, the seeds are watered every day, and worship is offered morning and evening for nine days. Grown without sunlight, the shoots come up pale yellow rather than green and reach a hand's length by the tenth day. This is <em>jamara</em>, and it will be given with the tika." },
          { p: "For a visitor Ghatasthapana is nearly invisible — a public holiday on which the streets look ordinary. In a homestay you may be shown the room; do not go in unless invited." },
        ],
      },
      {
        h2: "Days 2 to 6: The Build-Up",
        blocks: [
          { p: "Nothing is prescribed for these days, and they are the busiest of the year. Houses are cleaned and repainted — in the hills, with fresh red and white clay carried up from the riverbank. New clothes are bought for every child. Kites go up from the rooftops, and in the villages the young men cut bamboo and lash together the tall swings that will stand until the festival season ends." },
          { p: "Above all, people travel. Anyone who works away from home is on a bus, and for a week the highways out of Kathmandu carry the whole city in one direction. If you are on the road in these days, read [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]] first." },
          {
            figure: {
              image: DASHAIN.paintingHouse,
              alt: "Villagers repainting the walls of a hill house with red and white clay before Dashain.",
              caption: "Repainting the house with red and white clay before the festival — the surest sign in a hill village that Dashain is a week away.",
            },
          },
        ],
      },
      {
        h2: "Day 7: Phulpati",
        blocks: [
          { p: "<em>Phulpati</em> means flowers and leaves: a bundle of sacred plants — banana stalks, sugar cane, jamara and others — that is carried into each home's Dashain room on the seventh day. The state has its own. For centuries the royal Phulpati has been brought on foot from the old palace at <strong>Gorkha</strong>, the ancestral seat of the kings who unified Nepal, to the Hanuman Dhoka palace in Kathmandu, a journey of about three days." },
          { p: "Its arrival is the festival's main public ceremony. The bundle is received in the city and carried in procession to Hanuman Dhoka, while at the Tundikhel parade ground the Nepal Army marks it with a parade, bands and ceremonial gunfire. Since the end of the monarchy the president attends in place of the king. See [[post:gorkha-and-manakamana-during-dashain|Gorkha and Manakamana during Dashain]] for the place it starts from, and [[post:kathmandu-during-dashain|Kathmandu during Dashain]] for where to stand." },
          { p: "Phulpati is also when the long public holiday begins and offices close." },
        ],
      },
      {
        h2: "Day 8: Maha Ashtami",
        blocks: [
          { p: "The eighth day belongs to the goddess in her most ferocious forms, Kali and Bhadrakali, and it is the main day of animal sacrifice. Goats, buffalo, ducks and chickens are offered at Durga and Kali temples across the country and in the yards of private houses, and the meat becomes the feast of the following days. The night is <em>Kal Ratri</em>, the black night, when sacrifices are made at the Dashain house of the old palace in Kathmandu." },
          { p: "Newar families sit down on this day to <em>Kuchhi Bhoye</em>, a feast of beaten rice and many side dishes eaten off banana leaves in order of age. It is a confronting day for some visitors and an easy one to plan around — see [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]]." },
        ],
      },
      {
        h2: "Day 9: Maha Navami",
        blocks: [
          { p: "The last of the nine nights. Two things mark it. The <strong>Taleju temple</strong> in Kathmandu Durbar Square, closed all year, opens to worshippers for this one day, and the queue winds through the square from before dawn. And it is the day of <em>Vishwakarma</em>, the god of craft: tools, machines and vehicles are worshipped so that they will not fail in the year ahead." },
          { p: "You will see it everywhere. Buses, taxis and motorbikes carry garlands and a smear of red on the bonnet; workshop tools are laid out and blessed; even aircraft are given an offering at the airport. Fewer vehicles run than on any day except the next." },
        ],
      },
      {
        h2: "Day 10: Vijaya Dashami",
        blocks: [
          { p: "The day of victory. At the auspicious moment the head of the household mixes rice, yoghurt and red vermilion into a paste, the <em>tika</em>, and presses it onto the forehead of each younger member of the family in turn, with a blessing recited in Sanskrit, a few shoots of jamara, and a gift of money. Then everyone eats." },
          { p: "It is a day of bowed heads and full houses: grandparents holding court, children collecting banknotes, cousins who have not met for a year. Outside, the streets are as quiet as they will be until next Dashain. If you are invited in — and visitors often are — our guide to [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]] explains what to do." },
          {
            figure: {
              image: DASHAIN.tikaRice,
              alt: "A metal plate of red akshata, the rice, yoghurt and vermilion paste used for the Dashain tika.",
              caption: "The tika itself: rice mixed with yoghurt and vermilion, pressed onto the forehead by the elders of the family.",
            },
          },
        ],
      },
      {
        h2: "Days 11 to 15: Visiting, and Kojagrat Purnima",
        blocks: [
          { p: "One day is not enough to reach every elder in a large family, so the tika continues for four more days as people travel between the houses of uncles, in-laws and grandparents. These are the days of card games, long lunches and, for anyone on the road, the first wave of return traffic." },
          { p: "The festival ends on the full moon, <em>Kojagrat Purnima</em>. The name asks a question — who is awake? — and the goddess of wealth, Lakshmi, is said to visit the houses of those who are. Many stay up through the night. The jamara and the vessel from the first day are taken to a river, and Dashain is over." },
        ],
      },
      {
        h2: "What a Visitor Can See, Day by Day",
        blocks: [
          {
            table: {
              head: ["Day", "Best place to be", "What you will see"],
              rows: [
                ["Days 2–6", "Ason and Indra Chowk in old Kathmandu; any hill village", "Festival shopping, kites, swings being built — the [[trek:secret-food-tour-in-kathmandu|food tour through Ason]] is at its liveliest"],
                ["Phulpati", "Tundikhel and Hanuman Dhoka, Kathmandu", "The army parade and the Phulpati procession"],
                ["Maha Ashtami", "Bhaktapur", "Mohani, the Newar Dashain — see [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]]"],
                ["Maha Navami", "Kathmandu Durbar Square", "The queue at the Taleju temple; garlanded vehicles everywhere — [[trek:kathmandu-day-tour|Kathmandu day tour]]"],
                ["Vijaya Dashami", "With a family — a homestay or a guide's home", "The tika. Village homestays at [[trek:sirubari-village-tour|Sirubari]] and [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] make this possible"],
                ["Days 11–15", "The hills above Pokhara or the valley rim", "Swings in full use, families on the move, clear mountain mornings"],
              ],
            },
          },
          { p: "The Kathmandu valley's Newar community keeps the same days under different names and with its own rituals, including sword processions on the tenth day and the masked Navadurga dancers of Bhaktapur. A [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] timed for the week takes in both traditions." },
        ],
      },
    ],
    faqs: [
      { question: "How many days is Dashain?", answer: "Fifteen, from the day after the new moon to the full moon of the month of Ashwin. The main ritual days are the first (Ghatasthapana), the seventh (Phulpati), the eighth (Maha Ashtami), the ninth (Maha Navami) and the tenth (Vijaya Dashami)." },
      { question: "What is jamara?", answer: "Jamara is the barley shoots sown on the first day of Dashain and grown in a dark room for nine days, which makes them pale yellow. On the tenth day a few shoots are given with the tika and tucked behind the ear or into the hair as a sign of the goddess's blessing." },
      { question: "What is the meaning of the Dashain tika?", answer: "The red tika — rice, yoghurt and vermilion — is the blessing of the goddess Durga passed from elder to younger. It carries wishes for long life, health and success, and the act of receiving it is how family ties are renewed each year." },
      { question: "What is Phulpati?", answer: "Phulpati, on the seventh day, is the bringing of sacred flowers and leaves into the Dashain room. The state ceremony brings a Phulpati from Gorkha to Hanuman Dhoka in Kathmandu and is marked by an army parade at Tundikhel. It is also the start of the main public holiday." },
      { question: "Why are animals sacrificed at Dashain?", answer: "The sacrifice re-enacts Durga's killing of the buffalo demon and is an offering to her fierce forms on the eighth and ninth days. The animal is then eaten by the family. Many households now offer a pumpkin, a coconut or other substitutes instead." },
      { question: "What is Kojagrat Purnima?", answer: "The full-moon night that ends Dashain. The goddess Lakshmi is believed to bless those who stay awake, so many people keep vigil, often over card games. The jamara and the ritual vessel are immersed in a river the same day." },
      { question: "Do all Nepalis celebrate Dashain?", answer: "Most do in some form, but not all and not identically. Hindu communities celebrate it fully. Newars keep it as Mohani with their own rites. Some communities use a white tika, some mark it only as a holiday, and a family that has lost a member during the year does not celebrate." },
      { question: "Which day of Dashain is best for a visitor to see?", answer: "For public ceremony, Phulpati and Maha Navami in Kathmandu. For the heart of the festival, Vijaya Dashami with a host family. For atmosphere without ritual, any of the days before Phulpati, when the markets, kites and swings are at their best." },
    ],
    relatedTreks: [
      "kathmandu-valley-tour",
      "kathmandu-day-tour",
      "bhaktapur-day-tour",
      "sirubari-village-tour",
      "hindu-pilgrimage-tour",
    ],
    tripsNote: "Tours through the temples and old cities where the festival's public days unfold.",
    relatedPosts: [
      "dashain-festival-nepal-travel-guide",
      "dashain-dates-calendar-for-travellers",
      "dashain-tika-ceremony-guide-for-visitors",
      "bhaktapur-during-dashain-navadurga-and-mohani",
      "animal-sacrifice-at-dashain-what-travellers-should-know",
      "kathmandu-valley-unesco-sites-guide",
    ],
    tags: ["Dashain", "Festivals", "Culture", "Nepal Travel"],
    meta: {
      title: "The 15 Days of Dashain Explained, Day by Day",
      description: "What happens on each of the fifteen days of Dashain — Ghatasthapana, Phulpati, Ashtami, Navami, the tika and Kojagrat Purnima — and what a visitor can see.",
      keywords: "15 days of Dashain, Ghatasthapana, Phulpati, Maha Ashtami, Maha Navami, Vijaya Dashami, Kojagrat Purnima, jamara, Dashain tika meaning",
    },
  },
];
