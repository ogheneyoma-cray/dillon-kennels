export type Category = "Kitchenware" | "Storage" | "Bedding & Bath" | "Decor" | "Cleaning";

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

export const categories: Category[] = ["Kitchenware", "Storage", "Bedding & Bath", "Decor", "Cleaning"];

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
  // Kitchenware
  {
    name: "Ceramic Dinnerware Set",
    price: 38,
    rating: 5,
    category: "Kitchenware",
    popular: true,
    image: img("1610701596061-2ecf227e85b2"),
    description: "A 12-piece stoneware dinnerware set in a matte glaze, dishwasher and microwave safe.",
  },
  {
    name: "Bamboo Cutting Board Set",
    price: 24,
    rating: 4,
    category: "Kitchenware",
    image: img("1556911220-bff31c812dba"),
    description: "Three nesting bamboo boards with juice grooves, gentle on knife edges and naturally antibacterial.",
  },
  {
    name: "Glass Storage Jar Trio",
    price: 22,
    rating: 4,
    category: "Kitchenware",
    image: img("1556909114-f6e7ad7d3136"),
    description: "Airtight glass jars with bamboo lids for pantry staples, stackable for easy shelving.",
  },
  {
    name: "Stainless Steel Pot Set",
    price: 40,
    rating: 5,
    category: "Kitchenware",
    popular: true,
    image: img("1556910103-1c02745aae4d"),
    description: "A three-piece stainless steel cookware set with tempered glass lids and even heat distribution.",
  },
  {
    name: "Marble Mortar & Pestle",
    price: 27,
    rating: 4,
    category: "Kitchenware",
    image: img("1556909212-d5b604d0c90d"),
    description: "A heavyweight polished marble mortar and pestle for grinding spices and herbs.",
  },

  // Storage
  {
    name: "Woven Storage Baskets (Set of 2)",
    price: 29,
    rating: 4,
    category: "Storage",
    popular: true,
    image: img("1522708323590-d24dbb6b0267"),
    description: "Hand-woven seagrass baskets with handles, perfect for blankets, towels or toys.",
  },
  {
    name: "Stackable Storage Bins",
    price: 25,
    rating: 4,
    category: "Storage",
    image: img("1600166898405-da9535204843"),
    description: "Modular plastic storage bins with lids, stackable for closets, pantries or garages.",
  },
  {
    name: "Over-Door Organizer",
    price: 20,
    rating: 4,
    category: "Storage",
    image: img("1583847268964-b28dc8f51f92"),
    description: "A hanging pocket organizer that fits over most doors, great for shoes or pantry items.",
  },
  {
    name: "Bamboo Drawer Dividers",
    price: 23,
    rating: 4,
    category: "Storage",
    image: img("1531971589569-0d9370cbe1e5"),
    description: "Adjustable bamboo dividers that expand to fit any drawer, keeping utensils and tools organized.",
  },
  {
    name: "Vacuum Storage Bags (Set of 6)",
    price: 21,
    rating: 4,
    category: "Storage",
    image: img("1584622650111-993a426fbf0a"),
    description: "Space-saving vacuum bags that compress bedding and seasonal clothing to a fraction of the size.",
  },

  // Bedding & Bath
  {
    name: "Egyptian Cotton Sheet Set",
    price: 40,
    rating: 5,
    category: "Bedding & Bath",
    popular: true,
    image: img("1592078615290-033ee584e267"),
    description: "A soft 400-thread-count cotton sheet set with a fitted sheet, flat sheet and two pillowcases.",
  },
  {
    name: "Weighted Throw Blanket",
    price: 36,
    rating: 5,
    category: "Bedding & Bath",
    popular: true,
    image: img("1565538810643-b5bdb714032a"),
    description: "A cozy weighted throw filled with glass beads, designed to promote deeper, calmer rest.",
  },
  {
    name: "Turkish Cotton Towel Set",
    price: 28,
    rating: 4,
    category: "Bedding & Bath",
    image: img("1595079676339-1534801ad6cf"),
    description: "A set of two bath towels and two hand towels in absorbent, quick-drying Turkish cotton.",
  },
  {
    name: "Memory Foam Bath Mat",
    price: 20,
    rating: 4,
    category: "Bedding & Bath",
    image: img("1509909756405-be0199881695"),
    description: "A plush memory foam bath mat with a non-slip base and machine-washable cover.",
  },
  {
    name: "Linen Duvet Cover",
    price: 39,
    rating: 5,
    category: "Bedding & Bath",
    image: img("1567016432779-094069958ea5"),
    description: "A relaxed linen duvet cover that softens with every wash, breathable for all seasons.",
  },

  // Decor
  {
    name: "Ceramic Vase Trio",
    price: 26,
    rating: 4,
    category: "Decor",
    popular: true,
    image: img("1522771930-78848d9293e8"),
    description: "Three hand-thrown ceramic vases in varied heights, ideal for dried or fresh stems.",
  },
  {
    name: "Woven Wall Hanging",
    price: 30,
    rating: 4,
    category: "Decor",
    image: img("1583845112203-29329902332e"),
    description: "A handwoven cotton wall hanging on a wooden dowel, adding texture to any room.",
  },
  {
    name: "Scented Soy Candle Set",
    price: 22,
    rating: 4,
    category: "Decor",
    image: img("1493663284031-b7e3aefcae8e"),
    description: "Three soy wax candles in warm, home-inspired scents, each with a 40-hour burn time.",
  },
  {
    name: "Rattan Table Lamp",
    price: 35,
    rating: 5,
    category: "Decor",
    image: img("1567538096630-e0c55bd6374c"),
    description: "A woven rattan lamp shade over a wooden base, casting a warm, diffused glow.",
  },
  {
    name: "Framed Botanical Print Set",
    price: 32,
    rating: 4,
    category: "Decor",
    image: img("1610701596007-11502861dcfa"),
    description: "A set of three framed botanical prints, ready to hang for an instant gallery wall.",
  },

  // Cleaning
  {
    name: "Microfiber Cleaning Cloth Set",
    price: 20,
    rating: 4,
    category: "Cleaning",
    image: img("1524758631624-e2822e304c36"),
    description: "A 12-pack of lint-free microfiber cloths for glass, counters and delicate surfaces.",
  },
  {
    name: "Natural Bristle Cleaning Brush Set",
    price: 24,
    rating: 4,
    category: "Cleaning",
    popular: true,
    image: img("1518843875459-f738682238a6"),
    description: "A set of wooden-handled brushes with natural bristles for dishes, bottles and produce.",
  },
  {
    name: "Refillable Glass Spray Bottles",
    price: 23,
    rating: 4,
    category: "Cleaning",
    image: img("1616486338812-3dadae4b4ace"),
    description: "Two amber glass spray bottles with labels, perfect for homemade or decanted cleaning solutions.",
  },
  {
    name: "Laundry Storage Caddy",
    price: 27,
    rating: 4,
    category: "Cleaning",
    image: img("1587145820266-a5951ee6f620"),
    description: "A divided canvas caddy that keeps detergent, dryer sheets and stain remover within reach.",
  },
  {
    name: "Compostable Kitchen Bin",
    price: 25,
    rating: 4,
    category: "Cleaning",
    image: img("1602928321679-560bb453f190"),
    description: "A compact steel countertop bin with a charcoal filter to keep food scraps odor-free.",
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
