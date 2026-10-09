import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 2: the decision articles — whether to come at all, what
 * shuts, and how Dashain compares with Tihar two weeks later.
 */
export const dashainB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "is-dashain-a-good-time-to-visit-nepal",
    title: "Is Dashain a Good Time to Visit Nepal? An Honest Answer",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/kathmandu-valley-tour/kathmandu-valley-tour-04-mountain-scene-from-nagarkot-nepal-flickr-thapa-laxman",
      alt: "The Himalaya seen from Nagarkot on the rim of the Kathmandu valley in clear autumn weather.",
    },
    excerpt:
      "Dashain gives a visitor the best weather of the year, a country in holiday mood and an empty Kathmandu — along with closed offices, full buses and guides who would rather be at home. Whether that is a good trade depends on the trip. Here is how to tell.",
    intro: [
      { p: "Travel forums give two answers to this question. One says Dashain is the best time to visit Nepal: a fortnight of swings, kites and family feasts. The other says avoid it: everything is closed and you cannot get a bus. Both are right, about different trips." },
      { p: "Dashain falls in late September or October, which is when most people want to be in Nepal anyway. So the useful question is not whether to avoid it but what kind of trip survives it well. This guide sets out both sides without the brochure gloss. The festival itself is explained in our [[post:dashain-festival-nepal-travel-guide|complete Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "The Short Answer",
        blocks: [
          { p: "Yes, if your trip is <strong>booked in advance</strong>. No, if it depends on <strong>arranging things when you arrive</strong>." },
          { p: "A traveller with flights, lodges, guide and permits confirmed before the festival loses almost nothing to Dashain and gains a great deal. A traveller who lands on the eighth day intending to sort out a restricted-area permit, find a porter and take a bus to the trailhead will lose most of a week." },
        ],
      },
      {
        h2: "The Case For",
        blocks: [
          {
            ul: [
              "<strong>The weather.</strong> Dashain sits in the post-monsoon window: washed air, stable skies and the sharpest mountain views of the year. See [[post:best-time-to-visit-nepal-trekking-seasons|Nepal's trekking seasons]].",
              "<strong>The country is in a good mood.</strong> People are at home, well fed and on holiday. Hospitality, generous at any time, is close to unstoppable this fortnight.",
              "<strong>You may be invited in.</strong> A tika from a host family is the kind of experience visitors come hoping for and rarely get — see [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]].",
              "<strong>Kathmandu is at its best.</strong> For four or five days the traffic vanishes, the air clears and the mountains appear from the city's rooftops.",
              "<strong>The villages come alive.</strong> Bamboo swings, kites, repainted houses, everyone who left for work back for a week — see [[post:dashain-swings-and-kites|Dashain swings and kites]].",
              "<strong>The temples are doing what they were built for.</strong> The Durbar Squares are not museums this week.",
              "<strong>Trekking is unaffected where it counts.</strong> Lodges are open on every main route, and the high Buddhist valleys hardly notice the festival.",
            ],
          },
        ],
      },
      {
        h2: "The Case Against",
        blocks: [
          {
            ul: [
              "<strong>Government offices close for a week or more.</strong> No restricted-area permits, no visa extensions. See [[post:trekking-permits-during-dashain|permits during Dashain]].",
              "<strong>Banks close and ATMs empty.</strong> Cash has to be drawn beforehand.",
              "<strong>Transport is strained.</strong> Buses are full, highways jam in the days before Phulpati and after the tika, and domestic flights sell out. See [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]].",
              "<strong>Staff want to be at home.</strong> Guides and porters work through Dashain every year, but it is a real sacrifice for them, and the best ones are booked early. See [[post:guides-and-porters-at-dashain|guides and porters at Dashain]].",
              "<strong>Local shops and restaurants shut</strong> for the main days, and on the tika day even tourist districts are thin.",
              "<strong>The popular short treks are crowded</strong> — not with foreigners but with Nepalis on holiday. Poon Hill and Mardi Himal are at capacity.",
              "<strong>Animal sacrifice is public</strong> on the eighth and ninth days. It is avoidable, but you should know it is there — see [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]].",
            ],
          },
        ],
      },
      {
        h2: "It Depends on the Trip",
        blocks: [
          {
            table: {
              head: ["Type of trip", "Dashain verdict", "Why"],
              rows: [
                ["Cultural tour of the Kathmandu valley", "Excellent", "The festival is the attraction, and the heritage sites stay open — [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]]"],
                ["Village homestay", "The best week of the year", "This is where Dashain actually happens — [[trek:himalayan-village-tour|Himalayan Village Tour]]"],
                ["Everest Base Camp or Gokyo", "Good", "Sherpa country carries on as normal; book flights early — [[trek:everest-base-camp-trek|Everest Base Camp trek]]"],
                ["Short Annapurna treks", "Good but busy", "Festive villages and full lodges — [[trek:poonhill-trek|Poon Hill]], [[trek:mardi-himal-trek|Mardi Himal]]"],
                ["Restricted-area treks", "Only with the permit done beforehand", "The issuing office is closed — [[trek:manaslu-circuit-trek|Manaslu]], [[trek:upper-mustang-trek|Upper Mustang]]"],
                ["Overland circuit by road", "Awkward", "The Kathmandu–Pokhara–Chitwan highways are at their worst; fly the long legs"],
                ["Jungle safari", "Fine", "Park and lodges run as normal; the grass is still high in October — [[trek:chitwan-national-park-tour-3-days|Chitwan]]"],
                ["Unplanned backpacking", "Frustrating", "Everything you would normally improvise is the thing that is shut"],
                ["Photography trip", "Excellent", "Swings, kites, markets, masked dancers — [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]]"],
              ],
            },
          },
        ],
      },
      {
        h2: "Early Dashain and Late Dashain",
        blocks: [
          { p: "The festival's date changes its character. When the tika falls in late September or the first days of October, as it will in 2027, Dashain can overlap with the end of the monsoon: cloud on the mountains, leeches on the lower trails, the occasional washed-out road. The trails are quieter and the hills are intensely green." },
          { p: "When it falls in the third week of October, as in 2026, it lands on the driest and clearest stretch of the year — and the busiest. Lukla flights, Namche lodges and the Annapurna Base Camp trail are all at their peak regardless of the festival. In a late year Dashain adds crowding to crowding; in an early year it adds weather risk. Our [[post:dashain-dates-calendar-for-travellers|Dashain dates guide]] has both years." },
          {
            figure: {
              image: DASHAIN.swingKites,
              alt: "People on a bamboo swing silhouetted against the evening sky during Dashain, with a kite flying nearby.",
              caption: "A linge ping at dusk on the edge of the Kathmandu valley. The clear evenings of a late Dashain are part of the reason to come.",
            },
          },
        ],
      },
      {
        h2: "How to Get the Best of It",
        blocks: [
          {
            ol: [
              "<strong>Arrive two working days before Phulpati.</strong> That is enough for permits, cash and last purchases.",
              "<strong>Book domestic flights the moment your dates are fixed.</strong> They are the first thing to sell out.",
              "<strong>Put the tika day somewhere you want to be still.</strong> A homestay, Pokhara's lakeside, or a lodge halfway up a trail — not a transfer day.",
              "<strong>Travel against the flow.</strong> Into Kathmandu before the festival, out of it after — the opposite of what the country is doing.",
              "<strong>Confirm your guide early and pay the festival bonus gladly.</strong> They are giving up the day that matters most in their year.",
              "<strong>Carry more cash than usual</strong> and a card as backup.",
              "<strong>Leave a spare day.</strong> A jeep that does not turn up on the tika day is not a failure of planning; it is the tika day.",
            ],
          },
          { p: "A checklist of what runs and what does not is in [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]], and the money side is in [[post:nepal-trip-costs-and-booking-during-dashain|costs and booking during Dashain]]." },
        ],
      },
      {
        h2: "If Not Dashain, When?",
        blocks: [
          { p: "If the closures worry you more than the festival attracts you, the alternatives are close at hand." },
          {
            ul: [
              "<strong>The week after the full moon.</strong> Everything reopens, the weather is identical and the country is rested. For most trekkers this is the single best window of the year.",
              "<strong>Tihar</strong>, about two and a half weeks after the tika. Shorter, brighter, and far less disruptive — see [[post:dashain-vs-tihar-which-festival-to-visit|Dashain vs Tihar]].",
              "<strong>November.</strong> Colder, clearer still, and quieter on every trail.",
              "<strong>Spring.</strong> March and April bring rhododendron and warmer high camps, with a different set of festivals — see our [[post:nepal-festival-calendar|festival calendar]].",
            ],
          },
          { p: "If this is your first time in the country, our guide to [[post:first-time-trekking-in-nepal-what-to-know|first-time trekking in Nepal]] covers the rest of the planning." },
        ],
      },
    ],
    faqs: [
      { question: "Is it a bad idea to visit Nepal during Dashain?", answer: "No. It is a bad idea to arrive during Dashain with nothing arranged. With flights, accommodation, guide and permits booked beforehand, the festival adds far more than it takes away." },
      { question: "Is Kathmandu dead during Dashain?", answer: "Quiet rather than dead, and only for about five days. Thamel's hotels and many restaurants stay open, and all the heritage sites do. What disappears is the traffic and the everyday commerce of the local neighbourhoods." },
      { question: "Is Dashain good for trekking?", answer: "Yes — it falls in the best trekking season. Lodges are open and the weather is at its most stable. The differences are busier short trails, scarcer trailhead transport around the tika, and the need to arrange permits and staff ahead." },
      { question: "Will tourist services run on the tika day?", answer: "Hotels and trekking lodges do. Domestic flights run. Many restaurants in tourist districts open, often late. Sightseeing vehicles and guides are available if booked in advance. Buses, taxis and local shops are scarce." },
      { question: "Are flights to Nepal more expensive at Dashain?", answer: "International fares into Kathmandu rise in the weeks before Dashain because Nepalis working abroad fly home. Booking early matters more than usual, especially on routes through the Gulf and from India." },
      { question: "Is it safe to travel in Nepal during Dashain?", answer: "Yes. The risks are the ordinary ones, slightly sharpened: crowded highways with tired drivers in the days around the festival, and stomach upsets from festival food. Flying long legs and eating freshly cooked food deals with both." },
      { question: "Is the week after Dashain better than Dashain itself?", answer: "For pure logistics, yes: offices and banks reopen and the weather is the same. What you miss is the festival. Many of our guests arrive for the tika and begin their trek the day or two after, which gets both." },
      { question: "Should families with children visit during Dashain?", answer: "It suits children well — swings, kites and a great deal of attention from Nepali families. Keep travel days short, avoid the highways in the peak outbound and return days, and plan the eighth and ninth days away from the sacrifice temples." },
    ],
    relatedTreks: [
      "himalayan-village-tour",
      "kathmandu-valley-tour",
      "kathmandu-photography-tour",
      "poonhill-trek",
      "chitwan-national-park-tour-3-days",
    ],
    tripsNote: "The trips that gain most from being in Nepal for the festival.",
    relatedPosts: [
      "dashain-festival-nepal-travel-guide",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "dashain-vs-tihar-which-festival-to-visit",
      "trekking-in-nepal-during-dashain",
      "best-time-to-visit-nepal-trekking-seasons",
      "first-time-trekking-in-nepal-what-to-know",
    ],
    tags: ["Dashain", "Trip Planning", "Nepal Travel", "Best Time to Visit"],
    meta: {
      title: "Is Dashain a Good Time to Visit Nepal? Pros and Cons",
      description: "The honest case for and against visiting Nepal during Dashain: weather, closures, transport, trekking and which kinds of trip the festival suits.",
      keywords: "visit Nepal during Dashain, is Dashain a good time to visit Nepal, Nepal in October, Dashain travel tips, Dashain pros and cons, Nepal festival season",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "what-is-open-and-closed-in-nepal-during-dashain",
    title: "What Is Open and Closed in Nepal During Dashain",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/seven-world-heritage-kathmandu-day-tour/seven-world-heritage-kathmandu-day-tour-00-kathmandu-durbar-square-basantapur",
      alt: "Pagoda temples at Kathmandu Durbar Square, which stays open to visitors throughout Dashain.",
    },
    excerpt:
      "Government offices and banks shut for a week or more. Hotels, lodges, heritage sites and flights keep running. Local shops close for the main days and tourist districts mostly do not. A practical list of what a visitor can and cannot do during Dashain, service by service.",
    intro: [
      { p: "The most common worry about Dashain is that Nepal closes. It does not, but it does divide: everything that belongs to the state or to ordinary local life stops, and nearly everything that exists for visitors carries on." },
      { p: "This is the service-by-service list. Dates are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]; in 2026 the shutdown runs from Saturday 17 October and normal service resumes on Monday 26th." },
    ],
    sections: [
      {
        h2: "Three Phases, Not One",
        blocks: [
          {
            table: {
              head: ["Phase", "Days", "What it is like"],
              rows: [
                ["Build-up", "Day 1 to day 6", "Everything open. Markets packed, transport out of Kathmandu filling up, offices working but distracted"],
                ["Shutdown", "Phulpati to two days after the tika", "Offices and banks closed. Local shops shutting day by day, with the tika day the quietest"],
                ["Return", "From the third day after the tika to the full moon", "Shops reopening, people travelling back, offices closed until the holiday ends"],
              ],
            },
          },
          { p: "Most problems come from treating the whole fortnight as the shutdown, or from not realising the shutdown has started." },
        ],
      },
      {
        h2: "Open and Closed at a Glance",
        blocks: [
          {
            table: {
              head: ["Service", "During the shutdown", "Notes"],
              rows: [
                ["Government offices", "Closed", "Includes the immigration department and district offices"],
                ["Visa on arrival at the airport", "Open", "Runs every day, as normal"],
                ["Banks", "Closed", "Reopen after the holiday block"],
                ["ATMs", "Working, unreliable", "Not refilled; empty first in small towns"],
                ["Money changers in Thamel and Lakeside", "Mostly open", "Shorter hours, closed on the tika day"],
                ["Hotels and guesthouses", "Open", "Reduced staff on the tika day"],
                ["Trekking lodges", "Open", "Peak season"],
                ["Restaurants in tourist districts", "Mostly open", "Some close on the tika day or open in the evening only"],
                ["Local eateries and tea shops", "Closed for several days", "Their owners are celebrating"],
                ["Supermarkets and local shops", "Closed on the main days", "Stock up before Phulpati"],
                ["Trekking gear shops", "Partly open", "Buy or rent before the festival"],
                ["Heritage sites and Durbar Squares", "Open", "At their liveliest"],
                ["Museums", "Many closed", "Check the day before"],
                ["Domestic flights", "Running", "Full; book early"],
                ["Long-distance buses", "Reduced", "Almost none on the tika day"],
                ["Taxis and ride-hailing", "Scarce on the tika day", "Hotels can arrange cars in advance"],
                ["National park gates and checkposts", "Open", "Entry permits sold as usual"],
                ["Pharmacies", "Some open", "Hospital pharmacies run all day"],
                ["Hospital emergency departments", "Open", "Outpatient clinics closed"],
                ["Embassies", "Varies", "Each keeps its own calendar; many close for the main days"],
              ],
            },
          },
        ],
      },
      {
        h2: "Government Offices, Permits and Visas",
        blocks: [
          { p: "This is the closure that catches trekkers. The <strong>Department of Immigration</strong> issues restricted-area permits for Manaslu, Tsum, Upper Mustang, Nar Phu, Dolpo and Kanchenjunga, and it needs your original passport on a working day. During Dashain there are none. The same office handles visa extensions." },
          { p: "Permits that are sold at a gate or checkpost — national park entry at Monjo for the Khumbu, at Dhunche for Langtang — are unaffected. Conservation-area permits for Annapurna and Manaslu should be bought before the holiday. The detail, with a timetable, is in [[post:trekking-permits-during-dashain|trekking permits during Dashain]], and the permits themselves are explained in [[post:nepal-trekking-permits-explained|Nepal trekking permits explained]]." },
          { p: "If your tourist visa expires during the holiday block, extend it beforehand. Overstaying carries a daily fine, and the airport will collect it regardless of why the office was closed. See our [[post:nepal-visa-on-arrival-guide|visa guide]]." },
        ],
      },
      {
        h2: "Banks, ATMs and Cash",
        blocks: [
          { p: "Banks close for the holiday block. ATMs stay switched on but are not refilled, and in a week when the whole country is withdrawing festival money they run out — first in the hill towns, then in Pokhara's Lakeside, last in central Kathmandu." },
          {
            ul: [
              "Withdraw what you need for the whole festival period <strong>before Phulpati</strong>.",
              "Take trekking cash with you from Kathmandu or Pokhara. The few ATMs on trekking routes — Lukla, Namche Bazaar, Jomsom — are unreliable at the best of times.",
              "Cards are accepted at larger hotels and restaurants in Thamel and Lakeside throughout.",
              "Bring some US dollars or euros in cash as a reserve. Private money changers in the tourist districts open most days.",
            ],
          },
          { p: "How much to carry is covered in [[post:nepal-trip-costs-and-booking-during-dashain|what a Nepal trip costs during Dashain]]." },
          {
            figure: {
              image: DASHAIN.asanBazaar,
              alt: "Shoppers and street stalls in the Asan bazaar in the old city of Kathmandu.",
              caption: "Asan bazaar in old Kathmandu. In the week before Phulpati it is the busiest place in the country; from the eighth day most of these shutters are down.",
            },
          },
        ],
      },
      {
        h2: "Shops, Restaurants and Supplies",
        blocks: [
          { p: "Thamel in Kathmandu and Lakeside in Pokhara exist for visitors and mostly keep going. Expect shorter menus and slower service — kitchens run on half their staff — and a patchy tika day, when many places open only for dinner. Hotel restaurants are the dependable option that day." },
          { p: "Outside the tourist districts, small restaurants, tea shops and grocers close for anything from three days to a week. Supermarkets shut on the main days. If you need trekking snacks, a SIM card, a gas canister, a rented sleeping bag or a prescription filled, do it before Phulpati. Our [[post:nepal-trekking-packing-list|trekking packing list]] is the thing to check against." },
        ],
      },
      {
        h2: "Heritage Sites, Temples and Museums",
        blocks: [
          { p: "The seven World Heritage sites of the Kathmandu valley stay open, with ticket counters staffed. So do the stupas at Boudhanath and Swayambhunath, and Pashupatinath. This is the best week of the year to see them in use — the detail is in [[post:kathmandu-during-dashain|Kathmandu during Dashain]], and a [[trek:seven-world-heritage-kathmandu-day-tour|seven-site day tour]] is far quicker than usual with the roads empty." },
          { p: "Durga and Kali temples are extremely busy on the eighth and ninth days, with long queues and animal sacrifice. Museums are the exception to the open rule: several close for the main days, and it is worth checking the day before rather than making the journey." },
        ],
      },
      {
        h2: "Hotels, Lodges and Tours",
        blocks: [
          { p: "Hotels run through the festival with reduced staff. Trekking lodges are open on every main route; in the Khumbu, Langtang and Manaslu's upper valleys the owners are Buddhist and the festival passes almost unremarked. On routes through Hindu villages some lodges are run by a skeleton crew on the tika day, and you may find the owner pressing a tika on every guest at breakfast." },
          { p: "Guided tours and activities operate if booked in advance: the [[trek:everest-mountain-flight|Everest mountain flight]] leaves every clear morning, a [[trek:chitwan-national-park-tour-3-days|Chitwan safari]] runs as normal, and [[trek:paragliding-in-pokhara|paragliding in Pokhara]] flies through the festival. What becomes hard is arranging them on the day. Before the holiday starts, make sure you have a phone number for your operator that will be answered during it." },
        ],
      },
      {
        h2: "Health",
        blocks: [
          { p: "Hospital emergency departments in Kathmandu and Pokhara work around the clock, and their pharmacies with them. Outpatient clinics close for the holiday. Street pharmacies open erratically. Bring what you need, and read [[post:buying-medicine-in-kathmandu-and-pokhara|buying medicine in Kathmandu and Pokhara]] before you arrive rather than on the ninth day. Helicopter evacuation from the mountains operates throughout; your [[post:travel-insurance-for-trekking-in-nepal|travel insurance]] assistance line is unaffected by a Nepali holiday." },
        ],
      },
      {
        h2: "The Tika Day Itself",
        blocks: [
          { p: "Vijaya Dashami is the one day to plan as if nothing will be available. There are almost no buses, very few taxis, and most shops are shut until the afternoon at the earliest. Flights still run. Hotels still serve meals. It is a good day to be on a trail, in a village, or walking a city that for once has no traffic — and a poor day for a long road transfer. See [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]]." },
        ],
      },
    ],
    faqs: [
      { question: "Are shops open in Kathmandu during Dashain?", answer: "In Thamel, mostly yes, with shorter hours and a quiet tika day. In the rest of the city, small shops and markets close for several days around the tika. The week before the festival is the opposite — the busiest shopping week of the year." },
      { question: "Do ATMs work during Dashain?", answer: "They are switched on but are not refilled while banks are closed, so many run out of cash. Withdraw before Phulpati, and do not rely on ATMs in small towns or on trekking routes." },
      { question: "Is the trekking permit office open during Dashain?", answer: "The immigration department, which issues restricted-area permits, is closed for the main holiday block. In some years a short daily window for tourist services has been opened, but it is announced late and should not be planned around. National park entry permits sold at park gates are available as usual." },
      { question: "Are restaurants open on Dashain tika day?", answer: "Hotel restaurants are. In Thamel and Lakeside a fair number of restaurants open, some only in the evening. Local restaurants are closed. If you are invited to a family tika, you will not need one." },
      { question: "Are tourist attractions open during Dashain?", answer: "Yes. The Durbar Squares, Boudhanath, Swayambhunath and Pashupatinath are all open, and national parks run as normal. Some museums close for the main days." },
      { question: "Can I extend my Nepal visa during Dashain?", answer: "Not during the holiday block, because the immigration office is closed. Extend before Phulpati if your visa would expire during the festival; the overstay fine applies regardless." },
      { question: "Do hospitals stay open during Dashain?", answer: "Emergency departments do, twenty-four hours a day, along with hospital pharmacies. Routine outpatient clinics close. Travel clinics that serve visitors keep an emergency service." },
      { question: "How long does the Dashain shutdown last?", answer: "Offices and banks are closed for about a week, from Phulpati to two days after the tika, with weekends and the full-moon holiday often extending it. Local shops reopen gradually from the third day after the tika." },
    ],
    relatedTreks: [
      "seven-world-heritage-kathmandu-day-tour",
      "kathmandu-day-tour",
      "glimpse-of-nepal-tour",
      "pokhara-day-tour",
      "everest-mountain-flight",
    ],
    tripsNote: "Day tours and flights that run through the festival when booked in advance.",
    relatedPosts: [
      "dashain-dates-calendar-for-travellers",
      "trekking-permits-during-dashain",
      "nepal-trip-costs-and-booking-during-dashain",
      "travelling-around-nepal-during-dashain",
      "kathmandu-during-dashain",
      "buying-medicine-in-kathmandu-and-pokhara",
    ],
    tags: ["Dashain", "Trip Planning", "Nepal Travel", "Practical Information"],
    meta: {
      title: "What Is Open and Closed in Nepal During Dashain",
      description: "Banks, ATMs, permit offices, shops, restaurants, heritage sites, flights and hospitals — exactly what stays open in Nepal during the Dashain holiday.",
      keywords: "Dashain closures Nepal, what is open during Dashain, Dashain public holiday, banks closed Dashain, Kathmandu shops Dashain, Nepal offices closed October",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-vs-tihar-which-festival-to-visit",
    title: "Dashain vs Tihar: Which Festival Should You Plan a Nepal Trip Around?",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/hindu-pilgrimage-tour/hindu-pilgrimage-tour-00-2023-january-night-aarti-at-pashupatinath-temple-kathmandu-0",
      alt: "Oil lamps raised during the evening aarti on the riverbank at Pashupatinath temple in Kathmandu.",
    },
    excerpt:
      "Nepal's two great autumn festivals fall about two and a half weeks apart. Dashain is longer, bigger and mostly private; Tihar is five days of lamps, garlands and street singing that a visitor can see from the pavement. Here is how they differ and which suits which trip.",
    intro: [
      { p: "If you are coming to Nepal in autumn you will probably overlap with one of them and could, with some planning, see both. Dashain and Tihar are often mentioned in one breath, but they are different experiences for a visitor — one a family festival that empties the cities, the other a festival of light that fills the streets." },
      { p: "This guide compares them on the things that affect a trip. Dashain on its own is covered in our [[post:dashain-festival-nepal-travel-guide|complete Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "Two Festivals, Two and a Half Weeks Apart",
        blocks: [
          {
            table: {
              head: ["", "Dashain", "Tihar"],
              rows: [
                ["2026 dates", "11 – 25 October; tika on Wednesday 21st", "7 – 11 November; Lakshmi Puja on Sunday 8th, Bhai Tika on Wednesday 11th"],
                ["2027 dates (provisional)", "30 September – mid October; tika on Saturday 9th", "Late October, ending around 1 November"],
                ["Length", "Fifteen days", "Five days"],
                ["Also called", "Vijaya Dashami, Dasain, Mohani", "Deepawali, Yamapanchak, Swanti"],
                ["Honours", "The goddess Durga's victory over evil", "Lakshmi, goddess of wealth; and crows, dogs, cows and brothers"],
              ],
            },
          },
          { p: "The gap is fixed by the moon: Dashain ends on the full moon and Tihar is built around the next new moon. Full dates for Dashain are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
        ],
      },
      {
        h2: "What Each Festival Is",
        blocks: [
          { h3: "Dashain" },
          { p: "The great homecoming. People return to their family house, barley is grown in a dark room, a goat is slaughtered, and on the tenth day elders give the younger generation a red tika and a blessing. Most of it happens indoors. The public signs are bamboo swings, kites, a military parade in Kathmandu on the seventh day, and emptied cities. The whole sequence is in [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]]." },
          { h3: "Tihar" },
          { p: "Five days, each with its own subject:" },
          {
            ol: [
              "<strong>Kaag Tihar</strong> — crows, the messengers of death, are fed on the rooftops.",
              "<strong>Kukur Tihar</strong> — dogs are garlanded with marigolds, given a tika and fed. Street dogs and police dogs included.",
              "<strong>Gai Tihar and Lakshmi Puja</strong> — cows are honoured in the morning. In the evening every doorway is lit with oil lamps and candles, patterns of coloured powder are drawn on the ground to guide the goddess of wealth inside, and groups of girls go from house to house singing <em>bhailo</em>.",
              "<strong>Govardhan Puja and Mha Puja</strong> — oxen are honoured; boys sing <em>deusi</em>; and the Newar community celebrates its own New Year with Mha Puja, the worship of the self.",
              "<strong>Bhai Tika</strong> — sisters give their brothers a tika of seven colours and a garland, and receive gifts in return.",
            ],
          },
        ],
      },
      {
        h2: "Side by Side for a Traveller",
        blocks: [
          {
            table: {
              head: ["", "Dashain", "Tihar"],
              rows: [
                ["What you see from the street", "Swings, kites, parade, temple queues, tika on every forehead", "Lamps in every window, marigold garlands, rangoli, singing groups, decorated dogs"],
                ["How much is private", "Most of it", "Very little"],
                ["Office and bank closures", "A week or more", "About three days"],
                ["Shops and restaurants", "Local ones closed for days", "Mostly open; closed on Bhai Tika"],
                ["Transport", "Severely strained before and after", "Busy on Bhai Tika, otherwise normal"],
                ["Mood in the cities", "Empty, quiet", "Full, lit, noisy with firecrackers"],
                ["Chance of being invited in", "High, for the tika", "High, especially on Lakshmi Puja evening"],
                ["Animal sacrifice", "Yes, on the eighth and ninth days", "None"],
                ["Trekking weather", "Late monsoon to peak season, depending on the year", "Peak season, colder nights"],
                ["Best place to be", "A village, or Kathmandu for the public days", "Kathmandu valley old towns, Pokhara Lakeside"],
              ],
            },
          },
          {
            figure: {
              image: DASHAIN.swingSunset,
              alt: "A bamboo Dashain swing at sunset on a hill meadow in Nepal.",
              caption: "Dashain's public face is in the villages. The swings stay standing through Tihar, so a visitor at either festival will find them.",
            },
          },
        ],
      },
      {
        h2: "Which Suits a Trek Better",
        blocks: [
          { p: "<strong>Dashain</strong> sits at the start of the main season and complicates logistics: permits must be arranged before the offices close, and guides and porters would rather be home. On the trail itself it matters little, particularly in the Buddhist high valleys. See [[post:trekking-in-nepal-during-dashain|trekking during Dashain]]." },
          { p: "<strong>Tihar</strong> barely disturbs a trek. Offices are shut for only a few days, transport runs, and lodge families along the Annapurna and Langtang trails celebrate in the evening while continuing to serve dinner. You are likely to be sung to by a group of village children performing deusi, and expected to give a small donation." },
          { p: "Higher up, a third festival may matter more than either. <strong>Mani Rimdu</strong>, the masked-dance festival at Tengboche monastery, falls around the full moon between the two, on the [[trek:everest-base-camp-trek|Everest Base Camp]] route. See our [[post:tengboche-monastery-and-sherpa-culture|Tengboche guide]]." },
        ],
      },
      {
        h2: "Seeing Both",
        blocks: [
          { p: "The spacing makes a neat itinerary: arrive for the Dashain tika, trek for two weeks, and come down in time for Tihar. In 2026 that looks like this." },
          {
            table: {
              head: ["Dates (2026)", "Plan"],
              rows: [
                ["15 – 16 October", "Arrive Kathmandu; permits and cash on the last working days"],
                ["17 – 21 October", "Phulpati to the tika in the valley — [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] and a day in [[trek:bhaktapur-day-tour|Bhaktapur]]"],
                ["22 October – 5 November", "A two-week trek: [[trek:everest-base-camp-trek|Everest Base Camp]], [[trek:annapurna-circuit-trek|Annapurna Circuit]] or, with the permit arranged beforehand, [[trek:manaslu-circuit-trek|Manaslu]]"],
                ["6 – 8 November", "Back in Kathmandu or Pokhara for Kukur Tihar and the lamps of Lakshmi Puja"],
                ["9 – 11 November", "Mha Puja in the Newar towns of [[trek:patan-day-tour|Patan]] and Bhaktapur; Bhai Tika; depart"],
              ],
            },
          },
          { p: "If the trek is shorter, the days between fill easily with Pokhara, a [[trek:chitwan-national-park-tour-3-days|Chitwan safari]] or a village stay." },
        ],
      },
      {
        h2: "Our Verdict",
        blocks: [
          {
            ul: [
              "<strong>Choose Dashain</strong> if you want to be inside Nepali family life, are happy in a village, and have your logistics settled in advance.",
              "<strong>Choose Tihar</strong> if you want a festival you can see and photograph from the street, with almost no disruption to travel. For a first visit it is the easier of the two.",
              "<strong>Choose both</strong> if you have three weeks. A trek between them is the best-shaped autumn trip there is.",
              "<strong>Choose neither</strong> if what you want is the quietest trails: the first half of November after Tihar, or early December.",
            ],
          },
          { p: "The rest of the year's festivals — Holi, Bisket Jatra, Indra Jatra, Tiji — are in our [[post:nepal-festival-calendar|Nepal festival calendar]], and [[post:is-dashain-a-good-time-to-visit-nepal|is Dashain a good time to visit?]] goes deeper on the first of these choices." },
        ],
      },
    ],
    faqs: [
      { question: "What is the difference between Dashain and Tihar?", answer: "Dashain is a fifteen-day festival honouring the goddess Durga, centred on family gatherings and the tika from elders. Tihar is a five-day festival of lights honouring Lakshmi and, on successive days, crows, dogs, cows and brothers. Dashain is mostly private and closes the country for a week; Tihar is public and closes it for about three days." },
      { question: "Which is bigger, Dashain or Tihar?", answer: "Dashain. It is longer, involves more travel and carries more public holiday. Tihar is the second festival of the year, and many visitors find it the more beautiful of the two." },
      { question: "How long after Dashain is Tihar?", answer: "Bhai Tika, the last day of Tihar, falls about three weeks after the Dashain tika. In 2026 the Dashain tika is on 21 October and Tihar runs from 7 to 11 November." },
      { question: "Which festival is better for tourists?", answer: "Tihar is easier: the lamps, garlands and singing are in the street for anyone to see, and transport and shops keep working. Dashain is more rewarding if you are staying with a family or in a village, and harder if you are moving around." },
      { question: "What is Kukur Tihar?", answer: "The second day of Tihar, when dogs are honoured as guardians and companions. They are given a marigold garland, a red tika on the forehead and a good meal. It applies to pets, working dogs and street dogs alike." },
      { question: "Is Tihar the same as Diwali?", answer: "It coincides with Diwali and shares Lakshmi Puja, the night of lamps. The five-day structure honouring animals, the deusi and bhailo singing, and Bhai Tika with its seven-coloured tika are particular to Nepal." },
      { question: "Can I trek during Tihar?", answer: "Yes, with almost no adjustment. Lodges are open, transport runs except for a thin day on Bhai Tika, and permits are delayed by only a few days of closure. Expect singing groups in the villages in the evenings." },
      { question: "Can I see both Dashain and Tihar in one trip?", answer: "Yes, with about three weeks. Arrive a couple of days before the Dashain tika, trek in the two weeks between, and return to Kathmandu or Pokhara for Lakshmi Puja and Bhai Tika." },
    ],
    relatedTreks: [
      "nepal-cultural-tour",
      "kathmandu-valley-tour",
      "everest-base-camp-trek",
      "annapurna-circuit-trek",
      "patan-day-tour",
    ],
    tripsNote: "A valley tour for the festivals and a two-week trek for the days between them.",
    relatedPosts: [
      "dashain-festival-nepal-travel-guide",
      "dashain-dates-calendar-for-travellers",
      "is-dashain-a-good-time-to-visit-nepal",
      "nepal-festival-calendar",
      "tengboche-monastery-and-sherpa-culture",
      "nepal-cultural-tour-itineraries",
    ],
    tags: ["Dashain", "Tihar", "Festivals", "Trip Planning", "Nepal Travel"],
    meta: {
      title: "Dashain vs Tihar: Which Nepal Festival to Visit?",
      description: "Dashain and Tihar compared for travellers: 2026 dates, what you can see, what closes, how each affects trekking and how to fit both into one trip.",
      keywords: "Dashain vs Tihar, Tihar festival Nepal, Tihar 2026 dates, Kukur Tihar, Dashain and Tihar difference, Nepal festivals October November, Diwali in Nepal",
    },
  },
];
