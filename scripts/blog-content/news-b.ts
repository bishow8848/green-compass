import type { BlogContent } from "./build";
import { trekImage } from "./images";
import { source } from "./news-a";

/**
 * Trail news, part 2: the Kathmandu–Pokhara road in the days around the
 * Budhi Gandaki flood of 11 October 2026.
 */
export const newsB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kathmandu-to-pokhara-road-status-october-2026",
    title: "Kathmandu to Pokhara by Road After the Floods: Prithvi Highway Status, 11 October 2026",
    cluster: "news",
    date: "2026-10-11",
    hero: {
      image: trekImage("tilicho-lake-trek", "04-somewhere-between-kathmandu-and-besisahar-nepal-panoramio"),
      alt: "A wide brown river winding between gravel bars and terraced hills, seen from the road between Kathmandu and Besisahar.",
    },
    excerpt:
      "The Kathmandu–Pokhara road reopened on a temporary track at Galaudi on Saturday night, a day after a section subsided, and on Sunday a flood alert was issued for the riverbank it follows. This is the Prithvi Highway section by section, the alternatives, and when to fly instead.",
    intro: [
      { p: "The Prithvi Highway, the road between Kathmandu and Pokhara, has been cut and reopened several times since the end of August. This weekend it happened twice over. A section subsided at Galaudi in Dhading on Friday evening and was reopened on a track cut into the hillside on Saturday night. Then on Sunday morning a flash flood on the Budhi Gandaki, which joins the Trishuli beside the highway at Benighat, put the riverbank below under alert." },
      { p: "<strong>We are writing at about midday Nepal Time on Sunday 11 October 2026.</strong> The state of this road has been changing by the hour, so take what follows as the position at that time, with the source of each statement given, and ring the traffic police on <strong>103</strong> before you set out." },
    ],
    sections: [
      {
        h2: "The Short Answer",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Is the road open?</strong>", "Reported open at Galaudi since Saturday night, on a temporary track. The Department of Roads planned one-way working from 21:00 on Saturday and two-way traffic by 18:00 on Sunday if the weather held"],
                ["<strong>Has Sunday's flood closed it?</strong>", "We have found no report of that as of midday. The riverbank is under alert: very high risk down to Benighat and high at Mugling, according to the Flood Forecasting Division's 09:25 message"],
                ["<strong>Should I travel today?</strong>", "If you can fly, fly. If you must go by road, go in daylight, expect queues at Galaudi, and keep away from the river"],
                ["<strong>Who to ask</strong>", "Traffic police <strong>103</strong>. Flood information <strong>1155</strong>"],
              ],
              note: "As reported by about 12:00 Nepal Time on 11 October 2026.",
            },
          },
          {
            figure: {
              image: trekImage("ganesh-himal-trek", "01-river-trishuli-panoramio"),
              alt: "The Trishuli river running grey-green beside the edge of a road, with stone blocks along the verge and an eroded slope on the far bank.",
              caption: "The Trishuli from the roadside, in an archive photograph. For most of the way between Galchhi and Mugling the highway runs this close to the water, which is why a river in flood and a road in trouble tend to be the same story.",
            },
          },
        ],
      },
      {
        h2: "The Road, Section by Section",
        blocks: [
          { p: "The drive is about 200 kilometres. It climbs out of the Kathmandu valley, drops to the Trishuli, follows that river west for some 60 kilometres, and leaves it at Mugling for the hills that lead to Pokhara. Almost every closure this year has been on the river section." },
          {
            table: {
              head: ["Section", "What it follows", "This weekend"],
              rows: [
                ["Kathmandu – Naubise – Galchhi", "Over the valley rim at Nagdhunga and down to the Trishuli", "A gas tanker overturned and leaked at Machhedi, near Galchhi, on Friday, which held up the repair crews"],
                ["Galchhi – Gajuri – Malekhu", "The Trishuli", "Galaudi, near Gajuri: the road cracked and sank on Friday evening. Reopened on a new track on Saturday night and still described as risky"],
                ["Malekhu – Benighat", "The Trishuli, to the point where the Budhi Gandaki joins it", "Riverbank under a very high flood alert on Sunday"],
                ["Benighat – Mugling", "The Trishuli below the confluence", "High alert at Mugling. No major effect seen downstream of Arughat as of Sunday morning, according to the Flood Forecasting Division"],
                ["Mugling – Dumre – Pokhara", "Away from the Trishuli, through the hills of Tanahun", "No disruption reported this weekend that we have seen"],
                ["Mugling – Narayangadh, for Chitwan", "The Trishuli, south through its gorge", "Medium alert for riverside areas of Chitwan and Nawalparasi"],
              ],
            },
          },
        ],
      },
      {
        h2: "What Happened at Galaudi",
        blocks: [
          { p: "On Friday evening, 9 October, the highway gave way at Galaudi in Gajuri Rural Municipality, Ward 5. The chief of the district traffic police, Shishir Thapa, told the Kathmandu Post that about 100 metres of road had cracked and a 20-metre section had sunk, with the cracks reaching the edge of the carriageway; a later report in Nagarik put the damaged length at about 160 metres. The cause given by the police and the Department of Roads is the Trishuli cutting away the ground beneath the road. All traffic was stopped, and the District Administration Office in Dhading suspended movement on the section until further notice." },
          { p: "The same evening a gas tanker overturned and leaked at Machhedi, near Galchhi, on the Kathmandu side. The Department of Roads said the leak made it hard for its teams to reach the damage." },
          { p: "The repair was to cut into the hillside and build a new track on the inner side of the road, a method the engineers call back-cutting. Guru Prasad Adhikari, who heads the eastern section of the Nagdhunga–Naubise–Mugling road project, said on Saturday that it was expected to open by evening. The department's plan was one-way traffic from 21:00 on Saturday, widening work from 07:00 on Sunday, and two-way traffic by 18:00 on Sunday if the weather and other conditions stayed normal. Late on Saturday night Nagarik reported that vehicles which had been stranded were moving again." },
          { p: "Two cautions came with the reopening. The repaired stretch is still considered at risk, and the traffic police and the department asked for extra care on it, <strong>especially at night</strong>." },
        ],
      },
      {
        h2: "What the Budhi Gandaki Flood Changes",
        blocks: [
          { p: "Before dawn on Sunday a flash flood came down the Budhi Gandaki from northern Gorkha. That river meets the Trishuli at Benighat, beside the highway, so everything it carried is now passing along the road's river section. The details of the flood itself are in our [[post:budhi-gandaki-flood-october-2026-manaslu-trek-update|report on the Budhi Gandaki flood]]." },
          {
            ul: [
              "<strong>The alert.</strong> At 09:25 the Flood Forecasting Division sent a message rating the risk as very high down to Benighat, high at Mugling, and medium for the riverside areas of Chitwan and Nawalparasi. People have been told to stay off the banks, not to go down to watch or film, and not to collect driftwood.",
              "<strong>The reassurance.</strong> The head of the division, Binod Parajuli, said on Sunday morning that no major effect had so far been seen downstream of Arughat. Arughat is well above Benighat.",
              "<strong>The road itself.</strong> As of midday we had found no report that the flood had closed or damaged the highway.",
            ],
          },
          { p: "The reason to stay cautious for several days, not just today, is the pattern of this season. At Krishnabhir in August and at Galaudi on Friday, the road did not go under water. It collapsed because the river had eaten away the ground it stands on, and in both cases that showed itself after the high water, not during it. A river carrying a flood's load of mud and boulders past the same banks is a reason to keep checking." },
        ],
      },
      {
        h2: "A Season of Closures",
        blocks: [
          {
            table: {
              head: ["Date", "What happened"],
              rows: [
                ["26 August", "Flash flood on the Bhote Koshi and Trishuli, the disaster that began this season's troubles"],
                ["30 August", "The road collapses at Krishnabhir, in Benighat Rorang, after the Trishuli erodes its base. The Mugling–Kathmandu section is blocked"],
                ["5 September", "A 12-hour closure for repairs"],
                ["13 September", "One-way traffic on trial at Krishnabhir"],
                ["17 September", "Two-way traffic resumes after an 18-day closure"],
                ["Late September", "Heavy rain brings landslides at Krishnabhir and Jyamire and cuts the road to one lane; the Narayangadh–Mugling road is closed overnight on the 24th for landslide risk. The highways into Kathmandu are reported open again on the 29th"],
                ["9 October", "Subsidence at Galaudi and the tanker accident at Machhedi. Highway closed"],
                ["10 October", "New track opened at Galaudi at night"],
                ["11 October", "Budhi Gandaki flood. Riverbank alert from Benighat to Mugling and beyond"],
              ],
            },
          },
          { p: "The point of the list is not that the road is unusable. It has been open far more days than it has been shut. The point is that this autumn it cannot be treated as a fixed quantity, and a plan that depends on it needs slack." },
        ],
      },
      {
        h2: "Flying Instead",
        blocks: [
          { p: "The flight from Kathmandu to Pokhara takes about 25 minutes and has not been affected by any of this. It is one of the most frequent domestic routes in the country; Buddha Air alone lists more than sixteen flights a day. In peak season, and in a week when the road is in the news, seats go quickly, so book as soon as you know your dates." },
          {
            ul: [
              "<strong>To Pokhara</strong> for Annapurna Base Camp, Mardi Himal, Poon Hill and Mustang: fly, and the road problem disappears.",
              "<strong>To Besisahar</strong> for the Annapurna Circuit: fly to Pokhara and drive east to Dumre and up to Besisahar. That approach does not use the Trishuli section at all.",
              "<strong>To Chitwan:</strong> fly to Bharatpur.",
              "<strong>To Lumbini:</strong> fly to Bhairahawa.",
            ],
          },
          {
            figure: {
              image: trekImage("annapurna-photography-tour", "05-annapurna-range-and-the-phewa-lake"),
              alt: "Phewa Lake at Pokhara with the Annapurna range and the pointed summit of Machhapuchhre behind it.",
              caption: "Phewa Lake and the Annapurna range from above Pokhara. The city, its lake and the treks that start from it are untouched by the floods; the question this autumn is only how you get there.",
            },
          },
          { p: "Baggage allowances, delays and how domestic flights fit into a trek are covered in our [[post:domestic-flights-in-nepal-for-trekkers|guide to domestic flights]]." },
        ],
      },
      {
        h2: "Other Roads, and Why Not Today",
        blocks: [
          { p: "When Krishnabhir was closed in September, the Trekking Agencies' Association of Nepal (TAAN) listed these ways of reaching Pokhara by road:" },
          {
            ol: [
              "Benighat – Fujel – Laxmibazaar – Anbu Khaireni",
              "Galchhi – Sunaulabazaar – Dhadingbesi – Ghyampesal – Gorkha Bazaar – Anbu Khaireni",
              "South through Hetauda and Chitwan, then up to Mugling",
            ],
          },
          { p: "On Sunday none of them is a clean alternative. The first two run from Dhading into Gorkha, which means crossing the Budhi Gandaki or the river just below its mouth, inside the stretch rated very high risk. The third comes back to the Trishuli between Narayangadh and Mugling, which is under alert as well. These are also narrow hill roads that add hours in the best conditions. Until the alert is lifted, the alternative to the highway is the aeroplane." },
        ],
      },
      {
        h2: "If You Go by Road",
        blocks: [
          {
            ul: [
              "<strong>Check on the morning.</strong> Ring 103, and ask your hotel or bus company what came through from the other direction overnight.",
              "<strong>Travel in daylight.</strong> The authorities have asked for particular care at night on the repaired section, and a queue is easier to sit out before dark.",
              "<strong>Leave early and expect one-way working.</strong> A single lane at Galaudi means convoys and waiting.",
              "<strong>Carry water and food</strong> for a day that may be several hours longer than the usual six to eight.",
              "<strong>Stay out of the riverbed at stops.</strong> Do not walk down to the water to look.",
              "<strong>Keep a spare day</strong> between the road journey and an international flight or a fixed trek start.",
            ],
          },
        ],
      },
      {
        h2: "Sources",
        blocks: [
          { p: "Written from reports published between 9 and 11 October 2026. We have not driven the road this weekend." },
          {
            ul: [
              `The Kathmandu Post — ${source("https://kathmandupost.com/province-no-3/2026/10/09/road-subsidence-halts-traffic-on-prithvi-highway-near-gajuri", "Road subsidence halts traffic on Prithvi Highway near Gajuri")}, and ${source("https://kathmandupost.com/national/2026/09/17/krishnabhir-road-reopens-on-thursday", "Krishnabhir road reopens")}`,
              `OnlineKhabar English — ${source("https://english.onlinekhabar.com/prithvi-highway-closed.html", "Prithvi Highway closed after gas tanker leak and subsidence")}`,
              `Nagarik News (Nepali) — ${source("https://nagariknews.nagariknetwork.com/social-affairs/prithvi-highway-reopens-traffic-resumes-after-wall-is-cut-in-galaudi-44-27.html", "highway reopens at Galaudi")} and ${source("https://nagariknews.nagariknetwork.com/social-affairs/flood-risk-remains-high-in-budhigandaki-very-high-risk-up-to-benighat-15-96.html", "flood risk very high as far as Benighat")}`,
              `Karobar Daily (Nepali) — ${source("https://www.karobardaily.com/news/426281", "the Department of Roads' plan for one-way and two-way traffic")}`,
              `The Tourism Times — ${source("https://thetourismtimes.com/news/travel-leisure/most-trekking-destinations-safe-but-access-routes-still-disrupted-taan", "TAAN's list of alternative roads to Pokhara")}`,
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Is the Kathmandu to Pokhara road open today?", answer: "As of midday on 11 October 2026 it was reported open. The section that subsided at Galaudi on Friday was reopened on a temporary track on Saturday night, with one-way working first and two-way traffic planned for Sunday evening. Ring the traffic police on 103 before you leave, because this has been changing by the hour." },
      { question: "Did the Budhi Gandaki flood close the Prithvi Highway?", answer: "We have found no report that it did as of midday on 11 October. The Budhi Gandaki joins the Trishuli beside the highway at Benighat, and the riverbank from there to Mugling is under a flood alert, but the Flood Forecasting Division said on Sunday morning that no major effect had been seen downstream of Arughat." },
      { question: "What happened at Galaudi?", answer: "On the evening of 9 October the highway cracked and sank at Galaudi, near Gajuri in Dhading, after the Trishuli eroded the ground under it. Police reported about 100 metres cracked and 20 metres sunk. Engineers cut a new track into the hillside, and traffic resumed on Saturday night." },
      { question: "How long does the drive from Kathmandu to Pokhara take now?", answer: "In normal conditions six to eight hours by tourist bus. With one-way working at Galaudi and the chance of further stops, allow several hours more and do not plan anything fixed for the same evening." },
      { question: "Is it safe to take the bus from Kathmandu to Pokhara?", answer: "The authorities have reopened the road and asked for extra care on the repaired section, particularly at night. Travelling in daylight with a reputable company is a reasonable choice once you have checked the road is open that morning. If the flood alert along the Trishuli is still in force and you have the option, flying is the safer decision." },
      { question: "How long is the flight from Kathmandu to Pokhara?", answer: "About 25 minutes. It is one of the most frequent domestic routes in Nepal and has not been affected by the floods. Seats sell quickly in October and November, more so when the road is disrupted." },
      { question: "Is there another road to Pokhara that avoids the Trishuli?", answer: "Not a practical one this weekend. The alternatives used in September run through Dhading and Gorkha and cross the Budhi Gandaki, which is the river in flood, or come back to the Trishuli between Narayangadh and Mugling. They are also slow hill roads." },
      { question: "Can I still get to Chitwan from Kathmandu?", answer: "The usual road turns south at Mugling and follows the Trishuli to Narayangadh. Riverside areas of Chitwan are under a medium flood alert. You can avoid the road by flying from Kathmandu to Bharatpur." },
      { question: "How do I reach Besisahar for the Annapurna Circuit?", answer: "The usual way is the Prithvi Highway to Dumre and then north. To avoid the Trishuli section, fly to Pokhara and drive east to Dumre and up to Besisahar." },
      { question: "Who do I call for road and flood information in Nepal?", answer: "Traffic police are on 103 and Nepal Police on 100. The Flood Forecasting Division gives flood information on 1155." },
      { question: "Why does the Prithvi Highway keep closing this year?", answer: "Most of this year's closures have been on the stretch that follows the Trishuli. At Krishnabhir in August and Galaudi in October the road collapsed because the river had eroded the ground beneath it, and heavy rain in late September added landslides." },
    ],
    relatedTreks: ["kathmandu-pokhara-tour", "pokhara-day-tour", "annapurna-base-camp-trek", "mardi-himal-trek", "poonhill-trek", "annapurna-circuit-trek", "chitwan-national-park-tour-3-days"],
    tripsNote: "Trips that begin with the journey from Kathmandu to Pokhara or Chitwan. All of them can start with a flight.",
    relatedPosts: [
      "budhi-gandaki-flood-october-2026-manaslu-trek-update",
      "nepal-trekking-routes-status-october-2026",
      "domestic-flights-in-nepal-for-trekkers",
      "pokhara-travel-guide",
      "annapurna-circuit-trek-complete-guide",
      "arriving-in-kathmandu-first-48-hours",
    ],
    tags: ["trail news", "prithvi highway", "kathmandu to pokhara", "road status", "getting around nepal"],
    meta: {
      title: "Kathmandu to Pokhara Road Status, 11 Oct 2026: Prithvi Highway",
      description: "Is the Kathmandu–Pokhara road open? Prithvi Highway status after the Galaudi subsidence and the Budhi Gandaki flood, section by section, with alternatives.",
      keywords: "Kathmandu to Pokhara road status, Prithvi Highway open, Prithvi Highway closed, Galaudi road, Krishnabhir, Kathmandu Pokhara bus, Kathmandu Pokhara flight, Mugling road, Trishuli flood",
    },
  },
];
