export type Category = "Suits" | "Blazers" | "Dinner Jackets" | "Waistcoats";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  /** Set when the piece is reduced; the original USD price. */
  compareAt?: number;
  description: string;
  image: string;
  category: Category;
  /** Shell cloth, printed on the detail table. */
  cloth: string;
  /** Front construction — how the jacket closes. */
  cut: string;
  sizes: string[];
  /** Out of 5, shown as the rule-and-number row on cards. */
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller?: boolean;
  topRated?: boolean;
  featured?: boolean;
  /** Units left, used by the limited-run progress bar. */
  stockLeft?: number;
  stockTotal?: number;
}

export const categories: Category[] = [
  "Suits",
  "Blazers",
  "Dinner Jackets",
  "Waistcoats",
];

const img = (slug: string) => `/mydriad/${slug}.jpg`;

const JACKET_SIZES = ["36R", "38R", "40R", "42R", "44R", "46R"];
const LONG_SIZES = ["38L", "40L", "42L", "44L", "46L"];
const VEST_SIZES = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  // ----------------------------------------------------------------- Suits
  {
    id: 1,
    name: "Charcoal Herringbone Two-Piece",
    slug: "charcoal-herringbone-suit",
    price: 38,
    category: "Suits",
    cloth: "Brushed herringbone, 280gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 64,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("charcoal-herringbone-suit"),
    description:
      "The suit the rest of the range is built around. A soft-shouldered charcoal herringbone with a half-canvas chest, side vents, and a trouser cut straight from the knee. The weave is dense enough to hold a crease through a full working day and dark enough to read as plain from three feet away. Half-lined through the body so it stays wearable in Lagos heat, with a hanging loop under the collar because the jacket will spend part of every day off your back.",
  },
  {
    id: 2,
    name: "Midnight Navy Slim Suit",
    slug: "midnight-navy-suit",
    price: 36,
    category: "Suits",
    cloth: "Twill worsted, 250gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 51,
    inStock: true,
    bestSeller: true,
    image: img("midnight-navy-suit"),
    description:
      "Navy cut close through the waist without pulling at the button. The lapel is narrowed to 7.5cm, the gorge sits high, and the trouser tapers to a 17cm hem so it breaks once and stops. This is the suit for the man who owns one suit and needs it to carry an interview on Monday and a wedding on Saturday without either occasion noticing it is the same jacket.",
  },
  {
    id: 3,
    name: "Graphite City Suit",
    slug: "graphite-city-suit",
    price: 34,
    compareAt: 42,
    category: "Suits",
    cloth: "Plain-weave worsted, 240gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 38,
    inStock: true,
    featured: true,
    stockLeft: 14,
    stockTotal: 60,
    image: img("graphite-city-suit"),
    description:
      "A mid-grey that photographs well and creases late. Cut with a slightly longer jacket than our navy, which suits taller frames and anyone who wears a jacket buttoned. Flat-front trousers with an extended tab closure, and a lining that stops at the hip so the skirt of the jacket falls clean without pulling across the seat.",
  },
  {
    id: 4,
    name: "Stone Grey Three-Piece",
    slug: "stone-grey-three-piece",
    price: 40,
    category: "Suits",
    cloth: "Sharkskin worsted, 270gsm",
    cut: "Single-breasted, matching waistcoat",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 44,
    inStock: true,
    topRated: true,
    image: img("stone-grey-three-piece"),
    description:
      "Jacket, trouser and a matching five-button waistcoat with an adjustable back strap. Sharkskin gives the cloth a faint two-tone shift that moves under light without ever tipping into shine. It sits at the top of our price band because it is three garments rather than two; worn as separates it quietly becomes four outfits.",
  },
  {
    id: 5,
    name: "Cobalt Tailored Suit",
    slug: "cobalt-tailored-suit",
    price: 35,
    category: "Suits",
    cloth: "Fine worsted, 245gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 29,
    inStock: true,
    image: img("cobalt-tailored-suit"),
    description:
      "A brighter blue than our navy, and deliberately so — this one is for reception season, for the occasions where disappearing into the room is not the point. Pick-stitched along the lapel edge, a working buttonhole at the top of the cuff, and a trouser cut with a little more room through the thigh so it moves.",
  },
  {
    id: 6,
    name: "Espresso Brown Suit",
    slug: "espresso-brown-suit",
    price: 37,
    category: "Suits",
    cloth: "Brushed twill, 265gsm",
    cut: "Single-breasted, three roll two",
    sizes: LONG_SIZES,
    rating: 5,
    reviews: 33,
    inStock: true,
    featured: true,
    image: img("espresso-brown-suit"),
    description:
      "Brown is the most underrated colour in menswear and this is the argument for it. A deep espresso twill with a soft nap, rolled from the third button down so the lapel line falls long and easy. Warmer against most skin tones than grey, and it agrees with the cream and tan shirts already in your wardrobe.",
  },
  {
    id: 7,
    name: "Ash Grey Soft Suit",
    slug: "ash-grey-suit",
    price: 33,
    category: "Suits",
    cloth: "Unstructured hopsack, 230gsm",
    cut: "Single-breasted, unpadded shoulder",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 26,
    inStock: true,
    image: img("ash-grey-suit"),
    description:
      "Our lightest suit: no shoulder pad, no chest canvas, no lining past the shoulder seam. The hopsack weave is open enough to move air and springy enough to shed a crease overnight on a hanger. Cut for the offices where a jacket is expected but a stiff one would look like it was trying too hard.",
  },
  {
    id: 8,
    name: "Oxford Black Suit",
    slug: "oxford-black-suit",
    price: 39,
    category: "Suits",
    cloth: "Dense worsted, 275gsm",
    cut: "Single-breasted, one button",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 57,
    inStock: true,
    topRated: true,
    image: img("oxford-black-suit"),
    description:
      "A proper black, dyed deep enough that it stays black under tungsten instead of drifting green. One button, clean chest, no pocket flaps. It is the suit for funerals, for formal invitations that stop short of black tie, and for anyone who wants a single jacket that no occasion can turn away.",
  },

  // --------------------------------------------------------------- Blazers
  {
    id: 9,
    name: "Camel Single-Breasted Blazer",
    slug: "camel-single-breasted-blazer",
    price: 30,
    category: "Blazers",
    cloth: "Wool-blend twill, 260gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 47,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: img("camel-single-breasted-blazer"),
    description:
      "Camel is the jacket that makes a plain shirt and a dark trouser look considered. Patch pockets at the hip with no flap, and a slightly cropped body so it sits well over a knit. The colour is warm rather than yellow, which matters more than it sounds — get that tone wrong and the whole thing reads as costume.",
  },
  {
    id: 10,
    name: "Saffron Statement Blazer",
    slug: "saffron-statement-blazer",
    price: 32,
    compareAt: 40,
    category: "Blazers",
    cloth: "Textured jacquard, 255gsm",
    cut: "Single-breasted, one button, peak lapel",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 21,
    inStock: true,
    stockLeft: 9,
    stockTotal: 45,
    image: img("saffron-statement-blazer"),
    description:
      "The loud one. A saffron jacquard with a self-coloured pattern that only shows when the light catches it, cut with a single closing button and a deep peak lapel. Wear it with black trousers and no tie. It is not a jacket that shares a room, which is why we cut it in short runs and let it sell out.",
  },
  {
    id: 11,
    name: "Sand Linen-Blend Blazer",
    slug: "sand-linen-blazer",
    price: 28,
    category: "Blazers",
    cloth: "Linen-cotton blend, 210gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 35,
    inStock: true,
    image: img("sand-linen-blazer"),
    description:
      "Cut fully unlined, with taped and bound seams so the inside is as finished as the outside. Linen creases — this one will, and it is meant to. What we control is the recovery: the cotton in the blend pulls the fibres back overnight, so it never looks slept in two days running.",
  },
  {
    id: 12,
    name: "Taupe Relaxed Blazer",
    slug: "taupe-relaxed-blazer",
    price: 29,
    category: "Blazers",
    cloth: "Soft-touch twill, 240gsm",
    cut: "Single-breasted, relaxed shoulder",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 24,
    inStock: true,
    image: img("taupe-relaxed-blazer"),
    description:
      "Cut a size looser than the rest of the range on purpose: dropped shoulder, wider armhole, longer body. It layers over a t-shirt without pulling and over a shirt without bulk. Taupe sits between grey and brown, which makes it the easiest jacket here to build a full week of outfits around.",
  },
  {
    id: 13,
    name: "Noir Oversized Blazer",
    slug: "noir-oversized-blazer",
    price: 31,
    category: "Blazers",
    cloth: "Matte gabardine, 250gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 39,
    inStock: true,
    bestSeller: true,
    image: img("noir-oversized-blazer"),
    description:
      "Black gabardine with a dead-matte finish and no visible topstitching anywhere on the shell. The volume sits in the body rather than the shoulder, so it hangs straight instead of flaring at the hip. This is the piece most often bought alongside our black suit and worn as a separate over denim.",
  },
  {
    id: 14,
    name: "Tobacco Check Blazer",
    slug: "tobacco-check-blazer",
    price: 30,
    category: "Blazers",
    cloth: "Windowpane check twill, 265gsm",
    cut: "Single-breasted, two button",
    sizes: JACKET_SIZES,
    rating: 4,
    reviews: 18,
    inStock: false,
    image: img("tobacco-check-blazer"),
    description:
      "A wide windowpane in tobacco over a slightly darker ground, matched at the pockets and across the back seam. Checks are where fast tailoring gives itself away, so this is the piece we cut slowest. Currently between runs while the cloth is rewoven — email us and we will tell you the week it returns.",
  },
  {
    id: 15,
    name: "Pewter Chalk-Stripe Blazer",
    slug: "pewter-pinstripe-blazer",
    price: 33,
    category: "Blazers",
    cloth: "Chalk-stripe worsted, 270gsm",
    cut: "Double-breasted, six on two",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 30,
    inStock: true,
    topRated: true,
    image: img("pewter-pinstripe-blazer"),
    description:
      "Double-breasted, six buttons showing and two fastening, with a peak lapel that runs almost to the shoulder seam. The stripe is chalky rather than crisp, which softens the whole effect considerably. Worn open it loses its line, so this one is cut on the assumption that you will do it up.",
  },

  // -------------------------------------------------------- Dinner Jackets
  {
    id: 16,
    name: "Black Satin-Lapel Tuxedo",
    slug: "black-satin-lapel-tuxedo",
    price: 40,
    category: "Dinner Jackets",
    cloth: "Barathea, satin facing, 280gsm",
    cut: "One button, peak lapel",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 42,
    inStock: true,
    topRated: true,
    featured: true,
    image: img("black-satin-lapel-tuxedo"),
    description:
      "Black tie done to the letter: barathea shell, satin-faced peak lapel, covered buttons, jetted pockets with no flaps, and a trouser carrying a single satin braid down the outseam. No vent at the back, because the rules on this particular garment are old and they happen to be right.",
  },
  {
    id: 17,
    name: "Shawl-Collar Dinner Jacket",
    slug: "shawl-collar-tuxedo",
    price: 38,
    category: "Dinner Jackets",
    cloth: "Barathea, grosgrain shawl, 275gsm",
    cut: "One button, shawl collar",
    sizes: JACKET_SIZES,
    rating: 5,
    reviews: 27,
    inStock: true,
    image: img("shawl-collar-tuxedo"),
    description:
      "The softer of the two black-tie options. An unbroken shawl collar faced in grosgrain rather than satin, which reads slightly less formal and considerably less shiny in photographs. Cut with a touch more room across the chest, for the men who actually intend to dance at the reception.",
  },
  {
    id: 18,
    name: "Midnight Bow-Tie Dinner Suit",
    slug: "midnight-bow-tie-tuxedo",
    price: 39,
    compareAt: 46,
    category: "Dinner Jackets",
    cloth: "Midnight barathea, 280gsm",
    cut: "One button, peak lapel",
    sizes: LONG_SIZES,
    rating: 5,
    reviews: 22,
    inStock: true,
    stockLeft: 11,
    stockTotal: 40,
    image: img("midnight-bow-tie-tuxedo"),
    description:
      "Midnight blue, which is the old tailor's trick — under artificial light it reads blacker than black and stops the jacket flattening into a silhouette. Supplied with a self-tie bow cut from the same cloth. If you have ever been photographed in black tie and simply vanished, this is the fix.",
  },

  // ------------------------------------------------------------ Waistcoats
  {
    id: 19,
    name: "Charcoal Tailored Waistcoat",
    slug: "charcoal-tailored-waistcoat",
    price: 20,
    category: "Waistcoats",
    cloth: "Worsted front, satin back, 250gsm",
    cut: "Five button, adjustable strap",
    sizes: VEST_SIZES,
    rating: 4,
    reviews: 36,
    inStock: true,
    bestSeller: true,
    image: img("charcoal-tailored-waistcoat"),
    description:
      "Worsted at the front, satin at the back, with a buckled strap so the fit can be pulled in as the season goes on. Five buttons with the lowest left undone, and a shallow V that works under both a tie and an open collar. The cheapest route into a three-piece look you already own most of.",
  },
  {
    id: 20,
    name: "Bronze Chain Waistcoat",
    slug: "bronze-chain-waistcoat",
    price: 24,
    category: "Waistcoats",
    cloth: "Textured jacquard, 260gsm",
    cut: "Six button, notched hem",
    sizes: VEST_SIZES,
    rating: 5,
    reviews: 19,
    inStock: true,
    featured: true,
    image: img("bronze-chain-waistcoat"),
    description:
      "A dressier waistcoat in a bronze-shot jacquard, cut with a notched hem and a working watch-chain buttonhole at the third position. Made to be seen: under an open black jacket it does more work than any pocket square ever has.",
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
/** Pieces with a stock countdown, used by the limited-run band. */
export const dealProducts = products.filter(
  (p) => p.stockLeft !== undefined && p.compareAt !== undefined
);
