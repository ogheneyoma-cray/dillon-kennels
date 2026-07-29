export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // USD
  description: string;
  image: string;
  category:
    | "Tees"
    | "Shirts"
    | "Outerwear"
    | "Bottoms"
    | "Knitwear"
    | "Footwear"
    | "Accessories";
  inStock: boolean;
}

export const products: Product[] = [
  // Tees & Graphic Tops
  {
    id: 1,
    name: "Bold Print Oversized Tee",
    slug: "bold-print-oversized-tee",
    price: 24,
    category: "Tees",
    inStock: true,
    image: "/vergemind/bold-print-oversized-tee.jpg",
    description:
      "A heavyweight 240gsm cotton tee with an oversized drop-shoulder fit and a bold abstract print across the chest. Garment-washed for a broken-in feel straight out of the bag, with a ribbed crew neck that holds its shape wash after wash.",
  },
  {
    id: 2,
    name: "Statement Graphic Tee",
    slug: "statement-graphic-tee",
    price: 25,
    category: "Tees",
    inStock: true,
    image: "/vergemind/statement-graphic-tee.jpg",
    description:
      "Cut from soft-hand combed cotton with a relaxed boxy fit, this tee carries a large front graphic printed with water-based ink that won't crack or fade. Built to be the anchor piece under a jacket or worn solo.",
  },
  {
    id: 3,
    name: "Text Print Oversized Tee",
    slug: "text-print-oversized-tee",
    price: 23,
    category: "Tees",
    inStock: true,
    image: "/vergemind/text-print-oversized-tee.jpg",
    description:
      "A dropped-shoulder oversized tee with bold typographic print down the chest. The extended hem and wide sleeve give it a modern silhouette that layers cleanly under outerwear.",
  },
  {
    id: 4,
    name: "Studio Print Tee",
    slug: "studio-print-tee",
    price: 22,
    category: "Tees",
    inStock: true,
    image: "/vergemind/studio-print-tee.jpg",
    description:
      "A clean studio-style graphic tee in mid-weight cotton jersey, cut with a true-to-size fit and a durable rib collar. An everyday tee designed to hold its shape through repeated wear and wash.",
  },
  {
    id: 5,
    name: "Street Layer Tee",
    slug: "street-layer-tee",
    price: 22,
    category: "Tees",
    inStock: true,
    image: "/vergemind/street-layer-tee.jpg",
    description:
      "Built specifically as a layering piece, this tee sits close to the body under a hoodie or jacket without adding bulk. Soft cotton-blend jersey with a longer body length keeps it tucked in through movement.",
  },
  {
    id: 6,
    name: "Monochrome Print Tee",
    slug: "monochrome-print-tee",
    price: 24,
    category: "Tees",
    inStock: true,
    image: "/vergemind/monochrome-print-tee.jpg",
    description:
      "A relaxed-fit tee in a single-tone colorway with a subtle tonal print, designed to work as a quiet basic or a standout piece depending on how you style it. Pre-shrunk cotton means the fit you buy is the fit that stays.",
  },
  {
    id: 7,
    name: "Lab Hero Graphic Tee",
    slug: "lab-hero-graphic-tee",
    price: 25,
    category: "Tees",
    inStock: true,
    image: "/vergemind/lab-hero-graphic-tee.jpg",
    description:
      "A black cotton tee with an oversized front graphic and a slightly cropped, boxy body. Reinforced shoulder seams and a heavyweight rib collar are built to survive daily rotation.",
  },
  {
    id: 8,
    name: "Message Oversized Tee",
    slug: "message-oversized-tee",
    price: 23,
    category: "Tees",
    inStock: true,
    image: "/vergemind/message-oversized-tee.jpg",
    description:
      "An oversized tee with a bold statement print and dropped shoulders for a relaxed, streetwear-forward silhouette. Made from a heavyweight cotton that resists pilling far longer than standard tees.",
  },
  {
    id: 9,
    name: "White Canvas Print Tee",
    slug: "white-canvas-print-tee",
    price: 22,
    category: "Tees",
    inStock: true,
    image: "/vergemind/white-canvas-print-tee.jpg",
    description:
      "A crisp white tee treated as a blank canvas for a bold graphic print, cut from a substantial cotton that stays opaque wash after wash. The one tee that pairs with literally everything in the closet.",
  },
  {
    id: 10,
    name: "Coffee Quote Tee",
    slug: "coffee-quote-tee",
    price: 22,
    category: "Tees",
    inStock: true,
    image: "/vergemind/coffee-quote-tee.jpg",
    description:
      "A soft-washed cotton tee with a playful printed quote across the chest, cut for a true-to-size, everyday fit. Simple enough for the office under a shirt, loud enough to wear alone on the weekend.",
  },

  // Shirts
  {
    id: 11,
    name: "Checkered Weekend Shirt",
    slug: "checkered-weekend-shirt",
    price: 28,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/checkered-weekend-shirt.jpg",
    description:
      "A brushed cotton check shirt with a relaxed fit and a single chest pocket, built for cooler weekends. Wear it buttoned to the collar or open over a plain tee — the flannel-weight fabric holds up to both.",
  },
  {
    id: 12,
    name: "Denim Attire Shirt",
    slug: "denim-attire-shirt",
    price: 30,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/denim-attire-shirt.jpg",
    description:
      "A mid-wash denim shirt with a classic collar and a button-through front, cut from a lighter-weight denim so it works as a shirt rather than a jacket. Pairs cleanly with chinos or straight-leg denim.",
  },
  {
    id: 13,
    name: "Crimson Polo Shirt",
    slug: "crimson-polo-shirt",
    price: 26,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/crimson-polo-shirt.jpg",
    description:
      "A pique-cotton polo in a saturated crimson red with a ribbed collar and two-button placket. Structured enough to look sharp tucked in, relaxed enough to wear untucked with denim.",
  },
  {
    id: 14,
    name: "Check Flannel Shirt",
    slug: "check-flannel-shirt",
    price: 29,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/check-flannel-shirt.jpg",
    description:
      "A brushed flannel shirt in a classic check pattern, built with a slightly boxy fit for easy layering. The napped cotton surface adds warmth without adding bulk under a jacket.",
  },
  {
    id: 15,
    name: "Print Statement Shirt",
    slug: "print-statement-shirt",
    price: 27,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/print-statement-shirt.jpg",
    description:
      "A short-sleeve shirt in a bold all-over print, cut from a lightweight woven that breathes in warm weather. The kind of shirt built to be the loudest thing in the room without trying too hard.",
  },
  {
    id: 16,
    name: "Floral Studio Shirt",
    slug: "floral-studio-shirt",
    price: 28,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/floral-studio-shirt.jpg",
    description:
      "A relaxed-fit shirt in a subtle floral print on a lightweight woven base, finished with a camp collar that works open over a tee. Built for warm-weather evenings out.",
  },
  {
    id: 17,
    name: "Classic Polo Set",
    slug: "classic-polo-set",
    price: 25,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/classic-polo-set.jpg",
    description:
      "A timeless pique polo cut from breathable cotton with a two-button placket and ribbed collar and cuffs. A wardrobe fundamental that works from the office to the golf course to the weekend.",
  },
  {
    id: 18,
    name: "Crimson Portrait Shirt",
    slug: "crimson-portrait-shirt",
    price: 27,
    category: "Shirts",
    inStock: true,
    image: "/vergemind/crimson-portrait-shirt.jpg",
    description:
      "A structured red shirt with a clean point collar and a tailored, slightly fitted cut through the body. Sharp enough for a night out, comfortable enough to wear all evening.",
  },

  // Outerwear
  {
    id: 19,
    name: "Twilight Purple Hoodie",
    slug: "twilight-purple-hoodie",
    price: 34,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/twilight-purple-hoodie.jpg",
    description:
      "A heavyweight fleece hoodie in a deep twilight purple with a lined hood and kangaroo pocket. Brushed on the inside for warmth without the bulk of a full jacket.",
  },
  {
    id: 20,
    name: "Ivory Street Hoodie",
    slug: "ivory-street-hoodie",
    price: 33,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/ivory-street-hoodie.jpg",
    description:
      "A clean ivory hoodie in a mid-weight cotton-poly fleece with a relaxed fit and ribbed cuffs that hold their shape. Simple enough to layer under a jacket, warm enough to wear alone.",
  },
  {
    id: 21,
    name: "Studio Pullover Hoodie",
    slug: "studio-pullover-hoodie",
    price: 32,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/studio-pullover-hoodie.jpg",
    description:
      "A no-fuss pullover hoodie in soft brushed fleece with a double-lined hood and a front pocket sized for your phone and keys. The daily-rotation hoodie built to outlast a season.",
  },
  {
    id: 22,
    name: "Garage Layer Hoodie",
    slug: "garage-layer-hoodie",
    price: 35,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/garage-layer-hoodie.jpg",
    description:
      "A zip-through hoodie designed to layer under a heavier jacket without adding bulk at the shoulders. Ribbed hem and cuffs keep cold air out during transitional weather.",
  },
  {
    id: 23,
    name: "Amber Bee Hoodie",
    slug: "amber-bee-hoodie",
    price: 34,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/amber-bee-hoodie.jpg",
    description:
      "A bold black-and-yellow colorblocked hoodie in heavyweight fleece, built to stand out in a crowd. The oversized hood and dropped shoulder give it genuine streetwear proportions.",
  },
  {
    id: 24,
    name: "Concrete Fleece Hoodie",
    slug: "concrete-fleece-hoodie",
    price: 33,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/concrete-fleece-hoodie.jpg",
    description:
      "A grey marl hoodie in heavyweight loopback fleece with a relaxed fit through the body. A genuine everyday staple that pairs with denim, cargo pants, or joggers without a second thought.",
  },
  {
    id: 25,
    name: "Verdant Zip Hoodie",
    slug: "verdant-zip-hoodie",
    price: 36,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/verdant-zip-hoodie.jpg",
    description:
      "A forest-green hoodie with a sharp, considered fit and a fully lined hood. The deep, saturated tone works as a neutral against black, denim, or camel.",
  },
  {
    id: 26,
    name: "Crimson Bomber Jacket",
    slug: "crimson-bomber-jacket",
    price: 40,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/crimson-bomber-jacket.jpg",
    description:
      "A bold red bomber jacket with a ribbed collar, cuffs, and hem, and a two-way front zip for a streamlined or relaxed fit. Lightweight enough for transitional weather, loud enough to be the whole outfit.",
  },
  {
    id: 27,
    name: "Emerald Bomber Jacket",
    slug: "emerald-bomber-jacket",
    price: 38,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/emerald-bomber-jacket.jpg",
    description:
      "A deep emerald bomber jacket cut from a durable poly-cotton shell with ribbed trims throughout. Two zippered hand pockets keep essentials secure while walking the city.",
  },
  {
    id: 28,
    name: "Ivory Bomber Jacket",
    slug: "ivory-bomber-jacket",
    price: 39,
    category: "Outerwear",
    inStock: true,
    image: "/vergemind/ivory-bomber-jacket.jpg",
    description:
      "A clean off-white bomber jacket with a structured shoulder and a full front zip, built as the neutral outerwear piece that works over almost anything in the closet.",
  },

  // Bottoms
  {
    id: 29,
    name: "Olive Cargo Trousers",
    slug: "olive-cargo-trousers",
    price: 32,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/olive-cargo-trousers.jpg",
    description:
      "Brushed cotton twill cargo trousers in olive with six functional pockets and a tapered leg that avoids the baggy, shapeless cut cargos are sometimes known for. An internal drawcord waist adjusts the fit.",
  },
  {
    id: 30,
    name: "Beige Cargo Sweatpants",
    slug: "beige-cargo-sweatpants",
    price: 30,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/beige-cargo-sweatpants.jpg",
    description:
      "A hybrid cargo-jogger cut from soft brushed fleece with side cargo pockets and a tapered, elasticated ankle cuff. Built for comfort without giving up the utility silhouette.",
  },
  {
    id: 31,
    name: "Utility Cargo Pants",
    slug: "utility-cargo-pants",
    price: 33,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/utility-cargo-pants.jpg",
    description:
      "A durable cotton-blend cargo pant with reinforced knees and six pockets positioned to lie flat when empty. Built for genuine daily wear, not just the look of utility.",
  },
  {
    id: 32,
    name: "Street Cargo Joggers",
    slug: "street-cargo-joggers",
    price: 31,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/street-cargo-joggers.jpg",
    description:
      "A tapered cargo jogger in a technical woven fabric with an elasticated waist and ankle cuffs. Side pockets are deep enough to actually carry your phone without it bouncing while you move.",
  },
  {
    id: 33,
    name: "Ripped Denim Jeans",
    slug: "ripped-denim-jeans",
    price: 34,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/ripped-denim-jeans.jpg",
    description:
      "Straight-leg jeans in a mid-wash denim with subtle distressing at the knee. Cut from a cotton-elastane blend that holds its shape through a full day without feeling restrictive.",
  },
  {
    id: 34,
    name: "Classic Blue Denim",
    slug: "classic-blue-denim",
    price: 32,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/classic-blue-denim.jpg",
    description:
      "A timeless straight-leg jean in a medium-blue wash with a comfortable mid-rise fit. Durable cotton denim with just enough give to move through a full day — a foundational piece for any wardrobe.",
  },
  {
    id: 35,
    name: "Jet Black Denim",
    slug: "jet-black-denim",
    price: 33,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/jet-black-denim.jpg",
    description:
      "A clean black straight-leg jean that holds its deep tone through repeated washing thanks to a reactive dye process. Dresses up with a shirt, dresses down with a tee.",
  },
  {
    id: 36,
    name: "Slim Straight Denim",
    slug: "slim-straight-denim",
    price: 31,
    category: "Bottoms",
    inStock: true,
    image: "/vergemind/slim-straight-denim.jpg",
    description:
      "A slim-straight jean that tapers gently from the knee down without going skinny, cut from a mid-weight denim with just enough stretch to move comfortably through the day.",
  },

  // Knitwear
  {
    id: 37,
    name: "Brick Red Knit Sweater",
    slug: "brick-red-knit-sweater",
    price: 29,
    category: "Knitwear",
    inStock: true,
    image: "/vergemind/brick-red-knit-sweater.jpg",
    description:
      "A relaxed-fit knit sweater in a warm brick-red tone with ribbed cuffs and hem. Mid-weight enough to wear alone on cooler days or layered under a jacket when temperatures drop further.",
  },
  {
    id: 38,
    name: "Espresso Brown Sweater",
    slug: "espresso-brown-sweater",
    price: 28,
    category: "Knitwear",
    inStock: true,
    image: "/vergemind/espresso-brown-sweater.jpg",
    description:
      "A warm espresso-brown crew-neck sweater knitted from a soft cotton-wool blend. The earthy tone pairs naturally with denim, olive, and black without needing to overthink the outfit.",
  },
  {
    id: 39,
    name: "Charcoal Turtleneck",
    slug: "charcoal-turtleneck",
    price: 30,
    category: "Knitwear",
    inStock: true,
    image: "/vergemind/charcoal-turtleneck.jpg",
    description:
      "A fine-gauge charcoal turtleneck that layers cleanly under a bomber or blazer, or stands alone for a clean, minimal look. The fitted neck stays snug without feeling restrictive.",
  },
  {
    id: 40,
    name: "Ivory Turtleneck Knit",
    slug: "ivory-turtleneck-knit",
    price: 30,
    category: "Knitwear",
    inStock: true,
    image: "/vergemind/ivory-turtleneck-knit.jpg",
    description:
      "An ivory turtleneck in a soft, fine-gauge knit built as a versatile base layer for the colder months. Clean enough to wear under a coat for the office, simple enough for a Saturday out.",
  },

  // Footwear
  {
    id: 41,
    name: "Broxx Street Sneakers",
    slug: "broxx-street-sneakers",
    price: 36,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/broxx-street-sneakers.jpg",
    description:
      "A low-top street sneaker built on a durable rubber sole with a padded collar and tongue for genuine all-day comfort. The clean silhouette works with denim, cargo, or joggers.",
  },
  {
    id: 42,
    name: "Adidas Low-Top Sneakers",
    slug: "adidas-low-top-sneakers",
    price: 38,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/adidas-low-top-sneakers.jpg",
    description:
      "A classic low-top sneaker in a grey and black colorway with a durable rubber outsole and a breathable mesh lining. A wardrobe staple built for daily wear.",
  },
  {
    id: 43,
    name: "Sunburst Sneakers",
    slug: "sunburst-sneakers",
    price: 34,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/sunburst-sneakers.jpg",
    description:
      "A bold black sneaker set against a bright colorway sole for genuine standout appeal. Cushioned insole and a lightweight construction keep it comfortable through long days on your feet.",
  },
  {
    id: 44,
    name: "Chicago Retro Sneakers",
    slug: "chicago-retro-sneakers",
    price: 40,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/chicago-retro-sneakers.jpg",
    description:
      "A high-top retro-inspired sneaker in a red, black, and white colorway with a padded ankle collar and durable leather-look upper. The statement shoe that anchors a whole outfit.",
  },
  {
    id: 45,
    name: "Suede Desert Boots",
    slug: "suede-desert-boots",
    price: 37,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/suede-desert-boots.jpg",
    description:
      "Classic desert boots in soft suede with a crepe-effect sole and a two-eyelet lace-up front. Rugged enough for daily wear, clean enough to wear with tailored trousers.",
  },
  {
    id: 46,
    name: "Tan Leather Work Boots",
    slug: "tan-leather-work-boots",
    price: 39,
    category: "Footwear",
    inStock: true,
    image: "/vergemind/tan-leather-work-boots.jpg",
    description:
      "Full-grain tan leather boots with a durable lug outsole and reinforced toe, built to handle daily wear without breaking down. Ages into a richer patina with time and use.",
  },

  // Accessories
  {
    id: 47,
    name: "Nike Air Snapback Cap",
    slug: "nike-air-snapback-cap",
    price: 22,
    category: "Accessories",
    inStock: true,
    image: "/vergemind/nike-air-snapback-cap.jpg",
    description:
      "A structured six-panel snapback with an embroidered front logo and an adjustable snap closure at the back. The finishing piece for a streetwear-forward outfit.",
  },
  {
    id: 48,
    name: "Ovrnightr Trucker Cap",
    slug: "ovrnightr-trucker-cap",
    price: 20,
    category: "Accessories",
    inStock: true,
    image: "/vergemind/ovrnightr-trucker-cap.jpg",
    description:
      "A classic mesh-back trucker cap with a structured foam front panel and an embroidered graphic. Breathable enough for warm days, sturdy enough to hold its shape.",
  },
  {
    id: 49,
    name: "Braided Leather Belt",
    slug: "braided-leather-belt",
    price: 24,
    category: "Accessories",
    inStock: true,
    image: "/vergemind/braided-leather-belt.jpg",
    description:
      "A hand-braided genuine leather belt with a brushed metal buckle, offering more flexibility than a solid-strip belt while staying sturdy enough for daily wear. Darkens attractively with age.",
  },
  {
    id: 50,
    name: "Leather Weekend Backpack",
    slug: "leather-weekend-backpack",
    price: 40,
    category: "Accessories",
    inStock: true,
    image: "/vergemind/leather-weekend-backpack.jpg",
    description:
      "A structured leather backpack with a padded laptop compartment, a secure top-zip closure, and adjustable straps built for genuine daily carry. Ages into a richer character with wear.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getNewArrivals(): Product[] {
  return products.slice(0, 8);
}

export function getBestSellers(): Product[] {
  return products.slice(8, 16);
}

export const CATEGORIES: Product["category"][] = [
  "Tees",
  "Shirts",
  "Outerwear",
  "Bottoms",
  "Knitwear",
  "Footwear",
  "Accessories",
];
