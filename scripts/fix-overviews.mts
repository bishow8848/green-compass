/**
 * Bring two thin trek overviews up to a usable length.
 *
 * The overview is the main body copy on the page and the first thing a reader
 * or a crawler sees below the hero. Under ~120 words it carries too little of
 * the route, the altitude profile or the terrain to rank or to inform.
 *
 *   npx tsx scripts/fix-overviews.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");

const OVERVIEWS: Record<string, string> = {
  "annapurna-base-camp-trek":
    "<p>The <strong>9-day Annapurna Base Camp Trek</strong> is a moderate Himalayan trek that ends inside one of the most dramatic natural amphitheatres on earth. Starting with the drive from Kathmandu to Pokhara, the route climbs the Modi Khola valley through terraced farmland, Gurung villages and dense rhododendron forest before entering the glacial bowl of the <strong>Annapurna Sanctuary</strong> at <strong>4,130 m</strong>.</p>" +
    "<p>The walking itself takes five days. From the roadhead at <strong>Jhinu Danda (1,780 m)</strong> the trail climbs the long stone staircase to <strong>Chhomrong (2,170 m)</strong>, the last permanent village before the sanctuary, then follows the river upstream through <strong>Bamboo (2,310 m)</strong>, <strong>Dovan</strong> and <strong>Deurali (3,230 m)</strong> as the gorge narrows and the treeline falls away. The final morning crosses <strong>Machhapuchhre Base Camp (3,700 m)</strong> before the valley opens completely at base camp.</p>" +
    "<p>What makes this trek unusual is how close the mountains stand. At <strong>Annapurna Base Camp</strong> you are ringed on every side by <strong>Annapurna I (8,091 m)</strong>, <strong>Annapurna South (7,219 m)</strong>, <strong>Hiunchuli</strong>, <strong>Gangapurna</strong>, <strong>Tent Peak</strong> and the unclimbed fishtail summit of <strong>Machhapuchhre (6,993 m)</strong>. Sunrise lights the rim peak by peak, and there is no view out — only up.</p>" +
    "<p>The trek is graded moderate. It needs no technical skill and no previous high-altitude experience, but it does involve five to seven hours of walking a day on long flights of stone steps, and the descent is as demanding as the climb. It suits reasonably fit walkers looking for a short itinerary that still reaches genuine high mountain terrain, and it finishes with a soak in the natural hot springs at Jhinu Danda.</p>",

  "tsum-valley-and-manaslu-circuit-trek":
    "<p>The <strong>Tsum Valley and Manaslu Circuit Trek</strong> is a 20-day route through the Manaslu Conservation Area that joins two restricted regions into one journey: the hidden Buddhist valley of <strong>Tsum</strong> and the full circuit of <strong>Manaslu (8,163 m)</strong>, the eighth-highest mountain in the world.</p>" +
    "<p>The trek follows the Budhi Gandaki upstream from <strong>Machha Khola (930 m)</strong> through steep river gorges and suspension bridges before branching east into <strong>Tsum Valley</strong>. Closed to outsiders until 2008, Tsum is a sacred valley of Tibetan Buddhist settlements, chortens and mani walls, where hunting has been forbidden by local vow for generations. The route reaches <strong>Mu Gompa (3,700 m)</strong> near the Tibetan border and the nunnery at <strong>Rachen Gompa</strong> before rejoining the main circuit.</p>" +
    "<p>From there the trail climbs through <strong>Namrung</strong>, <strong>Lho</strong> and <strong>Shyala</strong> to <strong>Sama Gaun (3,530 m)</strong>, with an acclimatisation day for the walk up to <strong>Manaslu Base Camp</strong> or the glacial <strong>Birendra Lake</strong>. The crux is the crossing of <strong>Larkya La Pass (5,106 m)</strong> — a long, cold, pre-dawn start over moraine and snow, with the descent to <strong>Bimthang (3,720 m)</strong> among the finest mountain days in Nepal.</p>" +
    "<p>This is a demanding trek. It requires a restricted-area permit, a licensed guide and a minimum group size, and it involves consecutive days above 3,500 m and one serious pass. In exchange it offers far fewer trekkers than the Annapurna or Everest regions, teahouse accommodation throughout, and a route that circles an eight-thousander from river gorge to glacier and back.</p>",
};

async function main() {
  const words = (h: string) => h.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().split(" ").length;
  for (const [slug, html] of Object.entries(OVERVIEWS)) {
    const t = await prisma.trek.findUnique({ where: { slug }, select: { id: true, overview: true } });
    if (!t) { console.error(`unknown slug ${slug}`); process.exitCode = 1; return; }
    console.log(`${slug}: ${words(t.overview)}w -> ${words(html)}w`);
    if (APPLY) await prisma.trek.update({ where: { id: t.id }, data: { overview: html } });
  }
  // The metaTitle still carries the old "Tsun" spelling of Tsum Valley.
  const tsum = await prisma.trek.findUnique({ where: { slug: "tsum-valley-trek" }, select: { id: true, metaTitle: true } });
  if (tsum) {
    const next = "Tsum Valley Trek – 13 Days | Hidden Himalayan Valley";
    console.log(`tsum-valley-trek metaTitle: ${JSON.stringify(tsum.metaTitle)} -> ${JSON.stringify(next)}`);
    if (APPLY) await prisma.trek.update({ where: { id: tsum.id }, data: { metaTitle: next } });
  }
  console.log(APPLY ? "✅ applied" : "dry run");
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
