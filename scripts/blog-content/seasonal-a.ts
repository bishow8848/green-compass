import type { BlogContent } from "./build";
import { FESTIVALS, trekImage } from "./images";

/**
 * Autumn 2026 series, part 1: what is on over the next six weeks, the one
 * mountain festival of the season, and the month-by-month guide for November.
 *
 * These go out one a day at 09:00 Nepal Time from 10 October 2026. Festival
 * dates for 2083 BS were checked against published calendars on 9 October
 * 2026: Tihar 7–11 November, Mani Rimdu at Tengboche 26–28 October, Chhath
 * 13–16 November. Dashain's dates are the ones the Dashain series uses.
 */
export const seasonalA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "nepal-festivals-and-events-october-november-2026",
    title: "What's On in Nepal: Festivals and Events, October–November 2026",
    cluster: "seasonal",
    date: "2026-10-10",
    hero: {
      image: trekImage("kathmandu-valley-tour", "00-nepal-patan-durbar-square-10-full-res"),
      alt: "The tiered temples and brick paving of Patan Durbar Square in the Kathmandu valley.",
    },
    excerpt:
      "Six weeks, four major festivals and the best trekking weather of the year. This is the calendar for a trip to Nepal between mid-October and late November 2026: Dashain, Mani Rimdu at Tengboche, Tihar, Chhath, and what each one opens, closes and adds to a trip.",
    intro: [
      { p: "The stretch from the second week of October to the end of November is the most crowded page in Nepal's calendar. The monsoon is over, the air is at its clearest, and the country's two biggest festivals fall inside it with two more close behind. In 2026 they arrive late — Dashain in the second half of October, Tihar in the second week of November — so the festival season and the trekking season sit exactly on top of each other." },
      { p: "That is good news for a visitor, provided you know the dates. Each festival adds something you cannot see at any other time of year, and each one closes something you may be relying on. This is the calendar, with what to do about it." },
    ],
    sections: [
      {
        h2: "The Calendar at a Glance",
        blocks: [
          {
            table: {
              head: ["Date (2026)", "What", "Where it matters"],
              rows: [
                ["11 October", "Ghatasthapana — Dashain begins", "Nationwide"],
                ["17 – 20 October", "Phulpati, Maha Ashtami, Maha Navami", "Kathmandu valley, Gorkha; offices shut"],
                ["21 October", "Vijaya Dashami — the Dashain tika", "Every household; cities at their quietest"],
                ["25 October", "Kojagrat Purnima — Dashain ends", "Nationwide"],
                ["26 – 28 October", "Mani Rimdu", "Tengboche monastery, on the Everest Base Camp trail"],
                ["7 November", "Kaag Tihar — Tihar begins", "Nationwide"],
                ["8 November", "Kukur Tihar and Laxmi Puja", "Best in Kathmandu, Patan, Bhaktapur and Pokhara"],
                ["10 November", "Mha Puja and Nepal Sambat New Year 1147", "The Newar towns of the Kathmandu valley"],
                ["11 November", "Bhai Tika — Tihar ends", "Every household"],
                ["13 – 16 November", "Chhath", "Janakpur and the Terai; ponds and riverbanks in Kathmandu"],
                ["20 November", "Haribodhini Ekadashi", "Budhanilkantha and Changu Narayan"],
              ],
              note: "Festival dates follow the lunar calendar. These are from the published 2083 BS calendars; a household may observe a day slightly differently from its neighbour.",
            },
          },
          { p: "Around all of it runs the autumn trekking season. Skies are reliably clear from about the second week of October until early December, and the high passes are normally open throughout. Our guide to [[post:best-time-to-visit-nepal-trekking-seasons|Nepal's trekking seasons]] explains why this window is the one most people choose." },
        ],
      },
      {
        h2: "Dashain: 11 to 25 October",
        blocks: [
          { p: "Dashain is the big one — fifteen days in which Nepal goes home. Bamboo swings stand at the edge of every village, kites fill the sky above Kathmandu, and on the tenth day, <strong>Wednesday 21 October</strong>, elders press a red tika onto the foreheads of everyone younger. For a visitor the practical effect is concentrated in about six days, from Phulpati on the 17th to a couple of days after the tika: government offices and banks close, long-distance buses are full, and the capital empties." },
          { p: "None of that stops a trek. Lodges stay open on every main route and October is the best walking month of the year. What it punishes is paperwork left to the last minute, especially restricted-area permits. Everything is covered in our [[post:dashain-festival-nepal-travel-guide|Dashain travel guide]], with the day-by-day closures in the [[post:dashain-dates-calendar-for-travellers|Dashain dates calendar]] and the trail-side picture in [[post:trekking-in-nepal-during-dashain|trekking during Dashain]]." },
        ],
      },
      {
        h2: "Mani Rimdu: 26 to 28 October",
        blocks: [
          { p: "The day after Dashain ends, the most important festival of the Sherpa year begins at <strong>Tengboche monastery</strong>, at 3,867 metres on the main trail to Everest Base Camp. Monks who have spent more than two weeks in closed ritual open the courtyard for three days: a public blessing, a full day of masked dances, and a fire ceremony to close." },
          { p: "It is the one festival in Nepal you have to walk to, and the walk is four days from the airstrip at Lukla. Anyone starting the [[trek:everest-base-camp-trek|Everest Base Camp trek]] between about 20 and 23 October can be in the courtyard for the dances with a normal acclimatisation schedule. The timing, the lodges and the etiquette are in our [[post:mani-rimdu-festival-tengboche-guide|Mani Rimdu guide]]." },
        ],
      },
      {
        h2: "The Quiet Fortnight: 22 October to 6 November",
        blocks: [
          { p: "Between the Dashain tika and the first day of Tihar there are sixteen days with no major holiday in them. Offices reopen, permit desks work normally, buses run to timetable, and the weather is as good as it gets. If you have a free choice of dates and no wish to plan around a festival, this is the window to aim at — and in 2026 it lands in exactly the weeks most guidebooks recommend anyway." },
          { p: "It is also the busiest fortnight on the popular trails, because everyone else has made the same calculation. We look at how to use it in [[post:nepal-between-dashain-and-tihar|between Dashain and Tihar]], and at how to find space on the trail in [[post:how-to-avoid-crowds-on-nepal-treks-in-peak-season|avoiding the crowds in peak season]]." },
        ],
      },
      {
        h2: "Tihar: 7 to 11 November",
        blocks: [
          { p: "Tihar is the festival of lights, and for many visitors it is the better of the two to witness, because so much of it happens in the street. Over five days Nepalis honour the crow, the dog, the cow and the ox, light every doorway with oil lamps for the goddess Laxmi, and finish with <em>Bhai Tika</em>, when sisters bless their brothers with a tika of seven colours." },
          {
            ul: [
              "<strong>Sunday 8 November</strong> is the day to be in a city. In the morning dogs across the country wear marigold garlands for Kukur Tihar; after dark the lamps go on for Laxmi Puja and groups of girls go door to door singing <em>bhailo</em>.",
              "<strong>Tuesday 10 November</strong> is New Year's Day in the Nepal Sambat calendar, marked by the Newar community with <em>Mha Puja</em> and with processions through Kathmandu, Patan and Bhaktapur.",
              "<strong>Wednesday 11 November</strong>, Bhai Tika, is a family day. Shops shut and the streets are quiet until evening.",
            ],
          },
          { p: "Tihar closes far less than Dashain: three to five days of office holidays rather than a week or more, and the tourist districts barely pause. The full picture is in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]], and the two festivals are compared in [[post:dashain-vs-tihar-which-festival-to-visit|Dashain vs Tihar]]." },
          {
            figure: {
              image: FESTIVALS.lightingLamps,
              alt: "A woman in a red sari lighting oil lamps on the mud floor of a house hung with coloured lights during Tihar.",
              caption: "Laxmi Puja, the third evening of Tihar: lamps are lit at every door to show the goddess the way in.",
            },
          },
        ],
      },
      {
        h2: "Chhath: 13 to 16 November",
        blocks: [
          { p: "Two days after Tihar ends, the plains of southern Nepal turn to the sun. Chhath is the great festival of the Mithila region: four days of fasting that end with thousands of people standing in ponds and rivers to make offerings to the setting sun on <strong>Sunday 15 November</strong> and to the rising sun the next morning." },
          { p: "The place to see it is <strong>Janakpur</strong>, where the ponds around the Janaki temple are ringed with lamps and sugarcane. It is also observed in Kathmandu, at ponds and along the Bagmati. Our [[post:chhath-festival-nepal-guide|Chhath guide]] covers both, and how to fit Janakpur into a trip." },
        ],
      },
      {
        h2: "What Closes, and When",
        blocks: [
          {
            table: {
              head: ["", "Dashain", "Tihar", "Chhath"],
              rows: [
                ["Government offices", "Closed roughly 17 – 25 October", "Closed around 8 – 11 November", "One public holiday, 15 November"],
                ["Banks", "Closed on the main days; ATMs run low", "Closed two to four days", "Normal apart from the holiday"],
                ["Restricted-area permits", "Not issued while offices are shut", "A short pause", "No effect"],
                ["Long-distance buses", "Packed before the tika and after it", "Busy before Bhai Tika", "Busy in the Terai only"],
                ["Tourist shops and restaurants", "Mostly open in Thamel and Lakeside", "Open, apart from Bhai Tika morning", "Open"],
                ["Trekking lodges", "Open", "Open", "Open"],
              ],
            },
          },
          { p: "The pattern to plan around is simple. Arrange anything that needs a government stamp before Phulpati or in the quiet fortnight, carry enough cash to cover a four-day bank holiday, and book domestic flights as soon as your dates are fixed. Our guide to [[post:nepal-trekking-permits-explained|trekking permits]] explains which routes need an office and which do not." },
        ],
      },
      {
        h2: "How to Build a Trip Around It",
        blocks: [
          { p: "With two or three weeks, the season almost arranges itself. A few shapes that work in 2026:" },
          {
            ul: [
              "<strong>Tika, then trek.</strong> Arrive around 19 October, see the Dashain tika in Kathmandu on the 21st, and fly to Lukla the next day for Mani Rimdu and Everest Base Camp.",
              "<strong>Trek, then lights.</strong> Start a two-week trek in the last week of October and walk out in time for Kukur Tihar and Laxmi Puja on 8 November. The [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] and the [[trek:langtang-valley-trek|Langtang Valley trek]] both fit.",
              "<strong>Culture only.</strong> A week in the Kathmandu valley over Tihar, with a [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] built around Laxmi Puja and the Nepal Sambat processions, then two days in Janakpur for Chhath.",
              "<strong>After it all.</strong> Arrive around 12 November for late-autumn trekking with emptier trails. See [[post:trekking-in-nepal-in-november|trekking in Nepal in November]].",
            ],
          },
          { p: "If you would like dates checked against a particular route, tell us when you land and how long you have. We plan around these festivals every year, and most of our guides are happiest when a trek ends a day before their own family's tika." },
        ],
      },
    ],
    faqs: [
      { question: "What festivals are in Nepal in October and November 2026?", answer: "Dashain runs from 11 to 25 October with the main tika on 21 October. Mani Rimdu is at Tengboche monastery on 26 to 28 October. Tihar runs from 7 to 11 November, and Chhath from 13 to 16 November with its main day on 15 November." },
      { question: "When is Dashain in 2026?", answer: "Dashain 2026 begins with Ghatasthapana on Sunday 11 October. The main day, Vijaya Dashami, when the tika is given, is Wednesday 21 October, and the festival ends on the full moon of Sunday 25 October." },
      { question: "When is Tihar in 2026?", answer: "Tihar 2026 runs from Saturday 7 November to Wednesday 11 November. Kukur Tihar and Laxmi Puja both fall on Sunday 8 November, the Nepal Sambat New Year is on Tuesday 10 November, and Bhai Tika is on Wednesday 11 November." },
      { question: "Is October or November better for visiting Nepal?", answer: "Both are in the best season. October is warmer and has Dashain; November is colder at altitude, a little quieter after the middle of the month, and has Tihar. In 2026 the weeks from 22 October to 6 November have the best weather with no major holiday." },
      { question: "Will shops and restaurants be closed during the festivals?", answer: "In the tourist districts of Kathmandu and Pokhara most stay open throughout. Local shops close for the main Dashain days and on Bhai Tika morning. Government offices and banks close for about a week at Dashain and three to five days at Tihar." },
      { question: "Can I trek during Dashain and Tihar?", answer: "Yes. Trekking lodges stay open through both festivals and the weather is at its best. The things to arrange early are restricted-area permits, domestic flights and your guide, since many guides want to be home for the Dashain tika." },
      { question: "Which festival is best for visitors to see?", answer: "Tihar is the easier one to witness, because the lamps, the rangoli and the singing are in the street. Dashain is mostly a family festival behind house doors, although its swings, kites and temple days are worth seeing. Mani Rimdu is the most dramatic if you are trekking in the Everest region." },
      { question: "Do festival dates in Nepal change every year?", answer: "Yes. Dashain, Tihar, Chhath and Mani Rimdu all follow lunar calendars, so they move by up to a month from one year to the next. In 2026 they fall later than usual, which puts them in the middle of the peak trekking season." },
    ],
    relatedTreks: ["kathmandu-valley-tour", "everest-base-camp-trek", "annapurna-base-camp-trek", "langtang-valley-trek", "nepal-cultural-tour", "kathmandu-day-tour"],
    tripsNote: "Trips that fit the weeks between Dashain and Chhath.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "dashain-festival-nepal-travel-guide",
      "mani-rimdu-festival-tengboche-guide",
      "chhath-festival-nepal-guide",
      "trekking-in-nepal-in-november",
      "nepal-festival-calendar",
    ],
    tags: ["Festivals", "Tihar", "Dashain", "Travel Planning"],
    meta: {
      title: "Nepal Festivals & Events: October–November 2026 Calendar",
      description: "Dashain, Mani Rimdu, Tihar and Chhath in 2026: exact dates, what closes, and how to plan a Nepal trip or trek around the autumn festival season.",
      keywords: "Nepal festivals October 2026, Nepal festivals November 2026, Tihar 2026 dates, Dashain 2026 dates, Mani Rimdu 2026, Chhath 2026 Nepal, what's on in Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "mani-rimdu-festival-tengboche-guide",
    title: "Mani Rimdu Festival at Tengboche: Dates, Trek Timing and What to Expect",
    cluster: "seasonal",
    date: "2026-10-11",
    hero: {
      image: FESTIVALS.maniRimduCourtyard,
      alt: "Monks with long horns in the courtyard of Tengboche monastery during Mani Rimdu, with snow peaks behind the gallery roofs.",
    },
    excerpt:
      "Mani Rimdu is the Sherpa festival of masked dances held at Tengboche monastery, four days' walk up the Everest trail. In 2026 the public days are 26 to 28 October. This is what happens on each, when to leave Lukla to be there, and where to sleep when the village is full.",
    intro: [
      { p: "At 3,867 metres, on a ridge with Everest, Lhotse and Ama Dablam standing behind it, Tengboche is the best-known monastery in the Khumbu. For most of the year trekkers stop for an hour, sit in on the afternoon prayers and walk on. For three days each autumn the courtyard fills instead with Sherpa families from every village in the valley, and the monks dance." },
      { p: "Mani Rimdu is the most important festival of the Sherpa year, and in 2026 its public days fall on <strong>26, 27 and 28 October</strong> — the heart of the trekking season, and the day after Dashain ends in the lowlands. If you are walking to Everest Base Camp around then, a day's adjustment to your schedule puts you in the courtyard." },
    ],
    sections: [
      {
        h2: "What Mani Rimdu Is",
        blocks: [
          { p: "The festival came to the Khumbu from Rongbuk monastery, on the Tibetan side of Everest, in the early twentieth century. Its name joins <em>mani</em>, the prayer of Chenrezig, the bodhisattva of compassion, with <em>rilbu</em>, the small red pills the monks bless over the course of the ritual and hand out at the end." },
          { p: "The whole observance lasts about nineteen days, and most of it is closed. The monks build a mandala from coloured sand, grain by grain, and recite the mantra over it and over the pills for more than two weeks. Only the last three days are public. They are a celebration, a blessing, and a retelling in dance of how Buddhism overcame the older gods of Tibet." },
          { p: "For background on the monastery itself and the culture around it, see [[post:tengboche-monastery-and-sherpa-culture|Tengboche monastery and Sherpa culture]]." },
        ],
      },
      {
        h2: "The Three Public Days in 2026",
        blocks: [
          {
            table: {
              head: ["Date", "Day", "What happens"],
              rows: [
                ["Monday 26 October", "<em>Wong</em> — the empowerment", "The abbot gives a public blessing. Everyone present files past to receive the blessed pills and a long-life thread. Held on the full moon."],
                ["Tuesday 27 October", "<em>Chham</em> — the masked dances", "The main day. Monks in brocade robes and painted masks perform a sequence of sixteen dances in the courtyard, from mid-morning to late afternoon."],
                ["Wednesday 28 October", "<em>Jinsak</em> — the fire ceremony", "Offerings are burned to dispel harm, and the sand mandala is swept away and given to the river."],
              ],
              note: "The dates are set by the Tibetan lunar calendar and confirmed by the monastery. Ask at your lodge in Namche for the latest word before you set off for the day.",
            },
          },
          { p: "If you can be there for only one day, make it the 27th. The dances are slow, deliberate and long — this is ritual, not theatre — but two of them break the solemnity on purpose. <em>Mi Tshering</em>, the old man, and the comic yogi who follows him clown through the crowd and are the part every child in the valley has come for." },
          {
            figure: {
              image: FESTIVALS.maniRimduCymbals,
              alt: "A monk in maroon robes playing cymbals in the courtyard of Tengboche monastery, watched by spectators in the gallery behind him.",
              caption: "Cymbals, drums and three-metre horns carry the dances; spectators fill the galleries around the courtyard.",
            },
          },
        ],
      },
      {
        h2: "When to Leave Lukla",
        blocks: [
          { p: "Tengboche is four trekking days from Lukla on a proper acclimatisation schedule: Phakding, Namche Bazaar, a rest day in Namche, then Tengboche. The rest day is not optional — Namche is at 3,440 metres and the climb to it is where altitude problems usually begin. Our [[post:namche-bazaar-acclimatisation-guide|Namche acclimatisation guide]] explains why." },
          {
            table: {
              head: ["Fly to Lukla on", "Reach Tengboche on", "You see"],
              rows: [
                ["Thursday 22 October", "Sunday 25 October", "All three days, with a spare"],
                ["Friday 23 October", "Monday 26 October", "The blessing, the dances and the fire ceremony"],
                ["Saturday 24 October", "Tuesday 27 October", "The dances, if you leave Namche at first light"],
              ],
            },
          },
          { p: "Build in a buffer. Lukla flights are the least reliable part of any Everest trek and late October is their busiest week; a single day's delay turns the third row of that table into a miss. Flying on the 22nd is the safe choice. The mechanics are in our [[post:lukla-flight-guide|Lukla flight guide]]." },
          { p: "Note the overlap with Dashain. The tika is on 21 October, so flying on the 22nd means arranging permits, cash and your guide before the holiday closes offices. See [[post:everest-base-camp-trek-during-dashain|Everest Base Camp during Dashain]]." },
        ],
      },
      {
        h2: "Where to Sleep",
        blocks: [
          { p: "Tengboche itself has only a handful of lodges, and during the festival they are booked weeks ahead by groups. There are three ways round that." },
          {
            ul: [
              "<strong>Deboche</strong>, twenty minutes down through the rhododendron forest on the far side of the ridge, has several lodges and is where most independent trekkers end up. Walk up in the morning.",
              "<strong>Pangboche</strong>, about ninety minutes further on, works if you watch the dances and continue the same afternoon.",
              "<strong>Phortse</strong> or <strong>Kyangjuma</strong>, on the Namche side, for an early start and a long day.",
            ],
          },
          { p: "Whichever you choose, have the room reserved before you leave Namche. A guide with a phone and a relationship with the lodge owners is worth a great deal this week. It is one of the practical reasons to walk the [[trek:everest-base-camp-trek|Everest Base Camp trek]] with an agency during the festival rather than alone." },
        ],
      },
      {
        h2: "Watching the Dances",
        blocks: [
          {
            ul: [
              "<strong>Arrive early.</strong> The courtyard is small. Local families have precedence on the ground floor; visitors are usually directed to the upper gallery. Be seated by nine.",
              "<strong>Dress for sitting still.</strong> The courtyard is in shade for much of the day and the wind comes straight off the glaciers. A down jacket, hat and something to sit on.",
              "<strong>Photography</strong> is normally allowed in the courtyard, sometimes for a small fee, and never with flash. Inside the prayer hall, ask first and expect to be told no.",
              "<strong>Stay off the dance floor</strong> and out of the monks' way; the space that looks empty is in use.",
              "<strong>Give something.</strong> The festival is paid for by the community. A donation in the box at the door is expected and appreciated.",
              "<strong>Join the queue for the blessing</strong> on the first day if you wish. Visitors are welcome; bow your head, take what is handed to you with both hands.",
            ],
          },
          { p: "After dark on the first two evenings the villagers hold their own party, with Sherpa line dancing and <em>chhang</em> in the lodges. You will be pulled in." },
        ],
      },
      {
        h2: "Fitting It Into a Trek",
        blocks: [
          { p: "A festival day at Tengboche costs a standard itinerary nothing if you plan it, because most schedules already include a second acclimatisation day at Dingboche, and a day spent at 3,867 metres does some of the same work." },
          {
            ul: [
              "On the [[trek:everest-base-camp-trek|Everest Base Camp trek]], spend two nights at Tengboche or Deboche instead of one, then continue to Dingboche as normal.",
              "On the [[trek:everest-view-trek|Everest View trek]], Tengboche is the turning point, so the festival becomes the destination — a week in total, and no altitude above 3,900 metres.",
              "On the [[trek:gokyo-lake-trek|Gokyo Lakes trek]], make the detour to Tengboche from Namche first, then cross to the Gokyo valley by Phortse.",
            ],
          },
          { p: "If the autumn dates do not suit you, the same festival is held at <strong>Thame</strong> monastery in May and at <strong>Chiwong</strong>, in the lower Solu region, usually a few weeks after Tengboche. Both are smaller and far less visited. Chiwong combines well with the [[trek:pikey-peak-trek|Pikey Peak trek]]." },
        ],
      },
    ],
    faqs: [
      { question: "When is Mani Rimdu in 2026?", answer: "The public days of Mani Rimdu at Tengboche monastery are Monday 26, Tuesday 27 and Wednesday 28 October 2026. The masked dances, which are the main event, are on the 27th." },
      { question: "Where is Mani Rimdu held?", answer: "The autumn festival is held at Tengboche monastery, at 3,867 metres in the Khumbu, on the main trail to Everest Base Camp. The same festival is held at Thame monastery in spring and at Chiwong monastery in Solu later in the autumn." },
      { question: "How do I get to Tengboche for the festival?", answer: "Fly from Kathmandu or Ramechhap to Lukla and walk for four days by way of Phakding and Namche Bazaar, including a rest day at Namche for acclimatisation. To see all three days in 2026, fly to Lukla on 22 or 23 October." },
      { question: "Can tourists attend Mani Rimdu?", answer: "Yes. Visitors are welcome at all three public days, including the blessing on the first day. Seating is usually in the upper gallery of the courtyard, and a donation to the monastery is expected." },
      { question: "Do I need to book accommodation at Tengboche in advance?", answer: "Yes. Tengboche has very few lodges and they fill with groups during the festival. Most trekkers sleep at Deboche, twenty minutes below, and should reserve there too before leaving Namche." },
      { question: "How long do the masked dances last?", answer: "The dances on the second day run from mid-morning to late afternoon, with sixteen separate dances and breaks between them. Bring warm clothes, water and something to sit on." },
      { question: "Is photography allowed at Mani Rimdu?", answer: "Photography is normally allowed in the courtyard during the dances, without flash, and a small camera fee is sometimes charged. Ask before photographing inside the prayer hall or taking close portraits of monks." },
      { question: "Can I see Mani Rimdu without trekking to Everest Base Camp?", answer: "Yes. The Everest View trek turns round at Tengboche and takes about a week from Kathmandu, staying below 3,900 metres. It is the shortest way to include the festival in a trip." },
    ],
    relatedTreks: ["everest-base-camp-trek", "everest-view-trek", "gokyo-lake-trek", "pikey-peak-trek", "everest-base-camp-trek-with-helicopter-return", "everest-three-pass-trek"],
    tripsNote: "Everest-region treks that pass Tengboche, or can be routed through it for the festival.",
    relatedPosts: [
      "tengboche-monastery-and-sherpa-culture",
      "everest-base-camp-trek-in-november",
      "namche-bazaar-acclimatisation-guide",
      "lukla-flight-delays-peak-season-backup-plans",
      "nepal-festivals-and-events-october-november-2026",
      "everest-base-camp-trek-complete-guide",
    ],
    tags: ["Festivals", "Everest Region", "Sherpa Culture", "Mani Rimdu"],
    meta: {
      title: "Mani Rimdu Festival 2026 at Tengboche: Dates & Trek Guide",
      description: "Mani Rimdu 2026 at Tengboche monastery is on 26–28 October. What happens each day, when to fly to Lukla to be there, where to sleep and how to watch.",
      keywords: "Mani Rimdu festival, Mani Rimdu 2026, Tengboche festival, Mani Rimdu dates, Everest festival trek, Sherpa festival Nepal, Tengboche monastery masked dance",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-in-november",
    title: "Trekking in Nepal in November: Weather, Best Routes and Crowds",
    cluster: "seasonal",
    date: "2026-10-12",
    hero: {
      image: trekImage("mardi-himal-trek", "01-golden-hour-view-from-badal-dada-in-mardi-himal-trek"),
      alt: "Low evening light on the ridges and snow peaks seen from Badal Danda on the Mardi Himal trek.",
    },
    excerpt:
      "November is the second half of Nepal's best trekking season: drier and clearer than October, colder at night, and noticeably quieter after the middle of the month. This is the weather by altitude, the routes that suit it, and what changes as the month goes on.",
    intro: [
      { p: "Ask a guide which month they would choose for their own trek and a good number will say November rather than October. The last haze of the monsoon has been washed out of the air, rain is close to unheard of, and the mountains have the hard-edged clarity that photographs never quite manage. The price is cold: by the end of the month the nights above 4,000 metres are properly wintry." },
      { p: "It is also a month of two halves. The first fortnight is still peak season, and in 2026 it carries the Tihar festival from the 7th to the 11th. The second fortnight is one of the best-kept secrets in Himalayan trekking." },
    ],
    sections: [
      {
        h2: "November Weather by Altitude",
        blocks: [
          { p: "The autumn high-pressure system that settles over the Himalaya in October holds through November. Days are sunny and still, afternoons cloud over far less than in spring, and precipitation is rare enough that many trekkers never unpack a rain jacket. What changes through the month is the temperature, which drops steadily." },
          {
            table: {
              head: ["Where", "Altitude", "Typical day", "Typical night"],
              rows: [
                ["Kathmandu", "1,400 m", "20 – 24°C", "7 – 11°C"],
                ["Pokhara", "820 m", "22 – 26°C", "10 – 14°C"],
                ["Ghorepani / Namche Bazaar", "2,900 – 3,400 m", "8 – 13°C", "−4 to 2°C"],
                ["Annapurna Base Camp / Kyanjin Gompa", "3,900 – 4,100 m", "4 – 9°C", "−9 to −4°C"],
                ["Gorak Shep / Thorong Phedi", "4,500 – 5,200 m", "−2 to 5°C", "−18 to −10°C"],
              ],
              note: "Ranges for a normal year, cooler towards the end of the month. In the sun and out of the wind it feels far warmer than the figure suggests; in the shade, far colder.",
            },
          },
          { p: "Two details matter more than the averages. Daylight is short — about ten and a half hours, with the sun gone from most valleys by half past four — so walking days start early. And the cold is dry, which is easier on the body than damp cold but harder on the throat; the notorious [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|Khumbu cough]] is at its worst this month." },
        ],
      },
      {
        h2: "The Two Halves of the Month",
        blocks: [
          {
            table: {
              head: ["", "1 – 15 November", "16 – 30 November"],
              rows: [
                ["Weather", "Settled, mild by day", "Settled, noticeably colder"],
                ["Crowds", "Peak season on the main trails", "Thinning fast; lodges have space"],
                ["Festivals (2026)", "Tihar, 7 – 11 November", "None on the trail"],
                ["High passes", "Open", "Usually open; first snowfalls possible"],
                ["Lodges at altitude", "All open", "A few of the highest begin to close"],
                ["Lukla flights", "Busiest weeks", "Easier to book"],
              ],
            },
          },
          { p: "If your dates are flexible, the days between about 12 and 25 November are the ones to aim for: after Tihar, before the cold really bites, with room in the lodges and the same sky. The first week of the month is covered in [[post:trekking-in-nepal-during-tihar|trekking during Tihar]]." },
        ],
      },
      {
        h2: "The Best Treks for November",
        blocks: [
          { p: "Almost everything is in condition. These are the routes that November suits particularly well." },
          {
            table: {
              head: ["Trek", "Days", "Why November"],
              rows: [
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "14", "The clearest views of the year from Kala Patthar. Cold but dry. See [[post:everest-base-camp-trek-in-november|Everest Base Camp in November]]."],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "Stable weather in the sanctuary and little avalanche risk. See [[post:annapurna-base-camp-trek-in-november|Annapurna Base Camp in November]]."],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "5 – 9", "A ridge walk that depends entirely on visibility, which November gives."],
                ["[[trek:poonhill-trek|Poon Hill]]", "3 – 7", "Low, warm and short. The sunrise panorama is at its sharpest."],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "10", "Quiet after mid-month, no flight needed, yak pastures turning gold."],
                ["[[trek:manaslu-circuit-trek|Manaslu Circuit]]", "15", "Best done in the first three weeks, before snow on the Larke La."],
                ["[[trek:annapurna-circuit-trek|Annapurna Circuit]]", "15", "Thorong La is normally open all month; start early in the day."],
                ["[[trek:upper-mustang-trek|Upper Mustang]]", "16", "Possible until about the third week, when lodges close for winter."],
              ],
            },
          },
          { p: "For a first trek in the second half of the month, stay lower: the cold is a matter of comfort at 3,000 metres and a matter of judgement at 5,000. Our comparison of [[post:mardi-himal-vs-poon-hill-vs-annapurna-base-camp|Mardi Himal, Poon Hill and Annapurna Base Camp]] sets out the three most popular choices." },
        ],
      },
      {
        h2: "What to Pack Differently",
        blocks: [
          { p: "The standard [[post:nepal-trekking-packing-list|trekking packing list]] holds, with the emphasis moved firmly towards warmth." },
          {
            ul: [
              "<strong>A sleeping bag rated to at least −10°C</strong>, or −20°C for anything above 4,500 metres in the second half of the month. Lodges supply blankets but not enough of them.",
              "<strong>A proper down jacket</strong> for evenings. You will wear it from four in the afternoon until you are in your sleeping bag.",
              "<strong>Insulated gloves and a warm hat</strong>, plus thin liner gloves for walking.",
              "<strong>A buff or scarf over the mouth</strong> at altitude. Breathing cold dry air through it is the simplest protection against the cough.",
              "<strong>Microspikes</strong> if you are crossing a pass after about the 20th; shaded sections ice up.",
              "<strong>A head torch with fresh batteries.</strong> Dusk is early and pass days start in the dark.",
              "<strong>Sunscreen and sunglasses.</strong> The sun is weaker only in theory; the air is so clear that burn is quick.",
            ],
          },
        ],
      },
      {
        h2: "Crowds, Lodges and Booking",
        blocks: [
          { p: "The first half of November is as busy as October on the Everest and Annapurna trails. Lodges at the bottlenecks — Lobuche, Gorak Shep, Machhapuchhre Base Camp, the Annapurna High Camp — can fill by early afternoon, and anyone trekking without a guide to phone ahead may find themselves on a dining-room bench." },
          { p: "From the middle of the month the pressure eases quickly. Prices do not fall much, but lodge owners have time to talk, the dining rooms are quieter, and you can change plans without consequences. Ways to find space earlier in the month are in [[post:how-to-avoid-crowds-on-nepal-treks-in-peak-season|avoiding the crowds in peak season]]." },
          { p: "Domestic flights are the thing to book first. Seats to Lukla, Pokhara and Jomsom in the first half of November sell out, and the days around Tihar are tight. See [[post:domestic-flights-in-nepal-for-trekkers|domestic flights for trekkers]]." },
        ],
      },
      {
        h2: "Late November: The Edge of Winter",
        blocks: [
          { p: "By the last week of the month the season is closing from the top down. The first real snowfall of winter can arrive any time from late November; it rarely lasts, but it can shut a high pass for a few days and it changes what the trail asks of you. Water pipes freeze, so washing is from a bucket. A few of the highest lodges — on the Three Passes route, in Upper Mustang, on the far side of the Larke La — begin to shutter as their owners move down for winter." },
          { p: "None of this is a reason to stay away. It is a reason to choose a route with the altitude you are prepared for, to carry the right sleeping bag, and to keep a spare day in hand. What comes next is in [[post:trekking-in-nepal-in-december|trekking in Nepal in December]] and our guide to [[post:winter-trekking-in-nepal-best-routes|winter trekking]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is November a good time to trek in Nepal?", answer: "Yes. November is in the best trekking season of the year, with dry, stable weather and the clearest mountain views. It is colder than October, especially at night above 4,000 metres, and quieter after the middle of the month." },
      { question: "How cold is Nepal in November?", answer: "Kathmandu is mild, around 20 to 24°C by day and 7 to 11°C at night. At 3,000 metres nights are around freezing. At 5,000 metres, such as Gorak Shep, night temperatures of −10 to −18°C are normal by the end of the month." },
      { question: "Does it rain or snow in November?", answer: "Rain is rare. November is one of the driest months of the year across Nepal. Snow is possible above about 4,000 metres towards the end of the month, usually as a short fall that clears within a day or two." },
      { question: "Is November crowded on the trekking trails?", answer: "The first half is peak season and the popular routes are busy. From about the middle of the month numbers drop noticeably, and the last ten days are quiet on every route except the Everest Base Camp trail." },
      { question: "Which trek is best in November?", answer: "For views, Everest Base Camp, Annapurna Base Camp and Mardi Himal. For a short or first trek, Poon Hill. For quiet trails, Langtang Valley or the Manaslu Circuit in the first three weeks of the month." },
      { question: "Are the high passes open in November?", answer: "Normally yes. Thorong La, the Larke La and the Everest passes are usually open throughout November. An early winter snowfall can close them for a few days late in the month, so keep a spare day in your schedule." },
      { question: "What sleeping bag do I need for November?", answer: "A bag rated to −10°C is enough for treks that stay below about 4,200 metres. For Everest Base Camp, the high passes or any trek late in the month, bring or hire one rated to −20°C." },
      { question: "Do I need to book lodges in advance in November?", answer: "In the first half of the month it is wise on the Everest and Annapurna trails, particularly at the highest stops. A guide normally does this by phone a day ahead. In the second half you can usually walk in." },
    ],
    relatedTreks: ["everest-base-camp-trek", "annapurna-base-camp-trek", "mardi-himal-trek", "poonhill-trek", "langtang-valley-trek", "manaslu-circuit-trek"],
    tripsNote: "Routes that are at their best in November.",
    relatedPosts: [
      "everest-base-camp-trek-in-november",
      "annapurna-base-camp-trek-in-november",
      "best-time-to-visit-nepal-trekking-seasons",
      "how-to-avoid-crowds-on-nepal-treks-in-peak-season",
      "trekking-in-nepal-in-december",
      "nepal-trekking-packing-list",
    ],
    tags: ["Trekking Seasons", "November", "Weather", "Travel Planning"],
    meta: {
      title: "Trekking in Nepal in November: Weather, Routes & Crowds",
      description: "November trekking in Nepal: temperatures by altitude, the best routes, how busy the trails are, what to pack and how the month changes after Tihar.",
      keywords: "trekking in Nepal in November, Nepal in November, Nepal weather November, best treks November Nepal, November trekking Nepal temperature, Nepal autumn trekking",
    },
  },
];
