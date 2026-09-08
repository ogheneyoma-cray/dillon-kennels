export type Category =
  | "Kitchen & Dining"
  | "Home Decor"
  | "Bedding & Bath"
  | "Storage & Organization"
  | "Lighting";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  spec: string;
  rating: number; // out of 5
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
  onSale?: boolean;
}

export const categories: Category[] = [
  "Kitchen & Dining",
  "Home Decor",
  "Bedding & Bath",
  "Storage & Organization",
  "Lighting",
];

interface Seed {
  name: string;
  price: number;
  spec: string;
  rating: number;
  category: Category;
  description: string;
  popular?: boolean;
  onSale?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  // ------------------------------------------------------- Kitchen & Dining
  {
    name: "Stoneware Dinner Plate Set",
    price: 32,
    spec: "4-piece · Matte stoneware · Dishwasher safe",
    rating: 5,
    category: "Kitchen & Dining",
    popular: true,
    description:
      "A four-piece set of matte stoneware dinner plates with a soft speckled glaze, sized for everyday meals and still nice enough for company. Each plate is fired to resist chipping and stacks cleanly for storage in a standard cabinet.",
  },
  {
    name: "Pour-Over Coffee Set",
    price: 28,
    spec: "Ceramic dripper · Reusable filter · 2-cup carafe",
    rating: 4,
    category: "Kitchen & Dining",
    onSale: true,
    description:
      "A ceramic pour-over dripper paired with a reusable stainless filter and a 2-cup glass carafe, built for a slower, better cup than a drip machine gives you. No paper filters to restock — rinse and go again the next morning.",
  },
  {
    name: "Bamboo Cutting Board",
    price: 24,
    spec: "Solid bamboo · Juice groove · Food-safe finish",
    rating: 5,
    category: "Kitchen & Dining",
    description:
      "A solid bamboo board with a routed juice groove around the edge and a food-safe oil finish that resists water better than softer woods. Sized generously for weeknight prep without taking over the whole counter.",
  },

  // ------------------------------------------------------------ Home Decor
  {
    name: "Woven Storage Basket",
    price: 26,
    spec: "Natural seagrass · Reinforced handles",
    rating: 4,
    category: "Home Decor",
    popular: true,
    description:
      "A hand-woven seagrass basket with reinforced handles, sturdy enough for throws, toys or magazines and good-looking enough to leave out rather than tuck away. Every piece has slightly different weave texture, which is the point.",
  },
  {
    name: "Ceramic Table Vase Trio",
    price: 22,
    spec: "Set of 3 · Matte stoneware · Mixed heights",
    rating: 5,
    category: "Home Decor",
    onSale: true,
    description:
      "Three matte stoneware vases in a graduated set of heights, made to be grouped on a shelf or console rather than used one at a time. Works empty as sculptural objects or filled with dried stems.",
  },
  {
    name: "Round Wall Mirror",
    price: 38,
    spec: "18-inch · Leather hanging strap · Metal frame",
    rating: 4,
    category: "Home Decor",
    description:
      "An 18-inch round mirror in a slim metal frame, hung from a genuine leather strap rather than a hidden bracket, so the hardware is part of the design. Reads as considered in a hallway, bedroom or over a console table.",
  },

  // -------------------------------------------------------- Bedding & Bath
  {
    name: "Cotton Bath Towel Set",
    price: 30,
    spec: "3-piece · 600 GSM combed cotton",
    rating: 5,
    category: "Bedding & Bath",
    popular: true,
    description:
      "A three-piece set of 600 GSM combed cotton towels — one bath sheet, one hand towel, one washcloth — dense enough to actually dry you in one pass and soften further with every wash.",
  },
  {
    name: "Linen Throw Blanket",
    price: 36,
    spec: "100% stonewashed linen · 50×70 in",
    rating: 4,
    category: "Bedding & Bath",
    description:
      "A stonewashed linen throw with the slightly rumpled texture linen is meant to have, breathable enough for a sofa throw in a warm climate. Fringed edge, no lining, machine washable.",
  },
  {
    name: "Egyptian Cotton Bed Sheet Set",
    price: 40,
    spec: "4-piece · 400 thread count · Queen fit",
    rating: 5,
    category: "Bedding & Bath",
    onSale: true,
    description:
      "A four-piece 400 thread count Egyptian cotton sheet set — fitted, flat and two pillowcases — with deep pockets sized for a queen mattress up to 16 inches. Gets softer with every wash rather than pilling.",
  },

  // ------------------------------------------------ Storage & Organization
  {
    name: "Stackable Storage Bins",
    price: 27,
    spec: "Set of 3 · Labeled fronts · Interlocking design",
    rating: 4,
    category: "Storage & Organization",
    popular: true,
    description:
      "Three stackable bins with labeled front panels and an interlocking lip, built to hold their shape when full and stack cleanly on a shelf or in a closet without sliding around.",
  },
  {
    name: "Over-Door Hook Organizer",
    price: 20,
    spec: "5-hook rail · No-drill mount · Solid brass hardware",
    rating: 4,
    category: "Storage & Organization",
    description:
      "A five-hook rail that mounts over a standard door with no drilling, finished in solid brass hardware on a dark wood rail rather than the usual plastic. Holds coats, bags and towels without sagging.",
  },
  {
    name: "Bamboo Drawer Divider Set",
    price: 23,
    spec: "8-piece · Adjustable bamboo dividers",
    rating: 5,
    category: "Storage & Organization",
    description:
      "An eight-piece bamboo divider set that slots together in adjustable configurations to fit cutlery drawers of different widths, replacing a mismatched tray with something that actually fits.",
  },

  // -------------------------------------------------------------- Lighting
  {
    name: "Ceramic Table Lamp",
    price: 34,
    spec: "Ceramic base · Linen shade · E26 socket",
    rating: 5,
    category: "Lighting",
    popular: true,
    description:
      "A ceramic table lamp with a textured base and a natural linen shade, sized for a bedside table or console. Takes a standard E26 bulb, sold separately, so you can choose your own warmth.",
  },
  {
    name: "LED String Fairy Lights",
    price: 21,
    spec: "33 ft · 100 warm-white LEDs · Timer function",
    rating: 4,
    category: "Lighting",
    onSale: true,
    description:
      "A 33-foot copper-wire strand of 100 warm-white LEDs with a built-in timer, flexible enough to wrap a headboard, shelf or window frame without looking like a string of Christmas lights left up too long.",
  },
  {
    name: "Rattan Pendant Lampshade",
    price: 37,
    spec: "Hand-woven rattan · Tiered dome · Hardwire or plug-in",
    rating: 5,
    category: "Lighting",
    description:
      "A hand-woven rattan pendant shade in a tiered dome shape, casting warm, dappled light rather than a flat glow. Fits a standard fixture and can be hardwired or hung from a plug-in cord kit.",
  },
];

export const products: Product[] = seeds.map((seed, index) => {
  const slug = seed.name
    .toLowerCase()
    .replace(/[()']/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    id: index + 1,
    slug,
    name: seed.name,
    price: seed.price,
    spec: seed.spec,
    rating: seed.rating,
    description: seed.description,
    image: `/products/${slug}.jpg`,
    category: seed.category,
    inStock: seed.inStock ?? true,
    popular: seed.popular,
    onSale: seed.onSale,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular).slice(0, 6);
}

export function getSaleProducts(): Product[] {
  return products.filter((product) => product.onSale).slice(0, 6);
}
