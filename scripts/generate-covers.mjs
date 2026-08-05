/**
 * Generates the 20 book covers as standalone SVG files.
 *
 * Each cover is drawn from the Coquinate palette using one of five layout
 * templates, so the shelf reads as one imprint without any two jackets looking
 * alike. Run from the repo root: node covers.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = process.argv[2] ?? "public/coquinate/covers";
mkdirSync(OUT, { recursive: true });

// Palette — the reference's theme, secondary, title and sand values plus two
// deeper mixes so darker jackets are possible.
const P = {
  clay: "#D16655",
  clayDeep: "#A8483A",
  rose: "#BD7579",
  slate: "#2E4A5B",
  slateDeep: "#1E323E",
  sand: "#F3ECDC",
  blush: "#F8EBE5",
  cream: "#FBF6EE",
  ink: "#20303A",
  gold: "#C9A227",
  moss: "#5F7A63",
};

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Break a title into lines of at most `max` characters, on word boundaries. */
function wrap(title, max) {
  const words = title.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

const W = 600;
const H = 900;

/**
 * Title block, set to fit. The face is condensed enough that a character sits
 * near 0.60em wide including the tracking, so the size is derived from the
 * longest line rather than the line count — that is what keeps a 22-character
 * title inside the trim.
 */
function titleBlock({ title, author, color, sub, y, align = "middle", x = W / 2 }) {
  const MAX_W = align === "start" ? W - x - 56 : W - 112;
  const lines = wrap(title.toUpperCase(), 12);
  const longest = Math.max(...lines.map((l) => l.length));
  const size = Math.min(70, Math.floor(MAX_W / (longest * 0.68)));
  const step = size * 1.14;

  const rows = lines
    .map(
      (line, i) =>
        `<text x="${x}" y="${y + i * step}" text-anchor="${align}" font-family="Josefin Sans, Futura, Helvetica, sans-serif" font-size="${size}" font-weight="700" letter-spacing="1.5" fill="${color}">${esc(line)}</text>`
    )
    .join("\n    ");

  const ruleY = y + (lines.length - 1) * step + 40;
  const x1 = align === "start" ? x : x - 42;
  const x2 = align === "start" ? x + 84 : x + 42;

  return `${rows}
    <line x1="${x1}" y1="${ruleY}" x2="${x2}" y2="${ruleY}" stroke="${sub}" stroke-width="3"/>
    <text x="${x}" y="${ruleY + 42}" text-anchor="${align}" font-family="Poppins, Helvetica, sans-serif" font-size="24" letter-spacing="3.5" fill="${sub}">${esc(author.toUpperCase())}</text>`;
}

/**
 * Five jacket templates. Each returns the inner SVG for a 600×900 cover.
 * Every one keeps its artwork below y=530 so the title block above it never
 * collides, however many lines the title runs to.
 */
const TEMPLATES = {
  // Wide horizon band with a low sun.
  horizon: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <circle cx="${W / 2}" cy="660" r="130" fill="${accent}"/>
    <path d="M0 700 L150 630 L285 720 L425 640 L600 740 L600 900 L0 900 Z" fill="${fg}" opacity="0.88"/>
    ${titleBlock({ title, author, color: fg, sub, y: 170 })}`,

  // Tall arch window.
  arch: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M150 850 L150 700 A150 150 0 0 1 450 700 L450 850 Z" fill="${accent}"/>
    <path d="M205 850 L205 706 A95 95 0 0 1 395 706 L395 850 Z" fill="${bg}" opacity="0.32"/>
    <circle cx="${W / 2}" cy="706" r="40" fill="${fg}" opacity="0.7"/>
    ${titleBlock({ title, author, color: fg, sub, y: 170 })}`,

  // Diagonal split — the title sits on the accent field, so its colours are
  // chosen against the accent rather than the background.
  split: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M0 0 L${W} 0 L${W} 560 L0 700 Z" fill="${accent}"/>
    <path d="M0 745 L${W} 605 L${W} 665 L0 805 Z" fill="${fg}" opacity="0.26"/>
    ${titleBlock({ title, author, color: fg, sub, y: 170, align: "start", x: 62 })}`,

  // Concentric rings.
  rings: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    ${[215, 165, 115, 65]
      .map(
        (r, i) =>
          `<circle cx="${W / 2}" cy="690" r="${r}" fill="none" stroke="${i % 2 ? fg : accent}" stroke-width="${i % 2 ? 3 : 20}" opacity="${i % 2 ? 0.5 : 1}"/>`
      )
      .join("\n    ")}
    ${titleBlock({ title, author, color: fg, sub, y: 170 })}`,

  // Bar chart of stripes rising off the foot of the jacket.
  stripes: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    ${Array.from({ length: 9 })
      .map(
        (_, i) =>
          `<rect x="${58 + i * 60}" y="${610 + ((i * 37) % 90)}" width="26" height="${230 - ((i * 37) % 90)}" rx="13" fill="${i % 3 === 0 ? accent : fg}" opacity="${i % 3 === 0 ? 1 : 0.32}"/>`
      )
      .join("\n    ")}
    ${titleBlock({ title, author, color: fg, sub, y: 170 })}`,
};

// slug, title, author, template, colourway
const BOOKS = [
  ["levtimeline", "Levtimeline", "Vecuro Hale", "rings", { bg: P.slate, fg: P.sand, accent: P.clay, sub: P.rose }],
  ["tevely-entiamile", "Tevely Entiamile", "Bisi Ogun", "split", { bg: P.sand, fg: P.cream, accent: P.clay, sub: P.sand }],
  ["phobof-and-deimod", "Phobof and Deimod", "Ada Okonjo", "horizon", { bg: P.slateDeep, fg: P.sand, accent: P.clay, sub: P.rose }],
  ["rat-phnory-mttke", "Rat Phnory Mttke", "Lena Fournier", "stripes", { bg: P.blush, fg: P.slate, accent: P.rose, sub: P.clayDeep }],
  ["weive-mockchapu", "Weive Mockchapu", "Vecuro Hale", "arch", { bg: P.cream, fg: P.slate, accent: P.clay, sub: P.clayDeep }],
  ["fuarcnusk-preentine", "Fuarcnusk Preentine", "Imani Cole", "split", { bg: P.clay, fg: P.cream, accent: P.clayDeep, sub: P.sand }],
  ["robot-and-human", "Robot and Human", "Teni Adeoye", "rings", { bg: P.ink, fg: P.sand, accent: P.gold, sub: P.rose }],
  ["shadow-of-decenit", "Shadow of Decenit", "Marek Vaus", "horizon", { bg: P.slate, fg: P.cream, accent: P.rose, sub: P.sand }],
  ["see-mars", "See Mars", "Vecuro Hale", "rings", { bg: P.clayDeep, fg: P.cream, accent: P.gold, sub: P.sand }],
  ["science-fiction", "Science Fiction", "Joseph Martin", "stripes", { bg: P.slateDeep, fg: P.sand, accent: P.clay, sub: P.rose }],
  ["green-journey", "Green Journey", "Nia Bassey", "arch", { bg: P.moss, fg: P.cream, accent: P.sand, sub: P.sand }],
  ["l-art-du-subtiliste", "L Art Du Subtiliste", "Elise Marchand", "split", { bg: P.cream, fg: P.cream, accent: P.rose, sub: P.sand }],
  ["e-emeher-mme", "E Emeher Mme", "Chidi Nwosu", "horizon", { bg: P.sand, fg: P.slate, accent: P.clay, sub: P.clayDeep }],
  ["halcyon-drift", "Halcyon Drift", "Sena Adjei", "horizon", { bg: P.blush, fg: P.slate, accent: P.clay, sub: P.clayDeep }],
  ["the-quiet-cartographer", "The Quiet Cartographer", "Marta Rein", "arch", { bg: P.slate, fg: P.sand, accent: P.rose, sub: P.sand }],
  ["nine-doors-of-ulm", "Nine Doors of Ulm", "Joseph Martin", "arch", { bg: P.ink, fg: P.sand, accent: P.clay, sub: P.gold }],
  ["saltwater-almanac", "Saltwater Almanac", "Nia Bassey", "stripes", { bg: P.cream, fg: P.slate, accent: P.moss, sub: P.clayDeep }],
  ["the-lantern-verdict", "The Lantern Verdict", "Marek Vaus", "split", { bg: P.slateDeep, fg: P.slateDeep, accent: P.gold, sub: P.ink }],
  ["winterlight-passage", "Winterlight Passage", "Elise Marchand", "rings", { bg: P.sand, fg: P.slate, accent: P.rose, sub: P.clayDeep }],
  ["ashes-of-marivel", "Ashes of Marivel", "Imani Cole", "stripes", { bg: P.clay, fg: P.cream, accent: P.clayDeep, sub: P.sand }],
];

for (const [slug, title, author, template, colours] of BOOKS) {
  const inner = TEMPLATES[template]({ title, author, ...colours });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(title)} by ${esc(author)}">
    ${inner}
    <rect x="0" y="0" width="14" height="${H}" fill="#000" opacity="0.16"/>
  </svg>`;
  writeFileSync(join(OUT, `${slug}.svg`), svg.trim());
}

console.log(`wrote ${BOOKS.length} covers to ${OUT}`);
