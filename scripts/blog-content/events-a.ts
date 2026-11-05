import type { BlogContent } from "./build";
import { FREE, trekImage } from "./images";
import { source } from "./news-a";

/**
 * Events, part 1: the Nepal Premier League, Season 3, written on 4 November
 * 2026 (a league rest day, with 13 of 32 matches played).
 *
 * Fixtures are the published round-robin (cross-checked between two fixture
 * lists: every team plays each of the other seven exactly once, and the gaps
 * fall on the rest days The Kathmandu Post reported). Start times are the
 * 12:30 / 4:30 PM NPT given by The Kathmandu Post and Wisden. No results or
 * standings are quoted: they change daily and the post points to live sources.
 */
export const eventsA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-premier-league-2026-schedule-and-trekking-in-nepal",
    title: "NPL 2026 and Trekking in Nepal: Full Schedule, Tickets and the Treks That Fit Around It",
    cluster: "events",
    date: "2026-11-04",
    hero: {
      image: FREE.kathmanduView,
      alt: "Rooftops of Kathmandu under a clear blue sky, with a long line of snow-capped Himalayan peaks on the horizon.",
    },
    excerpt:
      "The third Nepal Premier League runs at Kirtipur until the final on Saturday 21 November 2026, right in the clearest trekking weeks of the year. The full NPL schedule, tickets and getting to the ground, and the treks that fit between the matches.",
    intro: [
      {
        p: "<strong>Written on Wednesday 4 November 2026, a rest day in the Nepal Premier League.</strong> The third season of the NPL began at Kirtipur on 26 October. Thirteen of its 32 matches have been played, and nineteen are left: the league games run until Sunday 15 November, and the final is on Saturday 21 November.",
      },
      {
        p: "Those three weeks are also the best trekking weather of the year. The monsoon is long gone, the air is clear and the trails are dry. If you are in Nepal this month you can do both: walk to a viewpoint in the Annapurnas or Langtang, and come back to Kathmandu for a T20 match in front of a famously loud home crowd. This guide has the full schedule, how to get a ticket and get to the ground, and the treks that fit between the fixtures, with a link to each.",
      },
    ],
    sections: [
      {
        h2: "NPL 2026 at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Season</strong>", "Third season of the Nepal Premier League, a franchise T20 league run by the Cricket Association of Nepal (CAN)"],
                ["<strong>Dates</strong>", "Monday 26 October to Saturday 21 November 2026"],
                ["<strong>Venue</strong>", "Every match at the Tribhuvan University (TU) International Cricket Ground, Kirtipur, on the south-western edge of Kathmandu"],
                ["<strong>Teams</strong>", "Eight: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Karnali Yaks, Kathmandu Gurkhas, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals"],
                ["<strong>Matches</strong>", "32: a 28-match round robin, in which every team plays every other team once, then four playoff matches"],
                ["<strong>Start times</strong>", "4:30 PM Nepal Time on single-match days. On double-header days, 12:30 PM and 4:30 PM"],
                ["<strong>Rest days</strong>", "30 October, 4, 8 and 11 November in the league; 16 and 20 November before and during the playoffs"],
                ["<strong>Defending champions</strong>", "Lumbini Lions. Janakpur Bolts won the first season"],
                ["<strong>Tickets</strong>", "Rs 500 ordinary and Rs 1,000 premium for league matches; double that for the eliminator and the final"],
                ["<strong>On TV</strong>", "Himalaya Sports TV in Nepal; streamed on NetTV worldwide and on FanCode in India"],
              ],
              note: "As reported by The Kathmandu Post, Wisden and Kantipur in September and October 2026. Sources are listed at the end of this article.",
            },
          },
        ],
      },
      {
        h2: "What the Nepal Premier League Is",
        blocks: [
          {
            p: "The NPL is Nepal's franchise T20 competition, the country's answer to the IPL. It was first played in late 2024, when Janakpur Bolts won the title, and Lumbini Lions won the second season in 2025. Sudurpaschim Royals reached the final both times. Each of the eight teams carries the name of a city or province, so the league works as a map of the country as well as a tournament: the east plays the far west, the Terai plays the hills.",
          },
          {
            p: "Nepal's national team has made cricket one of the most-followed sports in the country, and the NPL brings its players, a handful of overseas professionals and thousands of fans to one ground for four weeks. Overseas signings this season include South Africa's David Miller, who joined Karnali Yaks. Expect drums, flags and a crowd that cheers every boundary as if it were a match-winner.",
          },
          {
            p: "The format is simple. All eight teams play each other once, 28 matches in all, ending on Sunday 15 November. The top four go through to an IPL-style playoff. The first two meet in Qualifier 1, and the winner goes straight to the final. Third and fourth meet in the Eliminator. The loser of Qualifier 1 then plays the winner of the Eliminator in Qualifier 2 for the other place in the final.",
          },
        ],
      },
      {
        h2: "NPL 2026 Full Schedule",
        blocks: [
          {
            p: "Every match is at the TU International Cricket Ground in Kirtipur. Times are Nepal Time (UTC+5:45). Matches 1 to 13 have already been played.",
          },
          {
            table: {
              head: ["Match", "Date", "Fixture", "Start (NPT)"],
              rows: [
                ["1", "Mon 26 Oct", "Lumbini Lions v Sudurpaschim Royals", "4:30 PM"],
                ["2", "Tue 27 Oct", "Biratnagar Kings v Chitwan Rhinos", "12:30 PM"],
                ["3", "Tue 27 Oct", "Karnali Yaks v Janakpur Bolts", "4:30 PM"],
                ["4", "Wed 28 Oct", "Pokhara Avengers v Sudurpaschim Royals", "4:30 PM"],
                ["5", "Thu 29 Oct", "Janakpur Bolts v Kathmandu Gurkhas", "12:30 PM"],
                ["6", "Thu 29 Oct", "Karnali Yaks v Biratnagar Kings", "4:30 PM"],
                ["–", "Fri 30 Oct", "<em>Rest day</em>", "–"],
                ["7", "Sat 31 Oct", "Lumbini Lions v Chitwan Rhinos", "12:30 PM"],
                ["8", "Sat 31 Oct", "Sudurpaschim Royals v Biratnagar Kings", "4:30 PM"],
                ["9", "Sun 1 Nov", "Janakpur Bolts v Pokhara Avengers", "4:30 PM"],
                ["10", "Mon 2 Nov", "Kathmandu Gurkhas v Karnali Yaks", "12:30 PM"],
                ["11", "Mon 2 Nov", "Sudurpaschim Royals v Chitwan Rhinos", "4:30 PM"],
                ["12", "Tue 3 Nov", "Biratnagar Kings v Janakpur Bolts", "12:30 PM"],
                ["13", "Tue 3 Nov", "Lumbini Lions v Pokhara Avengers", "4:30 PM"],
                ["–", "Wed 4 Nov", "<em>Rest day</em>", "–"],
                ["14", "Thu 5 Nov", "Lumbini Lions v Janakpur Bolts", "12:30 PM"],
                ["15", "Thu 5 Nov", "Kathmandu Gurkhas v Biratnagar Kings", "4:30 PM"],
                ["16", "Fri 6 Nov", "Sudurpaschim Royals v Karnali Yaks", "12:30 PM"],
                ["17", "Fri 6 Nov", "Chitwan Rhinos v Pokhara Avengers", "4:30 PM"],
                ["18", "Sat 7 Nov", "Kathmandu Gurkhas v Lumbini Lions", "4:30 PM"],
                ["–", "Sun 8 Nov", "<em>Rest day (Laxmi Puja)</em>", "–"],
                ["19", "Mon 9 Nov", "Pokhara Avengers v Karnali Yaks", "12:30 PM"],
                ["20", "Mon 9 Nov", "Chitwan Rhinos v Kathmandu Gurkhas", "4:30 PM"],
                ["21", "Tue 10 Nov", "Sudurpaschim Royals v Janakpur Bolts", "4:30 PM"],
                ["–", "Wed 11 Nov", "<em>Rest day (Bhai Tika)</em>", "–"],
                ["22", "Thu 12 Nov", "Biratnagar Kings v Pokhara Avengers", "12:30 PM"],
                ["23", "Thu 12 Nov", "Karnali Yaks v Lumbini Lions", "4:30 PM"],
                ["24", "Fri 13 Nov", "Kathmandu Gurkhas v Sudurpaschim Royals", "12:30 PM"],
                ["25", "Fri 13 Nov", "Janakpur Bolts v Chitwan Rhinos", "4:30 PM"],
                ["26", "Sat 14 Nov", "Biratnagar Kings v Lumbini Lions", "4:30 PM"],
                ["27", "Sun 15 Nov", "Chitwan Rhinos v Karnali Yaks", "12:30 PM"],
                ["28", "Sun 15 Nov", "Pokhara Avengers v Kathmandu Gurkhas", "4:30 PM"],
                ["–", "Mon 16 Nov", "<em>Rest day</em>", "–"],
                ["Qualifier 1", "Tue 17 Nov", "1st v 2nd (winner to the final)", "4:30 PM"],
                ["Eliminator", "Wed 18 Nov", "3rd v 4th (loser out)", "4:30 PM"],
                ["Qualifier 2", "Thu 19 Nov", "Loser of Qualifier 1 v winner of Eliminator", "4:30 PM"],
                ["–", "Fri 20 Nov", "<em>Rest day</em>", "–"],
                ["<strong>Final</strong>", "<strong>Sat 21 Nov</strong>", "<strong>Winner of Qualifier 1 v winner of Qualifier 2</strong>", "<strong>4:30 PM</strong>"],
              ],
              note: "League fixtures as published by the organisers. Playoff times follow the league's single-match start time; a few listings give 5:00 PM for evening matches, so check the official NPL channels on the day.",
            },
          },
          {
            p: "The matches most worth planning a day around are the last league weekend (Saturday 14 and Sunday 15 November), when places in the top four are decided, and the playoff week from Tuesday 17 November. The final on Saturday 21 November is the one to book first.",
          },
        ],
      },
      {
        h2: "Watching a Match at Kirtipur",
        blocks: [
          {
            p: "The TU International Cricket Ground sits on the campus of Tribhuvan University below the old town of Kirtipur, a Newar hill town on a ridge about six kilometres south-west of central Kathmandu. It is Nepal's main international ground, a grass bowl ringed by stands, with the hills of the valley rim behind it and floodlights for evening play.",
          },
          { h3: "Getting there" },
          {
            ul: [
              "<strong>From Thamel:</strong> a taxi or ride-hailing car takes 30 to 45 minutes, across the Ring Road at Balkhu and up to the university. Traffic builds in the hour before a 4:30 PM start, so leave early.",
              "<strong>From Patan:</strong> about 20 to 30 minutes by road.",
              "<strong>Going back:</strong> an evening match finishes at around 8 PM, and thousands of people leave at once. Agree a pickup with your driver or hotel in advance rather than hoping for a taxi at the gate.",
            ],
          },
          { h3: "Tickets" },
          {
            p: "Kantipur reported on 22 October that league tickets cost <strong>Rs 500 ordinary</strong> and <strong>Rs 1,000 premium</strong>, and that tickets for the eliminator and the final cost double. They are sold online through Nepali digital-wallet apps; in past seasons that was Khalti. A wallet needs a Nepali phone number, so the easiest route for most visitors is a local SIM card, your hotel, or your trekking company. Big matches sell out: every ticket for the opening day of the second season was gone before the first ball. If you are trekking with us and want to see a match, tell us when you book and we will help where we can.",
          },
          { h3: "What to bring" },
          {
            ul: [
              "<strong>A warm layer.</strong> November afternoons in Kathmandu are sunny and around 20 to 23°C, but the temperature drops fast after sunset, at about 5:10 PM, and an evening match finishes in single-figure cold. The down jacket you packed for the trek is ideal.",
              "<strong>Sun protection</strong> for a 12:30 PM match: a hat, sunglasses and sunscreen. Kathmandu is at 1,400 m and the sun is stronger than it feels.",
              "<strong>Cash in small notes</strong> for snacks and water inside the ground, and some patience at the security check at the gate.",
              "<strong>A charged phone</strong> with your digital ticket on it, and the number of your driver.",
            ],
          },
          {
            figure: {
              image: FREE.kirtipurDusk,
              alt: "Dusk over the Kathmandu Valley from Kirtipur, with dark hills silhouetted against an orange sky and the lights of the city coming on below.",
              caption:
                "Dusk from Kirtipur. An evening match starts in daylight and finishes long after the valley lights come on, so bring a warm layer.",
            },
          },
          {
            p: "Come early and see Kirtipur too. The old town above the ground has the Bagh Bhairab temple, the Chilancho stupa and one of the best views across the Kathmandu Valley, and its Newar restaurants are some of the best value in the city. Our [[post:kirtipur-travel-guide|Kirtipur guide]] has the details. The village tours of [[trek:bungmati-khokana-village-tour|Bungamati and Khokana]] and [[trek:pharping-dakshinkali-tour|Pharping and Dakshinkali]] are a short drive south, so a morning there fits neatly before a 4:30 PM match.",
          },
        ],
      },
      {
        h2: "The Eight Teams, and the Treks in Their Home Regions",
        blocks: [
          {
            p: "Every NPL team is named after a city or province, and every one of those places has something worth travelling for. If you pick a team to follow, this is where to go to see its home ground in the wider sense.",
          },
          {
            table: {
              head: ["Team", "Home", "Trek or tour there"],
              rows: [
                ["Biratnagar Kings", "Biratnagar, Koshi Province, in the far east", "[[trek:koshi-tappu-wildlife-reserve-tour|Koshi Tappu Wildlife Reserve]], near Biratnagar; [[trek:makalu-base-camp-trek|Makalu Base Camp]] and [[trek:kanchenjunga-circuit-trek|Kanchenjunga]] in the province's mountains"],
                ["Chitwan Rhinos", "Chitwan, in the inner Terai", "[[trek:chitwan-national-park-tour-3-days|Chitwan National Park tour]], to see the one-horned rhino the team is named after"],
                ["Janakpur Bolts", "Janakpur, Madhesh Province", "The Janaki Mandir and Mithila culture. Chhath, its biggest festival, runs from 13 to 16 November this year"],
                ["Karnali Yaks", "Karnali Province, in the remote north-west", "[[trek:rara-lake-trek|Rara Lake]], Nepal's largest lake, and [[trek:shey-phoksundo-lake-trek|Shey Phoksundo]] in Dolpo, where the yaks really are"],
                ["Kathmandu Gurkhas", "Kathmandu", "The [[trek:kathmandu-valley-tour|Kathmandu Valley tour]] of the old royal cities, and the [[trek:langtang-valley-trek|Langtang Valley trek]], the closest big Himalayan valley to the capital"],
                ["Lumbini Lions", "Lumbini Province", "The [[trek:lumbini-tour|Lumbini tour]] to the birthplace of the Buddha, and [[trek:bardia-national-park-tour-4-days|Bardia National Park]], Nepal's best chance of a wild tiger"],
                ["Pokhara Avengers", "Pokhara, Gandaki Province", "The Annapurna treks that start from Pokhara: [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek|Mardi Himal]] and [[trek:annapurna-base-camp-trek|Annapurna Base Camp]]"],
                ["Sudurpaschim Royals", "Sudurpaschim Province, in the far west", "[[trek:ramaroshan-lakes-trek|Ramaroshan Lakes]] and [[trek:api-himal-base-camp-trek|Api Himal Base Camp]], two of the least-walked routes in the country"],
              ],
              note: "Kanchenjunga, Makalu and the Dolpo routes are long treks for another trip, not something to fit between matches. Kanchenjunga and Upper Dolpo also need restricted-area permits.",
            },
          },
          {
            figure: {
              image: trekImage("rara-lake-trek", "02-lake-rara-from-the-woods"),
              alt: "The blue water of Rara Lake seen through pine trees, with forested hills on the far shore.",
              caption:
                "Rara Lake in Karnali Province, home territory of the Karnali Yaks. Archive photograph.",
            },
          },
          {
            figure: {
              image: FREE.janakiMandirNight,
              alt: "The Janaki Mandir in Janakpur lit up in coloured lights at night, with people gathered in the square in front of it.",
              caption:
                "The Janaki Mandir in Janakpur, home of the Janakpur Bolts, the first NPL champions.",
            },
          },
        ],
      },
      {
        h2: "Fitting a Trek Around the NPL",
        blocks: [
          {
            p: "Our trek packages start with a day in Kathmandu and finish with one, so the time actually away from the city is two days shorter than the package. The table counts those days away, and gives the latest day you could leave Kathmandu and still be back by Friday 20 November, the rest day before the final.",
          },
          {
            table: {
              head: ["Trek", "Days away from Kathmandu", "Highest point", "Leave Kathmandu by"],
              rows: [
                ["[[trek:poonhill-trek|Ghorepani Poon Hill]]", "5", "3,210 m (Poon Hill)", "Mon 16 Nov"],
                ["[[trek:helambu-trek|Helambu]]", "5", "3,650 m", "Mon 16 Nov"],
                ["[[trek:gosaikunda-lake-trek|Gosaikunda Lake]]", "5", "4,380 m", "Mon 16 Nov"],
                ["[[trek:everest-view-trek|Everest View]]", "5", "3,440 m", "Sat 14 Nov, to leave two days for Lukla flights"],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "7", "3,580 m", "Sat 14 Nov"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "7", "4,130 m", "Sat 14 Nov"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "8", "3,800 m", "Fri 13 Nov"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "12", "5,364 m (Base Camp)","Sat 7 Nov, and only with two spare days for flights"],
              ],
              note: "Days away are the package length less the arrival and departure days in Kathmandu. Mountain weather and flights can add a day; the later you leave, the less room there is for one.",
            },
          },
          { h3: "Three ways to combine them" },
          {
            ul: [
              "<strong>Trek first, then the playoffs.</strong> Start a seven-to-eight-day trek between 9 and 13 November, during Tihar, and come back for Qualifier 1 on 17 November or the final on 21 November. Tihar is a lovely time to be in a hill village, and our [[post:trekking-in-nepal-during-tihar|guide to trekking during Tihar]] explains what changes on the trail.",
              "<strong>A league match, then the mountains.</strong> Watch a double-header on 12 or 13 November, then head out on a short trek and finish the season on the trail. Annapurna Base Camp and Langtang are both at their clearest in late November.",
              "<strong>Cricket in the afternoon, sightseeing in the morning.</strong> If you only have a few days, pair a morning at [[trek:chandragiri-cable-car-tour|Chandragiri]], Bungamati or Pharping, all on Kirtipur's side of the valley, with a 4:30 PM match.",
            ],
          },
          {
            p: "Everest Base Camp is the one trek that does not fit easily. It needs twelve days away and two Lukla flights, and those flights stop when visibility is poor. If the Khumbu is your goal, watch the final first and start on Sunday 22 November. Late November is still an excellent time to be there, with cold nights and very clear days. Our [[post:everest-base-camp-trek-in-november|Everest Base Camp in November]] guide covers it.",
          },
        ],
      },
      {
        h2: "November Weather, Tihar and Chhath",
        blocks: [
          {
            p: "November is the most settled month of the year in Nepal. In Kathmandu, expect dry, sunny days of 20 to 23°C and nights down to around 7 to 9°C. In the mountains the skies are at their clearest, and nights above about 3,500 m fall below freezing. Fresh snow from Cyclone Arnab at the end of October has left the high peaks whiter than usual, and our [[post:cyclone-arnab-over-nepal-trekking-open-november-2026|update after the storm]] has the trail conditions.",
          },
          {
            p: "Two festivals fall inside the NPL season, and the league has worked around them:",
          },
          {
            ul: [
              "<strong>Tihar, 7 to 11 November.</strong> The league rests on Sunday 8 November, Laxmi Puja, the night of lights, and on Wednesday 11 November, Bhai Tika. Matches go ahead on the other three days of the festival. Our [[post:tihar-dates-calendar-for-travellers|Tihar calendar]] has each day in turn.",
              "<strong>Chhath, 13 to 16 November.</strong> The main offering to the setting sun is on Sunday 15 November, a public holiday, which is also the last day of the league stage. See our [[post:chhath-festival-nepal-guide|Chhath guide]] if you would like to see it in Kathmandu or Janakpur.",
            ],
          },
          {
            p: "Government offices close for several days around Laxmi Puja and Bhai Tika. If your trek needs a restricted-area permit, apply before 7 November.",
          },
        ],
      },
      {
        h2: "Following the NPL From the Trail",
        blocks: [
          {
            p: "If your trek overlaps a match you care about, you will not be cut off. In Nepal the games are on Himalaya Sports TV, and NetTV streams them online; in India they are on FanCode. Most lodges on the Annapurna, Everest and Langtang routes have Wi-Fi, often for a small charge, and in the bigger villages such as Namche Bazaar, Ghorepani and Chhomrong the mobile data signal is usually good enough to follow a scorecard.",
          },
          {
            p: "The quickest way to get the score is to ask your guide or porter. Cricket is followed closely in Nepal, every province has a team, and there is a good chance the person carrying your bag has an opinion about the Eliminator. It is also one of the easiest ways to start a conversation on the trail.",
          },
        ],
      },
      {
        h2: "Book a Trek Around the Cricket",
        blocks: [
          {
            p: "Tell us which matches you would like to see and how many days you have, and we will suggest a trek that brings you back to Kathmandu in time. Every route mentioned here is on our <a href=\"/treks\">treks page</a> with a full day-by-day itinerary, and you can reach us through the <a href=\"/contact\">contact page</a>. We reply within 24 hours.",
          },
          {
            p: "If you are planning further ahead, our [[post:trekking-in-nepal-in-november|guide to trekking in November]] and [[post:short-treks-near-kathmandu|short treks near Kathmandu]] are good places to start.",
          },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          {
            ul: [
              `The Kathmandu Post, 20 September 2026: ${source("https://kathmandupost.com/cricket/2026/09/20/lumbini-lions-to-face-sudurpaschim-royals-in-npl-opener", "Lumbini Lions to face Sudurpaschim Royals in NPL opener")}`,
              `The Kathmandu Post, 8 August 2026: ${source("https://kathmandupost.com/sports/2026/08/08/npl-season-3-to-begin-on-october-26-final-on-november-21", "NPL season 3 to begin on October 26, final on November 21")}`,
              `Wisden: ${source("https://www.wisden.com/cricket-news/nepal-premier-league-2026-live-streaming-and-tv-channels-where-to-watch-live-and-start-time-for-npl-2026", "Nepal Premier League 2026: live streaming, TV channels and start times")}`,
              `Kantipur, 22 October 2026: ${source("https://ekantipur.com/sports/2026/10/22/en/npl-ticket-prices-fixed-rs-500-for-regular-tickets-rs-1000-for-premium-tickets-14-47.html", "NPL ticket prices set: Rs 500 for general, Rs 1,000 for premium")}`,
              `The Kathmandu Post, 15 November 2025: ${source("https://kathmandupost.com/cricket/2025/11/15/opening-day-tickets-for-2nd-npl-season-sold-out", "Opening day tickets for 2nd NPL season sold out")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "When is the NPL 2026 final?",
        answer:
          "The final of the third Nepal Premier League is on Saturday 21 November 2026 at the TU International Cricket Ground in Kirtipur, Kathmandu, with a 4:30 PM Nepal Time start. Qualifier 1 is on 17 November, the Eliminator on 18 November and Qualifier 2 on 19 November.",
      },
      {
        question: "Where are NPL matches played?",
        answer:
          "Every match of the 2026 season is at the Tribhuvan University International Cricket Ground in Kirtipur, on the south-western edge of Kathmandu. It is about 30 to 45 minutes by taxi from Thamel.",
      },
      {
        question: "What time do NPL matches start?",
        answer:
          "Single-match days start at 4:30 PM Nepal Time. On double-header days the first match starts at 12:30 PM and the second at 4:30 PM. Nepal Time is UTC+5:45.",
      },
      {
        question: "How much do NPL tickets cost?",
        answer:
          "For the 2026 league matches, ordinary tickets cost Rs 500 and premium tickets Rs 1,000, according to Kantipur. Tickets for the Eliminator and the final cost double.",
      },
      {
        question: "Can tourists buy NPL tickets?",
        answer:
          "Yes, anyone can go. Tickets are sold online through Nepali digital-wallet apps, which need a Nepali phone number, so the simplest way is a local SIM card, your hotel or your trekking company. Popular matches sell out, so do not leave it to the day.",
      },
      {
        question: "Which teams play in the Nepal Premier League?",
        answer:
          "Eight teams: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Karnali Yaks, Kathmandu Gurkhas, Lumbini Lions, Pokhara Avengers and Sudurpaschim Royals. Lumbini Lions are the defending champions.",
      },
      {
        question: "Who has won the NPL before?",
        answer:
          "Janakpur Bolts won the first season in 2024 and Lumbini Lions won the second in 2025. Sudurpaschim Royals were the losing finalists both times.",
      },
      {
        question: "Can I watch the NPL and go trekking on the same trip?",
        answer:
          "Yes. The season runs to 21 November, in the best trekking weather of the year. Short treks such as Poon Hill, Mardi Himal, Annapurna Base Camp and Langtang Valley take five to eight days away from Kathmandu, so you can trek between matches or come back for the playoffs and the final.",
      },
      {
        question: "Which treks can I finish in time for the NPL final?",
        answer:
          "To be back in Kathmandu by 20 November, leave by 16 November for Poon Hill, Helambu or Gosaikunda, by 14 November for Mardi Himal, Annapurna Base Camp or the Everest View trek, and by 13 November for the Langtang Valley. Everest Base Camp would have needed to start by 7 November.",
      },
      {
        question: "Are NPL matches played during Tihar?",
        answer:
          "Mostly, yes. Tihar runs from 7 to 11 November 2026. The league rests on 8 November, Laxmi Puja, and on 11 November, Bhai Tika, and plays on the other days of the festival.",
      },
      {
        question: "How can I watch the NPL if I am on a trek or outside Nepal?",
        answer:
          "In Nepal, matches are on Himalaya Sports TV and streamed on NetTV, which also streams worldwide; in India they are on FanCode. Most lodges on the main trekking routes have Wi-Fi, often for a small charge, so you can follow the score from the trail.",
      },
      {
        question: "What should I wear to an evening NPL match in November?",
        answer:
          "Bring a warm layer. Afternoons are sunny and around 20 to 23°C, but the sun sets at about 5:10 PM and the temperature drops quickly, so an evening match ends in real cold. A down jacket from your trekking kit is ideal.",
      },
      {
        question: "Is November a good month to trek in Nepal?",
        answer:
          "It is one of the two best months of the year, with dry trails, settled weather and the clearest mountain views. Nights above about 3,500 m are below freezing, so bring a warm sleeping bag for the higher routes.",
      },
    ],
    relatedTreks: [
      "poonhill-trek",
      "annapurna-base-camp-trek",
      "mardi-himal-trek",
      "langtang-valley-trek",
      "everest-view-trek",
      "helambu-trek",
      "rara-lake-trek",
      "chitwan-national-park-tour-3-days",
    ],
    tripsNote: "Treks and tours that fit between NPL matches, or that take you to a team's home region.",
    relatedPosts: [
      "kirtipur-travel-guide",
      "trekking-in-nepal-in-november",
      "short-treks-near-kathmandu",
      "trekking-in-nepal-during-tihar",
      "tihar-dates-calendar-for-travellers",
      "chhath-festival-nepal-guide",
    ],
    tags: [
      "nepal premier league",
      "npl 2026",
      "cricket in nepal",
      "kirtipur",
      "november 2026",
      "short treks",
    ],
    meta: {
      title: "NPL 2026 Schedule and Trekking in Nepal: Matches, Tickets, Treks",
      description:
        "Full Nepal Premier League 2026 schedule to the 21 November final in Kirtipur, ticket prices, getting to the ground, and the treks that fit between NPL matches.",
      keywords:
        "Nepal Premier League 2026, NPL 2026 schedule, NPL season 3 fixtures, NPL final 2026, NPL tickets, TU cricket ground Kirtipur, cricket in Nepal, trekking in Nepal November, short treks from Kathmandu, Poon Hill trek, Annapurna Base Camp trek",
    },
  },
];
