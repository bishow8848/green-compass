import type { BlogContent } from "./build";

export const everestD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-helicopter-return-guide",
    title: "Everest Base Camp with Helicopter Return: Is It Worth It?",
    cluster: "everest",
    date: "2026-04-17",
    hero: {
      image: "mardi-treks/everest-base-camp-trek-with-helicopter-return/everest-base-camp-trek-with-helicopter-return-01-kala-patthar-and-pumori-from-gorak-shep",
      alt: "Pumori above Kala Patthar seen from Gorak Shep, Everest Base Camp trek, Nepal.",
    },
    excerpt:
      "Walking up and flying out saves three days, skips the long descent, and removes the Lukla return risk. What the helicopter leg actually involves, what it costs, who it suits, and the honest case against it.",
    intro: [
      { p: "The descent from Gorak Shep to Lukla takes three days and covers ground you have already walked. For trekkers short of time — or short of knees — flying out instead is an increasingly common choice, and a sensible one." },
      { p: "It is worth being clear about what it changes. The walk up is identical, so the acclimatisation profile and the achievement are unchanged. What you give up is the descent, which is genuinely enjoyable and surprisingly restorative. What you gain is three days, an aerial view of the Khumbu, and immunity from the Lukla flight backlog." },
    ],
    sections: [
      {
        h2: "How It Works",
        blocks: [
          { p: "Our [[trek:everest-base-camp-trek-with-helicopter-return|Everest Base Camp Trek with Helicopter Return]] runs the standard ascent — Lukla, Phakding, Namche with an acclimatisation day, Tengboche, Dingboche with a second rest day, Lobuche, Gorak Shep — then flies you out rather than walking back." },
          {
            ul: [
              "<strong>Pickup point:</strong> usually Gorak Shep (5,160 m) or Pheriche (4,371 m), depending on weather and group size.",
              "<strong>Timing:</strong> morning, for the same reason fixed-wing flights fly in the morning — valley winds.",
              "<strong>Route:</strong> down the Khumbu with Everest, Nuptse, Ama Dablam and the Dudh Koshi valley below, usually with a refuelling stop at Lukla.",
              "<strong>Flight time:</strong> around 50 to 60 minutes to Kathmandu, or 12 minutes to Lukla if you are connecting to a fixed-wing flight.",
              "<strong>Capacity:</strong> five passengers plus kit at Khumbu altitudes; sometimes fewer at Gorak Shep, where thin air limits payload.",
            ],
          },
          { p: "Flights are shared where possible, which is what makes the per-seat cost reasonable. If you are a group of four or five the charter is yours; a solo trekker or a pair is paired with others on the same morning." },
        ],
      },
      {
        h2: "What It Saves You",
        blocks: [
          {
            table: {
              head: ["", "Walk out", "Fly out"],
              rows: [
                ["Total trip length", "14 days", "12 days"],
                ["Days after Base Camp", "3 walking days to Lukla", "A morning flight"],
                ["Descent", "1,700 m on foot, hard on knees", "None"],
                ["Lukla flight risk", "Exposed to the outbound backlog", "Removed, or much reduced"],
                ["Extra cost", "—", "A per-seat helicopter charge on top of the trek"],
                ["What you miss", "—", "The Pheriche to Namche forest, Tengboche a second time, and the sense of closing the loop"],
              ],
            },
          },
          { p: "The Lukla risk point is the underrated one. A fixed-wing backlog after two cloudy days can strand trekkers for 48 hours or more, and a helicopter booked in advance sidesteps that entirely — which matters if your international flight is tight." },
        ],
      },
      {
        h2: "Who It Suits",
        blocks: [
          {
            ul: [
              "<strong>Trekkers with 12 days rather than 14.</strong> This is the right way to compress the trek — it removes descent days rather than acclimatisation days.",
              "<strong>Anyone with knee trouble.</strong> The descent is the part that hurts, and skipping it is a legitimate medical decision rather than a shortcut.",
              "<strong>Trekkers on a tight return connection.</strong> If you cannot absorb a two-day Lukla delay, fly out.",
              "<strong>Anyone who wants the aerial view.</strong> Seeing the route you walked laid out beneath you is genuinely one of the trip's highlights.",
              "<strong>Groups of four or five.</strong> The economics work best here, since the charter splits cleanly.",
            ],
          },
          { p: "Who it does not suit: trekkers for whom walking the whole thing matters, and anyone on a tight budget, since the helicopter is a significant addition. And it should never be used to justify an 11-day ascent — if you are saving days, save them on the way down." },
        ],
      },
      {
        h2: "The Honest Case Against",
        blocks: [
          { p: "Three things worth weighing." },
          { p: "<strong>The descent is better than it sounds.</strong> Losing 1,700 m over two days with thickening air is the part of the trek where you feel strong, the forest and rhododendron return, and Namche arrives like a city. Several of our guests who flew out have said it is the one thing they would change." },
          { p: "<strong>Helicopter traffic is a real issue in the Khumbu.</strong> Flights have increased sharply, and the noise over a quiet valley is now a standard complaint from trekkers walking below. We share charters rather than running empty legs, and we do not offer helicopter lifts for ordinary tiredness — but it is a genuine consideration." },
          { p: "<strong>Weather still applies.</strong> A helicopter is far less weather-sensitive than a Dornier, but it is not immune. If Gorak Shep is socked in, you walk to Pheriche or Lukla and fly from there, so keep one spare day even with a helicopter booked." },
        ],
      },
      {
        h2: "Other Helicopter Options in the Khumbu",
        blocks: [
          {
            table: {
              head: ["Flight", "Duration", "Use"],
              rows: [
                ["[[trek:gorakshep-to-kathmandu-helicopter-flight|Gorak Shep to Kathmandu]]", "About 3 hours with stops", "The standard trek-out flight from the highest lodge"],
                ["[[trek:gorakshep-to-lukla-helicopter-flight|Gorak Shep to Lukla]]", "About 15 min", "Connect to a fixed-wing flight, or a shorter hop if payload is tight"],
                ["[[trek:namche-to-kathmandu-helicopter-flight|Namche to Kathmandu]]", "About 2 hours", "A mid-trek exit without walking back to Lukla"],
                ["[[trek:kalapatthar-to-kathmandu-helicopter-flight|Kala Patthar to Kathmandu]]", "About 3 hours", "A landing at the viewpoint itself, then out"],
                ["[[trek:everest-base-camp-helicopter-tour|Base Camp helicopter tour]]", "4–5 hours", "No trek at all — a morning from Kathmandu with a Kala Patthar landing"],
                ["[[trek:kathmandu-to-lukla-helicopter-flight|Kathmandu to Lukla]]", "About 1 hour", "Fly in by helicopter, avoiding the Ramechhap drive"],
              ],
            },
          },
          { p: "If you have no interest in walking for two weeks but want to see the Khumbu, the [[post:everest-base-camp-helicopter-tour-guide|Base Camp helicopter tour]] is the honest alternative — a morning from Kathmandu with a landing near Kala Patthar and breakfast at the Everest View Hotel." },
        ],
      },
    ],
    faqs: [
      { question: "How much does the helicopter return cost?", answer: "It is priced per seat on top of the trek, and the figure depends on the pickup point, the season, and how many passengers share the charter. A group of four or five gets the best rate because the charter splits cleanly. Ask us for the current per-seat price for your dates — it moves with fuel and demand." },
      { question: "Does flying out mean I have not really done the trek?", answer: "No. The ascent is identical — the same twelve days, the same acclimatisation, the same Base Camp and Kala Patthar. What you skip is walking back down ground you have already covered. Plenty of guides would make the same choice with a flight home to catch." },
      { question: "Where does the helicopter pick us up?", answer: "Usually Gorak Shep at 5,160 m, sometimes Pheriche at 4,371 m depending on weather and payload — thin air at Gorak Shep limits how much a helicopter can lift, so on a warm morning the pickup may move lower. Your guide confirms it the evening before." },
      { question: "Is the helicopter affected by weather?", answer: "Less than a fixed-wing flight, but not immune. If the upper valley is closed you walk down to a lower pickup point or continue to Lukla and fly from there. Keep one spare day in Kathmandu even with a helicopter booked." },
      { question: "How many people fit in the helicopter?", answer: "Five passengers plus kit at Khumbu altitudes, and sometimes fewer from Gorak Shep where the air is thin. We share charters between groups on the same morning, which is what keeps the per-seat cost sensible." },
      { question: "Can I arrange the helicopter mid-trek if I change my mind?", answer: "Usually yes, subject to availability and weather, and it is a common request on the morning after Base Camp. Tell your guide as early as you can — it needs a call to Kathmandu and a slot rather than a decision at breakfast." },
      { question: "Is a helicopter evacuation the same thing?", answer: "No. An evacuation is a medical response arranged through our operations desk and your insurer, and it is flown on medical grounds only. A helicopter return is a planned, paid leg of your itinerary. We keep the two entirely separate, which is how it should be." },
    ],
    relatedTreks: [
      "everest-base-camp-trek-with-helicopter-return",
      "gorakshep-to-kathmandu-helicopter-flight",
      "namche-to-kathmandu-helicopter-flight",
      "everest-base-camp-helicopter-tour",
      "everest-base-camp-trek",
    ],
    tripsNote: "The trek with a flight out, plus the individual helicopter legs we operate in the Khumbu.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "lukla-flight-guide",
      "everest-base-camp-helicopter-tour-guide",
      "helicopter-tours-in-nepal-guide",
    ],
    tags: ["everest base camp", "helicopter return", "khumbu", "nepal trekking"],
    meta: {
      title: "Everest Base Camp with Helicopter Return: Is It Worth It?",
      description: "Walking up and flying out of the Khumbu — what the helicopter leg involves, what it saves, who it suits, the honest case against, and the other flight options.",
      keywords: "Everest Base Camp helicopter return, EBC heli out, Gorak Shep helicopter, Everest trek 12 days",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "short-everest-treks-without-base-camp",
    title: "Short Everest Treks: Seeing the Khumbu Without Going to Base Camp",
    cluster: "everest",
    date: "2026-04-21",
    hero: {
      image: "mardi-treks/everest-view-trek/everest-view-trek-00-namche-bazaar-from-hotel-everest-view-trail",
      alt: "Namche Bazaar from the Hotel Everest View trail, Everest region, Nepal.",
    },
    excerpt:
      "You do not need fourteen days or 5,500 m to see Everest properly. Short Khumbu treks, helicopter tours, mountain flights and the Pikey Peak alternative — with honest comparisons of what each one actually gives you.",
    intro: [
      { p: "The Base Camp trek is the famous one, but it is fourteen days, it sleeps at 5,160 m, and for a lot of travellers neither of those works. The good news is that the best views of Everest are not from Base Camp — they are from lower viewpoints that are easier, warmer, and much less demanding to reach." },
      { p: "Here are the realistic options, in order of how much time they take." },
    ],
    sections: [
      {
        h2: "The Options Compared",
        blocks: [
          {
            table: {
              head: ["Option", "Days", "Highest point", "Everest view"],
              rows: [
                ["[[trek:everest-mountain-flight|Everest mountain flight]]", "1 hour", "Cruising altitude", "From the aircraft window, close and unobstructed"],
                ["[[trek:everest-base-camp-helicopter-tour|Base Camp helicopter tour]]", "1 day", "Kala Patthar landing, 5,545 m", "The full Kala Patthar panorama"],
                ["[[trek:everest-view-trek|Everest View Trek]]", "9", "3,880 m", "Everest, Lhotse and Ama Dablam from the Everest View Hotel trail"],
                ["[[trek:pikey-peak-trek|Pikey Peak Trek]]", "8", "4,065 m", "Everest to Kanchenjunga in one sweep, from a road-accessible trek"],
                ["[[trek:gokyo-lake-trek|Gokyo Lakes Trek]]", "12", "5,357 m", "Four eight-thousanders from Gokyo Ri"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp Trek]]", "14", "5,545 m", "Kala Patthar, plus Base Camp itself"],
              ],
            },
          },
        ],
      },
      {
        h2: "The Everest View Trek",
        blocks: [
          { p: "Nine days, nothing above 3,880 m, and the Khumbu's best cultural stretch. You fly to Lukla, walk to Phakding and Namche, take an acclimatisation day, then climb to Khumjung and the Hotel Everest View at 3,880 m — a famous terrace with Everest, Lhotse, Nuptse, and Ama Dablam laid out in front of it." },
          { p: "What makes it good rather than merely easier:" },
          {
            ul: [
              "<strong>Low altitude risk.</strong> The highest night is around 3,440 m at Namche, which most people handle comfortably with one rest day.",
              "<strong>The best lodges in the Khumbu.</strong> Namche has bakeries, hot showers, and genuine comfort.",
              "<strong>Sherpa culture at its richest.</strong> Khumjung, Thame, the Sherpa Culture Museum, and Tengboche if you extend.",
              "<strong>It works in winter.</strong> Unlike Base Camp, this is a viable December and January trek.",
              "<strong>Room to extend.</strong> Adding Tengboche at 3,956 m makes it a ten-day trip with the monastery included.",
            ],
          },
          { p: "It is the trek we recommend most often to families, to travellers in their seventies, and to anyone whose doctor has advised against sleeping above 4,000 m." },
        ],
      },
      {
        h2: "Pikey Peak: The Best Value Everest View in Nepal",
        blocks: [
          { p: "Pikey Peak sits in lower Solukhumbu at 4,065 m, and from its summit you can see Everest, Lhotse, Makalu, Kanchenjunga, Dhaulagiri, and the Numbur range in a single 360-degree sweep. Hillary reportedly called it his favourite Everest viewpoint." },
          { p: "Three reasons it is underrated:" },
          {
            ol: [
              "<strong>No mountain flight needed.</strong> It is reached by road from Kathmandu via Dhap, which removes the Lukla risk entirely.",
              "<strong>Almost nobody walks it.</strong> You will share the ridge with Sherpa villagers and yaks rather than with trekking groups.",
              "<strong>It is superb in winter.</strong> Low enough to be comfortable, high enough for the full panorama, and December air is the clearest of the year.",
            ],
          },
          { p: "The trail also passes Junbesi, Thuptenchholing, and Taksindu — three working monasteries on the old Everest approach route that Hillary and Tenzing walked. See our [[post:pikey-peak-trek-guide|Pikey Peak guide]] for the full route." },
        ],
      },
      {
        h2: "Flights and Helicopter Tours",
        blocks: [
          { p: "If you have days rather than weeks, two options put you in front of Everest without walking." },
          { p: "<strong>The [[trek:everest-mountain-flight|mountain flight]]</strong> is an hour from Kathmandu in a fixed-wing aircraft flying the length of the range. Every passenger gets a window seat and the crew rotate people to the cockpit. It is the cheapest way to see Everest at close range, and it runs on clear mornings from October to March." },
          { p: "<strong>The [[trek:everest-base-camp-helicopter-tour|Base Camp helicopter tour]]</strong> is a half-day: up the Khumbu valley from Kathmandu, a landing near Kala Patthar at 5,545 m for 10 to 15 minutes, then breakfast at the Everest View Hotel at Syangboche on the way down. You stand on the same viewpoint the trekkers reach on day nine." },
          { p: "One caution on the heli tour: it takes you from 1,400 m to above 5,300 m in under an hour, which is why landings are kept short and the breakfast stop is lower down. Most people feel only light-headed, but if you have a heart or lung condition, or are pregnant, take medical advice first." },
        ],
      },
      {
        h2: "Choosing Between Them",
        blocks: [
          {
            ul: [
              "<strong>Two weeks, good fitness, want the full thing:</strong> [[trek:everest-base-camp-trek|Everest Base Camp]].",
              "<strong>Twelve days, want quieter trails and the best panorama:</strong> [[trek:gokyo-lake-trek|Gokyo Lakes]].",
              "<strong>Nine days, want comfort and low altitude:</strong> [[trek:everest-view-trek|Everest View Trek]].",
              "<strong>Eight days, want solitude and no mountain flight:</strong> [[trek:pikey-peak-trek|Pikey Peak]].",
              "<strong>One day, want to stand at 5,545 m:</strong> [[trek:everest-base-camp-helicopter-tour|Base Camp helicopter tour]].",
              "<strong>One hour, want to see Everest from the air:</strong> [[trek:everest-mountain-flight|Everest mountain flight]].",
            ],
          },
          { p: "And one combination worth knowing about: a short Khumbu trek to Namche and Tengboche, followed by a helicopter out from Namche. It gives you the culture, the forest, and the Everest View panorama in five or six days, with no long descent. Ask us and we will build it." },
        ],
      },
    ],
    faqs: [
      { question: "Can I see Everest without trekking to Base Camp?", answer: "Yes, and arguably better. Everest is not visible from Base Camp at all — the best views are from Kala Patthar, Gokyo Ri, the Everest View Hotel trail at 3,880 m, and Pikey Peak at 4,065 m. The last two are reached on short, low treks, and a helicopter tour lands at Kala Patthar itself." },
      { question: "What is the shortest trek in the Everest region?", answer: "The Everest View Trek at nine days, which reaches 3,880 m at the Hotel Everest View. Shorter still is a five or six day version to Namche and Tengboche with a helicopter out from Namche, which we build on request." },
      { question: "Is the Everest View Trek worth doing?", answer: "Very much so. The highest night is 3,440 m at Namche, the lodges are the best in the Khumbu, the Sherpa villages of Khumjung and Thame are the cultural heart of the region, and the panorama from the Everest View Hotel terrace includes Everest, Lhotse, Nuptse and Ama Dablam. It also works in winter, which Base Camp does not." },
      { question: "Which gives the better Everest view, Pikey Peak or the Everest View Trek?", answer: "Pikey Peak for the sweep — Everest, Makalu, Kanchenjunga and Dhaulagiri in one panorama from 4,065 m. The Everest View trail for proximity, with Everest, Lhotse and Ama Dablam much closer and the Khumbu villages around you. Pikey also avoids the Lukla flight entirely." },
      { question: "How much does the Everest helicopter tour cost?", answer: "It is the most expensive option per hour and the cheapest per day — a half-day trip from Kathmandu with a Kala Patthar landing and breakfast at the Everest View Hotel. Check the tour page for the current per-seat price, which depends on how many passengers share the charter." },
      { question: "Is a mountain flight worth it if I am also trekking?", answer: "Many trekkers do both, and they are genuinely different. The flight gives you the scale of the whole range in an hour from a window seat; the trek gives you the valley at walking pace. If your dates include a spare clear morning in Kathmandu, the flight is an easy addition." },
      { question: "Are these options safe at altitude?", answer: "The treks are low enough that altitude risk is small, which is the point of them. The helicopter tour is a rapid ascent to above 5,300 m, so landings are deliberately brief and the meal stop is made lower down. Anyone with a heart or lung condition, or who is pregnant, should take medical advice before booking the heli tour." },
    ],
    relatedTreks: [
      "everest-view-trek",
      "pikey-peak-trek",
      "everest-base-camp-helicopter-tour",
      "everest-mountain-flight",
      "gokyo-lake-trek",
      "everest-base-camp-trek",
    ],
    tripsNote: "Shorter ways into the Everest region, from a one-hour flight to a nine-day teahouse trek.",
    relatedPosts: [
      "everest-base-camp-trek-complete-guide",
      "pikey-peak-trek-guide",
      "everest-base-camp-helicopter-tour-guide",
      "mountain-flights-in-nepal-guide",
    ],
    tags: ["everest view trek", "short treks", "pikey peak", "khumbu", "helicopter tour"],
    meta: {
      title: "Short Everest Treks: See the Khumbu Without Going to Base Camp",
      description: "Everest View Trek, Pikey Peak, Gokyo, helicopter tours and mountain flights compared — how to see Everest properly without fourteen days or 5,500 m.",
      keywords: "short Everest trek, Everest View trek, Pikey Peak Everest view, Everest without base camp, Everest helicopter tour",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "namche-bazaar-acclimatisation-guide",
    title: "Namche Bazaar: The Khumbu's Capital and Your First Rest Day",
    cluster: "everest",
    date: "2026-04-24",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-05-namche-bazaar-from-above",
      alt: "Namche Bazaar from above, a horseshoe of Sherpa lodges at 3,440 m, Nepal.",
    },
    excerpt:
      "Namche Bazaar at 3,440 m is where every Khumbu trek pauses, and how you spend the rest day matters more than most people realise. What to do, what to see, and why the acclimatisation walk is not optional.",
    intro: [
      { p: "Namche Bazaar is the administrative, commercial, and cultural capital of the Khumbu — a horseshoe of Sherpa lodges and shops built into a steep amphitheatre at 3,440 m, with Kongde Ri opposite and Thamserku above. Every trek in the region passes through it, and every well-built itinerary stops for a full day." },
      { p: "That day is the most important rest day of your trek, and it is not a rest day. Here is how to use it." },
    ],
    sections: [
      {
        h2: "Why the Rest Day Exists",
        blocks: [
          { p: "You arrive in Namche having gained nearly 800 m from Phakding, most of it in a steep two-hour climb. At 3,440 m, oxygen availability is around 64% of sea level, and this is the first altitude at which most trekkers notice something — a headache, a poor night's sleep, a dull appetite." },
          { p: "The rest day lets your body catch up before the next three nights take you to 3,956 m, 4,380 m, and eventually 5,160 m. Skipping it — as 11 and 12-day itineraries do — is the single biggest reason trekkers turn back lower down. Our [[post:everest-base-camp-trek-altitude-profile|altitude profile guide]] shows the difference in numbers." },
          { p: "The key principle is <strong>climb high, sleep low</strong>. You walk several hundred metres above the village and return to sleep at 3,440 m. Sitting in a bakery all day feels restful and does almost nothing for acclimatisation." },
        ],
      },
      {
        h2: "The Acclimatisation Walks",
        blocks: [
          {
            table: {
              head: ["Walk", "High point", "Time", "What you get"],
              rows: [
                ["Hotel Everest View and Syangboche", "3,880 m", "3–4 hours return", "The classic Everest, Lhotse, Nuptse and Ama Dablam panorama from the terrace"],
                ["Khumjung village", "3,790 m", "4–5 hours return", "A traditional Sherpa village, Hillary's school, and the Khumjung monastery"],
                ["Thame", "3,800 m", "6–7 hours return", "A quiet Bhote Koshi village, home to many Everest summiters, and a cliffside monastery"],
                ["Sagarmatha National Park museum viewpoint", "3,550 m", "1 hour return", "The shortest option, with a first Everest view and good interpretation"],
              ],
            },
          },
          { p: "The standard choice is the Everest View Hotel and Khumjung as a loop — up through Syangboche to the hotel terrace for morning tea with Everest in front of you, then down to Khumjung and back to Namche. Four to five hours, about 450 m of gain, and one of the best half days in Nepal." },
          { p: "Do not skip it because you feel fine. Feeling fine at 3,440 m is exactly when the walk does its work." },
        ],
      },
      {
        h2: "What Else to Do in Namche",
        blocks: [
          {
            ul: [
              "<strong>Sherpa Culture Museum and the Sagarmatha National Park visitor centre</strong> — on the ridge above the village, with a first view of Everest and the best interpretation of Sherpa history and Khumbu ecology you will find anywhere.",
              "<strong>The Saturday market</strong> — traders come up from the lower valleys, and it is the real working market that gives the village its name.",
              "<strong>Bakeries and coffee</strong> — Namche genuinely has good coffee and apple pie, and after two days walking this registers as a significant cultural achievement.",
              "<strong>Gear shops</strong> — everything from lost gloves to a replacement down jacket, at higher prices than Kathmandu but lower than you would expect.",
              "<strong>The gompa</strong> — the village monastery, modest and active.",
              "<strong>ATMs</strong> — they exist and they are unreliable. Do not rely on them; bring cash from Kathmandu.",
              "<strong>Irish pub at 3,440 m</strong> — it is there, and one drink is fine. A heavy night at altitude is not.",
            ],
          },
          { p: "A word on Wi-Fi and phones: Namche has the best connectivity in the Khumbu, and this is the sensible place to send your last messages home before the upper valley." },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Lodges:</strong> the widest choice on the trek, many with attached bathrooms and hot showers. In peak October the good ones fill early, which is why guides call ahead.",
              "<strong>Temperature:</strong> daytime 8 to 15 °C in the main seasons, nights around -5 to 0 °C. Your first properly cold night.",
              "<strong>Laundry:</strong> available, and the last practical chance before the descent.",
              "<strong>Shower:</strong> take one here. Above Dingboche, washing becomes a bowl of hot water.",
              "<strong>Altitude warning signs:</strong> a persistent headache that does not respond to fluid and paracetamol, vomiting, or breathlessness at rest means you tell your guide and you do not go higher the next day.",
              "<strong>Hydration:</strong> three to four litres. The climb to Namche is where most people first fall behind on fluid.",
            ],
          },
          { p: "Namche is also the last place on the trek where you can genuinely fix a kit problem. The gear shops carry gloves, hats, socks, sunglasses, headlamps, batteries, and sometimes boots, and several will hire out a warmer sleeping bag for the upper valley if yours turns out to be optimistic. If anything in your kit has already proved inadequate on the climb from Phakding, deal with it here rather than at Dingboche." },
          { p: "On the way down, Namche arrives like a city — hot showers, beer, pizza, and thick oxygen-rich air — and almost every trekker spends an extra evening there feeling extraordinarily pleased with themselves. That is part of the design too." },
        ],
      },
    ],
    faqs: [
      { question: "How high is Namche Bazaar?", answer: "3,440 m, reached after a climb of nearly 800 m from Phakding. At that altitude oxygen availability is around 64% of sea level, which is why it is the first place most trekkers notice the effects and why every good itinerary stops for a full day." },
      { question: "What should I do on the Namche acclimatisation day?", answer: "Walk up, not sit still. The standard option is a loop to the Hotel Everest View at 3,880 m and Khumjung village, about four to five hours and 450 m of gain, returning to sleep at 3,440 m. Climbing high and sleeping low is what actually acclimatises you." },
      { question: "Can I skip the rest day at Namche?", answer: "You can, and we advise strongly against it. Shorter 11 and 12-day itineraries do exactly this, and it is the main reason trekkers on those trips turn back at Lobuche. The rest day is where the rest of the trek becomes possible." },
      { question: "Is there Wi-Fi and an ATM in Namche?", answer: "Wi-Fi yes, sold by most lodges and the best connectivity in the Khumbu. ATMs exist but are unreliable and charge heavily, so treat them as a backup rather than a plan — withdraw the cash you need for the whole trek in Kathmandu." },
      { question: "What is there to see in Namche itself?", answer: "The Sherpa Culture Museum and national park visitor centre on the ridge, with a first Everest view; the Saturday market; the village gompa; good bakeries; and a surprising number of gear shops. It is a real working town rather than a trekking service station." },
      { question: "How cold is Namche at night?", answer: "Around -5 to 0 °C in the main seasons, colder in winter. It will be your first properly cold night of the trek, and a good test of whether your sleeping bag is warm enough for what comes above." },
      { question: "Should I shower in Namche?", answer: "Yes, and enjoy it. Namche has reliable hot showers and laundry, and both become progressively worse and then unavailable as you climb. Above Dingboche, washing is a bowl of hot water and most trekkers stop bothering." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-view-trek",
      "gokyo-lake-trek",
      "namche-to-kathmandu-helicopter-flight",
    ],
    tripsNote: "Khumbu treks that include a full acclimatisation day at Namche, as every itinerary should.",
    relatedPosts: [
      "everest-base-camp-trek-itinerary-day-by-day",
      "everest-base-camp-trek-altitude-profile",
      "tengboche-monastery-and-sherpa-culture",
      "altitude-sickness-in-nepal-prevention-and-treatment",
    ],
    tags: ["namche bazaar", "acclimatisation", "khumbu", "everest base camp"],
    meta: {
      title: "Namche Bazaar: The Khumbu's Capital and Your First Rest Day",
      description: "Namche Bazaar at 3,440 m — why the acclimatisation day matters, which walks to do, what to see in the village.",
      keywords: "Namche Bazaar, Namche acclimatisation day, Hotel Everest View, Khumjung, Everest trek rest day",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "tengboche-monastery-and-sherpa-culture",
    title: "Tengboche Monastery and Sherpa Culture in the Khumbu",
    cluster: "everest",
    date: "2026-04-28",
    hero: {
      image: "mardi-treks/everest-base-camp-trek/everest-base-camp-trek-02-view-of-tengboche-from-phortse-on-the-way-to-pheriche-nepal",
      alt: "Tengboche monastery seen from Phortse, Everest region, Nepal.",
    },
    excerpt:
      "Tengboche at 3,956 m is the religious centre of the Khumbu and the cultural high point of the Everest trek. What happens at the monastery, how to attend a puja respectfully, the Mani Rimdu festival, and how Sherpa Buddhism shapes the whole valley.",
    intro: [
      { p: "Most trekkers arrive at Tengboche in the early afternoon, tired from a 600 m climb out of Phunki Tenga, check into a lodge, and watch Everest and Ama Dablam catch the evening light above the monastery courtyard. Those who go into the monastery for the late-afternoon puja usually describe it as the thing they remember longest from the trek." },
      { p: "The Khumbu is not scenery with villages in it. It is a Sherpa Buddhist landscape, and understanding a little of that changes what you are looking at." },
    ],
    sections: [
      {
        h2: "Tengboche Monastery",
        blocks: [
          { p: "Tengboche Gompa is the largest and most important monastery in the Khumbu, founded in 1916 by Lama Gulu at a site identified by the head of Rongbuk monastery in Tibet. It has been rebuilt twice — after an earthquake destroyed it in 1934 and after a fire in 1989, which started from an electrical fault and destroyed the original scriptures, murals, and statues. International donations funded the reconstruction that stands today." },
          { p: "The setting is the point. The monastery sits on a spur at 3,956 m with Everest, Lhotse, Nuptse, Ama Dablam, and Thamserku around it, and it is the place where climbers historically came for blessing before going to the mountain — a tradition Everest expeditions still observe." },
          {
            ul: [
              "<strong>The main hall</strong> holds a large Sakyamuni Buddha, wall murals, and butter lamps, with a rebuilt library of Tibetan texts.",
              "<strong>The monks</strong> number around thirty, with a school for young novices.",
              "<strong>Puja</strong> — prayers are held in the early morning and late afternoon, and visitors may usually attend the afternoon one.",
              "<strong>The museum</strong> beside the courtyard gives useful context on Sherpa Buddhism and the monastery's history.",
            ],
          },
        ],
      },
      {
        h2: "Attending a Puja Respectfully",
        blocks: [
          { p: "The afternoon prayer service is open to visitors at the monks' discretion, and behaving properly is not complicated." },
          {
            ol: [
              "Ask at the entrance, and wait to be shown where to sit. Do not walk in during prayers.",
              "Remove your boots and hat. Keep your shoulders and knees covered.",
              "Sit at the back and at the side, never in front of the monks or on a cushion that belongs to one.",
              "Do not photograph inside without explicit permission, and never during the prayers themselves.",
              "Turn your phone off — not silent, off.",
              "Walk clockwise around the hall and around any shrine or chorten outside.",
              "Leave a donation in the box. The monastery runs on them.",
              "Leave quietly if you need to go before the end, moving behind the seated monks.",
            ],
          },
          { p: "A puja lasts around an hour: chanting, horns, drums, cymbals, and long stretches of low recitation. It is not a performance and there is no narration. Sit with it." },
        ],
      },
      {
        h2: "Mani Rimdu",
        blocks: [
          { p: "Once a year, over the full moon of the ninth Tibetan month — usually late October or November — Tengboche holds <strong>Mani Rimdu</strong>, a three-day festival of masked dances, empowerment rituals, and blessings that draws Sherpa families from across the Khumbu." },
          { p: "The sequence runs over nearly three weeks of preparation, with the public days at the end: the distribution of blessed rilbu pills, the Cham masked dances in the courtyard depicting the triumph of Buddhism over earlier traditions, and a final fire ceremony. It is the most important event in the Khumbu calendar and an extraordinary thing to witness." },
          { p: "If you want to be there, tell us when you enquire. The dates move with the lunar calendar each year, and Tengboche's handful of lodges are booked out months ahead. Our [[post:best-time-for-everest-base-camp-trek|seasons guide]] covers how it fits into an autumn itinerary." },
        ],
      },
      {
        h2: "Sherpa Culture Along the Trail",
        blocks: [
          { p: "The Sherpa people migrated from eastern Tibet to the Khumbu around 500 years ago — the name means people from the east — and their Nyingma Buddhism, language, and architecture are Tibetan in origin rather than Nepali. Almost everything you walk past has meaning." },
          {
            ul: [
              "<strong>Mani walls</strong> — long stone walls carved with om mani padme hum. Pass them on your left, walking clockwise.",
              "<strong>Chortens and stupas</strong> — reliquary monuments at village entrances and passes. Walk clockwise around them.",
              "<strong>Prayer flags</strong> — five colours for the elements, printed with mantras meant to be carried by the wind. Never touch or remove them.",
              "<strong>Prayer wheels</strong> — turn them clockwise, with your right hand, as you pass.",
              "<strong>Kani gates</strong> — painted archways at village entrances, with murals of protective deities inside.",
              "<strong>Sacred mountains</strong> — Khumbila above Namche is the Khumbu's protector deity and has never been climbed. Ama Dablam means mother's necklace.",
              "<strong>Yaks and the high pastures</strong> — the traditional Sherpa economy was trade over the Nangpa La into Tibet and yak herding; trekking replaced trade after the border closed in the 1950s.",
            ],
          },
          { p: "Other monasteries worth a look: <strong>Pangboche</strong>, the oldest in the Khumbu and on the route to Dingboche; <strong>Khumjung</strong>, visited on the Namche rest day; and <strong>Thame</strong>, in the Bhote Koshi valley, whose village has produced an extraordinary number of Everest summiters including Tenzing Norgay and Apa Sherpa." },
        ],
      },
      {
        h2: "Being a Good Visitor",
        blocks: [
          {
            ul: [
              "Ask before photographing people, monks included, and accept a refusal without negotiation.",
              "Do not give money or sweets to children — donate to the Khumjung school or a village health post instead.",
              "Eat vegetarian in Sagarmatha National Park where you can. Many Khumbu lodges do not serve meat on religious grounds.",
              "Do not remove stones, carvings, flags, or anything else from a shrine.",
              "Keep noise down around monasteries, particularly early morning and late afternoon when prayers are held.",
              "Greet people with namaste, or tashi delek in the Tibetan-speaking villages.",
              "Leave a donation at the monasteries you enter. They maintain themselves on visitor generosity and community support.",
            ],
          },
          { p: "And one cultural note that colours the whole trek: the people running your lodge are, very often, from families who have climbed Everest. The casual competence of the Khumbu at high altitude is not a tourist performance — it is three generations of professional mountaineering in one valley." },
        ],
      },
    ],
    faqs: [
      { question: "Can visitors enter Tengboche monastery?", answer: "Yes, at the monks' discretion, and visitors are usually welcome at the late-afternoon puja. Remove boots and hat, cover shoulders and knees, sit at the back and side, turn your phone off, do not photograph during prayers, and leave a donation. Ask at the entrance rather than walking in." },
      { question: "How high is Tengboche?", answer: "3,956 m, reached on day five of the standard Everest Base Camp itinerary after a 600 m climb from Phunki Tenga. It is the night most trekkers first sleep close to 4,000 m, and the views of Everest, Lhotse and Ama Dablam from the courtyard are among the best on the trek." },
      { question: "What is Mani Rimdu?", answer: "Tengboche's annual three-day festival of masked dances, blessings and a fire ceremony, held over the full moon of the ninth Tibetan month — usually late October or November. It is the most important event in the Khumbu calendar. The dates move each year and Tengboche's few lodges book out months ahead." },
      { question: "Should I attend the puja if I am not Buddhist?", answer: "Yes — visitors of any faith or none are welcome, provided they are quiet and respectful. You are not expected to participate, only to sit at the back and let it happen. Most of our guests describe it as the cultural highlight of the trek." },
      { question: "Why should I walk clockwise around chortens and mani walls?", answer: "Clockwise circumambulation is the Buddhist convention for showing respect to a sacred object, and it costs you nothing to follow. The same applies to prayer wheels, which you turn clockwise with your right hand. Passing a mani wall on your left is the local habit you will see everyone else keeping." },
      { question: "Is it rude to photograph monks and villagers?", answer: "Only if you do not ask. Most people are relaxed about it when asked, and a refusal should be accepted straight away. Inside monasteries, ask the monk on duty, and never photograph during prayers. A photograph that someone agreed to is a better photograph anyway." },
      { question: "Which other monasteries are worth visiting in the Khumbu?", answer: "Pangboche, the oldest in the region, on the trail above Tengboche; Khumjung, reached on the Namche acclimatisation day, with Hillary's school beside it; and Thame in the Bhote Koshi valley, the home village of Tenzing Norgay and many other Everest summiters." },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "everest-view-trek",
      "everest-three-pass-trek",
      "gokyo-lake-trek",
    ],
    tripsNote: "Khumbu treks that include Tengboche, and the shorter routes through the Sherpa villages below it.",
    relatedPosts: [
      "namche-bazaar-acclimatisation-guide",
      "everest-base-camp-trek-itinerary-day-by-day",
      "nepal-festival-calendar",
      "responsible-trekking-in-nepal",
    ],
    tags: ["tengboche", "sherpa culture", "mani rimdu", "khumbu", "buddhism"],
    meta: {
      title: "Tengboche Monastery and Sherpa Culture in the Khumbu",
      description: "Tengboche monastery at 3,956 m — its history, how to attend a puja respectfully, the Mani Rimdu festival, and the Sherpa Buddhist landscape along the Everest trail.",
      keywords: "Tengboche monastery, Mani Rimdu festival, Sherpa culture Khumbu, Everest trek monastery, Pangboche",
    },
  },
];
