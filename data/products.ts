export type Category = "Dresses" | "Tops" | "Bottoms" | "Outerwear" | "Accessories";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"];

interface Seed {
  name: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  image: string;
  popular?: boolean;
  inStock?: boolean;
}

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const seeds: Seed[] = [
  // Dresses
  {
    name: "Wrap Midi Dress",
    price: 34,
    rating: 5,
    category: "Dresses",
    popular: true,
    image: img("1515372039744-b8f02a3ae446"),
    description: "A flattering wrap-front midi dress in a soft crepe fabric, finished with a tie waist and flowing three-quarter sleeves.",
  },
  {
    name: "Floral Wrap Sundress",
    price: 29,
    rating: 4,
    category: "Dresses",
    image: img("1490481651871-ab68de25d43d"),
    description: "A lightweight floral sundress cut for warm days, with a fitted bodice and a breezy tiered skirt.",
  },
  {
    name: "Satin Slip Dress",
    price: 32,
    rating: 5,
    category: "Dresses",
    popular: true,
    image: img("1566174053879-31528523f8ae"),
    description: "A bias-cut satin slip dress with adjustable straps, designed to skim the body and catch the light.",
  },
  {
    name: "Puff-Sleeve Mini Dress",
    price: 27,
    rating: 4,
    category: "Dresses",
    image: img("1596783074918-c84cb06531ca"),
    description: "A playful mini dress with dramatic puff sleeves and a fitted waist, perfect for daytime events.",
  },
  {
    name: "Knit Bodycon Dress",
    price: 30,
    rating: 4,
    category: "Dresses",
    image: img("1503342217505-b0a15ec3261c"),
    description: "A ribbed knit bodycon dress that stretches to move with you, with a flattering round neckline.",
  },

  // Tops
  {
    name: "Silky Cami Top",
    price: 22,
    rating: 4,
    category: "Tops",
    popular: true,
    image: img("1524504388940-b1c1722653e1"),
    description: "A smooth satin cami top with adjustable straps, easy to dress up or wear casually.",
  },
  {
    name: "Oversized Poplin Shirt",
    price: 26,
    rating: 4,
    category: "Tops",
    image: img("1583846717393-dc2412c95ed7"),
    description: "A relaxed oversized shirt in crisp cotton poplin, great tucked in or worn loose over denim.",
  },
  {
    name: "Ribbed Knit Sweater",
    price: 28,
    rating: 5,
    category: "Tops",
    popular: true,
    image: img("1445205170230-053b83016050"),
    description: "A fine ribbed sweater in a soft cotton-modal blend, fitted through the body with a crew neckline.",
  },
  {
    name: "Puff-Sleeve Blouse",
    price: 24,
    rating: 4,
    category: "Tops",
    image: img("1601924994987-69e26d50dc26"),
    description: "A lightweight poplin blouse with balloon sleeves and a ruffled neckline for a feminine finish.",
  },
  {
    name: "Cropped Tank Top",
    price: 20,
    rating: 4,
    category: "Tops",
    image: img("1512436991641-6745cdb1723f"),
    description: "A ribbed cropped tank in stretch cotton, an easy layering piece for warmer days.",
  },

  // Bottoms
  {
    name: "Wide-Leg Trousers",
    price: 33,
    rating: 5,
    category: "Bottoms",
    popular: true,
    image: img("1509631179647-0177331693ae"),
    description: "Fluid wide-leg trousers with a flat-front waistband, cut to fall cleanly from hip to hem.",
  },
  {
    name: "High-Waist Denim Jeans",
    price: 36,
    rating: 5,
    category: "Bottoms",
    image: img("1441984904996-e0b6ba687e04"),
    description: "Classic high-waist jeans in a mid-weight stretch denim with a flattering tapered leg.",
  },
  {
    name: "Pleated Midi Skirt",
    price: 29,
    rating: 4,
    category: "Bottoms",
    image: img("1495385794356-15371f348c31"),
    description: "A fluid pleated midi skirt that moves with every step, finished with an elasticated waistband.",
  },
  {
    name: "Tailored Wide Shorts",
    price: 25,
    rating: 4,
    category: "Bottoms",
    image: img("1552374196-c4e7ffc6e126"),
    description: "Tailored wide-leg shorts in a soft twill, with front pleats and a comfortable relaxed fit.",
  },
  {
    name: "Bodycon Midi Skirt",
    price: 23,
    rating: 4,
    category: "Bottoms",
    image: img("1520975954732-35dd22299614"),
    description: "A stretch bodycon midi skirt with a back slit, easy to dress up with heels or down with sneakers.",
  },

  // Outerwear
  {
    name: "Trench Coat",
    price: 40,
    rating: 5,
    category: "Outerwear",
    popular: true,
    image: img("1483985988355-763728e1935b"),
    description: "A classic belted trench coat in water-resistant cotton twill, a timeless layer for transitional weather.",
  },
  {
    name: "Cropped Denim Jacket",
    price: 35,
    rating: 4,
    category: "Outerwear",
    image: img("1551803091-e20673f15770"),
    description: "A cropped denim jacket with a broken-in wash, finished with classic chest pockets and button cuffs.",
  },
  {
    name: "Oversized Wool Blazer",
    price: 38,
    rating: 5,
    category: "Outerwear",
    image: img("1608234807905-4466023792f5"),
    description: "An oversized wool-blend blazer with structured shoulders and a single-button closure.",
  },
  {
    name: "Quilted Puffer Vest",
    price: 31,
    rating: 4,
    category: "Outerwear",
    image: img("1583744946564-b52ac1c389c8"),
    description: "A lightweight quilted puffer vest, easy to layer over knitwear when the temperature drops.",
  },
  {
    name: "Longline Cardigan",
    price: 30,
    rating: 4,
    category: "Outerwear",
    image: img("1618932260643-eee4a2f652a6"),
    description: "A longline open-front cardigan in a soft knit, a cozy layer that pairs with almost everything.",
  },

  // Accessories
  {
    name: "Woven Straw Tote",
    price: 26,
    rating: 4,
    category: "Accessories",
    popular: true,
    image: img("1529139574466-a303027c1d8b"),
    description: "A hand-woven straw tote with leather handles, roomy enough for everyday essentials.",
  },
  {
    name: "Gold-Tone Layered Necklace",
    price: 21,
    rating: 4,
    category: "Accessories",
    image: img("1485462537746-965f33f7f6a7"),
    description: "A set of three delicate gold-tone chains layered onto a single secure clasp.",
  },
  {
    name: "Wide-Brim Sun Hat",
    price: 24,
    rating: 4,
    category: "Accessories",
    image: img("1434389677669-e08b4cac3105"),
    description: "A wide-brim woven sun hat with a fabric band, packable and light enough for travel.",
  },
  {
    name: "Leather Crossbody Bag",
    price: 37,
    rating: 5,
    category: "Accessories",
    popular: true,
    image: img("1560243563-062bfc001d68"),
    description: "A compact leather crossbody bag with an adjustable strap and a secure zip closure.",
  },
  {
    name: "Silk Hair Scarf",
    price: 20,
    rating: 4,
    category: "Accessories",
    image: img("1509319117193-57bab727e09d"),
    description: "A printed silk-feel scarf that doubles as a hair wrap, neck scarf, or bag accent.",
  },
];

export const products: Product[] = seeds.map((seed, i) => ({
  ...seed,
  id: i + 1,
  slug: seed.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  inStock: seed.inStock !== false,
}));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.popular);
}
