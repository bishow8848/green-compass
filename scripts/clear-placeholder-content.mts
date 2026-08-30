/**
 * Remove leftover "test" placeholder content from the About page and fix the
 * last marditreks.com address on the home contact card.
 *
 * Where a component ships sensible defaults (Timeline, ProcessSteps), the stored
 * placeholder is cleared so the component's own content renders instead of a row
 * reading "test". Where it does not (founder message, team bios), the field is
 * emptied so the section hides rather than showing placeholder text — those need
 * real copy about real people and are reported, not invented.
 *
 *   npx tsx scripts/clear-placeholder-content.mts            # dry run
 *   npx tsx scripts/clear-placeholder-content.mts --apply
 */
import "dotenv/config";
import { prisma } from "../lib/prisma";

const APPLY = process.argv.includes("--apply");
const isTest = (v: unknown) => typeof v === "string" && /^(<p>)?\s*(test|todo|tbd|placeholder)\s*(<\/p>)?$/i.test(v.trim());

async function main() {
  const s = await prisma.siteSetting.findUniqueOrThrow({ where: { id: "site-settings" } });
  const pc = JSON.parse(s.pageContent || "{}");
  const done: string[] = [];

  // Home contact card still carried the old domain.
  for (const c of pc.home?.contact?.infoCards ?? []) {
    if (typeof c?.description === "string" && /marditreks\.com/i.test(c.description)) {
      c.description = c.description.replace(/[\w.+-]+@marditreks\.com/gi, "info@greencompasstreks.com");
      done.push("home.contact.infoCards → info@greencompasstreks.com");
    }
  }

  // Components with their own defaults: drop the placeholder rows entirely.
  if ((pc.about?.timeline?.events ?? []).some((e: any) => isTest(e?.title) || isTest(e?.description))) {
    pc.about.timeline.events = (pc.about.timeline.events ?? []).filter((e: any) => !isTest(e?.title) && !isTest(e?.description));
    done.push(`about.timeline.events → ${pc.about.timeline.events.length} left (component defaults render)`);
  }
  if ((pc.about?.process?.steps ?? []).some((e: any) => isTest(e?.title) || isTest(e?.description))) {
    pc.about.process.steps = (pc.about.process.steps ?? []).filter((e: any) => !isTest(e?.title) && !isTest(e?.description));
    done.push(`about.process.steps → ${pc.about.process.steps.length} left (component defaults render)`);
  }

  // No safe default: empty it so the section hides until real copy is supplied.
  if (isTest(pc.about?.founder?.message)) { pc.about.founder.message = ""; done.push("about.founder.message → cleared (section hides)"); }
  let bios = 0;
  for (const m of pc.about?.team?.members ?? []) if (isTest(m?.bio)) { m.bio = ""; bios++; }
  if (bios) done.push(`about.team.members → ${bios} placeholder bio(s) cleared`);

  console.log(done.length ? done.map((d) => "  · " + d).join("\n") : "  nothing to change");
  if (!APPLY) { console.log("\nDry run — re-run with --apply."); return; }
  await prisma.siteSetting.update({ where: { id: "site-settings" }, data: { pageContent: JSON.stringify(pc) } });
  console.log("\n✅ Written.");
}
main().catch((e) => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
