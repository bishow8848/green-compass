import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * November 2026 series, weeks 2 and 3: two planning guides. Trekking with
 * children (Friday 20 November, ahead of the school holidays) and choosing a
 * trekking company (Friday 27 November).
 *
 * Medical advice on children at altitude is kept general and points to a
 * doctor; the agency guide makes no claims about other companies and none
 * about this one beyond inviting the reader to ask it the same questions.
 */
export const guidesB: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-with-children",
    title: "Trekking in Nepal with Children: The Best Routes and How to Plan",
    cluster: "guides",
    date: "2026-11-20",
    hero: {
      image: trekImage("poonhill-trek", "00-landscape-view-of-poon-hill"),
      alt: "The view from Poon Hill across forested ridges to the snow peaks of the Annapurna and Dhaulagiri ranges.",
    },
    excerpt:
      "Nepal is a wonderful place to trek with children: short stages between villages, lodges with hot food, porters to carry the bags and a culture that adores kids. Which routes suit which ages, how to handle altitude, food and health, and how to plan a family trek that everyone enjoys.",
    intro: [
      {
        p: "Families are sometimes surprised to hear that Nepal is one of the easiest places in the world to go trekking with children. The main trails link villages a few hours apart, so you can stop whenever small legs are tired. Every night there is a lodge with a warm dining room and a menu. Porters carry the bags, and guides become honorary uncles within a day. And Nepali people love children: yours will be greeted, fed, played with and photographed all the way up the trail.",
      },
      {
        p: "The key is choosing the right route for your children's ages and planning around the one thing that is genuinely different in the mountains: altitude. This guide covers both, with a route-by-route table, the health questions parents ask most, and the practical details that make a family trek work.",
      },
    ],
    sections: [
      {
        h2: "Is Trekking in Nepal Suitable for Children?",
        blocks: [
          {
            p: "Yes, with the right route and the right expectations. Children who walk happily for a few hours at home can usually manage a teahouse trek in Nepal, and many love it: there are suspension bridges, mule trains with bells, prayer wheels to spin, village children to play with and mountains that look exactly like a child's drawing of a mountain.",
          },
          {
            p: "What changes with children is the pace and the ceiling. A family trek should have shorter days, more rest, a flexible plan and a maximum sleeping altitude that suits the youngest member of the group. A private trek, rather than a fixed group departure, lets you set all of those. Our [[trek:poonhill-trek|Poon Hill trek]] is the route we suggest most often for a first family trek.",
          },
        ],
      },
      {
        h2: "The Best Family Treks by Age",
        blocks: [
          {
            table: {
              head: ["Trek or trip", "Days", "Highest night", "Suggested ages", "Why it works"],
              rows: [
                ["[[trek:chitwan-national-park-tour-3-days|Chitwan National Park]]", "3", "150 m", "All ages", "Rhinos, elephants and jeep or canoe safaris, with no altitude at all"],
                ["[[trek:sirubari-village-tour|Sirubari village]]", "3", "About 1,700 m", "All ages", "A homestay in a Gurung village, with short walks and lots of contact with local families"],
                ["[[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun and Ghanpokhara]]", "4", "About 2,100 m", "All ages", "Village homestays with Himalayan views, cultural shows and easy walking"],
                ["[[trek:poonhill-trek-from-pokhara|Poon Hill from Pokhara]]", "3", "2,860 m", "6 and over, or younger if carried", "The classic short trek, with a famous sunrise and rhododendron forest"],
                ["[[trek:mardi-himal-trek-from-pokhara|Mardi Himal from Pokhara]]", "5", "3,580 m", "10 and over", "A ridge walk with close views of Machhapuchhre, for fit older children"],
                ["[[trek:everest-view-trek|Everest View trek]]", "7", "3,440 m", "10 and over", "Lukla, Namche Bazaar and a view of Everest, with a rest day built in"],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "10", "3,870 m", "12 and over", "A big valley close to Kathmandu, with yaks, glaciers and a cheese factory"],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "4,130 m", "Teenagers with trekking experience", "A real Himalayan objective, with good lodges all the way"],
              ],
              note: "Suggested ages are a starting point, not a rule. Fitness, experience and how your children cope with new places matter as much as age. Highest night is the highest place you sleep.",
            },
          },
          { h3: "Babies and toddlers" },
          {
            p: "With a baby or toddler, think of a trek as a series of walks between comfortable places, with you or a porter carrying the child in a child-carrier backpack. Stay low: the hills around Pokhara, village stays such as Ghalegaun and Sirubari, and day hikes around the Kathmandu Valley such as [[trek:dhulikhel-namobuddha-hike|Dhulikhel to Namobuddha]]. Bring your own carrier, as good ones are hard to find in Nepal.",
          },
          { h3: "Children aged four to nine" },
          {
            p: "This is a lovely age for a short trek. Aim for three to five hours of walking a day, with plenty of stops. Poon Hill from Pokhara is ideal: three days, a famous sunrise and nights no higher than Ghorepani at 2,860 m. Expect to carry a tired child for part of some days, and plan the route so that you can.",
          },
          { h3: "Children aged ten to twelve" },
          {
            p: "Fit ten-to-twelve-year-olds can manage longer treks and higher ridges: Mardi Himal, the Everest View trek with its rest day in Namche, or a week combining Poon Hill with Ghandruk. Give them a job, such as navigating with the guide, counting the bridges or keeping the trip diary, and they will often outwalk the adults.",
          },
          { h3: "Teenagers" },
          {
            p: "Teenagers who are fit and keen can do most standard treks, including Langtang Valley and Annapurna Base Camp. Everest Base Camp is possible for experienced, fit teenagers with a properly paced itinerary and a family willing to turn back if anyone struggles, but there are easier ways to see the Himalaya.",
          },
          {
            figure: {
              image: trekImage("ghalegaun-ghanpokhara-village-tour", "00-ghalegaun-village-in-lamjung"),
              alt: "Stone houses of Ghalegaun village on a ridge in Lamjung in the evening light, with people walking on the paved path and hills behind.",
              caption:
                "Ghalegaun, a Gurung village in Lamjung, where families stay in local homes on our village tour. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Children and Altitude",
        blocks: [
          {
            p: "Altitude is the one real difference between trekking in Nepal and walking in the hills at home, and it deserves care with children. They can get altitude sickness just as adults can, roughly as often, and the treatment is the same: stop going up, and go down if symptoms get worse. The difficulty is that young children cannot always tell you how they feel.",
          },
          {
            ul: [
              "<strong>Watch for changes in behaviour.</strong> In a small child, altitude sickness may look like unusual fussiness or crying, loss of appetite, vomiting, poor sleep, or not wanting to play. Treat these as altitude symptoms until proved otherwise.",
              "<strong>Keep the ceiling low for little ones.</strong> Many doctors advise keeping babies and toddlers below about 2,500 to 3,000 m, and taking older children higher only slowly. Choose a route where the highest night suits your youngest child.",
              "<strong>Ascend slowly.</strong> Above 3,000 m, increase your sleeping altitude by no more than 300 to 500 m a night, with a rest day every three or four days, just as adults should.",
              "<strong>Choose a route you can descend quickly.</strong> On the lower Annapurna treks, an hour's walk downhill makes a real difference.",
              "<strong>Talk to your doctor before you go</strong> about altitude medication for children. Diamox can be used in children but only on a doctor's advice, and it is never a substitute for a slow ascent.",
            ],
          },
          {
            p: "Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] explains the symptoms and the rules of ascent in detail.",
          },
        ],
      },
      {
        h2: "Health, Food and Hygiene",
        blocks: [
          {
            ul: [
              "<strong>Vaccinations:</strong> see your doctor or a travel clinic six to eight weeks before you leave. Make sure routine childhood vaccinations are up to date, and ask about hepatitis A, typhoid and rabies. Children are more likely than adults to be bitten by dogs, and less likely to tell you. Our [[post:vaccinations-for-trekking-in-nepal|vaccinations guide]] has the details.",
              "<strong>Food:</strong> lodge menus have plenty that children eat happily: fried rice, noodles, pasta, chips, pancakes, porridge, eggs and Tibetan bread. Dal bhat comes with free refills. Bring a supply of familiar snacks from home for the moments when nothing else will do.",
              "<strong>Water:</strong> use filtered or purified water only, including for brushing teeth, and avoid ice. Our [[post:drinking-water-while-trekking-in-nepal|drinking water guide]] compares the options.",
              "<strong>Hand hygiene:</strong> carry hand sanitiser and use it before every meal. Most stomach upsets on a trek come from hands, not food.",
              "<strong>Stomach upsets:</strong> pack oral rehydration salts, which matter even more for children, who dehydrate faster than adults. Ask your doctor about suitable medicines in children's doses before you go.",
              "<strong>Sun:</strong> UV is much stronger at altitude. Children need sun hats, sunglasses and high-factor sunscreen even on cool days.",
            ],
          },
          {
            p: "Your travel insurance must cover every member of the family for trekking at the altitude you will reach, including helicopter evacuation. Our [[post:travel-insurance-for-trekking-in-nepal|travel insurance guide]] explains what to check.",
          },
        ],
      },
      {
        h2: "Planning a Family Trek",
        blocks: [
          {
            ul: [
              "<strong>Go private.</strong> A private trek lets you set the pace, stop early when someone is tired and change the plan without affecting strangers.",
              "<strong>Shorten the stages.</strong> Ask for an itinerary with shorter walking days than the standard one, and at least one spare day.",
              "<strong>Get the right support.</strong> One porter for every two adults is usual. With a young child, we can arrange an extra porter who can take turns carrying the child-carrier on steep or tiring sections.",
              "<strong>Choose your season.</strong> October to November and March to April are best for families: settled weather and comfortable temperatures. December to February is fine on low routes but the nights are cold. Avoid the monsoon months, when trails are slippery and leeches are common.",
              "<strong>Fly where you can.</strong> The flight from Kathmandu to Pokhara takes about half an hour; the drive can take seven hours or more.",
              "<strong>Permits:</strong> children under ten are usually exempt from conservation-area and national park fees, though they still need to be registered with the rest of the group.",
            ],
          },
        ],
      },
      {
        h2: "What to Pack for Children",
        blocks: [
          {
            ul: [
              "Well-fitting walking shoes or boots, broken in before the trip, plus comfortable sandals for the evenings",
              "Layers: a base layer, a fleece, a warm jacket and a waterproof. Children get cold faster when they stop",
              "A warm hat, gloves, a sun hat and sunglasses",
              "A child-sized sleeping bag suited to the coldest night of the trek, and a liner",
              "A small daypack of their own with a water bottle and snacks",
              "A head torch each: lodge toilets at night are an adventure",
              "Cards, a small game, books and a notebook for the long evenings in the dining room",
              "A child-carrier backpack for under-fives",
            ],
          },
          {
            p: "The full [[post:nepal-trekking-packing-list|packing list]] covers the adults.",
          },
        ],
      },
      {
        h2: "What Children Love About Trekking in Nepal",
        blocks: [
          {
            ul: [
              "<strong>Suspension bridges</strong>, swaying high above rivers, and counting them.",
              "<strong>Animals on the trail:</strong> mule trains with bells, goats, buffaloes, and yaks higher up.",
              "<strong>Village children</strong>, who will happily play football, cards or tag with no shared language at all.",
              "<strong>Monasteries and prayer wheels</strong>, which they are allowed to spin, always clockwise.",
              "<strong>A sunrise from a mountain top</strong>, especially the crowd and the cheer at Poon Hill.",
              "<strong>Hot springs</strong>, such as the pools at Jhinu Danda on the Annapurna route.",
              "<strong>Rhinos and elephants</strong> in Chitwan, which make a perfect ending to a trek.",
            ],
          },
          {
            figure: {
              image: trekImage("chitwan-national-park-tour-3-days", "01-one-horned-rhino-at-chitwan-national-park"),
              alt: "A greater one-horned rhinoceros in Chitwan National Park.",
              caption:
                "A one-horned rhino in Chitwan. Three days in the jungle make a good finish to a family trek. Archive photograph.",
            },
          },
          {
            p: "A popular family itinerary is a few days in Kathmandu, a short trek such as Poon Hill from Pokhara, a day on the lake, and two or three nights in Chitwan. Our [[trek:kathmandu-pokhara-tour|Kathmandu and Pokhara tour]] is a good base to build it on. Tell us your children's ages and how long you have, and we will put together a plan. You can reach us through the <a href=\"/contact\">contact page</a>.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can children go trekking in Nepal?",
        answer:
          "Yes. Teahouse treks in Nepal suit children well: short stages between villages, lodges with hot food every night, porters to carry the bags and a culture that loves children. The key is choosing a route and maximum altitude that suit your youngest child.",
      },
      {
        question: "What is the best trek in Nepal for families?",
        answer:
          "Poon Hill is the most popular first family trek. From Pokhara it takes three days, the highest night is at Ghorepani (2,860 m), and it ends with a famous sunrise over the Annapurna and Dhaulagiri ranges.",
      },
      {
        question: "What is the minimum age for trekking in Nepal?",
        answer:
          "There is no legal minimum age. Babies and toddlers can come on low routes if carried, children from about six can walk short treks like Poon Hill, and fit teenagers can do most standard treks. The right age depends on the route's altitude and the child.",
      },
      {
        question: "Can children get altitude sickness?",
        answer:
          "Yes, about as often as adults. Young children may not be able to describe symptoms, so watch for fussiness, loss of appetite, vomiting, poor sleep or not wanting to play. If you suspect altitude sickness, stop ascending, and descend if it gets worse.",
      },
      {
        question: "How high can children trek in Nepal?",
        answer:
          "Many doctors advise keeping babies and toddlers below about 2,500 to 3,000 m and taking older children higher only slowly. Fit teenagers can reach 4,000 m or more on a well-paced itinerary. Speak to your doctor about your own children.",
      },
      {
        question: "Can children do the Everest Base Camp trek?",
        answer:
          "Fit, experienced teenagers can, on a properly paced itinerary with acclimatisation days and a family willing to turn back. For younger children, the Everest View trek, which sleeps no higher than Namche Bazaar at 3,440 m, is a better way to see Everest.",
      },
      {
        question: "Do children need trekking permits in Nepal?",
        answer:
          "Children under ten are usually exempt from conservation-area and national park fees, but they still need to be registered with the group. Older children pay the same fees as adults.",
      },
      {
        question: "What food is available for children on Nepal treks?",
        answer:
          "Plenty that children like: fried rice, noodles, pasta, chips, pancakes, porridge, eggs and Tibetan bread, as well as dal bhat with free refills. Bring familiar snacks from home for fussy moments.",
      },
      {
        question: "Can porters carry children on a trek?",
        answer:
          "Yes. We can arrange an extra porter to help carry a young child in a child-carrier backpack on steep or tiring sections. Bring your own good-quality carrier, as they are hard to find in Nepal.",
      },
      {
        question: "When is the best time to trek in Nepal with children?",
        answer:
          "October to November and March to April, when the weather is settled and temperatures are comfortable. Winter is fine on low routes but the nights are cold, and the monsoon months from June to September bring slippery trails and leeches.",
      },
      {
        question: "Is Nepal safe for families?",
        answer:
          "Nepal is generally a safe and welcoming country for families. The main risks are stomach upsets, altitude on higher routes, road travel and dogs. Good hygiene, a sensible route, flying where possible and keeping children away from dogs deal with most of them.",
      },
      {
        question: "What else can families do in Nepal besides trekking?",
        answer:
          "Jungle safaris in Chitwan, boating on Phewa Lake in Pokhara, village homestays, rafting on gentle rivers for older children, and exploring the temple squares of Kathmandu, Patan and Bhaktapur.",
      },
    ],
    relatedTreks: [
      "poonhill-trek",
      "poonhill-trek-from-pokhara",
      "ghalegaun-ghanpokhara-village-tour",
      "chitwan-national-park-tour-3-days",
      "everest-view-trek",
      "kathmandu-pokhara-tour",
    ],
    tripsNote: "Treks and tours that work well for families, from village stays to short Himalayan treks.",
    relatedPosts: [
      "poon-hill-trek-guide",
      "altitude-sickness-in-nepal-prevention-and-treatment",
      "vaccinations-for-trekking-in-nepal",
      "short-treks-from-pokhara",
      "travel-insurance-for-trekking-in-nepal",
      "chitwan-national-park-guide",
    ],
    tags: ["family trekking", "trekking with kids", "poon hill", "short treks", "altitude", "nepal with children"],
    meta: {
      title: "Trekking in Nepal with Children: Best Family Routes by Age",
      description:
        "Trekking in Nepal with kids: the best family routes by age, altitude advice for children, food, health and packing, and how to plan a family trek that works.",
      keywords:
        "trekking in Nepal with children, family trek Nepal, Nepal with kids, best trek for families Nepal, Poon Hill with kids, children altitude sickness, kids Everest trek, family holiday Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "how-to-choose-a-trekking-company-in-nepal",
    title: "How to Choose a Trekking Company in Nepal: 15 Questions to Ask Before You Book",
    cluster: "guides",
    date: "2026-11-27",
    hero: {
      image: trekImage("annapurna-circuit-trek", "00-annapurna-range-between-ledar-and-thorong-phedi"),
      alt: "The Annapurna range seen from the trail between Ledar and Thorong Phedi on the Annapurna Circuit.",
    },
    excerpt:
      "There are thousands of trekking companies in Nepal and most of their websites look the same. Since 2023 most trekkers must book through one. The 15 questions that separate a good operator from a risky one, the red flags to watch for, and what a fair price actually pays for.",
    intro: [
      {
        p: "Since 1 April 2023, foreign trekkers in Nepal's national parks and conservation areas have had to walk with a licensed guide, which in practice means booking through a registered trekking company. There are thousands of them, from one-person offices in Thamel to large international operators, and on the internet they can be hard to tell apart. Every website has mountain photos, a list of treks and five-star reviews.",
      },
      {
        p: "The company you choose decides who walks beside you for two weeks, what happens if you fall ill at 5,000 m, and whether the people carrying your bag are treated fairly. This guide gives you fifteen questions that reveal the difference between a good operator and a risky one. Ask them of anyone you are considering, including us.",
      },
    ],
    sections: [
      {
        h2: "Why the Choice Matters More Than It Used To",
        blocks: [
          {
            p: "Before 2023 many people trekked independently on the popular routes. Now a licensed guide is required in protected areas, and restricted areas such as Manaslu, Upper Mustang and Upper Dolpo have always required a registered agency, a licensed guide and at least two trekkers. Our [[post:guides-and-porters-in-nepal-rules-and-costs|guide to the rules on guides and porters]] explains the details.",
          },
          {
            p: "That means your trekking company is no longer an optional extra. It handles your permits, chooses your guide, sets the pace of your ascent, books your lodges and flights, and is the first call if something goes wrong. A good one makes the trek safer and richer. A poor one can make it dangerous.",
          },
        ],
      },
      {
        h2: "Is the Company Legitimate?",
        blocks: [
          { h3: "1. Are you registered with Nepal's Department of Tourism?" },
          {
            p: "Every trekking agency must hold a licence from the Department of Tourism and be registered as a company in Nepal. Ask for the registration details. A real company will give them without hesitation.",
          },
          { h3: "2. Are you a member of TAAN?" },
          {
            p: "The Trekking Agencies' Association of Nepal (TAAN) is the industry body for trekking companies. Membership is a basic sign that a company is established and accountable. For peak climbing, the company should also be able to arrange Nepal Mountaineering Association permits.",
          },
          { h3: "3. Where are you, and who are you?" },
          {
            p: "Look for a real office address in Nepal, named people you can speak to, and someone who answers questions in detail rather than with a sales script. Many good companies are small. What matters is that you know who is responsible for your trip.",
          },
        ],
      },
      {
        h2: "Who Will Be on the Trail With You?",
        blocks: [
          { h3: "4. Who exactly will be my guide?" },
          {
            p: "Ask for your guide's name, how many times they have walked your route, which languages they speak and whether they hold a government trekking guide licence. Ask whether they have wilderness first-aid training and know the signs of altitude sickness. A good company will tell you who you are getting before you arrive.",
          },
          { h3: "5. How big is the group, and how many guides?" },
          {
            p: "On a group departure, ask the maximum group size and how many guides it has. With a large group, a second guide or an assistant means that if one person has to descend, someone can go with them without ending everyone else's trek.",
          },
          { h3: "6. How do you treat your porters?" },
          {
            p: "Porters are the backbone of the trekking industry and its most vulnerable workers. Ask what maximum load each porter carries (many responsible operators work to around 20 to 25 kg), whether they are given proper boots, warm clothing and sunglasses for high routes, where they sleep and eat, and what happens if a porter falls ill. Organisations such as the International Porter Protection Group publish guidelines worth reading.",
          },
          { h3: "7. Are your guides and porters insured?" },
          {
            p: "Your trekking staff should be insured by the company for accidents and rescue, just as you are. Ask.",
          },
        ],
      },
      {
        h2: "Is the Trek Itself Safe and Realistic?",
        blocks: [
          { h3: "8. Does the itinerary allow enough acclimatisation?" },
          {
            p: "Above 3,000 m, sleeping altitude should rise by no more than 300 to 500 m a night, with a rest day every three or four days. Compare the itinerary with that rule. An Everest Base Camp trek that reaches base camp on day six from Lukla is cutting corners, and so is any route with no rest days. Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude guide]] explains why.",
          },
          { h3: "9. What happens if I get altitude sickness or am injured?" },
          {
            p: "Ask how the guide decides when someone must descend, what medical kit and oxygen they carry, how they call for help from places without phone signal, and how a helicopter evacuation is arranged and paid for. The answer should be clear and specific.",
          },
          {
            p: "It is also worth asking how evacuation decisions are made. In 2018 Nepal's government investigated a fraud in which some operators pushed trekkers into unnecessary helicopter rescues to bill their insurers. A good company calls a helicopter when the guide's judgement or a doctor says it is needed, and not otherwise.",
          },
          { h3: "10. What happens if flights or weather delay us?" },
          {
            p: "Lukla and Jomsom flights are cancelled in poor visibility, and storms can close passes for a day or two. Ask how many buffer days the plan includes, what extra days cost, and whether the company will rebook flights for you. Our [[post:lukla-flight-delays-peak-season-backup-plans|guide to Lukla delays]] explains why this matters.",
          },
        ],
      },
      {
        h2: "Price, Payment and Small Print",
        blocks: [
          { h3: "11. What exactly is included?" },
          {
            p: "Get a written list. Check permits and TIMS, airport transfers, domestic flights, Kathmandu hotels, lodges and meals on the trek, drinking water, the guide's and porters' wages, food, lodging and insurance, and any equipment such as sleeping bags or down jackets. Many price differences between companies disappear once you compare what is actually included.",
          },
          { h3: "12. Why is your price higher or lower than others?" },
          {
            p: "A good company can explain its price. Fair wages, insured staff, experienced guides, decent lodges and a realistic itinerary cost money. If one quote is far below the rest, ask what is missing. It is usually the staff, the safety margin or the inclusions. Our [[post:how-much-does-trekking-in-nepal-cost|trekking cost guide]] shows where the money goes.",
          },
          { h3: "13. How do I pay, and what if I cancel?" },
          {
            p: "Ask how much deposit is required, when the balance is due, how payment is made, and what the cancellation and refund policy is. Pay by a traceable method, and be cautious of anyone who wants the full amount in advance to a personal account.",
          },
        ],
      },
      {
        h2: "Reputation and Values",
        blocks: [
          { h3: "14. What do past trekkers say?" },
          {
            p: "Read recent reviews on independent sites, not only the company's own website. Look for reviews that mention guides by name and describe specific moments, including how problems were handled. A few honest complaints with a thoughtful reply are often more reassuring than a wall of perfect scores.",
          },
          { h3: "15. How do you look after the places you trek through?" },
          {
            p: "Ask about rubbish (is it carried out from high camps?), whether the company uses locally owned lodges, how it supports the communities on its routes, and how it briefs trekkers on local customs. Our [[post:responsible-trekking-in-nepal|responsible trekking guide]] explains what good practice looks like.",
          },
        ],
      },
      {
        h2: "Red Flags",
        blocks: [
          {
            ul: [
              "A price far below every other quote for the same trek, with no clear explanation.",
              "No written itinerary or list of what is included.",
              "An itinerary that gains altitude too fast or has no rest days.",
              "Vague answers about who your guide will be, or about rescue and insurance.",
              "Pressure to pay the full amount immediately, or to a personal account.",
              "Promises that you can trek a restricted area alone or without a permit.",
              "No registration details, or a reluctance to share them.",
              "Reviews that are all perfect, all recent and all vague.",
            ],
          },
          {
            figure: {
              image: trekImage("everest-base-camp-trek", "04-namche-bazaar-from-hotel-everest-view-trail"),
              alt: "Namche Bazaar built in a bowl in the Khumbu hills, seen from the trail above the town with snow-streaked peaks behind.",
              caption:
                "Namche Bazaar, where a properly paced Everest itinerary spends a rest day. A company that skips it is cutting corners. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Ask Us",
        blocks: [
          {
            p: "We are a Nepali trekking company, and we would rather you asked us these fifteen questions than booked with anyone, ourselves included, without asking them. Send them through our <a href=\"/contact\">contact page</a> and we will answer each one in writing, usually within 24 hours.",
          },
          {
            p: "Every trek on our <a href=\"/treks\">treks page</a> has a full day-by-day itinerary and a list of what is and isn't included, so you can compare like with like. Our most popular routes are the [[trek:everest-base-camp-trek|Everest Base Camp trek]], the [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]], the [[trek:annapurna-circuit-trek|Annapurna Circuit]] and the [[trek:manaslu-circuit-trek|Manaslu Circuit]]. If this is your first time, our guide to [[post:first-time-trekking-in-nepal-what-to-know|trekking in Nepal for the first time]] is a good place to start.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a trekking company to trek in Nepal?",
        answer:
          "In most cases, yes. Since 1 April 2023 foreign trekkers in Nepal's national parks and conservation areas must be accompanied by a licensed guide, which in practice means booking through a registered trekking company. Restricted areas have always required an agency.",
      },
      {
        question: "How do I know if a Nepal trekking company is legitimate?",
        answer:
          "Ask for its Department of Tourism licence and company registration, check whether it is a member of the Trekking Agencies' Association of Nepal (TAAN), look for a real office address and named staff, and read recent reviews on independent sites.",
      },
      {
        question: "What is TAAN?",
        answer:
          "The Trekking Agencies' Association of Nepal, the industry association for registered trekking companies. Membership is a basic sign that a company is established and accountable.",
      },
      {
        question: "Should I book a trekking company before I arrive or in Kathmandu?",
        answer:
          "For peak season, restricted areas, Lukla flights or a particular guide, book in advance. In quieter months you can book in Kathmandu, but you will have less time to check the company and less choice of dates.",
      },
      {
        question: "Why are some Nepal treks so much cheaper than others?",
        answer:
          "Usually because something is missing: fewer inclusions, less experienced or uninsured staff, lower porter wages, a faster itinerary or cheaper lodges. Compare written lists of inclusions before comparing prices.",
      },
      {
        question: "What should be included in a Nepal trek package?",
        answer:
          "Typically permits and TIMS, airport transfers, domestic flights or road transport, lodges and meals on the trek, a licensed guide and porters with their wages, food, lodging and insurance. Check whether Kathmandu hotels, drinking water and equipment hire are included.",
      },
      {
        question: "How much weight should a porter carry?",
        answer:
          "Many responsible operators limit loads to around 20 to 25 kg per porter. Ask your company what its limit is and how it equips porters for cold, high routes.",
      },
      {
        question: "How many acclimatisation days should a trek include?",
        answer:
          "Above 3,000 m, sleeping altitude should rise by no more than 300 to 500 m a night, with a rest day every three or four days. On the Everest Base Camp trek that usually means rest days at Namche Bazaar and Dingboche.",
      },
      {
        question: "What should a trekking company do in an emergency?",
        answer:
          "Recognise altitude sickness and injury early, descend when needed, carry a first aid kit, have a way to call for help from remote areas, and arrange a helicopter evacuation through your insurer when a guide's judgement or a doctor says it is needed.",
      },
      {
        question: "Is it better to book a group or a private trek?",
        answer:
          "Group departures are cheaper and sociable. Private treks cost more but let you set the pace, the dates and the itinerary, which suits families, older trekkers and anyone who wants flexibility.",
      },
      {
        question: "Are online reviews of trekking companies reliable?",
        answer:
          "Use them with care. Read recent reviews on independent sites, look for specific details such as guides' names and how problems were handled, and be wary of companies whose reviews are all perfect, recent and vague.",
      },
      {
        question: "What questions should I ask a trekking company before booking?",
        answer:
          "Ask about registration and TAAN membership, who your guide will be, group size, porter welfare, staff insurance, acclimatisation, emergencies, buffer days, inclusions, price, payment and cancellation, reviews and responsible practices.",
      },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "annapurna-circuit-trek",
      "manaslu-circuit-trek",
      "langtang-valley-trek",
      "poonhill-trek",
    ],
    tripsNote: "Our most-booked treks. Every one has a full itinerary and a written list of what is included.",
    relatedPosts: [
      "guides-and-porters-in-nepal-rules-and-costs",
      "how-much-does-trekking-in-nepal-cost",
      "first-time-trekking-in-nepal-what-to-know",
      "travel-insurance-for-trekking-in-nepal",
      "responsible-trekking-in-nepal",
      "nepal-trekking-permits-explained",
    ],
    tags: ["trekking company", "trekking agency", "booking a trek", "guides and porters", "trek planning", "safety"],
    meta: {
      title: "How to Choose a Trekking Company in Nepal: 15 Questions",
      description:
        "15 questions to ask a Nepal trekking company before you book: licences and TAAN, guides, porter welfare, acclimatisation, rescue, inclusions, price and red flags.",
      keywords:
        "how to choose a trekking company Nepal, best trekking agency Nepal, Nepal trekking company, TAAN, licensed trekking guide Nepal, porter welfare, trekking agency questions, Nepal trek booking",
    },
  },
];
