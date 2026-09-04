/**
 * Region: Pilgrimage Tours.
 *
 * "Buddhist Pilgrimage Tour in Nepal – 8 Days" from the source list is the same
 * product as "Buddhist Pilgrimage Tour" and appears once, here, rather than
 * being repeated under Multiple Day Tours.
 */
import { KATHMANDU, KTM_PLACE, POKHARA, PKR_PLACE, p, type Tour } from "./types";

const REGION = "Pilgrimage Tours";

const PASHUPATINATH = { lng: 85.3486, lat: 27.7104 };
const JANAKPUR = { lng: 85.9250, lat: 26.7290 };
const BARAHAKSHETRA = { lng: 87.1520, lat: 26.8420 };
const DEVGHAT = { lng: 84.4230, lat: 27.7100 };
const LUMBINI = { lng: 83.2760, lat: 27.4690 };
const TILAURAKOT = { lng: 83.0530, lat: 27.5750 };
const BOUDHA = { lng: 85.3620, lat: 27.7215 };
const NAMOBUDDHA = { lng: 85.5820, lat: 27.5800 };
const GOSAIKUNDA = { lng: 85.4160, lat: 28.0830 };
const DHUNCHE = { lng: 85.2970, lat: 28.1120 };
const CHANDANBARI = { lng: 85.3830, lat: 28.0700 };
const MUKTINATH = { lng: 83.8720, lat: 28.8170 };
const JOMSOM = { lng: 83.7220, lat: 28.7810 };

const PILGRIM_SECTIONS = [
  {
    heading: "Temple Etiquette",
    content:
      "<p>Dress modestly at every site — shoulders and knees covered, and shoes removed before entering a shrine. <strong>Leather is not permitted</strong> inside many Hindu temples, so leave belts, bags and camera straps in the vehicle where your guide advises. Walk clockwise around a temple, a stupa or a mani wall.</p><p>Photography is restricted in most inner sanctums and forbidden at cremations. At <strong>Pashupatinath</strong> the main temple is open to Hindus only; everyone else views it from the eastern terrace across the Bagmati, which is where the guide will take you. Ask before photographing people at prayer, and accept a no gracefully.</p>",
  },
  {
    heading: "Best Time to Travel",
    content:
      "<p><strong>October to March</strong> is comfortable everywhere on these routes, and the Terai sites at Lumbini and Janakpur are only really pleasant in those months — from April the plains become very hot and by May they are punishing.</p><p>Festival timing changes the experience entirely. <strong>Maha Shivaratri</strong> at Pashupatinath in February or March draws hundreds of thousands of pilgrims and sadhus; <strong>Janai Purnima</strong> in August fills Gosaikunda; <strong>Vivaha Panchami</strong> in Nov–Dec is Janakpur's great festival. Tell us if you want to travel for one and we will build the itinerary around the date.</p>",
  },
  {
    heading: "Physical Demands",
    content:
      "<p>Most of these routes are vehicle-based with short walks between shrines, and are suitable for elderly pilgrims — that is who they are largely designed for. Expect stairs at Swayambhunath and Namobuddha, uneven flagstones at Pashupatinath, and a good deal of standing.</p><p>The exceptions are altitude sites. <strong>Muktinath at 3,760 m</strong> and <strong>Gosaikunda at 4,380 m</strong> are high enough to cause altitude sickness, and the Gosaikunda route involves two to three days of walking. Anyone with a heart or lung condition should take medical advice before booking those, and we can substitute a helicopter for the Muktinath leg.</p>",
  },
  {
    heading: "Offerings and Costs",
    content:
      "<p>Offerings are personal and are not included in the tour price. Flower garlands, incense, oil lamps and prasad are sold at every site for small amounts, and your guide will show you where to buy them and what is customary rather than letting you be overcharged at the gate.</p><p>Priests at the major shrines will offer to perform a <em>puja</em> for a donation; the amount is up to you and your guide can advise what is normal. Carry small notes. Photography permits, where they exist, and monument entry fees are included in your package.</p>",
  },
];

const PILGRIM_FAQS = [
  { question: "Can non-Hindus enter the temples?", answer: "Most, yes. The significant exception is the main Pashupatinath temple, which admits Hindus only — everyone else views the complex and the cremation ghats from the terrace across the river, which is arguably the better vantage anyway. Buddhist sites have no such restriction." },
  { question: "Is this suitable for elderly pilgrims?", answer: "The vehicle-based routes very much so, and they are mainly booked by older travellers. The walking is short and can be shortened further, and we can arrange assistance at the sites with stairs. The high-altitude legs at Muktinath and Gosaikunda are a different matter and need a doctor's view first." },
  { question: "What should I wear?", answer: "Modest clothing covering shoulders and knees, and shoes that come off easily since you will remove them at every shrine. Avoid leather belts and bags on temple days. A shawl or scarf is useful for covering your head where that is expected." },
  { question: "Are meals vegetarian?", answer: "They can be entirely vegetarian, and satvik meals without onion or garlic can be arranged if you tell us at booking. Many of the pilgrimage sites have no meat available in any case, and we plan the food around whatever your practice requires." },
  { question: "Can we time the trip for a festival?", answer: "Yes, and it is worth doing. Maha Shivaratri, Janai Purnima, Vivaha Panchami and Buddha Jayanti all transform the sites they belong to. The dates move with the lunar calendar, so tell us the festival rather than the date and we will fix the itinerary around it." },
  { question: "How do we reach Muktinath?", answer: "By road up the Kali Gandaki from Pokhara, by flight to Jomsom and jeep, or by helicopter direct from Pokhara. The road is long and rough; the flight is quick but weather-dependent; the helicopter is the option most older pilgrims choose and we can substitute it into any itinerary." },
  { question: "Are the offerings included in the price?", answer: "No — garlands, lamps, prasad and priest donations are personal and left to you. Your guide will show you where to buy them at the proper price and advise what is customary for a puja, which saves both money and awkwardness." },
  { question: "Is photography allowed?", answer: "Generally in the courtyards and grounds, generally not in the inner sanctum, and never at the cremation ghats at Pashupatinath. Signs are not always in English, so follow your guide. Ask individuals before photographing them and respect a refusal." },
];

export const hinduPilgrimageTour: Tour = {
  region: REGION,
  price: 1150,
  difficulty: "easy",
  maxAltitude: 3760,
  center: [85.2, 27.6],
  zoom: 7.5,
  content: {
    slug: "hindu-pilgrimage-tour",
    title: "Hindu Pilgrimage Tour",
    overview:
      "<p>The <strong>Hindu Pilgrimage Tour</strong> covers Nepal's principal shrines in one journey: <strong>Pashupatinath</strong>, the Jyotirlinga of Shiva on the Bagmati and the holiest Hindu site in the country; <strong>Janakpur</strong>, birthplace of Sita and the setting of her marriage to Rama; <strong>Barahakshetra</strong> at the confluence of the Koshi; the ashrams of <strong>Devghat</strong>; and <strong>Muktinath</strong> at 3,760 m in Mustang, one of the eight self-manifested shrines of Vishnu.</p><p>It is a vehicle-based route designed for pilgrims rather than sightseers, with time allowed for darshan and puja at each site instead of a fixed sightseeing clock. The itinerary runs from the Terai plains to the trans-Himalaya, and the Muktinath leg can be flown by helicopter for anyone who would rather not spend two days on the Kali Gandaki road.</p>",
    highlights: [
      ["Pashupatinath", "Darshan at the Jyotirlinga of Shiva on the Bagmati, the holiest Hindu site in Nepal."],
      ["Muktinath (3,760 m)", "One of the eight svayam vyakta kshetras of Vishnu, with its 108 water spouts and eternal flame."],
      ["Janakpur and Janaki Mandir", "The birthplace of Sita and the marble temple built for her in 1910."],
      ["Barahakshetra on the Koshi", "The Varaha shrine at the river confluence, one of the four great Kshetras."],
      ["Devghat Ashrams", "The confluence where the Kali Gandaki and Trishuli meet, and where pilgrims retire to live."],
    ],
    sections: PILGRIM_SECTIONS,
    faqs: PILGRIM_FAQS,
    inclusions: {
      airportTransfer: true,
      flights: ["Pokhara – Jomsom return flights for the Muktinath leg, subject to weather."],
      transport: ["Private vehicle for the full route from Kathmandu through the Terai, Pokhara and back."],
      accommodation: ["Nine nights in hotels and pilgrim guesthouses along the route, with breakfast."],
      meals: ["Vegetarian breakfast and dinner throughout; satvik meals on request."],
      entrance: "All temple entry and monument fees along the route.",
      permits: "Annapurna Conservation Area Permit for the Muktinath sector.",
      guide: "English- and Hindi-speaking guide familiar with pilgrimage practice at each site.",
    },
    exclusions: { extra: ["Offerings, puja donations and priest fees.", "Lunches on travelling days."] },
    addons: [
      {
        title: "Muktinath by Helicopter",
        description: "Replace the Jomsom flight and jeep with a direct helicopter from Pokhara to the Muktinath temple, landing beside the complex and returning the same morning.",
        unit: "person",
        pricePerUnit: 850,
      },
    ],
    fixedDepartureDay: "monday",
    itineraryDescription: "Ten days visiting Nepal's principal Hindu shrines, from Pashupatinath and Janakpur on the plains to Muktinath at 3,760 m.",
    inExDescription: "Airport transfers, private vehicle for the whole route, the Jomsom flights, hotel and guesthouse nights, vegetarian meals, temple entries, the conservation permit and a pilgrimage guide are included, while international flights, visa, insurance, offerings and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Hindu Pilgrimage Tour in Nepal – Pashupatinath to Muktinath",
      description: "A ten-day Hindu pilgrimage through Nepal covering Pashupatinath, Janakpur, Barahakshetra, Devghat and Muktinath (3,760 m).",
      keywords: "Hindu pilgrimage tour Nepal, Pashupatinath darshan, Muktinath yatra, Janakpur Janaki Mandir, Barahakshetra, Devghat",
      tags: "Pilgrimage Tours, Hindu, Pashupatinath, Muktinath, Janakpur, Nepal Tours",
    },
  },
  days: [
    {
      title: "Arrival in Kathmandu (1,400 m) and evening aarati at Pashupatinath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PASHUPATINATH,
      html: p(
        "Our representative meets you at <strong>Tribhuvan International Airport</strong> and transfers you to your hotel.",
        "In the late afternoon we go to <strong>Pashupatinath</strong> for the evening <em>aarati</em> on the western bank of the Bagmati. The ceremony is performed at dusk by young priests with oil lamps, bells and conch, and the crowd on the terraces is largely local rather than touristic.",
        "The complex is the holiest Hindu site in Nepal and one of the great Shiva temples of the subcontinent. Non-Hindus view the pagoda from across the river; the guide explains the layout, the Bachhareshwari and Guhyeshwari shrines and the cremation ghats below.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Pashupatinath darshan and the Kathmandu valley shrines",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PASHUPATINATH,
      html: p(
        "An early return to <strong>Pashupatinath</strong> for morning darshan, which is far quieter than the evening. Hindu pilgrims enter the main temple; the guide accompanies others around the eastern complex, the 108 Shiva lingams and the sadhu compound.",
        "The rest of the day covers the valley's other principal shrines: <strong>Guhyeshwari</strong>, one of the Shakti Peethas; <strong>Budhanilkantha</strong>, where a fifth-century Vishnu lies on a bed of nagas in a stone tank; and <strong>Dakshinkali</strong>, the Kali shrine south of the valley where sacrifices are made on Tuesdays and Saturdays.",
        "If the calendar allows, the day finishes at the <strong>Changu Narayan</strong> temple, the oldest standing shrine in Nepal and a Vishnu foundation of the fourth century.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive to Janakpur (74 m)",
      elevation: "74 m",
      accommodation: "Janakpur",
      placeDescription: "The birthplace of Sita on the Terai plains, and the site of the Janaki Mandir.",
      ...JANAKPUR,
      html: p(
        "A long drive south-east out of the hills onto the Terai — seven to eight hours on the highway with a lunch stop, dropping from 1,400 m to the flat plains near the Indian border.",
        "<strong>Janakpur</strong> is the ancient capital of Mithila and, in the Ramayana, the birthplace of <strong>Sita</strong> and the place where she was married to Rama. The town is a working pilgrimage centre rather than a museum: dhoti-clad pilgrims, cycle rickshaws, and Maithili spoken everywhere.",
        "You arrive in time for the evening at the <strong>Janaki Mandir</strong>, a marble temple in Mughal-Rajput style built in 1910 on the spot where Sita's image is said to have been found.",
        "Overnight in Janakpur.",
      ),
    },
    {
      title: "Janakpur temples and Mithila art",
      elevation: "74 m",
      accommodation: "Janakpur",
      placeDescription: "The birthplace of Sita on the Terai plains, and the site of the Janaki Mandir.",
      ...JANAKPUR,
      html: p(
        "A full morning at the <strong>Janaki Mandir</strong> and the adjoining <strong>Ram Sita Bibaha Mandap</strong>, the pavilion marking the marriage itself, which is the focus of the Vivaha Panchami festival each winter.",
        "The town holds dozens of sacred ponds — <strong>Dhanush Sagar</strong> and <strong>Ganga Sagar</strong> among them — and pilgrims bathe in them in a set order. Your guide walks the circuit with you.",
        "The afternoon visits a <strong>Mithila art</strong> centre in one of the surrounding villages, where women paint the geometric and figurative wall art of this region on paper and canvas. It is one of the oldest living folk traditions in South Asia and the co-operatives sell directly.",
        "Overnight in Janakpur.",
      ),
    },
    {
      title: "Drive to Barahakshetra (150 m) via the Koshi",
      elevation: "150 m",
      accommodation: "Dharan",
      placeDescription: "A hill-foot town in eastern Nepal, the base for the Barahakshetra and Dantakali shrines.",
      ...BARAHAKSHETRA,
      html: p(
        "East along the Terai highway across the <strong>Koshi barrage</strong>, where the river spreads into a wetland that is one of the best birding sites in Nepal — a stop worth making even on a pilgrimage.",
        "<strong>Barahakshetra</strong> stands at the confluence of the Koka and the Koshi and is one of the four great Kshetras of Nepal, dedicated to <strong>Varaha</strong>, the boar avatar of Vishnu. Pilgrims bathe at the confluence before darshan.",
        "The site is old, quiet and much less visited than the western shrines, set among sal forest above the river.",
        "The night is at <strong>Dharan</strong> at the foot of the hills, from where the <strong>Dantakali</strong> Shakti Peetha and the Budha Subba shrine can be visited in the late afternoon. Overnight at Dharan.",
      ),
    },
    {
      title: "Drive west to Chitwan and Devghat (200 m)",
      elevation: "200 m",
      accommodation: "Devghat",
      placeDescription: "The confluence of the Kali Gandaki and Trishuli, an ashram town where pilgrims retire to live.",
      ...DEVGHAT,
      html: p(
        "A long westward drive along the Terai and up the Narayani — the single biggest travelling day of the tour, broken with stops.",
        "<strong>Devghat</strong> lies at the confluence of the <strong>Kali Gandaki</strong> and the <strong>Trishuli</strong>, where the combined river becomes the Narayani. It is one of the most sacred confluences in Nepal and a place where devout Hindus come to spend their final years in the ashrams above the water.",
        "Pilgrims bathe at the sangam and perform <em>shraddha</em> rites for their ancestors here, particularly at <strong>Maghe Sankranti</strong> in January when tens of thousands arrive.",
        "The atmosphere is quiet and unusually gentle — old people, ashram bells, and the river. Overnight at Devghat or nearby Bharatpur.",
      ),
    },
    {
      title: "Drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "North-west up the Prithvi Highway along the Trishuli, climbing off the plains and back into the hills — four to five hours.",
        "In <strong>Pokhara (822 m)</strong> the afternoon covers the valley's own sacred sites: the <strong>Bindhyabasini</strong> temple on its hilltop in the old bazaar, one of the oldest in the region; the <strong>Tal Barahi</strong> shrine on its island in Phewa Lake, reached by rowing boat; and the <strong>Gupteshwor Mahadev</strong> cave, where a natural Shiva lingam stands in a chamber beneath Devi's Fall.",
        "The evening is free by the lake, with the Annapurnas across the water.",
        "Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Jomsom (2,720 m) and drive to Muktinath (3,760 m)",
      elevation: "3,760 m",
      accommodation: "Muktinath",
      placeDescription: "A temple complex at 3,760 m in Mustang, sacred to Hindus as Mukti Kshetra.",
      ...MUKTINATH,
      html: p(
        "An early flight from Pokhara up the <strong>Kali Gandaki</strong> to <strong>Jomsom (2,720 m)</strong> — twenty minutes between Dhaulagiri and Annapurna through the deepest gorge on earth.",
        "A jeep continues up the valley through Kagbeni, where the green ends and Mustang's high desert begins, climbing to <strong>Muktinath (3,760 m)</strong>.",
        "The complex is one of the eight <em>svayam vyakta kshetras</em> of Vishnu and one of the 108 Divya Desams. Pilgrims pass beneath the <strong>108 bull-head water spouts</strong>, bathe in the two Mukti Kunda pools, and take darshan at the pagoda. The <strong>Jwala Mai</strong> shrine below holds a natural gas flame burning over spring water — the meeting of the elements that gives the site its meaning.",
        "The altitude is real at 3,760 m; move slowly. Overnight at Muktinath or Jomsom.",
      ),
    },
    {
      title: "Return to Pokhara and fly to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "An early jeep down to <strong>Jomsom</strong> for the morning flight — mountain flights here operate before the valley wind builds, so departures are at first light.",
        "The flight lands in <strong>Pokhara</strong> and connects onward to <strong>Kathmandu (1,400 m)</strong>, arriving around midday.",
        "The afternoon is free, or can be used for any shrine you would like to return to. Many pilgrims choose a second darshan at Pashupatinath now that the circuit is complete.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Kathmandu Airport",
      placeDescription: "Nepal's main international airport and the final departure point for your journey.",
      lng: 85.356,
      lat: 27.6993,
      html: p(
        "The morning is free for last offerings or shopping in the bazaars around Ason and Indra Chowk, where puja goods, brass and rudraksha are sold.",
        "We collect you from your hotel three hours before your flight and transfer you to <strong>Tribhuvan International Airport</strong>.",
        "Over ten days the route has taken in the Jyotirlinga at Pashupatinath, Sita's Janakpur, the Varaha shrine on the Koshi, the ashrams at Devghat and Vishnu's Muktinath at 3,760 m — the principal Hindu pilgrimage of Nepal in a single circuit.",
      ),
    },
  ],
};

export const buddhistPilgrimageTour: Tour = {
  region: REGION,
  price: 985,
  difficulty: "easy",
  maxAltitude: 1750,
  center: [84.3, 27.6],
  zoom: 8,
  content: {
    slug: "buddhist-pilgrimage-tour-nepal",
    title: "Buddhist Pilgrimage Tour in Nepal – 8 Days",
    overview:
      "<p>Nepal holds the first of the four great Buddhist pilgrimage sites: <strong>Lumbini</strong>, where the Buddha was born in 623 BCE, marked by the Ashokan pillar and the Maya Devi temple built over the exact spot. This eight-day route covers Lumbini and the archaeological remains of <strong>Kapilvastu</strong> where he grew up, then returns to the Kathmandu valley for the living Buddhist tradition.</p><p>In the valley the tour takes in <strong>Boudhanath</strong>, the largest stupa in Nepal and the heart of its Tibetan community; <strong>Swayambhunath</strong>, older still and set on its hill above the city; and <strong>Namobuddha</strong>, where the Buddha in a previous life is said to have given his body to a starving tigress. It is a route about origins and continuity rather than monuments.</p>",
    highlights: [
      ["Lumbini, the Birthplace", "Stand at the Maya Devi temple and the Ashokan pillar that marks the exact site."],
      ["Kapilvastu at Tilaurakot", "Walk the excavated palace grounds where Prince Siddhartha spent his first 29 years."],
      ["Boudhanath Stupa", "Join the evening kora at the largest stupa in Nepal and the centre of its Tibetan life."],
      ["Swayambhunath", "Climb to the 2,000-year-old hilltop stupa above the Kathmandu valley."],
      ["Namobuddha", "Visit the site of the Buddha's tigress jataka and the great Thrangu monastery beside it."],
    ],
    sections: PILGRIM_SECTIONS,
    faqs: PILGRIM_FAQS,
    inclusions: {
      airportTransfer: true,
      flights: ["Kathmandu – Bhairahawa flight for the Lumbini leg."],
      transport: ["Private vehicle for the full route, including the Kapilvastu and Namobuddha excursions."],
      accommodation: ["Seven nights in hotels and monastery guesthouses along the route, with breakfast."],
      meals: ["Vegetarian breakfast and dinner throughout."],
      entrance: "Lumbini Development Trust, Tilaurakot, Boudhanath, Swayambhunath and Namobuddha entry fees.",
      guide: "Guide familiar with Buddhist practice and the archaeology of the Terai sites.",
      extra: ["Meditation session with monks at Lumbini, arranged in advance."],
    },
    exclusions: { extra: ["Offerings, butter lamps and monastery donations.", "Lunches on travelling days."] },
    fixedDepartureDay: "tuesday",
    itineraryDescription: "Eight days from the Buddha's birthplace at Lumbini and the ruins of Kapilvastu to the living Buddhist sites of the Kathmandu valley.",
    inExDescription: "Airport transfers, the Bhairahawa flight, private vehicle, hotel and monastery nights, vegetarian meals, all site entries and a specialist guide are included, while international flights, visa, insurance, offerings and tips are excluded.",
    bestTime: "Oct-Mar",
    meta: {
      title: "Buddhist Pilgrimage Tour in Nepal – 8 Days from Lumbini",
      description: "An eight-day Buddhist pilgrimage covering Lumbini, Kapilvastu, Boudhanath, Swayambhunath and Namobuddha in Nepal.",
      keywords: "Buddhist pilgrimage Nepal, Lumbini tour, Kapilvastu Tilaurakot, Boudhanath, Namobuddha, Buddha birthplace",
      tags: "Pilgrimage Tours, Buddhist, Lumbini, Boudhanath, Namobuddha, Nepal Tours",
    },
  },
  days: [
    {
      title: "Arrival in Kathmandu (1,400 m) and evening at Boudhanath",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...BOUDHA,
      html: p(
        "Our representative meets you at the airport and transfers you to your hotel.",
        "In the late afternoon we go to <strong>Boudhanath</strong>, the largest stupa in Nepal and the centre of Tibetan Buddhist life in the country. Arrive as the light drops and walk the clockwise <em>kora</em> with the crowd — monks, Tibetan families, traders from the Khumbu and Mustang — while butter lamps are lit and horns sound from the monastery roofs.",
        "The stupa has stood here since at least the fourteenth century and was rebuilt by the community after the 2015 earthquake within two years, largely by donation.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Swayambhunath and the Kathmandu valley monasteries",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      lng: 85.29,
      lat: 27.7148,
      html: p(
        "<strong>Swayambhunath</strong> in the morning, climbing the eastern stairway to the hilltop stupa. The site is older than Boudhanath — parts of it date to the fifth century and the tradition holds it self-arose from a lotus on the primordial lake that filled the valley.",
        "The painted eyes of the Buddha look out over Kathmandu from all four sides, and the platform holds shrines to both Buddhist and Hindu deities, which is the valley's religious character in one place.",
        "The afternoon visits the monasteries around Boudha — <strong>Shechen</strong>, <strong>Kopan</strong> on its hill, and the smaller gompas where teaching goes on daily — and the traditional thangka workshops where painters still work in mineral pigment.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Fly to Bhairahawa and drive to Lumbini (150 m)",
      elevation: "150 m",
      accommodation: "Lumbini",
      placeDescription: "The birthplace of the Buddha and a UNESCO World Heritage Site on the Terai plains.",
      ...LUMBINI,
      html: p(
        "A morning flight south-west to <strong>Bhairahawa</strong> on the Terai — 35 minutes, with the Himalaya along the right-hand windows — and a short drive to <strong>Lumbini (150 m)</strong>.",
        "The afternoon enters the sacred garden. The <strong>Maya Devi temple</strong> stands over the marker stone identifying the exact birthplace, with the excavated brick foundations of earlier shrines beneath it. Beside it is the <strong>Ashokan pillar</strong>, erected in 249 BCE by the emperor Ashoka, whose inscription is the oldest evidence that this is the place.",
        "The <strong>Puskarini</strong> pool where Maya Devi is said to have bathed lies in front, under the Bodhi tree hung with prayer flags.",
        "Pilgrims sit and meditate here through the afternoon; there is no need to hurry. Overnight at Lumbini.",
      ),
    },
    {
      title: "Lumbini monastic zone and meditation with the monks",
      elevation: "150 m",
      accommodation: "Lumbini",
      placeDescription: "The birthplace of the Buddha and a UNESCO World Heritage Site on the Terai plains.",
      ...LUMBINI,
      html: p(
        "An early <strong>meditation session</strong> with monks in one of the monasteries, arranged in advance — the quietest hour of the day in Lumbini and, for many pilgrims, the point of coming.",
        "The rest of the day covers the <strong>monastic zone</strong>, a planned area where more than twenty countries have each built a monastery in their own tradition: the Thai wat in white and gold, the Myanmar Lokamani Pula pagoda, the German-built Great Lotus Stupa, the Chinese, Korean, Vietnamese and Sri Lankan foundations. Walking between them is an education in how differently one teaching is expressed.",
        "The <strong>World Peace Pagoda</strong> and the crane sanctuary sit at the northern end of the site, reachable by cycle rickshaw along the central canal.",
        "Overnight at Lumbini.",
      ),
    },
    {
      title: "Kapilvastu, Tilaurakot and the Ramagrama stupa",
      elevation: "150 m",
      accommodation: "Lumbini",
      placeDescription: "The birthplace of the Buddha and a UNESCO World Heritage Site on the Terai plains.",
      ...TILAURAKOT,
      html: p(
        "A drive west to <strong>Tilaurakot</strong>, identified by most archaeologists as <strong>Kapilvastu</strong> — the capital of the Shakya kingdom where Prince Siddhartha spent his first twenty-nine years before leaving through the eastern gate.",
        "The site is excavated rather than reconstructed: brick foundations, the gateways, the moat and the road, set in quiet sal woodland. It is far less visited than Lumbini and considerably more affecting for it.",
        "Nearby are <strong>Kudan</strong>, where the Buddha is said to have met his father after his enlightenment, and <strong>Gotihawa</strong> with its Ashokan pillar stump.",
        "The route back can include <strong>Ramagrama</strong>, the only one of the eight original relic stupas never opened — the earth mound still holds its share of the Buddha's ashes.",
        "Overnight at Lumbini.",
      ),
    },
    {
      title: "Fly to Kathmandu and drive to Namobuddha (1,750 m)",
      elevation: "1,750 m",
      accommodation: "Namobuddha",
      placeDescription: "A hilltop stupa and monastery south-east of the Kathmandu valley, site of the tigress jataka.",
      ...NAMOBUDDHA,
      html: p(
        "The morning flight back to <strong>Kathmandu</strong>, then a drive south-east out of the valley through Banepa and Dhulikhel into farming country.",
        "<strong>Namobuddha (1,750 m)</strong> is one of the three most sacred Buddhist sites in Nepal. The stupa marks the place where, in a previous life, the Buddha as Prince Mahasattva is said to have given his body to a starving tigress and her cubs — the <em>jataka</em> of compassion that the site is named for.",
        "Above the stupa stands <strong>Thrangu Tashi Yangtse</strong>, a large working monastery with several hundred monks, and you can usually sit in on the afternoon prayers.",
        "The guesthouse is simple and the setting — a ridge with terraced fields falling away and the Himalaya on the northern horizon — is the quietest night of the tour. Overnight at Namobuddha.",
      ),
    },
    {
      title: "Namobuddha kora, Panauti and return to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "Morning prayers at the monastery, then the <strong>kora</strong> — the circuit around the hilltop past the shrine that holds the relief of the tigress story, with prayer flags across the ridge.",
        "The drive back stops at <strong>Panauti</strong>, a small Newar town at the confluence of two rivers with a thirteenth-century Indreshwar Mahadev temple and an old quarter that has barely changed. It is one of the best-preserved medieval settlements in the valley and almost nobody stops there.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the late afternoon.",
        "The evening is free — many pilgrims return to Boudha for a last kora at dusk. Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Kathmandu Airport",
      placeDescription: "Nepal's main international airport and the final departure point for your journey.",
      lng: 85.356,
      lat: 27.6993,
      html: p(
        "The morning is free. The shops around Boudha sell thangkas, prayer wheels, incense and texts, and the workshops there will explain what you are looking at if you ask.",
        "We collect you from your hotel three hours before your flight and transfer you to <strong>Tribhuvan International Airport</strong>.",
        "The route has run from the garden where the Buddha was born and the palace he left, to the stupas where the tradition is still practised every evening — the beginning of Buddhism and its living continuation in one journey.",
      ),
    },
  ],
};

export const muktinathPilgrimageTour: Tour = {
  region: REGION,
  price: 745,
  difficulty: "easy",
  maxAltitude: 3760,
  center: [83.85, 28.6],
  zoom: 9,
  content: {
    slug: "muktinath-pilgrimage-tour",
    title: "Muktinath Pilgrimage Tour",
    overview:
      "<p><strong>Muktinath</strong> — <em>the place of liberation</em> — stands at 3,760 m in Mustang, above the Kali Gandaki. It is one of the eight <strong>svayam vyakta kshetras</strong> of Vishnu, one of the 108 Divya Desams named in the Tamil canon, and the only site where all five elements are held to be present at once. Buddhists know it as Chumig Gyatsa, the hundred waters, and it is one of their twenty-four tantric places.</p><p>This six-day pilgrimage travels by road and air rather than on foot, with a night at Jomsom to help with the altitude before the temple. There is time for the full ritual: the <strong>108 bull-head spouts</strong>, the two <strong>Mukti Kunda</strong> pools, darshan at the pagoda, and the <strong>Jwala Mai</strong> shrine where a natural gas flame burns above spring water.</p>",
    highlights: [
      ["Darshan at Muktinath", "One of the eight self-manifested shrines of Vishnu and a Divya Desam of the Tamil canon."],
      ["The 108 Water Spouts", "Pass beneath the bull-head spouts and bathe in the two Mukti Kunda pools."],
      ["Jwala Mai Eternal Flame", "The natural gas flame burning over water, the meeting of the elements."],
      ["Kali Gandaki and Shaligram", "Walk the riverbed at Kagbeni where the sacred ammonite fossils are found."],
      ["Built for Older Pilgrims", "Road and air throughout, with a night at Jomsom to ease the altitude."],
    ],
    sections: PILGRIM_SECTIONS,
    faqs: PILGRIM_FAQS,
    inclusions: {
      flights: ["Pokhara – Jomsom return flights, subject to weather."],
      transport: ["Private vehicle from Kathmandu to Pokhara and back.", "Jeep transfers between Jomsom, Kagbeni and Muktinath."],
      accommodation: ["Five nights in hotels and lodges in Kathmandu, Pokhara and Jomsom, with breakfast."],
      meals: ["Vegetarian breakfast and dinner throughout; satvik meals on request."],
      entrance: "Muktinath temple and Kathmandu valley site entry fees.",
      permits: "Annapurna Conservation Area Permit and TIMS registration.",
      guide: "English- and Hindi-speaking guide familiar with the Muktinath rituals.",
    },
    exclusions: { extra: ["Offerings, puja donations and priest fees.", "Lunches on travelling days."] },
    addons: [
      {
        title: "Muktinath by Helicopter from Pokhara",
        description: "Replace the Jomsom flight and jeep legs with a direct helicopter landing beside the temple complex, returning the same morning.",
        unit: "person",
        pricePerUnit: 850,
      },
    ],
    fixedDepartureDay: "wednesday",
    itineraryDescription: "Six days to Muktinath (3,760 m) by road and air via Pokhara and Jomsom, with time for the full temple ritual.",
    inExDescription: "The Jomsom flights, private vehicle and jeep transfers, hotel and lodge nights, vegetarian meals, temple entries, permits and a pilgrimage guide are included, while international flights, visa, insurance, offerings and tips are excluded.",
    bestTime: "Oct-Nov, Mar-May",
    meta: {
      title: "Muktinath Pilgrimage Tour – Darshan at 3,760 m in Mustang",
      description: "A six-day Muktinath pilgrimage via Pokhara and Jomsom, with darshan at the temple, the 108 water spouts and the Jwala Mai flame.",
      keywords: "Muktinath pilgrimage tour, Muktinath darshan, Muktinath yatra Nepal, Jomsom Muktinath, shaligram Kagbeni",
      tags: "Pilgrimage Tours, Hindu, Muktinath, Mustang, Nepal Tours",
    },
  },
  days: [
    {
      title: "Arrival in Kathmandu (1,400 m) and Pashupatinath darshan",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...PASHUPATINATH,
      html: p(
        "Our representative meets you at the airport and transfers you to your hotel.",
        "In the afternoon we visit <strong>Pashupatinath</strong> on the Bagmati, the holiest Shiva temple in Nepal, for darshan and the evening <em>aarati</em> on the terraces.",
        "Many pilgrims begin the Muktinath journey here, since the two shrines are traditionally paired — Shiva and Vishnu, the Bagmati and the Kali Gandaki.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Drive to Pokhara (822 m)",
      elevation: "822 m",
      accommodation: "Pokhara",
      placeDescription: PKR_PLACE,
      ...POKHARA,
      html: p(
        "The Prithvi Highway west along the Trishuli through gorge country, around six hours with a lunch stop at a riverside restaurant.",
        "In <strong>Pokhara (822 m)</strong> the afternoon covers the lakeside shrines: <strong>Tal Barahi</strong> on its island in Phewa Lake, reached by rowing boat, and the <strong>Bindhyabasini</strong> temple in the old bazaar.",
        "The <strong>Gupteshwor Mahadev</strong> cave beneath Devi's Fall holds a natural lingam and is worth the descent.",
        "An early night; the Jomsom flight leaves at first light. Overnight in Pokhara.",
      ),
    },
    {
      title: "Fly to Jomsom (2,720 m) and visit Kagbeni",
      elevation: "2,720 m",
      accommodation: "Jomsom",
      placeDescription: "The administrative centre of Mustang in the wind-scoured Kali Gandaki valley.",
      ...JOMSOM,
      html: p(
        "The twenty-minute flight up the <strong>Kali Gandaki</strong> is one of the great short flights anywhere: the aircraft threads the gorge between <strong>Dhaulagiri (8,167 m)</strong> and <strong>Annapurna I (8,091 m)</strong>, with both walls rising seven kilometres from the riverbed.",
        "<strong>Jomsom (2,720 m)</strong> is the district centre, and the night here is deliberate — it lets you sleep at 2,700 m before going to 3,760 m tomorrow, which matters more than most pilgrims expect.",
        "The afternoon goes up the valley to <strong>Kagbeni</strong>, a medieval village of mud-brick alleys at the gate of Upper Mustang, and to the riverbed below it where the <strong>shaligram</strong> ammonites are found. These black fossil stones are venerated as an aniconic form of Vishnu across India and Nepal, and pilgrims collect them here.",
        "Overnight at Jomsom.",
      ),
    },
    {
      title: "Muktinath (3,760 m) darshan",
      elevation: "3,760 m",
      accommodation: "Muktinath",
      placeDescription: "A temple complex at 3,760 m in Mustang, sacred to Hindus as Mukti Kshetra and Buddhists as Chumig Gyatsa.",
      ...MUKTINATH,
      html: p(
        "An early jeep up the valley from Jomsom through Kagbeni and Jharkot, climbing into high desert with the Nilgiri wall behind and the Thorong ridge ahead.",
        "At <strong>Muktinath (3,760 m)</strong> the ritual has an order to it. Pilgrims first pass beneath the <strong>108 bull-head spouts</strong> that run cold Gandaki water in a semicircle behind the temple, then bathe in the two <strong>Mukti Kunda</strong> pools, then take darshan at the pagoda of Vishnu with its Sri Vaishnava tradition.",
        "Below the temple the <strong>Jwala Mai</strong> shrine holds the site's most striking feature: a natural gas flame burning steadily above spring water, fire and water together, which is why the place is said to hold all five elements.",
        "The Buddhist gompa in the same compound is served by a nun, and the two traditions share the site without friction — one of the reasons Muktinath is unusual.",
        "Take the altitude seriously and move slowly. Overnight at Muktinath or back at Jomsom.",
      ),
    },
    {
      title: "Fly to Pokhara and drive to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "The morning flight from <strong>Jomsom</strong> back down the gorge to Pokhara, which must leave early before the valley wind builds.",
        "From Pokhara the drive east on the Prithvi Highway to <strong>Kathmandu (1,400 m)</strong> takes most of the day, or the 25-minute flight can be substituted if you would rather not spend it on the road.",
        "You arrive in the late afternoon and transfer to your hotel.",
        "Overnight in Kathmandu.",
      ),
    },
    {
      title: "Departure from Nepal",
      elevation: "1,400 m",
      accommodation: "Kathmandu Airport",
      placeDescription: "Nepal's main international airport and the final departure point for your journey.",
      lng: 85.356,
      lat: 27.6993,
      html: p(
        "The morning is free for a final darshan or for the puja-goods bazaars around Ason and Indra Chowk.",
        "We collect you from your hotel three hours before your flight and transfer you to <strong>Tribhuvan International Airport</strong>.",
        "Pilgrims traditionally carry a shaligram home from the Kali Gandaki; if you collected one at Kagbeni, your guide can advise on the customs rules for taking it out of Nepal.",
      ),
    },
  ],
};

export const gosainkundaTour: Tour = {
  region: REGION,
  price: 595,
  difficulty: "moderate",
  maxAltitude: 4380,
  center: [85.38, 28.1],
  zoom: 10.5,
  content: {
    slug: "gosainkunda-holy-tour",
    title: "Gosainkunda Holy Tour",
    overview:
      "<p><strong>Gosainkunda</strong> is a chain of glacial lakes at 4,380 m in the Langtang range, and the most important high-altitude Hindu pilgrimage in central Nepal. The tradition holds that Shiva struck the mountainside with his trident to create the lake after drinking the poison churned from the ocean, and that the rock in the middle of the water is his reclining form.</p><p>At <strong>Janai Purnima</strong> in August tens of thousands of pilgrims walk up from the valleys below to bathe, and the basin fills with people, shamans and drums. For the rest of the year it is silent. This is a walking pilgrimage — two days up from Dhunche through rhododendron forest and a night at Chandanbari — and the altitude is genuine, so it asks more of you than the vehicle-based routes.</p>",
    highlights: [
      ["The Sacred Lakes at 4,380 m", "Reach Gosaikunda and the surrounding kunda, formed in Shiva's own tradition by his trident."],
      ["Janai Purnima Pilgrimage", "Travel in August for the festival that fills the basin with tens of thousands of pilgrims."],
      ["Langtang Rhododendron Forest", "Two days climbing through some of the finest forest in central Nepal."],
      ["Cheese and Yaks at Chandanbari", "A night at Sing Gompa, where the monastery runs a yak cheese factory."],
      ["Himalayan Panorama", "Langtang Lirung, Ganesh Himal and, on a clear day, Manaslu from the ridge above the lakes."],
    ],
    sections: PILGRIM_SECTIONS,
    faqs: PILGRIM_FAQS,
    inclusions: {
      transport: ["Private vehicle from Kathmandu to Dhunche and back."],
      accommodation: ["Four nights in trekking lodges at Chandanbari, Gosaikunda and Dhunche.", "One night at a hotel in Kathmandu with breakfast."],
      meals: ["All meals during the walking days at the lodges."],
      entrance: "Langtang National Park entry permit and TIMS registration.",
      guide: "Licensed trekking guide familiar with the pilgrimage route and the festival.",
      extra: ["Porter support for one shared bag between two pilgrims."],
    },
    exclusions: { extra: ["Offerings and donations at the lakeside shrines.", "Hot showers and charging at the lodges."] },
    fixedDepartureDay: "thursday",
    itineraryDescription: "Six days walking to the sacred lakes of Gosaikunda at 4,380 m in Langtang National Park, via Dhunche and Chandanbari.",
    inExDescription: "Private vehicle transfers, lodge and hotel nights, all meals on the walking days, the national park permit, a licensed guide and shared porter support are included, while international flights, visa, insurance, offerings and tips are excluded.",
    bestTime: "Mar-May, Sep-Nov, Aug for Janai Purnima",
    meta: {
      title: "Gosainkunda Holy Tour – Sacred Lakes Pilgrimage at 4,380 m",
      description: "A six-day walking pilgrimage to the sacred Gosaikunda lakes at 4,380 m in Langtang National Park, via Dhunche and Chandanbari.",
      keywords: "Gosainkunda tour, Gosaikunda pilgrimage, Janai Purnima Gosaikunda, sacred lake Nepal, Langtang pilgrimage, Shiva lake",
      tags: "Pilgrimage Tours, Hindu, Gosaikunda, Langtang, Nepal Tours",
    },
  },
  days: [
    {
      title: "Drive from Kathmandu to Dhunche (1,960 m)",
      elevation: "1,960 m",
      accommodation: "Dhunche",
      placeDescription: "The district headquarters of Rasuwa and the roadhead for the Gosaikunda pilgrimage.",
      ...DHUNCHE,
      html: p(
        "The road north out of the Kathmandu valley climbs to the Kakani ridge, drops to Trishuli Bazaar and then grinds up the Bhote Koshi into Rasuwa — six to seven hours, the last part slow.",
        "<strong>Dhunche (1,960 m)</strong> is the district headquarters and the entry point to <strong>Langtang National Park</strong>, where permits are checked.",
        "The afternoon is free to walk the bazaar and adjust. The mountains are not yet visible from here, but the air has changed.",
        "Overnight at Dhunche.",
      ),
    },
    {
      title: "Trek from Dhunche to Chandanbari (3,330 m)",
      elevation: "3,330 m",
      accommodation: "Chandanbari",
      placeDescription: "A ridge settlement at Sing Gompa with a monastery and a yak cheese factory.",
      ...CHANDANBARI,
      html: p(
        "The first walking day and a substantial climb — around 1,400 m of ascent on a good trail through oak and then rhododendron forest.",
        "In March and April this forest is in full flower and the walking is superb; in autumn it is quiet and the light comes through in shafts. Langur monkeys are common and the birdlife is excellent.",
        "<strong>Chandanbari (3,330 m)</strong>, also called Sing Gompa, is a ridge settlement with a small monastery and a <strong>yak cheese factory</strong> founded with Swiss assistance — the cheese is genuinely good and sold at the door.",
        "Five to six hours of walking. The altitude begins to be noticeable tonight. Overnight at Chandanbari.",
      ),
    },
    {
      title: "Trek to Gosaikunda (4,380 m)",
      elevation: "4,380 m",
      accommodation: "Gosaikunda",
      placeDescription: "A chain of sacred glacial lakes at 4,380 m in the Langtang range, formed in tradition by Shiva's trident.",
      ...GOSAIKUNDA,
      html: p(
        "The trail climbs out of the treeline onto open ridge, and the view arrives with it: <strong>Langtang Lirung (7,227 m)</strong> to the north-east, <strong>Ganesh Himal</strong> west, and on a clear morning <strong>Manaslu</strong> beyond it.",
        "The path passes Lauribina and a series of smaller <em>kunda</em> — Saraswati, Bhairav and others — before <strong>Gosaikunda (4,380 m)</strong> itself appears in its rock basin.",
        "The lake is a deep blue-black and quite still. The rock formation in the middle is said to be the reclining <strong>Shiva</strong>, and the tradition holds he struck this mountainside with his trident to make the water after swallowing the poison of the churned ocean.",
        "Pilgrims bathe in the lake even in cold weather and circle it clockwise. Take the altitude seriously — 4,380 m after two days is a fast gain.",
        "Five to six hours. Overnight at Gosaikunda.",
      ),
    },
    {
      title: "Morning at the lakes and descent to Chandanbari (3,330 m)",
      elevation: "3,330 m",
      accommodation: "Chandanbari",
      placeDescription: "A ridge settlement at Sing Gompa with a monastery and a yak cheese factory.",
      ...CHANDANBARI,
      html: p(
        "Sunrise over the lake is the reason to sleep up here. The water is dead flat at dawn and the peaks come up behind it, and there is usually nobody about outside festival season.",
        "The morning is for the ritual and for walking the shore — the shrine at the water's edge, the trident, and the smaller lakes above.",
        "Anyone with energy can climb towards the <strong>Lauribina La</strong> for the wider view before turning back; the pass itself leads on to Helambu and is not part of this route.",
        "The descent to <strong>Chandanbari (3,330 m)</strong> takes four to five hours and the air thickens with every hundred metres, which most people feel as relief.",
        "Overnight at Chandanbari.",
      ),
    },
    {
      title: "Descend to Dhunche (1,960 m)",
      elevation: "1,960 m",
      accommodation: "Dhunche",
      placeDescription: "The district headquarters of Rasuwa and the roadhead for the Gosaikunda pilgrimage.",
      ...DHUNCHE,
      html: p(
        "A long descent back through the rhododendron and oak forest — around 1,400 m down, which is hard on the knees, so poles are worth having.",
        "Going down gives you the forest properly. On the way up most pilgrims are watching their feet and their breathing; coming down there is time to notice the moss, the birds and the flowers.",
        "<strong>Dhunche (1,960 m)</strong> in the afternoon, with a hot shower and a proper meal.",
        "This is where the porters finish and tips are given. Overnight at Dhunche.",
      ),
    },
    {
      title: "Drive back to Kathmandu (1,400 m)",
      elevation: "1,400 m",
      accommodation: "Kathmandu",
      placeDescription: KTM_PLACE,
      ...KATHMANDU,
      html: p(
        "The drive south down the Bhote Koshi to Trishuli Bazaar and back up over the Kakani ridge into the Kathmandu valley — six to seven hours with a lunch stop.",
        "The Kakani section on a clear afternoon gives a long view of Ganesh Himal and the Langtang peaks you have just walked among.",
        "You reach <strong>Kathmandu (1,400 m)</strong> in the late afternoon and transfer to your hotel.",
        "Many pilgrims close the circuit with an evening darshan at Pashupatinath, which your guide can arrange. Overnight in Kathmandu.",
      ),
    },
  ],
};

export const pilgrimageTours: Tour[] = [hinduPilgrimageTour, buddhistPilgrimageTour, muktinathPilgrimageTour, gosainkundaTour];
