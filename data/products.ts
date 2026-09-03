export type Category =
  | "Bathroom Accessories"
  | "Kitchen & Dining"
  | "Storage & Organization"
  | "Home Decor"
  | "Cleaning Essentials";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  description: string;
  image: string;
  category: Category;
  detail: string;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Bathroom Accessories",
  "Kitchen & Dining",
  "Storage & Organization",
  "Home Decor",
  "Cleaning Essentials",
];

interface Seed {
  name: string;
  price: number;
  category: Category;
  detail: string;
  inStock: boolean;
  popular?: boolean;
  description: string;
}

const seeds: Seed[] = [
  {
    name: "Toothpaste Press, Extruder & Dispenser Clip",
    price: 22,
    category: "Bathroom Accessories",
    detail: "Wall clip-on, lazy rolling holder, dark blue",
    inStock: true,
    popular: true,
    description:
      "A wall-mounted toothpaste press that rolls and squeezes every last bit from the tube instead of leaving it wasted in the bin. The lazy rolling holder clips flush to any tile or mirror with strong adhesive backing, keeps the tube tidy and upright, and doubles as a cleanser or lotion tube dispenser. Finished in a matte dark blue that stays smart-looking sink-side.",
  },
  {
    name: "4-Piece Ceramic Bathroom Accessory Set",
    price: 34,
    category: "Bathroom Accessories",
    detail: "Soap dispenser, tumbler, tray, dish",
    inStock: true,
    popular: true,
    description:
      "A coordinated ceramic set covering everything a sink needs at once: a refillable soap dispenser with a smooth pump action, a tumbler for brushes or rinsing, a soap dish, and a catch-all tray for rings and small essentials. Glazed in a soft matte finish that resists water spotting.",
  },
  {
    name: "Bamboo Toilet Paper Holder with Shelf",
    price: 28,
    category: "Bathroom Accessories",
    detail: "Freestanding, holds 4 spare rolls",
    inStock: true,
    description:
      "A freestanding bamboo stand that keeps a roll within reach on top and four spares stored neatly on the shelf below. No drilling required, and the natural bamboo grain works with almost any bathroom finish, from tile to painted wood panelling.",
  },
  {
    name: "Suction Cup Corner Shower Caddy",
    price: 24,
    category: "Bathroom Accessories",
    detail: "3-tier, rust-proof, no-drill mount",
    inStock: true,
    description:
      "A three-tier corner caddy that mounts with heavy-duty suction cups strong enough for full shampoo and conditioner bottles, with no drilling or adhesive residue. Rust-proof construction and slotted shelves let water drain straight through instead of pooling.",
  },
  {
    name: "Non-Slip Diatomite Quick-Dry Bath Mat",
    price: 26,
    category: "Bathroom Accessories",
    detail: "Absorbs in seconds, non-slip base",
    inStock: true,
    description:
      "A diatomaceous earth mat that soaks up standing water in seconds and dries to the touch almost as fast, so it never turns into the damp, mildew-prone mat sitting by the tub. A textured non-slip base keeps it planted on tile.",
  },
  {
    name: "Bamboo Expandable Dish Rack",
    price: 36,
    category: "Kitchen & Dining",
    detail: "Extends 12in–20in, removable tray",
    inStock: true,
    popular: true,
    description:
      "A dish rack built from sealed bamboo that expands from a compact 12 inches to a full 20 inches when you're working through a big wash. A removable drip tray catches runoff and lifts out for an easy wipe-down, and integrated slots keep cutting boards upright.",
  },
  {
    name: "Silicone Kitchen Utensil Organizer Set",
    price: 22,
    category: "Kitchen & Dining",
    detail: "5-piece, heat-resistant to 450°F",
    inStock: true,
    description:
      "A five-piece set of silicone-headed turners, spoons and a spatula, all heat-resistant to 450°F and gentle enough for non-stick pans. Each handle has a built-in hook so the whole set hangs neatly on a rail instead of cluttering a drawer.",
  },
  {
    name: "Airtight Glass Food Storage Containers",
    price: 38,
    category: "Kitchen & Dining",
    detail: "5-piece set with locking lids",
    inStock: true,
    description:
      "Borosilicate glass containers in five useful sizes, each sealed with a locking, leak-proof lid. Oven, microwave, freezer and dishwasher safe, and the glass itself won't hold onto stains or smells the way plastic containers do over time.",
  },
  {
    name: "Silicone Trivet & Pot Holder Set",
    price: 21,
    category: "Kitchen & Dining",
    detail: "4-piece, heat-resistant to 500°F",
    inStock: true,
    description:
      "Four flexible silicone trivets that protect countertops from hot pots, pans and dishes straight off the stove or out of the oven, rated to 500°F. They fold flat for storage and double as jar openers or non-slip pan grips in a pinch.",
  },
  {
    name: "Bamboo Cutting Board with Juice Groove",
    price: 27,
    category: "Kitchen & Dining",
    detail: "Reversible, 18in x 12in",
    inStock: true,
    description:
      "A generously sized reversible bamboo board with a routed juice groove on one face to catch runoff from meat and produce, and a flat clean face for everyday chopping. Bamboo's natural density is gentler on knife edges than harder hardwoods.",
  },
  {
    name: "Foldable Fabric Storage Bins",
    price: 29,
    category: "Storage & Organization",
    detail: "Set of 3, reinforced handles",
    inStock: true,
    popular: true,
    description:
      "Three collapsible storage bins in a sturdy linen-look fabric over a reinforced frame, so they hold their shape fully loaded but fold flat in seconds when they're empty. Cut-out handles make them easy to pull from a closet shelf or under a bed.",
  },
  {
    name: "Over-the-Door Hanging Organizer",
    price: 25,
    category: "Storage & Organization",
    detail: "24 pockets, no-drill door mount",
    inStock: true,
    description:
      "A 24-pocket canvas organizer that hangs straight over any standard door with no drilling, giving you clear, see-through storage for anything from toiletries and accessories to pantry snacks and cleaning supplies.",
  },
  {
    name: "Stackable Closet Drawer Organizers",
    price: 32,
    category: "Storage & Organization",
    detail: "6-piece modular tray set",
    inStock: true,
    description:
      "Six modular trays in graduated sizes that stack, nest or sit side by side to fit almost any drawer. Built to keep folded clothing, accessories or office supplies from sliding into a jumbled pile every time the drawer opens.",
  },
  {
    name: "Woven Seagrass Storage Basket",
    price: 30,
    category: "Storage & Organization",
    detail: "Handwoven, with liner, large",
    inStock: true,
    description:
      "A large handwoven seagrass basket with sturdy carry handles and a soft cotton liner inside, built for laundry, throws, toys or firewood. The natural weave brings texture to a shelf or floor corner without looking like storage at all.",
  },
  {
    name: "Ceramic Table Vase Set",
    price: 33,
    category: "Home Decor",
    detail: "2-piece, matte glaze",
    inStock: true,
    description:
      "A pair of matte-glazed ceramic vases in complementary heights, equally at home holding fresh stems, dried grasses, or standing empty as a quiet sculptural pair on a console or dining table.",
  },
  {
    name: "Scented Soy Candle Trio",
    price: 28,
    category: "Home Decor",
    detail: "3 x 8oz, 40hr burn each",
    inStock: true,
    popular: true,
    description:
      "Three hand-poured soy candles in a rotating set of warm, layered scents, each rated for roughly 40 hours of clean, soot-light burn time. Cotton wicks and a reusable glass vessel make these worth keeping around after the wax is gone.",
  },
  {
    name: "LED Cordless Table Lamp",
    price: 39,
    category: "Home Decor",
    detail: "Rechargeable, 3 brightness levels",
    inStock: true,
    description:
      "A rechargeable LED lamp with a touch-dimmable base offering three brightness levels, so it moves freely from a bedside table to a dinner table to a balcony without hunting for an outlet. A single charge runs for hours on the lowest setting.",
  },
  {
    name: "Woven Cotton Throw Blanket",
    price: 37,
    category: "Home Decor",
    detail: "50in x 60in, pure cotton",
    inStock: true,
    description:
      "A generously sized cotton throw in a soft waffle weave, substantial enough to keep the chill off on the sofa yet breathable enough for year-round use. Machine washable and only gets softer with time.",
  },
  {
    name: "Microfiber Cleaning Cloth Set",
    price: 20,
    category: "Cleaning Essentials",
    detail: "12-pack, lint-free, reusable",
    inStock: true,
    description:
      "A twelve-pack of lint-free microfiber cloths that lift dust, grease and streaks without chemical cleaners on glass, screens, countertops or cars. Machine washable hundreds of times over, so one pack replaces a mountain of paper towels.",
  },
  {
    name: "Multi-Surface Spray Bottle Set",
    price: 24,
    category: "Cleaning Essentials",
    detail: "3 x refillable 500ml bottles",
    inStock: true,
    description:
      "Three refillable, chemical-resistant spray bottles with adjustable nozzles, made for mixing and storing your own multi-surface, glass and bathroom cleaning solutions. Clear bodies and a write-on label panel keep contents easy to identify.",
  },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[()'°]/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const SLUG_OVERRIDES: Record<string, string> = {
  "Toothpaste Press, Extruder & Dispenser Clip": "dark-blue-toothpaste-dispenser-clip",
  "4-Piece Ceramic Bathroom Accessory Set": "ceramic-bathroom-accessory-set",
  "Bamboo Toilet Paper Holder with Shelf": "bamboo-toilet-paper-holder",
  "Suction Cup Corner Shower Caddy": "suction-corner-shower-caddy",
  "Non-Slip Diatomite Quick-Dry Bath Mat": "diatomite-quick-dry-bath-mat",
  "Bamboo Expandable Dish Rack": "bamboo-expandable-dish-rack",
  "Silicone Kitchen Utensil Organizer Set": "silicone-utensil-organizer-set",
  "Airtight Glass Food Storage Containers": "airtight-glass-food-containers",
  "Silicone Trivet & Pot Holder Set": "silicone-trivet-pot-holder-set",
  "Bamboo Cutting Board with Juice Groove": "bamboo-cutting-board-juice-groove",
  "Foldable Fabric Storage Bins": "foldable-fabric-storage-bins",
  "Over-the-Door Hanging Organizer": "over-door-hanging-organizer",
  "Stackable Closet Drawer Organizers": "stackable-drawer-organizers",
  "Woven Seagrass Storage Basket": "woven-seagrass-storage-basket",
  "Ceramic Table Vase Set": "ceramic-table-vase-set",
  "Scented Soy Candle Trio": "scented-soy-candle-trio",
  "LED Cordless Table Lamp": "led-cordless-table-lamp",
  "Woven Cotton Throw Blanket": "woven-cotton-throw-blanket",
  "Microfiber Cleaning Cloth Set": "microfiber-cleaning-cloth-set",
  "Multi-Surface Spray Bottle Set": "multi-surface-spray-bottle-set",
};

export const products: Product[] = seeds.map((seed, index) => {
  const slug = SLUG_OVERRIDES[seed.name] ?? slugify(seed.name);
  return {
    id: index + 1,
    name: seed.name,
    slug,
    price: seed.price,
    category: seed.category,
    detail: seed.detail,
    inStock: seed.inStock,
    popular: seed.popular,
    image: `/products/${slug}.jpg`,
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
