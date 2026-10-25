/**
 * Admin "Share as PDF": saves the current page, laid out as it is on screen,
 * as an A4 PDF with working links.
 *
 * The page is captured once as an SVG (the browser renders it, so every CSS
 * effect survives) and each PDF page is drawn from a slice of it. Slicing a
 * vector image keeps pages sharp however long the page is, where one giant
 * canvas would hit the browser's size limit and be scaled down.
 *
 * The capture libraries load only when an export starts, so importing this
 * module costs visitors nothing.
 */

const A4 = { width: 210, height: 297 }; // mm
/** Page margins (mm). The top and bottom ones hold the letterhead. */
const MARGIN = { top: 30, bottom: 27, side: 15 };
/**
 * Letterhead colours: the site's secondary green, muted text and primary
 * green, and its border colour a shade darker so the rules survive printing.
 */
const INK = { brand: [54, 92, 80], muted: [100, 120, 114], accent: [0, 166, 113], rule: [190, 207, 200] } as const;
/** A CSS px at its natural print size (96 per inch). */
const MM_PER_CSS_PX = 25.4 / 96;
/** Pixel width each PDF page is rendered at — about 225 dpi inside the margins. */
const RENDER_WIDTH = 1600;
const JPEG_QUALITY = 0.85;
/** How much of what follows a heading (CSS px) must share its page. */
const KEEP_WITH_HEADING = 120;

interface Box {
  top: number;
  bottom: number;
}

interface LinkBox {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
}

interface Capture {
  svg: SVGElement;
  width: number;
  height: number;
  boxes: Box[];
  links: LinkBox[];
}

/**
 * What goes on the letterhead of every page. Header: the company logo, then
 * `title` in the middle, then `contactLabel` over `contactNumber`, which
 * links to `contactUrl`. Footer: the logo beside `website`, then the page
 * number in a compass, then `location`.
 */
export interface PdfOptions {
  fileName: string;
  title: string;
  contactLabel: string;
  contactNumber: string;
  contactUrl: string;
  website: string;
  location: string;
}

export async function downloadPagePdf(options: PdfOptions): Promise<void> {
  const [{ domToForeignObjectSvg }, { jsPDF }, logo] = await Promise.all([
    import("modern-screenshot"),
    import("jspdf"),
    loadLogo(),
  ]);

  const { svg, width, height, boxes, links } = await capturePage(domToForeignObjectSvg);
  const image = await loadSvg(svg);

  // A wide page is scaled down to fit inside the margins. A narrow one (a
  // phone layout) keeps its natural size in a centred column instead of being
  // blown up to fill the width, which would leave a screenful of oversized
  // text per page.
  const area = { width: A4.width - 2 * MARGIN.side, height: A4.height - MARGIN.top - MARGIN.bottom };
  const mm = Math.min(area.width / width, MM_PER_CSS_PX);
  const left = (A4.width - width * mm) / 2;
  const pageHeight = area.height / mm; // CSS px of page content per A4 page
  const starts = pageStarts(boxes, height, pageHeight);
  const scale = Math.min(3, RENDER_WIDTH / width);

  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(pageHeight * scale);
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas 2D context unavailable");

  // Safari draws images inside an SVG only once they have been drawn before.
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  await new Promise((resolve) => setTimeout(resolve, 100));

  const pdf = new jsPDF({ unit: "mm", format: "a4", compress: true });
  starts.forEach((start, i) => {
    const end = starts[i + 1] ?? height;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, start, width, end - start, 0, 0, canvas.width, (end - start) * scale);

    if (i > 0) pdf.addPage();
    pdf.addImage(canvas.toDataURL("image/jpeg", JPEG_QUALITY), "JPEG", left, MARGIN.top, width * mm, area.height, undefined, "FAST");
    for (const link of links) {
      if (link.y < start || link.y >= end) continue;
      pdf.link(left + link.x * mm, MARGIN.top + (link.y - start) * mm, link.width * mm, Math.min(link.height, end - link.y) * mm, {
        url: link.url,
      });
    }
  });

  for (let page = 1; page <= pdf.getNumberOfPages(); page++) {
    pdf.setPage(page);
    drawLetterhead(pdf, options, logo, page);
  }
  pdf.save(options.fileName);
}

type Pdf = InstanceType<typeof import("jspdf").jsPDF>;

/** Header and footer of one page, spanning the side margins. */
function drawLetterhead(pdf: Pdf, options: PdfOptions, logo: Uint8Array | null, page: number) {
  const left = MARGIN.side;
  const right = A4.width - MARGIN.side;
  const middle = A4.width / 2;
  const ink = (colour: readonly [number, number, number]) => pdf.setTextColor(...colour);

  // Header: logo | tour name | call / WhatsApp.
  if (logo) pdf.addImage(logo, "PNG", left, 9, 14, 14, "logo", "FAST");

  pdf.setFont("helvetica", "bold").setFontSize(11);
  ink(INK.brand);
  const titleLines = headerLines(pdf, options.title, 105);
  titleLines.forEach((line, i) => {
    pdf.text(line, middle, 17.4 - ((titleLines.length - 1) * 4.8) / 2 + i * 4.8, { align: "center" });
  });

  pdf.setFont("helvetica", "normal").setFontSize(7.5);
  ink(INK.muted);
  pdf.text(options.contactLabel, right, 14.8, { align: "right" });
  pdf.setFont("helvetica", "bold").setFontSize(9.5);
  ink(INK.brand);
  pdf.textWithLink(options.contactNumber, right, 19.4, { align: "right", url: options.contactUrl });

  // Rules under the header and over the footer, between them and the content.
  pdf.setDrawColor(...INK.rule);
  pdf.setLineWidth(0.3);
  pdf.line(left, 26, right, 26);
  pdf.line(left, A4.height - 23.5, right, A4.height - 23.5);

  // Footer: logo and website | page number in a compass | location.
  const base = A4.height - 13;
  pdf.setFont("helvetica", "normal").setFontSize(8);
  let x = left;
  if (logo) {
    pdf.addImage(logo, "PNG", left, base - 6, 8.5, 8.5, "logo", "FAST");
    x += 10.5;
  }
  ink(INK.brand);
  pdf.textWithLink(options.website, x, base, { url: options.website });
  ink(INK.muted);
  pdf.text(options.location, right, base, { align: "right" });
  drawCompassPageNumber(pdf, middle, base - 1.7, page);
}

/**
 * The tour name in at most two lines of `maxWidth` mm. Two lines are split at
 * the word that makes them closest in length rather than leaving one word on
 * its own; a name too long even for that is cut short with an ellipsis.
 */
function headerLines(pdf: Pdf, text: string, maxWidth: number): string[] {
  if (pdf.getTextWidth(text) <= maxWidth) return [text];
  const words = text.split(/\s+/);
  let best: string[] | null = null;
  let bestWidth = Infinity;
  for (let i = 1; i < words.length; i++) {
    const lines = [words.slice(0, i).join(" "), words.slice(i).join(" ")];
    const width = Math.max(...lines.map((line) => pdf.getTextWidth(line)));
    if (width <= maxWidth && width < bestWidth) {
      best = lines;
      bestWidth = width;
    }
  }
  if (best) return best;
  const [first, second] = pdf.splitTextToSize(text, maxWidth) as string[];
  return [first, `${second.replace(/\s+\S*$/, "")}…`];
}

/**
 * The page number inside a compass like the logo's: a ring with four points.
 * The points are drawn first so the ring's white fill hides their bases.
 */
function drawCompassPageNumber(pdf: Pdf, cx: number, cy: number, page: number) {
  const ring = 4.2;
  const tip = ring + 2.3;
  const half = 1.15;
  pdf.setFillColor(...INK.accent);
  pdf.triangle(cx, cy - tip, cx - half, cy - ring + 0.5, cx + half, cy - ring + 0.5, "F");
  pdf.triangle(cx, cy + tip, cx - half, cy + ring - 0.5, cx + half, cy + ring - 0.5, "F");
  pdf.triangle(cx - tip, cy, cx - ring + 0.5, cy - half, cx - ring + 0.5, cy + half, "F");
  pdf.triangle(cx + tip, cy, cx + ring - 0.5, cy - half, cx + ring - 0.5, cy + half, "F");

  pdf.setDrawColor(...INK.accent);
  pdf.setLineWidth(0.45);
  pdf.setFillColor(255, 255, 255);
  pdf.circle(cx, cy, ring, "FD");

  pdf.setFont("helvetica", "bold").setFontSize(page > 99 ? 7 : 8.5);
  pdf.setTextColor(...INK.brand);
  pdf.text(String(page), cx, cy, { align: "center", baseline: "middle" });
}

/**
 * The company logo from site settings, as a PNG for the letterhead. Fetched
 * fresh at export time; the letterhead goes without it if it can't be had.
 */
async function loadLogo(): Promise<Uint8Array | null> {
  try {
    const { url } = (await (await fetch("/api/logo")).json()) as { url: string | null };
    if (!url) return null;
    const response = await fetch(url.replace("/image/upload/", "/image/upload/f_png,h_240/"));
    return response.ok ? new Uint8Array(await response.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

/**
 * Puts the page in its finished state, captures it, and puts it back the way
 * the reader left it.
 */
async function capturePage(
  domToForeignObjectSvg: typeof import("modern-screenshot").domToForeignObjectSvg
): Promise<Capture> {
  const root = document.body;
  const scrollY = window.scrollY;
  const undo: Array<() => void> = [];

  try {
    // Every reveal landed and the parts marked data-pdf-hide gone (.pdf-capture in globals.css).
    const html = document.documentElement;
    html.classList.add("pdf-capture");
    undo.push(() => html.classList.remove("pdf-capture"));

    // Collapsed itinerary days and FAQs can't be clicked open on paper.
    for (const details of document.querySelectorAll<HTMLDetailsElement>("main details:not([open])")) {
      details.open = true;
      undo.push(() => {
        details.open = false;
      });
    }

    // Sticky elements must sit where they are in the flow, not pinned to
    // wherever the reader had scrolled.
    window.scrollTo({ top: 0, behavior: "instant" });

    await loadImages(root);

    const rect = root.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.ceil(rect.height);
    const { boxes, links, marked } = measure(root, width);
    undo.push(() => {
      for (const element of marked) {
        element.removeAttribute(ONE_LINE);
        element.removeAttribute(ONE_ROW);
      }
    });

    const svg = await domToForeignObjectSvg(root, {
      width,
      height,
      backgroundColor: "#ffffff",
      // The library drops the root's own margins, which would leave <body>
      // with the browser's default 8px and shift the whole page right.
      style: { margin: "0" },
      filter: (node) => !(node instanceof Element) || !isLeftOut(node),
      onCloneEachNode: (cloned) => {
        clearRevealLeftovers(cloned);
        keepLines(cloned);
      },
    });
    return { svg, width, height, boxes, links };
  } finally {
    for (const step of undo.reverse()) step();
    window.scrollTo({ top: scrollY, behavior: "instant" });
  }
}

/**
 * Hidden parts (the header, footer, gallery and the rest marked data-pdf-hide)
 * are dropped from the capture rather than copied with their images, which
 * would cost time and memory for nothing. Fixed overlays (section nav,
 * floating buttons, this export's own progress screen) would otherwise land
 * on top of the first page.
 */
function isLeftOut(element: Element) {
  const { display, position } = getComputedStyle(element);
  // Only HTML: SVG <defs> can report display:none and still hold the
  // gradients a chart's shapes are filled with.
  return (display === "none" && element instanceof HTMLElement) || position === "fixed";
}

/**
 * The library clears each copy's inline style before applying the computed
 * one, but its loop skips properties as the list shrinks. A reveal the reader
 * hadn't scrolled to can then keep the opacity:0 the page parks it at, and
 * print blank although .pdf-capture shows it. Reveals, and itinerary or FAQ
 * panels that were closed at some point, are shown in full in the capture,
 * so their leftover inline values are dropped: opacity 1 and no transform
 * are the defaults, which the library never writes back.
 */
function clearRevealLeftovers(cloned: Node) {
  if (cloned instanceof HTMLElement && cloned.hasAttribute("data-reveal")) {
    cloned.style.removeProperty("opacity");
    cloned.style.removeProperty("transform");
  }
  if (cloned instanceof HTMLDetailsElement) {
    for (const panel of cloned.children) {
      if (panel instanceof HTMLDivElement) panel.style.removeProperty("opacity");
    }
  }
}

/** Set by measure on what lay on one line on screen, for keepLines. */
const ONE_LINE = "data-pdf-one-line";
/** Set by measure on a wrapping flex container whose items lay in one row on screen, for keepLines. */
const ONE_ROW = "data-pdf-one-row";

/**
 * The capture lays the page out again inside the SVG, at 100% zoom, with
 * every box held at the size it measured on screen. In a browser zoomed to
 * anything else, text and gaps come out a fraction of a pixel wider there
 * (glyph widths are hinted for the size they are drawn at, and lengths snap
 * to a 1/64px grid). A heading, label or row of chips sized to fit its
 * content then pushes its last word or chip onto a second line, which prints
 * over whatever follows. What lay on one line on screen keeps to one line in
 * the capture, overflowing by that fraction of a pixel instead.
 */
function keepLines(cloned: Node) {
  if (!(cloned instanceof HTMLElement)) return;
  if (cloned.hasAttribute(ONE_LINE)) cloned.style.setProperty("text-wrap-mode", "nowrap");
  if (cloned.hasAttribute(ONE_ROW)) cloned.style.setProperty("flex-wrap", "nowrap");
}

/** Lazy images below the fold haven't loaded yet: load the ones shown, waiting up to 15s. */
async function loadImages(root: HTMLElement) {
  const images = Array.from(root.querySelectorAll("img")).filter((image) => image.getClientRects().length > 0);
  for (const image of images) image.loading = "eager";
  await Promise.race([
    Promise.all(images.map((image) => image.decode().catch(() => undefined))),
    new Promise((resolve) => setTimeout(resolve, 15000)),
  ]);
}

/**
 * The vertical extent of every element and line of text, and every link, in
 * px from the top of the page — what page breaks are chosen around. Also
 * marks what lies on one line, and wrapping flex rows whose items lie in one
 * row, for keepLines, and returns the marked elements.
 */
function measure(root: HTMLElement, width: number) {
  const origin = root.getBoundingClientRect();
  const boxes: Box[] = [];
  const links: LinkBox[] = [];
  const marked: Element[] = [];
  // Each line of text and each image or icon, in page order, and the run of
  // them inside each element.
  const inline: DOMRect[] = [];
  const runs: Array<[element: Element, first: number, end: number]> = [];
  const range = document.createRange();

  const visit = (node: Node) => {
    if (node instanceof Text) {
      if (!node.data.trim()) return;
      range.selectNodeContents(node);
      for (const line of range.getClientRects()) {
        if (!line.height) continue;
        boxes.push({ top: line.top - origin.top, bottom: line.bottom - origin.top });
        inline.push(line);
      }
      return;
    }
    if (!(node instanceof Element) || isLeftOut(node)) return;

    const rect = node.getBoundingClientRect();
    if (rect.width && rect.height) {
      const top = rect.top - origin.top;
      boxes.push({ top, bottom: top + rect.height });
      // A heading stays on the same page as the start of what it introduces.
      if (/^H[1-4]$/.test(node.tagName)) {
        boxes.push({ top, bottom: top + rect.height + KEEP_WITH_HEADING });
      }

      const x = rect.left - origin.left;
      if (node instanceof HTMLAnchorElement && /^(https?|mailto|tel):/.test(node.href) && x < width && x + rect.width > 0) {
        links.push({ x, y: top, width: rect.width, height: rect.height, url: node.href });
      }
      if (node instanceof HTMLImageElement || node instanceof SVGSVGElement) inline.push(rect);
    }

    if (inOneRow(node)) {
      node.setAttribute(ONE_ROW, "");
      marked.push(node);
    }
    const first = inline.length;
    for (const child of node.childNodes) visit(child);
    runs.push([node, first, inline.length]);
  };
  for (const child of root.childNodes) visit(child);

  // Something starts a new line when it sits more than half its height above
  // or below the thing before it. breaks[i] counts the new lines up to inline[i].
  const breaks = [0];
  for (let i = 1; i < inline.length; i++) {
    const [before, after] = [inline[i - 1], inline[i]];
    const newLine = Math.abs(after.top - before.top) > Math.min(before.height, after.height) / 2;
    breaks.push(breaks[i - 1] + (newLine ? 1 : 0));
  }
  for (const [element, first, end] of runs) {
    if (end > first && breaks[end - 1] === breaks[first]) {
      element.setAttribute(ONE_LINE, "");
      marked.push(element);
    }
  }
  return { boxes, links, marked };
}

/** A wrapping flex row whose items all share one row: each overlaps the one before it vertically. */
function inOneRow(element: Element) {
  const { display, flexWrap, flexDirection } = getComputedStyle(element);
  if (!display.endsWith("flex") || flexWrap === "nowrap" || flexDirection.startsWith("column")) return false;
  const items = Array.from(element.children)
    .filter((item) => !isLeftOut(item) && getComputedStyle(item).position !== "absolute")
    .map((item) => item.getBoundingClientRect());
  return items.length > 1 && items.every((item, i) => i === 0 || (item.top < items[i - 1].bottom && items[i - 1].top < item.bottom));
}

/**
 * Where each PDF page begins. A page ends at the lowest point in its bottom
 * half that doesn't cut through anything — a line of text, an image, a card —
 * and is cut at the page edge only when no such point exists.
 */
function pageStarts(boxes: Box[], total: number, pageHeight: number): number[] {
  // Anything taller than this is cut wherever it falls: keeping it whole
  // would leave pages half empty.
  const solid = boxes.filter((box) => box.bottom - box.top < pageHeight * 0.4);
  const starts = [0];

  for (let top = 0; top + pageHeight < total; ) {
    const limit = top + pageHeight;
    const floor = top + pageHeight / 2;
    const nearby = solid.filter((box) => box.bottom > floor && box.top < limit);
    const ends = nearby
      .map((box) => box.bottom)
      .filter((y) => y <= limit)
      .sort((a, b) => b - a);
    const cut = ends.find((y) => !nearby.some((box) => box.top < y && y < box.bottom)) ?? limit;
    starts.push(cut);
    top = cut;
  }
  return starts;
}

async function loadSvg(svg: SVGElement): Promise<HTMLImageElement> {
  // Control characters make the SVG fail to parse (the same clean-up
  // modern-screenshot applies to its own output).
  const markup = new XMLSerializer()
    .serializeToString(svg)
    .replace(/[\u0000-\u0008\v\f\u000E-\u001F\uD800-\uDFFF￾￿]/gu, "");
  const image = new Image();
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
  await image.decode();
  return image;
}
