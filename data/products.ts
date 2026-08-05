export type Category =
  | "Men's Formal"
  | "Men's Casual"
  | "Women's Heels"
  | "Women's Flats"
  | "Sneakers";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  /** Set when the pair is reduced; the original USD price. */
  compareAt?: number;
  description: string;
  image: string;
  category: Category;
  /** Upper material, printed on the detail table. */
  upper: string;
  /** Sole construction. */
  sole: string;
  /** Heel height, printed on the detail table. */
  heel: string;
  sizes: string[];
  /** Out of 5, shown as the star row on cards. */
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller?: boolean;
  topRated?: boolean;
  featured?: boolean;
  /** Units left, used by the deal-of-the-day progress bar. */
  stockLeft?: number;
  stockTotal?: number;
}

export const categories: Category[] = [
  "Men's Formal",
  "Men's Casual",
  "Women's Heels",
  "Women's Flats",
  "Sneakers",
];

const img = (slug: string) => `/crewsita/${slug}.jpg`;

const MEN_SIZES = ["40", "41", "42", "43", "44", "45", "46"];
const WOMEN_SIZES = ["36", "37", "38", "39", "40", "41"];
const UNISEX_SIZES = ["37", "38", "39", "40", "41", "42", "43", "44"];

export const products: Product[] = [
  // ---------------------------------------------------------- Men's Formal
  {
    id: 1,
    name: "Onyx Patent Derby",
    slug: "onyx-patent-derby",
    price: 38,
    category: "Men's Formal",
    upper: "Patent-finished calf leather",
    sole: "Cemented, rubber heel pad",
    heel: "25mm",
    sizes: MEN_SIZES,
    rating: 5,
    reviews: 71,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("onyx-patent-derby"),
    description:
      "The shoe you keep by the door for the occasions that give no warning. Open lacing means it opens wide enough to get into quickly and still pulls tight over a high instep, and the patent finish takes a wipe rather than a polish. The toe is a soft square — sharp enough for black tie, blunt enough not to look like costume in an office. Lined through the quarters so the collar keeps its shape after a long night standing.",
  },
  {
    id: 2,
    name: "Tan Grain Oxford",
    slug: "tan-grain-oxford",
    price: 36,
    category: "Men's Formal",
    upper: "Pebble-grain leather",
    sole: "Stitched rubber, stacked heel",
    heel: "28mm",
    sizes: MEN_SIZES,
    rating: 5,
    reviews: 58,
    inStock: true,
    bestSeller: true,
    image: img("tan-grain-oxford"),
    description:
      "Closed lacing, no brogueing, nothing to date it. The grain is the point: it hides the scuffs that a smooth calf shoe wears like a diary, so this pair still looks deliberate in month nine. Tan sits far enough from black to work with navy and grey both, and the stacked heel gives it a little height without any of the tilt. Comes with a spare set of waxed laces, because those go long before the shoe does.",
  },
  {
    id: 3,
    name: "Cognac Wingtip Brogue",
    slug: "cognac-wingtip-brogue",
    price: 39,
    compareAt: 48,
    category: "Men's Formal",
    upper: "Burnished leather, full wingtip perforation",
    sole: "Cemented rubber with tread",
    heel: "30mm",
    sizes: MEN_SIZES,
    rating: 5,
    reviews: 44,
    inStock: true,
    topRated: true,
    featured: true,
    stockLeft: 9,
    stockTotal: 40,
    image: img("cognac-wingtip-brogue"),
    description:
      "A full wingtip with the burnishing done by hand, so the toe and heel run darker than the waist and the shoe reads as older than it is. The perforation is decorative and sealed underneath — nothing gets through it in the rain. Treaded sole rather than a smooth leather one, which is the honest choice for Lagos pavements. This is the dress shoe for the man who walks part of his commute.",
  },
  {
    id: 4,
    name: "Jet Leather Monkstrap",
    slug: "jet-monkstrap",
    price: 37,
    category: "Men's Formal",
    upper: "Smooth box calf",
    sole: "Cemented rubber, chisel toe",
    heel: "25mm",
    sizes: MEN_SIZES,
    rating: 4,
    reviews: 33,
    inStock: true,
    image: img("jet-monkstrap"),
    description:
      "Single strap, antique-finish buckle, no laces to deal with at the door. The chisel toe keeps the profile long, and the black is a true black rather than the blue-black that gives itself away under office lighting. Because there is nothing to tie, the fit lives entirely in the strap — take a half size down if you are between sizes, and treat the second hole as your working setting.",
  },

  // ---------------------------------------------------------- Men's Casual
  {
    id: 5,
    name: "Espresso Suede Loafer",
    slug: "espresso-suede-loafer",
    price: 32,
    category: "Men's Casual",
    upper: "Brushed suede",
    sole: "Flexible rubber",
    heel: "20mm",
    sizes: MEN_SIZES,
    rating: 5,
    reviews: 62,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("espresso-suede-loafer"),
    description:
      "Slip-on, unlined through the vamp, soft from the first wear with none of the breaking-in that leather loafers demand. Dark brown suede is the most forgiving colour in a wardrobe — it goes with denim on Saturday and a linen trouser on Monday without either looking like a compromise. Brush it against the nap once a week and it stays even. Don't let it sit in the rain; that is the whole care instruction.",
  },
  {
    id: 6,
    name: "Sand Driving Moccasin",
    slug: "sand-driving-moccasin",
    price: 28,
    category: "Men's Casual",
    upper: "Soft nappa leather",
    sole: "Pebbled rubber pods",
    heel: "12mm",
    sizes: MEN_SIZES,
    rating: 4,
    reviews: 39,
    inStock: true,
    image: img("sand-driving-moccasin"),
    description:
      "Rubber pods run from the heel up over the back of the shoe, which is the detail that makes a driving shoe a driving shoe — it stops the heel wearing through against a pedal. Flat, light, and packable enough to go flat in a weekend bag. Sand is the colour to wear when everything else you have on is dark, and the hand-stitched apron seam across the toe will loosen slightly and then hold.",
  },
  {
    id: 7,
    name: "Walnut Chukka Boot",
    slug: "walnut-chukka-boot",
    price: 40,
    category: "Men's Casual",
    upper: "Oiled nubuck",
    sole: "Crepe-look rubber",
    heel: "25mm",
    sizes: MEN_SIZES,
    rating: 5,
    reviews: 47,
    inStock: true,
    topRated: true,
    image: img("walnut-chukka-boot"),
    description:
      "Two eyelets, ankle height, cut low enough at the collar that it never catches the ankle bone. The nubuck is oiled rather than dry, so water beads instead of soaking and the colour deepens where it creases. The crepe-look sole is the quiet one — no clack on tiled floors. The most useful shoe in the range if you only buy one: it carries a chino and it carries a suit trouser, and it looks better dusty.",
  },
  {
    id: 8,
    name: "Oxblood Penny Loafer",
    slug: "oxblood-penny-loafer",
    price: 34,
    compareAt: 42,
    category: "Men's Casual",
    upper: "Polished leather",
    sole: "Stitched rubber",
    heel: "22mm",
    sizes: MEN_SIZES,
    rating: 4,
    reviews: 28,
    inStock: true,
    stockLeft: 6,
    stockTotal: 30,
    image: img("oxblood-penny-loafer"),
    description:
      "The classic saddle strap with the slot cut through it, in a red-brown deep enough to pass as formal from across a room. Leather-lined so it moulds to the foot rather than sliding, which matters more in a slip-on than in anything laced. Wear it bare in the heat and with a fine ribbed sock in the office; it is the same shoe, and nobody has ever noticed the difference.",
  },

  // --------------------------------------------------------- Women's Heels
  {
    id: 9,
    name: "Noir Stiletto Pump",
    slug: "noir-stiletto-pump",
    price: 35,
    category: "Women's Heels",
    upper: "Matte microsuede",
    sole: "Cemented rubber with grip pad",
    heel: "90mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 84,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("noir-stiletto-pump"),
    description:
      "A 90mm heel set under the body rather than behind it, which is the difference between a pump you can stand in and one you photograph in. The topline is cut in a shallow V that lengthens the foot, and the vamp is high enough not to gap when you walk. Matte rather than patent, so it takes a mark and forgives it. Padded through the ball of the foot — not enough to change the line, enough to change the evening.",
  },
  {
    id: 10,
    name: "Caramel Block Heel",
    slug: "caramel-block-heel",
    price: 33,
    category: "Women's Heels",
    upper: "Smooth leather, ankle strap",
    sole: "Rubber-tipped block",
    heel: "70mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 66,
    inStock: true,
    bestSeller: true,
    image: img("caramel-block-heel"),
    description:
      "The heel is 70mm and square, so the weight sits over a footprint rather than a point — this is the pair for a full day, a long service, an outdoor reception where a stiletto would sink. The ankle strap fastens on a covered buckle with three holes, and the strap is soft enough not to bite. Caramel reads as a neutral against brown, cream, olive and denim, which covers most of a working wardrobe.",
  },
  {
    id: 11,
    name: "Gilded Evening Heel",
    slug: "gilded-evening-heel",
    price: 40,
    compareAt: 50,
    category: "Women's Heels",
    upper: "Metallic-finish strappy upper",
    sole: "Cemented rubber",
    heel: "85mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 51,
    inStock: true,
    topRated: true,
    featured: true,
    stockLeft: 4,
    stockTotal: 25,
    image: img("gilded-evening-heel"),
    description:
      "Thin gold straps over the toes and around the ankle, with a floral cut worked into the vamp panel. Made for weddings and dinners and the two hours of standing that come before either. The metallic finish is bonded rather than sprayed, so it does not flake at the flex point the way cheap gold shoes do. Sold with a small tin of the same finish for touching up the heel tip after a season.",
  },
  {
    id: 12,
    name: "Blush Pointed Pump",
    slug: "blush-pointed-pump",
    price: 31,
    category: "Women's Heels",
    upper: "Soft grain leather",
    sole: "Cemented rubber",
    heel: "75mm",
    sizes: WOMEN_SIZES,
    rating: 4,
    reviews: 37,
    inStock: true,
    image: img("blush-pointed-pump"),
    description:
      "A pointed toe cut long, in a dusty pink that behaves like a neutral rather than a colour. The point is a true point, but the toe box is built with room behind it — so the shape is in the shoe and not in your toes. Slim covered heel at 75mm. This is the pair that quietly lifts a plain black dress or a grey suit without ever being the thing anyone comments on first.",
  },

  // --------------------------------------------------------- Women's Flats
  {
    id: 13,
    name: "Almond Leather Loafer",
    slug: "almond-leather-loafer",
    price: 30,
    category: "Women's Flats",
    upper: "Smooth leather with snaffle trim",
    sole: "Flexible rubber",
    heel: "18mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 73,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("almond-leather-loafer"),
    description:
      "A flat loafer with a low stacked heel and a metal snaffle across the vamp. Cut with a slightly squared toe, which is the shape that keeps a flat from looking like school uniform. Leather-lined and softly padded under the arch, so it holds up to a day of walking between meetings. Almond is the most useful colour we make it in — it warms up black and it disappears against a bare leg.",
  },
  {
    id: 14,
    name: "Oat Soft Moccasin",
    slug: "oat-soft-mocassin",
    price: 26,
    category: "Women's Flats",
    upper: "Unlined suede",
    sole: "Thin rubber",
    heel: "10mm",
    sizes: WOMEN_SIZES,
    rating: 4,
    reviews: 41,
    inStock: true,
    image: img("oat-soft-mocassin"),
    description:
      "Almost no structure to it — a suede upper, a thin sole, a seam around the toe and nothing else. It folds flat in a bag, which is the point: this is the pair that lives under the desk or in the car for when the heels come off. Sizing runs true, but the suede gives about a half size in the first fortnight, so buy your usual and let it settle rather than sizing up.",
  },
  {
    id: 15,
    name: "Monochrome Tassel Flat",
    slug: "monochrome-tassel-flat",
    price: 29,
    compareAt: 36,
    category: "Women's Flats",
    upper: "Two-tone leather with tassel",
    sole: "Stitched rubber",
    heel: "20mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 35,
    inStock: true,
    stockLeft: 7,
    stockTotal: 32,
    image: img("monochrome-tassel-flat"),
    description:
      "Black and white split across the vamp with a leather tassel sitting over the join. A borrowed-from-menswear shape done on a narrower last, so it reads sharp rather than borrowed. The two-tone does the work of a pattern without being one, which means it survives contact with a printed dress. Wipe the white panel with a damp cloth the same evening and it stays white.",
  },
  {
    id: 16,
    name: "Rosewater Slip-On",
    slug: "rosewater-slip-on",
    price: 24,
    category: "Women's Flats",
    upper: "Knit textile",
    sole: "Foam-cushioned rubber",
    heel: "15mm",
    sizes: WOMEN_SIZES,
    rating: 4,
    reviews: 48,
    inStock: false,
    image: img("rosewater-slip-on"),
    description:
      "A knitted upper with an elasticated collar, so it goes on without hands and does not rub anywhere, because there are no seams to rub. The footbed is foam rather than leather — the trade is that it is the most comfortable thing in the range and the least formal. Machine washable on cold, air dried. Currently between runs; the next batch is cut in the same three colours.",
  },

  // -------------------------------------------------------------- Sneakers
  {
    id: 17,
    name: "Street White Sneaker",
    slug: "street-white-sneaker",
    price: 34,
    category: "Sneakers",
    upper: "Coated leather",
    sole: "Vulcanised rubber cup",
    heel: "25mm",
    sizes: UNISEX_SIZES,
    rating: 5,
    reviews: 96,
    inStock: true,
    bestSeller: true,
    topRated: true,
    featured: true,
    image: img("street-white-sneaker"),
    description:
      "The plain white trainer, made without a logo on it anywhere. Coated leather rather than bare, which means a wet cloth takes off what a week in the city puts on. The cup sole is stitched as well as bonded at the toe — the seam that usually goes first. Cut on a unisex last in whole sizes only; if you are between, take the larger and use the tongue to close the gap.",
  },
  {
    id: 18,
    name: "Canvas Court Trainer",
    slug: "canvas-court-trainer",
    price: 22,
    category: "Sneakers",
    upper: "Heavy cotton canvas",
    sole: "Vulcanised rubber",
    heel: "20mm",
    sizes: UNISEX_SIZES,
    rating: 4,
    reviews: 54,
    inStock: true,
    image: img("canvas-court-trainer"),
    description:
      "Twelve-ounce canvas over a rubber cup sole, seven eyelets, a toe bumper and nothing more. The cheapest pair we sell and the one that gets worn out fastest, which is exactly what it is for. Canvas breathes in the heat in a way no leather sneaker manages. Wash it by hand, never in a machine — the vulcanised bond is the first thing a hot cycle kills.",
  },
  {
    id: 19,
    name: "Shadow Black Runner",
    slug: "shadow-black-runner",
    price: 37,
    compareAt: 45,
    category: "Sneakers",
    upper: "Engineered mesh, welded overlays",
    sole: "Foam midsole, rubber outsole",
    heel: "30mm",
    sizes: UNISEX_SIZES,
    rating: 5,
    reviews: 68,
    inStock: true,
    topRated: true,
    stockLeft: 11,
    stockTotal: 45,
    image: img("shadow-black-runner"),
    description:
      "All-black mesh with the overlays welded rather than stitched, so there is nothing to fray and nothing to press on the top of the foot. The midsole is a compression foam with a 30mm stack at the heel and a real drop toward the toe, which makes it a walking shoe as much as a running one. Black on black passes at a workplace with a relaxed dress code, which is most of the reason people buy it.",
  },
  {
    id: 20,
    name: "Pearl Lace Sneaker",
    slug: "pearl-lace-sneaker",
    price: 32,
    category: "Sneakers",
    upper: "Textured leather, embroidered panel",
    sole: "Cushioned rubber",
    heel: "28mm",
    sizes: WOMEN_SIZES,
    rating: 5,
    reviews: 43,
    inStock: true,
    featured: true,
    image: img("pearl-lace-sneaker"),
    description:
      "An off-white leather trainer with a small embroidered panel worked into the side quarter — the only decorated shoe in the range, and deliberately the only one. Built on the women's last, so it is narrower through the heel than the unisex pairs and does not slip at the back. Cushioned through the whole footbed rather than just under the heel. Cream laces fitted, white spares in the box.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function byCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

export const bestSellers = products.filter((p) => p.bestSeller);
export const topRated = products.filter((p) => p.topRated);
export const featured = products.filter((p) => p.featured);
export const onSale = products.filter((p) => p.compareAt !== undefined);
/** Pairs with a stock countdown, used by the deal-of-the-day band. */
export const dealProducts = products.filter(
  (p) => p.stockLeft !== undefined && p.compareAt !== undefined
);
