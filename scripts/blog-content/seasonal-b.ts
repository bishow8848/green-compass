import type { BlogContent } from "./build";
import { FESTIVALS, trekImage } from "./images";

/**
 * Autumn 2026 series, part 2: the two base camps in November, and what to do
 * about the Lukla flight in its busiest weeks.
 */
export const seasonalB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-trek-in-november",
    title: "Everest Base Camp Trek in November: Weather, Crowds and What to Expect",
    cluster: "seasonal",
    date: "2026-10-13",
    hero: {
      image: trekImage("everest-base-camp-trek", "01-kala-patthar-38-everest-lhotse-nuptse-2007-gje"),
      alt: "Everest, Lhotse and Nuptse seen from Kala Patthar under a clear sky.",
    },
    excerpt:
      "November gives the Everest Base Camp trek its clearest skies and its coldest nights of the main season. This is the temperature at each stop, how busy the trail is in each half of the month, what the cold changes about the walk, and how to plan flights and gear for it.",
    intro: [
      { p: "If the reason you are walking to Everest is to see it, November is the month. The air above the Khumbu is as dry and clean as it gets, the afternoon cloud that builds in spring mostly does not, and the view from Kala Patthar at dawn is the photograph you have seen — every ridge on Nuptse sharp, the plume blowing off the summit." },
      { p: "You pay for it after dark. November is where the trek stops being a cool-weather walk and becomes a cold-weather one, and by the last week the nights at Gorak Shep are as hard as anything most trekkers have slept through. With the right kit that is an inconvenience rather than a problem. Without it, it is the thing people remember." },
    ],
    sections: [
      {
        h2: "Temperatures Stop by Stop",
        blocks: [
          {
            table: {
              head: ["Stop", "Altitude", "Day", "Night"],
              rows: [
                ["Lukla", "2,860 m", "10 – 15°C", "0 – 4°C"],
                ["Namche Bazaar", "3,440 m", "8 – 12°C", "−4 to 0°C"],
                ["Tengboche", "3,867 m", "5 – 10°C", "−7 to −3°C"],
                ["Dingboche", "4,410 m", "2 – 8°C", "−11 to −6°C"],
                ["Lobuche", "4,940 m", "0 – 5°C", "−15 to −9°C"],
                ["Gorak Shep", "5,164 m", "−2 to 4°C", "−18 to −11°C"],
              ],
              note: "Typical figures; the first week of the month sits at the warm end of each range and the last week at the cold end. Wind on Kala Patthar at dawn takes the felt temperature below −20°C.",
            },
          },
          { p: "By day it is pleasant. The sun at this altitude is strong, the trail is dry, and most people walk in a base layer and a light fleece until mid-afternoon. The change comes fast when the sun leaves the valley, usually between three and four: within twenty minutes you want everything you own. Plan each day to be indoors by then." },
          { p: "Rain is not a factor and snow is unusual before the last week. When it comes it tends to be a single fall that the sun clears from the trail in a day or two, though it lingers on the shaded moraine above Lobuche." },
        ],
      },
      {
        h2: "How Busy Is the Trail?",
        blocks: [
          { p: "The Everest Base Camp trail is the busiest in Nepal, and the first half of November is still part of its peak. Expect a steady line of trekkers and yak trains on the climb to Namche, full dining rooms, and competition for beds at Lobuche and Gorak Shep, where there are few lodges and nowhere else to go." },
          { p: "In 2026 the Tihar festival falls on 7 to 11 November. It has almost no effect in the Sherpa villages above Lukla, but it does thin the number of Nepali trekkers for a few days and it tightens flights either side. From about the 15th the trail quietens steadily, and by the last week you may share a lodge with only a handful of others — the reward for accepting the cold." },
          { p: "If the crowds matter to you more than the destination, the Gokyo valley next door has the same sky and a third of the people. The [[trek:gokyo-lake-trek|Gokyo Lakes trek]] is the usual alternative; see our [[post:gokyo-lakes-trek-guide|Gokyo guide]]." },
        ],
      },
      {
        h2: "What the Cold Changes",
        blocks: [
          {
            ul: [
              "<strong>Early starts get earlier.</strong> With about ten and a half hours of daylight, the walk to Base Camp and back from Gorak Shep needs to begin by seven. Kala Patthar for sunrise means leaving at four, in the coldest hour of the night.",
              "<strong>Water freezes.</strong> Bottles left out overnight are solid by morning. Sleep with one inside your sleeping bag, and fill the other with hot water in the evening — it doubles as a foot warmer.",
              "<strong>Batteries drain.</strong> Phone and camera batteries lose charge quickly below freezing. Keep them in an inside pocket by day and in your sleeping bag by night. Charging is available in lodges for a fee.",
              "<strong>Washing stops.</strong> Above Dingboche the pipes are frozen. Showers are a bucket of hot water at best; most people use wet wipes and wait for Namche.",
              "<strong>The stove is the centre of life.</strong> Lodges light the dining-room stove in the late afternoon with dried yak dung, and that is where everyone sits until bed. Bedrooms are unheated plywood.",
              "<strong>Your throat suffers.</strong> Cold, dry air irritates the airways. A buff over the mouth and plenty of warm fluid are the best defence.",
            ],
          },
          { p: "Altitude itself is no different in November, but cold makes its symptoms harder to read and dehydration easier to fall into, because nobody feels like drinking three litres of water at −5°C. Keep to the schedule in our [[post:everest-base-camp-trek-itinerary-day-by-day|day-by-day itinerary]], with both acclimatisation days, and read the [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] before you go." },
        ],
      },
      {
        h2: "Flights to Lukla in November",
        blocks: [
          { p: "In the peak months most Lukla flights leave from <strong>Manthali airport in Ramechhap</strong>, four to five hours' drive east of Kathmandu, rather than from the capital. That usually means a departure from your hotel soon after midnight for a morning flight. The arrangement is set by the aviation authority each season and normally runs to the end of November." },
          { p: "November is a good month for the flight itself: mornings are clear and cancellations are fewer than in spring. They still happen — wind at Lukla, cloud in the valley, a backlog from the day before — and the first half of the month has very little slack in the schedule. Allow at least one buffer day before your international flight, and preferably two. What to do when the flight does not go is in [[post:lukla-flight-delays-peak-season-backup-plans|Lukla flight delays and backup plans]]." },
          {
            figure: {
              image: FESTIVALS.luklaTwinOtter,
              alt: "Trekkers with rucksacks walking across the apron towards a Twin Otter aircraft at Lukla airport, with a snow peak beyond.",
              caption: "Boarding at Lukla. Flights run only in the morning, before the valley wind picks up.",
            },
          },
        ],
      },
      {
        h2: "Gear for a November Trek",
        blocks: [
          { p: "Start from our [[post:everest-base-camp-packing-list|Everest Base Camp packing list]] and upgrade the warm end of it." },
          {
            table: {
              head: ["Item", "What November needs"],
              rows: [
                ["Sleeping bag", "Comfort rating of −15 to −20°C, with a liner. Hire in Kathmandu if you do not own one."],
                ["Down jacket", "A real one with a hood, not a light layering piece."],
                ["Legs", "Thermal leggings under trekking trousers from Dingboche up; insulated trousers for evenings if you feel the cold."],
                ["Hands", "Thin liner gloves for walking, thick insulated gloves or mittens for the mornings on Kala Patthar."],
                ["Feet", "Broken-in boots with room for a thick sock, and two pairs of warm socks kept only for sleeping."],
                ["Head and face", "Warm hat, buff, and sunglasses with full UV protection."],
                ["Extras", "Hand warmers for summit morning, a one-litre bottle that takes boiling water, lip balm and heavy moisturiser."],
              ],
            },
          },
        ],
      },
      {
        h2: "Early, Mid or Late November?",
        blocks: [
          {
            table: {
              head: ["Start date", "Good for", "Bear in mind"],
              rows: [
                ["1 – 7 November", "The mildest temperatures of the month", "Peak-season crowds; return flights fall around Tihar"],
                ["8 – 18 November", "The best balance of weather and space", "Book the Lukla flight early if starting near the festival"],
                ["19 – 30 November", "Empty trails, superb light", "Hard cold at night; a few high lodges closing; small chance of snow"],
              ],
            },
          },
          { p: "For most people the middle of the month is the answer. If you are comfortable with cold and want the trail close to yourself, go late. Either way, the standard fourteen-day [[trek:everest-base-camp-trek|Everest Base Camp trek]] is the right length. Those short of time or wary of the walk back in the cold often choose the [[trek:everest-base-camp-trek-with-helicopter-return|trek with a helicopter return]] from Gorak Shep." },
          { p: "And if you would rather look at Everest in November than sleep at 5,000 metres to do it, the week-long [[trek:everest-view-trek|Everest View trek]] to Tengboche stays below 3,900 metres, where the nights are merely chilly." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good month for the Everest Base Camp trek?", answer: "Yes. November has the clearest skies and most stable weather of the year in the Everest region. It is colder than October, particularly at night above Dingboche, and the trail becomes much quieter after the middle of the month." },
      { question: "How cold is Everest Base Camp in November?", answer: "Daytime temperatures at Gorak Shep and Base Camp are around −2 to 4°C. Nights are between −11 and −18°C, and wind on Kala Patthar at dawn makes it feel below −20°C. Lower down, Namche Bazaar is around freezing at night." },
      { question: "Does it snow on the Everest Base Camp trek in November?", answer: "Rarely in the first three weeks. A short snowfall is possible late in the month. It usually clears from the trail within a day or two and seldom stops the trek, but it is one reason to keep a spare day." },
      { question: "Is the Everest Base Camp trail crowded in November?", answer: "The first half of November is peak season and busy. From about the 15th the numbers fall steadily, and the last week of the month is quiet. Beds at Lobuche and Gorak Shep are the ones to reserve ahead early in the month." },
      { question: "Do Lukla flights operate normally in November?", answer: "Yes, and the weather is more reliable than in spring. During the peak season most flights leave from Manthali airport in Ramechhap, a four to five hour drive from Kathmandu. Delays still occur, so allow one or two buffer days." },
      { question: "What sleeping bag do I need for Everest Base Camp in November?", answer: "A bag with a comfort rating of −15 to −20°C, used with a liner. Lodges provide blankets, but the bedrooms are unheated and blankets alone are not enough above Dingboche." },
      { question: "Are the teahouses open on the Everest trail in November?", answer: "Yes. Every lodge on the main Base Camp trail is open throughout November. A few on the higher side routes, such as the Three Passes, start to close in the last days of the month." },
      { question: "Can I see Everest clearly in November?", answer: "November offers the most reliable views of the year. Mornings are almost always clear, and afternoon cloud is far less common than in spring. Sunrise and sunset from Kala Patthar are both worth the effort." },
    ],
    relatedTreks: ["everest-base-camp-trek", "everest-base-camp-trek-with-helicopter-return", "gokyo-lake-trek", "everest-view-trek", "everest-three-pass-trek", "everest-base-camp-helicopter-tour"],
    tripsNote: "Ways to reach Everest in late autumn, from a week to seventeen days.",
    relatedPosts: [
      "best-time-for-everest-base-camp-trek",
      "everest-base-camp-trek-complete-guide",
      "everest-base-camp-packing-list",
      "lukla-flight-delays-peak-season-backup-plans",
      "trekking-in-nepal-in-november",
      "everest-base-camp-trek-in-december",
    ],
    tags: ["Everest Region", "Everest Base Camp", "November", "Weather"],
    meta: {
      title: "Everest Base Camp Trek in November: Weather & Crowds",
      description: "Everest Base Camp in November: temperatures at every stop, how busy the trail is, Lukla flights, the gear the cold demands and the best week to start.",
      keywords: "Everest Base Camp trek in November, EBC in November, Everest Base Camp November weather, Everest Base Camp temperature November, EBC trek November crowds",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "lukla-flight-delays-peak-season-backup-plans",
    title: "Lukla Flight Delays in Peak Season: Buffer Days and Backup Plans",
    cluster: "seasonal",
    date: "2026-10-14",
    hero: {
      image: FESTIVALS.luklaTwinOtter,
      alt: "Passengers boarding a Twin Otter aircraft on the apron at Lukla airport in the Everest region.",
    },
    excerpt:
      "Every Everest trek starts and ends with a flight that runs only when the mountain weather allows. In October and November the schedule has no slack, so one cancelled morning becomes a queue. This is how the delays work, how many spare days to build in, and the alternatives when the planes are not flying.",
    intro: [
      { p: "The flight to Lukla takes about twenty minutes and decides the shape of the two weeks that follow. The airstrip sits on a shelf at 2,860 metres, 527 metres long and tilted uphill, with a mountain at one end and a drop at the other. Aircraft land by sight alone. When cloud sits in the valley or the wind turns, nothing flies, and nobody can tell you at breakfast whether it will clear by ten." },
      { p: "In the quiet months a cancelled day is absorbed the next morning. In peak season every seat on every flight is already sold, so the passengers from a lost day join a queue behind everyone booked for the days after. That is how a single bad morning in late October strands people for three days — and why the plan you make before you leave home matters more than anything you can do at the airport." },
    ],
    sections: [
      {
        h2: "Why Lukla Flights Are Delayed",
        blocks: [
          {
            ul: [
              "<strong>Visibility.</strong> Pilots must see the runway and the valley leading to it. Morning cloud or haze in the Dudh Koshi gorge closes the airport even when Kathmandu is in sunshine.",
              "<strong>Wind.</strong> By late morning a strong up-valley wind usually sets in, which is why flights are scheduled from first light and stop around midday.",
              "<strong>Weather at the other end.</strong> Fog at the departure airport delays the first rotation, and each aircraft makes several trips, so the delay rolls through the day.",
              "<strong>The queue.</strong> After a cancellation, airlines fly that day's passengers first and fit the stranded ones in where seats appear.",
            ],
          },
          { p: "Autumn is the more reliable of the two seasons. October and November mornings are clear far more often than not, and long shutdowns are less common than in spring. But the season is also when the trail is fullest, so the consequences of a lost day are larger." },
        ],
      },
      {
        h2: "The Ramechhap Arrangement",
        blocks: [
          { p: "During the peak months, most Lukla flights do not leave from Kathmandu at all. To relieve congestion at the capital's single runway, they are moved to <strong>Manthali airport in Ramechhap district</strong>, about 130 kilometres east. The exact dates are announced each season; in practice it covers the busy weeks of spring and of October and November." },
          {
            table: {
              head: ["", "From Ramechhap (Manthali)", "From Kathmandu"],
              rows: [
                ["When", "Peak season", "Off-peak months, and a few flights in season"],
                ["Getting there", "4 – 5 hours by road from Kathmandu", "20 minutes from Thamel"],
                ["Typical start", "Leave the hotel between midnight and 2 am", "Leave the hotel around 5 am"],
                ["Flight time", "About 20 minutes", "About 30 – 35 minutes"],
                ["If the flight is cancelled", "Wait in Manthali, where rooms are basic and few", "Return to your hotel and try again"],
              ],
            },
          },
          { p: "The night drive is the part people dislike. Two things help. You can travel the afternoon before and sleep near the airport, which costs a day in Kathmandu but lets you fly rested and puts you at the front of the queue. Or you can fly on a shared helicopter directly from Kathmandu. Our [[post:lukla-flight-guide|Lukla flight guide]] covers both in detail." },
        ],
      },
      {
        h2: "How Many Buffer Days You Need",
        blocks: [
          { p: "A buffer day is an empty day between the end of the trek and your flight home. It is the cheapest insurance on the whole trip." },
          {
            table: {
              head: ["Your situation", "Buffer to allow"],
              rows: [
                ["Trekking in October or November, flexible onward plans", "1 day minimum"],
                ["A fixed international flight you cannot move", "2 days"],
                ["Trekking in the first half of October or in spring", "2 – 3 days"],
                ["A tight connection or a non-changeable ticket", "2 days, and a helicopter budget in reserve"],
              ],
            },
          },
          { p: "Put the buffer at the end, not the beginning. A delay on the way in can be recovered by shortening the trek — dropping a rest day lower down is not advisable, but taking a helicopter out from Gorak Shep or Pheriche wins back two or three days. A delay on the way out, with a long-haul flight the next morning, cannot be recovered at all." },
          { p: "If the spare days go unused, they are not wasted. Kathmandu has more than enough for two days: see our guide to the [[post:kathmandu-valley-unesco-sites-guide|valley's heritage sites]], or take the [[trek:bhaktapur-day-tour|Bhaktapur day tour]]." },
        ],
      },
      {
        h2: "When the Flight Is Cancelled: Your Options",
        blocks: [
          { h3: "1. Wait" },
          { p: "The default, and usually the right call for the first day. Weather that closes Lukla in autumn often clears by the next morning. Your airline or agency rebooks you; stay close and be ready to move at short notice." },
          { h3: "2. Take a helicopter" },
          { p: "Helicopters can fly in conditions that ground the planes, because they need less visibility and no runway. When flights are cancelled a market forms within the hour: aircraft carry five passengers, and agencies group stranded trekkers to share the cost. The price per seat rises with demand, so it pays to decide early. We operate both directions — [[trek:kathmandu-to-lukla-helicopter-flight|Kathmandu to Lukla]] and [[trek:lukla-to-kathmandu-helicopter-flight|Lukla to Kathmandu]] — and can usually find seats when the planes are down." },
          { h3: "3. Go by road and walk" },
          { p: "A jeep road now runs from Kathmandu through Salleri and on towards the villages below Lukla. It is a long day and a half of rough driving, followed by a day or more on foot to join the main trail. It is the option of last resort for getting in, and occasionally the only one for getting out when weather stops helicopters too. It adds two to three days and it always works." },
          { h3: "4. Change the trek" },
          { p: "If you lose more than two days at the start, it can be better to go somewhere that needs no flight. The [[trek:langtang-valley-trek|Langtang Valley trek]] starts a day's drive from Kathmandu, and the [[trek:pikey-peak-trek|Pikey Peak trek]] gives a wide view of Everest from a ridge you reach entirely by road." },
        ],
      },
      {
        h2: "Reducing the Risk Before You Go",
        blocks: [
          {
            ul: [
              "<strong>Book the earliest flight of the day.</strong> First rotations are the most likely to fly; if the weather closes at ten, the later ones are the casualties.",
              "<strong>Sleep near Manthali the night before</strong> if you can spare the afternoon.",
              "<strong>Avoid the tightest dates.</strong> In 2026 the days just after the Dashain tika (22 – 24 October) and around Tihar (6 – 12 November) are the most heavily booked.",
              "<strong>Keep your international ticket changeable</strong>, or at least know the change fee before you need to.",
              "<strong>Check your insurance.</strong> Some policies pay for extra nights or a helicopter seat after a cancelled flight, and many do not. See [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking]].",
              "<strong>Carry cash in Lukla.</strong> A stranded day means extra meals and a room, and the ATM there is unreliable.",
              "<strong>Trek with an agency in peak season.</strong> Rebooking forty stranded clients is a matter of who answers the phone; an operator with standing arrangements gets seats that an individual does not.",
            ],
          },
        ],
      },
      {
        h2: "Skipping the Flight Altogether",
        blocks: [
          { p: "Some trekkers remove the uncertainty by design. A helicopter both ways costs considerably more but turns the least predictable hours of the trip into a scenic flight. A walk-in from the road, on the old expedition route through Solu, adds four or five days of quiet middle-hill trekking and excellent acclimatisation — the way everyone reached Everest before the airstrip was built." },
          { p: "And the popular compromise: fly in by plane, and fly out from Gorak Shep by helicopter on the [[trek:everest-base-camp-trek-with-helicopter-return|Everest Base Camp trek with helicopter return]]. It saves three days of walking back the way you came and takes the return flight, the one that matters for your connection, out of the weather's hands. The details are in our [[post:everest-base-camp-helicopter-return-guide|helicopter return guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "How often are Lukla flights cancelled?", answer: "In October and November most mornings fly, but cancellations of a day are common and two or three days in a row happen a few times each season. Spring and the monsoon months are less reliable than autumn." },
      { question: "How many extra days should I allow for Lukla flight delays?", answer: "Allow at least one spare day at the end of an autumn trek, and two if your international flight cannot be changed. In spring or early October allow two to three." },
      { question: "Why do Lukla flights leave from Ramechhap?", answer: "In peak season most Lukla flights are moved to Manthali airport in Ramechhap to reduce congestion at Kathmandu airport. It is a four to five hour drive from Kathmandu, so trekkers usually leave around midnight or stay nearby the night before." },
      { question: "What happens if my Lukla flight is cancelled?", answer: "The airline rebooks you on the next available flight, which in peak season may be a day or more later. The alternatives are a shared helicopter, which often flies when planes cannot, or the jeep road through Salleri followed by a walk." },
      { question: "How much does a helicopter to Lukla cost?", answer: "The price is per seat on a shared flight and changes with demand, rising when planes are cancelled. Ask for a current quote before your trek so that you know the figure if you need it. A private charter costs the same whatever the number of passengers." },
      { question: "Does travel insurance cover Lukla flight delays?", answer: "Some policies cover extra accommodation or alternative transport after a cancelled flight, and many exclude it. Read the travel delay section before you buy, and keep written confirmation of the cancellation from the airline." },
      { question: "Can I drive to Lukla instead of flying?", answer: "Not all the way. A jeep road reaches the villages below Lukla by way of Salleri, taking a day and a half from Kathmandu, and you then walk for a day or more to join the main trail. It adds two to three days." },
      { question: "What time of day do Lukla flights operate?", answer: "Flights run from first light until late morning or midday. The wind in the valley strengthens through the day, so the earliest flights are the most likely to depart." },
    ],
    relatedTreks: ["everest-base-camp-trek", "everest-base-camp-trek-with-helicopter-return", "kathmandu-to-lukla-helicopter-flight", "lukla-to-kathmandu-helicopter-flight", "pikey-peak-trek", "langtang-valley-trek"],
    tripsNote: "Everest treks, the helicopter flights that back them up, and two alternatives that need no flight.",
    relatedPosts: [
      "lukla-flight-guide",
      "everest-base-camp-trek-in-november",
      "everest-base-camp-helicopter-return-guide",
      "domestic-flights-in-nepal-for-trekkers",
      "travel-insurance-for-trekking-in-nepal",
      "everest-base-camp-trek-complete-guide",
    ],
    tags: ["Everest Region", "Lukla", "Flights", "Travel Planning"],
    meta: {
      title: "Lukla Flight Delays: Buffer Days & Backup Plans",
      description: "Why Lukla flights are cancelled, how the Ramechhap arrangement works, how many buffer days to allow, and what to do when the planes are not flying.",
      keywords: "Lukla flight delays, Lukla flight cancelled, Ramechhap Manthali airport, Lukla buffer days, Lukla helicopter, Everest trek flight delay, Kathmandu to Lukla flight",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-base-camp-trek-in-november",
    title: "Annapurna Base Camp Trek in November: Weather, Crowds and Conditions",
    cluster: "seasonal",
    date: "2026-10-15",
    hero: {
      image: trekImage("annapurna-base-camp-trek", "00-annapurna-base-camp-perspective"),
      alt: "The ring of snow peaks around Annapurna Base Camp in clear weather.",
    },
    excerpt:
      "November is the steadiest month of the year in the Annapurna Sanctuary: dry trails, clear mornings and very little avalanche risk in the gorge. This is the weather at each stage, how full the lodges are, what the cold is like at base camp, and how to time the trek around Tihar.",
    intro: [
      { p: "The Annapurna Sanctuary is a bowl. You walk up a narrowing gorge for three days and step out into an amphitheatre at 4,130 metres with a wall of ice on every side — Annapurna I, Annapurna South, Hiunchuli, Gangapurna and the fish-tail of Machhapuchhre closing the door behind you. Whether you see any of it depends on the cloud, and in November the cloud mostly stays away." },
      { p: "It is also the month when the trail is at its most straightforward. The leeches and landslides of the monsoon are long gone, the snow that complicates spring has not arrived, and the stone staircases are dry underfoot. Add a lower maximum altitude than Everest and no flight to worry about, and it is easy to see why this is the trek we most often suggest for a November first-timer." },
    ],
    sections: [
      {
        h2: "November Weather on the Trail",
        blocks: [
          {
            table: {
              head: ["Stage", "Altitude", "Day", "Night"],
              rows: [
                ["Pokhara", "820 m", "22 – 26°C", "10 – 14°C"],
                ["Ghandruk / Chhomrong", "1,940 – 2,170 m", "14 – 19°C", "4 – 8°C"],
                ["Bamboo / Dovan", "2,300 – 2,600 m", "10 – 15°C", "1 – 5°C"],
                ["Deurali", "3,230 m", "6 – 11°C", "−4 to 0°C"],
                ["Machhapuchhre Base Camp", "3,700 m", "4 – 9°C", "−7 to −3°C"],
                ["Annapurna Base Camp", "4,130 m", "2 – 7°C", "−11 to −5°C"],
              ],
              note: "Typical ranges, cooling through the month. The gorge between Bamboo and Deurali sees little direct sun and feels colder than its altitude suggests.",
            },
          },
          { p: "The lower days are warm enough for a T-shirt. The climb through the bamboo and rhododendron forest is cool and damp-smelling even now, and above Deurali you are in winter clothing morning and evening. Rain is rare. A dusting of snow at base camp is possible late in the month and usually gone by midday." },
          { p: "The pattern of the day matters here more than on most treks. The sanctuary is clearest from dawn until about ten; cloud often rises up the gorge in the afternoon and clears again after dark. Sleep at base camp rather than visiting from below, and be outside at first light." },
        ],
      },
      {
        h2: "Crowds and Lodges",
        blocks: [
          { p: "This is the second-busiest trek in Nepal, and the gorge funnels everyone onto one trail with a limited number of beds. The pinch points are the same every year: Chhomrong, Deurali, Machhapuchhre Base Camp and Annapurna Base Camp itself, where the lodges are a single cluster." },
          {
            ul: [
              "<strong>First half of November:</strong> peak season. Beds at base camp need reserving, which a guide does by phone from the day before. Arriving without one can mean the dining-room floor.",
              "<strong>During Tihar, 7 – 11 November 2026:</strong> a brief dip in domestic trekkers, then a rush of Nepali groups on the days after Bhai Tika.",
              "<strong>Second half of November:</strong> the easiest time of the season. Rooms are available on arrival almost everywhere.",
            ],
          },
          { p: "The lodges in the sanctuary are simpler than those lower down — shared rooms are common at base camp when it is full — and all of them stay open throughout the month. How lodge trekking works is explained in [[post:teahouse-trekking-in-nepal-explained|teahouse trekking in Nepal]]." },
        ],
      },
      {
        h2: "The Avalanche Zone in November",
        blocks: [
          { p: "Between Deurali and Machhapuchhre Base Camp the trail passes beneath steep slopes on the flank of Hiunchuli. In late winter and spring, after heavy snowfall, avalanches cross the trail here and the section is the one real objective danger on the route." },
          { p: "In November that risk is at its lowest of the trekking year: the slopes carry little snow and the weather is settled. It rises again only if there is a significant early-winter snowfall, in which case lodge owners at Deurali know the state of the slopes and guides wait or use the alternative path on the far bank. It is worth knowing about and not worth worrying about this month." },
        ],
      },
      {
        h2: "Which Route, and How Long?",
        blocks: [
          {
            table: {
              head: ["Trip", "Days", "Best for"],
              rows: [
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] from Kathmandu", "9", "The standard route, with travel days and a sensible pace"],
                ["[[trek:annapurna-base-camp-trek-from-pokhara|Annapurna Base Camp from Pokhara]]", "5", "Fit walkers already in Pokhara and short of time"],
                ["[[trek:annapurna-base-camp-trek-with-ghorepani-poonhill-trek|With Ghorepani and Poon Hill]]", "12", "Adding the classic sunrise viewpoint and better acclimatisation"],
                ["[[trek:mardi-himal-trek-with-annapurna-base-camp|With Mardi Himal]]", "14", "Two very different views of the same mountains"],
              ],
            },
          },
          { p: "November's short days favour the longer versions. The five-day itinerary involves seven and eight hours of walking a day, and with dusk before five there is little margin. If you have the time, approach by Ghorepani: the extra days make the altitude gentler and Poon Hill at sunrise is a highlight in its own right. The full route description is in our [[post:annapurna-base-camp-trek-complete-guide|Annapurna Base Camp guide]]." },
        ],
      },
      {
        h2: "What to Bring",
        blocks: [
          {
            ul: [
              "<strong>Sleeping bag</strong> rated to about −10°C. Blankets are provided but shared out thinly when lodges are full.",
              "<strong>Down jacket</strong>, warm hat and gloves for the two nights above Deurali.",
              "<strong>Light layers for the lower trail</strong>, where the afternoons are properly warm. The temperature range on this trek is wider than on Everest.",
              "<strong>Trekking poles.</strong> The route is thousands of stone steps, and the descent from Chhomrong is hard on knees.",
              "<strong>A head torch</strong> for the pre-dawn start at base camp.",
              "<strong>Cash.</strong> There are no ATMs after Pokhara, and prices rise with altitude.",
            ],
          },
          { p: "The hot spring at <strong>Jhinu Danda</strong>, twenty minutes below the village on the way out, is at its most welcome in November. Plan the last day to leave an hour for it." },
        ],
      },
      {
        h2: "Permits, Transport and Timing Around Tihar",
        blocks: [
          { p: "The trek needs an Annapurna Conservation Area permit, issued in Kathmandu or Pokhara; see our [[post:annapurna-region-permits-acap-guide|Annapurna permits guide]]. Offices close for the Tihar holidays, so collect permits before 7 November if your start date falls in the festival week. An agency handles this in advance." },
          { p: "No mountain flight is involved, which is the trek's great practical advantage in peak season: Pokhara is reached by a 25-minute flight or a day's drive from Kathmandu, and the trailhead is an hour or two beyond. Buses and flights between the two cities are busy just before Bhai Tika on the 11th, when half the country travels to a sibling's house." },
          { p: "A schedule that works well in 2026: trek from about 28 October and walk out on 6 or 7 November, in time to be in Pokhara for Kukur Tihar and the lamps of Laxmi Puja on the 8th. Lakeside lit up for the festival is a good way to end a trek. See our [[post:pokhara-travel-guide|Pokhara guide]] for what to do with the days after." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time for the Annapurna Base Camp trek?", answer: "Yes. November is one of the two best months, with dry trails, clear mornings and the lowest avalanche risk of the trekking year. It is colder than October at base camp and quieter in the second half of the month." },
      { question: "How cold is Annapurna Base Camp in November?", answer: "At base camp, 4,130 metres, daytime temperatures are around 2 to 7°C and nights fall to between −5 and −11°C. Lower down at Chhomrong, nights are a mild 4 to 8°C." },
      { question: "Is there snow at Annapurna Base Camp in November?", answer: "Usually not on the trail. A light snowfall is possible at base camp late in the month and normally melts by midday. Heavy snow is uncommon before December." },
      { question: "Is the Annapurna Base Camp trek crowded in November?", answer: "The first half of the month is busy, especially at base camp, Machhapuchhre Base Camp and Deurali, where beds should be reserved ahead. From mid-November the trail is noticeably quieter." },
      { question: "Is there avalanche risk on the Annapurna Base Camp trek in November?", answer: "The risk between Deurali and Machhapuchhre Base Camp is at its lowest in November, because the slopes above hold little snow. It increases only after a heavy snowfall, when guides wait or take the alternative path." },
      { question: "How many days do I need for Annapurna Base Camp in November?", answer: "Nine days from Kathmandu is the standard. Five days from Pokhara is possible for fit walkers. With November's short daylight, the longer itineraries by way of Poon Hill, at eleven or twelve days, are more comfortable." },
      { question: "Do I need a guide for Annapurna Base Camp?", answer: "A licensed guide is required under current trekking rules, and in peak season a guide is also what secures your bed at base camp. See our guide to guides and porters for the details." },
      { question: "What is the best time of day to see the mountains at Annapurna Base Camp?", answer: "Sunrise. The sanctuary is usually clearest from dawn until mid-morning, and cloud often rises up the gorge in the afternoon. Sleep at base camp so that you are there at first light." },
    ],
    relatedTreks: ["annapurna-base-camp-trek", "annapurna-base-camp-trek-from-pokhara", "annapurna-base-camp-trek-with-ghorepani-poonhill-trek", "mardi-himal-trek-with-annapurna-base-camp", "mardi-himal-trek", "poonhill-trek"],
    tripsNote: "Annapurna Base Camp by four routes, and two shorter treks nearby.",
    relatedPosts: [
      "annapurna-base-camp-trek-complete-guide",
      "annapurna-base-camp-trek-itinerary",
      "mardi-himal-and-poon-hill-in-november",
      "trekking-in-nepal-in-november",
      "annapurna-region-permits-acap-guide",
      "everest-base-camp-vs-annapurna-base-camp",
    ],
    tags: ["Annapurna Region", "Annapurna Base Camp", "November", "Weather"],
    meta: {
      title: "Annapurna Base Camp Trek in November: Weather & Crowds",
      description: "Annapurna Base Camp in November: temperatures by stage, lodge availability, avalanche risk, the best route length and how to time the trek around Tihar.",
      keywords: "Annapurna Base Camp trek in November, ABC trek November, Annapurna Base Camp November weather, ABC trek temperature November, Annapurna Sanctuary November",
    },
  },
];
