import type { BlogContent } from "./build";
import { FESTIVALS, trekImage } from "./images";

/**
 * Tihar series, part 4: the festival from the trail, and through a camera.
 */
export const tiharD: BlogContent[] = [
  // ──────────────────────────────────────────────────────────────────
  {
    slug: "trekking-in-nepal-during-tihar",
    title: "Trekking in Nepal During Tihar: What Changes on the Trail",
    cluster: "tihar",
    date: "2026-11-03",
    hero: {
      image: trekImage("poonhill-trek", "02-annapurna-i-annapurna-south-and-himchuli-from-ghorepani-poon"),
      alt: "Annapurna I, Annapurna South and Hiunchuli seen from the trail near Ghorepani and Poon Hill.",
    },
    excerpt:
      "Tihar falls in the best trekking weather of the year and stops almost nothing on the trail. Lodges stay open, the sky is clear, and in the villages you may be pulled into a dance. This is what the festival changes for a trekker in 2026: permits, flights, guides, cash and which routes celebrate.",
    intro: [
      { p: "There is a moment on a November trek in the Annapurna foothills that people talk about for years afterwards. You have finished dinner in a stone lodge, the stars are out over Machhapuchhre, and a line of teenagers comes up the path with a drum, forms a circle in the yard and will not leave until every trekker in the dining room has danced. That is Tihar on the trail." },
      { p: "It is also, practically speaking, the easy festival. Dashain three weeks earlier closes offices for a week and sends half the country's guides home. Tihar closes them for four days and asks only that your guide be back for the last one. If you plan for that, the festival adds to a trek and takes nothing away. In 2026 it runs from <strong>7 to 11 November</strong>." },
    ],
    sections: [
      {
        h2: "What Stays the Same",
        blocks: [
          {
            ul: [
              "<strong>Lodges are open</strong> on every route, with full kitchens. Nobody closes a teahouse in peak season.",
              "<strong>The weather is at its best.</strong> Early November is dry and clear, and colder than October only at night. See [[post:trekking-in-nepal-in-november|trekking in November]].",
              "<strong>Trails are in good condition</strong> and the high passes are normally open.",
              "<strong>Mountain flights operate.</strong> Lukla, Pokhara and Jomsom run to schedule, weather permitting.",
              "<strong>National park and conservation checkposts</strong> on the trail are staffed.",
            ],
          },
          { p: "If you were already on the trail when the festival began and never looked at a calendar, you might notice only that the lodge dog was wearing flowers." },
        ],
      },
      {
        h2: "What Changes",
        blocks: [
          {
            table: {
              head: ["What", "During Tihar 2026", "What to do"],
              rows: [
                ["Permit offices in Kathmandu and Pokhara", "Closed about 7 – 11 November", "Collect all permits by Friday 6 November, or start on the 12th"],
                ["Restricted-area permits", "Not issued while immigration is closed", "For Manaslu, Tsum, Upper Mustang, Nar Phu: have them issued in the week before"],
                ["Banks", "Closed 8 – 11 November", "Carry cash for the whole trek from the city; there are no reliable ATMs on any trail"],
                ["Domestic flights and buses", "Heavily booked on 9 – 10 and 12 November", "Fly or drive to your trailhead by the 8th, or on the 11th"],
                ["Guides and porters", "Most want to be home on the 11th for Bhai Tika", "Plan to finish by the 9th or 10th, or agree the dates and a festival bonus early"],
                ["Lodge staff", "Thinner on Bhai Tika morning", "Order breakfast the night before; expect a slow start"],
                ["Trail numbers", "A small dip in Nepali trekkers during the festival, a surge just after", "Enjoy the quiet; book beds for 12 – 15 November on short routes"],
              ],
            },
          },
          { p: "The rule that covers nearly all of it: <strong>be on the trail before the 7th, with your paperwork and your cash, and nothing else needs arranging.</strong> Which routes need which permits is set out in [[post:nepal-trekking-permits-explained|trekking permits explained]]." },
        ],
      },
      {
        h2: "Where You Will See the Festival, and Where You Won't",
        blocks: [
          { p: "Tihar is a Hindu festival that many of Nepal's hill peoples keep with enthusiasm and its high-mountain Buddhist communities largely do not. What you see depends on which valley you are in and how high." },
          {
            table: {
              head: ["Region", "How much Tihar", "What it looks like"],
              rows: [
                ["Annapurna foothills (Ghandruk, Landruk, Ulleri, Dhampus)", "A great deal", "Lamps on stone walls, marigolds on every lodge, deusi-bhailo programmes nightly"],
                ["Lower Manaslu and the Budhi Gandaki", "A good deal", "Village celebrations below Jagat; quieter in Buddhist Nubri"],
                ["Langtang and Helambu", "Some", "Tamang and Hyolmo villages mark it lightly; more in the lower valley"],
                ["Lower Solu (Pikey Peak, Phaplu)", "Some", "Mixed Sherpa, Rai and Chhetri villages; lamps and singing in the bazaars"],
                ["Khumbu above Lukla", "Little", "Sherpa villages carry on as normal; lodge staff from the lowlands keep it quietly"],
                ["Manang, Upper Mustang, Dolpo", "Very little", "Tibetan Buddhist; you may see nothing at all"],
              ],
            },
          },
          { p: "So if seeing the festival matters to you, trek low and in the middle hills. If you would rather it did not touch your trek at all, go high: the [[trek:everest-base-camp-trek|Everest Base Camp trek]] runs through Tihar exactly as it does any other week of November." },
        ],
      },
      {
        h2: "The Best Treks for the Festival",
        blocks: [
          {
            table: {
              head: ["Trek", "Days", "Why during Tihar"],
              rows: [
                ["[[trek:poonhill-trek|Poon Hill]]", "3 – 7", "The big Magar and Gurung villages on the route celebrate hard. Short enough to finish before Bhai Tika."],
                ["[[trek:mohare-danda-trek|Mohare Danda]]", "6 – 10", "Community lodges run by the villages themselves — you are a guest at their festival."],
                ["[[trek:mardi-himal-trek|Mardi Himal]]", "5 – 9", "Festival in the villages at the bottom, empty ridge at the top."],
                ["[[trek:annapurna-base-camp-trek|Annapurna Base Camp]]", "9", "Chhomrong and Ghandruk on the way in and out; nothing but mountains in between."],
                ["[[trek:langtang-valley-trek|Langtang Valley]]", "10", "No flight, no restricted permit — the least affected by closures."],
                ["[[trek:ghalegaun-ghanpokhara-village-tour|Ghalegaun village stay]]", "4", "Not a trek so much as a walk to a ridge-top Gurung village, to spend the festival in a family house."],
              ],
            },
          },
          { p: "The trips that need care are the restricted ones. A [[trek:manaslu-circuit-trek|Manaslu Circuit]] or [[trek:upper-mustang-trek|Upper Mustang]] trek starting between 7 and 12 November is only possible if the permit was issued the week before, which means being in Kathmandu with your passport by about the 4th. See [[post:manaslu-circuit-in-november|Manaslu in November]] and [[post:upper-mustang-in-november|Upper Mustang in November]]." },
        ],
      },
      {
        h2: "Your Guide, Your Porter and Bhai Tika",
        blocks: [
          { p: "The most important day of Tihar for the people working on your trek is the last. On Bhai Tika, <strong>Wednesday 11 November</strong>, brothers go to their sisters, and a man who is on a mountain instead will feel it. Most will not say so. It is worth raising yourself." },
          {
            ul: [
              "<strong>If your dates are flexible</strong>, end the trek on 9 or 10 November. Your crew gets home; you get the last day of the festival in town.",
              "<strong>If the trek has to run through the 11th</strong>, say so when you book, so that a guide who is content with that can be assigned. Many are, particularly those whose families live near the trail.",
              "<strong>A festival tip</strong> is customary for crew who work through it — the equivalent of a day or two's wages, given on the day, in addition to the tip at the end.",
              "<strong>Make room for the tika.</strong> If your guide's sister lives in a village on the route, or a lodge owner offers to give tika to the crew, an hour's pause is the right thing. You will probably be included.",
              "<strong>Ask about it.</strong> Guides enjoy explaining their own festival far more than reciting altitude figures.",
            ],
          },
          { p: "How pay and tipping normally work is in our guide to [[post:guides-and-porters-in-nepal-rules-and-costs|guides and porters]]." },
        ],
      },
      {
        h2: "If the Festival Comes to Your Lodge",
        blocks: [
          { p: "In the middle hills, from about the 8th to the 10th, expect a <em>deusi-bhailo</em> group at the lodge in the evening: village youth with a drum, sometimes a speaker, singing blessings in call-and-response and dancing in the yard. What is going on is explained in [[post:deusi-bhailo-tihar-songs-explained|Deusi Bhailo]]." },
          {
            ul: [
              "<strong>Go outside and watch.</strong> Staying in the dining room is not an option anyway.",
              "<strong>Dance when asked.</strong> Half a minute is enough.",
              "<strong>Give something.</strong> Trekkers usually pool 100 to 300 rupees each; your guide will collect it and hand it over. The money generally goes to a village fund.",
              "<strong>Expect a late night.</strong> It finishes by ten or so. If you have a pre-dawn start for Poon Hill, earplugs.",
              "<strong>Try the sel roti</strong> at breakfast. Lodge kitchens make it for the festival.",
            ],
          },
          { p: "On the night of Laxmi Puja, Sunday the 8th, the lodges in the Gurung villages light oil lamps along their walls and steps. Ghandruk seen from across the valley that evening, a hillside of small flames under Annapurna South, is one of the better sights of the season." },
        ],
      },
      {
        h2: "Three Ways to Plan It in 2026",
        blocks: [
          { h3: "Trek first, lights after" },
          { p: "Start around 28 – 30 October and walk out on the 6th or 7th. You are in Pokhara or Kathmandu for Kukur Tihar and Laxmi Puja on the 8th, with your guide home in good time. This is the plan we suggest most often. Nine-day [[trek:annapurna-base-camp-trek|Annapurna Base Camp]] and ten-day [[trek:langtang-valley-trek|Langtang]] both fit." },
          { h3: "Festival on the trail" },
          { p: "Start a short trek on 5 or 6 November and be in a Gurung village on the 8th. [[trek:poonhill-trek-from-pokhara|Poon Hill from Pokhara]] gives you Ghorepani or Ghandruk for the lamps and has you down by the 9th." },
          { h3: "Lights first, trek after" },
          { p: "Spend 7 – 11 November in the Kathmandu valley, collect permits when offices reopen on the 12th, and trek from the 13th into the quiet second half of the month. The city side of this is in [[post:kathmandu-during-tihar|Kathmandu during Tihar]]." },
          { p: "Whichever you choose, the festival as a whole is described in our [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]], and the comparison with the earlier festival in [[post:trekking-in-nepal-during-dashain|trekking during Dashain]]." },
        ],
      },
    ],
    faqs: [
      { question: "Can I trek in Nepal during Tihar?", answer: "Yes. All trekking lodges stay open, the weather is at its best, and trails are in good condition. The only things affected are permit offices, banks and transport on a few days, all of which can be arranged before the festival starts." },
      { question: "Are teahouses open during Tihar?", answer: "Yes, on every trekking route. Early November is peak season and no lodge closes for the festival. Service may be a little slower on the morning of Bhai Tika." },
      { question: "Can I get a trekking permit during Tihar?", answer: "Not on the holiday days. In 2026 the offices in Kathmandu and Pokhara are closed from about 7 to 11 November. Collect permits by Friday 6 November, or start your trek from the 12th." },
      { question: "Do guides and porters work during Tihar?", answer: "Many do, but most want to be home on Bhai Tika, the last day. Either finish your trek by 9 or 10 November, or tell your agency when booking so that a guide who is happy to work through it is assigned." },
      { question: "Which treks are best during Tihar?", answer: "Routes through Gurung and Magar villages in the Annapurna foothills — Poon Hill, Mohare Danda, Mardi Himal and the approach to Annapurna Base Camp — where the festival is celebrated with lamps and singing." },
      { question: "Is Tihar celebrated in the Everest region?", answer: "Only lightly. The Sherpa communities of the Khumbu are Buddhist and do not keep Tihar in the same way. Trekking to Everest Base Camp during the festival is no different from any other week in November." },
      { question: "Do Lukla flights run during Tihar?", answer: "Yes, flights operate as normal when the weather allows. Seats are heavily booked in early November regardless of the festival, so book early and keep a buffer day." },
      { question: "Should I tip my guide extra during Tihar?", answer: "A festival tip is customary if your crew works through the holiday, particularly on Bhai Tika. The equivalent of one or two days' wages, given on the day, is appropriate and appreciated." },
    ],
    relatedTreks: ["poonhill-trek", "mohare-danda-trek", "mardi-himal-trek", "annapurna-base-camp-trek", "langtang-valley-trek", "ghalegaun-ghanpokhara-village-tour"],
    tripsNote: "Treks that work with the festival dates, most of them through villages that celebrate.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "trekking-in-nepal-in-november",
      "deusi-bhailo-tihar-songs-explained",
      "trekking-in-nepal-during-dashain",
      "nepal-trekking-permits-explained",
      "guides-and-porters-in-nepal-rules-and-costs",
    ],
    tags: ["Tihar", "Trekking Seasons", "Travel Planning", "Annapurna Region"],
    meta: {
      title: "Trekking in Nepal During Tihar 2026: What Changes",
      description: "Trekking during Tihar, 7–11 November 2026: lodges stay open, but permits, banks, flights and guides need planning. Which routes celebrate and how to time it.",
      keywords: "trekking during Tihar, Nepal trekking Tihar, trekking Nepal November festival, Tihar trekking permits, Tihar guides porters, trek during Diwali Nepal",
    },
  },

  // ──────────────────────────────────────────────────────────────────
  {
    slug: "photographing-tihar-in-nepal",
    title: "Photographing Tihar: Lamps, Rangoli and Garlanded Dogs",
    cluster: "tihar",
    date: "2026-11-04",
    hero: {
      image: FESTIVALS.rangoliChalk,
      alt: "A rangoli of pink, yellow and green powder drawn in a flower pattern on the ground for Tihar.",
    },
    excerpt:
      "Tihar is the most photogenic week of the Nepali year and one of the hardest to shoot: small flames, deep shadow and a great deal happening at ankle height. This is a day-by-day shot list for 7 to 11 November 2026, the settings that work for lamplight, and the manners that get you invited in.",
    intro: [
      { p: "Dashain is a festival of blood and red powder under a midday sun. Tihar is its opposite in every way a camera cares about: it happens at dusk and after dark, its colours are orange, magenta and gold, and its subjects are a flame the size of a fingertip and the face of the person bending over it." },
      { p: "That makes it rewarding and technically awkward. The dynamic range is brutal, the best pictures are at ground level, and the moments you want are private ones that happen in doorways. None of it needs expensive equipment. It needs knowing what is coming, getting there before it starts, and asking nicely." },
    ],
    sections: [
      {
        h2: "A Shot List for 2026",
        blocks: [
          {
            table: {
              head: ["When", "Subject", "Where and how"],
              rows: [
                ["Thu 5 – Sat 7 November, 3 – 6 pm", "The markets: heaps of marigolds, garland makers, cones of coloured powder, stacks of clay lamps", "Ason to Indra Chowk in Kathmandu. A short lens, a high viewpoint from a first-floor window or temple step."],
                ["Sat 7 November, dawn", "Crows on rooftops", "Any roof terrace. More mood than event."],
                ["Sun 8 November, 7 – 11 am", "Garlanded dogs: portraits, dogs asleep on temple steps, the moment the tika goes on", "Thamel, the old city, Durbar Square, Boudhanath. Get low."],
                ["Sun 8 November, 2 – 5 pm", "Rangoli being made; hands trickling powder", "Shop fronts and house gates. Overhead, or from the side at ground level."],
                ["Sun 8 November, 5 – 6 pm", "Blue hour: the first lamps against a sky that still has colour", "Bhaktapur's Taumadhi Square, Patan Durbar Square, or a rooftop. The best half hour of the festival."],
                ["Sun 8 November, 6 – 9 pm", "Faces lit by flame; lamp-lined lanes; bhailo groups", "Old-city lanes and courtyards."],
                ["Tue 10 November, 11 am – 3 pm", "New Year processions: drummers, women in black and red saris, masked dancers", "Basantapur, Patan, Bhaktapur. Hard light; work in open shade or shoot detail."],
                ["Wed 11 November, late morning", "The seven-colour tika; the queue on the causeway", "A family home, by invitation; Rani Pokhari from outside the railings."],
                ["Wed 11 November, 4 – 5.30 pm", "Streets full of striped foreheads and purple garlands in low light", "Anywhere people are walking."],
              ],
            },
          },
          { p: "What each of these days is, and the exact timings, is in the [[post:tihar-dates-calendar-for-travellers|Tihar dates guide]]." },
        ],
      },
      {
        h2: "Shooting by Lamplight",
        blocks: [
          { p: "An oil lamp gives very little light and a great deal of contrast. The camera's meter sees a dark frame, brightens it, and turns the flame into a white blob and the shadows into grey mush. Take control of the exposure and the picture appears." },
          {
            ul: [
              "<strong>Expose for the flame, not the scene.</strong> Dial in one to two stops of negative exposure compensation, or meter off the lit side of a face. Let the background go black. That is what the night looked like.",
              "<strong>Shoot in the blue hour.</strong> For twenty to thirty minutes after sunset the sky is bright enough to balance the lamps, and buildings keep their shape. After that you are photographing flames in a void — which has its own appeal, but is a different picture.",
              "<strong>Use a fast lens if you have one.</strong> A 35 mm or 50 mm at f/1.8 is the ideal Tihar lens. Wide open, a row of lamps behind your subject turns to soft discs of gold.",
              "<strong>Raise the ISO without guilt.</strong> A sharp, grainy picture beats a clean, blurred one. ISO 3200 to 6400 is normal for hand-held work by lamplight.",
              "<strong>Keep the shutter at 1/60 or faster</strong> for people. Flames flicker and hands move.",
              "<strong>Set white balance by hand</strong> — daylight, or around 3,500 K. Auto white balance will try to neutralise the warmth that is the whole point.",
              "<strong>Shoot RAW</strong> if your camera allows. You will want the latitude in the shadows.",
              "<strong>Turn the flash off.</strong> It destroys the light you came for and is rude at a puja. No exceptions.",
            ],
          },
          {
            figure: {
              image: FESTIVALS.lightingLamps,
              alt: "A woman lighting oil lamps on the floor of a house, her face lit by the flames, with coloured lights overhead.",
              caption: "Exposed for the flames: the face is lit, the room falls away into colour.",
            },
          },
        ],
      },
      {
        h2: "Phone Cameras",
        blocks: [
          { p: "A recent phone is very capable at Tihar, sometimes more than a camera in inexperienced hands, because its night processing is built for exactly this. A few adjustments make the difference." },
          {
            ul: [
              "<strong>Tap on the flame, then drag the exposure down.</strong> On most phones a sun icon or slider appears beside the focus box. Pull it until the flame has shape.",
              "<strong>Use night mode for scenes, not for people.</strong> It needs one to three seconds; anyone moving will smear. For a still lane of lamps, it is superb. Brace against a wall.",
              "<strong>Switch night mode off for dancers and dogs</strong> and accept a darker frame.",
              "<strong>Wipe the lens.</strong> A smeared lens turns every lamp into a streak. In a week of marigolds and oily fingers, it will be smeared.",
              "<strong>Get the phone on the ground.</strong> Turn it upside down so the lens is at floor level beside a rangoli. This is the easiest good picture of the festival.",
              "<strong>Avoid the digital zoom.</strong> Walk closer.",
            ],
          },
        ],
      },
      {
        h2: "Dogs, Rangoli and Garlands",
        blocks: [
          { h3: "Dogs" },
          { p: "Kukur Tihar morning is the one part of the festival in good light. Kneel or lie down so that the lens is at the dog's eye level; shot from standing height, a dog is a back and a tail. Focus on the near eye. Soft open shade under a temple roof is kinder than direct sun, which blows out orange marigolds very easily — check your highlights. And stay at a respectful distance from dogs you do not know; a longer lens is safer than a closer face. More in [[post:kukur-tihar-day-of-the-dogs|Kukur Tihar]]." },
          {
            figure: {
              image: FESTIVALS.kukurTiharCollar,
              alt: "A pale-coated dog sitting in sunlight with a collar of orange marigolds round its neck.",
              caption: "Eye level, near eye sharp, and room in the frame for the garland.",
            },
          },
          { h3: "Rangoli" },
          { p: "Two angles work. Directly overhead, with the pattern filling the frame — hold the camera flat and watch for your own shadow and feet. Or almost flat to the ground from one side, with the lamp in the centre sharp and the colours falling away. The making is better than the finished thing: ask if you may photograph the hands." },
          { h3: "Garlands and markets" },
          { p: "Marigold orange is the colour most cameras get wrong, pushing it to a flat, glowing yellow. Underexpose by a third to two thirds of a stop to hold the detail in the petals. In the markets, look for repetition — a wall of hanging garlands, a row of identical lamp stacks — and wait for one person to walk into it." },
        ],
      },
      {
        h2: "People, Permission and Being Invited In",
        blocks: [
          { p: "The street is public and people at Tihar are, on the whole, delighted to be photographed. The doorway is the boundary. A family at its Laxmi Puja is at prayer in its own house, with the door open for a goddess, not for you." },
          {
            ul: [
              "<strong>Ask before you raise the camera</strong> at anything that is clearly a ritual. A gesture and a smile is enough. <em>Photo khichna hunchha?</em> — may I take a photo? — is better.",
              "<strong>Accept no gracefully</strong> and stay to watch anyway.",
              "<strong>Never step on a rangoli or the painted trail</strong> to get an angle. It is the one thing that will lose you all goodwill instantly.",
              "<strong>Shoes off</strong> if you are invited beyond the threshold.",
              "<strong>Show people the picture.</strong> It is the simplest thank-you there is, and it usually leads to three more.",
              "<strong>Offer to send it</strong>, take a number, and actually do it.",
              "<strong>Children:</strong> ask a parent, and do not post identifiable close-ups of other people's children.",
              "<strong>Rani Pokhari on Bhai Tika</strong> is a place of loss for many of those queueing. Photograph the scene, not the faces.",
              "<strong>Give to the singers</strong> you photograph. A deusi-bhailo group that has performed for your camera has earned its 100 rupees.",
            ],
          },
          { p: "The surest way to photograph the inside of the festival is to be a guest at it. A homestay over the dates, or a guide who takes you to his own family's house, gets you pictures no amount of walking the streets will. Our [[trek:kathmandu-photography-tour|Kathmandu Photography Tour]] and [[trek:nepal-photography-tour|Nepal Photography Tour]] are run by guides who shoot themselves, and in festival week are planned around the evenings." },
        ],
      },
      {
        h2: "Kit, and Looking After It",
        blocks: [
          {
            table: {
              head: ["Bring", "Why"],
              rows: [
                ["One fast prime (35 or 50 mm, f/1.8 or faster)", "The whole night can be shot on it"],
                ["A standard zoom", "For the markets and the processions by day"],
                ["A small travel tripod or bean bag", "Blue-hour scenes of lit squares; long exposures of lamp-lined lanes"],
                ["Spare batteries", "Nights are long, and cold drains them"],
                ["A lens cloth, several", "Powder, oil and marigold pollen get on everything"],
                ["A small torch", "For finding your settings, and your way home"],
                ["A plain shoulder bag", "Less conspicuous than a camera backpack in a crowd"],
              ],
            },
          },
          {
            ul: [
              "<strong>Coloured powder is abrasive.</strong> Do not change lenses in the markets, and blow dust off before wiping.",
              "<strong>Watch the flames.</strong> Camera straps, scarves and loose sleeves dangle into ground-level lamps when you crouch.",
              "<strong>Crowds on the 8th are dense.</strong> Keep the strap across your body and the bag in front.",
              "<strong>Firecrackers</strong> go off without warning and close by. They are also, at a distance, a picture.",
              "<strong>Drones</strong> need a permit in Nepal and are not allowed over the heritage squares. Leave it in the hotel.",
            ],
          },
        ],
      },
      {
        h2: "Beyond the Valley",
        blocks: [
          { p: "If you have the time, pair the city with something different. A <strong>Gurung hill village</strong> on Laxmi Puja night has no electric light to compete with the lamps: a long exposure from the opposite slope shows every house as a cluster of points under the snow peaks. <strong>Pokhara</strong> has reflections — Lakeside's lights in still water at blue hour. And two days after Bhai Tika, <strong>Janakpur</strong> holds Chhath, with thousands of people standing in ponds at sunset and sunrise among lamps and sugarcane; it is arguably the more spectacular festival to photograph. See [[post:chhath-festival-nepal-guide|our Chhath guide]]." },
          { p: "For the wider festival, start with the [[post:tihar-festival-nepal-travel-guide|Tihar travel guide]]; for the night itself, [[post:laxmi-puja-in-nepal-night-of-lights|Laxmi Puja]]; and for the same advice applied to the festival three weeks earlier, [[post:photographing-dashain-in-nepal|photographing Dashain]]." },
        ],
      },
    ],
    faqs: [
      { question: "What is the best day to photograph Tihar?", answer: "Sunday 8 November 2026. It has Kukur Tihar in the morning, with garlanded dogs in good light, and Laxmi Puja in the evening, when the lamps are lit. The half hour after sunset is the best of the whole festival." },
      { question: "What camera settings should I use for oil lamps?", answer: "Underexpose by one to two stops so the flame keeps its shape, use a wide aperture such as f/1.8 to f/2.8, raise the ISO to 3200 or more, keep the shutter at 1/60 or faster for people, and set white balance to daylight to keep the warm colour." },
      { question: "Can I photograph Tihar with a phone?", answer: "Yes. Tap on the flame and drag the exposure down, use night mode for still scenes and switch it off for moving subjects, keep the lens clean, and put the phone at ground level beside a rangoli for an easy strong picture." },
      { question: "Is it acceptable to photograph people during Tihar?", answer: "In the street, generally yes, and people are usually pleased. Ask before photographing a family at its puja or anyone in a doorway, never use flash at a ritual, and do not step on a rangoli for a better angle." },
      { question: "Where is the best place to photograph Laxmi Puja?", answer: "Bhaktapur and Patan, where the temple squares are lit by oil lamps and there is little electric light. In Kathmandu, the lanes between Durbar Square and Ason. A rooftop gives the wide view of the lit valley." },
      { question: "Should I use flash at Tihar?", answer: "No. Flash flattens the lamplight that makes the pictures, and it is intrusive during a puja. Use a fast lens and a higher ISO instead." },
      { question: "Can I fly a drone during Tihar in Nepal?", answer: "Not without a permit, and not over the heritage sites of the Kathmandu valley, where drones are restricted. For festival photography a drone is neither necessary nor welcome." },
      { question: "How do I photograph dogs on Kukur Tihar?", answer: "Go out between seven and eleven in the morning, get down to the dog's eye level, focus on the near eye and use open shade rather than direct sun. Keep a sensible distance from dogs you do not know." },
    ],
    relatedTreks: ["kathmandu-photography-tour", "nepal-photography-tour", "annapurna-photography-tour", "bhaktapur-day-tour", "patan-day-tour", "ghalegaun-ghanpokhara-village-tour"],
    tripsNote: "Photography tours, and the places where the festival is best lit.",
    relatedPosts: [
      "tihar-festival-nepal-travel-guide",
      "laxmi-puja-in-nepal-night-of-lights",
      "kukur-tihar-day-of-the-dogs",
      "kathmandu-during-tihar",
      "photographing-dashain-in-nepal",
      "chhath-festival-nepal-guide",
    ],
    tags: ["Tihar", "Photography", "Festivals", "Kathmandu Valley"],
    meta: {
      title: "Photographing Tihar in Nepal: Lamps, Rangoli & Dogs",
      description: "A photographer's guide to Tihar 2026: a day-by-day shot list, camera and phone settings for lamplight, where to stand, and the manners that get you invited in.",
      keywords: "photographing Tihar, Tihar photography, Diwali photography Nepal, oil lamp photography settings, Kukur Tihar photos, Nepal festival photography, rangoli photos",
    },
  },
];
