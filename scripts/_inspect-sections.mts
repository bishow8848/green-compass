/* Pretty-print long JSON fields (customSections, sectionData) for TARGET and REFERENCE */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const TARGET_ID = "cmt1a36pl00002lfj0brc8ne9";

async function main() {
  const ref = await prisma.trek.findFirst({
    where: { slug: "annapurna-base-camp-trek-from-pokhara" },
  });
  const target = await prisma.trek.findUnique({ where: { id: TARGET_ID } });

  for (const [label, t] of [
    ["TARGET", target],
    ["REFERENCE", ref],
  ] as const) {
    if (!t) {
      console.log(label, "NOT FOUND");
      continue;
    }
    console.log("\n========== " + label + " (" + t.id + ") ==========");
    console.log("title:", t.title);
    console.log("heroImage:", t.heroImage);
    console.log("maxAltitude:", t.maxAltitude, "| difficulty:", t.difficulty, "| duration:", t.duration);
    console.log("\n--- customSections ---");
    try {
      console.log(JSON.stringify(JSON.parse(t.customSections || "[]"), null, 2));
    } catch (e) {
      console.log("PARSE ERROR:", e instanceof Error ? e.message : String(e));
      console.log(t.customSections);
    }
    console.log("\n--- sectionData ---");
    try {
      console.log(JSON.stringify(JSON.parse(t.sectionData || "{}"), null, 2));
    } catch (e) {
      console.log("PARSE ERROR:", e instanceof Error ? e.message : String(e));
      console.log(t.sectionData);
    }
    console.log("\n--- addons ---");
    try {
      console.log(JSON.stringify(JSON.parse(t.addons || "[]"), null, 2));
    } catch (e) {
      console.log(t.addons);
    }
  }
}

main().finally(() => prisma.$disconnect());
