import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 4: the planning problems that are specific to trekkers
 * — permits while the offices are shut, which short treks suit the holiday
 * week, and the people who work through it.
 */
export const dashainD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-permits-during-dashain",
    title: "Trekking Permits During Dashain: Office Closures and How to Plan",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/manaslu-circuit-trek/manaslu-circuit-trek-00-samagaun-village-manaslu-circuit-03",
      alt: "Samagaun village beneath Manaslu on the Manaslu Circuit, a trek that needs a restricted-area permit.",
    },
    excerpt:
      "Government offices in Nepal close for a week or more at Dashain, and some trekking permits can only be issued by one of them, in person, on a working day. Which permits are affected, which are not, the 2026 timetable, and what to do if you arrive after the doors have shut.",
    intro: [
      { p: "Of everything Dashain disrupts, permits cause the most real trouble, because they are the one thing that cannot be improvised. A lodge can find you a mattress and a jeep can be paid to drive. A restricted-area permit exists only when an official at the Department of Immigration in Kathmandu stamps it, and for a week in October that official is at home receiving tika." },
      { p: "Not every permit is affected. This guide separates the ones that are from the ones that are not, and gives the dates. For what each permit is and costs, see [[post:nepal-trekking-permits-explained|Nepal trekking permits explained]]." },
    ],
    sections: [
      {
        h2: "Which Permits Are Affected",
        blocks: [
          {
            table: {
              head: ["Permit", "Issued by", "During the Dashain holiday"],
              rows: [
                ["Restricted Area Permit — Manaslu, Tsum, Upper Mustang, Nar Phu, Upper Dolpo, Kanchenjunga, Humla", "Department of Immigration, Kathmandu, through a registered agency", "<strong>Not available.</strong> The office is closed"],
                ["Annapurna and Manaslu conservation-area permits", "The conservation trust's counters in Kathmandu and Pokhara; also sold online", "Counters closed or on short hours for the main days; buy beforehand"],
                ["National park entry — Sagarmatha, Langtang, Makalu Barun, Rara, Shey Phoksundo", "At the park gate or checkpost on the trail", "Available as usual"],
                ["Khumbu municipality fee for the Everest region", "Paid on arrival in Lukla", "Available as usual"],
                ["Trekkers' registration card", "Through a registered agency", "Arrange before the holiday"],
                ["Peak climbing permits", "Nepal Mountaineering Association, Kathmandu", "Not available; office closed — see [[post:nma-peak-permits-and-fees|peak permits and fees]]"],
                ["Expedition permits", "Department of Tourism, Kathmandu", "Not available; office closed"],
                ["Tourist visa extension", "Department of Immigration", "Not available; office closed"],
              ],
            },
          },
          { p: "The rule that falls out of the table: if the permit is handed over on the trail, Dashain does not matter. If it is handed over in Kathmandu, it does." },
        ],
      },
      {
        h2: "The Restricted-Area Problem",
        blocks: [
          { p: "Restricted-area permits are the hard case, for three reasons that compound." },
          {
            ol: [
              "<strong>Only one office issues them</strong>, and it keeps government hours. It is closed on Saturdays all year and for the whole Dashain holiday block.",
              "<strong>It needs your original passport</strong> with the Nepal visa already in it. The application cannot be completed before you land.",
              "<strong>Only a registered agency can apply</strong>, for travellers accompanied by a licensed guide. You cannot walk in and do it yourself.",
            ],
          },
          { p: "So the sequence is fixed: you arrive, your passport goes to the office on the next working day, and the permit comes back that afternoon or the following day. If the next working day is nine days away, so is your trek. The full rules, fees and party-size requirements are in [[post:restricted-area-trekking-permits-in-nepal|restricted-area trekking permits in Nepal]]." },
          {
            figure: {
              image: "mardi-treks/upper-mustang-trek/upper-mustang-trek-05-lomanthang-1",
              alt: "The walled town of Lo Manthang in Upper Mustang, a restricted area north of the Himalaya.",
              caption: "Lo Manthang in Upper Mustang. The restricted-area permit for it is issued only in Kathmandu, on a working day.",
            },
          },
        ],
      },
      {
        h2: "The 2026 Timetable",
        blocks: [
          { p: "In 2026 the calendar is unkind. Phulpati is a Saturday, the holiday block runs through the following week, and it is followed by another Saturday and then the full-moon holiday on Sunday 25 October. Government offices are likely to be shut, or on skeleton hours, from 17 to 25 October inclusive." },
          {
            table: {
              head: ["Date (2026)", "Status", "What it means"],
              rows: [
                ["Up to Thu 15 Oct", "Working days", "Normal processing"],
                ["Fri 16 Oct", "Last working day", "Passport must be at the office this morning at the latest — which means landing by Thursday 15th"],
                ["Sat 17 – Sun 25 Oct", "Closed", "No restricted-area permits, no visa extensions"],
                ["Mon 26 Oct", "Offices reopen", "Expect a queue; allow an extra day"],
                ["Tue 27 Oct", "Earliest realistic start", "For a trek whose permit was applied for on the 26th"],
              ],
              note: "Public holidays are gazetted by the government and can change by a day. In some years the immigration office has opened a short daily window for tourist services during Dashain; it is announced late and cannot be planned around.",
            },
          },
          { p: "The dates for other years are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]. The pattern is the same every year: count back from Phulpati to the last working day, and be in Kathmandu the day before it." },
        ],
      },
      {
        h2: "Three Ways to Handle It",
        blocks: [
          { h3: "1. Arrive early enough" },
          { p: "Land at least two working days before Phulpati. The permit is done on the last working days, and the festival's public days can be spent in the valley before you drive to the trailhead. This is how most of our Dashain departures for [[trek:manaslu-circuit-trek|Manaslu]] and [[trek:upper-mustang-trek|Upper Mustang]] run. Remember that the drive to the trailhead then falls inside the holiday — book the jeep with the trek." },
          { h3: "2. Start after the holiday" },
          { p: "Arrive during the festival, enjoy it, and begin the trek once offices reopen. In 2026 that means walking from about 27 or 28 October, which is still well inside the season: the Larkya La and the passes of Mustang are normally open through November." },
          { h3: "3. Choose a trek that does not need the office" },
          { p: "If your dates are fixed inside the holiday block, pick a route whose permits are all issued on the trail." },
        ],
      },
      {
        h2: "Treks That Need No Kathmandu Office",
        blocks: [
          {
            table: {
              head: ["Trek", "Permits", "Where they are issued"],
              rows: [
                ["[[trek:everest-base-camp-trek|Everest Base Camp]], [[trek:gokyo-lake-trek|Gokyo]], [[trek:everest-view-trek|Everest View]]", "Municipality fee; national park entry", "Lukla and Monjo"],
                ["[[trek:langtang-valley-trek|Langtang Valley]], [[trek:gosaikunda-lake-trek|Gosaikunda]]", "National park entry", "The checkpost at Dhunche"],
                ["[[trek:pikey-peak-trek|Pikey Peak]]", "Local area entry", "On the route"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]], [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek|Mardi Himal]]", "Conservation-area permit", "Online, or at the counter before the holiday — see our [[post:annapurna-region-permits-acap-guide|Annapurna permits guide]]"],
              ],
              note: "Where a registration card is also required, your agency arranges it with the booking; have it done before Phulpati.",
            },
          },
          { p: "The Everest region is the most robust choice: nothing about its paperwork depends on a weekday. See [[post:everest-base-camp-trek-during-dashain|Everest Base Camp during Dashain]]." },
        ],
      },
      {
        h2: "Conservation-Area Permits: Buy Them First",
        blocks: [
          { p: "The Annapurna and Manaslu conservation-area permits are easier than restricted-area permits — no passport is surrendered and no working day is needed if you buy online — but they still catch people. The permit counters in Kathmandu and Pokhara do not keep normal hours on the main festival days, and inside the Annapurna area a trekker found without a permit pays double at the checkpost." },
          { p: "If you are booking with an agency, send your passport details and a photograph in advance and the permit will be waiting. If you are buying it yourself, do it online before you travel or at the counter before Phulpati, and check the portal is working before you rely on it." },
        ],
      },
      {
        h2: "Peaks and Expeditions",
        blocks: [
          { p: "Climbing permits for trekking peaks such as [[trek:island-peak-climbing|Island Peak]] and [[trek:mera-peak-climbing|Mera Peak]] are issued by the Nepal Mountaineering Association in Kathmandu, and those for the higher expedition peaks by the Department of Tourism. Both close for Dashain. Autumn climbs are normally permitted well before the festival, because the application goes in with the booking; the risk is a late addition — a second peak, a changed route — that needs a new permit in the holiday week. Settle the objective before you fly. Our [[post:peak-climbing-in-nepal-beginners-guide|beginner's guide to peak climbing]] covers the rest." },
        ],
      },
      {
        h2: "If You Are Caught Out",
        blocks: [
          {
            ul: [
              "<strong>Ask about the special window.</strong> In some years a tourist-services desk opens for an hour or two a day. Your agency will know by the first morning of the holiday.",
              "<strong>Switch region.</strong> A Manaslu booking can become Everest Base Camp or the [[trek:annapurna-circuit-trek|Annapurna Circuit]] with a day's notice. Similar length, similar difficulty, no office required.",
              "<strong>Reverse the trip.</strong> Do the sightseeing, Pokhara or Chitwan first — [[trek:kathmandu-pokhara-tour|Kathmandu and Pokhara]], a [[trek:chitwan-national-park-tour-3-days|Chitwan safari]] — and trek when the office reopens.",
              "<strong>Do not start without the permit.</strong> Checkposts on restricted routes turn people back, and the fine for a guide who takes a client through without one ends careers.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Is the trekking permit office open during Dashain?", answer: "The Department of Immigration, which issues restricted-area permits, closes for the Dashain holiday block of about a week, extended by weekends. National park entry tickets sold at park gates remain available throughout." },
      { question: "Can I get a Manaslu permit during Dashain?", answer: "Not while the immigration office is closed. The Manaslu restricted-area permit needs your original passport at the office on a working day. Arrive at least two working days before Phulpati, or start the trek after the holiday." },
      { question: "Can I apply for a restricted-area permit before I arrive in Nepal?", answer: "Your agency can prepare the paperwork, but the permit cannot be issued until your passport, with the Nepal visa in it, is physically presented at the office. That is why the arrival date matters." },
      { question: "Which treks do not need a permit from Kathmandu?", answer: "Everest Base Camp, Gokyo and the Everest View trek use fees paid at Lukla and Monjo. Langtang and Gosaikunda use a national park ticket bought at Dhunche. These are the safest choices for a trek that starts inside the holiday." },
      { question: "Can I buy the Annapurna permit online?", answer: "Yes, the conservation-area permit can be bought online, which avoids the counter's holiday hours. Check that the portal is working before relying on it, or have a registered agency arrange the permit with your booking." },
      { question: "When do offices reopen after Dashain 2026?", answer: "Expect normal service from Monday 26 October 2026. The holiday block begins on Saturday 17 October, and a weekend and the full-moon holiday on Sunday 25th follow it." },
      { question: "What happens if my visa expires during Dashain?", answer: "You pay an overstay fine for each day when you extend or depart, regardless of the office being closed. Extend before the holiday if the expiry date falls inside it." },
      { question: "Can a trekking agency get permits faster during Dashain?", answer: "No agency can issue a permit the office has not stamped. What an agency can do is have everything prepared so that the application goes in on the first hour of the last working day, and tell you promptly if a special window is opened." },
    ],
    relatedTreks: [
      "manaslu-circuit-trek",
      "upper-mustang-trek",
      "tsum-valley-trek",
      "nar-phu-valley-trek",
      "everest-base-camp-trek",
      "langtang-valley-trek",
    ],
    tripsNote: "Restricted-area treks to permit before the holiday, and two that need no Kathmandu office at all.",
    relatedPosts: [
      "restricted-area-trekking-permits-in-nepal",
      "nepal-trekking-permits-explained",
      "annapurna-region-permits-acap-guide",
      "dashain-dates-calendar-for-travellers",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "trekking-in-nepal-during-dashain",
    ],
    tags: ["Dashain", "Trekking Permits", "Trip Planning", "Restricted Areas"],
    meta: {
      title: "Trekking Permits During Dashain: Closures and Planning",
      description: "Which Nepal trekking permits you cannot get during Dashain, which you can, the 2026 office timetable, and what to do if you arrive in the holiday.",
      keywords: "trekking permit Dashain, restricted area permit Dashain, Manaslu permit Dashain, Nepal immigration office closed, Upper Mustang permit October, ACAP permit Dashain",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "short-treks-for-the-dashain-holiday",
    title: "Best Short Treks for the Dashain Holiday (3 to 7 Days)",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-01-golden-hour-view-from-badal-dada-in-mardi-himal-trek",
      alt: "Golden evening light on the ridge at Badal Danda on the Mardi Himal trek.",
    },
    excerpt:
      "The Dashain holiday gives most people in Nepal about a week, and October gives the weather for it. Eleven short treks from Pokhara and Kathmandu, compared by days, altitude and how crowded they get after the tika — with the altitude mistake that catches holiday trekkers every year.",
    intro: [
      { p: "Dashain is the one time of year when almost everyone in Nepal has a week free at once, and it falls in the month with the clearest skies. It is no surprise that the days after the tika have become the country's own trekking season. If you live here, or are visiting for the festival and have a few days once it is over, this is the list." },
      { p: "We have ranked for the holiday specifically: how well each route copes with the rush, how easy it is to reach when transport is thin, and whether it needs a permit from an office that is closed. For the festival's effect on trekking in general, see [[post:trekking-in-nepal-during-dashain|trekking in Nepal during Dashain]]." },
    ],
    sections: [
      {
        h2: "The Shortlist",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "Highest point", "From", "Crowds after the tika"],
              rows: [
                ["[[trek:poonhill-trek-from-pokhara|Poon Hill]]", "3 – 4", "3,210 m", "Pokhara", "Very high"],
                ["[[trek:mardi-himal-trek-from-pokhara|Mardi Himal]]", "4 – 5", "4,200 m viewpoint", "Pokhara", "Very high"],
                ["[[trek:mohare-danda-trek-from-pokhara|Mohare Danda]]", "4 – 5", "3,300 m", "Pokhara", "Low"],
                ["[[trek:khopra-danda-trek-from-pokhara|Khopra Danda]]", "5 – 7", "3,660 m", "Pokhara", "Low"],
                ["[[trek:ama-yangri-trek|Ama Yangri]]", "3 – 4", "3,771 m", "Kathmandu", "Moderate"],
                ["[[trek:helambu-trek|Helambu]]", "5 – 7", "About 3,650 m", "Kathmandu", "Low"],
                ["[[trek:gosaikunda-lake-trek|Gosaikunda]]", "5 – 6", "4,380 m", "Kathmandu", "High"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "7 – 8", "3,870 m; 4,773 m at Kyanjin Ri", "Kathmandu", "High"],
                ["[[trek:tamang-heritage-trek|Tamang Heritage Trail]]", "6 – 7", "3,165 m", "Kathmandu", "Low"],
                ["[[trek:pikey-peak-trek|Pikey Peak]]", "5 – 7", "4,065 m", "Kathmandu", "Low"],
                ["[[trek:everest-view-trek|Everest View]]", "7", "3,880 m", "Kathmandu, by air", "Moderate"],
              ],
            },
          },
        ],
      },
      {
        h2: "From Pokhara",
        blocks: [
          { h3: "Poon Hill" },
          { p: "The classic: stone staircases through Magar villages, a night at Ghorepani and a dawn climb to a viewpoint with Dhaulagiri and the Annapurnas in a single sweep. It is the most accessible mountain view in Nepal and, after the tika, the busiest. Go in the days from Phulpati to the tika if you can. Details in our [[post:poon-hill-trek-guide|Poon Hill guide]]." },
          { h3: "Mardi Himal" },
          { p: "A ridge that climbs straight toward Machhapuchhre, reaching the high viewpoint on the third day. It has become the favourite holiday trek for young Nepalis, and the lodges at High Camp are few. Reserve them, or walk it before the rush. See the [[post:mardi-himal-trek-complete-guide|Mardi Himal guide]]." },
          { h3: "Mohare Danda and Khopra Danda" },
          { p: "Two community-run ridge routes west of Poon Hill. Both give the same great wall of peaks, both have lodges whose income goes to village schools and health posts, and both stay quiet when Ghorepani is heaving. Mohare passes through villages that celebrate Dashain in full; it is our first recommendation for the holiday week. Guides: [[post:mohare-danda-community-trek-guide|Mohare Danda]] and [[post:khopra-danda-trek-guide|Khopra Danda]]." },
          {
            figure: {
              image: "mardi-treks/poonhill-trek/poonhill-trek-03-160315-019-view-from-poon-hill",
              alt: "Sunrise over the Annapurna range seen from Poon Hill.",
              caption: "Sunrise from Poon Hill — shared, in the week after the tika, with several hundred other people. The neighbouring ridges have the same view to themselves.",
            },
          },
        ],
      },
      {
        h2: "From Kathmandu",
        blocks: [
          { h3: "Ama Yangri and Helambu" },
          { p: "The closest real trekking to the capital. Ama Yangri is a three-day climb to a 3,771 m summit with a panorama from Langtang to the Everest group; Helambu is a gentler week through Hyolmo villages and monasteries. Both start within a few hours' drive, which matters when buses are scarce. See [[post:ama-yangri-trek-guide|Ama Yangri]] and [[post:helambu-trek-guide|Helambu]]." },
          { h3: "Langtang Valley" },
          { p: "A week to Kyanjin Gompa beneath Langtang Lirung, with a glacier valley, yak pastures and Tamang villages. It is the most complete short trek near Kathmandu and correspondingly popular. The drive to Syabrubesi is the awkward part during the festival. See the [[post:langtang-valley-trek-complete-guide|Langtang guide]]." },
          { h3: "Gosaikunda" },
          { p: "Sacred lakes at 4,380 m, reached in two or three days from Dhunche. Dramatic, holy and the route on this list where most goes wrong — see the altitude section below, and our [[post:gosaikunda-lake-trek-guide|Gosaikunda guide]]." },
          { h3: "Tamang Heritage Trail and Pikey Peak" },
          { p: "Two for people who want villages and views without company. The Tamang Heritage Trail loops through traditional settlements near the Tibetan border; Pikey Peak, in the lower Solu, has one of the widest Everest panoramas there is and almost nobody on it. Guides: [[post:tamang-heritage-trail-guide|Tamang Heritage Trail]] and [[post:pikey-peak-trek-guide|Pikey Peak]]." },
          { p: "More options at this range are in [[post:short-treks-near-kathmandu|short treks near Kathmandu]] and [[post:short-treks-from-pokhara|short treks from Pokhara]]." },
        ],
      },
      {
        h2: "How to Choose",
        blocks: [
          {
            table: {
              head: ["If you want…", "Choose"],
              rows: [
                ["The biggest view for the least effort", "Poon Hill"],
                ["To get close to a mountain in four days", "Mardi Himal"],
                ["Dashain in the villages, and space on the trail", "Mohare Danda"],
                ["A glacier valley and a proper trekking week", "Langtang Valley"],
                ["Three days, starting from Kathmandu by road", "Ama Yangri"],
                ["Everest on the horizon without a flight", "Pikey Peak"],
                ["Everest close up, without the altitude of base camp", "Everest View"],
                ["A first trek with children or older relatives", "Poon Hill via Ghandruk, taken slowly, or a [[trek:ghalegaun-ghanpokhara-village-tour|village stay]]"],
              ],
            },
          },
          { p: "The three Annapurna favourites are compared head to head in [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|Mardi Himal vs Poon Hill vs Annapurna Base Camp]]." },
        ],
      },
      {
        h2: "The Altitude Mistake Holiday Trekkers Make",
        blocks: [
          { p: "Every Dashain, people are carried down from Gosaikunda, Mardi High Camp and Tilicho with altitude sickness, and most of them are fit, young and on a tight holiday. The cause is the same each time: too much height in too few days, because the leave runs out on Sunday." },
          {
            ul: [
              "<strong>Gosaikunda</strong> rises from 2,030 m at Dhunche to 4,380 m. Doing it in two days is common and too fast. Take three, sleeping at Chandanbari and Laurebina.",
              "<strong>Mardi Himal</strong> can be raced to High Camp at 3,580 m in two days from the road. Three is kinder, and the viewpoint at 4,200 m is a morning walk, not a place to sleep.",
              "<strong>Above 3,000 m, gain no more than 500 m of sleeping altitude a day.</strong> A headache that does not clear with rest and water means stop; one that worsens means go down.",
              "<strong>Alcohol and altitude do not mix.</strong> Festival spirits travel up the trail in a lot of rucksacks.",
            ],
          },
          { p: "The warning signs and what to do are in [[post:altitude-sickness-in-nepal-prevention-and-treatment|our altitude sickness guide]]. A short trek is not a low trek." },
        ],
      },
      {
        h2: "Booking and Transport for the Holiday Week",
        blocks: [
          {
            ul: [
              "<strong>Reserve lodges</strong> on Mardi Himal, Poon Hill, Langtang and Gosaikunda. An agency booking does this; walking in at 4 pm does not.",
              "<strong>Book the jeep with the trek.</strong> Shared transport to Syabrubesi, Dhunche and the Pokhara trailheads is thin on the tika day and overloaded for days after.",
              "<strong>Get permits before Phulpati.</strong> Conservation-area permits can be bought online; national park tickets are sold at the gate — see [[post:trekking-permits-during-dashain|permits during Dashain]].",
              "<strong>Carry cash.</strong> There are no working ATMs on any of these routes.",
              "<strong>Leave a spare day</strong> for the road home; return traffic into Kathmandu is at its worst in exactly these days — see [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]].",
            ],
          },
          { p: "What to carry is in the [[post:nepal-trekking-packing-list|trekking packing list]]; October nights above 3,000 m are colder than the days suggest." },
        ],
      },
    ],
    faqs: [
      { question: "What is the best short trek during Dashain?", answer: "For views with few people, Mohare Danda or Khopra Danda from Pokhara. For the classic experience, Poon Hill, ideally walked before the tika. From Kathmandu, Ama Yangri for three days or Langtang Valley for a week." },
      { question: "Which treks can be done in 3 days from Kathmandu?", answer: "Ama Yangri is the best three-day trek from Kathmandu by road, reaching a 3,771 m summit. With a flight to Pokhara, Poon Hill can be done in three days from the trailhead." },
      { question: "Is Mardi Himal doable in the Dashain holiday?", answer: "Yes, in four to five days from Pokhara. It is extremely busy in the days after the tika and High Camp has limited beds, so reserve lodges and allow three days rather than two to reach High Camp." },
      { question: "Is Gosaikunda safe to do in a short holiday?", answer: "Only if you take enough days. The lake is at 4,380 m, and climbing there from Dhunche in two days causes altitude sickness every year. Allow three days up and carry a plan to descend if symptoms appear." },
      { question: "Do short treks need permits?", answer: "Yes. Annapurna routes need the conservation-area permit; Langtang and Gosaikunda need the national park ticket, bought at Dhunche. None of the treks on this list needs a restricted-area permit." },
      { question: "Are lodges available during the Dashain holiday?", answer: "Yes, but on the popular routes they fill by early afternoon in the days after the tika. Book ahead, start walking early, and have a fallback village in mind." },
      { question: "Which short trek is least crowded at Dashain?", answer: "Pikey Peak, the Tamang Heritage Trail, Helambu, Mohare Danda and Khopra Danda all stay quiet through the holiday. They are less famous, not less good." },
      { question: "Can beginners do these treks?", answer: "Poon Hill, Mohare Danda, Helambu and the Tamang Heritage Trail are suitable for a first trek with ordinary fitness. Mardi Himal, Gosaikunda and Pikey Peak go above 4,000 m and need a sensible pace." },
    ],
    relatedTreks: [
      "mohare-danda-trek-from-pokhara",
      "poonhill-trek-from-pokhara",
      "mardi-himal-trek-from-pokhara",
      "ama-yangri-trek",
      "langtang-valley-trek",
      "pikey-peak-trek",
    ],
    tripsNote: "Short treks from Pokhara and Kathmandu that fit inside the holiday week.",
    relatedPosts: [
      "short-treks-from-pokhara",
      "short-treks-near-kathmandu",
      "annapurna-treks-during-dashain",
      "trekking-in-nepal-during-dashain",
      "mardi-himal-vs-poon-hill-vs-annapurna-base-camp",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["Dashain", "Short Treks", "Trekking", "Pokhara", "Kathmandu"],
    meta: {
      title: "Best Short Treks for the Dashain Holiday (3–7 Days)",
      description: "Eleven short treks for the Dashain holiday from Pokhara and Kathmandu, compared by days, altitude and crowds — plus the altitude mistake to avoid.",
      keywords: "Dashain holiday trek, short treks Nepal, Dashain trekking destinations, Mardi Himal Dashain, Poon Hill 3 days, short trek from Kathmandu, Dashain vacation trek",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "guides-and-porters-at-dashain",
    title: "Guides and Porters at Dashain: Bonuses, Tika on the Trail and Fair Practice",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/langtang-valley-trek/langtang-valley-trek-00-enroute-to-kyanjin-gompa",
      alt: "The trail toward Kyanjin Gompa in the Langtang valley.",
    },
    excerpt:
      "For most trekking staff, Dashain is the one family gathering of the year — and it falls in the month with the most work. What it means for a guide or porter to be on the trail for the tika, what a fair festival bonus looks like, and how to plan a trek that respects the day.",
    intro: [
      { p: "Imagine being asked to work every Christmas, away from home, at altitude, because December is the only month the job pays. That is roughly the position of a Nepali trekking guide in October. Dashain is when sons and daughters go home, when parents give the blessing that is supposed to carry you through the year — and it lands in the busiest fortnight of the trekking season." },
      { p: "Guides and porters work through it every year, mostly without complaint. This article is about what that costs them and what a trekker can do about it. The general rules and rates are in [[post:guides-and-porters-in-nepal-rules-and-costs|guides and porters in Nepal]]." },
    ],
    sections: [
      {
        h2: "What Dashain Means to Your Crew",
        blocks: [
          { p: "Most trekking staff come from the middle hills — Gorkha, Dhading, Lamjung, Solukhumbu's lower valleys, Okhaldhunga, Ramechhap — and most are from families that celebrate. For them the tenth day is specific and unrepeatable: you kneel in front of your father and mother, receive the tika and the jamara, hear the blessing, and are given a banknote as if you were still ten years old. Then you do the same at your grandparents' house, and your in-laws'." },
          { p: "A guide on the Thorong La that morning misses all of it. He will telephone if there is signal. He may put a tika on himself and his porters from a twist of paper in his pack. And he will have explained to his children that the season's wages matter more — which is true, and does not make the day easier. The festival itself is described in [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]]." },
          { p: "Not all staff are in this position. Sherpa guides in the Khumbu, and Buddhist staff from Mustang, Manang and Tsum, keep different festivals; for them Dashain is a working week like any other." },
        ],
      },
      {
        h2: "Why They Work Anyway",
        blocks: [
          { p: "Trekking work in Nepal is seasonal: roughly ten weeks in autumn and ten in spring. A freelance guide who declines an October trek has given up a tenth of his year's income, and may not be offered the next one. Porters, who are paid by the day and have the least security, can afford to refuse even less." },
          { p: "So the labour is there. The question for a trekker is not whether someone will carry the bag on the tika day but whether they are being treated properly for doing it." },
        ],
      },
      {
        h2: "The Festival Bonus",
        blocks: [
          { p: "Nepal has a strong custom, backed by labour law for salaried employees, of a <strong>festival allowance</strong> paid before Dashain — typically a month's basic pay. It is what buys the goat, the new clothes and the bus tickets. Permanent office staff of trekking companies receive it. Freelance guides and day-wage porters, who are most of the people on the trail, often do not, unless the operator chooses to pay something equivalent." },
          {
            table: {
              head: ["Who pays", "What is reasonable"],
              rows: [
                ["The operator", "A festival bonus for every guide and porter working across the tika day, on top of the agreed wage. Ask your operator what they pay; a straight answer is a good sign"],
                ["The trekker", "A festival addition to the normal end-of-trek tip — a few extra days' wages each is generous and noticed"],
                ["Either", "A small gift on the day itself: sweets or fruit bought in the last village, handed over at breakfast"],
              ],
            },
          },
          { p: "Tips are a personal decision and the usual guidance still applies — see [[post:how-much-does-trekking-in-nepal-cost|how much trekking in Nepal costs]]. At Dashain, err upward." },
        ],
      },
      {
        h2: "Tika on the Trail",
        blocks: [
          { p: "The festival follows people up the mountain. On the morning of the tenth day you may find your guide mixing rice and red powder in a saucer. As the senior member of the crew he gives the tika to the porters, who are usually younger; lodge owners in Hindu villages do the same for their staff and their guests. If you are offered one, accept it — forehead forward, a small bow, <em>Dashain ko shubhakamana</em>." },
          { p: "In the evening there may be a shared meal, a round of cards, and if the lodge can manage it, goat. It is one of the better evenings a trek can offer. The etiquette is set out in [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]]." },
          {
            figure: {
              image: DASHAIN.tikaRice,
              alt: "A plate of red rice paste prepared for the Dashain tika.",
              caption: "The tika needs only rice, yoghurt and red powder, and guides often carry the powder with them. On the tenth day it is mixed at breakfast.",
            },
          },
        ],
      },
      {
        h2: "An Itinerary That Respects the Day",
        blocks: [
          {
            ul: [
              "<strong>Make the tika day a rest day</strong> if the route has one to spend. On the [[trek:everest-base-camp-trek|Everest Base Camp trek]] the acclimatisation day at Dingboche or Namche can be placed on it; on the [[trek:annapurna-circuit-trek|Annapurna Circuit]], the day at Manang; on the [[trek:manaslu-circuit-trek|Manaslu Circuit]], the day at Samagaun.",
              "<strong>Spend it in a village, not at a high camp.</strong> A lodge with a family in it, a phone signal and a kitchen that can produce a feast is worth more than a few hundred metres of progress. Ghandruk on the [[trek:poonhill-trek|Poon Hill]] circuit and the Tamang villages of the [[trek:langtang-valley-trek|Langtang valley]] are good examples.",
              "<strong>Keep the day short if you must walk.</strong> Start late, finish by early afternoon.",
              "<strong>Offer the phone.</strong> If you have data and your guide does not, hand it over for the call home.",
              "<strong>Do not schedule the hardest day on it.</strong> A pass crossing on the tika day is legal and unkind.",
            ],
          },
          { p: "Where a trek is short, the simplest courtesy is in the dates: finish before Phulpati, or start the day after the tika, and nobody has to choose. Our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]] has them." },
        ],
      },
      {
        h2: "Booking Staff for a Dashain Trek",
        blocks: [
          { p: "Guides who are willing to work the festival are committed early, usually by August. A trek booked in the week before Dashain will be staffed, but with whoever is left, and independent trekkers hoping to hire a porter at the trailhead on the eighth or ninth day will find very few. Since a licensed guide is now required on most trekking routes, this is not a detail to leave to arrival." },
          { p: "If you have trekked with a particular guide before and want him again, ask whether he would rather not work the tika. Some will say so if given the chance, and a trek that starts three days later costs you nothing." },
        ],
      },
      {
        h2: "Welfare Does Not Take a Holiday",
        blocks: [
          { p: "The ordinary obligations matter more, not less, in the busiest weeks: a load limit that is actually observed, insurance that covers the porter as well as the guide, proper clothing and a bed for staff at altitude, and descent with pay for anyone who falls ill. In a crowded October, with every lodge full, it is the porters who are most likely to be left without a place to sleep. Ask your operator how their staff are accommodated above 4,000 m. Our guide to [[post:responsible-trekking-in-nepal|responsible trekking in Nepal]] sets out what to look for." },
        ],
      },
      {
        h2: "Small Things That Are Noticed",
        blocks: [
          {
            ul: [
              "Ask where they are from and who is at home for the festival. Nepalis talk about family readily, and being asked matters.",
              "Share the festival food if you are offered it, and offer yours.",
              "Learn the greeting: <em>Dashain ko shubhakamana</em>.",
              "Say thank you for the day specifically — not only at the end of the trek.",
              "If a guide's village is on your way back, accept the invitation to stop. You will get a second tika and the best meal of the trip.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Do guides and porters work during Dashain?", answer: "Yes. October is the busiest trekking month and most cannot afford to refuse the work. Those from Hindu families are missing their main family festival to do it, which is why a bonus and some consideration on the tika day are customary." },
      { question: "Should I pay my guide extra during Dashain?", answer: "It is customary and appreciated. A responsible operator pays a festival bonus to staff working across the tika day; a trekker can add a few extra days' wages to the normal end-of-trek tip." },
      { question: "What is the Dashain bonus in Nepal?", answer: "A festival allowance paid before Dashain — for salaried employees, usually a month's basic pay, as provided for in labour law. Freelance guides and day-wage porters are not automatically covered, so what they receive depends on the operator." },
      { question: "Will my guide celebrate Dashain on the trek?", answer: "Often in a small way: a tika mixed at breakfast for the crew and anyone who wants one, a call home, and a better dinner than usual if the lodge can provide it. You are welcome to join." },
      { question: "Is it hard to find a guide during Dashain?", answer: "At short notice, yes. Guides willing to work the festival are booked months ahead. Arrange staff with your trek rather than at the trailhead." },
      { question: "Do Sherpa guides celebrate Dashain?", answer: "Generally not as a religious festival. Sherpa communities are Buddhist and keep Losar, Dumje and Mani Rimdu instead. For them the Dashain weeks are simply the height of the working season." },
      { question: "Should I plan a rest day on the tika?", answer: "If the itinerary has a rest or acclimatisation day, placing it on the tika day is a kindness to the crew and costs the trek nothing. A village with a phone signal is the best place for it." },
      { question: "Can I trek without a guide during Dashain to avoid the problem?", answer: "A licensed guide is required on most trekking routes in Nepal, and all restricted areas. The better solution is to choose dates either side of the tika, or to book early with an operator that pays its staff fairly for the festival." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "langtang-valley-trek",
      "manaslu-circuit-trek",
      "poonhill-trek",
    ],
    tripsNote: "Treks with a natural rest day that can be placed on the tika.",
    relatedPosts: [
      "guides-and-porters-in-nepal-rules-and-costs",
      "responsible-trekking-in-nepal",
      "trekking-in-nepal-during-dashain",
      "dashain-tika-ceremony-guide-for-visitors",
      "how-much-does-trekking-in-nepal-cost",
      "everest-base-camp-trek-during-dashain",
    ],
    tags: ["Dashain", "Guides and Porters", "Responsible Travel", "Trekking"],
    meta: {
      title: "Guides and Porters at Dashain: Bonuses and Fair Practice",
      description: "What Dashain means for trekking guides and porters, what a fair festival bonus is, how the tika is marked on the trail, and how to plan a considerate trek.",
      keywords: "guides porters Dashain, Dashain bonus Nepal, tipping guide Nepal festival, trekking staff Dashain, responsible trekking Nepal, porter welfare",
    },
  },
];
