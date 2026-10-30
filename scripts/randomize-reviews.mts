/**
 * Rewrite the seeded guest reviews so they read like real travellers wrote them.
 *
 * The original seed gave every trek ten five-star reviews built from a handful
 * of templated paragraphs — identical sentences, identical 5.0 averages, which
 * looks exactly like what it is. This script:
 *
 *   1. Assigns each review 4 or 5 stars so that no trek averages below 4.5:
 *      ~90% of products sit at 4.8-5.0 and ~10% at 4.5-4.7.
 *   2. Composes a fresh, unique review body per row from theme-specific detail
 *      pools, with the trek's real duration / region / altitude folded in.
 *   3. Randomises how many reviews a product has (3-20) and creates or deletes
 *      rows to match.
 *   4. Writes the same content back to generated-reviews/reviews.json and
 *      generated-reviews/review-personas.csv so the seed data stays in sync.
 *
 * Deterministic by design: re-running produces the same result, and the
 * `--dry-run` flag prints the report without touching the database.
 *
 *   npx tsx scripts/randomize-reviews.mts --dry-run
 *   npx tsx scripts/randomize-reviews.mts
 */
import "dotenv/config";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { prisma } from "@/lib/prisma";

const DRY_RUN = process.argv.includes("--dry-run");
const PROJECT_ROOT = fileURLToPath(new URL("..", import.meta.url));
const SEED = 20261024;

/* ------------------------------------------------------------------ */
/* Random                                                              */
/* ------------------------------------------------------------------ */

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Rng = () => number;

const pick = <T,>(rng: Rng, list: readonly T[]): T => list[Math.floor(rng() * list.length)];
const chance = (rng: Rng, p: number) => rng() < p;
const randInt = (rng: Rng, min: number, max: number) => min + Math.floor(rng() * (max - min + 1));

/* ------------------------------------------------------------------ */
/* Voice pools                                                         */
/* ------------------------------------------------------------------ */

type Cluster = "mountain" | "aerial" | "wildlife" | "water" | "culture" | "thrill";

const THEME_CLUSTER: Record<string, Cluster> = {
  trek: "mountain",
  expedition: "mountain",
  shorttrek: "mountain",
  helicopter: "aerial",
  flight: "aerial",
  paragliding: "aerial",
  safari: "wildlife",
  birding: "wildlife",
  rafting: "water",
  culture: "culture",
  village: "culture",
  pilgrimage: "culture",
  daytour: "culture",
  adrenaline: "thrill",
  activity: "thrill",
};

const GUIDES = [
  "Pasang", "Dawa", "Nima", "Pemba", "Lhakpa", "Tenzing", "Ang Dorje", "Suman",
  "Rajesh", "Bikash", "Santosh", "Hari", "Krishna", "Gopal", "Binod", "Dipesh",
  "Prakash", "Ramesh", "Anil", "Sagar", "Kiran", "Manoj", "Nabin", "Purna",
  "Tek", "Bhim", "Deepak", "Rupesh", "Suresh", "Milan", "Bishal", "Ashok",
];

const MOUNTAIN_MONTHS = ["March", "April", "May", "September", "October", "November"];

const PLACES: Record<Cluster, string[]> = {
  mountain: ["the ridge above the village", "the last teahouse before the pass", "the high camp", "the shoulder of the mountain", "the valley floor", "the viewpoint above the lodge"],
  aerial: ["the valley below", "the range", "the landing site", "the snow line", "the far side of the ridge"],
  wildlife: ["the riverbank", "the grassland", "the waterhole", "the jungle track", "the buffer zone forest"],
  water: ["the gorge", "the beach at the put-in point", "the last set of rapids", "the river bend"],
  culture: ["the old square", "the temple courtyard", "the hilltop stupa", "the village lane", "the riverside steps"],
  thrill: ["the launch point", "the river below", "the valley", "the landing zone"],
};

type Opener = { text: string; solo?: boolean };

const OPENERS: Record<Cluster, Opener[]> = {
  mountain: [
    { text: "Did {title} with a friend in {month} and booked fairly late — everything still got sorted without any drama." },
    { text: "I did {title} solo in {month} and joined a small group on the trail. Easily the best thing I did all year.", solo: true },
    { text: "My brother and I had {title} on the shortlist for about a year before finally committing, and {month} turned out to be the right call." },
    { text: "Four of us from work did {title} in {month}, none of us with much altitude experience." },
    { text: "{title} was the main reason for our Nepal trip, and it lived up to the photos I had been staring at for months." },
    { text: "After two cancelled trips we finally did {title} in {month}. Worth the wait." },
    { text: "Went into {title} reasonably fit but not really a hiker. Survived, and loved it." },
    { text: "Chose {title} because it fit {dur} days off work. Did not expect the scenery to be that good." },
    { text: "My partner and I did {title} in {month} as a break from our desk jobs." },
    { text: "Booked {title} for my fiftieth and dragged two old friends along in {month}." },
    { text: "We had {dur} days free in {month} and {title} looked like the best use of them." },
    { text: "I had never been above 4,000 m before {title}, so I read every review I could find. This one is accurate." , solo: true },
    { text: "Third time in Nepal, first time doing {title}. Should have done it sooner." },
    { text: "Our family of four did {title} in {month}, kids aged 14 and 17." },
    { text: "A group of us from the climbing gym did {title} in {month}, and it turned into an annual thing." },
    { text: "I turned up on my own not knowing a soul and left with five new friends.", solo: true },
    { text: "We chose {title} over two other routes and have no regrets." },
    { text: "My wife had done it before the earthquake and wanted to see what had changed." },
    { text: "Booked {title} about ten days out, which is apparently cutting it fine." },
    { text: "We were three generations on this trip, ages 19 to 66." },
    { text: "I had just finished exams and {title} felt like the reward.", solo: true },
    { text: "Friends who live in Kathmandu told us {title} was the one not to skip." },
  ],
  aerial: [
    { text: "Booked the {title} for our last morning in Nepal and it turned out to be the best send-off." },
    { text: "I am a nervous flyer and nearly cancelled the {title}. Glad I did not.", solo: true },
    { text: "We took the {title} on a clear {month} morning with two friends who had never been to Nepal." },
    { text: "The {title} was a birthday present from my wife and I could not have asked for better." },
    { text: "Had a spare morning before our flight home, so we squeezed in the {title}. Brilliant decision." },
    { text: "Did the {title} on my own after my trek finished, mostly for the photos.", solo: true },
    { text: "We were unsure whether the {title} was worth the money. It was." },
    { text: "Booked the {title} a week ahead in {month} and got the seat I wanted." },
    { text: "My daughter and I did the {title} together and neither of us stopped grinning." },
    { text: "The {title} had been on my list since a colleague showed me his photos." },
    { text: "We had one free morning at the end of a work trip and spent it on the {title}." },
    { text: "Took the {title} in {month} with a group of six who had all booked separately." },
    { text: "I booked the {title} as a surprise for my partner and somehow kept it quiet." },
    { text: "After a week on the trail the {title} felt like a reward for sore legs." },
    { text: "Two of us flew in the morning and went straight back to the hotel for a nap." },
    { text: "We had looked at the price three times before booking the {title}, and I am glad we did." },
    { text: "The {title} capped off a week in the mountains, and nothing on the trail compared with it." },
    { text: "My father flew the {title} in the nineties and wanted to see it again from the air." },
    { text: "Booked the {title} for a work team morning out, which was a better idea than it sounds." },
    { text: "I took the {title} alone after a trek was cancelled, and it saved the trip.", solo: true },
    { text: "Someone at our hotel mentioned the {title} and we booked it that evening." },
  ],
  wildlife: [
    { text: "We added {title} to the end of a trek in {month} and it was the perfect change of pace." },
    { text: "Booked {title} for two nights in {month} hoping to see a rhino. Came home with a lot more than that." },
    { text: "Took my parents on {title} in {month} and even they were up early for the morning drive." },
    { text: "I did {title} solo between trekking and flying home, and the guides made me feel like part of a group.", solo: true },
    { text: "We are not usually wildlife people, but {title} looked too good to skip. Glad we did it." },
    { text: "Second time doing {title}, first time in {month}, and it was even better than I remembered." },
    { text: "Our kids had been asking to see a rhino for years, so {title} in {month} was their trip." },
    { text: "Chose {title} because it fit the days {we} had left. It delivered far more than expected." },
    { text: "A friend recommended {title} after his trip last year and he was right about the guides." },
    { text: "We booked {title} with low expectations, mostly for the lodge and the river. The wildlife was a bonus." },
    { text: "Did {title} on the way back from Pokhara, which turned out to be the best stop of the drive." },
    { text: "My uncle has been going to the park for twenty years and finally took us along." },
    { text: "We added {title} because our trek finished early and the dates lined up." },
    { text: "Booked {title} for my son's eighteenth, his first proper trip abroad." },
    { text: "The lodge we had booked recommended {title} and arranged it in an afternoon." },
    { text: "We swapped a day in Kathmandu for {title} and it was the right trade." },
    { text: "Two families with four kids between us did {title}, and the guides somehow kept everyone happy." },
    { text: "I had one free weekend mid-contract and spent it on {title}.", solo: true },
    { text: "Booked {title} for my mother's seventieth, which she described as the best present in years." },
    { text: "We came for the birds and stayed for the quiet." },
    { text: "A colleague was born near the park and told us to book {title} instead of a day trip." },
  ],
  water: [
    { text: "We had a spare day in {month} and picked {title} on a whim." },
    { text: "Three of us did {title} in {month}, and only one had rafted before." },
    { text: "I am not a strong swimmer, so I was nervous about {title}. The team put me at ease immediately.", solo: true },
    { text: "Booked {title} as a break from trekking, mostly to give our legs a rest." },
    { text: "The {title} came recommended by the lodge owner and it was the highlight of our week." },
    { text: "My cousin and I did {title} in {month} and talked about it for the rest of the trip." },
    { text: "We took the kids on {title} and the guides were brilliant with them." },
    { text: "Did {title} in {month} with a group of six and the whole day ran smoothly." },
    { text: "Picked {title} because the photos looked fun. The real thing was better." },
    { text: "Our group wanted something active for a day and {title} fit perfectly." },
    { text: "We drove up from Kathmandu the night before and did {title} first thing." },
    { text: "Booked {title} for the last day of our trip, which turned out to be the right way to finish." },
    { text: "Half of us had rafted before, half had not, and the crew handled both." },
    { text: "A colleague has done {title} three times and told me to stop thinking about it and book." },
    { text: "We wanted one day off from trekking and chose {title} of all things." },
    { text: "My nephew turned eighteen and asked for {title} instead of a party." },
    { text: "Three of us booked {title} the night before, which the office handled without complaint." },
    { text: "I joined {title} as an add-on to a longer package and ended up enjoying it most.", solo: true },
  ],
  culture: [
    { text: "We had two days in Kathmandu before our trek and spent one of them on {title}." },
    { text: "Did {title} solo on my first full day in Nepal and it was a good introduction.", solo: true },
    { text: "My wife is a history teacher, so {title} was always going to be on the list." },
    { text: "We booked {title} in {month} after a friend said the guide made the whole thing." },
    { text: "The {title} was included in our package and we were pleasantly surprised by the standard." },
    { text: "Took my parents on {title} and the pace was gentle enough for them." },
    { text: "Booked {title} at the last minute in {month} and it still felt properly organised." },
    { text: "We wanted something cultural between trek and flight home, and {title} was ideal." },
    { text: "I had low expectations for a guided city tour, but {title} was genuinely interesting.", solo: true },
    { text: "Our group of five did {title} in {month} and everyone found something to like." },
    { text: "We had a long layover and used it on {title} instead of sitting in the airport." },
    { text: "My sister studies architecture, so {title} was her one request for the trip." },
    { text: "The hotel arranged {title} for us on our first morning, jet lag and all." },
    { text: "Did {title} between two treks to give our knees a rest, and learned a lot.", solo: true },
    { text: "Our daughter was studying the Malla period and {title} made her textbook come alive." },
    { text: "We had a day to fill before the flight and {title} filled it well." },
    { text: "My husband is not a temple person, and even he enjoyed {title}." },
    { text: "Booked {title} because it started late, so no alarm clock was involved." },
    { text: "A former colleague now lives in Patan and told us to do {title} properly.", solo: true },
  ],
  thrill: [
    { text: "Booked {title} on a rest day in {month} and it woke us up properly." },
    { text: "I had never done anything like {title} before and was fairly terrified beforehand.", solo: true },
    { text: "My friends talked me into {title} and I am glad they did." },
    { text: "We did {title} in {month} with a group of five, mostly to see if we could." },
    { text: "The {title} was a last-minute addition to an already full trip." },
    { text: "Did {title} with my teenage son and it is all he talked about afterwards." },
    { text: "I was unsure about {title} because of the price, but it is worth it.", solo: true },
    { text: "We booked {title} after seeing it from the road and could not resist." },
    { text: "Came to Pokhara for the lake and ended up booking {title} as well." },
    { text: "Our group wanted one big adrenaline day and {title} delivered." },
    { text: "Two of us booked {title} on the bus back from a trek, mostly on a dare." },
    { text: "My sister did {title} last year and would not stop going on about it." },
    { text: "We added {title} to the itinerary when the weather cancelled a flight." },
    { text: "Booked {title} for the morning after a wedding in Pokhara. Rough, but worth it." },
    { text: "My two brothers and I did {title} as a bet, and now we all owe each other apologies." },
    { text: "We bagged {title} at the end of a week that had gone a bit flat." },
    { text: "I was talked into {title} by a stranger in the hostel bar. Good stranger.", solo: true },
    { text: "Our honeymoon needed one reckless day, and {title} was it." },
  ],
};

const BODIES: Record<Cluster, string[]> = {
  mountain: [
    "The trail was quieter than {we} expected for {month}, and {we} had whole sections to {ourselves}.",
    "The climb to {alt} m was the hardest thing {we}'ve done, but the view from the top made it worthwhile.",
    "Mornings were properly cold, but the sky cleared by nine every day {we} were up high.",
    "Acclimatisation days were built in properly and nobody in the group got sick, which says a lot.",
    "The last push before the pass took about four hours and felt like eight, but the descent into the next valley was stunning.",
    "Teahouses were basic but clean, and the dal bhat kept coming until {we} could not eat another bite.",
    "We got one afternoon of rain on day {day}, otherwise the weather was close to perfect.",
    "The route is well trodden so navigation is easy, but the altitude is what makes it hard.",
    "Snow on the upper section slowed things down, and the guides adjusted the plan without any fuss.",
    "The sunrise from {place} on day {day} is the best thing {we}'ve seen in Nepal.",
    "The scenery changed every couple of hours, which kept the walking interesting even on the long days.",
    "There were a few steep sections that left {us} genuinely puffing, but the pace was never rushed.",
    "{dur} days felt right, not too rushed and not too slow.",
    "Crossing the pass was brutal in the wind, but the tea at the teahouse afterwards tasted incredible.",
    "Trail conditions were good, though the long descent was hard on the knees.",
    "The group was a mix of ages and everyone got on well, which made the evenings fun.",
    "The lodge on day {day} had a wood stove going and {we} stayed up far too late talking.",
    "The route never felt crowded, even with a few other groups around.",
    "Sleeping at {alt} m was rough on the first night, but the guides kept an eye on everyone.",
    "The view of the range from {place} on day {day} is burned into my memory.",
    "We had one hazy day where the peaks disappeared, which was disappointing, but it cleared by evening.",
    "The walk out through the villages at the end was a nice way to finish.",
    "Days were long, usually six to eight hours of walking, but the terrain is varied enough that it never dragged.",
    "The high point came later than expected, which made the final climb feel more earned.",
  ],
  aerial: [
    "The flight over the range was smoother than {we} expected, and there are good views from both sides.",
    "We got a clear morning, which apparently is not guaranteed, and the peaks were out in full.",
    "Landing at {alt} m for breakfast was surreal, cold and completely quiet.",
    "The pilot pointed out the big peaks by name and banked gently so both sides could see.",
    "Takeoff felt oddly relaxed, more like a scenic drive than an adventure sport.",
    "About fifteen minutes in, the whole Himalaya opened up in front of us.",
    "The pilot kept checking on the nervous passengers and explained what was happening.",
    "Clouds sat below us for most of the flight, with the peaks sticking out above them.",
    "The landing was soft and the ground crew had us organised within minutes.",
    "I expected it to be over too quickly, but the timing felt right.",
    "The view of Everest from the cockpit was better than anything {we}'ve seen from a trail.",
    "Equipment looked well maintained and the safety briefing was thorough without being tedious.",
    "There was enough time at the landing site for photos and a hot drink.",
    "The whole thing ran to the minute, which after a week in Nepal felt like a small miracle.",
    "There was a wait for the weather to clear, and nobody pushed us to fly until it was right.",
    "The peaks looked close enough to touch, which is a strange thing to say from a plane.",
    "Both sides of the aircraft get a good run at the mountains, so seating hardly matters.",
    "The noise-cancelling headsets were a small but welcome touch.",
    "At one point we were above the clouds with nothing but summits showing.",
    "The descent was gentle enough that nobody felt unwell.",
    "Watching the shadows move across the ridges from that height is something else.",
  ],
  wildlife: [
    "We saw rhinos, deer, wild boar and so many birds on the first afternoon, more than {we} expected.",
    "The morning jeep safari was the best part, mist on the river and animals everywhere.",
    "The canoe ride down the river was quiet and peaceful, with crocodiles sunbathing on the banks.",
    "The naturalist spotted things {we} would never have noticed, including a kingfisher the size of my hand.",
    "We got lucky with a tigress and two cubs at the waterhole, which apparently is rare.",
    "The jungle is thick, so sightings need patience, but the guides know where to look.",
    "The elephant breeding centre was a nice easy afternoon and the babies were a highlight.",
    "The birdwatching walk in the morning was surprisingly good, even for someone who is not into birds.",
    "The jeep tracks are bumpy, so hold on to your hat and your camera.",
    "Sunset over the river with a cold drink was a lovely way to end the day.",
    "The park felt genuinely wild, not like a zoo, which is what {we} wanted.",
    "Two game drives in one day sounds like a lot, but the time went quickly.",
    "We saw a one-horned rhino from about thirty metres and the guide kept everyone calm and quiet.",
    "The jungle walk was slower than the jeep drives but {we} saw more smaller things.",
    "Dawn on the river was silent apart from the birds, which was the best part for me.",
    "We caught a sloth bear at a distance, and the guide kept us back without any fuss.",
    "The grass is taller than you expect, so a decent pair of binoculars earns its place.",
    "Afternoon drives were quieter for big animals but better for birds.",
    "The forest felt genuinely old, with trees that must have been there for centuries.",
    "We spent one evening just sitting by the river, which was quietly the highlight.",
    "The lodge dogs followed us to the park gate every morning, which the kids adored.",
  ],
  water: [
    "The rapids were proper fun, big enough to get the heart going without feeling dangerous.",
    "The safety briefing was thorough, and the guide made sure everyone knew what to do if they fell in.",
    "We flipped on one rapid, which was scary for about three seconds and then hilarious.",
    "The river was warm and the scenery through the gorge was beautiful.",
    "Lunch on the sandy beach halfway down was simple and perfect.",
    "The drive to the put-in point was long and bumpy, but the rafting made up for it.",
    "Water levels in {month} were good, lively without being crazy.",
    "A kayak followed us the whole way, which was reassuring.",
    "The guides read the river well and picked a line that felt exciting but controlled.",
    "The last stretch was calm enough to swim alongside the raft.",
    "We got soaked in the first ten minutes and never dried out, which was part of the fun.",
    "The gorge narrowed towards the end, and the water got livelier just when we thought it was over.",
    "Two rafts went out together, which made the rapids more entertaining to watch.",
    "The current did most of the work in the flat sections, so there was time to actually look around.",
    "The river was higher than usual for the season, which made the bigger rapids more interesting.",
    "We had a practice run on the flat water before the first rapid, which helped a lot.",
    "The canyon walls closed in for a stretch and it went completely quiet between rapids.",
    "Nobody in the raft had met before and we were working as a team by the third set.",
    "The water was colder than expected, so a quick swim was enough for most of us.",
    "Sandbars mid-river made good spots to dry off while the crew rigged up again.",
    "The last rapid was the biggest, and the crew lined it up so we could watch the others go first.",
  ],
  culture: [
    "The old squares and temples were stunning, and the guide explained the history without drowning us in dates.",
    "We saw the main sights without ever feeling rushed.",
    "The mix of Hindu and Buddhist sites in one day was fascinating.",
    "Bhaktapur was my favourite, the wooden carvings and quiet courtyards are unreal.",
    "The mountain views from the ridge were a nice surprise on a cultural tour.",
    "The evening aarti at the river was moving, even for someone who is not religious.",
    "The village homestay was the highlight; we learned to make momos with the family.",
    "Sunrise over the Himalaya from the hilltop was worth the early start.",
    "The streets were busy and noisy, but that is part of the experience.",
    "The local lunch was one of the best meals of the trip.",
    "The guide's family stories made the history feel less like a lecture.",
    "We had enough free time at each stop to wander on our own.",
    "The drive between sites was long, but the scenery kept it interesting.",
    "The tour covered more ground than {we} expected in a single day.",
    "The old town is a maze, and having someone who knows it saved hours.",
    "We timed one temple visit for the late afternoon light, which was a good call.",
    "Traffic in the valley is slow, so the schedule had some slack built in.",
    "The wood carvings in the courtyards were the part I keep thinking about.",
    "There was a festival rehearsal going on at one square, which nobody had planned for.",
    "The pace was gentle, with plenty of stopping and no herding about.",
    "Our guide answered questions about daily life, not just the monuments, which we appreciated.",
  ],
  thrill: [
    "The jump was terrifying in the best possible way.",
    "The setup felt safe, which helped because I was a nervous wreck beforehand.",
    "Staff checked the harness three times and explained every step.",
    "The freefall felt like ten seconds, though I am told it was longer.",
    "The zipline was fast and smooth, and the view over the valley was unreal.",
    "The ATV route went through villages and along the river, which made it more than just a ride.",
    "Gear was in good condition and helmets fitted properly.",
    "The photos and video package was worth the extra money.",
    "The instructors were calm and clear, which mattered more than anything else.",
    "The whole thing took less time than expected but never felt rushed.",
    "The view from the top before you jump is almost as good as the jump itself.",
    "Everything was double-checked, and we still got plenty of time in the air.",
    "The run-up was short and the ground dropped away faster than I expected.",
    "The wind was right on the day, so there was no waiting around.",
    "The view from the top before you go is almost a bonus activity on its own.",
    "The landing was softer than the walk back to the vehicle.",
    "Half the group filmed it and half screamed, and both were fine.",
    "The harness felt tight in a reassuring way rather than a painful one.",
    "We were back in time for lunch, which nobody believed beforehand.",
  ],
};

const GUIDELINES: Record<Cluster, string[]> = {
  mountain: [
    "{our} guide {guide} was excellent, knew the route inside out and kept the pace sensible for the whole group.",
    "{guide} led us the whole way and quietly fixed every little problem before we noticed it.",
    "The team in Kathmandu answered emails within a day and sorted permits without us lifting a finger.",
    "{our} porter {guide2} was an absolute legend, always smiling even on the steep bits.",
    "{guide} knew every teahouse owner on the route and got us the better rooms more than once.",
    "{guide} was careful about altitude and made sure we drank enough water, which I appreciated.",
    "The sirdar kept the group together without ever making the slower ones feel bad.",
    "{guide} had a good sense of humour, which helped on the long days.",
    "Briefings each evening were clear about the next day's climb and timings.",
    "{guide} had done the route dozens of times and made the tricky sections feel straightforward.",
    "The kitchen staff produced proper meals at 4,000 m, which is more than we expected.",
    "{guide} noticed one of us was struggling and quietly slowed the group down without saying why.",
  ],
  aerial: [
    "{our} pilot {guide} has been flying these routes for years and it showed.",
    "The crew were calm and friendly and answered all my daft questions.",
    "Ground staff picked us up on time and everything ran like clockwork.",
    "{guide} made sure everyone got a turn by the window.",
    "The pilot gave a running commentary on the peaks without talking over the whole flight.",
    "Check-in was quick and someone stayed with us until we boarded.",
    "The safety briefing was clear and the crew checked straps on every passenger.",
    "Our guide for the ground portion was friendly and full of local detail.",
    "{guide} warned us which side of the aircraft gets the best light at each stage.",
    "The team kept the group small, so boarding was quick and calm.",
    "{guide} had hot tea waiting for us after the landing, which nobody expected.",
  ],
  wildlife: [
    "{our} guide {guide} has worked in the park for years and knew every track.",
    "{guide} was brilliant at spotting movement in the grass.",
    "The naturalist carried a scope and let everyone have a look.",
    "The guides kept the group quiet and safe around the animals.",
    "{guide} knew exactly where to wait when the jungle went quiet.",
    "The driver and guide worked as a team, one watching the track and one watching the trees.",
    "{guide} was patient with the kids and answered every question they had.",
    "The park fees and permits were handled for us, which saved a lot of faff.",
    "{guide} knew the difference between a fresh pug mark and an old one, which was half the fun.",
    "The team split us between two jeeps so everyone had a window seat.",
    "{guide} radioed the other drivers when something interesting turned up.",
  ],
  water: [
    "{our} raft guide {guide} had clearly done this a thousand times and made it look easy.",
    "The safety kayaker stayed close and kept an eye on the slower swimmers.",
    "The team were good fun but serious when it mattered.",
    "{guide} gave clear commands and the whole raft worked together by the second rapid.",
    "The briefing covered everything without being scary.",
    "Lunch was prepared by the crew on the riverbank, which was a nice touch.",
    "Our guide checked that everyone could swim before we set off, which I appreciated.",
    "The equipment was checked twice before we launched.",
    "{guide} paired the stronger paddlers with the nervous ones without making it obvious.",
    "The crew walked the route with us beforehand, which settled everyone's nerves.",
    "{guide} called the rapids by name and told us what was coming.",
  ],
  culture: [
    "{our} guide {guide} brought the history to life without reading from a script.",
    "{guide} grew up nearby and knew people in every square we walked through.",
    "The guide answered questions patiently, including the silly ones from our group.",
    "{guide} adapted the pace when my parents needed a sit down.",
    "Our driver was punctual and somehow found parking everywhere.",
    "The guide's English was excellent and he had a dry sense of humour.",
    "Tickets and entry fees were included, so we never had to queue with cash.",
    "{guide} knew which temples were quiet at what time of day, which made a big difference.",
    "Our guide carried a folder of old photographs, which made the history click.",
    "{guide} negotiated a pottery demonstration on the spot, which the kids loved.",
    "The driver found shade to park in every time, small thing but it mattered.",
  ],
  thrill: [
    "{our} instructor {guide} was calm and clear, which is exactly what you want before a jump.",
    "The crew rechecked every strap and carabiner before we went.",
    "{guide} talked me through the whole thing twice and never once made me feel silly.",
    "The team were chatty on the drive up, which helped settle the nerves.",
    "The instructor explained what each part of the gear did, which I found reassuring.",
    "Photos were included in our package and the quality was better than expected.",
    "The ground crew were organised and got everyone through in good time.",
    "Our guide made sure the nervous people went with the most experienced instructor.",
    "{guide} ran through the hand signals twice until everyone could repeat them.",
    "The team filmed from a second angle, so the video actually shows you jumping.",
    "{guide} checked in afterwards to make sure everyone was feeling fine.",
  ],
};

const EXTRAS: Record<Cluster, string[]> = {
  mountain: [
    "Food was better than expected: dal bhat, garlic soup, momos and pancakes for breakfast.",
    "The porters carried more than I would ever want to and still beat us to the lodge.",
    "The lodges were simple, two beds and a shared bathroom, exactly what you expect at that altitude.",
    "Hot showers cost a few hundred rupees and were worth every one of them.",
    "Wi-Fi was patchy above the villages, which turned out to be a blessing.",
    "Transfers from Kathmandu were long but comfortable enough, and the flight back was smooth.",
    "The packing list they sent was accurate, right down to the down jacket.",
    "We rented sleeping bags from them and they were clean and warm.",
    "The sleeping altitude was well planned, with a rest day exactly when we needed one.",
    "The group size was small enough that we all got to know each other.",
    "Our duffel bags turned up at the right lodge every single evening.",
    "The office helped us store our extra luggage while we were on the trail.",
  ],
  aerial: [
    "Hotel pickup was on time, which after a week in Nepal felt like a small miracle.",
    "Breakfast at the landing site was simple but welcome at that altitude.",
    "They supplied warm jackets and oxygen, which we did not need but was reassuring.",
    "Photos from the flight are on my wall now.",
    "The window seats rotate so everyone gets a turn if you ask.",
    "Transfers were included and the car was comfortable.",
    "The whole trip was over by mid-morning, leaving the rest of the day free.",
    "We got a printed map of the peaks afterwards, which was a nice touch.",
    "The hour on the ground was long enough for a proper look around.",
    "Oxygen was on board and the crew showed us how to use it.",
    "Sunglasses matter more than you would think up there, take the spare pair.",
  ],
  wildlife: [
    "The lodge was comfortable, with hot water and good food.",
    "The buffet dinner had plenty of options, including Nepali and continental.",
    "The jeep was open-sided, which was great for photos but dusty.",
    "Binoculars were provided, which we had not expected.",
    "The park entrance fees were included in the price.",
    "The rooms were basic but the beds had mosquito nets, which mattered.",
    "The bar had cold beer and a view of the river, which was enough for us.",
    "We got a packed breakfast for the early drive, which was thoughtful.",
    "The lodge stored our bags while we were out on the drives.",
    "Cold towels and water were handed out after every jeep ride.",
    "The dining room looked over the river, which made dinner last longer than it should have.",
  ],
  water: [
    "They provided helmets, life jackets and paddles, all in good shape.",
    "Dry bags were available for phones and cameras.",
    "The photos taken by the safety kayaker were a nice surprise.",
    "Transfers to the river and back were included.",
    "There was time for a swim at the lunch stop.",
    "The crew had waterproof jackets for anyone who wanted one.",
    "The whole day was well paced, with a proper break in the middle.",
    "Changing rooms at the put-in point were basic but clean.",
    "Waterproofs were handed out at the start and collected at the end, no fuss.",
    "The bus back was waiting where we finished, which we were grateful for.",
    "There was a photographer on the river and the shots were better than ours.",
  ],
  culture: [
    "Lunch was included and better than the usual tour buffet.",
    "The vehicle was air conditioned, which mattered in the afternoon heat.",
    "Entry fees were covered, so no fumbling for cash at each gate.",
    "We were given bottled water at every stop.",
    "The tour ended with a visit to a workshop we would never have found alone.",
    "The guide recommended a restaurant for dinner and it was excellent.",
    "Pickup and drop-off at the hotel were included.",
    "There was plenty of time for photos, not just a quick look and go.",
    "The guide gave us a short reading list afterwards, which was a nice touch.",
    "We stopped for tea at a place with no other tourists in it.",
    "Bags stayed in the vehicle all day, so we never had to carry anything.",
  ],
  thrill: [
    "Photos and video were included in our package.",
    "The gear was clean and clearly well looked after.",
    "Transfers from Lakeside were included and on time.",
    "Lockers were available for valuables while we were in the air.",
    "There was a short practice run before the real thing, which helped.",
    "The crew had spare warm layers for anyone who came unprepared.",
    "We were given a certificate afterwards, which the kids loved.",
    "The whole thing was done in a couple of hours, leaving the afternoon free.",
    "They kept our bags and phones behind the desk while we were out.",
    "A van brought us back to Lakeside afterwards, which saved a lot of hassle.",
    "The briefing video was short and did the job.",
  ],
};

const CLOSERS = [
  "Would do it again without hesitating.",
  "Already trying to work out when we can come back for a longer one.",
  "If you are on the fence, just book it.",
  "Happy to recommend these guys to anyone heading to Nepal.",
  "Good value for what you get.",
  "Still thinking about that sunrise.",
  "Sore legs for three days after, totally worth it.",
  "Recommended, especially for a first trip to Nepal.",
  "Would go back with the same team in a heartbeat.",
  "A solid, well-run trip from start to finish.",
  "Take the trip, your legs will forgive you.",
  "Two weeks on and I am still looking at the photos.",
  "Worth the money and the early starts.",
  "Easily the highlight of our holiday.",
  "Booked another trip with them before we even left.",
  "Cannot fault it.",
  "Would recommend it to friends without caveats.",
  "One of those trips that stays with you.",
  "A very good few days.",
  "No regrets at all.",
];

/** Lines that only make sense when you walked somewhere. */
const LEG_BOUND = /\b(legs?|trek|trekking|walking|walked|hike|hiking)\b/i;
const SEATED_CLUSTERS = new Set<Cluster>(["aerial", "wildlife", "culture"]);

function voicePool<T>(cluster: Cluster, list: readonly T[], text: (item: T) => string): readonly T[] {
  if (!SEATED_CLUSTERS.has(cluster)) return list;
  const eligible = list.filter((item) => !LEG_BOUND.test(text(item)));
  return eligible.length ? eligible : list;
}

/** Small, forgiveable niggles that still belong in a five-star review. */
const MILD_GRIPES = [
  "The tea at one lodge on day {day} was basically warm water, and we laughed about it.",
  "The drive at the start took longer than advertised because of roadworks, so we arrived late.",
  "One teahouse room was cramped for two people, but we were too tired to care.",
  "Wish we had one more rest day built in, the last two days felt long.",
  "The weather did not cooperate on the day we needed it to, and nobody can control that.",
  "Booking took a couple of follow-up emails, not a big deal but worth mentioning.",
  "The group was a bit large on the first day, though it thinned out after the first village.",
  "Some of the trail was dusty and busy with mules, more an annoyance than a problem.",
  "The flight from Kathmandu was delayed by a few hours, which ate into the first day.",
  "I would have liked more time at the viewpoint, but the schedule is what it is.",
  "The lunch stop on day {day} was rushed and we ate standing up.",
  "The pickup ran twenty minutes late, though the driver had warned us by text.",
];

/** Bigger issues that explain a four-star score. */
const REAL_GRIPES = [
  "Organisation was mostly good, but a couple of pickups were late and we had to chase them.",
  "The hotel at the start was clean but pretty basic compared to the rest of the trip.",
  "One activity got swapped at short notice and we only found out that morning.",
  "Our group was too big for one guide to manage comfortably.",
  "The itinerary changed twice before departure and the final version was tighter than we expected.",
  "Communication before the trip was slow, with emails sometimes going unanswered for days.",
  "A few of the meals were lukewarm, which was a shame because the rest of the food was good.",
  "The accommodation on the final night was a step down from everything before it.",
  "One guide was excellent and the other clearly less experienced, which made the pace uneven.",
  "We paid extra for a service that never materialised, and the refund took a while.",
  "The transfer vehicle was cramped for a long drive, with luggage on our laps for the last hour.",
  "Some of the timings were optimistic, so we ended up walking in the dark on day {day}.",
];

const OPENERS_THRILL_NOTE = ""; // keep list shape obvious

/* ------------------------------------------------------------------ */
/* Headings                                                            */
/* ------------------------------------------------------------------ */

const HEADINGS_FIVE = [
  "Worth the sore legs", "Better than the photos", "Would go again", "Long days, big views",
  "Exactly what we hoped for", "Solid from start to finish", "So glad we booked this",
  "One for the memory bank", "Genuinely great value", "Five stars, easily",
  "Better than expected", "Ticked every box", "No complaints at all", "Absolutely worth it",
  "Just book it", "Loved it", "Smashed our expectations", "Would recommend to anyone",
  "The highlight of our trip", "Big views, good company", "Ran like clockwork",
  "Great guides, great trip", "A week I will not forget", "Everything we wanted",
  "Made our trip", "So well looked after", "Well organised and fun", "Not a single issue",
  "Proper adventure", "Hassle free", "Kids loved it", "Best day of the holiday",
  "Exceeded expectations", "Could not ask for more", "Really well run",
  "Best money we spent in Nepal", "Happy customers", "A real highlight",
  "Would book again", "Worth every penny", "Brilliant from start to finish",
  "Ten out of ten", "Superb trip", "Smooth from start to finish", "Top marks",
  "One of the best things we did", "Glad we picked this one", "Would do it all again",
  "Memorable in the best way", "Just what we needed", "Five stars from us",
  "The photos do not do it justice", "Great team behind it", "So much better than expected",
  "Everything was easy", "Loved every day of it", "Could not fault the guides",
  "A trip we will talk about for years", "Really glad we went",
];

const HEADINGS_FOUR = [
  "Good, with a couple of gripes", "Very good, not perfect", "Great trip, minor issues",
  "Nearly perfect", "Would recommend, with caveats", "Solid, though a few hiccups",
  "Lovely trip, some delays", "Really good overall", "Worth it, but plan for delays",
  "Great value despite the small stuff", "Good trip, room to improve",
  "Enjoyed it, a few niggles", "Great experience, slow start",
  "Would do it again", "Mostly excellent", "Good but not flawless",
  "Great guides, mixed logistics", "Better than average, a few rough edges",
  "A good trip that could be great", "Happy overall, some issues",
  "Very enjoyable, some waiting around", "Close to five stars",
  "Strong trip, a few letdowns", "Would still recommend it",
];

/* ------------------------------------------------------------------ */
/* Compose a review                                                    */
/* ------------------------------------------------------------------ */

type TrekFact = {
  slug: string;
  title: string;
  duration: number;
  region: string | null;
  maxAltitude: number | null;
  theme: string;
};

function fill(template: string, ctx: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => ctx[key] ?? match);
}

/** "{our} guide Santosh…" must not start a sentence with a lowercase word. */
function sentenceCase(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Pool sentences are written for a group; a solo reviewer must not say "we". */
function firstPersonSingular(text: string) {
  return text
    .replace(/\bwe've\b/gi, "I've")
    .replace(/\bwe're\b/gi, "I'm")
    .replace(/\bwe'd\b/gi, "I'd")
    .replace(/\bwe'll\b/gi, "I'll")
    .replace(/\bwe were\b/gi, "I was")
    .replace(/\bwe are\b/gi, "I am")
    .replace(/\bourselves\b/gi, "myself")
    .replace(/\bour\b/gi, "my")
    .replace(/\bus\b/g, "me")
    .replace(/\bwe\b/gi, "I");
}

function makeContext(rng: Rng, trek: TrekFact, solo: boolean) {
  const alt = trek.maxAltitude
    ? Math.round(trek.maxAltitude / 50) * 50
    : 3000;
  const guides = [...GUIDES];
  const guide = guides.splice(Math.floor(rng() * guides.length), 1)[0];
  const guide2 = guides[Math.floor(rng() * guides.length)];
  const place = pick(rng, PLACES[THEME_CLUSTER[trek.theme] ?? "mountain"]);
  const day = randInt(rng, 2, Math.max(2, Math.min(trek.duration, 12)));

  return {
    title: trek.title,
    dur: String(trek.duration),
    duration: String(trek.duration),
    region: trek.region ?? "Nepal",
    month: pick(rng, MOUNTAIN_MONTHS),
    alt: String(alt),
    day: String(day),
    guide,
    guide2,
    place,
    we: solo ? "I" : "we",
    our: solo ? "my" : "our",
    ourselves: solo ? "myself" : "ourselves",
    us: solo ? "me" : "us",
  } as Record<string, string>;
}

/**
 * Pick a template this trek has not used yet; only repeat once the pool is spent.
 * Rejection sampling here wasted attempts, so selection is done up front.
 */
function pickUnused<T>(
  rng: Rng,
  pool: readonly T[],
  key: (item: T) => string,
  used: Set<string>
): T {
  const free = pool.filter((item) => !used.has(key(item)));
  return free.length ? pick(rng, free) : pick(rng, pool);
}

/** Optional sentence: drop it rather than repeat one the page already shows. */
function pickUnusedOrNull<T>(
  rng: Rng,
  pool: readonly T[],
  key: (item: T) => string,
  used: Set<string>
): T | null {
  const free = pool.filter((item) => !used.has(key(item)));
  return free.length ? pick(rng, free) : null;
}

function makeReview(
  rng: Rng,
  trek: TrekFact,
  star: number,
  usedTexts: Set<string>,
  hardBanned: Set<string>,
  softBanned: Set<string>,
  headingsUsed: Set<string>
): { heading: string; text: string } {
  const cluster = THEME_CLUSTER[trek.theme] ?? "mountain";
  const closers = voicePool(cluster, CLOSERS, (c) => c);
  const headings = voicePool(cluster, star === 4 ? HEADINGS_FOUR : HEADINGS_FIVE, (h) => h);

  for (let attempt = 0; attempt < 40; attempt++) {
    const opener = pickUnused(rng, OPENERS[cluster], (o) => o.text, hardBanned);
    const solo = Boolean(opener.solo);
    const ctx = makeContext(rng, trek, solo);

    const hard: string[] = [opener.text];
    const soft: string[] = [];
    const parts: string[] = [sentenceCase(fill(opener.text, ctx))];

    const body = pickUnused(rng, BODIES[cluster], (b) => b, hardBanned);
    hard.push(body);
    parts.push(sentenceCase(fill(body, ctx)));

    // Short reviews feel more human than a paragraph every time.
    if (!chance(rng, 0.18)) {
      const note = chance(rng, 0.55)
        ? pickUnusedOrNull(rng, GUIDELINES[cluster], (g) => g, softBanned)
        : pickUnusedOrNull(rng, EXTRAS[cluster], (e) => e, softBanned);
      if (note) {
        soft.push(note);
        parts.push(sentenceCase(fill(note, ctx)));
      }

      if (chance(rng, 0.5)) {
        const extra = pickUnusedOrNull(rng, EXTRAS[cluster], (e) => e, softBanned);
        if (extra) {
          soft.push(extra);
          parts.push(sentenceCase(fill(extra, ctx)));
        }
      }
    }

    if (star === 4) {
      const gripe = pickUnused(rng, REAL_GRIPES, (g) => g, softBanned);
      soft.push(gripe);
      parts.push(sentenceCase(fill(gripe, ctx)));
    } else if (chance(rng, 0.22)) {
      const gripe = pickUnusedOrNull(rng, MILD_GRIPES, (g) => g, softBanned);
      if (gripe) {
        soft.push(gripe);
        parts.push(sentenceCase(fill(gripe, ctx)));
      }
    }

    if (chance(rng, 0.85)) {
      const closer = pickUnusedOrNull(rng, closers, (c) => c, hardBanned);
      if (closer) {
        hard.push(closer);
        parts.push(closer);
      }
    }

    // Drop accidental back-to-back duplicates from the same pool.
    const rendered = solo ? [parts[0], ...parts.slice(1).map(firstPersonSingular)] : parts;
    const text = dedupeSentences(rendered).join(" ");
    if (usedTexts.has(text)) continue;

    const heading = pickUnused(rng, headings, (h) => h, headingsUsed);

    usedTexts.add(text);
    for (const template of hard) hardBanned.add(template);
    for (const template of soft) softBanned.add(template);
    headingsUsed.add(heading);
    return { heading, text };
  }

  // Vanishingly rare: a tagged tail keeps the body globally unique.
  const ctx = makeContext(rng, trek, false);
  const text =
    `${sentenceCase(fill(pick(rng, OPENERS[cluster]).text, ctx))} ` +
    `${sentenceCase(fill(pick(rng, BODIES[cluster]), ctx))} ` +
    `Still smiling about it ${randInt(rng, 2, 9)} days later.`;
  usedTexts.add(text);
  return { heading: pick(rng, headings), text };
}

function dedupeSentences(parts: string[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of parts) {
    if (!part || seen.has(part)) continue;
    seen.add(part);
    out.push(part);
  }
  return out;
}

/** First sentence with the trek name, months and numbers masked, so near-duplicates match. */
function openerShape(text: string, title: string) {
  const first = text.split(/(?<=\.)\s/)[0] ?? text;
  return first
    .replace(title, "{T}")
    .replace(
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/g,
      "{M}"
    )
    .replace(/\d[\d,]*/g, "#");
}

/* ------------------------------------------------------------------ */
/* Review count per trek                                               */
/* ------------------------------------------------------------------ */

const COUNT_MIN = 3;
const COUNT_MAX = 20;

/**
 * Triangular around the middle so a page usually has 8-14 reviews and only
 * occasionally the extremes — flat 2-20 looks as synthetic as a fixed ten.
 */
function targetCount(rng: Rng) {
  const a = randInt(rng, COUNT_MIN, COUNT_MAX);
  const b = randInt(rng, COUNT_MIN, COUNT_MAX);
  return Math.min(COUNT_MAX, Math.max(COUNT_MIN, Math.round((a + b) / 2)));
}

const FIRST_NAMES = [
  "Martina", "Freja", "Lukas", "Amelie", "Sofia", "Mateo", "Chloe", "Noah", "Isla", "Elena",
  "Jonas", "Priya", "Rahul", "Anika", "Tomas", "Hannah", "Oliver", "Camille", "Diego", "Nina",
  "Sven", "Marta", "Callum", "Ines", "Kiran", "Leila", "Marco", "Yuki", "Sarah", "Daniel",
  "Eva", "Ruben", "Aisha", "George", "Maja", "Felix", "Nadia", "Toby", "Clara", "Arjun",
  "Bea", "Henrik", "Mila", "Owen", "Zara", "Pablo", "Rhea", "Sam", "Tara", "Victor",
  "Anya", "Ben", "Carla", "Dominic", "Elif", "Franz", "Greta", "Hugo", "Ivy", "Jack",
];

const LAST_NAMES = [
  "Bates", "Barnes", "Johnson", "Novak", "Fischer", "Moreau", "Rossi", "Silva", "Kowalski",
  "Andersen", "Patel", "Sharma", "Mehta", "Schmidt", "Dubois", "Garcia", "Larsen", "Walsh",
  "Murphy", "Okafor", "Haddad", "Nakamura", "Zhang", "Kim", "Ivanov", "Petrov", "Costa",
  "Meyer", "Jensen", "Bianchi", "Navarro", "Duarte", "Vogel", "Klein", "Horvat", "Lopez",
  "Hughes", "Brennan", "Grant", "Reid", "Ellis", "Wilder", "Hartley", "Foster", "Baxter",
  "Newton", "Shaw", "Marsh", "Doyle", "Kaur", "Shrestha", "Gurung", "Thapa", "Rai",
  "Tamang", "Sherpa", "Bhujel", "Magar", "Lama",
];

const EMAIL_DOMAINS = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com", "proton.me"];

function makePersona(rng: Rng, used: Set<string>) {
  const domain = pick(rng, EMAIL_DOMAINS);
  for (let attempt = 0; attempt < 80; attempt++) {
    const first = pick(rng, FIRST_NAMES);
    const last = pick(rng, LAST_NAMES);
    const author = `${first} ${last}`;
    if (used.has(author)) continue;
    used.add(author);
    const email = `${first}.${last}${randInt(rng, 2, 89)}@${domain}`.toLowerCase();
    return { author, email };
  }
  const author = `${pick(rng, FIRST_NAMES)} ${pick(rng, LAST_NAMES)} ${randInt(rng, 2, 99)}`;
  used.add(author);
  return { author, email: `traveller${randInt(rng, 100, 999)}@${domain}` };
}

/* ------------------------------------------------------------------ */
/* Rating plan                                                         */
/* ------------------------------------------------------------------ */

/**
 * Rating plan. Rows are only ever 4★ or 5★, so for a given review count only
 * some averages are reachable (3 reviews can only score 5.0, 4.67 or 4.33).
 *
 *   floor    : every product averages at least 4.5
 *   high band: 90% of products land at 4.8-5.0
 *   mid band : 10% of products land at 4.5-4.7
 */
const RATING_FLOOR = 4.5;
const HIGH_BAND_MIN = 4.75; // 4.75 displays as 4.8

function fourStarOptions(n: number) {
  return Array.from({ length: n + 1 }, (_, fours) => ({
    fours,
    average: (n * 5 - fours) / n,
  }))
    .filter((option) => option.average >= RATING_FLOOR - 1e-9)
    .sort((a, b) => b.average - a.average);
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

type ReviewRow = {
  /** null until the row is created in the database. */
  id: string | null;
  author: string;
  email: string;
  rating: number;
  heading: string | null;
  text: string;
  createdAt: Date;
};

type TrekRow = TrekFact & {
  id: string;
  reviews: ReviewRow[];
};

async function main() {
  const themeBySlug = new Map<string, string>();
  const emailByAuthorTrek = new Map<string, string>();
  try {
    const seed = JSON.parse(
      readFileSync(`${PROJECT_ROOT}generated-reviews/reviews.json`, "utf8")
    ) as { trek: string; theme: string; author: string; email: string }[];
    for (const row of seed) {
      themeBySlug.set(row.trek, row.theme);
      if (row.email) emailByAuthorTrek.set(`${row.trek}|${row.author}`, row.email);
    }
  } catch {
    console.warn("Could not read generated-reviews/reviews.json; falling back to title heuristics.");
  }

  const treksRaw = (await prisma.trek.findMany({
    where: { reviews: { some: {} } },
    select: {
      id: true,
      slug: true,
      title: true,
      duration: true,
      region: true,
      maxAltitude: true,
      reviews: {
        where: { approved: true },
        select: { id: true, author: true, rating: true, heading: true, text: true, createdAt: true },
        orderBy: { createdAt: "asc" },
      },
    },
    orderBy: { slug: "asc" },
  })) as (Omit<TrekRow, "reviews"> & { reviews: Omit<ReviewRow, "email">[] })[];

  // Emails only exist in the seed files, so re-attach them by author.
  const treks: TrekRow[] = treksRaw.map((trek) => ({
    ...trek,
    reviews: trek.reviews.map((review) => ({
      ...review,
      email: emailByAuthorTrek.get(`${trek.slug}|${review.author}`) ?? "",
    })),
  }));

  const rng = mulberry32(SEED);

  // Choose the ~10% of treks that land in the 4.0-4.49 band.
  const shuffled = [...treks];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const midTierCount = Math.max(1, Math.round(treks.length * 0.1));
  const midTierSlugs = new Set(shuffled.slice(0, midTierCount).map((t) => t.slug));

  const usedTexts = new Set<string>();
  let updated = 0;
  let created = 0;
  let removed = 0;
  let openerRepeats = 0;
  let sentenceRepeats = 0;
  const treksWithRepeats: string[] = [];
  const trekAverages: { slug: string; average: number; midTier: boolean; count: number }[] = [];
  const samples: { slug: string; title: string; reviews: { rating: number; heading: string; text: string }[] }[] = [];

  // Remote database: one transaction per trek (and one 400-statement transaction)
  // both time out, so send writes concurrently in small chunks instead.
  const WRITE_BATCH = 200;
  const CONCURRENCY = 20;
  const pending: (() => Promise<unknown>)[] = [];
  const doomed: string[] = [];
  const flush = async () => {
    if (doomed.length) {
      const ids = doomed.splice(0, doomed.length);
      await prisma.trekReview.deleteMany({ where: { id: { in: ids } } });
    }
    const batch = pending.splice(0, pending.length);
    for (let i = 0; i < batch.length; i += CONCURRENCY) {
      await Promise.all(batch.slice(i, i + CONCURRENCY).map((run) => run()));
    }
  };

  for (const [trekIndex, trek] of treks.entries()) {
    const theme = themeBySlug.get(trek.slug) ?? guessTheme(trek.title);
    const fact: TrekFact = {
      slug: trek.slug,
      title: trek.title,
      duration: trek.duration,
      region: trek.region,
      maxAltitude: trek.maxAltitude,
      theme,
    };

    // Grow or shrink the page to a randomized number of reviews (2-20).
    const target = targetCount(rng);
    if (trek.reviews.length > target) {
      const keep = new Set<number>();
      while (keep.size < target) keep.add(Math.floor(rng() * trek.reviews.length));
      trek.reviews = trek.reviews.filter((review, i) => {
        if (keep.has(i)) return true;
        if (review.id) doomed.push(review.id);
        removed++;
        return false;
      });
    } else if (trek.reviews.length < target) {
      const usedAuthors = new Set(trek.reviews.map((review) => review.author));
      while (trek.reviews.length < target) {
        const persona = makePersona(rng, usedAuthors);
        trek.reviews.push({
          id: null,
          author: persona.author,
          email: persona.email,
          rating: 5,
          heading: null,
          text: "",
          createdAt: new Date(Date.now() - randInt(rng, 5, 700) * 86_400_000),
        });
        created++;
      }
    }

    const n = trek.reviews.length;
    const midTier = midTierSlugs.has(trek.slug);

    // Only 4 or 5 stars exist per row, so pick from the reachable averages that
    // respect the 4.5 floor, then bias towards the better end of the band.
    const options = fourStarOptions(n);
    const band = options.filter((option) =>
      midTier ? option.average < HIGH_BAND_MIN - 1e-9 : option.average >= HIGH_BAND_MIN - 1e-9
    );
    const pool = band.length ? band : options;
    const fourCount = pick(rng, pool).fours;

    // Randomly choose which reviews carry the 4-star score.
    const indices = trek.reviews.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const fourStarIndices = new Set(indices.slice(0, fourCount));

    const headingsUsed = new Set<string>();
    const hardBanned = new Set<string>();
    const softBanned = new Set<string>();
    const generated = trek.reviews.map((_, i) => {
      const star = fourStarIndices.has(i) ? 4 : 5;
      return {
        star,
        ...makeReview(rng, fact, star, usedTexts, hardBanned, softBanned, headingsUsed),
      };
    });

    const average =
      generated.reduce((sum, r) => sum + r.star, 0) / generated.length;
    trekAverages.push({ slug: trek.slug, average, midTier, count: n });

    // Same opener shape twice on one page is the clearest "generated" tell.
    const shapes = generated.map((r) => openerShape(r.text, trek.title));
    const dupes = shapes.length - new Set(shapes).size;    if (dupes > 0) {
      openerRepeats += dupes;
      treksWithRepeats.push(trek.slug);
      if (process.env.DEBUG_OPENERS) {
        const seen = new Set<string>();
        for (const shape of shapes) {
          if (seen.has(shape)) console.log(`  dup @ ${trek.slug}: ${shape}`);
          seen.add(shape);
        }
      }
    }

    if (samples.length < 6 && n >= 8) {
      samples.push({
        slug: trek.slug,
        title: trek.title,
        reviews: generated.slice(0, 4).map((r) => ({ rating: r.star, heading: r.heading, text: r.text })),
      });
    }

    // Any sentence (not just the opener) showing up twice on the same page.
    const allSentences = generated.flatMap((r) =>
      r.text.split(/(?<=\.)\s/).map((s) => openerShape(s, trek.title))
    );
    sentenceRepeats += allSentences.length - new Set(allSentences).size;

    if (!DRY_RUN) {
      trek.reviews.forEach((review, i) => {
        review.rating = generated[i].star;
        review.heading = generated[i].heading;
        review.text = generated[i].text;
      });

      // Queue the writes and flush in chunks: one round trip per trek was far
      // too slow over a remote database.
      for (const review of trek.reviews) {
        const data = { rating: review.rating, heading: review.heading, text: review.text };
        if (review.id) {
          const id = review.id;
          pending.push(() => prisma.trekReview.update({ where: { id }, data }));
        } else {
          pending.push(() =>
            prisma.trekReview.create({
              data: {
                trekId: trek.id,
                author: review.author,
                approved: true,
                createdAt: review.createdAt,
                ...data,
              },
            })
          );
        }
      }
      if (pending.length >= WRITE_BATCH) await flush();

      if (trekIndex % 40 === 39) {
        console.log(`  … ${trekIndex + 1}/${treks.length} treks`);
      }
    }

    updated += generated.length;
  }

  if (!DRY_RUN) await flush();

  const inHighBand = trekAverages.filter((t) => t.average >= HIGH_BAND_MIN - 1e-9).length;
  const inMidBand = trekAverages.filter((t) => t.average >= RATING_FLOOR - 1e-9 && t.average < HIGH_BAND_MIN - 1e-9).length;
  const belowFloor = trekAverages.filter((t) => t.average < RATING_FLOOR - 1e-9).length;

  console.log(
    `${DRY_RUN ? "DRY RUN — nothing written" : "Updated"} ${updated} reviews across ${treks.length} treks ` +
      `(${DRY_RUN ? "would create" : "created"} ${created}, ${DRY_RUN ? "would delete" : "deleted"} ${removed}).`
  );
  console.log(
    `Trek averages: ${((inHighBand / treks.length) * 100).toFixed(1)}% in 4.8-5.0, ` +
      `${((inMidBand / treks.length) * 100).toFixed(1)}% in 4.5-4.7, ` +
      `${belowFloor} below 4.5 (lowest ${Math.min(...trekAverages.map((t) => t.average)).toFixed(2)}).`
  );

  const averages = trekAverages.map((t) => t.average).sort((a, b) => a - b);
  const buckets = new Map<string, number>();
  for (const a of averages) {
    const key = a.toFixed(1);
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }
  console.log(
    "Distribution: " +
      [...buckets.entries()]
        .sort((a, b) => Number(b[0]) - Number(a[0]))
        .map(([k, v]) => `${k}: ${v}`)
        .join(" | ")
  );

  const counts = trekAverages.map((t) => t.count);
  const countBuckets = new Map<number, number>();
  for (const c of counts) countBuckets.set(c, (countBuckets.get(c) ?? 0) + 1);
  console.log(
    `Reviews per trek: min ${Math.min(...counts)}, max ${Math.max(...counts)} | ` +
      [...countBuckets.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([k, v]) => `${k}:${v}`)
        .join(" ")
  );

  const texts = new Set<string>();
  let duplicates = 0;
  for (const s of samples) {
    for (const r of s.reviews) {
      if (texts.has(r.text)) duplicates++;
      texts.add(r.text);
    }
  }
  console.log(`Sample duplicate check: ${duplicates} duplicate bodies in ${texts.size} sampled reviews.`);

  console.log(
    `Repeated openers: ${openerRepeats} across ${treksWithRepeats.length} trek(s)` +
      (treksWithRepeats.length ? ` — ${treksWithRepeats.slice(0, 8).join(", ")}` : "")
  );
  console.log(`Repeated sentences within a trek: ${sentenceRepeats}`);

  const leaked = [...usedTexts].filter((t) => /\{\w+\}/.test(t));
  console.log(`Placeholder leaks: ${leaked.length}`);
  if (leaked.length) {
    console.log(leaked.slice(0, 3).join("\n"));
    process.exitCode = 1;
  }

  for (const sample of samples) {
    console.log(`\n--- ${sample.title} (${sample.slug})`);
    for (const r of sample.reviews) {
      console.log(`  [${r.rating}★] ${r.heading} — ${r.text}`);
    }
  }

  if (!DRY_RUN) {
    writeSeedFiles(treks, themeBySlug);
  }
}

function guessTheme(title: string): string {
  const t = title.toLowerCase();
  if (/(flight|helicopter|heli tour|paraglid)/.test(t)) return /paraglid/.test(t) ? "paragliding" : "flight";
  if (/(safari|jungle|chitwan|bardia|wildlife)/.test(t)) return "safari";
  if (/(bird)/.test(t)) return "birding";
  if (/(raft|kayak)/.test(t)) return "rafting";
  if (/(bungee|zipline|zip flyer|atv|adventure)/.test(t)) return "adrenaline";
  if (/(pilgrim|temple|monastery|muktinath|pashupati)/.test(t)) return "pilgrimage";
  if (/(village|homestay|ghalegaun)/.test(t)) return "village";
  if (/(tour|sightseeing|durbar|bhaktapur|patan)/.test(t)) return "daytour";
  if (/(climbing|peak|expedition|island peak|mera|ama dablam)/.test(t)) return "expedition";
  return "trek";
}

/** Regenerate the checked-in seed files from the in-memory state. */
function writeSeedFiles(treks: TrekRow[], themeBySlug: Map<string, string>) {
  const jsonPath = `${PROJECT_ROOT}generated-reviews/reviews.json`;
  const csvPath = `${PROJECT_ROOT}generated-reviews/review-personas.csv`;

  const rows = treks
    .flatMap((trek) =>
      trek.reviews.map((review) => ({
        trek: trek.slug,
        title: trek.title,
        theme: themeBySlug.get(trek.slug) ?? guessTheme(trek.title),
        author: review.author,
        email: review.email || `${review.author.toLowerCase().replace(/[^a-z]+/g, ".")}@gmail.com`,
        rating: review.rating,
        heading: review.heading ?? "",
        text: review.text,
        createdAt: review.createdAt.toISOString(),
      }))
    )
    .sort((a, b) => a.trek.localeCompare(b.trek) || a.createdAt.localeCompare(b.createdAt));

  writeFileSync(jsonPath, JSON.stringify(rows, null, 2) + "\n");

  const cell = (value: string | number) => {
    const text = String(value);
    return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
  };
  const csv = [
    "author,email,trek_slug,rating",
    ...rows.map((row) => [row.author, row.email, row.trek, row.rating].map(cell).join(",")),
  ];
  writeFileSync(csvPath, csv.join("\n") + "\n");

  console.log(`Seed files rewritten: ${rows.length} reviews across ${treks.length} treks.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
