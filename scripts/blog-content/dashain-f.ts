import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 6: what the festival does to a budget, and where in the
 * country it is worth travelling to see — with Gorkha and Manakamana, the two
 * places on the Kathmandu–Pokhara road that belong to the festival's story.
 */
export const dashainF: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-trip-costs-and-booking-during-dashain",
    title: "What a Nepal Trip Costs During Dashain: Prices, Booking and Money",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.asanBazaar,
      alt: "Shoppers in the Asan bazaar in old Kathmandu, busiest in the week before Dashain.",
    },
    excerpt:
      "Dashain does not make Nepal expensive, but it moves a few costs: flights into and around the country, vehicles on the tika day, and a festival bonus for the people working through it. What rises, what does not, when to book each part of a trip, and how to handle cash while the banks are shut.",
    intro: [
      { p: "There is a persistent idea that prices in Nepal double at Dashain. They do not. Trek prices, lodge menus, permit fees and hotel rates in October are the same in the festival week as in the weeks either side of it. What the festival changes is narrower and worth knowing precisely, because the parts that do rise are the parts that also sell out." },
      { p: "This guide separates the two and gives a booking timetable. The year-round figures are in [[post:how-much-does-trekking-in-nepal-cost|how much trekking in Nepal costs]]." },
    ],
    sections: [
      {
        h2: "What Costs More at Dashain",
        blocks: [
          {
            table: {
              head: ["Item", "Effect of the festival", "Why"],
              rows: [
                ["International flights to Kathmandu", "Higher in the two or three weeks before the tika, especially through the Gulf, Malaysia and India", "Hundreds of thousands of Nepalis working abroad fly home"],
                ["Domestic flights", "At the top of the fare range, and sold out early", "The same homecoming, inside the country"],
                ["Private vehicles around the tika day", "A festival surcharge is normal", "The driver is working his holiday and often returns empty"],
                ["Taxis on the tika day", "Whatever is asked", "There are very few of them"],
                ["Guides and porters", "A festival bonus on top of wages and tips", "Custom, and fairness — see [[post:guides-and-porters-at-dashain|guides and porters at Dashain]]"],
                ["Pokhara hotels after the tika", "Fewer discounts; the better rooms go", "The domestic holiday rush"],
                ["Spare days", "You may need one more than usual", "Transport that does not turn up on the tika day"],
              ],
            },
          },
          { p: "None of these is large. Added together they come to perhaps a tenth more on in-country transport and tips than the same trip would cost a fortnight later." },
        ],
      },
      {
        h2: "What Does Not Change",
        blocks: [
          {
            ul: [
              "<strong>Trek and tour prices.</strong> Ours are the same for a Dashain departure as for any other in the season.",
              "<strong>Permit and park fees.</strong> Fixed by the government — see [[post:nepal-trekking-permits-explained|Nepal trekking permits explained]].",
              "<strong>Lodge prices on the trail.</strong> Menus are set by local committees for the season and do not move for the festival.",
              "<strong>City hotels.</strong> October is peak season and priced accordingly; the festival adds nothing, and Kathmandu hotels are if anything easier to book in the quiet days.",
              "<strong>Visa fees and entrance tickets</strong> to heritage sites.",
              "<strong>Restaurant prices</strong> in the tourist districts.",
            ],
          },
          { p: "What Nepalis themselves pay more for at Dashain — goats, new clothes, bus tickets home — mostly does not touch a visitor's budget." },
          {
            figure: {
              image: DASHAIN.goatsTrail,
              alt: "A flock of long-horned mountain goats being driven along a hill trail in Nepal.",
              caption: "Mountain goats on their way to market. The price of a goat is the Dashain cost every Nepali household talks about; it does not appear on a visitor's bill.",
            },
          },
        ],
      },
      {
        h2: "When to Book What",
        blocks: [
          {
            table: {
              head: ["How far ahead", "Book"],
              rows: [
                ["4 – 6 months", "International flights. Fares into Kathmandu climb steadily toward the festival"],
                ["2 – 3 months", "The trek or tour, which fixes your guide and porters; Lukla, Pokhara and Jomsom flights"],
                ["6 – 8 weeks", "Restricted-area treks, so that your arrival date leaves working days for the permit — see [[post:trekking-permits-during-dashain|permits during Dashain]]"],
                ["1 month", "Pokhara hotels for the days after the tika; village homestays; lodges on short Annapurna treks"],
                ["1 – 2 weeks", "Tourist-bus seats; private vehicles for the days around the tika; activities such as paragliding"],
                ["Before Phulpati", "Cash, SIM card, gear rental, pharmacy purchases, visa extension"],
              ],
            },
          },
          { p: "The order matters more than the exact intervals. Flights first, because they are the first to go; staff second, because the good ones are committed early; everything that needs an office or a bank last, but before the doors close. The festival dates for the next two years are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
        ],
      },
      {
        h2: "Cash, Cards and ATMs",
        blocks: [
          { p: "Banks close for the holiday block and ATMs are not refilled. In the days before the festival the whole country is withdrawing money for gifts and travel, and machines run out — first in the hill towns, then in the cities. Plan to hold everything you need for the festival period in cash before Phulpati." },
          {
            table: {
              head: ["Need", "Rough amount to carry"],
              rows: [
                ["Food and lodge extras on a teahouse trek", "NPR 3,000 – 5,000 a day per person where meals are not included; USD 10 – 15 a day in extras where they are"],
                ["Tips for the crew", "USD 10 – 15 per trekker per day, pooled, plus a festival addition"],
                ["City days during the shutdown", "NPR 4,000 – 6,000 a day for meals, taxis and entrance fees"],
                ["Reserve", "USD 100 – 200 in foreign notes, kept separately"],
              ],
            },
          },
          {
            ul: [
              "Withdraw in several transactions over the days before Phulpati; machines have per-withdrawal limits and charge a fee each time.",
              "Cards work at larger hotels and restaurants in Thamel and Lakeside throughout. They do not work on the trail.",
              "Private money changers in the tourist districts open on most festival days, with shorter hours.",
              "Small notes matter: lodges and village shops cannot change a thousand-rupee note for a cup of tea.",
            ],
          },
          { p: "More on what stays open in [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]]." },
        ],
      },
      {
        h2: "The Festival Bonus",
        blocks: [
          { p: "Nepal's working year pivots on a festival allowance paid before Dashain, and trekking staff who spend the tika on a mountain have earned one. A responsible operator pays it. As a guest, the usual guidance of USD 10 to 15 per trekker per day for the whole team still holds; at Dashain a few extra days' worth, handed over with a word about the festival, is the right gesture. It is covered in full in [[post:guides-and-porters-at-dashain|guides and porters at Dashain]]." },
        ],
      },
      {
        h2: "Where the Money Is Best Spent",
        blocks: [
          {
            ul: [
              "<strong>A flight instead of a road day.</strong> Kathmandu to Pokhara by air costs more than the bus and saves, in festival traffic, most of a day — see [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]].",
              "<strong>A private vehicle to the trailhead.</strong> The one item most worth pre-paying.",
              "<strong>A guided booking on a busy route.</strong> In the days after the tika, reserved rooms on [[trek:mardi-himal-trek|Mardi Himal]] or [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] are the difference between a bed and a dining-room bench.",
              "<strong>A spare day.</strong> It costs a hotel night and removes most of the festival's risk.",
              "<strong>Insurance that covers cancellation and delay</strong> as well as evacuation — see [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking in Nepal]].",
            ],
          },
          { p: "For a worked example, the [[post:everest-base-camp-trek-cost-breakdown|Everest Base Camp cost breakdown]] shows where the money goes on a two-week trek; add the bonus and a buffer day and you have the Dashain version." },
        ],
      },
      {
        h2: "Trips That Hold Their Price",
        blocks: [
          { p: "Because our rates do not change for the festival, the simplest way to keep a Dashain trip on budget is to choose one with few moving parts: a [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] with no long transfers, a [[trek:poonhill-trek-from-pokhara|Poon Hill trek from Pokhara]] reached by one short flight, or the [[trek:everest-view-trek|Everest View trek]], whose permits are all bought on the trail. The pricing table on each trip page shows the per-person rate by group size." },
        ],
      },
    ],
    faqs: [
      { question: "Is Nepal more expensive during Dashain?", answer: "Slightly. Treks, lodges, permits and city hotels cost the same as in the rest of October. International and domestic flights are dearer and fuller, vehicles carry a surcharge around the tika day, and a festival bonus for guides and porters is customary." },
      { question: "Do trekking companies charge more for Dashain departures?", answer: "Reputable ones do not. Our prices are the same for a Dashain departure as for any other date in the season. What you should budget extra for is tips and any transport booked late." },
      { question: "How much cash should I carry during Dashain?", answer: "Enough for the whole holiday block, drawn before Phulpati. As a guide, NPR 4,000 to 6,000 a day in the cities, your daily trail budget for every day of the trek, your tip money, and a reserve of USD 100 to 200 in foreign notes." },
      { question: "Can I pay by card in Nepal during Dashain?", answer: "At larger hotels and restaurants in Kathmandu and Pokhara, yes. Not in trekking lodges, village shops, taxis or local buses. Card terminals work independently of bank opening hours." },
      { question: "When should I book flights to Nepal for Dashain?", answer: "Four to six months ahead if you can. Fares into Kathmandu rise in the weeks before the festival as Nepalis working abroad return home, and the cheapest routings sell out first." },
      { question: "Are hotels more expensive during Dashain?", answer: "In Kathmandu, no — the city is quiet. In Pokhara, rooms are in demand in the days after the tika because of domestic holidaymakers, so there are fewer discounts and the better rooms need booking ahead." },
      { question: "Do I need to tip more at Dashain?", answer: "It is customary to add a festival bonus for guides and porters who work across the tika day — a few extra days' wages on top of the usual tip is generous and appreciated." },
      { question: "Is it cheaper to visit just after Dashain?", answer: "Marginally: international fares fall back and transport is easier. The weather is the same, and trek prices do not change. The saving is in convenience more than money." },
    ],
    relatedTreks: [
      "kathmandu-valley-tour",
      "poonhill-trek-from-pokhara",
      "everest-view-trek",
      "glimpse-of-nepal-tour",
      "kathmandu-pokhara-tour",
    ],
    tripsNote: "Trips with few moving parts, which keep a festival budget predictable.",
    relatedPosts: [
      "how-much-does-trekking-in-nepal-cost",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "guides-and-porters-at-dashain",
      "travelling-around-nepal-during-dashain",
      "everest-base-camp-trek-cost-breakdown",
      "travel-insurance-for-trekking-in-nepal",
    ],
    tags: ["Dashain", "Costs", "Trip Planning", "Money", "Nepal Travel"],
    meta: {
      title: "Nepal Trip Costs During Dashain: Prices and Booking",
      description: "What costs more in Nepal during Dashain and what does not, when to book flights, treks and hotels, and how to manage cash while banks are closed.",
      keywords: "Nepal cost Dashain, Dashain prices, Nepal October budget, booking Nepal trek Dashain, ATMs Nepal Dashain, Dashain bonus tip, Nepal flights Dashain",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "where-to-see-dashain-celebrations-in-nepal",
    title: "Where to See Dashain Celebrations in Nepal: 9 Places Worth the Journey",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.durgaIdol,
      alt: "A painted clay figure of the goddess Durga killing the buffalo demon, made for Durga Puja in the Terai.",
    },
    excerpt:
      "Dashain is a family festival, so where a visitor stands decides how much of it they see. Nine places where the festival is public, particular or easy to join — from the parade ground in Kathmandu and the masked dancers of Bhaktapur to a Gurung homestay and the one village that does not celebrate it at all.",
    intro: [
      { p: "The hardest thing about Dashain for a visitor is that its centre is a living room. The public ceremony is thin, spread across a handful of days and places, and if you are in the wrong one you may see nothing but closed shutters." },
      { p: "These are the nine places we would send someone, with what each offers and on which day. The festival's sequence is in [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]]; the dates are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
    ],
    sections: [
      {
        h2: "The Nine, at a Glance",
        blocks: [
          {
            table: {
              head: ["Place", "Best day", "What you see", "From Kathmandu"],
              rows: [
                ["Kathmandu: Tundikhel and Durbar Square", "Phulpati; Maha Navami", "The army parade; the Taleju temple open", "In the city"],
                ["Bhaktapur", "Maha Navami; the tika", "Mohani and the Navadurga masked dancers", "40 minutes"],
                ["Gorkha", "Days before Phulpati; Maha Ashtami", "The palace the Phulpati leaves from", "5 hours"],
                ["Manakamana", "Maha Ashtami", "Nepal's busiest pilgrimage temple, by cable car", "3 hours"],
                ["Dakshinkali", "Maha Ashtami; Maha Navami", "The festival's sacrificial side", "1 hour"],
                ["Pokhara", "Maha Navami; days after the tika", "Bindhyabasini temple; village swings", "25 minutes by air"],
                ["A hill village homestay", "The tika", "The festival as families keep it", "5 – 7 hours"],
                ["Khokana", "Days 7 – 10", "Shikali Jatra, in the village that skips Dashain", "40 minutes"],
                ["The Terai towns", "Days 7 – 10", "Durga Puja: clay idols, lights and fairs", "20 – 35 minutes by air"],
              ],
            },
          },
        ],
      },
      {
        h2: "In the Kathmandu Valley",
        blocks: [
          { h3: "1. Kathmandu: Tundikhel and Durbar Square" },
          { p: "The state's Dashain. On the seventh day the Phulpati arrives from Gorkha and the army parades at Tundikhel with bands and gunfire. On the ninth, the Taleju temple in Durbar Square opens for its single day of the year, with a queue that fills the square. Between the two, the old city empties and becomes a pleasure to walk. Full detail in [[post:kathmandu-during-dashain|Kathmandu during Dashain]]; a [[trek:kathmandu-day-tour|Kathmandu day tour]] covers the square." },
          { h3: "2. Bhaktapur" },
          { p: "The Newar festival of Mohani, kept in the best-preserved medieval city in the valley. For nine mornings its people visit the shrines of the nine goddesses that ring the town, and on the tenth day the <strong>Navadurga</strong> — masked dancers who embody those goddesses — emerge for the first time in the year. It is the most distinctive Dashain in Nepal. See [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]] and our [[trek:bhaktapur-day-tour|Bhaktapur day tour]]." },
          {
            figure: {
              image: DASHAIN.navadurgaDance,
              alt: "Masked Navadurga dancers performing in a square in Bhaktapur with a pagoda temple behind.",
              caption: "The Navadurga dancers of Bhaktapur, who first appear each year at Dashain.",
            },
          },
          { h3: "3. Dakshinkali" },
          { p: "A temple of Kali in a forested gorge south of the city, and the place most associated with animal sacrifice. On the eighth and ninth days the queue stretches up the hillside. It is not for everyone, and it is the truest picture of what the festival's middle days are about. Read [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]] before deciding; the [[trek:pharping-dakshinkali-tour|Pharping and Dakshinkali tour]] pairs it with the quiet Buddhist caves nearby." },
          { h3: "4. Khokana" },
          { p: "A Newar farming village south of Patan that famously does not celebrate Dashain. Instead it holds <strong>Shikali Jatra</strong>, a five-day festival of its own in the same week, with masked dancers and a procession to the shrine on the hill above the village. If you want ritual without sacrifice and without crowds of visitors, this is the one. It is on our [[trek:bungmati-khokana-village-tour|Bungamati and Khokana tour]] — see the [[post:bungmati-khokana-village-tour-guide|guide]]." },
        ],
      },
      {
        h2: "On the Road West",
        blocks: [
          { h3: "5. Gorkha" },
          { p: "The hilltop palace of the Shah kings, five hours from Kathmandu, is where the royal Phulpati has set out from for centuries. Its Gorakhkali temple is one of the festival's main sites of worship, and the palace itself — part fort, part temple, on a knife-edge ridge with Manaslu behind it — is worth the climb at any time." },
          { h3: "6. Manakamana" },
          { p: "The temple of the wish-fulfilling goddess, on a ridge above the Trishuli, reached by cable car from the Kathmandu–Pokhara highway. At Dashain it draws more pilgrims than anywhere else in the country, many of them leading a goat. Both are covered in [[post:gorkha-and-manakamana-during-dashain|Gorkha and Manakamana during Dashain]]; either can be added to the drive on our [[trek:kathmandu-pokhara-tour|Kathmandu & Pokhara Tour]]." },
          { h3: "7. Pokhara" },
          { p: "The Bindhyabasini temple is the centre of the town's festival, the island shrine of Tal Barahi its gentlest corner, and the ridge villages above the lake — Sarangkot, Kaskikot, Dhampus — the place for swings with a Himalayan backdrop. See [[post:pokhara-during-dashain|Pokhara during Dashain]] and the [[trek:pokhara-day-tour|Pokhara day tour]]." },
        ],
      },
      {
        h2: "In the Villages",
        blocks: [
          { h3: "8. A hill village homestay" },
          { p: "If you want to see Dashain itself — the dark room with the jamara, the goat, the tika given by a grandmother to thirty relatives in turn — it has to be in a house. Community homestays make that possible without an invitation. <strong>Ghalegaun</strong> in Lamjung and <strong>Sirubari</strong> in Syangja are Gurung villages that have hosted guests for years; <strong>Bandipur</strong> is a Newar hill town where the festival is kept in the bazaar." },
          { p: "You will be given a tika, fed several times, and put on the swing. Our [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]], [[trek:sirubari-village-tour|Sirubari]] and [[trek:himalayan-village-tour|Himalayan Village]] tours can each be dated for the festival; the etiquette is in [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]]." },
          {
            figure: {
              image: "mardi-treks/ghalegaun-ghanpokhara-village-tour/ghalegaun-ghanpokhara-village-tour-00-ghalegaun-village-in-lamjung",
              alt: "The Gurung village of Ghalegaun on its ridge in Lamjung, with the Himalaya behind.",
              caption: "Ghalegaun in Lamjung. A homestay here puts a visitor inside a household for the tika.",
            },
          },
        ],
      },
      {
        h2: "In the Terai",
        blocks: [
          { h3: "9. The Terai towns" },
          { p: "On the southern plains the same festival looks entirely different. Here it is <strong>Durga Puja</strong>: neighbourhood committees build temporary pavilions housing painted clay figures of the goddess killing the buffalo demon, lit and decorated for nine nights, with fairs around them. On the tenth day the figures are carried in procession and immersed in a river or pond." },
          { p: "<strong>Janakpur</strong>, the old capital of Mithila and the city of Sita, is the most atmospheric place to see it, and is a stop on our [[trek:hindu-pilgrimage-tour|Hindu Pilgrimage Tour]]. Closer to the usual routes, the towns around Chitwan keep the festival in the same style, and it combines easily with a [[trek:chitwan-national-park-tour-3-days|Chitwan safari]] — see our [[post:chitwan-national-park-guide|Chitwan guide]]. October on the plains is warm and humid; go for the evenings." },
        ],
      },
      {
        h2: "Putting Them Together",
        blocks: [
          { p: "No one trip covers all nine, but four or five fit comfortably. This is the route we would suggest for the 2026 festival." },
          {
            table: {
              head: ["Date (2026)", "Place", "For"],
              rows: [
                ["Fri 16 Oct", "Kathmandu", "The Ason markets at their busiest"],
                ["Sat 17 Oct", "Kathmandu", "The Phulpati parade"],
                ["Sun 18 Oct", "Khokana, then Bhaktapur", "Shikali Jatra; Mohani in the squares"],
                ["Mon 19 Oct", "Drive to Gorkha by way of Manakamana", "The cable car and the temple; the roads are clear on this day"],
                ["Tue 20 Oct", "Gorkha Durbar; drive to Bandipur or Ghalegaun", "The palace on Maha Navami"],
                ["Wed 21 Oct", "Village homestay", "The tika"],
                ["Thu 22 Oct", "Pokhara", "The lake, the swings on the ridges, and on to a trek"],
              ],
            },
          },
          { p: "From Pokhara the natural continuation is a short trek — see [[post:annapurna-treks-during-dashain|Annapurna treks during Dashain]]. Photographers should also read [[post:photographing-dashain-in-nepal|photographing Dashain]], or let the [[trek:nepal-photography-tour|Nepal Photography Tour]] do the timing." },
        ],
      },
    ],
    faqs: [
      { question: "Where is the best place to celebrate Dashain in Nepal?", answer: "For public ceremony, Kathmandu on Phulpati and Maha Navami. For the most distinctive local tradition, Bhaktapur. For the festival as Nepalis live it, a village homestay on the tika day. Most visitors combine the first and the last." },
      { question: "Can tourists join Dashain celebrations?", answer: "Yes. Public events are open to all, and in homestays and with guides' families visitors are routinely given tika and included in the meal. The inner temple enclosures are restricted to Hindus at some sites." },
      { question: "Where can I see the Phulpati parade?", answer: "At Tundikhel in central Kathmandu on the afternoon of the seventh day, watched from the pavements around the parade ground. The Phulpati procession then goes to Hanuman Dhoka in Durbar Square." },
      { question: "Which village in Nepal does not celebrate Dashain?", answer: "Khokana, a Newar village south of Patan. Its people hold Shikali Jatra, a festival of masked dances for their own goddess, during the same days." },
      { question: "Is Dashain celebrated differently in the Terai?", answer: "Yes. On the plains it takes the form of Durga Puja, with clay figures of the goddess displayed in decorated pavilions for nine nights and immersed in water on the tenth day. Janakpur is the best-known place to see it." },
      { question: "Where can I stay with a family for Dashain?", answer: "In a community homestay village such as Ghalegaun in Lamjung or Sirubari in Syangja, both Gurung villages a few hours from Pokhara. Book ahead; the houses are also receiving their own relatives." },
      { question: "Is Bhaktapur or Kathmandu better for Dashain?", answer: "Kathmandu has the state ceremonies — the parade and the Taleju temple. Bhaktapur has the richer local ritual, the Navadurga dancers and an old city that stays lived-in through the festival. They are forty minutes apart, so see both." },
      { question: "Can I see Dashain celebrations on a trek?", answer: "Yes, in the Annapurna foothills and the lower valleys of most routes, where Gurung, Magar and Chhetri villages celebrate. The high Buddhist valleys such as the Khumbu and Upper Mustang largely do not." },
    ],
    relatedTreks: [
      "himalayan-village-tour",
      "bhaktapur-day-tour",
      "bungmati-khokana-village-tour",
      "kathmandu-pokhara-tour",
      "hindu-pilgrimage-tour",
      "nepal-photography-tour",
    ],
    tripsNote: "Tours that reach the places where the festival is public or easy to join.",
    relatedPosts: [
      "kathmandu-during-dashain",
      "bhaktapur-during-dashain-navadurga-and-mohani",
      "gorkha-and-manakamana-during-dashain",
      "pokhara-during-dashain",
      "dashain-tika-ceremony-guide-for-visitors",
      "himalayan-village-tour-guide",
    ],
    tags: ["Dashain", "Culture", "Festivals", "Nepal Travel", "Village Tours"],
    meta: {
      title: "Where to See Dashain in Nepal: 9 Best Places",
      description: "Nine places to experience Dashain in Nepal — Kathmandu, Bhaktapur, Gorkha, Manakamana, Pokhara, village homestays, Khokana and the Terai — and when to go.",
      keywords: "where to celebrate Dashain, Dashain celebrations Nepal, best place for Dashain, Dashain homestay, Khokana Shikali Jatra, Durga Puja Janakpur, Dashain Bhaktapur",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "gorkha-and-manakamana-during-dashain",
    title: "Gorkha and Manakamana During Dashain: Where the Phulpati Begins",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.gorkhaDurbar,
      alt: "Gorkha Durbar, the hilltop palace of the Shah kings, seen from the stone stairway below it.",
    },
    excerpt:
      "Two places on the road between Kathmandu and Pokhara belong to Dashain more than any others: the hilltop palace at Gorkha, from which the royal Phulpati is carried to the capital, and Manakamana, the wish-fulfilling temple reached by cable car. What each is, and what to expect during the festival.",
    intro: [
      { p: "Most visitors pass both without stopping. The Prithvi Highway runs along the Trishuli river beneath them; the cable car to Manakamana lifts off from the roadside, and the turning for Gorkha is forty minutes further west. For a traveller in the country at Dashain they are the two best detours on the whole road." },
      { p: "Gorkha is where the festival's state ceremony begins. Manakamana is where a large part of the country goes to ask the goddess for something. This guide covers both. Where they sit among the festival's other places is in [[post:where-to-see-dashain-celebrations-in-nepal|where to see Dashain celebrations in Nepal]]." },
    ],
    sections: [
      {
        h2: "Why Gorkha Matters to Dashain",
        blocks: [
          { p: "Gorkha was a small hill kingdom, one of dozens, until its king <strong>Prithvi Narayan Shah</strong> — born in the palace here in 1723 — set out to conquer the rest. By 1769 he had taken the Kathmandu valley, and the country he assembled is the Nepal on today's map. The Shah dynasty ruled it from Kathmandu until 2008, but Gorkha remained the ancestral seat, and its goddess the family's protector." },
          { p: "That is the reason for the Phulpati. Each Dashain a bundle of sacred plants is prepared at Gorkha and carried on foot to the old royal palace in Kathmandu, arriving on the seventh day — a ritual that ties the capital back to the place the kingdom came from. The monarchy has gone; the walk continues. What happens at the Kathmandu end is described in [[post:kathmandu-during-dashain|Kathmandu during Dashain]]." },
        ],
      },
      {
        h2: "Gorkha Durbar: The Palace on the Ridge",
        blocks: [
          { p: "The palace stands on a narrow ridge about 250 metres above Gorkha Bazaar, reached by a stone stairway of well over a thousand steps — an hour's steady climb, or a shorter one from the road that now goes partway up. It is a fort, a palace and a temple in one building of brick and carved timber, in the Newar style of the craftsmen who were brought from the valley to build it." },
          {
            ul: [
              "<strong>The Gorakhkali temple</strong>, at the western end, is the heart of the place and the focus of the festival here. Only its priests enter; worshippers and visitors stay outside.",
              "<strong>The palace wing</strong>, where Prithvi Narayan Shah was born, with latticed windows looking out over the hills.",
              "<strong>The cave shrine of Gorakhnath</strong>, the saint from whom the town and the Gurkha soldiers take their name, below the palace.",
              "<strong>The view</strong>: north to Manaslu, Himalchuli and Ganesh Himal on a clear morning; south across the ridges to the plains.",
            ],
          },
          { p: "Leather is not permitted inside the compound and photography is restricted near the temple. The building was damaged in the 2015 earthquake, whose epicentre was in this district, and has been under restoration since; parts may be scaffolded." },
          { p: "In the bazaar below, the <strong>Tallo Durbar</strong>, the lower palace, houses the Gorkha Museum and is worth an hour." },
        ],
      },
      {
        h2: "Gorkha During Dashain",
        blocks: [
          { p: "In the first week of the festival the palace is at its busiest of the year. Worshippers climb the steps from early morning, the temple receives sacrifices through the eighth and ninth days, and the town below is full of people home for the holiday. The departure of the Phulpati, a few days before the seventh, is a local occasion rather than a spectacle — priests, a small escort, drums — and the timing varies; ask in the bazaar the evening before." },
          {
            table: {
              head: ["Day", "At Gorkha"],
              rows: [
                ["Ghatasthapana to day 4", "Daily worship at the palace; the Phulpati is prepared and sets out for Kathmandu"],
                ["Phulpati", "Quiet here — the ceremony is now in the capital"],
                ["Maha Ashtami and Navami", "The busiest days at Gorakhkali; animal sacrifice; long queues on the steps"],
                ["Vijaya Dashami", "A family day; the town is closed and the palace calm"],
              ],
            },
          },
          { p: "If the sacrificial days are not for you, come before Phulpati or on the tika day. The background is in [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]]." },
        ],
      },
      {
        h2: "Manakamana: The Wish-Fulfilling Goddess",
        blocks: [
          { p: "<em>Mana</em> is the heart or mind; <em>kamana</em> is a wish. The goddess of this temple, a form of Bhagwati, is believed to grant what is asked of her, and people come from all over Nepal and from India to ask — for a child, an exam result, a visa, a recovery — and to return with thanks when it is granted. Its legend ties it to Gorkha: the goddess is said to have appeared as a queen of the Gorkha king Ram Shah in the seventeenth century." },
          { p: "The temple sits on a ridge at about 1,300 metres. Until 1998 reaching it meant a climb of several hours from the river. Now a <strong>cable car</strong> lifts off from Kurintar on the highway and covers the 2.8 km in about ten minutes, rising roughly a thousand metres over terraced hillsides. It was Nepal's first, and it carries goats as well as people, in separate carriers." },
          {
            figure: {
              image: DASHAIN.cableCarClouds,
              alt: "The Manakamana cable car line rising above a valley filled with morning cloud.",
              caption: "The Manakamana cable car above the Trishuli valley. It replaced a climb of several hours with a ride of ten minutes.",
            },
          },
          { p: "At the top a street of stalls selling offerings leads to a square with the two-tiered pagoda in the middle, rebuilt after the 2015 earthquake. Worshippers queue to pass the inner shrine; sacrifices are made behind the temple. On a clear day the Annapurna and Manaslu ranges line the northern horizon." },
          {
            figure: {
              image: DASHAIN.manakamana,
              alt: "The two-tiered pagoda of the Manakamana temple with its gilded roofs, in the square at the top of the ridge.",
              caption: "The Manakamana temple. At Dashain the queue to pass the shrine can take several hours.",
            },
          },
        ],
      },
      {
        h2: "Manakamana During Dashain",
        blocks: [
          { p: "Dashain is the temple's peak season. Families stop here on the way home to their villages, and Maha Ashtami draws the largest crowd of the year." },
          {
            ul: [
              "<strong>Expect to queue twice</strong>: for the cable car at the bottom, and for the shrine at the top. On the eighth day each can take two hours or more.",
              "<strong>Go early or go on a quiet day.</strong> The first cars of the morning, or the days before Phulpati, are far easier.",
              "<strong>The cable car pauses for a lunch break</strong> in the middle of the day; check the hours when you buy the ticket.",
              "<strong>Non-Hindus may enter the square</strong> and watch, but not the inner shrine.",
              "<strong>Sacrifice is visible</strong> behind the temple, heavily so on the eighth and ninth days.",
              "<strong>Leave time for the highway.</strong> In the days before Phulpati the road below is as slow as the queue above.",
            ],
          },
        ],
      },
      {
        h2: "Getting There",
        blocks: [
          {
            table: {
              head: ["From", "To Manakamana (Kurintar)", "To Gorkha Bazaar"],
              rows: [
                ["Kathmandu", "About 105 km; 3 hours", "About 140 km; 5 hours"],
                ["Pokhara", "About 95 km; 2.5 hours", "About 110 km; 3 hours"],
                ["Between the two", "—", "About 45 km; 1.5 hours"],
              ],
              note: "Times are for a normal day. In the peak outbound and return days of the festival, add half again — see [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]].",
            },
          },
          { p: "Both are easiest with a private vehicle, which can wait while you go up. Tourist buses between Kathmandu and Pokhara pass the cable car station but do not wait. Gorkha has simple hotels in the bazaar; staying a night lets you climb to the palace at dawn, when the mountains are clear and the steps are empty." },
        ],
      },
      {
        h2: "Fitting Them Into a Trip",
        blocks: [
          {
            ul: [
              "<strong>As a break on the Kathmandu–Pokhara drive.</strong> Manakamana adds three hours; Gorkha needs a night. Either can be built into our [[trek:kathmandu-pokhara-tour|Kathmandu & Pokhara Tour]] or the [[trek:best-of-nepal-tour|Best of Nepal Tour]].",
              "<strong>With a day on the river.</strong> The put-in for [[trek:trishuli-river-rafting-1-day|Trishuli rafting]] is a short drive from the cable car.",
              "<strong>With a village stay.</strong> Bandipur is an hour beyond the Gorkha turning, and Ghalegaun a few hours north — see the [[trek:himalayan-village-tour|Himalayan Village Tour]].",
              "<strong>Before a Manaslu trek.</strong> The [[trek:manaslu-circuit-trek|Manaslu Circuit]] and the [[trek:lower-manaslu-trek|Lower Manaslu trek]] both lie in Gorkha district; a night in the town on the way in adds the palace without adding a day of driving.",
              "<strong>As part of a pilgrimage.</strong> Manakamana sits naturally with Pashupatinath and Muktinath on a [[trek:hindu-pilgrimage-tour|Hindu Pilgrimage Tour]] — see the [[post:hindu-pilgrimage-tour-guide|pilgrimage guide]].",
            ],
          },
        ],
      },
    ],
    faqs: [
      { question: "Why is the Phulpati brought from Gorkha?", answer: "Gorkha was the ancestral kingdom of the Shah dynasty, which unified Nepal in the eighteenth century and ruled from Kathmandu until 2008. Bringing the Phulpati from Gorkha to the royal palace in the capital each Dashain honoured that origin, and the tradition has continued since the monarchy ended." },
      { question: "How do I get to Manakamana temple?", answer: "By cable car from Kurintar on the Prithvi Highway, about three hours from Kathmandu and two and a half from Pokhara. The ride takes around ten minutes. The old footpath from the river still exists and takes three to four hours." },
      { question: "How long is the queue at Manakamana during Dashain?", answer: "On the busiest day, Maha Ashtami, the wait for the cable car and for the shrine can each exceed two hours. In the days before Phulpati and first thing in the morning it is far shorter." },
      { question: "Can non-Hindus visit Manakamana?", answer: "Yes. Anyone can ride the cable car and enter the temple square. The inner shrine is for Hindu worshippers." },
      { question: "How hard is the climb to Gorkha Durbar?", answer: "It is a stone stairway of well over a thousand steps rising about 250 metres from the bazaar, taking around an hour at a steady pace. A road now reaches a point partway up, which shortens the climb considerably." },
      { question: "Is Gorkha worth visiting?", answer: "Yes, for the palace, the views of Manaslu and Himalchuli, and the history: it is where modern Nepal began. It sees few foreign visitors and makes a good overnight stop between Kathmandu and Pokhara." },
      { question: "Is there animal sacrifice at Manakamana and Gorkha?", answer: "Yes, at both, particularly on the eighth and ninth days of Dashain. At Manakamana it takes place behind the temple; at Gorkha at the Gorakhkali temple. Visit before Phulpati or on the tika day to avoid it." },
      { question: "Can I visit Gorkha and Manakamana in one day?", answer: "From Kathmandu or Pokhara it is possible on a normal day with an early start, but rushed, and not realistic in festival traffic. One night in Gorkha Bazaar makes it comfortable." },
    ],
    relatedTreks: [
      "kathmandu-pokhara-tour",
      "himalayan-village-tour",
      "trishuli-river-rafting-1-day",
      "hindu-pilgrimage-tour",
      "manaslu-circuit-trek",
    ],
    tripsNote: "Trips along the Kathmandu–Pokhara road that can take in the palace and the cable car.",
    relatedPosts: [
      "where-to-see-dashain-celebrations-in-nepal",
      "kathmandu-during-dashain",
      "fifteen-days-of-dashain-explained",
      "hindu-pilgrimage-tour-guide",
      "kathmandu-pokhara-tour-guide",
      "travelling-around-nepal-during-dashain",
    ],
    tags: ["Dashain", "Gorkha", "Manakamana", "Pilgrimage", "Culture"],
    meta: {
      title: "Gorkha and Manakamana During Dashain: Visitor Guide",
      description: "Gorkha Durbar, where the Dashain Phulpati sets out, and the Manakamana temple and cable car: what to see, festival crowds and how to get there.",
      keywords: "Gorkha Durbar, Manakamana temple, Manakamana cable car, Phulpati Gorkha, Dashain Gorkha, Gorkha palace Nepal, Manakamana Dashain queue",
    },
  },
];
