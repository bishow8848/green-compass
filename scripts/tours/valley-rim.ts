/**
 * Three tours that the catalogue was missing on the valley rim and in Lumbini.
 *
 * Nagarkot and Dhulikhel are the two standard sunrise and walking destinations
 * on the Kathmandu rim and had no page of their own, and Lumbini appeared only
 * inside the eight-day Buddhist pilgrimage. All three are searched for by name
 * far more often than the longer packages that contain them.
 */
import {
  BHAKTAPUR, DHULIKHEL, KATHMANDU, KTM_PLACE, LUMBINI, NAGARKOT, NAMOBUDDHA, p, type Tour,
} from "./types";

const CHANGUNARAYAN = { lng: 85.428, lat: 27.7167 };
const PANAUTI = { lng: 85.515, lat: 27.585 };
const BHAIRAHAWA = { lng: 83.416, lat: 27.5058 };
const TILAURAKOT = { lng: 83.05, lat: 27.5744 };

/** Sunrise on the rim, then down through Changunarayan into Bhaktapur. */
export const nagarkotSunriseTour: Tour = {
  region: "Nepal Day Tours",
  price: 95,
  difficulty: "easy",
  maxAltitude: 2175,
  center: [85.47, 27.7],
  zoom: 11.5,
  content: {
    slug: "nagarkot-sunrise-tour",
    title: "Nagarkot Sunrise Tour",
    overview:
      "<p>The <strong>Nagarkot Sunrise Tour</strong> leaves Kathmandu in the dark and puts you on the eastern rim of the valley at <strong>2,175 m</strong> in time to watch the sun come up over the Himalaya. On a clear winter morning the view runs from <strong>Dhaulagiri</strong> in the west through Manaslu, Ganesh Himal, Langtang and Dorje Lakpa to <strong>Everest</strong> on the far eastern horizon — around a hundred and fifty kilometres of mountain from a hilltop an hour and a half from your hotel.</p><p>The return is the other half of the day. Rather than driving straight back, the tour descends to <strong>Changunarayan</strong>, the oldest Hindu temple in the valley and a UNESCO site most visitors never reach, and then into <strong>Bhaktapur</strong> for the medieval Newar city and its Durbar Square. You are back in Kathmandu by late afternoon having seen the mountains, the valley's oldest temple and its best-preserved town in a single day.</p>",
    highlights: [
      ["Sunrise over the Himalaya", "Dhaulagiri to Everest from the valley rim at 2,175 m, on a clear morning."],
      ["Changunarayan Temple", "The oldest Hindu temple in the Kathmandu valley, a UNESCO site with fifth-century stone carving."],
      ["Bhaktapur Durbar Square", "The best-preserved Newar city in Nepal, with the five-storey Nyatapola temple and the pottery square."],
      ["An Early Start, Not a Long Day", "Pre-dawn departure and back at your hotel by late afternoon, with the traffic behind you."],
      ["Private Vehicle Throughout", "Your own car and driver, so the pace and the stops are yours to set."],
    ],
    sections: [
      {
        heading: "What You Actually See at Sunrise",
        content:
          "<p>Nagarkot sits on the eastern rim of the Kathmandu valley and looks north across the Indrawati and Sun Koshi basins at the main Himalayan chain. On a genuinely clear morning the visible span runs from <strong>Dhaulagiri (8,167 m)</strong> in the far west, through <strong>Manaslu</strong>, <strong>Ganesh Himal</strong>, <strong>Langtang Lirung</strong>, <strong>Dorje Lakpa</strong> and the Jugal Himal, to a small triangle of <strong>Everest (8,848 m)</strong> low on the eastern horizon.</p><p>Everest is the peak everyone asks about and the one most likely to disappoint: it is over a hundred and fifty kilometres away and shows as a modest dark pyramid rather than a dominant summit. The mountains that actually fill the view are Langtang and the Jugal, which are far closer. Your guide will point out what is what, and there is a view tower a short walk from the viewpoint if the crowd is heavy.</p>",
      },
      {
        heading: "Best Time and the Weather Reality",
        content:
          "<p><strong>October to March</strong> is the season, and within it <strong>November to February</strong> gives by far the best odds. The air after the monsoon and through the winter is clear, cold and stable, and mountain visibility on any given morning in December is good more often than not. October is beautiful but hazier than people expect, and by late March the pre-monsoon dust has usually closed the view down.</p><p>We will be honest with you: this is a weather-dependent tour and the mountains are not guaranteed. From <strong>June to September</strong> the chance of a clear Himalayan sunrise is low and we would rather you spent the day elsewhere. If the forecast on the morning is hopeless, your guide will say so and we will happily switch the booking to another day or another tour.</p>",
      },
      {
        heading: "The Descent: Changunarayan and Bhaktapur",
        content:
          "<p><strong>Changunarayan</strong> is the oldest temple in the valley and, for most visitors, the one they wish they had known about. Founded in the fourth century and rebuilt in the seventeenth, it holds some of the finest stone sculpture in Nepal — a fifth-century Vishnu Vishwarup, a Garuda dated to around 464 AD and the oldest inscription in the country. It stands on a ridge above Bhaktapur with almost nobody there.</p><p><strong>Bhaktapur</strong> is the third of the valley's royal cities and the best preserved. The Durbar Square, Taumadhi Square with the five-storey <strong>Nyatapola</strong>, and the working <strong>pottery square</strong> are all within a few minutes of each other, and the town is largely free of traffic. The entrance fee is included and the ticket can be extended if you decide to come back.</p>",
      },
      {
        heading: "What to Wear and Bring",
        content:
          "<p>It is cold on the rim before dawn — considerably colder than Kathmandu, which sits 800 m lower. From November to February expect near freezing at the viewpoint, so bring a <strong>warm jacket, hat and gloves</strong> even if the day turns hot by ten. Comfortable shoes that come off easily are best, since you will remove them at the temples.</p><p>Bring a camera with a zoom if the mountains are the point; a phone will not do Everest justice at that distance. Modest clothing covering shoulders and knees is expected at Changunarayan and appreciated in Bhaktapur. Small notes are useful for offerings and tea, and sunscreen matters more than the temperature suggests once the sun is up.</p>",
      },
    ],
    faqs: [
      { question: "What time does the tour start?", answer: "Pickup is between 4 and 5 am depending on the season, because sunrise on the rim moves through the year and the drive takes around ninety minutes. Your guide confirms the exact time the evening before. It is an early start and there is no way around it — arriving after sunrise defeats the purpose." },
      { question: "Will I definitely see Everest?", answer: "No. Everest is visible from Nagarkot on clear mornings but it is a hundred and fifty kilometres away and appears as a small dark pyramid, not a dominant peak. Between November and February the odds are good; in October they are moderate; in the monsoon they are poor. The Langtang and Jugal ranges are far closer and are what actually fills the view." },
      { question: "What happens if the weather is bad?", answer: "Your guide checks the forecast the evening before and will tell you honestly if the morning looks hopeless. You can postpone to another day at no charge or switch to a different tour. If we set out and the cloud wins anyway, the Changunarayan and Bhaktapur half of the day stands on its own and is genuinely worth doing." },
      { question: "Can we stay overnight in Nagarkot instead?", answer: "Yes, and many people prefer it — you get sunset and sunrise, and you skip the pre-dawn drive. We can arrange a hotel on the ridge and turn this into an overnight tour; tell us at booking and we will price it. The day version exists for people whose schedule will not take an extra night." },
      { question: "Is breakfast included?", answer: "Yes. After sunrise you have breakfast at a hotel on the ridge with the mountains still in view, which is included in the price. Lunch in Bhaktapur later in the day is not — your guide will point you at the good local places around Taumadhi Square." },
      { question: "How much walking is there?", answer: "Very little at Nagarkot itself — the viewpoint is a few minutes from where the vehicle parks, with an optional twenty-minute walk to the view tower. Changunarayan involves a short flight of steps, and Bhaktapur is an hour or two on uneven flagstones. Tell us if stairs are difficult and we will adjust." },
      { question: "Is there a hiking option on the way down?", answer: "Yes. The old walking trail from Nagarkot down the ridge to Changunarayan takes around three hours through terraced farmland and pine, and is one of the best short walks near Kathmandu. If you want it, say so at booking so we can plan the timings and have the vehicle meet you at the bottom." },
      { question: "Are entrance fees included?", answer: "Yes — the Nagarkot viewpoint charge, the Changunarayan temple fee and the Bhaktapur Durbar Square ticket are all in the price. Keep the Bhaktapur ticket, since it can be extended free of charge at the office if you decide to return later in your stay." },
    ],
    inclusions: {
      transport: [
        "Private air-conditioned vehicle with driver from pre-dawn hotel pickup to late-afternoon drop-off.",
      ],
      entrance: "Nagarkot viewpoint charge, Changunarayan temple fee and the Bhaktapur Durbar Square ticket.",
      guide: "Government-licensed English-speaking guide for the day.",
      meals: ["Breakfast at a Nagarkot hotel after sunrise, with the mountains in view."],
      extra: ["Bottled water and hot tea in the vehicle for the early start."],
    },
    exclusions: {
      domestic: true,
      meals: "Lunch and any meals not specified.",
      extra: ["Offerings, donations and camera fees at individual shrines."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "saturday",
    itineraryDescription:
      "A single day from a pre-dawn drive to the valley rim, through sunrise over the Himalaya, and back via Changunarayan and Bhaktapur.",
    inExDescription:
      "Private vehicle with driver for the whole day, a licensed guide, breakfast at Nagarkot, all entrance fees and government taxes are included, while lunch, personal expenses, donations and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Nagarkot Sunrise Tour – Himalayan Dawn from the Valley Rim",
      description:
        "A day tour from Kathmandu to Nagarkot for sunrise over the Himalaya, returning through the Changunarayan temple and Bhaktapur Durbar Square.",
      keywords:
        "Nagarkot sunrise tour, Nagarkot day tour, sunrise tour from Kathmandu, Nagarkot Everest view, Changunarayan tour, Bhaktapur day tour, Kathmandu valley rim",
      tags: "Nagarkot Sunrise Tour, Nepal Day Tours, Kathmandu Valley, Sunrise, Bhaktapur, Nepal Tours",
    },
  },
  days: [
    {
      title: "Sunrise at Nagarkot (2,175 m), Changunarayan and Bhaktapur",
      elevation: "2,175 m",
      accommodation: "Nagarkot",
      placeDescription: "A ridge village on the eastern rim of the Kathmandu valley, with a Himalayan panorama at dawn.",
      ...NAGARKOT,
      html: p(
        "A pre-dawn pickup from your hotel and a ninety-minute drive east out of the valley, climbing through Bhaktapur and up the ridge road to <strong>Nagarkot (2,175 m)</strong> in the dark.",
        "You reach the viewpoint before first light. As the sky opens, the Himalaya comes out along the northern horizon — <strong>Dhaulagiri</strong>, Manaslu, Ganesh Himal, <strong>Langtang Lirung</strong>, Dorje Lakpa and the Jugal Himal, with a small dark triangle of <strong>Everest</strong> far to the east. Your guide points out the peaks as the light moves across them.",
        "Breakfast follows at a hotel on the ridge with the view still in front of you.",
        "The descent goes to <strong>Changunarayan</strong>, the oldest temple in the valley, with fifth-century stone carving and the oldest inscription in Nepal, then down into <strong>Bhaktapur</strong> for the Durbar Square, the five-storey Nyatapola and the working pottery square.",
        "Back at your hotel in Kathmandu by late afternoon.",
      ),
    },
  ],
};

/** The classic rim walk: Dhulikhel to Namobuddha on foot, Panauti on the way back. */
export const dhulikhelNamobuddhaHike: Tour = {
  region: "Nepal Hiking Tours",
  price: 110,
  difficulty: "moderate",
  maxAltitude: 1750,
  center: [85.55, 27.6],
  zoom: 12,
  content: {
    slug: "dhulikhel-namobuddha-hike",
    title: "Dhulikhel to Namobuddha Hike",
    overview:
      "<p>The <strong>Dhulikhel to Namobuddha Hike</strong> is the best day walk within reach of Kathmandu: around four hours on old village trails along the southern rim of the valley, from the Newar town of <strong>Dhulikhel</strong> through terraced farmland and pine ridge to the Buddhist monastery at <strong>Namobuddha (1,750 m)</strong>. It is a real walk rather than a stroll, with a few hundred metres of climbing, and it ends at one of the three holiest Buddhist sites in Nepal.</p><p>Namobuddha marks the spot where, in a previous life, the Buddha is said to have given his body to a starving tigress and her cubs. The stupa on the hilltop is old; the <strong>Thrangu Tashi Yangtse</strong> monastery beside it is large, active and welcoming, with several hundred monks and a view along the Himalaya on a clear day. The return goes through <strong>Panauti</strong>, a small and almost untouched Newar town at the confluence of two rivers.</p>",
    highlights: [
      ["A Four-Hour Ridge Walk", "Old village trails through terraced farmland and pine forest, with the Himalaya on the northern horizon."],
      ["Namobuddha Monastery", "One of the three holiest Buddhist sites in Nepal, with a large active monastery and several hundred monks."],
      ["Dhulikhel's Newar Old Town", "Brick houses, carved windows and a hill town largely bypassed by the Kathmandu sprawl."],
      ["Panauti", "A medieval Newar town at a river confluence, with the twelfth-century Indreshwar Mahadev temple."],
      ["Himalayan Views Without Altitude", "Langtang, Dorje Lakpa and Gauri Shankar from a ridge you can walk in a morning."],
    ],
    sections: [
      {
        heading: "The Walk Itself",
        content:
          "<p>The trail leaves the Kali temple viewpoint above <strong>Dhulikhel (1,550 m)</strong> and follows the ridge south-east on old paths that villages have used for centuries. It passes through terraced fields of rice, mustard and millet, small Tamang and Newar settlements, and stands of pine, with the Himalaya visible to the north whenever the trees open.</p><p>Total distance is around <strong>twelve kilometres</strong> with perhaps 400 m of cumulative ascent, done in three and a half to four and a half hours at a comfortable pace with stops. There is one sustained climb near the end, up to the Namobuddha ridge. The trail is well established and never exposed, but it is a genuine hill walk on uneven ground rather than a paved path.</p>",
      },
      {
        heading: "Namobuddha and the Monastery",
        content:
          "<p><strong>Namobuddha</strong> is one of the three great Buddhist pilgrimage sites in Nepal alongside Boudhanath and Swayambhunath. The story attached to it — that the Buddha in an earlier incarnation offered his own body to a starving tigress so she could feed her cubs — is depicted in the small shrine below the stupa, and the site has drawn pilgrims for many centuries.</p><p>The <strong>Thrangu Tashi Yangtse</strong> monastery on the ridge above was built in the 2000s and is a working institution rather than a monument: several hundred monks, a large assembly hall, a shedra and a guesthouse. Visitors are welcome, and if the timing is right you can sit in on the afternoon prayers. There is a simple vegetarian canteen where lunch is generally better than it needs to be.</p>",
      },
      {
        heading: "Fitness, Footwear and Who This Suits",
        content:
          "<p>This is a <strong>moderate</strong> walk. If you can manage four hours on your feet with some uphill, you will be fine; if you have not walked that far recently, you will feel it. There is no altitude issue — the whole route sits between 1,400 m and 1,750 m — and the vehicle meets you at Namobuddha, so the walking is one-way rather than a loop.</p><p>Wear <strong>proper walking shoes or light boots</strong> with a decent sole; trainers are adequate in dry weather and unpleasant after rain, when the field paths turn slippery. Bring a light daypack, water, sunscreen, a hat and a layer for the ridge wind. Trekking poles help on the descents but are not necessary. The route works well for families with children of about ten and up.</p>",
      },
      {
        heading: "Best Time and What Else Is Nearby",
        content:
          "<p><strong>October to April</strong> is the season. Autumn gives the clearest mountain views and the most comfortable walking temperature; winter is cold in the early morning but exceptionally clear; spring brings mustard fields in flower across the terraces. The <strong>monsoon</strong> from June to September makes the trails muddy and leech-prone and removes the views, though the terraces are at their greenest.</p><p>The return through <strong>Panauti</strong> is a genuine bonus rather than a filler. It is one of the oldest Newar settlements in the valley, largely undamaged by the 2015 earthquake and almost free of visitors, built at the confluence of the Roshi and Punyamati rivers around the twelfth-century <strong>Indreshwar Mahadev</strong> temple, which has some of the finest surviving woodcarving in Nepal.</p>",
      },
    ],
    faqs: [
      { question: "How hard is the walk really?", answer: "Moderate. Around twelve kilometres and four hours with roughly 400 m of cumulative climbing, on uneven village trails rather than paved paths. A reasonably active person will find it comfortable; someone who has not walked that far in a while will find it a real day out. There is one sustained climb at the end." },
      { question: "Can we drive to Namobuddha instead of walking?", answer: "Yes. There is a road all the way and we can drive to the monastery, spend longer there and add Panauti and Dhulikhel as stops. Tell us at booking. The walk is the better version of the day, but the driving version works for anyone who would rather not spend four hours on their feet." },
      { question: "Can we stay overnight at the monastery?", answer: "Thrangu Tashi Yangtse runs a simple guesthouse and it is possible to stay, which lets you attend the morning prayers at dawn. It is basic and it is a working monastery rather than a hotel. We can arrange it as an overnight version of this tour if you ask in advance." },
      { question: "Is lunch included?", answer: "Yes. Lunch is taken at the monastery canteen, which serves simple vegetarian Tibetan food, and it is in the price. If you would rather eat at a hotel in Dhulikhel before setting off, tell your guide on the day and we will rearrange the timings." },
      { question: "Will we see the Himalaya?", answer: "On a clear day, yes — Langtang Lirung, Dorje Lakpa, the Jugal Himal and Gauri Shankar along the northern horizon, seen repeatedly from the ridge sections. It is a lower and less dramatic panorama than Nagarkot's, but it is there for much of the walk rather than only at one viewpoint." },
      { question: "Are the trails easy to follow?", answer: "In places, and not in others — the route crosses farmland with many branching paths and there are no signs. That is why the tour runs with a guide rather than as a self-guided walk. Your guide also does the introductions in the villages you pass through, which is half the point of the day." },
      { question: "What time do we start and finish?", answer: "Pickup around 7 to 8 am, an hour and a half drive to Dhulikhel, walking by mid-morning, at Namobuddha for lunch, and back at your hotel in Kathmandu by early evening after the stop at Panauti. Earlier is better in October and November when the mountains are clearest at dawn." },
      { question: "Is this suitable in the monsoon?", answer: "It is walkable but we do not recommend it. The field trails become slippery clay, leeches are present in the forest sections from June to September, and the mountain views disappear. If you are here in the monsoon, the driving version of this tour with Namobuddha and Panauti is the better use of the day." },
    ],
    inclusions: {
      transport: [
        "Private vehicle with driver from Kathmandu to Dhulikhel, meeting you at Namobuddha and returning via Panauti.",
      ],
      entrance: "Namobuddha monastery donation and the Panauti heritage fee.",
      guide: "Government-licensed English-speaking hiking guide for the day.",
      meals: ["Lunch at the Namobuddha monastery canteen."],
      extra: ["Bottled water for the walk.", "A light daypack if you need one."],
    },
    exclusions: {
      domestic: true,
      meals: "Breakfast and dinner, and any meals not specified.",
      extra: ["Offerings and donations beyond the monastery entrance."],
    },
    luxuryVehicleAddon: true,
    fixedDepartureDay: "sunday",
    itineraryDescription:
      "A single day walking the old ridge trails from Dhulikhel to the Namobuddha monastery, returning through the Newar town of Panauti.",
    inExDescription:
      "Private vehicle with driver, a licensed hiking guide, lunch at the monastery, entrance and donation fees and government taxes are included, while breakfast, dinner, personal expenses and tips are excluded.",
    bestTime: "Oct-Apr",
    meta: {
      title: "Dhulikhel to Namobuddha Hike – A Day Walk from Kathmandu",
      description:
        "A four-hour ridge walk from Dhulikhel to the Namobuddha monastery on old village trails, returning through the medieval Newar town of Panauti.",
      keywords:
        "Dhulikhel Namobuddha hike, Namobuddha trek, day hike from Kathmandu, Dhulikhel hiking, Panauti tour, Kathmandu valley day hike, Namobuddha monastery",
      tags: "Dhulikhel to Namobuddha Hike, Nepal Hiking Tours, Day Hike, Namobuddha, Panauti, Nepal Tours",
    },
  },
  days: [
    {
      title: "Hike from Dhulikhel (1,550 m) to Namobuddha (1,750 m) and Return via Panauti",
      elevation: "1,750 m",
      accommodation: "Namobuddha",
      placeDescription: "A hilltop Buddhist pilgrimage site and monastery on the southern rim of the Kathmandu valley.",
      ...NAMOBUDDHA,
      html: p(
        "Pickup from your hotel and an hour and a half east on the Araniko Highway to <strong>Dhulikhel (1,550 m)</strong>, a Newar hill town of brick houses and carved windows that has kept its old core intact.",
        "The walk starts at the Kali temple viewpoint above the town. The trail follows the ridge south-east on old village paths through terraced fields of rice, mustard and millet, past small Tamang and Newar settlements, with <strong>Langtang Lirung</strong>, Dorje Lakpa and Gauri Shankar along the northern horizon whenever the pines open.",
        "Around four hours, twelve kilometres and 400 m of cumulative climbing, finishing with a sustained pull up to the ridge at <strong>Namobuddha (1,750 m)</strong>.",
        "Lunch at the <strong>Thrangu Tashi Yangtse</strong> monastery canteen, then time at the stupa and the shrine below it that tells the story of the Buddha and the tigress.",
        "The vehicle meets you here and returns through <strong>Panauti</strong>, a medieval Newar town at a river confluence, before Kathmandu by early evening.",
      ),
    },
  ],
};

/** Three days at the birthplace of the Buddha, with the Kapilvastu sites. */
export const lumbiniTour: Tour = {
  region: "Pilgrimage Tours",
  price: 495,
  difficulty: "easy",
  maxAltitude: 1400,
  center: [83.28, 27.48],
  zoom: 10.5,
  content: {
    slug: "lumbini-tour",
    title: "Lumbini Tour",
    overview:
      "<p>The <strong>Lumbini Tour</strong> spends three days at the birthplace of the Buddha, on the Terai plains near the Indian border. At the centre of the sacred garden stands the <strong>Maya Devi Temple</strong>, built over the exact spot marked by the <strong>Ashoka Pillar</strong> in 249 BC, beside the pool where Queen Maya Devi is said to have bathed before giving birth and a Bodhi tree hung with prayer flags.</p><p>Around the garden lies the <strong>monastic zone</strong>, a three-kilometre park where more than twenty countries have each built a monastery in their own tradition — Thai, Burmese, German, Korean, Japanese, Vietnamese, Chinese — so that a morning's cycle takes you through most of the Buddhist world. The second day goes out to <strong>Tilaurakot</strong>, the excavated palace of Kapilvastu where the Buddha spent his first twenty-nine years, which almost no visitor to Lumbini reaches.</p>",
    highlights: [
      ["The Maya Devi Temple", "The marker stone identifying the exact birthplace, and the Ashoka Pillar inscribed in 249 BC."],
      ["The Monastic Zone", "More than twenty national monasteries in a three-kilometre park, each in its own architectural tradition."],
      ["Tilaurakot, Ancient Kapilvastu", "The excavated palace where the Buddha lived until he was twenty-nine, twenty-seven kilometres west and almost empty."],
      ["The World Peace Pagoda", "The Japanese-built stupa at the northern end of the park, best at sunset."],
      ["Flights Both Ways", "Kathmandu to Bhairahawa in forty minutes rather than eight hours on the highway."],
    ],
    sections: [
      {
        heading: "The Sacred Garden and What Is Actually There",
        content:
          "<p>The <strong>Maya Devi Temple</strong> is a low white building housing the excavated foundations of earlier shrines, and at the centre a <strong>marker stone</strong> identified by archaeologists as the precise spot of the birth. Photography inside is not permitted. Beside it stands the <strong>Ashoka Pillar</strong>, erected by the emperor in 249 BC and carrying an inscription stating that he came in person and exempted the village from tax — the earliest hard evidence for the site.</p><p>The <strong>Puskarini pool</strong> beside the temple is where Queen Maya Devi is said to have bathed, and the Bodhi tree above it is hung with thousands of prayer flags. Around all of this are the brick foundations of monasteries and stupas from the third century BC to the fifth century AD. It is a quiet, low-key place rather than a spectacular one, and it rewards an unhurried visit at dawn or dusk.</p>",
      },
      {
        heading: "Getting There and the Season",
        content:
          "<p>The tour flies <strong>Kathmandu to Bhairahawa</strong> — Gautam Buddha International Airport — in about forty minutes, then drives twenty-two kilometres to Lumbini. The alternative is eight to ten hours on the Prithvi and Mahendra highways, which we will arrange at a lower price if you prefer, but the flight buys you most of a day at each end.</p><p><strong>October to March</strong> is the season. The Terai is hot: temperatures reach the low forties in May and June and the humidity through the monsoon is heavy. December and January are ideal for walking the park, though morning fog on the plains occasionally delays the flight. Avoid <strong>April to June</strong> unless you are comfortable in serious heat, and note that the monsoon brings mosquitoes as well as rain.</p>",
      },
      {
        heading: "Beyond the Garden: Kapilvastu and Ramagrama",
        content:
          "<p><strong>Tilaurakot</strong>, twenty-seven kilometres west, is the archaeological site most scholars identify as <strong>Kapilvastu</strong>, the Shakya capital where Siddhartha Gautama lived as a prince until he left at twenty-nine. The excavations show a moat, fortification walls, gateways and the foundations of the palace complex, set in mango groves. There is almost never anybody there, and it is the part of this tour that people remember.</p><p>Nearby are the stupas at <strong>Gotihawa</strong> and <strong>Niglihawa</strong>, both with Ashokan pillar fragments, and further east lies <strong>Ramagrama</strong>, the only one of the eight original relic stupas of the Buddha never opened — an unexcavated earth mound still holding its portion of the ashes. Your guide will build the second day around whichever of these interests you.</p>",
      },
      {
        heading: "What to Wear and How to Behave",
        content:
          "<p>Lumbini is an active pilgrimage site and modest dress is expected: shoulders and knees covered, in the sacred garden and in every monastery. <strong>Shoes come off</strong> at the Maya Devi Temple and at monastery entrances, so footwear that slips off easily saves a great deal of bending. Photography is not allowed inside the Maya Devi Temple and is restricted in some monastery halls.</p><p>The park is large and flat — three kilometres from the sacred garden to the World Peace Pagoda — and the standard way to cover it is by <strong>bicycle or electric rickshaw</strong>, both included. Bring sunscreen, a hat and plenty of water; there is very little shade in the central canal area. Insect repellent is worth carrying at any time of year and essential from June to September.</p>",
      },
    ],
    faqs: [
      { question: "How do we get to Lumbini?", answer: "By air. The tour flies Kathmandu to Bhairahawa in about forty minutes, then drives twenty-two kilometres to Lumbini. A road version exists and takes eight to ten hours each way on the Prithvi and Mahendra highways; we will price it if you prefer, but it costs you most of two days." },
      { question: "Is the exact birthplace really known?", answer: "As precisely as archaeology allows. The Ashoka Pillar of 249 BC carries an inscription recording the emperor's visit to the birthplace, which fixes the site itself, and a marker stone inside the Maya Devi Temple was identified in 1996 excavations as indicating the exact spot. Whether you take that literally is a matter of faith; the pillar is hard evidence that the site was already identified as the birthplace two thousand two hundred years ago." },
      { question: "How much time do you need at Lumbini?", answer: "The sacred garden takes half a day and the monastic zone another half. A third day lets you reach Tilaurakot and the Kapilvastu sites, which most visitors never see and which we think justify the extra night. Two days is enough for the garden and the monasteries alone if your schedule is tight." },
      { question: "Can we cycle around the monastic zone?", answer: "Yes, and it is the best way to do it. The park is three kilometres end to end and flat, and bicycles are included in the tour. Electric rickshaws are also available and included if you would rather not cycle. Walking the whole park is possible but hot for most of the year." },
      { question: "Which monasteries are worth seeing?", answer: "The Thai monastery for its white marble, the Myanmar Golden Temple, the German Great Lotus Stupa for its interior murals, the Korean Dae Sung Shakya, and the Japanese-built World Peace Pagoda at the northern end, which is best at sunset. Your guide will route you through a representative selection rather than all twenty-five." },
      { question: "Is there anything for non-Buddhist visitors?", answer: "A great deal. Lumbini is a UNESCO World Heritage Site and one of the most significant archaeological landscapes in South Asia, and the monastic zone is an unusual open-air museum of Buddhist architecture from a dozen countries. You do not need to be a pilgrim to find three days here worthwhile." },
      { question: "How hot does it get?", answer: "Very. This is the Terai, not the hills — temperatures reach the low forties in May and June, and the monsoon from June to September is hot and humid with mosquitoes. October to March is comfortable, and December and January are genuinely pleasant, with the occasional morning fog that can delay the Bhairahawa flight." },
      { question: "Can this be combined with Chitwan?", answer: "Yes, easily, and it is the most common extension. Chitwan is on the road between Kathmandu and Lumbini, so a jungle safari fits naturally either side of these three days. Tell us at booking and we will build the combined itinerary rather than selling you two separate tours." },
    ],
    inclusions: {
      airportTransfer: true,
      flights: ["Return domestic flights from Kathmandu to Bhairahawa and back."],
      transport: [
        "Private vehicle with driver from Bhairahawa airport to Lumbini and for the Tilaurakot and Kapilvastu excursion.",
        "Bicycles or electric rickshaw within the Lumbini monastic zone.",
      ],
      accommodation: ["Two nights at a hotel in Lumbini with breakfast."],
      entrance: "Lumbini sacred garden and Maya Devi Temple fees, museum entry, and the Tilaurakot site fee.",
      guide: "Government-licensed English-speaking Buddhist heritage guide throughout.",
      extra: ["Bottled water in the vehicle."],
    },
    exclusions: {
      domestic: true,
      meals: "Lunch and dinner throughout.",
      extra: ["Offerings and donations at individual monasteries."],
    },
    luxuryVehicleAddon: false,
    fixedDepartureDay: "friday",
    itineraryDescription:
      "Three days at the birthplace of the Buddha: the sacred garden and Ashoka Pillar, the international monastic zone, and the excavated Shakya capital at Tilaurakot.",
    inExDescription:
      "Return flights to Bhairahawa, airport transfers, private vehicle, two hotel nights with breakfast, bicycles in the park, a licensed heritage guide, all entrance fees and government taxes are included, while lunch, dinner, personal expenses, donations and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Lumbini Tour – 3 Days at the Birthplace of the Buddha",
      description:
        "Three days in Lumbini with flights from Kathmandu: the Maya Devi Temple and Ashoka Pillar, the international monastic zone, and Tilaurakot in ancient Kapilvastu.",
      keywords:
        "Lumbini tour, Lumbini Nepal, birthplace of Buddha tour, Maya Devi Temple, Ashoka Pillar Lumbini, Tilaurakot Kapilvastu, Buddhist pilgrimage Nepal, Lumbini flight package",
      tags: "Lumbini Tour, Pilgrimage Tours, Buddhist Heritage, Lumbini, Kapilvastu, Nepal Tours",
    },
  },
  days: [
    {
      title: "Fly to Bhairahawa (110 m) and Visit the Lumbini Sacred Garden",
      elevation: "110 m",
      accommodation: "Lumbini",
      placeDescription: "The birthplace of the Buddha on the Terai plains, a UNESCO World Heritage Site.",
      ...LUMBINI,
      html: p(
        "A morning transfer to the domestic terminal for the forty-minute flight south-west to <strong>Bhairahawa</strong>, with the Himalaya along the right-hand windows and then the flat green of the Terai below.",
        "A twenty-two kilometre drive brings you to <strong>Lumbini</strong> and your hotel.",
        "The afternoon is the <strong>sacred garden</strong>: the <strong>Maya Devi Temple</strong> over the marker stone identifying the birthplace, the <strong>Ashoka Pillar</strong> inscribed in 249 BC, the Puskarini pool where Queen Maya Devi is said to have bathed, and the Bodhi tree hung with prayer flags.",
        "Around them lie the brick foundations of monasteries and stupas spanning eight centuries. Dusk is the best hour here, when the pilgrims chant and the crowds have gone.",
        "Overnight in Lumbini.",
      ),
    },
    {
      title: "Tilaurakot and the Kapilvastu Sites",
      elevation: "110 m",
      accommodation: "Lumbini",
      placeDescription: "The excavated Shakya capital where the Buddha lived until the age of twenty-nine.",
      ...TILAURAKOT,
      html: p(
        "A day out to the country the Buddha actually grew up in, which almost nobody who visits Lumbini sees.",
        "<strong>Tilaurakot</strong>, twenty-seven kilometres west, is identified by most scholars as <strong>Kapilvastu</strong>, the Shakya capital where Siddhartha Gautama lived as a prince until he left at twenty-nine. The excavations show a moat, fortification walls, two gateways and the foundations of the palace complex, laid out in mango groves with a small museum beside them.",
        "It is quiet to the point of emptiness and the atmosphere is completely unlike the sacred garden.",
        "Nearby are the Ashokan pillar fragments at <strong>Niglihawa</strong> and <strong>Gotihawa</strong>, and your guide will shape the afternoon around whichever of these interests you.",
        "Back to Lumbini for the evening. Overnight in Lumbini.",
      ),
    },
    {
      title: "The Monastic Zone and Flight to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "An early start on bicycles through the <strong>monastic zone</strong>, the three-kilometre park laid out to Kenzo Tange's 1978 master plan, where more than twenty countries have each built a monastery in their own tradition.",
        "The eastern side holds the Theravada monasteries — Thai, Myanmar, Sri Lankan, Cambodian — and the western side the Mahayana and Vajrayana ones, including the German Great Lotus Stupa with its interior murals, the Korean Dae Sung Shakya and the Chinese Zhong Hua.",
        "At the northern end stands the Japanese-built <strong>World Peace Pagoda</strong> and the crane sanctuary beside it.",
        "After lunch the drive back to <strong>Bhairahawa</strong> for the afternoon flight to <strong>Kathmandu</strong>, and a transfer to your hotel.",
        "Overnight in Kathmandu.",
      ),
    },
  ],
};

export const valleyRimTours: Tour[] = [nagarkotSunriseTour, dhulikhelNamobuddhaHike, lumbiniTour];
