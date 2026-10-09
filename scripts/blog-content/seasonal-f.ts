import type { BlogContent } from "./build";
import { FESTIVALS, trekImage } from "./images";

/**
 * Autumn 2026 series, part 6: the festival that follows Tihar, and the three
 * articles that look ahead to December for readers planning their next trip.
 */
export const seasonalF: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "chhath-festival-nepal-guide",
    title: "Chhath Festival in Nepal: Janakpur, Kathmandu and the Sun at the Water's Edge",
    cluster: "seasonal",
    date: "2026-11-05",
    hero: {
      image: FESTIVALS.chhathJanakpurDusk,
      alt: "Baskets of fruit and lit clay lamps laid out at the edge of a pond in Janakpur at dusk during Chhath, with lights reflected in the water.",
    },
    excerpt:
      "Two days after Tihar ends, the plains of southern Nepal turn to face the sun. Chhath is four days of fasting that end with thousands standing in ponds and rivers to greet sunset and sunrise. In 2026 the main evening is Sunday 15 November. This is what happens, where to see it, and how to behave.",
    intro: [
      { p: "Most Hindu worship is directed at an image. Chhath is directed at the thing itself. On a November evening, families carry baskets of fruit down to the nearest water, the women who have been fasting wade in to their waists, and everyone turns west and waits. When the sun touches the horizon they lift their offerings to it. Twelve hours later they are back in the same water in the dark, facing east, waiting for it to return." },
      { p: "It is the great festival of the <strong>Mithila</strong> region and of the Terai, the lowland strip along Nepal's southern border, and it is unlike anything in the hills. There is no priest, no temple and no idol — only the sun, the water and a discipline of fasting that is among the strictest in the Hindu year. In 2026 Chhath runs from <strong>13 to 16 November</strong>, beginning two days after the end of Tihar." },
    ],
    sections: [
      {
        h2: "Chhath 2026: The Four Days",
        blocks: [
          {
            table: {
              head: ["Date", "Day", "What happens"],
              rows: [
                ["Friday 13 November", "<strong>Nahay Khay</strong> — bathe and eat", "The devotee bathes in a river or pond, cleans the house and eats one simple meal: rice, lentils and bottle gourd, cooked without onion or garlic."],
                ["Saturday 14 November", "<strong>Kharna</strong>", "A day-long fast without water, broken after sunset with rice pudding made with jaggery, and flatbread. After this meal the main fast begins: about thirty-six hours with no food or water."],
                ["Sunday 15 November", "<strong>Sandhya Arghya</strong> — the evening offering", "The main day. In the late afternoon families go in procession to the water. At sunset the fasting devotees stand in it and offer the baskets to the setting sun."],
                ["Monday 16 November", "<strong>Usha Arghya</strong> — the dawn offering", "Before first light everyone returns. The offering is made to the rising sun, the fast is broken at the water's edge, and the blessed food is shared out."],
              ],
              note: "Sunday 15 November is a public holiday in Nepal. Sunset in Janakpur is at about ten past five and sunrise at about twenty past six.",
            },
          },
          { p: "The name comes from the word for six: the main offering falls on the sixth day after the new moon of Tihar. It is one of the few festivals in the calendar where the setting sun is honoured as well as the rising one — an acknowledgement, people will tell you, that what goes down comes back." },
        ],
      },
      {
        h2: "What You See at the Water",
        blocks: [
          { p: "In the days before, each family claims a spot on the bank and prepares it: the ground is plastered smooth with mud, a small platform is built, and the place is marked out with banana trunks and strings of lights. By the afternoon of the main day the whole shore of a pond is a continuous row of these, each with its family behind it." },
          {
            ul: [
              "<strong>The baskets.</strong> Offerings are carried in flat bamboo winnowing trays and deep bamboo baskets, on the head, by a male relative who walks barefoot. They hold whole hands of bananas, coconuts, pomelos, sugarcane, radishes, ginger and turmeric still on the plant, and the stamped biscuits called <em>thekua</em>.",
              "<strong>The sugarcane.</strong> Tall stalks with their leaves are tied at the top to make a canopy over the offerings, with clay lamps and small clay elephants set underneath.",
              "<strong>The devotees.</strong> Mostly women, in new saris of yellow, red and orange, with a line of vermilion drawn from the tip of the nose to the parting of the hair. They stand in the water holding a basket, sometimes for an hour.",
              "<strong>The offering.</strong> As the sun reaches the horizon, milk and water are poured over the basket towards it. Family members take turns to pour.",
              "<strong>The singing.</strong> Slow, plaintive folk songs in Maithili and Bhojpuri, sung by the women, about the sun and the goddess Chhathi Maiya. You will hear them from loudspeakers for a week beforehand.",
              "<strong>The night.</strong> Lamps are set afloat; many families stay at the bank until dawn.",
            ],
          },
          {
            figure: {
              image: FESTIVALS.chhathArghya,
              alt: "Two women in bright orange and red saris standing knee-deep in water holding offerings during Chhath, with other worshippers and banana plants on the bank behind them.",
              caption: "Fasting devotees in the water in Saptari district, in the eastern Terai.",
            },
          },
          { p: "The dawn offering is the more moving of the two. It is cold, the mist is on the water, the devotees have not eaten or drunk for a day and a half, and the first edge of the sun produces a sound from ten thousand people that you do not forget." },
        ],
      },
      {
        h2: "Janakpur: The Place to See It",
        blocks: [
          { p: "<strong>Janakpur</strong>, in the eastern Terai near the Indian border, is the old capital of Mithila and, in the <em>Ramayana</em>, the birthplace of Sita. It is a city of ponds — dozens of them, rectangular, stone-stepped, built over centuries for exactly this kind of ritual bathing — and at Chhath every one is ringed with lamps." },
          {
            table: {
              head: ["Where", "What it is like"],
              rows: [
                ["Ganga Sagar and Dhanush Sagar", "The two large sacred ponds near the centre. The biggest crowds and the most elaborate decoration."],
                ["The smaller ponds", "Quieter, more local, and easier to move around. Ask at your hotel which is closest."],
                ["Janaki Mandir", "The vast white marble temple to Sita, built in 1910 in a style more Rajasthani palace than Nepali shrine. Lit at night; the centre of the old town."],
                ["The lanes around the temple", "Sweet shops, bangle sellers, and stalls selling everything needed for the baskets."],
              ],
            },
          },
          {
            figure: {
              image: FESTIVALS.janakiMandir,
              alt: "The white arcades and domed pavilions of the Janaki Mandir in Janakpur under a blue sky.",
              caption: "The Janaki Mandir, dedicated to Sita, at the centre of Janakpur.",
            },
          },
          { p: "Janakpur is also the home of <strong>Mithila painting</strong>, the bold, flat, intricately patterned art that the women of the region paint on the mud walls of their houses and now on paper. Workshops on the edge of town can be visited, and at festival time freshly painted walls are everywhere in the surrounding villages." },
          { h3: "Getting there" },
          {
            ul: [
              "<strong>By air:</strong> daily flights from Kathmandu, about twenty-five minutes. Book early for 13 – 16 November.",
              "<strong>By road:</strong> six to eight hours from Kathmandu on the highway through Sindhuli, a dramatic mountain road that drops to the plains.",
              "<strong>Where to stay:</strong> a small number of mid-range hotels near the centre. They fill for the festival; reserve well ahead.",
              "<strong>How long:</strong> two nights. Arrive on the 14th or the morning of the 15th, see both offerings, leave on the 16th.",
            ],
          },
        ],
      },
      {
        h2: "Chhath in Kathmandu",
        blocks: [
          { p: "You do not have to go to the plains. Hundreds of thousands of people from the Terai live in the capital, and over the past two decades Chhath has become one of Kathmandu's own public festivals, kept by many hill families too." },
          {
            ul: [
              "<strong>Kamal Pokhari</strong>, a pond in the centre of the city, is decorated and lit and draws large crowds.",
              "<strong>The Bagmati ghats at Gaurighat and Guheshwori</strong>, upstream of Pashupatinath, are the main riverside site.",
              "<strong>Nag Pokhari</strong> and other neighbourhood ponds hold smaller gatherings.",
              "<strong>Temporary pools.</strong> Where there is no water, communities build tanks on open ground for the purpose.",
            ],
          },
          { p: "The evening offering on Sunday 15 November is the easier one to attend: go at about four, and expect road closures near the sites. It is a real Chhath with fewer of the things that make Janakpur's unforgettable — less water, more concrete — and it costs you nothing but an afternoon. A [[trek:kathmandu-day-tour|Kathmandu day tour]] can finish at one of the ghats." },
        ],
      },
      {
        h2: "How to Behave",
        blocks: [
          { p: "Chhath is governed by ideas of purity that are stricter than at most festivals. Visitors are welcome and will be treated kindly; these are the things that matter." },
          {
            ul: [
              "<strong>Do not touch the offerings</strong>, the baskets or the prepared ground. Everything has been made by people who bathed first and cooked in a cleaned kitchen, and a stranger's hand undoes it.",
              "<strong>Do not step over anything</strong> laid on the ground, and take your shoes off where others have.",
              "<strong>Stay out of the water</strong> unless you are invited in.",
              "<strong>Stand behind the families</strong>, not between them and the sun.",
              "<strong>Ask before photographing a devotee close up.</strong> Wide views are fine. No flash at dawn.",
              "<strong>Dress modestly</strong>, with shoulders and knees covered.",
              "<strong>Accept the prasad</strong> if it is offered after the dawn ritual — a thekua, a piece of fruit — with your right hand, and eat it. It is an honour to be given it.",
              "<strong>Do not offer food or water to someone who is fasting.</strong>",
            ],
          },
          {
            figure: {
              image: FESTIVALS.chhathPrasad,
              alt: "A steel plate of thekua biscuits and rice-flour sweets, the food offered at Chhath.",
              caption: "Chhath prasad: stamped wheat-and-jaggery thekua and rice-flour laddu, shared out after the dawn offering.",
            },
          },
        ],
      },
      {
        h2: "Fitting It Into a Trip",
        blocks: [
          { p: "Chhath is the natural last chapter of an autumn in Nepal, and in 2026 it comes at a convenient moment: the peak of the trekking season is passing, flights are easier to get, and the Terai is at its most pleasant — warm days of 25 to 28°C, cool nights, clear air." },
          {
            table: {
              head: ["If you are…", "Consider"],
              rows: [
                ["Finishing a trek around 12 – 13 November", "Fly to Janakpur on the 14th, back to Kathmandu on the 16th"],
                ["In Kathmandu for Tihar (7 – 11 November)", "Stay four more days; see Chhath at the Bagmati or fly south"],
                ["Heading for the jungle", "Combine Janakpur with the [[trek:koshi-tappu-wildlife-reserve-tour|Koshi Tappu Wildlife Reserve]], three hours east, where the winter birds are arriving"],
                ["On a cultural tour", "Add Janakpur to [[trek:lumbini-tour|Lumbini]] and [[trek:chitwan-national-park-tour-3-days|Chitwan]] for a journey along the plains"],
              ],
            },
          },
          { p: "We arrange Janakpur as a two- or three-day extension with flights, a local guide who speaks Maithili, and a hotel within walking distance of the ponds. How Chhath sits alongside the season's other festivals is in [[post:nepal-festivals-and-events-october-november-2026|what's on in Nepal this autumn]]; the one before it is in our [[post:tihar-festival-nepal-travel-guide|Tihar guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "When is Chhath in 2026?", answer: "Chhath 2026 runs from Friday 13 to Monday 16 November. The main evening offering to the setting sun is on Sunday 15 November, and the closing offering to the rising sun is at dawn on Monday 16 November." },
      { question: "What is Chhath?", answer: "Chhath is a four-day Hindu festival dedicated to the sun and the goddess Chhathi Maiya. Devotees fast, in the final stage without food or water for about thirty-six hours, and make offerings standing in a river or pond at sunset and again at sunrise." },
      { question: "Where is Chhath celebrated in Nepal?", answer: "Throughout the Terai, the southern plains, and most famously in Janakpur. It is also widely observed in Kathmandu, at Kamal Pokhari, at the Bagmati ghats near Gaurighat and at other ponds." },
      { question: "Where is the best place to see Chhath in Nepal?", answer: "Janakpur. The city has dozens of sacred ponds, all decorated and lit for the festival, with the largest gatherings at Ganga Sagar and Dhanush Sagar near the Janaki temple." },
      { question: "How do I get to Janakpur from Kathmandu?", answer: "By a daily flight of about twenty-five minutes, or by road in six to eight hours on the highway through Sindhuli. Flights and hotels for the festival days should be booked well in advance." },
      { question: "Can tourists attend Chhath?", answer: "Yes. Visitors are welcome to watch at the water's edge. Do not touch the offerings or step on the prepared ground, stay out of the water, stand behind the families and ask before taking close photographs." },
      { question: "Is Chhath a public holiday in Nepal?", answer: "Yes. The main day of Chhath, Sunday 15 November in 2026, is a public holiday across Nepal. Offices and banks are closed that day." },
      { question: "What food is offered at Chhath?", answer: "Thekua, a stamped biscuit of wheat flour and jaggery; rice-flour sweets; and whole fruit and vegetables including bananas, coconut, sugarcane, pomelo, radish and ginger. It is all prepared under strict rules of purity." },
    ],
    relatedTreks: ["koshi-tappu-wildlife-reserve-tour", "lumbini-tour", "chitwan-national-park-tour-3-days", "kathmandu-day-tour", "nepal-cultural-tour", "hindu-pilgrimage-tour"],
    tripsNote: "Trips along the plains and in the valley that combine with Chhath.",
    relatedPosts: [
      "nepal-festivals-and-events-october-november-2026",
      "tihar-festival-nepal-travel-guide",
      "photographing-tihar-in-nepal",
      "nepal-festival-calendar",
      "lumbini-travel-guide",
      "bird-watching-in-nepal-guide",
    ],
    tags: ["Festivals", "Chhath", "Terai", "Culture"],
    meta: {
      title: "Chhath Festival in Nepal 2026: Janakpur & Kathmandu Guide",
      description: "Chhath 2026 is 13–16 November, with the main offering on Sunday 15. What happens each day, where to see it in Janakpur and Kathmandu, and how to behave.",
      keywords: "Chhath festival Nepal, Chhath 2026 Nepal, Chhath Puja Janakpur, Chhath in Kathmandu, Chhath date 2026, Janakpur travel, Mithila festival Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-in-december",
    title: "Trekking in Nepal in December: Where to Go and What to Expect",
    cluster: "seasonal",
    date: "2026-11-06",
    hero: {
      image: trekImage("poonhill-trek", "00-landscape-view-of-poon-hill"),
      alt: "The view from Poon Hill across forested ridges to the snow peaks of the Annapurna and Dhaulagiri ranges.",
    },
    excerpt:
      "December is the quiet edge of Nepal's trekking year: skies as clear as November's, a fraction of the people, and real cold above 3,500 metres. This is the weather by altitude, the routes that work, the ones that become a gamble, and how the month changes from its first week to its last.",
    intro: [
      { p: "Peak season ends in the last days of November, and for about three weeks afterwards Nepal has a secret. The high pressure that makes autumn so reliable has not gone anywhere. The air is, if anything, cleaner. But the groups have flown home, the lodge owners have time to sit down with you, and trails that carried hundreds a day in October carry a dozen." },
      { p: "What has changed is the temperature and the margin for error. Nights are long and hard-frozen, the first winter snow can arrive in any week, and the highest lodges begin to close. December rewards people who pick the right route for it and pack properly — and is unforgiving of those who treat it as late autumn." },
    ],
    sections: [
      {
        h2: "December Weather by Altitude",
        blocks: [
          {
            table: {
              head: ["Where", "Altitude", "Day", "Night"],
              rows: [
                ["Kathmandu", "1,400 m", "17 – 20°C", "2 – 5°C"],
                ["Pokhara", "820 m", "19 – 22°C", "6 – 9°C"],
                ["Chitwan", "150 m", "22 – 25°C", "8 – 11°C"],
                ["Ghorepani / Namche Bazaar", "2,900 – 3,400 m", "5 – 9°C", "−8 to −3°C"],
                ["Annapurna Base Camp / Kyanjin Gompa", "3,900 – 4,100 m", "0 – 5°C", "−14 to −8°C"],
                ["Gorak Shep", "5,164 m", "−6 to 0°C", "−25 to −16°C"],
              ],
              note: "Typical figures for a normal year. The second half of the month is several degrees colder than the first.",
            },
          },
          {
            ul: [
              "<strong>It is dry.</strong> December is one of the least rainy months of the year. Most days are cloudless from dawn to dusk.",
              "<strong>Snow comes in pulses.</strong> Winter weather arrives from the west as short disturbances, a day or two long, a few times a month. Above about 3,000 metres they bring snow, which then lies on shaded ground until spring.",
              "<strong>Days are short.</strong> The shortest day of the year is 21 December: about ten hours and twenty minutes of light, with the sun off most valley floors by four.",
              "<strong>The lowlands are at their best.</strong> Kathmandu's mornings are often foggy and its nights cold in unheated rooms, but Pokhara and the Terai have warm, clear days.",
            ],
          },
        ],
      },
      {
        h2: "Early or Late December?",
        blocks: [
          {
            table: {
              head: ["", "1 – 15 December", "16 – 31 December"],
              rows: [
                ["Character", "The tail of autumn", "Winter proper"],
                ["Snow on trails", "Usually none below 4,000 m", "Possible from 3,000 m after a front"],
                ["High passes", "Often still open", "Frequently closed or serious"],
                ["High lodges", "Mostly open", "Some closed on side routes and above 4,500 m"],
                ["Other trekkers", "Very few", "A holiday surge from about the 22nd"],
                ["Best for", "Almost any route below 5,000 m", "Lower routes, viewpoints, the lowlands"],
              ],
            },
          },
          { p: "The first half of the month is the one to aim at if you want altitude. The last ten days bring a wave of visitors on Christmas and New Year holidays, which fills Pokhara and the short treks but leaves the longer routes quiet; see [[post:christmas-and-new-year-in-nepal|Christmas and New Year in Nepal]]." },
        ],
      },
      {
        h2: "The Best Treks for December",
        blocks: [
          { p: "The principle is simple: stay below about 4,000 metres, avoid anything that depends on crossing a pass, and favour south-facing routes that get the sun." },
          {
            table: {
              head: ["Trek", "Highest point", "Why it works"],
              rows: [
                ["[[trek:poonhill-trek|Poon Hill]]", "3,210 m", "Low, sunny, well-lodged, and at its clearest. The classic winter trek."],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "3,580 m (High Camp)", "Superb in early December. Snow on the upper ridge later; go as far as conditions allow."],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "3,870 m", "A sunny east-west valley with lodges open all winter and no flight needed."],
                ["[[trek:mohare-danda-trek|Mohare Danda]]", "3,300 m", "Community lodges, a wide panorama, and almost nobody."],
                ["[[trek:pikey-peak-trek|Pikey Peak]]", "4,065 m", "Everest from a ridge you reach by road. Cold on top; one night high."],
                ["[[trek:helambu-trek|Helambu]]", "3,650 m", "Close to Kathmandu, through villages, mostly below the snow line."],
                ["[[trek:tamang-heritage-trek|Tamang Heritage Trail]]", "3,870 m (briefly)", "Villages, homestays and a hot spring — culture rather than altitude."],
                ["[[trek:everest-view-trek|Everest View trek]]", "3,880 m", "Namche and Tengboche without the hard cold higher up."],
              ],
            },
          },
          { p: "For a trek with no altitude at all, the village routes are in their element: clear views, warm sun, and winter crops in the fields. [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] and [[trek:sirubari-village-tour|Sirubari]] are both open and at their most hospitable. Our full comparison is in [[post:winter-trekking-in-nepal-best-routes|winter trekking: the best routes]]." },
        ],
      },
      {
        h2: "Possible, With Care",
        blocks: [
          {
            table: {
              head: ["Trek", "In December"],
              rows: [
                ["[[trek:everest-base-camp-trek|Everest Base Camp]]", "Done every winter. Lodges on the main trail stay open. Very cold above Dingboche; needs proper kit and a spare day or two. See [[post:everest-base-camp-trek-in-december|Everest Base Camp in December]]."],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "Usually fine in the first half. After heavy snow the gorge above Deurali carries avalanche risk and guides wait for it to settle. Go with someone who knows the slopes."],
                ["[[trek:gokyo-lake-trek|Gokyo Lakes]]", "Reachable; the lakes freeze from mid-month. Some lodges close. Gokyo Ri is a cold, windy climb."],
                ["[[trek:khopra-danda-trek|Khopra Danda]]", "The ridge is exposed and holds snow. Possible in a dry spell."],
              ],
            },
          },
          { p: "And the ones to leave for another season, unless you have winter mountain experience and a flexible plan: the Thorong La on the Annapurna Circuit, the Larke La on Manaslu, the Everest Three Passes, Upper Mustang beyond Kagbeni, and Gosaikunda's Lauribina pass. All can be closed for a week at a time, and the lodges that serve them shut." },
        ],
      },
      {
        h2: "What December Asks of Your Kit",
        blocks: [
          {
            ul: [
              "<strong>A sleeping bag rated to −15°C</strong> for routes up to 4,000 metres and −25°C above. This is the item not to compromise on.",
              "<strong>A heavy down jacket</strong> with a hood, and insulated trousers or thick thermals for evenings.",
              "<strong>Microspikes.</strong> Cheap, light, and the difference between walking and sliding on a frozen trail in shade.",
              "<strong>Gaiters</strong> if snow is forecast.",
              "<strong>Two pairs of gloves</strong> — liners and insulated — and a warm hat that covers the ears.",
              "<strong>An insulated bottle</strong> and a habit of filling it with hot water at night.",
              "<strong>A head torch and spare batteries.</strong> You will use it every morning and evening.",
              "<strong>Sunglasses and sunscreen.</strong> Snow glare at altitude burns faster than summer sun.",
            ],
          },
          { p: "Almost all of it can be hired or bought in Kathmandu and Pokhara for much less than at home. The baseline is our [[post:nepal-trekking-packing-list|trekking packing list]]." },
        ],
      },
      {
        h2: "Lodges, Flights and Practicalities",
        blocks: [
          {
            ul: [
              "<strong>Lodges</strong> on the main routes stay open; on side routes and at the highest stops some close as their owners go down for winter. A guide phones ahead. You will often be the only guests, and will eat in the kitchen by the fire with the family.",
              "<strong>Prices</strong> for rooms are often negotiable. Food costs the same as ever, because it was carried there.",
              "<strong>Heating</strong> means a stove in the dining room in the evening. Bedrooms are not heated anywhere.",
              "<strong>Water</strong> pipes freeze above about 3,000 metres. Showers become a bucket; washing becomes optional.",
              "<strong>Lukla flights</strong> normally return to Kathmandu's airport after the peak season, which ends the midnight drive to Ramechhap. The new problem is morning fog in the Kathmandu valley, which can delay departures until late morning from mid-December.",
              "<strong>Permits and offices</strong> run normally all month. There are no long festival closures.",
              "<strong>Road travel</strong> is at its easiest: dry roads and no landslides.",
            ],
          },
          { p: "Altitude does not care about the season, but cold makes its early signs easier to dismiss — a headache blamed on the chill, tiredness on a bad night. Keep to a proper schedule; see our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]]." },
        ],
      },
      {
        h2: "December Beyond the Trails",
        blocks: [
          { p: "It is worth remembering that half of Nepal is not mountains, and December is when the other half is at its best." },
          {
            ul: [
              "<strong>Chitwan and Bardia.</strong> Cool, dry and clear. As the tall grass is cut back, wildlife viewing improves week by week through the winter. See [[post:chitwan-national-park-guide|our Chitwan guide]] and the [[trek:chitwan-national-park-tour-3-days|three-day Chitwan tour]].",
              "<strong>Birds.</strong> Winter migrants arrive on the wetlands of the Terai from November. [[trek:koshi-tappu-wildlife-reserve-tour|Koshi Tappu]] is the place for them.",
              "<strong>Lumbini.</strong> The birthplace of the Buddha is on a hot plain that is only comfortable in winter.",
              "<strong>Pokhara.</strong> Warm days, mountain views from the lake nearly every morning, and paragliding in stable air.",
              "<strong>Mountain flights.</strong> Winter visibility is the best of the year when the valley fog clears; the [[trek:everest-mountain-flight|Everest mountain flight]] is a way to see the high peaks without the cold.",
            ],
          },
          { p: "A common December plan is a week on a low trek and a week split between Pokhara and the jungle. Tell us what you would like to see and we will suggest how to divide it. For the month before, see [[post:trekking-in-nepal-in-november|trekking in November]]." },
        ],
      },
    ],
    faqs: [
      { question: "Can you trek in Nepal in December?", answer: "Yes. December has clear, dry weather and very few trekkers. Routes below about 4,000 metres are in good condition all month. Higher routes are possible early in the month with proper cold-weather equipment, and the high passes become unreliable." },
      { question: "How cold is Nepal in December?", answer: "Kathmandu is around 17 to 20°C by day and 2 to 5°C at night. At 3,000 metres nights are −3 to −8°C. At Everest Base Camp altitude nights can fall to −20°C or lower. The lowlands are warm by day." },
      { question: "Does it snow in Nepal in December?", answer: "In the mountains, yes, though not often. Snow falls a few times a month above about 3,000 metres, in short spells, and lies in shaded places. Kathmandu and Pokhara do not get snow." },
      { question: "Which trek is best in December?", answer: "Poon Hill is the most reliable. Mardi Himal and Langtang Valley are excellent in the first half of the month. Mohare Danda, Pikey Peak and Helambu are good quieter choices, all at moderate altitude." },
      { question: "Is Everest Base Camp possible in December?", answer: "Yes. Lodges on the main trail stay open and the skies are very clear. It is extremely cold above Dingboche, with nights of −20°C or lower at Gorak Shep, so a winter sleeping bag, down clothing and spare days are essential." },
      { question: "Are teahouses open in December?", answer: "On the main trekking routes, yes. Some lodges at the highest stops and on side routes close for the winter. A guide confirms each night's lodging in advance by phone." },
      { question: "Is December crowded in Nepal?", answer: "No. The first three weeks are among the quietest of the trekking year. Numbers rise in Pokhara and on the short treks over Christmas and New Year, from about 22 December to 2 January." },
      { question: "Are the high passes open in December?", answer: "Not reliably. Thorong La, the Larke La and the Everest passes can be open in a dry spell early in the month, but any snowfall may close them for days, and the lodges near them shut. They are best left for spring or autumn." },
    ],
    relatedTreks: ["poonhill-trek", "mardi-himal-trek", "langtang-valley-trek", "mohare-danda-trek", "pikey-peak-trek", "everest-view-trek"],
    tripsNote: "Routes at moderate altitude that are at their best in early winter.",
    relatedPosts: [
      "winter-trekking-in-nepal-best-routes",
      "everest-base-camp-trek-in-december",
      "christmas-and-new-year-in-nepal",
      "trekking-in-nepal-in-november",
      "best-time-to-visit-nepal-trekking-seasons",
      "nepal-trekking-packing-list",
    ],
    tags: ["Trekking Seasons", "December", "Winter Trekking", "Travel Planning"],
    meta: {
      title: "Trekking in Nepal in December: Weather & Best Routes",
      description: "December trekking in Nepal: temperatures by altitude, the best low routes, which high treks are still possible, gear for the cold and what stays open.",
      keywords: "trekking in Nepal in December, Nepal in December, Nepal weather December, best treks December Nepal, winter trekking Nepal, Nepal December temperature",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "everest-base-camp-trek-in-december",
    title: "Everest Base Camp Trek in December: Cold, Clear and Almost Empty",
    cluster: "seasonal",
    date: "2026-11-07",
    hero: {
      image: trekImage("everest-base-camp-trek", "00-kala-patthar-26-everest-lhotse-2007-gje"),
      alt: "Everest and Lhotse seen from Kala Patthar in clear winter light.",
    },
    excerpt:
      "In December the trail to Everest Base Camp is the quietest it will be all year and the sky is at its clearest. It is also seriously cold. This is the temperature at each stop, what is open, how the flights work in winter, the equipment that makes it comfortable, and who should think twice.",
    intro: [
      { p: "By the first week of December the queues on the Namche hill are gone. The yak trains are fewer. At Tengboche the monks have the courtyard to themselves, and in the lodges at Lobuche — where in October you might have slept on a bench — the owner asks which room you would like. Outside, the mountains stand against a sky so clear and so dark blue that it looks retouched." },
      { p: "This is the Everest region in early winter, and for a certain kind of trekker it is the best month there is. The catch is in the thermometer. At Gorak Shep in late December the temperature inside your bedroom at night is the same as outside it, and outside it is twenty below. Nothing about the trek is harder in December except staying warm, and that is entirely a matter of preparation." },
    ],
    sections: [
      {
        h2: "Temperatures Stop by Stop",
        blocks: [
          {
            table: {
              head: ["Stop", "Altitude", "Day", "Night"],
              rows: [
                ["Lukla", "2,860 m", "6 – 10°C", "−4 to 0°C"],
                ["Namche Bazaar", "3,440 m", "4 – 8°C", "−9 to −5°C"],
                ["Tengboche", "3,867 m", "2 – 6°C", "−12 to −7°C"],
                ["Dingboche", "4,410 m", "−1 to 4°C", "−17 to −11°C"],
                ["Lobuche", "4,940 m", "−4 to 1°C", "−21 to −15°C"],
                ["Gorak Shep", "5,164 m", "−6 to 0°C", "−25 to −17°C"],
              ],
              note: "Typical figures; early December is at the warmer end and the last week at the colder. Wind on Kala Patthar can take the felt temperature below −30°C.",
            },
          },
          { p: "By day, in the sun and out of the wind, it is perfectly pleasant to walk in, and the trail is dry. December is one of the driest months of the year in the Khumbu. Snow falls only when a winter front passes, perhaps two or three times in the month; it usually amounts to a few centimetres and makes the trek prettier and slower for a day." },
          { p: "The real cold is from four in the afternoon, when the sun goes, to eight the next morning, when it comes back. That is sixteen hours, and most of the skill of a winter trek lies in managing them." },
        ],
      },
      {
        h2: "What Is Open",
        blocks: [
          {
            ul: [
              "<strong>Lodges on the main trail</strong> from Lukla to Gorak Shep stay open all winter. Not all of them — perhaps one in three at the highest stops — but there is always a bed, and you will not need to book.",
              "<strong>Namche Bazaar</strong> is a year-round town: bakeries, gear shops, the Saturday market and working ATMs.",
              "<strong>Tengboche monastery</strong> holds its daily prayers as usual.",
              "<strong>The rescue clinic at Pheriche</strong> normally closes after the autumn season. The nearest staffed medical help in winter is lower down, which is one reason to trek with a guide who carries a proper first-aid kit and knows the evacuation procedure.",
              "<strong>Side routes are different.</strong> In the Gokyo valley and on the passes — the Cho La, Renjo La and Kongma La — many lodges close and the crossings may be snowbound. The Three Passes are not a December trek for most people.",
            ],
          },
          { p: "With few guests, lodge life changes for the better. Everyone gathers round a single stove fed with dried yak dung, the owner's family eats with you, and you are likely to end the evening knowing a good deal about how a Sherpa village gets through the winter." },
        ],
      },
      {
        h2: "Flights in Winter",
        blocks: [
          { p: "After the peak season ends, Lukla flights normally go back to operating from Kathmandu itself instead of from Ramechhap. That removes the four-hour night drive that autumn trekkers endure, and it is one of December's real conveniences. Confirm the arrangement when you book, as it is set each season by the aviation authority." },
          { p: "Winter has its own delay, though, and it is at the Kathmandu end. From about mid-December the valley often fills with fog overnight, and the airport cannot dispatch the first flights until it lifts — sometimes at nine, sometimes at eleven. Because Lukla closes when the wind rises around midday, a late start can cost the whole day's schedule." },
          {
            ul: [
              "<strong>Allow two buffer days</strong> at the end of the trek in the second half of December.",
              "<strong>Book the first flight</strong> anyway; when the fog clears, they go in order.",
              "<strong>Know the helicopter option.</strong> Helicopters can often fly when planes cannot. See [[post:lukla-flight-delays-peak-season-backup-plans|Lukla flight delays and backup plans]].",
            ],
          },
        ],
      },
      {
        h2: "The Equipment That Makes It Comfortable",
        blocks: [
          { p: "People who say they were miserable on a December trek were, almost without exception, under-equipped. People who had the right kit describe it as the best trek they have done. The list is not long." },
          {
            table: {
              head: ["Item", "December standard"],
              rows: [
                ["Sleeping bag", "Comfort rating of −20°C or lower, plus a fleece or silk liner. Ask the lodge for an extra blanket on top."],
                ["Down jacket", "Expedition weight, with a hood. You will wear it at dinner and possibly to bed."],
                ["Legs", "Thermal leggings from Namche up; down or synthetic insulated trousers for the evenings above Dingboche."],
                ["Hands", "Liner gloves plus insulated mittens. Fingers are the first thing to suffer on Kala Patthar."],
                ["Feet", "Insulated trekking boots, one size up for a thick sock. Down booties for the lodge."],
                ["Traction", "Microspikes, for the icy stretches near Lobuche and on the moraine."],
                ["Face", "Buff, balaclava for summit morning, sunglasses with side protection."],
                ["Bottles", "Two wide-mouthed one-litre bottles that take boiling water. No hydration bladder — the tube freezes."],
              ],
            },
          },
          {
            ul: [
              "<strong>Hot water bottle every night.</strong> Fill both bottles at dinner, put them in the sleeping bag. They are your heating and your morning drinking water.",
              "<strong>Sleep with your electronics</strong> and your boot liners.",
              "<strong>Dress before you get cold</strong>, not after. Put the down jacket on the moment you stop walking.",
              "<strong>Eat a lot.</strong> You burn far more in the cold. Order the extra dal bhat.",
            ],
          },
          { p: "The full baseline list is in our [[post:everest-base-camp-packing-list|Everest Base Camp packing list]]. Everything on the winter list can be hired in Kathmandu." },
        ],
      },
      {
        h2: "Altitude, Health and the Cold",
        blocks: [
          { p: "The altitude schedule is the same in any month: two nights at Namche, two at Dingboche, no more than about 500 metres of sleeping gain a day above 3,000 metres. Do not let short days or an empty trail tempt you to skip a rest day. The detail is in the [[post:everest-base-camp-trek-itinerary-day-by-day|day-by-day itinerary]]." },
          {
            ul: [
              "<strong>Dehydration</strong> is the winter trap. Cold dulls thirst and the air is desert-dry. Aim for three to four litres of fluid a day, most of it warm.",
              "<strong>The Khumbu cough</strong> — a dry, hacking cough from breathing cold air hard — affects most winter trekkers above Dingboche. Breathe through a buff, sip hot drinks, and see [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|our guide to it]].",
              "<strong>Frostnip</strong> on fingers, toes, nose and cheeks is a real possibility on the dawn climb of Kala Patthar. Numbness is the warning; stop and rewarm.",
              "<strong>Sun.</strong> The winter sun is low but the air is thin and the snow reflects it. Lips and the underside of the nose burn.",
              "<strong>Insurance</strong> must cover helicopter evacuation to 6,000 metres. In winter, with the Pheriche clinic closed, that matters more, not less. See [[post:travel-insurance-for-trekking-in-nepal|travel insurance for trekking]].",
            ],
          },
          { p: "Consider going to Kala Patthar in the afternoon rather than for sunrise. It is far warmer, the light on Everest's west face is better, and you are not climbing at five in the morning in the coldest hour of the coldest month." },
        ],
      },
      {
        h2: "Is December Right for You?",
        blocks: [
          {
            table: {
              head: ["December suits you if…", "Choose another month if…"],
              rows: [
                ["You value solitude over comfort", "You feel the cold badly or have poor circulation"],
                ["You have done a multi-day trek before", "This is your first trek at altitude and you want company on the trail"],
                ["You can spare two buffer days", "Your flight home is fixed and tight"],
                ["You are prepared to buy or hire proper winter kit", "You are hoping to manage with autumn gear"],
                ["You want the clearest photographs of the year", "You want to cross the Cho La or do the Three Passes"],
              ],
            },
          },
          { p: "If you are in the second column but have December dates, there are good answers. The [[trek:everest-view-trek|Everest View trek]] goes as far as Tengboche, stays below 3,900 metres and takes a week. The [[trek:pikey-peak-trek|Pikey Peak trek]] shows you Everest from the south without a flight. And the [[trek:everest-base-camp-helicopter-tour|Everest Base Camp helicopter tour]] lands at Kala Patthar and has you back in Kathmandu for lunch — in winter visibility, a remarkable morning." },
          { p: "For the trek itself, the fourteen-day [[trek:everest-base-camp-trek|Everest Base Camp trek]] is the right length, and many winter trekkers choose the [[trek:everest-base-camp-trek-with-helicopter-return|helicopter return]] from Gorak Shep, which spares the cold walk back down and takes the return flight out of the fog's hands. The route in full is in our [[post:everest-base-camp-trek-complete-guide|complete guide]], and the month before in [[post:everest-base-camp-trek-in-november|Everest Base Camp in November]]." },
        ],
      },
    ],
    faqs: [
      { question: "Can you trek to Everest Base Camp in December?", answer: "Yes. The trail is open, lodges on the main route operate all winter, and the weather is dry and very clear. The challenge is the cold, particularly at night above Dingboche, which requires proper winter equipment." },
      { question: "How cold is Everest Base Camp in December?", answer: "At Gorak Shep, the last stop before Base Camp, daytime temperatures are around −6 to 0°C and nights fall to between −17 and −25°C. With wind on Kala Patthar it can feel below −30°C." },
      { question: "Is there a lot of snow on the Everest Base Camp trek in December?", answer: "Usually not. December is one of the driest months. Snow falls a few times during the month, typically a few centimetres, and can make the trail icy near Lobuche and Gorak Shep. Microspikes are worth carrying." },
      { question: "Are teahouses open on the Everest Base Camp trek in December?", answer: "Yes, on the main trail to Gorak Shep, though fewer than in peak season. In the Gokyo valley and on the high passes many lodges close for the winter." },
      { question: "Is the Everest Base Camp trek crowded in December?", answer: "No. It is one of the quietest months of the year, with a small increase around Christmas and New Year. You can usually choose your lodge and room on arrival." },
      { question: "Do Lukla flights operate in December?", answer: "Yes, and they normally operate from Kathmandu rather than Ramechhap after the peak season. Morning fog in the Kathmandu valley can delay flights from mid-December, so allow two buffer days." },
      { question: "What sleeping bag do I need for Everest Base Camp in December?", answer: "A bag with a comfort rating of −20°C or lower, used with a liner and an extra lodge blanket. Bedrooms are unheated and at Gorak Shep the room temperature at night is far below freezing." },
      { question: "Is December a good month for a first trek to Everest Base Camp?", answer: "It can be for a fit, well-equipped person who does not mind cold and quiet. Those new to altitude who would prefer warmer nights and more people on the trail are better served by October, November, March or April." },
    ],
    relatedTreks: ["everest-base-camp-trek", "everest-base-camp-trek-with-helicopter-return", "everest-view-trek", "everest-base-camp-helicopter-tour", "pikey-peak-trek", "gokyo-lake-trek"],
    tripsNote: "Ways to see Everest in winter, from a morning to two weeks.",
    relatedPosts: [
      "everest-base-camp-trek-in-november",
      "trekking-in-nepal-in-december",
      "winter-trekking-in-nepal-best-routes",
      "everest-base-camp-packing-list",
      "best-time-for-everest-base-camp-trek",
      "lukla-flight-delays-peak-season-backup-plans",
    ],
    tags: ["Everest Region", "Everest Base Camp", "December", "Winter Trekking"],
    meta: {
      title: "Everest Base Camp Trek in December: Weather & Gear",
      description: "Everest Base Camp in December: temperatures at each stop, which lodges are open, winter flights and fog, the gear that keeps you warm, and who it suits.",
      keywords: "Everest Base Camp trek in December, EBC in December, Everest Base Camp December weather, Everest Base Camp winter trek, EBC temperature December",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "christmas-and-new-year-in-nepal",
    title: "Christmas and New Year in Nepal: Where to Go and What to Book",
    cluster: "seasonal",
    date: "2026-11-08",
    hero: {
      image: trekImage("pokhara-day-tour", "02-sun-set-over-phewa-lake"),
      alt: "Sunset over Phewa Lake in Pokhara, with boats on the water.",
    },
    excerpt:
      "Nepal in late December means clear winter skies, warm days by the lake, a street festival in Pokhara, the Gurung New Year and a Himalayan sunrise to start January. This is where to spend Christmas and New Year, which treks suit the dates, and what needs booking now.",
    intro: [
      { p: "If you are reading this in November with a week or two of holiday at the end of December and no plan for it, here is a suggestion. Spend Christmas somewhere it is 20 degrees and sunny at lunchtime, with a wall of eight-thousand-metre mountains on the horizon. Walk for a few days through hill villages to a ridge. See in the New Year at a street party beside a lake, and watch the first sunrise of January light up Annapurna." },
      { p: "Nepal is not a Christian country, and 1 January is not its New Year — that comes in April. But the last week of December has become a season of its own here, with several celebrations falling together, and winter is a lovely and underrated time to come. It does need planning: the same week is a holiday for Nepalis too, and the good rooms go early." },
    ],
    sections: [
      {
        h2: "What the Weather Is Like",
        blocks: [
          {
            table: {
              head: ["Place", "Day", "Night", "Notes"],
              rows: [
                ["Kathmandu", "17 – 20°C", "2 – 5°C", "Sunny afternoons; foggy mornings; cold in unheated rooms"],
                ["Pokhara", "19 – 22°C", "6 – 9°C", "Mild and clear; mountain views most mornings"],
                ["Chitwan", "22 – 25°C", "8 – 11°C", "Misty dawns, warm days; the best wildlife season begins"],
                ["Nagarkot / Sarangkot", "10 – 14°C", "0 – 4°C", "Cold at sunrise, with the year's best visibility"],
                ["Ghorepani (Poon Hill)", "5 – 9°C", "−8 to −3°C", "Snow possible; dry and bright between fronts"],
              ],
            },
          },
          { p: "The thing to know is that buildings in Nepal are not heated. A hotel room in Kathmandu in December is the same temperature as the street. Choose places with heating or at least an electric blanket, bring warm layers for the evening, and plan your days around the sun: out by nine, in by five. The month in more detail is in [[post:trekking-in-nepal-in-december|trekking in Nepal in December]]." },
        ],
      },
      {
        h2: "The Celebrations",
        blocks: [
          {
            table: {
              head: ["Date", "What", "Where"],
              rows: [
                ["24 – 25 December", "Christmas Eve and Christmas Day", "Thamel, Boudha and Lakeside: decorations, set dinners, carols in the bars"],
                ["About 28 December – 1 January", "Pokhara Street Festival", "Lakeside, Pokhara — the road closed to traffic for food stalls, music and dancing"],
                ["30 December", "Tamu Lhosar, the Gurung New Year", "Pokhara and the Gurung villages around it; Tundikhel in Kathmandu"],
                ["31 December", "New Year's Eve", "Lakeside and Thamel street parties; hotel gala dinners"],
                ["1 January", "First sunrise of the year", "Sarangkot, Nagarkot, Poon Hill"],
              ],
              note: "Festival dates are confirmed by their organisers a few weeks ahead. Tamu Lhosar falls on the 15th of the Nepali month of Poush.",
            },
          },
          { p: "<strong>Christmas</strong> is an import, kept up enthusiastically by the tourist trade and by Nepal's small Christian community. Restaurants in Thamel and Lakeside put on proper dinners — roast, trimmings, mulled wine — that need booking a few days ahead. It is cheerful, a little surreal, and a good evening." },
          { p: "<strong>Tamu Lhosar</strong> is the real thing. The Gurung people, who come from the hills around Pokhara and have supplied generations of Gurkha soldiers, mark their new year with processions in traditional dress — the men in white wrapped tunics, the women in maroon velvet and gold — and with feasting, dancing and a great deal of home-brewed millet spirit. If you are in Pokhara on the 30th you will not miss it." },
        ],
      },
      {
        h2: "Pokhara: The Best Base for the Week",
        blocks: [
          { p: "For most visitors, Pokhara is the answer to where to be. It is ten degrees warmer than the hills, the lake is at its calmest, and for the last days of the year the whole of Lakeside's main road becomes a pedestrian fair. Restaurants set tables in the street, stages go up at intervals for bands and cultural troupes, and half of Nepal seems to be there on holiday. On New Year's Eve it runs well past midnight." },
          {
            ul: [
              "<strong>Sarangkot at dawn.</strong> A ridge above the town with the classic sunrise over Annapurna and Machhapuchhre. On 1 January it is busy; go early. Our [[trek:pokhara-day-tour-with-sarangkot-sunrise|Pokhara day tour with Sarangkot sunrise]] handles the logistics.",
              "<strong>The lake.</strong> Hire a rowing boat to the island temple, or walk the quieter north shore.",
              "<strong>The World Peace Pagoda,</strong> for the view back across the water to the mountains.",
              "<strong>Paragliding.</strong> Winter air is stable and visibility is excellent. See [[trek:paragliding-in-pokhara|paragliding in Pokhara]].",
              "<strong>A day in a Gurung village</strong> for Lhosar — Dhampus and Ghandruk are close.",
            ],
          },
          { p: "More in our [[post:pokhara-travel-guide|Pokhara travel guide]]. One warning: rooms on Lakeside for 28 December to 1 January sell out, and prices for those nights rise. This is the single thing in this article most worth doing today." },
        ],
      },
      {
        h2: "Kathmandu at Christmas and New Year",
        blocks: [
          { p: "The capital is quieter and colder but has its own appeal. The heritage sites are uncrowded and beautifully lit by the low winter sun: Bhaktapur on a December afternoon, with grain drying in the squares and old men sitting in the sun, is at its most photogenic. Thamel dresses for Christmas and holds a street party on New Year's Eve." },
          {
            ul: [
              "<strong>Stay somewhere with heating.</strong> It matters more here than anywhere.",
              "<strong>Go to Nagarkot</strong> for the first sunrise if you are in the valley on 1 January. Hotels on the ridge book out; day-trippers leave Kathmandu at four in the morning. See the [[trek:nagarkot-sunrise-tour|Nagarkot sunrise tour]].",
              "<strong>Take a mountain flight.</strong> Once the morning fog lifts, winter visibility is the best of the year — the [[trek:everest-mountain-flight|Everest mountain flight]] is a Christmas-morning tradition for some of our guests.",
              "<strong>Spend an evening at Boudhanath.</strong> The stupa lit by butter lamps on a cold clear night, with the rooftop restaurants around it, is a good place to be on the 24th.",
            ],
          },
          { p: "A [[trek:kathmandu-pokhara-tour|Kathmandu and Pokhara tour]] covers both cities in a week and can be timed to put you in Pokhara for the 31st." },
        ],
      },
      {
        h2: "Treks That Fit the Holiday",
        blocks: [
          { p: "Most people have seven to twelve days. That is enough for a proper trek at an altitude where late December is cold but not extreme." },
          {
            table: {
              head: ["Trek", "Days", "The holiday version"],
              rows: [
                ["[[trek:poonhill-trek-from-pokhara|Poon Hill from Pokhara]]", "3", "Walk in on the 29th; first sunrise of the year from the summit; back at Lakeside on New Year's Day"],
                ["[[trek:poonhill-trek|Poon Hill trek]]", "7", "From Kathmandu, at an easy pace, with a night in Ghandruk"],
                ["[[trek:mardi-himal-trek-from-pokhara|Mardi Himal from Pokhara]]", "5", "Christmas on a ridge under Machhapuchhre; snow likely near the top"],
                ["[[trek:mohare-danda-trek-from-pokhara|Mohare Danda]]", "6", "Community lodges and an empty viewpoint, for those avoiding the crowds"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "10", "A full trek with no flight; Christmas at Kyanjin Gompa"],
                ["[[trek:everest-view-trek|Everest View trek]]", "7", "Christmas in Namche Bazaar, which has bakeries, bars and a view of Everest"],
              ],
            },
          },
          { p: "Lodges on these routes are open, and those at the popular overnight stops lay on something for Christmas and New Year — a cake, a bonfire, a bottle passed round. On Poon Hill on the morning of 1 January there will be a crowd and a party atmosphere; if you would rather have silence, pick Mohare Danda." },
          { p: "Going higher is possible with the right equipment: see [[post:everest-base-camp-trek-in-december|Everest Base Camp in December]] and our guide to [[post:winter-trekking-in-nepal-best-routes|winter trekking]]." },
        ],
      },
      {
        h2: "The Jungle and the Plains",
        blocks: [
          { p: "The other half of a winter trip is the lowlands, where December is the start of the best season. In <strong>Chitwan National Park</strong> the mornings begin in mist, with rhinos looming out of it on a jeep or walking safari, and by eleven you are in shirt sleeves. The grass is being cut back, so animals are easier to see each week. Lodges hold Christmas and New Year dinners with Tharu stick-dancing round a fire." },
          {
            ul: [
              "<strong>Chitwan:</strong> two or three nights. See the [[trek:chitwan-national-park-tour-3-days|three-day Chitwan tour]] and [[post:chitwan-national-park-guide|our guide to the park]].",
              "<strong>Bardia:</strong> wilder, further, and the best chance of a tiger. Four nights at least; see the [[trek:bardia-national-park-tour-4-days|Bardia tour]].",
              "<strong>Lumbini:</strong> the birthplace of the Buddha, comfortable only in winter. Pairs naturally with Chitwan; see the [[trek:lumbini-tour|Lumbini tour]].",
            ],
          },
          { p: "A classic ten-day holiday shape: Kathmandu for two nights, Chitwan for Christmas, Pokhara and a short trek for New Year. Our [[trek:best-of-nepal-tour|Best of Nepal tour]] follows roughly that line." },
        ],
      },
      {
        h2: "What to Book, and When",
        blocks: [
          {
            table: {
              head: ["Book", "Why", "By"],
              rows: [
                ["Rooms in Pokhara, 28 Dec – 1 Jan", "The street festival fills Lakeside", "As soon as possible"],
                ["Rooms at Nagarkot and Sarangkot, 31 Dec", "First-sunrise demand", "Early December"],
                ["Chitwan lodges, 24 – 26 Dec and 30 Dec – 1 Jan", "Domestic holiday peak", "Early December"],
                ["Flights Kathmandu – Pokhara, 27 – 30 Dec and 1 – 2 Jan", "Everyone moves on the same days", "Three to four weeks ahead"],
                ["International flights", "Late December fares climb steadily", "Now"],
                ["Christmas and New Year dinners", "The popular restaurants take reservations", "A few days ahead"],
                ["Trek and guide", "Good guides are fewer over the holidays — many take leave for Lhosar", "Two to three weeks ahead"],
              ],
            },
          },
          {
            ul: [
              "<strong>Visas</strong> are issued on arrival as usual; see our [[post:nepal-visa-on-arrival-guide|visa guide]].",
              "<strong>Fog</strong> delays morning flights at Kathmandu in late December. Do not schedule a domestic flight and an international one on the same day.",
              "<strong>Pack for two climates:</strong> T-shirt weather at midday, down jacket after dark.",
              "<strong>Offices and banks</strong> work normally apart from the public holiday for Tamu Lhosar.",
            ],
          },
          { p: "Tell us your dates and how you like to spend a holiday — on your feet, by a lake, or watching for rhinos — and we will put the week together around the things that sell out first." },
        ],
      },
    ],
    faqs: [
      { question: "Is Nepal a good place to spend Christmas and New Year?", answer: "Yes. Late December has clear, dry weather, warm sunny days in Pokhara and the lowlands, superb mountain views and few tourists outside the holiday week. Several local celebrations fall together, including the Pokhara Street Festival and the Gurung New Year." },
      { question: "Is Christmas celebrated in Nepal?", answer: "Not widely, as Nepal is mainly Hindu and Buddhist, but the tourist districts of Thamel, Boudha and Lakeside celebrate with decorations and Christmas dinners, and Nepal's Christian community holds church services." },
      { question: "What is the weather like in Nepal at Christmas?", answer: "Dry and clear. Kathmandu is about 17 to 20°C by day and close to freezing at night. Pokhara is milder at 19 to 22°C. Chitwan is warm by day. Mountain areas above 3,000 metres are well below freezing at night." },
      { question: "Where is the best place in Nepal for New Year's Eve?", answer: "Pokhara. The Lakeside road is closed for the Street Festival, with food stalls, music and dancing until after midnight, and you can watch the first sunrise of the year over the Annapurna range from Sarangkot." },
      { question: "What is the Pokhara Street Festival?", answer: "An annual festival on Lakeside in Pokhara in the last days of December, ending on New Year's Day. The main road is closed to vehicles and filled with restaurant tables, food stalls, stages and cultural performances." },
      { question: "Can I trek in Nepal over Christmas and New Year?", answer: "Yes. Short and moderate-altitude treks such as Poon Hill, Mardi Himal, Mohare Danda, Langtang Valley and the Everest View trek are all suitable, with open lodges. Expect cold nights and the possibility of snow." },
      { question: "When is Tamu Lhosar in 2026?", answer: "Tamu Lhosar, the Gurung New Year, falls on 30 December 2026. It is celebrated with processions, traditional dress, music and feasting, most visibly in Pokhara and at Tundikhel in Kathmandu." },
      { question: "Do I need to book in advance for New Year in Nepal?", answer: "Yes for Pokhara between 28 December and 1 January, for Nagarkot and Sarangkot on New Year's Eve, and for Chitwan lodges over the holiday. Flights between Kathmandu and Pokhara on those days should also be booked early." },
    ],
    relatedTreks: ["poonhill-trek-from-pokhara", "pokhara-day-tour-with-sarangkot-sunrise", "chitwan-national-park-tour-3-days", "kathmandu-pokhara-tour", "best-of-nepal-tour", "everest-view-trek"],
    tripsNote: "Short treks and tours that fit a holiday week at the end of December.",
    relatedPosts: [
      "trekking-in-nepal-in-december",
      "winter-trekking-in-nepal-best-routes",
      "pokhara-travel-guide",
      "chitwan-national-park-guide",
      "everest-base-camp-trek-in-december",
      "poon-hill-trek-guide",
    ],
    tags: ["Travel Planning", "December", "Pokhara", "Festivals"],
    meta: {
      title: "Christmas & New Year in Nepal: Where to Go, What to Book",
      description: "Christmas and New Year in Nepal: winter weather, the Pokhara Street Festival, Tamu Lhosar, the best short treks and jungle trips, and what to book early.",
      keywords: "Christmas in Nepal, New Year in Nepal, Nepal in December, Pokhara Street Festival, Tamu Lhosar 2026, New Year trek Nepal, Nepal winter holiday",
    },
  },
];
