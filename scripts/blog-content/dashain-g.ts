import type { BlogContent } from "./build";
import { DASHAIN } from "./images";

/**
 * Dashain series, part 7: taking part — the tika, the food, and the swings and
 * kites that are the festival's public face.
 */
export const dashainG: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-tika-ceremony-guide-for-visitors",
    title: "Receiving Dashain Tika: A Visitor's Guide to the Ceremony and Its Etiquette",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.tikaRice,
      alt: "A metal plate of red akshata — rice mixed with yoghurt and vermilion — prepared for the Dashain tika.",
    },
    excerpt:
      "On the tenth day of Dashain, elders press a paste of red rice onto the foreheads of the younger generation and give them a blessing. Visitors are often invited to receive one. What the tika is, what happens, what to wear and say, and the handful of things not to do.",
    intro: [
      { p: "At some point during a Dashain visit a Nepali is likely to say: you must come to my house for tika. It may be your guide, the owner of your hotel, a lodge family on the trail or the host of a homestay. The invitation is sincere, and accepting it is the best thing you can do with the festival." },
      { p: "It is also a ritual with a shape, and knowing the shape removes the awkwardness. This guide explains what happens and how to behave. The day itself is described in [[post:fifteen-days-of-dashain-explained|the fifteen days of Dashain]]; in 2026 it is Wednesday 21 October." },
    ],
    sections: [
      {
        h2: "What the Tika Is",
        blocks: [
          { p: "The Dashain tika is a paste called <em>akshata</em>: uncooked rice mixed with yoghurt and red vermilion powder. It is pressed onto the centre of the forehead in a patch the size of a large coin — much larger than the small dot of an ordinary blessing. With it comes <em>jamara</em>, the yellow barley shoots grown in the household's prayer room since the first day of the festival, and a blessing spoken by the person giving it." },
          { p: "It flows in one direction: from elder to younger. The head of the family gives it to their children, grandchildren, nieces and nephews, in order of age, and each receives a small gift of money, <em>dakshina</em>, with it. Then people travel to receive it again from other elders — grandparents, a mother's brother, parents-in-law — which is why the tika goes on for five days." },
          { p: "What is being handed over is the blessing of the goddess Durga, and through it the family's goodwill for the year: long life, health, success in whatever you are attempting. It is the moment the whole festival exists for." },
          {
            figure: {
              image: DASHAIN.tikaTray,
              alt: "A tika tray with plates of fruit, sweets and nuts beside a bundle of yellow jamara shoots.",
              caption: "The tray is prepared before the auspicious hour: the red rice, the jamara, fruit and sweets for each person who comes.",
            },
          },
        ],
      },
      {
        h2: "How a Visitor Comes to Receive One",
        blocks: [
          {
            ul: [
              "<strong>A guide's or driver's family.</strong> The commonest route. If your trek ends near the festival, you may well be taken home.",
              "<strong>A homestay.</strong> In community homestay villages the host family includes guests as a matter of course — see [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]] and [[trek:sirubari-village-tour|Sirubari]].",
              "<strong>A hotel or lodge.</strong> Family-run places often give tika to guests at breakfast on the tenth day.",
              "<strong>On the trail.</strong> Guides give it to their crew and anyone else present — see [[post:guides-and-porters-at-dashain|guides and porters at Dashain]].",
              "<strong>A temple.</strong> Priests at shrines such as Tal Barahi in Pokhara give tika to all who come.",
            ],
          },
          { p: "You do not need to be Hindu, related, or known to the family for long. Being a guest is qualification enough." },
        ],
      },
      {
        h2: "What Happens, Step by Step",
        blocks: [
          {
            ol: [
              "<strong>You arrive and take off your shoes</strong> at the door. You will be given a seat and almost certainly tea.",
              "<strong>The family waits for the auspicious time</strong>, the <em>sait</em>, announced each year — usually late morning. Nothing starts before it.",
              "<strong>The eldest gives tika to the family in order of age.</strong> Younger relatives bow low, sometimes touching the elder's feet. Watch; you will be called in turn, usually after the family.",
              "<strong>You sit or kneel in front of the elder</strong>, lower than they are, facing them.",
              "<strong>They press the tika onto your forehead</strong> while reciting a blessing in Sanskrit or Nepali. Keep your head slightly bowed and still.",
              "<strong>They place jamara</strong> behind your ear or in your hair, and may put a garland round your neck.",
              "<strong>They hand you dakshina</strong> — a banknote, sometimes with fruit. Take it with your right hand, or both hands, and touch it briefly to your forehead.",
              "<strong>You say thank you</strong> with a namaste, palms together.",
              "<strong>You eat.</strong> This is not optional.",
            ],
          },
          { p: "The whole thing takes a minute or two per person. In a large family the queue lasts all afternoon." },
        ],
      },
      {
        h2: "What to Wear and Bring",
        blocks: [
          { p: "Dress as you would to visit someone's grandparents: clean, modest, shoulders and knees covered. Nepalis wear their best new clothes for the day, and you will not be overdressed. Avoid white, which is the colour of mourning, and all-black." },
          { p: "Bring a small gift for the household — fruit, a box of sweets from a sweet shop, something from your own country. Do not bring alcohol unless you know the family drinks. You are not expected to give money to the elder who blesses you; the money goes the other way." },
        ],
      },
      {
        h2: "What to Say",
        blocks: [
          {
            table: {
              head: ["Nepali", "Meaning", "When"],
              rows: [
                ["Namaste", "Hello; I greet you", "On arriving and leaving, palms together"],
                ["Dashain ko shubhakamana", "Best wishes for Dashain", "To anyone, throughout the festival"],
                ["Vijaya Dashami ko shubhakamana", "Best wishes for Vijaya Dashami", "On the tenth day"],
                ["Dhanyabad", "Thank you", "After receiving the tika"],
                ["Mitho chha", "It is delicious", "During the meal — frequently"],
                ["Pugyo", "That is enough", "When your plate is being refilled for the third time"],
              ],
            },
          },
          { p: "Any attempt at Nepali is met with delight. Nobody expects more than these." },
        ],
      },
      {
        h2: "The Meal Afterwards",
        blocks: [
          { p: "The tika is followed by food, and a great deal of it: goat curry, beaten rice, pickles, fried bread, yoghurt, sweets, and often home-made spirit. You will be served first and most. Refusing outright is impolite; eating a little of everything and saying <em>pugyo</em> with a hand over the plate is the accepted way to stop." },
          { p: "If you are vegetarian or do not drink, say so when you arrive — it causes no offence and a great deal of extra effort on your behalf. What is likely to be on the table is in our [[post:dashain-food-guide-what-to-eat|Dashain food guide]]." },
        ],
      },
      {
        h2: "Things to Do and Not to Do",
        blocks: [
          {
            table: {
              head: ["Do", "Do not"],
              rows: [
                ["Take your shoes off at the door", "Enter the prayer room where the jamara is grown unless invited"],
                ["Sit lower than the elder giving the tika", "Offer the tika to an elder yourself — it only goes downward in age"],
                ["Use your right hand to receive and to eat", "Pass food or take money with the left hand"],
                ["Leave the tika on for the rest of the day", "Wipe it off in front of the family"],
                ["Ask before taking photographs", "Photograph the household shrine without asking"],
                ["Accept the dakshina", "Refuse it or try to hand it back"],
                ["Eat something of everything", "Touch shared dishes with a spoon you have eaten from"],
                ["Stay a while", "Leave straight after the tika; the visit is the point"],
              ],
            },
          },
          { p: "The red paste dries and flakes through the day. Wash it off in the evening. Vermilion can stain pale clothing, so lean forward when you do." },
        ],
      },
      {
        h2: "Variations You May Meet",
        blocks: [
          {
            ul: [
              "<strong>White tika.</strong> Some communities use plain rice and yoghurt without the red powder. It is the same blessing.",
              "<strong>Newar households</strong> keep the day as part of Mohani, with their own sequence and a tika that includes a black mark made from lamp soot. See [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]].",
              "<strong>Families in mourning.</strong> A household that has lost a close relative during the year does not celebrate. If your host mentions it, the right response is sympathy, not persuasion.",
              "<strong>Buddhist households</strong> in the high valleys may not mark the day at all, or only as a holiday.",
              "<strong>No invitation at all.</strong> Not every family takes guests on the tenth day, which is intimate. An invitation for one of the following four days is equally meant.",
            ],
          },
        ],
      },
      {
        h2: "Photographs",
        blocks: [
          { p: "Families usually want a picture of the foreign guest with a tika and are happy for you to take your own, but ask first, and ask separately before photographing elderly relatives or the prayer room. Offer to send the pictures and then do. More on this in [[post:photographing-dashain-in-nepal|photographing Dashain]]." },
        ],
      },
      {
        h2: "Arranging It",
        blocks: [
          { p: "An invitation cannot be bought, but it can be made likely. Travel with a guide and you will probably be asked. Stay in a homestay village over the tenth day and you certainly will be: our [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun and Ghanpokhara]], [[trek:sirubari-village-tour|Sirubari]] and [[trek:himalayan-village-tour|Himalayan Village]] tours can each be dated so that the tika falls on a night in the village. Our guides to [[post:ghalegaun-ghanpokhara-village-tour-guide|Ghalegaun]] and [[post:sirubari-village-tour-guide|Sirubari]] describe the villages, and [[post:where-to-see-dashain-celebrations-in-nepal|where to see Dashain celebrations]] sets out the other options." },
        ],
      },
    ],
    faqs: [
      { question: "Can foreigners receive Dashain tika?", answer: "Yes. Guests are welcomed into the ceremony regardless of nationality or religion. It is given by the elders of a host family, by guides, by lodge owners and by temple priests." },
      { question: "What is Dashain tika made of?", answer: "Uncooked rice mixed with yoghurt and red vermilion powder, called akshata. Some communities leave out the red powder and give a white tika. It is given together with jamara, the barley shoots grown for the festival." },
      { question: "What should I wear to a Dashain tika?", answer: "Clean, modest clothes covering shoulders and knees — the equivalent of visiting someone's grandparents. Avoid white, the colour of mourning. You will remove your shoes at the door." },
      { question: "Should I bring a gift?", answer: "A small one for the household is appreciated: fruit, a box of sweets, or something from home. You do not give money to the elder who blesses you; the elder gives a small sum to you." },
      { question: "What do I do with the money I am given?", answer: "Accept it with your right hand or both hands and keep it. The dakshina is part of the blessing, usually a small banknote, and refusing it would be refusing the blessing." },
      { question: "How long should I leave the tika on?", answer: "For the rest of the day. It flakes off by itself as it dries. Wash it off in the evening rather than wiping it away in front of the family." },
      { question: "Do I have to eat meat at a Dashain meal?", answer: "No. Tell your hosts you are vegetarian when you arrive and they will make sure there is plenty for you. What you should not do is decline to eat at all." },
      { question: "What do you say when receiving Dashain tika?", answer: "A namaste with palms together and 'dhanyabad', thank you, is all that is needed. 'Dashain ko shubhakamana' — best wishes for Dashain — is the greeting for the day." },
    ],
    relatedTreks: [
      "ghalegaun-ghanpokhara-village-tour",
      "sirubari-village-tour",
      "himalayan-village-tour",
      "kathmandu-valley-tour",
      "pokhara-day-tour",
    ],
    tripsNote: "Homestay tours where the host family includes guests in the tika.",
    relatedPosts: [
      "fifteen-days-of-dashain-explained",
      "dashain-food-guide-what-to-eat",
      "where-to-see-dashain-celebrations-in-nepal",
      "guides-and-porters-at-dashain",
      "ghalegaun-ghanpokhara-village-tour-guide",
      "sirubari-village-tour-guide",
    ],
    tags: ["Dashain", "Culture", "Etiquette", "Homestay", "Festivals"],
    meta: {
      title: "Receiving Dashain Tika: A Visitor's Etiquette Guide",
      description: "Invited to a Dashain tika? What the ceremony is, what happens step by step, what to wear, bring and say, and the things a guest should not do.",
      keywords: "Dashain tika, Dashain tika ceremony, tika and jamara, Dashain etiquette, Dashain for foreigners, how to receive tika, Dashain greetings Nepali",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-food-guide-what-to-eat",
    title: "Dashain Food Guide: What Nepal Eats During the Festival",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.thali,
      alt: "A Nepali thali with rice, goat curry, lentils, greens and pickles arranged on a brass plate.",
    },
    excerpt:
      "Dashain is the feast of the Nepali year: goat in half a dozen forms, beaten rice, pickles, fried rice-flour bread and home-made spirit. What the dishes are, what the Newar feast adds, where a visitor can eat them, how vegetarians fare, and how to avoid the stomach trouble that follows the festival.",
    intro: [
      { p: "For most Nepali households meat is an occasional thing. At Dashain it is the whole point. A goat is bought, sometimes weeks ahead, and from the eighth day the family eats its way through the entire animal — curry, dry-fried, grilled, the offal, the blood — with relatives arriving in relays to help." },
      { p: "A visitor who is invited to a tika will meet all of it on one plate. This guide explains what you are looking at. The ceremony that precedes the meal is covered in [[post:dashain-tika-ceremony-guide-for-visitors|receiving Dashain tika]]." },
    ],
    sections: [
      {
        h2: "Why Dashain Is a Meat Festival",
        blocks: [
          { p: "The animal is first an offering. On the eighth or ninth day a goat — or, in some communities, a buffalo, a duck or a chicken — is sacrificed to the goddess, and what has been offered is then eaten as her blessing. A family that cannot afford a goat shares one with neighbours; a family that prefers not to kill offers a pumpkin and buys meat from the butcher." },
          { p: "The demand is enormous. In the weeks before the festival, herds of long-haired mountain goats are driven down from Mustang along the Kali Gandaki, and lorries bring more from the plains and across the border. Temporary goat markets appear on open ground in every city. More on the ritual in [[post:animal-sacrifice-at-dashain-what-travellers-should-know|animal sacrifice at Dashain]]." },
          {
            figure: {
              image: DASHAIN.goatsMustang,
              alt: "A dense herd of long-horned mountain goats penned in a walled yard in a Mustang village.",
              caption: "Mountain goats penned in a Mustang village before the drive south. Trekkers on the Jomsom road in the weeks before Dashain meet the herds coming down.",
            },
          },
        ],
      },
      {
        h2: "The Dishes",
        blocks: [
          {
            table: {
              head: ["Dish", "What it is"],
              rows: [
                ["Khasi ko masu", "Goat curry on the bone, cooked with onion, ginger, garlic, cumin and chilli. The centre of every plate"],
                ["Pakku", "Goat cooked slowly and dry in its own fat and spices until dark. Made in quantity because it keeps for days"],
                ["Bhutan", "The offal — tripe, intestine, liver — fried hard with spices. Eaten as a snack with drinks"],
                ["Sekuwa", "Marinated meat grilled over a wood fire"],
                ["Rakti", "The blood, set and fried with spices. For the committed"],
                ["Chiura", "Beaten rice: dry, flattened flakes that need no cooking. The staple of the feast, eaten with everything"],
                ["Aloo ko achar", "Potato and cucumber salad dressed with ground sesame, lemon and chilli"],
                ["Mula ko achar", "Fermented or fresh radish pickle; sharp, to cut the fat"],
                ["Sel roti", "A ring of slightly sweet rice-flour batter, deep-fried. Crisp outside, soft inside"],
                ["Dahi", "Thick yoghurt, eaten with beaten rice and banana, and the base of the tika itself"],
                ["Sweets", "Lalmohan, barfi, peda and anarsa — a rice-flour biscuit rolled in poppy seeds"],
              ],
            },
          },
          { p: "A typical tika plate is a mound of beaten rice ringed with small heaps of each. You eat with your right hand, mixing as you go." },
          {
            figure: {
              image: DASHAIN.selRoti,
              alt: "A stack of sel roti, ring-shaped fried rice-flour bread, on a metal plate.",
              caption: "Sel roti: rings of rice-flour batter fried until crisp. Made in most homes through Dashain and Tihar.",
            },
          },
        ],
      },
      {
        h2: "The Newar Feast",
        blocks: [
          { p: "The Newars of the Kathmandu valley have the most elaborate food culture in Nepal and their festival, Mohani, shows it. The centrepiece is <strong>samay baji</strong>, a set plate of beaten rice surrounded by small portions with ritual meaning." },
          {
            ul: [
              "<strong>Choila</strong> — buffalo meat grilled over straw, then dressed with mustard oil, chilli and fenugreek.",
              "<strong>Kachila</strong> — raw minced buffalo with spices and oil. Not for a traveller's first week.",
              "<strong>Bara</strong> — a savoury lentil pancake, also called wo.",
              "<strong>Boiled egg, black soybeans, ginger and garlic greens</strong>, each with its place on the plate.",
              "<strong>Aila</strong> — a clear, strong spirit distilled at home from rice or millet, poured from a height into small clay bowls.",
              "<strong>Thwon</strong> — milky rice beer.",
            ],
          },
          { p: "On the eighth day families sit down to <em>Kuchhi Bhoye</em>, eaten off banana leaves in order of age. The easiest way for a visitor to taste this cooking is our [[trek:secret-food-tour-in-kathmandu|Secret Food Tour in Kathmandu]], which walks the old-city eating houses with a guide — see the [[post:secret-food-tour-in-kathmandu-guide|food tour guide]]. Bhaktapur, where the festival is described in [[post:bhaktapur-during-dashain-navadurga-and-mohani|Bhaktapur during Dashain]], adds <em>juju dhau</em>, the richest yoghurt in the country." },
          {
            figure: {
              image: "mardi-treks/secret-food-tour-in-kathmandu/secret-food-tour-in-kathmandu-03-newari-khaja-set",
              alt: "A Newari khaja set of beaten rice with meat, egg, beans and pickles.",
              caption: "A Newari khaja set. The Dashain version, samay baji, is the same idea with more on the plate.",
            },
          },
        ],
      },
      {
        h2: "What Is Drunk",
        blocks: [
          {
            ul: [
              "<strong>Raksi</strong> — home-distilled spirit from millet or rice, clear and deceptive.",
              "<strong>Jaand or chhyang</strong> — thick, lightly fermented rice or millet beer, served in bowls.",
              "<strong>Tongba</strong> — in eastern households, fermented millet in a wooden pot, topped up with hot water and drunk through a straw.",
              "<strong>Tea</strong>, constantly, sweet and milky.",
            ],
          },
          { p: "Home-made alcohol varies in strength and quality. Accept a little, drink slowly, and remember that altitude and alcohol are a bad pairing if you are about to start a trek." },
        ],
      },
      {
        h2: "Where a Visitor Can Eat It",
        blocks: [
          {
            table: {
              head: ["Where", "What you get"],
              rows: [
                ["A family tika", "The whole feast, home-cooked. The real thing"],
                ["A village homestay", "The same, with the family — [[trek:sirubari-village-tour|Sirubari]], [[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun]]"],
                ["Newari restaurants in Patan, Kirtipur and Bhaktapur", "Samay baji, choila, bara and aila year-round — [[trek:patan-day-tour|Patan]] and [[trek:bhaktapur-day-tour|Bhaktapur]] day tours pass them"],
                ["Nepali thali restaurants in Thamel and Lakeside", "Goat curry, sel roti and pickles as a set meal"],
                ["Trekking lodges", "Dal bhat as usual; in Hindu villages, goat curry on the tenth day"],
                ["Street stalls in Ason before the festival", "Sel roti fresh from the oil, sweets, fried snacks"],
              ],
            },
          },
          { p: "Many small local restaurants close for the main days — see [[post:what-is-open-and-closed-in-nepal-during-dashain|what is open and closed during Dashain]] — so the tourist districts and your hotel are the fallback." },
        ],
      },
      {
        h2: "For Vegetarians and Vegans",
        blocks: [
          { p: "Nepal is an easy country for vegetarians at any other time, and Dashain is the one fortnight when the default flips. It is still manageable. A good share of Nepalis are vegetarian themselves, by caste, belief or preference, and every household knows how to cook for one." },
          {
            ul: [
              "Tell your hosts in advance. You will be given paneer, mushroom or potato curry, lentils, greens, pickles and all the bread and sweets.",
              "Beaten rice, sel roti, aloo ko achar and most pickles are vegetarian. Sweets and yoghurt are not vegan.",
              "Vegans should mention ghee and yoghurt specifically; both are in a lot of festival cooking.",
              "On the trail nothing changes: dal bhat is vegetarian by default. See [[post:food-on-the-trail-in-nepal|food on the trail in Nepal]].",
            ],
          },
        ],
      },
      {
        h2: "Eating Safely",
        blocks: [
          { p: "Clinics in Nepal see a predictable rise in stomach illness after Dashain, among locals and visitors alike. The causes are simple: a great deal of meat, kept for several days without refrigeration in warm October weather, reheated repeatedly; raw dishes; and more alcohol than usual." },
          {
            ul: [
              "Eat meat that is freshly cooked and hot. Be cautious from about the third day after the slaughter.",
              "Leave the raw dishes — kachila in particular — unless you have a seasoned stomach.",
              "Wash or sanitise your hands before eating; you will be eating with them.",
              "Drink treated water, not what is in the jug. See [[post:drinking-water-while-trekking-in-nepal|drinking water in Nepal]].",
              "If you are starting a trek within two days, eat lightly. A stomach bug on the first day of a trek is a poor trade for a third helping.",
            ],
          },
          { p: "If it happens anyway, [[post:stomach-illness-on-a-nepal-trek-medication-and-recovery|our guide to stomach illness]] covers what to take and when to see a doctor." },
        ],
      },
    ],
    faqs: [
      { question: "What food is eaten during Dashain?", answer: "Goat above all — as curry, dry-cooked pakku, fried offal and grilled sekuwa — served with beaten rice, potato and radish pickles, sel roti, yoghurt and sweets. Newar families add samay baji with choila, lentil pancakes and home-distilled aila." },
      { question: "Why do Nepalis eat goat at Dashain?", answer: "The goat is first sacrificed as an offering to the goddess Durga on the eighth or ninth day, and the meat is then eaten as her blessing. For many families it is the main meat-eating occasion of the year." },
      { question: "What is sel roti?", answer: "A ring-shaped bread made from rice-flour batter with sugar and ghee, deep-fried until crisp outside and soft inside. It is made in most Nepali homes at Dashain and Tihar." },
      { question: "Is there vegetarian food at Dashain?", answer: "Yes. Tell your hosts and you will be given vegetable or paneer curry, lentils, pickles, beaten rice, sel roti and sweets. In restaurants and trekking lodges vegetarian food is available as usual." },
      { question: "What is samay baji?", answer: "The ceremonial Newar set plate: beaten rice with choila (spiced grilled buffalo), a lentil pancake, boiled egg, black soybeans, ginger and greens, usually with a bowl of aila, the local spirit." },
      { question: "Is it safe to eat Dashain food as a tourist?", answer: "Freshly cooked food is fine. The risk comes from meat kept unrefrigerated for days and from raw dishes. Eat meat hot and early in the festival, avoid raw mince, and be careful with home-made alcohol." },
      { question: "What alcohol is drunk at Dashain?", answer: "Raksi, a home-distilled spirit; jaand or chhyang, a thick rice or millet beer; aila in Newar households; and tongba in the east. Strength varies widely." },
      { question: "Where can I try Dashain food in Kathmandu?", answer: "At a family tika if you are invited; otherwise at Newari restaurants in Patan, Kirtipur and Bhaktapur, at Nepali thali restaurants in Thamel, or on a guided food walk through the old city." },
    ],
    relatedTreks: [
      "secret-food-tour-in-kathmandu",
      "sirubari-village-tour",
      "patan-day-tour",
      "bhaktapur-day-tour",
      "ghalegaun-ghanpokhara-village-tour",
    ],
    tripsNote: "A food walk through old Kathmandu, and homestays where the feast is cooked at home.",
    relatedPosts: [
      "dashain-tika-ceremony-guide-for-visitors",
      "secret-food-tour-in-kathmandu-guide",
      "food-on-the-trail-in-nepal",
      "animal-sacrifice-at-dashain-what-travellers-should-know",
      "stomach-illness-on-a-nepal-trek-medication-and-recovery",
      "bhaktapur-during-dashain-navadurga-and-mohani",
    ],
    tags: ["Dashain", "Food", "Culture", "Newari Cuisine", "Festivals"],
    meta: {
      title: "Dashain Food Guide: What Nepal Eats at the Festival",
      description: "Goat curry, pakku, beaten rice, sel roti, samay baji and aila — the dishes of Dashain explained, where to try them, vegetarian options and eating safely.",
      keywords: "Dashain food, what to eat during Dashain, khasi ko masu, sel roti, samay baji, Nepali festival food, Newari food Dashain, Dashain vegetarian",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "dashain-swings-and-kites",
    title: "Dashain Swings and Kites: Linge Ping, Rote Ping and Changa",
    cluster: "dashain",
    date: "2026-10-04",
    hero: {
      image: DASHAIN.swingKites,
      alt: "People swinging on a tall bamboo linge ping at dusk during Dashain, with a kite flying beside it.",
    },
    excerpt:
      "Two things tell you Dashain has arrived before a single ritual has taken place: bamboo swings rising in the village fields and kites over the rooftops. How the swings are built and why everyone must leave the ground once a year, the kite fights of Kathmandu, and where a visitor can find both.",
    intro: [
      { p: "Most of Dashain is hidden indoors. The swings and the kites are the part that is not. Weeks before the tika, boys are on the rooftops of Kathmandu with spools of thread, and in every hill village young men are cutting the tallest bamboo they can find. By the first day of the festival the swing is up, and it stays up until the festival season ends." },
      { p: "For a visitor they are the easiest part of the festival to see, to photograph and to join. This guide explains both. The festival they belong to is in our [[post:dashain-festival-nepal-travel-guide|Dashain travel guide]]." },
    ],
    sections: [
      {
        h2: "Leave the Ground Once a Year",
        blocks: [
          { p: "There is a saying that everyone should leave the earth at least once at Dashain. The swing is how it is done. Children do it daily; grandmothers are helped onto the seat for a few gentle arcs; visiting relatives are not allowed to refuse. It is said to lift away the year's ill feeling, and whatever one makes of that, it is true that nobody gets off a swing in a bad mood." },
          { p: "Nepali has one word for all of them: <em>ping</em>." },
        ],
      },
      {
        h2: "Linge Ping: The Bamboo Swing",
        blocks: [
          { p: "The <em>linge ping</em> is the tall one. Four green bamboo poles, each six metres or more, are set in the ground in two pairs and bent inward so that their tips cross, forming two arches. A crossbar is lashed between the arches, and from it hang two ropes with a wooden plank for a seat. Traditionally the rope is twisted from a tough hill grass and no nails are used anywhere; the whole structure is held by lashing and the spring of the bamboo." },
          { p: "It is built by the community, usually the young men, in the days around the start of the festival, on the same patch of ground every year. A small offering is made when it goes up. Because the poles flex, the swing has a long, slow arc that takes the rider far higher than a playground swing, and the confident stand on the seat, sometimes in pairs facing each other, driving it with their knees." },
          {
            figure: {
              image: DASHAIN.swingSunset,
              alt: "A rider at the top of the arc on a bamboo linge ping, with the sun setting over hills behind.",
              caption: "A linge ping at full stretch. The four bamboo poles flex with each swing, which gives it the long, high arc.",
            },
          },
        ],
      },
      {
        h2: "Rote Ping: The Wooden Wheel",
        blocks: [
          { p: "The other traditional swing is a small ferris wheel made of timber: an axle on two posts, with four seats hung from arms that rotate around it. It is turned by hand, or by the riders pushing off the ground with their feet as their seat comes round. A <em>rote ping</em> takes a carpenter to build and is rarer than the bamboo swing, but where a village has one it runs from morning to dusk." },
          { p: "Small fairs gather round both: a tea stall, someone selling fried snacks, and a ring of spectators offering advice." },
        ],
      },
      {
        h2: "Where to Find Swings",
        blocks: [
          { p: "Anywhere there is a village and a flat piece of ground. In the cities they have become scarcer as open land has been built on, though neighbourhood clubs still put them up in parks and school fields. The reliable places for a visitor are these." },
          {
            table: {
              head: ["Area", "Where", "How to get there"],
              rows: [
                ["Kathmandu valley rim", "Villages around Nagarkot, Changunarayan and Dhulikhel", "[[trek:nagarkot-sunrise-tour|Nagarkot sunrise tour]]; the [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha hike]] passes several"],
                ["South of Patan", "Bungamati, Khokana and the farm villages beyond", "[[trek:bungmati-khokana-village-tour|Bungamati and Khokana tour]]"],
                ["Above Pokhara", "Sarangkot, Kaskikot, Dhampus, Astam", "[[trek:pokhara-day-tour-with-sarangkot-sunrise|Sarangkot sunrise tour]]; see [[post:pokhara-during-dashain|Pokhara during Dashain]]"],
                ["Annapurna foothills", "Ghandruk, Ulleri, Landruk — every village on the lower trails", "[[trek:poonhill-trek|Poon Hill trek]]"],
                ["Homestay villages", "Ghalegaun, Sirubari, Bandipur", "[[trek:himalayan-village-tour|Himalayan Village Tour]]"],
                ["Lower Langtang and Helambu", "Tamang and Hyolmo villages on the approach", "[[trek:tamang-heritage-trek|Tamang Heritage Trail]]"],
              ],
            },
          },
          { p: "The swings stand from about the first day of Dashain until after Tihar, roughly a month, so they can be found well after the tika. In 2026 that means from 11 October to mid November." },
        ],
      },
      {
        h2: "Having a Go",
        blocks: [
          { p: "You will be invited to. A few things are worth knowing first." },
          {
            ul: [
              "<strong>Sit, do not stand,</strong> unless you have done it before. The standing technique looks easy and is not.",
              "<strong>Let someone push.</strong> There is always a volunteer, and they will push harder than you expect. Say when it is enough.",
              "<strong>Hold the ropes above shoulder height</strong> and keep hold until the swing has almost stopped.",
              "<strong>There is no harness, and the ground is hard.</strong> The swings are well built and tested by a whole village of children, but they are not a fairground ride.",
              "<strong>Wait your turn.</strong> There is a queue, even if it does not look like one.",
              "<strong>Keep children on your lap or on the low arcs.</strong>",
            ],
          },
        ],
      },
      {
        h2: "Changa: The Kites",
        blocks: [
          { p: "Kite flying is the Kathmandu valley's own Dashain custom. From the end of the monsoon the sky above the old cities fills each afternoon with small square paper kites, <em>changa</em>, flown from flat rooftops on thread wound round a wooden spool called a <em>lattai</em>. One explanation is that the kites carry a message to the gods that the rains have been enough. A plainer one is that October has steady wind, clear sky and no school." },
          { p: "The point is the fight. Two fliers bring their lines together and saw one against the other until a thread parts; the winner's rooftop shouts <em>chet!</em> and the losing kite drifts off across the city, chased by children at street level. The thread was traditionally coated with a paste of rice glue and powdered glass to give it an edge. That coating, and the nylon thread that has replaced it, injures birds and has cut motorcyclists, and there are regular calls to restrict it — a tradition under some pressure." },
          {
            ul: [
              "<strong>Where to watch:</strong> any rooftop in old Kathmandu, Patan or Bhaktapur in the afternoon. Rooftop cafés around the three Durbar Squares are ideal.",
              "<strong>Where to buy:</strong> the lanes of Ason and Indra Chowk sell kites and spools for very little in the weeks before the festival.",
              "<strong>When:</strong> from mid September through the tika. Late afternoon has the best wind.",
            ],
          },
          { p: "A [[trek:kathmandu-day-tour|Kathmandu day tour]] in the build-up to the festival passes under hundreds of them; see [[post:kathmandu-during-dashain|Kathmandu during Dashain]]." },
        ],
      },
      {
        h2: "Cards and Other Games",
        blocks: [
          { p: "The festival's third pastime is indoors. Dashain is when Nepal plays cards — in every household, for small stakes, often through the night — and the full-moon night that closes the festival is traditionally spent awake over a game. At village fairs you may also see dice games on a painted cloth. A visitor invited to join a family game will be taught the rules and gently relieved of a few hundred rupees." },
        ],
      },
      {
        h2: "Photographing Swings and Kites",
        blocks: [
          { p: "Swings are at their best in the last hour of light, when the bamboo and the rider go into silhouette against the sky — stand low and shoot upward. Kites want a long lens from a rooftop, or a wide one from below with the flier in the frame. Ask before photographing children, which in practice means asking the adults standing nearby. Our guide to [[post:photographing-dashain-in-nepal|photographing Dashain]] has more, and the [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] can be timed for the kite season." },
        ],
      },
    ],
    faqs: [
      { question: "What is a linge ping?", answer: "The traditional Dashain swing of Nepal: four tall bamboo poles set in the ground and lashed together at the top in two arches, with a seat hung on ropes between them. It is built by the village each year and stands for about a month." },
      { question: "Why do people swing during Dashain?", answer: "By custom everyone should leave the ground at least once during the festival; it is said to carry away ill feeling and bring good fortune. In practice it is the main entertainment for children and a social centre for the village." },
      { question: "What is the difference between linge ping and rote ping?", answer: "A linge ping is a tall rope swing on a bamboo frame. A rote ping is a small wooden ferris wheel with four seats turning on an axle, pushed round by hand or by the riders' feet." },
      { question: "Why do Nepalis fly kites at Dashain?", answer: "Kite flying marks the end of the monsoon and the start of the festival season, especially in the Kathmandu valley. Tradition says the kites tell the gods to send no more rain. Kite fights, in which one thread cuts another, are the main sport." },
      { question: "Where can tourists try a Dashain swing?", answer: "In almost any village during the festival. Easy places to reach include the villages around Nagarkot and Dhulikhel near Kathmandu, Sarangkot and Dhampus above Pokhara, and Ghandruk on the Poon Hill and Annapurna trails." },
      { question: "How long do the Dashain swings stay up?", answer: "From around the first day of Dashain until after Tihar — about a month. They are then taken down and the bamboo is used for other things." },
      { question: "Is it safe to ride a linge ping?", answer: "They are sturdy and used all day by local children, but there is no safety equipment. Sit rather than stand, hold on firmly, and tell whoever is pushing when you have had enough." },
      { question: "What does 'changa chet' mean?", answer: "'Changa' is a kite and 'chet' is the shout of victory when one flier's thread cuts another's in a kite fight. You will hear it from the rooftops of the Kathmandu valley throughout the kite season." },
    ],
    relatedTreks: [
      "nagarkot-sunrise-tour",
      "dhulikhel-namobuddha-hike",
      "pokhara-day-tour-with-sarangkot-sunrise",
      "bungmati-khokana-village-tour",
      "himalayan-village-tour",
      "kathmandu-photography-tour",
    ],
    tripsNote: "Day trips to the villages and ridges where the swings are built.",
    relatedPosts: [
      "dashain-festival-nepal-travel-guide",
      "photographing-dashain-in-nepal",
      "kathmandu-during-dashain",
      "pokhara-during-dashain",
      "where-to-see-dashain-celebrations-in-nepal",
      "nagarkot-and-sunrise-viewpoints-near-kathmandu",
    ],
    tags: ["Dashain", "Culture", "Festivals", "Village Life", "Photography"],
    meta: {
      title: "Dashain Swings and Kites: Linge Ping and Changa",
      description: "The bamboo swings and kite fights of Dashain explained: how a linge ping is built, what rote ping and changa are, and where visitors can find and try them.",
      keywords: "Dashain swing, linge ping, rote ping, Dashain kite flying, changa chet, bamboo swing Nepal, Dashain traditions, kite flying Kathmandu",
    },
  },
];
