export type Category =
  | "Kitchen & Dining"
  | "Small Appliances"
  | "Home & Living"
  | "Audio & Accessories"
  | "Smart Gadgets";

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
  "Small Appliances",
  "Home & Living",
  "Audio & Accessories",
  "Smart Gadgets",
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
  // ---------------------------------------------------------- Kitchen & Dining
  {
    name: "Stainless Steel Electric Kettle",
    price: 28,
    category: "Kitchen & Dining",
    popular: true,
    description:
      "A 1.7-litre brushed-steel kettle with a concealed heating element and rapid boil-dry shutoff. The wide spout pours cleanly without dribbling down the side, and the cool-touch handle stays comfortable even a minute after boiling. Sits flush on its 360-degree cordless base so you can lift and pour from any angle.",
  },
  {
    name: "Compact Espresso Maker",
    price: 38,
    category: "Kitchen & Dining",
    description:
      "A single-boiler espresso maker sized for a small kitchen counter, with a 15-bar pump strong enough for a proper crema without the footprint of a full machine. The steam wand froths a single cup of milk in under twenty seconds, and the drip tray lifts out in one piece for a quick rinse.",
  },
  {
    name: "Nonstick Ceramic Frying Pan Set",
    price: 34,
    category: "Kitchen & Dining",
    description:
      "Two ceramic-coated frying pans — 20cm and 26cm — built on a heavy aluminium base that spreads heat evenly and holds it through a full stir-fry. The coating is PFOA-free and releases food without needing much oil, and both pans work on gas, electric and induction hobs.",
  },
  {
    name: "Glass Food Storage Set (10-Piece)",
    price: 26,
    category: "Kitchen & Dining",
    description:
      "Five borosilicate glass containers with snap-lock lids in a range of sizes, from a small dip pot to a full meal-prep tray. The glass goes straight from fridge to microwave to oven without staining or holding onto smells, and the lids seal tightly enough to stack a full set on their side.",
  },
  {
    name: "Digital Kitchen Scale",
    price: 22,
    category: "Kitchen & Dining",
    description:
      "A slimline scale that weighs up to 5kg in 1-gram increments, with a tare button that lets you add several ingredients to the same bowl without doing the maths yourself. The backlit display is easy to read at counter height, and it folds flat for a narrow drawer.",
  },
  {
    name: "Stackable Bamboo Cutting Board Set",
    price: 24,
    category: "Kitchen & Dining",
    description:
      "Three bamboo boards in graduated sizes with juice grooves along one edge and a finger notch for easy lifting. Bamboo is naturally more resistant to knife scarring and odour than softer woods, and the set stores upright in the included stand rather than taking up drawer space.",
  },

  // -------------------------------------------------------- Small Appliances
  {
    name: "2-Slice Wide Slot Toaster",
    price: 32,
    category: "Small Appliances",
    popular: true,
    description:
      "Extra-wide slots fit thick artisan bread and English muffins without needing a second pass, and seven browning levels take it from a light warm-through to a deep crunch. A dedicated defrost setting and a removable crumb tray round out the everyday features.",
  },
  {
    name: "Handheld Immersion Blender",
    price: 29,
    category: "Small Appliances",
    description:
      "A stick blender with a stainless steel shaft that goes straight into the soup pot, plus a whisk and a small chopping bowl attachment for garlic and herbs. Two speeds and a splash guard on the blending head keep it controllable in a shallow pan.",
  },
  {
    name: "Compact Air Fryer (2.5L)",
    price: 39,
    category: "Small Appliances",
    popular: true,
    description:
      "A single-basket air fryer sized for one or two people, with a rapid-air system that gets a small batch of fries genuinely crisp in under fifteen minutes. The dial controls are simple to operate without a manual, and the basket and pan are dishwasher safe.",
  },
  {
    name: "Portable Steam Iron",
    price: 27,
    category: "Small Appliances",
    description:
      "A lightweight iron with a ceramic soleplate that glides over cotton and linen without dragging, and a variable steam dial for anything from a quick touch-up to a heavy crease. The self-clean function flushes mineral buildup out of the vents before it can stain fabric.",
  },
  {
    name: "Mini Rice Cooker (3-Cup)",
    price: 31,
    category: "Small Appliances",
    description:
      "A one-touch rice cooker sized for a small household, with a nonstick inner pot and a keep-warm mode that switches on automatically once cooking finishes. The included steamer tray lets you cook vegetables over the rice at the same time.",
  },
  {
    name: "Personal Blender Bottle Set",
    price: 23,
    category: "Small Appliances",
    description:
      "A compact blender built around two travel bottles with flip-top lids, so a smoothie or shake blends and pours from the same container. The motor base is small enough to store in a cupboard and powerful enough to crush ice without stalling.",
  },

  // -------------------------------------------------------------- Home & Living
  {
    name: "LED Desk Lamp with USB Port",
    price: 25,
    category: "Home & Living",
    popular: true,
    description:
      "A flexible-arm desk lamp with five brightness levels and three colour temperatures, from a warm reading glow to a cool daylight setting for close work. A built-in USB port on the base keeps a phone charged without needing a second outlet.",
  },
  {
    name: "Tower Fan with Remote",
    price: 37,
    category: "Home & Living",
    description:
      "A slim oscillating tower fan with three speeds and a built-in timer, quiet enough to run overnight in a bedroom. The remote control means you're not reaching down to the base to adjust it, and the slim footprint fits into a corner without becoming an obstacle.",
  },
  {
    name: "Aroma Diffuser & Humidifier",
    price: 28,
    category: "Home & Living",
    description:
      "An ultrasonic diffuser that runs for up to eight hours on a single fill, cycling through a soft colour-changing light or holding steady on one tone. A few drops of oil in the water tank is enough to fill a mid-sized room without becoming overpowering.",
  },
  {
    name: "Cordless Handheld Vacuum",
    price: 40,
    category: "Home & Living",
    popular: true,
    description:
      "A rechargeable handheld vacuum built for crumbs, pet hair and car interiors rather than whole-room cleaning, with a washable filter and a narrow crevice tool included. A full charge runs for around twenty minutes of continuous suction.",
  },
  {
    name: "Memory Foam Lumbar Cushion",
    price: 21,
    category: "Home & Living",
    description:
      "A curved memory-foam cushion that straps onto a desk or car seat to support the lower back through a long day of sitting. The cover unzips for a cold wash, and the foam holds its shape rather than flattening out after a few weeks of use.",
  },
  {
    name: "Blackout Curtain Pair (2 Panels)",
    price: 30,
    category: "Home & Living",
    description:
      "Two triple-weave panels that block outside light and dampen street noise more effectively than a standard curtain, without needing a separate liner. The grommet top slides easily along most standard rods, and the fabric resists creasing in storage.",
  },

  // ---------------------------------------------------------- Audio & Accessories
  {
    name: "Over-Ear Wireless Headphones",
    price: 36,
    category: "Audio & Accessories",
    popular: true,
    description:
      "Padded over-ear cups and a Bluetooth connection good for around 20 hours of playback on a single charge, with physical buttons on the earcup for volume and calls rather than a touch surface. The headband folds flat into the included pouch for travel.",
  },
  {
    name: "Portable Bluetooth Speaker",
    price: 30,
    category: "Audio & Accessories",
    description:
      "A palm-sized speaker with a splash-resistant shell, rated for around ten hours of playback and loud enough to fill a single room without distortion. Two units can be paired together for stereo sound, and a built-in mic handles hands-free calls.",
  },
  {
    name: "True Wireless Earbuds",
    price: 27,
    category: "Audio & Accessories",
    description:
      "A pair of in-ear earbuds with a compact charging case that adds several extra charges on top of the buds' own battery. Touch controls on each bud handle play, skip and calls, and three sizes of ear tip are included for a secure fit.",
  },
  {
    name: "USB-C Fast Charging Hub (6-in-1)",
    price: 24,
    category: "Audio & Accessories",
    description:
      "A single USB-C hub that breaks out into HDMI, two USB-A ports, an SD card reader and pass-through charging, useful for turning a laptop into a mini workstation. The aluminium body stays cool under sustained data transfer.",
  },
  {
    name: "Wireless Charging Pad",
    price: 20,
    category: "Audio & Accessories",
    description:
      "A flat charging pad that powers most Qi-compatible phones through their case, with an LED ring that dims once the phone is fully charged rather than staying lit overnight. The non-slip base keeps the phone from sliding off during a call.",
  },
  {
    name: "Bluetooth Neckband Earphones",
    price: 23,
    category: "Audio & Accessories",
    description:
      "A lightweight neckband that keeps the earbuds within reach when you're not using them, with magnetic tips that clip together and pause playback automatically. Around eight hours of playback on a charge makes it a reasonable fit for a full workday.",
  },

  // -------------------------------------------------------------- Smart Gadgets
  {
    name: "Smart Plug (2-Pack, WiFi)",
    price: 22,
    category: "Smart Gadgets",
    popular: true,
    description:
      "Two WiFi-enabled plugs that turn any lamp or small appliance into something you can schedule or switch from a phone app, no separate hub required. Voice control works with most major assistants, and each plug reports basic energy use over time.",
  },
  {
    name: "Digital Photo Frame (10-inch)",
    price: 39,
    category: "Smart Gadgets",
    description:
      "A 10-inch WiFi photo frame that lets family upload photos directly from their own phones without needing a shared account. The screen adjusts brightness to the room automatically, and photos can be set to rotate on a schedule you choose.",
  },
  {
    name: "Smart LED Light Strip (5m)",
    price: 26,
    category: "Smart Gadgets",
    description:
      "A 5-metre RGB light strip that sticks along a shelf, desk or TV unit and syncs colour changes to music or a chosen scene through the companion app. Cuttable at marked points, it can be trimmed to fit a specific run without extra hardware.",
  },
  {
    name: "Video Doorbell Camera",
    price: 40,
    category: "Smart Gadgets",
    popular: true,
    description:
      "A WiFi doorbell camera with motion-triggered alerts and two-way audio, so you can see and speak to whoever's at the door from a phone anywhere. Night vision keeps footage usable after dark, and it installs with the included screws or an adhesive mount.",
  },
  {
    name: "Mini Portable Projector",
    price: 38,
    category: "Smart Gadgets",
    description:
      "A pocket-sized projector that throws a watchable image up to 100 inches from across a small room, with a built-in speaker so it works without a separate sound system. HDMI and USB inputs cover most streaming sticks and laptops directly.",
  },
  {
    name: "Smart Power Strip with USB",
    price: 25,
    category: "Smart Gadgets",
    description:
      "A surge-protected power strip with four smart-app-controlled outlets, two always-on sockets and a pair of USB ports for everyday charging. Each smart outlet can be scheduled or switched individually, useful for a cluster of devices behind a TV or desk.",
  },
];

export const products: Product[] = seeds.map((seed, index) => {
  const slug = seed.name
    .toLowerCase()
    .replace(/[()]/g, "")
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
