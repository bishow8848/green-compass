import type { BlogContent } from "./build";
import { trekImage } from "./images";

/**
 * November 2026 series: the winter articles. Annapurna Base Camp in December
 * (Tuesday 17 November) and keeping warm on a winter trek (Tuesday 24
 * November), written for people booking December and January departures.
 *
 * Temperatures are given as typical ranges for clear nights, not records, and
 * are labelled that way. The cold-injury first aid follows the Wilderness
 * Medical Society's published guidance and stops at first aid: the advice is
 * always to get the person down and to medical care.
 */
export const winterA: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "annapurna-base-camp-trek-in-december",
    title: "Annapurna Base Camp Trek in December: Cold, Clear and Quiet",
    cluster: "winter",
    date: "2026-11-17",
    hero: {
      image: trekImage("annapurna-base-camp-trek", "00-annapurna-base-camp-perspective"),
      alt: "The ring of snow peaks around Annapurna Base Camp in clear weather.",
    },
    excerpt:
      "December is one of the best-kept secrets of the Annapurna Base Camp trek: settled weather, the clearest views of the year and a fraction of the October crowds, in exchange for nights well below freezing at the top. What the weather is like, what changes on the trail, the avalanche section, and how to pack.",
    intro: [
      {
        p: "Ask a guide which month they like best for the [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] and many will say December. The autumn crowds have gone, the sky is usually clear from dawn to dusk, and the great wall of peaks around the sanctuary is plastered in snow. The trade-off is cold: nights at base camp fall well below freezing, the days are short, and the upper gorge needs more care after snowfall than it does in October.",
      },
      {
        p: "This guide covers what December is really like on the route, what changes in the lodges and on the trail, the one section that needs respect, and the kit that makes the difference between a cold night and a miserable one.",
      },
    ],
    sections: [
      {
        h2: "Annapurna Base Camp in December at a Glance",
        blocks: [
          {
            table: {
              head: ["", ""],
              rows: [
                ["<strong>Weather</strong>", "Mostly dry and settled, with clear mornings. A passing winter storm can bring snow for a day or two"],
                ["<strong>Daytime at base camp</strong>", "Around 0 to 8°C in sunshine, much colder in wind or cloud"],
                ["<strong>Night at base camp</strong>", "Typically −10 to −15°C on a clear night"],
                ["<strong>Pokhara</strong>", "Pleasant: around 20°C by day and 7 to 8°C at night"],
                ["<strong>Daylight</strong>", "About ten and a half hours: sunrise around 6:45 AM, sunset around 5:10 PM"],
                ["<strong>Crowds</strong>", "Far fewer than in October and November, apart from the Christmas and New Year week"],
                ["<strong>Lodges</strong>", "Open all the way to base camp, with fewer guests and simpler menus higher up"],
                ["<strong>Permits</strong>", "ACAP permit and TIMS card; a licensed guide is required"],
              ],
              note: "Temperatures are typical ranges for clear December days and nights, not records. Wind and cloud make it feel much colder.",
            },
          },
        ],
      },
      {
        h2: "December Weather on the Route",
        blocks: [
          {
            p: "By December the post-monsoon clearing is complete and the dry season has settled in. Most days start cloudless, and the views of Annapurna South, Hiunchuli and Machhapuchhre from the lower villages are as sharp as they get all year. In the afternoon cloud sometimes builds in the gorge and clears again overnight. Rain at low altitude is rare.",
          },
          {
            p: "The thing to watch for is the occasional winter storm. Weather systems from the west, known in Nepal as western disturbances, cross the Himalaya a few times each winter and can drop fresh snow on the upper route for a day or two. They are forecast several days ahead, and our guides keep an eye on them. This year the high peaks are already whiter than usual after the snow brought by Cyclone Arnab at the end of October, and our [[post:cyclone-arnab-over-nepal-trekking-open-november-2026|post-storm update]] covers what that did on the trail.",
          },
          {
            p: "Altitude makes all the difference to how cold it feels. Pokhara is warm. Chhomrong and Sinuwa, at around 2,200 m, are crisp by night and pleasant in the afternoon sun. From Deurali upwards you are in winter, and at Machhapuchhre Base Camp (3,700 m) and Annapurna Base Camp (4,130 m) the cold after sunset is serious, though the sunshine on a still day is surprisingly warm.",
          },
        ],
      },
      {
        h2: "What Changes on the Trail in December",
        blocks: [
          {
            ul: [
              "<strong>Fewer people.</strong> The trail and lodges are much quieter than in the peak autumn months, and you are more likely to have a room to yourself and a seat near the stove. The exception is the week from Christmas to New Year, when trekkers from Kathmandu and abroad come up on holiday.",
              "<strong>Short days.</strong> With sunset at about 5:10 PM and the gorge in shade earlier still, your guide will want to start promptly and arrive by mid-afternoon. Walking after dark in the cold is no fun.",
              "<strong>Cold rooms.</strong> Lodge bedrooms are not heated. The dining room usually has a stove in the evening, and everyone gathers around it. A good sleeping bag matters more than anything else you carry.",
              "<strong>Frozen water.</strong> Water bottles left out freeze overnight above Deurali. Sleep with yours inside your sleeping bag, and ask the lodge for boiling water to fill it before bed.",
              "<strong>Snow and ice underfoot.</strong> Above Deurali the trail may be snow-covered, and shaded sections freeze hard in the morning. Light microspikes make these sections much safer and are worth packing.",
              "<strong>Cold showers.</strong> Solar-heated showers are weak or absent in winter higher up. Many trekkers wait for the hot springs at Jhinu Danda on the way down, and they are wonderful after a cold week.",
              "<strong>Charging and Wi-Fi.</strong> Batteries drain fast in the cold and charging costs more higher up. Keep your phone in an inside pocket by day and in your sleeping bag at night.",
            ],
          },
          {
            figure: {
              image: trekImage("annapurna-base-camp-trek", "05-beautiful-flower-and-mt-machhapuchchhre"),
              alt: "Pink cosmos flowers in the foreground with the sharp summit of Machhapuchhre against a pale blue sky behind.",
              caption:
                "Machhapuchhre from the lower part of the route. The late-season flowers fade through December, but the views stay clear. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "The Avalanche Section: Deurali to Machhapuchhre Base Camp",
        blocks: [
          {
            p: "Above Bamboo the trail enters the upper gorge of the Modi Khola, a deep, narrow valley with steep walls on both sides. Between Hinku Cave, Deurali and Machhapuchhre Base Camp, avalanches can come down from the slopes above and cross the trail. It is the one part of the route that needs real respect, and it matters more in winter than in autumn.",
          },
          {
            p: "The risk rises after heavy snowfall, when slopes above the trail are loaded and the sun begins to warm them. In January 2020 an avalanche near Deurali swept away a group of South Korean trekkers and their Nepali guides. Most December days are dry and the danger is low, but after a storm it is not.",
          },
          {
            ul: [
              "<strong>Ask before you cross.</strong> Our guides check with the lodges at Deurali and with people coming down before committing to the upper gorge after any new snow.",
              "<strong>Cross early.</strong> Snow is firmest and slopes most stable in the early morning, before the sun reaches them.",
              "<strong>Follow local advice.</strong> Lodge owners and conservation-area staff know which slopes have been running. If they point you to a different line or tell you to wait, do as they say, even if it is slower.",
              "<strong>Wait a day if in doubt.</strong> An extra night at Deurali or Bamboo costs very little. Keep a spare day in your plan so that waiting is easy.",
            ],
          },
          {
            figure: {
              image: trekImage("annapurna-base-camp-trek", "01-abc-deurali-on-the-annapurna-base-camp-trek-nepal-2016"),
              alt: "The steep, cloud-filled upper Modi Khola gorge near Deurali, with blue-roofed lodges on the valley floor below.",
              caption:
                "The upper Modi Khola gorge at Deurali. The steep walls that make the approach so dramatic are also where avalanches come from after heavy snow. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "A December Itinerary",
        blocks: [
          {
            p: "Our nine-day [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] works well in December as it stands. The table shows the plan and what to expect each day in winter.",
          },
          {
            table: {
              head: ["Day", "Route", "December notes"],
              rows: [
                ["1", "Arrive in Kathmandu (1,400 m)", "Rent a four-season sleeping bag or down jacket in Thamel if you need one"],
                ["2", "Drive to Pokhara (822 m)", "Warm and sunny; a good evening by the lake"],
                ["3", "Drive to Jhinu Danda (1,780 m), trek to Lower Sinuwa (2,340 m)", "Crisp night; the first real cold"],
                ["4", "Lower Sinuwa to Deurali (3,230 m)", "Start early: the gorge goes into shade by mid-afternoon. Below freezing at night"],
                ["5", "Deurali to Annapurna Base Camp (4,130 m)", "The avalanche section, crossed in the morning after a conditions check. Very cold night at the top"],
                ["6", "Sunrise at base camp, descend to Bamboo (2,310 m)", "The coldest and most beautiful morning of the trek; sunrise reaches the peaks around 6:45 AM"],
                ["7", "Bamboo to Jhinu Danda (1,780 m), drive to Pokhara", "Stop at the hot springs below Jhinu before the drive"],
                ["8", "Drive to Kathmandu", "–"],
                ["9", "Depart Kathmandu", "–"],
              ],
            },
          },
          {
            p: "Two December variations are worth considering. If you are worried about the cold at 4,130 m, you can sleep at Machhapuchhre Base Camp and walk up to Annapurna Base Camp before dawn for the sunrise. And if you have more time, the [[trek:annapurna-base-camp-trek-with-ghorepani-poonhill-trek|Annapurna Base Camp trek with Ghorepani Poon Hill]] adds the famous sunrise viewpoint at 3,210 m, which is spectacular in clear winter air. If you are starting from Pokhara, the [[trek:annapurna-base-camp-trek-from-pokhara|five-day version from Pokhara]] fits into a shorter holiday.",
          },
        ],
      },
      {
        h2: "December, November or January?",
        blocks: [
          {
            table: {
              head: ["", "November", "December", "January"],
              rows: [
                ["Weather", "Settled and clear", "Settled, colder", "Coldest month; more chance of snow"],
                ["Nights at base camp", "Around −5 to −10°C", "Around −10 to −15°C", "Often −15°C or colder"],
                ["Crowds", "Busiest month of the year", "Quiet, except Christmas to New Year", "Quietest"],
                ["Snow on the upper trail", "Occasional", "Likely in places", "Likely, sometimes deep"],
                ["Avalanche risk", "Low", "Low, higher after storms", "Higher after storms"],
              ],
              note: "Typical conditions; every season has exceptions. Our [[post:annapurna-base-camp-trek-in-november|November guide]] covers the busier month in detail.",
            },
          },
          {
            p: "For most people December is the sweet spot: almost November's weather with a fraction of its crowds. January is for those who don't mind real cold and are flexible about dates.",
          },
        ],
      },
      {
        h2: "What to Pack for December",
        blocks: [
          {
            p: "The standard [[post:nepal-trekking-packing-list|Nepal packing list]] applies, with these winter additions:",
          },
          {
            ul: [
              "<strong>A four-season sleeping bag</strong> with a comfort rating of around −10°C or lower, and a liner. You can rent good ones in Kathmandu and Pokhara.",
              "<strong>A warm down jacket</strong> for evenings and early mornings at base camp.",
              "<strong>Insulated gloves or mittens</strong>, plus thin liner gloves for taking photos.",
              "<strong>A warm hat and a buff</strong> for your neck and face.",
              "<strong>Light microspikes</strong> for icy morning trails above Deurali.",
              "<strong>Gaiters</strong> if there has been recent snow.",
              "<strong>A wide-mouth water bottle</strong> that can take boiling water, to use as a hot water bottle at night.",
              "<strong>Sunglasses and strong sunscreen.</strong> Sun on snow at 4,000 m burns quickly, even in winter.",
              "<strong>Spare batteries or a power bank</strong>, kept warm.",
            ],
          },
          {
            p: "Our guide to [[post:staying-warm-on-a-winter-trek-in-nepal|staying warm on a winter trek]] explains layering, sleeping warm and how to recognise frostbite and hypothermia.",
          },
        ],
      },
      {
        h2: "Christmas, New Year and Tamu Lhosar on the Trail",
        blocks: [
          {
            p: "Christmas Day is a public holiday in Nepal, and the lodges along the route are used to foreign trekkers celebrating it; some make a special dinner. New Year's Eve is busy with groups from Kathmandu and Pokhara, so book that week early.",
          },
          {
            p: "On 30 December the Gurung villages along the lower route, including Ghandruk, Landruk and Chhomrong, celebrate <strong>Tamu Lhosar</strong>, the Gurung New Year, with dances, music and food. Walking through on that day is a real treat. Our guide to [[post:christmas-and-new-year-in-nepal|Christmas and New Year in Nepal]] has more ideas for the holiday period.",
          },
          {
            figure: {
              image: trekImage("annapurna-base-camp-trek", "03-ghandruk-jhinudanda-54-modi-khola-dorf-2013-gje"),
              alt: "A hillside village of red- and blue-roofed houses among trees above the boulder-strewn Modi Khola river.",
              caption:
                "A Gurung village above the Modi Khola on the lower part of the route, where Tamu Lhosar is celebrated at the end of December. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Book Annapurna Base Camp for December",
        blocks: [
          {
            p: "We run the [[trek:annapurna-base-camp-trek|Annapurna Base Camp trek]] throughout December, and our guides check the upper gorge before every crossing. If you want to combine it with something else, the [[trek:mardi-himal-trek-with-annapurna-base-camp|Mardi Himal and Annapurna Base Camp trek]] adds a ridge walk with close views of Machhapuchhre, and if the cold or the time does not suit you, the [[trek:annapurna-base-camp-helicopter-tour|Annapurna Base Camp helicopter tour]] reaches the sanctuary in a morning.",
          },
          {
            p: "Send us your dates through the trek page or our <a href=\"/contact\">contact page</a> and we will reply within 24 hours. Our [[post:annapurna-base-camp-trek-complete-guide|complete guide to Annapurna Base Camp]] covers the route in every season.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is December a good month for the Annapurna Base Camp trek?",
        answer:
          "Yes. December has settled, dry weather, the clearest views of the year and far fewer trekkers than October and November. The trade-off is cold nights, typically −10 to −15°C at base camp, and a greater need for care in the upper gorge after snowfall.",
      },
      {
        question: "How cold is Annapurna Base Camp in December?",
        answer:
          "On a clear night it is typically −10 to −15°C, and colder in wind. In sunshine during the day it can be pleasant, around 0 to 8°C, but it drops sharply once the sun leaves the sanctuary in the afternoon.",
      },
      {
        question: "Is there snow on the Annapurna Base Camp trail in December?",
        answer:
          "Usually above Deurali, and sometimes from Machhapuchhre Base Camp upwards only. How much depends on recent storms. The lower trail through the villages and forest is normally clear.",
      },
      {
        question: "Is the Annapurna Base Camp trek dangerous in winter?",
        answer:
          "The main risk is avalanches in the upper Modi Khola gorge between Hinku Cave, Deurali and Machhapuchhre Base Camp after heavy snowfall. On most December days the risk is low. Experienced guides check conditions before crossing and wait a day if needed.",
      },
      {
        question: "Are lodges open on the Annapurna Base Camp trek in December?",
        answer:
          "Yes. Lodges are open all the way to base camp in December, though menus are simpler higher up. Bedrooms are unheated, and the dining room usually has a stove in the evening.",
      },
      {
        question: "Do I need microspikes for Annapurna Base Camp in December?",
        answer:
          "They are strongly recommended. Shaded sections above Deurali freeze hard in the morning, and light microspikes that slip over your boots make them much safer. Crampons and ice axes are not needed.",
      },
      {
        question: "What sleeping bag do I need for Annapurna Base Camp in December?",
        answer:
          "A four-season bag with a comfort rating of about −10°C or lower, plus a liner. Lodges provide blankets, but a good bag makes the difference at Machhapuchhre Base Camp and Annapurna Base Camp. You can rent one in Kathmandu or Pokhara.",
      },
      {
        question: "Is it crowded at Annapurna Base Camp in December?",
        answer:
          "No, apart from the week between Christmas and New Year, when holiday groups come up. The rest of December is one of the quietest times of the dry season.",
      },
      {
        question: "Is December or January better for Annapurna Base Camp?",
        answer:
          "December, for most people. It has nearly the same clear weather with less cold and less snow. January is the coldest month and has a higher chance of storms and avalanche risk in the upper gorge.",
      },
      {
        question: "How many days do I need for Annapurna Base Camp in December?",
        answer:
          "Our standard trek takes nine days from Kathmandu, or five days from Pokhara. In winter it is worth adding one spare day in case you need to wait out a storm before crossing the upper gorge.",
      },
      {
        question: "Can I see the sunrise at Annapurna Base Camp in December?",
        answer:
          "Yes, and it is one of the highlights of the trek. The first light reaches the peaks around 6:45 AM. It is bitterly cold while you wait, so wear everything you have.",
      },
      {
        question: "What permits do I need for Annapurna Base Camp?",
        answer:
          "An ACAP (Annapurna Conservation Area) permit and a TIMS card, and you must trek with a licensed guide. We arrange the permits as part of the trek.",
      },
    ],
    relatedTreks: [
      "annapurna-base-camp-trek",
      "annapurna-base-camp-trek-from-pokhara",
      "annapurna-base-camp-trek-with-ghorepani-poonhill-trek",
      "mardi-himal-trek-with-annapurna-base-camp",
      "poonhill-trek",
      "annapurna-base-camp-helicopter-tour",
    ],
    tripsNote: "Annapurna Base Camp in its different forms, all running through December.",
    relatedPosts: [
      "annapurna-base-camp-trek-complete-guide",
      "annapurna-base-camp-trek-itinerary",
      "staying-warm-on-a-winter-trek-in-nepal",
      "trekking-in-nepal-in-december",
      "winter-trekking-in-nepal-best-routes",
      "annapurna-base-camp-trek-in-november",
    ],
    tags: ["annapurna base camp", "december", "winter trekking", "abc trek", "annapurna region", "trek weather"],
    meta: {
      title: "Annapurna Base Camp Trek in December: Weather, Snow, Crowds",
      description:
        "Annapurna Base Camp in December: clear skies, few crowds, −10 to −15°C nights at the top. Weather, snow, the avalanche section, an itinerary and what to pack.",
      keywords:
        "Annapurna Base Camp trek December, ABC trek in December, Annapurna Base Camp weather December, Annapurna Base Camp winter, ABC trek snow, Annapurna Base Camp temperature, winter trekking Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "staying-warm-on-a-winter-trek-in-nepal",
    title: "Staying Warm on a Winter Trek in Nepal: Layers, Sleeping Bags, Frostbite and Hypothermia",
    cluster: "winter",
    date: "2026-11-24",
    hero: {
      image: trekImage("everest-base-camp-trek-with-helicopter-return", "02-gorak-shep-06-kala-patthar-pumori-2007-gje"),
      alt: "Trekkers crossing a stony moraine near Gorak Shep, with the snow pyramid of Pumori and the brown slopes of Kala Patthar behind.",
    },
    excerpt:
      "From December to February the high trails of Nepal are clear, quiet and very cold, with nights of −15°C or lower at Gorak Shep and Thorong Phedi. How to layer, how to sleep warm in an unheated lodge, what sleeping bag ratings mean, and how to recognise and deal with frostbite and hypothermia.",
    intro: [
      {
        p: "Winter in the Himalaya is one of the most rewarding times to trek. The air is at its clearest, the trails are quiet and the mountains are covered in snow. It is also cold in a way that few people have experienced at home: not for an hour on a ski slope, but day after day, in lodges with no heating, where the water in your bottle freezes beside your bed.",
      },
      {
        p: "None of this is a reason not to go. It is a reason to prepare. This guide covers how cold it actually gets, how to dress and sleep so that you stay warm, the small habits that make the biggest difference, and how to recognise the two cold injuries that matter, frostbite and hypothermia, before they become serious.",
      },
    ],
    sections: [
      {
        h2: "How Cold Does It Get?",
        blocks: [
          {
            p: "Temperature falls by roughly six degrees for every thousand metres you climb, and clear winter nights lose heat fast. These are typical night-time lows from December to February:",
          },
          {
            table: {
              head: ["Place", "Altitude", "Typical winter night", "Route"],
              rows: [
                ["Ghorepani", "2,860 m", "−2 to −6°C", "[[trek:poonhill-trek|Poon Hill]]"],
                ["Namche Bazaar", "3,440 m", "−6 to −10°C", "[[trek:everest-base-camp-trek|Everest Base Camp]], [[trek:everest-view-trek|Everest View]]"],
                ["Kyanjin Gompa", "3,870 m", "−10 to −15°C", "[[trek:langtang-valley-trek|Langtang Valley]]"],
                ["Annapurna Base Camp", "4,130 m", "−10 to −15°C", "[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]"],
                ["Dingboche", "4,410 m", "−12 to −18°C", "Everest Base Camp"],
                ["Gokyo", "4,790 m", "−15 to −20°C", "[[trek:gokyo-lake-trek|Gokyo Lakes]]"],
                ["Gorak Shep", "5,160 m", "−15 to −25°C", "Everest Base Camp"],
                ["Thorong Phedi", "4,450 m", "−15 to −20°C", "[[trek:annapurna-circuit-trek|Annapurna Circuit]]"],
              ],
              note: "Typical ranges on clear nights, not records. Wind chill can make it feel ten degrees colder. The sun on a still day can be surprisingly warm even at high altitude.",
            },
          },
          {
            p: "Daytime is a different story. On a still, sunny winter day you may walk in a base layer and a light fleece even above 4,000 m. The cold arrives fast when the sun drops behind a ridge, usually by mid-afternoon in the deep valleys, and that is when you need to be ready for it.",
          },
        ],
      },
      {
        h2: "Dressing in Layers",
        blocks: [
          {
            p: "The rule is simple: several thin layers you can add and remove, rather than one thick coat. You warm up quickly walking uphill and cool down fast when you stop, and sweat is the enemy, because damp clothing loses its insulation.",
          },
          {
            table: {
              head: ["Layer", "What it does", "What to bring"],
              rows: [
                ["Base layer", "Moves sweat away from your skin", "Merino wool or synthetic long-sleeved top and leggings. No cotton"],
                ["Mid layer", "Traps warm air while you walk", "A fleece or light synthetic jacket"],
                ["Insulation", "Keeps you warm when you stop", "A down jacket, ideally with a hood, warm enough to sit outside at sunrise"],
                ["Shell", "Blocks wind and snow", "A waterproof, windproof jacket and over-trousers"],
                ["Legs", "Often forgotten", "Trekking trousers over leggings; insulated trousers for the coldest nights"],
              ],
            },
          },
          { h3: "Head, hands and feet" },
          {
            p: "Your extremities are where the cold bites first and where frostbite happens. Give them more attention than you think they need.",
          },
          {
            ul: [
              "<strong>Hands:</strong> thin liner gloves for photos and fiddly jobs, plus insulated gloves or, better, mittens, which keep fingers together and warmer. Carry a spare pair.",
              "<strong>Head:</strong> a warm hat that covers your ears, and a buff or neck gaiter you can pull over your nose and mouth in the wind.",
              "<strong>Feet:</strong> boots big enough to wear thick socks without squeezing your toes. Tight boots cut circulation and cause cold feet faster than thin socks. Keep a dry pair of socks just for sleeping.",
            ],
          },
          {
            p: "If you are short of anything, Thamel in Kathmandu and Lakeside in Pokhara have dozens of shops that rent or sell down jackets, sleeping bags, gloves and hats. Our [[post:nepal-trekking-packing-list|packing list]] covers the rest.",
          },
        ],
      },
      {
        h2: "Sleeping Warm in an Unheated Lodge",
        blocks: [
          {
            p: "Teahouse bedrooms in Nepal are not heated. The dining room usually has a stove, fed with wood or, higher up in the Khumbu, dried yak dung, and the evening is spent around it. The bedroom will be close to the outside temperature by morning. A good night's sleep depends on your sleeping bag and how you use it.",
          },
          { h3: "Understanding sleeping bag ratings" },
          {
            p: "Most bags are tested to the ISO 23537 standard, which gives three temperatures. The <strong>comfort</strong> rating is the temperature at which most people sleep comfortably. The <strong>limit</strong> rating is the lowest at which most people can sleep curled up without waking from cold. The <strong>extreme</strong> rating is a survival figure, the point at which there is a risk of hypothermia; ignore it when choosing a bag. Choose by the comfort rating. For the high routes in winter that means around −15°C; for Poon Hill or Langtang, around −5 to −10°C.",
          },
          { h3: "Small habits that make a big difference" },
          {
            ul: [
              "<strong>Make a hot water bottle.</strong> Ask the lodge to fill a wide-mouth bottle with boiling water before bed, close it tightly, put it in a sock and take it into your bag. It will still be warm in the morning, and your drinking water will not be frozen.",
              "<strong>Eat and drink before bed.</strong> Your body makes heat by burning food. A hot drink and something fatty or sweet before you sleep really helps.",
              "<strong>Go to the toilet before bed.</strong> Your body spends energy keeping that liquid warm, and getting up at 2 AM in −15°C is miserable.",
              "<strong>Sleep in dry clothes.</strong> Change into a dry base layer, dry socks and a hat. Damp clothes from the day's walk will chill you all night.",
              "<strong>Use a liner and the lodge blankets.</strong> A liner adds a few degrees and keeps your bag clean. Lodges supply thick blankets on request; put one over your bag.",
              "<strong>Don't breathe into your bag.</strong> Moisture from your breath dampens the insulation. Pull the hood tight around your face instead.",
              "<strong>Keep batteries and electronics inside the bag.</strong> Cold drains lithium batteries quickly. Your phone, power bank and camera battery should sleep with you.",
            ],
          },
          {
            figure: {
              image: trekImage("poonhill-trek-from-pokhara", "00-tea-house-in-tadapani-ghandruk-nepal-4402"),
              alt: "A two-storey blue and white teahouse lodge at Tadapani on the Poon Hill route, among trees with a flagpole and a stone path in front.",
              caption:
                "A teahouse at Tadapani. Bedrooms like these are unheated; the warmth is in the dining room stove and in your sleeping bag. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Frostbite: Recognising It and What to Do",
        blocks: [
          {
            p: "Frostbite is the freezing of skin and the tissue beneath it. It most often affects fingers, toes, the nose, cheeks and ears. On a teahouse trek it is uncommon, but it does happen, usually on a long, cold early start (the pre-dawn climb to Kala Patthar or the Thorong La) or to someone with tight boots or wet gloves.",
          },
          { h3: "The signs" },
          {
            ul: [
              "<strong>Frostnip</strong>, the mild early stage: skin is cold, red or pale and numb or tingling. It recovers fully with rewarming and is a warning to act now.",
              "<strong>Superficial frostbite:</strong> the skin turns white, grey or waxy and feels hard on the surface but soft underneath. Blisters may appear after rewarming.",
              "<strong>Deep frostbite:</strong> the skin is hard, numb and white or bluish-grey, and the tissue beneath feels solid. This is a medical emergency.",
            ],
          },
          { h3: "First aid" },
          {
            ul: [
              "<strong>Get out of the cold</strong> and remove anything tight or wet: rings, wet gloves, tight boots.",
              "<strong>Frostnip:</strong> warm the area against warm skin, for example fingers in your armpits or a hand over the nose, until feeling returns.",
              "<strong>Frostbite:</strong> rewarm only when there is no chance of it freezing again, because thawing and refreezing does far more damage. The best method is immersion in warm (not hot) water at 37 to 39°C until the skin is soft and colour returns, which usually takes 15 to 30 minutes. It will be painful; ibuprofen helps.",
              "<strong>Never rub frostbitten skin</strong> or rub it with snow, and never warm it in front of a stove or fire, which can burn numb skin.",
              "<strong>Protect it afterwards:</strong> loosely dress it, don't break any blisters, and don't walk on frostbitten feet once they are thawed if you can avoid it.",
              "<strong>Get medical care.</strong> Anything beyond frostnip needs a doctor. On the trail that means descending and, if needed, a helicopter evacuation.",
            ],
          },
        ],
      },
      {
        h2: "Hypothermia: The Quiet Danger",
        blocks: [
          {
            p: "Hypothermia is a fall in the body's core temperature. It sneaks up through a combination of cold, wind, wet clothing, exhaustion and not eating enough, and it affects judgement early, so the person who has it is often the last to notice.",
          },
          {
            p: "Watch your companions, and they should watch you, for the \"umbles\": someone who <strong>stumbles, mumbles, fumbles and grumbles</strong>. Shivering, clumsiness, slurred speech and unusual irritability or apathy are all early signs.",
          },
          {
            table: {
              head: ["Stage", "Signs", "What to do"],
              rows: [
                ["Mild", "Shivering, cold hands, clumsiness, still alert and talking sense", "Get into shelter, replace wet clothes with dry, add insulation including a hat, give warm sweet drinks and food, and keep them moving gently or wrapped up"],
                ["Moderate", "Violent shivering or shivering that stops, confusion, slurred speech, very clumsy", "All of the above, but handle the person gently and keep them lying down and insulated from the ground. Only give drinks if they are fully alert. Arrange evacuation"],
                ["Severe", "Shivering stopped, drowsy or unresponsive", "A medical emergency: insulate, handle very gently, call for a helicopter rescue immediately"],
              ],
            },
          },
          {
            p: "At altitude, the early signs of hypothermia can look like altitude sickness, and the two often come together in a tired, cold trekker. If someone is confused or unsteady, treat it as serious whatever the cause, and get them warm and down. Our [[post:altitude-sickness-in-nepal-prevention-and-treatment|altitude sickness guide]] explains the overlap.",
          },
        ],
      },
      {
        h2: "Other Winter Problems and How to Avoid Them",
        blocks: [
          {
            ul: [
              "<strong>Dehydration.</strong> Cold suppresses thirst, and the dry air at altitude takes water from every breath. Drink three to four litres a day even if you don't feel like it; hot lemon, ginger tea and soup all count.",
              "<strong>Frozen water.</strong> Carry water in an insulated bottle cover and store bottles upside down in your pack: ice forms at the top first, so the opening stays clear. A small thermos of hot water is a luxury worth its weight.",
              "<strong>Cough and sore throat.</strong> Breathing cold, dry air all day irritates the throat. A buff over your mouth helps. Our guide to [[post:khumbu-cough-colds-and-chest-infections-on-a-trek|the Khumbu cough and chest infections]] covers when it becomes something more.",
              "<strong>Sunburn and snow blindness.</strong> Sun reflected off snow at altitude burns skin and eyes quickly even when it feels cold. Wear category 3 or 4 sunglasses and sunscreen on your face, ears and the underside of your nose.",
              "<strong>Ice underfoot.</strong> Shaded trails freeze hard in the morning. Light microspikes and walking poles prevent the slips that end treks.",
            ],
          },
          {
            p: "A well-stocked [[post:trekking-first-aid-kit-for-nepal|first aid kit]] should include ibuprofen, blister dressings and a few hand warmers for the coldest mornings.",
          },
          {
            figure: {
              image: trekImage("gokyo-lake-trek", "02-gokyo-lake-the-paradise"),
              alt: "The turquoise third lake at Gokyo with the lodges of Gokyo village on its shore and snow-covered peaks rising behind.",
              caption:
                "Gokyo, at 4,790 m. In midwinter the lake freezes over and nights fall to −15°C or lower. Archive photograph.",
            },
          },
        ],
      },
      {
        h2: "Which Winter Treks Suit You?",
        blocks: [
          {
            p: "If you love clear skies but not deep cold, choose a lower route. [[trek:poonhill-trek|Ghorepani Poon Hill]] and [[trek:mardi-himal-trek|Mardi Himal]] stay mostly below 3,600 m, and the [[trek:everest-view-trek|Everest View trek]] gives you the Khumbu with nights no higher than Namche. For more, [[trek:langtang-valley-trek|Langtang Valley]] and [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] reach about 4,000 m with good lodges throughout. Everest Base Camp and Gokyo in winter are for people who are well equipped and comfortable with real cold, and high passes such as the Thorong La may close after heavy snow.",
          },
          {
            p: "Our guide to [[post:winter-trekking-in-nepal-best-routes|the best winter treks]] compares the routes in detail, and [[post:everest-base-camp-trek-in-december|Everest Base Camp in December]] covers the coldest of the popular treks. If you are unsure which suits you, <a href=\"/contact\">ask us</a> and we will help you choose.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How cold is it trekking in Nepal in winter?",
        answer:
          "It depends on altitude. On a clear winter night it is typically −2 to −6°C at Ghorepani (2,860 m), −6 to −10°C at Namche Bazaar (3,440 m), −10 to −15°C at Annapurna Base Camp (4,130 m) and −15 to −25°C at Gorak Shep (5,160 m). Sunny days can be surprisingly mild.",
      },
      {
        question: "What temperature sleeping bag do I need for Nepal in winter?",
        answer:
          "Choose by the comfort rating, not the extreme rating. For high routes such as Everest Base Camp, Gokyo or the Annapurna Circuit, around −15°C comfort. For lower routes such as Poon Hill or Langtang, around −5 to −10°C. Add a liner, and use the lodge blankets.",
      },
      {
        question: "Are teahouses heated in Nepal?",
        answer:
          "Bedrooms are not. The dining room usually has a stove in the evening, burning wood or, higher in the Khumbu, dried yak dung. Expect your room to be close to the outside temperature by morning.",
      },
      {
        question: "Can I rent winter gear in Kathmandu?",
        answer:
          "Yes. Shops in Thamel and in Lakeside, Pokhara, rent down jackets and sleeping bags by the day, and sell gloves, hats and socks. Check the bag's rating and condition before you take it.",
      },
      {
        question: "What are the first signs of frostbite?",
        answer:
          "Cold, numb skin that is red, pale or tingling: this is frostnip, and it recovers with rewarming. If the skin turns white, grey or waxy and feels hard, it has become frostbite and needs careful rewarming and medical care.",
      },
      {
        question: "How do you treat frostbite on a trek?",
        answer:
          "Get out of the cold, remove wet or tight clothing and rewarm only if the area will not refreeze, ideally in warm water at 37 to 39°C for 15 to 30 minutes. Never rub it or warm it in front of a fire. Anything beyond frostnip needs descent and medical attention.",
      },
      {
        question: "What are the signs of hypothermia?",
        answer:
          "Shivering, clumsiness, slurred speech, confusion and unusual irritability or apathy, often summed up as the umbles: stumbles, mumbles, fumbles and grumbles. If shivering stops and the person becomes drowsy, it is a medical emergency.",
      },
      {
        question: "How do I keep my water from freezing on a winter trek?",
        answer:
          "Use an insulated bottle cover, carry the bottle upside down so ice forms away from the opening, and take it into your sleeping bag at night filled with hot water from the lodge.",
      },
      {
        question: "How do I keep my phone battery alive in the cold?",
        answer:
          "Keep your phone in an inside pocket during the day and in your sleeping bag at night. Cold drains lithium batteries quickly, and a cold battery may shut down even when it shows charge left. Carry a power bank and keep that warm too.",
      },
      {
        question: "Is winter a good time to trek in Nepal?",
        answer:
          "Yes, for the right person and route. December to February brings the clearest skies and the quietest trails of the year. Lower routes such as Poon Hill and Mardi Himal are comfortable; high routes are very cold, and some passes can close after heavy snow.",
      },
      {
        question: "Do I need a down jacket for trekking in Nepal in winter?",
        answer:
          "Yes. A warm down jacket, ideally with a hood, is the most important piece of clothing for evenings, early mornings and sunrise viewpoints on any winter trek above about 3,000 m.",
      },
      {
        question: "What should I eat to stay warm on a trek?",
        answer:
          "Plenty, and often. Your body makes heat from food, so eat full meals, snack through the day and have something sweet or fatty with a hot drink before bed. Dal bhat with refills is ideal.",
      },
    ],
    relatedTreks: [
      "everest-base-camp-trek",
      "annapurna-base-camp-trek",
      "gokyo-lake-trek",
      "langtang-valley-trek",
      "poonhill-trek",
      "everest-view-trek",
    ],
    tripsNote: "Winter treks from the gentle to the very cold, all running from December to February.",
    relatedPosts: [
      "winter-trekking-in-nepal-best-routes",
      "nepal-trekking-packing-list",
      "annapurna-base-camp-trek-in-december",
      "everest-base-camp-trek-in-december",
      "trekking-first-aid-kit-for-nepal",
      "khumbu-cough-colds-and-chest-infections-on-a-trek",
    ],
    tags: ["winter trekking", "cold weather", "frostbite", "hypothermia", "sleeping bag", "packing"],
    meta: {
      title: "Staying Warm on a Winter Trek in Nepal: Layers, Frostbite, Sleep",
      description:
        "How cold Nepal's trails get in winter, how to layer and sleep warm in unheated lodges, what sleeping bag ratings mean, and how to spot frostbite and hypothermia.",
      keywords:
        "winter trekking Nepal, how cold is Nepal in winter, sleeping bag rating Nepal trek, frostbite trekking, hypothermia signs, teahouse heating Nepal, staying warm trekking, Everest Base Camp winter temperature",
    },
  },
];
