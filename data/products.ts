export type Category = "Shirts" | "T-Shirts" | "Jackets" | "Sweaters" | "Footwear";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  description: string;
  image: string;
  category: Category;
  size: string;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = ["Shirts", "T-Shirts", "Jackets", "Sweaters", "Footwear"];

interface Seed {
  name: string;
  price: number;
  category: Category;
  size: string;
  inStock: boolean;
  popular?: boolean;
  description: string;
}

const seeds: Seed[] = [
  {
    name: "Navy Slim Fit Oxford Shirt",
    price: 34,
    category: "Shirts",
    size: "S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "A wardrobe staple cut from a fine oxford cotton with just enough weight to hold a crisp collar roll through a full working day. The Navy Slim Fit Oxford Shirt is tapered through the body without ever pulling across the shoulders, with a button-down collar, a single chest pocket, and a curved tail long enough to stay tucked. Wear it under a blazer for the office or open over a plain tee on the weekend. Machine washable, warm iron while slightly damp for the sharpest finish.",
  },
  {
    name: "Charcoal Check Flannel Shirt",
    price: 29,
    category: "Shirts",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "Brushed cotton flannel in a subdued charcoal check, soft against the skin from the first wear and warmer than a standard shirting cotton without adding bulk. Cut with a relaxed regular fit, a single button-flap chest pocket, and a shirttail hem so it layers cleanly over a tee or under a jacket. A genuinely versatile piece for cooler days. Machine wash cold, tumble dry low.",
  },
  {
    name: "White Tailored Fit Linen Shirt",
    price: 32,
    category: "Shirts",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A pure white linen shirt built for warm weather, cut in a tailored fit that stays sharp without fighting the natural texture linen is known for. Mother-of-pearl-effect buttons, a clean spread collar, and a slightly cropped tail give it enough polish to wear buttoned to the collar or open over a plain crew neck. Machine wash cold on a gentle cycle and expect the linen to soften with every wear.",
  },
  {
    name: "Heather Grey Crew Neck Tee",
    price: 22,
    category: "T-Shirts",
    size: "S, M, L, XL, XXL",
    inStock: true,
    popular: true,
    description:
      "Built from a heavyweight combed cotton with real structure, the Heather Grey Crew Neck Tee holds its shape wash after wash instead of thinning out after a season. A ribbed crew neckline sits close without stretching out, and the fit is straight through the body with a slightly dropped shoulder for an easy, contemporary silhouette. The everyday essential the rest of your wardrobe builds around.",
  },
  {
    name: "Olive Pocket T-Shirt",
    price: 24,
    category: "T-Shirts",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A simple crew neck tee elevated by a single chest pocket in a contrast-stitched olive cotton jersey. Garment-dyed for a slightly worn-in tone from day one, with a regular fit that's easy to layer under an overshirt or wear alone. Machine washable and genuinely built to outlast a basic tee.",
  },
  {
    name: "Black Ribbed Henley Tee",
    price: 26,
    category: "T-Shirts",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A ribbed cotton-blend henley with a three-button placket that gives a plain tee a bit more shape and detail. Fitted through the body without being tight, with a slightly longer hem for a clean line whether worn tucked or loose. Works equally well as a layering piece under the Charcoal Wool-Blend Overcoat or on its own with denim.",
  },
  {
    name: "Tan Suede Bomber Jacket",
    price: 39,
    category: "Jackets",
    size: "S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "A genuine statement piece: a soft-hand faux-suede bomber in a warm tan tone, cut with a ribbed collar, cuffs, and hem that keep the fit close without restricting movement. A two-way front zip and two zippered hand pockets round out details usually reserved for far more technical outerwear. Wear it over the Navy Slim Fit Oxford Shirt for a sharper look or over a plain tee for the weekend.",
  },
  {
    name: "Navy Quilted Puffer Vest",
    price: 37,
    category: "Jackets",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A lightweight quilted vest built for layering, filled with a synthetic insulation that traps warmth without the bulk of a full jacket. A stand collar, zip front, and two hand-warmer pockets make it genuinely functional rather than purely decorative. Pack it small for travel or wear it daily over a shirt through the cooler months.",
  },
  {
    name: "Charcoal Wool-Blend Overcoat",
    price: 39,
    category: "Jackets",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "The collection's outerwear anchor: a full-length wool-blend overcoat with enough structure to hold its shape through a season of wear. Notch lapels, a single-breasted button front, and set-in sleeves finished with a working cuff give it real tailoring detail. Dry clean recommended; store on a wide, curved hanger to preserve the shoulder line.",
  },
  {
    name: "Bottle Green Crew Neck Sweater",
    price: 28,
    category: "Sweaters",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "Knitted from a cotton-acrylic blend in a rich bottle green, this crew neck holds its shape across the shoulders while staying soft enough for all-day comfort. A ribbed hem and cuffs prevent the classic knitwear problem of stretching out of shape. Layer it over a collared shirt or wear it alone with straight denim.",
  },
  {
    name: "Camel Cable Knit Sweater",
    price: 33,
    category: "Sweaters",
    size: "S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "A classic cable-knit pattern worked into a warm camel-toned yarn, cut with a slightly relaxed fit through the body and a ribbed crew neckline. Substantial enough to wear alone on a cool evening, light enough to layer under a jacket during the day. Hand wash cold and lay flat to dry to protect the cable texture.",
  },
  {
    name: "Charcoal Half-Zip Sweater",
    price: 30,
    category: "Sweaters",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A fine-gauge knit in charcoal grey with a half-zip neckline that adds a sharper, more considered edge than a standard crew. The zip pulls up for extra warmth on colder days or sits open over a plain tee for an easy smart-casual look. Ribbed cuffs and hem keep the shape through repeated wear.",
  },
  {
    name: "Brown Leather Chukka Boots",
    price: 38,
    category: "Footwear",
    size: "40, 41, 42, 43, 44, 45",
    inStock: true,
    popular: true,
    description:
      "Built on a genuine leather upper in a rich brown finish, these two-eyelet chukka boots sit at the ankle with a rounded toe and a cushioned insole for genuine all-day comfort. A durable rubber outsole adds grip without disrupting the clean, low profile the chukka silhouette is known for. Condition the leather every few months to keep it supple.",
  },
  {
    name: "Black Canvas Sneakers",
    price: 27,
    category: "Footwear",
    size: "40, 41, 42, 43, 44, 45",
    inStock: true,
    description:
      "A heavyweight black cotton canvas sneaker with a low-top silhouette, genuine metal eyelets, and a lightweight EVA midsole for real shock absorption rather than the flat feel common to budget canvas shoes. A rubber toe cap reinforces the point that wears through fastest on any sneaker. The everyday shoe that works with almost everything in the range.",
  },
  {
    name: "Tan Suede Loafers",
    price: 36,
    category: "Footwear",
    size: "40, 41, 42, 43, 44, 45",
    inStock: true,
    description:
      "Soft brushed suede in a warm tan tone with a classic penny-strap detail across the vamp and a rounded, streamlined toe. A leather-lined footbed molds to your foot over the first few wears, and a crepe-effect rubber outsole adds grip without disturbing the clean lines of the shoe. Treat with a suede protector spray before the first wear.",
  },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()']/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const products: Product[] = seeds.map((seed, index) => {
  const slug = slugify(seed.name);
  return {
    id: index + 1,
    name: seed.name,
    slug,
    price: seed.price,
    category: seed.category,
    size: seed.size,
    inStock: seed.inStock,
    popular: seed.popular,
    image: `/products/${slug}.png`,
    description: seed.description,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  const popular = products.filter((product) => product.popular);
  return popular.length > 0 ? popular : products.slice(0, 6);
}
