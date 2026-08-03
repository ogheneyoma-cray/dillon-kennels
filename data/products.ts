export type Category =
  | "Tops"
  | "Bottoms"
  | "Dresses & Skirts"
  | "Outerwear"
  | "Footwear";

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
  fabric: string;
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
  "Tops",
  "Bottoms",
  "Dresses & Skirts",
  "Outerwear",
  "Footwear",
];

const img = (slug: string) => `/adomattic/${slug}.jpg`;

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL"];
const DENIM_SIZES = ["24", "26", "28", "30", "32", "34"];
const SHOE_SIZES = ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42"];

export const products: Product[] = [
  // ------------------------------------------------------------------ Tops
  {
    id: 1,
    name: "Sun-Faded Graphic Tee",
    slug: "sun-faded-graphic-tee",
    price: 24,
    category: "Tops",
    fabric: "Garment-dyed cotton",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 42,
    inStock: true,
    bestSeller: true,
    image: img("sun-faded-graphic-tee"),
    description:
      "A graphic tee that arrives already looking like you have owned it two years, because the whole garment is dyed after it is sewn rather than cut from pre-dyed cloth. Garment dyeing is what gives the seams and the neckband their slightly deeper tone and the body its soft, uneven fade, and it is the reason vintage tees look the way they do. The artwork is printed with a water-based ink that sinks into the cotton instead of sitting on it as a plastic layer, so there is no stiff panel across the chest and nothing to crack when the tee is folded into the bottom of a school bag. The body is cut boxy with a dropped shoulder and a slightly shorter length, which is how this generation actually wears a tee. Machine wash cold inside out, hang or tumble low. It will keep fading, gently, and that is the point.",
  },
  {
    id: 2,
    name: "Neon Oversized Sweatshirt",
    slug: "neon-oversized-sweatshirt",
    price: 34,
    compareAt: 42,
    category: "Tops",
    fabric: "Brushed cotton fleece",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 28,
    inStock: true,
    featured: true,
    stockLeft: 18,
    stockTotal: 60,
    image: img("neon-oversized-sweatshirt"),
    description:
      "A deliberately loud sweatshirt in a highlighter green that took three dye trials to get right — fluorescent pigments sit on the surface of cotton rather than bonding into it, so most bright colours on the high street wash down to a sad lime within a season. Ours is a reactive dye pushed to the top of its range, which is as bright as cotton can honestly go and will actually stay there. The body is cut properly oversized: dropped shoulders, a wide sleeve, a cropped hem and a ribbed neck that holds. The inside is brushed to a soft nap and the outside left smooth, so it does not pill against a backpack strap within a month. Machine wash cool inside out, tumble low, and keep it away from anything white for the first two washes.",
  },
  {
    id: 3,
    name: "Everyday Cotton Tee",
    slug: "everyday-cotton-tee",
    price: 20,
    category: "Tops",
    fabric: "Combed cotton jersey",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 96,
    inStock: true,
    bestSeller: true,
    topRated: true,
    image: img("everyday-cotton-tee"),
    description:
      "The plain white tee, done at the weight it needs to be. Most tees at this price are a 140gsm jersey, which is the reason they go translucent after a wash and cling in a way nobody enjoys; this one is a 190gsm combed cotton, opaque and substantial without being heavy. Combing the cotton before spinning removes the short fibres, which is what stops a tee going fuzzy at the shoulders. The neck is a 1x1 rib, twin-needled and taped shoulder to shoulder so it cannot stretch into a hoop. Side seams are real seams, so it hangs straight instead of spiralling round the body. It is cut straight with a regular shoulder — the piece to layer under everything else in the shop. Machine wash warm, tumble low, wear constantly.",
  },
  {
    id: 4,
    name: "Ribbed Knit Cami",
    slug: "ribbed-knit-cami",
    price: 22,
    category: "Tops",
    fabric: "Ribbed cotton-modal",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 34,
    inStock: true,
    image: img("ribbed-knit-cami"),
    description:
      "A fine-gauge ribbed cami in a cotton-modal blend, cut close but not tight, with adjustable straps that stay where you set them because the slider is a flat metal one rather than the plastic kind that creeps. The rib is knitted at a fine gauge, so it holds its shape across the body instead of gaping between ribs when it stretches — the single thing that separates a cami you keep from one you wear twice. Modal in the blend does two jobs: it gives the fabric a soft, slightly cool hand and it stops the cotton going shapeless at the strap after repeated washing. The neckline and armholes are finished with a self-fabric binding rather than an elastic, so nothing digs in. It layers under everything and works on its own. Machine wash cool in a bag, dry flat.",
  },
  {
    id: 5,
    name: "Skate Graphic Tee",
    slug: "skate-graphic-tee",
    price: 25,
    category: "Tops",
    fabric: "Heavyweight cotton",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 51,
    inStock: true,
    image: img("skate-graphic-tee"),
    description:
      "Cut on a heavier cotton than our everyday tee and shaped wider through the body, this is the tee built to be worn over a long sleeve and under a jacket without adding a lump at the waist. The cloth is a 220gsm single jersey with a slightly dry hand, so it drapes away from the body rather than following it. The chest graphic is screen printed in two passes with a discharge base, meaning the black ground is removed before the colour goes down; it costs more and it is the only way to get a bright print on a dark tee that stays soft. The neck rib is deep and heavily twin-needled, because a heavy tee will pull its own collar out of shape otherwise. Machine wash cold inside out, tumble dry low, and do not iron the print directly.",
  },

  // --------------------------------------------------------------- Bottoms
  {
    id: 6,
    name: "Light Wash Straight Jeans",
    slug: "light-wash-straight-jeans",
    price: 38,
    category: "Bottoms",
    fabric: "12oz cotton denim",
    sizes: DENIM_SIZES,
    rating: 5,
    reviews: 63,
    inStock: true,
    bestSeller: true,
    topRated: true,
    image: img("light-wash-straight-jeans"),
    description:
      "A straight-leg jean in a real 12oz denim with only a trace of elastane — just enough to move, not enough to bag out at the knee by lunchtime, which is what happens to the 2% stretch jeans sold everywhere. The light wash is done with stones and enzymes rather than printed whiskers, so the fade sits where a leg actually creases and will keep developing rather than staying frozen at the pattern someone drew in a factory. The rise is mid, the leg is cut straight from the knee with no taper, and the hem is wide enough to sit over a high-top without bunching. Hardware is solid, the rivets are burr-set, and the back pockets are placed to actually flatter rather than by template. Wash cold, inside out, sparingly. Denim improves when you leave it alone.",
  },
  {
    id: 7,
    name: "High-Rise Mom Jeans",
    slug: "high-rise-mom-jeans",
    price: 39,
    category: "Bottoms",
    fabric: "Rigid cotton denim",
    sizes: DENIM_SIZES,
    rating: 5,
    reviews: 77,
    inStock: true,
    bestSeller: true,
    image: img("high-rise-mom-jeans"),
    description:
      "Rigid denim, no stretch at all, cut high on the natural waist with a relaxed hip and a leg that tapers gently to the ankle. Rigid is a commitment — the first few wears are stiffer than a stretch jean — but it is the only construction that holds a shape through the day instead of slowly relaxing two sizes by evening, and it is why this cut has outlasted every trend attached to it. The waistband is faced with the same denim rather than a lighter lining, so it will not roll over when you sit. There are proper deep front pockets, a button fly, and a hem finished with a chainstitch, which is what produces the roping fade along the cuff after a year. Wash cold and inside out, hang dry. Expect a small amount of shrink on the first wash and then nothing.",
  },
  {
    id: 8,
    name: "Slim Stretch Jeans",
    slug: "slim-stretch-jeans",
    price: 36,
    category: "Bottoms",
    fabric: "Stretch cotton denim",
    sizes: DENIM_SIZES,
    rating: 4,
    reviews: 38,
    inStock: true,
    image: img("slim-stretch-jeans"),
    description:
      "The jean for people who spend the day moving, cut slim through the thigh and calf in a denim with a genuine recovery yarn rather than plain elastane. The difference matters and is easy to feel: plain elastane stretches and stays stretched, so the knees bag; a recovery yarn springs back, so the jean looks the same at six in the evening as it did at eight in the morning. The rise sits just below the natural waist, the leg tapers to a clean ankle opening, and the back yoke is deep enough to stop the waistband gaping when you crouch. Belt loops are wide and bar-tacked at both ends. Machine wash cold inside out on a normal cycle and hang dry — heat is what destroys the recovery yarn, so keep them out of the dryer.",
  },
  {
    id: 9,
    name: "Relaxed Cargo Trousers",
    slug: "relaxed-cargo-trousers",
    price: 34,
    category: "Bottoms",
    fabric: "Cotton ripstop",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 45,
    inStock: true,
    featured: true,
    image: img("relaxed-cargo-trousers"),
    description:
      "Wide-leg cargos in a cotton ripstop — a weave with a reinforcing grid running through it that stops a small tear becoming a large one, which is the entire reason the fabric exists. The leg is cut full from the hip and gathered into an elasticated hem you can leave loose or pull in. There are six pockets and all six work: two slant fronts, two bellowed thigh pockets with flap closures, and two welted backs. The thigh pockets are bellowed rather than flat-patched, meaning they expand when filled instead of pulling the leg out of line. The waist has a webbing belt threaded through wide loops and an internal drawcord. Machine wash warm, tumble dry low. Ripstop softens noticeably after five or six washes and then stays put.",
  },

  // ------------------------------------------------------- Dresses & Skirts
  {
    id: 10,
    name: "Rugby Stripe Knit Dress",
    slug: "rugby-stripe-knit-dress",
    price: 37,
    category: "Dresses & Skirts",
    fabric: "Cotton knit",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 31,
    inStock: true,
    topRated: true,
    image: img("rugby-stripe-knit-dress"),
    description:
      "A knitted dress in wide rugby stripes, cut long and easy with a slight A-line from the hip so it moves without clinging. The stripes are knitted in rather than printed, which means they are identical on both faces of the cloth and cannot fade off the surface — worth checking on any striped knit before you buy it. The gauge is mid-weight, heavy enough to hang properly and hold a hem, light enough to wear over a long sleeve in December and on its own in March. The neckline is a plain crew finished with a self rib, and the sleeves are set slightly dropped. There are no pockets, deliberately, because a pocket in a knit dress pulls it out of shape within a month. Machine wash cool, dry flat rather than hanging — a wet knit hung on a hanger will grow two inches.",
  },
  {
    id: 11,
    name: "Varsity Stripe Polo Dress",
    slug: "varsity-stripe-polo-dress",
    price: 33,
    compareAt: 40,
    category: "Dresses & Skirts",
    fabric: "Cotton piqué",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 22,
    inStock: true,
    stockLeft: 9,
    stockTotal: 45,
    image: img("varsity-stripe-polo-dress"),
    description:
      "A short polo dress in a cotton piqué, striped across the chest and the sleeve in a proper varsity treatment. Piqué is a textured knit with a fine waffle structure, and it is the traditional polo cloth for a good reason: the texture holds air, so it breathes far better than a flat jersey, and it resists creasing. The collar and the placket are knitted separately and attached, not cut from the body fabric, which is what keeps a polo collar standing rather than curling after a wash. Three buttons, a curved hem sitting slightly lower at the back, and a straight body with a small amount of ease. It works with trainers and it works with boots. Machine wash warm, tumble dry low, and the collar will keep its shape for years.",
  },
  {
    id: 12,
    name: "Pleated Mini Skirt",
    slug: "pleated-mini-skirt",
    price: 28,
    category: "Dresses & Skirts",
    fabric: "Poly-wool suiting",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 40,
    inStock: true,
    featured: true,
    image: img("pleated-mini-skirt"),
    description:
      "A knife-pleated mini in a poly-wool suiting, which is the one place in this collection where the synthetic is doing real work. Pleats are set with heat, and a fabric with polyester in it holds that set permanently — a pure cotton or wool pleat relaxes out within a few wears and needs pressing back in every time. This one will still be sharp in two years without an iron ever touching it. The pleats are stitched down through the yoke to sit flat over the hip and released from there, so the volume starts where you want it. The waistband is faced and closes with a concealed side zip and a hook. There is a built-in short lining. Machine wash cool in a bag and hang to dry; never tumble dry, which is the one thing that will soften the pleats.",
  },

  // ------------------------------------------------------------- Outerwear
  {
    id: 13,
    name: "Classic Denim Trucker",
    slug: "classic-denim-trucker",
    price: 40,
    category: "Outerwear",
    fabric: "12.5oz cotton denim",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 88,
    inStock: true,
    bestSeller: true,
    topRated: true,
    image: img("classic-denim-trucker"),
    description:
      "The trucker jacket, built to the original pattern and in a denim heavy enough to earn it. Most denim jackets in this price range use a 9 or 10oz cloth so they can be sold soft; the trade is that they never develop any character and go limp within a year. This is a 12.5oz that starts firm and breaks in around your shoulders over a few months. Two chest pockets with pointed flaps, a two-piece back yoke, adjustable button tabs at the waist, and a pointed collar that stands when turned up. The buttons are shanked and set through a reinforced facing so they cannot pull out. Wash it rarely, cold, and inside out. The whole point of a jacket like this is the fade you put into it yourself, and washing is what takes that away.",
  },
  {
    id: 14,
    name: "Vintage Wash Denim Jacket",
    slug: "vintage-wash-denim-jacket",
    price: 39,
    category: "Outerwear",
    fabric: "Washed cotton denim",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 54,
    inStock: true,
    image: img("vintage-wash-denim-jacket"),
    description:
      "The same trucker block as our classic, finished with a heavy stone and enzyme wash so it arrives already broken in — for anyone who wants the look now rather than in eighteen months. The wash is done on the made-up garment, which is why the fade concentrates at the seams, the collar edge and the pocket flaps exactly where wear would put it, instead of appearing as an even bleach across flat cloth. The cloth is a slightly lighter denim than the classic because a heavy denim will not take a wash this deep without going brittle. Cut a touch roomier through the body to layer over a hoodie. Machine wash cold inside out on a gentle cycle and hang dry. It is already where it is going; further washing will only lighten it further.",
  },
  {
    id: 15,
    name: "Blush Pullover Hoodie",
    slug: "blush-pullover-hoodie",
    price: 30,
    category: "Outerwear",
    fabric: "Loopback cotton",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 67,
    inStock: true,
    bestSeller: true,
    image: img("blush-pullover-hoodie"),
    description:
      "A pullover hoodie in a loopback cotton rather than a brushed fleece, which is the choice that makes it wearable year-round rather than only in December. Loopback leaves the inside of the knit as open loops instead of brushing them flat into a nap: it breathes, it dries fast, and it does not turn into a heat trap the moment you walk outside. The hood is a proper three-panel construction so it sits up around the head instead of collapsing into a flat flap, and the drawcords are flat woven with metal tips. The kangaroo pocket is bar-tacked at both openings, which is where every hoodie fails first. Ribbed cuffs and hem are knitted rather than cut and turned. Machine wash cool inside out, tumble low, and skip the fabric softener.",
  },
  {
    id: 16,
    name: "Forest Zip Hoodie",
    slug: "forest-zip-hoodie",
    price: 32,
    category: "Outerwear",
    fabric: "Loopback cotton",
    sizes: APPAREL_SIZES,
    rating: 4,
    reviews: 36,
    inStock: true,
    image: img("forest-zip-hoodie"),
    description:
      "The zip-through version of our pullover, in a deep forest green, and the one to own if you want a layer you can take off without ruining your hair. The zip is a chunky moulded plastic with a stopper at the base and a chin guard at the top, and it is set into a facing rather than sewn straight onto the edge — a detail that costs an extra operation and is why the front of this hoodie stays flat instead of rippling. Two open hand pockets sit at the waist with the openings angled slightly forward. The hood is three-panel and lined in the same loopback. The green is a deep reactive dye that will hold rather than drifting toward olive after a season. Machine wash cool inside out, tumble low, and zip it up before it goes in the machine.",
  },
  {
    id: 17,
    name: "Sherpa-Lined Denim Jacket",
    slug: "sherpa-lined-denim-jacket",
    price: 40,
    compareAt: 48,
    category: "Outerwear",
    fabric: "Denim with sherpa lining",
    sizes: APPAREL_SIZES,
    rating: 5,
    reviews: 29,
    inStock: true,
    featured: true,
    stockLeft: 6,
    stockTotal: 40,
    image: img("sherpa-lined-denim-jacket"),
    description:
      "A trucker jacket lined through the body with a thick sherpa pile and through the sleeves with a smooth cotton twill, because a sherpa sleeve lining is what makes a jacket impossible to put on over a jumper. The collar is faced in the same sherpa and turns up properly against wind. The denim shell is a rigid 12.5oz, unwashed, so it will darken at the creases and lighten at the edges the way it should. Because the lining adds bulk, we cut the body a size wider through the chest and armhole than the unlined version — take your usual size rather than sizing up. Two flap chest pockets plus two fleece-lined hand pockets at the waist, which the original never had and which everyone actually wants. Machine wash cold, hang dry, never tumble.",
  },

  // -------------------------------------------------------------- Footwear
  {
    id: 18,
    name: "Court Canvas High-Tops",
    slug: "court-canvas-high-tops",
    price: 32,
    category: "Footwear",
    fabric: "Cotton canvas, vulcanised rubber",
    sizes: SHOE_SIZES,
    rating: 5,
    reviews: 74,
    inStock: true,
    bestSeller: true,
    topRated: true,
    image: img("court-canvas-high-tops"),
    description:
      "A black canvas high-top on a vulcanised sole, which means the rubber is bonded to the upper under heat and pressure rather than glued. Glued soles are what separate at the toe after a few months; a vulcanised one fails only when the canvas does. The upper is a heavy cotton duck with a padded collar and a reinforced eyestay, and there are metal eyelets right up the ankle rather than the punched holes cheaper pairs use. The insole is a removable moulded foam, so you can pull it out to dry it or swap it. Flat waxed laces hold a knot properly. The toe cap is a separate piece of rubber, stitched as well as bonded, which is the part that takes the abuse. Wipe clean or machine wash cool in a bag; always air dry away from heat.",
  },
  {
    id: 19,
    name: "Marigold Canvas High-Tops",
    slug: "marigold-canvas-high-tops",
    price: 33,
    category: "Footwear",
    fabric: "Cotton canvas, vulcanised rubber",
    sizes: SHOE_SIZES,
    rating: 4,
    reviews: 41,
    inStock: true,
    featured: true,
    image: img("marigold-canvas-high-tops"),
    description:
      "The same vulcanised construction as our black high-top, in a marigold canvas with a cream foxing stripe around the sole. Bright canvas is harder to get right than it looks — the dye has to survive both the vulcanising oven, which runs hot enough to shift a poorly chosen pigment, and then daylight. This yellow is a vat dye selected for heat stability, which is why it comes out of the factory the same colour it went in and stays there. Padded collar, metal eyelets, removable moulded insole, stitched-and-bonded toe cap. They are the pair people notice, which is either the reason to buy them or the reason not to. Wipe clean with a damp cloth and a little soap; canvas this bright is better spot-cleaned than machine washed, and never dried in direct sun.",
  },
  {
    id: 20,
    name: "Cloud Canvas Low-Tops",
    slug: "cloud-canvas-low-tops",
    price: 29,
    category: "Footwear",
    fabric: "Cotton canvas, rubber sole",
    sizes: SHOE_SIZES,
    rating: 4,
    reviews: 58,
    inStock: false,
    image: img("cloud-canvas-low-tops"),
    description:
      "A cream low-top, cut on the same last as our high-tops so the fit carries across if you already know your size in one. The lower collar makes them the easier pair to live in — no ankle pressure, quicker to get on, and they work with a cropped trouser in a way a high-top never quite does. The sole is a slightly thinner rubber with a fine herringbone tread, flexible enough to move properly through a step. The upper is a lighter canvas than the high-tops because a low-top does not need the same structure, and it is left unlined apart from a soft heel counter. Cream canvas will mark; that is the trade for the colour, and a soft brush plus a little soap takes most of it out. Machine wash cool in a bag if they get bad, then stuff with paper and air dry.",
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
/** Pieces with a stock countdown, used by the Deal of the Day band. */
export const dealProducts = products.filter(
  (p) => p.stockLeft !== undefined && p.compareAt !== undefined
);
