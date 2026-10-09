import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 5: moving around the country during the festival, and
 * what the two cities every visitor passes through are like while it is on.
 */
export const dashainE: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "travelling-around-nepal-during-dashain",
    title: "Getting Around Nepal During Dashain: Buses, Flights and Highways",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: "mardi-treks/mardi-himal-trek/mardi-himal-trek-04-bus-journey-from-kathmandu-to-pokhara-nepal-feb-2013-8595055",
      alt: "A view from the bus on the road between Kathmandu and Pokhara.",
    },
    excerpt:
      "Dashain is the largest movement of people in Nepal's year: the capital empties outward in the week before the tika and refills in the week after. When the highways jam, which days are clear, how buses, jeeps and domestic flights behave, and how to reach a trailhead through it all.",
    intro: [
      { p: "In the week before Phulpati, well over a million people leave the Kathmandu valley — recent traffic-police counts put it at two million or more. They go by bus, microbus, motorbike and anything else with wheels, on a road network that has three practical exits. A week later they all come back." },
      { p: "For a visitor this is the part of Dashain that needs the most thought, and it is entirely a question of timing. The same road that takes eleven hours on the Thursday before the festival takes five on the tika day. This guide is about choosing the right day. The festival dates are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
    ],
    sections: [
      {
        h2: "The Shape of the Migration",
        blocks: [
          { p: "Three highways carry almost everything: the <strong>Prithvi Highway</strong> west toward Pokhara and, via Mugling, south to Chitwan and the Terai; the <strong>Araniko and BP highways</strong> east toward Dolakha, Sindhuli and the eastern hills; and the road north to Trishuli and Langtang. All of them leave the valley over a rim of hills on roads with few places to pass." },
          { p: "The flow has a direction. Before the festival it runs out of Kathmandu, and to a lesser extent out of Pokhara, toward the villages. After the tika it reverses. If you travel <em>with</em> it you sit in it. If you travel <em>against</em> it — into Kathmandu while everyone leaves, out while they return — the road ahead is nearly empty." },
          {
            figure: {
              image: "mardi-treks/trishuli-river-rafting-1-day/trishuli-river-rafting-1-day-05-trishuli-river-at-malekhu",
              alt: "The Trishuli river at Malekhu, beside the Prithvi Highway west of Kathmandu.",
              caption: "The Trishuli at Malekhu. The Prithvi Highway follows this river out of the Kathmandu valley, and in the week before Dashain most of the capital is on it.",
            },
          },
        ],
      },
      {
        h2: "When the Roads Are Worst",
        blocks: [
          {
            table: {
              head: ["Period", "2026 dates", "Leaving Kathmandu", "Entering Kathmandu"],
              rows: [
                ["Early build-up", "11 – 13 October", "Busy", "Normal"],
                ["Peak exodus", "14 – 17 October", "Very slow; jams at the valley rim and at Mugling", "Clear"],
                ["Main festival days", "18 – 21 October", "Clear; almost no public transport on the 21st", "Clear"],
                ["First return", "22 – 24 October", "Clear", "Slow, building each day"],
                ["Peak return", "25 – 27 October", "Clear", "Very slow"],
                ["Back to normal", "From 28 October", "Normal", "Normal"],
              ],
              note: "The same pattern, at lower volume, applies to Pokhara.",
            },
          },
          { p: "Two rules follow. If you must drive out of Kathmandu before the festival, go before the 14th or leave at four in the morning. And if you are returning from a trek in the last week of October, allow a full day for a journey that normally takes six hours." },
        ],
      },
      {
        h2: "Buses",
        blocks: [
          { p: "<strong>Tourist buses</strong> between Kathmandu and Pokhara, and to Chitwan and Lumbini, keep running on most days of the festival, with seats that must be reserved. They are slower than usual in the peak days because they share the road. Most do not run on the tika day." },
          { p: "<strong>Local buses and microbuses</strong> are a different matter. Advance tickets for the days before Phulpati go on sale about two weeks ahead and sell out; vehicles are overloaded; and on the tika day and the day before there are hardly any, because the drivers are at home. For the trailhead routes that only local buses serve — Syabrubesi, Dhunche, Soti Khola, Jiri — plan on a private vehicle instead." },
          { p: "<strong>Night buses</strong> are best avoided at any time, and especially now. Drivers are working long shifts on crowded roads, and the festival period sees more road accidents than any other fortnight of the year." },
        ],
      },
      {
        h2: "Private Vehicles and Jeeps",
        blocks: [
          { p: "A car or jeep booked in advance is the dependable way to move by road during Dashain. It leaves when you choose, which lets you use the quiet hours, and it will run on days when buses do not. Expect to pay more than the usual rate for journeys on the tika day and the day either side: the driver is giving up his festival, and the vehicle comes back empty." },
          { p: "Arrange it with the trip rather than on arrival. A jeep found on the morning of the eighth day costs whatever its owner decides." },
        ],
      },
      {
        h2: "Domestic Flights",
        blocks: [
          { p: "Flying removes the problem, and for the long legs it is worth the fare. Flights operate every day of the festival, the tika day included." },
          {
            table: {
              head: ["Route", "Flight time", "By road", "At Dashain"],
              rows: [
                ["Kathmandu – Pokhara", "25 minutes", "6 – 8 hours; 10 or more in festival traffic", "Sells out days ahead; book with the trip"],
                ["Kathmandu – Bharatpur (Chitwan)", "20 minutes", "5 – 6 hours", "Full in the outbound week"],
                ["Kathmandu – Bhairahawa (Lumbini)", "35 minutes", "8 – 9 hours", "Full in the outbound week"],
                ["Manthali – Lukla", "20 minutes", "No road", "Peak season; the drive to Manthali is the weak link"],
                ["Pokhara – Jomsom", "20 minutes", "7 – 8 hours", "Full; morning flights only, weather permitting"],
              ],
            },
          },
          { p: "Seats are the constraint. Nepalis flying home fill the outbound flights before Phulpati and the return flights after the tika, and fares sit at the top of the permitted range. Weather still applies: mountain flights to Lukla and Jomsom are cancelled in cloud and wind, festival or not. Our [[post:domestic-flights-in-nepal-for-trekkers|domestic flights guide]] covers baggage limits, delays and which side to sit on." },
        ],
      },
      {
        h2: "Reaching the Trailheads",
        blocks: [
          {
            table: {
              head: ["Trek", "Trailhead", "From Kathmandu", "Dashain advice"],
              rows: [
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "Lukla, via Manthali airport", "4 – 5 hours' drive, then a flight", "The road east is a main exodus route. Leave earlier than usual or sleep in Manthali — see our [[post:lukla-flight-guide|Lukla flight guide]]"],
                ["[[trek:langtang-valley-trek|Langtang]]", "Syabrubesi", "7 – 8 hours", "Private jeep; avoid the tika day"],
                ["[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "Machha Khola", "8 – 9 hours", "Private jeep; the Prithvi Highway section is the slow part"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "Besisahar and beyond", "6 – 7 hours", "Leave before the 14th or during the main festival days"],
                ["[[trek:poonhill-trek|Poon Hill]], [[trek:annapurna-base-camp-trek|Annapurna Base Camp]], [[trek:mardi-himal-trek|Mardi Himal]]", "From Pokhara: 1 – 3 hours", "Fly to Pokhara", "Book the jeep from Pokhara with the trek"],
                ["[[trek:upper-mustang-trek|Upper Mustang]]", "Jomsom", "Fly via Pokhara, or drive", "Flights full; the road up the Kali Gandaki is quiet"],
              ],
            },
          },
          { p: "A helicopter avoids the road altogether on the Everest side — see the [[trek:kathmandu-to-lukla-helicopter-flight|Kathmandu to Lukla helicopter flight]] — and for a party of four or five the cost per seat is less than people expect. More in [[post:trekking-in-nepal-during-dashain|trekking in Nepal during Dashain]]." },
        ],
      },
      {
        h2: "In the Cities",
        blocks: [
          { p: "Taxis and ride-hailing motorbikes are plentiful before the festival and scarce on the tika day, when a driver who is working at all will name his price. Hotels can book a car the evening before. For airport transfers on the main festival days, arrange the pickup in advance rather than relying on the rank." },
          { p: "The compensation is that Kathmandu without traffic is a different city: Thamel to Boudhanath in fifteen minutes, and streets you can walk in the middle of. See [[post:kathmandu-during-dashain|Kathmandu during Dashain]]." },
        ],
      },
      {
        h2: "Breaking the Journey",
        blocks: [
          { p: "If the road is unavoidable, make it a feature. The Kathmandu–Pokhara drive passes the put-in for [[trek:trishuli-river-rafting-1-day|rafting on the Trishuli]], the cable car to [[post:gorkha-and-manakamana-during-dashain|Manakamana]] and the hill town of Bandipur; a night in any of them splits a long day in two and takes you off the highway for its worst hours. Our [[trek:kathmandu-pokhara-tour|Kathmandu & Pokhara Tour]] and [[trek:best-of-nepal-tour|Best of Nepal Tour]] are built with these stops and can swap a road leg for a flight." },
        ],
      },
      {
        h2: "If You Must Travel on the Tika Day",
        blocks: [
          {
            ul: [
              "<strong>Fly if a flight exists.</strong> Airports run normally and the roads to them are empty.",
              "<strong>Book a private vehicle days ahead</strong> and confirm it the evening before.",
              "<strong>Carry food and water.</strong> Highway restaurants are closed.",
              "<strong>Fill the tank beforehand.</strong> Not every fuel station opens.",
              "<strong>Expect an easy drive.</strong> It is the emptiest road day of the year — the difficulty is finding the vehicle, not the journey.",
            ],
          },
          { p: "What else runs that day is listed in [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is it hard to travel in Nepal during Dashain?", answer: "On certain days, yes. The roads out of Kathmandu are jammed in the four or five days before Phulpati and the roads back in are jammed after the tika. On the main festival days themselves the roads are empty but public transport is scarce." },
      { question: "Do buses run during Dashain?", answer: "Tourist buses run on most days except the tika day. Local buses are overcrowded before the festival and almost absent on the tika day and the day before. Reserve tourist-bus seats well ahead." },
      { question: "Do domestic flights operate on Dashain tika day?", answer: "Yes. Airlines fly every day of the festival. Seats sell out early in the days around it, so book as soon as your dates are fixed." },
      { question: "How long does Kathmandu to Pokhara take during Dashain?", answer: "By road, six to eight hours normally and ten or more in the peak outbound and return days. By air, twenty-five minutes. On the main festival days the road is clear." },
      { question: "When should I book transport for Dashain?", answer: "Domestic flights as soon as the trip is confirmed. Private vehicles with the trip booking. Tourist-bus seats at least a week ahead. Nothing in the festival fortnight should be left to the day before." },
      { question: "Is it safe to take a night bus during Dashain?", answer: "We advise against it. Festival traffic, long driver shifts and overloaded vehicles make this the most accident-prone period of the year on Nepal's highways. Travel by day, or fly." },
      { question: "How do I get to Lukla during Dashain?", answer: "Flights leave from Manthali in Ramechhap, four to five hours from Kathmandu. In the days before Phulpati the road is busier than usual, so depart earlier or stay the night in Manthali. A helicopter from Kathmandu avoids the drive." },
      { question: "Are taxis available in Kathmandu on tika day?", answer: "Few. Ask your hotel to book a car the evening before for anything time-critical, especially an airport transfer." },
    ],
    relatedTreks: [
      "kathmandu-pokhara-tour",
      "kathmandu-to-lukla-helicopter-flight",
      "trishuli-river-rafting-1-day",
      "best-of-nepal-tour",
      "poonhill-trek-from-pokhara",
    ],
    tripsNote: "Trips built to use flights for the long legs and to break the highway where it is worth stopping.",
    relatedPosts: [
      "domestic-flights-in-nepal-for-trekkers",
      "lukla-flight-guide",
      "dashain-dates-calendar-for-travellers",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "trekking-in-nepal-during-dashain",
      "kathmandu-pokhara-tour-guide",
    ],
    tags: ["Dashain", "Transport", "Trip Planning", "Nepal Travel"],
    meta: {
      title: "Getting Around Nepal During Dashain: Transport Guide",
      description: "Which days Nepal's highways jam at Dashain, how buses, jeeps and domestic flights run, and how to reach Lukla, Pokhara and the trailheads.",
      keywords: "Dashain transport Nepal, Dashain bus tickets, Kathmandu Pokhara Dashain traffic, domestic flights Dashain, Nepal highway traffic festival, travel Nepal October",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kathmandu-during-dashain",
    title: "Kathmandu During Dashain: What the City Is Like and What to See",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.hanumanDhokaNight,
      alt: "The temples of Kathmandu Durbar Square and the Hanuman Dhoka palace lit at night.",
    },
    excerpt:
      "Kathmandu has two Dashains. Before Phulpati it is the busiest it gets all year; after it, the city empties and the mountains appear over the rooftops. Where to be for the parade, the one day the Taleju temple opens, the kites — and what to do with a capital that has no traffic.",
    intro: [
      { p: "Most of what Kathmandu's residents call home is somewhere else: a village in Gorkha, a town in the Terai, a hillside in Ramechhap. At Dashain they go there. The city that is left behind for four or five days is one visitors never otherwise see — streets you can cross without looking, air you can see through, and the old Newar neighbourhoods, whose people <em>are</em> from here, keeping the festival in their own way." },
      { p: "This guide follows the city through the festival and says where to be on each of the public days. What stays open is covered in [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]]." },
    ],
    sections: [
      {
        h2: "A City in Two Halves",
        blocks: [
          { p: "<strong>Before Phulpati</strong>, Kathmandu is at full stretch. The old bazaars of Ason, Indra Chowk and New Road are packed with families buying clothes, spices, kites and gifts. Goat markets appear on open ground at the edge of the city. Bus parks are chaotic. If you enjoy a crowd, this is the week for a walk through the old town — our [[trek:secret-food-tour-in-kathmandu|food tour through Ason]] is never livelier." },
          { p: "<strong>From Maha Ashtami</strong>, the shutters come down one street at a time. By the tika day Thamel's lanes are half closed, the ring road is empty, and from the rooftops you can see the snow peaks to the north that the dry-season haze usually hides. It lasts until about the third day after the tika." },
        ],
      },
      {
        h2: "Day by Day in the City",
        blocks: [
          {
            table: {
              head: ["Day", "2026 date", "Where to be", "What happens"],
              rows: [
                ["Days 2 – 6", "12 – 16 Oct", "Ason, Indra Chowk, the rooftops", "Festival shopping; kites over the old city"],
                ["Phulpati", "Sat 17 Oct", "Tundikhel, then Hanuman Dhoka", "Army parade and gun salutes; the Phulpati is carried into the old palace"],
                ["Maha Ashtami", "Sun 18 Oct", "Goddess temples; or Bhaktapur", "Sacrifices and worship; Newar family feasts"],
                ["Maha Navami", "Tue 20 Oct", "Kathmandu Durbar Square", "The Taleju temple opens; vehicles and tools are blessed everywhere"],
                ["Vijaya Dashami", "Wed 21 Oct", "With a family; or walking the empty city", "The tika; sword processions in the old neighbourhoods in the evening"],
                ["Days after", "22 – 25 Oct", "Boudhanath, Swayambhunath, the valley rim", "Quiet city, clear views; shops reopening"],
              ],
            },
          },
        ],
      },
      {
        h2: "Phulpati: The Parade and the Procession",
        blocks: [
          { p: "On the seventh day the sacred bundle that has been carried on foot from Gorkha reaches the capital. It is received by officials and priests, and taken in procession through the old city to the Dashain house inside <strong>Hanuman Dhoka</strong>, the palace of the Malla and Shah kings on Durbar Square." },
          { p: "Meanwhile the Nepal Army holds its Phulpati parade on <strong>Tundikhel</strong>, the open ground in the centre of the city: massed ranks in dress uniform, military bands, and volleys of ceremonial gunfire that can be heard across the valley. The president and senior officials attend, as the king once did." },
          {
            ul: [
              "The parade is in the afternoon. Tundikhel itself is closed to the public; people watch from the pavements around its perimeter. Arrive an hour early.",
              "Security is tight. Carry identification and expect bag checks.",
              "Durbar Square, where the procession ends, is the better place for a camera — see [[post:photographing-dashain-in-nepal|photographing Dashain]].",
              "The gunfire is loud and sudden. Warn children.",
            ],
          },
          { p: "The other end of the journey is described in [[post:gorkha-and-manakamana-during-dashain|Gorkha and Manakamana during Dashain]]." },
        ],
      },
      {
        h2: "Maha Navami: The Day the Taleju Temple Opens",
        blocks: [
          { p: "The <strong>Taleju temple</strong> is the tallest temple in Kathmandu's old city, raised on a stepped plinth at the north-east corner of Durbar Square in the sixteenth century for the royal goddess of the Malla kings. For 364 days a year its gate is locked. On Maha Navami it opens." },
          { p: "From before dawn a queue of worshippers forms through the square and down the surrounding streets, each carrying a plate of offerings. The temple is open to Hindus; other visitors are not normally admitted, and the place to be is the square itself, where the queue, the flower sellers and the open gate are the sight. It is the one morning of the year the building looks inhabited." },
          {
            figure: {
              image: DASHAIN.taleju,
              alt: "The three-tiered Taleju temple on its stepped plinth above the shops of Kathmandu Durbar Square.",
              caption: "The Taleju temple, Kathmandu Durbar Square. Its gate opens to worshippers on one day a year: Maha Navami.",
            },
          },
          { p: "The same day is Vishwakarma's: every bus, taxi and motorbike still in the city wears a garland and a streak of red, and workshop tools are laid out for worship. A [[trek:kathmandu-day-tour|Kathmandu day tour]] on Navami sees both, and the square's other monuments are described in our [[post:kathmandu-valley-unesco-sites-guide|guide to the valley's UNESCO sites]]." },
        ],
      },
      {
        h2: "The Old Palace and Its Dashain",
        blocks: [
          { p: "Hanuman Dhoka has been the centre of the state's Dashain for centuries. The courtyard known as the <em>Kot</em> is where the army offers its sacrifices on the night of the eighth day, and the Dashain house inside the palace is where the Phulpati rests. A British resident's surgeon painted the scene in the 1850s, and the buildings in his picture are the ones standing today." },
          {
            figure: {
              image: DASHAIN.kot1856,
              alt: "A nineteenth-century watercolour of soldiers and crowds gathered in the Kot courtyard at Hanuman Dhoka in Kathmandu during Dashain.",
              caption: "The Kot at Kathmandu during Dashain, painted by Henry Ambrose Oldfield in the 1850s.",
            },
          },
          { p: "The Newar community of the old city keeps the festival as <em>Mohani</em>. On the evening of the tenth day, groups from some neighbourhoods walk in procession carrying swords — a rite of victory that is easy to miss and worth asking your guide about. Bhaktapur's version, with its masked dancers, is the fuller spectacle: see [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]]." },
        ],
      },
      {
        h2: "Temples of the Goddess",
        blocks: [
          { p: "Dashain belongs to Durga, and her temples carry the festival in the city: Bhadrakali beside Tundikhel, Shobha Bhagwati on the Bishnumati, Naxal Bhagwati, Maitidevi, Sankata in the old town, and Guhyeshwari near Pashupatinath. All have queues from early morning on the eighth and ninth days, and animal sacrifice at most of them." },
          { p: "The best known is <strong>Dakshinkali</strong>, in a wooded gorge an hour south of the city, which is at its most intense on these two days. Go if you want to understand the festival, and read [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]] first. Our [[trek:pharping-dakshinkali-tour|Pharping and Dakshinkali tour]] visits it with the Buddhist caves of Pharping nearby; the [[post:pharping-dakshinkali-tour-guide|guide to that day]] has the detail. Boudhanath and Swayambhunath, being Buddhist, have none of it." },
        ],
      },
      {
        h2: "What to Do With an Empty City",
        blocks: [
          {
            ul: [
              "<strong>Walk the old town.</strong> Thamel to Durbar Square by way of Ason takes forty minutes and is, for once, a pleasure. The shrines are busy even when the shops are shut.",
              "<strong>See the seven heritage sites in a day.</strong> With no traffic it is comfortable rather than rushed — [[trek:seven-world-heritage-kathmandu-day-tour|seven World Heritage sites tour]].",
              "<strong>Go to the rim for the mountains.</strong> The air is the clearest of the year: [[trek:nagarkot-sunrise-tour|Nagarkot at sunrise]], or the [[trek:chandragiri-cable-car-tour|Chandragiri cable car]], which is busy with local families.",
              "<strong>Take the mountain flight.</strong> Clear mornings and no queue on the airport road — [[trek:everest-mountain-flight|Everest mountain flight]].",
              "<strong>Walk the kora at Boudhanath</strong> at dusk. It is unchanged by the festival and a good antidote to it.",
              "<strong>Cross to Patan.</strong> Its Durbar Square and museum courtyards are quiet — [[trek:patan-day-tour|Patan day tour]].",
              "<strong>Visit Khokana.</strong> This Newar village south of Patan does not keep Dashain; it holds its own festival, Shikali Jatra, with masked dances in the same days — [[trek:bungmati-khokana-village-tour|Bungamati and Khokana tour]].",
            ],
          },
          { p: "If you carry a camera, the [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] is at its best this week: dawn at Boudhanath, the Navami queue, and Bhaktapur's squares without the crowds." },
        ],
      },
      {
        h2: "Kites and Rooftops",
        blocks: [
          { p: "Kite flying is the city's own Dashain custom. From late September the sky above the old neighbourhoods fills in the afternoons, flown from flat rooftops by boys, their fathers and increasingly their sisters, with the cry of <em>chet!</em> when one line cuts another. Any rooftop restaurant near Durbar Square or in Patan gives a view. The tradition is covered in [[post:dashain-swings-and-kites|Dashain swings and kites]]." },
        ],
      },
      {
        h2: "Staying and Eating",
        blocks: [
          { p: "Stay in Thamel, Boudha or Patan, where hotels and enough restaurants remain open. Book the tika-day dinner at your hotel or confirm that your chosen restaurant is opening. Draw cash before Phulpati. And if a hotel owner or guide invites you home for the tika, go — it is the part of Dashain no itinerary can arrange. See [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]] and, for the first days after landing, [[post:arriving-in-kathmandu-first-48-hours|your first 48 hours in Kathmandu]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is Kathmandu empty during Dashain?", answer: "For about five days, from Maha Ashtami to a few days after the tika, much of the population is away in home villages. Traffic all but disappears and many local shops close. Hotels, heritage sites and a good share of Thamel stay open." },
      { question: "Where is the Phulpati parade in Kathmandu?", answer: "At Tundikhel, the parade ground in the centre of the city, on the afternoon of the seventh day. The public watches from the surrounding pavements. The Phulpati procession itself ends at Hanuman Dhoka in Durbar Square." },
      { question: "When does the Taleju temple open?", answer: "Once a year, on Maha Navami, the ninth day of Dashain — Tuesday 20 October in 2026. Worshippers queue from before dawn. Non-Hindu visitors are not normally admitted but can watch from Durbar Square." },
      { question: "Is Thamel open during Dashain?", answer: "Largely. Hotels are open throughout. Many restaurants and shops keep shorter hours, and the tika day is the quietest, with some places opening only in the evening." },
      { question: "What is there to do in Kathmandu on tika day?", answer: "Walk the empty old city, visit Boudhanath or Swayambhunath, take the morning mountain flight, or go up to the valley rim for the views. If you are invited to a family tika, that is the best use of the day." },
      { question: "Can I visit Kathmandu Durbar Square during Dashain?", answer: "Yes. The square and its ticket counters are open every day. It is especially worth visiting on Phulpati and Maha Navami." },
      { question: "Where can I see kite flying in Kathmandu?", answer: "From any rooftop in the old city in the afternoons before and during Dashain. Rooftop restaurants around Kathmandu Durbar Square, Patan Durbar Square and Bhaktapur give good views." },
      { question: "Is it worth staying in Kathmandu for Dashain or should I leave?", answer: "Stay for Phulpati and Maha Navami if public ceremony interests you. For the tika itself a village homestay or a family invitation shows more. Many visitors do the first in the city and the second outside it." },
    ],
    relatedTreks: [
      "kathmandu-day-tour",
      "seven-world-heritage-kathmandu-day-tour",
      "kathmandu-photography-tour",
      "pharping-dakshinkali-tour",
      "bungmati-khokana-village-tour",
      "nagarkot-sunrise-tour",
    ],
    tripsNote: "Day tours that work with the festival — and with a city that has no traffic.",
    relatedPosts: [
      "bhaktapur-during-dashain-navadurga-and-mohani",
      "where-to-see-dashain-celebrations-in-nepal",
      "what-is-open-and-closed-in-nepal-during-dashain",
      "kathmandu-valley-unesco-sites-guide",
      "arriving-in-kathmandu-first-48-hours",
      "photographing-dashain-in-nepal",
    ],
    tags: ["Dashain", "Kathmandu", "Culture", "City Guide", "Festivals"],
    meta: {
      title: "Kathmandu During Dashain: What to See and Do",
      description: "Kathmandu during Dashain: the Phulpati parade, the one day the Taleju temple opens, kites, goddess temples, and what to do in a city with no traffic.",
      keywords: "Kathmandu during Dashain, Phulpati parade Tundikhel, Taleju temple opening, Dashain in Kathmandu, Kathmandu October, Hanuman Dhoka Dashain, Kathmandu festival",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "pokhara-during-dashain",
    title: "Pokhara During Dashain: Lakeside, Temples and Village Swings",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.bindhyabasini,
      alt: "The white Bindhyabasini temple on its hilltop in the old bazaar of Pokhara.",
    },
    excerpt:
      "Pokhara is where much of Nepal goes on holiday once the tika is done. Before it, the city is quiet and festive; after it, Lakeside fills. The Bindhyabasini temple, the island shrine on the lake, swings in the villages above, and how to time a trek from here around the rush.",
    intro: [
      { p: "Kathmandu empties for Dashain. Pokhara does the opposite: it empties a little for the tika and then fills to the brim. For Nepali families and groups of friends with a week's holiday, the lake, the mountains and the short treks behind them are the obvious place to go, and the days after the tenth are the busiest Lakeside sees all year." },
      { p: "That makes Pokhara a good place to spend the festival and a place to book ahead. This guide covers what the city offers during Dashain and how to use it as a base. The town in general is covered in our [[post:pokhara-travel-guide|Pokhara travel guide]]." },
    ],
    sections: [
      {
        h2: "The Festival in Pokhara",
        blocks: [
          { p: "Pokhara is a Hindu town in Gurung and Magar country, and it keeps Dashain fully. The old bazaar, north of the lake, is where the festival is felt: markets busy in the first week, the main temple crowded on the eighth and ninth days, kites over the rooftops. Lakeside, the tourist strip, is a little apart from it — the restaurants stay open and the only sign may be a tika on your waiter." },
          { p: "The villages on the ridges above are where it looks best. Every one has a swing, and from Sarangkot or Dhampus the backdrop is the whole Annapurna range." },
        ],
      },
      {
        h2: "Bindhyabasini Temple",
        blocks: [
          { p: "The city's oldest and most important temple stands on a wooded hillock in the old bazaar, a white shrine dedicated to a form of the goddess Durga. That makes it the centre of Pokhara's Dashain. On Maha Ashtami and Maha Navami a queue of worshippers winds up the steps from first light, and goats, ducks and chickens are sacrificed in the enclosure beside the shrine." },
          { p: "On other days of the festival it is calmer: families bringing offerings, bells, a wide view north to Machhapuchhre from the terrace. Visit early in the morning. If you would rather not see sacrifice, avoid the eighth and ninth days — the background is in [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]]. The temple is a stop on our [[trek:pokhara-day-tour|Pokhara day tour]]." },
        ],
      },
      {
        h2: "Tal Barahi and the Lake",
        blocks: [
          { p: "The two-tiered pagoda on the small island in Phewa Lake is dedicated to Barahi, another form of the goddess, and is reached only by boat. Through Dashain the boats shuttle steadily from the Lakeside jetty carrying families with offerings, and the priest gives tika to those who come. It is the gentlest way to see the festival's religious side: ten minutes on the water, a small crowded shrine, and the mountains reflected behind it on a still morning." },
          {
            figure: {
              image: "mardi-treks/pokhara-day-tour/pokhara-day-tour-06-tika-ceromony-at-tal-barahi-temple-or-lake-barahi-01",
              alt: "Worshippers receiving tika at the Tal Barahi temple on its island in Phewa Lake, Pokhara.",
              caption: "Tika at the Tal Barahi temple. The island shrine in Phewa Lake is busy with families throughout the festival.",
            },
          },
        ],
      },
      {
        h2: "Swings and Villages Above the Lake",
        blocks: [
          { p: "The best Dashain outing from Pokhara needs no temple. Drive or walk up to one of the ridge villages — <strong>Sarangkot</strong>, <strong>Kaskikot</strong>, <strong>Dhampus</strong>, <strong>Astam</strong> — and you will find a bamboo swing on the village ground, children queuing for it, houses freshly painted, and on the tenth day a great deal of coming and going between them. Visitors who stop to watch are usually handed a turn on the swing." },
          { p: "Sarangkot at sunrise is the classic, and on a Dashain morning the light on Annapurna South and Machhapuchhre comes with kites going up below you — [[trek:pokhara-day-tour-with-sarangkot-sunrise|Pokhara day tour with Sarangkot sunrise]]. The [[trek:five-himalayan-viewpoints-tour-from-pokhara|five viewpoints tour]] links several ridges in a day. See [[post:dashain-swings-and-kites|Dashain swings and kites]] for what you are watching being built." },
          { p: "For the tika itself, a Gurung homestay puts you inside a household for it. [[trek:sirubari-village-tour|Sirubari]] in Syangja and [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] in Lamjung are both a few hours from Pokhara — see our guides to [[post:sirubari-village-tour-guide|Sirubari]] and [[post:ghalegaun-ghanpokhara-village-tour-guide|Ghalegaun]]." },
        ],
      },
      {
        h2: "Day by Day",
        blocks: [
          {
            table: {
              head: ["Period", "2026 dates", "Pokhara"],
              rows: [
                ["Before Phulpati", "11 – 16 October", "Normal October: busy with trekkers, old bazaar lively"],
                ["Phulpati to Navami", "17 – 20 October", "Bindhyabasini crowded; Lakeside open and relaxed; trails quieter than usual"],
                ["The tika", "Wed 21 October", "Very quiet. Some Lakeside restaurants closed until evening; villages at their best"],
                ["After the tika", "22 – 26 October", "The domestic holiday rush. Lakeside full, boats queuing, trailhead jeeps busy from dawn"],
                ["After the full moon", "From 27 October", "Back to normal peak season"],
              ],
            },
          },
          { p: "Dates for other years are in our [[post:dashain-dates-calendar-for-travellers|Dashain calendar]]." },
        ],
      },
      {
        h2: "Getting There and Away",
        blocks: [
          { p: "Fly. The road from Kathmandu is at its worst in the days before Phulpati and again after the tika, and the flight takes twenty-five minutes. Book it with the trip; seats go early. Tourist buses run on most days except the tika. The detail is in [[post:travelling-around-nepal-during-dashain|getting around Nepal during Dashain]]." },
          { p: "If you are coming for the busy days after the tika, reserve your hotel as well. Lakeside has a great many rooms and in that week they fill." },
        ],
      },
      {
        h2: "Treks and Activities From Pokhara",
        blocks: [
          { p: "Pokhara is the gateway to the Annapurna treks, and the trick at Dashain is to walk before the crowd rather than with it. Start a short trek on Phulpati, spend the tika in a mountain village, and walk out as the rush walks in." },
          {
            ul: [
              "<strong>Treks:</strong> [[trek:poonhill-trek-from-pokhara|Poon Hill]], [[trek:mardi-himal-trek-from-pokhara|Mardi Himal]] and [[trek:annapurna-base-camp-trek-from-pokhara|Annapurna Base Camp]], all from Pokhara — see [[post:annapurna-treks-during-dashain|Annapurna treks during Dashain]].",
              "<strong>In the air:</strong> [[trek:paragliding-in-pokhara|tandem paragliding]] from Sarangkot and the [[trek:ultra-light-flight-in-pokhara|ultra-light flight]] both operate through the festival. October's stable mornings are the best flying weather of the year.",
              "<strong>On the water:</strong> boating on Phewa Lake, and [[trek:seti-river-rafting-in-pokhara|rafting on the Seti]].",
              "<strong>For the mountains without walking:</strong> the [[trek:annapurna-base-camp-helicopter-tour|Annapurna Base Camp helicopter tour]].",
            ],
          },
          { p: "Book activities ahead for the days after the tika, when Nepali holidaymakers fill the slots. Our [[post:paragliding-in-pokhara-guide|paragliding guide]] and [[post:short-treks-from-pokhara|short treks from Pokhara]] have the detail." },
          {
            figure: {
              image: "mardi-treks/pokhara-day-tour/pokhara-day-tour-00-phewa-lake-of-pokhara-city",
              alt: "Phewa Lake and the town of Pokhara with forested hills behind.",
              caption: "Phewa Lake. In the days after the tika this is the most popular holiday spot in Nepal.",
            },
          },
        ],
      },
      {
        h2: "A Quiet Corner",
        blocks: [
          { p: "If Lakeside in the rush is more company than you want, there are easy escapes: the north shore of the lake beyond the last hotels, the World Peace Pagoda at dawn, and Begnas Lake, forty minutes east, which stays calm when Phewa does not. Couples timing a trip for the festival will find the hill resorts above the town quieter than the strip — see our [[trek:pokhara-honeymoon-tour|Pokhara Honeymoon Tour]]. And after a trek, Pokhara's yoga and meditation studios keep their schedules through the holiday: [[post:meditation-and-yoga-in-pokhara-after-a-trek|meditation and yoga in Pokhara]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is Pokhara busy during Dashain?", answer: "It is quiet up to and on the tika day, and very busy in the four or five days after it, when Nepali families and groups come on holiday. Book hotels and flights ahead for that period." },
      { question: "What is there to see in Pokhara during Dashain?", answer: "The Bindhyabasini temple on the eighth and ninth days, the Tal Barahi island temple on Phewa Lake, kites over the old bazaar, and bamboo swings in the ridge villages of Sarangkot, Kaskikot and Dhampus." },
      { question: "Are restaurants in Lakeside open during Dashain?", answer: "Most are, throughout the festival. On the tika day some open only in the evening. Hotels serve meals as normal." },
      { question: "Can I start a trek from Pokhara during Dashain?", answer: "Yes. Lodges are open on all the Annapurna routes. Arrange the conservation-area permit and the jeep to the trailhead in advance, and avoid depending on shared transport on the tika day." },
      { question: "Is paragliding available in Pokhara during Dashain?", answer: "Yes. Flights operate through the festival, and October has the most reliable flying weather. Slots fill in the days after the tika, so book ahead." },
      { question: "Where can I see Dashain swings near Pokhara?", answer: "In almost any village on the ridges around the valley. Sarangkot, Kaskikot, Dhampus and Astam are the easiest to reach, each within an hour of Lakeside." },
      { question: "How do I get from Kathmandu to Pokhara during Dashain?", answer: "By air if possible — twenty-five minutes, booked early. The road is slow in the days before Phulpati and after the tika, and tourist buses do not run on the tika day." },
      { question: "Is Bindhyabasini temple worth visiting during Dashain?", answer: "Yes, for the atmosphere, particularly early in the morning. Be aware that animals are sacrificed there on Maha Ashtami and Maha Navami; choose another day if you would prefer not to see it." },
    ],
    relatedTreks: [
      "pokhara-day-tour",
      "pokhara-day-tour-with-sarangkot-sunrise",
      "poonhill-trek-from-pokhara",
      "sirubari-village-tour",
      "paragliding-in-pokhara",
      "pokhara-honeymoon-tour",
    ],
    tripsNote: "Day tours, a village stay and a short trek, all starting from the lake.",
    relatedPosts: [
      "pokhara-travel-guide",
      "annapurna-treks-during-dashain",
      "dashain-swings-and-kites",
      "where-to-see-dashain-celebrations-in-nepal",
      "short-treks-from-pokhara",
      "travelling-around-nepal-during-dashain",
    ],
    tags: ["Dashain", "Pokhara", "City Guide", "Culture", "Festivals"],
    meta: {
      title: "Pokhara During Dashain: Temples, Swings and Lakeside",
      description: "Pokhara during Dashain: Bindhyabasini temple, Tal Barahi, village swings above the lake, when Lakeside fills, and how to time a trek around the rush.",
      keywords: "Pokhara during Dashain, Bindhyabasini temple Dashain, Pokhara October, Lakeside Dashain, Dashain holiday Pokhara, Sarangkot Dashain, Tal Barahi temple",
    },
  },
];
