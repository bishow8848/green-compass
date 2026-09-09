/**
 * Seed 5-star customer reviews for every published trek.
 *
 * - Inserts PER_TREK reviews per published trek directly into the DB (approved=true).
 * - Each review uses a UNIQUE "foreign" persona (name + email). Emails are NOT
 *   stored on the review (schema has no email column) — they are written to
 *   generated-reviews/review-personas.csv as a reference list, plus full content
 *   to generated-reviews/reviews.json.
 * - Review copy is assembled per-trek from theme-specific fragment pools so it
 *   reads naturally and differs between treks (no logins/accounts are created).
 *
 * Usage:
 *   npx tsx scripts/seed-trek-reviews.mts            # insert (skips treks already at target)
 *   npx tsx scripts/seed-trek-reviews.mts --dry-run  # generate content + files, write nothing
 *   npx tsx scripts/seed-trek-reviews.mts --force    # ignore existing-review guard
 */
import "dotenv/config";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { prisma } from "../lib/prisma";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PER_TREK = 10; // 5-star reviews per trek
const OUT_DIR = path.join(__dirname, "..", "generated-reviews");
const DRY_RUN = process.argv.includes("--dry-run");
const FORCE = process.argv.includes("--force");

/* ────────────────────────── deterministic RNG ────────────────────────── */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(0x5eedc0de);
const pick = <T,>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];
const shuffle = <T,>(arr: T[]): T[] => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/* ─────────────────────────── persona pools ──────────────────────────── */
const FIRST = ("Olivia Liam Emma Noah Amelia Oliver Ava Elijah Sophia Lucas Charlotte Mason Henry Evelyn " +
  "Ethan Harper Mia Benjamin Ella Alexander Scarlett James Aria Sebastian Grace Jack Chloe Levi Logan " +
  "Emily Samuel Riley David Zoey Caleb Madison Daniel Sofia Ryan Luna Owen Maya Nathan Aurora Wyatt Avery " +
  "Carter Layla Isaac Penelope Dylan Hannah Luke Lillian Gabriel Ellie Anthony Stella Adam Zoe Violet Aaron " +
  "Aubrey Hunter Savannah Connor Isabelle Thomas Claire Charles Brooklyn Christopher Alexandra Julian Eleanor " +
  "Christian Paisley Jeremiah Anna Cameron Natalie Jonathan Elise Cooper Emery Austin Annabelle Colton Alice " +
  "Landon Kaylee Robert Eliana Kevin Addison Dominic Ruby Jordan Lucy Blake Reagan Tyler Aaliyah Xavier " +
  "Jose Dominic Lilly Sean Clara Oscar Freya Finn Maya Theo Ingrid Hugo Astrid Erik Soren Lars Petra Freja " +
  "Anders Maja Jonas Elin Marcus Linn Noah Ida Felix Nora Emil Sigrid Gustav Hanna Isak Julia Anton Lovisa " +
  "Piotr Agnieszka Kacper Zofia Jan Mateusz Aleksandra Tomasz Katarzyna Michal Anna Lukasz Magdalena Marek " +
  "Weronika Jakub Joanna Diego Lucia Marco Elena Matteo Giulia Leonardo Sofia Alessia Francesco Chiara Lorenzo " +
  "Martina Alessandro Giada Luca Francesca Enzo Valentina Rafaela Thiago Beatriz Gabriel Isabela Joao Larissa " +
  "Mateus Camila Lucas Ana Pedro Mariana")
  .split(" ");

const LAST = ("Smith Johnson Williams Brown Jones Garcia Miller Davis Rodriguez Martinez Hernandez Lopez Wilson " +
  "Anderson Thomas Taylor Moore Jackson Martin Lee Perez Thompson White Harris Sanchez Clark Ramirez Lewis " +
  "Robinson Walker Young Allen King Wright Scott Torres Nguyen Hill Flores Green Adams Nelson Baker Hall Rivera " +
  "Campbell Mitchell Carter Roberts Gomez Phillips Evans Turner Diaz Parker Cruz Edwards Collins Reyes Stewart " +
  "Morris Morales Murphy Cook Rogers Gutierrez Ortiz Morgan Cooper Peterson Bailey Reed Kelly Howard Ramos Kim " +
  "Cox Ward Richardson Watson Brooks Chavez Wood James Bennett Gray Mendoza Ruiz Hughes Price Alvarez Castillo " +
  "Sanders Patel Myers Long Ross Foster Jimenez Powell Jenkins Perry Russell Sullivan Bell Coleman Butler Henderson " +
  "Barnes Gonzalez Fisher Vasquez Simmons Romero Jordan Patterson Alexander Hamilton Graham Reynolds Griffin Wallace " +
  "Moreno West Cole Hayes Bryant Herrera Gibson Ellis Tran Medina Aguilar Stevens Murray Ford Castro Marshall Owens " +
  "Harrison Fernandez Woods Washington Kennedy Wells Bates Hart Dean Berry Spencer Rodgers Burton Warner Parsons " +
  "Lawson Holloway Stone Palmer Pearson Fox Hooper Short Todd Fowler Newman Snyder Baldwin Perkins Quinn Zimmerman " +
  "Mason Buchanan Shaw Saunders Norman Watkins Holmes McCarthy Vance Fraser Sinclair Macdonald Cameron Grant " +
  "Douglas Reid Crawford Campbell Mckenzie Stewart Mackenzie")
  .split(" ");

const DOMAINS = ["gmail.com", "outlook.com", "hotmail.com", "yahoo.com", "icloud.com", "aol.com",
  "proton.me", "live.com", "ymail.com", "gmx.com", "mail.com"];

// Deterministic globally-unique persona set: unique (first,last) combos.
const F = FIRST.length, L = LAST.length;
const MAX_PERSONAS = F * L;
const permIndexes: number[] = Array.from({ length: MAX_PERSONAS }, (_, i) => i);
for (let i = permIndexes.length - 1; i > 0; i--) {
  const j = Math.floor(rng() * (i + 1));
  [permIndexes[i], permIndexes[j]] = [permIndexes[j], permIndexes[i]];
}
let personaCursor = 0;
function nextPersona(): { name: string; email: string } {
  if (personaCursor >= permIndexes.length) throw new Error("Ran out of unique personas.");
  const idx = permIndexes[personaCursor++];
  const first = FIRST[idx % F];
  const last = LAST[Math.floor(idx / F) % L];
  const domain = DOMAINS[personaCursor % DOMAINS.length];
  const num = String(10 + (idx * 7) % 90);
  const name = `${first} ${last}`;
  const email = `${first}.${last}${num}@${domain}`.toLowerCase();
  return { name, email };
}

/* ─────────────────────── name / title helpers ───────────────────────── */
function shortName(title: string): string {
  let s = title.split("–")[0].trim(); // drop " – N Days" style suffixes
  // drop leading duration tokens like "1 Night 2 Days " / "1 Day " / "3 Hours "
  s = s.replace(/^(?:\d+\s*(?:night|nights|day|days|hour|hours|minute|minutes)s?\s*)+/i, "").trim();
  return s || title.trim();
}

/* ─────────────────────── theme classification ───────────────────────── */
type Theme = "expedition" | "trek" | "shorttrek" | "safari" | "birding" | "helicopter" | "flight"
  | "adrenaline" | "paragliding" | "rafting" | "activity" | "pilgrimage" | "village" | "culture" | "daytour";

function classify(t: { title: string; region: string | null; duration: number; category: { slug: string } | null }): Theme {
  const j = ` ${t.title.toLowerCase()} ${(t.region ?? "").toLowerCase()} `;
  const cat = t.category?.slug ?? "";

  if (cat === "climbing") return "expedition";
  if (/helicopter/.test(j)) return "helicopter";
  if (/mountain flight/.test(j)) return "flight";
  if (/bird watching|birding/.test(j)) return "birding";
  if (/safari|wildlife|national park|jungle|chitwan|bardia|koshi|elephant/.test(j)) return "safari";
  if (/bungee|zipline|zip flyer|flyer|swing/.test(j)) return "adrenaline";
  if (/paraglid|parahawk/.test(j)) return "paragliding";
  if (/raft|kayak/.test(j)) return "rafting";
  if (/pilgrimage|holy|muktinath|lumbini|gosainkunda|buddhist|hindu|damodar|kunda|monaster|temple/.test(j)) return "pilgrimage";
  if (/village|homestay|ghalegaun|sirubari|bungmati|khokana|namobuddha|dakshinkali/.test(j)) {
    return t.duration >= 3 ? "village" : "daytour"; // one-day village jaunts are day tours
  }
  if (/atv|ultra.light|cable car|parasail|mountain bike|cycling/.test(j)) return "activity";
  if (cat === "treks" || /trek|hike|hiking|base camp|circuit|pass|peak/.test(j)) {
    return t.duration <= 6 ? "shorttrek" : "trek";
  }
  if (t.duration <= 2) return "daytour";
  return "culture";
}

/* ─────────────────────── companion phrases ──────────────────────────── */
const COMP = ["my partner and I", "my wife and I", "my husband and I", "my brother and I", "my sister and I",
  "two friends and I", "a group of four of us", "my parents and I", "my best friend and I", "a few colleagues and I",
  "on my own", "my teenage son and I", "my daughter and I"];
const MONTHS = ["late March", "April", "early May", "October", "November", "late September", "December"];

/* ─────────────────────── content fragment pools ─────────────────────── */
type Pack = { openers: string[]; middles: string[]; closers: string[]; headings: string[] };
const mk = (openers: string[], middles: string[], closers: string[], headings: string[]): Pack =>
  ({ openers, middles, closers, headings });

const PACKS: Record<Theme, Pack> = {
  expedition: mk([
    "Climbing {NAME} had been on my list for years and it honestly exceeded everything I imagined.",
    "I have climbed with operators on three continents and this is the most professional team I have come across.",
    "From the first planning call to the last handshake in Kathmandu, {NAME} was run to an incredibly high standard.",
    "We chose this expedition after a long search and I am so glad we did — it was flawless from start to finish.",
    "There are a lot of companies selling Himalayan climbs, but very few can actually deliver like this one.",
    "I was nervous about joining a group climb on {NAME}, but the team made it feel safe, calm and achievable.",
  ], [
    "The mountain guides were superb — experienced, patient and genuinely invested in everyone's safety.",
    "Acclimatisation was handled properly, with honest daily health checks instead of just pushing on regardless.",
    "The sherpa team worked unbelievably hard, from fixing ropes to keeping the camp warm and well stocked.",
    "Every piece of kit, from oxygen to high-altitude food, was sorted and in place before we even left base camp.",
    "Our lead guide read the weather and the group perfectly and made the right call at every decision point.",
    "Communication before and during the trip was excellent — nothing was left vague or up in the air.",
    "The camps were comfortable and well organised, which makes a huge difference on a long expedition.",
    "Even the logistics nobody thinks about — permits, flights, internal transfers — all worked without a hitch.",
    "Summit day was hard, but standing on top with the team around me is something I will never forget.",
    "They never pushed anyone beyond their limits and celebrated a smart turnaround just as warmly as a summit.",
  ], [
    "I would book with them again in a heartbeat and already have my next mountain in mind.",
    "If you are thinking about a Himalayan climb, stop researching and go with this team — you will not regret it.",
    "Worth every penny. This is what a properly run expedition looks like.",
    "I have recommended them to everyone in my climbing club since I got home.",
    "Five stars is not enough for the care and professionalism we received.",
  ], [
    "Exceeded every expectation", "A world-class team", "Summit success with total confidence",
    "The climb of a lifetime", "Professional, safe and unforgettable", "Best operators in the Himalaya",
    "Could not have asked for more", "Flawless expedition from start to finish",
  ]),

  trek: mk([
    "{NAME} was everything we hoped for and so much more.",
    "We picked {NAME} after a lot of research and it did not disappoint.",
    "I have done a few Himalayan treks and this one stands out for all the right reasons.",
    "From our first enquiry to the drive home, {NAME} was brilliantly organised.",
    "This was my first proper trek and the team made it feel easy and enjoyable.",
    "We booked {NAME} on a friend's recommendation and it was the best advice we got all year.",
  ], [
    "Our guide was fantastic — knowledgeable about the mountains, the culture and exactly when we needed a break.",
    "The teahouses and lodges were clean and welcoming, and the food was far better than I expected at altitude.",
    "The pace was just right: challenging enough to feel like an achievement, relaxed enough to actually enjoy it.",
    "Every sunset and mountain view along the way felt like a reward for the day's walking.",
    "The whole team looked after us brilliantly — nothing was ever too much trouble.",
    "We learned so much about the villages, monasteries and local life from our guide.",
    "The itinerary was well paced with proper acclimatisation days built in.",
    "Our porter carried our bags without complaint and always greeted us with a smile at the day's end.",
    "The arrangements were seamless: permits sorted, transport on time, rooms ready when we arrived.",
    "The views were spectacular at every turn and the trails far quieter than the busy routes I had read about.",
  ], [
    "I would not hesitate to book with them again and hope to come back for another trek soon.",
    "If you are considering this trek, just go — you will not regret a single step.",
    "Already recommending it to everyone I know who loves the mountains.",
    "Thank you to the whole team for the trip of a lifetime.",
    "The best money I have spent on travel in years.",
  ], [
    "Trip of a lifetime", "Incredible trek, incredible team", "Beyond our expectations",
    "The best trekking experience yet", "Perfectly organised and unforgettable", "We will be back",
    "A highlight of our Nepal trip", "Flawless from start to finish",
  ]),

  shorttrek: mk([
    "We squeezed {NAME} into a short Nepal trip and it was the highlight of our whole holiday.",
    "This was the perfect short trek — rewarding views without needing two weeks off work.",
    "We wanted a taste of the Himalaya without a long expedition, and {NAME} delivered beautifully.",
    "A short trek but a big experience — we packed so much into {DAYS} days.",
    "We did {NAME} as our first ever trek and came home already planning the next one.",
  ], [
    "Our guide was brilliant and made sure we went at a comfortable pace the whole way.",
    "The lodges were warm and friendly, with surprisingly good food after a day on the trail.",
    "The sunrise over the mountains alone was worth the whole trip.",
    "Everything was arranged perfectly — pickup, permits, accommodation and drop-off were all smooth.",
    "The trails were beautiful and not crowded at all when we went.",
    "We felt completely safe and well looked after from the moment we were picked up.",
    "The views from the top were incredible and our guide timed it perfectly for clear skies.",
  ], [
    "Perfect for anyone short on time but big on adventure.",
    "I would absolutely book with them again for a longer trek next time.",
    "A brilliant taster of the Himalaya — highly recommended.",
    "Five stars, no hesitation.",
  ], [
    "Perfect short adventure", "Big views, little time", "A wonderful few days in the mountains",
    "The perfect introduction to trekking", "Unforgettable despite the short time", "Highly recommended",
  ]),

  safari: mk([
    "The wildlife experience on {NAME} was incredible — we saw far more than we ever expected.",
    "We booked {NAME} hoping for a glimpse of wildlife and came away with memories for a lifetime.",
    "This was the best-organised safari we have been on anywhere in the world.",
    "I was blown away by how much wildlife we spotted over just a few days.",
    "{NAME} was a fantastic mix of adventure, nature and comfort.",
  ], [
    "Our naturalist guide had eyes like a hawk and knew exactly where to find the animals.",
    "The jungle drives and canoe rides were thrilling — we saw rhinos, deer and so many exotic birds.",
    "The lodge and food were lovely, and it all felt very safe and well run.",
    "We even saw a tiger on our last morning, which we had only dreamed about.",
    "The local guides shared so much knowledge about the animals and the ecosystem.",
    "Everything — transfers, permits, activities — was arranged flawlessly.",
    "The early morning safaris were magical, with mist over the river and wildlife everywhere.",
    "It was the perfect escape from the city and a real highlight of our Nepal trip.",
  ], [
    "We left wishing we had booked more days.",
    "If you love wildlife, do not miss this — book it with these guys.",
    "An experience we will be talking about for years.",
    "Highly recommended for families and nature lovers alike.",
  ], [
    "Wildlife paradise", "Saw more than we dreamed of", "An unforgettable safari",
    "The highlight of our Nepal trip", "Fantastic guides and wildlife galore", "We wanted to stay longer",
  ]),

  birding: mk([
    "As a keen birder I had high hopes for {NAME} — and it truly delivered.",
    "We booked {NAME} to add some birding to our Nepal trip and it was wonderful.",
    "The number of species we ticked off was remarkable, even for an experienced birder like me.",
  ], [
    "Our guide knew every call and every perch — we spotted species we had only ever seen in books.",
    "The early starts were worth it: the forests and wetlands were alive with birds.",
    "The whole day was relaxed, well paced and packed with great sightings.",
    "The guide carried a scope and was brilliant at getting everyone onto each bird.",
    "Lovely scenery and birds everywhere — a perfect day out.",
  ], [
    "A must-do for anyone who loves birds.",
    "Already planning to come back with my binoculars for more.",
    "Wonderful guides and unforgettable sightings.",
  ], [
    "A birdwatcher's dream", "Fantastic sightings", "Great guides, rare birds", "Worth every early start",
  ]),

  helicopter: mk([
    "The {NAME} was worth every rupee — the views from the helicopter were absolutely breathtaking.",
    "We took the {NAME} and it was the most spectacular way to see the mountains.",
    "I was nervous about flying but the whole experience was smooth, professional and unforgettable.",
    "The best way to see the Himalaya when you do not have weeks to trek.",
  ], [
    "Our pilot was brilliant and made sure we got the best possible views on every side.",
    "The whole operation ran on time and felt very safe and well organised.",
    "Seeing the peaks from the air, so close you feel you could touch them, is unreal.",
    "The team handled everything — permits, timing, transfers — with total professionalism.",
    "Even the landing spots they chose gave us the most incredible scenery.",
    "It was calm, comfortable and completely awe-inspiring.",
  ], [
    "If you can stretch the budget, absolutely do it — worth every penny.",
    "A once-in-a-lifetime view that photos simply cannot capture.",
    "The best money we spent on our whole trip.",
  ], [
    "Breathtaking views", "Smooth, safe and spectacular", "The best views in Nepal",
    "Worth every penny", "A once-in-a-lifetime experience", "Professional from start to finish",
  ]),

  flight: mk([
    "The {NAME} was a perfect way to see the Himalaya in a short time.",
    "We booked the {NAME} and got front-row seats to the most incredible mountain panorama.",
    "Even as a nervous flyer I loved every minute of the {NAME}.",
  ], [
    "We were lucky with clear skies and the views of the giants were unforgettable.",
    "The staff made sure everyone got a window seat and pointed out every peak along the way.",
    "It was smooth, well organised and completely worth the early start.",
    "Seeing Everest and its neighbours from the air was a moment I will never forget.",
    "Everything was punctual and the crew were lovely.",
  ], [
    "A must-do while you are in Nepal.",
    "The photos do not do it justice — you have to see it for yourself.",
    "Wonderful experience, highly recommended.",
  ], [
    "Incredible mountain views", "Front-row seats to the Himalaya", "A perfect day out",
    "Clear skies and giant peaks", "Highly recommended", "Unforgettable flight",
  ]),

  adrenaline: mk([
    "The {NAME} was the biggest adrenaline rush of my life — and I have done a fair few!",
    "We came for the thrill and got exactly that on {NAME}.",
    "If you love adventure, {NAME} is an absolute must while you are in Nepal.",
  ], [
    "The safety briefing was thorough and the equipment felt modern and well maintained.",
    "The staff were encouraging and made the whole experience fun from start to finish.",
    "That moment of free fall was terrifying and amazing in equal measure.",
    "The setting itself was spectacular — you jump surrounded by incredible scenery.",
    "Everything ran on time and the instructors clearly knew exactly what they were doing.",
    "I screamed, I laughed, and I immediately wanted to go again.",
  ], [
    "A total must for adrenaline junkies.",
    "The highlight of our adventure holiday.",
    "I would do it again in a heartbeat.",
  ], [
    "Massive adrenaline rush", "Best thrill in Nepal", "Terrifying and amazing",
    "We went twice!", "Perfectly run and thrilling", "Adventure at its best",
  ]),

  paragliding: mk([
    "Flying over Pokhara on {NAME} was the most peaceful and beautiful experience of our trip.",
    "We booked {NAME} and it completely blew us away.",
    "I was terrified beforehand, but the pilot made it feel safe, calm and magical.",
  ], [
    "The views over the lake and the mountains while floating in total silence are unforgettable.",
    "My pilot was experienced and clearly loved his job — it made all the difference.",
    "The landing was smooth and the whole operation felt very professional.",
    "Watching the sunrise over the Annapurnas from the air was pure magic.",
    "They made sure we got the longest, most scenic flight possible.",
  ], [
    "Do not leave Pokhara without trying this.",
    "The most beautiful thing I did in Nepal.",
    "I am already planning my next flight with them.",
  ], [
    "Magical flight over Pokhara", "Felt like a bird", "The best thing we did in Nepal",
    "Calm, safe and spectacular", "Sunrise from the sky", "Unforgettable",
  ]),

  rafting: mk([
    "The {NAME} was the perfect mix of adrenaline and beautiful scenery.",
    "We went rafting on {NAME} and it was one of the most fun days of our whole trip.",
    "Neither of us had rafted before, and the team made it exciting but totally safe.",
  ], [
    "Our raft guide was brilliant — full of energy and very experienced.",
    "The rapids were thrilling without ever feeling out of control.",
    "Between the rapids we floated past gorgeous gorges and riverside beaches.",
    "The safety briefing and equipment were top notch.",
    "Lunch by the river with the group was a lovely touch.",
    "It felt professional from start to finish, with a great balance of fun and safety.",
  ], [
    "A brilliant day out for families and friends alike.",
    "We would definitely do it again on our next visit.",
    "The most fun we had on the whole trip!",
  ], [
    "Thrilling and beautiful", "The most fun day of our trip", "Great guides, great rapids",
    "Perfect family adventure", "We laughed all day", "Highly recommended",
  ]),

  activity: mk([
    "The {NAME} was a fantastic way to spend a day in Nepal.",
    "We booked the {NAME} and it was thrilling from start to finish.",
    "I was not sure what to expect, but {NAME} turned out to be one of the best parts of our trip.",
  ], [
    "The instructors were professional and made sure we were safe and comfortable the whole time.",
    "Everything was well organised and ran exactly on schedule.",
    "The views and the adrenaline together made it unforgettable.",
    "Great equipment and a friendly, professional team.",
    "It was easy to book and the whole experience felt very well run.",
  ], [
    "Well worth doing while you are in Nepal.",
    "We loved every second and would recommend it to anyone.",
    "A brilliant adventure — book it!",
  ], [
    "Thrilling and well organised", "A brilliant adventure", "Great fun for all ages",
    "Professional and exciting", "A highlight of our trip", "We loved it",
  ]),

  pilgrimage: mk([
    "The {NAME} was a deeply moving and beautifully organised experience.",
    "We joined {NAME} as pilgrims and came away feeling we had done something truly special.",
    "This was a wonderful mix of faith, culture and stunning scenery.",
  ], [
    "Our guide explained the significance of every temple and shrine with real knowledge and warmth.",
    "Everything — transport, accommodation, timing — was arranged with great care.",
    "The atmosphere at the sacred sites was incredibly special and peaceful.",
    "We felt welcomed everywhere we went and learned so much along the way.",
    "The whole journey was smooth and respectful of the places we visited.",
    "It was both a spiritual and cultural experience we will treasure.",
  ], [
    "A journey we will never forget.",
    "If you are considering this pilgrimage, do it — you will not regret it.",
    "Beautifully organised and deeply rewarding.",
  ], [
    "A deeply special journey", "Beautifully organised", "Spiritual and unforgettable",
    "Warmth, culture and faith", "A pilgrimage to remember", "Highly recommended",
  ]),

  village: mk([
    "Staying in the villages on {NAME} gave us a side of Nepal most tourists never see.",
    "The {NAME} was a wonderfully authentic cultural experience.",
    "We wanted to experience real Nepali life, and {NAME} delivered in the warmest way.",
  ], [
    "The homestay families were incredibly welcoming and the food was delicious.",
    "Our local guide shared stories about village life, traditions and festivals.",
    "The hospitality was overwhelming — we felt like family, not tourists.",
    "Wandering the village lanes and joining in daily life was the highlight for us.",
    "Everything was comfortable and beautifully organised.",
    "We learned so much and made friends we still keep in touch with.",
  ], [
    "A must for anyone who wants to see the real Nepal.",
    "We came home with full hearts and new friends.",
    "An authentic experience we will always treasure.",
  ], [
    "The real Nepal", "Warmest hospitality", "An authentic cultural gem",
    "We felt like family", "Wonderful homestay experience", "Unforgettable people",
  ]),

  culture: mk([
    "The {NAME} gave us a wonderful overview of Nepal's culture and history.",
    "We took the {NAME} and every day brought something new and fascinating.",
    "This tour was the perfect way to see so much of Nepal in one trip.",
  ], [
    "Our guide was a walking encyclopaedia of Nepali history and culture.",
    "The temples, palaces and old towns were brought to life by wonderful storytelling.",
    "The pace was comfortable, with a great mix of sightseeing and free time.",
    "Every hotel, meal and transfer was arranged seamlessly.",
    "We saw world heritage sites, local life and incredible scenery all in one tour.",
    "The whole trip felt personal and well thought out.",
  ], [
    "A perfect introduction to Nepal.",
    "We would happily book another tour with them.",
    "Brilliantly organised and endlessly fascinating.",
  ], [
    "A wonderful cultural journey", "Nepal at its best", "Seamless and fascinating",
    "Perfect introduction to Nepal", "Rich history, great guide", "Highly recommended",
  ]),

  daytour: mk([
    "The {NAME} was the perfect way to spend a day in Nepal.",
    "We took the {NAME} and it was a wonderful, well-organised day.",
    "This was easily one of the best day tours we have ever booked.",
    "We booked {NAME} at the last minute and it turned out to be a highlight of our trip.",
  ], [
    "Our guide was friendly, knowledgeable and full of fascinating stories.",
    "The transport was comfortable and everything ran right on time.",
    "We saw all the highlights without ever feeling rushed.",
    "The whole day was effortless — they thought of everything.",
    "Beautiful places, great explanations and lovely pacing.",
    "It was a fantastic introduction to the area in a single day.",
  ], [
    "Perfect for anyone short on time.",
    "We would absolutely book another tour with them.",
    "Worth every cent — just do it.",
  ], [
    "A perfect day out", "Great guide, great day", "Effortless and enjoyable",
    "We saw it all", "Worth every minute", "Highly recommended",
  ]),
};

const SHARED_HEADINGS = ["Absolutely brilliant", "Could not recommend more", "An experience to treasure",
  "Five stars is not enough", "We loved every moment", "Book it — you will not regret it"];

/* ─────────────────────── text assembly ──────────────────────────────── */
function buildText(trek: { title: string; duration: number }, pack: Pack): string {
  const name = shortName(trek.title);
  const days = trek.duration;
  const comp = pick(COMP);
  const month = pick(MONTHS);
  const fill = (s: string) => s
    .replace(/\{NAME\}/g, name)
    .replace(/\{DAYS\}/g, String(days))
    .replace(/\{COMP\}/g, comp)
    .replace(/\{MONTH\}/g, month);

  const op = fill(pick(pack.openers));
  const midCount = rng() < 0.55 ? 2 : 1;
  const mids = shuffle(pack.middles).slice(0, midCount).map(fill).join(" ");
  const close = fill(pick(pack.closers));
  return `${op} ${mids} ${close}`.replace(/\s+/g, " ").trim();
}

function buildHeading(pack: Pack): string {
  return pick([...pack.headings, ...SHARED_HEADINGS]);
}

/* ─────────────────────── createdAt spread ───────────────────────────── */
const NOW = Date.now();
const DAY = 86_400_000;
function reviewDates(count: number): Date[] {
  const dates: number[] = [NOW - (3 + Math.floor(rng() * 58)) * DAY]; // one fresh review
  for (let i = 1; i < count; i++) dates.push(NOW - (90 + Math.floor(rng() * 451)) * DAY);
  dates.sort((a, b) => a - b);
  return dates.map((t) => new Date(t));
}

/* ─────────────────────────────── main ───────────────────────────────── */
async function main() {
  if (DRY_RUN) console.log("DRY RUN — no database writes will be performed.\n");
  else if (FORCE) console.log("FORCE mode — ignoring the 'already has reviews' guard.\n");

  const treks = await prisma.trek.findMany({
    where: { status: "published" },
    select: {
      id: true, slug: true, title: true, region: true, duration: true, difficulty: true,
      category: { select: { slug: true } },
    },
    orderBy: { title: "asc" },
  });
  console.log(`Published treks found: ${treks.length}\n`);

  const existing = await prisma.trekReview.groupBy({ by: ["trekId"], _count: { _all: true } });
  const existingMap = new Map(existing.map((e) => [e.trekId, e._count._all]));
  const usedNames = new Set<string>(
    (await prisma.trekReview.findMany({ select: { author: true } })).map((r) => r.author.trim().toLowerCase())
  );

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const csvLines: string[] = ["author,email,trek_slug,rating"];
  const jsonRows: any[] = [];
  const usedText = new Set<string>();
  let created = 0, skipped = 0;

  for (const trek of treks) {
    const have = existingMap.get(trek.id) ?? 0;
    const target = Math.min(PER_TREK, Math.max(0, PER_TREK - have));
    if (target === 0 && !FORCE) { skipped++; continue; }
    const need = FORCE ? PER_TREK : target;

    const theme = classify(trek);
    const pack = PACKS[theme];
    const dates = reviewDates(need);
    const usedHeadingLocal = new Set<string>();

    const rows: {
      trekId: string; author: string; rating: number; heading: string; text: string; approved: boolean; createdAt: Date;
    }[] = [];

    for (let i = 0; i < need; i++) {
      // pick a globally-unique foreign persona (skip any already used)
      let persona = nextPersona();
      let guard = 0;
      while (usedNames.has(persona.name.trim().toLowerCase()) && guard++ < 200) persona = nextPersona();
      usedNames.add(persona.name.trim().toLowerCase());

      // assemble text, retry to avoid an exact duplicate anywhere
      let text = buildText(trek, pack);
      for (let g = 0; g < 12 && usedText.has(text); g++) text = buildText(trek, pack);
      usedText.add(text);

      let heading = buildHeading(pack);
      while (usedHeadingLocal.has(heading)) heading = buildHeading(pack);
      usedHeadingLocal.add(heading);

      rows.push({
        trekId: trek.id, author: persona.name, rating: 5,
        heading, text, approved: true, createdAt: dates[i],
      });
      csvLines.push(`${persona.name},${persona.email},${trek.slug},5`);
      jsonRows.push({
        trek: trek.slug, title: trek.title, theme, author: persona.name, email: persona.email,
        rating: 5, heading, text, createdAt: dates[i].toISOString(),
      });
    }

    if (!DRY_RUN && rows.length) await prisma.trekReview.createMany({ data: rows });
    created += rows.length;
    if (rows.length > 0) console.log(`  ${theme.padEnd(11)} ${String(rows.length).padStart(2)} reviews  ${trek.title}`);
  }

  fs.writeFileSync(path.join(OUT_DIR, "review-personas.csv"), csvLines.join("\n") + "\n");
  fs.writeFileSync(path.join(OUT_DIR, "reviews.json"), JSON.stringify(jsonRows, null, 2));

  console.log(`\nCreated: ${created}  (treks skipped as already complete: ${skipped})`);
  console.log(`Reference files written to ${OUT_DIR}/ (review-personas.csv, reviews.json)`);
}

main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
