import { ALL_POSTS } from "./blog-content/index";
const want = process.argv.slice(2);
const w = (s: string) => s.replace(/<[^>]*>/g," ").replace(/\[\[[a-z]+:[a-z0-9-]+\|([^\]]+)\]\]/g,"$1").trim().split(/\s+/).filter(Boolean).length;
for (const p of ALL_POSTS.filter(p => want.length === 0 || want.includes(p.slug))) {
  const t: string[] = [];
  const blk = (b: any) => {
    if ("p" in b) t.push(b.p); else if ("h3" in b) t.push(b.h3);
    else if ("ul" in b) t.push(b.ul.join(" ")); else if ("ol" in b) t.push(b.ol.join(" "));
    else if ("quote" in b) t.push(b.quote);
    else if ("table" in b) t.push(b.table.head.join(" ")+" "+b.table.rows.map((r:string[])=>r.join(" ")).join(" ")+" "+(b.table.note??""));
    else if ("figure" in b) t.push(b.figure.caption ?? "");
  };
  for (const b of p.intro) blk(b);
  for (const s of p.sections) { t.push(s.h2); for (const b of s.blocks) blk(b); }
  const body = w(t.join(" "));
  const faq = w(p.faqs.map((f:any)=>f.question+" "+f.answer).join(" "));
  console.log(`${String(body+faq).padStart(5)} total (${body} body + ${faq} faq)  ${p.sections.length}sec ${p.faqs.length}faq  ${p.slug}`);
}
