import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * November 2026 series, week 4: planning a spring 2027 trek (Friday 4
 * December), written for people choosing dates over the winter.
 *
 * Lunar festival dates differ by a day between calendars; only Nepali New Year
 * (14 April 2027) is given as a firm date. The rest are given as "around" or
 * by month, with a note to confirm nearer the time.
 */
export const winterB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "planning-a-spring-2027-trek-in-nepal",
    title: "Planning a Spring 2027 Trek in Nepal: What to Book and When",
    cluster: "winter",
    date: "2026-12-04",
    hero: {
      image: trekImage("poonhill-trek", "03-160315-019-view-from-poon-hill"),
      alt: "The Dhaulagiri and Annapurna ranges at sunrise seen from the summit of Poon Hill.",
    },
    excerpt:
      "Spring is Nepal's second trekking season: warmer days, rhododendrons in flower and the Everest expedition season at base camp. If you are thinking of March, April or May 2027, now is the time to plan. Which month suits which trek, the festivals, and a month-by-month timeline from booking to boarding.",
    intro: [
      {
        p: "Autumn gets most of the attention, but spring is the season many guides prefer. From March to May the days are longer and warmer, the rhododendron forests turn red and pink, and at Everest Base Camp the expedition tents go up for the climbing season. The views are a little hazier than in November, and May brings afternoon showers, but for many trekkers that is a fair price for the colour and the warmth.",
      },
      {
        p: "If you are thinking about a trek in spring 2027, the next few weeks are the best time to plan it. Popular April dates fill early, international flights are cheaper booked ahead, and a training plan needs about three months. This guide covers which month suits which trek, the festivals worth timing a trip around, and a simple timeline from now until you land in Kathmandu.",
      },
    ],
    sections: [
      {
        h2: "March, April or May?",
        blocks: [
          {
            table: {
              head: ["", "March", "April", "May"],
              rows: [
                ["Weather", "Clear and cool; cold nights up high", "Warm days, settled; the classic spring month", "Warmer and hazier; afternoon cloud and showers increase"],
                ["Views", "Often very clear early in the month", "Good, with some haze in the afternoon", "Hazier; best early in the morning"],
                ["Snow on high passes", "Possible, especially early March", "Mostly cleared by mid-April", "Usually clear"],
                ["Rhododendrons", "Start flowering low down", "Peak bloom between about 2,000 and 3,500 m", "Over low down; still flowering higher up"],
                ["Crowds", "Moderate", "Busiest month of spring", "Busy at Everest Base Camp, quieter elsewhere"],
                ["Best for", "Lower treks, Poon Hill, clear views", "Almost everything", "Everest Base Camp, Upper Mustang, peak climbing"],
              ],
              note: "Typical conditions. The monsoon usually reaches Nepal in the first half of June. Our [[post:best-time-to-visit-nepal-trekking-seasons|month-by-month guide]] covers the whole year.",
            },
          },
        ],
      },
      {
        h2: "The Best Treks for Spring",
        blocks: [
          {
            table: {
              head: ["Trek", "Best spring window", "Why"],
              rows: [
                ["[[trek:poonhill-trek|Ghorepani Poon Hill]]", "Late March to mid April", "The climb from Ulleri to Ghorepani is one of Nepal's great rhododendron walks"],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "March to April", "Rhododendron forest on the lower ridge, and close views of Machhapuchhre above it"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "April", "Rhododendron and bamboo in the gorge below Deurali, and warmer nights at the top than in autumn"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "April", "Flowering forest in the lower valley and a quieter trail than the Annapurnas"],
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "April to mid May", "Expedition season: the base camp tents are up and the climbing teams are on the mountain"],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "April", "The Thorong La is more reliably clear of heavy snow than in March"],
                ["[[trek:upper-mustang-trek|Upper Mustang]]", "May", "In the rain shadow, so May stays dry, and the Tiji festival usually falls this month"],
                ["[[trek:island-peak-climbing|Island Peak]]", "April to May", "The main spring climbing window for Nepal's trekking peaks"],
              ],
            },
          },
          {
            p: "Our guide to [[post:rhododendron-season-in-the-annapurna-region|rhododendron season]] has more on where and when the forests flower.",
          },
          {
            figure: {
              image: trekImage("island-peak-climbing", "00-island-peak-nepal"),
              alt: "The summit ridge and glaciated face of Island Peak in the Everest region.",
              caption:
                "Island Peak, the most popular trekking peak in Nepal. Spring is its main climbing season. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Festivals in Spring 2027",
        blocks: [
          {
            p: "Several of Nepal's most colourful festivals fall in spring. Most follow the lunar calendar, so their dates are published in advance but can differ by a day between calendars. Confirm them nearer the time.",
          },
          {
            table: {
              head: ["Festival", "When in 2027", "Where to see it"],
              rows: [
                ["Holi", "Around 21–22 March; the Terai celebrates a day after the hills", "Kathmandu's Basantapur and Thamel, Pokhara Lakeside"],
                ["Nepali New Year (2084)", "Wednesday 14 April", "Everywhere; Bisket Jatra in Bhaktapur runs over the days around it"],
                ["Buddha Jayanti", "May; most calendars give 20 May", "Boudhanath and Swayambhunath in Kathmandu, and Lumbini"],
                ["Tiji", "Usually May; dates are set by the monastery in Lo Manthang", "Lo Manthang, Upper Mustang"],
              ],
              note: "Our [[post:nepal-festival-calendar|Nepal festival calendar]] covers the whole year, and our [[post:tiji-festival-upper-mustang|Tiji guide]] explains how to plan an Upper Mustang trek around the festival.",
            },
          },
          {
            figure: {
              image: trekImage("upper-mustang-trek", "05-lomanthang-1"),
              alt: "Flat-roofed whitewashed houses of Lo Manthang seen past a rooftop chorten and prayer flags, with bare eroded hills behind.",
              caption:
                "Lo Manthang, the walled capital of Upper Mustang, where the Tiji festival is held each spring. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Your Timeline: From Now to Departure",
        blocks: [
          {
            table: {
              head: ["When", "What to do"],
              rows: [
                ["December", "Choose your route and dates. Book the trek and put down the deposit. Book international flights while fares are lower. Buy travel insurance now, so that cancellation cover starts straight away"],
                ["December to January", "Start training. A twelve-week plan that begins in mid-December ends in mid-March"],
                ["January", "Check your passport is valid for at least six months beyond your return. Book a travel clinic appointment for six to eight weeks before you leave"],
                ["February", "Buy or rent kit, and break in your boots on long walks. Send us passport copies if your trek needs a restricted-area permit or domestic flights"],
                ["Two to three weeks before", "Get your final itinerary and briefing. Confirm insurance details and emergency contacts. Pack, and weigh your bag"],
                ["On arrival", "Get your visa on arrival at Kathmandu airport. Meet your guide for a briefing; permits are finalised in Kathmandu"],
              ],
            },
          },
          {
            p: "Our [[post:how-to-train-for-a-nepal-trek|12-week training plan]], [[post:nepal-visa-on-arrival-guide|visa guide]] and [[post:vaccinations-for-trekking-in-nepal|vaccinations guide]] cover each step in detail.",
          },
        ],
      },
      {
        h2: "Why Book Early for Spring",
        blocks: [
          {
            ul: [
              "<strong>April fills first.</strong> The best-known treks are busiest in April, and the most popular lodges at places like Namche Bazaar, Dingboche and Ghorepani fill early. Early bookings get the better rooms.",
              "<strong>Lukla flights.</strong> In recent peak seasons, Kathmandu's airport could not handle the traffic and Lukla flights moved to Manthali airport at Ramechhap, a four to five hour drive east of Kathmandu. Seats are limited and early-morning slots go first. Our [[post:lukla-flight-guide|Lukla flight guide]] explains how it works.",
              "<strong>Your choice of guide.</strong> If you trekked with a guide you liked before, or want one with particular experience, the earlier you ask the more likely they are free.",
              "<strong>Restricted areas.</strong> Treks such as Upper Mustang and Manaslu need a restricted-area permit, a minimum of two trekkers and a registered agency. Early booking makes it easier to match solo trekkers with a partner.",
              "<strong>Expedition season.</strong> From April, Everest Base Camp and the Khumbu fill with climbing teams and their support staff, and lodges and flights get busier still.",
            ],
          },
          {
            figure: {
              image: trekImage("everest-view-trek", "05-lukla-airport-during-everest-base-camp-trek-0092"),
              alt: "The short sloping runway at Lukla with its terminal buildings and a hillside village rising behind it.",
              caption:
                "Lukla airport. In spring, book flights early and keep a buffer day or two for weather delays. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "What Spring Trekking Is Like",
        blocks: [
          {
            ul: [
              "<strong>Warmer days and nights.</strong> Lodges are still unheated, but spring nights are noticeably milder than autumn ones at the same altitude, especially from mid-April.",
              "<strong>Haze.</strong> Dust and smoke from farm burning in the lowlands make the air hazier than in autumn, particularly from late April. The mountains are clearest early in the morning, so start early.",
              "<strong>Afternoon cloud and showers.</strong> Through late April and May, clouds often build after midday and bring a short shower or a dusting of snow up high. Walk in the morning and carry a waterproof.",
              "<strong>Longer days.</strong> By April there are over twelve hours of daylight, which makes long stages more relaxed.",
              "<strong>Colour.</strong> Rhododendron, magnolia and wild flowers, and green barley in the villages.",
            ],
          },
        ],
      },
      {
        h2: "Start Planning With Us",
        blocks: [
          {
            p: "Tell us when you would like to travel, how many days you have and what you want from the trek, and we will suggest a route and dates for spring 2027. Every trek on our <a href=\"/treks\">treks page</a> has a full day-by-day itinerary. You can reach us through the <a href=\"/contact\">contact page</a>; we reply within 24 hours.",
          },
          {
            p: "If you are still deciding between seasons, our [[post:best-time-to-visit-nepal-trekking-seasons|best time to visit guide]] compares spring and autumn month by month. And if you would rather go sooner, our [[post:winter-trekking-in-nepal-best-routes|winter trekking guide]] covers the quiet, clear months of December to February.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is spring a good time to trek in Nepal?",
        answer:
          "Yes. Spring, from March to May, is Nepal's second trekking season. Days are longer and warmer, the rhododendron forests flower and the Everest expedition season brings base camp to life. Views are a little hazier than in autumn, and May brings afternoon showers.",
      },
      {
        question: "What is the best month to trek in Nepal in spring?",
        answer:
          "April, for most treks. The weather is settled, the high passes are mostly clear of heavy snow and the rhododendrons are at their peak between about 2,000 and 3,500 m. March is clearer but colder; May is warmer but hazier.",
      },
      {
        question: "When do rhododendrons bloom in Nepal?",
        answer:
          "From March to May, starting at lower altitudes and moving up. On the Poon Hill trek the bloom usually peaks from late March to mid April. Higher up, around 3,000 to 3,500 m, flowers last into May.",
      },
      {
        question: "When should I book a spring trek in Nepal?",
        answer:
          "Three to six months ahead is ideal, so December or January for a March or April trek. That gives you time to train, secures your preferred dates and lodges, and usually means cheaper international flights.",
      },
      {
        question: "Is Everest Base Camp busy in spring?",
        answer:
          "Yes, especially from April to mid May, when climbing teams set up base camp for the Everest season. It is the only time you will see the expedition tents, which many trekkers find exciting. Lodges and Lukla flights are busy, so book early.",
      },
      {
        question: "Can I cross the Thorong La in March?",
        answer:
          "Sometimes, but snow can close it for days in early spring. April is more reliable. If you trek the Annapurna Circuit in March, keep spare days and be ready to wait or turn back.",
      },
      {
        question: "When is Holi in 2027?",
        answer:
          "Around 21–22 March 2027. Holi follows the lunar calendar, and the Terai celebrates a day after the hills and Kathmandu. Confirm the exact date nearer the time.",
      },
      {
        question: "When is Nepali New Year 2027?",
        answer:
          "Wednesday 14 April 2027, the start of the year 2084 in the Bikram Sambat calendar. Bisket Jatra in Bhaktapur is celebrated over the days around it.",
      },
      {
        question: "When is the Tiji festival in 2027?",
        answer:
          "Tiji is usually held in May, on dates set by the monastery in Lo Manthang according to the Tibetan calendar. Check the confirmed dates before booking an Upper Mustang trek around it.",
      },
      {
        question: "Do Lukla flights go from Kathmandu in spring?",
        answer:
          "In recent peak seasons, many Lukla flights have moved to Manthali airport at Ramechhap, a four to five hour drive east of Kathmandu, because Kathmandu's airport is too busy. Plan for an early-morning drive, or an overnight stay near Ramechhap.",
      },
      {
        question: "How long does it take to train for a Nepal trek?",
        answer:
          "About twelve weeks for most people. For a trek in mid-March, start training in mid-December. Walking up and down hills with a pack is the best preparation.",
      },
      {
        question: "Is it very hot trekking in Nepal in May?",
        answer:
          "Not on the trail. The low valleys and Pokhara are hot and humid by May, but the trekking routes are much higher and pleasant. Expect warm days, mild nights and afternoon showers.",
      },
    ],
    relatedTreks: [
      "poonhill-trek",
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "langtang-valley-trek",
      "upper-mustang-trek",
      "island-peak-climbing",
      "mardi-himal-trek",
      "annapurna-circuit-trek",
    ],
    tripsNote: "Treks at their best in spring, from rhododendron walks to the Everest expedition season.",
    relatedPosts: [
      "best-time-to-visit-nepal-trekking-seasons",
      "rhododendron-season-in-the-annapurna-region",
      "how-to-train-for-a-nepal-trek",
      "tiji-festival-upper-mustang",
      "lukla-flight-guide",
      "nepal-visa-on-arrival-guide",
    ],
    tags: ["spring 2027", "trek planning", "rhododendron season", "everest base camp", "nepal festivals", "best time to trek"],
    meta: {
      title: "Planning a Spring 2027 Trek in Nepal: Months, Treks, Timeline",
      description:
        "Planning a spring 2027 trek in Nepal: March, April or May compared, the best spring treks, Holi, New Year and Tiji dates, and a timeline from booking to departure.",
      keywords:
        "spring trek Nepal 2027, best time to trek Nepal spring, Nepal trekking April 2027, rhododendron season Nepal, Everest Base Camp spring, Holi 2027 Nepal, Nepali New Year 2027, when to book Nepal trek",
    },
  },
];
