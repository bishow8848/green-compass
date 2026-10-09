import type { BlogContent } from "./build";
import { DASHAIN, FESTIVALS, trekImage } from "./images";

/**
 * Tihar series, part 3: the last day, the food, and the capital through the
 * festival week.
 */
export const tiharC: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "bhai-tika-guide-for-visitors",
    title: "Bhai Tika: A Visitor's Guide to the Last Day of Tihar",
    cluster: "tihar",
    date: "2026-10-31",
    hero: {
      image: FESTIVALS.bhaiTikaCeremony,
      alt: "A woman applying a tika to the forehead of a seated man wearing a flower garland during Bhai Tika.",
    },
    excerpt:
      "Tihar ends with Bhai Tika, when sisters give their brothers a tika of seven colours and a garland that does not wilt, and pray for their long life. In 2026 it is on Wednesday 11 November. This is the ritual step by step, the story behind it, and what to do if a family invites you.",
    intro: [
      { p: "On the last morning of Tihar the streets of Nepal are empty and the houses are full. Brothers have travelled across the country, and in many cases across the world, to sit on a mat in front of their sisters. What follows takes about an hour, has changed very little in centuries, and ends with every man and boy in the country wearing a vertical stripe of colours down his forehead." },
      { p: "<strong>Bhai Tika</strong> — <em>bhai</em> means younger brother, though it applies to all of them — is the emotional centre of the festival, the day people would least want to miss. In 2026 it falls on <strong>Wednesday 11 November</strong>. It is a family occasion, but visitors are drawn into it more often than you might expect, and it helps to know what is happening." },
    ],
    sections: [
      {
        h2: "The Story Behind It",
        blocks: [
          { p: "The five days of Tihar belong to <strong>Yama</strong>, the god of death, and the last belongs to his sister, the river goddess <strong>Yamuna</strong>. She had not seen her brother for a long time and sent for him — by crow, by dog and by cow, which is one explanation for the days that come before. At last he came. She welcomed him with a tika and a garland and fed him the best meal he had ever eaten, and he was so pleased that he offered her a gift. She asked that any brother who received tika from his sister on that day should be safe from an early death." },
          { p: "A second telling is more pointed. Yama's messengers came for a young man whose time was up, and found his sister in the middle of honouring him. She asked them to wait until she had finished: until the circle of oil she had drawn round him dried, and the garland she had given him withered. The oil does not dry. The flowers — purple globe amaranth, <em>makhamali</em> — do not wither. They are waiting still." },
          { p: "Every element of the ritual comes from that story. It is a sister putting herself between her brother and death." },
        ],
      },
      {
        h2: "The Ritual, Step by Step",
        blocks: [
          {
            ol: [
              "<strong>The seat.</strong> Brothers sit cross-legged in a row on mats or cushions, eldest first, usually facing east.",
              "<strong>The circle.</strong> The sister walks round them three times, pouring a thin line of water and oil from a copper jug onto the floor — the boundary Yama cannot cross.",
              "<strong>The oil.</strong> She touches oil to each brother's hair.",
              "<strong>The base.</strong> A vertical stripe of white rice paste is drawn down the centre of the forehead.",
              "<strong>The seven colours.</strong> On that white ground she places seven dots of coloured powder, one above the other. This is the <em>saptarangi tika</em>, found only on this day.",
              "<strong>The garlands.</strong> One of purple makhamali, which keeps its colour for months, and often a second of marigolds and one of sacred <em>dubo</em> grass.",
              "<strong>The walnut.</strong> At the threshold she cracks a walnut with a stone, breaking whatever obstacles lie in his way.",
              "<strong>The plate.</strong> She gives him a tray of sweets, <em>sel roti</em>, fruit, nuts and dried fruit — the <em>sagun</em> — and often a new cap.",
              "<strong>The return.</strong> The brother gives his sister a tika in turn, touches her feet if she is older, and hands her his gift: money, clothing, jewellery.",
              "<strong>The meal.</strong> Long, and eaten together.",
            ],
          },
          {
            figure: {
              image: FESTIVALS.bhaiTikaTray,
              alt: "A steel plate with small heaps of coloured tika powder beside a lit oil lamp, a citron and purple globe amaranth flowers on a woven mat.",
              caption: "The tika tray: seven colours, a lamp, a citron and makhamali flowers.",
            },
          },
          { p: "Sisters traditionally fast until it is done. In households with many siblings, and cousins who count as siblings, the ceremony can run from late morning until mid-afternoon." },
        ],
      },
      {
        h2: "The Seven Colours and the Garland",
        blocks: [
          { p: "The colours are bought as a set in the markets in the week before — small paper twists or a tray of seven wells — and typically run through red, yellow, green, blue, white, orange and purple or pink. Families differ on the order and on what each stands for. What matters is that there are seven, and that they are different from the single red tika of every other occasion in the year." },
          {
            figure: {
              image: FESTIVALS.sevenColourTika,
              alt: "A copper plate with seven round wells, each holding powder of a different colour for the Bhai Tika.",
              caption: "Tika powder in seven colours, sold in sets before the festival.",
            },
          },
          { p: "The <strong>makhamali</strong> garland is the other emblem of the day. Globe amaranth is a small, papery, clover-shaped flower in deep magenta that dries without fading. Families grow it for the purpose or buy it by the garland; in the days before Bhai Tika the flower markets of Kathmandu turn from orange to purple. A garland given this year will still be hanging on a mirror or a doorframe when the next one arrives." },
        ],
      },
      {
        h2: "Bhai Tika in 2026",
        blocks: [
          {
            table: {
              head: ["", "Wednesday 11 November 2026"],
              rows: [
                ["Auspicious time", "Announced a few days ahead by the national calendar committee; normally late morning. The tika may be given at any time that day."],
                ["Morning", "Streets almost deserted. Local shops closed. Families gathering."],
                ["Late morning to mid-afternoon", "The ceremony and the meal."],
                ["Afternoon and evening", "People out visiting, every man with a striped forehead and a purple garland. Shops begin to reopen."],
                ["Offices and banks", "Closed. They reopen on Thursday 12 November."],
                ["Transport", "Very few buses and taxis until evening. Do not plan to travel far."],
              ],
            },
          },
          { p: "The day before, Tuesday the 10th, is the heaviest travel day of the festival, as people make their way to wherever their sisters live. If you need to move between Kathmandu and Pokhara that week, do it by Monday or wait until Thursday. The whole calendar is in the [[post:tihar-dates-calendar-for-travellers|Tihar dates guide]]." },
        ],
      },
      {
        h2: "The Temple That Opens Once a Year",
        blocks: [
          { p: "In the centre of Kathmandu, beside the old clock tower, there is a large square pond called <strong>Rani Pokhari</strong>, the Queen's Pond, built in the seventeenth century by a king to console his wife after the death of their son. A white temple stands on an island in the middle of it, reached by a causeway behind a locked gate." },
          { p: "The gate is opened on one day of the year: Bhai Tika. The temple is for those who have no brother or sister to give or receive tika. They come to worship there instead, and often to exchange tika with others in the same position. The queue runs along the causeway from early morning." },
          { p: "It is one of the more affecting sights of the festival and, because it is public, one of the few parts of Bhai Tika a visitor can simply go and see. Go before eleven, dress modestly, and be discreet with a camera: people are there because someone is missing." },
        ],
      },
      {
        h2: "If You Are Invited",
        blocks: [
          { p: "It happens often. A guide you have just spent two weeks with says his sisters would like to give you tika. A guesthouse owner seats you with her sons. A homestay family will not hear of you eating alone. To be made a brother or sister for the day is a real compliment, and the only wrong answer is no." },
          {
            ul: [
              "<strong>Dress neatly.</strong> Clean clothes with shoulders and knees covered. You will be photographed.",
              "<strong>Take off your shoes</strong> at the door and sit cross-legged where you are shown. If that is difficult, say so; a stool will be found.",
              "<strong>Bring a gift for the sister.</strong> Money in an envelope is entirely proper and is what her brothers give. For a visitor, 1,000 to 2,000 rupees is generous without being awkward; add chocolates or something from your own country if you have it.",
              "<strong>Sit still for the tika.</strong> Close your eyes when the powder goes on. Do not touch your forehead afterwards.",
              "<strong>Receive with your right hand</strong>, or both.",
              "<strong>Keep the garland on</strong> for the rest of the day, and the tika until it falls off by itself.",
              "<strong>Eat.</strong> The plate is large and will be refilled. Leaving a little is the signal that you have had enough.",
              "<strong>If you are a woman</strong>, you may be asked to give tika to the sons of the house, or receive one from them, or both. Follow the family's lead.",
            ],
          },
          { p: "Afterwards you are, in a small way, family. People take that seriously. A message at next year's festival will be remembered." },
        ],
      },
      {
        h2: "Planning Around the Day",
        blocks: [
          {
            ul: [
              "<strong>Treat it as a rest day.</strong> Museums and offices are closed and transport is thin. Stay somewhere pleasant and walk.",
              "<strong>Eat at your hotel or in the tourist district</strong> at lunchtime; neighbourhood restaurants are shut.",
              "<strong>End a trek the day before.</strong> Guides and porters want very much to be home for this. A trek finishing on 9 or 10 November is a kindness; one finishing on the 11th is an imposition.",
              "<strong>On the trail</strong>, expect lodge staff to disappear for an hour mid-morning, and to return with coloured foreheads.",
              "<strong>Go out in the late afternoon.</strong> The streets fill with families in their best clothes, and the light on all that purple and orange is the last good photograph of the festival.",
            ],
          },
          { p: "The Newar community keeps the day as <em>Kija Puja</em>, with mandalas on the floor as on the evening before; see [[post:mha-puja-and-nepal-sambat-new-year|Mha Puja and Nepal Sambat]]. What is on the plate is in the [[post:tihar-food-guide-sel-roti-and-sweets|Tihar food guide]], and the festival as a whole in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]]. If you would like to spend the day with a family, a homestay such as [[trek:sirubari-village-tour|Sirubari]] is the surest way." },
        ],
      },
    ],
    faqs: [
      { question: "What is Bhai Tika?", answer: "Bhai Tika is the fifth and last day of Tihar, when sisters give their brothers a tika of seven colours and a garland, and pray for their long life. Brothers give gifts in return, and the family shares a feast." },
      { question: "When is Bhai Tika in 2026?", answer: "Bhai Tika is on Wednesday 11 November 2026. The auspicious time for the tika is announced by the national calendar committee a few days before and is usually late in the morning." },
      { question: "Why is the Bhai Tika tika seven colours?", answer: "The seven-colour tika, called saptarangi tika, is unique to this day and marks it out from the single red tika used at other times. It is applied as seven dots on a stripe of white rice paste. The colours and their meanings vary between families." },
      { question: "What is the purple flower garland used at Bhai Tika?", answer: "It is makhamali, or globe amaranth. The flower dries without losing its colour, so the garland does not wither — a symbol of the sister's wish that her brother's life will be long." },
      { question: "Can tourists take part in Bhai Tika?", answer: "Yes, if invited, and invitations are common from guides, hosts and homestay families. You sit with the family, receive the tika and garland, give a gift to the sister and share the meal." },
      { question: "What gift should I give at Bhai Tika?", answer: "Money in an envelope is the usual gift from a brother to his sister. For a visitor, 1,000 to 2,000 rupees is appropriate. Sweets, chocolates or a small present from your home country are welcome additions." },
      { question: "What happens at Rani Pokhari on Bhai Tika?", answer: "The temple in the middle of Rani Pokhari in Kathmandu opens only on this day. People who have no brother or sister go there to worship and to exchange tika with one another." },
      { question: "Is everything closed on Bhai Tika?", answer: "Offices, banks and most local shops are closed, and there are very few buses or taxis until evening. Hotels and tourist restaurants stay open. Plan it as a quiet day in one place." },
    ],
    relatedTreks: ["sirubari-village-tour", "ghalegaun-ghanpokhara-village-tour", "kathmandu-valley-tour", "kathmandu-day-tour", "himalayan-village-tour"],
    tripsNote: "Homestays and tours where the last day of Tihar is spent with a family.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "tihar-dates-calendar-for-travellers",
      "mha-puja-and-nepal-sambat-new-year",
      "tihar-food-guide-sel-roti-and-sweets",
      "dashain-tika-ceremony-guide-for-visitors",
      "kathmandu-during-tihar",
    ],
    tags: ["Tihar", "Bhai Tika", "Festivals", "Culture"],
    meta: {
      title: "Bhai Tika 2026: A Visitor's Guide to Tihar's Last Day",
      description: "Bhai Tika is on Wednesday 11 November 2026. The ritual step by step, the seven-colour tika, the Rani Pokhari temple, and what to do if you are invited.",
      keywords: "Bhai Tika, Bhai Tika 2026, Bhai Tika date, seven colour tika, saptarangi tika, makhamali garland, Rani Pokhari Bhai Tika, Tihar last day, Kija Puja",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "tihar-food-guide-sel-roti-and-sweets",
    title: "Tihar Food Guide: Sel Roti, Sweets and the Newar Feast",
    cluster: "tihar",
    date: "2026-11-01",
    hero: {
      image: DASHAIN.selRoti,
      alt: "Rings of golden-brown sel roti, the fried rice-flour bread made for Nepali festivals.",
    },
    excerpt:
      "Dashain is the festival of meat; Tihar is the festival of sweet things. Rings of fried rice bread, trays of milk sweets, plates of nuts and dried fruit for brothers, and a Newar New Year feast. This is what is cooked, what it tastes like, and where a visitor can try it.",
    intro: [
      { p: "Walk through a Nepali neighbourhood two days before Tihar and you will smell it: hot ghee and frying batter from every kitchen. Somebody's mother is sitting on a low stool beside a pan of oil, pouring loops of rice batter from her hand and lifting them out on a stick, and has been since morning. By evening there will be a basket of several dozen, and it will not be enough." },
      { p: "The food of Tihar is made to be given away. To the singers at the door, to the neighbours, to the brother on the last day, to the dog on the second. Much of it is sweet, most of it keeps for a week, and nearly all of it can be found by a visitor who knows what to ask for." },
    ],
    sections: [
      {
        h2: "Sel Roti: The Bread of the Festival",
        blocks: [
          { p: "<strong>Sel roti</strong> is a ring of fried rice bread about the size of a hand, crisp and reddish-brown outside, soft and slightly chewy within, and gently sweet. It is to Tihar what mince pies are to an English Christmas: the thing that has to be on the table for it to be the festival." },
          { p: "It is harder to make than it looks. Rice is soaked overnight and ground to a coarse wet paste, then beaten with sugar and ghee — some families add mashed banana, cardamom or a little milk — until it will drop from the hand in a continuous rope. The cook pours it in a circle straight into hot oil, turns it once with a thin stick, and hooks it out through the middle. Getting the batter right is a matter of feel, and every household believes its own is best." },
          {
            ul: [
              "<strong>How it is eaten:</strong> at room temperature, with tea in the morning, with spiced potato pickle (<em>aloo ko achar</em>) or yoghurt as a snack, or just as it is.",
              "<strong>When you will meet it:</strong> pressed on you in any house you enter, handed to deusi-bhailo singers, on the Bhai Tika plate, and fed to dogs on Kukur Tihar.",
              "<strong>For those who avoid gluten:</strong> the bread itself is rice, but it is usually fried in oil used for other things. Ask.",
            ],
          },
        ],
      },
      {
        h2: "The Other Fried Breads",
        blocks: [
          {
            table: {
              head: ["Name", "What it is"],
              rows: [
                ["<em>Anarsa</em>", "A flat disc of rice-flour dough sweetened with sugar or jaggery, pressed into poppy or sesame seeds on one side and fried. Crunchy, like a dense biscuit."],
                ["<em>Fini roti</em>", "A flaky, many-layered fried bread of wheat flour and ghee that shatters when bitten. Savoury-sweet; a speciality of the hill Brahmin and Chhetri kitchen."],
                ["<em>Lakhamari</em>", "The Newar festival sweet: a hard, glossy, sugar-glazed bread made in rings, knots and plaits, some the size of a plate. Very crunchy, very sweet, and it keeps for weeks."],
                ["<em>Khajuri</em>", "Small diamond-shaped fried biscuits of flour, ghee and sugar. Made in bulk; turns up in every tin."],
                ["<em>Thekua</em>", "A stamped wheat-and-jaggery biscuit from the Terai, made for Chhath a few days after Tihar."],
              ],
            },
          },
          { p: "All of these are dry and keep well, which is the point. A festival that involves visiting a dozen houses in three days needs food that can be made ahead, stacked in a tin and carried." },
        ],
      },
      {
        h2: "Mithai: The Sweet Shop",
        blocks: [
          { p: "Alongside what is made at home there is what is bought. In the week before Tihar the sweet shops — <em>mithai pasal</em> — build pyramids of boxed sweets on the pavement and sell them by the kilo to be given as gifts. This is the South Asian milk-sweet tradition, and for many visitors the first proper meeting with it." },
          {
            table: {
              head: ["Sweet", "What to expect"],
              rows: [
                ["<em>Lalmohan</em>", "Deep-fried balls of milk solids soaked in syrup, served warm. Known elsewhere as gulab jamun. The easiest to like."],
                ["<em>Rasbari</em>", "Soft white balls of fresh cheese in thin sugar syrup. Light and spongy."],
                ["<em>Barfi</em>", "Dense milk fudge cut in squares, plain or with pistachio, coconut or cashew."],
                ["<em>Peda</em>", "A small soft disc of reduced milk and sugar, flavoured with cardamom."],
                ["<em>Laddu</em>", "A ball of fried gram-flour droplets bound with syrup. An offering to the gods as much as a food."],
                ["<em>Jeri</em>", "Coils of batter fried and dipped in syrup — jalebi. Eaten hot for breakfast with a puffed bread called <em>swari</em>."],
                ["<em>Kaju katli</em>", "Thin diamonds of cashew paste, sometimes with edible silver leaf. The gift-box favourite."],
              ],
            },
          },
          { p: "Buy from a busy shop, where turnover is fast, and buy a mixed quarter-kilo to try rather than a box of one thing. These are intensely sweet; a piece or two with unsweetened tea is how they are meant to be eaten." },
        ],
      },
      {
        h2: "The Bhai Tika Plate",
        blocks: [
          { p: "On the last day a sister hands her brother a tray — the <em>sagun</em> — and its contents are close to fixed." },
          {
            ul: [
              "<strong>Sel roti</strong>, several rings.",
              "<strong>Mithai</strong>, a selection.",
              "<strong>Masala</strong> — which here means not spice but a packet of nuts and dried fruit: cashews, almonds, walnuts, raisins, dates, dried coconut, rock sugar, cloves and cardamom. Sold ready-mixed in the markets in decorated bags.",
              "<strong>Fruit</strong>, always including a citron (<em>bimiro</em>) and often a pomelo, with oranges, apples and bananas.",
              "<strong>A boiled egg</strong> and sometimes fried fish, for good fortune.",
              "<strong>Yoghurt</strong>, which accompanies every auspicious beginning.",
            ],
          },
          { p: "The pomelo is worth a note of its own. Peeled, broken into segments and tossed with yoghurt, sugar, salt, chilli and toasted sesame, it becomes <em>bhogate sadheko</em>, a sharp, sweet, hot salad that families eat sitting in the sun on winter afternoons. It appears with the Tihar fruit and stays until February. If you see it, try it. The ritual the plate belongs to is described in the [[post:bhai-tika-guide-for-visitors|Bhai Tika guide]]." },
        ],
      },
      {
        h2: "The Newar New Year Feast",
        blocks: [
          { p: "The Newars of the Kathmandu valley begin their year on the fourth day of Tihar and mark it, as they mark everything, with food. The centre of it is <strong>samay baji</strong>, a ritual plate that is also one of the great snacks of Nepal." },
          {
            table: {
              head: ["On the plate", "What it is"],
              rows: [
                ["<em>Baji</em>", "Beaten rice — flattened, dry and crisp. The base of everything."],
                ["<em>Chhoila</em>", "Grilled buffalo meat dressed with mustard oil, chilli, garlic and fenugreek. Smoky and hot."],
                ["<em>Wo</em> (bara)", "A thick pancake of ground black lentils, fried, sometimes with an egg or minced meat on top."],
                ["<em>Bhatmas</em>", "Black soybeans fried crisp with ginger and garlic."],
                ["<em>Aloo wala</em> and greens", "Spiced potato; wilted mustard leaf."],
                ["A boiled egg and a small fried fish", "The auspicious pair."],
                ["<em>Aila</em> or <em>thwon</em>", "Home-distilled rice spirit, clear and strong; or cloudy white rice beer."],
              ],
            },
          },
          {
            figure: {
              image: trekImage("secret-food-tour-in-kathmandu", "03-newari-khaja-set"),
              alt: "A Newari khaja set with beaten rice in the centre and small portions of side dishes arranged round it.",
              caption: "A Newari khaja set, served in the eating houses of Patan, Kirtipur and old Kathmandu all year.",
            },
          },
          { p: "The full feast after the Mha Puja ritual adds a long sequence of curries, pickles and sweets; see [[post:mha-puja-and-nepal-sambat-new-year|Mha Puja and Nepal Sambat]]." },
        ],
      },
      {
        h2: "Where to Try It",
        blocks: [
          {
            ul: [
              "<strong>In someone's house.</strong> The best sel roti is never for sale. A homestay over the festival, or any invitation, is the way to it.",
              "<strong>Street stalls.</strong> In the days before Tihar, women fry sel roti to order at stalls in Ason, Kalimati and the neighbourhood markets of Kathmandu, and along Lakeside in Pokhara. Eat it hot from the pan.",
              "<strong>Sweet shops.</strong> The old-established mithai shops of New Road and Indra Chowk in Kathmandu; in Pokhara, around Mahendrapul. Follow the queue.",
              "<strong>Newar eating houses.</strong> The traditional <em>bhatti</em> of Patan and Kirtipur serve samay baji, bara and chhoila every day at low tables.",
              "<strong>Trekking lodges.</strong> In the Annapurna foothills, lodge kitchens make sel roti for the festival and are usually pleased to be asked for it at breakfast.",
              "<strong>With a guide.</strong> Our [[trek:secret-food-tour-in-kathmandu|Secret Food Tour in Kathmandu]] walks the old city's food lanes and, in festival week, the markets that supply them. See the [[post:secret-food-tour-in-kathmandu-guide|food tour guide]].",
            ],
          },
        ],
      },
      {
        h2: "Practical Notes",
        blocks: [
          {
            ul: [
              "<strong>Vegetarians</strong> do well at Tihar. The breads and sweets contain no meat, and many households eat no meat on Laxmi Puja. The Newar plate is the exception; ask for it without chhoila.",
              "<strong>Vegans</strong> have a harder time: ghee and milk are in almost everything. Sel roti fried in vegetable oil and made without milk exists; fruit and the nut mix are safe.",
              "<strong>Nut allergies:</strong> barfi, kaju katli and the Bhai Tika masala are nuts by definition, and sweets are stored together. Be explicit and cautious.",
              "<strong>Stomachs:</strong> fried food from a busy stall, cooked in front of you, is one of the safer things to eat. Milk sweets that have sat unrefrigerated are not. Home-made spirit varies in strength and quality — a taste is polite; a second glass is optional.",
              "<strong>Refusing:</strong> you will be offered more than you can eat. Accept a little, eat it, and put your hand over the plate with a smile when you have had enough.",
              "<strong>Taking some home:</strong> lakhamari, anarsa and boxed dry sweets travel well. Syrup sweets do not.",
            ],
          },
          { p: "For the rest of what Nepal eats, on the trail and off it, see [[post:food-on-the-trail-in-nepal|food on the trail]], and for the festival three weeks earlier, the [[post:dashain-food-guide-what-to-eat|Dashain food guide]]. The festival itself is covered in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]]." },
        ],
      },
    ],
    faqs: [
      { question: "What food is eaten during Tihar?", answer: "Sel roti, a ring-shaped fried rice bread, is the main festival food. With it come fried sweets such as anarsa and fini roti, milk sweets from the sweet shop, nuts and dried fruit, fresh fruit, and among Newars a feast built on beaten rice." },
      { question: "What is sel roti?", answer: "Sel roti is a ring of fried bread made from ground soaked rice, sugar and ghee. It is crisp outside and soft inside, mildly sweet, and is made in large batches for Tihar and Dashain." },
      { question: "What does sel roti taste like?", answer: "Somewhere between a doughnut and a rice cake: lightly sweet, with a crisp crust and a soft, slightly chewy centre. It is usually eaten with tea, yoghurt or spiced potato pickle." },
      { question: "Is Tihar food vegetarian?", answer: "Much of it is. The fried breads, sweets, nuts and fruit contain no meat, and many families eat vegetarian food on Laxmi Puja. The Newar feast includes buffalo meat, egg and fish." },
      { question: "What is the masala given at Bhai Tika?", answer: "In this context masala means a mix of nuts and dried fruit — cashews, almonds, walnuts, raisins, dates, coconut and rock sugar — that sisters give their brothers as part of the Bhai Tika offering." },
      { question: "What are the popular Nepali sweets at Tihar?", answer: "Lalmohan, rasbari, barfi, peda, laddu, jeri and kaju katli are the most common. They are milk and sugar based, very sweet, and bought by the box as gifts." },
      { question: "Where can tourists try Tihar food?", answer: "At street stalls in Kathmandu's Ason and Kalimati markets, at sweet shops on New Road, in Newar eating houses in Patan and Kirtipur, and best of all in a homestay or a family home during the festival." },
      { question: "Can I take Nepali sweets home?", answer: "Dry sweets such as lakhamari, anarsa and boxed barfi travel well for a week or more. Sweets in syrup, such as rasbari and lalmohan, do not, and may not be allowed in hand luggage." },
    ],
    relatedTreks: ["secret-food-tour-in-kathmandu", "kathmandu-day-tour", "patan-day-tour", "sirubari-village-tour", "ghalegaun-ghanpokhara-village-tour"],
    tripsNote: "Tours and homestays where the food of the festival is on the table.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "bhai-tika-guide-for-visitors",
      "mha-puja-and-nepal-sambat-new-year",
      "secret-food-tour-in-kathmandu-guide",
      "dashain-food-guide-what-to-eat",
      "food-on-the-trail-in-nepal",
    ],
    tags: ["Tihar", "Food", "Festivals", "Newar Culture"],
    meta: {
      title: "Tihar Food Guide: Sel Roti, Nepali Sweets & Newar Feast",
      description: "What Nepal eats at Tihar: sel roti, anarsa, lakhamari, milk sweets, the Bhai Tika plate and the Newar samay baji — and where visitors can try them.",
      keywords: "Tihar food, sel roti, Nepali sweets, Tihar sweets, anarsa, lakhamari, samay baji, Bhai Tika masala, Nepali festival food, lalmohan",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "kathmandu-during-tihar",
    title: "Kathmandu During Tihar: Where to Go and What Stays Open",
    cluster: "tihar",
    date: "2026-11-02",
    hero: {
      image: FESTIVALS.marigoldStall,
      alt: "A flower stall in Kathmandu hung with long garlands of orange marigolds above buckets of cut flowers.",
    },
    excerpt:
      "Kathmandu is the best place in Nepal to spend Tihar, and unlike Dashain it does not shut down for it. This is the city day by day from 6 to 12 November 2026: the markets, the morning of the dogs, the night of the lamps, the New Year processions, and exactly what is open and closed.",
    intro: [
      { p: "At Dashain, Kathmandu empties. Half the population goes home to the hills and the city falls silent for a week. Tihar is the opposite. People who left for Dashain are back, the festival is one you celebrate where you live, and the valley's own Newar community treats it as the turn of the year. For five days the capital is busier, brighter and more fun than at any other time." },
      { p: "It also keeps working. Hotels, tourist restaurants and the airport run as normal, and only the last day is properly quiet. This guide goes through the week as it will fall in 2026, with what to see each day and what you cannot get done." },
    ],
    sections: [
      {
        h2: "The Week Day by Day",
        blocks: [
          {
            table: {
              head: ["Date (2026)", "What is happening", "Best thing to do"],
              rows: [
                ["Thu 5 – Fri 6 November", "The markets at full stretch. Last working days.", "Walk Ason and Indra Chowk in the late afternoon. Finish any paperwork."],
                ["Sat 7 November", "Kaag Tihar. Crows fed at dawn; shopping continues.", "Heritage sites by day — Swayambhunath, Boudhanath, Pashupatinath."],
                ["Sun 8 November", "Kukur Tihar in the morning; Laxmi Puja at night.", "Old-city walk at 8 am for the dogs; out again from 5.30 pm for the lamps."],
                ["Mon 9 November", "Gai Tihar. Houses still lit; singing in the evening.", "A day in Patan or Bhaktapur; back for deusi-bhailo in Thamel."],
                ["Tue 10 November", "Nepal Sambat New Year 1147; Mha Puja in the evening.", "Processions around Basantapur and Patan from late morning."],
                ["Wed 11 November", "Bhai Tika. The city at rest.", "Rani Pokhari in the morning; a long lunch; streets again from four."],
                ["Thu 12 November", "Everything reopens.", "Permits, banks, onward travel."],
              ],
            },
          },
          { p: "The meaning of each day is in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]], and the timings in the [[post:tihar-dates-calendar-for-travellers|dates guide]]." },
        ],
      },
      {
        h2: "Before the Festival: The Markets",
        blocks: [
          { p: "If you arrive a few days early, the build-up is as good as the festival. The old bazaar that runs from <strong>Ason</strong> through <strong>Indra Chowk</strong> to Durbar Square is the city's original high street — a diagonal lane on the line of the old trade route to Tibet — and in the week before Tihar it is close to impassable." },
          {
            ul: [
              "<strong>Flowers.</strong> Marigolds by the truckload, strung into garlands on the pavement, and from about the 9th the purple globe amaranth for Bhai Tika.",
              "<strong>Lamps.</strong> Stacks of unglazed clay saucers, cotton wicks sold by the bundle, mustard oil by the bottle.",
              "<strong>Colour.</strong> Cones of rangoli powder in a dozen shades, and paper packets of the seven-colour tika.",
              "<strong>Sweets and nuts.</strong> Boxed mithai, and decorated bags of dried fruit for the Bhai Tika plate.",
              "<strong>Lights.</strong> Every length and colour of electric fairy light, tested on the spot.",
              "<strong>Fruit.</strong> Pomelos, citrons, oranges and sugarcane.",
            ],
          },
          { p: "Go between three and six in the afternoon, on foot, with your bag in front of you — it is crowded enough for pickpockets. A second flower market sets up around the Bagmati bridge at Teku and along the ring road." },
        ],
      },
      {
        h2: "Sunday 8 November: Dogs by Day, Lamps by Night",
        blocks: [
          { p: "This is the day to plan the week around. Because of the way the lunar days fall in 2026, the morning of the dog and the night of Laxmi share a date." },
          { p: "<strong>Morning.</strong> Be out by eight. Walk from Thamel south through Jyatha to Ason and on to Durbar Square. You will pass dogs being garlanded on doorsteps, dogs asleep on temple steps in three garlands each, and stallholders feeding the strays they share the street with all year. More in [[post:kukur-tihar-day-of-the-dogs|Kukur Tihar]]." },
          { p: "<strong>Afternoon.</strong> A lull while every household cleans and decorates. Rangoli are being drawn at shop fronts from about two. This is a good time to rest; the evening is long." },
          { p: "<strong>Evening.</strong> Sunset is at about a quarter past five. Start at Durbar Square as the first lamps go on, walk the old bazaar north to Ason, and finish in Thamel, where the bhailo groups will find you. Or cross the river to Patan, where the square is lit almost entirely by oil lamps. More in [[post:laxmi-puja-in-nepal-night-of-lights|Laxmi Puja]]." },
          {
            figure: {
              image: FESTIVALS.kathmanduTiharNight,
              alt: "The lights of the Kathmandu valley at night during Tihar, seen from a hillside.",
              caption: "The valley on Laxmi Puja night. From Swayambhunath or any high rooftop, the lights run to the hills.",
            },
          },
        ],
      },
      {
        h2: "Tuesday 10 November: New Year's Day",
        blocks: [
          { p: "The fourth day belongs to the Newars. From mid-morning, rallies of motorbikes with red flags circle the city, and then the processions begin: ranks of drummers, women in black saris bordered with red, masked dancers, children dressed as deities. The main gathering in Kathmandu is around <strong>Basantapur</strong>, the open square at the south end of Durbar Square. Patan and Bhaktapur hold their own." },
          { p: "In the evening the old neighbourhoods go quiet and families perform <em>Mha Puja</em> indoors. Walk the back lanes of Patan after dark: oil lamps on every step, and the sound of deusi from somewhere two streets away. The background is in [[post:mha-puja-and-nepal-sambat-new-year|Mha Puja and Nepal Sambat New Year]]." },
          {
            figure: {
              image: trekImage("kathmandu-day-tour", "01-kathmandu-durbar-square-basantapur"),
              alt: "The temples and old palace buildings of Kathmandu Durbar Square at Basantapur.",
              caption: "Basantapur and Kathmandu Durbar Square, where the New Year processions gather.",
            },
          },
        ],
      },
      {
        h2: "What Is Open and Closed",
        blocks: [
          {
            table: {
              head: ["", "During Tihar", "Notes"],
              rows: [
                ["Hotels and guesthouses", "Open", "Often decorated; many arrange a Laxmi Puja for guests"],
                ["Restaurants in Thamel, Boudha, Jhamsikhel", "Open", "Some staff on leave; menus may be shortened on Bhai Tika"],
                ["Neighbourhood restaurants and tea shops", "Mixed", "Mostly closed on Bhai Tika; Newar-run places closed on the 10th and 11th"],
                ["Trekking and gear shops", "Open", "Shorter hours on Laxmi Puja evening and Bhai Tika morning"],
                ["Supermarkets and pharmacies", "Open", "Reduced hours on the 8th and 11th"],
                ["Banks", "Closed 8 – 11 November", "ATMs work; use them before the 7th"],
                ["Money changers in Thamel", "Mostly open", "Closed on Bhai Tika morning"],
                ["Immigration, tourism board, permit offices", "Closed 7 – 11 November", "Reopen Thursday 12th"],
                ["Durbar Squares, Swayambhunath, Boudhanath, Pashupatinath", "Open", "Ticket counters run as normal"],
                ["Museums", "Mixed", "State museums close on public holidays; ask before making a special journey"],
                ["Clinics for travellers", "Open, with emergency cover", "Call ahead on Bhai Tika"],
              ],
              note: "The pattern of a normal year. Public holidays are set by government notice and individual businesses decide for themselves.",
            },
          },
          { p: "The difference from Dashain is large. Then, you plan around a city that has shut; see [[post:kathmandu-during-dashain|Kathmandu during Dashain]]. At Tihar the only things you truly cannot do are bank and deal with government." },
        ],
      },
      {
        h2: "Getting Around and Getting Away",
        blocks: [
          {
            ul: [
              "<strong>Walk in the old city.</strong> On the festival evenings the lanes between Thamel and Durbar Square are slow even on foot, and a taxi is no help.",
              "<strong>Taxis and ride apps</strong> work all week, with fewer drivers and higher fares on Laxmi Puja night and through Bhai Tika. Agree the price first.",
              "<strong>Late-evening returns</strong> from Patan or Bhaktapur are hard on the 8th. Stay over, or leave by eight.",
              "<strong>The airport</strong> runs normally. International flights are unaffected.",
              "<strong>Domestic flights and tourist buses</strong> are heavily booked on 9 and 10 November as people travel to their sisters. Thursday the 12th is busy with the return. Travel on the 8th or the 11th if you can, or book well ahead; see [[post:domestic-flights-in-nepal-for-trekkers|domestic flights]].",
              "<strong>Day trips</strong> are easy: [[trek:nagarkot-sunrise-tour|Nagarkot for sunrise]], the [[trek:chandragiri-cable-car-tour|Chandragiri cable car]] (queues on holiday afternoons), or the [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha hike]] through the harvest.",
            ],
          },
        ],
      },
      {
        h2: "Where to Stay and Practical Tips",
        blocks: [
          {
            ul: [
              "<strong>Thamel</strong> is the convenient base: everything open, the old city ten minutes' walk away, deusi-bhailo at your door.",
              "<strong>Patan</strong> is the atmospheric one. Small heritage guesthouses in restored Newar houses put you inside the festival; several arrange for guests to join a family's Laxmi Puja.",
              "<strong>Bhaktapur</strong> for a night on the 8th, to see the squares by lamplight after the day visitors have left.",
              "<strong>Boudha</strong> if you want calm. The stupa is beautiful at night at any time, and the festival noise is at a distance.",
            ],
          },
          {
            ul: [
              "<strong>Book rooms early.</strong> The festival overlaps peak trekking season and good places fill.",
              "<strong>Carry cash</strong> for four days, in small notes for singers and flower sellers.",
              "<strong>Firecrackers</strong> are banned and common. They peak on the evenings of the 8th to 10th. Light sleepers should bring earplugs.",
              "<strong>Air quality</strong> dips on Laxmi Puja night from smoke; anyone with asthma should keep their inhaler handy.",
              "<strong>Mind the flames.</strong> Lamps are on the ground and on every step.",
              "<strong>Dress up a little</strong> on the 8th and 10th. Everyone else has.",
            ],
          },
          { p: "A guided evening is worth it at least once: the best courtyards are behind doorways you would walk past. Our [[trek:kathmandu-day-tour|Kathmandu day tour]] and [[trek:kathmandu-valley-tour|Kathmandu Valley Tour]] are re-timed for the festival evenings on request, and the [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] is built round the light. New to the city? Start with [[post:arriving-in-kathmandu-first-48-hours|your first 48 hours in Kathmandu]]." },
        ],
      },
    ],
    faqs: [
      { question: "Is Kathmandu a good place to be during Tihar?", answer: "Yes, it is the best place in the country for it. The old city, Patan and Bhaktapur are lit with lamps, the markets are at their liveliest, and the Newar New Year adds processions on the fourth day. Unlike at Dashain, the city stays busy." },
      { question: "Is Kathmandu closed during Tihar?", answer: "No. Hotels, tourist restaurants, shops in Thamel and the airport stay open. Banks and government offices close from about 8 to 11 November 2026, and most local shops close on the last day, Bhai Tika." },
      { question: "Are restaurants in Thamel open during Tihar?", answer: "Yes, throughout the festival. Some run shorter menus or hours on Bhai Tika because staff are on leave. Neighbourhood eateries outside the tourist areas are more likely to be closed that day." },
      { question: "Can I get a trekking permit in Kathmandu during Tihar?", answer: "Not on the holiday days. Permit offices and the immigration department are closed from about 7 to 11 November 2026 and reopen on the 12th. Arrange permits by Friday 6 November." },
      { question: "Where should I go in Kathmandu on Laxmi Puja night?", answer: "Walk from Durbar Square through Indra Chowk to Ason and on to Thamel from about half past five. For the most traditional scene, go to Patan or Bhaktapur, where the squares are lit by oil lamps." },
      { question: "Are taxis available in Kathmandu during Tihar?", answer: "Yes, but there are fewer on the night of Laxmi Puja and for most of Bhai Tika, and fares are higher. In the old city on festival evenings it is quicker to walk." },
      { question: "Is it noisy in Kathmandu during Tihar?", answer: "In the evenings, yes. There is singing, music and, despite an official ban, firecrackers, mainly from 8 to 10 November. It quietens by about ten or eleven at night." },
      { question: "Which area of Kathmandu is best to stay in for Tihar?", answer: "Thamel for convenience and open restaurants, Patan for atmosphere and traditional houses, and Bhaktapur for one night on Laxmi Puja. Boudha is the quietest option." },
    ],
    relatedTreks: ["kathmandu-day-tour", "kathmandu-valley-tour", "kathmandu-photography-tour", "bhaktapur-day-tour", "patan-day-tour", "nagarkot-sunrise-tour"],
    tripsNote: "City and valley tours that can be timed for the festival evenings.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "tihar-dates-calendar-for-travellers",
      "laxmi-puja-in-nepal-night-of-lights",
      "kukur-tihar-day-of-the-dogs",
      "mha-puja-and-nepal-sambat-new-year",
      "kathmandu-during-dashain",
    ],
    tags: ["Tihar", "Kathmandu", "Festivals", "Travel Planning"],
    meta: {
      title: "Kathmandu During Tihar 2026: What to See & What's Open",
      description: "Kathmandu during Tihar, 6–12 November 2026: the markets, Kukur Tihar, Laxmi Puja night, New Year processions, and what is open, closed and running.",
      keywords: "Kathmandu during Tihar, Tihar in Kathmandu, Kathmandu Diwali, what is open Tihar Nepal, Thamel Tihar, Kathmandu Laxmi Puja, Kathmandu November 2026",
    },
  },
];
