/**
 * Generates the alcopip book covers as standalone SVG files.
 *
 * Six layout templates drawn from the alcopip palette (wine, gold, moss,
 * ink, sand, cream, paper), assigned by category so the shelf reads as one
 * imprint with a distinct look per genre. Run from the repo root:
 *   node scripts/generate-covers.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "products");
mkdirSync(OUT, { recursive: true });

const P = {
  wine: "#7C1F2E",
  wineDark: "#59141F",
  wineLight: "#A83E4C",
  gold: "#B9902F",
  goldPale: "#F3E6C4",
  moss: "#4B6B4F",
  ink: "#241A16",
  sand: "#EFE1C8",
  cream: "#F7EFE1",
  paper: "#FFFFFF",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

function titleBlock({ title, author, color, sub, y, align = "middle", x = W / 2, max = 15 }) {
  const lines = wrap(title, max);
  const longest = Math.max(...lines.map((l) => l.length));
  const size = Math.min(58, Math.floor((W - 100) / (longest * 0.56)));
  const step = size * 1.18;

  const rows = lines
    .map(
      (line, i) =>
        `<text x="${x}" y="${y + i * step}" text-anchor="${align}" font-family="${SERIF}" font-size="${size}" font-weight="700" fill="${color}">${esc(line)}</text>`
    )
    .join("\n    ");

  const ruleY = y + (lines.length - 1) * step + 34;
  const x1 = align === "start" ? x : x - 40;
  const x2 = align === "start" ? x + 80 : x + 40;

  return `${rows}
    <line x1="${x1}" y1="${ruleY}" x2="${x2}" y2="${ruleY}" stroke="${sub}" stroke-width="2"/>
    <text x="${x}" y="${ruleY + 34}" text-anchor="${align}" font-family="${SANS}" font-size="18" letter-spacing="2.5" fill="${sub}">${esc(author.toUpperCase())}</text>`;
}

const TEMPLATES = {
  // Full-bleed solid field, title lower-third, thin gold corner rule.
  solid: ({ title, author, bg, fg, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="36" y="36" width="${W - 72}" height="${H - 72}" fill="none" stroke="${sub}" stroke-width="1.5" opacity="0.5"/>
    ${titleBlock({ title, author, color: fg, sub, y: 560, max: 14 })}`,

  // Horizon split: two color bands meeting at a diagonal.
  horizon: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <path d="M0 560 L600 480 L600 900 L0 900 Z" fill="${accent}"/>
    ${titleBlock({ title, author, color: fg, sub, y: 200, max: 13 })}`,

  // Centered emblem: circle + title stacked beneath it, literary feel.
  emblem: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <circle cx="${W / 2}" cy="230" r="70" fill="none" stroke="${accent}" stroke-width="3"/>
    <circle cx="${W / 2}" cy="230" r="46" fill="${accent}" opacity="0.85"/>
    ${titleBlock({ title, author, color: fg, sub, y: 420, max: 14 })}`,

  // Vertical spine stripe down one side, title set beside it.
  spine: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="0" y="0" width="64" height="${H}" fill="${accent}"/>
    <rect x="64" y="0" width="10" height="${H}" fill="${sub}" opacity="0.4"/>
    ${titleBlock({ title, author, color: fg, sub, y: 300, align: "start", x: 120, max: 12 })}`,

  // Framed inset panel, editorial memoir feel.
  frame: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="70" y="90" width="${W - 140}" height="${H - 180}" fill="none" stroke="${accent}" stroke-width="4"/>
    <rect x="90" y="110" width="${W - 180}" height="${H - 220}" fill="none" stroke="${accent}" stroke-width="1" opacity="0.6"/>
    ${titleBlock({ title, author, color: fg, sub, y: 470, max: 14 })}`,

  // Kitchen linework: simple utensil motif for cookery titles.
  kitchen: ({ title, author, bg, fg, accent, sub }) => `
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <g stroke="${accent}" stroke-width="6" fill="none" stroke-linecap="round">
      <line x1="230" y1="140" x2="230" y2="280" />
      <line x1="215" y1="140" x2="215" y2="200" />
      <line x1="230" y1="140" x2="230" y2="200" />
      <line x1="245" y1="140" x2="245" y2="200" />
      <path d="M370 140 C 400 140 400 200 370 220 L370 280" />
    </g>
    ${titleBlock({ title, author, color: fg, sub, y: 420, max: 14 })}`,
};

const CATEGORY_STYLE = {
  "Fiction & Novels": {
    templates: ["solid", "horizon", "emblem", "spine"],
    combos: [
      { bg: P.wineDark, fg: P.goldPale, accent: P.gold, sub: P.gold },
      { bg: P.ink, fg: P.cream, accent: P.wineLight, sub: P.wineLight },
      { bg: P.sand, fg: P.wineDark, accent: P.wine, sub: P.wine },
    ],
  },
  "Mystery & Thriller": {
    templates: ["spine", "solid", "frame"],
    combos: [
      { bg: P.ink, fg: P.gold, accent: P.wine, sub: P.gold },
      { bg: P.wineDark, fg: P.cream, accent: P.ink, sub: P.gold },
    ],
  },
  Drama: {
    templates: ["frame", "horizon", "emblem"],
    combos: [
      { bg: P.sand, fg: P.ink, accent: P.wineLight, sub: P.wine },
      { bg: P.cream, fg: P.wineDark, accent: P.gold, sub: P.wine },
    ],
  },
  "Cookery & Recipe Books": {
    templates: ["kitchen", "frame"],
    combos: [
      { bg: P.cream, fg: P.wineDark, accent: P.wine, sub: P.gold },
      { bg: P.goldPale, fg: P.ink, accent: P.wine, sub: P.wineDark },
    ],
  },
  "Memoir & Lifestyle": {
    templates: ["frame", "solid", "horizon"],
    combos: [
      { bg: P.paper, fg: P.ink, accent: P.wine, sub: P.gold },
      { bg: P.wineLight, fg: P.cream, accent: P.ink, sub: P.goldPale },
    ],
  },
};

function pick(arr, seed) {
  return arr[seed % arr.length];
}

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

// [slug, title, author, category] — mirrors data/products.ts exactly.
const BOOKS = [
  ["new-galaxy", "New Galaxy", "Richard Mann", "Fiction & Novels"],
  ["the-long-road-to-the-deep-silence", "The Long Road to the Deep Silence", "Richard Mann", "Fiction & Novels"],
  ["its-a-really-strange-story", "It's a Really Strange Story", "Burt Geller", "Fiction & Novels"],
  ["let-the-sun-shine", "Let the Sun Shine", "Richard Mann", "Fiction & Novels"],
  ["a-banquet-of-mouse", "A Banquet of Mouse", "Richard Mann", "Fiction & Novels"],
  ["the-quiet-ledger", "The Quiet Ledger", "Nora Bellweather", "Fiction & Novels"],
  ["salt-and-static", "Salt and Static", "Owen Marsh", "Fiction & Novels"],

  ["the-forest", "The Forest", "Karen Perry", "Mystery & Thriller"],
  ["the-strings-of-murders", "The Strings of Murders", "Linda Hamilton", "Mystery & Thriller"],
  ["the-hour-before-rain", "The Hour Before Rain", "Karen Perry", "Mystery & Thriller"],
  ["a-ledger-of-lies", "A Ledger of Lies", "Simon Cole", "Mystery & Thriller"],
  ["the-cartographers-wife", "The Cartographer's Wife", "Diane Cooper", "Mystery & Thriller"],
  ["nine-doors-on-elm-street", "Nine Doors on Elm Street", "Frank Delgado", "Mystery & Thriller"],

  ["the-son", "The Son", "Burt Geller", "Drama"],
  ["lonely-man-in-white-hat", "Lonely Man in White Hat", "Burt Geller", "Drama"],
  ["the-shed", "The Shed", "Jessica Ford", "Drama"],
  ["where-the-orchard-ends", "Where the Orchard Ends", "Theresa Yates", "Drama"],
  ["a-house-with-two-doors", "A House With Two Doors", "Miles Whitfield", "Drama"],
  ["the-weight-of-small-rooms", "The Weight of Small Rooms", "Grace Okonkwo", "Drama"],

  ["the-sunday-kitchen", "The Sunday Kitchen", "Priya Anand", "Cookery & Recipe Books"],
  ["roots-grain-and-fire", "Roots, Grain and Fire", "Daniel Ruiz", "Cookery & Recipe Books"],
  ["a-table-for-slow-mornings", "A Table for Slow Mornings", "Priya Anand", "Cookery & Recipe Books"],
  ["the-coastal-larder", "The Coastal Larder", "Theresa Yates", "Cookery & Recipe Books"],
  ["spice-route-suppers", "Spice Route Suppers", "Priya Anand", "Cookery & Recipe Books"],
  ["bread-butter-repeat", "Bread, Butter, Repeat", "Daniel Ruiz", "Cookery & Recipe Books"],

  ["a-doctor-in-the-house", "A Doctor in the House", "Candy Carson", "Memoir & Lifestyle"],
  ["life-in-the-garden", "Life in the Garden", "Candy Carson", "Memoir & Lifestyle"],
  ["the-story-about-me", "The Story About Me", "Carol Foster", "Memoir & Lifestyle"],
  ["design-of-the-20th-century", "Design of the 20th Century", "Carol Foster", "Memoir & Lifestyle"],
  ["notes-from-a-slower-year", "Notes from a Slower Year", "Nora Bellweather", "Memoir & Lifestyle"],
];

for (const [slug, title, author, category] of BOOKS) {
  const style = CATEGORY_STYLE[category];
  const seed = hash(slug);
  const templateName = pick(style.templates, seed);
  const combo = pick(style.combos, Math.floor(seed / 7));
  const svgBody = TEMPLATES[templateName]({ title, author, ...combo });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)} by ${esc(author)}">
    ${svgBody}
    <rect x="0" y="0" width="12" height="${H}" fill="#000" opacity="0.14"/>
  </svg>`;
  writeFileSync(join(OUT, `${slug}.svg`), svg.trim(), "utf8");
}

console.log(`Generated ${BOOKS.length} covers in ${OUT}`);
