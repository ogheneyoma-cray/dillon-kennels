export type Category =
  | "Kitchen & Dining"
  | "Cleaning & Laundry"
  | "Bed & Bath"
  | "Storage & Organization"
  | "Lighting & Decor";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Kitchen & Dining",
  "Cleaning & Laundry",
  "Bed & Bath",
  "Storage & Organization",
  "Lighting & Decor",
];

interface Seed {
  name: string;
  price: number;
  category: Category;
  description: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  // ------------------------------------------------------------- Kitchen & Dining
  {
    name: "Bamboo Cutting Board Set (3-Piece)",
    price: 24,
    category: "Kitchen & Dining",
    popular: true,
    description:
      "Three end-grain bamboo boards in small, medium and large, sized for everything from a quick lime slice to a full Sunday prep session. Bamboo is naturally harder than most cutting-board woods, so it resists deep knife grooves and holds up to years of daily chopping without warping. Each board has a routed juice groove around the edge and a hanging hole for upright storage between uses.",
  },
  {
    name: "Ceramic Mixing Bowl Set (5-Piece)",
    price: 32,
    category: "Kitchen & Dining",
    description:
      "Five nesting ceramic bowls that stack into a single column on a shelf, sized from a small dressing bowl up to a full salad-serving bowl. The glazed interior won't hold onion or garlic smells the way plastic can, and every bowl is oven, microwave, and dishwasher safe. A wide non-slip base keeps whisking one-handed without the bowl sliding across the counter.",
  },
  {
    name: "Glass Meal Prep Containers (10-Piece)",
    price: 28,
    category: "Kitchen & Dining",
    popular: true,
    description:
      "Five borosilicate glass containers with snap-lock lids, sized for weekday lunches and portioned leftovers. Glass doesn't absorb sauce stains or hold onto smells the way plastic containers do over time, and every container goes straight from fridge to microwave to dishwasher without a lid swap. The lids seal tight enough to pack in a bag without leaking.",
  },
  {
    name: "Stainless Steel Measuring Cups & Spoons Set",
    price: 21,
    category: "Kitchen & Dining",
    description:
      "A full set of nesting measuring cups and spoons in heavy-gauge stainless steel, with measurements stamped directly into the handle so they never wash off or wear away. Each piece clips onto a single ring for one-motion storage in a drawer, and the flat-back spoon design lets you level ingredients straight into the mixing bowl.",
  },
  {
    name: "Nonstick Baking Sheet Set (3-Piece)",
    price: 27,
    category: "Kitchen & Dining",
    description:
      "Three carbon-steel baking sheets in half, quarter and cookie-sheet sizes, coated in a PFOA-free nonstick finish that browns evenly without hot spots. The rolled edges keep the sheets from warping under high oven heat, and food releases clean enough that most bakes need little more than a wipe-down afterward.",
  },
  {
    name: "Marble Pastry Board with Rolling Pin",
    price: 35,
    category: "Kitchen & Dining",
    description:
      "A polished marble slab that stays naturally cool to the touch, which keeps butter-based pastry dough workable for longer than it would on a warm wooden counter. The matching hardwood rolling pin has tapered ends for even pressure across a full sheet of dough, and the board doubles as a serving slab for cheese or charcuterie.",
  },

  // -------------------------------------------------------- Cleaning & Laundry
  {
    name: "Microfiber Cleaning Cloth Set (12-Pack)",
    price: 22,
    category: "Cleaning & Laundry",
    description:
      "Twelve lint-free microfiber cloths that lift dust, grease and streaks without needing a spray for most everyday cleaning. The dense weave holds several times its weight in liquid, so one cloth handles a full countertop wipe-down, and every cloth is machine washable hundreds of times before it loses its grip.",
  },
  {
    name: "Foldable Laundry Hamper (2-Section)",
    price: 29,
    category: "Cleaning & Laundry",
    popular: true,
    description:
      "A two-compartment hamper that keeps lights and darks separate from the moment clothes go in, so wash day starts already sorted. The reinforced steel frame folds flat for storage when it's not in use, and both fabric liners lift out with side handles to carry straight to the machine without a second bag.",
  },
  {
    name: "Spin Mop and Bucket System",
    price: 38,
    category: "Cleaning & Laundry",
    popular: true,
    description:
      "A foot-pedal spin bucket that wrings the microfiber mop head nearly dry with a few pumps, so floors dry faster and streak less than with a hand-wrung mop. The bucket has a built-in dirty-water separator to keep rinse water cleaner for longer, and the mop head is machine washable rather than disposable.",
  },
  {
    name: "Collapsible Clothes Drying Rack",
    price: 26,
    category: "Cleaning & Laundry",
    description:
      "A rust-resistant steel drying rack with three tiers that fold flat against the frame for storage behind a door or in a cupboard. It holds a full load of laundry across the top bars and side wings, and the coated mesh surface leaves no wire marks on drying knitwear.",
  },
  {
    name: "Lint Remover & Fabric Shaver",
    price: 20,
    category: "Cleaning & Laundry",
    description:
      "A battery-powered fabric shaver that lifts pilling from sweaters, upholstery and blankets without snagging the weave underneath, thanks to a depth-adjustable head and a rounded safety guard. The shavings collect in a clear bin that pops off for a quick empty, and one guard set lasts through months of regular use.",
  },
  {
    name: "Multi-Surface Cleaning Caddy",
    price: 23,
    category: "Cleaning & Laundry",
    description:
      "A divided plastic caddy that keeps sprays, cloths and gloves organized and carries in one hand from room to room, rather than making three trips under the sink. The center handle is rated for a full load of cleaning supplies, and the base has raised feet so it doesn't sit in any spilled liquid on the counter.",
  },

  // --------------------------------------------------------------- Bed & Bath
  {
    name: "Egyptian Cotton Bath Towel Set (6-Piece)",
    price: 34,
    category: "Bed & Bath",
    popular: true,
    description:
      "Two bath towels, two hand towels and two washcloths woven from long-staple Egyptian cotton at a dense 600 GSM, so they stay plush and absorbent wash after wash instead of thinning out. The tight weave dries faster than average between uses, which helps the set resist the mildew smell that lower-quality towels pick up in humid bathrooms.",
  },
  {
    name: "Memory Foam Bath Mat Set (2-Piece)",
    price: 25,
    category: "Bed & Bath",
    description:
      "Two memory-foam bath mats that cushion bare feet on cold tile and rebound to shape after every step, rather than staying flattened like a basic cotton mat. A textured non-slip backing grips tile and vinyl floors securely, and the flannel top layer absorbs water quickly enough to keep the floor around it dry.",
  },
  {
    name: "Waterproof Mattress Protector (Queen)",
    price: 32,
    category: "Bed & Bath",
    description:
      "A queen-size fitted protector with a breathable waterproof membrane that blocks spills and moisture from reaching the mattress without the plastic crinkle or heat trap of cheaper covers. Deep pockets stretch to fit mattresses up to 16 inches thick, and the whole cover is machine washable and dryer safe.",
  },
  {
    name: "Silk-Feel Pillowcase Set (2-Piece)",
    price: 22,
    category: "Bed & Bath",
    description:
      "Two pillowcases in a smooth silk-feel satin weave that reduces the friction on hair and skin overnight compared with standard cotton, so less product transfers and fewer sleep creases set in. The hidden-zip closures keep pillows fully covered through the night, and the fabric stays cool to the touch even in a warm room.",
  },
  {
    name: "Rust-Proof Shower Caddy",
    price: 24,
    category: "Bed & Bath",
    popular: true,
    description:
      "A stainless-steel shower caddy that hangs from the showerhead arm with no drilling or adhesive, holding four shelves of bottles, soap and razors at different heights so nothing crowds together. The rust-proof finish is built for constant water exposure, and every shelf has a raised lip to stop bottles sliding off during a shower.",
  },
  {
    name: "Weighted Throw Blanket",
    price: 39,
    category: "Bed & Bath",
    description:
      "A 12-pound weighted throw filled with evenly distributed glass beads stitched into a quilted grid, so the weight stays spread out instead of pooling at one end. The outer layer is a brushed minky fabric that stays soft after repeated washing, and the size works equally well on a sofa or draped over a bed for sleep.",
  },

  // ------------------------------------------------------ Storage & Organization
  {
    name: "Stackable Closet Organizer Bins (6-Piece)",
    price: 30,
    category: "Storage & Organization",
    popular: true,
    description:
      "Six clear plastic bins with snap-on lids that stack securely on a closet shelf, so folded sweaters, accessories or off-season clothes stay dust-free and visible without unstacking the whole column to find one item. Cut-out handles on both ends make them easy to pull down one-handed even from a high shelf.",
  },
  {
    name: "Under-Bed Storage Bags (2-Piece)",
    price: 23,
    category: "Storage & Organization",
    description:
      "Two low-profile zippered bags built to slide flat under a bed frame, reclaiming space that usually goes to waste for out-of-season bedding or shoes. The reinforced base and clear vinyl top let you see the contents without unzipping, and sturdy carry handles make it easy to pull the bag out when you need it.",
  },
  {
    name: "Over-the-Door Shoe Organizer",
    price: 21,
    category: "Storage & Organization",
    description:
      "A 24-pocket fabric organizer that hangs over a standard door with no tools required, turning an unused surface into shoe storage that keeps pairs visible and off the closet floor. The mesh pockets breathe better than solid vinyl, so damp or muddy shoes can dry without trapping odor inside the pocket.",
  },
  {
    name: "Vacuum Storage Bags (8-Piece)",
    price: 20,
    category: "Storage & Organization",
    description:
      "Eight resealable bags that compress bulky duvets, winter coats and blankets down to a fraction of their packed size once the air is drawn out with a household vacuum hose. The double-zip seal and triple-layer material keep moisture and dust out during long-term storage, whether that's a closet shelf or under the bed.",
  },
  {
    name: "Kitchen Pantry Storage Set (10-Piece)",
    price: 33,
    category: "Storage & Organization",
    description:
      "Ten airtight canisters in three sizes that keep flour, rice, pasta and cereal fresher for longer than their original bags, with a silicone-sealed clip lid that locks out humidity and pantry moths. The square shape uses shelf space more efficiently than round jars, and each lid includes a spot for a write-on label.",
  },
  {
    name: "Bamboo Drawer Organizer Tray Set",
    price: 26,
    category: "Storage & Organization",
    description:
      "An expandable bamboo tray set with adjustable dividers that fit drawers from narrow to extra-wide, keeping cutlery, utensils or office supplies from sliding into a jumbled pile every time the drawer opens. The natural bamboo finish resists warping from drawer moisture better than painted wood alternatives.",
  },

  // -------------------------------------------------------------- Lighting & Decor
  {
    name: "Rattan Table Lamp with Linen Shade",
    price: 37,
    category: "Lighting & Decor",
    popular: true,
    description:
      "A hand-woven rattan base topped with a natural linen drum shade, casting a warm, softened light that suits a bedside table or reading corner better than an exposed bulb. The woven base lets a little light escape through the sides for a gentle ambient glow even before the lamp is switched fully on, and it ships with a dimmable-compatible socket.",
  },
  {
    name: "Ceramic Vase Set (3-Piece)",
    price: 28,
    category: "Lighting & Decor",
    description:
      "Three matte-glazed ceramic vases in graduated heights, designed to be grouped together on a console or shelf for an instant styled vignette. Each vase has a wide enough mouth for a loose stem arrangement or to stand alone as a sculptural object, and the weighted base keeps taller stems from tipping.",
  },
  {
    name: "Round Rattan Wall Mirror",
    price: 36,
    category: "Lighting & Decor",
    popular: true,
    description:
      "A circular mirror framed in woven rattan, sized to anchor an entryway or living room wall without overwhelming a smaller space. The frame is lightweight enough to hang from a single picture hook, and the natural texture pairs easily with both warm wood tones and painted walls.",
  },
  {
    name: "Decorative Throw Pillow Covers (4-Piece)",
    price: 25,
    category: "Lighting & Decor",
    description:
      "Four 18-inch pillow covers in a coordinated set of textures and tones, with hidden zip closures that keep the look clean on a sofa or bed. The covers slip over any standard insert and machine wash separately from the filling, making it easy to refresh a room's look without replacing whole pillows.",
  },
  {
    name: "Battery LED Candle Set (6-Piece)",
    price: 22,
    category: "Lighting & Decor",
    description:
      "Six flameless LED candles in mixed heights with a realistic flicker effect, built from real wax so they look and feel like genuine candles without the fire risk around curtains, pets or kids. A built-in timer switches the set on and off at the same time every day, and each candle runs for weeks on its included batteries.",
  },
  {
    name: "Woven Storage Basket with Handles",
    price: 27,
    category: "Lighting & Decor",
    description:
      "A sturdy woven basket with reinforced handles, equally suited to corralling throw blankets in the living room or magazines beside a reading chair. The tight natural weave holds its shape without a liner, and the earthy tone sits comfortably next to most existing furniture and decor.",
  },
];

export const products: Product[] = seeds.map((seed, index) => {
  const slug = seed.name
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    id: index + 1,
    slug,
    name: seed.name,
    price: seed.price,
    description: seed.description,
    image: `/products/${slug}.jpg`,
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
