import type { BlogContent } from "./build";
import { FESTIVALS } from "./images";

/**
 * Tihar series, part 1: the overview, the dates, and the day most visitors
 * have heard of before they arrive.
 *
 * Dates for 2026 (2083 BS) were checked against published calendars on
 * 9 October 2026. That year the new moon falls so that Kukur Tihar and Laxmi
 * Puja share Sunday 8 November, and calendars place the cow's day on Monday
 * the 9th; in most years the dog has a day to itself. The articles say so
 * rather than presenting 2026 as the usual pattern.
 */
export const tiharA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "tihar-festival-nepal-travel-guide",
    title: "Tihar Festival in Nepal: The Complete Travel Guide",
    cluster: "tihar",
    date: "2026-10-22",
    hero: {
      image: FESTIVALS.lightingLamps,
      alt: "A woman in a red sari lighting oil lamps on the floor of a mud-walled house decorated with strings of coloured lights for Tihar.",
    },
    excerpt:
      "Tihar is Nepal's festival of lights: five days in which crows, dogs, cows and brothers are honoured in turn and every doorway is lit for the goddess of wealth. In 2026 it runs from 7 to 11 November. This is what happens each day, where to be, what closes, and how to fit it into a trip.",
    intro: [
      { p: "Three weeks after Dashain sends the country home, Tihar brings it back out into the street. For five evenings Nepal is lit from end to end — rows of clay oil lamps on window ledges, strings of electric lights down the fronts of buildings, patterns of coloured powder at every door with a candle burning in the middle. Dogs trot through Thamel wearing marigold garlands. Groups of children go from house to house singing for coins. On the last day sisters paint a stripe of seven colours down their brothers' foreheads and feed them until they cannot move." },
      { p: "It is the second-largest festival of the year and, for a visitor, the more accessible of the two. Dashain happens behind family doors. Tihar happens where you can see it. This guide covers the whole festival and links to the detailed articles on each part." },
    ],
    sections: [
      {
        h2: "What Tihar Is",
        blocks: [
          { p: "Tihar — also called Deepawali, Yamapanchak, and by the Newars of the Kathmandu valley <em>Swanti</em> — is the Nepali form of the festival known across India as Diwali. The central night is the same: the new moon of the month of Kartik, when lamps are lit to welcome <strong>Laxmi</strong>, the goddess of wealth and good fortune." },
          { p: "What makes the Nepali festival its own is everything around that night. The five days are named for <strong>Yama</strong>, the god of death, and the story told is of his sister Yamuna, who kept him at her house with ceremony after ceremony so that he could not leave to take a life. Each day honours a creature or a person connected with him: the crow that carries his messages, the dog that guards his gate, the cow, the ox, and finally the brother whom a sister's blessing protects." },
          { p: "It is observed by Hindus and Buddhists alike, in the hills, the valley and the plains, with local variations that are part of the interest. How it differs from the festival three weeks earlier is set out in [[post:dashain-vs-tihar-which-festival-to-visit|Dashain vs Tihar]]." },
        ],
      },
      {
        h2: "The Five Days in 2026",
        blocks: [
          {
            table: {
              head: ["Date", "Day", "What happens"],
              rows: [
                ["Saturday 7 November", "<strong>Kaag Tihar</strong> — the crow", "Food is left on rooftops for crows, the messengers of Yama, before the family eats."],
                ["Sunday 8 November", "<strong>Kukur Tihar</strong> — the dog; <strong>Laxmi Puja</strong> in the evening", "Dogs are garlanded, given a tika and fed. At dusk houses are lit with lamps and girls sing <em>bhailo</em> door to door."],
                ["Monday 9 November", "<strong>Gai Tihar</strong> — the cow", "The cow, sacred to Laxmi, is garlanded and fed. Lamps and singing continue."],
                ["Tuesday 10 November", "<strong>Govardhan Puja</strong>, <strong>Mha Puja</strong> and the Nepal Sambat New Year", "Oxen are honoured; Newar families worship the self; boys sing <em>deusi</em>. Processions mark the year 1147."],
                ["Wednesday 11 November", "<strong>Bhai Tika</strong>", "Sisters give their brothers a tika of seven colours, a garland and a feast; brothers give gifts."],
              ],
              note: "In most years the dog has a day to itself and the cow is worshipped on the morning of Laxmi Puja. In 2026 the new moon falls so that Kukur Tihar and Laxmi Puja share the Sunday. Details are in our [[post:tihar-dates-calendar-for-travellers|Tihar dates guide]].",
            },
          },
          { p: "If you can be in Nepal for only one day of the five, make it <strong>Sunday 8 November</strong>, and be in a town. It has the dogs in the morning and the lamps at night." },
        ],
      },
      {
        h2: "What a Visitor Actually Sees",
        blocks: [
          {
            ul: [
              "<strong>Marigolds everywhere.</strong> In the week before, pavements disappear under heaps of orange <em>sayapatri</em> and purple <em>makhamali</em>, threaded into garlands by the metre. They go over doors, shop shutters, taxis, dogs and brothers.",
              "<strong>Garlanded dogs.</strong> Pets, street dogs and police dogs alike, each with a red tika. See [[post:kukur-tihar-day-of-the-dogs|Kukur Tihar: the day of the dogs]].",
              "<strong>Lamps at dusk.</strong> On Laxmi Puja every household lights its doorway and windows, and paints a trail from the gate to the family shrine so the goddess can find her way in. See [[post:laxmi-puja-in-nepal-night-of-lights|Laxmi Puja: the night of lights]].",
              "<strong>Rangoli.</strong> Circular patterns in coloured powder, rice and petals on the ground in front of houses and shops, lit from the centre.",
              "<strong>Deusi and bhailo.</strong> Groups singing call-and-response blessings at each door and being paid in money, fruit and <em>sel roti</em>. See [[post:deusi-bhailo-tihar-songs-explained|Deusi Bhailo]].",
              "<strong>New Year processions.</strong> On the fourth day the Newar towns celebrate the start of their calendar year. See [[post:mha-puja-and-nepal-sambat-new-year|Mha Puja and Nepal Sambat]].",
              "<strong>Seven-colour foreheads.</strong> After Bhai Tika, every man and boy you meet wears a vertical stripe of colours and a garland. See the [[post:bhai-tika-guide-for-visitors|Bhai Tika guide]].",
            ],
          },
          {
            figure: {
              image: FESTIVALS.kukurTiharGarland,
              alt: "A small white dog wearing a marigold garland and a red tika sitting on a chair beside a woman holding a plate of offerings.",
              caption: "Kukur Tihar: a garland of marigolds, a tika, and the best meal of the year.",
            },
          },
        ],
      },
      {
        h2: "How Tihar Changes a Trip",
        blocks: [
          { p: "Far less than Dashain does. The holiday is shorter, fewer people travel across the country for it, and the tourist economy keeps running. But it is still a national festival, and some things stop." },
          {
            table: {
              head: ["What", "During Tihar", "What to do"],
              rows: [
                ["Government offices", "Closed for three to five days, centred on Laxmi Puja to Bhai Tika", "Do visa extensions and restricted-area permits before 7 November"],
                ["Banks", "Closed on the main days; ATMs work but can run low", "Withdraw cash before the 7th"],
                ["Tourist shops and restaurants", "Open, apart from the morning of Bhai Tika", "Nothing — Thamel and Lakeside carry on"],
                ["Local shops and markets", "Open and very busy until Laxmi Puja; many shut on Bhai Tika", "Shop early in the week"],
                ["Buses and domestic flights", "Busy on the days before Bhai Tika, quiet on the day itself", "Book ahead; avoid travelling on 10 November"],
                ["Heritage sites and museums", "Monuments open; some museums close on the public holidays", "See outdoor sites on holiday days"],
                ["Trekking lodges", "Open throughout", "Nothing to arrange"],
                ["Guides and porters", "Many want to be home for Bhai Tika", "Agree dates early; a trek ending by the 9th suits everyone"],
              ],
              note: "The public holidays are fixed each year by government notice. The pattern above is the usual one.",
            },
          },
          { p: "What stays open in the capital, day by day, is in [[post:kathmandu-during-tihar|Kathmandu during Tihar]]." },
        ],
      },
      {
        h2: "Where to Be",
        blocks: [
          {
            table: {
              head: ["Place", "Why"],
              rows: [
                ["Kathmandu", "The widest range: lit streets in the old city, the police dog ceremony, the Rani Pokhari temple that opens only on Bhai Tika, New Year rallies"],
                ["Patan and Bhaktapur", "The Newar festival of Swanti at its most traditional — Mha Puja mandalas, oil lamps on every temple plinth, brick squares lit by flame alone"],
                ["Pokhara", "Lakeside strung with lights and rangoli, and the liveliest deusi-bhailo in the country"],
                ["A hill village", "The festival at household scale: cows garlanded in the yard, the whole village singing deusi together"],
                ["Janakpur and the Terai", "Diwali in the Mithila style, with painted walls and clay lamps, followed days later by Chhath"],
              ],
            },
          },
          { p: "For most visitors the Kathmandu valley is the right answer, and two nights in Bhaktapur during the festival are worth more than a week at any other time. A [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] over these dates can be arranged around the evenings, and a village homestay — [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] or [[trek:sirubari-village-tour|Sirubari]] — gives you the other extreme." },
        ],
      },
      {
        h2: "Trekking During Tihar",
        blocks: [
          { p: "November is the second half of the best trekking season and Tihar does not interrupt it. Lodges stay open, the weather is at its clearest, and for a few days there are slightly fewer people on the trail, because Nepali trekkers stay home and many groups time their trips to finish before the festival." },
          { p: "In the Buddhist high country — the Khumbu, Manang, Upper Mustang — you will see little of Tihar beyond a garland on a lodge dog. In the Hindu and Gurung villages of the Annapurna foothills it is everywhere: lamps on the stone walls, and deusi parties that will not let a trekker pass without dancing. The practicalities are in [[post:trekking-in-nepal-during-tihar|trekking during Tihar]]." },
          { p: "The best plan is often to trek first and come down for the lights. The [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]], the [[trek:poonhill-trek|Poon Hill trek]] and the [[trek:langtang-valley-trek|Langtang Valley trek]] can all be timed to finish on 6 or 7 November." },
        ],
      },
      {
        h2: "Taking Part",
        blocks: [
          { p: "Tihar is an easy festival to join, and people will go out of their way to include you." },
          {
            ul: [
              "<strong>If a deusi or bhailo group sings at your table</strong>, give something — a small note is right — and you will be blessed at length. Join the dancing if you are pulled in.",
              "<strong>If you are invited for Bhai Tika</strong>, go. A guide's sister or a hotel owner's daughter may offer to give you tika as an honorary brother. Bring a small gift or an envelope. The etiquette is in the [[post:bhai-tika-guide-for-visitors|Bhai Tika guide]].",
              "<strong>Do not step on or over a rangoli</strong> or the painted trail leading into a house.",
              "<strong>Ask before garlanding a dog</strong> that is not yours, and leave street dogs to the people who know them.",
              "<strong>Eat what is offered.</strong> Sel roti, sweets and dried fruit appear in every house; see the [[post:tihar-food-guide-sel-roti-and-sweets|Tihar food guide]].",
              "<strong>Be careful with firecrackers.</strong> They are officially banned and widely used anyway. Give them room.",
            ],
          },
          { p: "And bring a camera with a good low-light setting. The festival is made of small flames in the dark; advice is in [[post:photographing-tihar-in-nepal|photographing Tihar]]." },
        ],
      },
      {
        h2: "A Sample Week Around Tihar 2026",
        blocks: [
          {
            table: {
              head: ["Date", "Plan"],
              rows: [
                ["Thu 5 November", "Arrive in Kathmandu. Evening walk through Ason and Indra Chowk, where the marigold and lamp markets are at full stretch."],
                ["Fri 6 November", "Swayambhunath, Patan Durbar Square and its museum."],
                ["Sat 7 November", "Kaag Tihar. Boudhanath and Pashupatinath; move to Bhaktapur for the night."],
                ["Sun 8 November", "Kukur Tihar in the morning. Laxmi Puja in Bhaktapur after dark — every square lit by oil lamps."],
                ["Mon 9 November", "Sunrise at Nagarkot; walk down to Changu Narayan through the harvested terraces."],
                ["Tue 10 November", "Nepal Sambat New Year: processions in Kathmandu and Patan. Mha Puja in the evening."],
                ["Wed 11 November", "Bhai Tika. A quiet morning; the Rani Pokhari temple if you are in the city."],
              ],
            },
          },
          { p: "Add two days at the end and you can fly to Janakpur for [[post:chhath-festival-nepal-guide|Chhath]], which begins on the 13th. Tell us your dates and we will fit the week to them. The whole season is laid out in [[post:nepal-festivals-and-events-october-november-2026|what's on in Nepal this autumn]]." },
        ],
      },
    ],
    faqs: [
      { question: "When is Tihar in 2026?", answer: "Tihar 2026 runs from Saturday 7 November to Wednesday 11 November. Kukur Tihar and Laxmi Puja are on Sunday 8 November, the Nepal Sambat New Year and Mha Puja on Tuesday 10 November, and Bhai Tika on Wednesday 11 November." },
      { question: "What is Tihar?", answer: "Tihar is Nepal's five-day festival of lights, the Nepali form of Diwali. It honours crows, dogs, cows and oxen on successive days, welcomes the goddess Laxmi with lamps on the new-moon night, and ends with Bhai Tika, when sisters bless their brothers." },
      { question: "Is Tihar the same as Diwali?", answer: "The central night, Laxmi Puja, is the same as Diwali in India. The Nepali festival adds the worship of the crow and the dog, the Newar New Year and Mha Puja, the deusi and bhailo singing, and the seven-colour tika of Bhai Tika." },
      { question: "Is Tihar a good time to visit Nepal?", answer: "Yes. It falls in the best weather of the year, the celebrations are public and easy to see, and far less closes than at Dashain. The main things to arrange in advance are cash, permits and transport on the days before Bhai Tika." },
      { question: "What is closed during Tihar?", answer: "Government offices and banks close for three to five days around Laxmi Puja and Bhai Tika. Many local shops close on Bhai Tika. Tourist restaurants, hotels and trekking lodges stay open throughout." },
      { question: "Where is the best place to see Tihar?", answer: "The Kathmandu valley, especially Bhaktapur and Patan on the night of Laxmi Puja, when the old squares are lit with oil lamps. Pokhara's Lakeside is the liveliest place for deusi and bhailo singing." },
      { question: "Can tourists take part in Tihar?", answer: "Yes. Visitors are welcome to watch and join deusi and bhailo, are often offered sweets, and are sometimes invited to receive Bhai Tika from a host family. A small gift or cash offering is appreciated." },
      { question: "Can I trek during Tihar?", answer: "Yes. All trekking lodges stay open and the weather is excellent. Arrange permits before the holiday and agree dates with your guide early, since many guides want to be home for Bhai Tika on the last day." },
    ],
    relatedTreks: ["kathmandu-valley-tour", "bhaktapur-day-tour", "kathmandu-day-tour", "ghalegaun-ghanpokhara-village-tour", "annapurna-base-camp-trek", "poonhill-trek"],
    tripsNote: "Tours for the festival days, and treks that end in time for the lights.",
    relatedPosts: [
      "tihar-dates-calendar-for-travellers",
      "kukur-tihar-day-of-the-dogs",
      "laxmi-puja-in-nepal-night-of-lights",
      "bhai-tika-guide-for-visitors",
      "kathmandu-during-tihar",
      "trekking-in-nepal-during-tihar",
    ],
    tags: ["Tihar", "Festivals", "Culture", "Travel Planning"],
    meta: {
      title: "Tihar Festival in Nepal 2026: Complete Travel Guide",
      description: "Tihar 2026 runs 7–11 November. What happens on each of the five days, where to see the lights, what closes, and how to plan a Nepal trip or trek around it.",
      keywords: "Tihar festival Nepal, Tihar 2026, Tihar festival guide, festival of lights Nepal, Diwali in Nepal, Deepawali Nepal, Kukur Tihar, Bhai Tika, Laxmi Puja",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "tihar-dates-calendar-for-travellers",
    title: "Tihar 2026 Dates: The Five Days, Day by Day",
    cluster: "tihar",
    date: "2026-10-23",
    hero: {
      image: FESTIVALS.rangoliColoured,
      alt: "A rangoli of coloured powder on the ground with lit clay lamps placed on it for Tihar.",
    },
    excerpt:
      "Tihar 2026 runs from Saturday 7 to Wednesday 11 November. This is the calendar for travellers: what each day is, the hours when things happen, the public holidays, how the 2026 dates differ from a normal year, and the dates for 2027.",
    intro: [
      { p: "Tihar is set by the moon, not the calendar on your phone. It occupies the last days of the dark fortnight of the month of Kartik and the first two days of the bright fortnight, with the new moon in the middle. That puts it anywhere between mid-October and mid-November, and in 2026 it falls late: <strong>7 to 11 November</strong>." },
      { p: "This page is the practical version — which day is which, what time to be where, and which days the bank is shut. The meaning of the festival and how to plan around it are in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]]." },
    ],
    sections: [
      {
        h2: "Tihar 2026 at a Glance",
        blocks: [
          {
            table: {
              head: ["Date", "Nepali date (2083 BS)", "Day"],
              rows: [
                ["Saturday 7 November", "Kartik 21", "Kaag Tihar — the crow"],
                ["Sunday 8 November", "Kartik 22", "Kukur Tihar — the dog; Laxmi Puja in the evening"],
                ["Monday 9 November", "Kartik 23", "Gai Tihar — the cow"],
                ["Tuesday 10 November", "Kartik 24", "Govardhan Puja and Goru Tihar; Mha Puja; Nepal Sambat New Year 1147"],
                ["Wednesday 11 November", "Kartik 25", "Bhai Tika (Kija Puja)"],
              ],
              note: "From the published 2083 BS calendars, checked in October 2026. The exact auspicious hour for Bhai Tika is announced by the national calendar committee shortly before the festival.",
            },
          },
        ],
      },
      {
        h2: "Why 2026 Is Slightly Unusual",
        blocks: [
          { p: "In the textbook version of Tihar the crow has the first day, the dog the second, and the third day belongs to the cow in the morning and to Laxmi in the evening. That is how it falls in most years." },
          { p: "Festival days, though, are fixed by lunar days — <em>tithi</em> — which do not line up neatly with sunrise and sunset. Laxmi Puja must be performed on the evening when the new moon is in force. In 2026 the new-moon tithi begins during Sunday 8 November and is over by the middle of Monday, so the lamps have to be lit on <strong>Sunday evening</strong>. The dog's day, fixed by the tithi before, is also Sunday. The two share a date, and the published calendars carry the cow's worship to Monday the 9th." },
          { p: "What this means in practice:" },
          {
            ul: [
              "<strong>Sunday 8 November is the fullest day of the festival.</strong> Dogs in the morning, lamps and bhailo at night.",
              "<strong>Monday 9 November is quieter</strong> than the third day normally is. Expect cows being garlanded, houses still lit, and singing in the evening.",
              "<strong>Households differ.</strong> Some families will worship the cow on Sunday morning as they always have. Nobody will think you odd for asking which day they are keeping.",
            ],
          },
          { p: "The same kind of quirk moved the Dashain tika by a day this year; see the [[post:dashain-dates-calendar-for-travellers|Dashain dates guide]]." },
        ],
      },
      {
        h2: "Day by Day: What Happens and When",
        blocks: [
          { h3: "Saturday 7 November — Kaag Tihar" },
          { p: "The quietest day. Early in the morning a portion of food — rice, sweets, a little of whatever is being cooked — is set out on a leaf plate on the roof or in the yard for the crows. The crow is Yama's messenger and its call is taken as news of a death; feeding it first is a way of keeping bad news from the house for the year. There is nothing organised to watch. What you will notice is the last-minute shopping: the markets are at their busiest this afternoon and evening." },
          { h3: "Sunday 8 November — Kukur Tihar and Laxmi Puja" },
          { p: "<strong>Morning:</strong> dogs are washed, garlanded with marigolds, marked with a red tika and fed. It happens in homes from about seven and in the streets through the morning; by midday most dogs in town are wearing their garlands. See [[post:kukur-tihar-day-of-the-dogs|Kukur Tihar]]." },
          { p: "<strong>Afternoon:</strong> houses are swept and washed, doorways hung with marigolds, and a rangoli is made at the entrance. Shops do the same; many perform their own puja for their account books." },
          { p: "<strong>From dusk, about 5.15 pm:</strong> lamps are lit. The family performs Laxmi Puja in the early evening, and from then until late groups of girls and women go from house to house singing <em>bhailo</em>. The best hours to be walking are from six to nine. See [[post:laxmi-puja-in-nepal-night-of-lights|Laxmi Puja]]." },
          { h3: "Monday 9 November — Gai Tihar" },
          { p: "Cows are garlanded, given a tika and fed grain and grass, usually in the morning. In the towns you see it at temples and wherever a cow is kept; in the villages, in every yard. Lights stay on in the evening and deusi-bhailo continues." },
          { h3: "Tuesday 10 November — Govardhan Puja, Mha Puja and New Year" },
          { p: "<strong>Morning:</strong> oxen are honoured as the cow was, and a small mound of cow dung representing Mount Govardhan is worshipped in farming households. <strong>From late morning:</strong> the Newar community marks the first day of Nepal Sambat 1147 with rallies and cultural processions in Kathmandu, Patan and Bhaktapur. <strong>Evening:</strong> Newar families perform <em>Mha Puja</em>, the worship of the self, at home, and groups of boys and men sing <em>deusi</em> late into the night. See [[post:mha-puja-and-nepal-sambat-new-year|Mha Puja and Nepal Sambat]]." },
          { h3: "Wednesday 11 November — Bhai Tika" },
          { p: "The tika is given at an auspicious time fixed for the whole country, usually late morning; the ceremony in each house takes an hour or more and is followed by a long meal. Streets are almost empty until mid-afternoon. In Kathmandu the temple in the middle of Rani Pokhari opens for this one day of the year, for people who have no brother or sister to exchange tika with. See the [[post:bhai-tika-guide-for-visitors|Bhai Tika guide]]." },
        ],
      },
      {
        h2: "Public Holidays and Closures",
        blocks: [
          {
            table: {
              head: ["Date", "Government offices and banks", "Shops", "Transport"],
              rows: [
                ["Fri 6 November", "Open — the last full working day", "Open, very busy", "Normal; book ahead"],
                ["Sat 7 November", "Closed (the weekly holiday)", "Open, at their busiest", "Busy"],
                ["Sun 8 November", "Closed", "Open until afternoon, then closing for puja", "Normal by day, thin at night"],
                ["Mon 9 November", "Closed", "Many open", "Busy — people travelling for Bhai Tika"],
                ["Tue 10 November", "Closed", "Many open; Newar businesses closed", "Very busy"],
                ["Wed 11 November", "Closed", "Mostly closed until afternoon", "Very quiet; few buses and taxis"],
                ["Thu 12 November", "Open", "Open", "Busy with people returning"],
              ],
              note: "The exact public holidays are set by government notice each year, and some years add a day. Treat Sunday to Wednesday as closed, and confirm locally if a date matters.",
            },
          },
          { p: "The offices that matter to trekkers — immigration for restricted-area permits and visa extensions, and the tourism board for other permits — follow the same pattern. Anything that needs a stamp should be done by Friday 6 November. See [[post:nepal-trekking-permits-explained|trekking permits explained]]." },
        ],
      },
      {
        h2: "What Comes Straight After",
        blocks: [
          {
            table: {
              head: ["Date (2026)", "Event"],
              rows: [
                ["13 – 16 November", "Chhath, the festival of the sun, in Janakpur and the Terai and at ponds in Kathmandu. Main day: Sunday 15 November."],
                ["20 November", "Haribodhini Ekadashi, with fairs at Budhanilkantha and Changu Narayan."],
                ["Late November", "The end of peak trekking season; quieter trails and colder nights."],
              ],
            },
          },
          { p: "Chhath is worth staying for. It begins two days after Bhai Tika and looks like nothing else in the Nepali year; see our [[post:chhath-festival-nepal-guide|Chhath guide]]." },
        ],
      },
      {
        h2: "Tihar Dates for 2027",
        blocks: [
          { p: "In 2027 the festivals fall almost two weeks earlier. The new moon of Kartik is on <strong>Friday 29 October 2027</strong>, which puts Laxmi Puja on or about that date, with Kaag Tihar two days before and Bhai Tika two days after — roughly 27 to 31 October. These are provisional until the official calendar for 2084 BS is published." },
          { p: "If you are planning well ahead, the rule of thumb holds every year: Tihar is centred on the new moon about three weeks after the Dashain tika, and Bhai Tika falls two days after Laxmi Puja." },
        ],
      },
    ],
    faqs: [
      { question: "What are the dates of Tihar 2026?", answer: "Tihar 2026 is from Saturday 7 November to Wednesday 11 November: Kaag Tihar on the 7th, Kukur Tihar and Laxmi Puja on the 8th, Gai Tihar on the 9th, Govardhan Puja and Mha Puja on the 10th, and Bhai Tika on the 11th." },
      { question: "When is Laxmi Puja in 2026?", answer: "Laxmi Puja is on the evening of Sunday 8 November 2026. Lamps are lit from dusk, at about a quarter past five, and the streets are liveliest between six and nine in the evening." },
      { question: "When is Kukur Tihar in 2026?", answer: "Kukur Tihar is on Sunday 8 November 2026. Dogs are garlanded and fed in the morning. In 2026 it falls on the same day as Laxmi Puja, which is unusual." },
      { question: "When is Bhai Tika in 2026?", answer: "Bhai Tika is on Wednesday 11 November 2026. The auspicious time for the tika, usually late in the morning, is announced by the national calendar committee a few days before." },
      { question: "Why are Kukur Tihar and Laxmi Puja on the same day in 2026?", answer: "Festival days follow lunar days, which do not match the solar day exactly. In 2026 the new-moon period that fixes Laxmi Puja begins on Sunday 8 November, the same date on which the dog's day falls." },
      { question: "Which days are public holidays during Tihar 2026?", answer: "Offices and banks are expected to be closed from Sunday 8 to Wednesday 11 November, following the weekly holiday on Saturday the 7th. The government confirms the exact days by notice each year." },
      { question: "When is the Nepal Sambat New Year in 2026?", answer: "Nepal Sambat 1147 begins on Tuesday 10 November 2026, the fourth day of Tihar. It is marked by processions in the Kathmandu valley and by Mha Puja in Newar homes that evening." },
      { question: "When is Tihar in 2027?", answer: "Provisionally from about 27 to 31 October 2027, with Laxmi Puja around Friday 29 October. The dates will be confirmed when the official 2084 BS calendar is issued." },
    ],
    relatedTreks: ["kathmandu-valley-tour", "kathmandu-day-tour", "bhaktapur-day-tour", "patan-day-tour", "pokhara-day-tour"],
    tripsNote: "Day tours and short trips for the five days of the festival.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "kukur-tihar-day-of-the-dogs",
      "laxmi-puja-in-nepal-night-of-lights",
      "bhai-tika-guide-for-visitors",
      "kathmandu-during-tihar",
      "dashain-dates-calendar-for-travellers",
    ],
    tags: ["Tihar", "Festivals", "Travel Planning", "Calendar"],
    meta: {
      title: "Tihar 2026 Dates: Kukur Tihar, Laxmi Puja & Bhai Tika",
      description: "Tihar 2026 is 7–11 November. The full calendar: Kaag Tihar, Kukur Tihar, Laxmi Puja, Mha Puja and Bhai Tika, with timings, holidays and 2027 dates.",
      keywords: "Tihar 2026 dates, Tihar 2083, Laxmi Puja 2026, Kukur Tihar 2026, Bhai Tika 2026 date, Tihar calendar, Tihar public holiday Nepal, Tihar 2027",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kukur-tihar-day-of-the-dogs",
    title: "Kukur Tihar: Nepal's Day of the Dogs",
    cluster: "tihar",
    date: "2026-10-27",
    hero: {
      image: FESTIVALS.kukurTiharGarland,
      alt: "A fluffy white dog with a red tika on its forehead and a marigold garland round its neck, sitting beside a woman in festival dress.",
    },
    excerpt:
      "On the second day of Tihar every dog in Nepal — pet, stray and police dog alike — is given a garland of marigolds, a red tika and a feast. In 2026 Kukur Tihar is on Sunday 8 November. This is why it is done, what you will see, and how to enjoy it without getting bitten.",
    intro: [
      { p: "There is a morning each autumn when the street dogs of Kathmandu are the best-dressed creatures in the city. They pad through Thamel with marigolds round their necks and a smear of red powder between their eyes, looking faintly embarrassed and extremely well fed. Behind house gates, family pets sit through a short ceremony with more or less patience and are rewarded with meat, eggs and milk." },
      { p: "This is <strong>Kukur Tihar</strong>, the day of the dog, and it is the part of Nepal's festival of lights that the rest of the world has taken to its heart. In 2026 it falls on <strong>Sunday 8 November</strong>." },
    ],
    sections: [
      {
        h2: "What Happens",
        blocks: [
          { p: "The ritual is simple and takes a few minutes. The dog is given three things." },
          {
            ul: [
              "<strong>A garland</strong> — a <em>mala</em> of orange marigolds, hung round the neck as it would be for an honoured guest.",
              "<strong>A tika</strong> — a mark of red powder, sometimes mixed with rice and yoghurt, pressed onto the forehead as a blessing.",
              "<strong>Food</strong> — the best the household has. Meat, boiled eggs, milk, rice, and the ring-shaped fried bread called <em>sel roti</em>.",
            ],
          },
          { p: "A lamp and incense may be offered, and a few words said. Then the dog is free to go, usually at speed. The same is done for dogs that belong to nobody: people carry plates of food and bags of garlands out to the strays on their street, who on this one day are approached as guests rather than chased off." },
          { p: "Among the Newars of the Kathmandu valley the day is called <em>Khicha Puja</em>, and the form is the same." },
        ],
      },
      {
        h2: "Why Dogs Are Honoured",
        blocks: [
          { p: "Tihar's five days all turn on <strong>Yama</strong>, the god of death, and the dog is his gatekeeper. In Hindu tradition two dogs, each with four eyes, guard the road to Yama's realm and watch over those who travel it. To honour a dog is to make a friend of the animal you will one day have to pass." },
          { p: "There is a second story, from the end of the <em>Mahabharata</em>. The righteous king Yudhishthira climbs towards heaven with his brothers, his wife and a stray dog that has followed them. One by one the others fall. At the gate, the god Indra tells him he may enter but the dog may not. Yudhishthira refuses to abandon a creature that has been loyal to him — and the dog is revealed to be the god Dharma, testing him. He passes." },
          { p: "And there is <strong>Bhairav</strong>, the fierce form of Shiva whose masks and shrines are everywhere in the Kathmandu valley. His mount is a dog. In a city full of Bhairav temples, dogs are never entirely without standing." },
          { p: "Beneath the mythology is something plainer. Dogs guard the house and the herd, and for one day a year the debt is acknowledged." },
        ],
      },
      {
        h2: "What You Will See",
        blocks: [
          {
            ul: [
              "<strong>Family pets</strong> being garlanded at home, from about seven in the morning. If you are staying in a guesthouse or homestay with a dog, ask to watch.",
              "<strong>Street dogs</strong> fed and garlanded through the morning. By ten or eleven most dogs in the tourist districts are wearing marigolds, some of them several garlands deep.",
              "<strong>Working dogs.</strong> The police and army canine units hold formal ceremonies for their sniffer and tracker dogs, with medals as well as garlands. They are widely covered in the Nepali press.",
              "<strong>Shelters and rescue groups.</strong> Several animal welfare organisations in the valley hold open celebrations for the dogs in their care. Arrangements change each year — check their pages a few days before.",
              "<strong>Marigold sellers</strong> doing the fastest trade of the week from first light.",
            ],
          },
          {
            figure: {
              image: FESTIVALS.kukurTiharResting,
              alt: "A black and white dog lying on a tiled floor with a red tika on its forehead and a garland of yellow marigolds round its neck.",
              caption: "After the puja. The tika and garland stay on for the day.",
            },
          },
        ],
      },
      {
        h2: "Where to Be on the Morning of 8 November",
        blocks: [
          {
            table: {
              head: ["Place", "What to expect"],
              rows: [
                ["Thamel and the old city, Kathmandu", "Garlanded street dogs outside every shop; the lanes around Ason and Indra Chowk are full of flower stalls"],
                ["Kathmandu Durbar Square", "Dogs asleep on temple plinths in their garlands — the photograph everyone wants"],
                ["Boudhanath", "The stupa's resident dogs are well looked after all year and thoroughly decorated today"],
                ["Patan and Bhaktapur", "The Newar version, in brick courtyards; quieter and more domestic"],
                ["Lakeside, Pokhara", "Café dogs and lakeshore strays garlanded by owners and travellers together"],
                ["Any village", "Farm dogs and herding dogs honoured in the yard alongside the household's animals"],
              ],
            },
          },
          { p: "Go early. The ceremonies are over by mid-morning and the afternoon belongs to preparing for Laxmi Puja, which in 2026 falls the same evening. A morning walk through the old city followed by the lights after dark makes Sunday 8 November the single best day of the festival; see [[post:laxmi-puja-in-nepal-night-of-lights|Laxmi Puja: the night of lights]]." },
          { p: "On a trek, you will see less of it in the Buddhist high country. But most lodge kitchens are staffed by people from the middle hills, and the lodge dog generally gets its garland regardless. Trekking dogs — the ones that attach themselves to a group and walk with it for days — tend to do especially well." },
        ],
      },
      {
        h2: "Taking Part — Safely",
        blocks: [
          { p: "Visitors are welcome to join in, and it is one of the pleasures of being in Nepal that day. It needs one piece of plain information: <strong>rabies is present in Nepal</strong>, and street dogs are its main carrier. The risk on any one encounter is small. The disease, once symptoms appear, is always fatal. So take part with some care." },
          {
            ul: [
              "<strong>Garland dogs that have an owner present</strong>, and ask first. Hotel dogs, café dogs and your guide's family dog are ideal.",
              "<strong>Let locals handle the street dogs.</strong> They know which ones are friendly. Watch, photograph, and hand over a garland for someone else to place.",
              "<strong>Do not put your face near a dog you do not know</strong>, however placid it looks, and do not reach over its head — approach from the side.",
              "<strong>Leave a sleeping or eating dog alone.</strong>",
              "<strong>Feed sensibly.</strong> Plain meat, eggs and rice are fine. Chocolate, grapes, raisins and cooked bones are not.",
              "<strong>If you are bitten or scratched, or licked on broken skin:</strong> wash the wound with soap and running water for fifteen minutes, then go to a travel clinic in Kathmandu or Pokhara the same day for post-exposure treatment. Do not wait to see whether the dog seems ill.",
            ],
          },
          { p: "Whether to have the rabies vaccine before travelling is a question for your doctor; our guide to [[post:vaccinations-for-trekking-in-nepal|vaccinations for Nepal]] sets out the considerations." },
        ],
      },
      {
        h2: "The Other 364 Days",
        blocks: [
          { p: "It would be dishonest to leave the picture there. The Kathmandu valley has tens of thousands of free-roaming dogs. Many are community dogs, fed and watched over by the street they live on. Others have a hard time of it, and the garland does not change that." },
          { p: "What has changed it, slowly, is the work of local organisations that vaccinate, sterilise and treat street dogs year-round. If the festival moves you, the useful response is a donation to one of them rather than a bag of treats: a vaccination protects a dog, and the people around it, for far longer than a meal. Your hotel or guide can point you to a group working in the area you are staying." },
          { p: "Travellers who fall for a particular dog on the trail sometimes ask about taking it home. It can be done, through a rescue organisation, with months of paperwork and quarantine requirements that depend on your country. It is not a decision to make on the last day of a trek." },
        ],
      },
      {
        h2: "The Rest of the Festival",
        blocks: [
          { p: "Kukur Tihar is the second of five days. The crow is honoured the day before; the cow and the ox on the days after; and the festival ends with <em>Bhai Tika</em>, when sisters bless their brothers. The full sequence for 2026 is in the [[post:tihar-dates-calendar-for-travellers|Tihar dates guide]], and how to plan a trip around it is in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]]." },
          { p: "A [[trek:kathmandu-day-tour|Kathmandu day tour]] on the morning of the 8th, adjusted to walk through the old city rather than drive between sites, is the simplest way to see it with someone who can explain what is going on — and who knows the dogs." },
        ],
      },
    ],
    faqs: [
      { question: "What is Kukur Tihar?", answer: "Kukur Tihar is the second day of Nepal's Tihar festival, on which dogs are honoured. Pets and street dogs alike are given a marigold garland, a red tika on the forehead and special food, in thanks for their loyalty and protection." },
      { question: "When is Kukur Tihar in 2026?", answer: "Kukur Tihar is on Sunday 8 November 2026. The ceremonies take place in the morning. In 2026 Laxmi Puja falls on the evening of the same day." },
      { question: "Why do Nepalis worship dogs?", answer: "In Hindu tradition dogs guard the gates of Yama, the god of death, and a dog is the mount of the deity Bhairav. A story in the Mahabharata also honours the dog's loyalty. The festival thanks dogs for guarding homes and people." },
      { question: "Can tourists take part in Kukur Tihar?", answer: "Yes. The safest way is to garland a dog whose owner is present, such as a hotel or café dog, after asking. Leave unfamiliar street dogs to local people, and watch and photograph instead." },
      { question: "Where is the best place to see Kukur Tihar?", answer: "In Kathmandu, the lanes of Thamel and the old city, Durbar Square and Boudhanath. In Pokhara, Lakeside. Go in the morning, between about seven and eleven, when dogs are being garlanded and fed." },
      { question: "Is it safe to touch street dogs in Nepal?", answer: "It carries a risk, because rabies is present in Nepal. Most street dogs are gentle, but avoid handling dogs you do not know. If bitten, scratched or licked on broken skin, wash the wound thoroughly and seek post-exposure treatment the same day." },
      { question: "What do dogs eat on Kukur Tihar?", answer: "Meat, boiled eggs, milk, rice and sel roti, a fried rice-flour bread. If you want to offer food, plain meat or eggs are best. Do not give chocolate, grapes, raisins or cooked bones." },
      { question: "Are other animals honoured during Tihar?", answer: "Yes. The crow is honoured on the first day, the dog on the second, the cow on the third and the ox on the fourth. Each has a connection with Yama or with the household's prosperity." },
    ],
    relatedTreks: ["kathmandu-day-tour", "kathmandu-valley-tour", "kathmandu-photography-tour", "pokhara-day-tour", "bhaktapur-day-tour"],
    tripsNote: "City tours for the morning of Kukur Tihar.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "tihar-dates-calendar-for-travellers",
      "laxmi-puja-in-nepal-night-of-lights",
      "photographing-tihar-in-nepal",
      "kathmandu-during-tihar",
      "vaccinations-for-trekking-in-nepal",
    ],
    tags: ["Tihar", "Kukur Tihar", "Festivals", "Culture"],
    meta: {
      title: "Kukur Tihar 2026: Nepal's Day of the Dogs Explained",
      description: "Kukur Tihar is on Sunday 8 November 2026. Why Nepal honours dogs with garlands and tika, where to see it in Kathmandu and Pokhara, and how to join in safely.",
      keywords: "Kukur Tihar, Kukur Tihar 2026, day of the dogs Nepal, dog festival Nepal, Tihar dog worship, Khicha Puja, Nepal dog festival date",
    },
  },
];
