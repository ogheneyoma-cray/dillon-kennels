export type Category =
  | "Cleansers"
  | "Serums & Treatments"
  | "Moisturizers"
  | "Sun Care"
  | "Masks & Exfoliants";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  volume: string;
  rating: number; // out of 5
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Cleansers",
  "Serums & Treatments",
  "Moisturizers",
  "Sun Care",
  "Masks & Exfoliants",
];

interface Seed {
  name: string;
  volume: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  // ------------------------------------------------------------------ Cleansers
  {
    name: "Balance Gel Cleanser",
    volume: "150ml",
    price: 24,
    rating: 5,
    category: "Cleansers",
    popular: true,
    description:
      "A lightweight, sulfate-free gel cleanser that lifts away makeup and daily grime without stripping the skin's natural moisture barrier. Formulated with a mild surfactant base and a touch of panthenol, it leaves skin feeling clean and comfortable, never tight.",
  },
  {
    name: "Cream Cleansing Balm",
    volume: "100ml",
    price: 28,
    rating: 5,
    category: "Cleansers",
    description:
      "A rich, melt-in balm that dissolves stubborn makeup and SPF in one step before rinsing clean with warm water. The plant-oil base leaves a light cushion of hydration behind rather than the tight, stripped feeling most oil cleansers rinse away with.",
  },
  {
    name: "Charcoal Clarifying Wash",
    volume: "150ml",
    price: 22,
    rating: 4,
    category: "Cleansers",
    description:
      "A gentle foaming cleanser with activated charcoal and kaolin clay that draws out excess oil and congestion from pores without over-drying. Best suited to combination and oilier skin types looking for a clean, matte finish.",
  },

  // -------------------------------------------------------- Serums & Treatments
  {
    name: "Brightening C Serum",
    volume: "30ml",
    price: 36,
    rating: 5,
    category: "Serums & Treatments",
    popular: true,
    description:
      "A stabilized 15% vitamin C serum with ferulic acid and vitamin E, formulated to fade the look of dark spots and even overall tone with daily use. The lightweight, fast-absorbing texture layers cleanly under moisturizer and sunscreen.",
  },
  {
    name: "Revitalizing Green Ampoule",
    volume: "30ml",
    price: 34,
    rating: 4,
    category: "Serums & Treatments",
    description:
      "A concentrated antioxidant ampoule built around centella asiatica and green tea extract, aimed at calming visible redness and supporting a more resilient-looking complexion over time. A few drops go a long way under your regular routine.",
  },
  {
    name: "Niacinamide Pore Refiner",
    volume: "30ml",
    price: 27,
    rating: 4,
    category: "Serums & Treatments",
    description:
      "A 10% niacinamide serum formulated to visibly refine the look of enlarged pores and control shine through the day, without the tingling some niacinamide formulas cause. Pairs well under both morning and evening routines.",
  },

  // ------------------------------------------------------------- Moisturizers
  {
    name: "Moisture Repair Cream",
    volume: "50ml",
    price: 32,
    rating: 5,
    category: "Moisturizers",
    popular: true,
    description:
      "A rich, ceramide-based cream formulated to reinforce a compromised moisture barrier, ideal for skin left tight or reactive after over-exfoliating or harsh weather. Fragrance-free and suited to sensitive skin.",
  },
  {
    name: "Overnight Recovery Balm",
    volume: "50ml",
    price: 35,
    rating: 5,
    category: "Moisturizers",
    description:
      "A sleeping balm layered with squalane and shea butter, designed to seal in the rest of your evening routine and wake up to noticeably softer, more supple skin. A little goes further than it looks.",
  },
  {
    name: "Barrier Defense Lotion",
    volume: "75ml",
    price: 26,
    rating: 4,
    category: "Moisturizers",
    description:
      "A lightweight, fast-absorbing daily lotion that hydrates without the heaviness of a cream, making it a good year-round option for combination and oilier skin types that still need reliable moisture.",
  },

  // ------------------------------------------------------------------ Sun Care
  {
    name: "Mineral Sun Cream",
    volume: "50ml",
    price: 29,
    rating: 4,
    category: "Sun Care",
    popular: true,
    description:
      "A broad-spectrum SPF 50 mineral sunscreen built on zinc oxide, formulated to sit comfortably under makeup without the heavy white cast older mineral formulas are known for. Reef-conscious and suited to daily wear.",
  },
  {
    name: "Daily Defense Sunstick",
    volume: "20g",
    price: 23,
    rating: 4,
    category: "Sun Care",
    description:
      "An SPF 40 sunscreen stick built for quick reapplication over makeup during the day, without disturbing what's underneath. Slips easily into a bag for touch-ups on the go.",
  },
  {
    name: "Tinted Sun Veil",
    volume: "40ml",
    price: 31,
    rating: 5,
    category: "Sun Care",
    description:
      "A lightly tinted SPF 35 sunscreen that doubles as a soft-focus base, evening out tone while protecting skin — a one-step option for days that don't call for full coverage.",
  },

  // --------------------------------------------------------- Masks & Exfoliants
  {
    name: "Nourishing Face Mask",
    volume: "75ml",
    price: 25,
    rating: 4,
    category: "Masks & Exfoliants",
    description:
      "A creamy, clay-based mask that draws out impurities while a blend of plant oils keeps it from leaving skin feeling stripped afterward. Ten minutes, twice a week, is usually enough.",
  },
  {
    name: "Heartleaf Calming Toner Pads",
    volume: "60 pads",
    price: 28,
    rating: 5,
    category: "Masks & Exfoliants",
    description:
      "Pre-soaked exfoliating pads with heartleaf extract and a mild PHA, formulated to gently resurface and calm reactive or redness-prone skin without the sting of stronger acid toners.",
  },
  {
    name: "Renewal Enzyme Polish",
    volume: "60ml",
    price: 30,
    rating: 4,
    category: "Masks & Exfoliants",
    description:
      "A gentle fruit-enzyme polish that lifts away dull surface skin without physical scrubbing, leaving a smoother, more even texture behind. Suited to weekly use rather than a daily step.",
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
    volume: seed.volume,
    price: seed.price,
    rating: seed.rating,
    description: seed.description,
    image: `/products/${slug}.png`,
    category: seed.category,
    inStock: seed.inStock ?? true,
    popular: seed.popular,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular).slice(0, 6);
}
