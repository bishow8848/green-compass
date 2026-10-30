import "dotenv/config";
import { prisma } from "@/lib/prisma";
const t = await prisma.trek.findMany({ select: { slug: true, title: true, duration: true, difficulty: true, region: true, maxAltitude: true, bestTime: true, category: { select: { slug: true } } } });
console.log(JSON.stringify(t.slice(0, 12), null, 1));
console.log("regions", [...new Set(t.map(x => x.region))].join(" | "));
console.log("diffs", [...new Set(t.map(x => x.difficulty))].join(" | "));
console.log("dur range", Math.min(...t.map(x=>x.duration)), Math.max(...t.map(x=>x.duration)));
console.log("alt range", Math.min(...t.map(x=>x.maxAltitude??0)), Math.max(...t.map(x=>x.maxAltitude??0)));
process.exit(0);
